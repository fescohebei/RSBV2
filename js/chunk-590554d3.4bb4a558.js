(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-590554d3","chunk-7703df40","chunk-87fcc768"],{2006:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:500,zIndex:1001,centered:!0},on:{cancel:t.onClose,ok:t.handleSubmit}},[a("template",{slot:"title"},[t._v("\n  社保补费导出\n")]),a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"开始时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["begindate",{rules:t.AFormImportRules.iptInput}],expression:"['begindate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:t.changeTimeBegin}})],1),a("a-form-item",{attrs:{label:"结束时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["enddate",{rules:t.AFormImportRules.iptInput}],expression:"['enddate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:t.changeTimeEnd}})],1)],1)],2)},n=[],r=a("c32d"),i=a.n(r),s={props:{show:{type:Object,default:function(){return{show:!1}}},Role:{type:String,default:""},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,Role:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},exportData:{EndTime:"",BeginTime:""}}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},handleSubmit:function(){var t=this;this.form.validateFields(function(e,a){if(!e){var o={};o.begindate=t.exportData.BeginTime,o.enddate=t.exportData.EndTime;var n=document.createElement("a");n.href="/api/employee/shebao/GetSheBaoBuJiaoShouFeiExport?begindate="+o.begindate+"&enddate="+o.enddate,n.click(),t.onClose()}})},changeTimeBegin:function(t){this.exportData.BeginTime=i()(t).format("YYYY-MM-DD")},changeTimeEnd:function(t){this.exportData.EndTime=i()(t).format("YYYY-MM-DD")}}},c=s,l=(a("b531"),a("2877")),u=Object(l["a"])(c,o,n,!1,null,"6a488238",null);e["default"]=u.exports},"291b":function(t,e,a){},"8ea5":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:4}},[a("a-form-item",{attrs:{label:"开始时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD"},model:{value:t.formSearch.begindate,callback:function(e){t.$set(t.formSearch,"begindate",e)},expression:"formSearch.begindate"}})],1)],1),a("a-col",{attrs:{md:4}},[a("a-form-item",{attrs:{label:"结束时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD"},model:{value:t.formSearch.enddate,callback:function(e){t.$set(t.formSearch,"enddate",e)},expression:"formSearch.enddate"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.initPage}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.exportSb}},[t._v("导出")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"SBBJGUID"},scopedSlots:t._u([{key:"ChargeuserID",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n              "+t._s(t.UserArray[o.ChargeuserID])+"\n              ")])}},{key:"Done",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n              "+t._s(0==o.Done?"否":"是")+"\n              ")])}},{key:"userName",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(o)}}},[t._v(t._s(o["姓名"]))])])}},{key:"action",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(o)}}},[t._v("查看")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2),a("modal-detail",{attrs:{show:t.modal.detail},on:{refresh:t.pagerefresh}}),a("export-sbbufei",{attrs:{show:t.modal.export}})],1)],1)],1)},n=[],r=(a("8e6e"),a("456d"),a("bd86")),i=(a("ac6a"),a("c5f6"),a("b775")),s=a("2c4b"),c=a("c32d"),l=a.n(c),u=a("2006");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,o)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(a,!0).forEach(function(e){Object(r["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var f=[{title:"姓名",scopedSlots:{customRender:"userName"}},{title:"补缴社保",dataIndex:"补缴社保"},{title:"收费方式",dataIndex:"收费方式"},{title:"补缴月数",dataIndex:"TotalMonth"},{title:"补缴金额",dataIndex:"补缴金额"},{title:"服务费",dataIndex:"服务费"},{title:"合计",dataIndex:"合计"},{title:"补缴时间",dataIndex:"Chargetime"},{title:"是否交接",scopedSlots:{customRender:"Done"},align:"center"},{title:"员工客服",scopedSlots:{customRender:"ChargeuserID"}},{title:"操作",scopedSlots:{customRender:"action"}}],h={props:{type:{type:Object,default:function(){return{}}},role:{type:Number,default:0}},components:{ModalDetail:s["default"],exportSbbufei:u["default"]},data:function(){return{advanced:!0,columns:f,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0},count:"5",form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],UserArray:[],TodoType:{},modal:{detail:{show:!1},export:{show:!1}},YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],RuLiZhiStatus:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:[],Deleted:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},moment:l.a,ServiceType:{},FlowType:{}}},mounted:function(){var t=this;t.init()},methods:{init:function(){var t=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","City"]}).then(function(e){0===e.code&&(t.UserArray=e.data.User,t.cityList=e.data.City)}).catch(function(t){console.log(t)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["YanglaoStatus","ShiyeStatus","YiliaoStatus","GongjijinStatus","RuLiZhiStatus","sbType","DoType","ContactClass","RSB_ContactType","BujiaoType","ChargeType","TodoType","ServiceType","FlowType"]}).then(function(e){0===e.code?(e.data.TodoType.forEach(function(e,a){t.TodoType[e.key]=e.text}),t.YanglaoStatus=e.data.YanglaoStatus,t.ShiyeStatus=e.data.ShiyeStatus,t.YiliaoStatus=e.data.YiliaoStatus,t.GongjijinStatus=e.data.GongjijinStatus,t.RuLiZhiStatus=e.data.RuLiZhiStatus,t.DoTypeArray=e.data.DoType,e.data.RuLiZhiStatus.forEach(function(e,a){t.RuLiZhiStatusObject[e.key]=e.text}),e.data.sbType.forEach(function(e,a){t.sbType[e.key]=e.text}),e.data.DoType.forEach(function(e,a){t.DoType[e.key]=e.text}),t.pagechange(1),t.ContactClass=e.data.ContactClass,t.RSB_ContactType=e.data.RSB_ContactType,t.BujiaoTypeArray=e.data.BujiaoType,e.data.ContactClass.forEach(function(e,a){t.ContactClassObject[e.key]=e.text}),e.data.RSB_ContactType.forEach(function(e,a){t.RSB_ContactTypeObject[e.key]=e.text}),e.data.BujiaoType.forEach(function(e,a){t.BujiaoTypeObject[e.key]=e.text}),e.data.ChargeType.forEach(function(e,a){t.ChargeType[e.key]=e.text}),e.data.ServiceType.forEach(function(e,a){t.ServiceType[e.key]=e.text}),e.data.FlowType.forEach(function(e,a){t.FlowType[e.key]=e.text})):t.$message.error(e.msg)}).catch(function(t){console.log(t)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a={};e.formSearch.current=t,a=d({},e.formSearch),a.role=e.role,e.$loading.open(),i["a"].post("/api/employee/shebao/GetSheBaoBuJiaoShouFeiList",a).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},detail:function(t){var e=this;this.modal.detail={show:!0,UserArray:e.UserArray,YanglaoStatus:e.YanglaoStatus,ShiyeStatus:e.ShiyeStatus,YiliaoStatus:e.YiliaoStatus,GongjijinStatus:e.GongjijinStatus,cityList:{},RLZGUID:t.RLZGUID,PGUID:t.PGUID,RuLiZhiStatusObject:e.RuLiZhiStatusObject,sbType:e.sbType,DoType:e.DoType,DoTypeArray:e.DoTypeArray,ContactClass:e.ContactClass,RSB_ContactType:e.RSB_ContactType,ContactClassObject:e.ContactClassObject,RSB_ContactTypeObject:e.RSB_ContactTypeObject,BujiaoTypeArray:e.BujiaoTypeArray,BujiaoTypeObject:e.BujiaoTypeObject,ChargeType:e.ChargeType,role:e.role,FlowType:e.FlowType,ServiceType:e.ServiceType}},exportSb:function(){this.modal.export={show:!0}}}},y=h,m=a("2877"),S=Object(m["a"])(y,o,n,!1,null,null,null);e["default"]=S.exports},b531:function(t,e,a){"use strict";var o=a("291b"),n=a.n(o);n.a},e609:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("List",{attrs:{role:76}})},n=[],r=a("8ea5"),i={components:{List:r["default"]},data:function(){return{}},mounted:function(){},methods:{}},s=i,c=a("2877"),l=Object(c["a"])(s,o,n,!1,null,null,null);e["default"]=l.exports}}]);