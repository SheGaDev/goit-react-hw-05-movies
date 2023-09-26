export type FetchTMDB = {
  type: 'trending' | 'search' | 'details' | 'credits' | 'reviews';
  query?: string;
  movie_id?: string | number;
};
type DefaultValues = {
  page: number;
  total_pages: number;
  total_results: number;
};
export type TrendingDataResults = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: string;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type TrendingData = {
  results: TrendingDataResults[];
};
export type ReviewsDataAuthors = {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number | null;
  };
  content: string;
  created_at: Date;
  id: string;
  updated_at: Date;
  url: string;
};
export type ReviewsData = {
  id: number;
  results: ReviewsDataAuthors[];
};
type Genres = {
  id: number;
  name: string;
};

type ProductionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
type ProductionCountries = {
  iEso_3166_1: string;
  name: string;
};
type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
export type MovieData = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: string | number;
};
export type SearchMovies = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: string | number;
};
export type SearchMoviesData = {
  results: SearchMovies[];
};
export type Cast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};
type Crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};
export type CastData = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

export type MergeTrendingData = DefaultValues & TrendingData;
export type MergeReviewsData = DefaultValues & ReviewsData;
export type MergeSearchMoviesData = DefaultValues & SearchMoviesData;

export type TrendingState = TrendingDataResults[] | null;
