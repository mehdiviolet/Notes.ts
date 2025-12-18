"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CategoryWithNotes, NoteInput, noteSchema } from "../lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNote } from "../actions/note-action";
import { uploadImage } from "../lib/upload";
import { useRouter } from "next/navigation";

export default function NoteFormPage({
  categories,
}: {
  categories: CategoryWithNotes[];
}) {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
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

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const url = await uploadImage(file);

    if (url) {
      setValue("coverUrl", url);
      setPreview(url);
    }
    setUploading(false);
  };

  const onSubForm = async (data: NoteInput) => {
    const result = await createNote(data);
    if (result.success) {
      console.log("ok....");
    }
    if (result.success) return router.push("/notes");
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
        <label className="block text-sm font-medium mb-2">Cover Image</label>
        {preview && (
          <div className="mb-3">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
            {/* <Image src={preview} alt="preview" width={20} height={20} /> */}
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="w-full px-4 py-2 border rounded-lg"
        />
        {uploading && (
          <p className="text-sm text-gray-500 mt-1">Caricamento...</p>
        )}
      </div>

      <div className="flex gap-3 pt-4">
        <button
          disabled={isSubmitting || uploading}
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          {/* {isSubmitting
            ? "Salvataggio..."
            : note
            ? "Salva Modifiche"
            : "Crea Nota"} */}{" "}
          kkk
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
