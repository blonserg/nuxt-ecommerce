<template>
    <ul class="reviews">
        <li v-for="review in reviews" :key="review.id" class="review-item">
            <ReviewsItem :review="review"/>
        </li>
    </ul>
</template>

<script>
import ReviewsItem from '~~/components/reviews/ReviewsItem'


export default {
    components: {
        ReviewsItem
    },
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
}
</script>