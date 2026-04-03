(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bf={exports:{}},Jo={},Hf={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ns=Symbol.for("react.element"),dv=Symbol.for("react.portal"),hv=Symbol.for("react.fragment"),fv=Symbol.for("react.strict_mode"),pv=Symbol.for("react.profiler"),mv=Symbol.for("react.provider"),gv=Symbol.for("react.context"),_v=Symbol.for("react.forward_ref"),vv=Symbol.for("react.suspense"),yv=Symbol.for("react.memo"),wv=Symbol.for("react.lazy"),Td=Symbol.iterator;function Ev(t){return t===null||typeof t!="object"?null:(t=Td&&t[Td]||t["@@iterator"],typeof t=="function"?t:null)}var $f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gf=Object.assign,Kf={};function Ur(t,e,n){this.props=t,this.context=e,this.refs=Kf,this.updater=n||$f}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ur.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qf(){}Qf.prototype=Ur.prototype;function Du(t,e,n){this.props=t,this.context=e,this.refs=Kf,this.updater=n||$f}var Lu=Du.prototype=new Qf;Lu.constructor=Du;Gf(Lu,Ur.prototype);Lu.isPureReactComponent=!0;var kd=Array.isArray,qf=Object.prototype.hasOwnProperty,Mu={current:null},Yf={key:!0,ref:!0,__self:!0,__source:!0};function Xf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qf.call(e,r)&&!Yf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ns,type:t,key:s,ref:o,props:i,_owner:Mu.current}}function Sv(t,e){return{$$typeof:ns,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bu(t){return typeof t=="object"&&t!==null&&t.$$typeof===ns}function Cv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nd=/\/+/g;function Al(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Cv(""+t.key):e.toString(36)}function zs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ns:case dv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Al(o,0):r,kd(i)?(n="",t!=null&&(n=t.replace(Nd,"$&/")+"/"),zs(i,e,n,"",function(u){return u})):i!=null&&(bu(i)&&(i=Sv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",kd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Al(s,l);o+=zs(s,e,n,a,i)}else if(a=Ev(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Al(s,l++),o+=zs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ws(t,e,n){if(t==null)return t;var r=[],i=0;return zs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Iv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xe={current:null},Ws={transition:null},Tv={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Ws,ReactCurrentOwner:Mu};function Jf(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:ws,forEach:function(t,e,n){ws(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ws(t,function(){e++}),e},toArray:function(t){return ws(t,function(e){return e})||[]},only:function(t){if(!bu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=Ur;F.Fragment=hv;F.Profiler=pv;F.PureComponent=Du;F.StrictMode=fv;F.Suspense=vv;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tv;F.act=Jf;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)qf.call(e,a)&&!Yf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ns,type:t.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(t){return t={$$typeof:gv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mv,_context:t},t.Consumer=t};F.createElement=Xf;F.createFactory=function(t){var e=Xf.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:_v,render:t}};F.isValidElement=bu;F.lazy=function(t){return{$$typeof:wv,_payload:{_status:-1,_result:t},_init:Iv}};F.memo=function(t,e){return{$$typeof:yv,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=Ws.transition;Ws.transition={};try{t()}finally{Ws.transition=e}};F.unstable_act=Jf;F.useCallback=function(t,e){return xe.current.useCallback(t,e)};F.useContext=function(t){return xe.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return xe.current.useDeferredValue(t)};F.useEffect=function(t,e){return xe.current.useEffect(t,e)};F.useId=function(){return xe.current.useId()};F.useImperativeHandle=function(t,e,n){return xe.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return xe.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return xe.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return xe.current.useMemo(t,e)};F.useReducer=function(t,e,n){return xe.current.useReducer(t,e,n)};F.useRef=function(t){return xe.current.useRef(t)};F.useState=function(t){return xe.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return xe.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return xe.current.useTransition()};F.version="18.3.1";Hf.exports=F;var _e=Hf.exports;const Jt=cv(_e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv=_e,Nv=Symbol.for("react.element"),Pv=Symbol.for("react.fragment"),Rv=Object.prototype.hasOwnProperty,xv=kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Av={key:!0,ref:!0,__self:!0,__source:!0};function Zf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Rv.call(e,r)&&!Av.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Nv,type:t,key:s,ref:o,props:i,_owner:xv.current}}Jo.Fragment=Pv;Jo.jsx=Zf;Jo.jsxs=Zf;Bf.exports=Jo;var v=Bf.exports,va={},ep={exports:{}},Be={},tp={exports:{}},np={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,O){var D=k.length;k.push(O);e:for(;0<D;){var re=D-1>>>1,ce=k[re];if(0<i(ce,O))k[re]=O,k[D]=ce,D=re;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var O=k[0],D=k.pop();if(D!==O){k[0]=D;e:for(var re=0,ce=k.length,vs=ce>>>1;re<vs;){var Cn=2*(re+1)-1,xl=k[Cn],In=Cn+1,ys=k[In];if(0>i(xl,D))In<ce&&0>i(ys,xl)?(k[re]=ys,k[In]=D,re=In):(k[re]=xl,k[Cn]=D,re=Cn);else if(In<ce&&0>i(ys,D))k[re]=ys,k[In]=D,re=In;else break e}}return O}function i(k,O){var D=k.sortIndex-O.sortIndex;return D!==0?D:k.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,g=!1,_=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=k)r(u),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(u)}}function y(k){if(w=!1,m(k),!_)if(n(a)!==null)_=!0,Pl(I);else{var O=n(u);O!==null&&Rl(y,O.startTime-k)}}function I(k,O){_=!1,w&&(w=!1,p(R),R=-1),g=!0;var D=h;try{for(m(O),d=n(a);d!==null&&(!(d.expirationTime>O)||k&&!Ze());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var ce=re(d.expirationTime<=O);O=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(a)&&r(a),m(O)}else r(a);d=n(a)}if(d!==null)var vs=!0;else{var Cn=n(u);Cn!==null&&Rl(y,Cn.startTime-O),vs=!1}return vs}finally{d=null,h=D,g=!1}}var N=!1,P=null,R=-1,K=5,M=-1;function Ze(){return!(t.unstable_now()-M<K)}function Qr(){if(P!==null){var k=t.unstable_now();M=k;var O=!0;try{O=P(!0,k)}finally{O?qr():(N=!1,P=null)}}else N=!1}var qr;if(typeof f=="function")qr=function(){f(Qr)};else if(typeof MessageChannel<"u"){var Id=new MessageChannel,uv=Id.port2;Id.port1.onmessage=Qr,qr=function(){uv.postMessage(null)}}else qr=function(){C(Qr,0)};function Pl(k){P=k,N||(N=!0,qr())}function Rl(k,O){R=C(function(){k(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Pl(I))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var D=h;h=O;try{return k()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,O){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var D=h;h=k;try{return O()}finally{h=D}},t.unstable_scheduleCallback=function(k,O,D){var re=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?re+D:re):D=re,k){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=D+ce,k={id:c++,callback:O,priorityLevel:k,startTime:D,expirationTime:ce,sortIndex:-1},D>re?(k.sortIndex=D,e(u,k),n(a)===null&&k===n(u)&&(w?(p(R),R=-1):w=!0,Rl(y,D-re))):(k.sortIndex=ce,e(a,k),_||g||(_=!0,Pl(I))),k},t.unstable_shouldYield=Ze,t.unstable_wrapCallback=function(k){var O=h;return function(){var D=h;h=O;try{return k.apply(this,arguments)}finally{h=D}}}})(np);tp.exports=np;var Ov=tp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=_e,Ve=Ov;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rp=new Set,Pi={};function Kn(t,e){Cr(t,e),Cr(t+"Capture",e)}function Cr(t,e){for(Pi[t]=e,t=0;t<e.length;t++)rp.add(e[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ya=Object.prototype.hasOwnProperty,Lv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pd={},Rd={};function Mv(t){return ya.call(Rd,t)?!0:ya.call(Pd,t)?!1:Lv.test(t)?Rd[t]=!0:(Pd[t]=!0,!1)}function bv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Fv(t,e,n,r){if(e===null||typeof e>"u"||bv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ae(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Ae(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Ae(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Ae(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Ae(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Ae(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Ae(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new Ae(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Ae(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Ae(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fu=/[\-:]([a-z])/g;function Uu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fu,Uu);ye[e]=new Ae(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fu,Uu);ye[e]=new Ae(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fu,Uu);ye[e]=new Ae(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Ae(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new Ae(t,1,!1,t.toLowerCase(),null,!0,!0)});function ju(t,e,n,r){var i=ye.hasOwnProperty(e)?ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Fv(e,n,i,r)&&(n=null),r||i===null?Mv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ut=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Es=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),zu=Symbol.for("react.strict_mode"),wa=Symbol.for("react.profiler"),ip=Symbol.for("react.provider"),sp=Symbol.for("react.context"),Wu=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Sa=Symbol.for("react.suspense_list"),Vu=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),op=Symbol.for("react.offscreen"),xd=Symbol.iterator;function Yr(t){return t===null||typeof t!="object"?null:(t=xd&&t[xd]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,Ol;function ui(t){if(Ol===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ol=e&&e[1]||""}return`
`+Ol+t}var Dl=!1;function Ll(t,e){if(!t||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ui(t):""}function Uv(t){switch(t.tag){case 5:return ui(t.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return t=Ll(t.type,!1),t;case 11:return t=Ll(t.type.render,!1),t;case 1:return t=Ll(t.type,!0),t;default:return""}}function Ca(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case er:return"Fragment";case Zn:return"Portal";case wa:return"Profiler";case zu:return"StrictMode";case Ea:return"Suspense";case Sa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sp:return(t.displayName||"Context")+".Consumer";case ip:return(t._context.displayName||"Context")+".Provider";case Wu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vu:return e=t.displayName||null,e!==null?e:Ca(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return Ca(t(e))}catch{}}return null}function jv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ca(e);case 8:return e===zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(t){var e=lp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ss(t){t._valueTracker||(t._valueTracker=zv(t))}function ap(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=lp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ro(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ia(t,e){var n=e.checked;return Z({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ad(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function up(t,e){e=e.checked,e!=null&&ju(t,"checked",e,!1)}function Ta(t,e){up(t,e);var n=fn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ka(t,e.type,n):e.hasOwnProperty("defaultValue")&&ka(t,e.type,fn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Od(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ka(t,e,n){(e!=="number"||ro(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ci=Array.isArray;function hr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Na(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return Z({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(ci(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fn(n)}}function cp(t,e){var n=fn(e.value),r=fn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ld(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cs,hp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Cs=Cs||document.createElement("div"),Cs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ri(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wv=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(t){Wv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fi[e]=fi[t]})});function fp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fi.hasOwnProperty(t)&&fi[t]?(""+e).trim():e+"px"}function pp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Vv=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ra(t,e){if(e){if(Vv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function xa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Aa=null;function Bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oa=null,fr=null,pr=null;function Md(t){if(t=ss(t)){if(typeof Oa!="function")throw Error(E(280));var e=t.stateNode;e&&(e=rl(e),Oa(t.stateNode,t.type,e))}}function mp(t){fr?pr?pr.push(t):pr=[t]:fr=t}function gp(){if(fr){var t=fr,e=pr;if(pr=fr=null,Md(t),e)for(t=0;t<e.length;t++)Md(e[t])}}function _p(t,e){return t(e)}function vp(){}var Ml=!1;function yp(t,e,n){if(Ml)return t(e,n);Ml=!0;try{return _p(t,e,n)}finally{Ml=!1,(fr!==null||pr!==null)&&(vp(),gp())}}function xi(t,e){var n=t.stateNode;if(n===null)return null;var r=rl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Da=!1;if(At)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Da=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Da=!1}function Bv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var pi=!1,io=null,so=!1,La=null,Hv={onError:function(t){pi=!0,io=t}};function $v(t,e,n,r,i,s,o,l,a){pi=!1,io=null,Bv.apply(Hv,arguments)}function Gv(t,e,n,r,i,s,o,l,a){if($v.apply(this,arguments),pi){if(pi){var u=io;pi=!1,io=null}else throw Error(E(198));so||(so=!0,La=u)}}function Qn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bd(t){if(Qn(t)!==t)throw Error(E(188))}function Kv(t){var e=t.alternate;if(!e){if(e=Qn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bd(i),t;if(s===r)return bd(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Ep(t){return t=Kv(t),t!==null?Sp(t):null}function Sp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sp(t);if(e!==null)return e;t=t.sibling}return null}var Cp=Ve.unstable_scheduleCallback,Fd=Ve.unstable_cancelCallback,Qv=Ve.unstable_shouldYield,qv=Ve.unstable_requestPaint,ie=Ve.unstable_now,Yv=Ve.unstable_getCurrentPriorityLevel,Hu=Ve.unstable_ImmediatePriority,Ip=Ve.unstable_UserBlockingPriority,oo=Ve.unstable_NormalPriority,Xv=Ve.unstable_LowPriority,Tp=Ve.unstable_IdlePriority,Zo=null,pt=null;function Jv(t){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Zo,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:ty,Zv=Math.log,ey=Math.LN2;function ty(t){return t>>>=0,t===0?32:31-(Zv(t)/ey|0)|0}var Is=64,Ts=4194304;function di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=di(l):(s&=o,s!==0&&(r=di(s)))}else o=n&~i,o!==0?r=di(o):s!==0&&(r=di(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ot(e),i=1<<n,r|=t[n],e&=~i;return r}function ny(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ry(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ot(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=ny(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ma(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kp(){var t=Is;return Is<<=1,!(Is&4194240)&&(Is=64),t}function bl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function rs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ot(e),t[e]=n}function iy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $u(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function Np(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pp,Gu,Rp,xp,Ap,ba=!1,ks=[],Zt=null,en=null,tn=null,Ai=new Map,Oi=new Map,Ht=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ud(t,e){switch(t){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":Ai.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(e.pointerId)}}function Jr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ss(e),e!==null&&Gu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function oy(t,e,n,r,i){switch(e){case"focusin":return Zt=Jr(Zt,t,e,n,r,i),!0;case"dragenter":return en=Jr(en,t,e,n,r,i),!0;case"mouseover":return tn=Jr(tn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ai.set(s,Jr(Ai.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oi.set(s,Jr(Oi.get(s)||null,t,e,n,r,i)),!0}return!1}function Op(t){var e=Rn(t.target);if(e!==null){var n=Qn(e);if(n!==null){if(e=n.tag,e===13){if(e=wp(n),e!==null){t.blockedOn=e,Ap(t.priority,function(){Rp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Aa=r,n.target.dispatchEvent(r),Aa=null}else return e=ss(n),e!==null&&Gu(e),t.blockedOn=n,!1;e.shift()}return!0}function jd(t,e,n){Vs(t)&&n.delete(e)}function ly(){ba=!1,Zt!==null&&Vs(Zt)&&(Zt=null),en!==null&&Vs(en)&&(en=null),tn!==null&&Vs(tn)&&(tn=null),Ai.forEach(jd),Oi.forEach(jd)}function Zr(t,e){t.blockedOn===e&&(t.blockedOn=null,ba||(ba=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,ly)))}function Di(t){function e(i){return Zr(i,t)}if(0<ks.length){Zr(ks[0],t);for(var n=1;n<ks.length;n++){var r=ks[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zt!==null&&Zr(Zt,t),en!==null&&Zr(en,t),tn!==null&&Zr(tn,t),Ai.forEach(e),Oi.forEach(e),n=0;n<Ht.length;n++)r=Ht[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ht.length&&(n=Ht[0],n.blockedOn===null);)Op(n),n.blockedOn===null&&Ht.shift()}var mr=Ut.ReactCurrentBatchConfig,ao=!0;function ay(t,e,n,r){var i=W,s=mr.transition;mr.transition=null;try{W=1,Ku(t,e,n,r)}finally{W=i,mr.transition=s}}function uy(t,e,n,r){var i=W,s=mr.transition;mr.transition=null;try{W=4,Ku(t,e,n,r)}finally{W=i,mr.transition=s}}function Ku(t,e,n,r){if(ao){var i=Fa(t,e,n,r);if(i===null)Gl(t,e,r,uo,n),Ud(t,r);else if(oy(i,t,e,n,r))r.stopPropagation();else if(Ud(t,r),e&4&&-1<sy.indexOf(t)){for(;i!==null;){var s=ss(i);if(s!==null&&Pp(s),s=Fa(t,e,n,r),s===null&&Gl(t,e,r,uo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gl(t,e,r,null,n)}}var uo=null;function Fa(t,e,n,r){if(uo=null,t=Bu(r),t=Rn(t),t!==null)if(e=Qn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return uo=t,null}function Dp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yv()){case Hu:return 1;case Ip:return 4;case oo:case Xv:return 16;case Tp:return 536870912;default:return 16}default:return 16}}var qt=null,Qu=null,Bs=null;function Lp(){if(Bs)return Bs;var t,e=Qu,n=e.length,r,i="value"in qt?qt.value:qt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Bs=i.slice(t,1<r?1-r:void 0)}function Hs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ns(){return!0}function zd(){return!1}function He(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ns:zd,this.isPropagationStopped=zd,this}return Z(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),e}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qu=He(jr),is=Z({},jr,{view:0,detail:0}),cy=He(is),Fl,Ul,ei,el=Z({},is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ei&&(ei&&t.type==="mousemove"?(Fl=t.screenX-ei.screenX,Ul=t.screenY-ei.screenY):Ul=Fl=0,ei=t),Fl)},movementY:function(t){return"movementY"in t?t.movementY:Ul}}),Wd=He(el),dy=Z({},el,{dataTransfer:0}),hy=He(dy),fy=Z({},is,{relatedTarget:0}),jl=He(fy),py=Z({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),my=He(py),gy=Z({},jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_y=He(gy),vy=Z({},jr,{data:0}),Vd=He(vy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ey[t])?!!e[t]:!1}function Yu(){return Sy}var Cy=Z({},is,{key:function(t){if(t.key){var e=yy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(t){return t.type==="keypress"?Hs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Iy=He(Cy),Ty=Z({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=He(Ty),ky=Z({},is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),Ny=He(ky),Py=Z({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ry=He(Py),xy=Z({},el,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ay=He(xy),Oy=[9,13,27,32],Xu=At&&"CompositionEvent"in window,mi=null;At&&"documentMode"in document&&(mi=document.documentMode);var Dy=At&&"TextEvent"in window&&!mi,Mp=At&&(!Xu||mi&&8<mi&&11>=mi),Hd=" ",$d=!1;function bp(t,e){switch(t){case"keyup":return Oy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tr=!1;function Ly(t,e){switch(t){case"compositionend":return Fp(e);case"keypress":return e.which!==32?null:($d=!0,Hd);case"textInput":return t=e.data,t===Hd&&$d?null:t;default:return null}}function My(t,e){if(tr)return t==="compositionend"||!Xu&&bp(t,e)?(t=Lp(),Bs=Qu=qt=null,tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mp&&e.locale!=="ko"?null:e.data;default:return null}}var by={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!by[t.type]:e==="textarea"}function Up(t,e,n,r){mp(r),e=co(e,"onChange"),0<e.length&&(n=new qu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var gi=null,Li=null;function Fy(t){qp(t,0)}function tl(t){var e=ir(t);if(ap(e))return t}function Uy(t,e){if(t==="change")return e}var jp=!1;if(At){var zl;if(At){var Wl="oninput"in document;if(!Wl){var Kd=document.createElement("div");Kd.setAttribute("oninput","return;"),Wl=typeof Kd.oninput=="function"}zl=Wl}else zl=!1;jp=zl&&(!document.documentMode||9<document.documentMode)}function Qd(){gi&&(gi.detachEvent("onpropertychange",zp),Li=gi=null)}function zp(t){if(t.propertyName==="value"&&tl(Li)){var e=[];Up(e,Li,t,Bu(t)),yp(Fy,e)}}function jy(t,e,n){t==="focusin"?(Qd(),gi=e,Li=n,gi.attachEvent("onpropertychange",zp)):t==="focusout"&&Qd()}function zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tl(Li)}function Wy(t,e){if(t==="click")return tl(e)}function Vy(t,e){if(t==="input"||t==="change")return tl(e)}function By(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ct=typeof Object.is=="function"?Object.is:By;function Mi(t,e){if(ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ya.call(e,i)||!ct(t[i],e[i]))return!1}return!0}function qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yd(t,e){var n=qd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qd(n)}}function Wp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vp(){for(var t=window,e=ro();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ro(t.document)}return e}function Ju(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Hy(t){var e=Vp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Wp(n.ownerDocument.documentElement,n)){if(r!==null&&Ju(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Yd(n,s);var o=Yd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $y=At&&"documentMode"in document&&11>=document.documentMode,nr=null,Ua=null,_i=null,ja=!1;function Xd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ja||nr==null||nr!==ro(r)||(r=nr,"selectionStart"in r&&Ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_i&&Mi(_i,r)||(_i=r,r=co(Ua,"onSelect"),0<r.length&&(e=new qu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=nr)))}function Ps(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionend:Ps("Transition","TransitionEnd")},Vl={},Bp={};At&&(Bp=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function nl(t){if(Vl[t])return Vl[t];if(!rr[t])return t;var e=rr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Bp)return Vl[t]=e[n];return t}var Hp=nl("animationend"),$p=nl("animationiteration"),Gp=nl("animationstart"),Kp=nl("transitionend"),Qp=new Map,Jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(t,e){Qp.set(t,e),Kn(e,[t])}for(var Bl=0;Bl<Jd.length;Bl++){var Hl=Jd[Bl],Gy=Hl.toLowerCase(),Ky=Hl[0].toUpperCase()+Hl.slice(1);vn(Gy,"on"+Ky)}vn(Hp,"onAnimationEnd");vn($p,"onAnimationIteration");vn(Gp,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(Kp,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function Zd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Gv(r,e,void 0,t),t.currentTarget=null}function qp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Zd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Zd(i,l,u),s=a}}}if(so)throw t=La,so=!1,La=null,t}function Q(t,e){var n=e[Ha];n===void 0&&(n=e[Ha]=new Set);var r=t+"__bubble";n.has(r)||(Yp(e,t,2,!1),n.add(r))}function $l(t,e,n){var r=0;e&&(r|=4),Yp(n,t,r,e)}var Rs="_reactListening"+Math.random().toString(36).slice(2);function bi(t){if(!t[Rs]){t[Rs]=!0,rp.forEach(function(n){n!=="selectionchange"&&(Qy.has(n)||$l(n,!1,t),$l(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Rs]||(e[Rs]=!0,$l("selectionchange",!1,e))}}function Yp(t,e,n,r){switch(Dp(e)){case 1:var i=ay;break;case 4:i=uy;break;default:i=Ku}n=i.bind(null,e,n,t),i=void 0,!Da||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Rn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}yp(function(){var u=s,c=Bu(n),d=[];e:{var h=Qp.get(t);if(h!==void 0){var g=qu,_=t;switch(t){case"keypress":if(Hs(n)===0)break e;case"keydown":case"keyup":g=Iy;break;case"focusin":_="focus",g=jl;break;case"focusout":_="blur",g=jl;break;case"beforeblur":case"afterblur":g=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ny;break;case Hp:case $p:case Gp:g=my;break;case Kp:g=Ry;break;case"scroll":g=cy;break;case"wheel":g=Ay;break;case"copy":case"cut":case"paste":g=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Bd}var w=(e&4)!==0,C=!w&&t==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,m;f!==null;){m=f;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=xi(f,p),y!=null&&w.push(Fi(f,y,m)))),C)break;f=f.return}0<w.length&&(h=new g(h,_,null,n,c),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Aa&&(_=n.relatedTarget||n.fromElement)&&(Rn(_)||_[Ot]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Rn(_):null,_!==null&&(C=Qn(_),_!==C||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(w=Wd,y="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Bd,y="onPointerLeave",p="onPointerEnter",f="pointer"),C=g==null?h:ir(g),m=_==null?h:ir(_),h=new w(y,f+"leave",g,n,c),h.target=C,h.relatedTarget=m,y=null,Rn(c)===u&&(w=new w(p,f+"enter",_,n,c),w.target=m,w.relatedTarget=C,y=w),C=y,g&&_)t:{for(w=g,p=_,f=0,m=w;m;m=Xn(m))f++;for(m=0,y=p;y;y=Xn(y))m++;for(;0<f-m;)w=Xn(w),f--;for(;0<m-f;)p=Xn(p),m--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Xn(w),p=Xn(p)}w=null}else w=null;g!==null&&eh(d,h,g,w,!1),_!==null&&C!==null&&eh(d,C,_,w,!0)}}e:{if(h=u?ir(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var I=Uy;else if(Gd(h))if(jp)I=Vy;else{I=zy;var N=jy}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=Wy);if(I&&(I=I(t,u))){Up(d,I,n,c);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&ka(h,"number",h.value)}switch(N=u?ir(u):window,t){case"focusin":(Gd(N)||N.contentEditable==="true")&&(nr=N,Ua=u,_i=null);break;case"focusout":_i=Ua=nr=null;break;case"mousedown":ja=!0;break;case"contextmenu":case"mouseup":case"dragend":ja=!1,Xd(d,n,c);break;case"selectionchange":if($y)break;case"keydown":case"keyup":Xd(d,n,c)}var P;if(Xu)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else tr?bp(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Mp&&n.locale!=="ko"&&(tr||R!=="onCompositionStart"?R==="onCompositionEnd"&&tr&&(P=Lp()):(qt=c,Qu="value"in qt?qt.value:qt.textContent,tr=!0)),N=co(u,R),0<N.length&&(R=new Vd(R,t,null,n,c),d.push({event:R,listeners:N}),P?R.data=P:(P=Fp(n),P!==null&&(R.data=P)))),(P=Dy?Ly(t,n):My(t,n))&&(u=co(u,"onBeforeInput"),0<u.length&&(c=new Vd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=P))}qp(d,e)})}function Fi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function co(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=xi(t,n),s!=null&&r.unshift(Fi(t,s,i)),s=xi(t,e),s!=null&&r.push(Fi(t,s,i))),t=t.return}return r}function Xn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=xi(n,s),a!=null&&o.unshift(Fi(n,a,l))):i||(a=xi(n,s),a!=null&&o.push(Fi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qy=/\r\n?/g,Yy=/\u0000|\uFFFD/g;function th(t){return(typeof t=="string"?t:""+t).replace(qy,`
`).replace(Yy,"")}function xs(t,e,n){if(e=th(e),th(t)!==e&&n)throw Error(E(425))}function ho(){}var za=null,Wa=null;function Va(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ba=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(t){return nh.resolve(null).then(t).catch(Zy)}:Ba;function Zy(t){setTimeout(function(){throw t})}function Kl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Di(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Di(e)}function nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zr=Math.random().toString(36).slice(2),ft="__reactFiber$"+zr,Ui="__reactProps$"+zr,Ot="__reactContainer$"+zr,Ha="__reactEvents$"+zr,e0="__reactListeners$"+zr,t0="__reactHandles$"+zr;function Rn(t){var e=t[ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ot]||n[ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rh(t);t!==null;){if(n=t[ft])return n;t=rh(t)}return e}t=n,n=t.parentNode}return null}function ss(t){return t=t[ft]||t[Ot],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ir(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function rl(t){return t[Ui]||null}var $a=[],sr=-1;function yn(t){return{current:t}}function q(t){0>sr||(t.current=$a[sr],$a[sr]=null,sr--)}function G(t,e){sr++,$a[sr]=t.current,t.current=e}var pn={},Ie=yn(pn),Me=yn(!1),Fn=pn;function Ir(t,e){var n=t.type.contextTypes;if(!n)return pn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function be(t){return t=t.childContextTypes,t!=null}function fo(){q(Me),q(Ie)}function ih(t,e,n){if(Ie.current!==pn)throw Error(E(168));G(Ie,e),G(Me,n)}function Xp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,jv(t)||"Unknown",i));return Z({},n,r)}function po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pn,Fn=Ie.current,G(Ie,t),G(Me,Me.current),!0}function sh(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Xp(t,e,Fn),r.__reactInternalMemoizedMergedChildContext=t,q(Me),q(Ie),G(Ie,t)):q(Me),G(Me,n)}var wt=null,il=!1,Ql=!1;function Jp(t){wt===null?wt=[t]:wt.push(t)}function n0(t){il=!0,Jp(t)}function wn(){if(!Ql&&wt!==null){Ql=!0;var t=0,e=W;try{var n=wt;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wt=null,il=!1}catch(i){throw wt!==null&&(wt=wt.slice(t+1)),Cp(Hu,wn),i}finally{W=e,Ql=!1}}return null}var or=[],lr=0,mo=null,go=0,$e=[],Ge=0,Un=null,St=1,Ct="";function Tn(t,e){or[lr++]=go,or[lr++]=mo,mo=t,go=e}function Zp(t,e,n){$e[Ge++]=St,$e[Ge++]=Ct,$e[Ge++]=Un,Un=t;var r=St;t=Ct;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var s=32-ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,St=1<<32-ot(e)+i|n<<i|r,Ct=s+t}else St=1<<s|n<<i|r,Ct=t}function Zu(t){t.return!==null&&(Tn(t,1),Zp(t,1,0))}function ec(t){for(;t===mo;)mo=or[--lr],or[lr]=null,go=or[--lr],or[lr]=null;for(;t===Un;)Un=$e[--Ge],$e[Ge]=null,Ct=$e[--Ge],$e[Ge]=null,St=$e[--Ge],$e[Ge]=null}var We=null,ze=null,Y=!1,rt=null;function em(t,e){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function oh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,We=t,ze=nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,We=t,ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Un!==null?{id:St,overflow:Ct}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,We=t,ze=null,!0):!1;default:return!1}}function Ga(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ka(t){if(Y){var e=ze;if(e){var n=e;if(!oh(t,e)){if(Ga(t))throw Error(E(418));e=nn(n.nextSibling);var r=We;e&&oh(t,e)?em(r,n):(t.flags=t.flags&-4097|2,Y=!1,We=t)}}else{if(Ga(t))throw Error(E(418));t.flags=t.flags&-4097|2,Y=!1,We=t}}}function lh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;We=t}function As(t){if(t!==We)return!1;if(!Y)return lh(t),Y=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Va(t.type,t.memoizedProps)),e&&(e=ze)){if(Ga(t))throw tm(),Error(E(418));for(;e;)em(t,e),e=nn(e.nextSibling)}if(lh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ze=nn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ze=null}}else ze=We?nn(t.stateNode.nextSibling):null;return!0}function tm(){for(var t=ze;t;)t=nn(t.nextSibling)}function Tr(){ze=We=null,Y=!1}function tc(t){rt===null?rt=[t]:rt.push(t)}var r0=Ut.ReactCurrentBatchConfig;function ti(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Os(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ah(t){var e=t._init;return e(t._payload)}function nm(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=ln(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,y){return f===null||f.tag!==6?(f=ta(m,p.mode,y),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,y){var I=m.type;return I===er?c(p,f,m.props.children,y,m.key):f!==null&&(f.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Vt&&ah(I)===f.type)?(y=i(f,m.props),y.ref=ti(p,f,m),y.return=p,y):(y=Xs(m.type,m.key,m.props,null,p.mode,y),y.ref=ti(p,f,m),y.return=p,y)}function u(p,f,m,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=na(m,p.mode,y),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,y,I){return f===null||f.tag!==7?(f=Mn(m,p.mode,y,I),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ta(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Es:return m=Xs(f.type,f.key,f.props,null,p.mode,m),m.ref=ti(p,null,f),m.return=p,m;case Zn:return f=na(f,p.mode,m),f.return=p,f;case Vt:var y=f._init;return d(p,y(f._payload),m)}if(ci(f)||Yr(f))return f=Mn(f,p.mode,m,null),f.return=p,f;Os(p,f)}return null}function h(p,f,m,y){var I=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:l(p,f,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Es:return m.key===I?a(p,f,m,y):null;case Zn:return m.key===I?u(p,f,m,y):null;case Vt:return I=m._init,h(p,f,I(m._payload),y)}if(ci(m)||Yr(m))return I!==null?null:c(p,f,m,y,null);Os(p,m)}return null}function g(p,f,m,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(f,p,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Es:return p=p.get(y.key===null?m:y.key)||null,a(f,p,y,I);case Zn:return p=p.get(y.key===null?m:y.key)||null,u(f,p,y,I);case Vt:var N=y._init;return g(p,f,m,N(y._payload),I)}if(ci(y)||Yr(y))return p=p.get(m)||null,c(f,p,y,I,null);Os(f,y)}return null}function _(p,f,m,y){for(var I=null,N=null,P=f,R=f=0,K=null;P!==null&&R<m.length;R++){P.index>R?(K=P,P=null):K=P.sibling;var M=h(p,P,m[R],y);if(M===null){P===null&&(P=K);break}t&&P&&M.alternate===null&&e(p,P),f=s(M,f,R),N===null?I=M:N.sibling=M,N=M,P=K}if(R===m.length)return n(p,P),Y&&Tn(p,R),I;if(P===null){for(;R<m.length;R++)P=d(p,m[R],y),P!==null&&(f=s(P,f,R),N===null?I=P:N.sibling=P,N=P);return Y&&Tn(p,R),I}for(P=r(p,P);R<m.length;R++)K=g(P,p,R,m[R],y),K!==null&&(t&&K.alternate!==null&&P.delete(K.key===null?R:K.key),f=s(K,f,R),N===null?I=K:N.sibling=K,N=K);return t&&P.forEach(function(Ze){return e(p,Ze)}),Y&&Tn(p,R),I}function w(p,f,m,y){var I=Yr(m);if(typeof I!="function")throw Error(E(150));if(m=I.call(m),m==null)throw Error(E(151));for(var N=I=null,P=f,R=f=0,K=null,M=m.next();P!==null&&!M.done;R++,M=m.next()){P.index>R?(K=P,P=null):K=P.sibling;var Ze=h(p,P,M.value,y);if(Ze===null){P===null&&(P=K);break}t&&P&&Ze.alternate===null&&e(p,P),f=s(Ze,f,R),N===null?I=Ze:N.sibling=Ze,N=Ze,P=K}if(M.done)return n(p,P),Y&&Tn(p,R),I;if(P===null){for(;!M.done;R++,M=m.next())M=d(p,M.value,y),M!==null&&(f=s(M,f,R),N===null?I=M:N.sibling=M,N=M);return Y&&Tn(p,R),I}for(P=r(p,P);!M.done;R++,M=m.next())M=g(P,p,R,M.value,y),M!==null&&(t&&M.alternate!==null&&P.delete(M.key===null?R:M.key),f=s(M,f,R),N===null?I=M:N.sibling=M,N=M);return t&&P.forEach(function(Qr){return e(p,Qr)}),Y&&Tn(p,R),I}function C(p,f,m,y){if(typeof m=="object"&&m!==null&&m.type===er&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Es:e:{for(var I=m.key,N=f;N!==null;){if(N.key===I){if(I=m.type,I===er){if(N.tag===7){n(p,N.sibling),f=i(N,m.props.children),f.return=p,p=f;break e}}else if(N.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Vt&&ah(I)===N.type){n(p,N.sibling),f=i(N,m.props),f.ref=ti(p,N,m),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===er?(f=Mn(m.props.children,p.mode,y,m.key),f.return=p,p=f):(y=Xs(m.type,m.key,m.props,null,p.mode,y),y.ref=ti(p,f,m),y.return=p,p=y)}return o(p);case Zn:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=na(m,p.mode,y),f.return=p,p=f}return o(p);case Vt:return N=m._init,C(p,f,N(m._payload),y)}if(ci(m))return _(p,f,m,y);if(Yr(m))return w(p,f,m,y);Os(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=ta(m,p.mode,y),f.return=p,p=f),o(p)):n(p,f)}return C}var kr=nm(!0),rm=nm(!1),_o=yn(null),vo=null,ar=null,nc=null;function rc(){nc=ar=vo=null}function ic(t){var e=_o.current;q(_o),t._currentValue=e}function Qa(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function gr(t,e){vo=t,nc=ar=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(De=!0),t.firstContext=null)}function Ye(t){var e=t._currentValue;if(nc!==t)if(t={context:t,memoizedValue:e,next:null},ar===null){if(vo===null)throw Error(E(308));ar=t,vo.dependencies={lanes:0,firstContext:t}}else ar=ar.next=t;return e}var xn=null;function sc(t){xn===null?xn=[t]:xn.push(t)}function im(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,sc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Dt(t,r)}function Dt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bt=!1;function oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Dt(t,n)}return i=r.interleaved,i===null?(e.next=e,sc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Dt(t,n)}function $s(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$u(t,n)}}function uh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yo(t,e,n,r){var i=t.updateQueue;Bt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,w=l;switch(h=e,g=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){d=_.call(g,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,h=typeof _=="function"?_.call(g,d,h):_,h==null)break e;d=Z({},d,h);break e;case 2:Bt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=d):c=c.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);zn|=o,t.lanes=o,t.memoizedState=d}}function ch(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var os={},mt=yn(os),ji=yn(os),zi=yn(os);function An(t){if(t===os)throw Error(E(174));return t}function lc(t,e){switch(G(zi,e),G(ji,t),G(mt,os),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pa(e,t)}q(mt),G(mt,e)}function Nr(){q(mt),q(ji),q(zi)}function om(t){An(zi.current);var e=An(mt.current),n=Pa(e,t.type);e!==n&&(G(ji,t),G(mt,n))}function ac(t){ji.current===t&&(q(mt),q(ji))}var X=yn(0);function wo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ql=[];function uc(){for(var t=0;t<ql.length;t++)ql[t]._workInProgressVersionPrimary=null;ql.length=0}var Gs=Ut.ReactCurrentDispatcher,Yl=Ut.ReactCurrentBatchConfig,jn=0,J=null,oe=null,he=null,Eo=!1,vi=!1,Wi=0,i0=0;function Ee(){throw Error(E(321))}function cc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ct(t[n],e[n]))return!1;return!0}function dc(t,e,n,r,i,s){if(jn=s,J=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gs.current=t===null||t.memoizedState===null?a0:u0,t=n(r,i),vi){s=0;do{if(vi=!1,Wi=0,25<=s)throw Error(E(301));s+=1,he=oe=null,e.updateQueue=null,Gs.current=c0,t=n(r,i)}while(vi)}if(Gs.current=So,e=oe!==null&&oe.next!==null,jn=0,he=oe=J=null,Eo=!1,e)throw Error(E(300));return t}function hc(){var t=Wi!==0;return Wi=0,t}function ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?J.memoizedState=he=t:he=he.next=t,he}function Xe(){if(oe===null){var t=J.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=he===null?J.memoizedState:he.next;if(e!==null)he=e,oe=t;else{if(t===null)throw Error(E(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},he===null?J.memoizedState=he=t:he=he.next=t}return he}function Vi(t,e){return typeof e=="function"?e(t):e}function Xl(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((jn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,J.lanes|=c,zn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ct(r,e.memoizedState)||(De=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,J.lanes|=s,zn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jl(t){var e=Xe(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ct(s,e.memoizedState)||(De=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function lm(){}function am(t,e){var n=J,r=Xe(),i=e(),s=!ct(r.memoizedState,i);if(s&&(r.memoizedState=i,De=!0),r=r.queue,fc(dm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Bi(9,cm.bind(null,n,r,i,e),void 0,null),pe===null)throw Error(E(349));jn&30||um(n,e,i)}return i}function um(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cm(t,e,n,r){e.value=n,e.getSnapshot=r,hm(e)&&fm(t)}function dm(t,e,n){return n(function(){hm(e)&&fm(t)})}function hm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ct(t,n)}catch{return!0}}function fm(t){var e=Dt(t,1);e!==null&&lt(e,t,1,-1)}function dh(t){var e=ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},e.queue=t,t=t.dispatch=l0.bind(null,J,t),[e.memoizedState,t]}function Bi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pm(){return Xe().memoizedState}function Ks(t,e,n,r){var i=ht();J.flags|=t,i.memoizedState=Bi(1|e,n,void 0,r===void 0?null:r)}function sl(t,e,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&cc(r,o.deps)){i.memoizedState=Bi(e,n,s,r);return}}J.flags|=t,i.memoizedState=Bi(1|e,n,s,r)}function hh(t,e){return Ks(8390656,8,t,e)}function fc(t,e){return sl(2048,8,t,e)}function mm(t,e){return sl(4,2,t,e)}function gm(t,e){return sl(4,4,t,e)}function _m(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vm(t,e,n){return n=n!=null?n.concat([t]):null,sl(4,4,_m.bind(null,e,t),n)}function pc(){}function ym(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function wm(t,e){var n=Xe();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Em(t,e,n){return jn&21?(ct(n,e)||(n=kp(),J.lanes|=n,zn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,De=!0),t.memoizedState=n)}function s0(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=Yl.transition;Yl.transition={};try{t(!1),e()}finally{W=n,Yl.transition=r}}function Sm(){return Xe().memoizedState}function o0(t,e,n){var r=on(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cm(t))Im(e,n);else if(n=im(t,e,n,r),n!==null){var i=Ne();lt(n,t,r,i),Tm(n,e,r)}}function l0(t,e,n){var r=on(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cm(t))Im(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ct(l,o)){var a=e.interleaved;a===null?(i.next=i,sc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=im(t,e,i,r),n!==null&&(i=Ne(),lt(n,t,r,i),Tm(n,e,r))}}function Cm(t){var e=t.alternate;return t===J||e!==null&&e===J}function Im(t,e){vi=Eo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Tm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$u(t,n)}}var So={readContext:Ye,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},a0={readContext:Ye,useCallback:function(t,e){return ht().memoizedState=[t,e===void 0?null:e],t},useContext:Ye,useEffect:hh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ks(4194308,4,_m.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ks(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ks(4,2,t,e)},useMemo:function(t,e){var n=ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=o0.bind(null,J,t),[r.memoizedState,t]},useRef:function(t){var e=ht();return t={current:t},e.memoizedState=t},useState:dh,useDebugValue:pc,useDeferredValue:function(t){return ht().memoizedState=t},useTransition:function(){var t=dh(!1),e=t[0];return t=s0.bind(null,t[1]),ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=J,i=ht();if(Y){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),pe===null)throw Error(E(349));jn&30||um(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hh(dm.bind(null,r,s,t),[t]),r.flags|=2048,Bi(9,cm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ht(),e=pe.identifierPrefix;if(Y){var n=Ct,r=St;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=i0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},u0={readContext:Ye,useCallback:ym,useContext:Ye,useEffect:fc,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:wm,useReducer:Xl,useRef:pm,useState:function(){return Xl(Vi)},useDebugValue:pc,useDeferredValue:function(t){var e=Xe();return Em(e,oe.memoizedState,t)},useTransition:function(){var t=Xl(Vi)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:lm,useSyncExternalStore:am,useId:Sm,unstable_isNewReconciler:!1},c0={readContext:Ye,useCallback:ym,useContext:Ye,useEffect:fc,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:wm,useReducer:Jl,useRef:pm,useState:function(){return Jl(Vi)},useDebugValue:pc,useDeferredValue:function(t){var e=Xe();return oe===null?e.memoizedState=t:Em(e,oe.memoizedState,t)},useTransition:function(){var t=Jl(Vi)[0],e=Xe().memoizedState;return[t,e]},useMutableSource:lm,useSyncExternalStore:am,useId:Sm,unstable_isNewReconciler:!1};function tt(t,e){if(t&&t.defaultProps){e=Z({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Z({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ol={isMounted:function(t){return(t=t._reactInternals)?Qn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ne(),i=on(t),s=Rt(r,i);s.payload=e,n!=null&&(s.callback=n),e=rn(t,s,i),e!==null&&(lt(e,t,i,r),$s(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ne(),i=on(t),s=Rt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rn(t,s,i),e!==null&&(lt(e,t,i,r),$s(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ne(),r=on(t),i=Rt(n,r);i.tag=2,e!=null&&(i.callback=e),e=rn(t,i,r),e!==null&&(lt(e,t,r,n),$s(e,t,r))}};function fh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Mi(n,r)||!Mi(i,s):!0}function km(t,e,n){var r=!1,i=pn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(i=be(e)?Fn:Ie.current,r=e.contextTypes,s=(r=r!=null)?Ir(t,i):pn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ol,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ph(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ol.enqueueReplaceState(e,e.state,null)}function Ya(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},oc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ye(s):(s=be(e)?Fn:Ie.current,i.context=Ir(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ol.enqueueReplaceState(i,i.state,null),yo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Pr(t,e){try{var n="",r=e;do n+=Uv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var d0=typeof WeakMap=="function"?WeakMap:Map;function Nm(t,e,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Io||(Io=!0,lu=r),Xa(t,e)},n}function Pm(t,e,n){n=Rt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xa(t,e),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new d0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=T0.bind(null,t,e,n),e.then(t,t))}function gh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _h(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rt(-1,1),e.tag=2,rn(n,e,1))),n.lanes|=1),t)}var h0=Ut.ReactCurrentOwner,De=!1;function Te(t,e,n,r){e.child=t===null?rm(e,null,n,r):kr(e,t.child,n,r)}function vh(t,e,n,r,i){n=n.render;var s=e.ref;return gr(e,i),r=dc(t,e,n,r,s,i),n=hc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(Y&&n&&Zu(e),e.flags|=1,Te(t,e,r,i),e.child)}function yh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Sc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Rm(t,e,s,r,i)):(t=Xs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mi,n(o,r)&&t.ref===e.ref)return Lt(t,e,i)}return e.flags|=1,t=ln(s,r),t.ref=e.ref,t.return=e,e.child=t}function Rm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Mi(s,r)&&t.ref===e.ref)if(De=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(De=!0);else return e.lanes=t.lanes,Lt(t,e,i)}return Ja(t,e,n,r,i)}function xm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(cr,je),je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(cr,je),je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(cr,je),je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(cr,je),je|=r;return Te(t,e,i,n),e.child}function Am(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ja(t,e,n,r,i){var s=be(n)?Fn:Ie.current;return s=Ir(e,s),gr(e,i),n=dc(t,e,n,r,s,i),r=hc(),t!==null&&!De?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lt(t,e,i)):(Y&&r&&Zu(e),e.flags|=1,Te(t,e,n,i),e.child)}function wh(t,e,n,r,i){if(be(n)){var s=!0;po(e)}else s=!1;if(gr(e,i),e.stateNode===null)Qs(t,e),km(e,n,r),Ya(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=be(n)?Fn:Ie.current,u=Ir(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&ph(e,o,r,u),Bt=!1;var h=e.memoizedState;o.state=h,yo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Me.current||Bt?(typeof c=="function"&&(qa(e,n,c,r),a=e.memoizedState),(l=Bt||fh(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,sm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:tt(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ye(a):(a=be(n)?Fn:Ie.current,a=Ir(e,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&ph(e,o,r,a),Bt=!1,h=e.memoizedState,o.state=h,yo(e,r,o,i);var _=e.memoizedState;l!==d||h!==_||Me.current||Bt?(typeof g=="function"&&(qa(e,n,g,r),_=e.memoizedState),(u=Bt||fh(e,n,u,r,h,_,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Za(t,e,n,r,s,i)}function Za(t,e,n,r,i,s){Am(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sh(e,n,!1),Lt(t,e,s);r=e.stateNode,h0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=kr(e,t.child,null,s),e.child=kr(e,null,l,s)):Te(t,e,l,s),e.memoizedState=r.state,i&&sh(e,n,!0),e.child}function Om(t){var e=t.stateNode;e.pendingContext?ih(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ih(t,e.context,!1),lc(t,e.containerInfo)}function Eh(t,e,n,r,i){return Tr(),tc(i),e.flags|=256,Te(t,e,n,r),e.child}var eu={dehydrated:null,treeContext:null,retryLane:0};function tu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dm(t,e,n){var r=e.pendingProps,i=X.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(X,i&1),t===null)return Ka(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ul(o,r,0,null),t=Mn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tu(n),e.memoizedState=eu,t):mc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return f0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=ln(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ln(l,s):(s=Mn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?tu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=eu,r}return s=t.child,t=s.sibling,r=ln(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function mc(t,e){return e=ul({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ds(t,e,n,r){return r!==null&&tc(r),kr(e,t.child,null,n),t=mc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function f0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zl(Error(E(422))),Ds(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ul({mode:"visible",children:r.children},i,0,null),s=Mn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&kr(e,t.child,null,o),e.child.memoizedState=tu(o),e.memoizedState=eu,s);if(!(e.mode&1))return Ds(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=Zl(s,r,void 0),Ds(t,e,o,r)}if(l=(o&t.childLanes)!==0,De||l){if(r=pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dt(t,i),lt(r,t,i,-1))}return Ec(),r=Zl(Error(E(421))),Ds(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=k0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,ze=nn(i.nextSibling),We=e,Y=!0,rt=null,t!==null&&($e[Ge++]=St,$e[Ge++]=Ct,$e[Ge++]=Un,St=t.id,Ct=t.overflow,Un=e),e=mc(e,r.children),e.flags|=4096,e)}function Sh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qa(t.return,e,n)}function ea(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Lm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Te(t,e,r.children,n),r=X.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sh(t,n,e);else if(t.tag===19)Sh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(X,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ea(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ea(e,!0,n,null,s);break;case"together":ea(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function p0(t,e,n){switch(e.tag){case 3:Om(e),Tr();break;case 5:om(e);break;case 1:be(e.type)&&po(e);break;case 4:lc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(_o,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(X,X.current&1),e.flags|=128,null):n&e.child.childLanes?Dm(t,e,n):(G(X,X.current&1),t=Lt(t,e,n),t!==null?t.sibling:null);G(X,X.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Lm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(X,X.current),r)break;return null;case 22:case 23:return e.lanes=0,xm(t,e,n)}return Lt(t,e,n)}var Mm,nu,bm,Fm;Mm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nu=function(){};bm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,An(mt.current);var s=null;switch(n){case"input":i=Ia(t,i),r=Ia(t,r),s=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),s=[];break;case"textarea":i=Na(t,i),r=Na(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ho)}Ra(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Fm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ni(t,e){if(!Y)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Se(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function m0(t,e,n){var r=e.pendingProps;switch(ec(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(e),null;case 1:return be(e.type)&&fo(),Se(e),null;case 3:return r=e.stateNode,Nr(),q(Me),q(Ie),uc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(As(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rt!==null&&(cu(rt),rt=null))),nu(t,e),Se(e),null;case 5:ac(e);var i=An(zi.current);if(n=e.type,t!==null&&e.stateNode!=null)bm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Se(e),null}if(t=An(mt.current),As(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ft]=e,r[Ui]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<hi.length;i++)Q(hi[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Ad(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":Dd(r,s),Q("invalid",r)}Ra(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&xs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&xs(r.textContent,l,t),i=["children",""+l]):Pi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":Ss(r),Od(r,s,!0);break;case"textarea":Ss(r),Ld(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ho)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ft]=e,t[Ui]=r,Mm(t,e,!1,!1),e.stateNode=t;e:{switch(o=xa(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<hi.length;i++)Q(hi[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":Ad(t,r),i=Ia(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),Q("invalid",t);break;case"textarea":Dd(t,r),i=Na(t,r),Q("invalid",t);break;default:i=r}Ra(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?pp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&hp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ri(t,a):typeof a=="number"&&Ri(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Q("scroll",t):a!=null&&ju(t,s,a,o))}switch(n){case"input":Ss(t),Od(t,r,!1);break;case"textarea":Ss(t),Ld(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hr(t,!!r.multiple,s,!1):r.defaultValue!=null&&hr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Se(e),null;case 6:if(t&&e.stateNode!=null)Fm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=An(zi.current),An(mt.current),As(e)){if(r=e.stateNode,n=e.memoizedProps,r[ft]=e,(s=r.nodeValue!==n)&&(t=We,t!==null))switch(t.tag){case 3:xs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=e,e.stateNode=r}return Se(e),null;case 13:if(q(X),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Y&&ze!==null&&e.mode&1&&!(e.flags&128))tm(),Tr(),e.flags|=98560,s=!1;else if(s=As(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[ft]=e}else Tr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Se(e),s=!1}else rt!==null&&(cu(rt),rt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||X.current&1?ue===0&&(ue=3):Ec())),e.updateQueue!==null&&(e.flags|=4),Se(e),null);case 4:return Nr(),nu(t,e),t===null&&bi(e.stateNode.containerInfo),Se(e),null;case 10:return ic(e.type._context),Se(e),null;case 17:return be(e.type)&&fo(),Se(e),null;case 19:if(q(X),s=e.memoizedState,s===null)return Se(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ni(s,!1);else{if(ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wo(t),o!==null){for(e.flags|=128,ni(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(X,X.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>Rr&&(e.flags|=128,r=!0,ni(s,!1),e.lanes=4194304)}else{if(!r)if(t=wo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ni(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Y)return Se(e),null}else 2*ie()-s.renderingStartTime>Rr&&n!==1073741824&&(e.flags|=128,r=!0,ni(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=X.current,G(X,r?n&1|2:n&1),e):(Se(e),null);case 22:case 23:return wc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?je&1073741824&&(Se(e),e.subtreeFlags&6&&(e.flags|=8192)):Se(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function g0(t,e){switch(ec(e),e.tag){case 1:return be(e.type)&&fo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Nr(),q(Me),q(Ie),uc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ac(e),null;case 13:if(q(X),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Tr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return q(X),null;case 4:return Nr(),null;case 10:return ic(e.type._context),null;case 22:case 23:return wc(),null;case 24:return null;default:return null}}var Ls=!1,Ce=!1,_0=typeof WeakSet=="function"?WeakSet:Set,T=null;function ur(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(t,e,r)}else n.current=null}function ru(t,e,n){try{n()}catch(r){ee(t,e,r)}}var Ch=!1;function v0(t,e){if(za=ao,t=Vp(),Ju(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wa={focusedElem:t,selectionRange:n},ao=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,C=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:tt(e.type,w),C);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){ee(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return _=Ch,Ch=!1,_}function yi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ru(e,n,s)}i=i.next}while(i!==r)}}function ll(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function iu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Um(t){var e=t.alternate;e!==null&&(t.alternate=null,Um(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ft],delete e[Ui],delete e[Ha],delete e[e0],delete e[t0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jm(t){return t.tag===5||t.tag===3||t.tag===4}function Ih(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ho));else if(r!==4&&(t=t.child,t!==null))for(su(t,e,n),t=t.sibling;t!==null;)su(t,e,n),t=t.sibling}function ou(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ou(t,e,n),t=t.sibling;t!==null;)ou(t,e,n),t=t.sibling}var me=null,nt=!1;function zt(t,e,n){for(n=n.child;n!==null;)zm(t,e,n),n=n.sibling}function zm(t,e,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Zo,n)}catch{}switch(n.tag){case 5:Ce||ur(n,e);case 6:var r=me,i=nt;me=null,zt(t,e,n),me=r,nt=i,me!==null&&(nt?(t=me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(nt?(t=me,n=n.stateNode,t.nodeType===8?Kl(t.parentNode,n):t.nodeType===1&&Kl(t,n),Di(t)):Kl(me,n.stateNode));break;case 4:r=me,i=nt,me=n.stateNode.containerInfo,nt=!0,zt(t,e,n),me=r,nt=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ru(n,e,o),i=i.next}while(i!==r)}zt(t,e,n);break;case 1:if(!Ce&&(ur(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ee(n,e,l)}zt(t,e,n);break;case 21:zt(t,e,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,zt(t,e,n),Ce=r):zt(t,e,n);break;default:zt(t,e,n)}}function Th(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _0),e.forEach(function(r){var i=N0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,nt=!1;break e;case 3:me=l.stateNode.containerInfo,nt=!0;break e;case 4:me=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(me===null)throw Error(E(160));zm(s,o,i),me=null,nt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wm(e,t),e=e.sibling}function Wm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(et(e,t),dt(t),r&4){try{yi(3,t,t.return),ll(3,t)}catch(w){ee(t,t.return,w)}try{yi(5,t,t.return)}catch(w){ee(t,t.return,w)}}break;case 1:et(e,t),dt(t),r&512&&n!==null&&ur(n,n.return);break;case 5:if(et(e,t),dt(t),r&512&&n!==null&&ur(n,n.return),t.flags&32){var i=t.stateNode;try{Ri(i,"")}catch(w){ee(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&up(i,s),xa(l,o);var u=xa(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?pp(i,d):c==="dangerouslySetInnerHTML"?hp(i,d):c==="children"?Ri(i,d):ju(i,c,d,u)}switch(l){case"input":Ta(i,s);break;case"textarea":cp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?hr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?hr(i,!!s.multiple,s.defaultValue,!0):hr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ui]=s}catch(w){ee(t,t.return,w)}}break;case 6:if(et(e,t),dt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ee(t,t.return,w)}}break;case 3:if(et(e,t),dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Di(e.containerInfo)}catch(w){ee(t,t.return,w)}break;case 4:et(e,t),dt(t);break;case 13:et(e,t),dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vc=ie())),r&4&&Th(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ce=(u=Ce)||c,et(e,t),Ce=u):et(e,t),dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(T=t,c=t.child;c!==null;){for(d=T=c;T!==null;){switch(h=T,g=h.child,h.tag){case 0:case 11:case 14:case 15:yi(4,h,h.return);break;case 1:ur(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){ee(r,n,w)}}break;case 5:ur(h,h.return);break;case 22:if(h.memoizedState!==null){Nh(d);continue}}g!==null?(g.return=h,T=g):Nh(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=fp("display",o))}catch(w){ee(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ee(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:et(e,t),dt(t),r&4&&Th(t);break;case 21:break;default:et(e,t),dt(t)}}function dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jm(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ri(i,""),r.flags&=-33);var s=Ih(t);ou(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ih(t);su(t,l,o);break;default:throw Error(E(161))}}catch(a){ee(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function y0(t,e,n){T=t,Vm(t)}function Vm(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var i=T,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ls;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ce;l=Ls;var u=Ce;if(Ls=o,(Ce=a)&&!u)for(T=i;T!==null;)o=T,a=o.child,o.tag===22&&o.memoizedState!==null?Ph(i):a!==null?(a.return=o,T=a):Ph(i);for(;s!==null;)T=s,Vm(s),s=s.sibling;T=i,Ls=l,Ce=u}kh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,T=s):kh(t)}}function kh(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ce||ll(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ch(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ch(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Di(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ce||e.flags&512&&iu(e)}catch(h){ee(e,e.return,h)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function Nh(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function Ph(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ll(4,e)}catch(a){ee(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ee(e,i,a)}}var s=e.return;try{iu(e)}catch(a){ee(e,s,a)}break;case 5:var o=e.return;try{iu(e)}catch(a){ee(e,o,a)}}}catch(a){ee(e,e.return,a)}if(e===t){T=null;break}var l=e.sibling;if(l!==null){l.return=e.return,T=l;break}T=e.return}}var w0=Math.ceil,Co=Ut.ReactCurrentDispatcher,gc=Ut.ReactCurrentOwner,qe=Ut.ReactCurrentBatchConfig,j=0,pe=null,se=null,ve=0,je=0,cr=yn(0),ue=0,Hi=null,zn=0,al=0,_c=0,wi=null,Oe=null,vc=0,Rr=1/0,yt=null,Io=!1,lu=null,sn=null,Ms=!1,Yt=null,To=0,Ei=0,au=null,qs=-1,Ys=0;function Ne(){return j&6?ie():qs!==-1?qs:qs=ie()}function on(t){return t.mode&1?j&2&&ve!==0?ve&-ve:r0.transition!==null?(Ys===0&&(Ys=kp()),Ys):(t=W,t!==0||(t=window.event,t=t===void 0?16:Dp(t.type)),t):1}function lt(t,e,n,r){if(50<Ei)throw Ei=0,au=null,Error(E(185));rs(t,n,r),(!(j&2)||t!==pe)&&(t===pe&&(!(j&2)&&(al|=n),ue===4&&$t(t,ve)),Fe(t,r),n===1&&j===0&&!(e.mode&1)&&(Rr=ie()+500,il&&wn()))}function Fe(t,e){var n=t.callbackNode;ry(t,e);var r=lo(t,t===pe?ve:0);if(r===0)n!==null&&Fd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fd(n),e===1)t.tag===0?n0(Rh.bind(null,t)):Jp(Rh.bind(null,t)),Jy(function(){!(j&6)&&wn()}),n=null;else{switch(Np(r)){case 1:n=Hu;break;case 4:n=Ip;break;case 16:n=oo;break;case 536870912:n=Tp;break;default:n=oo}n=Ym(n,Bm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bm(t,e){if(qs=-1,Ys=0,j&6)throw Error(E(327));var n=t.callbackNode;if(_r()&&t.callbackNode!==n)return null;var r=lo(t,t===pe?ve:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ko(t,r);else{e=r;var i=j;j|=2;var s=$m();(pe!==t||ve!==e)&&(yt=null,Rr=ie()+500,Ln(t,e));do try{C0();break}catch(l){Hm(t,l)}while(!0);rc(),Co.current=s,j=i,se!==null?e=0:(pe=null,ve=0,e=ue)}if(e!==0){if(e===2&&(i=Ma(t),i!==0&&(r=i,e=uu(t,i))),e===1)throw n=Hi,Ln(t,0),$t(t,r),Fe(t,ie()),n;if(e===6)$t(t,r);else{if(i=t.current.alternate,!(r&30)&&!E0(i)&&(e=ko(t,r),e===2&&(s=Ma(t),s!==0&&(r=s,e=uu(t,s))),e===1))throw n=Hi,Ln(t,0),$t(t,r),Fe(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:kn(t,Oe,yt);break;case 3:if($t(t,r),(r&130023424)===r&&(e=vc+500-ie(),10<e)){if(lo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ne(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ba(kn.bind(null,t,Oe,yt),e);break}kn(t,Oe,yt);break;case 4:if($t(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*w0(r/1960))-r,10<r){t.timeoutHandle=Ba(kn.bind(null,t,Oe,yt),r);break}kn(t,Oe,yt);break;case 5:kn(t,Oe,yt);break;default:throw Error(E(329))}}}return Fe(t,ie()),t.callbackNode===n?Bm.bind(null,t):null}function uu(t,e){var n=wi;return t.current.memoizedState.isDehydrated&&(Ln(t,e).flags|=256),t=ko(t,e),t!==2&&(e=Oe,Oe=n,e!==null&&cu(e)),t}function cu(t){Oe===null?Oe=t:Oe.push.apply(Oe,t)}function E0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $t(t,e){for(e&=~_c,e&=~al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ot(e),r=1<<n;t[n]=-1,e&=~r}}function Rh(t){if(j&6)throw Error(E(327));_r();var e=lo(t,0);if(!(e&1))return Fe(t,ie()),null;var n=ko(t,e);if(t.tag!==0&&n===2){var r=Ma(t);r!==0&&(e=r,n=uu(t,r))}if(n===1)throw n=Hi,Ln(t,0),$t(t,e),Fe(t,ie()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kn(t,Oe,yt),Fe(t,ie()),null}function yc(t,e){var n=j;j|=1;try{return t(e)}finally{j=n,j===0&&(Rr=ie()+500,il&&wn())}}function Wn(t){Yt!==null&&Yt.tag===0&&!(j&6)&&_r();var e=j;j|=1;var n=qe.transition,r=W;try{if(qe.transition=null,W=1,t)return t()}finally{W=r,qe.transition=n,j=e,!(j&6)&&wn()}}function wc(){je=cr.current,q(cr)}function Ln(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Xy(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(ec(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fo();break;case 3:Nr(),q(Me),q(Ie),uc();break;case 5:ac(r);break;case 4:Nr();break;case 13:q(X);break;case 19:q(X);break;case 10:ic(r.type._context);break;case 22:case 23:wc()}n=n.return}if(pe=t,se=t=ln(t.current,null),ve=je=e,ue=0,Hi=null,_c=al=zn=0,Oe=wi=null,xn!==null){for(e=0;e<xn.length;e++)if(n=xn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xn=null}return t}function Hm(t,e){do{var n=se;try{if(rc(),Gs.current=So,Eo){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eo=!1}if(jn=0,he=oe=J=null,vi=!1,Wi=0,gc.current=null,n===null||n.return===null){ue=1,Hi=e,se=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=gh(o);if(g!==null){g.flags&=-257,_h(g,o,l,s,e),g.mode&1&&mh(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var w=new Set;w.add(a),e.updateQueue=w}else _.add(a);break e}else{if(!(e&1)){mh(s,u,e),Ec();break e}a=Error(E(426))}}else if(Y&&l.mode&1){var C=gh(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),_h(C,o,l,s,e),tc(Pr(a,l));break e}}s=a=Pr(a,l),ue!==4&&(ue=2),wi===null?wi=[s]:wi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Nm(s,a,e);uh(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(sn===null||!sn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Pm(s,l,e);uh(s,y);break e}}s=s.return}while(s!==null)}Km(n)}catch(I){e=I,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function $m(){var t=Co.current;return Co.current=So,t===null?So:t}function Ec(){(ue===0||ue===3||ue===2)&&(ue=4),pe===null||!(zn&268435455)&&!(al&268435455)||$t(pe,ve)}function ko(t,e){var n=j;j|=2;var r=$m();(pe!==t||ve!==e)&&(yt=null,Ln(t,e));do try{S0();break}catch(i){Hm(t,i)}while(!0);if(rc(),j=n,Co.current=r,se!==null)throw Error(E(261));return pe=null,ve=0,ue}function S0(){for(;se!==null;)Gm(se)}function C0(){for(;se!==null&&!Qv();)Gm(se)}function Gm(t){var e=qm(t.alternate,t,je);t.memoizedProps=t.pendingProps,e===null?Km(t):se=e,gc.current=null}function Km(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=g0(n,e),n!==null){n.flags&=32767,se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ue=6,se=null;return}}else if(n=m0(n,e,je),n!==null){se=n;return}if(e=e.sibling,e!==null){se=e;return}se=e=t}while(e!==null);ue===0&&(ue=5)}function kn(t,e,n){var r=W,i=qe.transition;try{qe.transition=null,W=1,I0(t,e,n,r)}finally{qe.transition=i,W=r}return null}function I0(t,e,n,r){do _r();while(Yt!==null);if(j&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iy(t,s),t===pe&&(se=pe=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ms||(Ms=!0,Ym(oo,function(){return _r(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=qe.transition,qe.transition=null;var o=W;W=1;var l=j;j|=4,gc.current=null,v0(t,n),Wm(n,t),Hy(Wa),ao=!!za,Wa=za=null,t.current=n,y0(n),qv(),j=l,W=o,qe.transition=s}else t.current=n;if(Ms&&(Ms=!1,Yt=t,To=i),s=t.pendingLanes,s===0&&(sn=null),Jv(n.stateNode),Fe(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Io)throw Io=!1,t=lu,lu=null,t;return To&1&&t.tag!==0&&_r(),s=t.pendingLanes,s&1?t===au?Ei++:(Ei=0,au=t):Ei=0,wn(),null}function _r(){if(Yt!==null){var t=Np(To),e=qe.transition,n=W;try{if(qe.transition=null,W=16>t?16:t,Yt===null)var r=!1;else{if(t=Yt,Yt=null,To=0,j&6)throw Error(E(331));var i=j;for(j|=4,T=t.current;T!==null;){var s=T,o=s.child;if(T.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:yi(8,c,s)}var d=c.child;if(d!==null)d.return=c,T=d;else for(;T!==null;){c=T;var h=c.sibling,g=c.return;if(Um(c),c===u){T=null;break}if(h!==null){h.return=g,T=h;break}T=g}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}T=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,T=o;else e:for(;T!==null;){if(s=T,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,T=p;break e}T=s.return}}var f=t.current;for(T=f;T!==null;){o=T;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,T=m;else e:for(o=f;T!==null;){if(l=T,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ll(9,l)}}catch(I){ee(l,l.return,I)}if(l===o){T=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,T=y;break e}T=l.return}}if(j=i,wn(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Zo,t)}catch{}r=!0}return r}finally{W=n,qe.transition=e}}return!1}function xh(t,e,n){e=Pr(n,e),e=Nm(t,e,1),t=rn(t,e,1),e=Ne(),t!==null&&(rs(t,1,e),Fe(t,e))}function ee(t,e,n){if(t.tag===3)xh(t,t,n);else for(;e!==null;){if(e.tag===3){xh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){t=Pr(n,t),t=Pm(e,t,1),e=rn(e,t,1),t=Ne(),e!==null&&(rs(e,1,t),Fe(e,t));break}}e=e.return}}function T0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ne(),t.pingedLanes|=t.suspendedLanes&n,pe===t&&(ve&n)===n&&(ue===4||ue===3&&(ve&130023424)===ve&&500>ie()-vc?Ln(t,0):_c|=n),Fe(t,e)}function Qm(t,e){e===0&&(t.mode&1?(e=Ts,Ts<<=1,!(Ts&130023424)&&(Ts=4194304)):e=1);var n=Ne();t=Dt(t,e),t!==null&&(rs(t,e,n),Fe(t,n))}function k0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qm(t,n)}function N0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Qm(t,n)}var qm;qm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)De=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return De=!1,p0(t,e,n);De=!!(t.flags&131072)}else De=!1,Y&&e.flags&1048576&&Zp(e,go,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Qs(t,e),t=e.pendingProps;var i=Ir(e,Ie.current);gr(e,n),i=dc(null,e,r,t,i,n);var s=hc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,be(r)?(s=!0,po(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,oc(e),i.updater=ol,e.stateNode=i,i._reactInternals=e,Ya(e,r,t,n),e=Za(null,e,r,!0,s,n)):(e.tag=0,Y&&s&&Zu(e),Te(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Qs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=R0(r),t=tt(r,t),i){case 0:e=Ja(null,e,r,t,n);break e;case 1:e=wh(null,e,r,t,n);break e;case 11:e=vh(null,e,r,t,n);break e;case 14:e=yh(null,e,r,tt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Ja(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),wh(t,e,r,i,n);case 3:e:{if(Om(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,sm(t,e),yo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Pr(Error(E(423)),e),e=Eh(t,e,r,n,i);break e}else if(r!==i){i=Pr(Error(E(424)),e),e=Eh(t,e,r,n,i);break e}else for(ze=nn(e.stateNode.containerInfo.firstChild),We=e,Y=!0,rt=null,n=rm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tr(),r===i){e=Lt(t,e,n);break e}Te(t,e,r,n)}e=e.child}return e;case 5:return om(e),t===null&&Ka(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Va(r,i)?o=null:s!==null&&Va(r,s)&&(e.flags|=32),Am(t,e),Te(t,e,o,n),e.child;case 6:return t===null&&Ka(e),null;case 13:return Dm(t,e,n);case 4:return lc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=kr(e,null,r,n):Te(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),vh(t,e,r,i,n);case 7:return Te(t,e,e.pendingProps,n),e.child;case 8:return Te(t,e,e.pendingProps.children,n),e.child;case 12:return Te(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(_o,r._currentValue),r._currentValue=o,s!==null)if(ct(s.value,o)){if(s.children===i.children&&!Me.current){e=Lt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Rt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Qa(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Qa(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Te(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,gr(e,n),i=Ye(i),r=r(i),e.flags|=1,Te(t,e,r,n),e.child;case 14:return r=e.type,i=tt(r,e.pendingProps),i=tt(r.type,i),yh(t,e,r,i,n);case 15:return Rm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tt(r,i),Qs(t,e),e.tag=1,be(r)?(t=!0,po(e)):t=!1,gr(e,n),km(e,r,i),Ya(e,r,i,n),Za(null,e,r,!0,t,n);case 19:return Lm(t,e,n);case 22:return xm(t,e,n)}throw Error(E(156,e.tag))};function Ym(t,e){return Cp(t,e)}function P0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(t,e,n,r){return new P0(t,e,n,r)}function Sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function R0(t){if(typeof t=="function")return Sc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wu)return 11;if(t===Vu)return 14}return 2}function ln(t,e){var n=t.alternate;return n===null?(n=Ke(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Sc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case er:return Mn(n.children,i,s,e);case zu:o=8,i|=8;break;case wa:return t=Ke(12,n,e,i|2),t.elementType=wa,t.lanes=s,t;case Ea:return t=Ke(13,n,e,i),t.elementType=Ea,t.lanes=s,t;case Sa:return t=Ke(19,n,e,i),t.elementType=Sa,t.lanes=s,t;case op:return ul(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ip:o=10;break e;case sp:o=9;break e;case Wu:o=11;break e;case Vu:o=14;break e;case Vt:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Ke(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mn(t,e,n,r){return t=Ke(7,t,r,e),t.lanes=n,t}function ul(t,e,n,r){return t=Ke(22,t,r,e),t.elementType=op,t.lanes=n,t.stateNode={isHidden:!1},t}function ta(t,e,n){return t=Ke(6,t,null,e),t.lanes=n,t}function na(t,e,n){return e=Ke(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function x0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cc(t,e,n,r,i,s,o,l,a){return t=new x0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ke(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oc(s),t}function A0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Xm(t){if(!t)return pn;t=t._reactInternals;e:{if(Qn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(be(n))return Xp(t,n,e)}return e}function Jm(t,e,n,r,i,s,o,l,a){return t=Cc(n,r,!0,t,i,s,o,l,a),t.context=Xm(null),n=t.current,r=Ne(),i=on(n),s=Rt(r,i),s.callback=e??null,rn(n,s,i),t.current.lanes=i,rs(t,i,r),Fe(t,r),t}function cl(t,e,n,r){var i=e.current,s=Ne(),o=on(i);return n=Xm(n),e.context===null?e.context=n:e.pendingContext=n,e=Rt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=rn(i,e,o),t!==null&&(lt(t,i,o,s),$s(t,i,o)),o}function No(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ah(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ic(t,e){Ah(t,e),(t=t.alternate)&&Ah(t,e)}function O0(){return null}var Zm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tc(t){this._internalRoot=t}dl.prototype.render=Tc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));cl(t,e,null,null)};dl.prototype.unmount=Tc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wn(function(){cl(null,t,null,null)}),e[Ot]=null}};function dl(t){this._internalRoot=t}dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=xp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ht.length&&e!==0&&e<Ht[n].priority;n++);Ht.splice(n,0,t),n===0&&Op(t)}};function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Oh(){}function D0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=No(o);s.call(u)}}var o=Jm(e,r,t,0,null,!1,!1,"",Oh);return t._reactRootContainer=o,t[Ot]=o.current,bi(t.nodeType===8?t.parentNode:t),Wn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=No(a);l.call(u)}}var a=Cc(t,0,!1,null,null,!1,!1,"",Oh);return t._reactRootContainer=a,t[Ot]=a.current,bi(t.nodeType===8?t.parentNode:t),Wn(function(){cl(e,a,n,r)}),a}function fl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=No(o);l.call(a)}}cl(e,o,t,i)}else o=D0(n,e,t,i,r);return No(o)}Pp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=di(e.pendingLanes);n!==0&&($u(e,n|1),Fe(e,ie()),!(j&6)&&(Rr=ie()+500,wn()))}break;case 13:Wn(function(){var r=Dt(t,1);if(r!==null){var i=Ne();lt(r,t,1,i)}}),Ic(t,1)}};Gu=function(t){if(t.tag===13){var e=Dt(t,134217728);if(e!==null){var n=Ne();lt(e,t,134217728,n)}Ic(t,134217728)}};Rp=function(t){if(t.tag===13){var e=on(t),n=Dt(t,e);if(n!==null){var r=Ne();lt(n,t,e,r)}Ic(t,e)}};xp=function(){return W};Ap=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};Oa=function(t,e,n){switch(e){case"input":if(Ta(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=rl(r);if(!i)throw Error(E(90));ap(r),Ta(r,i)}}}break;case"textarea":cp(t,n);break;case"select":e=n.value,e!=null&&hr(t,!!n.multiple,e,!1)}};_p=yc;vp=Wn;var L0={usingClientEntryPoint:!1,Events:[ss,ir,rl,mp,gp,yc]},ri={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},M0={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ep(t),t===null?null:t.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||O0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{Zo=bs.inject(M0),pt=bs}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0;Be.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kc(e))throw Error(E(200));return A0(t,e,null,n)};Be.createRoot=function(t,e){if(!kc(t))throw Error(E(299));var n=!1,r="",i=Zm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cc(t,1,!1,null,null,n,!1,r,i),t[Ot]=e.current,bi(t.nodeType===8?t.parentNode:t),new Tc(e)};Be.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Ep(e),t=t===null?null:t.stateNode,t};Be.flushSync=function(t){return Wn(t)};Be.hydrate=function(t,e,n){if(!hl(e))throw Error(E(200));return fl(null,t,e,!0,n)};Be.hydrateRoot=function(t,e,n){if(!kc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Zm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Jm(e,null,t,1,n??null,i,!1,s,o),t[Ot]=e.current,bi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new dl(e)};Be.render=function(t,e,n){if(!hl(e))throw Error(E(200));return fl(null,t,e,!1,n)};Be.unmountComponentAtNode=function(t){if(!hl(t))throw Error(E(40));return t._reactRootContainer?(Wn(function(){fl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ot]=null})}),!0):!1};Be.unstable_batchedUpdates=yc;Be.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!hl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return fl(t,e,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function eg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eg)}catch(t){console.error(t)}}eg(),ep.exports=Be;var b0=ep.exports,Dh=b0;va.createRoot=Dh.createRoot,va.hydrateRoot=Dh.hydrateRoot;const ii={app:{title:"Mi aplicación React con Vite"},home:{title:"Bienvenido",subtitle:"Esta es la pantalla de inicio. Usa el botón para iniciar sesión con Google.",loginButtonText:"Iniciar con Google"},login:{title:"Iniciar sesión",googleButtonText:"Iniciar con Google",cancelButtonText:"Cancelar",hintText:"Usa tu cuenta de Google para iniciar sesión."},welcome:{title:"Hola Mundo",message:"¡Has iniciado sesión correctamente y ves este mensaje de Hola Mundo!",logoutButtonText:"Cerrar sesión"}};function F0({config:t,onNavigate:e}){return v.jsxs("section",{className:"home-screen",children:[v.jsx("h2",{children:t.title}),v.jsx("p",{children:t.subtitle}),v.jsx("button",{className:"primary-button",onClick:()=>e("login"),children:t.loginButtonText})]})}function U0({config:t,onLogin:e,onCancel:n,errorMessage:r}){const[i,s]=_e.useState(!1),o=async()=>{s(!0);try{await e()}catch(l){console.error("Error en login con Google:",l)}finally{s(!1)}};return v.jsxs("section",{className:"login-screen",children:[v.jsx("h2",{children:t.title}),v.jsxs("div",{className:"login-form",children:[v.jsx("button",{className:"google-button",onClick:o,disabled:i,children:i?"Cargando...":t.googleButtonText}),v.jsx("p",{className:"login-hint",children:t.hintText}),r&&v.jsx("p",{className:"login-error",children:r}),v.jsx("div",{className:"login-actions",children:v.jsx("button",{className:"secondary-button",type:"button",onClick:n,children:t.cancelButtonText})})]})]})}var tg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Lh=Jt.createContext&&Jt.createContext(tg),j0=["attr","size","title"];function z0(t,e){if(t==null)return{};var n,r,i=W0(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function W0(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function Po(){return Po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Po.apply(null,arguments)}function Mh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ro(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Mh(Object(n),!0).forEach(function(r){V0(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mh(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function V0(t,e,n){return(e=B0(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B0(t){var e=H0(t,"string");return typeof e=="symbol"?e:e+""}function H0(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ng(t){return t&&t.map((e,n)=>Jt.createElement(e.tag,Ro({key:n},e.attr),ng(e.child)))}function En(t){return e=>Jt.createElement($0,Po({attr:Ro({},t.attr)},e),ng(t.child))}function $0(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=z0(t,j0),l=i||n.size||"1em",a;return n.className&&(a=n.className),t.className&&(a=(a?a+" ":"")+t.className),Jt.createElement("svg",Po({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:Ro(Ro({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&Jt.createElement("title",null,s),t.children)};return Lh!==void 0?Jt.createElement(Lh.Consumer,null,n=>e(n)):e(tg)}function G0(t){return En({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}function K0(t){return En({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(t)}function Q0(t){return En({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"},child:[]}]})(t)}function q0(t){return En({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(t)}function Y0(t){return En({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function X0(t){return En({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(t)}function J0(t){return En({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(t)}function Z0(t){return En({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}const ew={apps:[{id:"perfil",icon:"FaCog",titulo:"Configuración",rolesPermitidos:["usuario","prestador","admin"]},{id:"agenda-tours",icon:"FaCalendarAlt",titulo:"Agenda Tours",rolesPermitidos:["prestador","admin"]},{id:"rifas",icon:"FaTicketAlt",titulo:"Rifas",rolesPermitidos:["usuario","prestador","admin"]}]},tw={FaCog:X0,FaCalendarAlt:Z0,FaTicketAlt:Q0};function nw({role:t,onSelectApp:e}){const n=ew.apps.filter(r=>r.rolesPermitidos.includes(t));return v.jsx("div",{className:"apps-launcher",children:v.jsx("div",{className:"apps-grid",children:n.map(r=>{const i=tw[r.icon];return v.jsxs("button",{className:"app-icon",onClick:()=>e(r.id),title:r.titulo,children:[v.jsx("div",{className:"app-icon-bg",children:i&&v.jsx(i,{size:32})}),v.jsx("span",{className:"app-title",children:r.titulo})]},r.id)})})})}var bh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Wr(e)},Wr=function(t){return new Error("Firebase Database ("+rg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},rw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Nc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ig(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new iw;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sg=function(t){const e=ig(t);return Nc.encodeByteArray(e,!0)},xo=function(t){return sg(t).replace(/\./g,"")},Ao=function(t){try{return Nc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t){return og(void 0,t)}function og(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ow(n)||(t[n]=og(t[n],e[n]));return t}function ow(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=()=>lw().__FIREBASE_DEFAULTS__,uw=()=>{if(typeof process>"u"||typeof bh>"u")return;const t=bh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ao(t[1]);return e&&JSON.parse(e)},Pc=()=>{try{return aw()||uw()||cw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lg=t=>{var e,n;return(n=(e=Pc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dw=t=>{const e=lg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ag=()=>{var t;return(t=Pc())===null||t===void 0?void 0:t.config},ug=t=>{var e;return(e=Pc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xo(JSON.stringify(n)),xo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function fw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mw(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gw(){return rg.NODE_ADMIN===!0}function _w(){try{return typeof indexedDB=="object"}catch{return!1}}function vw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yw,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ww(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,l,r)}}function ww(t,e){return t.replace(Ew,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ew=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){return JSON.parse(t)}function ae(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=$i(Ao(s[0])||""),n=$i(Ao(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Sw=function(t){const e=dg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Cw=function(t){const e=dg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function du(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Do(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Fh(s)&&Fh(o)){if(!Do(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Tw(t,e){const n=new kw(t,e);return n.subscribe.bind(n)}class kw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Nw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ra),i.error===void 0&&(i.error=ra),i.complete===void 0&&(i.complete=ra);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ra(){}function pl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ml=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ls;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Aw(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xw(t){return t===Nn?void 0:t}function Aw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const Dw={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},Lw=V.INFO,Mw={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},bw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Mw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xc{constructor(e){this.name=e,this._logLevel=Lw,this._logHandler=bw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const Fw=(t,e)=>e.some(n=>t instanceof n);let Uh,jh;function Uw(){return Uh||(Uh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jw(){return jh||(jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hg=new WeakMap,hu=new WeakMap,fg=new WeakMap,ia=new WeakMap,Ac=new WeakMap;function zw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(an(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hg.set(n,t)}).catch(()=>{}),Ac.set(e,t),e}function Ww(t){if(hu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hu.set(t,e)}let fu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vw(t){fu=t(fu)}function Bw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sa(this),e,...n);return fg.set(r,e.sort?e.sort():[e]),an(r)}:jw().includes(t)?function(...e){return t.apply(sa(this),e),an(hg.get(this))}:function(...e){return an(t.apply(sa(this),e))}}function Hw(t){return typeof t=="function"?Bw(t):(t instanceof IDBTransaction&&Ww(t),Fw(t,Uw())?new Proxy(t,fu):t)}function an(t){if(t instanceof IDBRequest)return zw(t);if(ia.has(t))return ia.get(t);const e=Hw(t);return e!==t&&(ia.set(t,e),Ac.set(e,t)),e}const sa=t=>Ac.get(t);function $w(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=an(o);return r&&o.addEventListener("upgradeneeded",a=>{r(an(o.result),a.oldVersion,a.newVersion,an(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Gw=["get","getKey","getAll","getAllKeys","count"],Kw=["put","add","delete","clear"],oa=new Map;function zh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oa.get(e))return oa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Kw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gw.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return oa.set(e,s),s}Vw(t=>({...t,get:(e,n,r)=>zh(e,n)||t.get(e,n,r),has:(e,n)=>!!zh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pu="@firebase/app",Wh="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new xc("@firebase/app"),Yw="@firebase/app-compat",Xw="@firebase/analytics-compat",Jw="@firebase/analytics",Zw="@firebase/app-check-compat",eE="@firebase/app-check",tE="@firebase/auth",nE="@firebase/auth-compat",rE="@firebase/database",iE="@firebase/data-connect",sE="@firebase/database-compat",oE="@firebase/functions",lE="@firebase/functions-compat",aE="@firebase/installations",uE="@firebase/installations-compat",cE="@firebase/messaging",dE="@firebase/messaging-compat",hE="@firebase/performance",fE="@firebase/performance-compat",pE="@firebase/remote-config",mE="@firebase/remote-config-compat",gE="@firebase/storage",_E="@firebase/storage-compat",vE="@firebase/firestore",yE="@firebase/vertexai-preview",wE="@firebase/firestore-compat",EE="firebase",SE="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="[DEFAULT]",CE={[pu]:"fire-core",[Yw]:"fire-core-compat",[Jw]:"fire-analytics",[Xw]:"fire-analytics-compat",[eE]:"fire-app-check",[Zw]:"fire-app-check-compat",[tE]:"fire-auth",[nE]:"fire-auth-compat",[rE]:"fire-rtdb",[iE]:"fire-data-connect",[sE]:"fire-rtdb-compat",[oE]:"fire-fn",[lE]:"fire-fn-compat",[aE]:"fire-iid",[uE]:"fire-iid-compat",[cE]:"fire-fcm",[dE]:"fire-fcm-compat",[hE]:"fire-perf",[fE]:"fire-perf-compat",[pE]:"fire-rc",[mE]:"fire-rc-compat",[gE]:"fire-gcs",[_E]:"fire-gcs-compat",[vE]:"fire-fst",[wE]:"fire-fst-compat",[yE]:"fire-vertex","fire-js":"fire-js",[EE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Map,IE=new Map,gu=new Map;function Vh(t,e){try{t.container.addComponent(e)}catch(n){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ar(t){const e=t.name;if(gu.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;gu.set(e,t);for(const n of Lo.values())Vh(n,t);for(const n of IE.values())Vh(n,t);return!0}function Oc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function It(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},un=new as("app","Firebase",TE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=SE;function pg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw un.create("bad-app-name",{appName:String(i)});if(n||(n=ag()),!n)throw un.create("no-options");const s=Lo.get(i);if(s){if(Do(n,s.options)&&Do(r,s.config))return s;throw un.create("duplicate-app",{appName:i})}const o=new Ow(i);for(const a of gu.values())o.addComponent(a);const l=new kE(n,r,o);return Lo.set(i,l),l}function mg(t=mu){const e=Lo.get(t);if(!e&&t===mu&&ag())return pg();if(!e)throw un.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let i=(r=CE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(l.join(" "));return}Ar(new Vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="firebase-heartbeat-database",PE=1,Gi="firebase-heartbeat-store";let la=null;function gg(){return la||(la=$w(NE,PE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Gi)}catch(n){console.warn(n)}}}}).catch(t=>{throw un.create("idb-open",{originalErrorMessage:t.message})})),la}async function RE(t){try{const n=(await gg()).transaction(Gi),r=await n.objectStore(Gi).get(_g(t));return await n.done,r}catch(e){if(e instanceof Sn)Mt.warn(e.message);else{const n=un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(n.message)}}}async function Bh(t,e){try{const r=(await gg()).transaction(Gi,"readwrite");await r.objectStore(Gi).put(e,_g(t)),await r.done}catch(n){if(n instanceof Sn)Mt.warn(n.message);else{const r=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mt.warn(r.message)}}}function _g(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=1024,AE=30*24*60*60*1e3;class OE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=AE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hh(),{heartbeatsToSend:r,unsentEntries:i}=DE(this._heartbeatsCache.heartbeats),s=xo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Mt.warn(n),""}}}function Hh(){return new Date().toISOString().substring(0,10)}function DE(t,e=xE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$h(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$h(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _w()?vw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function $h(t){return xo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(t){Ar(new Vn("platform-logger",e=>new Qw(e),"PRIVATE")),Ar(new Vn("heartbeat",e=>new OE(e),"PRIVATE")),cn(pu,Wh,t),cn(pu,Wh,"esm2017"),cn("fire-js","")}ME("");var Gh={};const Kh="@firebase/database",Qh="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vg="";function bE(t){vg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ae(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$i(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new FE(e)}}catch{}return new UE},On=yg("localStorage"),jE=yg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new xc("@firebase/database"),zE=function(){let t=1;return function(){return t++}}(),wg=function(t){const e=Pw(t),n=new Iw;n.update(e);const r=n.digest();return Nc.encodeByteArray(r)},us=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=us.apply(null,r):typeof r=="object"?e+=ae(r):e+=r,e+=" "}return e};let Si=null,qh=!0;const WE=function(t,e){S(!0,"Can't turn on custom loggers persistently."),vr.logLevel=V.VERBOSE,Si=vr.log.bind(vr)},ge=function(...t){if(qh===!0&&(qh=!1,Si===null&&jE.get("logging_enabled")===!0&&WE()),Si){const e=us.apply(null,t);Si(e)}},cs=function(t){return function(...e){ge(t,...e)}},_u=function(...t){const e="FIREBASE INTERNAL ERROR: "+us(...t);vr.error(e)},bt=function(...t){const e=`FIREBASE FATAL ERROR: ${us(...t)}`;throw vr.error(e),new Error(e)},Pe=function(...t){const e="FIREBASE WARNING: "+us(...t);vr.warn(e)},VE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},BE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Or="[MIN_NAME]",Bn="[MAX_NAME]",qn=function(t,e){if(t===e)return 0;if(t===Or||e===Bn)return-1;if(e===Or||t===Bn)return 1;{const n=Yh(t),r=Yh(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},HE=function(t,e){return t===e?0:t<e?-1:1},si=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ae(e))},Lc=function(t){if(typeof t!="object"||t===null)return ae(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ae(e[r]),n+=":",n+=Lc(t[e[r]]);return n+="}",n},Eg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function we(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sg=function(t){S(!Dc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},$E=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},GE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function KE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const QE=new RegExp("^-?(0*)\\d{1,10}$"),qE=-2147483648,YE=2147483647,Yh=function(t){if(QE.test(t)){const e=Number(t);if(e>=qE&&e<=YE)return e}return null},Hr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pe("Exception was thrown by user callback.",n),e},Math.floor(0))}},XE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ci=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Pe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pe(e)}}class Js{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Js.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="5",Cg="v",Ig="s",Tg="r",kg="f",Ng=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pg="ls",Rg="p",vu="ac",xg="websocket",Ag="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=On.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&On.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Dg(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===xg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ag)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eS(t)&&(n.ns=t.namespace);const i=[];return we(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.counters_={}}incrementCounter(e,n=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa={},ua={};function bc(t){const e=t.toString();return aa[e]||(aa[e]=new tS),aa[e]}function nS(t,e){const n=t.toString();return ua[n]||(ua[n]=e()),ua[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Hr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="start",iS="close",sS="pLPCommand",oS="pRTLPCB",Lg="id",Mg="pw",bg="ser",lS="cb",aS="seg",uS="ts",cS="d",dS="dframe",Fg=1870,Ug=30,hS=Fg-Ug,fS=25e3,pS=3e4;class dr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=cs(e),this.stats_=bc(n),this.urlFn=a=>(this.appCheckToken&&(a[vu]=this.appCheckToken),Dg(n,Ag,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pS)),BE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fc((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xh)this.id=l,this.password=a;else if(o===iS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Xh]="t",r[bg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[lS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Cg]=Mc,this.transportSessionId&&(r[Ig]=this.transportSessionId),this.lastSessionId&&(r[Pg]=this.lastSessionId),this.applicationId&&(r[Rg]=this.applicationId),this.appCheckToken&&(r[vu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ng.test(location.hostname)&&(r[Tg]=kg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){dr.forceAllow_=!0}static forceDisallow(){dr.forceDisallow_=!0}static isAvailable(){return dr.forceAllow_?!0:!dr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$E()&&!GE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=sg(n),i=Eg(r,hS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[dS]="t",r[Lg]=e,r[Mg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ae(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=zE(),window[sS+this.uniqueCallbackIdentifier]=e,window[oS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ge("frame writing exception"),l.stack&&ge(l.stack),ge(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ge("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Lg]=this.myID,e[Mg]=this.myPW,e[bg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ug+r.length<=Fg;){const o=this.pendingSegs.shift();r=r+"&"+aS+i+"="+o.seg+"&"+uS+i+"="+o.ts+"&"+cS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(fS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=16384,gS=45e3;let Mo=null;typeof MozWebSocket<"u"?Mo=MozWebSocket:typeof WebSocket<"u"&&(Mo=WebSocket);class it{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=cs(this.connId),this.stats_=bc(n),this.connURL=it.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Cg]=Mc,typeof location<"u"&&location.hostname&&Ng.test(location.hostname)&&(o[Tg]=kg),n&&(o[Ig]=n),r&&(o[Pg]=r),i&&(o[vu]=i),s&&(o[Rg]=s),Dg(e,xg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,On.set("previous_websocket_failure",!0);try{let r;gw(),this.mySock=new Mo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){it.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Mo!==null&&!it.forceDisallow_}static previouslyFailed(){return On.isInMemoryStorage||On.get("previous_websocket_failure")===!0}markConnectionHealthy(){On.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=$i(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ae(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Eg(n,mS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}it.responsesRequiredToBeHealthy=2;it.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[dr,it]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=it&&it.isAvailable();let r=n&&!it.previouslyFailed();if(e.webSocketOnly&&(n||Pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[it];else{const i=this.transports_=[];for(const s of Ki.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ki.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ki.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=6e4,vS=5e3,yS=10*1024,wS=100*1024,ca="t",Jh="d",ES="s",Zh="r",SS="e",ef="o",tf="a",nf="n",rf="p",CS="h";class IS{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=cs("c:"+this.id+":"),this.transportManager_=new Ki(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ci(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>yS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ca in e){const n=e[ca];n===tf?this.upgradeIfSecondaryHealthy_():n===Zh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ef&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=si("t",e),r=si("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=si("t",e),r=si("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=si(ca,e);if(Jh in e){const r=e[Jh];if(n===CS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===nf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ES?this.onConnectionShutdown_(r):n===Zh?this.onReset_(r):n===SS?_u("Server Error: "+r):n===ef?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_u("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Mc!==r&&Pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ci(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_S))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ci(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(vS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(On.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends zg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bo}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=32,of=768;class B{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new B("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function mn(t){return t.pieces_.length-t.pieceNum_}function $(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new B(t.pieces_,e)}function Uc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function TS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Qi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Wg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new B(e,0)}function te(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof B)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new B(n,0)}function b(t){return t.pieceNum_>=t.pieces_.length}function ke(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return ke($(t),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function kS(t,e){const n=Qi(t,0),r=Qi(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=qn(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Vg(t,e){if(mn(t)!==mn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Qe(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(mn(t)>mn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class NS{constructor(e,n){this.errorPrefix_=n,this.parts_=Qi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ml(this.parts_[r]);Bg(this)}}function PS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ml(e),Bg(t)}function RS(t){const e=t.parts_.pop();t.byteLength_-=ml(e),t.parts_.length>0&&(t.byteLength_-=1)}function Bg(t){if(t.byteLength_>of)throw new Error(t.errorPrefix_+"has a key path longer than "+of+" bytes ("+t.byteLength_+").");if(t.parts_.length>sf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sf+") or object contains a cycle "+Pn(t))}function Pn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends zg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new jc}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=1e3,xS=60*5*1e3,lf=30*1e3,AS=1.3,OS=3e4,DS="server_kill",af=3;class xt extends jg{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=xt.nextPersistentConnectionId_++,this.log_=cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oi,this.maxReconnectDelay_=xS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ae(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ls,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;xt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vt(e,"w")){const r=xr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Cw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Sw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ae(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):_u("Unrecognized action received from server: "+ae(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>OS&&(this.reconnectDelay_=oi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*AS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ge("getToken() completed but was canceled"):(ge("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new IS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Pe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(DS)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Pe(d),a())}}}interrupt(e){ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],du(this.interruptReasons_)&&(this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Lc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new B(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=af&&(this.reconnectDelay_=lf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=af&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vg.replace(/\./g,"-")]=1,Rc()?e["framework.cordova"]=1:cg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bo.getInstance().currentlyOnline();return du(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0;xt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new L(Or,e),i=new L(Or,n);return this.compare(r,i)!==0}minPost(){return L.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;class Hg extends gl{static get __EMPTY_NODE(){return Fs}static set __EMPTY_NODE(e){Fs=e}compare(e,n){return qn(e.name,n.name)}isDefinedOn(e){throw Wr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(Bn,Fs)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,Fs)}toString(){return".key"}}const yr=new Hg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fe.RED,this.left=i??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class LS{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Us(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Us(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Us(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Us(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new LS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t,e){return qn(t.name,e.name)}function zc(t,e){return qn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu;function bS(t){yu=t}const $g=function(t){return typeof t=="number"?"number:"+Sg(t):"string:"+t},Gg=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else S(t===yu||t.isEmpty(),"priority of unexpected type.");S(t===yu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uf;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Gg(this.priorityNode_)}static set __childrenNodeConstructor(e){uf=e}static get __childrenNodeConstructor(){return uf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return b(e)?this:U(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$g(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sg(this.value_):e+=this.value_,this.lazyHash_=wg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kg,Qg;function FS(t){Kg=t}function US(t){Qg=t}class jS extends gl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?qn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(Bn,new de("[PRIORITY-POST]",Qg))}makePost(e,n){const r=Kg(e);return new L(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const ne=new jS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=Math.log(2);class WS{constructor(e){const n=s=>parseInt(Math.log(s)/zS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fo=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new fe(h,d.node,fe.BLACK,null,null);{const g=parseInt(c/2,10)+a,_=i(a,g),w=i(g+1,u);return d=t[g],h=n?n(d):d,new fe(h,d.node,fe.BLACK,_,w)}},s=function(a){let u=null,c=null,d=t.length;const h=function(_,w){const C=d-_,p=d;d-=_;const f=i(C+1,p),m=t[C],y=n?n(m):m;g(new fe(y,m.node,w,null,f))},g=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const w=a.nextBitIsOne(),C=Math.pow(2,a.count-(_+1));w?h(C,fe.BLACK):(h(C,fe.BLACK),h(C,fe.RED))}return c},o=new WS(t.length),l=s(o);return new Le(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da;const Jn={};class Tt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Jn&&ne,"ChildrenNode.ts has not been loaded"),da=da||new Tt({".priority":Jn},{".priority":ne}),da}get(e){const n=xr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==yr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(L.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Fo(r,e.getCompare()):l=Jn;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Tt(c,u)}addToIndexes(e,n){const r=Oo(this.indexes_,(i,s)=>{const o=xr(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===Jn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(L.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Fo(l,o.getCompare())}else return Jn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new L(e.name,l))),a.insert(e,e.node)}});return new Tt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Oo(this.indexes_,i=>{if(i===Jn)return i;{const s=n.get(e.name);return s?i.remove(new L(e.name,s)):i}});return new Tt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;class x{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Gg(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return li||(li=new x(new Le(zc),null,Tt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||li}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?li:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new L(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?li:this.priorityNode_;return new x(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{S(U(e)!==".priority"||mn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild($(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ne,(o,l)=>{n[o]=l.val(e),r++,s&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$g(this.getPriority().val())+":"),this.forEachChild(ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new L(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ds?-1:0}withIndex(e){if(e===yr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ne),i=n.getIterator(ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yr?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VS extends x{constructor(){super(new Le(zc),x.EMPTY_NODE,Tt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const ds=new VS;Object.defineProperties(L,{MIN:{value:new L(Or,x.EMPTY_NODE)},MAX:{value:new L(Bn,ds)}});Hg.__EMPTY_NODE=x.EMPTY_NODE;de.__childrenNodeConstructor=x;bS(ds);US(ds);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=!0;function le(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,le(e))}if(!(t instanceof Array)&&BS){const n=[];let r=!1;if(we(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=le(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new L(o,a)))}}),n.length===0)return x.EMPTY_NODE;const s=Fo(n,MS,o=>o.name,zc);if(r){const o=Fo(n,ne.getCompare());return new x(s,le(e),new Tt({".priority":o},{".priority":ne}))}else return new x(s,le(e),Tt.Default)}else{let n=x.EMPTY_NODE;return we(t,(r,i)=>{if(vt(t,r)&&r.substring(0,1)!=="."){const s=le(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(le(e))}}FS(le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS extends gl{constructor(e){super(),this.indexPath_=e,S(!b(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?qn(e.name,n.name):s}makePost(e,n){const r=le(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,r);return new L(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,ds);return new L(Bn,e)}toString(){return Qi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S extends gl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?qn(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const r=le(e);return new L(n,r)}toString(){return".value"}}const GS=new $S;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){return{type:"value",snapshotNode:t}}function Dr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function qi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Yi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function KS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(qi(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Dr(n,r)):o.trackChildChange(Yi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(qi(i,s))}),n.isLeafNode()||n.forEachChild(ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Yi(i,s,o))}else r.trackChildChange(Dr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.indexedFilter_=new Wc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xi.getStartPost_(e),this.endPost_=Xi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new L(n,r))||(r=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const s=this;return n.forEachChild(ne,(o,l)=>{s.matches(new L(o,l))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Xi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new L(n,r))||(r=x.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,g)=>d(g,h)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new L(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Yi(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(qi(n,d));const w=l.updateImmediateChild(n,x.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Dr(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(qi(u.name,u.node)),s.trackChildChange(Dr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,x.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Or}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new Vc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qS(t){return t.loadsAllData()?new Wc(t.getIndex()):t.hasLimit()?new QS(t):new Xi(t)}function cf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ne?n="$priority":t.index_===GS?n="$value":t.index_===yr?n="$key":(S(t.index_ instanceof HS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ae(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ae(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ae(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ae(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ae(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function df(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ne&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends jg{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=cs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Uo.getListenId_(e,r),l={};this.listens_[o]=l;const a=cf(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),xr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Uo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=cf(e._queryParams),r=e._path.toString(),i=new ls;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=$i(l.responseText)}catch{Pe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Pe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(){return{value:null,children:new Map}}function Yg(t,e,n){if(b(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,jo());const i=t.children.get(r);e=$(e),Yg(i,e,n)}}function wu(t,e,n){t.value!==null?n(e,t.value):XS(t,(r,i)=>{const s=new B(e.toString()+"/"+r);wu(i,s,n)})}function XS(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&we(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=10*1e3,ZS=30*1e3,eC=5*60*1e3;class tC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new JS(e);const r=hf+(ZS-hf)*Math.random();Ci(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;we(e,(i,s)=>{s>0&&vt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ci(this.reportStats_.bind(this),Math.floor(Math.random()*2*eC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(st||(st={}));function Bc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $c(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=st.ACK_USER_WRITE,this.source=Bc()}operationForChild(e){if(b(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new B(e));return new zo(z(),n,this.revert)}}else return S(U(this.path)===e,"operationForChild called for unrelated child."),new zo($(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.source=e,this.path=n,this.type=st.LISTEN_COMPLETE}operationForChild(e){return b(this.path)?new Ji(this.source,z()):new Ji(this.source,$(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=st.OVERWRITE}operationForChild(e){return b(this.path)?new Hn(this.source,z(),this.snap.getImmediateChild(e)):new Hn(this.source,$(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=st.MERGE}operationForChild(e){if(b(this.path)){const n=this.children.subtree(new B(e));return n.isEmpty()?null:n.value?new Hn(this.source,z(),n.value):new Lr(this.source,z(),n)}else return S(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Lr(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(b(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function rC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(KS(o.childName,o.snapshotNode))}),ai(t,i,"child_removed",e,r,n),ai(t,i,"child_added",e,r,n),ai(t,i,"child_moved",s,r,n),ai(t,i,"child_changed",e,r,n),ai(t,i,"value",e,r,n),i}function ai(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>sC(t,l,a)),o.forEach(l=>{const a=iC(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function iC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function sC(t,e,n){if(e.childName==null||n.childName==null)throw Wr("Should only compare child_ events.");const r=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t,e){return{eventCache:t,serverCache:e}}function Ii(t,e,n,r){return _l(new gn(e,n,r),t.serverCache)}function Xg(t,e,n,r){return _l(t.eventCache,new gn(e,n,r))}function Wo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $n(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;const oC=()=>(ha||(ha=new Le(HE)),ha);class H{constructor(e,n=oC()){this.value=e,this.children=n}static fromObject(e){let n=new H(null);return we(e,(r,i)=>{n=n.set(new B(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(b(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue($(e),n);return s!=null?{path:te(new B(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(b(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree($(e)):new H(null)}}set(e,n){if(b(e))return new H(n,this.children);{const r=U(e),s=(this.children.get(r)||new H(null)).set($(e),n),o=this.children.insert(r,s);return new H(this.value,o)}}remove(e){if(b(e))return this.children.isEmpty()?new H(null):new H(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove($(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new H(null):new H(this.value,s)}else return this}}get(e){if(b(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get($(e)):null}}setTree(e,n){if(b(e))return n;{const r=U(e),s=(this.children.get(r)||new H(null)).setTree($(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new H(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(te(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(b(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_($(e),te(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,r){if(b(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_($(e),te(n,i),r):new H(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(te(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.writeTree_=e}static empty(){return new at(new H(null))}}function Ti(t,e,n){if(b(e))return new at(new H(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ke(i,e);return s=s.updateChild(o,n),new at(t.writeTree_.set(i,s))}else{const i=new H(n),s=t.writeTree_.setTree(e,i);return new at(s)}}}function Eu(t,e,n){let r=t;return we(n,(i,s)=>{r=Ti(r,te(e,i),s)}),r}function ff(t,e){if(b(e))return at.empty();{const n=t.writeTree_.setTree(e,new H(null));return new at(n)}}function Su(t,e){return Yn(t,e)!=null}function Yn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ke(n.path,e)):null}function pf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ne,(r,i)=>{e.push(new L(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new L(r,i.value))}),e}function dn(t,e){if(b(e))return t;{const n=Yn(t,e);return n!=null?new at(new H(n)):new at(t.writeTree_.subtree(e))}}function Cu(t){return t.writeTree_.isEmpty()}function Mr(t,e){return Jg(z(),t.writeTree_,e)}function Jg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Jg(te(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(te(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t,e){return n_(e,t)}function lC(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ti(t.visibleWrites,e,n)),t.lastWriteId=r}function aC(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Eu(t.visibleWrites,e,n),t.lastWriteId=r}function uC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function cC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&dC(l,r.path)?i=!1:Qe(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return hC(t),!0;if(r.snap)t.visibleWrites=ff(t.visibleWrites,r.path);else{const l=r.children;we(l,a=>{t.visibleWrites=ff(t.visibleWrites,te(r.path,a))})}return!0}else return!1}function dC(t,e){if(t.snap)return Qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qe(te(t.path,n),e))return!0;return!1}function hC(t){t.visibleWrites=Zg(t.allWrites,fC,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function fC(t){return t.visible}function Zg(t,e,n){let r=at.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Qe(n,o)?(l=ke(n,o),r=Ti(r,l,s.snap)):Qe(o,n)&&(l=ke(o,n),r=Ti(r,z(),s.snap.getChild(l)));else if(s.children){if(Qe(n,o))l=ke(n,o),r=Eu(r,l,s.children);else if(Qe(o,n))if(l=ke(o,n),b(l))r=Eu(r,z(),s.children);else{const a=xr(s.children,U(l));if(a){const u=a.getChild($(l));r=Ti(r,z(),u)}}}else throw Wr("WriteRecord should have .snap or .children")}}return r}function e_(t,e,n,r,i){if(!r&&!i){const s=Yn(t.visibleWrites,e);if(s!=null)return s;{const o=dn(t.visibleWrites,e);if(Cu(o))return n;if(n==null&&!Su(o,z()))return null;{const l=n||x.EMPTY_NODE;return Mr(o,l)}}}else{const s=dn(t.visibleWrites,e);if(!i&&Cu(s))return n;if(!i&&n==null&&!Su(s,z()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Qe(u.path,e)||Qe(e,u.path))},l=Zg(t.allWrites,o,e),a=n||x.EMPTY_NODE;return Mr(l,a)}}}function pC(t,e,n){let r=x.EMPTY_NODE;const i=Yn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=dn(t.visibleWrites,e);return n.forEachChild(ne,(o,l)=>{const a=Mr(dn(s,new B(o)),l);r=r.updateImmediateChild(o,a)}),pf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=dn(t.visibleWrites,e);return pf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function mC(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=te(e,n);if(Su(t.visibleWrites,s))return null;{const o=dn(t.visibleWrites,s);return Cu(o)?i.getChild(n):Mr(o,i.getChild(n))}}function gC(t,e,n,r){const i=te(e,n),s=Yn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=dn(t.visibleWrites,i);return Mr(o,r.getNode().getImmediateChild(n))}else return null}function _C(t,e){return Yn(t.visibleWrites,e)}function vC(t,e,n,r,i,s,o){let l;const a=dn(t.visibleWrites,e),u=Yn(a,z());if(u!=null)l=u;else if(n!=null)l=Mr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=h.getNext();return c}else return[]}function yC(){return{visibleWrites:at.empty(),allWrites:[],lastWriteId:-1}}function Vo(t,e,n,r){return e_(t.writeTree,t.treePath,e,n,r)}function Gc(t,e){return pC(t.writeTree,t.treePath,e)}function mf(t,e,n,r){return mC(t.writeTree,t.treePath,e,n,r)}function Bo(t,e){return _C(t.writeTree,te(t.treePath,e))}function wC(t,e,n,r,i,s){return vC(t.writeTree,t.treePath,e,n,r,i,s)}function Kc(t,e,n){return gC(t.writeTree,t.treePath,e,n)}function t_(t,e){return n_(te(t.treePath,e),t.writeTree)}function n_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Yi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,qi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Dr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Yi(r,e.snapshotNode,i.oldSnap));else throw Wr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const r_=new SC;class Qc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new gn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:$n(this.viewCache_),s=wC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){return{filter:t}}function IC(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function TC(t,e,n,r,i){const s=new EC;let o,l;if(n.type===st.OVERWRITE){const u=n;u.source.fromUser?o=Iu(t,e,u.path,u.snap,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!b(u.path),o=Ho(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===st.MERGE){const u=n;u.source.fromUser?o=NC(t,e,u.path,u.children,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Tu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===st.ACK_USER_WRITE){const u=n;u.revert?o=xC(t,e,u.path,r,i,s):o=PC(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===st.LISTEN_COMPLETE)o=RC(t,e,n.path,r,s);else throw Wr("Unknown operation type: "+n.type);const a=s.getChanges();return kC(e,o,a),{viewCache:o,changes:a}}function kC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Wo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(qg(Wo(e)))}}function i_(t,e,n,r,i,s){const o=e.eventCache;if(Bo(r,n)!=null)return e;{let l,a;if(b(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=$n(e),c=u instanceof x?u:x.EMPTY_NODE,d=Gc(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Vo(r,$n(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){S(mn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=mf(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=$(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=mf(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=Kc(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Ii(e,l,o.isFullyInitialized()||b(n),t.filter.filtersNodes())}}function Ho(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(b(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),g,null)}else{const g=U(n);if(!a.isCompleteForPath(n)&&mn(n)>1)return e;const _=$(n),C=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=c.updatePriority(a.getNode(),C):u=c.updateChild(a.getNode(),g,C,_,r_,null)}const d=Xg(e,u,a.isFullyInitialized()||b(n),c.filtersNodes()),h=new Qc(i,d,s);return i_(t,d,n,i,h,l)}function Iu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Qc(i,e,s);if(b(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ii(e,u,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ii(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=$(n),g=l.getNode().getImmediateChild(d);let _;if(b(h))_=r;else{const w=c.getCompleteChild(d);w!=null?Uc(h)===".priority"&&w.getChild(Wg(h)).isEmpty()?_=w:_=w.updateChild(h,r):_=x.EMPTY_NODE}if(g.equals(_))a=e;else{const w=t.filter.updateChild(l.getNode(),d,_,h,c,o);a=Ii(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function gf(t,e){return t.eventCache.isCompleteForChild(e)}function NC(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=te(n,a);gf(e,U(c))&&(l=Iu(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=te(n,a);gf(e,U(c))||(l=Iu(t,l,c,u,i,s,o))}),l}function _f(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Tu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;b(n)?u=r:u=new H(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),_=_f(t,g,h);a=Ho(t,a,new B(d),_,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const g=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!g){const _=e.serverCache.getNode().getImmediateChild(d),w=_f(t,_,h);a=Ho(t,a,new B(d),w,i,s,o,l)}}),a}function PC(t,e,n,r,i,s,o){if(Bo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(b(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ho(t,e,n,a.getNode().getChild(n),i,s,l,o);if(b(n)){let u=new H(null);return a.getNode().forEachChild(yr,(c,d)=>{u=u.set(new B(c),d)}),Tu(t,e,n,u,i,s,l,o)}else return e}else{let u=new H(null);return r.foreach((c,d)=>{const h=te(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Tu(t,e,n,u,i,s,l,o)}}function RC(t,e,n,r,i){const s=e.serverCache,o=Xg(e,s.getNode(),s.isFullyInitialized()||b(n),s.isFiltered());return i_(t,o,n,r,r_,i)}function xC(t,e,n,r,i,s){let o;if(Bo(r,n)!=null)return e;{const l=new Qc(r,e,i),a=e.eventCache.getNode();let u;if(b(n)||U(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Vo(r,$n(e));else{const d=e.serverCache.getNode();S(d instanceof x,"serverChildren would be complete if leaf node"),c=Gc(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=U(n);let d=Kc(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,$(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,x.EMPTY_NODE,$(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Vo(r,$n(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Bo(r,z())!=null,Ii(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Wc(r.getIndex()),s=qS(r);this.processor_=CC(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(x.EMPTY_NODE,l.getNode(),null),c=new gn(a,o.isFullyInitialized(),i.filtersNodes()),d=new gn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=_l(d,c),this.eventGenerator_=new nC(this.query_)}get query(){return this.query_}}function OC(t){return t.viewCache_.serverCache.getNode()}function DC(t){return Wo(t.viewCache_)}function LC(t,e){const n=$n(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!b(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function vf(t){return t.eventRegistrations_.length===0}function MC(t,e){t.eventRegistrations_.push(e)}function yf(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function wf(t,e,n,r){e.type===st.MERGE&&e.source.queryId!==null&&(S($n(t.viewCache_),"We should always have a full cache before handling merges"),S(Wo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=TC(t.processor_,i,e,n,r);return IC(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,s_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function bC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ne,(s,o)=>{r.push(Dr(s,o))}),n.isFullyInitialized()&&r.push(qg(n.getNode())),s_(t,r,n.getNode(),e)}function s_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return rC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o;class o_{constructor(){this.views=new Map}}function FC(t){S(!$o,"__referenceConstructor has already been defined"),$o=t}function UC(){return S($o,"Reference.ts has not been loaded"),$o}function jC(t){return t.views.size===0}function qc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),wf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(wf(o,e,n,r));return s}}function l_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Vo(n,i?r:null),a=!1;l?a=!0:r instanceof x?(l=Gc(n,r),a=!1):(l=x.EMPTY_NODE,a=!1);const u=_l(new gn(l,a,!1),new gn(r,i,!1));return new AC(e,u)}return o}function zC(t,e,n,r,i,s){const o=l_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),MC(o,n),bC(o,n)}function WC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=_n(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(yf(u,n,r)),vf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(yf(a,n,r)),vf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!_n(t)&&s.push(new(UC())(e._repo,e._path)),{removed:s,events:o}}function a_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function hn(t,e){let n=null;for(const r of t.views.values())n=n||LC(r,e);return n}function u_(t,e){if(e._queryParams.loadsAllData())return yl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function c_(t,e){return u_(t,e)!=null}function _n(t){return yl(t)!=null}function yl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go;function VC(t){S(!Go,"__referenceConstructor has already been defined"),Go=t}function BC(){return S(Go,"Reference.ts has not been loaded"),Go}let HC=1;class Ef{constructor(e){this.listenProvider_=e,this.syncPointTree_=new H(null),this.pendingWriteTree_=yC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function d_(t,e,n,r,i){return lC(t.pendingWriteTree_,e,n,r,i),i?$r(t,new Hn(Bc(),e,n)):[]}function $C(t,e,n,r){aC(t.pendingWriteTree_,e,n,r);const i=H.fromObject(n);return $r(t,new Lr(Bc(),e,i))}function Xt(t,e,n=!1){const r=uC(t.pendingWriteTree_,e);if(cC(t.pendingWriteTree_,e)){let s=new H(null);return r.snap!=null?s=s.set(z(),!0):we(r.children,o=>{s=s.set(new B(o),!0)}),$r(t,new zo(r.path,s,n))}else return[]}function hs(t,e,n){return $r(t,new Hn(Hc(),e,n))}function GC(t,e,n){const r=H.fromObject(n);return $r(t,new Lr(Hc(),e,r))}function KC(t,e){return $r(t,new Ji(Hc(),e))}function QC(t,e,n){const r=Xc(t,n);if(r){const i=Jc(r),s=i.path,o=i.queryId,l=ke(s,e),a=new Ji($c(o),l);return Zc(t,s,a)}else return[]}function h_(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||c_(o,e))){const a=WC(o,e,n,r);jC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,g)=>_n(g));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=JC(h);for(let _=0;_<g.length;++_){const w=g[_],C=w.query,p=g_(t,w);t.listenProvider_.startListening(ki(C),Zi(t,C),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(ki(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(wl(h));t.listenProvider_.stopListening(ki(h),g)}))}ZC(t,u)}return l}function f_(t,e,n,r){const i=Xc(t,r);if(i!=null){const s=Jc(i),o=s.path,l=s.queryId,a=ke(o,e),u=new Hn($c(l),a,n);return Zc(t,o,u)}else return[]}function qC(t,e,n,r){const i=Xc(t,r);if(i){const s=Jc(i),o=s.path,l=s.queryId,a=ke(o,e),u=H.fromObject(n),c=new Lr($c(l),a,u);return Zc(t,o,c)}else return[]}function YC(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=ke(h,i);s=s||hn(g,_),o=o||_n(g)});let l=t.syncPointTree_.get(i);l?(o=o||_n(l),s=s||hn(l,z())):(l=new o_,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=x.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const w=hn(_,z());w&&(s=s.updateImmediateChild(g,w))}));const u=c_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=wl(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=e1();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const c=vl(t.pendingWriteTree_,i);let d=zC(l,e,n,c,s,a);if(!u&&!o&&!r){const h=u_(l,e);d=d.concat(t1(t,e,h))}return d}function Yc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ke(o,e),u=hn(l,a);if(u)return u});return e_(i,e,s,n,!0)}function XC(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=ke(u,n);r=r||hn(c,d)});let i=t.syncPointTree_.get(n);i?r=r||hn(i,z()):(i=new o_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new gn(r,!0,!1):null,l=vl(t.pendingWriteTree_,e._path),a=l_(i,e,l,s?o.getNode():x.EMPTY_NODE,s);return DC(a)}function $r(t,e){return p_(e,t.syncPointTree_,null,vl(t.pendingWriteTree_,z()))}function p_(t,e,n,r){if(b(t.path))return m_(t,e,n,r);{const i=e.get(z());n==null&&i!=null&&(n=hn(i,z()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=t_(r,o);s=s.concat(p_(l,a,u,c))}return i&&(s=s.concat(qc(i,t,r,n))),s}}function m_(t,e,n,r){const i=e.get(z());n==null&&i!=null&&(n=hn(i,z()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=t_(r,o),c=t.operationForChild(o);c&&(s=s.concat(m_(c,l,a,u)))}),i&&(s=s.concat(qc(i,t,r,n))),s}function g_(t,e){const n=e.query,r=Zi(t,n);return{hashFn:()=>(OC(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?QC(t,n._path,r):KC(t,n._path);{const s=KE(i,n);return h_(t,n,null,s)}}}}function Zi(t,e){const n=wl(e);return t.queryToTagMap.get(n)}function wl(t){return t._path.toString()+"$"+t._queryIdentifier}function Xc(t,e){return t.tagToQueryMap.get(e)}function Jc(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new B(t.substr(0,e))}}function Zc(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=vl(t.pendingWriteTree_,e);return qc(r,n,i,null)}function JC(t){return t.fold((e,n,r)=>{if(n&&_n(n))return[yl(n)];{let i=[];return n&&(i=a_(n)),we(r,(s,o)=>{i=i.concat(o)}),i}})}function ki(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(BC())(t._repo,t._path):t}function ZC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=wl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function e1(){return HC++}function t1(t,e,n){const r=e._path,i=Zi(t,e),s=g_(t,n),o=t.listenProvider_.startListening(ki(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!_n(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!b(u)&&c&&_n(c))return[yl(c).query];{let h=[];return c&&(h=h.concat(a_(c).map(g=>g.query))),we(d,(g,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(ki(c),Zi(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ed(n)}node(){return this.node_}}class td{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=te(this.path_,e);return new td(this.syncTree_,n)}node(){return Yc(this.syncTree_,this.path_)}}const n1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Sf=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return r1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return i1(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},r1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},i1=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},__=function(t,e,n,r){return nd(e,new td(n,t),r)},v_=function(t,e,n){return nd(t,new ed(e),n)};function nd(t,e,n){const r=t.getPriority().val(),i=Sf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Sf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,le(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(ne,(l,a)=>{const u=nd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function id(t,e){let n=e instanceof B?e:new B(e),r=t,i=U(n);for(;i!==null;){const s=xr(r.node.children,i)||{children:{},childCount:0};r=new rd(i,r,s),n=$(n),i=U(n)}return r}function Gr(t){return t.node.value}function y_(t,e){t.node.value=e,ku(t)}function w_(t){return t.node.childCount>0}function s1(t){return Gr(t)===void 0&&!w_(t)}function El(t,e){we(t.node.children,(n,r)=>{e(new rd(n,t,r))})}function E_(t,e,n,r){n&&e(t),El(t,i=>{E_(i,e,!0)})}function o1(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function fs(t){return new B(t.parent===null?t.name:fs(t.parent)+"/"+t.name)}function ku(t){t.parent!==null&&l1(t.parent,t.name,t)}function l1(t,e,n){const r=s1(n),i=vt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ku(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ku(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=/[\[\].#$\/\u0000-\u001F\u007F]/,u1=/[\[\].#$\u0000-\u001F\u007F]/,fa=10*1024*1024,sd=function(t){return typeof t=="string"&&t.length!==0&&!a1.test(t)},S_=function(t){return typeof t=="string"&&t.length!==0&&!u1.test(t)},c1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),S_(t)},d1=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Dc(t)||t&&typeof t=="object"&&vt(t,".sv")},h1=function(t,e,n,r){Sl(pl(t,"value"),e,n)},Sl=function(t,e,n){const r=n instanceof B?new NS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Pn(r)+" with contents = "+e.toString());if(Dc(e))throw new Error(t+"contains "+e.toString()+" "+Pn(r));if(typeof e=="string"&&e.length>fa/3&&ml(e)>fa)throw new Error(t+"contains a string greater than "+fa+" utf8 bytes "+Pn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(we(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!sd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);PS(r,o),Sl(t,l,r),RS(r)}),i&&s)throw new Error(t+' contains ".value" child '+Pn(r)+" in addition to actual children.")}},f1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Qi(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!sd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(kS);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Qe(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},p1=function(t,e,n,r){const i=pl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];we(e,(o,l)=>{const a=new B(o);if(Sl(i,l,te(n,a)),Uc(a)===".priority"&&!d1(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),f1(i,s)},C_=function(t,e,n,r){if(!S_(n))throw new Error(pl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},m1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),C_(t,e,n)},g1=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},_1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!c1(n))throw new Error(pl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function od(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Vg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Je(t,e,n){od(t,n),y1(t,r=>Qe(r,e)||Qe(e,r))}function y1(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(w1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function w1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Si&&ge("event: "+n.toString()),Hr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1="repo_interrupt",S1=25;class C1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new v1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jo(),this.transactionQueueTree_=new rd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function I1(t,e,n){if(t.stats_=bc(t.repoInfo_),t.forceRestClient_||XE())t.server_=new Uo(t.repoInfo_,(r,i,s,o)=>{Cf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>If(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ae(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new xt(t.repoInfo_,e,(r,i,s,o)=>{Cf(t,r,i,s,o)},r=>{If(t,r)},r=>{k1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=nS(t.repoInfo_,()=>new tC(t.stats_,t.server_)),t.infoData_=new YS,t.infoSyncTree_=new Ef({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=hs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ld(t,"connected",!1),t.serverSyncTree_=new Ef({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Je(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function T1(t){const n=t.infoData_.getNode(new B(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Cl(t){return n1({timestamp:T1(t)})}function Cf(t,e,n,r,i){t.dataUpdateCount++;const s=new B(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Oo(n,u=>le(u));o=qC(t.serverSyncTree_,s,a,i)}else{const a=le(n);o=f_(t.serverSyncTree_,s,a,i)}else if(r){const a=Oo(n,u=>le(u));o=GC(t.serverSyncTree_,s,a)}else{const a=le(n);o=hs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=br(t,s)),Je(t.eventQueue_,l,o)}function If(t,e){ld(t,"connected",e),e===!1&&x1(t)}function k1(t,e){we(e,(n,r)=>{ld(t,n,r)})}function ld(t,e,n){const r=new B("/.info/"+e),i=le(n);t.infoData_.updateSnapshot(r,i);const s=hs(t.infoSyncTree_,r,i);Je(t.eventQueue_,r,s)}function ad(t){return t.nextWriteId_++}function N1(t,e,n){const r=XC(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=le(i).withIndex(e._queryParams.getIndex());YC(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=hs(t.serverSyncTree_,e._path,s);else{const l=Zi(t.serverSyncTree_,e);o=f_(t.serverSyncTree_,e._path,s,l)}return Je(t.eventQueue_,e._path,o),h_(t.serverSyncTree_,e,n,null,!0),s},i=>(ps(t,"get for query "+ae(e)+" failed: "+i),Promise.reject(new Error(i))))}function P1(t,e,n,r,i){ps(t,"set",{path:e.toString(),value:n,priority:r});const s=Cl(t),o=le(n,r),l=Yc(t.serverSyncTree_,e),a=v_(o,l,s),u=ad(t),c=d_(t.serverSyncTree_,e,a,u,!0);od(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Pe("set at "+e+" failed: "+h);const w=Xt(t.serverSyncTree_,u,!_);Je(t.eventQueue_,e,w),Nu(t,i,h,g)});const d=cd(t,e);br(t,d),Je(t.eventQueue_,d,[])}function R1(t,e,n,r){ps(t,"update",{path:e.toString(),value:n});let i=!0;const s=Cl(t),o={};if(we(n,(l,a)=>{i=!1,o[l]=__(te(e,l),le(a),t.serverSyncTree_,s)}),i)ge("update() called with empty data.  Don't do anything."),Nu(t,r,"ok",void 0);else{const l=ad(t),a=$C(t.serverSyncTree_,e,o,l);od(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||Pe("update at "+e+" failed: "+u);const h=Xt(t.serverSyncTree_,l,!d),g=h.length>0?br(t,e):e;Je(t.eventQueue_,g,h),Nu(t,r,u,c)}),we(n,u=>{const c=cd(t,te(e,u));br(t,c)}),Je(t.eventQueue_,e,[])}}function x1(t){ps(t,"onDisconnectEvents");const e=Cl(t),n=jo();wu(t.onDisconnect_,z(),(i,s)=>{const o=__(i,s,t.serverSyncTree_,e);Yg(n,i,o)});let r=[];wu(n,z(),(i,s)=>{r=r.concat(hs(t.serverSyncTree_,i,s));const o=cd(t,i);br(t,o)}),t.onDisconnect_=jo(),Je(t.eventQueue_,z(),r)}function A1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(E1)}function ps(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ge(n,...e)}function Nu(t,e,n,r){e&&Hr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function I_(t,e,n){return Yc(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function ud(t,e=t.transactionQueueTree_){if(e||Il(t,e),Gr(e)){const n=k_(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&O1(t,fs(e),n)}else w_(e)&&El(e,n=>{ud(t,n)})}function O1(t,e,n){const r=n.map(u=>u.currentWriteId),i=I_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];S(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=ke(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{ps(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Xt(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Il(t,id(t.transactionQueueTree_,e)),ud(t,t.transactionQueueTree_),Je(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)Hr(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Pe("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}br(t,e)}},o)}function br(t,e){const n=T_(t,e),r=fs(n),i=k_(t,n);return D1(t,i,r),r}function D1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=ke(n,a.path);let c=!1,d;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Xt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=S1)c=!0,d="maxretry",i=i.concat(Xt(t.serverSyncTree_,a.currentWriteId,!0));else{const h=I_(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){Sl("transaction failed: Data returned ",g,a.path);let _=le(g);typeof g=="object"&&g!=null&&vt(g,".priority")||(_=_.updatePriority(h.getPriority()));const C=a.currentWriteId,p=Cl(t),f=v_(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=ad(t),o.splice(o.indexOf(C),1),i=i.concat(d_(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Xt(t.serverSyncTree_,C,!0))}else c=!0,d="nodata",i=i.concat(Xt(t.serverSyncTree_,a.currentWriteId,!0))}Je(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Il(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Hr(r[l]);ud(t,t.transactionQueueTree_)}function T_(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&Gr(r)===void 0;)r=id(r,n),e=$(e),n=U(e);return r}function k_(t,e){const n=[];return N_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function N_(t,e,n){const r=Gr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);El(e,i=>{N_(t,i,n)})}function Il(t,e){const n=Gr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,y_(e,n.length>0?n:void 0)}El(e,r=>{Il(t,r)})}function cd(t,e){const n=fs(T_(t,e)),r=id(t.transactionQueueTree_,e);return o1(r,i=>{pa(t,i)}),pa(t,r),E_(r,i=>{pa(t,i)}),n}function pa(t,e){const n=Gr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Xt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?y_(e,void 0):n.length=s+1,Je(t.eventQueue_,fs(e),i);for(let o=0;o<r.length;o++)Hr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function M1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Tf=function(t,e){const n=b1(t),r=n.namespace;n.domain==="firebase.com"&&bt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||VE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Og(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new B(n.pathString)}},b1=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=L1(t.substring(c,d)));const h=M1(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ae(this.snapshot.exportVal())}}class U1{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return b(this._path)?null:Uc(this._path)}get ref(){return new jt(this._repo,this._path)}get _queryIdentifier(){const e=df(this._queryParams),n=Lc(e);return n==="{}"?"default":n}get _queryObject(){return df(this._queryParams)}isEqual(e){if(e=Ue(e),!(e instanceof dd))return!1;const n=this._repo===e._repo,r=Vg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+TS(this._path)}}class jt extends dd{constructor(e,n){super(e,n,new Vc,!1)}get parent(){const e=Wg(this._path);return e===null?null:new jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class es{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new B(e),r=Pu(this.ref,e);return new es(this._node.getChild(n),r,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new es(i,Pu(this.ref,r),ne)))}hasChild(e){const n=new B(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function P_(t,e){return t=Ue(t),t._checkNotDeleted("ref"),e!==void 0?Pu(t._root,e):t._root}function Pu(t,e){return t=Ue(t),U(t._path)===null?m1("child","path",e):C_("child","path",e),new jt(t._repo,te(t._path,e))}function z1(t,e){t=Ue(t),g1("set",t._path),h1("set",e,t._path);const n=new ls;return P1(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function W1(t,e){p1("update",e,t._path);const n=new ls;return R1(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function V1(t){t=Ue(t);const e=new j1(()=>{}),n=new hd(e);return N1(t._repo,t,n).then(r=>new es(r,new jt(t._repo,t._path),t._queryParams.getIndex()))}class hd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new F1("value",this,new es(e.snapshotNode,new jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new U1(this,e,n):null}matches(e){return e instanceof hd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}FC(jt);VC(jt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="FIREBASE_DATABASE_EMULATOR_HOST",Ru={};let H1=!1;function $1(t,e,n,r){t.repoInfo_=new Og(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function G1(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ge("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Tf(s,i),l=o.repoInfo,a;typeof process<"u"&&Gh&&(a=Gh[B1]),a?(s=`http://${a}?ns=${l.namespace}`,o=Tf(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new ZE(t.name,t.options,e);_1("Invalid Firebase Database URL",o),b(o.path)||bt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=Q1(l,t,u,new JE(t.name,n));return new q1(c,t)}function K1(t,e){const n=Ru[e];(!n||n[t.key]!==t)&&bt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),A1(t),delete n[t.key]}function Q1(t,e,n,r){let i=Ru[e.name];i||(i={},Ru[e.name]=i);let s=i[t.toURLString()];return s&&bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new C1(t,H1,n,r),i[t.toURLString()]=s,s}class q1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(I1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jt(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(K1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bt("Cannot call "+e+" on a deleted database.")}}function Y1(t=mg(),e){const n=Oc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=dw("database");r&&X1(n,...r)}return n}function X1(t,e,n,r={}){t=Ue(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&bt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Js(Js.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:hw(r.mockUserToken,t.app.options.projectId);s=new Js(o)}$1(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t){bE(Br),Ar(new Vn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return G1(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),cn(Kh,Qh,t),cn(Kh,Qh,"esm2017")}xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};J1();var Z1="firebase",eI="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(Z1,eI,"app");function fd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function R_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tI=R_,x_=new as("auth","Firebase",R_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new xc("@firebase/auth");function nI(t,...e){Ko.logLevel<=V.WARN&&Ko.warn(`Auth (${Br}): ${t}`,...e)}function Zs(t,...e){Ko.logLevel<=V.ERROR&&Ko.error(`Auth (${Br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,...e){throw md(t,...e)}function ut(t,...e){return md(t,...e)}function pd(t,e,n){const r=Object.assign(Object.assign({},tI()),{[e]:n});return new as("auth","Firebase",r).create(e,{appName:t.name})}function bn(t){return pd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&_t(t,"argument-error"),pd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function md(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return x_.create(t,...e)}function A(t,e,...n){if(!t)throw md(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zs(e),new Error(e)}function Ft(t,e){t||kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iI(){return kf()==="http:"||kf()==="https:"}function kf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iI()||pw()||"connection"in navigator)?navigator.onLine:!0}function oI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=Rc()||cg()}get(){return sI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=new ms(3e4,6e4);function _d(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kr(t,e,n,r,i={}){return O_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Vr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return fw()||(u.referrerPolicy="no-referrer"),A_.fetch()(D_(t,t.config.apiHost,n,l),u)})}async function O_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lI),e);try{const i=new cI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw js(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw js(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw js(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw js(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw pd(t,c,u);_t(t,c)}}catch(i){if(i instanceof Sn)throw i;_t(t,"network-request-failed",{message:String(i)})}}async function uI(t,e,n,r,i={}){const s=await Kr(t,e,n,r,i);return"mfaPendingCredential"in s&&_t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function D_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gd(t.config,i):`${t.config.apiScheme}://${i}`}class cI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),aI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function js(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ut(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(t,e){return Kr(t,"POST","/v1/accounts:delete",e)}async function L_(t,e){return Kr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hI(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),i=vd(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ni(ma(i.auth_time)),issuedAtTime:Ni(ma(i.iat)),expirationTime:Ni(ma(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ma(t){return Number(t)*1e3}function vd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ao(n);return i?JSON.parse(i):(Zs("Failed to decode base64 JWT payload"),null)}catch(i){return Zs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Nf(t){const e=vd(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&fI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ts(t,L_(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?M_(s.providerUserInfo):[],l=gI(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Au(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function mI(t){const e=Ue(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function M_(t){return t.map(e=>{var{providerId:n}=e,r=fd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(t,e){const n=await O_(t,{},async()=>{const r=Vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=D_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",A_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vI(t,e){return Kr(t,"POST","/v2/accounts:revokeToken",_d(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=Nf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _I(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new wr;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wr,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=fd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Au(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ts(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hI(this,e)}reload(){return mI(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await ts(this,dI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:I,providerData:N,stsTokenManager:P}=n;A(m&&P,e,"internal-error");const R=wr.fromJSON(this.name,P);A(typeof m=="string",e,"internal-error"),Wt(d,e.name),Wt(h,e.name),A(typeof y=="boolean",e,"internal-error"),A(typeof I=="boolean",e,"internal-error"),Wt(g,e.name),Wt(_,e.name),Wt(w,e.name),Wt(C,e.name),Wt(p,e.name),Wt(f,e.name);const K=new Nt({uid:m,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:I,photoURL:_,phoneNumber:g,tenantId:w,stsTokenManager:R,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(K.providerData=N.map(M=>Object.assign({},M))),C&&(K._redirectEventId=C),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new wr;i.updateFromServerResponse(n);const s=new Nt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?M_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new wr;l.updateFromIdToken(r);const a=new Nt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Au(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function Pt(t){Ft(t instanceof Function,"Expected a class definition");let e=Pf.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}b_.type="NONE";const Rf=b_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t,e,n){return`firebase:${t}:${e}:${n}`}class Er{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=eo(this.userKey,i.apiKey,s),this.fullPersistenceKey=eo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Er(Pt(Rf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Pt(Rf);const o=eo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Nt._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Er(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Er(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(F_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(V_(e))return"Blackberry";if(B_(e))return"Webos";if(U_(e))return"Safari";if((e.includes("chrome/")||j_(e))&&!e.includes("edge/"))return"Chrome";if(W_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function F_(t=Re()){return/firefox\//i.test(t)}function U_(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function j_(t=Re()){return/crios\//i.test(t)}function z_(t=Re()){return/iemobile/i.test(t)}function W_(t=Re()){return/android/i.test(t)}function V_(t=Re()){return/blackberry/i.test(t)}function B_(t=Re()){return/webos/i.test(t)}function yd(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yI(t=Re()){var e;return yd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wI(){return mw()&&document.documentMode===10}function H_(t=Re()){return yd(t)||W_(t)||B_(t)||V_(t)||/windows phone/i.test(t)||z_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t,e=[]){let n;switch(t){case"Browser":n=xf(Re());break;case"Worker":n=`${xf(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(t,e={}){return Kr(t,"GET","/v2/passwordPolicy",_d(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=6;class II{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:CI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Af(this),this.idTokenSubscription=new Af(this),this.beforeStateQueue=new EI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Er.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await L_(this,{idToken:e}),r=await Nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(It(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(bn(this));const n=e?Ue(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SI(this),n=new II(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Er.create(this,[Pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tl(t){return Ue(t)}class Af{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tw(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kI(t){wd=t}function NI(t){return wd.loadJS(t)}function PI(){return wd.gapiScript}function RI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t,e){const n=Oc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Do(s,e??{}))return i;_t(i,"already-initialized")}return n.initialize({options:e})}function AI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OI(t,e,n){const r=Tl(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=G_(e),{host:o,port:l}=DI(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),LI()}function G_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DI(t){const e=G_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Of(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Of(o)}}}function Of(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(t,e){return uI(t,"POST","/v1/accounts:signInWithIdp",_d(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="http://localhost";class Gn extends K_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=fd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Sr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Sr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Sr(e,n)}buildRequest(){const e={requestUri:MI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Ed{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends gs{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends gs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends gs{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.GITHUB_SIGN_IN_METHOD="github.com";Kt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends gs{constructor(){super("twitter.com")}static credential(e,n){return Gn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qt.credential(n,r)}catch{return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nt._fromIdTokenResponse(e,r,i),o=Df(r);return new Fr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Df(r);return new Fr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Df(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends Sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qo(e,n,r,i)}}function Q_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qo._fromErrorAndOperation(t,s,e,r):s})}async function bI(t,e,n=!1){const r=await ts(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(t,e,n=!1){const{auth:r}=t;if(It(r.app))return Promise.reject(bn(r));const i="reauthenticate";try{const s=await ts(t,Q_(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=vd(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),Fr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(t,e,n=!1){if(It(t.app))return Promise.reject(bn(t));const r="signIn",i=await Q_(t,r,e),s=await Fr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function jI(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function zI(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function WI(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}function VI(t){return Ue(t).signOut()}const Yo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yo,"1"),this.storage.removeItem(Yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=1e3,HI=10;class Y_ extends q_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=H_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,HI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Y_.type="LOCAL";const $I=Y_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_ extends q_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X_.type="SESSION";const J_=X_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await GI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Sd("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return window}function QI(t){gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(){return typeof gt().WorkerGlobalScope<"u"&&typeof gt().importScripts=="function"}async function qI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XI(){return Z_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="firebaseLocalStorageDb",JI=1,Xo="firebaseLocalStorage",tv="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nl(t,e){return t.transaction([Xo],e?"readwrite":"readonly").objectStore(Xo)}function ZI(){const t=indexedDB.deleteDatabase(ev);return new _s(t).toPromise()}function Ou(){const t=indexedDB.open(ev,JI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xo,{keyPath:tv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xo)?e(r):(r.close(),await ZI(),e(await Ou()))})})}async function Lf(t,e,n){const r=Nl(t,!0).put({[tv]:e,value:n});return new _s(r).toPromise()}async function eT(t,e){const n=Nl(t,!1).get(e),r=await new _s(n).toPromise();return r===void 0?null:r.value}function Mf(t,e){const n=Nl(t,!0).delete(e);return new _s(n).toPromise()}const tT=800,nT=3;class nv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ou(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Z_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kl._getInstance(XI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qI(),!this.activeServiceWorker)return;this.sender=new KI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ou();return await Lf(e,Yo,"1"),await Mf(e,Yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nl(i,!1).getAll();return new _s(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nv.type="LOCAL";const rT=nv;new ms(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t,e){return e?Pt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd extends K_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Sr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iT(t){return UI(t.auth,new Cd(t),t.bypassAuthState)}function sT(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),FI(n,new Cd(t),t.bypassAuthState)}async function oT(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),bI(n,new Cd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iT;case"linkViaPopup":case"linkViaRedirect":return oT;case"reauthViaPopup":case"reauthViaRedirect":return sT;default:_t(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new ms(2e3,1e4);async function aT(t,e,n){if(It(t.app))return Promise.reject(ut(t,"operation-not-supported-in-this-environment"));const r=Tl(t);rI(t,e,Ed);const i=rv(r,n);return new Dn(r,"signInViaPopup",e,i).executeNotNull()}class Dn extends iv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lT.get())};e()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="pendingRedirect",to=new Map;class cT extends iv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=to.get(this.auth._key());if(!e){try{const r=await dT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}to.set(this.auth._key(),e)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dT(t,e){const n=pT(e),r=fT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function hT(t,e){to.set(t._key(),e)}function fT(t){return Pt(t._redirectPersistence)}function pT(t){return eo(uT,t.config.apiKey,t.name)}async function mT(t,e,n=!1){if(It(t.app))return Promise.reject(bn(t));const r=Tl(t),i=rv(r,e),o=await new cT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=10*60*1e3;class _T{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gT&&this.cachedEventUids.clear(),this.cachedEventUids.has(bf(e))}saveEventToCache(e){this.cachedEventUids.add(bf(e)),this.lastProcessedEventTime=Date.now()}}function bf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(t,e={}){return Kr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ET=/^https?/;async function ST(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yT(t);for(const n of e)try{if(CT(n))return}catch{}_t(t,"unauthorized-domain")}function CT(t){const e=xu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ET.test(n))return!1;if(wT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=new ms(3e4,6e4);function Ff(){const t=gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TT(t){return new Promise((e,n)=>{var r,i,s;function o(){Ff(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ff(),n(ut(t,"network-request-failed"))},timeout:IT.get()})}if(!((i=(r=gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=gt().gapi)===null||s===void 0)&&s.load)o();else{const l=RI("iframefcb");return gt()[l]=()=>{gapi.load?o():n(ut(t,"network-request-failed"))},NI(`${PI()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw no=null,e})}let no=null;function kT(t){return no=no||TT(t),no}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=new ms(5e3,15e3),PT="__/auth/iframe",RT="emulator/auth/iframe",xT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OT(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gd(e,RT):`https://${t.config.authDomain}/${PT}`,r={apiKey:e.apiKey,appName:t.name,v:Br},i=AT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vr(r).slice(1)}`}async function DT(t){const e=await kT(t),n=gt().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:OT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ut(t,"network-request-failed"),l=gt().setTimeout(()=>{s(o)},NT.get());function a(){gt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MT=500,bT=600,FT="_blank",UT="http://localhost";class Uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jT(t,e,n,r=MT,i=bT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},LT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Re().toLowerCase();n&&(l=j_(u)?FT:n),F_(u)&&(e=e||UT,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(yI(u)&&l!=="_self")return zT(e||"",l),new Uf(null);const d=window.open(e||"",l,c);A(d,t,"popup-blocked");try{d.focus()}catch{}return new Uf(d)}function zT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="__/auth/handler",VT="emulator/auth/handler",BT=encodeURIComponent("fac");async function jf(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:i};if(e instanceof Ed){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",du(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(e instanceof gs){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${BT}=${encodeURIComponent(a)}`:"";return`${HT(t)}?${Vr(l).slice(1)}${u}`}function HT({config:t}){return t.emulator?gd(t,VT):`https://${t.authDomain}/${WT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="webStorageSupport";class $T{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=J_,this._completeRedirectFn=mT,this._overrideRedirectResult=hT}async _openPopup(e,n,r,i){var s;Ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await jf(e,n,r,xu(),i);return jT(e,o,Sd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jf(e,n,r,xu(),i);return QI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DT(e),r=new _T(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ga,{type:ga},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ga];o!==void 0&&n(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ST(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return H_()||U_()||yd()}}const GT=$T;var zf="@firebase/auth",Wf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qT(t){Ar(new Vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$_(t)},u=new TI(r,i,s,a);return AI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ar(new Vn("auth-internal",e=>{const n=Tl(e.getProvider("auth").getImmediate());return(r=>new KT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(zf,Wf,QT(t)),cn(zf,Wf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=5*60,XT=ug("authIdTokenMaxAge")||YT;let Vf=null;const JT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XT)return;const i=n==null?void 0:n.token;Vf!==i&&(Vf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ZT(t=mg()){const e=Oc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xI(t,{popupRedirectResolver:GT,persistence:[rT,$I,J_]}),r=ug("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=JT(s.toString());zI(n,o,()=>o(n.currentUser)),jI(n,l=>o(l))}}const i=lg("auth");return i&&OI(n,`http://${i}`),n}function ek(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ek().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qT("Browser");const tk={apiKey:"AIzaSyBzZMqTeeg_5w8eukAy88H6VDgjE4R1kiM",authDomain:"sitemodelgt.firebaseapp.com",projectId:"sitemodelgt",storageBucket:"sitemodelgt.firebasestorage.app",messagingSenderId:"732253881964",appId:"1:732253881964:web:ae719d06c896d8136afa49",measurementId:"G-XSV2F8C19J"},ov=pg(tk),_a=ZT(ov),lv=Y1(ov),nk=new Et;function rk({user:t,profile:e,onUpdate:n}){const[r,i]=_e.useState("datos"),[s,o]=_e.useState(e),[l,a]=_e.useState(!1),u=(C,p)=>{o(f=>({...f,[C]:p}))},c=(C,p,f)=>{o(m=>({...m,[C]:{...m[C],[p]:f}}))},d=async()=>{a(!0);try{const C=P_(lv,`perfil/${t.uid}`),p={};Object.entries(s.fotos||{}).forEach(([m,y])=>{y.url&&y.url.trim()&&(p[m]={titulo:y.titulo||"",url:y.url,fecha:y.fecha||new Date().toISOString().split("T")[0]})});const f={...s,fotos:p};await W1(C,f),n(f),alert("Perfil guardado exitosamente")}catch(C){console.error("Error guardando:",C),alert("Error al guardar el perfil: "+C.message)}finally{a(!1)}},h=()=>v.jsxs("div",{className:"app-section",children:[v.jsx("h3",{children:"Datos del Perfil"}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Nombre Completo"}),v.jsx("input",{type:"text",value:s.nombre_completo||"",onChange:C=>u("nombre_completo",C.target.value)})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Nombre de Usuario"}),v.jsx("input",{type:"text",value:s.nombre_usuario||"",onChange:C=>u("nombre_usuario",C.target.value)})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Email"}),v.jsx("input",{type:"email",value:s.email||"",onChange:C=>u("email",C.target.value)})]}),v.jsxs("div",{className:"form-group",children:[v.jsx("label",{children:"Rol"}),v.jsx("div",{className:"role-display",children:s.rol||"usuario"})]}),v.jsx("div",{className:"form-group",children:v.jsxs("label",{children:[v.jsx("input",{type:"checkbox",checked:s.disponible||!1,onChange:C=>u("disponible",C.target.checked)}),"Disponible"]})})]}),g=()=>v.jsxs("div",{className:"app-section",children:[v.jsx("h3",{children:"Fotos"}),v.jsx("div",{className:"fotos-grid",children:Object.entries(s.fotos||{}).map(([C,p])=>v.jsxs("div",{className:"foto-item-edit",children:[p.url?v.jsx("img",{src:p.url,alt:p.titulo||`Foto ${C}`}):v.jsx("div",{className:"foto-placeholder",children:"Sin imagen"}),v.jsx("input",{type:"text",placeholder:"Título de la foto",value:p.titulo||"",onChange:f=>c("fotos",C,{...p,titulo:f.target.value})}),v.jsx("input",{type:"text",placeholder:"URL de la foto",value:p.url||"",onChange:f=>c("fotos",C,{...p,url:f.target.value})}),v.jsxs("div",{className:"fecha-display",children:["Fecha: ",p.fecha||"No especificada"]})]},C))}),v.jsx("button",{className:"secondary-button",onClick:()=>{const C=`f${Object.keys(s.fotos||{}).length+1}`,p=new Date().toISOString().split("T")[0];c("fotos",C,{titulo:"",url:"",fecha:p})},children:"Agregar Foto"})]}),_=()=>v.jsxs("div",{className:"app-section",children:[v.jsx("h3",{children:"Servicios"}),v.jsx("div",{className:"servicios-list",children:Object.entries(s.servicios||{}).map(([C,p])=>v.jsx("div",{className:"form-group",children:v.jsx("input",{type:"text",placeholder:`Servicio ${C}`,value:p||"",onChange:f=>c("servicios",C,f.target.value)})},C))}),v.jsx("button",{className:"secondary-button",onClick:()=>{const C=`s${Object.keys(s.servicios||{}).length+1}`;c("servicios",C,"")},children:"Agregar Servicio"})]}),w=()=>v.jsxs("div",{className:"app-section",children:[v.jsx("h3",{children:"Ubicaciones"}),v.jsx("div",{className:"ubicaciones-list",children:Object.entries(s.ubicaciones||{}).map(([C,p])=>v.jsx("div",{className:"form-group",children:v.jsx("input",{type:"text",placeholder:`Ubicación ${C}`,value:p||"",onChange:f=>c("ubicaciones",C,f.target.value)})},C))}),v.jsx("button",{className:"secondary-button",onClick:()=>{const C=`u${Object.keys(s.ubicaciones||{}).length+1}`;c("ubicaciones",C,"")},children:"Agregar Ubicación"})]});return v.jsxs("div",{className:"perfil-app",children:[v.jsxs("div",{className:"apps-menu",children:[v.jsx("button",{className:`app-btn ${r==="datos"?"active":""}`,onClick:()=>i("datos"),title:"Datos",children:v.jsx(G0,{})}),v.jsx("button",{className:`app-btn ${r==="fotos"?"active":""}`,onClick:()=>i("fotos"),title:"Fotos",children:v.jsx(J0,{})}),v.jsx("button",{className:`app-btn ${r==="servicios"?"active":""}`,onClick:()=>i("servicios"),title:"Servicios",children:v.jsx(K0,{})}),v.jsx("button",{className:`app-btn ${r==="ubicaciones"?"active":""}`,onClick:()=>i("ubicaciones"),title:"Ubicaciones",children:v.jsx(Y0,{})})]}),v.jsxs("div",{className:"app-content",children:[r==="datos"&&h(),r==="fotos"&&g(),r==="servicios"&&_(),r==="ubicaciones"&&w()]}),v.jsx("div",{className:"app-actions",children:v.jsxs("button",{className:"primary-button",onClick:d,disabled:l,children:[v.jsx(q0,{})," ",l?"Guardando...":"Guardar"]})})]})}function ik(){return v.jsxs("div",{className:"app-placeholder",children:[v.jsx("h3",{children:"Agenda Tours"}),v.jsx("p",{children:"Esta sección está disponible próximamente"})]})}function sk(){return v.jsxs("div",{className:"app-placeholder",children:[v.jsx("h3",{children:"Rifas"}),v.jsx("p",{children:"Esta sección está disponible próximamente"})]})}function ok({config:t,user:e,profile:n,onLogout:r}){const[i,s]=_e.useState(n),[o,l]=_e.useState(null);if(!n||!e)return v.jsx("div",{children:"Cargando perfil..."});const a=h=>{s(h)},u=h=>{l(h)},c=()=>{l(null)},d=()=>{switch(o){case"perfil":return v.jsxs("div",{className:"app-content-wrapper",children:[v.jsx("button",{className:"back-button",onClick:c,children:"← Volver"}),v.jsx(rk,{user:e,profile:i,onUpdate:a})]});case"agenda-tours":return v.jsxs("div",{className:"app-content-wrapper",children:[v.jsx("button",{className:"back-button",onClick:c,children:"← Volver"}),v.jsx(ik,{})]});case"rifas":return v.jsxs("div",{className:"app-content-wrapper",children:[v.jsx("button",{className:"back-button",onClick:c,children:"← Volver"}),v.jsx(sk,{})]});default:return v.jsx(nw,{role:i.rol,onSelectApp:u})}};return v.jsxs("section",{className:"welcome-screen",children:[v.jsxs("div",{className:"welcome-header",children:[v.jsxs("div",{className:"header-content",children:[i.foto_perfil&&v.jsx("img",{src:i.foto_perfil,alt:"Foto de perfil",className:"profile-header-photo"}),v.jsxs("div",{className:"header-info",children:[v.jsx("h2",{children:t.title}),v.jsx("p",{className:"header-name",children:v.jsx("strong",{children:i.nombre_completo})}),v.jsxs("p",{className:"header-role",children:["Rol: ",v.jsx("span",{children:i.rol})]})]})]}),v.jsx("p",{children:t.message})]}),d(),v.jsx("div",{className:"logout-section",children:v.jsx("button",{className:"secondary-button",onClick:r,children:t.logoutButtonText})})]})}const av=_e.createContext(null);function lk({children:t}){const[e,n]=_e.useState(null),[r,i]=_e.useState(null),[s,o]=_e.useState(!0);_e.useEffect(()=>WI(_a,async c=>{if(n(c),c){const d=P_(lv,`perfil/${c.uid}`);try{const h=await V1(d);if(h.exists())i(h.val());else{const g={disponible:!0,email:c.email,foto_perfil:c.photoURL||`https://api.dicebear.com/7.x/avataaars/svg?seed=${c.uid}`,fotos:{},nombre_completo:c.displayName||c.email.split("@")[0],nombre_usuario:c.email.split("@")[0],perfil_activo:!0,rol:"usuario",servicios:{},ubicaciones:{}};await z1(d,g),i(g)}}catch(h){console.error("Error obteniendo/creando perfil:",h),i(null)}}else i(null);o(!1)}),[]);const l=()=>aT(_a,nk),a=()=>VI(_a);return v.jsx(av.Provider,{value:{user:e,profile:r,loading:s,loginWithGoogle:l,logout:a},children:t})}function ak(){return _e.useContext(av)}function uk(){const{user:t,profile:e,loading:n,loginWithGoogle:r,logout:i}=ak(),[s,o]=_e.useState("home"),[l,a]=_e.useState(""),u=d=>{a(""),o(d)},c=async()=>{try{a(""),await r()}catch(d){a(d.message||"Error al iniciar sesión con Google.")}};return n?v.jsx("div",{children:"Cargando..."}):t&&e?v.jsxs("div",{className:"app-shell",children:[v.jsx("header",{className:"app-header",children:v.jsx("h1",{children:ii.app.title})}),v.jsx("main",{className:"app-main",children:v.jsx(ok,{config:ii.welcome,user:t,profile:e,onLogout:()=>{i(),o("home")}})})]}):v.jsxs("div",{className:"app-shell",children:[v.jsx("header",{className:"app-header",children:v.jsx("h1",{children:ii.app.title})}),v.jsxs("main",{className:"app-main",children:[s==="home"&&v.jsx(F0,{config:ii.home,onNavigate:u}),s==="login"&&v.jsx(U0,{config:ii.login,onLogin:c,onCancel:()=>u("home"),errorMessage:l})]})]})}function ck(){return v.jsx(lk,{children:v.jsx(uk,{})})}va.createRoot(document.getElementById("root")).render(v.jsx(Jt.StrictMode,{children:v.jsx(ck,{})}));
