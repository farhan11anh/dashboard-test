<script setup>
import CardStatitistics from '@/components/pages/merchant/CardStatitistics.vue';
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <CardStatitistics 
        color="primary"
        title="Merchant"
        icons="tabler-users"
        subtitle="Total Merchant"
        primaryValue="1"
        secondaryValue="0"
      />
    </VCol>
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <CardStatitistics 
        color="warning"
        title="New Merchant"
        icons="tabler-user-plus"
        subtitle="Last week analytics"
        primaryValue="9"
        secondaryValue="0"
      />
    </VCol>
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <CardStatitistics 
        color="error"
        title="Active Merchant"
        icons="tabler-user-check"
        subtitle="Last week analytics"
        primaryValue="0"
        secondaryValue="0"
      />
    </VCol>
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
      <CardStatitistics 
        color="info"
        title="Pending Merchant"
        icons="tabler-user-search"
        subtitle="Last week analytics"
        primaryValue="1"
        secondaryValue="0"
      />
    </VCol>
  </VRow>
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
