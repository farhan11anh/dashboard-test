<script setup>
import AppDateTimePicker from '@/@core/components/app-form-elements/AppDateTimePicker.vue';
import AppSelect from '@/@core/components/app-form-elements/AppSelect.vue';

import { useReportTransactionStore } from '@/stores/report-transaction';
import { onMounted } from 'vue';

const router = useRouter()
const route = useRoute()

const reportTransactionStore = useReportTransactionStore()

const resolveUserStatusVariant = (stat) => {
  if (stat === 'pending') return "warning";
  if (stat === 'paid') return "success";
  if (stat === "cancel") return "error";
  return "primary";
};

const headers = [
  {
    title: 'Transaction Date',
    key: 'transactionDate',
  },
  {
    title: 'Payment Date',
    key: 'paymentDateTime',
  },
  {
    title: 'Merchant ID',
    key: 'merchantCode',
    sortable: false,
  },
  {
    title: 'Brand Name',
    key: 'partnerName',
  },
  {
    title: 'Transaction ID',
    key: 'TransactionNo',
  },
  {
    title: 'Virtual Account Number',
    key: 'customerAccount',
  },
  {
    title: 'Customer Name',
    key: 'customerName',
  },
  {
    title: 'Amount Total',
    key: 'totalAmount',
  },
  {
    title: 'Status',
    key: 'paymentMessage',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const dateTime = ref();
const merchantId = ref()
const transactionId = ref()
const statusSelected = ref()
const vaNumber = ref()
const selectedRows = ref([])

const merchantList = ref(
  [
    {
      title: '11111',
      value: 1111
    },
    {
      title:'2222',
      value: 2222
    }
  ]
)

const statusList = ref([
    {
        title: 'Paid',
        value: 'paid'
    },
    {
        title: 'Pending',
        value: 'pending'
    },
    {
        title: 'Cancel',
        value: 'cancel'
    },
    {
      title: 'All',
      value: ''
    }
])

onMounted(() => {
  getDataTransaction();
})

const getDataTransaction = () => {
  reportTransactionStore.getItems({
    page: page.value,
    limit: itemsPerPage.value,
    sortBy: sortBy.value,
    orderBy: orderBy.value,
    transactionDate: dateTime.value,
    merchantCode: merchantId.value,
    transactionNo: transactionId.value,
    paymentMessage: statusSelected.value,
    customerAccount: vaNumber.value
  })
}

const download = () => {
  reportTransactionStore.downloadFile({
    page: page.value,
    limit: itemsPerPage.value,
    sortBy: sortBy.value,
    orderBy: orderBy.value,
    transactionDate: dateTime.value,
    merchantCode: merchantId.value,
    transactionNo: transactionId.value,
    status: statusSelected.value,
    customerAccount: vaNumber.value,
    isDownload: 1
  })
}

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const products = computed(() => reportTransactionStore.items)

const totalProduct = computed(() => reportTransactionStore.meta.totalPages)

const deleteProduct = async id => {
  await $api(`apps/ecommerce/products/${ id }`, { method: 'DELETE' })

  // Delete from selectedRows
  const index = selectedRows.value.findIndex(row => row === id)
  if (index !== -1)
    selectedRows.value.splice(index, 1)

  // Refetch products
  fetchProducts()
}


let currentQuery = { ...route.query }

const updateQuery = (key, value) => {
  currentQuery = { ...currentQuery, [key]: value }
  router.push({ query: currentQuery })
}

const bounceTimer = ref(null);
const getBounce = (key, value) => {
  if(bounceTimer.value !== undefined){
        clearTimeout(bounceTimer.value)
    }
  bounceTimer.value = setTimeout(() => {
    updateQuery(key, value)
  }, 1500)
}


watch(
  [()=>route.query ,page, dateTime, merchantId, transactionId, statusSelected, itemsPerPage, vaNumber],
  ([newQuery,newPage, newDateTime, newMerchantId, newTransactionId, newStatusSelected, newItemsPerPage, newVANumber], [oldQuery, oldPage, oldDateTime, oldMerchantId, oldTransactionId, oldStatusSelected, oldItemsPerPage, oldVANumber]) => {
    if(newQuery !== oldQuery) {
      getDataTransaction()
    }
    if(newPage !== oldPage) getBounce('page', newPage)
    if(newDateTime !== oldDateTime) getBounce('dateTime', newDateTime)
    if(newMerchantId !== oldMerchantId) getBounce('merchantId', newMerchantId)
    if(newTransactionId !== oldTransactionId) getBounce('transactionId', newTransactionId)
    if(newVANumber !== oldVANumber) getBounce('vaNumber', newVANumber)
    if(newStatusSelected !== oldStatusSelected) getBounce('status', newStatusSelected)
    if(newItemsPerPage !== oldItemsPerPage) getBounce('itemsPerPage', newItemsPerPage)
  }
)
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12">
      <VCard title="" class="mb-6">
        <VCardText>
          <VRow>
            <VCol cols="12" sm="4">
              <AppDateTimePicker
                v-model="dateTime"
                placeholder="Select Transaction Date"
                append-icon="tabler-calendar"
              />
            </VCol>

            <VCol cols="12" sm="4">
              <AppTextField
                v-model="merchantId"
                placeholder="Merchant ID"
                clearable
                clear-icon="tabler-x"
              />
            </VCol>

            <!-- 👉 Select Brand Name -->
            <VCol cols="12" sm="4">
              <AppTextField
                v-model="transactionId"
                placeholder="Transaction ID"
                clearable
                clear-icon="tabler-x"
              />
            </VCol>

            <!-- 👉 Select Merchant ID -->
            <VCol cols="12" sm="4">
              <AppTextField
                v-model="vaNumber"
                placeholder="Virtual Account Number"
                clearable
                clear-icon="tabler-x"
              />
            </VCol>
            <!-- 👉 Select Status -->
            <VCol cols="12" sm="4">
              <AppSelect
                v-model="statusSelected"
                placeholder="Status"
                :items="statusList"
                clearable
                clear-icon="tabler-x"
              />
            </VCol>
            <VCol cols="12" sm="4">
              <VRow justify="space-between">
                <!-- page size  -->
                <VCol cols="4">
                  <AppSelect
                    v-model="itemsPerPage"
                    :items="[5, 10, 20, 25, 50]"
                  />
                </VCol>
                <VCol cols="8">
                  <!-- 👉 Export button -->
                  <VBtn
                    prepend-icon="tabler-upload"
                    width="100%"
                    @click="download()"
                  >
                    Export
                  </VBtn>
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </VCardText>

        <VDivider class="mt-4" />

        <!-- 👉 Datatable  -->
        <VDataTableServer
          v-model:items-per-page="itemsPerPage"
          v-model:model-value="selectedRows"
          v-model:page="page"
          :headers="headers"
          :items="products"
          :items-length="totalProduct"
          class="text-no-wrap"
          @update:options="updateOptions"
        >
          <template #item.transactionDate="{ item }">
            <div class="d-flex align-center gap-x-4">
              <div
                class="cursor-pointer"
                @click="router.push('/report/transaction/' + item.id)"
              >
                {{ item.transactionDate }}
              </div>
            </div>
          </template>

          <template #item.status="{ item }">
            <VChip
              :color="resolveUserStatusVariant(item.status)"
              size="small"
              label
              class="text-capitalize"
            >
              {{ item.status }}
            </VChip>
          </template>

          <!-- Actions -->
          <template #item.actions="{ item }">
            <IconBtn>
              <VIcon icon="tabler-edit" />
            </IconBtn>

            <IconBtn>
              <VIcon icon="tabler-dots-vertical" />
              <VMenu activator="parent">
                <VList>
                  <VListItem value="download" prepend-icon="tabler-download">
                    Download
                  </VListItem>

                  <VListItem
                    value="delete"
                    prepend-icon="tabler-trash"
                    @click="deleteProduct(item.id)"
                  >
                    Delete
                  </VListItem>

                  <VListItem value="duplicate" prepend-icon="tabler-copy">
                    Duplicate
                  </VListItem>
                </VList>
              </VMenu>
            </IconBtn>
          </template>

          <!-- pagination -->

          <template #bottom>
            <TablePagination
              v-model:page="page"
              :items-per-page="itemsPerPage"
              :total-items="totalProduct"
            />
          </template>
        </VDataTableServer>
      </VCard>
    </VCol>
  </VRow>
</template>
