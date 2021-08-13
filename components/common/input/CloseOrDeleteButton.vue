<template>
  <div class="svg-icon-block">
    <SvgClose :class="{'svg-icon-close': buttonType === 'close', 'svg-icon-delete': buttonType === 'delete'}" />
  </div>
</template>

<script>
import SvgClose from '~~/assets/svg/cart-close.svg?inline'
export default {
  components: {
    SvgClose
  },
  props: {
    buttonType: {
      type: String,
      default: 'close'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
