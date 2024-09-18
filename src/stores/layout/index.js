import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  // State: Data managed by the store
  state: () => ({
    isLoading_data: false,
  }),

  // Getters: Computed properties based on state
  getters: {
    isLoading: (state) => state.isLoading_data,
  },

  // Actions: Methods to modify the state (can be async)
  actions: {
    setLoading(isLoading) {
      this.isLoading_data = isLoading;
    },
  },
});
