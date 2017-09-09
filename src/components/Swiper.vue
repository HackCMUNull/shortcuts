<template>
  <div class="swiper-wrap">
    <swiper class="swipe-container-wrap" :options="swiperOption">
      <swiper-slide v-for="s in steps" :key="s.id">
        <slot name="step" :step="s"></slot>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <md-button class="swiper-prev md-primary" slot="button-prev">
        <md-icon class="white-icon md-primary">chevron_left</md-icon>
      </md-button>
      <md-button class="swiper-next md-primary" slot="button-next">
        <md-icon class="white-icon md-primary">chevron_right</md-icon>
      </md-button>
    </swiper>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    components: {swiper, swiperSlide},
    props: {
      steps: {
        required: true,
        type: Array
      }
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
//          setWrapperSize: true,
//          autoHeight: true,
//          setWrapperSize: true,
//          notNextTick: true,
          observeParents: true,
//          centeredSlides: true,
          nextButton: '.swiper-next',
          prevButton: '.swiper-prev'
        }
      }
    },
    computed: {
      swiper () {
        return this.$refs.swiper.swiper
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    /*width: 400px;*/
    min-height: 320px;
  }

  .swiper-container {
    width: 100%;
  }

  .swiper-wrap, .swipe-container-wrap {
    width: 100%;
    height: 100%;
    padding: 0 0 64px 0;
    margin: 0;
  }

  .swiper-prev, .swiper-next {
    top: auto;
    position: absolute;
    z-index: 11;
    bottom: 0;
    background-image: none;
    /*color: rgba(255, 255, 255, .87);*/
  }

  .swiper-prev {
    left: 0;
  }

  .swiper-next {
    right: 0;
  }

  .white-icon {
    transition: all 0.4s ease;
    color: rgba(255, 255, 255, .87) !important;
  }

  .swiper-button-disabled > .white-icon {
    color: darkgray !important;
  }
</style>

<style>
  .swiper-pagination-bullet {
    transition: all 0.4s ease;
    height: 12px;
    width: 12px;
    background: rgba(255, 255, 255, .54);
  }

  .swiper-pagination-bullet-active {
    background: rgba(255, 255, 255, .87);
  }

  .swiper-pagination-bullets {
    background: #9C0000;
    /*height: 12px;*/
    padding: 16px 12px 12px;
  }

  .swiper-pagination {
    bottom: 0 !important;
    box-shadow: 0 -5px 16px rgba(0, 0, 0, 0.1);
  }
</style>
