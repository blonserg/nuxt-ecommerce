<template>
  <div v-if="loading" class="loading-page">
    <div class="loading-page-inner">
      Amino
    </div>
    <div class="preloader">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
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
    z-index: 6000;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .loading-page-inner {
    font-family: 'SF Pro Display';
    font-weight: 900;
    font-size: 4rem;
    font-style: italic;
    color: #257BF4;
    line-height: 20px;
    text-transform: uppercase;
    padding-top: 42vh;
  }
</style>

<style lang="scss" scoped>
  $count: 10;
  $time: 2; //in seconds
  $size: 50;
  $color: #257BF4;

.preloader {
  /* size */
  width: $size + px;
  height: $size + px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  animation: rotatePreloader $time + s infinite ease-in;
}
@keyframes rotatePreloader {
  0% {
  transform: translateX(-50%) translateY(-50%) rotateZ(0deg);
  }
  100% {
  transform: translateX(-50%) translateY(-50%) rotateZ(-360deg);
  }
}
.preloader div {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.preloader div:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0%;
  width: 10%;
  height: 10%;
  background-color: $color;
  transform: translateX(-50%);
  border-radius: 50%;
}

@for $i from 1 through $count {
  .preloader div:nth-child(#{$i}) {
    transform: rotateZ(((360 / $count) * ($i - 1)) + deg);
    animation: rotateCircle + $i $time + s infinite linear;
    z-index: $count - $i;
  }
  @keyframes rotateCircle#{$i} {
    #{percentage(((50 / $count) * ($i - 1)) / 100)} {
      opacity: 0;
    }
    #{percentage((((50 / $count) + 0.0001) * ($i - 1)) / 100)} {
      opacity: 1;
      transform: rotateZ((0 - ((360 / $count) * ($i - 2))) + deg);
    }
    #{percentage((((50 / $count) * ($i - 0)) + 2) / 100)} {
      transform: rotateZ((0 - ((360 / $count) * ($i - 1))) + deg);
    }
    #{percentage(((50 + ((50 / $count) * ($i - 0))) + 2) / 100)} {
      transform: rotateZ((0 - ((360 / $count) * ($i - 1))) + deg);
    }
    100% {
      transform: rotateZ((0 - ((360 / $count) * ($count - 1))) + deg);
      opacity: 1;
    }
  }
}
</style>
