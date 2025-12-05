export default {
  pages: [
    'pages/index/index',
    'pages/groups/index',
    'pages/products/index',
    'pages/orders/index',
    'pages/profile/index',
    'pages/login/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '社区团购',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#3cc51f',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'assets/images/home.png',
        selectedIconPath: 'assets/images/home-active.png',
        text: '首页',
      },
      {
        pagePath: 'pages/groups/index',
        iconPath: 'assets/images/groups.png',
        selectedIconPath: 'assets/images/groups-active.png',
        text: '团购',
      },
      {
        pagePath: 'pages/orders/index',
        iconPath: 'assets/images/orders.png',
        selectedIconPath: 'assets/images/orders-active.png',
        text: '订单',
      },
      {
        pagePath: 'pages/profile/index',
        iconPath: 'assets/images/profile.png',
        selectedIconPath: 'assets/images/profile-active.png',
        text: '我的',
      },
    ],
  },
};