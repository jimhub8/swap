<template>
<v-app id="inspire" v-scroll="onScroll">
    <!-- <vue-topprogress ref="topProgress"></vue-topprogress> -->
    <!-- <v-app id="inspire"> -->
    <header class="header2" id="headerq">
        <!-- Header desktop -->
        <div class="wrap_header fixed-header2 trans-0-4">
            <!-- <div style="float: left"> -->
            <!-- </div> -->
            <!-- Logo -->
            <div class="flex-c-m size22 s-text21 pos-relative" style="background:#f0f0f0;">
                <myCartmenu :menus="menus" :categories="categories"></myCartmenu>
            </div>
            <nuxt-link @click.native="progressBar" to="/" class="logo">
                <img :src="logo" alt="Swap">
            </nuxt-link>
            <!-- Mini Menu Start -->
            <div class="wrap_menu" id="header2">
                <nav class="menu">
                    <ul class="main_menu" style="background: #fff;">
                        <li>
                            <nuxt-link @click.native="progressBar" to="/">Home</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link @click.native="progressBar" to="/shop">Shop</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link @click.native="progressBar" to="/cart">Cart</nuxt-link>
                        </li>
                        <!-- <li>
                                <nuxt-link @click.native="progressBar" to="/about">About Us</nuxt-link>
                            </li> -->

                    </ul>
                </nav>
            </div>
            <div class="header-icons">
                <!-- <a href="/login" class="header-wrapicon1 dis-block" v-if="user">
            <img src="/storage/icons/icon-header-01.png" class="header-icon1" alt="ICON">
          </a> -->
                <a href="/seller/register" class="v-btn v-btn--text theme--light primary--text" style="text-decoration: none;">Become a seller</a>
                <Logout :user="user" v-if="user"></Logout>

                <!-- <v-btn href="/login" class="v-btn v-btn--text theme--light primary--text" style="text-decoration: none;" v-else>Login</v-btn> -->
                <v-btn color="primary" href="/login" v-else>Login</v-btn>
                <span class="linedivide1"></span>

                <div class="header-wrapicon2">
                    <img src="https://storage.cloud.google.com/ecomerce_bucket/icons/cart.png?authuser=1" class="header-icon1 js-show-header-dropdown" alt="ICON">
                    <span class="header-icons-noti">{{ cart_count }}</span>

                    <!-- Header cart noti -->
                    <!-- <myCart /> -->
                </div>
                <span class="linedivide2"></span>
                <div class="header-wrapicon2">
                    <img src="https://storage.cloud.google.com/ecomerce_bucket/icons/wish.png?authuser=1" class="header-icon1 js-show-header-dropdown" alt="ICON">
                    <span class="header-icons-noti">{{ wishItems.length }}</span>

                    <!-- Header cart noti -->
                    <!-- <myWish></myWish> -->
                </div>
            </div>
        </div>
        <!-- Mini Menu Start End -->

        <!-- Big navigation Start -->
        <div class="container-menu-header-v2 p-t-26">
            <div class="topbar2" style="margin-top: -26px;padding-bottom: 20px;">
                <div class="topbar-social">
                    <a href="https://www.facebook.com/DellmatGroup" target="_blank" class="topbar-social-item fa fa-facebook"></a>

                    <span class="topbar-email" style="margin: 0 10px"><a href="mailto:info@dellmat.com" target="_blank">info@dellmat.com</a></span>
                </div>
                <br>
                <hr>

                <!-- Logo2 -->
                <nuxt-link to="/" class="logo2">
                    <img :src="logo" alt="Swap" style="height: 50px !important;">
                </nuxt-link>

                <div class="topbar-child2">

                    <!-- <div class="topbar-language rs1-select2" style="margin-left: 10px !important">
                        <select class="selection-1" name="time">
                            <option>KSH</option>
                        </select>
                    </div> -->
                    <!-- <v-divider vertical /> -->
                    <!--  -->
                    <!-- <a href="/seller/register" class="v-btn v-btn--text theme--light primary--text" style="text-decoration: none;margin: 0 10px">Become a seller</a> -->
                    <v-btn color="primary" href="/seller/register" style="margin: 0 10px">Become a seller</v-btn>
                    <!-- <v-divider vertical /> -->

                    <Logout :user="user" v-if="user"></Logout>

                    <v-btn color="primary" v-else href="/login">Login</v-btn>
                    <!-- <a href="/login" class="v-btn v-btn--text theme--light primary--text" style="text-decoration: none;" v-else>Login</a> -->

                    <span class="linedivide1"></span>

                    <div class="header-wrapicon2 m-r-13">
                        <img src="https://storage.cloud.google.com/ecomerce_bucket/icons/cart.png?authuser=1" class="header-icon1 js-show-header-dropdown" alt="ICON">
                        <span class="header-icons-noti">{{ cart_count }}</span>

                        <!-- Header cart noti -->
                        <!-- <myCart /> -->
                    </div>
                    <div class="header-wrapicon2 m-r-13">
                        <img src="https://storage.cloud.google.com/ecomerce_bucket/icons/wish.png?authuser=1" class="header-icon1 js-show-header-dropdown" alt="ICON">
                        <span class="header-icons-noti">{{ wishItems.length }}</span>
                        <!-- Header cart noti -->
                        <!-- <myWish></myWish> -->
                    </div>
                </div>
            </div>

            <div class="flex-c-m size22 s-text21 pos-relative" style="background:#f0f0f0;">

                <myCartmenu :menus="menus" :categories="categories"></myCartmenu>
            </div>
        </div>

        <div class="wrap_header">

            <!-- Main Menu -->
            <div class="wrap_menu" id="header1">
                <nav class="menu">
                    <ul class="main_menu">
                        <li>
                            <nuxt-link @click.native="progressBar" to="/">Home</nuxt-link>
                        </li>

                        <li>
                            <nuxt-link @click.native="progressBar" to="/shop">Shop</nuxt-link>
                        </li>

                        <li>
                            <nuxt-link @click.native="progressBar" to="/cart">Cart</nuxt-link>
                        </li>

                        <!-- <li>
                                <nuxt-link @click.native="progressBar" to="/about">About Us</nuxt-link>
                            </li> -->
                    </ul>
                </nav>
            </div>

            <!-- Header Icon -->
            <div class="header-icons"></div>
        </div>
        <!-- Big navigation End -->

        <!-- Menu Mobile -->
        <mobileNav :user="user" :logo="logo" />
        <!-- Menu Mobile -->

    </header>
    <v-fab-transition v-if="offsetTop >= 400">
        <v-btn color="pink" v-scroll-to="'#headerq'" dark fab fixed bottom left ref="button">
            <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
    </v-fab-transition>
    <v-snackbar :timeout="timeout" :bottom="y === 'bottom'" :color="Scolor" :left="x === 'left'" v-model="snackbar">
        {{ message }}
        <v-icon dark right>check_circle</v-icon>
    </v-snackbar>
