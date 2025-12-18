"use server";

import { Note } from "@prisma/client";
import { NoteWithCategory, Result } from "../lib/types";
import prisma from "@/prisma/prisma";
import { NoteInput, noteSchema } from "../lib/validation";
import { revalidatePath } from "next/cache";

export const getNotes = async (): Promise<Result<NoteWithCategory[]>> => {
  try {
    const notes = await prisma.note.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        category: {
          select: {
            id: true,
            color: true,
            name: true,
            createdAt: true,
          },
        },
      },
    });
    return { success: true, data: notes };
  } catch (err) {
    return { success: false, error: "..." };
  }
};

//Create note

export const createNote = async (data: NoteInput): Promise<Result<Note>> => {
  try {
    const validate = noteSchema.parse(data);
    const result = await prisma.note.create({
      data: {
        title: validate.title,
        content: validate.content,
        categoryId: validate.categoryId,
        coverUrl: validate.coverUrl || null, // 👈 Converti undefined in null
      },
    });
    revalidatePath("/notes");
    return { success: true, data: result };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Not created!" };
  }
};
