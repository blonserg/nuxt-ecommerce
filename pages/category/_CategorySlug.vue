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
            <div class="filter-inner">
              <b-form-input id="range-1" v-model="value" type="range" min="100" max="5000" ></b-form-input>
              <div class="filter-range">
                <div class="filter-range-from">
                  от 100$
                </div>
                <div class="filter-range-to">
                  до {{ value }}$
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="filter">
          <div v-b-toggle.collapse-2 class="filter-header">Наличие</div>
          <b-collapse visible id="collapse-2">
            <div class="filter-inner">
              <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Есть в наличие
              </b-form-checkbox>
            </div>
          </b-collapse>
        </div>
        <div class="filter">
          <div v-b-toggle.collapse-3 class="filter-header">Бренды</div>
          <b-collapse visible id="collapse-3">
            <div class="filter-inner">
              <b-form-checkbox
                id="checkbox-2"
                name="checkbox-2"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Biotech
              </b-form-checkbox>
              <b-form-checkbox
                id="checkbox-3"
                name="checkbox-3"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Biotech
              </b-form-checkbox>
              <b-form-checkbox
                id="checkbox-4"
                name="checkbox-4"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Biotech
              </b-form-checkbox>
              <b-form-checkbox
                id="checkbox-5"
                name="checkbox-5"
                value="accepted"
                unchecked-value="not_accepted"
              >
                BiotechUSA
              </b-form-checkbox>
            </div>
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
        <div class="product-pagination">
          <b-pagination v-model="currentPage" pills :total-rows="rows"></b-pagination>
        </div>
      </div>
    </div>
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
  },
  data() {
    return {
      value: '100',
      rows: 100,
      currentPage: 1
    }
  }
}
</script>
<style lang="scss" module>

</style>
