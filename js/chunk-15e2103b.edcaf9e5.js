(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15e2103b"],{1006:function(e,t,a){},"2d4b":function(e,t,a){"use strict";var i=a("1006"),o=a.n(i);o.a},"2f39":function(e,t,a){},3027:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("fuli",{ref:"fuli",attrs:{comService:e.comService,emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,role:e.visible.role,UserArray:e.visible.UserArray,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refreshparent:e.refresh}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=a("b775"),r=a("c32d"),c=a.n(r),n=a("2d6e"),l=a("86ba"),u=a("a5c1"),b=a("633c"),y=a("ac85"),h=a("6e12"),p=a("102c"),f=a("8354"),m={components:{personBase:n["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:b["default"],connectAdd:y["default"],connectList:h["default"],yibaobujiaoAdd:p["default"],yibaobujiaoList:f["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:c.a,comServiceCity:[],comService:{},hisrlz:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},d=m,S=(a("ba34"),a("2877")),v=Object(S["a"])(d,i,o,!1,null,"dd7a537a",null);t["default"]=v.exports},"63f6":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1280,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n    申增社保交接情况（已确认未进入锁定）\n  ")]),a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:4}},[a("a-form-item",{attrs:{label:"操作月",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM",allowClear:!0},model:{value:e.formSearch.nianyue,callback:function(t){e.$set(e.formSearch,"nianyue",t)},expression:"formSearch.nianyue"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:8,xxl:5}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:8,xxl:5}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(t){e.$set(e.formSearch,"emCardID",t)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:8,xxl:5}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:15}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(t){e.$set(e.formSearch,"emName",t)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:6,xxl:2}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"SBGUID"},scopedSlots:e._u([{key:"GYSName",fn:function(t,i){return a("span",{staticClass:"fs12"},[e._v("\n          派出公司："+e._s(i.GYSName)),a("br"),e._v("公司："+e._s(i.ComName)+"\n        ")])}},{key:"userName",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.detail(i)}}},[e._v(e._s(i["姓名"]))]),a("br"),e._v(e._s(i["身份证号"]))])}},{key:"sbType",fn:function(t,i){return a("span",{},[e._v(e._s(e.sbType[i.sbType]))])}},{key:"FirstBillMonth",fn:function(t,i){return a("span",{},[e._v(e._s(i.FirstBillMonth_Str?e.moment(i.FirstBillMonth_Str).format("YYYY-MM"):""))])}},{key:"Jishu",fn:function(t,i){return a("span",{},[e._v("\n          "+e._s(i.Jishu)+"\n          "),null!=i.Bili&&""!=i.Bili?[a("br"),e._v("比例:"+e._s(i.Bili)+"\n          ")]:e._e()],2)}},{key:"Remarks",fn:function(t,i){return[a("a-tooltip",[a("template",{slot:"title"},[e._v("\n              "+e._s(i.Remarks)+"\n            ")]),a("div",{staticClass:"remark-text ellipsis"},[e._v(e._s(i.Remarks))])],2)]}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("modal-detail-yxkf",{attrs:{show:e.modal.detailyxkf,refresh:e.pagerefresh}})],2)},o=[],s=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),r=a("b775"),c=a("ffff"),n=a("f111"),l=a("3027");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach(function(t){Object(s["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var y=[{title:"公司",scopedSlots:{customRender:"GYSName"}},{title:"姓名/身份证号",scopedSlots:{customRender:"userName"}},{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"运行操作月",scopedSlots:{customRender:"FirstBillMonth"}},{title:"工资",scopedSlots:{customRender:"Jishu"}},{title:"社保账户",dataIndex:"AccountNumber"},{title:"社保户名",dataIndex:"AccountName"},{title:"备注",scopedSlots:{customRender:"Remarks"}}],h={components:{ModalDetailKf:c["default"],ModalDetailDdkf:n["default"],ModalDetailYxkf:l["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){var e;return e={visible:{show:!1},advanced:!0,columns:y},Object(s["a"])(e,"visible",!1),Object(s["a"])(e,"confirmLoading",!1),Object(s["a"])(e,"formSearch",{pageSize:5,current:1,total:0,emCardID:"",emName:"",ComName:"",addsbu:"add"}),Object(s["a"])(e,"form",this.$form.createForm(this)),Object(s["a"])(e,"modifyForm",this.$form.createForm(this)),Object(s["a"])(e,"AFormImportRules",{iptInput:[{required:!0,message:"请输入"}]}),Object(s["a"])(e,"dataSource",[]),Object(s["a"])(e,"drawer",{}),Object(s["a"])(e,"modal",{detailyxkf:{show:!1}}),Object(s["a"])(e,"showaddLayer",!1),Object(s["a"])(e,"showmodifyLayer",!1),Object(s["a"])(e,"GYSName",""),Object(s["a"])(e,"moment",moment),Object(s["a"])(e,"UserArray",[]),Object(s["a"])(e,"DeptArray",[]),Object(s["a"])(e,"cityList",{}),Object(s["a"])(e,"ServiceType",{}),Object(s["a"])(e,"BillingMode",{}),Object(s["a"])(e,"BuJiaoBillingType",{}),Object(s["a"])(e,"ServiceTypeArray",[]),Object(s["a"])(e,"BillingModeArray",[]),Object(s["a"])(e,"BuJiaoBillingTypeArray",[]),Object(s["a"])(e,"FlowType",{}),Object(s["a"])(e,"FlowTypeArray",[]),Object(s["a"])(e,"YanglaoStatus",[]),Object(s["a"])(e,"ShiyeStatus",[]),Object(s["a"])(e,"YiliaoStatus",[]),Object(s["a"])(e,"GongjijinStatus",[]),Object(s["a"])(e,"RuLiZhiStatus",[]),Object(s["a"])(e,"RuLiZhiStatusObject",{}),Object(s["a"])(e,"sbType",{}),Object(s["a"])(e,"DoType",{}),Object(s["a"])(e,"DoTypeArray",[]),Object(s["a"])(e,"Deleted",{}),Object(s["a"])(e,"ContactClass",[]),Object(s["a"])(e,"RSB_ContactType",[]),Object(s["a"])(e,"ContactClassObject",{}),Object(s["a"])(e,"RSB_ContactTypeObject",{}),Object(s["a"])(e,"BujiaoTypeArray",[]),Object(s["a"])(e,"BujiaoTypeObject",{}),Object(s["a"])(e,"ChargeType",{}),e},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail={},this.form.resetFields()},init:function(){var e=this;r["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.DeptArray=t.data.Dept,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),r["a"].post("/api/Dim/Enum/GetEnum",{Names:["YanglaoStatus","ShiyeStatus","YiliaoStatus","GongjijinStatus","RuLiZhiStatus","sbType","DoType","ContactClass","RSB_ContactType","BujiaoType","ChargeType","ServiceType","FlowType"]}).then(function(t){0===t.code?(console.log(t),e.YanglaoStatus=t.data.YanglaoStatus,e.ShiyeStatus=t.data.ShiyeStatus,e.YiliaoStatus=t.data.YiliaoStatus,e.GongjijinStatus=t.data.GongjijinStatus,e.RuLiZhiStatus=t.data.RuLiZhiStatus,e.DoTypeArray=t.data.DoType,t.data.RuLiZhiStatus.forEach(function(t,a){e.RuLiZhiStatusObject[t.key]=t.text}),t.data.sbType.forEach(function(t,a){e.sbType[t.key]=t.text}),t.data.DoType.forEach(function(t,a){e.DoType[t.key]=t.text}),e.pagechange(1),e.ContactClass=t.data.ContactClass,e.RSB_ContactType=t.data.RSB_ContactType,e.BujiaoTypeArray=t.data.BujiaoType,t.data.ContactClass.forEach(function(t,a){e.ContactClassObject[t.key]=t.text}),t.data.RSB_ContactType.forEach(function(t,a){e.RSB_ContactTypeObject[t.key]=t.text}),t.data.BujiaoType.forEach(function(t,a){e.BujiaoTypeObject[t.key]=t.text}),t.data.ChargeType.forEach(function(t,a){e.ChargeType[t.key]=t.text}),t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),t.data.FlowType.forEach(function(t,a){e.FlowType[t.key]=t.text})):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=t.formSearch,null!=t.formSearch.nianyue&&void 0!=t.formSearch.nianyue?a.FirstBillMonth=moment(t.formSearch.nianyue).format("YYYY-MM-DD"):a.FirstBillMonth="",t.$loading.open(),r["a"].post("/api/Employee/shebao/ConfirmNoFrozen",t.formSearch).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},surePolicy:function(e){var t=this;t.modal.modifySbDate={show:!0,sbDetail:e,sbType:t.sbType}},detail:function(e){var t=this,a={UserArray:t.UserArray,YanglaoStatus:t.YanglaoStatus,ShiyeStatus:t.ShiyeStatus,YiliaoStatus:t.YiliaoStatus,GongjijinStatus:t.GongjijinStatus,cityList:t.cityList,RLZGUID:e.RLZGUID,PGUID:e.PGUID,RuLiZhiStatusObject:t.RuLiZhiStatusObject,sbType:t.sbType,DoType:t.DoType,DoTypeArray:t.DoTypeArray,ContactClass:t.ContactClass,RSB_ContactType:t.RSB_ContactType,ContactClassObject:t.ContactClassObject,RSB_ContactTypeObject:t.RSB_ContactTypeObject,BujiaoTypeArray:t.BujiaoTypeArray,BujiaoTypeObject:t.BujiaoTypeObject,ChargeType:t.ChargeType,FlowType:t.FlowType,ServiceType:t.ServiceType};t.modal.detailyxkf=b({show:!0,role:98},a)}}},p=h,f=(a("b65b"),a("2877")),m=Object(f["a"])(p,i,o,!1,null,null,null);t["default"]=m.exports},b65b:function(e,t,a){"use strict";var i=a("d771"),o=a.n(i);o.a},ba34:function(e,t,a){"use strict";var i=a("2f39"),o=a.n(i);o.a},d771:function(e,t,a){},ffff:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("fuli",{ref:"fuli",attrs:{comService:e.comService,emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,UserArray:e.visible.UserArray,role:e.visible.role,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refreshparent:e.refresh}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=a("b775"),r=a("c32d"),c=a.n(r),n=a("2d6e"),l=a("86ba"),u=a("a5c1"),b=a("633c"),y=a("ac85"),h=a("6e12"),p=a("102c"),f=a("8354"),m={components:{personBase:n["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:b["default"],connectAdd:y["default"],connectList:h["default"],yibaobujiaoAdd:p["default"],yibaobujiaoList:f["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:c.a,comServiceCity:[],comService:{},hisrlz:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},d=m,S=(a("2d4b"),a("2877")),v=Object(S["a"])(d,i,o,!1,null,"2e1567f0",null);t["default"]=v.exports}}]);