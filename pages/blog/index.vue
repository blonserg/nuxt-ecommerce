<template>
  <div>
    <div class="container">
      <div class="group">
        <div class="group-left">
          <div class="group-ttl">
            {{ pageTitle }}
          </div>
        </div>
        <div class="group-right">
          <div class="blog-cat">
            <div class="blog-cat-ttl">
              Категории:
            </div>
            <button
              v-for="category in categories"
              :key="category.id"
              class="blog-cat-item"
              :class="$route.query.category === category.slug ? 'active' : ''"
              type="button"
              @click="categoryClickHandler($event, category.slug)"
            >
              {{ category.title }}
            </button>
          </div>
        </div>
      </div>
      <div class="merch-hr merch-hr--plp"></div>
      <div class="row">
        <div
          v-for="article in categoryArticles"
          :key="article.id"
          class="col-md-4"
        >
          <div class="blog-item">
            <div class="blog-item-image">
              <img :src="article.image" />
            </div>
            <div class="blog-item-badge">
              {{ article.category }}
            </div>
            <a
              :href="'blog/'+article.slug"
              class="blog-item-ttl"
              @click.prevent="openArticle(article.slug)"
            >
              {{ article.title }}
            </a>
            <div class="blog-item-info">
              {{ getFormattedDescription(article.announce) }}
            </div>
            <div class="blog-item-date">
              {{ formatDate(article.created) }}
            </div>
          </div>
        </div>
      </div>
      <div v-if="pagination.rows" class="page-pagination">
        <b-pagination
          :value="$route.query.page || 1"
          align="center"
          :total-rows="pagination.rows"
          :per-page="pagination.perPage"
          first-class="dis"
          last-class="dis"
          @change="onPaginationChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import formatDate from '../../utils/formatDate'

export default {
  components: {
  },
  async asyncData ({ store, route }) {
    const params = {
      category: route.query.category ? route.query.category : null,
      page: route.query.page ? route.query.page : null
    }

    await store.dispatch('blog/fetchCategories')
    await store.dispatch('blog/fetchCategoryArticles', params)
  },
  data: () => ({
    pageTitle: 'Статьи'
  }),
  computed: {
    ...mapGetters({
      categories: 'blog/categories',
      categoryArticles: 'blog/categoryArticles',
      pagination: 'pagination'
    })
  },
  methods: {
    ...mapMutations({
      updateCurrentPage: 'UPDATE_CURRENT_PAGE'
    }),
    openArticle (slug) {
      this.$router.push(`blog/${slug}`)
    },
    categoryClickHandler (event, slug) {
      this.$router.push({ query: { category: slug } })

      const params = {
        category: slug,
        page: 1
      }
      this.$store.dispatch('blog/fetchCategoryArticles', params)
    },
    getFormattedDescription (desc) {
      let formattedDesc = desc
      const maxLength = 96
      if (desc.length > maxLength) {
        formattedDesc = desc.slice(0, maxLength)
        formattedDesc += '...'
      }
      return formattedDesc
    },
    onPaginationChange (page) {
      const query = this.$route.query
      this.$router.push({ query: { ...query, page: page } })

      this.$store.dispatch('blog/fetchCategoryArticles', { ...query, page: page })
    },
    formatDate
  }
}
</script>
