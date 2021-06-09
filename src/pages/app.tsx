import { initGlobalState, MicroAppStateActions } from 'qiankun';

// 初始化 state
const state = {};
const actions: MicroAppStateActions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState(state);
actions.offGlobalStateChange();

// 修改clientRender参数
function modifyClientRenderOpts() {
  return {};
}

// 修改路由
function patchRoutes({ routes }) {
  routes;
}

// 覆写render
function render(oldRender: Function) {
  oldRender();
}

// 路由切换
function onRouteChange({ routes, matchedRoutes, location, action }) {}

