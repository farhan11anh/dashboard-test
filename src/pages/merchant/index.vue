<script setup>
import AppAutocomplete from '@/@core/components/app-form-elements/AppAutocomplete.vue';
import AppDateTimePicker from '@/@core/components/app-form-elements/AppDateTimePicker.vue';
import AppSelect from '@/@core/components/app-form-elements/AppSelect.vue';
import CradStatisticMerchant from '@/views/pages/merchant/CradStatisticMerchant.vue';

const headers = [
  {
    title: 'Merchant Name',
    key: 'mName',
  },
  {
    title: 'Brand Name',
    key: 'brandName',
  },
  {
    title: 'Merchant ID',
    key: 'mId',
    sortable: false,
  },
  {
    title: 'Register Date',
    key: 'registerDate',
  },
  {
    title: 'Status',
    key: 'status',
  },
  {
    title: 'Logo',
    key: 'image',
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
    "mName": "PT. Nusantara Sejahtera Raya",
    "brandName": "tourizid",
    "mId": "31-000-41511-00282",
    "registerDate": "2024-07-25",
    "status": "approve",
    "image": "/src/assets/images/ecommerce-images/product-9.png"
  },
  {
    "mName": "PT. Global Internusa",
    "brandName": "globex",
    "mId": "31-000-41512-00283",
    "registerDate": "2024-07-26",
    "status": "approve",
    "image": "/src/assets/images/ecommerce-images/product-1.png"
  },
  {
    "mName": "PT. Andalan Bersama",
    "brandName": "andrano",
    "mId": "31-000-41513-00284",
    "registerDate": "2024-07-27",
    "status": "needApprove",
    "image": "/src/assets/images/ecommerce-images/product-2.png"
  },
  {
    "mName": "PT. Makmur Jaya Sentosa",
    "brandName": "makmurid",
    "mId": "31-000-41514-00285",
    "registerDate": "2024-07-28",
    "status": "approve",
    "image": "/src/assets/images/ecommerce-images/product-3.png"
  },
  {
    "mName": "PT. Maju Mundur",
    "brandName": "majundz",
    "mId": "31-000-41515-00286",
    "registerDate": "2024-07-29",
    "status": "approve",
    "image": "/src/assets/images/ecommerce-images/product-4.png"
  },
  {
    "mName": "PT. Sejahtera Abadi",
    "brandName": "abadirid",
    "mId": "31-000-41516-00287",
    "registerDate": "2024-07-30",
    "status": "needApprove",
    "image": "/src/assets/images/ecommerce-images/product-5.png"
  },
  {
    "mName": "PT. Damai Sentosa",
    "brandName": "damaisid",
    "mId": "31-000-41517-00288",
    "registerDate": "2024-07-31",
    "status": "approve",
    "image": "/src/assets/images/ecommerce-images/product-6.png"
  },
  {
    "mName": "PT. Aman Sejahtera",
    "brandName": "amansid",
    "mId": "31-000-41518-00289",
    "registerDate": "2024-08-01",
    "status": "approve",
    "image": "/src/assets/images/ecommerce-images/product-7.png"
  },
  {
    "mName": "PT. Citra Nusantara",
    "brandName": "citranus",
    "mId": "31-000-41519-00290",
    "registerDate": "2024-08-02",
    "status": "needApprove",
    "image": "/src/assets/images/ecommerce-images/product-8.png"
  },
  {
    "mName": "PT. Langgeng Sentosa",
    "brandName": "langsent",
    "mId": "31-000-41520-00291",
    "registerDate": "2024-08-03",
    "status": "approve",
    "image": "/src/assets/images/ecommerce-images/product-9.png"
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
    >
      <div class="w-full" >
        <VRow justify="end" >
          <VCol cols="2"  >
            <VBtn
                width="100%"
                color="primary"
                prepend-icon="tabler-plus"
                @click="$router.push('/merchant/add-merchant')"
              >
                Add Merchant
            </VBtn>
          </VCol>
        </VRow>
      </div>
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
              placeholder="Select Date"
              append-icon="tabler-calendar"
              
            />
          </VCol>

          <!-- 👉 Legal Name -->
          <VCol
            cols="12"
            sm="4"
          >
            <AppAutocomplete
              v-model="legalName"
              placeholder="Legal Name"
              :items="legalList"
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
              v-model="brandName"
              placeholder="Brand Name"
              :items="brandList"
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
        <template #item.image="{ item }">
          <div class="d-flex align-center gap-x-4">
            <VAvatar
              v-if="item.image"
              size="38"
              variant="tonal"
              rounded
              :image="item.image"
            />
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
        <template #item.stock="{ item }">
          <VSwitch :model-value="item.stock" />
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
