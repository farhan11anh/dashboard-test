<script setup >
import { register } from 'swiper/element/bundle'

const props = defineProps({
  lifestylesImg: {
    type: Array,
    required: false
  }
})

import swiper1 from '@images/pages/1.png'
import swiper13 from '@images/pages/2.png'
import swiper2 from '@images/pages/3.png'
import swiper4 from '@images/pages/5.jpg'
import swiper7 from '@images/pages/5.jpg'


const lifestyles = ref([
    swiper1, swiper13, swiper2, swiper4, swiper7, swiper7, swiper1
])

const news = ref([
  {
    img: swiper1,
    title: 'Dance party at the top of the town that got all celebrities',
    content: 'lorem ipsum dolor sit amet'
  },
  {
    img: swiper2,
    title: 'Dance party at the top of the town that got all celebrities',
    content: 'lorem ipsum dolor sit nissi'
  }
])

register()

</script>

<template>
  <div class="phone">
    <!-- notification bar here -->
    <div class="notif-bar">
      <VRow justify="space-between">
        <VCol>
          <h3>11:17</h3>
        </VCol>
        <VCol cols="3">
          <VRow justify="end">
            <VCol cols="4">
              <VIcon icon="tabler-antenna-bars-5" color="red" size="25" />
            </VCol>
            <VCol cols="4">
              <VIcon icon="tabler-wifi" color="red" size="25" />
            </VCol>
            <VCol cols="4">
              <VIcon icon="tabler-battery-4" color="red" size="25" />
            </VCol>
          </VRow>
        </VCol>
      </VRow>
    </div>

    <!-- content here -->
    <div class="content d-flex flex-column align-content-between">
      <div class="header-content">
        <VRow justify="space-between">
          <VCol cols="8">
            Hallo, Norman
            <div class="title">Welcome to BRI LifeStyle</div>
          </VCol>
          <VCol cols="3">
            <VRow>
              <VCol cols="6">
                <VIcon icon="tabler-bell" color="red" size="35" />
              </VCol>
              <VCol cols="6">
                <VIcon icon="tabler-calendar-month" color="red" size="35" />
              </VCol>
            </VRow>
          </VCol>
        </VRow>
      </div>
      <div class="body-conten d-flex flex-column align-content-between mb-5">
        <div class="search-button d-flex align-content-between pa-4">
          <VIcon icon="tabler-search" size="20" />
          <input type="text" />
        </div>
      </div>

      <!-- carousel here -->
      <div class="carousel mb-10">
            <swiper-container 
                autoplay="true"
                events-prefix="swiper-">
          <swiper-slide
            v-for="swiperImg in [swiper1, swiper2, swiper4, swiper7, swiper13]"
            :key="swiperImg"
          >
            <VImg :src="swiperImg" />
          </swiper-slide>
        </swiper-container>
      </div>

      <!-- lifestyle Feature here -->
       <div class="mb-10" >
         <h3 class="mb-5" >Lifestyle Feature</h3>
         <div class="d-flex flex-wrap">
            <div class="card flex-item" v-for="item in lifestylesImg.length > 0 ? lifestylesImg : lifestyles" :key="item">
                <VImg :src="item" cover height="100%"  />
            </div>
         </div>
       </div>

       <!-- todays picks here -->
       <div class="mb-10">
         <h3 class="mb-5" >Todays Picks! 🔥</h3>
          <VRow>
            <VCol
              cols="7"
            >
              <VRow>
                <VCol
                  cols="12"
                >
                  <div class="card">
                    <VImg :src="swiper1" cover height="100%" />
                  </div>
                </VCol>
                <VCol
                  cols="12"
                >
                  <div class="card">
                    <VImg :src="swiper13" cover height="100%" />
                  </div>
                </VCol>
              </VRow>
            </VCol>
            <VCol
              cols="5"
            >
              <div class="card-2">
                <VImg :src="swiper4" cover="true" height="100%" />
              </div>
            </VCol>
          </VRow>
       </div>

       <!-- entertainment here -->
       <div class="mb-10">
         <h3 class="mb-5" >Entertainment</h3>
         <div class="entertainment" style="position: relative;">
            <VImg :src="swiper13" cover="true" height="100%" />
            <div class="circle">
              <VIcon 
                icon="tabler-player-play-filled"
                color="gray"
                size="30"
                style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
              />
            </div>
         </div>
       </div>

       <!-- news and update here -->
       <div class="mb-10">
         <h3 class="mb-5" >News and Update</h3>
          <div class="d-flex flex-column">
            <div class="card-news" v-for="item in news" :key="item">
              <VRow>
                <VCol
                  cols="4"
                >
                  <div class="img-news">
                    <VImg :src="item.img" cover="true" height="100%" />
                  </div>
                </VCol>
                <VCol
                  cols="8"
                >
                <div style="position: relative;" >
                  <h4>{{ item.title }}</h4>

                  <div class="content-news">
                    {{ item.content }}
                  </div>

                  <div class="time-news d-flex" style="position: absolute; bottom: -40px; " >
                    <div>3 Min Read</div> 
                    <div style="margin-top: -2px; margin-right: -8px;" >
                      <VIcon icon="tabler-circle-filled" color="#d9d9d9" size="15" />
                    </div>
                    <div>15 Hr</div>
                  </div>

                  <div
                    style="position: absolute; bottom: -52px; right: 10px; background-color: #f2f7fa; border-radius: 100%; width: 40px; height: 40px;"
                  >
                    <VIcon
                      icon="tabler-bookmark-plus"
                      color="gray"
                      size="20"
                      style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"
                    />
                  </div>
                </div>
                </VCol>
              </VRow>
            </div>
          </div>
       </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.phone {
  border: 0.5rem solid #000;
  border-radius: 20px;
  height: 2000px;
}

.notif-bar {
  margin-bottom: 20px;
}
.notif-bar,
.content {
  padding: 20px;
}

.header-content .title {
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
}
.search-button {
  overflow: hidden;
  border: 1px solid #00000031;
  border-radius: 10px;
  height: 50px;
}
.search-button input {
  border: none;
  outline: none;
  width: 100%;
}

.carousel {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
}

.d-flex {
    gap: 10px;
}

.flex-item {
    flex-basis: 30%;
    flex-grow: 3;
}

.flex-item.card {
    height: 60px;
    background-color: #faf5f5;
    border-radius: 10px;
    overflow: hidden;
}

.card {
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 160px;
    background-color: #77515131;
}

.card-2 { 
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 345px;
  background-color: #00000031;
}

.entertainment {
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 200px;
  background-color: #00000031;
}

.circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.325);
  border-radius: 100%;
}

.card-news {
  padding: 20px 10px;
  background-color: #fcfcfc;
  // background-color: #000;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 150px;
  box-shadow: 5px 5px 10px rgb(214, 207, 207)
}

.img-news {
  height: 110px;
  overflow: hidden;
  border-radius: 10px;
}

.content-news {
  font-size: 12px;
  line-height: 12px;
  color: #6e6363;
  margin-top: 5px;
}

.time-news {
  font-size: 11px;
  line-height: 12px;
  color: #6e6363;
  margin-top: 5px;
}
</style>
