import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Authen from 'src/Layout/Authen';
import ActionBtn from 'src/components/Button/ActionBtn';
import { message } from 'src/constants';
import FormError from 'src/components/Errors';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/outline';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormGroup from 'src/components/common/FormGroup';
import Label from 'src/components/label';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import { titlePage } from 'src/utils/contants';
import { useDispatch } from 'react-redux';
import { authLogin } from 'src/store/auth/authSlice';

const schema = yup.object({
  email: yup.string().required(message.require).email(message.email),
  password: yup.string().required(message.require).min(8, message.password),
});

const Login = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = titlePage.LOGIN;
  }, []);

  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCheck = (state, callback) => {
    callback(!state);
  };

  const { isSubmitting, errors } = formState;
  const handleLogin = (values) => {
    dispatch(authLogin(values));
  };

  return (
    <Authen heading={'Wellcome back, User'}>
      <p className='mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8'>
        Don`t have an accounts ?{' '}
        <Link to='/register' className='font-medium underline text-primary'>
          Register an accounts
        </Link>
      </p>
      <ActionBtn title='Login with Google'></ActionBtn>
      <form onSubmit={handleSubmit(handleLogin)} autoComplete='off'>
        {/* email */}
        <FormGroup>
          <Label htmlFor='email'>Email*</Label>
          <Input
            control={control}
            name='email'
            type='text'
            placeholder='example@gmail.com'
          />
          <FormError>{errors?.email?.message}</FormError>
        </FormGroup>

        {/* password */}
        <FormGroup>
          <Label htmlFor='password'>Password*</Label>
          <Input
            control={control}
            name='password'
            type={open ? 'text' : 'password'}
            placeholder='Your password....'
          >
            {open ? (
              <EyeSlashIcon
                onClick={() => handleCheck(open, setOpen)}
                className='w-6 h-6 text-gray-600'
              />
            ) : (
              <EyeIcon
                onClick={() => handleCheck(open, setOpen)}
                className='w-6 h-6 text-gray-600'
              />
            )}
          </Input>
          <FormError>{errors?.password?.message}</FormError>
        </FormGroup>

        {/* forgot password */}
        <p className='my-3 text-sm font-bold text-right text-red-500'>
          Forgot password???
        </p>
        <Button
          isLoading={isSubmitting}
          className='w-full text-white bg-primary'
        >
          Login
        </Button>
      </form>
    </Authen>
  );
};

export default Login;
