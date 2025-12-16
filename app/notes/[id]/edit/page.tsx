import Link from "next/link";

const fakeCategories = [
  { id: "1", name: "Lavoro", color: "#3b82f6" },
  { id: "2", name: "Personale", color: "#10b981" },
  { id: "3", name: "Progetti", color: "#8b5cf6" },
];

const fakeNote = {
  id: "1",
  title: "Riunione progetto Q1",
  content: "Discutere roadmap e milestone...",
  categoryId: "1",
  coverUrl: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=400",
};

export default function EditNotePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        href={`/notes/${fakeNote.id}`}
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Annulla
      </Link>

      <h1 className="text-3xl font-bold mb-8">Modifica Nota</h1>

      <form className="bg-white rounded-lg border p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Titolo *</label>
          <input
            type="text"
            defaultValue={fakeNote.title}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Categoria *</label>
          <select
            defaultValue={fakeNote.categoryId}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
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
            defaultValue={fakeNote.content}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Cover Image</label>
          {fakeNote.coverUrl && (
            <div className="mb-3">
              <img
                src={fakeNote.coverUrl}
                alt="Current cover"
                className="w-48 h-32 object-cover rounded"
              />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Salva Modifiche
          </button>
          <Link
            href={`/notes/${fakeNote.id}`}
            className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100"
          >
            Annulla
          </Link>
        </div>
      </form>
    </div>
  );
}
