<template>
  <header class="header">
    <div class="container-fluid container-lg">
      <div class="row">
        <div class="col position-static">
          <div class="header-inner" :class="isOpenedSearchBox && 'header-inner-expanded-search'">
            <n-link class="logo header-inner--logo" to="/">Amino</n-link>
            <Nav class="d-none d-md-block navigation"
                 :navigationData="navData"
                 :isOpenedNav="isOpenedNavigation" />
            <SearchBox v-on:onHideSearchBox="hideSearchBox" v-on:onToggleSearchBox="toggleSearchBox"/>
            <div class="header-utils">
                <button type="button"
                      class="d-lg-none search-block-toggler"
                      aria-expanded="false"
                      v-b-toggle.sidebar-2>
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.77686 12.1943C6.94141 12.1943 8.03271 11.8428 8.94092 11.2422L12.1489 14.4575C12.3613 14.6626 12.6323 14.7651 12.9253 14.7651C13.5332 14.7651 13.98 14.2891 13.98 13.6885C13.98 13.4102 13.8848 13.1392 13.6797 12.9341L10.4937 9.7334C11.1528 8.7959 11.541 7.66064 11.541 6.43018C11.541 3.25879 8.94824 0.666016 5.77686 0.666016C2.61279 0.666016 0.0126953 3.25879 0.0126953 6.43018C0.0126953 9.60156 2.60547 12.1943 5.77686 12.1943ZM5.77686 10.6562C3.45508 10.6562 1.55078 8.75195 1.55078 6.43018C1.55078 4.1084 3.45508 2.2041 5.77686 2.2041C8.09863 2.2041 10.0029 4.1084 10.0029 6.43018C10.0029 8.75195 8.09863 10.6562 5.77686 10.6562Z" fill="#E0ECFD"/>
                  </svg>
                </button>
                <CartButton />
                <b-button class="d-md-none header-sidebar-btn" v-b-toggle.sidebar-1>
                  <span></span>
                </b-button>
            </div>
            <b-sidebar id="sidebar-2" shadow v-on:change="onToggleMobileNavigation" >
              <div class="header-sidebar">
                <SearchBox />
              </div>
            </b-sidebar>
            <b-sidebar id="sidebar-1" shadow v-on:change="onToggleMobileNavigation" >
              <div class="header-sidebar">
                <Nav :navigationData="navData" :isOpenedNav="isOpenedNavigation" />
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
import Nav from '~~/components/common/nav'

export default {
  components: {
    CartButton,
    SearchBox,
    Nav
  },
  data() {
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
                },
              ]
            },
            {
              id: 'd2',
              url: '',
              title: 'Спортивный инвентарь',
            },
            {
              id: 'd3',
              url: '',
              title: 'Добавки',
            }
          ]
        },
        {
          id: '2',
          url: '',
          title: 'Спортивное питание',
        },
        {
          id: '3',
          url: '/checkout',
          title: 'Аминокислоты',
        },
        {
          id: '4',
          url: 'blog',
          title: 'Аксессуары',
        }
      ]
    }
  },
  methods: {
    onToggleMobileNavigation(visible) {
      this.isOpenedNavigation = visible;
    },
    toggleSearchBox(e) {
      if(this.isOpenedSearchBox && e.target.tagName === "INPUT") { return; }
      this.isOpenedSearchBox = !this.isOpenedSearchBox;
    },
    hideSearchBox() {
      this.isOpenedSearchBox = false;
    },
  }
}
</script>
