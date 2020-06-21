<template>
<div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
        <template v-slot:activator="{ on }">
            <v-btn text icon color="primary" v-on="on">
                <v-icon>account_circle</v-icon>
            </v-btn>

        </template>
        <v-card>
            <v-card-text>
                <v-list dense>

                    <v-list-item>
                        <!-- <avatar username="Jane Doe"></avatar> -->
                        <avatar :username="this.$store.state.auth.user.name" style="font-size: 20px;margin: auto;padding: 20px;"></avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{ this.$store.state.auth.user.name }}</v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item-group color="primary">
                        <v-list-item>
                            <nuxt-link to="/account" class="v-list-item v-list-item--link theme--light">
                                <div class="v-list__tile__action">
                                    <i aria-hidden="true" class="icon material-icons">account_circle</i>
                                </div>
                                <div class="v-list-item__content">
                                    <div class="v-list-item__title">My Account</div>
                                </div>
                            </nuxt-link>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-card-text>

            <v-divider></v-divider>

        </v-card>
    </v-menu>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import Avatar from 'vue-avatar'

export default {
    components: {
        Avatar
    },

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
    mounted() {
        this.getCart()
    },
    computed: {
        ...mapState(['carts', 'cart_count'])
    },
}
</script>
