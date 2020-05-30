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
export default {
    components: {
        NavBar
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.token;
        }
    },
};
</script>
