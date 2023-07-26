import { takeLatest } from 'redux-saga/effects';
import { authRegister } from './authSlice';
import { handleAuthRegsiter } from './authHandlers';

function* authSaga() {
  yield takeLatest(authRegister.type, handleAuthRegsiter);
}

export default authSaga;
