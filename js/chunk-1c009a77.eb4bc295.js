(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c009a77","chunk-875d5ed8","chunk-db71a970"],{"030e":function(e,t,i){"use strict";var a=i("5535"),o=i.n(a);o.a},"0dc1":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[i("template",{slot:"title"},[e._v("\n  员工详情\n")]),i("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[i("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[i("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),i("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),i("fuli",{ref:"fuli",attrs:{emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,UserArray:e.visible.UserArray,role:e.visible.role,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refreshparent:e.refresh}})],1),i("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[i("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),i("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[i("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=i("b775"),r=i("c32d"),n=i.n(r),c=i("2d6e"),l=i("86ba"),u=i("a5c1"),h=i("633c"),d=i("ac85"),b=i("6e12"),f=i("102c"),p=i("8354"),y={components:{personBase:c["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:h["default"],connectAdd:d["default"],connectList:b["default"],yibaobujiaoAdd:f["default"],yibaobujiaoList:p["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:n.a,comServiceCity:[],comService:{},hisrlz:[]}},watch:{show:function(e,t){var i=this;i.visible=e}},created:function(){var e=this;this.$watch("show",function(t,i){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=y,v=(i("e342"),i("2877")),S=Object(v["a"])(m,a,o,!1,null,"f4e0ae10",null);t["default"]=S.exports},"1b4c":function(e,t,i){"use strict";var a=i("f635"),o=i.n(a);o.a},"1c3d":function(e,t,i){"use strict";var a=i("285c"),o=i.n(a);o.a},2014:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[i("template",{slot:"title"},[e._v("\n  员工详情\n")]),i("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[i("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[i("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),i("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),i("shebao-search",{attrs:{RLZGUID:e.visible.RLZGUID,YanglaoStatus:e.visible.YanglaoStatus,ShiyeStatus:e.visible.ShiyeStatus,YiliaoStatus:e.visible.YiliaoStatus,GongjijinStatus:e.visible.GongjijinStatus}}),i("fuli",{ref:"fuli",attrs:{emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,role:e.visible.role,UserArray:e.visible.UserArray,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refresh:e.init}})],1),i("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[i("connect-add",{attrs:{ContactClass:e.visible.ContactClass,RSB_ContactType:e.visible.RSB_ContactType,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{connectList:e.refreshConnectList}}),i("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),i("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[i("yibaobujiao-add",{ref:"bjadd",attrs:{BujiaoTypeArray:e.visible.BujiaoTypeArray,BaseMinNum:e.BaseMinNum,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{yiliaoList:e.refreshYiliaoList}}),i("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=i("b775"),r=i("c32d"),n=i.n(r),c=i("2d6e"),l=i("86ba"),u=i("a5c1"),h=i("633c"),d=i("ac85"),b=i("6e12"),f=i("102c"),p=i("8354"),y={components:{personBase:c["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:h["default"],connectAdd:d["default"],connectList:b["default"],yibaobujiaoAdd:f["default"],yibaobujiaoList:p["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:n.a,comServiceCity:[],comService:{},BaseMinNum:0,hisrlz:[]}},watch:{show:function(e,t){var i=this;i.visible=e}},created:function(){var e=this;this.$watch("show",function(t,i){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.BaseMinNum=t.data.shebaoPolicy.BaseMinNum,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=y,v=(i("badd"),i("2877")),S=Object(v["a"])(m,a,o,!1,null,"ccec1264",null);t["default"]=S.exports},"285c":function(e,t,i){},"2c4b":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[i("template",{slot:"title"},[e._v("\n  员工详情\n")]),i("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[i("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[i("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),i("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),1==e.canDo?i("shebao-search",{attrs:{RLZGUID:e.visible.RLZGUID,YanglaoStatus:e.visible.YanglaoStatus,ShiyeStatus:e.visible.ShiyeStatus,YiliaoStatus:e.visible.YiliaoStatus,GongjijinStatus:e.visible.GongjijinStatus}}):e._e(),i("fuli",{ref:"fuli",attrs:{emSheBaos:e.emSheBaos,cando:e.canDo,sbType:e.visible.sbType,DoType:e.visible.DoType,role:e.visible.role,UserArray:e.visible.UserArray,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID}})],1),i("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[i("connect-add",{attrs:{ContactClass:e.visible.ContactClass,RSB_ContactType:e.visible.RSB_ContactType,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{connectList:e.refreshConnectList}}),i("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),i("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[i("yibaobujiao-add",{ref:"bjadd",attrs:{BujiaoTypeArray:e.visible.BujiaoTypeArray,BaseMinNum:e.BaseMinNum,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{yiliaoList:e.refreshYiliaoList}}),i("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=i("b775"),r=i("c32d"),n=i.n(r),c=i("2d6e"),l=i("86ba"),u=i("a5c1"),h=i("633c"),d=i("ac85"),b=i("6e12"),f=i("102c"),p=i("8354"),y={components:{personBase:c["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:h["default"],connectAdd:d["default"],connectList:b["default"],yibaobujiaoAdd:f["default"],yibaobujiaoList:p["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:n.a,comServiceCity:[],comService:{},canDo:!1,BaseMinNum:0,hisrlz:[]}},watch:{show:function(e,t){var i=this;i.visible=e}},created:function(){var e=this;this.$watch("show",function(t,i){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.canDo=t.data.canDo,e.hisrlz=t.data.hisrlz,null!=t.data.shebaoPolicy?e.BaseMinNum=t.data.shebaoPolicy.BaseMinNum:e.BaseMinNum=0)}).catch(function(e){console.log(e)})},refreshDetail:function(){console.log("ddd"),this.init()},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=y,v=(i("7234"),i("2877")),S=Object(v["a"])(m,a,o,!1,null,"43a90dbc",null);t["default"]=S.exports},3027:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[i("template",{slot:"title"},[e._v("\n  员工详情\n")]),i("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[i("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[i("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),i("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),i("fuli",{ref:"fuli",attrs:{emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,role:e.visible.role,UserArray:e.visible.UserArray,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refreshparent:e.refresh}})],1),i("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[i("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),i("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[i("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=i("b775"),r=i("c32d"),n=i.n(r),c=i("2d6e"),l=i("86ba"),u=i("a5c1"),h=i("633c"),d=i("ac85"),b=i("6e12"),f=i("102c"),p=i("8354"),y={components:{personBase:c["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:h["default"],connectAdd:d["default"],connectList:b["default"],yibaobujiaoAdd:f["default"],yibaobujiaoList:p["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:n.a,comServiceCity:[],comService:{},hisrlz:[]}},watch:{show:function(e,t){var i=this;i.visible=e}},created:function(){var e=this;this.$watch("show",function(t,i){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=y,v=(i("91d5"),i("2877")),S=Object(v["a"])(m,a,o,!1,null,"7f0ff930",null);t["default"]=S.exports},"507d":function(e,t,i){},"54af":function(e,t,i){},5535:function(e,t,i){},"589a":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:500,zIndex:1001,centered:!0},on:{cancel:e.onClose,ok:e.handleSubmit}},[i("template",{slot:"title"},[e._v("\n  "+e._s(79==e.visible.Role?"入职派单导出":"全国入职派单导出")+"\n")]),i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"开始时间",labelCol:{span:6},wrapperCol:{span:16}}},[i("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Begindate",{rules:e.AFormImportRules.iptInput}],expression:"['Begindate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:e.changeTimeBegin}})],1),i("a-form-item",{attrs:{label:"截止时间",labelCol:{span:6},wrapperCol:{span:16}}},[i("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Enddate",{rules:e.AFormImportRules.iptInput}],expression:"['Enddate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:e.changeTimeEnd}})],1)],1)],2)},o=[],s=i("c32d"),r=i.n(s),n={props:{show:{type:Object,default:function(){return{show:!1}}},Role:{type:String,default:""},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,Role:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},exportData:{Enddate:"",Begindate:""}}},watch:{show:function(e,t){var i=this;i.visible=e}},created:function(){var e=this;this.$watch("show",function(t,i){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},handleSubmit:function(){var e=this;this.form.validateFields(function(t,i){if(!t){var a={};a.Begindate=e.exportData.Begindate,a.Enddate=e.exportData.Enddate,a.Role=e.visible.Role;var o=document.createElement("a");o.href="/api/Employee/PaiDan/ExportRuZhi?Begindate="+a.Begindate+"&Enddate="+a.Enddate+"&Role="+a.Role,o.click(),e.onClose()}})},changeTimeBegin:function(e){this.exportData.Begindate=r()(e).format("YYYY-MM-DD")},changeTimeEnd:function(e){this.exportData.Enddate=r()(e).format("YYYY-MM-DD")}}},c=n,l=(i("030e"),i("2877")),u=Object(l["a"])(c,a,o,!1,null,"283bd211",null);t["default"]=u.exports},6319:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-layout",[i("a-layout-content",[i("a-card",{attrs:{bordered:!1}},[i("div",[i("a-form",{attrs:{form:e.form,layout:"horizontal"}},[i("div",{class:e.advanced?null:"fold"},[i("a-row",{attrs:{gutter:10}},[i("a-col",{attrs:{md:6}},[i("a-form-item",{attrs:{label:"公司名称",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[i("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),i("a-col",{attrs:{md:6}},[i("a-form-item",{attrs:{label:"身份证号",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[i("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(t){e.$set(e.formSearch,"emCardID",t)},expression:"formSearch.emCardID"}})],1)],1),i("a-col",{attrs:{md:6}},[i("a-form-item",{attrs:{label:"姓名",labelCol:{span:4},wrapperCol:{span:17,offset:1}}},[i("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(t){e.$set(e.formSearch,"emName",t)},expression:"formSearch.emName"}})],1)],1),i("a-col",{attrs:{span:6}},[i("a-form-item",[i("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),i("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"RLZGUID"},scopedSlots:e._u([{key:"Status",fn:function(t,a){return i("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.RuLiZhiStatusObject[a.Status])+"\n        ")])}},{key:"userName",fn:function(t,a){return i("span",{staticStyle:{"text-align":"right"}},[i("a",{on:{click:function(t){return e.detail(a)}}},[e._v(e._s(a["姓名"]))])])}},{key:"KefuUserid",fn:function(t,a){return i("span",{staticStyle:{"text-align":"right"}},[null!=a.KefuUserid?[e._v("                  \n            客服:"+e._s(e.UserArray[a.KefuUserid])),i("br")]:e._e(),(79==e.role||76==e.role)&&a.OrderUserids.length>0?[e._v("                  \n            订单客服:"),e._l(a.OrderUserids,function(t){return i("span",{key:t.OrderUserid},[e._v(e._s(e.UserArray[t.OrderUserid])+" ")])}),i("br")]:e._e(),79!=e.role&&76!=e.role||null==a.OnsiteUserid?e._e():[e._v("                  \n            驻场客服:"+e._s(e.UserArray[a.OnsiteUserid])+"\n          ")]],2)}},{key:"PaiDanDate",fn:function(t,a){return i("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.moment(a.PaiDanDate).format("YYYY-MM-DD"))+"\n        ")])}},{key:"action",fn:function(t,a){return i("span",{staticStyle:{"text-align":"right"}},[i("a",{on:{click:function(t){return e.detail(a)}}},[e._v("详情")])])}}])},[i("template",{slot:"title"},[79==e.role?i("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"download",size:"small"},on:{click:e.ruzhiExport}},[e._v("入职派单导出")]):e._e(),75==e.role?i("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"download",size:"small"},on:{click:e.quanguoExport}},[e._v("全国入职派单导出")]):e._e(),79==e.role?i("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"download",size:"small"},on:{click:e.lizhiExport}},[e._v("离职派单导出")]):e._e(),75==e.role?i("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"download",size:"small"},on:{click:e.quanguolzExport}},[e._v("全国离职派单导出")]):e._e()],1),i("template",{slot:"footer"},[i("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)],1),i("modal-detail",{attrs:{show:e.modal.detail},on:{refresh:e.pagerefresh}}),i("modal-detail-kf",{attrs:{show:e.modal.detailkf},on:{refresh:e.pagerefresh}}),i("modal-detail-ddkf",{attrs:{show:e.modal.detailddkf},on:{refresh:e.pagerefresh}}),i("modal-detail-zckf",{attrs:{show:e.modal.detailzckf},on:{refresh:e.pagerefresh}}),i("modal-detail-qgkf",{attrs:{show:e.modal.detailqgkf},on:{refresh:e.pagerefresh}}),i("modal-detail-yxkf",{attrs:{show:e.modal.detailyxkf},on:{refresh:e.pagerefresh}}),i("modal-detail-sjzy",{attrs:{show:e.modal.detailsjzy},on:{refresh:e.pagerefresh}}),i("rzpaidan-Export",{attrs:{show:e.modal.rzpaidanExport,refresh:e.pagerefresh}}),i("lzpaidan-Export",{attrs:{show:e.modal.lzpaidanExport}})],1)},o=[],s=(i("8e6e"),i("456d"),i("bd86")),r=(i("ac6a"),i("c5f6"),i("b775")),n=i("2c4b"),c=i("ffff"),l=i("f111"),u=i("2014"),h=i("fce8"),d=i("3027"),b=i("0dc1"),f=i("589a"),p=i("79ae"),y=i("c32d"),m=i.n(y);function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function S(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(i,!0).forEach(function(t){Object(s["a"])(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var C=[{title:"状态",scopedSlots:{customRender:"Status"}},{title:"姓名",scopedSlots:{customRender:"userName"}},{title:"身份证号",dataIndex:"身份证号"},{title:"客服",scopedSlots:{customRender:"KefuUserid"}},{title:"入职派单日期",scopedSlots:{customRender:"PaiDanDate"}},{title:"派出公司",dataIndex:"GYSName"},{title:"公司",dataIndex:"ComName"},{title:"操作",scopedSlots:{customRender:"action"}}],T={components:{ModalDetail:n["default"],ModalDetailKf:c["default"],ModalDetailDdkf:l["default"],ModalDetailZckf:u["default"],ModalDetailQgkf:h["default"],ModalDetailYxkf:d["default"],rzpaidanExport:f["default"],lzpaidanExport:p["default"],ModalDetailSjzy:b["default"]},props:{role:{type:Number,default:""}},data:function(){return{advanced:!0,columns:C,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,emCardID:"",emName:"",ComName:""},form:this.$form.createForm(this),exportForm:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],dataLeads:[],dataDetail:[],roles:[],modal:{detail:{show:!1},detailkf:{show:!1},detailddkf:{show:!1},detailzckf:{show:!1},detailqgkf:{show:!1},detailyxkf:{show:!1},detailsjzy:{show:!1},exporttransfer:{show:!1},rzpaidanExport:{show:!1},lzpaidanExport:{show:!1}},checkComId:"",checkLineId:"",userid:"",expandedRowKeys:[],department:[],departmentKey:"",showClaimLayer:!1,childLine:{expanded:"",record:""},options:[],selectedOptionsCell:[],SaleUserid:"",showHandoverLayer:!1,handover:{DepId:[],Userid:"",record:{}},UserArray:[],DeptArray:[],cityList:[],ServiceType:{},BillingMode:{},BuJiaoBillingType:{},ServiceTypeArray:[],BillingModeArray:[],BuJiaoBillingTypeArray:[],callback:function(){},FlowType:{},FlowTypeArray:[],YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],RuLiZhiStatus:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:[],Deleted:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},moment:m.a}},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;r["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.DeptArray=t.data.Dept,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),r["a"].post("/api/Dim/Enum/GetEnum",{Names:["YanglaoStatus","ShiyeStatus","YiliaoStatus","GongjijinStatus","RuLiZhiStatus","sbType","DoType","ContactClass","RSB_ContactType","BujiaoType","ChargeType","ServiceType","FlowType"]}).then(function(t){0===t.code?(console.log(t),e.YanglaoStatus=t.data.YanglaoStatus,e.ShiyeStatus=t.data.ShiyeStatus,e.YiliaoStatus=t.data.YiliaoStatus,e.GongjijinStatus=t.data.GongjijinStatus,e.RuLiZhiStatus=t.data.RuLiZhiStatus,e.DoTypeArray=t.data.DoType,t.data.RuLiZhiStatus.forEach(function(t,i){e.RuLiZhiStatusObject[t.key]=t.text}),t.data.sbType.forEach(function(t,i){e.sbType[t.key]=t.text}),t.data.DoType.forEach(function(t,i){e.DoType[t.key]=t.text}),e.pagechange(1),e.ContactClass=t.data.ContactClass,e.RSB_ContactType=t.data.RSB_ContactType,e.BujiaoTypeArray=t.data.BujiaoType,t.data.ContactClass.forEach(function(t,i){e.ContactClassObject[t.key]=t.text}),t.data.RSB_ContactType.forEach(function(t,i){e.RSB_ContactTypeObject[t.key]=t.text}),t.data.BujiaoType.forEach(function(t,i){e.BujiaoTypeObject[t.key]=t.text}),t.data.ChargeType.forEach(function(t,i){e.ChargeType[t.key]=t.text}),t.data.ServiceType.forEach(function(t,i){e.ServiceType[t.key]=t.text}),t.data.FlowType.forEach(function(t,i){e.FlowType[t.key]=t.text})):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,i={};t.formSearch.current=e,i=S({},t.formSearch),i.Role=t.role,this.form.validateFields(function(e,a){t.$loading.open(),r["a"].post("/api/Employee/RuLIZhi/List",i).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})})},detail:function(e){var t=this,i={UserArray:t.UserArray,YanglaoStatus:t.YanglaoStatus,ShiyeStatus:t.ShiyeStatus,YiliaoStatus:t.YiliaoStatus,GongjijinStatus:t.GongjijinStatus,cityList:t.cityList,RLZGUID:e.RLZGUID,PGUID:e.PGUID,RuLiZhiStatusObject:t.RuLiZhiStatusObject,sbType:t.sbType,DoType:t.DoType,DoTypeArray:t.DoTypeArray,ContactClass:t.ContactClass,RSB_ContactType:t.RSB_ContactType,ContactClassObject:t.ContactClassObject,RSB_ContactTypeObject:t.RSB_ContactTypeObject,BujiaoTypeArray:t.BujiaoTypeArray,BujiaoTypeObject:t.BujiaoTypeObject,ChargeType:t.ChargeType,role:t.role,FlowType:t.FlowType,ServiceType:t.ServiceType};"76"==t.role?t.modal.detail=S({show:!0},i):"74"==t.role?t.modal.detailsjzy=S({show:!0},i):"75"==t.role?t.modal.detailqgkf=S({show:!0},i):"77"==t.role?t.modal.detailddkf=S({show:!0},i):"78"==t.role?t.modal.detailzckf=S({show:!0},i):"79"==t.role?t.modal.detailkf=S({show:!0},i):"98"==t.role&&(t.modal.detailyxkf=S({show:!0},i))},ruzhiExport:function(){this.modal.rzpaidanExport={show:!0,Role:79}},quanguoExport:function(){this.modal.rzpaidanExport={show:!0,Role:75}},lizhiExport:function(){this.modal.lzpaidanExport={show:!0,Role:79}},quanguolzExport:function(){this.modal.lzpaidanExport={show:!0,Role:75}}}},j=T,R=(i("a0e4"),i("2877")),L=Object(R["a"])(j,a,o,!1,null,null,null);t["default"]=L.exports},7234:function(e,t,i){"use strict";var a=i("54af"),o=i.n(a);o.a},"79ae":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:500,zIndex:1001,centered:!0},on:{cancel:e.onClose,ok:e.handleSubmit}},[i("template",{slot:"title"},[e._v("\n  "+e._s(79==e.visible.Role?"离职派单导出":"全国离职派单导出")+"\n")]),i("a-form",{attrs:{form:e.form}},[i("a-form-item",{attrs:{label:"开始时间",labelCol:{span:6},wrapperCol:{span:16}}},[i("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Begindate",{rules:e.AFormImportRules.iptInput}],expression:"['Begindate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:e.changeTimeBegin}})],1),i("a-form-item",{attrs:{label:"截止时间",labelCol:{span:6},wrapperCol:{span:16}}},[i("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Enddate",{rules:e.AFormImportRules.iptInput}],expression:"['Enddate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:e.changeTimeEnd}})],1)],1)],2)},o=[],s=i("c32d"),r=i.n(s),n={props:{show:{type:Object,default:function(){return{show:!1}}},Role:{type:String,default:""},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,Role:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},exportData:{Enddate:"",Begindate:""}}},watch:{show:function(e,t){var i=this;i.visible=e}},created:function(){var e=this;this.$watch("show",function(t,i){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},handleSubmit:function(){var e=this;this.form.validateFields(function(t,i){if(!t){var a={};a.Begindate=e.exportData.Begindate,a.Enddate=e.exportData.Enddate,a.Role=e.visible.Role;var o=document.createElement("a");o.href="/api/Employee/PaiDan/ExportLiZhi?Begindate="+a.Begindate+"&Enddate="+a.Enddate+"&Role="+a.Role,o.click(),e.onClose()}})},changeTimeBegin:function(e){this.exportData.Begindate=r()(e).format("YYYY-MM-DD")},changeTimeEnd:function(e){this.exportData.Enddate=r()(e).format("YYYY-MM-DD")}}},c=n,l=(i("1c3d"),i("2877")),u=Object(l["a"])(c,a,o,!1,null,"66131651",null);t["default"]=u.exports},"91d5":function(e,t,i){"use strict";var a=i("b8a7"),o=i.n(a);o.a},a0e4:function(e,t,i){"use strict";var a=i("d829"),o=i.n(a);o.a},a3af:function(e,t,i){},b8a7:function(e,t,i){},badd:function(e,t,i){"use strict";var a=i("fe30"),o=i.n(a);o.a},d2a2:function(e,t,i){"use strict";var a=i("a3af"),o=i.n(a);o.a},d829:function(e,t,i){},e342:function(e,t,i){"use strict";var a=i("507d"),o=i.n(a);o.a},f635:function(e,t,i){},fce8:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[i("template",{slot:"title"},[e._v("\n  员工详情\n")]),i("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[i("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[i("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),i("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),i("fuli",{ref:"fuli",attrs:{emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,role:e.visible.role,UserArray:e.visible.UserArray,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refreshparent:e.refresh}})],1),i("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[i("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),i("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[i("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=i("b775"),r=i("c32d"),n=i.n(r),c=i("2d6e"),l=i("86ba"),u=i("a5c1"),h=i("633c"),d=i("ac85"),b=i("6e12"),f=i("102c"),p=i("8354"),y={components:{personBase:c["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:h["default"],connectAdd:d["default"],connectList:b["default"],yibaobujiaoAdd:f["default"],yibaobujiaoList:p["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:n.a,comServiceCity:[],comService:{},hisrlz:[]}},watch:{show:function(e,t){var i=this;i.visible=e}},created:function(){var e=this;this.$watch("show",function(t,i){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=y,v=(i("1b4c"),i("2877")),S=Object(v["a"])(m,a,o,!1,null,"aa8798ce",null);t["default"]=S.exports},fe30:function(e,t,i){},ffff:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[i("template",{slot:"title"},[e._v("\n  员工详情\n")]),i("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[i("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[i("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),i("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),i("fuli",{ref:"fuli",attrs:{emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,UserArray:e.visible.UserArray,role:e.visible.role,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refreshparent:e.refresh}})],1),i("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[i("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),i("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[i("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=i("b775"),r=i("c32d"),n=i.n(r),c=i("2d6e"),l=i("86ba"),u=i("a5c1"),h=i("633c"),d=i("ac85"),b=i("6e12"),f=i("102c"),p=i("8354"),y={components:{personBase:c["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:h["default"],connectAdd:d["default"],connectList:b["default"],yibaobujiaoAdd:f["default"],yibaobujiaoList:p["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:n.a,comServiceCity:[],comService:{},hisrlz:[]}},watch:{show:function(e,t){var i=this;i.visible=e}},created:function(){var e=this;this.$watch("show",function(t,i){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=y,v=(i("d2a2"),i("2877")),S=Object(v["a"])(m,a,o,!1,null,"546eb913",null);t["default"]=S.exports}}]);