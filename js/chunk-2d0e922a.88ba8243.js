(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e922a"],{"8bf0":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-list",{attrs:{"list-data":e.listdata,labels:e.labels,"link-func":e.link,action:!0,"edit-icon":e.editIcon,"delete-icon":e.deleteIcon,"edit-action":e.editItem,"delete-action":e.deleteItem,total:e.total},on:{pageHandle:e.pageHandle}})},l=[],o=(n("fb6a"),{data:function(){return{listdata:[],total:0,editIcon:"edit",deleteIcon:"delete",labels:[{name:"名称",key:"a"},{name:"属性1",key:"b"},{name:"属性2",key:"c"},{name:"属性3",key:"d"}]}},methods:{pageHandle:function(e){var t=this.getTbData();this.total=t.length,this.listdata=t.slice(e.pageSize*(e.pageNo-1),e.pageSize*e.pageNo)},getTbData:function(){for(var e={a:"TComponent 泛型组件",b:2,c:3,d:4,title:"很长的标题很长的标题"},t=[],n=0;n<20;n++)t.push(e);return t},link:function(e){console.log(e)},editItem:function(e){console.log(e)},deleteItem:function(e){console.log(e)}}}),i=o,c=n("2877"),d=Object(c["a"])(i,a,l,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e922a.88ba8243.js.map