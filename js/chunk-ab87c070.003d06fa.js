(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab87c070","chunk-e55d092c"],{1006:function(e,t,a){},"10fe":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  详情1\n  ")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"员工姓名",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["姓名"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.ComName)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"服务类型",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.ServiceType[e.orderDetail.ServiceType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.orderDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"工资",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["工资"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"个人",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["个人金额"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"企业",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["企业金额"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"起始月份",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.BeginDate?e.moment(e.orderDetail.BeginDate).format("YYYY-MM"):"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"结束月份",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.EndDate?e.moment(e.orderDetail.EndDate).format("YYYY-MM"):"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"运行操作月",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.FirstBillMonth?e.moment(e.orderDetail.FirstBillMonth).format("YYYY-MM"):"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"收费周期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.ChargingCycle[e.orderDetail.ChargingCycle])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"收费截至月份",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.BillEndMonth?e.moment(e.orderDetail.BillEndMonth).format("YYYY-MM"):"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申增状态",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申增状态"]?e.orderDetail["申增状态"]?"成功":"失败":"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申增时间",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申增时间"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申减状态",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申减状态"]?e.orderDetail["申减状态"]?"成功":"失败":"")+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"申减时间",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["申减时间"])+"\n          ")])],1)],1)],1)],2)},o=[],s=a("b775"),r=a("c32d"),l=a.n(r),n={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:{},sbType:{},ChargingCycle:{},ServiceType:{}},form:this.$form.createForm(this),orderDetail:{},modal:{},moment:l.a}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail={},this.form.resetFields()},init:function(){var e=this;s["a"].post("/api/Order/Order_RLZ/Detail",{ORLZGUID:e.visible.ORLZGUID}).then(function(t){e.$loading.close(),0===t.code&&(e.orderDetail=t.data.rlz)}).catch(function(t){e.$loading.close(),console.log(t)})}}},c=n,u=(a("60c6"),a("2877")),p=Object(u["a"])(c,i,o,!1,null,"f0abe030",null);t["default"]=p.exports},2014:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("shebao-search",{attrs:{RuLiZhi:e.RuLiZhi,RLZGUID:e.visible.RLZGUID,YanglaoStatus:e.visible.YanglaoStatus,ShiyeStatus:e.visible.ShiyeStatus,YiliaoStatus:e.visible.YiliaoStatus,GongjijinStatus:e.visible.GongjijinStatus}}),a("fuli",{ref:"fuli",attrs:{comService:e.comService,emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,role:e.visible.role,UserArray:e.visible.UserArray,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refresh:e.init}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-add",{attrs:{ContactClass:e.visible.ContactClass,RSB_ContactType:e.visible.RSB_ContactType,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{connectList:e.refreshConnectList}}),a("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-add",{ref:"bjadd",attrs:{BujiaoTypeArray:e.visible.BujiaoTypeArray,BaseMinNum:e.BaseMinNum,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{yiliaoList:e.refreshYiliaoList}}),a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=a("b775"),r=a("c32d"),l=a.n(r),n=a("2d6e"),c=a("86ba"),u=a("a5c1"),p=a("633c"),y=a("ac85"),h=a("6e12"),b=a("102c"),f=a("8354"),d={components:{personBase:n["default"],paidan:c["default"],shebaoSearch:u["default"],fuli:p["default"],connectAdd:y["default"],connectList:h["default"],yibaobujiaoAdd:b["default"],yibaobujiaoList:f["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:l.a,comServiceCity:[],comService:{},BaseMinNum:0,hisrlz:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.BaseMinNum=t.data.shebaoPolicy.BaseMinNum,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=d,v=(a("b36c"),a("2877")),S=Object(v["a"])(m,i,o,!1,null,"6fa13aac",null);t["default"]=S.exports},"2c4b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),1==e.canDo?a("shebao-search",{attrs:{RuLiZhi:e.RuLiZhi,RLZGUID:e.visible.RLZGUID,YanglaoStatus:e.visible.YanglaoStatus,ShiyeStatus:e.visible.ShiyeStatus,YiliaoStatus:e.visible.YiliaoStatus,GongjijinStatus:e.visible.GongjijinStatus}}):e._e(),a("fuli",{ref:"fuli",attrs:{comService:e.comService,emSheBaos:e.emSheBaos,cando:e.canDo,sbType:e.visible.sbType,DoType:e.visible.DoType,role:e.visible.role,UserArray:e.visible.UserArray,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-add",{attrs:{ContactClass:e.visible.ContactClass,RSB_ContactType:e.visible.RSB_ContactType,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{connectList:e.refreshConnectList}}),a("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-add",{ref:"bjadd",attrs:{BujiaoTypeArray:e.visible.BujiaoTypeArray,BaseMinNum:e.BaseMinNum,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{yiliaoList:e.refreshYiliaoList}}),a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=a("b775"),r=a("c32d"),l=a.n(r),n=a("2d6e"),c=a("86ba"),u=a("a5c1"),p=a("633c"),y=a("ac85"),h=a("6e12"),b=a("102c"),f=a("8354"),d={components:{personBase:n["default"],paidan:c["default"],shebaoSearch:u["default"],fuli:p["default"],connectAdd:y["default"],connectList:h["default"],yibaobujiaoAdd:b["default"],yibaobujiaoList:f["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:l.a,comServiceCity:[],comService:{},canDo:!1,BaseMinNum:0,hisrlz:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.canDo=t.data.canDo,e.hisrlz=t.data.hisrlz,null!=t.data.shebaoPolicy?e.BaseMinNum=t.data.shebaoPolicy.BaseMinNum:e.BaseMinNum=0)}).catch(function(e){console.log(e)})},refreshDetail:function(){console.log("ddd"),this.init()},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=d,v=(a("ce41"),a("2877")),S=Object(v["a"])(m,i,o,!1,null,"37753d1e",null);t["default"]=S.exports},"2d4b":function(e,t,a){"use strict";var i=a("1006"),o=a.n(i);o.a},"2f39":function(e,t,a){},3027:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("fuli",{ref:"fuli",attrs:{comService:e.comService,emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,role:e.visible.role,UserArray:e.visible.UserArray,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refreshparent:e.refresh}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=a("b775"),r=a("c32d"),l=a.n(r),n=a("2d6e"),c=a("86ba"),u=a("a5c1"),p=a("633c"),y=a("ac85"),h=a("6e12"),b=a("102c"),f=a("8354"),d={components:{personBase:n["default"],paidan:c["default"],shebaoSearch:u["default"],fuli:p["default"],connectAdd:y["default"],connectList:h["default"],yibaobujiaoAdd:b["default"],yibaobujiaoList:f["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:l.a,comServiceCity:[],comService:{},hisrlz:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=d,v=(a("ba34"),a("2877")),S=Object(v["a"])(m,i,o,!1,null,"dd7a537a",null);t["default"]=S.exports},3844:function(e,t,a){},"60c6":function(e,t,a){"use strict";var i=a("cf8a"),o=a.n(i);o.a},"795d":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:4,lg:4,xl:4,xxl:3}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(t){e.$set(e.formSearch,"emName",t)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:6,xxl:4}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(t){e.$set(e.formSearch,"emCardID",t)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:5,xxl:3}},[a("a-form-item",{attrs:{label:"月份",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"},model:{value:e.formSearch.nianyue,callback:function(t){e.$set(e.formSearch,"nianyue",t)},expression:"formSearch.nianyue"}})],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:4,xxl:4}},[a("a-form-item",{attrs:{label:"服务类型",labelCol:{span:10},wrapperCol:{span:14}}},[a("a-select",{attrs:{allowClear:!1},model:{value:e.formSearch.ServiceType,callback:function(t){e.$set(e.formSearch,"ServiceType",t)},expression:"formSearch.ServiceType"}},[a("a-select-option",{key:""},[e._v("全部")]),e._l(e.ServiceTypeArray,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])})],2)],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:5,xxl:4}},[a("a-form-item",{attrs:{label:"社保类型",labelCol:{span:10},wrapperCol:{span:13}}},[a("a-select",{attrs:{allowClear:!1},model:{value:e.formSearch.sbtype,callback:function(t){e.$set(e.formSearch,"sbtype",t)},expression:"formSearch.sbtype"}},[a("a-select-option",{key:""},[e._v("全部")]),e._l(e.sbTypeList,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])})],2)],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:5,xxl:4}},[a("a-form-item",{attrs:{label:"处理结果",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!1},model:{value:e.formSearch.doType,callback:function(t){e.$set(e.formSearch,"doType",t)},expression:"formSearch.doType"}},[a("a-select-option",{key:"0"},[e._v("全部")]),a("a-select-option",{key:"1"},[e._v("未处理")]),a("a-select-option",{key:"2"},[e._v("已处理")])],1)],1)],1),a("a-col",{attrs:{span:2}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ORLZGUID"},scopedSlots:e._u([{key:"userName",fn:function(t,i){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(t){return e.detail(i)}}},[e._v(e._s(i["姓名"]))]),a("br"),e._v(e._s(i["身份证号"])+"\n              ")])}},{key:"ServiceType",fn:function(t,i){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n              "+e._s(e.ServiceType[i.ServiceType])+"\n              ")])}},{key:"sbType",fn:function(t,i){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n                "+e._s(e.sbType[i.sbType])+"\n              ")])}},{key:"Startime",fn:function(t,i){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n                "+e._s(e.moment(i.Startime).format("YYYY-MM-DD"))+"\n              ")])}},{key:"ActStartime",fn:function(t,i){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n                "+e._s(e.moment(i.ActStartime).format("YYYY-MM-DD"))+"\n              ")])}},{key:"Jishu",fn:function(t,i){return a("span",{},[e._v("\n                "+e._s(i.Jishu)+"\n                "),null!=i.Bili&&""!=i.Bili?[a("br"),e._v("比例："+e._s(i.Bili)+"\n                ")]:e._e()],2)}},{key:"failreason",fn:function(t,i){return[a("a-tooltip",[a("template",{slot:"title"},[e._v("\n                    "+e._s(i["失败原因"])+"\n                  ")]),a("div",{staticClass:"remark-text ellipsis"},[e._v(e._s(i["失败原因"]))])],2)]}},{key:"action",fn:function(t,i){return a("span",{staticStyle:{"text-align":"right"}},[2==e.applytype?["79"==e.Role&&0==i.Deleted&&""==i["处理结果"]?a("a",{on:{click:function(t){return e.todo(i)}}},[e._v("处理")]):e._e()]:["76"!=e.Role&&"77"!=e.Role&&"78"!=e.Role||0!=i.Deleted||""!=i["处理结果"]?e._e():a("a",{on:{click:function(t){return e.reapply(i)}}},[e._v("重新交接")]),"76"!=e.Role&&"77"!=e.Role&&"78"!=e.Role||0!=i.Deleted||""!=i["处理结果"]?e._e():a("a-divider",{attrs:{type:"vertical"}}),"76"!=e.Role&&"77"!=e.Role&&"78"!=e.Role||0!=i.Deleted||""!=i["处理结果"]?e._e():a("a",{on:{click:function(t){return e.sbBack(i)}}},[e._v("办理受阻")])]],2)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("a-modal",{attrs:{title:"失败处理",visible:e.showfailLayer,"confirm-loading":e.confirmLoading},on:{ok:e.failOk,cancel:e.failCancel}},[a("a-form",{attrs:{form:e.failForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:22}},[a("a-form-item",{attrs:{label:"处理方式",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},["申增"==e.selected.type?[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:e.AFormImportRules.selected}],expression:"['type',{rules:AFormImportRules.selected}]"}],attrs:{allowClear:!1},on:{change:e.reasonChange}},e._l(e.AddFailSheBaoBack,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)]:e._e(),"申减"==e.selected.type?[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:e.AFormImportRules.selected}],expression:"['type',{rules:AFormImportRules.selected}]"}],attrs:{allowClear:!1},on:{change:e.reasonChange}},e._l(e.SubFailSheBaoBack,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)]:e._e()],2)],1),"申减"==e.selected.type&&1==e.reason?a("a-col",{attrs:{md:22}},[a("a-form-item",{attrs:{label:"派减时间",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["dt",{rules:e.AFormImportRules.selected}],expression:"['dt',{rules:AFormImportRules.selected}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择"}})],1)],1):e._e(),a("a-col",{attrs:{md:22}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remarks"],expression:"['remarks']"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)])],1)],1)],1),a("modal-sb-date",{attrs:{show:e.modal.modifySbDate,refresh:e.refreshfuli}}),a("modal-sb-back",{attrs:{show:e.modal.sbback,refresh:e.refreshfuli}}),a("modal-detail-ygkf",{attrs:{show:e.modal.detailygkf},on:{refresh:e.pagerefresh}}),a("modal-detail-kf",{attrs:{show:e.modal.detailkf},on:{refresh:e.pagerefresh}}),a("modal-detail-ddkf",{attrs:{show:e.modal.detailddkf},on:{refresh:e.pagerefresh}}),a("modal-detail-zckf",{attrs:{show:e.modal.detailzckf},on:{refresh:e.pagerefresh}}),a("modal-detail-yxkf",{attrs:{show:e.modal.detailyxkf},on:{refresh:e.pagerefresh}})],1)},o=[],s=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),r=(a("c5f6"),a("b775")),l=a("10fe"),n=a("c32d"),c=a.n(n),u=a("10ad"),p=a("d837"),y=a("2c4b"),h=a("ffff"),b=a("f111"),f=a("2014"),d=a("3027");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach(function(t){Object(s["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var S=[{title:"类型",dataIndex:"type"},{title:"公司名称",dataIndex:"ComName"},{title:"服务类型",scopedSlots:{customRender:"ServiceType"}},{title:"姓名/身份证号",scopedSlots:{customRender:"userName"}},{title:"社保类型",scopedSlots:{customRender:"sbType"}},{title:"工资",scopedSlots:{customRender:"Jishu"}},{title:"派单日期",scopedSlots:{customRender:"Startime"}},{title:"实际开始日期",scopedSlots:{customRender:"ActStartime"}},{title:"失败原因",scopedSlots:{customRender:"failreason"}},{title:"处理结果",dataIndex:"处理结果"},{title:"操作",scopedSlots:{customRender:"action"}}],C={props:{type:{type:Object,default:function(){return{}}},applytype:{type:Number,default:0},Role:{type:Number,default:0}},components:{ModalDetail:l["default"],ModalSbDate:u["default"],ModalSbBack:p["default"],ModalDetailYgkf:y["default"],ModalDetailKf:h["default"],ModalDetailDdkf:b["default"],ModalDetailZckf:f["default"],ModalDetailYxkf:d["default"]},data:function(){var e;return e={advanced:!0,columns:S,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,emCardID:"",emName:"",doType:"1",type:1,ServiceType:"",sbtype:""},count:"5",form:this.$form.createForm(this),resultForm:this.$form.createForm(this),AFormImportRules:{selected:[{required:!0,message:"请选择"}]},failForm:this.$form.createForm(this),failFormRules:{selected:[{required:!0,message:"请选择"}]},dataSource:[],UserArray:[],modal:{detail:{show:!1},modifySbDate:{show:!1},sbback:{show:!1},detailygkf:{show:!1},detailkf:{show:!1},detailddkf:{show:!1},detailzckf:{show:!1},detailyxkf:{show:!1}},ChargingCycle:{},moment:c.a,showfailLayer:!1,selected:{},ORLZGUID:"",sbTypeList:[],reason:"",SubFailSheBaoBack:[],AddFailSheBaoBack:[],Order_RLZ_Deleted:{},ServiceTypeArray:[],YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],RuLiZhiStatus:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:[],Deleted:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{}},Object(s["a"])(e,"moment",c.a),Object(s["a"])(e,"cityList",{}),Object(s["a"])(e,"ServiceType",{}),Object(s["a"])(e,"FlowType",{}),e},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;r["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),r["a"].post("/api/Dim/Enum/GetEnum",{Names:["ChargingCycle","AddFailSheBaoBack","SubFailSheBaoBack","Order_RLZ_Deleted","YanglaoStatus","ShiyeStatus","YiliaoStatus","GongjijinStatus","RuLiZhiStatus","sbType","DoType","ContactClass","RSB_ContactType","BujiaoType","ChargeType","TodoType","ServiceType","FlowType"]}).then(function(t){0===t.code?(e.sbTypeList=t.data.sbType,e.ServiceTypeArray=t.data.ServiceType,e.DoTypeArray=t.data.DoType,t.data.ChargingCycle.forEach(function(t,a){e.ChargingCycle[t.key]=t.text}),e.YanglaoStatus=t.data.YanglaoStatus,e.ShiyeStatus=t.data.ShiyeStatus,e.YiliaoStatus=t.data.YiliaoStatus,e.GongjijinStatus=t.data.GongjijinStatus,e.RuLiZhiStatus=t.data.RuLiZhiStatus,e.DoTypeArray=t.data.DoType,t.data.RuLiZhiStatus.forEach(function(t,a){e.RuLiZhiStatusObject[t.key]=t.text}),t.data.Order_RLZ_Deleted.forEach(function(t,a){e.Order_RLZ_Deleted[t.key]=t.text}),t.data.sbType.forEach(function(t,a){e.sbType[t.key]=t.text}),t.data.DoType.forEach(function(t,a){e.DoType[t.key]=t.text}),e.AddFailSheBaoBack=t.data.AddFailSheBaoBack,e.SubFailSheBaoBack=t.data.SubFailSheBaoBack,e.pagechange(1),e.ContactClass=t.data.ContactClass,e.RSB_ContactType=t.data.RSB_ContactType,e.BujiaoTypeArray=t.data.BujiaoType,t.data.ContactClass.forEach(function(t,a){e.ContactClassObject[t.key]=t.text}),t.data.RSB_ContactType.forEach(function(t,a){e.RSB_ContactTypeObject[t.key]=t.text}),t.data.BujiaoType.forEach(function(t,a){e.BujiaoTypeObject[t.key]=t.text}),t.data.ChargeType.forEach(function(t,a){e.ChargeType[t.key]=t.text}),t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),t.data.FlowType.forEach(function(t,a){e.FlowType[t.key]=t.text})):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=v({},t.formSearch),a.type=t.applytype,a.TrueOrFalse=!1,a.Role=t.Role,t.$loading.open(),r["a"].post("/api/order/order_rlz/FailOrderList",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},detail:function(e){var t=this,a={UserArray:t.UserArray,YanglaoStatus:t.YanglaoStatus,ShiyeStatus:t.ShiyeStatus,YiliaoStatus:t.YiliaoStatus,GongjijinStatus:t.GongjijinStatus,cityList:t.cityList,RLZGUID:e.RLZGUID,PGUID:e.PGUID,RuLiZhiStatusObject:t.RuLiZhiStatusObject,sbType:t.sbType,DoType:t.DoType,DoTypeArray:t.DoTypeArray,ContactClass:t.ContactClass,RSB_ContactType:t.RSB_ContactType,ContactClassObject:t.ContactClassObject,RSB_ContactTypeObject:t.RSB_ContactTypeObject,BujiaoTypeArray:t.BujiaoTypeArray,BujiaoTypeObject:t.BujiaoTypeObject,ChargeType:t.ChargeType,role:t.Role,FlowType:t.FlowType,ServiceType:t.ServiceType};"76"==t.Role?t.modal.detailygkf=v({show:!0},a):"77"==t.Role?t.modal.detailddkf=v({show:!0},a):"78"==t.Role?t.modal.detailzckf=v({show:!0},a):"79"==t.Role?t.modal.detailkf=v({show:!0},a):"98"==t.Role&&(t.modal.detailyxkf=v({show:!0},a))},todo:function(e){this.selected=e,this.showfailLayer=!0},failOk:function(){var e=this,t="",a={};"申增"==e.selected.type&&(t="/api/Order/Order_RLZ/AddFailSheBaoBack"),"申减"==e.selected.type&&(t="/api/Order/Order_RLZ/SubFailSheBaoBack"),e.failForm.validateFields(function(i,o){console.log(c()(o.dt).endOf("month").format("YYYY-MM-DD")),i||(a=o,a.ORLZGUID=e.selected.ORLZGUID,a.type=o.type,"申减"==e.selected.type&&1==o.type&&(a.dt=c()(o.dt).endOf("month").format("YYYY-MM-DD")),r["a"].post(t,a).then(function(t){0===t.code?(e.$message.success(t.msg),e.init(),e.showfailLayer=!1):e.$message.error(t.msg)}).catch(function(e){console.log(e)}))})},failCancel:function(){this.selected={},this.showfailLayer=!1},reasonChange:function(e){this.reason=e},reapply:function(e){var t=this;t.modal.modifySbDate={show:!0,sbDetail:e,RuLiZhi:e,sbType:t.sbType,DoTypeArray:t.DoTypeArray,role:t.Role,type:"fail"}},sbBack:function(e){var t=this;t.modal.sbback={show:!0,sbDetail:e,sbType:t.sbType,DoTypeArray:t.DoTypeArray,role:t.Role,type:"fail"}},refreshfuli:function(){this.initPage()}}},T=C,D=(a("d41f"),a("2877")),R=Object(D["a"])(T,i,o,!1,null,null,null);t["default"]=R.exports},a3e9:function(e,t,a){},b36c:function(e,t,a){"use strict";var i=a("c615"),o=a.n(i);o.a},ba34:function(e,t,a){"use strict";var i=a("2f39"),o=a.n(i);o.a},c615:function(e,t,a){},ce41:function(e,t,a){"use strict";var i=a("a3e9"),o=a.n(i);o.a},cf8a:function(e,t,a){},d41f:function(e,t,a){"use strict";var i=a("3844"),o=a.n(i);o.a},ffff:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("fuli",{ref:"fuli",attrs:{comService:e.comService,emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,UserArray:e.visible.UserArray,role:e.visible.role,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refreshparent:e.refresh}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=a("b775"),r=a("c32d"),l=a.n(r),n=a("2d6e"),c=a("86ba"),u=a("a5c1"),p=a("633c"),y=a("ac85"),h=a("6e12"),b=a("102c"),f=a("8354"),d={components:{personBase:n["default"],paidan:c["default"],shebaoSearch:u["default"],fuli:p["default"],connectAdd:y["default"],connectList:h["default"],yibaobujiaoAdd:b["default"],yibaobujiaoList:f["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:l.a,comServiceCity:[],comService:{},hisrlz:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=d,v=(a("2d4b"),a("2877")),S=Object(v["a"])(m,i,o,!1,null,"2e1567f0",null);t["default"]=S.exports}}]);