(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf989b16","chunk-a8cfdb5e","chunk-0d5ec26a","chunk-07439cf6","chunk-48cb4523","chunk-006a42f6"],{"053a":function(e,t,a){"use strict";var o=a("985b"),r=a.n(o);r.a},"102c":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("新增")]),a("a-form",{attrs:{form:e.yiliaoForm}},[a("div",{staticClass:"form-box"},[a("a-row",[a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"补缴基数",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Jishu",{initialValue:e.BaseMinNum,rules:e.yiliaoFormImportRules.iptInput}],expression:"['Jishu',{initialValue:BaseMinNum,rules:yiliaoFormImportRules.iptInput}]"}]})],1)],1),a("a-col",{staticStyle:{display:"none"},attrs:{span:6}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Bili",{initialValue:"0",rules:e.yiliaoFormImportRules.iptInput}],expression:"['Bili',{initialValue:'0',rules:yiliaoFormImportRules.iptInput}]"}],attrs:{readOnly:""}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"手续费/月",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Shouxufei",{initialValue:"20",rules:e.yiliaoFormImportRules.iptInputReq}],expression:"['Shouxufei',{initialValue:'20',rules:yiliaoFormImportRules.iptInputReq}]"}]})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"补缴开始月份",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["BeginMonth",{rules:e.yiliaoFormImportRules.iptInputReq}],expression:"['BeginMonth',{rules:yiliaoFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"补缴截止月份",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["EndMonth",{rules:e.yiliaoFormImportRules.iptInputReq}],expression:"['EndMonth',{rules:yiliaoFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"补缴金额",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Amount",{rules:e.yiliaoFormImportRules.iptInput}],expression:"['Amount',{rules:yiliaoFormImportRules.iptInput}]"}],attrs:{readOnly:"",placeholder:"计算后自动填充"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"补缴类型",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["BujiaoType",{rules:e.yiliaoFormImportRules.selectReq}],expression:"['BujiaoType',{rules:yiliaoFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.BujiaoTypeArray,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"补缴月份",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["bjyf"],expression:"['bjyf']"}],attrs:{readOnly:"",placeholder:"计算后自动填充"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{staticStyle:{"margin-left":"20px"},attrs:{label:"",labelCol:{span:2},wrapperCol:{span:19}}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["ChargeStatus"],expression:"['ChargeStatus']"}]}),e._v(" 确认收款\n              ")],1)],1)],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"-15px"},attrs:{label:"备注",labelCol:{span:2},wrapperCol:{span:22}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks"],expression:"['Remarks']"}],attrs:{placeholder:"备注",rows:3}})],1)],1)],1),a("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"90px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.computerYiliao}},[e._v("计算补缴金额")]),a("a-button",{staticStyle:{"margin-left":"12px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.saveYiliao}},[e._v("保存")])],1)],1)])],1)},r=[],i=(a("c5f6"),a("b775")),n={props:{RLZGUID:{type:String,default:""},PGUID:{type:String,default:""},BujiaoTypeArray:{type:Array,default:function(){return{}}},yiliaoList:{type:Function,default:null},BaseMinNum:{type:Number,default:""}},data:function(){return{yiliaoForm:this.$form.createForm(this),yiliaoFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}],iptInput:[{required:!1,message:"请输入"}],selectReq:[{required:!0,message:"请选择"}],onsite:[{required:!1,message:"请选择"}]}}},created:function(){this.init()},methods:{init:function(){},computerYiliao:function(){var e=this,t={};e.yiliaoForm.validateFields(function(a,o){a||(t=o,t.PGUID=e.PGUID,t.RLZGUID=e.RLZGUID,t.BeginMonth=moment(o.BeginMonth).format("YYYY-MM"),t.EndMonth=moment(o.EndMonth).format("YYYY-MM"),void 0==o.ChargeStatus&&(t.ChargeStatus=!1),e.$loading.open(),i["a"].post("/api/Employee/shebao/GetMoney",t).then(function(t){e.$loading.close(),0===t.code?e.yiliaoForm.setFieldsValue({bjyf:t.data.TotalMonth,Amount:t.data.Amount,Bili:t.data.Bili}):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})},saveYiliao:function(){var e=this,t={};e.yiliaoForm.validateFields(function(a,o){a||(t=o,t.PGUID=e.PGUID,t.RLZGUID=e.RLZGUID,t.BeginMonth=moment(o.BeginMonth).format("YYYY-MM"),t.EndMonth=moment(o.EndMonth).format("YYYY-MM"),void 0==o.ChargeStatus&&(t.ChargeStatus=!1),e.$loading.open(),i["a"].post("/api/Employee/shebao/YiBaoBuJiao",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.$emit("yiliaoList"),e.yiliaoForm.resetFields()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})}}},s=n,l=(a("a803"),a("2877")),c=Object(l["a"])(s,o,r,!1,null,"6ab2c972",null);t["default"]=c.exports},"14e2":function(e,t,a){},"2c4b":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),1==e.canDo?a("shebao-search",{attrs:{RuLiZhi:e.RuLiZhi,RLZGUID:e.visible.RLZGUID,YanglaoStatus:e.visible.YanglaoStatus,ShiyeStatus:e.visible.ShiyeStatus,YiliaoStatus:e.visible.YiliaoStatus,GongjijinStatus:e.visible.GongjijinStatus}}):e._e(),a("fuli",{ref:"fuli",attrs:{comService:e.comService,emSheBaos:e.emSheBaos,cando:e.canDo,sbType:e.visible.sbType,DoType:e.visible.DoType,role:e.visible.role,UserArray:e.visible.UserArray,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-add",{attrs:{ContactClass:e.visible.ContactClass,RSB_ContactType:e.visible.RSB_ContactType,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{connectList:e.refreshConnectList}}),a("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-add",{ref:"bjadd",attrs:{BujiaoTypeArray:e.visible.BujiaoTypeArray,BaseMinNum:e.BaseMinNum,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{yiliaoList:e.refreshYiliaoList}}),a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},r=[],i=a("b775"),n=a("c32d"),s=a.n(n),l=a("2d6e"),c=a("86ba"),u=a("a5c1"),p=a("633c"),m=a("ac85"),d=a("6e12"),y=a("102c"),f=a("8354"),h={components:{personBase:l["default"],paidan:c["default"],shebaoSearch:u["default"],fuli:p["default"],connectAdd:m["default"],connectList:d["default"],yibaobujiaoAdd:y["default"],yibaobujiaoList:f["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:s.a,comServiceCity:[],comService:{},canDo:!1,BaseMinNum:0,hisrlz:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;i["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.canDo=t.data.canDo,e.hisrlz=t.data.hisrlz,null!=t.data.shebaoPolicy?e.BaseMinNum=t.data.shebaoPolicy.BaseMinNum:e.BaseMinNum=0)}).catch(function(e){console.log(e)})},refreshDetail:function(){console.log("ddd"),this.init()},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},b=h,v=(a("ce41"),a("2877")),S=Object(v["a"])(b,o,r,!1,null,"37753d1e",null);t["default"]=S.exports},"3aab":function(e,t,a){"use strict";var o=a("14e2"),r=a.n(o);r.a},"4e5c":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.initPage}},[e._v("刷新")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"SBGUID"},scopedSlots:e._u([{key:"KefuUserid",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n              "+e._s(e.UserArray[o.KefuUserid])+"\n              ")])}},{key:"CityCode",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n              "+e._s(e.cityList[o.CityCode])+"\n              ")])}},{key:"PaiDanDate",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n              "+e._s(e.moment(o.PaiDanDate).format("YYYY-MM-DD"))+"\n              ")])}},{key:"Startime",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n              "+e._s(e.moment(o.Startime).format("YYYY-MM-DD"))+"\n              ")])}},{key:"sbType",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n              "+e._s(e.sbType[o.sbType])+"\n              ")])}},{key:"protocol",fn:function(t,o){return[a("a-tooltip",[a("template",{slot:"title"},[e._v("\n                    "+e._s(o.protocol)+"\n                  ")]),a("div",{staticClass:"remark-text ellipsis"},[e._v(e._s(o.protocol))])],2)]}},{key:"userName",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(t){return e.detail(o)}}},[e._v(e._s(o["姓名"]))])])}},{key:"action",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(t){return e.detail(o)}}},[e._v("查看")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("modal-detail",{attrs:{show:e.modal.detail},on:{refresh:e.pagerefresh}})],1)],1)],1)},r=[],i=(a("8e6e"),a("456d"),a("bd86")),n=(a("ac6a"),a("c5f6"),a("b775")),s=a("2c4b"),l=a("c32d"),c=a.n(l);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach(function(t){Object(i["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var m=[{title:"客服",scopedSlots:{customRender:"KefuUserid"}},{title:"参保地",scopedSlots:{customRender:"CityCode"}},{title:"派出公司",dataIndex:"CreateTime"},{title:"公司",dataIndex:"ComName"},{title:"姓名",scopedSlots:{customRender:"userName"}},{title:"身份证号",dataIndex:"身份证号"},{title:"客户派单日期",scopedSlots:{customRender:"PaiDanDate"}},{title:"特殊事项备注",dataIndex:"rlz_Remark"},{title:"协议",scopedSlots:{customRender:"protocol"}},{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"开始日期",scopedSlots:{customRender:"Startime"}},{title:"工资",dataIndex:"Jishu"},{title:"比例",dataIndex:"Bili"},{title:"备注",dataIndex:"Remarks"},{title:"操作",scopedSlots:{customRender:"action"}}],d={props:{type:{type:Object,default:function(){return{}}},role:{type:Number,default:0}},components:{ModalDetail:s["default"]},data:function(){return{advanced:!0,columns:m,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0},count:"5",form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],UserArray:[],TodoType:{},modal:{detail:{show:!1}},YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],RuLiZhiStatus:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:[],Deleted:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},moment:c.a,ServiceType:{},FlowType:{}}},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;n["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),n["a"].post("/api/Dim/Enum/GetEnum",{Names:["YanglaoStatus","ShiyeStatus","YiliaoStatus","GongjijinStatus","RuLiZhiStatus","sbType","DoType","ContactClass","RSB_ContactType","BujiaoType","ChargeType","TodoType","ServiceType","FlowType"]}).then(function(t){0===t.code?(t.data.TodoType.forEach(function(t,a){e.TodoType[t.key]=t.text}),e.YanglaoStatus=t.data.YanglaoStatus,e.ShiyeStatus=t.data.ShiyeStatus,e.YiliaoStatus=t.data.YiliaoStatus,e.GongjijinStatus=t.data.GongjijinStatus,e.RuLiZhiStatus=t.data.RuLiZhiStatus,e.DoTypeArray=t.data.DoType,t.data.RuLiZhiStatus.forEach(function(t,a){e.RuLiZhiStatusObject[t.key]=t.text}),t.data.sbType.forEach(function(t,a){e.sbType[t.key]=t.text}),t.data.DoType.forEach(function(t,a){e.DoType[t.key]=t.text}),e.pagechange(1),e.ContactClass=t.data.ContactClass,e.RSB_ContactType=t.data.RSB_ContactType,e.BujiaoTypeArray=t.data.BujiaoType,t.data.ContactClass.forEach(function(t,a){e.ContactClassObject[t.key]=t.text}),t.data.RSB_ContactType.forEach(function(t,a){e.RSB_ContactTypeObject[t.key]=t.text}),t.data.BujiaoType.forEach(function(t,a){e.BujiaoTypeObject[t.key]=t.text}),t.data.ChargeType.forEach(function(t,a){e.ChargeType[t.key]=t.text}),t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),t.data.FlowType.forEach(function(t,a){e.FlowType[t.key]=t.text})):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=p({},t.formSearch),a.role=t.role,t.$loading.open(),n["a"].post("/api/Employee/shebao/BuJiaoNoHandover",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},detail:function(e){var t=this;this.modal.detail={show:!0,UserArray:t.UserArray,YanglaoStatus:t.YanglaoStatus,ShiyeStatus:t.ShiyeStatus,YiliaoStatus:t.YiliaoStatus,GongjijinStatus:t.GongjijinStatus,cityList:{},RLZGUID:e.RLZGUID,PGUID:e.PGUID,RuLiZhiStatusObject:t.RuLiZhiStatusObject,sbType:t.sbType,DoType:t.DoType,DoTypeArray:t.DoTypeArray,ContactClass:t.ContactClass,RSB_ContactType:t.RSB_ContactType,ContactClassObject:t.ContactClassObject,RSB_ContactTypeObject:t.RSB_ContactTypeObject,BujiaoTypeArray:t.BujiaoTypeArray,BujiaoTypeObject:t.BujiaoTypeObject,ChargeType:t.ChargeType,role:t.role,FlowType:t.FlowType,ServiceType:t.ServiceType}}}},y=d,f=(a("c335"),a("2877")),h=Object(f["a"])(y,o,r,!1,null,null,null);t["default"]=h.exports},"51ba":function(e,t,a){"use strict";var o=a("cdf7"),r=a.n(o);r.a},"6e12":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("联系记录")]),a("a-table",{attrs:{columns:e.connectColumns,dataSource:e.connectSource,pagination:!1,size:"middle",rowKey:"CRGUID"},scopedSlots:e._u([{key:"ContactClass",fn:function(t,o){return a("span",{},[e._v(e._s(e.ContactClassObject[o.ContactClass]))])}},{key:"ContactType",fn:function(t,o){return a("span",{},[e._v(e._s(e.RSB_ContactTypeObject[o.ContactType]))])}},{key:"Userid",fn:function(t,o){return a("span",{},[e._v(e._s(e.UserArray[o.Userid]))])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.connectList}})],1)],2)],1)},r=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),n=a("c32d"),s=a.n(n),l=a("b775");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach(function(t){Object(i["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var p=[{title:"方向",scopedSlots:{customRender:"ContactClass"}},{title:"类别",scopedSlots:{customRender:"ContactType"}},{title:"客服",scopedSlots:{customRender:"Userid"}},{title:"时间",dataIndex:"Contacttime"},{title:"下次联系时间",dataIndex:"NextContacttime"},{title:"内容",dataIndex:"ContactContent"},{title:"情况说明",dataIndex:"transactState"},{title:"办理状态",dataIndex:"explain"}],m={props:{RLZGUID:{type:String,default:""},PGUID:{type:String,default:""},ContactClassObject:{type:Object,default:function(){return{}}},RSB_ContactTypeObject:{type:Object,default:function(){return{}}},UserArray:{type:Object,default:function(){return{}}}},data:function(){return{connectColumns:p,moment:s.a,connectSource:[],formSearch:{pageSize:5,current:1,total:0}}},created:function(){this.init()},methods:{init:function(){var e=this;e.connectList(1)},connectList:function(e){var t=this;t.formSearch.current=e,l["a"].post("/api/Employee/Contact/emList",u({RLZGUID:t.RLZGUID,PGUID:t.PGUID},t.formSearch)).then(function(e){0===e.code&&(t.connectSource=e.data.rows,t.formSearch.total=e.data.count)}).catch(function(e){console.log(e)})},refreshconnectList:function(){var e=this;e.connectList(e.formSearch.current)}}},d=m,y=(a("7d78"),a("2877")),f=Object(y["a"])(d,o,r,!1,null,"51b6b234",null);t["default"]=f.exports},"7d78":function(e,t,a){"use strict";var o=a("df80"),r=a.n(o);r.a},"7dde":function(e,t,a){},8354:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("医保补缴记录")]),a("a-table",{attrs:{columns:e.yiliaoColumns,dataSource:e.yiliaoSource,pagination:!1,size:"middle",rowKey:"SBBJGUID"},scopedSlots:e._u([{key:"BujiaoType",fn:function(t,o){return a("span",{},[e._v(e._s(e.BujiaoTypeObject[o.BujiaoType]))])}},{key:"ChargeStatus",fn:function(t,o){return a("span",{},[e._v(e._s(0==o.ChargeStatus?"未缴费":"已缴费"))])}},{key:"ChargeuserID",fn:function(t,o){return a("span",{},[e._v(e._s(e.UserArray[o.ChargeuserID]))])}},{key:"ChargeType",fn:function(t,o){return a("span",{},[e._v(e._s(e.ChargeType[o.ChargeType]))])}},{key:"action",fn:function(t,o){return a("span",{},[0!=o.ChargeStatus||"76"!=e.role&&"78"!=e.role?e._e():[a("a",{on:{click:function(t){return e.confirmCharge(o)}}},[e._v("确认收款")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.deleteCharge(o)}}},[e._v("删除")])]],2)}}])}),a("a-modal",{attrs:{destroyOnClose:!0,visible:e.showCharge,maskClosable:!1,width:400},on:{cancel:e.onCloseCharge,ok:e.submitCharge}},[a("template",{slot:"title"},[e._v("\n        确认收款\n      ")]),a("a-form",{attrs:{form:e.chargeForm}},[a("a-form-item",{attrs:{label:"收费方式",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ChargeType",{rules:e.chargeForm.selectReq}],expression:"['ChargeType',{rules:chargeForm.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.ChargeTypeArray,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1)],2)],1)},r=[],i=(a("c5f6"),a("c32d")),n=a.n(i),s=a("b775"),l=[{title:"基数",dataIndex:"Jishu"},{title:"比例",dataIndex:"Bili"},{title:"手续费",dataIndex:"Shouxufei"},{title:"补缴开始月份",dataIndex:"BeginMonth"},{title:"补缴结束月份",dataIndex:"EndMonth"},{title:"补缴月数",dataIndex:"TotalMonth"},{title:"补缴金额",dataIndex:"Amount"},{title:"收费方式",scopedSlots:{customRender:"ChargeType"}},{title:"补缴类型",scopedSlots:{customRender:"BujiaoType"}},{title:"状态",scopedSlots:{customRender:"ChargeStatus"}},{title:"备注",dataIndex:"Remarks"},{title:"客服",scopedSlots:{customRender:"ChargeuserID"}},{title:"操作",scopedSlots:{customRender:"action"}}],c={props:{RLZGUID:{type:String,default:""},PGUID:{type:String,default:""},BujiaoTypeObject:{type:Object,default:function(){return{}}},RSB_ContactTypeObject:{type:Object,default:function(){return{}}},UserArray:{type:Object,default:function(){return{}}},ChargeType:{type:Object,default:function(){return{}}},role:{type:Number,default:0}},data:function(){return{yiliaoColumns:l,moment:n.a,yiliaoSource:[],showCharge:!1,charge:{SBBJGUID:""},chargeForm:this.$form.createForm(this),chargeFormImportRules:{selectReq:[{required:!0,message:"请选择"}]},ChargeTypeArray:[]}},created:function(){this.init()},methods:{init:function(){var e=this;s["a"].post("/api/Dim/Enum/GetEnum",{Names:["ChargeType"]}).then(function(t){0===t.code?e.ChargeTypeArray=t.data.ChargeType:e.$message.error(t.msg)}).catch(function(e){console.log(e)}),e.yiliaoList()},yiliaoList:function(){var e=this;s["a"].post("/api/Employee/shebao/emYiLiaoBuJiao",{RLZGUID:e.RLZGUID}).then(function(t){0===t.code&&(e.yiliaoSource=t.data)}).catch(function(e){console.log(e)})},confirmCharge:function(e){this.showCharge=!0,this.charge.SBBJGUID=e.SBBJGUID},deleteCharge:function(e){var t=this;this.$confirm({title:"确定删除该条信息?",content:"点击确定删除。",onOk:function(){s["a"].post("/api/Employee/shebao/DeleteShouFei",{SBBJGUID:e.SBBJGUID}).then(function(e){0===e.code?(t.$message.success(e.msg),t.yiliaoList()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},onCloseCharge:function(){this.showCharge=!1},submitCharge:function(){var e=this,t={};e.chargeForm.validateFields(function(a,o){a||(t=o,t.SBBJGUID=e.charge.SBBJGUID,e.$loading.open(),s["a"].post("/api/Employee/shebao/QueRenShouFei",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.yiliaoList(),e.onCloseCharge(),e.chargeForm.resetFields()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})}}},u=c,p=(a("053a"),a("2877")),m=Object(p["a"])(u,o,r,!1,null,"1f4ac580",null);t["default"]=m.exports},"86ba":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("派单信息")]),a("a-table",{attrs:{columns:e.columnsPaidan,dataSource:e.hisrlz,pagination:!1,size:"middle",rowKey:"index"},scopedSlots:e._u([{key:"PaiDanDate",fn:function(t,o){return a("span",{},[e._v(e._s(o.PaiDanDate?e.moment(o.PaiDanDate).format("YYYY-MM-DD"):""))])}},{key:"lzPaiDanDate",fn:function(t,o){return a("span",{},[e._v(e._s(o.lzPaiDanDate?e.moment(o.lzPaiDanDate).format("YYYY-MM-DD"):""))])}},{key:"Status",fn:function(t,o){return a("span",{},[e._v(e._s(e.RuLiZhiStatusObject[o.Status]))])}},{key:"KefuUserid",fn:function(t,o){return a("span",{},[e._v(e._s(e.UserArray[o.KefuUserid]))])}}])})],1)},r=[],i=a("c32d"),n=a.n(i),s=[{title:"状态",scopedSlots:{customRender:"Status"}},{title:"派单日期",scopedSlots:{customRender:"PaiDanDate"}},{title:"派出公司",dataIndex:"GYSName"},{title:"公司",dataIndex:"ComName"},{title:"离职派单日期",scopedSlots:{customRender:"lzPaiDanDate"}},{title:"客服",scopedSlots:{customRender:"KefuUserid"}}],l={props:{hisrlz:{type:Array,default:function(){return[]}},UserArray:{type:Object,default:function(){return{}}},RuLiZhiStatusObject:{type:Object,default:function(){return{}}}},data:function(){return{columnsPaidan:s,moment:n.a}}},c=l,u=(a("51ba"),a("2877")),p=Object(u["a"])(c,o,r,!1,null,"a6246d1e",null);t["default"]=p.exports},"985b":function(e,t,a){},a3e9:function(e,t,a){},a5c1:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("社保查询信息")]),a("a-form",{attrs:{form:e.comForm}},[a("div",{staticClass:"form-box"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"入职材料",labelCol:{span:2},wrapperCol:{span:16}}},[a("a-row",[a("a-col",{attrs:{span:6}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["rzdjb",{valuePropName:e.rzdjb,initialValue:e.sheBaoDetail.Cailiao.rzdjb}],expression:"['rzdjb',{valuePropName: rzdjb,initialValue:sheBaoDetail.Cailiao.rzdjb}]"}],staticClass:"aaa",style:e.sheBaoDetail.Cailiao.rzdjb?{"background-color":e.scolor}:""}),e._v(" 入职登记表和须知\n              ")],1),a("a-col",{attrs:{span:8}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["rzsfzfyj",{valuePropName:e.rzsfzfyj,initialValue:e.sheBaoDetail.Cailiao.rzsfzfyj}],expression:"['rzsfzfyj',{valuePropName: rzsfzfyj,initialValue:sheBaoDetail.Cailiao.rzsfzfyj}]"}],style:e.sheBaoDetail.Cailiao.rzsfzfyj?{"background-color":e.scolor}:""}),e._v(" 身份证复印件\n              ")],1)],1)],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"养老",labelCol:{span:2},wrapperCol:{span:4}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Yanglao",{initialValue:e.sheBaoDetail.Query.Yanglao,rules:e.comFormImportRules.select}],expression:"['Yanglao',{initialValue:sheBaoDetail.Query.Yanglao,rules:comFormImportRules.select}]"}],attrs:{allowClear:!0}},e._l(e.YanglaoStatus,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"失业",labelCol:{span:2},wrapperCol:{span:4}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Shiye",{initialValue:e.sheBaoDetail.Query.Shiye,rules:e.comFormImportRules.select}],expression:"['Shiye',{initialValue:sheBaoDetail.Query.Shiye,rules:comFormImportRules.select}]"}],attrs:{allowClear:!0}},e._l(e.ShiyeStatus,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"医保",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["YibaoStatus",{initialValue:e.sheBaoDetail.Query.YibaoStatus,rules:e.comFormImportRules.select}],expression:"['YibaoStatus',{initialValue:sheBaoDetail.Query.YibaoStatus,rules:comFormImportRules.select}]"}],attrs:{allowClear:!0}},e._l(e.YiliaoStatus,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:7}},[a("a-form-item",{attrs:{label:"参保单位",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["YibaoCom",{initialValue:e.sheBaoDetail.Query.YibaoCom}],expression:"['YibaoCom',{initialValue:sheBaoDetail.Query.YibaoCom}]"}]})],1)],1),a("a-col",{attrs:{span:7}},[a("a-form-item",{attrs:{label:"最大缴费期",labelCol:{span:6},wrapperCol:{span:14}}},[e.sheBaoDetail.Query.YibaoStopDate?a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["YibaoStopDate"],expression:"['YibaoStopDate']"}],staticStyle:{width:"100%"},attrs:{"default-value":e.moment(e.sheBaoDetail.Query.YibaoStopDate),format:"YYYY-MM"}}):e._e(),""==e.sheBaoDetail.Query.YibaoStopDate?a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["YibaoStopDate"],expression:"['YibaoStopDate']"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM"}}):e._e()],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"公积金",labelCol:{span:2},wrapperCol:{span:4}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Gongjijin",{initialValue:e.sheBaoDetail.Query.Gongjijin,rules:e.comFormImportRules.select}],expression:"['Gongjijin',{initialValue:sheBaoDetail.Query.Gongjijin,rules:comFormImportRules.select}]"}],attrs:{allowClear:!0}},e._l(e.GongjijinStatus,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"档案",labelCol:{span:2},wrapperCol:{span:4}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Dangan",{initialValue:e.sheBaoDetail.Query.Dangan,rules:e.comFormImportRules.iptInputReq}],expression:"['Dangan',{initialValue:sheBaoDetail.Query.Dangan,rules:comFormImportRules.iptInputReq}]"}]})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"其他",labelCol:{span:2},wrapperCol:{span:4}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{initialValue:e.sheBaoDetail.Query.Remarks,rules:e.comFormImportRules.iptInputReq}],expression:"['Remarks',{initialValue:sheBaoDetail.Query.Remarks,rules:comFormImportRules.iptInputReq}]"}]})],1)],1)],1),a("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"102px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.saveSbSearch}},[e._v("保存")])],1)],1)])],1)},r=[],i=a("b775"),n=a("c32d"),s=a.n(n),l={props:{RLZGUID:{type:String,default:""},RuLiZhi:{type:Object,default:{}},YanglaoStatus:{type:Array,default:function(){return{}}},ShiyeStatus:{type:Array,default:function(){return{}}},YiliaoStatus:{type:Array,default:function(){return{}}},GongjijinStatus:{type:Array,default:function(){return{}}}},computed:{scolor:function(){return 20==this.RuLiZhi.ServiceType?"#FF5722":"#1890ff"}},data:function(){return{comForm:this.$form.createForm(this),comFormImportRules:{iptInputReq:[{required:!1,message:"请输入"}],select:[{required:!1,message:"请选择"}],onsite:[{required:!1,message:"请选择"}]},rzdjb:"unchacked",rzsfzfyj:"unchacked",sheBaoDetail:{Cailiao:{},Query:{}},moment:s.a}},created:function(){this.init()},methods:{init:function(){var e=this;i["a"].post("/api/Employee/SheBaoQuery/Detail",{RLZGUID:e.RLZGUID}).then(function(t){0===t.code&&(e.sheBaoDetail=t.data,1==t.data.Cailiao.rzdjb?e.rzdjb="checked":e.rzdjb="false",1==t.data.Cailiao.rzsfzfyj?e.rzsfzfyj="checked":e.rzsfzfyj="false",null==t.data.Query&&(e.sheBaoDetail.Query={Dangan:null,Gongjijin:"",QueryTime:"",RLZGUID:"",Remarks:null,Shiye:"",Userid:"",Yanglao:"",YibaoCom:"",YibaoStatus:"",YibaoStopDate:""}))}).catch(function(e){console.log(e)})},saveSbSearch:function(){var e=this,t={};e.comForm.validateFields(function(a,o){a||(console.log(o),t=o,t.RLZGUID=e.RLZGUID,e.$loading.open(),i["a"].post("/api/Employee/SheBaoQuery/add",t).then(function(t){e.$loading.close(),0===t.code?e.$message.success(t.msg):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})}}},c=l,u=(a("c388"),a("2877")),p=Object(u["a"])(c,o,r,!1,null,"3b280920",null);t["default"]=p.exports},a803:function(e,t,a){"use strict";var o=a("bf89"),r=a.n(o);r.a},ac85:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("新增")]),a("a-form",{attrs:{form:e.connectForm}},[a("div",{staticClass:"form-box"},[a("a-row",[a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"方向",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ContactClass",{rules:e.connectFormImportRules.selectReq}],expression:"['ContactClass',{rules:connectFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.ContactClass,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"类型",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ContactType",{rules:e.connectFormImportRules.selectReq}],expression:"['ContactType',{rules:connectFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.RSB_ContactType,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"办理状态",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["explain",{rules:e.connectFormImportRules.selectReq}],expression:"['explain',{rules:connectFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},[a("a-select-option",{key:"未办理"},[e._v("未办理")]),a("a-select-option",{key:"办理中"},[e._v("办理中")]),a("a-select-option",{key:"办理完"},[e._v("办理完")]),a("a-select-option",{key:"沿用原手续"},[e._v("沿用原手续")]),a("a-select-option",{key:"无对应手续"},[e._v("无对应手续")]),a("a-select-option",{key:"停办"},[e._v("停办")]),a("a-select-option",{key:"批量转移"},[e._v("批量转移")]),a("a-select-option",{key:"无法办理"},[e._v("无法办理")])],1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"情况说明",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["transactState",{rules:e.connectFormImportRules.selectReq}],expression:"['transactState',{rules:connectFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},[a("a-select-option",{key:"电话号码空号"},[e._v("电话号码空号")]),a("a-select-option",{key:"无人接听电话"},[e._v("无人接听电话")]),a("a-select-option",{key:"电话关机"},[e._v("电话关机")]),a("a-select-option",{key:"员工不愿在本地参保"},[e._v("员工不愿在本地参保")]),a("a-select-option",{key:"电话号码不对"},[e._v("电话号码不对")]),a("a-select-option",{key:"员工已离职"},[e._v("员工已离职")]),a("a-select-option",{key:"员工说来办"},[e._v("员工说来办")]),a("a-select-option",{key:"批量转移"},[e._v("批量转移")]),a("a-select-option",{key:"其他"},[e._v("其他")]),a("a-select-option",{key:"停办"},[e._v("停办")])],1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"下次联系时间",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["NextContacttime"],expression:"['NextContacttime']"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{"margin-left":"-15px"},attrs:{label:"联系内容",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["ContactContent",{rules:e.connectFormImportRules.remark}],expression:"['ContactContent',{rules:connectFormImportRules.remark}]"}],attrs:{placeholder:"联系内容",rows:2}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{staticStyle:{"margin-left":"20px"},attrs:{label:"",labelCol:{span:0},wrapperCol:{span:22}}},[a("a-row",[a("a-col",{attrs:{span:14}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["NoReqContact"],expression:"['NoReqContact']"}]}),e._v(" 不需要再联系\n            ")],1),a("a-col",{attrs:{span:10}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["Valid"],expression:"['Valid']"}],attrs:{"default-checked":""}}),e._v(" 联系有效\n            ")],1)],1)],1)],1)],1),a("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"75px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.saveConnect}},[e._v("保存")])],1)],1)])],1)},r=[],i=a("b775"),n={props:{RLZGUID:{type:String,default:""},PGUID:{type:String,default:""},ContactClass:{type:Array,default:function(){return{}}},RSB_ContactType:{type:Array,default:function(){return{}}},connectList:{type:Function,default:null}},data:function(){return{connectForm:this.$form.createForm(this),connectFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}],iptInput:[{required:!1,message:"请输入"}],selectReq:[{required:!0,message:"请选择"}],remark:[{required:!0,message:"请输入联系内容"}]}}},created:function(){this.init()},methods:{init:function(){},saveConnect:function(){var e=this,t={};e.connectForm.validateFields(function(a,o){a||(console.log(o),t=o,t.NextContacttime&&(t.NextContacttime=moment(o.NextContacttime).format("YYYY-MM-DD HH:mm:ss")),void 0==o.Valid&&(t.Valid=!0),void 0==o.NoReqContact&&(t.NoReqContact=!1),t.PGUID=e.PGUID,t.RLZGUID=e.RLZGUID,e.$loading.open(),i["a"].post("/api/Employee/Contact/Add",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.$emit("connectList"),e.connectForm.resetFields()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})}}},s=n,l=(a("3aab"),a("2877")),c=Object(l["a"])(s,o,r,!1,null,"61bf1366",null);t["default"]=c.exports},bf89:function(e,t,a){},c335:function(e,t,a){"use strict";var o=a("d81b"),r=a.n(o);r.a},c388:function(e,t,a){"use strict";var o=a("7dde"),r=a.n(o);r.a},cdf7:function(e,t,a){},ce41:function(e,t,a){"use strict";var o=a("a3e9"),r=a.n(o);r.a},d81b:function(e,t,a){},df80:function(e,t,a){}}]);