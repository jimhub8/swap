<template>
<div class="tab-panel active" id="tab-fd608df-5f0c145939c26">
    <div class="box-title" style="margin: 30px 0;">
        <h3><span>New items</span></h3>
    </div>
    <div data-id="products_fd608df_5f0c145939c25" class="ovic-products   style-14">
        <div class="woocommerce columns-3 ">

            <ul class="products recent_products equal-container better-height product-list-owl owl-slick rows-space-30 slick-initialized slick-slider">
                <v-layout row wrap>
                    <v-flex sm3 v-for="(product, index) in products.data" :key="index" xs6  v-if="product.new_product">

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
</template>

<script>
import {
    mapState
} from "vuex";
export default {

    computed: {
        ...mapState(['products', 'categories']),
    },
    methods: {
        nextPage() {
            if (this.page + 1 <= this.numberOfPages) this.page += 1
        },
        formerPage() {
            if (this.page - 1 >= 1) this.page -= 1
        },
        updateItemsPerPage(number) {
            this.itemsPerPage = number
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
        addToWish(wish) {
            $nuxt.$emit("WishListEvent", wish);
        },
        Productdetails(id) {
            $nuxt.$emit('Productdetails', id)
        },
        imageUrlAlt(e) {
            alert('tedst')
            event.target.src = "https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png"

        },

        buildUrl(product) {
            return '/shop/' + this.$slugify(product.id, product.product_name)
        }
    },
};
</script>

<style scoped>
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
}

@media (min-width: 600px) {
    .flex.sm3 {
        flex-basis: 19%;
        margin-left: 10px;
        margin-top: 10px;
        border: 1px solid #8c818126;
    }
}
</style>
