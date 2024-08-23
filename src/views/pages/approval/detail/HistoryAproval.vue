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
    <GlobalTable :headers="headers" :data="data" />
</template>
