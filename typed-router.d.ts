/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    'root': RouteRecordInfo<'root', '/', Record<never, never>, Record<never, never>>,
    '$error': RouteRecordInfo<'$error', '/:error(.*)', { error: ParamValue<true> }, { error: ParamValue<false> }>,
    'approval-tab': RouteRecordInfo<'approval-tab', '/approval/:tab', { tab: ParamValue<true> }, { tab: ParamValue<false> }>,
    'approval-banner-id': RouteRecordInfo<'approval-banner-id', '/approval/banner/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'approval-notification-id': RouteRecordInfo<'approval-notification-id', '/approval/notification/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'auth-create-password': RouteRecordInfo<'auth-create-password', '/auth/create-password', Record<never, never>, Record<never, never>>,
    'auth-login': RouteRecordInfo<'auth-login', '/auth/login', Record<never, never>, Record<never, never>>,
    'dashboard': RouteRecordInfo<'dashboard', '/dashboard', Record<never, never>, Record<never, never>>,
    'login': RouteRecordInfo<'login', '/login', Record<never, never>, Record<never, never>>,
    'merchant': RouteRecordInfo<'merchant', '/merchant', Record<never, never>, Record<never, never>>,
    'merchant-add-merchant': RouteRecordInfo<'merchant-add-merchant', '/merchant/add-merchant', Record<never, never>, Record<never, never>>,
    'report-transaction': RouteRecordInfo<'report-transaction', '/report/transaction', Record<never, never>, Record<never, never>>,
    'report-transaction-id': RouteRecordInfo<'report-transaction-id', '/report/transaction/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'second-page': RouteRecordInfo<'second-page', '/second-page', Record<never, never>, Record<never, never>>,
  }
}
