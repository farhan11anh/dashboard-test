<script setup>
import AddNewUserDrawer from "@/views/apps/user/list/AddNewUserDrawer.vue";
import { useUsersListStore } from "@/stores/users/list";
import { onMounted, onUpdated } from "vue";


const usersListStore = useUsersListStore();
const route = useRoute();
const router = useRouter();
// 👉 Store
const searchQuery = ref("");
const selectedRole = ref();
const selectedStatus = ref();

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const selectedRows = ref([]);

const updateOptions = (options) => {
  sortBy.value = options.sortBy[0]?.key;
  orderBy.value = options.sortBy[0]?.order;
};

// Headers
const headers = [
  {
    title: "Name",
    key: "user",
  },
  {
    title: "Role",
    key: "role",
  },
  {
    title: "Status",
    key: "isActive",
  },
  {
    title: "Actions",
    key: "actions",
    sortable: false,
  },
];


const users = computed(() => usersListStore.users);
const totalUsers = computed(() => usersListStore.meta.totalItems);

onMounted(() => {
  getDataUsers();
});

onUpdated(() => {
  console.log('page', page.value);
})

const getDataUsers = async() =>{
  await usersListStore.getUsers({
    name: searchQuery.value,
    status: selectedStatus.value,
    role: selectedRole.value,
    limit: itemsPerPage.value,
    page: page.value,
  })
}

// 👉 search filters
const roles = [
  {
    title: "Admin",
    value: "admin",
  },
  {
    title: "Author",
    value: "author",
  },
  {
    title: "Editor",
    value: "editor",
  },
  {
    title: "Maintainer",
    value: "maintainer",
  },
  {
    title: "Subscriber",
    value: "subscriber",
  },
];

const plans = [
  {
    title: "Basic",
    value: "basic",
  },
  {
    title: "Company",
    value: "company",
  },
  {
    title: "Enterprise",
    value: "enterprise",
  },
  {
    title: "Team",
    value: "team",
  },
];

const status = [
  {
    title: "Pending",
    value: "pending",
  },
  {
    title: "Active",
    value: "active",
  },
  {
    title: "Inactive",
    value: "inactive",
  },
];

const resolveUserStatusVariant = (stat) => {
  if (stat === 0) return "warning";
  if (stat === 1) return "success";
  if (stat === "inactive") return "secondary";
  return "primary";
};

const isAddNewUserDrawerVisible = ref(false);

const addNewUser = async (userData) => {
  await usersListStore.addUser(userData);

};

const updatePage =(e)=>{
  console.log(e, 'data yg masuk');
  page.value = e
  router.push({ query: { ...route.query, page: e } })
  getDataUsers()
}
const debounceTimer = ref(null);
watch(
  [() => route.query, searchQuery, selectedStatus],  // The reactive source we're watching
  ([newQuery, newSearchQuery, newStatus], [oldQuery, oldSearchQuery, oldStatus]) => {

    if(newQuery !== oldQuery){
      page.value = Number(newQuery.page)
      selectedStatus.value = newQuery.status
      itemsPerPage.value = Number(newQuery.limit)
    }

    if(newSearchQuery !== oldSearchQuery){
      if(debounceTimer.value !== undefined){
        clearTimeout(debounceTimer.value)
      }
      debounceTimer.value = setTimeout(() => {
        router.push({ query: { ...route.query, name: newSearchQuery } })
        getDataUsers()
      }, 1500)
    }

    if(newStatus !== oldStatus){
      router.push({ query: { ...route.query, status: newStatus } })
      selectedStatus.value = newStatus
      console.log(selectedStatus.value, 'stts');
      
      getDataUsers()
    }
  },
  { immediate: true }  // Optional: runs the watcher immediately on component mount
)
</script>

