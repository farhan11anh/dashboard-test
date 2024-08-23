<script setup>
import p5 from '@images/pages/5.jpg'
import GlobalConfirmationDialog from '../dialog/GlobalConfirmationDialog.vue';

const hola = (event) => {
    console.log('this is hola' + event); 
}
</script>
<template>
    <VCard >
        <VCardText class="pa-5" >
            <VCardTitle>
                DETAIL
            </VCardTitle>

            <VRow
                justify="space-between"
                class="pa-5 mb-4"
            >
                <Vcol
                    cols="4"
                >
                    <h4>Created Date</h4>
                    2024-07-29
                </Vcol>
                <Vcol
                    cols="4"
                >
                    <h4>ID</h4>
                    #23456
                </Vcol>
                <Vcol
                    cols="4"
                >
                    <h4>Campaign Type</h4>
                    Primary Banner
                </Vcol>

            </VRow>

            <div>
                <p><h4>Period Date</h4></p>
                <strong>From : </strong> 2024-07-29 <br>
                <strong>To : </strong> 2024-07-30
            </div>

            <div class="mt-5">
            <h4>Content</h4>
                <div class="card pa-5 mt-5">
                    <VRow 
                    >
                        <VCol cols="2">
                            <strong>Banner Name</strong>
                        </VCol>
                        <VCol cols="1" >
                            :
                        </VCol>
                        <VCol cols="9" >
                            Bermain 2 Jam Discount 50.000
                        </VCol>
                        <VCol cols="2">
                            <strong>Detail Content</strong>
                        </VCol>
                        <VCol cols="1" >
                            :
                        </VCol>
                        <VCol cols="9" >
                            <div class="outer" >
                                <VImg
                                    :width="500"
                                    :src="p5"
                                    class="rounded shadow"
                                />
                            </div>
                        </VCol>
                    </VRow>
                </div>
            </div>

            <div class="d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6 mt-5">
                <div class="d-flex flex-column justify-center">
                </div>
                <div class="d-flex gap-4 align-center flex-wrap">
                    <VBtn
                    variant="tonal"
                    color="secondary"
                    >
                        Cancel
                    </VBtn>
                    <GlobalConfirmationDialog 
                        @update:is-dialog-visible="hola($event)" 
                        button-name="Declined"
                        title="Confirmation"
                        description="Are you sure to Decline ?"
                        variant="tonal"
                        color="warning"
                    />
                    <GlobalConfirmationDialog 
                        @update:is-dialog-visible="hola($event)" 
                        button-name="Approve"
                        title="Confirmation"
                        description="Are you sure to Approve ?"
                    />
                </div>
            </div>
        </VCardText>
    </VCard>
</template>

<style lang="scss">
.card {
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #2F2B3D0F;
}

.outer{
    overflow: hidden;
    height: 150px;
}

</style>
  