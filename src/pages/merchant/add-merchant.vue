<template>
  <AppTitle title="Add Merchant" />
  <VForm 
    ref="refForm" 
    @submit.prevent
  >
    <VCard class="mt-5">
      <VCardTitle> Business Information </VCardTitle>
      <VCardText>
        <br />
        <VRow>
          <VCol cols="12" md="6">
            <CustomUploadAndPreview
              v-model:image-preview="fileLogo"
              @update:imagePreview="fileLogo = $event"
              :btnTitle="'Upload Logo'"
              warningMessage="Max size 6MB, file format jpeg, jpg, and png."
              max-size="6000"
            />
          </VCol>
        </VRow>

        <VRow>
          <VCol cols="12" md="6">
            <AppTextField
              label="Merchant Name"
              name="MName"
              placeholder="Merchant Name"
              :rules="[requiredValidator]"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppSelect
              label="Country"
              name="country"
              placeholder="Country"
              :rules="[requiredValidator]"
              :items="[
                {
                  title: 'United States',
                  value: 'USA',
                },
                {
                  title: 'Canada',
                  value: 'CAN',
                },
                {
                  title: 'Australia',
                  value: 'AUS',
                },
              ]"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField
              label="Brand Name"
              name="brandName"
              placeholder="Brand Name"
              :rules="[requiredValidator]"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppSelect
              label="Province"
              name="province"
              placeholder="Province"
              :rules="[requiredValidator]"
              :items="[
                {
                  title: 'Alberta',
                  value: 'Alberta',
                },
                {
                  title: 'British Columbia',
                  value: 'British Columbia',
                },
                {
                  title: 'Newfoundland and Labrador',
                  value: 'Newfoundland and Hampshire',
                },
              ]"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField
              label="NPWP Number"
              name="Npwp"
              placeholder="NPWP Number"
              :rules="[requiredValidator]"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppSelect
              label="City"
              name="city"
              placeholder="City"
              :rules="[requiredValidator]"
              :items="[
                {
                  title: 'Los Angeles',
                  value: 'Los Angeles',
                },
                {
                  title: 'San Diego',
                  value: 'San Diego',
                },
                {
                  title: 'San Francisco',
                  value: 'San Francisco',
                },
              ]"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField
              label="Line Of Business (LOB)"
              name="LOB"
              placeholder="Line Of Business"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppSelect
              label="District"
              name="district"
              placeholder="District"
              :rules="[requiredValidator]"
              :items="[
                {
                  title: 'Los Angeles',
                  value: 'Los Angeles',
                },
                {
                  title: 'San Diego',
                  value: 'San Diego',
                },
                {
                  title: 'San Francisco',
                  value: 'San Francisco',
                },
              ]"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField
              label="Phone Number"
              name="phone"
              placeholder="Phone Number"
              :rules="[requiredValidator]"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppSelect
              label="Sub District"
              name="subDistrict"
              placeholder="Sub District"
              :rules="[requiredValidator]"
              :items="[
                {
                  title: 'Los Angeles',
                  value: 'Los Angeles',
                },
                {
                  title: 'San Diego',
                  value: 'San Diego',
                },
                {
                  title: 'San Francisco',
                  value: 'San Francisco',
                },
              ]"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField
              label="Address"
              name="address"
              placeholder="Address"
              :rules="[requiredValidator]"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField
              label="Postal Code"
              name="postalCode"
              placeholder="Postal Code"
              :rules="[requiredValidator]"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard class="mt-5">
      <VCardText>
        <VCardTitle> Director's Document </VCardTitle>
        <br />

        <VRow>
          <VCol cols="12" md="6">
            <CustomUploadAndPreview
              v-model:image-preview="fileLegalDocAktaPendirianAndPerubahan"
              @update:imagePreview="
                fileLegalDocAktaPendirianAndPerubahan = $event
              "
              :btnTitle="'Upload Akta Pendirian & Perubahan'"
              :customFontSize="'8px'"
              warningMessage="Max size 6MB, file format jpeg, jpg, and png."
              max-size="6000"
            />
          </VCol>
          <VCol cols="12" md="6">
            <CustomUploadAndPreview
              v-model:image-preview="fileDirectorNPWP"
              @update:imagePreview="fileDirectorNPWP = $event"
              :btnTitle="'Upload Director NPWP'"
              warningMessage="Max size 6MB, file format jpeg, jpg, and png."
              max-size="6000"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField
              label="Director's Name"
              name="directorName"
              placeholder="Director's Name"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField
              label="Director's NPWP Number"
              name="directorNpwp"
              placeholder="Director's NPWP Number"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField
              label="Director's KTP Number"
              name="directorKTP"
              placeholder="Director's KTP Number"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard class="mt-5">
      <VCardText>
        <VCardTitle>Legals Document</VCardTitle>
        <VRow>
          <VCol cols="12" md="6">
            <CustomUploadAndPreview
              v-model:image-preview="fileLegalDocAktaPendirianAndPerubahan"
              @update:imagePreview="
                fileLegalDocAktaPendirianAndPerubahan = $event
              "
              :btnTitle="'Upload Akta Pendirian & Perubahan'"
              :customFontSize="'10px'"
              warningMessage="Max size 6MB, file format jpeg, jpg, and png."
              max-size="6000"
            />
          </VCol>
          <VCol cols="12" md="6">
            <CustomUploadAndPreview
              v-model:image-preview="fileSKMentriKehakiman"
              @update:imagePreview="fileSKMentriKehakiman = $event"
              :btnTitle="'Upload SK Mentri Kehakiman'"
              :customFontSize="'10px'"
              warningMessage="Max size 6MB, file format jpeg, jpg, and png."
              max-size="6000"
            />
          </VCol>
          <VCol cols="12" md="6">
            <CustomUploadAndPreview
              v-model:image-preview="fileBusinessNpwp"
              @update:imagePreview="fileBusinessNpwp = $event"
              :btnTitle="'Upload '"
              warningMessage="Max size 6MB, file format jpeg, jpg, and png."
              max-size="6000"
            />
          </VCol>
          <VCol cols="12" md="6">
            <CustomUploadAndPreview
              v-model:image-preview="fileTdp"
              @update:imagePreview="fileTdp = $event"
              :btnTitle="'Upload TDP/NIB'"
              warningMessage="Max size 6MB, file format jpeg, jpg, and png."
              max-size="6000"
            />
          </VCol>
          <VCol cols="12" md="6">
            <CustomUploadAndPreview
              v-model:image-preview="fileSiup"
              @update:imagePreview="fileSiup = $event"
              :btnTitle="'Upload SIUP (Optional)'"
              warningMessage="Max size 6MB, file format jpeg, jpg, and png."
              max-size="6000"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard class="mt-5">
      <VCardTitle>PIC Business Merchant</VCardTitle>
      <VCardText>
        <VRow>
          <VCol cols="12" md="6">
            <AppTextField
              label="Fullname"
              name="fullName"
              placeholder="Input Fullname"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField
              label="Email"
              name="email"
              placeholder="Input Email"
            />
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
      <VCardTitle>PIC Techical Merchant</VCardTitle>
      <VCardText>
        <VRow>
          <VCol cols="12" md="6">
            <AppTextField
              label="Fullname"
              name="fullName"
              placeholder="Input Fullname"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField
              label="Email"
              name="email"
              placeholder="Input Email"
            />
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
      <VCardText>
        <VRow>
          <VCol cols="12" md="6">
            <AppTextField label="Bank" name="bank" placeholder="Input Bank" />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField
              label="Bank Account Name"
              name="bankAccName"
              placeholder="Input Bank Account Name"
            />
          </VCol>
          <VCol cols="12" md="6">
            <AppTextField
              label="Bank Account Number"
              name="bankAccNumber"
              placeholder="Input Bank Account Number"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard class="mt-5">
      <VCardTitle>Type Merchant</VCardTitle>
      <VCardText>
        <CustomRadiosWithIcon
          v-model:selected-radio="selectedRadio"
          :radio-content="radioContent"
          :grid-column="{ sm: '2', cols: '12' }"
        />
      </VCardText>
    </VCard>

    <VCard class="mt-5">
      <VCardTitle>
        <VRow justify="space-between">
          <VCol> Status </VCol>
          <VCol cols="1">
            <VRow justify="end">
              <VCol>
                <VSwitch v-model="selectedSwitch" color="warning" />
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </VCardTitle>
    </VCard>

    <VRow justify="end" class="mt-5">
      <VCol cols="6">
        <div class="d-flex gap-4 align-center flex-wrap flex-row-reverse">
          <VBtn variant="tonal" color="secondary"> Cancel </VBtn>
          <!-- <VBtn>Save</VBtn> -->
          <GlobalConfirmationDialog
            @update:is-dialog-visible="onSave($event)"
            button-name="Save"
            title="Confirmation"
            description="Are you sure to Save ?"
          />
          <GlobalConfirmationDialog
            @update:is-dialog-visible="onSaveAsDraft($event)"
            button-name="Save as Draft"
            title="Confirmation"
            description="Are you sure to Save as Draft ?"
            variant="tonal"
            color="#ADD8E6"
          />
        </div>
      </VCol>
    </VRow>
  </VForm>
