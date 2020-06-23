<template>
<v-card id="login" style="margin-top: 200px;">
    <v-card-title primary-title style="margin-left: 25%;" class="text-center">Login Page</v-card-title>
    <v-card-text style="width:50%; margin:auto">
        <div>
            <label for="">Email</label>
            <el-input placeholder="jane@gmail.com" v-model="form.email"></el-input>
            <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
        </div>
        <div>
            <label for="">Password</label>
            <el-input placeholder="..." type="password" v-model="form.password"></el-input>
            <small class="text-danger" v-if="errors.password">{{ errors.password[0] }}</small>
        </div>

    </v-card-text>
    <v-card-actions>
        <VBtn color="primary" text class="text-center" @click="login">Login</VBtn>
        <nuxt-link to="/register">
            <VBtn color="primary" text class="text-center">Register</VBtn>
        </nuxt-link>
    </v-card-actions>
</v-card>
</template>

<script>
import {
    mapState
} from "vuex";
export default {
    // middleware: 'guest',

    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                password: '',
                // cookie_id: cookie_id
            }
        };
    },

    methods: {
        // login() {
        //     var payload = {
        //         model: '/login',
        //         data: this.form
        //     }
        //     this.$store.dispatch('postItems', payload).then((response) => {
        //         console.log('test', response);

        //         var payload = {
        //             expiresIn: response.data.expires_at,
        //             token: response.data.access_token
        //         }
        //         this.$store.dispatch('setToken', payload);
        //         // this.$router.push({
        //         //     name: 'home'
        //         // });
        //     })
        // },
        // login(){
        //     this.$axios.get('/api/auth/login', {
        //         headers: {
        //             'X-Requested-With': 'XMLHttpRequest'
        //         },
        //         withCredentials: true,
        //     })
        //     .then( function(){
        //         this.$auth.loginWith('local', {
        //             data: this.form,
        //         });
        //     }.bind(this))
        // }

        async login() {
            try {
                // const data = {
                //     email: this.form.email,
                //     password: this.form.password
                // }
                this.form.cookie_id = this.$cookie.get('cart_session')
                // console.log(this.$cookie.get('cart_session'));
                // return


                this.$store.dispatch('overlayAction', true)

                let response = await this.$auth.loginWith('local', {
                    data: this.form
                })

                this.$router.push({
                    path: '/'
                });
                // console.log(response)
                this.$store.dispatch('overlayAction', false)

            } catch (error) {
                console.log(error);
                this.$store.dispatch('overlayAction', false)

                if (error.response.status === 500 || error.response.status === 405) {
                    $nuxt.$emit('errorEvent', error.response.statusText)
                    return
                } else if (error.response.status === 401 || error.response.status === 409) {
                    $nuxt.$emit('errorEvent', 'The given credentials do not match our records')
                } else if (error.response.status === 422) {
                    this.$store.dispatch('errorEvent', error.response.data)
                    return
                }

            }

        }
    },

    computed: {
        ...mapState(['errors']),
        loged_in() {
            this.$store.state.auth.loggedIn
        },

        cookie_id() {
          this.$cookie.get('cart_session')
        },
    },
    beforeRouteLeave(to, from, next) {
        // $nuxt.$emit("progressEvent");
        next();
        window.scrollTo(0, 0);

    },

};
</script>

<style>
#login .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    box-shadow: rgb(210, 225, 246) 7px 7px 8px -4px, rgb(210, 225, 246) 0px 12px 17px 2px, rgb(210, 225, 246) 0px 5px 22px 4px !important;
    width: 70%;
    margin: auto;
    padding: 40px 0;
}

label {
    color: #999;
}

.el-input__inner {
    border: 1px solid #DCDFE6 !important;
}

.v-card__actions>.v-btn.v-btn {
    margin: auto;
}
</style>
