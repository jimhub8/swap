<template>
<v-app id="inspire" class="mobile">
    <v-app-bar app clipped-right color="black" dark id="light_theme">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="primary" v-if="!search_show"></v-app-bar-nav-icon>
        <v-toolbar-title v-if="!search_show">
            <nuxt-link to="/" class="logo2">
                <img :src="logo" alt="Swap" style="height: 50px !important;">
            </nuxt-link>
        </v-toolbar-title>
        <v-spacer v-if="!search_show"></v-spacer>
        <v-btn text icon color="primary" v-if="!search_show" @click="search_show = true">
            <v-icon small>search</v-icon>
        </v-btn>
        <myCart v-if="!search_show" />
        <div v-if="!search_show">
            <div class="icon icon-sm rounded-circle border" v-if="this.$store.state.auth.loggedIn">
                <!-- <v-icon>account_circle</v-icon> -->
                <myAccount />
            </div>
            <div class="text">
                <div v-if="!this.$store.state.auth.loggedIn">
                    <!-- <nuxt-link to="/login">Sign in</nuxt-link>
                    <nuxt-link to="/register">Register</nuxt-link> -->

                    <div class="text-center">
                        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
                            <template v-slot:activator="{ on }">
                                <v-btn text icon v-on="on">
                                    <v-icon>account_circle</v-icon>
                                </v-btn>

                            </template>
                            <v-card>
                                <v-card-text>
                                    <v-list dense>

                                        <!-- <v-list-item>
                                            <avatar username="Swap" style="font-size: 20px;margin: auto;padding: 20px;"></avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>Welcome to swap</v-list-item-title>
                                            </v-list-item-content>

                                        </v-list-item> -->
                                        <v-list-item-group color="primary">
                                            <v-list-item>
                                                <nuxt-link to="/login" class="v-list-item v-list-item--link theme--light">
                                                    <div class="v-list__tile__action">
                                                        <v-icon>mdi-login</v-icon>
                                                    </div>
                                                    <div class="v-list-item__content">
                                                        <div class="v-list-item__title">Sign in</div>
                                                    </div>
                                                </nuxt-link>
                                            </v-list-item>

                                            <v-list-item>
                                                <nuxt-link to="/register" class="v-list-item v-list-item--link theme--light">
                                                    <div class="v-list__tile__action">
                                                        <v-icon>mdi-account-plus</v-icon>
                                                    </div>
                                                    <div class="v-list-item__content">
                                                        <div class="v-list-item__title">Sign up</div>
                                                    </div>
                                                </nuxt-link>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                </v-card-text>


                            </v-card>
                        </v-menu>
                    </div>


                </div>
                <span class="text-muted" v-else>Welcome {{ this.$store.state.auth.user.name }}! </span>
            </div>
        </div>
        <mySearch v-else />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
        <v-list dense>

            <v-subheader style="margin-left: 10px">
                <v-icon>menu</v-icon>
                <b style="margin-left: 20px">Menu</b>
                <hr>
            </v-subheader>

            <v-divider style="border-color: rgba(76, 76, 76, 0.12)"></v-divider>
            <v-list-item-group color="primary">
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            <nuxt-link to="/shop" class="nav-link">Shop</nuxt-link>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>
                            <nuxt-link to="/category" class="nav-link">Category</nuxt-link>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <v-divider style="border-color: rgba(76, 76, 76, 0.12)"></v-divider>
        <v-list dense>

            <v-subheader style="margin-left: 10px">
                <v-icon>control_point_duplicate</v-icon>
                <b style="margin-left: 20px">Categories</b>
                <hr>
            </v-subheader>
            <v-divider style="border-color: rgba(76, 76, 76, 0.12)"></v-divider>
            <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in menu.data" :key="i" @click.stop="open_sidebar(item)">
                    <v-list-item-content>
                        <v-list-item-title v-html="item.menu"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>

        </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="left" fixed temporary>
        <v-list>
            <v-list-item @click.stop="close_cat">
                <v-list-item-action>
                    <v-icon>mdi-exit-to-app</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Open Temporary Drawer</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item-group color="primary">
                <v-list-item v-for="(category, i) in categories" :key="i">
                    <v-list-item-content>
                        <nuxt-link :to="'/category/' + category.id">
                            <v-list-item-title>{{ category.category }}</v-list-item-title>
                        </nuxt-link>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>

    <v-footer app color="blue-grey" class="white--text">
        <span>Swap</span>
        <v-spacer></v-spacer>
        <span>&copy; {{ year }}</span>
    </v-footer>
</v-app>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import mySearch from '../Search'
import myCart from "../nav/cart";
import myAccount from "../nav/login";
export default {
    components: {
        mySearch,
        myCart,
        myAccount
    },
    props: {
        source: String,
    },
    data: () => ({
        color: 'red',
        drawer: null,
        drawerRight: null,
        right: false,
        left: false,
        logo: process.env.LOGO,
        categories: [],
        year: new Date().getFullYear(),
        search_show: false,
    }),
    computed: {
        ...mapGetters(['isAuthenticated', 'menu', 'cart_count', 'user']),
        loggedIn() {
            this.$store.state.auth.loggedIn
        }
    },
    mounted() {
        this.getMenu();
        window.addEventListener('scroll', this.updateScroll);
        // this.progressBar();
        this.getCart();
        // // this.getWish();
        this.get_cart_total()
        this.get_cart_count()
        // this.getCategory()
        this.getMenu()
    },
    methods: {
        getMenu() {
            var payload = {
                model: 'menu',
                update: 'updateMenuList',
            }

            this.$store.dispatch("getItems", payload)
        },
        close_cat() {
            this.left = false
            this.drawer = true
        },
        open_sidebar(data) {
            console.log(data);

            this.categories = data.categories
            this.left = true
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },

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

            // console.log(cookie_id)
            // return

            $nuxt.$emit("progressEvent");
            var payload = {
                model: 'cartAdd',
                id: cookie_id,
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
        flashCart(cart) {
            if (this.$store.state.auth.loggedIn) {
                var cookie_id = this.$store.state.auth.user.id
            } else {
                var rString = this.randomString(15, '0123456789');
                if (this.$cookie.get('cart_session') == null) {
                    this.$cookie.set('cart_session', rString);
                }
                var cookie_id = this.$cookie.get('cart_session')
            }

            this.$store.dispatch('overlayAction', true)
            var payload = {
                model: 'flashCart',
                data: cart,
                id: cookie_id
            }
            this.$store.dispatch('postItem', payload).then((res) => {
                this.get_cart_total()
                this.getCart()
                this.get_cart_count()

            }).catch((error) => {
                console.log(error);
                this.$store.dispatch('overlayAction', false)
            })
        }
    },
    created() {
        this.$nuxt.$on('showMenuEvent', data => {
            this.search_show = data
        });

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

        this.$nuxt.$on("flashCartEvent", data => {
            this.flashCart(data)
        });
        this.$nuxt.$on("cartCountEvent", data => {
            this.get_cart_count()
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
.mobile .v-toolbar__title {
    padding: 0 !important;
}
</style>
