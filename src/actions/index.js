import axios from 'axios';
import { createAction } from 'redux-actions';
import { message } from 'antd';

import routes from '../routes';
import history from '../history';

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

export const dataRequest = createAction('DATA_REQUEST');
export const dataSuccess = createAction('DATA_SUCCESS');
export const dataFailure = createAction('DATA_FAILURE');

export const data = (token) => async (dispatch) => {
  dispatch(dataRequest());
  try {
    const response = await axios({
      method: 'get',
      url: routes.groups(),
      headers: { Authorization: token },
    });
    dispatch(dataSuccess(response.data.results));
  } catch (e) {
    dispatch(dataFailure(e));
  }
};
