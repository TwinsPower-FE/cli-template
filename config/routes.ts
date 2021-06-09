interface SubAppsRouteItem {
  path: string;
  microApp: string;
  wrappers?: string[];
}

const addBaseWrapper = (route: SubAppsRouteItem): SubAppsRouteItem => {
  let wrappers = ['@/wrappers/base'].concat(route.wrappers ?? []);
  return { ...route, wrappers };
};
const subApps: SubAppsRouteItem[] = [
  { path: '/enterprise', microApp: 'enterprise' },
];

export default [
  { path: '/' },
  ...subApps.map(addBaseWrapper),
  { path: '/404', component: '@/pages/404' },
];
