<template>
  <div class="container">
    <div class="group">
      <div class="group-ttl">
        Акционные товары
      </div>
      <b-dropdown id="dropdown" right  text="Сортировать по" class="group-link">
        <b-dropdown-item href="#">Цена</b-dropdown-item>
        <b-dropdown-item href="#">Название</b-dropdown-item>
        <b-dropdown-item href="#">Рейтинг</b-dropdown-item>
      </b-dropdown>
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
              <Slider v-model="priceRange.currentRange" :min="priceRange.minValue" :max="priceRange.maxValue" :tooltips="false" />
              <div class="filter-range">
                <div class="filter-range-from">
                  <span>от</span> {{ priceRange.currentRange[0] }} <span>{{ priceRange.format.prefix }}</span>
                </div>
                <div class="filter-range-to">
                  <span>до</span> {{ priceRange.currentRange[1] }} <span>{{ priceRange.format.prefix }}</span>
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
              <Checkbox title="Есть в наличие" />
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
              <Checkbox title="Biotech" />
              <Checkbox title="Biotech" />
              <Checkbox title="Biotech" />
              <Checkbox title="BiotechUSA" />
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
              <Checkbox title="Сывороточный" />
              <Checkbox title="Соевый" />
              <Checkbox title="Казеиновый" />
              <Checkbox title="Сывороточный" />
              <Checkbox title="Говяжий" />          
              <b-collapse id="collapse-in">
                <Checkbox title="Молочный" />  
                <Checkbox title="Сывороточный" />  
              </b-collapse>
              <div v-b-toggle.collapse-in class="filter-inner-header">
                Показать все
                <img class="filter-inner-ico" src="@/assets/svg/arrow-right.svg" alt="">
                </div>
            </div>
          </b-collapse>
        </div>
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
import Slider from '@vueform/slider/dist/slider.vue2'
import ProductBrief from '~~/components/category/ProductBrief'
import Checkbox from '~~/components/common/Checkbox'
import LinkMore from '~~/components/common/LinkMore'
import { mapState } from 'vuex'
export default {
  components: {
    ProductBrief,
    Checkbox,
    LinkMore,
    Slider
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
      priceRange: {
        currentRange: [350, 1500],
        maxValue: 3000,
        minValue: 100,
        format: {
          prefix: '₴',
          decimals: 2
        }
      },
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
