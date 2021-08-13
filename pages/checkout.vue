<template>
    <div>
        <div class="container">
            <div class="breadcrumbs">
                <ul>
                    <li>
                    <a href="/">Main</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container">
            <div class="group">
                <div class="group-ttl">
                    Оформить заказ
                </div>
            </div>
            <div class="merch-hr"></div>
            <div class="row checkout-row">
                <div class="col-sm-3">
                    <div class="checkout-ttl">
                        Персональные данные
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="checkout-input">
                        <label for="name">Имя*</label>
                        <b-form-input id="name" placeholder="Ваше имя"></b-form-input>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="checkout-input">
                        <label for="surname">Фамилия*</label>
                        <b-form-input id="surname" placeholder="Ваше фамилия"></b-form-input>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="checkout-input checkout-input--phone">
                        <label for="phone">Телефон*</label>
                        <b-form-input class="checkout-input=code" id="codephone">+380</b-form-input>
                        <b-form-input id="phone"></b-form-input>
                    </div>
                </div>
            </div>
            <div class="merch-hr"></div>
            <div class="row checkout-row">
                <div class="col-sm-3">
                    <div class="checkout-ttl">
                        Условия Доставки
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="checkout-select">
                        <label for="select-field">Область*</label>
                        <b-form-select v-model="selectfield" placeholder="Выберите область"  id="select-field">
                            <b-form-select-option :value="null">Выберите область</b-form-select-option>
                            <b-form-select-option value="a">Option A</b-form-select-option>
                            <b-form-select-option value="b">Option B</b-form-select-option>
                        </b-form-select>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="checkout-select">
                        <label for="select-city">Город*</label>
                        <b-form-select v-model="selectcity" placeholder="Выберите город"  id="select-city">
                            <b-form-select-option :value="null">Выберите город</b-form-select-option>
                            <b-form-select-option value="a">Option A</b-form-select-option>
                            <b-form-select-option value="b">Option B</b-form-select-option>
                        </b-form-select>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="checkout-select">
                        <label for="select-post">Новая почта*</label>
                        <b-form-select v-model="selectpost" placeholder="Выберите отделение"  id="select-post">
                            <b-form-select-option :value="null">Выберите отделение</b-form-select-option>
                            <b-form-select-option value="a">Option A</b-form-select-option>
                            <b-form-select-option value="b">Option B</b-form-select-option>
                        </b-form-select>
                    </div>
                </div>
            </div>
            <div class="merch-hr"></div>
            <div class="checkout-checkbox">
                <Checkbox title="Перезвонить для подтверждения заказа" />
            </div>
            <div class="checkout-btns">
                <b-button variant="primary">Оформить заказ</b-button>
                <b-button variant="outline-primary">Заказать в один клик</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import Checkbox from '~~/components/common/Checkbox'

export default {
    components: {
        Checkbox
    },
    data() {
        return {
            selectfield: null,
            selectcity: null,
            selectpost: null
        }
    }
}
</script>