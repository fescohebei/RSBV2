(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-691ed330","chunk-210e3c18"],{"636b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:800,zIndex:1001,footer:!1,centered:!0},on:{cancel:t.onClose}},[a("template",{slot:"title"},[t._v(" 导入 ")]),a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("a-row",{attrs:{gutter:11}},[a("a-col",{attrs:{md:12}},[a("a-form-item",{attrs:{label:"社保类型",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{attrs:{allowClear:!1},model:{value:t.formSearch.sbtype,callback:function(e){t.$set(t.formSearch,"sbtype",e)},expression:"formSearch.sbtype"}},t._l(t.sbList,function(e){return a("a-select-option",{key:e.key},[t._v(t._s(e.text))])}),1)],1)],1),a("a-col",{attrs:{md:12}},[a("a-form-item",{attrs:{label:"月份",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-month-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择月份"},model:{value:t.formSearch.nianYue,callback:function(e){t.$set(t.formSearch,"nianYue",e)},expression:"formSearch.nianYue"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{label:"供应商",labelCol:{span:7},wrapperCol:{span:17}}},[a("a-select",{attrs:{"show-search":"",placeholder:"请输入后选择","default-active-first-option":!1,"show-arrow":!1,"filter-option":!1,"not-found-content":null,width:350},on:{search:t.handleSearchGys},model:{value:t.formSearch.GYSGuid,callback:function(e){t.$set(t.formSearch,"GYSGuid",e)},expression:"formSearch.GYSGuid"}},[t.searchGysData.length>0?t._l(t.searchGysData,function(e){return a("a-select-option",{key:e.GYSGuid},[t._v("\n                "+t._s(e.GYSName)+"\n              ")])}):[a("a-select-option",{key:0,attrs:{disabled:!0}},[t._v("\n                没有该供应商，点击右侧添加，添加供应商后选择\n              ")])]],2)],1)],1),a("a-col",{staticStyle:{"line-height":"39px"},attrs:{span:4,align:"left"}},[0==t.searchGysData.length?a("a-button",{attrs:{type:"primary"},on:{click:t.addGys}},[t._v("添加")]):t._e()],1),a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"",labelCol:{span:7},wrapperCol:{span:254}}},[a("a-spin",{attrs:{tip:"上传中",spinning:t.spinning}},[a("a-upload-dragger",{attrs:{name:"file",multiple:!1,action:"/api/Order/Import/ShebaoPaymentImport",accept:".xls, .xlsx",showUploadList:!1,withCredentials:!0,beforeUpload:t.uploadbefore,data:t.uploadData},on:{change:t.uploadchange}},[a("p",{staticClass:"ant-upload-drag-icon"},[a("a-icon",{attrs:{type:"inbox"}})],1),a("p",{staticClass:"ant-upload-text"},[t._v("\n                将文件拖到此处，或\n                "),a("a-tag",{attrs:{color:"#2db7f5"}},[t._v("点击上传")])],1),a("p",{staticClass:"ant-upload-hint"},[t._v("只能上传xls/xlsx文件")])])],1)],1)],1)],1)],1),a("a-modal",{attrs:{destroyOnClose:!0,visible:this.errorShow,maskClosable:!1,width:400,zIndex:1001,footer:!1,centered:!0},on:{cancel:t.onCloseError}},[a("template",{slot:"title"},[t._v(" 增员派单导入失败 ")]),a("a-row",t._l(t.errorlist,function(e,s){return a("a-col",{key:s,attrs:{span:22}},[t._v(t._s(s+1)+". "+t._s(e.msg))])}),1),a("a-tag",{staticStyle:{"margin-top":"15px"},attrs:{color:"red"}},[t._v("\n      请修改后重新导入！！！\n    ")])],2),a("model-add-gys",{attrs:{show:t.modal.addgys,gysname:t.gysText,refresh:t.handleChangeGys}})],2)},o=[],n=a("b775"),r=a("c32d"),i=a.n(r),l=a("96fd"),c={components:{ModelAddGys:l["default"]},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[]},form:this.$form.createForm(this),AFormImportRules:{},assetsdetail:{},errdatarows:[],errorShow:!1,errorlist:[],sbList:[],modal:{addgys:{show:!1}},formSearch:{sbType:"",GYSGuid:""},uploadData:{sbType:"",GYSGuid:"",nianYue:""},searchGysData:[],gysText:""}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){var t=this;n["a"].post("/api/Dim/Enum/GetEnum",{Names:["sbType"]}).then(function(e){0===e.code?t.sbList=e.data.sbType:t.$message.error(e.msg)}).catch(function(t){console.log(t)})},uploadbefore:function(t){var e=this,a=this;this.form.validateFields(function(t,s){var o=!t;o&&(e.spinning=!0,console.log(a.formSearch.nianYue),e.uploadData.sbType=a.formSearch.sbtype,e.uploadData.GYSGuid=a.formSearch.GYSGuid,e.uploadData.nianYue=a.formSearch.nianYue?i()(a.formSearch.nianYue).format("YYYY-MM"):"")})},uploadchange:function(t){var e=t.file,a=t.fileList;t.event;if("uploading"!==e.status&&console.log(e,a),"done"==e.status){var s=e.response;s.code>0?(this.$message.error(s.msg),s.data&&(this.errdatarows=s.data)):s.data.rows.length>0&&""!=s.data.rows[0].msg?(this.errorlist=s.data.rows,this.errorShow=!0):(this.$message.success("导入成功"),this.refresh(),this.onClose())}this.spinning=!1},onCloseError:function(){this.errorShow=!1},fetchGys:function(t,e){this.GysName=t,this.searchGys(t,e)},handleSearchGys:function(t){var e=this;this.gysText=t,this.fetchGys(t,function(t){return e.searchGysData=t}),console.log(this.searchGysData)},handleChangeGys:function(t){var e=this;console.log(t),this.GysName=t,t&&this.fetchGys(t,function(t){return e.searchGysData=t})},searchGys:function(t,e){var a=this;n["a"].post("/api/Company/GYS/List",{Keyword:t,Current:1,PageSize:99}).then(function(t){0===t.code&&(a.GysList=t.data.rows,e(t.data.rows))}).catch(function(t){console.log(t)})},addGys:function(){var t=this;t.modal.addgys={show:!0}}}},h=c,u=(a("88d7"),a("2877")),d=Object(u["a"])(h,s,o,!1,null,"030d4c5e",null);e["default"]=d.exports},"88d7":function(t,e,a){"use strict";var s=a("aad2"),o=a.n(s);o.a},9255:function(t,e,a){},"96fd":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{destroyOnClose:!1,visible:this.visible.show,maskClosable:!1,width:450,zIndex:1001,centered:!0},on:{cancel:t.onClose,ok:t.submit}},[a("template",{slot:"title"},[t._v("\n  添加供应商\n")]),a("a-form",{attrs:{form:t.form}},[a("a-form-item",{attrs:{label:"供应商",labelCol:{span:5},wrapperCol:{span:16}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["GYSName",{initialValue:t.gysname,rules:t.AFormImportRules.iptInputReq}],expression:"['GYSName',{initialValue:gysname,rules:AFormImportRules.iptInputReq}]"}]})],1)],1)],2)},o=[],n=a("b775"),r={props:{show:{type:Object,default:function(){return{show:!1}}},gysname:{type:String,default:""}},data:function(){return{visible:{show:!1},form:this.$form.createForm(this),AFormImportRules:{iptInputReq:[{required:!0,message:"请输入"}]}}},watch:{show:function(t,e){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(e,a){t.visible=e,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},submit:function(){var t=this;this.form.validateFields(function(e,a){if(!e){var s=a;n["a"].post("/api/Company/GYS/Add",s).then(function(e){0===e.code?(t.$message.success("提交成功!"),t.onClose()):t.$message.error(e.msg)}).catch(function(t){console.log(t)})}})}}},i=r,l=(a("d2de"),a("2877")),c=Object(l["a"])(i,s,o,!1,null,"45e9ef94",null);e["default"]=c.exports},aad2:function(t,e,a){},d2de:function(t,e,a){"use strict";var s=a("9255"),o=a.n(s);o.a}}]);