<template>
<div>
    <header class="section-header">
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
                <div class="row align-items-center">
                    <div class="col-lg-2 col-2">
                        <nuxt-link to="/" class="brand-wrap">
                            <img class="logo" :src="logo">
                        </nuxt-link>
                    </div>
                    <div class="col-lg-2 col-4">
                        <myCategory />
                    </div>

                    <div class="col-lg-4 col-4 col-sm-12">
                        <!-- <form action="#" class="search">
                            <div class="input-group w-100">
                                <input type="text" class="form-control" placeholder="Search">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form> -->
                        <!-- <mySearch /> -->
                    </div> <!-- col.// -->
                    <div class="col-lg-3 col-sm-3 col-4">
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
                    </div> <!-- col.// -->
                </div> <!-- row.// -->
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
// import mySearch from './Search'
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
        // mySearch

    },
    data() {
        return {
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
            var payload = {
                model: 'getCart',
                update: 'updateCartsList',
            }
            this.$store.dispatch('getItems', payload)
        },

        get_cart_total() {
            var payload = {
                model: 'cart_total',
                update: 'updateCartTotalList',
            }
            this.$store.dispatch('getItems', payload)
        },
        get_cart_count() {
            var payload = {
                model: 'cart_count',
                update: 'updateCartCountList',
            }

            this.$store.dispatch('getItems', payload)
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
            console.log(data);
            // var cart = data.cart
            // cart.quantity = data.order_qty
            var payload = {
                model: 'update_cart',
                id: data.cart.id,
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
            $nuxt.$emit("progressEvent");
            var payload = {
                model: 'cartAdd',
                id: cart.id,
                data: cart,
            }

            this.$store.dispatch('postItem', payload).then((res) => {
                this.getCart()
                this.get_cart_count()
                this.get_cart_total()
            })
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
        // this.get_cart_total()
        this.get_cart_count()
        // this.getCategory()
        // this.getMenu
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
    z-index: 1000;
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
</style>
