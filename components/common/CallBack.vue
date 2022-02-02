<template>
  <div :class="`${classes}`">
    <b-form-input
      v-model="phone"
      v-mask="'+38 (###) ###-##-##'"
      placeholder="Номер телефона"
      :state="isPhoneValid"
      @input="validatePhone"
    />
    <b-button
      variant="primary"
      class="btn-call-me"
      @click="onClick"
    >
      Позвоните мне
    </b-button>
    <b-modal
      :ref="modalId"
      hide-footer
      title="Заявка успешно отправлена"
    >
      <div class="d-block">
        <p>Ожидайте звонка от менеджера.</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    classes: {
      type: String
    }
  },
  data () {
    return {
      phone: '',
      isPhoneValid: null,
      modalId: `modal-${this.$props.classes.split(' ')[0]}`
    }
  },
  computed: {
  },
  methods: {
    validatePhone () {
      this.isPhoneValid = this.phone.length === 19
    },
    onClick () {
      if (!this.isPhoneValid) { return this.isPhoneValid = false }
      const payload = {
        phone: `+${this.phone.replace(/\D+/g, '')}`
      }
      this.isPhoneValid = null
      this.customerCallback(payload)
    },
    showModal () {
      this.$refs[this.modalId].show()
    },
    customerCallback (payload) {
      const REQUEST_CALLBACK_URL = 'https://aminostore.com.ua/api/callback/'

      this.$axios({
        method: 'POST',
        url: REQUEST_CALLBACK_URL,
        data: payload
      })
        .then((response) => {
          this.phone = ''
          this.showModal()
        })
        .catch((err) => {
          throw new Error(err)
        })
    }
  }
}
</script>
