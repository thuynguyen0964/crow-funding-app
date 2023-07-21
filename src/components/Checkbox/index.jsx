import classNames from 'classnames';
import PropTypes from 'prop-types';

const Checkbox = ({ children, checked, onClick, name }) => {
  return (
    <div className='flex items-start mb-5 gap-x-5'>
      <div
        className={classNames(
          'inline-flex items-center justify-center p-1 text-white w-5 h-5 border rounded cursor-pointer',
          checked
            ? 'bg-primary border-primary'
            : 'border-strock dark:border-text3'
        )}
        onClick={onClick}
      >
        <input
          type='checkbox'
          className='hidden'
          onChange={() => {}}
          name={name}
        />
        <span className={classNames(checked ? '' : 'opacity-0 invisible')}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            />
          </svg>
        </span>
      </div>
      {children && (
        <div onClick={onClick} className='cursor-pointer'>
          {children}
        </div>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  name: PropTypes.string,
  children: PropTypes.node,
};

export default Checkbox;
