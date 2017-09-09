<template>
  <div>
    <md-list>
      <md-list-item v-for="h in history" :key="h.id">
        <span @click="clickHistory(h.id)">
      <md-list-item v-for="h in history" :key="id">
        <span class="history-item" @click="clickHistory(h.id)">
          <i class="fa fa-angle-double-right"></i>
          From {{h.start}} to {{h.end}}<br>
          <span class="history-time">{{h.time}}</span>
        </span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        history: [
          {
            id: 0,
            start: "GHC 4",
            end: "WEH 4",
            time: "2:20 am September 9"
          },
          {
            id: 1,
            start: "GHC 3",
            end: "NSH A",
            time: "3:30 am September 10"
          },
          {
            id: 2,
            start: "SH 2",
            end: "HH 2",
            time: "5:00 pm September 9"
          },
          {
            id: 3,
            start: "WEH 7",
            end: "GHC 8",
            time: "4:50 am November 9"
          },
        ]
      }
    },
    methods: {
      clickHistory (id) {
        alert("You clicked on History #" + id)
        this.history.push({
          start: this.history[id].start,
          end: this.history[id].end
        })
      },

      addHistory () {
        this.history.push({
          start: "TBA",
          end: "TBA"
        })
      }
    }
  }
</script>

<style scoped>
  .history-item {
    padding-left: 20px;
    padding-bottom: 20px;
  }
  .history-time {
    font-size: 80%;
    color: #AAA;
    padding-left: 20px;
  }
</style>
