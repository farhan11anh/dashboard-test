<script setup>
import AppAutocomplete from '@/@core/components/app-form-elements/AppAutocomplete.vue';
import AppDateTimePicker from '@/@core/components/app-form-elements/AppDateTimePicker.vue';
import AppSelect from '@/@core/components/app-form-elements/AppSelect.vue';
import LogisticsCardStatistics from '@/views/apps/logistics/LogisticsCardStatistics.vue'
import CardStatitiscticsApproval from '@/views/pages/report/transaction/CardStatitiscticsApproval.vue';

const router = useRouter()

const headers = [
  {
    title: 'Transaction Date',
    key: 'tDate',
  },
  {
    title: 'Payment Date',
    key: 'pDate',
  },
  {
    title: 'Merchant ID',
    key: 'mId',
    sortable: false,
  },
  {
    title: 'Brand Name',
    key: 'bName',
  },
  {
    title: 'Transaction ID',
    key: 'tId',
  },
  {
    title: 'Virtual Account Number',
    key: 'VAN',
  },
  {
    title: 'Customer Name',
    key: 'cName',
  },
  {
    title: 'Amount Total',
    key: 'aTotal',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
  },
]

const dateTime = ref();
const legalName = ref()
const brandName = ref()
const merchantId = ref()
const statusSelected = ref()
const searchQuery = ref('')
const selectedRows = ref([])


const legalList = ref([
  {
    title: 'Accessories',
    value: 'Accessories',
  },
  {
    title: 'Home Decor',
    value: 'Home Decor',
  },
  {
    title: 'Electronics',
    value: 'Electronics',
  },
  {
    title: 'Shoes',
    value: 'Shoes',
  },
  {
    title: 'Office',
    value: 'Office',
  },
  {
    title: 'Games',
    value: 'Games',
  },
])

const transactionList = ref([
  {
    title: 'In Stock',
    value: true,
  },
  {
    title: 'Out of Stock',
    value: false,
  },
])

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
        title: 'Active',
        value: true
    },
    {
        title: 'Inactive',
        value: false
    }
])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const resolveCategory = category => {
  if (category === 'Accessories')
    return {
      color: 'error',
      icon: 'tabler-device-watch',
    }
  if (category === 'Home Decor')
    return {
      color: 'info',
      icon: 'tabler-home',
    }
  if (category === 'Electronics')
    return {
      color: 'primary',
      icon: 'tabler-device-imac',
    }
  if (category === 'Shoes')
    return {
      color: 'success',
      icon: 'tabler-shoe',
    }
  if (category === 'Office')
    return {
      color: 'warning',
      icon: 'tabler-briefcase',
    }
  if (category === 'Games')
    return {
      color: 'primary',
      icon: 'tabler-device-gamepad-2',
    }
}

const resolveStatus = statusMsg => {
  if (statusMsg === 'paid')
    return {
      text: 'Active',
      color: 'warning',
    }
  if (statusMsg === 'Published')
    return {
      text: 'Publish',
      color: 'success',
    }
  if (statusMsg === 'unpaid')
    return {
      text: 'Inactive',
      color: 'error',
    }
}

