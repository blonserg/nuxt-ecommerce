<template>
    <div>
        <div class="container">
            <div class="checkout-back">
                <LinkMore :text="'Назад'" :direction="'left'" :href="'/'"></LinkMore>
            </div>
            <div class="checkout-finish-ttl">
                Заказать в один клик
            </div>
            <div class="checkout-finish-txt">
                Оставьте Ваш номер телефона и наш менеджер перезвонит Вам в ближайшее время, для уточнения деталей заказа
            </div> 
            <div class="checkout-finish-input checkout-input checkout-input--phone">
                <div>
                    <label for="phone">Телефон*</label>
                    <VuePhoneNumberInput
                        v-model="phoneNumber"
                        show-code-on-list
                        default-country-code="UA"
                        :no-flags="true"
                        :translations="{
                            countrySelectorLabel: 'Код страны',
                            countrySelectorError: 'Choisir un pays',
                            phoneNumberLabel: 'Номер телефона',
                            example: 'Пример :'
                        }"
                    />
                </div>
                <b-button variant="primary">Отправить</b-button>
            </div> 
        </div>
    </div>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import LinkMore from '~~/components/common/LinkMore'

export default {
    components: {
        VuePhoneNumberInput,
        LinkMore
    },
    data() {
        return {
            selectfield: null,
            selectcity: null,
            selectpost: null,
            phoneNumber: null
        }
    }
}
</script>