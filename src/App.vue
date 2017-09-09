<template>
  <div id="app">
    <div class="transition-parent">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        transitionName: 'side-left'
      }
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').filter(entry => entry.trim() !== '').length
        const fromDepth = from.path.split('/').filter(entry => entry.trim() !== '').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
//        console.log(this.transitionName)
      }
    }
  }
</script>

<style>
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
  .transition-parent {
    /*position: relative;*/
  }

  .slide-left-leave, .slide-left-leave-active, .slide-right-enter, .slide-right-enter-active {
    position: absolute;
    z-index: -1;
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*bottom: 0;*/
    transition: all 0.5s ease;
    opacity: 1;
  }

  .slide-left-leave-active, .slide-right-enter-active {
    opacity: 0.99;
  }

  .slide-left-enter, .slide-left-enter-active {
    position: absolute;
    z-index: 1;
    left: 0;
    transition: left 0.5s ease;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);
  }

  .slide-left-enter {
    left: 100vw;
  }

  .slide-right-leave, .slide-right-leave-active {
    position: absolute;
    z-index: 1;
    left: 120vw;
    transition: left 0.6s ease;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);
  }

  .slide-right-leave {
    left: 0;
  }

  * {
    outline: none;
  }
</style>
