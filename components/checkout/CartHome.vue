<template>
<div id="cart_home">
    <section class="cart bgwhite p-t-70 p-b-100">
        <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" @click="getCart">
                    <v-icon color="primary" small>mdi-refresh</v-icon>
                </v-btn>
            </template>
            <span>Refresh Cart</span>
        </v-tooltip>
        <div class="container">
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
                                </div>
                            </td>
                            <td class="column-2">{{ cart.name.product_name }}</td>
                            <td class="column-3">{{ cart.price }}</td>
                            <td class="column-4">
                                <div class="flex-w bo5 of-hidden w-size17">
                                    <v-btn icon small @click="subtructCart(car, -1)">
                                        <v-icon>mdi-minus</v-icon>
                                    </v-btn>
                                    <p style="text-align: center; margin: auto;">{{ cart.quantity }}</p>
                                    <v-btn icon small @click="addToCart(cart,1)">
                                        <v-icon>add</v-icon>
                                    </v-btn>
                                </div>
                            </td>
                            <td class="column-5">{{ cart.subtotal }}</td>
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

                    <span class="m-text21 w-size20 w-full-sm" style="color: red;">{{ getCouponT/getSubTotal*100 }}% off</span>
                </div>

                <!--  -->
                <hr>
                <!--  -->
                <div class="flex-w flex-sb-m p-t-26 p-b-30">
                    <span class="m-text22 w-size19 w-full-sm">Total:</span>

                    <span class="m-text21 w-size20 w-full-sm">KSH {{ parseFloat(cart_total) - parseFloat(totalCoupon) }}</span>
                </div>

                <div class="size15 trans-0-4">
                    <!-- Button -->
                    <form action="#" method="post" ref="paypal" v-if="account.payment === 'Paypal'" target="_blank">
                        <!-- <input type="hidden" name="_token" :value="csrf"> -->
                        <button type="submit" style="height: 44px;" class="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">Place Order</button>
                    </form>
                    <v-btn text color="primary" @click="cash_delivery" v-else-if="account.payment === 'M-pesa'">Place Order</v-btn>
                    <v-btn text color="primary" @click="cash_delivery" v-else>Place Order</v-btn>
                </div>
            </div>
        </div>
        <!-- <div v-else style="background: #f0f0f0;">
            <p class="text-center" style="background: #f2dede; font-size: 13px; color: #a94442 !important;">Your shopping cart is empty!</p>
            <v-list>
                <router-link to="/shop" class="v-list__tile v-list__tile--link" style="width: 8%; margin: auto;">
                    <div class="v-list__tile__content">
                        <div class="v-list__tile__title">
                            Go to Shop
                        </div>
                    </div>
                </router-link>
            </v-list>
        </div> -->
    </section>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'cart_home',
    props: ['account'],
    data() {
        return {
            // csrf: document
            //     .querySelector('meta[name="csrf-token"]')
            //     .getAttribute("content"),
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
    methods: {

        imageUrlAlt(e) {
            event.target.src = this.not_found
        },
        getCart() {
            $nuxt.$emit("cartEvent")

        },
        cash_delivery() {
            this.$store.dispatch('overlayAction', true)
            var payload = {
                model: 'cash_delivery',
                data: this.account
            }
            this.$store.dispatch('postItems', payload).then((res) => {
                this.$router.push('/thankyou')
                this.$store.dispatch('overlayAction', false)
                this.get_cart_total()
                this.get_count()
            }).catch((error) => {
                console.log(error);

                this.$store.dispatch('overlayAction', false)
            })

            return

        },
        get_cart_total() {
            $nuxt.$emit("cartTotalEvent");
        },
        get_count() {
            $nuxt.$emit("cartCountEvent");
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
                    console.log(response.data.errors);
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

        getCartProduct() {
            $nuxt.$emit("progressEvent");
            axios
                .get("/getCart")
                .then(response => {
                    console.log(response.data);

                    $nuxt.$emit("StoprogEvent");
                    this.CartProduct = response.data;
                })
                .catch(error => {
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
        }
    },
    mounted() {
        // this.loader = true;
        // this.getCouponSess();
        this.get_cart_total();
        this.getCart();
    },
    created() {
        this.$nuxt.$on("cartEvent", data => {
            this.carts = data;
            this.cartAdd = true;
        });

        this.$nuxt.$on("paypalEvent", data => {
            this.$refs.paypal.submit()
        });
    },
    computed: {
        getSubTotal() {
            if (this.carts.length > 0) {
                this.totalPrice = 0;
                for (let index = 0; index < this.carts.length; index++) {
                    const element = this.carts[index];
                    this.totalPrice = parseInt(element.price) + this.totalPrice;
                }
            }
            return this.totalPrice;
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
        getCouponT() {
            if (this.couponSessin.length > 0) {
                this.totalCoupon = 0;
                for (let index = 0; index < this.couponSessin.length; index++) {
                    const element = this.couponSessin[index];
                    if (element.disc_type === "percentage") {
                        this.totalCoupon += (this.getSubTotal * element.amount) / 100;
                        console.log(this.totalCoupon);

                    } else if (element.disc_type === "fixedCart") {
                        this.totalCoupon = (this.totalCoupon + element.amount);
                        console.log('this.totalCoupon');
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
    }
};
</script>

<style>
.theme--dark.v-stepper .v-stepper__label {
    color: #000;
}
</style>
