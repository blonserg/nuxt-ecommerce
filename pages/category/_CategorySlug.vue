<template>
  <div class="container">
    <div class="group">
      <div class="group-ttl">
        {{category.title}}
      </div>
      <div class="plp-actions d-flex justify-content-between w-sm-100">
        <b-button variant="primary d-md-none" v-b-toggle.filters>
          Фильтры
        </b-button>
        <b-dropdown id="dropdown" right  text="Сортировать по" class="group-link">
          <b-dropdown-item href="#">Цена</b-dropdown-item>
          <b-dropdown-item href="#">Название</b-dropdown-item>
          <b-dropdown-item href="#">Рейтинг</b-dropdown-item>
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
          <b-col cols="6" lg="4"
            v-for="product in products"
            :key="product.id">
            <ProductBrief :product="product" />
          </b-col>
        </b-row>
        <div class="page-pagination" v-if="pagination">
          <b-pagination
            pills
            align="center"
            @change="onPaginationChange"
            :value="$route.query.page || 1"
            :total-rows="pagination.rows"
            :per-page="pagination.perPage"></b-pagination>
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
      await store.dispatch('filters/fetchFilters', {route});
      await store.dispatch('category/getCategoryProducts', { route, page: 1 });
    } catch (err) {
      console.error(err);
      return error({
        statusCode: 404,
        message: 'Категория не найдена или сервер не доступен'
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 5000)
    })
  },
  computed: {
      ...mapState({
        category: 'currentCategory',
      }),
      ...mapGetters({
        category: 'category/category',
        products: 'category/categoryProducts',
        filterOptions: 'filters/filters',
        pagination: 'pagination',
      }),
  },
  methods: {
    onPaginationChange(page) {
      const query = this.$route.query
      this.$router.push({ query: {...query, page: page}})
      this.$store.dispatch('category/getCategoryProducts', { route: this.$route, ...query, page: page });
    },
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
  },
}
</script>
