<template>
  <div>
    <div class="hero-main-wrapper">
      <VueSlickCarousel
        :pause-on-hover="false"
        :swipe="false"
        :autoplay="true"
        :lazy-load="ondemand"
        :autoplay-speed="6000"
        :dots="true"
      >
        <div class="hero-main">
          <picture class="hero-main-img">
            <source srcset="@/assets/png/hero-screen-mob.png" media="(max-width: 768px)" />
            <img src="@/assets/png/hero.png" alt="" />
          </picture>
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
                    <b-button variant="primary">
                      Купить
                    </b-button>
                    <a class="link" href="/">
                      Подробнее
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-main">
          <picture class="hero-main-img">
            <source srcset="@/assets/png/hero-screen-mob.png" media="(max-width: 768px)" />
            <img src="@/assets/png/hero.png" alt="" />
          </picture>
          <div class="container">
            <div class="row">
              <div class="col-sm-7 hero-wrap">
                <div class="hero-inner">
                  <h1 class="hero-head">
                    Hydro Whey Zero
                  </h1>
                  <p class="hero-text">
                    При покупке HYDRO WHEY ZERO <span>получи 55% скидки</span> на протеин ISO WHEY ZERO (акция действует до 21.06.21)
                  </p>
                  <div class="hero-btns">
                    <b-button variant="primary">
                      Купить
                    </b-button>
                    <a class="link" href="/">
                      Подробнее
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="market-wrapper">
      <div class="container">
        <b-row class="plp-gutters">
          <b-col
            cols
            md="4"
            class="mb-4"
          >
            <div class="market-item _econom">
              <img
                class="market-item-image"
                src="@/assets/png/coins.png"
                alt=""
              />
              <h3 class="market-item-ttl">
                ЭКОНОМИЯ
              </h3>
              <div class="market-item-txt">
                До 25% — ведь мы напрямую сотрудничаем с производителями
              </div>
            </div>
          </b-col>
          <b-col
            cols
            md="4"
            class="mb-4"
          >
            <div class="market-item _brand">
              <img
                class="market-item-image"
                src="@/assets/png/diamond.png"
                alt=""
              />
              <h3 class="market-item-ttl">
                ТОП БРЕНДЫ
              </h3>
              <div class="market-item-txt">
                Только наиболее зарекомендовавшие себя среди спортсменов
              </div>
            </div>
          </b-col>
          <b-col
            cols
            md="4"
            class="mb-4"
          >
            <div class="market-item _save">
              <img
                class="market-item-image"
                src="@/assets/png/round.png"
                alt=""
              />
              <h3 class="market-item-ttl">
                Поддержка
              </h3>
              <div class="market-item-txt">
                Поможем с выбором и подберем подходящие продукы под ваши цели
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="container home-widgets">
      <div class="group">
        <div class="group-ttl">
          Акционные товары
        </div>
        <LinkMore :text="'Смотреть все'" :href="'/'" />
      </div>
      <VueSlickCarousel v-bind="settings" class="product-carousel">
        <div class="product-item">
          <div class="product-item-image">
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
      <div class="group">
        <div class="group-ttl">
          Протеины
        </div>
        <LinkMore :text="'Смотреть все'" :href="'/category/protein'" />
      </div>
      <VueSlickCarousel v-bind="settings" class="product-carousel">
        <div class="product-item">
          <div class="product-item-image">
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
      <div class="group">
        <div class="group-ttl">
          Аминокислоты
        </div>
        <LinkMore :text="'Смотреть все'" :href="'/category/aminokisloty'" />
      </div>
      <VueSlickCarousel v-bind="settings" class="product-carousel">
        <div class="product-item">
          <div class="product-item-image">
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
            <img src="@/assets/png/image-carousel1.png" alt="" />
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
        <CallBack classes="market-subscribe-group" />
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
import CallBack from '~~/components/common/CallBack'

export default {
  components: {
    VueSlickCarousel,
    ProductPrice,
    LinkMore,
    CallBack,
  },
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]
      }
    }
  },
  mounted () {
    document.body.classList.add('sticky-header')
  },
  destroyed () {
    document.body.classList.remove('sticky-header')
  }
}
</script>
