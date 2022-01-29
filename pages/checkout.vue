<template>
  <div>
    <div class="container">
      <div class="breadcrumbs">
        <ul>
          <li>
            <a href="/">Main</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="group">
        <div class="group-ttl">
          Оформить заказ
        </div>
      </div>
      <div class="merch-hr"></div>
      <div class="row checkout-row">
        <div class="col-sm-4 col-lg-2 col-xl-3">
          <div class="checkout-ttl">
            Персональные данные
          </div>
        </div>
        <div class="col-sm-4 col-lg-3 col-xl-3">
          <div class="checkout-input">
            <label for="name">Имя*</label>
            <b-form-input
              id="name"
              v-model="name"
              placeholder="Ваше имя"
            />
          </div>
        </div>
        <div class="col-sm-4 col-lg-3 col-xl-3">
          <div class="checkout-input">
            <label for="surname">Фамилия*</label>
            <b-form-input
              id="surname"
              v-model="surname"
              placeholder="Ваше фамилия"
            />
          </div>
        </div>
        <div class="offset-sm-4 col-sm-8 offset-lg-0 col-lg-4 col-xl-3">
          <div class="checkout-input checkout-input--phone">
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
            <!-- <b-form-input class="checkout-input=code" id="codephone">+380</b-form-input>
                        <b-form-input id="phone"></b-form-input> -->
          </div>
        </div>
      </div>
      <div class="merch-hr"></div>
      <div class="row checkout-row">
        <div class="col-sm-4 col-lg-2 col-xl-3">
          <div class="checkout-ttl">
            Условия Доставки
          </div>
        </div>
        <div class="col-sm-4 col-lg-3 col-xl-3">
          <div class="checkout-select">
            <label for="select-field">Область*</label>
            <b-form-select
              id="selectField"
              v-model="selectField.selected"
              :options="selectField.options"
            />
          </div>
        </div>
        <div class="col-sm-4 col-lg-3 col-xl-3">
          <div class="checkout-select">
            <label for="select-city">Город*</label>
            <b-form-select
              id="selectCity"
              v-model="selectCity.selected"
              :options="selectCity.options"
            />
          </div>
        </div>
        <div class="offset-sm-4 col-sm-8 offset-lg-0 col-lg-4 col-xl-3">
          <div class="checkout-select">
            <label for="select-post">Новая почта*</label>
            <b-form-select
              id="selectPost"
              v-model="selectPost.selected"
              :options="selectPost.options"
            />
          </div>
        </div>
      </div>
      <div class="merch-hr"></div>
      <div class="checkout-checkbox">
        <Checkbox v-model="isCallMe" title="Перезвонить для подтверждения заказа" />
      </div>
      <div class="checkout-btns">
        <b-button
          variant="primary"
          :disabled="!isFullForm"
          @click="createOrder"
        >
          Оформить заказ
        </b-button>
        <b-button variant="outline-primary" @click="$router.push('/checkout-short')">
          Заказать в один клик
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from '~~/components/common/Checkbox'
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import { URL } from '@/utils/constants'
import { mapGetters } from 'vuex'

export default {
  name: 'Checkout',
  components: {
    Checkbox,
    VuePhoneNumberInput
  },
  data () {
    return {
      phoneNumber: null,
      isValid: false,
      name: '',
      surname: '',
      isCallMe: true,
      selectField: {
        selected: '1',
        options: [
          { text: 'Выберите область', value: '1' },
          { text: 'Option B', value: '2' },
          { text: 'Option C', value: '3' }
        ]
      },
      selectCity: {
        selected: '1',
        options: [
          { text: 'Выберите город', value: '1' },
          { text: 'Option B', value: '2' },
          { text: 'Option C', value: '3' }
        ]
      },
      selectPost: {
        selected: '1',
        options: [
          { text: 'Выберите отделение', value: '1' },
          { text: 33, value: '2' },
          { text: 6, value: '3' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      promocode: 'cart/promocode',
      cartProducts: 'cart/cartProducts'
    }),
    isFullForm () {
      return this.isValid &&
      this.selectField.selected !== '1' &&
      this.selectCity.selected !== '1' &&
      this.selectPost.selected !== '1' &&
      this.name !== '' &&
      this.surname !== ''
    },
    field () {
      return this.selectField.options.find(option => option.value === this.selectField.selected)
    },
    city () {
      return this.selectCity.options.find(option => option.value === this.selectCity.selected)
    },
    post () {
      return this.selectPost.options.find(option => option.value === this.selectPost.selected)
    }
  },
  methods: {
    changeNumber (e) {
      this.isValid = e.isValid
    },
    async createOrder () {
      if (this.isFullForm) {
        try {
          const items = this.cartProducts.map(el => {
            return {
              product: el.quantity,
              qty: el.id
            }
          })

          const { status } = await this.$axios.post(`${URL}api/order/`, {
            phone: this.phoneNumber,
            first_name: this.name,
            second_name: this.surname,
            region: this.field.text,
            city: this.city.text,
            promocode: this.promocode,
            nova_poshta_office: this.post.text,
            call_me: this.isCallMe,
            items: items
          })

          if (status && status === 201) {
            await this.$router.push('/checkout-order/long')
          }
        } catch (err) {
          console.error('ORDER_ERROR_IS :', err)
        }
      }
    }
  }
}
</script>
