"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { fetchGuideById, updateGuide } from "../../../services/guidesService";

const EditGuidePage = () => {
  const [form, setForm] = useState({ cost: "", couriers: "" });
  const [file, setFile] = useState(null);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const loadGuide = async () => {
      try {
        const response = await fetchGuideById(id);
        const { cost, couriers } = response.data;
        setForm({ cost, couriers });
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Guarda el archivo seleccionado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("cost", form.cost);
    formData.append("couriers", form.couriers);
    if (file) {
      formData.append("guide_pdf", file); // Agrega el archivo si se seleccionó
    }

    try {
      await updateGuide(id, formData); // Envía el formulario como FormData
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
            Archivo PDF (opcional)
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded"
            />
            {file && (
              <p className="text-sm text-gray-600 mt-2">
                Archivo seleccionado: <span className="font-medium">{file.name}</span>
              </p>
            )}
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