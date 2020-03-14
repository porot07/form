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
    dispatch(loginFailure());
    message.error('Failure!', 1);
  }
};

// Async Request GET Data Groups
export const getGroupDataRequest = createAction('GROUP_DATA_REQUEST');
export const getGroupDataSuccess = createAction('GROUP_DATA_SUCCESS');
export const getGroupDataFailure = createAction('GROUP_DATA_FAILURE');

export const getGroupData = () => async (dispatch) => {
  dispatch(getGroupDataRequest());
  try {
    const response = await axios.get(routes.groups(), {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    dispatch(getGroupDataSuccess(response.data.results));
  } catch (e) {
    dispatch(getGroupDataFailure(e));
  }
};

// Async Request GET Data Registered User
export const getStudentRegistrationRequest = createAction('STUDENTS_DATA_REQUEST');
export const getStudentRegistrationSuccess = createAction('STUDENTS_DATA_SUCCESS');
export const getStudentRegistrationFailure = createAction('STUDENTS_DATA_FAILURE');

export const getStudentRegistrationData = (id) => async (dispatch) => {
  dispatch(getStudentRegistrationRequest());
  try {
    const response = await axios.get(routes.registrations(), {
      params: {
        group: id,
      },
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    dispatch(getStudentRegistrationSuccess({ results: response.data.results, id }));
  } catch (e) {
    dispatch(getStudentRegistrationFailure(e));
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
    console.log('month ', month, 'id', id);
    dispatch(postCreatePaySuccess());
  } catch (e) {
    dispatch(postCreatePayFailure());
  }
};
