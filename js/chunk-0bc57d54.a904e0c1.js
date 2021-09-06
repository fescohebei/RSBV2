(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bc57d54","chunk-eefd4c8c","chunk-60b34f76","chunk-f0a28b08","chunk-aa563b52","chunk-ba7cd2ce","chunk-2d208666"],{"10ad":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001},on:{cancel:e.onClose,ok:e.submitSbDate}},[a("template",{slot:"title"},[e._v("\n  社保信息\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.visible.sbDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.moment(e.visible.sbDetail.Startime).format("YYYY-MM-DD"))+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"工资",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Jishu)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Bili)+"\n          ")])],1),"77"!=e.visible.role?a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"建议开始月份",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["CanStartDate",{initialValue:e.moment(e.visible.sbDetail.Startime),rules:e.AFormImportRules.iptInput}],expression:"['CanStartDate',{initialValue:moment(visible.sbDetail.Startime),rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"}})],1)],1):e._e(),"77"==e.visible.role?a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"16px"},attrs:{label:"社保账户",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["SBAccountID",{rules:e.AFormImportRules.iptSelect}],expression:"['SBAccountID',{rules:AFormImportRules.iptSelect}]"}],attrs:{allowClear:!0}},e._l(e.dataAccount,function(t){return a("a-select-option",{key:t.ID},[e._v(e._s(t.AccountName)+"--"+e._s(t.AccountNumber))])}),1)],1)],1):e._e(),"77"==e.visible.role?a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"实际起做日期",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["ActStartime",{rules:e.AFormImportRules.iptInput}],expression:"['ActStartime',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"}})],1)],1):e._e(),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"操作类型",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["DoType",{rules:e.AFormImportRules.iptSelect}],expression:"['DoType',{rules:AFormImportRules.iptSelect}]"}],attrs:{allowClear:!0},on:{change:e.controlChange}},e._l(e.visible.DoTypeArray,function(t){return a("a-select-option",{key:t.key,attrs:{disabled:"30"==t.key}},[e._v(e._s(t.text))])}),1)],1)],1),"77"==e.visible.role?a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"操作月",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["FirstBillMonth",{rules:e.AFormImportRules.iptInput}],expression:"['FirstBillMonth',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"}})],1)],1):e._e(),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{rules:e.AFormImportRules.remark}],expression:"['Remarks',{rules:AFormImportRules.remark}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],2)},i=[],r=a("b775"),o=a("c32d"),l=a.n(o),n={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[],role:"",type:"",ComServiceGuid:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],remark:[{required:!1,message:"请输入"}]},assetsdetail:{},moment:l.a,dataAccount:[],accountList:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.AFormImportRules.remark[0].required=!1,this.refresh&&this.refresh(),this.visible.type=""},init:function(){var e=this;console.log(e.visible),r["a"].post("/api/company/SBAccount/Detail",{ComServiceGuid:e.visible.sbDetail.ComServiceGuid}).then(function(t){0===t.code&&(e.accountList=t.data.accountList,e.dataAccount=e.sbFilter(e.visible.sbDetail.sbType),"77"==e.visible.role&&e.dataAccount.length>0&&e.form.setFieldsValue({SBAccountID:e.dataAccount[0].ID}))}).catch(function(e){console.log(e)})},sbFilter:function(e){var t=this.accountList.filter(function(t){return t.AccountType==e});if(t.length>0)return t},submitSbDate:function(){var e=this,t={};e.form.validateFields(function(a,s){if(!a){if(t=s,t.SBGUID=e.visible.sbDetail.SBGUID,t.CanStartDate=l()(s.CanStartDate).format("YYYY-MM-01"),"77"==e.visible.role&&(t.FirstBillMonth=l()(s.FirstBillMonth).format("YYYY-MM-01")),30==s.DoType&&""==s.Remarks)return void e.$message.error("请输入备注！");(e.visible.type="fail")&&(t.ORLZGUID=e.visible.sbDetail.ORLZGUID),e.$loading.open(),r["a"].post("/api/Employee/shebao/edit",t).then(function(a){e.$loading.close(),0===a.code?(e.$message.success(a.msg),e.onClose()):"该月份已锁定！"===a.msg?(t.ConfirmRemarks=s.Remarks,t.ActStartime=l()(s.CanStartDate).format("YYYY-MM-01"),t.FirstBillMonth=l()(s.FirstBillMonth).format("YYYY-MM-01"),e.$confirm({zIndex:1002,title:"该月份已锁定，是否申请追加此月份?",content:"点击确定确认。",onOk:function(){r["a"].post("/api/Employee/SheBaoApproval/SheBaoApprove",t).then(function(t){0===t.code?(e.$message.success(t.msg),e.refresh(),e.onClose()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})):e.$message.error(a.msg)}).catch(function(t){e.$loading.close(),console.log(t)})}})},controlChange:function(e){this.AFormImportRules.remark[0].required=30==e}}},c=n,m=(a("e42a"),a("2877")),u=Object(m["a"])(c,s,i,!1,null,"7b00b996",null);t["default"]=u.exports},1750:function(e,t,a){"use strict";var s=a("5309"),i=a.n(s);i.a},"1f40":function(e,t,a){"use strict";var s=a("2631"),i=a.n(s);i.a},"255c":function(e,t,a){"use strict";var s=a("4078"),i=a.n(s);i.a},2631:function(e,t,a){},"39f4":function(e,t,a){},4078:function(e,t,a){},5309:function(e,t,a){},"5b06":function(e,t,a){},"5dbc":function(e,t,a){var s=a("d3f4"),i=a("8b97").set;e.exports=function(e,t,a){var r,o=t.constructor;return o!==a&&"function"==typeof o&&(r=o.prototype)!==a.prototype&&s(r)&&i&&i(e,r),e}},"633c":function(e,t,a){"use strict";a.r(t);var s,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("福利")]),a("a-table",{attrs:{columns:e.columnshebao,dataSource:e.emSheBaoList,pagination:!1,size:"middle",rowKey:"SBGUID"},scopedSlots:e._u([{key:"sbType",fn:function(t,s){return a("span",{},[e._v(e._s(e.sbType[s.sbType]))])}},{key:"DoType",fn:function(t,s){return a("span",{},[e._v(e._s(e.DoType[s.DoType]))])}},{key:"status",fn:function(t,s){return a("span",{staticStyle:{"font-size":"12px"}},[e._v(e._s(1==s.Deleted?"已减员":"")+" "+e._s(null==s.Confirm?"":e.Confirm[s.Confirm])+" "+e._s(1==s.Done?"已交接":"")+" "+e._s(null!=s["申增状态"]?1==s["申增状态"]?"申增成功":"申增失败":"")+" "+e._s(null!=s["申减状态"]?1==s["申减状态"]?"申减成功":"申减失败":""))])}},{key:"Startime",fn:function(t,s){return a("span",{},[e._v(e._s(s.Startime?e.moment(s.Startime).format("YYYY-MM-DD"):""))])}},{key:"CanStartDate",fn:function(t,s){return a("span",{},[e._v(e._s(s.CanStartDate?e.moment(s.CanStartDate).format("YYYY-MM-DD"):""))])}},{key:"ActStartime",fn:function(t,s){return a("span",{},[e._v(e._s(s.ActStartime?e.moment(s.ActStartime).format("YYYY-MM-DD"):""))])}},{key:"Remarks",fn:function(t,s){return[a("a-tooltip",[a("template",{slot:"title"},[e._v("\n            "+e._s(s.Remarks)+"\n          ")]),a("div",{staticClass:"remark-text ellipsis"},[e._v(e._s(s.Remarks))])],2)]}},{key:"Userid",fn:function(t,s){return a("span",{},[e._v(e._s(e.UserArray[s.Userid]))])}},{key:"action",fn:function(t,s){return a("span",{},[a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多\n            "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{on:{click:function(t){return e.fuliDetail(s)}}},[e._v("详情")]),"79"==e.role&&null==s.Confirm?a("a-menu-item",{on:{click:function(t){return e.modifySalary(s)}}},[e._v("修改")]):e._e(),e.RuLiZhi.Status<50?[[0==s.Deleted&&("10"==e.RuLiZhi.FlowType&&null==s.Confirm&&"76"==e.role&&1==e.cando||"10"!=e.RuLiZhi.FlowType&&0==s.Done&&(null==s.DoType||"30"==s.DoType)&&"77"==e.role||"78"==e.role)?a("a-menu-item",{on:{click:function(t){return e.modifypdDate(s)}}},[e._v("交接")]):e._e(),0==s.Done&&0==s.Deleted&&null==s.DoType&&("10"==e.RuLiZhi.FlowType&&"76"==e.role&&1==e.cando||"10"!=e.RuLiZhi.FlowType&&"77"==e.role||"78"==e.role)?a("a-menu-item",{on:{click:function(t){return e.sbBack(s)}}},[e._v("办理受阻")]):e._e()],"79"==e.role&&"30"==s.DoType?a("a-menu-item",{on:{click:function(t){return e.backoff(s)}}},[e._v("回退")]):e._e()]:e._e(),"79"==e.role&&"30"==s.DoType?a("a-menu-item",{on:{click:function(t){return e.sbDanjian(s)}}},[e._v("单减")]):e._e()],2)],1)],1)}}])}),a("modal-sb-date",{attrs:{show:e.modal.modifySbDate,refresh:e.refreshfuli}}),a("modal-sb-back",{attrs:{show:e.modal.sbback,refresh:e.refreshfuli}}),a("modal-sb-danjian",{ref:"sbdanjian",attrs:{show:e.modal.sbdanjian},on:{refresh:e.refreshfuli}}),a("modal-back-off",{ref:"backoff",attrs:{show:e.modal.backoff}}),a("modal-fuli-detail",{ref:"detail",attrs:{show:e.modal.fldetail}}),a("modal-salary",{ref:"salary",attrs:{show:e.modal.salary}})],1)},r=[],o=(a("ac6a"),a("bd86")),l=(a("c5f6"),a("c32d")),n=a.n(l),c=a("10ad"),m=a("d837"),u=a("f03e"),p=a("e89c"),f=a("7612"),d=a("a540"),b=a("b775"),v=[{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"开始日期",scopedSlots:{customRender:"Startime"}},{title:"可以开始月份",scopedSlots:{customRender:"CanStartDate"}},{title:"实际开始月份",scopedSlots:{customRender:"ActStartime"}},{title:"工资",dataIndex:"Jishu"},{title:"比例",dataIndex:"Bili"},{title:"备注",scopedSlots:{customRender:"Remarks"}},{title:"交接",scopedSlots:{customRender:"DoType"}},{title:"交接时间",dataIndex:"DoneTime",align:"center"},{title:"交接人",scopedSlots:{customRender:"Userid"}},{title:"状态",scopedSlots:{customRender:"status"},align:"center"},{title:"操作",scopedSlots:{customRender:"action"}}],h={components:{ModalSbDate:c["default"],ModalSbBack:m["default"],ModalSbDanjian:u["default"],ModalBackOff:p["default"],ModalFuliDetail:f["default"],ModalSalary:d["default"]},props:(s={RLZGUID:{type:String,default:""},emSheBaos:{type:Array,default:function(){return[]}},RuLiZhi:{type:Object,default:function(){return{}}},sbType:{type:Object,default:function(){return{}}},DoType:{type:Object,default:function(){return{}}},UserArray:{type:Object,default:function(){return{}}},DoTypeArray:{type:Array,default:function(){return[]}},refresh:{type:Function,default:function(){}},role:{type:Number,default:0}},Object(o["a"])(s,"RLZGUID",{type:String,default:""}),Object(o["a"])(s,"cando",{type:Boolean,default:!1}),Object(o["a"])(s,"comService",{type:Object,default:function(){return{}}}),s),data:function(){return{columnshebao:v,moment:n.a,modal:{modifySbDate:{show:!1},sbback:{show:!1},sbdanjian:{show:!1},backoff:{show:!1},fldetail:{show:!1},salary:{show:!1}},Confirm:{},emSheBaoList:[]}},created:function(){this.init()},methods:{init:function(){console.log(this.role);var e=this;console.log(e.role),b["a"].post("/api/Dim/Enum/GetEnum",{Names:["Confirm"]}).then(function(t){0===t.code?(t.data.Confirm.forEach(function(t,a){e.Confirm[t.key]=t.text}),e.refreshfuli()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},saveSbSearch:function(){var e=this,t={};e.comForm.validateFields(function(a,s){a||(console.log(s),t=s,t.RLZGUID=e.RLZGUID,e.$loading.open(),b["a"].post("/api/Employee/SheBaoQuery/add",t).then(function(t){e.$loading.close(),0===t.code?e.$message.success(t.msg):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})},modifypdDate:function(e){var t=this;t.modal.modifySbDate={show:!0,sbDetail:e,sbType:t.sbType,DoTypeArray:t.DoTypeArray,role:t.role,ComServiceGuid:t.comService.ComServiceGuid}},refreshfuli:function(){var e=this;b["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.RLZGUID}).then(function(t){0===t.code&&(e.emSheBaoList=t.data.emSheBaos)}).catch(function(e){console.log(e)})},sbBack:function(e){var t=this;t.modal.sbback={show:!0,sbDetail:e,sbType:t.sbType,DoTypeArray:t.DoTypeArray,role:t.role}},backoff:function(e){var t=this;t.modal.backoff={show:!0,sbDetail:e,sbType:t.sbType,DoTypeArray:t.DoTypeArray,role:t.role}},sbDanjian:function(e){var t=this;t.modal.sbdanjian={show:!0,sbDetail:e,sbType:t.sbType,DoTypeArray:t.DoTypeArray,role:t.role}},fuliDetail:function(e){var t=this;t.modal.fldetail={show:!0,flDetail:e,sbType:t.sbType,DoType:t.DoType,UserArray:t.UserArray,Confirm:t.Confirm}},modifySalary:function(e){this.modal.salary={show:!0,detail:e}}}},D=h,y=(a("c16a"),a("2877")),_=Object(y["a"])(D,i,r,!1,null,"b3eaedac",null);t["default"]=_.exports},"6c4f":function(e,t,a){},7612:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,"z-index":1002,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"社保详情"}},[a("table",{staticClass:"detail-table",attrs:{border:"1"}},[a("tr",[a("td",[e._v("险种名称:")]),a("td",[e._v(e._s(e.visible.sbType[e.visible.flDetail.sbType]))]),a("td",[e._v("开始日期:")]),a("td",[e._v(e._s(e.visible.flDetail.Startime?e.moment(e.visible.flDetail.Startime).format("YYYY-MM-DD"):""))]),a("td",[e._v("可以开始日期:")]),a("td",[e._v(e._s(e.visible.flDetail.CanStartDate?e.moment(e.visible.flDetail.CanStartDate).format("YYYY-MM-DD"):""))]),a("td",[e._v("实际开始月份:")]),a("td",[e._v(e._s(e.visible.flDetail.ActStartime?e.moment(e.visible.flDetail.ActStartime).format("YYYY-MM-DD"):""))])]),a("tr",[a("td",[e._v("社保申报月:")]),a("td",[e._v(e._s(e.visible.flDetail.FirstBillMonth?e.moment(e.visible.flDetail.FirstBillMonth).format("YYYY-MM-DD"):""))]),a("td",[e._v("结束日期:")]),a("td",[e._v(e._s(e.visible.flDetail.SBEndDate?e.moment(e.visible.flDetail.SBEndDate).format("YYYY-MM-DD"):""))]),a("td",[e._v("工资:")]),a("td",[e._v(e._s(e.visible.flDetail.Jishu))]),a("td",[e._v("比例:")]),a("td",[e._v(e._s(e.visible.flDetail.Bili))])]),a("tr",[a("td",[e._v("交接人:")]),a("td",[e._v(e._s(e.visible.UserArray[e.visible.flDetail.Userid]))]),a("td",[e._v("是否交接:")]),a("td",[e._v(e._s(1==e.visible.flDetail.Done?"已交接":""))]),a("td",[e._v("交接时间:")]),a("td",[e._v(" "+e._s(e.visible.flDetail.DoneTime)+" ")]),a("td",[e._v("交接类型:")]),a("td",[e._v(e._s(e.visible.DoType[e.visible.flDetail.DoType]))])]),a("tr",[a("td",[e._v("确认人:")]),a("td",[e._v(e._s(e.visible.UserArray[e.visible.flDetail.ConfirmUserid]))]),a("td",[e._v("是否确认:")]),a("td",[e._v(e._s(e.visible.Confirm[e.visible.flDetail.Confirm]))]),a("td",[e._v("确认时间:")]),a("td",[e._v(" "+e._s(e.visible.flDetail.ConfirmTime)+" ")]),a("td",[e._v("确认备注:")]),a("td",[e._v(e._s(e.visible.flDetail.ConfirmRemarks))])]),a("tr",[a("td",[e._v("减员人:")]),a("td",[e._v(e._s(e.visible.UserArray[e.visible.flDetail.DeleteUserid]))]),a("td",[e._v("是否减员:")]),a("td",[e._v(e._s(1==e.visible.flDetail.Deleted?"已减员":""))]),a("td",[e._v("减员时间:")]),a("td",[e._v(e._s(e.visible.flDetail.Deletetime?e.moment(e.visible.flDetail.Deletetime).format("YYYY-MM-DD"):""))]),a("td",[e._v("备注:")]),a("td",[e._v(e._s(e.visible.flDetail.Remarks))])]),a("tr",[a("td",[e._v("操作申增时间:")]),a("td",[e._v(e._s(e.visible.flDetail.AddDate))]),a("td",[e._v("社保开始月份:")]),a("td",[e._v(e._s(e.visible.flDetail.AddSBDate?e.moment(e.visible.flDetail.AddSBDate).format("YYYY-MM"):""))]),a("td",[e._v("操作申减时间:")]),a("td",[e._v(e._s(e.visible.flDetail.SubDate))]),a("td",[e._v("社保结束月份:")]),a("td",[e._v(e._s(e.visible.flDetail.SubSBDate?e.moment(e.visible.flDetail.SubSBDate).format("YYYY-MM"):""))])])])]),a("a-tab-pane",{key:"2",attrs:{tab:"日志","force-render":""}},[a("div",{staticStyle:{"margin-top":"10px"}},[e.shebaoLog.length>0?[a("a-timeline",e._l(e.shebaoLog,function(t){return a("a-timeline-item",{key:t.index},[a("p",[e._v(e._s(t.Createdate)+" "),a("a-divider",{attrs:{type:"vertical"}}),e._v(" "+e._s(e.visible.UserArray[t.CreateUserid])+"  "),a("a-divider",{attrs:{type:"vertical"}}),e._v(" "+e._s(t.Action)+" \n                ")],1),a("p",[e._v("备注："+e._s(t.Remark))])])}),1)]:e._e(),0==e.shebaoLog.length?[a("div",[a("a-row",{staticStyle:{"text-align":"center"}},[a("a-icon",{attrs:{type:"smile"}}),e._v(" 暂无数据")],1)],1)]:e._e()],2)])],1)],2)},i=[],r=a("b775"),o=a("c32d"),l=a.n(o),n={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,flDetail:{},sbType:{},DoType:{},UserArray:{},Confirm:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:l.a,comServiceCity:[],comService:{},shebaoLog:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;r["a"].post("/api/Employee/Shebao/SheBaoLog",{SBGUID:e.visible.flDetail.SBGUID}).then(function(t){0===t.code&&(e.shebaoLog=t.data.rows)}).catch(function(e){console.log(e)})},changeComTab:function(){}}},c=n,m=(a("1f40"),a("2877")),u=Object(m["a"])(c,s,i,!1,null,"27cc5ac4",null);t["default"]=u.exports},"826f":function(e,t,a){"use strict";var s=a("39f4"),i=a.n(s);i.a},"8b97":function(e,t,a){var s=a("d3f4"),i=a("cb7c"),r=function(e,t){if(i(e),!s(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,s){try{s=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),s(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,a){return r(e,a),t?e.__proto__=a:s(e,a),e}}({},!1):void 0),check:r}},a540:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  修改\n")]),a("div",[a("a-form",{attrs:{form:e.form}},[a("div",{staticClass:"form-box"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"工资",labelCol:{span:4},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Jishu",{initialValue:e.visible.detail.Jishu,rules:e.FormImportRules.iptInput}],expression:"['Jishu',{initialValue:visible.detail.Jishu,rules:FormImportRules.iptInput}]"}]})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:4},wrapperCol:{span:18}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Startime",{initialValue:e.moment(e.visible.detail.Startime),rules:e.FormImportRules.iptInput}],expression:"['Startime',{initialValue:moment(visible.detail.Startime),rules:FormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD"}})],1)],1),50==e.visible.detail.sbType?a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:4},wrapperCol:{span:18}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["Bili",{initialValue:e.visible.detail.Bili,rules:e.FormImportRules.iptInput}],expression:"['Bili',{initialValue:visible.detail.Bili,rules:FormImportRules.iptInput}]"}]})],1)],1):e._e()],1),a("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"222px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.save}},[e._v("保存")])],1)],1)])],1)],2)},i=[],r=a("b775"),o=a("c32d"),l=a.n(o),n={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,detail:{Jishu:"",Startime:""}},form:this.$form.createForm(this),FormImportRules:{iptInput:[{required:!0,message:"请输入"}]},moment:l.a}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail={},this.form.resetFields(),this.$parent.refreshfuli()},init:function(){},save:function(){var e=this,t={};e.form.validateFields(function(a,s){a||(console.log(s),t=s,t.SBGUID=e.visible.detail.SBGUID,e.$loading.open(),r["a"].post("/api/employee/shebao/ChangePaidan",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})}}},c=n,m=a("2877"),u=Object(m["a"])(c,s,i,!1,null,"84f9ca92",null);t["default"]=u.exports},aa77:function(e,t,a){var s=a("5ca1"),i=a("be13"),r=a("79e5"),o=a("fdef"),l="["+o+"]",n="​",c=RegExp("^"+l+l+"*"),m=RegExp(l+l+"*$"),u=function(e,t,a){var i={},l=r(function(){return!!o[e]()||n[e]()!=n}),c=i[e]=l?t(p):o[e];a&&(i[a]=c),s(s.P+s.F*l,"String",i)},p=u.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(m,"")),e};e.exports=u},c16a:function(e,t,a){"use strict";var s=a("6c4f"),i=a.n(s);i.a},c5f6:function(e,t,a){"use strict";var s=a("7726"),i=a("69a8"),r=a("2d95"),o=a("5dbc"),l=a("6a99"),n=a("79e5"),c=a("9093").f,m=a("11e9").f,u=a("86cc").f,p=a("aa77").trim,f="Number",d=s[f],b=d,v=d.prototype,h=r(a("2aeb")(v))==f,D="trim"in String.prototype,y=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){t=D?t.trim():p(t,3);var a,s,i,r=t.charCodeAt(0);if(43===r||45===r){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+t}for(var o,n=t.slice(2),c=0,m=n.length;c<m;c++)if(o=n.charCodeAt(c),o<48||o>i)return NaN;return parseInt(n,s)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof d&&(h?n(function(){v.valueOf.call(a)}):r(a)!=f)?o(new b(y(t)),a,d):y(t)};for(var _,w=a("9e1e")?c(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;w.length>S;S++)i(b,_=w[S])&&!i(d,_)&&u(d,_,m(b,_));d.prototype=v,v.constructor=d,a("2aba")(s,f,d)}},d837:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001},on:{cancel:e.onClose,ok:e.submitSbDate}},[a("template",{slot:"title"},[e._v("\n  社保办理受阻\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.visible.sbDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.moment(e.visible.sbDetail.Startime).format("YYYY-MM-DD"))+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"工资",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Jishu)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Bili)+"\n          ")])],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{rules:e.AFormImportRules.remark}],expression:"['Remarks',{rules:AFormImportRules.remark}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],2)},i=[],r=a("b775"),o=a("c32d"),l=a.n(o),n={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[],role:"",type:""},form:this.$form.createForm(this),AFormImportRules:{remark:[{required:!0,message:"请输入办理受阻原因"}]},assetsdetail:{},moment:l.a}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.AFormImportRules.remark[0].required=!1,this.refresh&&this.refresh(),this.visible.type=""},init:function(){},submitSbDate:function(){var e=this,t={};e.form.validateFields(function(a,s){if(!a){if(t=s,t.SBGUID=e.visible.sbDetail.SBGUID,""==s.Remarks)return void e.$message.error("请输入办理受阻原因！");(e.visible.type="fail")&&(t.ORLZGUID=e.visible.sbDetail.ORLZGUID),e.$loading.open(),r["a"].post("/api/Employee/shebao/sbBack",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)})}})}}},c=n,m=(a("1750"),a("2877")),u=Object(m["a"])(c,s,i,!1,null,"03ea3414",null);t["default"]=u.exports},e42a:function(e,t,a){"use strict";var s=a("5b06"),i=a.n(s);i.a},e89c:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001},on:{cancel:e.onClose,ok:e.submitSbDate}},[a("template",{slot:"title"},[e._v("\n  社保回退\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.visible.sbDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.moment(e.visible.sbDetail.Startime).format("YYYY-MM-DD"))+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"工资",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Jishu)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Bili)+"\n          ")])],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{rules:e.AFormImportRules.remark}],expression:"['Remarks',{rules:AFormImportRules.remark}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],2)},i=[],r=a("b775"),o=a("c32d"),l=a.n(o),n={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[],role:""},form:this.$form.createForm(this),AFormImportRules:{remark:[{required:!0,message:"请输入回退原因"}]},assetsdetail:{},moment:l.a}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.AFormImportRules.remark[0].required=!1,this.$parent.refreshfuli()},init:function(){},submitSbDate:function(){var e=this,t={};e.form.validateFields(function(a,s){if(!a){if(t=s,t.SBGUID=e.visible.sbDetail.SBGUID,""==s.Remarks)return void e.$message.error("请输入回退原因！");e.$loading.open(),r["a"].post("/api/Employee/shebao/sbReturnBack",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)})}})}}},c=n,m=(a("826f"),a("2877")),u=Object(m["a"])(c,s,i,!1,null,"4d8164fc",null);t["default"]=u.exports},f03e:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001},on:{cancel:e.onClose,ok:e.submitSbDate}},[a("template",{slot:"title"},[e._v("\n  社保单减\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.visible.sbDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.moment(e.visible.sbDetail.Startime).format("YYYY-MM-DD"))+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"工资",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Jishu)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Bili)+"\n          ")])],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"-13px"},attrs:{label:"社保结束月份",labelCol:{span:5},wrapperCol:{span:15}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["SBEndDate",{rules:e.AFormImportRules.iptInput}],expression:"['SBEndDate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{rules:e.AFormImportRules.remark}],expression:"['Remarks',{rules:AFormImportRules.remark}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],2)},i=[],r=a("b775"),o=a("c32d"),l=a.n(o),n={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[],role:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],remark:[{required:!1,message:"请输入"}]},assetsdetail:{},moment:l.a}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.AFormImportRules.remark[0].required=!1,this.$parent.refreshfuli()},init:function(){},submitSbDate:function(){var e=this,t={};e.form.validateFields(function(a,s){a||(t=s,t.SBGUID=e.visible.sbDetail.SBGUID,t.SBEndDate=l()(s.SBEndDate).format("YYYY-MM-01"),e.$loading.open(),r["a"].post("/api/Employee/shebao/SheBaoDeleted",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})}}},c=n,m=(a("255c"),a("2877")),u=Object(m["a"])(c,s,i,!1,null,"10d2381d",null);t["default"]=u.exports},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);