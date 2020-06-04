<template>
<div style="margin-top: 0px">
  <!-- <v-btn color="success" @click="getUser">User  </v-btn> -->
  <mysearch />
</div>
</template>

<script>
import {
    mapState
} from "vuex";
import mysearch from '../components/include/Search'
export default {
  components: {
    mysearch,
  },
    name: 'Example',
    data: () => ({

    }),

    computed: {
        ...mapState(['menu']),
    },
    methods: {
        getUser() {
          // console.log(process.env.API_URL);
          console.log(this.$store.state.auth.loggedIn);
          return;

            // let accessToken = getCookie('auth._token.local', req.headers.cookie)

            var payload = {
              model: 'auth/user',
              update: 'updateUsersList'
            }
            this.$store.dispatch('getItems', payload).then((res) => {
              console.log(res);

            })
        }
    },
}
</script>

<style>
.theme--dark.v-list {
    background: #fff !important;
    color: #999 !important;
}

.v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
    color: #333;
}

.v-list--three-line .v-list-item .v-list-item__subtitle,
.v-list-item--three-line .v-list-item__subtitle {
    color: #999;
}

.v-list-item,
.v-list-item__content {
    padding: 0 !important;
}
.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    margin-left: 10px;
}
</style>
