import { useState } from 'react';
import { useEventListener, useDebounceFn } from 'ahooks';
import 'reset-css';
import '@/styles/global.less';
import styles from '@/styles/base.less';
import AsideMenu from '@/components/AsideMenu';
import StatusPanel from '@/components/StatusPanel';
import classNames from 'classnames';

export default (props) => {
  document.body.id = 'TwinsPower';
  // 小尺寸屏幕处理，临界宽度为主应用菜单200 + 子应用菜单190 + 内容区域1000
  const getIsMini = () => document.body.clientWidth < 200 + 190 + 1000;
  const [isMini, changeMode] = useState(getIsMini());
  const { run } = useDebounceFn(() => changeMode(getIsMini()), { wait: 10 });
  useEventListener('resize', run, { target: window });

  const menuList = [
    { id: '1', name: '会员管理', path: '' },
    { id: '2', name: '营销管理', path: '' },
    { id: '3', name: '积分商城', path: '' },
    { id: '4', name: '企业管理', path: '' },
  ];

  return (
    <div className={styles.MainPage}>
      <StatusPanel />
      <AsideMenu menuList={menuList} isMini={isMini} />
      <div
        className={classNames([
          styles.SubAppRoot,
          isMini ? styles.miniMode : null,
        ])}
      >
        {props.children}
      </div>
    </div>
  );
};
