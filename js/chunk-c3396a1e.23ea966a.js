(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3396a1e","chunk-bce6df44","chunk-7627a384","chunk-4ebc4d0f","chunk-7fb094e4"],{"02f4":function(e,t,a){var r=a("4588"),n=a("be13");e.exports=function(e){return function(t,a){var s,i,o=String(n(t)),l=r(a),c=o.length;return l<0||l>=c?e?"":void 0:(s=o.charCodeAt(l),s<55296||s>56319||l+1===c||(i=o.charCodeAt(l+1))<56320||i>57343?e?o.charAt(l):s:e?o.slice(l,l+2):i-56320+(s-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var r=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},"0bfb":function(e,t,a){"use strict";var r=a("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1745:function(e,t,a){},"1af6":function(e,t,a){var r=a("63b6");r(r.S,"Array",{isArray:a("9003")})},"214f":function(e,t,a){"use strict";a("b0c5");var r=a("2aba"),n=a("32e9"),s=a("79e5"),i=a("be13"),o=a("2b4c"),l=a("520a"),c=o("species"),u=!s(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var p=o(e),m=!s(function(){var t={};return t[p]=function(){return 7},7!=""[e](t)}),f=m?!s(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[c]=function(){return a}),a[p](""),!t}):void 0;if(!m||!f||"replace"===e&&!u||"split"===e&&!d){var h=/./[p],v=a(i,p,""[e],function(e,t,a,r,n){return t.exec===l?m&&!n?{done:!0,value:h.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),y=v[0],b=v[1];r(String.prototype,e,y),n(RegExp.prototype,p,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},2889:function(e,t,a){"use strict";var r=a("fb6b"),n=a.n(r);n.a},"28a5":function(e,t,a){"use strict";var r=a("aae3"),n=a("cb7c"),s=a("ebd6"),i=a("0390"),o=a("9def"),l=a("5f1b"),c=a("520a"),u=a("79e5"),d=Math.min,p=[].push,m="split",f="length",h="lastIndex",v=4294967295,y=!u(function(){RegExp(v,"y")});a("214f")("split",2,function(e,t,a,u){var b;return b="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[f]||2!="ab"[m](/(?:ab)*/)[f]||4!="."[m](/(.?)(.?)/)[f]||"."[m](/()()/)[f]>1||""[m](/.?/)[f]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!r(e))return a.call(n,e,t);var s,i,o,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,m=void 0===t?v:t>>>0,y=new RegExp(e.source,u+"g");while(s=c.call(y,n)){if(i=y[h],i>d&&(l.push(n.slice(d,s.index)),s[f]>1&&s.index<n[f]&&p.apply(l,s.slice(1)),o=s[0][f],d=i,l[f]>=m))break;y[h]===s.index&&y[h]++}return d===n[f]?!o&&y.test("")||l.push(""):l.push(n.slice(d)),l[f]>m?l.slice(0,m):l}:"0"[m](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,r){var n=e(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,n,r):b.call(String(n),a,r)},function(e,t){var r=u(b,e,this,t,b!==a);if(r.done)return r.value;var c=n(e),p=String(this),m=s(c,RegExp),f=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(y?"y":"g"),g=new m(y?c:"^(?:"+c.source+")",h),w=void 0===t?v:t>>>0;if(0===w)return[];if(0===p.length)return null===l(g,p)?[p]:[];var x=0,C=0,k=[];while(C<p.length){g.lastIndex=y?C:0;var I,R=l(g,y?p:p.slice(C));if(null===R||(I=d(o(g.lastIndex+(y?0:C)),p.length))===x)C=i(p,C,f);else{if(k.push(p.slice(x,C)),k.length===w)return k;for(var E=1;E<=R.length-1;E++)if(k.push(R[E]),k.length===w)return k;C=x=I}}return k.push(p.slice(x)),k}]})},"3e6a":function(e,t,a){"use strict";var r=a("4bf0"),n=a.n(r);n.a},"4bf0":function(e,t,a){},"4e80":function(e,t,a){},"520a":function(e,t,a){"use strict";var r=a("0bfb"),n=RegExp.prototype.exec,s=String.prototype.replace,i=n,o="lastIndex",l=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[o]||0!==t[o]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(i=function(e){var t,a,i,u,d=this;return c&&(a=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),l&&(t=d[o]),i=n.call(d,e),l&&i&&(d[o]=d.global?i.index+i[0].length:t),c&&i&&i.length>1&&s.call(i[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),e.exports=i},"5e43":function(e,t,a){"use strict";var r=a("1745"),n=a.n(r);n.a},"5f1b":function(e,t,a){"use strict";var r=a("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var s=a.call(e,t);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"69e7":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!1,visible:this.visible.show,maskClosable:!1,width:450,zIndex:1001,centered:!0},on:{cancel:e.onClose,ok:e.submit}},[a("template",{slot:"title"},[e._v("\n  添加公司\n")]),a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComName",{initialValue:e.comname,rules:e.AFormImportRules.iptInputReq}],expression:"['ComName',{initialValue:comname,rules:AFormImportRules.iptInputReq}]"}]})],1)],1)],2)},n=[],s=a("b775"),i={props:{show:{type:Object,default:function(){return{show:!1}}},comname:{type:String,default:""}},data:function(){return{visible:{show:!1},form:this.$form.createForm(this),AFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}]}}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},submit:function(){var e=this;this.form.validateFields(function(t,a){if(!t){var r=a;s["a"].post("/api/Company/Com/Add",r).then(function(t){0===t.code?(e.$message.success("提交成功!"),e.onClose()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})}})}}},o=i,l=(a("3e6a"),a("2877")),c=Object(l["a"])(o,r,n,!1,null,"2fab7ce2",null);t["default"]=c.exports},"6eaa":function(e,t,a){},"75fc":function(e,t,a){"use strict";var r=a("a745"),n=a.n(r);function s(e){if(n()(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var i=a("774e"),o=a.n(i),l=a("c8bb"),c=a.n(l);function u(e){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return o()(e)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(e){return s(e)||u(e)||d()}a.d(t,"a",function(){return p})},"774e":function(e,t,a){e.exports=a("d2d5")},9272:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"添加客户服务",destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1200,footer:null},on:{cancel:e.onClose}},[a("a-steps",{attrs:{current:e.current}},e._l(e.steps,function(e){return a("a-step",{key:e.title,attrs:{title:e.title}})}),1),a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.current,expression:"current==0"}],staticClass:"steps-content"},[a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:11}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:4},wrapperCol:{span:19}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComGuid",{rules:e.AFormImportRules.iptInputReq}],expression:"['ComGuid',{rules:AFormImportRules.iptInputReq}]"}],attrs:{"show-search":"",placeholder:"请输入后选择","default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":null,width:350},on:{search:e.handleSearch}},[e.searchData.length>0?e._l(e.searchData,function(t){return a("a-select-option",{key:t.ComGuid},[e._v("\n                "+e._s(t.ComName)+"\n              ")])}):[a("a-select-option",{key:0,attrs:{disabled:!0}},[e._v("\n                没有该公司，点击右侧添加，添加公司后选择\n              ")])]],2)],1)],1),a("a-col",{staticStyle:{"line-height":"39px"},attrs:{span:3,align:"left"}},[0==e.searchData.length?a("a-button",{attrs:{type:"primary"},on:{click:e.addcompany}},[e._v("添加")]):e._e()],1)],1),a("a-row",[a("a-col",{attrs:{span:11}},[a("a-form-item",{attrs:{label:"派出公司",labelCol:{span:4},wrapperCol:{span:19}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["GYSGuid",{rules:e.AFormImportRules.iptInputReq}],expression:"['GYSGuid',{rules:AFormImportRules.iptInputReq}]"}],attrs:{"show-search":"",placeholder:"请输入后选择","default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":null,width:350},on:{search:e.handleSearchGys}},[e.searchGysData.length>0?e._l(e.searchGysData,function(t){return a("a-select-option",{key:t.GYSGuid},[e._v("\n                "+e._s(t.GYSName)+"\n              ")])}):[a("a-select-option",{key:0,attrs:{disabled:!0}},[e._v("\n                没有该派出公司，点击右侧添加，添加派出公司后选择\n              ")])]],2)],1)],1),a("a-col",{staticStyle:{"line-height":"39px"},attrs:{span:3,align:"left"}},[0==e.searchGysData.length?a("a-button",{attrs:{type:"primary"},on:{click:e.addGys}},[e._v("添加")]):e._e()],1)],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.current,expression:"current==1"}],staticClass:"steps-content"},[a("a-form",{attrs:{form:e.comForm}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"服务类型",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ServiceType",{rules:e.comFormImportRules.selectReq}],expression:"['ServiceType',{rules:comFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.visible.ServiceType,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"公积金服务类型",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJServiceType",{rules:e.comFormImportRules.selectReq}],expression:"['GJJServiceType',{rules:comFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.visible.ServiceType,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"服务费模式",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["BillingMode",{rules:e.comFormImportRules.selectReq}],expression:"['BillingMode',{rules:comFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.visible.BillingMode,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"补缴服务费模式",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["BuJiaoBillingType",{rules:e.comFormImportRules.selectReq}],expression:"['BuJiaoBillingType',{rules:comFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.visible.BuJiaoBillingType,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"联系规则",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["LinkRoleID",{rules:e.comFormImportRules.selectReq}],expression:"['LinkRoleID',{rules:comFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},[a("a-select-option",{key:"1"},[e._v("按上海")]),a("a-select-option",{key:"2"},[e._v("按北京")]),a("a-select-option",{key:"3"},[e._v("按河北")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"服务流程",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["FlowType",{rules:e.comFormImportRules.selectReq}],expression:"['FlowType',{rules:comFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.visible.FlowTypeList,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"最低收费",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["AccountFee"],expression:"['AccountFee']"}],staticStyle:{width:"100%"},attrs:{min:0}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"是否有档案服务",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["DangAn"],expression:"['DangAn']"}],attrs:{allowClear:!0},on:{change:e.dangAnChange}},[a("a-select-option",{key:"true"},[e._v("是")]),a("a-select-option",{key:"false"},[e._v("否")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"档案服务费",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["ArchivesPrice",{rules:e.comFormImportRules.iptInputReq}],expression:"['ArchivesPrice',{rules:comFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{min:0}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"单人服务费",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["UnitPrice"],expression:"['UnitPrice']"}],staticStyle:{width:"100%"},attrs:{min:0}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"是否驻场",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["IsOnsite"],expression:"['IsOnsite']"}],attrs:{allowClear:!0},on:{change:e.onsiteChange}},[a("a-select-option",{key:"true"},[e._v("是")]),a("a-select-option",{key:"false"},[e._v("否")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"驻场客服",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["OnsiteUserName",{rules:e.comFormImportRules.onsite}],expression:"['OnsiteUserName',{rules:comFormImportRules.onsite}]"}],staticStyle:{width:"100%"},on:{click:function(t){return e.addKefu("3")}}})],1)],1),"74"==e.visible.role?a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"客服",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["kefuName",{rules:e.comFormImportRules.kefu}],expression:"['kefuName',{rules:comFormImportRules.kefu}]"}],staticStyle:{width:"100%"},on:{click:function(t){return e.addKefu("1")}}})],1)],1):e._e(),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"订单客服",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["OrderUserName",{rules:e.comFormImportRules.kefu}],expression:"['OrderUserName',{rules:comFormImportRules.kefu}]"}],staticStyle:{width:"100%"},on:{click:function(t){return e.addKefu("2")}}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"订单客服所在城市",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["CityCode",{rules:e.comFormImportRules.kefu}],expression:"['CityCode',{rules:comFormImportRules.kefu}]"}],attrs:{allowClear:!0}},e._l(e.cityList,function(t){return a("a-select-option",{key:t.CityCode},[e._v(e._s(t.CityName))])}),1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"工伤费率",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["GongShangRate"],expression:"['GongShangRate']"}],staticStyle:{width:"100%"},attrs:{placeholder:"例如：0.007"}})],1)],1)],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.current,expression:"current==2"}],staticClass:"steps-content"},[e._l(e.ladderList,function(t,r){return a("div",{key:r,staticClass:"steps-box text-left"},[0==parseInt(t.EmpMin)&&99999==parseInt(t.EmpMax)?[e._v("\n      阶梯"+e._s(r+1)+"："+e._s(t.EmpMin)+"~"+e._s(t.EmpMax)+"人/优惠金额:"),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:0,placeholder:"优惠金额"},model:{value:t.Discount,callback:function(a){e.$set(t,"Discount",a)},expression:"item.Discount"}})]:0==parseInt(t.EmpMin)&&99999!=parseInt(t.EmpMax)?[e._v("\n        阶梯"+e._s(r+1)+"："+e._s(t.EmpMin)+"~"),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:1},on:{change:function(a){return e.ladderChange(t.EmpMax,t,r,"EmpMax")}},model:{value:t.EmpMax,callback:function(a){e.$set(t,"EmpMax",a)},expression:"item.EmpMax"}}),e._v("人/优惠金额:"),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:0,placeholder:"优惠金额"},model:{value:t.Discount,callback:function(a){e.$set(t,"Discount",a)},expression:"item.Discount"}})]:0!=parseInt(t.EmpMin)&&99999==parseInt(t.EmpMax)?[e._v("\n        阶梯"+e._s(r+1)+"："),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:1},on:{change:function(a){return e.ladderChange(t.EmpMin,t,r,"EmpMin")}},model:{value:t.EmpMin,callback:function(a){e.$set(t,"EmpMin",a)},expression:"item.EmpMin"}}),e._v(" ~ "+e._s(t.EmpMax)+"人/优惠金额:"),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:0,placeholder:"优惠金额"},model:{value:t.Discount,callback:function(a){e.$set(t,"Discount",a)},expression:"item.Discount"}})]:[e._v("\n        阶梯"+e._s(r+1)+"："),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:1},on:{change:function(a){return e.ladderChange(t.EmpMin,t,r,"EmpMin")}},model:{value:t.EmpMin,callback:function(a){e.$set(t,"EmpMin",a)},expression:"item.EmpMin"}}),e._v(" ~ "),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:1},on:{change:function(a){return e.ladderChange(t.EmpMax,t,r,"EmpMax")}},model:{value:t.EmpMax,callback:function(a){e.$set(t,"EmpMax",a)},expression:"item.EmpMax"}}),e._v("人/优惠金额:"),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:0,placeholder:"优惠金额"},model:{value:t.Discount,callback:function(a){e.$set(t,"Discount",a)},expression:"item.Discount"}})],a("a-icon",{staticClass:"ml10",attrs:{type:"plus-circle"},on:{click:function(){return e.add(t,r)}}}),a("a-icon",{staticClass:"dynamic-delete-button ml10",attrs:{type:"minus-circle-o"},on:{click:function(){return e.remove(t,r)}}})],2)}),e.ladderList.length>0?e._e():a("a-button",{staticStyle:{width:"60%"},attrs:{type:"dashed"},on:{click:function(t){return e.add({},-1)}}},[a("a-icon",{attrs:{type:"plus"}}),e._v("增加阶梯优惠\n    ")],1)],2),a("div",{directives:[{name:"show",rawName:"v-show",value:3==e.current,expression:"current==3"}],staticClass:"steps-content"},[a("div",[a("a-form",{attrs:{form:e.form}},e._l(e.cityPriceList,function(t,r){return a("a-row",{key:r},[a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"城市",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{attrs:{readOnly:"",placeholder:"请输入"},on:{click:function(t){return e.chooseArea(r)}},model:{value:t.CityName,callback:function(a){e.$set(t,"CityName",a)},expression:"item.CityName"}})],1)],1),a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"单人价格",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:0},model:{value:t.UnitPrice,callback:function(a){e.$set(t,"UnitPrice",a)},expression:"item.UnitPrice"}})],1)],1),a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"档案价格",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:0},model:{value:t.ArchivesPrice,callback:function(a){e.$set(t,"ArchivesPrice",a)},expression:"item.ArchivesPrice"}}),a("a-icon",{staticClass:"minus-btn ml10",attrs:{type:"minus-circle-o"},on:{click:function(){return e.removeCityPrice(t,r)}}})],1)],1)],1)}),1),a("a-button",{staticStyle:{width:"60%"},attrs:{type:"dashed"},on:{click:e.addCityPrice}},[a("a-icon",{attrs:{type:"plus"}}),e._v("增加城市价格\n      ")],1)],1)]),a("div",{staticClass:"steps-action"},[e.current>0?a("a-button",{on:{click:e.prev}},[e._v("\n      上一步\n    ")]):e._e(),e.current==e.steps.length-1?a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:e.submitAddCustomer}},[e._v("\n      提交\n    ")]):e._e(),e.current<e.steps.length-1?a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:e.next}},[e._v("\n      下一步\n    ")]):e._e()],1),a("model-add-company",{attrs:{show:e.modal.addcompany,comname:e.comText,refresh:e.handleChange}}),a("model-add-gys",{attrs:{show:e.modal.addgys,gysname:e.gysText,refresh:e.handleChangeGys}}),a("chooseArea",{attrs:{openDrawer:e.drawer.area.show},on:{Closearea:e.areaClose,Surearea:e.areaSure}}),a("model-add-kefu",{ref:"kefuChild",attrs:{show:e.modal.addkefu},on:{close:e.closeAddKefu,sure:e.sureAddKefu}})],1)},n=[],s=(a("8e6e"),a("456d"),a("7f7f"),a("bd86")),i=(a("ac6a"),a("b775")),o=a("69e7"),l=a("96fd"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{class:["mask",e.openDrawer?"open":"close"],on:{click:e.onClose}}),a("div",{ref:"drawer",class:["drawer","center",e.openDrawer?"open":"close"]},[a("a-row",[a("a-col",{staticClass:"citylist",attrs:{span:14}},[a("a-tree",{attrs:{"expanded-keys":e.expandedKeys,"auto-expand-parent":e.autoExpandParent,"selected-keys":e.selectedKeys,"load-data":e.onLoadData,"tree-data":e.options},on:{expand:e.onExpand,select:e.onSelect},model:{value:e.checkedKeys,callback:function(t){e.checkedKeys=t},expression:"checkedKeys"}})],1),a("a-col",{staticClass:"myCity",attrs:{span:7}},[a("div",[e.city.name?a("a-tag",{attrs:{closable:""},on:{close:e.colseCity}},[e._v(e._s(e.city.name))]):e._e()],1)])],1),a("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)])},u=[],d=(a("a481"),a("28a5"),a("75fc")),p={name:"Drawer",data:function(){return{drawerWidth:0,options:[],city:{id:"",name:""},expandedKeys:[],autoExpandParent:!0,checkedKeys:[],selectedKeys:[],replaceFields:{value:"code",title:"name"}}},props:{openDrawer:{type:Boolean,required:!1,default:!1},Closearea:{type:Function,required:!1,default:null},Surearea:{type:Function,required:!1,default:null}},mounted:function(){this.init()},watch:{},methods:{open:function(){this.$emit("change",!0)},getDrawerWidth:function(){return this.$refs.drawer.clientWidth},init:function(){var e=this;i["a"].post("/api/Dim/Enum/GetDim",{Names:["Province"]}).then(function(t){0===t.code&&t.data.Province.forEach(function(t,a){var r={};r.value=t.code,r.title=t.name,r.isLeaf=!1,r.checkable=!1,r.disableCheckbox=!1,e.options.push(r)})}).catch(function(e){console.log(e)})},colseCity:function(){this.city={value:"",name:""}},onLoadData:function(e){var t=this;return new Promise(function(a){e.dataRef.children?a():i["a"].post("/api/Dim/Enum/GetCity",{ProvinceCode:e.value}).then(function(r){0===r.code&&(r.data.city.length>0?(e.dataRef.children=[],r.data.city.forEach(function(t,a){var r={};r.value=t.code,r.title=t.name,r.isLeaf=!0,e.dataRef.children.push(r)}),t.options=Object(d["a"])(t.options),a()):(e.dataRef.isLeaf=!0,t.options=Object(d["a"])(t.options),a()))}).catch(function(e){console.log(e)})})},onExpand:function(e,t){this.expandedKeys=e,this.autoExpandParent=!1},onSelect:function(e,t){e[0]&&e[0].split("-").length<3?this.onExpand(e,t):(this.selectedKeys=e,this.city.value=t.node.value,this.city.name=t.node.title.replace(/\s+/g,""))},onClose:function(){this.$emit("Closearea",!1)},handleSubmit:function(){this.$emit("Surearea",this.city),this.city.name||this.$message.error("你还没有选择城市")}}},m=p,f=(a("2889"),a("2877")),h=Object(f["a"])(m,c,u,!1,null,"2285667c",null),v=h.exports,y=a("9fc2");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(s["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var w={components:{ModelAddCompany:o["default"],chooseArea:v,ModelAddKefu:y["default"],ModelAddGys:l["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,cityList:{},ServiceType:{},BillingMode:{},BuJiaoBillingType:{},UserArray:[],DeptArray:[],FlowTypeList:[],role:""},form:this.$form.createForm(this),AFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}]},comForm:this.$form.createForm(this),comFormImportRules:{iptInputReq:[{required:!1,message:"请输入"}],selectReq:[{required:!0,message:"请选择"}],onsite:[{required:!1,message:"请选择"}],kefu:[{required:!0,message:"请输入"}]},current:0,steps:[{title:"选择客户"},{title:"客户服务"},{title:"阶梯优惠"},{title:"城市价格"}],companyList:[],searchData:[],companyName:"",currentValue:"",options:[],DepList:[],ladderList:[],cityPriceList:[],cityServiceList:[],drawer:{area:{show:!1}},modal:{addcompany:{show:!1},addkefu:{show:!1},addgys:{show:!1}},comText:"",cityList:[],addData:{},addKefuObject:[{id:""},{id:""},{id:""}],kefuType:"",searchGysData:[],GysList:[],GysName:"",gysText:""}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{init:function(){var e=this;i["a"].post("/api/Company/com/MySelf").then(function(t){0===t.code&&(e.addKefuObject[1].id=t.data.Operator.Userid,e.comForm.setFieldsValue({OrderUserName:e.visible.UserArray[t.data.Operator.Userid]}))}).catch(function(e){console.log(e)}),i["a"].post("/api/company/com/ComBranchList").then(function(t){0===t.code&&(e.cityList=t.data.rows)}).catch(function(e){console.log(e)})},searchCompany:function(e,t){var a=this;i["a"].post("/api/Company/Com/List",{Keyword:e,Current:1,PageSize:99}).then(function(e){0===e.code&&(a.companyList=e.data.rows,t(e.data.rows))}).catch(function(e){console.log(e)})},searchGys:function(e,t){var a=this;i["a"].post("/api/Company/GYS/List",{Keyword:e,Current:1,PageSize:99}).then(function(e){0===e.code&&(a.GysList=e.data.rows,t(e.data.rows))}).catch(function(e){console.log(e)})},onClose:function(){this.visible.show=!1,this.form.resetFields(),this.comForm.resetFields(),this.ladderList=[],this.cityPriceList=[],this.current=0},submitAddCustomer:function(){var e=this,t=e.addData;t.ComPriceSteps=e.ladderList,t.ComPriceCitys=e.cityPriceList,t.OnsiteUserid=e.addKefuObject[2].id,t.OrderUserid=e.addKefuObject[1].id,"74"==e.visible.role&&(t.KefuUserid=e.addKefuObject[0].id);try{e.cityPriceList.forEach(function(t,a){if(""===t.CityCode||""===t.UnitPrice||""===t.ArchivesPrice)throw e.$message.error("请输入完整的城市价格信息！"),Error()})}catch(a){return}i["a"].post("/api/Company/Service/Add",t).then(function(t){0===t.code?(e.$message.success("提交成功!"),e.onClose(),e.refresh()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},next:function(){var e=this;if(0==this.current)this.form.validateFields(function(t,a){t||(console.log(a),e.current++,e.addData=g({},a),console.log(e.addData))});else if(1==this.current)this.comForm.validateFields(function(t,a){if(!t){if("true"==a.DangAn&&null==a.ArchivesPrice)return void e.$message.error("请输入档案服务费！");if("true"==a.IsOnsite&&null==a.OnsiteUserName)return void e.$message.error("请输入驻场客服！");e.addData=g({},e.addData,{},a),console.log(e.addData),e.current++}});else if(2==this.current&&this.ladderList.length>0){var t=this;try{t.ladderList.forEach(function(e,a){if(console.log(e),""===e.EmpMin||""===e.EmpMax||""===e.Discount)throw t.$message.error("请输入完整的区间范围及优惠金额！"),Error()})}catch(a){return}this.current++}else this.current++},prev:function(){this.current--},fetch:function(e,t){this.companyName=e,this.searchCompany(e,t)},handleSearch:function(e){var t=this;this.comText=e,this.fetch(e,function(e){return t.searchData=e}),console.log(this.searchData)},handleChange:function(e){var t=this;console.log(e),this.companyName=e,e&&this.fetch(e,function(e){return t.searchData=e})},fetchGys:function(e,t){this.GysName=e,this.searchGys(e,t)},handleSearchGys:function(e){var t=this;this.gysText=e,this.fetchGys(e,function(e){return t.searchGysData=e}),console.log(this.searchGysData)},handleChangeGys:function(e){var t=this;console.log(e),this.GysName=e,e&&this.fetchGys(e,function(e){return t.searchGysData=e})},add:function(e,t){var a={EmpMin:"",EmpMax:"",Discount:""};-1==t?a={EmpMin:0,EmpMax:99999,Discount:0}:0==t&&t==this.ladderList.length-1?(e.EmpMax="",a.EmpMax=99999):0==t?a.EmpMin=e.EmpMax?parseInt(e.EmpMax)+1:"":t==this.ladderList.length-1?(e.EmpMax="",a.EmpMax=99999):(a.EmpMin=e.EmpMax?parseInt(e.EmpMax)+1:"",a.EmpMax=""),this.ladderList.splice(t+1,0,a),console.log(this.ladderList)},remove:function(e,t){0==t&&1==this.ladderList.length?this.ladderList=[]:0==t&&this.ladderList.length>1?this.ladderList[t+1].EmpMin=0:this.ladderList.length>1&&t==this.ladderList.length-1?this.ladderList[t-1].EmpMax=99999:this.ladderList[t-1].EmpMax=e.EmpMax,this.ladderList.splice(t,1),console.log(this.ladderList)},ladderChange:function(e,t,a,r){"EmpMax"==r&&(this.ladderList[a+1].EmpMin=parseInt(e)+1),"EmpMin"==r&&(this.ladderList[a-1].EmpMax=parseInt(e)-1)},addCityPrice:function(){var e={CityCode:"",UnitPrice:"",ArchivesPrice:""};this.cityPriceList.push(e)},removeCityPrice:function(e,t){this.cityPriceList.splice(t,1)},addcompany:function(){var e=this;e.modal.addcompany={show:!0}},addGys:function(){var e=this;e.modal.addgys={show:!0}},dangAnChange:function(e){this.comFormImportRules.iptInputReq[0].required="true"==e},onsiteChange:function(e){this.comFormImportRules.onsite[0].required="true"==e},areaClose:function(e){this.drawer.area={show:!1}},areaSure:function(e){console.log(e),this.cityPriceList[this.changeIndex].CityCode=e.value,this.cityPriceList[this.changeIndex].CityName=e.name,this.drawer.area={show:!1}},chooseArea:function(e){this.changeIndex=e,this.drawer.area={show:!0}},addKefu:function(e){this.modal.addkefu={show:!0},this.kefuType=e},closeAddKefu:function(){this.modal.addkefu={show:!1},this.kefuType=""},sureAddKefu:function(e){var t=this;"1"==t.kefuType&&(t.addKefuObject[0].id=e.OrderUserid,t.comForm.setFieldsValue({kefuName:t.visible.UserArray[e.OrderUserid]})),"2"==t.kefuType&&(t.addKefuObject[1].id=e.OrderUserid,t.comForm.setFieldsValue({OrderUserName:t.visible.UserArray[e.OrderUserid]})),"3"==t.kefuType&&(t.addKefuObject[2].id=e.OrderUserid,t.comForm.setFieldsValue({OnsiteUserName:t.visible.UserArray[e.OrderUserid]})),t.closeAddKefu(),t.$refs.kefuChild.onClose()}}},x=w,C=(a("e1bb"),Object(f["a"])(x,r,n,!1,null,"d75f09e8",null));t["default"]=C.exports},"96fd":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!1,visible:this.visible.show,maskClosable:!1,width:450,zIndex:1001,centered:!0},on:{cancel:e.onClose,ok:e.submit}},[a("template",{slot:"title"},[e._v("\n  添加派出公司\n")]),a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"派出公司",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["GYSName",{initialValue:e.gysname,rules:e.AFormImportRules.iptInputReq}],expression:"['GYSName',{initialValue:gysname,rules:AFormImportRules.iptInputReq}]"}]})],1)],1)],2)},n=[],s=a("b775"),i={props:{show:{type:Object,default:function(){return{show:!1}}},gysname:{type:String,default:""}},data:function(){return{visible:{show:!1},form:this.$form.createForm(this),AFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}]}}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},submit:function(){var e=this;this.form.validateFields(function(t,a){if(!t){var r=a;s["a"].post("/api/Company/GYS/Add",r).then(function(t){0===t.code?(e.$message.success("提交成功!"),e.onClose()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})}})}}},o=i,l=(a("e323"),a("2877")),c=Object(l["a"])(o,r,n,!1,null,"c163ba14",null);t["default"]=c.exports},"9fc2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!1,visible:this.visible.show,maskClosable:!1,width:450,zIndex:1001,centered:!0},on:{cancel:e.onClose,ok:e.submit}},[a("template",{slot:"title"},[e._v("\n  选择客服\n")]),a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"部门",labelCol:{span:7},wrapperCol:{span:16}}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["deptId",{rules:e.AFormImportRules.selectReq}],expression:"['deptId',{rules:AFormImportRules.selectReq}]"}],attrs:{options:e.options,loadData:e.loadData,changeOnSelect:"",placeholder:"请选择部门"},on:{change:e.onChange}})],1),a("a-form-item",{attrs:{label:"客服",labelCol:{span:7},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["OrderUserid",{rules:e.AFormImportRules.selectReq}],expression:"['OrderUserid',{rules:AFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.DepList,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1)],2)},n=[],s=a("75fc"),i=(a("7f7f"),a("ac6a"),a("b775")),o={props:{show:{type:Object,default:function(){return{show:!1}}},close:{type:Function,required:!1,default:null},sure:{type:Function,required:!1,default:null}},data:function(){return{visible:{show:!1},form:this.$form.createForm(this),AFormImportRules:{selectReq:[{required:!0,message:"请选择"}]},options:[],DepList:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.options=[],this.DepList=[],this.form.resetFields(),this.$emit("close",!1)},init:function(){var e=this;i["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:"1"}).then(function(t){0===t.code&&t.data.forEach(function(t,a){var r={};r.value=t.code,r.label=t.name,r.isLeaf=!1,e.options.push(r)})}).catch(function(e){console.log(e)})},submit:function(){var e=this;this.form.validateFields(function(t,a){if(!t){var r=a;r.deptId=r.deptId[r.deptId.length-1],e.$emit("sure",a),console.log(a)}})},loadData:function(e){var t=e[e.length-1],a=this;t.loading=!0,i["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,a){var r={};r.value=e.code,r.label=e.name,r.isLeaf=!1,t.children.push(r)}),a.options=Object(s["a"])(a.options)):(t.isLeaf=!0,t.loading=!1))}).catch(function(e){console.log(e),t.loading=!1})},onChange:function(e){this.DepList=[],this.SaleUserid="",this.userbydepid(e[e.length-1])},userbydepid:function(e){var t=this;i["a"].post("/api/Org/User/UsersByDepId",{DepId:e}).then(function(e){var a=e;0===a.code&&(t.DepList=a.data,t.form.setFieldsValue({OrderUserid:""}))}).catch(function(e){console.log(e)})}}},l=o,c=(a("5e43"),a("2877")),u=Object(c["a"])(l,r,n,!1,null,"6df77856",null);t["default"]=u.exports},a481:function(e,t,a){"use strict";var r=a("cb7c"),n=a("4bf8"),s=a("9def"),i=a("4588"),o=a("0390"),l=a("5f1b"),c=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,m=/\$([$&`']|\d\d?)/g,f=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,function(e,t,a,h){return[function(r,n){var s=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,s,n):a.call(String(s),r,n)},function(e,t){var n=h(a,e,this,t);if(n.done)return n.value;var d=r(e),p=String(this),m="function"===typeof t;m||(t=String(t));var y=d.global;if(y){var b=d.unicode;d.lastIndex=0}var g=[];while(1){var w=l(d,p);if(null===w)break;if(g.push(w),!y)break;var x=String(w[0]);""===x&&(d.lastIndex=o(p,s(d.lastIndex),b))}for(var C="",k=0,I=0;I<g.length;I++){w=g[I];for(var R=String(w[0]),E=c(u(i(w.index),p.length),0),_=[],F=1;F<w.length;F++)_.push(f(w[F]));var S=w.groups;if(m){var D=[R].concat(_,E,p);void 0!==S&&D.push(S);var O=String(t.apply(void 0,D))}else O=v(R,p,E,_,S,t);E>=k&&(C+=p.slice(k,E)+O,k=E+R.length)}return C+p.slice(k)}];function v(e,t,r,s,i,o){var l=r+e.length,c=s.length,u=m;return void 0!==i&&(i=n(i),u=p),a.call(o,u,function(a,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(l);case"<":o=i[n.slice(1,-1)];break;default:var u=+n;if(0===u)return a;if(u>c){var p=d(u/10);return 0===p?a:p<=c?void 0===s[p-1]?n.charAt(1):s[p-1]+n.charAt(1):a}o=s[u-1]}return void 0===o?"":o})}})},a745:function(e,t,a){e.exports=a("f410")},aae3:function(e,t,a){var r=a("d3f4"),n=a("2d95"),s=a("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==n(e))}},b0c5:function(e,t,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},c8bb:function(e,t,a){e.exports=a("54a1")},e1bb:function(e,t,a){"use strict";var r=a("4e80"),n=a.n(r);n.a},e323:function(e,t,a){"use strict";var r=a("6eaa"),n=a.n(r);n.a},f410:function(e,t,a){a("1af6"),e.exports=a("584a").Array.isArray},fb6b:function(e,t,a){}}]);