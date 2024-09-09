import { defineStore } from 'pinia';

export const useTrialStore = defineStore('trial', {
  // State: Data managed by the store
  state: () => ({
    userData: 123,
    isAuthenticated: false,
  }),

  // Getters: Computed properties based on state
  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
  },

  // Actions: Methods to modify the state (can be async)
  actions: {
    login(user) {
      this.userData = user;
      this.isAuthenticated = true;
    },
    logout() {
      this.userData = null;
      this.isAuthenticated = false;
    },
  },
});
