import { defineStore } from 'pinia';
import { useLayoutStore } from '../layout';

export const useUsersListStore = defineStore('user-list', {
  // State: Data managed by the store
  state: () => ({
    users_data : [],
    meta_data : {
      total : 0,
      per_page : 0,
      current_page : 0,
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
     }
  },
});
