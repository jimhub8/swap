<template>
<div class="single-product-wrapper has-gallery">
    <div class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images" data-columns="4" style="opacity: 1; transition: opacity 0.25s ease-in-out 0s;"><a href="#" class="woocommerce-product-gallery__trigger">🔍</a>
        <div class="flex-viewport" style="overflow: hidden; position: relative; height: 400px;">
            <figure class="woocommerce-product-gallery__wrapper" style="width: 800%; transition-duration: 0s; transform: translate3d(0px, 0px, 0px);">
                <div data-thumb-alt="" class="woocommerce-product-gallery__image flex-active-slide" style="width: 400px; margin-right: 0px; float: left; display: block; position: relative; overflow: hidden;"><a href="https://armania.b-cdn.net/wp-content/uploads/2020/05/Pets_components_0000s_0012_Layer-14.jpg"><img width="600" height="600" src="https://armania.b-cdn.net/wp-content/uploads/2020/05/Pets_components_0000s_0012_Layer-14-600x600.jpg" class="wp-post-image" alt=""></a></div>

            </figure>
        </div>
        <ol class="flex-control-nav flex-control-thumbs slick-initialized slick-slider">
            <div class="slick-list draggable">
                <div class="slick-track" style="opacity: 1; width: 420px; transform: translate3d(0px, 0px, 0px);">
                    <li class="slick-slide slick-current slick-active first-slick" data-slick-index="0" aria-hidden="false" tabindex="0" style="margin-right: 10px; width: 87.5px;"><img src="https://armania.b-cdn.net/wp-content/uploads/2020/05/Pets_components_0000s_0012_Layer-14-83x83.jpg" class="flex-active" draggable="false"></li>

                </div>
            </div>
        </ol>
    </div>
    <div class="summary entry-summary">
        <span class="sku_wrapper">
            <span class="title">SKU:</span>
            <span class="sku">
                PT1297 </span>
        </span>
        <h1 class="product_title entry-title">Pet Craft Supply Self</h1>
        <div class="woocommerce-product-rating">
            <div class="star-rating-wrap">
                <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5 based on <span class="rating">1</span> customer rating</span></div><strong class="rating">(01)</strong>
            </div> <a href="#reviews" class="woocommerce-review-link" rel="nofollow">(<span class="count">1</span> customer review)</a>
        </div>
        <div class="armania-share-socials">
            <div class="inner">
                <a class="facebook" href="#" title="Facebook">
                    <span class="icon fa fa-facebook"></span>
                    <span class="text">Facebook</span>
                </a>
                <a class="twitter" href="#" title="Twitter">
                    <span class="icon fa fa-twitter"></span>
                    <span class="text">Twitter</span>
                </a>
                <a class="pinterest" href="#" title="Pinterest">
                    <span class="icon fa fa-pinterest-square"></span>
                    <span class="text">Pinterest</span>
                </a></div>
        </div>
        <p class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>210.00</span></p>
        <form class="cart" action="https://armania.kutethemes.net/product/pet-craft-supply-self/" method="post" enctype="multipart/form-data">
            <div class="quantity">
                <label class="text">
                    Qty: </label>
                <div class="control">
                    <a class="btn-number qtyminus quantity-minus" href="#"><span class="fa fa-minus"></span></a>
                    <input type="number" data-step="1" id="quantity_5f0c370aefb67" min="1" max="" name="quantity" value="1" title="Qty" class="input-qty input-text qty text" size="4" placeholder="" pattern="[0-9]*">
                    <a class="btn-number qtyplus quantity-plus" href="#"><span class="fa fa-plus"></span></a></div>
            </div>
            <button type="submit" name="add-to-cart" value="4448" class="single_add_to_cart_button button alt">Add to cart</button><a href="https://armania.kutethemes.net?action=yith-woocompare-add-product&amp;id=4448" class="compare button" data-product_id="4448" rel="nofollow">Compare</a>
            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-4448  wishlist-fragment on-first-load">
                <div class="yith-wcwl-add-button">
                    <a href="#" rel="nofollow" data-product-id="4448" data-product-type="simple" data-original-product-id="4448" class="add_to_wishlist single_add_to_wishlist" data-title="Wishlist">
                        <i class="yith-wcwl-icon fa main-icon-heart ovic-wl-icon"></i> <span>Wishlist</span>
                    </a></div>
            </div>
        </form>
        <div class="product_meta">
            <span class="posted_in"><span class="title">Categories:</span> <a href="#" rel="tag">Pets</a>, <a href="#" rel="tag">Reptile</a></span>
            <span class="tagged_as"><span class="title">Tag:</span> <a href="#" rel="tag">Pets</a></span></div>
    </div>
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
</style>
