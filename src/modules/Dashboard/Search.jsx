import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Search = () => {
  return (
    <div className='flex p-2 bg-white rounded-full shadow-md'>
      <div className='flex-1 px-5'>
        <input
          type='text'
          placeholder='Enter key word...'
          className='w-full h-full text-base bg-transparent outline-none text-text1 placeholder:text-text4'
        />
      </div>
      <button className='w-[72px] h-10 flex items-center justify-center bg-primary rounded-full '>
        <MagnifyingGlassIcon className='w-6 h-6 text-white' />
      </button>
    </div>
  );
};

export default Search;
