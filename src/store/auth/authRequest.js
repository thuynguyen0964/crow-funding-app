import { apiAuth } from 'src/api';

const requestAuthRegister = (data) => {
  console.log('🚀 ~ requestAuthRegister ~ data:', data);

  return apiAuth.post('auth/register', data);
};

export { requestAuthRegister };
