<script setup>
// import p5 from '@images/pages/5.jpg'

const props = defineProps({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    storeName: {
        type: String,
        required: true,
    },
    lineOfBusiness: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
})
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
                :src="image"
                class="rounded shadow"
                />
            </div>

        </VRow>
        <VCardTitle class="text-center" >{{ title }}</VCardTitle>
        <VRow 
            justify="center" 
            class="pa-5 mb-4"
        >
            <VChip
                  label
                  color="secondary"
                  size="small"
                >
                  {{ type }}
            </VChip>
        </VRow>

        <VDivider class="mb-4" />

        <p><strong>Store Name :</strong> <span>{{ storeName }}</span></p>
        <p><strong>Line Of Business :</strong> <span>{{ lineOfBusiness }}</span></p>
        <p><strong>Status :</strong> <span>{{ status }}</span></p>
        <p><strong>Location :</strong> <span>{{ location }}</span></p>

        <VRow
            justify="center"
        >
            <VCol
                cols="12"
                class="text-center"
                >
                <VBtn
                    class="me-4"
                    type="submit"
                >
                    Edit
                </VBtn>
                <VBtn
                    color="secondary"
                    variant="tonal"
                >
                    Suspend
                </VBtn>
            </VCol>
        </VRow>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.shadow {
    border: 3px rgba(128, 128, 128, 0.235) solid;
    box-shadow: 0 1px 40px 0 rgba(128, 128, 128, 0.235);
}
</style>
