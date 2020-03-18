import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const Toogler = ({ toogle, collapsed }) => (
  React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    className: 'trigger',
    onClick: toogle,
  })
);

export default Toogler;
