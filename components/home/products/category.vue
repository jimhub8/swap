<template>
<v-layout row wrap>
    <v-flex sm3>
        <img id="banner_img" v-lazy="banner_img" src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png" style="width: 25vw;height: 50vh;margin-top: 68px;" />

        <div>
            <div class="box-title">
                <h3><span>On sale</span></h3>
            </div>
            <nuxt-link :to="buildUrl(sale)" v-for="sale in onSale.data" :key="sale.id">
                <v-layout row wrap style="margin-top: 30px; background: #fff">
                    <v-flex sm7 style="text-align: right">
                        <el-rate v-model="value" disabled></el-rate>
                        <small> {{ sale.price }} </small>
                        <p> {{ sale.product_name }} </p>
                    </v-flex>
                    <v-flex sm4 offset-sm1>
                        <!-- <img v-lazy="displayImage" src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png" :alt="product.product_name" style="width: 250px" /> -->
                        <img style="width:80px; height:80px" v-lazy="sale.image" src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png" />
                    </v-flex>
                    <v-flex sm12>
                        <v-divider />
                    </v-flex>
                </v-layout>
            </nuxt-link>
            <!-- <ul class="list-group">
                <li class="list-group-item" v-for="sale in onSale.data" :key="sale.id">{{ sale.product_name }}</li>
            </ul> -->
        </div>
    </v-flex>
    <v-flex sm8 style="margin-left: 20px">
        <el-tabs v-model="selected_category" @input="handleClick">
            <el-tab-pane :label="item.category" :name="item.category" v-for="item in categories.data" :key="item.id">

                <div class="tab-panel active" id="tab-fd608df-5f0c145939c26">

                    <div data-id="products_fd608df_5f0c145939c25" class="ovic-products   style-14">
                        <div class="woocommerce columns-3 ">

                            <!-- <ul class="products recent_products equal-container better-height product-list-owl owl-slick rows-space-30 slick-initialized slick-slider">
                                <div class="slick-list draggable">
                                    <div class="slick-track" style="opacity: 1; width: 100%; transform: translate3d(0px, 0px, 0px);">
                                        <div class="slick-slide slick-current slick-active first-slick" data-slick-index="0" aria-hidden="false" tabindex="0" style="margin-right: 30px; width: 258px;" v-for="(product, index) in category_products.data" :key="product.id">
                                            <div class="row-item">
                                                <li data-product_id="4446" class="product-item style-14 short-title product type-product post-4446 status-publish first instock product_cat-brid product_cat-pets product_tag-pets has-post-thumbnail shipping-taxable purchasable product-type-simple" style="width: 100%; display: inline-block;">
                                                    <div class="product-inner">
                                                        <div class="product-thumb">
                                                            <div class="thumb-wrapper">
                                                                <nuxt-link :to="buildUrl(product)" class="thumb-link hover-zoom woocommerce-product-gallery__image" tabindex="0">
                                                                    <figure class="primary-thumb"><img width="228" height="228" :src="product.image" class="attachment-228x228 size-228x228 wp-post-image" alt=""></figure>
                                                                </nuxt-link>
                                                            </div>
                                                            <div class="group-button">
                                                                <v-tooltip bottom>
                                                                    <template v-slot:activator="{ on }">
                                                                        <v-btn icon v-on="on" @click="product_view(product)">
                                                                            <v-icon color="primary">mdi-magnify</v-icon>
                                                                        </v-btn>
                                                                    </template>
                                                                    <span>Quick View</span>
                                                                </v-tooltip>
                                                                <div class="yith-wcwl-add-to-wishlist add-to-wishlist-4446  wishlist-fragment on-first-load">

                                                                    <v-tooltip bottom>
                                                                        <template v-slot:activator="{ on }">
                                                                            <v-btn icon v-on="on">
                                                                                <v-icon color="primary">favorite</v-icon>
                                                                            </v-btn>
                                                                        </template>
                                                                        <span>add to wish list</span>
                                                                    </v-tooltip>

                                                                </div>
                                                                <span>
                                                                    <v-tooltip bottom>
                                                                        <template v-slot:activator="{ on }">
                                                                            <v-btn icon v-on="on" @click="addToCart(item.products[index])">
                                                                                <v-icon color="primary">mdi-cart</v-icon>
                                                                            </v-btn>
                                                                        </template>
                                                                        <span>Add to cart</span>
                                                                    </v-tooltip>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="product-info equal-elem" style="height: 71px;">
                                                            <h2 class="product-title">
                                                                <nuxt-link :to="buildUrl(product)">
                                                                    {{ product.product_name }}
                                                                </nuxt-link>
                                                            </h2>
                                                            <div class="star-rating-wrap">
                                                                <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div><strong class="rating">(01)</strong>
                                                            </div>
                                                            <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">KSH</span>{{ product.price }}</span></span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </ul> -->

                            <ul class="products recent_products equal-container better-height product-list-owl owl-slick rows-space-30 slick-initialized slick-slider">
                                <v-layout row wrap>
                                    <v-flex sm3 xs6 v-for="(product, index) in category_products.data" :key="product.id">

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
                                                <div class="group-button">
                                                    <v-tooltip bottom>
                                                        <template v-slot:activator="{ on }">
                                                            <v-btn icon v-on="on" @click="product_view(product)">
                                                                <v-icon color="primary">mdi-magnify</v-icon>
                                                            </v-btn>
                                                        </template>
                                                        <span>Quick View</span>
                                                    </v-tooltip>
                                                    <div class="yith-wcwl-add-to-wishlist add-to-wishlist-4446  wishlist-fragment on-first-load">

                                                        <v-tooltip bottom>
                                                            <template v-slot:activator="{ on }">
                                                                <v-btn icon v-on="on">
                                                                    <v-icon color="primary">favorite</v-icon>
                                                                </v-btn>
                                                            </template>
                                                            <span>add to wish list</span>
                                                        </v-tooltip>
                                                        <!-- COUNT TEXT -->

                                                    </div>
                                                    <span>
                                                        <v-tooltip bottom>
                                                            <template v-slot:activator="{ on }">
                                                                <v-btn icon v-on="on" @click="addToCart(product)">
                                                                    <v-icon color="primary">mdi-cart</v-icon>
                                                                </v-btn>
                                                            </template>
                                                            <span>Add to cart</span>
                                                        </v-tooltip>
                                                    </span>
                                                </div>

                                                <div class="product-info equal-elem" style="height: 71px;">
                                                    <h2 class="product-title">
                                                        <nuxt-link :to="buildUrl(product)">
                                                            {{ product.product_name }}
                                                        </nuxt-link>
                                                    </h2>
                                                    <div class="star-rating-wrap">
                                                        <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5</span></div><strong class="rating">(01)</strong>
                                                    </div>
                                                    <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">KSH</span>{{ product.price }}</span></span>
                                                </div>
                                            </div>
                                        </li>
                                    </v-flex>
                                </v-layout>

                            </ul>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </v-flex>
