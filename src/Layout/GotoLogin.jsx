import { Link } from 'react-router-dom';

const GotoLogin = () => {
  return (
    <section className='flex items-center justify-center'>
      <div className='relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md'>
        <div className='relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40'>
          <img
            src='https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80'
            alt='img-blur-shadow'
          />
        </div>
        <div className='p-6'>
          <h3 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
            Unauthorization
          </h3>
          <h4 className='block text-base font-light leading-relaxed text-inherit antialiased'>
            Please login to get full access our power website
          </h4>
        </div>
        <div className='p-6 pt-0'>
          <Link to='/login'>
            <span className='px-6 py-3 bg-secondary rounded-md font-medium text-white'>
              Login
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GotoLogin;
