(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a99b103","chunk-0e346534","chunk-3f21affe"],{1919:function(t,e,a){"use strict";var o=a("d302"),r=a.n(o);r.a},"5dbc":function(t,e,a){var o=a("d3f4"),r=a("8b97").set;t.exports=function(t,e,a){var n,i=e.constructor;return i!==a&&"function"==typeof i&&(n=i.prototype)!==a.prototype&&o(n)&&r&&r(t,n),t}},"5efd":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:!1},on:{cancel:t.onClose}},[a("template",{slot:"title"},[t._v("\n  详情\n")]),a("div",[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.Keyword,callback:function(e){t.$set(t.formSearch,"Keyword",e)},expression:"formSearch.Keyword"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.initPage}},[t._v("查询")]),79==t.Role?a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.addCharge}},[t._v("添加")]):t._e()],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"ORLZGUID"},scopedSlots:t._u([{key:"Type",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n            "+t._s(1==o.Type?"收入":"支出")+"\n            ")])}},{key:"BeginDate",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n              "+t._s(null==o.BeginDate?"":t.moment(o.BeginDate).format("YYYY-MM"))+"\n            ")])}},{key:"EndDate",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n              "+t._s(null==o.EndDate?"":t.moment(o.EndDate).format("YYYY-MM"))+"\n            ")])}},{key:"action",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[79==t.Role&&20==t.visible.faDetail.BillingMode&&1==o.Type?a("a",{on:{click:function(e){return t.deleteCharge(o)}}},[t._v("删除")]):t._e()])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2),a("a-modal",{attrs:{title:"添加",visible:t.showCreateLayer,"confirm-loading":t.confirmLoading,"z-index":1001,centered:""},on:{ok:t.createOk,cancel:t.createCancel}},[a("a-form",{attrs:{form:t.createForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"金额",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Amount",{rules:t.AFormImportRules.iptInputReq}],expression:"['Amount',{rules:AFormImportRules.iptInputReq}]"}],attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"开始月份",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["BeginDate",{rules:t.AFormImportRules.iptInputReq}],expression:"['BeginDate',{rules:AFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM",allowClear:!1}})],1)],1),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"结束月份",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["EndDate",{rules:t.AFormImportRules.iptInputReq}],expression:"['EndDate',{rules:AFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM",allowClear:!1}})],1)],1),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注:",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{rules:t.AFormImportRules.iptInputReq}],expression:"['Remarks',{rules:AFormImportRules.iptInputReq}]"}],attrs:{row:"4"}})],1)],1)],1)],1)])],1)],2)},r=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=(a("c5f6"),a("b775")),c=a("c32d"),s=a.n(c);function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,o)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach(function(e){Object(n["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var f=[{title:"公司",dataIndex:"ComName"},{title:"类型",scopedSlots:{customRender:"Type"}},{title:"支出金额",dataIndex:"OutAmount"},{title:"收入金额",dataIndex:"InAmount"},{title:"创建时间",dataIndex:"CreateTime"},{title:"开始日期",scopedSlots:{customRender:"BeginDate"}},{title:"结束日期",scopedSlots:{customRender:"EndDate"}},{title:"备注",dataIndex:"Remarks"},{title:"操作",scopedSlots:{customRender:"action"}}],p={props:{show:{type:Object,default:function(){return{show:!1}}},Role:{type:Number,default:""}},components:{},data:function(){var t;return t={visible:{show:!1,faDetail:{},sbType:{},sbTypeList:[],type:""},advanced:!0,columns:f},Object(n["a"])(t,"visible",!1),Object(n["a"])(t,"confirmLoading",!1),Object(n["a"])(t,"formSearch",{pageSize:10,current:1,total:0,Keyword:""}),Object(n["a"])(t,"count","5"),Object(n["a"])(t,"form",this.$form.createForm(this)),Object(n["a"])(t,"AFormImportRules",{iptInputReq:[{required:!0,message:"请输入"}]}),Object(n["a"])(t,"createForm",this.$form.createForm(this)),Object(n["a"])(t,"dataSource",[]),Object(n["a"])(t,"UserArray",[]),Object(n["a"])(t,"modal",{detail:{show:!1}}),Object(n["a"])(t,"moment",s.a),Object(n["a"])(t,"showCreateLayer",!1),Object(n["a"])(t,"searchData",[]),Object(n["a"])(t,"ComServiceGuid",""),t},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.dataSource=[],this.form.resetFields()},init:function(){var t=this;t.pagechange(1)},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a={};e.formSearch.current=t,a=u({},e.formSearch),a.ComServiceGuid=e.visible.faDetail.ComServiceGuid,e.$loading.open(),i["a"].post("/api/company/cost/DetailList",a).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},detail:function(t){var e=this;this.modal.detail={show:!0,ORLZGUID:t.ORLZGUID,sbType:e.sbType,ChargingCycle:e.ChargingCycle,ServiceType:e.ServiceType}},addCharge:function(){this.showCreateLayer=!0},createOk:function(){var t=this;this.createForm.validateFields(function(e,a){e||(t.$loading.open(),i["a"].post("/api/company/cost/Add",{ComServiceGuid:t.visible.faDetail.ComServiceGuid,Amount:a.Amount,BeginDate:a.BeginDate,EndDate:a.EndDate,Remarks:a.Remarks}).then(function(e){0===e.code?(t.$message.success(e.msg),t.initPage(),t.createCancel()):(t.$loading.close(),t.$message.error(e.msg))}).catch(function(t){console.log(t)}))})},createCancel:function(){this.showCreateLayer=!1,this.createForm.resetFields(),this.searchData=[]},searchCompany:function(t,e){var a=this;i["a"].post("/api/Company/Service/List",{Keyword:t,Current:1,PageSize:99,ServiceType:"20"}).then(function(t){0===t.code&&(a.companyList=t.data.rows,console.log(a.companyList),e(t.data.rows))}).catch(function(t){console.log(t)})},fetch:function(t,e){this.companyName=t,this.searchCompany(t,e)},handleSearch:function(t){var e=this;this.fetch(t,function(t){return e.searchData=t}),console.log(this.searchData)},handleChange:function(t){var e=this;console.log(t),this.companyName=t,t&&this.fetch(t,function(t){return e.searchData=t})},deleteCharge:function(t){var e=this;e.$confirm({title:"确认删除这条预收费信息?",content:"点击确定删除。",onOk:function(){i["a"].post("/api/company/cost/Delete",{ComCostGuid:t.ComCostGuid}).then(function(t){0===t.code?(e.$message.success(t.msg),e.initPage()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},onCancel:function(){}})}}},m=p,d=a("2877"),h=Object(d["a"])(m,o,r,!1,null,null,null);e["default"]=h.exports},"8b97":function(t,e,a){var o=a("d3f4"),r=a("cb7c"),n=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,a){return n(t,a),e?t.__proto__=a:o(t,a),t}}({},!1):void 0),check:n}},aa77:function(t,e,a){var o=a("5ca1"),r=a("be13"),n=a("79e5"),i=a("fdef"),c="["+i+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t,e,a){var r={},c=n(function(){return!!i[t]()||s[t]()!=s}),l=r[t]=c?e(p):i[t];a&&(r[a]=l),o(o.P+o.F*c,"String",r)},p=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},c5f6:function(t,e,a){"use strict";var o=a("7726"),r=a("69a8"),n=a("2d95"),i=a("5dbc"),c=a("6a99"),s=a("79e5"),l=a("9093").f,u=a("11e9").f,f=a("86cc").f,p=a("aa77").trim,m="Number",d=o[m],h=d,g=d.prototype,y=n(a("2aeb")(g))==m,b="trim"in String.prototype,v=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():p(e,3);var a,o,r,n=e.charCodeAt(0);if(43===n||45===n){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var i,s=e.slice(2),l=0,u=s.length;l<u;l++)if(i=s.charCodeAt(l),i<48||i>r)return NaN;return parseInt(s,o)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof d&&(y?s(function(){g.valueOf.call(a)}):n(a)!=m)?i(new h(v(e)),a,d):v(e)};for(var S,w=a("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;w.length>C;C++)r(h,S=w[C])&&!r(d,S)&&f(d,S,u(h,S));d.prototype=g,g.constructor=d,a("2aba")(o,m,d)}},d302:function(t,e,a){},e931:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.ComName,callback:function(e){t.$set(t.formSearch,"ComName",e)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.initPage}},[t._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"ComCostGuid"},scopedSlots:t._u([{key:"Type",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n                "+t._s(20==o.BillingMode?"预收费":"后收费")+"\n              ")])}},{key:"diff",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n                "+t._s(null==o.InAmount?"":(o.InAmount-o.OutAmount).toFixed(2))+"\n              ")])}},{key:"action",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(o)}}},[t._v("详情")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2),a("cost-detail",{ref:"cost",attrs:{Role:this.role,show:t.modal.cost},on:{refresh:t.pagerefresh}})],1)],1)],1)},r=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=(a("c5f6"),a("b775")),c=a("5efd"),s=a("c32d"),l=a.n(s);function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,o)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach(function(e){Object(n["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var p=[{title:"公司",dataIndex:"ComName"},{title:"类型",scopedSlots:{customRender:"Type"}},{title:"总收入",dataIndex:"InAmount"},{title:"总支出",dataIndex:"OutAmount"},{title:"余额",scopedSlots:{customRender:"diff"}},{title:"操作",scopedSlots:{customRender:"action"}}],m={props:{role:{type:Number,default:0},BillingMode:{type:Number,default:0}},components:{CostDetail:c["default"]},data:function(){return{advanced:!0,columns:p,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,BillingMode:"",ComName:""},count:"5",form:this.$form.createForm(this),AFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}]},createForm:this.$form.createForm(this),modal:{cost:{show:!1}},moment:l.a,dataSource:[],showCreateLayer:!1,companyList:[],companyName:"",searchData:[]}},mounted:function(){var t=this;t.init()},methods:{init:function(){var t=this;t.pagechange(1)},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a={};e.formSearch.current=t,a=f({},e.formSearch),a.role=e.role,a.BillingMode=e.BillingMode,e.$loading.open(),i["a"].post("/api/company/cost/SummaryList",a).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},detail:function(t){this.modal.cost={show:!0,faDetail:t}},deleteCharge:function(t){var e=this;e.$confirm({title:"确认删除这条预收费信息?",content:"点击确定删除。",onOk:function(){i["a"].post("/api/company/cost/Delete",{ComCostGuid:t.ComCostGuid}).then(function(t){0===t.code?(e.$message.success(t.msg),e.initPage()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},onCancel:function(){}})}}},d=m,h=(a("1919"),a("2877")),g=Object(h["a"])(d,o,r,!1,null,null,null);e["default"]=g.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);