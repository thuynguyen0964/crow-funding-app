import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

const Textarea = ({ name, placeholder, control }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <textarea
      rows={4}
      placeholder={placeholder}
      className={classNames(
        'w-full px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent'
      )}
      {...field}
    ></textarea>
  );
};

Textarea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  control: PropTypes.any,
};

export default Textarea;
