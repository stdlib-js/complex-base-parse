// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.3-esm/index.mjs";function t(t){var n,d,e;return s(t)&&""!==t?null===(n=t.match(/^(?:\s*([+-]?)\s*((?:(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)|Infinity|NaN)\s*(?=$|[+-]))?(?:\s*([+-]?)\s*((?:(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)|Infinity|NaN)?\s*(i)\s*)?$/))?null:(n[2]?(d="-"===n[1]?-1:1,d*=parseFloat(n[2])):d=0,n[5]?(e="-"===n[3]?-1:1,n[4]&&(e*=parseFloat(n[4]))):e=0,{re:d,im:e}):null}export{t as default};
//# sourceMappingURL=index.mjs.map
