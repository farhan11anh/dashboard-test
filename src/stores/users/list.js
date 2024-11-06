import { defineStore } from 'pinia';
import { useLayoutStore } from '../layout';
import { get } from '@vueuse/core';

export const useUsersListStore = defineStore('user-list', {
  // State: Data managed by the store
  state: () => ({
    users_data : [],
    meta_data : {
      totalItems : 0,
      totalPages : 0,
      page : 0,
    },
  }),

  // Getters: Computed properties based on state
  getters: {
    users: (state) => state.users_data,
    meta: (state) => state.meta_data,
  },

  // Actions: Methods to modify the state (can be async)
  actions: {
    async addUser(data) {
     new Promise((resolve, reject) => {
        $api.post('/users', data)
          .then((response) => {
            $api.post('/email-verification', {email : data.email})
                .then((res) => {
                    useLayoutStore().setSnackbar(true, 'success', 'Add User Success')
                    resolve()
                })
          })
          .catch((error) => {
            console.log(error);
            
            useLayoutStore().setSnackbar(true, 'error', 'Add User Failed')
            reject(error)
          })
        })
     },
     async getUsers(params) {
      new Promise((resolve, reject) => {
        console.log(params.status, 'params');
        
        if(params.status == 'active'){
          params.status = 1
        } else {
          params.status = 0
        }
        $api.get('/users?page=' + params.page + '&limit=' + params.limit + '&name=' + params.name + '&isActive=' + params.status + '&role=' + params.role)
          .then((response) => {
            console.log(response, 'data users ');
            this.users_data = response.data.responseData.Items
            const { totalItems, totalPages, page, limit } = response.data.responseData
            this.meta_data = { totalItems, totalPages, page, limit }
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
