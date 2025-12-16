const fakeCategories = [
  { id: "1", name: "Lavoro", color: "#3b82f6", noteCount: 8 },
  { id: "2", name: "Personale", color: "#10b981", noteCount: 5 },
  { id: "3", name: "Progetti", color: "#8b5cf6", noteCount: 3 },
];

export default function CategoriesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Categorie</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Nuova Categoria</h2>
          <form className="bg-white p-6 rounded-lg border space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                placeholder="Lavoro, Personale..."
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Colore</label>
              <input
                type="color"
                defaultValue="#6366f1"
                className="w-full h-10 border rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Crea Categoria
            </button>
          </form>
        </div>

        {/* Lista */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Le tue categorie ({fakeCategories.length})
          </h2>
          <div className="space-y-2">
            {fakeCategories.map((cat) => (
              <div
                key={cat.id}
                className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
                  <div>
                    <p className="font-medium">{cat.name}</p>
                    <p className="text-sm text-gray-500">
                      {cat.noteCount} note
                    </p>
                  </div>
                </div>

                <button className="text-red-600 hover:text-red-700 px-3 py-1">
                  Elimina
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
