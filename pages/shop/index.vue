<template>
<div id="shop_theme">
    <headerP></headerP>
    <section class="bgwhite p-t-55 p-b-65">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3 p-b-50">
                    <div class="leftbar p-r-20 p-r-0-sm">
                        <myFilter />

                    </div>
                </div>

                <div class="col-sm-6 col-md-8 col-lg-9 p-b-50">
                    <!--  -->
                    <div class="flex-sb-m flex-w p-b-35">
                        <div class="flex-w">
                            <div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">

                            </div>
                        </div>

                        <span class="s-text8 p-t-5 p-b-5">Showing page {{ products.current_page }} of {{ products.last_page }} pages</span>
                    </div>

                    <!-- Product -->
                    <div class="row" v-if="products.data.length > 0">
                        <div class="col-sm-12 col-md-6 col-lg-4 p-b-50" v-for="(product, index) in products.data" :key="index">
                            <!-- Block2 -->
                            <div class="block2">
                                <div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew" v-if="product.new_product === 1">
                                    <!-- <img :src="product.image" @error="imageUrlAlt"> -->
                                    <img v-lazy="product.image" src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png" alt=" " />

                                    <div class="block2-overlay trans-0-4">
                                        <v-tooltip bottom v-if="product.wish_list === 1" style="margin-left: 90%;">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn icon v-bind="attrs" v-on="on" @click="addToWish(product.id)" class="mx-0 block2-btn-addwishlist hov-pointer trans-0-4" style="margin-top: -20px;float: right;">
                                                    <v-icon color="grey lighten-1">mdi-heart</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Add to Wish list</span>
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

                                    <img v-lazy="product.image" src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png" alt=" " />
                                    <!-- <img :src="product.image" @error="imageUrlAlt"> -->

                                    <div class="block2-overlay trans-0-4">

                                        <v-tooltip bottom v-if="product.wish_list === 1" style="margin-left: 90%;">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn icon v-bind="attrs" v-on="on" @click="addToWish(product.id)" class="mx-0 block2-btn-addwishlist hov-pointer trans-0-4" style="margin-top: -20px;float: right;">
                                                    <v-icon color="grey lighten-1">mdi-heart</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Add to Wish list</span>
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

                                <div class="block2-txt p-t-20">
                                    <nuxt-link :to="'shop/' + product.id">
                                        <button class="block2-name dis-block s-text3 p-b-5" @click="redirect(product.id)">{{ product.product_name }}</button>
                                    </nuxt-link>
                                    <hr>
                                    <div class="row">
                                        <div class="col-6">
                                            <small class="list-price text-danger">List price: <s>{{ product.list_price }}</s></small>
                                        </div>
                                        <div class="col-6">
                                            <p>Price {{ product.price }}</p>
                                        </div>
                                    </div>
                                    <hr>
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
import headerP from "../../components/include/Headerpartial";
import myFilter from '../../components/Shop/details/filter'
import myVariants from '../../components/home/products/variants'
import {
    mapState
} from "vuex";
export default {
    components: {
        headerP,
        myFilter,
        myVariants
    },
    data() {
        return {
            placeholder: process.env.PLACEHOLDER_URL,
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
            price: [0, 30000],
            priceSelect: {
                state: "All"
            },
            loader: false,
            cat_id: null,

            filter_data: {
                price: [0, 0],
                category_id: 0
            },
        };
    },

    async fetch({
        store
    }) {
        var payload = {
            model: 'shop',
            update: 'updateProduct'
        }
        await store.dispatch("getItems", payload);
        // store.dispatch("loadSlider");
    },
    methods: {
        searchItems() {
            $nuxt.$emit("progressEvent");
        },
        redirect(proId) {
            // alert('oooo')
            // this.$router.push({
            //     name: "details",
            //     params: {
            //         id: proId
            //     }
            // });
        },
        catId(item) {
            this.cat_id = item;
            this.FilterShop();
        },
        catAll() {
            this.cat_id = null;
            this.FilterShop();
        },
        getProducts() {
            var payload = {
                model: 'shop',
                update: 'updateProductsList',
            }
            this.$store.dispatch('getItems', payload)
        },
        // addToCart(cart) {
        //     console.log(cart);

        //     cart.order_qty = 1
        //     $nuxt.$emit("addCartEvent", cart);
        // },

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
            var payload = {
                path: this.products.path,
                page: this.products.current_page,
                update: 'updateProductsList',
            }
            this.$store.dispatch('nextPage', payload)
        },
        getMenus() {
            var payload = {
                model: 'menus',
                update: 'updateMenuList',
            }
            this.$store.dispatch('getItems', payload)
        },
        FilterShop(id) {
            $nuxt.$emit("progressEvent");
            this.filter_data.category_id = id
            $nuxt.$emit("progressEvent");
            var payload = {
                model: 'FilterShop',
                update: 'updateProductsList',
                data: this.filter_data,

            }
            this.$store.dispatch('filterData', payload)
        },
        getWish() {

            var payload = {
                model: 'wish',
                update: 'updateWishList',
            }
            this.$store.dispatch('getItems', payload)

        },
        addToWish(item) {
            $nuxt.$emit("WishListEvent", item);
        },

        imageUrlAlt(e) {
            event.target.src = "/assets/notfound/notfound.jpg"
        }
    },
    mounted() {
        // this.loader = true;
        // this.FilterShop();
        // this.getProducts();
        // this.getMenus();
        // $nuxt.$emit("ScollTopEvent");
    },
    updated() {},
    beforeRouteLeave(to, from, next) {
        // $nuxt.$emit("progressEvent");
        next();
        window.scrollTo(0, 0);

    },
    created() {
        this.$nuxt.$on("RefWishEvent", data => {
            this.FilterShop();
        });

    },
    computed: {
        ...mapState(['products']),

        // products() {
        //     return this.$store.getters.products
        // },
        menus() {
            return this.$store.getters.menu
        },
        loading() {
            return this.$store.getters.loading
        },
        wish() {
            return this.$store.getters.wish
        }
    },
};
</script>

<style scoped>
.wrap-pic-w img {
    height: 300px;
}

.theme--dark.v-btn.v-btn--icon {
    color: #FFFFFF;
}

#shop_theme .theme--dark {
    color: #0276a5 !important;
    background-color: transparent !important;
}
</style>
