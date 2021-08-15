<template>
  <div :class="$style.wrapper">
    <div class="container">
      <div class="row">
        <div class="col-4 col-md-2">
          <n-link :class="$style.logo" to="/">
            <p>
              Amino
            </p>
          </n-link>
        </div>
        <div class="d-none d-md-block col-md-6">
          <b-nav>
            <b-nav-item class="nav-item--all" active>Все категории</b-nav-item>
            <b-nav-item>
              <n-link to="/category/cats">
                Спортивное питание
              </n-link>
            </b-nav-item>
            <b-nav-item>
              <n-link to="/checkout">
                Аминокислоты
              </n-link>
            </b-nav-item>
            <b-nav-item>
              <n-link to="/blog">
                Аксессуары
              </n-link>
            </b-nav-item>
          </b-nav>
        </div>
        <div class="col-8 col-md-4 header-cart"> 
          <b-input-group class="d-none d-md-block" size="md">
            <b-form-input placeholder="Поиск"></b-form-input>
          </b-input-group>
          <CartButton />
          <b-button class="d-md-none header-sidebar-btn" v-b-toggle.sidebar-1>
            <span></span>
          </b-button>
          <b-sidebar id="sidebar-1" title="Sidebar" shadow>
            <div class="header-sidebar">
              <b-nav>
                <b-nav-item active>Все категории</b-nav-item>
                <b-nav-item>
                  <n-link to="/category/cats">
                    Спортивное питание
                  </n-link>
                </b-nav-item>
                <b-nav-item>
                  <n-link to="/checkout">
                    Аминокислоты
                  </n-link>
                </b-nav-item>
                <b-nav-item>
                  <n-link to="/blog">
                    Аксессуары
                  </n-link>
                </b-nav-item>
              </b-nav>
            </div>
          </b-sidebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartButton from '~~/components/header/CartButton'
export default {
  components: {
    CartButton
  }

}
</script>

<style lang="scss" module>
.wrapper {
    background: linear-gradient(271.4deg, #0D1115 1.93%, #15262F 100%);
    padding-top: 20px;
    padding-bottom: 20px;
}
.logo {
  font-family: 'SF Pro Display';
  font-weight: 900;
  font-size: 24px;
  font-style: italic;
  color: #257BF4;
  line-height: 20px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  p {
    margin-bottom: 0;
    margin-top: 10px;
  }
}
.cart {
  display: flex;
}
</style>
