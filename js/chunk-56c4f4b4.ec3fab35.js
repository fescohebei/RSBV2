(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56c4f4b4"],{4772:function(e,s,a){"use strict";var t=a("db0e"),r=a.n(t);r.a},d837:function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001},on:{cancel:e.onClose,ok:e.submitSbDate}},[a("template",{slot:"title"},[e._v("\n  社保办理受阻\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.visible.sbDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.moment(e.visible.sbDetail.Startime).format("YYYY-MM-DD"))+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"工资",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Jishu)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Bili)+"\n          ")])],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{rules:e.AFormImportRules.remark}],expression:"['Remarks',{rules:AFormImportRules.remark}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],2)},r=[],o=a("b775"),i=a("c32d"),l=a.n(i),n={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[],role:""},form:this.$form.createForm(this),AFormImportRules:{remark:[{required:!0,message:"请输入办理受阻原因"}]},assetsdetail:{},moment:l.a}},watch:{show:function(e,s){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(s,a){e.visible=s,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.AFormImportRules.remark[0].required=!1,this.$parent.refreshfuli()},init:function(){},submitSbDate:function(){var e=this,s={};e.form.validateFields(function(a,t){if(!a){if(s=t,s.SBGUID=e.visible.sbDetail.SBGUID,""==t.Remarks)return void e.$message.error("请输入办理受阻原因！");e.$loading.open(),o["a"].post("/api/Employee/shebao/sbBack",s).then(function(s){e.$loading.close(),0===s.code?(e.$message.success(s.msg),e.onClose()):e.$message.error(s.msg)}).catch(function(s){e.$loading.close(),console.log(s)})}})}}},m=n,c=(a("4772"),a("2877")),p=Object(c["a"])(m,t,r,!1,null,"1e27df2a",null);s["default"]=p.exports},db0e:function(e,s,a){}}]);