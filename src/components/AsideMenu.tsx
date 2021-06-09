import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { history } from 'umi';
import { AppstoreOutlined } from '@ant-design/icons';
import './styles/AsideMenu.less';

enum MenuType {
  '分类导航',
  '菜单页面',
}

interface MenuItem {
  id: string;
  parentId?: string;
  name: string;
  path: string;
  type?: MenuType;
  sortIndex?: number;
}

interface PropsType {
  menuList: MenuItem[];
  isMini: boolean;
}

const Menu = (props: PropsType) => {
  const { menuList } = props;
  const [curPath, setCurPath] = useState('');
  useEffect(() => {
    curPath && history.push(curPath);
  }, [curPath]);
  return (
    <ul className="MenuList">
      {menuList.map((menu) => (
        <li
          className={classNames({ actived: menu.id === '1' })}
          onClick={() => setCurPath(menu.path)}
          key={menu.id}
        >
          {/* <i className={menu.path}></i> */}
          <AppstoreOutlined className="icon" />
          <span>{menu.name}</span>
        </li>
      ))}
    </ul>
  );
};

const HelpArea: React.FC<{ isMini: boolean }> = (props) => {
  return (
    <div className="HelpArea">
      <a target="_blank">
        <AppstoreOutlined className="icon" />
        <span>What’s New</span>
      </a>
      <a target="_blank">
        <AppstoreOutlined className="icon" />
        <span>帮助中心</span>
      </a>
    </div>
  );
};

export default function (props: PropsType) {
  return (
    <div
      className={classNames({ AsideMenu: true, OpenMiniMode: props.isMini })}
    >
      <Menu {...props} />
      <HelpArea isMini={props.isMini} />
    </div>
  );
}
