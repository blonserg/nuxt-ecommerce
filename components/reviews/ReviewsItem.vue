<template>
    <div>
        <div class="review-header">
            <div class="row no-gutters">
                <div class="col">
                    <div class="review-name">{{review.name}}</div>
                    <b-form-rating variant="warning" :no-border="true" size="sm" class="rating-block" inline v-model="review.rating"></b-form-rating>
                </div>
                <div class="col d-flex justify-content-end">
                    <div class="review-date">{{review.date}}</div>
                </div>
            </div>
        </div>
        <div class="review-content">
            {{review.message}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        review: {
            type: Object,
            required: true
        }
    }
}
</script>