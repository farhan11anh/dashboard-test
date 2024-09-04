<script setup>
import { useRoute, useRouter } from "vue-router";
import p5 from "@images/pages/5.jpg";
import AppTextField from "@/@core/components/app-form-elements/AppTextField.vue";
import AppCombobox from "@/@core/components/app-form-elements/AppCombobox.vue";

const router = useRouter();
const route = useRoute();

definePage({
  meta: {
    navActiveLink: "merchant-approval-merchant-id",
    key: "id",
  },
});

console.log(route.params.id);

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
</script>

<template>
  <VCard>
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
          <div class="pa-5">
            <h3>Store Preview</h3>
            <p class="mt-3 mb-5">
              This is how looks like the store placed on BRI Lifestyle, please
              take note this only dummy URL
            </p>
            <div class="card pa-3">
              <a href="#">
                https://dummy-bayarind.id/2e915e59-3105-47f2-8838-6e46bf83b711
              </a>

              <VIcon size="20" icon="tabler-external-link" />
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>

  <VCard class="mt-5">
    <VCardTitle>Business Information</VCardTitle>
    <VCardText>
      <VRow>
        <VCol cols="12" md="6">
          <AppTextField
            label="Legal Name"
            name="legalName"
            placeholder="Input Legal Name"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Country"
            name="country"
            placeholder="Input Country"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Brand Name"
            name="brandName"
            placeholder="Input Brand Name"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Province"
            name="province"
            placeholder="Input Province"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="NPWP Number"
            name="npwpNumber"
            placeholder="Input NPWP Number"
          />
        </VCol>

        <VCol cols="12" md="6">
          <AppTextField label="City" name="city" placeholder="Input City" />
        </VCol>

        <VCol cols="12" md="6">
          <AppTextField
            label="Line of Business"
            name="lineOfBusiness"
            placeholder="Input Line of Business"
          />
        </VCol>

        <VCol cols="12" md="6">
          <AppTextField
            label="District"
            name="district"
            placeholder="Input District"
          />
        </VCol>

        <VCol cols="12" md="6">
          <AppTextField
            label="Phone Number"
            name="phoneNumber"
            placeholder="Input Phone Number"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Sub District"
            name="subDistrict"
            placeholder="Input Sub District"
          />
        </VCol>
        <VCol>
          <AppTextField
            label="Address"
            name="address"
            placeholder="Input Address"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Postal Code"
            name="postalCode"
            placeholder="Input Postal Code"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>

  <VCard class="mt-5">
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
  </VCard>

  <VCard class="mt-5">
    <VCardTitle>Business PIC</VCardTitle>
    <VCardText class="mb-5">
      <VRow>
        <VCol cols="12">
          <AppTextField
            label="Fullname"
            name="fullName"
            placeholder="Input Fullname"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField label="Email" name="email" placeholder="Input Email" />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Mobile Phone Number"
            name="phone"
            placeholder="Input Mobile Phone Number"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>

  <VCard class="mt-5">
    <VCardTitle>Technical PIC</VCardTitle>
    <VCardText class="mb-5">
      <VRow>
        <VCol cols="12">
          <AppTextField
            label="Fullname"
            name="fullName"
            placeholder="Input Fullname"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField label="Email" name="email" placeholder="Input Email" />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Mobile Phone Number"
            name="phone"
            placeholder="Input Mobile Phone Number"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>

  <VCard class="mt-5">
    <VCardTitle>Bank Account</VCardTitle>
    <VCardText class="mb-5">
      <VRow>
        <VCol cols="12">
          <AppSelect
            label="Bank"
            name="bank"
            placeholder="Input Bank"
            :items="[{ title: 'BCA', value: 'BCA' }]"
            clearable
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Bank Account Name"
            name="bankAccountName"
            placeholder="Input Bank Account Name"
          />
        </VCol>
        <VCol cols="12" md="6">
          <AppTextField
            label="Bank Account Number"
            name="bankAccountNumber"
            placeholder="Input Bank Account Number"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>

  <div
    class="d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6 mt-5"
  >
    <div class="d-flex flex-column justify-center"></div>
    <div class="d-flex gap-4 align-center flex-wrap">
      <VBtn variant="tonal" color="secondary"> Cancel </VBtn>
      <GlobalConfirmationDialog
        @update:is-dialog-visible="hola($event)"
        button-name="Declined"
        title="Confirmation"
        description="Are you sure to Decline ?"
        variant="tonal"
        color="warning"
      />
      <GlobalConfirmationDialog
        @update:is-dialog-visible="hola($event)"
        button-name="Approve"
        title="Confirmation"
        description="Are you sure to Approve ?"
      />
    </div>
  </div>
</template>

<style lang="scss">
.card {
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #2f2b3d0f;
}
</style>
