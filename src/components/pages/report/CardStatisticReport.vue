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
        <div class="d-flex align-center gap-x-4 mb-1">
          <VAvatar variant="tonal" :color="color" rounded>
            <VIcon :icon="icons" size="28" />
          </VAvatar>
          <h4 class="text-h4">
            {{ primaryValue }}
          </h4>
        </div>
        <div class="text-body-1 mb-1">
          {{ title }}
        </div>
        <div class="d-flex gap-x-2 align-center">
          <h6 class="text-h6">
            {{ secondaryValue }}%
          </h6>
          <div class="text-sm text-disabled">{{ subtitle }}</div>
        </div>
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
</style>
