(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16f0e9dc"],{"02f4":function(e,t,a){var i=a("4588"),r=a("be13");e.exports=function(e){return function(t,a){var o,n,s=String(r(t)),c=i(a),l=s.length;return c<0||c>=l?e?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(n=s.charCodeAt(c+1))<56320||n>57343?e?s.charAt(c):o:e?s.slice(c,c+2):n-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var i=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?i(e,t).length:1)}},"0bfb":function(e,t,a){"use strict";var i=a("cb7c");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1006:function(e,t,a){},2014:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("shebao-search",{attrs:{RLZGUID:e.visible.RLZGUID,YanglaoStatus:e.visible.YanglaoStatus,ShiyeStatus:e.visible.ShiyeStatus,YiliaoStatus:e.visible.YiliaoStatus,GongjijinStatus:e.visible.GongjijinStatus}}),a("fuli",{ref:"fuli",attrs:{comService:e.comService,emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,role:e.visible.role,UserArray:e.visible.UserArray,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refresh:e.init}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-add",{attrs:{ContactClass:e.visible.ContactClass,RSB_ContactType:e.visible.RSB_ContactType,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{connectList:e.refreshConnectList}}),a("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-add",{ref:"bjadd",attrs:{BujiaoTypeArray:e.visible.BujiaoTypeArray,BaseMinNum:e.BaseMinNum,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID},on:{yiliaoList:e.refreshYiliaoList}}),a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},r=[],o=a("b775"),n=a("c32d"),s=a.n(n),c=a("2d6e"),l=a("86ba"),u=a("a5c1"),f=a("633c"),p=a("ac85"),h=a("6e12"),m=a("102c"),d=a("8354"),y={components:{personBase:c["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:f["default"],connectAdd:p["default"],connectList:h["default"],yibaobujiaoAdd:m["default"],yibaobujiaoList:d["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:s.a,comServiceCity:[],comService:{},BaseMinNum:0,hisrlz:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;o["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.BaseMinNum=t.data.shebaoPolicy.BaseMinNum,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},b=y,S=(a("6065"),a("2877")),v=Object(S["a"])(b,i,r,!1,null,"604950de",null);t["default"]=v.exports},"214f":function(e,t,a){"use strict";a("b0c5");var i=a("2aba"),r=a("32e9"),o=a("79e5"),n=a("be13"),s=a("2b4c"),c=a("520a"),l=s("species"),u=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var p=s(e),h=!o(function(){var t={};return t[p]=function(){return 7},7!=""[e](t)}),m=h?!o(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[l]=function(){return a}),a[p](""),!t}):void 0;if(!h||!m||"replace"===e&&!u||"split"===e&&!f){var d=/./[p],y=a(n,p,""[e],function(e,t,a,i,r){return t.exec===c?h&&!r?{done:!0,value:d.call(t,a,i)}:{done:!0,value:e.call(a,t,i)}:{done:!1}}),b=y[0],S=y[1];i(String.prototype,e,b),r(RegExp.prototype,p,2==t?function(e,t){return S.call(e,this,t)}:function(e){return S.call(e,this)})}}},"28a5":function(e,t,a){"use strict";var i=a("aae3"),r=a("cb7c"),o=a("ebd6"),n=a("0390"),s=a("9def"),c=a("5f1b"),l=a("520a"),u=a("79e5"),f=Math.min,p=[].push,h="split",m="length",d="lastIndex",y=4294967295,b=!u(function(){RegExp(y,"y")});a("214f")("split",2,function(e,t,a,u){var S;return S="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[m]||2!="ab"[h](/(?:ab)*/)[m]||4!="."[h](/(.?)(.?)/)[m]||"."[h](/()()/)[m]>1||""[h](/.?/)[m]?function(e,t){var r=String(this);if(void 0===e&&0===t)return[];if(!i(e))return a.call(r,e,t);var o,n,s,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,h=void 0===t?y:t>>>0,b=new RegExp(e.source,u+"g");while(o=l.call(b,r)){if(n=b[d],n>f&&(c.push(r.slice(f,o.index)),o[m]>1&&o.index<r[m]&&p.apply(c,o.slice(1)),s=o[0][m],f=n,c[m]>=h))break;b[d]===o.index&&b[d]++}return f===r[m]?!s&&b.test("")||c.push(""):c.push(r.slice(f)),c[m]>h?c.slice(0,h):c}:"0"[h](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,i){var r=e(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,r,i):S.call(String(r),a,i)},function(e,t){var i=u(S,e,this,t,S!==a);if(i.done)return i.value;var l=r(e),p=String(this),h=o(l,RegExp),m=l.unicode,d=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(b?"y":"g"),v=new h(b?l:"^(?:"+l.source+")",d),C=void 0===t?y:t>>>0;if(0===C)return[];if(0===p.length)return null===c(v,p)?[p]:[];var g=0,T=0,D=[];while(T<p.length){v.lastIndex=b?T:0;var j,R=c(v,b?p:p.slice(T));if(null===R||(j=f(s(v.lastIndex+(b?0:T)),p.length))===g)T=n(p,T,m);else{if(D.push(p.slice(g,T)),D.length===C)return D;for(var w=1;w<=R.length-1;w++)if(D.push(R[w]),D.length===C)return D;T=g=j}}return D.push(p.slice(g)),D}]})},"2d4b":function(e,t,a){"use strict";var i=a("1006"),r=a.n(i);r.a},"35be":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:7,lg:7,xl:8,xxl:5}},[a("a-form-item",{attrs:{label:"派出公司",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.GYSName,callback:function(t){e.$set(e.formSearch,"GYSName",t)},expression:"formSearch.GYSName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:8,xxl:5}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:8,xxl:5}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(t){e.$set(e.formSearch,"emCardID",t)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:8,xxl:4}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(t){e.$set(e.formSearch,"emName",t)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:6,xxl:4}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.init}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.exportConfirm}},[e._v("导出")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"SBGUID"},scopedSlots:e._u([{key:"userName",fn:function(t,i){return a("span",{},[a("a",{on:{click:function(t){return e.detail(i)}}},[e._v(e._s(i["姓名"]))])])}},{key:"sbType",fn:function(t,i){return a("span",{},[e._v(e._s(e.sbType[i.sbType]))])}},{key:"DoType",fn:function(t,i){return a("span",{},[e._v(e._s(e.DoType[i.DoType]))])}},{key:"ActStartime",fn:function(t,i){return a("span",{},[e._v(e._s(i.ActStartime?e.moment(i.ActStartime).format("YYYY-MM-DD"):""))])}},{key:"Userid",fn:function(t,i){return a("span",{},[e._v(e._s(e.UserArray[i.Userid]))])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2),a("modal-detail-kf",{attrs:{show:e.modal.detailkf,refresh:e.pagerefresh}}),a("modal-detail-ddkf",{attrs:{show:e.modal.detailddkf,refresh:e.pagerefresh}}),a("modal-detail-ddkf",{attrs:{show:e.modal.detailddkf,refresh:e.pagerefresh}}),a("export-bill",{attrs:{show:e.modal.exportBill,Role:this.role}})],1)],1)],1)},r=[],o=(a("8e6e"),a("456d"),a("bd86")),n=(a("ac6a"),a("c5f6"),a("b775")),s=(a("61f7"),a("ffff")),c=a("f111"),l=a("2014"),u=a("e667");function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach(function(t){Object(o["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var h=[{title:"派出公司",dataIndex:"GYSName"},{title:"公司名称",dataIndex:"ComName"},{title:"姓名",scopedSlots:{customRender:"userName"}},{title:"身份证号",dataIndex:"身份证号"},{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"实际起做日期",scopedSlots:{customRender:"ActStartime"}},{title:"工资",dataIndex:"Jishu"},{title:"比例",dataIndex:"Bili"},{title:"备注",dataIndex:"Remarks"},{title:"交接",scopedSlots:{customRender:"DoType"}},{title:"交接时间",dataIndex:"DoneTime"},{title:"交接人",scopedSlots:{customRender:"Userid"}}],m={components:{ModalDetailKf:s["default"],ModalDetailDdkf:c["default"],ModalDetailZckf:l["default"],exportBill:u["default"]},props:{role:{type:Number,default:""}},data:function(){return{advanced:!0,columns:h,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,emCardID:"",emName:"",ComName:"",GYSName:"",Type:1},form:this.$form.createForm(this),modifyForm:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],drawer:{},modal:{detailddkf:{show:!1},detailkf:{show:!1},detailzckf:{show:!1},exportBill:{show:!1}},showaddLayer:!1,showmodifyLayer:!1,GYSName:"",moment:moment,UserArray:[],DeptArray:[],cityList:{},ServiceType:{},BillingMode:{},BuJiaoBillingType:{},ServiceTypeArray:[],BillingModeArray:[],BuJiaoBillingTypeArray:[],FlowType:{},FlowTypeArray:[],YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],RuLiZhiStatus:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:[],Deleted:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{}}},mounted:function(){var e=this;e.init()},methods:{init:function(){var e=this;n["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.DeptArray=t.data.Dept,e.cityList=t.data.City)}).catch(function(e){console.log(e)}),n["a"].post("/api/Dim/Enum/GetEnum",{Names:["YanglaoStatus","ShiyeStatus","YiliaoStatus","GongjijinStatus","RuLiZhiStatus","sbType","DoType","ContactClass","RSB_ContactType","BujiaoType","ChargeType","ServiceType","FlowType"]}).then(function(t){0===t.code?(console.log(t),e.YanglaoStatus=t.data.YanglaoStatus,e.ShiyeStatus=t.data.ShiyeStatus,e.YiliaoStatus=t.data.YiliaoStatus,e.GongjijinStatus=t.data.GongjijinStatus,e.RuLiZhiStatus=t.data.RuLiZhiStatus,e.DoTypeArray=t.data.DoType,t.data.RuLiZhiStatus.forEach(function(t,a){e.RuLiZhiStatusObject[t.key]=t.text}),t.data.sbType.forEach(function(t,a){e.sbType[t.key]=t.text}),t.data.DoType.forEach(function(t,a){e.DoType[t.key]=t.text}),e.pagechange(1),e.ContactClass=t.data.ContactClass,e.RSB_ContactType=t.data.RSB_ContactType,e.BujiaoTypeArray=t.data.BujiaoType,t.data.ContactClass.forEach(function(t,a){e.ContactClassObject[t.key]=t.text}),t.data.RSB_ContactType.forEach(function(t,a){e.RSB_ContactTypeObject[t.key]=t.text}),t.data.BujiaoType.forEach(function(t,a){e.BujiaoTypeObject[t.key]=t.text}),t.data.ChargeType.forEach(function(t,a){e.ChargeType[t.key]=t.text}),t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),t.data.FlowType.forEach(function(t,a){e.FlowType[t.key]=t.text})):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=t.formSearch,a.role=t.role,t.$loading.open(),n["a"].post("/api/Employee/shebao/List",t.formSearch).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})},surePolicy:function(e){var t=this;t.modal.modifySbDate={show:!0,sbDetail:e,sbType:t.sbType}},detail:function(e){var t=this,a={UserArray:t.UserArray,YanglaoStatus:t.YanglaoStatus,ShiyeStatus:t.ShiyeStatus,YiliaoStatus:t.YiliaoStatus,GongjijinStatus:t.GongjijinStatus,cityList:t.cityList,RLZGUID:e.RLZGUID,PGUID:e.PGUID,RuLiZhiStatusObject:t.RuLiZhiStatusObject,sbType:t.sbType,DoType:t.DoType,DoTypeArray:t.DoTypeArray,ContactClass:t.ContactClass,RSB_ContactType:t.RSB_ContactType,ContactClassObject:t.ContactClassObject,RSB_ContactTypeObject:t.RSB_ContactTypeObject,BujiaoTypeArray:t.BujiaoTypeArray,BujiaoTypeObject:t.BujiaoTypeObject,ChargeType:t.ChargeType,FlowType:t.FlowType,ServiceType:t.ServiceType};77==t.role?t.modal.detailddkf=p({show:!0,role:77},a):78==t.role?t.modal.detailzckf=p({show:!0,role:77},a):t.modal.detailkf=p({show:!0,role:79},a)},exportConfirm:function(){this.modal.exportBill={show:!0}}}},d=m,y=a("2877"),b=Object(y["a"])(d,i,r,!1,null,null,null);t["default"]=b.exports},"520a":function(e,t,a){"use strict";var i=a("0bfb"),r=RegExp.prototype.exec,o=String.prototype.replace,n=r,s="lastIndex",c=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e[s]||0!==t[s]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(n=function(e){var t,a,n,u,f=this;return l&&(a=new RegExp("^"+f.source+"$(?!\\s)",i.call(f))),c&&(t=f[s]),n=r.call(f,e),c&&n&&(f[s]=f.global?n.index+n[0].length:t),l&&n&&n.length>1&&o.call(n[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(n[u]=void 0)}),n}),e.exports=n},"5f1b":function(e,t,a){"use strict";var i=a("23c6"),r=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var o=a.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},6065:function(e,t,a){"use strict";var i=a("941c"),r=a.n(i);r.a},"61f7":function(e,t,a){"use strict";a("28a5")},"941c":function(e,t,a){},aae3:function(e,t,a){var i=a("d3f4"),r=a("2d95"),o=a("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},b0c5:function(e,t,a){"use strict";var i=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},d6a2:function(e,t,a){"use strict";var i=a("fbe2"),r=a.n(i);r.a},e667:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:500,zIndex:1001,centered:!0},on:{cancel:e.onClose,ok:e.handleSubmit}},[a("template",{slot:"title"},[e._v("\n  社保交接已确认导出\n")]),a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"确认时间范围",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-range-picker",{attrs:{format:"YYYY-MM-DD"},on:{change:e.changeTime}})],1),a("a-form-item",{attrs:{label:"派出公司",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.GYSName,callback:function(t){e.$set(e.formSearch,"GYSName",t)},expression:"formSearch.GYSName"}})],1),a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1),a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(t){e.$set(e.formSearch,"emCardID",t)},expression:"formSearch.emCardID"}})],1),a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(t){e.$set(e.formSearch,"emName",t)},expression:"formSearch.emName"}})],1)],1)],2)},r=[],o=(a("c5f6"),a("c32d")),n=a.n(o),s={props:{show:{type:Object,default:function(){return{show:!1}}},Role:{type:Number,default:""},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,Role:""},form:this.$form.createForm(this),AFormImportRules:{nianyue:[{required:!0,message:"请选择"}]},formSearch:{pageSize:10,current:1,total:0,emCardID:"",emName:"",ComName:"",GYSName:"",BeginDate:"",EndDate:"",Type:1},nianyue:new Date}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},handleSubmit:function(){var e=this,t=document.createElement("a");t.href="/api/Employee/shebao/ExportList?BeginDate="+e.formSearch.BeginDate+"&EndDate="+e.formSearch.EndDate+"&Type="+e.formSearch.Type+"&emCardID="+e.formSearch.emCardID+"&emName="+e.formSearch.emName+"&ComName="+e.formSearch.ComName+"&GYSName="+e.formSearch.GYSName+"&Role="+e.Role,t.click()},changeTime:function(e){this.formSearch.BeginDate=n()(e[0]._d).format("YYYY-MM-DD"),this.formSearch.EndDate=n()(e[1]._d).format("YYYY-MM-DD")}}},c=s,l=(a("d6a2"),a("2877")),u=Object(l["a"])(c,i,r,!1,null,"1378f962",null);t["default"]=u.exports},fbe2:function(e,t,a){},ffff:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1300,footer:null},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  员工详情\n")]),a("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[a("a-tab-pane",{key:"1",attrs:{tab:"员工信息"}},[a("person-base",{attrs:{RuLiZhi:e.RuLiZhi,role:e.visible.role,UserArray:e.visible.UserArray,comServiceCity:e.comServiceCity,ServiceType:e.visible.ServiceType,FlowType:e.visible.FlowType,comService:e.comService,cityList:e.visible.cityList,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("paidan",{attrs:{hisrlz:e.hisrlz,UserArray:e.visible.UserArray,RuLiZhiStatusObject:e.visible.RuLiZhiStatusObject}}),a("fuli",{ref:"fuli",attrs:{comService:e.comService,emSheBaos:e.emSheBaos,sbType:e.visible.sbType,DoType:e.visible.DoType,UserArray:e.visible.UserArray,role:e.visible.role,RuLiZhi:e.RuLiZhi,DoTypeArray:e.visible.DoTypeArray,RLZGUID:e.visible.RLZGUID},on:{refreshparent:e.refresh}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"联系记录","force-render":""}},[a("connect-list",{ref:"connect",attrs:{ContactClassObject:e.visible.ContactClassObject,RSB_ContactTypeObject:e.visible.RSB_ContactTypeObject,UserArray:e.visible.UserArray,PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"医保补缴"}},[a("yibaobujiao-list",{ref:"bujiao",attrs:{PGUID:e.visible.PGUID,RLZGUID:e.visible.RLZGUID,role:e.visible.role,UserArray:e.visible.UserArray,BujiaoTypeObject:e.visible.BujiaoTypeObject,ChargeType:e.visible.ChargeType}})],1)],1)],2)},r=[],o=a("b775"),n=a("c32d"),s=a.n(n),c=a("2d6e"),l=a("86ba"),u=a("a5c1"),f=a("633c"),p=a("ac85"),h=a("6e12"),m=a("102c"),d=a("8354"),y={components:{personBase:c["default"],paidan:l["default"],shebaoSearch:u["default"],fuli:f["default"],connectAdd:p["default"],connectList:h["default"],yibaobujiaoAdd:m["default"],yibaobujiaoList:d["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:function(){}}},data:function(){return{visible:{show:!1,RLZGUID:"",YanglaoStatus:[],ShiyeStatus:[],YiliaoStatus:[],GongjijinStatus:[],cityList:{},UserArray:[],RuLiZhiStatusObject:{},sbType:{},DoType:{},DoTypeArray:{},ContactClass:[],RSB_ContactType:[],ContactClassObject:{},RSB_ContactTypeObject:{},BujiaoTypeArray:[],BujiaoTypeObject:{},ChargeType:{},role:"",ServiceType:{},FlowType:{}},form:this.$form.createForm(this),assetsdetail:{},modal:{connectSubAccount:{show:!1}},emSheBaos:[],RuLiZhi:{},moment:s.a,comServiceCity:[],comService:{},hisrlz:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields(),this.$emit("refresh")},init:function(){var e=this;o["a"].post("/api/Employee/RuLIZhi/Detail",{RLZGUID:e.visible.RLZGUID}).then(function(t){0===t.code&&(e.RuLiZhi=t.data.RuLiZhi,e.emSheBaos=t.data.emSheBaos,e.comServiceCity=t.data.comServiceCity,e.comService=t.data.comService,e.hisrlz=t.data.hisrlz)}).catch(function(e){console.log(e)})},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},refreshYiliaoList:function(){this.$refs.bujiao.yiliaoList()},refreshConnectList:function(){this.$refs.connect.refreshconnectList()}}},b=y,S=(a("2d4b"),a("2877")),v=Object(S["a"])(b,i,r,!1,null,"2e1567f0",null);t["default"]=v.exports}}]);