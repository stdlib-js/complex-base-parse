// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@v0.2.1-esm/index.mjs";function r(r){var n,s,i,l,h=[],f="",o=[],u=[],g=!0,p=0,m=0;if("string"!=typeof r)return null;for(r=e(r," ",""),l=0;l<r.length;l++)"+"!==r[l]&&"-"!==r[l]||0===l||"e"===r[l-1]?l===r.length-1&&(f+=r[l],u.push(f)):(u.push(f),f=""),f+=r[l];for(l=0;l<u.length;l++){if(n=!1,"i"===(i=u[l])[0]?(i=i.slice(1),n=!0):"i"===i[i.length-1]&&(i=i.slice(0,i.length-1),n=!0),s=t(i),isNaN(s)&&"NaN"!==i&&"+NaN"!==i&&"-NaN"!==i){g=!1;break}n?h.push(s):o.push(s)}if(!g)return null;for(l=0;l<o.length;l++)p+=o[l];for(l=0;l<h.length;l++)m+=h[l];return{re:p,im:m}}export{r as default};
//# sourceMappingURL=index.mjs.map
