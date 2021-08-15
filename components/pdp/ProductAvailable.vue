<template>
    <div class="product-available" 
        v-bind:class="{ '_not-available': !isAvailable}">
        <span class="product-available-icon" aria-hidden="true">
          <img v-if="isAvailable" src="@/assets/svg/check-mark.svg" alt="Есть в наличии">
          <img v-else src="@/assets/svg/error-mark.svg" alt="Нет в наличии">
        </span>
        {{ isAvailable ? 'Есть в наличии' : 'Нет в наличии'}}
    </div>
</template>

<script>
export default {
  props: {
    isAvailable: {
      type: Boolean,
      default: {
        isAvailable: true
      }
    },
  },
}
</script>