(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35dd515e","chunk-3f21affe"],{"053a":function(e,t,r){"use strict";var a=r("985b"),n=r.n(a);n.a},"5dbc":function(e,t,r){var a=r("d3f4"),n=r("8b97").set;e.exports=function(e,t,r){var o,i=t.constructor;return i!==r&&"function"==typeof i&&(o=i.prototype)!==r.prototype&&a(o)&&n&&n(e,o),e}},8354:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"tab-title"},[e._v("医保补缴记录")]),r("a-table",{attrs:{columns:e.yiliaoColumns,dataSource:e.yiliaoSource,pagination:!1,size:"middle",rowKey:"SBBJGUID"},scopedSlots:e._u([{key:"BujiaoType",fn:function(t,a){return r("span",{},[e._v(e._s(e.BujiaoTypeObject[a.BujiaoType]))])}},{key:"ChargeStatus",fn:function(t,a){return r("span",{},[e._v(e._s(0==a.ChargeStatus?"未缴费":"已缴费"))])}},{key:"ChargeuserID",fn:function(t,a){return r("span",{},[e._v(e._s(e.UserArray[a.ChargeuserID]))])}},{key:"ChargeType",fn:function(t,a){return r("span",{},[e._v(e._s(e.ChargeType[a.ChargeType]))])}},{key:"action",fn:function(t,a){return r("span",{},[0!=a.ChargeStatus||"76"!=e.role&&"78"!=e.role?e._e():[r("a",{on:{click:function(t){return e.confirmCharge(a)}}},[e._v("确认收款")]),r("a-divider",{attrs:{type:"vertical"}}),r("a",{on:{click:function(t){return e.deleteCharge(a)}}},[e._v("删除")])]],2)}}])}),r("a-modal",{attrs:{destroyOnClose:!0,visible:e.showCharge,maskClosable:!1,width:400},on:{cancel:e.onCloseCharge,ok:e.submitCharge}},[r("template",{slot:"title"},[e._v("\n        确认收款\n      ")]),r("a-form",{attrs:{form:e.chargeForm}},[r("a-form-item",{attrs:{label:"收费方式",labelCol:{span:5},wrapperCol:{span:16}}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ChargeType",{rules:e.chargeForm.selectReq}],expression:"['ChargeType',{rules:chargeForm.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.ChargeTypeArray,function(t){return r("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1)],2)],1)},n=[],o=(r("c5f6"),r("c32d")),i=r.n(o),c=r("b775"),s=[{title:"基数",dataIndex:"Jishu"},{title:"比例",dataIndex:"Bili"},{title:"手续费",dataIndex:"Shouxufei"},{title:"补缴开始月份",dataIndex:"BeginMonth"},{title:"补缴结束月份",dataIndex:"EndMonth"},{title:"补缴月数",dataIndex:"TotalMonth"},{title:"补缴金额",dataIndex:"Amount"},{title:"收费方式",scopedSlots:{customRender:"ChargeType"}},{title:"补缴类型",scopedSlots:{customRender:"BujiaoType"}},{title:"状态",scopedSlots:{customRender:"ChargeStatus"}},{title:"备注",dataIndex:"Remarks"},{title:"客服",scopedSlots:{customRender:"ChargeuserID"}},{title:"操作",scopedSlots:{customRender:"action"}}],u={props:{RLZGUID:{type:String,default:""},PGUID:{type:String,default:""},BujiaoTypeObject:{type:Object,default:function(){return{}}},RSB_ContactTypeObject:{type:Object,default:function(){return{}}},UserArray:{type:Object,default:function(){return{}}},ChargeType:{type:Object,default:function(){return{}}},role:{type:Number,default:0}},data:function(){return{yiliaoColumns:s,moment:i.a,yiliaoSource:[],showCharge:!1,charge:{SBBJGUID:""},chargeForm:this.$form.createForm(this),chargeFormImportRules:{selectReq:[{required:!0,message:"请选择"}]},ChargeTypeArray:[]}},created:function(){this.init()},methods:{init:function(){var e=this;c["a"].post("/api/Dim/Enum/GetEnum",{Names:["ChargeType"]}).then(function(t){0===t.code?e.ChargeTypeArray=t.data.ChargeType:e.$message.error(t.msg)}).catch(function(e){console.log(e)}),e.yiliaoList()},yiliaoList:function(){var e=this;c["a"].post("/api/Employee/shebao/emYiLiaoBuJiao",{RLZGUID:e.RLZGUID}).then(function(t){0===t.code&&(e.yiliaoSource=t.data)}).catch(function(e){console.log(e)})},confirmCharge:function(e){this.showCharge=!0,this.charge.SBBJGUID=e.SBBJGUID},deleteCharge:function(e){var t=this;this.$confirm({title:"确定删除该条信息?",content:"点击确定删除。",onOk:function(){c["a"].post("/api/Employee/shebao/DeleteShouFei",{SBBJGUID:e.SBBJGUID}).then(function(e){0===e.code?(t.$message.success(e.msg),t.yiliaoList()):t.$message.error(e.msg)}).catch(function(e){console.log(e)})},onCancel:function(){}})},onCloseCharge:function(){this.showCharge=!1},submitCharge:function(){var e=this,t={};e.chargeForm.validateFields(function(r,a){r||(t=a,t.SBBJGUID=e.charge.SBBJGUID,e.$loading.open(),c["a"].post("/api/Employee/shebao/QueRenShouFei",t).then(function(t){e.$loading.close(),0===t.code?(e.$message.success(t.msg),e.yiliaoList(),e.onCloseCharge(),e.chargeForm.resetFields()):e.$message.error(t.msg)}).catch(function(t){e.$loading.close(),console.log(t)}))})}}},l=u,f=(r("053a"),r("2877")),p=Object(f["a"])(l,a,n,!1,null,"1f4ac580",null);t["default"]=p.exports},"8b97":function(e,t,r){var a=r("d3f4"),n=r("cb7c"),o=function(e,t){if(n(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:a(e,r),e}}({},!1):void 0),check:o}},"985b":function(e,t,r){},aa77:function(e,t,r){var a=r("5ca1"),n=r("be13"),o=r("79e5"),i=r("fdef"),c="["+i+"]",s="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(e,t,r){var n={},c=o(function(){return!!i[e]()||s[e]()!=s}),u=n[e]=c?t(p):i[e];r&&(n[r]=u),a(a.P+a.F*c,"String",n)},p=f.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(l,"")),e};e.exports=f},c5f6:function(e,t,r){"use strict";var a=r("7726"),n=r("69a8"),o=r("2d95"),i=r("5dbc"),c=r("6a99"),s=r("79e5"),u=r("9093").f,l=r("11e9").f,f=r("86cc").f,p=r("aa77").trim,h="Number",d=a[h],g=d,y=d.prototype,m=o(r("2aeb")(y))==h,C="trim"in String.prototype,I=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){t=C?t.trim():p(t,3);var r,a,n,o=t.charCodeAt(0);if(43===o||45===o){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+t}for(var i,s=t.slice(2),u=0,l=s.length;u<l;u++)if(i=s.charCodeAt(u),i<48||i>n)return NaN;return parseInt(s,a)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof d&&(m?s(function(){y.valueOf.call(r)}):o(r)!=h)?i(new g(I(t)),r,d):I(t)};for(var b,_=r("9e1e")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),v=0;_.length>v;v++)n(g,b=_[v])&&!n(d,b)&&f(d,b,l(g,b));d.prototype=y,y.constructor=d,r("2aba")(a,h,d)}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);