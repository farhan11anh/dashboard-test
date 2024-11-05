<script setup>
import congoImg from '@images/illustrations/congo-illustration.png'
import { useAuthStore } from '@/stores/auth';
import { computed } from 'vue';
import { useCookie } from '@/@core/composable/useCookie';
import { firstLetterUppercase } from '@/utils/firstlatterUppercase';

const time = computed(() => {
  const currentHour = new Date().getHours();
  
  if (currentHour >= 5 && currentHour < 12) {
    return " Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return " Afternoon";
  } else if (currentHour >= 18 && currentHour < 22) {
    return " Evening";
  } else {
    return " Night";
  }
})

const authStore = useAuthStore()
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol cols="8">
        <VCardText style="height: 184px" >
          <h5 class="text-h5 text-no-wrap">
            Welcome {{ useCookie('userData').value.name !== "" && firstLetterUppercase(useCookie('userData').value.name) || "Admin" }}🎉
          </h5>
          <p class="mb-2">
            Good {{ time }}
          </p>
          <!-- <h4 class="text-h4 text-primary mb-1">
            $48.9k
          </h4>
          <VBtn>View Sales</VBtn> -->
        </VCardText>
      </VCol>

      <VCol cols="4">
        <VCardText class="pb-0 px-0 position-relative h-100">
          <VImg
            :src="congoImg"
            :height="$vuetify.display.smAndUp ? 147 : 125"
            class="congo-john-img w-100"
          />
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.congo-john-img {
  position: absolute;
  inset-block-end: 0;
  inset-inline-end: 1.25rem;
}
</style>
