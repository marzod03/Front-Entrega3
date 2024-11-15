"use client";

import { useEffect, useState } from 'react';
import { fetchGuides, deleteGuide } from '../../services/guidesService';
import Link from 'next/link';

const GuidesPage = () => {
  const [guides, setGuides] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const loadGuides = async () => {
      const response = await fetchGuides();
      setGuides(response.data);
    };
    loadGuides();
  }, []);

  if (!isClient) {
    return null;
  }

  const handleDelete = async (id) => {
    if (confirm("¿Estás seguro de que quieres eliminar esta guía?")) {
      await deleteGuide(id);
      setGuides(guides.filter((guide) => guide.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Mi Aplicación de Guías</h1>
      <h2 className="text-2xl font-semibold text-center mb-4">Guías</h2>
      <div className="flex justify-center mb-6">
        <Link href="/guides/create">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
            Generar Guía
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left font-semibold">Costo</th>
              <th className="py-3 px-6 text-left font-semibold">PDF (URL)</th>
              <th className="py-3 px-6 text-left font-semibold">Courier</th>
              <th className="py-3 px-6 text-center font-semibold">Modificar</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {guides.map((guide) => (
              <tr key={guide.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left font-medium text-gray-900">${guide.cost}</td>
                <td className="py-3 px-6 text-left">
                  <a
                    href={guide.guide_pdf}
                    className="text-blue-500 hover:text-blue-700 underline transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver PDF
                  </a>
                </td>
                <td className="py-3 px-6 text-left font-medium text-gray-900">{guide.couriers}</td>
                <td className="py-3 px-6 text-center flex justify-center space-x-2">
                  <Link href={`/guides/${guide.id}`}>
                    <button className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition-all duration-300">
                      ✏️
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(guide.id)}
                    className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-all duration-300"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GuidesPage;
