(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f92e07e"],{"3a03":function(e,a,t){"use strict";var l=t("b163"),o=t.n(l);o.a},af75:function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:900,footer:!1},on:{cancel:e.onClose}},[t("template",{slot:"title"},[e._v("\n  "+e._s("1"==e.visible.ModelType?"详情":"审核")+"\n")]),t("a-form",{attrs:{form:e.form}},[t("a-row",{staticStyle:{"margin-bottom":"50px"}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"身份证号",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["身份证号"])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"员工姓名",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail["姓名"])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"邮箱",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.Email)+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"社保卡",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.HaveSBK)+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"公积金",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.HaveGJJ)+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"孕期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.IsYQ)+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"身份证正面",labelCol:{span:9},wrapperCol:{span:15}}},[t("img",{attrs:{src:e.orderDetail.img_zheng,width:"100%",height:"auto"}})])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"身份证反面",labelCol:{span:9},wrapperCol:{span:15}}},[t("img",{attrs:{src:e.orderDetail.img_fan,width:"100%",height:"auto"}})])],1),"1"==e.visible.ModelType?t("a-col",{attrs:{span:24}},[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"状态",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(1==e.orderDetail.Verify?"审核通过":"审核未通过")+"\n           ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{staticStyle:{"margin-left":"20px"},attrs:{label:"原因",labelCol:{span:4},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.orderDetail.VerifyNote)+"\n          ")])],1)],1):e._e(),"2"==e.visible.ModelType?t("a-col",{attrs:{span:24}},[t("a-form-item",{staticStyle:{"margin-left":"20px"},attrs:{label:"原因",labelCol:{span:4},wrapperCol:{span:17}}},[t("a-textarea",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.Remarks,callback:function(a){e.Remarks=a},expression:"Remarks"}})],1)],1):e._e()],1)],1),"2"==e.visible.ModelType?t("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[t("a-button",{on:{click:function(a){return e.handleSubmit("2")}}},[e._v("拒绝")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(a){return e.handleSubmit("1")}}},[e._v("通过")])],1):e._e()],2)},o=[],r=t("b775"),s=t("c32d"),n=t.n(s),i={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null},detail:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:{},sbType:{},ChargingCycle:{},ServiceType:{},ModelType:""},form:this.$form.createForm(this),orderDetail:{},modal:{},moment:n.a,Remarks:""}},watch:{show:function(e,a){var t=this;t.visible=e}},created:function(){var e=this;this.$watch("show",function(a,t){e.visible=a,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail={},this.Remarks="",this.form.resetFields()},init:function(){var e=this;r["a"].post("/api/rsb/Ruzhiinfo/Info",{RLZGUID:e.visible.orderDetail.RLZGUID}).then(function(a){e.$loading.close(),0===a.code&&(e.orderDetail=a.data.info)}).catch(function(a){e.$loading.close(),console.log(a)})},handleSubmit:function(e){var a=this;"2"!=e||a.Remarks?a.$confirm({title:"确认审核"+("1"==e?"通过":"拒绝")+"?",content:"点击确定确认。",onOk:function(){r["a"].post("/api/rsb/Ruzhiinfo/Verify",{RLZGUID:a.visible.orderDetail.RLZGUID,Verify:e,Remarks:a.Remarks}).then(function(t){0===t.code?(a.$message.success(t.msg),a.onClose(),a.refresh(),"1"==e&&a.detail(a.visible.orderDetail)):a.$message.error(t.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}}):a.$message.error("请输入原因！")}}},p=i,c=(t("3a03"),t("2877")),m=Object(c["a"])(p,l,o,!1,null,"9ebf1700",null);a["default"]=m.exports},b163:function(e,a,t){}}]);