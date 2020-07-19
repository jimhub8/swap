<template>
<div id="shop_theme">
    <headerP></headerP>
    <div v-show="loader" style="text-align: center; width: 100%; margin-top: 200px;">
        <v-progress-circular :width="3" indeterminate color="red" style="margin: 1rem"></v-progress-circular>
    </div>
    <section class="bgwhite p-t-55 p-b-65" v-show="!loader">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3 p-b-50">
                    <div class="leftbar p-r-20 p-r-0-sm">
                        <!--  -->
                        <!-- <h4 class="m-text14 p-b-7">Categories</h4> -->
                        <myMobileFilter v-if="isMobile" />
                        <myFilter v-else />
                    </div>
                </div>

                <div class="col-sm-6 col-md-8 col-lg-9 p-b-50">
                    <!--  -->
                    <div class="flex-sb-m flex-w p-b-35">
                        <span class="s-text8 p-t-5 p-b-5">Showing page {{ products.current_page }} of {{ products.last_page }} pages</span>
                        <v-btn text icon color="success" @click="filter">
                          <v-icon>mdi-filter-variant</v-icon>
                        </v-btn>
                    </div>

                    <!-- Product -->
                    <div class="row" v-if="products.data.length > 0">
                        <div class="col-sm-12 col-md-6 col-lg-4 p-b-50" v-for="product in products.data" :key="product.id">
                            <!-- Block2 -->
                            <div class="block2">
                                <div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew" v-if="product.new_product === 1">
                                    <!-- <img :src="product.image" alt="IMG-PRODUCT"> -->

                                    <div class="block2-overlay trans-0-4">
                                        <v-tooltip bottom style="margin-left: 90%;" v-if="product.wish_list === 1">
                                            <v-btn icon class="mx-0 block2-btn-addwishlist hov-pointer trans-0-4" slot="activator" @click="addToWish(product.id)" style="margin-top: -20px;float: right;">
                                                <v-icon color="pink darken-2" large>favorite</v-icon>
                                            </v-btn>
                                            <span>Wish list</span>
                                        </v-tooltip>

                                        <v-tooltip bottom style="margin-left: 90%;" v-else>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn icon v-bind="attrs" v-on="on" @click="addToWish(product.id)" class="mx-0 block2-btn-addwishlist hov-pointer trans-0-4" style="margin-top: -20px;float: right;">
                                                    <v-icon color="grey lighten-1">mdi-heart</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Add to Wish list</span>
                                        </v-tooltip>

                                        <div class="block2-btn-addcart w-size1 trans-0-4" style="text-align: center;">
                                            <!-- Button -->

                                            <v-tooltip top>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn icon v-bind="attrs" v-on="on" @click="addToCart(product)">
                                                        <v-icon color="grey lighten-1">mdi-cart</v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Add to Cart</span>
                                            </v-tooltip>
                                        </div>
                                    </div>
                                </div>

                                <div class="block2-img wrap-pic-w of-hidden pos-relative" v-else>
                                    <!-- <img :src="product.image" alt="IMG-PRODUCT"> -->
                                    <img v-lazy="product.image" src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png" :alt="product.product_name" @error="imageUrlAlt" />

                                    <div class="block2-overlay trans-0-4">
                                        <v-tooltip bottom style="margin-left: 90%;" v-if="product.wish_list === 1">
                                            <v-btn icon class="mx-0 block2-btn-addwishlist hov-pointer trans-0-4" slot="activator" @click="addToWish(product.id)" style="margin-top: -20px;float: right;">
                                                <v-icon color="pink darken-2" large>favorite</v-icon>
                                            </v-btn>
                                            <span>Wish list</span>
                                        </v-tooltip>

                                        <v-tooltip bottom style="margin-left: 90%;" v-else>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn icon v-bind="attrs" v-on="on" @click="addToWish(product.id)" class="mx-0 block2-btn-addwishlist hov-pointer trans-0-4" style="margin-top: -20px;float: right;">
                                                    <v-icon color="grey lighten-1">mdi-heart</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Add to Wish list</span>
                                        </v-tooltip>

                                        <div class="block2-btn-addcart w-size1 trans-0-4" style="text-align: center;">
                                            <!-- Button -->
                                            <!-- <v-btn color="primary" @click="addToCart(product)">Add to Cart</v-btn> -->

                                            <v-tooltip top>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn icon v-bind="attrs" v-on="on" @click="addToCart(product)">
                                                        <v-icon color="grey lighten-1">mdi-cart</v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Add to Cart</span>
                                            </v-tooltip>
                                        </div>
                                    </div>
                                </div>

                                <div class="block2-txt p-t-20">
                                    <nuxt-link :to="buildUrl(product)">
                                        <button class="block2-name dis-block s-text3 p-b-5">{{ product.product_name }}</button>
                                        <span class="block2-price m-text6 p-r-5">{{ product.price }}</span>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-else>
                        <p class="text-center" style="background: #f2dede; font-size: 13px; color: #a94442 !important;">No products available</p>
                    </div>
                </div>
                <div class="text-xs-center" style="margin: auto; width: 100%;" v-if="products.last_page > 1">
                    <v-pagination v-model="products.current_page" :length="products.last_page" total-visible="6" @input="next(products.path, products.current_page, 'products')" circle></v-pagination>
                </div>
            </div>
        </div>
    </section>
    <myVariants></myVariants>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
