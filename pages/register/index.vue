<template>
<v-card id="register" style="margin-top: 200px">
    <v-card-title primary-title style="margin-left: 25%;" class="text-center">Register Page</v-card-title>
    <v-card-text style="width:90%; margin:auto">
        <div>
            <label for="">Name</label>
            <el-input placeholder="jane@gmail.com" v-model="form.name"></el-input>
            <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
        </div>
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
        <div>
            <label for="">Confirm Password</label>
            <el-input placeholder="..." type="password" v-model="form.password_confirmation"></el-input>
            <!-- <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small> -->
        </div>

    </v-card-text>
    <v-card-actions>
        <VBtn color="primary" text class="text-center" @click="signup">Register</VBtn>
        <nuxt-link to="/login">
            <VBtn color="primary" text class="text-center" @click="login">Login</VBtn>
        </nuxt-link>
    </v-card-actions>
</v-card>
</template>

<script>
import {
    mapState
} from "vuex";
export default {
    name: 'signup',
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
            },
            error: null

        };
    },

    methods: {
        signup() {
            this.$store.dispatch('overlayAction', true)
            var payload = {
                model: 'auth/signup',
                data: this.form
            }
            this.$store.dispatch('postItems', payload).then((response) => {
                console.log(response);
                this.$store.dispatch('overlayAction', false)

                this.$router.push('/login')
            }).catch((error) => {
                this.$store.dispatch('overlayAction', false)
                console.log(error.response.data);

            })
        },
    },
    beforeRouteLeave(to, from, next) {
        // $nuxt.$emit("progressEvent");
        next();
        window.scrollTo(0, 0);

    },
    computed: {
        ...mapState(['errors'])
    },

};
</script>

<style>
#register .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
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
