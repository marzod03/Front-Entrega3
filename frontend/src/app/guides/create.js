import { useState } from 'react';
import { useRouter } from 'next/router';
import { createGuide } from '../../services/guidesService';

const CreateGuidePage = () => {
  const [form, setForm] = useState({ cost: '', guide_pdf: '', couriers: '' });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createGuide(form);
    router.push('/guides');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Crear Guía</h1>
      <label>
        Costo:
        <input type="number" name="cost" value={form.cost} onChange={handleChange} />
      </label>
      <label>
        URL del PDF:
        <input type="text" name="guide_pdf" value={form.guide_pdf} onChange={handleChange} />
      </label>
      <label>
        Paquetería:
        <input type="number" name="couriers" value={form.couriers} onChange={handleChange} />
      </label>
      <button type="submit">Guardar Guía</button>
    </form>
  );
};

export default CreateGuidePage;
