import { Link, useLocation } from 'react-router-dom';
import type { SearchMovies } from '@types';

const Movies = ({ movies }: { movies: SearchMovies[] }) => {
  const location = useLocation();

  return (
    <>
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
