(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63564024"],{"67d8":function(e,t,o){"use strict";var s=o("f9f3"),n=o.n(s);n.a},a1cc:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:400,zIndex:1001,footer:!1},on:{cancel:e.onClose}},[o("template",{slot:"title"},[e._v("\n   锁定\n   ")]),o("a-form",{attrs:{form:e.connectForm}},[o("div",{staticClass:"form-box"},[o("a-row",[o("a-col",{attrs:{span:24}},[o("a-form-item",{attrs:{label:"社保类型",labelCol:{span:6},wrapperCol:{span:18}}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sbtype",{rules:e.connectFormImportRules.selectReq}],expression:"['sbtype',{rules:connectFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.visible.sbTypeList,function(t){return o("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),o("a-col",{attrs:{span:24}},[o("a-form-item",{attrs:{label:"月份",labelCol:{span:6},wrapperCol:{span:18}}},[o("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["nianyue",{rules:e.connectFormImportRules.selectReq}],expression:"['nianyue',{rules:connectFormImportRules.selectReq}]"}],staticStyle:{width:"100%"},attrs:{allowClear:!1,placeholder:"请选择月份"}})],1)],1)],1),o("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px"}},[o("a-button",{staticStyle:{"margin-left":"122px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.saveLock}},[e._v("确定")])],1)],1)])],2)},n=[],r=o("b775"),a={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,sbTypeList:[]},connectForm:this.$form.createForm(this),connectFormImportRules:{selectReq:[{required:!0,message:"请选择"}]},ComBranch:[]}},watch:{show:function(e,t){var o=this;o.visible=e}},created:function(){this.init()},methods:{init:function(){},saveLock:function(){var e=this,t={};e.connectForm.validateFields(function(o,s){o||(t=s,t.nianyue=moment(s.nianyue).format("YYYYMM"),e.$loading.open(),r["a"].post("/api/order/order_rlz/FrozenDaKu",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose(),e.refresh()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})},onClose:function(){this.visible.show=!1,this.connectForm.resetFields()}}},l=a,c=(o("67d8"),o("2877")),i=Object(c["a"])(l,s,n,!1,null,"8dbe1c52",null);t["default"]=i.exports},f9f3:function(e,t,o){}}]);