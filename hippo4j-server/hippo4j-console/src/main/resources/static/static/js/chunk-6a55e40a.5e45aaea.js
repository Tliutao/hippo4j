(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a55e40a"],{"333d":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[i("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total,"hide-on-single-page":!0},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},n=[];i("a9e3");Math.easeInOutQuad=function(e,t,i,a){return e/=a/2,e<1?i/2*e*e+t:(e--,-i/2*(e*(e-2)-1)+t)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function r(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,i){var a=o(),n=e-a,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var o=Math.easeInOutQuad(u,a,n,t);r(o),u<t?l(e):i&&"function"===typeof i&&i()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,d=(i("fe41"),i("2877")),p=Object(d["a"])(c,a,n,!1,null,"df7d1fa0",null);t["a"]=p.exports},3737:function(e,t,i){"use strict";i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return l})),i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o}));var a=i("b775");function n(e){return Object(a["a"])({url:"/hippo4j/v1/cs/item/query/page",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/hippo4j/v1/cs/item/update",method:"post",data:e})}function r(e){return Object(a["a"])({url:"/hippo4j/v1/cs/item/save",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/hippo4j/v1/cs/item/delete/"+e[0]+"/"+e[1],method:"delete"})}},"4d85":function(e,t,i){"use strict";i.d(t,"e",(function(){return n})),i.d(t,"f",(function(){return l})),i.d(t,"d",(function(){return r})),i.d(t,"g",(function(){return o})),i.d(t,"h",(function(){return s})),i.d(t,"j",(function(){return u})),i.d(t,"k",(function(){return c})),i.d(t,"i",(function(){return d})),i.d(t,"b",(function(){return p})),i.d(t,"c",(function(){return m})),i.d(t,"a",(function(){return f}));var a=i("b775");function n(e){return Object(a["a"])({url:"/hippo4j/v1/cs/thread/pool/query/page",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/hippo4j/v1/cs/thread/pool/list/client/instance/"+e.itemId+"?mark="+e.mark,method:"get",data:e})}function r(e){return Object(a["a"])({url:"/hippo4j/v1/cs/configs?tpId="+e.tpId+"&itemId="+e.itemId+"&namespace="+e.tenantId+"&instanceId="+e.identify,method:"get"})}function o(e){return Object(a["a"])({url:"/hippo4j/v1/cs/thread/pool/run/state/"+e.tpId+"?clientAddress="+e.clientAddress,method:"get"})}function s(e){return Object(a["a"])({url:"/hippo4j/v1/cs/thread/pool/run/thread/state/"+e.tpId+"?clientAddress="+e.clientAddress,method:"get"})}function u(e){return Object(a["a"])({url:"/hippo4j/v1/cs/thread/pool/web/run/state?clientAddress="+e.clientAddress,method:"get"})}function c(e){return Object(a["a"])({url:"/hippo4j/v1/cs/thread/pool/web/update/pool",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/hippo4j/v1/cs/thread/pool/save_or_update",method:"post",data:e})}function p(e){return Object(a["a"])({url:"/hippo4j/v1/cs/thread/pool/save_or_update",method:"post",data:e})}function m(e){return Object(a["a"])({url:"/hippo4j/v1/cs/thread/pool/delete",method:"delete",data:e})}function f(e){return Object(a["a"])({url:"/hippo4j/v1/cs/thread/pool/alarm/enable/"+e.id+"/"+e.isAlarm,method:"post"})}},6724:function(e,t,i){"use strict";i("8d41");var a="@@wavesContext";function n(e,t){function i(i){var a=Object.assign({},t.value),n=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),l=n.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var r=l.getBoundingClientRect(),o=l.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(r.width,r.height)+"px",l.appendChild(o)),n.type){case"center":o.style.top=r.height/2-o.offsetHeight/2+"px",o.style.left=r.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(i.pageY-r.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(i.pageX-r.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=n.color,o.className="waves-ripple z-active",!1}}return e[a]?e[a].removeHandle=i:e[a]={removeHandle:i},i}var l={bind:function(e,t){e.addEventListener("click",n(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[a].removeHandle,!1),e.addEventListener("click",n(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[a].removeHandle,!1),e[a]=null,delete e[a]}},r=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(r)),l.install=r;t["a"]=l},"8d41":function(e,t,i){},b36cf:function(e,t,i){},cd8e:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"220px"},attrs:{placeholder:e.$t("threadPool.tenant"),filterable:""},on:{change:function(t){return e.tenantSelectList()}},model:{value:e.listQuery.tenantId,callback:function(t){e.$set(e.listQuery,"tenantId",t)},expression:"listQuery.tenantId"}},e._l(e.tenantOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),e._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"220px"},attrs:{placeholder:e.$t("threadPool.project"),filterable:""},on:{change:function(t){return e.itemSelectList()}},model:{value:e.listQuery.itemId,callback:function(t){e.$set(e.listQuery,"itemId",t)},expression:"listQuery.itemId"}},e._l(e.itemOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),e._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"220px"},attrs:{placeholder:e.$t("common.threadPool"),filterable:""},model:{value:e.listQuery.tpId,callback:function(t){e.$set(e.listQuery,"tpId",t)},expression:"listQuery.tpId"}},e._l(e.threadPoolOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),e._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n      "+e._s(e.$t("common.search"))+"\n    ")]),e._v(" "),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit",disabled:e.isEditDisabled},on:{click:e.handleCreate}},[e._v("\n      "+e._s(e.$t("common.addition"))+"\n    ")])],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,border:"","element-loading-text":"Loading",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{fixed:"",label:e.$t("common.serialNumber"),width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.$index+1))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"租户",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.tenantId))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"项目",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.itemId))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"线程池",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.tpId))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"核心线程",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-link",{attrs:{type:"success",underline:!1}},[e._v(e._s(t.row.coreSize))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"最大线程",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-link",{attrs:{type:"danger",underline:!1}},[e._v(e._s(t.row.maxSize))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"队列类型",width:"260"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("queueFilter")(t.row.queueType)))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"队列容量",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.capacity))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"拒绝策略",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("rejectedTypeFilter")(t.row.rejectedType)))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"执行超时",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("defaultExecuteTimeoutValue")(t.row.executeTimeOut)))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"是否报警",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-switch",{attrs:{"active-color":"#00A854","active-value":1,"inactive-color":"#F04134","inactive-value":0},on:{change:function(i){return e.changeAlarm(t.row)}},model:{value:t.row.isAlarm,callback:function(i){e.$set(t.row,"isAlarm",i)},expression:"scope.row.isAlarm"}})]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"创建时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.gmtCreate))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"修改时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.gmtModified))]}}])}),e._v(" "),i("el-table-column",{attrs:{label:e.$t("common.operation"),fixed:"right",width:"90",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleUpdate(a)}}},[e._v("\n          "+e._s(e.$t("common.edit"))+"\n        ")]),e._v(" "),i("el-button",{attrs:{size:"small",disabled:e.isEditDisabled,type:"text"},on:{click:function(t){return e.handleDelete(a)}}},[e._v("\n          "+e._s(e.$t("common.delete"))+"\n        ")])]}}])})],1),e._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"dataForm",staticStyle:{width:"500px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-width":"80px"}},[e.isEdit?i("el-form-item",{attrs:{label:"租户",prop:"tenantId"}},[i("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"请选择租户",disabled:"create"!==e.dialogStatus},on:{change:function(t){return e.tenantTempSelectList()}},model:{value:e.temp.tenantId,callback:function(t){e.$set(e.temp,"tenantId",t)},expression:"temp.tenantId"}},e._l(e.tenantOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1):e._e(),e._v(" "),e.isEdit?i("el-form-item",{attrs:{label:"项目",prop:"itemId"}},[i("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"请选择项目",disabled:"create"!==e.dialogStatus},model:{value:e.temp.itemId,callback:function(t){e.$set(e.temp,"itemId",t)},expression:"temp.itemId"}},e._l(e.itemTempOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1):e._e(),e._v(" "),e.isEdit?i("el-form-item",{attrs:{label:"线程池",prop:"tpId"}},[i("el-input",{attrs:{size:"medium",placeholder:"请输入线程池 ",disabled:"create"!==e.dialogStatus},model:{value:e.temp.tpId,callback:function(t){e.$set(e.temp,"tpId",t)},expression:"temp.tpId"}})],1):e._e(),e._v(" "),i("el-form-item",{attrs:{label:"核心线程",prop:"coreSize"}},[i("el-input-number",{attrs:{placeholder:"核心线程","controls-position":"right",min:1,max:9999},model:{value:e.temp.coreSize,callback:function(t){e.$set(e.temp,"coreSize",t)},expression:"temp.coreSize"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"最大线程",prop:"maxSize"}},[i("el-input-number",{attrs:{placeholder:"最大线程","controls-position":"right",min:1,max:9999},model:{value:e.temp.maxSize,callback:function(t){e.$set(e.temp,"maxSize",t)},expression:"temp.maxSize"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"队列类型",prop:"queueType"}},[i("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"队列类型"},on:{change:e.selectQueueType},model:{value:e.temp.queueType,callback:function(t){e.$set(e.temp,"queueType",t)},expression:"temp.queueType"}},e._l(e.queueTypeOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"队列容量",prop:"capacity"}},[i("el-input-number",{attrs:{placeholder:"队列容量","controls-position":"right",min:0,max:2147483647,disabled:4===e.temp.queueType||5===e.temp.queueType},model:{value:e.temp.capacity,callback:function(t){e.$set(e.temp,"capacity",t)},expression:"temp.capacity"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"执行超时",prop:"executeTimeOut"}},[i("el-input-number",{attrs:{placeholder:"执行超时（毫秒）","controls-position":"right"},model:{value:e.temp.executeTimeOut,callback:function(t){e.$set(e.temp,"executeTimeOut",t)},expression:"temp.executeTimeOut"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"空闲回收",prop:"keepAliveTime"}},[i("el-input-number",{attrs:{placeholder:"空闲回收（秒）","controls-position":"right",min:1,max:999999},model:{value:e.temp.keepAliveTime,callback:function(t){e.$set(e.temp,"keepAliveTime",t)},expression:"temp.keepAliveTime"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"是否超时",prop:"allowCoreThreadTimeOut"}},[[i("div",[i("el-radio-group",{model:{value:e.temp.allowCoreThreadTimeOut,callback:function(t){e.$set(e.temp,"allowCoreThreadTimeOut",t)},expression:"temp.allowCoreThreadTimeOut"}},[i("el-radio-button",{attrs:{label:1}},[e._v("超时")]),e._v(" "),i("el-radio-button",{attrs:{label:0}},[e._v("不超时")])],1)],1)]],2),e._v(" "),i("el-form-item",{attrs:{label:"是否报警",prop:"isAlarm"}},[[i("div",[i("el-radio-group",{model:{value:e.temp.isAlarm,callback:function(t){e.$set(e.temp,"isAlarm",t)},expression:"temp.isAlarm"}},[i("el-radio-button",{attrs:{label:"1"}},[e._v("报警")]),e._v(" "),i("el-radio-button",{attrs:{label:"0"}},[e._v("不报警")])],1)],1)]],2),e._v(" "),i("el-form-item",{attrs:{label:"活跃报警",prop:"livenessAlarm"}},[[i("div",[i("el-radio-group",{model:{value:e.temp.livenessAlarm,callback:function(t){e.$set(e.temp,"livenessAlarm",t)},expression:"temp.livenessAlarm"}},[i("el-radio-button",{attrs:{label:"0"}},[e._v("不报警")]),e._v(" "),i("el-radio-button",{attrs:{label:"60"}},[e._v("60%")]),e._v(" "),i("el-radio-button",{attrs:{label:"80"}},[e._v("80%")]),e._v(" "),i("el-radio-button",{attrs:{label:"90"}},[e._v("90%")])],1)],1)]],2),e._v(" "),i("el-form-item",{attrs:{label:"容量报警",prop:"capacityAlarm"}},[[i("div",[i("el-radio-group",{model:{value:e.temp.capacityAlarm,callback:function(t){e.$set(e.temp,"capacityAlarm",t)},expression:"temp.capacityAlarm"}},[i("el-radio-button",{attrs:{label:"0"}},[e._v("不报警")]),e._v(" "),i("el-radio-button",{attrs:{label:"60"}},[e._v("60%")]),e._v(" "),i("el-radio-button",{attrs:{label:"80"}},[e._v("80%")]),e._v(" "),i("el-radio-button",{attrs:{label:"90"}},[e._v("90%")])],1)],1)]],2),e._v(" "),i("el-form-item",{attrs:{label:"拒绝策略",prop:"rejectedType"}},[i("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"拒绝策略"},on:{change:e.selectRejectedType},model:{value:e.temp.rejectedType,callback:function(t){e.$set(e.temp,"rejectedType",t)},expression:"temp.rejectedType"}},e._l(e.rejectedOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1),e._v(" "),e.isRejectShow?i("el-form-item",{attrs:{label:"自定义拒绝策略",prop:"customRejectedType"}},[i("el-input",{attrs:{placeholder:"请输入自定义 SPI 拒绝策略标识"},on:{input:function(t){return e.onInput()}},model:{value:e.temp.customRejectedType,callback:function(t){e.$set(e.temp,"customRejectedType",t)},expression:"temp.customRejectedType"}})],1):e._e()],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" "+e._s(e.$t("common.cancel"))+" ")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        "+e._s(e.$t("common.confirm"))+"\n      ")])],1)],1),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogPluginVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPluginVisible=t}}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pluginData,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),i("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1)],1)},n=[],l=(i("14d9"),i("3737")),r=i("dd71"),o=i("4d85"),s=i("6724"),u=i("333d"),c={name:"JobProject",components:{Pagination:u["a"]},directives:{waves:s["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]},defaultExecuteTimeoutValue:function(e){return void 0==e||null==e?0:e},queueFilter:function(e){return"1"==e?"ArrayBlockingQueue":"2"==e?"LinkedBlockingQueue":"3"==e?"LinkedBlockingDeque":"4"==e?"SynchronousQueue":"5"==e?"LinkedTransferQueue":"6"==e?"PriorityBlockingQueue":"9"==e?"ResizableLinkedBlockingQueue":void 0},rejectedTypeFilter:function(e){return"1"==e?"CallerRunsPolicy":"2"==e?"AbortPolicy":"3"==e?"DiscardPolicy":"4"==e?"DiscardOldestPolicy":"5"==e?"RunsOldestTaskPolicy":"6"==e?"SyncPutQueuePolicy":"CustomRejectedPolicy_"+e}},data:function(){return{isRejectShow:!1,isEdit:!1,list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,tpId:"",itemId:"",desc:!0},pluginTypeOptions:["reader","writer"],dialogPluginVisible:!1,pluginData:[],isEditDisabled:!1,dialogFormVisible:!1,tenantOptions:[],threadPoolOptions:[],itemOptions:[],itemTempOptions:[],queueTypeOptions:[{key:1,display_name:"ArrayBlockingQueue"},{key:2,display_name:"LinkedBlockingQueue"},{key:3,display_name:"LinkedBlockingDeque"},{key:4,display_name:"SynchronousQueue"},{key:5,display_name:"LinkedTransferQueue"},{key:6,display_name:"PriorityBlockingQueue"},{key:9,display_name:"ResizableLinkedBlockingQueue (动态修改队列大小)"}],rejectedOptions:[{key:1,display_name:"CallerRunsPolicy"},{key:2,display_name:"AbortPolicy"},{key:3,display_name:"DiscardPolicy"},{key:4,display_name:"DiscardOldestPolicy"},{key:5,display_name:"RunsOldestTaskPolicy"},{key:6,display_name:"SyncPutQueuePolicy"},{key:99,display_name:"CustomRejectedPolicy（自定义 SPI 策略）"}],alarmTypes:[{key:1,display_name:"报警"},{key:0,display_name:"不报警"}],allowCoreThreadTimeOutTypes:[{key:1,display_name:"超时"},{key:0,display_name:"不超时"}],size:500,dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{tenantId:[{required:!0,message:"this is required",trigger:"blur"}],itemId:[{required:!0,message:"this is required",trigger:"blur"}],tpId:[{required:!0,message:"this is required",trigger:"blur"}],coreSize:[{required:!0,message:"this is required",trigger:"blur"}],maxSize:[{required:!0,message:"this is required",trigger:"blur"}],queueType:[{required:!0,message:"this is required",trigger:"blur"}],allowCoreThreadTimeOut:[{required:!0,message:"this is required",trigger:"blur"}],keepAliveTime:[{required:!0,message:"this is required",trigger:"blur"}],isAlarm:[{required:!0,message:"this is required",trigger:"blur"}],capacityAlarm:[{required:!0,message:"this is required",trigger:"blur"}],livenessAlarm:[{required:!0,message:"this is required",trigger:"blur"}],rejectedType:[{required:!0,message:"this is required",trigger:"blur"}],capacity:[{required:!0,message:"this is required",trigger:"blur"}],executeTimeOut:[{required:!0,message:"this is required",trigger:"blur"}]},temp:{id:void 0,tenantId:"",itemId:"",rejectedType:null,customRejectedType:null,coreSize:4,maxSize:8},visible:!0}},created:function(){this.fetchData(),this.initSelect()},mounted:function(){this.isEditDisabled="ROLE_ADMIN"!==localStorage.getItem("USER_ROLE")&&"ROLE_MANAGE"!==localStorage.getItem("USER_ROLE")},methods:{onInput:function(){this.$forceUpdate()},fetchData:function(){var e=this;this.listLoading=!0,o["e"](this.listQuery).then((function(t){var i=t.records,a=t.total;e.total=a,e.list=i,e.listLoading=!1}))},changeAlarm:function(e){var t=this;o["a"](e).then((function(){t.fetchData(),t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))},initSelect:function(){var e=this;r["c"]({size:this.size}).then((function(t){for(var i=t.records,a=0;a<i.length;a++)e.tenantOptions.push({key:i[a].tenantId,display_name:i[a].tenantId+" "+i[a].tenantName})}))},resetTemp:function(){this.isRejectShow=!1,this.isEdit=!1,this.temp={id:void 0,tenantId:"",itemId:"",rejectedType:null,customRejectedType:null,isAlarm:"",allowCoreThreadTimeOut:"",livenessAlarm:"",capacityAlarm:""}},handleCreate:function(){var e=this;this.resetTemp(),this.isEdit=!0,this.temp.coreSize=4,this.temp.maxSize=8,this.temp.queueType=9,this.temp.keepAliveTime=9999,this.temp.capacity=4096,this.temp.executeTimeOut=0,this.temp.isAlarm="1",this.temp.allowCoreThreadTimeOut="1",this.temp.livenessAlarm="80",this.temp.capacityAlarm="80",this.temp.rejectedType=2,this.dialogStatus="create",this.dialogFormVisible=!0,this.isRejectShow=!1,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){parseInt(e.temp.maxSize)<parseInt(e.temp.coreSize)?e.$message({message:"最大线程必须大于等于核心线程",type:"warning"}):t&&(e.isRejectShow&&(null==e.temp.customRejectedType?e.temp.rejectedType=2:e.temp.rejectedType=e.temp.customRejectedType),o["b"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})))}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e);var i=this.temp.rejectedType;1!=i&&2!=i&&3!=i&&4!=i&&5!=i&&6!=i?(this.isRejectShow=!0,this.temp.customRejectedType=this.temp.rejectedType,this.temp.rejectedType=99):this.isRejectShow=!1,this.dialogStatus="update",this.dialogFormVisible=!0,this.isEdit=!1,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){if(parseInt(e.temp.maxSize)<parseInt(e.temp.coreSize))return void e.$message({message:"最大线程必须大于等于核心线程",type:"warning"});var i=e.temp.rejectedType;1!=i&&2!=i&&3!=i&&4!=i&&5!=i&&6!=i&&null!=e.temp.customRejectedType&&(e.temp.rejectedType=e.temp.customRejectedType);var a=Object.assign({},e.temp);o["i"](a).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},openDelConfirm:function(e){return this.$confirm("此操作将删除 ".concat(e,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})},handleDelete:function(e){var t=this,i="ROLE_ADMIN"===localStorage.getItem("USER_ROLE");i?this.openDelConfirm(e.tpId).then((function(){o["c"](e).then((function(e){t.fetchData(),t.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))})):this.$message.error("请联系管理员删除")},selectQueueType:function(e){4===e?this.temp.capacity=0:5===e&&(this.temp.capacity=2147483647)},tenantSelectList:function(){var e=this;this.listQuery.itemId=null,this.listQuery.tpId=null,this.temp.itemId=null,this.itemOptions=[],this.itemTempOptions=[],this.threadPoolOptions=[];var t={tenantId:this.listQuery.tenantId,size:this.size};l["c"](t).then((function(t){for(var i=t.records,a=void 0===i?[]:i,n=0;n<a.length;n++)e.itemOptions.push({key:a[n].itemId,display_name:a[n].itemId+" "+a[n].itemName})}))},tenantTempSelectList:function(){var e=this;this.itemTempOptions=[],this.temp.itemId&&(this.temp.itemId=null);var t={tenantId:this.temp.tenantId,size:this.size};l["c"](t).then((function(t){for(var i=t.records,a=void 0===i?[]:i,n=0;n<a.length;n++)e.itemTempOptions.push({key:a[n].itemId,display_name:a[n].itemId+" "+a[n].itemName})}))},itemSelectList:function(){var e=this;this.listQuery.tpId=null,this.threadPoolOptions=[];var t={itemId:this.listQuery.itemId,size:this.size};o["e"](t).then((function(t){for(var i=t.records,a=void 0===i?[]:i,n=0;n<a.length;n++)e.threadPoolOptions.push({key:a[n].tpId,display_name:a[n].tpId})}))},selectRejectedType:function(e){this.isRejectShow=99===e}}},d=c,p=i("2877"),m=Object(p["a"])(d,a,n,!1,null,null,null);t["default"]=m.exports},dd71:function(e,t,i){"use strict";i.d(t,"c",(function(){return n})),i.d(t,"d",(function(){return l})),i.d(t,"a",(function(){return r})),i.d(t,"b",(function(){return o}));var a=i("b775");function n(e){return Object(a["a"])({url:"/hippo4j/v1/cs/tenant/query/page",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/hippo4j/v1/cs/tenant/update",method:"post",data:e})}function r(e){return Object(a["a"])({url:"/hippo4j/v1/cs/tenant/save",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/hippo4j/v1/cs/tenant/delete/"+e,method:"delete"})}},fe41:function(e,t,i){"use strict";i("b36cf")}}]);