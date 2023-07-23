import PropTypes from 'prop-types';

const Button = ({ type, children, className, isLoading = false, onClick }) => {
  return (
    <button
      type={type}
      className={`flex disabled:opacity-50 items-center justify-center py-4 px-2 text-base font-semibold rounded-lg ${className}`}
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
};

export default Button;
