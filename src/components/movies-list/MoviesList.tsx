import { Link, useLocation } from 'react-router-dom';
import type { SearchMovies, TrendingDataResults } from '@types';

const MoviesList = ({ movies }: { movies: SearchMovies[] | TrendingDataResults[] }) => {
  const location = useLocation();
  return (
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
  );
};

export default MoviesList;
