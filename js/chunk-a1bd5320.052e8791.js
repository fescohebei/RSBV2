(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1bd5320","chunk-bfa39dd2"],{"02f4":function(e,t,a){var i=a("4588"),o=a("be13");e.exports=function(e){return function(t,a){var r,s,n=String(o(t)),c=i(a),l=n.length;return c<0||c>=l?e?"":void 0:(r=n.charCodeAt(c),r<55296||r>56319||c+1===l||(s=n.charCodeAt(c+1))<56320||s>57343?e?n.charAt(c):r:e?n.slice(c,c+2):s-56320+(r-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var i=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?i(e,t).length:1)}},"0bfb":function(e,t,a){"use strict";var i=a("cb7c");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2014:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("shebao-search",{attrs:{RLZGUID:e.visible.RLZGUID,YanglaoStatus:e.visible.YanglaoStatus,ShiyeStatus:e.visible.ShiyeStatus,YiliaoStatus:e.visible.YiliaoStatus,GongjijinStatus:e.visible.GongjijinStatus}}),a("fuli",{ref:"fuli",attrs:{emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,role:e.visible.role,UserArray:e.visible.UserArray,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refresh:e.init}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-add",{attrs:{ContactClass:e.visible.ContactClass,RSB_ContactType:e.visible.RSB_ContactType,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{connectList:e.refreshConnectList}}),a("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-add",{ref:"bjadd",attrs:{BujiaoTypeArray:e.visible.BujiaoTypeArray,BaseMinNum:e.BaseMinNum,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{yiliaoList:e.refreshYiliaoList}}),a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],r=a("b775"),s=a("c32d"),n=a.n(s),c=a("2d6e"),l=a("86ba"),u=a("a5c1"),p=a("633c"),f=a("ac85"),h=a("6e12"),d=a("102c"),b=a("8354"),y={components:{personBase:c["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:p["default"],connectAdd:f["default"],connectList:h["default"],yibaobujiaoAdd:d["default"],yibaobujiaoList:b["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:n.a,comServiceCity:[],comService:{},BaseMinNum:0,hisrlz:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;r["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.BaseMinNum=t.data.shebaoPolicy.BaseMinNum,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=y,v=(a("badd"),a("2877")),S=Object(v["a"])(m,i,o,!1,null,"ccec1264",null);t["default"]=S.exports},"214f":function(e,t,a){"use strict";a("b0c5");var i=a("2aba"),o=a("32e9"),r=a("79e5"),s=a("be13"),n=a("2b4c"),c=a("520a"),l=n("species"),u=!r(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var f=n(e),h=!r(function(){var t={};return t[f]=function(){return 7},7!=""[e](t)}),d=h?!r(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[l]=function(){return a}),a[f](""),!t}):void 0;if(!h||!d||"replace"===e&&!u||"split"===e&&!p){var b=/./[f],y=a(s,f,""[e],function(e,t,a,i,o){return t.exec===c?h&&!o?{done:!0,value:b.call(t,a,i)}:{done:!0,value:e.call(a,t,i)}:{done:!1}}),m=y[0],v=y[1];i(String.prototype,e,m),o(RegExp.prototype,f,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},"28a5":function(e,t,a){"use strict";var i=a("aae3"),o=a("cb7c"),r=a("ebd6"),s=a("0390"),n=a("9def"),c=a("5f1b"),l=a("520a"),u=a("79e5"),p=Math.min,f=[].push,h="split",d="length",b="lastIndex",y=4294967295,m=!u(function(){RegExp(y,"y")});a("214f")("split",2,function(e,t,a,u){var v;return v="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[d]||2!="ab"[h](/(?:ab)*/)[d]||4!="."[h](/(.?)(.?)/)[d]||"."[h](/()()/)[d]>1||""[h](/.?/)[d]?function(e,t){var o=String(this);if(void 0===e&&0===t)return[];if(!i(e))return a.call(o,e,t);var r,s,n,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,h=void 0===t?y:t>>>0,m=new RegExp(e.source,u+"g");while(r=l.call(m,o)){if(s=m[b],s>p&&(c.push(o.slice(p,r.index)),r[d]>1&&r.index<o[d]&&f.apply(c,r.slice(1)),n=r[0][d],p=s,c[d]>=h))break;m[b]===r.index&&m[b]++}return p===o[d]?!n&&m.test("")||c.push(""):c.push(o.slice(p)),c[d]>h?c.slice(0,h):c}:"0"[h](void 0,0)[d]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,i){var o=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,o,i):v.call(String(o),a,i)},function(e,t){var i=u(v,e,this,t,v!==a);if(i.done)return i.value;var l=o(e),f=String(this),h=r(l,RegExp),d=l.unicode,b=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(m?"y":"g"),S=new h(m?l:"^(?:"+l.source+")",b),g=void 0===t?y:t>>>0;if(0===g)return[];if(0===f.length)return null===c(S,f)?[f]:[];var C=0,T=0,R=[];while(T<f.length){S.lastIndex=m?T:0;var j,D=c(S,m?f:f.slice(T));if(null===D||(j=p(n(S.lastIndex+(m?0:T)),f.length))===C)T=s(f,T,d);else{if(R.push(f.slice(C,T)),R.length===g)return R;for(var w=1;w<=D.length-1;w++)if(R.push(D[w]),R.length===g)return R;T=C=j}}return R.push(f.slice(C)),R}]})},"311f":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  提取\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",{staticStyle:{"margin-bottom":"50px"}},[a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{margin:"20px 0 0"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.Remarks,callback:function(t){e.Remarks=t},expression:"Remarks"}})],1)],1)],1)],1),a("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:function(t){return e.Refuse()}}},[e._v("拒绝")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return e.Pass()}}},[e._v("提取")])],1)],2)},o=[],r=a("b775"),s=a("c32d"),n=a.n(s),c={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:{}},form:this.$form.createForm(this),orderDetail:{},modal:{},dataSource:[],moment:n.a,Remarks:""}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail={},this.Remarks="",this.form.resetFields()},Pass:function(){var e=this;e.$confirm({title:"确认提取?",content:"点击确定确认。",onOk:function(){r["a"].post("/api/Employee/SheBaoApproval/Pass",{AppGUID:e.visible.orderDetail.AppGUID,Reason:e.Remarks}).then(function(t){0===t.code?(e.$message.success(t.msg),e.refresh(),e.onClose()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},Refuse:function(){var e=this;e.Remarks?e.$confirm({title:"确认拒绝?",content:"点击确定确认。",onOk:function(){r["a"].post("/api/Employee/SheBaoApproval/Refuse",{AppGUID:e.visible.orderDetail.AppGUID,Reason:e.Remarks}).then(function(t){0===t.code?(console,e.$message.success(t.msg),e.refresh(),e.onClose()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}}):e.$message.error("请输入原因！")}}},l=c,u=(a("aa34"),a("2877")),p=Object(u["a"])(l,i,o,!1,null,"2c9b61ef",null);t["default"]=p.exports},"520a":function(e,t,a){"use strict";var i=a("0bfb"),o=RegExp.prototype.exec,r=String.prototype.replace,s=o,n="lastIndex",c=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e[n]||0!==t[n]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(s=function(e){var t,a,s,u,p=this;return l&&(a=new RegExp("^"+p.source+"$(?!\\s)",i.call(p))),c&&(t=p[n]),s=o.call(p,e),c&&s&&(p[n]=p.global?s.index+s[0].length:t),l&&s&&s.length>1&&r.call(s[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),e.exports=s},"5f1b":function(e,t,a){"use strict";var i=a("23c6"),o=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var r=a.call(e,t);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"61f7":function(e,t,a){"use strict";a("28a5")},a3af:function(e,t,a){},aa34:function(e,t,a){"use strict";var i=a("b64b"),o=a.n(i);o.a},aae3:function(e,t,a){var i=a("d3f4"),o=a("2d95"),r=a("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==o(e))}},b0c5:function(e,t,a){"use strict";var i=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},b64b:function(e,t,a){},badd:function(e,t,a){"use strict";var i=a("fe30"),o=a.n(i);o.a},d2a2:function(e,t,a){"use strict";var i=a("a3af"),o=a.n(i);o.a},f52f:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:4,lg:4,xl:6,xxl:4}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:6,xxl:4}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(t){e.$set(e.formSearch,"emCardID",t)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:4,xxl:4}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(t){e.$set(e.formSearch,"emName",t)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:5,xxl:4}},[a("a-form-item",{attrs:{label:"处理结果",labelCol:{span:8},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!1},model:{value:e.formSearch.doType,callback:function(t){e.$set(e.formSearch,"doType",t)},expression:"formSearch.doType"}},[a("a-select-option",{key:"0"},[e._v("全部")]),a("a-select-option",{key:"1"},[e._v("未处理")]),a("a-select-option",{key:"2"},[e._v("已处理")])],1)],1)],1),a("a-col",{attrs:{md:4,lg:4,xl:3,xxl:4}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.init}},[e._v("查询")]),79==e.role?a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.exportConfirm}},[e._v("查询并导出")]):e._e()],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"AppGUID"},scopedSlots:e._u([{key:"userName",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.detail(i)}}},[e._v(e._s(i["姓名"]))])])}},{key:"sbType",fn:function(t,i){return a("span",{},[e._v(e._s(e.sbType[i.sbType]))])}},{key:"b_Status",fn:function(t,i){return a("span",{},[e._v(e._s(e.SBApprovalStatus[i.b_Status]))])}},{key:"b_ActStartime",fn:function(t,i){return a("span",{},[e._v(e._s(i.b_ActStartime?e.moment(i.b_ActStartime).format("YYYY-MM-DD"):""))])}},{key:"b_FirstBillMonth",fn:function(t,i){return a("span",{},[e._v(e._s(i.b_FirstBillMonth?e.moment(i.b_FirstBillMonth).format("YYYY-MM-DD"):""))])}},{key:"b_CreateUserID",fn:function(t,i){return a("span",{},[e._v(e._s(e.UserArray[i.b_CreateUserID]))])}},{key:"b_ApprovalUserID",fn:function(t,i){return a("span",{},[e._v(e._s(e.UserArray[i.b_ApprovalUserID]))])}},{key:"action",fn:function(t,i){return a("span",{staticStyle:{"text-align":"right"}},[0===i.b_Status&&98===e.role?a("a",{on:{click:function(t){return e.detailaudit(i)}}},[e._v("提取")]):e._e(),0===i.b_Status&&77===e.role?a("a",{on:{click:function(t){return e.Cancel(i)}}},[e._v("取消")]):e._e()])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("modal-detail-kf",{attrs:{show:e.modal.detailkf,refresh:e.pagerefresh}}),a("modal-detail-ddkf",{attrs:{show:e.modal.detailddkf,refresh:e.pagerefresh}}),a("modal-detail-ddkf",{attrs:{show:e.modal.detailddkf,refresh:e.pagerefresh}}),a("modal-detail-audit",{attrs:{show:e.modal.detailaudit,refresh:e.pagerefresh}})],1)],1)],1)},o=[],r=(a("8e6e"),a("456d"),a("bd86")),s=(a("ac6a"),a("c5f6"),a("b775")),n=(a("61f7"),a("ffff")),c=a("f111"),l=a("2014"),u=a("311f");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach(function(t){Object(r["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var h=[{title:"姓名",scopedSlots:{customRender:"userName"}},{title:"身份证号",dataIndex:"身份证号"},{title:"公司名称",dataIndex:"ComName"},{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"实际起做日期",scopedSlots:{customRender:"b_ActStartime"}},{title:"运行操作月",scopedSlots:{customRender:"b_FirstBillMonth"}},{title:"申请备注",dataIndex:"b_Remarks"},{title:"审核状态",scopedSlots:{customRender:"b_Status"}},{title:"申请时间",dataIndex:"b_CreateTime"},{title:"申请人",scopedSlots:{customRender:"b_CreateUserID"}},{title:"提取时间",dataIndex:"b_ApprovalTime"},{title:"提取人",scopedSlots:{customRender:"b_ApprovalUserID"}},{title:"提取备注",dataIndex:"b_ApprovalContent"},{title:"操作",scopedSlots:{customRender:"action"}}],d={components:{ModalDetailKf:n["default"],ModalDetailDdkf:c["default"],ModalDetailZckf:l["default"],ModalDetailAudit:u["default"]},props:{role:{type:Number,default:""}},data:function(){return{advanced:!0,columns:h,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,emCardID:"",emName:"",ComName:"",doType:"1",Type:1},form:this.$form.createForm(this),modifyForm:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],drawer:{},modal:{detailddkf:{show:!1},detailkf:{show:!1},detailzckf:{show:!1},detailaudit:{show:!1}},showaddLayer:!1,showmodifyLayer:!1,GYSName:"",moment:moment,UserArray:[],DeptArray:[],cityList:{},ServiceType:{},BillingMode:{},BuJiaoBillingType:{},ServiceTypeArray:[],BillingModeArray:[],BuJiaoBillingTypeArray:[],FlowType:{},FlowTypeArray:[],YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],RuLiZhiStatus:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:[],SBApprovalStatus:{},SBApprovalStatusArray:[],Deleted:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{}}},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;s["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.DeptArray=t.data.Dept,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),s["a"].post("/api/Dim/Enum/GetEnum",{Names:["YanglaoStatus","ShiyeStatus","YiliaoStatus","GongjijinStatus","RuLiZhiStatus","sbType","DoType","ContactClass","RSB_ContactType","BujiaoType","ChargeType","ServiceType","FlowType","SBApprovalStatus"]}).then(function(t){0===t.code?(console.log(t),e.YanglaoStatus=t.data.YanglaoStatus,e.ShiyeStatus=t.data.ShiyeStatus,e.YiliaoStatus=t.data.YiliaoStatus,e.GongjijinStatus=t.data.GongjijinStatus,e.RuLiZhiStatus=t.data.RuLiZhiStatus,e.DoTypeArray=t.data.DoType,e.SBApprovalStatusArray=t.data.SBApprovalStatus,t.data.RuLiZhiStatus.forEach(function(t,a){e.RuLiZhiStatusObject[t.key]=t.text}),t.data.sbType.forEach(function(t,a){e.sbType[t.key]=t.text}),t.data.DoType.forEach(function(t,a){e.DoType[t.key]=t.text}),t.data.SBApprovalStatus.forEach(function(t,a){e.SBApprovalStatus[t.key]=t.text}),e.pagechange(1),e.ContactClass=t.data.ContactClass,e.RSB_ContactType=t.data.RSB_ContactType,e.BujiaoTypeArray=t.data.BujiaoType,t.data.ContactClass.forEach(function(t,a){e.ContactClassObject[t.key]=t.text}),t.data.RSB_ContactType.forEach(function(t,a){e.RSB_ContactTypeObject[t.key]=t.text}),t.data.BujiaoType.forEach(function(t,a){e.BujiaoTypeObject[t.key]=t.text}),t.data.ChargeType.forEach(function(t,a){e.ChargeType[t.key]=t.text}),t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),t.data.FlowType.forEach(function(t,a){e.FlowType[t.key]=t.text})):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=t.formSearch,a.role=t.role,t.$loading.open(),s["a"].post("/api/Employee/SheBaoApproval/List",t.formSearch).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},surePolicy:function(e){var t=this;t.modal.modifySbDate={show:!0,sbDetail:e,sbType:t.sbType}},detail:function(e){var t=this,a={UserArray:t.UserArray,YanglaoStatus:t.YanglaoStatus,ShiyeStatus:t.ShiyeStatus,YiliaoStatus:t.YiliaoStatus,GongjijinStatus:t.GongjijinStatus,cityList:t.cityList,RLZGUID:e.RLZGUID,PGUID:e.PGUID,RuLiZhiStatusObject:t.RuLiZhiStatusObject,sbType:t.sbType,DoType:t.DoType,DoTypeArray:t.DoTypeArray,ContactClass:t.ContactClass,RSB_ContactType:t.RSB_ContactType,ContactClassObject:t.ContactClassObject,RSB_ContactTypeObject:t.RSB_ContactTypeObject,BujiaoTypeArray:t.BujiaoTypeArray,BujiaoTypeObject:t.BujiaoTypeObject,ChargeType:t.ChargeType,FlowType:t.FlowType,ServiceType:t.ServiceType};77==t.role?t.modal.detailddkf=f({show:!0,role:77},a):78==t.role?t.modal.detailzckf=f({show:!0,role:77},a):t.modal.detailkf=f({show:!0,role:79},a)},detailaudit:function(e){this.modal.detailaudit={show:!0,orderDetail:e}},Cancel:function(e){var t=this;t.$confirm({title:"确认取消?",content:"点击确定确认。",onOk:function(){s["a"].post("/api/Employee/SheBaoApproval/Cancel",{AppGUID:e.AppGUID}).then(function(e){0===e.code?(console,t.$message.success(e.msg),t.pagerefresh()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})}}},b=d,y=a("2877"),m=Object(y["a"])(b,i,o,!1,null,null,null);t["default"]=m.exports},fe30:function(e,t,a){},ffff:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("fuli",{ref:"fuli",attrs:{emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,UserArray:e.visible.UserArray,role:e.visible.role,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refreshparent:e.refresh}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},o=[],r=a("b775"),s=a("c32d"),n=a.n(s),c=a("2d6e"),l=a("86ba"),u=a("a5c1"),p=a("633c"),f=a("ac85"),h=a("6e12"),d=a("102c"),b=a("8354"),y={components:{personBase:c["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:p["default"],connectAdd:f["default"],connectList:h["default"],yibaobujiaoAdd:d["default"],yibaobujiaoList:b["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:n.a,comServiceCity:[],comService:{},hisrlz:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;r["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},m=y,v=(a("d2a2"),a("2877")),S=Object(v["a"])(m,i,o,!1,null,"546eb913",null);t["default"]=S.exports}}]);