(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-568c9c84","chunk-075936a7"],{"13a8":function(e,t,a){"use strict";var r=a("16fb"),n=a.n(r);n.a},"16fb":function(e,t,a){},"5dbc":function(e,t,a){var r=a("d3f4"),n=a("8b97").set;e.exports=function(e,t,a){var o,c=t.constructor;return c!==a&&"function"==typeof c&&(o=c.prototype)!==a.prototype&&r(o)&&n&&n(e,o),e}},"5eae":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:5}},[a("a-form-item",{attrs:{label:"是否已经录入账户",labelCol:{span:10},wrapperCol:{span:12,offset:1}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.formSearch.account,callback:function(t){e.$set(e.formSearch,"account",t)},expression:"formSearch.account"}},[a("a-select-option",{key:"0"},[e._v("是")]),a("a-select-option",{key:"1"},[e._v("否")])],1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ComServiceGuid"},scopedSlots:e._u([{key:"sbAccount",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._l(r.accounts,function(t){return[10==t.AccountType?a("span",{key:t.ID,staticStyle:{"font-size":"12px"}},[e._v("账户："+e._s(t.AccountName)),a("br"),e._v("户名："+e._s(t.AccountNumber))]):e._e()]})],2)}},{key:"ylAccount",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._l(r.accounts,function(t){return[20==t.AccountType?a("span",{key:t.ID,staticStyle:{"font-size":"12px"}},[e._v("账户："+e._s(t.AccountName)),a("br"),e._v("户名："+e._s(t.AccountNumber))]):e._e()]})],2)}},{key:"gjjAccount",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._l(r.accounts,function(t){return[30==t.AccountType?a("span",{key:t.ID,staticStyle:{"font-size":"12px"}},[e._v("账户："+e._s(t.AccountName)),a("br"),e._v("户名："+e._s(t.AccountNumber))]):e._e()]})],2)}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(t){return e.configureConnect(r)}}},[e._v("配置账户")])])}},{key:"expandedRowRender",fn:function(t){return a("p",{staticStyle:{margin:"0"}},[e._v("\n          服务类型："+e._s(e.ServiceTypeObj[t.ServiceType])+"  \n          公积金服务类型："+e._s(e.ServiceTypeObj[t.GJJServiceType])+"  \n          客服："+e._s(e.UserArray[t.KefuUserid])+"\n        ")])}}])},[a("span",{attrs:{slot:"sbTitle"},slot:"sbTitle"},[e._v(e._s(e.SBAccountType["10"]))]),a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)],1),a("a-modal",{attrs:{title:"配置社保账户",visible:e.showconfigureLayer,"confirm-loading":e.confirmLoading,width:1e3},on:{ok:e.configureOk,cancel:e.handleOverCancel}},[a("a-form",{attrs:{layout:"horizontal"}},[a("div",[e._l(e.accountArray,function(t){return[a("a-row",{key:t.id,attrs:{gutter:10}},[a("a-col",{attrs:{md:11}},[a("a-form-item",{attrs:{label:e.SBAccountType[t.AccountType]+"账户",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.AccountName,callback:function(a){e.$set(t,"AccountName",a)},expression:"item.AccountName"}})],1)],1),a("a-col",{attrs:{md:7}},[a("a-form-item",{attrs:{label:"户名",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.AccountNumber,callback:function(a){e.$set(t,"AccountNumber",a)},expression:"item.AccountNumber"}})],1)],1),a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.Remarks,callback:function(a){e.$set(t,"Remarks",a)},expression:"item.Remarks"}})],1)],1)],1)]})],2)])],1)],1)},n=[],o=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),c=(a("c5f6"),a("b775"));function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(a,!0).forEach(function(t){Object(o["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var u=[{title:"公司名称",dataIndex:"ComName"},{slots:{title:"sbTitle"},scopedSlots:{customRender:"sbAccount"}},{title:"医疗账户",scopedSlots:{customRender:"ylAccount"}},{title:"公积金账户",scopedSlots:{customRender:"gjjAccount"}},{title:"操作",scopedSlots:{customRender:"action"}}],l={components:{},props:{ServiceType:{type:Number,default:""}},data:function(){var e;return e={advanced:!0,columns:u,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,ComName:"",account:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],dataLeads:[],dataDetail:[],roles:[],modal:{},checkComId:"",checkLineId:"",userid:"",expandedRowKeys:[],department:[],departmentKey:"",showClaimLayer:!1,childLine:{expanded:"",record:""},options:[],selectedOptionsCell:[],SaleUserid:"",showconfigureLayer:!1,configure:{DepId:[],Userid:"",record:{}},UserArray:[],DeptArray:[],cityList:[],ServiceTypeObj:{},BillingMode:{},BuJiaoBillingType:{},ServiceTypeArray:[],BillingModeArray:[],BuJiaoBillingTypeArray:[],callback:function(){},FlowType:{},FlowTypeArray:[]},Object(o["a"])(e,"showconfigureLayer",!1),Object(o["a"])(e,"configure",{}),Object(o["a"])(e,"SBAccountType",{}),Object(o["a"])(e,"accountArray",[]),e},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;c["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.DeptArray=t.data.Dept,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),c["a"].post("/api/Dim/Enum/GetEnum",{Names:["ServiceType","BillingMode","BuJiaoBillingType","FlowType","SBAccountType"]}).then(function(t){0===t.code?(console.log(t),e.ServiceTypeArray=t.data.ServiceType,e.BillingModeArray=t.data.BillingMode,e.BuJiaoBillingTypeArray=t.data.BuJiaoBillingType,e.FlowTypeArray=t.data.FlowType,t.data.ServiceType.forEach(function(t,a){e.ServiceTypeObj[t.key]=t.text}),t.data.BillingMode.forEach(function(t,a){e.BillingMode[t.key]=t.text}),t.data.BuJiaoBillingType.forEach(function(t,a){e.BuJiaoBillingType[t.key]=t.text}),t.data.FlowType.forEach(function(t,a){e.FlowType[t.key]=t.text}),t.data.SBAccountType.forEach(function(t,a){e.SBAccountType[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=s({},t.formSearch),a.ServiceType=t.ServiceType,this.form.validateFields(function(e,r){t.$loading.open(),c["a"].post("/api/company/SBAccount/List",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})})},configureConnect:function(e){var t=this;t.configure=e,c["a"].post("/api/company/SBAccount/Detail",{ComServiceGuid:e.ComServiceGuid}).then(function(e){0===e.code?(t.accountArray=e.data.accountList,t.showconfigureLayer=!0):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},configureOk:function(e){var t=this,a={};a=t.accountArray,t.accountArray.forEach(function(e){e.ComServiceGuid=t.configure.ComServiceGuid}),c["a"].post("/api/company/SBAccount/Add",a).then(function(e){0===e.code?(t.showconfigureLayer=!1,t.configure={},t.pagerefresh(),t.$message.success(e.msg)):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},handleOverCancel:function(e){this.showconfigureLayer=!1,this.configure={}}}},p=l,f=(a("13a8"),a("2877")),d=Object(f["a"])(p,r,n,!1,null,null,null);t["default"]=d.exports},"8b97":function(e,t,a){var r=a("d3f4"),n=a("cb7c"),o=function(e,t){if(n(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,a){return o(e,a),t?e.__proto__=a:r(e,a),e}}({},!1):void 0),check:o}},"9f09":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("List",{attrs:{ServiceType:20}})},n=[],o=a("5eae"),c={components:{List:o["default"]},data:function(){return{}},mounted:function(){},methods:{}},i=c,s=a("2877"),u=Object(s["a"])(i,r,n,!1,null,null,null);t["default"]=u.exports},aa77:function(e,t,a){var r=a("5ca1"),n=a("be13"),o=a("79e5"),c=a("fdef"),i="["+c+"]",s="​",u=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),p=function(e,t,a){var n={},i=o(function(){return!!c[e]()||s[e]()!=s}),u=n[e]=i?t(f):c[e];a&&(n[a]=u),r(r.P+r.F*i,"String",n)},f=p.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=p},c5f6:function(e,t,a){"use strict";var r=a("7726"),n=a("69a8"),o=a("2d95"),c=a("5dbc"),i=a("6a99"),s=a("79e5"),u=a("9093").f,l=a("11e9").f,p=a("86cc").f,f=a("aa77").trim,d="Number",m=r[d],y=m,g=m.prototype,h=o(a("2aeb")(g))==d,b="trim"in String.prototype,v=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():f(t,3);var a,r,n,o=t.charCodeAt(0);if(43===o||45===o){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+t}for(var c,s=t.slice(2),u=0,l=s.length;u<l;u++)if(c=s.charCodeAt(u),c<48||c>n)return NaN;return parseInt(s,r)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof m&&(h?s(function(){g.valueOf.call(a)}):o(a)!=d)?c(new y(v(t)),a,m):v(t)};for(var S,A=a("9e1e")?u(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;A.length>_;_++)n(y,S=A[_])&&!n(m,S)&&p(m,S,l(y,S));m.prototype=g,g.constructor=m,a("2aba")(r,d,m)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);