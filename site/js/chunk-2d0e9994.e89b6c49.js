(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9994"],{"8de7":function(e,t,s){"use strict";s.r(t);var l={name:"ElCol",props:{span:{type:Number,default:24},tag:{type:String,default:"div"},offset:Number,pull:Number,push:Number,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object],xl:[Number,Object]},computed:{gutter(){let e=this.$parent;while(e&&"ElRow"!==e.$options.componentName)e=e.$parent;return e?e.gutter:0}},render(e){let t=[],s={};return this.gutter&&(s.paddingLeft=this.gutter/2+"px",s.paddingRight=s.paddingLeft),["span","offset","pull","push"].forEach(e=>{(this[e]||0===this[e])&&t.push("span"!==e?`el-col-${e}-${this[e]}`:"el-col-"+this[e])}),["xs","sm","md","lg","xl"].forEach(e=>{if("number"===typeof this[e])t.push(`el-col-${e}-${this[e]}`);else if("object"===typeof this[e]){let s=this[e];Object.keys(s).forEach(l=>{t.push("span"!==l?`el-col-${e}-${l}-${s[l]}`:`el-col-${e}-${s[l]}`)})}}),e(this.tag,{class:["el-col",t],style:s},this.$slots.default)},install:function(e){e.component(l.name,l)}};t["default"]=l}}]);
//# sourceMappingURL=chunk-2d0e9994.e89b6c49.js.map