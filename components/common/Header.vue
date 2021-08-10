<template>
  <div :class="$style.wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-2">
          <n-link :class="$style.logo" to="/">
            <p>
              Amino
            </p>
          </n-link>
        </div>
        <div class="col-sm-6">
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
        <div class="col-sm-4 header-cart"> 
          <b-input-group size="md">
            <b-form-input placeholder="Поиск"></b-form-input>
          </b-input-group>
          <CartButton />
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
}
.cart {
  display: flex;
}
</style>
