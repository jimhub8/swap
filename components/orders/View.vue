<template>
<v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="900px">
        <v-card>
            <v-card-title>
                <span class="headline text-center" style="margin: auto;">Order Details</span>
                <VSpacer />

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" icon class="mx-0" @click="close" slot="activator">
                            <v-icon small color="blue darken-2">close</v-icon>
                        </v-btn>
                    </template>
                    <span>close</span>
                </v-tooltip>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout row wrap>
                        <v-flex sm12 class="text-center">

                            <table class="table table-striped table-hover table-responsive">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Product Sku no.</th>
                                        <th scope="col">Product Description</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in form.products" :key="index">
                                        <th scope="row">{{ index+1 }}</th>
                                        <td>{{ product.product_name }}</td>
                                        <td>{{ product.sku_no }}</td>
                                        <td>{{ product.description }}</td>
                                        <td>
                                            <el-tag type="danger">{{ product.pivot.quantity }}</el-tag>
                                        </td>
                                        <td>
                                            <el-tag>{{ product.pivot.price }}</el-tag>
                                        </td>
                                        <td>
                                            <el-tag type="success">{{ product.pivot.quantity * product.pivot.price }}</el-tag>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                  <tr>
                                    <td>
                                  <strong>Total</strong>
                                    </td>
                                    <td colspan="7">
                                        <el-tag type="danger">{{total_price}}</el-tag>
                                    </td>
                                    </tr>
                                </tfoot>
                            </table>
                            <v-divider />
                            <span class="headline text-center" style="margin: auto;">Shipping Details</span>
                            <table class="table table-striped table-hover table-responsive">
                                <thead>
                                    <tr>
                                        <th scope="col">Client Name</th>
                                        <th scope="col">Client Email</th>
                                        <th scope="col">Client Address</th>
                                        <th scope="col">Client Phone</th>
                                        <th scope="col">County</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ order_address.name }}</td>
                                        <td>{{ order_address.email }}</td>
                                        <td>{{ order_address.street_address }}</td>
                                        <td>{{ order_address.phone }}</td>
                                        <td>{{ order_address.county }}</td>

                                    </tr>

                                </tbody>
                            </table>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-btn color="primary" text @click="close">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-layout>
</template>

<script>
export default {
    name: 'showorder',
    data: () => ({
        dialog: false,
        loading: false,
        form: {},
        payload: {
            model: '/leaves',
        },
        total_price: 0
    }),
    created() {
        this.$nuxt.$on("viewOrdEvent", data => {
            console.log(data);
            this.dialog = true;
            this.form = data;
            this.get_total(data)
            if (data.ordershipping) {
                this.getOrderAddress()
            }
        });
    },

    methods: {
        close() {
            this.dialog = false;
        },

        getOrderAddress() {
            var payload = {
                model: 'order_address',
                update: 'updateOrderAddressList',
                id: this.form.ordershipping.id,
            }
            this.$store.dispatch("showItem", payload);
        },
        get_total(data) {
            console.log(data);

            var price = 0
            data.products.forEach(element => {
                price += parseFloat(element.pivot.price) * parseFloat(element.pivot.quantity)
            });
            this.total_price = price
        },
    },

    computed: {
        order_address() {
            return this.$store.getters.order_address
        }
    },
};
</script>
