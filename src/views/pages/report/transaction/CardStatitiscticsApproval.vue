<script setup>
import CardStatisticReport from '@/components/pages/report/CardStatisticReport.vue';

const logisticData = ref([
  {
    icon: '',
    color: 'primary',
    title: 'Total Status Paid',
    value: 42,
    change: 18.2,
    isHover: false,
  },
  {
    icon: 'tabler-alert-triangle',
    color: 'warning',
    title: 'Total Status Pending',
    value: 8,
    change: -8.7,
    isHover: false,
  },
  {
    icon: 'tabler-square-x',
    color: 'error',
    title: 'Total Status Unpaid',
    value: 27,
    change: 4.3,
    isHover: false,
  },
  {
    icon: 'tabler-chart-arrows-vertical',
    color: 'info',
    title: 'Total Transaction',
    value: 13,
    change: -2.5,
    isHover: false,
  },
])
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
        <CardStatisticReport 
            primaryValue="42"
            secondaryValue="+18.2"
            color="primary"
            title="Total Status Paid"
            icons="tabler-chart-arrows-vertical"
            subtitle="than last week"
        />
    </VCol>
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
        <CardStatisticReport 
            primaryValue="8"
            secondaryValue="-8.7"
            color="warning"
            title="Total Status Pending"
            icons="tabler-alert-triangle"
            subtitle="than last week"
        />
    </VCol>
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
        <CardStatisticReport 
            primaryValue="27"
            secondaryValue="+4.3"
            color="error"
            title="Total Status Unpaid"
            icons="tabler-square-x"
            subtitle="than last week"
        />
    </VCol>
    <VCol
      cols="12"
      md="3"
      sm="6"
    >
        <CardStatisticReport 
            primaryValue="13"
            secondaryValue="-2.5"
            color="info"
            title="Total Transaction"
            icons="tabler-chart-arrows-vertical"
            subtitle="than last week"
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
</style>
