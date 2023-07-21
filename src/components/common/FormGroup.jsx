import PropTypes from 'prop-types';

const FormGroup = ({ children }) => {
  return (
    <div className='flex flex-col mb-4 lg:mb-5 lg:gap-y-3 gap-y-2'>
      {children}
    </div>
  );
};

FormGroup.propTypes = { children: PropTypes.node };

export default FormGroup;
