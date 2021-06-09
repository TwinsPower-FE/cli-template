import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    master: {
      apps: [{ name: 'enterprise', entry: '//localhost:8001' }],
    },
  },
});
