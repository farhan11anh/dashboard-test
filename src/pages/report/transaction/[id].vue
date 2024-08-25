<script setup>
import AppTitle from '@/@core/components/title/AppTitle.vue';

definePage({
    meta: {
        navActiveLink: 'report-transaction/id',
        key: 'id',
    }
})


</script>

 <template>
    <VCard
        class="mb-12 pa-6"
    >
        <VCardTitle>Transaction Detail</VCardTitle>
        <VCardText>
            <VRow>
                <VCol
                    cols="12"
                    md="4"
                >
                    <h4>Transaction Date</h4>
                    2022-02-02
                </VCol>
                <VCol
                    cols="12"
                    md="4"
                >
                    <h4>Payment Date</h4>
                    2022-02-02
                </VCol>
                <VCol
                    cols="12"
                    md="4"
                >
                    <h4>Merchant ID</h4>
                    31-000-4511-022882
                </VCol>
                <VCol
                    cols="12"
                    md="4"
                >
                    <h4>Brand Name</h4>
                    MTIX
                </VCol>
                <VCol
                    cols="12"
                    md="4"
                >
                    <h4>Virtual Account Number</h4>
                    818662649264926
                </VCol>
                <VCol
                    cols="12"
                    md="4"
                >
                    <h4>Customer Name</h4>
                    John Doe
                </VCol>
            </VRow>
        </VCardText>
    </VCard>

    <div class="pa-6 mt-5">
        <AppTitle title="Payment Detail" ></AppTitle>
    </div>
 </template>
