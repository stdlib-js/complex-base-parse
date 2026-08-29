"use strict";var t=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var a=t(function(m,n){
function f(){return/^(?:\s*([+-]?)\s*((?:(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)|Infinity|NaN)\s*(?=$|[+-]))?(?:\s*([+-]?)\s*((?:(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)|Infinity|NaN)?\s*(i)\s*)?$/}n.exports=f
});var l=t(function(x,u){
var d=require('@stdlib/assert-is-string/dist').isPrimitive,p=a();function c(i){var r,e,s;return!d(i)||i===""||(r=i.match(p()),r===null)?null:(r[2]?(e=r[1]==="-"?-1:1,e*=parseFloat(r[2])):e=0,r[5]?(s=r[3]==="-"?-1:1,r[4]&&(s*=parseFloat(r[4]))):s=0,{re:e,im:s})}u.exports=c
});var o=l();module.exports=o;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
