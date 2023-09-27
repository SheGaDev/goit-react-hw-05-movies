import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Search from '../components/search/Search';
import type { MergeSearchMoviesData, SearchMovies } from '@types';
import { fetch } from '../services';
import MoviesList from '../components/movies-list/MoviesList';

const MoviesPage = () => {
  const [movies, setMovies] = useState<SearchMovies[] | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const value = searchParams.get('title');
    if (!value) return;
    const fetchMovies = async (query: string) => {
      const response = await fetch({ type: 'search', query });
      const { results } = response as MergeSearchMoviesData;
      if (!results.length) setNotFound(true);
      else setMovies(results);
    };
    fetchMovies(value);
  }, [searchParams]);

  const onSubmit = (value: string) => {
    if (value !== '') setSearchParams(`?title=${value}`);
    else setSearchParams('');
    setMovies(null);
    setNotFound(false);
  };

  return (
    <div className='flex flex-col gap-3'>
      <Search onSubmit={onSubmit} />
      {notFound && <span>Not Found movies!</span>}
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
