<template>
<!-- <v-btn color="success" @click="getProducts">text</v-btn> -->
<div>
    <img src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/banners/banner1.jpg" style="margin: 20px 0; width: 100vw" />
    <div>
        <myCategory style="padding: 10px 30px 60px 30px;" />
        <!-- <myVariants style="padding: 10px 30px 60px 30px;" /> -->
        <myFeatured style="padding: 10px 30px 60px 30px;" />
        <mySlider style="padding: 10px 30px 60px 30px;" />
        <myNew />
        <img src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/banners/banner-02.jpg" style="margin: 20px 0; width: 100vw; height: 300px" />
        <myBest style="padding: 10px 30px 60px 30px;" />

    </div>
</div>
</template>

<script>
import mySlider from './Slider'
import myCategory from './category'
// import myVariants from './variants'
import myBest from './Best'
import myFeatured from './Featured'
import myNew from './New'
// import mySlide from "./Slide";

import {
    mapState
} from "vuex";
// import {
//     slider,
//     slideritem
// } from 'vue-concise-slider'
export default {
    name: 'product_slider',
    components: {
        mySlider,
        // slideritem,
        myBest,
        myCategory,
        // myVariants,
        myNew,
        // mySlide,
        myFeatured
    },
    data() {
        return {

        }
    },

    methods: {
        async getProducts() {
            var payload = {
                model: 'products',
                update: 'updateProductsList',
            }
            await this.$store.dispatch('getItems', payload)
        },
        async getProductsettings() {
            var payload = {
                model: 'product_setting',
                update: 'updateProductSettingList',
            }
            await this.$store.dispatch('getItems', payload)
        },
    },
    // mounted() {
    //     this.getProductsettings();
    //     this.getProducts();
    // },
    created () {

        // this.getProductsettings();
        // this.getProducts();
    },
    computed: {
        // ...mapState(['products']),

        // products() {
        //     return this.$store.getters.products
        // },
    },
}
</script>
