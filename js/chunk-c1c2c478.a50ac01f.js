(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1c2c478"],{"0def":function(t,e,a){},"2c4b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:t.onClose}},[a("template",{slot:"title"},[t._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:t.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:t.RuLiZhi,sbType:t.visible.sbType,SBAccount:t.SBAccount,Region:t.visible.Region,role:t.visible.role,UserArray:t.visible.UserArray,comServiceCity:t.comServiceCity,ServiceType:t.visible.ServiceType,FlowType:t.visible.FlowType,comService:t.comService,cityList:t.visible.cityList,RuLiZhiStatusObject:t.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:t.hisrlz,UserArray:t.visible.UserArray,RuLiZhiStatusObject:t.visible.RuLiZhiStatusObject}}),1==t.canDo?a("shebao-search",{attrs:{RuLiZhi:t.RuLiZhi,RLZGUID:t.visible.RLZGUID,YanglaoStatus:t.visible.YanglaoStatus,ShiyeStatus:t.visible.ShiyeStatus,YiliaoStatus:t.visible.YiliaoStatus,GongjijinStatus:t.visible.GongjijinStatus}}):t._e(),a("fuli",{ref:"fuli",attrs:{comService:t.comService,emSheBaos:t.emSheBaos,cando:t.canDo,sbType:t.visible.sbType,DoType:t.visible.DoType,role:t.visible.role,UserArray:t.visible.UserArray,RuLiZhi:t.RuLiZhi,DoTypeArray:t.visible.DoTypeArray,RLZGUID:t.visible.RLZGUID}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-add",{attrs:{ContactClass:t.visible.ContactClass,RSB_ContactType:t.visible.RSB_ContactType,PGUID:t.visible.PGUID,RLZGUID:t.visible.RLZGUID},on:{connectList:t.refreshConnectList}}),a("connect-list",{ref:"connect",attrs:{ContactClassObject:t.visible.ContactClassObject,RSB_ContactTypeObject:t.visible.RSB_ContactTypeObject,UserArray:t.visible.UserArray,PGUID:t.visible.PGUID,RLZGUID:t.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-add",{ref:"bjadd",attrs:{BujiaoTypeArray:t.visible.BujiaoTypeArray,BaseMinNum:t.BaseMinNum,PGUID:t.visible.PGUID,RLZGUID:t.visible.RLZGUID},on:{yiliaoList:t.refreshYiliaoList}}),a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:t.visible.PGUID,RLZGUID:t.visible.RLZGUID,role:t.visible.role,UserArray:t.visible.UserArray,BujiaoTypeObject:t.visible.BujiaoTypeObject,ChargeType:t.visible.ChargeType}})],1)],1)],2)},o=[],s=a("b775"),n=a("c32d"),c=a.n(n),r=a("2d6e"),l=a("86ba"),u=a("a5c1"),y=a("633c"),p=a("ac85"),h=a("6e12"),d=a("102c"),f=a("8354"),b={components:{personBase:r["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:y["default"],connectAdd:p["default"],connectList:h["default"],yibaobujiaoAdd:d["default"],yibaobujiaoList:f["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{},Region:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:c.a,comServiceCity:[],comService:{},canDo:!1,BaseMinNum:0,hisrlz:[],SBAccount:[]}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.RuLiZhi={},this.emSheBaos=[],this.comServiceCity=[],this.comService={},this.canDo=!1,this.hisrlz=[],this.SBAccount=[],this.BaseMinNum=0,this.form.resetFields(),this.$emit("refresh")},init:function(){var t=this;console.log(t.visible),s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:t.visible.RLZGUID}).then(function(e){0===e.code&&(t.RuLiZhi=e.data.RuLiZhi,t.emSheBaos=e.data.emSheBaos,t.comServiceCity=e.data.comServiceCity,t.comService=e.data.comService,t.canDo=e.data.canDo,t.hisrlz=e.data.hisrlz,t.SBAccount=e.data.SBAccount,null!=e.data.shebaoPolicy?t.BaseMinNum=e.data.shebaoPolicy.BaseMinNum:t.BaseMinNum=0)}).catch(function(t){console.log(t)})},refreshDetail:function(){console.log("ddd"),this.init()},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},S=b,T=(a("cfec"),a("2877")),m=Object(T["a"])(S,i,o,!1,null,"5b693d1f",null);e["default"]=m.exports},c60b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:4,lg:4,xl:4,xxl:4}},[a("a-form-item",{attrs:{label:"类型",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!1},model:{value:t.formSearch.TodoType,callback:function(e){t.$set(t.formSearch,"TodoType",e)},expression:"formSearch.TodoType"}},[a("a-select-option",{key:"0"},[t._v("全部")]),t._l(t.TodoTypeList,function(e){return a("a-select-option",{key:e.key},[t._v(t._s(e.text))])})],2)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.initPage}},[t._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"index"},scopedSlots:t._u([{key:"TodoType",fn:function(e,i){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n              "+t._s(t.TodoType[i.TodoType])+"\n              ")])}},{key:"LinkMan",fn:function(e,i){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(i)}}},[t._v(t._s(i.LinkMan))])])}},{key:"action",fn:function(e,i){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(i)}}},[t._v("联系")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,"show-total":function(t){return"共 "+t+" 条"},current:t.formSearch.current},on:{change:t.pagechange}})],1)],2),a("modal-detail",{attrs:{show:t.modal.detail},on:{refresh:t.pagerefresh}}),a("modal-detail-ddkf",{attrs:{show:t.modal.detailddkf},on:{refresh:t.pagerefresh}})],1)],1)],1)},o=[],s=(a("8e6e"),a("456d"),a("bd86")),n=(a("ac6a"),a("c5f6"),a("b775")),c=a("2c4b"),r=a("f111");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,i)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var y=[{title:"类型",scopedSlots:{customRender:"TodoType"}},{title:"最迟联系日期",dataIndex:"PresetDate"},{title:"导入时间",dataIndex:"CreateTime"},{title:"员工姓名",scopedSlots:{customRender:"LinkMan"}},{title:"操作",scopedSlots:{customRender:"action"}}],p={props:{type:{type:Object,default:function(){return{}}},role:{type:Number,default:0}},components:{ModalDetail:c["default"],ModalDetailDdkf:r["default"]},data:function(){return{advanced:!0,columns:y,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,TodoType:"0"},count:"5",form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],UserArray:[],TodoType:{},modal:{detail:{show:!1},detailddkf:{show:!1}},YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],RuLiZhiStatus:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:[],Deleted:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},TodoTypeList:[],ServiceType:{},FlowType:{}}},mounted:function(){var t=this;t.init()},activated:function(){console.log("刷新");var t=this;t.pagechange(1)},methods:{init:function(){var t=this;n["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","City"]}).then(function(e){0===e.code&&(t.UserArray=e.data.User,t.cityList=e.data.City)}).catch(function(t){console.log(t)}),n["a"].post("/api/Dim/Enum/GetEnum",{Names:["YanglaoStatus","ShiyeStatus","YiliaoStatus","GongjijinStatus","RuLiZhiStatus","sbType","DoType","ContactClass","RSB_ContactType","BujiaoType","ChargeType","TodoType","ServiceType","FlowType"]}).then(function(e){0===e.code?(t.TodoTypeList=e.data.TodoType,e.data.TodoType.forEach(function(e,a){t.TodoType[e.key]=e.text}),t.YanglaoStatus=e.data.YanglaoStatus,t.ShiyeStatus=e.data.ShiyeStatus,t.YiliaoStatus=e.data.YiliaoStatus,t.GongjijinStatus=e.data.GongjijinStatus,t.RuLiZhiStatus=e.data.RuLiZhiStatus,t.DoTypeArray=e.data.DoType,e.data.RuLiZhiStatus.forEach(function(e,a){t.RuLiZhiStatusObject[e.key]=e.text}),e.data.sbType.forEach(function(e,a){t.sbType[e.key]=e.text}),e.data.DoType.forEach(function(e,a){t.DoType[e.key]=e.text}),t.pagechange(1),t.ContactClass=e.data.ContactClass,t.RSB_ContactType=e.data.RSB_ContactType,t.BujiaoTypeArray=e.data.BujiaoType,e.data.ContactClass.forEach(function(e,a){t.ContactClassObject[e.key]=e.text}),e.data.RSB_ContactType.forEach(function(e,a){t.RSB_ContactTypeObject[e.key]=e.text}),e.data.BujiaoType.forEach(function(e,a){t.BujiaoTypeObject[e.key]=e.text}),e.data.ChargeType.forEach(function(e,a){t.ChargeType[e.key]=e.text}),e.data.ServiceType.forEach(function(e,a){t.ServiceType[e.key]=e.text}),e.data.FlowType.forEach(function(e,a){t.FlowType[e.key]=e.text})):t.$message.error(e.msg)}).catch(function(t){console.log(t)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a={},i="";e.formSearch.current=t,a=u({},e.formSearch),"77"==e.role&&(i="/api/todo/RuLiZhi/MyList_Order"),"76"==e.role&&(i="/api/todo/RuLiZhi/MyList_Employee"),"78"==e.role&&(i="/api/todo/RuLiZhi/MyList_Onsite"),e.$loading.open(),n["a"].post(i,a).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},detail:function(t){var e=this,a={show:!0,UserArray:e.UserArray,YanglaoStatus:e.YanglaoStatus,ShiyeStatus:e.ShiyeStatus,YiliaoStatus:e.YiliaoStatus,GongjijinStatus:e.GongjijinStatus,cityList:e.cityList,RLZGUID:t.RLZGUID,PGUID:t.PGUID,RuLiZhiStatusObject:e.RuLiZhiStatusObject,sbType:e.sbType,DoType:e.DoType,DoTypeArray:e.DoTypeArray,ContactClass:e.ContactClass,RSB_ContactType:e.RSB_ContactType,ContactClassObject:e.ContactClassObject,RSB_ContactTypeObject:e.RSB_ContactTypeObject,BujiaoTypeArray:e.BujiaoTypeArray,BujiaoTypeObject:e.BujiaoTypeObject,ChargeType:e.ChargeType,FlowType:e.FlowType,role:e.role,ServiceType:e.ServiceType};"77"==this.role?this.modal.detailddkf=u({show:!0},a):this.modal.detail=u({show:!0},a)},pullList:function(){var t=this,e={};e.count=t.count,e.todoType=t.type.type,e.day=t.type.day,t.$loading.open(),n["a"].post("/api/todo/RuLiZhi/Pull",e).then(function(e){t.$loading.close(),0===e.code&&t.$message.success("拉取成功！")}).catch(function(e){t.$loading.close(),console.log(e)})}}},h=p,d=a("2877"),f=Object(d["a"])(h,i,o,!1,null,null,null);e["default"]=f.exports},cfec:function(t,e,a){"use strict";var i=a("0def"),o=a.n(i);o.a}}]);