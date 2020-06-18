<template>
<div>
    <v-card-title>
        <span class="headline">What you need to know about Payments</span>
    </v-card-title>
    <v-card-text>
        <v-container grid-list-md>
            <v-layout wrap>
                <p>app_name.com is based on mobile money payments. Which means we only accept MPesa
                    payments from customers and pay all merchants using MPesa payments. When a customer
                    makes an order on app_name.com, they will make their payment to our Paybill number, once we
                    confirm they are happy with your product, you will be paid via MPesa within immediately.</p>

            </v-layout>
        </v-container>
    </v-card-text>
</div>
</template>


<script>
export default {
    data() {
        return {
            app_name: process.env.APP_NAME
        }
    },
}
</script>

