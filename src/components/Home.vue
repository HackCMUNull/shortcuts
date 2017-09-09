<template>
  <div class="home">
    <navbar class="navbar"></navbar>
    <history-list class="history"></history-list>
    asdf
    <md-button class="md-primary md-raised" @click="$router.push({'name': 'result'})">
      Result
    </md-button>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'
  import HistoryList from './HistoryList.vue'

  export default {
    components: {Navbar, HistoryList}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    width: 100vw;
    height: 100vh;
    text-align: center;
    background-color: darkgray;
    display: flex;
    flex-direction: column;
  }
  .navbar {
    flex: 0;
  }
  .history {
    flex: 1;
  }
  .input-panel {
    flex: 0;
  }
</style>
