<template>
<div class="text-center">
    <v-bottom-sheet v-model="sheet">
        <div class="sidebar-product-categori">
            <div class="widget-title">
                <h3>PRODUCT CATEGORIES</h3>
            </div>
            <div class="widget-content">
                <ul class="product-categories">
                    <nuxt-link :to="buildUrl(category)" v-for="category in categories.data" :key="category.id">
                        <li class="cat-item">
                            <p style="cursor: pointer" @click="FilterShop(category.id)">{{ category.category }}</p>
                            <!-- <span class="count">(5)</span> -->
                        </li>
                    </nuxt-link>
                </ul>
            </div>
            <div class="product-filter mb-30">
                <div class="widget-title">
                    <h3>Filter by price</h3>
                </div>
                <div class="widget-content">
                    <!-- <div id="price-range" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                        <div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 0%; width: 100%;"></div>
                        <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 0%;"></span>
                        <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 100%;"></span>
                    </div> -->
                    <el-slider v-model="filter_data.price" range :max="500000" @change="FilterShop(filter_data.category_id)"></el-slider>

                    <div class="price-values">
                        <div class="price_text_btn">
                            <span>Price:</span>
                            <input type="text" class="price-amount" />
                        </div>
                        <button class="button" type="submit">Filter</button>
                    </div>
                </div>
            </div>
        </div>
    </v-bottom-sheet>
</div>
</template>

<script>
export default {
    data() {
        return {
            filter_data: {
                price: [0, 0],
                category_id: 0
            },
            sheet: false,
        }
    },
    methods: {
        FilterShop(id) {
            this.filter_data.category_id = id
            $nuxt.$emit("progressEvent");
            var payload = {
                model: 'FilterShop',
                update: 'updateProductsList',
                data: this.filter_data,

            }
            this.$store.dispatch('filterItems', payload)
            // .then((res) => {
            //     $nuxt.$emit("StoprogEvent");
            // })
        },
        getCategory() {
            var payload = {
                model: 'categories',
                update: 'updateCategoryList',
            }
            this.$store.dispatch('getItems', payload)
        },
        buildUrl(category) {
            return '/category/' + this.$slugify(category.id, category.category)
        }
    },
    mounted() {
        this.getCategory();
    },
    created () {
      this.$nuxt.$on('openSheetEvent', data => {
        this.sheet = true
      });
    },
    computed: {
        categories() {
            return this.$store.getters.categories
        }
    },

}
</script>

<style >
.v-dialog:not(.v-dialog--fullscreen) {
    overflow-x: scroll !important;
}
</style>
