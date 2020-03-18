import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import * as actions from '../actions';
import { loadingTokenUI, loadingStudentsUI, loadingGroupsUI } from './loadingStateUI';

const groups = handleActions({
  [actions.getGroupsDataSuccess](state, { payload }) {
    return {
      ...state,
      data: payload.map((group) => ({
        key: group.id,
        num: group.id,
        name: group.course.title,
        date: group.start_date,
        schedule: group.schedule,
        sumPerModule: group.price_per_month,
        sumAllMonth: group.price_per_all,
      })),
    };
  },
  [actions.getStudentsRegistrationSuccess](state, { payload }) {
    return {
      ...state,
      data: state.data.map((student) => (student.num === payload.id
        ? {
          ...student,
          description: payload.results.map((studentRenderData) => ({
            key: studentRenderData.student.id,
            idRegistration: studentRenderData.id,
            number: studentRenderData.student.id,
            fullName: `${studentRenderData.student.family || ' '} ${studentRenderData.student.name || ' '} ${studentRenderData.student.second_name || ' '}`,
            phone: studentRenderData.student.phone,
            payments: studentRenderData.payments,
            payedMonth: studentRenderData.payed_month,
            modules: studentRenderData.group.course.modules,
          })),
        }
        : student)),
    };
  },
}, {
  data: [],
});

export default combineReducers({
  groups,
  loadingTokenUI,
  loadingStudentsUI,
  loadingGroupsUI,
});
