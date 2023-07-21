import { Link } from 'react-router-dom';
import Authen from 'src/Layout/Authen';
import Label from 'src/components/label';
import { useForm } from 'react-hook-form';
import Input from 'src/components/Input';

const Register = () => {
  const { handleSubmit, control } = useForm();

  const handleRegister = (value) => {
    console.log(value);
  };
  return (
    <Authen heading='Register'>
      <p className='mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8'>
        Aready have an accounts ?{' '}
        <Link to='/login' className='font-medium underline text-primary'>
          Login now
        </Link>
      </p>
      <button className='flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border text-text2 gap-x-2 border-strock'>
        <img srcSet='/icon-google.png 2x' alt='' />
        <span>Register with Google</span>
      </button>
      <p className='mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white'>
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className='flex flex-col gap-y-3'>
          <Label htmlFor='email'>Email</Label>
          <Input
            control={control}
            name='email'
            type='text'
            placeholder='Enter your email...'
          ></Input>
        </div>
      </form>
    </Authen>
  );
};

export default Register;
