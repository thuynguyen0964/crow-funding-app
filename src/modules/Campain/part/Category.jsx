import PropTypes from 'prop-types';
import { FolderIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const CategoryCampain = ({ title, to, className = '' }) => {
  return (
    <Link
      to={to}
      className={classNames(
        'flex items-center mb-4 text-xs font-medium text-text3 gap-x-3',
        className
      )}
    >
      <FolderIcon className='w-5 h-5' />
      <span>{title}</span>
    </Link>
  );
};

CategoryCampain.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
};

export default CategoryCampain;
