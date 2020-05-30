<template>
<div id="mainslider">
    <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in slider" :key="item.id">
            <img :src="item.image" />
            <div class="container">
                <div class="overlay" v-html="item.content"></div>
            </div>
        </el-carousel-item>
    </el-carousel>
    <!-- <v-btn color="success" text @click="get_data">Load</v-btn> -->
    <!-- <button @click="$fetch">Refresh Data</button> -->

</div>
</template>

<script>
import axios from 'axios'
import {
    mapState
} from "vuex";
export default {
    // props: ['slider'],
    data() {
        return {
            overlay: true,
            slider_data: [],
        }
    },

    methods: {
        get_data() {
            this.$store.dispatch("loadSlider");
            // this.$fetch();

        }
    },
    // created() {
    // this.$nuxt.$on('slider_data', data => {
    //   console.log(data+' emitted')
    //   })
    // },

    // async asyncData() {
    //     let response = await axios.get('http://dellmat.jim/api/slider')
    //     // console.log(response);

    //     return {slider_data:  response.data}
    // },

    async fetch({
        store
    }) {
        var payload = {
            model: 'slider',
            update: 'updateSlider',
            // id: 1,
        }
        await store.dispatch("getItems", payload);
        // store.dispatch("loadSlider");
    },
    computed: {
        // users() {
        //     return this.$store.getters.users
        // }
        ...mapState(['slider']),
        // slider() {
        //     return this.$store.getters.slider;
        // },

    },
}
</script>

<style>
#mainslider .el-carousel__container {
    height: 60vh !important;
}

/* Make the image to responsive */
#mainslider .image {
    display: block;
    width: 100%;
    height: auto;
}

/* The overlay effect - lays on top of the container and over the image */
#mainslider .overlay {
    position: absolute;
    bottom: 20%;
    background: #c7b9b926;
    /* Black see-through */
    width: 100%;
    transition: .5s ease;
    opacity: 0;
    color: black;
    font-size: 20px;
    padding: 20px;
    text-align: center;
}

/* When you mouse over the container, fade in the overlay title */
#mainslider .container .overlay {
    opacity: 1;
    opacity: 1;
    width: 70%;
    margin: auto;
}

/* .el-carousel--horizontal {
    height: 40vh;
} */

@media only screen and (max-width: 991px) {

    #mainslider img {
        width: 100vw;
        height: 40vh;
    }

    #mainslider .container .overlay {
        display: none;
    }

    .el-carousel--horizontal {
        height: 40vh;
        overflow: hidden;
    }
}
</style>
