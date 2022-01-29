<template>
  <div>
    <div class="review-header">
      <div class="row no-gutters">
        <div class="col">
          <div class="review-name">
            {{ review.email }}
          </div>
          <b-form-rating
            v-model="rating"
            variant="warning"
            :no-border="true"
            size="sm"
            class="rating-block"
            inline
            readonly
          />
        </div>
        <div class="col d-flex justify-content-end">
          <div class="review-date">
            {{ formatDate(review.created) }}
          </div>
        </div>
      </div>
    </div>
    <div class="review-content">
      {{ review.text || review.title }}
    </div>
  </div>
</template>

<script>
import formatDate from '~/utils/formatDate'
export default {
  props: {
    review: {
      type: Object,
      required: true
    }
  },
  computed: {
    rating () {
      return +this.review.rating / 100
    }
  },
  methods: {
    formatDate
  }
}
</script>
