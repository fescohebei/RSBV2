(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53f00e28"],{"10ad":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001},on:{cancel:e.onClose,ok:e.submitSbDate}},[a("template",{slot:"title"},[e._v("\n  社保信息\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.visible.sbDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.moment(e.visible.sbDetail.Startime).format("YYYY-MM-DD"))+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"基数",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Jishu)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Bili)+"\n          ")])],1),"77"!=e.visible.role?a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"建议开始月份",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["CanStartDate",{rules:e.AFormImportRules.iptInput}],expression:"['CanStartDate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"}})],1)],1):e._e(),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"操作类型",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["DoType",{rules:e.AFormImportRules.iptSelect}],expression:"['DoType',{rules:AFormImportRules.iptSelect}]"}],attrs:{allowClear:!0},on:{change:e.controlChange}},e._l(e.visible.DoTypeArray,function(t){return a("a-select-option",{key:t.key,attrs:{disabled:"30"==t.key}},[e._v(e._s(t.text))])}),1)],1)],1),"77"==e.visible.role?a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"操作月",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["FirstBillMonth",{rules:e.AFormImportRules.iptInput}],expression:"['FirstBillMonth',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"}})],1)],1):e._e(),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{rules:e.AFormImportRules.remark}],expression:"['Remarks',{rules:AFormImportRules.remark}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],2)},s=[],o=a("b775"),l=a("c32d"),i=a.n(l),n={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[],role:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],remark:[{required:!1,message:"请输入"}]},assetsdetail:{},moment:i.a}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.AFormImportRules.remark[0].required=!1,this.$parent.refreshfuli()},init:function(){},submitSbDate:function(){var e=this,t={};e.form.validateFields(function(a,r){if(!a){if(t=r,t.SBGUID=e.visible.sbDetail.SBGUID,t.CanStartDate=i()(r.CanStartDate).format("YYYY-MM-01"),"77"==e.visible.role&&(t.FirstBillMonth=i()(r.FirstBillMonth).format("YYYY-MM-01")),30==r.DoType&&""==r.Remarks)return void e.$message.error("请输入备注！");e.$loading.open(),o["a"].post("/api/Employee/shebao/edit",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)})}})},controlChange:function(e){this.AFormImportRules.remark[0].required=30==e}}},p=n,m=(a("2c90"),a("2877")),c=Object(m["a"])(p,r,s,!1,null,"927668a2",null);t["default"]=c.exports},"2c90":function(e,t,a){"use strict";var r=a("735b"),s=a.n(r);s.a},"735b":function(e,t,a){}}]);