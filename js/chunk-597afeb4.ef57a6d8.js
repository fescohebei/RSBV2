(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-597afeb4","chunk-5825b273"],{1745:function(e,t,a){},2889:function(e,t,a){"use strict";var r=a("fb6b"),s=a.n(r);s.a},"3f8b":function(e,t,a){"use strict";var r=a("f883"),s=a.n(r);s.a},"5e43":function(e,t,a){"use strict";var r=a("1745"),s=a.n(r);s.a},"69e7":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!1,visible:this.visible.show,maskClosable:!1,width:450,zIndex:1001,centered:!0},on:{cancel:e.onClose,ok:e.submit}},[a("template",{slot:"title"},[e._v("\n  添加公司\n")]),a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComName",{initialValue:e.comname,rules:e.AFormImportRules.iptInputReq}],expression:"['ComName',{initialValue:comname,rules:AFormImportRules.iptInputReq}]"}]})],1)],1)],2)},s=[],i=a("b775"),n={props:{show:{type:Object,default:function(){return{show:!1}}},comname:{type:String,default:""}},data:function(){return{visible:{show:!1},form:this.$form.createForm(this),AFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}]}}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},submit:function(){var e=this;this.form.validateFields(function(t,a){if(!t){var r=a;i["a"].post("/api/Company/Com/Add",r).then(function(t){0===t.code&&(e.$message.success("提交成功!"),e.onClose())}).catch(function(e){console.log(e)})}})}}},o=n,l=(a("7216"),a("2877")),c=Object(l["a"])(o,r,s,!1,null,"3c9c495a",null);t["default"]=c.exports},7216:function(e,t,a){"use strict";var r=a("ef75"),s=a.n(r);s.a},9272:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"添加客户服务",destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:1200,footer:null},on:{cancel:e.onClose}},[a("a-steps",{attrs:{current:e.current}},e._l(e.steps,function(e){return a("a-step",{key:e.title,attrs:{title:e.title}})}),1),a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.current,expression:"current==0"}],staticClass:"steps-content"},[a("a-form",{attrs:{form:e.form}},[a("a-row",[a("a-col",{attrs:{span:11}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:4},wrapperCol:{span:19}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ComGuid",{rules:e.AFormImportRules.iptInputReq}],expression:"['ComGuid',{rules:AFormImportRules.iptInputReq}]"}],attrs:{"show-search":"",placeholder:"请输入后选择","default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":null,width:350},on:{search:e.handleSearch}},[e.searchData.length>0?e._l(e.searchData,function(t){return a("a-select-option",{key:t.ComGuid},[e._v("\n                "+e._s(t.ComName)+"\n              ")])}):[a("a-select-option",{key:0,attrs:{disabled:!0}},[e._v("\n                没有该公司，点击右侧添加，添加公司后选择\n              ")])]],2)],1)],1),a("a-col",{staticStyle:{"line-height":"39px"},attrs:{span:3,align:"left"}},[0==e.searchData.length?a("a-button",{attrs:{type:"primary"},on:{click:e.addcompany}},[e._v("添加")]):e._e()],1)],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.current,expression:"current==1"}],staticClass:"steps-content"},[a("a-form",{attrs:{form:e.comForm}},[a("a-row",[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"服务类型",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ServiceType",{rules:e.comFormImportRules.selectReq}],expression:"['ServiceType',{rules:comFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.visible.ServiceType,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"公积金服务类型",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["GJJServiceType",{rules:e.comFormImportRules.selectReq}],expression:"['GJJServiceType',{rules:comFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.visible.ServiceType,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"服务费模式",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["BillingMode",{rules:e.comFormImportRules.selectReq}],expression:"['BillingMode',{rules:comFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.visible.BillingMode,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"补缴服务费模式",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["BuJiaoBillingType",{rules:e.comFormImportRules.selectReq}],expression:"['BuJiaoBillingType',{rules:comFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.visible.BuJiaoBillingType,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"联系规则",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["LinkRoleID",{rules:e.comFormImportRules.selectReq}],expression:"['LinkRoleID',{rules:comFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},[a("a-select-option",{key:"1"},[e._v("按上海")]),a("a-select-option",{key:"2"},[e._v("按北京")]),a("a-select-option",{key:"3"},[e._v("按河北")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"服务流程",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["FlowType",{rules:e.comFormImportRules.selectReq}],expression:"['FlowType',{rules:comFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.visible.FlowTypeList,function(t){return a("a-select-option",{key:t.key},[e._v(e._s(t.text))])}),1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"最低收费",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["AccountFee"],expression:"['AccountFee']"}],staticStyle:{width:"100%"},attrs:{min:0}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"是否有档案服务",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["DangAn"],expression:"['DangAn']"}],attrs:{allowClear:!0},on:{change:e.dangAnChange}},[a("a-select-option",{key:"true"},[e._v("是")]),a("a-select-option",{key:"false"},[e._v("否")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"档案服务费",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["ArchivesPrice",{rules:e.comFormImportRules.iptInputReq}],expression:"['ArchivesPrice',{rules:comFormImportRules.iptInputReq}]"}],staticStyle:{width:"100%"},attrs:{min:0}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"单人服务费",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["UnitPrice"],expression:"['UnitPrice']"}],staticStyle:{width:"100%"},attrs:{min:0}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"是否驻场",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["IsOnsite"],expression:"['IsOnsite']"}],attrs:{allowClear:!0},on:{change:e.onsiteChange}},[a("a-select-option",{key:"true"},[e._v("是")]),a("a-select-option",{key:"false"},[e._v("否")])],1)],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"驻场客服",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["OnsiteUserName",{rules:e.comFormImportRules.onsite}],expression:"['OnsiteUserName',{rules:comFormImportRules.onsite}]"}],staticStyle:{width:"100%"},on:{click:function(t){return e.addKefu("3")}}})],1)],1),"74"==e.visible.role?a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"客服",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["kefuName",{rules:e.comFormImportRules.kefu}],expression:"['kefuName',{rules:comFormImportRules.kefu}]"}],staticStyle:{width:"100%"},on:{click:function(t){return e.addKefu("1")}}})],1)],1):e._e(),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"订单客服",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["OrderUserName",{rules:e.comFormImportRules.kefu}],expression:"['OrderUserName',{rules:comFormImportRules.kefu}]"}],staticStyle:{width:"100%"},on:{click:function(t){return e.addKefu("2")}}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"订单客服所在城市",labelCol:{span:6},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["CityCode",{rules:e.comFormImportRules.kefu}],expression:"['CityCode',{rules:comFormImportRules.kefu}]"}],attrs:{allowClear:!0}},e._l(e.cityList,function(t){return a("a-select-option",{key:t.CityCode},[e._v(e._s(t.CityName))])}),1)],1)],1)],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.current,expression:"current==2"}],staticClass:"steps-content"},[e._l(e.ladderList,function(t,r){return a("div",{key:r,staticClass:"steps-box text-left"},[0==parseInt(t.EmpMin)&&99999==parseInt(t.EmpMax)?[e._v("\n      阶梯"+e._s(r+1)+"："+e._s(t.EmpMin)+"~"+e._s(t.EmpMax)+"人/优惠金额:"),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:0,placeholder:"优惠金额"},model:{value:t.Discount,callback:function(a){e.$set(t,"Discount",a)},expression:"item.Discount"}})]:0==parseInt(t.EmpMin)&&99999!=parseInt(t.EmpMax)?[e._v("\n        阶梯"+e._s(r+1)+"："+e._s(t.EmpMin)+"~"),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:1},on:{change:function(a){return e.ladderChange(t.EmpMax,t,r,"EmpMax")}},model:{value:t.EmpMax,callback:function(a){e.$set(t,"EmpMax",a)},expression:"item.EmpMax"}}),e._v("人/优惠金额:"),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:0,placeholder:"优惠金额"},model:{value:t.Discount,callback:function(a){e.$set(t,"Discount",a)},expression:"item.Discount"}})]:0!=parseInt(t.EmpMin)&&99999==parseInt(t.EmpMax)?[e._v("\n        阶梯"+e._s(r+1)+"："),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:1},on:{change:function(a){return e.ladderChange(t.EmpMin,t,r,"EmpMin")}},model:{value:t.EmpMin,callback:function(a){e.$set(t,"EmpMin",a)},expression:"item.EmpMin"}}),e._v(" ~ "+e._s(t.EmpMax)+"人/优惠金额:"),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:0,placeholder:"优惠金额"},model:{value:t.Discount,callback:function(a){e.$set(t,"Discount",a)},expression:"item.Discount"}})]:[e._v("\n        阶梯"+e._s(r+1)+"："),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:1},on:{change:function(a){return e.ladderChange(t.EmpMin,t,r,"EmpMin")}},model:{value:t.EmpMin,callback:function(a){e.$set(t,"EmpMin",a)},expression:"item.EmpMin"}}),e._v(" ~ "),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:1},on:{change:function(a){return e.ladderChange(t.EmpMax,t,r,"EmpMax")}},model:{value:t.EmpMax,callback:function(a){e.$set(t,"EmpMax",a)},expression:"item.EmpMax"}}),e._v("人/优惠金额:"),a("a-input-number",{staticStyle:{width:"70px","margin-left":"8px"},attrs:{min:0,placeholder:"优惠金额"},model:{value:t.Discount,callback:function(a){e.$set(t,"Discount",a)},expression:"item.Discount"}})],a("a-icon",{staticClass:"ml10",attrs:{type:"plus-circle"},on:{click:function(){return e.add(t,r)}}}),a("a-icon",{staticClass:"dynamic-delete-button ml10",attrs:{type:"minus-circle-o"},on:{click:function(){return e.remove(t,r)}}})],2)}),e.ladderList.length>0?e._e():a("a-button",{staticStyle:{width:"60%"},attrs:{type:"dashed"},on:{click:function(t){return e.add({},-1)}}},[a("a-icon",{attrs:{type:"plus"}}),e._v("增加阶梯优惠\n    ")],1)],2),a("div",{directives:[{name:"show",rawName:"v-show",value:3==e.current,expression:"current==3"}],staticClass:"steps-content"},[a("div",[a("a-form",{attrs:{form:e.form}},e._l(e.cityPriceList,function(t,r){return a("a-row",{key:r},[a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"城市",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{attrs:{readOnly:"",placeholder:"请输入"},on:{click:function(t){return e.chooseArea(r)}},model:{value:t.CityName,callback:function(a){e.$set(t,"CityName",a)},expression:"item.CityName"}})],1)],1),a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"单人价格",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:0},model:{value:t.UnitPrice,callback:function(a){e.$set(t,"UnitPrice",a)},expression:"item.UnitPrice"}})],1)],1),a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"档案价格",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:0},model:{value:t.ArchivesPrice,callback:function(a){e.$set(t,"ArchivesPrice",a)},expression:"item.ArchivesPrice"}}),a("a-icon",{staticClass:"minus-btn ml10",attrs:{type:"minus-circle-o"},on:{click:function(){return e.removeCityPrice(t,r)}}})],1)],1)],1)}),1),a("a-button",{staticStyle:{width:"60%"},attrs:{type:"dashed"},on:{click:e.addCityPrice}},[a("a-icon",{attrs:{type:"plus"}}),e._v("增加城市价格\n      ")],1)],1)]),a("div",{staticClass:"steps-action"},[e.current>0?a("a-button",{on:{click:e.prev}},[e._v("\n      上一步\n    ")]):e._e(),e.current==e.steps.length-1?a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:e.submitAddCustomer}},[e._v("\n      提交\n    ")]):e._e(),e.current<e.steps.length-1?a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:e.next}},[e._v("\n      下一步\n    ")]):e._e()],1),a("model-add-company",{attrs:{show:e.modal.addcompany,comname:e.comText,refresh:e.handleChange}}),a("chooseArea",{attrs:{openDrawer:e.drawer.area.show},on:{Closearea:e.areaClose,Surearea:e.areaSure}}),a("model-add-kefu",{ref:"kefuChild",attrs:{show:e.modal.addkefu},on:{close:e.closeAddKefu,sure:e.sureAddKefu}})],1)},s=[],i=(a("8e6e"),a("456d"),a("7f7f"),a("bd86")),n=(a("ac6a"),a("b775")),o=a("69e7"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{class:["mask",e.openDrawer?"open":"close"],on:{click:e.onClose}}),a("div",{ref:"drawer",class:["drawer","center",e.openDrawer?"open":"close"]},[a("a-row",[a("a-col",{staticClass:"citylist",attrs:{span:14}},[a("a-tree",{attrs:{"expanded-keys":e.expandedKeys,"auto-expand-parent":e.autoExpandParent,"selected-keys":e.selectedKeys,"load-data":e.onLoadData,"tree-data":e.options},on:{expand:e.onExpand,select:e.onSelect},model:{value:e.checkedKeys,callback:function(t){e.checkedKeys=t},expression:"checkedKeys"}})],1),a("a-col",{staticClass:"myCity",attrs:{span:7}},[a("div",[e.city.name?a("a-tag",{attrs:{closable:""},on:{close:e.colseCity}},[e._v(e._s(e.city.name))]):e._e()],1)])],1),a("div",{style:{position:"absolute",bottom:"0",right:"0",width:"100%",padding:"10px 16px",borderTop:"1px solid #e8e8e8",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},[a("a-button",{on:{click:e.onClose}},[e._v("取消")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary","html-type":"submit"},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)])},c=[],u=(a("a481"),a("28a5"),a("75fc")),d={name:"Drawer",data:function(){return{drawerWidth:0,options:[],city:{id:"",name:""},expandedKeys:[],autoExpandParent:!0,checkedKeys:[],selectedKeys:[],replaceFields:{value:"code",title:"name"}}},props:{openDrawer:{type:Boolean,required:!1,default:!1},Closearea:{type:Function,required:!1,default:null},Surearea:{type:Function,required:!1,default:null}},mounted:function(){this.init()},watch:{},methods:{open:function(){this.$emit("change",!0)},getDrawerWidth:function(){return this.$refs.drawer.clientWidth},init:function(){var e=this;n["a"].post("/api/Dim/Enum/GetDim",{Names:["Province"]}).then(function(t){0===t.code&&t.data.Province.forEach(function(t,a){var r={};r.value=t.code,r.title=t.name,r.isLeaf=!1,r.checkable=!1,r.disableCheckbox=!1,e.options.push(r)})}).catch(function(e){console.log(e)})},colseCity:function(){this.city={value:"",name:""}},onLoadData:function(e){var t=this;return new Promise(function(a){e.dataRef.children?a():n["a"].post("/api/Dim/Enum/GetCity",{ProvinceCode:e.value}).then(function(r){0===r.code&&(r.data.city.length>0?(e.dataRef.children=[],r.data.city.forEach(function(t,a){var r={};r.value=t.code,r.title=t.name,r.isLeaf=!0,e.dataRef.children.push(r)}),t.options=Object(u["a"])(t.options),a()):(e.dataRef.isLeaf=!0,t.options=Object(u["a"])(t.options),a()))}).catch(function(e){console.log(e)})})},onExpand:function(e,t){this.expandedKeys=e,this.autoExpandParent=!1},onSelect:function(e,t){e[0]&&e[0].split("-").length<3?this.onExpand(e,t):(this.selectedKeys=e,this.city.value=t.node.value,this.city.name=t.node.title.replace(/\s+/g,""))},onClose:function(){this.$emit("Closearea",!1)},handleSubmit:function(){this.$emit("Surearea",this.city),this.city.name||this.$message.error("你还没有选择城市")}}},p=d,m=(a("2889"),a("2877")),h=Object(m["a"])(p,l,c,!1,null,"2285667c",null),f=h.exports,v=a("9fc2");function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(i["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var w={components:{ModelAddCompany:o["default"],chooseArea:f,ModelAddKefu:v["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{visible:{show:!1,cityList:{},ServiceType:{},BillingMode:{},BuJiaoBillingType:{},UserArray:[],DeptArray:[],FlowTypeList:[],role:""},form:this.$form.createForm(this),AFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}]},comForm:this.$form.createForm(this),comFormImportRules:{iptInputReq:[{required:!1,message:"请输入"}],selectReq:[{required:!0,message:"请选择"}],onsite:[{required:!1,message:"请选择"}],kefu:[{required:!0,message:"请输入"}]},current:0,steps:[{title:"选择客户"},{title:"客户服务"},{title:"阶梯优惠"},{title:"城市价格"}],companyList:[],searchData:[],companyName:"",currentValue:"",options:[],DepList:[],ladderList:[],cityPriceList:[],cityServiceList:[],drawer:{area:{show:!1}},modal:{addcompany:{show:!1},addkefu:{show:!1}},comText:"",cityList:[],addData:{},addKefuObject:[{id:""},{id:""},{id:""}],kefuType:""}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{init:function(){var e=this;n["a"].post("/api/company/com/ComBranchList").then(function(t){0===t.code&&(e.cityList=t.data.rows)}).catch(function(e){console.log(e)})},searchCompany:function(e,t){var a=this;n["a"].post("/api/Company/Com/List",{Keyword:e,Current:1,PageSize:99}).then(function(e){0===e.code&&(a.companyList=e.data.rows,t(e.data.rows))}).catch(function(e){console.log(e)})},onClose:function(){this.visible.show=!1,this.form.resetFields(),this.comForm.resetFields(),this.ladderList=[],this.cityPriceList=[],this.current=0},submitAddCustomer:function(){var e=this,t=e.addData;t.ComPriceSteps=e.ladderList,t.ComPriceCitys=e.cityPriceList,t.OnsiteUserid=e.addKefuObject[2].id,t.OrderUserid=e.addKefuObject[1].id,"74"==e.visible.role&&(t.KefuUserid=e.addKefuObject[0].id);try{e.cityPriceList.forEach(function(t,a){if(""===t.CityCode||""===t.UnitPrice||""===t.ArchivesPrice)throw e.$message.error("请输入完整的城市价格信息！"),Error()})}catch(a){return}n["a"].post("/api/Company/Service/Add",t).then(function(t){0===t.code?(e.$message.success("提交成功!"),e.onClose(),e.refresh()):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},next:function(){var e=this;if(0==this.current)this.form.validateFields(function(t,a){t||(console.log(a),e.current++,e.addData=b({},a),console.log(e.addData))});else if(1==this.current)this.comForm.validateFields(function(t,a){if(!t){if("true"==a.DangAn&&null==a.ArchivesPrice)return void e.$message.error("请输入档案服务费！");if("true"==a.IsOnsite&&null==a.OnsiteUserName)return void e.$message.error("请输入驻场客服！");e.addData=b({},e.addData,{},a),console.log(e.addData),e.current++}});else if(2==this.current&&this.ladderList.length>0){var t=this;try{t.ladderList.forEach(function(e,a){if(console.log(e),""===e.EmpMin||""===e.EmpMax||""===e.Discount)throw t.$message.error("请输入完整的区间范围及优惠金额！"),Error()})}catch(a){return}this.current++}else this.current++},prev:function(){this.current--},fetch:function(e,t){this.companyName=e,this.searchCompany(e,t)},handleSearch:function(e){var t=this;this.comText=e,this.fetch(e,function(e){return t.searchData=e}),console.log(this.searchData)},handleChange:function(e){var t=this;console.log(e),this.companyName=e,e&&this.fetch(e,function(e){return t.searchData=e})},add:function(e,t){var a={EmpMin:"",EmpMax:"",Discount:""};-1==t?a={EmpMin:0,EmpMax:99999,Discount:0}:0==t&&t==this.ladderList.length-1?(e.EmpMax="",a.EmpMax=99999):0==t?a.EmpMin=e.EmpMax?parseInt(e.EmpMax)+1:"":t==this.ladderList.length-1?(e.EmpMax="",a.EmpMax=99999):(a.EmpMin=e.EmpMax?parseInt(e.EmpMax)+1:"",a.EmpMax=""),this.ladderList.splice(t+1,0,a),console.log(this.ladderList)},remove:function(e,t){0==t&&1==this.ladderList.length?this.ladderList=[]:0==t&&this.ladderList.length>1?this.ladderList[t+1].EmpMin=0:this.ladderList.length>1&&t==this.ladderList.length-1?this.ladderList[t-1].EmpMax=99999:this.ladderList[t-1].EmpMax=e.EmpMax,this.ladderList.splice(t,1),console.log(this.ladderList)},ladderChange:function(e,t,a,r){"EmpMax"==r&&(this.ladderList[a+1].EmpMin=parseInt(e)+1),"EmpMin"==r&&(this.ladderList[a-1].EmpMax=parseInt(e)-1)},addCityPrice:function(){var e={CityCode:"",UnitPrice:"",ArchivesPrice:""};this.cityPriceList.push(e)},removeCityPrice:function(e,t){this.cityPriceList.splice(t,1)},addcompany:function(){var e=this;e.modal.addcompany={show:!0}},dangAnChange:function(e){this.comFormImportRules.iptInputReq[0].required="true"==e},onsiteChange:function(e){this.comFormImportRules.onsite[0].required="true"==e},areaClose:function(e){this.drawer.area={show:!1}},areaSure:function(e){console.log(e),this.cityPriceList[this.changeIndex].CityCode=e.value,this.cityPriceList[this.changeIndex].CityName=e.name,this.drawer.area={show:!1}},chooseArea:function(e){this.changeIndex=e,this.drawer.area={show:!0}},addKefu:function(e){this.modal.addkefu={show:!0},this.kefuType=e},closeAddKefu:function(){this.modal.addkefu={show:!1},this.kefuType=""},sureAddKefu:function(e){var t=this;"1"==t.kefuType&&(t.addKefuObject[0].id=e.OrderUserid,t.comForm.setFieldsValue({kefuName:t.visible.UserArray[e.OrderUserid]})),"2"==t.kefuType&&(t.addKefuObject[1].id=e.OrderUserid,t.comForm.setFieldsValue({OrderUserName:t.visible.UserArray[e.OrderUserid]})),"3"==t.kefuType&&(t.addKefuObject[2].id=e.OrderUserid,t.comForm.setFieldsValue({OnsiteUserName:t.visible.UserArray[e.OrderUserid]})),t.closeAddKefu(),t.$refs.kefuChild.onClose()}}},C=w,g=(a("3f8b"),Object(m["a"])(C,r,s,!1,null,"733c9372",null));t["default"]=g.exports},"9fc2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{destroyOnClose:!1,visible:this.visible.show,maskClosable:!1,width:450,zIndex:1001,centered:!0},on:{cancel:e.onClose,ok:e.submit}},[a("template",{slot:"title"},[e._v("\n  选择客服\n")]),a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"部门",labelCol:{span:7},wrapperCol:{span:16}}},[a("a-cascader",{directives:[{name:"decorator",rawName:"v-decorator",value:["deptId",{rules:e.AFormImportRules.selectReq}],expression:"['deptId',{rules:AFormImportRules.selectReq}]"}],attrs:{options:e.options,loadData:e.loadData,changeOnSelect:"",placeholder:"请选择部门"},on:{change:e.onChange}})],1),a("a-form-item",{attrs:{label:"客服",labelCol:{span:7},wrapperCol:{span:16}}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["OrderUserid",{rules:e.AFormImportRules.selectReq}],expression:"['OrderUserid',{rules:AFormImportRules.selectReq}]"}],attrs:{allowClear:!0}},e._l(e.DepList,function(t){return a("a-select-option",{key:t.code},[e._v(e._s(t.name))])}),1)],1)],1)],2)},s=[],i=a("75fc"),n=(a("7f7f"),a("ac6a"),a("b775")),o={props:{show:{type:Object,default:function(){return{show:!1}}},close:{type:Function,required:!1,default:null},sure:{type:Function,required:!1,default:null}},data:function(){return{visible:{show:!1},form:this.$form.createForm(this),AFormImportRules:{selectReq:[{required:!0,message:"请选择"}]},options:[],DepList:[]}},watch:{show:function(e,t){var a=this;a.visible=e}},created:function(){var e=this;this.$watch("show",function(t,a){e.visible=t,e.visible.show&&e.init()})},methods:{onClose:function(){this.options=[],this.DepList=[],this.form.resetFields(),this.$emit("close",!1)},init:function(){var e=this;n["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:"1"}).then(function(t){0===t.code&&t.data.forEach(function(t,a){var r={};r.value=t.code,r.label=t.name,r.isLeaf=!1,e.options.push(r)})}).catch(function(e){console.log(e)})},submit:function(){var e=this;this.form.validateFields(function(t,a){if(!t){var r=a;r.deptId=r.deptId[r.deptId.length-1],e.$emit("sure",a),console.log(a)}})},loadData:function(e){var t=e[e.length-1],a=this;t.loading=!0,n["a"].post("/api/Org/Department/ChildrenDepsByDepId",{DepId:t.value}).then(function(e){t.loading=!1,0===e.code&&(e.data.length>0?(t.children=[],e.data.forEach(function(e,a){var r={};r.value=e.code,r.label=e.name,r.isLeaf=!1,t.children.push(r)}),a.options=Object(i["a"])(a.options)):(t.isLeaf=!0,t.loading=!1))}).catch(function(e){console.log(e),t.loading=!1})},onChange:function(e){this.DepList=[],this.SaleUserid="",this.userbydepid(e[e.length-1])},userbydepid:function(e){var t=this;n["a"].post("/api/Org/User/UsersByDepId",{DepId:e}).then(function(e){var a=e;0===a.code&&(t.DepList=a.data,t.form.setFieldsValue({OrderUserid:""}))}).catch(function(e){console.log(e)})}}},l=o,c=(a("5e43"),a("2877")),u=Object(c["a"])(l,r,s,!1,null,"6df77856",null);t["default"]=u.exports},a481:function(e,t,a){"use strict";var r=a("cb7c"),s=a("4bf8"),i=a("9def"),n=a("4588"),o=a("0390"),l=a("5f1b"),c=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,m=/\$([$&`']|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,function(e,t,a,f){return[function(r,s){var i=e(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,i,s):a.call(String(i),r,s)},function(e,t){var s=f(a,e,this,t);if(s.done)return s.value;var d=r(e),p=String(this),m="function"===typeof t;m||(t=String(t));var y=d.global;if(y){var b=d.unicode;d.lastIndex=0}var w=[];while(1){var C=l(d,p);if(null===C)break;if(w.push(C),!y)break;var g=String(C[0]);""===g&&(d.lastIndex=o(p,i(d.lastIndex),b))}for(var x="",k=0,I=0;I<w.length;I++){C=w[I];for(var _=String(C[0]),E=c(u(n(C.index),p.length),0),F=[],R=1;R<C.length;R++)F.push(h(C[R]));var D=C.groups;if(m){var M=[_].concat(F,E,p);void 0!==D&&M.push(D);var O=String(t.apply(void 0,M))}else O=v(_,p,E,F,D,t);E>=k&&(x+=p.slice(k,E)+O,k=E+_.length)}return x+p.slice(k)}];function v(e,t,r,i,n,o){var l=r+e.length,c=i.length,u=m;return void 0!==n&&(n=s(n),u=p),a.call(o,u,function(a,s){var o;switch(s.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(l);case"<":o=n[s.slice(1,-1)];break;default:var u=+s;if(0===u)return a;if(u>c){var p=d(u/10);return 0===p?a:p<=c?void 0===i[p-1]?s.charAt(1):i[p-1]+s.charAt(1):a}o=i[u-1]}return void 0===o?"":o})}})},ef75:function(e,t,a){},f883:function(e,t,a){},fb6b:function(e,t,a){}}]);