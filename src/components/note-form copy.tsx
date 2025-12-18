"use client";

import Link from "next/link";
import React from "react";
import { CategoryWithNotes, NoteInput, noteSchema } from "../lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNote } from "../actions/note-action";

export default function NoteFormPage({
  categories,
}: {
  categories: CategoryWithNotes[];
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NoteInput>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      title: "",
      content: "",
      categoryId: "",
      coverUrl: undefined,
    },
  });

  const onSubForm = async (data: NoteInput) => {
    const result = await createNote(data);
    if (result.success) {
      console.log("ok....");
    }
    if (!result.success) return <p>no...</p>;
  };

  return (
    <form
      className="bg-white rounded-lg border p-8 space-y-6"
      onSubmit={handleSubmit(onSubForm)}
    >
      <div>
        <label className="block text-sm font-medium mb-2">Titolo *</label>
        <input
          {...register("title")}
          type="text"
          placeholder="Inserisci il titolo..."
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Categoria *</label>
        <select
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          {...register("categoryId")}
        >
          <option value="">Seleziona categoria...</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Contenuto *</label>
        <textarea
          rows={10}
          placeholder="Scrivi il contenuto della nota..."
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          {...register("content")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Cover Image (opzionale)
        </label>
        <input
          type="file"
          accept="image/*"
          className="w-full px-4 py-2 border rounded-lg"
          {...register("coverUrl")}
        />
        <p className="text-sm text-gray-500 mt-1">Formato: JPG, PNG, max 5MB</p>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Crea Nota
        </button>
        <Link
          href="/notes"
          className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100"
        >
          Annulla
        </Link>
      </div>
    </form>
  );
}
