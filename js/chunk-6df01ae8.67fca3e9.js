(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6df01ae8","chunk-638a2ff5"],{"51ac":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:6}},[a("a-col",{attrs:{md:4}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.IDCard,callback:function(e){t.$set(t.formSearch,"IDCard",e)},expression:"formSearch.IDCard"}})],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.initPage}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.exportFlexible}},[t._v("灵活就业缴费导出")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"RLZGUID"},scopedSlots:t._u([{key:"Yanglao",fn:function(e,r){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n                "+t._s(1==r.Yanglao?"是":"否")+"\n              ")])}},{key:"Yiliao",fn:function(e,r){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n                "+t._s(1==r.Yiliao?"是":"否")+"\n              ")])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2),a("export-Flexible",{attrs:{show:t.modal.export}})],1)],1)],1)},n=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),i=a("b775"),s=a("c32d"),c=a.n(s),l=a("6e0c");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach(function(e){Object(o["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var d=[{title:"缴款单号",dataIndex:"out_trade_no"},{title:"姓名",dataIndex:"姓名"},{title:"身份证号",dataIndex:"身份证号"},{title:"参保年度",dataIndex:"参保年度"},{title:"缴费金额",dataIndex:"Amount"},{title:"养老参保",scopedSlots:{customRender:"Yanglao"}},{title:"医疗参保",scopedSlots:{customRender:"Yiliao"}},{title:"缴费时间",dataIndex:"Chargetime"}],f={props:{type:{type:Object,default:function(){return{}}}},components:{exportFlexible:l["default"]},data:function(){return{advanced:!0,columns:d,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,IDCard:""},count:"5",form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],modal:{export:{show:!1}},BXStatus:{},PaymentTo:{},city:{},BXClassCode:{},BXSubClassCode:{},moment:c.a}},created:function(){var t=this;t.init()},methods:{init:function(){this.pagechange(1)},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a={};e.formSearch.current=t,a=p({},e.formSearch),a.BXStatus=10,e.$loading.open(),i["a"].post("/api/RSB/LingHuoJiuYe/PayList",a).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.data.count)}).catch(function(t){e.$loading.close(),console.log(t)})},exportFlexible:function(){console.log(11);this.modal.export={show:!0}}}},m=f,h=a("2877"),g=Object(h["a"])(m,r,n,!1,null,null,null);e["default"]=g.exports},"6e0c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:500,zIndex:1001,centered:!0},on:{cancel:t.onClose,ok:t.handleSubmit}},[a("template",{slot:"title"},[t._v("\n  灵活就业缴费导出\n")]),a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"开始时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["BeginDate",{rules:t.AFormImportRules.iptInput}],expression:"['BeginDate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:t.changeTimeBegin}})],1),a("a-form-item",{attrs:{label:"结束时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["EndDate",{rules:t.AFormImportRules.iptInput}],expression:"['EndDate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:t.changeTimeEnd}})],1)],1)],2)},n=[],o=a("c32d"),i=a.n(o),s={props:{show:{type:Object,default:function(){return{show:!1}}},Role:{type:String,default:""},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,Role:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},exportData:{EndDate:"",BeginDate:""}}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},handleSubmit:function(){var t=this;this.form.validateFields(function(e,a){if(!e){var r={};r.BeginDate=t.exportData.BeginDate,r.EndDate=t.exportData.EndDate;var n=document.createElement("a");n.href="/api/RSB/LingHuoJiuYe/PayListExport?BeginDate="+r.BeginDate+"&EndDate="+r.EndDate,n.click(),t.onClose()}})},changeTimeBegin:function(t){this.exportData.BeginDate=i()(t).format("YYYY-MM-DD")},changeTimeEnd:function(t){this.exportData.EndDate=i()(t).format("YYYY-MM-DD")}}},c=s,l=(a("b41c"),a("2877")),u=Object(l["a"])(c,r,n,!1,null,"f0c4165e",null);e["default"]=u.exports},"88c5":function(t,e,a){},b41c:function(t,e,a){"use strict";var r=a("88c5"),n=a.n(r);n.a}}]);