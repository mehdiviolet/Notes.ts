import Link from "next/link";

// Dati fake
const fakeNote = {
  id: "1",
  title: "Riunione progetto Q1",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  coverUrl: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=800",
  category: { name: "Lavoro", color: "#3b82f6" },
  createdAt: "15 Gen 2024",
  updatedAt: "16 Gen 2024",
};

export default function NoteDetailPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/notes"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Torna alle note
      </Link>

      {fakeNote.coverUrl && (
        <img
          src={fakeNote.coverUrl}
          alt={fakeNote.title}
          className="w-full h-80 object-cover rounded-lg mb-6"
        />
      )}

      <div className="bg-white rounded-lg border p-8">
        <div className="flex items-center gap-2 mb-4">
          <span
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: fakeNote.category.color }}
          />
          <span className="text-sm font-medium">{fakeNote.category.name}</span>
          <span className="text-gray-400 text-sm ml-auto">
            Creato: {fakeNote.createdAt}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-6">{fakeNote.title}</h1>

        <div className="prose max-w-none mb-8">
          {fakeNote.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex gap-3 pt-6 border-t">
          <Link
            href={`/notes/${fakeNote.id}/edit`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Modifica
          </Link>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Elimina
          </button>
        </div>
      </div>
    </div>
  );
}
