(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-624af8ac","chunk-e55d092c"],{"10fe":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  详情1\n  ")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"员工姓名",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["姓名"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.ComName)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"服务类型",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.ServiceType[e.orderDetail.ServiceType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.orderDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"工资",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["工资"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"个人",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["个人金额"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"企业",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["企业金额"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"起始月份",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.BeginDate?e.moment(e.orderDetail.BeginDate).format("YYYY-MM"):"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"结束月份",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.EndDate?e.moment(e.orderDetail.EndDate).format("YYYY-MM"):"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"运行操作月",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.FirstBillMonth?e.moment(e.orderDetail.FirstBillMonth).format("YYYY-MM"):"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"收费周期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.ChargingCycle[e.orderDetail.ChargingCycle])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"收费截至月份",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.BillEndMonth?e.moment(e.orderDetail.BillEndMonth).format("YYYY-MM"):"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申增状态",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申增状态"]?e.orderDetail["申增状态"]?"成功":"失败":"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申增时间",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申增时间"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申减状态",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申减状态"]?e.orderDetail["申减状态"]?"成功":"失败":"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申减时间",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申减时间"])+"\n          ")])],1)],1)],1)],2)},s=[],o=a("b775"),n=a("c32d"),l=a.n(n),i={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:{},sbType:{},ChargingCycle:{},ServiceType:{}},form:this.$form.createForm(this),orderDetail:{},modal:{},moment:l.a}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail={},this.form.resetFields()},init:function(){var e=this;o["a"].post("/api/Order/Order_RLZ/Detail",{ORLZGUID:e.visible.ORLZGUID}).then(function(t){e.$loading.close(),0===t.code&&(e.orderDetail=t.data.rlz)}).catch(function(t){e.$loading.close(),console.log(t)})}}},c=i,d=(a("60c6"),a("2877")),u=Object(d["a"])(c,r,s,!1,null,"f0abe030",null);t["default"]=u.exports},"60c6":function(e,t,a){"use strict";var r=a("cf8a"),s=a.n(r);s.a},"879c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  "+e._s("add"==e.visible.type?"申增":"申减")+"详情\n")]),a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(t){e.$set(e.formSearch,"emName",t)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(t){e.$set(e.formSearch,"emCardID",t)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ORLZGUID"},scopedSlots:e._u([{key:"status",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right","font-size":"12px"}},["申增"==r.type?[e._v("\n            "+e._s(1==r["申增状态"]?"申增成功":0==r["申增状态"]?"申增失败":"")+"\n          ")]:[e._v("\n            "+e._s(1==r["申减状态"]?"申减成功":0==r["申减状态"]?"申减失败":"")+"\n          ")]],2)}},{key:"sbType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.sbType[r.sbType])+"\n        ")])}},{key:"username",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right","font-size":"12px"}},[e._v("\n        "+e._s(r["姓名"])),a("br"),e._v(e._s(r["身份证号"])+"\n        ")])}},{key:"sbAccount",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right","font-size":"12px"}},[e._v("\n        户名："+e._s(r.AccountName)),a("br"),e._v("账户："+e._s(r.AccountNumber)+"\n        ")])}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right","font-size":"12px"}},["add"==e.visible.type&&"申增"==r.type&&null==r["申增状态"]?a("a",{on:{click:function(t){return e.addsuccess(r)}}},[e._v("申增成功")]):e._e(),"add"==e.visible.type&&"申增"==r.type&&null==r["申增状态"]?a("a-divider",{attrs:{type:"vertical"}}):e._e(),"add"==e.visible.type&&"申增"==r.type&&null==r["申增状态"]?a("a",{on:{click:function(t){return e.addfail(r)}}},[e._v("申增失败")]):e._e(),"add"==e.visible.type&&"申增"==r.type&&null==r["申增状态"]?a("a-divider",{attrs:{type:"vertical"}}):e._e(),"add"==e.visible.type&&"申增"==r.type&&null==r["申增状态"]?a("a",{on:{click:function(t){return e.addback(r)}}},[e._v("回退")]):e._e(),"sub"==e.visible.type&&"申减"==r.type&&null==r["申减状态"]?a("a",{on:{click:function(t){return e.reducesuccess(r)}}},[e._v("申减成功")]):e._e(),"sub"==e.visible.type&&"申减"==r.type&&null==r["申减状态"]?a("a-divider",{attrs:{type:"vertical"}}):e._e(),"sub"==e.visible.type&&"申减"==r.type&&null==r["申减状态"]?a("a",{on:{click:function(t){return e.reducefail(r)}}},[e._v("申减失败")]):e._e()],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("a-modal",{attrs:{title:"申增失败",visible:e.showAddLayer,"confirm-loading":e.confirmLoading},on:{ok:e.addOk,cancel:e.addCancel}},[a("a-form",{attrs:{form:e.addForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{rules:e.AFormAddRules.remark}],expression:"['Remark',{rules:AFormAddRules.remark}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1),a("a-modal",{attrs:{title:"申减失败",visible:e.showReduceLayer,"confirm-loading":e.confirmLoading},on:{ok:e.reduceOk,cancel:e.reduceCancel}},[a("a-form",{attrs:{form:e.reduceForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{rules:e.AFormReduceRules.remark}],expression:"['Remark',{rules:AFormReduceRules.remark}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1),a("a-modal",{attrs:{title:"申增成功",visible:e.showAddSuccessLayer,"confirm-loading":e.confirmLoading},on:{ok:e.addSuccessOk,cancel:e.addSuccessCancel}},[a("a-form",{attrs:{form:e.addSuccessForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"运行申报月",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["FirstBillMonthShow",{rules:e.AFormAddRules.selected}],expression:"['FirstBillMonthShow',{rules:AFormAddRules.selected}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1),a("a-col",{staticStyle:{color:"red"},attrs:{md:18,offset:6}},[e._v("\n                例如：10月份运行操作，派单员工需8月起做。但实际申报从9月开始补缴，则填9月。\n              ")])],1)],1)])],1),a("a-modal",{attrs:{title:"申减成功",visible:e.showReduceSuccessLayer,"confirm-loading":e.confirmLoading},on:{ok:e.reduceSuccessOk,cancel:e.reduceSuccessCancel}},[a("a-form",{attrs:{form:e.reduceSuccessForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"运行申报月",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["FirstBillMonthShow",{rules:e.AFormReduceRules.selected}],expression:"['FirstBillMonthShow',{rules:AFormReduceRules.selected}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1),a("modal-detail",{attrs:{show:e.modal.detail},on:{refresh:e.pagerefresh}})],2)},s=[],o=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),n=a("b775"),l=a("10fe"),i=a("c32d"),c=a.n(i);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach(function(t){Object(o["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var m=[{title:"状态",scopedSlots:{customRender:"status"}},{title:"姓名",scopedSlots:{customRender:"username"}},{title:"工资",dataIndex:"工资"},{title:"社保类型",scopedSlots:{customRender:"sbType"}},{title:"社保账户",scopedSlots:{customRender:"sbAccount"}},{title:"个人金额",dataIndex:"个人金额"},{title:"企业金额",dataIndex:"企业金额"},{title:"开始月份",dataIndex:"BeginMonthShow"},{title:"结束月份",dataIndex:"EndMonthShow"},{title:"运行操作月",dataIndex:"FirstBillMonthShow"},{title:"收费截止月份",dataIndex:"BillEndMonthShow"},{title:"操作",scopedSlots:{customRender:"action"},align:"center"}],p={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},components:{ModalDetail:l["default"]},data:function(){var e;return e={visible:{show:!1,faDetail:{},sbType:{},sbTypeList:[],type:""},advanced:!0,columns:m},Object(o["a"])(e,"visible",!1),Object(o["a"])(e,"confirmLoading",!1),Object(o["a"])(e,"formSearch",{pageSize:10,current:1,total:0,emName:"",emCardID:""}),Object(o["a"])(e,"count","5"),Object(o["a"])(e,"form",this.$form.createForm(this)),Object(o["a"])(e,"resultForm",this.$form.createForm(this)),Object(o["a"])(e,"AFormImportRules",{selected:[{required:!0,message:"请选择"}]}),Object(o["a"])(e,"sureForm",this.$form.createForm(this)),Object(o["a"])(e,"sureFormRules",{selected:[{required:!0,message:"请选择"}]}),Object(o["a"])(e,"dataSource",[]),Object(o["a"])(e,"UserArray",[]),Object(o["a"])(e,"modal",{detail:{show:!1}}),Object(o["a"])(e,"sbType",{}),Object(o["a"])(e,"ChargingCycle",{}),Object(o["a"])(e,"moment",c.a),Object(o["a"])(e,"ServiceType",{}),Object(o["a"])(e,"ORLZGUID",""),Object(o["a"])(e,"sbTypeList",[]),Object(o["a"])(e,"addForm",this.$form.createForm(this)),Object(o["a"])(e,"AFormAddRules",{remark:[{required:!0,message:"请输入"}],selected:[{required:!0,message:"请选择月份"}]}),Object(o["a"])(e,"showAddLayer",!1),Object(o["a"])(e,"ORLZGUID",""),Object(o["a"])(e,"reduceForm",this.$form.createForm(this)),Object(o["a"])(e,"AFormReduceRules",{remark:[{required:!0,message:"请输入"}],selected:[{required:!0,message:"请选择月份"}]}),Object(o["a"])(e,"addSuccessForm",this.$form.createForm(this)),Object(o["a"])(e,"reduceSuccessForm",this.$form.createForm(this)),Object(o["a"])(e,"showReduceLayer",!1),Object(o["a"])(e,"showAddSuccessLayer",!1),Object(o["a"])(e,"showReduceSuccessLayer",!1),e},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.dataSource=[],this.form.resetFields(),this.refresh()},init:function(){var e=this;n["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),n["a"].post("/api/Dim/Enum/GetEnum",{Names:["sbType","ChargingCycle","ServiceType"]}).then(function(t){0===t.code?(e.sbTypeList=t.data.sbType,t.data.sbType.forEach(function(t,a){e.sbType[t.key]=t.text}),t.data.ChargingCycle.forEach(function(t,a){e.ChargingCycle[t.key]=t.text}),t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=u({},t.formSearch),a.ORLZFGuid=t.visible.faDetail.ORLZFGuid,a.addsub=t.visible.type,t.$loading.open(),n["a"].post("/api/order/order_rlz/orderList",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},detail:function(e){var t=this;this.modal.detail={show:!0,ORLZGUID:e.ORLZGUID,sbType:t.sbType,ChargingCycle:t.ChargingCycle,ServiceType:t.ServiceType}},addfail:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showAddLayer=!0},reducefail:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showReduceLayer=!0},addOk:function(){var e=this;e.addForm.validateFields(function(t,a){t||n["a"].post("/api/Order/Order_RLZ/SheBaoBack",{ORLZGUID:e.ORLZGUID,type:2,Remark:a.Remark}).then(function(t){0===t.code?(e.$message.success(t.msg),e.showAddLayer=!1,e.addForm.resetFields(),e.init()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},addCancel:function(){this.showAddLayer=!1,this.ORLZGUID="",this.addForm.resetFields()},reduceOk:function(){var e=this;e.reduceForm.validateFields(function(t,a){t||n["a"].post("/api/Order/Order_RLZ/SheBaoBack",{ORLZGUID:e.ORLZGUID,type:4,Remark:a.Remark}).then(function(t){0===t.code?(e.$message.success(t.msg),e.showReduceLayer=!1,e.reduceForm.resetFields(),e.init()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},reduceCancel:function(){this.showReduceLayer=!1,this.ORLZGUID="",this.reduceForm.resetFields()},addsuccess:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showAddSuccessLayer=!0},reducesuccess:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showReduceSuccessLayer=!0},addSuccessOk:function(){var e=this;e.addSuccessForm.validateFields(function(t,a){t||n["a"].post("/api/order/order_rlz/OrderAdd_OK",{ORLZGUID:e.ORLZGUID,nianyue:a.FirstBillMonthShow}).then(function(t){0===t.code?(e.$message.success(t.msg),e.addSuccessCancel(),e.init()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},addSuccessCancel:function(){this.showAddSuccessLayer=!1,this.ORLZGUID=""},reduceSuccessOk:function(){var e=this;e.reduceSuccessForm.validateFields(function(t,a){t||n["a"].post("/api/order/order_rlz/OrderReduce_OK",{ORLZGUID:e.ORLZGUID,nianyue:a.FirstBillMonthShow}).then(function(t){0===t.code?(e.$message.success(t.msg),e.reduceSuccessCancel(),e.init()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},reduceSuccessCancel:function(){this.showReduceSuccessLayer=!1,this.ORLZGUID=""},addback:function(e){var t=this;t.$confirm({title:"确认回退这个险种?",content:"点击确定后回退。",onOk:function(){n["a"].post("/api/order/order_rlz/OrderAdd_Back",{ORLZGUID:e.ORLZGUID}).then(function(e){0===e.code?(t.$message.success(e.msg),t.init()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})}}},f=p,h=a("2877"),b=Object(h["a"])(f,r,s,!1,null,null,null);t["default"]=b.exports},cf8a:function(e,t,a){}}]);