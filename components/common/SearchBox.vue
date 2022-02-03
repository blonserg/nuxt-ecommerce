<template>
  <div
    v-click-outside="hideSearchBox"
    class="search-block"
    :class="isOpened && 'expanded'"
    @click="onClickSarchBox"
  >
    <button
      type="button"
      class="d-lg-none search-block-toggler"
      :class="isOpened && 'd-none'"
      :aria-expanded="isOpened.toString()"
    >
      <svg
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5.77686 12.1943C6.94141 12.1943 8.03271 11.8428 8.94092 11.2422L12.1489 14.4575C12.3613 14.6626 12.6323 14.7651 12.9253 14.7651C13.5332 14.7651 13.98 14.2891 13.98 13.6885C13.98 13.4102 13.8848 13.1392 13.6797 12.9341L10.4937 9.7334C11.1528 8.7959 11.541 7.66064 11.541 6.43018C11.541 3.25879 8.94824 0.666016 5.77686 0.666016C2.61279 0.666016 0.0126953 3.25879 0.0126953 6.43018C0.0126953 9.60156 2.60547 12.1943 5.77686 12.1943ZM5.77686 10.6562C3.45508 10.6562 1.55078 8.75195 1.55078 6.43018C1.55078 4.1084 3.45508 2.2041 5.77686 2.2041C8.09863 2.2041 10.0029 4.1084 10.0029 6.43018C10.0029 8.75195 8.09863 10.6562 5.77686 10.6562Z" fill="#E0ECFD" />
      </svg>
    </button>
    <VueTypeaheadBootstrap
      ref="typeaheadBootstrap"
      v-model="query"
      class="search"
      :data="autocompleteProducts"
      :serializer="item => item.title"
      placeholder="Поиск"
      highlight-class="special-highlight-class"
      @hit="selectProduct"
      @input="searchProducts"
    >
      <template slot="suggestion" slot-scope="{ data, htmlText }">
        <div class="d-flex align-items-center">
          <div class="search-item-image">
            <img
              class="rounded-circle"
              :src="`${url}${data.image}`"
              style="width: 20px; height: auto;"
            />
          </div>
          <span class="search-item-title" v-html="htmlText"></span>
          <span class="navigation-item-arrow">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 1.5L6.25 6L1.75 10.5"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </template>
    </VueTypeaheadBootstrap>
    <div v-if="isOpened" class="isOpenedNavigation"></div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap'
import { debounce } from 'lodash'
import { URL } from '@/utils/constants'

export default {
  components: {
    VueTypeaheadBootstrap
  },
  directives: {
    ClickOutside
  },
  props: {
    isOpened: {
      type: Boolean
    }
  },
  data () {
    return {
      isFocusedSearch: false,
      query: '',
      minChars: 3,
      selectedProduct: null,
      autocompleteProducts: [],
      url: URL
    }
  },
  watch: {
    isOpened: function (newVal) {
      document.body.style.overflow = newVal ? 'hidden' : 'visible'
    }
  },
  methods: {

    hideSearchBox () {
      this.query = ''
      this.$emit('onHideSearchBox')
    },
    onClickSarchBox (e) {
      this.$emit('onToggleSearchBox', e)
    },
    selectProduct (e) {
      this.$router.push(`/product/${e.slug}`)
      this.query = ''
    },
    searchProducts: debounce(function () {
      const isValidQuery = this.query.replace(/\s/g, '').length >= this.minChars
      // todo: move this logic from UI part and refactor with real data
      if (isValidQuery) {
        fetch(`${this.url}api/search/?q=${this.query}`)
          .then(response => {
            return response.json()
          })
          .then(data => {
            this.autocompleteProducts = data
          })
      }
    }, 500)
  }
}
</script>

<style scoped>
.isOpenedNavigation{
  position: fixed;
  top: 80px;
  left: 0px;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  z-index: 50;
}
</style>
