(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{830:function(t,e,r){var content=r(833);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("692b2c53",content,!0,{sourceMap:!1})},832:function(t,e,r){"use strict";var n=r(830);r.n(n).a},833:function(t,e,r){(e=r(9)(!1)).push([t.i,".bg-title-page[data-v-24a2736a]{background-image:url(https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/banners/8.jpg)!important;background-attachment:fixed!important}",""]),t.exports=e},834:function(t,e,r){"use strict";var n={},o=(r(832),r(26)),component=Object(o.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-title-page p-t-50 p-b-40 flex-col-c-m"},[e("h2",{staticClass:"l-text2 t-center",staticStyle:{color:"rgb(87, 205, 252)","text-transform":"none"}},[this._v("\n        SW"),e("span",{staticStyle:{color:"#FFF"}},[this._v("APP")])]),this._v(" "),e("p",{staticClass:"m-text13 t-center"},[this._v("\n        Living in the future\n    ")])])}],!1,null,"24a2736a",null);e.a=component.exports},845:function(t,e,r){"use strict";var n={data:function(){return{filter_data:{price:[0,0],category_id:0}}},methods:{FilterShop:function(t){this.filter_data.category_id=t,$nuxt.$emit("progressEvent");var e={model:"FilterShop",update:"updateProductsList",data:this.filter_data};this.$store.dispatch("filterItems",e)},getCategory:function(){this.$store.dispatch("getItems",{model:"categories",update:"updateCategoryList"})}},mounted:function(){this.getCategory()},computed:{categories:function(){return this.$store.getters.categories}}},o=r(26),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"col-xs-12 col-md-12 sidebar-shop"},[r("div",{staticClass:"sidebar-product-categori"},[t._m(0),t._v(" "),r("div",{staticClass:"widget-content"},[r("ul",{staticClass:"product-categories"},t._l(t.categories.data,(function(e){return r("nuxt-link",{key:e.id,attrs:{to:"/category/"+e.id}},[r("li",{staticClass:"cat-item"},[r("p",{staticStyle:{cursor:"pointer"},on:{click:function(r){return t.FilterShop(e.id)}}},[t._v(t._s(e.category))])])])})),1)]),t._v(" "),r("div",{staticClass:"product-filter mb-30"},[t._m(1),t._v(" "),r("div",{staticClass:"widget-content"},[r("el-slider",{attrs:{range:"",max:5e5},on:{change:function(e){return t.FilterShop(t.filter_data.category_id)}},model:{value:t.filter_data.price,callback:function(e){t.$set(t.filter_data,"price",e)},expression:"filter_data.price"}}),t._v(" "),t._m(2)],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-title"},[e("h3",[this._v("PRODUCT CATEGORIES")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-title"},[e("h3",[this._v("Filter by price")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"price-values"},[e("div",{staticClass:"price_text_btn"},[e("span",[this._v("Price:")]),this._v(" "),e("input",{staticClass:"price-amount",attrs:{type:"text"}})]),this._v(" "),e("button",{staticClass:"button",attrs:{type:"submit"}},[this._v("Filter")])])}],!1,null,null,null);e.a=component.exports},846:function(t,e,r){"use strict";var n={data:function(){return{form:{},dialog:!1,product:null,variants:{},variants_values:{}}},created:function(){var t=this;this.$nuxt.$on("selectVariantsEvent",(function(data){t.dialog=!0,t.product=data,t.getProductVariants(data.id)}))},methods:{getProductVariants:function(t){var e=this;axios.get("product_variant/".concat(t)).then((function(t){e.variants=t.data})).catch((function(t){}))},getChoiseData:function(){var t=this;this.loading=!0,axios.post("variants_values/".concat(this.product.id),this.variants).then((function(e){t.loading=!1,t.variants_values=e.data,$nuxt.$emit("addCartVariantEvent",e.data)})).catch((function(e){console.log(e),t.loading=!1}))},close:function(){this.dialog=!1}},computed:{}},o=r(26),c=r(33),l=r.n(c),d=r(305),v=r(283),h=r(83),f=r(853),m=r(854),_=r(808),x=r(849),C=r(850),y=r(823),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"","justify-center":""}},[r("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline text-center",staticStyle:{margin:"auto"}},[t._v("Select variants")])]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.variants,(function(e){return r("v-flex",{key:e.id,attrs:{sm4:""}},[t._v("\n                            "+t._s(e.attribute.option_name)+"\n                            "),r("v-divider"),t._v(" "),t._l(e.tags,(function(n){return r("el-radio-group",{key:n.id,model:{value:e.choise,callback:function(r){t.$set(e,"choise",r)},expression:"variant.choise"}},[r("el-radio-button",{attrs:{label:n.option_name}})],1)}))],2)})),1)],1)],1),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Close")]),t._v(" "),r("VSpacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.getChoiseData}},[t._v("Submit")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VContainer:f.a,VDialog:m.a,VDivider:_.a,VFlex:x.a,VLayout:C.a,VSpacer:y.a})},873:function(t,e,r){var content=r(952);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("d44eb942",content,!0,{sourceMap:!1})},951:function(t,e,r){"use strict";var n=r(873);r.n(n).a},952:function(t,e,r){(e=r(9)(!1)).push([t.i,".wrap-pic-w img[data-v-0cb6f221]{height:300px}",""]),t.exports=e},995:function(t,e,r){"use strict";r.r(e);r(11),r(7),r(5),r(4),r(8);var n=r(2),o=(r(50),r(13)),c=r(39),l=r(834),filter=r(845),d=r(846);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={name:"sub_details",components:{headerP:l.a,myFilter:filter.a,myVariants:d.a},head:function(){return{title:"Swap - "+this.subcategory.subcategory,meta:[{hid:"description",name:"description",content:this.subcategory.description}]}},data:function(){return{form:{search:""},items:[{state:"All"},{state:"New",abbr:"new_product"},{state:"Popularity",abbr:"best_sell"},{state:"Featured",abbr:"featured"}],itemSelect:{abbr:"All",state:"All"},price:[{state:"All"},{state:"0-500"},{state:"501-1000"},{state:"1000-5000"}],priceSelect:{state:"All"},loader:!1}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.route,o={model:"subcategories",update:"updateProduct",id:n.params.id},e.next=4,r.dispatch("showItem",o);case 4:return o={model:"subcategory",update:"Subcategory",id:n.params.id},e.next=7,r.dispatch("showItem",o);case 7:case"end":return e.stop()}}),e)})))()},methods:{addToCart:function(t){t.product_variants.length>0?$nuxt.$emit("selectVariantsEvent",t):(t.order_qty=1,$nuxt.$emit("addCartEvent",t))},next:function(t){$nuxt.$emit("progressEvent")},addToWish:function(t){$nuxt.$emit("WishListEvent",t)}},mounted:function(){},beforeRouteLeave:function(t,e,r){r(),window.scrollTo(0,0)},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["products","subcategory"]))},f=(r(951),r(26)),m=r(33),_=r.n(m),x=r(305),C=r(285),y=r(976),w=r(282),k=r(855),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("headerP"),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.loader,expression:"loader"}],staticStyle:{"text-align":"center",width:"100%","margin-top":"200px"}},[r("v-progress-circular",{staticStyle:{margin:"1rem"},attrs:{width:3,indeterminate:"",color:"red"}})],1),t._v(" "),r("section",{directives:[{name:"show",rawName:"v-show",value:!t.loader,expression:"!loader"}],staticClass:"bgwhite p-t-55 p-b-65"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6 col-md-4 col-lg-3 p-b-50"},[r("div",{staticClass:"leftbar p-r-20 p-r-0-sm"},[r("myFilter")],1)]),t._v(" "),r("div",{staticClass:"col-sm-6 col-md-8 col-lg-9 p-b-50"},[r("div",{staticClass:"flex-sb-m flex-w p-b-35"},[r("span",{staticClass:"s-text8 p-t-5 p-b-5"},[t._v("Showing page "+t._s(t.products.current_page)+" of "+t._s(t.products.last_page)+" pages")])]),t._v(" "),t.products.data.length>0?r("div",{staticClass:"row"},t._l(t.products.data,(function(e){return r("div",{key:e.id,staticClass:"col-sm-12 col-md-6 col-lg-4 p-b-50"},[r("div",{staticClass:"block2"},[1===e.new_product?r("div",{staticClass:"block2-img wrap-pic-w of-hidden pos-relative block2-labelnew"},[r("div",{staticClass:"block2-overlay trans-0-4"},[1===e.wish_list?r("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""}},[r("v-btn",{staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px"},attrs:{slot:"activator",icon:""},on:{click:function(r){return t.addToWish(e.id)}},slot:"activator"},[r("v-icon",{attrs:{color:"pink darken-2",large:""}},[t._v("favorite")])],1),t._v(" "),r("span",[t._v("Wish list")])],1):r("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""}},[r("v-btn",{staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px"},attrs:{slot:"activator",icon:""},on:{click:function(r){return t.addToWish(e.id)}},slot:"activator"},[r("v-icon",{attrs:{color:"white darken-2",large:""}},[t._v("favorite")])],1),t._v(" "),r("span",[t._v("Wish list")])],1),t._v(" "),r("div",{staticClass:"block2-btn-addcart w-size1 trans-0-4"},[r("v-btn",{attrs:{color:"success"},on:{click:function(r){return t.addToCart(e)}}},[t._v("Add to Cart")])],1)],1)]):r("div",{staticClass:"block2-img wrap-pic-w of-hidden pos-relative"},[r("img",{attrs:{src:e.image,alt:"IMG-PRODUCT"}}),t._v(" "),r("div",{staticClass:"block2-overlay trans-0-4"},[1===e.wish_list?r("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""}},[r("v-btn",{staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px"},attrs:{slot:"activator",icon:""},on:{click:function(r){return t.addToWish(e.id)}},slot:"activator"},[r("v-icon",{attrs:{color:"pink darken-2",large:""}},[t._v("favorite")])],1),t._v(" "),r("span",[t._v("Wish list")])],1):r("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""}},[r("v-btn",{staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px"},attrs:{slot:"activator",icon:""},on:{click:function(r){return t.addToWish(e.id)}},slot:"activator"},[r("v-icon",{attrs:{color:"white darken-2",large:""}},[t._v("favorite")])],1),t._v(" "),r("span",[t._v("Wish list")])],1),t._v(" "),r("div",{staticClass:"block2-btn-addcart w-size1 trans-0-4"},[r("v-btn",{attrs:{color:"primary"},on:{click:function(r){return t.addToCart(e)}}},[t._v("Add to Cart")])],1)],1)]),t._v(" "),r("div",{staticClass:"block2-txt p-t-20"},[r("nuxt-link",{attrs:{to:"/shop/"+e.id}},[r("button",{staticClass:"block2-name dis-block s-text3 p-b-5"},[t._v(t._s(e.product_name))]),t._v(" "),r("span",{staticClass:"block2-price m-text6 p-r-5"},[t._v(t._s(e.price))])])],1)])])})),0):r("div",[r("p",{staticClass:"text-center",staticStyle:{background:"#f2dede","font-size":"13px",color:"#a94442 !important"}},[t._v("No products available")])])]),t._v(" "),t.products.last_page>1?r("div",{staticClass:"text-xs-center",staticStyle:{margin:"auto",width:"100%"}},[r("v-pagination",{attrs:{length:t.products.last_page,"total-visible":"6",circle:""},on:{input:function(e){return t.next(t.products.path,t.products.current_page,"products")}},model:{value:t.products.current_page,callback:function(e){t.$set(t.products,"current_page",e)},expression:"products.current_page"}})],1):t._e()])])]),t._v(" "),r("myVariants")],1)}),[],!1,null,"0cb6f221",null);e.default=component.exports;_()(component,{VBtn:x.a,VIcon:C.a,VPagination:y.a,VProgressCircular:w.a,VTooltip:k.a})}}]);