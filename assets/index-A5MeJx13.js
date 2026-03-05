import{u as e,r as t,R as n,i as r,B as a,a as o}from"./i18n-Da1jtw8K.js";import{r as l,a as i}from"./vendor-B_uAldPx.js";import{f as s,m as c,d as u,o as d}from"./styled-BH6xnnD1.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var f,m,p={exports:{}},h={};var g,b,y,v,x=(m||(m=1,p.exports=function(){if(f)return h;f=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(t,n,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),"key"in n)for(var o in r={},n)"key"!==o&&(r[o]=n[o]);else r=n;return n=r.ref,{$$typeof:e,type:t,key:a,ref:void 0!==n?n:null,props:r}}return h.Fragment=t,h.jsx=n,h.jsxs=n,h}()),p.exports),k={exports:{}},S={},w={exports:{}},$={};function z(){return b||(b=1,w.exports=(g||(g=1,function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<a(o,t)))break e;e[r]=t,e[n]=o,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,l=o>>>1;r<l;){var i=2*(r+1)-1,s=e[i],c=i+1,u=e[c];if(0>a(s,n))c<o&&0>a(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[i]=n,r=i);else{if(!(c<o&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(e.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var s=[],c=[],u=1,d=null,f=3,m=!1,p=!1,h=!1,g=!1,b="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,v="undefined"!=typeof setImmediate?setImmediate:null;function x(e){for(var a=n(c);null!==a;){if(null===a.callback)r(c);else{if(!(a.startTime<=e))break;r(c),a.sortIndex=a.expirationTime,t(s,a)}a=n(c)}}function k(e){if(h=!1,x(e),!p)if(null!==n(s))p=!0,w||(w=!0,S());else{var t=n(c);null!==t&&L(k,t.startTime-e)}}var S,w=!1,$=-1,z=5,C=-1;function E(){return!(!g&&e.unstable_now()-C<z)}function P(){if(g=!1,w){var t=e.unstable_now();C=t;var a=!0;try{e:{p=!1,h&&(h=!1,y($),$=-1),m=!0;var o=f;try{t:{for(x(t),d=n(s);null!==d&&!(d.expirationTime>t&&E());){var l=d.callback;if("function"==typeof l){d.callback=null,f=d.priorityLevel;var i=l(d.expirationTime<=t);if(t=e.unstable_now(),"function"==typeof i){d.callback=i,x(t),a=!0;break t}d===n(s)&&r(s),x(t)}else r(s);d=n(s)}if(null!==d)a=!0;else{var u=n(c);null!==u&&L(k,u.startTime-t),a=!1}}break e}finally{d=null,f=o,m=!1}a=void 0}}finally{a?S():w=!1}}}if("function"==typeof v)S=function(){v(P)};else if("undefined"!=typeof MessageChannel){var F=new MessageChannel,j=F.port2;F.port1.onmessage=P,S=function(){j.postMessage(null)}}else S=function(){b(P,0)};function L(t,n){$=b(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e||(z=0<e?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,a,o){var l=e.unstable_now();switch(o="object"==typeof o&&null!==o&&"number"==typeof(o=o.delay)&&0<o?l+o:l,r){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return r={id:u++,callback:a,priorityLevel:r,startTime:o,expirationTime:i=o+i,sortIndex:-1},o>l?(r.sortIndex=o,t(c,r),null===n(s)&&r===n(c)&&(h?(y($),$=-1):h=!0,L(k,o-l))):(r.sortIndex=i,t(s,r),p||m||(p=!0,w||(w=!0,S()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}}($)),$)),w.exports}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function C(){if(y)return S;y=1;var e=z(),t=l(),n=i();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function s(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function c(e){if(31===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(o(e)!==e)throw Error(r(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var f=Object.assign,m=Symbol.for("react.element"),p=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),k=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),L=Symbol.iterator;function _(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=L&&e[L]||e["@@iterator"])?e:null}var A=Symbol.for("react.client.reference");function T(e){if(null==e)return null;if("function"==typeof e)return e.$$typeof===A?null:e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case g:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case $:return"Suspense";case C:return"SuspenseList";case F:return"Activity"}if("object"==typeof e)switch(e.$$typeof){case h:return"Portal";case k:return e.displayName||"Context";case x:return(e._context.displayName||"Context")+".Consumer";case w:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case E:return null!==(t=e.displayName||null)?t:T(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return T(e(t))}catch(n){}}return null}var N=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},I=[],R=-1;function B(e){return{current:e}}function W(e){0>R||(e.current=I[R],I[R]=null,R--)}function U(e,t){R++,I[R]=e.current,e.current=t}var V,H,Q=B(null),q=B(null),Y=B(null),G=B(null);function K(e,t){switch(U(Y,t),U(q,e),U(Q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=xd(t=vd(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}W(Q),U(Q,e)}function X(){W(Q),W(q),W(Y)}function J(e){null!==e.memoizedState&&U(G,e);var t=Q.current,n=xd(t,e.type);t!==n&&(U(q,e),U(Q,n))}function Z(e){q.current===e&&(W(Q),W(q)),G.current===e&&(W(G),mf._currentValue=O)}function ee(e){if(void 0===V)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);V=t&&t[1]||"",H=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+V+e+H}var te=!1;function ne(e,t){if(!e||te)return"";te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(o){r=o}e.call(n.prototype)}}else{try{throw Error()}catch(l){r=l}(n=e())&&"function"==typeof n.catch&&n.catch(function(){})}}catch(i){if(i&&r&&"string"==typeof i.stack)return[i.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=r.DetermineComponentFrameRoot(),l=o[0],i=o[1];if(l&&i){var s=l.split("\n"),c=i.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===c.length)for(r=s.length-1,a=c.length-1;1<=r&&0<=a&&s[r]!==c[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==c[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==c[a]){var u="\n"+s[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=a);break}}}finally{te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ee(n):""}function re(e,t){switch(e.tag){case 26:case 27:case 5:return ee(e.type);case 16:return ee("Lazy");case 13:return e.child!==t&&null!==t?ee("Suspense Fallback"):ee("Suspense");case 19:return ee("SuspenseList");case 0:case 15:return ne(e.type,!1);case 11:return ne(e.type.render,!1);case 1:return ne(e.type,!0);case 31:return ee("Activity");default:return""}}function ae(e){try{var t="",n=null;do{t+=re(e,n),n=e,e=e.return}while(e);return t}catch(r){return"\nError generating stack: "+r.message+"\n"+r.stack}}var oe=Object.prototype.hasOwnProperty,le=e.unstable_scheduleCallback,ie=e.unstable_cancelCallback,se=e.unstable_shouldYield,ce=e.unstable_requestPaint,ue=e.unstable_now,de=e.unstable_getCurrentPriorityLevel,fe=e.unstable_ImmediatePriority,me=e.unstable_UserBlockingPriority,pe=e.unstable_NormalPriority,he=e.unstable_LowPriority,ge=e.unstable_IdlePriority,be=e.log,ye=e.unstable_setDisableYieldValue,ve=null,xe=null;function ke(e){if("function"==typeof be&&ye(e),xe&&"function"==typeof xe.setStrictMode)try{xe.setStrictMode(ve,e)}catch(t){}}var Se=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(we(e)/$e|0)|0},we=Math.log,$e=Math.LN2;var ze=256,Ce=262144,Ee=4194304;function Pe(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return 261888&e;case 262144:case 524288:case 1048576:case 2097152:return 3932160&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Fe(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,o=e.suspendedLanes,l=e.pingedLanes;e=e.warmLanes;var i=134217727&r;return 0!==i?0!==(r=i&~o)?a=Pe(r):0!==(l&=i)?a=Pe(l):n||0!==(n=i&~e)&&(a=Pe(n)):0!==(i=r&~o)?a=Pe(i):0!==l?a=Pe(l):n||0!==(n=r&~e)&&(a=Pe(n)),0===a?0:0!==t&&t!==a&&0===(t&o)&&((o=a&-a)>=(n=t&-t)||32===o&&4194048&n)?t:a}function je(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Le(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function _e(){var e=Ee;return!(62914560&(Ee<<=1))&&(Ee=4194304),e}function Ae(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Te(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ne(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Se(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|261930&n}function De(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Se(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Me(e,t){var n=t&-t;return 0!==((n=42&n?1:Oe(n))&(e.suspendedLanes|t))?0:n}function Oe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ie(e){return 2<(e&=-e)?8<e?134217727&e?32:268435456:8:2}function Re(){var e=M.p;return 0!==e?e:void 0===(e=window.event)?32:Ff(e.type)}function Be(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var We=Math.random().toString(36).slice(2),Ue="__reactFiber$"+We,Ve="__reactProps$"+We,He="__reactContainer$"+We,Qe="__reactEvents$"+We,qe="__reactListeners$"+We,Ye="__reactHandles$"+We,Ge="__reactResources$"+We,Ke="__reactMarker$"+We;function Xe(e){delete e[Ue],delete e[Ve],delete e[Qe],delete e[qe],delete e[Ye]}function Je(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[He]||n[Ue]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Od(e);null!==e;){if(n=e[Ue])return n;e=Od(e)}return t}n=(e=n).parentNode}return null}function Ze(e){if(e=e[Ue]||e[He]){var t=e.tag;if(5===t||6===t||13===t||31===t||26===t||27===t||3===t)return e}return null}function et(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(r(33))}function tt(e){var t=e[Ge];return t||(t=e[Ge]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[Ke]=!0}var rt=new Set,at={};function ot(e,t){lt(e,t),lt(e+"Capture",t)}function lt(e,t){for(at[e]=t,e=0;e<t.length;e++)rt.add(t[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),st={},ct={};function ut(e,t,n){if(a=t,oe.call(ct,a)||!oe.call(st,a)&&(it.test(a)?ct[a]=!0:(st[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function dt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function ft(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function pt(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function ht(e){if(!e._valueTracker){var t=pt(e)?"checked":"value";e._valueTracker=function(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&void 0!==r&&"function"==typeof r.get&&"function"==typeof r.set){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e,t,""+e[t])}}function gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pt(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function bt(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var yt=/[\n"\\]/g;function vt(e){return e.replace(yt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function xt(e,t,n,r,a,o,l,i){e.name="",null!=l&&"function"!=typeof l&&"symbol"!=typeof l&&"boolean"!=typeof l?e.type=l:e.removeAttribute("type"),null!=t?"number"===l?(0===t&&""===e.value||e.value!=t)&&(e.value=""+mt(t)):e.value!==""+mt(t)&&(e.value=""+mt(t)):"submit"!==l&&"reset"!==l||e.removeAttribute("value"),null!=t?St(e,l,mt(t)):null!=n?St(e,l,mt(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=o&&(e.defaultChecked=!!o),null!=a&&(e.checked=a&&"function"!=typeof a&&"symbol"!=typeof a),null!=i&&"function"!=typeof i&&"symbol"!=typeof i&&"boolean"!=typeof i?e.name=""+mt(i):e.removeAttribute("name")}function kt(e,t,n,r,a,o,l,i){if(null!=o&&"function"!=typeof o&&"symbol"!=typeof o&&"boolean"!=typeof o&&(e.type=o),null!=t||null!=n){if(("submit"===o||"reset"===o)&&null==t)return void ht(e);n=null!=n?""+mt(n):"",t=null!=t?""+mt(t):n,i||t===e.value||(e.value=t),e.defaultValue=t}r="function"!=typeof(r=null!=r?r:a)&&"symbol"!=typeof r&&!!r,e.checked=i?e.checked:!!r,e.defaultChecked=!!r,null!=l&&"function"!=typeof l&&"symbol"!=typeof l&&"boolean"!=typeof l&&(e.name=l),ht(e)}function St(e,t,n){"number"===t&&bt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function wt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function $t(e,t,n){null==t||((t=""+mt(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+mt(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function zt(e,t,n,a){if(null==t){if(null!=a){if(null!=n)throw Error(r(92));if(N(a)){if(1<a.length)throw Error(r(93));a=a[0]}n=a}null==n&&(n=""),t=n}n=mt(t),e.defaultValue=n,(a=e.textContent)===n&&""!==a&&null!==a&&(e.value=a),ht(e)}function Ct(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var Et=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"==typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!=typeof n||0===n||Et.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ft(e,t,n){if(null!=t&&"object"!=typeof t)throw Error(r(62));if(e=e.style,null!=n){for(var a in n)!n.hasOwnProperty(a)||null!=t&&t.hasOwnProperty(a)||(0===a.indexOf("--")?e.setProperty(a,""):"float"===a?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&Pt(e,o,a)}else for(var l in t)t.hasOwnProperty(l)&&Pt(e,l,t[l])}function jt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function At(e){return _t.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Tt(){}var Nt=null;function Dt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Mt=null,Ot=null;function It(e){var t=Ze(e);if(t&&(e=t.stateNode)){var n=e[Ve]||null;e:switch(e=t.stateNode,t.type){case"input":if(xt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[Ve]||null;if(!o)throw Error(r(90));xt(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)(a=n[t]).form===e.form&&gt(a)}break e;case"textarea":$t(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&wt(e,!!n.multiple,t,!1)}}}var Rt=!1;function Bt(e,t,n){if(Rt)return e(t,n);Rt=!0;try{return e(t)}finally{if(Rt=!1,(null!==Mt||null!==Ot)&&(tu(),Mt&&(t=Mt,e=Ot,Ot=Mt=null,It(t),e)))for(t=0;t<e.length;t++)It(e[t])}}function Wt(e,t){var n=e.stateNode;if(null===n)return null;var a=n[Ve]||null;if(null===a)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(a=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!a;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(r(231,t,typeof n));return n}var Ut=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),Vt=!1;if(Ut)try{var Ht={};Object.defineProperty(Ht,"passive",{get:function(){Vt=!0}}),window.addEventListener("test",Ht,Ht),window.removeEventListener("test",Ht,Ht)}catch(em){Vt=!1}var Qt=null,qt=null,Yt=null;function Gt(){if(Yt)return Yt;var e,t,n=qt,r=n.length,a="value"in Qt?Qt.value:Qt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var l=r-e;for(t=1;t<=l&&n[r-t]===a[o-t];t++);return Yt=a.slice(e,1<t?1-t:void 0)}function Kt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Xt(){return!0}function Jt(){return!1}function Zt(e){function t(t,n,r,a,o){for(var l in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Xt:Jt,this.isPropagationStopped=Jt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Xt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Xt)},persist:function(){},isPersistent:Xt}),t}var en,tn,nn,rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},an=Zt(rn),on=f({},rn,{view:0,detail:0}),ln=Zt(on),sn=f({},on,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nn&&(nn&&"mousemove"===e.type?(en=e.screenX-nn.screenX,tn=e.screenY-nn.screenY):tn=en=0,nn=e),en)},movementY:function(e){return"movementY"in e?e.movementY:tn}}),cn=Zt(sn),un=Zt(f({},sn,{dataTransfer:0})),dn=Zt(f({},on,{relatedTarget:0})),fn=Zt(f({},rn,{animationName:0,elapsedTime:0,pseudoElement:0})),mn=Zt(f({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),pn=Zt(f({},rn,{data:0})),hn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=bn[e])&&!!t[e]}function vn(){return yn}var xn=Zt(f({},on,{key:function(e){if(e.key){var t=hn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Kt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?gn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vn,charCode:function(e){return"keypress"===e.type?Kt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Kt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),kn=Zt(f({},sn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Sn=Zt(f({},on,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vn})),wn=Zt(f({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=Zt(f({},sn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),zn=Zt(f({},rn,{newState:0,oldState:0})),Cn=[9,13,27,32],En=Ut&&"CompositionEvent"in window,Pn=null;Ut&&"documentMode"in document&&(Pn=document.documentMode);var Fn=Ut&&"TextEvent"in window&&!Pn,jn=Ut&&(!En||Pn&&8<Pn&&11>=Pn),Ln=String.fromCharCode(32),_n=!1;function An(e,t){switch(e){case"keyup":return-1!==Cn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tn(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Nn=!1;var Dn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Dn[e.type]:"textarea"===t}function On(e,t,n,r){Mt?Ot?Ot.push(r):Ot=[r]:Mt=r,0<(t=od(t,"onChange")).length&&(n=new an("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Rn=null;function Bn(e){Xu(e,0)}function Wn(e){if(gt(et(e)))return e}function Un(e,t){if("change"===e)return t}var Vn=!1;if(Ut){var Hn;if(Ut){var Qn="oninput"in document;if(!Qn){var qn=document.createElement("div");qn.setAttribute("oninput","return;"),Qn="function"==typeof qn.oninput}Hn=Qn}else Hn=!1;Vn=Hn&&(!document.documentMode||9<document.documentMode)}function Yn(){In&&(In.detachEvent("onpropertychange",Gn),Rn=In=null)}function Gn(e){if("value"===e.propertyName&&Wn(Rn)){var t=[];On(t,Rn,e,Dt(e)),Bt(Bn,t)}}function Kn(e,t,n){"focusin"===e?(Yn(),Rn=n,(In=t).attachEvent("onpropertychange",Gn)):"focusout"===e&&Yn()}function Xn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Wn(Rn)}function Jn(e,t){if("click"===e)return Wn(t)}function Zn(e,t){if("input"===e||"change"===e)return Wn(t)}var er="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function tr(e,t){if(er(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!oe.call(t,a)||!er(e[a],t[a]))return!1}return!0}function nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rr(e,t){var n,r=nr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=nr(r)}}function ar(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?ar(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function or(e){for(var t=bt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=bt((e=t.contentWindow).document)}return t}function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ir=Ut&&"documentMode"in document&&11>=document.documentMode,sr=null,cr=null,ur=null,dr=!1;function fr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;dr||null==sr||sr!==bt(r)||("selectionStart"in(r=sr)&&lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ur&&tr(ur,r)||(ur=r,0<(r=od(cr,"onSelect")).length&&(t=new an("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=sr)))}function mr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},hr={},gr={};function br(e){if(hr[e])return hr[e];if(!pr[e])return e;var t,n=pr[e];for(t in n)if(n.hasOwnProperty(t)&&t in gr)return hr[e]=n[t];return e}Ut&&(gr=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);var yr=br("animationend"),vr=br("animationiteration"),xr=br("animationstart"),kr=br("transitionrun"),Sr=br("transitionstart"),wr=br("transitioncancel"),$r=br("transitionend"),zr=new Map,Cr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(e,t){zr.set(e,t),ot(t,[e])}Cr.push("scrollEnd");var Pr="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof process&&"function"==typeof process.emit)return void process.emit("uncaughtException",e)},Fr=[],jr=0,Lr=0;function _r(){for(var e=jr,t=Lr=jr=0;t<e;){var n=Fr[t];Fr[t++]=null;var r=Fr[t];Fr[t++]=null;var a=Fr[t];Fr[t++]=null;var o=Fr[t];if(Fr[t++]=null,null!==r&&null!==a){var l=r.pending;null===l?a.next=a:(a.next=l.next,l.next=a),r.pending=a}0!==o&&Dr(n,a,o)}}function Ar(e,t,n,r){Fr[jr++]=e,Fr[jr++]=t,Fr[jr++]=n,Fr[jr++]=r,Lr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Tr(e,t,n,r){return Ar(e,t,n,r),Mr(e)}function Nr(e,t){return Ar(e,null,null,t),Mr(e)}function Dr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,o=e.return;null!==o;)o.childLanes|=n,null!==(r=o.alternate)&&(r.childLanes|=n),22===o.tag&&(null===(e=o.stateNode)||1&e._visibility||(a=!0)),e=o,o=o.return;return 3===e.tag?(o=e.stateNode,a&&null!==t&&(a=31-Se(n),null===(r=(e=o.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),o):null}function Mr(e){if(50<Qc)throw Qc=0,qc=null,Error(r(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Or={};function Ir(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rr(e,t,n,r){return new Ir(e,t,n,r)}function Br(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Wr(e,t){var n=e.alternate;return null===n?((n=Rr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ur(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vr(e,t,n,a,o,l){var i=0;if(a=e,"function"==typeof e)Br(e)&&(i=1);else if("string"==typeof e)i=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!=typeof t.precedence||"string"!=typeof t.href||""===t.href)break;return!0;case"link":if("string"!=typeof t.rel||"string"!=typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"==typeof t.precedence&&null==e);case"script":if(t.async&&"function"!=typeof t.async&&"symbol"!=typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"==typeof t.src)return!0}return!1}(e,n,Q.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case F:return(e=Rr(31,n,t,o)).elementType=F,e.lanes=l,e;case g:return Hr(n.children,o,l,t);case b:i=8,o|=24;break;case v:return(e=Rr(12,n,t,2|o)).elementType=v,e.lanes=l,e;case $:return(e=Rr(13,n,t,o)).elementType=$,e.lanes=l,e;case C:return(e=Rr(19,n,t,o)).elementType=C,e.lanes=l,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case k:i=10;break e;case x:i=9;break e;case w:i=11;break e;case E:i=14;break e;case P:i=16,a=null;break e}i=29,n=Error(r(130,null===e?"null":typeof e,"")),a=null}return(t=Rr(i,n,t,o)).elementType=e,t.type=a,t.lanes=l,t}function Hr(e,t,n,r){return(e=Rr(7,e,r,t)).lanes=n,e}function Qr(e,t,n){return(e=Rr(6,e,null,t)).lanes=n,e}function qr(e){var t=Rr(18,null,null,0);return t.stateNode=e,t}function Yr(e,t,n){return(t=Rr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Gr=new WeakMap;function Kr(e,t){if("object"==typeof e&&null!==e){var n=Gr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:ae(t)},Gr.set(e,t),t)}return{value:e,source:t,stack:ae(t)}}var Xr=[],Jr=0,Zr=null,ea=0,ta=[],na=0,ra=null,aa=1,oa="";function la(e,t){Xr[Jr++]=ea,Xr[Jr++]=Zr,Zr=e,ea=t}function ia(e,t,n){ta[na++]=aa,ta[na++]=oa,ta[na++]=ra,ra=e;var r=aa;e=oa;var a=32-Se(r)-1;r&=~(1<<a),n+=1;var o=32-Se(t)+a;if(30<o){var l=a-a%5;o=(r&(1<<l)-1).toString(32),r>>=l,a-=l,aa=1<<32-Se(t)+a|n<<a|r,oa=o+e}else aa=1<<o|n<<a|r,oa=e}function sa(e){null!==e.return&&(la(e,1),ia(e,1,0))}function ca(e){for(;e===Zr;)Zr=Xr[--Jr],Xr[Jr]=null,ea=Xr[--Jr],Xr[Jr]=null;for(;e===ra;)ra=ta[--na],ta[na]=null,oa=ta[--na],ta[na]=null,aa=ta[--na],ta[na]=null}function ua(e,t){ta[na++]=aa,ta[na++]=oa,ta[na++]=ra,aa=t.id,oa=t.overflow,ra=e}var da=null,fa=null,ma=!1,pa=null,ha=!1,ga=Error(r(519));function ba(e){throw wa(Kr(Error(r(418,1<arguments.length&&void 0!==arguments[1]&&arguments[1]?"text":"HTML","")),e)),ga}function ya(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ue]=e,t[Ve]=r,n){case"dialog":Ju("cancel",t),Ju("close",t);break;case"iframe":case"object":case"embed":Ju("load",t);break;case"video":case"audio":for(n=0;n<Gu.length;n++)Ju(Gu[n],t);break;case"source":Ju("error",t);break;case"img":case"image":case"link":Ju("error",t),Ju("load",t);break;case"details":Ju("toggle",t);break;case"input":Ju("invalid",t),kt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ju("invalid",t);break;case"textarea":Ju("invalid",t),zt(t,r.value,r.defaultValue,r.children)}"string"!=typeof(n=r.children)&&"number"!=typeof n&&"bigint"!=typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||dd(t.textContent,n)?(null!=r.popover&&(Ju("beforetoggle",t),Ju("toggle",t)),null!=r.onScroll&&Ju("scroll",t),null!=r.onScrollEnd&&Ju("scrollend",t),null!=r.onClick&&(t.onclick=Tt),t=!0):t=!1,t||ba(e,!0)}function va(e){for(da=e.return;da;)switch(da.tag){case 5:case 31:case 13:return void(ha=!1);case 27:case 3:return void(ha=!0);default:da=da.return}}function xa(e){if(e!==da)return!1;if(!ma)return va(e),ma=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||kd(e.type,e.memoizedProps)),t=!t),t&&fa&&ba(e),va(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(r(317));fa=Md(e)}else if(31===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(r(317));fa=Md(e)}else 27===n?(n=fa,Pd(e.type)?(e=Dd,Dd=null,fa=e):fa=n):fa=da?Nd(e.stateNode.nextSibling):null;return!0}function ka(){fa=da=null,ma=!1}function Sa(){var e=pa;return null!==e&&(null===_c?_c=e:_c.push.apply(_c,e),pa=null),e}function wa(e){null===pa?pa=[e]:pa.push(e)}var $a=B(null),za=null,Ca=null;function Ea(e,t,n){U($a,t._currentValue),t._currentValue=n}function Pa(e){e._currentValue=$a.current,W($a)}function Fa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ja(e,t,n,a){var o=e.child;for(null!==o&&(o.return=e);null!==o;){var l=o.dependencies;if(null!==l){var i=o.child;l=l.firstContext;e:for(;null!==l;){var s=l;l=o;for(var c=0;c<t.length;c++)if(s.context===t[c]){l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Fa(l.return,n,e),a||(i=null);break e}l=s.next}}else if(18===o.tag){if(null===(i=o.return))throw Error(r(341));i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),Fa(i,n,e),i=null}else i=o.child;if(null!==i)i.return=o;else for(i=o;null!==i;){if(i===e){i=null;break}if(null!==(o=i.sibling)){o.return=i.return,i=o;break}i=i.return}o=i}}function La(e,t,n,a){e=null;for(var o=t,l=!1;null!==o;){if(!l)if(524288&o.flags)l=!0;else if(262144&o.flags)break;if(10===o.tag){var i=o.alternate;if(null===i)throw Error(r(387));if(null!==(i=i.memoizedProps)){var s=o.type;er(o.pendingProps.value,i.value)||(null!==e?e.push(s):e=[s])}}else if(o===G.current){if(null===(i=o.alternate))throw Error(r(387));i.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(null!==e?e.push(mf):e=[mf])}o=o.return}null!==e&&ja(t,e,n,a),t.flags|=262144}function _a(e){for(e=e.firstContext;null!==e;){if(!er(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Aa(e){za=e,Ca=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Ta(e){return Da(za,e)}function Na(e,t){return null===za&&Aa(e),Da(e,t)}function Da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===Ca){if(null===e)throw Error(r(308));Ca=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ca=Ca.next=t;return n}var Ma="undefined"!=typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Oa=e.unstable_scheduleCallback,Ia=e.unstable_NormalPriority,Ra={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ba(){return{controller:new Ma,data:new Map,refCount:0}}function Wa(e){e.refCount--,0===e.refCount&&Oa(Ia,function(){e.controller.abort()})}var Ua=null,Va=0,Ha=0,Qa=null;function qa(){if(0===--Va&&null!==Ua){null!==Qa&&(Qa.status="fulfilled");var e=Ua;Ua=null,Ha=0,Qa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ya=D.S;D.S=function(e,t){Nc=ue(),"object"==typeof t&&null!==t&&"function"==typeof t.then&&function(e,t){if(null===Ua){var n=Ua=[];Va=0,Ha=Vu(),Qa={status:"pending",value:void 0,then:function(e){n.push(e)}}}Va++,t.then(qa,qa)}(0,t),null!==Ya&&Ya(e,t)};var Ga=B(null);function Ka(){var e=Ga.current;return null!==e?e:gc.pooledCache}function Xa(e,t){U(Ga,null===t?Ga.current:t.pool)}function Ja(){var e=Ka();return null===e?null:{parent:Ra._currentValue,pool:e}}var Za=Error(r(460)),eo=Error(r(474)),to=Error(r(542)),no={then:function(){}};function ro(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ao(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Tt,Tt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw so(e=t.reason),e;default:if("string"==typeof t.status)t.then(Tt,Tt);else{if(null!==(e=gc)&&100<e.shellSuspendCounter)throw Error(r(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw so(e=t.reason),e}throw lo=t,Za}}function oo(e){try{return(0,e._init)(e._payload)}catch(t){if(null!==t&&"object"==typeof t&&"function"==typeof t.then)throw lo=t,Za;throw t}}var lo=null;function io(){if(null===lo)throw Error(r(459));var e=lo;return lo=null,e}function so(e){if(e===Za||e===to)throw Error(r(483))}var co=null,uo=0;function fo(e){var t=uo;return uo+=1,null===co&&(co=[]),ao(co,e,t)}function mo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function po(e,t){if(t.$$typeof===m)throw Error(r(525));throw e=Object.prototype.toString.call(t),Error(r(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ho(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function a(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function o(e,t){return(e=Wr(e,t)).index=0,e.sibling=null,e}function l(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Qr(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===g?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===P&&oo(a)===t.type)?(mo(t=o(t,n.props),n),t.return=e,t):(mo(t=Vr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Yr(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Hr(n,e.mode,r,a)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t||"bigint"==typeof t)return(t=Qr(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case p:return mo(n=Vr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case h:return(t=Yr(t,e.mode,n)).return=e,t;case P:return f(e,t=oo(t),n)}if(N(t)||_(t))return(t=Hr(t,e.mode,n,null)).return=e,t;if("function"==typeof t.then)return f(e,fo(t),n);if(t.$$typeof===k)return f(e,Na(e,t),n);po(e,t)}return null}function m(e,t,n,r){var a=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n||"bigint"==typeof n)return null!==a?null:s(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case p:return n.key===a?c(e,t,n,r):null;case h:return n.key===a?u(e,t,n,r):null;case P:return m(e,t,n=oo(n),r)}if(N(n)||_(n))return null!==a?null:d(e,t,n,r,null);if("function"==typeof n.then)return m(e,t,fo(n),r);if(n.$$typeof===k)return m(e,t,Na(e,n),r);po(e,n)}return null}function b(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r||"bigint"==typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case p:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case h:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case P:return b(e,t,n,r=oo(r),a)}if(N(r)||_(r))return d(t,e=e.get(n)||null,r,a,null);if("function"==typeof r.then)return b(e,t,n,fo(r),a);if(r.$$typeof===k)return b(e,t,n,Na(t,r),a);po(t,r)}return null}function y(s,c,u,d){if("object"==typeof u&&null!==u&&u.type===g&&null===u.key&&(u=u.props.children),"object"==typeof u&&null!==u){switch(u.$$typeof){case p:e:{for(var v=u.key;null!==c;){if(c.key===v){if((v=u.type)===g){if(7===c.tag){n(s,c.sibling),(d=o(c,u.props.children)).return=s,s=d;break e}}else if(c.elementType===v||"object"==typeof v&&null!==v&&v.$$typeof===P&&oo(v)===c.type){n(s,c.sibling),mo(d=o(c,u.props),u),d.return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}u.type===g?((d=Hr(u.props.children,s.mode,d,u.key)).return=s,s=d):(mo(d=Vr(u.type,u.key,u.props,null,s.mode,d),u),d.return=s,s=d)}return i(s);case h:e:{for(v=u.key;null!==c;){if(c.key===v){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(s,c.sibling),(d=o(c,u.children||[])).return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}(d=Yr(u,s.mode,d)).return=s,s=d}return i(s);case P:return y(s,c,u=oo(u),d)}if(N(u))return function(r,o,i,s){for(var c=null,u=null,d=o,p=o=0,h=null;null!==d&&p<i.length;p++){d.index>p?(h=d,d=null):h=d.sibling;var g=m(r,d,i[p],s);if(null===g){null===d&&(d=h);break}e&&d&&null===g.alternate&&t(r,d),o=l(g,o,p),null===u?c=g:u.sibling=g,u=g,d=h}if(p===i.length)return n(r,d),ma&&la(r,p),c;if(null===d){for(;p<i.length;p++)null!==(d=f(r,i[p],s))&&(o=l(d,o,p),null===u?c=d:u.sibling=d,u=d);return ma&&la(r,p),c}for(d=a(d);p<i.length;p++)null!==(h=b(d,r,p,i[p],s))&&(e&&null!==h.alternate&&d.delete(null===h.key?p:h.key),o=l(h,o,p),null===u?c=h:u.sibling=h,u=h);return e&&d.forEach(function(e){return t(r,e)}),ma&&la(r,p),c}(s,c,u,d);if(_(u)){if("function"!=typeof(v=_(u)))throw Error(r(150));return function(o,i,s,c){if(null==s)throw Error(r(151));for(var u=null,d=null,p=i,h=i=0,g=null,y=s.next();null!==p&&!y.done;h++,y=s.next()){p.index>h?(g=p,p=null):g=p.sibling;var v=m(o,p,y.value,c);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(o,p),i=l(v,i,h),null===d?u=v:d.sibling=v,d=v,p=g}if(y.done)return n(o,p),ma&&la(o,h),u;if(null===p){for(;!y.done;h++,y=s.next())null!==(y=f(o,y.value,c))&&(i=l(y,i,h),null===d?u=y:d.sibling=y,d=y);return ma&&la(o,h),u}for(p=a(p);!y.done;h++,y=s.next())null!==(y=b(p,o,h,y.value,c))&&(e&&null!==y.alternate&&p.delete(null===y.key?h:y.key),i=l(y,i,h),null===d?u=y:d.sibling=y,d=y);return e&&p.forEach(function(e){return t(o,e)}),ma&&la(o,h),u}(s,c,u=v.call(u),d)}if("function"==typeof u.then)return y(s,c,fo(u),d);if(u.$$typeof===k)return y(s,c,Na(s,u),d);po(s,u)}return"string"==typeof u&&""!==u||"number"==typeof u||"bigint"==typeof u?(u=""+u,null!==c&&6===c.tag?(n(s,c.sibling),(d=o(c,u)).return=s,s=d):(n(s,c),(d=Qr(u,s.mode,d)).return=s,s=d),i(s)):n(s,c)}return function(e,t,n,r){try{uo=0;var a=y(e,t,n,r);return co=null,a}catch(l){if(l===Za||l===to)throw l;var o=Rr(29,l,null,e.mode);return o.lanes=r,o.return=e,o}}}var go=ho(!0),bo=ho(!1),yo=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ko(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function So(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&hc){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Mr(e),Dr(e,null,n),t}return Ar(e,r,t,n),Mr(e)}function wo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,De(e,n)}}function $o(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var l={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===o?a=o=l:o=o.next=l,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var zo=!1;function Co(){if(zo){if(null!==Qa)throw Qa}}function Eo(e,t,n,r){zo=!1;var a=e.updateQueue;yo=!1;var o=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(null!==i){a.shared.pending=null;var s=i,c=s.next;s.next=null,null===l?o=c:l.next=c,l=s;var u=e.alternate;null!==u&&((i=(u=u.updateQueue).lastBaseUpdate)!==l&&(null===i?u.firstBaseUpdate=c:i.next=c,u.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(l=0,u=c=s=null,i=o;;){var m=-536870913&i.lane,p=m!==i.lane;if(p?(yc&m)===m:(r&m)===m){0!==m&&m===Ha&&(zo=!0),null!==u&&(u=u.next={lane:0,tag:i.tag,payload:i.payload,callback:null,next:null});e:{var h=e,g=i;m=t;var b=n;switch(g.tag){case 1:if("function"==typeof(h=g.payload)){d=h.call(b,d,m);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(m="function"==typeof(h=g.payload)?h.call(b,d,m):h))break e;d=f({},d,m);break e;case 2:yo=!0}}null!==(m=i.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=a.callbacks)?a.callbacks=[m]:p.push(m))}else p={lane:m,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===u?(c=u=p,s=d):u=u.next=p,l|=m;if(null===(i=i.next)){if(null===(i=a.shared.pending))break;i=(p=i).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null===o&&(a.shared.lanes=0),Cc|=l,e.lanes=l,e.memoizedState=d}}function Po(e,t){if("function"!=typeof e)throw Error(r(191,e));e.call(t)}function Fo(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Po(n[e],t)}var jo=B(null),Lo=B(0);function _o(e,t){U(Lo,e=$c),U(jo,t),$c=e|t.baseLanes}function Ao(){U(Lo,$c),U(jo,jo.current)}function To(){$c=Lo.current,W(jo),W(Lo)}var No=B(null),Do=null;function Mo(e){var t=e.alternate;U(Wo,1&Wo.current),U(No,e),null===Do&&(null===t||null!==jo.current||null!==t.memoizedState)&&(Do=e)}function Oo(e){U(Wo,Wo.current),U(No,e),null===Do&&(Do=e)}function Io(e){22===e.tag?(U(Wo,Wo.current),U(No,e),null===Do&&(Do=e)):Ro()}function Ro(){U(Wo,Wo.current),U(No,No.current)}function Bo(e){W(No),Do===e&&(Do=null),W(Wo)}var Wo=B(0);function Uo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||Ad(n)||Td(n)))return t}else if(19!==t.tag||"forwards"!==t.memoizedProps.revealOrder&&"backwards"!==t.memoizedProps.revealOrder&&"unstable_legacy-backwards"!==t.memoizedProps.revealOrder&&"together"!==t.memoizedProps.revealOrder){if(null!==t.child){t.child.return=t,t=t.child;continue}}else if(128&t.flags)return t;if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vo=0,Ho=null,Qo=null,qo=null,Yo=!1,Go=!1,Ko=!1,Xo=0,Jo=0,Zo=null,el=0;function tl(){throw Error(r(321))}function nl(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!er(e[n],t[n]))return!1;return!0}function rl(e,t,n,r,a,o){return Vo=o,Ho=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=null===e||null===e.memoizedState?yi:vi,Ko=!1,o=n(r,a),Ko=!1,Go&&(o=ol(t,n,r,a)),al(e),o}function al(e){D.H=bi;var t=null!==Qo&&null!==Qo.next;if(Vo=0,qo=Qo=Ho=null,Yo=!1,Jo=0,Zo=null,t)throw Error(r(300));null===e||Ni||null!==(e=e.dependencies)&&_a(e)&&(Ni=!0)}function ol(e,t,n,a){Ho=e;var o=0;do{if(Go&&(Zo=null),Jo=0,Go=!1,25<=o)throw Error(r(301));if(o+=1,qo=Qo=null,null!=e.updateQueue){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,null!=l.memoCache&&(l.memoCache.index=0)}D.H=xi,l=t(n,a)}while(Go);return l}function ll(){var e=D.H,t=e.useState()[0];return t="function"==typeof t.then?fl(t):t,e=e.useState()[0],(null!==Qo?Qo.memoizedState:null)!==e&&(Ho.flags|=1024),t}function il(){var e=0!==Xo;return Xo=0,e}function sl(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function cl(e){if(Yo){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Yo=!1}Vo=0,qo=Qo=Ho=null,Go=!1,Jo=Xo=0,Zo=null}function ul(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===qo?Ho.memoizedState=qo=e:qo=qo.next=e,qo}function dl(){if(null===Qo){var e=Ho.alternate;e=null!==e?e.memoizedState:null}else e=Qo.next;var t=null===qo?Ho.memoizedState:qo.next;if(null!==t)qo=t,Qo=e;else{if(null===e){if(null===Ho.alternate)throw Error(r(467));throw Error(r(310))}e={memoizedState:(Qo=e).memoizedState,baseState:Qo.baseState,baseQueue:Qo.baseQueue,queue:Qo.queue,next:null},null===qo?Ho.memoizedState=qo=e:qo=qo.next=e}return qo}function fl(e){var t=Jo;return Jo+=1,null===Zo&&(Zo=[]),e=ao(Zo,e,t),t=Ho,null===(null===qo?t.memoizedState:qo.next)&&(t=t.alternate,D.H=null===t||null===t.memoizedState?yi:vi),e}function ml(e){if(null!==e&&"object"==typeof e){if("function"==typeof e.then)return fl(e);if(e.$$typeof===k)return Ta(e)}throw Error(r(438,String(e)))}function pl(e){var t=null,n=Ho.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Ho.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Ho.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=j;return t.index++,n}function hl(e,t){return"function"==typeof t?t(e):t}function gl(e){return bl(dl(),Qo,e)}function bl(e,t,n){var a=e.queue;if(null===a)throw Error(r(311));a.lastRenderedReducer=n;var o=e.baseQueue,l=a.pending;if(null!==l){if(null!==o){var i=o.next;o.next=l.next,l.next=i}t.baseQueue=o=l,a.pending=null}if(l=e.baseState,null===o)e.memoizedState=l;else{var s=i=null,c=null,u=t=o.next,d=!1;do{var f=-536870913&u.lane;if(f!==u.lane?(yc&f)===f:(Vo&f)===f){var m=u.revertLane;if(0===m)null!==c&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ha&&(d=!0);else{if((Vo&m)===m){u=u.next,m===Ha&&(d=!0);continue}f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,i=l):c=c.next=f,Ho.lanes|=m,Cc|=m}f=u.action,Ko&&n(l,f),l=u.hasEagerState?u.eagerState:n(l,f)}else m={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=m,i=l):c=c.next=m,Ho.lanes|=f,Cc|=f;u=u.next}while(null!==u&&u!==t);if(null===c?i=l:c.next=s,!er(l,e.memoizedState)&&(Ni=!0,d&&null!==(n=Qa)))throw n;e.memoizedState=l,e.baseState=i,e.baseQueue=c,a.lastRenderedState=l}return null===o&&(a.lanes=0),[e.memoizedState,a.dispatch]}function yl(e){var t=dl(),n=t.queue;if(null===n)throw Error(r(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,l=t.memoizedState;if(null!==o){n.pending=null;var i=o=o.next;do{l=e(l,i.action),i=i.next}while(i!==o);er(l,t.memoizedState)||(Ni=!0),t.memoizedState=l,null===t.baseQueue&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function vl(e,t,n){var a=Ho,o=dl(),l=ma;if(l){if(void 0===n)throw Error(r(407));n=n()}else n=t();var i=!er((Qo||o).memoizedState,n);if(i&&(o.memoizedState=n,Ni=!0),o=o.queue,Vl(Sl.bind(null,a,o,e),[e]),o.getSnapshot!==t||i||null!==qo&&1&qo.memoizedState.tag){if(a.flags|=2048,Il(9,{destroy:void 0},kl.bind(null,a,o,n,t),null),null===gc)throw Error(r(349));l||127&Vo||xl(a,t,n)}return n}function xl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Ho.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Ho.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function kl(e,t,n,r){t.value=n,t.getSnapshot=r,wl(t)&&$l(e)}function Sl(e,t,n){return n(function(){wl(t)&&$l(e)})}function wl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!er(e,n)}catch(r){return!0}}function $l(e){var t=Nr(e,2);null!==t&&Kc(t,e,2)}function zl(e){var t=ul();if("function"==typeof e){var n=e;if(e=n(),Ko){ke(!0);try{n()}finally{ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:e},t}function Cl(e,t,n,r){return e.baseState=n,bl(e,Qo,"function"==typeof r?r:hl)}function El(e,t,n,a,o){if(pi(e))throw Error(r(485));if(null!==(e=t.action)){var l={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){l.listeners.push(e)}};null!==D.T?n(!0):l.isTransition=!1,a(l),null===(n=t.pending)?(l.next=t.pending=l,Pl(t,l)):(l.next=n.next,t.pending=n.next=l)}}function Pl(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var o=D.T,l={};D.T=l;try{var i=n(a,r),s=D.S;null!==s&&s(l,i),Fl(e,t,i)}catch(c){Ll(e,t,c)}finally{null!==o&&null!==l.types&&(o.types=l.types),D.T=o}}else try{Fl(e,t,o=n(a,r))}catch(u){Ll(e,t,u)}}function Fl(e,t,n){null!==n&&"object"==typeof n&&"function"==typeof n.then?n.then(function(n){jl(e,t,n)},function(n){return Ll(e,t,n)}):jl(e,t,n)}function jl(e,t,n){t.status="fulfilled",t.value=n,_l(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Pl(e,n)))}function Ll(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,_l(t),t=t.next}while(t!==r)}e.action=null}function _l(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Al(e,t){return t}function Tl(e,t){if(ma){var n=gc.formState;if(null!==n){e:{var r=Ho;if(ma){if(fa){t:{for(var a=fa,o=ha;8!==a.nodeType;){if(!o){a=null;break t}if(null===(a=Nd(a.nextSibling))){a=null;break t}}a="F!"===(o=a.data)||"F"===o?a:null}if(a){fa=Nd(a.nextSibling),r="F!"===a.data;break e}}ba(r)}r=!1}r&&(t=n[0])}}return(n=ul()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Al,lastRenderedState:t},n.queue=r,n=di.bind(null,Ho,r),r.dispatch=n,r=zl(!1),o=mi.bind(null,Ho,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=ul()).queue=a,n=El.bind(null,Ho,a,o,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Nl(e){return Dl(dl(),Qo,e)}function Dl(e,t,n){if(t=bl(e,t,Al)[0],e=gl(hl)[0],"object"==typeof t&&null!==t&&"function"==typeof t.then)try{var r=fl(t)}catch(l){if(l===Za)throw to;throw l}else r=t;var a=(t=dl()).queue,o=a.dispatch;return n!==t.memoizedState&&(Ho.flags|=2048,Il(9,{destroy:void 0},Ml.bind(null,a,n),null)),[r,o,e]}function Ml(e,t){e.action=t}function Ol(e){var t=dl(),n=Qo;if(null!==n)return Dl(t,n,e);dl(),t=t.memoizedState;var r=(n=dl()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Il(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=Ho.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Ho.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Rl(){return dl().memoizedState}function Bl(e,t,n,r){var a=ul();Ho.flags|=e,a.memoizedState=Il(1|t,{destroy:void 0},n,void 0===r?null:r)}function Wl(e,t,n,r){var a=dl();r=void 0===r?null:r;var o=a.memoizedState.inst;null!==Qo&&null!==r&&nl(r,Qo.memoizedState.deps)?a.memoizedState=Il(t,o,n,r):(Ho.flags|=e,a.memoizedState=Il(1|t,o,n,r))}function Ul(e,t){Bl(8390656,8,e,t)}function Vl(e,t){Wl(2048,8,e,t)}function Hl(e){var t=dl().memoizedState;return function(e){Ho.flags|=4;var t=Ho.updateQueue;if(null===t)t={lastEffect:null,events:null,stores:null,memoCache:null},Ho.updateQueue=t,t.events=[e];else{var n=t.events;null===n?t.events=[e]:n.push(e)}}({ref:t,nextImpl:e}),function(){if(2&hc)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function Ql(e,t){return Wl(4,2,e,t)}function ql(e,t){return Wl(4,4,e,t)}function Yl(e,t){if("function"==typeof t){e=e();var n=t(e);return function(){"function"==typeof n?n():t(null)}}if(null!=t)return e=e(),t.current=e,function(){t.current=null}}function Gl(e,t,n){n=null!=n?n.concat([e]):null,Wl(4,4,Yl.bind(null,t,e),n)}function Kl(){}function Xl(e,t){var n=dl();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&nl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jl(e,t){var n=dl();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&nl(t,r[1]))return r[0];if(r=e(),Ko){ke(!0);try{e()}finally{ke(!1)}}return n.memoizedState=[r,t],r}function Zl(e,t,n){return void 0===n||1073741824&Vo&&!(261930&yc)?e.memoizedState=t:(e.memoizedState=n,e=Gc(),Ho.lanes|=e,Cc|=e,n)}function ei(e,t,n,r){return er(n,t)?n:null!==jo.current?(e=Zl(e,n,r),er(e,t)||(Ni=!0),e):42&Vo&&(!(1073741824&Vo)||261930&yc)?(e=Gc(),Ho.lanes|=e,Cc|=e,t):(Ni=!0,e.memoizedState=n)}function ti(e,t,n,r,a){var o=M.p;M.p=0!==o&&8>o?o:8;var l,i,s,c=D.T,u={};D.T=u,mi(e,!1,t,n);try{var d=a(),f=D.S;if(null!==f&&f(u,d),null!==d&&"object"==typeof d&&"function"==typeof d.then)fi(e,t,(l=r,i=[],s={status:"pending",value:null,reason:null,then:function(e){i.push(e)}},d.then(function(){s.status="fulfilled",s.value=l;for(var e=0;e<i.length;e++)(0,i[e])(l)},function(e){for(s.status="rejected",s.reason=e,e=0;e<i.length;e++)(0,i[e])(void 0)}),s),Yc());else fi(e,t,r,Yc())}catch(m){fi(e,t,{then:function(){},status:"rejected",reason:m},Yc())}finally{M.p=o,null!==c&&null!==u.types&&(c.types=u.types),D.T=c}}function ni(){}function ri(e,t,n,a){if(5!==e.tag)throw Error(r(476));var o=ai(e).queue;ti(e,o,t,O,null===n?ni:function(){return oi(e),n(a)})}function ai(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:O},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function oi(e){var t=ai(e);null===t.next&&(t=e.alternate.memoizedState),fi(e,t.next.queue,{},Yc())}function li(){return Ta(mf)}function ii(){return dl().memoizedState}function si(){return dl().memoizedState}function ci(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Yc(),r=So(t,e=ko(n),n);return null!==r&&(Kc(r,t,n),wo(r,t,n)),t={cache:Ba()},void(e.payload=t)}t=t.return}}function ui(e,t,n){var r=Yc();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},pi(e)?hi(t,n):null!==(n=Tr(e,t,n,r))&&(Kc(n,e,r),gi(n,t,r))}function di(e,t,n){fi(e,t,n,Yc())}function fi(e,t,n,r){var a={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(pi(e))hi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var l=t.lastRenderedState,i=o(l,n);if(a.hasEagerState=!0,a.eagerState=i,er(i,l))return Ar(e,t,a,0),null===gc&&_r(),!1}catch(s){}if(null!==(n=Tr(e,t,a,r)))return Kc(n,e,r),gi(n,t,r),!0}return!1}function mi(e,t,n,a){if(a={lane:2,revertLane:Vu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},pi(e)){if(t)throw Error(r(479))}else null!==(t=Tr(e,n,a,2))&&Kc(t,e,2)}function pi(e){var t=e.alternate;return e===Ho||null!==t&&t===Ho}function hi(e,t){Go=Yo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gi(e,t,n){if(4194048&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,De(e,n)}}var bi={readContext:Ta,use:ml,useCallback:tl,useContext:tl,useEffect:tl,useImperativeHandle:tl,useLayoutEffect:tl,useInsertionEffect:tl,useMemo:tl,useReducer:tl,useRef:tl,useState:tl,useDebugValue:tl,useDeferredValue:tl,useTransition:tl,useSyncExternalStore:tl,useId:tl,useHostTransitionStatus:tl,useFormState:tl,useActionState:tl,useOptimistic:tl,useMemoCache:tl,useCacheRefresh:tl};bi.useEffectEvent=tl;var yi={readContext:Ta,use:ml,useCallback:function(e,t){return ul().memoizedState=[e,void 0===t?null:t],e},useContext:Ta,useEffect:Ul,useImperativeHandle:function(e,t,n){n=null!=n?n.concat([e]):null,Bl(4194308,4,Yl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bl(4194308,4,e,t)},useInsertionEffect:function(e,t){Bl(4,2,e,t)},useMemo:function(e,t){var n=ul();t=void 0===t?null:t;var r=e();if(Ko){ke(!0);try{e()}finally{ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ul();if(void 0!==n){var a=n(t);if(Ko){ke(!0);try{n(t)}finally{ke(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=ui.bind(null,Ho,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ul().memoizedState=e},useState:function(e){var t=(e=zl(e)).queue,n=di.bind(null,Ho,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Kl,useDeferredValue:function(e,t){return Zl(ul(),e,t)},useTransition:function(){var e=zl(!1);return e=ti.bind(null,Ho,e.queue,!0,!1),ul().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=Ho,o=ul();if(ma){if(void 0===n)throw Error(r(407));n=n()}else{if(n=t(),null===gc)throw Error(r(349));127&yc||xl(a,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ul(Sl.bind(null,a,l,e),[e]),a.flags|=2048,Il(9,{destroy:void 0},kl.bind(null,a,l,n,t),null),n},useId:function(){var e=ul(),t=gc.identifierPrefix;if(ma){var n=oa;t="_"+t+"R_"+(n=(aa&~(1<<32-Se(aa)-1)).toString(32)+n),0<(n=Xo++)&&(t+="H"+n.toString(32)),t+="_"}else t="_"+t+"r_"+(n=el++).toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:li,useFormState:Tl,useActionState:Tl,useOptimistic:function(e){var t=ul();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=mi.bind(null,Ho,!0,n),n.dispatch=t,[e,t]},useMemoCache:pl,useCacheRefresh:function(){return ul().memoizedState=ci.bind(null,Ho)},useEffectEvent:function(e){var t=ul(),n={impl:e};return t.memoizedState=n,function(){if(2&hc)throw Error(r(440));return n.impl.apply(void 0,arguments)}}},vi={readContext:Ta,use:ml,useCallback:Xl,useContext:Ta,useEffect:Vl,useImperativeHandle:Gl,useInsertionEffect:Ql,useLayoutEffect:ql,useMemo:Jl,useReducer:gl,useRef:Rl,useState:function(){return gl(hl)},useDebugValue:Kl,useDeferredValue:function(e,t){return ei(dl(),Qo.memoizedState,e,t)},useTransition:function(){var e=gl(hl)[0],t=dl().memoizedState;return["boolean"==typeof e?e:fl(e),t]},useSyncExternalStore:vl,useId:ii,useHostTransitionStatus:li,useFormState:Nl,useActionState:Nl,useOptimistic:function(e,t){return Cl(dl(),0,e,t)},useMemoCache:pl,useCacheRefresh:si};vi.useEffectEvent=Hl;var xi={readContext:Ta,use:ml,useCallback:Xl,useContext:Ta,useEffect:Vl,useImperativeHandle:Gl,useInsertionEffect:Ql,useLayoutEffect:ql,useMemo:Jl,useReducer:yl,useRef:Rl,useState:function(){return yl(hl)},useDebugValue:Kl,useDeferredValue:function(e,t){var n=dl();return null===Qo?Zl(n,e,t):ei(n,Qo.memoizedState,e,t)},useTransition:function(){var e=yl(hl)[0],t=dl().memoizedState;return["boolean"==typeof e?e:fl(e),t]},useSyncExternalStore:vl,useId:ii,useHostTransitionStatus:li,useFormState:Ol,useActionState:Ol,useOptimistic:function(e,t){var n=dl();return null!==Qo?Cl(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:pl,useCacheRefresh:si};function ki(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:f({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}xi.useEffectEvent=Hl;var Si={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Yc(),a=ko(r);a.payload=t,null!=n&&(a.callback=n),null!==(t=So(e,a,r))&&(Kc(t,e,r),wo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Yc(),a=ko(r);a.tag=1,a.payload=t,null!=n&&(a.callback=n),null!==(t=So(e,a,r))&&(Kc(t,e,r),wo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Yc(),r=ko(n);r.tag=2,null!=t&&(r.callback=t),null!==(t=So(e,r,n))&&(Kc(t,e,n),wo(t,e,n))}};function wi(e,t,n,r,a,o,l){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,l):!t.prototype||!t.prototype.isPureReactComponent||(!tr(n,r)||!tr(a,o))}function $i(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Si.enqueueReplaceState(t,t.state,null)}function zi(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=f({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}function Ci(e){Pr(e)}function Ei(e){}function Pi(e){Pr(e)}function Fi(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function ji(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Li(e,t,n){return(n=ko(n)).tag=3,n.payload={element:null},n.callback=function(){Fi(e,t)},n}function _i(e){return(e=ko(e)).tag=3,e}function Ai(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"==typeof a){var o=r.value;e.payload=function(){return a(o)},e.callback=function(){ji(t,n,r)}}var l=n.stateNode;null!==l&&"function"==typeof l.componentDidCatch&&(e.callback=function(){ji(t,n,r),"function"!=typeof a&&(null===Oc?Oc=new Set([this]):Oc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Ti=Error(r(461)),Ni=!1;function Di(e,t,n,r){t.child=null===e?bo(t,null,n,r):go(t,e.child,n,r)}function Mi(e,t,n,r,a){n=n.render;var o=t.ref;if("ref"in r){var l={};for(var i in r)"ref"!==i&&(l[i]=r[i])}else l=r;return Aa(t),r=rl(e,t,n,l,o,a),i=il(),null===e||Ni?(ma&&i&&sa(t),t.flags|=1,Di(e,t,r,a),t.child):(sl(e,t,a),ls(e,t,a))}function Oi(e,t,n,r,a){if(null===e){var o=n.type;return"function"!=typeof o||Br(o)||void 0!==o.defaultProps||null!==n.compare?((e=Vr(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Ii(e,t,o,r,a))}if(o=e.child,!is(e,a)){var l=o.memoizedProps;if((n=null!==(n=n.compare)?n:tr)(l,r)&&e.ref===t.ref)return ls(e,t,a)}return t.flags|=1,(e=Wr(o,r)).ref=t.ref,e.return=t,t.child=e}function Ii(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(tr(o,r)&&e.ref===t.ref){if(Ni=!1,t.pendingProps=r=o,!is(e,a))return t.lanes=e.lanes,ls(e,t,a);131072&e.flags&&(Ni=!0)}}return Qi(e,t,n,r,a)}function Ri(e,t,n,r){var a=r.children,o=null!==e?e.memoizedState:null;if(null===e&&null===t.stateNode&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),"hidden"===r.mode){if(128&t.flags){if(o=null!==o?o.baseLanes|n:n,null!==e){for(r=t.child=e.child,a=0;null!==r;)a=a|r.lanes|r.childLanes,r=r.sibling;r=a&~o}else r=0,t.child=null;return Wi(e,t,o,n,r)}if(!(536870912&n))return r=t.lanes=536870912,Wi(e,t,null!==o?o.baseLanes|n:n,n,r);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Xa(0,null!==o?o.cachePool:null),null!==o?_o(t,o):Ao(),Io(t)}else null!==o?(Xa(0,o.cachePool),_o(t,o),Ro(),t.memoizedState=null):(null!==e&&Xa(0,null),Ao(),Ro());return Di(e,t,a,n),t.child}function Bi(e,t){return null!==e&&22===e.tag||null!==t.stateNode||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Wi(e,t,n,r,a){var o=Ka();return o=null===o?null:{parent:Ra._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&Xa(0,null),Ao(),Io(t),null!==e&&La(e,t,r,!0),t.childLanes=a,null}function Ui(e,t){return(t=ts({mode:t.mode,children:t.children},e.mode)).ref=e.ref,e.child=t,t.return=e,t}function Vi(e,t,n){return go(t,e.child,null,n),(e=Ui(t,t.pendingProps)).flags|=2,Bo(t),t.memoizedState=null,e}function Hi(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!=typeof n&&"object"!=typeof n)throw Error(r(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Qi(e,t,n,r,a){return Aa(t),n=rl(e,t,n,r,void 0,a),r=il(),null===e||Ni?(ma&&r&&sa(t),t.flags|=1,Di(e,t,n,a),t.child):(sl(e,t,a),ls(e,t,a))}function qi(e,t,n,r,a,o){return Aa(t),t.updateQueue=null,n=ol(t,r,n,a),al(e),r=il(),null===e||Ni?(ma&&r&&sa(t),t.flags|=1,Di(e,t,n,o),t.child):(sl(e,t,o),ls(e,t,o))}function Yi(e,t,n,r,a){if(Aa(t),null===t.stateNode){var o=Or,l=n.contextType;"object"==typeof l&&null!==l&&(o=Ta(l)),o=new n(r,o),t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,o.updater=Si,t.stateNode=o,o._reactInternals=t,(o=t.stateNode).props=r,o.state=t.memoizedState,o.refs={},vo(t),l=n.contextType,o.context="object"==typeof l&&null!==l?Ta(l):Or,o.state=t.memoizedState,"function"==typeof(l=n.getDerivedStateFromProps)&&(ki(t,n,l,r),o.state=t.memoizedState),"function"==typeof n.getDerivedStateFromProps||"function"==typeof o.getSnapshotBeforeUpdate||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||(l=o.state,"function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),l!==o.state&&Si.enqueueReplaceState(o,o.state,null),Eo(t,r,o,a),Co(),o.state=t.memoizedState),"function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){o=t.stateNode;var i=t.memoizedProps,s=zi(n,i);o.props=s;var c=o.context,u=n.contextType;l=Or,"object"==typeof u&&null!==u&&(l=Ta(u));var d=n.getDerivedStateFromProps;u="function"==typeof d||"function"==typeof o.getSnapshotBeforeUpdate,i=t.pendingProps!==i,u||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(i||c!==l)&&$i(t,o,r,l),yo=!1;var f=t.memoizedState;o.state=f,Eo(t,r,o,a),Co(),c=t.memoizedState,i||f!==c||yo?("function"==typeof d&&(ki(t,n,d,r),c=t.memoizedState),(s=yo||wi(t,n,s,r,f,c,l))?(u||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,xo(e,t),u=zi(n,l=t.memoizedProps),o.props=u,d=t.pendingProps,f=o.context,c=n.contextType,s=Or,"object"==typeof c&&null!==c&&(s=Ta(c)),(c="function"==typeof(i=n.getDerivedStateFromProps)||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(l!==d||f!==s)&&$i(t,o,r,s),yo=!1,f=t.memoizedState,o.state=f,Eo(t,r,o,a),Co();var m=t.memoizedState;l!==d||f!==m||yo||null!==e&&null!==e.dependencies&&_a(e.dependencies)?("function"==typeof i&&(ki(t,n,i,r),m=t.memoizedState),(u=yo||wi(t,n,u,r,f,m,s)||null!==e&&null!==e.dependencies&&_a(e.dependencies))?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,m,s),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,m,s)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=s,r=u):("function"!=typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return o=r,Hi(e,t),r=!!(128&t.flags),o||r?(o=t.stateNode,n=r&&"function"!=typeof n.getDerivedStateFromError?null:o.render(),t.flags|=1,null!==e&&r?(t.child=go(t,e.child,null,a),t.child=go(t,null,n,a)):Di(e,t,n,a),t.memoizedState=o.state,e=t.child):e=ls(e,t,a),e}function Gi(e,t,n,r){return ka(),t.flags|=256,Di(e,t,n,r),t.child}var Ki={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xi(e){return{baseLanes:e,cachePool:Ja()}}function Ji(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=Fc),e}function Zi(e,t,n){var a,o=t.pendingProps,l=!1,i=!!(128&t.flags);if((a=i)||(a=(null===e||null!==e.memoizedState)&&!!(2&Wo.current)),a&&(l=!0,t.flags&=-129),a=!!(32&t.flags),t.flags&=-33,null===e){if(ma){if(l?Mo(t):Ro(),(e=fa)?null!==(e=null!==(e=_d(e,ha))&&"&"!==e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ra?{id:aa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},(n=qr(e)).return=t,t.child=n,da=t,fa=null):e=null,null===e)throw ba(t);return Td(e)?t.lanes=32:t.lanes=536870912,null}var s=o.children;return o=o.fallback,l?(Ro(),s=ts({mode:"hidden",children:s},l=t.mode),o=Hr(o,l,n,null),s.return=t,o.return=t,s.sibling=o,t.child=s,(o=t.child).memoizedState=Xi(n),o.childLanes=Ji(e,a,n),t.memoizedState=Ki,Bi(null,o)):(Mo(t),es(t,s))}var c=e.memoizedState;if(null!==c&&null!==(s=c.dehydrated)){if(i)256&t.flags?(Mo(t),t.flags&=-257,t=ns(e,t,n)):null!==t.memoizedState?(Ro(),t.child=e.child,t.flags|=128,t=null):(Ro(),s=o.fallback,l=t.mode,o=ts({mode:"visible",children:o.children},l),(s=Hr(s,l,n,null)).flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,go(t,e.child,null,n),(o=t.child).memoizedState=Xi(n),o.childLanes=Ji(e,a,n),t.memoizedState=Ki,t=Bi(null,o));else if(Mo(t),Td(s)){if(a=s.nextSibling&&s.nextSibling.dataset)var u=a.dgst;a=u,(o=Error(r(419))).stack="",o.digest=a,wa({value:o,source:null,stack:null}),t=ns(e,t,n)}else if(Ni||La(e,t,n,!1),a=0!==(n&e.childLanes),Ni||a){if(null!==(a=gc)&&(0!==(o=Me(a,n))&&o!==c.retryLane))throw c.retryLane=o,Nr(e,o),Kc(a,e,o),Ti;Ad(s)||su(),t=ns(e,t,n)}else Ad(s)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,fa=Nd(s.nextSibling),da=t,ma=!0,pa=null,ha=!1,null!==e&&ua(t,e),(t=es(t,o.children)).flags|=4096);return t}return l?(Ro(),s=o.fallback,l=t.mode,u=(c=e.child).sibling,(o=Wr(c,{mode:"hidden",children:o.children})).subtreeFlags=65011712&c.subtreeFlags,null!==u?s=Wr(u,s):(s=Hr(s,l,n,null)).flags|=2,s.return=t,o.return=t,o.sibling=s,t.child=o,Bi(null,o),o=t.child,null===(s=e.child.memoizedState)?s=Xi(n):(null!==(l=s.cachePool)?(c=Ra._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Ja(),s={baseLanes:s.baseLanes|n,cachePool:l}),o.memoizedState=s,o.childLanes=Ji(e,a,n),t.memoizedState=Ki,Bi(e.child,o)):(Mo(t),e=(n=e.child).sibling,(n=Wr(n,{mode:"visible",children:o.children})).return=t,n.sibling=null,null!==e&&(null===(a=t.deletions)?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function es(e,t){return(t=ts({mode:"visible",children:t},e.mode)).return=e,e.child=t}function ts(e,t){return(e=Rr(22,e,null,t)).lanes=0,e}function ns(e,t,n){return go(t,e.child,null,n),(e=es(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function rs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Fa(e.return,t,n)}function as(e,t,n,r,a,o){var l=e.memoizedState;null===l?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,treeForkCount:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a,l.treeForkCount=o)}function os(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;r=r.children;var l=Wo.current,i=!!(2&l);if(i?(l=1&l|2,t.flags|=128):l&=1,U(Wo,l),Di(e,t,r,n),r=ma?ea:0,!i&&null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&rs(e,n,t);else if(19===e.tag)rs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Uo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),as(t,!1,a,n,o,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Uo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}as(t,!0,n,null,o,r);break;case"together":as(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function ls(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Cc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(La(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(r(153));if(null!==t.child){for(n=Wr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Wr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function is(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!_a(e))}function ss(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ni=!0;else{if(!(is(e,n)||128&t.flags))return Ni=!1,function(e,t,n){switch(t.tag){case 3:K(t,t.stateNode.containerInfo),Ea(0,Ra,e.memoizedState.cache),ka();break;case 27:case 5:J(t);break;case 4:K(t,t.stateNode.containerInfo);break;case 10:Ea(0,t.type,t.memoizedProps.value);break;case 31:if(null!==t.memoizedState)return t.flags|=128,Oo(t),null;break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Mo(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Zi(e,t,n):(Mo(t),null!==(e=ls(e,t,n))?e.sibling:null);Mo(t);break;case 19:var a=!!(128&e.flags);if((r=0!==(n&t.childLanes))||(La(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return os(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),U(Wo,Wo.current),r)break;return null;case 22:return t.lanes=0,Ri(e,t,n,t.pendingProps);case 24:Ea(0,Ra,e.memoizedState.cache)}return ls(e,t,n)}(e,t,n);Ni=!!(131072&e.flags)}else Ni=!1,ma&&1048576&t.flags&&ia(t,ea,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=oo(t.elementType),t.type=e,"function"!=typeof e){if(null!=e){var o=e.$$typeof;if(o===w){t.tag=11,t=Mi(null,t,e,a,n);break e}if(o===E){t.tag=14,t=Oi(null,t,e,a,n);break e}}throw t=T(e)||e,Error(r(306,t,""))}Br(e)?(a=zi(e,a),t.tag=1,t=Yi(null,t,e,a,n)):(t.tag=0,t=Qi(null,t,e,a,n))}return t;case 0:return Qi(e,t,t.type,t.pendingProps,n);case 1:return Yi(e,t,a=t.type,o=zi(a,t.pendingProps),n);case 3:e:{if(K(t,t.stateNode.containerInfo),null===e)throw Error(r(387));a=t.pendingProps;var l=t.memoizedState;o=l.element,xo(e,t),Eo(t,a,null,n);var i=t.memoizedState;if(a=i.cache,Ea(0,Ra,a),a!==l.cache&&ja(t,[Ra],n,!0),Co(),a=i.element,l.isDehydrated){if(l={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=l,t.memoizedState=l,256&t.flags){t=Gi(e,t,a,n);break e}if(a!==o){wa(o=Kr(Error(r(424)),t)),t=Gi(e,t,a,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(fa=Nd(e.firstChild),da=t,ma=!0,pa=null,ha=!0,n=bo(t,null,a,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ka(),a===o){t=ls(e,t,n);break e}Di(e,t,a,n)}t=t.child}return t;case 26:return Hi(e,t),null===e?(n=qd(t.type,null,t.pendingProps,null))?t.memoizedState=n:ma||(n=t.type,e=t.pendingProps,(a=yd(Y.current).createElement(n))[Ue]=t,a[Ve]=e,pd(a,n,e),nt(a),t.stateNode=a):t.memoizedState=qd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return J(t),null===e&&ma&&(a=t.stateNode=Id(t.type,t.pendingProps,Y.current),da=t,ha=!0,o=fa,Pd(t.type)?(Dd=o,fa=Nd(a.firstChild)):fa=o),Di(e,t,t.pendingProps.children,n),Hi(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&ma&&((o=a=fa)&&(null!==(a=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ke])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(o=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(o!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((o=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var o=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===o)return e}if(null===(e=Nd(e.nextSibling)))break}return null}(a,t.type,t.pendingProps,ha))?(t.stateNode=a,da=t,fa=Nd(a.firstChild),ha=!1,o=!0):o=!1),o||ba(t)),J(t),o=t.type,l=t.pendingProps,i=null!==e?e.memoizedProps:null,a=l.children,kd(o,l)?a=null:null!==i&&kd(o,i)&&(t.flags|=32),null!==t.memoizedState&&(o=rl(e,t,ll,null,null,n),mf._currentValue=o),Hi(e,t),Di(e,t,a,n),t.child;case 6:return null===e&&ma&&((e=n=fa)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=Nd(e.nextSibling)))return null}return e}(n,t.pendingProps,ha))?(t.stateNode=n,da=t,fa=null,e=!0):e=!1),e||ba(t)),null;case 13:return Zi(e,t,n);case 4:return K(t,t.stateNode.containerInfo),a=t.pendingProps,null===e?t.child=go(t,null,a,n):Di(e,t,a,n),t.child;case 11:return Mi(e,t,t.type,t.pendingProps,n);case 7:return Di(e,t,t.pendingProps,n),t.child;case 8:case 12:return Di(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Ea(0,t.type,a.value),Di(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,Aa(t),a=a(o=Ta(o)),t.flags|=1,Di(e,t,a,n),t.child;case 14:return Oi(e,t,t.type,t.pendingProps,n);case 15:return Ii(e,t,t.type,t.pendingProps,n);case 19:return os(e,t,n);case 31:return function(e,t,n){var a=t.pendingProps,o=!!(128&t.flags);if(t.flags&=-129,null===e){if(ma){if("hidden"===a.mode)return e=Ui(t,a),t.lanes=536870912,Bi(null,e);if(Oo(t),(e=fa)?null!==(e=null!==(e=_d(e,ha))&&"&"===e.data?e:null)&&(t.memoizedState={dehydrated:e,treeContext:null!==ra?{id:aa,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},(n=qr(e)).return=t,t.child=n,da=t,fa=null):e=null,null===e)throw ba(t);return t.lanes=536870912,null}return Ui(t,a)}var l=e.memoizedState;if(null!==l){var i=l.dehydrated;if(Oo(t),o)if(256&t.flags)t.flags&=-257,t=Vi(e,t,n);else{if(null===t.memoizedState)throw Error(r(558));t.child=e.child,t.flags|=128,t=null}else if(Ni||La(e,t,n,!1),o=0!==(n&e.childLanes),Ni||o){if(null!==(a=gc)&&0!==(i=Me(a,n))&&i!==l.retryLane)throw l.retryLane=i,Nr(e,i),Kc(a,e,i),Ti;su(),t=Vi(e,t,n)}else e=l.treeContext,fa=Nd(i.nextSibling),da=t,ma=!0,pa=null,ha=!1,null!==e&&ua(t,e),(t=Ui(t,a)).flags|=4096;return t}return(e=Wr(e.child,{mode:a.mode,children:a.children})).ref=t.ref,t.child=e,e.return=t,e}(e,t,n);case 22:return Ri(e,t,n,t.pendingProps);case 24:return Aa(t),a=Ta(Ra),null===e?(null===(o=Ka())&&(o=gc,l=Ba(),o.pooledCache=l,l.refCount++,null!==l&&(o.pooledCacheLanes|=n),o=l),t.memoizedState={parent:a,cache:o},vo(t),Ea(0,Ra,o)):(0!==(e.lanes&n)&&(xo(e,t),Eo(t,null,null,n),Co()),o=e.memoizedState,l=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=o),Ea(0,Ra,a)):(a=l.cache,Ea(0,Ra,a),a!==o.cache&&ja(t,[Ra],n,!0))),Di(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function cs(e){e.flags|=4}function us(e,t,n,r,a){if((t=!!(32&e.mode))&&(t=!1),t){if(e.flags|=16777216,(335544128&a)===a)if(e.stateNode.complete)e.flags|=8192;else{if(!ou())throw lo=no,eo;e.flags|=8192}}else e.flags&=-16777217}function ds(e,t){if("stylesheet"!==t.type||4&t.state.loading)e.flags&=-16777217;else if(e.flags|=16777216,!lf(t)){if(!ou())throw lo=no,eo;e.flags|=8192}}function fs(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?_e():536870912,e.lanes|=t,jc|=t)}function ms(e,t){if(!ma)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ps(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hs(e,t,n){var a=t.pendingProps;switch(ca(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return ps(t),null;case 3:return n=t.stateNode,a=null,null!==e&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Pa(Ra),X(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(xa(t)?cs(t):null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,Sa())),ps(t),null;case 26:var o=t.type,l=t.memoizedState;return null===e?(cs(t),null!==l?(ps(t),ds(t,l)):(ps(t),us(t,o,0,0,n))):l?l!==e.memoizedState?(cs(t),ps(t),ds(t,l)):(ps(t),t.flags&=-16777217):((e=e.memoizedProps)!==a&&cs(t),ps(t),us(t,o,0,0,n)),null;case 27:if(Z(t),n=Y.current,o=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==a&&cs(t);else{if(!a){if(null===t.stateNode)throw Error(r(166));return ps(t),null}e=Q.current,xa(t)?ya(t):(e=Id(o,a,n),t.stateNode=e,cs(t))}return ps(t),null;case 5:if(Z(t),o=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==a&&cs(t);else{if(!a){if(null===t.stateNode)throw Error(r(166));return ps(t),null}if(l=Q.current,xa(t))ya(t);else{var i=yd(Y.current);switch(l){case 1:l=i.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:l=i.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":l=i.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":l=i.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":(l=i.createElement("div")).innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l="string"==typeof a.is?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l="string"==typeof a.is?i.createElement(o,{is:a.is}):i.createElement(o)}}l[Ue]=t,l[Ve]=a;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)l.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=l;e:switch(pd(l,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&cs(t)}}return ps(t),us(t,t.type,null===e||e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==a&&cs(t);else{if("string"!=typeof a&&null===t.stateNode)throw Error(r(166));if(e=Y.current,xa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,null!==(o=da))switch(o.tag){case 27:case 5:a=o.memoizedProps}e[Ue]=t,(e=!!(e.nodeValue===n||null!==a&&!0===a.suppressHydrationWarning||dd(e.nodeValue,n)))||ba(t,!0)}else(e=yd(e).createTextNode(a))[Ue]=t,t.stateNode=e}return ps(t),null;case 31:if(n=t.memoizedState,null===e||null!==e.memoizedState){if(a=xa(t),null!==n){if(null===e){if(!a)throw Error(r(318));if(!(e=null!==(e=t.memoizedState)?e.dehydrated:null))throw Error(r(557));e[Ue]=t}else ka(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ps(t),e=!1}else n=Sa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return 256&t.flags?(Bo(t),t):(Bo(t),null);if(128&t.flags)throw Error(r(558))}return ps(t),null;case 13:if(a=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(o=xa(t),null!==a&&null!==a.dehydrated){if(null===e){if(!o)throw Error(r(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(r(317));o[Ue]=t}else ka(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ps(t),o=!1}else o=Sa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return 256&t.flags?(Bo(t),t):(Bo(t),null)}return Bo(t),128&t.flags?(t.lanes=n,t):(n=null!==a,e=null!==e&&null!==e.memoizedState,n&&(o=null,null!==(a=t.child).alternate&&null!==a.alternate.memoizedState&&null!==a.alternate.memoizedState.cachePool&&(o=a.alternate.memoizedState.cachePool.pool),l=null,null!==a.memoizedState&&null!==a.memoizedState.cachePool&&(l=a.memoizedState.cachePool.pool),l!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),fs(t,t.updateQueue),ps(t),null);case 4:return X(),null===e&&td(t.stateNode.containerInfo),ps(t),null;case 10:return Pa(t.type),ps(t),null;case 19:if(W(Wo),null===(a=t.memoizedState))return ps(t),null;if(o=!!(128&t.flags),null===(l=a.rendering))if(o)ms(a,!1);else{if(0!==zc||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(l=Uo(e))){for(t.flags|=128,ms(a,!1),e=l.updateQueue,t.updateQueue=e,fs(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ur(n,e),n=n.sibling;return U(Wo,1&Wo.current|2),ma&&la(t,a.treeForkCount),t.child}e=e.sibling}null!==a.tail&&ue()>Dc&&(t.flags|=128,o=!0,ms(a,!1),t.lanes=4194304)}else{if(!o)if(null!==(e=Uo(l))){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,fs(t,e),ms(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!ma)return ps(t),null}else 2*ue()-a.renderingStartTime>Dc&&536870912!==n&&(t.flags|=128,o=!0,ms(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(e=a.last)?e.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ue(),e.sibling=null,n=Wo.current,U(Wo,o?1&n|2:1&n),ma&&la(t,a.treeForkCount),e):(ps(t),null);case 22:case 23:return Bo(t),To(),a=null!==t.memoizedState,null!==e?null!==e.memoizedState!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?!!(536870912&n)&&!(128&t.flags)&&(ps(t),6&t.subtreeFlags&&(t.flags|=8192)):ps(t),null!==(n=t.updateQueue)&&fs(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),a=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),null!==e&&W(Ga),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Pa(Ra),ps(t),null;case 25:case 30:return null}throw Error(r(156,t.tag))}function gs(e,t){switch(ca(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Pa(Ra),X(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return Z(t),null;case 31:if(null!==t.memoizedState){if(Bo(t),null===t.alternate)throw Error(r(340));ka()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 13:if(Bo(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(r(340));ka()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return W(Wo),null;case 4:return X(),null;case 10:return Pa(t.type),null;case 22:case 23:return Bo(t),To(),null!==e&&W(Ga),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return Pa(Ra),null;default:return null}}function bs(e,t){switch(ca(t),t.tag){case 3:Pa(Ra),X();break;case 26:case 27:case 5:Z(t);break;case 4:X();break;case 31:null!==t.memoizedState&&Bo(t);break;case 13:Bo(t);break;case 19:W(Wo);break;case 10:Pa(t.type);break;case 22:case 23:Bo(t),To(),null!==e&&W(Ga);break;case 24:Pa(Ra)}}function ys(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var o=n.create,l=n.inst;r=o(),l.destroy=r}n=n.next}while(n!==a)}}catch(i){zu(t,t.return,i)}}function vs(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var o=a.next;r=o;do{if((r.tag&e)===e){var l=r.inst,i=l.destroy;if(void 0!==i){l.destroy=void 0,a=t;var s=n,c=i;try{c()}catch(u){zu(a,s,u)}}}r=r.next}while(r!==o)}}catch(u){zu(t,t.return,u)}}function xs(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{Fo(t,n)}catch(r){zu(e,e.return,r)}}}function ks(e,t,n){n.props=zi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){zu(e,t,r)}}function Ss(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"==typeof n?e.refCleanup=n(r):n.current=r}}catch(a){zu(e,t,a)}}function ws(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"==typeof r)try{r()}catch(a){zu(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"==typeof n)try{n(null)}catch(o){zu(e,t,o)}else n.current=null}function $s(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){zu(e,e.return,a)}}function zs(e,t,n){try{var a=e.stateNode;!function(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,l=null,i=null,s=null,c=null,u=null,d=null;for(p in n){var f=n[p];if(n.hasOwnProperty(p)&&null!=f)switch(p){case"checked":case"value":break;case"defaultValue":c=f;default:a.hasOwnProperty(p)||fd(e,t,p,null,a,f)}}for(var m in a){var p=a[m];if(f=n[m],a.hasOwnProperty(m)&&(null!=p||null!=f))switch(m){case"type":l=p;break;case"name":o=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":i=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(r(137,t));break;default:p!==f&&fd(e,t,m,p,a,f)}}return void xt(e,i,s,c,u,d,l,o);case"select":for(l in p=i=s=m=null,n)if(c=n[l],n.hasOwnProperty(l)&&null!=c)switch(l){case"value":break;case"multiple":p=c;default:a.hasOwnProperty(l)||fd(e,t,l,null,a,c)}for(o in a)if(l=a[o],c=n[o],a.hasOwnProperty(o)&&(null!=l||null!=c))switch(o){case"value":m=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:l!==c&&fd(e,t,o,l,a,c)}return t=s,n=i,a=p,void(null!=m?wt(e,!!n,m,!1):!!a!=!!n&&(null!=t?wt(e,!!n,t,!0):wt(e,!!n,n?[]:"",!1)));case"textarea":for(s in p=m=null,n)if(o=n[s],n.hasOwnProperty(s)&&null!=o&&!a.hasOwnProperty(s))switch(s){case"value":case"children":break;default:fd(e,t,s,null,a,o)}for(i in a)if(o=a[i],l=n[i],a.hasOwnProperty(i)&&(null!=o||null!=l))switch(i){case"value":m=o;break;case"defaultValue":p=o;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=o)throw Error(r(91));break;default:o!==l&&fd(e,t,i,o,a,l)}return void $t(e,m,p);case"option":for(var h in n)if(m=n[h],n.hasOwnProperty(h)&&null!=m&&!a.hasOwnProperty(h))if("selected"===h)e.selected=!1;else fd(e,t,h,null,a,m);for(c in a)if(m=a[c],p=n[c],a.hasOwnProperty(c)&&m!==p&&(null!=m||null!=p))if("selected"===c)e.selected=m&&"function"!=typeof m&&"symbol"!=typeof m;else fd(e,t,c,m,a,p);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)m=n[g],n.hasOwnProperty(g)&&null!=m&&!a.hasOwnProperty(g)&&fd(e,t,g,null,a,m);for(u in a)if(m=a[u],p=n[u],a.hasOwnProperty(u)&&m!==p&&(null!=m||null!=p))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=m)throw Error(r(137,t));break;default:fd(e,t,u,m,a,p)}return;default:if(jt(t)){for(var b in n)m=n[b],n.hasOwnProperty(b)&&void 0!==m&&!a.hasOwnProperty(b)&&md(e,t,b,void 0,a,m);for(d in a)m=a[d],p=n[d],!a.hasOwnProperty(d)||m===p||void 0===m&&void 0===p||md(e,t,d,m,a,p);return}}for(var y in n)m=n[y],n.hasOwnProperty(y)&&null!=m&&!a.hasOwnProperty(y)&&fd(e,t,y,null,a,m);for(f in a)m=a[f],p=n[f],!a.hasOwnProperty(f)||m===p||null==m&&null==p||fd(e,t,f,m,a,p)}(a,e.type,n,t),a[Ve]=t}catch(o){zu(e,e.return,o)}}function Cs(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&Pd(e.type)||4===e.tag}function Es(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Cs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&Pd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Ps(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Tt));else if(4!==r&&(27===r&&Pd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(Ps(e,t,n),e=e.sibling;null!==e;)Ps(e,t,n),e=e.sibling}function Fs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&Pd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(Fs(e,t,n),e=e.sibling;null!==e;)Fs(e,t,n),e=e.sibling}function js(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);pd(t,r,n),t[Ue]=e,t[Ve]=n}catch(o){zu(e,e.return,o)}}var Ls=!1,_s=!1,As=!1,Ts="function"==typeof WeakSet?WeakSet:Set,Ns=null;function Ds(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ks(e,n),4&r&&ys(5,n);break;case 1:if(Ks(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(l){zu(n,n.return,l)}else{var a=zi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){zu(n,n.return,i)}}64&r&&xs(n),512&r&&Ss(n,n.return);break;case 3:if(Ks(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{Fo(e,t)}catch(l){zu(n,n.return,l)}}break;case 27:null===t&&4&r&&js(n);case 26:case 5:Ks(e,n),null===t&&4&r&&$s(n),512&r&&Ss(n,n.return);break;case 12:Ks(e,n);break;case 31:Ks(e,n),4&r&&Ws(e,n);break;case 13:Ks(e,n),4&r&&Us(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$~"===e.data)e._reactRetry=t;else if("$?"!==e.data||"loading"!==n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=Fu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||Ls)){t=null!==t&&null!==t.memoizedState||_s,a=Ls;var o=_s;Ls=r,(_s=t)&&!o?Js(e,n,!!(8772&n.subtreeFlags)):Ks(e,n),Ls=a,_s=o}break;case 30:break;default:Ks(e,n)}}function Ms(e){var t=e.alternate;null!==t&&(e.alternate=null,Ms(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Xe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Os=null,Is=!1;function Rs(e,t,n){for(n=n.child;null!==n;)Bs(e,t,n),n=n.sibling}function Bs(e,t,n){if(xe&&"function"==typeof xe.onCommitFiberUnmount)try{xe.onCommitFiberUnmount(ve,n)}catch(o){}switch(n.tag){case 26:_s||ws(n,t),Rs(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:_s||ws(n,t);var r=Os,a=Is;Pd(n.type)&&(Os=n.stateNode,Is=!1),Rs(e,t,n),Rd(n.stateNode),Os=r,Is=a;break;case 5:_s||ws(n,t);case 6:if(r=Os,a=Is,Os=null,Rs(e,t,n),Is=a,null!==(Os=r))if(Is)try{(9===Os.nodeType?Os.body:"HTML"===Os.nodeName?Os.ownerDocument.body:Os).removeChild(n.stateNode)}catch(l){zu(n,t,l)}else try{Os.removeChild(n.stateNode)}catch(l){zu(n,t,l)}break;case 18:null!==Os&&(Is?(Fd(9===(e=Os).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),qf(e)):Fd(Os,n.stateNode));break;case 4:r=Os,a=Is,Os=n.stateNode.containerInfo,Is=!0,Rs(e,t,n),Os=r,Is=a;break;case 0:case 11:case 14:case 15:vs(2,n,t),_s||vs(4,n,t),Rs(e,t,n);break;case 1:_s||(ws(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount&&ks(n,t,r)),Rs(e,t,n);break;case 21:Rs(e,t,n);break;case 22:_s=(r=_s)||null!==n.memoizedState,Rs(e,t,n),_s=r;break;default:Rs(e,t,n)}}function Ws(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&null!==(e=e.memoizedState))){e=e.dehydrated;try{qf(e)}catch(n){zu(t,t.return,n)}}}function Us(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{qf(e)}catch(n){zu(t,t.return,n)}}function Vs(e,t){var n=function(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Ts),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Ts),t;default:throw Error(r(435,e.tag))}}(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=ju.bind(null,e,t);t.then(r,r)}})}function Hs(e,t){var n=t.deletions;if(null!==n)for(var a=0;a<n.length;a++){var o=n[a],l=e,i=t,s=i;e:for(;null!==s;){switch(s.tag){case 27:if(Pd(s.type)){Os=s.stateNode,Is=!1;break e}break;case 5:Os=s.stateNode,Is=!1;break e;case 3:case 4:Os=s.stateNode.containerInfo,Is=!0;break e}s=s.return}if(null===Os)throw Error(r(160));Bs(l,i,o),Os=null,Is=!1,null!==(l=o.alternate)&&(l.return=null),o.return=null}if(13886&t.subtreeFlags)for(t=t.child;null!==t;)qs(t,e),t=t.sibling}var Qs=null;function qs(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hs(t,e),Ys(e),4&a&&(vs(3,e,e.return),ys(3,e),vs(5,e,e.return));break;case 1:Hs(t,e),Ys(e),512&a&&(_s||null===n||ws(n,n.return)),64&a&&Ls&&(null!==(e=e.updateQueue)&&(null!==(a=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?a:n.concat(a))));break;case 26:var o=Qs;if(Hs(t,e),Ys(e),512&a&&(_s||null===n||ws(n,n.return)),4&a){var l=null!==n?n.memoizedState:null;if(a=e.memoizedState,null===n)if(null===a)if(null===e.stateNode){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":(!(l=o.getElementsByTagName("title")[0])||l[Ke]||l[Ue]||"http://www.w3.org/2000/svg"===l.namespaceURI||l.hasAttribute("itemprop"))&&(l=o.createElement(a),o.head.insertBefore(l,o.querySelector("head > title"))),pd(l,a,n),l[Ue]=e,nt(l),a=l;break e;case"link":var i=af("link","href",o).get(a+(n.href||""));if(i)for(var s=0;s<i.length;s++)if((l=i[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&l.getAttribute("rel")===(null==n.rel?null:n.rel)&&l.getAttribute("title")===(null==n.title?null:n.title)&&l.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){i.splice(s,1);break t}pd(l=o.createElement(a),a,n),o.head.appendChild(l);break;case"meta":if(i=af("meta","content",o).get(a+(n.content||"")))for(s=0;s<i.length;s++)if((l=i[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&l.getAttribute("name")===(null==n.name?null:n.name)&&l.getAttribute("property")===(null==n.property?null:n.property)&&l.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&l.getAttribute("charset")===(null==n.charSet?null:n.charSet)){i.splice(s,1);break t}pd(l=o.createElement(a),a,n),o.head.appendChild(l);break;default:throw Error(r(468,a))}l[Ue]=e,nt(l),a=l}e.stateNode=a}else of(o,e.type,e.stateNode);else e.stateNode=Zd(o,a,e.memoizedProps);else l!==a?(null===l?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):l.count--,null===a?of(o,e.type,e.stateNode):Zd(o,a,e.memoizedProps)):null===a&&null!==e.stateNode&&zs(e,e.memoizedProps,n.memoizedProps)}break;case 27:Hs(t,e),Ys(e),512&a&&(_s||null===n||ws(n,n.return)),null!==n&&4&a&&zs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Hs(t,e),Ys(e),512&a&&(_s||null===n||ws(n,n.return)),32&e.flags){o=e.stateNode;try{Ct(o,"")}catch(h){zu(e,e.return,h)}}4&a&&null!=e.stateNode&&zs(e,o=e.memoizedProps,null!==n?n.memoizedProps:o),1024&a&&(As=!0);break;case 6:if(Hs(t,e),Ys(e),4&a){if(null===e.stateNode)throw Error(r(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(h){zu(e,e.return,h)}}break;case 3:if(rf=null,o=Qs,Qs=Ud(t.containerInfo),Hs(t,e),Qs=o,Ys(e),4&a&&null!==n&&n.memoizedState.isDehydrated)try{qf(t.containerInfo)}catch(h){zu(e,e.return,h)}As&&(As=!1,Gs(e));break;case 4:a=Qs,Qs=Ud(e.stateNode.containerInfo),Hs(t,e),Ys(e),Qs=a;break;case 12:default:Hs(t,e),Ys(e);break;case 31:case 19:Hs(t,e),Ys(e),4&a&&(null!==(a=e.updateQueue)&&(e.updateQueue=null,Vs(e,a)));break;case 13:Hs(t,e),Ys(e),8192&e.child.flags&&null!==e.memoizedState!=(null!==n&&null!==n.memoizedState)&&(Tc=ue()),4&a&&(null!==(a=e.updateQueue)&&(e.updateQueue=null,Vs(e,a)));break;case 22:o=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=Ls,d=_s;if(Ls=u||o,_s=d||c,Hs(t,e),_s=d,Ls=u,Ys(e),8192&a)e:for(t=e.stateNode,t._visibility=o?-2&t._visibility:1|t._visibility,o&&(null===n||c||Ls||_s||Xs(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(l=c.stateNode,o)"function"==typeof(i=l.style).setProperty?i.setProperty("display","none","important"):i.display="none";else{s=c.stateNode;var f=c.memoizedProps.style,m=null!=f&&f.hasOwnProperty("display")?f.display:null;s.style.display=null==m||"boolean"==typeof m?"":(""+m).trim()}}catch(h){zu(c,c.return,h)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=o?"":c.memoizedProps}catch(h){zu(c,c.return,h)}}}else if(18===t.tag){if(null===n){c=t;try{var p=c.stateNode;o?jd(p,!0):jd(c.stateNode,!1)}catch(h){zu(c,c.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&a&&(null!==(a=e.updateQueue)&&(null!==(n=a.retryQueue)&&(a.retryQueue=null,Vs(e,n))));case 30:case 21:}}function Ys(e){var t=e.flags;if(2&t){try{for(var n,a=e.return;null!==a;){if(Cs(a)){n=a;break}a=a.return}if(null==n)throw Error(r(160));switch(n.tag){case 27:var o=n.stateNode;Fs(e,Es(e),o);break;case 5:var l=n.stateNode;32&n.flags&&(Ct(l,""),n.flags&=-33),Fs(e,Es(e),l);break;case 3:case 4:var i=n.stateNode.containerInfo;Ps(e,Es(e),i);break;default:throw Error(r(161))}}catch(s){zu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Gs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Gs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Ks(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Ds(e,t.alternate,t),t=t.sibling}function Xs(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:vs(4,t,t.return),Xs(t);break;case 1:ws(t,t.return);var n=t.stateNode;"function"==typeof n.componentWillUnmount&&ks(t,t.return,n),Xs(t);break;case 27:Rd(t.stateNode);case 26:case 5:ws(t,t.return),Xs(t);break;case 22:null===t.memoizedState&&Xs(t);break;default:Xs(t)}e=e.sibling}}function Js(e,t,n){for(n=n&&!!(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,o=t,l=o.flags;switch(o.tag){case 0:case 11:case 15:Js(a,o,n),ys(4,o);break;case 1:if(Js(a,o,n),"function"==typeof(a=(r=o).stateNode).componentDidMount)try{a.componentDidMount()}catch(c){zu(r,r.return,c)}if(null!==(a=(r=o).updateQueue)){var i=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)Po(s[a],i)}catch(c){zu(r,r.return,c)}}n&&64&l&&xs(o),Ss(o,o.return);break;case 27:js(o);case 26:case 5:Js(a,o,n),n&&null===r&&4&l&&$s(o),Ss(o,o.return);break;case 12:Js(a,o,n);break;case 31:Js(a,o,n),n&&4&l&&Ws(a,o);break;case 13:Js(a,o,n),n&&4&l&&Us(a,o);break;case 22:null===o.memoizedState&&Js(a,o,n),Ss(o,o.return);break;case 30:break;default:Js(a,o,n)}t=t.sibling}}function Zs(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Wa(n))}function ec(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Wa(e))}function tc(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)nc(e,t,n,r),t=t.sibling}function nc(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:tc(e,t,n,r),2048&a&&ys(9,t);break;case 1:case 31:case 13:default:tc(e,t,n,r);break;case 3:tc(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Wa(e)));break;case 12:if(2048&a){tc(e,t,n,r),e=t.stateNode;try{var o=t.memoizedProps,l=o.id,i=o.onPostCommit;"function"==typeof i&&i(l,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){zu(t,t.return,s)}}else tc(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,l=t.alternate,null!==t.memoizedState?2&o._visibility?tc(e,t,n,r):ac(e,t):2&o._visibility?tc(e,t,n,r):(o._visibility|=2,rc(e,t,n,r,!!(10256&t.subtreeFlags)||!1)),2048&a&&Zs(l,t);break;case 24:tc(e,t,n,r),2048&a&&ec(t.alternate,t)}}function rc(e,t,n,r,a){for(a=a&&(!!(10256&t.subtreeFlags)||!1),t=t.child;null!==t;){var o=e,l=t,i=n,s=r,c=l.flags;switch(l.tag){case 0:case 11:case 15:rc(o,l,i,s,a),ys(8,l);break;case 23:break;case 22:var u=l.stateNode;null!==l.memoizedState?2&u._visibility?rc(o,l,i,s,a):ac(o,l):(u._visibility|=2,rc(o,l,i,s,a)),a&&2048&c&&Zs(l.alternate,l);break;case 24:rc(o,l,i,s,a),a&&2048&c&&ec(l.alternate,l);break;default:rc(o,l,i,s,a)}t=t.sibling}}function ac(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:ac(n,r),2048&a&&Zs(r.alternate,r);break;case 24:ac(n,r),2048&a&&ec(r.alternate,r);break;default:ac(n,r)}t=t.sibling}}var oc=8192;function lc(e,t,n){if(e.subtreeFlags&oc)for(e=e.child;null!==e;)ic(e,t,n),e=e.sibling}function ic(e,t,n){switch(e.tag){case 26:lc(e,t,n),e.flags&oc&&null!==e.memoizedState&&function(e,t,n,r){if(!("stylesheet"!==n.type||"string"==typeof r.media&&!1===matchMedia(r.media).matches||4&n.state.loading)){if(null===n.instance){var a=Yd(r.href),o=t.querySelector(Gd(a));if(o)return null!==(t=o._p)&&"object"==typeof t&&"function"==typeof t.then&&(e.count++,e=cf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=o,void nt(o);o=t.ownerDocument||t,r=Kd(r),(a=Bd.get(a))&&tf(r,a),nt(o=o.createElement("link"));var l=o;l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),pd(o,"link",r),n.instance=o}null===e.stylesheets&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(3&n.state.loading)&&(e.count++,n=cf.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}(n,Qs,e.memoizedState,e.memoizedProps);break;case 5:default:lc(e,t,n);break;case 3:case 4:var r=Qs;Qs=Ud(e.stateNode.containerInfo),lc(e,t,n),Qs=r;break;case 22:null===e.memoizedState&&(null!==(r=e.alternate)&&null!==r.memoizedState?(r=oc,oc=16777216,lc(e,t,n),oc=r):lc(e,t,n))}}function sc(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function cc(e){var t=e.deletions;if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ns=r,fc(r,e)}sc(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)uc(e),e=e.sibling}function uc(e){switch(e.tag){case 0:case 11:case 15:cc(e),2048&e.flags&&vs(9,e,e.return);break;case 3:case 12:default:cc(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,dc(e)):cc(e)}}function dc(e){var t=e.deletions;if(16&e.flags){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];Ns=r,fc(r,e)}sc(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:vs(8,t,t.return),dc(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,dc(t));break;default:dc(t)}e=e.sibling}}function fc(e,t){for(;null!==Ns;){var n=Ns;switch(n.tag){case 0:case 11:case 15:vs(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Wa(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,Ns=r;else e:for(n=e;null!==Ns;){var a=(r=Ns).sibling,o=r.return;if(Ms(r),r===n){Ns=null;break e}if(null!==a){a.return=o,Ns=a;break e}Ns=o}}}var mc={getCacheForType:function(e){var t=Ta(Ra),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ta(Ra).controller.signal}},pc="function"==typeof WeakMap?WeakMap:Map,hc=0,gc=null,bc=null,yc=0,vc=0,xc=null,kc=!1,Sc=!1,wc=!1,$c=0,zc=0,Cc=0,Ec=0,Pc=0,Fc=0,jc=0,Lc=null,_c=null,Ac=!1,Tc=0,Nc=0,Dc=1/0,Mc=null,Oc=null,Ic=0,Rc=null,Bc=null,Wc=0,Uc=0,Vc=null,Hc=null,Qc=0,qc=null;function Yc(){return 2&hc&&0!==yc?yc&-yc:null!==D.T?Vu():Re()}function Gc(){if(0===Fc)if(536870912&yc&&!ma)Fc=536870912;else{var e=Ce;!(3932160&(Ce<<=1))&&(Ce=262144),Fc=e}return null!==(e=No.current)&&(e.flags|=32),Fc}function Kc(e,t,n){(e!==gc||2!==vc&&9!==vc)&&null===e.cancelPendingCommit||(ru(e,0),eu(e,yc,Fc,!1)),Te(e,n),2&hc&&e===gc||(e===gc&&(!(2&hc)&&(Ec|=n),4===zc&&eu(e,yc,Fc,!1)),Mu(e))}function Xc(e,t,n){if(6&hc)throw Error(r(327));for(var a=!n&&!(127&t)&&0===(t&e.expiredLanes)||je(e,t),o=a?function(e,t){var n=hc;hc|=2;var a=lu(),o=iu();gc!==e||yc!==t?(Mc=null,Dc=ue()+500,ru(e,t)):Sc=je(e,t);e:for(;;)try{if(0!==vc&&null!==bc){t=bc;var l=xc;t:switch(vc){case 1:vc=0,xc=null,pu(e,t,l,1);break;case 2:case 9:if(ro(l)){vc=0,xc=null,mu(t);break}t=function(){2!==vc&&9!==vc||gc!==e||(vc=7),Mu(e)},l.then(t,t);break e;case 3:vc=7;break e;case 4:vc=5;break e;case 7:ro(l)?(vc=0,xc=null,mu(t)):(vc=0,xc=null,pu(e,t,l,7));break;case 5:var i=null;switch(bc.tag){case 26:i=bc.memoizedState;case 5:case 27:var s=bc;if(i?lf(i):s.stateNode.complete){vc=0,xc=null;var c=s.sibling;if(null!==c)bc=c;else{var u=s.return;null!==u?(bc=u,hu(u)):bc=null}break t}}vc=0,xc=null,pu(e,t,l,5);break;case 6:vc=0,xc=null,pu(e,t,l,6);break;case 8:nu(),zc=6;break e;default:throw Error(r(462))}}du();break}catch(d){au(e,d)}return Ca=za=null,D.H=a,D.A=o,hc=n,null!==bc?0:(gc=null,yc=0,_r(),zc)}(e,t):cu(e,t,!0),l=a;;){if(0===o){Sc&&!a&&eu(e,t,0,!1);break}if(n=e.current.alternate,!l||Zc(n)){if(2===o){if(l=t,e.errorRecoveryDisabledLanes&l)var i=0;else i=0!==(i=-536870913&e.pendingLanes)?i:536870912&i?536870912:0;if(0!==i){t=i;e:{var s=e;o=Lc;var c=s.current.memoizedState.isDehydrated;if(c&&(ru(s,i).flags|=256),2!==(i=cu(s,i,!1))){if(wc&&!c){s.errorRecoveryDisabledLanes|=l,Ec|=l,o=4;break e}l=_c,_c=o,null!==l&&(null===_c?_c=l:_c.push.apply(_c,l))}o=i}if(l=!1,2!==o)continue}}if(1===o){ru(e,0),eu(e,t,0,!0);break}e:{switch(a=e,l=o){case 0:case 1:throw Error(r(345));case 4:if((4194048&t)!==t)break;case 6:eu(a,t,Fc,!kc);break e;case 2:_c=null;break;case 3:case 5:break;default:throw Error(r(329))}if((62914560&t)===t&&10<(o=Tc+300-ue())){if(eu(a,t,Fc,!kc),0!==Fe(a,0,!0))break e;Wc=t,a.timeoutHandle=wd(Jc.bind(null,a,n,_c,Mc,Ac,t,Fc,Ec,jc,kc,l,"Throttled",-0,0),o)}else Jc(a,n,_c,Mc,Ac,t,Fc,Ec,jc,kc,l,null,-0,0)}break}o=cu(e,t,!1),l=!1}Mu(e)}function Jc(e,t,n,r,a,o,l,i,s,c,u,d,f,m){if(e.timeoutHandle=-1,8192&(d=t.subtreeFlags)||!(16785408&~d)){ic(t,o,d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Tt});var p=(62914560&o)===o?Tc-ue():(4194048&o)===o?Nc-ue():0;if(null!==(p=function(e,t){return e.stylesheets&&0===e.count&&df(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&df(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&0===sf&&(sf=62500*function(){if("function"==typeof performance.getEntriesByType){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var a=n[r],o=a.transferSize,l=a.initiatorType,i=a.duration;if(o&&i&&hd(l)){for(l=0,i=a.responseEnd,r+=1;r<n.length;r++){var s=n[r],c=s.startTime;if(c>i)break;var u=s.transferSize,d=s.initiatorType;u&&hd(d)&&(l+=u*((s=s.responseEnd)<i?1:(i-c)/(s-c)))}if(--r,t+=8*(o+l)/(a.duration/1e3),10<++e)break}}if(0<e)return t/e/1e6}return navigator.connection&&"number"==typeof(e=navigator.connection.downlink)?e:5}());var a=setTimeout(function(){if(e.waitingForImages=!1,0===e.count&&(e.stylesheets&&df(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>sf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(a)}}:null}(d,p)))return Wc=o,e.cancelPendingCommit=p(bu.bind(null,e,t,o,n,r,a,l,i,s,u,d,null,f,m)),void eu(e,o,l,!c)}bu(e,t,o,n,r,a,l,i,s)}function Zc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!er(o(),a))return!1}catch(l){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function eu(e,t,n,r){t&=~Pc,t&=~Ec,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var o=31-Se(a),l=1<<o;r[o]=-1,a&=~l}0!==n&&Ne(e,n,t)}function tu(){return!!(6&hc)||(Ou(0),!1)}function nu(){if(null!==bc){if(0===vc)var e=bc.return;else Ca=za=null,cl(e=bc),co=null,uo=0,e=bc;for(;null!==e;)bs(e.alternate,e),e=e.return;bc=null}}function ru(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,$d(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Wc=0,nu(),gc=e,bc=n=Wr(e.current,null),yc=t,vc=0,xc=null,kc=!1,Sc=je(e,t),wc=!1,jc=Fc=Pc=Ec=Cc=zc=0,_c=Lc=null,Ac=!1,8&t&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-Se(r),o=1<<a;t|=e[a],r&=~o}return $c=t,_r(),n}function au(e,t){Ho=null,D.H=bi,t===Za||t===to?(t=io(),vc=3):t===eo?(t=io(),vc=4):vc=t===Ti?8:null!==t&&"object"==typeof t&&"function"==typeof t.then?6:1,xc=t,null===bc&&(zc=1,Fi(e,Kr(t,e.current)))}function ou(){var e=No.current;return null===e||((4194048&yc)===yc?null===Do:!!((62914560&yc)===yc||536870912&yc)&&e===Do)}function lu(){var e=D.H;return D.H=bi,null===e?bi:e}function iu(){var e=D.A;return D.A=mc,e}function su(){zc=4,kc||(4194048&yc)!==yc&&null!==No.current||(Sc=!0),!(134217727&Cc)&&!(134217727&Ec)||null===gc||eu(gc,yc,Fc,!1)}function cu(e,t,n){var r=hc;hc|=2;var a=lu(),o=iu();gc===e&&yc===t||(Mc=null,ru(e,t)),t=!1;var l=zc;e:for(;;)try{if(0!==vc&&null!==bc){var i=bc,s=xc;switch(vc){case 8:nu(),l=6;break e;case 3:case 2:case 9:case 6:null===No.current&&(t=!0);var c=vc;if(vc=0,xc=null,pu(e,i,s,c),n&&Sc){l=0;break e}break;default:c=vc,vc=0,xc=null,pu(e,i,s,c)}}uu(),l=zc;break}catch(u){au(e,u)}return t&&e.shellSuspendCounter++,Ca=za=null,hc=r,D.H=a,D.A=o,null===bc&&(gc=null,yc=0,_r()),l}function uu(){for(;null!==bc;)fu(bc)}function du(){for(;null!==bc&&!se();)fu(bc)}function fu(e){var t=ss(e.alternate,e,$c);e.memoizedProps=e.pendingProps,null===t?hu(e):bc=t}function mu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=qi(n,t,t.pendingProps,t.type,void 0,yc);break;case 11:t=qi(n,t,t.pendingProps,t.type.render,t.ref,yc);break;case 5:cl(t);default:bs(n,t),t=ss(n,t=bc=Ur(t,$c),$c)}e.memoizedProps=e.pendingProps,null===t?hu(e):bc=t}function pu(e,t,n,a){Ca=za=null,cl(t),co=null,uo=0;var o=t.return;try{if(function(e,t,n,a,o){if(n.flags|=32768,null!==a&&"object"==typeof a&&"function"==typeof a.then){if(null!==(t=n.alternate)&&La(t,n,o,!0),null!==(n=No.current)){switch(n.tag){case 31:case 13:return null===Do?su():null===n.alternate&&0===zc&&(zc=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===no?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([a]):t.add(a),Cu(e,a,o)),!1;case 22:return n.flags|=65536,a===no?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([a]):n.add(a),Cu(e,a,o)),!1}throw Error(r(435,n.tag))}return Cu(e,a,o),su(),!1}if(ma)return null!==(t=No.current)?(!(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==ga&&wa(Kr(e=Error(r(422),{cause:a}),n))):(a!==ga&&wa(Kr(t=Error(r(423),{cause:a}),n)),(e=e.current.alternate).flags|=65536,o&=-o,e.lanes|=o,a=Kr(a,n),$o(e,o=Li(e.stateNode,a,o)),4!==zc&&(zc=2)),!1;var l=Error(r(520),{cause:a});if(l=Kr(l,n),null===Lc?Lc=[l]:Lc.push(l),4!==zc&&(zc=2),null===t)return!0;a=Kr(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,$o(n,e=Li(n.stateNode,a,e)),!1;case 1:if(t=n.type,l=n.stateNode,!(128&n.flags||"function"!=typeof t.getDerivedStateFromError&&(null===l||"function"!=typeof l.componentDidCatch||null!==Oc&&Oc.has(l))))return n.flags|=65536,o&=-o,n.lanes|=o,Ai(o=_i(o),e,n,a),$o(n,o),!1}n=n.return}while(null!==n);return!1}(e,o,t,n,yc))return zc=1,Fi(e,Kr(n,e.current)),void(bc=null)}catch(l){if(null!==o)throw bc=o,l;return zc=1,Fi(e,Kr(n,e.current)),void(bc=null)}32768&t.flags?(ma||1===a?e=!0:Sc||536870912&yc?e=!1:(kc=e=!0,(2===a||9===a||3===a||6===a)&&(null!==(a=No.current)&&13===a.tag&&(a.flags|=16384))),gu(t,e)):hu(t)}function hu(e){var t=e;do{if(32768&t.flags)return void gu(t,kc);e=t.return;var n=hs(t.alternate,t,$c);if(null!==n)return void(bc=n);if(null!==(t=t.sibling))return void(bc=t);bc=t=e}while(null!==t);0===zc&&(zc=5)}function gu(e,t){do{var n=gs(e.alternate,e);if(null!==n)return n.flags&=32767,void(bc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(bc=e);bc=e=n}while(null!==e);zc=6,bc=null}function bu(e,t,n,a,o,l,i,s,c){e.cancelPendingCommit=null;do{Su()}while(0!==Ic);if(6&hc)throw Error(r(327));if(null!==t){if(t===e.current)throw Error(r(177));if(l=t.lanes|t.childLanes,function(e,t,n,r,a,o){var l=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var i=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=l&~n;0<n;){var u=31-Se(n),d=1<<u;i[u]=0,s[u]=-1;var f=c[u];if(null!==f)for(c[u]=null,u=0;u<f.length;u++){var m=f[u];null!==m&&(m.lane&=-536870913)}n&=~d}0!==r&&Ne(e,r,0),0!==o&&0===a&&0!==e.tag&&(e.suspendedLanes|=o&~(l&~t))}(e,n,l|=Lr,i,s,c),e===gc&&(bc=gc=null,yc=0),Bc=t,Rc=e,Wc=n,Uc=l,Vc=o,Hc=a,10256&t.subtreeFlags||10256&t.flags?(e.callbackNode=null,e.callbackPriority=0,le(pe,function(){return wu(),null})):(e.callbackNode=null,e.callbackPriority=0),a=!!(13878&t.flags),13878&t.subtreeFlags||a){a=D.T,D.T=null,o=M.p,M.p=2,i=hc,hc|=4;try{!function(e,t){if(e=e.containerInfo,gd=Sf,lr(e=or(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var a=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(a&&0!==a.rangeCount){n=a.anchorNode;var o=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch(g){n=null;break e}var i=0,s=-1,c=-1,u=0,d=0,f=e,m=null;t:for(;;){for(var p;f!==n||0!==o&&3!==f.nodeType||(s=i+o),f!==l||0!==a&&3!==f.nodeType||(c=i+a),3===f.nodeType&&(i+=f.nodeValue.length),null!==(p=f.firstChild);)m=f,f=p;for(;;){if(f===e)break t;if(m===n&&++u===o&&(s=i),m===l&&++d===a&&(c=i),null!==(p=f.nextSibling))break;m=(f=m).parentNode}f=p}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(bd={focusedElem:e,selectionRange:n},Sf=!1,Ns=t;null!==Ns;)if(e=(t=Ns).child,1028&t.subtreeFlags&&null!==e)e.return=t,Ns=e;else for(;null!==Ns;){switch(l=(t=Ns).alternate,e=t.flags,t.tag){case 0:if(4&e&&null!==(e=null!==(e=t.updateQueue)?e.events:null))for(n=0;n<e.length;n++)(o=e[n]).ref.impl=o.nextImpl;break;case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(1024&e&&null!==l){e=void 0,n=t,o=l.memoizedProps,l=l.memoizedState,a=n.stateNode;try{var h=zi(n.type,o);e=a.getSnapshotBeforeUpdate(h,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(b){zu(n,n.return,b)}}break;case 3:if(1024&e)if(9===(n=(e=t.stateNode.containerInfo).nodeType))Ld(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ld(e);break;default:e.textContent=""}break;default:if(1024&e)throw Error(r(163))}if(null!==(e=t.sibling)){e.return=t.return,Ns=e;break}Ns=t.return}}(e,t)}finally{hc=i,M.p=o,D.T=a}}Ic=1,yu(),vu(),xu()}}function yu(){if(1===Ic){Ic=0;var e=Rc,t=Bc,n=!!(13878&t.flags);if(13878&t.subtreeFlags||n){n=D.T,D.T=null;var r=M.p;M.p=2;var a=hc;hc|=4;try{qs(t,e);var o=bd,l=or(e.containerInfo),i=o.focusedElem,s=o.selectionRange;if(l!==i&&i&&i.ownerDocument&&ar(i.ownerDocument.documentElement,i)){if(null!==s&&lr(i)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in i)i.selectionStart=c,i.selectionEnd=Math.min(u,i.value.length);else{var d=i.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var m=f.getSelection(),p=i.textContent.length,h=Math.min(s.start,p),g=void 0===s.end?h:Math.min(s.end,p);!m.extend&&h>g&&(l=g,g=h,h=l);var b=rr(i,h),y=rr(i,g);if(b&&y&&(1!==m.rangeCount||m.anchorNode!==b.node||m.anchorOffset!==b.offset||m.focusNode!==y.node||m.focusOffset!==y.offset)){var v=d.createRange();v.setStart(b.node,b.offset),m.removeAllRanges(),h>g?(m.addRange(v),m.extend(y.node,y.offset)):(v.setEnd(y.node,y.offset),m.addRange(v))}}}}for(d=[],m=i;m=m.parentNode;)1===m.nodeType&&d.push({element:m,left:m.scrollLeft,top:m.scrollTop});for("function"==typeof i.focus&&i.focus(),i=0;i<d.length;i++){var x=d[i];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Sf=!!gd,bd=gd=null}finally{hc=a,M.p=r,D.T=n}}e.current=t,Ic=2}}function vu(){if(2===Ic){Ic=0;var e=Rc,t=Bc,n=!!(8772&t.flags);if(8772&t.subtreeFlags||n){n=D.T,D.T=null;var r=M.p;M.p=2;var a=hc;hc|=4;try{Ds(e,t.alternate,t)}finally{hc=a,M.p=r,D.T=n}}Ic=3}}function xu(){if(4===Ic||3===Ic){Ic=0,ce();var e=Rc,t=Bc,n=Wc,r=Hc;10256&t.subtreeFlags||10256&t.flags?Ic=5:(Ic=0,Bc=Rc=null,ku(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&(Oc=null),Ie(n),t=t.stateNode,xe&&"function"==typeof xe.onCommitFiberRoot)try{xe.onCommitFiberRoot(ve,t,void 0,!(128&~t.current.flags))}catch(s){}if(null!==r){t=D.T,a=M.p,M.p=2,D.T=null;try{for(var o=e.onRecoverableError,l=0;l<r.length;l++){var i=r[l];o(i.value,{componentStack:i.stack})}}finally{D.T=t,M.p=a}}3&Wc&&Su(),Mu(e),a=e.pendingLanes,261930&n&&42&a?e===qc?Qc++:(Qc=0,qc=e):Qc=0,Ou(0)}}function ku(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Wa(t)))}function Su(){return yu(),vu(),xu(),wu()}function wu(){if(5!==Ic)return!1;var e=Rc,t=Uc;Uc=0;var n=Ie(Wc),a=D.T,o=M.p;try{M.p=32>n?32:n,D.T=null,n=Vc,Vc=null;var l=Rc,i=Wc;if(Ic=0,Bc=Rc=null,Wc=0,6&hc)throw Error(r(331));var s=hc;if(hc|=4,uc(l.current),nc(l,l.current,i,n),hc=s,Ou(0,!1),xe&&"function"==typeof xe.onPostCommitFiberRoot)try{xe.onPostCommitFiberRoot(ve,l)}catch(c){}return!0}finally{M.p=o,D.T=a,ku(e,t)}}function $u(e,t,n){t=Kr(n,t),null!==(e=So(e,t=Li(e.stateNode,t,2),2))&&(Te(e,2),Mu(e))}function zu(e,t,n){if(3===e.tag)$u(e,e,n);else for(;null!==t;){if(3===t.tag){$u(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Oc||!Oc.has(r))){e=Kr(n,e),null!==(r=So(t,n=_i(2),2))&&(Ai(n,r,t,e),Te(r,2),Mu(r));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pc;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(wc=!0,a.add(n),e=Eu.bind(null,e,t,n),t.then(e,e))}function Eu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,gc===e&&(yc&n)===n&&(4===zc||3===zc&&(62914560&yc)===yc&&300>ue()-Tc?!(2&hc)&&ru(e,0):Pc|=n,jc===yc&&(jc=0)),Mu(e)}function Pu(e,t){0===t&&(t=_e()),null!==(e=Nr(e,t))&&(Te(e,t),Mu(e))}function Fu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Pu(e,n)}function ju(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(r(314))}null!==a&&a.delete(t),Pu(e,n)}var Lu=null,_u=null,Au=!1,Tu=!1,Nu=!1,Du=0;function Mu(e){e!==_u&&null===e.next&&(null===_u?Lu=_u=e:_u=_u.next=e),Tu=!0,Au||(Au=!0,Cd(function(){6&hc?le(fe,Iu):Ru()}))}function Ou(e,t){if(!Nu&&Tu){Nu=!0;do{for(var n=!1,r=Lu;null!==r;){if(0!==e){var a=r.pendingLanes;if(0===a)var o=0;else{var l=r.suspendedLanes,i=r.pingedLanes;o=(1<<31-Se(42|e)+1)-1,o=201326741&(o&=a&~(l&~i))?201326741&o|1:o?2|o:0}0!==o&&(n=!0,Uu(r,o))}else o=yc,!(3&(o=Fe(r,r===gc?o:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||je(r,o)||(n=!0,Uu(r,o));r=r.next}}while(n);Nu=!1}}function Iu(){Ru()}function Ru(){Tu=Au=!1;var e=0;0!==Du&&function(){var e=window.event;if(e&&"popstate"===e.type)return e!==Sd&&(Sd=e,!0);return Sd=null,!1}()&&(e=Du);for(var t=ue(),n=null,r=Lu;null!==r;){var a=r.next,o=Bu(r,t);0===o?(r.next=null,null===n?Lu=a:n.next=a,null===a&&(_u=n)):(n=r,(0!==e||3&o)&&(Tu=!0)),r=a}0!==Ic&&5!==Ic||Ou(e),0!==Du&&(Du=0)}function Bu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=-62914561&e.pendingLanes;0<o;){var l=31-Se(o),i=1<<l,s=a[l];-1===s?0!==(i&n)&&0===(i&r)||(a[l]=Le(i,t)):s<=t&&(e.expiredLanes|=i),o&=~i}if(n=yc,n=Fe(e,e===(t=gc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===vc||9===vc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ie(r),e.callbackNode=null,e.callbackPriority=0;if(!(3&n)||je(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ie(r),Ie(n)){case 2:case 8:n=me;break;case 32:default:n=pe;break;case 268435456:n=ge}return r=Wu.bind(null,e),n=le(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ie(r),e.callbackPriority=2,e.callbackNode=null,2}function Wu(e,t){if(0!==Ic&&5!==Ic)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=yc;return 0===(r=Fe(e,e===gc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Xc(e,r,t),Bu(e,ue()),null!=e.callbackNode&&e.callbackNode===n?Wu.bind(null,e):null)}function Uu(e,t){if(Su())return null;Xc(e,t,!0)}function Vu(){if(0===Du){var e=Ha;0===e&&(e=ze,!(261888&(ze<<=1))&&(ze=256)),Du=e}return Du}function Hu(e){return null==e||"symbol"==typeof e||"boolean"==typeof e?null:"function"==typeof e?e:At(""+e)}function Qu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var qu=0;qu<Cr.length;qu++){var Yu=Cr[qu];Er(Yu.toLowerCase(),"on"+(Yu[0].toUpperCase()+Yu.slice(1)))}Er(yr,"onAnimationEnd"),Er(vr,"onAnimationIteration"),Er(xr,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(kr,"onTransitionRun"),Er(Sr,"onTransitionStart"),Er(wr,"onTransitionCancel"),Er($r,"onTransitionEnd"),lt("onMouseEnter",["mouseout","mouseover"]),lt("onMouseLeave",["mouseout","mouseover"]),lt("onPointerEnter",["pointerout","pointerover"]),lt("onPointerLeave",["pointerout","pointerover"]),ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ku=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gu));function Xu(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var i=r[l],s=i.instance,c=i.currentTarget;if(i=i.listener,s!==o&&a.isPropagationStopped())break e;o=i,a.currentTarget=c;try{o(a)}catch(u){Pr(u)}a.currentTarget=null,o=s}else for(l=0;l<r.length;l++){if(s=(i=r[l]).instance,c=i.currentTarget,i=i.listener,s!==o&&a.isPropagationStopped())break e;o=i,a.currentTarget=c;try{o(a)}catch(u){Pr(u)}a.currentTarget=null,o=s}}}}function Ju(e,t){var n=t[Qe];void 0===n&&(n=t[Qe]=new Set);var r=e+"__bubble";n.has(r)||(nd(t,e,2,!1),n.add(r))}function Zu(e,t,n){var r=0;t&&(r|=4),nd(n,e,r,t)}var ed="_reactListening"+Math.random().toString(36).slice(2);function td(e){if(!e[ed]){e[ed]=!0,rt.forEach(function(t){"selectionchange"!==t&&(Ku.has(t)||Zu(t,!1,e),Zu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ed]||(t[ed]=!0,Zu("selectionchange",!1,t))}}function nd(e,t,n,r){switch(Ff(t)){case 2:var a=wf;break;case 8:a=$f;break;default:a=zf}n=a.bind(null,t,n,e),a=void 0,!Vt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function rd(e,t,n,r,a){var l=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var s=r.stateNode.containerInfo;if(s===a)break;if(4===i)for(i=r.return;null!==i;){var c=i.tag;if((3===c||4===c)&&i.stateNode.containerInfo===a)return;i=i.return}for(;null!==s;){if(null===(i=Je(s)))return;if(5===(c=i.tag)||6===c||26===c||27===c){r=l=i;continue e}s=s.parentNode}}r=r.return}Bt(function(){var r=l,a=Dt(n),i=[];e:{var s=zr.get(e);if(void 0!==s){var c=an,u=e;switch(e){case"keypress":if(0===Kt(n))break e;case"keydown":case"keyup":c=xn;break;case"focusin":u="focus",c=dn;break;case"focusout":u="blur",c=dn;break;case"beforeblur":case"afterblur":c=dn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=cn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=un;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Sn;break;case yr:case vr:case xr:c=fn;break;case $r:c=wn;break;case"scroll":case"scrollend":c=ln;break;case"wheel":c=$n;break;case"copy":case"cut":case"paste":c=mn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=kn;break;case"toggle":case"beforetoggle":c=zn}var d=!!(4&t),f=!d&&("scroll"===e||"scrollend"===e),m=d?null!==s?s+"Capture":null:s;d=[];for(var p,h=r;null!==h;){var g=h;if(p=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===p||null===m||null!=(g=Wt(h,m))&&d.push(ad(h,g,p)),f)break;h=h.return}0<d.length&&(s=new c(s,u,null,n,a),i.push({event:s,listeners:d}))}}if(!(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===Nt||!(u=n.relatedTarget||n.fromElement)||!Je(u)&&!u[He])&&(c||s)&&(s=a.window===a?a:(s=a.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Je(u):null)&&(f=o(u),d=u.tag,u!==f||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=cn,g="onMouseLeave",m="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(d=kn,g="onPointerLeave",m="onPointerEnter",h="pointer"),f=null==c?s:et(c),p=null==u?s:et(u),(s=new d(g,h+"leave",c,n,a)).target=f,s.relatedTarget=p,g=null,Je(a)===r&&((d=new d(m,h+"enter",u,n,a)).target=p,d.relatedTarget=f,g=d),f=g,c&&u)e:{for(d=ld,h=u,p=0,g=m=c;g;g=d(g))p++;g=0;for(var b=h;b;b=d(b))g++;for(;0<p-g;)m=d(m),p--;for(;0<g-p;)h=d(h),g--;for(;p--;){if(m===h||null!==h&&m===h.alternate){d=m;break e}m=d(m),h=d(h)}d=null}else d=null;null!==c&&id(i,s,c,d,!1),null!==u&&null!==f&&id(i,f,u,d,!0)}if("select"===(c=(s=r?et(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var y=Un;else if(Mn(s))if(Vn)y=Zn;else{y=Xn;var v=Kn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&jt(r.elementType)&&(y=Un):y=Jn;switch(y&&(y=y(e,r))?On(i,y,n,a):(v&&v(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&St(s,"number",s.value)),v=r?et(r):window,e){case"focusin":(Mn(v)||"true"===v.contentEditable)&&(sr=v,cr=r,ur=null);break;case"focusout":ur=cr=sr=null;break;case"mousedown":dr=!0;break;case"contextmenu":case"mouseup":case"dragend":dr=!1,fr(i,n,a);break;case"selectionchange":if(ir)break;case"keydown":case"keyup":fr(i,n,a)}var x;if(En)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Nn?An(e,n)&&(k="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(k="onCompositionStart");k&&(jn&&"ko"!==n.locale&&(Nn||"onCompositionStart"!==k?"onCompositionEnd"===k&&Nn&&(x=Gt()):(qt="value"in(Qt=a)?Qt.value:Qt.textContent,Nn=!0)),0<(v=od(r,k)).length&&(k=new pn(k,e,null,n,a),i.push({event:k,listeners:v}),x?k.data=x:null!==(x=Tn(n))&&(k.data=x))),(x=Fn?function(e,t){switch(e){case"compositionend":return Tn(t);case"keypress":return 32!==t.which?null:(_n=!0,Ln);case"textInput":return(e=t.data)===Ln&&_n?null:e;default:return null}}(e,n):function(e,t){if(Nn)return"compositionend"===e||!En&&An(e,t)?(e=Gt(),Yt=qt=Qt=null,Nn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(k=od(r,"onBeforeInput")).length&&(v=new pn("onBeforeInput","beforeinput",null,n,a),i.push({event:v,listeners:k}),v.data=x)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var o=Hu((a[Ve]||null).action),l=r.submitter;l&&null!==(t=(t=l[Ve]||null)?Hu(t.formAction):l.getAttribute("formAction"))&&(o=t,l=null);var i=new an("action","action",null,r,a);e.push({event:i,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==Du){var e=l?Qu(a,l):new FormData(a);ri(n,{pending:!0,data:e,method:a.method,action:o},null,e)}}else"function"==typeof o&&(i.preventDefault(),e=l?Qu(a,l):new FormData(a),ri(n,{pending:!0,data:e,method:a.method,action:o},o,e))},currentTarget:a}]})}}(i,e,r,n,a)}Xu(i,t)})}function ad(e,t,n){return{instance:e,listener:t,currentTarget:n}}function od(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===o||(null!=(a=Wt(e,n))&&r.unshift(ad(e,a,o)),null!=(a=Wt(e,t))&&r.push(ad(e,a,o))),3===e.tag)return r;e=e.return}return[]}function ld(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function id(e,t,n,r,a){for(var o=t._reactName,l=[];null!==n&&n!==r;){var i=n,s=i.alternate,c=i.stateNode;if(i=i.tag,null!==s&&s===r)break;5!==i&&26!==i&&27!==i||null===c||(s=c,a?null!=(c=Wt(n,o))&&l.unshift(ad(n,c,s)):a||null!=(c=Wt(n,o))&&l.push(ad(n,c,s))),n=n.return}0!==l.length&&e.push({event:t,listeners:l})}var sd=/\r\n?/g,cd=/\u0000|\uFFFD/g;function ud(e){return("string"==typeof e?e:""+e).replace(sd,"\n").replace(cd,"")}function dd(e,t){return t=ud(t),ud(e)===t}function fd(e,t,n,a,o,l){switch(n){case"children":"string"==typeof a?"body"===t||"textarea"===t&&""===a||Ct(e,a):("number"==typeof a||"bigint"==typeof a)&&"body"!==t&&Ct(e,""+a);break;case"className":dt(e,"class",a);break;case"tabIndex":dt(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":dt(e,n,a);break;case"style":Ft(e,a,l);break;case"data":if("object"!==t){dt(e,"data",a);break}case"src":case"href":if(""===a&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==a||"function"==typeof a||"symbol"==typeof a||"boolean"==typeof a){e.removeAttribute(n);break}a=At(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if("function"==typeof a){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"==typeof l&&("formAction"===n?("input"!==t&&fd(e,t,"name",o.name,o,null),fd(e,t,"formEncType",o.formEncType,o,null),fd(e,t,"formMethod",o.formMethod,o,null),fd(e,t,"formTarget",o.formTarget,o,null)):(fd(e,t,"encType",o.encType,o,null),fd(e,t,"method",o.method,o,null),fd(e,t,"target",o.target,o,null))),null==a||"symbol"==typeof a||"boolean"==typeof a){e.removeAttribute(n);break}a=At(""+a),e.setAttribute(n,a);break;case"onClick":null!=a&&(e.onclick=Tt);break;case"onScroll":null!=a&&Ju("scroll",e);break;case"onScrollEnd":null!=a&&Ju("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=a){if("object"!=typeof a||!("__html"in a))throw Error(r(61));if(null!=(n=a.__html)){if(null!=o.children)throw Error(r(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&"function"!=typeof a&&"symbol"!=typeof a;break;case"muted":e.muted=a&&"function"!=typeof a&&"symbol"!=typeof a;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==a||"function"==typeof a||"boolean"==typeof a||"symbol"==typeof a){e.removeAttribute("xlink:href");break}n=At(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=a&&"function"!=typeof a&&"symbol"!=typeof a?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&"function"!=typeof a&&"symbol"!=typeof a?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===a?e.setAttribute(n,""):!1!==a&&null!=a&&"function"!=typeof a&&"symbol"!=typeof a?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=a&&"function"!=typeof a&&"symbol"!=typeof a&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":null==a||"function"==typeof a||"symbol"==typeof a||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Ju("beforetoggle",e),Ju("toggle",e),ut(e,"popover",a);break;case"xlinkActuate":ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ft(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ft(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ft(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ft(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ut(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&ut(e,n=Lt.get(n)||n,a)}}function md(e,t,n,a,o,l){switch(n){case"style":Ft(e,a,l);break;case"dangerouslySetInnerHTML":if(null!=a){if("object"!=typeof a||!("__html"in a))throw Error(r(61));if(null!=(n=a.__html)){if(null!=o.children)throw Error(r(60));e.innerHTML=n}}break;case"children":"string"==typeof a?Ct(e,a):("number"==typeof a||"bigint"==typeof a)&&Ct(e,""+a);break;case"onScroll":null!=a&&Ju("scroll",e);break;case"onScrollEnd":null!=a&&Ju("scrollend",e);break;case"onClick":null!=a&&(e.onclick=Tt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:at.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),"function"==typeof(l=null!=(l=e[Ve]||null)?l[n]:null)&&e.removeEventListener(t,l,o),"function"!=typeof a)?n in e?e[n]=a:!0===a?e.setAttribute(n,""):ut(e,n,a):("function"!=typeof l&&null!==l&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o)))}}function pd(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ju("error",e),Ju("load",e);var a,o=!1,l=!1;for(a in n)if(n.hasOwnProperty(a)){var i=n[a];if(null!=i)switch(a){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:fd(e,t,a,i,n,null)}}return l&&fd(e,t,"srcSet",n.srcSet,n,null),void(o&&fd(e,t,"src",n.src,n,null));case"input":Ju("invalid",e);var s=a=i=l=null,c=null,u=null;for(o in n)if(n.hasOwnProperty(o)){var d=n[o];if(null!=d)switch(o){case"name":l=d;break;case"type":i=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":a=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(r(137,t));break;default:fd(e,t,o,d,n,null)}}return void kt(e,a,s,c,u,i,l,!1);case"select":for(l in Ju("invalid",e),o=i=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":i=s;break;case"multiple":o=s;default:fd(e,t,l,s,n,null)}return t=a,n=i,e.multiple=!!o,void(null!=t?wt(e,!!o,t,!1):null!=n&&wt(e,!!o,n,!0));case"textarea":for(i in Ju("invalid",e),a=l=o=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":o=s;break;case"defaultValue":l=s;break;case"children":a=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(r(91));break;default:fd(e,t,i,s,n,null)}return void zt(e,o,l,a);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(o=n[c]))if("selected"===c)e.selected=o&&"function"!=typeof o&&"symbol"!=typeof o;else fd(e,t,c,o,n,null);return;case"dialog":Ju("beforetoggle",e),Ju("toggle",e),Ju("cancel",e),Ju("close",e);break;case"iframe":case"object":Ju("load",e);break;case"video":case"audio":for(o=0;o<Gu.length;o++)Ju(Gu[o],e);break;case"image":Ju("error",e),Ju("load",e);break;case"details":Ju("toggle",e);break;case"embed":case"source":case"link":Ju("error",e),Ju("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(o=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:fd(e,t,u,o,n,null)}return;default:if(jt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(o=n[d])&&md(e,t,d,o,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(o=n[s])&&fd(e,t,s,o,n,null))}function hd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}var gd=null,bd=null;function yd(e){return 9===e.nodeType?e:e.ownerDocument}function vd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xd(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function kd(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"bigint"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Sd=null;var wd="function"==typeof setTimeout?setTimeout:void 0,$d="function"==typeof clearTimeout?clearTimeout:void 0,zd="function"==typeof Promise?Promise:void 0,Cd="function"==typeof queueMicrotask?queueMicrotask:void 0!==zd?function(e){return zd.resolve(null).then(e).catch(Ed)}:wd;function Ed(e){setTimeout(function(){throw e})}function Pd(e){return"head"===e}function Fd(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)||"/&"===n){if(0===r)return e.removeChild(a),void qf(t);r--}else if("$"===n||"$?"===n||"$~"===n||"$!"===n||"&"===n)r++;else if("html"===n)Rd(e.ownerDocument.documentElement);else if("head"===n){Rd(n=e.ownerDocument.head);for(var o=n.firstChild;o;){var l=o.nextSibling,i=o.nodeName;o[Ke]||"SCRIPT"===i||"STYLE"===i||"LINK"===i&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=l}}else"body"===n&&Rd(e.ownerDocument.body);n=a}while(n);qf(t)}function jd(e,t){var n=e;e=0;do{var r=n.nextSibling;if(1===n.nodeType?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",""===n.getAttribute("style")&&n.removeAttribute("style")):3===n.nodeType&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&8===r.nodeType)if("/$"===(n=r.data)){if(0===e)break;e--}else"$"!==n&&"$?"!==n&&"$~"!==n&&"$!"!==n||e++;n=r}while(n)}function Ld(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ld(n),Xe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function _d(e,t){for(;8!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!t)return null;if(null===(e=Nd(e.nextSibling)))return null}return e}function Ad(e){return"$?"===e.data||"$~"===e.data}function Td(e){return"$!"===e.data||"$?"===e.data&&"loading"!==e.ownerDocument.readyState}function Nd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"$~"===t||"&"===t||"F!"===t||"F"===t)break;if("/$"===t||"/&"===t)return null}}return e}var Dd=null;function Md(e){e=e.nextSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n||"/&"===n){if(0===t)return Nd(e.nextSibling);t--}else"$"!==n&&"$!"!==n&&"$?"!==n&&"$~"!==n&&"&"!==n||t++}e=e.nextSibling}return null}function Od(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n||"$~"===n||"&"===n){if(0===t)return e;t--}else"/$"!==n&&"/&"!==n||t++}e=e.previousSibling}return null}function Id(e,t,n){switch(t=yd(n),e){case"html":if(!(e=t.documentElement))throw Error(r(452));return e;case"head":if(!(e=t.head))throw Error(r(453));return e;case"body":if(!(e=t.body))throw Error(r(454));return e;default:throw Error(r(451))}}function Rd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Xe(e)}var Bd=new Map,Wd=new Set;function Ud(e){return"function"==typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Vd=M.d;M.d={f:function(){var e=Vd.f(),t=tu();return e||t},r:function(e){var t=Ze(e);null!==t&&5===t.tag&&"form"===t.type?oi(t):Vd.r(e)},D:function(e){Vd.D(e),Qd("dns-prefetch",e,null)},C:function(e,t){Vd.C(e,t),Qd("preconnect",e,t)},L:function(e,t,n){Vd.L(e,t,n);var r=Hd;if(r&&e&&t){var a='link[rel="preload"][as="'+vt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+vt(n.imageSrcSet)+'"]',"string"==typeof n.imageSizes&&(a+='[imagesizes="'+vt(n.imageSizes)+'"]')):a+='[href="'+vt(e)+'"]';var o=a;switch(t){case"style":o=Yd(e);break;case"script":o=Xd(e)}Bd.has(o)||(e=f({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Bd.set(o,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(Gd(o))||"script"===t&&r.querySelector(Jd(o))||(pd(t=r.createElement("link"),"link",e),nt(t),r.head.appendChild(t)))}},m:function(e,t){Vd.m(e,t);var n=Hd;if(n&&e){var r=t&&"string"==typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+vt(r)+'"][href="'+vt(e)+'"]',o=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Xd(e)}if(!Bd.has(o)&&(e=f({rel:"modulepreload",href:e},t),Bd.set(o,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Jd(o)))return}pd(r=n.createElement("link"),"link",e),nt(r),n.head.appendChild(r)}}},X:function(e,t){Vd.X(e,t);var n=Hd;if(n&&e){var r=tt(n).hoistableScripts,a=Xd(e),o=r.get(a);o||((o=n.querySelector(Jd(a)))||(e=f({src:e,async:!0},t),(t=Bd.get(a))&&nf(e,t),nt(o=n.createElement("script")),pd(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}},S:function(e,t,n){Vd.S(e,t,n);var r=Hd;if(r&&e){var a=tt(r).hoistableStyles,o=Yd(e);t=t||"default";var l=a.get(o);if(!l){var i={loading:0,preload:null};if(l=r.querySelector(Gd(o)))i.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Bd.get(o))&&tf(e,n);var s=l=r.createElement("link");nt(s),pd(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){i.loading|=1}),s.addEventListener("error",function(){i.loading|=2}),i.loading|=4,ef(l,t,r)}l={type:"stylesheet",instance:l,count:1,state:i},a.set(o,l)}}},M:function(e,t){Vd.M(e,t);var n=Hd;if(n&&e){var r=tt(n).hoistableScripts,a=Xd(e),o=r.get(a);o||((o=n.querySelector(Jd(a)))||(e=f({src:e,async:!0,type:"module"},t),(t=Bd.get(a))&&nf(e,t),nt(o=n.createElement("script")),pd(o,"link",e),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},r.set(a,o))}}};var Hd="undefined"==typeof document?null:document;function Qd(e,t,n){var r=Hd;if(r&&"string"==typeof t&&t){var a=vt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"==typeof n&&(a+='[crossorigin="'+n+'"]'),Wd.has(a)||(Wd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(pd(t=r.createElement("link"),"link",e),nt(t),r.head.appendChild(t)))}}function qd(e,t,n,a){var o,l,i,s,c=(c=Y.current)?Ud(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return"string"==typeof n.precedence&&"string"==typeof n.href?(t=Yd(n.href),(a=(n=tt(c).hoistableStyles).get(t))||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"==typeof n.href&&"string"==typeof n.precedence){e=Yd(n.href);var u=tt(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Gd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Bd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Bd.set(e,n),u||(o=c,l=e,i=n,s=d.state,o.querySelector('link[rel="preload"][as="style"]['+l+"]")?s.loading=1:(l=o.createElement("link"),s.preload=l,l.addEventListener("load",function(){return s.loading|=1}),l.addEventListener("error",function(){return s.loading|=2}),pd(l,"link",i),nt(l),o.head.appendChild(l))))),t&&null===a)throw Error(r(528,""));return d}if(t&&null!==a)throw Error(r(529,""));return null;case"script":return t=n.async,"string"==typeof(n=n.src)&&t&&"function"!=typeof t&&"symbol"!=typeof t?(t=Xd(n),(a=(n=tt(c).hoistableScripts).get(t))||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Yd(e){return'href="'+vt(e)+'"'}function Gd(e){return'link[rel="stylesheet"]['+e+"]"}function Kd(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Xd(e){return'[src="'+vt(e)+'"]'}function Jd(e){return"script[async]"+e}function Zd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+vt(n.href)+'"]');if(a)return t.instance=a,nt(a),a;var o=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return nt(a=(e.ownerDocument||e).createElement("style")),pd(a,"style",o),ef(a,n.precedence,e),t.instance=a;case"stylesheet":o=Yd(n.href);var l=e.querySelector(Gd(o));if(l)return t.state.loading|=4,t.instance=l,nt(l),l;a=Kd(n),(o=Bd.get(o))&&tf(a,o),nt(l=(e.ownerDocument||e).createElement("link"));var i=l;return i._p=new Promise(function(e,t){i.onload=e,i.onerror=t}),pd(l,"link",a),t.state.loading|=4,ef(l,n.precedence,e),t.instance=l;case"script":return l=Xd(n.src),(o=e.querySelector(Jd(l)))?(t.instance=o,nt(o),o):(a=n,(o=Bd.get(l))&&nf(a=f({},n),o),nt(o=(e=e.ownerDocument||e).createElement("script")),pd(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(r(443,t.type))}else"stylesheet"===t.type&&!(4&t.state.loading)&&(a=t.instance,t.state.loading|=4,ef(a,n.precedence,e));return t.instance}function ef(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,o=a,l=0;l<r.length;l++){var i=r[l];if(i.dataset.precedence===t)o=i;else if(o!==a)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function tf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function nf(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var rf=null;function af(e,t,n){if(null===rf){var r=new Map,a=rf=new Map;a.set(n,r)}else(r=(a=rf).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var o=n[a];if(!(o[Ke]||o[Ue]||"link"===e&&"stylesheet"===o.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==o.namespaceURI){var l=o.getAttribute(t)||"";l=e+l;var i=r.get(l);i?i.push(o):r.set(l,[o])}}return r}function of(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function lf(e){return!!("stylesheet"!==e.type||3&e.state.loading)}var sf=0;function cf(){if(this.count--,0===this.count&&(0===this.imgCount||!this.waitingForImages))if(this.stylesheets)df(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var uf=null;function df(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,uf=new Map,t.forEach(ff,e),uf=null,cf.call(e))}function ff(e,t){if(!(4&t.state.loading)){var n=uf.get(e);if(n)var r=n.get(null);else{n=new Map,uf.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<a.length;o++){var l=a[o];"LINK"!==l.nodeName&&"not all"===l.getAttribute("media")||(n.set(l.dataset.precedence,l),r=l)}r&&n.set(null,r)}l=(a=t.instance).getAttribute("data-precedence"),(o=n.get(l)||r)===r&&n.set(null,a),n.set(l,a),this.count++,r=cf.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),o?o.parentNode.insertBefore(a,o.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var mf={$$typeof:k,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function pf(e,t,n,r,a,o,l,i,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=o,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function hf(e,t,n,r,a,o,l,i,s,c,u,d){return e=new pf(e,t,n,l,s,c,u,d,i),t=1,!0===o&&(t|=24),o=Rr(3,null,null,t),e.current=o,o.stateNode=e,(t=Ba()).refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:r,isDehydrated:n,cache:t},vo(o),e}function gf(e){return e?e=Or:Or}function bf(e,t,n,r,a,o){a=gf(a),null===r.context?r.context=a:r.pendingContext=a,(r=ko(t)).payload={element:n},null!==(o=void 0===o?null:o)&&(r.callback=o),null!==(n=So(e,r,t))&&(Kc(n,0,t),wo(n,e,t))}function yf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function vf(e,t){yf(e,t),(e=e.alternate)&&yf(e,t)}function xf(e){if(13===e.tag||31===e.tag){var t=Nr(e,67108864);null!==t&&Kc(t,0,67108864),vf(e,67108864)}}function kf(e){if(13===e.tag||31===e.tag){var t=Yc(),n=Nr(e,t=Oe(t));null!==n&&Kc(n,0,t),vf(e,t)}}var Sf=!0;function wf(e,t,n,r){var a=D.T;D.T=null;var o=M.p;try{M.p=2,zf(e,t,n,r)}finally{M.p=o,D.T=a}}function $f(e,t,n,r){var a=D.T;D.T=null;var o=M.p;try{M.p=8,zf(e,t,n,r)}finally{M.p=o,D.T=a}}function zf(e,t,n,r){if(Sf){var a=Cf(r);if(null===a)rd(e,t,r,Ef,n),Of(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Lf=If(Lf,e,t,n,r,a),!0;case"dragenter":return _f=If(_f,e,t,n,r,a),!0;case"mouseover":return Af=If(Af,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Tf.set(o,If(Tf.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Nf.set(o,If(Nf.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Of(e,r),4&t&&-1<Mf.indexOf(e)){for(;null!==a;){var o=Ze(a);if(null!==o)switch(o.tag){case 3:if((o=o.stateNode).current.memoizedState.isDehydrated){var l=Pe(o.pendingLanes);if(0!==l){var i=o;for(i.pendingLanes|=2,i.entangledLanes|=2;l;){var s=1<<31-Se(l);i.entanglements[1]|=s,l&=~s}Mu(o),!(6&hc)&&(Dc=ue()+500,Ou(0))}}break;case 31:case 13:null!==(i=Nr(o,2))&&Kc(i,0,2),tu(),vf(o,2)}if(null===(o=Cf(r))&&rd(e,t,r,Ef,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else rd(e,t,r,null,n)}}function Cf(e){return Pf(e=Dt(e))}var Ef=null;function Pf(e){if(Ef=null,null!==(e=Je(e))){var t=o(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=s(t)))return e;e=null}else if(31===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ef=e,null}function Ff(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(de()){case fe:return 2;case me:return 8;case pe:case he:return 32;case ge:return 268435456;default:return 32}default:return 32}}var jf=!1,Lf=null,_f=null,Af=null,Tf=new Map,Nf=new Map,Df=[],Mf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Of(e,t){switch(e){case"focusin":case"focusout":Lf=null;break;case"dragenter":case"dragleave":_f=null;break;case"mouseover":case"mouseout":Af=null;break;case"pointerover":case"pointerout":Tf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nf.delete(t.pointerId)}}function If(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=Ze(t))&&xf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Rf(e){var t=Je(e.target);if(null!==t){var n=o(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=s(n)))return e.blockedOn=t,void Be(e.priority,function(){kf(n)})}else if(31===t){if(null!==(t=c(n)))return e.blockedOn=t,void Be(e.priority,function(){kf(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Bf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cf(e.nativeEvent);if(null!==n)return null!==(t=Ze(n))&&xf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Nt=r,n.target.dispatchEvent(r),Nt=null,t.shift()}return!0}function Wf(e,t,n){Bf(e)&&n.delete(t)}function Uf(){jf=!1,null!==Lf&&Bf(Lf)&&(Lf=null),null!==_f&&Bf(_f)&&(_f=null),null!==Af&&Bf(Af)&&(Af=null),Tf.forEach(Wf),Nf.forEach(Wf)}function Vf(t,n){t.blockedOn===n&&(t.blockedOn=null,jf||(jf=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Uf)))}var Hf=null;function Qf(t){Hf!==t&&(Hf=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Hf===t&&(Hf=null);for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],a=t[e+2];if("function"!=typeof r){if(null===Pf(r||n))continue;break}var o=Ze(n);null!==o&&(t.splice(e,3),e-=3,ri(o,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function qf(e){function t(t){return Vf(t,e)}null!==Lf&&Vf(Lf,e),null!==_f&&Vf(_f,e),null!==Af&&Vf(Af,e),Tf.forEach(t),Nf.forEach(t);for(var n=0;n<Df.length;n++){var r=Df[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Df.length&&null===(n=Df[0]).blockedOn;)Rf(n),null===n.blockedOn&&Df.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],o=n[r+1],l=a[Ve]||null;if("function"==typeof o)l||Qf(n);else if(l){var i=null;if(o&&o.hasAttribute("formAction")){if(a=o,l=o[Ve]||null)i=l.formAction;else if(null!==Pf(a))continue}else i=l.action;"function"==typeof i?n[r+1]=i:(n.splice(r,3),r-=3),Qf(n)}}}function Yf(){function e(e){e.canIntercept&&"react-transition"===e.info&&e.intercept({handler:function(){return new Promise(function(e){return a=e})},focusReset:"manual",scroll:"manual"})}function t(){null!==a&&(a(),a=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&null!=e.url&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if("object"==typeof navigation){var r=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),null!==a&&(a(),a=null)}}}function Gf(e){this._internalRoot=e}function Kf(e){this._internalRoot=e}Kf.prototype.render=Gf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(r(409));bf(t.current,Yc(),e,t,null,null)},Kf.prototype.unmount=Gf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;bf(e.current,2,null,e,null,null),tu(),t[He]=null}},Kf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Re();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Df.length&&0!==t&&t<Df[n].priority;n++);Df.splice(n,0,e),0===n&&Rf(e)}};var Xf=t.version;if("19.2.0"!==Xf)throw Error(r(527,Xf,"19.2.0"));M.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(r(188));throw e=Object.keys(e).join(","),Error(r(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=o(e)))throw Error(r(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(null===l)break;var i=l.alternate;if(null===i){if(null!==(a=l.return)){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return u(l),e;if(i===a)return u(l),t;i=i.sibling}throw Error(r(188))}if(n.return!==a.return)n=l,a=i;else{for(var s=!1,c=l.child;c;){if(c===n){s=!0,n=l,a=i;break}if(c===a){s=!0,a=l,n=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===n){s=!0,n=i,a=l;break}if(c===a){s=!0,a=i,n=l;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==a)throw Error(r(190))}if(3!==n.tag)throw Error(r(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Jf={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.0"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Zf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zf.isDisabled&&Zf.supportsFiber)try{ve=Zf.inject(Jf),xe=Zf}catch(tm){}}return S.createRoot=function(e,t){if(!a(e))throw Error(r(299));var n=!1,o="",l=Ci,i=Ei,s=Pi;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(o=t.identifierPrefix),void 0!==t.onUncaughtError&&(l=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError)),t=hf(e,1,!1,null,0,n,o,null,l,i,s,Yf),e[He]=t.current,td(e),new Gf(t)},S.hydrateRoot=function(e,t,n){if(!a(e))throw Error(r(299));var o=!1,l="",i=Ci,s=Ei,c=Pi,u=null;return null!=n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(l=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.formState&&(u=n.formState)),(t=hf(e,1,!0,t,0,o,l,u,i,s,c,Yf)).context=gf(null),n=t.current,(l=ko(o=Oe(o=Yc()))).callback=null,So(n,l,o),n=o,t.current.lanes=n,Te(t,n),Mu(t),e[He]=t.current,td(e),new Kf(t)},S.version="19.2.0",S}var E,P,F=(v||(v=1,function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),k.exports=C()),k.exports),j={exports:{}},L={};var _=(P||(P=1,j.exports=function(){if(E)return L;E=1;var e=l().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return L.c=function(t){return e.H.useMemoCache(t)},L}()),j.exports);const A={colors:{primary:"#E8E8E8",primaryDark:"#C0C0C0",primaryLight:"#FFFFFF",secondary:"#2D2D2D",secondaryDark:"#1A1A1A",secondaryLight:"#3A3A3A",accent:"#FFFFFF",accentDark:"#E0E0E0",accentLight:"#FFFFFF",background:"#0A0A0A",backgroundLight:"#111111",backgroundCard:"#1A1A1A",text:"#FFFFFF",textSecondary:"#C8C8C8",textMuted:"#666666",border:"#2D2D2D",borderLight:"#3A3A3A",success:"#A8A8A8",warning:"#808080",error:"#D0D0D0",info:"#E8E8E8"},fonts:{primary:"'IBM Plex Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",mono:"'IBM Plex Mono', 'JetBrains Mono', 'Fira Code', monospace"},fontSizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem"},fontWeights:{light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem","4xl":"6rem"},breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},borderRadius:{sm:"0px",md:"2px",lg:"2px",xl:"2px","2xl":"4px",full:"2px"},shadows:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.8)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.9)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.9)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.95)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 1)",glow:"0 0 20px rgba(232, 232, 232, 0.15), 0 0 40px rgba(232, 232, 232, 0.05)",glowPrimary:"0 0 20px rgba(232, 232, 232, 0.2)"},transitions:{fast:"150ms ease-in-out",base:"200ms ease-in-out",slow:"300ms ease-in-out"},zIndex:{base:1,dropdown:10,sticky:100,fixed:1e3,modal:1e4}},T=s`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: ${e=>e.theme.fonts.primary};
    background-color: ${e=>e.theme.colors.background};
    color: ${e=>e.theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${e=>e.theme.fontWeights.bold};
    line-height: 1.2;
    color: ${e=>e.theme.colors.text};
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: ${e=>e.theme.fontSizes["5xl"]};

    @media (max-width: ${e=>e.theme.breakpoints.md}) {
      font-size: ${e=>e.theme.fontSizes["4xl"]};
    }
  }

  h2 {
    font-size: ${e=>e.theme.fontSizes["4xl"]};

    @media (max-width: ${e=>e.theme.breakpoints.md}) {
      font-size: ${e=>e.theme.fontSizes["3xl"]};
    }
  }

  h3 {
    font-size: ${e=>e.theme.fontSizes["2xl"]};
  }

  p {
    color: ${e=>e.theme.colors.textSecondary};
    font-size: ${e=>e.theme.fontSizes.base};
  }

  a {
    color: ${e=>e.theme.colors.primary};
    text-decoration: none;
    transition: color ${e=>e.theme.transitions.base};

    &:hover {
      color: ${e=>e.theme.colors.primaryLight};
    }
  }

  button {
    font-family: ${e=>e.theme.fonts.primary};
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  input, textarea, select {
    font-family: ${e=>e.theme.fonts.primary};
    outline: none;
  }

  ::selection {
    background-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.background};
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${e=>e.theme.colors.background};
    border-left: 1px solid ${e=>e.theme.colors.border};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.colors.border};

    &:hover {
      background: ${e=>e.theme.colors.primary};
    }
  }
`,N=c`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,D=c`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,M=c`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;c`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,c`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,c`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,c`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`,c`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`,c`
  0%, 100% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
  }
`,c`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;const O=[{name:"Cold Steel",colors:{primary:"#E8E8E8",primaryDark:"#C0C0C0",primaryLight:"#FFFFFF",secondary:"#2D2D2D",secondaryDark:"#1A1A1A",secondaryLight:"#3A3A3A",accent:"#FFFFFF",accentDark:"#E0E0E0",accentLight:"#FFFFFF",success:"#A8A8A8",warning:"#808080",error:"#D0D0D0",info:"#E8E8E8"},dark:{background:"#0A0A0A",surface:"#1A1A1A",text:"#FFFFFF",textSecondary:"#C8C8C8",border:"#2D2D2D"},light:{background:"#F5F5F5",surface:"#FFFFFF",text:"#0A0A0A",textSecondary:"#333333",border:"#CCCCCC"}},{name:"Classic Gold",colors:{primary:"#D4AF37",primaryDark:"#B8941E",primaryLight:"#E5C758",secondary:"#2C2416",secondaryDark:"#1A1409",secondaryLight:"#3E3220",accent:"#FFD700",accentDark:"#DAB900",accentLight:"#FFE44D",success:"#4CAF50",warning:"#FF9800",error:"#F44336",info:"#2196F3"},dark:{background:"#1A1409",surface:"#2C2416",text:"#F5F5DC",textSecondary:"#D4C5A0",border:"#3E3220"},light:{background:"#FFF8E7",surface:"#FFFFFF",text:"#2C2416",textSecondary:"#5A4A2E",border:"#E5D7BB"}},{name:"Elegant Beige",colors:{primary:"#C9A96E",primaryDark:"#A68B52",primaryLight:"#E0C791",secondary:"#8B7355",secondaryDark:"#6B5742",secondaryLight:"#A68F73",accent:"#D4AF37",accentDark:"#B8941E",accentLight:"#E5C758",success:"#4CAF50",warning:"#FF9800",error:"#F44336",info:"#2196F3"},dark:{background:"#2B2318",surface:"#3D3024",text:"#F5F0E6",textSecondary:"#D9CDB8",border:"#4F4232"},light:{background:"#FAF7F2",surface:"#FFFFFF",text:"#3D3024",textSecondary:"#6B5E4F",border:"#E8DFD0"}},{name:"Royal Bronze",colors:{primary:"#CD7F32",primaryDark:"#A66827",primaryLight:"#E09B52",secondary:"#4A3428",secondaryDark:"#2E201A",secondaryLight:"#664836",accent:"#B87333",accentDark:"#985F2A",accentLight:"#D49056",success:"#4CAF50",warning:"#FF9800",error:"#F44336",info:"#2196F3"},dark:{background:"#1C140E",surface:"#2E201A",text:"#F5E6D3",textSecondary:"#D4BFA8",border:"#422C1F"},light:{background:"#FFF5EB",surface:"#FFFFFF",text:"#2E201A",textSecondary:"#5C4033",border:"#E8D4C0"}},{name:"Champagne Rose",colors:{primary:"#F1DDCF",primaryDark:"#D4BFA8",primaryLight:"#FAF0E6",secondary:"#C9A0A0",secondaryDark:"#A67C7C",secondaryLight:"#E0BEBE",accent:"#E6B8A2",accentDark:"#C9987C",accentLight:"#F5D4C3",success:"#4CAF50",warning:"#FF9800",error:"#F44336",info:"#2196F3"},dark:{background:"#2A1F1F",surface:"#3C2C2C",text:"#FAF0E6",textSecondary:"#E0CFCF",border:"#4E3939"},light:{background:"#FFF9F5",surface:"#FFFFFF",text:"#3C2C2C",textSecondary:"#6B5555",border:"#F0E0D6"}},{name:"Platinum Luxury",colors:{primary:"#E5E4E2",primaryDark:"#C1BFBD",primaryLight:"#F5F5F3",secondary:"#8C8C88",secondaryDark:"#6B6B68",secondaryLight:"#ADADAA",accent:"#BFC1C2",accentDark:"#9FA1A2",accentLight:"#D9DBDC",success:"#4CAF50",warning:"#FF9800",error:"#F44336",info:"#2196F3"},dark:{background:"#1A1A19",surface:"#2C2C2A",text:"#F5F5F3",textSecondary:"#D4D4D2",border:"#3E3E3C"},light:{background:"#FAFAF9",surface:"#FFFFFF",text:"#2C2C2A",textSecondary:"#5A5A58",border:"#ECECEA"}},{name:"Warm Terracotta",colors:{primary:"#E07856",primaryDark:"#C25A3A",primaryLight:"#F09876",secondary:"#8B4513",secondaryDark:"#6B340F",secondaryLight:"#A65625",accent:"#D2691E",accentDark:"#B4541A",accentLight:"#E88445",success:"#4CAF50",warning:"#FF9800",error:"#F44336",info:"#2196F3"},dark:{background:"#1F1410",surface:"#322118",text:"#F5E6D3",textSecondary:"#D9C3AD",border:"#452E20"},light:{background:"#FFF6F0",surface:"#FFFFFF",text:"#322118",textSecondary:"#64432F",border:"#F0DACB"}}],I=u.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.xl};
  background: ${({$scrolled:e,theme:t})=>e?`${t.colors.background}f0`:"transparent"};
  backdrop-filter: ${({$scrolled:e})=>e?"blur(12px)":"none"};
  border-bottom: ${({$scrolled:e,theme:t})=>e?`1px solid ${t.colors.border}`:"none"};
  transition: all 0.25s ease;
  animation: ${M} 0.6s ease-out;

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    padding: ${e=>e.theme.spacing.md};
  }
`,R=u.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,B=u.a`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  cursor: pointer;
  text-decoration: none;
`,W=u.span`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xl};
  font-weight: ${e=>e.theme.fontWeights.bold};
  color: ${e=>e.theme.colors.text};
  letter-spacing: -0.02em;

  span {
    color: ${e=>e.theme.colors.textMuted};
  }
`,U=u.span`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-left: 1px solid ${e=>e.theme.colors.border};
  padding-left: ${e=>e.theme.spacing.sm};

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    display: none;
  }
`,V=u.ul`
  display: flex;
  gap: ${e=>e.theme.spacing.xl};
  list-style: none;
  align-items: center;

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: ${e=>e.theme.colors.backgroundCard}f8;
    backdrop-filter: blur(12px);
    padding: ${e=>e.theme.spacing.xl};
    gap: ${e=>e.theme.spacing.lg};
    border-bottom: 1px solid ${e=>e.theme.colors.border};
    transform: ${({$open:e})=>e?"translateX(0)":"translateX(100%)"};
    transition: transform 0.25s ease;
  }
`,H=u.li``,Q=u.a`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.sm};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  padding: ${e=>e.theme.spacing.xs} 0;
  position: relative;
  transition: color 0.2s;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${e=>e.theme.colors.primary};
    transition: width 0.2s ease;
  }

  &:hover {
    color: ${e=>e.theme.colors.text};

    &::after {
      width: 100%;
    }
  }
`,q=u.a`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.background};
  background: ${e=>e.theme.colors.text};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.lg};
  transition: all 0.2s ease;
  clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);

  &:hover {
    background: ${e=>e.theme.colors.primaryDark};
    transform: translateY(-1px);
  }
`,Y=u.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${e=>e.theme.spacing.sm};

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    display: flex;
  }

  span {
    width: 22px;
    height: 2px;
    background: ${e=>e.theme.colors.textSecondary};
    transition: all 0.2s ease;
  }
`,G=()=>{const n=_.c(34),{t:r}=e(),[a,o]=t.useState(!1),[l,i]=t.useState(!1);let s,c,u;n[0]===Symbol.for("react.memo_cache_sentinel")?(s=()=>{const e=()=>o(window.scrollY>40);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},c=[],n[0]=s,n[1]=c):(s=n[0],c=n[1]),t.useEffect(s,c),n[2]===Symbol.for("react.memo_cache_sentinel")?(u=e=>{document.getElementById(e)?.scrollIntoView({behavior:"smooth"}),i(!1)},n[2]=u):u=n[2];const d=u;let f,m,p,h,g,b,y,v,k,S,w,$,z,C;if(n[3]!==l||n[4]!==a||n[5]!==r){const e=[{key:"nav.home",id:"home"},{key:"nav.services",id:"services"},{key:"nav.projects",id:"projects"},{key:"nav.about",id:"about"},{key:"nav.founder",id:"founder"},{key:"nav.pricing",id:"pricing"}];let t;p=I,y=a,m=R,n[13]===Symbol.for("react.memo_cache_sentinel")?(t=()=>d("home"),n[13]=t):t=n[13],n[14]===Symbol.for("react.memo_cache_sentinel")?(b=x.jsxs(B,{onClick:t,children:[x.jsxs(W,{children:["FLN",x.jsx("span",{children:"."})]}),x.jsx(U,{children:"Solutions IT"})]}),n[14]=b):b=n[14],f=V,h=l,g=e.map(e=>{const{key:t,id:n}=e;return x.jsx(H,{children:x.jsx(Q,{onClick:()=>d(n),children:r(t)})},n)}),n[3]=l,n[4]=a,n[5]=r,n[6]=f,n[7]=m,n[8]=p,n[9]=h,n[10]=g,n[11]=b,n[12]=y}else f=n[6],m=n[7],p=n[8],h=n[9],g=n[10],b=n[11],y=n[12];return n[15]===Symbol.for("react.memo_cache_sentinel")?(v=()=>d("contact"),n[15]=v):v=n[15],n[16]!==r?(k=r("nav.contact"),n[16]=r,n[17]=k):k=n[17],n[18]!==k?(S=x.jsx(H,{children:x.jsx(q,{onClick:v,children:k})}),n[18]=k,n[19]=S):S=n[19],n[20]!==f||n[21]!==h||n[22]!==g||n[23]!==S?(w=x.jsxs(f,{$open:h,children:[g,S]}),n[20]=f,n[21]=h,n[22]=g,n[23]=S,n[24]=w):w=n[24],n[25]===Symbol.for("react.memo_cache_sentinel")?($=x.jsxs(Y,{onClick:()=>i(K),children:[x.jsx("span",{}),x.jsx("span",{}),x.jsx("span",{})]}),n[25]=$):$=n[25],n[26]!==m||n[27]!==w||n[28]!==b?(z=x.jsxs(m,{children:[b,w,$]}),n[26]=m,n[27]=w,n[28]=b,n[29]=z):z=n[29],n[30]!==p||n[31]!==z||n[32]!==y?(C=x.jsx(p,{$scrolled:y,children:z}),n[30]=p,n[31]=z,n[32]=y,n[33]=C):C=n[33],C};function K(e){return!e}var X={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},J=n.createContext&&n.createContext(X),Z=["attr","size","title"];function ee(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach(function(t){ae(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ae(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function oe(e){return e&&e.map((e,t)=>n.createElement(e.tag,re({key:t},e.attr),oe(e.child)))}function le(e){return t=>n.createElement(ie,te({attr:re({},e.attr)},t),oe(e.child))}function ie(e){var t=t=>{var r,{attr:a,size:o,title:l}=e,i=ee(e,Z),s=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",te({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,i,{className:r,style:re(re({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==J?n.createElement(J.Consumer,null,e=>t(e)):t(X)}function se(e){return le({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function ce(e){return le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function ue(e){return le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"},child:[]}]})(e)}function de(e){return le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function fe(e){return le({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(e)}function me(e){return le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function pe(e){return le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(e)}function he(e){return le({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)}function ge(e){return le({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}const be=c`
  from { transform: translate(0, 0); }
  to   { transform: translate(50px, 50px); }
`,ye=c`
  0%   { top: -10%; }
  100% { top: 110%; }
`,ve=c`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`,xe=u.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 120px ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing["4xl"]};
  overflow: hidden;
  background: ${e=>e.theme.colors.background};

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    padding: 100px ${e=>e.theme.spacing.md} ${e=>e.theme.spacing["3xl"]};
  }
`,ke=u.div`
  position: absolute;
  inset: -100px;
  z-index: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: ${be} 8s linear infinite;
`,Se=u.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
  z-index: 1;
  animation: ${ye} 6s linear infinite;
  pointer-events: none;
`,we=u.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, #000000cc 100%);
  z-index: 1;
  pointer-events: none;
`,$e=u.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,ze=u.div`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: ${e=>e.theme.spacing.xl};
  animation: ${N} 0.6s ease-out;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: ${e=>e.theme.colors.primary};
    animation: ${ve} 2s step-end infinite;
  }
`,Ce=u.h1`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: ${e=>e.theme.fontWeights.extrabold};
  color: ${e=>e.theme.colors.text};
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: ${e=>e.theme.spacing.lg};
  animation: ${D} 0.8s ease-out both;
  animation-delay: 0.1s;

  span {
    color: ${e=>e.theme.colors.textMuted};
  }
`,Ee=u.p`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.textMuted};
  margin-bottom: ${e=>e.theme.spacing.md};
  animation: ${D} 0.8s ease-out both;
  animation-delay: 0.2s;
  letter-spacing: 0.05em;

  &::before {
    content: '> ';
    color: ${e=>e.theme.colors.primary};
  }
`,Pe=u.p`
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.textSecondary};
  max-width: 680px;
  line-height: 1.8;
  margin-bottom: ${e=>e.theme.spacing["2xl"]};
  animation: ${D} 0.8s ease-out both;
  animation-delay: 0.3s;

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    font-size: ${e=>e.theme.fontSizes.base};
  }
`,Fe=u.div`
  display: flex;
  gap: ${e=>e.theme.spacing.lg};
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: ${e=>e.theme.spacing["3xl"]};
  animation: ${D} 0.8s ease-out both;
  animation-delay: 0.4s;
`,je=u.button`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  background: ${e=>e.theme.colors.text};
  color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing["2xl"]};
  font-size: ${e=>e.theme.fontSizes.base};
  font-weight: ${e=>e.theme.fontWeights.bold};
  font-family: ${e=>e.theme.fonts.primary};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);

  &:hover {
    background: ${e=>e.theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(232, 232, 232, 0.2);
  }
`,Le=u.button`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  background: transparent;
  color: ${e=>e.theme.colors.textSecondary};
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing["2xl"]};
  font-size: ${e=>e.theme.fontSizes.base};
  font-weight: ${e=>e.theme.fontWeights.medium};
  font-family: ${e=>e.theme.fonts.primary};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 1px solid ${e=>e.theme.colors.border};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.text};
    transform: translateY(-2px);
  }
`,_e=u.div`
  display: flex;
  gap: 0;
  border: 1px solid ${e=>e.theme.colors.border};
  width: fit-content;
  animation: ${D} 0.8s ease-out both;
  animation-delay: 0.5s;

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`,Ae=u.div`
  padding: ${e=>e.theme.spacing.lg} ${e=>e.theme.spacing["2xl"]};
  border-right: 1px solid ${e=>e.theme.colors.border};
  min-width: 180px;

  &:last-child {
    border-right: none;
  }

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    border-right: none;
    border-bottom: 1px solid ${e=>e.theme.colors.border};
    min-width: unset;

    &:last-child {
      border-bottom: none;
    }
  }
`,Te=u.div`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes["2xl"]};
  font-weight: ${e=>e.theme.fontWeights.bold};
  color: ${e=>e.theme.colors.text};
  letter-spacing: -0.02em;
  margin-bottom: 4px;
`,Ne=u.div`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`,De=u.button`
  position: absolute;
  bottom: ${e=>e.theme.spacing["2xl"]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  background: none;
  border: none;
  cursor: pointer;
  color: ${e=>e.theme.colors.textMuted};
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  animation: ${N} 2s ease-out both;
  animation-delay: 1s;
  transition: color 0.2s;

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,Me=()=>{const n=_.c(45),{t:r}=e(),[a,o]=t.useState("");let l,i;n[0]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{const e=setInterval(()=>{o(Oe)},500);return()=>clearInterval(e)},i=[],n[0]=l,n[1]=i):(l=n[0],i=n[1]),t.useEffect(l,i);const s=Ie;let c,u,d,f,m,p,h,g,b,y,v,k,S,w,$,z,C,E,P,F,j,L,A,T,N;return n[2]===Symbol.for("react.memo_cache_sentinel")?(c=x.jsx(ke,{}),u=x.jsx(Se,{}),d=x.jsx(we,{}),n[2]=c,n[3]=u,n[4]=d):(c=n[2],u=n[3],d=n[4]),n[5]!==r?(f=r("hero.greeting"),n[5]=r,n[6]=f):f=n[6],n[7]!==a||n[8]!==f?(m=x.jsxs(ze,{children:[f,"  |  SYS::ONLINE",a]}),n[7]=a,n[8]=f,n[9]=m):m=n[9],n[10]===Symbol.for("react.memo_cache_sentinel")?(p=x.jsxs(Ce,{children:["We Build.",x.jsx("span",{children:" We Scale."}),x.jsx("br",{}),"We Deliver."]}),n[10]=p):p=n[10],n[11]!==r?(h=r("hero.subtitle"),n[11]=r,n[12]=h):h=n[12],n[13]!==h?(g=x.jsx(Ee,{children:h}),n[13]=h,n[14]=g):g=n[14],n[15]!==r?(b=r("hero.description"),n[15]=r,n[16]=b):b=n[16],n[17]!==b?(y=x.jsx(Pe,{children:b}),n[17]=b,n[18]=y):y=n[18],n[19]===Symbol.for("react.memo_cache_sentinel")?(v=()=>s("services"),n[19]=v):v=n[19],n[20]!==r?(k=r("hero.cta.primary"),n[20]=r,n[21]=k):k=n[21],n[22]===Symbol.for("react.memo_cache_sentinel")?(S=x.jsx(fe,{size:12}),n[22]=S):S=n[22],n[23]!==k?(w=x.jsxs(je,{onClick:v,children:[k," ",S]}),n[23]=k,n[24]=w):w=n[24],n[25]===Symbol.for("react.memo_cache_sentinel")?($=()=>s("contact"),n[25]=$):$=n[25],n[26]!==r?(z=r("hero.cta.secondary"),n[26]=r,n[27]=z):z=n[27],n[28]!==z?(C=x.jsx(Le,{onClick:$,children:z}),n[28]=z,n[29]=C):C=n[29],n[30]!==w||n[31]!==C?(E=x.jsxs(Fe,{children:[w,C]}),n[30]=w,n[31]=C,n[32]=E):E=n[32],n[33]===Symbol.for("react.memo_cache_sentinel")?(P=x.jsxs(Ae,{children:[x.jsx(Te,{children:"7+"}),x.jsx(Ne,{children:"Years in market"})]}),n[33]=P):P=n[33],n[34]===Symbol.for("react.memo_cache_sentinel")?(F=x.jsxs(Ae,{children:[x.jsx(Te,{children:"50+"}),x.jsx(Ne,{children:"Projects delivered"})]}),n[34]=F):F=n[34],n[35]===Symbol.for("react.memo_cache_sentinel")?(j=x.jsxs(_e,{children:[P,F,x.jsxs(Ae,{children:[x.jsx(Te,{children:"AI-First"}),x.jsx(Ne,{children:"Core specialty"})]})]}),n[35]=j):j=n[35],n[36]!==y||n[37]!==E||n[38]!==m||n[39]!==g?(L=x.jsxs($e,{children:[m,p,g,y,E,j]}),n[36]=y,n[37]=E,n[38]=m,n[39]=g,n[40]=L):L=n[40],n[41]===Symbol.for("react.memo_cache_sentinel")?(A=()=>s("services"),n[41]=A):A=n[41],n[42]===Symbol.for("react.memo_cache_sentinel")?(T=x.jsxs(De,{onClick:A,children:["scroll ",x.jsx(ue,{})]}),n[42]=T):T=n[42],n[43]!==L?(N=x.jsxs(xe,{id:"home",children:[c,u,d,L,T]}),n[43]=L,n[44]=N):N=n[44],N};function Oe(e){return e.length>=3?"":e+"."}function Ie(e){document.getElementById(e)?.scrollIntoView({behavior:"smooth"})}const Re=[{id:"1",title:"Sistema ERP - EXTDS Portugal",description:"Sistema ERP certificado pela Autoridade Tributária de Portugal. Solução completa de faturação seguindo rigorosamente as normas AT portuguesas. Desenvolvido com CodeIgniter 3, PHP 8.1 e backend Python para APIs robustas.",technologies:["PHP 8.1","CodeIgniter 3","Python","MySQL","REST API","JavaScript","AT Compliance"],category:"erp",url:"https://erp.extds.pt",image:"/assets/erpextds-B6qx2eqj.png",featured:!0,year:"2024 - Atual"},{id:"2",title:"Meet2Face - App para Baladas",description:"Aplicativo mobile inovador para conectar pessoas em eventos e baladas na Espanha. Plataforma completa com geolocalização, chat em tempo real, perfis de usuário e sistema de matchmaking para eventos noturnos.",technologies:["React Native","Node.js","Socket.io","MongoDB","Geolocation API","Push Notifications"],category:"mobile",featured:!0,year:"2025"},{id:"3",title:"Viaje Nones - Site WordPress",description:"Site institucional em WordPress para agência de viagens espanhola. Design responsivo e moderno, otimizado para SEO, com sistema de reservas integrado, galeria de destinos turísticos, desenvolvimento de plugins customizados e integração de APIs via SOAP e GIAV.",technologies:["WordPress","PHP","MySQL","JavaScript","SOAP API","GIAV","Custom Plugins","SEO"],category:"web",url:"https://nones.es",image:"/assets/viajesnones-BrHKro9S.png",featured:!0,year:"2025"}],Be=[{id:"1",icon:"FaRocket",title:"Software Delivery",description:"Complete product cycles from ideation to production. Web platforms, SaaS, ERPs and custom systems built with agile methodology.",technologies:["React","Next.js","Node.js","Spring Boot","Python","TypeScript"]},{id:"2",icon:"FaMobile",title:"Mobile Applications",description:"Native and hybrid apps for iOS and Android engineered for performance and scale.",technologies:["React Native","TypeScript","Expo","Firebase","Redux"]},{id:"3",icon:"FaUsers",title:"IT Outsourcing",description:"Plug senior engineers directly into your team without recruitment overhead.",technologies:["Full-Stack","Frontend","Backend","Tech Lead","DevOps","Architect"]},{id:"4",icon:"FaBrain",title:"AI & Intelligence",description:"LLM integrations, automation pipelines, predictive models and AI-powered features.",technologies:["OpenAI","LangChain","Python","TensorFlow","RAG","Agents"]},{id:"5",icon:"FaCloud",title:"Cloud & Scalability",description:"Microservices, containerization, CI/CD and cloud-native architecture.",technologies:["AWS","GCP","Docker","Kubernetes","Terraform","CI/CD"]},{id:"6",icon:"FaShieldAlt",title:"Security & Compliance",description:"Application security, pentesting, LGPD/GDPR compliance and data protection.",technologies:["OWASP","JWT","OAuth2","LGPD","GDPR","Pentest"]}],We="contact@feilen.tech",Ue="Brasil",Ve={FaRocket:function(e){return le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)},FaMobile:function(e){return le({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"},child:[]}]})(e)},FaUsers:function(e){return le({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)},FaBrain:function(e){return le({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(e)},FaCloud:function(e){return le({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"},child:[]}]})(e)},FaShieldAlt:function(e){return le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)},FaCode:function(e){return le({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)},FaServer:function(e){return le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(e)},FaDatabase:function(e){return le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}},He=c`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,Qe=u.section`
  padding: ${e=>e.theme.spacing["4xl"]} ${e=>e.theme.spacing.xl};
  background: ${e=>e.theme.colors.backgroundLight};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${e=>e.theme.colors.border}, transparent);
  }

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    padding: ${e=>e.theme.spacing["3xl"]} ${e=>e.theme.spacing.md};
  }
`,qe=u.div`
  max-width: 1200px;
  margin: 0 auto;
`,Ye=u.div`
  margin-bottom: ${e=>e.theme.spacing["3xl"]};
`,Ge=u.p`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${e=>e.theme.spacing.md};

  &::before { content: '// '; }
`,Ke=u.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${e=>e.theme.colors.text};
  font-weight: ${e=>e.theme.fontWeights.bold};
  letter-spacing: -0.03em;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Xe=u.p`
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.textMuted};
  max-width: 600px;
`,Je=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: ${e=>e.theme.colors.border};
  border: 1px solid ${e=>e.theme.colors.border};

  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Ze=u.div`
  background: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing["2xl"]};
  transition: background 0.2s ease;
  animation: ${He} 0.5s ease-out both;

  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.15s; }
  &:nth-child(4) { animation-delay: 0.2s; }
  &:nth-child(5) { animation-delay: 0.25s; }
  &:nth-child(6) { animation-delay: 0.3s; }

  &:hover {
    background: ${e=>e.theme.colors.backgroundCard};
  }
`,et=u.div`
  font-size: 1.5rem;
  color: ${e=>e.theme.colors.textMuted};
  margin-bottom: ${e=>e.theme.spacing.lg};
  transition: color 0.2s;

  ${Ze}:hover & {
    color: ${e=>e.theme.colors.primary};
  }
`,tt=u.span`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,nt=u.h3`
  font-size: ${e=>e.theme.fontSizes.xl};
  font-weight: ${e=>e.theme.fontWeights.semibold};
  color: ${e=>e.theme.colors.text};
  margin-bottom: ${e=>e.theme.spacing.md};
  letter-spacing: -0.01em;
`,rt=u.p`
  font-size: ${e=>e.theme.fontSizes.base};
  color: ${e=>e.theme.colors.textMuted};
  line-height: 1.7;
  margin-bottom: ${e=>e.theme.spacing.lg};
`,at=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,ot=u.span`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  border: 1px solid ${e=>e.theme.colors.border};
  padding: 2px ${e=>e.theme.spacing.sm};
  letter-spacing: 0.05em;
  transition: all 0.2s;

  ${Ze}:hover & {
    border-color: ${e=>e.theme.colors.borderLight};
    color: ${e=>e.theme.colors.textSecondary};
  }
`,lt=()=>{const t=_.c(19),{t:n}=e();let r,a,o,l,i,s,c,u,d;return t[0]===Symbol.for("react.memo_cache_sentinel")?(r=x.jsx(Ge,{children:"capabilities"}),t[0]=r):r=t[0],t[1]!==n?(a=n("services.title"),t[1]=n,t[2]=a):a=t[2],t[3]!==a?(o=x.jsx(Ke,{children:a}),t[3]=a,t[4]=o):o=t[4],t[5]!==n?(l=n("services.subtitle"),t[5]=n,t[6]=l):l=t[6],t[7]!==l?(i=x.jsx(Xe,{children:l}),t[7]=l,t[8]=i):i=t[8],t[9]!==o||t[10]!==i?(s=x.jsxs(Ye,{children:[r,o,i]}),t[9]=o,t[10]=i,t[11]=s):s=t[11],t[12]!==n?(c=Be.map((e,t)=>{const r=Ve[e.icon];return x.jsxs(Ze,{children:[x.jsx(et,{children:r&&x.jsx(r,{})}),x.jsx(tt,{children:String(t+1).padStart(2,"0")}),x.jsx(nt,{children:n(`services.items.${t}.title`)}),x.jsx(rt,{children:n(`services.items.${t}.description`)}),x.jsx(at,{children:e.technologies.map(it)})]},e.id)}),t[12]=n,t[13]=c):c=t[13],t[14]!==c?(u=x.jsx(Je,{children:c}),t[14]=c,t[15]=u):u=t[15],t[16]!==s||t[17]!==u?(d=x.jsx(Qe,{id:"services",children:x.jsxs(qe,{children:[s,u]})}),t[16]=s,t[17]=u,t[18]=d):d=t[18],d};function it(e){return x.jsx(ot,{children:e},e)}const st=u.section`
  padding: ${e=>e.theme.spacing["4xl"]} ${e=>e.theme.spacing.xl};
  background: ${e=>e.theme.colors.backgroundLight};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${e=>e.theme.colors.border}, transparent);
  }

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    padding: ${e=>e.theme.spacing["3xl"]} ${e=>e.theme.spacing.md};
  }
`,ct=u.div`
  max-width: 1200px;
  margin: 0 auto;
`,ut=u.p`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${e=>e.theme.spacing.md};
  animation: ${D} 0.6s ease-out;

  &::before { content: '// '; }
`,dt=u.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${e=>e.theme.colors.text};
  font-weight: ${e=>e.theme.fontWeights.bold};
  letter-spacing: -0.03em;
  margin-bottom: ${e=>e.theme.spacing["3xl"]};
  animation: ${D} 0.7s ease-out;
`,ft=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1px;
  background: ${e=>e.theme.colors.border};
  border: 1px solid ${e=>e.theme.colors.border};

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,mt=u.div`
  background: ${e=>e.theme.colors.backgroundCard};
  overflow: hidden;
  transition: all 0.2s;
  animation: ${D} 0.6s ease-out;
  animation-fill-mode: both;
  display: flex;
  flex-direction: column;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }

  &:hover {
    background: ${e=>e.theme.colors.background};
  }
`,pt=u.div`
  height: 200px;
  background: ${({$hasImage:e,$imageUrl:t,theme:n})=>e&&t?`url(${t})`:`linear-gradient(135deg, ${n.colors.backgroundCard}, ${n.colors.background})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${e=>e.theme.colors.border};

  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`,ht=u.span`
  position: absolute;
  top: ${e=>e.theme.spacing.md};
  right: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.textMuted};
  padding: 2px ${e=>e.theme.spacing.sm};
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  letter-spacing: 0.1em;
  z-index: 1;
  border: 1px solid ${e=>e.theme.colors.border};
`,gt=u.div`
  padding: ${e=>e.theme.spacing.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
`,bt=u.span`
  font-family: ${e=>e.theme.fonts.mono};
  color: ${e=>e.theme.colors.textMuted};
  font-size: ${e=>e.theme.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: ${e=>e.theme.spacing.sm};
  display: block;
`,yt=u.h3`
  margin-bottom: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.text};
  font-size: ${e=>e.theme.fontSizes.lg};
  font-weight: ${e=>e.theme.fontWeights.semibold};
`,vt=u.p`
  margin-bottom: ${e=>e.theme.spacing.lg};
  color: ${e=>e.theme.colors.textSecondary};
  line-height: 1.7;
  font-size: ${e=>e.theme.fontSizes.sm};
  flex: 1;
`,xt=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,kt=u.span`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textSecondary};
  border: 1px solid ${e=>e.theme.colors.border};
  padding: 2px ${e=>e.theme.spacing.sm};
  letter-spacing: 0.05em;
  transition: all 0.2s;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.text};
  }
`,St=u.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,wt=u.a`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  color: ${e=>e.theme.colors.text};
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.semibold};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.2s;
  border-bottom: 1px solid ${e=>e.theme.colors.border};
  padding-bottom: 2px;

  &:hover {
    color: ${e=>e.theme.colors.textMuted};
    border-color: transparent;
  }

  svg {
    font-size: ${e=>e.theme.fontSizes.xs};
  }
`,$t=()=>{const t=_.c(12),{t:n}=e();let r,a,o,l,i,s;return t[0]===Symbol.for("react.memo_cache_sentinel")?(r=x.jsx(ut,{children:"case studies"}),t[0]=r):r=t[0],t[1]!==n?(a=n("projects.title"),t[1]=n,t[2]=a):a=t[2],t[3]!==a?(o=x.jsx(dt,{children:a}),t[3]=a,t[4]=o):o=t[4],t[5]!==n?(l=Re.map(e=>x.jsxs(mt,{children:[x.jsx(pt,{$hasImage:!!e.image,$imageUrl:e.image,children:x.jsx(ht,{children:e.year})}),x.jsxs(gt,{children:[x.jsx(bt,{children:e.category.toUpperCase()}),x.jsx(yt,{children:e.title}),x.jsx(vt,{children:e.description}),x.jsx(xt,{children:e.technologies.map(zt)}),x.jsx(St,{children:e.url&&x.jsxs(wt,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[x.jsx(pe,{}),n("projects.viewProject")]})})]})]},e.id)),t[5]=n,t[6]=l):l=t[6],t[7]!==l?(i=x.jsx(ft,{children:l}),t[7]=l,t[8]=i):i=t[8],t[9]!==o||t[10]!==i?(s=x.jsx(st,{id:"projects",children:x.jsxs(ct,{children:[r,o,i]})}),t[9]=o,t[10]=i,t[11]=s):s=t[11],s};function zt(e){return x.jsx(kt,{children:e},e)}const Ct=u.section`
  padding: ${e=>e.theme.spacing["4xl"]} ${e=>e.theme.spacing.xl};
  background: ${e=>e.theme.colors.background};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${e=>e.theme.colors.border}, transparent);
  }

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    padding: ${e=>e.theme.spacing["3xl"]} ${e=>e.theme.spacing.md};
  }
`,Et=u.div`
  max-width: 1200px;
  margin: 0 auto;
`,Pt=u.p`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${e=>e.theme.spacing.md};
  animation: ${D} 0.6s ease-out;

  &::before { content: '// '; }
`,Ft=u.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${e=>e.theme.colors.text};
  font-weight: ${e=>e.theme.fontWeights.bold};
  letter-spacing: -0.03em;
  margin-bottom: ${e=>e.theme.spacing["3xl"]};
  animation: ${D} 0.7s ease-out;
`,jt=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing["4xl"]};
  align-items: start;

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${e=>e.theme.spacing["2xl"]};
  }
`,Lt=u.div`
  animation: ${D} 0.8s ease-out;
`,_t=u.p`
  font-size: ${e=>e.theme.fontSizes.base};
  color: ${e=>e.theme.colors.textSecondary};
  line-height: 1.85;
  margin-bottom: ${e=>e.theme.spacing.lg};

  &:last-of-type {
    margin-bottom: ${e=>e.theme.spacing["2xl"]};
  }
`,At=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid ${e=>e.theme.colors.border};

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Tt=u.div`
  padding: ${e=>e.theme.spacing.xl};
  border-right: 1px solid ${e=>e.theme.colors.border};
  text-align: left;

  &:last-child { border-right: none; }

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    border-right: none;
    border-bottom: 1px solid ${e=>e.theme.colors.border};

    &:last-child { border-bottom: none; }
  }
`,Nt=u.div`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes["3xl"]};
  font-weight: ${e=>e.theme.fontWeights.bold};
  color: ${e=>e.theme.colors.text};
  letter-spacing: -0.03em;
`,Dt=u.div`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 4px;
`,Mt=u.div`
  animation: ${D} 1s ease-out;
`,Ot=u.h3`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.sm};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: ${e=>e.theme.spacing.xl};
  padding-bottom: ${e=>e.theme.spacing.md};
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,It=u.div`
  margin-bottom: ${e=>e.theme.spacing.xl};
`,Rt=u.div`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: ${e=>e.theme.spacing.md};
`,Bt=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>e.theme.spacing.sm};
`,Wt=u.span`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textSecondary};
  border: 1px solid ${e=>e.theme.colors.border};
  padding: 3px ${e=>e.theme.spacing.sm};
  letter-spacing: 0.05em;
  transition: all 0.2s;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.text};
  }
`,Ut=()=>{const t=_.c(57),{t:n}=e();let r,a,o,l,i,s,c,u,d,f,m,p,h,g;if(t[0]!==n){const e={frontend:["React","Angular","TypeScript","Vue"],backend:["Java","PHP","Python","Node.js"],database:["PostgreSQL","MySQL","MongoDB","Redis","Oracle"],tools:["Docker","AWS","GCP","Linux","K8s","CI/CD"]};l=Ct,f="about",o=Et,t[11]===Symbol.for("react.memo_cache_sentinel")?(u=x.jsx(Pt,{children:"about feilen"}),t[11]=u):u=t[11];const m=n("about.title");t[12]!==m?(d=x.jsx(Ft,{children:m}),t[12]=m,t[13]=d):d=t[13],a=jt;const p=n("about.text1");let h;t[14]!==p?(h=x.jsx(_t,{children:p}),t[14]=p,t[15]=h):h=t[15];const g=n("about.text2");let b;t[16]!==g?(b=x.jsx(_t,{children:g}),t[16]=g,t[17]=b):b=t[17];const y=n("about.text3");let v,k;t[18]!==y?(v=x.jsx(_t,{children:y}),t[18]=y,t[19]=v):v=t[19],t[20]===Symbol.for("react.memo_cache_sentinel")?(k=x.jsx(Nt,{children:"7+"}),t[20]=k):k=t[20];const S=n("about.stats.years");let w,$;t[21]!==S?(w=x.jsxs(Tt,{children:[k,x.jsx(Dt,{children:S})]}),t[21]=S,t[22]=w):w=t[22],t[23]===Symbol.for("react.memo_cache_sentinel")?($=x.jsx(Nt,{children:"10+"}),t[23]=$):$=t[23];const z=n("about.stats.projects");let C,E;t[24]!==z?(C=x.jsxs(Tt,{children:[$,x.jsx(Dt,{children:z})]}),t[24]=z,t[25]=C):C=t[25],t[26]===Symbol.for("react.memo_cache_sentinel")?(E=x.jsx(Nt,{children:"10+"}),t[26]=E):E=t[26];const P=n("about.stats.clients");let F,j;t[27]!==P?(F=x.jsxs(Tt,{children:[E,x.jsx(Dt,{children:P})]}),t[27]=P,t[28]=F):F=t[28],t[29]!==w||t[30]!==C||t[31]!==F?(j=x.jsxs(At,{children:[w,C,F]}),t[29]=w,t[30]=C,t[31]=F,t[32]=j):j=t[32],t[33]!==b||t[34]!==v||t[35]!==j||t[36]!==h?(c=x.jsxs(Lt,{children:[h,b,v,j]}),t[33]=b,t[34]=v,t[35]=j,t[36]=h,t[37]=c):c=t[37],r=Mt;const L=n("about.pillars.title");t[38]!==L?(i=x.jsx(Ot,{children:L}),t[38]=L,t[39]=i):i=t[39],s=Object.entries(e).map(e=>{const[t,r]=e;return x.jsxs(It,{children:[x.jsx(Rt,{children:n(`about.pillars.${"tools"===t?"tools":t}`)}),x.jsx(Bt,{children:r.map(Vt)})]},t)}),t[0]=n,t[1]=r,t[2]=a,t[3]=o,t[4]=l,t[5]=i,t[6]=s,t[7]=c,t[8]=u,t[9]=d,t[10]=f}else r=t[1],a=t[2],o=t[3],l=t[4],i=t[5],s=t[6],c=t[7],u=t[8],d=t[9],f=t[10];return t[40]!==r||t[41]!==i||t[42]!==s?(m=x.jsxs(r,{children:[i,s]}),t[40]=r,t[41]=i,t[42]=s,t[43]=m):m=t[43],t[44]!==a||t[45]!==c||t[46]!==m?(p=x.jsxs(a,{children:[c,m]}),t[44]=a,t[45]=c,t[46]=m,t[47]=p):p=t[47],t[48]!==o||t[49]!==u||t[50]!==d||t[51]!==p?(h=x.jsxs(o,{children:[u,d,p]}),t[48]=o,t[49]=u,t[50]=d,t[51]=p,t[52]=h):h=t[52],t[53]!==l||t[54]!==f||t[55]!==h?(g=x.jsx(l,{id:f,children:h}),t[53]=l,t[54]=f,t[55]=h,t[56]=g):g=t[56],g};function Vt(e){return x.jsx(Wt,{children:e},e)}const Ht=c`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,Qt=u.section`
  padding: ${e=>e.theme.spacing["4xl"]} ${e=>e.theme.spacing.xl};
  background: ${e=>e.theme.colors.background};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${e=>e.theme.colors.border}, transparent);
  }

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    padding: ${e=>e.theme.spacing["3xl"]} ${e=>e.theme.spacing.md};
  }
`,qt=u.div`
  max-width: 1200px;
  margin: 0 auto;
`,Yt=u.p`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${e=>e.theme.spacing.md};
  animation: ${Ht} 0.6s ease-out;

  &::before { content: '// '; }
`,Gt=u.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${e=>e.theme.colors.text};
  font-weight: ${e=>e.theme.fontWeights.bold};
  letter-spacing: -0.03em;
  margin-bottom: ${e=>e.theme.spacing["3xl"]};
  animation: ${Ht} 0.7s ease-out;
`,Kt=u.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  border: 1px solid ${e=>e.theme.colors.border};
  animation: ${Ht} 0.8s ease-out;

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`,Xt=u.div`
  background: ${e=>e.theme.colors.backgroundCard};
  border-right: 1px solid ${e=>e.theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${e=>e.theme.spacing["3xl"]} ${e=>e.theme.spacing.xl};
  gap: ${e=>e.theme.spacing.lg};

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    border-right: none;
    border-bottom: 1px solid ${e=>e.theme.colors.border};
    padding: ${e=>e.theme.spacing["2xl"]} ${e=>e.theme.spacing.xl};
  }
`,Jt=u.div`
  width: 96px;
  height: 96px;
  background: ${e=>e.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${e=>e.theme.fonts.mono};
  font-size: 2rem;
  font-weight: ${e=>e.theme.fontWeights.bold};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: -0.04em;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
`,Zt=u.h3`
  font-size: ${e=>e.theme.fontSizes.xl};
  font-weight: ${e=>e.theme.fontWeights.bold};
  color: ${e=>e.theme.colors.text};
  letter-spacing: -0.02em;
  text-align: center;
`,en=u.p`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
`,tn=u.a`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  background: ${e=>e.theme.colors.text};
  color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.lg};
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%);
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: ${e=>e.theme.colors.primaryDark};
  }

  svg { font-size: ${e=>e.theme.fontSizes.base}; }
`,nn=u.div`
  padding: ${e=>e.theme.spacing["3xl"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${e=>e.theme.spacing.xl};

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    padding: ${e=>e.theme.spacing["2xl"]} ${e=>e.theme.spacing.xl};
  }
`,rn=u.p`
  font-size: ${e=>e.theme.fontSizes.base};
  color: ${e=>e.theme.colors.textSecondary};
  line-height: 1.85;
`,an=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
  background: ${e=>e.theme.colors.border};
  border: 1px solid ${e=>e.theme.colors.border};
`,on=u.div`
  flex: 1;
  min-width: 140px;
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  background: ${e=>e.theme.colors.backgroundCard};
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ln=u.span`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`,sn=u.span`
  font-size: ${e=>e.theme.fontSizes.sm};
  color: ${e=>e.theme.colors.text};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,cn=()=>{const e=_.c(10);let t,n,r,a,o,l,i,s,c,u;return e[0]===Symbol.for("react.memo_cache_sentinel")?(t=x.jsx(Yt,{children:"founder & leadership"}),n=x.jsx(Gt,{children:"The Person Behind It"}),e[0]=t,e[1]=n):(t=e[0],n=e[1]),e[2]===Symbol.for("react.memo_cache_sentinel")?(r=x.jsx(Jt,{children:"JE"}),a=x.jsx(Zt,{children:"João Emanuel"}),o=x.jsx(en,{children:"Founder"}),e[2]=r,e[3]=a,e[4]=o):(r=e[2],a=e[3],o=e[4]),e[5]===Symbol.for("react.memo_cache_sentinel")?(l=x.jsxs(Xt,{children:[r,a,o,x.jsxs(tn,{href:"https://www.linkedin.com/in/joao-emanuel-752778174/",target:"_blank",rel:"noopener noreferrer",children:[x.jsx(ce,{}),"LinkedIn"]})]}),e[5]=l):l=e[5],e[6]===Symbol.for("react.memo_cache_sentinel")?(i=x.jsx(rn,{children:"Senior software engineer with 7+ years of hands-on experience across fintech, ERP, SaaS, and mobile platforms. Founded Feilen Solutions IT to channel deep technical expertise into a focused delivery operation — building software that works at scale and stands up in production."}),s=x.jsx(rn,{children:"Has led full-cycle deliveries for clients in Portugal, Brussels, Spain, and Brazil, working across backend, frontend, and infrastructure. Core background in PHP, Java, and Python with growing focus on AI-augmented systems and modern cloud architectures."}),e[6]=i,e[7]=s):(i=e[6],s=e[7]),e[8]===Symbol.for("react.memo_cache_sentinel")?(c=x.jsxs(on,{children:[x.jsx(ln,{children:"Location"}),x.jsx(sn,{children:"São Paulo, Brasil"})]}),e[8]=c):c=e[8],e[9]===Symbol.for("react.memo_cache_sentinel")?(u=x.jsx(Qt,{id:"founder",children:x.jsxs(qt,{children:[t,n,x.jsxs(Kt,{children:[l,x.jsxs(nn,{children:[i,s,x.jsxs(an,{children:[c,x.jsxs(on,{children:[x.jsx(ln,{children:"Company"}),x.jsx(sn,{children:"Feilen Solutions IT"})]})]})]})]})]})}),e[9]=u):u=e[9],u},un=u.section`
  padding: ${e=>e.theme.spacing["4xl"]} ${e=>e.theme.spacing.xl};
  background: ${e=>e.theme.colors.backgroundLight};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${e=>e.theme.colors.border}, transparent);
  }

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    padding: ${e=>e.theme.spacing["3xl"]} ${e=>e.theme.spacing.md};
  }
`,dn=u.div`
  max-width: 1200px;
  margin: 0 auto;
`,fn=u.p`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${e=>e.theme.spacing.md};

  &::before { content: '// '; }
`,mn=u.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: ${e=>e.theme.colors.text};
  font-weight: ${e=>e.theme.fontWeights.bold};
  letter-spacing: -0.03em;
  margin-bottom: ${e=>e.theme.spacing.md};
  animation: ${D} 0.8s ease-out;
`,pn=u.p`
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.textMuted};
  margin-bottom: ${e=>e.theme.spacing["3xl"]};
`,hn=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border: 1px solid ${e=>e.theme.colors.border};

  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    border: none;
    gap: 1px;
    background: ${e=>e.theme.colors.border};
  }
`,gn=u.div`
  background: ${e=>e.$featured?e.theme.colors.backgroundCard:e.theme.colors.background};
  padding: ${e=>e.theme.spacing["2xl"]};
  border-right: 1px solid ${e=>e.theme.colors.border};
  position: relative;
  transition: background 0.2s;
  animation: ${D} 0.8s ease-out both;

  &:last-child { border-right: none; }

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }

  ${e=>e.$featured&&`\n    border-top: 2px solid ${e.theme.colors.primary};\n  `}

  &:hover {
    background: ${e=>e.theme.colors.backgroundCard};
  }

  @media (max-width: ${e=>e.theme.breakpoints.lg}) {
    border-right: none;
  }
`,bn=u.div`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: ${e=>e.theme.spacing.md};
  border: 1px solid ${e=>e.theme.colors.border};
  display: inline-block;
  padding: 2px ${e=>e.theme.spacing.sm};
`,yn=u.h3`
  font-size: ${e=>e.theme.fontSizes["2xl"]};
  font-weight: ${e=>e.theme.fontWeights.bold};
  color: ${e=>e.theme.colors.text};
  letter-spacing: -0.02em;
  margin-bottom: ${e=>e.theme.spacing.sm};
`,vn=u.p`
  font-size: ${e=>e.theme.fontSizes.sm};
  color: ${e=>e.theme.colors.textMuted};
  margin-bottom: ${e=>e.theme.spacing.md};
  line-height: 1.6;
`,xn=u.p`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.05em;
  margin-bottom: ${e=>e.theme.spacing.xl};
  padding: ${e=>e.theme.spacing.sm};
  border-left: 2px solid ${e=>e.theme.colors.border};
`,kn=u.div`
  height: 1px;
  background: ${e=>e.theme.colors.border};
  margin-bottom: ${e=>e.theme.spacing.xl};
`,Sn=u.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.md};
  margin-bottom: ${e=>e.theme.spacing["2xl"]};
`,wn=u.li`
  display: flex;
  align-items: flex-start;
  gap: ${e=>e.theme.spacing.md};
  font-size: ${e=>e.theme.fontSizes.sm};
  color: ${e=>e.theme.colors.textSecondary};
  line-height: 1.5;

  svg {
    color: ${e=>e.theme.colors.textMuted};
    flex-shrink: 0;
    margin-top: 3px;
  }
`,$n=u.a`
  display: block;
  width: 100%;
  text-align: center;
  padding: ${e=>e.theme.spacing.md};
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  font-weight: ${e=>e.theme.fontWeights.semibold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  background: transparent;
  color: ${e=>e.theme.colors.textSecondary};
  border: 1px solid ${e=>e.theme.colors.border};

  &:hover {
    background: ${e=>e.theme.colors.text};
    color: ${e=>e.theme.colors.background};
    border-color: ${e=>e.theme.colors.text};
  }
`,zn=[{key:"starter",featured:!1},{key:"professional",featured:!0},{key:"enterprise",featured:!1}],Cn=()=>{const t=_.c(17),{t:n}=e(),r=En;let a,o,l,i,s,c,u,d;return t[0]===Symbol.for("react.memo_cache_sentinel")?(a=x.jsx(fn,{children:"engagement"}),t[0]=a):a=t[0],t[1]!==n?(o=n("pricing.title"),t[1]=n,t[2]=o):o=t[2],t[3]!==o?(l=x.jsx(mn,{children:o}),t[3]=o,t[4]=l):l=t[4],t[5]!==n?(i=n("pricing.subtitle"),t[5]=n,t[6]=i):i=t[6],t[7]!==i?(s=x.jsx(pn,{children:i}),t[7]=i,t[8]=s):s=t[8],t[9]!==n?(c=zn.map(e=>{const{key:t,featured:a}=e;return x.jsxs(gn,{$featured:a,children:[a&&x.jsx(bn,{children:n("pricing.popular")}),x.jsx(yn,{children:n(`pricing.${t}.name`)}),x.jsx(vn,{children:n(`pricing.${t}.description`)}),x.jsx(xn,{children:n(`pricing.${t}.note`)}),x.jsx(kn,{}),x.jsx(Sn,{children:n(`pricing.${t}.features`,{returnObjects:!0}).map(Pn)}),x.jsx($n,{onClick:r,children:n("pricing.cta")})]},t)}),t[9]=n,t[10]=c):c=t[10],t[11]!==c?(u=x.jsx(hn,{children:c}),t[11]=c,t[12]=u):u=t[12],t[13]!==l||t[14]!==s||t[15]!==u?(d=x.jsx(un,{id:"pricing",children:x.jsxs(dn,{children:[a,l,s,u]})}),t[13]=l,t[14]=s,t[15]=u,t[16]=d):d=t[16],d};function En(){document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}function Pn(e,t){return x.jsxs(wn,{children:[x.jsx(de,{size:10}),e]},t)}const Fn=u.section`
  padding: ${e=>e.theme.spacing["4xl"]} ${e=>e.theme.spacing.xl};
  background-color: ${e=>e.theme.colors.backgroundLight};
  position: relative;

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    padding: ${e=>e.theme.spacing["3xl"]} ${e=>e.theme.spacing.md};
  }
`,jn=u.div`
  max-width: 1280px;
  margin: 0 auto;
`,Ln=u.div`
  text-align: center;
  margin-bottom: ${e=>e.theme.spacing["3xl"]};
`,_n=u.h2`
  margin-bottom: ${e=>e.theme.spacing.md};
  animation: ${D} 0.8s ease-out;
`,An=u.p`
  font-size: ${e=>e.theme.fontSizes.lg};
  color: ${e=>e.theme.colors.textMuted};
  max-width: 600px;
  margin: 0 auto;
  animation: ${D} 1s ease-out;
`,Tn=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${e=>e.theme.spacing["3xl"]};

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${e=>e.theme.spacing["2xl"]};
  }
`,Nn=u.div`
  animation: ${D} 1.2s ease-out;
`,Dn=u.h3`
  margin-bottom: ${e=>e.theme.spacing.xl};
  color: ${e=>e.theme.colors.text};
`,Mn=u.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,On=u.a`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.md};
  color: ${e=>e.theme.colors.textSecondary};
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.backgroundCard};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.lg};
  transition: all ${e=>e.theme.transitions.base};

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    background: ${e=>e.theme.colors.primary}11;
    color: ${e=>e.theme.colors.primary};
    transform: translateX(8px);
    box-shadow: 0 5px 20px ${e=>e.theme.colors.primary}33;
  }

  svg {
    font-size: ${e=>e.theme.fontSizes.xl};
    color: ${e=>e.theme.colors.primary};
    transition: transform ${e=>e.theme.transitions.base};
  }

  &:hover svg {
    transform: scale(1.2) rotate(5deg);
  }
`,In=u.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.xs};
`,Rn=u.span`
  font-size: ${e=>e.theme.fontSizes.sm};
  color: ${e=>e.theme.colors.textMuted};
`,Bn=u.span`
  font-size: ${e=>e.theme.fontSizes.base};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,Wn=u.div`
  animation: ${D} 1.4s ease-out;
`,Un=u.form`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.lg};
`,Vn=u.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,Hn=u.label`
  color: ${e=>e.theme.colors.textSecondary};
  font-size: ${e=>e.theme.fontSizes.sm};
  font-weight: ${e=>e.theme.fontWeights.medium};
`,Qn=u.input`
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.background};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.lg};
  color: ${e=>e.theme.colors.text};
  font-size: ${e=>e.theme.fontSizes.base};
  transition: all ${e=>e.theme.transitions.base};

  &:focus {
    border-color: ${e=>e.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px ${e=>e.theme.colors.primary}33;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }
`,qn=u.textarea`
  padding: ${e=>e.theme.spacing.md};
  background: ${e=>e.theme.colors.background};
  border: 1px solid ${e=>e.theme.colors.border};
  border-radius: ${e=>e.theme.borderRadius.lg};
  color: ${e=>e.theme.colors.text};
  font-size: ${e=>e.theme.fontSizes.base};
  min-height: 150px;
  resize: vertical;
  transition: all ${e=>e.theme.transitions.base};
  font-family: ${e=>e.theme.fonts.primary};

  &:focus {
    border-color: ${e=>e.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px ${e=>e.theme.colors.primary}33;
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textSecondary};
  }
`,Yn=u.button`
  background: ${e=>e.theme.colors.text};
  color: ${e=>e.theme.colors.background};
  padding: ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.xl};
  border: none;
  font-size: ${e=>e.theme.fontSizes.sm};
  font-weight: ${e=>e.theme.fontWeights.bold};
  font-family: ${e=>e.theme.fonts.primary};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all ${e=>e.theme.transitions.base};
  cursor: pointer;
  clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);

  &:hover {
    background: ${e=>e.theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,Gn=u.div`
  padding: ${e=>e.theme.spacing.md};
  background: transparent;
  border: 1px solid ${e=>e.theme.colors.border};
  color: ${e=>e.theme.colors.textSecondary};
  text-align: center;
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.sm};
  letter-spacing: 0.05em;
`,Kn=()=>{const{t:n}=e(),[r,a]=t.useState({name:"",email:"",subject:"",message:""}),[o,l]=t.useState(!1),[i,s]=t.useState(!1),c=e=>{a({...r,[e.target.name]:e.target.value})};return x.jsx(Fn,{id:"contact",children:x.jsxs(jn,{children:[x.jsxs(Ln,{children:[x.jsx(_n,{children:n("contact.title")}),x.jsx(An,{children:n("contact.subtitle")})]}),x.jsxs(Tn,{children:[x.jsxs(Nn,{children:[x.jsx(Dn,{children:n("contact.info.title")}),x.jsxs(Mn,{children:[x.jsxs(On,{href:`mailto:${We}`,children:[x.jsx(me,{}),x.jsxs(In,{children:[x.jsx(Rn,{children:n("contact.info.email")}),x.jsx(Bn,{children:We})]})]}),x.jsxs(On,{as:"div",children:[x.jsx(ge,{}),x.jsxs(In,{children:[x.jsx(Rn,{children:n("contact.info.location")}),x.jsx(Bn,{children:Ue})]})]})]})]}),x.jsx(Wn,{children:x.jsxs(Un,{onSubmit:async e=>{e.preventDefault(),s(!0);try{if((await fetch("https://formsubmit.co/ajax/joaoemanuel.slima@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:r.name,email:r.email,subject:r.subject,message:r.message,_captcha:"false"})})).ok)l(!0),a({name:"",email:"",subject:"",message:""}),setTimeout(()=>{l(!1)},5e3);else{const e=`mailto:${We}?subject=${encodeURIComponent(r.subject)}&body=${encodeURIComponent(`Nome: ${r.name}\nEmail: ${r.email}\n\n${r.message}`)}`;window.location.href=e}}catch(t){const e=`mailto:${We}?subject=${encodeURIComponent(r.subject)}&body=${encodeURIComponent(`Nome: ${r.name}\nEmail: ${r.email}\n\n${r.message}`)}`;window.location.href=e}finally{s(!1)}},children:[x.jsxs(Vn,{children:[x.jsx(Hn,{htmlFor:"name",children:n("contact.form.name")}),x.jsx(Qn,{type:"text",id:"name",name:"name",value:r.name,onChange:c,placeholder:n("contact.form.namePlaceholder"),required:!0})]}),x.jsxs(Vn,{children:[x.jsx(Hn,{htmlFor:"email",children:n("contact.form.email")}),x.jsx(Qn,{type:"email",id:"email",name:"email",value:r.email,onChange:c,placeholder:n("contact.form.emailPlaceholder"),required:!0})]}),x.jsxs(Vn,{children:[x.jsx(Hn,{htmlFor:"subject",children:n("contact.form.subject")}),x.jsx(Qn,{type:"text",id:"subject",name:"subject",value:r.subject,onChange:c,placeholder:n("contact.form.subjectPlaceholder"),required:!0})]}),x.jsxs(Vn,{children:[x.jsx(Hn,{htmlFor:"message",children:n("contact.form.message")}),x.jsx(qn,{id:"message",name:"message",value:r.message,onChange:c,placeholder:n("contact.form.messagePlaceholder"),required:!0})]}),o&&x.jsxs(Gn,{children:["✅ ",n("contact.form.success")]}),x.jsx(Yn,{type:"submit",disabled:i,children:i?"⏳ Enviando...":n("contact.form.submit")})]})})]})]})})},Xn=u.footer`
  background: ${e=>e.theme.colors.background};
  border-top: 1px solid ${e=>e.theme.colors.border};
  padding: ${e=>e.theme.spacing["3xl"]} ${e=>e.theme.spacing.xl} ${e=>e.theme.spacing.xl};

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    padding: ${e=>e.theme.spacing["2xl"]} ${e=>e.theme.spacing.md} ${e=>e.theme.spacing.lg};
  }
`,Jn=u.div`
  max-width: 1200px;
  margin: 0 auto;
`,Zn=u.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${e=>e.theme.spacing["2xl"]};
  margin-bottom: ${e=>e.theme.spacing["2xl"]};

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,er=u.div``,tr=u.div`
  margin-bottom: ${e=>e.theme.spacing.md};
`,nr=u.span`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xl};
  font-weight: ${e=>e.theme.fontWeights.bold};
  color: ${e=>e.theme.colors.text};
  letter-spacing: -0.02em;

  span { color: ${e=>e.theme.colors.textMuted}; }
`,rr=u.p`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 4px;
`,ar=u.p`
  font-size: ${e=>e.theme.fontSizes.sm};
  color: ${e=>e.theme.colors.textMuted};
  line-height: 1.7;
  margin-bottom: ${e=>e.theme.spacing.lg};
  max-width: 360px;
`,or=u.div`
  display: flex;
  gap: ${e=>e.theme.spacing.md};
`,lr=u.a`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${e=>e.theme.colors.border};
  color: ${e=>e.theme.colors.textMuted};
  font-size: ${e=>e.theme.fontSizes.base};
  transition: all 0.2s;

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.text};
    background: ${e=>e.theme.colors.backgroundCard};
  }
`,ir=u.div`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: ${e=>e.theme.spacing.lg};
  padding-bottom: ${e=>e.theme.spacing.sm};
  border-bottom: 1px solid ${e=>e.theme.colors.border};
`,sr=u.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sm};
`,cr=u.a`
  font-size: ${e=>e.theme.fontSizes.sm};
  color: ${e=>e.theme.colors.textMuted};
  cursor: pointer;
  transition: color 0.2s;
  text-decoration: none;

  &:hover { color: ${e=>e.theme.colors.text}; }
`,ur=u.div`
  height: 1px;
  background: ${e=>e.theme.colors.border};
  margin-bottom: ${e=>e.theme.spacing.lg};
`,dr=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${e=>e.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${e=>e.theme.spacing.sm};
    text-align: center;
  }
`,fr=u.p`
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.05em;
`,mr=u.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${e=>e.theme.fonts.mono};
  font-size: ${e=>e.theme.fontSizes.xs};
  color: ${e=>e.theme.colors.textMuted};
  letter-spacing: 0.08em;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: #6b7280;
    border-radius: 50%;
    display: inline-block;
  }
`,pr=()=>{const t=_.c(46),{t:n}=e();let r;t[0]===Symbol.for("react.memo_cache_sentinel")?(r=(new Date).getFullYear(),t[0]=r):r=t[0];const a=r,o=hr;let l,i,s,c,u,d,f,m,p,h,g,b,y,v,k,S,w,$,z,C,E,P,F,j,L,A,T,N;return t[1]===Symbol.for("react.memo_cache_sentinel")?(l=x.jsxs(tr,{children:[x.jsxs(nr,{children:["FLN",x.jsx("span",{children:"."})]}),x.jsx(rr,{children:"Solutions IT"})]}),i=x.jsx(ar,{children:"Software delivery and IT outsourcing. Scalable, secure, and production-ready systems — engineered by senior professionals."}),t[1]=l,t[2]=i):(l=t[1],i=t[2]),t[3]===Symbol.for("react.memo_cache_sentinel")?(s=x.jsx(lr,{href:"https://linkedin.com",target:"_blank","aria-label":"LinkedIn",children:x.jsx(ce,{})}),t[3]=s):s=t[3],t[4]===Symbol.for("react.memo_cache_sentinel")?(c=x.jsx(lr,{href:"https://github.com",target:"_blank","aria-label":"GitHub",children:x.jsx(se,{})}),t[4]=c):c=t[4],t[5]===Symbol.for("react.memo_cache_sentinel")?(u=x.jsxs(er,{children:[l,i,x.jsxs(or,{children:[s,c,x.jsx(lr,{href:"mailto:contact@feilen.tech","aria-label":"Email",children:x.jsx(me,{})})]})]}),t[5]=u):u=t[5],t[6]===Symbol.for("react.memo_cache_sentinel")?(d=x.jsx(ir,{children:"Navigate"}),t[6]=d):d=t[6],t[7]===Symbol.for("react.memo_cache_sentinel")?(f=()=>o("home"),t[7]=f):f=t[7],t[8]!==n?(m=n("nav.home"),t[8]=n,t[9]=m):m=t[9],t[10]!==m?(p=x.jsx(cr,{onClick:f,children:m}),t[10]=m,t[11]=p):p=t[11],t[12]===Symbol.for("react.memo_cache_sentinel")?(h=()=>o("services"),t[12]=h):h=t[12],t[13]!==n?(g=n("nav.services"),t[13]=n,t[14]=g):g=t[14],t[15]!==g?(b=x.jsx(cr,{onClick:h,children:g}),t[15]=g,t[16]=b):b=t[16],t[17]===Symbol.for("react.memo_cache_sentinel")?(y=()=>o("about"),t[17]=y):y=t[17],t[18]!==n?(v=n("nav.about"),t[18]=n,t[19]=v):v=t[19],t[20]!==v?(k=x.jsx(cr,{onClick:y,children:v}),t[20]=v,t[21]=k):k=t[21],t[22]===Symbol.for("react.memo_cache_sentinel")?(S=()=>o("pricing"),t[22]=S):S=t[22],t[23]!==n?(w=n("nav.pricing"),t[23]=n,t[24]=w):w=t[24],t[25]!==w?($=x.jsx(cr,{onClick:S,children:w}),t[25]=w,t[26]=$):$=t[26],t[27]===Symbol.for("react.memo_cache_sentinel")?(z=()=>o("contact"),t[27]=z):z=t[27],t[28]!==n?(C=n("nav.contact"),t[28]=n,t[29]=C):C=t[29],t[30]!==C?(E=x.jsx(cr,{onClick:z,children:C}),t[30]=C,t[31]=E):E=t[31],t[32]!==b||t[33]!==k||t[34]!==$||t[35]!==E||t[36]!==p?(P=x.jsxs(er,{children:[d,x.jsxs(sr,{children:[p,b,k,$,E]})]}),t[32]=b,t[33]=k,t[34]=$,t[35]=E,t[36]=p,t[37]=P):P=t[37],t[38]===Symbol.for("react.memo_cache_sentinel")?(F=x.jsx(ir,{children:"Contact"}),t[38]=F):F=t[38],t[39]===Symbol.for("react.memo_cache_sentinel")?(j=x.jsxs(er,{children:[F,x.jsx(sr,{children:x.jsx(cr,{href:"mailto:contact@feilen.tech",children:"contact@feilen.tech"})})]}),t[39]=j):j=t[39],t[40]!==P?(L=x.jsxs(Zn,{children:[u,P,j]}),t[40]=P,t[41]=L):L=t[41],t[42]===Symbol.for("react.memo_cache_sentinel")?(A=x.jsx(ur,{}),t[42]=A):A=t[42],t[43]===Symbol.for("react.memo_cache_sentinel")?(T=x.jsxs(dr,{children:[x.jsxs(fr,{children:["© ",a," Feilen Solutions IT. All rights reserved.  ·  CNPJ 64.634.091/0001-08"]}),x.jsx(mr,{children:"All systems operational"})]}),t[43]=T):T=t[43],t[44]!==L?(N=x.jsx(Xn,{children:x.jsxs(Jn,{children:[L,A,T]})}),t[44]=L,t[45]=N):N=t[45],N};function hr(e){return document.getElementById(e)?.scrollIntoView({behavior:"smooth"})}const gr=u.div`
  position: fixed;
  bottom: ${e=>e.theme.spacing.xl};
  right: ${e=>e.theme.spacing.xl};
  z-index: ${e=>e.theme.zIndex.fixed};

  @media (max-width: ${e=>e.theme.breakpoints.md}) {
    bottom: ${e=>e.theme.spacing.lg};
    right: ${e=>e.theme.spacing.lg};
  }
`,br=u.button`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sm};
  background: ${e=>e.theme.colors.backgroundCard};
  border: 1px solid ${e=>e.theme.colors.border};
  color: ${e=>e.theme.colors.textSecondary};
  padding: ${e=>e.theme.spacing.sm} ${e=>e.theme.spacing.md};
  border-radius: ${e=>e.theme.borderRadius.full};
  font-size: ${e=>e.theme.fontSizes.sm};
  font-weight: ${e=>e.theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${e=>e.theme.transitions.base};
  box-shadow: ${e=>e.theme.shadows.lg};

  &:hover {
    border-color: ${e=>e.theme.colors.primary};
    color: ${e=>e.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.xl};
  }

  svg {
    font-size: ${e=>e.theme.fontSizes.base};
  }
`,yr=()=>{const t=_.c(6),{i18n:n}=e();let r;t[0]!==n?(r=()=>{const e="pt"===n.language?"en":"pt";n.changeLanguage(e)},t[0]=n,t[1]=r):r=t[1];const a=r,o="pt"===n.language?"PT":"EN";let l,i;return t[2]===Symbol.for("react.memo_cache_sentinel")?(l=x.jsx(he,{}),t[2]=l):l=t[2],t[3]!==o||t[4]!==a?(i=x.jsx(gr,{children:x.jsxs(br,{onClick:a,"aria-label":"Change language",children:[l,o]})}),t[3]=o,t[4]=a,t[5]=i):i=t[5],i},vr=e=>{const n=_.c(57),{onThemeChange:r,isDarkMode:a,onToggleDarkMode:o}=e,[l,i]=t.useState(!1),[s,c]=t.useState(0);let u,d,f;n[0]===Symbol.for("react.memo_cache_sentinel")?(u=()=>{const e=localStorage.getItem("selectedPalette");if(e){const t=parseInt(e,10);c(t)}},d=[],n[0]=u,n[1]=d):(u=n[0],d=n[1]),t.useEffect(u,d),n[2]!==r?(f=e=>{c(e),localStorage.setItem("selectedPalette",e.toString()),r(e)},n[2]=r,n[3]=f):f=n[3];const m=f,p=O[s],h=a?p.dark:p.light;let g;n[4]!==l?(g=()=>i(!l),n[4]=l,n[5]=g):g=n[5];const b=l?"300px":"0",y=`linear-gradient(135deg, ${p.colors.primary}, ${p.colors.secondary})`;let v,k;n[6]!==h.text||n[7]!==b||n[8]!==y?(v={position:"fixed",top:"50%",right:b,transform:"translateY(-50%)",width:"44px",height:"44px",background:y,border:"none",borderRadius:"8px 0 0 8px",cursor:"pointer",zIndex:1e4,color:h.text,fontSize:"20px",boxShadow:"-4px 0 15px rgba(0,0,0,0.4)",transition:"right 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center"},n[6]=h.text,n[7]=b,n[8]=y,n[9]=v):v=n[9],n[10]!==g||n[11]!==v?(k=x.jsx("button",{onClick:g,style:v,title:"Theme selector",children:"🎨"}),n[10]=g,n[11]=v,n[12]=k):k=n[12];const S=l?"0":"-300px",w=`1px solid ${h.border}`,$=`1px solid ${h.border}`,z=`1px solid ${h.border}`;let C,E;n[13]!==h.surface||n[14]!==w||n[15]!==$||n[16]!==z||n[17]!==S?(C={position:"fixed",top:"50%",right:S,transform:"translateY(-50%)",width:"300px",maxHeight:"80vh",background:h.surface,borderTop:w,borderBottom:$,borderLeft:z,borderRadius:"12px 0 0 12px",boxShadow:"-4px 0 24px rgba(0,0,0,0.4)",transition:"right 0.3s ease",zIndex:9999,overflowY:"auto",padding:"20px"},n[13]=h.surface,n[14]=w,n[15]=$,n[16]=z,n[17]=S,n[18]=C):C=n[18],n[19]!==h.text?(E=x.jsx("h3",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:"12px",letterSpacing:"0.15em",textTransform:"uppercase",color:h.text,marginBottom:"16px"},children:"// PALETTE"}),n[19]=h.text,n[20]=E):E=n[20];const P=`1px solid ${h.border}`;let F,j;n[21]!==P?(F={display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"20px",paddingBottom:"16px",borderBottom:P},n[21]=P,n[22]=F):F=n[22],n[23]!==h.textSecondary?(j={color:h.textSecondary,fontSize:"13px",fontFamily:"IBM Plex Mono, monospace"},n[23]=h.textSecondary,n[24]=j):j=n[24];const L=a?"Dark":"Light";let A;n[25]!==j||n[26]!==L?(A=x.jsx("span",{style:j,children:L}),n[25]=j,n[26]=L,n[27]=A):A=n[27];const T=`1px solid ${h.border}`;let N;n[28]!==h.text||n[29]!==T?(N={background:"transparent",border:T,padding:"6px 14px",cursor:"pointer",color:h.text,fontSize:"18px",fontFamily:"IBM Plex Mono, monospace",transition:"all 0.2s"},n[28]=h.text,n[29]=T,n[30]=N):N=n[30];const D=a?"🌙":"☀️";let M,I,R,B,W,U,V;return n[31]!==o||n[32]!==N||n[33]!==D?(M=x.jsx("button",{onClick:o,style:N,children:D}),n[31]=o,n[32]=N,n[33]=D,n[34]=M):M=n[34],n[35]!==F||n[36]!==A||n[37]!==M?(I=x.jsxs("div",{style:F,children:[A,M]}),n[35]=F,n[36]=A,n[37]=M,n[38]=I):I=n[38],n[39]===Symbol.for("react.memo_cache_sentinel")?(R={display:"flex",flexDirection:"column",gap:"8px"},n[39]=R):R=n[39],n[40]!==s||n[41]!==p.colors.primary||n[42]!==m||n[43]!==h.border||n[44]!==h.text||n[45]!==h.textSecondary?(B=O.map((e,t)=>x.jsxs("button",{onClick:()=>m(t),style:{background:s===t?`${p.colors.primary}22`:"transparent",border:`1px solid ${s===t?p.colors.primary:h.border}`,padding:"10px 12px",cursor:"pointer",textAlign:"left",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"10px"},children:[x.jsxs("div",{style:{display:"flex",gap:"4px",flexShrink:0},children:[x.jsx("div",{style:{width:"18px",height:"18px",background:e.colors.primary,border:`1px solid ${h.border}`}}),x.jsx("div",{style:{width:"18px",height:"18px",background:e.colors.secondary,border:`1px solid ${h.border}`}}),x.jsx("div",{style:{width:"18px",height:"18px",background:e.colors.accent,border:`1px solid ${h.border}`}})]}),x.jsxs("span",{style:{fontFamily:"IBM Plex Mono, monospace",fontSize:"11px",letterSpacing:"0.08em",color:s===t?h.text:h.textSecondary,textTransform:"uppercase"},children:[e.name," ",s===t?"◆":""]})]},t)),n[40]=s,n[41]=p.colors.primary,n[42]=m,n[43]=h.border,n[44]=h.text,n[45]=h.textSecondary,n[46]=B):B=n[46],n[47]!==B?(W=x.jsx("div",{style:R,children:B}),n[47]=B,n[48]=W):W=n[48],n[49]!==C||n[50]!==E||n[51]!==I||n[52]!==W?(U=x.jsxs("div",{style:C,children:[E,I,W]}),n[49]=C,n[50]=E,n[51]=I,n[52]=W,n[53]=U):U=n[53],n[54]!==U||n[55]!==k?(V=x.jsxs(x.Fragment,{children:[k,U]}),n[54]=U,n[55]=k,n[56]=V):V=n[56],V};function xr(){const e=_.c(23),[n,r]=t.useState(wr),[a,o]=t.useState(Sr);let l,i;e[0]!==a?(l=()=>{localStorage.setItem("isDarkMode",String(a))},i=[a],e[0]=a,e[1]=l,e[2]=i):(l=e[1],i=e[2]),t.useEffect(l,i);const s=O[n]??O[0],c=a?s.dark:s.light,u=a?`${c.background}cc`:c.surface,f=a?"#666666":"#999999";let m;e[3]!==c.background||e[4]!==c.border||e[5]!==c.surface||e[6]!==c.text||e[7]!==c.textSecondary||e[8]!==s.colors||e[9]!==u||e[10]!==f?(m={...A,colors:{...A.colors,...s.colors,background:c.background,backgroundLight:c.surface,backgroundCard:u,text:c.text,textSecondary:c.textSecondary,textMuted:f,border:c.border,borderLight:c.border}},e[3]=c.background,e[4]=c.border,e[5]=c.surface,e[6]=c.text,e[7]=c.textSecondary,e[8]=s.colors,e[9]=u,e[10]=f,e[11]=m):m=e[11];const p=m;let h,g,b,y,v,k,S,w;return e[12]===Symbol.for("react.memo_cache_sentinel")?(h=x.jsx(T,{}),g=x.jsx(G,{}),b=x.jsxs("main",{children:[x.jsx(Me,{}),x.jsx(lt,{}),x.jsx($t,{}),x.jsx(Ut,{}),x.jsx(cn,{}),x.jsx(Cn,{}),x.jsx(Kn,{})]}),y=x.jsx(pr,{}),v=x.jsx(yr,{}),e[12]=h,e[13]=g,e[14]=b,e[15]=y,e[16]=v):(h=e[12],g=e[13],b=e[14],y=e[15],v=e[16]),e[17]===Symbol.for("react.memo_cache_sentinel")?(k=()=>o(kr),e[17]=k):k=e[17],e[18]!==a?(S=x.jsx(vr,{onThemeChange:r,isDarkMode:a,onToggleDarkMode:k}),e[18]=a,e[19]=S):S=e[19],e[20]!==p||e[21]!==S?(w=x.jsxs(d,{theme:p,children:[h,g,b,y,v,S]}),e[20]=p,e[21]=S,e[22]=w):w=e[22],w}function kr(e){return!e}function Sr(){const e=localStorage.getItem("isDarkMode");return null===e||"true"===e}function wr(){const e=localStorage.getItem("selectedPalette");return e?parseInt(e,10):0}const $r={en:{translation:{nav:{home:"Home",services:"Services",pricing:"Plans",projects:"Work",about:"About",founder:"Founder",contact:"Contact"},hero:{greeting:"// FEILEN SOLUTIONS IT",title:"We Build. We Scale. We Deliver.",subtitle:"Software Delivery & IT Outsourcing",description:"Agile delivery of high-quality software. Experienced professionals across all market verticals. From custom development and mobile apps to full outsourcing — we architect, build, and guarantee scalability, security, and results.",cta:{primary:"Our Services",secondary:"Start a Project"},stats:{delivery:"Delivery",deliveryLabel:"Agile sprints, real velocity",ai:"AI-First",aiLabel:"Intelligence in every layer",scale:"Enterprise",scaleLabel:"Elastic, secure, ready"}},services:{title:"What We Do",subtitle:"End-to-end technology solutions for companies that can't afford to stop",items:[{title:"Software Delivery",description:"Complete product cycles from ideation to production. Web platforms, SaaS, ERPs and custom systems built with agile methodology — on time, on spec."},{title:"Mobile Applications",description:"Native and hybrid apps for iOS and Android engineered for performance and scale. React Native, clean architecture and pixel-perfect UI."},{title:"IT Outsourcing",description:"Plug senior engineers directly into your team. Frontend, backend, full-stack and tech leads available — without the recruitment overhead."},{title:"AI & Intelligence",description:"Our core specialty. LLM integrations, automation pipelines, predictive models and AI-powered features embedded into your product or infrastructure."},{title:"Cloud & Scalability",description:"Microservices, containerization, CI/CD and cloud-native architecture on AWS, GCP or Azure. Built to grow without breaking."},{title:"Security & Compliance",description:"Application security, penetration testing, LGPD/GDPR compliance, auth systems and data protection at every layer of the stack."}]},projects:{title:"Case Studies",subtitle:"Selected delivery highlights",viewProject:"View Case"},about:{title:"About Feilen",text1:"Feilen Solutions IT is a technology company specialized in software delivery and IT outsourcing. Founded by senior developers with 7+ years of hands-on experience across fintech, insurtech, ERP, SaaS, and corporate education.",text2:"We operate across all market verticals — from large enterprise ERPs to early-stage startups — delivering software that is scalable, secure, and production-ready. Active on national and European fronts, with presence in Brazil, Portugal, Brussels, and Spain.",text3:"Artificial Intelligence is our core differentiator. We embed intelligent automation, LLM pipelines, and data-driven features into every solution we build — not as an afterthought, but as a first-class architecture layer.",stats:{years:"Years in Market",projects:"Projects Delivered",clients:"Enterprise Clients"},pillars:{title:"Tech Stack",frontend:"Frontend",backend:"Backend",database:"Database",tools:"DevOps & Cloud"}},contact:{title:"Start a Project",subtitle:"Tell us what you need. We respond within 24h.",info:{title:"Get in Touch",email:"Email",location:"HQ"},form:{name:"Your Name",namePlaceholder:"Full name",email:"Email",emailPlaceholder:"business@company.com",subject:"Subject",subjectPlaceholder:"Project brief or inquiry",message:"Message",messagePlaceholder:"Describe your project, stack, timeline and goals...",submit:"Send Message",success:"Message sent. We will be in touch shortly."}},pricing:{title:"Engagement Models",subtitle:"Flexible delivery formats for any stage",popular:"Most Requested",cta:"Get Quote",starter:{name:"Delivery",description:"Fixed-scope project delivery",note:"Timeline: 1–8 weeks",features:["Dedicated project team","Defined scope & milestones","Weekly sprint reviews","Full source code ownership","Post-launch support (30 days)"]},professional:{name:"Outsourcing",description:"Senior engineers embedded in your team",note:"Minimum 3-month contract",features:["1–5 senior engineers","Full-stack or specialized profiles","Daily standups & async comms","Code review & documentation","Ramp-up in 5 business days","Tech lead available on demand"]},enterprise:{name:"Enterprise",description:"Full-service technology partnership",note:"Custom SLA & terms",features:["Everything in Outsourcing","Dedicated tech manager","AI features by default","Architecture consulting","Security audit included","24/7 priority support","DevOps & CI/CD pipeline"]},calculator:{title:"Estimate Your Investment",projectType:"Project Type",features:"Add-ons",urgency:"Timeline",estimate:"Investment Estimate",base:"Base Value",featuresTotal:"Add-ons",urgencyFactor:"Timeline Factor",total:"Estimated Total",requestQuote:"Request Detailed Quote",types:{landing:"Landing Page ($800)",institutional:"Corporate Website ($1,500)",ecommerce:"E-commerce ($3,500)",webapp:"Web System ($5,000)",mobile:"Mobile App ($6,000)",custom:"Custom Project"},featuresList:{auth:"Auth System (+$500)",payment:"Payment Gateway (+$800)",admin:"Admin Panel (+$600)",api:"REST/GraphQL API (+$700)",multilang:"Multi-language (+$400)",seo:"Advanced SEO (+$300)"},urgencyOptions:{urgent:"Rush — 1–2 weeks (+50%)",normal:"Standard — 3–4 weeks",flexible:"Flexible — 5+ weeks (-15%)"}}},footer:{madeWith:"Built by"}}},pt:{translation:{nav:{home:"Início",services:"Serviços",pricing:"Planos",projects:"Cases",about:"Sobre",founder:"Founder",contact:"Contato"},hero:{greeting:"// FEILEN SOLUTIONS IT",title:"Construímos. Escalamos. Entregamos.",subtitle:"Software Delivery & Outsourcing de TI",description:"Entrega ágil de software de alta qualidade. Profissionais experientes em todos os segmentos do mercado. Do desenvolvimento customizado e apps mobile ao outsourcing completo — arquitetamos, construímos e garantimos escalabilidade, segurança e resultados.",cta:{primary:"Nossos Serviços",secondary:"Iniciar Projeto"},stats:{delivery:"Delivery",deliveryLabel:"Sprints ágeis, velocidade real",ai:"IA em Foco",aiLabel:"Inteligência em cada camada",scale:"Enterprise",scaleLabel:"Elástico, seguro, pronto"}},services:{title:"O Que Fazemos",subtitle:"Soluções tecnológicas de ponta a ponta para empresas que não podem parar",items:[{title:"Software Delivery",description:"Ciclos completos de produto da ideação à produção. Plataformas web, SaaS, ERPs e sistemas customizados com metodologia ágil — no prazo e conforme especificado."},{title:"Aplicativos Mobile",description:"Apps nativos e híbridos para iOS e Android engenheirados para performance e escala. React Native, arquitetura limpa e UI pixel-perfect."},{title:"Outsourcing de TI",description:"Engenheiros sênior alocados diretamente no seu time. Perfis frontend, backend, full-stack e tech leads disponíveis — sem overhead de recrutamento."},{title:"IA & Inteligência",description:"Nossa especialidade principal. Integrações LLM, pipelines de automação, modelos preditivos e features com IA embarcadas no seu produto ou infraestrutura."},{title:"Cloud & Escalabilidade",description:"Microsserviços, conteinerização, CI/CD e arquitetura cloud-native na AWS, GCP ou Azure. Construído para crescer sem quebrar."},{title:"Segurança & Compliance",description:"Segurança de aplicações, pentesting, conformidade com LGPD/GDPR, sistemas de autenticação e proteção de dados em cada camada da stack."}]},projects:{title:"Cases",subtitle:"Destaques de entregas selecionadas",viewProject:"Ver Case"},about:{title:"Sobre a Feilen",text1:"A Feilen Solutions IT é uma empresa de tecnologia especializada em software delivery e outsourcing de TI. Fundada por desenvolvedores sênior com 7+ anos de experiência prática em fintech, insurtech, ERP, SaaS e educação corporativa.",text2:"Atuamos em todos os verticais de mercado — de grandes ERPs corporativos a startups em estágio inicial — entregando software escalável, seguro e pronto para produção. Com atuação nacional e europeia, com presença no Brasil, Portugal, Bruxelas e Espanha.",text3:"Inteligência Artificial é nosso principal diferencial. Incorporamos automação inteligente, pipelines LLM e features orientadas a dados em cada solução que construímos — não como um adicional, mas como uma camada de arquitetura de primeira classe.",stats:{years:"Anos no Mercado",projects:"Projetos Entregues",clients:"Clientes Enterprise"},pillars:{title:"Tecnologias",frontend:"Frontend",backend:"Backend",database:"Banco de Dados",tools:"DevOps & Cloud"}},contact:{title:"Inicie um Projeto",subtitle:"Conte o que você precisa. Respondemos em até 24h.",info:{title:"Entre em Contato",email:"Email",location:"HQ"},form:{name:"Seu Nome",namePlaceholder:"Nome completo",email:"Email",emailPlaceholder:"contato@empresa.com",subject:"Assunto",subjectPlaceholder:"Briefing do projeto ou dúvida",message:"Mensagem",messagePlaceholder:"Descreva seu projeto, stack, prazo e objetivos...",submit:"Enviar Mensagem",success:"Mensagem enviada. Entraremos em contato em breve."}},pricing:{title:"Modelos de Engajamento",subtitle:"Formatos flexíveis de entrega para qualquer estágio",popular:"Mais Solicitado",cta:"Solicitar Orçamento",starter:{name:"Delivery",description:"Entrega de projeto com escopo definido",note:"Prazo: 1–8 semanas",features:["Time dedicado ao projeto","Escopo e milestones definidos","Reviews semanais de sprint","Código-fonte 100% do cliente","Suporte pós-entrega (30 dias)"]},professional:{name:"Outsourcing",description:"Engenheiros sênior no seu time",note:"Contrato mínimo de 3 meses",features:["1–5 engenheiros sênior","Perfis full-stack ou especializados","Daily standups e async","Code review e documentação","Ramp-up em 5 dias úteis","Tech lead sob demanda"]},enterprise:{name:"Enterprise",description:"Parceria tecnológica completa",note:"SLA e termos customizados",features:["Tudo do plano Outsourcing","Tech manager dedicado","IA por padrão em todo projeto","Consultoria de arquitetura","Auditoria de segurança inclusa","Suporte prioritário 24/7","Pipeline DevOps & CI/CD"]},calculator:{title:"Estime seu Investimento",projectType:"Tipo de Projeto",features:"Add-ons",urgency:"Prazo",estimate:"Estimativa de Investimento",base:"Valor Base",featuresTotal:"Add-ons",urgencyFactor:"Fator de Prazo",total:"Total Estimado",requestQuote:"Solicitar Orçamento Detalhado",types:{landing:"Landing Page (R$ 800)",institutional:"Site Corporativo (R$ 1.500)",ecommerce:"E-commerce (R$ 3.500)",webapp:"Sistema Web (R$ 5.000)",mobile:"App Mobile (R$ 6.000)",custom:"Projeto Customizado"},featuresList:{auth:"Sistema de Auth (+R$ 500)",payment:"Gateway de Pagamento (+R$ 800)",admin:"Painel Admin (+R$ 600)",api:"API REST/GraphQL (+R$ 700)",multilang:"Multi-idioma (+R$ 400)",seo:"SEO Avançado (+R$ 300)"},urgencyOptions:{urgent:"Rush — 1–2 semanas (+50%)",normal:"Padrão — 3–4 semanas",flexible:"Flexível — 5+ semanas (-15%)"}}},footer:{madeWith:"Desenvolvido por"}}}};r.use(a).use(o).init({resources:$r,fallbackLng:"pt",supportedLngs:["pt","en"],load:"languageOnly",interpolation:{escapeValue:!1},detection:{order:["localStorage","navigator"],caches:["localStorage"],lookupLocalStorage:"i18nextLng"},react:{useSuspense:!1,bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","i","p"]}}).catch(e=>{});const zr=document.getElementById("root");zr&&F.createRoot(zr).render(x.jsx(t.StrictMode,{children:x.jsx(xr,{})}));
