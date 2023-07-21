import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import { useController } from 'react-hook-form';
import Error from '../common/Error';

const Input = ({
  name,
  type = 'text',
  placeholder,
  control,
  error = '',
  children,
}) => {
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
            : 'border-strock text-text1 dark:border-darkStroke',
          children && 'pr-16'
        )}
        placeholder={placeholder}
        {...field}
      />
      <span className='absolute cursor-pointer right-6 top-2/4 -translate-y-2/4'>
        {children}
      </span>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any,
  children: PropTypes.node,
};

export default withErrorBoundary(Input, {
  FallbackComponent: Error,
});
