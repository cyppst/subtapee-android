(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"56Zu":function(t,e,s){var a=s("ZVxo");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=s("SZ7m").default;r("4dc85aa7",a,!1,{sourceMap:!1})},ZVxo:function(t,e,s){e=t.exports=s("I1BE")(!1),e.push([t.i,"",""])},aIej:function(t,e,s){"use strict";var a=s("56Zu"),r=s.n(a);r.a},g8kD:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fixed fixed-center bg-grey-1 text-white"},[s("form",{on:{submit:function(e){e.preventDefault(),t.submit()}}},[s("q-card",{staticClass:"flex-center text-center",staticStyle:{width:"400px",padding:"50px"},attrs:{square:""}},[s("img",{staticStyle:{"max-width":"300px","padding-top":"30px","padding-bottom":"50px"},attrs:{src:"/statics/quasar-logo.png"}}),s("q-card-separator"),s("div",{staticClass:"text-left"},[s("q-input",{attrs:{id:"username",type:"text","float-label":"User Name",required:"",autofocus:""},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username","string"===typeof e?e.trim():e)},expression:"form.username"}}),s("q-input",{attrs:{id:"password",type:"password","float-label":"Password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),s("br")],1),s("q-card-actions",[s("q-btn",{staticClass:"fit",attrs:{type:"submit",color:"primary"}},[t._v("Login")])],1)],1)],1)])},r=[];a._withStripped=!0;var i={data:function(){return{form:{username:"admin",password:"secret"}}},methods:{submit:function(){var t=this;this.$store.dispatch("auth/login",this.form).then(function(e){t.$router.push({name:"index"})})}}},o=i,n=(s("aIej"),s("KHd+")),u=Object(n["a"])(o,a,r,!1,null,null,null);e["default"]=u.exports}}]);