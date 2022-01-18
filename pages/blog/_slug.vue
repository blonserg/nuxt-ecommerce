<template>
  <div>
    <div class="hero-main hero-main--article" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="container">
        <div class="row">
          <div class="col-sm-9 hero-wrap">
            <div class="hero-inner">
              <div class="hero-badge">
                {{ article.category }}
              </div>
              <h1 class="hero-head">
                {{ article.title }}
              </h1>
              <p class="hero-date">
                {{ formatDate(article.created) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="breadcrumbs">
        <ul>
          <li>
            <a href="/">Main</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="article">
      <div class="container">
        {{ article.text }}
      </div>
    </div>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/png/article-main.png'
import { mapGetters } from 'vuex'
import formatDate from './../../utils/formatDate'

export default {
  async asyncData ({ store, route }) {
    await store.dispatch('blog/fetchArticle', { slug: route.params.slug })
  },
  data () {
    return { backgroundUrl }
  },
  computed: {
    ...mapGetters({
      article: 'blog/article'
    })
  },
  mounted () {
    document.body.classList.add('sticky-header')
  },
  destroyed () {
    document.body.classList.remove('sticky-header')
  },
  methods: {
    getSlug () {
      return this.$route.params.slug
    },
    formatDate
  }
}
</script>
