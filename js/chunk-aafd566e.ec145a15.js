(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aafd566e"],{"1d26":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:900,footer:!1},on:{cancel:t.onClose}},[i("template",{slot:"title"},[t._v("\n  "+t._s("1"==t.visible.ModelType?"详情":"审核")+"\n")]),i("div",{staticClass:"tab-title"},[t._v("基本信息")]),i("table",{staticClass:"detail-table",attrs:{border:"1"}},[i("tr",[i("td",[t._v("员工姓名:")]),i("td",[t._v(t._s(t.visible.orderDetail.PName))]),i("td",[t._v("身份证号:")]),i("td",[t._v(t._s(t.visible.orderDetail.IDCard))]),i("td",[t._v("参保城市:")]),i("td",[t._v(t._s(t.city[t.visible.orderDetail.CityCode]))])]),i("tr",[i("td",[t._v("联系方式:")]),i("td",[t._v(t._s(t.visible.orderDetail.Mobile))]),i("td",[t._v("邮箱:")]),i("td",[t._v(t._s(t.visible.orderDetail.Email))]),i("td",[t._v("派单日期:")]),i("td",[t._v(t._s(t.visible.orderDetail.PaiDanDate))])]),i("tr",[i("td",[t._v("公司名称:")]),i("td",{attrs:{colspan:"5"}},[t._v(t._s(t.visible.orderDetail.ComName))])]),i("tr",[i("td",[t._v("备注:")]),i("td",{attrs:{colspan:"5"}},[t._v(t._s(t.visible.orderDetail.Remarks))])]),"0"!=t.visible.orderDetail.ApprovalStatus?i("tr",[i("td",[t._v("审核备注:")]),i("td",{attrs:{colspan:"5"}},[t._v(t._s(t.visible.orderDetail.ApprovalContent))])]):t._e()]),i("a-form",{attrs:{form:t.form}},[i("a-row",{staticStyle:{"margin-bottom":"50px"}},[i("a-col",{attrs:{span:24}},[i("div",{staticClass:"tab-title"},[t._v("参保信息")]),i("table",{staticClass:"detail-table",attrs:{border:"1"}},[t.visible.orderDetail.YangLao?i("tr",[i("td",[t._v("社保类型:")]),i("td",[t._v("养老")]),i("td",[t._v("工资:")]),i("td",[t._v(t._s(t.visible.orderDetail.YangLao))]),i("td",[t._v("开始时间:")]),i("td",[t._v(t._s(t.moment(t.visible.orderDetail.SBBeginDate).format("YYYY-MM-DD")))])]):t._e(),t.visible.orderDetail.ShiYe?i("tr",[i("td",[t._v("社保类型:")]),i("td",[t._v("失业")]),i("td",[t._v("工资:")]),i("td",[t._v(t._s(t.visible.orderDetail.ShiYe))]),i("td",[t._v("开始时间:")]),i("td",[t._v(t._s(t.moment(t.visible.orderDetail.SBBeginDate).format("YYYY-MM-DD")))])]):t._e(),t.visible.orderDetail.GongShang?i("tr",[i("td",[t._v("社保类型:")]),i("td",[t._v("工伤")]),i("td",[t._v("工资:")]),i("td",[t._v(t._s(t.visible.orderDetail.GongShang))]),i("td",[t._v("开始时间:")]),i("td",[t._v(t._s(t.moment(t.visible.orderDetail.SBBeginDate).format("YYYY-MM-DD")))])]):t._e(),t.visible.orderDetail.YiLiao?i("tr",[i("td",[t._v("社保类型:")]),i("td",[t._v("医疗")]),i("td",[t._v("工资:")]),i("td",[t._v(t._s(t.visible.orderDetail.YiLiao))]),i("td",[t._v("开始时间:")]),i("td",[t._v(t._s(t.moment(t.visible.orderDetail.SBBeginDate).format("YYYY-MM-DD")))])]):t._e(),t.visible.orderDetail.GongJiJin?i("tr",[i("td",[t._v("社保类型:")]),i("td",[t._v("公积金")]),i("td",[t._v("工资:")]),i("td",[t._v(t._s(t.visible.orderDetail.GongJiJin)+"("+t._s(t.visible.orderDetail.GJJBili)+")")]),i("td",[t._v("开始时间:")]),i("td",[t._v(t._s(t.moment(t.visible.orderDetail.GJJBeginDate).format("YYYY-MM-DD")))])]):t._e()])]),"0"==t.visible.orderDetail.ApprovalStatus?i("a-col",{attrs:{span:24}},[i("a-form-item",{staticStyle:{margin:"20px 0 0"},attrs:{label:"原因",labelCol:{span:1},wrapperCol:{span:23}}},[i("a-textarea",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:t.Remarks,callback:function(e){t.Remarks=e},expression:"Remarks"}})],1)],1):t._e()],1)],1),"0"==t.visible.orderDetail.ApprovalStatus?i("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[i("a-button",{on:{click:function(e){return t.handleSubmit("2")}}},[t._v("拒绝")]),i("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(e){return t.handleSubmit("1")}}},[t._v("受理")])],1):t._e()],2)},r=[],o=i("b775"),s=i("c32d"),l=i.n(s),d=[{title:"状态",scopedSlots:{customRender:"BOrderItemStatus"}},{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"基数",dataIndex:"Jishu"},{title:"开始日期",scopedSlots:{customRender:"Startime"}},{title:"比例",dataIndex:"Bili"}],n={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:{},ShebaoOrderItemStatus:{},ShebaoOrderStatus:{},sbType:{},ModelType:""},form:this.$form.createForm(this),orderDetail:{},columns:d,modal:{},dataSource:[],city:{},ShebaoOrderItemStatus:{},ShebaoOrderStatus:{},sbType:{},moment:l.a,Remarks:"",selectedIDs:[]}},computed:{rowSelection:function(){var t=this;return{onChange:function(e,i){t.selectedIDs=e},getCheckboxProps:function(t){return{props:{disabled:10!=t.BOrderItemStatus}}}}}},watch:{show:function(t,e){var i=this;i.visible=t}},created:function(){var t=this;this.$watch("show",function(e,i){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail={},this.Remarks="",this.form.resetFields()},init:function(){var t=this;o["a"].post("/api/Dim/Enum/DimDecode",{Names:["city"]}).then(function(e){0===e.code&&(t.city=e.data.city)}).catch(function(t){console.log(t)}),o["a"].post("/api/ClientSide/Order/Detail",{RLZGUID:t.visible.orderDetail.RLZGUID}).then(function(e){t.$loading.close(),0===e.code&&(t.orderDetail=e.data.person,t.dataSource=e.data.shebao)}).catch(function(e){t.$loading.close(),console.log(e)})},handleSubmit:function(t){var e=this,i="";"2"!=t||e.Remarks?(i="2"==t?"/api/ClientSide/BOrder/RefuseIn":"/api/ClientSide/BOrder/AcceptIn",e.$confirm({title:"确认"+("1"==t?"受理":"拒绝")+"?",content:"点击确定确认。",onOk:function(){o["a"].post(i,{OrderGuid:e.visible.orderDetail.BOrderAddGuid,Remarks:e.Remarks}).then(function(t){0===t.code?(e.$message.success(t.msg),e.onClose(),e.refresh()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},onCancel:function(){}})):e.$message.error("请输入原因！")}}},c=n,v=(i("7126"),i("2877")),_=Object(v["a"])(c,a,r,!1,null,"7e3ac111",null);e["default"]=_.exports},"39e4":function(t,e,i){},7126:function(t,e,i){"use strict";var a=i("39e4"),r=i.n(a);r.a}}]);