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

const groups = handleActions({
  [actions.groupDataRequest](state) {
    return {
      ...state,
    };
  },
  [actions.groupDataSuccess](state, { payload }) {
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
  [actions.studentsDataSuccess](state, { payload }) {
    return {
      ...state,
      data: state.data.map((object) => (object.num === payload.id
        ? {
          ...object,
          description: payload.results.map((result) => ({
            key: result.student.id,
            name: result.student.name,
            secondName: result.student.family,
            fatherName: result.student.second_name,
            phone: result.student.phone,
          })),
        }
        : { ...object })),
    };
  },
  [actions.groupDataFailure](state) {
    return {
      ...state,
    };
  },
}, {
  data: [],
});

const students = handleActions({
  [actions.studentsDataRequest](state) {
    return {
      ...state,
    };
  },
  // [actions.studentsDataSuccess](state, { payload }) {
  //   return {
  //     ...state,
  //     data: payload.map((result) => ({
  //       key: result.student.id,
  //       name: result.student.name,
  //       secondName: result.student.family,
  //       fatherName: result.student.second_name,
  //       phone: result.student.phone,
  //     })),
  //   };
  // },
  [actions.studentsDataFailure](state, { payload }) {
    return {
      ...state,
      error: payload,
    };
  },
}, {});

export default combineReducers({
  loginData,
  loadingUI,
  groups,
  students,
});
