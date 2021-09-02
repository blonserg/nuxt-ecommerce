<template>
  <header class="header">
    <div class="container-fluid container-lg">
      <div class="row">
        <div class="col position-static">
          <div class="header-inner" :class="isOpenedSearchBox && 'header-inner-expanded-search'">
            <n-link class="logo header-inner--logo" to="/">
              Amino
            </n-link>
            <Nav
              class="d-none d-md-block navigation"
              :navigation-data="navData"
              :is-opened-nav="isOpenedNavigation"
            />
            <SearchBox ref="searchBox" :isOpened="isOpenedSearchBox" @onHideSearchBox="hideSearchBox" @onToggleSearchBox="toggleSearchBox" />
            <div class="header-utils">
              <CartButton />
              <b-button v-b-toggle.sidebar-1 class="d-md-none header-sidebar-btn">
                <span></span>
              </b-button>
            </div>
            <b-sidebar
              id="sidebar-1"
              shadow
              @change="onToggleMobileNavigation"
            >
              <div class="header-sidebar">
                <Nav :navigation-data="navData" :is-opened-nav="isOpenedNavigation" />
              </div>
            </b-sidebar>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CartButton from '~~/components/header/CartButton'
import SearchBox from '~~/components/common/SearchBox'
import Nav from '~~/components/common/Nav'

export default {
  components: {
    CartButton,
    SearchBox,
    Nav
  },
  data () {
    return {
      isOpenedNavigation: false,
      isOpenedSearchBox: false,
      navData: [
        {
          id: '1',
          url: '/category/cats',
          title: 'Все категории',
          icon: true,
          items: [
            {
              id: 'd1',
              url: '',
              title: 'Спортивное питание',
              items: [
                {
                  id: 's1',
                  url: '',
                  title: 'Протеин'
                },
                {
                  id: 's2',
                  url: '',
                  title: 'Сывороточный протеин'
                }
              ]
            },
            {
              id: 'd2',
              url: '',
              title: 'Спортивный инвентарь'
            },
            {
              id: 'd3',
              url: '',
              title: 'Добавки'
            }
          ]
        },
        {
          id: '2',
          url: '',
          title: 'Спортивное питание'
        },
        {
          id: '3',
          url: '/checkout',
          title: 'Аминокислоты'
        },
        {
          id: '4',
          url: 'blog',
          title: 'Аксессуары'
        }
      ]
    }
  },
  methods: {
    onToggleMobileNavigation (visible) {
      this.isOpenedNavigation = visible
    },
    toggleSearchBox(e) {
      if (this.isOpenedSearchBox && e.target.tagName === 'INPUT') { return }
      this.isOpenedSearchBox = !this.isOpenedSearchBox;
      this.$refs.searchBox.$refs.typeaheadBootstrap.$refs.input.focus();
    },
    hideSearchBox () {
      this.isOpenedSearchBox = false
    }
  }
}
</script>
