exports.ids=[4],exports.modules={204:function(t,e,n){var content=n(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(4).default;t.exports.__inject__=function(t){o("692b2c53",content,!0,t)}},205:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(1),r=n.n(o);function l(t){return r.a.extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:data,children:o}){data.staticClass=`${t} ${data.staticClass||""}`.trim();const{attrs:r}=data;if(r){data.attrs={};const t=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e});t.length&&(data.staticClass+=" "+t.join(" "))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,data,o)}})}},207:function(t,e,n){"use strict";n.r(e);var o=n(204),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},208:function(t,e,n){(e=n(3)(!1)).push([t.i,".bg-title-page[data-v-24a2736a]{background-image:url(https://jimkiarie8.nyc3.digitaloceanspaces.com/swap/banners/8.jpg)!important;background-attachment:fixed!important}",""]),t.exports=e},209:function(t,e,n){"use strict";var o={},r=n(9);var component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"bg-title-page p-t-50 p-b-40 flex-col-c-m"},[this._ssrNode('<h2 class="l-text2 t-center" style="color: rgb(87, 205, 252);text-transform: none;" data-v-24a2736a>\n        SW<span style="color: #FFF;" data-v-24a2736a>APP</span></h2> <p class="m-text13 t-center" data-v-24a2736a>\n        Living in the future\n    </p>')])}),[],!1,(function(t){var e=n(207);e.__inject__&&e.__inject__(t)}),"24a2736a","7f57e1c0");e.a=component.exports},211:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n(65),r=n(5),l=n(1),c=n.n(l);function d(t){return"undefined"!=typeof window&&"IntersectionObserver"in window?c.a.extend({name:"intersectable",mounted(){o.a.inserted(this.$el,{name:"intersect",value:{handler:this.onObserve}})},destroyed(){o.a.unbind(this.$el)},methods:{onObserve(e,n,o){if(o)for(let i=0,e=t.onVisible.length;i<e;i++){const e=this[t.onVisible[i]];"function"!=typeof e?Object(r.c)(t.onVisible[i]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}}):c.a.extend({name:"intersectable"})}},212:function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(4).default("dc0628f2",content,!0)},213:function(t,e,n){(e=n(3)(!1)).push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=e},217:function(t,e,n){var content=n(218);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(4).default("2065bca8",content,!0)},218:function(t,e,n){(e=n(3)(!1)).push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=e},231:function(t,e,n){"use strict";n(83);var o=n(205);e.a=Object(o.a)("flex")},232:function(t,e,n){"use strict";n(83);var o=n(205);e.a=Object(o.a)("layout")},233:function(t,e,n){"use strict";n(212);var o=n(27),r=n(7),l=n(21),c=n(32),d=n(61),h=n(50),v=n(11),m=n(0),f=n(5),_=n(2);e.a=Object(_.a)(r.a,l.a,c.a,d.a,h.a,v.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:content}=this.dimensions,e=!(this.bottom||this.left||this.top||this.right),n=!1!==this.attach?t.offsetLeft:t.left;let o=0;return this.top||this.bottom||e?o=n+t.width/2-content.width/2:(this.left||this.right)&&(o=n+(this.right?t.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),this.calcXOverflow(o,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:content}=this.dimensions,e=!1!==this.attach?t.offsetTop:t.top;let n=0;return this.top||this.bottom?n=e+(this.bottom?t.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=e+t.height/2-content.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),this.calcYOverflow(n+this.pageYOffset)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(m.g)(this.maxWidth),minWidth:Object(m.g)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(m.r)(this,"activator",!0)&&Object(f.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=o.a.options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===m.v.esc&&(this.getActivator(t),this.runDelay("close"))},t},genTransition(){const content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})},237:function(t,e,n){"use strict";n(83),n(64);var o=n(205),r=n(20);e.a=Object(o.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:data,children:n}){let o;const{attrs:l}=data;return l&&(data.attrs={},o=Object.keys(l).filter(t=>{if("slot"===t)return!1;const e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e})),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(r.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(o||[])}),n)}})},242:function(t,e,n){"use strict";n(217);var o=n(184),r=n(27),l=n(32),c=n(61),d=n(69),h=n(68),v=n(67),m=n(11),f=n(34),_=n(2),x=n(5),y=n(0);const w=Object(_.a)(r.a,l.a,c.a,d.a,h.a,v.a,m.a);e.a=w.extend({name:"v-dialog",directives:{ClickOutside:f.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(x.d)("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d.a.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===y.v.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(o.a,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent(){const data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style={...data.style,maxWidth:"none"===this.maxWidth?void 0:Object(y.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(y.g)(this.width)}),this.$createElement("div",data,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},252:function(t,e,n){var content=n(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(4).default("7f6d4ad6",content,!0)},253:function(t,e,n){(e=n(3)(!1)).push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),t.exports=e},254:function(t,e,n){"use strict";var o={data:()=>({filter_data:{price:[0,0],category_id:0}}),methods:{FilterShop(t){this.filter_data.category_id=t,$nuxt.$emit("progressEvent");var e={model:"FilterShop",update:"updateProductsList",data:this.filter_data};this.$store.dispatch("filterItems",e)},getCategory(){this.$store.dispatch("getItems",{model:"categories",update:"updateCategoryList"})}},mounted(){this.getCategory()},computed:{categories(){return this.$store.getters.categories}}},r=n(9),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._ssrNode('<div class="col-xs-12 col-md-12 sidebar-shop">',"</div>",[t._ssrNode('<div class="sidebar-product-categori">',"</div>",[t._ssrNode('<div class="widget-title"><h3>PRODUCT CATEGORIES</h3></div> <div class="widget-content"><ul class="product-categories">'+t._ssrList(t.categories.data,(function(e){return'<li class="cat-item"><p style="cursor: pointer">'+t._ssrEscape(t._s(e.category))+"</p></li>"}))+"</ul></div> "),t._ssrNode('<div class="product-filter mb-30">',"</div>",[t._ssrNode('<div class="widget-title"><h3>Filter by price</h3></div> '),t._ssrNode('<div class="widget-content">',"</div>",[n("el-slider",{attrs:{range:"",max:5e5},on:{change:function(e){return t.FilterShop(t.filter_data.category_id)}},model:{value:t.filter_data.price,callback:function(e){t.$set(t.filter_data,"price",e)},expression:"filter_data.price"}}),t._ssrNode(' <div class="price-values"><div class="price_text_btn"><span>Price:</span> <input type="text" class="price-amount"></div> <button type="submit" class="button">Filter</button></div>')],2)],2)],2)])])}),[],!1,null,null,"5fa97f5e");e.a=component.exports},255:function(t,e,n){"use strict";var o={data:()=>({form:{},dialog:!1,product:null,variants:{},variants_values:{}}),created(){this.$nuxt.$on("selectVariantsEvent",data=>{this.dialog=!0,this.product=data,this.getProductVariants(data.id)})},methods:{getProductVariants(t){axios.get("product_variant/"+t).then(t=>{this.variants=t.data}).catch(t=>{})},getChoiseData(){this.loading=!0,axios.post("variants_values/"+this.product.id,this.variants).then(t=>{this.loading=!1,this.variants_values=t.data,$nuxt.$emit("addCartVariantEvent",t.data)}).catch(t=>{console.log(t),this.loading=!1})},close(){this.dialog=!1}},computed:{}},r=n(9),l=n(10),c=n.n(l),d=n(66),h=n(54),v=n(19),m=n(237),f=n(242),_=n(187),x=n(231),y=n(232),w=n(201),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline text-center",staticStyle:{margin:"auto"}},[t._v("Select variants")])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.variants,(function(e){return n("v-flex",{key:e.id,attrs:{sm4:""}},[t._v("\n                            "+t._s(e.attribute.option_name)+"\n                            "),n("v-divider"),t._v(" "),t._l(e.tags,(function(o){return n("el-radio-group",{key:o.id,model:{value:e.choise,callback:function(n){t.$set(e,"choise",n)},expression:"variant.choise"}},[n("el-radio-button",{attrs:{label:o.option_name}})],1)}))],2)})),1)],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Close")]),t._v(" "),n("VSpacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.getChoiseData}},[t._v("Submit")])],1)],1)],1)],1)}),[],!1,null,null,"77cb29b4");e.a=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VContainer:m.a,VDialog:f.a,VDivider:_.a,VFlex:x.a,VLayout:y.a,VSpacer:w.a})},279:function(t,e,n){var content=n(328);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(4).default;t.exports.__inject__=function(t){o("549f355d",content,!0,t)}},294:function(t,e,n){"use strict";n(252);var o=n(15),r=n(36),l=n(7),c=n(211),d=n(6),h=n(2);e.a=Object(h.a)(l.a,Object(c.a)({onVisible:["init"]}),d.a).extend({name:"v-pagination",directives:{Resize:r.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1==0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0}},data:()=>({maxButtons:0,selected:null}),computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10),e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const n=e%2==0?1:0,o=Math.floor(e/2),r=this.length-o+1+n;if(this.value>o&&this.value<r){const t=this.value-o+2,e=this.value+o-2-n;return[1,"...",...this.range(t,e),"...",this.length]}if(this.value===o){const t=this.value+o-1-n;return[...this.range(1,t),"...",this.length]}if(this.value===r){const t=this.value-o+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,o),"...",...this.range(r,this.length)]}},watch:{value(){this.init()}},mounted(){this.init()},methods:{init(){this.selected=null,this.$nextTick(this.onResize),setTimeout(()=>this.selected=this.value,100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const n=[];for(let i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:(t,e,n,r)=>t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button"},on:n?{}:{click:r}},[t(o.a,[e])])]),genItem(t,i){const e=i===this.value&&(this.color||"primary");return t("button",this.setBackgroundColor(e,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button"},on:{click:()=>this.$emit("input",i)}}),[i.toString()])},genItems(t){return this.items.map((i,e)=>t("li",{key:e},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):this.genItem(t,i)]))}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next)];return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}})},327:function(t,e,n){"use strict";n.r(e);var o=n(279),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},328:function(t,e,n){(e=n(3)(!1)).push([t.i,".wrap-pic-w img[data-v-2a248409]{height:300px}",""]),t.exports=e},367:function(t,e,n){"use strict";n.r(e);var o=n(13),r=n(209),filter=n(254),l=n(255),c={name:"cat_details",components:{headerP:r.a,myFilter:filter.a,myVariants:l.a},data:()=>({form:{search:""},items:[{state:"All"},{state:"New",abbr:"new_product"},{state:"Popularity",abbr:"best_sell"},{state:"Featured",abbr:"featured"}],itemSelect:{abbr:"All",state:"All"},price:[{state:"All"},{state:"0-500"},{state:"501-1000"},{state:"1000-5000"}],priceSelect:{state:"All"},loader:!1}),async fetch({store:t,route:e}){var n={model:"categories",update:"updateProduct",id:e.params.id};await t.dispatch("showItem",n)},methods:{addToCart(t){t.product_variants.length>0?$nuxt.$emit("selectVariantsEvent",t):(t.order_qty=1,$nuxt.$emit("addCartEvent",t))},next(t){$nuxt.$emit("progressEvent")},addToWish(t){$nuxt.$emit("WishListEvent",t)}},mounted(){},beforeRouteLeave(t,e,n){n(),window.scrollTo(0,0)},computed:{...Object(o.mapState)(["products"])}},d=n(9),h=n(10),v=n.n(h),m=n(66),f=n(55),_=n(294),x=n(53),y=n(233);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("headerP"),t._ssrNode(" "),t._ssrNode("<div"+t._ssrStyle({"text-align":"center",width:"100%","margin-top":"200px"},null,{display:t.loader?"":"none"})+" data-v-2a248409>","</div>",[n("v-progress-circular",{staticStyle:{margin:"1rem"},attrs:{width:3,indeterminate:"",color:"red"}})],1),t._ssrNode(" "),t._ssrNode('<section class="bgwhite p-t-55 p-b-65"'+t._ssrStyle(null,null,{display:t.loader?"none":""})+" data-v-2a248409>","</section>",[t._ssrNode('<div class="container-fluid" data-v-2a248409>',"</div>",[t._ssrNode('<div class="row" data-v-2a248409>',"</div>",[t._ssrNode('<div class="col-sm-6 col-md-4 col-lg-3 p-b-50" data-v-2a248409>',"</div>",[t._ssrNode('<div class="leftbar p-r-20 p-r-0-sm" data-v-2a248409>',"</div>",[n("myFilter")],1)]),t._ssrNode(" "),t._ssrNode('<div class="col-sm-6 col-md-8 col-lg-9 p-b-50" data-v-2a248409>',"</div>",[t._ssrNode('<div class="flex-sb-m flex-w p-b-35" data-v-2a248409><span class="s-text8 p-t-5 p-b-5" data-v-2a248409>'+t._ssrEscape("Showing page "+t._s(t.products.current_page)+" of "+t._s(t.products.last_page)+" pages")+"</span></div> "),t.products.data.length>0?t._ssrNode('<div class="row" data-v-2a248409>',"</div>",t._l(t.products.data,(function(e){return t._ssrNode('<div class="col-sm-12 col-md-6 col-lg-4 p-b-50" data-v-2a248409>',"</div>",[t._ssrNode('<div class="block2" data-v-2a248409>',"</div>",[1===e.new_product?t._ssrNode('<div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew" data-v-2a248409>',"</div>",[t._ssrNode('<div class="block2-overlay trans-0-4" data-v-2a248409>',"</div>",[1===e.wish_list?n("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""}},[n("v-btn",{staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px"},attrs:{slot:"activator",icon:""},on:{click:function(n){return t.addToWish(e.id)}},slot:"activator"},[n("v-icon",{attrs:{color:"pink darken-2",large:""}},[t._v("favorite")])],1),t._v(" "),n("span",[t._v("Wish list")])],1):n("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""}},[n("v-btn",{staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px"},attrs:{slot:"activator",icon:""},on:{click:function(n){return t.addToWish(e.id)}},slot:"activator"},[n("v-icon",{attrs:{color:"white darken-2",large:""}},[t._v("favorite")])],1),t._v(" "),n("span",[t._v("Wish list")])],1),t._ssrNode(" "),t._ssrNode('<div class="block2-btn-addcart w-size1 trans-0-4" data-v-2a248409>',"</div>",[n("v-btn",{attrs:{color:"success"},on:{click:function(n){return t.addToCart(e)}}},[t._v("Add to Cart")])],1)],2)]):t._ssrNode('<div class="block2-img wrap-pic-w of-hidden pos-relative" data-v-2a248409>',"</div>",[t._ssrNode("<img"+t._ssrAttr("src",e.image)+' alt="IMG-PRODUCT" data-v-2a248409> '),t._ssrNode('<div class="block2-overlay trans-0-4" data-v-2a248409>',"</div>",[1===e.wish_list?n("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""}},[n("v-btn",{staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px"},attrs:{slot:"activator",icon:""},on:{click:function(n){return t.addToWish(e.id)}},slot:"activator"},[n("v-icon",{attrs:{color:"pink darken-2",large:""}},[t._v("favorite")])],1),t._v(" "),n("span",[t._v("Wish list")])],1):n("v-tooltip",{staticStyle:{"margin-left":"90%"},attrs:{bottom:""}},[n("v-btn",{staticClass:"mx-0 block2-btn-addwishlist hov-pointer trans-0-4",staticStyle:{"margin-top":"-20px"},attrs:{slot:"activator",icon:""},on:{click:function(n){return t.addToWish(e.id)}},slot:"activator"},[n("v-icon",{attrs:{color:"white darken-2",large:""}},[t._v("favorite")])],1),t._v(" "),n("span",[t._v("Wish list")])],1),t._ssrNode(" "),t._ssrNode('<div class="block2-btn-addcart w-size1 trans-0-4" data-v-2a248409>',"</div>",[n("v-btn",{attrs:{color:"primary"},on:{click:function(n){return t.addToCart(e)}}},[t._v("Add to Cart")])],1)],2)],2),t._ssrNode(" "),t._ssrNode('<div class="block2-txt p-t-20" data-v-2a248409>',"</div>",[n("nuxt-link",{attrs:{to:"/shop/"+e.id}},[n("button",{staticClass:"block2-name dis-block s-text3 p-b-5"},[t._v(t._s(e.product_name))]),t._v(" "),n("span",{staticClass:"block2-price m-text6 p-r-5"},[t._v(t._s(e.price))])])],1)],2)])})),0):t._ssrNode('<div data-v-2a248409><p class="text-center" style="background: #f2dede; font-size: 13px; color: #a94442 !important;" data-v-2a248409>No products available</p></div>')],2),t._ssrNode(" "),t.products.last_page>1?t._ssrNode('<div class="text-xs-center" style="margin: auto; width: 100%;" data-v-2a248409>',"</div>",[n("v-pagination",{attrs:{length:t.products.last_page,"total-visible":"6",circle:""},on:{input:function(e){return t.next(t.products.path,t.products.current_page,"products")}},model:{value:t.products.current_page,callback:function(e){t.$set(t.products,"current_page",e)},expression:"products.current_page"}})],1):t._e()],2)])]),t._ssrNode(" "),n("myVariants")],2)}),[],!1,(function(t){var e=n(327);e.__inject__&&e.__inject__(t)}),"2a248409","21f1f640");e.default=component.exports;v()(component,{VBtn:m.a,VIcon:f.a,VPagination:_.a,VProgressCircular:x.a,VTooltip:y.a})}};