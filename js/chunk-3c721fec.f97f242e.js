(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c721fec"],{"10ad":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001},on:{cancel:e.onClose,ok:e.submitSbDate}},[a("template",{slot:"title"},[e._v("\n  社保信息\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail["姓名"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail["身份证号"])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.visible.sbDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.moment(e.visible.sbDetail.Startime).format("YYYY-MM-DD"))+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"工资",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Jishu)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Bili)+"\n          ")])],1),"77"!=e.visible.role?a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"建议开始月份",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["CanStartDate",{initialValue:e.moment(e.visible.sbDetail.Startime),rules:e.AFormImportRules.iptInput}],expression:"['CanStartDate',{initialValue:moment(visible.sbDetail.Startime),rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"}})],1)],1):e._e(),"77"==e.visible.role?a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"16px"},attrs:{label:"社保账户",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["SBAccountID",{rules:e.AFormImportRules.iptSelect}],expression:"['SBAccountID',{rules:AFormImportRules.iptSelect}]"}],attrs:{allowClear:!0}},e._l(e.dataAccount,function(t){return a("a-select-option",{key:t.ID},[e._v(e._s(t.AccountName)+"--"+e._s(t.AccountNumber))])}),1)],1)],1):e._e(),"77"==e.visible.role?a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"实际起做日期",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["ActStartime",{rules:e.AFormImportRules.iptInput}],expression:"['ActStartime',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"}})],1)],1):e._e(),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"操作类型",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["DoType",{rules:e.AFormImportRules.iptSelect}],expression:"['DoType',{rules:AFormImportRules.iptSelect}]"}],attrs:{allowClear:!0},on:{change:e.controlChange}},e._l(e.visible.DoTypeArray,function(t){return a("a-select-option",{key:t.key,attrs:{disabled:"30"==t.key}},[e._v(e._s(t.text))])}),1)],1)],1),"77"==e.visible.role?a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"操作月",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["FirstBillMonth",{rules:e.AFormImportRules.iptInput}],expression:"['FirstBillMonth',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"}})],1)],1):e._e(),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{rules:e.AFormImportRules.remark}],expression:"['Remarks',{rules:AFormImportRules.remark}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],2)},s=[],o=a("b775"),l=a("c32d"),i=a.n(l),n={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[],role:"",type:"",ComServiceGuid:"",RuLiZhi:{CityCode:""}},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],remark:[{required:!1,message:"请输入"}]},assetsdetail:{},moment:i.a,dataAccount:[],accountList:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.AFormImportRules.remark[0].required=!1,this.refresh&&this.refresh(),this.visible.type="",this.dataAccount=[]},init:function(){var e=this;console.log(e.visible),o["a"].post("/api/company/SBAccount/Detail",{ComServiceGuid:e.visible.sbDetail.ComServiceGuid}).then(function(t){0===t.code&&(e.accountList=t.data.accountList,e.dataAccount=e.sbFilter(e.visible.sbDetail.sbType),"77"==e.visible.role&&1==e.dataAccount.length&&e.form.setFieldsValue({SBAccountID:e.dataAccount[0].ID}))}).catch(function(e){console.log(e)})},sbFilter:function(e){var t=this,a=this.accountList.filter(function(a){return a.AccountType==e&&a.CityCode==t.visible.RuLiZhi.CityCode});if(a.length>0)return a},submitSbDate:function(){var e=this,t={};e.form.validateFields(function(a,r){if(!a){if(t=r,t.SBGUID=e.visible.sbDetail.SBGUID,t.CanStartDate=i()(r.CanStartDate).format("YYYY-MM-01"),"77"==e.visible.role&&(t.FirstBillMonth=i()(r.FirstBillMonth).format("YYYY-MM-01")),30==r.DoType&&""==r.Remarks)return void e.$message.error("请输入备注！");(e.visible.type="fail")&&(t.ORLZGUID=e.visible.sbDetail.ORLZGUID),e.$loading.open(),o["a"].post("/api/Employee/shebao/edit",t).then(function(a){e.$loading.close(),0===a.code?(e.$message.success(a.msg),e.onClose()):"该月份已锁定！"===a.msg?(t.ConfirmRemarks=r.Remarks,t.ActStartime=i()(r.CanStartDate).format("YYYY-MM-01"),t.FirstBillMonth=i()(r.FirstBillMonth).format("YYYY-MM-01"),e.$confirm({zIndex:1002,title:"该月份已锁定，是否申请追加此月份?",content:"点击确定确认。",onOk:function(){o["a"].post("/api/Employee/SheBaoApproval/SheBaoApprove",t).then(function(t){0===t.code?(e.$message.success(t.msg),e.refresh(),e.onClose()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})):e.$message.error(a.msg)}).catch(function(t){e.$loading.close(),console.log(t)})}})},controlChange:function(e){this.AFormImportRules.remark[0].required=30==e}}},c=n,p=(a("bc73"),a("2877")),m=Object(p["a"])(c,r,s,!1,null,"347f6c6c",null);t["default"]=m.exports},2002:function(e,t,a){},bc73:function(e,t,a){"use strict";var r=a("2002"),s=a.n(r);s.a}}]);