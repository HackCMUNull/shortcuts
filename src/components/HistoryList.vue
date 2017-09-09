<template>
  <div class="list-container" ref="container">
    <md-list class="list">
      <md-list-item v-for="h in history" :key="h.id">
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
//        alert("You clicked on History #" + id)
        this.history.push({
          id: this.history.length,
          start: this.history[id].start,
          end: this.history[id].end,
          time: this.history[id].time
        })
      },

      addHistory () {
        this.history.push({
          start: "TBA",
          end: "TBA"
        })
      }
    },
    watch: {
      history (to, from) {
        this.$nextTick(function () {
          this.$refs.container.scrollTop = this.$refs.container.scrollHeight;
        })
      }
    }
  }
</script>

<style scoped>
  .history-item {
    padding: 16px 16px;
    background: white;
    position: relative;
  }
  .md-list-item::after {
    content: '';
    height: 1px;
    /*width: 80vw;*/
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    left: 1px;
    right: 1px;
  }
  .history-time {
    font-size: 80%;
    color: #AAA;
    padding-left: 20px;
  }
  .list-container {
    display: flex;
    overflow: scroll;
    flex-direction: column;
    height: 100%;
    background: white;
  }
  .list {
    flex: 1;
  }
</style>
