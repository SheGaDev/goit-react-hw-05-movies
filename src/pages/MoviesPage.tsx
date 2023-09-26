import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Search from '../components/search/Search';
import type { MergeSearchMoviesData, SearchMovies } from '@types';
import { fetch } from '../services';
import Movies from '../components/movie/Movie';

const MoviesPage = () => {
  const [query, setQuery] = useState<string | null>('');
  const [movies, setMovies] = useState<SearchMovies[] | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch({ type: 'search', query: query as string });
      const { results } = response as MergeSearchMoviesData;
      if (!results.length) setNotFound(true);
      else setMovies(results);
    };
    if (query === '' && searchParams) setQuery(searchParams.get('title'));
    if (query) fetchMovies();
  }, [query]);

  const onSubmit = (value: string) => {
    if (value !== '') setSearchParams(`?title=${value}`);
    else setSearchParams('');
    setMovies(null);
    setNotFound(false);
    setQuery(value);
  };

  return (
    <div className='flex flex-col gap-3'>
      <Search onSubmit={onSubmit} />
      {notFound && <span>Not Found movies!</span>}
      {movies && <Movies movies={movies} />}
    </div>
  );
};

export default MoviesPage;
