import axios from 'axios';
import { createAction } from 'redux-actions';
import { message } from 'antd';

import routes from '../routes';
import history from '../history';

// Async Request Get Token
export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailure = createAction('LOGIN_FAILURE');

export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(routes.auth(), {
      username,
      password,
    });
    dispatch(loginSuccess({ token: response.data.token }));
    message.success('Loaded!', 1);
    history.push('/main');
  } catch (e) {
    dispatch(loginFailure());
    message.error('Failure!', 1);
  }
};

// Async Request GET Data Groups
export const groupDataRequest = createAction('GROUP_DATA_REQUEST');
export const groupDataSuccess = createAction('GROUP_DATA_SUCCESS');
export const groupDataFailure = createAction('GROUP_DATA_FAILURE');

export const getGroupData = (token) => async (dispatch) => {
  dispatch(groupDataRequest());
  try {
    const response = await axios({
      method: 'get',
      url: routes.groups(),
      headers: { Authorization: token },
    });
    dispatch(groupDataSuccess(response.data.results));
  } catch (e) {
    dispatch(groupDataFailure(e));
  }
};

// Async Request GET Data Registered User
export const studentsDataRequest = createAction('STUDENTS_DATA_REQUEST');
export const studentsDataSuccess = createAction('STUDENTS_DATA_SUCCESS');
export const studentsDataFailure = createAction('STUDENTS_DATA_FAILURE');

export const getStudentsData = (id, token) => async (dispatch) => {
  dispatch(studentsDataRequest());
  try {
    const response = await axios({
      method: 'get',
      url: `${routes.registrations()}?group=${id}`,
      headers: { Authorization: token },
    });
    console.log('data students: ', response);
    dispatch(studentsDataSuccess({ results: response.data.results, id }));
  } catch (e) {
    dispatch(studentsDataFailure(e));
  }
};
