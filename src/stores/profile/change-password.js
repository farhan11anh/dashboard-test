import { defineStore } from 'pinia';
import { useLayoutStore } from '../layout';

export const useChangePasswordStore = defineStore('change-password', {
  // State: Data managed by the store
  state: () => ({

  }),

  // Getters: Computed properties based on state
  getters: {

  },

  // Actions: Methods to modify the state (can be async)
  actions: {
    changePassword(values) {
      return new Promise(async(resolve, reject) => {
        try {
            await $api.post('/auth/change-password/', values)
                .then(() => {
                    useLayoutStore().setSnackbar(true, 'success', 'Change Password Success')
                    resolve()
                })
          // this.setToken(response.data.data[0].token)
          // const response = await useNuxtApp().$api.post('', values)
          // console.log('lihat email after',values.email)
          // console.log('coba lihat token',response.data.token_data)
        } catch (error) {
            console.log(error);
            
          useLayoutStore().setSnackbar(true, 'error', 'Change Password Failed')
          reject(error)
        }
      })
    }
  },
});
