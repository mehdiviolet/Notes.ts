import { Category, Note } from "@prisma/client";
import z from "zod";

export const categorySchema = z.object({
  name: z.string().min(1, "nome richiesto").max(50, "Massimo 50"),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Colore non valido"),
});

export const noteSchema = z.object({
  title: z.string().min(1, "Titolo richiesto").max(100),
  content: z.string().min(1, "Contenuto richiesto"),
  categoryId: z.string().min(1, "Categoria richiesta"),
  coverUrl: z.string().default("").optional(), // 👈 Default stringa vuota
});

export type InputCategory = z.infer<typeof categorySchema>;

export type NoteInput = z.infer<typeof noteSchema>;

export type CategoryWithNotes = Category & {
  noteCount: number;
};
