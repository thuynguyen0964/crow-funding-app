import { call, put } from 'redux-saga/effects';
import {
  requestAuthRegister,
  requestAuthLogin,
  getCurrentUser,
  requestWhenReload,
} from './authRequest';
import { saveTokens } from 'src/utils/auth';
import { authUpdate } from './authSlice';

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
      yield call(handleAuthGetUser, { payload: res.data.accessToken });
    }
  } catch (error) {
    console.log(error.message);
  }
}

function* handleAuthGetUser({ payload }) {
  try {
    const res = yield call(getCurrentUser, payload);
    if (res.status === 200) {
      yield put(
        authUpdate({
          user: res.data,
          accessToken: payload,
        })
      );
    }
  } catch (error) {
    console.log(error.message);
  }
}

function* handleRefreshTokenWhenReload({ payload }) {
  try {
    const res = yield call(requestWhenReload, payload);
    if (res.data) {
      saveTokens(res.data.accessToken, res.data.refreshToken);
      yield call(handleAuthGetUser, { payload: res.data.accessToken });
    }
  } catch (error) {
    console.log(error.message);
  }
}

export {
  handleAuthRegsiter,
  handleAuthLogin,
  handleAuthGetUser,
  handleRefreshTokenWhenReload,
};
