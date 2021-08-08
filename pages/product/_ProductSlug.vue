<template>
  <div class="container">
    <div class="merch-header">
      <h1 class="merch-header-ttl">ISO whey Zero</h1>
      <div class="merch-header-art">
        Артикул:
        <span>100977</span>
      </div>
    </div>
    <div class="merch-hr"></div>
    <div class="row">
     <div class="col-md-6 col-sm-12">
        <div class="merch-main_image">
          <VueSlickCarousel ref="c1" :dots="true" :asNavFor="$refs.c2" :focusOnSelect="true">
            <div class="merch-main_image-item"><h3>1</h3></div>
            <div  class="merch-main_image-item"><h3>2</h3></div>
            <div  class="merch-main_image-item"><h3>3</h3></div>
            <div class="merch-main_image-item"><h3>4</h3></div>
            <div class="merch-main_image-item"><h3>5</h3></div>
            <div class="merch-main_image-item"><h3>6</h3></div>
            <div class="merch-main_image-item"><h3>7</h3></div>
            <div class="merch-main_image-item"><h3>8</h3></div>
          </VueSlickCarousel>
        </div>
        <div class="merch-second_image">
          <VueSlickCarousel ref="c2" :asNavFor="$refs.c1" :slidesToShow="4" :focusOnSelect="true">
            <div class="merch-main_second-item"><h3>1</h3></div>
            <div class="merch-main_second-item"><h3>2</h3></div>
            <div class="merch-main_second-item"><h3>3</h3></div>
            <div class="merch-main_second-item"><h3>4</h3></div>
            <div class="merch-main_second-item"><h3>5</h3></div>
            <div class="merch-main_second-item"><h3>6</h3></div>
            <div class="merch-main_second-item"><h3>7</h3></div>
            <div class="merch-main_second-item"><h3>8</h3></div>
          </VueSlickCarousel>
        </div>
      </div> 
      <div class="col-md-6 col-sm-12">
        <div class="merch-name">{{ product.pName }}</div>
        <div class="merch-avaiable-wrap">
          <div class="merch-avaiable">
            Есть в наличие
          </div>
          <div class="product-item-raiting">
            <b-form-rating></b-form-rating>
            <div class="product-item-feed">
              <a href="#">124 отзыва</a>
            </div>
          </div>
        </div>
        <div class="merch-price">{{ product.pPrice }}</div>
        <div class="merch-row">
          <div class="merch-row-name">
            Производитель
          </div>
          <div class="merch-row-item">
            BioTechUSA
          </div>
        </div>
        <div class="merch-row">
          <div class="merch-row-name">
            Страна-производитель:
          </div>
          <div class="merch-row-item">
            Венгрия
          </div>
        </div>
        <div class="merch-row">
          <div class="merch-row-name">
            Бренд
          </div>
          <div class="merch-row-item">
            BioTechUSA
          </div>
        </div>
        <div class="merch-group">
          <div class="merch-group-item">
            <label :for="select-1">Размер</label>
            <b-form-select v-model="selected1" id="select-1">
              <b-form-select-option :value="null">Выберите размер</b-form-select-option>
              <b-form-select-option value="a">Option A</b-form-select-option>
              <b-form-select-option value="b">Option B</b-form-select-option>
            </b-form-select>
          </div>
          <div class="merch-group-item">
            <label :for="select-2">Вкус</label>
            <b-form-select v-model="selected2" id="select-2">
              <b-form-select-option :value="null">Выберите вкус</b-form-select-option>
              <b-form-select-option value="a">Option A</b-form-select-option>
              <b-form-select-option value="b">Option B</b-form-select-option>
            </b-form-select>
          </div>
          <div class="merch-group-item">
            <label :for="select-3">Количество</label>
            <b-form-spinbutton id="select-3" min="1" max="10"></b-form-spinbutton>
          </div>
        </div>
        <div class="merch-btns">
          <BuyButton :product="product" />
          <b-button>Купить в один клик</b-button>
        </div>
      </div>
    </div>
    <div class="merch-hr"></div>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="merch-ttl">
          Описание товара
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="merch-descr">
          <h2>Протеин BIOTECH ISO WHEY ZERO</h2>
          <p>
            BioTechUSA Iso Whey Zero Lactose Free – продукт, основное действие которого направлено на увеличение мышечного объема. Стимулятор изготовлен из сывороточного изолята высокого качества и предназначен для людей, которые ведут активный образ жизни и занимаются спортом. Коктейль не содержит лактозу, что позволяет употреблять его атлетам, которые страдают от непереносимости молочных продуктов.
          </p>
          <p>
            BioTechUSA Iso Whey Zero Lactose Free производят методом микрофильтрации, благодаря чему компоненты обладают высокой биологической ценностью и хорошо усваиваются. Белковые фракции, содержащиеся в стимуляторе, абсорбируются в мышечных тканях быстрее, позволяя в максимально короткий период обеспечить мускулы строительным материалом и предотвратить катаболизм. В препарате отсутствуют сахар и трансжиры, поэтому его можно с легкостью употреблять в период поддержания режима низкокалорийной диеты.
          </p>
          <h2>Качество, подтвержденное сертификатами</h2>
          <p>{{ product.pDesc }}</p>
        </div>
      </div>
    </div>
    <div class="merch-hr"></div>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="merch-ttl">
          Характеристики
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="merch-row-group">
          <div class="merch-row">
            <div class="merch-row-name">
              Размер порции:
            </div>
            <div class="merch-row-item">
              28 г
            </div>
          </div>
          <div class="merch-row">
            <div class="merch-row-name">
              Размер порции:
            </div>
            <div class="merch-row-item">
              28 г
            </div>
          </div>
        </div>
        <div class="merch-row-group">
          <div class="merch-row">
            <div class="merch-row-name">
              Размер порции:
            </div>
            <div class="merch-row-item">
              28 г
            </div>
          </div>
          <div class="merch-row">
            <div class="merch-row-name">
              Размер порции:
            </div>
            <div class="merch-row-item">
              28 г
            </div>
          </div>
        </div>
        <div class="merch-row-group">
          <div class="merch-row">
            <div class="merch-row-name">
              Размер порции:
            </div>
            <div class="merch-row-item">
              28 г
            </div>
          </div>
          <div class="merch-row">
            <div class="merch-row-name">
              Размер порции:
            </div>
            <div class="merch-row-item">
              28 г
            </div>
          </div>
        </div>
        <div class="merch-row-group">
          <div class="merch-row">
            <div class="merch-row-name">
              Размер порции:
            </div>
            <div class="merch-row-item">
              28 г
            </div>
          </div>
          <div class="merch-row">
            <div class="merch-row-name">
              Размер порции:
            </div>
            <div class="merch-row-item">
              28 г
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="merch-hr"></div>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="merch-ttl">
          Отзывы
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="merch-feed">
          <div class="merch-feed-header">
            <div class="merch-feed-name">
              Алексей
              <span class="merch-feed-raiting"> 
                <b-form-rating></b-form-rating>
              </span>
            </div>
            <div class="merch-feed-date">
              03.03.2021
            </div>
          </div>
          <div class="merch-feed-info">
            Мне понравился протеин PURE WHEY, отлично растворяется и приятно пьется. По вкусу как шоколадка, в составе хорошие натуральные ингредиенты, поэтому и легко организм принимает.
          </div>
        </div>
        <div class="merch-feed">
          <div class="merch-feed-header">
            <div class="merch-feed-name">
              Алексей
              <span class="merch-feed-raiting"> 
                <b-form-rating></b-form-rating>
              </span>
            </div>
            <div class="merch-feed-date">
              03.03.2021
            </div>
          </div>
          <div class="merch-feed-info">
            Мне понравился протеин PURE WHEY, отлично растворяется и приятно пьется. По вкусу как шоколадка, в составе хорошие натуральные ингредиенты, поэтому и легко организм принимает.
          </div>
        </div>
      </div>
    </div>
    <div class="merch-hr"></div>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="merch-ttl">
          Рекомендации по применению
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="merch-descr">
          <p>
            Рекомендуем принимать 1-2 порции в день. В тренировочные дни: одна порция после тренировки, вторая между приемами еды. В не тренировочные дни: одна порция вечером.
          </p>
        </div>
      </div>
    </div>
    <h2>Customers also buy</h2>
    <ProductsList :products="product.alsoBuyProducts" />
    <h2>Interesting goods</h2>
    <ProductsList :products="product.interestingProducts" />
  </div>
</template>

<script>
import BuyButton from '~~/components/common/BuyButton'
import ProductsList from '~~/components/common/ProductsList'
import { mapState } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    BuyButton,
    ProductsList,
    VueSlickCarousel
  },
  async asyncData ({ app, params, route, error }) {
    try {
      await app.store.dispatch('getCurrentProduct', { route })
    } catch (err) {
      console.log(err)
      return error({
        statusCode: 404,
        message: 'Товар не найдена или сервер не доступен'
      })
    }
  },
  computed: {
    ...mapState({
      product: 'currentProduct'
    })
  },
  head () {
    return {
      title: this.product.pTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.pMetaDescription
        }
      ]
    }
  },
  data() {
    return {
      selected1: null,
      selected2: null
    }
  }
}
</script>
<style lang="scss" module>
</style>
