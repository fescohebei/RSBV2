(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-108134d6"],{"61da":function(e,t,a){"use strict";var n=a("fcfd"),i=a.n(n);i.a},"71da":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:500,zIndex:1001,centered:!0},on:{cancel:e.onClose,ok:e.handleSubmit}},[a("template",{slot:"title"},[e._v("\n  减员申请导出(已受理)\n")]),a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"开始时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Begindate",{rules:e.AFormImportRules.iptInput}],expression:"['Begindate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:e.changeTimeBegin}})],1),a("a-form-item",{attrs:{label:"截止时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Enddate",{rules:e.AFormImportRules.iptInput}],expression:"['Enddate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:e.changeTimeEnd}})],1)],1)],2)},i=[],o=a("c32d"),r=a.n(o),s={props:{show:{type:Object,default:function(){return{show:!1}}},Role:{type:String,default:""},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,Role:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},exportData:{Enddate:"",Begindate:""}}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},handleSubmit:function(){var e=this;this.form.validateFields(function(t,a){if(!t){var n={};n.Begindate=e.exportData.Begindate,n.Enddate=e.exportData.Enddate,n.Role=e.visible.Role;var i=document.createElement("a");i.href="/api/ClientSide/BOrder/ExportLiZhi?Begindate="+n.Begindate+"&Enddate="+n.Enddate,i.click(),e.onClose()}})},changeTimeBegin:function(e){this.exportData.Begindate=r()(e).format("YYYY-MM-DD")},changeTimeEnd:function(e){this.exportData.Enddate=r()(e).format("YYYY-MM-DD")}}},l=s,d=(a("61da"),a("2877")),c=Object(d["a"])(l,n,i,!1,null,"c6e10072",null);t["default"]=c.exports},fcfd:function(e,t,a){}}]);