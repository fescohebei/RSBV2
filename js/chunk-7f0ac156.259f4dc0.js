(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f0ac156","chunk-463e3767"],{"32ed":function(a,t,e){"use strict";var o=e("6038"),n=e.n(o);n.a},6038:function(a,t,e){},7544:function(a,t,e){"use strict";var o=e("75d5"),n=e.n(o);n.a},"75d5":function(a,t,e){},c71c:function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1100,footer:!1},on:{cancel:a.onClose}},[e("template",{slot:"title"},[a._v("\n  详情\n")]),e("a-form",{attrs:{form:a.form}},[e("a-row",[e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{label:"姓名",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.baoxiaoDetail.baoxiao["姓名"])+"\n          ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{label:"身份证号",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.baoxiaoDetail.baoxiao["身份证号"])+"\n          ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{label:"手机号码",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.baoxiaoDetail.baoxiao.LinkInfo)+"\n          ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{label:"创建时间",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.baoxiaoDetail.baoxiao.CreateDate)+"\n          ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{label:"发生城市",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.visible.city[a.baoxiaoDetail.baoxiao.EventCityCode])+"\n          ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{label:"付款方向",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n             "+a._s(a.visible.PaymentTo[a.baoxiaoDetail.baoxiao.PaymentTo])+"\n          ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{label:"社保报销类型",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.visible.BXClass[a.baoxiaoDetail.baoxiao.BXClassCode])+"\n          ")])],1),e("a-col",{attrs:{span:6}},[e("a-form-item",{attrs:{label:"报销类型子类",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n             "+a._s(a.visible.BXSubClass[a.baoxiaoDetail.baoxiao.BXSubClassCode])+"\n          ")])],1),e("a-col",{attrs:{span:24}},[e("a-form-item",{staticStyle:{"margin-left":"10px"},attrs:{label:"备注",labelCol:{span:2},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.baoxiaoDetail.baoxiao.Remarks)+"\n          ")])],1),e("a-col",{attrs:{span:24}},[e("a-form-item",{staticStyle:{"margin-left":"10px"},attrs:{label:"客服备注",labelCol:{span:2},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.baoxiaoDetail.baoxiao.KFRemarks)+"\n          ")])],1),e("a-col",{attrs:{span:24}},[e("a-form-item",{staticStyle:{"margin-left":"10px"},attrs:{label:"运行备注",labelCol:{span:2},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.baoxiaoDetail.baoxiao.YXRemarks)+"\n          ")])],1)],1)],1),e("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:a.changeComTab}},[e("a-tab-pane",{key:"1",attrs:{tab:"收款账号信息"}},[e("a-row",[e("a-col",{attrs:{span:2}},[a._v("银行名称：")]),e("a-col",{attrs:{span:3}},[a._v(a._s(a.baoxiaoDetail.bankAccountInfo.BankAccountName))]),e("a-col",{attrs:{span:2}},[a._v("银行账号：")]),e("a-col",{attrs:{span:4}},[a._v(a._s(a.baoxiaoDetail.bankAccountInfo.BankAccount))]),e("a-col",{attrs:{span:2}},[a._v("开户行：")]),e("a-col",{attrs:{span:4}},[a._v(a._s(a.baoxiaoDetail.bankAccountInfo.BankName))]),e("a-col",{attrs:{span:2}},[a._v("账号类型：")]),e("a-col",{attrs:{span:3}},[a._v(a._s(a.visible.PaymentTo[a.baoxiaoDetail.bankAccountInfo.BankAccountType]))])],1)],1),e("a-tab-pane",{key:"2",attrs:{tab:"社保信息"}},[e("a-table",{attrs:{columns:a.columns,dataSource:a.baoxiaoDetail.shebao,pagination:!1,size:"middle",rowKey:"SBBXGuid"},scopedSlots:a._u([{key:"BOrderItemStatus",fn:function(t,o){return e("span",{staticStyle:{"text-align":"right"}},[a._v("\n              "+a._s(a.visible.ShebaoOrderItemStatus[o.BOrderItemStatus])+"\n            ")])}},{key:"sbType",fn:function(t,o){return e("span",{staticStyle:{"text-align":"right"}},[a._v("\n              "+a._s(a.visible.sbType[o.sbType])+"\n            ")])}},{key:"EventCityCode",fn:function(t,o){return e("span",{staticStyle:{"text-align":"right"}},[a._v("\n              "+a._s(a.visible.city[o.EventCityCode])+"\n            ")])}},{key:"Startime",fn:function(t,o){return e("span",{staticStyle:{"text-align":"right"}},[a._v("\n              "+a._s(o.Startime?a.moment(o.Startime).format("YYYY-MM-DD"):"")+"\n            ")])}},{key:"SBEndDate",fn:function(t,o){return e("span",{staticStyle:{"text-align":"right"}},[a._v("\n              "+a._s(o.SBEndDate?a.moment(o.SBEndDate).format("YYYY-MM-DD"):"")+"\n            ")])}}])})],1),e("a-tab-pane",{key:"3",attrs:{tab:"申报记录"}},[e("div",{staticStyle:{"margin-top":"10px"}},[a.baoxiaoDetail.logs.length>0?[e("a-timeline",a._l(a.baoxiaoDetail.logs,function(t){return e("a-timeline-item",{key:t.LogGuid},[e("p",[a._v(a._s(a.visible.BXStatus[t.BXStatus])+"\n                  ")]),e("p",[a._v("备注："+a._s(t.Remarks))])])}),1)]:a._e(),0==a.baoxiaoDetail.logs.length?[e("div",[e("a-row",{staticStyle:{"text-align":"center"}},[e("a-icon",{attrs:{type:"smile"}}),a._v(" 暂无数据")],1)],1)]:a._e()],2)])],1),e("a-divider",{attrs:{orientation:"left"}},[a._v("确认银行账号")]),e("a-form",{staticStyle:{"margin-bottom":"50px"},attrs:{form:a.shForm}},[e("a-form-item",{attrs:{label:"是否修改",labelCol:{span:2},wrapperCol:{span:17}}},[e("a-radio-group",{on:{change:a.acceptanceChange},model:{value:a.refuseAcceptForm.acceptance,callback:function(t){a.$set(a.refuseAcceptForm,"acceptance",t)},expression:"refuseAcceptForm.acceptance"}},[e("a-radio",{attrs:{value:"0"}},[a._v("\n            否\n          ")]),e("a-radio",{attrs:{value:"1"}},[a._v("\n            是\n          ")])],1)],1),"1"==a.sureAccountForm.acceptance?[e("a-form-item",{attrs:{label:"付款方向",labelCol:{span:2},wrapperCol:{span:12}}},[e("a-select",{attrs:{allowClear:!0},on:{change:a.choosePayment}},a._l(a.visible.PaymentToArray,function(t){return e("a-select-option",{key:t.key},[a._v(a._s(t.text))])}),1)],1),e("a-form-item",{attrs:{label:"银行账户",labelCol:{span:2},wrapperCol:{span:12}}},[e("a-row",[e("a-col",{attrs:{span:19}},[e("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},on:{change:a.bankChange},model:{value:a.sureAccountForm.BankAccountInfoGuid,callback:function(t){a.$set(a.sureAccountForm,"BankAccountInfoGuid",t)},expression:"sureAccountForm.BankAccountInfoGuid"}},a._l(a.bankAccountList,function(t){return e("a-select-option",{key:t.BankAccountInfoGuid},[a._v("\n              "+a._s(t.BankAccountName+"-"+t.BankName+"-"+t.BankAccount)+"\n            ")])}),1)],1),e("a-col",{attrs:{span:4,offset:1}},[e("a-button",{attrs:{type:"primary"},on:{click:function(t){return a.newBank()}}},[a._v("新建账户")])],1)],1)],1),e("a-divider",{attrs:{orientation:"left"}},[a._v("更新后账号")]),e("a-row",[e("a-col",{attrs:{span:2}},[a._v("银行名称：")]),e("a-col",{attrs:{span:3}},[a._v(a._s(a.chooseBankAccount.BankAccountName))]),e("a-col",{attrs:{span:2}},[a._v("银行账号：")]),e("a-col",{attrs:{span:4}},[a._v(a._s(a.chooseBankAccount.BankAccount))]),e("a-col",{attrs:{span:2}},[a._v("开户行：")]),e("a-col",{attrs:{span:4}},[a._v(a._s(a.chooseBankAccount.BankName))]),e("a-col",{attrs:{span:2}},[a._v("账号类型：")]),e("a-col",{attrs:{span:3}},[a._v(a._s(a.visible.PaymentTo[a.chooseBankAccount.BankAccountType]))])],1)]:a._e()],2),e("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"center",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[e("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return a.submit("chooseForm")}}},[a._v("确认")])],1),e("modal-newbank",{attrs:{show:a.modal.newbank,refresh:a.getBankList}})],2)},n=[],s=e("bd86"),r=(e("ac6a"),e("b775")),i=e("c32d"),c=e.n(i),l=e("e40d"),u=[{title:"状态",scopedSlots:{customRender:"BOrderItemStatus"}},{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"基数",dataIndex:"Jishu"},{title:"开始日期",scopedSlots:{customRender:"Startime"}},{title:"结束日期",scopedSlots:{customRender:"SBEndDate"}},{title:"比例",dataIndex:"Bili"}],m={components:{ModalNewbank:l["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,Detail:{},sbType:{},BXStatus:{},PaymentTo:{},PaymentToArray:{},city:{},BXClass:{},BXSubClass:{},ShebaoOrderItemStatus:{}},columns:u,dataSourceSb:[],form:this.$form.createForm(this),shForm:this.$form.createForm(this),shenherRules:{Remarks:[{required:!1,message:"请输入拒绝理由",trigger:"blur"}]},Detail:{},modal:{newbank:{show:!1}},moment:c.a,Remarks:"",baoxiaoDetail:{bankAccountInfo:{},baoxiao:{"姓名":"","身份证号":"",LinkInfo:"",CreateDate:"",EventCityCode:"",PaymentTo:"",BXClassCode:"",BXSubClassCode:"",Cailiao:null,Remarks:""},logs:[]},refuseAcceptForm:{acceptance:"0",Remarks:""},chooseAR:{},BXClassCodeSelect:"",BankAccountInfoGuid:"",bankAccountList:[],sureAccountForm:{acceptance:0,PaymentTo:"",BankAccountInfoGuid:""},chooseBankAccount:{}}},watch:{show:function(a,t){var e=this;e.visible=a}},created:function(){var a=this;this.$watch("show",function(t,e){a.visible=t,a.visible.show&&a.init()})},methods:Object(s["a"])({onClose:function(){this.visible.show=!1,this.baoxiaoDetail={bankAccountInfo:{},baoxiao:{"姓名":"","身份证号":"",LinkInfo:"",CreateDate:"",EventCityCode:"",PaymentTo:"",BXClassCode:"",BXSubClassCode:"",Cailiao:null,Remarks:""},logs:[]},this.refuseAcceptForm={acceptance:0,Remarks:""},this.shForm.resetFields()},init:function(){var a=this;r["a"].post("/api/ClientSide/Baoxiao/Detail",{SBBXGuid:a.visible.Detail.SBBXGuid}).then(function(t){a.$loading.close(),0===t.code&&(a.baoxiaoDetail=t.data)}).catch(function(t){a.$loading.close(),console.log(t)})},acceptanceChange:function(a){console.log(a.target.value),this.sureAccountForm.acceptance=a.target.value},submit:function(a){var t=this,e="",o={SBBXGuid:t.visible.Detail.SBBXGuid};e="0"==t.refuseAcceptForm.acceptance?"/api/ClientSide/Baoxiao/Accept":"/api/ClientSide/Baoxiao/Refuse",this.shForm.validateFields(function(a,n){a||(o.Remarks=n.Remarks,r["a"].post(e,o).then(function(a){0===a.code?(t.$message.success(a.msg),t.refresh(),t.onClose()):t.$message.error(a.msg)}).catch(function(a){console.log(a)}))})},canChoose:function(a,t){return"30"==a.BOrderItemStatus},changeComTab:function(){},getBankList:function(a){var t=this;r["a"].post("/api/ClientSide/BankAccountInfo/List",{BankAccountType:a,PGUID:t.baoxiaoDetail.baoxiao.PGUID,COMGUID:t.baoxiaoDetail.baoxiao.COMGUID,pageSize:50,current:1}).then(function(a){var e=a;0===e.code&&(t.bankAccountList=e.data.rows,t.chooseBankAccount={})}).catch(function(a){console.log(a)})},newBank:function(){var a=this;a.modal.newbank={show:!0,PGUID:a.baoxiaoDetail.baoxiao.PGUID,PaymentToArray:a.visible.PaymentToArray}},choosePayment:function(a){var t=this;t.bankAccountList=[],t.sureAccountForm.PaymentTo=a,t.sureAccountForm.BankAccountInfoGuid="",t.shForm.setFieldsValue({BankAccountInfoGuid:""}),t.getBankList(a)},bankChange:function(a){var t=this;t.sureAccountForm.BankAccountInfoGuid=a,t.bankAccountList.forEach(function(e,o){a==e.BankAccountInfoGuid&&(t.chooseBankAccount=e)})}},"submit",function(a){var t=this,e=t.sureAccountForm;if(e.SBBXGuid=t.baoxiaoDetail.baoxiao.SBBXGuid,t.sureAccountForm.acceptance){if(""==t.sureAccountForm.PaymentTo)return void t.$message.error("请选择付款方向！");if(""==t.sureAccountForm.BankAccountInfoGuid)return void t.$message.error("请选择银行账户！");r["a"].post("/api/ClientSide/Baoxiao/Confirm",e).then(function(a){0===a.code?(t.$message.success(a.msg),t.onClose(),t.refresh()):t.$message.error(a.msg)}).catch(function(a){console.log(a)})}else e.BankAccountInfoGuid=t.baoxiaoDetail.baoxiao.BankAccountInfoGuid,e.PaymentTo=t.baoxiaoDetail.baoxiao.PaymentTo,r["a"].post("/api/ClientSide/Baoxiao/Confirm",e).then(function(a){0===a.code?(t.$message.success(a.msg),t.onClose(),t.refresh()):t.$message.error(a.msg)}).catch(function(a){console.log(a)})})},p=m,b=(e("7544"),e("2877")),d=Object(b["a"])(p,o,n,!1,null,"f290670c",null);t["default"]=d.exports},e40d:function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:500,zIndex:1001,footer:!1},on:{cancel:a.onClose}},[e("template",{slot:"title"},[a._v("\n   新建银行账户\n ")]),e("a-form",{attrs:{form:a.form}},[e("div",{staticClass:"form-box"},[e("a-row",[e("a-col",{attrs:{span:24}},[e("a-form-item",{attrs:{label:"账号类型",labelCol:{span:4},wrapperCol:{span:20}}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["BankAccountType",{rules:a.AFormImportRules.BankAccountType}],expression:"['BankAccountType',{rules:AFormImportRules.BankAccountType}]"}],attrs:{allowClear:!0}},a._l(a.visible.PaymentToArray,function(t){return e("a-select-option",{key:t.key},[a._v(a._s(t.text))])}),1)],1)],1),e("a-col",{attrs:{span:24}},[e("a-form-item",{attrs:{label:"账号名称",labelCol:{span:4},wrapperCol:{span:20}}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["BankAccountName",{rules:a.AFormImportRules.BankAccountName}],expression:"['BankAccountName',{rules:AFormImportRules.BankAccountName}]"}],attrs:{placeholder:""}})],1)],1),e("a-col",{attrs:{span:24}},[e("a-form-item",{staticStyle:{"margin-left":"0px"},attrs:{label:"开户行",labelCol:{span:4},wrapperCol:{span:20}}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["BankName",{rules:a.AFormImportRules.BankName}],expression:"['BankName',{rules:AFormImportRules.BankName}]"}],attrs:{placeholder:""}})],1)],1),e("a-col",{attrs:{span:24}},[e("a-form-item",{staticStyle:{"margin-left":"0px"},attrs:{label:"账号",labelCol:{span:4},wrapperCol:{span:20}}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["BankAccount",{rules:a.AFormImportRules.BankAccount}],expression:"['BankAccount',{rules:AFormImportRules.BankAccount}]"}],attrs:{placeholder:""}})],1)],1),e("a-col",{attrs:{span:24}},[e("a-form-item",{staticStyle:{"margin-left":"0px"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[e("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks"],expression:"['Remarks']"}],attrs:{placeholder:""}})],1)],1)],1),e("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px","text-align":"center"}},[e("a-button",{attrs:{type:"primary","html-type":"submit"},on:{click:a.resultSubmit}},[a._v("提交")])],1)],1)])],2)},n=[],s=e("b775"),r={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,PGUID:"",PaymentToArray:{}},form:this.$form.createForm(this),AFormImportRules:{BankAccountType:[{required:!0,message:"请选择"}],BankAccountName:[{required:!0,message:"请输入",trigger:"blur"}],BankName:[{required:!0,message:"请输入",trigger:"blur"}],BankAccount:[{required:!0,message:"请输入",trigger:"blur"}]},newbankForm:{BankAccountName:"",BankName:"",BankAccount:"",Remarks:""}}},watch:{show:function(a,t){var e=this;e.visible=a}},created:function(){this.init()},methods:{init:function(){},resultSubmit:function(){var a=this,t={};a.form.validateFields(function(e,o){e||(t=o,t.PGUID=a.visible.PGUID,t.BankAccountType="10",a.$loading.open(),s["a"].post("/api/ClientSide/BankAccountInfo/Add",t).then(function(t){a.$loading.close(),0===t.code?(a.$message.success(t.msg),a.form.resetFields(),a.onClose(),a.refresh()):a.$message.error(t.msg)}).catch(function(t){a.$loading.close(),console.log(t)}))})},onClose:function(){this.visible.show=!1,this.form.resetFields()}}},i=r,c=(e("32ed"),e("2877")),l=Object(c["a"])(i,o,n,!1,null,"2d9b9130",null);t["default"]=l.exports}}]);