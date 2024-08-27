<script setup>
import AppTitle from '@/@core/components/title/AppTitle.vue';
import p5 from '@images/pages/5.jpg'
const items = ref([
  "KTP Direktur",
  "NPWP Direktur",
  "Akta Pendirian",
  "Akta Perubahan",
  "NPWP Perusahaan",
  "Upload SK Menhukam",
  "Upload SIUP",
  "Upload TDP/NIB",
  "Sertifikat HAKI",
]);

const userData = ref({
  fullName: "John Doe",
  email: "bH7Zk@example.com",
  phoneNumber: "081234567890",
  bank: "BCA",
  bankAccountName: "PT. Nusantara Sejahtera Raya",
  bankAccountNumber: "1234567890",
});
</script>
<template>
  <VCard>
    <VCardTitle>Attachment</VCardTitle>
    <VCardText class="mb-5">
      <VRow>
        <VCol cols="12" md="6" v-for="(item, index) in items" :key="index">
          <VChip>
            <VImg
              src="/src/assets/images/icons/project-icons/pdf.png"
              width="20px"
              height="20px"
              class="mr-2"
            />
            {{ item }}.pdf
          </VChip>
        </VCol>
      </VRow>
    </VCardText>

    <VCardTitle>Business PIC</VCardTitle>
    <VCardText class="mb-5">
      <VRow>
        <VCol cols="12">
          <AppTextField
            label="Fullname"
            name="fullName"
            placeholder="Input Fullname"
            v-model="userData.fullName"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Email"
            name="email"
            placeholder="Input Email"
            v-model="userData.email"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Mobile Phone Number"
            name="phone"
            placeholder="Input Mobile Phone Number"
            v-model="userData.phoneNumber"
          />
        </VCol>
      </VRow>
    </VCardText>

    <VCardTitle>Technical PIC</VCardTitle>
    <VCardText class="mb-5">
      <VRow>
        <VCol cols="12">
          <AppTextField
            label="Fullname"
            name="fullName"
            placeholder="Input Fullname"
            v-model="userData.fullName"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Email"
            name="email"
            placeholder="Input Email"
            v-model="userData.email"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Mobile Phone Number"
            name="phone"
            placeholder="Input Mobile Phone Number"
            v-model="userData.phoneNumber"
          />
        </VCol>
      </VRow>
    </VCardText>

    <VCardTitle>Bank Account</VCardTitle>
    <VCardText class="mb-5">
      <VRow>
        <VCol cols="12">
          <AppTextField
            label="Bank"
            name="bank"
            placeholder="Input Bank"
            v-model="userData.bank"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Bank Account Name"
            name="bankAccountName"
            placeholder="Input Bank Account Name"
            v-model="userData.bankAccountName"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Bank Account Number"
            name="bankAccountNumber"
            placeholder="Input Bank Account Number"
            v-model="userData.bankAccountNumber"
          />
        </VCol>
      </VRow>
    </VCardText>

    <VCardText>
      <VRow justify="center">
        <VCol cols="3">
          <VRow justify="center">
            <div class="ma-auto pa-5">
              <VImg :width="120" :src="p5" class="rounded shadow" />
            </div>
          </VRow>
          <VCardTitle class="text-center">Gelora Raga</VCardTitle>
          <VRow justify="center" class="pa-5 mb-4">
            <VChip label color="secondary" size="small"> API Merchant </VChip>
          </VRow>
        </VCol>
        <VCol cols="7"> 
            <div>
                <h3>Store Preview</h3>
                <p
                    class="mt-3 mb-5"
                >
                    This is how looks like the store placed on BRI Lifestyle, please take note this only dummy URL
                </p>
                <div class="card pa-3">
                    <a href="#">
                        https://dummy-bayarind.id/2e915e59-3105-47f2-8838-6e46bf83b711
                    </a>

                    <VIcon
                        size="20"
                        icon="tabler-external-link"
                    />
                </div>
            </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.card {
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #2F2B3D0F;
}

</style>
