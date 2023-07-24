import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import { useForm } from 'react-hook-form';

const Support = ({ className }) => {
  const { control } = useForm();
  return (
    <div className={classNames(className)}>
      <h2 className='mb-5 text-lg font-semibold'>Support</h2>
      <div className='flex flex-col w-full px-6 bg-white shadow-1 py-7'>
        <p className='mb-8 text-xl text-center text-text3'>
          Pledge without reward
        </p>
        <Input
          placeholder='$10'
          control={control}
          name='Pledge'
          className='w-full px-5 py-3 mb-5 text-lg font-medium border rounded border-strock'
        />
        <div className='p-5 mb-5 bg-grayf3 rounded-xl'>
          <p className='mb-5 text-sm font-semibold text-text2'>
            Back it because you believe in it.
          </p>
          <p className='text-sm text-text3'>
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button className='w-full text-white bg-secondary'>Continue</Button>
      </div>
    </div>
  );
};

Support.propTypes = {
  className: PropTypes.string,
};

export default Support;
