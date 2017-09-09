<template>
  <div class="navbar">
    <md-toolbar class="navbar md-accent">
      <md-button class="md-icon-button" @click="onBack">
        <md-icon>chevron_left</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1;"></h2>

      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
    </md-toolbar>
  </div>
</template>

<script>
  export default {
    methods: {
      onBack () {
        this.$emit('back')
      }
    }
  }
</script>

<style scoped>
  .navbar {
    background-color: #9C0000 !important;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
</style>
