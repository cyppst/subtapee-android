(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{v7EU:function(e,r,a){"use strict";a.r(r);var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("q-page",{staticClass:"row justify-center",attrs:{padding:""}},[a("div",{staticStyle:{width:"700px","max-width":"90vw"}},[a("q-field",{attrs:{error:e.errors.has("circuit_no"),"error-label":e.errors.first("circuit_no")}},[a("q-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"เลขวงจร",name:"circuit_no","float-label":"หมายเลขวงจร"},model:{value:e.form.circuit_id,callback:function(r){e.$set(e.form,"circuit_id",r)},expression:"form.circuit_id"}})],1),a("q-field",{attrs:{error:e.errors.has("customer_name"),"error-label":e.errors.first("customer_name")}},[a("q-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"ชื่อลูกค้า","float-label":"ชื่อลูกค้า"},model:{value:e.form.customer_name,callback:function(r){e.$set(e.form,"customer_name",r)},expression:"form.customer_name"}})],1),a("q-input",{attrs:{"data-vv-as":"เก็บค่าติดตั้ง","float-label":"เก็บค่าติดตั้ง"},model:{value:e.form.service_fees,callback:function(r){e.$set(e.form,"service_fees",r)},expression:"form.service_fees"}}),a("q-field",{attrs:{error:e.errors.has("service_fees"),"error-label":e.errors.first("service_fees")}},[a("q-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"ระยะเริ่ม",name:"service_fees",type:"number","float-label":"ระยะสาย (เริ่ม)"},model:{value:e.form.dropwire_begin,callback:function(r){e.$set(e.form,"dropwire_begin",r)},expression:"form.dropwire_begin"}})],1),a("q-field",{attrs:{error:e.errors.has("dropwire_end"),"error-label":e.errors.first("dropwire_end")}},[a("q-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-as":"ระยะสิ้นสุด",name:"dropwire_end",type:"number","float-label":"ระยะสาย (สิ้นสุด)"},model:{value:e.form.dropwire_end,callback:function(r){e.$set(e.form,"dropwire_end",r)},expression:"form.dropwire_end"}})],1),a("q-input",{attrs:{type:"textarea","float-label":"หมายเหตุ"},model:{value:e.form.remarks,callback:function(r){e.$set(e.form,"remarks",r)},expression:"form.remarks"}})],1),a("q-page-sticky",{attrs:{position:"bottom-right",offset:[18,18]}},[a("q-btn",{attrs:{round:"",size:"lg",color:"primary",icon:"add"},on:{click:e.formSubmit}})],1)],1)},i=[];t._withStripped=!0;var s=a("MVZn"),o=a.n(s),n=a("L2JU"),l={data:function(){return{form:{circuit_id:"",customer_name:"",service_charge:"",remarks:""},countEquip:0}},methods:o()({},Object(n["b"])("task",["create_task","updateCurrentTask"]),{formSubmit:function(){var e=this;this.$validator.validateAll().then(function(r){r&&e.create_task(e.form).then(function(r){e.isLoading=!1,e.$q.dialog({title:"ข้อมูลอุปกรณ์",message:"มีการติดตั้งอุปกรณ์หรือไม่?",ok:"มี",cancel:"ไม่มี"}).then(function(r){e.updateCurrentTask(r),e.$router.push("/task/create_serial")}).catch(function(){e.isLoading=!1})}).catch(function(r){e.isLoading=!1,e.$q.notify({type:"negative",message:"กรุณาตรวจสอบข้อมูล"})})})}})},c=l,d=a("KHd+"),u=Object(d["a"])(c,t,i,!1,null,null,null);r["default"]=u.exports}}]);