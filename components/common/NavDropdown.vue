<template>
  <div class="navigation-dropdown" :class="{ active: isExpandedDropdown }">
    <div class="navigation-dropdown-inner">
      <a
        class="navigation-dropdown-back"
        href=""
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
      </span>Назад</a>
      <ul class="navigation-dropdown-list row">
        <li
          v-for="item in dropdownData"
          :key="item.id"
          class="navigation-dropdown-list-item col"
        >
          <!-- Navigation dropdown item with dropdown -->
          <a
            v-if="item.items"
            :href="item.url"
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
          </a>
          <!-- EO Navigation dropdown item with dropdown -->
          <!-- Navigation dropdown item without dropdown -->
          <a
            v-else
            :href="item.url"
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
          </a>
          <!-- EO Navigation dropdown item without dropdown -->
          <!-- Navigation sublist content -->
          <div
            :id="`${currentDropdownId}-${item.id}-sublist`"
            class="navigation-dropdown-anchestor"
            :class="{ active: expandedSublist === `${currentDropdownId}-${item.id}-sublist`}"
          >
            <a
              class="navigation-dropdown-back"
              href=""
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
            </svg></span>Назад</a>
            <span class="nav-link-ttl d-block d-md-none col">{{ item.title }}</span>
            <ul
              v-if="item.items"
              class="navigation-dropdown-sublist"
            >
              <li
                v-for="sublistItem in item.items"
                :key="sublistItem.id"
                class="nav-item"
              >
                <a class="nav-link" :href="sublistItem.url">
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
                </a>
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
      type: Array,
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
