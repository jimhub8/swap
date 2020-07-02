<template>
<div @mouseleave="showMenu(false)" id="search-bar">
    <ais-instant-search :search-client="searchClient" index-name="products">
        <!-- <ais-search-box @input="showMenu" /> -->
        <ais-search-box @focus="showMenu(true)" id="myInput" />
        <!-- <ais-search-box @focus="showMenu"  @blur="show_menu = false"/> -->
        <el-card class="box-card" v-show="show_menu" style="max-height: 80vh;overflow: scroll;">
            <ais-stats style="color: #fff" v-show="show_menu" />
            <!-- <v-card v-show="show_menu" style="width: 90%"> -->
            <!-- <ais-refinement-list attribute="brand" /> -->
            <ais-hits>
                <!-- <v-list three-line> -->
                <template slot="item" slot-scope="{ item }">
                    <!-- <p>
                    <ais-highlight attribute="brand" :hit="item" />
                </p> -->
                    <ul class="list-group">
                        <nuxt-link :to="buildUrl(item)">
                            <li class="list-group-item" style="cursor: pointer" @click="showMenu(false)">
                                <span style="float: left">
                                    <img v-if="item.images.length > 0" style="width:60px" :src="item.images[0].image" />
                                    <img v-else src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png" style="width:60px" />
                                </span>
                                <span style="float: left; margin-left: 30px">
                                    <ais-highlight attribute="product_name" :hit="item" />
                                    <br>
                                    <!-- <small>KES {{item.price}}</small> -->
                                </span>
                            </li>
                        </nuxt-link>
                    </ul>

                </template>
                <!-- </v-list> -->

            </ais-hits>
        </el-card>

        <!-- <ais-pagination /> -->
    </ais-instant-search>
</div>
</template>

<script>
import $ from 'jquery'

import algoliasearch from 'algoliasearch/lite';
const searchClient = algoliasearch(
    'V4Q0BRYFL9',
    '9f7c6c2a11bdfec5e7569c1e45e8fa2b'
);

export default {

    data() {
        return {
            // api_key: process.env.MIX_ALGOLIA_APP_KEY,
            // secret_key: process.env.MIX_ALGOLIA_SECRET,
            show_menu: false,
            search: '',
            searchClient
        }
    },
    methods: {
        showMenu(data) {
            // alert('test')
            this.show_menu = data
            $nuxt.$emit('showMenuEvent', data);
            // this.show_menu = !this.show_menu
        },

        search_products() {
            var payload = {
                model: 'algolia',
                update_: 'updateProductSearch',
                search: this.search
            }
            this.$store.dispatch('getItems', payload)
        },
        Productdetails(data) {
            $nuxt.$emit('Productdetails', data)
        },
        buildUrl(product) {
          return '/shop/' + this.$slugify(product.id, product.product_name)
        }
    },
    mounted() {
        // $("#myInput").on('click', this.showMenu);
    }
}
</script>

<style>
/* .ais-index .v-image__image {
    width: 50px !important;
    height: 50px !important;
}

.ais-index .v-list--three-line .v-list-item .v-list-item__content,
.v-list-item--three-line .v-list-item__content {
    margin-left: -430px !important;
}

.ais-pagination ul,
li {
    margin: 0px;
    list-style-type: none;
    display: inline;
}

.theme--light.v-list {
    background: #f0f0f0;
    color: rgba(0, 0, 0, 0.87);
}

@media only screen and (max-width: 991px) {

    .ais-index .v-list--three-line .v-list-item .v-list-item__content,
    .v-list-item--three-line .v-list-item__content {
        margin-left: -0px !important;
    }

    .categori-menu {
        width: 100% !important;
    }
} */
.el-card__body .v-application ul,
.v-application ol {
    padding-left: 0 !important;
}

.ais-SearchBox [type=search] {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media only screen and (max-width: 991px) {
    #search-bar {
        margin-top: -30px;
        width: 100%;
    }

    #search-bar .ais-InstantSearch {
        position: absolute;
    }

    .ais-SearchBox button:not(:disabled) {
        display: none;
    }

    .ais-Stats {
        color: #000 !important;
    }
}
</style>
