<template>
<div>

    <headerP></headerP>
    <v-layout row wrap class="">
        <v-flex sm2 offset-sm1>
            <myAside />
        </v-flex>
        <v-flex sm8 offset-sm1>
            <div class="bgwhite p-t-35 p-b-80">
                <div>
                    <div class="p-t-30 respon5">
                        <div class="wrap-slick3 flex-sb flex-w">

                            <div class="single-product-wrapper has-gallery">
                                <div class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images" data-columns="4" style="opacity: 1; transition: opacity 0.25s ease-in-out 0s;">
                                    <!-- <a href="#" class="woocommerce-product-gallery__trigger">🔍</a> -->
                                    <div class="flex-viewport" style="overflow: hidden; position: relative; height: 400px;">
                                        <figure class="woocommerce-product-gallery__wrapper" style="width: 800%; transition-duration: 0s; transform: translate3d(0px, 0px, 0px);">
                                            <div data-thumb-alt="" class="woocommerce-product-gallery__image flex-active-slide" style="width: 400px; margin-right: 0px; float: left; display: block; position: relative; overflow: hidden;">
                                                <a href="https://armania.b-cdn.net/wp-content/uploads/2020/05/Pets_components_0000s_0012_Layer-14.jpg">
                                                    <!-- <img v-lazy="image.image" src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png" height="600" width="600" class="wp-post-image" alt=""> -->
                                                    <img :src="displayImage" :alt="product.product_name" height="600" width="600" @error="imageUrlAlt" />
                                                </a>
                                            </div>

                                        </figure>
                                    </div>
                                    <ol class="flex-control-nav flex-control-thumbs slick-initialized slick-slider">
                                        <div class="slick-list draggable">
                                            <div class="slick-track" style="opacity: 1; width: 420px; transform: translate3d(0px, 0px, 0px);">
                                                <li class="slick-slide slick-current slick-active first-slick" data-slick-index="0" aria-hidden="false" tabindex="0" style="margin-right: 10px; width: 87.5px;" v-for="image in product.images" :key="image.id">
                                                    <!-- <img src="https://armania.b-cdn.net/wp-content/uploads/2020/05/Pets_components_0000s_0012_Layer-14-83x83.jpg" class="flex-active" draggable="false"> -->

                                                    <img v-lazy="image.image" src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png" height="600" width="600" class="wp-post-image" alt="">
                                                </li>
                                            </div>
                                        </div>
                                    </ol>
                                </div>
                                <div class="summary entry-summary">
                                    <span class="sku_wrapper">
                                        <span class="title">SKU: {{ product.sku_no }} </span>

                                    </span>
                                    <h1 class="product_title entry-title">{{ product.product_name }}</h1>
                                    <div class="woocommerce-product-rating">
                                        <div class="star-rating-wrap">
                                            <div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style="width:100%">Rated <strong class="rating">5.00</strong> out of 5 based on <span class="rating">1</span> customer rating</span></div><strong class="rating">(01)</strong>
                                        </div> <a href="#reviews" class="woocommerce-review-link" rel="nofollow">(<span class="count">1</span> customer review)</a>
                                    </div>
                                    <div class="armania-share-socials">
                                        <div class="inner">

                                            <!-- <ShareNetwork class="facebook" network="facebook" :url="app_url + route_" :title="'Buy this awesome product: '+product.product_name" :description="product.product_name" hashtags="onlineshopping" twitterUser="swapstore">
                                                <v-icon style="background: rgba(0, 0, 0, 0) !important; color:white !important">mdi-twitter</v-icon>
                                                <span style="color: #fff;">Share on Facebook</span>
                                            </ShareNetwork> -->

                                            <ShareNetwork class="facebook" network="facebook" :url="app_url + route_" :title="'Buy this awesome product: '+product.product_name" :description="product.product_name" quote="Go to swapstore.co.ke to get the best offers" hashtags="onlineshopping">
                                                <v-icon style="background: rgba(0, 0, 0, 0) !important; color:white !important">mdi-facebook</v-icon>
                                                <span style="color: #fff;">Share on Facebook</span>
                                            </ShareNetwork>

                                            <ShareNetwork class="twitter" network="twitter" :url="app_url + route_" :title="'Buy this awesome product: '+product.product_name" :description="product.product_name" hashtags="onlineshopping" twitterUser="swapstore">
                                                <v-icon style="background: rgba(0, 0, 0, 0) !important; color:white !important">mdi-twitter</v-icon>
                                                <span style="color: #fff;">Share on Twitter</span>
                                            </ShareNetwork>

                                            <ShareNetwork class="pinterest" network="pinterest" :url="app_url + route_" :title="'Buy this awesome product: '+product.product_name" :description="product.product_name" :media="product.image">
                                                <v-icon style="background: rgba(0, 0, 0, 0) !important; color:white !important">mdi-pinterest</v-icon>
                                                <span style="color: #fff;">Share on Pinterest</span>
                                            </ShareNetwork>

                                        </div>
                                    </div>
                                    <p class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">KSH </span>{{ product.price }}</span></p>
                                    <div class="quantity">
                                        <label class="text">
                                            Qty: </label>
                                        <div class="control">
                                            <p style="cursor: pointer" class="btn-number qtyminus quantity-minus" @click="form.quantity -= 1" v-if="form.quantity > 1"><span class="fa fa-minus">
                                                </span></p>
                                            <input type="number" min="1" v-model="form.quantity" title="Qty" class="input-qty input-text qty text" size="4" placeholder="" pattern="[0-9]*">
                                            <p style="cursor: pointer" class="btn-number qtyplus quantity-plus" @click="form.quantity +=1"><span class="fa fa-plus"></span></p>
                                        </div>
                                    </div>
                                    <button class="single_add_to_cart_button button alt" @click="addToCart">Add to cart</button>
                                    <div class="product_meta">
                                        <span class="posted_in"><span class="title">Categories:</span>
                                            <!-- <a href="#" rel="tag">Pets</a>, <a href="#" rel="tag">Reptile</a> -->
                                            <div v-for="category in product.categories" :key="category.id">
                                                <nuxt-link to="/">
                                                    <el-tag type="danger">{{ category.category }}</el-tag>
                                                </nuxt-link>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <el-tabs v-model="activeName">
                <el-tab-pane label="Description" name="first">
                    <div v-html="product.description"></div>
                </el-tab-pane>
                <el-tab-pane label="Reviews" name="second">Reviews</el-tab-pane>
            </el-tabs>
        </v-flex>
    </v-layout>

