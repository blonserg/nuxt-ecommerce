<template>
    <b-modal
      id="modal-buy-one-click"
      title="Купить в один клик"
      @hidden="resetModal"
      :hide-footer="true">
      <p class="my-4 text-center" v-if="isRequestedCall">Спасибо за заказ, ожидайте звонка от менеджера.</p>
      <b-form 
        type="POST"
        @submit.prevent="onSubmit"
        @reset="resetModal"
        v-if="!isRequestedCall">
        <p class="my-4">Менеджер перезвонит вам, узнает все детали и сам оформит заказ на ваше имя.</p>
        <div class="mb-3">
          <label for="phone">Телефон*</label>
          <VuePhoneNumberInput
              v-model="phone"
              show-code-on-list
              default-country-code="UA"
              :no-flags="true"
              :required="true"
              name="phoneNumber"
              :translations="{
                  countrySelectorLabel: 'Код страны',
                  countrySelectorError: 'Choisir un pays',
                  phoneNumberLabel: 'Номер телефона',
                  example: 'Пример :'
              }"
          />
        </div>
          <b-button
            variant="primary"
            type="submit">
            Отправить
          </b-button>
      </b-form>
        <template #modal-footer></template>
    </b-modal>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import {mapActions, mapGetters, mapMutations} from 'vuex';
export default {
  components: {
    VuePhoneNumberInput
  },
  props: {
  },
  data() {
    return {
      show: false,
      isRequestedCall: false,
    }
  },
  computed: {
    phone: {
        get () {
            return this.customerPhone()
        },
        set (value) {
            this.updateCustomerPhone(value)
        }
    },
  },
  methods: {
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
    resetModal() {
      this.updateCustomerPhone('');
      this.isRequestedCall = false
    },
    onSubmit() {
      this.isRequestedCall = true;
      const payload = {
        product: this.product(),
        customer: {
          phone: this.customerPhone().split(' ').join(''),
        }
      }
      this.requestOneClickOrder(payload);
    },
  }
}
</script>