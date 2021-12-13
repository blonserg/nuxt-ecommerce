<template>
  <nav>
    <ul class="nav navigation">
      <li
        v-for="(navItem, idx) in navigationData"
        :key="navItem.slug"
        class="nav-item navigation-item"
      >
        <!-- Navigation item with dropdown -->
        <nuxt-link
          v-if="idx === 0"
          :to="`/${navItem.slug}`"
          class="nav-link navigation-link has-sub"
          active-class="active"
          @click="handleDropdown($event, `${navItem.slug}-dropdown`)"
        >
          {{ navItem.title }}
          <span class="navigation-item-arrow"><svg
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
          </svg></span>
          <i
            v-if="navItem.icon"
            class="navigation-link-icon"
            aria-hidden="true"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#BDBDBD"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="7"
                height="7"
                rx="2"
              />
              <rect
                x="9"
                width="7"
                height="7"
                rx="2"
              />
              <rect
                y="9"
                width="7"
                height="7"
                rx="2"
              />
              <rect
                x="9"
                y="9"
                width="7"
                height="7"
                rx="2"
              />
            </svg>
          </i>
        </nuxt-link>
        <!-- EO Navigation item with dropdown -->
        <!-- Navigation item without dropdown -->

        <nuxt-link
          v-else
          :to="`/category/${navItem.slug}`"
          class="nav-link navigation-link"
          active-class="active"
        >
          {{ navItem.title }}
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
        </nuxt-link>
        <!-- EO Navigation item without dropdown -->
        <!-- Navigation dropdown content -->
        <NavDropdown
          v-if="idx === 0"
          :id="`${navItem.slug}-dropdown`"
          :dropdown-data="subnav"
          :current-dropdown-id="`${navItem.slug}-dropdown`"
          :is-expanded-dropdown="expandedDropdown === `${navItem.slug}-dropdown`"
          :expanded-sublist="expandedSublist"
          @hideDropdownNav="collapseDropdown"
          @hideSublistNav="collapseSublist"
          @toggleSublist="handleSublist"
        />
        <!-- EO Navigation dropdown content -->
      </li>
    </ul>
  </nav>
</template>

<script>
import NavDropdown from '~~/components/common/NavDropdown'

export default {
  components: {
    NavDropdown,
  },
  props: {
    navigationData: {
      type: Array,
      required: true,
    },
    subnav: {
      type: Array,
    },
    isOpenedNav: {
      type: Boolean,
    },
  },
  data() {
    return {
      expandedDropdown: '',
      expandedSublist: '',
    }
  },
  computed: {},
  watch: {
    isOpenedNav: function (newVal) {
      if (!newVal) {
        ;(this.expandedDropdown = ''), (this.expandedSublist = '')
      }
    },
  },
  methods: {
    collapseDropdown() {
      this.expandedSublist = ''
      this.expandedDropdown = ''
    },
    collapseSublist() {
      this.expandedSublist = ''
    },
    handleDropdown(e, dropdownId) {
      if (!this.$breakpoints.lMd) {
        e.preventDefault()
        if (this.expandedDropdown !== dropdownId) {
          this.expandedDropdown = dropdownId
        } else {
          this.expandedDropdown = ''
        }
      }
    },
    handleSublist(e, sublistId) {
      if (!this.$breakpoints.lMd) {
        e.preventDefault()
        if (this.expandedSublist !== sublistId) {
          this.expandedSublist = sublistId
        } else {
          this.expandedSublist = ''
        }
      }
    },
  },
}
</script>
