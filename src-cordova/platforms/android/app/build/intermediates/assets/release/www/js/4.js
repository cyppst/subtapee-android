(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"sn/X":function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("q-modal",{model:{value:n.opened,callback:function(e){n.opened=e},expression:"opened"}},[t("h4",[n._v("Basic Modal")]),t("q-btn",{attrs:{color:"primary",label:"Close"},on:{click:function(e){n.opened=!1}}})],1)},a=[];o._withStripped=!0;var c={data:function(){return{data:[],opened:!1}},created:function(){console.log(this.$route.params.id)},mounted:function(){var n=this;this.$axiosInstance.get("/announce",{id:this.$route.params.id}).then(function(e){console.log(e),e.data=n.data}).catch(function(n){throw n})}},i=c,l=t("KHd+"),r=Object(l["a"])(i,o,a,!1,null,null,null);e["default"]=r.exports}}]);