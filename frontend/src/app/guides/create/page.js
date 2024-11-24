"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createGuide } from '../../../services/guidesService';

const CreateGuidePage = () => {
  const [form, setForm] = useState({ cost: '', couriers: '' });
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Guarda el archivo seleccionado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('cost', form.cost);
    formData.append('couriers', form.couriers);
    formData.append('guide_pdf', file);

    await createGuide(formData); // Envía FormData al backend
    router.push('/guides');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Agregar Guía</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 mb-2">
            Archivo PDF
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
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
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGuidePage;
