<template>
  <div>
    <div class="container">
      <div class="checkout-finish-ttl">
        Спасибо, ваш заказ был успешно оформлен!
      </div>
      <div class="checkout-finish-txt">
        {{ $router.params.id === "short" ?
          "Наш менеджер свяжется с Вами в ближайшее время!" :
          "Ваш заказ готов к отправке, вы получите уведомление, когда наш менеджер его отправит" }}
      </div>
      <div class="checkout-finish-btn">
        <nuxt-link
          to="/"
          class="btn btn-primary"
        >
          Вернуться на главную
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
</script>
