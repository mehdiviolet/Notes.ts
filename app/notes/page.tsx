import Link from "next/link";

// Dati fake per ora
const fakeNotes = [
  {
    id: "1",
    title: "Riunione progetto Q1",
    content: "Discutere roadmap e milestone...",
    coverUrl: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=400",
    category: { name: "Lavoro", color: "#3b82f6" },
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Lista spesa",
    content: "Latte, pane, pasta, pomodori...",
    coverUrl: null,
    category: { name: "Personale", color: "#10b981" },
    createdAt: "2024-01-14",
  },
  {
    id: "3",
    title: "Idee app mobile",
    content: "Feature da implementare nella prossima versione...",
    coverUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
    category: { name: "Progetti", color: "#8b5cf6" },
    createdAt: "2024-01-13",
  },
];

const fakeCategories = [
  { id: "1", name: "Tutte", color: "#6b7280" },
  { id: "2", name: "Lavoro", color: "#3b82f6" },
  { id: "3", name: "Personale", color: "#10b981" },
  { id: "4", name: "Progetti", color: "#8b5cf6" },
];

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
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {fakeCategories.map((cat) => (
          <button
            key={cat.id}
            className="px-4 py-2 rounded-full border hover:bg-gray-100 whitespace-nowrap"
          >
            <span
              className="inline-block w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: cat.color }}
            />
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid note */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fakeNotes.map((note) => (
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
                  style={{ backgroundColor: note.category.color }}
                />
                <span className="text-sm text-gray-600">
                  {note.category.name}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">{note.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {note.content}
              </p>
              <p className="text-xs text-gray-400 mt-3">{note.createdAt}</p>
            </div>
          </Link>
        ))}
      </div>

      {fakeNotes.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          <p className="text-xl mb-4">Nessuna nota ancora</p>
          <Link href="/notes/new" className="text-blue-600 hover:underline">
            Crea la tua prima nota
          </Link>
        </div>
      )}
    </div>
  );
}
