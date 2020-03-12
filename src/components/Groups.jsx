import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';

import * as actions from '../actions';

const Groups = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginData.token);
  const groups = useSelector((state) => state.groups.data);
  useEffect(() => {
    dispatch(actions.getGroupData(token));
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
      { title: 'Фамилия', dataIndex: 'secondName', key: 'secondName' },
      { title: 'Имя', dataIndex: 'name', key: 'name' },
      { title: 'Отчество', dataIndex: 'fatherName', key: 'fatherName' },
      { title: 'Телефон', dataIndex: 'phone', key: 'phone' },
    ];
    return <Table
      columns={columnsInsideTable}
      dataSource={record.description}
      pagination={false} />;
  };

  const onExpand = (expanded, record) => {
    dispatch(actions.getStudentsData(record.num, token));
  };
  return (
    <Table
      columns={columns}
      expandable={{ expandedRowRender, onExpand }}
      dataSource={groups}
      pagination={false}
    />
  );
};


export default Groups;
