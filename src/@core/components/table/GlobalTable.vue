<script setup>

const props = defineProps({
    headers:{
        type: Array,
        required: true
    },
    data:{
        type: Array,
        required: true
    }
})

</script>

<template>
  <VDataTable
    :headers="headers"
    :items="data"
    :items-per-page="5"
  />
</template>
