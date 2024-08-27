<script setup>
const props = defineProps({
  credential: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  }
});

const isNotifCopyVisible = ref(false)

const copySuccessMessage = ref('')

const copyText = async () => {
  try {
    isNotifCopyVisible.value = true
    await navigator.clipboard.writeText(props.credential);
    copySuccessMessage.value = "Text copied successfully!";
    // Clear the message after a few seconds
    setTimeout(() => {
      copySuccessMessage.value = "";
    }, 3000);
  } catch (err) {
    copySuccessMessage.value = "Failed to copy text";
  }
};
</script>
<template>
  <VCard>
    <VCardTitle>Credential & Access</VCardTitle>
    <VCardText>
      <div class="mt-2">
        <p>
          An credentilas key is a simple encrypted string that identifies an
          application without any principal. They are useful for accessing
          public data anonymously, and are used to associate API requests with
          your project for quota and billing.
        </p>
      </div>
      <div class="card pa-5">
        <h3 style="display: inline" class="mr-2">Merchant</h3>
        <VChip color="primary"> Confidential </VChip>

        <div class="mt-4">
          <strong> {{ credential }} </strong>

          <VIcon @click="copyText" size="20" icon="tabler-copy" />

          <div class="mt-4 font-weight-thin">
            Credential on {{ date }}
          </div>
        </div>
      </div>
    </VCardText>
  </VCard>

  <VSnackbar v-model="isNotifCopyVisible">
    Coppy successfully

    <template #actions>
      <VBtn
        color="error"
        @click="isNotifCopyVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
