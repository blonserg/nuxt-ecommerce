<template>
  <div>
    <CategoriesList
      :protein="protein"
      :aminokisloty="aminokisloty"
      :aminokisloty2="aminokisloty2"
      :banners="banners"
    />
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
      const { banners } = await $axios.$get('https://aminostore.com.ua/api/init/')
      const protein = await $axios.$get(APPLIED_FILTERS_URL + '1')
      const aminokisloty = await $axios.$get(APPLIED_FILTERS_URL + '2')
      const bannersz = []
      for (const banner of banners) {
        const { data } = await $axios.get('https://aminostore.com.ua/api/product/' + banner.product__slug)
        bannersz.push({ ...banner, product_info: data })
      };
      console.log(bannersz)
      const aminokisloty2 = await $axios.$get('https://aminostore.com.ua/api/products/?ordering=price?is_discounted=true')
      return { protein: protein.results, aminokisloty: aminokisloty.results, aminokisloty2: aminokisloty2.results, banners: bannersz }
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
