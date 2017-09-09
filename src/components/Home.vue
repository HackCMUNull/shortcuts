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
  import {Graph, nodes, roomMap} from "../findpath";

  export default {
    components: {Navbar, HistoryList, InputPanel},
    methods: {
      inputClick ({from, to}) {
        // find path method
        console.log(from, to)
        const graph = new Graph(nodes)
        const start = roomMap[from]
        console.log(start)
        const target = roomMap[to]
        console.log(target)
        const path = graph.getDpath(start, target)
        path.forEach(console.log)

        // split path
        const directions = []
        let locale = path[0].building * path[0].floor
        let dir_start = 0
        for (let i = 0; i < path.length; i++) {
          const current_locale = path[i].building * path[i].floor
          console.log(i+":"+locale+":"+current_locale)
          if (current_locale != locale) {
            directions.push(path.slice(dir_start, i))
            dir_start = i
            locale = current_locale
          }
        }
        directions.push(path.slice(dir_start, path.length))
        console.log("directions", directions)

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
  }
  .history {
    flex: 1 1 0;
  }
  .input-panel {
    flex: 0;
  }
</style>
