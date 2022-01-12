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
            <b-form-input id="name" placeholder="Ваше имя" />
          </div>
        </div>
        <div class="col-sm-4 col-lg-3 col-xl-3">
          <div class="checkout-input">
            <label for="surname">Фамилия*</label>
            <b-form-input id="surname" placeholder="Ваше фамилия" />
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
        <Checkbox title="Перезвонить для подтверждения заказа" />
      </div>
      <div class="checkout-btns">
        <b-button variant="primary">
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

export default {
  components: {
    Checkbox,
    VuePhoneNumberInput
  },
  data () {
    return {
      selectfield: null,
      selectcity: null,
      selectpost: null,
      phoneNumber: null,
      selectField: {
        selected: '1',
        options: [
          { text: 'Выберите область', value: '1' },
          { text: 'Option A', value: 'a' },
          { text: 'Option B', value: 'b' },
          { text: 'Option C', value: 'c' }
        ]
      },
      selectCity: {
        selected: '1',
        options: [
          { text: 'Выберите город', value: '1' },
          { text: 'Option A', value: 'a' },
          { text: 'Option B', value: 'b' },
          { text: 'Option C', value: 'c' }
        ]
      },
      selectPost: {
        selected: '1',
        options: [
          { text: 'Выберите почту', value: '1' },
          { text: 'Option A', value: 'a' },
          { text: 'Option B', value: 'b' },
          { text: 'Option C', value: 'c' }
        ]
      }
    }
  }
}
</script>
