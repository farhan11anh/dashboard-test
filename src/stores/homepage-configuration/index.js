import { defineStore } from 'pinia';

export const useHomepageConfigurationStore = defineStore('homepage-configuration', {
  // State: Data managed by the store
  state: () => ({
    isImgLifestyleFeature: [],
  }),

  // Getters: Computed properties based on state
  getters: {
    imgLifestyleFeature: (state) => state.isImgLifestyleFeature,
  },

  // Actions: Methods to modify the state (can be async)
  actions: {
    updateImgLifestyleFeature(data, index) {
        this.isImgLifestyleFeature[index] = data
    }
  },
});
