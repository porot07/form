import React, { useState } from 'react';
import { Link, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import Toogler from './Toogler';
import PrivateRoute from './PrivateRoute';
import Groups from './Groups';
// import logo from '../logo.png';
// import miniLogo from '../logo2.png';

const SidebarNav = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const toogle = () => {
    setCollapsed(!collapsed);
  };

  const onCollapse = (coll) => {
    setCollapsed({ coll });
  };
  return (
    <Layout style={{ minHeight: '100vh' }} id="components-layout-custom-trigger">
      <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          <h1>Admin Panel</h1>
          {/* {collapsed ? <img src={miniLogo} alt="Logo" style={{ width: '100%' }} /> : <img src={logo} alt="Logo" style={{ width: '100%' }} />} 
          картинки после коллапса пропадают из surge.sh */}
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <HomeOutlined />
            <span>Groups</span>
            <Link to='/main/groups' />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Toogler className="trigger" toogle={toogle} collapsed={collapsed} />
        </Header>
        <Content className="site-layout-background" style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}>
          <Switch>
            <PrivateRoute path='/main/groups' component={Groups} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SidebarNav;
