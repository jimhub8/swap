<template>
<div>
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
                        <myFilter></myFilter>
                    </div>
                </div>

                <div class="col-sm-6 col-md-8 col-lg-9 p-b-50">
                    <!--  -->
                    <div class="flex-sb-m flex-w p-b-35">
                        <span class="s-text8 p-t-5 p-b-5">Showing page {{ products.current_page }} of {{ products.last_page }} pages</span>
                    </div>

                    <!-- Product -->
                    <div class="row" v-if="products.data.length > 0">
                        <div class="col-sm-12 col-md-6 col-lg-4 p-b-50" v-for="product in products.data" :key="product.id">
                            <!-- Block2 -->
                            <div class="block2">
                                <div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew" v-if="product.new_product === 1">
                                    <img :src="product.image" alt="IMG-PRODUCT">

                                    <div class="block2-overlay trans-0-4">
                                        <v-tooltip bottom style="margin-left: 90%;" v-if="product.wish_list === 1">
                                            <v-btn icon class="mx-0 block2-btn-addwishlist hov-pointer trans-0-4" slot="activator" @click="addToWish(product.id)" style="margin-top: -20px;">
                                                <v-icon color="pink darken-2" large>favorite</v-icon>
                                            </v-btn>
                                            <span>Wish list</span>
                                        </v-tooltip>

                                        <v-tooltip bottom style="margin-left: 90%;" v-else>
                                            <v-btn icon class="mx-0 block2-btn-addwishlist hov-pointer trans-0-4" slot="activator" @click="addToWish(product.id)" style="margin-top: -20px;">
                                                <v-icon color="white darken-2" large>favorite</v-icon>
                                            </v-btn>
                                            <span>Wish list</span>
                                        </v-tooltip>

                                        <div class="block2-btn-addcart w-size1 trans-0-4">
                                            <!-- Button -->
                                            <v-btn color="success" @click="addToCart(product)">Add to Cart</v-btn>
                                        </div>
                                    </div>
                                </div>

                                <div class="block2-img wrap-pic-w of-hidden pos-relative" v-else>
                                    <img :src="product.image" alt="IMG-PRODUCT">

                                    <div class="block2-overlay trans-0-4">
                                        <v-tooltip bottom style="margin-left: 90%;" v-if="product.wish_list === 1">
                                            <v-btn icon class="mx-0 block2-btn-addwishlist hov-pointer trans-0-4" slot="activator" @click="addToWish(product.id)" style="margin-top: -20px;">
                                                <v-icon color="pink darken-2" large>favorite</v-icon>
                                            </v-btn>
                                            <span>Wish list</span>
                                        </v-tooltip>
                                        <v-tooltip bottom style="margin-left: 90%;" v-else>
                                            <v-btn icon class="mx-0 block2-btn-addwishlist hov-pointer trans-0-4" slot="activator" @click="addToWish(product.id)" style="margin-top: -20px;">
                                                <v-icon color="white darken-2" large>favorite</v-icon>
                                            </v-btn>
                                            <span>Wish list</span>
                                        </v-tooltip>

                                        <div class="block2-btn-addcart w-size1 trans-0-4">
                                            <!-- Button -->
                                            <v-btn color="primary" @click="addToCart(product)">Add to Cart</v-btn>
                                        </div>
                                    </div>
                                </div>

                                <div class="block2-txt p-t-20">
                                    <button class="block2-name dis-block s-text3 p-b-5" @click="redirect(product.id)">{{ product.product_name }}</button>
                                    <span class="block2-price m-text6 p-r-5">{{ product.price }}</span>
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
import headerP from "../include/Headerpartial";
import myFilter from '../Shop/details/filter'
import myVariants from '../home/products/variants'
export default {
    components: {
        headerP,
        myFilter, myVariants
    },
    data() {
        return {
            categories: [],
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
            wish: [],
            cat_id: null,
            filterId: this.$route.params.id,
            type: this.$route.params.type
        };
    },
    methods: {
        searchItems() {
            $nuxt.$emit("progressEvent");
            axios
                .post("/search", this.form)
                .then(response => {
                    $nuxt.$emit("StoprogEvent");
                    this.products = response.data;
                })
                .catch(error => {
                    $nuxt.$emit("StoprogEvent");
                    this.errors = error.response.data.errors;
                });
        },
        redirect(proId) {
            // alert('oooo')
            this.$router.push({
                name: "details",
                params: {
                    id: proId
                }
            });
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
            this.loader = true;
            axios
                .get("/products")
                .then(response => {
                    this.loader = false;
                    this.products = response.data;
                })
                .catch(error => {
                    this.loader = false;
                    this.errors = error.response.data.errors;
                });
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

        // addToCart(cart) {
        //     console.log(cart);

        //     cart.order_qty = 1
        //     $nuxt.$emit("addCartEvent", cart);
        // },


        next(page) {
            $nuxt.$emit("progressEvent");
            axios
                .get(this.products.path + `?page=` + this.products.current_page)
                .then(response => {
                    $nuxt.$emit("StoprogEvent");
                    this.products = response.data;
                })
                .catch(error => {
                    $nuxt.$emit("StoprogEvent");
                    this.errors = error.response.data.errors;
                });
        },
        getCategory() {
            axios
                .get("/menus")
                .then(response => {
                    this.loader = false;
                    this.categories = response.data;
                })
                .catch(error => {
                    this.loader = false;
                    this.errors = error.response.data.errors;
                });
        },
        FilterShop(item) {
            $nuxt.$emit("progressEvent");
            axios
                .post("/FilterShop", {
                    item: this.cat_id,
                    price: this.priceSelect,
                    itemSelect: this.itemSelect
                })
                .then(response => {
                    $nuxt.$emit("StoprogEvent");
                    this.loader = false;
                    this.products = response.data;
                })
                .catch(error => {
                    $nuxt.$emit("StoprogEvent");
                    this.loader = false;
                    this.errors = error.response.data.errors;
                });
        },
        getWish() {
            $nuxt.$emit("progressEvent");
            axios
                .get("/wish")
                .then(response => {
                    $nuxt.$emit("StoprogEvent");
                    this.wish = response.data;
                })
                .catch(error => {
                    $nuxt.$emit("StoprogEvent");
                    this.errors = error.response.data.errors;
                });
        },
        addToWish(item) {
            $nuxt.$emit("WishListEvent", item);
        },
        gotoSUbcat(data) {

            var payload = {
                model: 'subcategories',
                update: 'updateProductsList',
                id: data,
            }
            this.$store.dispatch('showItem', payload)


            // console.log(data);
            // axios
            //     .get(`/subcategory/${data}`)
            //     .then(response => {
            //         $nuxt.$emit("StoprogEvent");
            //         this.products = response.data;
            //     })
            //     .catch(error => {
            //         $nuxt.$emit("StoprogEvent");
            //         this.errors = error.response.data.errors;
            //     });
        },
        gotoCat(data) {
            var payload = {
                model: 'categories',
                update: 'updateProductsList',
                id: data,
            }
            this.$store.dispatch('showItem', payload)

            // console.log(data);
            // axios
            //     .get(`/categories/${data}`)
            //     .then(response => {
            //         $nuxt.$emit("StoprogEvent");
            //         this.products = response.data;
            //     })
            //     .catch(error => {
            //         $nuxt.$emit("StoprogEvent");
            //         this.errors = error.response.data.errors;
            //     });
        }
    },
    mounted() {
        (this.filterId = this.$route.params.id), (this.loader = true);
        if (this.$route.params.type == "cat") {
            this.gotoCat(this.filterId);
        } else {
            this.gotoSUbcat(this.filterId);
        }
        // this.FilterShop();
        this.getCategory();
    },
    beforeRouteLeave(to, from, next) {
        // $nuxt.$emit("progressEvent");
        next();
    },
    created() {
        this.$nuxt.$on("goToSubEvent", data => {
            this.gotoSUbcat(data);
        });

        this.$nuxt.$on("goToCatEvent", data => {
            this.gotoCat(data);
        });
    },

    computed: {
        products() {
            return this.$store.getters.products
        },
        loading() {
            return this.$store.getters.loading
        }
    },
};
</script>

<style scoped>
.wrap-pic-w img {
    height: 300px;
}
</style>