</div>
</template>

<script>
import headerP from "../../components/include/Headerpartial";
// import Review from "../../components/reviews/Review";
// import Show from "../../components/home/Show";
import relatedProducts from '../../components/Shop/details/related'
import myAside from '../../components/Shop/details/aside'


// import myVariants from '../../components/home/products/variants'

import {
    mapState
} from "vuex";
export default {

    head() {
        return {
            title: this.product.product_name + ' | Swap',
            meta: [{
                hid: 'og:description',
                name: 'og:description',
                content: this.product.short_description
            }, {
                hid: 'twitter:title',
                name: 'twitter:title',
                content: this.product.product_name
            }, {
                hid: 'og:title',
                name: 'og:title',
                content: this.product.product_name
            }, {
                hid: 'twitter:image',
                name: 'twitter:image',
                content: this.product.image
            }, {
                hid: 'product:price:amount',
                name: 'product:price:amount',
                content: this.product.price
            }, {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: this.product.description
            }]
        }
    },
    name: "productDetails",
    components: {
        headerP,
        relatedProducts,
        myAside,
        // Review,
        // relatedProducts,
        // myVariants
    },
    data() {
        return {
            activeName: 'first',
            app_url: process.env.APP_URL,
            form: {
                quantity: 1
            },
            proId: this.$route.params.id,
            showError: false,
            error_msg: "",
            rowsPerPageItems: [4, 8, 12],
            pagination: {
                rowsPerPage: 4
            },
            selectedCard: -1,
            reviews: [],
            sizes: [],
            avgRating: null,
            displayImage: "",
            originalImage: "",
            route_: this.$route.fullPath
        };
    },

    async fetch({
        store,
        route
    }) {

        var len = route.params.id.split('-').length - 1
        var arr = route.params.id.split('-')
        var payload = {
            model: "products",
            update: "updateShowProduct",
            id: arr[len]
        };
        let response = await store.dispatch("showItem", payload);

        // this.displayImage = response.data.image

        // console.log(this.displayImage);
        // this.$emit("updateDataEvent", response.data.image);

        // var payload = {
        //     model: 'categories',
        //     update: 'updateCategoryList',
        //     id: id,
        // }
        // await store.dispatch('showItem', payload)
    },
    methods: {
        update_data() {
            this.displayImage = this.product.image
        },
        redirect(proId) {
            // this.proId = this.$route.params.id
            this.$router.push({
                name: "details",
                params: {
                    id: proId
                }
            });
            this.getProduct();
        },

        addToCart() {
            var cart = this.product;
            if (cart.product_variants.length > 0) {
                $nuxt.$emit("selectVariantsEvent", cart);
                // this.select_variants()
                return;
            }
            cart.order_qty = this.form.quantity;
            $nuxt.$emit("addCartEvent", cart);
        },

        hoverCard(selectedIndex) {
            this.selectedCard = selectedIndex;
            // this.animateCards()
        },
        isSelected(cardIndex) {
            return this.selectedCard === cardIndex;
        },
        view(product) {
            $nuxt.$emit("viewProEvent", product);
        },

        // addToCart(cart) {
        //   $nuxt.$emit("addCartEvent", cart);
        // },
        wishList(item) {
            $nuxt.$emit("WishListEvent", item);
        },

        getProduct() {
            var payload = {
                model: "products",
                update: "updateProductsList",
                id: this.$route.params.id
            };
            this.$store.dispatch("showItem", payload);
        },

        getRelated() {
            var payload = {
                model: "related",
                update: "updateRelatedList",
                id: this.$route.params.id
            };
            this.$store.dispatch("showItem", payload);
        },
        getReviews() {
            var payload = {
                model: "reviews",
                update: "updateReviewsList"
            };
            this.$store.dispatch("getItems", payload);
        },
        getAvgReviews() {
            var payload = {
                model: "ratings",
                update: "updatAvgReviewsList",
                id: this.proId
            };
            this.$store.dispatch("showItem", payload);
        },

        next(page) {
            $nuxt.$emit("progressEvent");
            axios
                .get(this.reviews.path + `?page=` + this.reviews.current_page)
                .then(response => {
                    $nuxt.$emit("StoprogEvent");
                    this.reviews = response.data;
                })
                .catch(error => {
                    $nuxt.$emit("StoprogEvent");
                    this.errors = error.response.data.errors;
                });
        },

        getCategory(id) {
            var payload = {
                model: "categories",
                update: "updateCategoryList",
                id: id
            };
            this.$store.dispatch("showItem", payload);
        },

        imageUrlAlt(e) {
            event.target.src =
                "https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png";
        },

        priceChange(data) {
            $nuxt.$emit("progressEvent");
            axios
                .get(`product_attribute/${data}`)
                .then(response => {
                    $nuxt.$emit("StoprogEvent");
                    this.product.price = response.data.price;
                })
                .catch(error => {
                    $nuxt.$emit("StoprogEvent");
                    this.errors = error.response.data.errors;
                });
        },
        split_id() {
            console.log(this.$route.params.id)
            console.log(this.$route.params.id.split('-').length)
            var len = this.$route.params.id.split('-').length - 1
            var arr = this.$route.params.id.split('-')
            console.log(arr[len]);

        }
    },
    mounted() {
        this.update_data()
        // this.split_id();
        $nuxt.$emit("ScollEvent");
        // this.getRelated();
        // this.getReviews();
        // this.getAvgReviews();
    },
    created() {
        this.$nuxt.$on("ReviewRequest", data => {
            this.getReviews();
            this.getAvgReviews();
        });

        this.$nuxt.$on("updateDataEvent", data => {
            this.displayImage = data
        });
    },
    computed: {
        // categories() {
        //     return this.$store.getters.categories
        // },
        // products() {
        //     return this.$store.getters.products
        // },
        ...mapState(["product"])
    },
    beforeRouteLeave(to, from, next) {
        // $nuxt.$emit("progressEvent");
        next();
        window.scrollTo(0, 0);

    },
};
</script>

