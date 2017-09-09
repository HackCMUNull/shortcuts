<template>
  <div class="input-panel">
    <form @submit.prevent="emit">
      <div class="input-wrapper">
        <md-input-container class="input-container" md-theme="white" md-inline md-clearable>
          <label class="input-label">Start Location</label>
          <md-input v-model="from" class="input-label" tabindex="0"></md-input>
        </md-input-container>
      </div>
      <div class="input-wrapper">
        <md-input-container class="input-container" md-theme="white" md-inline md-clearable>
          <label class="input-label">End Location</label>
          <md-input v-model="to" class="input-label" tabindex="1" @keyup.enter="emit"></md-input>
        </md-input-container>
      </div>
    </form>
    <div class="input-wrapper">
      <md-button @click="emit" class="input-label md-accent pull-right">
        <md-icon>chevron_right</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        from: '',
        to: ''
      }
    },
    methods: {
      emit () {
        this.$emit('click', {
          from: this.from.substr(3),
          to: this.to.substr(3)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input-panel {
    height: 100%;
    width: 100%;
    background-color: #9C0000;
    box-shadow: 0 -5px 16px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .input-container {
    margin: 8px 16px;
    width: auto;
  }

  .input-wrapper {
    padding: 0 16px;
  }

  .input-label {
    color: white !important;
  }

  .pull-right {
    float: right;
  }

  *, .md-input-container.md-clearable .md-clear-input {
    color: white !important;
  }
</style>
