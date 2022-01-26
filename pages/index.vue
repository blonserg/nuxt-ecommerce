<template>
  <div>
    <CategoriesList :protein="protein" :aminokisloty="aminokisloty" />
  </div>
</template>

<script>
import CategoriesList from '~~/components/common/CategoriesList'
import { mapState } from 'vuex'
export default {
  components: {
    CategoriesList
  },
  async asyncData ({ app, route, $axios, params, error, store }) {
    try {
      await store.dispatch('getCategoriesList')
      const APPLIED_FILTERS_URL = 'https://aminostore.com.ua/api/products/?ordering=price?categories='
      const protein = await $axios.$get(APPLIED_FILTERS_URL + '1')
      const aminokisloty = await $axios.$get(APPLIED_FILTERS_URL + '2')
      return { protein: protein.results, aminokisloty: aminokisloty.results }
    } catch (err) {
      return error({
        statusCode: 404,
        message: 'Категории не найдены или сервер не доступен'
      })
    }
  },
  computed: {
    ...mapState({
      categories: 'categoriesList'
    })
  }
}
</script>
<style lang="scss" module>
</style>