<style scoped>
#stock::before {
    position: absolute;
    display: inline-block;
    content: '';
    width: 8px;
    height: 8px;
    left: 0;
    top: 0.45em;
    border-radius: 100%;
    background: currentColor;
}

.wrap-pic-w img {
    height: 300px;
}

.slick3-dots li {
    display: none !important;
}

.w-100 {
    height: 230px;
    transition: height 0.3s, opacity 0.3s;
}

.w-100.selected {
    transition: height 0.6s, opacity 0.6s;
    /* zoom: 1.2; */
    opacity: 0.8;
}

.caption {
    display: none;
}

.caption.selected {
    transition: height 0.6s, opacity 0.6s;
    display: block;
}

#container {
    position: relative;
    width: 100%;
    height: 100%;
}

#container.after {
    position: absolute;
    color: #000;
    display: none;
}

#container:hover.after {
    display: block;
    background: rgba(0, 0, 0, 6);
}

.image-container {
    position: relative;
    height: 230px;
    width: 100%;
}

.image-container .after {
    position: absolute;
    top: 0;
    left: 0;
    height: 230px;
    width: 100%;
    display: none;
    color: #fff;
}

.image-container:hover .after {
    display: block;
    background: rgba(0, 0, 0, 0.6);
}

#tooltip .v-btn {
    background: rgba(240, 240, 240, 0.26);
}

#tooltip .v-btn:hover {
    background: rgba(0, 0, 0, 0.24);
}

.v-btn .v-btn__content .v-icon {
    box-shadow: 0 9px 30px -6px rgba(255, 54, 54, 0.5);
}

.theme--light.v-data-iterator .v-data-iterator__actions {
    margin-top: 0 !important;
}

ul,
li {
    margin: 0px;
    /* list-style-type: none; */
}

@media(max-width:768px) {
  .flex, .child-flex > * {
        margin-top: -160px;
  }
    .entry-summary,
    .el-tabs {
        padding: 20px;
    }
}
</style>
