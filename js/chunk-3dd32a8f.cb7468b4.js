(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dd32a8f","chunk-b4f06184","chunk-7b549be5"],{"02f4":function(e,t,a){var n=a("4588"),o=a("be13");e.exports=function(e){return function(t,a){var r,i,s=String(o(t)),l=n(a),c=s.length;return l<0||l>=c?e?"":void 0:(r=s.charCodeAt(l),r<55296||r>56319||l+1===c||(i=s.charCodeAt(l+1))<56320||i>57343?e?s.charAt(l):r:e?s.slice(l,l+2):i-56320+(r-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var n=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?n(e,t).length:1)}},"0bfb":function(e,t,a){"use strict";var n=a("cb7c");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1269:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{class:["mask",e.openDrawer?"open":"close"],on:{click:e.onClose}}),a("div",{ref:"drawer",class:["drawer","center",e.openDrawer?"open":"close"]},[a("a-row",[a("a-col",{staticClass:"citylist",attrs:{span:14}},[a("a-tree",{attrs:{"expanded-keys":e.expandedKeys,"auto-expand-parent":e.autoExpandParent,"selected-keys":e.selectedKeys,"load-data":e.onLoadData,"tree-data":e.options},on:{expand:e.onExpand,select:e.onSelect},model:{value:e.checkedKeys,callback:function(t){e.checkedKeys=t},expression:"checkedKeys"}})],1),a("a-col",{staticClass:"myCity",attrs:{span:7}},[a("div",[e.city.name?a("a-tag",{attrs:{closable:""},on:{close:e.colseCity}},[e._v(e._s(e.city.name))]):e._e()],1)])],1),a("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)])},o=[],r=(a("a481"),a("28a5"),a("75fc")),i=(a("7f7f"),a("ac6a"),a("b775")),s={name:"Drawer",data:function(){return{drawerWidth:0,options:[],city:{id:"",name:""},expandedKeys:[],autoExpandParent:!0,checkedKeys:[],selectedKeys:[],replaceFields:{value:"code",title:"name"}}},props:{openDrawer:{type:Boolean,required:!1,default:!1},Closearea:{type:Function,required:!1,default:null},Surearea:{type:Function,required:!1,default:null}},mounted:function(){this.init()},watch:{},methods:{open:function(){this.$emit("change",!0)},getDrawerWidth:function(){return this.$refs.drawer.clientWidth},init:function(){var e=this;i["a"].post("/api/Dim/Enum/GetDim",{Names:["Province"]}).then(function(t){0===t.code&&t.data.Province.forEach(function(t,a){var n={};n.value=t.code,n.title=t.name,n.isLeaf=!1,n.checkable=!1,n.disableCheckbox=!1,e.options.push(n)})}).catch(function(e){console.log(e)})},colseCity:function(){this.city={value:"",name:""}},onLoadData:function(e){var t=this;return new Promise(function(a){e.dataRef.children?a():i["a"].post("/api/Dim/Enum/GetCity",{ProvinceCode:e.value}).then(function(n){0===n.code&&(n.data.city.length>0?(e.dataRef.children=[],n.data.city.forEach(function(t,a){var n={};n.value=t.code,n.title=t.name,n.isLeaf=!0,e.dataRef.children.push(n)}),t.options=Object(r["a"])(t.options),a()):(e.dataRef.isLeaf=!0,t.options=Object(r["a"])(t.options),a()))}).catch(function(e){console.log(e)})})},onExpand:function(e,t){this.expandedKeys=e,this.autoExpandParent=!1},onSelect:function(e,t){e[0]&&e[0].split("-").length<3?this.onExpand(e,t):(this.selectedKeys=e,this.city.value=t.node.value,this.city.name=t.node.title.replace(/\s+/g,""))},onClose:function(){this.$emit("Closearea",!1)},handleSubmit:function(){this.$emit("Surearea",this.city),this.city.name||this.$message.error("你还没有选择城市")}}},l=s,c=(a("2889"),a("2877")),u=Object(c["a"])(l,n,o,!1,null,"2285667c",null);t["a"]=u.exports},"1af6":function(e,t,a){var n=a("63b6");n(n.S,"Array",{isArray:a("9003")})},"214f":function(e,t,a){"use strict";a("b0c5");var n=a("2aba"),o=a("32e9"),r=a("79e5"),i=a("be13"),s=a("2b4c"),l=a("520a"),c=s("species"),u=!r(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var p=s(e),f=!r(function(){var t={};return t[p]=function(){return 7},7!=""[e](t)}),m=f?!r(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[c]=function(){return a}),a[p](""),!t}):void 0;if(!f||!m||"replace"===e&&!u||"split"===e&&!d){var h=/./[p],b=a(i,p,""[e],function(e,t,a,n,o){return t.exec===l?f&&!o?{done:!0,value:h.call(t,a,n)}:{done:!0,value:e.call(a,t,n)}:{done:!1}}),v=b[0],C=b[1];n(String.prototype,e,v),o(RegExp.prototype,p,2==t?function(e,t){return C.call(e,this,t)}:function(e){return C.call(e,this)})}}},"229f":function(e,t,a){"use strict";var n=a("ca56"),o=a.n(n);o.a},2889:function(e,t,a){"use strict";var n=a("fb6b"),o=a.n(n);o.a},"28a5":function(e,t,a){"use strict";var n=a("aae3"),o=a("cb7c"),r=a("ebd6"),i=a("0390"),s=a("9def"),l=a("5f1b"),c=a("520a"),u=a("79e5"),d=Math.min,p=[].push,f="split",m="length",h="lastIndex",b=4294967295,v=!u(function(){RegExp(b,"y")});a("214f")("split",2,function(e,t,a,u){var C;return C="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[m]||2!="ab"[f](/(?:ab)*/)[m]||4!="."[f](/(.?)(.?)/)[m]||"."[f](/()()/)[m]>1||""[f](/.?/)[m]?function(e,t){var o=String(this);if(void 0===e&&0===t)return[];if(!n(e))return a.call(o,e,t);var r,i,s,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,f=void 0===t?b:t>>>0,v=new RegExp(e.source,u+"g");while(r=c.call(v,o)){if(i=v[h],i>d&&(l.push(o.slice(d,r.index)),r[m]>1&&r.index<o[m]&&p.apply(l,r.slice(1)),s=r[0][m],d=i,l[m]>=f))break;v[h]===r.index&&v[h]++}return d===o[m]?!s&&v.test("")||l.push(""):l.push(o.slice(d)),l[m]>f?l.slice(0,f):l}:"0"[f](void 0,0)[m]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,n){var o=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,o,n):C.call(String(o),a,n)},function(e,t){var n=u(C,e,this,t,C!==a);if(n.done)return n.value;var c=o(e),p=String(this),f=r(c,RegExp),m=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),x=new f(v?c:"^(?:"+c.source+")",h),w=void 0===t?b:t>>>0;if(0===w)return[];if(0===p.length)return null===l(x,p)?[p]:[];var y=0,g=0,B=[];while(g<p.length){x.lastIndex=v?g:0;var k,A=l(x,v?p:p.slice(g));if(null===A||(k=d(s(x.lastIndex+(v?0:g)),p.length))===y)g=i(p,g,m);else{if(B.push(p.slice(y,g)),B.length===w)return B;for(var F=1;F<=A.length-1;F++)if(B.push(A[F]),B.length===w)return B;g=y=k}}return B.push(p.slice(y)),B}]})},"520a":function(e,t,a){"use strict";var n=a("0bfb"),o=RegExp.prototype.exec,r=String.prototype.replace,i=o,s="lastIndex",l=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e[s]||0!==t[s]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(i=function(e){var t,a,i,u,d=this;return c&&(a=new RegExp("^"+d.source+"$(?!\\s)",n.call(d))),l&&(t=d[s]),i=o.call(d,e),l&&i&&(d[s]=d.global?i.index+i[0].length:t),c&&i&&i.length>1&&r.call(i[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)}),i}),e.exports=i},"5f1b":function(e,t,a){"use strict";var n=a("23c6"),o=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var r=a.call(e,t);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"61f7":function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"b",function(){return i}),a.d(t,"d",function(){return s}),a.d(t,"a",function(){return l});a("28a5");var n=a("c32d"),o=a.n(n);function r(e){var t=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return t.test(e)}function i(e){var t=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return t.test(e)}function s(e){var t=e?e.charAt(16):null;return t%2==0?"女":"男"}function l(e){var t=e?e.substr(6,4):null;return o()().diff(t,"years")}},"75fc":function(e,t,a){"use strict";var n=a("a745"),o=a.n(n);function r(e){if(o()(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}var i=a("774e"),s=a.n(i),l=a("c8bb"),c=a.n(l);function u(e){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return s()(e)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(e){return r(e)||u(e)||d()}a.d(t,"a",function(){return p})},"774e":function(e,t,a){e.exports=a("d2d5")},a481:function(e,t,a){"use strict";var n=a("cb7c"),o=a("4bf8"),r=a("9def"),i=a("4588"),s=a("0390"),l=a("5f1b"),c=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,function(e,t,a,h){return[function(n,o){var r=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r,o):a.call(String(r),n,o)},function(e,t){var o=h(a,e,this,t);if(o.done)return o.value;var d=n(e),p=String(this),f="function"===typeof t;f||(t=String(t));var v=d.global;if(v){var C=d.unicode;d.lastIndex=0}var x=[];while(1){var w=l(d,p);if(null===w)break;if(x.push(w),!v)break;var y=String(w[0]);""===y&&(d.lastIndex=s(p,r(d.lastIndex),C))}for(var g="",B=0,k=0;k<x.length;k++){w=x[k];for(var A=String(w[0]),F=c(u(i(w.index),p.length),0),S=[],I=1;I<w.length;I++)S.push(m(w[I]));var O=w.groups;if(f){var j=[A].concat(S,F,p);void 0!==O&&j.push(O);var R=String(t.apply(void 0,j))}else R=b(A,p,F,S,O,t);F>=B&&(g+=p.slice(B,F)+R,B=F+A.length)}return g+p.slice(B)}];function b(e,t,n,r,i,s){var l=n+e.length,c=r.length,u=f;return void 0!==i&&(i=o(i),u=p),a.call(s,u,function(a,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(l);case"<":s=i[o.slice(1,-1)];break;default:var u=+o;if(0===u)return a;if(u>c){var p=d(u/10);return 0===p?a:p<=c?void 0===r[p-1]?o.charAt(1):r[p-1]+o.charAt(1):a}s=r[u-1]}return void 0===s?"":s})}})},a745:function(e,t,a){e.exports=a("f410")},aae3:function(e,t,a){var n=a("d3f4"),o=a("2d95"),r=a("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==o(e))}},acab:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:500,zIndex:1001,footer:!1},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n   新建银行账户\n ")]),a("a-form",{attrs:{form:e.form}},[a("div",{staticClass:"form-box"},[a("a-row",[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"账号名称",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["BankAccountName",{rules:e.AFormImportRules.BankAccountName}],expression:"['BankAccountName',{rules:AFormImportRules.BankAccountName}]"}],attrs:{placeholder:""}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"0px"},attrs:{label:"开户行",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["BankName",{rules:e.AFormImportRules.BankName}],expression:"['BankName',{rules:AFormImportRules.BankName}]"}],attrs:{placeholder:""}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"0px"},attrs:{label:"账号",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["BankAccount",{rules:e.AFormImportRules.BankAccount}],expression:"['BankAccount',{rules:AFormImportRules.BankAccount}]"}],attrs:{placeholder:""}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{staticStyle:{"margin-left":"0px"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:20}}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks"],expression:"['Remarks']"}],attrs:{placeholder:""}})],1)],1)],1),a("div",{style:{width:"100%",padding:"0px 16px 10px",background:"#fff",borderRadius:"0 0 4px 4px","text-align":"center"}},[a("a-button",{attrs:{type:"primary","html-type":"submit"},on:{click:e.resultSubmit}},[e._v("提交")])],1)],1)])],2)},o=[],r=a("b775"),i={props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,PGUID:""},form:this.$form.createForm(this),AFormImportRules:{BankAccountName:[{required:!0,message:"请输入",trigger:"blur"}],BankName:[{required:!0,message:"请输入",trigger:"blur"}],BankAccount:[{required:!0,message:"请输入",trigger:"blur"}]},newbankForm:{BankAccountName:"",BankName:"",BankAccount:"",Remarks:""}}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){this.init()},methods:{init:function(){},resultSubmit:function(){var e=this,t={};e.form.validateFields(function(a,n){a||(t=n,t.PGUID=e.visible.PGUID,t.BankAccountType="10",e.$loading.open(),r["a"].post("/api/ClientSide/BankAccountInfo/Add",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.form.resetFields(),e.onClose(),e.refresh()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})},onClose:function(){this.visible.show=!1,this.form.resetFields()}}},s=i,l=(a("d457"),a("2877")),c=Object(l["a"])(s,n,o,!1,null,"904e69d2",null);t["default"]=c.exports},b0c5:function(e,t,a){"use strict";var n=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c8bb:function(e,t,a){e.exports=a("54a1")},ca56:function(e,t,a){},ce5d:function(e,t,a){},d457:function(e,t,a){"use strict";var n=a("ce5d"),o=a.n(n);o.a},f410:function(e,t,a){a("1af6"),e.exports=a("584a").Array.isArray},fb6b:function(e,t,a){},fbe9:function(e,t,a){"use strict";a.r(t);var n,o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1e3,centered:!0,footer:"false"},on:{cancel:e.onClose}},[a("template",{slot:"title"},[e._v("\n  申请社保享受\n")]),a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{attrs:{"show-search":"",value:e.value,placeholder:"请输入身份证号选择员工","default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":null,width:350},on:{search:e.handleSearch,change:e.handleChange,select:e.handleSelect},model:{value:e.newBxForm.IDCard,callback:function(t){e.$set(e.newBxForm,"IDCard",t)},expression:"newBxForm.IDCard"}},[e.searchData.length>0?e._l(e.searchData,function(t,n){return a("a-select-option",{key:n},[a("span",[e._v(e._s(t["姓名"]+"--"+e.visible.RuLiZhiStatus[t.Status]))]),e._v("-"+e._s(t["身份证号"])+"-"+e._s(t.ComName)+"\n        ")])}):[a("a-select-option",{key:0,attrs:{disabled:!0}},[e._v("\n            没有该员工信息，无法新增！\n        ")])]],2)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"员工姓名",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{attrs:{placeholder:"系统自动回显",readonly:"true"},model:{value:e.newBxForm.PName,callback:function(t){e.$set(e.newBxForm,"PName",t)},expression:"newBxForm.PName"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"联系方式",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{attrs:{placeholder:"",readonly:e.linkType},model:{value:e.newBxForm.LinkInfo,callback:function(t){e.$set(e.newBxForm,"LinkInfo",e._n(t))},expression:"newBxForm.LinkInfo"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{attrs:{placeholder:"系统自动回显",readonly:"true"},model:{value:e.newBxForm.ComName,callback:function(t){e.$set(e.newBxForm,"ComName",e._n(t))},expression:"newBxForm.ComName"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"社保报销类型",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0,disabled:!e.newBxForm.RLZGUID},on:{change:e.BXclassChange}},e._l(e.visible.BXClassCodeArray,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1),a("a-col",{attrs:{span:12}},[e.BXSubClassCodeArray&&e.BXSubClassCodeArray.length>0?a("a-form-item",{attrs:{label:"报销类型子类",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-select",{attrs:{allowClear:!0,placeholder:"请选择",disabled:!e.newBxForm.RLZGUID},on:{change:e.BXsubChange}},e._l(e.BXSubClassCodeArray,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1):e._e()],1),a("a-col",{attrs:{span:12}},[11==e.BXClassCode||12==e.BXClassCode?a("a-form-item",{attrs:{label:"",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-checkbox-group",{staticStyle:{width:"100%"},on:{change:e.allInChange},model:{value:e.newBxForm.AllIn,callback:function(t){e.$set(e.newBxForm,"AllIn",t)},expression:"newBxForm.AllIn"}},[a("a-row",[a("a-col",{attrs:{span:16,offset:8}},[a("a-checkbox",{attrs:{value:1}},[e._v("\n              "+e._s(e.allowSameTime)+"\n              ")])],1)],1)],1)],1):e._e()],1),a("a-col",{attrs:{span:12}},[21!=e.BXClassCode&&22!=e.BXClassCode?a("a-form-item",{attrs:{label:"生育城市",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{attrs:{readOnly:"",placeholder:"请输入"},on:{click:function(t){return e.chooseArea()}},model:{value:e.chooseCityObject.CityName,callback:function(t){e.$set(e.chooseCityObject,"CityName",t)},expression:"chooseCityObject.CityName"}})],1):e._e()],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"需要准备材料",labelCol:{span:3},wrapperCol:{span:16}}},[e.baoxiaoCailiao&&!!e.baoxiaoCailiao.length>0?[a("p",{staticClass:"cailiao"},e._l(e.baoxiaoCailiao,function(t){return a("span",{key:t.BXCLItemGuid},[e._v(e._s(t.OrderNo+"."+t.CailiaoName))])}),0)]:[e._v("\n          "+e._s(e.baoxiaoMsg)+"\n      ")]],2)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"个人银行账户信息",labelCol:{span:3},wrapperCol:{span:21}}},[a("a-row",[a("a-col",{attrs:{span:19}},[a("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",disabled:!e.newBxForm.RLZGUID},model:{value:e.newBxForm.BankAccountInfoGuid,callback:function(t){e.$set(e.newBxForm,"BankAccountInfoGuid",t)},expression:"newBxForm.BankAccountInfoGuid"}},e._l(e.bankAccountList,function(t){return a("a-select-option",{key:t.BankAccountInfoGuid},[e._v("\n              "+e._s(t.BankAccountName+"-"+t.BankName+"-"+t.BankAccount)+"\n            ")])}),1)],1),a("a-col",{attrs:{span:4,offset:1}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.newBank()}}},[e._v("新建账户")])],1)],1)],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"已收材料",labelCol:{span:3},wrapperCol:{span:20}}},[a("a-textarea",{attrs:{placeholder:""},model:{value:e.newBxForm.Cailiao,callback:function(t){e.$set(e.newBxForm,"Cailiao",t)},expression:"newBxForm.Cailiao"}})],1)],1),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"备注",labelCol:{span:3},wrapperCol:{span:20}}},[a("a-textarea",{attrs:{placeholder:""},model:{value:e.newBxForm.Remarks,callback:function(t){e.$set(e.newBxForm,"Remarks",t)},expression:"newBxForm.Remarks"}})],1)],1)],1)],1),a("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"center",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return e.newBxSubmit("newBxForm","0")}}},[e._v("提交并继续收材料")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:function(t){return e.newBxSubmit("newBxForm","1")}}},[e._v("提交且收材料完成")])],1),a("chooseArea",{attrs:{openDrawer:e.drawer.area.show},on:{Closearea:e.areaClose,Surearea:e.areaSure}}),a("modal-newbank",{attrs:{show:e.modal.newbank,refresh:e.getBankList}})],2)},r=[],i=(a("7f7f"),a("bd86")),s=a("b775"),l=(a("c32d"),a("61f7"),a("1269")),c=a("acab"),u={components:{chooseArea:l["a"],ModalNewbank:c["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){var e;return e={visible:{show:!1,ServiceType:{},BillingMode:{},BuJiaoBillingType:{},RuLiZhiStatus:{},BXClassCodeArray:[],BXClassArray:[]},form:this.$form.createForm(this),assetsdetail:{Company:{ComName:""},ComService:{ServiceType:""},ComPriceStep:[],ComServiceCity:[],ComPriceCity:[]},LinkRole:{1:"按上海",2:"按北京",3:"按河北"}},Object(i["a"])(e,"form",this.$form.createForm(this)),Object(i["a"])(e,"AFormImportRules",{iptSelect:[{required:!0,message:"请选择"}],BankAccountInfoGuid:[{required:!1,message:"请输入",trigger:"change"}]}),Object(i["a"])(e,"options",[]),Object(i["a"])(e,"DepList",[]),Object(i["a"])(e,"companyList",[]),Object(i["a"])(e,"searchData",[]),Object(i["a"])(e,"companyName",""),Object(i["a"])(e,"comText",""),Object(i["a"])(e,"newBxForm",{IDCard:"",PName:"",ComName:"",BXClassCode:"",BXSubClassCode:"",EventCityCode:"",Cailiao:"",Remarks:"",LinkInfo:"",AllIn:!1,BankAccountInfoGuid:""}),Object(i["a"])(e,"drawer",{area:{show:!1}}),Object(i["a"])(e,"modal",{newbank:{show:!1}}),Object(i["a"])(e,"employeeList",[]),Object(i["a"])(e,"PGUID",""),Object(i["a"])(e,"ServiceType",""),Object(i["a"])(e,"linkType",!1),Object(i["a"])(e,"bankAccountList",[]),Object(i["a"])(e,"chooseCityObject",{CityCode:"",CityName:""}),Object(i["a"])(e,"BXSubClassCodeArray",[]),Object(i["a"])(e,"baoxiaoCailiao",[]),Object(i["a"])(e,"baoxiaoMsg",""),Object(i["a"])(e,"allowSameTime",""),Object(i["a"])(e,"value",void 0),Object(i["a"])(e,"BXClassCode",""),e},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:(n={onClose:function(){this.visible.show=!1,this.form.resetFields(),this.baoxiaoCailiao=[],this.baoxiaoMsg="",this.newBxForm={IDCard:"",PName:"",ComName:"",BXClassCode:"",BXSubClassCode:"",EventCityCode:"",Cailiao:"",Remarks:"",LinkInfo:"",AllIn:!1,BankAccountInfoGuid:""}},init:function(){},submitService:function(){this.onClose()},fetch:function(e,t){this.companyName=e,this.searchEmployee(e,t)},handleSearch:function(e){var t=this;this.comText=e,this.fetch(e,function(e){return t.searchData=e}),console.log(this.searchData)},handleChange:function(e){var t=this;console.log(e),this.companyName=e,e&&this.fetch(e,function(e){return t.searchData=e})},searchEmployee:function(e,t){var a=this;s["a"].post("/api/ClientSide/Order/List",{CardID:e,Current:1,PageSize:50}).then(function(e){0===e.code&&(a.employeeList=e.data.rows,t(e.data.rows))}).catch(function(e){console.log(e)})}},Object(i["a"])(n,"handleChange",function(e){this.value=e}),Object(i["a"])(n,"handleSelect",function(e,t){var a=this;this.newBxForm.PName=a.employeeList[e]["姓名"],this.newBxForm.ComName=a.employeeList[e].ComName,this.newBxForm.RLZGUID=a.employeeList[e].RLZGUID,a.ServiceType=a.employeeList[e].ServiceType,a.PGUID=a.employeeList[e].PGUID,this.newBxForm.LinkInfo=a.employeeList[e].rzMobile,a.employeeList[e].rzMobile?this.linkType=!0:this.linkType=!1,a.getBankList()}),Object(i["a"])(n,"getBankList",function(){var e=this;s["a"].post("/api/ClientSide/BankAccountInfo/List",{BankAccountType:"10",PGUID:e.PGUID,pageSize:50,current:1}).then(function(t){var a=t;0===a.code&&(e.bankAccountList=a.data.rows)}).catch(function(e){console.log(e)})}),Object(i["a"])(n,"BXclassChange",function(e){var t=this;t.BXClassCode=e,"21"!=e&&"22"!=e||(t.newBxForm.EventCityCode=""),"20"==t.ServiceType||"11"!=e&&!t.newBxForm.AllIn?t.AFormImportRules.BankAccountInfoGuid[0].required=!1:t.AFormImportRules.BankAccountInfoGuid[0].required=!0,s["a"].post("/api/Dim/Enum/GetBXSubClass",{BXClassCode:e}).then(function(a){var n=a;0===n.code&&(t.BXSubClassCodeArray=n.data.bxsubclass,t.newBxForm.BXSubClassCode="","11"==e&&(t.allowSameTime="是否同时申报生育津贴"),"12"==e&&(t.allowSameTime="是否同时申报生育定额"),t.searchCailiaoFun())}).catch(function(e){console.log(e)})}),Object(i["a"])(n,"BXsubChange",function(e){var t=this;t.newBxForm.BXSubClassCode=e,t.searchCailiaoFun()}),Object(i["a"])(n,"searchCailiaoFun",function(){var e=this;console.log(e.newBxForm);var t={BXClassCode:e.BXClassCode,BXSubClassCode:e.newBxForm.BXSubClassCode,EventCityCode:e.newBxForm.EventCityCode};e.newBxForm.RLZGUID?(t.RLZGUID=e.newBxForm.RLZGUID,s["a"].post("/api/ClientSide/BaoxiaoCailiao/Find",t).then(function(t){var a=t;0===a.code?(e.baoxiaoCailiao=a.data.rows,a.data.rows&&0==a.data.rows.length?e.baoxiaoMsg="此享受项目未找到材料名录，请等待客户电话沟通":e.baoxiaoMsg=""):(e.baoxiaoCailiao="",e.baoxiaoMsg=a.msg)}).catch(function(e){console.log(e)})):e.$message.error("请先输入身份证号选择员工")}),Object(i["a"])(n,"allInChange",function(e){"20"==this.ServiceType||!e&&11!=this.newBxForm.BXClassCode?this.AFormImportRules.BankAccountInfoGuid[0].required=!1:this.AFormImportRules.BankAccountInfoGuid[0].required=!0}),Object(i["a"])(n,"areaClose",function(e){this.drawer.area={show:!1}}),Object(i["a"])(n,"areaSure",function(e){this.chooseCityObject.CityCode=e.value,this.chooseCityObject.CityName=e.name,this.newBxForm.EventCityCode=e.value,this.drawer.area={show:!1}}),Object(i["a"])(n,"chooseArea",function(){this.drawer.area={show:!0}}),Object(i["a"])(n,"newBank",function(){var e=this;e.newBxForm.RLZGUID?e.modal.newbank={show:!0,PGUID:e.PGUID}:e.$message.error("请先输入身份证号选择员工")}),Object(i["a"])(n,"newBxSubmit",function(e,t){var a=this,n=a.newBxForm;n.EventCityCode=a.newBxForm.EventCityCode,n.BXClassCode=a.BXClassCode,n.AllIn=n.AllIn.length>0,"11"==n.BXClassCode?n.PaymentTo=10:n.PaymentTo=20,n.CailiaoFinished="0"!=t,this.form.validateFields(function(e,t){e||s["a"].post("/api/ClientSide/Baoxiao/Add",n).then(function(e){0===e.code?(a.$message.success(e.msg),a.onClose(),a.refresh()):a.$message.error(e.msg)}).catch(function(e){console.log(e)})})}),n)},d=u,p=(a("229f"),a("2877")),f=Object(p["a"])(d,o,r,!1,null,"ad367f2e",null);t["default"]=f.exports}}]);