(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"19fX":function(t,e,n){var i=n("IyQt");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("SZ7m").default;a("16f7b0b8",i,!1,{sourceMap:!1})},"2ga1":function(t,e,n){"use strict";var i=n("19fX"),a=n.n(i);a.a},"4tq9":function(t,e,n){e=t.exports=n("I1BE")(!1),e.push([t.i,"",""])},GWsV:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{appear:"","enter-active-class":"fadeIn","leave-active-class":"fadeOut"}},[n("q-inner-loading",{attrs:{visible:t.loading}},[n("q-spinner-gears",{attrs:{size:"50px",color:"teal-4"}})],1)],1)},a=[];i._withStripped=!0;n("EHBt"),n("Jc2o");var s={props:["loading"],data:function(){return{}}},r=s,o=(n("2ga1"),n("KHd+")),l=Object(o["a"])(r,i,a,!1,null,null,null);e["a"]=l.exports},IyQt:function(t,e,n){e=t.exports=n("I1BE")(!1),e.push([t.i,"",""])},QTpC:function(t,e,n){var i=n("4tq9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("SZ7m").default;a("099dd1c9",i,!1,{sourceMap:!1})},TIaZ:function(t,e,n){"use strict";var i=n("QTpC"),a=n.n(i);a.a},VsSZ:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-pull-to-refresh",{attrs:{"pull-message":"ดึงเพื่อโหลด","release-message":"ปล่อย","refresh-message":"กำลังโหลด",handler:t.refresher}},[n("q-page",[this.onhand+this.pending==0?n("div",{staticClass:"row"},[n("div",{staticClass:"absolute-center text-center"},[n("img",{staticClass:"text-center",staticStyle:{"max-width":"60%"},attrs:{src:"assets/tower.svg"}}),n("hr"),n("span",{staticClass:"text-center q-headline-1 text-weight-semibold q-pt-xl q-mt-xl"},[n("strong",[t._v("ไม่พบ")]),t._v("\n                  รายการ")])])]):t._e(),this.pending.length>0?n("q-list",{attrs:{highlight:""}},[n("q-list-header",[t._v("รอการตรวจสอบ "+t._s(t.pending.length)+" รายการ")]),t._l(t.pending,function(e,i){return n("q-item",{key:e.id,attrs:{link:"",to:{name:"equipment-pending",params:{id:e.id}}}},[n("q-item-side",{attrs:{id:e.id,avatar:"statics/wifi.png"}}),n("q-item-main",{attrs:{id:e.id,label:t.getEquip(e.Equipment.brand,e.Equipment.model)}},[t._t("sublabel",[n("q-chip",{staticClass:"q-mr-xs",attrs:{square:"",dense:"",color:"dark"}},[t._v("\n              Serial No. "+t._s(e.serial.toUpperCase())+"\n            ")])])],2),n("q-item-side",{attrs:{right:""}},[n("q-item-tile",{attrs:{stamp:""}},[n("timeago",{attrs:{datetime:e.updated_at}})],1)],1)],1)}),n("q-item-separator")],2):t._e(),this.onhand.length>0?n("q-list",{attrs:{highlight:""}},[n("q-list-header",[t._v("ที่ท่านกำลังถือ "+t._s(t.onhand.length)+" รายการ")]),t._l(t.onhand,function(e,i){return n("q-item",{key:e.id,attrs:{link:"",to:{name:"equipment-detail",params:{id:e.id}}}},[n("q-item-side",{attrs:{id:e.id,avatar:"statics/wifi.png"}}),n("q-item-main",{attrs:{id:e.id,label:e.Equipment.brand+" "+e.Equipment.brand}},[t._t("sublabel",[n("q-chip",{staticClass:"q-mr-xs",attrs:{square:"",dense:"",color:"dark"}},[t._v("\n              Serial No. "+t._s(e.serial.toUpperCase())+"\n            ")])])],2),n("q-item-side",{attrs:{right:""}},[n("q-item-tile",{attrs:{stamp:""}},[n("timeago",{attrs:{datetime:e.updated_at}})],1)],1)],1)})],2):t._e(),n("transfer-dialog",{attrs:{transferDialog:t.transferDialog}}),n("pending-dialog",{attrs:{pendingDialog:t.pendingDialog}}),n("inner-loading",{attrs:{loading:t.isLoading}})],1)],1)},a=[];i._withStripped=!0;var s=n("MVZn"),r=n.n(s),o=n("L2JU"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.transferDialog.show?n("q-dialog",{attrs:{"stack-buttons":"","prevent-close":""},scopedSlots:t._u([{key:"buttons",fn:function(t){return[n("q-btn",{attrs:{flat:"",label:"ยกเลิก"},on:{click:t.cancel}})]}}]),model:{value:t.transferDialog.show,callback:function(e){t.$set(t.transferDialog,"show",e)},expression:"transferDialog.show"}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v("โยกอุปกรณ์ "),n("q-chip",{staticClass:"shadow-1",attrs:{square:"",small:"",color:"primary"}},[t._v(t._s(this.transferDialog.id))])],1),n("span",{attrs:{slot:"message"},slot:"message"},[t._v("กรุณาระบุผู้ใช้ที่ต้องการโยกอุปกรณ์ไปยัง")]),n("div",{attrs:{slot:"body"},slot:"body"},[n("q-input",{attrs:{color:"amber",placeholder:"Type 'fre'"},model:{value:t.form.targetId,callback:function(e){t.$set(t.form,"targetId",e)},expression:"form.targetId"}},[n("q-autocomplete",{attrs:{"min-characters":0,"value-field":"icon"},on:{search:t.search,selected:t.selected}})],1)],1)]):t._e()},c=[];l._withStripped=!0;var d={data:function(){return{form:{targetId:""}}},computed:{},props:{transferDialog:{show:!1,id:null}},mounted:function(){},methods:r()({selected:function(t){this.form.targetId=t.value}},Object(o["b"])("equipment",["fetchTarget"]),{submit:function(){var t=this;this.$store.dispatch("equipment/transfer",{targetId:this.form.targetId,itemId:this.transferDialog.id}).then(function(e){t.$router.push("/"),t.$q.notify({type:"positive",response:e})}).catch(function(e){return t.$q.notify({type:"negative",err:e})})},onCancel:function(){transferDialog.show=!1},search:function(t,e){this.$axiosInstance.post("/transfer",{q:t}).then(function(t){e(parseTargets(t.data))})}})},u=d,p=n("KHd+"),h=Object(p["a"])(u,l,c,!1,null,null,null),g=h.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-action-sheet",{attrs:{title:"ตรวจสอบความถูกต้อง",actions:[{label:"ข้อมูลถูกต้อง",icon:"check_circle",color:"green",is_accept:!0},{label:"ปฏิเสธการรับ",icon:"cancel_presentation",color:"red",is_accept:!1}]},on:{ok:t.onOk,cancel:t.onCancel,show:t.onShow,hide:t.onHide},model:{value:t.pendingDialog.show,callback:function(e){t.$set(t.pendingDialog,"show",e)},expression:"pendingDialog.show"}})},m=[];f._withStripped=!0;n("ls82");var q=n("yXPU"),v=n.n(q),_={data:function(){return{name:"aaa"}},computed:{item:function(){return this.$store.getters["equipment/getPendingById"](this.pendingDialog.id)}},props:{pendingDialog:{show:!1,id:null}},mounted:function(){},methods:r()({},Object(o["b"])("equipment",["refresh","acceptance"]),Object(o["d"])(["SET_LOADING"]),{onOk:function(){var t=v()(regeneratorRuntime.mark(function t(e){var n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.SET_LOADING=!0,t.next=3,this.$axiosInstance.post("/equipment/pending/"+this.pendingDialog.id,{is_accept:e.is_accept}).then(function(t){n.SET_LOADING=!1,n.$q.notify({type:"positive",message:t.data.message})}).catch(function(t){n.SET_LOADING=!1,n.$q.notify(t)});case 3:this.refresh();case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),onCancel:function(){console.log("aa")},onShow:function(){console.log("aa")},onHide:function(){console.log("aa")}})},b=_,w=Object(p["a"])(b,f,m,!1,null,null,null),D=w.exports,x=n("GWsV"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    "+t._s(t.props.brand)+"\n")])},y=[];I._withStripped=!0;var E={},k=Object(p["a"])(E,I,y,!1,null,null,null),O=(k.exports,{name:"Equipment",data:function(){return{transferDialog:{show:!1,id:null},pendingDialog:{show:!1,id:null}}},components:{InnerLoading:x["a"],transferDialog:g,pendingDialog:D},mounted:function(){this.equipment||this.refresh()},computed:r()({},Object(o["c"])(["isLoading"]),Object(o["c"])("equipment",["onhand","pending","EquipById"]),{hasPending:function(){return this.pending.length}}),methods:r()({},Object(o["b"])("equipment",["refresh","transfer","response"]),{equipmentTransfer:function(t){this.transferDialog.show=!0,this.transferDialog.id=t},equipmentPending:function(t){this.pendingDialog.show=!0,this.pendingDialog.id=t},getEquip:function(t,e,n){return t+" "+e},refresher:function(t){this.refresh().then(function(){return t()})}})}),S=O,$=(n("TIaZ"),Object(p["a"])(S,i,a,!1,null,null,null));e["default"]=$.exports}}]);