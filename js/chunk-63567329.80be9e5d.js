(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63567329","chunk-33cdd2fa","chunk-50a18f0a"],{"02f4":function(t,e,a){var r=a("4588"),o=a("be13");t.exports=function(t){return function(e,a){var n,i,s=String(o(e)),l=r(a),c=s.length;return l<0||l>=c?t?"":void 0:(n=s.charCodeAt(l),n<55296||n>56319||l+1===c||(i=s.charCodeAt(l+1))<56320||i>57343?t?s.charAt(l):n:t?s.slice(l,l+2):i-56320+(n-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var r=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},"0bfb":function(t,e,a){"use strict";var r=a("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0db2":function(t,e,a){"use strict";var r=a("81cb"),o=a.n(r);o.a},"1d26":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:900,footer:!1},on:{cancel:t.onClose}},[a("template",{slot:"title"},[t._v("\n  "+t._s("1"==t.visible.ModelType?"详情":"审核")+"\n")]),a("div",{staticClass:"tab-title"},[t._v("基本信息")]),a("table",{staticClass:"detail-table",attrs:{border:"1"}},[a("tr",[a("td",[t._v("员工姓名:")]),a("td",[t._v(t._s(t.visible.orderDetail.PName))]),a("td",[t._v("身份证号:")]),a("td",[t._v(t._s(t.visible.orderDetail.IDCard)),a("span",{class:t.ageBeyond?"red":""},[t._v("("+t._s(t.age+"岁")+")")])]),a("td",[t._v("参保城市:")]),a("td",[t._v(t._s(t.city[t.visible.orderDetail.CityCode]))])]),a("tr",[a("td",[t._v("联系方式:")]),a("td",[t._v(t._s(t.visible.orderDetail.Mobile))]),a("td",[t._v("邮箱:")]),a("td",[t._v(t._s(t.visible.orderDetail.Email))]),a("td",[t._v("派单日期:")]),a("td",[t._v(t._s(t.visible.orderDetail.PaiDanDate))])]),a("tr",[a("td",[t._v("公司名称:")]),a("td",{attrs:{colspan:"5"}},[t._v(t._s(t.visible.orderDetail.ComName))])]),a("tr",[a("td",[t._v("备注:")]),a("td",{attrs:{colspan:"5"}},[t._v(t._s(t.visible.orderDetail.Remarks))])]),"0"!=t.visible.orderDetail.ApprovalStatus?a("tr",[a("td",[t._v("审核备注:")]),a("td",{attrs:{colspan:"5"}},[t._v(t._s(t.visible.orderDetail.ApprovalContent))])]):t._e()]),a("a-form",{attrs:{form:t.form}},[a("a-row",{staticStyle:{"margin-bottom":"50px"}},[a("a-col",{attrs:{span:24}},[a("div",{staticClass:"tab-title"},[t._v("参保信息")]),a("table",{staticClass:"detail-table",attrs:{border:"1"}},[t.visible.orderDetail.YangLao?a("tr",[a("td",[t._v("社保类型:")]),a("td",[t._v("养老")]),a("td",[t._v("工资:")]),a("td",[t._v(t._s(t.visible.orderDetail.YangLao))]),a("td",[t._v("开始时间:")]),a("td",[t._v(t._s(t.moment(t.visible.orderDetail.SBBeginDate).format("YYYY-MM-DD")))])]):t._e(),t.visible.orderDetail.ShiYe?a("tr",[a("td",[t._v("社保类型:")]),a("td",[t._v("失业")]),a("td",[t._v("工资:")]),a("td",[t._v(t._s(t.visible.orderDetail.ShiYe))]),a("td",[t._v("开始时间:")]),a("td",[t._v(t._s(t.moment(t.visible.orderDetail.SBBeginDate).format("YYYY-MM-DD")))])]):t._e(),t.visible.orderDetail.GongShang?a("tr",[a("td",[t._v("社保类型:")]),a("td",[t._v("工伤")]),a("td",[t._v("工资:")]),a("td",[t._v(t._s(t.visible.orderDetail.GongShang))]),a("td",[t._v("开始时间:")]),a("td",[t._v(t._s(t.moment(t.visible.orderDetail.SBBeginDate).format("YYYY-MM-DD")))])]):t._e(),t.visible.orderDetail.YiLiao?a("tr",[a("td",[t._v("社保类型:")]),a("td",[t._v("医疗")]),a("td",[t._v("工资:")]),a("td",[t._v(t._s(t.visible.orderDetail.YiLiao))]),a("td",[t._v("开始时间:")]),a("td",[t._v(t._s(t.moment(t.visible.orderDetail.SBBeginDate).format("YYYY-MM-DD")))])]):t._e(),t.visible.orderDetail.GongJiJin?a("tr",[a("td",[t._v("社保类型:")]),a("td",[t._v("公积金")]),a("td",[t._v("工资:")]),a("td",[t._v(t._s(t.visible.orderDetail.GongJiJin)+"("+t._s(t.visible.orderDetail.GJJBili)+")")]),a("td",[t._v("开始时间:")]),a("td",[t._v(t._s(t.moment(t.visible.orderDetail.GJJBeginDate).format("YYYY-MM-DD")))])]):t._e()])]),"0"==t.visible.orderDetail.ApprovalStatus?a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{margin:"20px 0 0"},attrs:{label:"原因",labelCol:{span:1},wrapperCol:{span:23}}},[a("a-textarea",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:t.Remarks,callback:function(e){t.Remarks=e},expression:"Remarks"}})],1)],1):t._e()],1)],1),"0"==t.visible.orderDetail.ApprovalStatus?a("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:function(e){return t.handleSubmit("2")}}},[t._v("拒绝")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(e){return t.handleSubmit("1")}}},[t._v("受理")])],1):t._e()],2)},o=[],n=a("b775"),i=a("c32d"),s=a.n(i),l=a("61f7"),c=[{title:"状态",scopedSlots:{customRender:"BOrderItemStatus"}},{title:"险种名称",scopedSlots:{customRender:"sbType"}},{title:"基数",dataIndex:"Jishu"},{title:"开始日期",scopedSlots:{customRender:"Startime"}},{title:"比例",dataIndex:"Bili"}],d={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,orderDetail:{},ShebaoOrderItemStatus:{},ShebaoOrderStatus:{},sbType:{},ModelType:""},form:this.$form.createForm(this),orderDetail:{},columns:c,modal:{},dataSource:[],city:{},ShebaoOrderItemStatus:{},ShebaoOrderStatus:{},sbType:{},moment:s.a,Remarks:"",selectedIDs:[],ageBeyond:!1,age:""}},computed:{rowSelection:function(){var t=this;return{onChange:function(e,a){t.selectedIDs=e},getCheckboxProps:function(t){return{props:{disabled:10!=t.BOrderItemStatus}}}}}},watch:{show:function(t,e){var a=this;a.visible=t},orderDetail:function(t,e){this.checkAge(this.visible.orderDetail.IDCard)}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.orderDetail={},this.Remarks="",this.form.resetFields()},init:function(){var t=this;n["a"].post("/api/Dim/Enum/DimDecode",{Names:["city"]}).then(function(e){0===e.code&&(t.city=e.data.city)}).catch(function(t){console.log(t)}),n["a"].post("/api/ClientSide/Order/Detail",{RLZGUID:t.visible.orderDetail.RLZGUID}).then(function(e){t.$loading.close(),0===e.code&&(t.orderDetail=e.data.person,t.dataSource=e.data.shebao)}).catch(function(e){t.$loading.close(),console.log(e)})},handleSubmit:function(t){var e=this,a="";"2"!=t||e.Remarks?(a="2"==t?"/api/ClientSide/BOrder/RefuseIn":"/api/ClientSide/BOrder/AcceptIn",e.$confirm({title:"确认"+("1"==t?"受理":"拒绝")+"?",content:"点击确定确认。",onOk:function(){n["a"].post(a,{OrderGuid:e.visible.orderDetail.BOrderAddGuid,Remarks:e.Remarks}).then(function(t){0===t.code?(e.$message.success(t.msg),e.onClose(),e.refresh()):e.$message.error(t.msg)}).catch(function(t){console.log(t)})},onCancel:function(){}})):e.$message.error("请输入原因！")},checkAge:function(t){var e=this;console.log(t);var a=Object(l["d"])(t);e.age=Object(l["a"])(t),"男"==a&&e.age>55?e.ageBeyond=!0:"女"==a&&e.age>45?e.ageBeyond=!0:e.ageBeyond=!1}}},u=d,p=(a("ebd5"),a("2877")),f=Object(p["a"])(u,r,o,!1,null,"74c77baa",null);e["default"]=f.exports},"214f":function(t,e,a){"use strict";a("b0c5");var r=a("2aba"),o=a("32e9"),n=a("79e5"),i=a("be13"),s=a("2b4c"),l=a("520a"),c=s("species"),d=!n(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),u=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var p=s(t),f=!n(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),m=f?!n(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[c]=function(){return a}),a[p](""),!e}):void 0;if(!f||!m||"replace"===t&&!d||"split"===t&&!u){var v=/./[p],h=a(i,p,""[t],function(t,e,a,r,o){return e.exec===l?f&&!o?{done:!0,value:v.call(e,a,r)}:{done:!0,value:t.call(a,e,r)}:{done:!1}}),b=h[0],g=h[1];r(String.prototype,t,b),o(RegExp.prototype,p,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},"28a5":function(t,e,a){"use strict";var r=a("aae3"),o=a("cb7c"),n=a("ebd6"),i=a("0390"),s=a("9def"),l=a("5f1b"),c=a("520a"),d=a("79e5"),u=Math.min,p=[].push,f="split",m="length",v="lastIndex",h=4294967295,b=!d(function(){RegExp(h,"y")});a("214f")("split",2,function(t,e,a,d){var g;return g="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[m]||2!="ab"[f](/(?:ab)*/)[m]||4!="."[f](/(.?)(.?)/)[m]||"."[f](/()()/)[m]>1||""[f](/.?/)[m]?function(t,e){var o=String(this);if(void 0===t&&0===e)return[];if(!r(t))return a.call(o,t,e);var n,i,s,l=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,f=void 0===e?h:e>>>0,b=new RegExp(t.source,d+"g");while(n=c.call(b,o)){if(i=b[v],i>u&&(l.push(o.slice(u,n.index)),n[m]>1&&n.index<o[m]&&p.apply(l,n.slice(1)),s=n[0][m],u=i,l[m]>=f))break;b[v]===n.index&&b[v]++}return u===o[m]?!s&&b.test("")||l.push(""):l.push(o.slice(u)),l[m]>f?l.slice(0,f):l}:"0"[f](void 0,0)[m]?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,r){var o=t(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,o,r):g.call(String(o),a,r)},function(t,e){var r=d(g,t,this,e,g!==a);if(r.done)return r.value;var c=o(t),p=String(this),f=n(c,RegExp),m=c.unicode,v=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(b?"y":"g"),S=new f(b?c:"^(?:"+c.source+")",v),_=void 0===e?h:e>>>0;if(0===_)return[];if(0===p.length)return null===l(S,p)?[p]:[];var y=0,D=0,x=[];while(D<p.length){S.lastIndex=b?D:0;var C,w=l(S,b?p:p.slice(D));if(null===w||(C=u(s(S.lastIndex+(b?0:D)),p.length))===y)D=i(p,D,m);else{if(x.push(p.slice(y,D)),x.length===_)return x;for(var O=1;O<=w.length-1;O++)if(x.push(w[O]),x.length===_)return x;D=y=C}}return x.push(p.slice(y)),x}]})},"520a":function(t,e,a){"use strict";var r=a("0bfb"),o=RegExp.prototype.exec,n=String.prototype.replace,i=o,s="lastIndex",l=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t[s]||0!==e[s]}(),c=void 0!==/()??/.exec("")[1],d=l||c;d&&(i=function(t){var e,a,i,d,u=this;return c&&(a=new RegExp("^"+u.source+"$(?!\\s)",r.call(u))),l&&(e=u[s]),i=o.call(u,t),l&&i&&(u[s]=u.global?i.index+i[0].length:e),c&&i&&i.length>1&&n.call(i[0],a,function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(i[d]=void 0)}),i}),t.exports=i},"5f1b":function(t,e,a){"use strict";var r=a("23c6"),o=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var n=a.call(t,e);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"61f7":function(t,e,a){"use strict";a.d(e,"c",function(){return n}),a.d(e,"b",function(){return i}),a.d(e,"d",function(){return s}),a.d(e,"a",function(){return l});a("28a5");var r=a("c32d"),o=a.n(r);function n(t){var e=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return e.test(t)}function i(t){var e=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return e.test(t)}function s(t){var e=t?t.charAt(16):null;return e%2==0?"女":"男"}function l(t){var e=t?t.substr(6,4):null;return o()().diff(e,"years")}},"70b5":function(t,e,a){"use strict";var r=a("a453"),o=a.n(r);o.a},"81cb":function(t,e,a){},"950e":function(t,e,a){},a453:function(t,e,a){},aae3:function(t,e,a){var r=a("d3f4"),o=a("2d95"),n=a("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==o(t))}},b0c5:function(t,e,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},cb47:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("div",{class:t.advanced?null:"fold"},[a("a-row",{attrs:{gutter:6}},[a("a-col",{attrs:{md:4}},[a("a-form-item",{attrs:{label:"单位",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.ComName,callback:function(e){t.$set(t.formSearch,"ComName",e)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:4}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.emName,callback:function(e){t.$set(t.formSearch,"emName",e)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{md:5}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:t.formSearch.emCardID,callback:function(e){t.$set(t.formSearch,"emCardID",e)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{md:4}},[a("a-form-item",{attrs:{label:"状态",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-select",{attrs:{placeholder:"请选择",allowClear:!0},model:{value:t.formSearch.ApprovalStatus,callback:function(e){t.$set(t.formSearch,"ApprovalStatus",e)},expression:"formSearch.ApprovalStatus"}},[a("a-select-option",{key:""},[t._v("全部")]),t._l(t.SBApprovalStatus,function(e){return a("a-select-option",{key:e.key},[t._v(t._s(e.text))])})],2)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.initPage}},[t._v("查询")]),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"download"},on:{click:t.zyExport}},[t._v("导出")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:t.columns,dataSource:t.dataSource,pagination:!1,rowKey:"BOrderAddGuid"},scopedSlots:t._u([{key:"status",fn:function(e,r){return a("span",{},[a("a-tag",{attrs:{color:t.statusColor[r.ApprovalStatus]}},[t._v(t._s(t.SBApprovalStatusObj[r.ApprovalStatus]))])],1)}},{key:"CityCode",fn:function(e,r){return a("span",{},[t._v(t._s(t.cityList[r.CityCode]))])}},{key:"PaiDanDate",fn:function(e,r){return a("span",{},[t._v(t._s(r.PaiDanDate?t.moment(r.PaiDanDate).format("YYYY-MM-DD"):""))])}},{key:"PName",fn:function(e,r){return a("span",{},[t._v("\n                "+t._s(r.PName)),a("br"),t._v(t._s(r.IDCard)+"\n              ")])}},{key:"shebaoSalary",fn:function(e){return a("span",{staticClass:"fs12"},[e.YangLao?a("a-tag",{attrs:{color:"blue"}},[t._v("养老")]):t._e(),e.ShiYe?a("a-tag",{attrs:{color:"blue"}},[t._v("失业")]):t._e(),e.GongShang?a("a-tag",{attrs:{color:"blue"}},[t._v("工伤")]):t._e(),e.YiLiao?a("a-tag",{attrs:{color:"blue"}},[t._v("医疗")]):t._e(),e.GongJiJin?a("a-tag",{attrs:{color:"blue"}},[t._v("公积金")]):t._e()],1)}},{key:"ApprovalContent",fn:function(e,r){return[a("a-tooltip",[a("template",{slot:"title"},[t._v("\n                    "+t._s(r.ApprovalContent)+"\n                  ")]),a("div",{staticClass:"remark-text ellipsis"},[t._v(t._s(r.ApprovalContent))])],2)]}},{key:"action",fn:function(e,r){return a("span",{staticStyle:{"text-align":"right"}},["0"==r.ApprovalStatus?a("a",{on:{click:function(e){return t.detail(r,"2")}}},[t._v("详情")]):t._e(),"0"!=r.ApprovalStatus?a("a",{on:{click:function(e){return t.detail(r,"1")}}},[t._v("详情")]):t._e()])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:t.formSearch.pageSize,total:t.formSearch.total,current:t.formSearch.current},on:{change:t.pagechange}})],1)],2)],1),a("modal-detail",{attrs:{show:t.modal.detail,refresh:t.pagerefresh}}),a("modal-rz-export",{attrs:{show:t.modal.rzExport,refresh:t.pagerefresh}})],1)],1)},o=[],n=(a("8e6e"),a("456d"),a("bd86")),i=(a("ac6a"),a("b775")),s=a("1d26"),l=a("ff13"),c=a("c32d"),d=a.n(c);function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach(function(e){Object(n["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var f=[{title:"状态",scopedSlots:{customRender:"status"}},{title:"参保城市",scopedSlots:{customRender:"CityCode"}},{title:"姓名",scopedSlots:{customRender:"PName"}},{title:"公司名称",dataIndex:"ComName"},{title:"险种",scopedSlots:{customRender:"shebaoSalary"}},{title:"派单时间",scopedSlots:{customRender:"PaiDanDate"}},{title:"审核时间",dataIndex:"ApprovalTime"},{title:"备注",scopedSlots:{customRender:"ApprovalContent"}},{title:"操作",scopedSlots:{customRender:"action"}}],m={props:{type:{type:Object,default:function(){return{}}}},components:{ModalDetail:s["default"],ModalRzExport:l["default"]},data:function(){return{advanced:!0,columns:f,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,emCardID:"",ComName:"",emName:"",ApprovalStatus:0},count:"5",form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},dataSource:[],modal:{detail:{show:!1},rzExport:{show:!1}},moment:d.a,ShebaoOrderItemStatus:{},ShebaoOrderStatus:{},sbType:{},cityList:{},SBApprovalStatus:[],SBApprovalStatusObj:{},statusColor:{0:"blue",1:"red",2:"green","-1":""}}},created:function(){var t=this;t.init()},activated:function(){console.log("刷新");var t=this;t.pagechange(1)},methods:{init:function(){var t=this;i["a"].post("/api/Dim/Enum/DimDecode",{Names:["City"]}).then(function(e){0===e.code&&(t.cityList=e.data.City)}).catch(function(t){console.log(t)}),i["a"].post("/api/Dim/Enum/GetEnum",{Names:["ShebaoOrderItemStatus","ShebaoOrderStatus","sbType","B_ApprovalStatus"]}).then(function(e){0===e.code&&(t.SBApprovalStatus=e.data.B_ApprovalStatus,e.data.ShebaoOrderStatus.forEach(function(e,a){t.ShebaoOrderStatus[e.key]=e.text}),e.data.sbType.forEach(function(e,a){t.sbType[e.key]=e.text}),e.data.ShebaoOrderItemStatus.forEach(function(e,a){t.ShebaoOrderItemStatus[e.key]=e.text}),e.data.B_ApprovalStatus.forEach(function(e,a){t.SBApprovalStatusObj[e.key]=e.text}),t.pagechange(1))}).catch(function(t){console.log(t)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(t){var e=this,a={};e.formSearch.current=t,a=p({},e.formSearch),e.$loading.open(),i["a"].post("/api/ClientSide/BOrder/OrderAddList",a).then(function(t){e.$loading.close(),0===t.code&&(e.dataSource=t.data.rows,e.formSearch.total=t.count)}).catch(function(t){e.$loading.close(),console.log(t)})},detail:function(t,e){this.modal.detail={show:!0,orderDetail:t,ModelType:e,ShebaoOrderItemStatus:this.ShebaoOrderItemStatus,ShebaoOrderStatus:this.ShebaoOrderStatus,sbType:this.sbType}},zyExport:function(){this.modal.rzExport={show:!0}}}},v=m,h=(a("70b5"),a("2877")),b=Object(h["a"])(v,r,o,!1,null,null,null);e["default"]=b.exports},ebd5:function(t,e,a){"use strict";var r=a("950e"),o=a.n(r);o.a},ff13:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:500,zIndex:1001,centered:!0},on:{cancel:t.onClose,ok:t.handleSubmit}},[a("template",{slot:"title"},[t._v("\n  增员申请导出(已受理)\n")]),a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"开始时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Begindate",{rules:t.AFormImportRules.iptInput}],expression:"['Begindate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:t.changeTimeBegin}})],1),a("a-form-item",{attrs:{label:"截止时间",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["Enddate",{rules:t.AFormImportRules.iptInput}],expression:"['Enddate',{rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"260px"},attrs:{format:"YYYY-MM-DD"},on:{change:t.changeTimeEnd}})],1)],1)],2)},o=[],n=a("c32d"),i=a.n(n),s={props:{show:{type:Object,default:function(){return{show:!1}}},Role:{type:String,default:""},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,Role:""},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}]},exportData:{Enddate:"",Begindate:""}}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},handleSubmit:function(){var t=this;this.form.validateFields(function(e,a){if(!e){var r={};r.Begindate=t.exportData.Begindate,r.Enddate=t.exportData.Enddate,r.Role=t.visible.Role;var o=document.createElement("a");o.href="/api/ClientSide/BOrder/ExportRuZhi?Begindate="+r.Begindate+"&Enddate="+r.Enddate,o.click(),t.onClose()}})},changeTimeBegin:function(t){this.exportData.Begindate=i()(t).format("YYYY-MM-DD")},changeTimeEnd:function(t){this.exportData.Enddate=i()(t).format("YYYY-MM-DD")}}},l=s,c=(a("0db2"),a("2877")),d=Object(c["a"])(l,r,o,!1,null,"0380684d",null);e["default"]=d.exports}}]);