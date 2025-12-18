import { getCategory } from "@/src/actions/category-action";
import CategoriesForm from "@/src/components/categories-form";
import CategoriesList from "@/src/components/categories-list";

export default async function CategoriesPage() {
  const { success, data } = await getCategory();

  // ✅ Gestisci errore subito
  if (!success) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Categorie</h1>
        <p className="text-red-600">Errore nel caricamento delle categorie</p>
      </div>
    );
  }

  // Da qui in poi TypeScript sa che result.success è true
  // e result.data è Category[]
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Categorie</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Nuova Categoria</h2>
          <CategoriesForm />
        </div>
        <CategoriesList categories={data} />
      </div>
    </div>
  );
}
