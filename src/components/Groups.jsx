import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';

import * as actions from '../actions';

const Groups = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginData.token);
  const data = useSelector((state) => state.group.data);
  console.log(data);
  useEffect(() => {
    dispatch(actions.data(token));
  }, []);
  const columns = [
    { title: 'No', dataIndex: 'num', key: 'num' },
    { title: 'Курс', dataIndex: 'name', key: 'name' },
    { title: 'Дата старта', dataIndex: 'date', key: 'date' },
    { title: 'Расписание', dataIndex: 'schedule', key: 'schedule' },
    { title: 'Сумма за модуль', dataIndex: 'sumPerModule', key: 'sumPerModule' },
    { title: 'При оплате за курс', dataIndex: 'sumAllMonth', key: 'sumAllMonth' },
  ];

  return (
    <Table
      columns={columns}
      // expandable={{
      //   expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.address}</p>,
      //   rowExpandable: (record) => record.name !== 'Not Expandable',
      // }}
      dataSource={data}
    />
  );
};


export default Groups;
