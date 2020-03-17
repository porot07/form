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
    localStorage.setItem('token', response.data.token);
    dispatch(loginSuccess());
    message.success('Loaded!', 1);
    history.push('/main');
  } catch (e) {
    dispatch(loginFailure(e));
    message.error('Failure!', 1);
  }
};

// Async Request GET Data Groups
export const getGroupsDataRequest = createAction('GROUP_DATA_REQUEST');
export const getGroupsDataSuccess = createAction('GROUP_DATA_SUCCESS');
export const getGroupsDataFailure = createAction('GROUP_DATA_FAILURE');

export const getGroupsData = () => async (dispatch) => {
  dispatch(getGroupsDataRequest());
  try {
    const response = await axios.get(routes.groups(), {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    dispatch(getGroupsDataSuccess(response.data.results));
  } catch (e) {
    history.push('/');
    dispatch(getGroupsDataFailure(e));
  }
};

// Async Request GET Data Registered User
export const getStudentsRegistrationRequest = createAction('STUDENTS_DATA_REQUEST');
export const getStudentsRegistrationSuccess = createAction('STUDENTS_DATA_SUCCESS');
export const getStudentsRegistrationFailure = createAction('STUDENTS_DATA_FAILURE');

export const getStudentRegistrationData = (id) => async (dispatch) => {
  dispatch(getStudentsRegistrationRequest());
  try {
    const response = await axios.get(routes.registrations(), {
      params: {
        group: id,
      },
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    dispatch(getStudentsRegistrationSuccess({ results: response.data.results, id }));
  } catch (e) {
    history.push('/');
    dispatch(getStudentsRegistrationFailure(e));
  }
};

export const postCreatePayRequest = createAction('CREATE_PAY_REQUEST');
export const postCreatePaySuccess = createAction('CREATE_PAY_SUCCESS');
export const postCreatePayFailure = createAction('CREATE_PAY_FAILURE');

export const postCreatePay = (id, month) => async (dispatch) => {
  dispatch(postCreatePayRequest());
  try {
    const response = axios.post(routes.pay(id), {
      month_count: month,
    }, {
      headers: { Authorization: localStorage.getItem('token') },
    });
    dispatch(postCreatePaySuccess());
  } catch (e) {
    dispatch(postCreatePayFailure());
  }
};
