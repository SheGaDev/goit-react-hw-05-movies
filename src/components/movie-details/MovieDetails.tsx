import { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaCaretLeft } from 'react-icons/fa/index';
import type { MovieData } from '@types';

const Movie = ({ movie }: { movie: MovieData }) => {
  const location = useRef(useLocation().state?.from ?? '/goit-react-hw-05-movies');

  const fullPathPoster = (poster: string): string =>
    poster && `https://image.tmdb.org/t/p/w260_and_h390_face${poster}`;
  return (
    <>
      <Link to={location.current}>
        <button className='flex items-center justify-center gap-1 rounded border-[1px] border-black bg-black fill-white px-[8px] py-[4px] text-white hover:fill-[#c1c1c1] hover:text-[#c1c1c1]'>
          <FaCaretLeft className='h-[24px] w-[24px]' />
          <b>Go back</b>
        </button>
      </Link>
      <div className='mt-4 flex gap-5'>
        <img
          src={fullPathPoster(movie.poster_path)}
          alt={movie.original_title}
          width={260}
          height={390}
        />
        <div className='flex flex-col gap-4'>
          <h1>
            <b className='text-[40px]'>{movie.title}</b>
          </h1>
          <span>User score: {Math.round(movie.vote_average * 10)}%</span>
          <h2>
            <b>Overviews</b>
          </h2>
          <span>{movie.overview}</span>
          <h3>
            <b>Genres</b>
          </h3>
          <span>{movie.genres.map((genre) => genre.name).join(', ')}</span>
        </div>
      </div>
    </>
  );
};

export default Movie;
