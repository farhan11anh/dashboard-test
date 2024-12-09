<script setup>
import { useCookie } from "@/@core/composable/useCookie";
import { firstLetterUppercase } from "@/utils/firstlatterUppercase";
import avatar1 from "@images/avatars/avatar-1.png";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const ability = useAbility();

const userData = useCookie("userData");

const authStore = useAuthStore();

const logout = async () => {
  new Promise(async (resolve, reject) => {
    try {
      await $api.post("/auth/logout/")
      .then(() => {
        // Remove "accessToken" from cookie
        useCookie("accessToken").value = null;
        // Remove "userData" from cookie
        useCookie("userData").value = null;
        useCookie("userAbilityRules").value = null;
        router.push("/login");
        useLayoutStore().setSnackbar(true, "success", "Logout Success");
        // Remove "userAbilities" from cookie
        useCookie("userAbilityRules").value = null;

        // Reset ability to initial ability
        ability.update([]);
        resolve();
      });
    } catch (error) {
      useLayoutStore().setSnackbar(true, "error", "Logout Failed");
      reject(error);
    }
  });
};
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    bordered
    color="success"
  >
    <VAvatar class="cursor-pointer" color="primary" variant="tonal">
      <VImg :src="avatar1" />

      <!-- SECTION Menu -->
      <VMenu activator="parent" width="230" location="bottom end" offset="14px">
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar color="primary" variant="tonal">
                    <VImg :src="avatar1" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              {{
                firstLetterUppercase(
                  useCookie("userData")?.value?.name || "Admin"
                )
              }}
            </VListItemTitle>
            <VListItemSubtitle>{{
              useCookie("userData")?.value?.Role
            }}</VListItemSubtitle>
          </VListItem>

          <VDivider class="my-2" />

          <!-- 👉 Profile -->
          <VListItem link to="/users/profile/security">
            <template #prepend>
              <VIcon class="me-2" icon="tabler-user" size="22" />
            </template>

            <VListItemTitle>Profile</VListItemTitle>
          </VListItem>

          <!-- 👉 Settings -->
          <!-- <VListItem link>
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-settings"
                size="22"
              />
            </template>

            <VListItemTitle>Settings</VListItemTitle>
          </VListItem> -->

          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem @click="logout">
            <template #prepend>
              <VIcon class="me-2" icon="tabler-logout" size="22" />
            </template>

            <VListItemTitle>Logout</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
