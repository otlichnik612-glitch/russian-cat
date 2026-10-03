import { seededShuffle } from "./make";
import type { Activity, Lesson, ScriptLine } from "./types";

function saveBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function slug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function activityText(activity: Activity): string[] {
  const lines: string[] = [activity.prompt];
  if (activity.help) lines.push(activity.help);
  switch (activity.kind) {
    case "choice":
    case "multi":
      if (activity.kind === "multi") lines.push("Select all that apply.");
      activity.options.forEach((option, index) => {
        lines.push(`${String.fromCharCode(65 + index)}. ${option.label}`);
      });
      break;
    case "truefalse":
      lines.push(activity.statement, "True / False");
      break;
    case "order":
      lines.push("Arrange these lines:");
      seededShuffle(activity.items, `${activity.id}-sheet`).forEach((item) => lines.push(`• ${item}`));
      break;
    case "fill":
      lines.push(`${activity.before} ______ ${activity.after}`.trim());
      lines.push(`Options: ${activity.options.join(" · ")}`);
      break;
    case "build":
      lines.push(seededShuffle(activity.words, `${activity.id}-sheet`).join(" / "));
      break;
    case "match": {
      lines.push("Column A");
      activity.pairs.forEach((pair) => lines.push(`• ${pair.left}`));
      lines.push("Column B");
      seededShuffle(
        activity.pairs.map((pair) => pair.right),
        `${activity.id}-sheet`,
      ).forEach((right) => lines.push(`• ${right}`));
      break;
    }
    case "speak":
      lines.push("Say your answer aloud.", `Model: ${activity.model}`, activity.modelEn);
      break;
    case "script":
      activity.lines.forEach((scriptLine) => lines.push(scriptLineText(scriptLine)));
      break;
    default:
      break;
  }
  return lines;
}

function scriptLineText(line: ScriptLine) {
  if ("text" in line) return `${line.speaker}: ${line.text}`;
  return `${line.speaker}: ______    (${line.options.join(" / ")})`;
}

export async function downloadLessonDoc(lesson: Lesson) {
  const { Document, Packer, Paragraph, TextRun, HeadingLevel } = await import("docx");
  const blocks: string[][] = [];
  const push = (heading: string, body: string[]) => blocks.push([heading, ...body]);

  push(`Lesson ${lesson.number} — ${lesson.title}`, [
    lesson.level,
    "Paris",
    `About ${lesson.minutes} minutes`,
    "Student copy. Answers are not included.",
  ]);
  push("Lesson goal", lesson.goals.map((goal) => `• ${goal}`));
  push(
    "Vocabulary Focus",
    lesson.vocab.flatMap((item, index) => [`${index + 1}. ${item.ru}`, item.en, ""]),
  );
  if (lesson.vocabNote) push("Note", [lesson.vocabNote]);
  push(
    "Vocabulary practice",
    lesson.miniCheck.flatMap((item, index) => [`${index + 1}.`, ...activityText(item), ""]),
  );
  push(`Dialogue: ${lesson.dialogue.title}`, [
    ...lesson.dialogue.lines.flatMap((line) => {
      const name = line.speaker === "tom" ? "Tom" : "Murzik";
      const ruName = line.speaker === "tom" ? "Том" : "Мурзик";
      return [`${ruName}: ${line.ru}`, `${name}: ${line.en}`];
    }),
    ...(lesson.dialogue.note ? ["", lesson.dialogue.note] : []),
  ]);
  push(
    "Comprehension",
    lesson.comprehension.flatMap((item, index) => [`${index + 1}.`, ...activityText(item), ""]),
  );
  push(
    "Grammar Focus",
    lesson.grammar.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.examples?.flatMap((example) => [example.ru, example.en]) ?? []),
      "",
    ]),
  );
  push(
    "Grammar practice",
    lesson.grammarPractice.flatMap((item, index) => [`${index + 1}.`, ...activityText(item), ""]),
  );
  push("Speaking practice", [
    lesson.speakingIntro ?? "Say the answers aloud.",
    ...lesson.speaking.flatMap((item, index) => [`${index + 1}.`, ...activityText(item), ""]),
  ]);
  if (lesson.context?.length) {
    push("Context practice", [
      lesson.contextIntro ?? "",
      ...lesson.context.flatMap((item, index) => [`${index + 1}.`, ...activityText(item), ""]),
    ]);
  }
  push(
    "Review",
    lesson.review.flatMap((item, index) => [`${index + 1}.`, ...activityText(item), ""]),
  );

  const children = blocks.flatMap(([heading, ...body]) => [
    new Paragraph({
      heading: heading.startsWith("Lesson ") ? HeadingLevel.HEADING_1 : HeadingLevel.HEADING_2,
      spacing: { before: 280, after: 120 },
      children: [new TextRun(heading)],
    }),
    ...body.filter((line) => line !== undefined).map(
      (line) =>
        new Paragraph({
          spacing: { after: 80 },
          children: [new TextRun(line)],
        }),
    ),
  ]);

  const doc = new Document({ sections: [{ children }] });
  const blob = await Packer.toBlob(doc);
  saveBlob(blob, `Russian-Cat-Lesson-${lesson.number}-${slug(lesson.title)}.docx`);
}

function bufferToBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

async function loadImage(src: string) {
  const response = await fetch(src);
  if (!response.ok) return null;
  const blob = await response.blob();
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("image"));
    reader.readAsDataURL(blob);
  });
  return dataUrl;
}

export async function downloadFlashcards(lesson: Lesson) {
  const { jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  const regular = bufferToBase64(await (await fetch("/fonts/DejaVuSans.ttf")).arrayBuffer());
  const bold = bufferToBase64(await (await fetch("/fonts/DejaVuSans-Bold.ttf")).arrayBuffer());
  pdf.addFileToVFS("DejaVuSans.ttf", regular);
  pdf.addFont("DejaVuSans.ttf", "DejaVu", "normal");
  pdf.addFileToVFS("DejaVuSans-Bold.ttf", bold);
  pdf.addFont("DejaVuSans-Bold.ttf", "DejaVu", "bold");

  const images = await Promise.all(lesson.vocab.map((item) => loadImage(item.image)));
  const margin = 12;
  const gap = 6;
  const cols = 2;
  const rows = 2;
  const cardW = (210 - margin * 2 - gap) / cols;
  const cardH = (297 - margin * 2 - 14 - gap) / rows;

  lesson.vocab.forEach((item, index) => {
    if (index > 0 && index % 4 === 0) pdf.addPage();
    const slot = index % 4;
    const col = slot % cols;
    const row = Math.floor(slot / cols);
    const x = margin + col * (cardW + gap);
    const y = margin + 10 + row * (cardH + gap);
    const mid = y + cardH / 2;

    pdf.setDrawColor(154, 52, 24);
    pdf.setLineWidth(0.3);
    pdf.setLineDashPattern([1.4, 1.2], 0);
    pdf.rect(x, y, cardW, cardH);
    pdf.line(x, mid, x + cardW, mid);

    pdf.setFont("DejaVu", "normal");
    pdf.setFontSize(8);
    pdf.setTextColor(92, 83, 72);
    pdf.text("FRONT", x + 3, y + 5);
    pdf.text("fold", x + cardW / 2 - 4, mid - 1.5);
    pdf.text("BACK", x + 3, mid + 5);

    const picture = images[index];
    if (picture) {
      try {
        pdf.addImage(picture, "JPEG", x + 8, y + 7, cardW - 16, cardH / 2 - 22);
      } catch {
        // A missing picture still leaves a printable card.
      }
    }
    pdf.setFont("DejaVu", "bold");
    pdf.setFontSize(12);
    pdf.setTextColor(28, 23, 18);
    const english = pdf.splitTextToSize(item.en, cardW - 8) as string[];
    pdf.text(english, x + 4, mid - 8);

    pdf.setFontSize(16);
    const russian = pdf.splitTextToSize(item.ru, cardW - 8) as string[];
    pdf.text(russian, x + 4, mid + 16);

    if (slot === 0) {
      pdf.setFont("DejaVu", "normal");
      pdf.setFontSize(9);
      pdf.setTextColor(28, 23, 18);
      const header = `Russian Cat  ·  Lesson ${lesson.number} flashcards  ·  Cut on the dashed line  ·  Fold on the center line`;
      pdf.text(pdf.splitTextToSize(header, 186) as string[], margin, 8);
    }
  });

  pdf.save(`Russian-Cat-Lesson-${lesson.number}-Flashcards.pdf`);
}
