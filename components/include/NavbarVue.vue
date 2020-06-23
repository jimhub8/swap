<template>
<div>
    <header class="section-header" style="max-height: 180px;">
        <nav class="navbar navbar-dark navbar-expand p-0 bg-primary" :class="{classA: scrollPosition < 150, classB: scrollPosition > 150}">
            <div class="container">
                <ul class="navbar-nav d-none d-md-flex mr-auto">
                    <li class="nav-item">
                        <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/shop" class="nav-link">Shop</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/category" class="nav-link">Category</nuxt-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <!-- <a href="#" class="nav-link"> Call: +254711272820 </a> -->
                        <a class="nav-link" href="tel:+254711272820">Call: +254711272820</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"> English </a>
                        <!-- <ul class="dropdown-menu dropdown-menu-right" style="max-width: 100px;">
                            <li><a class="dropdown-item" href="#">Arabic</a></li>
                            <li><a class="dropdown-item" href="#">Russian </a></li>
                        </ul> -->
                    </li>
                </ul> <!-- list-inline //  -->
            </div> <!-- navbar-collapse .// -->

            <!-- container //  -->
        </nav> <!-- header-top-light.// -->

        <section class="header-main border-bottom">
            <div class="">
                <v-row wrap>
                    <!-- <div class="row align-items-center"> -->
                    <v-col sm="4" md="2" lg="2" :class="{show_menu: show_menu}">
                        <nuxt-link to="/" class="brand-wrap">
                            <img class="logo" :src="logo">
                        </nuxt-link>
                    </v-col>
                    <v-col sm="6" md="2" lg="2">
                        <myCategory />
                    </v-col>

                    <v-col sm="5" md="3" lg="3">
                        <mySearch />
                    </v-col>

                    <v-col sm="6" md="4" lg="4">
                        <div class="widgets-wrap float-md-right">
                            <div class="widget-header  mr-3">
                                <div class="icon icon-sm rounded-circle border">
                                    <myCart />
                                </div>
                                <span class="badge badge-pill badge-danger notify">{{ cart_count }}</span>
                            </div>
                            <div class="widget-header icontext">
                                <div class="icon icon-sm rounded-circle border" v-if="this.$store.state.auth.loggedIn">
                                    <!-- <v-icon>account_circle</v-icon> -->
                                    <myAccount />
                                </div>
                                <div class="text">
                                    <div v-if="!this.$store.state.auth.loggedIn">
                                        <nuxt-link to="/login">Sign in</nuxt-link>
                                        <nuxt-link to="/register">Register</nuxt-link>
                                    </div>
                                    <span class="text-muted" v-else>Welcome {{ this.$store.state.auth.user.name }}! </span>
                                </div>
                            </div>
                        </div> <!-- widgets-wrap.// -->
                    </v-col>
                </v-row>
            </div> <!-- container.// -->
        </section> <!-- header-main .// -->
    </header>

    <v-snackbar :timeout="timeout" bottom :color="Scolor" left v-model="snackbar">
        {{ message }}
        <v-icon dark right>check_circle</v-icon>
    </v-snackbar>
</div>
</template>

