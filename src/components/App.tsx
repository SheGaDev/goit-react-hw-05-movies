import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './layout/Layout';
import NotFoundPage from '../pages/404';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const InfoMoviePage = lazy(() => import('../pages/InfoMoviePage'));
const CastPage = lazy(() => import('../pages/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));

function App() {
  return (
    <Routes>
      <Route path='/goit-react-hw-05-movies/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='movies' element={<MoviesPage />} />
        <Route path='movie/:movieId' element={<InfoMoviePage />}>
          <Route path='cast' element={<CastPage />} />
          <Route path='reviews' element={<ReviewsPage />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
