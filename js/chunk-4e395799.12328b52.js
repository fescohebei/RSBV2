(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e395799","chunk-d7177b30"],{"05ff":function(e,t,a){},2138:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1200,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n    生成账单\n    ")]),a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.Keyword,callback:function(t){e.$set(e.formSearch,"Keyword",t)},expression:"formSearch.Keyword"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ComServiceGuid"},scopedSlots:e._u([{key:"ServiceType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.ServiceType[r.ServiceType])+"\n      ")])}},{key:"GJJServiceType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.ServiceType[r.GJJServiceType])+"\n      ")])}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(t){return e.createBill(r)}}},[e._v("生成")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("a-modal",{attrs:{title:"生成",visible:e.showCreateLayer,"confirm-loading":e.confirmLoading,"z-index":1001,centered:""},on:{ok:e.createOk,cancel:e.createCancel}},[a("a-form",{attrs:{form:e.createForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"年月",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM",allowClear:!1},model:{value:e.create.nianyue,callback:function(t){e.$set(e.create,"nianyue",t)},expression:"create.nianyue"}})],1)],1)],1)],1)])],1)],2)},o=[],n=(a("8e6e"),a("456d"),a("bd86")),i=(a("ac6a"),a("b775"));function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach(function(t){Object(n["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var l=[{title:"派出公司",dataIndex:"GYSName"},{title:"公司名称",dataIndex:"ComName"},{title:"服务类型",scopedSlots:{customRender:"ServiceType"}},{title:"公积金服务类型",scopedSlots:{customRender:"GJJServiceType"}},{title:"操作",scopedSlots:{customRender:"action"}}],u={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{advanced:!0,columns:l,visible:{show:!1},confirmLoading:!1,formSearch:{pageSize:5,current:1,total:0,Keyword:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},createForm:this.$form.createForm(this),dataSource:[],roles:[],modal:{add:{show:!1},exporttransfer:{show:!1}},showHandoverLayer:!1,handover:{DepId:[],Userid:"",record:{}},UserArray:[],ServiceType:{},create:{},showCreateLayer:!1,selectedItem:{}}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.refresh()},init:function(){var e=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["User"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User)}).catch(function(e){console.log(e)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["ServiceType"]}).then(function(t){0===t.code?(t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)}),e.pagechange(1)},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=s({},t.formSearch),a.Role="79",this.form.validateFields(function(e,r){t.$loading.open(),i["a"].post("/api/Company/Service/List",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})})},surebill:function(e){var t=this;t.$confirm({title:"确认这条账单信息?",content:"点击确定确认。",onOk:function(){i["a"].post("/api/order/receive/RECBillConfirm",{RECGuid:e.RECGuid}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},exportbill:function(e){var t=document.createElement("a");t.href="/api/order/receive/Export?RECGuid="+e.RECGuid,t.click()},deletebill:function(e){var t=this;t.$confirm({title:"确认删除这条账单信息?",content:"点击确定删除。",onOk:function(){i["a"].post("/api/order/receive/RECBillDeleted",{RECGuid:e.RECGuid}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},createBill:function(e){this.showCreateLayer=!0,this.selectedItem=e},createOk:function(){var e=this;e.create.nianyue&&(e.$loading.open(),i["a"].post("/api/order/receive/CreateBill",{ComServiceGuid:e.selectedItem.ComServiceGuid,nianyue:e.create.nianyue}).then(function(t){0===t.code?(e.$message.success(t.msg),e.showCreateLayer=!1,e.initPage()):(e.$loading.close(),e.$message.error(t.msg))}).catch(function(e){console.log(e)}))},createCancel:function(){this.showCreateLayer=!1}}},f=u,m=(a("be87"),a("2877")),d=Object(m["a"])(f,r,o,!1,null,null,null);t["default"]=d.exports},"6e90":function(e,t,a){"use strict";var r=a("874b"),o=a.n(r);o.a},"874b":function(e,t,a){},ac28:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[a("a-form-item",{attrs:{label:"派出公司",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.GYSName,callback:function(t){e.$set(e.formSearch,"GYSName",t)},expression:"formSearch.GYSName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[a("a-form-item",{attrs:{label:"年月",labelCol:{span:4},wrapperCol:{span:18}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM",allowClear:!0},model:{value:e.formSearch.nianyue,callback:function(t){e.$set(e.formSearch,"nianyue",t)},expression:"formSearch.nianyue"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.chooseCompany}},[e._v("生成账单")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"RECGuid"},scopedSlots:e._u([{key:"BillStatus",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.BillStatus[r.BillStatus])+"\n        ")])}},{key:"ServiceType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.ServiceType[r.ServiceType])+"\n        ")])}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[0==r.BillStatus?a("a",{on:{click:function(t){return e.surebill(r)}}},[e._v("确认")]):e._e(),0==r.BillStatus?a("a-divider",{attrs:{type:"vertical"}}):e._e(),0==r.BillStatus?a("a",{on:{click:function(t){return e.deletebill(r)}}},[e._v("删除")]):e._e(),0==r.BillStatus?a("a-divider",{attrs:{type:"vertical"}}):e._e(),a("a",{on:{click:function(t){return e.exportbill(r)}}},[e._v("导出")])],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)],1),a("modal-create",{attrs:{show:e.modal.create,refresh:e.pagerefresh}})],1)},o=[],n=(a("8e6e"),a("456d"),a("bd86")),i=(a("ac6a"),a("b775")),c=a("2138");function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach(function(t){Object(n["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var u=[{title:"状态",scopedSlots:{customRender:"BillStatus"}},{title:"供应商名称",dataIndex:"GYSName"},{title:"公司名称",dataIndex:"ComName"},{title:"服务类型",scopedSlots:{customRender:"ServiceType"}},{title:"年月",dataIndex:"nianYue"},{title:"总金额",dataIndex:"AllMoney"},{title:"创建时间",dataIndex:"CreateTime"},{title:"操作",scopedSlots:{customRender:"action"}}],f={components:{ModalCreate:c["default"]},data:function(){return{advanced:!0,columns:u,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,ComName:"",GYSName:"",type:"1"},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],roles:[],modal:{add:{show:!1},create:{show:!1},detail:{show:!1},exporttransfer:{show:!1}},showHandoverLayer:!1,handover:{DepId:[],Userid:"",record:{}},UserArray:[],ServiceType:{},BillStatus:{}}},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["User"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User)}).catch(function(e){console.log(e)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["ServiceType","BillStatus"]}).then(function(t){0===t.code?(t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),t.data.BillStatus.forEach(function(t,a){e.BillStatus[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)}),e.pagechange(1)},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=l({},t.formSearch),this.form.validateFields(function(e,r){t.$loading.open(),i["a"].post("/api/order/receive/ComList",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})})},detail:function(e){var t=this;this.modal.detail={show:!0,UserArray:t.UserArray,ServiceType:t.ServiceType,BillingMode:t.BillingMode,BuJiaoBillingType:t.BuJiaoBillingType,cityList:t.cityList,ComServiceGuid:e.ComServiceGuid}},surebill:function(e){var t=this;t.$confirm({title:"确认这条账单信息?",content:"点击确定确认。",onOk:function(){i["a"].post("/api/order/receive/RECBillConfirm",{RECGuid:e.RECGuid}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},exportbill:function(e){var t=document.createElement("a");t.href="/api/order/receive/Export?RECGuid="+e.RECGuid,t.click()},deletebill:function(e){var t=this;t.$confirm({title:"确认删除这条账单信息?",content:"点击确定删除。",onOk:function(){i["a"].post("/api/order/receive/RECBillDeleted",{RECGuid:e.RECGuid}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},createBill:function(e){var t=this;i["a"].post("/api/order/receive/CreateBill",{ComServiceGuid:e.ComServiceGuid,nianyueInt:e.nianyueInt}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},chooseCompany:function(){this.modal.create={show:!0}}}},m=f,d=(a("6e90"),a("2877")),p=Object(d["a"])(m,r,o,!1,null,null,null);t["default"]=p.exports},be87:function(e,t,a){"use strict";var r=a("05ff"),o=a.n(r);o.a}}]);