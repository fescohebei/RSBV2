(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bdcee"],{"2e27":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:800,footer:!1},on:{cancel:t.onClose}},[a("template",{slot:"title"},[t._v("\n  "+t._s(t.visible.fadetail.GYSName)+"详情\n")]),a("div",[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("div",[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:14}},[a("a-form-item",{attrs:{label:"",labelCol:{span:0},wrapperCol:{span:23,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入公司名称"},model:{value:t.formSearch.ComName,callback:function(e){t.$set(t.formSearch,"ComName",e)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{span:10}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.init}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.anew}},[t._v("未生成重新生成")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"SchdueItemID"},scopedSlots:t._u([{key:"Status",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n        "+t._s(t.visible.Task_Status[o.Status])+"\n      ")])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],2)},r=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("b775"),i=a("c32d"),c=a.n(i);function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,o)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach(function(e){Object(n["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var f=[{title:"状态",scopedSlots:{customRender:"Status"}},{title:"公司名称",dataIndex:"ComName"},{title:"生成时间",dataIndex:"ExecTime"},{title:"备注",dataIndex:"Remarks"}],m={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,fadetail:{},Task_Status:{}},form:this.$form.createForm(this),modal:{},moment:c.a,formSearch:{pageSize:10,current:1,total:0,ComName:""},columns:f,dataSource:[]}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.dataSource=[],this.form.resetFields(),this.refresh()},init:function(){var t=this;t.pagechange(1)},pagechange:function(t){var e=this,a={};e.formSearch.current=t,a=u({},e.formSearch),a.SchdueID=e.visible.fadetail.SchdueID,e.$loading.open(),s["a"].post("/api/company/task_schdue/ItemList",a).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},anew:function(){var t=this;t.$loading.open(),s["a"].post("/api/company/task_schdue/ResetError",{SchdueID:t.visible.fadetail.SchdueID}).then(function(e){0===e.code?(t.$message.success(e.msg),t.init()):(t.$loading.close(),t.$message.error(e.msg))}).catch(function(t){console.log(t)})}}},h=m,p=a("2877"),d=Object(p["a"])(h,o,r,!1,null,null,null);e["default"]=d.exports}}]);