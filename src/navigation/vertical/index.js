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
    icon: { icon: 'tabler-star' },
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
