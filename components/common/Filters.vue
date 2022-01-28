<template>
  <b-collapse id="filters" :visible="toggleExpandingFiltersOnResize">
    <b-form
      id="filters-form"
      ref="filters-form"
      @submit.prevent="submitHandler"
    >
      <div v-for="(filter, idx) in filters" :class="`filter ${filter.slug}-${idx}`">
        <div v-b-toggle="`collapse-${idx}`" class="filter-header">
          {{ filter.title }}
          <img
            class="filter-header-ico"
            src="@/assets/svg/arrow-filter.svg"
            alt=""
          />
        </div>
        <b-collapse :id="`collapse-${idx}`" :visible="false">
          <!-- BEGIN Filter PRICE RANGE -->
          <div v-if="filter.priceRange" class="filter-inner">
            <input
              type="hidden"
              name="price-range[max_price]"
              :value="formData['price-range'][0]"
            />
            <input
              type="hidden"
              name="price-range[min_price]"
              :value="formData['price-range'][1]"
            />
            <Slider
              :value="formData['price-range']"
              :min="filter.priceRange.minValue"
              :max="filter.priceRange.maxValue"
              :tooltips="false"
              @change="updateSlider(filter.priceRange.currentRange, idx, $event)"
            />
            <div class="filter-range">
              <div class="filter-range-from">
                <span>от</span> {{ formData['price-range'][0] }} <span>{{ filter.priceRange.format.prefix }}</span>
              </div>
              <div class="filter-range-to">
                <span>до</span> {{ formData['price-range'][1] }} <span>{{ filter.priceRange.format.prefix }}</span>
              </div>
            </div>
          </div>
          <!-- END Filter PRICE RANGE -->
          <!-- BEGIN Filter CHECKBOX -->
          <!-- checkboxes collapsed -->
          <div v-if="filter.results && filter.results.length > 0 && filter.results.length <= amountExpandedFilterValues" class="filter-inner">
            <template v-for="(option, index) in filter.results">
              <label :key="option.id" class="control control-checkbox">
                <span class="control-checkbox-txt">{{ option.title }}</span>
                <input
                  v-model="formData[filter.slug]"
                  type="checkbox"
                  :checked="false"
                  :value="option.slug"
                  @change="changeHandler(option)"
                />
                <div class="control_indicator"></div>
              </label>
            </template>
          </div>
          <!-- checkboxes expanded -->
          <div v-if="filter.results && filter.results.length > amountExpandedFilterValues" class="filter-inner">
            <label
              v-for="(option, index) in filter.results.slice(0, amountExpandedFilterValues+1)"
              :key="option.id"
              class="control control-checkbox"
            >
              <span class="control-checkbox-txt">{{ option.title }}</span>
              <input
                v-model="formData[filter.slug]"
                type="checkbox"
                :checked="false"
                :value="option.slug"
                @change="changeHandler"
              />
              <div class="control_indicator"></div>
            </label>
            <b-collapse :id="`collapse-child-${idx}`">
              <label
                v-for="(option, index) in filter.results.slice(amountExpandedFilterValues+1)"
                :key="option.id"
                class="control control-checkbox"
              >
                <span class="control-checkbox-txt">{{ option.title }}</span>
                <input
                  v-model="formData[filter.slug]"
                  type="checkbox"
                  :checked="false"
                  :value="option.slug"
                  @change="changeHandler"
                />
                <div class="control_indicator"></div>
              </label>
            </b-collapse>
            <div v-b-toggle="`collapse-child-${idx}`" class="filter-inner-header">
              Показать все
              <img
                class="filter-inner-ico"
                src="@/assets/svg/arrow-right.svg"
                alt=""
              />
            </div>
          </div>
        </b-collapse>
      </div>
      <button
        ref="submitButton"
        type="submit"
        style="display: none"
      >
        Foo
      </button>
    </b-form>
  </b-collapse>
</template>

<script>
import Slider from '@vueform/slider/dist/slider.vue2'
import debounce from 'lodash.debounce'
import prepareFilterQueries from '~/utils/prepareFilterQueries'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    Slider
  },
  props: {
    filters: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isVisibleFilters: false,
      amountExpandedFilterValues: 3,
      formData: { ...this.prepareInitialFormData(this.filters) }
    }
  },
  computed: {
    ...mapState({
      category: 'category'
    }),
    toggleExpandingFiltersOnResize () {
      // Filters is visible by default on tablets and desktops and collapsed on mobiles by default
      return this.isVisibleFilters = this.$breakpoints.lMd
    }
  },
  methods: {
    ...mapMutations({
      updatePriceRange: 'filters/UPDATE_PRICE_RANGE_VALUE'
    }),
    updateSlider (value, idx, event) {
      this.formData['price-range'] = event
      this.updatePriceRange({ value: event, filterIdx: idx })
      this.$router.push({ query: { ...this.$route.query, min_price: event[0], max_price: event[1] } })
      this.$refs.submitButton.click()
    },
    prepareInitialFormData (filters) {
      const formData = {}
      filters.forEach((filter) => {
        if (!formData[filter.slug]) {
          formData[filter.slug] = []
        };
      })
      formData['price-range'] = [150, 1500]
      // eslint-disable-next-line no-loops/no-loops
      for (const [key, value] of Object.entries(this.$route.query)) {
        if (key === 'min_price') {
          formData['price-range'][0] = value
        } else if (key === 'max_price') {
          formData['price-range'][1] = value
        } else {
          formData[key] = value.split(',')
        }
      }

      return formData
    },
    submitHandler: debounce(function submitHandler (event) {
      event.preventDefault()
      // const query = prepareFilterQueries(this.formData)
      // todo: implement adding query params to url
      // this.$router.push(query);
      // this.$store.dispatch('filters/fetchProductsWithFilters', { query, page: 1, currentCategory: this.category.currentCategory.id })
    }, 1000),
    changeHandler (event) {
      const forms = {}
      // eslint-disable-next-line no-loops/no-loops
      for (const [key, value] of Object.entries(this.formData)) {
        if (value.length) {
          if (key === 'price-range') {
            forms.min_price = value[0]
            forms.max_price = value[1]
          } else {
          // eslint-disable-next-line security/detect-object-injection
            forms[key] = value.join()
          }
        }
      }
      this.$router.push({ query: { ...forms } })
      this.$refs.submitButton.click()
    }
  }
}
</script>
