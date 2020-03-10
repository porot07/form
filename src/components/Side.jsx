import React, { useState } from 'react';
import {
  Link, Route, Switch, useRouteMatch,
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined, MenuFoldOutlined,
  DeleteOutlined, HomeOutlined,
} from '@ant-design/icons';

import Groups from './Groups';


const Side = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const toogle = () => {
    setCollapsed(!collapsed);
  };

  const onCollapse = (coll) => {
    console.log(coll);
    setCollapsed({ coll });
  };
  const match = useRouteMatch();
  return (
    <Layout style={{ minHeight: '100vh' }} id="components-layout-custom-trigger">
      <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          <h1>Admin Panel</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <HomeOutlined />
            <span>Home</span>
            <Link to={`${match.url}`} />
          </Menu.Item>
          <Menu.Item key="2">
            <DeleteOutlined />
            <span>nav 2</span>
            <Link to={`${match.url}/nav2`} />
          </Menu.Item>
          <Menu.Item key="3">
            <DeleteOutlined />
            <span>nav 3</span>
            <Link to={`${match.url}/nav3`} />
          </Menu.Item>
          <Menu.Item key="4">
            <DeleteOutlined />
            <span>+ one el</span>
            <Link to={`${match.url}/nav4`} />
          </Menu.Item>
          <Menu.Item key="5">
            <DeleteOutlined />
            <span>+ second el</span>
            <Link to={`${match.url}/nav5`} />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toogle,
          })}
        </Header>
        <Content className="site-layout-background" style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
        >
          <Switch>
            <Route exact path={`${match.path}`}>
              <Groups />
            </Route>
            <Route path={`${match.path}/nav2`}>
              <h1>I'm nav 2</h1>
            </Route>
            <Route path={`${match.path}/nav3`}>
              <h1>NAVVVV 3</h1>
            </Route>
            <Route path={`${match.path}/nav4`}>
              <h1>четвёртый нав</h1>
            </Route>
            <Route path={`${match.path}/nav5`}>
              <h1>навв 5</h1>
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Side;
