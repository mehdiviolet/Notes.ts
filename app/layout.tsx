import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Note App",
  description: "Gestione note con categorie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-gray-50">
        <nav className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 py-4 flex gap-6">
            <Link href="/" className="font-bold text-xl">
              📝 Note App
            </Link>
            <Link href="/notes" className="hover:text-blue-600">
              Note
            </Link>
            <Link href="/categories" className="hover:text-blue-600">
              Categorie
            </Link>
          </div>
        </nav>

        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
