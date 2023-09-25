import axios from 'axios';
import type {
  FetchTMDB,
  MergeReviewsData,
  MergeSearchMoviesData,
  MergeTrendingData,
  MovieData,
  CastData,
} from '@types';
const ins = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    common: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Yzk5YTFkNDk2NTg1YmM2MmUwOTE1MDU5MzM1N2U2YyIsInN1YiI6IjY1MDliZDY1ZmEyN2Y0MDBjYWE1YWZjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WV0FmxQBPlefUu-pNpyZjtL2hGpndkjU9O_F-hxAuRY',
    },
  },
});
const routes = {
  trending: () => 'trending/movie/day',
  search: ({ query }: FetchTMDB) => `search/movies?query=${query}`,
  details: ({ movie_id }: FetchTMDB) => `movie/${movie_id}`,
  credits: ({ movie_id }: FetchTMDB) => `movie/${movie_id}/credits`,
  reviews: ({ movie_id }: FetchTMDB) => `movie/${movie_id}/reviews`,
};
const fetch = async (
  data: FetchTMDB
): Promise<MergeTrendingData | MergeSearchMoviesData | MovieData | MergeReviewsData | CastData> => {
  return ins(routes[data.type](data)).then((r) => r.data);
};
export { fetch };
