<template>
<div>

    <div class="box-title" style="margin: 30px 0;">
        <h3><span>New items</span></h3>
    </div>
    <v-data-iterator :items="products.data" :items-per-page.sync="itemsPerPage" :page="page" :search="search" :sort-by="sortBy.toLowerCase()" :sort-desc="sortDesc" hide-default-footer>

        <template v-slot:default="props">
            <v-row>
                <v-col v-for="item in props.items" :key="item.product_name" cols="12" sm="6" md="4" lg="3" v-if="item.new_product">
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="mx-auto" color="grey lighten-4" max-width="800">
                            <v-img :aspect-ratio="16/9" :src="item.image" lazy-src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png" height="300px">
                                <v-expand-transition>
                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text" style="height: 100%;">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <v-btn icon v-on="on" @click="product_view(item)">
                                                    <v-icon color="primary">visibility</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>Quick view</span>
                                        </v-tooltip>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <v-btn icon v-on="on">
                                                    <v-icon color="primary">favorite</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>add to wish list</span>
                                        </v-tooltip>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <v-btn icon v-on="on" @click="addToCart(item)">
                                                    <v-icon color="primary">shopping_cart</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>add to cart</span>
                                        </v-tooltip>
                                    </div>
                                </v-expand-transition>
                            </v-img>
                            <nuxt-link :to="buildUrl(item)">
                                <v-card-text class="pt-6" style="position: relative;">
                                    <h1>{{ item.product_name }}</h1>
                                    <div class="font-weight-light title mb-2">
                                       KES {{ item.price }}
                                    </div>
                                </v-card-text>
                            </nuxt-link>
                        </v-card>
                    </v-hover>

                </v-col>
            </v-row>
        </template>

        <template v-slot:footer>
            <v-row class="mt-2" align="center" justify="center">
                <span class="grey--text">Items per page</span>
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn dark text color="primary" class="ml-2" v-on="on">
                            {{ itemsPerPage }}
                            <v-icon>mdi-chevron-down</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(number, index) in itemsPerPageArray" :key="index" @click="updateItemsPerPage(number)">
                            <v-list-item-title>{{ number }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-spacer></v-spacer>

                <span class="mr-4
            grey--text">
                    Page {{ page }} of {{ numberOfPages }}
                </span>
                <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </v-row>
        </template>
    </v-data-iterator>
</div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            itemsPerPageArray: [4, 8, 12],
            search: '',
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 4,
            sortBy: 'product_name',
            keys: [
                'Product name',
                'sku no',
            ],
        }
    },
    computed: {
        numberOfPages() {
            return Math.ceil(this.products.data.length / this.itemsPerPage)
        },
        filteredKeys() {
            return this.keys.filter(key => key !== `Name`)
        },

        products() {
            return this.$store.getters.products
        },
    },
    methods: {
        nextPage() {
            if (this.page + 1 <= this.numberOfPages) this.page += 1
        },
        formerPage() {
            if (this.page - 1 >= 1) this.page -= 1
        },
        updateItemsPerPage(number) {
            this.itemsPerPage = number
        },

        product_view(product) {
            $nuxt.$emit("viewProEvent", product);
        },

        addToCart(cart) {
            if (cart.product_variants.length > 0) {
                $nuxt.$emit('selectVariantsEvent', cart)
                // this.select_variants()
                return
            }
            cart.order_qty = 1
            $nuxt.$emit("addCartEvent", cart);
        },
        wishList(item) {
            $nuxt.$emit("WishListEvent", item);
        },
        Productdetails(id) {
            $nuxt.$emit('Productdetails', id)
        },

        buildUrl(product) {
          return '/shop/' + this.$slugify(product.id, product.product_name)
        }
    },
}
</script>

<style scoped>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}
h1 {
    font-size: 20px !important;
}
</style>
