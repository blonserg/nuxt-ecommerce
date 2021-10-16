<template>
    <div :class="`${classes}`">
        <b-form-input
            placeholder="Номер телефона"
            v-model="phone">
        </b-form-input>
        <b-button
            variant="primary"
            class="btn-call-me"
            @click="onClick">
            Позвоните мне
        </b-button>
        <b-modal :ref="modalId" hide-footer title="Заявка успешно отправлена">
            <div class="d-block">
                <p>Ожидайте звонка от менеджера.</p>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        classes: {
            type: String,
        },
    },
  data() {
    return {
        phone: '',
        modalId: `modal-${this.$props.classes.split(' ')[0]}`, 
    }
  },
  methods: {
    onClick() {
      const payload = {
        phone: this.phone
      }
      this.customerCallback(payload);
    },
    showModal() {
        this.$refs[this.modalId].show();
    },
    customerCallback(payload) {
        const REQUEST_CALLBACK_URL = 'https://aminostore.com.ua/api/callback/';

        this.$axios({
        method: 'POST',
        url: REQUEST_CALLBACK_URL,
        data: payload
        })
        .then((response) => {
            this.phone = '';
            this.showModal();
        })
        .catch((err) => {
            throw new Error(err);
        });
    },
  },
}
</script>