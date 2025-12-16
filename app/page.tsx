import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold mb-4">Organizza le tue note</h1>
      <p className="text-xl text-gray-600 mb-8">
        Crea, organizza e gestisci le tue note con categorie e immagini
      </p>

      <div className="flex gap-4 justify-center mb-16">
        <Link
          href="/notes"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Vedi le note
        </Link>
        <Link
          href="/categories"
          className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100"
        >
          Gestisci categorie
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-left">
        <div className="bg-white p-6 rounded-lg border">
          <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
          <div className="text-gray-600">Note totali</div>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <div className="text-3xl font-bold text-green-600 mb-2">4</div>
          <div className="text-gray-600">Categorie</div>
        </div>
        <div className="bg-white p-6 rounded-lg border">
          <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
          <div className="text-gray-600">Questa settimana</div>
        </div>
      </div>
    </div>
  );
}
