import { defineStore } from 'pinia';

export const useReportTransactionStore = defineStore('report-transaction', {
  // State: Data managed by the store
  state: () => ({
    items_data : [],
    meta_data : {
      total : 0,
      per_page : 0,
      current_page : 0,
    },
  }),

  // Getters: Computed properties based on state
  getters: {
    items: (state) => state.items_data,
    meta: (state) => state.meta_data,
  },

  // Actions: Methods to modify the state (can be async)
  actions: {
    getItems(params){
      return this.$api.get('/report/transaction', {params}).then((response) => {
        this.items_data = response.data.data
        this.meta_data = response.data.meta
      })
    }
  },
});
