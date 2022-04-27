(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ac11505"],{"097e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1200,centered:!0},on:{cancel:e.onClose,ok:e.submitLadder}},[a("template",{slot:"title"},[e._v("\n  修改城市价格\n")]),a("a-form",{attrs:{form:e.form}},e._l(e.cityServiceList,function(t,i){return a("a-row",{key:i},[a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"城市",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0},model:{value:t.CityCode,callback:function(a){e.$set(t,"CityCode",a)},expression:"item.CityCode"}},e._l(e.cityList,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1),a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"接单客服部门",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["接单客服部门",{rules:e.AFormImportRules.iptInput}],expression:"['接单客服部门',{rules:AFormImportRules.iptInput}]"}],attrs:{options:e.options,loadData:e.loadData,changeOnSelect:"",placeholder:"请选择部门"},on:{change:e.onChange}})],1)],1),a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"接单客服",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0},model:{value:t.OrderUserid,callback:function(a){e.$set(t,"OrderUserid",a)},expression:"item.OrderUserid"}},e._l(e.DepList,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1),a("a-icon",{staticClass:"minus-btn ml10",attrs:{type:"minus-circle-o"},on:{click:function(){return e.removeCityService(t,i)}}})],1)],1)],1)}),1),a("div",{staticStyle:{"text-align":"center"}},[a("a-button",{staticStyle:{width:"60%"},attrs:{type:"dashed"},on:{click:e.addCityService}},[a("a-icon",{attrs:{type:"plus"}}),e._v("增加城市服务\n    ")],1)],1)],2)},o=[],s=a("75fc"),n=(a("7f7f"),a("ac6a"),a("b775")),r=(a("c32d"),a("61f7"),{props:{show:{type:Object,default:function(){return{show:!1}}}},data:function(){return{visible:{show:!1},form:this.$form.createForm(this),AFormImportRules:{iptSelect:[{required:!0,message:"请选择"}]},assetsdetail:{Company:{ComName:""},ComService:{ServiceType:""},ComPriceStep:[],ComServiceCity:[],ComPriceCity:[]},cityServiceList:[],cityList:[{code:"1301",name:"石家庄市"},{code:"1302",name:"唐山市"},{code:"1303",name:"秦皇岛市"}],DepList:[],options:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){var e=this;e.cityServiceList=e.visible.detail.ComServiceCity,n["a"].post("/api/ChildrenDepsByDepId",{DepId:"1"}).then(function(t){0===t.code&&t.data.forEach(function(t,a){var i={};i.value=t.code,i.label=t.name,i.isLeaf=!1,e.options.push(i),e.serviceOptions.push(i)})}).catch(function(e){console.log(e)})},submitLadder:function(){this.onClose()},addCityService:function(){var e={CityCode:"",OrderUserid:""};this.cityServiceList.push(e)},removeCityService:function(e,t){this.cityServiceList.splice(t,1)},loadData:function(e){var t=e[e.length-1],a=this;t.loading=!0,n["a"].post("/api/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,a){var i={};i.value=e.code,i.label=e.name,i.isLeaf=!1,t.children.push(i)}),a.options=Object(s["a"])(a.options)):(t.isLeaf=!0,t.loading=!1))}).catch(function(e){console.log(e),t.loading=!1})},onChange:function(e){this.DepList=[],this.SaleUserid="",this.userbydepid(e[e.length-1])},userbydepid:function(e){var t=this;n["a"].post("/api/UsersByDepId",{DepId:e}).then(function(e){var a=e;0===a.code&&(t.DepList=a.data)}).catch(function(e){console.log(e)})}}}),l=r,c=(a("b11f"),a("2877")),d=Object(c["a"])(l,i,o,!1,null,"69c8e1f9",null);t["default"]=d.exports},"0dd8":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1200,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  客户详情\n  ")]),a("div",[a("div",{staticClass:"tab-title"},[e._v("基本信息\n    "),a("a-button",{staticClass:"modify-btn",attrs:{size:"small",type:"primary",icon:"form"},on:{click:e.modifyEndDay}},[e._v("修改业务截止日")])],1),a("table",{staticClass:"detail-table",attrs:{border:"1"}},[a("tr",[a("td",[e._v("公司名称:")]),a("td",[e.ComService.LevelColor?a("span",{style:{display:"inline-block",height:"16px","line-height":"16px",padding:"0 5px","border-radius":"4px",background:e.ComService.LevelColor,"font-size":"11px",color:"#fff"}},[e._v(e._s(e.ComService.Level))]):e._e(),e._v(" "+e._s(e.ComService.ComName))]),a("td",[e._v("服务类型:")]),a("td",[e._v(e._s(e.visible.ServiceType[e.ComService.ServiceType]))]),a("td",[e._v("公积金服务类型:")]),a("td",[e._v(e._s(e.visible.ServiceType[e.ComService.GJJServiceType]))])]),a("tr",[a("td",[e._v("服务费模式:")]),a("td",[e._v(e._s(e.visible.BillingMode[e.ComService.BillingMode]))]),a("td",[e._v("补缴服务费模式:")]),a("td",[e._v(e._s(e.visible.BuJiaoBillingType[e.ComService.BuJiaoBillingType]))]),a("td",[e._v("是否有档案服务:")]),a("td",[e._v(e._s(1==e.ComService.DangAn?"是":"否"))])]),a("tr",[a("td",[e._v("联系规则:")]),a("td",[e._v(e._s(e.LinkRole[e.ComService.LinkRoleID]))]),a("td",[e._v("整户费:")]),a("td",[e._v(e._s(e.ComService.AccountFee))]),a("td",[e._v("单人价格:")]),a("td",[e._v(e._s(e.ComService.UnitPrice))])]),a("tr",[a("td",[e._v("档案价格:")]),a("td",[e._v(e._s(e.ComService.ArchivesPrice))]),a("td",[e._v("是否驻场:")]),a("td",[e._v(e._s("true"==e.ComService.IsOnsite?"是":"否"))]),a("td",[e._v("驻场客服:")]),a("td",[e._v(e._s(e.visible.UserArray[e.ComService.OnsiteUserid]))])]),a("tr",[a("td",[e._v("业务截止日:")]),a("td",[e._v(e._s(e.ComService.EndDay?e.ComService.EndDay+"日":""))]),a("td",[e._v("服务流程:")]),a("td",[e._v(e._s(e.visible.FlowType[e.ComService.FlowType]))]),a("td",[e._v("客服:")]),a("td",[e._v(e._s(e.visible.UserArray[e.ComService.KefuUserid]))])]),a("tr",[a("td",[e._v("派出公司:")]),a("td",{attrs:{colspan:"3"}},[e._v(e._s(e.ComService.GYSName))]),a("td",[e._v("数据专员")]),a("td",[e._v(e._s(e.visible.UserArray[e.ComService.DatauserID]))])]),a("tr",[a("td",[e._v("备注:")]),a("td",{attrs:{colspan:"5"},on:{click:e.changeRemarks}},[e.editRemarks?e._e():a("div",[e._v(e._s(e.ComService.Remarks))]),e.editRemarks?a("div",[a("a-input",{ref:"remarkid",attrs:{"default-value":e.ComService.Remarks},on:{blur:e.blurRemarks},model:{value:e.Remarks,callback:function(t){e.Remarks=t},expression:"Remarks"}})],1):e._e()])])]),a("div",{staticClass:"tab-title"},[e._v("阶梯优惠")]),a("a-table",{attrs:{columns:e.columnsLadder,dataSource:e.comPriceSteps,pagination:!1,size:"middle",rowKey:"ComPriceStepGuid"},scopedSlots:e._u([{key:"EmpMin",fn:function(t,i){return a("span",{},[e._v(e._s(i.EmpMin)+"~"+e._s(i.EmpMax)+"(含)")])}}])}),a("div",{staticClass:"tab-title"},[e._v("城市价格"),a("a-button",{staticClass:"modify-btn",attrs:{size:"small",type:"primary",icon:"form"},on:{click:e.modifyCityPrice}},[e._v("修改")])],1),a("a-table",{attrs:{columns:e.columnsPrice,dataSource:e.comPriceCities,pagination:!1,rowKey:"ComPriceCityGuid",size:"middle"},scopedSlots:e._u([{key:"CityCode",fn:function(t,i){return a("span",{},[e._v(e._s(e.visible.cityList[i.CityCode]))])}}])}),a("div",{staticClass:"tab-title"},[e._v("城市服务")]),a("a-table",{attrs:{columns:e.columnsCity,dataSource:e.comServiceCities,pagination:!1,rowKey:"ID",size:"middle"},scopedSlots:e._u([{key:"CityCode",fn:function(t,i){return a("span",{},[e._v(e._s(e.visible.cityList[i.CityCode]))])}},{key:"OrderUserid",fn:function(t,i){return a("span",{},[e._v(e._s(e.visible.UserArray[i.OrderUserid]))])}},{key:"action",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.changeKf(i)}}},[e._v("修改订单客服")])])}}])}),a("div",{staticClass:"tab-title"},[e._v("收费信息")]),a("a-table",{attrs:{columns:e.costcolumns,dataSource:e.cost,pagination:!1,rowKey:"ComCostGuid",size:"middle"},scopedSlots:e._u([{key:"BeginDate",fn:function(t,i){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(null==i.BeginDate?"":e.moment(i.BeginDate).format("YYYY-MM"))+"\n      ")])}},{key:"EndDate",fn:function(t,i){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(null==i.EndDate?"":e.moment(i.EndDate).format("YYYY-MM"))+"\n      ")])}}])}),a("div",{staticClass:"tab-title"},[e._v("社保账户")]),a("a-table",{attrs:{columns:e.accountcolumns,dataSource:e.SBAccount,pagination:!1,rowKey:"ID",size:"middle"},scopedSlots:e._u([{key:"AccountType",fn:function(t,i){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.visible.AccountType[i.AccountType])+"\n      ")])}},{key:"CityCode",fn:function(t,i){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.visible.cityList[i.CityCode])+"\n      ")])}},{key:"RegionCode",fn:function(t,i){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.visible.Region[i.RegionCode])+"\n      ")])}}])})],1),a("a-modal",{attrs:{title:"修改接单客服",visible:e.showHandoverLayer,"confirm-loading":e.confirmLoading,centered:"","z-index":1001},on:{ok:e.handOverOk,cancel:e.handleOverCancel}},[a("a-form",{attrs:{layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"部门",labelCol:{span:4},wrapperCol:{span:18}}},[a("a-cascader",{attrs:{options:e.allOptions,loadData:e.loadDataAll,changeOnSelect:"",placeholder:"请选择交接部门"},on:{change:e.onChangeAll},model:{value:e.handover.DepId,callback:function(t){e.$set(e.handover,"DepId",t)},expression:"handover.DepId"}})],1),a("a-form-item",{attrs:{label:"人员",labelCol:{span:4},wrapperCol:{span:18}}},[a("a-select",{model:{value:e.handover.Userid,callback:function(t){e.$set(e.handover,"Userid",t)},expression:"handover.Userid"}},e._l(e.AllUserList,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1)],1)],1)])],1),a("a-modal",{attrs:{title:"修改业务截止日",visible:e.showEndDayLayer,"confirm-loading":e.confirmLoading,centered:"","z-index":1001},on:{ok:e.endDayOk,cancel:e.endDayCancel}},[a("a-form",{attrs:{layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"业务截止日期",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:e.min,max:e.max,placeholder:"请输入1~28之间的数字"},model:{value:e.EndDay,callback:function(t){e.EndDay=t},expression:"EndDay"}})],1)],1)],1)],1)])],1),a("modal-modify-service",{attrs:{show:e.modal.modifyService,refresh:e.init}}),a("modal-modify-ladder",{attrs:{show:e.modal.modifyLadder,refresh:e.init}}),a("modal-modify-city-price",{attrs:{show:e.modal.modifyCityPrice,refresh:e.init}}),a("modal-modify-city-service",{attrs:{show:e.modal.modifyCityService,refresh:e.init}}),a("modal-connect-sub-account",{attrs:{show:e.modal.connectSubAccount,refresh:e.init}})],2)},o=[],s=a("75fc"),n=(a("7f7f"),a("ac6a"),a("b775")),r=a("c32d"),l=a.n(r),c=(a("61f7"),a("4b94")),d=a("591f"),m=a("2160"),p=a("097e"),u=a("0ff5"),v=[{title:"阶梯",customRender:function(e,t,a){return"阶梯"+(a+1)}},{title:"人数范围",scopedSlots:{customRender:"EmpMin"}},{title:"单人价格",dataIndex:"RealValue"},{title:"优惠金额",dataIndex:"Discount"}],f=[{title:"城市",scopedSlots:{customRender:"CityCode"}},{title:"单人价格",dataIndex:"UnitPrice"},{title:"档案价格",dataIndex:"ArchivesPrice"}],h=[{title:"城市",scopedSlots:{customRender:"CityCode"}},{title:"接单客服",scopedSlots:{customRender:"OrderUserid"}},{title:"操作",scopedSlots:{customRender:"action"}}],C=[{title:"编码",dataIndex:"SubCode"},{title:"名称",dataIndex:"SubAccount"},{title:"费率",dataIndex:"Rate"}],y=[{title:"支出金额",dataIndex:"OutAmount"},{title:"收入金额",dataIndex:"InAmount"},{title:"创建时间",dataIndex:"CreateTime"},{title:"开始日期",scopedSlots:{customRender:"BeginDate"}},{title:"结束日期",scopedSlots:{customRender:"EndDate"}},{title:"备注",dataIndex:"Remarks"}],b=[{title:"类型",scopedSlots:{customRender:"AccountType"}},{title:"账户",dataIndex:"AccountName"},{title:"户名",dataIndex:"AccountNumber"},{title:"城市",scopedSlots:{customRender:"CityCode"}},{title:"区域",scopedSlots:{customRender:"RegionCode"}},{title:"备注",dataIndex:"Remarks"}],_={components:{ModalModifyService:c["default"],ModalModifyLadder:d["default"],ModalModifyCityPrice:m["default"],ModalModifyCityService:p["default"],ModalConnectSubAccount:u["default"]},props:{show:{type:Object,default:function(){return{show:!1}}}},data:function(){return{columnsLadder:v,columnsPrice:f,columnsCity:h,columnsAccount:C,costcolumns:y,accountcolumns:b,visible:{show:!1,ServiceType:{},BillingMode:{},BuJiaoBillingType:{},cityList:{},UserArray:[],FlowType:{},AccountType:{},Region:{}},form:this.$form.createForm(this),assetsdetail:{},LinkRole:{1:"按上海",2:"按北京",3:"按河北"},modal:{modifyService:{show:!1},modifyLadder:{show:!1},modifyCityPrice:{show:!1},modifyCityService:{show:!1},connectSubAccount:{show:!1}},ComService:{ComName:"",Remarks:""},comPriceCities:[],comPriceSteps:[],comServiceCities:[],confirmLoading:!1,showHandoverLayer:!1,handover:{DepId:[],Userid:"",record:{}},allOptions:[],AllUserList:[],cost:[],moment:l.a,SBAccount:[],AccountType:{},editRemarks:!1,Remarks:"",EndDay:"",showEndDayLayer:!1,min:1,max:31}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.Remarks="",this.form.resetFields()},init:function(){var e=this;n["a"].post("/api/Company/Service/Detail",{Guid:e.visible.ComServiceGuid}).then(function(t){0===t.code&&(e.ComService=t.data.comService,e.comPriceCities=t.data.comPriceCities,e.comPriceSteps=t.data.comPriceSteps,e.comServiceCities=t.data.comServiceCities,e.cost=t.data.cost,e.SBAccount=t.data.SBAccount,e.assetsdetail=t.data,e.Remarks=t.data.comService.Remarks,console.log(e.comPriceCities))}).catch(function(e){console.log(e)}),e.getAllDep()},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},modifyComService:function(){var e=this;e.modal.modifyService={show:!0,detail:e.assetsdetail}},modifyLadder:function(){var e=this;e.modal.modifyLadder={show:!0,detail:e.assetsdetail}},modifyCityPrice:function(){var e=this;e.modal.modifyCityPrice={show:!0,detail:e.assetsdetail,cityList:e.visible.cityList}},modifyCityService:function(){var e=this;e.modal.modifyCityService={show:!0,detail:e.assetsdetail}},changeKf:function(e){this.handover.record=e,this.showHandoverLayer=!0},handOverOk:function(e){var t=this;t.handover.DepId===[]?t.$message.error("请选择部门！"):""===t.handover.Userid?t.$message.error("请选择人员！"):n["a"].post("/api/Company/Service/ChangeComServiceCity",{ID:t.handover.record.ID,OrderUserid:t.handover.Userid}).then(function(e){0===e.code?(t.showHandoverLayer=!1,t.handover={DepId:[],Userid:"",record:{}},t.allOptions=[],t.init(),t.$message.success(e.msg)):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},handleOverCancel:function(e){this.showHandoverLayer=!1,this.handover={DepId:[],Userid:"",record:{}}},getAllDep:function(){var e=this;n["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:"1"}).then(function(t){0===t.code&&t.data.forEach(function(t,a){var i={};i.value=t.code,i.label=t.name,i.isLeaf=!1,e.allOptions.push(i)})}).catch(function(e){console.log(e)})},loadDataAll:function(e){var t=e[e.length-1],a=this;t.loading=!0,n["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,a){var i={};i.value=e.code,i.label=e.name,i.isLeaf=!1,t.children.push(i)}),a.allOptions=Object(s["a"])(a.allOptions)):(t.isLeaf=!0,t.loading=!1,a.allOptions=Object(s["a"])(a.allOptions)))}).catch(function(e){console.log(e),t.loading=!1})},onChangeAll:function(e){this.AllUserList=[],this.handover.Userid="",this.userbydepidAll(e[e.length-1])},userbydepidAll:function(e){var t=this;n["a"].post("/api/Org/User/UsersByDepId",{DepId:e}).then(function(e){var a=e;0===a.code&&(t.AllUserList=a.data)}).catch(function(e){console.log(e)})},changeRemarks:function(){var e=this;e.editRemarks=!0,e.$nextTick(function(){e.$refs.remarkid.focus()})},blurRemarks:function(){var e=this;e.editRemarks=!1,n["a"].post("/api/company/service/UpdateComserviceRemarks",{ComServiceGuid:e.ComService.ComServiceGuid,Remarks:e.Remarks}).then(function(t){0===t.code?(e.$message.success(t.msg),e.init()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},modifyEndDay:function(){var e=this;e.ComService.EndDay&&(e.EndDay=e.ComService.EndDay),e.showEndDayLayer=!0},endDayOk:function(e){var t=this;n["a"].post("/api/company/service/UpdateComserviceEndDay",{ComServiceGuid:t.ComService.ComServiceGuid,EndDay:t.EndDay}).then(function(e){0===e.code?(t.$message.success(e.msg),t.showEndDayLayer=!1,t.ComService.EndDay=t.EndDay):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},endDayCancel:function(e){this.showEndDayLayer=!1,this.EndDay=""}}},S=_,g=(a("63e6"),a("2877")),w=Object(g["a"])(S,i,o,!1,null,"fc8dbfc8",null);t["default"]=w.exports},"0ff5":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:500,centered:!0},on:{cancel:e.onClose,ok:e.submitConnect}},[a("template",{slot:"title"},[e._v("\n  关联工伤二级户\n")]),a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"二级户名称",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SubAccountGuid,callback:function(t){e.SubAccountGuid=t},expression:"SubAccountGuid"}},e._l(e.subAccountList,function(t){return a("a-select-option",{key:t.SubAccountGuid},[e._v(e._s(t.SubAccount))])}),1)],1)],1)],2)},o=[],s=a("b775"),n=(a("c32d"),a("61f7"),{props:{show:{type:Object,default:function(){return{show:!1}}}},data:function(){return{visible:{show:!1},form:this.$form.createForm(this),subAccountList:[],SubAccountGuid:""}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){var e=this;s["a"].post("/api/GongShangSubAccount",{pageSize:9999}).then(function(t){0===t.code&&(e.subAccountList=t.data.rows)}).catch(function(e){console.log(e)})},submitConnect:function(){this.onClose()}}}),r=n,l=(a("505c"),a("2877")),c=Object(l["a"])(r,i,o,!1,null,"2f2ff894",null);t["default"]=c.exports},"10db":function(e,t,a){},2927:function(e,t,a){"use strict";var i=a("a0b7"),o=a.n(i);o.a},"40e2":function(e,t,a){},"4b94":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1200,centered:!0},on:{cancel:e.onClose,ok:e.submitService}},[a("template",{slot:"title"},[e._v("\n  修改客户服务信息\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"服务类型",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0}},[a("a-select-option",{key:"10"},[e._v("大库")]),a("a-select-option",{key:"20"},[e._v("单立户")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"公积金服务类型",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0}},[a("a-select-option",{key:"10"},[e._v("大库")]),a("a-select-option",{key:"20"},[e._v("单立户")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"服务费模式",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0}},[a("a-select-option",{key:"10"},[e._v("随账单一起收费")]),a("a-select-option",{key:"20"},[e._v("预收费")]),a("a-select-option",{key:"30"},[e._v("后收费")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"补缴服务费模式",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0}},[a("a-select-option",{key:"10"},[e._v("按人月")]),a("a-select-option",{key:"20"},[e._v("按人")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"是否有档案服务",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0}},[a("a-select-option",{key:"10"},[e._v("是")]),a("a-select-option",{key:"20"},[e._v("否")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"联系规则",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0}},[a("a-select-option",{key:"10"},[e._v("按北京")]),a("a-select-option",{key:"20"},[e._v("按上海")]),a("a-select-option",{key:"20"},[e._v("按河北")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"整户费",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[""],expression:"['']"}]})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"单人价格",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[""],expression:"['']"}]})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"档案价格",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:[""],expression:"['']"}]})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"是否驻场",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0}},[a("a-select-option",{key:"10"},[e._v("是")]),a("a-select-option",{key:"20"},[e._v("否")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"驻场客服部门",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["驻场客服部门",{rules:e.AFormImportRules.iptInput}],expression:"['驻场客服部门',{rules:AFormImportRules.iptInput}]"}],attrs:{options:e.options,loadData:e.loadData,changeOnSelect:"",placeholder:"请选择部门"},on:{change:e.onChange}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"驻场客服",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["驻场客服"],expression:"['驻场客服']"}],attrs:{allowClear:!0}},e._l(e.DepList,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1)],1)],1)],2)},o=[],s=a("75fc"),n=(a("7f7f"),a("ac6a"),a("bd86")),r=a("b775"),l=(a("c32d"),a("61f7"),{props:{show:{type:Object,default:function(){return{show:!1}}}},data:function(){var e;return e={visible:{show:!1,ServiceType:{},BillingMode:{},BuJiaoBillingType:{}},form:this.$form.createForm(this),assetsdetail:{Company:{ComName:""},ComService:{ServiceType:""},ComPriceStep:[],ComServiceCity:[],ComPriceCity:[]},LinkRole:{1:"按上海",2:"按北京",3:"按河北"}},Object(n["a"])(e,"form",this.$form.createForm(this)),Object(n["a"])(e,"AFormImportRules",{iptSelect:[{required:!0,message:"请选择"}]}),Object(n["a"])(e,"options",[]),Object(n["a"])(e,"DepList",[]),e},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){var e=this;r["a"].post("/api/ComDetail",{comGuid:""}).then(function(t){0===t.code&&(e.assetsdetail=t.data)}).catch(function(e){console.log(e)})},loadData:function(e){var t=e[e.length-1],a=this;t.loading=!0,r["a"].post("/api/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,a){var i={};i.value=e.code,i.label=e.name,i.isLeaf=!1,t.children.push(i)}),a.options=Object(s["a"])(a.options)):(t.isLeaf=!0,t.loading=!1))}).catch(function(e){console.log(e),t.loading=!1})},onChange:function(e){this.DepList=[],this.SaleUserid="",this.userbydepid(e[e.length-1])},userbydepid:function(e){var t=this;r["a"].post("/api/UsersByDepId",{DepId:e}).then(function(e){var a=e;0===a.code&&(t.DepList=a.data)}).catch(function(e){console.log(e)})},submitService:function(){this.onClose()}}}),c=l,d=(a("2927"),a("2877")),m=Object(d["a"])(c,i,o,!1,null,"e4b295aa",null);t["default"]=m.exports},"505c":function(e,t,a){"use strict";var i=a("6af5"),o=a.n(i);o.a},"591f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,centered:!0},on:{cancel:e.onClose,ok:e.submitLadder}},[a("template",{slot:"title"},[e._v("\n  修改阶梯优惠\n")]),e._l(e.ladderList,function(t,i){return a("div",{key:i,staticClass:"steps-box text-left"},[0==parseInt(t.EmpMin)&&99999==parseInt(t.EmpMax)?[e._v("\n    阶梯"+e._s(i+1)+"："+e._s(t.EmpMin)+"~"+e._s(t.EmpMax)+"人/优惠金额:"),a("a-input",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{placeholder:"优惠金额"},model:{value:t.Discount,callback:function(a){e.$set(t,"Discount",a)},expression:"item.Discount"}})]:0==parseInt(t.EmpMin)&&99999!=parseInt(t.EmpMax)?[e._v("\n      阶梯"+e._s(i+1)+"："+e._s(t.EmpMin)+"~"),a("a-input",{staticStyle:{width:"70px","margin-left":"8px"},on:{change:function(a){return e.ladderChange(t.EmpMax,t,i,"EmpMax")}},model:{value:t.EmpMax,callback:function(a){e.$set(t,"EmpMax",a)},expression:"item.EmpMax"}}),e._v("人/优惠金额:"),a("a-input",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{placeholder:"优惠金额"},model:{value:t.Discount,callback:function(a){e.$set(t,"Discount",a)},expression:"item.Discount"}})]:0!=parseInt(t.EmpMin)&&99999==parseInt(t.EmpMax)?[e._v("\n      阶梯"+e._s(i+1)+"："),a("a-input",{staticStyle:{width:"70px","margin-left":"8px"},on:{change:function(a){return e.ladderChange(t.EmpMin,t,i,"EmpMin")}},model:{value:t.EmpMin,callback:function(a){e.$set(t,"EmpMin",a)},expression:"item.EmpMin"}}),e._v(" ~ "+e._s(t.EmpMax)+"人/优惠金额:"),a("a-input",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{placeholder:"优惠金额"},model:{value:t.Discount,callback:function(a){e.$set(t,"Discount",a)},expression:"item.Discount"}})]:[e._v("\n      阶梯"+e._s(i+1)+"："),a("a-input",{staticStyle:{width:"70px","margin-left":"8px"},on:{change:function(a){return e.ladderChange(t.EmpMin,t,i,"EmpMin")}},model:{value:t.EmpMin,callback:function(a){e.$set(t,"EmpMin",a)},expression:"item.EmpMin"}}),e._v(" ~ "),a("a-input",{staticStyle:{width:"70px","margin-left":"8px"},on:{change:function(a){return e.ladderChange(t.EmpMax,t,i,"EmpMax")}},model:{value:t.EmpMax,callback:function(a){e.$set(t,"EmpMax",a)},expression:"item.EmpMax"}}),e._v("人/优惠金额:"),a("a-input",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{placeholder:"优惠金额"},model:{value:t.Discount,callback:function(a){e.$set(t,"Discount",a)},expression:"item.Discount"}})],a("a-icon",{staticClass:"ml10",attrs:{type:"plus-circle"},on:{click:function(){return e.add(t,i)}}}),e.ladderList.length>1&&0!=i?a("a-icon",{staticClass:"dynamic-delete-button ml10",attrs:{type:"minus-circle-o",disabled:1===e.ladderList.length},on:{click:function(){return e.remove(t,i)}}}):e._e()],2)})],2)},o=[],s=(a("b775"),a("c32d"),a("61f7"),{props:{show:{type:Object,default:function(){return{show:!1}}}},data:function(){return{visible:{show:!1},form:this.$form.createForm(this),assetsdetail:{Company:{ComName:""},ComService:{ServiceType:""},ComPriceStep:[],ComServiceCity:[],ComPriceCity:[]},ladderList:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){var e=this;e.ladderList=e.visible.detail.ComPriceStep},add:function(e,t){var a={EmpMin:"",EmpMax:"",Discount:""};0==t&&t==this.ladderList.length-1?(e.EmpMax="",a.EmpMax=99999):0==t?a.EmpMin=e.EmpMax?parseInt(e.EmpMax)+1:"":t==this.ladderList.length-1?(e.EmpMax="",a.EmpMax=99999):(a.EmpMin=e.EmpMax?parseInt(e.EmpMax)+1:"",a.EmpMax=""),this.ladderList.splice(t+1,0,a),console.log(this.ladderList)},remove:function(e,t){t==this.ladderList.length-1?this.ladderList[t-1].EmpMax=99999:this.ladderList[t-1].EmpMax=e.EmpMax,this.ladderList.splice(t,1),console.log(this.ladderList)},ladderChange:function(e,t,a,i){"EmpMax"==i&&(this.ladderList[a+1].EmpMin=parseInt(e)+1),"EmpMin"==i&&(this.ladderList[a-1].EmpMax=parseInt(e)-1)},submitLadder:function(){this.onClose()}}}),n=s,r=(a("f190"),a("2877")),l=Object(r["a"])(n,i,o,!1,null,"ee152f32",null);t["default"]=l.exports},"63e6":function(e,t,a){"use strict";var i=a("10db"),o=a.n(i);o.a},"6af5":function(e,t,a){},a0b7:function(e,t,a){},b11f:function(e,t,a){"use strict";var i=a("e5ad"),o=a.n(i);o.a},e5ad:function(e,t,a){},f190:function(e,t,a){"use strict";var i=a("40e2"),o=a.n(i);o.a}}]);