(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1004:function(t,n,e){"use strict";e.r(n);var r=e(26),o=e(35),c=e.n(o),l=e(851),f=e(852),component=Object(r.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("v-layout",[n("v-flex",{staticClass:"text-center"},[n("img",{staticClass:"mb-5",attrs:{src:"/v.png",alt:"Vuetify.js"}}),this._v(" "),n("blockquote",{staticClass:"blockquote"},[this._v("\n      “First, solve the problem. Then, write the code.”\n      "),n("footer",[n("small",[n("em",[this._v("—John Johnson")])])])])])],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VFlex:l.a,VLayout:f.a})},839:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));e(97),e(5),e(4),e(8);var r=e(1);function o(t){return r.default.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,e){var r=e.props,data=e.data,o=e.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var n=c[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),n(r.tag,data,o)}})}},851:function(t,n,e){"use strict";e(439);var r=e(839);n.a=Object(r.a)("flex")},852:function(t,n,e){"use strict";e(439);var r=e(839);n.a=Object(r.a)("layout")}}]);