(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49acb326"],{"258a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:6,xxl:6}},[a("a-form-item",{attrs:{label:"年月",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!0,format:"YYYY-MM"},model:{value:e.formSearch.nianyue,callback:function(t){e.$set(e.formSearch,"nianyue",t)},expression:"formSearch.nianyue"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"RECGuid"},scopedSlots:e._u([{key:"BillStatus",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.BillStatus[r.BillStatus])+"\n        ")])}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[0==r.BillStatus?a("a",{on:{click:function(t){return e.surebill(r)}}},[e._v("确认")]):e._e(),0==r.BillStatus?a("a-divider",{attrs:{type:"vertical"}}):e._e(),0==r.BillStatus?a("a",{on:{click:function(t){return e.deletebill(r)}}},[e._v("删除")]):e._e(),0==r.BillStatus?a("a-divider",{attrs:{type:"vertical"}}):e._e(),a("a",{on:{click:function(t){return e.exportbill(r)}}},[e._v("导出")])],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)],1)],1)},o=[],n=(a("8e6e"),a("456d"),a("bd86")),i=(a("ac6a"),a("b775"));function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach(function(t){Object(n["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var s=[{title:"状态",scopedSlots:{customRender:"BillStatus"}},{title:"公司名称",dataIndex:"ComName"},{title:"年月",dataIndex:"nianYue"},{title:"总金额",dataIndex:"AllMoney"},{title:"创建时间",dataIndex:"CreateTime"},{title:"操作",scopedSlots:{customRender:"action"}}],u={components:{},props:{},data:function(){return{advanced:!0,columns:s,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,ComName:"",type:"1"},form:this.$form.createForm(this),AFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}]},createForm:this.$form.createForm(this),create:{},dataSource:[],modal:{add:{show:!1},detail:{show:!1},exporttransfer:{show:!1}},showHandoverLayer:!1,handover:{DepId:[],Userid:"",record:{}},UserArray:[],ServiceType:{},BillStatus:{},showCreateLayer:!1,companyList:[],companyName:"",searchData:[]}},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["User"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User)}).catch(function(e){console.log(e)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["ServiceType","BillStatus"]}).then(function(t){0===t.code?(t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),t.data.BillStatus.forEach(function(t,a){e.BillStatus[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)}),e.pagechange(1)},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=l({},t.formSearch),this.form.validateFields(function(e,r){t.$loading.open(),i["a"].post("/api/order/ReceiveComOrg/ComListKF",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})})},detail:function(e){var t=this;this.modal.detail={show:!0,UserArray:t.UserArray,ServiceType:t.ServiceType,BillingMode:t.BillingMode,BuJiaoBillingType:t.BuJiaoBillingType,cityList:t.cityList,ComServiceGuid:e.ComServiceGuid}},surebill:function(e){var t=this;t.$confirm({title:"确认这条账单信息?",content:"点击确定确认。",onOk:function(){i["a"].post("/api/order/ReceiveComOrg/RECBillConfirm",{RECGuid:e.RECGuid}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},exportbill:function(e){var t=document.createElement("a");t.href="/api/order/ReceiveComOrg/Export?RECGuid="+e.RECGuid,t.click()},deletebill:function(e){var t=this;t.$confirm({title:"确认删除这条账单信息?",content:"点击确定删除。",onOk:function(){i["a"].post("/api/order/ReceiveComOrg/RECBillDeleted",{RECGuid:e.RECGuid}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})}}},m=u,d=(a("f16b"),a("2877")),f=Object(d["a"])(m,r,o,!1,null,null,null);t["default"]=f.exports},b13d:function(e,t,a){},f16b:function(e,t,a){"use strict";var r=a("b13d"),o=a.n(r);o.a}}]);