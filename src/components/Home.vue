<template>
  <div class="main_wrap">
    <div class="main_sec1">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <div class="main_bg">
            <img src="../assets/image/main_visual_img03.jpg" alt="main">
          </div>
          <div class="main_txt">
            <img src="../assets/image/main_visual_pc_txt01.png" alt="main">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main_bg">
            <img src="../assets/image/main_visual_img02.jpg" alt="logo">
          </div>
          <div class="main_txt">
            <img src="../assets/image/main_visual_pc_txt02.png" alt="main">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main_bg">
            <img src="../assets/image/main_visual_img01.jpg" alt="logo">
          </div>
          <div class="main_txt">
            <img src="../assets/image/main_visual_pc_txt03.png" alt="main">
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination">
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: "Home",
  components: {
    Swiper, SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay:{
          delay:3000
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
