<template>
<aside id="secondary" class="widget-area product-widget-area" role="complementary" aria-label="Shop Sidebar">
    <div id="ovic_iconbox-2" class="widget ovic-iconbox">
        <div class="inner">
            <div class="ovic-iconbox style-01">
                <div class="inner bounce-in">
                    <div class="icon image-effect">
                        <!-- <i aria-hidden="true" class="fas fa-car-alt"></i> -->
                        <v-icon>mdi-car</v-icon>
                    </div>
                    <div class="content">
                        <h3 class="title">Free Delivery</h3>
                        <p class="desc">On all Orders over KSH 5000</p>
                    </div>
                </div>
            </div>
            <div class="ovic-iconbox style-01">
                <div class="inner bounce-in">
                    <div class="icon image-effect">
                        <v-icon>mdi-keyboard-return</v-icon>
                    </div>
                    <div class="content">
                        <h3 class="title">20 Days Return</h3>
                        <p class="desc">if goods have problems</p>
                    </div>
                </div>
            </div>
            <div class="ovic-iconbox style-01">
                <div class="inner bounce-in">
                    <div class="icon image-effect">
                        <v-icon>mdi-security-network</v-icon>
                    </div>
                    <div class="content">
                        <h3 class="title">100% Safe &amp; Secure</h3>
                        <p class="desc">Proin condimentum sagittis</p>
                    </div>
                </div>
            </div>
            <div class="ovic-iconbox style-01">
                <div class="inner bounce-in">
                    <div class="icon image-effect">
                        <v-icon>mdi-lifebuoy</v-icon>
                    </div>
                    <div class="content">
                        <h3 class="title">24/7 Support</h3>
                        <p class="desc">Delicated support</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="media_image-5" class="widget widget_media_image"><a href="https://armania.kutethemes.net/product-category/furniture/" class=""><img width="330" height="190" src="https://armania.b-cdn.net/wp-content/uploads/2020/06/pets.jpg" class="image wp-image-7844  attachment-full size-full lazy" alt="" style="max-width: 100%; height: auto; display: inline;" sizes="(max-width: 330px) 100vw, 330px" srcset="https://armania.b-cdn.net/wp-content/uploads/2020/06/pets.jpg 330w, https://armania.b-cdn.net/wp-content/uploads/2020/06/pets-300x173.jpg 300w, https://armania.b-cdn.net/wp-content/uploads/2020/06/pets-64x37.jpg 64w"></a></div>
    <div id="ovic_products-3" class="widget ovic-products">
        <div data-id="products_5f0c45e1bc432" class="ovic-products  nav-top style-04">
            <div class="ovic-title horizontal style-01">
                <div class="inner armania-dropdown">
                    <h2 class="title" style="width: 100%;">Popular Products</h2>
                </div>
            </div>
            <div class="woocommerce columns-3 ">
                <ul class="products product_category equal-container better-height product-list-owl owl-slick  slick-initialized slick-slider" style="display: block;"></span>
                    <div class="slick-list draggable">
                        <div class="slick-track" style="opacity: 1; width: 656px; transform: translate3d(0px, 0px, 0px);">
                            <div class="slick-slide" data-slick-index="1" aria-hidden="true" style="margin-right: 0px; width: 328px;" tabindex="-1">
                                <div class="row-item" v-for="sale in onSale.data" :key="sale.id">
                                    <li data-product_id="4416" class="product-item style-04 short-title product type-product post-4416 status-publish first instock product_cat-pets product_cat-cat product_tag-pets has-post-thumbnail shipping-taxable purchasable product-type-simple" style="width: 100%; display: inline-block;">
                                        <div class="product-inner">
                                            <div class="product-thumb images">
                                                <div class="thumb-wrapper">
                                                    <nuxt-link :to="buildUrl(sale)" class="thumb-link hover-zoom woocommerce-product-gallery__image">
                                                        <figure class="primary-thumb">
                                                            <img v-lazy="sale.image" src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png" width="320" height="320" class="attachment-320x320 size-320x320 wp-post-image lazy" alt="product.name" style="display: block;"></figure>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                            <div class="product-info equal-elem" style="height: 110px;">
                                                <h2 class="product-title">
                                                    <nuxt-link :to="buildUrl(sale)">{{ sale.product_name }}</nuxt-link>
                                                </h2>
                                                <div class="star-rating-wrap">
                                                    <div class="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style="width:80%">Rated <strong class="rating">4.00</strong> out of 5</span></div><strong class="rating">(01)</strong>
                                                </div>
                                                <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">KSh</span>{{ sale.price }}</span></span>
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
</aside>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {

    computed: {
        ...mapState(['onSale']),

    },
    methods: {
        buildUrl(product) {
            return '/shop/' + this.$slugify(product.id, product.product_name)
        },
        getonSale() {
            var payload = {
                model: 'onSale',
                update: 'updateonSaleList',
            }
            this.$store.dispatch('getItems', payload)
        },
    },
    mounted() {
        this.getonSale()
    },
}
</script>

<style scoped>
.v-application ul,
.v-application ol {
    padding-left: 0 !important;
}

.slick-slide>.row-item>* {
    height: 200px !important;
}

.v-icon {
    font-size: 34px;
}

@media(max-width:768px) {

    #primary,
    #secondary {
        display: none !important;
    }
}
</style>
