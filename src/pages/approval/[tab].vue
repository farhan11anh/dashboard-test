<script setup>
import BannerApproval from '@/views/pages/approval/BannerApproval.vue';
import NotificationApproval from '@/views/pages/approval/NotificationApproval.vue';


definePage({
  meta: {
    navActiveLink: 'approval-tab',
    key: 'tab',
  },
})

const route = useRoute('approval-tab')

const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
})

// tabs
const tabs = [
  {
    title: 'Banner',
    icon: 'tabler-lock',
    tab: 'banner',
  },
  {
    title: 'Notifications',
    icon: 'tabler-users',
    tab: 'notification',
  }
]
</script>

<template>
  <div>
    <AppTitle title="Content Approval" />
    <VTabs
      v-model="activeTab"
      class="v-tabs-pill my-2 mt-4"
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
        :to="{ name: 'approval-tab', params: { tab: item.tab } }"
      >
        <VIcon
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>

    <VWindow
      v-model="activeTab"
      class="disable-tab-transition"
      :touch="false"
    >
      <!-- banner -->
      <VWindowItem value="banner">
        <VCard>
          <VCardTitle>Banner Campaign History</VCardTitle>
          <VCardText>
            <BannerApproval />
          </VCardText>
        </VCard>
      </VWindowItem>

      <!-- notification -->
      <VWindowItem value="notification">
        <NotificationApproval />
      </VWindowItem>
    </VWindow>
  </div>
</template>
