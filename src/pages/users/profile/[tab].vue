<script setup>
import CardInfoProfile from "@/components/pages/profile/CardInfoProfile.vue";
import SecurityProfile from "@/views/pages/users/profile/SecurityProfile.vue";
import TableListApproval from "@/views/pages/users/profile/TableListApproval.vue";

definePage({
  meta: {
    navActiveLink: "users-profile-tab",
    key: "tab",
  },
});
const route = useRoute("users-profile-tab");
const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
});
const tabs = [
  {
    title: "Approval",
    icon: "tabler-users",
    tab: "approval",
  },
  {
    title: "Security",
    icon: "tabler-lock",
    tab: "security",
  },
];
</script>

<template>
  <VRow justify="space-between">
    <VCol cols="4">
      <CardInfoProfile />
    </VCol>
    <VCol cols="8">
      <VTabs v-model="activeTab" class="v-tabs-pill my-2 mt-4">
        <VTab
          v-for="item in tabs"
          :key="item.icon"
          :value="item.tab"
          :to="{ name: 'users-profile-tab', params: { tab: item.tab } }"
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
        <!-- approval -->
        <VWindowItem value="approval">
          <VCard>
            <VCardText>
                <TableListApproval />
            </VCardText>
          </VCard>
        </VWindowItem>

        <!-- security -->
        <VWindowItem value="security">
          <SecurityProfile />
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
