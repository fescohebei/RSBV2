(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5da44824"],{"1af6":function(e,t,o){var n=o("63b6");n(n.S,"Array",{isArray:o("9003")})},"53f9":function(e,t,o){},"72ab":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a-modal",{attrs:{destroyOnClose:!1,visible:this.visible.show,maskClosable:!1,width:450,zIndex:1001,centered:!0},on:{cancel:e.onClose,ok:e.submit}},[o("template",{slot:"title"},[e._v("\n  添加城市服务\n")]),o("a-form",{attrs:{form:e.form}},[o("a-form-item",{attrs:{label:"城市",labelCol:{span:7},wrapperCol:{span:16}}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["CityCode",{rules:e.AFormImportRules.selectReq}],expression:"['CityCode',{rules:AFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.cityList,function(t){return o("a-select-option",{key:t.CityCode},[e._v(e._s(t.CityName))])}),1)],1),o("a-form-item",{attrs:{label:"接单客服部门",labelCol:{span:7},wrapperCol:{span:16}}},[o("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["deptId",{rules:e.AFormImportRules.selectReq}],expression:"['deptId',{rules:AFormImportRules.selectReq}]"}],attrs:{options:e.options,loadData:e.loadData,changeOnSelect:"",placeholder:"请选择部门"},on:{change:e.onChange}})],1),o("a-form-item",{attrs:{label:"接单客服",labelCol:{span:7},wrapperCol:{span:16}}},[o("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["OrderUserid",{rules:e.AFormImportRules.selectReq}],expression:"['OrderUserid',{rules:AFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.DepList,function(t){return o("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1)],2)},a=[],r=o("75fc"),s=(o("7f7f"),o("ac6a"),o("b775")),i={props:{show:{type:Object,default:function(){return{show:!1}}},close:{type:Function,required:!1,default:null},sure:{type:Function,required:!1,default:null}},data:function(){return{visible:{show:!1},form:this.$form.createForm(this),AFormImportRules:{selectReq:[{required:!0,message:"请选择"}]},cityList:[],options:[],DepList:[]}},watch:{show:function(e,t){var o=this;o.visible=e}},created:function(){var e=this;this.$watch("show",function(t,o){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.options=[],this.DepList=[],this.form.resetFields(),this.$emit("close",!1)},init:function(){var e=this;s["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:"1"}).then(function(t){0===t.code&&t.data.forEach(function(t,o){var n={};n.value=t.code,n.label=t.name,n.isLeaf=!1,e.options.push(n)})}).catch(function(e){console.log(e)}),s["a"].post("/api/company/com/ComBranchList").then(function(t){0===t.code&&(e.cityList=t.data.rows)}).catch(function(e){console.log(e)})},submit:function(){var e=this;this.form.validateFields(function(t,o){if(!t){var n=o;n.CityCode=""+n.CityCode,n.deptId=n.deptId[n.deptId.length-1],e.$emit("sure",o),console.log(o)}})},loadData:function(e){var t=e[e.length-1],o=this;t.loading=!0,s["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,o){var n={};n.value=e.code,n.label=e.name,n.isLeaf=!1,t.children.push(n)}),o.options=Object(r["a"])(o.options)):(t.isLeaf=!0,t.loading=!1))}).catch(function(e){console.log(e),t.loading=!1})},onChange:function(e){this.DepList=[],this.SaleUserid="",this.userbydepid(e[e.length-1])},userbydepid:function(e){var t=this;s["a"].post("/api/Org/User/UsersByDepId",{DepId:e}).then(function(e){var o=e;0===o.code&&(t.DepList=o.data,t.form.setFieldsValue({OrderUserid:""}))}).catch(function(e){console.log(e)})}}},l=i,c=(o("f351"),o("2877")),u=Object(c["a"])(l,n,a,!1,null,"e8066652",null);t["default"]=u.exports},"75fc":function(e,t,o){"use strict";var n=o("a745"),a=o.n(n);function r(e){if(a()(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}var s=o("774e"),i=o.n(s),l=o("c8bb"),c=o.n(l);function u(e){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return i()(e)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(e){return r(e)||u(e)||d()}o.d(t,"a",function(){return p})},"774e":function(e,t,o){e.exports=o("d2d5")},a745:function(e,t,o){e.exports=o("f410")},c8bb:function(e,t,o){e.exports=o("54a1")},f351:function(e,t,o){"use strict";var n=o("53f9"),a=o.n(n);a.a},f410:function(e,t,o){o("1af6"),e.exports=o("584a").Array.isArray}}]);