import headerP from "../../components/include/Headerpartial";
import myFilter from '../../components/Shop/details/filter'

import myMobileFilter from '../../components/Shop/details/mobilefilter'

import myVariants from '../../components/home/products/variants'
export default {
    inject: ['theme'],
    name: 'cat_details',
    components: {
        headerP,
        myFilter,
        myVariants, myMobileFilter
    },
    head() {
        return {
            title: this.category.category + ' | Swap',
            meta: [{
                hid: 'description',
                name: 'description',
                content: this.category.description
            }, {
                hid: 'og:description',
                name: 'og:description',
                content: this.category.description
            }, {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: this.category.category
            }, {
                hid: 'og:title',
                name: 'og:title',
                content: this.category.category
            }, {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: this.category.description
            }]
        }
    },
    data() {
        return {
            windowWidth: null,
            form: {
                search: ""
            },
            items: [{
                    state: "All"
                },
                {
                    state: "New",
                    abbr: "new_product"
                },
                {
                    state: "Popularity",
                    abbr: "best_sell"
                },
                {
                    state: "Featured",
                    abbr: "featured"
                }
            ],
            itemSelect: {
                abbr: "All",
                state: "All"
            },
            price: [{
                    state: "All"
                },
                {
                    state: "0-500"
                },
                {
                    state: "501-1000"
                },
                {
                    state: "1000-5000"
                }
            ],
            priceSelect: {
                state: "All"
            },
            loader: false,
        };
    },

    async fetch({
        store,
        route
    }) {

        var len = route.params.id.split('-').length - 1
        var arr = route.params.id.split('-')

        var payload = {
            model: 'categories',
            update: 'updateProduct',
            id: arr[len]
        }
        await store.dispatch("showItem", payload);

        var payload = {
            model: 'category',
            update: 'CategoryList',
            id: arr[len]
        }
        await store.dispatch("showItem", payload);

        // var payload = {
        //     model: 'categories',
        //     update: 'updateCategoryList',
        //     id: id,
        // }
        // await store.dispatch('showItem', payload)
    },
    methods: {
filter() {
  $nuxt.$emit('openSheetEvent')
},
        imageUrlAlt(e) {
            event.target.src =
                "https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png";
        },
        addToCart(cart) {
            if (cart.product_variants.length > 0) {
                $nuxt.$emit('selectVariantsEvent', cart)
                // this.select_variants()
                return
            }
            cart.order_qty = 1
            $nuxt.$emit("addCartEvent", cart);
        },

        next(page) {
            $nuxt.$emit("progressEvent");
            // axios
            //     .get(this.products.path + `?page=` + this.products.current_page)
            //     .then(response => {
            //         $nuxt.$emit("StoprogEvent");
            //         this.products = response.data;
            //     })
            //     .catch(error => {
            //         $nuxt.$emit("StoprogEvent");
            //         this.errors = error.response.data.errors;
            //     });
        },
        addToWish(item) {
            $nuxt.$emit("WishListEvent", item);
        },
        buildUrl(product) {
            return '/shop/' + this.$slugify(product.id, product.product_name)
        }
    },
    mounted() {

        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
            console.log(this.isMobile)
        })
        this.windowWidth = window.innerWidth

    },
    beforeRouteLeave(to, from, next) {
        // $nuxt.$emit("progressEvent");
        next();
        window.scrollTo(0, 0);

    },

    computed: {
        ...mapState(['products', 'category']),
        isMobile() {
            return this.windowWidth <= 768
        }
    },
};
</script>

<style scoped>
.wrap-pic-w img {
    height: 300px;
}

#shop_theme .theme--dark {
    color: #0276a5 !important;
    background-color: transparent !important;
}
</style>
