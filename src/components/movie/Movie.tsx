import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Search from '../search/Search';
import type { MergeSearchMoviesData, SearchMovies } from '@types';
import { fetch } from '../../services';

const Movies = () => {
  const [query, setQuery] = useState<string | null>('');
  const [movies, setMovies] = useState<SearchMovies[] | null>(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch({ type: 'search', query: query as string });
      const { results } = response as MergeSearchMoviesData;
      setMovies(results);
    };
    if (query === '' && searchParams) setQuery(searchParams.get('title'));
    if (query) fetchMovies();
  }, [query]);

  const onSubmit = (value: string) => {
    setSearchParams(`?title=${value}`);
    setMovies(null);
    setQuery(value);
  };

  return (
    <>
      <Search onSubmit={onSubmit} />
      {movies && (
        <ul>
          {movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/goit-react-hw-05-movies/movie/${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;
