<template>
<div>
    <headerP></headerP>
    <!-- <h1 class="text-center">My Shopping Cart</h1> -->
    <div class="box-title" style="margin: 30px 0;">
        <h3><span style="font-size:30px">My Shopping Cart</span></h3>
    </div>
    <div v-show="loader" style="text-align: center; width: 100%; margin-top: 200px;">
        <v-progress-circular :width="3" indeterminate color="red" style="margin: 1rem"></v-progress-circular>
    </div>
    <section class="cart bgwhite" v-show="!loader">
        <v-card style="padding: 20px;width: 80%; margin: auto;box-shadow: 7px 7px 8px -4px rgb(210, 225, 246),0 12px 17px 2px rgb(210, 225, 246),0 5px 22px 4px rgb(210, 225, 246) !important;">

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" @click="getCart">
                        <v-icon color="primary" small>mdi-refresh</v-icon>
                    </v-btn>
                </template>
                <span>Refresh</span>
            </v-tooltip>
            <div class="container" v-if="Object.keys(carts).length > 0">
                <!-- <div class="container" v-if="carts.length > 0"> -->
                <!-- Cart item -->

                <div class="container-table-cart pos-relative">
                    <div class="wrap-table-shopping-cart bgwhite">
                        <table class="table-shopping-cart">
                            <tr class="table-head">
                                <th class="column-1"></th>
                                <th class="column-2">Product</th>
                                <th class="column-3">Price</th>
                                <th class="column-4 p-l-70">Quantity</th>
                                <th class="column-5">Total</th>
                            </tr>

                            <tr class="table-row" v-for="cart in carts" :key="cart.id">
                                <td class="column-1">
                                    <div class="cart-img-product b-rad-4 o-f-hidden" @click="flashCart(cart)">
                                        <img :src="cart.name.image" alt="" @error="imageUrlAlt">
                                        <!-- <img :src="not_found" /> -->

                                    </div>
                                    <div v-if="cart.attributes.length > 0">
                                        <div v-for="(attribute, index) in cart.attributes" :key="index">
                                            <el-tag v-for="(attr, key) in attribute" :key="key">{{ attr }}</el-tag>
                                        </div>
                                    </div>
                                </td>
                                <td class="column-2">{{ cart.name.product_name }}</td>
                                <td class="column-3">{{ cart.price }}</td>
                                <td class="column-4">
                                    <div class="flex-w bo5 of-hidden w-size17">
                                        <v-btn icon small @click="subtructCart(cart, -1)">
                                            <v-icon color="grey lighten-1">mdi-minus</v-icon>
                                        </v-btn>
                                        <p style="text-align: center; margin: auto;">{{ cart.quantity }}</p>
                                        <v-btn icon small @click="addToCart(cart, 1)">
                                            <v-icon>add</v-icon>
                                        </v-btn>
                                    </div>
                                </td>
                                <td class="column-5">{{ cart.quantity * cart.price }}</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
                    <div class="flex-w flex-m w-full-sm">
                        <div class="size11 bo4 m-r-10">
                            <input class="sizefull s-text7 p-l-22 p-r-22" type="text" v-model="coupon.c_value" name="coupon-code" placeholder="Coupon Code">
                            <small class="text-danger" v-if="err_ms">{{ err_ms }}</small>
                        </div>

                        <div class="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
                            <!-- Button -->
                            <button class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" @click="couponApply">Apply coupon</button>
                        </div>
                    </div>

                </div>

                <!-- Total -->
                <div class="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
                    <h5 class="m-text20 p-b-24">Cart Totals</h5>

                    <!--  -->
                    <div class="flex-w flex-sb-m p-b-12">
                        <span class="s-text18 w-size19 w-full-sm">Subtotal:</span>

                        <span class="m-text21 w-size20 w-full-sm">KSH {{ cart_total }}</span>
                    </div>
                    <div class="flex-w flex-sb-m p-b-12" v-if="couponSessin.length > 0">
                        <span class="s-text18 w-size19 w-full-sm" style="color: red;">Coupon:</span>

                        <span class="m-text21 w-size20 w-full-sm" style="color: red;">{{ parseFloat(totalCoupon)/parseFloat(cart_total)*100 }}% off</span>
                    </div>

                    <!--  -->
                    <hr>

                    <!--  -->
                    <div class="flex-w flex-sb-m p-t-26 p-b-30">
                        <span class="m-text22 w-size19 w-full-sm">Total:</span>

                        <span class="m-text21 w-size20 w-full-sm">KSH {{ parseFloat(cart_total) - parseFloat(totalCoupon) }}</span>
                    </div>

                    <button style="height: 44px;" class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" @click="goToCheckout" v-if="checkout != 'checkout'">Proceed to Checkout</button>
                </div>
            </div>
            <div v-else style="background: #f0f0f0;">
                <!-- <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" width="100%"> -->
                <div class="text-center">
                    <p class="text-center" style="background: #f2dede; font-size: 13px; color: #a94442 !important;padding: 10px 0;">Your shopping cart is empty!</p>
                    <nuxt-link to="/shop">
                        <v-btn color="primary" rounded>Start Shopping</v-btn>
                    </nuxt-link>
                </div>
                <!-- </v-card> -->

            </div>
        </v-card>
    </section>
</div>
</template>

