"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-16 bg-gray-100">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Bienvenido a esta Aplicación para crear Guías</h1>
        <p className="text-lg text-gray-700 mt-4">
          Administra tus guías de manera fácil y rápida.
        </p>
      </header>

      <main className="flex flex-col items-center gap-8">
        <p className="text-center text-gray-700 text-xl">
          Gestiona tus guías en un solo lugar
        </p>
        <Link href="/guides">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
            Ir a Guías
          </button>
        </Link>
      </main>

      <footer className="text-center text-gray-600">
        <p className="text-sm">© {new Date().getFullYear()} Mi Aplicación de Guías. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
