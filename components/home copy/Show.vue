<template>
<v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="1000px">
        <v-card v-if="dialogT">
            <v-card-title>
                <h1 class="headline" style="margin-left: 43%;">{{ productD.product_name }}</h1>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="close">
                    <v-icon color="black">close</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider style="border-color: rgba(53, 46, 46, 0.12);"></v-divider>
            <v-card-text>
                <v-layout wrap>
                    <v-flex sm6>
                        <img :src="productD.image" alt="" style="height: 300px; width: 300px;"  @error="imageUrlAlt">
                    </v-flex>
                    <v-divider vertical></v-divider>
                    <v-flex sm4 offset-sm1>
                        {{ productD.name }}
                        <v-divider></v-divider>
                        <div v-html="productD.description"></div>
                        <br>
                        <label for="">Price: <span class="badge pull-right">{{ productD.price }}</span></label><br>
                        <label for="">Quantity: <span class="badge pull-right">{{ productD.quantity }}</span></label>
                        <v-flex xs12 sm12>
                            <v-text-field v-model="form.quantity" color="blue darken-2" label="Quantity" required type="number"></v-text-field>
                            <small class="has-text-danger" v-if="showError">{{ error_msg }}</small>
                        </v-flex>
                    </v-flex>
                </v-layout>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn text icon color="orange" v-bind="attrs" v-on="on"@click="addToCart(productD.id)">
                        <v-icon>shopping_cart</v-icon>
                      </v-btn>
                    </template>
                    <span>Add To Cart</span>
                </v-tooltip>

                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click.native="close">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-layout>
</template>

<script>
export default {
    data() {
        return {
            dialogT: false,
            dialog: false,
            productD: [],
            form: {
                quantity: 1
            },
            error_msg: "",
            showError: false
        };
    },
    methods: {
        // addToCart(data) {
        //     $nuxt.$emit("addCartEvent", data);
        // },
        addToCart() {
            if (this.form.quantity > this.productD.quantity) {
                this.showError = true;
                this.error_msg = "Amount entered is more than available";
            } else if (this.form.quantity < 1) {
                this.showError = true;
                this.error_msg = "Quantity must be greater than 1";
            } else {

                this.productD.order_qty = this.form.quantity
                var payload = {
                    model: 'cartAdd',
                    id: this.productD.id,
                    data: this.productD,
                }

                this.$store.dispatch('postItem', payload)

                // $nuxt.$emit("loadingRequest");
                // this.showError = false;
                // axios
                //     .post(`/cartAdd/${this.productD.id}`, this.$data.form)
                //     .then(response => {
                //         this.loading = false;
                //         if (response.data.errors) {
                //             $nuxt.$emit("errorRequest", response.data.errors);
                //             return (this.err_ms = response.data.errors);
                //         } else {
                //             $nuxt.$emit("alertRequest", "Cart Added");
                //             $nuxt.$emit("cartEvent", response.data);
                //         }
                //         // this.close();
                //         // this.resetForm();
                //         // this.$parent.brands.push(response.data)
                //     })
                //     .catch(error => {
                //         this.loading = false;
                //         this.errors = error.response.data.errors;
                //     });
            }
            // this.loading = true
        },
        close() {
            // $nuxt.$emit("closeRequest", product);
            this.dialog = false;
            this.dialogT = false;
        },
        priceChange(data) {
            $nuxt.$emit("progressEvent");
            axios
                .get(`product_attribute/${data}`)
                .then(response => {
                    $nuxt.$emit("StoprogEvent");
                    this.productD.price = response.data.price
                    this.productD.quantity = response.data.quantity
                })
                .catch(error => {
                    $nuxt.$emit("StoprogEvent");
                    this.errors = error.response.data.errors;
                });
        },
        imageUrlAlt(e) {
                event.target.src = "https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png"

        }
    },
    created() {
        this.$nuxt.$on("viewProEvent", data => {
            this.productD = data;
            this.dialog = true;
            this.dialogT = true;
        });
    }
};
</script>

<style scoped>
.badge {
    color: #000 !important;
    font-size: 12px !important;
    margin-left: 100px !important;
}

label {
    padding: 10px 0px !important;
}

.el-select {
    border: 1px solid #f0f0f0 !important;
    border-radius: 6px !important;
}
</style>
