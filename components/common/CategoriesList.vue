<template>
  <div>
    <div class="hero-main-wrapper">
      <VueSlickCarousel
        :pause-on-hover="false"
        :swipe="false"
        :autoplay="true"
        :lazy-load="'progressive'"
        :autoplay-speed="6000"
        :dots="true"
        class="main-carousel"
      >
        <div v-for="banner in banners" class="hero-main">
          <picture class="hero-main-img">
            <source :srcset="`https://aminostore.com.ua/media/${banner.image_mobile}`" media="(max-width: 468px)" />
            <img
              :src="`https://aminostore.com.ua/media/${banner.image}`"
              class="hero-main-picture"
              alt=""
            />
          </picture>
          <div class="container">
            <div class="row">
              <div class="col-sm-7 hero-wrap">
                <div class="hero-inner">
                  <h1 class="hero-head" v-html="banner.title">
                  </h1>
                  <p class="hero-text" v-html="banner.description"></p>
                  <div class="hero-btns">
                    <!-- <b-button variant="primary">
                      Купить
                    </b-button> -->
                    <!-- <BuyButton :product="banner.product_info" /> -->
                    <a class="link" :href="`/product/${banner.product__slug}`">
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
        <LinkMore :text="'Смотреть все'" :href="'/category/&promotions=bundled_for_1grn,discounted_bundle,is_promoted,discount_for_second_item'" />
      </div>
      <VueSlickCarousel v-bind="settings" class="product-carousel">
        <div
          v-for="el in deleteItems(aminokisloty2)"
          class="product-item"
          @click="$router.push('/product/' + el.slug)"
        >
          <div class="product-item-image" :class="el.price && el.regular_price ? 'product-item-image-discounted': ''">
            <img
              :src="`${thisLocation}/` + el.image"
              alt=""
              class="product-item-image__img"
            />
          </div>
          <div class="product-item-info">
            <div class="product-item-ttl">
              <a :href="'/product/' + el.slug">
                {{ el.title }}
              </a>
              <span>{{ el.brand }}</span>
            </div>
            <div class="product-item-price">
              <ProductPrice :price="{pPrice: el.price, pPriceOld: el.regular_price}" />
            </div>
          </div>
        </div>
      </VueSlickCarousel>
      <div v-for="category in categoriesSliders">
        <div class="group">
          <div class="group-ttl">
            {{ category.title }}
          </div>
          <LinkMore :text="'Смотреть все'" :href="`/category/${category.slug}`" />
        </div>
        <VueSlickCarousel v-bind="settings" class="product-carousel">
          <div
            v-for="el in deleteItems(protein)"
            class="product-item"
            @click="$router.push('/product/' + el.slug)"
          >
            <div class="product-item-image" :class="el.price && el.regular_price ? 'product-item-image-discounted': ''">
              <img
                :src="`${thisLocation}/` + el.image"
                alt=""
                class="product-item-image__img"
              />
            </div>
            <div class="product-item-info">
              <div class="product-item-ttl">
                <a :href="'/product/' + el.slug">
                  {{ el.title }}
                </a>
                <span>{{ el.brand }}</span>
              </div>
              <div class="product-item-price">
                <ProductPrice :price="{pPrice: el.price, pPriceOld: el.regular_price}" />
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
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
import { mapGetters, mapMutations } from 'vuex'
// import BuyButton from '~~/components/common/BuyButton'
import { URL } from '@/utils/constants'

export default {
  components: {
    VueSlickCarousel,
    ProductPrice,
    LinkMore,
    CallBack
    // BuyButton
  },
  props: {
    aminokisloty: {
      type: Array,
      default: () => []
    },
    aminokisloty2: {
      type: Array,
      default: () => []
    },
    protein: {
      type: Array,
      default: () => []
    },
    banners: {
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
  computed: {
    ...mapGetters({
      categoriesSliders: 'categoriesSliders',
      submenu: 'submenu'
    }),
    thisLocation () {
      return process.client ? location.origin : ''
    }
  },
  mounted () {
    document.body.classList.add('sticky-header')
  },
  destroyed () {
    document.body.classList.remove('sticky-header')
  },
  methods: {
    deleteItems (items) {
      // deleted extra items
      const list = items.length > 6
        ? items.slice(0, 5)
        : items
      return list
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-main-picture {
  width: 100%;
  height: 660px;
  @media (min-width: 769px) {
    height: 100%;
  }
}

.product-item-image {
  height: 416px;
  &__img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
}

.product-item-ttl {
  max-width: 70%;

  &:hover {
    text-decoration: underline;
  }
}
</style>

<style lang="scss">
// top main slider
.main-carousel {
  .slick-next {
    right: 25px;
    display: none !important;
  }
}

.product-item-image-discounted {
  position: relative;
  &:after {
    position: absolute;
    content: url('../../assets/png/flame.png');
    width: 21px;
    height: 32px;
    display: block;
    z-index: 5;
    top: 10px;
    right: 26px;
  }
}
</style>
