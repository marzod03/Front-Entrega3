"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchGuideById, updateGuide } from '../../../services/guidesService';

const EditGuidePage = ({ params }) => {
  const { id } = params; // Extrae el id desde los parámetros de la ruta
  const [form, setForm] = useState({ cost: '', guide_pdf: '', couriers: '' });
  const router = useRouter();

  useEffect(() => {
    const loadGuide = async () => {
      const response = await fetchGuideById(id);
      setForm(response.data); // Carga los datos de la guía en el formulario
    };
    loadGuide();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateGuide(id, form);
    router.push('/guides'); // Redirige a la lista de guías después de la edición
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Editaaaaaaaaaaaaaaaaaaaaaaar Guía</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 mb-2">
            URL de la Guía
            <input
              type="text"
              name="guide_pdf"
              value={form.guide_pdf}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
              placeholder="https://example.com/guia.pdf"
            />
          </label>
          <label className="block text-gray-700 mb-2">
            Costo de la Guía
            <input
              type="number"
              name="cost"
              value={form.cost}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
              placeholder="Ej: 50.00"
            />
          </label>
          <label className="block text-gray-700 mb-2">
            Paquetería
            <input
              type="text"
              name="couriers"
              value={form.couriers}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
              placeholder="Ej: Fedex"
            />
          </label>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditGuidePage;
