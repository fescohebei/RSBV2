(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35bdfae8","chunk-2d20957d"],{"12e8":function(e,t,a){"use strict";var o=a("479b"),r=a.n(o);r.a},"479b":function(e,t,a){},a1a2:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("div",{staticClass:"tab-title"},[e._v("社保账户")]),a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:9}},[a("a-form-item",{attrs:{label:"社保单位/户号",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.accountFormSearch.Keyword,callback:function(t){e.$set(e.accountFormSearch,"Keyword",t)},expression:"accountFormSearch.Keyword"}})],1)],1),a("a-col",{attrs:{md:7}},[a("a-form-item",{attrs:{label:"账号类型",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.accountFormSearch.AccountType,callback:function(t){e.$set(e.accountFormSearch,"AccountType",t)},expression:"accountFormSearch.AccountType"}},e._l(e.visible.SBAccountTypeArray,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:4}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.configureConnect}},[e._v("添加")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ID"},scopedSlots:e._u([{key:"RelationID",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[o.ComOrgID?[a("span",{staticStyle:{color:"red"}},[e._v("已关联")])]:[a("span",[e._v("未关联")])]],2)}},{key:"AccountType",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.visible.SBAccountType[o.AccountType])+"\n        ")])}},{key:"ServiceType",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.visible.ServiceTypeObj[o.ServiceType])+"\n        ")])}},{key:"action",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[null==o.ComOrgID?a("a",{on:{click:function(t){return e.connect(o)}}},[e._v("关联")]):a("a",{on:{click:function(t){return e.cancleConnect(o)}}},[e._v("取消关联")]),20==o.AccountType?a("a-divider",{attrs:{type:"vertical"}}):e._e(),20==o.AccountType?a("a",{on:{click:function(t){return e.cardinalityDiff(o)}}},[e._v("人厂基数差")]):e._e()],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.accountFormSearch.pageSize,total:e.accountFormSearch.total,current:e.accountFormSearch.current},on:{change:e.searchAccount}})],1)],2),a("a-modal",{attrs:{title:"添加社保账户",visible:e.showconfigureLayer,"confirm-loading":e.confirmLoading,width:600},on:{ok:e.configureOk,cancel:e.handleOverCancel}},[a("a-form",{attrs:{form:e.accountForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{md:24}},[a("a-form-item",{attrs:{label:"服务类型",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["ServiceType",{initialValue:"20"}],expression:"['ServiceType',{initialValue:'20'}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"账号类型",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["AccountType",{rules:e.AFormImportRules.selectReq}],expression:"['AccountType',{rules:AFormImportRules.selectReq}]"}],attrs:{allowClear:!1},on:{change:e.sbtypeChange}},e._l(e.visible.SBAccountTypeArray,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),"30"==e.selectSbtype?a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"工伤费率",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["GongShangRate",{rules:e.AFormImportRules.selectReq}],expression:"['GongShangRate',{rules:AFormImportRules.selectReq}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"例如：0.007"}})],1)],1):e._e(),"50"==e.selectSbtype?a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"公积金公司比例",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJBiliC",{rules:e.AFormImportRules.selectReq}],expression:"['GJJBiliC',{rules:AFormImportRules.selectReq}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"例如：7"}})],1)],1):e._e(),"50"==e.selectSbtype?a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"公积金个人比例",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJBiliP",{rules:e.AFormImportRules.selectReq}],expression:"['GJJBiliP',{rules:AFormImportRules.selectReq}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"例如：7"}})],1)],1):e._e(),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"户名",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["AccountName",{rules:e.AFormImportRules.iptInput}],expression:"['AccountName',{rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"户号",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["AccountNumber",{rules:e.AFormImportRules.iptInput}],expression:"['AccountNumber',{rules:AFormImportRules.iptInput}]"}],attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"运行客服",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["OrderUserName",{rules:e.AFormImportRules.iptInput}],expression:"['OrderUserName',{rules:AFormImportRules.iptInput}]"}],on:{click:function(t){return e.addKefu("1")}}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"运行城市",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["CityCode",{initialValue:e.CityCode,rules:e.AFormImportRules.iptInput}],expression:"['CityCode',{initialValue:CityCode,rules:AFormImportRules.iptInput}]"}],attrs:{allowClear:!0},on:{change:e.cityChange}},e._l(e.cityListArray,function(t){return a("a-select-option",{key:t.CityCode},[e._v(e._s(t.CityName))])}),1)],1)],1),"1301"==e.selectCityCode?a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"运行区域",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["RegionCode",{rules:e.AFormImportRules.iptInput}],expression:"['RegionCode',{rules:AFormImportRules.iptInput}]"}],attrs:{allowClear:!0}},e._l(e.RegionListArray,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1):e._e(),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks"],expression:"['Remarks']"}],attrs:{placeholder:"请输入"}})],1)],1)],1)],1)])],1),a("model-diff",{ref:"diff",attrs:{show:e.modal.diff}})],1)},r=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),c=a("b775"),i=a("a93b");function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(a,!0).forEach(function(t){Object(n["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var u=[{title:"状态",scopedSlots:{customRender:"RelationID"},width:"60"},{title:"服务类型",scopedSlots:{customRender:"ServiceType"},width:"60"},{title:"账号类型",scopedSlots:{customRender:"AccountType"},width:"60"},{title:"账户",dataIndex:"AccountNumber",width:"120"},{title:"户名",dataIndex:"AccountName",width:"120"},{title:"操作",scopedSlots:{customRender:"action"}}],p={components:{ModelDiff:i["default"]},props:{visible:{type:Object,default:function(){return{show:!1,faDetail:{},comName:"",ServiceTypeObj:{},ServiceTypeArray:[],SBAccountTypeArray:[],SBAccountType:{},UserArray:{}}}}},data:function(){return{columns:u,confirmLoading:!1,accountFormSearch:{pageSize:5,current:1,total:0,Keyword:""},form:this.$form.createForm(this),accountForm:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],selectReq:[{required:!0,message:"请输入"}]},modal:{diff:{show:!1}},dataSource:[],showconfigureLayer:!1,selectCityCode:"",cityListArray:[],CityCode:"",selectSbtype:"",RegionListArray:[]}},created:function(){this.init()},methods:{init:function(){var e=this;c["a"].post("/api/company/com/ComBranchList").then(function(t){0===t.code&&(e.cityListArray=t.data.rows)}).catch(function(e){console.log(e)}),this.initPage()},initPage:function(){this.searchAccount(1)},searchAccount:function(e){var t=this,a={};console.log(e),t.accountFormSearch.current=e,a=l({},t.accountFormSearch),a.ComOrgID=t.visible.faDetail.ComOrgID,t.$loading.open(),c["a"].post("/api/company/ComOrganization/AccountList",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.accountFormSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},connect:function(e){var t=this;this.$confirm({title:"确认关联这条信息?",content:"",onOk:function(){c["a"].post("/api/company/ComOrganization/SetRealtion",{ComOrgID:t.visible.faDetail.ComOrgID,SBAccountID:e.ID}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},cancleConnect:function(e){var t=this;t.$confirm({title:"确认取消关联该账户?",content:"点击确定确认。",onOk:function(){c["a"].post("/api/company/ComOrganization/DelRealtion",{SBAccountID:e.ID}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},configureConnect:function(e){this.cityChange(this.CityCode),c["a"].post("/api/Company/com/MySelf").then(function(e){0===e.code&&(t.Userid=e.data.Operator.Userid,t.accountForm.setFieldsValue({OrderUserName:t.visible.UserArray[e.data.Operator.Userid]}))}).catch(function(e){console.log(e)});var t=this;t.selectSbtype="",t.showconfigureLayer=!0,this.accountForm.resetFields()},configureOk:function(e){var t=this,a={};t.accountForm.validateFields(function(e,o){e||(a=o,a.ComOrgID=t.visible.faDetail.ComOrgID,a.YXUserId=t.Userid,c["a"].post("/api/company/SBAccount/Add",a).then(function(e){0===e.code?(t.showconfigureLayer=!1,t.initPage(),t.$message.success(e.msg)):t.$message.error(e.msg)}).catch(function(e){console.log(e)}))})},handleOverCancel:function(e){this.showconfigureLayer=!1},cityChange:function(e){e&&(this.selectCityCode=e,this.getRegion(e))},getRegion:function(e){var t=this;c["a"].post("/api/Dim/Enum/GetRegionByCityCode",{CityCode:e}).then(function(e){0===e.code&&(t.RegionListArray=e.data.Region)}).catch(function(e){console.log(e)})},sbtypeChange:function(e){console.log(e),this.selectSbtype=e},cardinalityDiff:function(e){this.modal.diff={show:!0,faDetail:e,AccountName:e.AccountName}}}},m=p,d=(a("12e8"),a("2877")),f=Object(d["a"])(m,o,r,!1,null,"40681fbe",null);t["default"]=f.exports},a93b:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,centered:"",width:700,footer:!1,zIndex:1002},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  （"+e._s(e.visible.AccountName?e.visible.AccountName:"")+"）人厂基数差\n")]),a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{span:24,align:"right"}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:e.initPage}},[e._v("刷新")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:e.addCharge}},[e._v("添加")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ORLZGUID"},scopedSlots:e._u([{key:"BeginDate",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(null==o.BeginDate?"":e.moment(o.BeginDate).format("YYYY-MM"))+"\n      ")])}},{key:"EndDate",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(null==o.EndDate?"":e.moment(o.EndDate).format("YYYY-MM"))+"\n      ")])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("a-modal",{attrs:{title:"添加人厂基数差",visible:e.showCreateLayer,"confirm-loading":e.confirmLoading,zIndex:1003,centered:""},on:{ok:e.createOk,cancel:e.createCancel}},[a("a-form",{attrs:{form:e.createForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"开始月份",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["BeginDate",{rules:e.AFormImportRules.iptInputReq}],expression:"['BeginDate',{rules:AFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM",allowClear:!1}})],1)],1),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"人厂基数差",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["DiffPrice",{rules:e.AFormImportRules.iptInputReq}],expression:"['DiffPrice',{rules:AFormImportRules.iptInputReq}]"}],attrs:{placeholder:"请输入"}})],1)],1)],1)],1)])],1)],2)},r=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),c=a("b775"),i=a("c32d"),s=a.n(i);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach(function(t){Object(n["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var p=[{title:"开始月份",scopedSlots:{customRender:"BeginDate"}},{title:"结束月份",scopedSlots:{customRender:"EndDate"}},{title:"金额",dataIndex:"DiffPrice"}],m={props:{show:{type:Object,default:function(){return{show:!1}}}},components:{},data:function(){var e;return e={visible:{show:!1,faDetail:{AccountName:""},sbType:{},sbTypeList:[],type:"",AccountName:""},advanced:!0,columns:p},Object(n["a"])(e,"visible",!1),Object(n["a"])(e,"confirmLoading",!1),Object(n["a"])(e,"formSearch",{pageSize:10,current:1,total:0}),Object(n["a"])(e,"count","5"),Object(n["a"])(e,"form",this.$form.createForm(this)),Object(n["a"])(e,"AFormImportRules",{iptInputReq:[{required:!0,message:"请输入"}]}),Object(n["a"])(e,"createForm",this.$form.createForm(this)),Object(n["a"])(e,"dataSource",[]),Object(n["a"])(e,"UserArray",[]),Object(n["a"])(e,"modal",{detail:{show:!1}}),Object(n["a"])(e,"moment",s.a),Object(n["a"])(e,"showCreateLayer",!1),Object(n["a"])(e,"searchData",[]),Object(n["a"])(e,"ComServiceGuid",""),e},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.dataSource=[],this.form.resetFields()},init:function(){var e=this;e.pagechange(1)},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=u({},t.formSearch),console.log(t.visible.faDetail),a.SBAccountID=t.visible.faDetail.ID,t.$loading.open(),c["a"].post("/api/company/SBAccount/DiffList",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},addCharge:function(){this.showCreateLayer=!0},createOk:function(){var e=this;this.createForm.validateFields(function(t,a){t||(e.$loading.open(),c["a"].post("/api/company/SBAccount/DiffAdd",{SBAccountID:e.visible.faDetail.ID,DiffPrice:a.DiffPrice,BeginDate:a.BeginDate}).then(function(t){0===t.code?(e.$message.success(t.msg),e.initPage(),e.createCancel()):(e.$loading.close(),e.$message.error(t.msg))}).catch(function(e){console.log(e)}))})},createCancel:function(){this.showCreateLayer=!1,this.createForm.resetFields()}}},d=m,f=a("2877"),h=Object(f["a"])(d,o,r,!1,null,null,null);t["default"]=h.exports}}]);