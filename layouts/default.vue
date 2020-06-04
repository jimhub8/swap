<template>
<div id="app">
    <v-app>
    <nav-bar />
    <transition name="fade">
        <nuxt />
</transition>
<myFooter />
    </v-app>
</div>
</template>

<script>
import NavBar from "~/components/include/NavbarVue";
import myFooter from "~/components/include/Footer";
// import NavBar from "~/components/example";
import {
    mapState
} from "vuex";
export default {
    components: {
        NavBar, myFooter
    },
    computed: {
        ...mapState(['loggedIn'])
    },


};
</script>


<style>


.fade-enter-active{
  transition: opacity 2s, transform 2s;
}
.fade-enter{
  opacity: 0;
  transform: translate(20px);
}
</style>

