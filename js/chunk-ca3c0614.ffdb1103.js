(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca3c0614"],{4897:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:6}},[a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:6}},[a("a-form-item",{attrs:{label:"是否开通B端账号",labelCol:{span:12},wrapperCol:{span:12}}},[a("a-select",{attrs:{placeholder:"请选择",allowClear:!0},model:{value:e.formSearch.IsOpenB,callback:function(t){e.$set(e.formSearch,"IsOpenB",t)},expression:"formSearch.IsOpenB"}},[a("a-select-option",{key:"true"},[e._v("是")]),a("a-select-option",{key:"false"},[e._v("否")])],1)],1)],1),a("a-col",{attrs:{span:6}},[a("a-form-item",[a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"ComServiceGuid"},scopedSlots:e._u([{key:"ComName",fn:function(t,o){return a("div",{},[o.LevelColor?a("span",{style:{display:"inline-block",height:"16px","line-height":"16px",padding:"0 5px","border-radius":"4px",background:o.LevelColor,"font-size":"11px",color:"#fff"}},[e._v(e._s(o.Level))]):e._e(),e._v("           \n              "+e._s(o.ComName)+"\n            ")])}},{key:"ServiceType",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n              "+e._s(e.ServiceType[o.ServiceType])+"\n            ")])}},{key:"GJJServiceType",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n              "+e._s(e.ServiceType[o.GJJServiceType])+"\n            ")])}},{key:"FlowType",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n              "+e._s(e.FlowType[o.FlowType])+"\n            ")])}},{key:"isopenB",fn:function(t,o){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n              "+e._s(o.IsOpenB?"是":"否")+"\n            ")])}},{key:"Baccount",fn:function(t,o){return a("span",{staticClass:"fs12",staticStyle:{"text-align":"right"}},[o.LoginName?[e._v("账号："+e._s(o.LoginName)),a("br"),e._v("密码："+e._s(o.Password))]:e._e()],2)}}])},[a("span",{attrs:{slot:"gjjTitle"},slot:"gjjTitle"},[e._v("公积金"),a("br"),e._v("服务类型")]),a("span",{attrs:{slot:"bujiaofwfTitle"},slot:"bujiaofwfTitle"},[e._v("补缴"),a("br"),e._v("服务费模式")]),a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)],1)],1)},r=[],n=(a("8e6e"),a("456d"),a("bd86")),c=(a("ac6a"),a("b775"));function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(a,!0).forEach(function(t){Object(n["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var l=[{title:"派出公司",dataIndex:"GYSName"},{title:"公司名称",scopedSlots:{customRender:"ComName"}},{title:"服务类型",scopedSlots:{customRender:"ServiceType"}},{slots:{title:"gjjTitle"},scopedSlots:{customRender:"GJJServiceType"}},{title:"服务流程",scopedSlots:{customRender:"FlowType"}},{title:"是否开通B端",scopedSlots:{customRender:"isopenB"}},{title:"B端账号",scopedSlots:{customRender:"Baccount"}}],p={props:{type:{type:Object,default:function(){return{}}}},components:{},data:function(){return{advanced:!0,columns:l,visible:!1,confirmLoading:!1,formSearch:{pageSize:10,current:1,total:0,ComName:"",IsOpenB:""},form:this.$form.createForm(this),dataSource:[],moment:moment,ServiceType:{},ServiceTypeArray:[],callback:function(){},FlowType:{},FlowTypeArray:[]}},created:function(){var e=this;e.init()},activated:function(){console.log("刷新");var e=this;e.pagechange(1)},methods:{init:function(){var e=this;c["a"].post("/api/Dim/Enum/GetEnum",{Names:["ServiceType","FlowType"]}).then(function(t){0===t.code?(console.log(t),e.ServiceTypeArray=t.data.ServiceType,e.FlowTypeArray=t.data.FlowType,t.data.ServiceType.forEach(function(t,a){e.ServiceType[t.key]=t.text}),t.data.FlowType.forEach(function(t,a){e.FlowType[t.key]=t.text}),console.log(e.ServiceType),e.pagechange(1)):e.$message.error(t.msg)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=s({},t.formSearch),t.$loading.open(),c["a"].post("/api/company/com/BComAccountList",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})}}},u=p,f=(a("a894"),a("2877")),m=Object(f["a"])(u,o,r,!1,null,null,null);t["default"]=m.exports},"907a":function(e,t,a){},a894:function(e,t,a){"use strict";var o=a("907a"),r=a.n(o);r.a}}]);