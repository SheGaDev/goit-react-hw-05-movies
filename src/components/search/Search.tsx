import { useState, FormEvent } from 'react';
import { FaSearch } from 'react-icons/fa/index';

const Search = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
  const [search, setSearch] = useState<string>('');
  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(search);
  };
  return (
    <form className='max-w-[360px]' onSubmit={submitSearch}>
      <label className='flex flex-col gap-2'>
        <b>Search Movies:</b>
        <div className='relative h-[36px] w-[360px]'>
          <input
            className='h-[36px] w-[360px] rounded pl-[40px] pr-[8px]'
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className='absolute left-0 top-0 rounded bg-black'>
            <FaSearch fill='white' className='h-[36px] w-[36px] p-[8px] hover:fill-[#c1c1c1]' />
          </button>
        </div>
      </label>
    </form>
  );
};

export default Search;
