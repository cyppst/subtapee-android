(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{GirD:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHr LpR lFf"}},[a("q-layout-header",[a("q-toolbar",[a("q-icon",{attrs:{size:"2rem",name:"fas fa-broadcast-tower"}}),a("q-toolbar-title",[t._v("\n        "+t._s(t.$route.meta.title)+"\n        "),a("span",{attrs:{slot:"subtitle"},slot:"subtitle"},[t._v(t._s(this.fullName))])]),a("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"exit_to_app"},on:{click:t.logout}})],1)],1),a("q-layout-drawer",{attrs:{side:"left"}},[a("q-list",{attrs:{"no-border":"",link:"","inset-separator":""}},[a("q-list-header",[t._v("Essential Links")]),a("q-item",{attrs:{to:"/docs"}},[a("q-item-side",{attrs:{icon:"school"}}),a("q-item-main",{attrs:{label:"Docs",sublabel:"quasar-framework.org"}})],1),a("q-item",{attrs:{to:"/forum"}},[a("q-item-side",{attrs:{icon:"record_voice_over"}}),a("q-item-main",{attrs:{label:"Forum",sublabel:"forum.quasar-framework.org"}})],1),a("q-item",{attrs:{to:"/chat"}},[a("q-item-side",{attrs:{icon:"chat"}}),a("q-item-main",{attrs:{label:"Discord Chat Channel",sublabel:"https://discord.gg/5TDhbDg"}})],1),a("q-item",{attrs:{to:"/twitter"}},[a("q-item-side",{attrs:{icon:"rss feed"}}),a("q-item-main",{attrs:{label:"Twitter",sublabel:"@quasarframework"}})],1)],1)],1),a("q-layout-drawer",{attrs:{side:"right"}},[t._v("\n    Right Side of Layout\n  ")]),a("q-page-container",[a("router-view")],1),a("q-layout-footer",[a("q-tabs",[a("q-route-tab",{attrs:{slot:"title",icon:"home",to:"/",replace:"",label:"หน้าหลัก"},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"done_all",to:"/task",replace:"",label:"งานติดตั้ง"},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"done_all",to:"/revoke",replace:"",label:"งานถอน"},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"input",to:"/equipment",replace:"",label:"อุปกรณ์"},slot:"title"}),a("q-route-tab",{attrs:{slot:"title",icon:"input",to:"/material",replace:"",label:"วัสดุ"},slot:"title"})],1)],1)],1)},r=[];o._withStripped=!0;var i=a("MVZn"),l=a.n(i),s=a("ZFgu"),n=a("L2JU"),u={name:"Layout",data:function(){return{title:"aa",leftDrawer:!0}},components:{QLayout:s["h"],QToolbar:s["k"],QBtn:s["b"],QIcon:s["c"],QToolbarTitle:s["l"],QList:s["i"],QItemSide:s["f"],QItemMain:s["e"],QItem:s["d"],QItemTile:s["g"],QListHeader:s["j"]},methods:{logout:function(){var t=this;this.$q.dialog({title:"ยืนยัน",message:"ออกจากระบบ.",ok:"Agree",cancel:"Disagree"}).then(function(){t.$store.dispatch("auth/logout",t.form).then(function(e){t.$router.push("/login")})}).catch(function(){t.$q.notify("Disagreed...")})}},computed:l()({},Object(n["e"])("auth",["fullName","userName"]),{currentPath:function(){return this.$route.path}})},c=u,m=(a("Wk2R"),a("KHd+")),b=Object(m["a"])(c,o,r,!1,null,null,null);e["default"]=b.exports},OWYs:function(t,e,a){var o=a("ZRJ/");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("SZ7m").default;r("6ab088cd",o,!1,{sourceMap:!1})},Wk2R:function(t,e,a){"use strict";var o=a("OWYs"),r=a.n(o);r.a},"ZRJ/":function(t,e,a){e=t.exports=a("I1BE")(!1),e.push([t.i,"",""])}}]);