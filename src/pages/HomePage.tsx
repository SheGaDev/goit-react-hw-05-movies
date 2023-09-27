import { useState, useEffect } from 'react';
import { fetch } from 'src/services';
import type { MergeTrendingData, TrendingState } from '@types';
import MoviesList from '../components/movies-list/MoviesList';

const HomePage = () => {
  const [trending, setTrending] = useState<TrendingState | null>(null);
  useEffect(() => {
    fetch({ type: 'trending' }).then((data) => {
      const { results } = data as MergeTrendingData;
      setTrending(results);
    });
  }, []);
  return (
    <>
      <h1>
        <b className='text-[32px]'>Trending today:</b>
      </h1>
      {trending && <MoviesList movies={trending} />}
    </>
  );
};

export default HomePage;
