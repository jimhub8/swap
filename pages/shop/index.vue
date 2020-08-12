<template>
<div id="shop_theme">
    <headerP></headerP>
    <section class="bgwhite p-t-55 p-b-65">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-3 p-b-50">
                    <div class="leftbar p-r-20 p-r-0-sm">
                        <myMobileFilter v-if="isMobile" />
                        <myFilter v-else />

                    </div>
                </div>

                <div class="col-sm-6 col-md-8 col-lg-9 p-b-50">
                    <!--  -->
                    <div class="flex-sb-m flex-w p-b-35">
                        <div class="flex-w">
                            <div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">

                            </div>
                        </div>

                        <span class="s-text8 p-t-5 p-b-5">Showing page {{ products.current_page }} of {{ products.last_page }} pages
                            <v-btn text icon color="success" @click="filter" v-if="isMobile">
                                <v-icon>mdi-filter-variant</v-icon>
                            </v-btn>
                        </span>
                    </div>

                    <!-- Product -->
                    <div class="row" v-if="products.data.length > 0">

                        <ul class="products shop-page response-content columns-3 ovic-products style-15 equal-container better-height">
                            <v-layout row wrap>
                                <v-flex sm4 v-for="(product, index) in products.data" :key="index" xs6>

                                    <li data-product_id="3510" class="product-item style-15 short-title product type-product post-3510 status-publish first instock product_cat-cbd-oil-valey product_cat-medicine product_tag-medicine has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                        <div class="product-inner">
                                            <div class="product-thumb">
                                                <div class="thumb-wrapper">
                                                    <nuxt-link :to="buildUrl(product)">
                                                        <figure class="primary-thumb">
                                                            <img v-lazy="product.image" src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png" :alt="product.product_name" width="320" height="320" style="display: inline;" /></figure>
                                                    </nuxt-link>
                                                </div>
                                                <div class="group-button">
                                                    <div class="yith-wcwl-add-to-wishlist add-to-wishlist-3510  wishlist-fragment on-first-load">
                                                        <div class="yith-wcwl-add-button">
                                                            <a href="#" rel="nofollow" data-product-id="3510" data-product-type="simple" data-original-product-id="3510" class="add_to_wishlist single_add_to_wishlist" data-title="Wishlist" data-original-title="" title="">
                                                                <v-icon>mdi-heart</v-icon><span>Wishlist</span>
                                                            </a></div>
                                                    </div>
                                                    <!-- <a href="#" class="button yith-wcqv-button" title="">Quick View</a> -->
                                                </div>
                                            </div>
                                            <div class="product-info equal-elem" style="height: 83px;">
                                                <h2 class="product-title">
                                                    <nuxt-link :to="buildUrl(product)">
                                                        {{ product.product_name }}
                                                    </nuxt-link>
                                                </h2>
                                                <div class="box-wrap">
                                                    <div class="box-left">
                                                        <div class="star-rating-wrap">
                                                            <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div>
                                                            <strong class="rating">(01)</strong>
                                                        </div>
                                                        <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">KSH </span>{{ product.price }}</span></span>
                                                    </div>
                                                    <span class="add-to-cart" data-title="Add to cart">
                                                        <a href="#" class="button product_type_simple" rel="nofollow" @click="addToCart(product)">
                                                            <v-icon>mdi-cart</v-icon>
                                                            Add to cart
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </v-flex>
                            </v-layout>

                        </ul>
                    </div>
                    <div v-else>
                        <p class="text-center" style="background: #f2dede; font-size: 13px; color: #a94442 !important;">No products available</p>
                    </div>
                </div>
                <!-- <div class="text-xs-center" style="margin: auto; width: 100%;" v-if="products.last_page > 1">
                    <v-pagination v-model="products.current_page" :length="products.last_page" total-visible="6" @input="next(products.path, products.current_page, 'products')" circle></v-pagination>
                </div> -->
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
import myMobileFilter from '../../components/Shop/details/mobilefilter'
import {
    mapState
} from "vuex";
export default {
    components: {
        headerP,
        myFilter,
        myVariants,
        myMobileFilter
    },

    head() {
        return {
            title: 'Swap - Home',
            meta: [{
                hid: 'og:title',
                name: 'og:title',
                content: 'Products'
            }, {
                hid: 'description',
                name: 'description',
                content: process.env.META_CONTENT
            }, {
                hid: 'og:description',
                name: 'og:description',
                content: "Free delivery on millions of items with Swap. Low prices across earth's biggest selection of electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, groceries & just about anything else"
            }, {
                hid: 'keywords',
                name: 'keywords',
                content: 'Swap, Online Shopping, Electronics, Video Games, Computers, Cell Phones, Toys, Games, Apparel, Accessories, Shoes, Jewelry, Watches, Office, Sports & Outdoors, Sporting Goods, Babies, Health, Personal Care, Beauty, Home, Garden, Bed & Bath, Furniture, Tools, Vacuums, Outdoor Living, Automotive Parts'
            }, ]
        }
    },
    data() {
        return {
            windowWidth: null,
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

        filter() {
            $nuxt.$emit('openSheetEvent')
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
            var model = 'shop?page=' + this.products.current_page
            var payload = {
                model: model,
                update: 'updateProductsList',
            }
            this.$store.dispatch('getItems', payload)
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
        },
        buildUrl(product) {
            return '/shop/' + this.$slugify(product.id, product.product_name)
        }
    },
    mounted() {
        // this.loader = true;
        // this.FilterShop();
        // this.getProducts();
        // this.getMenus();
        // $nuxt.$emit("ScollTopEvent");
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
            console.log(this.isMobile)
        })
        this.windowWidth = window.innerWidth
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

        isMobile() {
            return this.windowWidth <= 768
        },
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

a::before {
    display: none !important;
}

img {
    border-style: none;
    height: 300px;
}

.add-to-cart {
    margin-right: 80px;
}

@media(max-width:768px) {
    .flex.xs6 {
        max-width: 50vw;
        padding-left: 10px;
    }

    .v-application ul,
    .v-application ol {
        padding-left: 8px;
    }
}
</style>
