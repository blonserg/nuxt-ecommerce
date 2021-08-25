<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col position-static">
          <div class="header-inner">
            <n-link class="logo header-inner--logo" to="/">Amino</n-link>
            <Nav class="d-none d-md-block navigation"
                 :navigationData="navData"
                 :isOpenedNav="isOpenedNavigation" />
            <SearchBox />
            <CartButton />
            <b-button class="d-md-none header-sidebar-btn" v-b-toggle.sidebar-1>
              <span></span>
            </b-button>
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
    }
  }
}
</script>
