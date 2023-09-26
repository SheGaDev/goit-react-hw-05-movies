import { Link, useLocation } from 'react-router-dom';
import type { TrendingDataResults } from '@types';

const Trending = ({ trending }: { trending: TrendingDataResults }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`movie/${trending.id}`} state={{ from: location }}>
        {trending.title}
      </Link>
    </li>
  );
};

export default Trending;
