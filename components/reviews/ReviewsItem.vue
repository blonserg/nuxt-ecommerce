<template>
    <div>
        <div class="review-header">
            <div class="row no-gutters">
                <div class="col">
                    <div class="review-name">{{review.email}}</div>
                    <b-form-rating variant="warning" :no-border="true" size="sm" class="rating-block" inline v-model="review.rating" readonly></b-form-rating>
                </div>
                <div class="col d-flex justify-content-end">
                    <div class="review-date">{{formatDate(review.created)}}</div>
                </div>
            </div>
        </div>
        <div class="review-content">
            {{review.text || review.title}}
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
    methods: {
        formatDate
    }
}
</script>