</template>

<script setup>
import { requiredValidator } from "@/@core/utils/validators";
import { ref } from "vue";
import { VForm } from "vuetify/components/VForm";

const examplePreview = ref("");

const fileLogo = ref(null);
const fileDirectorIdCard = ref(null);
const fileDirectorNPWP = ref(null);
const fileLegalDocAktaPendirianAndPerubahan = ref(null);
const fileSKMentriKehakiman = ref(null);
const fileBusinessNpwp = ref(null);
const fileTdp = ref(null);
const fileSiup = ref(null);

const defaultImage = "/src/assets/images/merchant/file-upload.png"; // replace with your default image path
const imagePreview = ref(defaultImage);
const fileInput = ref(null); // Initialize fileInput reference

const refForm = ref();

const onSave = (event)=>{
  console.log(event);
  refForm?.value?.validate()
}

const triggerFileUpload = () => {
  if (fileInput.value) {
    fileInput.value.click(); // Access the DOM element correctly
  }
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Check file size and format
    if (
      file.size <= 6 * 1024 * 1024 &&
      ["image/jpeg", "image/png"].includes(file.type)
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview.value = e.target.result;
        console.log(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Invalid file format or size. Please select a valid image.");
      resetImage();
    }
  }
};

const resetImage = () => {
  imagePreview.value = defaultImage;
};

const radioContent = [
  {
    title: "API",
    desc: "Merchant have a API for connection",
    value: "api",
    icon: {
      icon: "tabler-star",
      size: "28",
    },
  },
  {
    title: "Webview",
    desc: "Merchant have webview for integration",
    value: "personal",
    icon: {
      icon: "tabler-star",
      size: "28",
    },
  },
  {
    title: "Custom",
    desc: "Merchant not have API or Webview",
    value: "enterprise",
    icon: {
      icon: "tabler-star",
      size: "28",
    },
  },
];

const selectedRadio = ref("api");
const selectedSwitch = ref(true);
</script>

<style scoped>
.uploader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.preview-and-actions {
  display: flex;
  align-items: flex-start;
}

.preview-container {
  width: 150px; /* Adjust width as needed */
  /* height: 200px; Adjust height as needed */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* margin-right: 20px; Space between preview and buttons */
}

.image-preview {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* border: 1px solid #ccc; */
}

.actions-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.upload-btn,
.reset-btn {
  margin-bottom: 10px; /* Space between buttons */
}

.file-guidelines {
  margin-top: 10px;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
}
</style>
