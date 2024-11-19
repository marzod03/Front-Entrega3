"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { fetchGuideById, updateGuide } from "../../../services/guidesService";

const EditGuidePage = () => {
  const [form, setForm] = useState({ cost: "", guide_pdf: "", couriers: "" });
  const router = useRouter();
  const { id } = useParams(); // Asegúrate de que useParams esté funcionando correctamente

  useEffect(() => {
    if (!id) return; // Si el id no está disponible, no intenta cargar datos
    const loadGuide = async () => {
      try {
        const response = await fetchGuideById(id);
        setForm(response.data);
      } catch (error) {
        console.error("Error al cargar la guía:", error);
      }
    };
    loadGuide();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateGuide(id, form);
      router.push("/guides");
    } catch (error) {
      console.error("Error al actualizar la guía:", error);
    }
  };

  if (!form) {
    return <p className="text-center text-red-500">Cargando datos...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Editar Guía</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 mb-2">
            Costo
            <input
              type="number"
              name="cost"
              value={form.cost}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
              placeholder="Ej: 75.00"
              required
            />
          </label>
          <label className="block text-gray-700 mb-2">
            URL del PDF
            <input
              type="text"
              name="guide_pdf"
              value={form.guide_pdf}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
              placeholder="https://example.com/pdf/guide.pdf"
              required
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
              placeholder="Ej: 1-13"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
          >
            Actualizar Guía
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditGuidePage;
