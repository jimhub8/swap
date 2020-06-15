<template>
<div>
    <section class="bgwhite">
        <myCarousel />
        <myProduct />
        <Show />
    </section>
</div>
</template>

<script>
import myCarousel from '../components/home/Carousel'
// import myFilter from "../components/filter/Filter";
import myProduct from "../components/home/products";
import Show from "../components/home/Show";
// import Menu from "../components/home/Menu";
// import myFooter from '../include/Footer'
import {
    mapState
} from "vuex";
export default {

    head() {
        return {
            title: 'Swap - Home',
            meta: [{
                hid: 'description',
                name: 'description',
                content: 'Swap, Books, Online Shopping, Book Store, Magazine, Subscription, Music, CDs, DVDs, Videos, Electronics, Video Games, Computers, Cell Phones, Toys, Games, Apparel, Accessories, Shoes, Jewelry, Watches, Office Products, Sports & Outdoors, Sporting Goods, Baby Products, Health, Personal Care, Beauty, Home, Garden, Bed & Bath, Furniture, Tools, Hardware, Vacuums, Outdoor Living, Automotive Parts, Pet Supplies, Broadband, DSL'
            }]
        }
        },
        name: 'home',
            components: {
                myCarousel,
                // Menu,
                Show,
                myProduct,
                // myFilter,
                // myFooter
            },
            data() {
                return {
                    singleP: [],
                    singleT: [],
                    singleTN: [],
                    headerPro: [],
                    menus: [],
                    loader: false,
                    catShow: false,
                    menuShow: false,
                    filter: false,
                    selected_name: '',
                };
            },

            async fetch({
                    store
                }) {
                    var payload = {
                        model: 'slider',
                        update: 'updateSlider',
                        // id: 1,
                    }
                    await store.dispatch("getItems", payload);

                    var payload = {
                        model: 'products',
                        update: 'updateProduct'
                    }
                    await store.dispatch("getItems", payload);

                    var payload = {
                        model: 'categories',
                        update: 'updateCategoryList',
                    }
                    await store.dispatch("getItems", payload)

                    var payload = {
                        model: 'menu',
                        update: 'updateMenuList',
                    }

                    await store.dispatch("getItems", payload)
                    // console.log(data);

                    // if (this.categories.data) {
                    // const idx = Math.floor(Math.random() * this.categories.data.length);
                    // console.log(idx);

                    // return this.selected_name = this.categories.data[idx].category;
                    // }

                    // var payload = {
                    //     model: 'category_products',
                    //     update: 'updateCategortProductsList',
                    //     id: data,
                    // }
                    // await store.dispatch("showItem", payload);
                    // this.$store.dispatch('getItems', payload).then((res) => {
                    //     // if (this.categories.data) {
                    //     const idx = Math.floor(Math.random() * this.categories.data.length);
                    //     console.log(idx);

                    //     return this.selected_name = this.categories.data[idx].category;
                    //     // }
                    // })
                    // store.dispatch("loadSlider");
                },
                methods: {
                    gotoSub(item) {
                        this.$router.push({
                            name: "Category",
                            params: {
                                id: item,
                                type: "subcat"
                            }
                        });
                    },
                    gotoCat(item) {
                        this.$router.push({
                            name: "Category",
                            params: {
                                id: item,
                                type: "cat"
                            }
                        });
                    },
                    showMenu(menu) {
                        this.menuShow = true;
                        this.categories = menu.categories;
                    },

                    view(product) {
                        $nuxt.$emit("viewProEvent", product);
                    },

                    getSliders() {
                        var payload = {
                            model: 'slider',
                            update: 'updateSliderList'
                        }
                        this.$store.dispatch("getItems", payload);
                    },

                    // getSlider() {
                    //     var payload = {
                    //         model: 'slider',
                    //         update: 'updateSliderSList',
                    //         id: 1,
                    //     }
                    //     this.$store.dispatch("showItem", payload);
                    // },
                },
                computed: {
                    ...mapState(['slider', 'categories']),
                    // slider() {
                    //     return this.$store.getters.slider;
                    // },
                },
                mounted() {
                    // this.$nuxt.$emit('slider_data', this.slider);
                    // $nuxt.$emit("ScollTopEvent");
                    // $nuxt.$emit('StoprogEvent');
                    // alert('enter')
                    // this.getSliders()
                    // this.getSlider();

                },
                created() {
                    // this.$nuxt.$on("addCartEvent", data => {
                    //   this.addToCart(data);
                    // });
                    this.$nuxt.$on("filterEvent", data => {
                        this.filter = true;
                    });

                    this.$nuxt.$on("unfilterEvent", data => {
                        this.filter = false;
                    });
                },
                beforeRouteLeave(to, from, next) {
                    // $nuxt.$emit('progressEvent');
                    next();
                },

                updated() {
                    // alert('updated')
                    // $nuxt.$emit("StoprogEvent");
                }
    };
</script>

<style scoped>

</style>
