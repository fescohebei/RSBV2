(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b7ab4fb"],{5702:function(t,e,a){"use strict";var i=a("f878"),s=a.n(i);s.a},"6b1b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1200,zIndex:1001,footer:!1},on:{cancel:t.onClose}},[a("template",{slot:"title"},[t._v("\n  详情\n")]),null==t.visible.faDetail.RLZGUID?[a("div",{staticClass:"tab-title"},[t._v("基本信息")]),a("a-row",[a("a-col",{attrs:{span:1}},[t._v("姓名:")]),a("a-col",{attrs:{span:2}},[t._v(t._s(t.visible.faDetail["姓名"]))]),a("a-col",{attrs:{span:2}},[t._v("身份证号:")]),a("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.faDetail["身份证号"]))])],1)]:[a("div",{staticClass:"tab-title"},[t._v("客户信息")]),a("table",{staticClass:"detail-table",attrs:{border:"1"}},[a("tr",[a("td",[t._v("客户名称:")]),a("td",[t._v(t._s(t.comService.ComName))]),a("td",[t._v("服务流程:")]),a("td",[t._v(t._s(t.FlowType[t.comService.FlowType]))]),a("td",[t._v("服务类型:")]),a("td",[t._v(t._s(t.ServiceType[t.comService.ServiceType]))]),a("td",[t._v("公积金服务类型:")]),a("td",[t._v(t._s(t.ServiceType[t.comService.GJJServiceType]))])]),a("tr",[a("td",[t._v("客服:")]),a("td",[t._v(t._s(t.UserArray[t.RuLiZhi.KefuUserid]))]),a("td",[t._v("订单客服:")]),a("td",t._l(t.comServiceCity,function(e){return a("span",{key:e.OrderUserid},[t._v(t._s(t.UserArray[e.OrderUserid])+" ")])}),0),a("td",[t._v("驻场客服")]),a("td",[t._v(t._s(t.UserArray[t.comService.OnsiteUserid]))])])]),a("div",{staticClass:"tab-title"},[t._v("基本信息")]),a("table",{staticClass:"detail-table",attrs:{border:"1"}},[a("tr",[a("td",[t._v("客服:")]),a("td",[t._v(t._s(t.UserArray[t.RuLiZhi.KefuUserid]))]),a("td",[t._v("参保地:")]),a("td",[t._v(t._s(t.cityList[t.RuLiZhi.CityCode]))]),a("td",[t._v("派出公司:")]),a("td",[t._v(t._s(t.RuLiZhi.GYSName))]),a("td",[t._v("公司:")]),a("td",[t._v(t._s(t.RuLiZhi.ComName))])]),a("tr",[a("td",[t._v("姓名:")]),a("td",[t._v(t._s(t.RuLiZhi["姓名"]))]),a("td",[t._v("身份证号:")]),a("td",[t._v(t._s(t.RuLiZhi["身份证号"]))]),a("td",[t._v(t._s(t.RuLiZhi.Status>40?"离职联系方式:":"联系方式:"))]),a("td",[t._v(t._s(t.RuLiZhi.rzLinkTel))]),a("td",[t._v("员工邮箱:")]),a("td",[t._v(t._s(t.RuLiZhi.rzEmail))])]),t.RuLiZhi.Status>40?[a("tr",[a("td",[t._v("唯一号:")]),a("td"),a("td",[t._v("离职派单时间:")]),a("td",[t._v(t._s(t.RuLiZhi.lzPaiDanDate?t.moment(t.RuLiZhi.lzPaiDanDate).format("YYYY-MM-DD"):""))]),a("td",[t._v("状态:")]),a("td",[t._v(t._s(t.RuLiZhiStatusObject[t.RuLiZhi.Status]))]),a("td",[t._v("是否领失业金:")]),a("td",[t._v(t._s(t.RuLiZhi.reqShiyejin?"是":"否"))])]),a("tr",[a("td",[t._v("离职原因:")]),a("td",[t._v(t._s(t.RuLiZhi.lzReason))]),a("td",[t._v("是否含档:")]),a("td",[t._v(t._s(t.RuLiZhi.DangAn?"是":"否"))]),a("td",[t._v("特殊事项备注:")]),a("td",[t._v(t._s(t.RuLiZhi.lzRemarks))]),a("td",[t._v("驻场客服:")]),a("td",[t._v(t._s(t.UserArray[t.RuLiZhi.OnsiteUserid]))])]),a("tr",[a("td",[t._v("订单客服:")]),a("td",t._l(t.RuLiZhi.OrderUserids,function(e){return a("span",{key:e.OrderUserid},[t._v(t._s(t.UserArray[e.OrderUserid])+" ")])}),0)])]:[a("tr",[a("td",[t._v("唯一号:")]),a("td"),a("td",[t._v("派单时间:")]),a("td",[t._v(t._s(t.RuLiZhi.PaiDanDate?t.moment(t.RuLiZhi.PaiDanDate).format("YYYY-MM-DD"):""))]),a("td",[t._v("状态:")]),a("td",[t._v(t._s(t.RuLiZhiStatusObject[t.RuLiZhi.Status]))]),a("td",[t._v("是否需要联系员工:")]),a("td",[t._v(t._s(t.RuLiZhi.reqLink?"是":"否"))])]),a("tr",[a("td",[t._v("是否含档:")]),a("td",[t._v(t._s(t.RuLiZhi.DangAn?"是":"否"))]),a("td",[t._v("特殊事项备注:")]),a("td",[t._v(t._s(t.RuLiZhi.Remarks))]),a("td",[t._v("驻场客服:")]),a("td",[t._v(t._s(t.UserArray[t.RuLiZhi.OnsiteUserid]))]),a("td",[t._v("订单客服:")]),a("td",t._l(t.RuLiZhi.OrderUserids,function(e){return a("span",{key:e.OrderUserid},[t._v(t._s(t.UserArray[e.OrderUserid])+" ")])}),0)])]],2)],a("div",{staticClass:"tab-title"},[t._v("对比信息")]),a("a-table",{attrs:{columns:t.columnsBase,dataSource:t.orderDetail,pagination:!1,rowKey:"PRDGuid",bordered:!0},scopedSlots:t._u([{key:"DiffStatus",fn:function(e){return a("span",{staticStyle:{margin:"-16px 0",display:"block"}},[t._v("\n        "+t._s(t.DiffStatuslist[e.DiffStatus])+"\n      ")])}},{key:"sbType",fn:function(e){return a("span",{staticStyle:{margin:"-16px 0",display:"block"}},[t._v("\n        "+t._s(t.visible.sbType[e.sbType])+"\n      ")])}},{key:"bill",fn:function(e,i){return a("span",{staticStyle:{margin:"-16px 0",display:"block"}},[a("div",{staticClass:"doubleLine",staticStyle:{"border-bottom":"1px solid #ddd"}},[t._v(t._s(i["r个人"]))]),a("div",{staticClass:"doubleLine"},[t._v(t._s(i["r企业"]))])])}},{key:"payment",fn:function(e,i){return a("span",{staticStyle:{margin:"-16px 0",display:"block"}},[a("div",{staticClass:"doubleLine",staticStyle:{"border-bottom":"1px solid #ddd"}},[t._v(t._s(i["p个人"]))]),a("div",{staticClass:"doubleLine"},[t._v(t._s(i["p企业"]))])])}},{key:"diff",fn:function(e,i){return a("span",{staticStyle:{margin:"-16px 0",display:"block"}},[a("div",{staticClass:"doubleLine",staticStyle:{"border-bottom":"1px solid #ddd"}},[t._v(t._s(i["个人差额"]))]),a("div",{staticClass:"doubleLine"},[t._v(t._s(i["企业差额"]))])])}},{key:"action",fn:function(e,i){return a("span",{staticStyle:{margin:"-16px 0",display:"block"}},[0==i.DiffStatus?a("a",{on:{click:function(e){return t.handle(i)}}},[t._v("处理")]):t._e()])}}])},[a("span",{staticStyle:{margin:"-16px 0",display:"block"},attrs:{slot:"sbObject"},slot:"sbObject"},[a("div",[a("div",{staticClass:"doubleLine",staticStyle:{"border-bottom":"1px solid #ddd"}},[t._v("个人")]),a("div",{staticClass:"doubleLine"},[t._v("企业")])])])]),a("div",{staticClass:"tab-title"},[t._v("社保信息")]),a("a-table",{attrs:{columns:t.columnsShebao,dataSource:t.shebaolist,pagination:!1,rowKey:"SBGUID"},scopedSlots:t._u([{key:"sbType",fn:function(e,i){return a("span",{},[t._v(t._s(t.visible.sbType[i.sbType]))])}},{key:"Startime",fn:function(e,i){return a("span",{},[t._v(t._s(i.Startime?t.moment(i.Startime).format("YYYY-MM-DD"):""))])}},{key:"ActStartime",fn:function(e,i){return a("span",{},[t._v(t._s(i.ActStartime?t.moment(i.ActStartime).format("YYYY-MM-DD"):""))])}},{key:"action",fn:function(e,i){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(i)}}},[t._v("详情")])])}}])}),a("div",{staticClass:"tab-title"},[t._v("应收")]),a("a-table",{attrs:{columns:t.columnsReceive,dataSource:t.receivelist,pagination:!1,rowKey:"RECGuid"},scopedSlots:t._u([{key:"sbType",fn:function(e,i){return a("span",{staticStyle:{margin:"-16px 0",display:"block"}},[t._v("\n        "+t._s(t.visible.sbType[i.sbType])+"\n      ")])}},{key:"action",fn:function(e,i){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(i)}}},[t._v("详情")])])}}])}),a("div",{staticClass:"tab-title"},[t._v("实付")]),a("a-table",{attrs:{columns:t.columnsPayment,dataSource:t.paymentlist,pagination:!1,rowKey:"PDGuid"},scopedSlots:t._u([{key:"sbType",fn:function(e,i){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n        "+t._s(t.visible.sbType[i.sbType])+"\n      ")])}}])}),a("div",{staticClass:"tab-title"},[t._v("医保补缴")]),a("a-table",{attrs:{columns:t.columnsbujiao,dataSource:t.bujiao,pagination:!1,rowKey:"SBBJGUID"},scopedSlots:t._u([{key:"BujiaoType",fn:function(e,i){return a("span",{},[t._v(t._s(t.BujiaoTypeObject[i.BujiaoType]))])}},{key:"ChargeStatus",fn:function(e,i){return a("span",{},[t._v(t._s(0==i.ChargeStatus?"未缴费":"已缴费"))])}},{key:"ChargeuserID",fn:function(e,i){return a("span",{},[t._v(t._s(t.UserArray[i.ChargeuserID]))])}},{key:"ChargeType",fn:function(e,i){return a("span",{},[t._v(t._s(t.ChargeType[i.ChargeType]))])}}])}),a("a-modal",{attrs:{title:"处理差额",visible:t.showHandleLayer,"confirm-loading":t.confirmLoading,centered:""},on:{ok:t.resultOk,cancel:t.resultCancel}},[a("a-form",{attrs:{form:t.handleForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"处理:",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["DiffStatus",{rules:t.AFormImportRules.selected}],expression:"['DiffStatus',{rules:AFormImportRules.selected}]"}],attrs:{allowClear:!0},on:{change:t.handleChange}},t._l(t.DiffStatus,function(e){return a("a-select-option",{key:e.key},[t._v(t._s(e.text))])}),1)],1),"1"==t.handleType?[a("a-form-item",{attrs:{label:"个人金额:",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["personMoney",{initialValue:t.orderrlz["个人金额"],rules:t.AFormImportRules.inputed}],expression:"['personMoney',{initialValue:orderrlz['个人金额'],rules:AFormImportRules.inputed}]"}],attrs:{placeholder:"请输入"}})],1),a("a-form-item",{attrs:{label:"企业金额:",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["comMoney",{initialValue:t.orderrlz["企业金额"],rules:t.AFormImportRules.inputed}],expression:"['comMoney',{initialValue:orderrlz['企业金额'],rules:AFormImportRules.inputed}]"}],attrs:{placeholder:"请输入"}})],1)]:t._e(),a("a-form-item",{attrs:{label:"备注:",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["DiffRemark"],expression:"['DiffRemark']"}],attrs:{row:"4"}})],1)],2)],1)],1)])],1)],2)},s=[],r=(a("8e6e"),a("456d"),a("bd86")),n=(a("ac6a"),a("b775")),o=a("c32d"),l=a.n(o);function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,i)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(a,!0).forEach(function(e){Object(r["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var u=[{title:"状态",scopedSlots:{customRender:"DiffStatus"},align:"center"},{title:"年月",dataIndex:"nianYue",align:"center"},{title:"社保类型",scopedSlots:{customRender:"sbType"},align:"center"},{title:"社保政策对象",scopedSlots:{customRender:"sbObject"},align:"center"},{title:"账单",scopedSlots:{customRender:"bill"},align:"center"},{title:"实付",scopedSlots:{customRender:"payment"},align:"center"},{title:"差额",scopedSlots:{customRender:"diff"},align:"center"},{title:"医保补缴",dataIndex:"BuJiao",align:"center"},{title:"操作",scopedSlots:{customRender:"action"},align:"center"}],p=[{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"开始日期",scopedSlots:{customRender:"Startime"}},{title:"实际起做月份",scopedSlots:{customRender:"ActStartime"}},{title:"工资",dataIndex:"Jishu"},{title:"比例",dataIndex:"Bili"},{title:"备注",dataIndex:"Remarks"}],f=[{title:"期间",dataIndex:"服务年月"},{title:"社保类型",scopedSlots:{customRender:"sbType"}},{title:"个人",dataIndex:"个人"},{title:"企业",dataIndex:"企业"}],v=[{title:"期间",dataIndex:"nianYue"},{title:"社保类型",scopedSlots:{customRender:"sbType"}},{title:"个人",dataIndex:"个人实付"},{title:"企业",dataIndex:"企业实付"}],m=[{title:"基数",dataIndex:"Jishu"},{title:"比例",dataIndex:"Bili"},{title:"手续费",dataIndex:"Shouxufei"},{title:"补缴开始月份",dataIndex:"BeginMonth"},{title:"补缴结束月份",dataIndex:"EndMonth"},{title:"补缴月数",dataIndex:"TotalMonth"},{title:"补缴金额",dataIndex:"Amount"},{title:"收费方式",scopedSlots:{customRender:"ChargeType"}},{title:"补缴类型",scopedSlots:{customRender:"BujiaoType"}},{title:"状态",scopedSlots:{customRender:"ChargeStatus"}},{title:"备注",dataIndex:"Remarks"},{title:"客服",scopedSlots:{customRender:"ChargeuserID"}}],y={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:{},sbType:{},ChargingCycle:{},ServiceType:{},PRDDGuid:"",faDetail:{}},columnsBase:u,columnsShebao:p,columnsReceive:f,columnsPayment:v,columnsbujiao:m,form:this.$form.createForm(this),orderDetail:[],paymentlist:[],receivelist:[],shebaolist:[],modal:{},moment:l.a,sbType:{},BillStatus:{},CompareStatus:{},showHandleLayer:!1,confirmLoading:!1,PRDDGuid:"",DiffStatus:[],handleForm:this.$form.createForm(this),AFormImportRules:{selected:[{required:!0,message:"请选择"}],inputed:[{required:!0,message:"请输入"}]},DiffStatuslist:{},UserArray:{},cityList:{},RuLiZhiStatusObject:{},ServiceType:{},FlowType:{},comService:{},RuLiZhi:{},comServiceCity:[],handleType:"",orderrlz:{},bujiao:[],ChargeType:{},BujiaoTypeObject:{}}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){var t=this;n["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(e){0===e.code&&(t.UserArray=e.data.User,t.cityList=e.data.City)}).catch(function(t){console.log(t)}),n["a"].post("/api/Dim/Enum/GetEnum",{Names:["sbType","BillStatus","CompareStatus","DiffStatus","RuLiZhiStatus","ServiceType","FlowType","ChargeType","BujiaoType"]}).then(function(e){0===e.code?(e.data.sbType.forEach(function(e,a){t.sbType[e.key]=e.text}),e.data.BillStatus.forEach(function(e,a){t.BillStatus[e.key]=e.text}),e.data.CompareStatus.forEach(function(e,a){t.CompareStatus[e.key]=e.text}),e.data.DiffStatus.forEach(function(e,a){t.DiffStatuslist[e.key]=e.text}),e.data.RuLiZhiStatus.forEach(function(e,a){t.RuLiZhiStatusObject[e.key]=e.text}),e.data.ServiceType.forEach(function(e,a){t.ServiceType[e.key]=e.text}),e.data.FlowType.forEach(function(e,a){t.FlowType[e.key]=e.text}),e.data.ChargeType.forEach(function(e,a){t.ChargeType[e.key]=e.text}),e.data.BujiaoType.forEach(function(e,a){t.BujiaoTypeObject[e.key]=e.text}),t.DiffStatus=e.data.DiffStatus,t.searchDetail()):t.$message.error(e.msg)}).catch(function(t){console.log(t)})},searchDetail:function(){var t=this;n["a"].post("/api/order/diff/DiffPersonDetail",{PRDDGuid:t.visible.PRDDGuid,RLZGUID:t.visible.faDetail.RLZGUID}).then(function(e){t.$loading.close(),0===e.code&&(t.orderDetail=e.data.diff,t.paymentlist=e.data.paymentlist,t.receivelist=e.data.receivelist,t.shebaolist=e.data.shebaolist,t.RuLiZhi=e.data.RuLiZhi,t.comService=e.data.comService,t.comServiceCity=e.data.comServiceCity,t.orderrlz=e.data.orderrlz,t.bujiao=e.data.bujiao)}).catch(function(e){t.$loading.close(),console.log(e)})},handle:function(t){this.showHandleLayer=!0,this.PRDDGuid=t.PRDDGuid},resultOk:function(t){var e=this,a={};this.handleForm.validateFields(function(t,i){t||(a=c({},i),a.PRDDGuid=e.PRDDGuid,a.RLZGUID=e.visible.faDetail.RLZGUID,n["a"].post("/api/order/diff/diffDetailConfirm",a).then(function(t){0===t.code?(e.showHandleLayer=!1,e.PRDDGuid="",e.$message.success(t.msg),e.searchDetail()):e.$message.error(t.msg)}).catch(function(t){console.log(t)}))})},resultCancel:function(t){this.showHandleLayer=!1,this.handleType=""},handleChange:function(t){}}},_=y,h=(a("5702"),a("2877")),b=Object(h["a"])(_,i,s,!1,null,"e16317ea",null);e["default"]=b.exports},f878:function(t,e,a){}}]);