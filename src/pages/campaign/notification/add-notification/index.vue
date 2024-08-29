<script setup>
import AppTextarea from "@/@core/components/app-form-elements/AppTextarea.vue";

const title = ref("Dapatkan Diskon Spesial 20% untuk Semua Produk!");
const releaseDate = ref(new Date());
const detailContent = ref(
  "Kabar gembira untuk Anda! Hanya untuk waktu terbatas, nikmati diskon spesial 20% untuk semua produk. Jangan lewatkan kesempatan emas ini untuk mendapatkan produk favorit Anda dengan harga lebih murah! Gunakan kode promo: PROMO20 saat checkout di Glora"
);
</script>
<template>
  <AppTitle title="Add Notification" />
  <VCard>
    <VCardText>
      <VRow>
        <VCol cols="12">
          <AppTextField
            label="Title"
            placeholder="Input Title"
            v-model="title"
          />
        </VCol>
        <VCol cols="12" md="4">
          <AppDateTimePicker
            v-model="releaseDate"
            label="Release Date"
            placeholder="Input Period Time"
            :config="{ mode: 'range' }"
          />
        </VCol>
        <VCol cols="12">
          <AppTextarea
            label="Detail Content"
            placeholder="Input Detail Content"
            v-model="detailContent"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>

  <div class="d-flex gap-4 align-center flex-wrap justify-end mt-16">
    <VBtn variant="tonal" color="secondary"> Cancel </VBtn>
    <GlobalConfirmationDialog
      @update:is-dialog-visible="hola($event)"
      button-name="Save"
      title="Confirmation"
      description="Are you sure to Save ?"
    />
  </div>
</template>
