(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa9cef5c","chunk-6e37087c","chunk-2d2288d1"],{"13a8":function(e,t,a){"use strict";var r=a("16fb"),o=a.n(r);o.a},"16fb":function(e,t,a){},"1af6":function(e,t,a){var r=a("63b6");r(r.S,"Array",{isArray:a("9003")})},"5eae":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:7,lg:7,xl:6,xxl:6}},[a("a-form-item",{attrs:{label:"户名/户号/备注",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.Keyword,callback:function(t){e.$set(e.formSearch,"Keyword",t)},expression:"formSearch.Keyword"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:6,xxl:5}},[a("a-form-item",{attrs:{label:"服务类型",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.formSearch.ServiceType,callback:function(t){e.$set(e.formSearch,"ServiceType",t)},expression:"formSearch.ServiceType"}},e._l(e.ServiceTypeArray,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:6,xxl:5}},[a("a-form-item",{attrs:{label:"账号类型",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.formSearch.AccountType,callback:function(t){e.$set(e.formSearch,"AccountType",t)},expression:"formSearch.AccountType"}},e._l(e.SBAccountTypeArray,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.configureConnect}},[e._v("添加")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ID"},scopedSlots:e._u([{key:"AccountType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n            "+e._s(e.SBAccountType[r.AccountType])+"\n            "),"30"==r.AccountType?[a("br"),a("span",{staticClass:"fs12"},[e._v("(费率："+e._s(r.GongShangRate2)+")")])]:e._e(),"50"==r.AccountType?[a("br"),a("span",{staticClass:"fs12"},[e._v("(比例："+e._s(r.GJJBiliC)+"+"+e._s(r.GJJBiliP)+")")])]:e._e()],2)}},{key:"ServiceType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n            "+e._s(e.ServiceTypeObj[r.ServiceType])+"\n          ")])}},{key:"CityCode",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n                "+e._s(e.cityList[r.CityCode])+"\n            ")])}},{key:"RegionCode",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n                "+e._s(e.Region[r.RegionCode])+"\n            ")])}},{key:"KefuUserid",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.UserArray[r.YXUserId])+"\n        ")])}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(t){return e.modify(r)}}},[e._v("修改")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.deleteAccount(r)}}},[e._v("删除")]),20==r.AccountType?a("a-divider",{attrs:{type:"vertical"}}):e._e(),20==r.AccountType?a("a",{on:{click:function(t){return e.cardinalityDiff(r)}}},[e._v("人场基数差")]):e._e()],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,"show-total":function(e){return"共 "+e+" 条"},current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)],1),a("a-modal",{attrs:{title:"添加社保账户",visible:e.showconfigureLayer,"confirm-loading":e.confirmLoading,width:600},on:{ok:e.configureOk,cancel:e.handleOverCancel}},[a("a-form",{attrs:{form:e.accountForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"服务类型",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ServiceType",{rules:e.AFormImportRules.selectReq}],expression:"['ServiceType',{rules:AFormImportRules.selectReq}]"}],attrs:{allowClear:!1}},e._l(e.ServiceTypeArray,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"账号类型",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["AccountType",{rules:e.AFormImportRules.selectReq}],expression:"['AccountType',{rules:AFormImportRules.selectReq}]"}],attrs:{allowClear:!1},on:{change:e.sbtypeChange}},e._l(e.SBAccountTypeArray,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),"30"==e.selectSbtype?a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"工伤费率",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["GongShangRate",{rules:e.AFormImportRules.selectReq}],expression:"['GongShangRate',{rules:AFormImportRules.selectReq}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"例如：0.007"}})],1)],1):e._e(),"50"==e.selectSbtype?a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"公积金公司比例",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJBiliC",{rules:e.AFormImportRules.selectReq}],expression:"['GJJBiliC',{rules:AFormImportRules.selectReq}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"例如：7"}})],1)],1):e._e(),"50"==e.selectSbtype?a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"公积金个人比例",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJBiliP",{rules:e.AFormImportRules.selectReq}],expression:"['GJJBiliP',{rules:AFormImportRules.selectReq}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"例如：7"}})],1)],1):e._e(),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"户名",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["AccountName",{rules:e.AFormImportRules.iptInput}],expression:"['AccountName',{rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"户号",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["AccountNumber",{rules:e.AFormImportRules.iptInput}],expression:"['AccountNumber',{rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"运行客服",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["OrderUserName",{rules:e.AFormImportRules.iptInput}],expression:"['OrderUserName',{rules:AFormImportRules.iptInput}]"}],on:{click:function(t){return e.addKefu("1")}}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"运行城市",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["CityCode",{initialValue:e.CityCode,rules:e.AFormImportRules.iptInput}],expression:"['CityCode',{initialValue:CityCode,rules:AFormImportRules.iptInput}]"}],attrs:{allowClear:!0},on:{change:e.cityChange}},e._l(e.cityListArray,function(t){return a("a-select-option",{key:t.CityCode},[e._v(e._s(t.CityName))])}),1)],1)],1),"1301"==e.selectCityCode?a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"运行区域",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["RegionCode",{rules:e.AFormImportRules.iptInput}],expression:"['RegionCode',{rules:AFormImportRules.iptInput}]"}],attrs:{allowClear:!0}},e._l(e.RegionListArray,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1):e._e(),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks"],expression:"['Remarks']"}],attrs:{placeholder:"请输入"}})],1)],1)],1)],1)])],1),a("a-modal",{attrs:{title:"修改",visible:e.showModifyLayer,"confirm-loading":e.confirmLoading,width:600},on:{ok:e.modifyOk,cancel:e.modifyCancel}},[a("a-form",{attrs:{form:e.modifyForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:12}},[a("a-form-item",{attrs:{label:"服务类型",labelCol:{span:10},wrapperCol:{span:14}}},[e._v("\n                  "+e._s(e.ServiceTypeObj[e.modifyRecord.ServiceType])+"\n              ")])],1),a("a-col",{attrs:{md:12}},[a("a-form-item",{attrs:{label:"账号类型",labelCol:{span:6},wrapperCol:{span:14}}},[e._v("\n                  "+e._s(e.SBAccountType[e.modifyRecord.AccountType])+"\n              ")])],1),"30"==e.modifyRecord.AccountType?a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"工伤费率",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["GongShangRate",{initialValue:e.modifyRecord.GongShangRate2,rules:e.AFormImportRules.selectReq}],expression:"['GongShangRate',{initialValue:modifyRecord.GongShangRate2,rules:AFormImportRules.selectReq}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"例如：0.007"}})],1)],1):e._e(),"50"==e.modifyRecord.AccountType?a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"公积金公司比例",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJBiliC",{initialValue:e.modifyRecord.GJJBiliC,rules:e.AFormImportRules.selectReq}],expression:"['GJJBiliC',{initialValue:modifyRecord.GJJBiliC,rules:AFormImportRules.selectReq}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"例如：7"}})],1)],1):e._e(),"50"==e.modifyRecord.AccountType?a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"公积金个人比例",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJBiliP",{initialValue:e.modifyRecord.GJJBiliP,rules:e.AFormImportRules.selectReq}],expression:"['GJJBiliP',{initialValue:modifyRecord.GJJBiliP,rules:AFormImportRules.selectReq}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"例如：7"}})],1)],1):e._e(),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"户名",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["AccountName",{initialValue:e.modifyRecord.AccountName,rules:e.AFormImportRules.iptInput}],expression:"['AccountName',{initialValue:modifyRecord.AccountName,rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"户号",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["AccountNumber",{initialValue:e.modifyRecord.AccountNumber,rules:e.AFormImportRules.iptInput}],expression:"['AccountNumber',{initialValue:modifyRecord.AccountNumber,rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"运行客服",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["OrderUserName",{initialValue:e.modifyRecord.OrderUserName,rules:e.AFormImportRules.iptInput}],expression:"['OrderUserName',{initialValue:modifyRecord.OrderUserName,rules:AFormImportRules.iptInput}]"}],on:{click:function(t){return e.addKefu("2")}}})],1)],1),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"运行城市",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["CityCode",{initialValue:e.modifyRecord.CityCode,rules:e.AFormImportRules.iptInput}],expression:"['CityCode',{initialValue:modifyRecord.CityCode,rules:AFormImportRules.iptInput}]"}],attrs:{allowClear:!0},on:{change:e.modifycityChange}},e._l(e.cityListArray,function(t){return a("a-select-option",{key:t.CityCode},[e._v(e._s(t.CityName))])}),1)],1)],1),"1301"==e.modifyselectCityCode?a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"运行区域",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["RegionCode",{initialValue:e.modifyRecord.RegionCode,rules:e.AFormImportRules.iptInput}],expression:"['RegionCode',{initialValue:modifyRecord.RegionCode,rules:AFormImportRules.iptInput}]"}],attrs:{allowClear:!0}},e._l(e.RegionListArray,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1):e._e(),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{initialValue:e.modifyRecord.Remarks}],expression:"['Remarks',{initialValue:modifyRecord.Remarks}]"}],attrs:{placeholder:"请输入"}})],1)],1)],1)],1)])],1),a("model-add-kefu",{ref:"kefuChild",attrs:{show:e.modal.addkefu},on:{close:e.closeAddKefu,sure:e.sureAddKefu}}),a("model-diff",{ref:"diff",attrs:{show:e.modal.diff}})],1)},o=[],i=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),n=a("b775"),s=a("9fc2"),c=a("da53");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach(function(t){Object(i["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var d=[{title:"服务类型",scopedSlots:{customRender:"ServiceType"}},{title:"城市",scopedSlots:{customRender:"CityCode"}},{title:"区域",scopedSlots:{customRender:"RegionCode"}},{title:"账号类型",scopedSlots:{customRender:"AccountType"}},{title:"账户",dataIndex:"AccountNumber"},{title:"户名",dataIndex:"AccountName"},{title:"运行客服",scopedSlots:{customRender:"KefuUserid"}},{title:"备注",dataIndex:"Remarks"},{title:"操作",scopedSlots:{customRender:"action"}}],p={components:{ModelAddKefu:s["default"],ModelDiff:c["default"]},props:{},data:function(){var e;return e={advanced:!0,columns:d,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,Keyword:"",AccountType:"",ServiceType:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],selectReq:[{required:!0,message:"请输入"}]},accountForm:this.$form.createForm(this),modifyForm:this.$form.createForm(this),dataSource:[],dataAccount:[],dataDetail:[],roles:[],modal:{addkefu:{show:!1},diff:{show:!1}},checkComId:"",checkLineId:"",userid:"",expandedRowKeys:[],department:[],departmentKey:"",showClaimLayer:!1,options:[],selectedOptionsCell:[],SaleUserid:"",showconfigureLayer:!1,configure:{DepId:[],Userid:"",record:{}},UserArray:[],DeptArray:[],cityList:[],ServiceTypeObj:{},BillingMode:{},BuJiaoBillingType:{},ServiceTypeArray:[],BillingModeArray:[],BuJiaoBillingTypeArray:[],callback:function(){},FlowType:{},FlowTypeArray:[]},Object(i["a"])(e,"showconfigureLayer",!1),Object(i["a"])(e,"SBAccountTypeArray",[]),Object(i["a"])(e,"SBAccountType",{}),Object(i["a"])(e,"accountArray",[]),Object(i["a"])(e,"modifyRecord",{}),Object(i["a"])(e,"showModifyLayer",!1),Object(i["a"])(e,"cityListArray",[]),Object(i["a"])(e,"selectSbtype",""),Object(i["a"])(e,"RegionListArray",[]),Object(i["a"])(e,"selectCityCode",""),Object(i["a"])(e,"modifyselectCityCode",""),Object(i["a"])(e,"Region",{}),e},computed:{CityCode:{get:function(){return this.$cookies.get("FescoRSBV2_CityCode")},set:function(e){return e}}},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;e.selectCityCode=e.CityCode,n["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City","Region"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.DeptArray=t.data.Dept,e.cityList=t.data.City,e.Region=t.data.Region)}).catch(function(e){console.log(e)}),n["a"].post("/api/Dim/Enum/GetEnum",{Names:["ServiceType","BillingMode","BuJiaoBillingType","FlowType","SBAccountType"]}).then(function(t){0===t.code?(console.log(t),e.ServiceTypeArray=t.data.ServiceType,e.BillingModeArray=t.data.BillingMode,e.BuJiaoBillingTypeArray=t.data.BuJiaoBillingType,e.FlowTypeArray=t.data.FlowType,e.SBAccountTypeArray=t.data.SBAccountType,t.data.ServiceType.forEach(function(t,a){e.ServiceTypeObj[t.key]=t.text}),t.data.BillingMode.forEach(function(t,a){e.BillingMode[t.key]=t.text}),t.data.BuJiaoBillingType.forEach(function(t,a){e.BuJiaoBillingType[t.key]=t.text}),t.data.FlowType.forEach(function(t,a){e.FlowType[t.key]=t.text}),t.data.SBAccountType.forEach(function(t,a){e.SBAccountType[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)}),n["a"].post("/api/company/com/ComBranchList").then(function(t){0===t.code&&(e.cityListArray=t.data.rows)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=u({},t.formSearch),this.form.validateFields(function(e,r){t.$loading.open(),n["a"].post("/api/company/SBAccount/AccountList",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})})},configureConnect:function(e){this.cityChange(this.CityCode),n["a"].post("/api/Company/com/MySelf").then(function(e){0===e.code&&(t.Userid=e.data.Operator.Userid,t.accountForm.setFieldsValue({OrderUserName:t.UserArray[e.data.Operator.Userid]}))}).catch(function(e){console.log(e)});var t=this;t.selectSbtype="",t.showconfigureLayer=!0,this.accountForm.resetFields()},configureOk:function(e){var t=this,a={};t.accountForm.validateFields(function(e,r){e||(a=r,a.YXUserId=t.Userid,n["a"].post("/api/company/SBAccount/Add",a).then(function(e){0===e.code?(t.showconfigureLayer=!1,t.pagerefresh(),t.$message.success(e.msg)):t.$message.error(e.msg)}).catch(function(e){console.log(e)}))})},handleOverCancel:function(e){this.showconfigureLayer=!1},modify:function(e){this.modifycityChange(this.CityCode),this.modifyRecord=e,this.modifyRecord.OrderUserName=this.UserArray[e.YXUserId],this.modifyForm.resetFields(),this.Userid=e.YXUserId,this.showModifyLayer=!0},modifyOk:function(){var e=this,t={};e.modifyForm.validateFields(function(a,r){a||(t=r,t.ID=e.modifyRecord.ID,t.YXUserId=e.Userid,n["a"].post("/api/company/SBAccount/Edit",t).then(function(t){0===t.code?(e.$message.success(t.msg),e.modifyCancel(),e.pagerefresh()):e.$message.error(t.msg)}).catch(function(e){console.log(e)}))})},modifyCancel:function(){this.modifyRecord={},this.showModifyLayer=!1},deleteAccount:function(e){var t=this;this.$confirm({title:"确认删除这条信息?",content:"",onOk:function(){n["a"].post("/api/company/SBAccount/Delete",{ID:e.ID}).then(function(e){0===e.code?(t.$message.success(e.msg),t.pagerefresh()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},addKefu:function(e){this.modal.addkefu={show:!0},this.kefuType=e},closeAddKefu:function(){this.modal.addkefu={show:!1},this.kefuType=""},sureAddKefu:function(e){var t=this;"2"==t.kefuType&&(t.Userid=e.OrderUserid,t.modifyForm.setFieldsValue({OrderUserName:t.UserArray[e.OrderUserid]})),"1"==t.kefuType&&(t.Userid=e.OrderUserid,t.accountForm.setFieldsValue({OrderUserName:t.UserArray[e.OrderUserid]})),t.closeAddKefu(),t.$refs.kefuChild.onClose()},sbtypeChange:function(e){console.log(e),this.selectSbtype=e},cityChange:function(e){e&&(this.selectCityCode=e,this.getRegion(e))},getRegion:function(e){var t=this;n["a"].post("/api/Dim/Enum/GetRegionByCityCode",{CityCode:e}).then(function(e){0===e.code&&(t.RegionListArray=e.data.Region)}).catch(function(e){console.log(e)})},modifycityChange:function(e){e&&(this.modifyselectCityCode=e,this.getRegion(e))},cardinalityDiff:function(e){this.modal.diff={show:!0,faDetail:e,AccountName:e.AccountName}}}},m=p,f=(a("13a8"),a("2877")),y=Object(f["a"])(m,r,o,!1,null,null,null);t["default"]=y.exports},"660a":function(e,t,a){},"75fc":function(e,t,a){"use strict";var r=a("a745"),o=a.n(r);function i(e){if(o()(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var n=a("774e"),s=a.n(n),c=a("c8bb"),l=a.n(c);function u(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return s()(e)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(e){return i(e)||u(e)||d()}a.d(t,"a",function(){return p})},"774e":function(e,t,a){e.exports=a("d2d5")},8113:function(e,t,a){"use strict";var r=a("660a"),o=a.n(r);o.a},"9fc2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!1,visible:this.visible.show,maskClosable:!1,width:450,zIndex:1009,centered:!0},on:{cancel:e.onClose,ok:e.submit}},[a("template",{slot:"title"},[e._v("\n  选择客服\n")]),a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"部门",labelCol:{span:7},wrapperCol:{span:16}}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["deptId",{rules:e.AFormImportRules.selectReq}],expression:"['deptId',{rules:AFormImportRules.selectReq}]"}],attrs:{options:e.options,loadData:e.loadData,changeOnSelect:"",placeholder:"请选择部门"},on:{change:e.onChange}})],1),a("a-form-item",{attrs:{label:"客服",labelCol:{span:7},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["OrderUserid",{rules:e.AFormImportRules.selectReq}],expression:"['OrderUserid',{rules:AFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.DepList,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1)],2)},o=[],i=a("75fc"),n=(a("7f7f"),a("ac6a"),a("b775")),s={props:{show:{type:Object,default:function(){return{show:!1}}},close:{type:Function,required:!1,default:null},sure:{type:Function,required:!1,default:null}},data:function(){return{visible:{show:!1},form:this.$form.createForm(this),AFormImportRules:{selectReq:[{required:!0,message:"请选择"}]},options:[],DepList:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.options=[],this.DepList=[],this.form.resetFields(),this.$emit("close",!1)},init:function(){var e=this;n["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:"1"}).then(function(t){0===t.code&&t.data.forEach(function(t,a){var r={};r.value=t.code,r.label=t.name,r.isLeaf=!1,e.options.push(r)})}).catch(function(e){console.log(e)})},submit:function(){var e=this;this.form.validateFields(function(t,a){if(!t){var r=a;r.deptId=r.deptId[r.deptId.length-1],e.$emit("sure",a),console.log(a)}})},loadData:function(e){var t=e[e.length-1],a=this;t.loading=!0,n["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,a){var r={};r.value=e.code,r.label=e.name,r.isLeaf=!1,t.children.push(r)}),a.options=Object(i["a"])(a.options)):(t.isLeaf=!0,t.loading=!1))}).catch(function(e){console.log(e),t.loading=!1})},onChange:function(e){this.DepList=[],this.SaleUserid="",this.userbydepid(e[e.length-1])},userbydepid:function(e){var t=this;n["a"].post("/api/Org/User/UsersByDepId",{DepId:e}).then(function(e){var a=e;0===a.code&&(t.DepList=a.data,t.form.setFieldsValue({OrderUserid:""}))}).catch(function(e){console.log(e)})}}},c=s,l=(a("8113"),a("2877")),u=Object(l["a"])(c,r,o,!1,null,"3d5c594e",null);t["default"]=u.exports},a745:function(e,t,a){e.exports=a("f410")},c8bb:function(e,t,a){e.exports=a("54a1")},da53:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:700,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  ("+e._s(e.visible.AccountName?e.visible.AccountName:"")+")人场基数差\n")]),a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{span:24,align:"right"}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:e.initPage}},[e._v("刷新")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:e.addCharge}},[e._v("添加")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ORLZGUID"},scopedSlots:e._u([{key:"BeginDate",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(null==r.BeginDate?"":e.moment(r.BeginDate).format("YYYY-MM"))+"\n      ")])}},{key:"EndDate",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(null==r.EndDate?"":e.moment(r.EndDate).format("YYYY-MM"))+"\n      ")])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("a-modal",{attrs:{title:"添加人场基数差",visible:e.showCreateLayer,"confirm-loading":e.confirmLoading,"z-index":1001,centered:""},on:{ok:e.createOk,cancel:e.createCancel}},[a("a-form",{attrs:{form:e.createForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"开始月份",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["BeginDate",{rules:e.AFormImportRules.iptInputReq}],expression:"['BeginDate',{rules:AFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM",allowClear:!1}})],1)],1),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"人场基数差",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["DiffPrice",{rules:e.AFormImportRules.iptInputReq}],expression:"['DiffPrice',{rules:AFormImportRules.iptInputReq}]"}],attrs:{placeholder:"请输入"}})],1)],1)],1)],1)])],1)],2)},o=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),n=a("b775"),s=a("c32d"),c=a.n(s);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach(function(t){Object(i["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var d=[{title:"开始月份",scopedSlots:{customRender:"BeginDate"}},{title:"结束月份",scopedSlots:{customRender:"EndDate"}},{title:"金额",dataIndex:"DiffPrice"}],p={props:{show:{type:Object,default:function(){return{show:!1}}}},components:{},data:function(){var e;return e={visible:{show:!1,faDetail:{},sbType:{},sbTypeList:[],type:"",AccountName:""},advanced:!0,columns:d},Object(i["a"])(e,"visible",!1),Object(i["a"])(e,"confirmLoading",!1),Object(i["a"])(e,"formSearch",{pageSize:10,current:1,total:0}),Object(i["a"])(e,"count","5"),Object(i["a"])(e,"form",this.$form.createForm(this)),Object(i["a"])(e,"AFormImportRules",{iptInputReq:[{required:!0,message:"请输入"}]}),Object(i["a"])(e,"createForm",this.$form.createForm(this)),Object(i["a"])(e,"dataSource",[]),Object(i["a"])(e,"UserArray",[]),Object(i["a"])(e,"modal",{detail:{show:!1}}),Object(i["a"])(e,"moment",c.a),Object(i["a"])(e,"showCreateLayer",!1),Object(i["a"])(e,"searchData",[]),Object(i["a"])(e,"ComServiceGuid",""),e},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.dataSource=[],this.form.resetFields()},init:function(){var e=this;e.pagechange(1)},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=u({},t.formSearch),console.log(t.visible.faDetail),a.SBAccountID=t.visible.faDetail.ID,t.$loading.open(),n["a"].post("/api/company/SBAccount/DiffList",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},addCharge:function(){this.showCreateLayer=!0},createOk:function(){var e=this;this.createForm.validateFields(function(t,a){t||(e.$loading.open(),n["a"].post("/api/company/SBAccount/DiffAdd",{SBAccountID:e.visible.faDetail.ID,DiffPrice:a.DiffPrice,BeginDate:a.BeginDate}).then(function(t){0===t.code?(e.$message.success(t.msg),e.initPage(),e.createCancel()):(e.$loading.close(),e.$message.error(t.msg))}).catch(function(e){console.log(e)}))})},createCancel:function(){this.showCreateLayer=!1,this.createForm.resetFields()}}},m=p,f=a("2877"),y=Object(f["a"])(m,r,o,!1,null,null,null);t["default"]=y.exports},f410:function(e,t,a){a("1af6"),e.exports=a("584a").Array.isArray}}]);