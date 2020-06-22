<template>
<v-app id="inspire">
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
                    <nuxt-link to="/login">Sign in</nuxt-link>
                    <nuxt-link to="/register">Register</nuxt-link>
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
        }
    },
    created () {
      this.$nuxt.$on('showMenuEvent', data => {
        this.search_show = data
      });
    },

}
</script>
