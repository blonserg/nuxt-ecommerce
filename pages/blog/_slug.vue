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
    <!-- <div class="container">
      <div class="breadcrumbs">
        <ul>
          <li>
            <a href="/">Main</a>
          </li>
        </ul>
      </div>
    </div> -->
    <Breadcrumbs class="breadcrumbs" />
    <div class="article">
      <div class="container">
        <div>
          <span
            v-for="list of article.article_parts"
            :key="list.position"
            class="article-text"
          >
            <h3 class="article-text__title">
              {{ list.title }}
            </h3>
            <div class="article-text__info">
              <p class="article-text__text" v-html="list.text"></p>
              <p v-html="list.brief"></p>
            </div>
          </span>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="group">
              <h3 class="group-ttl merch-ttl">
                Похожие статьи
              </h3>
            </div>
          </div>
          <div
            v-for="article in filteredItems"
            :key="article.id"
            class="col-md-4"
          >
            <div class="blog-item">
              <nuxt-link :to="article.slug">
                <div class="blog-item-image">
                  <img :src="'https://aminostore.com.ua/'+article.image" />
                </div>
                <div class="blog-item-badge">
                  {{ article.category }}
                </div>
                <a
                  class="blog-item-ttl"
                >
                  {{ article.title }}
                </a>
                <div class="blog-item-info">
                  {{ getFormattedDescription(article.announce) }}
                </div>
              </nuxt-link>
              <div class="blog-item-date">
                {{ formatDate(article.created) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/png/article-main.png'
import { mapGetters } from 'vuex'
import formatDate from './../../utils/formatDate'
import Breadcrumbs from '~/components/common/Breadcrumbs.vue'

export default {
  components: {
    Breadcrumbs
  },
  async asyncData ({ store, route }) {
    await store.dispatch('blog/fetchCategoryArticles', { category: '' })
    await store.dispatch('blog/fetchArticle', { slug: route.params.slug })
  },
  data () {
    return {
      backgroundUrl
    }
  },
  computed: {
    ...mapGetters({
      article: 'blog/article'
    }),
    filteredItems: function () {
      return this.article.related.slice(0, 3)
    }
  },
  mounted () {
    document.body.classList.add('sticky-header')
    console.log(this.article)
  },
  destroyed () {
    document.body.classList.remove('sticky-header')
  },
  methods: {
    getSlug () {
      return this.$route.params.slug
    },
    formatDate,
    getFormattedDescription (desc) {
      let formattedDesc = desc
      const maxLength = 96
      if (desc.length > maxLength) {
        formattedDesc = desc.slice(0, maxLength)
        formattedDesc += '...'
      }
      return formattedDesc
    }
  }
}
</script>

<style lang="scss">
.container {
  .breadcrumbs_2gBpg {
    display: none;
  }
}

.breadcrumbs {
  .breadcrumbs_2gBpg {
    display: block;
  }
}
</style>

<style lang="scss">
.article-text {
  display: flex;
  padding-top: 50px;
  flex-direction: column;

  &::before {
    display: none;
  }

  &__title {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 2.75rem;
    color: #0D1115;
    margin-bottom: 2.5rem;
  }

  &__info {
  }

  &__text {
    margin-bottom: 4rem;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;

    &__title {
      width: 36%;
    }

    &__info {
      width: 60%;
      padding-left: 2rem;
    }
  }
}
</style>
