<template>
  <div class="container">
    <div class="group">
      <div class="group-ttl">
        Акционные товары
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
        <Filters />
      </div>
      <div class="col-md-9 col-sm-12">
        <b-row class="plp-gutters">
          <b-col cols="6" lg="4"
           v-for="product in category.products"
          :key="product.id">
            <ProductBrief :product="product" />
          </b-col>
        </b-row>
        <!-- <div class="row no-gutters">
          <div class="col-12 col-sm-6 col-lg-4"
          v-for="product in category.products"
          :key="product.id"
          >
            <ProductBrief :product="product" />
          </div>
        </div> -->
        <div class="page-pagination">
          <b-pagination v-model="currentPage" pills :total-rows="rows"></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductBrief from '~~/components/category/ProductBrief'
import LinkMore from '~~/components/common/LinkMore'
import Filters from '~~/components/common/Filters'

import { mapState } from 'vuex'
export default {
  components: {
    ProductBrief,
    LinkMore,
    Filters
  },
  async asyncData ({ app, params, route, error }) {
    try {
      await app.store.dispatch('getCurrentCategory', { route })
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Категория не найдена или сервер не доступен'
      })
    }
  },
  computed: {
    ...mapState({
      category: 'currentCategory'
    })
  },
  head () {
    return {
      title: this.category.cTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.category.cMetaDescription
        }
      ]
    }
  },
  data() {
    return {
      rows: 100,
      currentPage: 1
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 5000)
    })
  }
}
</script>
<style lang="scss" module>

</style>
