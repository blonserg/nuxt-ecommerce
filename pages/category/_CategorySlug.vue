<template>
  <div class="container">
    <div class="group">
      <div class="group-ttl">
        {{ category.title ? category.title : 'Акционные товары' }}
      </div>
      <div class="plp-actions d-flex justify-content-between w-sm-100">
        <b-button v-b-toggle.filters variant="primary d-md-none">
          Фильтры
        </b-button>
        <b-dropdown
          id="dropdown"
          right
          text="Сортировать по"
          class="group-link"
        >
          <b-dropdown-item @click="applyParams('ordering', 'price')">
            Цена
          </b-dropdown-item>
          <b-dropdown-item @click="applyParams('ordering', 'title')">
            Название
          </b-dropdown-item>
          <b-dropdown-item @click="applyParams('ordering', 'rating')">
            Рейтинг
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="merch-hr merch-hr--plp"></div>
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <Filters :filters="filterOptions" />
      </div>
      <div class="col-md-9 col-sm-12">
        <b-row class="plp-gutters">
          <b-col
            v-for="product in products"
            :key="product.id"
            cols="6"
            lg="4"
          >
            <ProductBrief :product="product" class="products" />
          </b-col>
        </b-row>
        <div v-if="pagination" class="page-pagination">
          <b-pagination
            pills
            align="center"
            :value="$route.query.page || 1"
            :total-rows="pagination.rows"
            :per-page="pagination.perPage"
            first-class="dis"
            last-class="dis"
            prev-class="pag-link"
            next-class="pag-link"
            @change="onPaginationChange"
          />
          <!-- <b-pagination
            :value="$route.query.page || 1"
            :total-rows="pagination.rows"
            :per-page="pagination.perPage"
            first-class="dis"
            last-class="dis"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
            @change="onPaginationChange"
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductBrief from '~~/components/category/ProductBrief'
import LinkMore from '~~/components/common/LinkMore'
import Filters from '~~/components/common/Filters'

import { mapState, mapGetters } from 'vuex'
export default {
  components: {
    ProductBrief,
    LinkMore,
    Filters
  },
  async asyncData ({ store, params, route, error }) {
    try {
      await store.dispatch('filters/fetchFilters', { route })
      await store.dispatch('category/getCategoryProducts', { category: route.params.CategorySlug })
      await store.dispatch('filters/fetchProductsWithFilters', { category: store.state.category.currentCategory.id, query: route.query })
    } catch (err) {
      console.error(err)
      return error({
        statusCode: 404,
        message: 'Категория не найдена или сервер не доступен'
      })
    }
  },
  computed: {
    ...mapState({
      category: 'currentCategory'
    }),
    ...mapGetters({
      category: 'category/category',
      products: 'category/categoryProducts',
      filterOptions: 'filters/filters',
      pagination: 'pagination'
    })
  },
  watch: {
    $route: function () {
      this.$store.dispatch('filters/fetchProductsWithFilters', { category: this.$store.state.category.currentCategory.id, query: this.$route.query })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 5000)
    })
  },
  methods: {
    applyParams (type, value) {
      const query = this.$route.query
      this.$router.push({ query: { ...query, [type]: value } })
    },
    onPaginationChange (page) {
      const query = this.$route.query
      this.$router.push({ query: { ...query, page: page } })
    }
  },
  head () {
    return {
      title: this.category.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.category.cMetaDescription
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
