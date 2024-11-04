<script setup>
import { useGenerateImageVariant } from "@core/composable/useGenerateImageVariant";
import { VNodeRenderer } from "@layouts/components/VNodeRenderer";
import { themeConfig } from "@themeConfig";
import authV2ResetPasswordIllustrationDark from "@images/pages/auth-v2-reset-password-illustration-dark.png";
import authV2ResetPasswordIllustrationLight from "@images/pages/auth-v2-reset-password-illustration-light.png";
import authV2MaskDark from "@images/pages/misc-mask-dark.png";
import authV2MaskLight from "@images/pages/misc-mask-light.png";
import { useLayoutStore } from "@/stores/layout";
import { useAuthStore } from "@/stores/auth";

definePage({
  meta: {
    layout: "blank",
    public: true,
  },
});

const authStore = useAuthStore();
const form = ref({
  email: "",
});

const layoutStore = useLayoutStore();

const router = useRouter();
const route = useRoute();

const authThemeImg = useGenerateImageVariant(
  authV2ResetPasswordIllustrationLight,
  authV2ResetPasswordIllustrationDark
);
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark);

const onSubmit = () => {
  if(form.value.email !== "") {
    authStore.sendEmailForgetPassword({email : form.value.email}).then(() => {
      router.push({ name: "login" });
    }, err => {
      layoutStore.setSnackbar(true, 'error', err)
    });
  } else {
    layoutStore.setSnackbar(true, 'error', 'email is required')
  }
};
</script>

<template>
  <RouterLink to="/">
    <div class="auth-logo d-flex align-center gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="auth-title">
        {{ themeConfig.app.title }}
      </h1>
    </div>
  </RouterLink>

  <VRow no-gutters class="auth-wrapper bg-surface">
    <VCol md="8" class="d-none d-md-flex">
      <div class="position-relative bg-background w-100 me-0">
        <div
          class="d-flex align-center justify-center w-100 h-100"
          style="padding-inline: 150px"
        >
          <VImg
            max-width="451"
            :src="authThemeImg"
            class="auth-illustration mt-16 mb-2"
          />
        </div>

        <img
          class="auth-footer-mask flip-in-rtl"
          :src="authThemeMask"
          alt="auth-footer-mask"
          height="280"
          width="100"
        />
      </div>
    </VCol>

    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
    >
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-6">
        <VCardText>
          <h4 class="text-h4 mb-1">Forgot Password 🔒</h4>
          <p class="mb-0">Send to your email to reset your password</p>
        </VCardText>

        <VCardText>
          <VForm
            @submit.prevent="
              () => {
                onSubmit();
              }
            "
          >
            <VRow>
              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.email"
                  autofocus
                  label="Email"
                  placeholder="input email"
                  type="email"
                />
              </VCol>
              <!-- Set password -->
              <VCol cols="12">
                <VBtn block type="submit"> Send </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
