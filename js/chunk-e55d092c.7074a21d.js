(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e55d092c"],{"10fe":function(a,e,t){"use strict";t.r(e);var l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001,footer:!1},on:{cancel:a.onClose}},[t("template",{slot:"title"},[a._v("\n  详情1\n  ")]),t("a-form",{attrs:{form:a.form}},[t("a-row",[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"员工姓名",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.orderDetail["姓名"])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"公司名称",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.orderDetail.ComName)+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"服务类型",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.visible.ServiceType[a.orderDetail.ServiceType])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"险种",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.visible.sbType[a.orderDetail.sbType])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"工资",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.orderDetail["工资"])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"个人",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.orderDetail["个人金额"])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"企业",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.orderDetail["企业金额"])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"起始月份",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.orderDetail.BeginDate?a.moment(a.orderDetail.BeginDate).format("YYYY-MM"):"")+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"结束月份",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.orderDetail.EndDate?a.moment(a.orderDetail.EndDate).format("YYYY-MM"):"")+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"运行操作月",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.orderDetail.FirstBillMonth?a.moment(a.orderDetail.FirstBillMonth).format("YYYY-MM"):"")+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"收费周期",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.visible.ChargingCycle[a.orderDetail.ChargingCycle])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"收费截至月份",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.orderDetail.BillEndMonth?a.moment(a.orderDetail.BillEndMonth).format("YYYY-MM"):"")+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"申增状态",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.orderDetail["申增状态"]?a.orderDetail["申增状态"]?"成功":"失败":"")+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"申增时间",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.orderDetail["申增时间"])+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"申减状态",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.orderDetail["申减状态"]?a.orderDetail["申减状态"]?"成功":"失败":"")+"\n          ")])],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"申减时间",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.orderDetail["申减时间"])+"\n          ")])],1)],1)],1)],2)},r=[],o=t("b775"),s=t("c32d"),n=t.n(s),i={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:{},sbType:{},ChargingCycle:{},ServiceType:{}},form:this.$form.createForm(this),orderDetail:{},modal:{},moment:n.a}},watch:{show:function(a,e){var t=this;t.visible=a}},created:function(){var a=this;this.$watch("show",function(e,t){a.visible=e,a.visible.show&&a.init()})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail={},this.form.resetFields()},init:function(){var a=this;o["a"].post("/api/Order/Order_RLZ/Detail",{ORLZGUID:a.visible.ORLZGUID}).then(function(e){a.$loading.close(),0===e.code&&(a.orderDetail=e.data.rlz)}).catch(function(e){a.$loading.close(),console.log(e)})}}},p=i,c=(t("60c6"),t("2877")),m=Object(c["a"])(p,l,r,!1,null,"f0abe030",null);e["default"]=m.exports},"60c6":function(a,e,t){"use strict";var l=t("cf8a"),r=t.n(l);r.a},cf8a:function(a,e,t){}}]);