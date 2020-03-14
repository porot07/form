import { handleActions } from 'redux-actions';

import * as actions from '../actions';

export const loadingUI = handleActions({
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

export const loadingStudentsUI = handleActions({
  [actions.getStudentRegistrationRequest](state) {
    return {
      ...state,
      loadingDataState: 'request',
    };
  },
  [actions.getStudentRegistrationSuccess](state) {
    return {
      ...state,
      loadingDataState: 'success',
    };
  },
  [actions.getStudentRegistrationFailure](state) {
    return {
      ...state,
      loadingDataState: 'failure',
    };
  },
}, {
  loadingState: '',
});

export const loadingGroupsUI = handleActions({
  [actions.getGroupDataRequest](state) {
    return {
      ...state,
      loadingState: 'request',
    };
  },
  [actions.getGroupDataSuccess](state) {
    return {
      ...state,
      loadingState: 'success',
    };
  },
  [actions.getGroupDataFailure](state) {
    return {
      ...state,
      loadingState: 'failure',
    };
  },
}, {
  loadingState: '',
});
