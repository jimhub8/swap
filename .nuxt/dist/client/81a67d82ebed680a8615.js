(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{838:function(t,e,n){var content=n(841);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("692b2c53",content,!0,{sourceMap:!1})},839:function(t,e,n){"use strict";var o={},r=(n(840),n(26)),component=Object(r.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"bg-title-page p-t-50 p-b-40 flex-col-c-m"},[e("h2",{staticClass:"l-text2 t-center",staticStyle:{color:"rgb(87, 205, 252)","text-transform":"none"}},[this._v("\n        SW"),e("span",{staticStyle:{color:"#FFF"}},[this._v("APP")])]),this._v(" "),e("p",{staticClass:"m-text13 t-center"},[this._v("\n        Living in the future\n    ")])])}],!1,null,"24a2736a",null);e.a=component.exports},840:function(t,e,n){"use strict";var o=n(838);n.n(o).a},841:function(t,e,n){(e=n(10)(!1)).push([t.i,".bg-title-page[data-v-24a2736a]{background-image:url(https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/banners/8.jpg)!important;background-attachment:fixed!important}",""]),t.exports=e},842:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(97),n(5),n(3),n(8);var o=n(1);function r(t){return o.default.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var o=n.props,data=n.data,r=n.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),e(o.tag,data,r)}})}},845:function(t,e,n){var content=n(846);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("2065bca8",content,!0,{sourceMap:!1})},846:function(t,e,n){(e=n(10)(!1)).push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=e},853:function(t,e,n){"use strict";n(440);var o=n(842);e.a=Object(o.a)("flex")},854:function(t,e,n){"use strict";n(440);var o=n(842);e.a=Object(o.a)("layout")},855:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(307),r=n(9),c=n(1);function l(t){return"undefined"!=typeof window&&"IntersectionObserver"in window?c.default.extend({name:"intersectable",mounted:function(){o.a.inserted(this.$el,{name:"intersect",value:{handler:this.onObserve}})},destroyed:function(){o.a.unbind(this.$el)},methods:{onObserve:function(e,n,o){if(o)for(var i=0,c=t.onVisible.length;i<c;i++){var l=this[t.onVisible[i]];"function"!=typeof l?Object(r.c)(t.onVisible[i]+" method is not available on the instance but referenced in intersectable mixin options"):l()}}}}):c.default.extend({name:"intersectable"})}},856:function(t,e,n){"use strict";n(12),n(7),n(5),n(3),n(8),n(36),n(40);var o=n(2),r=(n(14),n(845),n(811)),c=n(89),l=n(99),d=n(162),h=n(301),v=n(300),f=n(299),m=n(31),x=n(161),_=n(6),y=n(9),w=n(0);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(_.a)(c.a,l.a,d.a,h.a,v.a,f.a,m.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y.d)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w.v.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(r.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:k({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=k(k({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(w.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(w.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},881:function(t,e,n){"use strict";var o={data:function(){return{filter_data:{price:[0,0],category_id:0}}},methods:{FilterShop:function(t){this.filter_data.category_id=t,$nuxt.$emit("progressEvent");var e={model:"FilterShop",update:"updateProductsList",data:this.filter_data};this.$store.dispatch("filterItems",e)},getCategory:function(){this.$store.dispatch("getItems",{model:"categories",update:"updateCategoryList"})},buildUrl:function(t){return"/category/"+this.$slugify(t.id,t.category)}},mounted:function(){this.getCategory()},computed:{categories:function(){return this.$store.getters.categories}}},r=n(26),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"col-xs-12 col-md-12 sidebar-shop"},[n("div",{staticClass:"sidebar-product-categori"},[t._m(0),t._v(" "),n("div",{staticClass:"widget-content"},[n("ul",{staticClass:"product-categories"},t._l(t.categories.data,(function(e){return n("nuxt-link",{key:e.id,attrs:{to:t.buildUrl(e)}},[n("li",{staticClass:"cat-item"},[n("p",{staticStyle:{cursor:"pointer"},on:{click:function(n){return t.FilterShop(e.id)}}},[t._v(t._s(e.category))])])])})),1)]),t._v(" "),n("div",{staticClass:"product-filter mb-30"},[t._m(1),t._v(" "),n("div",{staticClass:"widget-content"},[n("el-slider",{attrs:{range:"",max:5e5},on:{change:function(e){return t.FilterShop(t.filter_data.category_id)}},model:{value:t.filter_data.price,callback:function(e){t.$set(t.filter_data,"price",e)},expression:"filter_data.price"}}),t._v(" "),t._m(2)],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-title"},[e("h3",[this._v("PRODUCT CATEGORIES")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"widget-title"},[e("h3",[this._v("Filter by price")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"price-values"},[e("div",{staticClass:"price_text_btn"},[e("span",[this._v("Price:")]),this._v(" "),e("input",{staticClass:"price-amount",attrs:{type:"text"}})]),this._v(" "),e("button",{staticClass:"button",attrs:{type:"submit"}},[this._v("Filter")])])}],!1,null,null,null);e.a=component.exports},882:function(t,e,n){"use strict";var o={data:function(){return{form:{},dialog:!1,product:null,variants:{},variants_values:{}}},created:function(){var t=this;this.$nuxt.$on("selectVariantsEvent",(function(data){t.dialog=!0,t.product=data,t.getProductVariants(data.id)}))},methods:{getProductVariants:function(t){var e=this;axios.get("product_variant/".concat(t)).then((function(t){e.variants=t.data})).catch((function(t){}))},getChoiseData:function(){var t=this;this.loading=!0,axios.post("variants_values/".concat(this.product.id),this.variants).then((function(e){t.loading=!1,t.variants_values=e.data,$nuxt.$emit("addCartVariantEvent",e.data)})).catch((function(e){console.log(e),t.loading=!1}))},close:function(){this.dialog=!1}},computed:{}},r=n(26),c=n(35),l=n.n(c),d=n(305),h=n(284),v=n(64),f=n(888),m=n(856),x=n(815),_=n(853),y=n(854),w=n(830),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline text-center",staticStyle:{margin:"auto"}},[t._v("Select variants")])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.variants,(function(e){return n("v-flex",{key:e.id,attrs:{sm4:""}},[t._v("\n                            "+t._s(e.attribute.option_name)+"\n                            "),n("v-divider"),t._v(" "),t._l(e.tags,(function(o){return n("el-radio-group",{key:o.id,model:{value:e.choise,callback:function(n){t.$set(e,"choise",n)},expression:"variant.choise"}},[n("el-radio-button",{attrs:{label:o.option_name}})],1)}))],2)})),1)],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Close")]),t._v(" "),n("VSpacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.getChoiseData}},[t._v("Submit")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VContainer:f.a,VDialog:m.a,VDivider:x.a,VFlex:_.a,VLayout:y.a,VSpacer:w.a})},888:function(t,e,n){"use strict";n(97),n(5),n(3),n(8),n(440),n(298);var o=n(842),r=n(85);e.a=Object(o.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(r.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),c)}})},942:function(t,e,n){var content=n(943);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("7f6d4ad6",content,!0,{sourceMap:!1})},943:function(t,e,n){(e=n(10)(!1)).push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),t.exports=e},977:function(t,e,n){"use strict";n(12),n(7),n(5),n(8),n(21),n(22),n(3);var o=n(69),r=n(2),c=(n(14),n(942),n(56)),l=n(206),d=n(17),h=n(855),v=n(16),f=n(6);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(f.a)(d.a,Object(h.a)({onVisible:["init"]}),v.a).extend({name:"v-pagination",directives:{Resize:l.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2==0?1:0,r=Math.floor(e/2),c=this.length-r+1+n;if(this.value>r&&this.value<c){var l=this.value-r+2,d=this.value+r-2-n;return[1,"..."].concat(Object(o.a)(this.range(l,d)),["...",this.length])}if(this.value===r){var h=this.value+r-1-n;return[].concat(Object(o.a)(this.range(1,h)),["...",this.length])}if(this.value===c){var v=this.value-r+1;return[1,"..."].concat(Object(o.a)(this.range(v,this.length)))}return[].concat(Object(o.a)(this.range(1,r)),["..."],Object(o.a)(this.range(c,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,o){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:o}},[t(c.a,[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button"},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})}}]);