(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bd23672c"],{"0997":function(t,e,a){},2361:function(t,e,a){"use strict";var r=a("0997"),o=a.n(r);o.a},"296b":function(t,e,a){"use strict";var r=a("be0d"),o=a.n(r);o.a},"89b0":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1100,centered:"",zIndex:1001},on:{cancel:t.onClose,ok:t.submitSbDate}},[a("template",{slot:"title"},[t._v("\n  确认 "),a("span",{staticClass:"red"},[t._v("[业务截止日："+t._s(t.sbDetail[0].EndDay?t.sbDetail[0].EndDay+"日":t.EndDay?t.EndDay+"日":"未设置")+"]")])]),a("a-form",{attrs:{form:t.form}},[a("a-row",[a("a-col",{attrs:{span:5}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:5},wrapperCol:{span:15}}},[t._v("\n            "+t._s(t.sbDetail[0]["姓名"])+"\n          ")])],1),a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:15}}},[t._v("\n            "+t._s(t.sbDetail[0]["身份证号"])+"\n            "),a("span",{class:t.ageBeyond?"red":""},[t._v("("+t._s(t.age+"岁")+")")])])],1),a("a-col",{attrs:{span:11}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:3},wrapperCol:{span:19}}},[t._v("\n            "+t._s(t.sbDetail[0].ComName)+"\n          ")])],1),t._l(t.sbDetail,function(e,r){return[e.Done&&null==e.Confirm?a("div",{key:r},[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"",labelCol:{span:0},wrapperCol:{span:15}}},[a("a-checkbox",{attrs:{checked:e.checked},on:{change:function(e){return t.handleChange(r)}}},[t._v("\n              "+t._s(t.visible.sbType[e.sbType])+" "),a("span",{staticStyle:{color:"red"}},[t._v(t._s(1==e.IsApproval?"[审批中]":""))])])],1)],1),a("a-col",{attrs:{span:24}},[a("table",{staticClass:"mytable",attrs:{border:"1"}},[a("thead",[a("tr",[a("th",[t._v("工资")]),a("th",[t._v("比例")]),a("th",[t._v("可以开始月份")]),a("th",[t._v("派单开始时间")]),a("th",[t._v("交接")]),a("th",[t._v("交接人")]),a("th",[t._v("备注")])])]),a("tbody",[a("tr",[a("td",{attrs:{width:"100px"}},[t._v(t._s(e.Jishu))]),a("td",[t._v(t._s(e.Bili))]),a("td",[t._v(t._s(e.CanStartDate?t.moment(e.CanStartDate).format("YYYY-MM"):""))]),a("td",[t._v(t._s(e.Startime))]),a("td",[t._v(t._s(t.visible.DoType[e.DoType]))]),a("td",[t._v(t._s(t.visible.UserArray[e.Userid])),a("br"),t._v(t._s(e.DoneTime))]),a("td",[t._v(t._s(e.Remarks))])])])])]),0==r?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate0,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,r)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),1==r?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate1,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,r)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),2==r?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate2,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,r)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),3==r?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate3,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,r)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),4==r?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate4,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,r)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),10==e.sbType?[a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:3},wrapperCol:{span:20}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.yanglao,function(e){return a("a-select-option",{key:e.ID},[a("a-tag",{attrs:{color:"blue"}},[t._v(t._s(t.visible.ServiceType[e.ServiceType]))]),t._v(" "+t._s(e.AccountName)+"--"+t._s(e.AccountNumber))],1)}),1)],1)],1)]:t._e(),20==e.sbType?[a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:3},wrapperCol:{span:20}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.shiye,function(e){return a("a-select-option",{key:e.ID},[a("a-tag",{attrs:{color:"blue"}},[t._v(t._s(t.visible.ServiceType[e.ServiceType]))]),t._v(" "+t._s(e.AccountName)+"--"+t._s(e.AccountNumber))],1)}),1)],1)],1)]:t._e(),30==e.sbType?[a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:3},wrapperCol:{span:20}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.gongshang,function(e){return a("a-select-option",{key:e.ID},[a("a-tag",{attrs:{color:"blue"}},[t._v(t._s(t.visible.ServiceType[e.ServiceType]))]),t._v(" "+t._s(e.AccountName)+"--"+t._s(e.AccountNumber))],1)}),1)],1)],1)]:t._e(),40==e.sbType?[a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:3},wrapperCol:{span:20}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.yiliao,function(e){return a("a-select-option",{key:e.ID},[a("a-tag",{attrs:{color:"blue"}},[t._v(t._s(t.visible.ServiceType[e.ServiceType]))]),t._v(" "+t._s(e.AccountName)+"--"+t._s(e.AccountNumber))],1)}),1)],1)],1)]:t._e(),50==e.sbType?[a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:3},wrapperCol:{span:20}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.gongjijin,function(e){return a("a-select-option",{key:e.ID},[a("a-tag",{attrs:{color:"blue"}},[t._v(t._s(t.visible.ServiceType[e.ServiceType]))]),t._v(" "+t._s(e.AccountName)+"--"+t._s(e.AccountNumber))],1)}),1)],1)],1)]:t._e(),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"备注",labelCol:{span:3},wrapperCol:{span:20}}},[a("a-textarea",{attrs:{placeholder:"备注",rows:1},model:{value:e.ConfirmRemarks,callback:function(a){t.$set(e,"ConfirmRemarks",a)},expression:"item.ConfirmRemarks"}})],1)],1)],2):t._e()]})],2)],1)],2)},o=[],i=(a("ac6a"),a("b775")),s=a("61f7"),n=a("c32d"),l=a.n(n),c={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:""}},data:function(){return{visible:{show:!1,sbType:{},UserArray:[],SBGUID:"",DoType:{},CanStartDate:"",ComServiceGuid:"",CityCode:"",ServiceType:{}},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],remark:[{required:!1,message:"请输入"}]},sbDetail:[{"姓名":"","身份证号":"",ComName:""}],modal:{},moment:l.a,actTime:void 0,initDate:void 0,checkNick:!0,yanglao:[],shiye:[],gongshang:[],yiliao:[],gongjijin:[],dataAccount:[],ageBeyond:!1,age:"",EndDay:""}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.yanglao=[],this.shiye=[],this.gongshang=[],this.yiliao=[],this.gongjijin=[],this.dataAccount=[],this.form.resetFields(),this.sbDetail=[{"姓名":"","身份证号":"",ComName:""}]},init:function(){var t=this;new Date;i["a"].post("/api/employee/shebao/shebaoList",{RLZGUID:t.visible.RLZGUID}).then(function(e){if(t.$loading.close(),0===e.code){new Date;var a=Object(s["d"])(e.data[0]["身份证号"]);t.age=Object(s["a"])(e.data[0]["身份证号"]),"男"==a&&t.age>55?t.ageBeyond=!0:"女"==a&&t.age>45?t.ageBeyond=!0:t.ageBeyond=!1,e.data.forEach(function(t,e){t.FirstBillMonth=void 0,t.CanStartDate?l()(t.CanStartDate).diff(l()(t.Startime),"months")>0?t.ActStartime=l()(t.CanStartDate):t.ActStartime=l()(t.Startime):t.Startime?t.ActStartime=l()(t.Startime):delete t.ActStartime,t.Done&&null==t.Confirm?t.checked=!0:t.checked=!1,t.SBAccountID=""}),t.sbDetail=e.data,i["a"].post("/api/company/SBAccount/Detail",{ComServiceGuid:t.visible.ComServiceGuid}).then(function(e){0===e.code&&(e.data.accountList&&e.data.accountList.length>0&&e.data.accountList.forEach(function(e,a){e.CityCode==t.visible.CityCode&&t.dataAccount.push(e)}),t.yanglao=t.sbFilter("10"),t.shiye=t.sbFilter("20"),t.gongshang=t.sbFilter("30"),t.yiliao=t.sbFilter("40"),t.gongjijin=t.sbFilter("50"),t.sbDetail.forEach(function(e){10==e.sbType&&1==t.yanglao.length&&(e.SBAccountID=t.yanglao[0].ID),20==e.sbType&&1==t.shiye.length&&(e.SBAccountID=t.shiye[0].ID),30==e.sbType&&1==t.gongshang.length&&(e.SBAccountID=t.gongshang[0].ID),40==e.sbType&&1==t.yiliao.length&&(e.SBAccountID=t.yiliao[0].ID),50==e.sbType&&1==t.gongjijin.length&&(e.SBAccountID=t.gongjijin[0].ID)}),t.EndDay=e.data.EndDay)}).catch(function(t){console.log(t)})}}).catch(function(e){t.$loading.close(),console.log(e)})},sbFilter:function(t){var e=this.dataAccount.filter(function(e){return e.AccountType==t});return e.length>0?e:[]},submitSbDate:function(){var t=this,e=[];t.form.validateFields(function(a,r){if(!a){try{t.sbDetail.forEach(function(a){if(a.Done&&null==a.Confirm&&a.checked){var r={};if(r.SBGUID=a.SBGUID,a.ActStartime?r.ActStartime=a.ActStartime?l()(a.ActStartime).format("YYYY-MM-01"):"":(t.$message.error(t.visible.sbType[a.sbType]+"实际起做日期为空！"),back),a.FirstBillMonth?r.FirstBillMonth=a.FirstBillMonth?l()(a.FirstBillMonth).format("YYYY-MM-01"):"":(t.$message.error(t.visible.sbType[a.sbType]+"运行操作月为空！"),back),r.DoType=a.DoType,r.ConfirmRemarks=a.ConfirmRemarks,""==a.SBAccountID)throw t.$message.error("社保账户为必填项！如果没有社保账户请与运行部门沟通！"),Error();console.log(l()(void 0).format("YYYY-MM-01")),r.SBAccountID=a.SBAccountID,e.push(r),console.log(e)}})}catch(o){return}if(0==e.length)return void t.$message.error("请选择需要确认的险种！");t.$loading.open(),i["a"].post("/api/Employee/shebao/batchConfirm",e).then(function(a){t.$loading.close(),0===a.code?(t.$message.success(a.msg),t.onClose(),t.refresh()):-1===a.code?t.$confirm({zIndex:1002,title:a.msg,content:"点击确定确认。",onOk:function(){i["a"].post("/api/Employee/shebao/batchConfirm?IsIsApproval=1",e).then(function(e){0===e.code?(t.$message.success(e.msg),t.refresh(),t.onClose()):t.$message.error(e.msg)}).catch(function(t){console.log(t)})},onCancel:function(){}}):t.$message.error(a.msg)}).catch(function(e){t.$loading.close(),console.log(e)})}})},changeActTime:function(t,e){console.log(e);new Date},disabledDate0:function(t){return this.sbDetail[0].CanStartDate&&l()(this.sbDetail[0].CanStartDate).diff(l()(this.sbDetail[0].Startime),"months")>0?t<l()(this.sbDetail[0].CanStartDate):t<l()(this.sbDetail[0].Startime)},disabledDate1:function(t){return this.sbDetail[1].CanStartDate&&l()(this.sbDetail[1].CanStartDate).diff(l()(this.sbDetail[1].Startime),"months")>0?t<l()(this.sbDetail[1].CanStartDate):t<l()(this.sbDetail[1].Startime)},disabledDate2:function(t){return this.sbDetail[2].CanStartDate&&l()(this.sbDetail[2].CanStartDate).diff(l()(this.sbDetail[2].Startime),"months")>0?t<l()(this.sbDetail[2].CanStartDate):t<l()(this.sbDetail[2].Startime)},disabledDate3:function(t){return this.sbDetail[3].CanStartDate&&l()(this.sbDetail[3].CanStartDate).diff(l()(this.sbDetail[3].Startime),"months")>0?t<l()(this.sbDetail[3].CanStartDate):t<l()(this.sbDetail[3].Startime)},disabledDate4:function(t){return this.sbDetail[4].CanStartDate&&l()(this.sbDetail[4].CanStartDate).diff(l()(this.sbDetail[4].Startime),"months")>0?t<l()(this.sbDetail[4].CanStartDate):t<l()(this.sbDetail[4].Startime)},disabledFirstDate0:function(t){var e=new Date,a=this;return l()(a.sbDetail[0].ActStartime).format("YYYY-MM-01")<l()(e).format("YYYY-MM-01")?t<l()(e).startOf("month"):t<l()(a.sbDetail[0].ActStartime).startOf("month")},disabledFirstDate1:function(t){var e=new Date,a=this;return l()(a.sbDetail[1].ActStartime).format("YYYY-MM-01")<l()(e).format("YYYY-MM-01")?t<l()(e).startOf("month"):t<l()(a.sbDetail[1].ActStartime).startOf("month")},disabledFirstDate2:function(t){var e=new Date,a=this;return l()(a.sbDetail[2].ActStartime).format("YYYY-MM-01")<l()(e).format("YYYY-MM-01")?t<l()(e).startOf("month"):t<l()(a.sbDetail[2].ActStartime).startOf("month")},disabledFirstDate3:function(t){var e=new Date,a=this;return l()(a.sbDetail[3].ActStartime).format("YYYY-MM-01")<l()(e).format("YYYY-MM-01")?t<l()(e).startOf("month"):t<l()(a.sbDetail[3].ActStartime).startOf("month")},disabledFirstDate4:function(t){var e=new Date,a=this;return l()(a.sbDetail[4].ActStartime).format("YYYY-MM-01")<l()(e).format("YYYY-MM-01")?t<l()(e).startOf("month"):t<l()(a.sbDetail[4].ActStartime).startOf("month")},handleChange:function(t){console.log(t),this.sbDetail[t].checked=!this.sbDetail[t].checked}}},p=c,m=(a("2361"),a("2877")),u=Object(m["a"])(p,r,o,!1,null,"a3f49a3e",null);e["default"]=u.exports},be0d:function(t,e,a){},fe8b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:7,lg:7,xl:6,xxl:4}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.ComName,callback:function(e){t.$set(t.formSearch,"ComName",e)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:6,xxl:4}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.emCardID,callback:function(e){t.$set(t.formSearch,"emCardID",e)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:5,xxl:4}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:18}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.emName,callback:function(e){t.$set(t.formSearch,"emName",e)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:6,xxl:4}},[a("a-form-item",{attrs:{label:"交接开始时间",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD"},model:{value:t.formSearch.BeginDate,callback:function(e){t.$set(t.formSearch,"BeginDate",e)},expression:"formSearch.BeginDate"}})],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:6,xxl:4}},[a("a-form-item",{attrs:{label:"交接结束时间",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-date-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD"},model:{value:t.formSearch.EndDate,callback:function(e){t.$set(t.formSearch,"EndDate",e)},expression:"formSearch.EndDate"}})],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:5,xxl:4}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:t.init}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.exportlist}},[t._v("导出")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"SBGUID"},scopedSlots:t._u([{key:"userCity",fn:function(e,r){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.cityList[r.CityCode])+"\n        ")])}},{key:"ServiceType",fn:function(e,r){return a("span",{staticClass:"fs12",staticStyle:{"text-align":"right"}},[t._v("\n          服务类型："+t._s(t.ServiceType[r.ServiceType])),a("br"),t._v("\n          公积金服务类型："+t._s(t.ServiceType[r.GJJServiceType])+"\n        ")])}},{key:"GYSName",fn:function(e,r){return a("span",{staticClass:"fs12"},[t._v("派出公司："+t._s(r.GYSName)),a("br"),t._v("公司："+t._s(r.ComName))])}},{key:"userName",fn:function(e,r){return a("span",{},[a("a",{on:{click:function(e){return t.staffdetail(r)}}},[t._v(t._s(r["姓名"]))]),a("br"),t._v(t._s(r["身份证号"]))])}},{key:"sbType",fn:function(e,r){return a("span",{},[t._v(t._s(t.sbType[r.sbType]))])}},{key:"IsApproval",fn:function(e,r){return a("span",{staticStyle:{color:"red"}},[t._v(t._s(1==r.IsApproval?"审批中":""))])}},{key:"DoType",fn:function(e,r){return a("span",{},[t._v(t._s(t.DoType[r.DoType]))])}},{key:"CanStartDate",fn:function(e,r){return a("span",{},[t._v(t._s(r.CanStartDate?t.moment(r.CanStartDate).format("YYYY-MM-DD"):""))])}},{key:"Userid",fn:function(e,r){return a("span",{},[t._v(t._s(t.UserArray[r.Userid])),a("br"),t._v(t._s(r.DoneTime))])}},{key:"Jishu",fn:function(e,r){return a("span",{},[t._v("\n          "+t._s(r.Jishu)+"\n          "),null!=r.Bili&&""!=r.Bili?[a("br"),t._v("比例："+t._s(r.Bili)+"\n          ")]:t._e()],2)}},{key:"Remarks",fn:function(e,r){return[a("a-tooltip",[a("template",{slot:"title"},[t._v("\n              "+t._s(r.Remarks)+"\n            ")]),a("div",{staticClass:"remark-text ellipsis"},[t._v(t._s(r.Remarks))])],2)]}},{key:"action",fn:function(e,r){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(r)}}},[t._v("确认")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,"show-total":function(t){return"共 "+t+" 条"},current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1),a("modal-detail",{attrs:{show:t.modal.detail,refresh:t.pagerefresh}}),a("staff-detail",{attrs:{show:t.modal.staffDetail,refresh:t.pagerefresh}})],1)},o=[],i=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),s=a("b775"),n=(a("61f7"),a("89b0")),l=a("f111");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach(function(e){Object(i["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var m=[{title:"城市",scopedSlots:{customRender:"userCity"}},{title:"公司",scopedSlots:{customRender:"GYSName"}},{title:"服务类型",scopedSlots:{customRender:"ServiceType"}},{title:"姓名",scopedSlots:{customRender:"userName"}},{title:"追加",scopedSlots:{customRender:"IsApproval"}},{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"可以开始月份",scopedSlots:{customRender:"CanStartDate"}},{title:"工资",scopedSlots:{customRender:"Jishu"}},{title:"备注",scopedSlots:{customRender:"Remarks"}},{title:"交接人",scopedSlots:{customRender:"Userid"}},{title:"操作",scopedSlots:{customRender:"action"}}],u={components:{ModalDetail:n["default"],staffDetail:l["default"]},data:function(){var t;return t={advanced:!0,columns:m,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,emCardID:"",emName:"",ComName:"",Type:2},form:this.$form.createForm(this),modifyForm:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],drawer:{},modal:{detail:{show:!1},staffDetail:{show:!1}},showaddLayer:!1,showmodifyLayer:!1,cityList:[],GYSName:"",sbType:{},DoType:{},UserArray:{},moment:moment},Object(i["a"])(t,"UserArray",[]),Object(i["a"])(t,"DeptArray",[]),Object(i["a"])(t,"cityList",[]),Object(i["a"])(t,"ServiceType",{}),Object(i["a"])(t,"BillingMode",{}),Object(i["a"])(t,"BuJiaoBillingType",{}),Object(i["a"])(t,"ServiceTypeArray",[]),Object(i["a"])(t,"BillingModeArray",[]),Object(i["a"])(t,"BuJiaoBillingTypeArray",[]),Object(i["a"])(t,"FlowType",{}),Object(i["a"])(t,"FlowTypeArray",[]),Object(i["a"])(t,"YanglaoStatus",[]),Object(i["a"])(t,"ShiyeStatus",[]),Object(i["a"])(t,"YiliaoStatus",[]),Object(i["a"])(t,"GongjijinStatus",[]),Object(i["a"])(t,"RuLiZhiStatus",[]),Object(i["a"])(t,"RuLiZhiStatusObject",{}),Object(i["a"])(t,"sbType",{}),Object(i["a"])(t,"DoType",{}),Object(i["a"])(t,"DoTypeArray",[]),Object(i["a"])(t,"Deleted",{}),Object(i["a"])(t,"ContactClass",[]),Object(i["a"])(t,"RSB_ContactType",[]),Object(i["a"])(t,"ContactClassObject",{}),Object(i["a"])(t,"RSB_ContactTypeObject",{}),Object(i["a"])(t,"BujiaoTypeArray",[]),Object(i["a"])(t,"BujiaoTypeObject",{}),Object(i["a"])(t,"ChargeType",{}),t},mounted:function(){var t=this;t.init()},methods:{init:function(){var t=this;s["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(e){0===e.code&&(t.UserArray=e.data.User,t.DeptArray=e.data.Dept,t.cityList=e.data.City)}).catch(function(t){console.log(t)}),s["a"].post("/api/Dim/Enum/GetEnum",{Names:["YanglaoStatus","ShiyeStatus","YiliaoStatus","GongjijinStatus","RuLiZhiStatus","sbType","DoType","ContactClass","RSB_ContactType","BujiaoType","ChargeType","ServiceType","FlowType"]}).then(function(e){0===e.code?(console.log(e),t.YanglaoStatus=e.data.YanglaoStatus,t.ShiyeStatus=e.data.ShiyeStatus,t.YiliaoStatus=e.data.YiliaoStatus,t.GongjijinStatus=e.data.GongjijinStatus,t.RuLiZhiStatus=e.data.RuLiZhiStatus,t.DoTypeArray=e.data.DoType,e.data.RuLiZhiStatus.forEach(function(e,a){t.RuLiZhiStatusObject[e.key]=e.text}),e.data.sbType.forEach(function(e,a){t.sbType[e.key]=e.text}),e.data.DoType.forEach(function(e,a){t.DoType[e.key]=e.text}),t.ContactClass=e.data.ContactClass,t.RSB_ContactType=e.data.RSB_ContactType,t.BujiaoTypeArray=e.data.BujiaoType,e.data.ContactClass.forEach(function(e,a){t.ContactClassObject[e.key]=e.text}),e.data.RSB_ContactType.forEach(function(e,a){t.RSB_ContactTypeObject[e.key]=e.text}),e.data.BujiaoType.forEach(function(e,a){t.BujiaoTypeObject[e.key]=e.text}),e.data.ChargeType.forEach(function(e,a){t.ChargeType[e.key]=e.text}),e.data.ServiceType.forEach(function(e,a){t.ServiceType[e.key]=e.text}),e.data.FlowType.forEach(function(e,a){t.FlowType[e.key]=e.text}),t.pagechange(1)):t.$message.error(e.msg)}).catch(function(t){console.log(t)})},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a={};e.formSearch.current=t,a=p({},e.formSearch),e.formSearch.BeginDate&&(a.BeginDate=moment(a.BeginDate).format("YYYY-MM-DD")),e.formSearch.EndDate&&(a.EndDate=moment(a.EndDate).format("YYYY-MM-DD")),e.$loading.open(),s["a"].post("/api/Employee/shebao/HandoverNotConfirm",a).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},detail:function(t){var e=this;e.modal.detail={show:!0,RLZGUID:t.RLZGUID,CityCode:t.CityCode,ComServiceGuid:t.ComServiceGuid,sbType:e.sbType,UserArray:e.UserArray,DoType:e.DoType,CanStartDate:t.CanStartDate,ServiceType:e.ServiceType}},staffdetail:function(t){var e=this,a={UserArray:e.UserArray,YanglaoStatus:e.YanglaoStatus,ShiyeStatus:e.ShiyeStatus,YiliaoStatus:e.YiliaoStatus,GongjijinStatus:e.GongjijinStatus,cityList:e.cityList,RLZGUID:t.RLZGUID,PGUID:t.PGUID,RuLiZhiStatusObject:e.RuLiZhiStatusObject,sbType:e.sbType,DoType:e.DoType,DoTypeArray:e.DoTypeArray,ContactClass:e.ContactClass,RSB_ContactType:e.RSB_ContactType,ContactClassObject:e.ContactClassObject,RSB_ContactTypeObject:e.RSB_ContactTypeObject,BujiaoTypeArray:e.BujiaoTypeArray,BujiaoTypeObject:e.BujiaoTypeObject,ChargeType:e.ChargeType,role:77,FlowType:e.FlowType,ServiceType:e.ServiceType};e.modal.staffDetail=p({show:!0},a)},exportlist:function(){var t=document.createElement("a");t.href="/api/Employee/shebao/ExportHandoverNotConfirm",t.click()}}},h=u,d=(a("296b"),a("2877")),f=Object(d["a"])(h,r,o,!1,null,null,null);e["default"]=f.exports}}]);