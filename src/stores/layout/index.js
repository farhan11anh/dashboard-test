import { set } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  // State: Data managed by the store
  state: () => ({
    isLoading_data: false,
    snackbar_data: false,
    snackbar_message_data: "",
    snackbar_status_data: ""
  }),

  // Getters: Computed properties based on state
  getters: {
    isLoading: (state) => state.isLoading_data,
    snackbar: (state) => state.snackbar_data,
    snackbar_message : (state) => state.snackbar_message_data,
    snackbar_status : (state) => state.snackbar_status_data
  },

  // Actions: Methods to modify the state (can be async)
  actions: {
    setLoading(isLoading) {
      this.isLoading_data = isLoading;
    },
    setSnackbar(isSnackbar ,status , message="") {
      this.snackbar_data = isSnackbar;
      this.snackbar_message_data = message;
      this.snackbar_status_data = status;
      console.log(this.snackbar_message_data);
      
      setTimeout(() => {
        this.snackbar_data = false;
      }, 3000);
    }
  },
});
