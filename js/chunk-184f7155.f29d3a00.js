(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-184f7155","chunk-7719deee"],{1610:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1200,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  详情\n")]),a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(t){e.$set(e.formSearch,"emName",t)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(t){e.$set(e.formSearch,"emCardID",t)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{md:5}},[a("a-form-item",{attrs:{label:"处理状态",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!1},model:{value:e.formSearch.doStatus,callback:function(t){e.$set(e.formSearch,"doStatus",t)},expression:"formSearch.doStatus"}},[a("a-select-option",{key:"0"},[e._v("全部")]),a("a-select-option",{key:"1"},[e._v("未处理")]),a("a-select-option",{key:"2"},[e._v("已处理")])],1)],1)],1),a("a-col",{attrs:{md:4}},[a("a-form-item",{attrs:{label:"社保类型",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-select",{attrs:{allowClear:!1},model:{value:e.formSearch.sbtype,callback:function(t){e.$set(e.formSearch,"sbtype",t)},expression:"formSearch.sbtype"}},[a("a-select-option",{key:""},[e._v("全部")]),e._l(e.visible.sbTypeList,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])})],2)],1)],1),a("a-col",{attrs:{span:3}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.init}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ORLZGUID"},scopedSlots:e._u([{key:"type",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(r.type)+"\n        ")])}},{key:"status",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},["申增"==r.type?[e._v("\n            "+e._s(1==r["申增状态"]?"成功":0==r["申增状态"]?"失败":"")+"\n          ")]:[e._v("\n            "+e._s(1==r["申减状态"]?"成功":0==r["申减状态"]?"失败":"")+"\n          ")]],2)}},{key:"username",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right","font-size":"12px"}},[e._v("\n        "+e._s(r["姓名"])),a("br"),e._v(e._s(r["身份证号"])+"\n        ")])}},{key:"sbType",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.visible.sbType[r.sbType])+"\n        ")])}},{key:"action",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right","font-size":"12px"}},["申增"==r.type&&null==r["申增状态"]?a("a-button",{staticClass:"btn-primary",attrs:{size:"small"},on:{click:function(t){return e.addsuccess(r)}}},[e._v("成功")]):e._e(),"申增"==r.type&&null==r["申增状态"]?a("a-button",{staticClass:"btn-primary",attrs:{size:"small"},on:{click:function(t){return e.addfail(r)}}},[e._v("失败")]):e._e(),"申增"==r.type&&null==r["申增状态"]?a("a-button",{staticStyle:{color:"#ff4d4f",border:"1px solid #ff4d4f"},attrs:{size:"small"},on:{click:function(t){return e.addback(r)}}},[e._v("回退")]):e._e(),"申减"==r.type&&null==r["申减状态"]?a("a-button",{staticClass:"btn-primary",attrs:{size:"small"},on:{click:function(t){return e.reducesuccess(r)}}},[e._v("成功")]):e._e()],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,"show-total":function(e){return"共 "+e+" 条"},current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("a-modal",{attrs:{title:"申增成功",visible:e.showAddSuccessLayer,"confirm-loading":e.confirmLoading},on:{ok:e.addSuccessOk,cancel:e.addSuccessCancel}},[a("a-form",{attrs:{form:e.addSuccessForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"运行申报月",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["FirstBillMonthShow",{rules:e.AFormAddRules.selected}],expression:"['FirstBillMonthShow',{rules:AFormAddRules.selected}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1),a("a-col",{staticStyle:{color:"red"},attrs:{md:18,offset:6}},[e._v("\n                例如：10月份运行操作，派单员工需8月起做。但实际申报从9月开始补缴，则填9月。\n              ")])],1)],1)])],1),a("a-modal",{attrs:{title:"申增失败",visible:e.showAddLayer,"confirm-loading":e.confirmLoading},on:{ok:e.addOk,cancel:e.addCancel}},[a("a-form",{attrs:{form:e.addForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{rules:e.AFormAddRules.remark}],expression:"['Remark',{rules:AFormAddRules.remark}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1),a("a-modal",{attrs:{title:"申减成功",visible:e.showReduceSuccessLayer,"confirm-loading":e.confirmLoading},on:{ok:e.reduceSuccessOk,cancel:e.reduceSuccessCancel}},[a("a-form",{attrs:{form:e.reduceSuccessForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:17,offset:1}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remarks",{}],expression:"['remarks',{}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1),a("a-modal",{attrs:{title:"申减失败",visible:e.showReduceLayer,"confirm-loading":e.confirmLoading},on:{ok:e.reduceOk,cancel:e.reduceCancel}},[a("a-form",{attrs:{form:e.reduceForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"实际截止日期",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{rules:e.AFormReduceRules.remark}],expression:"['Remark',{rules:AFormReduceRules.remark}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1)],2)},o=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),n=a("b775"),c=a("c32d"),i=a.n(c);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach(function(t){Object(s["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var d=[{title:"类型",scopedSlots:{customRender:"type"}},{title:"状态",scopedSlots:{customRender:"status"}},{title:"姓名",scopedSlots:{customRender:"username"}},{title:"工资",dataIndex:"工资"},{title:"社保类型",scopedSlots:{customRender:"sbType"}},{title:"开始月份",dataIndex:"BeginMonthShow"},{title:"结束月份",dataIndex:"EndMonthShow"},{title:"收费截止月份",dataIndex:"BillEndMonthShow"},{title:"操作",scopedSlots:{customRender:"action"}}],m={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){var e;return e={visible:{show:!1,faDetail:{},sbType:{},sbTypeList:[],type:""},form:this.$form.createForm(this),orderDetail:{},confirmLoading:!1,modal:{},moment:i.a,formSearch:{pageSize:10,current:1,total:0,emName:"",emCardID:"",doStatus:"0",sbtype:""},columns:d,dataSource:[],addForm:this.$form.createForm(this),AFormAddRules:{remark:[{required:!0,message:"请输入"}]},showAddLayer:!1,ORLZGUID:"",reduceForm:this.$form.createForm(this),AFormReduceRules:{remark:[{required:!0,message:"请输入"}]},showReduceLayer:!1,addSuccessForm:this.$form.createForm(this),reduceSuccessForm:this.$form.createForm(this)},Object(s["a"])(e,"showReduceLayer",!1),Object(s["a"])(e,"showAddSuccessLayer",!1),Object(s["a"])(e,"showReduceSuccessLayer",!1),e},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.dataSource=[],this.formSearch={pageSize:10,current:1,total:0,emName:"",emCardID:"",doStatus:"0",sbtype:""},this.form.resetFields()},init:function(){var e=this;e.pagechange(1)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=u({},t.formSearch),a.ORLZFGuid=t.visible.faDetail.ORLZFGuid,a.addsub=t.visible.type,t.$loading.open(),n["a"].post("/api/order/order_rlz/ComListDetail",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},pagerefresh:function(){this.pagechange(this.formSearch.current)},addfail:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showAddLayer=!0},reducefail:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showReduceLayer=!0},addOk:function(){var e=this;e.addForm.validateFields(function(t,a){t||n["a"].post("/api/Order/Order_RLZ/SheBaoBack",{ORLZGUID:e.ORLZGUID,type:2,Remark:a.Remark}).then(function(t){0===t.code?(e.$message.success(t.msg),e.addCancel(),e.init()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},addCancel:function(){this.showAddLayer=!1,this.addForm.resetFields(),this.ORLZGUID=""},reduceOk:function(){var e=this;e.reduceForm.validateFields(function(t,a){t||n["a"].post("/api/Order/Order_RLZ/SheBaoBack",{ORLZGUID:e.ORLZGUID,type:4,Remark:a.Remark}).then(function(t){0===t.code?(e.$message.success(t.msg),e.reduceCancel(),e.init()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},reduceCancel:function(){this.showReduceLayer=!1,this.reduceForm.resetFields(),this.ORLZGUID=""},addsuccess:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showAddSuccessLayer=!0},reducesuccess:function(e){var t=this;t.ORLZGUID=e.ORLZGUID,t.showReduceSuccessLayer=!0},addSuccessOk:function(){var e=this;e.addSuccessForm.validateFields(function(t,a){t||n["a"].post("/api/order/order_rlz/OrderAdd_OK",{ORLZGUID:e.ORLZGUID,nianyue:a.FirstBillMonthShow}).then(function(t){0===t.code?(e.$message.success(t.msg),e.addSuccessCancel(),e.pagerefresh()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},addSuccessCancel:function(){this.showAddSuccessLayer=!1,this.ORLZGUID=""},reduceSuccessOk:function(){var e=this;e.reduceSuccessForm.validateFields(function(t,a){t||n["a"].post("/api/order/order_rlz/OrderReduce_OK",{ORLZGUID:e.ORLZGUID,remarks:a.remarks}).then(function(t){0===t.code?(e.$message.success(t.msg),e.reduceSuccessCancel(),e.pagerefresh()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},reduceSuccessCancel:function(){this.showReduceSuccessLayer=!1,this.ORLZGUID=""},addback:function(e){var t=this;t.$confirm({title:"确认回退这个险种?",content:"点击确定后回退。",onOk:function(){n["a"].post("/api/order/order_rlz/OrderAdd_Back",{ORLZGUID:e.ORLZGUID}).then(function(e){0===e.code?(t.$message.success(e.msg),t.pagerefresh()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})}}},f=m,p=(a("e24e"),a("2877")),h=Object(p["a"])(f,r,o,!1,null,"40fc3e1b",null);t["default"]=h.exports},"585f":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1280,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n    申减社保交接情况（已确认未进入锁定）\n  ")]),a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:4}},[a("a-form-item",{attrs:{label:"操作月",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM",allowClear:!0},model:{value:e.formSearch.nianyue,callback:function(t){e.$set(e.formSearch,"nianyue",t)},expression:"formSearch.nianyue"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:8,xxl:5}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:8,xxl:5}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(t){e.$set(e.formSearch,"emCardID",t)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:8,xxl:5}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:15}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(t){e.$set(e.formSearch,"emName",t)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:6,xxl:2}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"SBGUID"},scopedSlots:e._u([{key:"GYSName",fn:function(t,r){return a("span",{staticClass:"fs12"},[e._v("\n          派出公司："+e._s(r.GYSName)),a("br"),e._v("公司："+e._s(r.ComName)+"\n        ")])}},{key:"userName",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.detail(r)}}},[e._v(e._s(r["姓名"]))]),a("br"),e._v(e._s(r["身份证号"]))])}},{key:"sbType",fn:function(t,r){return a("span",{},[e._v(e._s(e.sbType[r.sbType]))])}},{key:"SBEndDate",fn:function(t,r){return a("span",{},[e._v(e._s(r.SBEndDate?e.moment(r.SBEndDate).format("YYYY-MM-DD"):""))])}},{key:"Jishu",fn:function(t,r){return a("span",{},[e._v("\n          "+e._s(r.Jishu)+"\n          "),null!=r.Bili&&""!=r.Bili?[a("br"),e._v("比例:"+e._s(r.Bili)+"\n          ")]:e._e()],2)}},{key:"Remarks",fn:function(t,r){return[a("a-tooltip",[a("template",{slot:"title"},[e._v("\n              "+e._s(r.Remarks)+"\n            ")]),a("div",{staticClass:"remark-text ellipsis"},[e._v(e._s(r.Remarks))])],2)]}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,"show-total":function(e){return"共 "+e+" 条"},current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("modal-detail-yxkf",{attrs:{show:e.modal.detailyxkf,refresh:e.pagerefresh}})],2)},o=[],s=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),n=a("b775"),c=a("ffff"),i=a("f111"),l=a("3027");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach(function(t){Object(s["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var m=[{title:"公司",scopedSlots:{customRender:"GYSName"}},{title:"姓名/身份证号",scopedSlots:{customRender:"userName"}},{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"社保截止日期",scopedSlots:{customRender:"SBEndDate"}},{title:"工资",scopedSlots:{customRender:"Jishu"}},{title:"社保账户",dataIndex:"AccountNumber"},{title:"社保户名",dataIndex:"AccountName"},{title:"备注",scopedSlots:{customRender:"Remarks"}}],f={components:{ModalDetailKf:c["default"],ModalDetailDdkf:i["default"],ModalDetailYxkf:l["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){var e;return e={visible:{show:!1},advanced:!0,columns:m},Object(s["a"])(e,"visible",!1),Object(s["a"])(e,"confirmLoading",!1),Object(s["a"])(e,"formSearch",{pageSize:5,current:1,total:0,emCardID:"",emName:"",ComName:"",addsbu:"sub"}),Object(s["a"])(e,"form",this.$form.createForm(this)),Object(s["a"])(e,"modifyForm",this.$form.createForm(this)),Object(s["a"])(e,"AFormImportRules",{iptInput:[{required:!0,message:"请输入"}]}),Object(s["a"])(e,"dataSource",[]),Object(s["a"])(e,"drawer",{}),Object(s["a"])(e,"modal",{detailyxkf:{show:!1}}),Object(s["a"])(e,"showaddLayer",!1),Object(s["a"])(e,"showmodifyLayer",!1),Object(s["a"])(e,"GYSName",""),Object(s["a"])(e,"moment",moment),Object(s["a"])(e,"UserArray",[]),Object(s["a"])(e,"DeptArray",[]),Object(s["a"])(e,"cityList",{}),Object(s["a"])(e,"ServiceType",{}),Object(s["a"])(e,"BillingMode",{}),Object(s["a"])(e,"BuJiaoBillingType",{}),Object(s["a"])(e,"ServiceTypeArray",[]),Object(s["a"])(e,"BillingModeArray",[]),Object(s["a"])(e,"BuJiaoBillingTypeArray",[]),Object(s["a"])(e,"FlowType",{}),Object(s["a"])(e,"FlowTypeArray",[]),Object(s["a"])(e,"YanglaoStatus",[]),Object(s["a"])(e,"ShiyeStatus",[]),Object(s["a"])(e,"YiliaoStatus",[]),Object(s["a"])(e,"GongjijinStatus",[]),Object(s["a"])(e,"RuLiZhiStatus",[]),Object(s["a"])(e,"RuLiZhiStatusObject",{}),Object(s["a"])(e,"sbType",{}),Object(s["a"])(e,"DoType",{}),Object(s["a"])(e,"DoTypeArray",[]),Object(s["a"])(e,"Deleted",{}),Object(s["a"])(e,"ContactClass",[]),Object(s["a"])(e,"RSB_ContactType",[]),Object(s["a"])(e,"ContactClassObject",{}),Object(s["a"])(e,"RSB_ContactTypeObject",{}),Object(s["a"])(e,"BujiaoTypeArray",[]),Object(s["a"])(e,"BujiaoTypeObject",{}),Object(s["a"])(e,"ChargeType",{}),e},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail={},this.form.resetFields()},init:function(){var e=this;n["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.DeptArray=t.data.Dept,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),n["a"].post("/api/Dim/Enum/GetEnum",{Names:["YanglaoStatus","ShiyeStatus","YiliaoStatus","GongjijinStatus","RuLiZhiStatus","sbType","DoType","ContactClass","RSB_ContactType","BujiaoType","ChargeType","ServiceType","FlowType"]}).then(function(t){0===t.code?(console.log(t),e.YanglaoStatus=t.data.YanglaoStatus,e.ShiyeStatus=t.data.ShiyeStatus,e.YiliaoStatus=t.data.YiliaoStatus,e.GongjijinStatus=t.data.GongjijinStatus,e.RuLiZhiStatus=t.data.RuLiZhiStatus,e.DoTypeArray=t.data.DoType,t.data.RuLiZhiStatus.forEach(function(t,a){e.RuLiZhiStatusObject[t.key]=t.text}),t.data.sbType.forEach(function(t,a){e.sbType[t.key]=t.text}),t.data.DoType.forEach(function(t,a){e.DoType[t.key]=t.text}),e.pagechange(1),e.ContactClass=t.data.ContactClass,e.RSB_ContactType=t.data.RSB_ContactType,e.BujiaoTypeArray=t.data.BujiaoType,t.data.ContactClass.forEach(function(t,a){e.ContactClassObject[t.key]=t.text}),t.data.RSB_ContactType.forEach(function(t,a){e.RSB_ContactTypeObject[t.key]=t.text}),t.data.BujiaoType.forEach(function(t,a){e.BujiaoTypeObject[t.key]=t.text}),t.data.ChargeType.forEach(function(t,a){e.ChargeType[t.key]=t.text}),t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),t.data.FlowType.forEach(function(t,a){e.FlowType[t.key]=t.text})):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=t.formSearch,null!=t.formSearch.nianyue&&void 0!=t.formSearch.nianyue?a.FirstBillMonth=moment(t.formSearch.nianyue).format("YYYY-MM-DD"):a.FirstBillMonth="",t.$loading.open(),n["a"].post("/api/Employee/shebao/DLH_ConfirmNoFrozen",t.formSearch).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},detail:function(e){var t=this,a={UserArray:t.UserArray,YanglaoStatus:t.YanglaoStatus,ShiyeStatus:t.ShiyeStatus,YiliaoStatus:t.YiliaoStatus,GongjijinStatus:t.GongjijinStatus,cityList:t.cityList,RLZGUID:e.RLZGUID,PGUID:e.PGUID,RuLiZhiStatusObject:t.RuLiZhiStatusObject,sbType:t.sbType,DoType:t.DoType,DoTypeArray:t.DoTypeArray,ContactClass:t.ContactClass,RSB_ContactType:t.RSB_ContactType,ContactClassObject:t.ContactClassObject,RSB_ContactTypeObject:t.RSB_ContactTypeObject,BujiaoTypeArray:t.BujiaoTypeArray,BujiaoTypeObject:t.BujiaoTypeObject,ChargeType:t.ChargeType,FlowType:t.FlowType,ServiceType:t.ServiceType};t.modal.detailyxkf=d({show:!0,role:98},a)}}},p=f,h=(a("6fae"),a("2877")),y=Object(h["a"])(p,r,o,!1,null,null,null);t["default"]=y.exports},"6fae":function(e,t,a){"use strict";var r=a("795f"),o=a.n(r);o.a},"795f":function(e,t,a){},9405:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:4,lg:4,xl:7,xxl:5}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:7,xxl:5}},[a("a-form-item",{attrs:{label:"月份",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!0,placeholder:"请选择月份"},on:{change:e.changeNianYue},model:{value:e.formSearch.nianyue,callback:function(t){e.$set(e.formSearch,"nianyue",t)},expression:"formSearch.nianyue"}})],1)],1),a("a-col",{attrs:{md:16,lg:16,xl:10,xxl:14}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.showSbConfirm}},[e._v("查看申增社保交接情况")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:e.showSbConfirmsj}},[e._v("查看申减社保交接情况")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"index"},scopedSlots:e._u([{key:"add",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n                 "+e._s(r["申增"])+"\n                "),r["申增"]!=r["申增已处理"]?a("span",{staticStyle:{color:"red"}},[e._v("("+e._s(r["申增"]-r["申增已处理"])+")")]):e._e()])}},{key:"sub",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n                 "+e._s(r["申减"])+"\n                "),r["申减"]!=r["申减已处理"]?a("span",{staticStyle:{color:"red"}},[e._v("("+e._s(r["申减"]-r["申减已处理"])+")")]):e._e()])}},{key:"addAction",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[r.AddStatus?a("a",{on:{click:function(t){return e.detail(r,"add")}}},[e._v("申增详情\n                 ")]):e._e(),1==r.AddStatus?a("a-divider",{attrs:{type:"vertical"}}):e._e(),1==r.AddStatus?a("a",{on:{click:function(t){return e.exportDlh(r,"add")}}},[e._v("导出申增")]):e._e()],1)}},{key:"subAction",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[r.SubStatus?a("a",{on:{click:function(t){return e.detail(r,"sub")}}},[e._v("申减详情\n                  ")]):e._e(),1==r.SubStatus?a("a-divider",{attrs:{type:"vertical"}}):e._e(),1==r.SubStatus?a("a",{on:{click:function(t){return e.exportDlh(r,"sub")}}},[e._v("导出申减")]):e._e()],1)}},{key:"cancle",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[0===r.申增已处理&&0===r.申减已处理?a("a",{on:{click:function(t){return e.disslock(r)}}},[e._v("取消锁定")]):e._e()])}},{key:"finish",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[r["申减"]===r["申减已处理"]&&r["申增"]===r["申增已处理"]?a("span",[e._v("已完成")]):a("a",{staticStyle:{color:"red"}},[e._v("未完成")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,"show-total":function(e){return"共 "+e+" 条"},current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("modal-detail",{attrs:{show:e.modal.detail},on:{refresh:e.pagerefresh}}),a("modal-sb-confirm",{attrs:{show:e.modal.showsbconfirm,refresh:e.pagerefresh}}),a("modal-sb-confirm-sj",{attrs:{show:e.modal.showsbconfirmsj,refresh:e.pagerefresh}})],1)],1)],1)},o=[],s=(a("8e6e"),a("456d"),a("bd86")),n=(a("ac6a"),a("b775")),c=a("1610"),i=a("246c"),l=a("585f"),u=a("c32d"),d=a.n(u);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach(function(t){Object(s["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var p=[{title:"完成状态",scopedSlots:{customRender:"finish"}},{title:"公司名称",dataIndex:"ComName"},{title:"年月",dataIndex:"年月"},{title:"申增社保数",scopedSlots:{customRender:"add"}},{title:"申减社保数",scopedSlots:{customRender:"sub"}},{title:"申增操作",scopedSlots:{customRender:"addAction"}},{title:"申减操作",scopedSlots:{customRender:"subAction"}},{title:"取消操作",scopedSlots:{customRender:"cancle"}}],h={props:{},components:{ModalDetail:c["default"],ModalSbConfirm:i["default"],ModalSbConfirmSj:l["default"]},data:function(){return{advanced:!0,columns:p,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,ComName:""},count:"5",form:this.$form.createForm(this),resultForm:this.$form.createForm(this),AFormImportRules:{selected:[{required:!0,message:"请选择"}]},dataSource:[],UserArray:[],modal:{detail:{show:!1},showsbconfirm:{show:!1},showsbconfirmsj:{show:!1}},sbType:{},ChargingCycle:{},moment:d.a,ServiceType:{},showResultLayer:!1,ORLZGUID:"",sbTypeList:[]}},created:function(){var e=this;e.init()},methods:{init:function(){var e=this;n["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),n["a"].post("/api/Dim/Enum/GetEnum",{Names:["sbType","ChargingCycle","ServiceType"]}).then(function(t){0===t.code?(e.sbTypeList=t.data.sbType,t.data.sbType.forEach(function(t,a){e.sbType[t.key]=t.text}),t.data.ChargingCycle.forEach(function(t,a){e.ChargingCycle[t.key]=t.text}),t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=f({},t.formSearch),a.nianyue?a.nianyue=t.formSearch.nianyue.format("YYYY-MM-DD"):a.nianyue="",t.$loading.open(),n["a"].post("/api/order/order_rlz/NewDLHFrozenList",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},detail:function(e,t){var a=this;this.modal.detail={show:!0,faDetail:e,sbType:a.sbType,sbTypeList:a.sbTypeList,type:t}},downloadList:function(){var e=document.createElement("a");e.href="/api/Order/Order_RLZ/ExportOrderRLZ",e.click()},changeNianYue:function(e,t){this.formSearch.nianyue=""!=t?d()(t):void 0},exportDlh:function(e,t){var a=document.createElement("a");console.log("/api/order/order_rlz/ExportComList?ORLZFGuid="+e.ORLZFGuid+"&&addsub="+t),a.href="/api/order/order_rlz/ExportComList?ORLZFGuid="+e.ORLZFGuid+"&&addsub="+t,a.click()},disslock:function(e){var t=this;n["a"].post("/api/order/order_rlz/DeleteFrozen",{ORLZFGuid:e.ORLZFGuid,addsub:"add"}).then(function(e){t.$loading.close(),0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){t.$loading.close(),console.log(e)}),n["a"].post("/api/order/order_rlz/DeleteFrozen",{ORLZFGuid:e.ORLZFGuid,addsub:"sub"}).then(function(e){t.$loading.close(),0===e.code?(t.$message.success(e.msg),t.initPage()):t.$message.error(e.msg)}).catch(function(e){t.$loading.close(),console.log(e)})},showSbConfirm:function(){this.modal.showsbconfirm={show:!0}},showSbConfirmsj:function(){this.modal.showsbconfirmsj={show:!0}}}},y=h,b=a("2877"),S=Object(b["a"])(y,r,o,!1,null,null,null);t["default"]=S.exports},e24e:function(e,t,a){"use strict";var r=a("f5f9"),o=a.n(r);o.a},f5f9:function(e,t,a){}}]);