(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79258c52","chunk-2d0cc5a8","chunk-2d0e6c08"],{"2e3f":function(e,t,o){},"4e23":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:900,footer:!1},on:{cancel:e.onClose}},[o("template",{slot:"title"},[e._v("\n  详情\n")]),o("div",[o("a-form",{attrs:{form:e.form,layout:"horizontal"}},[o("div",{class:e.advanced?null:"fold"},[o("a-row",{attrs:{gutter:10}},[o("a-col",{attrs:{md:8}},[o("a-form-item",{attrs:{label:"社保单位",labelCol:{span:6},wrapperCol:{span:18}}},[o("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.Keyword,callback:function(t){e.$set(e.formSearch,"Keyword",t)},expression:"formSearch.Keyword"}})],1)],1),o("a-col",{attrs:{md:7}},[o("a-form-item",{attrs:{label:"账号类型",labelCol:{span:7},wrapperCol:{span:17}}},[o("a-select",{attrs:{allowClear:!0},model:{value:e.formSearch.AccountType,callback:function(t){e.$set(e.formSearch,"AccountType",t)},expression:"formSearch.AccountType"}},e._l(e.SBAccountTypeArray,function(t){return o("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),o("a-col",{attrs:{span:6}},[o("a-form-item",[o("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),o("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ORLZGUID"},scopedSlots:e._u([{key:"RelationID",fn:function(t,n){return o("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(n.RelationID?"已关联":"未关联")+"\n        ")])}},{key:"AccountType",fn:function(t,n){return o("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.SBAccountType[n.AccountType])+"\n        ")])}},{key:"ServiceType",fn:function(t,n){return o("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.ServiceTypeObj[n.ServiceType])+"\n        ")])}},{key:"action",fn:function(t,n){return o("span",{staticStyle:{"text-align":"right"}},[null==n.RelationID?o("a",{on:{click:function(t){return e.connect(n)}}},[e._v("关联")]):e._e()])}}])},[o("template",{slot:"footer"},[o("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],2)},c=[],a=(o("8e6e"),o("456d"),o("ac6a"),o("bd86")),r=o("b775"),i=o("c32d"),s=o.n(i);function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(o,!0).forEach(function(t){Object(a["a"])(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var p=[{title:"状态",scopedSlots:{customRender:"RelationID"},width:"60"},{title:"服务类型",scopedSlots:{customRender:"ServiceType"},width:"60"},{title:"账号类型",scopedSlots:{customRender:"AccountType"},width:"60"},{title:"账户",dataIndex:"AccountNumber",width:"120"},{title:"户名",dataIndex:"AccountName",width:"120"},{title:"操作",scopedSlots:{customRender:"action"}}],f={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},components:{},data:function(){var e;return e={visible:{show:!1,faDetail:{}},advanced:!0,columns:p},Object(a["a"])(e,"visible",!1),Object(a["a"])(e,"confirmLoading",!1),Object(a["a"])(e,"formSearch",{pageSize:5,current:1,total:0,Keyword:""}),Object(a["a"])(e,"count","5"),Object(a["a"])(e,"form",this.$form.createForm(this)),Object(a["a"])(e,"AFormImportRules",{selected:[{required:!0,message:"请选择"}]}),Object(a["a"])(e,"dataSource",[]),Object(a["a"])(e,"SBAccountType",{}),Object(a["a"])(e,"moment",s.a),Object(a["a"])(e,"ServiceTypeObj",{}),Object(a["a"])(e,"ServiceTypeArray",[]),Object(a["a"])(e,"SBAccountTypeArray",[]),e},watch:{show:function(e,t){var o=this;o.visible=e}},created:function(){var e=this;this.$watch("show",function(t,o){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.dataSource=[],this.form.resetFields()},init:function(){var e=this;20==e.visible.faDetail.ServiceType?e.formSearch.Keyword=e.visible.faDetail.ComName:e.formSearch.Keyword="",r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ServiceType","SBAccountType"]}).then(function(t){0===t.code?(console.log(t),e.ServiceTypeArray=t.data.ServiceType,e.SBAccountTypeArray=t.data.SBAccountType,t.data.ServiceType.forEach(function(t,o){e.ServiceTypeObj[t.key]=t.text}),t.data.SBAccountType.forEach(function(t,o){e.SBAccountType[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,o={};t.formSearch.current=e,o=u({},t.formSearch),o.ComServiceGuid=t.visible.faDetail.ComServiceGuid,console.log(o),t.$loading.open(),r["a"].post("/api/company/SBAccount/AccountList",o).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},connect:function(e){var t=this;this.$confirm({title:"确认关联这条信息?",content:"",onOk:function(){r["a"].post("/api/company/SBAccount/SetRealtion",{ComServiceGuid:t.visible.faDetail.ComServiceGuid,SBAccountID:e.ID}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})}}},m=f,d=o("2877"),h=Object(d["a"])(m,n,c,!1,null,null,null);t["default"]=h.exports},"99a3":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:900,footer:null},on:{cancel:e.onClose}},[o("template",{slot:"title"},[e._v("\n  社保账户详情\n")]),o("div",[o("a-table",{attrs:{columns:e.accountcolumns,dataSource:e.SBAccount,pagination:!1,rowKey:"ID",size:"middle"},scopedSlots:e._u([{key:"AccountType",fn:function(t,n){return o("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.visible.AccountType[n.AccountType])+"\n      ")])}},{key:"action",fn:function(t,n){return o("span",{},[o("a",{on:{click:function(t){return e.cancleConnect(n)}}},[e._v("取消关联")])])}}])})],1)],2)},c=[],a=o("b775"),r=o("c32d"),i=o.n(r),s=[{title:"类型",scopedSlots:{customRender:"AccountType"}},{title:"账户",dataIndex:"AccountName"},{title:"户名",dataIndex:"AccountNumber"},{title:"备注",dataIndex:"Remarks"},{title:"操作",scopedSlots:{customRender:"action"}}],l={components:{},props:{show:{type:Object,default:function(){return{show:!1}}}},data:function(){return{accountcolumns:s,visible:{show:!1,ServiceType:{},AccountType:{},ComServiceGuid:""},form:this.$form.createForm(this),modal:{},confirmLoading:!1,moment:i.a,SBAccount:[],AccountType:{}}},watch:{show:function(e,t){var o=this;o.visible=e}},created:function(){var e=this;this.$watch("show",function(t,o){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1},init:function(){var e=this;a["a"].post("/api/company/SBAccount/Detail",{ComServiceGuid:e.visible.ComServiceGuid}).then(function(t){0===t.code&&(e.SBAccount=t.data.accountList)}).catch(function(e){console.log(e)})},cancleConnect:function(e){var t=this;t.$confirm({title:"确认取消关联该账户?",content:"点击确定确认。",onOk:function(){a["a"].post("/api/company/SBAccount/DelRealtion",{RelationID:e.RelationID}).then(function(e){0===e.code?(t.$message.success(e.msg),t.init()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})}}},u=l,p=o("2877"),f=Object(p["a"])(u,n,c,!1,null,"24abe57e",null);t["default"]=f.exports},bdc3:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-layout",[o("a-layout-content",[o("a-card",{attrs:{bordered:!1}},[o("div",[o("a-form",{attrs:{form:e.form,layout:"horizontal"}},[o("div",{class:e.advanced?null:"fold"},[o("a-row",{attrs:{gutter:10}},[o("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[o("a-form-item",{attrs:{label:"公司名称",labelCol:{span:7},wrapperCol:{span:16}}},[o("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),o("a-col",{attrs:{md:7,lg:7,xl:6,xxl:5}},[o("a-form-item",{attrs:{label:"服务类型",labelCol:{span:7},wrapperCol:{span:16}}},[o("a-select",{attrs:{allowClear:!0},model:{value:e.formSearch.ServiceType,callback:function(t){e.$set(e.formSearch,"ServiceType",t)},expression:"formSearch.ServiceType"}},e._l(e.ServiceTypeArray,function(t){return o("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),o("a-col",{attrs:{md:7,lg:7,xl:6,xxl:4}},[o("a-form-item",{attrs:{label:"未绑定类型",labelCol:{span:7},wrapperCol:{span:16}}},[o("a-select",{attrs:{allowClear:!0},model:{value:e.formSearch.NoSbtype,callback:function(t){e.$set(e.formSearch,"NoSbtype",t)},expression:"formSearch.NoSbtype"}},e._l(e.SBAccountTypeArray,function(t){return o("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),o("a-col",{attrs:{span:5}},[o("a-form-item",[o("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),o("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ComServiceGuid"},scopedSlots:e._u([{key:"account",fn:function(t,n){return o("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(n.accounts.length>0?"是":"否")+"\n        ")])}},{key:"ServiceType",fn:function(t,n){return o("span",{staticStyle:{"text-align":"right"}},[e._v("\n              "+e._s(e.ServiceTypeObj[n.ServiceType])+"\n        ")])}},{key:"GJJServiceType",fn:function(t,n){return o("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.ServiceTypeObj[n.GJJServiceType])+"\n        ")])}},{key:"KefuUserid",fn:function(t,n){return o("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.UserArray[n.KefuUserid])+"\n        ")])}},{key:"action",fn:function(t,n){return o("span",{staticStyle:{"text-align":"right"}},[o("a",{on:{click:function(t){return e.detail(n)}}},[e._v("详情")]),o("a-divider",{attrs:{type:"vertical"}}),o("a",{on:{click:function(t){return e.connectAccount(n)}}},[e._v("关联社保账户")])],1)}}])},[o("template",{slot:"footer"},[o("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)],1),o("modal-detail",{attrs:{show:e.modal.detail,refresh:e.pagerefresh}}),o("modal-connect-account",{attrs:{show:e.modal.connectaccount,refresh:e.pagerefresh}})],1)},c=[],a=(o("8e6e"),o("456d"),o("bd86")),r=(o("ac6a"),o("b775")),i=o("4e23"),s=o("99a3");function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(o,!0).forEach(function(t){Object(a["a"])(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var p=[{title:"派出公司",dataIndex:"GYSName"},{title:"派出公司",dataIndex:"GYSName"},{title:"公司名称",dataIndex:"ComName"},{title:"是否有社保账户",scopedSlots:{customRender:"account"},align:"center"},{title:"服务类型",scopedSlots:{customRender:"ServiceType"}},{title:"公积金服务类型",scopedSlots:{customRender:"GJJServiceType"}},{title:"客服",scopedSlots:{customRender:"KefuUserid"}},{title:"操作",scopedSlots:{customRender:"action"}}],f={components:{ModalConnectAccount:i["default"],ModalDetail:s["default"]},props:{},data:function(){return{advanced:!0,columns:p,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,ComName:"",account:"",ServiceType:"",NoSbtype:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],modal:{connectaccount:{show:!1},detail:{show:!1}},ServiceTypeObj:{},ServiceTypeArray:[],callback:function(){},SBAccountType:{},SBAccountTypeArray:[],accountArray:[],UserArray:{},cityList:[]}},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;r["a"].post("/api/Dim/Enum/DimDecode",{Names:["User"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User)}).catch(function(e){console.log(e)}),r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ServiceType","SBAccountType"]}).then(function(t){0===t.code?(console.log(t),e.ServiceTypeArray=t.data.ServiceType,e.SBAccountTypeArray=t.data.SBAccountType,t.data.ServiceType.forEach(function(t,o){e.ServiceTypeObj[t.key]=t.text}),t.data.SBAccountType.forEach(function(t,o){e.SBAccountType[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,o={};t.formSearch.current=e,o=u({},t.formSearch),this.form.validateFields(function(e,n){t.$loading.open(),r["a"].post("/api/company/SBAccount/List",o).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})})},connectAccount:function(e){this.modal.connectaccount={show:!0,faDetail:e}},detail:function(e){var t=this;this.modal.detail={show:!0,ServiceType:t.ServiceTypeObj,ComServiceGuid:e.ComServiceGuid,AccountType:t.SBAccountType}}}},m=f,d=(o("eab1"),o("2877")),h=Object(d["a"])(m,n,c,!1,null,null,null);t["default"]=h.exports},eab1:function(e,t,o){"use strict";var n=o("2e3f"),c=o.n(n);c.a}}]);