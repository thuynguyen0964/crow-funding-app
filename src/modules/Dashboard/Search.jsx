import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <section className='relative'>
      <div className='flex p-2 bg-white rounded-full shadow-md relative z-50'>
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

      {showSearch && (
        <section className='lg:w-[843px] w-full bg-white absolute top-full left-0 z-50 translate-y-5 pb-6 rounded-3xl'>
          <div className='flex items-center justify-between rounded-3xl p-3 bg-graySoft'>
            <span className='font-medium text-sm pl-4 underline'>
              See all 14.500 funderisers
            </span>
            <button className='grid place-items-center w-[72px] h-[50px] rounded-lg bg-error bg-opacity-20'>
              <XMarkIcon className='w-9 h-9 text-black' />
            </button>
          </div>

          <article className='p-6'>
            <div className='flex flex-col gap-y-5 mb-6'>
              <SearchItems />
              <SearchItems />
              <SearchItems />
              <SearchItems />
            </div>
            <h3 className='text-sm font-semibold mb-5'>Related Search</h3>
            <div className='flex flex-col gap-y-3 text-sm text-text2'>
              <p>
                <b>Education </b>Fund
              </p>
            </div>
          </article>
        </section>
      )}
    </section>
  );
};

function SearchItems() {
  return (
    <div className='flex items-center gap-x-5'>
      <img
        src='/emi.jpg'
        alt='avatar'
        className='w-[50px] h-[50px] object-cover rounded-lg'
      />
      <div className='flex-1 text-sm'>
        <h3 className='text-sm mb-1'>
          {' '}
          <strong>Education</strong> fund for Durgham Family
        </h3>
        <p className='text-text3'>By Durgham Family</p>
      </div>
    </div>
  );
}

export default Search;
