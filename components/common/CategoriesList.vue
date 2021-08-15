<template>
  <div>
    <div class="hero-main">
      <div class="container">
        <div class="row">
          <div class="col-sm-7 hero-wrap">
            <div class="hero-inner">
              <h1 class="hero-head">
                Hydro Whey Zero + Iso WhEy Zero 
              </h1>
              <p class="hero-text">
                При покупке HYDRO WHEY ZERO <span>получи 25% скидки</span> на протеин ISO WHEY ZERO (акция действует до 21.06.21)
              </p>
              <div class="hero-btns">
                <b-button variant="primary">Купить</b-button>
                <a class="link" href="/">
                  Подробнее
                  <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.75 1.5L6.25 6L1.75 10.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="market-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="market-item _econom">
              <div class="market-item-ttl">
                ЭКОНОМИЯ
              </div>
              <div class="market-item-txt">
                До 25% — ведь мы напрямую сотрудничаем с производителями
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="market-item _brand">
              <div class="market-item-ttl">
                ТОП БРЕНДЫ
              </div>
              <div class="market-item-txt">
                Только наиболее зарекомендовавшие себя среди спортсменов
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="market-item _save">
              <div class="market-item-ttl">
                Поддержка
              </div>
              <div class="market-item-txt">
                Поможем с выбором и подберем подходящие продукы под ваши цели
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container home-widgets">
      <div class="group">
        <div class="group-ttl">
          Акционные товары
        </div>
        <LinkMore :text="'Смотреть все'" :href="'/'"></LinkMore>
      </div>
      <VueSlickCarousel v-bind="settings">
        <div class="product-item">
          <div class="product-item-image">
            <img src="@/assets/png/image-carousel1.png" alt="">
          </div>
          <div class="product-item-info">
            <div class="product-item-ttl">
              Iso zero whey plus
              <span>BiotexhUsa</span>
            </div>
            <div class="product-item-price">
              <ProductPrice :price="{pPrice: 1800, pPriceOld: 1800}" />
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item-image">
            <img src="@/assets/png/image-carousel1.png" alt="">
          </div>
          <div class="product-item-info">
            <div class="product-item-ttl">
              Iso zero whey plus
              <span>BiotexhUsa</span>
            </div>
            <div class="product-item-price">
              <ProductPrice :price="{ pPrice: 1800 }" />
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item-image">
            <img src="@/assets/png/image-carousel1.png" alt="">
          </div>
          <div class="product-item-info">
            <div class="product-item-ttl">
              Iso zero whey plus
              <span>BiotexhUsa</span>
            </div>
            <div class="product-item-price">
              <ProductPrice :price="{ pPricePromo: 1800 }" />
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item-image">
            <img src="@/assets/png/image-carousel1.png" alt="">
          </div>
          <div class="product-item-info">
            <div class="product-item-ttl">
              Iso zero whey plus
              <span>BiotexhUsa</span>
            </div>
            <div class="product-item-price">
              <ProductPrice :price="{pPrice: 1800, pPriceOld: 1800}" />
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item-image">
            <img src="@/assets/png/image-carousel1.png" alt="">
          </div>
          <div class="product-item-info">
            <div class="product-item-ttl">
              Iso zero whey plus
              <span>BiotexhUsa</span>
            </div>
            <div class="product-item-price">
              <ProductPrice :price="{pPrice: 1800, pPriceOld: 1800}" />
            </div>
          </div>
        </div>
        <div class="product-item">
          <div class="product-item-image">
            <img src="@/assets/png/image-carousel1.png" alt="">
          </div>
          <div class="product-item-info">
            <div class="product-item-ttl">
              Iso zero whey plus
              <span>BiotexhUsa</span>
            </div>
            <div class="product-item-price">
              <ProductPrice :price="{pPrice: 1800, pPriceOld: 1800}" />
            </div>
          </div>
        </div>
      </VueSlickCarousel>
      <div class="market-subscribe">
        <div class="market-subscribe-ttl">
          Есть вопросы?
        </div>
        <div class="market-subscribe-txt">
          Оставьте номер телефона и мы свяжемся с вами в ближайшее время
        </div>
        <div class="market-subscribe-group">
          <b-form-input placeholder="Номер телефона"></b-form-input>
          <b-button variant="primary">Позвоните мне</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import LinkMore from '~~/components/common/LinkMore'
import ProductPrice from '~~/components/common/ProductPrice'

export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  components: { 
    VueSlickCarousel,
    ProductPrice,
    LinkMore
  },
  data() {
    return {
      settings: {
        "dots": true,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "initialSlide": 0,
        "responsive": [
        {
          "breakpoint": 768,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "infinite": true,
            "dots": true
          }
        }
        ]
      }
    }
  }
}
</script>

<style lang="scss" module>
</style>
