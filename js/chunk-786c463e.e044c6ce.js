(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-786c463e"],{"228a":function(a,t,e){},"89b0":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a-modal",{attrs:{destroyOnClose:!0,visible:this.visible.show,maskClosable:!1,width:600,centered:"",zIndex:1001},on:{cancel:a.onClose,ok:a.submitSbDate}},[e("template",{slot:"title"},[a._v("\n  确认\n")]),e("a-form",{attrs:{form:a.form}},[e("a-row",[e("a-col",{attrs:{span:12}},[e("a-form-item",{attrs:{label:"姓名",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.sbDetail["姓名"])+"\n          ")])],1),e("a-col",{attrs:{span:12}},[e("a-form-item",{attrs:{label:"身份证号",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.sbDetail["身份证号"])+"\n          ")])],1),e("a-col",{attrs:{span:12}},[e("a-form-item",{attrs:{label:"公司名称",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.sbDetail.ComName)+"\n          ")])],1),e("a-col",{attrs:{span:12}},[e("a-form-item",{attrs:{label:"险种名称",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.visible.sbType[a.sbDetail.sbType])+"\n          ")])],1),e("a-col",{attrs:{span:12}},[e("a-form-item",{attrs:{label:"可以开始月份",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.moment(a.sbDetail.CanStartDate).format("YYYY-MM"))+"\n          ")])],1),e("a-col",{attrs:{span:12}},[e("a-form-item",{attrs:{label:"工资",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.sbDetail.Jishu)+"\n          ")])],1),e("a-col",{attrs:{span:12}},[e("a-form-item",{attrs:{label:"比例",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.sbDetail.Bili)+"\n          ")])],1),e("a-col",{attrs:{span:12}},[e("a-form-item",{attrs:{label:"派单开始时间",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.sbDetail.Startime)+"\n          ")])],1),e("a-col",{attrs:{span:12}},[e("a-form-item",{attrs:{label:"交接时间",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.sbDetail.DoneTime)+"\n          ")])],1),e("a-col",{attrs:{span:12}},[e("a-form-item",{attrs:{label:"交接",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.visible.DoType[a.sbDetail.DoType])+"\n          ")])],1),e("a-col",{attrs:{span:12}},[e("a-form-item",{attrs:{label:"交接人",labelCol:{span:9},wrapperCol:{span:15}}},[a._v("\n            "+a._s(a.visible.UserArray[a.sbDetail.Userid])+"\n          ")])],1),e("a-col",{attrs:{span:24}},[e("a-form-item",{staticStyle:{"margin-left":"10px"},attrs:{label:"备注",labelCol:{span:4},wrapperCol:{span:19}}},[a._v("\n            "+a._s(a.sbDetail.Remarks)+"\n          ")])],1),e("a-col",{attrs:{span:12}},[e("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"实际起做日期",labelCol:{span:9},wrapperCol:{span:15}}},[e("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["ActStartime",{initialValue:a.moment(a.sbDetail.CanStartDate),rules:a.AFormImportRules.iptInput}],expression:"['ActStartime',{initialValue:moment(sbDetail.CanStartDate),rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{disabledDate:a.disabledDate,placeholder:"请选择月份"},on:{change:a.changeActTime}})],1)],1),e("a-col",{attrs:{span:12}},[e("a-form-item",{staticStyle:{margin:"0 0 10px -5px"},attrs:{label:"运行操作月",labelCol:{span:9},wrapperCol:{span:15}}},[e("a-month-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["FirstBillMonth",{initialValue:a.moment(a.sbDetail.CanStartDate),rules:a.AFormImportRules.iptInput}],expression:"['FirstBillMonth',{initialValue:moment(sbDetail.CanStartDate),rules:AFormImportRules.iptInput}]"}],staticStyle:{width:"100%"},attrs:{disabledDate:a.disabledFirstDate,placeholder:"请选择月份"}})],1)],1),e("a-col",{attrs:{span:24}},[e("a-form-item",{staticStyle:{"margin-left":"-16px"},attrs:{label:"备注",labelCol:{span:5},wrapperCol:{span:19}}},[e("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["ConfirmRemarks",{rules:a.AFormImportRules.remark}],expression:"['ConfirmRemarks',{rules:AFormImportRules.remark}]"}],attrs:{placeholder:"备注",rows:4}})],1)],1)],1)],1)],2)},l=[],r=e("b775"),o=e("c32d"),i=e.n(o),n={components:{},props:{show:{type:Object,default:function(){return{show:!1}}},refresh:{type:Function,default:""}},data:function(){return{visible:{show:!1,sbType:{},UserArray:[],SBGUID:"",DoType:{}},form:this.$form.createForm(this),AFormImportRules:{iptInput:[{required:!0,message:"请输入"}],iptSelect:[{required:!0,message:"请选择"}],remark:[{required:!1,message:"请输入"}]},sbDetail:{},modal:{},moment:i.a,actTime:new Date}},watch:{show:function(a,t){var e=this;e.visible=a}},created:function(){var a=this;this.$watch("show",function(t,e){a.visible=t,a.visible.show&&a.init()})},methods:{onClose:function(){this.visible.show=!1,this.form.resetFields()},init:function(){var a=this;r["a"].post("/api/Employee/shebao/Detail",{SBGUID:a.visible.SBGUID}).then(function(t){a.$loading.close(),0===t.code&&(a.sbDetail=t.data)}).catch(function(t){a.$loading.close(),console.log(t)})},submitSbDate:function(){var a=this,t={};a.form.validateFields(function(e,s){e||(t=s,t.SBGUID=a.visible.SBGUID,t.ActStartime=i()(s.ActStartime).format("YYYY-MM-01"),t.FirstBillMonth=i()(s.FirstBillMonth).format("YYYY-MM-01"),t.DoType=a.visible.DoType,a.$loading.open(),r["a"].post("/api/Employee/shebao/SaveSheBaoConfirm",t).then(function(t){a.$loading.close(),0===t.code?(a.$message.success(t.msg),a.onClose(),a.refresh()):a.$message.error(t.msg)}).catch(function(t){a.$loading.close(),console.log(t)}))})},changeActTime:function(a,t){console.log(t),this.actTime=t;var e=new Date;i()(t).format("YYYY-MM-01")<i()(e).format("YYYY-MM-01")||this.form.setFieldsValue({FirstBillMonth:a})},disabledDate:function(a){return a<i()(this.sbDetail.CanStartDate)},disabledFirstDate:function(a){var t=new Date;return i()(this.actTime).format("YYYY-MM-01")<i()(t).format("YYYY-MM-01")?a<i()(t).startOf("month"):a<i()(this.actTime).startOf("month")}}},p=n,m=(e("ad65"),e("2877")),c=Object(m["a"])(p,s,l,!1,null,"0afd962c",null);t["default"]=c.exports},ad65:function(a,t,e){"use strict";var s=e("228a"),l=e.n(s);l.a}}]);