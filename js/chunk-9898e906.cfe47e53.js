(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9898e906"],{"193a":function(t,e,i){},"29f4":function(t,e,i){"use strict";var a=i("193a"),r=i.n(a);r.a},e189:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:900,footer:!1},on:{cancel:t.onClose}},[i("template",{slot:"title"},[t._v("\n  "+t._s("1"==t.visible.ModelType?"详情":"审核")+"\n")]),i("div",{staticClass:"tab-title"},[t._v("基本信息")]),i("table",{staticClass:"detail-table",attrs:{border:"1"}},[i("tr",[i("td",[t._v("员工姓名:")]),i("td",[t._v(t._s(t.visible.orderDetail["姓名"]))]),i("td",[t._v("身份证号:")]),i("td",[t._v(t._s(t.visible.orderDetail["身份证号"]))]),i("td",[t._v("参保城市:")]),i("td",[t._v(t._s(t.city[t.visible.orderDetail.CityCode]))])]),i("tr",[i("td",[t._v("离职原因:")]),i("td",[t._v(t._s(t.visible.orderDetail.lzReason))]),i("td",[t._v("是否领取失业金:")]),i("td",[t._v(t._s(t.visible.orderDetail.reqShiyejin))]),i("td",[t._v("派单日期:")]),i("td",[t._v(t._s(t.moment(t.visible.orderDetail.CreateTime).format("YYYY-MM-DD")))])]),i("tr",[i("td",[t._v("公司名称:")]),i("td",{attrs:{colspan:"5"}},[t._v(t._s(t.visible.orderDetail.ComName))])]),i("tr",[i("td",[t._v("备注:")]),i("td",{attrs:{colspan:"5"}},[t._v(t._s(t.visible.orderDetail.Remarks))])]),"0"!=t.visible.orderDetail.ApprovalStatus?i("tr",[i("td",[t._v("审核备注:")]),i("td",{attrs:{colspan:"5"}},[t._v(t._s(t.visible.orderDetail.ApprovalContent))])]):t._e()]),i("a-form",{attrs:{form:t.form}},[i("a-row",{staticStyle:{"margin-bottom":"50px"}},[i("a-col",{attrs:{span:24}},[i("div",{staticClass:"tab-title"},[t._v("参保信息")]),i("table",{staticClass:"detail-table",attrs:{border:"1"}},[t.visible.orderDetail.YangLao?i("tr",[i("td",{attrs:{width:"100px"}},[t._v("社保类型:")]),i("td",[t._v("养老")]),i("td",{attrs:{width:"100px"}},[t._v("截止日期:")]),i("td",[t._v(t._s(t.visible.orderDetail.YangLao))])]):t._e(),t.visible.orderDetail.ShiYe?i("tr",[i("td",[t._v("社保类型:")]),i("td",[t._v("失业")]),i("td",[t._v("截止日期:")]),i("td",[t._v(t._s(t.visible.orderDetail.ShiYe))])]):t._e(),t.visible.orderDetail.GongShang?i("tr",[i("td",[t._v("社保类型:")]),i("td",[t._v("工伤")]),i("td",[t._v("截止日期:")]),i("td",[t._v(t._s(t.visible.orderDetail.GongShang))])]):t._e(),t.visible.orderDetail.YiLiao?i("tr",[i("td",[t._v("社保类型:")]),i("td",[t._v("医疗")]),i("td",[t._v("截止日期:")]),i("td",[t._v(t._s(t.visible.orderDetail.YiLiao))])]):t._e(),t.visible.orderDetail.GongJiJin?i("tr",[i("td",[t._v("社保类型:")]),i("td",[t._v("公积金")]),i("td",[t._v("截止日期:")]),i("td",[t._v(t._s(t.visible.orderDetail.GongJiJin))])]):t._e()])]),"0"==t.visible.orderDetail.ApprovalStatus?i("a-col",{attrs:{span:24}},[i("a-form-item",{staticStyle:{margin:"20px 0 0"},attrs:{label:"原因",labelCol:{span:1},wrapperCol:{span:23}}},[i("a-textarea",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:t.Remarks,callback:function(e){t.Remarks=e},expression:"Remarks"}})],1)],1):t._e()],1)],1),"0"==t.visible.orderDetail.ApprovalStatus?i("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[i("a-button",{on:{click:function(e){return t.handleSubmit("2")}}},[t._v("拒绝")]),i("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(e){return t.handleSubmit("1")}}},[t._v("受理")])],1):t._e()],2)},r=[],s=i("b775"),o=i("c32d"),l=i.n(o),n=[{title:"状态",scopedSlots:{customRender:"BOrderItemStatus"}},{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"基数",dataIndex:"Jishu"},{title:"开始日期",scopedSlots:{customRender:"Startime"}},{title:"比例",dataIndex:"Bili"}],d={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:{},ShebaoOrderItemStatus:{},ShebaoOrderStatus:{},sbType:{},ModelType:""},form:this.$form.createForm(this),orderDetail:{},columns:n,modal:{},dataSource:[],city:{},ShebaoOrderItemStatus:{},ShebaoOrderStatus:{},sbType:{},moment:l.a,Remarks:"",selectedIDs:[]}},watch:{show:function(t,e){var i=this;i.visible=t}},computed:{rowSelection:function(){var t=this;return{onChange:function(e,i){t.selectedIDs=e},getCheckboxProps:function(t){return{props:{disabled:30!=t.BOrderItemStatus}}}}}},created:function(){var t=this;this.$watch("show",function(e,i){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail={},this.Remarks="",this.form.resetFields()},init:function(){var t=this;s["a"].post("/api/Dim/Enum/DimDecode",{Names:["city"]}).then(function(e){0===e.code&&(t.city=e.data.city)}).catch(function(t){console.log(t)}),s["a"].post("/api/ClientSide/Order/Detail",{RLZGUID:t.visible.orderDetail.RLZGUID}).then(function(e){t.$loading.close(),0===e.code&&(t.orderDetail=e.data.person,t.dataSource=e.data.shebao)}).catch(function(e){t.$loading.close(),console.log(e)})},handleSubmit:function(t){var e=this,i="";"2"!=t||e.Remarks?(i="2"==t?"/api/ClientSide/BOrder/RefuseCut":"/api/ClientSide/BOrder/AcceptCut",e.$confirm({title:"确认"+("1"==t?"受理":"拒绝")+"?",content:"点击确定确认。",onOk:function(){s["a"].post(i,{OrderGuid:e.visible.orderDetail.BOrderSubGuid,Remarks:e.Remarks}).then(function(t){0===t.code?(e.$message.success(t.msg),e.onClose(),e.refresh()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},onCancel:function(){}})):e.$message.error("请输入原因！")}}},c=d,v=(i("29f4"),i("2877")),u=Object(v["a"])(c,a,r,!1,null,"73ea4116",null);e["default"]=u.exports}}]);