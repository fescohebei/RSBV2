(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dcd34de"],{"348c":function(t,s,a){},"58cf":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,zIndex:1001,footer:!1,centered:!0},on:{cancel:t.onClose}},[a("template",{slot:"title"},[t._v("\n  灵活就业导入\n")]),a("a-form",{attrs:{form:t.form,layout:"horizontal"}},[a("a-row",{attrs:{gutter:11}},[a("a-col",{attrs:{md:24}},[a("a-form-item",{attrs:{label:"",labelCol:{span:7},wrapperCol:{span:254}}},[a("a-spin",{attrs:{tip:"上传中",spinning:t.spinning}},[a("a-upload-dragger",{attrs:{name:"file",multiple:!1,action:"/api/Company/uploadfile/FlexibleImport",accept:".xls, .xlsx",showUploadList:!1,withCredentials:!0,beforeUpload:t.uploadbefore,data:t.uploadData},on:{change:t.uploadchange}},[a("p",{staticClass:"ant-upload-drag-icon"},[a("a-icon",{attrs:{type:"inbox"}})],1),a("p",{staticClass:"ant-upload-text"},[t._v("\n                    将文件拖到此处，或\n                    "),a("a-tag",{attrs:{color:"#2db7f5"}},[t._v("点击上传")])],1),a("p",{staticClass:"ant-upload-hint"},[t._v("只能上传xls/xlsx文件")])])],1)],1)],1)],1)],1),a("a-modal",{attrs:{destroyOnClose:!0,visible:this.errorShow,maskClosable:!1,width:400,zIndex:1001,footer:!1,centered:!0},on:{cancel:t.onCloseError}},[a("template",{slot:"title"},[t._v("\n        增员派单导入失败\n      ")]),a("a-row",t._l(t.errorlist,function(s,e){return a("a-col",{key:e,attrs:{span:22}},[t._v(t._s(e+1)+". "+t._s(s.msg))])}),1),a("a-tag",{staticStyle:{"margin-top":"15px"},attrs:{color:"red"}},[t._v("\n        请修改后重新导入！！！\n      ")])],2)],2)},o=[],r=(a("b775"),a("c32d"),{props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:null}},data:function(){return{spinning:!1,visible:{show:!1,sbDetail:{},sbType:{},DoTypeArray:[]},form:this.$form.createForm(this),AFormImportRules:{},assetsdetail:{},errdatarows:[],errorShow:!1,errorlist:[],uploadData:{Role:""}}},watch:{show:function(t,s){var a=this;a.visible=t}},created:function(){var t=this;this.$watch("show",function(s,a){t.visible=s,t.visible.show&&t.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){},uploadbefore:function(t){var s=this;this.form.validateFields(function(t,a){var e=!t;e&&(s.spinning=!0)})},uploadchange:function(t){var s=t.file,a=t.fileList;t.event;if("uploading"!==s.status&&console.log(s,a),"done"==s.status){var e=s.response;e.code>0?(this.$message.error(e.msg),e.data&&(this.errdatarows=e.data)):e.data.rows.length>0&&""!=e.data.rows[0].msg?(this.errorlist=e.data.rows,this.errorShow=!0):(this.$message.success("导入成功"),this.refresh(),this.onClose())}this.spinning=!1},onCloseError:function(){this.errorShow=!1}}}),n=r,i=(a("e99c"),a("2877")),l=Object(i["a"])(n,e,o,!1,null,"221faf9a",null);s["default"]=l.exports},e99c:function(t,s,a){"use strict";var e=a("348c"),o=a.n(e);o.a}}]);