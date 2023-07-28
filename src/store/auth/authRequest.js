import { apiAuth } from 'src/api';

const requestAuthRegister = (data) => {
  return apiAuth.post('auth/register', data);
};

const requestAuthLogin = (data) => {
  return apiAuth.post('auth/login', data);
};

const getCurrentUser = (token) => {
  if (!token) return;
  return apiAuth.get('me', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};

export { requestAuthRegister, requestAuthLogin, getCurrentUser };
