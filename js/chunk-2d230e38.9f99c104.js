(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230e38"],{edcf:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",[a("a-layout-content",[a("a-card",{attrs:{bordered:!1}},[a("div",[a("a-form",{attrs:{form:e.form,layout:"horizontal"}},[a("div",{class:e.advanced?null:"fold"},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[a("a-form-item",{attrs:{label:"公司名称",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.ComName,callback:function(t){e.$set(e.formSearch,"ComName",t)},expression:"formSearch.ComName"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:7,xxl:6}},[a("a-form-item",{attrs:{label:"身份证号",labelCol:{span:6},wrapperCol:{span:17}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emCardID,callback:function(t){e.$set(e.formSearch,"emCardID",t)},expression:"formSearch.emCardID"}})],1)],1),a("a-col",{attrs:{md:7,lg:7,xl:5,xxl:6}},[a("a-form-item",{attrs:{label:"姓名",labelCol:{span:4},wrapperCol:{span:17,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.formSearch.emName,callback:function(t){e.$set(e.formSearch,"emName",t)},expression:"formSearch.emName"}})],1)],1),a("a-col",{attrs:{span:5}},[a("a-form-item",[a("a-button",{attrs:{type:"primary"},on:{click:e.initPage}},[e._v("查询")])],1)],1)],1)],1)])],1),a("a-table",{attrs:{columns:e.columns,dataSource:e.dataSource,pagination:!1,rowKey:"RLZGUID"},scopedSlots:e._u([{key:"Status",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.RuLiZhiStatusObject[r.Status])+"\n        ")])}},{key:"userName",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(r["姓名"])+"\n        ")])}},{key:"KefuUserid",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[null!=r.KefuUserid?[e._v("                  \n            客服:"+e._s(e.UserArray[r.KefuUserid])),a("br")]:e._e(),r.OrderUserids.length>0?[e._v("                  \n            订单客服:"),e._l(r.OrderUserids,function(t){return a("span",{key:t.OrderUserid},[e._v(e._s(e.UserArray[t.OrderUserid])+" ")])}),a("br")]:e._e(),null!=r.OnsiteUserid?[e._v("                  \n            驻场客服:"+e._s(e.UserArray[r.OnsiteUserid])+"\n          ")]:e._e()],2)}},{key:"PaiDanDate",fn:function(t,r){return a("span",{staticStyle:{"text-align":"right"}},[e._v("\n          "+e._s(e.moment(r.PaiDanDate).format("YYYY-MM-DD"))+"\n        ")])}}])},[a("template",{slot:"footer"},[a("a-pagination",{staticStyle:{float:"right"},attrs:{defaultCurrent:1,pageSize:e.formSearch.pageSize,total:e.formSearch.total,current:e.formSearch.current},on:{change:e.pagechange}})],1)],2)],1)],1)],1)},n=[],o=(a("8e6e"),a("456d"),a("bd86")),s=(a("ac6a"),a("b775")),c=a("c32d"),i=a.n(c);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach(function(t){Object(o["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var m=[{title:"状态",scopedSlots:{customRender:"Status"}},{title:"姓名",scopedSlots:{customRender:"userName"}},{title:"身份证号",dataIndex:"身份证号"},{title:"客服",scopedSlots:{customRender:"KefuUserid"}},{title:"入职派单日期",scopedSlots:{customRender:"PaiDanDate"}},{title:"供应商",dataIndex:"GYSName"},{title:"公司",dataIndex:"ComName"}],d={components:{},props:{},data:function(){return{advanced:!0,columns:m,visible:!1,formSearch:{pageSize:10,current:1,total:0,emCardID:"",emName:"",ComName:""},form:this.$form.createForm(this),dataSource:[],roles:[],modal:{},UserArray:[],DeptArray:[],cityList:[],RuLiZhiStatusObject:{},moment:i.a}},created:function(){var e=this;e.init()},methods:{init:function(){var e=this;s["a"].post("/api/Dim/Enum/GetEnum",{Names:["RuLiZhiStatus"]}).then(function(t){0===t.code?t.data.RuLiZhiStatus.forEach(function(t,a){e.RuLiZhiStatusObject[t.key]=t.text}):e.$message.error(t.msg)}).catch(function(e){console.log(e)}),s["a"].post("/api/Dim/Enum/DimDecode",{Names:["User","Dept","City"]}).then(function(t){0===t.code&&(e.UserArray=t.data.User,e.DeptArray=t.data.Dept,e.cityList=t.data.City)}).catch(function(e){console.log(e)})},initPage:function(){this.pagechange(1)},pagerefresh:function(){this.pagechange(this.formSearch.current)},pagechange:function(e){var t=this,a={};t.formSearch.current=e,a=u({},t.formSearch),this.form.validateFields(function(e,r){t.$loading.open(),s["a"].post("/api/Employee/RuLIZhi/AllList",a).then(function(e){t.$loading.close(),0===e.code&&(t.dataSource=e.data.rows,t.formSearch.total=e.count)}).catch(function(e){t.$loading.close(),console.log(e)})})}}},f=d,p=a("2877"),h=Object(p["a"])(f,r,n,!1,null,null,null);t["default"]=h.exports}}]);