<script>
import mySearch from './Search'
import myCategory from './nav/category'
import myCart from "./nav/cart";
import myAccount from "./nav/login";
import {
    mapState
} from 'vuex';
export default {
    name: 'navigation',
    components: {
        myCategory,
        myCart,
        myAccount,
        mySearch

    },
    data() {
        return {
            show_menu: false,
            timeout: 5000,
            snackbar: false,
            message: '',
            Scolor: 'black',
            scrollPosition: null,
            logo: process.env.LOGO,
            offsetTop: 0,
            duration: 1000,
            easing: "easeInOutCubic",
        }
    },

    methods: {

        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        getCart() {

            if (this.$store.state.auth.loggedIn) {
                var cookie_id = this.$store.state.auth.user.id
            } else {
                var rString = this.randomString(15, '0123456789');
                if (this.$cookie.get('cart_session') == null) {
                    this.$cookie.set('cart_session', rString);
                }
                var cookie_id = this.$cookie.get('cart_session')
            }

            var payload = {
                model: 'getCart',
                id: cookie_id,
                update: 'updateCartsList',
            }
            this.$store.dispatch('getItem', payload)
        },

        getMenu() {
            var payload = {
                model: 'menu',
                update: 'updateMenuList',
            }

            this.$store.dispatch("getItems", payload)
        },

        get_cart_total() {
            if (this.$store.state.auth.loggedIn) {
                var cookie_id = this.$store.state.auth.user.id
            } else {
                var rString = this.randomString(15, '0123456789');
                if (this.$cookie.get('cart_session') == null) {
                    this.$cookie.set('cart_session', rString);
                }
                var cookie_id = this.$cookie.get('cart_session')
            }

            var payload = {
                model: 'cart_total',
                id: cookie_id,
                update: 'updateCartTotalList',
            }
            this.$store.dispatch('getItem', payload)
        },
        get_cart_count() {

            if (this.$store.state.auth.loggedIn) {
                var cookie_id = this.$store.state.auth.user.id
            } else {
                var rString = this.randomString(15, '0123456789');
                if (this.$cookie.get('cart_session') == null) {
                    this.$cookie.set('cart_session', rString);
                }
                var cookie_id = this.$cookie.get('cart_session')
            }
            var payload = {
                model: 'cart_count',
                id: cookie_id,
                update: 'updateCartCountList',
            }
            this.$store.dispatch('getItem', payload)

            // var payload = {
            //     model: 'cart_count',
            //     update: 'updateCartCountList',
            // }

            // this.$store.dispatch('getItems', payload)
        },

        showerror(data) {
            // this.$message({
            //     showClose: true,
            //     message: 'Congrats, this is a success message.',
            //     type: 'success'
            // });

            this.message = data;
            this.Scolor = "black";
            this.snackbar = true;
        },

        showalert(data) {
            // this.$message({
            //     showClose: true,
            //     message: 'Congrats, this is a success message.',
            //     type: 'success'
            // });
            // alert('test')
            this.message = data;
            this.Scolor = "black";
            this.snackbar = true;
        },

        update_cart(data) {
            // console.log(data);
            // var cart = data.cart

            if (this.$store.state.auth.loggedIn) {
                var cookie_id = this.$store.state.auth.user.id
            } else {
                var rString = this.randomString(15, '0123456789');
                if (this.$cookie.get('cart_session') == null) {
                    this.$cookie.set('cart_session', rString);
                }
                var cookie_id = this.$cookie.get('cart_session')
            }
            // cart.quantity = data.order_qty
            var payload = {
                model: 'update_cart',
                id: cookie_id,
                data: data,
            }
            this.$store.dispatch('postItem', payload).then((res) => {
                this.getCart()
                this.get_cart_total()
                this.get_cart_count()
            })
        },
        addToCart(cart) {
            // console.log(cart);

            if (this.$store.state.auth.loggedIn) {
                var cookie_id = this.$store.state.auth.user.id
            } else {
                var rString = this.randomString(15, '0123456789');
                if (this.$cookie.get('cart_session') == null) {
                    this.$cookie.set('cart_session', rString);
                }
                var cookie_id = this.$cookie.get('cart_session')
            }

            // console.log(this.$cookie.get('cart_session'))
            // return

            $nuxt.$emit("progressEvent");
            var payload = {
                model: 'cartAdd',
                id: this.$cookie.get('cart_session'),
                // id: cart.id,
                data: cart,
            }

            this.$store.dispatch('postItem', payload).then((res) => {
                this.getCart()
                this.get_cart_count()
                this.get_cart_total()
            })
        },
        randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
            return result;
        },

        progressBar() {
            // this.$refs.topProgress.start();
        },

        onScroll(e) {
            // this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
        },

    },

    computed: {
        ...mapState(['cart_count', 'user']),

        loggedIn() {
            this.$store.state.auth.loggedIn
        }

        // console.log(this.$auth.$state.access_local);

    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
        // this.progressBar();
        this.getCart();
        // // this.getWish();
        this.get_cart_total()
        this.get_cart_count()
        // this.getCategory()
        this.getMenu()
    },

    created() {
        this.$nuxt.$on("addCartEvent", data => {
            this.addToCart(data);
        });
        this.$nuxt.$on("subCartEvent", data => {
            this.update_cart(data);
        });
        this.$nuxt.$on("WishListEvent", data => {
            this.addToWish(data);
        });
        this.$nuxt.$on("cartTotalEvent", data => {
            this.get_cart_total()
        });
        this.$nuxt.$on("cartEvent", data => {
            this.getCart()
        });
        this.$nuxt.$on("alertRequest", data => {
            // console.log(data);

            this.showalert(data);
        });
        this.$nuxt.$on("errorRequest", data => {
            this.showerror(data);
        });
        this.$nuxt.$on("loadingRequest", data => {
            this.loadingalert();
        });
        this.$nuxt.$on("progressEvent", data => {
            // this.$refs.topProgress.start();
        });
        this.$nuxt.$on("StoprogEvent", data => {
            // this.$refs.topProgress.done();
        });
        this.$nuxt.$on("ScollEvent", data => {
            // window.scrollTo(0, 300);
            // VueScroll.scrollTo('#headerq', 1000)
        });
        this.$nuxt.$on("ScollTopEvent", data => {
            // window.scrollTo(0, 0);
            // VueScroll.scrollTo('#headerq', 1000)
        });
        this.$nuxt.$on("errorEvent", data => {
            this.showerror(data);
        });

        this.$nuxt.$on("Productdetails", data => {
            this.redirect(data);
        });
        this.$nuxt.$on("showMenuEvent", data => {
            this.show_menu = data
        });

        // this.timer = window.setInterval(() => {
        //     this.getCart();
        //     // $nuxt.$emit("cartEvent", response.data);
        // }, 60000);

        this.$nuxt.$on('addCartVariantEvent', res_data => {
            var choices = res_data.choices
            var data = res_data.skus
            this.product = data.product
            data.product.sku_no = data.sku_no
            data.product.order_qty = 1
            data.product.price = data.price
            data.product.quantity = data.quantity
            data.product.sku_id = data.sku_id

            if (choices) {
                data.product.choices = choices
            }

            this.addToCart(data.product);
            // this.addCart(data.product)
        })
    },

}
</script>

<style>
header {
    position: fixed;
    width: 100%;
    background: #000;
    z-index: 100;
}

.v-btn--outlined .v-btn__content .v-icon,
.v-btn--round .v-btn__content .v-icon,
.v-icon.v-icon {
    color: #00b5ff !important
}

.classA {
    display: block;
}

.classB {
    display: none;
}

.bg-primary {
    background-color: #29425d !important;
}

.v-snack__content {
    color: #fff !important;
}

/* .ais-SearchBox [type=search] {
    color: white !important;
} */

.show_menu .logo {
    top: 8% !important;
}
</style>
