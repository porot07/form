import axios from 'axios';
import { createAction } from 'redux-actions';

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
    history.push('/about');
  } catch (e) {
    dispatch(loginFailure());
    history.push('/failure');
  }
};

// export const getDataRequest = createAction('GET_DATA_REQUEST');
// export const getDataSuccess = createAction('GET_DATA_SUCCESS');
// export const getDataFailure = createAction('GET_DATA_FAILURE');

// export const getData = (token) = async (dispatch) => {
//   dispatch(getDataRequest());
//   try {
//     const response = await axios({
//       method: 'get',
//       url: routes.groups(),
//       headers: { Authorization: token },
//     });
//     dispatch(getDataSuccess({ data: response.data }));
//   } catch (e) {
//     dispatch(getDataFailure());
//   }
// };
