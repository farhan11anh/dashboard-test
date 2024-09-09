<script setup>
import AppDateTimePicker from "@/@core/components/app-form-elements/AppDateTimePicker.vue";
import AppSelect from "@/@core/components/app-form-elements/AppSelect.vue";
import AppTextField from "@/@core/components/app-form-elements/AppTextField.vue";
import AppTitle from "@/@core/components/title/AppTitle.vue";
import { requiredValidator } from "@/@core/utils/validators";
import PreviewHomepageConfiguration from "@/views/pages/settings/homepage-configuration/PreviewHomepageConfiguration.vue";
import { VForm } from "vuetify/components/VForm";

const refForm = ref < VForm > null;

import { useHomepageConfigurationStore } from "@/stores/homepage-configuration";
const homepageConfigurationStore = useHomepageConfigurationStore();

const rulesMerchant = [
  (fileList) =>
    !fileList ||
    !fileList.length ||
    fileList[0].size < 1000000 ||
    "Avatar size should be less than 1 MB!",
  requiredValidator,
];

const banner = ref([
  {
    merchant: "",
    banner: "",
    period: "",
  },
]);

const merchant = ref([
  {
    imgMerchant: "",
  },
]);

const imgLifeStyleFeature = ref([])

const todaysPick = ref([
  {
    imgTodaysPick: "",
    period: "",
  },
  {
    imgTodaysPick: "",
    period: "",
  },
  {
    imgTodaysPick: "",
    period: "",
  },
]);

const entertainment = ref({
  imgEntertainment: "",
  period: "",
  link: "",
});

const news = ref([
  {
    imgNews: "",
    period: "",
    title: "",
  },
]);

const onAddBanner = () => {
  banner.value.push({
    merchant: "",
    banner: "",
    period: "",
  });
};

const onAddMerchant = () => {
  merchant.value.push({
    imgMerchant: "",
  });
};

const onAddNews = () => {
  news.value.push({
    imgNews: "",
    period: "",
    title: "",
  });
};

const onSave = () => {
  const data = {
    banner: banner.value,
    merchant: merchant.value,
    todaysPick: todaysPick.value,
    entertainment: entertainment.value,
    news: news.value,
  };
  console.log(data);
};

const getUrlImage = (event, index) => {

  if(event) {
    imgLifeStyleFeature.value[index] = URL.createObjectURL(event)
  } else {
    imgLifeStyleFeature.value[index] = null
  }

  homepageConfigurationStore.updateImgLifestyleFeature(URL.createObjectURL(event), index)
  // console.log(homepageConfigurationStore.imgLifestyleFeature, 'data dari store');
  
}
</script>

