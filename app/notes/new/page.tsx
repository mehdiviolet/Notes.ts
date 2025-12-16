import Link from "next/link";

const fakeCategories = [
  { id: "1", name: "Lavoro", color: "#3b82f6" },
  { id: "2", name: "Personale", color: "#10b981" },
  { id: "3", name: "Progetti", color: "#8b5cf6" },
];

export default function NewNotePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/notes"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Annulla
      </Link>

      <h1 className="text-3xl font-bold mb-8">Nuova Nota</h1>

      <form className="bg-white rounded-lg border p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Titolo *</label>
          <input
            type="text"
            placeholder="Inserisci il titolo..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Categoria *</label>
          <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="">Seleziona categoria...</option>
            {fakeCategories.map((cat) => (
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
          />
          <p className="text-sm text-gray-500 mt-1">
            Formato: JPG, PNG, max 5MB
          </p>
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
    </div>
  );
}
