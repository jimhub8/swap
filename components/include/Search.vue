<template>
<ais-instant-search :search-client="searchClient" index-name="instant_search">
    <ais-search-box @focus="showMenu" />
    <ais-stats />
    <el-card class="box-card">
    <!-- <v-card v-show="show_menu" style="width: 90%"> -->
        <!-- <ais-refinement-list attribute="brand" /> -->
        <ais-hits>
            <!-- <v-list three-line> -->
            <template slot="item" slot-scope="{ item }">
                <!-- <p>
                    <ais-highlight attribute="brand" :hit="item" />
                </p> -->
                <ul class="list-group">
                    <li class="list-group-item">
                      <span style="float: left">
                      <img style="width:60px" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
                      </span>
                      <span style="float: left; margin-left: 30px">
                        <ais-highlight attribute="name" :hit="item" />
                        <br>
                        <small>100</small>
                      </span>
                    </li>
                </ul>

            </template>
            <!-- </v-list> -->

        </ais-hits>
    </el-card>


    <!-- <ais-pagination /> -->
</ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
const searchClient = algoliasearch(
    'latency',
    '6be0576ff61c053d5f9a3225e2a90f76'
);

export default {

    data() {
        return {
            // api_key: process.env.MIX_ALGOLIA_APP_KEY,
            // secret_key: process.env.MIX_ALGOLIA_SECRET,
            show_menu: true,
            search: '',
            searchClient
        }
    },
    methods: {
        showMenu() {
            // alert('test')
            this.show_menu = true
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
        }
    },
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
</style>
