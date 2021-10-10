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
                <div class="group-left">
                    <div class="group-ttl">
                        {{pageTitle}}
                    </div>
                </div>
                <div class="group-right">
                    <div class="blog-cat">
                        <div class="blog-cat-ttl">
                            Категории:
                        </div>
                        <button class="blog-cat-item"
                            :class="$route.query.category === category.slug ? 'active' : ''"
                            type="button"
                            v-for="category in categories"
                            :key="category.id"
                            @click="categoryClickHandler($event, category.slug)">
                            {{category.title}}
                        </button>
                    </div>
                </div>
            </div>
            <div class="merch-hr merch-hr--plp"></div>
            <div class="row">
                <div class="col-md-4"
                    v-for="article in categoryArticles"
                    :key="article.id">
                    <div class="blog-item">
                        <div class="blog-item-image">
                            <img :src="article.image"/>
                        </div>
                        <div class="blog-item-badge">
                            {{article.category}}
                        </div>
                        <a :href="'blog/'+article.slug" @click.prevent="openArticle(article.slug)" class="blog-item-ttl">
                            {{article.title}}
                        </a>
                        <div class="blog-item-info">
                            {{getFormattedDescription(article.announce)}}
                        </div>
                        <div class="blog-item-date">
                            {{formatDate(article.created)}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-pagination" v-if="pagination.rows">
                <b-pagination 
                    pills
                    align="center"
                    @change="onPaginationChange"
                    v-model="currentPage"
                    :total-rows="pagination.rows"
                    :per-page="pagination.perPage"></b-pagination>
            </div>
        </div>
    </div>
</template>


<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
import formatDate from '../../utils/formatDate'
import { isEmpty } from 'lodash'

export default {
    components: {
    },
    async asyncData({store, route}) {
        const params = {
            category: route.query.category ? route.query.category : null,
            page: route.query.page ? route.query.page : null
        };

        await store.dispatch('blog/fetchCategories')
        await store.dispatch('blog/fetchCategoryArticles', params)
    },
    data: () => ({
        pageTitle: 'Статьи',
    }),
    computed: {
        ...mapGetters({
            categories: 'blog/categories',
            categoryArticles: 'blog/categoryArticles',
            pagination: 'blog/pagination',
        }),
        currentPage: {
            get () {
                return this.$store.state.blog.pagination.currentPage
            },
            set (value) {
                this.$store.commit('blog/UPDATE_CURRENT_PAGE', value)
            }
        }
    },
    methods: {
        ...mapMutations({
            updateCurrentPage: 'blog/UPDATE_CURRENT_PAGE'
        }),
        openArticle(slug) {
            this.$router.push(`blog/${slug}`);
        },
        categoryClickHandler (event, slug) {
            this.$router.push({query: {category: slug}})

            const params = {
                category: slug,
                page: 1
            }
            this.$store.dispatch('blog/fetchCategoryArticles', params)
        },
        getFormattedDescription(desc) {
            let formattedDesc = desc;
            const maxLength = 96;
            if(desc.length > maxLength) {
                formattedDesc = desc.slice(0, maxLength);
                formattedDesc += '...';
            }
            return formattedDesc;
        },
        onPaginationChange(page) {
            const query = this.$route.query
            this.$router.push({query: {...query, page: page}})
            this.updateCurrentPage(page);

            this.$store.dispatch('blog/fetchCategoryArticles', {...query, page: page})
        },
        formatDate,
    },
}
</script>