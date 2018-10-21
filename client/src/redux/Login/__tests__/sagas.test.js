// @flow
import { call, put, takeEvery } from 'redux-saga/effects';

import { login } from 'services/networking/request';
import loginUserSaga, { loginUser } from '../sagas';
import { loginUserRequest, loginUserSuccess, loginUserError } from '../actions';
import { USER_LOGIN_REQUEST } from '../constant';

const token = 'OX1dSSVRFX1BPU1QsQ0FOX1JFQURfTkV';

describe('[Saga] Login redux', () => {
  describe('loginUser', () => {
    const loginValues = { email: 'bilbo@culdesac.gnd', password: 'm0ñPr3cieuX' };
    const action = loginUserRequest(loginValues);
    const endpoint = '/login_check';
    describe('when request is a success', () => {
      const gen = loginUser(action);
      it('should call the backend login endpoint', () => {
        expect(gen.next().value).toEqual(call(login, endpoint, loginValues));
      });

      it('should call the success action when request is a success', () => {
        expect(gen.next(token).value).toEqual(put(loginUserSuccess(token)));
      });
    });

    describe('when request fails', () => {
      const gen = loginUser(action);
      it('should call the error action', () => {
        expect(gen.next().value).toEqual(call(login, endpoint, loginValues));
        expect(gen.throw({ message: 'error' }).value).toEqual(
          put(loginUserError({ message: 'error' })),
        );
      });
    });
  });

  describe('loginUserSaga', () => {
    it('should take every USER_FETCH_REQUEST actions', () => {
      const gen = loginUserSaga();
      expect(gen.next().value).toEqual(takeEvery(USER_LOGIN_REQUEST, loginUser));
    });
  });
});
