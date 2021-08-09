<template>
  <div v-if="loading" class="loading-page">
    <div class="loading-page-inner">Amino</div>
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
    font-family: sans-serif;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .loading-page-inner {
    font-family: 'SF Pro Display';
    font-weight: 900;
    font-size: 44px;
    font-style: italic;
    color: #257BF4;
    line-height: 20px;
    text-transform: uppercase;
    padding-top: 48vh;
  }
</style>
