(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76ac300c"],{"56d2":function(e,t,a){},a670:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.Keyword,callback:function(t){e.$set(e.formSearch,"Keyword",t)},expression:"formSearch.Keyword"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")]),"79"==e.formSearch.Role?a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.addCustomer()}}},[e._v("添加")]):e._e()],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ComServiceGuid"},scopedSlots:e._u([{key:"ServiceType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.ServiceType[r.ServiceType])+"\n        ")])}},{key:"GJJServiceType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.ServiceType[r.GJJServiceType])+"\n        ")])}},{key:"BillingMode",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.BillingMode[r.BillingMode])+"\n        ")])}},{key:"BuJiaoBillingType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.BuJiaoBillingType[r.BuJiaoBillingType])+"\n        ")])}},{key:"OnsiteUserid",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.UserArray[r.OnsiteUserid])+"\n        ")])}},{key:"FlowType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.FlowType[r.FlowType])+"\n        ")])}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(t){return e.detail(r)}}},[e._v("详情")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.handoverConnect(r)}}},[e._v("交接")])],1)}}])},[a("span",{attrs:{slot:"gjjTitle"},slot:"gjjTitle"},[e._v("公积金"),a("br"),e._v("服务类型")]),a("span",{attrs:{slot:"bujiaofwfTitle"},slot:"bujiaofwfTitle"},[e._v("补缴"),a("br"),e._v("服务费模式")]),a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)],1),a("a-modal",{attrs:{title:"客户交接",visible:e.showHandoverLayer,"confirm-loading":e.confirmLoading},on:{ok:e.handOverOk,cancel:e.handleOverCancel}},[a("a-form",{attrs:{layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"部门",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-cascader",{attrs:{options:e.allOptions,loadData:e.loadDataAll,changeOnSelect:"",placeholder:"请选择交接部门"},on:{change:e.onChangeAll},model:{value:e.handover.DepId,callback:function(t){e.$set(e.handover,"DepId",t)},expression:"handover.DepId"}})],1),a("a-form-item",{attrs:{label:"人员",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-select",{model:{value:e.handover.Userid,callback:function(t){e.$set(e.handover,"Userid",t)},expression:"handover.Userid"}},e._l(e.AllUserList,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1)],1)],1)])],1),a("modal-add",{attrs:{show:e.modal.add,refresh:e.pagerefresh}}),a("modal-detail",{attrs:{show:e.modal.detail,refresh:e.pagerefresh}})],1)},o=[],n=(a("8e6e"),a("456d"),a("75fc")),i=(a("7f7f"),a("ac6a"),a("bd86")),l=a("b775"),c=a("9272"),s=a("0dd8");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach(function(t){Object(i["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var u=[{title:"公司名称",dataIndex:"ComName",align:"center"},{title:"服务类型",scopedSlots:{customRender:"ServiceType"},align:"center"},{slots:{title:"gjjTitle"},scopedSlots:{customRender:"GJJServiceType"},align:"center"},{title:"服务费模式",scopedSlots:{customRender:"BillingMode"},align:"center"},{slots:{title:"bujiaofwfTitle"},scopedSlots:{customRender:"BuJiaoBillingType"},align:"center"},{title:"整户费",dataIndex:"AccountFee"},{title:"单人价格",dataIndex:"UnitPrice"},{title:"档案价格",dataIndex:"ArchivesPrice"},{title:"驻场客服",scopedSlots:{customRender:"OnsiteUserid"}},{title:"服务流程",scopedSlots:{customRender:"FlowType"}},{title:"操作",scopedSlots:{customRender:"action"}}],h={components:{ModalAdd:c["default"],ModalDetail:s["default"]},data:function(){var e;return e={advanced:!0,columns:u,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,Keyword:"",Role:"79"},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],dataLeads:[],dataDetail:[],roles:[],modal:{add:{show:!1},detail:{show:!1},exporttransfer:{show:!1}},checkComId:"",checkLineId:"",userid:"",expandedRowKeys:[],department:[],departmentKey:"",showClaimLayer:!1,childLine:{expanded:"",record:""},options:[],selectedOptionsCell:[],SaleUserid:"",showHandoverLayer:!1,handover:{DepId:[],Userid:"",record:{}},UserArray:[],DeptArray:[],cityList:[],ServiceType:{},BillingMode:{},BuJiaoBillingType:{},ServiceTypeArray:[],BillingModeArray:[],BuJiaoBillingTypeArray:[],callback:function(){},FlowType:{},FlowTypeArray:[]},Object(i["a"])(e,"showHandoverLayer",!1),Object(i["a"])(e,"handover",{DepId:[],Userid:"",record:{}}),Object(i["a"])(e,"allOptions",[]),Object(i["a"])(e,"AllUserList",[]),e},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;l["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.DeptArray=t.data.Dept,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),l["a"].post("/api/Dim/Enum/GetEnum",{Names:["ServiceType","BillingMode","BuJiaoBillingType","FlowType"]}).then(function(t){0===t.code?(console.log(t),e.ServiceTypeArray=t.data.ServiceType,e.BillingModeArray=t.data.BillingMode,e.BuJiaoBillingTypeArray=t.data.BuJiaoBillingType,e.FlowTypeArray=t.data.FlowType,t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),t.data.BillingMode.forEach(function(t,a){e.BillingMode[t.key]=t.text}),t.data.BuJiaoBillingType.forEach(function(t,a){e.BuJiaoBillingType[t.key]=t.text}),t.data.FlowType.forEach(function(t,a){e.FlowType[t.key]=t.text}),console.log(e.ServiceType),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)}),this.getAllDep()},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=p({},t.formSearch),a.Role=79,this.form.validateFields(function(e,r){t.$loading.open(),l["a"].post("/api/Company/Service/List",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})})},addCustomer:function(){this.modal.add={show:!0,cityList:this.cityList,ServiceType:this.ServiceTypeArray,BillingMode:this.BillingModeArray,BuJiaoBillingType:this.BuJiaoBillingTypeArray,UserArray:this.UserArray,DeptArray:this.DeptArray,FlowTypeList:this.FlowTypeArray,role:"79"}},detail:function(e){var t=this;this.modal.detail={show:!0,UserArray:t.UserArray,ServiceType:t.ServiceType,BillingMode:t.BillingMode,BuJiaoBillingType:t.BuJiaoBillingType,cityList:t.cityList,ComServiceGuid:e.ComServiceGuid,FlowType:t.FlowType}},handoverConnect:function(e){this.handover.record=e,this.showHandoverLayer=!0},handOverOk:function(e){var t=this;t.handover.DepId===[]?t.$message.error("请选择交接部门！"):""===t.handover.Userid?t.$message.error("请选择交接人员！"):l["a"].post("/api/Company/Service/ChangeKefuUserid",{ComServiceGuid:t.handover.record.ComServiceGuid,KefuUserid:t.handover.Userid}).then(function(e){0===e.code?(t.showHandoverLayer=!1,t.handover={DepId:[],Userid:"",record:{}},t.pagerefresh(),t.$message.success(e.msg)):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},handleOverCancel:function(e){this.showHandoverLayer=!1,this.handover={DepId:[],Userid:"",record:{}}},getAllDep:function(){var e=this;l["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:"1"}).then(function(t){0===t.code&&t.data.forEach(function(t,a){var r={};r.value=t.code,r.label=t.name,r.isLeaf=!1,e.allOptions.push(r)})}).catch(function(e){console.log(e)})},loadDataAll:function(e){var t=e[e.length-1],a=this;t.loading=!0,l["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,a){var r={};r.value=e.code,r.label=e.name,r.isLeaf=!1,t.children.push(r)}),a.allOptions=Object(n["a"])(a.allOptions)):(t.isLeaf=!0,t.loading=!1,a.allOptions=Object(n["a"])(a.allOptions)))}).catch(function(e){console.log(e),t.loading=!1})},onChangeAll:function(e){this.AllUserList=[],this.handover.Userid="",this.userbydepidAll(e[e.length-1])},userbydepidAll:function(e){var t=this;l["a"].post("/api/Org/User/UsersByDepId",{DepId:e}).then(function(e){var a=e;0===a.code&&(t.AllUserList=a.data)}).catch(function(e){console.log(e)})}}},y=h,f=(a("b992"),a("2877")),g=Object(f["a"])(y,r,o,!1,null,null,null);t["default"]=g.exports},b992:function(e,t,a){"use strict";var r=a("56d2"),o=a.n(r);o.a}}]);