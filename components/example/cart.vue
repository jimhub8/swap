<template>
<div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
        <template v-slot:activator="{ on }">
            <VBtn text icon color="success" v-on="on">
              <VIcon>shopping_cart</VIcon>
            </VBtn>

        </template> 

        <v-card style="padding-right: 10px;">
            <ul class="header-cart-wrapitem">
            <li class="header-cart-item" v-for="cart in carts" :key="cart.id" style="cursor: pointer;border-bottom: 1px solid rgba(153, 153, 153, 0.31)">
                <div class="header-cart-item-img" >
                    <!-- <img :src=" cart.product.image" alt="IMG"> -->
                </div>

                <div class="header-cart-item-txt">
                    <a href="#" class="header-cart-item-name">{{ cart.name.product_name }}</a>
                    <span class="header-cart-item-info">{{ cart.quantity }} X {{ cart.price }}</span>
                </div>
            </li>
        </ul>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="menu = false">Go To Cart</v-btn>
                <v-btn color="primary" text @click="menu = false">Checkout</v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data: () => ({
        fav: true,
        menu: false,
        message: false,
        hints: true,
    }),
    methods: {

        getCart() {
            var payload = {
                model: 'getCart',
                update: 'updateCartsList',
            }
            this.$store.dispatch('getItems', payload)
        },
    },
    mounted () {
      this.getCart()
    },
    computed: {
      ...mapState(['carts'])
    },
}
</script>



