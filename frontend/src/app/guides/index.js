import { useEffect, useState } from 'react';
import { fetchGuides, deleteGuide } from '../../services/guidesService';
import { useRouter } from 'next/router';

const GuidesPage = () => {
  const [guides, setGuides] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadGuides = async () => {
      const response = await fetchGuides();
      setGuides(response.data);
    };
    loadGuides();
  }, []);

  return (
    <div>
      <h1>Lista de Guías</h1>
      <ul>
        {guides.map(guide => (
          <li key={guide.id}>{guide.guide_pdf}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuidesPage;
