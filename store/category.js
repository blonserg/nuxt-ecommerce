import prepareBreadcrumbsData from "~/utils/prepareBreadcrumbsData";
const CATEGORY_PRODUCTS_URL = 'https://aminostore.com.ua/api/category/';

export const state = () => ({
    currentCategory: {},
    categoryProducts: [],
    pagination: null,
})

export const mutations = {
    SET_CATEGORY_PRODUCTS (state, data) {
        const products = data.map((product) => {
            return {
                ...product,
                image: `https://aminostore.com.ua/media/${product.image}`
            };
        });
        state.categoryProducts = products
    },
    SET_CURRENT_CATEGORY (state, categoryData) {
        state.currentCategory = {
            id: categoryData.id,
            title: categoryData.title,
            slug: categoryData.slug
        }
    },
}

export const actions = {
    async getCategoryProducts({commit, dispatch}, { route }) {
        try {
            const url = CATEGORY_PRODUCTS_URL + route.params.CategorySlug
            const response = await this.$axios.$get(url)
            
            const crumbs = prepareBreadcrumbsData('category', route, response);
    
            commit('SET_CATEGORY_PRODUCTS', response.products)
            commit('SET_CURRENT_CATEGORY', response)
            dispatch('setBreadcrumbs', crumbs, { root: true } )
        }catch(e) {
            throw new Error(e);
        }
    }
}

export const getters = {
    category: state => state.currentCategory,
    categoryProducts: state => state.categoryProducts,
    pagination: state => state.pagination
}