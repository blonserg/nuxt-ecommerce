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
                  <span>%</span>
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
                    v-model="promocode.value"
                    class="cart-promo-input"
                    :class="[
                      promoApprove ? 'cart-promo-input--green' : '',
                      promoDisapprove ? 'cart-promo-input--red' : ''
                    ]"
                    placeholder="Введите промокод"
                  />
                  <b-button
                    variant="primary"
                    class="cart-promo-btn"
                    :disabled="promocode.value.length === 0"
                    @click="addPromocode"
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
                  <div
                    v-show="promoApprove || promoDisapprove"
                    class="cart-promo-desc cart-promo-desc--green"
                    :class="[
                      promoApprove ? 'cart-promo-desc--green' : '',
                      promoDisapprove ? 'cart-promo-desc--red' : ''
                    ]"
                  >
                    {{ promoApprove ? `Скидка ${discount}%`
                      : "Промокод не найден" }}
                  </div>
                </div>
              </div>
              <div class="cart-total">
                <div class="cart-total-ttl">
                  Итого:
                </div>
                <div class="cart-total-info">
                  {{ priceWithPromo }}
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
import { URL } from '@/utils/constants'

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
      promocode: {
        value: '',
        discount: 0
      },
      promoApprove: false,
      promoDisapprove: false
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

      return total.toFixed(2)
    },
    priceWithPromo () {
      return this.discount ? +this.totalPrice - (+this.totalPrice / 100 * +this.discount).toFixed(0)
        : this.totalPrice
    }
  },
  mounted () {
    this.updateTotalQuantity()
  },
  methods: {
    ...mapMutations({
      updateTotalQuantity: 'cart/UPDATE_TOTAL_QUANTITY',
      updatePromocode: 'cart/UPDATE_PROMOCODE'
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
    addPromocode () {
      this.$axios.get(`${URL}api/promocode/${this.promocode.value}/`)
        .then(({ data }) => {
          this.promoDisapprove = false
          this.promoApprove = true
          this.promocode.discount = data
          this.updatePromocode(this.promocode)
        })
        .catch((error) => {
          console.log(error)
          this.promoApprove = false
          this.promoDisapprove = true
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-promo-input--green {
  border-color: yellowgreen;
}

.cart-promo-input--red {
  border-color: #EB5757;
}

.cart-promo-desc {
  padding-top: 5px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
}

.cart-promo-desc--green {
  color: yellowgreen;
}

.cart-promo-desc--red {
  color: #EB5757;
}
</style>
