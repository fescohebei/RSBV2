(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d4fd0f8"],{"02f4":function(e,t,n){var i=n("4588"),r=n("be13");e.exports=function(e){return function(t,n){var o,a,c=String(r(t)),s=i(n),l=c.length;return s<0||s>=l?e?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===l||(a=c.charCodeAt(s+1))<56320||a>57343?e?c.charAt(s):o:e?c.slice(s,s+2):a-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,n){"use strict";var i=n("02f4")(!0);e.exports=function(e,t,n){return t+(n?i(e,t).length:1)}},"0bfb":function(e,t,n){"use strict";var i=n("cb7c");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"1af6":function(e,t,n){var i=n("63b6");i(i.S,"Array",{isArray:n("9003")})},"214f":function(e,t,n){"use strict";n("b0c5");var i=n("2aba"),r=n("32e9"),o=n("79e5"),a=n("be13"),c=n("2b4c"),s=n("520a"),l=c("species"),d=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),u=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var v=c(e),f=!o(function(){var t={};return t[v]=function(){return 7},7!=""[e](t)}),p=f?!o(function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[l]=function(){return n}),n[v](""),!t}):void 0;if(!f||!p||"replace"===e&&!d||"split"===e&&!u){var h=/./[v],m=n(a,v,""[e],function(e,t,n,i,r){return t.exec===s?f&&!r?{done:!0,value:h.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}),b=m[0],g=m[1];i(String.prototype,e,b),r(RegExp.prototype,v,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"28a5":function(e,t,n){"use strict";var i=n("aae3"),r=n("cb7c"),o=n("ebd6"),a=n("0390"),c=n("9def"),s=n("5f1b"),l=n("520a"),d=n("79e5"),u=Math.min,v=[].push,f="split",p="length",h="lastIndex",m=4294967295,b=!d(function(){RegExp(m,"y")});n("214f")("split",2,function(e,t,n,d){var g;return g="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[p]||2!="ab"[f](/(?:ab)*/)[p]||4!="."[f](/(.?)(.?)/)[p]||"."[f](/()()/)[p]>1||""[f](/.?/)[p]?function(e,t){var r=String(this);if(void 0===e&&0===t)return[];if(!i(e))return n.call(r,e,t);var o,a,c,s=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,f=void 0===t?m:t>>>0,b=new RegExp(e.source,d+"g");while(o=l.call(b,r)){if(a=b[h],a>u&&(s.push(r.slice(u,o.index)),o[p]>1&&o.index<r[p]&&v.apply(s,o.slice(1)),c=o[0][p],u=a,s[p]>=f))break;b[h]===o.index&&b[h]++}return u===r[p]?!c&&b.test("")||s.push(""):s.push(r.slice(u)),s[p]>f?s.slice(0,f):s}:"0"[f](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,i){var r=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,r,i):g.call(String(r),n,i)},function(e,t){var i=d(g,e,this,t,g!==n);if(i.done)return i.value;var l=r(e),v=String(this),f=o(l,RegExp),p=l.unicode,h=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(b?"y":"g"),y=new f(b?l:"^(?:"+l.source+")",h),C=void 0===t?m:t>>>0;if(0===C)return[];if(0===v.length)return null===s(y,v)?[v]:[];var S=0,x=0,_=[];while(x<v.length){y.lastIndex=b?x:0;var w,A=s(y,b?v:v.slice(x));if(null===A||(w=u(c(y.lastIndex+(b?0:x)),v.length))===S)x=a(v,x,p);else{if(_.push(v.slice(S,x)),_.length===C)return _;for(var O=1;O<=A.length-1;O++)if(_.push(A[O]),_.length===C)return _;x=S=w}}return _.push(v.slice(S)),_}]})},"3a53":function(e,t,n){"use strict";var i=n("719e"),r=n.n(i);r.a},"520a":function(e,t,n){"use strict";var i=n("0bfb"),r=RegExp.prototype.exec,o=String.prototype.replace,a=r,c="lastIndex",s=function(){var e=/a/,t=/b*/g;return r.call(e,"a"),r.call(t,"a"),0!==e[c]||0!==t[c]}(),l=void 0!==/()??/.exec("")[1],d=s||l;d&&(a=function(e){var t,n,a,d,u=this;return l&&(n=new RegExp("^"+u.source+"$(?!\\s)",i.call(u))),s&&(t=u[c]),a=r.call(u,e),s&&a&&(u[c]=u.global?a.index+a[0].length:t),l&&a&&a.length>1&&o.call(a[0],n,function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(a[d]=void 0)}),a}),e.exports=a},"5f1b":function(e,t,n){"use strict";var i=n("23c6"),r=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(e))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"61f7":function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return s});n("28a5");var i=n("c32d"),r=n.n(i);function o(e){var t=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return t.test(e)}function a(e){var t=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return t.test(e)}function c(e){var t=e?e.charAt(16):null;return t%2==0?"女":"男"}function s(e){var t=e?e.substr(6,4):null;return r()().diff(t,"years")}},"719e":function(e,t,n){},"75fc":function(e,t,n){"use strict";var i=n("a745"),r=n.n(i);function o(e){if(r()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var a=n("774e"),c=n.n(a),s=n("c8bb"),l=n.n(s);function d(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return c()(e)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(e){return o(e)||d(e)||u()}n.d(t,"a",function(){return v})},"774e":function(e,t,n){e.exports=n("d2d5")},a745:function(e,t,n){e.exports=n("f410")},aae3:function(e,t,n){var i=n("d3f4"),r=n("2d95"),o=n("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},b0c5:function(e,t,n){"use strict";var i=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},c8bb:function(e,t,n){e.exports=n("54a1")},cb04:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1200,footer:null},on:{cancel:e.onClose}},[n("template",{slot:"title"},[e._v("\n  客户详情\n  ")]),n("a-tabs",{staticClass:"tabHeight",attrs:{"default-active-key":"1"},on:{change:e.changeComTab}},[n("a-tab-pane",{key:"1",attrs:{tab:"基本信息"}},[n("table",{staticClass:"detail-table",attrs:{border:"1"}},[n("tr",[n("td",[e._v("公司名称:")]),n("td",[e._v(e._s(e.ComService.ComName))])])])]),n("a-tab-pane",{key:"2",attrs:{tab:"服务信息","force-render":""}},[n("table",{staticClass:"detail-table",attrs:{border:"1"}},[n("tr",[n("td",[e._v("服务类型:")]),n("td",[e._v(e._s(e.visible.ServiceType[e.ComService.ServiceType]))]),n("td",[e._v("公积金服务类型:")]),n("td",[e._v(e._s(e.visible.ServiceType[e.ComService.GJJServiceType]))])]),n("tr",[n("td",[e._v("服务费模式:")]),n("td",[e._v(e._s(e.visible.BillingMode[e.ComService.BillingMode]))]),n("td",[e._v("补缴服务费模式:")]),n("td",[e._v(e._s(e.visible.BuJiaoBillingType[e.ComService.BuJiaoBillingType]))])]),n("tr",[n("td",[e._v("是否有档案服务:")]),n("td",[e._v(e._s(1==e.ComService.DangAn?"是":"否"))]),n("td",[e._v("联系规则:")]),n("td",[e._v(e._s(e.LinkRole[e.ComService.LinkRoleID]))])]),n("tr",[n("td",[e._v("整户费:")]),n("td",[e._v(e._s(e.ComService.AccountFee))]),n("td",[e._v("单人价格:")]),n("td",[e._v(e._s(e.ComService.UnitPrice))])]),n("tr",[n("td",[e._v("档案价格:")]),n("td",[e._v(e._s(e.ComService.ArchivesPrice))]),n("td",[e._v("是否驻场:")]),n("td",[e._v(e._s("true"==e.ComService.IsOnsite?"是":"否"))])]),n("tr",[n("td",[e._v("驻场客服:")]),n("td",[e._v(e._s(e.visible.UserArray[e.ComService.OnsiteUserid]))]),n("td",[e._v("私有工伤费率:")]),n("td",[e._v(e._s(e.ComService.GongShangRate))])])])]),n("a-tab-pane",{key:"3",attrs:{tab:"阶梯优惠"}},[n("div",{staticClass:"tab-box"},[n("a-table",{attrs:{columns:e.columnsLadder,dataSource:e.comPriceSteps,pagination:!1,rowKey:"index",size:"middle"},scopedSlots:e._u([{key:"EmpMin",fn:function(t,i){return n("span",{},[e._v(e._s(i.EmpMin)+"~"+e._s(i.EmpMax)+"(含)")])}}])})],1)]),n("a-tab-pane",{key:"4",attrs:{tab:"城市价格"}},[n("div",{staticClass:"tab-box"},[n("a-table",{attrs:{columns:e.columnsPrice,dataSource:e.comPriceCities,pagination:!1,rowKey:"index",size:"middle"},scopedSlots:e._u([{key:"CityCode",fn:function(t,i){return n("span",{},[e._v(e._s(e.visible.cityList[i.CityCode]))])}}])})],1)]),n("a-tab-pane",{key:"5",attrs:{tab:"城市服务"}},[n("div",{staticClass:"tab-box"},[n("a-table",{attrs:{columns:e.columnsCity,dataSource:e.comServiceCities,pagination:!1,rowKey:"ComServiceGuid",size:"middle"},scopedSlots:e._u([{key:"CityCode",fn:function(t,i){return n("span",{},[e._v(e._s(e.visible.cityList[i.CityCode]))])}},{key:"OrderUserid",fn:function(t,i){return n("span",{},[e._v(e._s(e.visible.UserArray[i.OrderUserid]))])}},{key:"action",fn:function(t,i){return n("span",{},[n("a",{on:{click:function(t){return e.changeKf(i)}}},[e._v("修改接单客服")])])}}])})],1)])],1),n("a-modal",{attrs:{title:"修改接单客服",visible:e.showHandoverLayer,"confirm-loading":e.confirmLoading,centered:"","z-index":1001},on:{ok:e.handOverOk,cancel:e.handleOverCancel}},[n("a-form",{attrs:{layout:"horizontal"}},[n("div",[n("a-row",{attrs:{gutter:10}},[n("a-col",{attrs:{md:24}},[n("a-form-item",{attrs:{label:"部门",labelCol:{span:6},wrapperCol:{span:18}}},[n("a-cascader",{attrs:{options:e.allOptions,loadData:e.loadDataAll,changeOnSelect:"",placeholder:"请选择交接部门"},on:{change:e.onChangeAll},model:{value:e.handover.DepId,callback:function(t){e.$set(e.handover,"DepId",t)},expression:"handover.DepId"}})],1),n("a-form-item",{attrs:{label:"人员",labelCol:{span:6},wrapperCol:{span:18}}},[n("a-select",{model:{value:e.handover.Userid,callback:function(t){e.$set(e.handover,"Userid",t)},expression:"handover.Userid"}},e._l(e.AllUserList,function(t){return n("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1)],1)],1)])],1)],2)},r=[],o=n("75fc"),a=(n("7f7f"),n("ac6a"),n("b775")),c=(n("c32d"),n("61f7"),[{title:"阶梯",customRender:function(e,t,n){return"阶梯"+(n+1)}},{title:"人数范围",scopedSlots:{customRender:"EmpMin"}},{title:"优惠金额",dataIndex:"Discount"}]),s=[{title:"城市",scopedSlots:{customRender:"CityCode"}},{title:"单人价格",dataIndex:"UnitPrice"},{title:"档案价格",dataIndex:"ArchivesPrice"}],l=[{title:"城市",scopedSlots:{customRender:"CityCode"}},{title:"接单客服",scopedSlots:{customRender:"OrderUserid"}},{title:"操作",scopedSlots:{customRender:"action"}}],d=[{title:"编码",dataIndex:"SubCode"},{title:"名称",dataIndex:"SubAccount"},{title:"费率",dataIndex:"Rate"}],u={components:{},props:{show:{type:Object,default:function(){return{show:!1}}}},data:function(){return{columnsLadder:c,columnsPrice:s,columnsCity:l,columnsAccount:d,visible:{show:!1,ServiceType:{},BillingMode:{},BuJiaoBillingType:{},cityList:{},UserArray:[]},form:this.$form.createForm(this),assetsdetail:{},LinkRole:{1:"按上海",2:"按北京",3:"按河北"},modal:{modifyService:{show:!1},modifyLadder:{show:!1},modifyCityPrice:{show:!1},modifyCityService:{show:!1},connectSubAccount:{show:!1}},ComService:{ComName:""},comPriceCities:[],comPriceSteps:[],comServiceCities:[],confirmLoading:!1,showHandoverLayer:!1,handover:{DepId:[],Userid:"",record:{}},allOptions:[],AllUserList:[]}},watch:{show:function(e,t){var n=this;n.visible=e}},created:function(){var e=this;this.$watch("show",function(t,n){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){var e=this;a["a"].post("/api/Company/Service/Detail",{Guid:e.visible.ComServiceGuid}).then(function(t){0===t.code&&(e.ComService=t.data.comService,e.comPriceCities=t.data.comPriceCities,e.comPriceSteps=t.data.comPriceSteps,e.comServiceCities=t.data.comServiceCities)}).catch(function(e){console.log(e)}),e.getAllDep()},connectSecondAccount:function(){this.modal.connectSubAccount={show:!0}},changeComTab:function(){},modifyComService:function(){var e=this;e.modal.modifyService={show:!0,detail:e.assetsdetail}},modifyLadder:function(){var e=this;e.modal.modifyLadder={show:!0,detail:e.assetsdetail}},modifyCityPrice:function(){var e=this;e.modal.modifyCityPrice={show:!0,detail:e.assetsdetail}},modifyCityService:function(){var e=this;e.modal.modifyCityService={show:!0,detail:e.assetsdetail}},changeKf:function(e){this.handover.record=e,this.showHandoverLayer=!0},handOverOk:function(e){var t=this;t.handover.DepId===[]?t.$message.error("请选择部门！"):""===t.handover.Userid?t.$message.error("请选择人员！"):a["a"].post("/api/Company/Service/ChangeComServiceCity",{ID:t.handover.record.ID,OrderUserid:t.handover.Userid}).then(function(e){0===e.code?(t.showHandoverLayer=!1,t.handover={DepId:[],Userid:"",record:{}},t.init(),t.$message.success(e.msg)):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},handleOverCancel:function(e){this.showHandoverLayer=!1,this.handover={DepId:[],Userid:"",record:{}}},getAllDep:function(){var e=this;a["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:"1"}).then(function(t){0===t.code&&t.data.forEach(function(t,n){var i={};i.value=t.code,i.label=t.name,i.isLeaf=!1,e.allOptions.push(i)})}).catch(function(e){console.log(e)})},loadDataAll:function(e){var t=e[e.length-1],n=this;t.loading=!0,a["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,n){var i={};i.value=e.code,i.label=e.name,i.isLeaf=!1,t.children.push(i)}),n.allOptions=Object(o["a"])(n.allOptions)):(t.isLeaf=!0,t.loading=!1,n.allOptions=Object(o["a"])(n.allOptions)))}).catch(function(e){console.log(e),t.loading=!1})},onChangeAll:function(e){this.AllUserList=[],this.handover.Userid="",this.userbydepidAll(e[e.length-1])},userbydepidAll:function(e){var t=this;a["a"].post("/api/Org/User/UsersByDepId",{DepId:e}).then(function(e){var n=e;0===n.code&&(t.AllUserList=n.data)}).catch(function(e){console.log(e)})}}},v=u,f=(n("3a53"),n("2877")),p=Object(f["a"])(v,i,r,!1,null,"3b0cdd58",null);t["default"]=p.exports},f410:function(e,t,n){n("1af6"),e.exports=n("584a").Array.isArray}}]);