<template>
<v-stepper v-model="e6" vertical style="    margin-top: 200px;">
    <v-stepper-step :complete="e6 > 1" step="1">Seller Info</v-stepper-step>
    <v-stepper-content step="1" style="background: #fff;">
        <v-card color="grey lighten-1" class="mb-5">
            <Seller :account="account" :errors="errors"></Seller>
        </v-card>
        <v-btn color="primary" @click="goToStep2">Continue</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Company Details</v-stepper-step>
    <v-stepper-content step="2" style="background: #fff;">
        <v-card color="grey lighten-1" class="mb-5">
            <Company :account="account" :errors="errors"></Company>
        </v-card>
        <v-btn color="primary" @click="goToStep3">Continue</v-btn>
        <v-btn text @click="e6 = 1">Back</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Bank Details</v-stepper-step>
    <v-stepper-content step="3" style="background: #fff;">
        <v-card color="grey lighten-1" class="mb-5">
            <Bank :account="account" :errors="errors"></Bank>
        </v-card>
        <v-btn color="primary" @click="finish" :loading="loading">Finish</v-btn>
        <v-btn text @click="e6 = 2">Back</v-btn>
    </v-stepper-content>
    <v-snackbar :timeout="timeout" :bottom="y === 'bottom'" :color="Scolor" :left="x === 'left'" v-model="snackbar">
        {{ message }}
        <v-icon dark right>check_circle</v-icon>
    </v-snackbar>
    <myTips></myTips>
</v-stepper>
</template>

<script>
// import Register from './register/Register.vue';
import Company from '../../components/vendor/register/Company';
import Bank from '../../components/vendor/register/Bank';
import Seller from '../../components/vendor/register/Seller';
import myTips from '../../components/vendor/tips';
import { mapState } from 'vuex';
export default {
    components: {
        // Register,
        Company,
        Seller,
        Bank,
        myTips
    },
    data() {
        return {
            account: {
                name: '',
                email: '',
                phone: '',
                address: '',
                company_name: '',
                company_email: '',
                company_phone: '',
                company_address: '',
                business_no: '',
                company_website: '',
                account_no: '',
                account_name: '',
                mpesa_name: '',
                mpesa_phone: '',
                account: 'bank'
            },
            e6: 1,
            errors: {},
            message: "Success",
            snackbar: false,
            y: "bottom",
            x: "left",
            Scolor: "",
            timeout: 5000,
        }
    },
    methods: {
        goToStep2() {
            if (this.account.user_name == '' || this.account.email == '' || this.account.phone == '') {
                $nuxt.$emit('errorEvent', 'Please confirm if all fields  with * are filled')
                return
            }
            this.e6 = 2
            //   $nuxt.$emit("CompanyEvent");
        },
        goToStep3() {
            if (this.account.company_name == '', this.account.company_email == '', this.account.company_phone == '', this.account.company_address == '') {
                $nuxt.$emit('errorEvent', 'Please confirm if all fields  with * are filled')
                return
            }
            this.e6 = 3
            //   $nuxt.$emit("CompanyEvent");
        },
        finish() {
            var payload = {
                model: 'seller_register',
                data: this.$data.account
            }
            this.$store.dispatch('postItems', payload)
            //   $nuxt.$emit("userEvent", this.company_id);
            // this.loading = true
            // axios.post('/seller/seller', this.$data.account).
            // then((response) => {
            //         this.loading = false
            //         // window.location.replace('/thankyou')
            //         this.$emit('alertRequest', 'Account Created');
            //         $nuxt.$emit("userResponse");
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
    computed: {
      ...mapState(['loading'])
    },
    created() {
        this.$nuxt.$on('userResponse', data => {
            // window.location.replace('/thankyou')
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