</v-layout>
</template>

<script>
import {
    mapState
} from "vuex";
export default {
    data() {
        return {
            selected_name: '',
            value: 3.7,
            banner_img: 'https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/banners/banner-left2.jpg',

        };
    },
    methods: {

        // getCategory() {
        //     var payload = {
        //         model: 'categories',
        //         update: 'updateCategoryList',
        //     }
        //     this.$store.dispatch('getItems', payload).then((res) => {
        //         // if (this.categories.data) {
        //         const idx = Math.floor(Math.random() * this.categories.data.length);
        //         console.log(idx);

        //         return this.selected_name = this.categories.data[idx].category;
        //         // }
        //     })
        // },

        getonSale() {
            var payload = {
                model: 'onSale',
                update: 'updateonSaleList',
            }
            this.$store.dispatch('getItems', payload)
        },

        product_view(product) {
            $nuxt.$emit("viewProEvent", product);
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
        Productdetails(id) {
            $nuxt.$emit('Productdetails', id)
        },
        handleClick(data) {
            // console.log(data);
            // console.log(this.categories && this.selected_name == '');

            var payload = {
                model: 'category_products',
                update: 'updateCategortProductsList',
                id: data,
            }
            this.$store.dispatch('showItem', payload)
        },

        buildUrl(product) {
            return '/shop/' + this.$slugify(product.id, product.product_name)
        }
        // addToCart(cart) {
        //     cart.order_qty = 1
        //     $nuxt.$emit("addCartEvent", cart);
        // },
    },
    mounted() {
        setTimeout(() => {
            this.handleClick(this.selected_category)

        }, 1000);
        // this.getCategory();
        this.getonSale();
    },
    computed: {
        selected_category() {
            if (this.categories) {

                const idx = Math.floor(Math.random() * this.categories.data.length);
                console.log(idx);

                return this.selected_name = this.categories.data[idx].category;
            }
        },
        // categories() {
        //     return this.$store.getters.categories
        // },
        ...mapState(['categories', 'onSale', 'category_products']),
        // activeName() {
        //     // console.log(this.categories.length);
        //     if (this.categories.data) {
        //         const idx = Math.floor(Math.random() * this.categories.data.length);
        //         console.log(idx);

        //         return this.selected_name = this.categories.data[idx].category;
        //     }
        // },
    },

};
</script>

<style scoped>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}

.v-menu__content--fixed {
    margin-top: 40px;
}

@media only screen and (max-width: 991px) {
    #banner_img {
        width: 90vw !important;
        height: 30vh !important;
    }
}

h1 {
    font-size: 20px !important;
}


@media(max-width:768px) {
    .flex.xs6 {
        max-width: 46%;
        height: 300px;
        border: 1px solid #8c818126;
        margin-left: 10px;
        margin-top: 10px;
    }

    .tab-panel {
        padding: 0 !important;
    }

    .v-application ul,
    .v-application ol {
        padding: 0 10px !important;
    }
    .flex {
      margin-left: 0 !important;
    }
}

@media (min-width: 600px) {
    .flex.sm3 {
          height: 370px;
        flex-basis: 24%;
        margin-left: 10px;
        margin-top: 10px;
        border: 1px solid #8c818126;
    }
}
</style>
