import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetch } from 'src/services';
import type { CastData, Cast } from '@types';
import Credits from '../components/cast/Cast';

const CastPage = () => {
  const [credits, setCredits] = useState<Cast[] | null>(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      const response = await fetch({ type: 'credits', movie_id: movieId });
      const { cast } = response as CastData;
      setCredits(cast);
    };
    fetchCast();
  }, []);

  return <div className='mt-2'>{credits && <Credits credits={credits} />}</div>;
};

export default CastPage;
