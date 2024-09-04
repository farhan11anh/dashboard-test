<script setup>
import StorePreview from "@/views/pages/my-store/StorePreview.vue";
import CredentialAccess from "@/views/pages/my-store/CredentialAccess.vue";
import CardInfoMyStore from "@/components/pages/my-store/CardInfoMyStore.vue";

definePage({
  meta: {
    navActiveLink: "my-store-tab",
    key: "tab",
  },
});

const route = useRoute("my-store-tab");
const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
});

const tabs = [
  {
    icon: "tabler-users",
    title: "Store Preview",
    tab: "store-preview",
  },
  {
    icon: "tabler-lock",
    title: "Integration",
    tab: "integration",
  },
];
</script>

<template>
  <VRow>
    <VCol cols="12" md="4">
      <CardInfoMyStore
        store-name="Ace Hardware"
        image="/src/assets/images/pages/5.jpg"
        title="Ace Hardware"
        type="API Merchant"
        line-of-business="Home & Applicances"
        status="Active"
        location="Jakarta, Indonesia"
      />
    </VCol>
    <VCol cols="12" md="8">
      <VTabs v-model="activeTab" class="v-tabs-pill my-2 mt-4">
        <VTab
          v-for="item in tabs"
          :key="item.icon"
          :value="item.tab"
          :to="{ name: 'my-store-tab', params: { tab: item.tab } }"
        >
          <VIcon size="20" start :icon="item.icon" />
          {{ item.title }}
        </VTab>
      </VTabs>

      <VWindow
        v-model="activeTab"
        class="disable-tab-transition"
        :touch="false"
      >
        <!-- profile -->
        <VWindowItem value="store-preview">
            <StorePreview
                url="https://dummy-bayarind.id/2e915e59-3105-47f2-8838-6e46bf83b711"
            />
        </VWindowItem>

        <!-- integration -->
        <VWindowItem value="integration">
            <CredentialAccess 
                credential="2e915e59-3105-47f2-8838-6e46bf83b711"
                date="28 Dec, 12:21:01"
            />
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.card {
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #2F2B3D0F;
}
</style>
