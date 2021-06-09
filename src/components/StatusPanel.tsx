import { Badge, Avatar } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import styles from './styles/StatusPanel.less';

export default () => {
  return (
    <div className={styles.StatusPanel}>
      <div>
        <Avatar size={34} icon={<UserOutlined />} />
        <span className="username">Sumanto</span>
        <span className="contact">Sumanto@logitex.com</span>
      </div>
      <Badge dot count={22} overflowCount={99} size="small">
        <BellOutlined />
      </Badge>
    </div>
  );
};
