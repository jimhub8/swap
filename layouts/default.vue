<template>
<div id="app">
    <v-app>
    <nav-bar />
        <nuxt />
    </v-app>
</div>
</template>

<script>
import NavBar from "~/components/include/NavbarVue";
// import NavBar from "~/components/example";
import {
    mapState
} from "vuex";
export default {
    components: {
        NavBar
    },
    computed: {
        ...mapState(['loggedIn'])
    },


};
</script>
