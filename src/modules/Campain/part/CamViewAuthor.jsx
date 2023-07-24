import PropTypes from 'prop-types';
import { StarIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

const CamViewAuthor = ({ img, author }) => {
  return (
    <div className={classNames('flex items-center gap-x-5 mb-9')}>
      <img
        src={img}
        alt='author'
        className='w-[60px] h-[60px] object-cover rounded-full'
      />
      <div className='flex flex-col'>
        <div className='flex items-center gap-2'>
          <h3 className='text-text1 font-medium text-lg'>{author}</h3>
          <span className='grid grid-cols-5 gap-1'>
            {Array(5)
              .fill(0)
              .map((item, index) => (
                <StarIcon
                  key={`${item}+${index}`}
                  className='w-4 h-4 text-yellow-300'
                />
              ))}
          </span>
        </div>

        <div className='flex items-center gap-x-3 text-text3 text-sm'>
          <strong className='text-primary'>02 Campain</strong>
          <span className='block bg-text3 rounded-full w-[6px] h-[6px]'></span>
          <span>Datkka , Banglahdes</span>
        </div>
      </div>
    </div>
  );
};

CamViewAuthor.propTypes = {
  author: PropTypes.string,
  img: PropTypes.string,
};

export default CamViewAuthor;
