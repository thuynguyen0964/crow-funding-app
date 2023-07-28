import { apiAuth } from 'src/api';

const requestAuthRegister = (data) => {
  return apiAuth.post('auth/register', data);
};

const requestAuthLogin = (data) => {
  return apiAuth.post('auth/login', data);
};

export { requestAuthRegister, requestAuthLogin };
