(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7177b30"],{"05ff":function(e,t,r){},2138:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1200,footer:null},on:{cancel:e.onClose}},[r("template",{slot:"title"},[e._v("\n    生成账单\n    ")]),r("div",[r("a-form",{attrs:{form:e.form,layout:"horizontal"}},[r("div",{class:e.advanced?null:"fold"},[r("a-row",{attrs:{gutter:10}},[r("a-col",{attrs:{md:6}},[r("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[r("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.Keyword,callback:function(t){e.$set(e.formSearch,"Keyword",t)},expression:"formSearch.Keyword"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-item",[r("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),r("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ComServiceGuid"},scopedSlots:e._u([{key:"ServiceType",fn:function(t,o){return r("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.ServiceType[o.ServiceType])+"\n      ")])}},{key:"GJJServiceType",fn:function(t,o){return r("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.ServiceType[o.GJJServiceType])+"\n      ")])}},{key:"action",fn:function(t,o){return r("span",{staticStyle:{"text-align":"right"}},[r("a",{on:{click:function(t){return e.createBill(o)}}},[e._v("生成")])])}}])},[r("template",{slot:"footer"},[r("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),r("a-modal",{attrs:{title:"生成",visible:e.showCreateLayer,"confirm-loading":e.confirmLoading,"z-index":1001,centered:""},on:{ok:e.createOk,cancel:e.createCancel}},[r("a-form",{attrs:{form:e.createForm,layout:"horizontal"}},[r("div",[r("a-row",{attrs:{gutter:10}},[r("a-col",{attrs:{md:24}},[r("a-form-item",{attrs:{label:"年月",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[r("a-month-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM",allowClear:!1},model:{value:e.create.nianyue,callback:function(t){e.$set(e.create,"nianyue",t)},expression:"create.nianyue"}})],1)],1)],1)],1)])],1)],2)},n=[],a=(r("8e6e"),r("456d"),r("bd86")),i=(r("ac6a"),r("b775"));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach(function(t){Object(a["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var l=[{title:"派出公司",dataIndex:"GYSName"},{title:"公司名称",dataIndex:"ComName"},{title:"服务类型",scopedSlots:{customRender:"ServiceType"}},{title:"公积金服务类型",scopedSlots:{customRender:"GJJServiceType"}},{title:"操作",scopedSlots:{customRender:"action"}}],u={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{advanced:!0,columns:l,visible:{show:!1},confirmLoading:!1,formSearch:{pageSize:5,current:1,total:0,Keyword:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},createForm:this.$form.createForm(this),dataSource:[],roles:[],modal:{add:{show:!1},exporttransfer:{show:!1}},showHandoverLayer:!1,handover:{DepId:[],Userid:"",record:{}},UserArray:[],ServiceType:{},create:{},showCreateLayer:!1,selectedItem:{}}},watch:{show:function(e,t){var r=this;r.visible=e}},created:function(){var e=this;this.$watch("show",function(t,r){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.refresh()},init:function(){var e=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["User"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User)}).catch(function(e){console.log(e)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["ServiceType"]}).then(function(t){0===t.code?(t.data.ServiceType.forEach(function(t,r){e.ServiceType[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)}),e.pagechange(1)},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,r={};t.formSearch.current=e,r=s({},t.formSearch),r.Role="79",this.form.validateFields(function(e,o){t.$loading.open(),i["a"].post("/api/Company/Service/List",r).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})})},surebill:function(e){var t=this;t.$confirm({title:"确认这条账单信息?",content:"点击确定确认。",onOk:function(){i["a"].post("/api/order/receive/RECBillConfirm",{RECGuid:e.RECGuid}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},exportbill:function(e){var t=document.createElement("a");t.href="/api/order/receive/Export?RECGuid="+e.RECGuid,t.click()},deletebill:function(e){var t=this;t.$confirm({title:"确认删除这条账单信息?",content:"点击确定删除。",onOk:function(){i["a"].post("/api/order/receive/RECBillDeleted",{RECGuid:e.RECGuid}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},createBill:function(e){this.showCreateLayer=!0,this.selectedItem=e},createOk:function(){var e=this;e.create.nianyue&&(e.$loading.open(),i["a"].post("/api/order/receive/CreateBill",{ComServiceGuid:e.selectedItem.ComServiceGuid,nianyue:e.create.nianyue}).then(function(t){0===t.code?(e.$message.success(t.msg),e.showCreateLayer=!1,e.initPage()):(e.$loading.close(),e.$message.error(t.msg))}).catch(function(e){console.log(e)}))},createCancel:function(){this.showCreateLayer=!1}}},f=u,d=(r("be87"),r("2877")),m=Object(d["a"])(f,o,n,!1,null,null,null);t["default"]=m.exports},be87:function(e,t,r){"use strict";var o=r("05ff"),n=r.n(o);n.a}}]);