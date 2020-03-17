import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table,
  Form,
  InputNumber,
  Button,
} from 'antd';

import * as actions from '../actions';
import CounterPay from './CounterPay';

const Groups = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups.data);
  const loadingStudentsUI = useSelector((state) => state.loadingStudentsUI.loadingState);
  const loadingGroupsUI = useSelector((state) => state.loadingGroupsUI.loadingState);
  useEffect(() => {
    dispatch(actions.getGroupsData());
  }, []);

  const columns = [
    { title: 'No.', dataIndex: 'num', key: 'num' },
    { title: 'Курс', dataIndex: 'name', key: 'name' },
    { title: 'Дата старта', dataIndex: 'date', key: 'date' },
    { title: 'Расписание', dataIndex: 'schedule', key: 'schedule' },
    { title: 'Сумма за модуль', dataIndex: 'sumPerModule', key: 'sumPerModule' },
    { title: 'При оплате за курс', dataIndex: 'sumAllMonth', key: 'sumAllMonth' },
  ];

  const expandedRowRender = (record) => {
    const columnsInsideTable = [
      {
        title: 'No.',
        dataIndex: 'number',
        key: 'number',
        width: 5,
        align: 'center',
      },
      {
        title: 'ФИО',
        dataIndex: 'fullName',
        key: 'name',
        width: 200,
      },
      {
        title: 'Телефон',
        dataIndex: 'phone',
        key: 'phone',
        width: 100,
        align: 'center',
      },
      {
        title: 'Состояние платежей',
        dataIndex: 'statePay',
        key: 'statePay',
        render: (text, recordRender) => (<CounterPay
          modules={recordRender.modules}
          payed={recordRender.payedMonth}
        />),
        width: 250,
        align: 'center',
      },
      {
        title: 'Создание платежа',
        dataIndex: 'createPay',
        key: 'createPay',
        render: (text, recordRender) => {
          const [form] = Form.useForm();
          const onFinish = ({ numbers }) => {
            dispatch(actions.postCreatePay(recordRender.idRegistration, numbers));
          };
          return (
          <Form form={form} name="form-create-pay" layout="inline" onFinish={onFinish}>
            <Form.Item name="numbers">
              <InputNumber size="small" />
            </Form.Item>
            <Form.Item>
              <Button size="small" type="primary" htmlType="submit">Отправить</Button>
            </Form.Item>
          </Form>);
        },
        align: 'center',
      },
    ];
    return (
        <Table
          columns={columnsInsideTable}
          dataSource={record.description}
          pagination={false}
          bordered
          loading={loadingStudentsUI === 'request'} />
    );
  };

  const onExpand = (expanded, record) => {
    if (expanded) {
      dispatch(actions.getStudentRegistrationData(record.num));
    }
  };
  return (
      <Table
        columns={columns}
        expandable={{ expandedRowRender, onExpand }}
        dataSource={groups}
        pagination={false}
        loading={loadingGroupsUI === 'request'}
      />
  );
};


export default Groups;
