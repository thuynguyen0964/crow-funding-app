import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({
  type,
  children,
  className,
  isLoading = false,
  onClick,
  to,
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={classNames(
          `flex disabled:opacity-50 items-center justify-center py-4 px-6 text-base font-semibold rounded-lg`,
          className
        )}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={classNames(
        'flex disabled:opacity-50 items-center justify-center py-4 px-6 text-base font-semibold rounded-lg',
        className
      )}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.node,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export default Button;
