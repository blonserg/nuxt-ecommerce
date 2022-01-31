<template>
  <div v-if="!loading" class="body">
    <div class="header-container">
      <Header />
    </div>
    <div class="content">
      <Breadcrumbs />
      <nuxt />
      <CastomerCartModal />
    </div>
    <div class="footer-container">
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
  data: function () {
    return { loading: true }
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
  mounted: function () {
    this.loading = false
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
<style lang="scss">
html {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
}

.body {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: relative; */
}

#__nuxt,
#__layout {
  height: 100%;
  width: 100%;
}

.footer-container,
.header-container {
  width: 100%;
}

.content {
  width: 100%;
  flex: 1 0 auto;
}

</style>
