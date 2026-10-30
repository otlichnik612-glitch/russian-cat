import { cityName, course, speakerName } from "./active";
import { seededShuffle } from "./make";
import type { Activity, Lesson, ScriptLine } from "./types";

/** Texts of the printed lesson and flashcards, in the learner's own language. */
const sheetText = {
  en: {
    listenOrRead: "Listen (or read):",
    selectAll: "Select all that apply.",
    trueFalse: "True / False",
    arrange: "Arrange these lines:",
    options: "Options:",
    letters: "Letters:",
    writeWord: "Write the word: ______",
    colA: "Column A",
    colB: "Column B",
    sayAloud: "Say your answer aloud.",
    model: "Model:",
    lesson: (n: number, title: string) => `Lesson ${n} — ${title}`,
    about: (m: number) => `About ${m} minutes`,
    studentCopy: "Student copy. Answers are not included.",
    goal: "Lesson goal",
    vocab: "Vocabulary Focus",
    note: "Note",
    newLetters: "New letters",
    dialogue: (t: string) => `Dialogue: ${t}`,
    grammar: "Grammar Focus",
    practice: "Practice",
    front: "FRONT",
    fold: "fold",
    back: "BACK",
    cardsHeader: (n: number) => `Talky Kitty  ·  Lesson ${n} flashcards  ·  Cut on the dashed line  ·  Fold on the center line`,
    file: "Talky-Kitty-Lesson",
    cardsFile: "Flashcards",
  },
  ru: {
    listenOrRead: "Послушай (или прочитай):",
    selectAll: "Выбери все подходящие ответы.",
    trueFalse: "Правда / Неправда",
    arrange: "Расставь строки по порядку:",
    options: "Варианты:",
    letters: "Буквы:",
    writeWord: "Напиши слово: ______",
    colA: "Столбец А",
    colB: "Столбец Б",
    sayAloud: "Ответь вслух.",
    model: "Пример:",
    lesson: (n: number, title: string) => `Урок ${n} — ${title}`,
    about: (m: number) => `Около ${m} минут`,
    studentCopy: "Для ученика. Ответов здесь нет.",
    goal: "Цели урока",
    vocab: "Новые слова",
    note: "Заметка",
    newLetters: "Новые буквы",
    dialogue: (t: string) => `Диалог: ${t}`,
    grammar: "Грамматика",
    practice: "Практика",
    front: "ЛИЦО",
    fold: "сгиб",
    back: "ОБОРОТ",
    cardsHeader: (n: number) => `Talky Kitty  ·  Карточки урока ${n}  ·  Разрежь по пунктиру  ·  Согни по средней линии`,
    file: "Talky-Kitty-Lesson",
    cardsFile: "Cards",
  },
};
const t = () => sheetText[course.uiLang];

function saveBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // iPhone reads the file a moment after the tap, so the link must stay valid for a while.
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
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
  if (activity.audio) lines.push(`${t().listenOrRead} ${activity.audio}`);
  switch (activity.kind) {
    case "choice":
    case "multi":
      if (activity.kind === "multi") lines.push(t().selectAll);
      activity.options.forEach((option, index) => {
        lines.push(`${String.fromCharCode(65 + index)}. ${option.label}`);
      });
      break;
    case "truefalse":
      lines.push(activity.statement, t().trueFalse);
      break;
    case "order":
      lines.push(t().arrange);
      seededShuffle(activity.items, `${activity.id}-sheet`).forEach((item) => lines.push(`• ${item}`));
      break;
    case "fill":
      lines.push(
        activity.tight
          ? `${activity.before}_${activity.after}`
          : `${activity.before} ______ ${activity.after}`.trim().replace(/ ([.,!?»])/g, "$1"),
      );
      lines.push(`${t().options} ${activity.options.join(" · ")}`);
      break;
    case "build":
      lines.push(seededShuffle(activity.words, `${activity.id}-sheet`).join(" / "));
      break;
    case "spell":
      lines.push(
        `${t().letters} ${seededShuffle([...Array.from(activity.word), ...(activity.extra ?? [])], `${activity.id}-sheet`).join(" ")}`,
        t().writeWord,
      );
      break;
    case "match": {
      lines.push(t().colA);
      activity.pairs.forEach((pair) => lines.push(`• ${pair.left}`));
      lines.push(t().colB);
      seededShuffle(
        activity.pairs.map((pair) => pair.right),
        `${activity.id}-sheet`,
      ).forEach((right) => lines.push(`• ${right}`));
      break;
    }
    case "speak":
      lines.push(t().sayAloud, `${t().model} ${activity.model}`, activity.modelEn);
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

  const text = t();
  const title = text.lesson(lesson.number, lesson.title);
  push(title, [lesson.level, cityName(lesson.cityId), text.about(lesson.minutes), text.studentCopy]);
  push(text.goal, lesson.goals.map((goal) => `• ${goal}`));
  push(
    text.vocab,
    lesson.vocab.flatMap((item, index) => [
      `${index + 1}. ${item.ru}${item.translit ? `  (${item.translit})` : ""}`,
      item.en,
      "",
    ]),
  );
  if (lesson.vocabNote) push(text.note, [lesson.vocabNote]);
  if (lesson.letters?.length) {
    push(
      text.newLetters,
      lesson.letters.flatMap((card) => [
        `${card.letter} — ${card.sound}`,
        `${card.example} (${card.exampleEn})`,
        ...(card.trap ? [card.trap] : []),
        "",
      ]),
    );
  }
  push(text.dialogue(lesson.dialogue.title), [
    ...lesson.dialogue.lines.flatMap((line) => {
      const { name, target: ruName } = speakerName(line.speaker);
      return [`${ruName}: ${line.ru}`, `${name}: ${line.en}`];
    }),
    ...(lesson.dialogue.note ? ["", lesson.dialogue.note] : []),
    "",
    ...activityText(lesson.dialogue.gist),
  ]);
  push(
    text.grammar,
    lesson.grammar.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.examples?.flatMap((example) => [example.ru, example.en]) ?? []),
      "",
    ]),
  );
  push(
    text.practice,
    lesson.tasks.flatMap((item, index) => [`${index + 1}.`, ...activityText(item), ""]),
  );

  const children = blocks.flatMap(([heading, ...body]) => [
    new Paragraph({
      heading: heading === title ? HeadingLevel.HEADING_1 : HeadingLevel.HEADING_2,
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
  saveBlob(blob, `${text.file}-${lesson.number}${slug(lesson.title) ? `-${slug(lesson.title)}` : ""}.docx`);
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
    pdf.text(t().front, x + 3, y + 5);
    pdf.text(t().fold, x + cardW / 2 - 4, mid - 1.5);
    pdf.text(t().back, x + 3, mid + 5);

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
      const header = t().cardsHeader(lesson.number);
      pdf.text(pdf.splitTextToSize(header, 186) as string[], margin, 8);
    }
  });

  // Not pdf.save(): on iPhone it opens an extra web page next to the download. Only the file is saved.
  saveBlob(pdf.output("blob"), `${t().file}-${lesson.number}-${t().cardsFile}.pdf`);
}
