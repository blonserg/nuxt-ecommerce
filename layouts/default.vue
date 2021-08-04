<template>
  <div>
    <div>
      <Header />
    </div>
    <div>
      <Breadcrumbs />
      <nuxt />
      <CastomerCartModal />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~~/components/common/Header.vue'
import Breadcrumbs from '~~/components/common/Breadcrumbs.vue'
import CastomerCartModal from '~~/components/modals/CastomerCartModal.vue'
import Footer from '~~/components/common/Footer.vue'

export default {
  components: {
    Header,
    Breadcrumbs,
    CastomerCartModal,
    Footer
  },
  computed: {
    meta () {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no'
        },
        { hid: 'description', name: 'description', content: 'Главная' }
      ]
    }
  },
  beforeCreate () {
    // vueMainPlugins()
  },

  methods: {
  },
  head () {
    const canonical = `https://mysite.com${this.$route.path
      .toLowerCase()
      .replace(/\/$/, '')}`
    return {
      meta: Array.from(this.meta),
      script: [
        // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' }
      ],
      bodyAttrs: {
        // class: 'body'
      },
      link: [{ rel: 'canonical', href: canonical }]
    }
  }
}
</script>
<style lang="scss" module>

</style>
