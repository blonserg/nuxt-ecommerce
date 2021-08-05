<template>
  <div class="container">
    <div class="group">
        <div class="group-ttl">
          Акционные товары
        </div>
        <div class="group-href">
          Сортировать по
        </div>
      </div>
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <div class="filter">
          <div v-b-toggle.collapse-1 class="filter-header">Цена</div>
          <b-collapse visible id="collapse-1">
            Цена
          </b-collapse>
        </div>
        <div class="filter">
          <div v-b-toggle.collapse-2 class="filter-header">Наличие</div>
          <b-collapse visible id="collapse-2">
            <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
              Есть в наличие
            </b-form-checkbox>
          </b-collapse>
        </div>
      </div>
      <div class="col-md-9 col-sm-12 product-list">
        <div
          v-for="product in category.products"
          :key="product.id"
        >
          <ProductBrief :product="product" />
        </div>
      </div>
    </div>
    <p>{{ category.cDesc }}</p>
  </div>
</template>

<script>
import ProductBrief from '~~/components/category/ProductBrief'
import { mapState } from 'vuex'
export default {
  components: {
    ProductBrief
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
  }
}
</script>
<style lang="scss" module>

</style>
