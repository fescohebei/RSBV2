(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3acfcf0e","chunk-999cdeae","chunk-63564024","chunk-71a88869"],{"10fe":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  详情1\n  ")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"员工姓名",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["姓名"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.ComName)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"服务类型",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.ServiceType[e.orderDetail.ServiceType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.orderDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"工资",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["工资"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"个人",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["个人金额"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"企业",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["企业金额"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"起始月份",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.BeginDate?e.moment(e.orderDetail.BeginDate).format("YYYY-MM"):"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"结束月份",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.EndDate?e.moment(e.orderDetail.EndDate).format("YYYY-MM"):"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"社保申报月",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.FirstBillMonth?e.moment(e.orderDetail.FirstBillMonth).format("YYYY-MM"):"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"收费周期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.ChargingCycle[e.orderDetail.ChargingCycle])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"收费截至月份",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.BillEndMonth?e.moment(e.orderDetail.BillEndMonth).format("YYYY-MM"):"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申增状态",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申增状态"]?e.orderDetail["申增状态"]?"成功":"失败":"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申增时间",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申增时间"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申减状态",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申减状态"]?e.orderDetail["申减状态"]?"成功":"失败":"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申减时间",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申减时间"])+"\n          ")])],1)],1)],1)],2)},o=[],n=a("b775"),s=a("c32d"),i=a.n(s),c={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:{},sbType:{},ChargingCycle:{},ServiceType:{}},form:this.$form.createForm(this),orderDetail:{},modal:{},moment:i.a}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail={},this.form.resetFields()},init:function(){var e=this;n["a"].post("/api/Order/Order_RLZ/Detail",{ORLZGUID:e.visible.ORLZGUID}).then(function(t){e.$loading.close(),0===t.code&&(e.orderDetail=t.data.rlz)}).catch(function(t){e.$loading.close(),console.log(t)})}}},l=c,d=(a("2c97"),a("2877")),u=Object(d["a"])(l,r,o,!1,null,"39d4c73c",null);t["default"]=u.exports},"2c97":function(e,t,a){"use strict";var r=a("edd2"),o=a.n(r);o.a},"5dbc":function(e,t,a){var r=a("d3f4"),o=a("8b97").set;e.exports=function(e,t,a){var n,s=t.constructor;return s!==a&&"function"==typeof s&&(n=s.prototype)!==a.prototype&&r(n)&&o&&o(e,n),e}},"67d8":function(e,t,a){"use strict";var r=a("f9f3"),o=a.n(r);o.a},"7b87":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:5}},[a("a-form-item",{attrs:{label:"月份",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!0,placeholder:"请选择月份"},on:{change:e.changeNianYue},model:{value:e.formSearch.nianyue,callback:function(t){e.$set(e.formSearch,"nianyue",t)},expression:"formSearch.nianyue"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.lockSb}},[e._v("锁定")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ORLZFGuid"},scopedSlots:e._u([{key:"sbtype",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n                "+e._s(e.sbType[r.sbtype])+"\n              ")])}},{key:"CityCode",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n                "+e._s(e.cityList[r.CityCode])+"\n              ")])}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(t){return e.detail(r)}}},[e._v("详情")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.exportDaku(r)}}},[e._v("导出")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.disslock(r)}}},[e._v("取消锁定")])],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("modal-detail",{attrs:{show:e.modal.detail,refresh:e.pagerefresh}}),a("modal-lock",{attrs:{show:e.modal.lock,refresh:e.pagerefresh}})],1)],1)],1)},o=[],n=(a("8e6e"),a("456d"),a("bd86")),s=(a("ac6a"),a("c5f6"),a("b775")),i=a("879c"),c=a("a1cc"),l=a("c32d"),d=a.n(l);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach(function(t){Object(n["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var f=[{title:"城市",scopedSlots:{customRender:"CityCode"}},{title:"社保类型",scopedSlots:{customRender:"sbtype"}},{title:"年月",dataIndex:"nianyue"},{title:"申增人数",dataIndex:"申增"},{title:"申减人数",dataIndex:"申减"},{title:"操作",scopedSlots:{customRender:"action"}}],m={props:{role:{type:Number,default:""}},components:{ModalDetail:i["default"],ModalLock:c["default"]},data:function(){return{advanced:!0,columns:f,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0},count:"5",form:this.$form.createForm(this),resultForm:this.$form.createForm(this),AFormImportRules:{selected:[{required:!0,message:"请选择"}]},dataSource:[],UserArray:[],modal:{detail:{show:!1},lock:{show:!1}},sbType:{},ChargingCycle:{},moment:d.a,ServiceType:{},showResultLayer:!1,ORLZGUID:"",sbTypeList:[]}},created:function(){var e=this;e.init()},methods:{init:function(){var e=this;s["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),s["a"].post("/api/Dim/Enum/GetEnum",{Names:["sbType","ChargingCycle","ServiceType"]}).then(function(t){0===t.code?(e.sbTypeList=t.data.sbType,t.data.sbType.forEach(function(t,a){e.sbType[t.key]=t.text}),t.data.ChargingCycle.forEach(function(t,a){e.ChargingCycle[t.key]=t.text}),t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=p({},t.formSearch),t.formSearch.nianyue&&(a.nianyue=t.formSearch.nianyue.format("YYYY-MM-DD")),t.$loading.open(),s["a"].post("/api/order/order_rlz/DaKuOrderList",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},detail:function(e){var t=this;this.modal.detail={show:!0,faDetail:e,sbType:t.sbType,sbTypeList:t.sbTypeList}},changeNianYue:function(e,t){this.formSearch.nianyue=""!=t?d()(t):void 0},exportDaku:function(e){var t=document.createElement("a");t.href="/api/order/order_rlz/ExportOrderList?ORLZFGuid="+e.ORLZFGuid,t.click()},disslock:function(e){var t=this;s["a"].post("/api/order/order_rlz/DeleteFrozen",{ORLZFGuid:e.ORLZFGuid}).then(function(e){t.$loading.close(),0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){t.$loading.close(),console.log(e)})},lockSb:function(){var e=this;this.modal.lock={show:!0,sbTypeList:e.sbTypeList}}}},h=m,b=a("2877"),y=Object(b["a"])(h,r,o,!1,null,null,null);t["default"]=y.exports},"879c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  详情\n")]),a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(t){e.$set(e.formSearch,"emName",t)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(t){e.$set(e.formSearch,"emCardID",t)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.plSure}},[e._v("批量确认申报成功")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ORLZGUID"},scopedSlots:e._u([{key:"status",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},["申增"==r.type?[e._v("\n            "+e._s(1==r["申增状态"]?"成功":0==r["申增状态"]?"失败":"")+"\n          ")]:[e._v("\n            "+e._s(1==r["申减状态"]?"成功":0==r["申减状态"]?"失败":"")+"\n          ")]],2)}},{key:"sbType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.sbType[r.sbType])+"\n        ")])}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},["申增"==r.type&&null==r["申增状态"]?a("a",{on:{click:function(t){return e.addsuccess(r)}}},[e._v("申增成功")]):e._e(),"申增"==r.type&&null==r["申增状态"]?a("a-divider",{attrs:{type:"vertical"}}):e._e(),"申增"==r.type&&null==r["申增状态"]?a("a",{on:{click:function(t){return e.addfail(r)}}},[e._v("申增失败")]):e._e(),"申减"==r.type&&null==r["申减状态"]?a("a",{on:{click:function(t){return e.reducesuccess(r)}}},[e._v("申减成功")]):e._e(),"申减"==r.type&&null==r["申减状态"]?a("a-divider",{attrs:{type:"vertical"}}):e._e(),"申减"==r.type&&null==r["申减状态"]?a("a",{on:{click:function(t){return e.reducefail(r)}}},[e._v("申减失败")]):e._e()],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("a-modal",{attrs:{title:"申增失败",visible:e.showAddLayer,"confirm-loading":e.confirmLoading},on:{ok:e.addOk,cancel:e.addCancel}},[a("a-form",{attrs:{form:e.addForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{rules:e.AFormAddRules.remark}],expression:"['Remark',{rules:AFormAddRules.remark}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1),a("a-modal",{attrs:{title:"申减失败",visible:e.showReduceLayer,"confirm-loading":e.confirmLoading},on:{ok:e.reduceOk,cancel:e.reduceCancel}},[a("a-form",{attrs:{form:e.reduceForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{rules:e.AFormReduceRules.remark}],expression:"['Remark',{rules:AFormReduceRules.remark}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1),a("a-modal",{attrs:{title:"申增成功",visible:e.showAddSuccessLayer,"confirm-loading":e.confirmLoading},on:{ok:e.addSuccessOk,cancel:e.addSuccessCancel}},[a("a-form",{attrs:{form:e.addSuccessForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"运行申报月",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["FirstBillMonthShow",{rules:e.AFormAddRules.selected}],expression:"['FirstBillMonthShow',{rules:AFormAddRules.selected}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1),a("a-modal",{attrs:{title:"申减成功",visible:e.showReduceSuccessLayer,"confirm-loading":e.confirmLoading},on:{ok:e.reduceSuccessOk,cancel:e.reduceSuccessCancel}},[a("a-form",{attrs:{form:e.reduceSuccessForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"运行申报月",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["FirstBillMonthShow",{rules:e.AFormReduceRules.selected}],expression:"['FirstBillMonthShow',{rules:AFormReduceRules.selected}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1),a("modal-detail",{attrs:{show:e.modal.detail},on:{refresh:e.pagerefresh}})],2)},o=[],n=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),s=a("b775"),i=a("10fe"),c=a("c32d"),l=a.n(c);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach(function(t){Object(n["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var p=[{title:"类型",dataIndex:"type"},{title:"状态",scopedSlots:{customRender:"status"}},{title:"姓名",dataIndex:"姓名"},{title:"身份证号",dataIndex:"身份证号"},{title:"工资",dataIndex:"工资"},{title:"社保类型",scopedSlots:{customRender:"sbType"}},{title:"个人金额",dataIndex:"个人金额"},{title:"企业金额",dataIndex:"企业金额"},{title:"开始月份",dataIndex:"BeginMonthShow"},{title:"结束月份",dataIndex:"BillEndMonthShow"},{title:"社保申报月",dataIndex:"FirstBillMonthShow"},{title:"收费截止月份",dataIndex:"EndMonthShow"},{title:"操作",scopedSlots:{customRender:"action"}}],f={props:{show:{type:Object,default:function(){return{show:!1}}}},components:{ModalDetail:i["default"]},data:function(){var e;return e={visible:{show:!1,faDetail:{},sbType:{},sbTypeList:[]},advanced:!0,columns:p},Object(n["a"])(e,"visible",!1),Object(n["a"])(e,"confirmLoading",!1),Object(n["a"])(e,"formSearch",{pageSize:10,current:1,total:0,emName:"",emCardID:""}),Object(n["a"])(e,"count","5"),Object(n["a"])(e,"form",this.$form.createForm(this)),Object(n["a"])(e,"resultForm",this.$form.createForm(this)),Object(n["a"])(e,"AFormImportRules",{selected:[{required:!0,message:"请选择"}]}),Object(n["a"])(e,"sureForm",this.$form.createForm(this)),Object(n["a"])(e,"sureFormRules",{selected:[{required:!0,message:"请选择"}]}),Object(n["a"])(e,"dataSource",[]),Object(n["a"])(e,"UserArray",[]),Object(n["a"])(e,"modal",{detail:{show:!1}}),Object(n["a"])(e,"sbType",{}),Object(n["a"])(e,"ChargingCycle",{}),Object(n["a"])(e,"moment",l.a),Object(n["a"])(e,"ServiceType",{}),Object(n["a"])(e,"ORLZGUID",""),Object(n["a"])(e,"sbTypeList",[]),Object(n["a"])(e,"addForm",this.$form.createForm(this)),Object(n["a"])(e,"AFormAddRules",{remark:[{required:!0,message:"请输入"}],selected:[{required:!0,message:"请选择月份"}]}),Object(n["a"])(e,"showAddLayer",!1),Object(n["a"])(e,"ORLZGUID",""),Object(n["a"])(e,"reduceForm",this.$form.createForm(this)),Object(n["a"])(e,"AFormReduceRules",{remark:[{required:!0,message:"请输入"}],selected:[{required:!0,message:"请选择月份"}]}),Object(n["a"])(e,"addSuccessForm",this.$form.createForm(this)),Object(n["a"])(e,"reduceSuccessForm",this.$form.createForm(this)),Object(n["a"])(e,"showReduceLayer",!1),Object(n["a"])(e,"showAddSuccessLayer",!1),Object(n["a"])(e,"showReduceSuccessLayer",!1),e},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.dataSource=[],this.form.resetFields()},init:function(){var e=this;s["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),s["a"].post("/api/Dim/Enum/GetEnum",{Names:["sbType","ChargingCycle","ServiceType"]}).then(function(t){0===t.code?(e.sbTypeList=t.data.sbType,t.data.sbType.forEach(function(t,a){e.sbType[t.key]=t.text}),t.data.ChargingCycle.forEach(function(t,a){e.ChargingCycle[t.key]=t.text}),t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=u({},t.formSearch),a.ORLZFGuid=t.visible.faDetail.ORLZFGuid,t.$loading.open(),s["a"].post("/api/order/order_rlz/orderList",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},detail:function(e){var t=this;this.modal.detail={show:!0,ORLZGUID:e.ORLZGUID,sbType:t.sbType,ChargingCycle:t.ChargingCycle,ServiceType:t.ServiceType}},plSure:function(){var e=this;console.log(e.visible.faDetail);e.visible.faDetail.nianyue.slice(0,4),e.visible.faDetail.nianyue.slice(4,6);e.$confirm({title:"确认剩余申报全部成功?",content:"点击确定确认。",onOk:function(){s["a"].post("/api/order/order_rlz/OrderList_OK",{ORLZFGuid:e.visible.faDetail.ORLZFGuid}).then(function(t){0===t.code?(e.$message.success(t.msg),e.initPage()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},addfail:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showAddLayer=!0},reducefail:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showReduceLayer=!0},addOk:function(){var e=this;e.addForm.validateFields(function(t,a){t||s["a"].post("/api/Order/Order_RLZ/SheBaoBack",{ORLZGUID:e.ORLZGUID,type:2,Remark:a.Remark}).then(function(t){0===t.code?(e.$message.success(t.msg),e.showAddLayer=!1,e.init()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},addCancel:function(){this.showAddLayer=!1,this.ORLZGUID=""},reduceOk:function(){var e=this;e.reduceForm.validateFields(function(t,a){t||s["a"].post("/api/Order/Order_RLZ/SheBaoBack",{ORLZGUID:e.ORLZGUID,type:4,Remark:a.Remark}).then(function(t){0===t.code?(e.$message.success(t.msg),e.showReduceLayer=!1,e.init()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},reduceCancel:function(){this.showReduceLayer=!1,this.ORLZGUID=""},addsuccess:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showAddSuccessLayer=!0},reducesuccess:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showReduceSuccessLayer=!0},addSuccessOk:function(){var e=this;e.addSuccessForm.validateFields(function(t,a){t||s["a"].post("/api/order/order_rlz/OrderAdd_OK",{ORLZGUID:e.ORLZGUID,nianyue:a.FirstBillMonthShow}).then(function(t){0===t.code?(e.$message.success(t.msg),e.addSuccessCancel(),e.init()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},addSuccessCancel:function(){this.showAddSuccessLayer=!1,this.ORLZGUID=""},reduceSuccessOk:function(){var e=this;e.reduceSuccessForm.validateFields(function(t,a){t||s["a"].post("/api/order/order_rlz/OrderReduce_OK",{ORLZGUID:e.ORLZGUID,nianyue:a.FirstBillMonthShow}).then(function(t){0===t.code?(e.$message.success(t.msg),e.reduceSuccessCancel(),e.init()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},reduceSuccessCancel:function(){this.showReduceSuccessLayer=!1,this.ORLZGUID=""}}},m=f,h=a("2877"),b=Object(h["a"])(m,r,o,!1,null,null,null);t["default"]=b.exports},"8b97":function(e,t,a){var r=a("d3f4"),o=a("cb7c"),n=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(o){t=!0}return function(e,a){return n(e,a),t?e.__proto__=a:r(e,a),e}}({},!1):void 0),check:n}},a1cc:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:400,zIndex:1001,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n   锁定\n   ")]),a("a-form",{attrs:{form:e.connectForm}},[a("div",{staticClass:"form-box"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"社保类型",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sbtype",{rules:e.connectFormImportRules.selectReq}],expression:"['sbtype',{rules:connectFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.visible.sbTypeList,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"月份",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["nianyue",{rules:e.connectFormImportRules.selectReq}],expression:"['nianyue',{rules:connectFormImportRules.selectReq}]"}],staticStyle:{width:"100%"},attrs:{allowClear:!1,placeholder:"请选择月份"}})],1)],1)],1),a("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"122px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.saveLock}},[e._v("确定")])],1)],1)])],2)},o=[],n=a("b775"),s={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,sbTypeList:[]},connectForm:this.$form.createForm(this),connectFormImportRules:{selectReq:[{required:!0,message:"请选择"}]},ComBranch:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){this.init()},methods:{init:function(){},saveLock:function(){var e=this,t={};e.connectForm.validateFields(function(a,r){a||(t=r,t.nianyue=moment(r.nianyue).format("YYYYMM"),e.$loading.open(),n["a"].post("/api/order/order_rlz/FrozenDaKu",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose(),e.refresh()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})},onClose:function(){this.visible.show=!1,this.connectForm.resetFields()}}},i=s,c=(a("67d8"),a("2877")),l=Object(c["a"])(i,r,o,!1,null,"8dbe1c52",null);t["default"]=l.exports},aa77:function(e,t,a){var r=a("5ca1"),o=a("be13"),n=a("79e5"),s=a("fdef"),i="["+s+"]",c="​",l=RegExp("^"+i+i+"*"),d=RegExp(i+i+"*$"),u=function(e,t,a){var o={},i=n(function(){return!!s[e]()||c[e]()!=c}),l=o[e]=i?t(p):s[e];a&&(o[a]=l),r(r.P+r.F*i,"String",o)},p=u.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(d,"")),e};e.exports=u},c5f6:function(e,t,a){"use strict";var r=a("7726"),o=a("69a8"),n=a("2d95"),s=a("5dbc"),i=a("6a99"),c=a("79e5"),l=a("9093").f,d=a("11e9").f,u=a("86cc").f,p=a("aa77").trim,f="Number",m=r[f],h=m,b=m.prototype,y=n(a("2aeb")(b))==f,g="trim"in String.prototype,v=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():p(t,3);var a,r,o,n=t.charCodeAt(0);if(43===n||45===n){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var s,c=t.slice(2),l=0,d=c.length;l<d;l++)if(s=c.charCodeAt(l),s<48||s>o)return NaN;return parseInt(c,r)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof m&&(y?c(function(){b.valueOf.call(a)}):n(a)!=f)?s(new h(v(t)),a,m):v(t)};for(var w,O=a("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;O.length>S;S++)o(h,w=O[S])&&!o(m,w)&&u(m,w,d(h,w));m.prototype=b,b.constructor=m,a("2aba")(r,f,m)}},edd2:function(e,t,a){},f9f3:function(e,t,a){},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);