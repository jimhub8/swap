<template>
<div id="category">
    <headerP></headerP>
    <section class="bgwhite p-t-55 p-b-65" style="padding: 10px">
        <v-row wrap row>
            <!-- <v-hover v-slot:default="{ hover }" open-delay="200"> -->
            <!-- <v-card @click="category_path(category.id)" :elevation="hover ? 16 : 2">
                        <v-img class="white--text align-end" height="300px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                            <v-card-title>{{ category.category }}</v-card-title>
                        </v-img>
                    </v-card> -->
            <v-col v-for="category in categories.data" :key="category.id" cols="3" md="3" style="cursor: pointer" @click="category_path(category)">
                <v-hover v-slot:default="{ hover }">
                    <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                        <v-img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" height="225px">
                            <v-card-title class="title white--text">
                                <v-row class="fill-height flex-column" justify="space-between">
                                    <p class="mt-4 subheading text-center" style="color: #fff !important;    font-size: 32px;">{{ category.category }}</p>

                                    <div>
                                        <!-- <p class="ma-0 body-1 font-weight-bold font-italic text-left">
                                            {{ category.category }}
                                        </p> -->
                                        <p class="caption font-weight-medium font-italic text-left">
                                            <!-- {{ item.subtext }} -->
                                        </p>
                                    </div>

                                    <!-- <div class="align-self-center">
                                        <v-btn v-for="(icon, index) in icons" :key="index" :class="{ 'show-btns': hover }" color="transparent" icon>
                                            <v-icon :class="{ 'show-btns': hover }" color="transparent">
                                                {{ icon }}
                                            </v-icon>
                                        </v-btn>
                                    </div> -->
                                </v-row>
                            </v-card-title>
                        </v-img>
                    </v-card>
                </v-hover>
            </v-col>
            <!-- </v-hover> -->
        </v-row>
    </section>
    <!-- <myVariants></myVariants> -->
</div>
</template>

<script>
import headerP from "../../components/include/Headerpartial";
import {
    mapState
} from 'vuex';
export default {
    name: 'categories',
    components: {
        headerP
    },
    data() {
        return {
            loader: false,
        };
    },

    async fetch({
        store
    }) {
        var payload = {
            model: 'categories',
            update: 'updateCategoryList',
        }
        await store.dispatch("getItems", payload)
    },
    methods: {
        addToWish(item) {
            $nuxt.$emit("WishListEvent", item);
        },
        category_path(category) {

            this.$router.push({
                path: this.buildUrl(category)
            });
        },
        buildUrl(category) {
          return '/category/' + this.$slugify(category.id, category.category)
        }
    },
    beforeRouteLeave(to, from, next) {
        // $nuxt.$emit("progressEvent");
        next();
        window.scrollTo(0, 0);

    },

    computed: {
        ...mapState(['categories'])
    },
};
</script>

<style>
.wrap-pic-w img {
    height: 300px;
}

#category .v-card {
    transition: opacity .4s ease-in-out;
}

#category .v-card:not(.on-hover) {
    opacity: 0.6;
}

.show-btns {
    color: rgba(255, 255, 255, 1) !important;
}
</style>
