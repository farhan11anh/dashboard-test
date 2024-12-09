<script setup>
import HistoryAproval from '@/views/pages/approval/detail/HistoryAproval.vue';

definePage({
    meta: {
        navActiveLink: 'approval-notification-id',
        key: 'id',
        }
})

const headers = [
    {
        title: 'ID',
        key: 'id',
    },
    {
        title: 'DATE',
        key: 'date',
    },
    {
        title: 'REASON',
        key: 'reason',
    },
    {
        title: 'STATUS',
        key: 'status',
    },
    {
        title: 'LAYER',
        key: 'layer'
    },
    {
        title: 'APPROVED BY',
        key: 'approvedBy'
    },
    {
        title: 'EMAIL',
        key: 'email'
    }
];

const historyData = [
    {
        id: 1,
        date: '2022-01-01',
        reason: '-',
        status: 'approved',
layer: '',
        approvedBy: 'Joko',
        email: 'joko@gmail.com'
    }
];

</script>

<template>
    <VRow>
        <VCol
            cols="12"
            sm="4"
        >
            <CardInfo></CardInfo>
        </VCol>
        <VCol
            cols="12"
            sm="8"
        >
            <CardDetail></CardDetail>
        </VCol>
    </VRow>
    <VCard class="mt-5 pa-6">
        <VCardText>
            <HistoryAproval
                :headers="headers"
                :data="historyData"
            />
        </VCardText>
    </VCard>
</template>