<template>
  <VForm @submit.prevent ref="refForm">
    <VRow justify="space-between">
      <VCol cols="12" md="8">
        <div class="title">Homepage Configuration</div>
        <RouterLink to="#banner">Banner</RouterLink> |
        <RouterLink to="#lifestyle">LifeStyle Feature</RouterLink> |
        <RouterLink to="#today">Today Picks</RouterLink> |
        <RouterLink to="#entertainment">Entertainment</RouterLink> |
        <RouterLink to="#news">News</RouterLink>

        <VRow class="mt-4" id="banner">
          <!-- Banner Highlight -->
          <VCol cols="12">
            <div class="card">
              <div class="card-header">Banner Highlight</div>
              <div class="card-body" v-for="item in banner" :key="item">
                <div class="card-sub-header">
                  Banner {{ banner.indexOf(item) + 1 }}
                </div>
                <VRow justify="space-between">
                  <VCol cols="12" md="4">
                    <AppSelect
                      v-model="item.merchant"
                      :items="[
                        { title: 'Web', value: 'web' },
                        { title: 'Art', value: 'art' },
                        { title: 'UI/UX', value: 'ui/ux' },
                        { title: 'Psychology', value: 'psychology' },
                        { title: 'Design', value: 'design' },
                      ]"
                      placeholder="Choose Merchant"
                      :rules="[requiredValidator]"
                    />
                  </VCol>
                  <VCol cols="12" md="4">
                    <AppSelect
                      v-model="item.banner"
                      :items="[
                        { title: 'Web', value: 'web' },
                        { title: 'Art', value: 'art' },
                        { title: 'UI/UX', value: 'ui/ux' },
                        { title: 'Psychology', value: 'psychology' },
                        { title: 'Design', value: 'design' },
                      ]"
                      placeholder="Choose Banner"
                      :rules="[requiredValidator]"
                    />
                  </VCol>
                  <VCol cols="12" md="4">
                    <AppDateTimePicker
                      v-model="item.period"
                      placeholder="Choose Date"
                      :config="{ mode: 'range' }"
                      :rules="[requiredValidator]"
                    />
                  </VCol>
                  <VCol
                    cols="12"
                    md="4"
                    v-if="banner.indexOf(item) == banner.length - 1"
                  >
                    <VBtn color="primary" width="100%" @click="onAddBanner">
                      Add Banner
                    </VBtn>
                  </VCol>
                </VRow>
              </div>
            </div>
          </VCol>

          <!-- LifeStyle Feature -->
          <VCol cols="12" id="lifestyle">
            <div class="card">
              <div class="card-header">LifeStyle Feature</div>
              <div class="card-body" v-for="item in merchant" :key="item">
                <div class="card-sub-header">
                  Merchant {{ merchant.indexOf(item) + 1 }}
                </div>
                <VRow justify="space-between">
                  <VCol cols="12">
                    <VFileInput
                      :rules="rulesMerchant"
                      accept="image/png, image/jpeg, image/bmp, image/jpg"
                      placeholder="Choose Merchant"
                      prepend-icon="tabler-camera"
                      @update:model-value="getUrlImage($event, merchant.indexOf(item))"
                    />
                  </VCol>
                  <VCol cols="12" md="4">
                    <VBtn
                      color="primary"
                      width="100%"
                      v-if="merchant.indexOf(item) == merchant.length - 1"
                      @click="onAddMerchant"
                    >
                      Add Merchant
                    </VBtn>
                  </VCol>
                </VRow>
              </div>
            </div>
          </VCol>

          <!-- Today Picks -->
          <VCol cols="12" id="today">
            <div class="card">
              <div class="card-header">Today Picks</div>
              <div class="card-body" v-for="item in todaysPick" :key="item">
                <div class="card-sub-header">
                  Banner {{ todaysPick.indexOf(item) + 1 }}
                </div>
                <VRow justify="space-between">
                  <VCol cols="12" md="8">
                    <VFileInput
                      v-model="item.imgTodaysPick"
                      :rules="rulesMerchant"
                      accept="image/png, image/jpeg, image/bmp, image/jpg"
                      placeholder="Choose Merchant"
                      prepend-icon="tabler-camera"
                    />
                  </VCol>
                  <VCol cols="12" md="4">
                    <AppDateTimePicker
                      v-model="item.period"
                      placeholder="Choose Date"
                      :config="{ mode: 'range' }"
                      :rules="[requiredValidator]"
                    />
                  </VCol>
                </VRow>
              </div>
            </div>
          </VCol>

          <!-- Entertainmet -->
          <VCol cols="12" id="entertainment">
            <div class="card">
              <div class="card-header">Entertainment</div>
              <div class="card-body">
                <VRow justify="space-between">
                  <VCol cols="12" md="8">
                    <VFileInput
                      v-model="entertainment.imgEntertainment"
                      :rules="rulesMerchant"
                      accept="image/png, image/jpeg, image/bmp, image/jpg"
                      placeholder="Choose Merchant"
                      prepend-icon="tabler-camera"
                    />
                  </VCol>
                  <VCol cols="12" md="4">
                    <AppDateTimePicker
                      v-model="entertainment.period"
                      placeholder="Choose Date"
                      :config="{ mode: 'range' }"
                      :rules="[requiredValidator]"
                    />
                  </VCol>
                  <VCol cols="12">
                    <AppTextField
                      placeholder="Insert Link"
                      v-model="entertainment.link"
                    />
                  </VCol>
                </VRow>
              </div>
            </div>
          </VCol>
          <!-- News & Update -->
          <VCol cols="12" id="news">
            <div class="card">
              <div class="card-header">News & Update</div>
              <div class="card-body" v-for="item in news" :key="item">
                <VRow justify="space-between">
                  <VCol cols="12" md="8">
                    <VFileInput
                      v-model="item.imgNews"
                      :rules="rulesMerchant"
                      accept="image/png, image/jpeg, image/bmp, image/jpg"
                      placeholder="Choose News"
                      prepend-icon="tabler-camera"
                    />
                  </VCol>
                  <VCol cols="12" md="4">
                    <AppDateTimePicker
                      v-model="item.period"
                      placeholder="Choose Date"
                      :config="{ mode: 'range' }"
                      :rules="[requiredValidator]"
                    />
                  </VCol>
                  <VCol cols="12">
                    <AppTextField
                      placeholder="Insert Title"
                      v-model="item.title"
                    />
                  </VCol>
                  <VCol cols="12" md="4">
                    <VBtn
                      color="primary"
                      width="100%"
                      v-if="news.indexOf(item) == news.length - 1"
                      @click="onAddNews"
                    >
                      Add News
                    </VBtn>
                  </VCol>
                </VRow>
              </div>
            </div>
          </VCol>

          <VCol>
            <VBtn color="primary" @click="onSave" type="submit"> Save </VBtn>
          </VCol>
        </VRow>
      </VCol>
      <VCol cols="12" md="4">
        <PreviewHomepageConfiguration
          :lifestylesImg="imgLifeStyleFeature"
        />
      </VCol>
    </VRow>
  </VForm>
</template>

<style lang="scss">
.title {
  font-weight: 1000;
  font-size: 35px;
  line-height: 20px;
  width: 100%;
  margin-bottom: 1rem;
}
.card {
  background-color: #f8f9fb;
  border: 1px solid #e2e2e3;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.card .card-header {
  font-weight: 1000;
  font-size: 26px;
  line-height: 20px;
  color: #000000;
  background-color: #f4f4f775;
  border-bottom: 1px solid #e2e2e3;
  padding: 2rem;
  width: 100%;
}
.card .card-body {
  padding: 2rem;
}
.card .card-sub-header {
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 1.5rem;
}
</style>
