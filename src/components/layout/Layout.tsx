import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Container from '../container/Container';
import Loader from '../loader/Loader';

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <main className='p-4'>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
