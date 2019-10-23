<template>
  <!-- swiper -->
  <swiper :options="swiperOption" class="wrapper">
    <swiper-slide>
        <img src="@/assets/images/1.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="@/assets/images/2.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="@/assets/images/3.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
        <img src="@/assets/images/4.jpg" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: 3000,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
          paginationClickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
      }
    };
  }
};
</script>

<style scoped>
    .wrapper{
        width: 100%;
        height: 300px;
    }
    .wrapper img {
        width: 100%;
        height: 100%;
    }
</style>