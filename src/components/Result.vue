<template>
  <div class="result">
    <navbar-back class="navbar" @back="onBack"></navbar-back>
    <swiper class="swiper" :steps="directions">
      <template slot="step" scope="props">
        <floor-render :building="props.step[0].building" :floor="props.step[0].floor" :direction="props.step"></floor-render>
      </template>
    </swiper>
  </div>
</template>

<script>
  import NavbarBack from './NavbarBack.vue'
  import Swiper from './Swiper.vue'
  import FloorRender from '../floor/FloorRender.vue'
  import {mapGetters} from 'vuex'

  export default {
    components: {NavbarBack, Swiper, FloorRender},
    computed: {
      ...mapGetters(['directions'])
    },
    methods: {
      onBack () {
        this.$router.back()
      }
    },
    data () {
      return {
        steps: [
          {
            'id': 'thing'
          },
          {
            'id': 'thing2'
          },
          {
            'id': 'thing3'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .result {
    width: 100vw;
    height: 100vh;
    text-align: center;
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .navbar {
    flex: 0;
  }
  .swiper {
    flex: 1
  }
</style>
