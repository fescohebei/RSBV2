(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e2f3d62","chunk-8dc2936c","chunk-1952c510"],{"0a1f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  拒绝\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",{staticStyle:{"margin-bottom":"50px"}},[a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{margin:"20px 0 0",color:"red"},attrs:{label:"截止日期",labelCol:{span:4},wrapperCol:{span:20}}},[e._v("\n            "+e._s(e.moment(e.visible.detail.SBEndDate).format("YYYY-MM-DD"))+"\n          ")])],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{margin:"20px 0 0"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.Remarks,callback:function(t){e.Remarks=t},expression:"Remarks"}})],1)],1)],1)],1),a("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return e.Refuse()}}},[e._v("拒绝")])],1)],2)},o=[],s=a("b775"),r=a("c32d"),n=a.n(r),c={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:"",detail:{}},form:this.$form.createForm(this),orderDetail:"",modal:{},dataSource:[],moment:n.a,Remarks:""}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail="",this.visible.orderDetail="",this.Remarks="",this.form.resetFields()},Refuse:function(){var e=this;e.Remarks?e.$confirm({title:"确认拒绝?",content:"点击确定确认。",onOk:function(){s["a"].post("/api/Employee/SheBaoSpecialJian/Refuse",{AppGUID:e.visible.orderDetail,Remarks:e.Remarks}).then(function(t){0===t.code?(console,e.$message.success(t.msg),e.refresh(),e.onClose()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}}):e.$message.error("请输入原因！")}}},l=c,u=(a("c5e9"),a("2877")),p=Object(u["a"])(l,i,o,!1,null,"189d66a2",null);t["default"]=p.exports},"1d0e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:4,lg:4,xl:6,xxl:5}},[a("a-form-item",{attrs:{label:"名称/身份证/姓名",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.KeyWord,callback:function(t){e.$set(e.formSearch,"KeyWord",t)},expression:"formSearch.KeyWord"}})],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:4,xxl:4}},[a("a-form-item",{attrs:{label:"社保类型",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.formSearch.sbType,callback:function(t){e.$set(e.formSearch,"sbType",t)},expression:"formSearch.sbType"}},e._l(e.sbTypeArray,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:4,xxl:4}},[a("a-form-item",{attrs:{label:"服务类型",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.formSearch.ServiceType,callback:function(t){e.$set(e.formSearch,"ServiceType",t)},expression:"formSearch.ServiceType"}},e._l(e.ServiceTypeArray,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:5,xxl:4}},[a("a-form-item",{attrs:{label:"处理结果",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!1},model:{value:e.formSearch.doType,callback:function(t){e.$set(e.formSearch,"doType",t)},expression:"formSearch.doType"}},[a("a-select-option",{key:"0"},[e._v("全部")]),a("a-select-option",{key:"1"},[e._v("未处理")]),a("a-select-option",{key:"2"},[e._v("已处理")])],1)],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:3,xxl:4}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.init}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.exportExcel}},[e._v("查询并导出")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"AppGUID"},scopedSlots:e._u([{key:"userName",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.detail(i)}}},[e._v(e._s(i["姓名"]))]),a("br"),e._v(e._s(i["身份证号"]))])}},{key:"sbType",fn:function(t,i){return a("span",{},[e._v(e._s(e.sbType[i.sbType]))])}},{key:"b_Status",fn:function(t,i){return a("span",{},[0==i.b_Status?a("a-tag",{attrs:{color:"blue"}},[e._v("\n            "+e._s(e.SBApprovalStatus[i.b_Status])+"\n          ")]):e._e(),1==i.b_Status?a("a-tag",{attrs:{color:"red"}},[e._v("\n            "+e._s(e.SBApprovalStatus[i.b_Status])+"\n          ")]):e._e(),2==i.b_Status?a("a-tag",{attrs:{color:"green"}},[e._v("\n            "+e._s(e.SBApprovalStatus[i.b_Status])+"\n          ")]):e._e(),-1==i.b_Status?a("a-tag",[e._v("\n            "+e._s(e.SBApprovalStatus[i.b_Status])+"\n          ")]):e._e()],1)}},{key:"sbAccount",fn:function(t,i){return a("span",{},[e._v("户名:"+e._s(i.AccountName)),a("br"),e._v("账户:"+e._s(i.AccountNumber))])}},{key:"SBEndDate",fn:function(t,i){return a("span",{},[e._v(e._s(i.SBEndDate?e.moment(i.SBEndDate).format("YYYY-MM-DD"):""))])}},{key:"b_CreateUserID",fn:function(t,i){return a("span",{staticStyle:{"font-size":"12px"}},[e._v("申请人："+e._s(e.UserArray[i.b_CreateUserID])),a("br"),e._v("时间："+e._s(i.b_CreateTime))])}},{key:"b_ApprovalUserID",fn:function(t,i){return a("span",{staticStyle:{"font-size":"12px"}},[e._v("提取人："+e._s(e.UserArray[i.b_ApprovalUserID])),a("br"),e._v("时间："+e._s(i.b_ApprovalTime))])}},{key:"action",fn:function(t,i){return a("span",{staticStyle:{"text-align":"right"}},[0===i.b_Status&&98===e.role?a("a",{on:{click:function(t){return e.detailaudit(i)}}},[e._v("提取")]):e._e(),0===i.b_Status&&98===e.role?a("a-divider",{attrs:{type:"vertical"}}):e._e(),0===i.b_Status&&98===e.role?a("a",{on:{click:function(t){return e.Refuse(i)}}},[e._v("拒绝")]):e._e(),0!==i.b_Status||77!==e.role&&79!==e.role?e._e():a("a",{on:{click:function(t){return e.Cancel(i)}}},[e._v("取消")])],1)}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,"show-total":function(e){return"共 "+e+" 条"},current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("modal-detail-kf",{attrs:{show:e.modal.detailkf,refresh:e.pagerefresh}}),a("modal-detail-ddkf",{attrs:{show:e.modal.detailddkf,refresh:e.pagerefresh}}),a("modal-detail-yxkf",{attrs:{show:e.modal.detailyxkf,refresh:e.pagerefresh}}),a("modal-detail-audit",{attrs:{show:e.modal.detailaudit,refresh:e.pagerefresh}}),a("modal-detail-refuse",{attrs:{show:e.modal.refuse,refresh:e.pagerefresh}})],1)],1)],1)},o=[],s=(a("8e6e"),a("456d"),a("bd86")),r=(a("ac6a"),a("c5f6"),a("b775")),n=(a("61f7"),a("ffff")),c=a("f111"),l=a("2014"),u=a("3027"),p=a("58eb"),h=a("0a1f");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(s["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var f=[{title:"审核状态",scopedSlots:{customRender:"b_Status"}},{title:"姓名",scopedSlots:{customRender:"userName"}},{title:"公司名称",dataIndex:"ComName"},{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"社保账户",scopedSlots:{customRender:"sbAccount"}},{title:"截止日期",scopedSlots:{customRender:"SBEndDate"}},{title:"申请",scopedSlots:{customRender:"b_CreateUserID"}},{title:"申请备注",dataIndex:"b_Remarks"},{title:"提取人",scopedSlots:{customRender:"b_ApprovalUserID"}},{title:"提取备注",dataIndex:"b_ApprovalContent"},{title:"操作",scopedSlots:{customRender:"action"}}],d={components:{ModalDetailKf:n["default"],ModalDetailDdkf:c["default"],ModalDetailZckf:l["default"],ModalDetailAudit:p["default"],ModalDetailYxkf:u["default"],ModalDetailRefuse:h["default"]},props:{role:{type:Number,default:""}},data:function(){return{advanced:!0,columns:f,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,KeyWord:"",doType:"1",sbType:"",ServiceType:"",Type:1},form:this.$form.createForm(this),modifyForm:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],drawer:{},modal:{detailddkf:{show:!1},detailkf:{show:!1},detailzckf:{show:!1},detailyxkf:{show:!1},detailaudit:{show:!1},refuse:{show:!1}},showaddLayer:!1,showmodifyLayer:!1,GYSName:"",moment:moment,UserArray:[],DeptArray:[],cityList:{},ServiceType:{},BillingMode:{},BuJiaoBillingType:{},ServiceTypeArray:[],BillingModeArray:[],BuJiaoBillingTypeArray:[],FlowType:{},FlowTypeArray:[],YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],RuLiZhiStatus:[],RuLiZhiStatusObject:{},sbType:{},sbTypeArray:[],DoType:{},DoTypeArray:[],SBApprovalStatus:{},SBApprovalStatusArray:[],Deleted:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},selectedRowKeys:[],selectedRows:[]}},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;r["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.DeptArray=t.data.Dept,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),r["a"].post("/api/Dim/Enum/GetEnum",{Names:["YanglaoStatus","ShiyeStatus","YiliaoStatus","GongjijinStatus","RuLiZhiStatus","sbType","DoType","ContactClass","RSB_ContactType","BujiaoType","ChargeType","ServiceType","FlowType","SBApprovalStatus"]}).then(function(t){0===t.code?(console.log(t),e.YanglaoStatus=t.data.YanglaoStatus,e.ShiyeStatus=t.data.ShiyeStatus,e.YiliaoStatus=t.data.YiliaoStatus,e.GongjijinStatus=t.data.GongjijinStatus,e.RuLiZhiStatus=t.data.RuLiZhiStatus,e.DoTypeArray=t.data.DoType,e.SBApprovalStatusArray=t.data.SBApprovalStatus,e.sbTypeArray=t.data.sbType,e.ServiceTypeArray=t.data.ServiceType,t.data.RuLiZhiStatus.forEach(function(t,a){e.RuLiZhiStatusObject[t.key]=t.text}),t.data.sbType.forEach(function(t,a){e.sbType[t.key]=t.text}),t.data.DoType.forEach(function(t,a){e.DoType[t.key]=t.text}),t.data.SBApprovalStatus.forEach(function(t,a){e.SBApprovalStatus[t.key]=t.text}),e.pagechange(1),e.ContactClass=t.data.ContactClass,e.RSB_ContactType=t.data.RSB_ContactType,e.BujiaoTypeArray=t.data.BujiaoType,t.data.ContactClass.forEach(function(t,a){e.ContactClassObject[t.key]=t.text}),t.data.RSB_ContactType.forEach(function(t,a){e.RSB_ContactTypeObject[t.key]=t.text}),t.data.BujiaoType.forEach(function(t,a){e.BujiaoTypeObject[t.key]=t.text}),t.data.ChargeType.forEach(function(t,a){e.ChargeType[t.key]=t.text}),t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),t.data.FlowType.forEach(function(t,a){e.FlowType[t.key]=t.text})):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},pagerefresh:function(){this.pagechange(this.formSearch.current),this.selectedRowKeys=[],this.selectedRows=[]},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=t.formSearch,a.role=t.role,t.$loading.open(),r["a"].post("/api/Employee/SheBaoSpecialJian/List",t.formSearch).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},detail:function(e){var t=this,a={UserArray:t.UserArray,YanglaoStatus:t.YanglaoStatus,ShiyeStatus:t.ShiyeStatus,YiliaoStatus:t.YiliaoStatus,GongjijinStatus:t.GongjijinStatus,cityList:t.cityList,RLZGUID:e.RLZGUID,PGUID:e.PGUID,RuLiZhiStatusObject:t.RuLiZhiStatusObject,sbType:t.sbType,DoType:t.DoType,DoTypeArray:t.DoTypeArray,ContactClass:t.ContactClass,RSB_ContactType:t.RSB_ContactType,ContactClassObject:t.ContactClassObject,RSB_ContactTypeObject:t.RSB_ContactTypeObject,BujiaoTypeArray:t.BujiaoTypeArray,BujiaoTypeObject:t.BujiaoTypeObject,ChargeType:t.ChargeType,FlowType:t.FlowType,ServiceType:t.ServiceType};77==t.role?t.modal.detailddkf=y({show:!0,role:77},a):78==t.role?t.modal.detailzckf=y({show:!0,role:77},a):79==t.role?t.modal.detailkf=y({show:!0,role:79},a):t.modal.detailyxkf=y({show:!0,role:98},a)},detailaudit:function(e){this.modal.detailaudit={show:!0,detail:e,orderDetail:e.AppGUID}},Refuse:function(e){this.modal.refuse={show:!0,detail:e,orderDetail:e.AppGUID}},Cancel:function(e){var t=this;t.$confirm({title:"确认取消?",content:"点击确定确认。",onOk:function(){r["a"].post("/api/Employee/SheBaoSpecialJian/Cancel",{AppGUID:e.AppGUID}).then(function(e){0===e.code?(console,t.$message.success(e.msg),t.pagerefresh()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},exportExcel:function(){var e=this,t=document.createElement("a"),a=e.role;t.href="/api/Employee/SheBaoSpecialJian/Exportlist?role="+a+"&sbType="+e.formSearch.sbType+"&doType="+e.formSearch.doType+"&Type=1",t.click()}}},m=d,S=a("2877"),v=Object(S["a"])(m,i,o,!1,null,null,null);t["default"]=v.exports},2014:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,sbType:e.visible.sbType,SBAccount:e.SBAccount,Region:e.visible.Region,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("shebao-search",{attrs:{RuLiZhi:e.RuLiZhi,RLZGUID:e.visible.RLZGUID,YanglaoStatus:e.visible.YanglaoStatus,ShiyeStatus:e.visible.ShiyeStatus,YiliaoStatus:e.visible.YiliaoStatus,GongjijinStatus:e.visible.GongjijinStatus}}),a("fuli",{ref:"fuli",attrs:{comService:e.comService,emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,role:e.visible.role,UserArray:e.visible.UserArray,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refresh:e.init}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-add",{attrs:{ContactClass:e.visible.ContactClass,RSB_ContactType:e.visible.RSB_ContactType,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{connectList:e.refreshConnectList}}),a("connect-list",{ref:"connect",attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-add",{ref:"bjadd",attrs:{BujiaoTypeArray:e.visible.BujiaoTypeArray,BaseMinNum:e.BaseMinNum,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{yiliaoList:e.refreshYiliaoList}}),a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=a("b775"),r=a("c32d"),n=a.n(r),c=a("2d6e"),l=a("86ba"),u=a("a5c1"),p=a("633c"),h=a("ac85"),b=a("6e12"),y=a("102c"),f=a("8354"),d={components:{personBase:c["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:p["default"],connectAdd:h["default"],connectList:b["default"],yibaobujiaoAdd:y["default"],yibaobujiaoList:f["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{},Region:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:n.a,comServiceCity:[],comService:{},BaseMinNum:0,hisrlz:[],SBAccount:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.RuLiZhi={},this.emSheBaos=[],this.comServiceCity=[],this.comService={},this.hisrlz=[],this.SBAccount=[],this.BaseMinNum=0,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.BaseMinNum=t.data.shebaoPolicy.BaseMinNum,e.hisrlz=t.data.hisrlz,e.SBAccount=t.data.SBAccount)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=d,S=(a("899a"),a("2877")),v=Object(S["a"])(m,i,o,!1,null,"28db0097",null);t["default"]=v.exports},3027:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,sbType:e.visible.sbType,SBAccount:e.SBAccount,Region:e.visible.Region,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("fuli",{ref:"fuli",attrs:{comService:e.comService,emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,role:e.visible.role,UserArray:e.visible.UserArray,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refreshparent:e.refresh}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-list",{ref:"connect",attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=a("b775"),r=a("c32d"),n=a.n(r),c=a("2d6e"),l=a("86ba"),u=a("a5c1"),p=a("633c"),h=a("ac85"),b=a("6e12"),y=a("102c"),f=a("8354"),d={components:{personBase:c["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:p["default"],connectAdd:h["default"],connectList:b["default"],yibaobujiaoAdd:y["default"],yibaobujiaoList:f["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{},Region:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:n.a,comServiceCity:[],comService:{},hisrlz:[],SBAccount:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.RuLiZhi={},this.emSheBaos=[],this.comServiceCity=[],this.comService={},this.hisrlz=[],this.SBAccount=[],this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.hisrlz=t.data.hisrlz,e.SBAccount=t.data.SBAccount)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=d,S=(a("d1d6"),a("2877")),v=Object(S["a"])(m,i,o,!1,null,"11be21e8",null);t["default"]=v.exports},"365e":function(e,t,a){},"3e57":function(e,t,a){},4894:function(e,t,a){},"58eb":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  提取\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",{staticStyle:{"margin-bottom":"50px"}},[a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{margin:"20px 0 0",color:"red"},attrs:{label:"截止日期",labelCol:{span:4},wrapperCol:{span:20}}},[e._v("\n            "+e._s(e.moment(e.visible.detail.SBEndDate).format("YYYY-MM-DD"))+"\n          ")])],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{margin:"20px 0 0"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.Remarks,callback:function(t){e.Remarks=t},expression:"Remarks"}})],1)],1)],1)],1),a("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return e.Pass()}}},[e._v("提取")])],1)],2)},o=[],s=a("b775"),r=a("c32d"),n=a.n(r),c={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:"",detail:{}},form:this.$form.createForm(this),orderDetail:"",modal:{},dataSource:[],moment:n.a,Remarks:""}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail="",this.visible.orderDetail="",this.Remarks="",this.form.resetFields()},Pass:function(){var e=this;e.$confirm({title:"确认提取?",content:"点击确定确认。",onOk:function(){s["a"].post("/api/Employee/SheBaoSpecialJian/Pass",{AppGUID:e.visible.orderDetail,Remarks:e.Remarks}).then(function(t){0===t.code?(e.$message.success(t.msg),e.refresh(),e.onClose()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})}}},l=c,u=(a("c611"),a("2877")),p=Object(u["a"])(l,i,o,!1,null,"1800f422",null);t["default"]=p.exports},"899a":function(e,t,a){"use strict";var i=a("c59f"),o=a.n(i);o.a},bbf5:function(e,t,a){},c59f:function(e,t,a){},c5e9:function(e,t,a){"use strict";var i=a("365e"),o=a.n(i);o.a},c611:function(e,t,a){"use strict";var i=a("3e57"),o=a.n(i);o.a},d1d6:function(e,t,a){"use strict";var i=a("bbf5"),o=a.n(i);o.a},e1a4:function(e,t,a){"use strict";var i=a("4894"),o=a.n(i);o.a},ffff:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,sbType:e.visible.sbType,SBAccount:e.SBAccount,Region:e.visible.Region,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("fuli",{ref:"fuli",attrs:{comService:e.comService,emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,UserArray:e.visible.UserArray,role:e.visible.role,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refreshparent:e.refresh}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-list",{ref:"connect",attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],s=a("b775"),r=a("c32d"),n=a.n(r),c=a("2d6e"),l=a("86ba"),u=a("a5c1"),p=a("633c"),h=a("ac85"),b=a("6e12"),y=a("102c"),f=a("8354"),d={components:{personBase:c["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:p["default"],connectAdd:h["default"],connectList:b["default"],yibaobujiaoAdd:y["default"],yibaobujiaoList:f["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{},Region:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:n.a,comServiceCity:[],comService:{},hisrlz:[],SBAccount:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.RuLiZhi={},this.emSheBaos=[],this.comServiceCity=[],this.comService={},this.hisrlz=[],this.SBAccount=[],this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;s["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.hisrlz=t.data.hisrlz,e.SBAccount=t.data.SBAccount)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=d,S=(a("e1a4"),a("2877")),v=Object(S["a"])(m,i,o,!1,null,"718c026d",null);t["default"]=v.exports}}]);