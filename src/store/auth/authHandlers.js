import { call } from 'redux-saga/effects';
import { requestAuthRegister, requestAuthLogin } from './authRequest';
import { saveTokens } from 'src/utils/auth';

function* handleAuthRegsiter(actions) {
  try {
    yield call(requestAuthRegister, actions.payload);
  } catch (error) {
    console.log(error.message);
  }
}

function* handleAuthLogin(actions) {
  const { payload } = actions;
  try {
    const res = yield call(requestAuthLogin, payload);
    if (res.data.accessToken && res.data.refreshToken) {
      saveTokens(res.data.accessToken, res.data.refreshToken);
    }
  } catch (error) {
    console.log(error.message);
  }
}

export { handleAuthRegsiter, handleAuthLogin };
