import PropTypes from 'prop-types';

const FormError = ({ children }) => {
  return <p className='text-sm text-red-500'>{children}</p>;
};

FormError.propTypes = {
  children: PropTypes.string,
};

export default FormError;
