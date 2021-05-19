const state = (): any => ({
  // 当前用户信息
  user: null,
  // 左侧边栏菜单
  asideMenus: [
    {
      title: 'Dashboard',
      icon: 'el-icon-s-data',
      path: '/dashboard',
      children: [
        {
          title: '分析页',
          path: '/dashboard/analysis'
        },
        {
          title: '监控页',
          path: '/dashboard/monitor'
        }
      ]
    }
  ]
});

const getters = {
  asideMenus: (state: any): Array<any> => {
    return state.asideMenus;
  }
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
};
