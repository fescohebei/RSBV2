(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8057ef0"],{"4be4":function(e,t,r){},6631:function(e,t,r){"use strict";var a=r("4be4"),n=r.n(a);n.a},a11a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-layout",[r("a-layout-content",[r("a-card",{attrs:{bordered:!1}},[r("div",[r("a-form",{attrs:{form:e.form,layout:"horizontal"}},[r("div",{class:e.advanced?null:"fold"},[r("a-row",{attrs:{gutter:10}},[r("a-col",{attrs:{md:6}},[r("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[r("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.Keyword,callback:function(t){e.$set(e.formSearch,"Keyword",t)},expression:"formSearch.Keyword"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-item",[r("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),r("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ComServiceGuid"},scopedSlots:e._u([{key:"ServiceType",fn:function(t,a){return r("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.ServiceType[a.ServiceType])+"\n        ")])}},{key:"GJJServiceType",fn:function(t,a){return r("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.ServiceType[a.GJJServiceType])+"\n        ")])}},{key:"BillingMode",fn:function(t,a){return r("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.BillingMode[a.BillingMode])+"\n        ")])}},{key:"BuJiaoBillingType",fn:function(t,a){return r("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.BuJiaoBillingType[a.BuJiaoBillingType])+"\n        ")])}},{key:"OnsiteUserid",fn:function(t,a){return r("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.UserArray[a.OnsiteUserid])+"\n        ")])}},{key:"KefuUserid",fn:function(t,a){return r("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.UserArray[a.KefuUserid])+"\n        ")])}},{key:"FlowType",fn:function(t,a){return r("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.FlowType[a.FlowType])+"\n        ")])}}])},[r("template",{slot:"footer"},[r("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)],1)],1)},n=[],o=(r("8e6e"),r("456d"),r("ac6a"),r("bd86")),i=r("b775");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach(function(t){Object(o["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var s=[{title:"公司名称",dataIndex:"ComName"},{title:"服务类型",scopedSlots:{customRender:"ServiceType"}},{title:"公积金服务类型",scopedSlots:{customRender:"GJJServiceType"}},{title:"服务费模式",scopedSlots:{customRender:"BillingMode"}},{title:"补缴服务费模式",scopedSlots:{customRender:"BuJiaoBillingType"}},{title:"整户费",dataIndex:"AccountFee"},{title:"单人价格",dataIndex:"UnitPrice"},{title:"档案价格",dataIndex:"ArchivesPrice"},{title:"驻场客服",scopedSlots:{customRender:"OnsiteUserid"}},{title:"客服",scopedSlots:{customRender:"KefuUserid"}},{title:"服务流程",scopedSlots:{customRender:"FlowType"}}],d={components:{},data:function(){var e;return e={advanced:!0,columns:s,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,Keyword:"",Role:"79"},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],dataLeads:[],dataDetail:[],roles:[],modal:{add:{show:!1},exporttransfer:{show:!1}},checkComId:"",checkLineId:"",userid:"",expandedRowKeys:[],department:[],departmentKey:"",showClaimLayer:!1,childLine:{expanded:"",record:""},options:[],selectedOptionsCell:[],SaleUserid:"",showHandoverLayer:!1,handover:{DepId:[],Userid:"",record:{}},UserArray:[],DeptArray:[],cityList:[],ServiceType:{},BillingMode:{},BuJiaoBillingType:{},ServiceTypeArray:[],BillingModeArray:[],BuJiaoBillingTypeArray:[],callback:function(){},FlowType:{},FlowTypeArray:[]},Object(o["a"])(e,"showHandoverLayer",!1),Object(o["a"])(e,"handover",{DepId:[],Userid:"",record:{}}),Object(o["a"])(e,"allOptions",[]),Object(o["a"])(e,"AllUserList",[]),e},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.DeptArray=t.data.Dept,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["ServiceType","BillingMode","BuJiaoBillingType","FlowType"]}).then(function(t){0===t.code?(console.log(t),e.ServiceTypeArray=t.data.ServiceType,e.BillingModeArray=t.data.BillingMode,e.BuJiaoBillingTypeArray=t.data.BuJiaoBillingType,e.FlowTypeArray=t.data.FlowType,t.data.ServiceType.forEach(function(t,r){e.ServiceType[t.key]=t.text}),t.data.BillingMode.forEach(function(t,r){e.BillingMode[t.key]=t.text}),t.data.BuJiaoBillingType.forEach(function(t,r){e.BuJiaoBillingType[t.key]=t.text}),t.data.FlowType.forEach(function(t,r){e.FlowType[t.key]=t.text}),console.log(e.ServiceType)):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,r={};t.formSearch.current=e,r=l({},t.formSearch),this.form.validateFields(function(e,a){t.$loading.open(),i["a"].post("/api/Company/Service/AllList",r).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})})}}},p=d,u=(r("6631"),r("2877")),y=Object(u["a"])(p,a,n,!1,null,null,null);t["default"]=y.exports}}]);