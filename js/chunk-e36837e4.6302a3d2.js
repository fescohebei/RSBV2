(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e36837e4","chunk-5e9de128"],{"89b0":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1100,centered:"",zIndex:1001},on:{cancel:t.onClose,ok:t.submitSbDate}},[a("template",{slot:"title"},[t._v("\n  确认\n")]),a("a-form",{attrs:{form:t.form}},[a("a-row",[a("a-col",{attrs:{span:5}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:5},wrapperCol:{span:15}}},[t._v("\n            "+t._s(t.sbDetail[0]["姓名"])+"\n          ")])],1),a("a-col",{attrs:{span:6}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:15}}},[t._v("\n            "+t._s(t.sbDetail[0]["身份证号"])+"\n          ")])],1),a("a-col",{attrs:{span:13}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:3},wrapperCol:{span:19}}},[t._v("\n            "+t._s(t.sbDetail[0].ComName)+"\n          ")])],1),t._l(t.sbDetail,function(e,o){return[e.Done&&null==e.Confirm?a("div",{key:o},[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"",labelCol:{span:0},wrapperCol:{span:15}}},[a("a-checkbox",{attrs:{checked:e.checked},on:{change:function(e){return t.handleChange(o)}}},[t._v("\n              "+t._s(t.visible.sbType[e.sbType])+" "),a("span",{staticStyle:{color:"red"}},[t._v(t._s(1==e.IsApproval?"[审批中]":""))])])],1)],1),a("a-col",{attrs:{span:24}},[a("table",{staticClass:"mytable",attrs:{border:"1"}},[a("thead",[a("tr",[a("th",[t._v("工资")]),a("th",[t._v("比例")]),a("th",[t._v("可以开始月份")]),a("th",[t._v("派单开始时间")]),a("th",[t._v("交接")]),a("th",[t._v("交接人")]),a("th",[t._v("备注")])])]),a("tbody",[a("tr",[a("td",{attrs:{width:"100px"}},[t._v(t._s(e.Jishu))]),a("td",[t._v(t._s(e.Bili))]),a("td",[t._v(t._s(e.CanStartDate?t.moment(e.CanStartDate).format("YYYY-MM"):""))]),a("td",[t._v(t._s(e.Startime))]),a("td",[t._v(t._s(t.visible.DoType[e.DoType]))]),a("td",[t._v(t._s(t.visible.UserArray[e.Userid])),a("br"),t._v(t._s(e.DoneTime))]),a("td",[t._v(t._s(e.Remarks))])])])])]),0==o?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate0,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,o)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledFirstDate0,allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),1==o?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate1,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,o)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledFirstDate1,allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),2==o?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate2,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,o)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledFirstDate2,allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),3==o?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate3,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,o)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledFirstDate3,allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),4==o?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledDate4,allowClear:!1,placeholder:"请选择月份"},on:{change:function(a){return t.changeActTime(e.ActStartime,o)}},model:{value:e.ActStartime,callback:function(a){t.$set(e,"ActStartime",a)},expression:"item.ActStartime"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{disabledDate:t.disabledFirstDate4,allowClear:!1,placeholder:"请选择月份"},model:{value:e.FirstBillMonth,callback:function(a){t.$set(e,"FirstBillMonth",a)},expression:"item.FirstBillMonth"}})],1)],1)]:t._e(),10==e.sbType?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.yanglao,function(e){return a("a-select-option",{key:e.ID},[t._v(t._s(e.AccountName)+"--"+t._s(e.AccountNumber))])}),1)],1)],1)]:t._e(),20==e.sbType?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.shiye,function(e){return a("a-select-option",{key:e.ID},[t._v(t._s(e.AccountName)+"--"+t._s(e.AccountNumber))])}),1)],1)],1)]:t._e(),30==e.sbType?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.gongshang,function(e){return a("a-select-option",{key:e.ID},[t._v(t._s(e.AccountName)+"--"+t._s(e.AccountNumber))])}),1)],1)],1)]:t._e(),40==e.sbType?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.yiliao,function(e){return a("a-select-option",{key:e.ID},[t._v(t._s(e.AccountName)+"--"+t._s(e.AccountNumber))])}),1)],1)],1)]:t._e(),50==e.sbType?[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"社保账户",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!0},model:{value:e.SBAccountID,callback:function(a){t.$set(e,"SBAccountID",a)},expression:"item.SBAccountID"}},t._l(t.gongjijin,function(e){return a("a-select-option",{key:e.ID},[t._v(t._s(e.AccountName)+"--"+t._s(e.AccountNumber))])}),1)],1)],1)]:t._e(),a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"备注",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-textarea",{attrs:{placeholder:"备注",rows:2},model:{value:e.ConfirmRemarks,callback:function(a){t.$set(e,"ConfirmRemarks",a)},expression:"item.ConfirmRemarks"}})],1)],1)],2):t._e()]})],2)],1)],2)},r=[],n=(a("ac6a"),a("b775")),i=a("c32d"),s=a.n(i),l={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:""}},data:function(){return{visible:{show:!1,sbType:{},UserArray:[],SBGUID:"",DoType:{},CanStartDate:"",ComServiceGuid:"",CityCode:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],remark:[{required:!1,message:"请输入"}]},sbDetail:[{"姓名":"","身份证号":"",ComName:""}],modal:{},moment:s.a,actTime:void 0,initDate:void 0,checkNick:!0,yanglao:[],shiye:[],gongshang:[],yiliao:[],gongjijin:[],dataAccount:[]}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.yanglao=[],this.shiye=[],this.gongshang=[],this.yiliao=[],this.gongjijin=[],this.dataAccount=[],this.form.resetFields()},init:function(){var t=this;new Date;n["a"].post("/api/employee/shebao/shebaoList",{RLZGUID:t.visible.RLZGUID}).then(function(e){if(t.$loading.close(),0===e.code){new Date;e.data.forEach(function(t,e){t.FirstBillMonth=void 0,t.ActStartime=s()(t.CanStartDate),t.Done&&null==t.Confirm?t.checked=!0:t.checked=!1,t.SBAccountID=""}),t.sbDetail=e.data,n["a"].post("/api/company/SBAccount/Detail",{ComServiceGuid:t.visible.ComServiceGuid}).then(function(e){0===e.code&&(e.data.accountList&&e.data.accountList.length>0&&e.data.accountList.forEach(function(e,a){e.CityCode==t.visible.CityCode&&t.dataAccount.push(e)}),t.yanglao=t.sbFilter("10"),t.shiye=t.sbFilter("20"),t.gongshang=t.sbFilter("30"),t.yiliao=t.sbFilter("40"),t.gongjijin=t.sbFilter("50"),t.sbDetail.forEach(function(e){10==e.sbType&&1==t.yanglao.length&&(e.SBAccountID=t.yanglao[0].ID),20==e.sbType&&1==t.shiye.length&&(e.SBAccountID=t.shiye[0].ID),30==e.sbType&&1==t.gongshang.length&&(e.SBAccountID=t.gongshang[0].ID),40==e.sbType&&1==t.yiliao.length&&(e.SBAccountID=t.yiliao[0].ID),50==e.sbType&&1==t.gongjijin.length&&(e.SBAccountID=t.gongjijin[0].ID)}))}).catch(function(t){console.log(t)})}}).catch(function(e){t.$loading.close(),console.log(e)})},sbFilter:function(t){var e=this.dataAccount.filter(function(e){return e.AccountType==t});return e.length>0?e:[]},submitSbDate:function(){var t=this,e=[];t.form.validateFields(function(a,o){if(!a){try{t.sbDetail.forEach(function(a){if(a.Done&&null==a.Confirm&&a.checked){var o={};if(o.SBGUID=a.SBGUID,o.ActStartime=s()(a.ActStartime).format("YYYY-MM-01"),o.FirstBillMonth=s()(a.FirstBillMonth).format("YYYY-MM-01"),o.DoType=a.DoType,o.ConfirmRemarks=a.ConfirmRemarks,""==a.SBAccountID)throw t.$message.error("社保账户为必填项！如果没有社保账户请与运行部门沟通！"),Error();o.SBAccountID=a.SBAccountID,e.push(o)}})}catch(r){return}if(0==e.length)return void t.$message.error("请选择需要确认的险种！");t.$loading.open(),n["a"].post("/api/Employee/shebao/batchConfirm",e).then(function(a){t.$loading.close(),0===a.code?(t.$message.success(a.msg),t.onClose(),t.refresh()):-1===a.code?t.$confirm({zIndex:1002,title:"该月份已锁定，是否申请追加此月份?",content:"点击确定确认。",onOk:function(){n["a"].post("/api/Employee/shebao/batchConfirm?IsIsApproval=1",e).then(function(e){0===e.code?(t.$message.success(e.msg),t.refresh(),t.onClose()):t.$message.error(e.msg)}).catch(function(t){console.log(t)})},onCancel:function(){}}):t.$message.error(a.msg)}).catch(function(e){t.$loading.close(),console.log(e)})}})},changeActTime:function(t,e){console.log(e);new Date},disabledDate0:function(t){return t<s()(this.sbDetail[0].CanStartDate)},disabledDate1:function(t){return t<s()(this.sbDetail[1].CanStartDate)},disabledDate2:function(t){return t<s()(this.sbDetail[2].CanStartDate)},disabledDate3:function(t){return t<s()(this.sbDetail[3].CanStartDate)},disabledDate4:function(t){return t<s()(this.sbDetail[4].CanStartDate)},disabledFirstDate0:function(t){var e=new Date,a=this;return s()(a.sbDetail[0].ActStartime).format("YYYY-MM-01")<s()(e).format("YYYY-MM-01")?t<s()(e).startOf("month"):t<s()(a.sbDetail[0].ActStartime).startOf("month")},disabledFirstDate1:function(t){var e=new Date,a=this;return s()(a.sbDetail[1].ActStartime).format("YYYY-MM-01")<s()(e).format("YYYY-MM-01")?t<s()(e).startOf("month"):t<s()(a.sbDetail[1].ActStartime).startOf("month")},disabledFirstDate2:function(t){var e=new Date,a=this;return s()(a.sbDetail[2].ActStartime).format("YYYY-MM-01")<s()(e).format("YYYY-MM-01")?t<s()(e).startOf("month"):t<s()(a.sbDetail[2].ActStartime).startOf("month")},disabledFirstDate3:function(t){var e=new Date,a=this;return s()(a.sbDetail[3].ActStartime).format("YYYY-MM-01")<s()(e).format("YYYY-MM-01")?t<s()(e).startOf("month"):t<s()(a.sbDetail[3].ActStartime).startOf("month")},disabledFirstDate4:function(t){var e=new Date,a=this;return s()(a.sbDetail[4].ActStartime).format("YYYY-MM-01")<s()(e).format("YYYY-MM-01")?t<s()(e).startOf("month"):t<s()(a.sbDetail[4].ActStartime).startOf("month")},handleChange:function(t){console.log(t),this.sbDetail[t].checked=!this.sbDetail[t].checked}}},c=l,p=(a("b243"),a("2877")),u=Object(p["a"])(c,o,r,!1,null,"2c5a12ea",null);e["default"]=u.exports},b243:function(t,e,a){"use strict";var o=a("d2a4"),r=a.n(o);r.a},d2a4:function(t,e,a){},fe8b:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.ComName,callback:function(e){t.$set(t.formSearch,"ComName",e)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.emCardID,callback:function(e){t.$set(t.formSearch,"emCardID",e)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:5,xxl:6}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.emName,callback:function(e){t.$set(t.formSearch,"emName",e)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:5,xxl:4}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:t.init}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.exportlist}},[t._v("导出")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"SBGUID"},scopedSlots:t._u([{key:"userCity",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[t._v("\n          "+t._s(t.cityList[o.CityCode])+"\n        ")])}},{key:"userName",fn:function(e,o){return a("span",{},[a("a",{on:{click:function(e){return t.staffdetail(o)}}},[t._v(t._s(o["姓名"]))]),a("br"),t._v(t._s(o["身份证号"]))])}},{key:"sbType",fn:function(e,o){return a("span",{},[t._v(t._s(t.sbType[o.sbType]))])}},{key:"IsApproval",fn:function(e,o){return a("span",{staticStyle:{color:"red"}},[t._v(t._s(1==o.IsApproval?"审批中":""))])}},{key:"DoType",fn:function(e,o){return a("span",{},[t._v(t._s(t.DoType[o.DoType]))])}},{key:"CanStartDate",fn:function(e,o){return a("span",{},[t._v(t._s(o.CanStartDate?t.moment(o.CanStartDate).format("YYYY-MM-DD"):""))])}},{key:"Userid",fn:function(e,o){return a("span",{},[t._v(t._s(t.UserArray[o.Userid])),a("br"),t._v(t._s(o.DoneTime))])}},{key:"Jishu",fn:function(e,o){return a("span",{},[t._v("\n          "+t._s(o.Jishu)+"\n          "),null!=o.Bili&&""!=o.Bili?[a("br"),t._v("比例："+t._s(o.Bili)+"\n          ")]:t._e()],2)}},{key:"action",fn:function(e,o){return a("span",{staticStyle:{"text-align":"right"}},[a("a",{on:{click:function(e){return t.detail(o)}}},[t._v("确认")])])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1)],1),a("modal-detail",{attrs:{show:t.modal.detail,refresh:t.pagerefresh}}),a("staff-detail",{attrs:{show:t.modal.staffDetail,refresh:t.pagerefresh}})],1)},r=[],n=(a("8e6e"),a("456d"),a("ac6a"),a("bd86")),i=a("b775"),s=(a("61f7"),a("89b0")),l=a("f111");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,o)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach(function(e){Object(n["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var u=[{title:"城市",scopedSlots:{customRender:"userCity"}},{title:"姓名",scopedSlots:{customRender:"userName"}},{title:"派出公司",dataIndex:"GYSName"},{title:"公司名称",dataIndex:"ComName"},{title:"追加",scopedSlots:{customRender:"IsApproval"}},{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"可以开始月份",scopedSlots:{customRender:"CanStartDate"}},{title:"工资",scopedSlots:{customRender:"Jishu"}},{title:"备注",dataIndex:"Remarks"},{title:"交接人",scopedSlots:{customRender:"Userid"}},{title:"操作",scopedSlots:{customRender:"action"}}],m={components:{ModalDetail:s["default"],staffDetail:l["default"]},data:function(){var t;return t={advanced:!0,columns:u,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,emCardID:"",emName:"",ComName:"",Type:2},form:this.$form.createForm(this),modifyForm:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],drawer:{},modal:{detail:{show:!1},staffDetail:{show:!1}},showaddLayer:!1,showmodifyLayer:!1,cityList:[],GYSName:"",sbType:{},DoType:{},UserArray:{},moment:moment},Object(n["a"])(t,"UserArray",[]),Object(n["a"])(t,"DeptArray",[]),Object(n["a"])(t,"cityList",[]),Object(n["a"])(t,"ServiceType",{}),Object(n["a"])(t,"BillingMode",{}),Object(n["a"])(t,"BuJiaoBillingType",{}),Object(n["a"])(t,"ServiceTypeArray",[]),Object(n["a"])(t,"BillingModeArray",[]),Object(n["a"])(t,"BuJiaoBillingTypeArray",[]),Object(n["a"])(t,"FlowType",{}),Object(n["a"])(t,"FlowTypeArray",[]),Object(n["a"])(t,"YanglaoStatus",[]),Object(n["a"])(t,"ShiyeStatus",[]),Object(n["a"])(t,"YiliaoStatus",[]),Object(n["a"])(t,"GongjijinStatus",[]),Object(n["a"])(t,"RuLiZhiStatus",[]),Object(n["a"])(t,"RuLiZhiStatusObject",{}),Object(n["a"])(t,"sbType",{}),Object(n["a"])(t,"DoType",{}),Object(n["a"])(t,"DoTypeArray",[]),Object(n["a"])(t,"Deleted",{}),Object(n["a"])(t,"ContactClass",[]),Object(n["a"])(t,"RSB_ContactType",[]),Object(n["a"])(t,"ContactClassObject",{}),Object(n["a"])(t,"RSB_ContactTypeObject",{}),Object(n["a"])(t,"BujiaoTypeArray",[]),Object(n["a"])(t,"BujiaoTypeObject",{}),Object(n["a"])(t,"ChargeType",{}),t},mounted:function(){var t=this;t.init()},methods:{init:function(){var t=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(e){0===e.code&&(t.UserArray=e.data.User,t.DeptArray=e.data.Dept,t.cityList=e.data.City)}).catch(function(t){console.log(t)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["YanglaoStatus","ShiyeStatus","YiliaoStatus","GongjijinStatus","RuLiZhiStatus","sbType","DoType","ContactClass","RSB_ContactType","BujiaoType","ChargeType","ServiceType","FlowType"]}).then(function(e){0===e.code?(console.log(e),t.YanglaoStatus=e.data.YanglaoStatus,t.ShiyeStatus=e.data.ShiyeStatus,t.YiliaoStatus=e.data.YiliaoStatus,t.GongjijinStatus=e.data.GongjijinStatus,t.RuLiZhiStatus=e.data.RuLiZhiStatus,t.DoTypeArray=e.data.DoType,e.data.RuLiZhiStatus.forEach(function(e,a){t.RuLiZhiStatusObject[e.key]=e.text}),e.data.sbType.forEach(function(e,a){t.sbType[e.key]=e.text}),e.data.DoType.forEach(function(e,a){t.DoType[e.key]=e.text}),t.ContactClass=e.data.ContactClass,t.RSB_ContactType=e.data.RSB_ContactType,t.BujiaoTypeArray=e.data.BujiaoType,e.data.ContactClass.forEach(function(e,a){t.ContactClassObject[e.key]=e.text}),e.data.RSB_ContactType.forEach(function(e,a){t.RSB_ContactTypeObject[e.key]=e.text}),e.data.BujiaoType.forEach(function(e,a){t.BujiaoTypeObject[e.key]=e.text}),e.data.ChargeType.forEach(function(e,a){t.ChargeType[e.key]=e.text}),e.data.ServiceType.forEach(function(e,a){t.ServiceType[e.key]=e.text}),e.data.FlowType.forEach(function(e,a){t.FlowType[e.key]=e.text}),t.pagechange(1)):t.$message.error(e.msg)}).catch(function(t){console.log(t)})},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this;e.formSearch.current=t,e.$loading.open(),i["a"].post("/api/Employee/shebao/HandoverNotConfirm",e.formSearch).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},detail:function(t){var e=this;e.modal.detail={show:!0,RLZGUID:t.RLZGUID,CityCode:t.CityCode,ComServiceGuid:t.ComServiceGuid,sbType:e.sbType,UserArray:e.UserArray,DoType:e.DoType,CanStartDate:t.CanStartDate}},staffdetail:function(t){var e=this,a={UserArray:e.UserArray,YanglaoStatus:e.YanglaoStatus,ShiyeStatus:e.ShiyeStatus,YiliaoStatus:e.YiliaoStatus,GongjijinStatus:e.GongjijinStatus,cityList:e.cityList,RLZGUID:t.RLZGUID,PGUID:t.PGUID,RuLiZhiStatusObject:e.RuLiZhiStatusObject,sbType:e.sbType,DoType:e.DoType,DoTypeArray:e.DoTypeArray,ContactClass:e.ContactClass,RSB_ContactType:e.RSB_ContactType,ContactClassObject:e.ContactClassObject,RSB_ContactTypeObject:e.RSB_ContactTypeObject,BujiaoTypeArray:e.BujiaoTypeArray,BujiaoTypeObject:e.BujiaoTypeObject,ChargeType:e.ChargeType,role:77,FlowType:e.FlowType,ServiceType:e.ServiceType};e.modal.staffDetail=p({show:!0},a)},exportlist:function(){var t=document.createElement("a");t.href="/api/Employee/shebao/ExportHandoverNotConfirm",t.click()}}},d=m,h=a("2877"),f=Object(h["a"])(d,o,r,!1,null,null,null);e["default"]=f.exports}}]);