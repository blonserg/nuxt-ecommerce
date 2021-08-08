<template>
  <div class="container">
    <div v-if="bredcrumbs && bredcrumbs.length > 0" :class="$style.breadcrumbs">
      <ul>
        <li v-for="cr in bredcrumbs" :key="cr.url">
          <n-link :to="cr.url">
            {{ cr.title }}
          </n-link>
        </li>
      </ul>
    </div>
    <div class="breadcrumbs" v-else>
      <ul>
        <li>
          <a href="/">Main</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      bredcrumbs: 'bredcrumbs'
    })
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

  ul {
    display: flex;
    padding-left: 0;

    li {
      list-style: none;
      margin-right: 20px;
      position: relative;

      a {
        color: #9EA0A1;
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
