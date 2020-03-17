import { handleActions } from 'redux-actions';

import * as actions from '../actions';

export const loadingTokenUI = handleActions({
  [actions.loginRequest](state) {
    return {
      ...state,
      loadingState: 'request',
    };
  },
  [actions.loginSuccess](state) {
    return {
      ...state,
      loadingState: 'success',
    };
  },
  [actions.loginFailure](state) {
    return {
      ...state,
      loadingState: 'failure',
    };
  },
}, {
  loadingState: '',
});

export const loadingStudentsUI = handleActions({
  [actions.getStudentsRegistrationRequest](state) {
    return {
      ...state,
      loadingState: 'request',
    };
  },
  [actions.getStudentsRegistrationSuccess](state) {
    return {
      ...state,
      loadingState: 'success',
    };
  },
  [actions.getStudentsRegistrationFailure](state) {
    return {
      ...state,
      loadingState: 'failure',
    };
  },
}, {
  loadingState: '',
});

export const loadingGroupsUI = handleActions({
  [actions.getGroupsDataRequest](state) {
    return {
      ...state,
      loadingState: 'request',
    };
  },
  [actions.getGroupsDataSuccess](state) {
    return {
      ...state,
      loadingState: 'success',
    };
  },
  [actions.getGroupsDataFailure](state) {
    return {
      ...state,
      loadingState: 'failure',
    };
  },
}, {
  loadingState: '',
});
