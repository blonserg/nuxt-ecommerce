<template>
  <div class="container">
    <div v-if="breadcrumbs && breadcrumbs.length > 0" :class="$style.breadcrumbs">
      <ul>
        <li v-for="cr in breadcrumbs" :key="cr.url">
          <nuxt-link :to="cr.url">
            {{ cr.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      breadcrumbs: 'breadcrumbs'
    })
  },
  methods: {
    golink (pageLink) {
      const pageUrl = pageLink === '/'
        ? '/'
        : `/${pageLink}`
      this.$router.push(pageUrl)
    }
  }
}
</script>

<style lang="scss" module>
/* Style the list */
.breadcrumbs {
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #9EA0A1;
  margin-top: 60px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }

  ul {
    display: flex;
    padding-left: 0;
    margin: 0;
    li {
      list-style: none;
      margin-right: 20px;
      position: relative;

      a {
        color: #9EA0A1;
        cursor: pointer;
      }
    }

    li + li:before {
      content: '>';
      position: absolute;
      left: -12px;
    }
  }
}
</style>
