<script setup >
    const isDialogVisible = ref(false)

    const props = defineProps({
        buttonName : {
            type : String,
            required : true
        },
        title : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        variant : {
            type : String,
            required: false
        },
        color : {
            type : String,
            required: false
        }
    })
    const emit = defineEmits(['update:isDialogVisible'])

    const approve = () => {
      emit('update:isDialogVisible', true)
        isDialogVisible.value = !isDialogVisible.value
    }
</script>
<template>
    <VDialog v-model="isDialogVisible" persistent class="v-dialog-sm">
      <!-- Dialog Activator -->
      <template #activator="{ props }">
        <VBtn 
            v-bind="props"
            :variant="variant"
            :color="color"
        > {{ buttonName }} </VBtn>
      </template>

      <!-- Dialog close btn -->
      <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

      <!-- Dialog Content -->
      <VCard :title="title">
        <VCardText>
            {{ description }}
        </VCardText>

        <VCardText class="d-flex justify-end gap-3 flex-wrap">
          <VBtn
            color="secondary"
            variant="tonal"
            @click="isDialogVisible = false"
          >
            Close
          </VBtn>
          <VBtn @click="approve"> Approve </VBtn>
        </VCardText>
      </VCard>
    </VDialog>
</template>
