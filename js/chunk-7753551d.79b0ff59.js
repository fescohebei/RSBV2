(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7753551d","chunk-1bb9c3f0","chunk-53f00e28","chunk-6e55e3f0","chunk-2f07be80"],{"10ad":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001},on:{cancel:e.onClose,ok:e.submitSbDate}},[a("template",{slot:"title"},[e._v("\n  社保信息\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.visible.sbDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.moment(e.visible.sbDetail.Startime).format("YYYY-MM-DD"))+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"基数",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Jishu)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Bili)+"\n          ")])],1),"77"!=e.visible.role?a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"建议开始月份",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["CanStartDate",{rules:e.AFormImportRules.iptInput}],expression:"['CanStartDate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"}})],1)],1):e._e(),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"操作类型",labelCol:{span:9},wrapperCol:{span:15}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["DoType",{rules:e.AFormImportRules.iptSelect}],expression:"['DoType',{rules:AFormImportRules.iptSelect}]"}],attrs:{allowClear:!0},on:{change:e.controlChange}},e._l(e.visible.DoTypeArray,function(t){return a("a-select-option",{key:t.key,attrs:{disabled:"30"==t.key}},[e._v(e._s(t.text))])}),1)],1)],1),"77"==e.visible.role?a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"操作月",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["FirstBillMonth",{rules:e.AFormImportRules.iptInput}],expression:"['FirstBillMonth',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"}})],1)],1):e._e(),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{rules:e.AFormImportRules.remark}],expression:"['Remarks',{rules:AFormImportRules.remark}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],2)},r=[],o=a("b775"),n=a("c32d"),i=a.n(n),l={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[],role:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],remark:[{required:!1,message:"请输入"}]},assetsdetail:{},moment:i.a}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.AFormImportRules.remark[0].required=!1,this.$parent.refreshfuli()},init:function(){},submitSbDate:function(){var e=this,t={};e.form.validateFields(function(a,s){if(!a){if(t=s,t.SBGUID=e.visible.sbDetail.SBGUID,t.CanStartDate=i()(s.CanStartDate).format("YYYY-MM-01"),"77"==e.visible.role&&(t.FirstBillMonth=i()(s.FirstBillMonth).format("YYYY-MM-01")),30==s.DoType&&""==s.Remarks)return void e.$message.error("请输入备注！");e.$loading.open(),o["a"].post("/api/Employee/shebao/edit",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)})}})},controlChange:function(e){this.AFormImportRules.remark[0].required=30==e}}},c=l,p=(a("2c90"),a("2877")),u=Object(p["a"])(c,s,r,!1,null,"927668a2",null);t["default"]=u.exports},"2b72":function(e,t,a){},"2c90":function(e,t,a){"use strict";var s=a("735b"),r=a.n(s);r.a},"5dbc":function(e,t,a){var s=a("d3f4"),r=a("8b97").set;e.exports=function(e,t,a){var o,n=t.constructor;return n!==a&&"function"==typeof n&&(o=n.prototype)!==a.prototype&&s(o)&&r&&r(e,o),e}},"633c":function(e,t,a){"use strict";a.r(t);var s,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tab-title"},[e._v("福利")]),a("a-table",{attrs:{columns:e.columnshebao,dataSource:e.emSheBaoList,pagination:!1,size:"middle",rowKey:"SBGUID"},scopedSlots:e._u([{key:"sbType",fn:function(t,s){return a("span",{},[e._v(e._s(e.sbType[s.sbType]))])}},{key:"DoType",fn:function(t,s){return a("span",{},[e._v(e._s(e.DoType[s.DoType]))])}},{key:"status",fn:function(t,s){return a("span",{},[e._v(e._s(1==s.Deleted?"已减员":"")+" "+e._s(null==s.Confirm?"":e.Confirm[s.Confirm])+" "+e._s(1==s.Done?"已交接":""))])}},{key:"Startime",fn:function(t,s){return a("span",{},[e._v(e._s(s.Startime?e.moment(s.Startime).format("YYYY-MM-DD"):""))])}},{key:"ActStartime",fn:function(t,s){return a("span",{},[e._v(e._s(s.ActStartime?e.moment(s.ActStartime).format("YYYY-MM-DD"):""))])}},{key:"Remarks",fn:function(t,s){return[a("a-tooltip",[a("template",{slot:"title"},[e._v("\n            "+e._s(s.Remarks)+"\n          ")]),a("div",{staticClass:"remark-text ellipsis"},[e._v(e._s(s.Remarks))])],2)]}},{key:"Userid",fn:function(t,s){return a("span",{},[e._v(e._s(e.UserArray[s.Userid]))])}},{key:"action",fn:function(t,s){return a("span",{},[a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多\n            "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e.RuLiZhi.Status<50?[0==s.Done&&0==s.Deleted&&null==s.DoType&&("10"==e.RuLiZhi.FlowType&&"76"==e.role&&1==e.cando||"10"!=e.RuLiZhi.FlowType&&"77"==e.role||"78"==e.role)?[a("a-menu-item",{on:{click:function(t){return e.modifypdDate(s)}}},[e._v("操作")]),a("a-menu-item",{on:{click:function(t){return e.sbBack(s)}}},[e._v("办理受阻")])]:e._e(),"79"==e.role&&"30"==s.DoType?a("a-menu-item",{on:{click:function(t){return e.backoff(s)}}},[e._v("回退")]):e._e()]:e._e(),"79"==e.role&&"30"==s.DoType?a("a-menu-item",{on:{click:function(t){return e.sbDanjian(s)}}},[e._v("单减")]):e._e()],2)],1)],1)}}])}),a("modal-sb-date",{ref:"sbdate",attrs:{show:e.modal.modifySbDate},on:{refresh:e.refreshfuli}}),a("modal-sb-back",{ref:"sbback",attrs:{show:e.modal.sbback}}),a("modal-sb-danjian",{ref:"sbdanjian",attrs:{show:e.modal.sbdanjian},on:{refresh:e.refreshfuli}}),a("modal-back-off",{ref:"backoff",attrs:{show:e.modal.backoff}})],1)},o=[],n=(a("ac6a"),a("bd86")),i=(a("c5f6"),a("c32d")),l=a.n(i),c=a("10ad"),p=a("d837"),u=a("f03e"),m=a("e89c"),f=a("b775"),b=[{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"开始日期",scopedSlots:{customRender:"Startime"}},{title:"实际开始月份",scopedSlots:{customRender:"ActStartime"}},{title:"基数",dataIndex:"Jishu"},{title:"比例",dataIndex:"Bili"},{title:"备注",scopedSlots:{customRender:"Remarks"}},{title:"交接",scopedSlots:{customRender:"DoType"}},{title:"交接时间",dataIndex:"DoneTime"},{title:"交接人",scopedSlots:{customRender:"Userid"}},{title:"状态",scopedSlots:{customRender:"status"}},{title:"操作",scopedSlots:{customRender:"action"}}],d={components:{ModalSbDate:c["default"],ModalSbBack:p["default"],ModalSbDanjian:u["default"],ModalBackOff:m["default"]},props:(s={RLZGUID:{type:String,default:""},emSheBaos:{type:Array,default:function(){return[]}},RuLiZhi:{type:Object,default:function(){return{}}},sbType:{type:Object,default:function(){return{}}},DoType:{type:Object,default:function(){return{}}},UserArray:{type:Object,default:function(){return{}}},DoTypeArray:{type:Array,default:function(){return[]}},refresh:{type:Function,default:function(){}},role:{type:Number,default:0}},Object(n["a"])(s,"RLZGUID",{type:String,default:""}),Object(n["a"])(s,"cando",{type:Boolean,default:!1}),s),data:function(){return{columnshebao:b,moment:l.a,modal:{modifySbDate:{show:!1},sbback:{show:!1},sbdanjian:{show:!1},backoff:{show:!1}},Confirm:{},emSheBaoList:[]}},created:function(){this.init()},methods:{init:function(){var e=this;console.log(e.role),f["a"].post("/api/Dim/Enum/GetEnum",{Names:["Confirm"]}).then(function(t){0===t.code?t.data.Confirm.forEach(function(t,a){e.Confirm[t.key]=t.text}):e.$message.error(t.msg)}).catch(function(e){console.log(e)}),e.refreshfuli()},saveSbSearch:function(){var e=this,t={};e.comForm.validateFields(function(a,s){a||(console.log(s),t=s,t.RLZGUID=e.RLZGUID,e.$loading.open(),f["a"].post("/api/Employee/SheBaoQuery/add",t).then(function(t){e.$loading.close(),0===t.code?e.$message.success(t.msg):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})},modifypdDate:function(e){var t=this;t.modal.modifySbDate={show:!0,sbDetail:e,sbType:t.sbType,DoTypeArray:t.DoTypeArray,role:t.role}},refreshfuli:function(){var e=this;f["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.RLZGUID}).then(function(t){0===t.code&&(e.emSheBaoList=t.data.emSheBaos)}).catch(function(e){console.log(e)})},sbBack:function(e){var t=this;t.modal.sbback={show:!0,sbDetail:e,sbType:t.sbType,DoTypeArray:t.DoTypeArray,role:t.role}},backoff:function(e){var t=this;t.modal.backoff={show:!0,sbDetail:e,sbType:t.sbType,DoTypeArray:t.DoTypeArray,role:t.role}},sbDanjian:function(e){var t=this;t.modal.sbdanjian={show:!0,sbDetail:e,sbType:t.sbType,DoTypeArray:t.DoTypeArray,role:t.role}}}},h=d,v=(a("cf9a"),a("2877")),y=Object(v["a"])(h,r,o,!1,null,"7b78a735",null);t["default"]=y.exports},"735b":function(e,t,a){},"8b97":function(e,t,a){var s=a("d3f4"),r=a("cb7c"),o=function(e,t){if(r(e),!s(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,s){try{s=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),s(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return o(e,a),t?e.__proto__=a:s(e,a),e}}({},!1):void 0),check:o}},aa77:function(e,t,a){var s=a("5ca1"),r=a("be13"),o=a("79e5"),n=a("fdef"),i="["+n+"]",l="​",c=RegExp("^"+i+i+"*"),p=RegExp(i+i+"*$"),u=function(e,t,a){var r={},i=o(function(){return!!n[e]()||l[e]()!=l}),c=r[e]=i?t(m):n[e];a&&(r[a]=c),s(s.P+s.F*i,"String",r)},m=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(p,"")),e};e.exports=u},b082:function(e,t,a){},bee0:function(e,t,a){},c5f6:function(e,t,a){"use strict";var s=a("7726"),r=a("69a8"),o=a("2d95"),n=a("5dbc"),i=a("6a99"),l=a("79e5"),c=a("9093").f,p=a("11e9").f,u=a("86cc").f,m=a("aa77").trim,f="Number",b=s[f],d=b,h=b.prototype,v=o(a("2aeb")(h))==f,y="trim"in String.prototype,D=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){t=y?t.trim():m(t,3);var a,s,r,o=t.charCodeAt(0);if(43===o||45===o){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+t}for(var n,l=t.slice(2),c=0,p=l.length;c<p;c++)if(n=l.charCodeAt(c),n<48||n>r)return NaN;return parseInt(l,s)}}return+t};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof b&&(v?l(function(){h.valueOf.call(a)}):o(a)!=f)?n(new d(D(t)),a,b):D(t)};for(var w,_=a("9e1e")?c(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;_.length>C;C++)r(d,w=_[C])&&!r(b,w)&&u(b,w,p(d,w));b.prototype=h,h.constructor=b,a("2aba")(s,f,b)}},cf9a:function(e,t,a){"use strict";var s=a("bee0"),r=a.n(s);r.a},d837:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001},on:{cancel:e.onClose,ok:e.submitSbDate}},[a("template",{slot:"title"},[e._v("\n  社保办理受阻\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.visible.sbDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.moment(e.visible.sbDetail.Startime).format("YYYY-MM-DD"))+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"基数",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Jishu)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Bili)+"\n          ")])],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{rules:e.AFormImportRules.remark}],expression:"['Remarks',{rules:AFormImportRules.remark}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],2)},r=[],o=a("b775"),n=a("c32d"),i=a.n(n),l={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[],role:""},form:this.$form.createForm(this),AFormImportRules:{remark:[{required:!0,message:"请输入办理受阻原因"}]},assetsdetail:{},moment:i.a}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.AFormImportRules.remark[0].required=!1,this.$parent.refreshfuli()},init:function(){},submitSbDate:function(){var e=this,t={};e.form.validateFields(function(a,s){if(!a){if(t=s,t.SBGUID=e.visible.sbDetail.SBGUID,""==s.Remarks)return void e.$message.error("请输入办理受阻原因！");e.$loading.open(),o["a"].post("/api/Employee/shebao/sbBack",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)})}})}}},c=l,p=(a("eb5d"),a("2877")),u=Object(p["a"])(c,s,r,!1,null,"1d254222",null);t["default"]=u.exports},d9f4:function(e,t,a){},e654:function(e,t,a){"use strict";var s=a("d9f4"),r=a.n(s);r.a},e89c:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001},on:{cancel:e.onClose,ok:e.submitSbDate}},[a("template",{slot:"title"},[e._v("\n  社保回退\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.visible.sbDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.moment(e.visible.sbDetail.Startime).format("YYYY-MM-DD"))+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"基数",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Jishu)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Bili)+"\n          ")])],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"12px"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{rules:e.AFormImportRules.remark}],expression:"['Remarks',{rules:AFormImportRules.remark}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],2)},r=[],o=a("b775"),n=a("c32d"),i=a.n(n),l={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[],role:""},form:this.$form.createForm(this),AFormImportRules:{remark:[{required:!0,message:"请输入回退原因"}]},assetsdetail:{},moment:i.a}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.AFormImportRules.remark[0].required=!1,this.$parent.refreshfuli()},init:function(){},submitSbDate:function(){var e=this,t={};e.form.validateFields(function(a,s){if(!a){if(t=s,t.SBGUID=e.visible.sbDetail.SBGUID,""==s.Remarks)return void e.$message.error("请输入回退原因！");e.$loading.open(),o["a"].post("/api/Employee/shebao/sbReturnBack",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)})}})}}},c=l,p=(a("fc4c"),a("2877")),u=Object(p["a"])(c,s,r,!1,null,"481a250e",null);t["default"]=u.exports},eb5d:function(e,t,a){"use strict";var s=a("2b72"),r=a.n(s);r.a},f03e:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001},on:{cancel:e.onClose,ok:e.submitSbDate}},[a("template",{slot:"title"},[e._v("\n  社保单减\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"险种名称",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbType[e.visible.sbDetail.sbType])+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"开始日期",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.moment(e.visible.sbDetail.Startime).format("YYYY-MM-DD"))+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"基数",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Jishu)+"\n          ")])],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"比例",labelCol:{span:9},wrapperCol:{span:15}}},[e._v("\n            "+e._s(e.visible.sbDetail.Bili)+"\n          ")])],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"-13px"},attrs:{label:"社保结束月份",labelCol:{span:5},wrapperCol:{span:15}}},[a("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["SBEndDate",{rules:e.AFormImportRules.iptInput}],expression:"['SBEndDate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"}})],1)],1)],1)],1)],2)},r=[],o=a("b775"),n=a("c32d"),i=a.n(n),l={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[],role:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],remark:[{required:!1,message:"请输入"}]},assetsdetail:{},moment:i.a}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.AFormImportRules.remark[0].required=!1,this.$parent.refreshfuli()},init:function(){},submitSbDate:function(){var e=this,t={};e.form.validateFields(function(a,s){a||(t=s,t.SBGUID=e.visible.sbDetail.SBGUID,t.SBEndDate=i()(s.SBEndDate).format("YYYY-MM-01"),e.$loading.open(),o["a"].post("/api/Employee/shebao/SheBaoDeleted",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.onClose()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})}}},c=l,p=(a("e654"),a("2877")),u=Object(p["a"])(c,s,r,!1,null,"a638aa02",null);t["default"]=u.exports},fc4c:function(e,t,a){"use strict";var s=a("b082"),r=a.n(s);r.a},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);