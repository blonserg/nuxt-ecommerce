const FILTERS_URL = 'https://aminostore.com.ua/api/filter-options/';
const APPLIED_FILTERS_URL = 'https://aminostore.com.ua/api/products/';

export const state = () => ({
    filters: [],
});

export const mutations = {
    SET_FILTERS (state, filters) {
        // create price range filter
        const priceRangeFilter = {
            title: 'Цена',
            slug: 'price-range',
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
        // Create other filters with checkboxes
        const formattedFilters = filters.filter((filter) => {
            let formattedFilter = filter;
            let hasResults = filter.results && filter.results.length > 0;

            // Create filters with boolean type, receaves: ['filter1', 'filter2'] and convert into [{id, title, slug}]
            if(hasResults && typeof filter.results[0] === 'string') {
                if (filter.title === "Скидки") {
                    formattedFilter.slug = 'promotions';
                }
                else if (filter.title === "Для мужчин и для женщин") {
                    formattedFilter.slug = 'gender';
                }
                const items = filter.results.map((item, idx) => {
                    return {
                        id: idx,
                        title: item,
                        slug: item,
                    }
                });
                formattedFilter.results = items;
            }

            // use ids when filters don't have slugs (temporary code) 
            formattedFilter = formattedFilter.results.map((item) => {
                if(!item.slug) {
                    item.slug = String(item.id); 
                }
                return item;
            });

            return formattedFilter;
        });

        // add price range filter
        state.filters.push(priceRangeFilter);

        // add other filters
        state.filters = [
            ...state.filters,
            ...formattedFilters
        ]
    },
    UPDATE_PRICE_RANGE_VALUE(state, {value, filterIdx}) {
        state.filters[filterIdx].priceRange.currentRange = value;
    }
}

export const actions = {
    async fetchFilters({commit, dispatch}) {
        try {
            const response = await this.$axios.$get(FILTERS_URL)
            await commit('SET_FILTERS', response);
        } catch(err) {
            console.error(err);
        }
    },
    async fetchProductsWithFilters({commit, dispatch}, payload) {
        try {
            const url = APPLIED_FILTERS_URL + payload.query;
            const response = await this.$axios.$get(url);

            commit('category/SET_CATEGORY_PRODUCTS', response.results, { root: true });
        } catch(err) {
            console.error(err);
        }
    },
}

export const getters = {
    filters: state => state.filters,
}