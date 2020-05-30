<template>
<div class="row">
    <div style="col-xl-3 col-lg-3 hidden-md hidden-sm pull-left category-wrapper;" >
        <div class="categori-menu" @mouseleave="show_menu = false">
            <p @mouseover="show_menu = true" style="font-size: 23px;font-weight: 600;padding: 10px; color: #fff">
                <span>
                    <VIcon color="white">menu</VIcon>
                </span>
                Categories
            </p>
            <!-- <ul class="categori-menu-list menu-hidden" style="display: block;" v-show="show_menu">
                <li v-for="(item, index) in menus.data" :key="index">
                    <a href="#">{{ item.menu }}<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                    <ul class="ht-dropdown megamenu first-megamenu" style="width: auto;">

                        <li class="single-megamenu" v-for="(category, index) in item.categories" :key="index">

                            <ul>
                                <v-layout row wrap>
                                    <v-flex sm3>
                                        <li style="cursor:pointer" class="menu-tile" @click="gotoCat(category.id)">{{ category.category }}</li>
                                        <li style="cursor:pointer; color: black;" v-for="subcat in category.subcategories" :key="subcat.id" @click="gotoSub(subcat.id)">{{ subcat.subcategory }}</li>
                                    </v-flex>
                                </v-layout>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul> -->
        </div>
    </div>
    <div class="col-md-6">
        <!-- <mySearch /> -->

    </div>
</div>
</template>

<script>
// import mySearch from './Search'
export default {
    components: {
        // mySearch,
    },
    data() {
        return {
            show_menu: false,
        }
    },
    methods: {
        showMenu() {
            this.show_menu = true
            // this.show_menu = !this.show_menu
        },

        gotoSub(item) {
            $nuxt.$emit("progressEvent");
            $nuxt.$emit("goToSubEvent", item);
            this.$router.push({
                name: "Category",
                params: {
                    id: item,
                    type: "subcat"
                }
            });
            // $nuxt.$emit("gotoSUbcatEvent", item);
        },
        gotoCat(item) {
            $nuxt.$emit("progressEvent");
            $nuxt.$emit("goToCatEvent", item);
            this.$router.push({
                name: "Category",
                params: {
                    id: item,
                    type: "cat"
                }
            });
            // $nuxt.$emit("gotoCatEvent", item);
        },

        async getCategory() {
            var payload = {
                model: 'categories',
                update: 'updateCategoryList',
            }
            await this.$store.dispatch('getItems', payload)
        },

        async getMenu() {

            var payload = {
                model: 'menu',
                update: 'updateMenuList',
            }

            await this.$store.dispatch('getItems', payload)
        },
    },
    computed: {
        menus() {
            return this.$store.getters.menu
        },
        categories() {
            return this.$store.getters.categories
        },
    },
}
</script>

<style scoped>
.categori-menu {
    margin-left: 140px !important;
}
</style>
