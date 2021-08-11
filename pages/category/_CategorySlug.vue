<template>
  <div class="container">
    <div class="group">
      <div class="group-ttl">
        Акционные товары
      </div>
      <a href="/" class="link">
        Сортировать по
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.75 1.5L6.25 6L1.75 10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
    <div class="merch-hr merch-hr--plp"></div>
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <div class="filter">
          <div v-b-toggle.collapse-1 class="filter-header">
            Цена
            <img class="filter-header-ico" src="@/assets/svg/arrow-filter.svg" alt="">
          </div>
          <b-collapse visible id="collapse-1">
            <div class="filter-inner">
              <input id="range-1" v-model="value" type="range" min="100" max="5000" />
              <!-- <b-form-input id="range-1" v-model="value" type="range" min="100" max="5000" ></b-form-input> -->
              <div class="filter-range">
                <div class="filter-range-from">
                  <span>от</span> 100 <span>₴</span>
                </div>
                <div class="filter-range-to">
                  <span>до</span> {{ value }} <span>₴</span>
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
        <div class="filter">
          <div v-b-toggle.collapse-2 class="filter-header">
            Наличие
            <img class="filter-header-ico" src="@/assets/svg/arrow-filter.svg" alt="">
          </div>
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
          <div v-b-toggle.collapse-3 class="filter-header">
            Бренды
            <img class="filter-header-ico" src="@/assets/svg/arrow-filter.svg" alt="">
          </div>
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
        <div class="filter">
          <div v-b-toggle.collapse-4 class="filter-header">
            Виды протеина
            <img class="filter-header-ico" src="@/assets/svg/arrow-filter.svg" alt="">
          </div>
          <b-collapse visible id="collapse-4">
            <div class="filter-inner">
              <b-form-checkbox
                id="checkbox-6"
                name="checkbox-6"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Сывороточный
              </b-form-checkbox>
              <b-form-checkbox
                id="checkbox-7"
                name="checkbox-7"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Соевый
              </b-form-checkbox>
              <b-form-checkbox
                id="checkbox-8"
                name="checkbox-8"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Казеиновый
              </b-form-checkbox>
              <b-form-checkbox
                id="checkbox-9"
                name="checkbox-9"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Говяжий
              </b-form-checkbox>
              
              <b-collapse id="collapse-in">
                <b-form-checkbox
                id="checkbox-10"
                name="checkbox-10"
                value="accepted"
                unchecked-value="not_accepted"
                >
                  Молочный
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-11"
                  name="checkbox-11"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  Сывороточный
                </b-form-checkbox>
              </b-collapse>
              <div v-b-toggle.collapse-in class="filter-inner-header">
                Показать все
                <img class="filter-inner-ico" src="@/assets/svg/arrow-right.svg" alt="">
                </div>
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
