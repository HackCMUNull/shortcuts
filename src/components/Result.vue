<template>
  <div class="result">
    <navbar-back class="navbar" @back="onBack"></navbar-back>
    <swiper class="swiper"></swiper>
  </div>
</template>

<script>
  import NavbarBack from './NavbarBack.vue'
  import Swiper from './Swiper.vue'

  export default {
    components: {NavbarBack, Swiper},
    methods: {
      onBack () {
        this.$router.back()
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
