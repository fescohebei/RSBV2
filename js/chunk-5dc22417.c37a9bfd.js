(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dc22417","chunk-0d5ec26a","chunk-07439cf6","chunk-48cb4523","chunk-025ba857"],{"053a":function(e,t,a){"use strict";var r=a("985b"),o=a.n(r);o.a},"102c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("新增")]),a("a-form",{attrs:{form:e.yiliaoForm}},[a("div",{staticClass:"form-box"},[a("a-row",[a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"补缴基数",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Jishu",{initialValue:e.BaseMinNum,rules:e.yiliaoFormImportRules.iptInput}],expression:"['Jishu',{initialValue:BaseMinNum,rules:yiliaoFormImportRules.iptInput}]"}]})],1)],1),a("a-col",{staticStyle:{display:"none"},attrs:{span:6}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Bili",{initialValue:"0",rules:e.yiliaoFormImportRules.iptInput}],expression:"['Bili',{initialValue:'0',rules:yiliaoFormImportRules.iptInput}]"}],attrs:{readOnly:""}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"手续费/月",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Shouxufei",{initialValue:"20",rules:e.yiliaoFormImportRules.iptInputReq}],expression:"['Shouxufei',{initialValue:'20',rules:yiliaoFormImportRules.iptInputReq}]"}]})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"补缴开始月份",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["BeginMonth",{rules:e.yiliaoFormImportRules.iptInputReq}],expression:"['BeginMonth',{rules:yiliaoFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"补缴截止月份",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["EndMonth",{rules:e.yiliaoFormImportRules.iptInputReq}],expression:"['EndMonth',{rules:yiliaoFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"补缴金额",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Amount",{rules:e.yiliaoFormImportRules.iptInput}],expression:"['Amount',{rules:yiliaoFormImportRules.iptInput}]"}],attrs:{readOnly:"",placeholder:"计算后自动填充"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"补缴类型",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["BujiaoType",{rules:e.yiliaoFormImportRules.selectReq}],expression:"['BujiaoType',{rules:yiliaoFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.BujiaoTypeArray,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"补缴月份",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["bjyf"],expression:"['bjyf']"}],attrs:{readOnly:"",placeholder:"计算后自动填充"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{staticStyle:{"margin-left":"20px"},attrs:{label:"",labelCol:{span:2},wrapperCol:{span:19}}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["ChargeStatus"],expression:"['ChargeStatus']"}]}),e._v(" 确认收款\n              ")],1)],1)],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"-15px"},attrs:{label:"备注",labelCol:{span:2},wrapperCol:{span:22}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks"],expression:"['Remarks']"}],attrs:{placeholder:"备注",rows:3}})],1)],1)],1),a("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"90px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.computerYiliao}},[e._v("计算补缴金额")]),a("a-button",{staticStyle:{"margin-left":"12px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.saveYiliao}},[e._v("保存")])],1)],1)])],1)},o=[],i=(a("c5f6"),a("b775")),s={props:{RLZGUID:{type:String,default:""},PGUID:{type:String,default:""},BujiaoTypeArray:{type:Array,default:function(){return{}}},yiliaoList:{type:Function,default:null},BaseMinNum:{type:Number,default:""}},data:function(){return{yiliaoForm:this.$form.createForm(this),yiliaoFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}],iptInput:[{required:!1,message:"请输入"}],selectReq:[{required:!0,message:"请选择"}],onsite:[{required:!1,message:"请选择"}]}}},created:function(){this.init()},methods:{init:function(){},computerYiliao:function(){var e=this,t={};e.yiliaoForm.validateFields(function(a,r){a||(t=r,t.PGUID=e.PGUID,t.RLZGUID=e.RLZGUID,t.BeginMonth=moment(r.BeginMonth).format("YYYY-MM"),t.EndMonth=moment(r.EndMonth).format("YYYY-MM"),void 0==r.ChargeStatus&&(t.ChargeStatus=!1),e.$loading.open(),i["a"].post("/api/Employee/shebao/GetMoney",t).then(function(t){e.$loading.close(),0===t.code?e.yiliaoForm.setFieldsValue({bjyf:t.data.TotalMonth,Amount:t.data.Amount,Bili:t.data.Bili}):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})},saveYiliao:function(){var e=this,t={};e.yiliaoForm.validateFields(function(a,r){a||(t=r,t.PGUID=e.PGUID,t.RLZGUID=e.RLZGUID,t.BeginMonth=moment(r.BeginMonth).format("YYYY-MM"),t.EndMonth=moment(r.EndMonth).format("YYYY-MM"),void 0==r.ChargeStatus&&(t.ChargeStatus=!1),e.$loading.open(),i["a"].post("/api/Employee/shebao/YiBaoBuJiao",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.$emit("yiliaoList"),e.yiliaoForm.resetFields()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})}}},n=s,l=(a("a803"),a("2877")),c=Object(l["a"])(n,r,o,!1,null,"6ab2c972",null);t["default"]=c.exports},"14e2":function(e,t,a){},"2d6e":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("客户信息")]),a("table",{staticClass:"detail-table",attrs:{border:"1"}},[a("tr",[a("td",[e._v("客户名称")]),a("td",[e._v(e._s(e.comService.ComName))]),a("td",[e._v("服务流程")]),a("td",[e._v(e._s(e.FlowType[e.comService.FlowType]))]),a("td",[e._v("服务类型")]),a("td",[e._v(e._s(e.ServiceType[e.comService.ServiceType]))]),a("td",[e._v("公积金服务类型")]),a("td",[e._v(e._s(e.ServiceType[e.comService.GJJServiceType]))])]),a("tr",[a("td",[e._v("客服")]),a("td",[e._v(e._s(e.UserArray[e.RuLiZhi.KefuUserid]))]),a("td",[e._v("订单客服")]),a("td",e._l(e.comServiceCity,function(t){return a("span",{key:t.OrderUserid},[e._v(e._s(e.UserArray[t.OrderUserid])+" ")])}),0),a("td",[e._v("驻场客服")]),a("td",{attrs:{colspan:"3"}},[e._v(e._s(e.UserArray[e.comService.OnsiteUserid]))])]),a("tr",[a("td",[e._v("备注")]),a("td",{attrs:{colspan:"7"}},[e._v(e._s(e.comService.Remarks))])])]),a("div",{staticClass:"tab-title"},[e._v("\n      基本信息\n      "),"79"==e.role&&1==e.RuLiZhi.NotIn?a("a-button",{staticStyle:{"margin-left":"10px",float:"right"},attrs:{type:"primary",size:"small"},on:{click:e.cancleNotIn}},[e._v("取消整体未做入")]):e._e(),"76"==e.role&&1!=e.RuLiZhi.NotIn?a("a-button",{staticStyle:{"margin-left":"10px",float:"right"},attrs:{type:"primary",size:"small"},on:{click:e.showSub}},[e._v("整体未做入")]):e._e()],1),a("table",{staticClass:"detail-table",attrs:{border:"1"}},[a("tr",[a("td",[e._v("姓名")]),a("td",[e._v(e._s(e.RuLiZhi["姓名"]))]),a("td",[e._v("身份证号")]),a("td",[e._v(e._s(e.RuLiZhi["身份证号"]))]),a("td",[e._v("参保地")]),a("td",[e._v(e._s(e.cityList[e.RuLiZhi.CityCode]))]),a("td",[e._v("公司")]),a("td",[e._v(e._s(e.RuLiZhi.ComName))])]),a("tr",[a("td",[e._v(e._s(e.RuLiZhi.Status>40?"离职联系方式:":"联系方式:"))]),a("td",[e._v(e._s(e.RuLiZhi.rzLinkTel))]),a("td",[e._v("员工邮箱")]),a("td",{on:{click:e.changeEmail}},[e.editEmail?e._e():a("div",[e._v(e._s(e.RuLiZhi.rzEmail))]),e.editEmail?a("div",[a("a-input",{ref:"emailid",attrs:{"default-value":e.RuLiZhi.rzEmail},on:{blur:e.blurEmail},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1):e._e()]),e.RuLiZhi.Status>40?[a("td",[e._v("离职派单时间")]),a("td",{staticStyle:{color:"red"}},[e._v(e._s(e.RuLiZhi.lzPaiDanDate?e.moment(e.RuLiZhi.lzPaiDanDate).format("YYYY-MM-DD"):""))])]:[a("td",[e._v("派单时间:")]),a("td",[e._v(e._s(e.RuLiZhi.PaiDanDate?e.moment(e.RuLiZhi.PaiDanDate).format("YYYY-MM-DD"):""))])],a("td",[e._v("派出公司")]),a("td",[e._v(e._s(e.RuLiZhi.GYSName))])],2),e.RuLiZhi.Status>40?[a("tr",[a("td",[e._v("客服")]),a("td",[e._v(e._s(e.UserArray[e.RuLiZhi.KefuUserid]))]),a("td",[e._v("唯一号")]),a("td"),a("td",[e._v("状态")]),a("td",[e._v(e._s(e.RuLiZhiStatusObject[e.RuLiZhi.Status]))]),a("td",[e._v("是否领失业金")]),a("td",[e._v(e._s(e.RuLiZhi.reqShiyejin?"是":"否"))])]),a("tr",[a("td",[e._v("离职原因")]),a("td",[e._v(e._s(e.RuLiZhi.lzReason))]),a("td",[e._v("是否含档")]),a("td",[e._v(e._s(e.RuLiZhi.DangAn?"是":"否"))]),a("td",[e._v("特殊事项备注")]),a("td",[e._v(e._s(e.RuLiZhi.lzRemarks))]),a("td",[e._v("驻场客服")]),a("td",[e._v(e._s(e.UserArray[e.RuLiZhi.OnsiteUserid]))])]),a("tr",[a("td",[e._v("订单客服")]),a("td",e._l(e.RuLiZhi.OrderUserids,function(t){return a("span",{key:t.OrderUserid},[e._v(e._s(e.UserArray[t.OrderUserid])+" ")])}),0),a("td",[e._v("整体未做入")]),a("td",[e._v(e._s(1==e.RuLiZhi.NotIn?"是":"否"))]),a("td",[e._v("未做入原因")]),a("td",[e._v(e._s(e.RuLiZhi.NotInRemark))])])]:[a("tr",[a("td",[e._v("客服")]),a("td",[e._v(e._s(e.UserArray[e.RuLiZhi.KefuUserid]))]),a("td",[e._v("唯一号")]),a("td"),a("td",[e._v("状态:")]),a("td",[e._v(e._s(e.RuLiZhiStatusObject[e.RuLiZhi.Status]))]),a("td",[e._v("是否联系员工")]),a("td",[e._v(e._s(e.RuLiZhi.reqLink?"是":"否"))])]),a("tr",[a("td",[e._v("是否含档")]),a("td",[e._v(e._s(e.RuLiZhi.DangAn?"是":"否"))]),a("td",[e._v("特殊事项备注")]),a("td",[e._v(e._s(e.RuLiZhi.Remarks))]),a("td",[e._v("驻场客服")]),a("td",[e._v(e._s(e.UserArray[e.RuLiZhi.OnsiteUserid]))]),a("td",[e._v("订单客服")]),a("td",e._l(e.RuLiZhi.OrderUserids,function(t){return a("span",{key:t.OrderUserid},[e._v(e._s(e.UserArray[t.OrderUserid])+" ")])}),0)]),a("tr",[a("td",[e._v("整体未做入")]),a("td",[e._v(e._s(1==e.RuLiZhi.NotIn?"是":"否"))]),a("td",[e._v("未做入原因")]),a("td",[e._v(e._s(e.RuLiZhi.NotInRemark))])])]],2),a("a-modal",{attrs:{title:"整体未做入",visible:e.showSubLayer,"confirm-loading":e.confirmLoading,centered:"","z-index":2001},on:{ok:e.subOk,cancel:e.subCancel}},[a("a-form",{attrs:{form:e.subForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{rules:e.comFormSubRules.remark}],expression:"['Remark',{rules:comFormSubRules.remark}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1),a("a-modal",{attrs:{title:"取消整体未做入",visible:e.showCancleLayer,"confirm-loading":e.confirmLoading,centered:"","z-index":2001},on:{ok:e.cancleNotInOk,cancel:e.NotInCancel}},[a("a-form",{attrs:{form:e.cancleForm,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:17,offset:1}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remark",{rules:e.comFormCancleRules.remark}],expression:"['Remark',{rules:comFormCancleRules.remark}]"}],staticStyle:{width:"100%"},attrs:{placeholder:""}})],1)],1)],1)],1)])],1)],1)},o=[],i=(a("c5f6"),a("c32d")),s=a.n(i),n=a("b775"),l={props:{RuLiZhi:{type:Object,default:function(){return{}}},UserArray:{type:Object,default:function(){return{}}},cityList:{type:Object,default:function(){return{}}},RuLiZhiStatusObject:{type:Object,default:function(){return{}}},comService:{type:Object,default:function(){return{}}},comServiceCity:{type:Array,default:function(){return[]}},FlowType:{type:Object,default:function(){return{}}},ServiceType:{type:Object,default:function(){return{}}},role:{type:Number,default:0}},data:function(){return{moment:s.a,showSubLayer:!1,confirmLoading:!1,subForm:this.$form.createForm(this),comFormSubRules:{remark:[{required:!0,message:"请输入"}]},showCancleLayer:!1,cancleForm:this.$form.createForm(this),comFormCancleRules:{remark:[{required:!0,message:"请输入"}]},editEmail:!1,email:""}},computed:{},mounted:function(){this.init()},methods:{init:function(){},detail:function(){var e=this;n["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.RuLiZhi.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi.NotIn=t.data.RuLiZhi.NotIn,e.RuLiZhi.NotInRemark=t.data.RuLiZhi.NotInRemark,e.RuLiZhi.rzEmail=t.data.RuLiZhi.rzEmail)}).catch(function(e){console.log(e)})},showSub:function(){this.showSubLayer=!0},subOk:function(){var e=this;e.subForm.validateFields(function(t,a){t||n["a"].post("/api/employee/rulizhi/NotIn",{RLZGUID:e.RuLiZhi.RLZGUID,remark:a.Remark}).then(function(t){0===t.code?(e.$message.success(t.msg),e.subCancel(),e.detail()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},subCancel:function(){this.showSubLayer=!1,this.subForm.resetFields()},cancleNotIn:function(){this.showCancleLayer=!0},cancleNotInOk:function(){var e=this;e.cancleForm.validateFields(function(t,a){t||n["a"].post("/api/employee/rulizhi/CancleNotIn",{RLZGUID:e.RuLiZhi.RLZGUID,remark:a.Remark}).then(function(t){0===t.code?(e.$message.success(t.msg),e.NotInCancel(),e.detail()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})})},NotInCancel:function(){this.showCancleLayer=!1,this.cancleForm.resetFields()},changeEmail:function(){var e=this;e.editEmail=!0,this.$nextTick(function(){e.$refs.emailid.focus()})},blurEmail:function(){var e=this;e.editEmail=!1,n["a"].post("/api/employee/rulizhi/ChangeEmail",{RLZGUID:e.RuLiZhi.RLZGUID,email:e.email}).then(function(t){0===t.code?(e.$message.success(t.msg),e.detail()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})}}},c=l,u=(a("c00f"),a("2877")),m=Object(u["a"])(c,r,o,!1,null,"4caabf84",null);t["default"]=m.exports},"35d0":function(e,t,a){},"3aab":function(e,t,a){"use strict";var r=a("14e2"),o=a.n(r);o.a},"51ba":function(e,t,a){"use strict";var r=a("cdf7"),o=a.n(r);o.a},"607f":function(e,t,a){"use strict";var r=a("d8b0"),o=a.n(r);o.a},"6e12":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("联系记录")]),a("a-table",{attrs:{columns:e.connectColumns,dataSource:e.connectSource,pagination:!1,size:"middle",rowKey:"CRGUID"},scopedSlots:e._u([{key:"ContactClass",fn:function(t,r){return a("span",{},[e._v(e._s(e.ContactClassObject[r.ContactClass]))])}},{key:"ContactType",fn:function(t,r){return a("span",{},[e._v(e._s(e.RSB_ContactTypeObject[r.ContactType]))])}},{key:"Userid",fn:function(t,r){return a("span",{},[e._v(e._s(e.UserArray[r.Userid]))])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.connectList}})],1)],2)],1)},o=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("c32d"),n=a.n(s),l=a("b775");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach(function(t){Object(i["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var m=[{title:"方向",scopedSlots:{customRender:"ContactClass"}},{title:"类别",scopedSlots:{customRender:"ContactType"}},{title:"客服",scopedSlots:{customRender:"Userid"}},{title:"时间",dataIndex:"Contacttime"},{title:"下次联系时间",dataIndex:"NextContacttime"},{title:"内容",dataIndex:"ContactContent"},{title:"情况说明",dataIndex:"transactState"},{title:"办理状态",dataIndex:"explain"}],p={props:{RLZGUID:{type:String,default:""},PGUID:{type:String,default:""},ContactClassObject:{type:Object,default:function(){return{}}},RSB_ContactTypeObject:{type:Object,default:function(){return{}}},UserArray:{type:Object,default:function(){return{}}}},data:function(){return{connectColumns:m,moment:n.a,connectSource:[],formSearch:{pageSize:5,current:1,total:0}}},created:function(){this.init()},methods:{init:function(){var e=this;e.connectList(1)},connectList:function(e){var t=this;t.formSearch.current=e,l["a"].post("/api/Employee/Contact/emList",u({RLZGUID:t.RLZGUID,PGUID:t.PGUID},t.formSearch)).then(function(e){0===e.code&&(t.connectSource=e.data.rows,t.formSearch.total=e.data.count)}).catch(function(e){console.log(e)})},refreshconnectList:function(){var e=this;e.connectList(e.formSearch.current)}}},d=p,f=(a("7d78"),a("2877")),h=Object(f["a"])(d,r,o,!1,null,"51b6b234",null);t["default"]=h.exports},"7d78":function(e,t,a){"use strict";var r=a("df80"),o=a.n(r);o.a},"7fd1":function(e,t,a){},8354:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("医保补缴记录")]),a("a-table",{attrs:{columns:e.yiliaoColumns,dataSource:e.yiliaoSource,pagination:!1,size:"middle",rowKey:"SBBJGUID"},scopedSlots:e._u([{key:"BujiaoType",fn:function(t,r){return a("span",{},[e._v(e._s(e.BujiaoTypeObject[r.BujiaoType]))])}},{key:"ChargeStatus",fn:function(t,r){return a("span",{},[e._v(e._s(0==r.ChargeStatus?"未缴费":"已缴费"))])}},{key:"ChargeuserID",fn:function(t,r){return a("span",{},[e._v(e._s(e.UserArray[r.ChargeuserID]))])}},{key:"ChargeType",fn:function(t,r){return a("span",{},[e._v(e._s(e.ChargeType[r.ChargeType]))])}},{key:"action",fn:function(t,r){return a("span",{},[0!=r.ChargeStatus||"76"!=e.role&&"78"!=e.role?e._e():[a("a",{on:{click:function(t){return e.confirmCharge(r)}}},[e._v("确认收款")]),a("a-divider",{attrs:{type:"vertical"}}),a("a",{on:{click:function(t){return e.deleteCharge(r)}}},[e._v("删除")])]],2)}}])}),a("a-modal",{attrs:{destroyOnClose:!0,visible:e.showCharge,maskClosable:!1,width:400},on:{cancel:e.onCloseCharge,ok:e.submitCharge}},[a("template",{slot:"title"},[e._v("\n        确认收款\n      ")]),a("a-form",{attrs:{form:e.chargeForm}},[a("a-form-item",{attrs:{label:"收费方式",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ChargeType",{rules:e.chargeForm.selectReq}],expression:"['ChargeType',{rules:chargeForm.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.ChargeTypeArray,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1)],2)],1)},o=[],i=(a("c5f6"),a("c32d")),s=a.n(i),n=a("b775"),l=[{title:"基数",dataIndex:"Jishu"},{title:"比例",dataIndex:"Bili"},{title:"手续费",dataIndex:"Shouxufei"},{title:"补缴开始月份",dataIndex:"BeginMonth"},{title:"补缴结束月份",dataIndex:"EndMonth"},{title:"补缴月数",dataIndex:"TotalMonth"},{title:"补缴金额",dataIndex:"Amount"},{title:"收费方式",scopedSlots:{customRender:"ChargeType"}},{title:"补缴类型",scopedSlots:{customRender:"BujiaoType"}},{title:"状态",scopedSlots:{customRender:"ChargeStatus"}},{title:"备注",dataIndex:"Remarks"},{title:"客服",scopedSlots:{customRender:"ChargeuserID"}},{title:"操作",scopedSlots:{customRender:"action"}}],c={props:{RLZGUID:{type:String,default:""},PGUID:{type:String,default:""},BujiaoTypeObject:{type:Object,default:function(){return{}}},RSB_ContactTypeObject:{type:Object,default:function(){return{}}},UserArray:{type:Object,default:function(){return{}}},ChargeType:{type:Object,default:function(){return{}}},role:{type:Number,default:0}},data:function(){return{yiliaoColumns:l,moment:s.a,yiliaoSource:[],showCharge:!1,charge:{SBBJGUID:""},chargeForm:this.$form.createForm(this),chargeFormImportRules:{selectReq:[{required:!0,message:"请选择"}]},ChargeTypeArray:[]}},created:function(){this.init()},methods:{init:function(){var e=this;n["a"].post("/api/Dim/Enum/GetEnum",{Names:["ChargeType"]}).then(function(t){0===t.code?e.ChargeTypeArray=t.data.ChargeType:e.$message.error(t.msg)}).catch(function(e){console.log(e)}),e.yiliaoList()},yiliaoList:function(){var e=this;n["a"].post("/api/Employee/shebao/emYiLiaoBuJiao",{RLZGUID:e.RLZGUID}).then(function(t){0===t.code&&(e.yiliaoSource=t.data)}).catch(function(e){console.log(e)})},confirmCharge:function(e){this.showCharge=!0,this.charge.SBBJGUID=e.SBBJGUID},deleteCharge:function(e){var t=this;this.$confirm({title:"确定删除该条信息?",content:"点击确定删除。",onOk:function(){n["a"].post("/api/Employee/shebao/DeleteShouFei",{SBBJGUID:e.SBBJGUID}).then(function(e){0===e.code?(t.$message.success(e.msg),t.yiliaoList()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},onCloseCharge:function(){this.showCharge=!1},submitCharge:function(){var e=this,t={};e.chargeForm.validateFields(function(a,r){a||(t=r,t.SBBJGUID=e.charge.SBBJGUID,e.$loading.open(),n["a"].post("/api/Employee/shebao/QueRenShouFei",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.yiliaoList(),e.onCloseCharge(),e.chargeForm.resetFields()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})}}},u=c,m=(a("053a"),a("2877")),p=Object(m["a"])(u,r,o,!1,null,"1f4ac580",null);t["default"]=p.exports},"86ba":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("派单信息")]),a("a-table",{attrs:{columns:e.columnsPaidan,dataSource:e.hisrlz,pagination:!1,size:"middle",rowKey:"index"},scopedSlots:e._u([{key:"PaiDanDate",fn:function(t,r){return a("span",{},[e._v(e._s(r.PaiDanDate?e.moment(r.PaiDanDate).format("YYYY-MM-DD"):""))])}},{key:"lzPaiDanDate",fn:function(t,r){return a("span",{},[e._v(e._s(r.lzPaiDanDate?e.moment(r.lzPaiDanDate).format("YYYY-MM-DD"):""))])}},{key:"Status",fn:function(t,r){return a("span",{},[e._v(e._s(e.RuLiZhiStatusObject[r.Status]))])}},{key:"KefuUserid",fn:function(t,r){return a("span",{},[e._v(e._s(e.UserArray[r.KefuUserid]))])}}])})],1)},o=[],i=a("c32d"),s=a.n(i),n=[{title:"状态",scopedSlots:{customRender:"Status"}},{title:"派单日期",scopedSlots:{customRender:"PaiDanDate"}},{title:"派出公司",dataIndex:"GYSName"},{title:"公司",dataIndex:"ComName"},{title:"离职派单日期",scopedSlots:{customRender:"lzPaiDanDate"}},{title:"客服",scopedSlots:{customRender:"KefuUserid"}}],l={props:{hisrlz:{type:Array,default:function(){return[]}},UserArray:{type:Object,default:function(){return{}}},RuLiZhiStatusObject:{type:Object,default:function(){return{}}}},data:function(){return{columnsPaidan:n,moment:s.a}}},c=l,u=(a("51ba"),a("2877")),m=Object(u["a"])(c,r,o,!1,null,"a6246d1e",null);t["default"]=m.exports},"985b":function(e,t,a){},a5c1:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("社保查询信息")]),a("a-form",{attrs:{form:e.comForm}},[a("div",{staticClass:"form-box"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"入职材料",labelCol:{span:2},wrapperCol:{span:16}}},[a("a-row",[a("a-col",{attrs:{span:6}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["rzdjb",{valuePropName:e.rzdjb,initialValue:e.sheBaoDetail.Cailiao.rzdjb}],expression:"['rzdjb',{valuePropName: rzdjb,initialValue:sheBaoDetail.Cailiao.rzdjb}]"}]}),e._v(" 入职登记表和须知\n              ")],1),a("a-col",{attrs:{span:8}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["rzsfzfyj",{valuePropName:e.rzsfzfyj,initialValue:e.sheBaoDetail.Cailiao.rzsfzfyj}],expression:"['rzsfzfyj',{valuePropName: rzsfzfyj,initialValue:sheBaoDetail.Cailiao.rzsfzfyj}]"}]}),e._v(" 身份证复印件\n              ")],1)],1)],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"养老",labelCol:{span:2},wrapperCol:{span:4}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Yanglao",{initialValue:e.sheBaoDetail.Query.Yanglao,rules:e.comFormImportRules.select}],expression:"['Yanglao',{initialValue:sheBaoDetail.Query.Yanglao,rules:comFormImportRules.select}]"}],attrs:{allowClear:!0}},e._l(e.YanglaoStatus,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"失业",labelCol:{span:2},wrapperCol:{span:4}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Shiye",{initialValue:e.sheBaoDetail.Query.Shiye,rules:e.comFormImportRules.select}],expression:"['Shiye',{initialValue:sheBaoDetail.Query.Shiye,rules:comFormImportRules.select}]"}],attrs:{allowClear:!0}},e._l(e.ShiyeStatus,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"医保",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["YibaoStatus",{initialValue:e.sheBaoDetail.Query.YibaoStatus,rules:e.comFormImportRules.select}],expression:"['YibaoStatus',{initialValue:sheBaoDetail.Query.YibaoStatus,rules:comFormImportRules.select}]"}],attrs:{allowClear:!0}},e._l(e.YiliaoStatus,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:7}},[a("a-form-item",{attrs:{label:"参保单位",labelCol:{span:5},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["YibaoCom",{initialValue:e.sheBaoDetail.Query.YibaoCom}],expression:"['YibaoCom',{initialValue:sheBaoDetail.Query.YibaoCom}]"}]})],1)],1),a("a-col",{attrs:{span:7}},[a("a-form-item",{attrs:{label:"最大缴费期",labelCol:{span:6},wrapperCol:{span:14}}},[e.sheBaoDetail.Query.YibaoStopDate?a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["YibaoStopDate"],expression:"['YibaoStopDate']"}],staticStyle:{width:"100%"},attrs:{"default-value":e.moment(e.sheBaoDetail.Query.YibaoStopDate),format:"YYYY-MM"}}):e._e(),""==e.sheBaoDetail.Query.YibaoStopDate?a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["YibaoStopDate"],expression:"['YibaoStopDate']"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM"}}):e._e()],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"公积金",labelCol:{span:2},wrapperCol:{span:4}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["Gongjijin",{initialValue:e.sheBaoDetail.Query.Gongjijin,rules:e.comFormImportRules.select}],expression:"['Gongjijin',{initialValue:sheBaoDetail.Query.Gongjijin,rules:comFormImportRules.select}]"}],attrs:{allowClear:!0}},e._l(e.GongjijinStatus,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"档案",labelCol:{span:2},wrapperCol:{span:4}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Dangan",{initialValue:e.sheBaoDetail.Query.Dangan,rules:e.comFormImportRules.iptInputReq}],expression:"['Dangan',{initialValue:sheBaoDetail.Query.Dangan,rules:comFormImportRules.iptInputReq}]"}]})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"其他",labelCol:{span:2},wrapperCol:{span:4}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{initialValue:e.sheBaoDetail.Query.Remarks,rules:e.comFormImportRules.iptInputReq}],expression:"['Remarks',{initialValue:sheBaoDetail.Query.Remarks,rules:comFormImportRules.iptInputReq}]"}]})],1)],1)],1),a("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"102px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.saveSbSearch}},[e._v("保存")])],1)],1)])],1)},o=[],i=a("b775"),s=a("c32d"),n=a.n(s),l={props:{RLZGUID:{type:String,default:""},YanglaoStatus:{type:Array,default:function(){return{}}},ShiyeStatus:{type:Array,default:function(){return{}}},YiliaoStatus:{type:Array,default:function(){return{}}},GongjijinStatus:{type:Array,default:function(){return{}}}},data:function(){return{comForm:this.$form.createForm(this),comFormImportRules:{iptInputReq:[{required:!1,message:"请输入"}],select:[{required:!1,message:"请选择"}],onsite:[{required:!1,message:"请选择"}]},rzdjb:"unchacked",rzsfzfyj:"unchacked",sheBaoDetail:{Cailiao:{},Query:{}},moment:n.a}},created:function(){this.init()},methods:{init:function(){var e=this;i["a"].post("/api/Employee/SheBaoQuery/Detail",{RLZGUID:e.RLZGUID}).then(function(t){0===t.code&&(e.sheBaoDetail=t.data,1==t.data.Cailiao.rzdjb?e.rzdjb="checked":e.rzdjb="false",1==t.data.Cailiao.rzsfzfyj?e.rzsfzfyj="checked":e.rzsfzfyj="false",null==t.data.Query&&(e.sheBaoDetail.Query={Dangan:null,Gongjijin:"",QueryTime:"",RLZGUID:"",Remarks:null,Shiye:"",Userid:"",Yanglao:"",YibaoCom:"",YibaoStatus:"",YibaoStopDate:""}))}).catch(function(e){console.log(e)})},saveSbSearch:function(){var e=this,t={};e.comForm.validateFields(function(a,r){a||(console.log(r),t=r,t.RLZGUID=e.RLZGUID,e.$loading.open(),i["a"].post("/api/Employee/SheBaoQuery/add",t).then(function(t){e.$loading.close(),0===t.code?e.$message.success(t.msg):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})}}},c=l,u=(a("b0e5"),a("2877")),m=Object(u["a"])(c,r,o,!1,null,"142bae40",null);t["default"]=m.exports},a803:function(e,t,a){"use strict";var r=a("bf89"),o=a.n(r);o.a},ac85:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("新增")]),a("a-form",{attrs:{form:e.connectForm}},[a("div",{staticClass:"form-box"},[a("a-row",[a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"方向",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ContactClass",{rules:e.connectFormImportRules.selectReq}],expression:"['ContactClass',{rules:connectFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.ContactClass,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"类型",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ContactType",{rules:e.connectFormImportRules.selectReq}],expression:"['ContactType',{rules:connectFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.RSB_ContactType,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"办理状态",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["explain",{rules:e.connectFormImportRules.selectReq}],expression:"['explain',{rules:connectFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},[a("a-select-option",{key:"未办理"},[e._v("未办理")]),a("a-select-option",{key:"办理中"},[e._v("办理中")]),a("a-select-option",{key:"办理完"},[e._v("办理完")]),a("a-select-option",{key:"沿用原手续"},[e._v("沿用原手续")]),a("a-select-option",{key:"无对应手续"},[e._v("无对应手续")]),a("a-select-option",{key:"停办"},[e._v("停办")]),a("a-select-option",{key:"批量转移"},[e._v("批量转移")]),a("a-select-option",{key:"无法办理"},[e._v("无法办理")])],1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"情况说明",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["transactState",{rules:e.connectFormImportRules.selectReq}],expression:"['transactState',{rules:connectFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},[a("a-select-option",{key:"电话号码空号"},[e._v("电话号码空号")]),a("a-select-option",{key:"无人接听电话"},[e._v("无人接听电话")]),a("a-select-option",{key:"电话关机"},[e._v("电话关机")]),a("a-select-option",{key:"员工不愿在本地参保"},[e._v("员工不愿在本地参保")]),a("a-select-option",{key:"电话号码不对"},[e._v("电话号码不对")]),a("a-select-option",{key:"员工已离职"},[e._v("员工已离职")]),a("a-select-option",{key:"员工说来办"},[e._v("员工说来办")]),a("a-select-option",{key:"批量转移"},[e._v("批量转移")]),a("a-select-option",{key:"其他"},[e._v("其他")]),a("a-select-option",{key:"停办"},[e._v("停办")])],1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"下次联系时间",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["NextContacttime"],expression:"['NextContacttime']"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{"margin-left":"-15px"},attrs:{label:"联系内容",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["ContactContent",{rules:e.connectFormImportRules.remark}],expression:"['ContactContent',{rules:connectFormImportRules.remark}]"}],attrs:{placeholder:"联系内容",rows:2}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{staticStyle:{"margin-left":"20px"},attrs:{label:"",labelCol:{span:0},wrapperCol:{span:22}}},[a("a-row",[a("a-col",{attrs:{span:14}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["NoReqContact"],expression:"['NoReqContact']"}]}),e._v(" 不需要再联系\n            ")],1),a("a-col",{attrs:{span:10}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["Valid"],expression:"['Valid']"}],attrs:{"default-checked":""}}),e._v(" 联系有效\n            ")],1)],1)],1)],1)],1),a("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"75px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.saveConnect}},[e._v("保存")])],1)],1)])],1)},o=[],i=a("b775"),s={props:{RLZGUID:{type:String,default:""},PGUID:{type:String,default:""},ContactClass:{type:Array,default:function(){return{}}},RSB_ContactType:{type:Array,default:function(){return{}}},connectList:{type:Function,default:null}},data:function(){return{connectForm:this.$form.createForm(this),connectFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}],iptInput:[{required:!1,message:"请输入"}],selectReq:[{required:!0,message:"请选择"}],remark:[{required:!0,message:"请输入联系内容"}]}}},created:function(){this.init()},methods:{init:function(){},saveConnect:function(){var e=this,t={};e.connectForm.validateFields(function(a,r){a||(console.log(r),t=r,t.NextContacttime&&(t.NextContacttime=moment(r.NextContacttime).format("YYYY-MM-DD HH:mm:ss")),void 0==r.Valid&&(t.Valid=!0),void 0==r.NoReqContact&&(t.NoReqContact=!1),t.PGUID=e.PGUID,t.RLZGUID=e.RLZGUID,e.$loading.open(),i["a"].post("/api/Employee/Contact/Add",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.$emit("connectList"),e.connectForm.resetFields()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})}}},n=s,l=(a("3aab"),a("2877")),c=Object(l["a"])(n,r,o,!1,null,"61bf1366",null);t["default"]=c.exports},b0e5:function(e,t,a){"use strict";var r=a("35d0"),o=a.n(r);o.a},bf89:function(e,t,a){},c00f:function(e,t,a){"use strict";var r=a("7fd1"),o=a.n(r);o.a},cdf7:function(e,t,a){},d8b0:function(e,t,a){},df80:function(e,t,a){},f111:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),e.RuLiZhi.FlowType>10?[a("shebao-search",{attrs:{RLZGUID:e.visible.RLZGUID,YanglaoStatus:e.visible.YanglaoStatus,ShiyeStatus:e.visible.ShiyeStatus,YiliaoStatus:e.visible.YiliaoStatus,GongjijinStatus:e.visible.GongjijinStatus}})]:e._e(),a("fuli",{ref:"fuli",attrs:{comService:e.comService,emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,UserArray:e.visible.UserArray,role:e.visible.role,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refreshparent:e.refresh}})],2),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[e.RuLiZhi.FlowType>10?a("connect-add",{attrs:{ContactClass:e.visible.ContactClass,RSB_ContactType:e.visible.RSB_ContactType,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{connectList:e.refreshConnectList}}):e._e(),a("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[e.RuLiZhi.FlowType>10?[a("yibaobujiao-add",{ref:"bjadd",attrs:{BujiaoTypeArray:e.visible.BujiaoTypeArray,BaseMinNum:e.BaseMinNum,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{yiliaoList:e.refreshYiliaoList}})]:e._e(),a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],2)],1)],2)},o=[],i=a("b775"),s=a("c32d"),n=a.n(s),l=a("2d6e"),c=a("86ba"),u=a("a5c1"),m=a("633c"),p=a("ac85"),d=a("6e12"),f=a("102c"),h=a("8354"),v={components:{personBase:l["default"],paidan:c["default"],shebaoSearch:u["default"],fuli:m["default"],connectAdd:p["default"],connectList:d["default"],yibaobujiaoAdd:f["default"],yibaobujiaoList:h["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:n.a,comServiceCity:[],comService:{},BaseMinNum:0,hisrlz:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;i["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.BaseMinNum=t.data.shebaoPolicy.BaseMinNum,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},y=v,b=(a("607f"),a("2877")),C=Object(b["a"])(y,r,o,!1,null,"79c7f713",null);t["default"]=C.exports}}]);