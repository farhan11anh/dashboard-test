export default [
  {
    title: 'Dashboard',
    to: { name: 'dashboard' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Business Account',
    to: { name: 'business-account' },
    icon: { icon: 'tabler-star' },
  },
  {
    title: 'My Store',
    to: { name: 'my-store-tab', params: { tab: 'store-preview' } },
    icon: { icon: 'tabler-building-store' },
  },
  {
    title: 'Campaign',
    icon: { icon: 'tabler-bell-ringing-2' },
    children: [
      {
        title: 'Banner',
        to: 'campaign-banner',
      },
      {
        title: 'Push Notification',
        to: 'campaign-notification',
      },
    ],
    badgeContent: '2',
    badgeClass: 'bg-error',
  },
  {
    title: 'Merchant',
    to: { name: 'merchant' },
    icon: { icon: 'tabler-building-store' },
  },
  {
    title: 'Approval',
    to: { name: 'approval-tab', params: { tab: 'banner' } },
    icon: { icon: 'tabler-checkbox' },
  },
  {
    title: 'Report',
    icon: { icon: 'tabler-report' },
    children: [
      {
        title: 'Transaction',
        to: 'report-transaction',
      },
      {
        title: 'Approval',
        to: 'second-page',
      },
    ],
    badgeContent: '2',
    badgeClass: 'bg-error',
  },
  {
    title: 'Users',
    icon: { icon: 'tabler-user-circle' },
    children: [
      {
        title: 'Role',
        to: 'users-role',
      },
      {
        title: 'List',
        to: 'users-list',
      },
      {
        title: 'Profile',
        to: {name: 'users-profile-tab', params: { tab: 'approval' }},
      },
    ],
    badgeContent: '3',
    badgeClass: 'bg-error',
  },
  {
    title: 'Setting',
    icon: { icon: 'tabler-settings' },
    children: [
      {
        title: 'Landing',
        to: 'second-page',
        target: '_blank',
      },
      {
        title: 'Pricing',
        to: 'second-page',
        target: '_blank',
      },
    ],
  },
]
