<template>
    <a class="link" :class="direction" :href="href">
        {{ text }}
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.75 1.5L6.25 6L1.75 10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </a>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        href: {
            type: String,
            default: '/'
        },
        direction: {
            type: String,
            default: 'right'
        }
    }
}
</script>