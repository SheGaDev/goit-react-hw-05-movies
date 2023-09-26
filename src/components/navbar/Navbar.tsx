import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='rounded-b-lg bg-black px-12 py-4'>
      <nav>
        <ul className='flex list-none gap-6 text-white'>
          <li className='hover:text-[#c1c1c1]'>
            <Link to={'/goit-react-hw-05-movies/'}>Home</Link>
          </li>
          <li className='hover:text-[#c1c1c1]'>
            <Link to={'/goit-react-hw-05-movies/movies'}>Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
