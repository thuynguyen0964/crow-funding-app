import PropTypes from 'prop-types';

const FormGroup = ({ children }) => {
  return <div className='flex flex-col mb-5 gap-y-3'>{children}</div>;
};

FormGroup.propTypes = { children: PropTypes.node };

export default FormGroup;
