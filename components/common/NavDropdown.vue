<template>
  <div class="navigation-dropdown" :class="{ active: isExpandedDropdown }">
    <div class="navigation-dropdown-inner">
      <nuxt-link
        class="navigation-dropdown-back"
        to="/back"
        aria-role="button"
        title="back"
        @click="hideDropdown"
      ><span class="navigation-item-arrow">
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
      </span>Назад</nuxt-link>
      <ul class="navigation-dropdown-list row">
        <li
          v-for="item in dropdownData"
          :key="item.id"
          class="navigation-dropdown-list-item col"
        >
          <!-- Navigation dropdown item with dropdown -->
          <nuxt-link
            v-if="item.sub_categories"
            :to="`/category/${item.slug}`"
            class="navigation-dropdown-link"
            @click="toggleSublist($event, `${currentDropdownId}-${item.id}-sublist`)"
          >
            {{ item.title }} <span class="navigation-item-arrow">
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
            </span>
          </nuxt-link>
          <!-- EO Navigation dropdown item with dropdown -->
          <!-- Navigation dropdown item without dropdown -->
          <nuxt-link
            v-else
            :to="`/category/${item.slug}`"
            class="navigation-dropdown-link"
          >
            {{ item.title }}
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
          </nuxt-link>
          <!-- EO Navigation dropdown item without dropdown -->
          <!-- Navigation sublist content -->
          <div
            :id="`${currentDropdownId}-${item.id}-sublist`"
            class="navigation-dropdown-anchestor"
            :class="{ active: expandedSublist === `${currentDropdownId}-${item.id}-sublist`}"
          >
            <nuxt-link
              class="navigation-dropdown-back"
              to="/back"
              aria-role="button"
              title="back"
              @click="hideSublist"
            ><span class="navigation-item-arrow"><svg
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
            </svg></span>Назад</nuxt-link>
            <span class="nav-link-ttl d-block d-md-none col">{{ item.title }}</span>
            <ul
              v-if="item.sub_categories"
              class="navigation-dropdown-sublist"
            >
              <li
                v-for="sublistItem in item.sub_categories"
                :key="sublistItem.id"
                class="nav-item"
              >
                <nuxt-link class="nav-link" :to="`/category/${sublistItem.slug}`">
                  {{ sublistItem.title }}
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
                </nuxt-link>
              </li>
            </ul>
          </div>
          <!-- EO Navigation sublist content -->
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dropdownData: {
      type: [Array],
      default: function() { return []; },
      required: true
    },
    isExpandedDropdown: {
      type: Boolean
    },
    currentDropdownId: {
      type: String
    },
    expandedSublist: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    hideDropdown (e) {
      e.preventDefault()
      this.$emit('hideDropdownNav')
    },
    hideSublist (e) {
      e.preventDefault()
      this.$emit('hideSublistNav')
    },
    toggleSublist (e, sublistId) {
      this.$emit('toggleSublist', e, sublistId)
    }
  }
}
</script>
