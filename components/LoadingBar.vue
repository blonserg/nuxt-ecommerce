<template>
  <div v-if="loading" class="loading-page">
    <p>Amino</p>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #0D1115;
    text-align: center;
    font-size: 30px;
    font-family: sans-serif;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-content: center;
  }
</style>
