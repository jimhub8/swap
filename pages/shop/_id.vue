<template>
<div>
    <headerP></headerP>
    <!-- <div v-show="loader" style="text-align: center; width: 100%; margin-top: 200px;">
        <v-progress-circular :width="3" indeterminate color="red" style="margin: 1rem"></v-progress-circular>
    </div> -->
    <div class="container bgwhite p-t-35 p-b-80">
        <div class="flex-w flex-sb">
            <div class="w-size13 p-t-30 respon5">
                <div class="wrap-slick3 flex-sb flex-w">
                    <div class="wrap-slick3-dots" style="max-height: 60vh;overflow-y: scroll;overflow-x: hidden;">
                        <div class="wrap-pic-w" v-for="image in product.images" :key="image.id">
                            <img :src="image.image" :alt="image.mimetype" style="height: 100px; margin-bottom: 10px;" @click="product.image = image.image" @error="imageUrlAlt">
                        </div>
                        <img :src="originalImage" style="height: 100px; margin-bottom: 10px;" @click="product.image = originalImage" @error="imageUrlAlt">
                    </div>
                    <div class="slick3">
                        <div class="item-slick3">
                            <div class="wrap-pic-w">
                                <img :src="product.image" :alt="product.product_name" @error="imageUrlAlt">
                                <div class="text-xs-center">
                                    <v-rating v-model="avgRating" readonly half-increments></v-rating>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <v-btn color="success" @click="getRelated">getRelated</v-btn> -->

            <div class="w-size14 p-t-30 respon5">
                <h4 class="product-detail-name m-text16 p-b-13">
                    {{ product.product_name }}
                </h4>

                <span class="m-text17">
                    Price: {{ product.price }}
                </span>
                <p>Available: {{ product.quantity }}</p>
                <div v-html="product.description"></div>

                <!--  -->
                <div class="p-t-33 p-b-60">
                    <div class="flex-r-m flex-w p-t-10">
                        <div class="w-size16 flex-m flex-w">
                            <div class="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                                <input v-model="form.quantity" class="size8 m-text18 t-center num-product" type="number" min="1" name="num-product" value="1">
                            </div>

                            <div class="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
                                <!-- Button -->
                                <button class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" @click="addToCart">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-b-45">
                    <!-- <span class="s-text8">Categories: {{ categories.name }}</span> -->
                </div>
                <div v-html="product.details"></div>
            </div>
        </div>
        <!-- <Review :product="product" :pid="product.id"></Review>
        <v-btn @click="getProduct">Review</v-btn>
        <v-expansion-panel>
            <v-expansion-panel-content>
                <div slot="header">Reviews</div>
                <v-card>
                    <v-card-text v-for="review in reviews.data" :key="review.id">
                        <img :src="review.profile" alt="" style="width: 50px; height: 50px; border-radius: 50%; text-align: center;" @error="imageUrlAlt">
                        <h2>{{ review.user_name }}</h2>
                        <small>{{ review.comments }}</small>
                        <div>
                            <v-rating readonly small half-increments v-model="review.rating"></v-rating>
                        </div>
                        <v-divider></v-divider>
                    </v-card-text>
                </v-card>
                <div class="text-xs-center" style="margin: auto; width: 100%;" v-if="reviews.last_page > 1">
                    <v-pagination v-model="reviews.current_page" :length="reviews.last_page" total-visible="5" @input="next(reviews.path, reviews.current_page)" circle></v-pagination>
                </div>
            </v-expansion-panel-content>
        </v-expansion-panel> -->
    </div>
    <!-- RELATED PRODUCT -->
    <!-- <section class="relateproduct bgwhite p-t-45 p-b-138">
        <div class="container">
            <relatedProducts></relatedProducts>
        </div>
    </section>
    <Show></Show>
    <myVariants></myVariants> -->
</div>
</template>

<script>
import headerP from "../../components/include/Headerpartial";
// import Review from "../../components/reviews/Review";
// import Show from "../../components/home/Show";
// import relatedProducts from '../../components/Shop/details/related'
// import myVariants from '../../components/home/products/variants'

import {
    mapState
} from "vuex";
export default {
    name: 'productDetails',
    components: {
        headerP,
        // Show,
        // Review,
        // relatedProducts,
        // myVariants
    },
    data() {
        return {
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
            originalImage: ""
        };
    },

    async fetch({
        store, route
    }) {

        var payload = {
            model: 'products',
            update: 'updateShowProduct',
            id: route.params.id
        }
        await store.dispatch("showItem", payload);

        // var payload = {
        //     model: 'categories',
        //     update: 'updateCategoryList',
        //     id: id,
        // }
        // await store.dispatch('showItem', payload)
    },
    methods: {
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
            var cart = this.product
            if (cart.product_variants.length > 0) {
                $nuxt.$emit('selectVariantsEvent', cart)
                // this.select_variants()
                return
            }
            cart.order_qty = this.form.quantity
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
                model: 'products',
                update: 'updateProductsList',
                id: this.$route.params.id,
            }
            this.$store.dispatch('showItem', payload)
        },

        getRelated() {
            var payload = {
                model: 'related',
                update: 'updateRelatedList',
                id: this.$route.params.id,
            }
            this.$store.dispatch('showItem', payload)
        },
        getReviews() {
            var payload = {
                model: 'reviews',
                update: 'updateReviewsList',
            }
            this.$store.dispatch('getItems', payload)
        },
        getAvgReviews() {
            var payload = {
                model: 'ratings',
                update: 'updatAvgReviewsList',
                id: this.proId,
            }
            this.$store.dispatch('showItem', payload)
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
                model: 'categories',
                update: 'updateCategoryList',
                id: id,
            }
            this.$store.dispatch('showItem', payload)
        },

        imageUrlAlt(e) {
            event.target.src = "http://dellmat.jim/assets/notfound/notfound.jpg"
        },

        priceChange(data) {
            $nuxt.$emit("progressEvent");
            axios
                .get(`product_attribute/${data}`)
                .then(response => {
                    $nuxt.$emit("StoprogEvent");
                    this.product.price = response.data.price
                })
                .catch(error => {
                    $nuxt.$emit("StoprogEvent");
                    this.errors = error.response.data.errors;
                });
        }
    },
    mounted() {
        // this.getProduct();
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
    },
    computed: {
        // categories() {
        //     return this.$store.getters.categories
        // },
        // products() {
        //     return this.$store.getters.products
        // },
        ...mapState(['product']),

    },
    // beforeRouteEnter(to, from, next) {
    //     next(vm => {
    //         $nuxt.$emit('ScollTopEvent')
    //     })
    // }
};
</script>

<style scoped>
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
</style>
