<template>
  <div>
    <md-list>
      <md-list-item v-for="h in history" :key="id">
        <span @click="clickHistory(h.id)">
          <i class="fa fa-angle-double-right"></i>
          From {{h.start}} to {{h.end}}
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
            end: "WEH 4"
          },
          {
            id: 1,
            start: "GHC 3",
            end: "NSH A"
          },
          {
            id: 2,
            start: "SH 2",
            end: "HH 2"
          },
          {
            id: 3,
            start: "WEH 7",
            end: "GHC 8"
          },
        ]
      }
    },
    methods: {
      clickHistory (id) {
        alert("You clicked on History #"+id)
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
