import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import * as actions from '../actions';
import { loadingUI, loadingStudentsUI, loadingGroupsUI } from './loadingStateUI';

const loginData = handleActions({
  [actions.loginRequest](state) {
    return {
      ...state,
    };
  },
  [actions.loginSuccess](state) {
    return {
      ...state,
    };
  },
  [actions.loginFailure](state) {
    return {
      ...state,
    };
  },
}, {});

const groups = handleActions({
  [actions.getGroupDataRequest](state) {
    return {
      ...state,
    };
  },
  [actions.getGroupDataSuccess](state, { payload }) {
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
  [actions.getStudentRegistrationSuccess](state, { payload }) {
    return {
      ...state,
      data: state.data.map((object) => (object.num === payload.id
        ? {
          ...object,
          description: payload.results.map((result) => ({
            key: result.student.id,
            idRegistration: result.id,
            number: result.student.id,
            fullName: `${result.student.family || ' '} ${result.student.name || ' '} ${result.student.second_name || ' '}`,
            phone: result.student.phone,
            payments: result.payments,
            payedMonth: result.payed_month,
            modules: result.group.course.modules,
          })),
        }
        : { ...object })),
    };
  },
  [actions.getGroupDataFailure](state) {
    return {
      ...state,
    };
  },
}, {
  data: [],
});

const createPay = handleActions({
  [actions.postCreatePayRequest](state) {
    return {
      ...state,
    };
  },
  [actions.postCreatePaySuccess](state) {
    return {
      ...state,
    };
  },
  [actions.postCreatePayFailure](state) {
    return {
      ...state,
    };
  },
}, {});


export default combineReducers({
  loginData,
  loadingUI,
  loadingStudentsUI,
  loadingGroupsUI,
  groups,
  createPay,
});
