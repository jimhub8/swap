<template>
<div>
    <headerP></headerP>
    <v-card class="mx-auto" style="width: 50%; padding: 40px">
        <v-card-text>

            <p class="text-center" style="background: #f2dede; font-size: 13px; color: #a94442 !important;padding: 10px 0;">Thank you for shopping with us</p>
        </v-card-text>
        <v-card-actions>

            <nuxt-link to="/shop">
                <v-btn color="primary" rounded>Go Shopping</v-btn>
            </nuxt-link>
            <v-spacer></v-spacer>
            <nuxt-link to="/account">
                <v-btn color="primary" rounded>My Account</v-btn>
            </nuxt-link>
        </v-card-actions>
    </v-card>
</div>
</template>

<script>
import headerP from "../components/include/Headerpartial";
export default {
    components: {
        headerP,
    },
    data() {
        return {}
    },
};
</script>

<style scoped>
</style>
