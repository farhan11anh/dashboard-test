<script setup>
import { useCookie } from '@/@core/composable/useCookie';
import { firstLetterUppercase } from '@/utils/firstlatterUppercase';
import p5 from '@images/pages/5.jpg'
</script>

<template>
  <VCard >
    <VCardText class="pa-5" >
        <VRow
            justify="center"
        >
            <div class="ma-auto pa-5">
                <VImg
                :width="120"
                :src="p5"
                class="rounded shadow"
                />
            </div>

        </VRow>
        <VCardTitle class="text-center" >{{ firstLetterUppercase(useCookie('userData').value.name) }}</VCardTitle>
        <VRow 
            justify="center" 
            class="pa-5 mb-4"
        >
            <VChip
                  label
                  color="secondary"
                  size="small"
                >
                  Author
            </VChip>
        </VRow>

        <VRow
            justify="space-between"
            class="mb-5"
        >
            <VCol
                cols="6"
            >
                <VRow
                    justify="center"
                >
                    <VCol
                        cols="3"
                    >
                        <VAvatar
                            variant="tonal"
                            rounded
                            size="40"
                            color="primary"
                        >
                            <VIcon
                                icon="tabler-checkbox"
                                size="30"
                            />
                        </VAvatar>
                    </VCol>
                    <VCol
                        cols="9"
                        class="pt-3"
                    >
                        <h3>2</h3>
                        <span>Task Done</span>
                    </VCol>
                </VRow>
            </VCol>
            <VCol
                cols="6"
            >
                <VRow
                    justify="center"
                >
                    <VCol
                        cols="3"
                    >
                        <VAvatar
                            variant="tonal"
                            rounded
                            size="40"
                            color="primary"
                        >
                            <VIcon
                                icon="tabler-briefcase"
                                size="30"
                            />
                        </VAvatar>
                    </VCol>
                    <VCol
                        cols="9"
                        class="pt-3"
                    >
                        <h3>1</h3>
                        <span>Merchant Done</span>
                    </VCol>
                </VRow>
            </VCol>
        </VRow>

        <h2>Details</h2>

        <VDivider class="my-4" />

        <p><strong>Email :</strong> <span>{{ useCookie('userData').value.email }}</span></p>
        <p><strong>Status :</strong> <span>{{ useCookie('userData').value.isActive === 1 ? 'Active' : 'Inactive' }}</span></p>
        <p><strong>Role :</strong> <span>{{ useCookie('userData').value.Role }}</span></p>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.shadow {
    border: 3px rgba(128, 128, 128, 0.235) solid;
    box-shadow: 0 1px 40px 0 rgba(128, 128, 128, 0.235);
}
</style>
