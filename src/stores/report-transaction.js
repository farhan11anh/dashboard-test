import { defineStore } from 'pinia';

export const useReportTransactionStore = defineStore('report-transaction', {
  // State: Data managed by the store
  state: () => ({
    items_data : [],
    meta_data : {
      totalItems : 0,
      totalPages : 0,
      page : 0,
    },
  }),

  // Getters: Computed properties based on state
  getters: {
    items: (state) => state.items_data,
    meta: (state) => state.meta_data,
  },

  // Actions: Methods to modify the state (can be async)
  actions: {
    async getItems(params){
      new Promise((resolve, reject) => {
       $api.get('/orders', {params: params})
         .then((response) => {
           this.items_data = response.data.responseData.Items
           const { totalItems, totalPages, page, limit } = response.data.responseData
           this.meta_data = { totalItems, totalPages, page, limit }
           resolve()
         })
         .catch((error) => {
           console.log(error);
           reject(error)
         })
      })
    },

    async getDetails(id) {
      new Promise((resolve, reject) => {
        $api.get('/orders/' + id)
          .then((response) => {
            this.items_data = response.data.responseData
            resolve()
          })
          .catch((error) => {
            console.log(error);
            reject(error)
          })
      })
    }
  },
});
