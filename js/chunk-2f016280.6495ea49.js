(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f016280","chunk-a6c905ea"],{"02f4":function(t,a,e){var i=e("4588"),o=e("be13");t.exports=function(t){return function(a,e){var n,r,s=String(o(a)),l=i(e),c=s.length;return l<0||l>=c?t?"":void 0:(n=s.charCodeAt(l),n<55296||n>56319||l+1===c||(r=s.charCodeAt(l+1))<56320||r>57343?t?s.charAt(l):n:t?s.slice(l,l+2):r-56320+(n-55296<<10)+65536)}}},"0390":function(t,a,e){"use strict";var i=e("02f4")(!0);t.exports=function(t,a,e){return a+(e?i(t,a).length:1)}},"0bfb":function(t,a,e){"use strict";var i=e("cb7c");t.exports=function(){var t=i(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},"214f":function(t,a,e){"use strict";e("b0c5");var i=e("2aba"),o=e("32e9"),n=e("79e5"),r=e("be13"),s=e("2b4c"),l=e("520a"),c=s("species"),u=!n(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,a=t.exec;t.exec=function(){return a.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,a,e){var d=s(t),f=!n(function(){var a={};return a[d]=function(){return 7},7!=""[t](a)}),b=f?!n(function(){var a=!1,e=/a/;return e.exec=function(){return a=!0,null},"split"===t&&(e.constructor={},e.constructor[c]=function(){return e}),e[d](""),!a}):void 0;if(!f||!b||"replace"===t&&!u||"split"===t&&!p){var x=/./[d],h=e(r,d,""[t],function(t,a,e,i,o){return a.exec===l?f&&!o?{done:!0,value:x.call(a,e,i)}:{done:!0,value:t.call(e,a,i)}:{done:!1}}),g=h[0],v=h[1];i(String.prototype,t,g),o(RegExp.prototype,d,2==a?function(t,a){return v.call(t,this,a)}:function(t){return v.call(t,this)})}}},"28a5":function(t,a,e){"use strict";var i=e("aae3"),o=e("cb7c"),n=e("ebd6"),r=e("0390"),s=e("9def"),l=e("5f1b"),c=e("520a"),u=e("79e5"),p=Math.min,d=[].push,f="split",b="length",x="lastIndex",h=4294967295,g=!u(function(){RegExp(h,"y")});e("214f")("split",2,function(t,a,e,u){var v;return v="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[b]||2!="ab"[f](/(?:ab)*/)[b]||4!="."[f](/(.?)(.?)/)[b]||"."[f](/()()/)[b]>1||""[f](/.?/)[b]?function(t,a){var o=String(this);if(void 0===t&&0===a)return[];if(!i(t))return e.call(o,t,a);var n,r,s,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,f=void 0===a?h:a>>>0,g=new RegExp(t.source,u+"g");while(n=c.call(g,o)){if(r=g[x],r>p&&(l.push(o.slice(p,n.index)),n[b]>1&&n.index<o[b]&&d.apply(l,n.slice(1)),s=n[0][b],p=r,l[b]>=f))break;g[x]===n.index&&g[x]++}return p===o[b]?!s&&g.test("")||l.push(""):l.push(o.slice(p)),l[b]>f?l.slice(0,f):l}:"0"[f](void 0,0)[b]?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,i){var o=t(this),n=void 0==e?void 0:e[a];return void 0!==n?n.call(e,o,i):v.call(String(o),e,i)},function(t,a){var i=u(v,t,this,a,v!==e);if(i.done)return i.value;var c=o(t),d=String(this),f=n(c,RegExp),b=c.unicode,x=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(g?"y":"g"),m=new f(g?c:"^(?:"+c.source+")",x),y=void 0===a?h:a>>>0;if(0===y)return[];if(0===d.length)return null===l(m,d)?[d]:[];var w=0,_=0,S=[];while(_<d.length){m.lastIndex=g?_:0;var k,C=l(m,g?d:d.slice(_));if(null===C||(k=p(s(m.lastIndex+(g?0:_)),d.length))===w)_=r(d,_,b);else{if(S.push(d.slice(w,_)),S.length===y)return S;for(var D=1;D<=C.length-1;D++)if(S.push(C[D]),S.length===y)return S;_=w=k}}return S.push(d.slice(w)),S}]})},3591:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-drawer",{attrs:{title:"生育津贴认定结果录入",placement:"right",closable:!1,maskClosable:!1,visible:this.visible.show,width:400}},[e("a-card",{attrs:{bordered:!1}},[e("a-form",{attrs:{form:t.form}},["12"==t.visible.baoxiaoDetail.baoxiao.BXClassCode?e("a-form-item",{attrs:{label:"享受津贴天数",labelCol:{span:9},wrapperCol:{span:15}}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["AllowanceDays",{rules:t.AFormImportRules.iptInput}],expression:"['AllowanceDays',{rules:AFormImportRules.iptInput}]"}],attrs:{suffix:"天"}})],1):t._e(),e("a-form-item",{attrs:{label:"享受津贴额度",labelCol:{span:9},wrapperCol:{span:15}}},[e("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["AllowanceAmount",{rules:t.AFormImportRules.iptInput}],expression:"['AllowanceAmount',{rules:AFormImportRules.iptInput}]"}],attrs:{suffix:"元"}})],1)],1)],1),e("div",{style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[e("a-button",{on:{click:t.onClose}},[t._v("取消")]),e("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)},o=[],n=e("b775"),r=e("61f7"),s={props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,baoxiaoDetail:{}},dim:{Brand:[]},DepList:[],form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"},{validator:this.ConfirmNumber}]}}},watch:{show:function(t,a){var e=this;e.visible=t,t.show&&e.init()}},methods:{onClose:function(){this.visible.show=!1,this.refresh&&this.refresh(),this.form.resetFields()},init:function(){},handleSubmit:function(){var t=this;this.form.validateFields(function(a,e){if(!a){var i=e;i.SBBXGuid=t.visible.baoxiaoDetail.baoxiao.SBBXGuid,t.$loading.open(),n["a"].post("/api/ClientSide/BaoxiaoDK/Allowance",i).then(function(a){t.$loading.close();var e=a;e.code>0?t.$message.error(e.msg):(t.onClose(),t.refresh(),t.$message.success(e.msg))}).catch(function(a){t.$loading.close(),console.log(a)})}})},ConfirmNumber:function(t,a,e){!a||Object(r["b"])(a)?e():e("请输入数字！")}}},l=s,c=e("2877"),u=Object(c["a"])(l,i,o,!1,null,null,null);a["default"]=u.exports},"520a":function(t,a,e){"use strict";var i=e("0bfb"),o=RegExp.prototype.exec,n=String.prototype.replace,r=o,s="lastIndex",l=function(){var t=/a/,a=/b*/g;return o.call(t,"a"),o.call(a,"a"),0!==t[s]||0!==a[s]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(r=function(t){var a,e,r,u,p=this;return c&&(e=new RegExp("^"+p.source+"$(?!\\s)",i.call(p))),l&&(a=p[s]),r=o.call(p,t),l&&r&&(p[s]=p.global?r.index+r[0].length:a),c&&r&&r.length>1&&n.call(r[0],e,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(r[u]=void 0)}),r}),t.exports=r},"5f1b":function(t,a,e){"use strict";var i=e("23c6"),o=RegExp.prototype.exec;t.exports=function(t,a){var e=t.exec;if("function"===typeof e){var n=e.call(t,a);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,a)}},"61f7":function(t,a,e){"use strict";e.d(a,"c",function(){return n}),e.d(a,"b",function(){return r}),e.d(a,"d",function(){return s}),e.d(a,"a",function(){return l});e("28a5");var i=e("c32d"),o=e.n(i);function n(t){var a=/^1[3|4|5|6|7|8|9][0-9]\d{8}$/;return a.test(t)}function r(t){var a=/^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/;return a.test(t)}function s(t){var a=t?t.charAt(16):null;return a%2==0?"女":"男"}function l(t){var a=t?t.substr(6,4):null;return o()().diff(a,"years")}},aae3:function(t,a,e){var i=e("d3f4"),o=e("2d95"),n=e("2b4c")("match");t.exports=function(t){var a;return i(t)&&(void 0!==(a=t[n])?!!a:"RegExp"==o(t))}},b0c5:function(t,a,e){"use strict";var i=e("520a");e("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},c45b:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-drawer",{attrs:{message:"",visible:this.visible.show,width:650,destroyOnClose:!0,closable:!1},on:{close:t.onClose}},[e("template",{slot:"title"},[t._v("\n    详情\n    "),32==t.baoxiaoDetail.baoxiao.BXStatus||38==t.baoxiaoDetail.baoxiao.BXStatus?e("a-button",{staticStyle:{float:"right"},attrs:{size:"small",icon:"audit"},on:{click:t.Apply}},[t._v("提交社保机构")]):t._e(),32==t.baoxiaoDetail.baoxiao.BXStatus||40==t.baoxiaoDetail.baoxiao.BXStatus?e("a-button",{staticStyle:{float:"right","margin-right":"10px"},attrs:{size:"small",icon:"exception"},on:{click:t.replenish}},[t._v("材料不完整")]):t._e(),40==t.baoxiaoDetail.baoxiao.BXStatus?e("a-button",{staticStyle:{float:"right","margin-right":"10px"},attrs:{size:"small",icon:"form"},on:{click:t.resultentry}},[t._v("生育津贴认定结果录入")]):t._e()],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("姓名：")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.baoxiaoDetail.baoxiao["姓名"]))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("身份证号：")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.baoxiaoDetail.baoxiao["身份证号"]))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("公司名称：")]),e("a-col",{attrs:{span:19}},[t._v(t._s(t.baoxiaoDetail.baoxiao.ComName))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("手机号码：")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.baoxiaoDetail.baoxiao.LinkInfo))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("创建时间：")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.baoxiaoDetail.baoxiao.CreateDate))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("发生城市：")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.city[t.baoxiaoDetail.baoxiao.EventCityCode]))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("付款方向：")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.PaymentTo[t.baoxiaoDetail.baoxiao.PaymentTo]))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("社保报销类型：")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.BXClass[t.baoxiaoDetail.baoxiao.BXClassCode]))]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("报销类型子类：")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.visible.BXSubClass[t.baoxiaoDetail.baoxiao.BXSubClassCode]))])],1),t.baoxiaoDetail.baoxiao.AllowanceDays?e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("享受津贴天数：")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.baoxiaoDetail.baoxiao.AllowanceDays)+"天")]),e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("享受津贴额度：")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.baoxiaoDetail.baoxiao.AllowanceAmount)+"元")])],1):t._e(),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("备注：")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.baoxiaoDetail.baoxiao.Remarks))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("客服备注：")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.baoxiaoDetail.baoxiao.KFRemarks))])],1),e("a-row",{staticStyle:{padding:"8px 0"},attrs:{gutter:10}},[e("a-col",{staticStyle:{"text-align":"right"},attrs:{span:5}},[t._v("运行备注：")]),e("a-col",{attrs:{span:6}},[t._v(t._s(t.baoxiaoDetail.baoxiao.YXRemarks))])],1),e("a-tabs",{staticStyle:{"margin-top":"20px"},attrs:{type:"card",defaultActiveKey:"1"},on:{change:t.callback}},[e("a-tab-pane",{key:"1",staticStyle:{"margin-top":"40px"},attrs:{tab:"报销记录"}},[t.baoxiaoDetail.logs.length>0?[e("a-timeline",t._l(t.baoxiaoDetail.logs,function(a){return e("a-timeline-item",{key:a.index},[e("p",[t._v(t._s(a.LogTime)+" "),e("a-divider",{attrs:{type:"vertical"}}),t._v(" "+t._s(t.visible.BXStatus[a.BXStatus])+"  \n              ")],1),a.Remarks?e("p",[t._v("备注："+t._s(a.Remarks))]):t._e()])}),1)]:t._e(),0==t.baoxiaoDetail.logs.length?[e("div",[e("a-row",{staticStyle:{"text-align":"center"}},[e("a-icon",{attrs:{type:"smile"}}),t._v(" 暂无数据")],1)],1)]:t._e()],2),e("a-tab-pane",{key:"2",attrs:{tab:"收款账号信息"}},[e("a-row",{staticStyle:{"margin-top":"40px"},attrs:{gutter:10}},[e("a-col",{attrs:{xs:8,sm:6,md:3,lg:3,xl:4,align:"right"}},[t._v("\n              账号名称：\n            ")]),e("a-col",{attrs:{xs:4,sm:6,md:4,lg:5,xl:6}},[t._v("\n              "+t._s(t.baoxiaoDetail.bankAccountInfo&&t.baoxiaoDetail.bankAccountInfo.BankAccountName?t.baoxiaoDetail.bankAccountInfo.BankAccountName:"无")+"\n            ")]),e("a-col",{attrs:{xs:4,sm:6,md:3,lg:3,xl:4,align:"right"}},[t._v("\n              银行账号：\n            ")]),e("a-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:6}},[t._v("\n              "+t._s(t.baoxiaoDetail.bankAccountInfo&&t.baoxiaoDetail.bankAccountInfo.BankAccount?t.baoxiaoDetail.bankAccountInfo.BankAccount:"无")+"\n            ")])],1),e("a-row",{attrs:{gutter:10}},[e("a-col",{attrs:{xs:8,sm:6,md:3,lg:3,xl:4,align:"right"}},[t._v("\n              开户行：\n            ")]),e("a-col",{attrs:{xs:4,sm:6,md:4,lg:5,xl:6}},[t._v("\n              "+t._s(t.baoxiaoDetail.bankAccountInfo&&t.baoxiaoDetail.bankAccountInfo.BankName?t.baoxiaoDetail.bankAccountInfo.BankName:"无")+"\n            ")]),e("a-col",{attrs:{xs:4,sm:6,md:3,lg:3,xl:4,align:"right"}},[t._v("\n              账号类型：\n            ")]),e("a-col",{attrs:{xs:8,sm:6,md:4,lg:5,xl:6}},[t._v("\n              "+t._s(t.baoxiaoDetail.bankAccountInfo&&t.baoxiaoDetail.bankAccountInfo.BankAccountType?t.visible.PaymentTo[t.baoxiaoDetail.bankAccountInfo.BankAccountType]:"无")+"\n            ")])],1)],1)],1),e("a-modal",{attrs:{title:t.dialogTitle,visible:t.showLayer,"confirm-loading":t.confirmLoading},on:{ok:t.handleOk,cancel:t.handleCancel}},[e("a-form",{attrs:{form:t.form,layout:"horizontal"}},[e("div",[e("a-row",{attrs:{gutter:10}},[e("a-col",{attrs:{md:24}},[e("a-form-item",{attrs:{label:"情况说明",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[e("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["Remarks",{rules:t.AFormImportRules.textarea}],expression:"['Remarks',{rules:AFormImportRules.textarea}]"}],attrs:{rows:"4"}})],1)],1)],1)],1)])],1),e("drawer-result-entry",{attrs:{show:t.drawer.resultentry,refresh:t.init}})],2)},o=[],n=e("b775"),r=e("3591"),s=(e("c32d"),{components:{DrawerResultEntry:r["default"]},props:{show:{type:Object,default:{show:!1}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,id:{},PaymentTo:{},BXStatus:{},BXStatusList:[],BXClass:{},BXSubClass:{},city:{}},form:this.$form.createForm(this),AFormImportRules:{textarea:[{required:!0,message:"情况说明不能为空"}]},drawer:{resultentry:{show:!1}},baoxiaoDetail:{bankAccountInfo:{},baoxiao:{"姓名":"","身份证号":"",LinkInfo:"",CreateDate:"",EventCityCode:"",PaymentTo:"",BXClassCode:"",BXSubClassCode:"",Cailiao:null,Remarks:""},logs:[]},dialogTitle:"",showLayer:!1,confirmLoading:!1}},created:function(){var t=this;this.$watch("show",function(a,e){t.visible=a,console.log(t.visible),t.visible.show&&t.init()})},methods:{init:function(){var t=this;n["a"].post("/api/ClientSide/BaoxiaoDK/Detail",{SBBXGuid:t.show.id}).then(function(a){0===a.code&&(t.baoxiaoDetail=a.data)}).catch(function(t){console.log(t)})},onClose:function(){this.visible.show=!1,this.baoxiaoDetail={bankAccountInfo:{},baoxiao:{"姓名":"","身份证号":"",LinkInfo:"",CreateDate:"",EventCityCode:"",PaymentTo:"",BXClassCode:"",BXSubClassCode:"",Cailiao:null,Remarks:""},logs:[]},this.refresh&&this.refresh()},detail:function(t){this.drawer.detail={show:!0,id:t.SBOrderItemGuid}},Apply:function(){this.showLayer=!0,this.dialogTitle="上报社保机构",this.dialogType="apply"},replenish:function(){this.showLayer=!0,this.dialogTitle="材料不完整",this.dialogType="replenish"},callback:function(t){},handleOk:function(t){var a=this,e="";this.form.validateFields(function(t,i){t||("apply"==a.dialogType&&(e="/api/ClientSide/BaoxiaoDK/Submit"),"replenish"==a.dialogType&&(e="/api/ClientSide/BaoxiaoDK/Replenish"),n["a"].post(e,{SBBXGuid:a.visible.id,Remarks:i.Remarks}).then(function(t){0===t.code&&(a.showLayer=!1,a.$message.success(t.msg),a.dialogTitle="",a.dialogType="",a.onClose(),a.refresh()),t.code>0&&a.$message.error(t.msg)}).catch(function(t){console.log(t)}))})},handleCancel:function(t){this.showLayer=!1,this.dialogTitle="",this.dialogType="",this.form.resetFields()},resultentry:function(){this.drawer.resultentry={show:!0,baoxiaoDetail:this.baoxiaoDetail}}}}),l=s,c=e("2877"),u=Object(c["a"])(l,i,o,!1,null,null,null);a["default"]=u.exports}}]);