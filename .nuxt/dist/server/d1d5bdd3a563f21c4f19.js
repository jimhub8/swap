exports.ids=[7],exports.modules={264:function(t,e,d){var content=d(323);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=d(4).default;t.exports.__inject__=function(t){r("c6beb89a",content,!0,t)}},322:function(t,e,d){"use strict";d.r(e);var r=d(264),n=d.n(r);for(var o in r)"default"!==o&&function(t){d.d(e,t,(function(){return r[t]}))}(o);e.default=n.a},323:function(t,e,d){(e=d(3)(!1)).push([t.i,"*[data-v-0d159b96]{box-sizing:border-box}.slider[data-v-0d159b96]{width:300px;text-align:center;overflow:hidden}.slides[data-v-0d159b96]{display:flex;overflow-x:auto;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.slides[data-v-0d159b96]::-webkit-scrollbar{width:10px;height:10px}.slides[data-v-0d159b96]::-webkit-scrollbar-thumb{background:#000;border-radius:10px}.slides[data-v-0d159b96]::-webkit-scrollbar-track{background:transparent}.slides>div[data-v-0d159b96]{scroll-snap-align:start;flex-shrink:0;width:300px;height:300px;margin-right:50px;border-radius:10px;background:#eee;transform-origin:center center;transform:scale(1);transition:transform .5s;position:relative;display:flex;justify-content:center;align-items:center;font-size:100px}.author-info[data-v-0d159b96]{background:rgba(0,0,0,.75);color:#fff;padding:.75rem;text-align:center;position:absolute;bottom:0;left:0;width:100%;margin:0}.author-info a[data-v-0d159b96]{color:#fff}img[data-v-0d159b96]{-o-object-fit:cover;object-fit:cover;position:absolute;top:0;left:0;width:100%;height:100%}.slider>a[data-v-0d159b96]{display:inline-flex;width:1.5rem;height:1.5rem;background:#fff;text-decoration:none;align-items:center;justify-content:center;border-radius:50%;margin:0 0 .5rem;position:relative}.slider>a[data-v-0d159b96]:active{top:1px}.slider>a[data-v-0d159b96]:focus{background:#000}@supports ((-ms-scroll-snap-type:) or (scroll-snap-type:)){.slider>a[data-v-0d159b96]{display:none}}body[data-v-0d159b96],html[data-v-0d159b96]{height:100%;overflow:hidden}body[data-v-0d159b96]{display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,#74abe2,#5563de);font-family:Ropa Sans,sans-serif}",""]),t.exports=e},373:function(t,e,d){"use strict";d.r(e);var r=d(201),n=d.n(r),o={name:"Slider",methods:{getProducts(){this.$store.dispatch("getItems",{model:"all_products",update:"updateSlideProductsList"})},product_view(t){console.log(t),$nuxt.$emit("viewProEvent",t)},addToCart(t){console.log(t),t.product_variants.length>0?$nuxt.$emit("selectVariantsEvent",t):(t.order_qty=1,$nuxt.$emit("addCartEvent",t))},addToWish(t){$nuxt.$emit("WishListEvent",t)},buildUrl(t){return"/shop/"+this.$slugify(t.id,t.product_name)}},computed:{chunkedItems(){if(this.product_slide.data)return n.a.chunk(this.product_slide.data,6)},product_slide(){return this.$store.getters.product_slide},length_val(){if(this.chunkedItems)return this.chunkedItems[0].length}},mounted(){this.getProducts()}},l=d(9);var component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"slider"},[this._ssrNode('<a href="#slide-1" data-v-0d159b96>1</a> <a href="#slide-2" data-v-0d159b96>2</a> <a href="#slide-3" data-v-0d159b96>3</a> <a href="#slide-4" data-v-0d159b96>4</a> <a href="#slide-5" data-v-0d159b96>5</a> <div class="slides" data-v-0d159b96><div id="slide-1" data-v-0d159b96>\n            1\n        </div> <div id="slide-2" data-v-0d159b96>\n            2\n        </div> <div id="slide-3" data-v-0d159b96>\n            3\n        </div> <div id="slide-4" data-v-0d159b96>\n            4\n        </div> <div id="slide-5" data-v-0d159b96>\n            5\n        </div></div>')])}),[],!1,(function(t){var e=d(322);e.__inject__&&e.__inject__(t)}),"0d159b96","28d7f3fa");e.default=component.exports}};