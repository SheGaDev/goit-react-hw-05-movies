import type { TrendingState } from '@types';
import Trending from '../trending/Trending';

const Home = ({ trending }: { trending: TrendingState }) => {
  return (
    <>
      <h1>
        <b className='text-[32px]'>Trending today:</b>
      </h1>
      <ul>
        {trending &&
          trending.map((trend) => {
            return <Trending key={trend.id} trending={trend} />;
          })}
      </ul>
    </>
  );
};

export default Home;
