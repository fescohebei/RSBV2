(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-600cc80e","chunk-3f21affe","chunk-38e143fc"],{"3c09":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1200,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  详情\n")]),a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(t){e.$set(e.formSearch,"emName",t)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(t){e.$set(e.formSearch,"emCardID",t)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.init}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ORLZGUID"},scopedSlots:e._u([{key:"type",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(r.type)+"\n        ")])}},{key:"status",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},["申增"==r.type?[e._v("\n            "+e._s(1==r["申增状态"]?"成功":0==r["申增状态"]?"失败":"")+"\n          ")]:[e._v("\n            "+e._s(1==r["申减状态"]?"成功":0==r["申减状态"]?"失败":"")+"\n          ")]],2)}},{key:"sbType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.visible.sbType[r.sbType])+"\n        ")])}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},["申增"==r.type&&null==r["申增状态"]?a("a",{on:{click:function(t){return e.addfail(r)}}},[e._v("申增失败")]):e._e(),"申减"==r.type&&null==r["申减状态"]?a("a",{on:{click:function(t){return e.reducefail(r)}}},[e._v("申减失败")]):e._e()])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("a-modal",{attrs:{title:"申增失败",visible:e.showAddLayer,"confirm-loading":e.confirmLoading},on:{ok:e.addOk,cancel:e.addCancel}},[a("a-form",{attrs:{form:e.addForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{rules:e.AFormAddRules.remark}],expression:"['Remark',{rules:AFormAddRules.remark}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1),a("a-modal",{attrs:{title:"申减失败",visible:e.showReduceLayer,"confirm-loading":e.confirmLoading},on:{ok:e.reduceOk,cancel:e.reduceCancel}},[a("a-form",{attrs:{form:e.reduceForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{rules:e.AFormReduceRules.remark}],expression:"['Remark',{rules:AFormReduceRules.remark}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1)],2)},o=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=a("b775"),c=a("c32d"),s=a.n(c);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach(function(t){Object(n["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var u=[{title:"类型",scopedSlots:{customRender:"type"}},{title:"状态",scopedSlots:{customRender:"status"}},{title:"姓名",dataIndex:"姓名"},{title:"身份证号",dataIndex:"身份证号"},{title:"工资",dataIndex:"工资"},{title:"社保类型",scopedSlots:{customRender:"sbType"}},{title:"个人金额",dataIndex:"个人金额"},{title:"企业金额",dataIndex:"企业金额"},{title:"开始月份",dataIndex:"BeginMonthShow"},{title:"结束月份",dataIndex:"EndMonthShow"},{title:"运行操作月",dataIndex:"FirstBillMonthShow"},{title:"收费截止月份",dataIndex:"BillEndMonthShow"},{title:"操作",scopedSlots:{customRender:"action"}}],f={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,faDetail:{},sbType:{},sbTypeList:[],type:""},form:this.$form.createForm(this),orderDetail:{},confirmLoading:!1,modal:{},moment:s.a,formSearch:{pageSize:10,current:1,total:0,emName:"",emCardID:""},columns:u,dataSource:[],addForm:this.$form.createForm(this),AFormAddRules:{remark:[{required:!0,message:"请输入"}]},showAddLayer:!1,ORLZGUID:"",reduceForm:this.$form.createForm(this),AFormReduceRules:{remark:[{required:!0,message:"请输入"}]},showReduceLayer:!1}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.dataSource=[],this.form.resetFields()},init:function(){var e=this;e.pagechange(1)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=d({},t.formSearch),a.ORLZFGuid=t.visible.faDetail.ORLZFGuid,a.addsub=t.visible.type,t.$loading.open(),i["a"].post("/api/order/order_rlz/ComListDetail",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},addfail:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showAddLayer=!0},reducefail:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showReduceLayer=!0},addOk:function(){var e=this;e.addForm.validateFields(function(t,a){t||i["a"].post("/api/Order/Order_RLZ/SheBaoBack",{ORLZGUID:e.ORLZGUID,type:2,Remark:a.Remark}).then(function(t){0===t.code?(e.$message.success(t.msg),e.addCancel(),e.init()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},addCancel:function(){this.showAddLayer=!1,this.addForm.resetFields(),this.ORLZGUID=""},reduceOk:function(){var e=this;e.reduceForm.validateFields(function(t,a){t||i["a"].post("/api/Order/Order_RLZ/SheBaoBack",{ORLZGUID:e.ORLZGUID,type:4,Remark:a.Remark}).then(function(t){0===t.code?(e.$message.success(t.msg),e.reduceCancel(),e.init()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},reduceCancel:function(){this.showReduceLayer=!1,this.reduceForm.resetFields(),this.ORLZGUID=""}}},m=f,p=(a("c127"),a("2877")),h=Object(p["a"])(m,r,o,!1,null,"84a7d3d4",null);t["default"]=h.exports},4446:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:4,lg:4,xl:7,xxl:5}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:7,xxl:5}},[a("a-form-item",{attrs:{label:"月份",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!0,placeholder:"请选择月份"},on:{change:e.changeNianYue},model:{value:e.formSearch.nianyue,callback:function(t){e.$set(e.formSearch,"nianyue",t)},expression:"formSearch.nianyue"}})],1)],1),a("a-col",{attrs:{md:6,lg:7,xl:7,xxl:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"index"},scopedSlots:e._u([{key:"addAction",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[1==r.AddStatus?a("a",{on:{click:function(t){return e.detail(r,"add")}}},[e._v("申增详情")]):e._e(),1==r.AddStatus?a("a-divider",{attrs:{type:"vertical"}}):e._e(),1==r.AddStatus?a("a",{on:{click:function(t){return e.exportDlh(r,"add")}}},[e._v("导出申增")]):e._e()],1)}},{key:"subAction",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[1==r.SubStatus?a("a",{on:{click:function(t){return e.detail(r,"sub")}}},[e._v("申减详情")]):e._e(),1==r.SubStatus?a("a-divider",{attrs:{type:"vertical"}}):e._e(),1==r.SubStatus?a("a",{on:{click:function(t){return e.exportDlh(r,"sub")}}},[e._v("导出申减")]):e._e()],1)}},{key:"cancle",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[0===r.申增已处理&&0===r.申减已处理?a("a",{on:{click:function(t){return e.disslock(r)}}},[e._v("取消锁定")]):e._e()])}},{key:"finish",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[r["申减"]===r["申减已处理"]&&r["申增"]===r["申增已处理"]?a("span",[e._v("已完成")]):a("a",{staticStyle:{color:"red"}},[e._v("未完成")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("modal-detail",{attrs:{show:e.modal.detail},on:{refresh:e.pagerefresh}})],1)],1)],1)},o=[],n=(a("8e6e"),a("456d"),a("bd86")),i=(a("ac6a"),a("c5f6"),a("b775")),c=a("3c09"),s=a("c32d"),l=a.n(s);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach(function(t){Object(n["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var f=[{title:"完成状态",scopedSlots:{customRender:"finish"}},{title:"公司名称",dataIndex:"ComName"},{title:"年月",dataIndex:"年月"},{title:"申增社保数",dataIndex:"申增"},{title:"申减社保数",dataIndex:"申减"},{title:"申增操作",scopedSlots:{customRender:"addAction"}},{title:"申减操作",scopedSlots:{customRender:"subAction"}},{title:"取消操作",scopedSlots:{customRender:"cancle"}}],m={props:{role:{type:Number,default:""}},components:{ModalDetail:c["default"]},data:function(){return{advanced:!0,columns:f,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,ComName:""},count:"5",form:this.$form.createForm(this),resultForm:this.$form.createForm(this),AFormImportRules:{selected:[{required:!0,message:"请选择"}]},dataSource:[],UserArray:[],modal:{detail:{show:!1}},sbType:{},ChargingCycle:{},moment:l.a,ServiceType:{},showResultLayer:!1,ORLZGUID:"",sbTypeList:[]}},created:function(){var e=this;e.init()},methods:{init:function(){var e=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["sbType","ChargingCycle","ServiceType"]}).then(function(t){0===t.code?(e.sbTypeList=t.data.sbType,t.data.sbType.forEach(function(t,a){e.sbType[t.key]=t.text}),t.data.ChargingCycle.forEach(function(t,a){e.ChargingCycle[t.key]=t.text}),t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=u({},t.formSearch),a.nianyue?a.nianyue=t.formSearch.nianyue.format("YYYY-MM-DD"):a.nianyue="",t.$loading.open(),i["a"].post("/api/order/order_rlz/ComListFrozen",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},detail:function(e,t){var a=this;this.modal.detail={show:!0,faDetail:e,sbType:a.sbType,sbTypeList:a.sbTypeList,type:t}},downloadList:function(){var e=document.createElement("a");e.href="/api/Order/Order_RLZ/ExportOrderRLZ",e.click()},changeNianYue:function(e,t){this.formSearch.nianyue=""!=t?l()(t):void 0},exportDlh:function(e,t){var a=document.createElement("a");console.log("/api/order/order_rlz/ExportComList?ORLZFGuid="+e.ORLZFGuid+"&&addsub="+t),a.href="/api/order/order_rlz/ExportComList?ORLZFGuid="+e.ORLZFGuid+"&&addsub="+t,a.click()},disslock:function(e){var t=this;i["a"].post("/api/order/order_rlz/DeleteFrozen",{ORLZFGuid:e.ORLZFGuid,addsub:"add"}).then(function(e){t.$loading.close(),0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){t.$loading.close(),console.log(e)}),i["a"].post("/api/order/order_rlz/DeleteFrozen",{ORLZFGuid:e.ORLZFGuid,addsub:"sub"}).then(function(e){t.$loading.close(),0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){t.$loading.close(),console.log(e)})}}},p=m,h=a("2877"),g=Object(h["a"])(p,r,o,!1,null,null,null);t["default"]=g.exports},"5dbc":function(e,t,a){var r=a("d3f4"),o=a("8b97").set;e.exports=function(e,t,a){var n,i=t.constructor;return i!==a&&"function"==typeof i&&(n=i.prototype)!==a.prototype&&r(n)&&o&&o(e,n),e}},"8b97":function(e,t,a){var r=a("d3f4"),o=a("cb7c"),n=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,a){return n(e,a),t?e.__proto__=a:r(e,a),e}}({},!1):void 0),check:n}},aa77:function(e,t,a){var r=a("5ca1"),o=a("be13"),n=a("79e5"),i=a("fdef"),c="["+i+"]",s="​",l=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),u=function(e,t,a){var o={},c=n(function(){return!!i[e]()||s[e]()!=s}),l=o[e]=c?t(f):i[e];a&&(o[a]=l),r(r.P+r.F*c,"String",o)},f=u.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(d,"")),e};e.exports=u},ad79:function(e,t,a){},c127:function(e,t,a){"use strict";var r=a("ad79"),o=a.n(r);o.a},c5f6:function(e,t,a){"use strict";var r=a("7726"),o=a("69a8"),n=a("2d95"),i=a("5dbc"),c=a("6a99"),s=a("79e5"),l=a("9093").f,d=a("11e9").f,u=a("86cc").f,f=a("aa77").trim,m="Number",p=r[m],h=p,g=p.prototype,y=n(a("2aeb")(g))==m,b="trim"in String.prototype,v=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():f(t,3);var a,r,o,n=t.charCodeAt(0);if(43===n||45===n){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var i,s=t.slice(2),l=0,d=s.length;l<d;l++)if(i=s.charCodeAt(l),i<48||i>o)return NaN;return parseInt(s,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof p&&(y?s(function(){g.valueOf.call(a)}):n(a)!=m)?i(new h(v(t)),a,p):v(t)};for(var S,O=a("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;O.length>w;w++)o(h,S=O[w])&&!o(p,S)&&u(p,S,d(h,S));p.prototype=g,g.constructor=p,a("2aba")(r,m,p)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);