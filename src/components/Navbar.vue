<template>
  <div class="navbar">
    <md-toolbar class="navbar md-accent">
      <!--<md-button class="md-icon-button">-->
        <!--<md-icon></md-icon>-->
      <!--</md-button>-->
      <div class="filler"></div>

      <h2 class="md-title" style="flex: 1;">CMU Shortcuts</h2>

      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
    </md-toolbar>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .navbar {
    background-color: #9C0000 !important;
  }

  .filler {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin:0 6px;
  }
</style>