</v-app>
</template>

<script>
// import * as easings from "vuetify/es5/util/easing-patterns";
// vuetify/es5/Vuetify/goTo/easing-patterns
// import {
//     vueTopprogress
// } from "vue-top-progress";
// import myCart from "../cart/Cartvue";
// // import myWish from "../wish/Wishvue";
// import myShop from "../Shop/Shop";
// import CartHome from "../cart/CartHome";
import Logout from "./Logout";
import mobileNav from './header/Mobile'
import { mapGetters } from 'vuex'

import myCartmenu from './Catmenu'
export default {
    // router,
    props: ["user"],
    components: {
        myCartmenu,
        // // vueTopprogress,
        // // myWish,
        // myShop,
        // CartHome,
        // myCart,
        Logout,
        mobileNav,
    },
    data() {
        return {
            form: {},
            search: "",
            catShow: false,
            menuShow: false,
            categories: [],
            menus: [],
            drawer: true,
            right: null,
            snackbar: false,
            y: "bottom",
            x: "left",
            Allusers: [],
            Scolor: "",
            timeout: 5000,
            message: "Success",
            offsetTop: 0,
            duration: 1000,
            easing: "easeInOutCubic",
            // easings: Object.keys(easings),
            type: "number",
            wishItems: [],
            logo: 'http://dellmat.jim/logo/logo.jpg',
            app_name: process.env.MIX_APP_NAME,
        };
    },
    methods: {
        gotoSub(item) {
            $nuxt.$emit("progressEvent");
            $nuxt.$emit("goToSubEvent", item);
            this.$router.push({
                name: "Category",
                params: {
                    id: item,
                    type: "subcat"
                }
            });
            // $nuxt.$emit("gotoSUbcatEvent", item);
        },
        gotoCat(item) {
            $nuxt.$emit("progressEvent");
            $nuxt.$emit("goToCatEvent", item);
            this.$router.push({
                name: "Category",
                params: {
                    id: item,
                    type: "cat"
                }
            });
            // $nuxt.$emit("gotoCatEvent", item);
        },
        showMenu(menu) {
            this.menuShow = true;
            this.categories = menu.categories;
        },
        progressBar() {
            // this.$refs.topProgress.start();
        },

        onScroll(e) {
            // this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
        },
        update_cart(cart, quantity) {
            cart.quantity = quantity
            var payload = {
                model: 'update_cart',
                id: cart.id,
                data: cart,
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
                this.get_cart_total()
                this.get_cart_count()
            })
        },
        addToWish(wish) {
            console.log(wish);
            $nuxt.$emit("progressEvent");
            var payload = {
                model: 'wish',
                id: wish.id,
                data: wish,
            }

            this.$store.dispatch('postItem', payload).then((res) => {
                this.getWish()
                this.get_wish_total()
                this.get_wish_count()
            })
        },
        categoryPro(data) {
            // console.log(data)
            $nuxt.$emit("filterEvent", data.id);

            // router.go('')
            // this.$router.push(`/filter/${data.id}`)
        },
        unfilter() {
            this.loadingalert();
            $nuxt.$emit("unfilterEvent");
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

            // axios.get("/cart_count").then(response => {
            //     this.cart_count = response.data;
            // });
        },
        get_wish_total() {

            var payload = {
                model: 'cart_count',
                update: 'updateCartCountList',
            }
            this.$store.dispatch('getItems', payload)
        },
        get_wish_count() {

            var payload = {
                model: 'cart_count',
                update: 'updateCartCountList',
            }

            this.$store.dispatch('getItems', payload)
        },

        getCategory() {

            var payload = {
                model: 'categories',
                update: 'updateCategoryList',
            }

            this.$store.dispatch('getItems', payload)
        },
        getMenu() {

            var payload = {
                model: 'menu',
                update: 'updateMenuList',
            }

            this.$store.dispatch('getItems', payload)
        },
        getWish() {

            var payload = {
                model: 'wish',
                update: 'updateWishCountList',
                id: cart,
            }

            this.$store.dispatch('getItems', payload)

        },

        addToWish(item) {
            $nuxt.$emit("progressEvent");
            // $nuxt.$emit("loadingRequest");
            axios
                .patch(`/wish/${item}`)
                .then(response => {
                    $nuxt.$emit("alertRequest", "Wishlist updated");
                    $nuxt.$emit("RefWishEvent");
                    $nuxt.$emit("StoprogEvent");
                    this.getWish();
                    // this.snackbar = true;
                })
                .catch(error => {
                    $nuxt.$emit("StoprogEvent");
                    this.errors = error.response.data.errors;
                });
        },

        showerror(data) {
            this.message = data;
            this.Scolor = "red";
            this.snackbar = true;
        },

        showalert(data) {
            this.message = data;
            this.Scolor = "black";
            this.snackbar = true;
        },

        loadingalert() {
            this.message = "Loading...";
            this.Scolor = "black";
            this.y = "top";
            this.x = "right";
            this.snackbar = true;
        },

        productSearch() {
            // alert('test')
            // $nuxt.$emit("openSearch");
            $nuxt.$emit("searchEvent", this.search);
            this.$router.push({
                name: "search",
                params: {
                    search: this.search
                }
            });
        },

        redirect(id) {
            // alert('oooo')
            this.$router.push({
                name: "details",
                params: {
                    id: id
                }
            });
        },
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

            // console.log(data);

            // if (this.cart_item.cart.length > 0) {
            //     this.cart_item.cart.forEach(element => {
            //         if (data.sku_no == element.sku_no) {
            //             data.product = element
            //         }
            //     });
            // }
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

    computed: {
        ...mapGetters(['isAuthenticated', 'loggedInUser']),

        target() {
            const value = this[this.type];
            return Number(value);
        },
        options() {
            return {
                duration: this.duration,
                offsetTop: this.offsetTop,
                easing: this.easing
            };
        },
        cart_count() {
            return this.$store.getters.cart_count
        },

        wish_count() {
            return this.$store.getters.wish_count
        }

    },
    mounted() {
        // this.progressBar();
        // this.getCart();
        // // this.getWish();
        // this.get_cart_total()
        this.get_cart_count()
        // this.getCategory()
        // this.getMenu()
    },
};
</script>

<style scoped>
#header1 .main_menu>li>a:hover {
    color: #f0aca1;
}

.nuxt-link-exact-active {
    color: #e65540 !important;
}

#category .active {
    color: #e65540;
    padding: 5px 0;
    cursor: pointer;
    /* font-size: 17px; */
    font-style: italic;
    font-weight: bold;
}

#category .card-text {
    cursor: pointer;
    padding: 5px 0;
    color: #000;
}

#category .card-text:hover {
    color: #f00;
}
</style>
