import Button from 'src/components/Button';
import Search from './Search';
import Fundriser from './Fundriser';
import { Tooltip } from 'react-tooltip';

const TopBar = () => {
  return (
    <div className='flex items-center justify-between mb-10'>
      <div className='flex items-center flex-1 gap-x-12'>
        <img srcSet='/logo.png 2x' alt='Logo' />
        <div className='w-full max-w-[458px]'>
          <Search></Search>
        </div>
      </div>

      <div className='flex items-center justify-end flex-1 gap-x-10'>
        <Fundriser></Fundriser>
        <Button className='px-6 text-white bg-secondary'>
          Start a camping
        </Button>
        <img
          data-tooltip-content='Profile'
          data-tooltip-id='auth'
          src='/emi.jpg'
          className='w-[52px] h-[52px] object-cover rounded-full'
          alt='avatar'
        />
      </div>
      <Tooltip id='auth' place='bottom' />
    </div>
  );
};

export default TopBar;
