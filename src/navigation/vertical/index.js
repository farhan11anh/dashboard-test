export default [
  {
    title: 'Dashboard',
    to: { name: 'dashboard' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Report',
    icon: { icon: 'tabler-report' },
    children: [
      {
        title: 'Transaction',
        // to: 'report-transaction',
        to: { name: 'report-transaction', query: { page: '1' } },
      },
    ],
  },
  {
    title: 'Setting',
    icon: { icon: 'tabler-settings' },
    children: [
      {
        title: 'Role',
        to: 'users-role',
      },
      {
        title: 'Profile',
        to: {name: 'users-profile-tab', params: { tab: 'approval' }},
      },
      {
        title: 'List',
        to: 'users-list',
      },
    ],
  },
]
