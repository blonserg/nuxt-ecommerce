<template>
  <div class="container">
    <client-only>
      <div class="group">
        <div class="group-left">
          <div class="breadcrumbs">
            <ul>
              <li>
                <a href="/">Main</a>
              </li>
            </ul>
          </div>
          <div class="group-ttl">
            Корзина
          </div>
        </div>
      </div>
      <div v-if="cartProducts.length === 0">
        <p>
          Товаров пока нет, но это легко можно исправить :)
        </p>
      </div>
      <template v-else>
        <div class="row">
          <div class="col-md-8">
            <CartProducts class="products" :products-from-cart="cartProducts" />
          </div>
          <div class="col-md-4">
            <div class="cart-order">
              <div class="cart-order-ttl">
                Ваш заказ
              </div>
              <div class="cart-row">
                <div class="cart-row-name">
                  Всего товаров:
                </div>
                <div class="cart-row-info">
                  {{ totalQuantity }}
                  <span>ед</span>
                </div>
              </div>
              <div class="cart-row">
                <div class="cart-row-name">
                  Скидка:
                </div>
                <div class="cart-row-info">
                  {{ discount }}
                  <span>₴</span>
                </div>
              </div>
              <div class="cart-row">
                <div class="cart-row-name">
                  Сумма к оплате:
                </div>
                <div class="cart-row-info">
                  {{ totalPrice }}
                  <span>₴</span>
                </div>
              </div>
              <div class="cart-promo">
                <label for="promo">Промокод</label>
                <div class="cart-promo-form">
                  <b-form-input
                    id="promo"
                    v-model="promo"
                    placeholder="Введите промокод"
                  />
                  <b-button
                    variant="primary"
                    class="cart-promo-btn"
                    :disabled="promo.length === 0"
                    @click="sendPromo"
                  >
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.75 1.5L6.25 6L1.75 10.5"
                        stroke="#ffffff"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </b-button>
                </div>
              </div>
              <div class="cart-total">
                <div class="cart-total-ttl">
                  Итого:
                </div>
                <div class="cart-total-info">
                  {{ totalPrice }}
                  <span class="cart-cur _total">₴</span>
                </div>
              </div>
              <nuxt-link
                to="/checkout"
                class="btn btn-primary cart-button"
              >
                Оформить заказ
              </nuxt-link>
            </div>
          </div>
        </div>
      </template>
    </client-only>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import CartProducts from '~/components/cart/CartProducts.vue'
import CloseOrDeleteButton from '~~/components/common/input/CloseOrDeleteButton.vue'
import round from '~~/mixins/round.js'
export default {
  components: {
    CartProducts,
    CloseOrDeleteButton
  },
  mixins: [round],
  data () {
    return {
      addedProduct: null,
      defaults: {
        addedProduct: null
      },
      promo: ''
    }
  },
  computed: {
    ...mapGetters({
      cartProducts: 'cart/cartProducts',
      discount: 'cart/discount',
      totalQuantity: 'cart/totalQuantity'
    }),
    totalPrice () {
      let total = 0

      for (const item of this.$store.state.cart.cart) {
        total += item.totalPrice.pPrice
      }

      total -= this.$store.state.cart.discount
      return total.toFixed(2)
    }
  },
  mounted () {
    this.updateTotalQuantity()
  },
  methods: {
    ...mapMutations({
      updateTotalQuantity: 'cart/UPDATE_TOTAL_QUANTITY'
    }),
    async beforeOpen (event) {
      if (!event.params) {
        event.params = {}
      }
      if (event.params.addedProduct) {
        this.addedProduct = event.params.addedProduct
      } else {
        this.addedProduct = this.defaults.addedProduct
      }
    },
    sendPromo () {
      console.log(this.promo, this.promo.length)
    }
  }
}
</script>
