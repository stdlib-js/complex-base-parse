"use strict";var o=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var g=o(function(b,p){
var N=require('@stdlib/string-replace/dist'),c=require('@stdlib/number-ctor/dist');function m(a){var i=[],l="",u,f=[],n=[],v=!0,t,r,s=0,h=0,e;if(typeof a!="string")return null;for(a=N(a," ",""),e=0;e<a.length;e++)(a[e]==="+"||a[e]==="-")&&e!==0&&a[e-1]!=="e"?(n.push(l),l=""):e===a.length-1&&(l+=a[e],n.push(l)),l+=a[e];for(e=0;e<n.length;e++){if(r=n[e],u=!1,r[0]==="i"?(r=r.slice(1),u=!0):r[r.length-1]==="i"&&(r=r.slice(0,r.length-1),u=!0),t=c(r),isNaN(t)&&r!=="NaN"&&r!=="+NaN"&&r!=="-NaN"){v=!1;break}u?i.push(t):f.push(t)}if(!v)return null;for(e=0;e<f.length;e++)s+=f[e];for(e=0;e<i.length;e++)h+=i[e];return{re:s,im:h}}p.exports=m
});var q=g();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
