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
    <div class="main_sec2">
      <div class="main_bg2">
        <img src="../assets/image/bg_section_menu.jpg" alt="main">
      </div>
      <div class="main_sec2_txt">
        <div class="sec2_tit">
          <h2 class="big_tit">
            HOUSE MENU
          </h2>
          <p class="sub_tit">엄선된 재료로 선택한 프리미엄 도시락</p>
        </div>
        <div class="sec2_slide_wrap">
          <div class="slide_left">
            <swiper class="swiper" :options="swiperOption1">
              <swiper-slide>
                <div class="slide_thumb">
                  <img src="../assets/image/menu_intro_img01.jpg" alt="main">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="slide_thumb">
                  <img src="../assets/image/menu_intro_img02.jpg" alt="main">
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="slide_right">
            <swiper class="swiper" :options="swiperOption2">
              <swiper-slide>
                <div class="slide_cont">
                  <div class="cont_sub_tit">간편한 식사, 건강한 한끼</div>
                  <div class="cont_tit">일반 도시락</div>
                  <p class="cont_txt">
                    한식을 주재료로 하며 먹기 편하고 간편한 덮밥부터 정통한식과 <br/>
                    퓨전일품요리로 잘 차려진 한상같은 수제도시락까지 다양한 <br/>
                    도시락형태의 건강한 웰빙도시락
                  </p>
                  <button class="detail_btn">자세히 보기</button>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="slide_cont">
                  <div class="cont_sub_tit">즐거운 식사, 새로운 힐링</div>
                  <div class="cont_tit">맞춤 도시락</div>
                  <p class="cont_txt">
                    가격,인원,연령대에 따라 맞춤형으로 제공됩니다. <br/>
                    셰프하우스는 어린이를 위한 튀김과 고 연령층을 위한 수제 <br/>
                    밑반찬이 모두 가능한 노하우를 보유하고 있습니다.
                  </p>
                  <button class="detail_btn">자세히 보기</button>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="swbtn">
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
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
        },
        effect:"fade"
      },
      swiperOption1: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOption2: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        effect:"fade",
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },

    }
  }
}
</script>

<style scoped>

</style>
