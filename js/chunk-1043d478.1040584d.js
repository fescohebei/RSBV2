(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1043d478","chunk-724a81e8"],{"0a83":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:6,xxl:6}},[a("a-form-item",{attrs:{label:"年月",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM",allowClear:!1},model:{value:e.formSearch.nianyue,callback:function(t){e.$set(e.formSearch,"nianyue",t)},expression:"formSearch.nianyue"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")]),98==e.role?a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.createdBill}},[e._v("生成")]):e._e()],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"index"},scopedSlots:e._u([{key:"BillStatus",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.BillStatus[r.BillStatus])+"\n        ")])}},{key:"ServiceType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.ServiceType[r.ServiceType])+"\n        ")])}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[0==r.BillStatus&&"98"==e.role?a("a",{on:{click:function(t){return e.surebill(r)}}},[e._v("确认")]):e._e(),0==r.BillStatus?a("a-divider",{attrs:{type:"vertical"}}):e._e(),0==r.BillStatus&&"98"==e.role?a("a",{on:{click:function(t){return e.deletebill(r)}}},[e._v("删除")]):e._e(),0==r.BillStatus?a("a-divider",{attrs:{type:"vertical"}}):e._e(),a("a",{on:{click:function(t){return e.exportbill(r)}}},[e._v("导出")])],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)],1),a("a-modal",{attrs:{title:"生成",visible:e.showCreateLayer,"confirm-loading":e.confirmLoading,"z-index":1001,centered:""},on:{ok:e.createOk,cancel:e.createCancel}},[a("a-form",{attrs:{form:e.createForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"公司",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComServiceGuid",{rules:e.AFormImportRules.iptInputReq}],expression:"['ComServiceGuid',{rules:AFormImportRules.iptInputReq}]"}],attrs:{"show-search":"",placeholder:"请输入后选择","default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":null,width:350},on:{search:e.handleSearch}},[e.searchData.length>0?e._l(e.searchData,function(t){return a("a-select-option",{key:t.ComServiceGuid},[e._v("\n                    "+e._s(t.ComName)+"\n                  ")])}):[a("a-select-option",{key:0,attrs:{disabled:!0}},[e._v("\n                    没有该公司，请注意检查是否多空格。\n                  ")])]],2)],1)],1),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"年月",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["nianyue",{rules:e.AFormImportRules.iptInputReq}],expression:"['nianyue',{rules:AFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM",allowClear:!1}})],1)],1)],1)],1)])],1)],1)},o=[],n=(a("8e6e"),a("456d"),a("bd86")),i=(a("ac6a"),a("c5f6"),a("b775"));function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach(function(t){Object(n["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var l=[{title:"状态",scopedSlots:{customRender:"BillStatus"}},{title:"公司名称",dataIndex:"ComName"},{title:"服务类型",scopedSlots:{customRender:"ServiceType"}},{title:"年月",dataIndex:"nianYue"},{title:"总金额",dataIndex:"AllMoney"},{title:"创建时间",dataIndex:"CreateTime"},{title:"操作",scopedSlots:{customRender:"action"}}],u={components:{},props:{role:{type:Number,default:""}},data:function(){return{advanced:!0,columns:l,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,ComName:"",type:"1"},form:this.$form.createForm(this),AFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}]},createForm:this.$form.createForm(this),create:{},dataSource:[],roles:[],modal:{add:{show:!1},detail:{show:!1},exporttransfer:{show:!1}},showHandoverLayer:!1,handover:{DepId:[],Userid:"",record:{}},UserArray:[],ServiceType:{},BillStatus:{},showCreateLayer:!1,companyList:[],companyName:"",searchData:[]}},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["User"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User)}).catch(function(e){console.log(e)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["ServiceType","BillStatus"]}).then(function(t){0===t.code?(t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),t.data.BillStatus.forEach(function(t,a){e.BillStatus[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)}),e.pagechange(1)},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=s({},t.formSearch),a.Role=t.role,this.form.validateFields(function(e,r){t.$loading.open(),i["a"].post("/api/order/ReceiveReal/ComList",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})})},detail:function(e){var t=this;this.modal.detail={show:!0,UserArray:t.UserArray,ServiceType:t.ServiceType,BillingMode:t.BillingMode,BuJiaoBillingType:t.BuJiaoBillingType,cityList:t.cityList,ComServiceGuid:e.ComServiceGuid}},surebill:function(e){var t=this;t.$confirm({title:"确认这条账单信息?",content:"点击确定确认。",onOk:function(){i["a"].post("/api/order/ReceiveReal/RECBillConfirm",{RECGuid:e.RECGuid}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},exportbill:function(e){var t=document.createElement("a");t.href="/api/order/ReceiveReal/Export?RECGuid="+e.RECGuid,t.click()},deletebill:function(e){var t=this;t.$confirm({title:"确认删除这条账单信息?",content:"点击确定删除。",onOk:function(){i["a"].post("/api/order/ReceiveReal/RECBillDeleted",{RECGuid:e.RECGuid}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},createdBill:function(){this.showCreateLayer=!0},createOk:function(){var e=this;this.createForm.validateFields(function(t,a){t||(e.$loading.open(),i["a"].post("/api/order/ReceiveReal/CreateBill",{ComServiceGuid:a.ComServiceGuid,nianyue:a.nianyue}).then(function(t){0===t.code?(e.$message.success(t.msg),e.initPage(),e.createCancel()):(e.$loading.close(),e.$message.error(t.msg))}).catch(function(e){console.log(e)}))})},createCancel:function(){this.showCreateLayer=!1,this.createForm.resetFields(),this.searchData=[]},searchCompany:function(e,t){var a=this;i["a"].post("/api/Company/Service/AllList",{Keyword:e,Current:1,PageSize:99,ServiceType:"20"}).then(function(e){0===e.code&&(a.companyList=e.data.rows,console.log(a.companyList),t(e.data.rows))}).catch(function(e){console.log(e)})},fetch:function(e,t){this.companyName=e,this.searchCompany(e,t)},handleSearch:function(e){var t=this;this.fetch(e,function(e){return t.searchData=e}),console.log(this.searchData)},handleChange:function(e){var t=this;console.log(e),this.companyName=e,e&&this.fetch(e,function(e){return t.searchData=e})}}},f=u,p=(a("2e3e"),a("2877")),d=Object(p["a"])(f,r,o,!1,null,null,null);t["default"]=d.exports},"2e3e":function(e,t,a){"use strict";var r=a("63da"),o=a.n(r);o.a},"5dbc":function(e,t,a){var r=a("d3f4"),o=a("8b97").set;e.exports=function(e,t,a){var n,i=t.constructor;return i!==a&&"function"==typeof i&&(n=i.prototype)!==a.prototype&&r(n)&&o&&o(e,n),e}},"63da":function(e,t,a){},"6f12":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("List",{attrs:{role:98}})},o=[],n=a("0a83"),i={components:{List:n["default"]},data:function(){return{}},mounted:function(){},methods:{}},c=i,s=a("2877"),l=Object(s["a"])(c,r,o,!1,null,null,null);t["default"]=l.exports},"8b97":function(e,t,a){var r=a("d3f4"),o=a("cb7c"),n=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,a){return n(e,a),t?e.__proto__=a:r(e,a),e}}({},!1):void 0),check:n}},aa77:function(e,t,a){var r=a("5ca1"),o=a("be13"),n=a("79e5"),i=a("fdef"),c="["+i+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(e,t,a){var o={},c=n(function(){return!!i[e]()||s[e]()!=s}),l=o[e]=c?t(p):i[e];a&&(o[a]=l),r(r.P+r.F*c,"String",o)},p=f.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},c5f6:function(e,t,a){"use strict";var r=a("7726"),o=a("69a8"),n=a("2d95"),i=a("5dbc"),c=a("6a99"),s=a("79e5"),l=a("9093").f,u=a("11e9").f,f=a("86cc").f,p=a("aa77").trim,d="Number",m=r[d],h=m,g=m.prototype,y=n(a("2aeb")(g))==d,v="trim"in String.prototype,S=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():p(t,3);var a,r,o,n=t.charCodeAt(0);if(43===n||45===n){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var i,s=t.slice(2),l=0,u=s.length;l<u;l++)if(i=s.charCodeAt(l),i<48||i>o)return NaN;return parseInt(s,r)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof m&&(y?s(function(){g.valueOf.call(a)}):n(a)!=d)?i(new h(S(t)),a,m):S(t)};for(var b,C=a("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;C.length>w;w++)o(h,b=C[w])&&!o(m,b)&&f(m,b,u(h,b));m.prototype=g,g.constructor=m,a("2aba")(r,d,m)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);