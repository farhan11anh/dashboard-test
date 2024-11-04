<script setup>
import { useChangePasswordStore } from '@/stores/profile/change-password';
import { ref } from 'vue';

const changePasswordStore = useChangePasswordStore();

const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const isCurrentPasswordVisible = ref(false)
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const rulesMatchPassword = [
  () => { 
    if (confirmPassword.value === newPassword.value || confirmPassword.value === newPassword.value || confirmPassword.value === ''  || newPassword.value === '') return true
    return 'Password does not match'
  },
  (value) => {
    if(value === '') return true
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d])[A-Za-z\d\S]{8,}$/;
    if(regex.test(value)) return true
    return 'Password must contain at least one uppercase, lowercase, special character and digit with min 8 chars'
  }
]

const buttonDisabled = computed(() => {
  return currentPassword.value === '' || newPassword.value === '' || confirmPassword.value === ''
})

const onChangePassword = async() => {
    await changePasswordStore.changePassword({ currentPassword: currentPassword.value, newPassword: newPassword.value, confirmPassword: confirmPassword.value })
     .then(() => {
       currentPassword.value = ''
       newPassword.value = ''
       confirmPassword.value = ''
     })
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <!-- 👉 Change password -->
      <VCard title="Change Password">
        <VCardText>
          <VAlert
            closable
            variant="tonal"
            color="warning"
            class="mb-4"
            title="Ensure that these requirements are met"
            text="Minimum 8 characters long, uppercase & symbol"
          />

          <VForm ref="form" @submit.prevent="onChangePassword()">
            <VRow>
              <VCol
                cols="12"
                md="4"
              >
                <AppTextField
                  v-model="currentPassword"
                  label="Current Password"
                  placeholder="············"
                  :type="isCurrentPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCurrentPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
                />
              </VCol>
              <VCol
                cols="12"
                md="4"
              >
                <AppTextField
                  v-model="newPassword"
                  :rules="rulesMatchPassword"
                  label="New Password"
                  placeholder="············"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
              </VCol>
              <VCol
                cols="12"
                md="4"
              >
                <AppTextField
                  v-model="confirmPassword"
                  :rules="rulesMatchPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <VBtn type="submit" :disabled="buttonDisabled">
                  Change Password
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

</template>
