import React from "react";
import { getNotes } from "../actions/note-action";
import Link from "next/link";

export default async function NoteGrid() {
  const { success, data: categories } = await getNotes();

  if (!success) return <p>wai..</p>;

  if (categories.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p className="text-xl mb-4">Nessuna nota ancora</p>
        <Link href="/notes/new" className="text-blue-600 hover:underline">
          Crea la tua prima nota
        </Link>
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((note) => (
        <Link
          key={note.id}
          href={`/notes/${note.id}`}
          className="bg-white rounded-lg border hover:shadow-lg transition overflow-hidden"
        >
          {note.coverUrl && (
            <img
              src={note.coverUrl}
              alt={note.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-3 h-3 rounded-full"
                // style={{ backgroundColor: note.category.color }}
                style={{ backgroundColor: note.category.color }}
              />
              <span className="text-sm text-gray-600">
                {note.category.name}
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2">{note.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{note.content}</p>
            <p className="text-xs text-gray-400 mt-3">
              {note.createdAt.toDateString()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
