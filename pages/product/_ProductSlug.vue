<template>
  <div class="container">
    <div class="merch-header">
      <div class="row">
        <div class="col-12 col-md-9 col-lg-10">
          <h1 class="merch-header-ttl">{{product.title}}</h1>
        </div>
        <div class="col-12  col-md-3 col-lg-2 d-flex justify-content-md-end">
          <div class="merch-header-art">
            Артикул:
            <span>{{product.id}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="merch-hr"></div>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <ProductImageCarousel :imagesSet="product.product_images" v-if="product.product_images"/>
      </div> 
      <div class="col-md-6 col-sm-12">
        <div class="merch-main">
          <div class="merch-info">
            <h2 class="merch-name">{{ product.title }}</h2>
            <div class="merch-info-available">
              <ProductAvailable v-bind:isAvailable="true" />
              <div class="product-item-raiting">
                <b-form-rating variant="warning" :no-border="true" size="sm" class="rating-block" :value="product.rating" inline readonly></b-form-rating>
                <div class="product-item-feed">
                  (<a href="#reviews">{{product.reviews_qty}} отзыва</a>)
                </div>
              </div>
            </div>
            <ProductPrice :price="product.price"/>
          </div>
          <div class="merch-attributes">
            <div class="merch-row">
              <span class="merch-row-name">
                Производитель
              </span>
              <span class="merch-row-item">
                {{product.brand || '-'}}
              </span>
            </div>
            <div class="merch-row">
              <span class="merch-row-name">
                Страна-производитель:
              </span>
              <span class="merch-row-item">
                {{product.country || '-'}}
              </span>
            </div>
            <div class="merch-row">
              <span class="merch-row-name">
                Бренд
              </span>
              <span class="merch-row-item">
                {{product.brand || '-'}}
              </span>
            </div>
          </div>
          <div class="merch-group">
            <div class="merch-group-item">
              <label for="selectSize">Размер</label>
              <b-form-select v-model="selectedSize" :options="product.sizeAttr.options" id="selectSize"></b-form-select>
            </div>
            <div class="merch-group-item">
              <label for="selectFavor">Вкус</label>
              <b-form-select v-model="selectedTaste" :options="product.tasteAttr.options" id="selectFavor"></b-form-select>
            </div>
            <div class="merch-group-item">
              <label for="selectQuantity">Количество</label>
              <b-form-spinbutton class="product-quantity" id="selectQuantity" min="1" max="10" v-model="quantity">
                <svg hasFocus="true" slot="increment" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0166 9.91667H13.8784C14.3274 9.91667 14.6914 10.2866 14.6914 10.75C14.6914 11.2102 14.3281 11.5833 13.8784 11.5833H11.0166V14.5037C11.0166 14.9619 10.6541 15.3333 10.2 15.3333C9.74894 15.3333 9.38332 14.9626 9.38332 14.5037V11.5833H6.5215C6.07249 11.5833 5.70849 11.2134 5.70849 10.75C5.70849 10.2898 6.07175 9.91667 6.5215 9.91667H9.38332V6.99631C9.38332 6.53811 9.74579 6.16667 10.2 6.16667C10.651 6.16667 11.0166 6.53736 11.0166 6.99631V9.91667ZM10.2 20.75C4.7878 20.75 0.400391 16.2728 0.400391 10.75C0.400391 5.22715 4.7878 0.75 10.2 0.75C15.6121 0.75 19.9995 5.22715 19.9995 10.75C19.9995 16.2728 15.6121 20.75 10.2 20.75ZM10.2 19.0833C14.7101 19.0833 18.3663 15.3524 18.3663 10.75C18.3663 6.14763 14.7101 2.41667 10.2 2.41667C5.68983 2.41667 2.03365 6.14763 2.03365 10.75C2.03365 15.3524 5.68983 19.0833 10.2 19.0833Z" fill="#257BF4"/>
                </svg>
                <svg slot="decrement" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.79953 20.75C4.3874 20.75 0 16.2728 0 10.75C0 5.22715 4.3874 0.75 9.79953 0.75C15.2117 0.75 19.5991 5.22715 19.5991 10.75C19.5991 16.2728 15.2117 20.75 9.79953 20.75ZM9.79953 19.0833C14.3096 19.0833 17.9658 15.3524 17.9658 10.75C17.9658 6.14763 14.3096 2.41667 9.79953 2.41667C5.28942 2.41667 1.63326 6.14763 1.63326 10.75C1.63326 15.3524 5.28942 19.0833 9.79953 19.0833ZM13.478 9.91667C13.927 9.91667 14.291 10.2866 14.291 10.75C14.291 11.2102 13.9277 11.5833 13.478 11.5833H6.12109C5.67208 11.5833 5.30808 11.2134 5.30808 10.75C5.30808 10.2898 5.67134 9.91667 6.12109 9.91667H13.478Z" fill="#257BF4"/>
                </svg>
              </b-form-spinbutton>
            </div>
          </div>
          <div class="merch-btns">
            <BuyButton :product="product" />
            <b-button variant="outline-primary" @click="$bvModal.show('modal-buy-one-click')">Купить в один клик</b-button>
            <BuyOneClickModal />
          </div>
        </div>
      </div>
    </div>
    <div class="merch-hr"></div>
    <section class="merch-section">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <h3 class="merch-ttl">Описание товара</h3>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="merch-descr">
            <div v-html="product.description"></div>
            <LinkMore :text="'Смотреть все'" :href="'/'" :direction="'down'"></LinkMore>
          </div>
        </div>
      </div>
    </section>
    <div class="merch-hr"></div>
    <section class="merch-section">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <h3 class="merch-ttl">Характеристики</h3>
        </div>
        <div class="col-md-6 col-sm-12">
          <ul class="merch-row-group">
            <li class="merch-row"
              v-for="property in product.properties"
              :key="property.name">
              <div class="merch-row-name">
                {{property.name}}:
              </div>
              <div class="merch-row-item">
                {{property.value}}{{Boolean(property.unit) ? ` ${property.unit}` : ''}}
              </div>
            </li>
          </ul>
          <LinkMore :text="'Смотреть все'" :href="'/'" :direction="'down'"></LinkMore>
        </div>
      </div>
    </section>
    <div class="merch-hr"></div>

    <section id="reviews" class="merch-section">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <h3 class="merch-ttl">Отзывы</h3>
        </div>
        <div class="col-md-6 col-sm-12">
          <Reviews :reviews="product.product_reviews"/>
          <div class="reviews-actions">
            <LinkMore :text="'Больше отзывов'" :href="'/'" :direction="'down'"></LinkMore>
            <a class="link" href="/">Оставить отзыв</a>
          </div>
        </div>
      </div>
    </section>
    <div class="merch-hr"></div>

    <section class="merch-section">
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <h3 class="merch-ttl">Рекомендации по применению</h3>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="merch-descr" v-html="product.usage_instructions"></div>
        </div>
      </div>
    </section>
    <div class="merch-hr"></div>
    <section class="merch-widgets" v-if="product.recommended">
      <div class="row">
        <div class="col-12">
          <div class="group">
            <h3 class="group-ttl merch-ttl">
              Рекомендуемые товары
            </h3>
            <LinkMore :text="'Смотреть все'" :href="'/'"></LinkMore>
          </div>
        </div>
        <div class="col-12">
          <VueSlickCarousel v-bind="settings" class="product-carousel">
            <div class="product-item" v-for="rec_product in product.recommended">
              <a :href="rec_product.slug" class="product-item-image">
                <img :src="rec_product.image" :alt="rec_product.title">
              </a>
              <div class="product-item-info">
                <div class="product-item-ttl">
                  <a :href="rec_product.slug">{{rec_product.title}}</a>
                  <span>{{rec_product.brand}}</span>
                </div>
                <div class="product-item-price">
                  <ProductPrice :price="rec_product.price" v-if="rec_product.price" />
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ProductImageCarousel from '~~/components/pdp/ProductImageCarousel'
import ProductsList from '~~/components/common/ProductsList'
import ProductPrice from '~~/components/common/ProductPrice'
import ProductAvailable from '~~/components/pdp/ProductAvailable'
import BuyButton from '~~/components/common/BuyButton'
import Reviews from '~~/components/reviews/Reviews'
import LinkMore from '~~/components/common/LinkMore'
import { mapGetters } from 'vuex'
import BuyOneClickModal from '~/components/modals/BuyOneClickModal'

export default {
  components: {
    ProductImageCarousel,
    ProductsList,
    ProductPrice,
    ProductAvailable,
    VueSlickCarousel,
    BuyButton,
    LinkMore,
    Reviews,
    BuyOneClickModal
  },
  async asyncData ({ store, params, route, error }) {
    try {
      await store.dispatch('product/getProduct', { route })
    } catch (err) {
      console.error(err);
      return error({
        statusCode: 404,
        message: 'Товар не найден или сервер не доступен'
      })
    }
  },
    computed: {
    ...mapGetters({
      product: 'product/product',
    }),
    quantity: {
        get () {
            return this.$store.state.product.product.quantity
        },
        set (value) {
            this.$store.commit('product/UPDATE_PRODUCT_QUANTITY', value)
        }
    },
    selectedSize: {
        get () {
            return this.$store.state.product.product.sizeAttr.selected
        },
        set (value) {
            this.$store.commit('product/UPDATE_PRODUCT_ATTRIBUTE', {attr: 'sizeAttr', value})
        }
    },
    selectedTaste: {
        get () {
            return this.$store.state.product.product.tasteAttr.selected
        },
        set (value) {
            this.$store.commit('product/UPDATE_PRODUCT_ATTRIBUTE', {attr: 'tasteAttr', value})
        }
    }
  },
  methods: {
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
  },
  head () {
    return {
      title: this.product.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.pMetaDescription
        }
      ]
    }
  },
}
</script>