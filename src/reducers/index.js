import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';

const loginData = handleActions({
  [actions.loginRequest](state) {
    return {
      ...state,
    };
  },
  [actions.loginSuccess](state, { payload: { token } }) {
    return {
      ...state,
      token,
    };
  },
  [actions.loginFailure](state) {
    return {
      ...state,
    };
  },
}, {});

const loadingUI = handleActions({
  [actions.loginRequest](state) {
    return {
      ...state,
      state: 'request',
    };
  },
  [actions.loginSuccess](state) {
    return {
      ...state,
      state: 'success',
    };
  },
  [actions.loginFailure](state) {
    return {
      ...state,
      state: 'failure',
    };
  },
}, {});

const group = handleActions({
  [actions.dataRequest](state) {
    return {
      ...state,
    };
  },
  [actions.dataSuccess](state, { payload }) {
    return {
      ...state,
      data: payload.map((object) => ({
        key: object.id,
        num: object.id,
        name: object.course.title,
        date: object.start_date,
        schedule: object.schedule,
        sumPerModule: object.price_per_month,
        sumAllMonth: object.price_per_all,
      })),
    };
  },
  [actions.dataFailure](state, { payload }) {
    console.log('this is my error, what is catching me:', payload);
    return {
      ...state,
    };
  },
}, {
  data: [],
});

export default combineReducers({
  loginData,
  loadingUI,
  group,
});
