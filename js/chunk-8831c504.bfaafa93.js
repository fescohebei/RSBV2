(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8831c504"],{"04d0":function(t,e,a){},"4b20":function(t,e,a){"use strict";var i=a("04d0"),s=a.n(i);s.a},"89b0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1100,centered:"",zIndex:1001},on:{cancel:t.onClose,ok:t.submitSbDate}},[a("template",{slot:"title"},[t._v("\n  确认\n")]),a("a-form",{attrs:{form:t.form}},[a("a-row",[a("a-col",{attrs:{span:5}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:5},wrapperCol:{span:15}}},[t._v("\n            "+t._s(t.sbDetail[0]["姓名"])+"\n          ")])],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:15}}},[t._v("\n            "+t._s(t.sbDetail[0]["身份证号"])+"\n          ")])],1),a("a-col",{attrs:{span:13}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:3},wrapperCol:{span:19}}},[t._v("\n            "+t._s(t.sbDetail[0].ComName)+"\n          ")])],1),t._l(t.sbDetail,function(e,i){return[e.Done&&null==e.Confirm?a("div",{key:i},[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"",labelCol:{span:0},wrapperCol:{span:15}}},[a("a-checkbox",{attrs:{checked:e.checked},on:{change:function(e){return t.handleChange(i)}}},[t._v("\n              "+t._s(t.visible.sbType[e.sbType])+" "),a("span",{staticStyle:{color:"red"}},[t._v(t._s(1==e.IsApproval?"[审批中]":""))])])],1)],1),a("a-col",{attrs:{span:24}},[a("table",{staticClass:"mytable",attrs:{border:"1"}},[a("thead",[a("tr",[a("th",[t._v("工资")]),a("th",[t._v("比例")]),a("th",[t._v("可以开始月份")]),a("th",[t._v("派单开始时间")]),a("th",[t._v("交接")]),a("th",[t._v("交接人")]),a("th",[t._v("备注")])])]),a("tbody",[a("tr",[a("td",{attrs:{width:"100px"}},[t._v(t._s(e.Jishu))]),a("td",[t._v(t._s(e.Bili))]),a("td",[t._v(t._s(e.CanStartDate?t.moment(e.CanStartDate).format("YYYY-MM"):""))]),a("td",[t._v(t._s(e.Startime))]),a("td",[t._v(t._s(t.visible.DoType[e.DoType]))]),a("td",[t._v(t._s(t.visible.UserArray[e.Userid])),a("br"),t._v(t._s(e.DoneTime))]),a("td",[t._v(t._s(e.Remarks))])])])])]),0==i?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate0,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,i)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),1==i?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate1,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,i)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),2==i?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate2,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,i)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),3==i?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate3,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,i)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),4==i?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate4,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,i)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),10==e.sbType?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.yanglao,function(e){return a("a-select-option",{key:e.ID},[a("a-tag",{attrs:{color:"blue"}},[t._v(t._s(t.visible.ServiceType[e.ServiceType]))]),t._v(" "+t._s(e.AccountName)+"--"+t._s(e.AccountNumber))],1)}),1)],1)],1)]:t._e(),20==e.sbType?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.shiye,function(e){return a("a-select-option",{key:e.ID},[a("a-tag",{attrs:{color:"blue"}},[t._v(t._s(t.visible.ServiceType[e.ServiceType]))]),t._v(" "+t._s(e.AccountName)+"--"+t._s(e.AccountNumber))],1)}),1)],1)],1)]:t._e(),30==e.sbType?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.gongshang,function(e){return a("a-select-option",{key:e.ID},[a("a-tag",{attrs:{color:"blue"}},[t._v(t._s(t.visible.ServiceType[e.ServiceType]))]),t._v(" "+t._s(e.AccountName)+"--"+t._s(e.AccountNumber))],1)}),1)],1)],1)]:t._e(),40==e.sbType?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.yiliao,function(e){return a("a-select-option",{key:e.ID},[a("a-tag",{attrs:{color:"blue"}},[t._v(t._s(t.visible.ServiceType[e.ServiceType]))]),t._v(" "+t._s(e.AccountName)+"--"+t._s(e.AccountNumber))],1)}),1)],1)],1)]:t._e(),50==e.sbType?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.gongjijin,function(e){return a("a-select-option",{key:e.ID},[a("a-tag",{attrs:{color:"blue"}},[t._v(t._s(t.visible.ServiceType[e.ServiceType]))]),t._v(" "+t._s(e.AccountName)+"--"+t._s(e.AccountNumber))],1)}),1)],1)],1)]:t._e(),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"备注",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-textarea",{attrs:{placeholder:"备注",rows:2},model:{value:e.ConfirmRemarks,callback:function(a){t.$set(e,"ConfirmRemarks",a)},expression:"item.ConfirmRemarks"}})],1)],1)],2):t._e()]})],2)],1)],2)},s=[],l=(a("ac6a"),a("b775")),n=a("c32d"),r=a.n(n),o={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:""}},data:function(){return{visible:{show:!1,sbType:{},UserArray:[],SBGUID:"",DoType:{},CanStartDate:"",ComServiceGuid:"",CityCode:"",ServiceType:{}},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],remark:[{required:!1,message:"请输入"}]},sbDetail:[{"姓名":"","身份证号":"",ComName:""}],modal:{},moment:r.a,actTime:void 0,initDate:void 0,checkNick:!0,yanglao:[],shiye:[],gongshang:[],yiliao:[],gongjijin:[],dataAccount:[]}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.yanglao=[],this.shiye=[],this.gongshang=[],this.yiliao=[],this.gongjijin=[],this.dataAccount=[],this.form.resetFields(),this.sbDetail=[{"姓名":"","身份证号":"",ComName:""}]},init:function(){var t=this;new Date;l["a"].post("/api/employee/shebao/shebaoList",{RLZGUID:t.visible.RLZGUID}).then(function(e){if(t.$loading.close(),0===e.code){new Date;e.data.forEach(function(t,e){t.FirstBillMonth=void 0,t.CanStartDate?r()(t.CanStartDate).diff(r()(t.Startime),"months")>0?t.ActStartime=r()(t.CanStartDate):t.ActStartime=r()(t.Startime):t.Startime?t.ActStartime=r()(t.Startime):delete t.ActStartime,t.Done&&null==t.Confirm?t.checked=!0:t.checked=!1,t.SBAccountID=""}),t.sbDetail=e.data,l["a"].post("/api/company/SBAccount/Detail",{ComServiceGuid:t.visible.ComServiceGuid}).then(function(e){0===e.code&&(e.data.accountList&&e.data.accountList.length>0&&e.data.accountList.forEach(function(e,a){e.CityCode==t.visible.CityCode&&t.dataAccount.push(e)}),t.yanglao=t.sbFilter("10"),t.shiye=t.sbFilter("20"),t.gongshang=t.sbFilter("30"),t.yiliao=t.sbFilter("40"),t.gongjijin=t.sbFilter("50"),t.sbDetail.forEach(function(e){10==e.sbType&&1==t.yanglao.length&&(e.SBAccountID=t.yanglao[0].ID),20==e.sbType&&1==t.shiye.length&&(e.SBAccountID=t.shiye[0].ID),30==e.sbType&&1==t.gongshang.length&&(e.SBAccountID=t.gongshang[0].ID),40==e.sbType&&1==t.yiliao.length&&(e.SBAccountID=t.yiliao[0].ID),50==e.sbType&&1==t.gongjijin.length&&(e.SBAccountID=t.gongjijin[0].ID)}))}).catch(function(t){console.log(t)})}}).catch(function(e){t.$loading.close(),console.log(e)})},sbFilter:function(t){var e=this.dataAccount.filter(function(e){return e.AccountType==t});return e.length>0?e:[]},submitSbDate:function(){var t=this,e=[];t.form.validateFields(function(a,i){if(!a){try{t.sbDetail.forEach(function(a){if(a.Done&&null==a.Confirm&&a.checked){var i={};if(i.SBGUID=a.SBGUID,a.ActStartime?i.ActStartime=a.ActStartime?r()(a.ActStartime).format("YYYY-MM-01"):"":(t.$message.error(t.visible.sbType[a.sbType]+"实际起做日期为空！"),back),a.FirstBillMonth?i.FirstBillMonth=a.FirstBillMonth?r()(a.FirstBillMonth).format("YYYY-MM-01"):"":(t.$message.error(t.visible.sbType[a.sbType]+"运行操作月为空！"),back),i.DoType=a.DoType,i.ConfirmRemarks=a.ConfirmRemarks,""==a.SBAccountID)throw t.$message.error("社保账户为必填项！如果没有社保账户请与运行部门沟通！"),Error();console.log(r()(void 0).format("YYYY-MM-01")),i.SBAccountID=a.SBAccountID,e.push(i),console.log(e)}})}catch(s){return}if(0==e.length)return void t.$message.error("请选择需要确认的险种！");t.$loading.open(),l["a"].post("/api/Employee/shebao/batchConfirm",e).then(function(a){t.$loading.close(),0===a.code?(t.$message.success(a.msg),t.onClose(),t.refresh()):-1===a.code?t.$confirm({zIndex:1002,title:a.msg,content:"点击确定确认。",onOk:function(){l["a"].post("/api/Employee/shebao/batchConfirm?IsIsApproval=1",e).then(function(e){0===e.code?(t.$message.success(e.msg),t.refresh(),t.onClose()):t.$message.error(e.msg)}).catch(function(t){console.log(t)})},onCancel:function(){}}):t.$message.error(a.msg)}).catch(function(e){t.$loading.close(),console.log(e)})}})},changeActTime:function(t,e){console.log(e);new Date},disabledDate0:function(t){return this.sbDetail[0].CanStartDate&&r()(this.sbDetail[0].CanStartDate).diff(r()(this.sbDetail[0].Startime),"months")>0?t<r()(this.sbDetail[0].CanStartDate):t<r()(this.sbDetail[0].Startime)},disabledDate1:function(t){return this.sbDetail[1].CanStartDate&&r()(this.sbDetail[1].CanStartDate).diff(r()(this.sbDetail[1].Startime),"months")>0?t<r()(this.sbDetail[1].CanStartDate):t<r()(this.sbDetail[1].Startime)},disabledDate2:function(t){return this.sbDetail[2].CanStartDate&&r()(this.sbDetail[2].CanStartDate).diff(r()(this.sbDetail[2].Startime),"months")>0?t<r()(this.sbDetail[2].CanStartDate):t<r()(this.sbDetail[2].Startime)},disabledDate3:function(t){return this.sbDetail[3].CanStartDate&&r()(this.sbDetail[3].CanStartDate).diff(r()(this.sbDetail[3].Startime),"months")>0?t<r()(this.sbDetail[3].CanStartDate):t<r()(this.sbDetail[3].Startime)},disabledDate4:function(t){return this.sbDetail[4].CanStartDate&&r()(this.sbDetail[4].CanStartDate).diff(r()(this.sbDetail[4].Startime),"months")>0?t<r()(this.sbDetail[4].CanStartDate):t<r()(this.sbDetail[4].Startime)},disabledFirstDate0:function(t){var e=new Date,a=this;return r()(a.sbDetail[0].ActStartime).format("YYYY-MM-01")<r()(e).format("YYYY-MM-01")?t<r()(e).startOf("month"):t<r()(a.sbDetail[0].ActStartime).startOf("month")},disabledFirstDate1:function(t){var e=new Date,a=this;return r()(a.sbDetail[1].ActStartime).format("YYYY-MM-01")<r()(e).format("YYYY-MM-01")?t<r()(e).startOf("month"):t<r()(a.sbDetail[1].ActStartime).startOf("month")},disabledFirstDate2:function(t){var e=new Date,a=this;return r()(a.sbDetail[2].ActStartime).format("YYYY-MM-01")<r()(e).format("YYYY-MM-01")?t<r()(e).startOf("month"):t<r()(a.sbDetail[2].ActStartime).startOf("month")},disabledFirstDate3:function(t){var e=new Date,a=this;return r()(a.sbDetail[3].ActStartime).format("YYYY-MM-01")<r()(e).format("YYYY-MM-01")?t<r()(e).startOf("month"):t<r()(a.sbDetail[3].ActStartime).startOf("month")},disabledFirstDate4:function(t){var e=new Date,a=this;return r()(a.sbDetail[4].ActStartime).format("YYYY-MM-01")<r()(e).format("YYYY-MM-01")?t<r()(e).startOf("month"):t<r()(a.sbDetail[4].ActStartime).startOf("month")},handleChange:function(t){console.log(t),this.sbDetail[t].checked=!this.sbDetail[t].checked}}},c=o,m=(a("4b20"),a("2877")),p=Object(m["a"])(c,i,s,!1,null,"52db9a84",null);e["default"]=p.exports}}]);