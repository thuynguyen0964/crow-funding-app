import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

const Input = ({ name, type, placeholder, control, error = '' }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <div className='relative'>
      <input
        id={name}
        type={type}
        className={classNames(
          'w-full px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent',
          error.length > 0
            ? 'border-error text-error'
            : 'border-strock text-text1 dark:border-darkStroke'
        )}
        placeholder={placeholder}
        {...field}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any,
};

export default Input;
