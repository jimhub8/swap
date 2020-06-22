<template>
<div id="app" v-loading="overlay" element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <v-app >
        <!-- <div class="text-center" v-if="overlay">
            <v-btn color="deep-purple accent-4" class="blue--text" @click="overlay = !overlay">
                Launch Application
                <v-icon right>mdi-open-in-new</v-icon>
            </v-btn>

            <v-overlay :value="overlay">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
        </div> -->

        <mobileBar v-if="isMobile" />
        <nav-bar v-else />
        <!-- <mobileBar /> -->
        <transition name="fade">
            <nuxt />
        </transition>
        <myFooter />
    </v-app>
</div>
</template>

<script>
import NavBar from "~/components/include/NavbarVue";
import mobileBar from "~/components/include/mobile/Navigation";
import myFooter from "~/components/include/Footer";
// import NavBar from "~/components/example";
import {
    mapState
} from "vuex";
export default {

    name: 'default',
    data() {
        return {
            windowWidth: null
        }
    },
    components: {
        NavBar,
        myFooter,
        mobileBar
    },
    computed: {
        ...mapState(['loggedIn', 'overlay']),
        isMobile() {
            return this.windowWidth <= 768
        }
    },
    mounted() {

        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
            console.log(this.isMobile)
        })
        this.windowWidth = window.innerWidth

    },

};
</script>

<style>
.fade-enter-active {
    transition: opacity 2s, transform 2s;
}

.fade-enter {
    opacity: 0;
    transform: translate(20px);
}
</style>
