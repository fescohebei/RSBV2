(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-780dfcf3"],{"59d4":function(e,t,s){"use strict";var a=s("d38c"),o=s.n(a);o.a},d38c:function(e,t,s){},f03e:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001},on:{cancel:e.onClose,ok:e.submitSbDate}},[s("template",{slot:"title"},[e._v("\n  社保单减\n")]),s("a-form",{attrs:{form:e.form}},[s("a-row",[s("a-col",{attrs:{span:12}},[s("a-form-item",{attrs:{label:"险种名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.visible.sbDetail.sbType])+"\n          ")])],1),s("a-col",{attrs:{span:12}},[s("a-form-item",{attrs:{label:"开始日期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.moment(e.visible.sbDetail.Startime).format("YYYY-MM-DD"))+"\n          ")])],1),s("a-col",{attrs:{span:12}},[s("a-form-item",{attrs:{label:"工资",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Jishu)+"\n          ")])],1),s("a-col",{attrs:{span:12}},[s("a-form-item",{attrs:{label:"比例",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Bili)+"\n          ")])],1),s("a-col",{attrs:{span:24}},[s("a-form-item",{staticStyle:{"margin-left":"-13px"},attrs:{label:"社保结束月份",labelCol:{span:5},wrapperCol:{span:15}}},[s("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["SBEndDate",{rules:e.AFormImportRules.iptInput}],expression:"['SBEndDate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"}})],1)],1)],1)],1)],2)},o=[],i=s("b775"),r=s("c32d"),l=s.n(r),n={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[],role:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],remark:[{required:!1,message:"请输入"}]},assetsdetail:{},moment:l.a}},watch:{show:function(e,t){var s=this;s.visible=e}},created:function(){var e=this;this.$watch("show",function(t,s){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.AFormImportRules.remark[0].required=!1,this.$parent.refreshfuli()},init:function(){},submitSbDate:function(){var e=this,t={};e.form.validateFields(function(s,a){s||(t=a,t.SBGUID=e.visible.sbDetail.SBGUID,t.SBEndDate=l()(a.SBEndDate).format("YYYY-MM-01"),e.$loading.open(),i["a"].post("/api/Employee/shebao/SheBaoDeleted",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})}}},p=n,c=(s("59d4"),s("2877")),m=Object(c["a"])(p,a,o,!1,null,"39452248",null);t["default"]=m.exports}}]);