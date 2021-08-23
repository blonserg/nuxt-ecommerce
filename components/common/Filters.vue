<template>
    <b-collapse :visible="toggleExpandingFiltersOnResize" id="filters">        
        <div class="filter">
            <div v-b-toggle.collapse-1 class="filter-header">
                Цена
                <img class="filter-header-ico" src="@/assets/svg/arrow-filter.svg" alt="">
            </div>
            <b-collapse :visible="false" id="collapse-1">
                <div class="filter-inner">
                <Slider v-model="priceRange.currentRange" :min="priceRange.minValue" :max="priceRange.maxValue" :tooltips="false" />
                <div class="filter-range">
                    <div class="filter-range-from">
                    <span>от</span> {{ priceRange.currentRange[0] }} <span>{{ priceRange.format.prefix }}</span>
                    </div>
                    <div class="filter-range-to">
                    <span>до</span> {{ priceRange.currentRange[1] }} <span>{{ priceRange.format.prefix }}</span>
                    </div>
                </div>
                </div>
            </b-collapse>
        </div>
        <div class="filter">
            <div v-b-toggle.collapse-2 class="filter-header">
                Наличие
                <img class="filter-header-ico" src="@/assets/svg/arrow-filter.svg" alt="">
            </div>
            <b-collapse visible id="collapse-2">
                <div class="filter-inner">
                <Checkbox title="Есть в наличие" />
                </div>
            </b-collapse>
        </div>
        <div class="filter">
            <div v-b-toggle.collapse-3 class="filter-header">
                Бренды
                <img class="filter-header-ico" src="@/assets/svg/arrow-filter.svg" alt="">
            </div>
            <b-collapse visible id="collapse-3">
                <div class="filter-inner">
                <Checkbox title="Biotech" />
                <Checkbox title="Biotech" />
                <Checkbox title="Biotech" />
                <Checkbox title="BiotechUSA" />
                </div>
            </b-collapse>
        </div>
        <div class="filter">
            <div v-b-toggle.collapse-4 class="filter-header">
                Виды протеина
                <img class="filter-header-ico" src="@/assets/svg/arrow-filter.svg" alt="">
            </div>
            <b-collapse visible id="collapse-4">
                <div class="filter-inner">
                <Checkbox title="Сывороточный" />
                <Checkbox title="Соевый" />
                <Checkbox title="Казеиновый" />
                <Checkbox title="Сывороточный" />
                <Checkbox title="Говяжий" />          
                <b-collapse id="collapse-in">
                    <Checkbox title="Молочный" />  
                    <Checkbox title="Сывороточный" />  
                </b-collapse>
                <div v-b-toggle.collapse-in class="filter-inner-header">
                    Показать все
                    <img class="filter-inner-ico" src="@/assets/svg/arrow-right.svg" alt="">
                    </div>
                </div>
            </b-collapse>
        </div>
    </b-collapse>
</template>

<script>
import Checkbox from '~~/components/common/Checkbox'
import Slider from '@vueform/slider/dist/slider.vue2'

export default {
    components: {
        Checkbox,
        Slider
    },
    data() {
        return {
            isVisibleFilters: false,
            priceRange: {
                currentRange: [350, 1500],
                maxValue: 3000,
                minValue: 100,
                format: {
                prefix: '₴',
                decimals: 2
                }
            },
        }
    },
    computed: {
        toggleExpandingFiltersOnResize() {
            // Filters is visible by default on tablets and desktops and collapsed on mobiles by default
            return this.isVisibleFilters = this.$breakpoints.lMd;
        },
    },
    methods: {
    }
}
</script>