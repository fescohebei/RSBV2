(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1880de28","chunk-326ef693","chunk-47eaefaf","chunk-311372c6"],{"20e0":function(t,e,a){},"741f":function(t,e,a){"use strict";var n=a("20e0"),o=a.n(n);o.a},"8c21":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:5}},[a("a-form-item",{attrs:{label:"月份",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"},model:{value:t.formSearch.nianYue,callback:function(e){t.$set(t.formSearch,"nianYue",e)},expression:"formSearch.nianYue"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.initPage}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.Upload}},[t._v("导入")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(e){return t.exportTemplate("qgxs")}}},[t._v("模板下载")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"PayColGuid"},scopedSlots:t._u([{key:"ImportUserID",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n                "+t._s(t.UserArray[n.ImportUserID])+"\n              ")])}},{key:"totalMoney",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n                "+t._s((100*n["社保合计"]+100*n["一次性费用"]+100*n["服务费"])/100)+"\n              ")])}},{key:"BillStatus",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n                "+t._s(t.BillStatus[n.BillStatus])+"\n              ")])}},{key:"action",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(n)}}},[t._v("明细")]),0==n.BillStatus?[a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.sure(n)}}},[t._v("确认")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.deletePaid(n)}}},[t._v("删除")])]:t._e(),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.downloadPaid(n)}}},[t._v("下载")])],2)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2),a("modal-detail",{attrs:{show:t.modal.detail},on:{refresh:t.pagerefresh}}),a("modal-upload",{attrs:{show:t.modal.Upload,refresh:t.initPage}})],1)],1)],1)},o=[],r=(a("8e6e"),a("456d"),a("bd86")),i=(a("ac6a"),a("b775")),s=a("9c9f"),l=a("c875"),c=a("c32d"),u=a.n(c);function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(a,!0).forEach(function(e){Object(r["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var f=[{title:"期间",dataIndex:"nianYue"},{title:"导入时间",dataIndex:"ImportTime"},{title:"客服",scopedSlots:{customRender:"ImportUserID"}},{title:"总金额",dataIndex:"Total"},{title:"状态",scopedSlots:{customRender:"BillStatus"}},{title:"操作",scopedSlots:{customRender:"action"}}],h={props:{type:{type:Object,default:function(){return{}}}},components:{ModalDetail:s["default"],ModalUpload:l["default"]},data:function(){return{advanced:!0,columns:f,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,GYSName:""},count:"5",form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],UserArray:[],modal:{detail:{show:!1},Upload:{show:!1}},sbType:{},ChargingCycle:{},moment:u.a,ServiceType:{},BillStatus:{}}},created:function(){var t=this;t.init()},methods:{init:function(){var t=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","City"]}).then(function(e){0===e.code&&(t.UserArray=e.data.User,t.cityList=e.data.City)}).catch(function(t){console.log(t)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["BillStatus"]}).then(function(e){0===e.code?(e.data.BillStatus.forEach(function(e,a){t.BillStatus[e.key]=e.text}),t.pagechange(1)):t.$message.error(e.msg)}).catch(function(t){console.log(t)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a={};e.formSearch.current=t,a=p({},e.formSearch),a.nianYue=a.nianYue?u()(a.nianYue).format("YYYY-MM"):"",e.$loading.open(),i["a"].post("/api/order/Payment/getGYSColPaymentList",a).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},detail:function(t){var e=this;this.modal.detail={show:!0,PayColGuid:t.PayColGuid,BillStatus:e.BillStatus,UserArray:e.UserArray}},Upload:function(){this.modal.Upload={show:!0}},sure:function(t){var e=this;this.$confirm({title:"确认这条信息?",content:"",onOk:function(){i["a"].post("/api/Order/Payment/GYSColBillConfirm",{PayColGuid:t.PayColGuid}).then(function(t){0===t.code?(e.$message.success(t.msg),e.initPage()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},onCancel:function(){}})},deletePaid:function(t){var e=this;this.$confirm({title:"确定删除该条信息?",content:"点击确定删除。",onOk:function(){i["a"].post("/api/Order/Payment/GYSColBillDelete",{PayColGuid:t.PayColGuid}).then(function(t){0===t.code?(e.$message.success(t.msg),e.initPage()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},onCancel:function(){}})},downloadPaid:function(t){var e=document.createElement("a");e.href="/api/order/Payment/ExportGYSColDetailPayment?PayColGuid="+t.PayColGuid,e.click()},exportTemplate:function(t){var e=document.createElement("a");e.href="/api/Company/UploadFile/exportTemplate?type="+t,e.click()}}},m=h,g=a("2877"),v=Object(g["a"])(m,n,o,!1,null,null,null);e["default"]=v.exports},"9c9f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:t.onClose}},[a("template",{slot:"title"},[t._v("\n  实付供应商批量明细\n")]),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"PGYSGuid"},scopedSlots:t._u([{key:"ImportUserID",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n      "+t._s(t.visible.UserArray[n.ImportUserID])+"\n    ")])}},{key:"totalMoney",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n      "+t._s((100*n["社保合计"]+100*n["一次性费用"]+100*n["服务费"])/100)+"\n    ")])}},{key:"BillStatus",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n      "+t._s(t.visible.BillStatus[n.BillStatus])+"\n    ")])}},{key:"action",fn:function(e,n){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detaildy(n)}}},[t._v("明细")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(e){return t.downloadPaid(n)}}},[t._v("下载")])],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2),a("modal-detail",{attrs:{show:t.modal.detail},on:{refresh:t.pagerefresh}})],2)},o=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=a("b775"),s=a("c32d"),l=a.n(s),c=a("a167");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach(function(e){Object(r["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var p=[{title:"供应商",dataIndex:"GYSName"},{title:"期间",dataIndex:"nianYue"},{title:"导入时间",dataIndex:"ImportTime"},{title:"客服",scopedSlots:{customRender:"ImportUserID"}},{title:"总金额",scopedSlots:{customRender:"totalMoney"}},{title:"状态",scopedSlots:{customRender:"BillStatus"}},{title:"操作",scopedSlots:{customRender:"action"}}],f={components:{ModalDetail:c["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,PayColGuid:"",BillStatus:{},UserArray:{}},form:this.$form.createForm(this),formSearch:{pageSize:5,current:1,total:0},assetsdetail:{},modal:{detail:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:l.a,dataSource:[],columns:p,detail:{}}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){this.pagechange(1)},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a={};e.formSearch.current=t,a=d({},e.formSearch),a.PayColGuid=e.visible.PayColGuid,e.$loading.open(),i["a"].post("/api/order/Payment/getGYSColDetailPaymentList",a).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count,e.detail=t.data.coll)}).catch(function(t){e.$loading.close(),console.log(t)})},detaildy:function(t){var e=this;this.modal.detail={show:!0,PGYSGuid:t.PGYSGuid,BillStatus:e.visible.BillStatus}},downloadPaid:function(t){var e=document.createElement("a");e.href="/api/order/Payment/ExportGYSPayment?PGYSGuid="+t.PGYSGuid,e.click()}}},h=f,m=(a("b19b"),a("2877")),g=Object(m["a"])(h,n,o,!1,null,"0a74523a",null);e["default"]=g.exports},a167:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:t.onClose}},[a("template",{slot:"title"},[t._v("\n  供应商实付明细\n")]),a("div",{staticClass:"detail"},[a("a-row",[a("a-col",{attrs:{span:2,align:"right"}},[t._v("状态：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.visible.BillStatus[t.detail.BillStatus]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("期间：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail.nianYue))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("一次性费用：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["一次性费用"]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("服务费：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["服务费"]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("公积金个人：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["公积金个人"]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("公积金企业：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["公积金企业"]))])],1),a("a-row",[a("a-col",{attrs:{span:2,align:"right"}},[t._v("养老个人：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["养老个人"]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("养老企业：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["养老企业"]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("医疗个人：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["医疗个人"]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("医疗企业：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["医疗企业"]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("大病个人：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["大病个人"]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("大病企业：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["大病企业"]))])],1),a("a-row",[a("a-col",{attrs:{span:2,align:"right"}},[t._v("失业个人：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["失业个人"]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("失业企业：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["失业企业"]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("工伤个人：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["工伤个人"]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("工伤企业：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["工伤企业"]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("生育个人：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["生育个人"]))]),a("a-col",{attrs:{span:2,align:"right"}},[t._v("生育企业：")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.detail["生育企业"]))])],1)],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"GYSDGuid"}},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],2)},o=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=a("b775"),s=a("c32d"),l=a.n(s);function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach(function(e){Object(r["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var d=[{title:"姓名",dataIndex:"姓名"},{title:"身份证号",dataIndex:"身份证号"},{title:"服务年月",dataIndex:"服务年月"},{title:"社保个人合计",dataIndex:"社保个人合计"},{title:"社保单位合计",dataIndex:"社保单位合计"},{title:"一次性费用",dataIndex:"一次性费用"},{title:"服务费",dataIndex:"服务费"}],p={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,PGYSGuid:"",BillStatus:{}},form:this.$form.createForm(this),formSearch:{pageSize:5,current:1,total:0},assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:l.a,dataSource:[],columns:d,detail:{}}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){this.pagechange(1)},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a={};e.formSearch.current=t,a=u({},e.formSearch),a.PGYSGuid=e.visible.PGYSGuid,e.$loading.open(),i["a"].post("/api/order/Payment/getGYSPaymentDetailList",a).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count,e.detail=t.data.sbgys)}).catch(function(t){e.$loading.close(),console.log(t)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},f=p,h=(a("741f"),a("2877")),m=Object(h["a"])(f,n,o,!1,null,"612e6fdb",null);e["default"]=m.exports},a7c4:function(t,e,a){},b19b:function(t,e,a){"use strict";var n=a("a7c4"),o=a.n(n);o.a},c011:function(t,e,a){},c51e:function(t,e,a){"use strict";var n=a("c011"),o=a.n(n);o.a},c875:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001,footer:!1,centered:!0},on:{cancel:t.onClose}},[a("template",{slot:"title"},[t._v("\n  导入\n")]),a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("a-row",{attrs:{gutter:11}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"",labelCol:{span:7},wrapperCol:{span:254}}},[a("a-spin",{attrs:{tip:"上传中",spinning:t.spinning}},[a("a-upload-dragger",{attrs:{name:"file",multiple:!1,action:"/api/Order/Import/GYSColPaymentImport",accept:".xls, .xlsx",showUploadList:!1,withCredentials:!0,beforeUpload:t.uploadbefore},on:{change:t.uploadchange}},[a("p",{staticClass:"ant-upload-drag-icon"},[a("a-icon",{attrs:{type:"inbox"}})],1),a("p",{staticClass:"ant-upload-text"},[t._v("\n                    将文件拖到此处，或\n                    "),a("a-tag",{attrs:{color:"#2db7f5"}},[t._v("点击上传")])],1),a("p",{staticClass:"ant-upload-hint"},[t._v("只能上传xls/xlsx文件")])])],1)],1)],1)],1)],1),a("a-modal",{attrs:{destroyOnClose:!0,visible:this.errorShow,maskClosable:!1,width:400,zIndex:1001,footer:!1,centered:!0},on:{cancel:t.onCloseError}},[a("template",{slot:"title"},[t._v("\n        增员派单导入失败\n      ")]),a("a-row",t._l(t.errorlist,function(e,n){return a("a-col",{key:n,attrs:{span:22}},[t._v(t._s(n+1)+". "+t._s(e.msg))])}),1),a("a-tag",{staticStyle:{"margin-top":"15px"},attrs:{color:"red"}},[t._v("\n        请修改后重新导入！！！\n      ")])],2)],2)},o=[],r=(a("b775"),a("c32d"),{props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[]},form:this.$form.createForm(this),AFormImportRules:{},assetsdetail:{},errdatarows:[],errorShow:!1,errorlist:[]}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},uploadbefore:function(t){var e=this;this.form.validateFields(function(t,a){var n=!t;n&&(e.spinning=!0)})},uploadchange:function(t){var e=t.file,a=t.fileList;t.event;if("uploading"!==e.status&&console.log(e,a),"done"==e.status){var n=e.response;n.code>0?(this.$message.error(n.msg),n.data&&(this.errdatarows=n.data)):n.data.rows.length>0&&""!=n.data.rows[0].msg?(this.errorlist=n.data.rows,this.errorShow=!0):(this.$message.success("导入成功"),this.refresh(),this.onClose())}this.spinning=!1},onCloseError:function(){this.errorShow=!1}}}),i=r,s=(a("c51e"),a("2877")),l=Object(s["a"])(i,n,o,!1,null,"7cd94dd1",null);e["default"]=l.exports}}]);