exports.ids=[11],exports.modules={273:function(t,e,r){var content=r(316);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=r(4).default;t.exports.__inject__=function(t){o("a80e5a2e",content,!0,t)}},315:function(t,e,r){"use strict";r.r(e);var o=r(273),n=r.n(o);for(var l in o)"default"!==l&&function(t){r.d(e,t,(function(){return o[t]}))}(l);e.default=n.a},316:function(t,e,r){(e=r(3)(!1)).push([t.i,"#login .v-card:not(.v-sheet--tile):not(.v-card--shaped){box-shadow:7px 7px 8px -4px #d2e1f6,0 12px 17px 2px #d2e1f6,0 5px 22px 4px #d2e1f6!important;width:70%;margin:auto;padding:40px 0}label{color:#999}.el-input__inner{border:1px solid #dcdfe6!important}.v-card__actions>.v-btn.v-btn{margin:auto}",""]),t.exports=e},361:function(t,e,r){"use strict";r.r(e);r(13);var o={name:"Login",data:()=>({form:{email:"",password:""}}),methods:{async login(){try{let t=await this.$auth.loginWith("local",{data:this.form});this.$router.push({path:"/"}),console.log(t)}catch(t){console.log(t)}}},computed:{loged_in(){this.$store.state.auth.loggedIn}},beforeRouteLeave(t,e,r){r(),window.scrollTo(0,0)}},n=r(9),l=r(10),c=r.n(l),d=r(66),f=r(54),v=r(19);var component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticStyle:{"margin-top":"200px"},attrs:{id:"login"}},[r("v-card-title",{staticClass:"text-center",staticStyle:{"margin-left":"25%"},attrs:{"primary-title":""}},[t._v("Login Page")]),t._v(" "),r("v-card-text",{staticStyle:{width:"50%",margin:"auto"}},[r("div",[r("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),r("el-input",{attrs:{placeholder:"jane@gmail.com"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("div",[r("label",{attrs:{for:""}},[t._v("Password")]),t._v(" "),r("el-input",{attrs:{placeholder:"...",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)]),t._v(" "),r("v-card-actions",[r("VBtn",{staticClass:"text-center",attrs:{color:"primary",text:""},on:{click:t.login}},[t._v("Login")]),t._v(" "),r("nuxt-link",{attrs:{to:"/register"}},[r("VBtn",{staticClass:"text-center",attrs:{color:"primary",text:""}},[t._v("Register")])],1)],1)],1)}),[],!1,(function(t){var e=r(315);e.__inject__&&e.__inject__(t)}),null,"6a8305c5");e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c})}};