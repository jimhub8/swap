(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1007:function(t,e,r){"use strict";r.r(e);r(12),r(7),r(5),r(4),r(8);var o=r(2),n=r(39);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={name:"signup",data:function(){return{form:{name:"",email:"",password:""},error:null}},methods:{signup:function(){var t=this;this.$store.dispatch("overlayAction",!0);var e={model:"auth/signup",data:this.form};this.$store.dispatch("postItems",e).then((function(e){console.log(e),t.$store.dispatch("overlayAction",!1),t.$router.push("/login")})).catch((function(e){t.$store.dispatch("overlayAction",!1),console.log(e.response.data)}))}},beforeRouteLeave:function(t,e,r){r(),window.scrollTo(0,0)},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)(["errors"]))},d=(r(954),r(26)),m=r(35),f=r.n(m),v=r(306),_=r(284),x=r(64),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticStyle:{"margin-top":"200px"},attrs:{id:"register"}},[r("v-card-title",{staticClass:"text-center",staticStyle:{"margin-left":"25%"},attrs:{"primary-title":""}},[t._v("Register Page")]),t._v(" "),r("v-card-text",{staticStyle:{width:"50%",margin:"auto"}},[r("div",[r("label",{attrs:{for:""}},[t._v("Name")]),t._v(" "),r("el-input",{attrs:{placeholder:"jane@gmail.com"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),t.errors.name?r("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.name[0]))]):t._e()],1),t._v(" "),r("div",[r("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),r("el-input",{attrs:{placeholder:"jane@gmail.com"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),t.errors.email?r("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.email[0]))]):t._e()],1),t._v(" "),r("div",[r("label",{attrs:{for:""}},[t._v("Password")]),t._v(" "),r("el-input",{attrs:{placeholder:"...",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),t.errors.password?r("small",{staticClass:"text-danger"},[t._v(t._s(t.errors.password[0]))]):t._e()],1),t._v(" "),r("div",[r("label",{attrs:{for:""}},[t._v("Confirm Password")]),t._v(" "),r("el-input",{attrs:{placeholder:"...",type:"password"},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1)]),t._v(" "),r("v-card-actions",[r("VBtn",{staticClass:"text-center",attrs:{color:"primary",text:""},on:{click:t.signup}},[t._v("Register")]),t._v(" "),r("nuxt-link",{attrs:{to:"/login"}},[r("VBtn",{staticClass:"text-center",attrs:{color:"primary",text:""},on:{click:t.login}},[t._v("Login")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:v.a,VCard:_.a,VCardActions:x.a,VCardText:x.b,VCardTitle:x.c})},875:function(t,e,r){var content=r(955);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("b055c78e",content,!0,{sourceMap:!1})},954:function(t,e,r){"use strict";var o=r(875);r.n(o).a},955:function(t,e,r){(e=r(9)(!1)).push([t.i,"#register .v-card:not(.v-sheet--tile):not(.v-card--shaped){box-shadow:7px 7px 8px -4px #d2e1f6,0 12px 17px 2px #d2e1f6,0 5px 22px 4px #d2e1f6!important;width:70%;margin:auto;padding:40px 0}label{color:#999}.el-input__inner{border:1px solid #dcdfe6!important}.v-card__actions>.v-btn.v-btn{margin:auto}",""]),t.exports=e}}]);