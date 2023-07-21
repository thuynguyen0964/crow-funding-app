import Label from 'src/components/label';
import Input from 'src/components/Input';
import Authen from 'src/Layout/Authen';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormGroup from 'src/components/common/FormGroup';
import Button from 'src/components/Button';

const Register = () => {
  const { handleSubmit, control, formState } = useForm();
  const { isSubmitting } = formState;
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
        {/* username */}
        <FormGroup>
          <Label htmlFor='username'>Username*</Label>
          <Input
            control={control}
            name='username'
            type='text'
            placeholder='Enter your username...'
          />
        </FormGroup>

        {/* email */}
        <FormGroup>
          <Label htmlFor='email'>Email*</Label>
          <Input
            control={control}
            name='email'
            type='text'
            placeholder='example@gmail.com'
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor='password'>Password*</Label>
          <Input
            control={control}
            name='password'
            type='text'
            placeholder='Your password....'
          />
        </FormGroup>
        <div className='flex items-start mb-5 gap-x-5'>
          <span className='inline-block w-5 h-5 border rounded border-text4'></span>
          <p className='text-sm font-normal text-text2'>
            I argree for the{' '}
            <span className='text-purple-500 underline'>Tearsm of Use</span> and
            have read the policy
          </p>
        </div>
        <Button
          isLoading={isSubmitting}
          className='w-full text-white bg-primary'
        >
          Create my accounts
        </Button>
      </form>
    </Authen>
  );
};

export default Register;
