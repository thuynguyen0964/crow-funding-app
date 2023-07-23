import { useDropdown } from './Context';
import PropTypes from 'prop-types';

const Select = ({ placeholder = '', className }) => {
  const { show, handleToggleDropdown } = useDropdown();
  return (
    <>
      <div
        className={`flex items-center justify-between py-4 px-6 rounded cursor-pointer border border-strock text-sm text-text1 font-medium ${className}`}
        onClick={handleToggleDropdown}
      >
        <span>{placeholder}</span>
        <span>
          {show ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 15l7-7 7 7'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          )}
        </span>
      </div>
    </>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.node,
};

export default Select;
