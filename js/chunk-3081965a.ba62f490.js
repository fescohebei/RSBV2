(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3081965a","chunk-220ee3cc"],{"10fe":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001,footer:!1},on:{cancel:e.onClose}},[t("template",{slot:"title"},[e._v("\n  详情1\n  ")]),t("a-form",{attrs:{form:e.form}},[t("a-row",[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"员工姓名",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["姓名"])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"公司名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.ComName)+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"服务类型",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.ServiceType[e.orderDetail.ServiceType])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"险种",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.orderDetail.sbType])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"工资",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["工资"])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"个人",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["个人金额"])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"企业",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["企业金额"])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"起始月份",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.BeginDate?e.moment(e.orderDetail.BeginDate).format("YYYY-MM"):"")+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"结束月份",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.EndDate?e.moment(e.orderDetail.EndDate).format("YYYY-MM"):"")+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"首次账单月",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.FirstBillMonth?e.moment(e.orderDetail.FirstBillMonth).format("YYYY-MM"):"")+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"收费周期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.ChargingCycle[e.orderDetail.ChargingCycle])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"收费截至月份",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.BillEndMonth?e.moment(e.orderDetail.BillEndMonth).format("YYYY-MM"):"")+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"申增状态",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申增状态"]?e.orderDetail["申增状态"]?"成功":"失败":"")+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"申增时间",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申增时间"])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"申减状态",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申减状态"]?e.orderDetail["申减状态"]?"成功":"失败":"")+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"申减时间",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申减时间"])+"\n          ")])],1)],1)],1)],2)},o=[],n=t("b775"),s=t("c32d"),l=t.n(s),i={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:{},sbType:{},ChargingCycle:{},ServiceType:{}},form:this.$form.createForm(this),orderDetail:{},modal:{},moment:l.a}},watch:{show:function(e,a){var t=this;t.visible=e}},created:function(){var e=this;this.$watch("show",function(a,t){e.visible=a,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){var e=this;n["a"].post("/api/Order/Order_RLZ/Detail",{ORLZGUID:e.visible.ORLZGUID}).then(function(a){e.$loading.close(),0===a.code&&(e.orderDetail=a.data.rlz)}).catch(function(a){e.$loading.close(),console.log(a)})}}},c=i,d=(t("2c5a"),t("2877")),m=Object(d["a"])(c,r,o,!1,null,"5c62334a",null);a["default"]=m.exports},"2c5a":function(e,a,t){"use strict";var r=t("eb4c"),o=t.n(r);o.a},"879c":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1200,footer:!1},on:{cancel:e.onClose}},[t("template",{slot:"title"},[e._v("\n  详情\n")]),t("div",[t("a-form",{attrs:{form:e.form,layout:"horizontal"}},[t("div",{class:e.advanced?null:"fold"},[t("a-row",{attrs:{gutter:10}},[t("a-col",{attrs:{md:6}},[t("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[t("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(a){e.$set(e.formSearch,"emName",a)},expression:"formSearch.emName"}})],1)],1),t("a-col",{attrs:{md:6}},[t("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[t("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(a){e.$set(e.formSearch,"emCardID",a)},expression:"formSearch.emCardID"}})],1)],1),t("a-col",{attrs:{span:6}},[t("a-form-item",[t("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.plSure}},[e._v("批量确认申报成功")])],1)],1)],1)],1)])],1),t("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"PGUID"},scopedSlots:e._u([{key:"status",fn:function(a,r){return t("span",{staticStyle:{"text-align":"right"}},["申增"==r.type?[e._v("\n            "+e._s(1==r["申增状态"]?"成功":0==r["申增状态"]?"失败":"")+"\n          ")]:[e._v("\n            "+e._s(1==r["申减状态"]?"成功":0==r["申减状态"]?"失败":"")+"\n          ")]],2)}},{key:"sbType",fn:function(a,r){return t("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.sbType[r.sbType])+"\n        ")])}},{key:"action",fn:function(a,r){return t("span",{staticStyle:{"text-align":"right"}},["申增"==r.type&&null==r["申增状态"]?t("a",{on:{click:function(a){return e.addfail(r)}}},[e._v("申增失败")]):e._e(),"申减"==r.type&&null==r["申减状态"]?t("a",{on:{click:function(a){return e.reducefail(r)}}},[e._v("申减失败")]):e._e()])}}])},[t("template",{slot:"footer"},[t("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),t("a-modal",{attrs:{title:"申增失败",visible:e.showAddLayer,"confirm-loading":e.confirmLoading},on:{ok:e.addOk,cancel:e.addCancel}},[t("a-form",{attrs:{form:e.addForm,layout:"horizontal"}},[t("div",[t("a-row",{attrs:{gutter:10}},[t("a-col",{attrs:{md:24}},[t("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{rules:e.AFormAddRules.remark}],expression:"['Remark',{rules:AFormAddRules.remark}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1),t("a-modal",{attrs:{title:"申增失败",visible:e.showReduceLayer,"confirm-loading":e.confirmLoading},on:{ok:e.reduceOk,cancel:e.reduceCancel}},[t("a-form",{attrs:{form:e.addForm,layout:"horizontal"}},[t("div",[t("a-row",{attrs:{gutter:10}},[t("a-col",{attrs:{md:24}},[t("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[t("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{rules:e.AFormReduceRules.remark}],expression:"['Remark',{rules:AFormReduceRules.remark}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1),t("modal-detail",{attrs:{show:e.modal.detail},on:{refresh:e.pagerefresh}})],2)},o=[],n=(t("8e6e"),t("456d"),t("ac6a"),t("bd86")),s=t("b775"),l=t("10fe"),i=t("c32d"),c=t.n(i);function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(t,!0).forEach(function(a){Object(n["a"])(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var p=[{title:"类型",dataIndex:"type"},{title:"状态",scopedSlots:{customRender:"status"}},{title:"姓名",dataIndex:"姓名"},{title:"身份证号",dataIndex:"身份证号"},{title:"工资",dataIndex:"工资"},{title:"社保类型",scopedSlots:{customRender:"sbType"}},{title:"个人金额",dataIndex:"个人金额"},{title:"企业金额",dataIndex:"企业金额"},{title:"开始月份",dataIndex:"BeginMonthShow"},{title:"结束月份",dataIndex:"BillEndMonthShow"},{title:"首次账单月",dataIndex:"FirstBillMonthShow"},{title:"收费截止月份",dataIndex:"EndMonthShow"},{title:"操作",scopedSlots:{customRender:"action"}}],u={props:{show:{type:Object,default:function(){return{show:!1}}}},components:{ModalDetail:l["default"]},data:function(){var e;return e={visible:{show:!1,faDetail:{},sbType:{},sbTypeList:[]},advanced:!0,columns:p},Object(n["a"])(e,"visible",!1),Object(n["a"])(e,"confirmLoading",!1),Object(n["a"])(e,"formSearch",{pageSize:10,current:1,total:0,emName:"",emCardID:""}),Object(n["a"])(e,"count","5"),Object(n["a"])(e,"form",this.$form.createForm(this)),Object(n["a"])(e,"resultForm",this.$form.createForm(this)),Object(n["a"])(e,"AFormImportRules",{selected:[{required:!0,message:"请选择"}]}),Object(n["a"])(e,"sureForm",this.$form.createForm(this)),Object(n["a"])(e,"sureFormRules",{selected:[{required:!0,message:"请选择"}]}),Object(n["a"])(e,"dataSource",[]),Object(n["a"])(e,"UserArray",[]),Object(n["a"])(e,"modal",{detail:{show:!1}}),Object(n["a"])(e,"sbType",{}),Object(n["a"])(e,"ChargingCycle",{}),Object(n["a"])(e,"moment",c.a),Object(n["a"])(e,"ServiceType",{}),Object(n["a"])(e,"ORLZGUID",""),Object(n["a"])(e,"sbTypeList",[]),Object(n["a"])(e,"addForm",this.$form.createForm(this)),Object(n["a"])(e,"AFormAddRules",{remark:[{required:!0,message:"请输入"}]}),Object(n["a"])(e,"showAddLayer",!1),Object(n["a"])(e,"ORLZGUID",""),Object(n["a"])(e,"reduceForm",this.$form.createForm(this)),Object(n["a"])(e,"AFormReduceRules",{remark:[{required:!0,message:"请输入"}]}),Object(n["a"])(e,"showReduceLayer",!1),e},watch:{show:function(e,a){var t=this;t.visible=e}},created:function(){var e=this;this.$watch("show",function(a,t){e.visible=a,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){var e=this;s["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","City"]}).then(function(a){0===a.code&&(e.UserArray=a.data.User,e.cityList=a.data.City)}).catch(function(e){console.log(e)}),s["a"].post("/api/Dim/Enum/GetEnum",{Names:["sbType","ChargingCycle","ServiceType"]}).then(function(a){0===a.code?(e.sbTypeList=a.data.sbType,a.data.sbType.forEach(function(a,t){e.sbType[a.key]=a.text}),a.data.ChargingCycle.forEach(function(a,t){e.ChargingCycle[a.key]=a.text}),a.data.ServiceType.forEach(function(a,t){e.ServiceType[a.key]=a.text}),e.pagechange(1)):e.$message.error(a.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var a=this,t={};a.formSearch.current=e,t=m({},a.formSearch),t.ORLZFGuid=a.visible.faDetail.ORLZFGuid,a.$loading.open(),s["a"].post("/api/order/order_rlz/orderList",t).then(function(e){a.$loading.close(),0===e.code&&(a.dataSource=e.data.rows,a.formSearch.total=e.count)}).catch(function(e){a.$loading.close(),console.log(e)})},detail:function(e){var a=this;this.modal.detail={show:!0,ORLZGUID:e.ORLZGUID,sbType:a.sbType,ChargingCycle:a.ChargingCycle,ServiceType:a.ServiceType}},plSure:function(){var e=this;console.log(e.visible.faDetail);e.visible.faDetail.nianyue.slice(0,4),e.visible.faDetail.nianyue.slice(4,6);e.$confirm({title:"确认剩余申报全部成功?",content:"点击确定确认。",onOk:function(){s["a"].post("/api/order/order_rlz/OrderList_OK",{ORLZFGuid:e.visible.faDetail.ORLZFGuid}).then(function(a){0===a.code?(e.$message.success(a.msg),e.initPage()):e.$message.error(a.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},addfail:function(e){var a=this;a.ORLZGUID=e.ORLZGUID,a.showAddLayer=!0},reducefail:function(e){var a=this;a.ORLZGUID=e.ORLZGUID,a.showReduceLayer=!0},addOk:function(){var e=this;e.addForm.validateFields(function(a,t){a||s["a"].post("/api/Order/Order_RLZ/SheBaoBack",{ORLZGUID:e.ORLZGUID,type:2,Remark:t.Remark}).then(function(a){0===a.code?(e.$message.success(a.msg),e.showAddLayer=!1,e.init()):e.$message.error(a.msg)}).catch(function(e){console.log(e)})})},addCancel:function(){this.showAddLayer=!1,this.ORLZGUID=""},reduceOk:function(){var e=this;e.reduceForm.validateFields(function(a,t){a||s["a"].post("/api/Order/Order_RLZ/SheBaoBack",{ORLZGUID:e.ORLZGUID,type:4,Remark:t.Remark}).then(function(a){0===a.code?(e.$message.success(a.msg),e.showReduceLayer=!1,e.init()):e.$message.error(a.msg)}).catch(function(e){console.log(e)})})},reduceCancel:function(){this.showReduceLayer=!1,this.ORLZGUID=""}}},f=u,h=t("2877"),b=Object(h["a"])(f,r,o,!1,null,null,null);a["default"]=b.exports},eb4c:function(e,a,t){}}]);