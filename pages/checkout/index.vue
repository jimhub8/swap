<template>
<div>
    <VCard style="padding: 20px;width: 80%; margin: auto;box-shadow: 7px 7px 8px -4px rgb(210, 225, 246),0 12px 17px 2px rgb(210, 225, 246),0 5px 22px 4px rgb(210, 225, 246) !important;">
        <v-stepper v-model="e6" vertical>
            <v-stepper-step :complete="e6 > 1" step="1">User information</v-stepper-step>
            <v-stepper-content step="1" style="background: #fff;">
                <v-card color="white lighten-1" class="mb-5">
                    <myAddress :user="user" :form="form"></myAddress>
                </v-card>
                <v-btn color="primary" @click="goToStep2">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2">Payment</v-stepper-step>
            <v-stepper-content step="2" style="background: #fff;">
                <v-card color="white lighten-1" class="mb-5">
                    <myPayment :account="account"></myPayment>
                </v-card>
                <v-btn color="primary" @click="goToStep3">Continue</v-btn>
                <v-btn text @click="e6 = 1">Back</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3">Complete</v-stepper-step>
            <v-stepper-content step="3" style="background: #fff;">
                <v-card color="white lighten-1" class="mb-5">
                    <!-- <no-ssr> -->
                        <myComplete :account="account"></myComplete>
                    <!-- </no-ssr> -->
                </v-card>
                <!-- <v-btn color="primary" @click="finish">Place order</v-btn> -->
                <v-btn text @click="e6 = 2">Back</v-btn>
            </v-stepper-content>
        </v-stepper>
    </VCard>
    <!-- <div v-else style="padding: 20px 0;">
        <VCard style="padding: 20px;width: 80%; margin: auto;box-shadow: 7px 7px 8px -4px rgb(210, 225, 246),0 12px 17px 2px rgb(210, 225, 246),0 5px 22px 4px rgb(210, 225, 246) !important;" class="text-center">
            <VCardText>
                You are not loged in! Please login to proceed.
            </VCardText>
            <v-card-actions style="width: 15%;margin: auto;">

                <v-btn text href="/login" color="primary">Login</v-btn>
                <v-btn text href="/register" color="primary">Sign up</v-btn>
            </v-card-actions>
        </VCard>
    </div> -->
</div>
</template>

<script>
import myAddress from '../../components/checkout/Address'
import myPayment from '../../components/checkout/Payment'
import myComplete from '../../components/checkout/Complete'
export default {
    props: ['user'],
    components: {
        myAddress,
        myComplete,
        myPayment
    },
    data() {
        return {
            account: [],
            e6: 1,
            errors: {},
            form: {},
        }
    },
    methods: {
        goToStep2() {
            if (this.user) {
                this.account = this.user
            } else {
                this.account = this.form
            }
            if (this.account == {}) {
                $nuxt.$emit('errorEvent', 'Please confirm if all fields  with * are filled')
                return
            }
            this.e6 = 2
            // axios.patch(`/address/${this.user.id}`, this.account).
            // then((response) => {})
            //     .catch((error) => {
            //         if (error.response.status === 500) {
            //             $nuxt.$emit('errorEvent', error.response.statusText)
            //             return
            //         } else {
            //             $nuxt.$emit('errorEvent', 'Please confirm if all fields  with * are filled')
            //             this.errors = error.response.data.errors
            //         }
            //         // console.log()
            //     })
        },
        goToStep3() {
            if (!this.account.payment) {
                $nuxt.$emit('errorEvent', 'Please confirm if all fields  with * are filled')
                return
            }
            this.e6 = 3
            //   $nuxt.$emit("CompanyEvent");
        },
        finish() {
            if (this.account.payment == 'Paypal') {
                $nuxt.$emit("paypalEvent", this.account);
                return
            }
            this.loading = true

            this.productD.order_qty = this.form.quantity
            var payload = {
                model: 'cartAdd',
                id: this.productD.id,
                data: this.productD,
            }

            this.$store.dispatch('postItem', payload)

            // axios.post('/vendor_user', this.$data.account).
            // then((response) => {
            //         this.loading = false
            //         this.$emit('alertRequest', 'Account Created');
            //         // $nuxt.$emit("userResponse");
            //     })
            //     .catch((error) => {
            //         this.loading = false
            //         if (error.response.status === 500) {
            //             $nuxt.$emit('errorEvent', error.response.statusText)
            //             return
            //         } else {
            //             $nuxt.$emit('errorEvent', 'Please confirm if all fields  with * are filled')
            //             this.e6 = 1
            //             this.errors = error.response.data.errors
            //         }
            //         // console.log()
            //     })
        },
        cancel() {
            window.location.replace('/')
        },

        showerror(data) {
            this.message = data;
            this.Scolor = "red";
            this.snackbar = true;
        },

    },
    created() {
        this.$nuxt.$on('userResponse', data => {
            window.location.replace('/thankyou')
        })
        this.$nuxt.$on('companyResponse', data => {
            this.e6 = 2
            // this.finish(data)
            this.company_id = data
        })
        this.$nuxt.$on("errorEvent", data => {
            this.showerror(data);
        });
    },
}
</script>
