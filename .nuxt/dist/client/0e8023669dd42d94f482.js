(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{831:function(t,e,r){var content=r(834);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("692b2c53",content,!0,{sourceMap:!1})},833:function(t,e,r){"use strict";var n=r(831);r.n(n).a},834:function(t,e,r){(e=r(9)(!1)).push([t.i,".bg-title-page[data-v-24a2736a]{background-image:url(https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/banners/8.jpg)!important;background-attachment:fixed!important}",""]),t.exports=e},835:function(t,e,r){"use strict";var n={},o=(r(833),r(25)),component=Object(o.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-title-page p-t-50 p-b-40 flex-col-c-m"},[e("h2",{staticClass:"l-text2 t-center",staticStyle:{color:"rgb(87, 205, 252)","text-transform":"none"}},[this._v("\n        SW"),e("span",{staticStyle:{color:"#FFF"}},[this._v("APP")])]),this._v(" "),e("p",{staticClass:"m-text13 t-center"},[this._v("\n        Living in the future\n    ")])])}],!1,null,"24a2736a",null);e.a=component.exports},846:function(t,e,r){"use strict";var n={data:function(){return{filter_data:{price:[0,0],category_id:0}}},methods:{FilterShop:function(t){this.filter_data.category_id=t,$nuxt.$emit("progressEvent");var e={model:"FilterShop",update:"updateProductsList",data:this.filter_data};this.$store.dispatch("filterItems",e)},getCategory:function(){this.$store.dispatch("getItems",{model:"categories",update:"updateCategoryList"})}},mounted:function(){this.getCategory()},computed:{categories:function(){return this.$store.getters.categories}}},o=r(25),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"col-xs-12 col-md-12 sidebar-shop"},[r("div",{staticClass:"sidebar-product-categori"},[t._m(0),t._v(" "),r("div",{staticClass:"widget-content"},[r("ul",{staticClass:"product-categories"},t._l(t.categories.data,(function(e){return r("nuxt-link",{key:e.id,attrs:{to:"/category/"+e.id}},[r("li",{staticClass:"cat-item"},[r("p",{staticStyle:{cursor:"pointer"},on:{click:function(r){return t.FilterShop(e.id)}}},[t._v(t._s(e.category))])])])})),1)]),t._v(" "),r("div",{staticClass:"product-filter mb-30"},[t._m(1),t._v(" "),r("div",{staticClass:"widget-content"},[r("el-slider",{attrs:{range:"",max:5e5},on:{change:function(e){return t.FilterShop(t.filter_data.category_id)}},model:{value:t.filter_data.price,callback:function(e){t.$set(t.filter_data,"price",e)},expression:"filter_data.price"}}),t._v(" "),t._m(2)],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-title"},[e("h3",[this._v("PRODUCT CATEGORIES")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-title"},[e("h3",[this._v("Filter by price")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"price-values"},[e("div",{staticClass:"price_text_btn"},[e("span",[this._v("Price:")]),this._v(" "),e("input",{staticClass:"price-amount",attrs:{type:"text"}})]),this._v(" "),e("button",{staticClass:"button",attrs:{type:"submit"}},[this._v("Filter")])])}],!1,null,null,null);e.a=component.exports},847:function(t,e,r){"use strict";var n={data:function(){return{form:{},dialog:!1,product:null,variants:{},variants_values:{}}},created:function(){var t=this;this.$nuxt.$on("selectVariantsEvent",(function(data){t.dialog=!0,t.product=data,t.getProductVariants(data.id)}))},methods:{getProductVariants:function(t){var e=this;axios.get("product_variant/".concat(t)).then((function(t){e.variants=t.data})).catch((function(t){}))},getChoiseData:function(){var t=this;this.loading=!0,axios.post("variants_values/".concat(this.product.id),this.variants).then((function(e){t.loading=!1,t.variants_values=e.data,$nuxt.$emit("addCartVariantEvent",e.data)})).catch((function(e){console.log(e),t.loading=!1}))},close:function(){this.dialog=!1}},computed:{}},o=r(25),c=r(33),l=r.n(c),d=r(305),v=r(283),h=r(83),_=r(854),f=r(855),m=r(809),y=r(850),x=r(851),C=r(824),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"","justify-center":""}},[r("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline text-center",staticStyle:{margin:"auto"}},[t._v("Select variants")])]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.variants,(function(e){return r("v-flex",{key:e.id,attrs:{sm4:""}},[t._v("\n                            "+t._s(e.attribute.option_name)+"\n                            "),r("v-divider"),t._v(" "),t._l(e.tags,(function(n){return r("el-radio-group",{key:n.id,model:{value:e.choise,callback:function(r){t.$set(e,"choise",r)},expression:"variant.choise"}},[r("el-radio-button",{attrs:{label:n.option_name}})],1)}))],2)})),1)],1)],1),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Close")]),t._v(" "),r("VSpacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.getChoiseData}},[t._v("Submit")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VContainer:_.a,VDialog:f.a,VDivider:m.a,VFlex:y.a,VLayout:x.a,VSpacer:C.a})},869:function(t,e,r){var content=r(942);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("7e7218a4",content,!0,{sourceMap:!1})},941:function(t,e,r){"use strict";var n=r(869);r.n(n).a},942:function(t,e,r){(e=r(9)(!1)).push([t.i,".wrap-pic-w img[data-v-e61c757c]{height:300px}.theme--dark.v-btn.v-btn--icon[data-v-e61c757c]{color:#fff}#shop_theme .theme--dark[data-v-e61c757c]{color:#0276a5!important;background-color:transparent!important}",""]),t.exports=e},995:function(t,e,r){"use strict";r.r(e);r(11),r(7),r(5),r(4),r(8);var n=r(2),o=(r(50),r(13)),c=r(835),filter=r(846),l=r(847),d=r(39);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{headerP:c.a,myFilter:filter.a,myVariants:l.a},data:function(){return{placeholder:"https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png",form:{search:""},items:[{state:"All"},{state:"New",abbr:"new_product"},{state:"Popularity",abbr:"best_sell"},{state:"Featured",abbr:"featured"}],itemSelect:{abbr:"All",state:"All"},price:[0,3e4],priceSelect:{state:"All"},loader:!1,cat_id:null,filter_data:{price:[0,0],category_id:0}}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n={model:"shop",update:"updateProduct"},e.next=4,r.dispatch("getItems",n);case 4:case"end":return e.stop()}}),e)})))()},methods:{searchItems:function(){$nuxt.$emit("progressEvent")},redirect:function(t){},catId:function(t){this.cat_id=t,this.FilterShop()},catAll:function(){this.cat_id=null,this.FilterShop()},getProducts:function(){this.$store.dispatch("getItems",{model:"shop",update:"updateProductsList"})},addToCart:function(t){t.product_variants.length>0?$nuxt.$emit("selectVariantsEvent",t):(t.order_qty=1,$nuxt.$emit("addCartEvent",t))},next:function(t){var e={path:this.products.path,page:this.products.current_page,update:"updateProductsList"};this.$store.dispatch("nextPage",e)},getMenus:function(){this.$store.dispatch("getItems",{model:"menus",update:"updateMenuList"})},FilterShop:function(t){$nuxt.$emit("progressEvent"),this.filter_data.category_id=t,$nuxt.$emit("progressEvent");var e={model:"FilterShop",update:"updateProductsList",data:this.filter_data};this.$store.dispatch("filterData",e)},getWish:function(){this.$store.dispatch("getItems",{model:"wish",update:"updateWishList"})},addToWish:function(t){$nuxt.$emit("WishListEvent",t)},imageUrlAlt:function(t){event.target.src="/assets/notfound/notfound.jpg"}},mounted:function(){},updated:function(){},beforeRouteLeave:function(t,e,r){r(),window.scrollTo(0,0)},created:function(){var t=this;this.$nuxt.$on("RefWishEvent",(function(data){t.FilterShop()}))},computed:h(h({},Object(d.c)(["products"])),{},{menus:function(){return this.$store.getters.menu},loading:function(){return this.$store.getters.loading},wish:function(){return this.$store.getters.wish}})},f=(r(941),r(25)),m=r(33),y=r.n(m),x=r(305),C=r(285),w=r(980),k=r(856),component=Object(f.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"shop_theme"}},[r("headerP"),t._v(" "),r("section",{staticClass:"bgwhite p-t-55 p-b-65"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 p-b-50"},[r("div",{staticClass:"leftbar p-r-20 p-r-0-sm"},[r("myFilter")],1)]),t._v(" "),r("div",{staticClass:"col-sm-6 col-md-8 col-lg-9 p-b-50"},[r("div",{staticClass:"flex-sb-m flex-w p-b-35"},[t._m(0),t._v(" "),r("span",{staticClass:"s-text8 p-t-5 p-b-5"},[t._v("Showing page "+t._s(t.products.current_page)+" of "+t._s(t.products.last_page)+" pages")])]),t._v(" "),t.products.data.length>0?r("div",{staticClass:"row"},t._l(t.products.data,(function(e,n){return r("div",{key:n,staticClass:"col-sm-12 col-md-6 col-lg-4 p-b-50"},[r("div",{staticClass:"block2"},[1===e.new_product?r("div",{staticClass:"block2-img wrap-pic-w of-hidden pos-relative block2-labelnew"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"product.image"}],attrs:{src:"https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png",alt:" "}}),t._v(" "),r("div",{staticClass:"block2-overlay trans-0-4"},[1===e.wish_list?r("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[r("v-btn",t._g(t._b({staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px",float:"right"},attrs:{icon:""},on:{click:function(r){return t.addToWish(e.id)}}},"v-btn",c,!1),o),[r("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-heart")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Add to Wish list")])]):r("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[r("v-btn",t._g(t._b({staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px",float:"right"},attrs:{icon:""},on:{click:function(r){return t.addToWish(e.id)}}},"v-btn",c,!1),o),[r("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-heart")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Add to Wish list")])]),t._v(" "),r("div",{staticClass:"block2-btn-addcart w-size1 trans-0-4",staticStyle:{"text-align":"center"}},[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(r){return t.addToCart(e)}}},"v-btn",c,!1),o),[r("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-cart")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Add to Cart")])])],1)],1)]):r("div",{staticClass:"block2-img wrap-pic-w of-hidden pos-relative"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"product.image"}],attrs:{src:"https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png",alt:" "}}),t._v(" "),r("div",{staticClass:"block2-overlay trans-0-4"},[1===e.wish_list?r("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[r("v-btn",t._g(t._b({staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px",float:"right"},attrs:{icon:""},on:{click:function(r){return t.addToWish(e.id)}}},"v-btn",c,!1),o),[r("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-heart")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Add to Wish list")])]):r("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[r("v-btn",t._g(t._b({staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px",float:"right"},attrs:{icon:""},on:{click:function(r){return t.addToWish(e.id)}}},"v-btn",c,!1),o),[r("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-heart")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Add to Wish list")])]),t._v(" "),r("div",{staticClass:"block2-btn-addcart w-size1 trans-0-4",staticStyle:{"text-align":"center"}},[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(r){return t.addToCart(e)}}},"v-btn",c,!1),o),[r("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-cart")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Add to Cart")])])],1)],1)]),t._v(" "),r("div",{staticClass:"block2-txt p-t-20"},[r("nuxt-link",{attrs:{to:"shop/"+e.id}},[r("button",{staticClass:"block2-name dis-block s-text3 p-b-5",on:{click:function(r){return t.redirect(e.id)}}},[t._v(t._s(e.product_name))])]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("small",{staticClass:"list-price text-danger"},[t._v("List price: "),r("s",[t._v(t._s(e.list_price))])])]),t._v(" "),r("div",{staticClass:"col-6"},[r("p",[t._v("Price "+t._s(e.price))])])]),t._v(" "),r("hr")],1)])])})),0):r("div",[r("p",{staticClass:"text-center",staticStyle:{background:"#f2dede","font-size":"13px",color:"#a94442 !important"}},[t._v("No products available")])])]),t._v(" "),t.products.last_page>1?r("div",{staticClass:"text-xs-center",staticStyle:{margin:"auto",width:"100%"}},[r("v-pagination",{attrs:{length:t.products.last_page,"total-visible":"6",circle:""},on:{input:function(e){return t.next(t.products.path,t.products.current_page,"products")}},model:{value:t.products.current_page,callback:function(e){t.$set(t.products,"current_page",e)},expression:"products.current_page"}})],1):t._e()])])]),t._v(" "),r("myVariants")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-w"},[e("div",{staticClass:"rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10"})])}],!1,null,"e61c757c",null);e.default=component.exports;y()(component,{VBtn:x.a,VIcon:C.a,VPagination:w.a,VTooltip:k.a})}}]);