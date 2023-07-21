import {
  ArrowTrendingUpIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const Fundriser = () => {
  return (
    <div className='flex items-center text-base font-medium gap-x-2 font-base text-text2'>
      <span>
        <ArrowTrendingUpIcon className='w-6 h-5 text-black' />
      </span>
      <span>Fundrising For</span>
      <span>
        <ChevronDownIcon className='w-6 h-5 text-black' />
      </span>
    </div>
  );
};

export default Fundriser;
