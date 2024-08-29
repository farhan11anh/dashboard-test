<script setup>
const isHover = ref(false)

const props = defineProps({
    primaryValue: {
        type: String,
        required: true  
    }, 
    secondaryValue: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    icons: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    }
})

</script>

<template>
  <div>
    <VCard
      class="logistics-card-statistics cursor-pointer"
      :style="
        isHover
          ? `border-block-end-color: rgb(var(--v-theme-${color}))`
          : `border-block-end-color: rgba(var(--v-theme-${color}),0.38)`
      "
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
    >
      <VCardText>
        <VRow justify="space-between">
          <VCol cols="10">
            <div class="d-flex align-center gap-x-4 mb-1">
              <h3>{{ title }}</h3>
            </div>
            <div class="d-flex align-center gap-x-4 mb-1 mt-4">
              <h2>{{ primaryValue }}</h2>
              <div class="text-percentage">(+{{ secondaryValue }}%)</div>
            </div>
            <div class="d-flex gap-x-2 align-center mt-4">
              <div class="text-sm text-disabled">{{ subtitle }}</div>
            </div>
          </VCol>
          <VCol cols="2">
            <VAvatar variant="tonal" :color="color" rounded>
              <VIcon :icon="icons" size="28" />
            </VAvatar>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
@use "@core/scss/base/mixins" as mixins;

.logistics-card-statistics {
  border-block-end-style: solid;
  border-block-end-width: 2px;

  &:hover {
    border-block-end-width: 3px;
    margin-block-end: -1px;

    @include mixins.elevation(8);

    transition: all 0.1s ease-out;
  }
}

.skin--bordered {
  .logistics-card-statistics {
    border-block-end-width: 2px;

    &:hover {
      border-block-end-width: 3px;
      margin-block-end: -2px;
      transition: all 0.1s ease-out;
    }
  }
}

.text-percentage {
  color: #28c76f;
}
</style>

