import { useState, useEffect } from 'react';
import { fetch } from 'src/services';
import type { MergeTrendingData, TrendingState } from '@types';
import Home from '../components/home/Home';

const HomePage = () => {
  const [trending, setTrending] = useState(null as TrendingState);
  useEffect(() => {
    fetch({ type: 'trending' }).then((data) => {
      const { results } = data as MergeTrendingData;
      setTrending(results);
    });
  }, []);
  return <Home trending={trending} />;
};

export default HomePage;
