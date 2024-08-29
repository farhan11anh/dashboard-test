<script setup>
import AddEditRoleDialog from '@/components/dialogs/AddEditRoleDialog.vue';
import UserList from '@/views/apps/roles/UserList.vue';
import girlUsingMobile from '@images/pages/girl-using-mobile.png'
const isAddRoleDialogVisible = ref(false)
const users = ref(
  [
  {
    "role": "Admin",
    "merchantId": "M001",
    "merchantName": "Merchant A",
    "status": "Active",
    "actions": "Edit"
  },
  {
    "role": "User",
    "merchantId": "M002",
    "merchantName": "Merchant B",
    "status": "Inactive",
    "actions": "Edit"
  },
  {
    "role": "Manager",
    "merchantId": "M003",
    "merchantName": "Merchant C",
    "status": "Active",
    "actions": "Edit"
  },
  {
    "role": "Supervisor",
    "merchantId": "M004",
    "merchantName": "Merchant D",
    "status": "Inactive",
    "actions": "Edit"
  },
  {
    "role": "Operator",
    "merchantId": "M005",
    "merchantName": "Merchant E",
    "status": "Active",
    "actions": "Edit"
  }
]

)

const check = (e) => {
console.log(e, 'data yg masuk');
 
}

</script>

<template>
  <VRow>
    <VCol
      cols="12"
    >
      <VCard
        class="h-100"
        :ripple="false"
      >
        <VRow
          no-gutters
          class="h-100"
        >
          <VCol
            cols="5"
            class="d-flex flex-column justify-end align-center mt-5"
          >
            <img
              width="85"
              :src="girlUsingMobile"
            >
          </VCol>

          <VCol cols="7">
            <VCardText class="d-flex flex-column align-end justify-end gap-4">
              <VBtn
                size="small"
                @click="isAddRoleDialogVisible = true"
              >
                Add New Role
              </VBtn>
              <div class="text-end">
                Add new role,<br> if it doesn't exist.
              </div>
            </VCardText>
          </VCol>
        </VRow>
      </VCard>
      <AddEditRoleDialog 
        v-model:is-dialog-visible="isAddRoleDialogVisible"
        @update:role-permissions="check($event)" />
    </VCol>
  </VRow>

  <VRow class="mt-5" >
    <VCol 
      cols="12"
    >
        <UserList
            :users="users"
        />
    </VCol>
  </VRow>

</template>
