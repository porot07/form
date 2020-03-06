import { handleActions } from 'redux-actions';
// import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import * as actions from '../actions';

const loginData = handleActions({
  [actions.loginRequest](state) {
    return {
      ...state,
      state: 'request',
    };
  },
  [actions.loginSuccess](state, { payload: { token } }) {
    return {
      ...state,
      token,
      state: 'allowed',
    };
  },
  [actions.loginFailure](state) {
    return {
      ...state,
      state: 'failure',
    };
  },
}, {});

export default combineReducers({
  loginData,
});
