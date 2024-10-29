<script setup>
import { useTheme } from "vuetify";
import ScrollToTop from "@core/components/ScrollToTop.vue";
import initCore from "@core/initCore";
import { initConfigStore, useConfigStore } from "@core/stores/config";
import { hexToRgb } from "@core/utils/colorConverter";
import { useLayoutStore } from "./stores/layout";
import { computed } from "vue";

const { global } = useTheme();

// ℹ️ Sync current theme with initial loader theme
initCore();
initConfigStore();

const configStore = useConfigStore();
const layoutStore = useLayoutStore();

const isLoading = computed(() => layoutStore.isLoading);

// setTimeout(() => {
//   isLoading.value = false;
// }, 2000);

const snackbar = computed(() => layoutStore.snackbar);
</script>

<template>
  <div
    style="position: relative"
    :style="isLoading ? { height: '100vh', overflow: 'hidden' } : {}"
  >
    <div class="layer-loader" v-if="isLoading">
      <span class="loader"></span>
    </div>
    <VLocaleProvider :rtl="configStore.isAppRTL">
      <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
      <VApp
        :style="`--v-global-theme-primary: ${hexToRgb(
          global.current.value.colors.primary
        )}`"
      >
        <RouterView />

        <ScrollToTop />
      </VApp>
    </VLocaleProvider>

    <VSnackbar
      v-model="snackbar"
      location="bottom end"
      :color="layoutStore.snackbar_status === 'success' ? '#28C76F' : '#FF9494'"
      multi-line
    >
      <VRow>
        <VCol cols="2">
          <VIcon :icon="layoutStore.snackbar_status === 'success' ? 'tabler-square-rounded-check' : 'tabler-square-rounded-x'" size="32" color="white" />
        </VCol>
        <VCol cols="10">
          <div class="text-white">
            <h3 class="text-white">{{ layoutStore.snackbar_status.charAt(0).toUpperCase() + layoutStore.snackbar_status.slice(1) }}</h3>
            {{ layoutStore.snackbar_message }}
          </div>
        </VCol>
      </VRow>

      <template #actions>
        <VBtn color="primary" @click="layoutStore.setSnackbar(false)">
          <VIcon icon="tabler-x" color="white" />
        </VBtn>
      </template>
    </VSnackbar>
  </div>
</template>

<style lang="scss">
.layer-loader {
  position: fixed;
  z-index: 100000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(179, 128, 128, 0.418);
  overflow: hidden;
  height: 100vh;
}
.loader {
  width: 64px;
  height: 48px;
  position: absolute;
  animation: split 1s ease-in infinite alternate;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
.loader::before,
.loader::after {
  content: "";
  position: absolute;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  left: 0;
  top: 0;
  transform: translateX(-10px);
  background: #ff3d00;
  opacity: 0.75;
  backdrop-filter: blur(20px);
}

.loader::after {
  left: auto;
  right: 0;
  background: #fff;
  transform: translateX(10px);
}

@keyframes split {
  0%,
  25% {
    width: 64px;
  }
  100% {
    width: 148px;
  }
}
</style>
