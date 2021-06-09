import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  theme: {
    '@primary-color': '#695ADF', // 全局主色
    '@border-radius-base': '8px', // 组件/浮层圆角
  },
});
