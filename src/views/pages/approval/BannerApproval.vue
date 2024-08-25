<script setup>
import AppAutocomplete from '@/@core/components/app-form-elements/AppAutocomplete.vue';
import AppSelect from '@/@core/components/app-form-elements/AppSelect.vue';

const headers = [
  {
    title: 'No',
    key: 'no',
  },
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Merchant Name',
    key: 'mName',
  },
  {
    title: 'Merchant ID',
    key: 'mId',
    sortable: false,
  },
  {
    title: 'Banner Name',
    key: 'bannerName',
  },
  {
    title: 'Campaign Type',
    key: 'campaignType',
  },
  {
    title: 'Create Date',
    key: 'createDate',
  },
  {
    title: 'Period Date',
    key: 'periodDate',
  },
  {
    title: 'Status',
    key: 'status',
  }
]

const dateTime = ref();
const legalName = ref()
const bannerName = ref()
const merchantId = ref()
const statusSelected = ref()
const searchQuery = ref('')
const selectedRows = ref([])



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
  if (statusMsg === 'active')
    return {
      text: 'Active',
      color: 'warning',
    }
  if (statusMsg === 'Published')
    return {
      text: 'Publish',
      color: 'success',
    }
  if (statusMsg === 'inactive')
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
    bannerName: bannerName,
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
    "no": 1,
    "id": "abc123",
    "mName": "Campaign Alpha",
    "mId": "M001",
    "bannerName": "Summer Sale",
    "campaignType": "Summer Blast",
    "createDate": "2024-08-22",
    "periodDate": "2024-09-01",
    "status": "active"
  },
  {
    "no": 2,
    "id": "def456",
    "mName": "Campaign Bravo",
    "mId": "M002",
    "bannerName": "Winter Sale",
    "campaignType": "Winter Wonderland",
    "createDate": "2024-07-15",
    "periodDate": "2024-08-31",
    "status": "inactive"
  },
  {
    "no": 3,
    "id": "ghi789",
    "mName": "Campaign Charlie",
    "mId": "M003",
    "bannerName": "Spring Sale",
    "campaignType": "Spring Fever",
    "createDate": "2024-03-20",
    "periodDate": "2024-04-20",
    "status": "inactive"
  },
  {
    "no": 4,
    "id": "jkl012",
    "mName": "Campaign Delta",
    "mId": "M004",
    "bannerName": "Fall Sale",
    "campaignType": "Autumn Harvest",
    "createDate": "2024-09-05",
    "periodDate": "2024-10-05",
    "status": "active"
  },
  {
    "no": 5,
    "id": "mno345",
    "mName": "Campaign Echo",
    "mId": "M005",
    "bannerName": "Holiday Sale",
    "campaignType": "Festive Cheer",
    "createDate": "2024-11-01",
    "periodDate": "2024-12-25",
    "status": "inactive"
  }
]


)

const totalProduct = computed(() => 5)

const deleteProduct = async id => {
  await $api(`apps/ecommerce/products/${ id }`, { method: 'DELETE' })

  // Delete from selectedRows
  const index = selectedRows.value.findIndex(row => row === id)
  if (index !== -1)
    selectedRows.value.splice(index, 1)

  // Refetch products
  fetchProducts()
}

const router = useRouter()
</script>

<template>
  <VRow class="match-height">

    <VCol
      cols="12"
    >
        <!-- 👉 products -->
        <VRow
          justify="space-between"
        >
          <VCol
            cols="12"
            sm="6"
          >
              <VRow>
                <VCol 
                  cols="3" 
                >
                  <AppSelect
                    v-model="itemsPerPage"
                    :items="[5, 10, 20, 25, 50]"
                    width="80px"
                  />
                </VCol>
              </VRow>
            </VCol>
            <VCol
            cols="12"
            sm="6"
          >
            <VRow>
              <VCol>
                <AppAutocomplete
                  v-model="bannerName"
                  placeholder="Banner Name"
                  :items="brandList"
                  clearable
                  clear-icon="tabler-x"
                />
              </VCol>
              <VCol>
                <AppSelect
                  v-model="statusSelected"
                  placeholder="Status"
                  :items="statusList"
                  clearable
                  clear-icon="tabler-x"
                />
              </VCol>
            </VRow>
          </VCol>
        </VRow>

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
        <template #item.image="{ item }">
          <div class="d-flex align-center gap-x-4">
            <VAvatar
              v-if="item.image"
              size="38"
              variant="tonal"
              rounded
              :image="item.image"
            />
            <!-- <div class="d-flex flex-column">
              <span class="text-body-1 font-weight-medium text-high-emphasis">{{ item.productName }}</span>
              <span class="text-body-2">{{ item.productBrand }}</span>
            </div> -->
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

        <!-- merchant name -->
        <template #item.mName="{ item }">
          <span @click="router.push('/approval/banner/'+item.mId)"  class="text-body-1 text-high-emphasis">{{ item.mName }}</span>
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
    </VCol>

  </VRow>
</template>
