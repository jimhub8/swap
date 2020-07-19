(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1013:function(t,e,r){"use strict";r.r(e);r(12),r(7),r(5),r(4),r(8);var c=r(2),o=(r(65),r(51),r(13)),n=r(847),l=r(894),aside=r(895),d=r(39);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={head:function(){return{title:this.product.product_name+" | Swap",meta:[{hid:"og:description",name:"og:description",content:this.product.short_description},{hid:"twitter:title",name:"twitter:title",content:this.product.product_name},{hid:"og:title",name:"og:title",content:this.product.product_name},{hid:"twitter:image",name:"twitter:image",content:this.product.image},{hid:"product:price:amount",name:"product:price:amount",content:this.product.price},{hid:"twitter:description",name:"twitter:description",content:this.product.description}]}},name:"productDetails",components:{headerP:n.a,relatedProducts:l.a,myAside:aside.a},data:function(){return{activeName:"first",app_url:"https://swapstore.co.ke",form:{quantity:1},proId:this.$route.params.id,showError:!1,error_msg:"",rowsPerPageItems:[4,8,12],pagination:{rowsPerPage:4},selectedCard:-1,reviews:[],sizes:[],avgRating:null,displayImage:"",originalImage:"",route_:this.$route.fullPath}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,c,o,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,c=t.route,o=c.params.id.split("-").length-1,n=c.params.id.split("-"),l={model:"products",update:"updateShowProduct",id:n[o]},e.next=6,r.dispatch("showItem",l);case 6:e.sent;case 7:case"end":return e.stop()}}),e)})))()},methods:{update_data:function(){this.displayImage=this.product.image},redirect:function(t){this.$router.push({name:"details",params:{id:t}}),this.getProduct()},addToCart:function(){var t=this.product;t.product_variants.length>0?$nuxt.$emit("selectVariantsEvent",t):(t.order_qty=this.form.quantity,$nuxt.$emit("addCartEvent",t))},hoverCard:function(t){this.selectedCard=t},isSelected:function(t){return this.selectedCard===t},view:function(t){$nuxt.$emit("viewProEvent",t)},wishList:function(t){$nuxt.$emit("WishListEvent",t)},getProduct:function(){var t={model:"products",update:"updateProductsList",id:this.$route.params.id};this.$store.dispatch("showItem",t)},getRelated:function(){var t={model:"related",update:"updateRelatedList",id:this.$route.params.id};this.$store.dispatch("showItem",t)},getReviews:function(){this.$store.dispatch("getItems",{model:"reviews",update:"updateReviewsList"})},getAvgReviews:function(){var t={model:"ratings",update:"updatAvgReviewsList",id:this.proId};this.$store.dispatch("showItem",t)},next:function(t){var e=this;$nuxt.$emit("progressEvent"),axios.get(this.reviews.path+"?page="+this.reviews.current_page).then((function(t){$nuxt.$emit("StoprogEvent"),e.reviews=t.data})).catch((function(t){$nuxt.$emit("StoprogEvent"),e.errors=t.response.data.errors}))},getCategory:function(t){var e={model:"categories",update:"updateCategoryList",id:t};this.$store.dispatch("showItem",e)},imageUrlAlt:function(t){event.target.src="https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png"},priceChange:function(data){var t=this;$nuxt.$emit("progressEvent"),axios.get("product_attribute/".concat(data)).then((function(e){$nuxt.$emit("StoprogEvent"),t.product.price=e.data.price})).catch((function(e){$nuxt.$emit("StoprogEvent"),t.errors=e.response.data.errors}))},split_id:function(){console.log(this.$route.params.id),console.log(this.$route.params.id.split("-").length);var t=this.$route.params.id.split("-").length-1,e=this.$route.params.id.split("-");console.log(e[t])}},mounted:function(){this.update_data(),$nuxt.$emit("ScollEvent")},created:function(){var t=this;this.$nuxt.$on("ReviewRequest",(function(data){t.getReviews(),t.getAvgReviews()})),this.$nuxt.$on("updateDataEvent",(function(data){t.displayImage=data}))},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.c)(["product"])),beforeRouteLeave:function(t,e,r){r(),window.scrollTo(0,0)}},h=(r(968),r(26)),f=r(35),_=r.n(f),y=r(858),w=r(286),C=r(859),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("headerP"),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm2:"","offset-sm1":""}},[r("myAside")],1),t._v(" "),r("v-flex",{attrs:{sm8:"","offset-sm1":""}},[r("div",{staticClass:"bgwhite p-t-35 p-b-80"},[r("div",[r("div",{staticClass:"p-t-30 respon5"},[r("div",{staticClass:"wrap-slick3 flex-sb flex-w"},[r("div",{staticClass:"single-product-wrapper has-gallery"},[r("div",{staticClass:"woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images",staticStyle:{opacity:"1",transition:"opacity 0.25s ease-in-out 0s"},attrs:{"data-columns":"4"}},[r("div",{staticClass:"flex-viewport",staticStyle:{overflow:"hidden",position:"relative",height:"400px"}},[r("figure",{staticClass:"woocommerce-product-gallery__wrapper",staticStyle:{width:"800%","transition-duration":"0s",transform:"translate3d(0px, 0px, 0px)"}},[r("div",{staticClass:"woocommerce-product-gallery__image flex-active-slide",staticStyle:{width:"400px","margin-right":"0px",float:"left",display:"block",position:"relative",overflow:"hidden"},attrs:{"data-thumb-alt":""}},[r("a",{attrs:{href:"https://armania.b-cdn.net/wp-content/uploads/2020/05/Pets_components_0000s_0012_Layer-14.jpg"}},[r("img",{attrs:{src:t.displayImage,alt:t.product.product_name,height:"600",width:"600"},on:{error:t.imageUrlAlt}})])])])]),t._v(" "),r("ol",{staticClass:"flex-control-nav flex-control-thumbs slick-initialized slick-slider"},[r("div",{staticClass:"slick-list draggable"},[r("div",{staticClass:"slick-track",staticStyle:{opacity:"1",width:"420px",transform:"translate3d(0px, 0px, 0px)"}},t._l(t.product.images,(function(image){return r("li",{key:image.id,staticClass:"slick-slide slick-current slick-active first-slick",staticStyle:{"margin-right":"10px",width:"87.5px"},attrs:{"data-slick-index":"0","aria-hidden":"false",tabindex:"0"}},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:image.image,expression:"image.image"}],staticClass:"wp-post-image",attrs:{src:"https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png",height:"600",width:"600",alt:""}})])})),0)])])]),t._v(" "),r("div",{staticClass:"summary entry-summary"},[r("span",{staticClass:"sku_wrapper"},[r("span",{staticClass:"title"},[t._v("SKU: "+t._s(t.product.sku_no)+" ")])]),t._v(" "),r("h1",{staticClass:"product_title entry-title"},[t._v(t._s(t.product.product_name))]),t._v(" "),r("div",{staticClass:"woocommerce-product-rating"},[r("div",{staticClass:"star-rating-wrap"},[r("div",{staticClass:"star-rating",attrs:{role:"img","aria-label":"Rated 5.00 out of 5"}},[r("span",{staticStyle:{width:"100%"}},[t._v("Rated "),r("strong",{staticClass:"rating"},[t._v("5.00")]),t._v(" out of 5 based on "),r("span",{staticClass:"rating"},[t._v("1")]),t._v(" customer rating")])]),r("strong",{staticClass:"rating"},[t._v("(01)")])]),t._v(" "),r("a",{staticClass:"woocommerce-review-link",attrs:{href:"#reviews",rel:"nofollow"}},[t._v("("),r("span",{staticClass:"count"},[t._v("1")]),t._v(" customer review)")])]),t._v(" "),r("div",{staticClass:"armania-share-socials"},[r("div",{staticClass:"inner"},[r("ShareNetwork",{staticClass:"facebook",attrs:{network:"facebook",url:t.app_url+t.route_,title:"Buy this awesome product: "+t.product.product_name,description:t.product.product_name,quote:"Go to swapstore.co.ke to get the best offers",hashtags:"onlineshopping"}},[r("v-icon",{staticStyle:{background:"rgba(0, 0, 0, 0) !important",color:"white !important"}},[t._v("mdi-facebook")]),t._v(" "),r("span",{staticStyle:{color:"#fff"}},[t._v("Share on Facebook")])],1),t._v(" "),r("ShareNetwork",{staticClass:"twitter",attrs:{network:"twitter",url:t.app_url+t.route_,title:"Buy this awesome product: "+t.product.product_name,description:t.product.product_name,hashtags:"onlineshopping",twitterUser:"swapstore"}},[r("v-icon",{staticStyle:{background:"rgba(0, 0, 0, 0) !important",color:"white !important"}},[t._v("mdi-twitter")]),t._v(" "),r("span",{staticStyle:{color:"#fff"}},[t._v("Share on Twitter")])],1),t._v(" "),r("ShareNetwork",{staticClass:"pinterest",attrs:{network:"pinterest",url:t.app_url+t.route_,title:"Buy this awesome product: "+t.product.product_name,description:t.product.product_name,media:t.product.image}},[r("v-icon",{staticStyle:{background:"rgba(0, 0, 0, 0) !important",color:"white !important"}},[t._v("mdi-pinterest")]),t._v(" "),r("span",{staticStyle:{color:"#fff"}},[t._v("Share on Pinterest")])],1)],1)]),t._v(" "),r("p",{staticClass:"price"},[r("span",{staticClass:"woocommerce-Price-amount amount"},[r("span",{staticClass:"woocommerce-Price-currencySymbol"},[t._v("KSH ")]),t._v(t._s(t.product.price))])]),t._v(" "),r("div",{staticClass:"quantity"},[r("label",{staticClass:"text"},[t._v("\n                                            Qty: ")]),t._v(" "),r("div",{staticClass:"control"},[t.form.quantity>1?r("p",{staticClass:"btn-number qtyminus quantity-minus",staticStyle:{cursor:"pointer"},on:{click:function(e){t.form.quantity-=1}}},[r("span",{staticClass:"fa fa-minus"})]):t._e(),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.quantity,expression:"form.quantity"}],staticClass:"input-qty input-text qty text",attrs:{type:"number",min:"1",title:"Qty",size:"4",placeholder:"",pattern:"[0-9]*"},domProps:{value:t.form.quantity},on:{input:function(e){e.target.composing||t.$set(t.form,"quantity",e.target.value)}}}),t._v(" "),r("p",{staticClass:"btn-number qtyplus quantity-plus",staticStyle:{cursor:"pointer"},on:{click:function(e){t.form.quantity+=1}}},[r("span",{staticClass:"fa fa-plus"})])])]),t._v(" "),r("button",{staticClass:"single_add_to_cart_button button alt",on:{click:t.addToCart}},[t._v("Add to cart")]),t._v(" "),r("div",{staticClass:"product_meta"},[r("span",{staticClass:"posted_in"},[r("span",{staticClass:"title"},[t._v("Categories:")]),t._v(" "),t._l(t.product.categories,(function(e){return r("div",{key:e.id},[r("nuxt-link",{attrs:{to:"/"}},[r("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.category))])],1)],1)}))],2)])])])])])])]),t._v(" "),r("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"Description",name:"first"}},[r("div",{domProps:{innerHTML:t._s(t.product.description)}})]),t._v(" "),r("el-tab-pane",{attrs:{label:"Reviews",name:"second"}},[t._v("Reviews")])],1)],1)],1)],1)}),[],!1,null,"acc5da64",null);e.default=component.exports;_()(component,{VFlex:y.a,VIcon:w.a,VLayout:C.a})},843:function(t,e,r){var content=r(846);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("692b2c53",content,!0,{sourceMap:!1})},844:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(97),r(5),r(4),r(8);var c=r(1);function o(t){return c.default.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var c=r.props,data=r.data,o=r.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var n=data.attrs;if(n){data.attrs={};var l=Object.keys(n).filter((function(t){if("slot"===t)return!1;var e=n[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return c.id&&(data.domProps=data.domProps||{},data.domProps.id=c.id),e(c.tag,data,o)}})}},845:function(t,e,r){"use strict";var c=r(843);r.n(c).a},846:function(t,e,r){(e=r(9)(!1)).push([t.i,".bg-title-page[data-v-24a2736a]{background-image:url(https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/banners/8.jpg)!important;background-attachment:fixed!important}",""]),t.exports=e},847:function(t,e,r){"use strict";var c={},o=(r(845),r(26)),component=Object(o.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-title-page p-t-50 p-b-40 flex-col-c-m"},[e("h2",{staticClass:"l-text2 t-center",staticStyle:{color:"rgb(87, 205, 252)","text-transform":"none"}},[this._v("\n        SW"),e("span",{staticStyle:{color:"#FFF"}},[this._v("APP")])]),this._v(" "),e("p",{staticClass:"m-text13 t-center"},[this._v("\n        Living in the future\n    ")])])}],!1,null,"24a2736a",null);e.a=component.exports},852:function(t,e,r){var content=r(881);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("7faad72a",content,!0,{sourceMap:!1})},853:function(t,e,r){var content=r(883);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("70c787e4",content,!0,{sourceMap:!1})},858:function(t,e,r){"use strict";r(441);var c=r(844);e.a=Object(c.a)("flex")},859:function(t,e,r){"use strict";r(441);var c=r(844);e.a=Object(c.a)("layout")},880:function(t,e,r){"use strict";var c=r(852);r.n(c).a},881:function(t,e,r){(e=r(9)(!1)).push([t.i,".v-card--reveal[data-v-1f94a6c5]{align-items:center;bottom:0;justify-content:center;opacity:.5;position:absolute;width:100%}",""]),t.exports=e},882:function(t,e,r){"use strict";var c=r(853);r.n(c).a},883:function(t,e,r){(e=r(9)(!1)).push([t.i,".v-application ol[data-v-1d21f0dc],.v-application ul[data-v-1d21f0dc]{padding-left:0!important}.slick-slide>.row-item>*[data-v-1d21f0dc]{height:200px!important}.v-icon[data-v-1d21f0dc]{font-size:34px}@media(max-width:768px){#primary[data-v-1d21f0dc],#secondary[data-v-1d21f0dc]{display:none!important}}",""]),t.exports=e},885:function(t,e,r){var content=r(969);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("4a5544dc",content,!0,{sourceMap:!1})},894:function(t,e,r){"use strict";r(12),r(7),r(5),r(4),r(8);var c=r(2),o=r(39);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={components:{},data:function(){return{itemsPerPageArray:[4,8,12],search:"",filter:{},sortDesc:!1,page:1,itemsPerPage:4,sortBy:"product_name",keys:["Product name","sku no"]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({numberOfPages:function(){return Math.ceil(this.related.data.length/this.itemsPerPage)}},Object(o.c)(["related"])),mounted:function(){this.getRelated()},methods:{getRelated:function(){var t={model:"related",update:"updateRelatedList",id:this.$route.params.id};this.$store.dispatch("showItem",t)},nextPage:function(){this.page+1<=this.numberOfPages&&(this.page+=1)},formerPage:function(){this.page-1>=1&&(this.page-=1)},updateItemsPerPage:function(t){this.itemsPerPage=t},product_view:function(t){$nuxt.$emit("viewProEvent",t)},addToCart:function(t){t.product_variants.length>0?$nuxt.$emit("selectVariantsEvent",t):(t.order_qty=1,$nuxt.$emit("addCartEvent",t))},wishList:function(t){$nuxt.$emit("WishListEvent",t)},buildUrl:function(t){return"/shop/"+this.$slugify(t.id,t.product_name)}}},d=(r(880),r(26)),v=r(35),m=r.n(v),h=r(306),f=r(286),_=r(836),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"tab-panel active",attrs:{id:"tab-fd608df-5f0c145939c26"}},[r("div",{staticClass:"ovic-products   style-14",attrs:{"data-id":"products_fd608df_5f0c145939c25"}},[r("div",{staticClass:"woocommerce columns-3 "},[r("ul",{staticClass:"products recent_products equal-container better-height product-list-owl owl-slick rows-space-30 slick-initialized slick-slider"},[r("div",{staticClass:"slick-list draggable"},[r("div",{staticClass:"slick-track",staticStyle:{opacity:"1",width:"1560px",transform:"translate3d(0px, 0px, 0px)"}},t._l(t.related.data,(function(e){return r("div",{key:e.id,staticClass:"slick-slide slick-current slick-active first-slick",staticStyle:{"margin-right":"30px",width:"258px"},attrs:{"data-slick-index":"0","aria-hidden":"false",tabindex:"0"}},[r("div",{staticClass:"row-item"},[r("li",{staticClass:"product-item style-14 short-title product type-product post-4446 status-publish first instock product_cat-brid product_cat-pets product_tag-pets has-post-thumbnail shipping-taxable purchasable product-type-simple",staticStyle:{width:"100%",display:"inline-block"},attrs:{"data-product_id":"4446"}},[r("div",{staticClass:"product-inner"},[r("div",{staticClass:"product-thumb"},[r("div",{staticClass:"thumb-wrapper"},[r("nuxt-link",{staticClass:"thumb-link hover-zoom woocommerce-product-gallery__image",attrs:{to:t.buildUrl(e),tabindex:"0"}},[r("figure",{staticClass:"primary-thumb"},[r("img",{staticClass:"attachment-228x228 size-228x228 wp-post-image",attrs:{width:"228",height:"228",src:e.image,alt:""}})])])],1),t._v(" "),r("div",{staticClass:"group-button"},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(c){var o=c.on;return[r("v-btn",t._g({attrs:{icon:""},on:{click:function(r){return t.product_view(e)}}},o),[r("v-icon",{attrs:{color:"primary"}},[t._v("mdi-magnify")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Quick View")])]),t._v(" "),r("div",{staticClass:"yith-wcwl-add-to-wishlist add-to-wishlist-4446  wishlist-fragment on-first-load"},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var c=e.on;return[r("v-btn",t._g({attrs:{icon:""}},c),[r("v-icon",{attrs:{color:"primary"}},[t._v("favorite")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("add to wish list")])])],1),t._v(" "),r("span",[r("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(c){var o=c.on;return[r("v-btn",t._g({attrs:{icon:""},on:{click:function(r){return t.addToCart(e)}}},o),[r("v-icon",{attrs:{color:"primary"}},[t._v("mdi-cart")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Add to cart")])])],1)],1)]),t._v(" "),r("div",{staticClass:"product-info equal-elem",staticStyle:{height:"71px"}},[r("h2",{staticClass:"product-title"},[r("nuxt-link",{attrs:{to:t.buildUrl(e)}},[t._v("\n                                                        "+t._s(e.product_name)+"\n                                                    ")])],1),t._v(" "),t._m(1,!0),t._v(" "),r("span",{staticClass:"price"},[r("span",{staticClass:"woocommerce-Price-amount amount"},[r("span",{staticClass:"woocommerce-Price-currencySymbol"},[t._v("KSH")]),t._v(t._s(e.price))])])])])])])])})),0)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box-title",staticStyle:{margin:"30px 0"}},[e("h3",[e("span",[this._v("Related Products")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"star-rating-wrap"},[e("div",{staticClass:"star-rating",attrs:{role:"img","aria-label":"Rated 5.00 out of 5"}},[e("span",{staticStyle:{width:"100%"}},[this._v("Rated "),e("strong",{staticClass:"rating"},[this._v("5.00")]),this._v(" out of 5")])]),e("strong",{staticClass:"rating"},[this._v("(01)")])])}],!1,null,"1f94a6c5",null);e.a=component.exports;m()(component,{VBtn:h.a,VIcon:f.a,VTooltip:_.a})},895:function(t,e,r){"use strict";r(12),r(7),r(5),r(4),r(8);var c=r(2),o=r(39);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)(["onSale"])),methods:{buildUrl:function(t){return"/shop/"+this.$slugify(t.id,t.product_name)},getonSale:function(){this.$store.dispatch("getItems",{model:"onSale",update:"updateonSaleList"})}},mounted:function(){this.getonSale()}},d=(r(882),r(26)),v=r(35),m=r.n(v),h=r(286),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"widget-area product-widget-area",attrs:{id:"secondary",role:"complementary","aria-label":"Shop Sidebar"}},[r("div",{staticClass:"widget ovic-iconbox",attrs:{id:"ovic_iconbox-2"}},[r("div",{staticClass:"inner"},[r("div",{staticClass:"ovic-iconbox style-01"},[r("div",{staticClass:"inner bounce-in"},[r("div",{staticClass:"icon image-effect"},[r("v-icon",[t._v("mdi-car")])],1),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"ovic-iconbox style-01"},[r("div",{staticClass:"inner bounce-in"},[r("div",{staticClass:"icon image-effect"},[r("v-icon",[t._v("mdi-keyboard-return")])],1),t._v(" "),t._m(1)])]),t._v(" "),r("div",{staticClass:"ovic-iconbox style-01"},[r("div",{staticClass:"inner bounce-in"},[r("div",{staticClass:"icon image-effect"},[r("v-icon",[t._v("mdi-security-network")])],1),t._v(" "),t._m(2)])]),t._v(" "),r("div",{staticClass:"ovic-iconbox style-01"},[r("div",{staticClass:"inner bounce-in"},[r("div",{staticClass:"icon image-effect"},[r("v-icon",[t._v("mdi-lifebuoy")])],1),t._v(" "),t._m(3)])])])]),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"widget ovic-products",attrs:{id:"ovic_products-3"}},[r("div",{staticClass:"ovic-products  nav-top style-04",attrs:{"data-id":"products_5f0c45e1bc432"}},[t._m(5),t._v(" "),r("div",{staticClass:"woocommerce columns-3 "},[r("ul",{staticClass:"products product_category equal-container better-height product-list-owl owl-slick  slick-initialized slick-slider",staticStyle:{display:"block"}},[r("div",{staticClass:"slick-list draggable"},[r("div",{staticClass:"slick-track",staticStyle:{opacity:"1",width:"656px",transform:"translate3d(0px, 0px, 0px)"}},[r("div",{staticClass:"slick-slide",staticStyle:{"margin-right":"0px",width:"328px"},attrs:{"data-slick-index":"1","aria-hidden":"true",tabindex:"-1"}},t._l(t.onSale.data,(function(e){return r("div",{key:e.id,staticClass:"row-item"},[r("li",{staticClass:"product-item style-04 short-title product type-product post-4416 status-publish first instock product_cat-pets product_cat-cat product_tag-pets has-post-thumbnail shipping-taxable purchasable product-type-simple",staticStyle:{width:"100%",display:"inline-block"},attrs:{"data-product_id":"4416"}},[r("div",{staticClass:"product-inner"},[r("div",{staticClass:"product-thumb images"},[r("div",{staticClass:"thumb-wrapper"},[r("nuxt-link",{staticClass:"thumb-link hover-zoom woocommerce-product-gallery__image",attrs:{to:t.buildUrl(e)}},[r("figure",{staticClass:"primary-thumb"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"sale.image"}],staticClass:"attachment-320x320 size-320x320 wp-post-image lazy",staticStyle:{display:"block"},attrs:{src:"https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png",width:"320",height:"320",alt:"product.name"}})])])],1)]),t._v(" "),r("div",{staticClass:"product-info equal-elem",staticStyle:{height:"110px"}},[r("h2",{staticClass:"product-title"},[r("nuxt-link",{attrs:{to:t.buildUrl(e)}},[t._v(t._s(e.product_name))])],1),t._v(" "),t._m(6,!0),t._v(" "),r("span",{staticClass:"price"},[r("span",{staticClass:"woocommerce-Price-amount amount"},[r("span",{staticClass:"woocommerce-Price-currencySymbol"},[t._v("KSh")]),t._v(t._s(e.price))])])])])])])})),0)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("h3",{staticClass:"title"},[this._v("Free Delivery")]),this._v(" "),e("p",{staticClass:"desc"},[this._v("On all Orders over KSH 5000")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("h3",{staticClass:"title"},[this._v("20 Days Return")]),this._v(" "),e("p",{staticClass:"desc"},[this._v("if goods have problems")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("h3",{staticClass:"title"},[this._v("100% Safe & Secure")]),this._v(" "),e("p",{staticClass:"desc"},[this._v("Proin condimentum sagittis")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("h3",{staticClass:"title"},[this._v("24/7 Support")]),this._v(" "),e("p",{staticClass:"desc"},[this._v("Delicated support")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget widget_media_image",attrs:{id:"media_image-5"}},[e("a",{attrs:{href:"https://armania.kutethemes.net/product-category/furniture/"}},[e("img",{staticClass:"image wp-image-7844  attachment-full size-full lazy",staticStyle:{"max-width":"100%",height:"auto",display:"inline"},attrs:{width:"330",height:"190",src:"https://armania.b-cdn.net/wp-content/uploads/2020/06/pets.jpg",alt:"",sizes:"(max-width: 330px) 100vw, 330px",srcset:"https://armania.b-cdn.net/wp-content/uploads/2020/06/pets.jpg 330w, https://armania.b-cdn.net/wp-content/uploads/2020/06/pets-300x173.jpg 300w, https://armania.b-cdn.net/wp-content/uploads/2020/06/pets-64x37.jpg 64w"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ovic-title horizontal style-01"},[e("div",{staticClass:"inner armania-dropdown"},[e("h2",{staticClass:"title",staticStyle:{width:"100%"}},[this._v("Popular Products")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"star-rating-wrap"},[e("div",{staticClass:"star-rating",attrs:{role:"img","aria-label":"Rated 4.00 out of 5"}},[e("span",{staticStyle:{width:"80%"}},[this._v("Rated "),e("strong",{staticClass:"rating"},[this._v("4.00")]),this._v(" out of 5")])]),e("strong",{staticClass:"rating"},[this._v("(01)")])])}],!1,null,"1d21f0dc",null);e.a=component.exports;m()(component,{VIcon:h.a})},968:function(t,e,r){"use strict";var c=r(885);r.n(c).a},969:function(t,e,r){(e=r(9)(!1)).push([t.i,'#stock[data-v-acc5da64]:before{position:absolute;display:inline-block;content:"";width:8px;height:8px;left:0;top:.45em;border-radius:100%;background:currentColor}.wrap-pic-w img[data-v-acc5da64]{height:300px}.slick3-dots li[data-v-acc5da64]{display:none!important}.w-100[data-v-acc5da64]{height:230px;transition:height .3s,opacity .3s}.w-100.selected[data-v-acc5da64]{transition:height .6s,opacity .6s;opacity:.8}.caption[data-v-acc5da64]{display:none}.caption.selected[data-v-acc5da64]{transition:height .6s,opacity .6s;display:block}#container[data-v-acc5da64]{position:relative;width:100%;height:100%}#container.after[data-v-acc5da64]{position:absolute;color:#000;display:none}#container:hover.after[data-v-acc5da64]{display:block;background:#000}.image-container[data-v-acc5da64]{position:relative;height:230px;width:100%}.image-container .after[data-v-acc5da64]{position:absolute;top:0;left:0;height:230px;width:100%;display:none;color:#fff}.image-container:hover .after[data-v-acc5da64]{display:block;background:rgba(0,0,0,.6)}#tooltip .v-btn[data-v-acc5da64]{background:hsla(0,0%,94.1%,.26)}#tooltip .v-btn[data-v-acc5da64]:hover{background:rgba(0,0,0,.24)}.v-btn .v-btn__content .v-icon[data-v-acc5da64]{box-shadow:0 9px 30px -6px rgba(255,54,54,.5)}.theme--light.v-data-iterator .v-data-iterator__actions[data-v-acc5da64]{margin-top:0!important}li[data-v-acc5da64],ul[data-v-acc5da64]{margin:0}@media(max-width:768px){.child-flex>*[data-v-acc5da64],.flex[data-v-acc5da64]{margin-top:-160px}.el-tabs[data-v-acc5da64],.entry-summary[data-v-acc5da64]{padding:20px}}',""]),t.exports=e}}]);