import prepareBreadcrumbsData from "~/utils/prepareBreadcrumbsData"

const ARTICLE_URL = 'https://aminostore.com.ua/api/article/'
const BLOG_CATEGORIES_URL = 'https://aminostore.com.ua/api/blog-categories/'
const BLOG_CATEGORY_ARTICLES_URL = 'https://aminostore.com.ua/api/articles/'

export const state = () => ({
    article: {},
    categories: [],
    categoryArticles: [],
})

export const mutations = {
    SET_ARTICLE(state, article) {
        const formattedArticle = {
            ...article,
            text: article.text.replace(/&nbsp;/g, ' ')
        } 
        state.article = formattedArticle;
    },
    SET_BLOG_CATEGORIES(state, categories) {
        state.categories = categories;
    },
    SET_BLOG_CATEGORY_ARTICLES(state, articles) {
        state.categoryArticles = articles;
    },
}

export const actions = {
    async fetchCategories({commit}) {
        const response = await this.$axios.$get(BLOG_CATEGORIES_URL)

        commit('SET_BLOG_CATEGORIES', response);
    },
    async fetchCategoryArticles ({commit, dispatch}, payload) {
        const url = `${BLOG_CATEGORY_ARTICLES_URL}?category=${payload.category || ''}&page=${payload.page || 1}`
        const response = await this.$axios.$get(url)
        const articles = response.results;
        const pagination = {
            currentPage: payload.page || 1,
            count: response.count,
            next: response.next,
            previous: response.previous,
        };
        const crumbs = prepareBreadcrumbsData('blog', null, {title: 'Статьи', slug: 'blog'});

        commit('SET_BLOG_CATEGORY_ARTICLES', articles);
        commit('SET_PAGE_PAGINATION', pagination, {root: true});
        dispatch('setBreadcrumbs', crumbs, { root: true } )
    },
    async fetchArticle({commit}, payload) {
        const url = ARTICLE_URL + payload.slug;
        const response = await this.$axios.$get(url)
        const article = await response;

        commit('SET_ARTICLE', article);

    }
}

export const getters = {
    article: state => state.article,
    categories: state => state.categories,
    categoryArticles: state => state.categoryArticles,
}