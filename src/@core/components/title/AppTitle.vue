<template>
    <h4 class="text-h4 font-weight-medium ">
          {{ title }}
    </h4>
</template>

<script setup >
    const props = defineProps({
      title: {
        type: String,
        required: true,
      },    
    })
</script>
