<script setup>
definePage({
  meta: {
    navActiveLink: "campaign-banner-add-banner-tab",
    key: "tab",
  },
});

const route = useRoute("campaign-banner-add-banner-tab");
const activeTab = computed({
  get: () => route.params.tab,
  set: () => route.params.tab,
});

const tabs = [
  {
    title: "Primary Banner",
    icon: "tabler-users",
    tab: "primary-banner",
  },
  {
    title: "Secondary Banner",
    icon: "tabler-lock",
    tab: "secondary-banner",
  },
];

const periodTime = ref();
const fileLogo = ref();
const bannerName = ref();
const redirectURL = ref(
  "https://dummy-bayarind.id/2e915e59-3105-47f2-8838-6e46bf83b711"
);
</script>

<template>
  <AppTitle>Upload Banner</AppTitle>
  <VTabs v-model="activeTab" class="v-tabs-pill my-2 mt-4">
    <VTab
      v-for="item in tabs"
      :key="item.icon"
      :value="item.tab"
      :to="{
        name: 'campaign-banner-add-banner-tab',
        params: { tab: item.tab },
      }"
    >
      <VIcon size="20" start :icon="item.icon" />
      {{ item.title }}
    </VTab>
  </VTabs>

  <VWindow v-model="activeTab" class="disable-tab-transition" :touch="false">
    <!-- primary -->
    <VWindowItem value="primary-banner">
      <VCard>
        <VCardTitle>Primary Banner</VCardTitle>
        <VCardText>
          <VRow>
            <VCol cols="12" md="8">
              <CustomUploadAndPreview
                v-model:image-preview="fileLogo"
                @update:imagePreview="fileLogo = $event"
                :btnTitle="'Upload Primary Banner'"
                warningMessage="Allowed JPG, GIF or PNG. Max size of 800K Width: 350px; height: 180px; top: 173px; left: 20px"
                max-size="800"
              />
            </VCol>
          </VRow>

          <VRow>
            <VCol cols="12" md="8">
              <AppDateTimePicker
                v-model="periodTime"
                label="Peroid Time"
                placeholder="Input Period Time"
                :config="{ mode: 'range' }"
              />
            </VCol>
            <VCol cols="12">
              <AppTextField
                label="Banner Name"
                placeholder="Input Banner Name"
                v-model="bannerName"
              />
            </VCol>
            <VCol cols="12">
              <AppTextField
                label="Redirect URL"
                placeholder="Input Banner Name"
                v-model="redirectURL"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VWindowItem>

    <!-- secondary -->
    <VWindowItem value="secondary-banner">
      <VCard>
        <VCardTitle>Secondary Banner</VCardTitle>
        <VCardText>
          <VRow>
            <VCol cols="12" md="8">
              <CustomUploadAndPreview
                v-model:image-preview="fileLogo"
                @update:imagePreview="fileLogo = $event"
                :btnTitle="'Upload Secondary Banner'"
                warningMessage="Allowed JPG, GIF or PNG. Max size of 800K Width: 350px; height: 180px; top: 173px; left: 20px"
                max-size="800"
              />
            </VCol>
          </VRow>

          <VRow>
            <VCol cols="12" md="8">
              <AppDateTimePicker
                v-model="periodTime"
                label="Peroid Time"
                placeholder="Input Period Time"
                :config="{ mode: 'range' }"
              />
            </VCol>
            <VCol cols="12">
              <AppTextField
                label="Banner Name"
                placeholder="Input Banner Name"
                v-model="bannerName"
              />
            </VCol>
            <VCol cols="12">
              <AppTextField
                label="Redirect URL"
                placeholder="Input Banner Name"
                v-model="redirectURL"
              />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </VWindowItem>
  </VWindow>

  <div class="d-flex gap-4 align-center flex-wrap justify-end mt-16">
    <VBtn 
      variant="tonal" 
      color="secondary"
    > 
      Cancel 
    </VBtn>
    <GlobalConfirmationDialog
      @update:is-dialog-visible="hola($event)"
      button-name="Save"
      title="Confirmation"
      description="Are you sure to Save ?"
    />
  </div>
</template>
