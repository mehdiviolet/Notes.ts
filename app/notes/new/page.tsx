import { getCategory } from "@/src/actions/category-action";
import NoteFormPage from "@/src/components/note-form";
import Link from "next/link";

export default async function NewNotePage() {
  const { success, data: categories } = await getCategory();

  if (!success) {
    return <p>Errore caricamento categorie</p>;
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/notes"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Annulla
      </Link>

      <h1 className="text-3xl font-bold mb-8">Nuova Nota</h1>

      <NoteFormPage categories={categories} />
    </div>
  );
}
