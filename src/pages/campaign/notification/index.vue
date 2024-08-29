<script setup>
import BannerCampaign from '@/views/pages/campaign/banner/BannerCampaign.vue';


</script>

<template>
    <AppTitle title="Banner Campaign" />

    <div class="w-full mb-5" >
        <VRow justify="end" >
          <VCol cols="2"  >
            <VBtn
                width="100%"
                color="primary"
                prepend-icon="tabler-plus"
                @click="$router.push('/campaign/notification/add-notification')"
              >
                Create Push Notification
            </VBtn>
          </VCol>
        </VRow>
      </div>

    <VCard class="pa-5" >
        <VCardTitle>Banner Campaign History</VCardTitle>
        <VDivider class="mb-4" />

        <BannerCampaign />
    </VCard>
</template>
