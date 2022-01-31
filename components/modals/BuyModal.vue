<template>
  <div
    v-show="buyModal"
    class="review-modal"
  >
    <div v-if="!sended" class="review-modal__container">
      <div class="review-modal__cross" @click="closeBuyModal()"></div>
      <h3 class="review-modal__title">
        Заказать в один клик
      </h3>
      <p class="review-modal__desc">
        Оставьте Ваш номер телефона и наш менеджер перезвонит Вам в ближайшее время,
        для уточнения деталей заказа
      </p>
      <div>
        <div class="checkout-finish-input checkout-input checkout-input--phone">
          <div>
            <label for="phone">Телефон*</label>
            <VuePhoneNumberInput
              v-model="phoneNumber"
              show-code-on-list
              default-country-code="UA"
              :no-flags="true"
              :translations="{
                countrySelectorLabel: 'Код страны',
                countrySelectorError: 'Choisir un pays',
                phoneNumberLabel: 'Номер телефона',
                example: 'Пример :'
              }"
              @update="changeNumber"
            />
          </div>
          <b-button
            variant="primary"
            :disabled="!isValid"
            @click="createOrder"
          >
            Отправить
          </b-button>
        </div>
      </div>
    </div>
    <div
      v-else
      class="review-modal__container review-modal__finish"
      @click="closeBuyModal()"
    >
      <div class="review-modal__cross"></div>
      <h3 class="review-modal__title">
        Спасибо, Ваш заказ</br>
        принят!
      </h3>
      <p class="review-modal__desc">
        Наш менеджер свяжется с Вами в ближайшее время
      </p>
    </div>
  </div>
</template>

<script>
import { URL } from '@/utils/constants'
import { mapMutations, mapActions, mapGetters } from 'vuex'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'

export default {
  name: 'BuyModal',
  components: {
    VuePhoneNumberInput
  },
  props: {
    buyModal: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      phoneNumber: null,
      sended: false,
      isValid: false
    }
  },
  computed: {
    isFullForm () {
      return this.changeNumber
    }
  },
  methods: {
    ...mapMutations({
      closeBuyModal: 'product/CLOSE_BUY_MODAL'
    }),
    ...mapActions({
      requestOneClickOrder: 'product/requestOneClickOrder'
    }),
    ...mapMutations({
      updateCustomerPhone: 'product/UPDATE_CUSTOMER_PHONE'
    }),
    ...mapGetters({
      product: 'product/product',
      customerPhone: 'product/customerPhone'
    }),
    changeNumber (e) {
      this.isValid = e.isValid
    },
    async createOrder () {
      if (this.isValid) {
        const payload = {
          product: this.product(),
          customer: {
            phone: this.phoneNumber
          }
        }

        this.requestOneClickOrder(payload)
        this.sended = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.review-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  &__cross {
    display: block;
    width: 16px;
    height: 1rem;
    position: absolute;
    z-index: 2002;
    top: 20px;
    right: 20px;
    cursor: pointer;

    &::before {
      content: '';
      display: block;
      margin-left: 5px;
      width: 2px;
      height: 16px;
      background-color: black;
      transform: rotate(45deg);
    }

    &::after {
      content: '';
      display: block;
      margin-left: 5px;
      margin-top: -16px;
      width: 2px;
      height: 16px;
      background-color: black;
      transform: rotate(-45deg);
    }
  }

  &__container {
    padding: 168px 70px;
    padding-top: 168px;
    position: absolute;
    max-width: 39.5rem;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    width: 100%;
    height: auto;
    background-color: white;
    // border-radius: 18px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    text-align: center;

    @media (min-width: 700px) {
      max-width: none;
    }

    @media (min-width: 900px) {
      min-width: 824px;
    }
  }

  &__title {
    font-size: 2.25rem;
    font-weight: 600;
    line-height: 3.125rem;
    color: black;
  }

  &__desc {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.375;
    color: #9EA0A1;
    margin-bottom: 60px;
  }

  .name-input,
  .email-input,
  .review-input  {
    display: flex;
    flex-direction: column;
    color: #1A232B;
    min-width: 300px;
  }

  label {
    line-height: 1.25rem;
    font-size: 0.75rem;
    letter-spacing: 0.001rem;
    color: #6D6D6D;
  }

  @media (min-width: 612px) {
    &__cross {
      right: -20px;
      top: -11px;

      &::before {
        background-color: white;
      }

      &::after {
        background-color: white;
      }
    }

    &__container {
      height: max-content;
      border-radius: 16px;
      max-width: 480px;
    }
  }

  &__finish {
    padding: 3.938rem;

    @media (min-width: 680px) {
      min-width: 632px;
    }

    .review-modal__desc {
      margin: 0;
    }

    .review-modal__title {
      margin-bottom: 16px;
    }
  }
}

.checkout-finish-input {
  margin: 0;
  text-align: left;
}

</style>
