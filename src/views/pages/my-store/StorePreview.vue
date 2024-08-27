<script setup>
const props = defineProps({
    url: {
        type: String,
        required: true
    }
})

</script>

<template>
  <VCard>
    <VCardTitle>Store Preview</VCardTitle>
    <VCardText>
      <div class="mt-2">
        <p>
          This is how looks like your store placed on BRI Lifestyle, please take
          note this only dummy URL
        </p>
      </div>
      <div class="card pa-2">
        <a :href="url">
          {{ url }}
        </a>
        <VIcon size="20" icon="tabler-external-link" />
      </div>
    </VCardText>
  </VCard>
</template>
