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
        <div v-if="getProductsInCart.length === 0" class="">
            <p>
                Товаров пока нет, но это легко можно исправить :)
            </p>
        </div>
        <template v-else>
            <div class="row">
                <div class="col-md-8">
                    <ProductsList class="products" :products-from-cart="getProducts" />
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
                              6
                              <span>ед</span>
                          </div>
                      </div>
                      <div class="cart-row">
                          <div class="cart-row-name">
                              Скидка:
                          </div>
                          <div class="cart-row-info">
                              0.00
                              <span>₴</span>
                          </div>
                      </div>
                      <div class="cart-row">
                          <div class="cart-row-name">
                              Сумма к оплате:
                          </div>
                          <div class="cart-row-info">
                              1 800
                              <span>₴</span>
                          </div>
                      </div>
                      <div class="cart-promo">
                          <label for="promo">Промокод</label>
                          <div class="cart-promo-form">
                            <b-form-input id="promo" placeholder="Введите промокод"></b-form-input>
                            <b-button variant="primary" class="cart-promo-btn">
                              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.75 1.5L6.25 6L1.75 10.5" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                            </b-button>
                          </div>
                      </div>
                      <div class="cart-total">
                          <div class="cart-total-ttl">
                              Итого:
                          </div>
                          <div class="cart-total-info">
                              {{ getAmount | round }}
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
import { mapGetters } from 'vuex'
import ProductsList from '~~/components/cart/ProductsList.vue'
import CloseOrDeleteButton from '~~/components/common/input/CloseOrDeleteButton.vue'
import round from '~~/mixins/round.js'
export default {
  components: {
    ProductsList,
    CloseOrDeleteButton
  },
  mixins: [round],
  data () {
    return {
      addedProduct: null,
      defaults: {
        addedProduct: null
      }
    }
  },

  computed: {
    ...mapGetters({
      getProductsInCart: 'cart/getProductsInCart'
    }),
    getAddedProduct () {
      const product = this.getProductsInCart.find(
        prod => prod.productId === this.addedProduct
      )
      if (product) {
        return [product]
      } else {
        return null
      }
    },
    getAmount () {
      let amount = 0
      if (this.getProductsInCart && this.getProductsInCart.length > 0) {
        this.getProductsInCart.forEach(product => {
          amount +=
            parseFloat(product.meta.pPrice) *
            parseInt(product.qty)
        })
        return amount
      } else {
        return 0
      }
    },
    getProducts () {
      if (this.addedProduct) {
        return this.getProductsInCart.filter(
          prod => prod.productId !== this.addedProduct
        )
      } else {
        return this.getProductsInCart
      }
    }

  },

  watch: {
    getProductsInCart: function (newVal, oldVal) {
      if (oldVal.length > 0) {
        if (this.getProductsInCart.length === 0) {
          this.$modal.hide('customer-cart')
        }
      }
    }
  },
  methods: {
    async beforeOpen (event) {
      if (!event.params) {
        event.params = {}
      }
      if (event.params.addedProduct) {
        this.addedProduct = event.params.addedProduct
      } else {
        this.addedProduct = this.defaults.addedProduct
      }
    }
  }
}
</script>
<style lang="scss">
</style>