const {
  data: productsData,
  execute: fetchProducts,
} = await useApi(createUrl('/apps/ecommerce/products', {
  query: {
    q: searchQuery,
    brandName: brandName,
    legal: legalName,
    time: dateTime,
    merchantId: merchantId,
    status: statusSelected,
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}))

// const products = computed(() => productsData.value.products)
const products = ref(
  [
    {
        "tDate": "2024-08-20",
        "pDate": "2024-08-21",
        "mId": "MID001",
        "bName": "Business One",
        "tId": "TID1001",
        "VAN": "VAN1001",
        "cName": "Client A",
        "aTotal": 1500.00,
        "status": "paid",
        "action": "paid"
    },
    {
        "tDate": "2024-08-21",
        "pDate": "2024-08-22",
        "mId": "MID002",
        "bName": "Business Two",
        "tId": "TID1002",
        "VAN": "VAN1002",
        "cName": "Client B",
        "aTotal": 2500.00,
        "status": "unpaid",
        "action": "unpaid"
    },
    {
        "tDate": "2024-08-22",
        "pDate": "2024-08-23",
        "mId": "MID003",
        "bName": "Business Three",
        "tId": "TID1003",
        "VAN": "VAN1003",
        "cName": "Client C",
        "aTotal": 500.00,
        "status": "paid",
        "action": "paid"
    },
    {
        "tDate": "2024-08-23",
        "pDate": "2024-08-24",
        "mId": "MID004",
        "bName": "Business Four",
        "tId": "TID1004",
        "VAN": "VAN1004",
        "cName": "Client D",
        "aTotal": 3000.00,
        "status": "unpaid",
        "action": "unpaid"
    },
    {
        "tDate": "2024-08-24",
        "pDate": "2024-08-25",
        "mId": "MID005",
        "bName": "Business Five",
        "tId": "TID1005",
        "VAN": "VAN1005",
        "cName": "Client E",
        "aTotal": 1000.00,
        "status": "paid",
        "action": "paid"
    },
    {
        "tDate": "2024-08-25",
        "pDate": "2024-08-26",
        "mId": "MID006",
        "bName": "Business Six",
        "tId": "TID1006",
        "VAN": "VAN1006",
        "cName": "Client F",
        "aTotal": 4500.00,
        "status": "unpaid",
        "action": "unpaid"
    },
    {
        "tDate": "2024-08-26",
        "pDate": "2024-08-27",
        "mId": "MID007",
        "bName": "Business Seven",
        "tId": "TID1007",
        "VAN": "VAN1007",
        "cName": "Client G",
        "aTotal": 2000.00,
        "status": "paid",
        "action": "paid"
    },
    {
        "tDate": "2024-08-27",
        "pDate": "2024-08-28",
        "mId": "MID008",
        "bName": "Business Eight",
        "tId": "TID1008",
        "VAN": "VAN1008",
        "cName": "Client H",
        "aTotal": 3500.00,
        "status": "unpaid",
        "action": "unpaid"
    },
    {
        "tDate": "2024-08-28",
        "pDate": "2024-08-29",
        "mId": "MID009",
        "bName": "Business Nine",
        "tId": "TID1009",
        "VAN": "VAN1009",
        "cName": "Client I",
        "aTotal": 1800.00,
        "status": "paid",
        "action": "paid"
    },
    {
        "tDate": "2024-08-29",
        "pDate": "2024-08-30",
        "mId": "MID010",
        "bName": "Business Ten",
        "tId": "TID1010",
        "VAN": "VAN1010",
        "cName": "Client J",
        "aTotal": 2200.00,
        "status": "unpaid",
        "action": "unpaid"
    }
]
)

const totalProduct = computed(() => productsData.value.total)

const deleteProduct = async id => {
  await $api(`apps/ecommerce/products/${ id }`, { method: 'DELETE' })

  // Delete from selectedRows
  const index = selectedRows.value.findIndex(row => row === id)
  if (index !== -1)
    selectedRows.value.splice(index, 1)

  // Refetch products
  fetchProducts()
}
</script>

<template>
    <AppTitle title="Transaction Report" />
  <VRow class="match-height">
    <VCol cols="12">
      <CardStatitiscticsApproval />
    </VCol>

    <VCol
      cols="12"
    >
    <!-- 👉 products -->
    <VCard
      title=""
      class="mb-6"
    >
      <VCardText>
        <VRow>
          <!-- 👉 Date time -->
          <VCol
            cols="12"
            sm="4"
          >
            <AppDateTimePicker
              v-model="date"
              placeholder="Select Transaction Date"
              append-icon="tabler-calendar"
              
            />
          </VCol>

          <!-- 👉 Legal Name -->
          <VCol
            cols="12"
            sm="4"
          >
            <AppAutocomplete
              v-model="merchantId"
              placeholder="Merchant ID"
              :items="products.map(product =>{ 
                return {'title': product.mId, 'value': product.mId} 
                }) "
              clearable
              clear-icon="tabler-x"
            />
          </VCol>

          <!-- 👉 Select Brand Name -->
          <VCol
            cols="12"
            sm="4"
          >
            <AppAutocomplete
              v-model="transactionId"
              placeholder="Transaction ID"
              :items="products.map(product =>{ 
                return {'title': product.tId, 'value': product.tId} 
                }) "
              clearable
              clear-icon="tabler-x"
            />
          </VCol>

          <!-- 👉 Select Merchant ID -->
          <VCol
            cols="12"
            sm="4"
          >
            <AppAutocomplete
              v-model="merchantId"
              placeholder="Merchant ID"
              :items="merchantList"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
          <!-- 👉 Select Status -->
          <VCol
            cols="12"
            sm="4"
          >
            <AppSelect
              v-model="statusSelected"
              placeholder="Status"
              :items="statusList"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
          <VCol 
            cols="12" 
            sm="4">
            
            <VRow 
              justify="space-between"
            >
              <!-- page size  -->
              <VCol
                cols="4"
              >
              <AppSelect
                v-model="itemsPerPage"
                :items="[5, 10, 20, 25, 50]"
              />
              </VCol>
              <VCol
                cols="8"
              >
                <!-- 👉 Export button -->
                <VBtn
                  variant="tonal"
                  color="secondary"
                  prepend-icon="tabler-upload"
                  width="100%"
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
        show-select
        :items="products"
        :items-length="totalProduct"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <!-- product  -->
        <template #item.mId="{ item }">
          <div>
            {{ item.mId }}
          </div>
        </template>

        <!-- category -->
        <template #item.category="{ item }">
          <VAvatar
            size="30"
            variant="tonal"
            :color="resolveCategory(item.category)?.color"
            class="me-4"
          >
            <VIcon
              :icon="resolveCategory(item.category)?.icon"
              size="18"
            />
          </VAvatar>
          <span class="text-body-1 text-high-emphasis">{{ item.category }}</span>
        </template>

        <!-- stock -->
        <template #item.tDate="{ item }">
          <div class="d-flex align-center gap-x-4">
            <div class="cursor-pointer" @click="router.push('/report/transaction/'+ item.mId)" > {{ item.tDate }} </div>
          </div>
        </template>

        <!-- status -->
        <template #item.status="{ item }">
          <VChip
            v-bind="resolveStatus(item.status)"
            density="default"
            label
            size="small"
          />
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
                <VListItem
                  value="download"
                  prepend-icon="tabler-download"
                >
                  Download
                </VListItem>

                <VListItem
                  value="delete"
                  prepend-icon="tabler-trash"
                  @click="deleteProduct(item.id)"
                >
                  Delete
                </VListItem>

                <VListItem
                  value="duplicate"
                  prepend-icon="tabler-copy"
                >
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
