<template>
    <b-collapse :visible="toggleExpandingFiltersOnResize" id="filters">
        <b-form ref="filters-form" id="filters-form" @submit.prevent="submitHandler">
            <div :class="`filter ${filter.slug}-${idx}`" v-for="(filter, idx) in filters">
                <div v-b-toggle="`collapse-${idx}`" class="filter-header">
                    {{ filter.title }}
                    <img class="filter-header-ico" src="@/assets/svg/arrow-filter.svg" alt="">
                </div>
                <b-collapse :visible="false" :id="`collapse-${idx}`">
                    <!-- BEGIN Filter PRICE RANGE -->
                    <div class="filter-inner" v-if="filter.priceRange">
                        <input type="hidden" name="price-range[max_price]" :value="filter.priceRange.currentRange[0]">
                        <input type="hidden" name="price-range[min_price]" :value="filter.priceRange.currentRange[1]">
                        <Slider :value="filter.priceRange.currentRange" @change='updateSlider(filter.priceRange.currentRange, idx, $event)' :min="filter.priceRange.minValue" :max="filter.priceRange.maxValue" :tooltips="false" />
                        <div class="filter-range">
                            <div class="filter-range-from">
                            <span>от</span> {{ filter.priceRange.currentRange[0] }} <span>{{ filter.priceRange.format.prefix }}</span>
                            </div>
                            <div class="filter-range-to">
                            <span>до</span> {{ filter.priceRange.currentRange[1] }} <span>{{ filter.priceRange.format.prefix }}</span>
                            </div>
                        </div>
                    </div>
                    <!-- END Filter PRICE RANGE -->
                    <!-- BEGIN Filter CHECKBOX -->
                    <!-- checkboxes collapsed -->
                    <div class="filter-inner" v-if="filter.results && filter.results.length > 0 && filter.results.length <= amountExpandedFilterValues">
                        <template v-for="(option, index) in filter.results">
                            <label class="control control-checkbox" :key="option.id">
                                <span class="control-checkbox-txt">{{ option.title }}</span>
                                    <input type="checkbox" v-model="formData[filter.slug]" :checked="false" :value="option.slug" @change="changeHandler"/>
                                <div class="control_indicator"></div>
                            </label>
                        </template>
                    </div>
                    <!-- checkboxes expanded -->
                    <div class="filter-inner" v-if="filter.results && filter.results.length > amountExpandedFilterValues">
                        <label class="control control-checkbox" v-for="(option, index) in filter.results.slice(0, amountExpandedFilterValues+1)" :key="option.id">
                            <span class="control-checkbox-txt">{{ option.title }}</span>
                                <input type="checkbox" v-model="formData[filter.slug]" :checked="false" :value="option.slug" @change="changeHandler"/>
                            <div class="control_indicator"></div>
                        </label>
                        <b-collapse :id="`collapse-child-${idx}`">
                            <label class="control control-checkbox" v-for="(option, index) in filter.results.slice(amountExpandedFilterValues+1)" :key="option.id">
                                <span class="control-checkbox-txt">{{ option.title }}</span>
                                    <input type="checkbox" v-model="formData[filter.slug]" :checked="false" :value="option.slug" @change="changeHandler"/>
                                <div class="control_indicator"></div>
                            </label>
                        </b-collapse>
                        <div v-b-toggle="`collapse-child-${idx}`" class="filter-inner-header">
                            Показать все
                            <img class="filter-inner-ico" src="@/assets/svg/arrow-right.svg" alt="">
                        </div>
                    </div>
                </b-collapse>
            </div>
            <button type="submit" ref="submitButton" style="display: none">Foo</button>
        </b-form>
    </b-collapse>
</template>

<script>
import Slider from '@vueform/slider/dist/slider.vue2'
import debounce from 'lodash.debounce'
import prepareFilterQueries from '~/utils/prepareFilterQueries'
import {mapMutations} from 'vuex'


export default {
    components: {
        Slider,
    },
    props: {
        filters: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            isVisibleFilters: false,
            amountExpandedFilterValues: 3,
            formData: {...this.prepareInitialFormData(this.filters)},
        }
    },
    computed: {
        toggleExpandingFiltersOnResize() {
            // Filters is visible by default on tablets and desktops and collapsed on mobiles by default
            return this.isVisibleFilters = this.$breakpoints.lMd;
        },
    },
    methods: {
        ...mapMutations({
            updatePriceRange: 'filters/UPDATE_PRICE_RANGE_VALUE' 
        }),
        updateSlider(value, idx, event) {
            this.formData['price-range'] = event; 
            this.updatePriceRange({value: event, filterIdx: idx});
            this.$refs.submitButton.click();
        },
        prepareInitialFormData(filters) {
            let formData = {};
            filters.forEach((filter) => {
                if(!formData[filter.slug]) {
                    formData[filter.slug] = []
                };
            });
            return formData;
        },
        submitHandler: debounce(function submitHandler (event) {
            event.preventDefault();
            const query = prepareFilterQueries(this.formData);
            // todo: implement adding query params to url
            // this.$router.push(query);
            this.$store.dispatch('filters/fetchProductsWithFilters', { query });
        }, 1000),
        changeHandler() {
            this.$refs.submitButton.click();
        },
    }
}
</script>