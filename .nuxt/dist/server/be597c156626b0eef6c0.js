exports.ids=[16],exports.modules={214:function(t,e,o){var content=o(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(4).default;t.exports.__inject__=function(t){r("692b2c53",content,!0,t)}},215:function(t,e,o){"use strict";o.d(e,"a",(function(){return d}));var r=o(1),n=o.n(r);function d(t){return n.a.extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:o,data:data,children:r}){data.staticClass=`${t} ${data.staticClass||""}`.trim();const{attrs:n}=data;if(n){data.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e});t.length&&(data.staticClass+=" "+t.join(" "))}return o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),e(o.tag,data,r)}})}},216:function(t,e,o){"use strict";o.r(e);var r=o(214),n=o.n(r);for(var d in r)"default"!==d&&function(t){o.d(e,t,(function(){return r[t]}))}(d);e.default=n.a},217:function(t,e,o){(e=o(3)(!1)).push([t.i,".bg-title-page[data-v-24a2736a]{background-image:url(https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/banners/8.jpg)!important;background-attachment:fixed!important}",""]),t.exports=e},218:function(t,e,o){"use strict";var r={},n=o(9);var component=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"bg-title-page p-t-50 p-b-40 flex-col-c-m"},[this._ssrNode('<h2 class="l-text2 t-center" style="color: rgb(87, 205, 252);text-transform: none;" data-v-24a2736a>\n        SW<span style="color: #FFF;" data-v-24a2736a>APP</span></h2> <p class="m-text13 t-center" data-v-24a2736a>\n        Living in the future\n    </p>')])}),[],!1,(function(t){var e=o(216);e.__inject__&&e.__inject__(t)}),"24a2736a","7f57e1c0");e.a=component.exports},221:function(t,e,o){var content=o(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),o(4).default("2065bca8",content,!0)},222:function(t,e,o){(e=o(3)(!1)).push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=e},225:function(t,e,o){"use strict";o(86);var r=o(215);e.a=Object(r.a)("flex")},226:function(t,e,o){"use strict";o(86);var r=o(215);e.a=Object(r.a)("layout")},240:function(t,e,o){"use strict";var r={data:()=>({filter_data:{price:[0,0],category_id:0}}),methods:{FilterShop(t){this.filter_data.category_id=t,$nuxt.$emit("progressEvent");var e={model:"FilterShop",update:"updateProductsList",data:this.filter_data};this.$store.dispatch("filterItems",e)},getCategory(){this.$store.dispatch("getItems",{model:"categories",update:"updateCategoryList"})},buildUrl(t){return"/category/"+this.$slugify(t.id,t.category)}},mounted(){this.getCategory()},computed:{categories(){return this.$store.getters.categories}}},n=o(9),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._ssrNode('<div class="col-xs-12 col-md-12 sidebar-shop">',"</div>",[t._ssrNode('<div class="sidebar-product-categori">',"</div>",[t._ssrNode('<div class="widget-title"><h3>PRODUCT CATEGORIES</h3></div> '),t._ssrNode('<div class="widget-content">',"</div>",[t._ssrNode('<ul class="product-categories">',"</ul>",t._l(t.categories.data,(function(e){return o("nuxt-link",{key:e.id,attrs:{to:t.buildUrl(e)}},[o("li",{staticClass:"cat-item"},[o("p",{staticStyle:{cursor:"pointer"},on:{click:function(o){return t.FilterShop(e.id)}}},[t._v(t._s(e.category))])])])})),1)]),t._ssrNode(" "),t._ssrNode('<div class="product-filter mb-30">',"</div>",[t._ssrNode('<div class="widget-title"><h3>Filter by price</h3></div> '),t._ssrNode('<div class="widget-content">',"</div>",[o("el-slider",{attrs:{range:"",max:5e5},on:{change:function(e){return t.FilterShop(t.filter_data.category_id)}},model:{value:t.filter_data.price,callback:function(e){t.$set(t.filter_data,"price",e)},expression:"filter_data.price"}}),t._ssrNode(' <div class="price-values"><div class="price_text_btn"><span>Price:</span> <input type="text" class="price-amount"></div> <button type="submit" class="button">Filter</button></div>')],2)],2)],2)])])}),[],!1,null,null,"5fa97f5e");e.a=component.exports},241:function(t,e,o){"use strict";var r={data:()=>({form:{},dialog:!1,product:null,variants:{},variants_values:{}}),created(){this.$nuxt.$on("selectVariantsEvent",data=>{this.dialog=!0,this.product=data,this.getProductVariants(data.id)})},methods:{getProductVariants(t){axios.get("product_variant/"+t).then(t=>{this.variants=t.data}).catch(t=>{})},getChoiseData(){this.loading=!0,axios.post("variants_values/"+this.product.id,this.variants).then(t=>{this.loading=!1,this.variants_values=t.data,$nuxt.$emit("addCartVariantEvent",t.data)}).catch(t=>{console.log(t),this.loading=!1})},close(){this.dialog=!1}},computed:{}},n=o(9),d=o(12),l=o.n(d),c=o(72),h=o(55),v=o(18),m=o(244),f=o(245),_=o(197),x=o(225),y=o(226),w=o(211),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{row:"","justify-center":""}},[o("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"headline text-center",staticStyle:{margin:"auto"}},[t._v("Select variants")])]),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",[o("v-container",{attrs:{"grid-list-md":""}},[o("v-layout",{attrs:{row:"",wrap:""}},t._l(t.variants,(function(e){return o("v-flex",{key:e.id,attrs:{sm4:""}},[t._v("\n                            "+t._s(e.attribute.option_name)+"\n                            "),o("v-divider"),t._v(" "),t._l(e.tags,(function(r){return o("el-radio-group",{key:r.id,model:{value:e.choise,callback:function(o){t.$set(e,"choise",o)},expression:"variant.choise"}},[o("el-radio-button",{attrs:{label:r.option_name}})],1)}))],2)})),1)],1)],1),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Close")]),t._v(" "),o("VSpacer"),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.getChoiseData}},[t._v("Submit")])],1)],1)],1)],1)}),[],!1,null,null,"77cb29b4");e.a=component.exports;l()(component,{VBtn:c.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VContainer:m.a,VDialog:f.a,VDivider:_.a,VFlex:x.a,VLayout:y.a,VSpacer:w.a})},244:function(t,e,o){"use strict";o(86),o(63);var r=o(215),n=o(21);e.a=Object(r.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:data,children:o}){let r;const{attrs:d}=data;return d&&(data.attrs={},r=Object.keys(d).filter(t=>{if("slot"===t)return!1;const e=d[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e})),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(n.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),o)}})},245:function(t,e,o){"use strict";o(221);var r=o(193),n=o(22),d=o(24),l=o(37),c=o(67),h=o(65),v=o(64),m=o(10),f=o(36),_=o(2),x=o(5),y=o(0);const w=Object(_.a)(n.a,d.a,l.a,c.a,h.a,v.a,m.a);e.a=w.extend({name:"v-dialog",directives:{ClickOutside:f.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(x.d)("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c.a.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===y.v.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(r.a,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent(){const data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style={...data.style,maxWidth:"none"===this.maxWidth?void 0:Object(y.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(y.g)(this.width)}),this.$createElement("div",data,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},268:function(t,e,o){var content=o(329);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=o(4).default;t.exports.__inject__=function(t){r("2ad74ffd",content,!0,t)}},328:function(t,e,o){"use strict";o.r(e);var r=o(268),n=o.n(r);for(var d in r)"default"!==d&&function(t){o.d(e,t,(function(){return r[t]}))}(d);e.default=n.a},329:function(t,e,o){(e=o(3)(!1)).push([t.i,".wrap-pic-w img[data-v-4bba00d5]{height:300px}.theme--dark.v-btn.v-btn--icon[data-v-4bba00d5]{color:#fff}#shop_theme .theme--dark[data-v-4bba00d5]{color:#0276a5!important;background-color:transparent!important}a[data-v-4bba00d5]:before{display:none!important}img[data-v-4bba00d5]{border-style:none;height:300px}",""]),t.exports=e},364:function(t,e,o){"use strict";o.r(e);var r=o(218),filter=o(240),n=o(241),d=o(13),l={components:{headerP:r.a,myFilter:filter.a,myVariants:n.a},head:()=>({title:"Swap - Home",meta:[{hid:"og:title",name:"og:title",content:"Products"},{hid:"description",name:"description",content:"Swap, Online Shopping, Electronics, Video Games, Computers, Cell Phones, Toys, Games, Apparel, Accessories, Shoes, Jewelry, Watches, Office, Sports & Outdoors, Sporting Goods, Babies, Health, Personal Care, Beauty, Home, Garden, Bed & Bath, Furniture, Tools, Vacuums, Outdoor Living, Automotive Parts"},{hid:"og:description",name:"og:description",content:"Free delivery on millions of items with Swap. Low prices across earth's biggest selection of electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, groceries & just about anything else"},{hid:"keywords",name:"keywords",content:"Swap, Online Shopping, Electronics, Video Games, Computers, Cell Phones, Toys, Games, Apparel, Accessories, Shoes, Jewelry, Watches, Office, Sports & Outdoors, Sporting Goods, Babies, Health, Personal Care, Beauty, Home, Garden, Bed & Bath, Furniture, Tools, Vacuums, Outdoor Living, Automotive Parts"}]}),data:()=>({placeholder:"https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png",form:{search:""},items:[{state:"All"},{state:"New",abbr:"new_product"},{state:"Popularity",abbr:"best_sell"},{state:"Featured",abbr:"featured"}],itemSelect:{abbr:"All",state:"All"},price:[0,3e4],priceSelect:{state:"All"},loader:!1,cat_id:null,filter_data:{price:[0,0],category_id:0}}),async fetch({store:t}){await t.dispatch("getItems",{model:"shop",update:"updateProduct"})},methods:{searchItems(){$nuxt.$emit("progressEvent")},redirect(t){},catId(t){this.cat_id=t,this.FilterShop()},catAll(){this.cat_id=null,this.FilterShop()},getProducts(){this.$store.dispatch("getItems",{model:"shop",update:"updateProductsList"})},addToCart(t){t.product_variants.length>0?$nuxt.$emit("selectVariantsEvent",t):(t.order_qty=1,$nuxt.$emit("addCartEvent",t))},next(t){var e={model:"shop?page="+this.products.current_page,update:"updateProductsList"};this.$store.dispatch("getItems",e)},getMenus(){this.$store.dispatch("getItems",{model:"menus",update:"updateMenuList"})},FilterShop(t){$nuxt.$emit("progressEvent"),this.filter_data.category_id=t,$nuxt.$emit("progressEvent");var e={model:"FilterShop",update:"updateProductsList",data:this.filter_data};this.$store.dispatch("filterData",e)},getWish(){this.$store.dispatch("getItems",{model:"wish",update:"updateWishList"})},addToWish(t){$nuxt.$emit("WishListEvent",t)},imageUrlAlt(t){event.target.src="/assets/notfound/notfound.jpg"},buildUrl(t){return"/shop/"+this.$slugify(t.id,t.product_name)}},mounted(){},updated(){},beforeRouteLeave(t,e,o){o(),window.scrollTo(0,0)},created(){this.$nuxt.$on("RefWishEvent",data=>{this.FilterShop()})},computed:{...Object(d.mapState)(["products"]),menus(){return this.$store.getters.menu},loading(){return this.$store.getters.loading},wish(){return this.$store.getters.wish}}},c=o(9),h=o(12),v=o.n(h),m=o(56);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"shop_theme"}},[o("headerP"),t._ssrNode(" "),t._ssrNode('<section class="bgwhite p-t-55 p-b-65" data-v-4bba00d5>',"</section>",[t._ssrNode('<div class="container-fluid" data-v-4bba00d5>',"</div>",[t._ssrNode('<div class="row" data-v-4bba00d5>',"</div>",[t._ssrNode('<div class="col-sm-6 col-md-4 col-lg-3 p-b-50" data-v-4bba00d5>',"</div>",[t._ssrNode('<div class="leftbar p-r-20 p-r-0-sm" data-v-4bba00d5>',"</div>",[o("myFilter")],1)]),t._ssrNode(" "),t._ssrNode('<div class="col-sm-6 col-md-8 col-lg-9 p-b-50" data-v-4bba00d5>',"</div>",[t._ssrNode('<div class="flex-sb-m flex-w p-b-35" data-v-4bba00d5><div class="flex-w" data-v-4bba00d5><div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10" data-v-4bba00d5></div></div> <span class="s-text8 p-t-5 p-b-5" data-v-4bba00d5>'+t._ssrEscape("Showing page "+t._s(t.products.current_page)+" of "+t._s(t.products.last_page)+" pages")+"</span></div> "),t.products.data.length>0?t._ssrNode('<div class="row" data-v-4bba00d5>',"</div>",[t._ssrNode('<ul class="products shop-page response-content columns-3 ovic-products style-15 equal-container better-height" data-v-4bba00d5>',"</ul>",t._l(t.products.data,(function(e,r){return t._ssrNode('<li data-product_id="3510" class="product-item style-15 short-title product type-product post-3510 status-publish first instock product_cat-cbd-oil-valey product_cat-medicine product_tag-medicine has-post-thumbnail shipping-taxable purchasable product-type-simple" data-v-4bba00d5>',"</li>",[t._ssrNode('<div class="product-inner" data-v-4bba00d5>',"</div>",[t._ssrNode('<div class="product-thumb" data-v-4bba00d5>',"</div>",[t._ssrNode('<div class="thumb-wrapper" data-v-4bba00d5>',"</div>",[o("nuxt-link",{attrs:{to:t.buildUrl(e)}},[o("figure",{staticClass:"primary-thumb"},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"product.image"}],staticStyle:{display:"inline"},attrs:{src:"https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/site/no_image.png",alt:e.product_name,width:"320",height:"320"}})])])],1),t._ssrNode(" "),t._ssrNode('<div class="group-button" data-v-4bba00d5>',"</div>",[t._ssrNode('<div class="yith-wcwl-add-to-wishlist add-to-wishlist-3510  wishlist-fragment on-first-load" data-v-4bba00d5>',"</div>",[t._ssrNode('<div class="yith-wcwl-add-button" data-v-4bba00d5>',"</div>",[t._ssrNode('<a href="#" rel="nofollow" data-product-id="3510" data-product-type="simple" data-original-product-id="3510" data-title="Wishlist" data-original-title title class="add_to_wishlist single_add_to_wishlist" data-v-4bba00d5>',"</a>",[o("v-icon",[t._v("mdi-heart")]),t._ssrNode("<span data-v-4bba00d5>Wishlist</span>")],2)])])])],2),t._ssrNode(" "),t._ssrNode('<div class="product-info equal-elem" style="height: 83px;" data-v-4bba00d5>',"</div>",[t._ssrNode('<h2 class="product-title" data-v-4bba00d5>',"</h2>",[o("nuxt-link",{attrs:{to:t.buildUrl(e)}},[t._v("\n                                                "+t._s(e.product_name)+"\n                                            ")])],1),t._ssrNode(" "),t._ssrNode('<div class="box-wrap" data-v-4bba00d5>',"</div>",[t._ssrNode('<div class="box-left" data-v-4bba00d5><div class="star-rating-wrap" data-v-4bba00d5><div role="img" aria-label="Rated 4.00 out of 5" class="star-rating" data-v-4bba00d5><span style="width:80%" data-v-4bba00d5>Rated <strong class="rating" data-v-4bba00d5>4.00</strong> out of 5</span></div> <strong class="rating" data-v-4bba00d5>(01)</strong></div> <span class="price" data-v-4bba00d5><span class="woocommerce-Price-amount amount" data-v-4bba00d5><span class="woocommerce-Price-currencySymbol" data-v-4bba00d5>KSH </span>'+t._ssrEscape(t._s(e.price))+"</span></span></div> "),t._ssrNode('<span data-title="Add to cart" class="add-to-cart" data-v-4bba00d5>',"</span>",[t._ssrNode('<a href="#" rel="nofollow" class="button product_type_simple" data-v-4bba00d5>',"</a>",[o("v-icon",[t._v("mdi-cart")]),t._ssrNode("\n                                                Add to cart")],2)])],2)],2)],2)])})),0)]):t._ssrNode('<div data-v-4bba00d5><p class="text-center" style="background: #f2dede; font-size: 13px; color: #a94442 !important;" data-v-4bba00d5>No products available</p></div>')],2)],2)])]),t._ssrNode(" "),o("myVariants")],2)}),[],!1,(function(t){var e=o(328);e.__inject__&&e.__inject__(t)}),"4bba00d5","0a1613f0");e.default=component.exports;v()(component,{VIcon:m.a})}};