<script setup>
import AppAutocomplete from "@/@core/components/app-form-elements/AppAutocomplete.vue";
import AppSelect from "@/@core/components/app-form-elements/AppSelect.vue";

const headers = [
  {
    title: "No",
    key: "no",
  },
  {
    title: "ID",
    key: "id",
  },
  {
    title: "Banner Name",
    key: "mName",
  },
  {
    title: "Campaign Type",
    key: "mId",
    sortable: false,
  },
  {
    title: "Banner Name",
    key: "bannerName",
  },
  {
    title: "Create Date",
    key: "createDate",
  },
  {
    title: "Period Date",
    key: "periodDate",
  },
  {
    title: "Status",
    key: "status",
  },
];

const bannerName = ref();
const statusSelected = ref();
const selectedRows = ref([]);

const statusList = ref([
  {
    title: "Active",
    value: true,
  },
  {
    title: "Inactive",
    value: false,
  },
]);

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();

const updateOptions = (options) => {
  sortBy.value = options.sortBy[0]?.key;
  orderBy.value = options.sortBy[0]?.order;
};

const resolveCategory = (category) => {
  if (category === "Accessories")
    return {
      color: "error",
      icon: "tabler-device-watch",
    };
  if (category === "Home Decor")
    return {
      color: "info",
      icon: "tabler-home",
    };
  if (category === "Electronics")
    return {
      color: "primary",
      icon: "tabler-device-imac",
    };
  if (category === "Shoes")
    return {
      color: "success",
      icon: "tabler-shoe",
    };
  if (category === "Office")
    return {
      color: "warning",
      icon: "tabler-briefcase",
    };
  if (category === "Games")
    return {
      color: "primary",
      icon: "tabler-device-gamepad-2",
    };
};

const resolveStatus = (statusMsg) => {
  if (statusMsg === "approve")
    return {
      text: "Approve",
      color: "warning",
    };
  if (statusMsg === "needApprove")
    return {
      text: "Need Approve",
      color: "success",
    };
  if (statusMsg === "declined")
    return {
      text: "Declined",
      color: "error",
    };
};

const { data: productsData, execute: fetchProducts } = await useApi(
  createUrl("/apps/ecommerce/products", {
    query: {
      bannerName: bannerName,
      status: statusSelected,
      page,
      itemsPerPage,
      sortBy,
      orderBy,
    },
  })
);

// const products = computed(() => productsData.value.products)
const products = ref(
    [
  {
    "no": 1,
    "id": "001",
    "mName": "Spring Sale",
    "mId": "Campaign_A",
    "bannerName": "Spring2024",
    "createDate": "2024-01-15",
    "periodDate": "2024-03-01 to 2024-03-31",
    "status": "needApprove"
  },
  {
    "no": 2,
    "id": "002",
    "mName": "Summer Bonanza",
    "mId": "Campaign_B",
    "bannerName": "SummerBlast",
    "createDate": "2024-04-01",
    "periodDate": "2024-06-01 to 2024-06-30",
    "status": "declined"
  },
  {
    "no": 3,
    "id": "003",
    "mName": "Fall Fest",
    "mId": "Campaign_C",
    "bannerName": "FallDeals",
    "createDate": "2024-07-10",
    "periodDate": "2024-09-01 to 2024-09-30",
    "status": "approve"
  },
  {
    "no": 4,
    "id": "004",
    "mName": "Winter Wonderland",
    "mId": "Campaign_D",
    "bannerName": "WinterMagic",
    "createDate": "2024-10-01",
    "periodDate": "2024-12-01 to 2024-12-31",
    "status": "needApprove"
  },
  {
    "no": 5,
    "id": "005",
    "mName": "Holiday Sales",
    "mId": "Campaign_E",
    "bannerName": "HolidaySpecials",
    "createDate": "2024-11-01",
    "periodDate": "2024-12-10 to 2024-12-25",
    "status": "approve"
  },
  {
    "no": 6,
    "id": "006",
    "mName": "New Year Bash",
    "mId": "Campaign_F",
    "bannerName": "NewYear2025",
    "createDate": "2024-12-01",
    "periodDate": "2025-01-01 to 2025-01-10",
    "status": "declined"
  },
  {
    "no": 7,
    "id": "007",
    "mName": "Valentine's Special",
    "mId": "Campaign_G",
    "bannerName": "ValentineLove",
    "createDate": "2024-12-20",
    "periodDate": "2025-02-01 to 2025-02-14",
    "status": "needApprove"
  },
  {
    "no": 8,
    "id": "008",
    "mName": "Black Friday Deals",
    "mId": "Campaign_H",
    "bannerName": "BlackFriday2024",
    "createDate": "2024-11-15",
    "periodDate": "2024-11-25 to 2024-11-29",
    "status": "approve"
  },
  {
    "no": 9,
    "id": "009",
    "mName": "Cyber Monday",
    "mId": "Campaign_I",
    "bannerName": "CyberMonday2024",
    "createDate": "2024-11-20",
    "periodDate": "2024-12-01 to 2024-12-02",
    "status": "declined"
  }
]

);

const totalProduct = computed(() => 5);

const deleteProduct = async (id) => {
  await $api(`apps/ecommerce/products/${id}`, { method: "DELETE" });

  // Delete from selectedRows
  const index = selectedRows.value.findIndex((row) => row === id);
  if (index !== -1) selectedRows.value.splice(index, 1);

  // Refetch products
  fetchProducts();
};

const router = useRouter();
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12">
      <!-- 👉 products -->
      <VRow justify="space-between">
        <VCol cols="12" sm="6">
          <VRow>
            <VCol cols="3">
              <AppSelect
                v-model="itemsPerPage"
                :items="[5, 10, 20, 25, 50]"
                width="80px"
              />
            </VCol>
          </VRow>
        </VCol>
        <VCol cols="12" sm="6">
          <VRow>
            <VCol>
              <AppAutocomplete
                v-model="bannerName"
                placeholder="Search Banner"
                :items="brandList"
                clearable
                clear-icon="tabler-x"
              />
            </VCol>
            <VCol>
              <AppSelect
                v-model="statusSelected"
                placeholder="Banner Status"
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
            <VIcon :icon="resolveCategory(item.category)?.icon" size="18" />
          </VAvatar>
          <span class="text-body-1 text-high-emphasis">{{
            item.category
          }}</span>
        </template>

        <!-- merchant name -->
        <template #item.mName="{ item }">
          <span
            @click="router.push('/approval/banner/' + item.mId)"
            class="text-body-1 text-high-emphasis"
            >{{ item.mName }}</span
          >
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
    </VCol>
  </VRow>
</template>
