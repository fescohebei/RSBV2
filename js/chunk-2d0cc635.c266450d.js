(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc635"],{"4e5c":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.initPage}},[t._v("刷新")]),79==this.role?a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.exportlist}},[t._v("导出")]):t._e()],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"SBGUID"},scopedSlots:t._u([{key:"KefuUserid",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n              "+t._s(t.UserArray[o.KefuUserid])+"\n              ")])}},{key:"CityCode",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n              "+t._s(t.cityList[o.CityCode])+"\n              ")])}},{key:"PaiDanDate",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n              "+t._s(t.moment(o.PaiDanDate).format("YYYY-MM-DD"))+"\n              ")])}},{key:"Startime",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n              "+t._s(t.moment(o.Startime).format("YYYY-MM-DD"))+"\n              ")])}},{key:"sbType",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n              "+t._s(t.sbType[o.sbType])+"\n              ")])}},{key:"userName",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(o)}}},[t._v(t._s(o["姓名"]))])])}},{key:"action",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(o)}}},[t._v("查看")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2),a("modal-detail",{attrs:{show:t.modal.detail},on:{refresh:t.pagerefresh}})],1)],1)],1)},n=[],i=(a("8e6e"),a("456d"),a("bd86")),r=(a("ac6a"),a("c5f6"),a("b775")),c=a("2c4b"),s=a("c32d"),u=a.n(s);function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,o)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach(function(e){Object(i["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var y=[{title:"客服",scopedSlots:{customRender:"KefuUserid"}},{title:"参保地",scopedSlots:{customRender:"CityCode"}},{title:"派出公司",dataIndex:"CreateTime"},{title:"公司",dataIndex:"ComName"},{title:"姓名",scopedSlots:{customRender:"userName"}},{title:"身份证号",dataIndex:"身份证号"},{title:"客户派单日期",scopedSlots:{customRender:"PaiDanDate"}},{title:"特殊事项备注",dataIndex:"rlz_Remark"},{title:"协议",dataIndex:"protocol"},{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"开始日期",scopedSlots:{customRender:"Startime"}},{title:"工资",dataIndex:"Jishu"},{title:"比例",dataIndex:"Bili"},{title:"备注",dataIndex:"Remarks"},{title:"操作",scopedSlots:{customRender:"action"}}],d={props:{type:{type:Object,default:function(){return{}}},role:{type:Number,default:0}},components:{ModalDetail:c["default"]},data:function(){return{advanced:!0,columns:y,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0},count:"5",form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],UserArray:[],TodoType:{},modal:{detail:{show:!1}},YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],RuLiZhiStatus:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:[],Deleted:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},moment:u.a,ServiceType:{},FlowType:{}}},mounted:function(){var t=this;t.init()},methods:{init:function(){var t=this;r["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","City"]}).then(function(e){0===e.code&&(t.UserArray=e.data.User,t.cityList=e.data.City)}).catch(function(t){console.log(t)}),r["a"].post("/api/Dim/Enum/GetEnum",{Names:["YanglaoStatus","ShiyeStatus","YiliaoStatus","GongjijinStatus","RuLiZhiStatus","sbType","DoType","ContactClass","RSB_ContactType","BujiaoType","ChargeType","TodoType","ServiceType","FlowType"]}).then(function(e){0===e.code?(e.data.TodoType.forEach(function(e,a){t.TodoType[e.key]=e.text}),t.YanglaoStatus=e.data.YanglaoStatus,t.ShiyeStatus=e.data.ShiyeStatus,t.YiliaoStatus=e.data.YiliaoStatus,t.GongjijinStatus=e.data.GongjijinStatus,t.RuLiZhiStatus=e.data.RuLiZhiStatus,t.DoTypeArray=e.data.DoType,e.data.RuLiZhiStatus.forEach(function(e,a){t.RuLiZhiStatusObject[e.key]=e.text}),e.data.sbType.forEach(function(e,a){t.sbType[e.key]=e.text}),e.data.DoType.forEach(function(e,a){t.DoType[e.key]=e.text}),t.pagechange(1),t.ContactClass=e.data.ContactClass,t.RSB_ContactType=e.data.RSB_ContactType,t.BujiaoTypeArray=e.data.BujiaoType,e.data.ContactClass.forEach(function(e,a){t.ContactClassObject[e.key]=e.text}),e.data.RSB_ContactType.forEach(function(e,a){t.RSB_ContactTypeObject[e.key]=e.text}),e.data.BujiaoType.forEach(function(e,a){t.BujiaoTypeObject[e.key]=e.text}),e.data.ChargeType.forEach(function(e,a){t.ChargeType[e.key]=e.text}),e.data.ServiceType.forEach(function(e,a){t.ServiceType[e.key]=e.text}),e.data.FlowType.forEach(function(e,a){t.FlowType[e.key]=e.text})):t.$message.error(e.msg)}).catch(function(t){console.log(t)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a={};e.formSearch.current=t,a=p({},e.formSearch),a.role=e.role,e.$loading.open(),r["a"].post("/api/Employee/shebao/BuJiaoNoHandover",a).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},detail:function(t){var e=this;this.modal.detail={show:!0,UserArray:e.UserArray,YanglaoStatus:e.YanglaoStatus,ShiyeStatus:e.ShiyeStatus,YiliaoStatus:e.YiliaoStatus,GongjijinStatus:e.GongjijinStatus,cityList:{},RLZGUID:t.RLZGUID,PGUID:t.PGUID,RuLiZhiStatusObject:e.RuLiZhiStatusObject,sbType:e.sbType,DoType:e.DoType,DoTypeArray:e.DoTypeArray,ContactClass:e.ContactClass,RSB_ContactType:e.RSB_ContactType,ContactClassObject:e.ContactClassObject,RSB_ContactTypeObject:e.RSB_ContactTypeObject,BujiaoTypeArray:e.BujiaoTypeArray,BujiaoTypeObject:e.BujiaoTypeObject,ChargeType:e.ChargeType,role:e.role,FlowType:e.FlowType,ServiceType:e.ServiceType}},exportlist:function(){var t=this,e=document.createElement("a");e.href="/api/Employee/shebao/ExportNoHandover?Role="+t.role,e.click()},pullList:function(){var t=this,e={};e.count=t.count,e.todoType=t.type.type,e.day=t.type.day,t.$loading.open(),r["a"].post("/api/todo/RuLiZhi/Pull",e).then(function(e){t.$loading.close(),0===e.code&&t.$message.success("拉取成功！")}).catch(function(e){t.$loading.close(),console.log(e)})}}},f=d,S=a("2877"),h=Object(S["a"])(f,o,n,!1,null,null,null);e["default"]=h.exports}}]);