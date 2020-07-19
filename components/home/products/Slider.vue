<template>
<div id="slider"> <img src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/banners/banner-01.jpg" style="margin: 20px 0 20px -30px; width: 100vw; height: 300px" />
    <!-- <img id="banner_img" src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/banners/banner-01.jpg" /> -->

    <div class="box-title" style="margin: 30px 0;">
        <h3><span>Trending items</span></h3>
    </div>
    <el-carousel indicator-position="outside" style="height: 400px">
        <el-carousel-item v-for="(item, index) in chunkedItems" :key="index" class="row">

            <ul class="products recent_products equal-container better-height product-list-owl owl-slick rows-space-30 slick-initialized slick-slider">
                <v-layout row wrap>
                    <v-flex sm3 v-for="(product, index) in item" :key="index" xs6>

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
        </el-carousel-item>
    </el-carousel>
</div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'Slider',
    methods: {

        getProducts() {
            var payload = {
                model: 'all_products',
                update: 'updateSlideProductsList',
            }
            this.$store.dispatch('getItems', payload)
        },
        product_view(product) {
            console.log(product);
            $nuxt.$emit("viewProEvent", product);
        },

        addToCart(cart) {
            console.log(cart);

            if (cart.product_variants.length > 0) {
                $nuxt.$emit('selectVariantsEvent', cart)
                // this.select_variants()
                return
            }
            cart.order_qty = 1
            $nuxt.$emit("addCartEvent", cart);
        },
        addToWish(wish) {
            $nuxt.$emit("WishListEvent", wish);
        },
        buildUrl(product) {
            return '/shop/' + this.$slugify(product.id, product.product_name)
        }
    },
    computed: {
        chunkedItems() {
            if (this.product_slide.data) {
                return _.chunk(this.product_slide.data, 6)
            }
        },
        product_slide() {
            return this.$store.getters.product_slide;
        },
        length_val() {
            if (this.chunkedItems) {
                return this.chunkedItems[0].length
            }
        }
    },
    mounted() {
        this.getProducts();
    },
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    /* line-height: 300px; */
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #fff;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #fff;
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}

.el-carousel__item[data-v-6225075b]:nth-child(2n+1) {
    background-color: #fff;
    /* height: 420px; */
}

.el-carousel--horizontal {
    /* height: 420px; */
}

@media(max-width:768px) {

    #slider .el-carousel__item {
        height: 230px !important;
    }

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

    img {
        border-style: none;
        height: 130px;
    }
}

@media (min-width: 768px) {
    .flex.sm3 {
        flex-basis: 19%;
        margin-left: 10px;
        margin-top: 10px;
        border: 1px solid #8c818126;
        height: 430px;
    }    img {
        border-style: none;
        height: 250px;
    }
}
</style>
