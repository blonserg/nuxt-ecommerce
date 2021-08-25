<template>
    <div class="navigation-dropdown" :class="{ active: isExpandedDropdown }">
        <div class="navigation-dropdown-inner">
            <a class="navigation-dropdown-back" href="" aria-role="button" @click="hideDropdown" title="back"><span class="navigation-item-arrow"><</span>Все</a>
            <ul class="navigation-dropdown-list row">
                <li class="navigation-dropdown-list-item col" v-for="item in dropdownData" :key="item.id" >
                    <!-- Navigation dropdown item with dropdown -->
                    <a v-if="item.items"
                        :href="item.url"
                        class="navigation-dropdown-link"
                        @click="toggleSublist($event, `${currentDropdownId}-${item.id}-sublist`)">
                        {{ item.title }} <span class="navigation-item-arrow">></span>
                    </a>
                    <!-- EO Navigation dropdown item with dropdown -->
                    <!-- Navigation dropdown item without dropdown -->
                    <a v-else
                        :href="item.url"
                        class="navigation-dropdown-link">
                        {{ item.title }}
                    </a>
                    <!-- EO Navigation dropdown item without dropdown -->
                    <!-- Navigation sublist content -->
                    <div class="navigation-dropdown-anchestor" :id="`${currentDropdownId}-${item.id}-sublist`"
                        :class="{ active: expandedSublist === `${currentDropdownId}-${item.id}-sublist`}">
                        <a class="navigation-dropdown-back" href="" aria-role="button" @click="hideSublist" title="back"><span class="navigation-item-arrow"><</span>{{ item.title }}</a>
                        <ul v-if="item.items"
                            class="navigation-dropdown-sublist">
                            <li class="nav-item"
                                v-for="sublistItem in item.items"
                                :key="sublistItem.id">
                                <a class="nav-link" :href="sublistItem.url">{{sublistItem.title}}</a>
                            </li>
                        </ul>
                    </div>
                    <!-- EO Navigation sublist content -->
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        dropdownData: {
            type: Array,
            required: true
        },
        isExpandedDropdown: {
            type: Boolean
        },
        currentDropdownId: {
            type: String
        },
        expandedSublist: {
            type: String,
        }
    },
    data() {
        return {
        }
    },
    methods: {
        hideDropdown(e) {
            e.preventDefault();
            this.$emit('hideDropdownNav');
        },
        hideSublist(e) {
            e.preventDefault();
            this.$emit('hideSublistNav');
        },
        toggleSublist(e, sublistId) {
            this.$emit('toggleSublist', e, sublistId)
        },
    }
}
</script>