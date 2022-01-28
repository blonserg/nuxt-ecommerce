<template>
  <div
    v-show="opened"
    class="review-modal"
  >
    <div v-if="!sended" class="review-modal__container">
      <div class="review-modal__cross" @click="opened = false"></div>
      <h3 class="review-modal__title">
        Добавить отзыв
      </h3>
      <p class="review-modal__desc">
        Благодарим Вас за отзыв. Мнение наших клиентов для нас
        очень важно.
      </p>
      <b-form-rating
        v-model="rating"
        variant="warning"
        class="review-modal__rating mb-3"
        size="lg"
        :no-border="true"
        inline
      />
      <div class="name-input mb-3">
        <label for="name">Имя*</label>
        <b-form-input
          id="name"
          v-model="name"
          placeholder="Ваше имя"
        />
      </div>
      <div class="email-input mb-3">
        <label for="email">Email*</label>
        <b-form-input
          id="email"
          v-model="email"
          placeholder="Ваша почта"
        />
      </div>
      <div class="review-input mb-3">
        <label for="review">Комментарий</label>
        <b-form-textarea
          id="review"
          v-model="review"
          placeholder="Введите текст отзыва"
          rows="3"
          max-rows="8"
          no-resize
        />
      </div>
      <b-button
        variant="primary"
        :disabled="!isFullForm"
        size="lg"
        @click="sendReview"
      >
        Отправить
      </b-button>
    </div>
    <div
      v-else
      class="review-modal__container"
      @click="opened = false"
    >
      <div class="review-modal__cross"></div>
      <h3 class="review-modal__title">
        Спасибо, Ваш отзыв
        принят!
      </h3>
    </div>
  </div>
</template>

<script>
import { URL } from '@/utils/constants'

export default {
  name: 'ReviewModal',
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    productId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      rating: 0,
      name: '',
      email: '',
      review: '',
      sended: false
    }
  },
  computed: {
    isFullForm () {
      const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      return this.rating !== 0 &&
      this.name &&
      emailReg.test(this.email) &&
      this.review
    }
  },
  methods: {
    async sendReview () {
      if (this.isFullForm) {
        const { data, status } = await this.$axios.post(`${URL}api/review/`, {
          email: this.email,
          first_name: this.name,
          text: this.review,
          product: this.productId,
          rating: this.rating
        })

        if (status && status === 201) {
          this.sended = !this.sended
        }
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
    padding: 2.938rem;
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
    align-self: flex-start;
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
      width: 60%;
      height: max-content;
      border-radius: 16px;
    }
  }
}
</style>