<template>
  <section>
    <VCard class="mb-6">
      <VCardItem class="pb-4">
        <VCardTitle>Filters</VCardTitle>
      </VCardItem>

      <VCardText>
        <VRow>
          <!-- 👉 Select Role -->
          <VCol cols="12" sm="6">
            <AppSelect
              v-model="selectedRole"
              placeholder="Select Role"
              :items="roles"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>

          <!-- 👉 Select Status -->
          <VCol cols="12" sm="6">
            <AppSelect
              v-model="selectedStatus"
              placeholder="Select Status"
              :items="status"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

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
            style="inline-size: 6.25rem"
            @update:model-value="{
              itemsPerPage = parseInt($event, 10)
              console.log(itemsPerPage);
              router.push({ query: { ...route.query, limit: $event } })
              getDataUsers()
            }"
          />
        </div>
        <VSpacer />

        <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <!-- 👉 Search  -->
          <div style="inline-size: 15.625rem">
            <AppTextField v-model="searchQuery" placeholder="Search User" />
          </div>

          <!-- 👉 Export button -->
          <VBtn variant="tonal" color="secondary" prepend-icon="tabler-upload">
            Export
          </VBtn>

          <!-- 👉 Add user button -->
          <VBtn
            prepend-icon="tabler-plus"
            @click="isAddNewUserDrawerVisible = true"
          >
            Add New User
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <!-- SECTION datatable -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:model-value="selectedRows"
        v-model:page="page"
        :items="users"
        item-value="id"
        :items-length="totalUsers"
        :headers="headers"
        class="text-no-wrap"
        show-select
        @update:options="updateOptions"
      >
        <!-- User -->
        <template #item.user="{ item }">
          <div class="d-flex align-center gap-x-4">
            <VAvatar
              size="34"
              :variant="!item.avatar ? 'tonal' : undefined"
            >
              <VImg v-if="item.avatar" :src="item.avatar" />
              <span v-else>{{ avatarText(item.fullName) }}</span>
            </VAvatar>
            <div class="d-flex flex-column">
              <h6 class="text-base">
                  {{ item.name }}
              </h6>
              <div class="text-sm">
                {{ item.email }}
              </div>
            </div>
          </div>
        </template>

        <!-- 👉 Role -->
        <template #item.role="{ item }">
          <div class="d-flex align-center gap-x-2">
            <div class="text-capitalize text-high-emphasis text-body-1">
              {{ item.role }}
            </div>
          </div>
        </template>

        <!-- Plan -->
        <template #item.plan="{ item }">
          <div class="text-body-1 text-high-emphasis text-capitalize">
            {{ item.currentPlan }}
          </div>
        </template>

        <!-- Status -->
        <template #item.isActive="{ item }">
          <VChip
            :color="resolveUserStatusVariant(item.isActive)"
            size="small"
            label
            class="text-capitalize"
          >
            {{ item.isActive == 1 ? "Active" : "Pending" }}
          </VChip>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn @click="deleteUser(item.id)">
            <VIcon icon="tabler-trash" />
          </IconBtn>

          <IconBtn>
            <VIcon icon="tabler-eye" />
          </IconBtn>

          <VBtn icon variant="text" color="medium-emphasis">
            <VIcon icon="tabler-dots-vertical" />
            <VMenu activator="parent">
              <VList>
                <VListItem
                  :to="{ name: 'apps-user-view-id', params: { id: item.id } }"
                >
                  <template #prepend>
                    <VIcon icon="tabler-eye" />
                  </template>

                  <VListItemTitle>View</VListItemTitle>
                </VListItem>

                <VListItem link>
                  <template #prepend>
                    <VIcon icon="tabler-pencil" />
                  </template>
                  <VListItemTitle>Edit</VListItemTitle>
                </VListItem>

                <VListItem @click="deleteUser(item.id)">
                  <template #prepend>
                    <VIcon icon="tabler-trash" />
                  </template>
                  <VListItemTitle>Delete</VListItemTitle>
                </VListItem>
              </VList>
            </VMenu>
          </VBtn>
        </template>

        <!-- pagination -->
        <template #bottom>
          <TablePagination
            :page="page"
            @update:page="updatePage($event)"
            :items-per-page="itemsPerPage"
            :total-items="totalUsers"
          />
        </template>
      </VDataTableServer>
      <!-- SECTION -->
    </VCard>
    <!-- 👉 Add New User -->
    <AddNewUserDrawer
      v-model:isDrawerOpen="isAddNewUserDrawerVisible"
      @user-data="addNewUser"
    />
  </section>
</template>
