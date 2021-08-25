<template>
    <nav>
        <ul class="nav navigation">
            <li class="nav-item navigation-item" v-for="navItem in navigationData" :key="navItem.id">
                <!-- Navigation item with dropdown -->
                <a v-if="navItem.items"
                    :href="navItem.url"
                    class="nav-link navigation-link"
                    @click="handleDropdown($event, `${navItem.id}-dropdown`)">
                    {{ navItem.title }} <span class="navigation-item-arrow">></span>
                    <i class="navigation-link-icon" aria-hidden="true" v-if="navItem.icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#BDBDBD" xmlns="http://www.w3.org/2000/svg">
                            <rect width="7" height="7" rx="2"/>
                            <rect x="9" width="7" height="7" rx="2"/>
                            <rect y="9" width="7" height="7" rx="2"/>
                            <rect x="9" y="9" width="7" height="7" rx="2"/>
                        </svg>
                    </i>
                </a>
                <!-- EO Navigation item with dropdown -->
                <!-- Navigation item without dropdown -->
                <a v-else :href="navItem.url" class="nav-link navigation-link">
                    {{ navItem.title }}
                </a>
                <!-- EO Navigation item without dropdown -->
                <!-- Navigation dropdown content -->
                 <NavDropdown
                    :id="`${navItem.id}-dropdown`"
                    v-if="navItem.items"
                    v-bind:dropdownData="navItem.items"
                    :currentDropdownId="`${navItem.id}-dropdown`"
                    :isExpandedDropdown="expandedDropdown === `${navItem.id}-dropdown`"
                    :expandedSublist="expandedSublist"
                    v-on:hideDropdownNav="collapseDropdown"
                    v-on:hideSublistNav="collapseSublist"
                    v-on:toggleSublist="handleSublist"
                    />
                <!-- EO Navigation dropdown content -->
            </li>
        </ul>
    </nav>
</template>

<script>
import NavDropdown from '~~/components/common/NavDropdown'

export default {
    components: {
        NavDropdown
    },
    props: {
        navigationData: {
            type: Array,
            required: true
        },
        isOpenedNav: {
            type: Boolean
        }
    },
    watch: { 
      	isOpenedNav: function(newVal) {
          if(!newVal) {
              this.expandedDropdown = '',
              this.expandedSublist = ''
          }
        }
    },
    data() {

        return {
            expandedDropdown: '',
            expandedSublist: '',
        }
    },
    computed: {
    },
    methods: {
        collapseDropdown() {
            this.expandedSublist = '';
            this.expandedDropdown = '';
        },
        collapseSublist() {
            this.expandedSublist = '';
        },
        handleDropdown(e, dropdownId) {
            if(!this.$breakpoints.lMd) {
                e.preventDefault();
                if(this.expandedDropdown !== dropdownId) {
                this.expandedDropdown = dropdownId;
                }else {
                this.expandedDropdown = '';
                }
                return;
            }
        },
        handleSublist(e, sublistId) {
            if(!this.$breakpoints.lMd) {
                e.preventDefault();
                if(this.expandedSublist !== sublistId) {
                    this.expandedSublist = sublistId;
                } else {
                    this.expandedSublist = '';
                }
                return;
            }
        }
    },
}

</script>
