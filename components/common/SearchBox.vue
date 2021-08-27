<template>
    <div class="search-block header-inner--search" @click="onClickSarchBox" v-click-outside="hideSearchBox">
        <VueTypeaheadBootstrap
            class="search"
            v-model="query"
            :data="autocompleteProducts"
            :serializer="item => item.login"
            @hit="selectedProduct = $event"
            @input="searchProducts"
            :minMatchingChars="minChars"
            placeholder="Поиск"
            highlightClass="special-highlight-class"
            :disabledValues="(selectedProduct ? [selectedProduct.login] : [])">
            <template slot="suggestion" slot-scope="{ data, htmlText }">
                <div class="d-flex align-items-center">
                    <div class="search-item-image">
                    <img
                        class="rounded-circle"
                        :src="data.avatar_url"
                        style="width: 20px; height: auto;" />
                    </div>
                    <span class="search-item-title" v-html="htmlText"></span>
                </div>
            </template>
        </VueTypeaheadBootstrap>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap'
import { debounce } from 'lodash'

export default {
    components: {
        VueTypeaheadBootstrap
    },
    data() {
        return {
            isFocusedSearch: false,
            query: '',
            minChars: 3,
            selectedProduct: null,
            autocompleteProducts: []
        }
    },
    methods: {
        hideSearchBox() {
            this.$emit('onHideSearchBox');
        },
        onClickSarchBox(e) {
            this.$emit('onToggleSearchBox', e);
        },
        searchProducts: debounce(function() {
            
            const isValidQuery = this.query.replace(/ /g,'').length >= this.minChars;
            // todo: move this logic from UI part and refactor with real data
            if (isValidQuery) {
                fetch(`https://api.github.com/search/users?q=${this.query}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.autocompleteProducts = data.items;
                })
            }
            
      }, 500)
    },
    directives: {
        ClickOutside
    }
}
</script>