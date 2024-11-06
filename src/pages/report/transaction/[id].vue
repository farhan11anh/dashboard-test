<script setup>
import AppTitle from '@/@core/components/title/AppTitle.vue';
import { useReportTransactionStore } from '@/stores/report-transaction';
import { onMounted } from 'vue';

const route = useRoute();
const reportTransactionStore = useReportTransactionStore()

definePage({
    meta: {
        navActiveLink: 'report-transaction/id',
        key: 'id',
    }
})

onMounted(() => {
    getDetails();
})

const getDetails = async() => {
    reportTransactionStore.getDetails(route.params.id)
}

const details = computed(() => reportTransactionStore.items[0])


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
                    {{ details?.transactionDate }}
                </VCol>
                <VCol
                    cols="12"
                    md="4"
                >
                    <h4>Payment Date</h4>
                    {{ details?.paymentDateTime }}
                </VCol>
                <VCol
                    cols="12"
                    md="4"
                >
                    <h4>Merchant ID</h4>
                    {{ details?.merchantCode }}
                </VCol>
                <VCol
                    cols="12"
                    md="4"
                >
                    <h4>Brand Name</h4>
                    {{ details?.partnerName }}
                </VCol>
                <VCol
                    cols="12"
                    md="4"
                >
                    <h4>Virtual Account Number</h4>
                    {{ details?.TransactionNo }}
                </VCol>
                <VCol
                    cols="12"
                    md="4"
                >
                    <h4>Customer Name</h4>
                    {{ details?.customerName }}
                </VCol>
            </VRow>
        </VCardText>
    </VCard>

    <div class="pa-6 mt-5">
        <AppTitle title="Payment Detail" ></AppTitle>
    </div>
 </template>
