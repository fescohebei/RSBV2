(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2526d3a9","chunk-9ca4bcc0","chunk-425eb973","chunk-21fdb3d4","chunk-3853c5dc","chunk-59291e46"],{2269:function(e,t,a){"use strict";var o=a("b2a7"),r=a.n(o);r.a},"31a1":function(e,t,a){"use strict";var o=a("dc44"),r=a.n(o);r.a},"3ff6":function(e,t,a){"use strict";var o=a("926d"),r=a.n(o);r.a},4778:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n   新建联系记录\n ")]),a("a-form",{attrs:{form:e.connectForm}},[a("div",{staticClass:"form-box"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"下次联系时间",labelCol:{span:4},wrapperCol:{span:8}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["NextContacttime"],expression:"['NextContacttime']"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"0px"},attrs:{label:"联系内容",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["ContactContent",{rules:e.connectFormImportRules.remark}],expression:"['ContactContent',{rules:connectFormImportRules.remark}]"}],attrs:{placeholder:"联系内容",rows:4}})],1)],1)],1),a("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"122px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.saveLock}},[e._v("确定")])],1)],1)])],2)},r=[],i=a("b775"),s={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,sbTypeList:[]},connectForm:this.$form.createForm(this),connectFormImportRules:{remark:[{required:!0,message:"请输入联系内容"}]},ComBranch:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){this.init()},methods:{init:function(){},saveLock:function(){var e=this,t={};e.connectForm.validateFields(function(a,o){a||(t=o,t.PGUID=e.visible.orderDetail.PGUID,e.$loading.open(),i["a"].post("/api/Employee/Contact/FlexibleAdd",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose(),e.refresh()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})},onClose:function(){this.visible.show=!1,this.connectForm.resetFields()}}},l=s,n=(a("31a1"),a("2877")),c=Object(n["a"])(l,o,r,!1,null,"41bf2918",null);t["default"]=c.exports},"4d7c":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1e3,zIndex:1001,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n   新员工录入1\n ")]),a("a-form",{attrs:{form:e.connectForm}},[a("div",{staticClass:"form-box"},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Name",{rules:e.FormImportRules.Name,init:e.init}],expression:"['Name',{rules:FormImportRules.Name,init}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["IdCard",{rules:e.FormImportRules.IdCard}],expression:"['IdCard',{rules:FormImportRules.IdCard}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"手机号",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Mobile",{rules:e.FormImportRules.Mobile}],expression:"['Mobile',{rules:FormImportRules.Mobile}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"首次申报",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["FirstBillYear",{rules:e.FormImportRules.FirstBillYear,initialValue:e.moment(new Date).format("YYYY")}],expression:"['FirstBillYear',{rules:FormImportRules.FirstBillYear,initialValue:moment(new Date()).format('YYYY') }]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"是否已收款",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["IsPay",{rules:e.FormImportRules.ylDate}],expression:"['IsPay',{rules:FormImportRules.ylDate}]"}],attrs:{allowClear:!0}},[a("a-select-option",{key:"1"},[e._v("是")]),a("a-select-option",{key:"0"},[e._v("否")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"邮箱",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Email"],expression:"['Email']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"紧急联系人",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["LinkName"],expression:"['LinkName']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"联系人手机号",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["LinkMobile "],expression:"['LinkMobile ']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"户籍所在地",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Huji"],expression:"['Huji']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"邮寄地址",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Address"],expression:"['Address']"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"险种",labelCol:{span:3},wrapperCol:{span:18}}},[a("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["ServiceList",{initialValue:[40]}],expression:"['ServiceList',{ initialValue: [40] }]"}],staticStyle:{width:"100%"},on:{change:e.changeSbType}},[a("a-row",[a("a-col",{attrs:{span:4}},[a("a-checkbox",{attrs:{value:40}},[e._v("\n                    医疗\n                     ")])],1),a("a-col",{attrs:{span:4}},[a("a-checkbox",{attrs:{value:10}},[e._v("养老")])],1)],1)],1)],1)],1),e.showYiLiao?a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"医疗补缴",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["YiliaoBeginMonth",{rules:e.FormImportRules.ylDate}],expression:"['YiliaoBeginMonth',{rules:FormImportRules.ylDate}]"}],attrs:{allowClear:!0}},[a("a-select-option",{key:"按政策补缴"},[e._v("按政策补缴")]),a("a-select-option",{key:"不补缴"},[e._v("不补缴")])],1)],1)],1):e._e(),e.showYangLao?a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"养老开始月份",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["YangLaoBeginMonth",{rules:e.FormImportRules.ylDate}],expression:"['YangLaoBeginMonth',{rules:FormImportRules.ylDate}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD"}})],1)],1):e._e()],1),a("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"122px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.saveLock}},[e._v("确定")])],1)],1)])],2)},r=[],i=a("b775"),s=a("c32d"),l=a.n(s),n={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{moment:l.a,visible:{show:!1,orderDetail:{}},connectForm:this.$form.createForm(this),FormImportRules:{Name:[{required:!0,message:"请输入姓名"}],Mobile:[{required:!0,message:"请输入手机号"}],FirstBillYear:[{required:!0,message:"请输入年份"}],IdCard:[{required:!0,message:"请输入身份证号"}],ylDate:[{required:!0,message:"请选择"}]},ComBranch:[],showYiLiao:!0,showYangLao:!1}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){this.init()},methods:{init:function(){},saveLock:function(){var e=this,t={};e.connectForm.validateFields(function(a,o){a||(t=o,t.PGUID=e.visible.orderDetail.PGUID,t.YangLao=e.showYangLao,t.Yiliao=e.showYiLiao,e.$loading.open(),i["a"].post("/api/rsb/Flexible/FlexibleAdd",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose(),e.refresh()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})},onClose:function(){this.visible.show=!1,this.connectForm.resetFields(),this.showYiLiao=!0,this.showYangLao=!1},changeSbType:function(e){console.log(e.indexOf(40)),-1!=e.indexOf(40)?this.showYiLiao=!0:this.showYiLiao=!1,-1!=e.indexOf(10)?this.showYangLao=!0:this.showYangLao=!1}}},c=n,d=(a("6a52"),a("2877")),u=Object(d["a"])(c,o,r,!1,null,"5027b566",null);t["default"]=u.exports},"4f57":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:500,zIndex:1001,centered:!0},on:{cancel:e.onClose,ok:e.handleSubmit}},[a("template",{slot:"title"},[e._v("\n  审核通过导出\n")]),a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"开始时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Begindate",{rules:e.AFormImportRules.iptInput}],expression:"['Begindate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:e.changeTimeBegin}})],1),a("a-form-item",{attrs:{label:"结束时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Enddate",{rules:e.AFormImportRules.iptInput}],expression:"['Enddate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:e.changeTimeEnd}})],1)],1)],2)},r=[],i=a("c32d"),s=a.n(i),l={props:{show:{type:Object,default:function(){return{show:!1}}},Role:{type:String,default:""},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,Role:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},exportData:{Enddate:"",Begindate:""}}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},handleSubmit:function(){var e=this;this.form.validateFields(function(t,a){if(!t){var o={};o.Begindate=e.exportData.Begindate,o.Enddate=e.exportData.Enddate;var r=document.createElement("a");r.href="/api/rsb/Flexible/ExportList?Begindate="+o.Begindate+"&Enddate="+o.Enddate,r.click(),e.onClose()}})},changeTimeBegin:function(e){this.exportData.Begindate=s()(e).format("YYYY-MM-DD")},changeTimeEnd:function(e){this.exportData.Enddate=s()(e).format("YYYY-MM-DD")}}},n=l,c=(a("9806"),a("2877")),d=Object(c["a"])(n,o,r,!1,null,"2733f28f",null);t["default"]=d.exports},"6a52":function(e,t,a){"use strict";var o=a("9d14"),r=a.n(o);r.a},"6fc2":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1100,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  "+e._s("1"==e.visible.ModelType?"详情":"审核")+"\n")]),a("div",{staticClass:"tab-title"},[e._v("基本信息")]),a("table",{staticClass:"detail-table",attrs:{border:"1"}},[a("tr",[a("td",[e._v("员工姓名:")]),a("td",[e._v(e._s(e.orderDetail["姓名"]))]),a("td",[e._v("身份证号:")]),a("td",[e._v(e._s(e.orderDetail["身份证号"]))]),a("td",[e._v("户籍:")]),a("td",[e._v(e._s(e.orderDetail.Huji))]),a("td",[e._v("邮寄地址:")]),a("td",[e._v(e._s(e.orderDetail.Address))])]),a("tr",[a("td",[e._v("手机号码:")]),a("td",[e._v(e._s(e.orderDetail.Mobile))]),a("td",[e._v("提交时间:")]),a("td",[e._v("\n          "+e._s(e.orderDetail.CreateTime)+"\n        ")]),a("td",[e._v("首次操作年:")]),a("td",[e._v(e._s(e.orderDetail.FirstBillYear))]),a("td",[e._v("收费至年:")]),a("td",[e._v(e._s(e.orderDetail.EndBillYear))])]),a("tr",[a("td",[e._v("审核时间:")]),a("td",[e._v(e._s(e.orderDetail.VerifyTime))]),a("td",[e._v("审核人:")]),a("td",[e._v("\n          "+e._s(e.orderDetail.VerifyUserID)+"\n        ")]),a("td",[e._v("审核状态:")]),a("td",[e._v(e._s(e.orderDetail.StatusStr))]),a("td",[e._v("审核备注")]),a("td",[e._v(e._s(e.orderDetail.VerifyReason))])]),a("tr",[a("td",[e._v("身份证正面:")]),a("td",{attrs:{colspan:"3"}},[null!=e.orderDetail.img_zheng?a("img",{attrs:{src:e.orderDetail.img_zhengUrl,width:"150px",height:"auto"}}):e._e()]),a("td",[e._v("身份证反面:")]),a("td",{attrs:{colspan:"3"}},[null!=e.orderDetail.img_fan?a("img",{attrs:{src:e.orderDetail.img_fanUrl,width:"150px",height:"auto"}}):e._e()])])]),a("a-form",{attrs:{form:e.form}},[a("a-row",{staticStyle:{"margin-bottom":"50px"}},[a("a-col",{attrs:{span:24}},[a("div",{staticClass:"tab-title"},[e._v("社保记录")]),a("a-table",{attrs:{columns:e.sbcolumns,dataSource:e.sbdataSource,pagination:!1,rowKey:"FlexibleServiceGuid",size:"middle"}})],1),a("a-col",{attrs:{span:24}},[a("div",{staticClass:"tab-title"},[e._v("联系记录"),a("a-button",{staticStyle:{"margin-left":"10px",float:"right"},attrs:{type:"primary",size:"small"},on:{click:e.XinJian}},[e._v("新建联系记录")])],1),a("a-table",{attrs:{columns:e.Contactcolumns,dataSource:e.ContactdataSource,pagination:!1,rowKey:"index",size:"middle"}})],1),a("a-col",{attrs:{span:24}},[a("div",{staticClass:"tab-title"},[e._v("缴费记录")]),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"index",size:"middle"},scopedSlots:e._u([{key:"action",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[0==o.ChargeStatus?a("a",{on:{click:function(t){return e.hasPay(o)}}},[e._v("收款")]):e._e()])}}])})],1),"2"==e.visible.ModelType?a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{margin:"20px 0 0"},attrs:{label:"原因",labelCol:{span:1},wrapperCol:{span:23}}},[a("a-textarea",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.Remarks,callback:function(t){e.Remarks=t},expression:"Remarks"}})],1)],1):e._e()],1)],1),"2"==e.visible.ModelType?a("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:function(t){return e.FlexibleRefuse()}}},[e._v("拒绝")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return e.handleSubmit("1")}}},[e._v("通过")])],1):e._e(),a("modal-connect-add",{attrs:{show:e.modal.detail,refresh:e.init}})],2)},r=[],i=a("b775"),s=a("4778"),l=a("c32d"),n=a.n(l),c=[{title:"缴费状态",dataIndex:"ChargeStatusStr"},{title:"缴费时间",dataIndex:"Chargetime"},{title:"参保年度",dataIndex:"参保年度"},{title:"缴费金额",dataIndex:"Amount"},{title:"订单号",dataIndex:"out_trade_no"},{title:"退费时间",dataIndex:"RefundTime"},{title:"创建时间",dataIndex:"Createtime"},{title:"备注信息",dataIndex:"Remarks"},{title:"操作",scopedSlots:{customRender:"action"}}],d=[{title:"类型",dataIndex:"sbtypeStr"},{title:"增员状态",dataIndex:"AddStatusStr"},{title:"开始时间",dataIndex:"BeginMonth"},{title:"增员月份",dataIndex:"AddSBDate"},{title:"增员备注",dataIndex:"AddRemark"},{title:"减员状态",dataIndex:"SubStatusStr"},{title:"减员月份",dataIndex:"SubSBDate"},{title:"减员备注",dataIndex:"SubRemark"},{title:"社保账号",dataIndex:"SBAccount"}],u=[{title:"时间",dataIndex:"Contacttime"},{title:"下次联系时间",dataIndex:"NextContacttime"},{title:"内容",dataIndex:"ContactContent"}],m={components:{ModalConnectAdd:s["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:{},sbType:{},ChargingCycle:{},ServiceType:{},ModelType:""},form:this.$form.createForm(this),orderDetail:{},columns:c,sbcolumns:d,Contactcolumns:u,modal:{detail:{show:!1}},dataSource:[],sbdataSource:[],ContactdataSource:[],moment:n.a,Remarks:""}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&(e.init(),e.pagechange())})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail={},this.Remarks="",this.form.resetFields()},init:function(){var e=this;i["a"].post("/api/rsb/Flexible/Info",{guid:e.visible.orderDetail.FlexibleGuid}).then(function(t){e.$loading.close(),0===t.code&&(e.orderDetail=t.data.info,e.sbdataSource=t.data.sbService,e.ContactdataSource=t.data.contactList)}).catch(function(t){e.$loading.close(),console.log(t)})},handleSubmit:function(e){var t=this;"2"!=e||t.Remarks?t.$confirm({title:"确认审核"+("1"==e?"通过":"拒绝")+"?",content:"点击确定确认。",onOk:function(){i["a"].post("/api/rsb/Flexible/FlexiblePass",{FlexibleGuid:t.visible.orderDetail.FlexibleGuid,Verify:e,Reason:t.Remarks}).then(function(e){0===e.code?(t.$message.success(e.msg),t.refresh(),t.onClose()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}}):t.$message.error("请输入原因！")},FlexibleRefuse:function(){var e=this;e.Remarks?e.$confirm({title:"确认审核拒绝?",content:"点击确定确认。",onOk:function(){i["a"].post("/api/rsb/Flexible/FlexibleRefuse",{FlexibleGuid:e.visible.orderDetail.FlexibleGuid,Reason:e.Remarks}).then(function(t){0===t.code?(console,e.$message.success(t.msg),e.refresh(),e.onClose()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}}):e.$message.error("请输入原因！")},pagechange:function(){var e=this,t={FlexibleGuid:e.visible.orderDetail.FlexibleGuid};e.$loading.open(),i["a"].post("/api/rsb/Flexible/GetFlexiblePayList",t).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows)}).catch(function(t){e.$loading.close(),console.log(t)})},XinJian:function(){this.modal.detail={show:!0,orderDetail:this.visible.orderDetail}},hasPay:function(e){var t=this;this.$confirm({title:"确认已收款?",content:"",onOk:function(){i["a"].post("/api/rsb/Flexible/ChargeFlexiblePay",{FlexiblePayGuid:e.FlexiblePayGuid}).then(function(e){0===e.code?(t.$message.success(e.msg),t.pagechange(1)):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})}}},p=m,f=(a("2269"),a("2877")),h=Object(f["a"])(p,o,r,!1,null,"4d60c5ed",null);t["default"]=h.exports},"844d":function(e,t,a){},"85c6":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:400,zIndex:1001,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n   锁定\n   ")]),a("a-form",{attrs:{form:e.connectForm}},[a("div",{staticClass:"form-box"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"月份",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["nianyue",{rules:e.connectFormImportRules.selectReq}],expression:"['nianyue',{rules:connectFormImportRules.selectReq}]"}],staticStyle:{width:"100%"},attrs:{allowClear:!1,placeholder:"请选择月份"}})],1)],1)],1),a("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"122px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.saveLock}},[e._v("确定")])],1)],1)])],2)},r=[],i=a("b775"),s={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:{}},connectForm:this.$form.createForm(this),connectFormImportRules:{selectReq:[{required:!0,message:"请选择"}]},ComBranch:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){this.init()},methods:{init:function(){},saveLock:function(){var e=this,t={};e.connectForm.validateFields(function(a,o){a||(t=o,t.FlexibleGuid=e.visible.orderDetail.FlexibleGuid,t.nianyue=moment(o.nianyue).format("YYYYMM"),e.$loading.open(),i["a"].post("/api/rsb/Flexible/FlexibleSub",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose(),e.refresh()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})},onClose:function(){this.visible.show=!1,this.connectForm.resetFields()}}},l=s,n=(a("3ff6"),a("2877")),c=Object(n["a"])(l,o,r,!1,null,"25664890",null);t["default"]=c.exports},"926d":function(e,t,a){},9806:function(e,t,a){"use strict";var o=a("844d"),r=a.n(o);r.a},"9d14":function(e,t,a){},b2a7:function(e,t,a){},dc44:function(e,t,a){},e901:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:6}},[a("a-col",{attrs:{md:4}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(t){e.$set(e.formSearch,"emName",t)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{md:4}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(t){e.$set(e.formSearch,"emCardID",t)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{md:4}},[a("a-form-item",{attrs:{label:"审核状态",labelCol:{span:10},wrapperCol:{span:13}}},[a("a-select",{attrs:{allowClear:!1},model:{value:e.formSearch.FlexibleStatus,callback:function(t){e.$set(e.formSearch,"FlexibleStatus",t)},expression:"formSearch.FlexibleStatus"}},[a("a-select-option",{key:""},[e._v("全部")]),e._l(e.FlexibleStatusList,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])})],2)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.adddetail}},[e._v("新建")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.exportQgbill}},[e._v("导出")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"FlexibleGuid"},scopedSlots:e._u([{key:"action",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[0==o.Status?a("a",{on:{click:function(t){return e.detail(o,"2")}}},[e._v("审核")]):e._e(),1==o.Status?a("a",{on:{click:function(t){return e.subdetail(o)}}},[e._v("派减")]):e._e(),0==o.Status||1==o.Status?a("a-divider",{attrs:{type:"vertical"}}):e._e(),a("a",{on:{click:function(t){return e.detail(o,"1")}}},[e._v("查看")])],1)}},{key:"StatusStr",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[0==o.Status?a("span",[e._v(e._s(o.StatusStr))]):e._e(),1==o.Status?a("span",{staticStyle:{color:"green"}},[e._v(e._s(o.StatusStr))]):e._e(),2==o.Status?a("span",{staticStyle:{color:"red"}},[e._v(e._s(o.StatusStr))]):e._e(),3==o.Status?a("span",{staticStyle:{color:"red"}},[e._v(e._s(o.StatusStr))]):e._e()])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1),a("modal-detail",{attrs:{show:e.modal.detail,refresh:e.pagerefresh}}),a("modal-add",{attrs:{show:e.modal.adddetail,refresh:e.pagerefresh}}),a("modal-sub",{attrs:{show:e.modal.subdetail,refresh:e.pagerefresh}}),a("export-bill",{attrs:{show:e.modal.exportBill}})],1)],1)},r=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("b775"),l=a("6fc2"),n=a("4d7c"),c=a("85c6"),d=a("4f57");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach(function(t){Object(i["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var p=[{title:"状态",scopedSlots:{customRender:"StatusStr"}},{title:"姓名",dataIndex:"姓名"},{title:"身份证号",dataIndex:"身份证号"},{title:"提交时间",dataIndex:"Subtime"},{title:"电话",dataIndex:"Mobile"},{title:"是否做养老",dataIndex:"IsYanglao"},{title:"是否做医疗",dataIndex:"IsYiliao"},{title:"是否收款",dataIndex:"ChargeStatusStr"},{title:"操作",scopedSlots:{customRender:"action"},align:"center"}],f={components:{ModalDetail:l["default"],ModalAdd:n["default"],ModalSub:c["default"],exportBill:d["default"]},props:{type:{type:Object,default:function(){return{}}}},data:function(){return{advanced:!0,columns:p,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,emCardID:"",FlexibleStatus:"",emName:""},count:"5",form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],FlexibleStatusList:[],modal:{detail:{show:!1},adddetail:{show:!1},subdetail:{show:!1},exportBill:{show:!1}}}},created:function(){var e=this;e.init()},activated:function(){console.log("刷新");var e=this;e.pagechange(1)},methods:{init:function(){var e=this;s["a"].post("/api/Dim/Enum/GetEnum",{Names:["FlexibleStatus"]}).then(function(t){0===t.code?(e.FlexibleStatusList=t.data.FlexibleStatus,e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=m({},t.formSearch),t.$loading.open(),s["a"].post("/api/rsb/Flexible/List",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},detail:function(e,t){this.modal.detail={show:!0,orderDetail:e,ModelType:t}},adddetail:function(e){this.modal.adddetail={show:!0,orderDetail:e}},subdetail:function(e){this.modal.subdetail={show:!0,orderDetail:e}},exportQgbill:function(){this.modal.exportBill={show:!0}}}},h=f,b=a("2877"),v=Object(b["a"])(h,o,r,!1,null,null,null);t["default"]=v.exports}}]);