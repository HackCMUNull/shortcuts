<template>
  <div class="home">
    <navbar class="navbar"></navbar>
    <history-list class="history"></history-list>
    <input-panel class="input-panel" @click="inputClick"></input-panel>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'
  import HistoryList from './HistoryList.vue'
  import InputPanel from './InputPanel.vue'

  export default {
    components: {Navbar, HistoryList, InputPanel},
    methods: {
      inputClick ({from, to}) {
        this.$router.push({
          name: 'result'
        })
      }
    }
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
    flex-basis: auto;
  }
  .history {
    flex: 1;
  }
  .input-panel {
    flex: 0;
    flex-basis: auto;
  }
</style>
