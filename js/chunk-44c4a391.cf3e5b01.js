(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44c4a391"],{"311f":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,footer:!1},on:{cancel:e.onClose}},[o("template",{slot:"title"},[e._v("\n  提取\n")]),o("a-form",{attrs:{form:e.form}},[o("a-row",{staticStyle:{"margin-bottom":"50px"}},[o("a-col",{attrs:{span:24}},[o("a-form-item",{staticStyle:{margin:"20px 0 0"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[o("a-textarea",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.Remarks,callback:function(t){e.Remarks=t},expression:"Remarks"}})],1)],1)],1)],1),o("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[o("a-button",{on:{click:function(t){return e.Refuse()}}},[e._v("拒绝")]),o("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return e.Pass()}}},[e._v("提取")])],1)],2)},n=[],a=o("b775"),r=o("c32d"),i=o.n(r),l={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:""},form:this.$form.createForm(this),orderDetail:"",modal:{},dataSource:[],moment:i.a,Remarks:""}},watch:{show:function(e,t){var o=this;o.visible=e}},created:function(){var e=this;this.$watch("show",function(t,o){e.visible=t,e.visible.show})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail="",this.visible.orderDetail="",this.Remarks="",this.form.resetFields()},Pass:function(){var e=this;e.$confirm({title:"确认提取?",content:"点击确定确认。",onOk:function(){a["a"].post("/api/Employee/SheBaoApproval/Pass",{AppGUID:e.visible.orderDetail,Remarks:e.Remarks}).then(function(t){0===t.code?(e.$message.success(t.msg),e.refresh(),e.onClose()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},Refuse:function(){var e=this;e.Remarks?e.$confirm({title:"确认拒绝?",content:"点击确定确认。",onOk:function(){a["a"].post("/api/Employee/SheBaoApproval/Refuse",{AppGUID:e.visible.orderDetail,Remarks:e.Remarks}).then(function(t){0===t.code?(console,e.$message.success(t.msg),e.refresh(),e.onClose()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}}):e.$message.error("请输入原因！")}}},c=l,u=(o("6b8d"),o("2877")),f=Object(u["a"])(c,s,n,!1,null,"4218b505",null);t["default"]=f.exports},"6b8d":function(e,t,o){"use strict";var s=o("ef1c"),n=o.n(s);n.a},ef1c:function(e,t,o){}}]);