<script>
import headerP from "../components/include/Headerpartial";
// import headerP from "../include/Headerpartial";
import axios from 'axios';
export default {
    name: 'cart_page',
    props: ['checkout'],
    components: {
        headerP
    },
    data() {
        return {
            loader: false,
            totalCoupon: 0,
            totalPrice: 0,
            discount: 0,
            finalAmount: 0,
            coupon: {
                c_value: ""
            },
            couponSessin: [],
            CartProduct: [],
            err_ms: '',
            form: {
                total: null
            },
            not_found: process.env.NOT_FOUND
        };
    },
    // async fetch({
    //     store
    // }) {
    //     var payload = {
    //         model: 'getCart',
    //         update: 'updateCartsList',
    //     }
    //     await store.dispatch('getItems', payload)
    // },
    methods: {

        imageUrlAlt(e) {
            event.target.src = this.not_found
        },
        getCart() {

            $nuxt.$emit("cartEvent")

        },
        cash_delivery() {
            $nuxt.$emit("progressEvent");
            this.form.total = parseInt(this.cart_total) - parseInt(this.getCouponT)
            axios.post('cash_delivery', this.form)
                .then(response => {
                    $nuxt.$emit("StoprogEvent");
                    // $nuxt.$emit("cartEvent", response.data);
                    $nuxt.$emit("alertRequest", "Order added");
                    // this.carts = response.data;
                    // this.message = "added";
                    // this.snackbar = true;
                })
                .catch(error => {
                    $nuxt.$emit("StoprogEvent");
                    this.loading = false;
                    this.errors = error.response.data.errors;
                });
        },
        get_cart_total() {
            $nuxt.$emit("cartTotalEvent");
        },

        flashCart(cart) {
            $nuxt.$emit("flashCartEvent", cart);
        },
        subtructCart(cart) {
            var payload = {
                order_qty: -1,
                cart: cart
            }
            // cart.order_qty = -1
            $nuxt.$emit("subCartEvent", payload)
        },
        addToCart(cart) {
            var payload = {
                order_qty: 1,
                cart: cart
            }
            // cart.order_qty = 1
            $nuxt.$emit("subCartEvent", payload)
        },
        couponApply() {
            axios
                .post("/couponApply", this.coupon)
                .then(response => {
                    // console.log(response.data.errors);
                    if (response.data.errors) {
                        return this.err_ms = response.data.errors
                    } else {
                        $nuxt.$emit("StoprogEvent");
                        $nuxt.$emit("cartEvent", response.data);
                        $nuxt.$emit("alertRequest", "Coupon Applied");
                        this.getCouponSess();
                        this.getCart();
                        this.err_ms = ''
                    }
                    // this.message = "added";
                    // this.snackbar = true;
                })
                .catch(error => {
                    console.log(error);
                    $nuxt.$emit("StoprogEvent");
                    this.errors = error.response.data.errors;
                });
        },

        getCouponSess() {
            $nuxt.$emit("progressEvent");
            axios
                .get("/couponSes")
                .then(response => {
                    $nuxt.$emit("StoprogEvent");
                    this.couponSessin = response.data;
                })
                .catch(error => {
                    $nuxt.$emit("StoprogEvent");
                    this.errors = error.response.data.errors;
                });
        },
        goToCheckout() {
            this.$router.push({
                name: "checkout"
            });
        },

        getCouponT(data) {
            // console.log(data);
            if (this.couponSessin.length > 0) {
                this.totalCoupon = 0;
                for (let index = 0; index < this.couponSessin.length; index++) {
                    const element = this.couponSessin[index];
                    // console.log(element)
                    if (element.disc_type === "percentage") {
                        this.totalCoupon += (parseInt(data) * parseInt(element.amount)) / 100;
                        // console.log(data, element.amount);

                    } else if (element.disc_type === "fixedCart") {
                        this.totalCoupon = (this.totalCoupon + element.amount);
                        // console.log('this.totalCoupon');
                        // this.finalAmount = this.getTotal - this.totalCoupon;
                    }
                    //  else if (element.disc_type === "productDisc") {
                    //   this.totalCoupon = parseInt(element.amount) + this.totalCoupon;
                    // }
                    else {
                        this.totalCoupon = parseInt(element.amount) + this.totalCoupon;
                    }
                }
                return this.totalCoupon;
            } else {
                return this.totalCoupon;
            }
        }
    },
    mounted() {
        // this.loader = true;
        // this.getCouponSess();
        // this.get_cart_total();
        this.getCart();
        // $nuxt.$emit("ScollTopEvent");
    },
    created() {
        // this.$nuxt.$on("cartEvent", data => {
        //     this.carts = data;
        //     this.cartAdd = true;
        // });
        // this.$nuxt.$on("flashEvent", data => {
        //   this.flashCart(data)
        // });
    },
    computed: {
        getSubTotal() {
            /*if (this.carts.length > 0) {
                this.totalPrice = 0;
                for (let index = 0; index < this.carts.length; index++) {
                    const element = this.carts[index];
                    this.totalPrice = parseInt(element.price) + this.totalPrice;
                }
            }

            return this.totalPrice;*/
        },
        carts() {
            return this.$store.getters.carts
        },
        cart_total() {
            return this.$store.getters.cart_total
        },
        getTotal() {
            if (this.carts.length > 0) {
                return parseInt(this.getSubTotal) - this.discount;
            }
        },
    },
    beforeRouteLeave(to, from, next) {
        // $nuxt.$emit('progressEvent');
        window.scrollTo(0, 0);
        next();
    },
};
</script>

<style>
.bgwhite,
.bg-title-page {
    margin-top: 0px !important;
}
</style>
