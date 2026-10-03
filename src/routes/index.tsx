import { createFileRoute } from "@tanstack/react-router";
import { RussianCatApp } from "@/components/cat/app";

export const Route = createFileRoute("/")({ component: RussianCatApp });
