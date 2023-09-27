import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import Movie from '../components/movie-details/MovieDetails';
import type { MovieData } from '@types';
import { fetch } from 'src/services';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({} as MovieData);

  useEffect(() => {
    const fetchMovie = async () => {
      const result = await fetch({
        type: 'details',
        movie_id: movieId,
      });
      setMovie(result as MovieData);
    };
    fetchMovie();
  }, []);

  return (
    <section className='mt-2'>
      {movie?.title && <Movie movie={movie} />}
      <div className='mt-2'>
        <h3>Additional information</h3>
        <ul className='flex gap-4'>
          <li>
            <Link to='cast'>Cast</Link>
          </li>
          <li>
            <Link to='reviews'>Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default MoviePage;
