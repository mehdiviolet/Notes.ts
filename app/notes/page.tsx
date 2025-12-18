import CategoryFilters from "@/src/components/category-filters";
import NoteGrid from "@/src/components/note-grid";
import Link from "next/link";
import { Suspense } from "react";

export default function NotesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Le tue note</h1>
        <Link
          href="/notes/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Nuova nota
        </Link>
      </div>

      {/* Filtro categorie */}
      <Suspense fallback={<p className="h-12 mb-6">waiting...</p>}>
        <CategoryFilters />
      </Suspense>
      {/* Grid note */}
      <Suspense fallback={<p className="h-12 mb-6">waiting...</p>}>
        <NoteGrid />
      </Suspense>
    </div>
  );
}
