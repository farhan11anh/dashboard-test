<script setup>
import p5 from '@images/pages/5.jpg'
</script>

<template>
  <VCard >
    <VCardText class="pa-5" >
        <VRow
            justify="center"
        >
            <div class="ma-auto pa-5">
                <VImg
                :width="120"
                :src="p5"
                class="rounded shadow"
                />
            </div>

        </VRow>
        <VCardTitle class="text-center" >Gelora Raga</VCardTitle>
        <VRow 
            justify="center" 
            class="pa-5 mb-4"
        >
            <VChip
                  label
                  color="secondary"
                  size="small"
                >
                  API Merchant
            </VChip>
        </VRow>

        <VDivider class="mb-4" />

        <p><strong>Store Name :</strong> <span>Gelora Raga Nusantara</span></p>
        <p><strong>Line Of Business :</strong> <span>Commercial Sports</span></p>
        <p><strong>Status :</strong> <span>Pending</span></p>
        <p><strong>Location :</strong> <span>Jakarta</span></p>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.shadow {
    border: 3px rgba(128, 128, 128, 0.235) solid;
    box-shadow: 0 1px 40px 0 rgba(128, 128, 128, 0.235);
}
</style>
