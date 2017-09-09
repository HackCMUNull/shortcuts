<template>
  <div>
    <md-list>
      <md-list-item v-for="h in history" :key="id">
        <span @click="clickHistory(h.id)">{{h.title}}</span>
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
            title: "Fake History 1"
          },
          {
            id: 1,
            title: "Fake History 2"
          },
          {
            id: 2,
            title: "Fake History 3"
          },
          {
            id: 3,
            title: "Fake History 6"
          },
        ]
      }
    },
    methods: {
      clickHistory (id) {
        alert(id)
        this.history[id].title = "zaqxfc"
        this.history.push({
          id: this.history.length,
          title: "zswcct"
        })
      }
    }
  }
</script>
