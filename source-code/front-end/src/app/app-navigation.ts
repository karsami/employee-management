export const navigation = [
  {
    text: 'Tổng quan',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Nhân viên',
    path: '/employee',
    icon: 'group',
  },
  {
    text: 'Hợp đồng',
    path: '/contract',
    icon: 'doc',
  },
  {
    text: 'Thiết lập',
    icon: 'preferences',
    items: [
      {
        text: 'Người dùng',
        path: '/setting/users'
      },
      {
        text: 'Vai trò',
        path: '/setting/roles'
      },
      {
        text: 'Vị trí công việc',
        path: '/setting/positions'
      },
      {
        text: 'Cơ cấu tổ chức',
        path: '/setting/organizations'
      },
    ]
  }
];
