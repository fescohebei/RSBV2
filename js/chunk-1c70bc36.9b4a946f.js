(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c70bc36"],{"735d":function(t,e,a){"use strict";var i=a("ef08"),o=a.n(i);o.a},"9ed6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"main",staticStyle:{"background-image":"url(/images/1.jpg)"}},[a("div",{staticClass:"layui-container"},[a("div",{staticClass:"layui-row"},[a("div",{staticClass:"layui-col-md7"},[t._v(" ")]),a("div",{staticClass:"layui-col-md4 layui-col-md-offset1 login-box",staticStyle:{"background-color":"aliceblue","text-align":"center"}},[a("a-tabs",{attrs:{type:"card"}},[a("a-tab-pane",{key:"1",attrs:{tab:"二维码"}},[a("div",{attrs:{id:"login_container"}})]),a("a-tab-pane",{key:"2",attrs:{tab:"账号密码"}},[a("a-form",{staticClass:"login-form login-mian-box",attrs:{id:"components-form-demo-normal-login",form:t.form},on:{submit:t.handleLogin}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入用户名!"}]}],expression:"[\n            'username',\n            { rules: [{ required: true, message: '请输入用户名!' }] }\n          ]"}],attrs:{placeholder:"用户名",size:"large"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码!"}]}],expression:"['password',{ rules: [{ required: true, message: '请输入密码!' }] }\n          ]"}],attrs:{type:"password",placeholder:"密码",size:"large"}},[a("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-button",{staticClass:"login-form-button",attrs:{type:"primary","html-type":"button",size:"large"},on:{click:t.handleLogin}},[t._v("登录")])],1)],1)],1)],1)],1)])])]),t._m(1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"layui-container"},[a("div",{staticClass:"layui-row"},[a("div",{staticClass:"layui-col-md4"},[a("img",{staticStyle:{height:"60px","padding-top":"15px","padding-bottom":"15px"},attrs:{src:"/images/logo.png"}})]),a("div",{staticClass:"layui-col-md8",staticStyle:{"text-align":"right"}},[a("img",{staticStyle:{height:"60px","padding-top":"15px","padding-bottom":"15px"},attrs:{src:"/images/d1_03.png"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"layui-container"},[a("div",{staticClass:"layui-col-md12",staticStyle:{float:"unset",margin:"0 auto","text-align":"center","padding-top":"35px"}},[a("div",[a("span",{staticStyle:{color:"#a8a8a8"}},[t._v("FESCO河北旗下网站：人事帮 © 2019 冀ICP备14002418号-1")])])])])}],n=a("b775"),s={name:"Login",data:function(){return{form:this.$form.createForm(this),AFormImportRules:{userName:{rules:[{required:!0,message:"请输入用户名"}]},password:{rules:[{required:!0,message:"请输入密码"}]}},loading:!1,redirect:void 0,urlbase:""}},mounted:function(){var t=this;n["a"].post("/api/Login/Config").then(function(e){if(0==e.code){t.urlbase=e.data.urlbase;var a=encodeURIComponent(e.data.urlbase+"/api/Login/notInDingTalk"),i="https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid="+e.data.appid+"&response_type=code&scope=snsapi_login&state=STATE&redirect_uri="+a,o=encodeURIComponent(i);DDLogin({id:"login_container",goto:o,style:"border:none;background-color:#FFFFFF;",width:"265",height:"300"});var n=function(t){var e=t.origin;if("https://login.dingtalk.com"==e){var a=t.data;console.log("loginTmpCode",a),window.location.href=i+"&loginTmpCode="+a}};"undefined"!=typeof window.addEventListener?window.addEventListener("message",n,!1):"undefined"!=typeof window.attachEvent&&window.attachEvent("onmessage",n)}else console.log(e.msg)}).catch(function(t){console.log(t)})},methods:{handleLogin:function(){var t=this,e=this;this.form.validateFields(function(a,i){a||(e.loading=!0,n["a"].post("/api/login/UserNameLogin",i).then(function(t){var a=t;0!==a.code?(e.$message.error(a.msg),e.loading=!1):window.location.href="/"}.bind(t)).catch(function(t){e.loading=!1}))})}}},r=s,l=(a("735d"),a("2877")),c=Object(l["a"])(r,i,o,!1,null,null,null);e["default"]=c.exports},ef08:function(t,e,a){}}]);