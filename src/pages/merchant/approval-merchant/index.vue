<script setup>
import AppAutocomplete from '@/@core/components/app-form-elements/AppAutocomplete.vue';
import AppDateTimePicker from '@/@core/components/app-form-elements/AppDateTimePicker.vue';
import AppSelect from '@/@core/components/app-form-elements/AppSelect.vue';
import CradStatisticMerchant from '@/views/pages/merchant/CradStatisticMerchant.vue';

const headers = [
  {
    title: 'Merchant',
    key: 'merchant',
  },
  {
    title: 'Line of Business',
    key: 'LOB',
  },
  {
    title: 'Approved By',
    key: 'approvedBy',
  },
  {
    title: 'SKU',
    key: 'sku',
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

const brandList = ref([
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


const resolveStatus = statusMsg => {
  if (statusMsg === 'approve')
    return {
      text: 'Approve',
      color: 'warning',
    }
  if (statusMsg === 'Published')
    return {
      text: 'Publish',
      color: 'success',
    }
  if (statusMsg === 'needApprove')
    return {
      text: 'Need Approve',
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
    "merchant": "Merchant 1",
    "avatar": "/src/assets/images/avatars/avatar-1.png",
    "LOB": "Retail",
    "approvedBy": "John Doe",
    "email": "merchant1@example.com",
    "status": "needApprove"
  },
  {
    "merchant": "Merchant 2",
    "avatar": "/src/assets/images/avatars/avatar-2.png",
    "LOB": "Hospitality",
    "approvedBy": "Jane Smith",
    "email": "merchant2@example.com",
    "status": "approve"
  },
  {
    "merchant": "Merchant 3",
    "avatar": "/src/assets/images/avatars/avatar-3.png",
    "LOB": "E-commerce",
    "approvedBy": "Alice Johnson",
    "email": "merchant3@example.com",
    "status": "needApprove"
  },
  {
    "merchant": "Merchant 4",
    "avatar": "/src/assets/images/avatars/avatar-4.png",
    "LOB": "Technology",
    "approvedBy": "Robert Brown",
    "email": "merchant4@example.com",
    "status": "approve"
  },
  {
    "merchant": "Merchant 5",
    "avatar": "/src/assets/images/avatars/avatar-5.png",
    "LOB": "Healthcare",
    "approvedBy": "Emily Davis",
    "email": "merchant5@example.com",
    "status": "needApprove"
  },
  {
    "merchant": "Merchant 6",
    "avatar": "/src/assets/images/avatars/avatar-6.png",
    "LOB": "Finance",
    "approvedBy": "Michael Wilson",
    "email": "merchant6@example.com",
    "status": "approve"
  },
  {
    "merchant": "Merchant 7",
    "avatar": "/src/assets/images/avatars/avatar-7.png",
    "LOB": "Education",
    "approvedBy": "Sarah Lee",
    "email": "merchant7@example.com",
    "status": "needApprove"
  },
  {
    "merchant": "Merchant 8",
    "avatar": "/src/assets/images/avatars/avatar-8.png",
    "LOB": "Transportation",
    "approvedBy": "David Martinez",
    "email": "merchant8@example.com",
    "status": "approve"
  },
  {
    "merchant": "Merchant 9",
    "avatar": "/src/assets/images/avatars/avatar-9.png",
    "LOB": "Energy",
    "approvedBy": "Linda Thompson",
    "email": "merchant9@example.com",
    "status": "needApprove"
  },
  {
    "merchant": "Merchant 10",
    "avatar": "/src/assets/images/avatars/avatar-10.png",
    "LOB": "Real Estate",
    "approvedBy": "James Anderson",
    "email": "merchant10@example.com",
    "status": "approve"
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
  <AppTitle title="Data Merchant" />
  <VRow class="match-height">
    <VCol cols="12">
      <CradStatisticMerchant />
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
          <!-- 👉 Merchant Type -->
          <VCol
            cols="12"
            sm="4"
          >
            <AppSelect
                v-model="merchantTypeSelected"
                placeholder="Merchant Type"
                :items="statusList"
                clearable
            />
          </VCol>

          <!-- 👉 Merchant Category -->
          <VCol
            cols="12"
            sm="4"
          >
            <AppSelect
                    v-model="merchantTypeSelected"
                    placeholder="Merchant Category"
                    :items="statusList"
                    clearable
            />
          </VCol>

          <!-- 👉 Select Status -->
          <VCol
            cols="12"
            sm="4"
          >
            <AppSelect
                    v-model="merchantTypeSelected"
                    placeholder="Select Status"
                    :items="statusList"
                    clearable
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex flex-wrap gap-4">
        <div class="me-3 d-flex gap-3">
          <AppSelect
            :model-value="itemsPerPage"
            :items="[
              { value: 10, title: '10' },
              { value: 25, title: '25' },
              { value: 50, title: '50' },
              { value: 100, title: '100' },
              { value: -1, title: 'All' },
            ]"
            style="inline-size: 6.25rem;"
            @update:model-value="itemsPerPage = parseInt($event, 10)"
          />
        </div>
        <VSpacer />

        <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <!-- 👉 Search  -->
          <div style="inline-size: 15.625rem;">
            <AppTextField
              v-model="searchQuery"
              placeholder="Search User"
            />
          </div>

          <!-- 👉 Export button -->
          <VBtn
            variant="tonal"
            color="secondary"
            prepend-icon="tabler-upload"
          >
            Export
          </VBtn>
        </div>
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
        <!-- merchants -->
        <template #item.merchant="{ item }">
          <div class="d-flex align-center gap-x-3">
            <VAvatar
              size="34"
              :color="!item.avatar.length ? 'primary' : ''"
              :variant="!item.avatar.length ? 'tonal' : undefined"
            >
              <VImg
                v-if="item.avatar"
                :src="item.avatar"
              />

              <span
                v-else
                class="font-weight-medium"
              >{{ avatarText(item.customer) }}</span>
            </VAvatar>

            <div class="d-flex flex-column">
              <div class="text-body-1 font-weight-medium">
                <RouterLink
                  :to="'/merchant/approval-merchant/' + item.merchant"
                  class="text-link"
                >
                <div>
                  {{ item.merchant }}
                  </div>
                </RouterLink>
              </div>
              <div class="text-body-2">
                {{ item.email }}
              </div>
            </div>
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
