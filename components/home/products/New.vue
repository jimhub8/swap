<template>
<div class="tab-panel active" id="tab-fd608df-5f0c145939c26">
      <div class="box-title" style="margin: 30px 0;">
        <h3><span>New Products</span></h3>
    </div>
    <div data-id="products_fd608df_5f0c145939c25" class="ovic-products   style-14">
        <div class="woocommerce columns-3 ">
            <ul class="products recent_products equal-container better-height product-list-owl owl-slick rows-space-30 slick-initialized slick-slider">
                <div class="slick-list draggable">
                    <div class="slick-track" style="opacity: 1; width: 1560px; transform: translate3d(0px, 0px, 0px);">
                        <div class="slick-slide slick-current slick-active first-slick" data-slick-index="0" aria-hidden="false" tabindex="0" style="margin-right: 30px; width: 258px;" v-for="product in products.data" :key="product.id">
                            <div class="row-item" v-if="product.new_product">
                                <li data-product_id="4446" class="product-item style-14 short-title product type-product post-4446 status-publish first instock product_cat-brid product_cat-pets product_tag-pets has-post-thumbnail shipping-taxable purchasable product-type-simple" style="width: 100%; display: inline-block;">
                                    <div class="product-inner">
                                        <div class="product-thumb">
                                            <div class="thumb-wrapper">
                                                <nuxt-link :to="buildUrl(product)" class="thumb-link hover-zoom woocommerce-product-gallery__image"tabindex="0">
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

</style>
