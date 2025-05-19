(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function H0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var cf={exports:{}},qo={},ff={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function V0(){if(Dm)return mt;Dm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function y(N,$,we){this.props=N,this.context=$,this.refs=T,this.updater=we||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=y.prototype;function D(N,$,we){this.props=N,this.context=$,this.refs=T,this.updater=we||S}var L=D.prototype=new _;L.constructor=D,M(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,z=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function X(N,$,we){var q,fe={},ie=null,he=null;if($!=null)for(q in $.ref!==void 0&&(he=$.ref),$.key!==void 0&&(ie=""+$.key),$)z.call($,q)&&!U.hasOwnProperty(q)&&(fe[q]=$[q]);var _e=arguments.length-2;if(_e===1)fe.children=we;else if(1<_e){for(var Ae=Array(_e),De=0;De<_e;De++)Ae[De]=arguments[De+2];fe.children=Ae}if(N&&N.defaultProps)for(q in _e=N.defaultProps,_e)fe[q]===void 0&&(fe[q]=_e[q]);return{$$typeof:r,type:N,key:ie,ref:he,props:fe,_owner:F.current}}function P(N,$){return{$$typeof:r,type:N.type,key:$,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function H(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(we){return $[we]})}var de=/\/+/g;function W(N,$){return typeof N=="object"&&N!==null&&N.key!=null?H(""+N.key):$.toString(36)}function le(N,$,we,q,fe){var ie=typeof N;(ie==="undefined"||ie==="boolean")&&(N=null);var he=!1;if(N===null)he=!0;else switch(ie){case"string":case"number":he=!0;break;case"object":switch(N.$$typeof){case r:case e:he=!0}}if(he)return he=N,fe=fe(he),N=q===""?"."+W(he,0):q,C(fe)?(we="",N!=null&&(we=N.replace(de,"$&/")+"/"),le(fe,$,we,"",function(De){return De})):fe!=null&&(R(fe)&&(fe=P(fe,we+(!fe.key||he&&he.key===fe.key?"":(""+fe.key).replace(de,"$&/")+"/")+N)),$.push(fe)),1;if(he=0,q=q===""?".":q+":",C(N))for(var _e=0;_e<N.length;_e++){ie=N[_e];var Ae=q+W(ie,_e);he+=le(ie,$,we,Ae,fe)}else if(Ae=x(N),typeof Ae=="function")for(N=Ae.call(N),_e=0;!(ie=N.next()).done;)ie=ie.value,Ae=q+W(ie,_e++),he+=le(ie,$,we,Ae,fe);else if(ie==="object")throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return he}function ce(N,$,we){if(N==null)return N;var q=[],fe=0;return le(N,q,"","",function(ie){return $.call(we,ie,fe++)}),q}function oe(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(we){(N._status===0||N._status===-1)&&(N._status=1,N._result=we)},function(we){(N._status===0||N._status===-1)&&(N._status=2,N._result=we)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var ae={current:null},k={transition:null},ne={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:k,ReactCurrentOwner:F};function te(){throw Error("act(...) is not supported in production builds of React.")}return mt.Children={map:ce,forEach:function(N,$,we){ce(N,function(){$.apply(this,arguments)},we)},count:function(N){var $=0;return ce(N,function(){$++}),$},toArray:function(N){return ce(N,function($){return $})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},mt.Component=y,mt.Fragment=t,mt.Profiler=a,mt.PureComponent=D,mt.StrictMode=s,mt.Suspense=h,mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,mt.act=te,mt.cloneElement=function(N,$,we){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var q=M({},N.props),fe=N.key,ie=N.ref,he=N._owner;if($!=null){if($.ref!==void 0&&(ie=$.ref,he=F.current),$.key!==void 0&&(fe=""+$.key),N.type&&N.type.defaultProps)var _e=N.type.defaultProps;for(Ae in $)z.call($,Ae)&&!U.hasOwnProperty(Ae)&&(q[Ae]=$[Ae]===void 0&&_e!==void 0?_e[Ae]:$[Ae])}var Ae=arguments.length-2;if(Ae===1)q.children=we;else if(1<Ae){_e=Array(Ae);for(var De=0;De<Ae;De++)_e[De]=arguments[De+2];q.children=_e}return{$$typeof:r,type:N.type,key:fe,ref:ie,props:q,_owner:he}},mt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},mt.createElement=X,mt.createFactory=function(N){var $=X.bind(null,N);return $.type=N,$},mt.createRef=function(){return{current:null}},mt.forwardRef=function(N){return{$$typeof:f,render:N}},mt.isValidElement=R,mt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:oe}},mt.memo=function(N,$){return{$$typeof:p,type:N,compare:$===void 0?null:$}},mt.startTransition=function(N){var $=k.transition;k.transition={};try{N()}finally{k.transition=$}},mt.unstable_act=te,mt.useCallback=function(N,$){return ae.current.useCallback(N,$)},mt.useContext=function(N){return ae.current.useContext(N)},mt.useDebugValue=function(){},mt.useDeferredValue=function(N){return ae.current.useDeferredValue(N)},mt.useEffect=function(N,$){return ae.current.useEffect(N,$)},mt.useId=function(){return ae.current.useId()},mt.useImperativeHandle=function(N,$,we){return ae.current.useImperativeHandle(N,$,we)},mt.useInsertionEffect=function(N,$){return ae.current.useInsertionEffect(N,$)},mt.useLayoutEffect=function(N,$){return ae.current.useLayoutEffect(N,$)},mt.useMemo=function(N,$){return ae.current.useMemo(N,$)},mt.useReducer=function(N,$,we){return ae.current.useReducer(N,$,we)},mt.useRef=function(N){return ae.current.useRef(N)},mt.useState=function(N){return ae.current.useState(N)},mt.useSyncExternalStore=function(N,$,we){return ae.current.useSyncExternalStore(N,$,we)},mt.useTransition=function(){return ae.current.useTransition()},mt.version="18.3.1",mt}var Im;function Wd(){return Im||(Im=1,ff.exports=V0()),ff.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function G0(){if(Um)return qo;Um=1;var r=Wd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var g,v={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:f,key:x,ref:S,props:v,_owner:a.current}}return qo.Fragment=t,qo.jsx=c,qo.jsxs=c,qo}var Nm;function W0(){return Nm||(Nm=1,cf.exports=G0()),cf.exports}var Yt=W0(),Rl={},df={exports:{}},On={},hf={exports:{}},pf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm;function X0(){return Fm||(Fm=1,function(r){function e(k,ne){var te=k.length;k.push(ne);e:for(;0<te;){var N=te-1>>>1,$=k[N];if(0<a($,ne))k[N]=ne,k[te]=$,te=N;else break e}}function t(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var ne=k[0],te=k.pop();if(te!==ne){k[0]=te;e:for(var N=0,$=k.length,we=$>>>1;N<we;){var q=2*(N+1)-1,fe=k[q],ie=q+1,he=k[ie];if(0>a(fe,te))ie<$&&0>a(he,fe)?(k[N]=he,k[ie]=te,N=ie):(k[N]=fe,k[q]=te,N=q);else if(ie<$&&0>a(he,te))k[N]=he,k[ie]=te,N=ie;else break e}}return ne}function a(k,ne){var te=k.sortIndex-ne.sortIndex;return te!==0?te:k.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var h=[],p=[],g=1,v=null,x=3,S=!1,M=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var ne=t(p);ne!==null;){if(ne.callback===null)s(p);else if(ne.startTime<=k)s(p),ne.sortIndex=ne.expirationTime,e(h,ne);else break;ne=t(p)}}function C(k){if(T=!1,L(k),!M)if(t(h)!==null)M=!0,oe(z);else{var ne=t(p);ne!==null&&ae(C,ne.startTime-k)}}function z(k,ne){M=!1,T&&(T=!1,_(X),X=-1),S=!0;var te=x;try{for(L(ne),v=t(h);v!==null&&(!(v.expirationTime>ne)||k&&!H());){var N=v.callback;if(typeof N=="function"){v.callback=null,x=v.priorityLevel;var $=N(v.expirationTime<=ne);ne=r.unstable_now(),typeof $=="function"?v.callback=$:v===t(h)&&s(h),L(ne)}else s(h);v=t(h)}if(v!==null)var we=!0;else{var q=t(p);q!==null&&ae(C,q.startTime-ne),we=!1}return we}finally{v=null,x=te,S=!1}}var F=!1,U=null,X=-1,P=5,R=-1;function H(){return!(r.unstable_now()-R<P)}function de(){if(U!==null){var k=r.unstable_now();R=k;var ne=!0;try{ne=U(!0,k)}finally{ne?W():(F=!1,U=null)}}else F=!1}var W;if(typeof D=="function")W=function(){D(de)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ce=le.port2;le.port1.onmessage=de,W=function(){ce.postMessage(null)}}else W=function(){y(de,0)};function oe(k){U=k,F||(F=!0,W())}function ae(k,ne){X=y(function(){k(r.unstable_now())},ne)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){M||S||(M=!0,oe(z))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(k){switch(x){case 1:case 2:case 3:var ne=3;break;default:ne=x}var te=x;x=ne;try{return k()}finally{x=te}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,ne){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var te=x;x=k;try{return ne()}finally{x=te}},r.unstable_scheduleCallback=function(k,ne,te){var N=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?N+te:N):te=N,k){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=te+$,k={id:g++,callback:ne,priorityLevel:k,startTime:te,expirationTime:$,sortIndex:-1},te>N?(k.sortIndex=te,e(p,k),t(h)===null&&k===t(p)&&(T?(_(X),X=-1):T=!0,ae(C,te-N))):(k.sortIndex=$,e(h,k),M||S||(M=!0,oe(z))),k},r.unstable_shouldYield=H,r.unstable_wrapCallback=function(k){var ne=x;return function(){var te=x;x=ne;try{return k.apply(this,arguments)}finally{x=te}}}}(pf)),pf}var Om;function Y0(){return Om||(Om=1,hf.exports=X0()),hf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function j0(){if(km)return On;km=1;var r=Wd(),e=Y0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function x(n){return h.call(v,n)?!0:h.call(g,n)?!1:p.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,u,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,D);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,D);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,D);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,u){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,d,u)&&(o=null),u||d===null?x(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var C=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),k=Symbol.iterator;function ne(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,N;function $(n){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var we=!1;function q(n,i){if(!n||we)return"";we=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var u=re}Reflect.construct(n,[],i)}else{try{i.call()}catch(re){u=re}n.call(i.prototype)}else{try{throw Error()}catch(re){u=re}n()}}catch(re){if(re&&u&&typeof re.stack=="string"){for(var d=re.stack.split(`
`),m=u.stack.split(`
`),E=d.length-1,I=m.length-1;1<=E&&0<=I&&d[E]!==m[I];)I--;for(;1<=E&&0<=I;E--,I--)if(d[E]!==m[I]){if(E!==1||I!==1)do if(E--,I--,0>I||d[E]!==m[I]){var B=`
`+d[E].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=E&&0<=I);break}}}finally{we=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?$(n):""}function fe(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=q(n.type,!1),n;case 11:return n=q(n.type.render,!1),n;case 1:return n=q(n.type,!0),n;default:return""}}function ie(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case F:return"Portal";case P:return"Profiler";case X:return"StrictMode";case W:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case de:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return i=n.displayName||null,i!==null?i:ie(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return ie(n(i))}catch{}}return null}function he(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(n){var i=Ae(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function it(n){n._valueTracker||(n._valueTracker=De(n))}function rt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ae(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function st(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function O(n,i){var o=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Dt(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=_e(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ht(n,i){dt(n,i);var o=_e(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Pt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Pt(n,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ye(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Pt(n,i,o){(i!=="number"||st(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var We=Array.isArray;function b(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+_e(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(We(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:_e(o)}}function me(n,i){var o=_e(i.value),u=_e(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function ye(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Re,$e=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Re=Re||document.createElement("div"),Re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function qe(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){Oe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Se[i]=Se[n]})});function Je(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Se.hasOwnProperty(n)&&Se[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=Je(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var ke=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(n,i){if(i){if(ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ot(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,ue=null,ge=null;function Ie(n){if(n=Io(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Va(i),Ce(n.stateNode,n.type,i))}}function Le(n){ue?ge?ge.push(n):ge=[n]:ue=n}function at(){if(ue){var n=ue,i=ge;if(ge=ue=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function Ut(n,i){return n(i)}function Qt(){}var St=!1;function Ln(n,i,o){if(St)return n(i,o);St=!0;try{return Ut(n,i,o)}finally{St=!1,(ue!==null||ge!==null)&&(Qt(),at())}}function En(n,i){var o=n.stateNode;if(o===null)return null;var u=Va(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ds=!1;if(f)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){ds=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{ds=!1}function Li(n,i,o,u,d,m,E,I,B){var re=Array.prototype.slice.call(arguments,3);try{i.apply(o,re)}catch(xe){this.onError(xe)}}var Di=!1,Ur=null,Nr=!1,nr=null,ya={onError:function(n){Di=!0,Ur=n}};function hs(n,i,o,u,d,m,E,I,B){Di=!1,Ur=null,Li.apply(ya,arguments)}function Sa(n,i,o,u,d,m,E,I,B){if(hs.apply(this,arguments),Di){if(Di){var re=Ur;Di=!1,Ur=null}else throw Error(t(198));Nr||(Nr=!0,nr=re)}}function yi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ma(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ea(n){if(yi(n)!==n)throw Error(t(188))}function Du(n){var i=n.alternate;if(!i){if(i=yi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return Ea(d),n;if(m===u)return Ea(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var E=!1,I=d.child;I;){if(I===o){E=!0,o=d,u=m;break}if(I===u){E=!0,u=d,o=m;break}I=I.sibling}if(!E){for(I=m.child;I;){if(I===o){E=!0,o=m,u=d;break}if(I===u){E=!0,u=m,o=d;break}I=I.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Ta(n){return n=Du(n),n!==null?wa(n):null}function wa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=wa(n);if(i!==null)return i;n=n.sibling}return null}var Aa=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,Y=e.unstable_shouldYield,se=e.unstable_requestPaint,Z=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,Ee=e.unstable_ImmediatePriority,Pe=e.unstable_UserBlockingPriority,Ue=e.unstable_NormalPriority,Be=e.unstable_LowPriority,tt=e.unstable_IdlePriority,Qe=null,He=null;function xt(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:yt,Gt=Math.log,kt=Math.LN2;function yt(n){return n>>>=0,n===0?32:31-(Gt(n)/kt|0)|0}var je=64,Wt=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mn(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,E=o&268435455;if(E!==0){var I=E&~d;I!==0?u=gt(I):(m&=E,m!==0&&(u=gt(m)))}else E=o&~d,E!==0?u=gt(E):m!==0&&(u=gt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-lt(i),d=1<<o,u|=n[o],i&=~d;return u}function ir(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-lt(m),I=1<<E,B=d[E];B===-1?((I&o)===0||(I&u)!==0)&&(d[E]=ir(I,i)):B<=i&&(n.expiredLanes|=I),m&=~I}}function Ii(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Lt(){var n=je;return je<<=1,(je&4194240)===0&&(je=64),n}function gn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function rn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-lt(i),n[i]=o}function dn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-lt(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function sn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-lt(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Mt=0;function Si(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var fh,Iu,dh,hh,ph,Uu=!1,Ra=[],rr=null,sr=null,or=null,_o=new Map,vo=new Map,ar=[],uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mh(n,i){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":_o.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(i.pointerId)}}function xo(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Io(i),i!==null&&Iu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function cv(n,i,o,u,d){switch(i){case"focusin":return rr=xo(rr,n,i,o,u,d),!0;case"dragenter":return sr=xo(sr,n,i,o,u,d),!0;case"mouseover":return or=xo(or,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return _o.set(m,xo(_o.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,vo.set(m,xo(vo.get(m)||null,n,i,o,u,d)),!0}return!1}function gh(n){var i=Fr(n.target);if(i!==null){var o=yi(i);if(o!==null){if(i=o.tag,i===13){if(i=Ma(o),i!==null){n.blockedOn=i,ph(n.priority,function(){dh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ca(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Fu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);At=u,o.target.dispatchEvent(u),At=null}else return i=Io(o),i!==null&&Iu(i),n.blockedOn=o,!1;i.shift()}return!0}function _h(n,i,o){Ca(n)&&o.delete(i)}function fv(){Uu=!1,rr!==null&&Ca(rr)&&(rr=null),sr!==null&&Ca(sr)&&(sr=null),or!==null&&Ca(or)&&(or=null),_o.forEach(_h),vo.forEach(_h)}function yo(n,i){n.blockedOn===i&&(n.blockedOn=null,Uu||(Uu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fv)))}function So(n){function i(d){return yo(d,n)}if(0<Ra.length){yo(Ra[0],n);for(var o=1;o<Ra.length;o++){var u=Ra[o];u.blockedOn===n&&(u.blockedOn=null)}}for(rr!==null&&yo(rr,n),sr!==null&&yo(sr,n),or!==null&&yo(or,n),_o.forEach(i),vo.forEach(i),o=0;o<ar.length;o++)u=ar[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<ar.length&&(o=ar[0],o.blockedOn===null);)gh(o),o.blockedOn===null&&ar.shift()}var ps=C.ReactCurrentBatchConfig,Pa=!0;function dv(n,i,o,u){var d=Mt,m=ps.transition;ps.transition=null;try{Mt=1,Nu(n,i,o,u)}finally{Mt=d,ps.transition=m}}function hv(n,i,o,u){var d=Mt,m=ps.transition;ps.transition=null;try{Mt=4,Nu(n,i,o,u)}finally{Mt=d,ps.transition=m}}function Nu(n,i,o,u){if(Pa){var d=Fu(n,i,o,u);if(d===null)Ju(n,i,u,ba,o),mh(n,u);else if(cv(d,n,i,o,u))u.stopPropagation();else if(mh(n,u),i&4&&-1<uv.indexOf(n)){for(;d!==null;){var m=Io(d);if(m!==null&&fh(m),m=Fu(n,i,o,u),m===null&&Ju(n,i,u,ba,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else Ju(n,i,u,null,o)}}var ba=null;function Fu(n,i,o,u){if(ba=null,n=G(u),n=Fr(n),n!==null)if(i=yi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ma(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ba=n,null}function vh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case Ee:return 1;case Pe:return 4;case Ue:case Be:return 16;case tt:return 536870912;default:return 16}default:return 16}}var lr=null,Ou=null,La=null;function xh(){if(La)return La;var n,i=Ou,o=i.length,u,d="value"in lr?lr.value:lr.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var E=o-n;for(u=1;u<=E&&i[o-u]===d[m-u];u++);return La=d.slice(n,1<u?1-u:void 0)}function Da(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ia(){return!0}function yh(){return!1}function Vn(n){function i(o,u,d,m,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ia:yh,this.isPropagationStopped=yh,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ku=Vn(ms),Mo=te({},ms,{view:0,detail:0}),pv=Vn(Mo),Bu,zu,Eo,Ua=te({},Mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Eo&&(Eo&&n.type==="mousemove"?(Bu=n.screenX-Eo.screenX,zu=n.screenY-Eo.screenY):zu=Bu=0,Eo=n),Bu)},movementY:function(n){return"movementY"in n?n.movementY:zu}}),Sh=Vn(Ua),mv=te({},Ua,{dataTransfer:0}),gv=Vn(mv),_v=te({},Mo,{relatedTarget:0}),Hu=Vn(_v),vv=te({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=Vn(vv),yv=te({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Sv=Vn(yv),Mv=te({},ms,{data:0}),Mh=Vn(Mv),Ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=wv[n])?!!i[n]:!1}function Vu(){return Av}var Rv=te({},Mo,{key:function(n){if(n.key){var i=Ev[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Da(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Tv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(n){return n.type==="keypress"?Da(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Da(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Cv=Vn(Rv),Pv=te({},Ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eh=Vn(Pv),bv=te({},Mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),Lv=Vn(bv),Dv=te({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iv=Vn(Dv),Uv=te({},Ua,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=Vn(Uv),Fv=[9,13,27,32],Gu=f&&"CompositionEvent"in window,To=null;f&&"documentMode"in document&&(To=document.documentMode);var Ov=f&&"TextEvent"in window&&!To,Th=f&&(!Gu||To&&8<To&&11>=To),wh=" ",Ah=!1;function Rh(n,i){switch(n){case"keyup":return Fv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ch(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function kv(n,i){switch(n){case"compositionend":return Ch(i);case"keypress":return i.which!==32?null:(Ah=!0,wh);case"textInput":return n=i.data,n===wh&&Ah?null:n;default:return null}}function Bv(n,i){if(gs)return n==="compositionend"||!Gu&&Rh(n,i)?(n=xh(),La=Ou=lr=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Th&&i.locale!=="ko"?null:i.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!zv[n.type]:i==="textarea"}function bh(n,i,o,u){Le(u),i=Ba(i,"onChange"),0<i.length&&(o=new ku("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var wo=null,Ao=null;function Hv(n){qh(n,0)}function Na(n){var i=Ss(n);if(rt(i))return n}function Vv(n,i){if(n==="change")return i}var Lh=!1;if(f){var Wu;if(f){var Xu="oninput"in document;if(!Xu){var Dh=document.createElement("div");Dh.setAttribute("oninput","return;"),Xu=typeof Dh.oninput=="function"}Wu=Xu}else Wu=!1;Lh=Wu&&(!document.documentMode||9<document.documentMode)}function Ih(){wo&&(wo.detachEvent("onpropertychange",Uh),Ao=wo=null)}function Uh(n){if(n.propertyName==="value"&&Na(Ao)){var i=[];bh(i,Ao,n,G(n)),Ln(Hv,i)}}function Gv(n,i,o){n==="focusin"?(Ih(),wo=i,Ao=o,wo.attachEvent("onpropertychange",Uh)):n==="focusout"&&Ih()}function Wv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Na(Ao)}function Xv(n,i){if(n==="click")return Na(i)}function Yv(n,i){if(n==="input"||n==="change")return Na(i)}function jv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ai=typeof Object.is=="function"?Object.is:jv;function Ro(n,i){if(ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!ai(n[d],i[d]))return!1}return!0}function Nh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Fh(n,i){var o=Nh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Nh(o)}}function Oh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Oh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function kh(){for(var n=window,i=st();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=st(n.document)}return i}function Yu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function qv(n){var i=kh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Oh(o.ownerDocument.documentElement,o)){if(u!==null&&Yu(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=Fh(o,m);var E=Fh(o,u);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $v=f&&"documentMode"in document&&11>=document.documentMode,_s=null,ju=null,Co=null,qu=!1;function Bh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;qu||_s==null||_s!==st(u)||(u=_s,"selectionStart"in u&&Yu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Co&&Ro(Co,u)||(Co=u,u=Ba(ju,"onSelect"),0<u.length&&(i=new ku("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=_s)))}function Fa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var vs={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},$u={},zh={};f&&(zh=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Oa(n){if($u[n])return $u[n];if(!vs[n])return n;var i=vs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in zh)return $u[n]=i[o];return n}var Hh=Oa("animationend"),Vh=Oa("animationiteration"),Gh=Oa("animationstart"),Wh=Oa("transitionend"),Xh=new Map,Yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,i){Xh.set(n,i),l(i,[n])}for(var Ku=0;Ku<Yh.length;Ku++){var Zu=Yh[Ku],Kv=Zu.toLowerCase(),Zv=Zu[0].toUpperCase()+Zu.slice(1);ur(Kv,"on"+Zv)}ur(Hh,"onAnimationEnd"),ur(Vh,"onAnimationIteration"),ur(Gh,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(Wh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function jh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,Sa(u,i,void 0,n),n.currentTarget=null}function qh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var I=u[E],B=I.instance,re=I.currentTarget;if(I=I.listener,B!==m&&d.isPropagationStopped())break e;jh(d,I,re),m=B}else for(E=0;E<u.length;E++){if(I=u[E],B=I.instance,re=I.currentTarget,I=I.listener,B!==m&&d.isPropagationStopped())break e;jh(d,I,re),m=B}}}if(Nr)throw n=nr,Nr=!1,nr=null,n}function Nt(n,i){var o=i[sc];o===void 0&&(o=i[sc]=new Set);var u=n+"__bubble";o.has(u)||($h(i,n,2,!1),o.add(u))}function Qu(n,i,o){var u=0;i&&(u|=4),$h(o,n,u,i)}var ka="_reactListening"+Math.random().toString(36).slice(2);function bo(n){if(!n[ka]){n[ka]=!0,s.forEach(function(o){o!=="selectionchange"&&(Qv.has(o)||Qu(o,!1,n),Qu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ka]||(i[ka]=!0,Qu("selectionchange",!1,i))}}function $h(n,i,o,u){switch(vh(i)){case 1:var d=dv;break;case 4:d=hv;break;default:d=Nu}o=d.bind(null,i,o,n),d=void 0,!ds||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Ju(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(E===4)for(E=u.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;E=E.return}for(;I!==null;){if(E=Fr(I),E===null)return;if(B=E.tag,B===5||B===6){u=m=E;continue e}I=I.parentNode}}u=u.return}Ln(function(){var re=m,xe=G(o),Me=[];e:{var ve=Xh.get(n);if(ve!==void 0){var Ne=ku,ze=n;switch(n){case"keypress":if(Da(o)===0)break e;case"keydown":case"keyup":Ne=Cv;break;case"focusin":ze="focus",Ne=Hu;break;case"focusout":ze="blur",Ne=Hu;break;case"beforeblur":case"afterblur":Ne=Hu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=Sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=Lv;break;case Hh:case Vh:case Gh:Ne=xv;break;case Wh:Ne=Iv;break;case"scroll":Ne=pv;break;case"wheel":Ne=Nv;break;case"copy":case"cut":case"paste":Ne=Sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=Eh}var Ve=(i&4)!==0,qt=!Ve&&n==="scroll",K=Ve?ve!==null?ve+"Capture":null:ve;Ve=[];for(var V=re,Q;V!==null;){Q=V;var Te=Q.stateNode;if(Q.tag===5&&Te!==null&&(Q=Te,K!==null&&(Te=En(V,K),Te!=null&&Ve.push(Lo(V,Te,Q)))),qt)break;V=V.return}0<Ve.length&&(ve=new Ne(ve,ze,null,o,xe),Me.push({event:ve,listeners:Ve}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ne=n==="mouseout"||n==="pointerout",ve&&o!==At&&(ze=o.relatedTarget||o.fromElement)&&(Fr(ze)||ze[Ui]))break e;if((Ne||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ne?(ze=o.relatedTarget||o.toElement,Ne=re,ze=ze?Fr(ze):null,ze!==null&&(qt=yi(ze),ze!==qt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ne=null,ze=re),Ne!==ze)){if(Ve=Sh,Te="onMouseLeave",K="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=Eh,Te="onPointerLeave",K="onPointerEnter",V="pointer"),qt=Ne==null?ve:Ss(Ne),Q=ze==null?ve:Ss(ze),ve=new Ve(Te,V+"leave",Ne,o,xe),ve.target=qt,ve.relatedTarget=Q,Te=null,Fr(xe)===re&&(Ve=new Ve(K,V+"enter",ze,o,xe),Ve.target=Q,Ve.relatedTarget=qt,Te=Ve),qt=Te,Ne&&ze)t:{for(Ve=Ne,K=ze,V=0,Q=Ve;Q;Q=xs(Q))V++;for(Q=0,Te=K;Te;Te=xs(Te))Q++;for(;0<V-Q;)Ve=xs(Ve),V--;for(;0<Q-V;)K=xs(K),Q--;for(;V--;){if(Ve===K||K!==null&&Ve===K.alternate)break t;Ve=xs(Ve),K=xs(K)}Ve=null}else Ve=null;Ne!==null&&Kh(Me,ve,Ne,Ve,!1),ze!==null&&qt!==null&&Kh(Me,qt,ze,Ve,!0)}}e:{if(ve=re?Ss(re):window,Ne=ve.nodeName&&ve.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ve.type==="file")var Xe=Vv;else if(Ph(ve))if(Lh)Xe=Yv;else{Xe=Wv;var Ke=Gv}else(Ne=ve.nodeName)&&Ne.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Xe=Xv);if(Xe&&(Xe=Xe(n,re))){bh(Me,Xe,o,xe);break e}Ke&&Ke(n,ve,re),n==="focusout"&&(Ke=ve._wrapperState)&&Ke.controlled&&ve.type==="number"&&Pt(ve,"number",ve.value)}switch(Ke=re?Ss(re):window,n){case"focusin":(Ph(Ke)||Ke.contentEditable==="true")&&(_s=Ke,ju=re,Co=null);break;case"focusout":Co=ju=_s=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,Bh(Me,o,xe);break;case"selectionchange":if($v)break;case"keydown":case"keyup":Bh(Me,o,xe)}var Ze;if(Gu)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else gs?Rh(n,o)&&(nt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(Th&&o.locale!=="ko"&&(gs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&gs&&(Ze=xh()):(lr=xe,Ou="value"in lr?lr.value:lr.textContent,gs=!0)),Ke=Ba(re,nt),0<Ke.length&&(nt=new Mh(nt,n,null,o,xe),Me.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=Ch(o),Ze!==null&&(nt.data=Ze)))),(Ze=Ov?kv(n,o):Bv(n,o))&&(re=Ba(re,"onBeforeInput"),0<re.length&&(xe=new Mh("onBeforeInput","beforeinput",null,o,xe),Me.push({event:xe,listeners:re}),xe.data=Ze))}qh(Me,i)})}function Lo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ba(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=En(n,o),m!=null&&u.unshift(Lo(n,m,d)),m=En(n,i),m!=null&&u.push(Lo(n,m,d))),n=n.return}return u}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Kh(n,i,o,u,d){for(var m=i._reactName,E=[];o!==null&&o!==u;){var I=o,B=I.alternate,re=I.stateNode;if(B!==null&&B===u)break;I.tag===5&&re!==null&&(I=re,d?(B=En(o,m),B!=null&&E.unshift(Lo(o,B,I))):d||(B=En(o,m),B!=null&&E.push(Lo(o,B,I)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var Jv=/\r\n?/g,e0=/\u0000|\uFFFD/g;function Zh(n){return(typeof n=="string"?n:""+n).replace(Jv,`
`).replace(e0,"")}function za(n,i,o){if(i=Zh(i),Zh(n)!==i&&o)throw Error(t(425))}function Ha(){}var ec=null,tc=null;function nc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ic=typeof setTimeout=="function"?setTimeout:void 0,t0=typeof clearTimeout=="function"?clearTimeout:void 0,Qh=typeof Promise=="function"?Promise:void 0,n0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qh<"u"?function(n){return Qh.resolve(null).then(n).catch(i0)}:ic;function i0(n){setTimeout(function(){throw n})}function rc(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),So(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);So(i)}function cr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Jh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Mi="__reactFiber$"+ys,Do="__reactProps$"+ys,Ui="__reactContainer$"+ys,sc="__reactEvents$"+ys,r0="__reactListeners$"+ys,s0="__reactHandles$"+ys;function Fr(n){var i=n[Mi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ui]||o[Mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Jh(n);n!==null;){if(o=n[Mi])return o;n=Jh(n)}return i}n=o,o=n.parentNode}return null}function Io(n){return n=n[Mi]||n[Ui],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Va(n){return n[Do]||null}var oc=[],Ms=-1;function fr(n){return{current:n}}function Ft(n){0>Ms||(n.current=oc[Ms],oc[Ms]=null,Ms--)}function It(n,i){Ms++,oc[Ms]=n.current,n.current=i}var dr={},_n=fr(dr),Dn=fr(!1),Or=dr;function Es(n,i){var o=n.type.contextTypes;if(!o)return dr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function In(n){return n=n.childContextTypes,n!=null}function Ga(){Ft(Dn),Ft(_n)}function ep(n,i,o){if(_n.current!==dr)throw Error(t(168));It(_n,i),It(Dn,o)}function tp(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,he(n)||"Unknown",d));return te({},o,u)}function Wa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||dr,Or=_n.current,It(_n,n),It(Dn,Dn.current),!0}function np(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=tp(n,i,Or),u.__reactInternalMemoizedMergedChildContext=n,Ft(Dn),Ft(_n),It(_n,n)):Ft(Dn),It(Dn,o)}var Ni=null,Xa=!1,ac=!1;function ip(n){Ni===null?Ni=[n]:Ni.push(n)}function o0(n){Xa=!0,ip(n)}function hr(){if(!ac&&Ni!==null){ac=!0;var n=0,i=Mt;try{var o=Ni;for(Mt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Ni=null,Xa=!1}catch(d){throw Ni!==null&&(Ni=Ni.slice(n+1)),Aa(Ee,hr),d}finally{Mt=i,ac=!1}}return null}var Ts=[],ws=0,Ya=null,ja=0,$n=[],Kn=0,kr=null,Fi=1,Oi="";function Br(n,i){Ts[ws++]=ja,Ts[ws++]=Ya,Ya=n,ja=i}function rp(n,i,o){$n[Kn++]=Fi,$n[Kn++]=Oi,$n[Kn++]=kr,kr=n;var u=Fi;n=Oi;var d=32-lt(u)-1;u&=~(1<<d),o+=1;var m=32-lt(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,Fi=1<<32-lt(i)+d|o<<d|u,Oi=m+n}else Fi=1<<m|o<<d|u,Oi=n}function lc(n){n.return!==null&&(Br(n,1),rp(n,1,0))}function uc(n){for(;n===Ya;)Ya=Ts[--ws],Ts[ws]=null,ja=Ts[--ws],Ts[ws]=null;for(;n===kr;)kr=$n[--Kn],$n[Kn]=null,Oi=$n[--Kn],$n[Kn]=null,Fi=$n[--Kn],$n[Kn]=null}var Gn=null,Wn=null,Bt=!1,li=null;function sp(n,i){var o=ei(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function op(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Gn=n,Wn=cr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Gn=n,Wn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=kr!==null?{id:Fi,overflow:Oi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ei(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Gn=n,Wn=null,!0):!1;default:return!1}}function cc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function fc(n){if(Bt){var i=Wn;if(i){var o=i;if(!op(n,i)){if(cc(n))throw Error(t(418));i=cr(o.nextSibling);var u=Gn;i&&op(n,i)?sp(u,o):(n.flags=n.flags&-4097|2,Bt=!1,Gn=n)}}else{if(cc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,Gn=n}}}function ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Gn=n}function qa(n){if(n!==Gn)return!1;if(!Bt)return ap(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!nc(n.type,n.memoizedProps)),i&&(i=Wn)){if(cc(n))throw lp(),Error(t(418));for(;i;)sp(n,i),i=cr(i.nextSibling)}if(ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Wn=cr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Wn=null}}else Wn=Gn?cr(n.stateNode.nextSibling):null;return!0}function lp(){for(var n=Wn;n;)n=cr(n.nextSibling)}function As(){Wn=Gn=null,Bt=!1}function dc(n){li===null?li=[n]:li.push(n)}var a0=C.ReactCurrentBatchConfig;function Uo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var I=d.refs;E===null?delete I[m]:I[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function $a(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function up(n){var i=n._init;return i(n._payload)}function cp(n){function i(K,V){if(n){var Q=K.deletions;Q===null?(K.deletions=[V],K.flags|=16):Q.push(V)}}function o(K,V){if(!n)return null;for(;V!==null;)i(K,V),V=V.sibling;return null}function u(K,V){for(K=new Map;V!==null;)V.key!==null?K.set(V.key,V):K.set(V.index,V),V=V.sibling;return K}function d(K,V){return K=Sr(K,V),K.index=0,K.sibling=null,K}function m(K,V,Q){return K.index=Q,n?(Q=K.alternate,Q!==null?(Q=Q.index,Q<V?(K.flags|=2,V):Q):(K.flags|=2,V)):(K.flags|=1048576,V)}function E(K){return n&&K.alternate===null&&(K.flags|=2),K}function I(K,V,Q,Te){return V===null||V.tag!==6?(V=rf(Q,K.mode,Te),V.return=K,V):(V=d(V,Q),V.return=K,V)}function B(K,V,Q,Te){var Xe=Q.type;return Xe===U?xe(K,V,Q.props.children,Te,Q.key):V!==null&&(V.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&up(Xe)===V.type)?(Te=d(V,Q.props),Te.ref=Uo(K,V,Q),Te.return=K,Te):(Te=xl(Q.type,Q.key,Q.props,null,K.mode,Te),Te.ref=Uo(K,V,Q),Te.return=K,Te)}function re(K,V,Q,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=sf(Q,K.mode,Te),V.return=K,V):(V=d(V,Q.children||[]),V.return=K,V)}function xe(K,V,Q,Te,Xe){return V===null||V.tag!==7?(V=jr(Q,K.mode,Te,Xe),V.return=K,V):(V=d(V,Q),V.return=K,V)}function Me(K,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number")return V=rf(""+V,K.mode,Q),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case z:return Q=xl(V.type,V.key,V.props,null,K.mode,Q),Q.ref=Uo(K,null,V),Q.return=K,Q;case F:return V=sf(V,K.mode,Q),V.return=K,V;case oe:var Te=V._init;return Me(K,Te(V._payload),Q)}if(We(V)||ne(V))return V=jr(V,K.mode,Q,null),V.return=K,V;$a(K,V)}return null}function ve(K,V,Q,Te){var Xe=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Xe!==null?null:I(K,V,""+Q,Te);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case z:return Q.key===Xe?B(K,V,Q,Te):null;case F:return Q.key===Xe?re(K,V,Q,Te):null;case oe:return Xe=Q._init,ve(K,V,Xe(Q._payload),Te)}if(We(Q)||ne(Q))return Xe!==null?null:xe(K,V,Q,Te,null);$a(K,Q)}return null}function Ne(K,V,Q,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return K=K.get(Q)||null,I(V,K,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case z:return K=K.get(Te.key===null?Q:Te.key)||null,B(V,K,Te,Xe);case F:return K=K.get(Te.key===null?Q:Te.key)||null,re(V,K,Te,Xe);case oe:var Ke=Te._init;return Ne(K,V,Q,Ke(Te._payload),Xe)}if(We(Te)||ne(Te))return K=K.get(Q)||null,xe(V,K,Te,Xe,null);$a(V,Te)}return null}function ze(K,V,Q,Te){for(var Xe=null,Ke=null,Ze=V,nt=V=0,ln=null;Ze!==null&&nt<Q.length;nt++){Ze.index>nt?(ln=Ze,Ze=null):ln=Ze.sibling;var Tt=ve(K,Ze,Q[nt],Te);if(Tt===null){Ze===null&&(Ze=ln);break}n&&Ze&&Tt.alternate===null&&i(K,Ze),V=m(Tt,V,nt),Ke===null?Xe=Tt:Ke.sibling=Tt,Ke=Tt,Ze=ln}if(nt===Q.length)return o(K,Ze),Bt&&Br(K,nt),Xe;if(Ze===null){for(;nt<Q.length;nt++)Ze=Me(K,Q[nt],Te),Ze!==null&&(V=m(Ze,V,nt),Ke===null?Xe=Ze:Ke.sibling=Ze,Ke=Ze);return Bt&&Br(K,nt),Xe}for(Ze=u(K,Ze);nt<Q.length;nt++)ln=Ne(Ze,K,nt,Q[nt],Te),ln!==null&&(n&&ln.alternate!==null&&Ze.delete(ln.key===null?nt:ln.key),V=m(ln,V,nt),Ke===null?Xe=ln:Ke.sibling=ln,Ke=ln);return n&&Ze.forEach(function(Mr){return i(K,Mr)}),Bt&&Br(K,nt),Xe}function Ve(K,V,Q,Te){var Xe=ne(Q);if(typeof Xe!="function")throw Error(t(150));if(Q=Xe.call(Q),Q==null)throw Error(t(151));for(var Ke=Xe=null,Ze=V,nt=V=0,ln=null,Tt=Q.next();Ze!==null&&!Tt.done;nt++,Tt=Q.next()){Ze.index>nt?(ln=Ze,Ze=null):ln=Ze.sibling;var Mr=ve(K,Ze,Tt.value,Te);if(Mr===null){Ze===null&&(Ze=ln);break}n&&Ze&&Mr.alternate===null&&i(K,Ze),V=m(Mr,V,nt),Ke===null?Xe=Mr:Ke.sibling=Mr,Ke=Mr,Ze=ln}if(Tt.done)return o(K,Ze),Bt&&Br(K,nt),Xe;if(Ze===null){for(;!Tt.done;nt++,Tt=Q.next())Tt=Me(K,Tt.value,Te),Tt!==null&&(V=m(Tt,V,nt),Ke===null?Xe=Tt:Ke.sibling=Tt,Ke=Tt);return Bt&&Br(K,nt),Xe}for(Ze=u(K,Ze);!Tt.done;nt++,Tt=Q.next())Tt=Ne(Ze,K,nt,Tt.value,Te),Tt!==null&&(n&&Tt.alternate!==null&&Ze.delete(Tt.key===null?nt:Tt.key),V=m(Tt,V,nt),Ke===null?Xe=Tt:Ke.sibling=Tt,Ke=Tt);return n&&Ze.forEach(function(z0){return i(K,z0)}),Bt&&Br(K,nt),Xe}function qt(K,V,Q,Te){if(typeof Q=="object"&&Q!==null&&Q.type===U&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case z:e:{for(var Xe=Q.key,Ke=V;Ke!==null;){if(Ke.key===Xe){if(Xe=Q.type,Xe===U){if(Ke.tag===7){o(K,Ke.sibling),V=d(Ke,Q.props.children),V.return=K,K=V;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&up(Xe)===Ke.type){o(K,Ke.sibling),V=d(Ke,Q.props),V.ref=Uo(K,Ke,Q),V.return=K,K=V;break e}o(K,Ke);break}else i(K,Ke);Ke=Ke.sibling}Q.type===U?(V=jr(Q.props.children,K.mode,Te,Q.key),V.return=K,K=V):(Te=xl(Q.type,Q.key,Q.props,null,K.mode,Te),Te.ref=Uo(K,V,Q),Te.return=K,K=Te)}return E(K);case F:e:{for(Ke=Q.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){o(K,V.sibling),V=d(V,Q.children||[]),V.return=K,K=V;break e}else{o(K,V);break}else i(K,V);V=V.sibling}V=sf(Q,K.mode,Te),V.return=K,K=V}return E(K);case oe:return Ke=Q._init,qt(K,V,Ke(Q._payload),Te)}if(We(Q))return ze(K,V,Q,Te);if(ne(Q))return Ve(K,V,Q,Te);$a(K,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,V!==null&&V.tag===6?(o(K,V.sibling),V=d(V,Q),V.return=K,K=V):(o(K,V),V=rf(Q,K.mode,Te),V.return=K,K=V),E(K)):o(K,V)}return qt}var Rs=cp(!0),fp=cp(!1),Ka=fr(null),Za=null,Cs=null,hc=null;function pc(){hc=Cs=Za=null}function mc(n){var i=Ka.current;Ft(Ka),n._currentValue=i}function gc(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Ps(n,i){Za=n,hc=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Un=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(hc!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(Za===null)throw Error(t(308));Cs=n,Za.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var zr=null;function _c(n){zr===null?zr=[n]:zr.push(n)}function dp(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,_c(i)):(o.next=d.next,d.next=o),i.interleaved=o,ki(n,u)}function ki(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var pr=!1;function vc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Bi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,ki(n,o)}return d=u.interleaved,d===null?(i.next=i,_c(u)):(i.next=d.next,d.next=i),u.interleaved=i,ki(n,o)}function Qa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,sn(n,o)}}function pp(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ja(n,i,o,u){var d=n.updateQueue;pr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var B=I,re=B.next;B.next=null,E===null?m=re:E.next=re,E=B;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,I=xe.lastBaseUpdate,I!==E&&(I===null?xe.firstBaseUpdate=re:I.next=re,xe.lastBaseUpdate=B))}if(m!==null){var Me=d.baseState;E=0,xe=re=B=null,I=m;do{var ve=I.lane,Ne=I.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Ne,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=n,Ve=I;switch(ve=i,Ne=o,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){Me=ze.call(Ne,Me,ve);break e}Me=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,ve=typeof ze=="function"?ze.call(Ne,Me,ve):ze,ve==null)break e;Me=te({},Me,ve);break e;case 2:pr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[I]:ve.push(I))}else Ne={eventTime:Ne,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},xe===null?(re=xe=Ne,B=Me):xe=xe.next=Ne,E|=ve;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(xe===null&&(B=Me),d.baseState=B,d.firstBaseUpdate=re,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Gr|=E,n.lanes=E,n.memoizedState=Me}}function mp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var No={},Ei=fr(No),Fo=fr(No),Oo=fr(No);function Hr(n){if(n===No)throw Error(t(174));return n}function xc(n,i){switch(It(Oo,i),It(Fo,n),It(Ei,No),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ge(i,n)}Ft(Ei),It(Ei,i)}function bs(){Ft(Ei),Ft(Fo),Ft(Oo)}function gp(n){Hr(Oo.current);var i=Hr(Ei.current),o=Ge(i,n.type);i!==o&&(It(Fo,n),It(Ei,o))}function yc(n){Fo.current===n&&(Ft(Ei),Ft(Fo))}var Ht=fr(0);function el(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Sc=[];function Mc(){for(var n=0;n<Sc.length;n++)Sc[n]._workInProgressVersionPrimary=null;Sc.length=0}var tl=C.ReactCurrentDispatcher,Ec=C.ReactCurrentBatchConfig,Vr=0,Vt=null,Jt=null,on=null,nl=!1,ko=!1,Bo=0,l0=0;function vn(){throw Error(t(321))}function Tc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ai(n[o],i[o]))return!1;return!0}function wc(n,i,o,u,d,m){if(Vr=m,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,tl.current=n===null||n.memoizedState===null?d0:h0,n=o(u,d),ko){m=0;do{if(ko=!1,Bo=0,25<=m)throw Error(t(301));m+=1,on=Jt=null,i.updateQueue=null,tl.current=p0,n=o(u,d)}while(ko)}if(tl.current=sl,i=Jt!==null&&Jt.next!==null,Vr=0,on=Jt=Vt=null,nl=!1,i)throw Error(t(300));return n}function Ac(){var n=Bo!==0;return Bo=0,n}function Ti(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?Vt.memoizedState=on=n:on=on.next=n,on}function Qn(){if(Jt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=on===null?Vt.memoizedState:on.next;if(i!==null)on=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},on===null?Vt.memoizedState=on=n:on=on.next=n}return on}function zo(n,i){return typeof i=="function"?i(n):i}function Rc(n){var i=Qn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Jt,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var I=E=null,B=null,re=m;do{var xe=re.lane;if((Vr&xe)===xe)B!==null&&(B=B.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),u=re.hasEagerState?re.eagerState:n(u,re.action);else{var Me={lane:xe,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};B===null?(I=B=Me,E=u):B=B.next=Me,Vt.lanes|=xe,Gr|=xe}re=re.next}while(re!==null&&re!==m);B===null?E=u:B.next=I,ai(u,i.memoizedState)||(Un=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=B,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Vt.lanes|=m,Gr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Cc(n){var i=Qn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);ai(m,i.memoizedState)||(Un=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function _p(){}function vp(n,i){var o=Vt,u=Qn(),d=i(),m=!ai(u.memoizedState,d);if(m&&(u.memoizedState=d,Un=!0),u=u.queue,Pc(Sp.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,Ho(9,yp.bind(null,o,u,d,i),void 0,null),an===null)throw Error(t(349));(Vr&30)!==0||xp(o,i,d)}return d}function xp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function yp(n,i,o,u){i.value=o,i.getSnapshot=u,Mp(i)&&Ep(n)}function Sp(n,i,o){return o(function(){Mp(i)&&Ep(n)})}function Mp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ai(n,o)}catch{return!0}}function Ep(n){var i=ki(n,1);i!==null&&di(i,n,1,-1)}function Tp(n){var i=Ti();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},i.queue=n,n=n.dispatch=f0.bind(null,Vt,n),[i.memoizedState,n]}function Ho(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function wp(){return Qn().memoizedState}function il(n,i,o,u){var d=Ti();Vt.flags|=n,d.memoizedState=Ho(1|i,o,void 0,u===void 0?null:u)}function rl(n,i,o,u){var d=Qn();u=u===void 0?null:u;var m=void 0;if(Jt!==null){var E=Jt.memoizedState;if(m=E.destroy,u!==null&&Tc(u,E.deps)){d.memoizedState=Ho(i,o,m,u);return}}Vt.flags|=n,d.memoizedState=Ho(1|i,o,m,u)}function Ap(n,i){return il(8390656,8,n,i)}function Pc(n,i){return rl(2048,8,n,i)}function Rp(n,i){return rl(4,2,n,i)}function Cp(n,i){return rl(4,4,n,i)}function Pp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function bp(n,i,o){return o=o!=null?o.concat([n]):null,rl(4,4,Pp.bind(null,i,n),o)}function bc(){}function Lp(n,i){var o=Qn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Tc(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Dp(n,i){var o=Qn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Tc(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Ip(n,i,o){return(Vr&21)===0?(n.baseState&&(n.baseState=!1,Un=!0),n.memoizedState=o):(ai(o,i)||(o=Lt(),Vt.lanes|=o,Gr|=o,n.baseState=!0),i)}function u0(n,i){var o=Mt;Mt=o!==0&&4>o?o:4,n(!0);var u=Ec.transition;Ec.transition={};try{n(!1),i()}finally{Mt=o,Ec.transition=u}}function Up(){return Qn().memoizedState}function c0(n,i,o){var u=xr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Np(n))Fp(i,o);else if(o=dp(n,i,o,u),o!==null){var d=An();di(o,n,u,d),Op(o,i,u)}}function f0(n,i,o){var u=xr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Np(n))Fp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,I=m(E,o);if(d.hasEagerState=!0,d.eagerState=I,ai(I,E)){var B=i.interleaved;B===null?(d.next=d,_c(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}o=dp(n,i,d,u),o!==null&&(d=An(),di(o,n,u,d),Op(o,i,u))}}function Np(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function Fp(n,i){ko=nl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Op(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,sn(n,o)}}var sl={readContext:Zn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},d0={readContext:Zn,useCallback:function(n,i){return Ti().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:Ap,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,il(4194308,4,Pp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return il(4194308,4,n,i)},useInsertionEffect:function(n,i){return il(4,2,n,i)},useMemo:function(n,i){var o=Ti();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Ti();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=c0.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=Ti();return n={current:n},i.memoizedState=n},useState:Tp,useDebugValue:bc,useDeferredValue:function(n){return Ti().memoizedState=n},useTransition:function(){var n=Tp(!1),i=n[0];return n=u0.bind(null,n[1]),Ti().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Vt,d=Ti();if(Bt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),an===null)throw Error(t(349));(Vr&30)!==0||xp(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,Ap(Sp.bind(null,u,m,n),[n]),u.flags|=2048,Ho(9,yp.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=Ti(),i=an.identifierPrefix;if(Bt){var o=Oi,u=Fi;o=(u&~(1<<32-lt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Bo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=l0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},h0={readContext:Zn,useCallback:Lp,useContext:Zn,useEffect:Pc,useImperativeHandle:bp,useInsertionEffect:Rp,useLayoutEffect:Cp,useMemo:Dp,useReducer:Rc,useRef:wp,useState:function(){return Rc(zo)},useDebugValue:bc,useDeferredValue:function(n){var i=Qn();return Ip(i,Jt.memoizedState,n)},useTransition:function(){var n=Rc(zo)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:_p,useSyncExternalStore:vp,useId:Up,unstable_isNewReconciler:!1},p0={readContext:Zn,useCallback:Lp,useContext:Zn,useEffect:Pc,useImperativeHandle:bp,useInsertionEffect:Rp,useLayoutEffect:Cp,useMemo:Dp,useReducer:Cc,useRef:wp,useState:function(){return Cc(zo)},useDebugValue:bc,useDeferredValue:function(n){var i=Qn();return Jt===null?i.memoizedState=n:Ip(i,Jt.memoizedState,n)},useTransition:function(){var n=Cc(zo)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:_p,useSyncExternalStore:vp,useId:Up,unstable_isNewReconciler:!1};function ui(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Lc(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:te({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ol={isMounted:function(n){return(n=n._reactInternals)?yi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=An(),d=xr(n),m=Bi(u,d);m.payload=i,o!=null&&(m.callback=o),i=mr(n,m,d),i!==null&&(di(i,n,d,u),Qa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=An(),d=xr(n),m=Bi(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=mr(n,m,d),i!==null&&(di(i,n,d,u),Qa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=An(),u=xr(n),d=Bi(o,u);d.tag=2,i!=null&&(d.callback=i),i=mr(n,d,u),i!==null&&(di(i,n,u,o),Qa(i,n,u))}};function kp(n,i,o,u,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!Ro(o,u)||!Ro(d,m):!0}function Bp(n,i,o){var u=!1,d=dr,m=i.contextType;return typeof m=="object"&&m!==null?m=Zn(m):(d=In(i)?Or:_n.current,u=i.contextTypes,m=(u=u!=null)?Es(n,d):dr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ol,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function zp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&ol.enqueueReplaceState(i,i.state,null)}function Dc(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},vc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Zn(m):(m=In(i)?Or:_n.current,d.context=Es(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Lc(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ol.enqueueReplaceState(d,d.state,null),Ja(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var o="",u=i;do o+=fe(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Ic(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Uc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var m0=typeof WeakMap=="function"?WeakMap:Map;function Hp(n,i,o){o=Bi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){hl||(hl=!0,$c=u),Uc(n,i)},o}function Vp(n,i,o){o=Bi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Uc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Uc(n,i),typeof u!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function Gp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new m0;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=P0.bind(null,n,i,o),i.then(n,n))}function Wp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Xp(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Bi(-1,1),i.tag=2,mr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var g0=C.ReactCurrentOwner,Un=!1;function wn(n,i,o,u){i.child=n===null?fp(i,null,o,u):Rs(i,n.child,o,u)}function Yp(n,i,o,u,d){o=o.render;var m=i.ref;return Ps(i,d),u=wc(n,i,o,u,m,d),o=Ac(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,zi(n,i,d)):(Bt&&o&&lc(i),i.flags|=1,wn(n,i,u,d),i.child)}function jp(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!nf(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,qp(n,i,m,u,d)):(n=xl(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ro,o(E,u)&&n.ref===i.ref)return zi(n,i,d)}return i.flags|=1,n=Sr(m,u),n.ref=i.ref,n.return=i,i.child=n}function qp(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(Ro(m,u)&&n.ref===i.ref)if(Un=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Un=!0);else return i.lanes=n.lanes,zi(n,i,d)}return Nc(n,i,o,u,d)}function $p(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Is,Xn),Xn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Is,Xn),Xn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,It(Is,Xn),Xn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,It(Is,Xn),Xn|=u;return wn(n,i,d,o),i.child}function Kp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Nc(n,i,o,u,d){var m=In(o)?Or:_n.current;return m=Es(i,m),Ps(i,d),o=wc(n,i,o,u,m,d),u=Ac(),n!==null&&!Un?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,zi(n,i,d)):(Bt&&u&&lc(i),i.flags|=1,wn(n,i,o,d),i.child)}function Zp(n,i,o,u,d){if(In(o)){var m=!0;Wa(i)}else m=!1;if(Ps(i,d),i.stateNode===null)ll(n,i),Bp(i,o,u),Dc(i,o,u,d),u=!0;else if(n===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var B=E.context,re=o.contextType;typeof re=="object"&&re!==null?re=Zn(re):(re=In(o)?Or:_n.current,re=Es(i,re));var xe=o.getDerivedStateFromProps,Me=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";Me||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==u||B!==re)&&zp(i,E,u,re),pr=!1;var ve=i.memoizedState;E.state=ve,Ja(i,u,E,d),B=i.memoizedState,I!==u||ve!==B||Dn.current||pr?(typeof xe=="function"&&(Lc(i,o,xe,u),B=i.memoizedState),(I=pr||kp(i,o,I,u,ve,B,re))?(Me||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),E.props=u,E.state=B,E.context=re,u=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,hp(n,i),I=i.memoizedProps,re=i.type===i.elementType?I:ui(i.type,I),E.props=re,Me=i.pendingProps,ve=E.context,B=o.contextType,typeof B=="object"&&B!==null?B=Zn(B):(B=In(o)?Or:_n.current,B=Es(i,B));var Ne=o.getDerivedStateFromProps;(xe=typeof Ne=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==Me||ve!==B)&&zp(i,E,u,B),pr=!1,ve=i.memoizedState,E.state=ve,Ja(i,u,E,d);var ze=i.memoizedState;I!==Me||ve!==ze||Dn.current||pr?(typeof Ne=="function"&&(Lc(i,o,Ne,u),ze=i.memoizedState),(re=pr||kp(i,o,re,u,ve,ze,B)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,ze,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,ze,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ze),E.props=u,E.state=ze,E.context=B,u=re):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return Fc(n,i,o,u,m,d)}function Fc(n,i,o,u,d,m){Kp(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return d&&np(i,o,!1),zi(n,i,m);u=i.stateNode,g0.current=i;var I=E&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=Rs(i,n.child,null,m),i.child=Rs(i,null,I,m)):wn(n,i,I,m),i.memoizedState=u.state,d&&np(i,o,!0),i.child}function Qp(n){var i=n.stateNode;i.pendingContext?ep(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ep(n,i.context,!1),xc(n,i.containerInfo)}function Jp(n,i,o,u,d){return As(),dc(d),i.flags|=256,wn(n,i,o,u),i.child}var Oc={dehydrated:null,treeContext:null,retryLane:0};function kc(n){return{baseLanes:n,cachePool:null,transitions:null}}function em(n,i,o){var u=i.pendingProps,d=Ht.current,m=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),It(Ht,d&1),n===null)return fc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=yl(E,u,0,null),n=jr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=kc(o),i.memoizedState=Oc,n):Bc(i,E));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return _0(n,i,E,u,I,d,o);if(m){m=u.fallback,E=i.mode,d=n.child,I=d.sibling;var B={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=Sr(d,B),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=Sr(I,m):(m=jr(m,E,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?kc(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~o,i.memoizedState=Oc,u}return m=n.child,n=m.sibling,u=Sr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Bc(n,i){return i=yl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function al(n,i,o,u){return u!==null&&dc(u),Rs(i,n.child,null,o),n=Bc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function _0(n,i,o,u,d,m,E){if(o)return i.flags&256?(i.flags&=-257,u=Ic(Error(t(422))),al(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=yl({mode:"visible",children:u.children},d,0,null),m=jr(m,d,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Rs(i,n.child,null,E),i.child.memoizedState=kc(E),i.memoizedState=Oc,m);if((i.mode&1)===0)return al(n,i,E,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,m=Error(t(419)),u=Ic(m,u,void 0),al(n,i,E,u)}if(I=(E&n.childLanes)!==0,Un||I){if(u=an,u!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,ki(n,d),di(u,n,d,-1))}return tf(),u=Ic(Error(t(421))),al(n,i,E,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=b0.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Wn=cr(d.nextSibling),Gn=i,Bt=!0,li=null,n!==null&&($n[Kn++]=Fi,$n[Kn++]=Oi,$n[Kn++]=kr,Fi=n.id,Oi=n.overflow,kr=i),i=Bc(i,u.children),i.flags|=4096,i)}function tm(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),gc(n.return,i,o)}function zc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function nm(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(wn(n,i,u.children,o),u=Ht.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tm(n,o,i);else if(n.tag===19)tm(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(It(Ht,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&el(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),zc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&el(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}zc(i,!0,o,null,m);break;case"together":zc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ll(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function zi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Gr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Sr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Sr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function v0(n,i,o){switch(i.tag){case 3:Qp(i),As();break;case 5:gp(i);break;case 1:In(i.type)&&Wa(i);break;case 4:xc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;It(Ka,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(Ht,Ht.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?em(n,i,o):(It(Ht,Ht.current&1),n=zi(n,i,o),n!==null?n.sibling:null);It(Ht,Ht.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return nm(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(Ht,Ht.current),u)break;return null;case 22:case 23:return i.lanes=0,$p(n,i,o)}return zi(n,i,o)}var im,Hc,rm,sm;im=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Hc=function(){},rm=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Hr(Ei.current);var m=null;switch(o){case"input":d=O(n,d),u=O(n,u),m=[];break;case"select":d=te({},d,{value:void 0}),u=te({},u,{value:void 0}),m=[];break;case"textarea":d=w(n,d),u=w(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ha)}pt(o,u);var E;o=null;for(re in d)if(!u.hasOwnProperty(re)&&d.hasOwnProperty(re)&&d[re]!=null)if(re==="style"){var I=d[re];for(E in I)I.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?m||(m=[]):(m=m||[]).push(re,null));for(re in u){var B=u[re];if(I=d!=null?d[re]:void 0,u.hasOwnProperty(re)&&B!==I&&(B!=null||I!=null))if(re==="style")if(I){for(E in I)!I.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in B)B.hasOwnProperty(E)&&I[E]!==B[E]&&(o||(o={}),o[E]=B[E])}else o||(m||(m=[]),m.push(re,o)),o=B;else re==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(m=m||[]).push(re,B)):re==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(re,""+B):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(B!=null&&re==="onScroll"&&Nt("scroll",n),m||I===B||(m=[])):(m=m||[]).push(re,B))}o&&(m=m||[]).push("style",o);var re=m;(i.updateQueue=re)&&(i.flags|=4)}},sm=function(n,i,o,u){o!==u&&(i.flags|=4)};function Vo(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function xn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function x0(n,i,o){var u=i.pendingProps;switch(uc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return In(i.type)&&Ga(),xn(i),null;case 3:return u=i.stateNode,bs(),Ft(Dn),Ft(_n),Mc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(qa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,li!==null&&(Qc(li),li=null))),Hc(n,i),xn(i),null;case 5:yc(i);var d=Hr(Oo.current);if(o=i.type,n!==null&&i.stateNode!=null)rm(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return xn(i),null}if(n=Hr(Ei.current),qa(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[Mi]=i,u[Do]=m,n=(i.mode&1)!==0,o){case"dialog":Nt("cancel",u),Nt("close",u);break;case"iframe":case"object":case"embed":Nt("load",u);break;case"video":case"audio":for(d=0;d<Po.length;d++)Nt(Po[d],u);break;case"source":Nt("error",u);break;case"img":case"image":case"link":Nt("error",u),Nt("load",u);break;case"details":Nt("toggle",u);break;case"input":Dt(u,m),Nt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Nt("invalid",u);break;case"textarea":J(u,m),Nt("invalid",u)}pt(o,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var I=m[E];E==="children"?typeof I=="string"?u.textContent!==I&&(m.suppressHydrationWarning!==!0&&za(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&za(u.textContent,I,n),d=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Nt("scroll",u)}switch(o){case"input":it(u),Ye(u,m,!0);break;case"textarea":it(u),ye(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ha)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(o,{is:u.is}):(n=E.createElement(o),o==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,o),n[Mi]=i,n[Do]=u,im(n,i,!1,!1),i.stateNode=n;e:{switch(E=ot(o,u),o){case"dialog":Nt("cancel",n),Nt("close",n),d=u;break;case"iframe":case"object":case"embed":Nt("load",n),d=u;break;case"video":case"audio":for(d=0;d<Po.length;d++)Nt(Po[d],n);d=u;break;case"source":Nt("error",n),d=u;break;case"img":case"image":case"link":Nt("error",n),Nt("load",n),d=u;break;case"details":Nt("toggle",n),d=u;break;case"input":Dt(n,u),d=O(n,u),Nt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=te({},u,{value:void 0}),Nt("invalid",n);break;case"textarea":J(n,u),d=w(n,u),Nt("invalid",n);break;default:d=u}pt(o,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var B=I[m];m==="style"?et(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&$e(n,B)):m==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&qe(n,B):typeof B=="number"&&qe(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?B!=null&&m==="onScroll"&&Nt("scroll",n):B!=null&&L(n,m,B,E))}switch(o){case"input":it(n),Ye(n,u,!1);break;case"textarea":it(n),ye(n);break;case"option":u.value!=null&&n.setAttribute("value",""+_e(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?b(n,!!u.multiple,m,!1):u.defaultValue!=null&&b(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ha)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(n&&i.stateNode!=null)sm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=Hr(Oo.current),Hr(Ei.current),qa(i)){if(u=i.stateNode,o=i.memoizedProps,u[Mi]=i,(m=u.nodeValue!==o)&&(n=Gn,n!==null))switch(n.tag){case 3:za(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&za(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Mi]=i,i.stateNode=u}return xn(i),null;case 13:if(Ft(Ht),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Wn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)lp(),As(),i.flags|=98560,m=!1;else if(m=qa(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Mi]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),m=!1}else li!==null&&(Qc(li),li=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?en===0&&(en=3):tf())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return bs(),Hc(n,i),n===null&&bo(i.stateNode.containerInfo),xn(i),null;case 10:return mc(i.type._context),xn(i),null;case 17:return In(i.type)&&Ga(),xn(i),null;case 19:if(Ft(Ht),m=i.memoizedState,m===null)return xn(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)Vo(m,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=el(n),E!==null){for(i.flags|=128,Vo(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return It(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&Z()>Us&&(i.flags|=128,u=!0,Vo(m,!1),i.lanes=4194304)}else{if(!u)if(n=el(E),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Vo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Bt)return xn(i),null}else 2*Z()-m.renderingStartTime>Us&&o!==1073741824&&(i.flags|=128,u=!0,Vo(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(o=m.last,o!==null?o.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Z(),i.sibling=null,o=Ht.current,It(Ht,u?o&1|2:o&1),i):(xn(i),null);case 22:case 23:return ef(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Xn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function y0(n,i){switch(uc(i),i.tag){case 1:return In(i.type)&&Ga(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return bs(),Ft(Dn),Ft(_n),Mc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return yc(i),null;case 13:if(Ft(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));As()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(Ht),null;case 4:return bs(),null;case 10:return mc(i.type._context),null;case 22:case 23:return ef(),null;case 24:return null;default:return null}}var ul=!1,yn=!1,S0=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Ds(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Xt(n,i,u)}else o.current=null}function Vc(n,i,o){try{o()}catch(u){Xt(n,i,u)}}var om=!1;function M0(n,i){if(ec=Pa,n=kh(),Yu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,I=-1,B=-1,re=0,xe=0,Me=n,ve=null;t:for(;;){for(var Ne;Me!==o||d!==0&&Me.nodeType!==3||(I=E+d),Me!==m||u!==0&&Me.nodeType!==3||(B=E+u),Me.nodeType===3&&(E+=Me.nodeValue.length),(Ne=Me.firstChild)!==null;)ve=Me,Me=Ne;for(;;){if(Me===n)break t;if(ve===o&&++re===d&&(I=E),ve===m&&++xe===u&&(B=E),(Ne=Me.nextSibling)!==null)break;Me=ve,ve=Me.parentNode}Me=Ne}o=I===-1||B===-1?null:{start:I,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(tc={focusedElem:n,selectionRange:o},Pa=!1,Fe=i;Fe!==null;)if(i=Fe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Fe=n;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,qt=ze.memoizedState,K=i.stateNode,V=K.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ui(i.type,Ve),qt);K.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Xt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Fe=n;break}Fe=i.return}return ze=om,om=!1,ze}function Go(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Vc(i,o,m)}d=d.next}while(d!==u)}}function cl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Gc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function am(n){var i=n.alternate;i!==null&&(n.alternate=null,am(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mi],delete i[Do],delete i[sc],delete i[r0],delete i[s0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lm(n){return n.tag===5||n.tag===3||n.tag===4}function um(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ha));else if(u!==4&&(n=n.child,n!==null))for(Wc(n,i,o),n=n.sibling;n!==null;)Wc(n,i,o),n=n.sibling}function Xc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Xc(n,i,o),n=n.sibling;n!==null;)Xc(n,i,o),n=n.sibling}var hn=null,ci=!1;function gr(n,i,o){for(o=o.child;o!==null;)cm(n,i,o),o=o.sibling}function cm(n,i,o){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,o)}catch{}switch(o.tag){case 5:yn||Ds(o,i);case 6:var u=hn,d=ci;hn=null,gr(n,i,o),hn=u,ci=d,hn!==null&&(ci?(n=hn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):hn.removeChild(o.stateNode));break;case 18:hn!==null&&(ci?(n=hn,o=o.stateNode,n.nodeType===8?rc(n.parentNode,o):n.nodeType===1&&rc(n,o),So(n)):rc(hn,o.stateNode));break;case 4:u=hn,d=ci,hn=o.stateNode.containerInfo,ci=!0,gr(n,i,o),hn=u,ci=d;break;case 0:case 11:case 14:case 15:if(!yn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&Vc(o,i,E),d=d.next}while(d!==u)}gr(n,i,o);break;case 1:if(!yn&&(Ds(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){Xt(o,i,I)}gr(n,i,o);break;case 21:gr(n,i,o);break;case 22:o.mode&1?(yn=(u=yn)||o.memoizedState!==null,gr(n,i,o),yn=u):gr(n,i,o);break;default:gr(n,i,o)}}function fm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new S0),i.forEach(function(u){var d=L0.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function fi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:hn=I.stateNode,ci=!1;break e;case 3:hn=I.stateNode.containerInfo,ci=!0;break e;case 4:hn=I.stateNode.containerInfo,ci=!0;break e}I=I.return}if(hn===null)throw Error(t(160));cm(m,E,d),hn=null,ci=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(re){Xt(d,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dm(i,n),i=i.sibling}function dm(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(i,n),wi(n),u&4){try{Go(3,n,n.return),cl(3,n)}catch(Ve){Xt(n,n.return,Ve)}try{Go(5,n,n.return)}catch(Ve){Xt(n,n.return,Ve)}}break;case 1:fi(i,n),wi(n),u&512&&o!==null&&Ds(o,o.return);break;case 5:if(fi(i,n),wi(n),u&512&&o!==null&&Ds(o,o.return),n.flags&32){var d=n.stateNode;try{qe(d,"")}catch(Ve){Xt(n,n.return,Ve)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=o!==null?o.memoizedProps:m,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&dt(d,m),ot(I,E);var re=ot(I,m);for(E=0;E<B.length;E+=2){var xe=B[E],Me=B[E+1];xe==="style"?et(d,Me):xe==="dangerouslySetInnerHTML"?$e(d,Me):xe==="children"?qe(d,Me):L(d,xe,Me,re)}switch(I){case"input":ht(d,m);break;case"textarea":me(d,m);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ne=m.value;Ne!=null?b(d,!!m.multiple,Ne,!1):ve!==!!m.multiple&&(m.defaultValue!=null?b(d,!!m.multiple,m.defaultValue,!0):b(d,!!m.multiple,m.multiple?[]:"",!1))}d[Do]=m}catch(Ve){Xt(n,n.return,Ve)}}break;case 6:if(fi(i,n),wi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ve){Xt(n,n.return,Ve)}}break;case 3:if(fi(i,n),wi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{So(i.containerInfo)}catch(Ve){Xt(n,n.return,Ve)}break;case 4:fi(i,n),wi(n);break;case 13:fi(i,n),wi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(qc=Z())),u&4&&fm(n);break;case 22:if(xe=o!==null&&o.memoizedState!==null,n.mode&1?(yn=(re=yn)||xe,fi(i,n),yn=re):fi(i,n),wi(n),u&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!xe&&(n.mode&1)!==0)for(Fe=n,xe=n.child;xe!==null;){for(Me=Fe=xe;Fe!==null;){switch(ve=Fe,Ne=ve.child,ve.tag){case 0:case 11:case 14:case 15:Go(4,ve,ve.return);break;case 1:Ds(ve,ve.return);var ze=ve.stateNode;if(typeof ze.componentWillUnmount=="function"){u=ve,o=ve.return;try{i=u,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Xt(u,o,Ve)}}break;case 5:Ds(ve,ve.return);break;case 22:if(ve.memoizedState!==null){mm(Me);continue}}Ne!==null?(Ne.return=ve,Fe=Ne):mm(Me)}xe=xe.sibling}e:for(xe=null,Me=n;;){if(Me.tag===5){if(xe===null){xe=Me;try{d=Me.stateNode,re?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Me.stateNode,B=Me.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=Je("display",E))}catch(Ve){Xt(n,n.return,Ve)}}}else if(Me.tag===6){if(xe===null)try{Me.stateNode.nodeValue=re?"":Me.memoizedProps}catch(Ve){Xt(n,n.return,Ve)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;xe===Me&&(xe=null),Me=Me.return}xe===Me&&(xe=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:fi(i,n),wi(n),u&4&&fm(n);break;case 21:break;default:fi(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(lm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(qe(d,""),u.flags&=-33);var m=um(n);Xc(n,m,d);break;case 3:case 4:var E=u.stateNode.containerInfo,I=um(n);Wc(n,I,E);break;default:throw Error(t(161))}}catch(B){Xt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function E0(n,i,o){Fe=n,hm(n)}function hm(n,i,o){for(var u=(n.mode&1)!==0;Fe!==null;){var d=Fe,m=d.child;if(d.tag===22&&u){var E=d.memoizedState!==null||ul;if(!E){var I=d.alternate,B=I!==null&&I.memoizedState!==null||yn;I=ul;var re=yn;if(ul=E,(yn=B)&&!re)for(Fe=d;Fe!==null;)E=Fe,B=E.child,E.tag===22&&E.memoizedState!==null?gm(d):B!==null?(B.return=E,Fe=B):gm(d);for(;m!==null;)Fe=m,hm(m),m=m.sibling;Fe=d,ul=I,yn=re}pm(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Fe=m):pm(n)}}function pm(n){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||cl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!yn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ui(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&mp(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}mp(i,E,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var xe=re.memoizedState;if(xe!==null){var Me=xe.dehydrated;Me!==null&&So(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||i.flags&512&&Gc(i)}catch(ve){Xt(i,i.return,ve)}}if(i===n){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function mm(n){for(;Fe!==null;){var i=Fe;if(i===n){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function gm(n){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{cl(4,i)}catch(B){Xt(i,o,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(B){Xt(i,d,B)}}var m=i.return;try{Gc(i)}catch(B){Xt(i,m,B)}break;case 5:var E=i.return;try{Gc(i)}catch(B){Xt(i,E,B)}}}catch(B){Xt(i,i.return,B)}if(i===n){Fe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Fe=I;break}Fe=i.return}}var T0=Math.ceil,fl=C.ReactCurrentDispatcher,Yc=C.ReactCurrentOwner,Jn=C.ReactCurrentBatchConfig,Et=0,an=null,$t=null,pn=0,Xn=0,Is=fr(0),en=0,Wo=null,Gr=0,dl=0,jc=0,Xo=null,Nn=null,qc=0,Us=1/0,Hi=null,hl=!1,$c=null,_r=null,pl=!1,vr=null,ml=0,Yo=0,Kc=null,gl=-1,_l=0;function An(){return(Et&6)!==0?Z():gl!==-1?gl:gl=Z()}function xr(n){return(n.mode&1)===0?1:(Et&2)!==0&&pn!==0?pn&-pn:a0.transition!==null?(_l===0&&(_l=Lt()),_l):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:vh(n.type)),n)}function di(n,i,o,u){if(50<Yo)throw Yo=0,Kc=null,Error(t(185));rn(n,o,u),((Et&2)===0||n!==an)&&(n===an&&((Et&2)===0&&(dl|=o),en===4&&yr(n,pn)),Fn(n,u),o===1&&Et===0&&(i.mode&1)===0&&(Us=Z()+500,Xa&&hr()))}function Fn(n,i){var o=n.callbackNode;Tn(n,i);var u=mn(n,n===an?pn:0);if(u===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?o0(vm.bind(null,n)):ip(vm.bind(null,n)),n0(function(){(Et&6)===0&&hr()}),o=null;else{switch(Si(u)){case 1:o=Ee;break;case 4:o=Pe;break;case 16:o=Ue;break;case 536870912:o=tt;break;default:o=Ue}o=Am(o,_m.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function _m(n,i){if(gl=-1,_l=0,(Et&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ns()&&n.callbackNode!==o)return null;var u=mn(n,n===an?pn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=vl(n,u);else{i=u;var d=Et;Et|=2;var m=ym();(an!==n||pn!==i)&&(Hi=null,Us=Z()+500,Xr(n,i));do try{R0();break}catch(I){xm(n,I)}while(!0);pc(),fl.current=m,Et=d,$t!==null?i=0:(an=null,pn=0,i=en)}if(i!==0){if(i===2&&(d=Ii(n),d!==0&&(u=d,i=Zc(n,d))),i===1)throw o=Wo,Xr(n,0),yr(n,u),Fn(n,Z()),o;if(i===6)yr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!w0(d)&&(i=vl(n,u),i===2&&(m=Ii(n),m!==0&&(u=m,i=Zc(n,m))),i===1))throw o=Wo,Xr(n,0),yr(n,u),Fn(n,Z()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,Nn,Hi);break;case 3:if(yr(n,u),(u&130023424)===u&&(i=qc+500-Z(),10<i)){if(mn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){An(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=ic(Yr.bind(null,n,Nn,Hi),i);break}Yr(n,Nn,Hi);break;case 4:if(yr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var E=31-lt(u);m=1<<E,E=i[E],E>d&&(d=E),u&=~m}if(u=d,u=Z()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*T0(u/1960))-u,10<u){n.timeoutHandle=ic(Yr.bind(null,n,Nn,Hi),u);break}Yr(n,Nn,Hi);break;case 5:Yr(n,Nn,Hi);break;default:throw Error(t(329))}}}return Fn(n,Z()),n.callbackNode===o?_m.bind(null,n):null}function Zc(n,i){var o=Xo;return n.current.memoizedState.isDehydrated&&(Xr(n,i).flags|=256),n=vl(n,i),n!==2&&(i=Nn,Nn=o,i!==null&&Qc(i)),n}function Qc(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function w0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!ai(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(n,i){for(i&=~jc,i&=~dl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-lt(i),u=1<<o;n[o]=-1,i&=~u}}function vm(n){if((Et&6)!==0)throw Error(t(327));Ns();var i=mn(n,0);if((i&1)===0)return Fn(n,Z()),null;var o=vl(n,i);if(n.tag!==0&&o===2){var u=Ii(n);u!==0&&(i=u,o=Zc(n,u))}if(o===1)throw o=Wo,Xr(n,0),yr(n,i),Fn(n,Z()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,Nn,Hi),Fn(n,Z()),null}function Jc(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(Us=Z()+500,Xa&&hr())}}function Wr(n){vr!==null&&vr.tag===0&&(Et&6)===0&&Ns();var i=Et;Et|=1;var o=Jn.transition,u=Mt;try{if(Jn.transition=null,Mt=1,n)return n()}finally{Mt=u,Jn.transition=o,Et=i,(Et&6)===0&&hr()}}function ef(){Xn=Is.current,Ft(Is)}function Xr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,t0(o)),$t!==null)for(o=$t.return;o!==null;){var u=o;switch(uc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ga();break;case 3:bs(),Ft(Dn),Ft(_n),Mc();break;case 5:yc(u);break;case 4:bs();break;case 13:Ft(Ht);break;case 19:Ft(Ht);break;case 10:mc(u.type._context);break;case 22:case 23:ef()}o=o.return}if(an=n,$t=n=Sr(n.current,null),pn=Xn=i,en=0,Wo=null,jc=dl=Gr=0,Nn=Xo=null,zr!==null){for(i=0;i<zr.length;i++)if(o=zr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var E=m.next;m.next=d,u.next=E}o.pending=u}zr=null}return n}function xm(n,i){do{var o=$t;try{if(pc(),tl.current=sl,nl){for(var u=Vt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}nl=!1}if(Vr=0,on=Jt=Vt=null,ko=!1,Bo=0,Yc.current=null,o===null||o.return===null){en=1,Wo=i,$t=null;break}e:{var m=n,E=o.return,I=o,B=i;if(i=pn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var re=B,xe=I,Me=xe.tag;if((xe.mode&1)===0&&(Me===0||Me===11||Me===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ne=Wp(E);if(Ne!==null){Ne.flags&=-257,Xp(Ne,E,I,m,i),Ne.mode&1&&Gp(m,re,i),i=Ne,B=re;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(B),i.updateQueue=Ve}else ze.add(B);break e}else{if((i&1)===0){Gp(m,re,i),tf();break e}B=Error(t(426))}}else if(Bt&&I.mode&1){var qt=Wp(E);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),Xp(qt,E,I,m,i),dc(Ls(B,I));break e}}m=B=Ls(B,I),en!==4&&(en=2),Xo===null?Xo=[m]:Xo.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var K=Hp(m,B,i);pp(m,K);break e;case 1:I=B;var V=m.type,Q=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(_r===null||!_r.has(Q)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=Vp(m,I,i);pp(m,Te);break e}}m=m.return}while(m!==null)}Mm(o)}catch(Xe){i=Xe,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function ym(){var n=fl.current;return fl.current=sl,n===null?sl:n}function tf(){(en===0||en===3||en===2)&&(en=4),an===null||(Gr&268435455)===0&&(dl&268435455)===0||yr(an,pn)}function vl(n,i){var o=Et;Et|=2;var u=ym();(an!==n||pn!==i)&&(Hi=null,Xr(n,i));do try{A0();break}catch(d){xm(n,d)}while(!0);if(pc(),Et=o,fl.current=u,$t!==null)throw Error(t(261));return an=null,pn=0,en}function A0(){for(;$t!==null;)Sm($t)}function R0(){for(;$t!==null&&!Y();)Sm($t)}function Sm(n){var i=wm(n.alternate,n,Xn);n.memoizedProps=n.pendingProps,i===null?Mm(n):$t=i,Yc.current=null}function Mm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=x0(o,i,Xn),o!==null){$t=o;return}}else{if(o=y0(o,i),o!==null){o.flags&=32767,$t=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);en===0&&(en=5)}function Yr(n,i,o){var u=Mt,d=Jn.transition;try{Jn.transition=null,Mt=1,C0(n,i,o,u)}finally{Jn.transition=d,Mt=u}return null}function C0(n,i,o,u){do Ns();while(vr!==null);if((Et&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(dn(n,m),n===an&&($t=an=null,pn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||pl||(pl=!0,Am(Ue,function(){return Ns(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=Jn.transition,Jn.transition=null;var E=Mt;Mt=1;var I=Et;Et|=4,Yc.current=null,M0(n,o),dm(o,n),qv(tc),Pa=!!ec,tc=ec=null,n.current=o,E0(o),se(),Et=I,Mt=E,Jn.transition=m}else n.current=o;if(pl&&(pl=!1,vr=n,ml=d),m=n.pendingLanes,m===0&&(_r=null),xt(o.stateNode),Fn(n,Z()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(hl)throw hl=!1,n=$c,$c=null,n;return(ml&1)!==0&&n.tag!==0&&Ns(),m=n.pendingLanes,(m&1)!==0?n===Kc?Yo++:(Yo=0,Kc=n):Yo=0,hr(),null}function Ns(){if(vr!==null){var n=Si(ml),i=Jn.transition,o=Mt;try{if(Jn.transition=null,Mt=16>n?16:n,vr===null)var u=!1;else{if(n=vr,vr=null,ml=0,(Et&6)!==0)throw Error(t(331));var d=Et;for(Et|=4,Fe=n.current;Fe!==null;){var m=Fe,E=m.child;if((Fe.flags&16)!==0){var I=m.deletions;if(I!==null){for(var B=0;B<I.length;B++){var re=I[B];for(Fe=re;Fe!==null;){var xe=Fe;switch(xe.tag){case 0:case 11:case 15:Go(8,xe,m)}var Me=xe.child;if(Me!==null)Me.return=xe,Fe=Me;else for(;Fe!==null;){xe=Fe;var ve=xe.sibling,Ne=xe.return;if(am(xe),xe===re){Fe=null;break}if(ve!==null){ve.return=Ne,Fe=ve;break}Fe=Ne}}}var ze=m.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var qt=Ve.sibling;Ve.sibling=null,Ve=qt}while(Ve!==null)}}Fe=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Fe=E;else e:for(;Fe!==null;){if(m=Fe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Go(9,m,m.return)}var K=m.sibling;if(K!==null){K.return=m.return,Fe=K;break e}Fe=m.return}}var V=n.current;for(Fe=V;Fe!==null;){E=Fe;var Q=E.child;if((E.subtreeFlags&2064)!==0&&Q!==null)Q.return=E,Fe=Q;else e:for(E=V;Fe!==null;){if(I=Fe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:cl(9,I)}}catch(Xe){Xt(I,I.return,Xe)}if(I===E){Fe=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Fe=Te;break e}Fe=I.return}}if(Et=d,hr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,n)}catch{}u=!0}return u}finally{Mt=o,Jn.transition=i}}return!1}function Em(n,i,o){i=Ls(o,i),i=Hp(n,i,1),n=mr(n,i,1),i=An(),n!==null&&(rn(n,1,i),Fn(n,i))}function Xt(n,i,o){if(n.tag===3)Em(n,n,o);else for(;i!==null;){if(i.tag===3){Em(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(_r===null||!_r.has(u))){n=Ls(o,n),n=Vp(i,n,1),i=mr(i,n,1),n=An(),i!==null&&(rn(i,1,n),Fn(i,n));break}}i=i.return}}function P0(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=An(),n.pingedLanes|=n.suspendedLanes&o,an===n&&(pn&o)===o&&(en===4||en===3&&(pn&130023424)===pn&&500>Z()-qc?Xr(n,0):jc|=o),Fn(n,i)}function Tm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Wt,Wt<<=1,(Wt&130023424)===0&&(Wt=4194304)));var o=An();n=ki(n,i),n!==null&&(rn(n,i,o),Fn(n,o))}function b0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Tm(n,o)}function L0(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Tm(n,o)}var wm;wm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Dn.current)Un=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Un=!1,v0(n,i,o);Un=(n.flags&131072)!==0}else Un=!1,Bt&&(i.flags&1048576)!==0&&rp(i,ja,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ll(n,i),n=i.pendingProps;var d=Es(i,_n.current);Ps(i,o),d=wc(null,i,u,n,d,o);var m=Ac();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,In(u)?(m=!0,Wa(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,vc(i),d.updater=ol,i.stateNode=d,d._reactInternals=i,Dc(i,u,n,o),i=Fc(null,i,u,!0,m,o)):(i.tag=0,Bt&&m&&lc(i),wn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ll(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=I0(u),n=ui(u,n),d){case 0:i=Nc(null,i,u,n,o);break e;case 1:i=Zp(null,i,u,n,o);break e;case 11:i=Yp(null,i,u,n,o);break e;case 14:i=jp(null,i,u,ui(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ui(u,d),Nc(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ui(u,d),Zp(n,i,u,d,o);case 3:e:{if(Qp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,hp(n,i),Ja(i,u,null,o);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ls(Error(t(423)),i),i=Jp(n,i,u,o,d);break e}else if(u!==d){d=Ls(Error(t(424)),i),i=Jp(n,i,u,o,d);break e}else for(Wn=cr(i.stateNode.containerInfo.firstChild),Gn=i,Bt=!0,li=null,o=fp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(As(),u===d){i=zi(n,i,o);break e}wn(n,i,u,o)}i=i.child}return i;case 5:return gp(i),n===null&&fc(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,nc(u,d)?E=null:m!==null&&nc(u,m)&&(i.flags|=32),Kp(n,i),wn(n,i,E,o),i.child;case 6:return n===null&&fc(i),null;case 13:return em(n,i,o);case 4:return xc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Rs(i,null,u,o):wn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ui(u,d),Yp(n,i,u,d,o);case 7:return wn(n,i,i.pendingProps,o),i.child;case 8:return wn(n,i,i.pendingProps.children,o),i.child;case 12:return wn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,It(Ka,u._currentValue),u._currentValue=E,m!==null)if(ai(m.value,E)){if(m.children===d.children&&!Dn.current){i=zi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){E=m.child;for(var B=I.firstContext;B!==null;){if(B.context===u){if(m.tag===1){B=Bi(-1,o&-o),B.tag=2;var re=m.updateQueue;if(re!==null){re=re.shared;var xe=re.pending;xe===null?B.next=B:(B.next=xe.next,xe.next=B),re.pending=B}}m.lanes|=o,B=m.alternate,B!==null&&(B.lanes|=o),gc(m.return,o,i),I.lanes|=o;break}B=B.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=o,I=E.alternate,I!==null&&(I.lanes|=o),gc(E,o,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}wn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Ps(i,o),d=Zn(d),u=u(d),i.flags|=1,wn(n,i,u,o),i.child;case 14:return u=i.type,d=ui(u,i.pendingProps),d=ui(u.type,d),jp(n,i,u,d,o);case 15:return qp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ui(u,d),ll(n,i),i.tag=1,In(u)?(n=!0,Wa(i)):n=!1,Ps(i,o),Bp(i,u,d),Dc(i,u,d,o),Fc(null,i,u,!0,n,o);case 19:return nm(n,i,o);case 22:return $p(n,i,o)}throw Error(t(156,i.tag))};function Am(n,i){return Aa(n,i)}function D0(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,i,o,u){return new D0(n,i,o,u)}function nf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function I0(n){if(typeof n=="function")return nf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===de)return 11;if(n===ce)return 14}return 2}function Sr(n,i){var o=n.alternate;return o===null?(o=ei(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function xl(n,i,o,u,d,m){var E=2;if(u=n,typeof n=="function")nf(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case U:return jr(o.children,d,m,i);case X:E=8,d|=8;break;case P:return n=ei(12,o,i,d|2),n.elementType=P,n.lanes=m,n;case W:return n=ei(13,o,i,d),n.elementType=W,n.lanes=m,n;case le:return n=ei(19,o,i,d),n.elementType=le,n.lanes=m,n;case ae:return yl(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case H:E=9;break e;case de:E=11;break e;case ce:E=14;break e;case oe:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ei(E,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function jr(n,i,o,u){return n=ei(7,n,u,i),n.lanes=o,n}function yl(n,i,o,u){return n=ei(22,n,u,i),n.elementType=ae,n.lanes=o,n.stateNode={isHidden:!1},n}function rf(n,i,o){return n=ei(6,n,null,i),n.lanes=o,n}function sf(n,i,o){return i=ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function U0(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function of(n,i,o,u,d,m,E,I,B){return n=new U0(n,i,o,I,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ei(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},vc(m),n}function N0(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Rm(n){if(!n)return dr;n=n._reactInternals;e:{if(yi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(In(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(In(o))return tp(n,o,i)}return i}function Cm(n,i,o,u,d,m,E,I,B){return n=of(o,u,!0,n,d,m,E,I,B),n.context=Rm(null),o=n.current,u=An(),d=xr(o),m=Bi(u,d),m.callback=i??null,mr(o,m,d),n.current.lanes=d,rn(n,d,u),Fn(n,u),n}function Sl(n,i,o,u){var d=i.current,m=An(),E=xr(d);return o=Rm(o),i.context===null?i.context=o:i.pendingContext=o,i=Bi(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=mr(d,i,E),n!==null&&(di(n,d,E,m),Qa(n,d,E)),E}function Ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function af(n,i){Pm(n,i),(n=n.alternate)&&Pm(n,i)}function F0(){return null}var bm=typeof reportError=="function"?reportError:function(n){console.error(n)};function lf(n){this._internalRoot=n}El.prototype.render=lf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Sl(n,i,null,null)},El.prototype.unmount=lf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Wr(function(){Sl(null,n,null,null)}),i[Ui]=null}};function El(n){this._internalRoot=n}El.prototype.unstable_scheduleHydration=function(n){if(n){var i=hh();n={blockedOn:null,target:n,priority:i};for(var o=0;o<ar.length&&i!==0&&i<ar[o].priority;o++);ar.splice(o,0,n),o===0&&gh(n)}};function uf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Lm(){}function O0(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var re=Ml(E);m.call(re)}}var E=Cm(i,u,n,0,null,!1,!1,"",Lm);return n._reactRootContainer=E,n[Ui]=E.current,bo(n.nodeType===8?n.parentNode:n),Wr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var re=Ml(B);I.call(re)}}var B=of(n,0,!1,null,null,!1,!1,"",Lm);return n._reactRootContainer=B,n[Ui]=B.current,bo(n.nodeType===8?n.parentNode:n),Wr(function(){Sl(i,B,o,u)}),B}function wl(n,i,o,u,d){var m=o._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var I=d;d=function(){var B=Ml(E);I.call(B)}}Sl(i,E,n,d)}else E=O0(o,i,n,d,u);return Ml(E)}fh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=gt(i.pendingLanes);o!==0&&(sn(i,o|1),Fn(i,Z()),(Et&6)===0&&(Us=Z()+500,hr()))}break;case 13:Wr(function(){var u=ki(n,1);if(u!==null){var d=An();di(u,n,1,d)}}),af(n,1)}},Iu=function(n){if(n.tag===13){var i=ki(n,134217728);if(i!==null){var o=An();di(i,n,134217728,o)}af(n,134217728)}},dh=function(n){if(n.tag===13){var i=xr(n),o=ki(n,i);if(o!==null){var u=An();di(o,n,i,u)}af(n,i)}},hh=function(){return Mt},ph=function(n,i){var o=Mt;try{return Mt=n,i()}finally{Mt=o}},Ce=function(n,i,o){switch(i){case"input":if(ht(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Va(u);if(!d)throw Error(t(90));rt(u),ht(u,d)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&b(n,!!o.multiple,i,!1)}},Ut=Jc,Qt=Wr;var k0={usingClientEntryPoint:!1,Events:[Io,Ss,Va,Le,at,Jc]},jo={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B0={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ta(n),n===null?null:n.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||F0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Qe=Al.inject(B0),He=Al}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k0,On.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uf(i))throw Error(t(200));return N0(n,i,null,o)},On.createRoot=function(n,i){if(!uf(n))throw Error(t(299));var o=!1,u="",d=bm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=of(n,1,!1,null,null,o,!1,u,d),n[Ui]=i.current,bo(n.nodeType===8?n.parentNode:n),new lf(i)},On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ta(i),n=n===null?null:n.stateNode,n},On.flushSync=function(n){return Wr(n)},On.hydrate=function(n,i,o){if(!Tl(i))throw Error(t(200));return wl(null,n,i,!0,o)},On.hydrateRoot=function(n,i,o){if(!uf(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",E=bm;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=Cm(i,null,n,1,o??null,d,!1,m,E),n[Ui]=i.current,bo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new El(i)},On.render=function(n,i,o){if(!Tl(i))throw Error(t(200));return wl(null,n,i,!1,o)},On.unmountComponentAtNode=function(n){if(!Tl(n))throw Error(t(40));return n._reactRootContainer?(Wr(function(){wl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ui]=null})}),!0):!1},On.unstable_batchedUpdates=Jc,On.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!Tl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return wl(n,i,o,!1,u)},On.version="18.3.1-next-f1338f8080-20240426",On}var Bm;function q0(){if(Bm)return df.exports;Bm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),df.exports=j0(),df.exports}var zm;function $0(){if(zm)return Rl;zm=1;var r=q0();return Rl.createRoot=r.createRoot,Rl.hydrateRoot=r.hydrateRoot,Rl}var K0=$0(),Pn=Wd();const oa=H0(Pn);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xd="176",Z0=0,Hm=1,Q0=2,f_=1,J0=2,ji=3,Ir=0,Bn=1,$i=2,Lr=0,eo=1,Vm=2,Gm=3,Wm=4,ex=5,ns=100,tx=101,nx=102,ix=103,rx=104,sx=200,ox=201,ax=202,lx=203,$f=204,Kf=205,ux=206,cx=207,fx=208,dx=209,hx=210,px=211,mx=212,gx=213,_x=214,Zf=0,Qf=1,Jf=2,no=3,ed=4,td=5,nd=6,id=7,Yd=0,vx=1,xx=2,Dr=0,yx=1,Sx=2,Mx=3,Ex=4,Tx=5,wx=6,Ax=7,d_=300,io=301,ro=302,rd=303,sd=304,Eu=306,od=1e3,rs=1001,ad=1002,vi=1003,Rx=1004,Cl=1005,Ci=1006,mf=1007,ss=1008,Pi=1009,h_=1010,p_=1011,aa=1012,jd=1013,us=1014,Ki=1015,pa=1016,qd=1017,$d=1018,la=1020,m_=35902,g_=1021,__=1022,_i=1023,ua=1026,ca=1027,v_=1028,Kd=1029,x_=1030,Zd=1031,Qd=1033,tu=33776,nu=33777,iu=33778,ru=33779,ld=35840,ud=35841,cd=35842,fd=35843,dd=36196,hd=37492,pd=37496,md=37808,gd=37809,_d=37810,vd=37811,xd=37812,yd=37813,Sd=37814,Md=37815,Ed=37816,Td=37817,wd=37818,Ad=37819,Rd=37820,Cd=37821,su=36492,Pd=36494,bd=36495,y_=36283,Ld=36284,Dd=36285,Id=36286,Cx=3200,Px=3201,S_=0,bx=1,br="",ni="srgb",so="srgb-linear",hu="linear",bt="srgb",Fs=7680,Xm=519,Lx=512,Dx=513,Ix=514,M_=515,Ux=516,Nx=517,Fx=518,Ox=519,Ym=35044,jm="300 es",Zi=2e3,pu=2001;class ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qm=1234567;const ia=Math.PI/180,fa=180/Math.PI;function po(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function Jd(r,e){return(r%e+e)%e}function kx(r,e,t,s,a){return s+(r-e)*(a-s)/(t-e)}function Bx(r,e,t){return r!==e?(t-r)/(e-r):0}function ra(r,e,t){return(1-t)*r+t*e}function zx(r,e,t,s){return ra(r,e,1-Math.exp(-t*s))}function Hx(r,e=1){return e-Math.abs(Jd(r,e*2)-e)}function Vx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Gx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Wx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Xx(r,e){return r+Math.random()*(e-r)}function Yx(r){return r*(.5-Math.random())}function jx(r){r!==void 0&&(qm=r);let e=qm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qx(r){return r*ia}function $x(r){return r*fa}function Kx(r){return(r&r-1)===0&&r!==0}function Zx(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Qx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Jx(r,e,t,s,a){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+s)/2),g=c((e+s)/2),v=l((e-s)/2),x=c((e-s)/2),S=l((s-e)/2),M=c((s-e)/2);switch(a){case"XYX":r.set(f*g,h*v,h*x,f*p);break;case"YZY":r.set(h*x,f*g,h*v,f*p);break;case"ZXZ":r.set(h*v,h*x,f*g,f*p);break;case"XZX":r.set(f*g,h*M,h*S,f*p);break;case"YXY":r.set(h*S,f*g,h*M,f*p);break;case"ZYZ":r.set(h*M,h*S,f*g,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Zs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const $m={DEG2RAD:ia,RAD2DEG:fa,generateUUID:po,clamp:_t,euclideanModulo:Jd,mapLinear:kx,inverseLerp:Bx,lerp:ra,damp:zx,pingpong:Hx,smoothstep:Vx,smootherstep:Gx,randInt:Wx,randFloat:Xx,randFloatSpread:Yx,seededRandom:jx,degToRad:qx,radToDeg:$x,isPowerOfTwo:Kx,ceilPowerOfTwo:Zx,floorPowerOfTwo:Qx,setQuaternionFromProperEuler:Jx,normalize:Rn,denormalize:Zs};class Ct{constructor(e=0,t=0){Ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,s,a,l,c,f,h,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,h,p)}set(e,t,s,a,l,c,f,h,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],h=s[6],p=s[1],g=s[4],v=s[7],x=s[2],S=s[5],M=s[8],T=a[0],y=a[3],_=a[6],D=a[1],L=a[4],C=a[7],z=a[2],F=a[5],U=a[8];return l[0]=c*T+f*D+h*z,l[3]=c*y+f*L+h*F,l[6]=c*_+f*C+h*U,l[1]=p*T+g*D+v*z,l[4]=p*y+g*L+v*F,l[7]=p*_+g*C+v*U,l[2]=x*T+S*D+M*z,l[5]=x*y+S*L+M*F,l[8]=x*_+S*C+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-s*l*g+s*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=g*c-f*p,x=f*h-g*l,S=p*l-c*h,M=t*v+s*x+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(a*p-g*s)*T,e[2]=(f*s-a*c)*T,e[3]=x*T,e[4]=(g*t-a*h)*T,e[5]=(a*l-f*t)*T,e[6]=S*T,e[7]=(s*h-p*t)*T,e[8]=(c*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(gf.makeScale(e,t)),this}rotate(e){return this.premultiply(gf.makeRotation(-e)),this}translate(e,t){return this.premultiply(gf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gf=new ut;function E_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function da(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ey(){const r=da("canvas");return r.style.display="block",r}const Km={};function ou(r){r in Km||(Km[r]=!0,console.warn(r))}function ty(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function ny(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function iy(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Zm=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ry(){const r={enabled:!0,workingColorSpace:so,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===bt&&(a.r=Qi(a.r),a.g=Qi(a.g),a.b=Qi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===bt&&(a.r=to(a.r),a.g=to(a.g),a.b=to(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===br?hu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[so]:{primaries:e,whitePoint:s,transfer:hu,toXYZ:Zm,fromXYZ:Qm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:s,transfer:bt,toXYZ:Zm,fromXYZ:Qm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),r}const wt=ry();function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Os;class sy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Os===void 0&&(Os=da("canvas")),Os.width=e.width,Os.height=e.height;const a=Os.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=Os}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Qi(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Qi(t[s]/255)*255):t[s]=Qi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oy=0;class eh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=po(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(_f(a[c].image)):l.push(_f(a[c]))}else l=_f(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function _f(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ay=0;class bn extends ho{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,s=rs,a=rs,l=Ci,c=ss,f=_i,h=Pi,p=bn.DEFAULT_ANISOTROPY,g=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=po(),this.name="",this.source=new eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==d_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case od:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case od:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=d_;bn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,s=0,a=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,p=h[0],g=h[4],v=h[8],x=h[1],S=h[5],M=h[9],T=h[2],y=h[6],_=h[10];if(Math.abs(g-x)<.01&&Math.abs(v-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+T)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,C=(S+1)/2,z=(_+1)/2,F=(g+x)/4,U=(v+T)/4,X=(M+y)/4;return L>C&&L>z?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=F/s,l=U/s):C>z?C<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),s=F/a,l=X/a):z<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),s=U/l,a=X/l),this.set(s,a,l,t),this}let D=Math.sqrt((y-M)*(y-M)+(v-T)*(v-T)+(x-g)*(x-g));return Math.abs(D)<.001&&(D=1),this.x=(y-M)/D,this.y=(v-T)/D,this.z=(x-g)/D,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ly extends ho{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth?s.depth:1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const a={width:e,height:t,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const l=new bn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new eh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends ly{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class T_ extends bn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=vi,this.minFilter=vi,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uy extends bn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=vi,this.minFilter=vi,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ma{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let h=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];const x=l[c+0],S=l[c+1],M=l[c+2],T=l[c+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=M,e[t+3]=T;return}if(v!==T||h!==x||p!==S||g!==M){let y=1-f;const _=h*x+p*S+g*M+v*T,D=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const z=Math.sqrt(L),F=Math.atan2(z,_*D);y=Math.sin(y*F)/z,f=Math.sin(f*F)/z}const C=f*D;if(h=h*y+x*C,p=p*y+S*C,g=g*y+M*C,v=v*y+T*C,y===1-f){const z=1/Math.sqrt(h*h+p*p+g*g+v*v);h*=z,p*=z,g*=z,v*=z}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],h=s[a+1],p=s[a+2],g=s[a+3],v=l[c],x=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+g*v+h*S-p*x,e[t+1]=h*M+g*x+p*v-f*S,e[t+2]=p*M+g*S+f*x-h*v,e[t+3]=g*M-f*v-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(s/2),g=f(a/2),v=f(l/2),x=h(s/2),S=h(a/2),M=h(l/2);switch(c){case"XYZ":this._x=x*g*v+p*S*M,this._y=p*S*v-x*g*M,this._z=p*g*M+x*S*v,this._w=p*g*v-x*S*M;break;case"YXZ":this._x=x*g*v+p*S*M,this._y=p*S*v-x*g*M,this._z=p*g*M-x*S*v,this._w=p*g*v+x*S*M;break;case"ZXY":this._x=x*g*v-p*S*M,this._y=p*S*v+x*g*M,this._z=p*g*M+x*S*v,this._w=p*g*v-x*S*M;break;case"ZYX":this._x=x*g*v-p*S*M,this._y=p*S*v+x*g*M,this._z=p*g*M-x*S*v,this._w=p*g*v+x*S*M;break;case"YZX":this._x=x*g*v+p*S*M,this._y=p*S*v+x*g*M,this._z=p*g*M-x*S*v,this._w=p*g*v-x*S*M;break;case"XZY":this._x=x*g*v-p*S*M,this._y=p*S*v-x*g*M,this._z=p*g*M+x*S*v,this._w=p*g*v+x*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],g=t[6],v=t[10],x=s+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(s>f&&s>v){const S=2*Math.sqrt(1+s-f-v);this._w=(g-h)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(f>v){const S=2*Math.sqrt(1+f-s-v);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-s-f);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=s*g+c*f+a*p-l*h,this._y=a*g+c*h+l*f-s*p,this._z=l*g+c*p+s*h-a*f,this._w=c*g-s*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),v=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=c*v+this._w*x,this._x=s*v+this._x*x,this._y=a*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,s=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*s),g=2*(f*t-l*a),v=2*(l*s-c*t);return this.x=t+h*p+c*v-f*g,this.y=s+h*g+f*p-l*v,this.z=a+h*v+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-s*h,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return vf.copy(this).projectOnVector(e),this.sub(vf)}reflect(e){return this.sub(vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vf=new ee,Jm=new ma;class ga{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,hi):hi.fromBufferAttribute(l,c),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Pl.copy(s.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),bl.subVectors(this.max,$o),ks.subVectors(e.a,$o),Bs.subVectors(e.b,$o),zs.subVectors(e.c,$o),Er.subVectors(Bs,ks),Tr.subVectors(zs,Bs),qr.subVectors(ks,zs);let t=[0,-Er.z,Er.y,0,-Tr.z,Tr.y,0,-qr.z,qr.y,Er.z,0,-Er.x,Tr.z,0,-Tr.x,qr.z,0,-qr.x,-Er.y,Er.x,0,-Tr.y,Tr.x,0,-qr.y,qr.x,0];return!xf(t,ks,Bs,zs,bl)||(t=[1,0,0,0,1,0,0,0,1],!xf(t,ks,Bs,zs,bl))?!1:(Ll.crossVectors(Er,Tr),t=[Ll.x,Ll.y,Ll.z],xf(t,ks,Bs,zs,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],hi=new ee,Pl=new ga,ks=new ee,Bs=new ee,zs=new ee,Er=new ee,Tr=new ee,qr=new ee,$o=new ee,bl=new ee,Ll=new ee,$r=new ee;function xf(r,e,t,s,a){for(let l=0,c=r.length-3;l<=c;l+=3){$r.fromArray(r,l);const f=a.x*Math.abs($r.x)+a.y*Math.abs($r.y)+a.z*Math.abs($r.z),h=e.dot($r),p=t.dot($r),g=s.dot($r);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const cy=new ga,Ko=new ee,yf=new ee;class _a{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):cy.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const t=Ko.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Ko,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(yf)),this.expandByPoint(Ko.copy(e.center).sub(yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new ee,Sf=new ee,Dl=new ee,wr=new ee,Mf=new ee,Il=new ee,Ef=new ee;class th{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Sf.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(Sf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Dl),f=wr.dot(this.direction),h=-wr.dot(Dl),p=wr.lengthSq(),g=Math.abs(1-c*c);let v,x,S,M;if(g>0)if(v=c*h-f,x=c*f-h,M=l*g,v>=0)if(x>=-M)if(x<=M){const T=1/g;v*=T,x*=T,S=v*(v+c*x+2*f)+x*(c*v+x+2*h)+p}else x=l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;else x=-l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;else x<=-M?(v=Math.max(0,-(-c*l+f)),x=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+p):x<=M?(v=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+p):(v=Math.max(0,-(c*l+f)),x=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+p);else x=c>0?-l:l,v=Math.max(0,-(c*x+f)),S=-v*v+x*(x+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Sf).addScaledVector(Dl,x),S}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const s=Gi.dot(this.direction),a=Gi.dot(Gi)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,h=s+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,h;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),v>=0?(f=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),s>h||f>a)||((f>s||s!==s)&&(s=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,s,a,l){Mf.subVectors(t,e),Il.subVectors(s,e),Ef.crossVectors(Mf,Il);let c=this.direction.dot(Ef),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;wr.subVectors(this.origin,e);const h=f*this.direction.dot(Il.crossVectors(wr,Il));if(h<0)return null;const p=f*this.direction.dot(Mf.cross(wr));if(p<0||h+p>c)return null;const g=-f*wr.dot(Ef);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,s,a,l,c,f,h,p,g,v,x,S,M,T,y){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,h,p,g,v,x,S,M,T,y)}set(e,t,s,a,l,c,f,h,p,g,v,x,S,M,T,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=a,_[1]=l,_[5]=c,_[9]=f,_[13]=h,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=M,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),c=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),h=Math.cos(a),p=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=c*g,S=c*v,M=f*g,T=f*v;t[0]=h*g,t[4]=-h*v,t[8]=p,t[1]=S+M*p,t[5]=x-T*p,t[9]=-f*h,t[2]=T-x*p,t[6]=M+S*p,t[10]=c*h}else if(e.order==="YXZ"){const x=h*g,S=h*v,M=p*g,T=p*v;t[0]=x+T*f,t[4]=M*f-S,t[8]=c*p,t[1]=c*v,t[5]=c*g,t[9]=-f,t[2]=S*f-M,t[6]=T+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*g,S=h*v,M=p*g,T=p*v;t[0]=x-T*f,t[4]=-c*v,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*g,t[9]=T-x*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*g,S=c*v,M=f*g,T=f*v;t[0]=h*g,t[4]=M*p-S,t[8]=x*p+T,t[1]=h*v,t[5]=T*p+x,t[9]=S*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*p,M=f*h,T=f*p;t[0]=h*g,t[4]=T-x*v,t[8]=M*v+S,t[1]=v,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*v+M,t[10]=x-T*v}else if(e.order==="XZY"){const x=c*h,S=c*p,M=f*h,T=f*p;t[0]=h*g,t[4]=-v,t[8]=p*g,t[1]=x*v+T,t[5]=c*g,t[9]=S*v-M,t[2]=M*v-S,t[6]=f*g,t[10]=T*v+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fy,e,dy)}lookAt(e,t,s){const a=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ar.crossVectors(s,Yn),Ar.lengthSq()===0&&(Math.abs(s.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ar.crossVectors(s,Yn)),Ar.normalize(),Ul.crossVectors(Yn,Ar),a[0]=Ar.x,a[4]=Ul.x,a[8]=Yn.x,a[1]=Ar.y,a[5]=Ul.y,a[9]=Yn.y,a[2]=Ar.z,a[6]=Ul.z,a[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],h=s[8],p=s[12],g=s[1],v=s[5],x=s[9],S=s[13],M=s[2],T=s[6],y=s[10],_=s[14],D=s[3],L=s[7],C=s[11],z=s[15],F=a[0],U=a[4],X=a[8],P=a[12],R=a[1],H=a[5],de=a[9],W=a[13],le=a[2],ce=a[6],oe=a[10],ae=a[14],k=a[3],ne=a[7],te=a[11],N=a[15];return l[0]=c*F+f*R+h*le+p*k,l[4]=c*U+f*H+h*ce+p*ne,l[8]=c*X+f*de+h*oe+p*te,l[12]=c*P+f*W+h*ae+p*N,l[1]=g*F+v*R+x*le+S*k,l[5]=g*U+v*H+x*ce+S*ne,l[9]=g*X+v*de+x*oe+S*te,l[13]=g*P+v*W+x*ae+S*N,l[2]=M*F+T*R+y*le+_*k,l[6]=M*U+T*H+y*ce+_*ne,l[10]=M*X+T*de+y*oe+_*te,l[14]=M*P+T*W+y*ae+_*N,l[3]=D*F+L*R+C*le+z*k,l[7]=D*U+L*H+C*ce+z*ne,l[11]=D*X+L*de+C*oe+z*te,l[15]=D*P+L*W+C*ae+z*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],g=e[2],v=e[6],x=e[10],S=e[14],M=e[3],T=e[7],y=e[11],_=e[15];return M*(+l*h*v-a*p*v-l*f*x+s*p*x+a*f*S-s*h*S)+T*(+t*h*S-t*p*x+l*c*x-a*c*S+a*p*g-l*h*g)+y*(+t*p*v-t*f*S-l*c*v+s*c*S+l*f*g-s*p*g)+_*(-a*f*g-t*h*v+t*f*x+a*c*v-s*c*x+s*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],g=e[8],v=e[9],x=e[10],S=e[11],M=e[12],T=e[13],y=e[14],_=e[15],D=v*y*p-T*x*p+T*h*S-f*y*S-v*h*_+f*x*_,L=M*x*p-g*y*p-M*h*S+c*y*S+g*h*_-c*x*_,C=g*T*p-M*v*p+M*f*S-c*T*S-g*f*_+c*v*_,z=M*v*h-g*T*h-M*f*x+c*T*x+g*f*y-c*v*y,F=t*D+s*L+a*C+l*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=D*U,e[1]=(T*x*l-v*y*l-T*a*S+s*y*S+v*a*_-s*x*_)*U,e[2]=(f*y*l-T*h*l+T*a*p-s*y*p-f*a*_+s*h*_)*U,e[3]=(v*h*l-f*x*l-v*a*p+s*x*p+f*a*S-s*h*S)*U,e[4]=L*U,e[5]=(g*y*l-M*x*l+M*a*S-t*y*S-g*a*_+t*x*_)*U,e[6]=(M*h*l-c*y*l-M*a*p+t*y*p+c*a*_-t*h*_)*U,e[7]=(c*x*l-g*h*l+g*a*p-t*x*p-c*a*S+t*h*S)*U,e[8]=C*U,e[9]=(M*v*l-g*T*l-M*s*S+t*T*S+g*s*_-t*v*_)*U,e[10]=(c*T*l-M*f*l+M*s*p-t*T*p-c*s*_+t*f*_)*U,e[11]=(g*f*l-c*v*l-g*s*p+t*v*p+c*s*S-t*f*S)*U,e[12]=z*U,e[13]=(g*T*a-M*v*a+M*s*x-t*T*x-g*s*y+t*v*y)*U,e[14]=(M*f*a-c*T*a-M*s*h+t*T*h+c*s*y-t*f*y)*U,e[15]=(c*v*a-g*f*a+g*s*h-t*v*h-c*s*x+t*f*x)*U,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,h=e.z,p=l*c,g=l*f;return this.set(p*c+s,p*f-a*h,p*h+a*f,0,p*f+a*h,g*f+s,g*h-a*c,0,p*h-a*f,g*h+a*c,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,g=c+c,v=f+f,x=l*p,S=l*g,M=l*v,T=c*g,y=c*v,_=f*v,D=h*p,L=h*g,C=h*v,z=s.x,F=s.y,U=s.z;return a[0]=(1-(T+_))*z,a[1]=(S+C)*z,a[2]=(M-L)*z,a[3]=0,a[4]=(S-C)*F,a[5]=(1-(x+_))*F,a[6]=(y+D)*F,a[7]=0,a[8]=(M+L)*U,a[9]=(y-D)*U,a[10]=(1-(x+T))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Hs.set(a[0],a[1],a[2]).length();const c=Hs.set(a[4],a[5],a[6]).length(),f=Hs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],pi.copy(this);const p=1/l,g=1/c,v=1/f;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=g,pi.elements[5]*=g,pi.elements[6]*=g,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,t.setFromRotationMatrix(pi),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=Zi){const h=this.elements,p=2*l/(t-e),g=2*l/(s-a),v=(t+e)/(t-e),x=(s+a)/(s-a);let S,M;if(f===Zi)S=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===pu)S=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=Zi){const h=this.elements,p=1/(t-e),g=1/(s-a),v=1/(c-l),x=(t+e)*p,S=(s+a)*g;let M,T;if(f===Zi)M=(c+l)*v,T=-2*v;else if(f===pu)M=l*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Hs=new ee,pi=new zt,fy=new ee(0,0,0),dy=new ee(1,1,1),Ar=new ee,Ul=new ee,Yn=new ee,eg=new zt,tg=new ma;class bi{constructor(e=0,t=0,s=0,a=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],g=a[9],v=a[2],x=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tg.setFromEuler(this),this.setFromQuaternion(tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class w_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hy=0;const ng=new ee,Vs=new ma,Wi=new zt,Nl=new ee,Zo=new ee,py=new ee,my=new ma,ig=new ee(1,0,0),rg=new ee(0,1,0),sg=new ee(0,0,1),og={type:"added"},gy={type:"removed"},Gs={type:"childadded",child:null},Tf={type:"childremoved",child:null};class fn extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new ee,t=new bi,s=new ma,a=new ee(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new ut}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new w_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(ig,e)}rotateY(e){return this.rotateOnAxis(rg,e)}rotateZ(e){return this.rotateOnAxis(sg,e)}translateOnAxis(e,t){return ng.copy(e).applyQuaternion(this.quaternion),this.position.add(ng.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ig,e)}translateY(e){return this.translateOnAxis(rg,e)}translateZ(e){return this.translateOnAxis(sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Nl.copy(e):Nl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Zo,Nl,this.up):Wi.lookAt(Nl,Zo,this.up),this.quaternion.setFromRotationMatrix(Wi),a&&(Wi.extractRotation(a.matrixWorld),Vs.setFromRotationMatrix(Wi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(og),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gy),Tf.child=e,this.dispatchEvent(Tf),Tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(og),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,my,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?{min:f.boundingBox.min.toArray(),max:f.boundingBox.max.toArray()}:void 0,boundingSphere:f.boundingSphere?{radius:f.boundingSphere.radius,center:f.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const v=h[p];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),g=c(e.images),v=c(e.shapes),x=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=a,s;function c(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}fn.DEFAULT_UP=new ee(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new ee,Xi=new ee,wf=new ee,Yi=new ee,Ws=new ee,Xs=new ee,ag=new ee,Af=new ee,Rf=new ee,Cf=new ee,Pf=new jt,bf=new jt,Lf=new jt;class gi{constructor(e=new ee,t=new ee,s=new ee){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),mi.subVectors(e,t),a.cross(mi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){mi.subVectors(a,t),Xi.subVectors(s,t),wf.subVectors(e,t);const c=mi.dot(mi),f=mi.dot(Xi),h=mi.dot(wf),p=Xi.dot(Xi),g=Xi.dot(wf),v=c*p-f*f;if(v===0)return l.set(0,0,0),null;const x=1/v,S=(p*h-f*g)*x,M=(c*g-f*h)*x;return l.set(1-S-M,M,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,s,a,l,c,f,h){return this.getBarycoord(e,t,s,a,Yi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Yi.x),h.addScaledVector(c,Yi.y),h.addScaledVector(f,Yi.z),h)}static getInterpolatedAttribute(e,t,s,a,l,c){return Pf.setScalar(0),bf.setScalar(0),Lf.setScalar(0),Pf.fromBufferAttribute(e,t),bf.fromBufferAttribute(e,s),Lf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Pf,l.x),c.addScaledVector(bf,l.y),c.addScaledVector(Lf,l.z),c}static isFrontFacing(e,t,s,a){return mi.subVectors(s,t),Xi.subVectors(e,t),mi.cross(Xi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),mi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return gi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;Ws.subVectors(a,s),Xs.subVectors(l,s),Af.subVectors(e,s);const h=Ws.dot(Af),p=Xs.dot(Af);if(h<=0&&p<=0)return t.copy(s);Rf.subVectors(e,a);const g=Ws.dot(Rf),v=Xs.dot(Rf);if(g>=0&&v<=g)return t.copy(a);const x=h*v-g*p;if(x<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(s).addScaledVector(Ws,c);Cf.subVectors(e,l);const S=Ws.dot(Cf),M=Xs.dot(Cf);if(M>=0&&S<=M)return t.copy(l);const T=S*p-h*M;if(T<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(s).addScaledVector(Xs,f);const y=g*M-S*v;if(y<=0&&v-g>=0&&S-M>=0)return ag.subVectors(l,a),f=(v-g)/(v-g+(S-M)),t.copy(a).addScaledVector(ag,f);const _=1/(y+T+x);return c=T*_,f=x*_,t.copy(s).addScaledVector(Ws,c).addScaledVector(Xs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const A_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function Df(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class vt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=wt.workingColorSpace){return this.r=e,this.g=t,this.b=s,wt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=wt.workingColorSpace){if(e=Jd(e,1),t=_t(t,0,1),s=_t(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Df(c,l,e+1/3),this.g=Df(c,l,e),this.b=Df(c,l,e-1/3)}return wt.toWorkingColorSpace(this,a),this}setStyle(e,t=ni){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const s=A_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return wt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(_t(Mn.r*255,0,255))*65536+Math.round(_t(Mn.g*255,0,255))*256+Math.round(_t(Mn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Mn.copy(this),t);const s=Mn.r,a=Mn.g,l=Mn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let h,p;const g=(f+c)/2;if(f===c)h=0,p=0;else{const v=c-f;switch(p=g<=.5?v/(c+f):v/(2-c-f),c){case s:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-s)/v+2;break;case l:h=(s-a)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ni){wt.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,s=Mn.g,a=Mn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Fl);const s=ra(Rr.h,Fl.h,t),a=ra(Rr.s,Fl.s,t),l=ra(Rr.l,Fl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new vt;vt.NAMES=A_;let _y=0;class fs extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=po(),this.name="",this.type="Material",this.blending=eo,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=Kf,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(s.blending=this.blending),this.side!==Ir&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==$f&&(s.blendSrc=this.blendSrc),this.blendDst!==Kf&&(s.blendDst=this.blendDst),this.blendEquation!==ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mu extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new ee,Ol=new Ct;let vy=0;class si{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Ym,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Zs(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Rn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array),a=Rn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),s=Rn(s,this.array),a=Rn(a,this.array),l=Rn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ym&&(e.usage=this.usage),e}}class R_ extends si{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class C_ extends si{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class zn extends si{constructor(e,t,s){super(new Float32Array(e),t,s)}}let xy=0;const ti=new zt,If=new fn,Ys=new ee,jn=new ga,Qo=new ga,un=new ee;class Hn extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E_(e)?C_:R_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ut().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,s){return ti.makeTranslation(e,t,s),this.applyMatrix4(ti),this}scale(e,t,s){return ti.makeScale(e,t,s),this.applyMatrix4(ti),this}lookAt(e){return If.lookAt(e),If.updateMatrix(),this.applyMatrix4(If.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new zn(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const s=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Qo.setFromBufferAttribute(f),this.morphTargetsRelative?(un.addVectors(jn.min,Qo.min),jn.expandByPoint(un),un.addVectors(jn.max,Qo.max),jn.expandByPoint(un)):(jn.expandByPoint(Qo.min),jn.expandByPoint(Qo.max))}jn.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)un.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(un));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)un.fromBufferAttribute(f,p),h&&(Ys.fromBufferAttribute(e,p),un.add(Ys)),a=Math.max(a,s.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let X=0;X<s.count;X++)f[X]=new ee,h[X]=new ee;const p=new ee,g=new ee,v=new ee,x=new Ct,S=new Ct,M=new Ct,T=new ee,y=new ee;function _(X,P,R){p.fromBufferAttribute(s,X),g.fromBufferAttribute(s,P),v.fromBufferAttribute(s,R),x.fromBufferAttribute(l,X),S.fromBufferAttribute(l,P),M.fromBufferAttribute(l,R),g.sub(p),v.sub(p),S.sub(x),M.sub(x);const H=1/(S.x*M.y-M.x*S.y);isFinite(H)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(H),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(H),f[X].add(T),f[P].add(T),f[R].add(T),h[X].add(y),h[P].add(y),h[R].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let X=0,P=D.length;X<P;++X){const R=D[X],H=R.start,de=R.count;for(let W=H,le=H+de;W<le;W+=3)_(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const L=new ee,C=new ee,z=new ee,F=new ee;function U(X){z.fromBufferAttribute(a,X),F.copy(z);const P=f[X];L.copy(P),L.sub(z.multiplyScalar(z.dot(P))).normalize(),C.crossVectors(F,P);const H=C.dot(h[X])<0?-1:1;c.setXYZW(X,L.x,L.y,L.z,H)}for(let X=0,P=D.length;X<P;++X){const R=D[X],H=R.start,de=R.count;for(let W=H,le=H+de;W<le;W+=3)U(e.getX(W+0)),U(e.getX(W+1)),U(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const a=new ee,l=new ee,c=new ee,f=new ee,h=new ee,p=new ee,g=new ee,v=new ee;if(e)for(let x=0,S=e.count;x<S;x+=3){const M=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),f.fromBufferAttribute(s,M),h.fromBufferAttribute(s,T),p.fromBufferAttribute(s,y),f.add(g),h.add(g),p.add(g),s.setXYZ(M,f.x,f.y,f.z),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,v=f.normalized,x=new p.constructor(h.length*g);let S=0,M=0;for(let T=0,y=h.length;T<y;T++){f.isInterleavedBufferAttribute?S=h[T]*f.data.stride+f.offset:S=h[T]*g;for(let _=0;_<g;_++)x[M++]=p[S++]}return new si(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,s=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,v=p.length;g<v;g++){const x=p[g],S=e(x,s);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],v=l[p];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const v=c[p];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lg=new zt,Kr=new th,kl=new _a,ug=new ee,Bl=new ee,zl=new ee,Hl=new ee,Uf=new ee,Vl=new ee,cg=new ee,Gl=new ee;class ri extends fn{constructor(e=new Hn,t=new mu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Vl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],v=l[h];g!==0&&(Uf.fromBufferAttribute(v,e),c?Vl.addScaledVector(Uf,g):Vl.addScaledVector(Uf.sub(t),g))}t.add(Vl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),kl.copy(s.boundingSphere),kl.applyMatrix4(l),Kr.copy(e.ray).recast(e.near),!(kl.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(kl,ug)===null||Kr.origin.distanceToSquared(ug)>(e.far-e.near)**2))&&(lg.copy(l).invert(),Kr.copy(e.ray).applyMatrix4(lg),!(s.boundingBox!==null&&Kr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,T=x.length;M<T;M++){const y=x[M],_=c[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,z=L;C<z;C+=3){const F=f.getX(C),U=f.getX(C+1),X=f.getX(C+2);a=Wl(this,_,e,s,p,g,v,F,U,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=M,_=T;y<_;y+=3){const D=f.getX(y),L=f.getX(y+1),C=f.getX(y+2);a=Wl(this,c,e,s,p,g,v,D,L,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,T=x.length;M<T;M++){const y=x[M],_=c[y.materialIndex],D=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,z=L;C<z;C+=3){const F=C,U=C+1,X=C+2;a=Wl(this,_,e,s,p,g,v,F,U,X),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=M,_=T;y<_;y+=3){const D=y,L=y+1,C=y+2;a=Wl(this,c,e,s,p,g,v,D,L,C),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function yy(r,e,t,s,a,l,c,f){let h;if(e.side===Bn?h=s.intersectTriangle(c,l,a,!0,f):h=s.intersectTriangle(a,l,c,e.side===Ir,f),h===null)return null;Gl.copy(f),Gl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Gl);return p<t.near||p>t.far?null:{distance:p,point:Gl.clone(),object:r}}function Wl(r,e,t,s,a,l,c,f,h,p){r.getVertexPosition(f,Bl),r.getVertexPosition(h,zl),r.getVertexPosition(p,Hl);const g=yy(r,e,t,s,Bl,zl,Hl,cg);if(g){const v=new ee;gi.getBarycoord(cg,Bl,zl,Hl,v),a&&(g.uv=gi.getInterpolatedAttribute(a,f,h,p,v,new Ct)),l&&(g.uv1=gi.getInterpolatedAttribute(l,f,h,p,v,new Ct)),c&&(g.normal=gi.getInterpolatedAttribute(c,f,h,p,v,new ee),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new ee,materialIndex:0};gi.getNormal(Bl,zl,Hl,x.normal),g.face=x,g.barycoord=v}return g}class va extends Hn{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],g=[],v=[];let x=0,S=0;M("z","y","x",-1,-1,s,t,e,c,l,0),M("z","y","x",1,-1,s,t,-e,c,l,1),M("x","z","y",1,1,e,s,t,a,c,2),M("x","z","y",1,-1,e,s,-t,a,c,3),M("x","y","z",1,-1,e,t,s,a,l,4),M("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new zn(p,3)),this.setAttribute("normal",new zn(g,3)),this.setAttribute("uv",new zn(v,2));function M(T,y,_,D,L,C,z,F,U,X,P){const R=C/U,H=z/X,de=C/2,W=z/2,le=F/2,ce=U+1,oe=X+1;let ae=0,k=0;const ne=new ee;for(let te=0;te<oe;te++){const N=te*H-W;for(let $=0;$<ce;$++){const we=$*R-de;ne[T]=we*D,ne[y]=N*L,ne[_]=le,p.push(ne.x,ne.y,ne.z),ne[T]=0,ne[y]=0,ne[_]=F>0?1:-1,g.push(ne.x,ne.y,ne.z),v.push($/U),v.push(1-te/X),ae+=1}}for(let te=0;te<X;te++)for(let N=0;N<U;N++){const $=x+N+ce*te,we=x+N+ce*(te+1),q=x+(N+1)+ce*(te+1),fe=x+(N+1)+ce*te;h.push($,we,fe),h.push(we,q,fe),k+=6}f.addGroup(S,k,P),S+=k,x+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Cn(r){const e={};for(let t=0;t<r.length;t++){const s=oo(r[t]);for(const a in s)e[a]=s[a]}return e}function Sy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function P_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const My={clone:oo,merge:Cn};var Ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ey,this.fragmentShader=Ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=Sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class b_ extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new ee,fg=new Ct,dg=new Ct;class ii extends b_{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,fg,dg),t.subVectors(dg,fg)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*s/p,a*=c.width/h,s*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,qs=1;class wy extends fn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ii(js,qs,e,t);a.layers=this.layers,this.add(a);const l=new ii(js,qs,e,t);l.layers=this.layers,this.add(l);const c=new ii(js,qs,e,t);c.layers=this.layers,this.add(c);const f=new ii(js,qs,e,t);f.layers=this.layers,this.add(f);const h=new ii(js,qs,e,t);h.layers=this.layers,this.add(h);const p=new ii(js,qs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===pu)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,a),e.render(t,g),e.setRenderTarget(v,x,S),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class L_ extends bn{constructor(e=[],t=io,s,a,l,c,f,h,p,g){super(e,t,s,a,l,c,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ay extends cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new L_(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new va(5,5,5),l=new Ji({name:"CubemapFromEquirect",uniforms:oo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Bn,blending:Lr});l.uniforms.tEquirect.value=t;const c=new ri(a,l),f=t.minFilter;return t.minFilter===ss&&(t.minFilter=Ci),new wy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}class ea extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ry={type:"move"};class Nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,s),_=this._getHandJoint(p,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,M=.005;p.inputState.pinching&&x>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Ry)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ea;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class Cy extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ff=new ee,Py=new ee,by=new ut;class es{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Ff.subVectors(s,t).cross(Py.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Ff),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||by.getNormalMatrix(e),a=this.coplanarPoint(Ff).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new _a,Xl=new ee;class nh{constructor(e=new es,t=new es,s=new es,a=new es,l=new es,c=new es){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Zi){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],g=a[5],v=a[6],x=a[7],S=a[8],M=a[9],T=a[10],y=a[11],_=a[12],D=a[13],L=a[14],C=a[15];if(s[0].setComponents(h-l,x-p,y-S,C-_).normalize(),s[1].setComponents(h+l,x+p,y+S,C+_).normalize(),s[2].setComponents(h+c,x+g,y+M,C+D).normalize(),s[3].setComponents(h-c,x-g,y-M,C-D).normalize(),s[4].setComponents(h-f,x-v,y-T,C-L).normalize(),t===Zi)s[5].setComponents(h+f,x+v,y+T,C+L).normalize();else if(t===pu)s[5].setComponents(f,v,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Xl.x=a.normal.x>0?e.max.x:e.min.x,Xl.y=a.normal.y>0?e.max.y:e.min.y,Xl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ud extends fs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gu=new ee,_u=new ee,hg=new zt,Jo=new th,Yl=new _a,Of=new ee,pg=new ee;class mg extends fn{constructor(e=new Hn,t=new Ud){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)gu.fromBufferAttribute(t,a-1),_u.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=gu.distanceTo(_u);e.setAttribute("lineDistance",new zn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Yl.copy(s.boundingSphere),Yl.applyMatrix4(a),Yl.radius+=l,e.ray.intersectsSphere(Yl)===!1)return;hg.copy(a).invert(),Jo.copy(e.ray).applyMatrix4(hg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const S=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let T=S,y=M-1;T<y;T+=p){const _=g.getX(T),D=g.getX(T+1),L=jl(this,e,Jo,h,_,D,T);L&&t.push(L)}if(this.isLineLoop){const T=g.getX(M-1),y=g.getX(S),_=jl(this,e,Jo,h,T,y,M-1);_&&t.push(_)}}else{const S=Math.max(0,c.start),M=Math.min(x.count,c.start+c.count);for(let T=S,y=M-1;T<y;T+=p){const _=jl(this,e,Jo,h,T,T+1,T);_&&t.push(_)}if(this.isLineLoop){const T=jl(this,e,Jo,h,M-1,S,M-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function jl(r,e,t,s,a,l,c){const f=r.geometry.attributes.position;if(gu.fromBufferAttribute(f,a),_u.fromBufferAttribute(f,l),t.distanceSqToSegment(gu,_u,Of,pg)>s)return;Of.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Of);if(!(p<e.near||p>e.far))return{distance:p,point:pg.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}class Ly extends fs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gg=new zt,Nd=new th,ql=new _a,$l=new ee;class Dy extends fn{constructor(e=new Hn,t=new Ly){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ql.copy(s.boundingSphere),ql.applyMatrix4(a),ql.radius+=l,e.ray.intersectsSphere(ql)===!1)return;gg.copy(a).invert(),Nd.copy(e.ray).applyMatrix4(gg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=s.index,v=s.attributes.position;if(p!==null){const x=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let M=x,T=S;M<T;M++){const y=p.getX(M);$l.fromBufferAttribute(v,y),_g($l,y,h,a,e,t,this)}}else{const x=Math.max(0,c.start),S=Math.min(v.count,c.start+c.count);for(let M=x,T=S;M<T;M++)$l.fromBufferAttribute(v,M),_g($l,M,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function _g(r,e,t,s,a,l,c){const f=Nd.distanceSqToPoint(r);if(f<t){const h=new ee;Nd.closestPointToPoint(r,h),h.applyMatrix4(s);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class D_ extends bn{constructor(e,t,s=us,a,l,c,f=vi,h=vi,p,g=ua){if(g!==ua&&g!==ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,l,c,f,h,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Tu extends Hn{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),h=Math.floor(a),p=f+1,g=h+1,v=e/f,x=t/h,S=[],M=[],T=[],y=[];for(let _=0;_<g;_++){const D=_*x-c;for(let L=0;L<p;L++){const C=L*v-l;M.push(C,-D,0),T.push(0,0,1),y.push(L/f),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let D=0;D<f;D++){const L=D+p*_,C=D+p*(_+1),z=D+1+p*(_+1),F=D+1+p*_;S.push(L,C,F),S.push(C,z,F)}this.setIndex(S),this.setAttribute("position",new zn(M,3)),this.setAttribute("normal",new zn(T,3)),this.setAttribute("uv",new zn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tu(e.width,e.height,e.widthSegments,e.heightSegments)}}class vu extends Hn{constructor(e=1,t=32,s=16,a=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:a,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const h=Math.min(c+f,Math.PI);let p=0;const g=[],v=new ee,x=new ee,S=[],M=[],T=[],y=[];for(let _=0;_<=s;_++){const D=[],L=_/s;let C=0;_===0&&c===0?C=.5/t:_===s&&h===Math.PI&&(C=-.5/t);for(let z=0;z<=t;z++){const F=z/t;v.x=-e*Math.cos(a+F*l)*Math.sin(c+L*f),v.y=e*Math.cos(c+L*f),v.z=e*Math.sin(a+F*l)*Math.sin(c+L*f),M.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),y.push(F+C,1-L),D.push(p++)}g.push(D)}for(let _=0;_<s;_++)for(let D=0;D<t;D++){const L=g[_][D+1],C=g[_][D],z=g[_+1][D],F=g[_+1][D+1];(_!==0||c>0)&&S.push(L,C,F),(_!==s-1||h<Math.PI)&&S.push(C,z,F)}this.setIndex(S),this.setAttribute("position",new zn(M,3)),this.setAttribute("normal",new zn(T,3)),this.setAttribute("uv",new zn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ih extends Hn{constructor(e=1,t=.4,s=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:a,arc:l},s=Math.floor(s),a=Math.floor(a);const c=[],f=[],h=[],p=[],g=new ee,v=new ee,x=new ee;for(let S=0;S<=s;S++)for(let M=0;M<=a;M++){const T=M/a*l,y=S/s*Math.PI*2;v.x=(e+t*Math.cos(y))*Math.cos(T),v.y=(e+t*Math.cos(y))*Math.sin(T),v.z=t*Math.sin(y),f.push(v.x,v.y,v.z),g.x=e*Math.cos(T),g.y=e*Math.sin(T),x.subVectors(v,g).normalize(),h.push(x.x,x.y,x.z),p.push(M/a),p.push(S/s)}for(let S=1;S<=s;S++)for(let M=1;M<=a;M++){const T=(a+1)*S+M-1,y=(a+1)*(S-1)+M-1,_=(a+1)*(S-1)+M,D=(a+1)*S+M;c.push(T,y,D),c.push(y,_,D)}this.setIndex(c),this.setAttribute("position",new zn(f,3)),this.setAttribute("normal",new zn(h,3)),this.setAttribute("uv",new zn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ih(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Iy extends fs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new vt(16777215),this.specular=new vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=S_,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uy extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ny extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vg={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Fy{constructor(e,t,s){const a=this;let l=!1,c=0,f=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(g){f++,l===!1&&a.onStart!==void 0&&a.onStart(g,c,f),l=!0},this.itemEnd=function(g){c++,a.onProgress!==void 0&&a.onProgress(g,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,x=p.length;v<x;v+=2){const S=p[v],M=p[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return M}return null}}}const Oy=new Fy;class rh{constructor(e){this.manager=e!==void 0?e:Oy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rh.DEFAULT_MATERIAL_NAME="__DEFAULT";class ky extends rh{constructor(e){super(e)}load(e,t,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=vg.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const f=da("img");function h(){g(),vg.add(e,this),t&&t(this),l.manager.itemEnd(e)}function p(v){g(),a&&a(v),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class By extends rh{constructor(e){super(e)}load(e,t,s,a){const l=new bn,c=new ky(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,a),l}}class zy extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const kf=new zt,xg=new ee,yg=new ee;class Hy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nh,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;xg.setFromMatrixPosition(e.matrixWorld),t.position.copy(xg),yg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yg),t.updateMatrixWorld(),kf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kf),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class I_ extends b_{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vy extends Hy{constructor(){super(new I_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gy extends zy{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Vy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wy extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Sg(r,e,t,s){const a=Xy(s);switch(t){case g_:return r*e;case v_:return r*e/a.components*a.byteLength;case Kd:return r*e/a.components*a.byteLength;case x_:return r*e*2/a.components*a.byteLength;case Zd:return r*e*2/a.components*a.byteLength;case __:return r*e*3/a.components*a.byteLength;case _i:return r*e*4/a.components*a.byteLength;case Qd:return r*e*4/a.components*a.byteLength;case tu:case nu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case iu:case ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ud:case fd:return Math.max(r,16)*Math.max(e,8)/4;case ld:case cd:return Math.max(r,8)*Math.max(e,8)/2;case dd:case hd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _d:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case vd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case xd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case yd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Md:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Td:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case wd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case su:case Pd:case bd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case y_:case Ld:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Dd:case Id:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xy(r){switch(r){case Pi:case h_:return{byteLength:1,components:1};case aa:case p_:case pa:return{byteLength:2,components:1};case qd:case $d:return{byteLength:2,components:4};case us:case jd:case Ki:return{byteLength:4,components:1};case m_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function U_(){let r=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function Yy(r){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,v=p.byteLength,x=r.createBuffer();r.bindBuffer(h,x),r.bufferData(h,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,h,p){const g=h.array,v=h.updateRanges;if(r.bindBuffer(p,f),v.length===0)r.bufferSubData(p,0,g);else{v.sort((S,M)=>S.start-M.start);let x=0;for(let S=1;S<v.length;S++){const M=v[x],T=v[S];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++x,v[x]=T)}v.length=x+1;for(let S=0,M=v.length;S<M;S++){const T=v[S];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ky=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_S=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ES="gl_FragColor = linearToOutputTexel( gl_FragColor );",TS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,US=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$S=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,UM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,FM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,HM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,XM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_E=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:jy,alphahash_pars_fragment:qy,alphamap_fragment:$y,alphamap_pars_fragment:Ky,alphatest_fragment:Zy,alphatest_pars_fragment:Qy,aomap_fragment:Jy,aomap_pars_fragment:eS,batching_pars_vertex:tS,batching_vertex:nS,begin_vertex:iS,beginnormal_vertex:rS,bsdfs:sS,iridescence_fragment:oS,bumpmap_pars_fragment:aS,clipping_planes_fragment:lS,clipping_planes_pars_fragment:uS,clipping_planes_pars_vertex:cS,clipping_planes_vertex:fS,color_fragment:dS,color_pars_fragment:hS,color_pars_vertex:pS,color_vertex:mS,common:gS,cube_uv_reflection_fragment:_S,defaultnormal_vertex:vS,displacementmap_pars_vertex:xS,displacementmap_vertex:yS,emissivemap_fragment:SS,emissivemap_pars_fragment:MS,colorspace_fragment:ES,colorspace_pars_fragment:TS,envmap_fragment:wS,envmap_common_pars_fragment:AS,envmap_pars_fragment:RS,envmap_pars_vertex:CS,envmap_physical_pars_fragment:BS,envmap_vertex:PS,fog_vertex:bS,fog_pars_vertex:LS,fog_fragment:DS,fog_pars_fragment:IS,gradientmap_pars_fragment:US,lightmap_pars_fragment:NS,lights_lambert_fragment:FS,lights_lambert_pars_fragment:OS,lights_pars_begin:kS,lights_toon_fragment:zS,lights_toon_pars_fragment:HS,lights_phong_fragment:VS,lights_phong_pars_fragment:GS,lights_physical_fragment:WS,lights_physical_pars_fragment:XS,lights_fragment_begin:YS,lights_fragment_maps:jS,lights_fragment_end:qS,logdepthbuf_fragment:$S,logdepthbuf_pars_fragment:KS,logdepthbuf_pars_vertex:ZS,logdepthbuf_vertex:QS,map_fragment:JS,map_pars_fragment:eM,map_particle_fragment:tM,map_particle_pars_fragment:nM,metalnessmap_fragment:iM,metalnessmap_pars_fragment:rM,morphinstance_vertex:sM,morphcolor_vertex:oM,morphnormal_vertex:aM,morphtarget_pars_vertex:lM,morphtarget_vertex:uM,normal_fragment_begin:cM,normal_fragment_maps:fM,normal_pars_fragment:dM,normal_pars_vertex:hM,normal_vertex:pM,normalmap_pars_fragment:mM,clearcoat_normal_fragment_begin:gM,clearcoat_normal_fragment_maps:_M,clearcoat_pars_fragment:vM,iridescence_pars_fragment:xM,opaque_fragment:yM,packing:SM,premultiplied_alpha_fragment:MM,project_vertex:EM,dithering_fragment:TM,dithering_pars_fragment:wM,roughnessmap_fragment:AM,roughnessmap_pars_fragment:RM,shadowmap_pars_fragment:CM,shadowmap_pars_vertex:PM,shadowmap_vertex:bM,shadowmask_pars_fragment:LM,skinbase_vertex:DM,skinning_pars_vertex:IM,skinning_vertex:UM,skinnormal_vertex:NM,specularmap_fragment:FM,specularmap_pars_fragment:OM,tonemapping_fragment:kM,tonemapping_pars_fragment:BM,transmission_fragment:zM,transmission_pars_fragment:HM,uv_pars_fragment:VM,uv_pars_vertex:GM,uv_vertex:WM,worldpos_vertex:XM,background_vert:YM,background_frag:jM,backgroundCube_vert:qM,backgroundCube_frag:$M,cube_vert:KM,cube_frag:ZM,depth_vert:QM,depth_frag:JM,distanceRGBA_vert:eE,distanceRGBA_frag:tE,equirect_vert:nE,equirect_frag:iE,linedashed_vert:rE,linedashed_frag:sE,meshbasic_vert:oE,meshbasic_frag:aE,meshlambert_vert:lE,meshlambert_frag:uE,meshmatcap_vert:cE,meshmatcap_frag:fE,meshnormal_vert:dE,meshnormal_frag:hE,meshphong_vert:pE,meshphong_frag:mE,meshphysical_vert:gE,meshphysical_frag:_E,meshtoon_vert:vE,meshtoon_frag:xE,points_vert:yE,points_frag:SE,shadow_vert:ME,shadow_frag:EE,sprite_vert:TE,sprite_frag:wE},be={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ai={basic:{uniforms:Cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new vt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Cn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Cn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new vt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Cn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Cn([be.points,be.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Cn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Cn([be.common,be.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Cn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Cn([be.sprite,be.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Cn([be.common,be.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Cn([be.lights,be.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ai.physical={uniforms:Cn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Kl={r:0,b:0,g:0},Qr=new bi,AE=new zt;function RE(r,e,t,s,a,l,c){const f=new vt(0);let h=l===!0?0:1,p,g,v=null,x=0,S=null;function M(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?t:e).get(C)),C}function T(L){let C=!1;const z=M(L);z===null?_(f,h):z&&z.isColor&&(_(z,1),C=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(r.autoClear||C)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,C){const z=M(C);z&&(z.isCubeTexture||z.mapping===Eu)?(g===void 0&&(g=new ri(new va(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:oo(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,U,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),Qr.copy(C.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(AE.makeRotationFromEuler(Qr)),g.material.toneMapped=wt.getTransfer(z.colorSpace)!==bt,(v!==z||x!==z.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,v=z,x=z.version,S=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new ri(new Tu(2,2),new Ji({name:"BackgroundMaterial",uniforms:oo(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=wt.getTransfer(z.colorSpace)!==bt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||x!==z.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,v=z,x=z.version,S=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,C){L.getRGB(Kl,P_(r)),s.buffers.color.setClear(Kl.r,Kl.g,Kl.b,C,c)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,C=1){f.set(L),h=C,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,_(f,h)},render:T,addToRenderList:y,dispose:D}}function CE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=x(null);let l=a,c=!1;function f(R,H,de,W,le){let ce=!1;const oe=v(W,de,H);l!==oe&&(l=oe,p(l.object)),ce=S(R,W,de,le),ce&&M(R,W,de,le),le!==null&&e.update(le,r.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,C(R,H,de,W),le!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function g(R){return r.deleteVertexArray(R)}function v(R,H,de){const W=de.wireframe===!0;let le=s[R.id];le===void 0&&(le={},s[R.id]=le);let ce=le[H.id];ce===void 0&&(ce={},le[H.id]=ce);let oe=ce[W];return oe===void 0&&(oe=x(h()),ce[W]=oe),oe}function x(R){const H=[],de=[],W=[];for(let le=0;le<t;le++)H[le]=0,de[le]=0,W[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:de,attributeDivisors:W,object:R,attributes:{},index:null}}function S(R,H,de,W){const le=l.attributes,ce=H.attributes;let oe=0;const ae=de.getAttributes();for(const k in ae)if(ae[k].location>=0){const te=le[k];let N=ce[k];if(N===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),te===void 0||te.attribute!==N||N&&te.data!==N.data)return!0;oe++}return l.attributesNum!==oe||l.index!==W}function M(R,H,de,W){const le={},ce=H.attributes;let oe=0;const ae=de.getAttributes();for(const k in ae)if(ae[k].location>=0){let te=ce[k];te===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));const N={};N.attribute=te,te&&te.data&&(N.data=te.data),le[k]=N,oe++}l.attributes=le,l.attributesNum=oe,l.index=W}function T(){const R=l.newAttributes;for(let H=0,de=R.length;H<de;H++)R[H]=0}function y(R){_(R,0)}function _(R,H){const de=l.newAttributes,W=l.enabledAttributes,le=l.attributeDivisors;de[R]=1,W[R]===0&&(r.enableVertexAttribArray(R),W[R]=1),le[R]!==H&&(r.vertexAttribDivisor(R,H),le[R]=H)}function D(){const R=l.newAttributes,H=l.enabledAttributes;for(let de=0,W=H.length;de<W;de++)H[de]!==R[de]&&(r.disableVertexAttribArray(de),H[de]=0)}function L(R,H,de,W,le,ce,oe){oe===!0?r.vertexAttribIPointer(R,H,de,le,ce):r.vertexAttribPointer(R,H,de,W,le,ce)}function C(R,H,de,W){T();const le=W.attributes,ce=de.getAttributes(),oe=H.defaultAttributeValues;for(const ae in ce){const k=ce[ae];if(k.location>=0){let ne=le[ae];if(ne===void 0&&(ae==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),ae==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),ne!==void 0){const te=ne.normalized,N=ne.itemSize,$=e.get(ne);if($===void 0)continue;const we=$.buffer,q=$.type,fe=$.bytesPerElement,ie=q===r.INT||q===r.UNSIGNED_INT||ne.gpuType===jd;if(ne.isInterleavedBufferAttribute){const he=ne.data,_e=he.stride,Ae=ne.offset;if(he.isInstancedInterleavedBuffer){for(let De=0;De<k.locationSize;De++)_(k.location+De,he.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let De=0;De<k.locationSize;De++)y(k.location+De);r.bindBuffer(r.ARRAY_BUFFER,we);for(let De=0;De<k.locationSize;De++)L(k.location+De,N/k.locationSize,q,te,_e*fe,(Ae+N/k.locationSize*De)*fe,ie)}else{if(ne.isInstancedBufferAttribute){for(let he=0;he<k.locationSize;he++)_(k.location+he,ne.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let he=0;he<k.locationSize;he++)y(k.location+he);r.bindBuffer(r.ARRAY_BUFFER,we);for(let he=0;he<k.locationSize;he++)L(k.location+he,N/k.locationSize,q,te,N*fe,N/k.locationSize*he*fe,ie)}}else if(oe!==void 0){const te=oe[ae];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(k.location,te);break;case 3:r.vertexAttrib3fv(k.location,te);break;case 4:r.vertexAttrib4fv(k.location,te);break;default:r.vertexAttrib1fv(k.location,te)}}}}D()}function z(){X();for(const R in s){const H=s[R];for(const de in H){const W=H[de];for(const le in W)g(W[le].object),delete W[le];delete H[de]}delete s[R]}}function F(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const de in H){const W=H[de];for(const le in W)g(W[le].object),delete W[le];delete H[de]}delete s[R.id]}function U(R){for(const H in s){const de=s[H];if(de[R.id]===void 0)continue;const W=de[R.id];for(const le in W)g(W[le].object),delete W[le];delete de[R.id]}}function X(){P(),c=!0,l!==a&&(l=a,p(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:P,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function PE(r,e,t){let s;function a(p){s=p}function l(p,g){r.drawArrays(s,p,g),t.update(g,s,1)}function c(p,g,v){v!==0&&(r.drawArraysInstanced(s,p,g,v),t.update(g,s,v))}function f(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,v);let S=0;for(let M=0;M<v;M++)S+=g[M];t.update(S,s,1)}function h(p,g,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)c(p[M],g[M],x[M]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T]*x[T];t.update(M,s,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function bE(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(U){return!(U!==_i&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const X=U===pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Pi&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Ki&&!X)}function h(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),z=M>0,F=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:z,maxSamples:F}}function LE(r){const e=this;let t=null,s=0,a=!1,l=!1;const c=new es,f=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||s!==0||a;return a=x,s=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){t=g(v,x,0)},this.setState=function(v,x,S){const M=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,_=r.get(v);if(!a||M===null||M.length===0||l&&!y)l?g(null):p();else{const D=l?0:s,L=D*4;let C=_.clippingState||null;h.value=C,C=g(M,x,L,S);for(let z=0;z!==L;++z)C[z]=t[z];_.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,x,S,M){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=h.value,M!==!0||y===null){const _=S+T*4,D=x.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,C=S;L!==T;++L,C+=4)c.copy(v[L]).applyMatrix4(D,f),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function DE(r){let e=new WeakMap;function t(c,f){return f===rd?c.mapping=io:f===sd&&(c.mapping=ro),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===rd||f===sd)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new Ay(h.height);return p.fromEquirectangularTexture(r,c),e.set(c,p),c.addEventListener("dispose",a),t(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const Qs=4,Mg=[.125,.215,.35,.446,.526,.582],is=20,Bf=new I_,Eg=new vt;let zf=null,Hf=0,Vf=0,Gf=!1;const ts=(1+Math.sqrt(5))/2,$s=1/ts,Tg=[new ee(-ts,$s,0),new ee(ts,$s,0),new ee(-$s,0,ts),new ee($s,0,ts),new ee(0,ts,-$s),new ee(0,ts,$s),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)],IE=new ee;class wg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100,l={}){const{size:c=256,position:f=IE}=l;zf=this._renderer.getRenderTarget(),Hf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,a,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zf,Hf,Vf),this._renderer.xr.enabled=Gf,e.scissorTest=!1,Zl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zf=this._renderer.getRenderTarget(),Hf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:pa,format:_i,colorSpace:so,depthBuffer:!1},a=Ag(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UE(l)),this._blurMaterial=NE(l,e,t)}return a}_compileMaterial(e){const t=new ri(this._lodPlanes[0],e);this._renderer.compile(t,Bf)}_sceneToCubeUV(e,t,s,a,l){const h=new ii(90,1,t,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(Eg),v.toneMapping=Dr,v.autoClear=!1;const M=new mu({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),T=new ri(new va,M);let y=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,y=!0):(M.color.copy(Eg),y=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(h.up.set(0,p[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[D],l.y,l.z)):L===1?(h.up.set(0,0,p[D]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[D],l.z)):(h.up.set(0,p[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[D]));const C=this._cubeSize;Zl(a,L*C,D>2?C:0,C,C),v.setRenderTarget(a),y&&v.render(T,h),v.render(e,h)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=_}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===io||e.mapping===ro;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new ri(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Zl(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(c,Bf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Tg[(a-l-1)%Tg.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ri(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*is-1),T=l/M,y=isFinite(l)?1+Math.floor(g*T):is;y>is&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${is}`);const _=[];let D=0;for(let U=0;U<is;++U){const X=U/T,P=Math.exp(-X*X/2);_.push(P),U===0?D+=P:U<y&&(D+=2*P)}for(let U=0;U<_.length;U++)_[U]=_[U]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:L}=this;x.dTheta.value=M,x.mipInt.value=L-s;const C=this._sizeLods[a],z=3*C*(a>L-Qs?a-L+Qs:0),F=4*(this._cubeSize-C);Zl(t,z,F,3*C,2*C),h.setRenderTarget(t),h.render(v,Bf)}}function UE(r){const e=[],t=[],s=[];let a=r;const l=r-Qs+1+Mg.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let h=1/f;c>r-Qs?h=Mg[c-r+Qs-1]:c===0&&(h=0),s.push(h);const p=1/(f-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,M=6,T=3,y=2,_=1,D=new Float32Array(T*M*S),L=new Float32Array(y*M*S),C=new Float32Array(_*M*S);for(let F=0;F<S;F++){const U=F%3*2/3-1,X=F>2?0:-1,P=[U,X,0,U+2/3,X,0,U+2/3,X+1,0,U,X,0,U+2/3,X+1,0,U,X+1,0];D.set(P,T*M*F),L.set(x,y*M*F);const R=[F,F,F,F,F,F];C.set(R,_*M*F)}const z=new Hn;z.setAttribute("position",new si(D,T)),z.setAttribute("uv",new si(L,y)),z.setAttribute("faceIndex",new si(C,_)),e.push(z),a>Qs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Ag(r,e,t){const s=new cs(r,e,t);return s.texture.mapping=Eu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Zl(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function NE(r,e,t){const s=new Float32Array(is),a=new ee(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Rg(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Cg(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function FE(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,p=h===rd||h===sd,g=h===io||h===ro;if(p||g){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new wg(r)),v=p?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new wg(r)),v=p?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function OE(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&ou("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function kE(r,e,t,s){const a={},l=new WeakMap;function c(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",c),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(v,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function h(v){const x=v.attributes;for(const S in x)e.update(x[S],r.ARRAY_BUFFER)}function p(v){const x=[],S=v.index,M=v.attributes.position;let T=0;if(S!==null){const D=S.array;T=S.version;for(let L=0,C=D.length;L<C;L+=3){const z=D[L+0],F=D[L+1],U=D[L+2];x.push(z,F,F,U,U,z)}}else if(M!==void 0){const D=M.array;T=M.version;for(let L=0,C=D.length/3-1;L<C;L+=3){const z=L+0,F=L+1,U=L+2;x.push(z,F,F,U,U,z)}}else return;const y=new(E_(x)?C_:R_)(x,1);y.version=T;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function g(v){const x=l.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function BE(r,e,t){let s;function a(x){s=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,S){r.drawElements(s,S,l,x*c),t.update(S,s,1)}function p(x,S,M){M!==0&&(r.drawElementsInstanced(s,S,l,x*c,M),t.update(S,s,M))}function g(x,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,x,0,M);let y=0;for(let _=0;_<M;_++)y+=S[_];t.update(y,s,1)}function v(x,S,M,T){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/c,S[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,x,0,T,0,M);let _=0;for(let D=0;D<M;D++)_+=S[D]*T[D];t.update(_,s,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function zE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function HE(r,e,t){const s=new WeakMap,a=new jt;function l(c,f,h){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let x=s.get(f);if(x===void 0||x.count!==v){let R=function(){X.dispose(),s.delete(f),f.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const M=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),T===!0&&(C=2),y===!0&&(C=3);let z=f.attributes.position.count*C,F=1;z>e.maxTextureSize&&(F=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const U=new Float32Array(z*F*4*v),X=new T_(U,z,F,v);X.type=Ki,X.needsUpdate=!0;const P=C*4;for(let H=0;H<v;H++){const de=_[H],W=D[H],le=L[H],ce=z*F*4*H;for(let oe=0;oe<de.count;oe++){const ae=oe*P;M===!0&&(a.fromBufferAttribute(de,oe),U[ce+ae+0]=a.x,U[ce+ae+1]=a.y,U[ce+ae+2]=a.z,U[ce+ae+3]=0),T===!0&&(a.fromBufferAttribute(W,oe),U[ce+ae+4]=a.x,U[ce+ae+5]=a.y,U[ce+ae+6]=a.z,U[ce+ae+7]=0),y===!0&&(a.fromBufferAttribute(le,oe),U[ce+ae+8]=a.x,U[ce+ae+9]=a.y,U[ce+ae+10]=a.z,U[ce+ae+11]=le.itemSize===4?a.w:1)}}x={count:v,texture:X,size:new Ct(z,F)},s.set(f,x),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const T=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",T),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function VE(r,e,t,s){let a=new WeakMap;function l(h){const p=s.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return v}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const N_=new bn,Pg=new D_(1,1),F_=new T_,O_=new uy,k_=new L_,bg=[],Lg=[],Dg=new Float32Array(16),Ig=new Float32Array(9),Ug=new Float32Array(4);function mo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=bg[a];if(l===void 0&&(l=new Float32Array(a),bg[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,r[c].toArray(l,f)}return l}function tn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function nn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function wu(r,e){let t=Lg[e];t===void 0&&(t=new Int32Array(e),Lg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function GE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function WE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2fv(this.addr,e),nn(t,e)}}function XE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;r.uniform3fv(this.addr,e),nn(t,e)}}function YE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4fv(this.addr,e),nn(t,e)}}function jE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,s))return;Ug.set(s),r.uniformMatrix2fv(this.addr,!1,Ug),nn(t,s)}}function qE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,s))return;Ig.set(s),r.uniformMatrix3fv(this.addr,!1,Ig),nn(t,s)}}function $E(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,s))return;Dg.set(s),r.uniformMatrix4fv(this.addr,!1,Dg),nn(t,s)}}function KE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ZE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2iv(this.addr,e),nn(t,e)}}function QE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3iv(this.addr,e),nn(t,e)}}function JE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4iv(this.addr,e),nn(t,e)}}function eT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function tT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2uiv(this.addr,e),nn(t,e)}}function nT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3uiv(this.addr,e),nn(t,e)}}function iT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4uiv(this.addr,e),nn(t,e)}}function rT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Pg.compareFunction=M_,l=Pg):l=N_,t.setTexture2D(e||l,a)}function sT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||O_,a)}function oT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||k_,a)}function aT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||F_,a)}function lT(r){switch(r){case 5126:return GE;case 35664:return WE;case 35665:return XE;case 35666:return YE;case 35674:return jE;case 35675:return qE;case 35676:return $E;case 5124:case 35670:return KE;case 35667:case 35671:return ZE;case 35668:case 35672:return QE;case 35669:case 35673:return JE;case 5125:return eT;case 36294:return tT;case 36295:return nT;case 36296:return iT;case 35678:case 36198:case 36298:case 36306:case 35682:return rT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return oT;case 36289:case 36303:case 36311:case 36292:return aT}}function uT(r,e){r.uniform1fv(this.addr,e)}function cT(r,e){const t=mo(e,this.size,2);r.uniform2fv(this.addr,t)}function fT(r,e){const t=mo(e,this.size,3);r.uniform3fv(this.addr,t)}function dT(r,e){const t=mo(e,this.size,4);r.uniform4fv(this.addr,t)}function hT(r,e){const t=mo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function pT(r,e){const t=mo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function mT(r,e){const t=mo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function gT(r,e){r.uniform1iv(this.addr,e)}function _T(r,e){r.uniform2iv(this.addr,e)}function vT(r,e){r.uniform3iv(this.addr,e)}function xT(r,e){r.uniform4iv(this.addr,e)}function yT(r,e){r.uniform1uiv(this.addr,e)}function ST(r,e){r.uniform2uiv(this.addr,e)}function MT(r,e){r.uniform3uiv(this.addr,e)}function ET(r,e){r.uniform4uiv(this.addr,e)}function TT(r,e,t){const s=this.cache,a=e.length,l=wu(t,a);tn(s,l)||(r.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||N_,l[c])}function wT(r,e,t){const s=this.cache,a=e.length,l=wu(t,a);tn(s,l)||(r.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||O_,l[c])}function AT(r,e,t){const s=this.cache,a=e.length,l=wu(t,a);tn(s,l)||(r.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||k_,l[c])}function RT(r,e,t){const s=this.cache,a=e.length,l=wu(t,a);tn(s,l)||(r.uniform1iv(this.addr,l),nn(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||F_,l[c])}function CT(r){switch(r){case 5126:return uT;case 35664:return cT;case 35665:return fT;case 35666:return dT;case 35674:return hT;case 35675:return pT;case 35676:return mT;case 5124:case 35670:return gT;case 35667:case 35671:return _T;case 35668:case 35672:return vT;case 35669:case 35673:return xT;case 5125:return yT;case 36294:return ST;case 36295:return MT;case 36296:return ET;case 35678:case 36198:case 36298:case 36306:case 35682:return TT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return AT;case 36289:case 36303:case 36311:case 36292:return RT}}class PT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=lT(t.type)}}class bT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CT(t.type)}}class LT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const Wf=/(\w+)(\])?(\[|\.)?/g;function Ng(r,e){r.seq.push(e),r.map[e.id]=e}function DT(r,e,t){const s=r.name,a=s.length;for(Wf.lastIndex=0;;){const l=Wf.exec(s),c=Wf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){Ng(t,p===void 0?new PT(f,r,e):new bT(f,r,e));break}else{let v=t.map[f];v===void 0&&(v=new LT(f),Ng(t,v)),t=v}}}class au{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);DT(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Fg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const IT=37297;let UT=0;function NT(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}const Og=new ut;function FT(r){wt._getMatrix(Og,wt.workingColorSpace,r);const e=`mat3( ${Og.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(r)){case hu:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function kg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+NT(r.getShaderSource(e),c)}else return a}function OT(r,e){const t=FT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kT(r,e){let t;switch(e){case yx:t="Linear";break;case Sx:t="Reinhard";break;case Mx:t="Cineon";break;case Ex:t="ACESFilmic";break;case wx:t="AgX";break;case Ax:t="Neutral";break;case Tx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ql=new ee;function BT(){wt.getLuminanceCoefficients(Ql);const r=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function HT(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function VT(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:f}}return t}function ta(r){return r!==""}function Bg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(r){return r.replace(GT,XT)}const WT=new Map;function XT(r,e){let t=ct[e];if(t===void 0){const s=WT.get(e);if(s!==void 0)t=ct[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Fd(t)}const YT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(r){return r.replace(YT,jT)}function jT(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Vg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===f_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===J0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function $T(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case Eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function ZT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Yd:e="ENVMAP_BLENDING_MULTIPLY";break;case vx:e="ENVMAP_BLENDING_MIX";break;case xx:e="ENVMAP_BLENDING_ADD";break}return e}function QT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function JT(r,e,t,s){const a=r.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=qT(t),p=$T(t),g=KT(t),v=ZT(t),x=QT(t),S=zT(t),M=HT(l),T=a.createProgram();let y,_,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ta).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ta).join(`
`),_.length>0&&(_+=`
`)):(y=[Vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),_=[Vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dr?"#define TONE_MAPPING":"",t.toneMapping!==Dr?ct.tonemapping_pars_fragment:"",t.toneMapping!==Dr?kT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,OT("linearToOutputTexel",t.outputColorSpace),BT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),c=Fd(c),c=Bg(c,t),c=zg(c,t),f=Fd(f),f=Bg(f,t),f=zg(f,t),c=Hg(c),f=Hg(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===jm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=D+y+c,C=D+_+f,z=Fg(a,a.VERTEX_SHADER,L),F=Fg(a,a.FRAGMENT_SHADER,C);a.attachShader(T,z),a.attachShader(T,F),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function U(H){if(r.debug.checkShaderErrors){const de=a.getProgramInfoLog(T).trim(),W=a.getShaderInfoLog(z).trim(),le=a.getShaderInfoLog(F).trim();let ce=!0,oe=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ce=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,T,z,F);else{const ae=kg(a,z,"vertex"),k=kg(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+de+`
`+ae+`
`+k)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(W===""||le==="")&&(oe=!1);oe&&(H.diagnostics={runnable:ce,programLog:de,vertexShader:{log:W,prefix:y},fragmentShader:{log:le,prefix:_}})}a.deleteShader(z),a.deleteShader(F),X=new au(a,T),P=VT(a,T)}let X;this.getUniforms=function(){return X===void 0&&U(this),X};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(T,IT)),R},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=F,this}let e1=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new n1(e),t.set(e,s)),s}}class n1{constructor(e){this.id=e1++,this.code=e,this.usedTimes=0}}function i1(r,e,t,s,a,l,c){const f=new w_,h=new t1,p=new Set,g=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,R,H,de,W){const le=de.fog,ce=W.geometry,oe=P.isMeshStandardMaterial?de.environment:null,ae=(P.isMeshStandardMaterial?t:e).get(P.envMap||oe),k=ae&&ae.mapping===Eu?ae.image.height:null,ne=M[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const te=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,N=te!==void 0?te.length:0;let $=0;ce.morphAttributes.position!==void 0&&($=1),ce.morphAttributes.normal!==void 0&&($=2),ce.morphAttributes.color!==void 0&&($=3);let we,q,fe,ie;if(ne){const St=Ai[ne];we=St.vertexShader,q=St.fragmentShader}else we=P.vertexShader,q=P.fragmentShader,h.update(P),fe=h.getVertexShaderID(P),ie=h.getFragmentShaderID(P);const he=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Ae=W.isInstancedMesh===!0,De=W.isBatchedMesh===!0,it=!!P.map,rt=!!P.matcap,st=!!ae,O=!!P.aoMap,Dt=!!P.lightMap,dt=!!P.bumpMap,ht=!!P.normalMap,Ye=!!P.displacementMap,Pt=!!P.emissiveMap,We=!!P.metalnessMap,b=!!P.roughnessMap,w=P.anisotropy>0,J=P.clearcoat>0,me=P.dispersion>0,ye=P.iridescence>0,pe=P.sheen>0,Ge=P.transmission>0,Re=w&&!!P.anisotropyMap,$e=J&&!!P.clearcoatMap,qe=J&&!!P.clearcoatNormalMap,Se=J&&!!P.clearcoatRoughnessMap,Oe=ye&&!!P.iridescenceMap,Je=ye&&!!P.iridescenceThicknessMap,et=pe&&!!P.sheenColorMap,ke=pe&&!!P.sheenRoughnessMap,pt=!!P.specularMap,ot=!!P.specularColorMap,At=!!P.specularIntensityMap,G=Ge&&!!P.transmissionMap,Ce=Ge&&!!P.thicknessMap,ue=!!P.gradientMap,ge=!!P.alphaMap,Ie=P.alphaTest>0,Le=!!P.alphaHash,at=!!P.extensions;let Ut=Dr;P.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const Qt={shaderID:ne,shaderType:P.type,shaderName:P.name,vertexShader:we,fragmentShader:q,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:ie,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:De,batchingColor:De&&W._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&W.instanceColor!==null,instancingMorph:Ae&&W.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:so,alphaToCoverage:!!P.alphaToCoverage,map:it,matcap:rt,envMap:st,envMapMode:st&&ae.mapping,envMapCubeUVHeight:k,aoMap:O,lightMap:Dt,bumpMap:dt,normalMap:ht,displacementMap:x&&Ye,emissiveMap:Pt,normalMapObjectSpace:ht&&P.normalMapType===bx,normalMapTangentSpace:ht&&P.normalMapType===S_,metalnessMap:We,roughnessMap:b,anisotropy:w,anisotropyMap:Re,clearcoat:J,clearcoatMap:$e,clearcoatNormalMap:qe,clearcoatRoughnessMap:Se,dispersion:me,iridescence:ye,iridescenceMap:Oe,iridescenceThicknessMap:Je,sheen:pe,sheenColorMap:et,sheenRoughnessMap:ke,specularMap:pt,specularColorMap:ot,specularIntensityMap:At,transmission:Ge,transmissionMap:G,thicknessMap:Ce,gradientMap:ue,opaque:P.transparent===!1&&P.blending===eo&&P.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ie,alphaHash:Le,combine:P.combine,mapUv:it&&T(P.map.channel),aoMapUv:O&&T(P.aoMap.channel),lightMapUv:Dt&&T(P.lightMap.channel),bumpMapUv:dt&&T(P.bumpMap.channel),normalMapUv:ht&&T(P.normalMap.channel),displacementMapUv:Ye&&T(P.displacementMap.channel),emissiveMapUv:Pt&&T(P.emissiveMap.channel),metalnessMapUv:We&&T(P.metalnessMap.channel),roughnessMapUv:b&&T(P.roughnessMap.channel),anisotropyMapUv:Re&&T(P.anisotropyMap.channel),clearcoatMapUv:$e&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:qe&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&T(P.sheenRoughnessMap.channel),specularMapUv:pt&&T(P.specularMap.channel),specularColorMapUv:ot&&T(P.specularColorMap.channel),specularIntensityMapUv:At&&T(P.specularIntensityMap.channel),transmissionMapUv:G&&T(P.transmissionMap.channel),thicknessMapUv:Ce&&T(P.thicknessMap.channel),alphaMapUv:ge&&T(P.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(ht||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ce.attributes.uv&&(it||ge),fog:!!le,useFog:P.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:_e,skinning:W.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:$,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:it&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===bt,decodeVideoTextureEmissive:Pt&&P.emissiveMap.isVideoTexture===!0&&wt.getTransfer(P.emissiveMap.colorSpace)===bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===$i,flipSided:P.side===Bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:at&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&P.extensions.multiDraw===!0||De)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Qt.vertexUv1s=p.has(1),Qt.vertexUv2s=p.has(2),Qt.vertexUv3s=p.has(3),p.clear(),Qt}function _(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)R.push(H),R.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(D(R,P),L(R,P),R.push(r.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function D(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function L(P,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),P.push(f.mask)}function C(P){const R=M[P.type];let H;if(R){const de=Ai[R];H=My.clone(de.uniforms)}else H=P.uniforms;return H}function z(P,R){let H;for(let de=0,W=g.length;de<W;de++){const le=g[de];if(le.cacheKey===R){H=le,++H.usedTimes;break}}return H===void 0&&(H=new JT(r,R,P,l),g.push(H)),H}function F(P){if(--P.usedTimes===0){const R=g.indexOf(P);g[R]=g[g.length-1],g.pop(),P.destroy()}}function U(P){h.remove(P)}function X(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:C,acquireProgram:z,releaseProgram:F,releaseShaderCache:U,programs:g,dispose:X}}function r1(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function s(c){r.delete(c)}function a(c,f,h){r.get(c)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function s1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wg(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(v,x,S,M,T,y){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:M,renderOrder:v.renderOrder,z:T,group:y},r[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=M,_.renderOrder=v.renderOrder,_.z=T,_.group=y),e++,_}function f(v,x,S,M,T,y){const _=c(v,x,S,M,T,y);S.transmission>0?s.push(_):S.transparent===!0?a.push(_):t.push(_)}function h(v,x,S,M,T,y){const _=c(v,x,S,M,T,y);S.transmission>0?s.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function p(v,x){t.length>1&&t.sort(v||s1),s.length>1&&s.sort(x||Gg),a.length>1&&a.sort(x||Gg)}function g(){for(let v=e,x=r.length;v<x;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:h,finish:g,sort:p}}function o1(){let r=new WeakMap;function e(s,a){const l=r.get(s);let c;return l===void 0?(c=new Wg,r.set(s,[c])):a>=l.length?(c=new Wg,l.push(c)):c=l[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function a1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new vt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return r[e.id]=t,t}}}function l1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let u1=0;function c1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function f1(r){const e=new a1,t=l1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ee);const a=new ee,l=new zt,c=new zt;function f(p){let g=0,v=0,x=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let S=0,M=0,T=0,y=0,_=0,D=0,L=0,C=0,z=0,F=0,U=0;p.sort(c1);for(let P=0,R=p.length;P<R;P++){const H=p[P],de=H.color,W=H.intensity,le=H.distance,ce=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=de.r*W,v+=de.g*W,x+=de.b*W;else if(H.isLightProbe){for(let oe=0;oe<9;oe++)s.probe[oe].addScaledVector(H.sh.coefficients[oe],W);U++}else if(H.isDirectionalLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ae=H.shadow,k=t.get(H);k.shadowIntensity=ae.intensity,k.shadowBias=ae.bias,k.shadowNormalBias=ae.normalBias,k.shadowRadius=ae.radius,k.shadowMapSize=ae.mapSize,s.directionalShadow[S]=k,s.directionalShadowMap[S]=ce,s.directionalShadowMatrix[S]=H.shadow.matrix,D++}s.directional[S]=oe,S++}else if(H.isSpotLight){const oe=e.get(H);oe.position.setFromMatrixPosition(H.matrixWorld),oe.color.copy(de).multiplyScalar(W),oe.distance=le,oe.coneCos=Math.cos(H.angle),oe.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),oe.decay=H.decay,s.spot[T]=oe;const ae=H.shadow;if(H.map&&(s.spotLightMap[z]=H.map,z++,ae.updateMatrices(H),H.castShadow&&F++),s.spotLightMatrix[T]=ae.matrix,H.castShadow){const k=t.get(H);k.shadowIntensity=ae.intensity,k.shadowBias=ae.bias,k.shadowNormalBias=ae.normalBias,k.shadowRadius=ae.radius,k.shadowMapSize=ae.mapSize,s.spotShadow[T]=k,s.spotShadowMap[T]=ce,C++}T++}else if(H.isRectAreaLight){const oe=e.get(H);oe.color.copy(de).multiplyScalar(W),oe.halfWidth.set(H.width*.5,0,0),oe.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=oe,y++}else if(H.isPointLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),oe.distance=H.distance,oe.decay=H.decay,H.castShadow){const ae=H.shadow,k=t.get(H);k.shadowIntensity=ae.intensity,k.shadowBias=ae.bias,k.shadowNormalBias=ae.normalBias,k.shadowRadius=ae.radius,k.shadowMapSize=ae.mapSize,k.shadowCameraNear=ae.camera.near,k.shadowCameraFar=ae.camera.far,s.pointShadow[M]=k,s.pointShadowMap[M]=ce,s.pointShadowMatrix[M]=H.shadow.matrix,L++}s.point[M]=oe,M++}else if(H.isHemisphereLight){const oe=e.get(H);oe.skyColor.copy(H.color).multiplyScalar(W),oe.groundColor.copy(H.groundColor).multiplyScalar(W),s.hemi[_]=oe,_++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==S||X.pointLength!==M||X.spotLength!==T||X.rectAreaLength!==y||X.hemiLength!==_||X.numDirectionalShadows!==D||X.numPointShadows!==L||X.numSpotShadows!==C||X.numSpotMaps!==z||X.numLightProbes!==U)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=y,s.point.length=M,s.hemi.length=_,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=C+z-F,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=U,X.directionalLength=S,X.pointLength=M,X.spotLength=T,X.rectAreaLength=y,X.hemiLength=_,X.numDirectionalShadows=D,X.numPointShadows=L,X.numSpotShadows=C,X.numSpotMaps=z,X.numLightProbes=U,s.version=u1++)}function h(p,g){let v=0,x=0,S=0,M=0,T=0;const y=g.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const L=p[_];if(L.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(L.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const C=s.rectArea[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(L.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const C=s.point[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const C=s.hemi[T];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:f,setupView:h,state:s}}function Xg(r){const e=new f1(r),t=[],s=[];function a(g){p.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function c(g){s.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function d1(r){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Xg(r),e.set(a,[f])):l>=c.length?(f=new Xg(r),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const h1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function m1(r,e,t){let s=new nh;const a=new Ct,l=new Ct,c=new jt,f=new Uy({depthPacking:Px}),h=new Ny,p={},g=t.maxTextureSize,v={[Ir]:Bn,[Bn]:Ir,[$i]:$i},x=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:h1,fragmentShader:p1}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const M=new Hn;M.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ri(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f_;let _=this.type;this.render=function(F,U,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const P=r.getRenderTarget(),R=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),de=r.state;de.setBlending(Lr),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const W=_!==ji&&this.type===ji,le=_===ji&&this.type!==ji;for(let ce=0,oe=F.length;ce<oe;ce++){const ae=F[ce],k=ae.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const ne=k.getFrameExtents();if(a.multiply(ne),l.copy(k.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/ne.x),a.x=l.x*ne.x,k.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/ne.y),a.y=l.y*ne.y,k.mapSize.y=l.y)),k.map===null||W===!0||le===!0){const N=this.type!==ji?{minFilter:vi,magFilter:vi}:{};k.map!==null&&k.map.dispose(),k.map=new cs(a.x,a.y,N),k.map.texture.name=ae.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const te=k.getViewportCount();for(let N=0;N<te;N++){const $=k.getViewport(N);c.set(l.x*$.x,l.y*$.y,l.x*$.z,l.y*$.w),de.viewport(c),k.updateMatrices(ae,N),s=k.getFrustum(),C(U,X,k.camera,ae,this.type)}k.isPointLightShadow!==!0&&this.type===ji&&D(k,X),k.needsUpdate=!1}_=this.type,y.needsUpdate=!1,r.setRenderTarget(P,R,H)};function D(F,U){const X=e.update(T);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new cs(a.x,a.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(U,null,X,x,T,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(U,null,X,S,T,null)}function L(F,U,X,P){let R=null;const H=X.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)R=H;else if(R=X.isPointLight===!0?h:f,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const de=R.uuid,W=U.uuid;let le=p[de];le===void 0&&(le={},p[de]=le);let ce=le[W];ce===void 0&&(ce=R.clone(),le[W]=ce,U.addEventListener("dispose",z)),R=ce}if(R.visible=U.visible,R.wireframe=U.wireframe,P===ji?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:v[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const de=r.properties.get(R);de.light=X}return R}function C(F,U,X,P,R){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===ji)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,F.matrixWorld);const W=e.update(F),le=F.material;if(Array.isArray(le)){const ce=W.groups;for(let oe=0,ae=ce.length;oe<ae;oe++){const k=ce[oe],ne=le[k.materialIndex];if(ne&&ne.visible){const te=L(F,ne,P,R);F.onBeforeShadow(r,F,U,X,W,te,k),r.renderBufferDirect(X,null,W,te,F,k),F.onAfterShadow(r,F,U,X,W,te,k)}}}else if(le.visible){const ce=L(F,le,P,R);F.onBeforeShadow(r,F,U,X,W,ce,null),r.renderBufferDirect(X,null,W,ce,F,null),F.onAfterShadow(r,F,U,X,W,ce,null)}}const de=F.children;for(let W=0,le=de.length;W<le;W++)C(de[W],U,X,P,R)}function z(F){F.target.removeEventListener("dispose",z);for(const X in p){const P=p[X],R=F.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const g1={[Zf]:Qf,[Jf]:nd,[ed]:id,[no]:td,[Qf]:Zf,[nd]:Jf,[id]:ed,[td]:no};function _1(r,e){function t(){let G=!1;const Ce=new jt;let ue=null;const ge=new jt(0,0,0,0);return{setMask:function(Ie){ue!==Ie&&!G&&(r.colorMask(Ie,Ie,Ie,Ie),ue=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,Le,at,Ut,Qt){Qt===!0&&(Ie*=Ut,Le*=Ut,at*=Ut),Ce.set(Ie,Le,at,Ut),ge.equals(Ce)===!1&&(r.clearColor(Ie,Le,at,Ut),ge.copy(Ce))},reset:function(){G=!1,ue=null,ge.set(-1,0,0,0)}}}function s(){let G=!1,Ce=!1,ue=null,ge=null,Ie=null;return{setReversed:function(Le){if(Ce!==Le){const at=e.get("EXT_clip_control");Le?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Ce=Le;const Ut=Ie;Ie=null,this.setClear(Ut)}},getReversed:function(){return Ce},setTest:function(Le){Le?he(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(Le){ue!==Le&&!G&&(r.depthMask(Le),ue=Le)},setFunc:function(Le){if(Ce&&(Le=g1[Le]),ge!==Le){switch(Le){case Zf:r.depthFunc(r.NEVER);break;case Qf:r.depthFunc(r.ALWAYS);break;case Jf:r.depthFunc(r.LESS);break;case no:r.depthFunc(r.LEQUAL);break;case ed:r.depthFunc(r.EQUAL);break;case td:r.depthFunc(r.GEQUAL);break;case nd:r.depthFunc(r.GREATER);break;case id:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=Le}},setLocked:function(Le){G=Le},setClear:function(Le){Ie!==Le&&(Ce&&(Le=1-Le),r.clearDepth(Le),Ie=Le)},reset:function(){G=!1,ue=null,ge=null,Ie=null,Ce=!1}}}function a(){let G=!1,Ce=null,ue=null,ge=null,Ie=null,Le=null,at=null,Ut=null,Qt=null;return{setTest:function(St){G||(St?he(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(St){Ce!==St&&!G&&(r.stencilMask(St),Ce=St)},setFunc:function(St,Ln,En){(ue!==St||ge!==Ln||Ie!==En)&&(r.stencilFunc(St,Ln,En),ue=St,ge=Ln,Ie=En)},setOp:function(St,Ln,En){(Le!==St||at!==Ln||Ut!==En)&&(r.stencilOp(St,Ln,En),Le=St,at=Ln,Ut=En)},setLocked:function(St){G=St},setClear:function(St){Qt!==St&&(r.clearStencil(St),Qt=St)},reset:function(){G=!1,Ce=null,ue=null,ge=null,Ie=null,Le=null,at=null,Ut=null,Qt=null}}}const l=new t,c=new s,f=new a,h=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,S=[],M=null,T=!1,y=null,_=null,D=null,L=null,C=null,z=null,F=null,U=new vt(0,0,0),X=0,P=!1,R=null,H=null,de=null,W=null,le=null;const ce=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ae=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(k)[1]),oe=ae>=1):k.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),oe=ae>=2);let ne=null,te={};const N=r.getParameter(r.SCISSOR_BOX),$=r.getParameter(r.VIEWPORT),we=new jt().fromArray(N),q=new jt().fromArray($);function fe(G,Ce,ue,ge){const Ie=new Uint8Array(4),Le=r.createTexture();r.bindTexture(G,Le),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<ue;at++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Ce+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Le}const ie={};ie[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),he(r.DEPTH_TEST),c.setFunc(no),dt(!1),ht(Hm),he(r.CULL_FACE),O(Lr);function he(G){g[G]!==!0&&(r.enable(G),g[G]=!0)}function _e(G){g[G]!==!1&&(r.disable(G),g[G]=!1)}function Ae(G,Ce){return v[G]!==Ce?(r.bindFramebuffer(G,Ce),v[G]=Ce,G===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ce),G===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function De(G,Ce){let ue=S,ge=!1;if(G){ue=x.get(Ce),ue===void 0&&(ue=[],x.set(Ce,ue));const Ie=G.textures;if(ue.length!==Ie.length||ue[0]!==r.COLOR_ATTACHMENT0){for(let Le=0,at=Ie.length;Le<at;Le++)ue[Le]=r.COLOR_ATTACHMENT0+Le;ue.length=Ie.length,ge=!0}}else ue[0]!==r.BACK&&(ue[0]=r.BACK,ge=!0);ge&&r.drawBuffers(ue)}function it(G){return M!==G?(r.useProgram(G),M=G,!0):!1}const rt={[ns]:r.FUNC_ADD,[tx]:r.FUNC_SUBTRACT,[nx]:r.FUNC_REVERSE_SUBTRACT};rt[ix]=r.MIN,rt[rx]=r.MAX;const st={[sx]:r.ZERO,[ox]:r.ONE,[ax]:r.SRC_COLOR,[$f]:r.SRC_ALPHA,[hx]:r.SRC_ALPHA_SATURATE,[fx]:r.DST_COLOR,[ux]:r.DST_ALPHA,[lx]:r.ONE_MINUS_SRC_COLOR,[Kf]:r.ONE_MINUS_SRC_ALPHA,[dx]:r.ONE_MINUS_DST_COLOR,[cx]:r.ONE_MINUS_DST_ALPHA,[px]:r.CONSTANT_COLOR,[mx]:r.ONE_MINUS_CONSTANT_COLOR,[gx]:r.CONSTANT_ALPHA,[_x]:r.ONE_MINUS_CONSTANT_ALPHA};function O(G,Ce,ue,ge,Ie,Le,at,Ut,Qt,St){if(G===Lr){T===!0&&(_e(r.BLEND),T=!1);return}if(T===!1&&(he(r.BLEND),T=!0),G!==ex){if(G!==y||St!==P){if((_!==ns||C!==ns)&&(r.blendEquation(r.FUNC_ADD),_=ns,C=ns),St)switch(G){case eo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vm:r.blendFunc(r.ONE,r.ONE);break;case Gm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case eo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Gm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Wm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,L=null,z=null,F=null,U.set(0,0,0),X=0,y=G,P=St}return}Ie=Ie||Ce,Le=Le||ue,at=at||ge,(Ce!==_||Ie!==C)&&(r.blendEquationSeparate(rt[Ce],rt[Ie]),_=Ce,C=Ie),(ue!==D||ge!==L||Le!==z||at!==F)&&(r.blendFuncSeparate(st[ue],st[ge],st[Le],st[at]),D=ue,L=ge,z=Le,F=at),(Ut.equals(U)===!1||Qt!==X)&&(r.blendColor(Ut.r,Ut.g,Ut.b,Qt),U.copy(Ut),X=Qt),y=G,P=!1}function Dt(G,Ce){G.side===$i?_e(r.CULL_FACE):he(r.CULL_FACE);let ue=G.side===Bn;Ce&&(ue=!ue),dt(ue),G.blending===eo&&G.transparent===!1?O(Lr):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const ge=G.stencilWrite;f.setTest(ge),ge&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Pt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function dt(G){R!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),R=G)}function ht(G){G!==Z0?(he(r.CULL_FACE),G!==H&&(G===Hm?r.cullFace(r.BACK):G===Q0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),H=G}function Ye(G){G!==de&&(oe&&r.lineWidth(G),de=G)}function Pt(G,Ce,ue){G?(he(r.POLYGON_OFFSET_FILL),(W!==Ce||le!==ue)&&(r.polygonOffset(Ce,ue),W=Ce,le=ue)):_e(r.POLYGON_OFFSET_FILL)}function We(G){G?he(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function b(G){G===void 0&&(G=r.TEXTURE0+ce-1),ne!==G&&(r.activeTexture(G),ne=G)}function w(G,Ce,ue){ue===void 0&&(ne===null?ue=r.TEXTURE0+ce-1:ue=ne);let ge=te[ue];ge===void 0&&(ge={type:void 0,texture:void 0},te[ue]=ge),(ge.type!==G||ge.texture!==Ce)&&(ne!==ue&&(r.activeTexture(ue),ne=ue),r.bindTexture(G,Ce||ie[G]),ge.type=G,ge.texture=Ce)}function J(){const G=te[ne];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{r.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{r.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{r.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{r.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{r.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{r.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{r.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{r.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{r.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{r.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(G){we.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),we.copy(G))}function ke(G){q.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function pt(G,Ce){let ue=p.get(Ce);ue===void 0&&(ue=new WeakMap,p.set(Ce,ue));let ge=ue.get(G);ge===void 0&&(ge=r.getUniformBlockIndex(Ce,G.name),ue.set(G,ge))}function ot(G,Ce){const ge=p.get(Ce).get(G);h.get(Ce)!==ge&&(r.uniformBlockBinding(Ce,ge,G.__bindingPointIndex),h.set(Ce,ge))}function At(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},ne=null,te={},v={},x=new WeakMap,S=[],M=null,T=!1,y=null,_=null,D=null,L=null,C=null,z=null,F=null,U=new vt(0,0,0),X=0,P=!1,R=null,H=null,de=null,W=null,le=null,we.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:he,disable:_e,bindFramebuffer:Ae,drawBuffers:De,useProgram:it,setBlending:O,setMaterial:Dt,setFlipSided:dt,setCullFace:ht,setLineWidth:Ye,setPolygonOffset:Pt,setScissorTest:We,activeTexture:b,bindTexture:w,unbindTexture:J,compressedTexImage2D:me,compressedTexImage3D:ye,texImage2D:Oe,texImage3D:Je,updateUBOMapping:pt,uniformBlockBinding:ot,texStorage2D:qe,texStorage3D:Se,texSubImage2D:pe,texSubImage3D:Ge,compressedTexSubImage2D:Re,compressedTexSubImage3D:$e,scissor:et,viewport:ke,reset:At}}function v1(r,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,w){return S?new OffscreenCanvas(b,w):da("canvas")}function T(b,w,J){let me=1;const ye=We(b);if((ye.width>J||ye.height>J)&&(me=J/Math.max(ye.width,ye.height)),me<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const pe=Math.floor(me*ye.width),Ge=Math.floor(me*ye.height);v===void 0&&(v=M(pe,Ge));const Re=w?M(pe,Ge):v;return Re.width=pe,Re.height=Ge,Re.getContext("2d").drawImage(b,0,0,pe,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+pe+"x"+Ge+")."),Re}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),b;return b}function y(b){return b.generateMipmaps}function _(b){r.generateMipmap(b)}function D(b){return b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?r.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(b,w,J,me,ye=!1){if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let pe=w;if(w===r.RED&&(J===r.FLOAT&&(pe=r.R32F),J===r.HALF_FLOAT&&(pe=r.R16F),J===r.UNSIGNED_BYTE&&(pe=r.R8)),w===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(pe=r.R8UI),J===r.UNSIGNED_SHORT&&(pe=r.R16UI),J===r.UNSIGNED_INT&&(pe=r.R32UI),J===r.BYTE&&(pe=r.R8I),J===r.SHORT&&(pe=r.R16I),J===r.INT&&(pe=r.R32I)),w===r.RG&&(J===r.FLOAT&&(pe=r.RG32F),J===r.HALF_FLOAT&&(pe=r.RG16F),J===r.UNSIGNED_BYTE&&(pe=r.RG8)),w===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(pe=r.RG8UI),J===r.UNSIGNED_SHORT&&(pe=r.RG16UI),J===r.UNSIGNED_INT&&(pe=r.RG32UI),J===r.BYTE&&(pe=r.RG8I),J===r.SHORT&&(pe=r.RG16I),J===r.INT&&(pe=r.RG32I)),w===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),J===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),J===r.UNSIGNED_INT&&(pe=r.RGB32UI),J===r.BYTE&&(pe=r.RGB8I),J===r.SHORT&&(pe=r.RGB16I),J===r.INT&&(pe=r.RGB32I)),w===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),J===r.UNSIGNED_INT&&(pe=r.RGBA32UI),J===r.BYTE&&(pe=r.RGBA8I),J===r.SHORT&&(pe=r.RGBA16I),J===r.INT&&(pe=r.RGBA32I)),w===r.RGB&&J===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),w===r.RGBA){const Ge=ye?hu:wt.getTransfer(me);J===r.FLOAT&&(pe=r.RGBA32F),J===r.HALF_FLOAT&&(pe=r.RGBA16F),J===r.UNSIGNED_BYTE&&(pe=Ge===bt?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function C(b,w){let J;return b?w===null||w===us||w===la?J=r.DEPTH24_STENCIL8:w===Ki?J=r.DEPTH32F_STENCIL8:w===aa&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===us||w===la?J=r.DEPTH_COMPONENT24:w===Ki?J=r.DEPTH_COMPONENT32F:w===aa&&(J=r.DEPTH_COMPONENT16),J}function z(b,w){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==vi&&b.minFilter!==Ci?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function F(b){const w=b.target;w.removeEventListener("dispose",F),X(w),w.isVideoTexture&&g.delete(w)}function U(b){const w=b.target;w.removeEventListener("dispose",U),R(w)}function X(b){const w=s.get(b);if(w.__webglInit===void 0)return;const J=b.source,me=x.get(J);if(me){const ye=me[w.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&P(b),Object.keys(me).length===0&&x.delete(J)}s.remove(b)}function P(b){const w=s.get(b);r.deleteTexture(w.__webglTexture);const J=b.source,me=x.get(J);delete me[w.__cacheKey],c.memory.textures--}function R(b){const w=s.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),s.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let ye=0;ye<w.__webglFramebuffer[me].length;ye++)r.deleteFramebuffer(w.__webglFramebuffer[me][ye]);else r.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)r.deleteFramebuffer(w.__webglFramebuffer[me]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=b.textures;for(let me=0,ye=J.length;me<ye;me++){const pe=s.get(J[me]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),c.memory.textures--),s.remove(J[me])}s.remove(b)}let H=0;function de(){H=0}function W(){const b=H;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),H+=1,b}function le(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function ce(b,w){const J=s.get(b);if(b.isVideoTexture&&Ye(b),b.isRenderTargetTexture===!1&&b.version>0&&J.__version!==b.version){const me=b.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(J,b,w);return}}t.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+w)}function oe(b,w){const J=s.get(b);if(b.version>0&&J.__version!==b.version){q(J,b,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+w)}function ae(b,w){const J=s.get(b);if(b.version>0&&J.__version!==b.version){q(J,b,w);return}t.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+w)}function k(b,w){const J=s.get(b);if(b.version>0&&J.__version!==b.version){fe(J,b,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+w)}const ne={[od]:r.REPEAT,[rs]:r.CLAMP_TO_EDGE,[ad]:r.MIRRORED_REPEAT},te={[vi]:r.NEAREST,[Rx]:r.NEAREST_MIPMAP_NEAREST,[Cl]:r.NEAREST_MIPMAP_LINEAR,[Ci]:r.LINEAR,[mf]:r.LINEAR_MIPMAP_NEAREST,[ss]:r.LINEAR_MIPMAP_LINEAR},N={[Lx]:r.NEVER,[Ox]:r.ALWAYS,[Dx]:r.LESS,[M_]:r.LEQUAL,[Ix]:r.EQUAL,[Fx]:r.GEQUAL,[Ux]:r.GREATER,[Nx]:r.NOTEQUAL};function $(b,w){if(w.type===Ki&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ci||w.magFilter===mf||w.magFilter===Cl||w.magFilter===ss||w.minFilter===Ci||w.minFilter===mf||w.minFilter===Cl||w.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,ne[w.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,ne[w.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,ne[w.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,te[w.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,te[w.minFilter]),w.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===vi||w.minFilter!==Cl&&w.minFilter!==ss||w.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function we(b,w){let J=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",F));const me=w.source;let ye=x.get(me);ye===void 0&&(ye={},x.set(me,ye));const pe=le(w);if(pe!==b.__cacheKey){ye[pe]===void 0&&(ye[pe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,J=!0),ye[pe].usedTimes++;const Ge=ye[b.__cacheKey];Ge!==void 0&&(ye[b.__cacheKey].usedTimes--,Ge.usedTimes===0&&P(w)),b.__cacheKey=pe,b.__webglTexture=ye[pe].texture}return J}function q(b,w,J){let me=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=r.TEXTURE_3D);const ye=we(b,w),pe=w.source;t.bindTexture(me,b.__webglTexture,r.TEXTURE0+J);const Ge=s.get(pe);if(pe.version!==Ge.__version||ye===!0){t.activeTexture(r.TEXTURE0+J);const Re=wt.getPrimaries(wt.workingColorSpace),$e=w.colorSpace===br?null:wt.getPrimaries(w.colorSpace),qe=w.colorSpace===br||Re===$e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Se=T(w.image,!1,a.maxTextureSize);Se=Pt(w,Se);const Oe=l.convert(w.format,w.colorSpace),Je=l.convert(w.type);let et=L(w.internalFormat,Oe,Je,w.colorSpace,w.isVideoTexture);$(me,w);let ke;const pt=w.mipmaps,ot=w.isVideoTexture!==!0,At=Ge.__version===void 0||ye===!0,G=pe.dataReady,Ce=z(w,Se);if(w.isDepthTexture)et=C(w.format===ca,w.type),At&&(ot?t.texStorage2D(r.TEXTURE_2D,1,et,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,et,Se.width,Se.height,0,Oe,Je,null));else if(w.isDataTexture)if(pt.length>0){ot&&At&&t.texStorage2D(r.TEXTURE_2D,Ce,et,pt[0].width,pt[0].height);for(let ue=0,ge=pt.length;ue<ge;ue++)ke=pt[ue],ot?G&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,ke.width,ke.height,Oe,Je,ke.data):t.texImage2D(r.TEXTURE_2D,ue,et,ke.width,ke.height,0,Oe,Je,ke.data);w.generateMipmaps=!1}else ot?(At&&t.texStorage2D(r.TEXTURE_2D,Ce,et,Se.width,Se.height),G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se.width,Se.height,Oe,Je,Se.data)):t.texImage2D(r.TEXTURE_2D,0,et,Se.width,Se.height,0,Oe,Je,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ot&&At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,et,pt[0].width,pt[0].height,Se.depth);for(let ue=0,ge=pt.length;ue<ge;ue++)if(ke=pt[ue],w.format!==_i)if(Oe!==null)if(ot){if(G)if(w.layerUpdates.size>0){const Ie=Sg(ke.width,ke.height,w.format,w.type);for(const Le of w.layerUpdates){const at=ke.data.subarray(Le*Ie/ke.data.BYTES_PER_ELEMENT,(Le+1)*Ie/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,Le,ke.width,ke.height,1,Oe,at)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,ke.width,ke.height,Se.depth,Oe,ke.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ue,et,ke.width,ke.height,Se.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ue,0,0,0,ke.width,ke.height,Se.depth,Oe,Je,ke.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ue,et,ke.width,ke.height,Se.depth,0,Oe,Je,ke.data)}else{ot&&At&&t.texStorage2D(r.TEXTURE_2D,Ce,et,pt[0].width,pt[0].height);for(let ue=0,ge=pt.length;ue<ge;ue++)ke=pt[ue],w.format!==_i?Oe!==null?ot?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,ue,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(r.TEXTURE_2D,ue,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?G&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,ke.width,ke.height,Oe,Je,ke.data):t.texImage2D(r.TEXTURE_2D,ue,et,ke.width,ke.height,0,Oe,Je,ke.data)}else if(w.isDataArrayTexture)if(ot){if(At&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,et,Se.width,Se.height,Se.depth),G)if(w.layerUpdates.size>0){const ue=Sg(Se.width,Se.height,w.format,w.type);for(const ge of w.layerUpdates){const Ie=Se.data.subarray(ge*ue/Se.data.BYTES_PER_ELEMENT,(ge+1)*ue/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Se.width,Se.height,1,Oe,Je,Ie)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Je,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,Se.width,Se.height,Se.depth,0,Oe,Je,Se.data);else if(w.isData3DTexture)ot?(At&&t.texStorage3D(r.TEXTURE_3D,Ce,et,Se.width,Se.height,Se.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Oe,Je,Se.data)):t.texImage3D(r.TEXTURE_3D,0,et,Se.width,Se.height,Se.depth,0,Oe,Je,Se.data);else if(w.isFramebufferTexture){if(At)if(ot)t.texStorage2D(r.TEXTURE_2D,Ce,et,Se.width,Se.height);else{let ue=Se.width,ge=Se.height;for(let Ie=0;Ie<Ce;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,et,ue,ge,0,Oe,Je,null),ue>>=1,ge>>=1}}else if(pt.length>0){if(ot&&At){const ue=We(pt[0]);t.texStorage2D(r.TEXTURE_2D,Ce,et,ue.width,ue.height)}for(let ue=0,ge=pt.length;ue<ge;ue++)ke=pt[ue],ot?G&&t.texSubImage2D(r.TEXTURE_2D,ue,0,0,Oe,Je,ke):t.texImage2D(r.TEXTURE_2D,ue,et,Oe,Je,ke);w.generateMipmaps=!1}else if(ot){if(At){const ue=We(Se);t.texStorage2D(r.TEXTURE_2D,Ce,et,ue.width,ue.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Je,Se)}else t.texImage2D(r.TEXTURE_2D,0,et,Oe,Je,Se);y(w)&&_(me),Ge.__version=pe.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function fe(b,w,J){if(w.image.length!==6)return;const me=we(b,w),ye=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+J);const pe=s.get(ye);if(ye.version!==pe.__version||me===!0){t.activeTexture(r.TEXTURE0+J);const Ge=wt.getPrimaries(wt.workingColorSpace),Re=w.colorSpace===br?null:wt.getPrimaries(w.colorSpace),$e=w.colorSpace===br||Ge===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const qe=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,Oe=[];for(let ge=0;ge<6;ge++)!qe&&!Se?Oe[ge]=T(w.image[ge],!0,a.maxCubemapSize):Oe[ge]=Se?w.image[ge].image:w.image[ge],Oe[ge]=Pt(w,Oe[ge]);const Je=Oe[0],et=l.convert(w.format,w.colorSpace),ke=l.convert(w.type),pt=L(w.internalFormat,et,ke,w.colorSpace),ot=w.isVideoTexture!==!0,At=pe.__version===void 0||me===!0,G=ye.dataReady;let Ce=z(w,Je);$(r.TEXTURE_CUBE_MAP,w);let ue;if(qe){ot&&At&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,pt,Je.width,Je.height);for(let ge=0;ge<6;ge++){ue=Oe[ge].mipmaps;for(let Ie=0;Ie<ue.length;Ie++){const Le=ue[Ie];w.format!==_i?et!==null?ot?G&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,Le.width,Le.height,et,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,pt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,0,0,Le.width,Le.height,et,ke,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie,pt,Le.width,Le.height,0,et,ke,Le.data)}}}else{if(ue=w.mipmaps,ot&&At){ue.length>0&&Ce++;const ge=We(Oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,pt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Se){ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Oe[ge].width,Oe[ge].height,et,ke,Oe[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,pt,Oe[ge].width,Oe[ge].height,0,et,ke,Oe[ge].data);for(let Ie=0;Ie<ue.length;Ie++){const at=ue[Ie].image[ge].image;ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,at.width,at.height,et,ke,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,pt,at.width,at.height,0,et,ke,at.data)}}else{ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,et,ke,Oe[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,pt,et,ke,Oe[ge]);for(let Ie=0;Ie<ue.length;Ie++){const Le=ue[Ie];ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,0,0,et,ke,Le.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie+1,pt,et,ke,Le.image[ge])}}}y(w)&&_(r.TEXTURE_CUBE_MAP),pe.__version=ye.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function ie(b,w,J,me,ye,pe){const Ge=l.convert(J.format,J.colorSpace),Re=l.convert(J.type),$e=L(J.internalFormat,Ge,Re,J.colorSpace),qe=s.get(w),Se=s.get(J);if(Se.__renderTarget=w,!qe.__hasExternalTextures){const Oe=Math.max(1,w.width>>pe),Je=Math.max(1,w.height>>pe);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?t.texImage3D(ye,pe,$e,Oe,Je,w.depth,0,Ge,Re,null):t.texImage2D(ye,pe,$e,Oe,Je,0,Ge,Re,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),ht(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ye,Se.__webglTexture,0,dt(w)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ye,Se.__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function he(b,w,J){if(r.bindRenderbuffer(r.RENDERBUFFER,b),w.depthBuffer){const me=w.depthTexture,ye=me&&me.isDepthTexture?me.type:null,pe=C(w.stencilBuffer,ye),Ge=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=dt(w);ht(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,pe,w.width,w.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,pe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,pe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,b)}else{const me=w.textures;for(let ye=0;ye<me.length;ye++){const pe=me[ye],Ge=l.convert(pe.format,pe.colorSpace),Re=l.convert(pe.type),$e=L(pe.internalFormat,Ge,Re,pe.colorSpace),qe=dt(w);J&&ht(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,$e,w.width,w.height):ht(w)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,$e,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,$e,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function _e(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ce(w.depthTexture,0);const ye=me.__webglTexture,pe=dt(w);if(w.depthTexture.format===ua)ht(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0);else if(w.depthTexture.format===ca)ht(w)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Ae(b){const w=s.get(b),J=b.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==b.depthTexture){const me=b.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const ye=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",ye)};me.addEventListener("dispose",ye),w.__depthDisposeCallback=ye}w.__boundDepthTexture=me}if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const me=b.texture.mipmaps;me&&me.length>0?_e(w.__webglFramebuffer[0],b):_e(w.__webglFramebuffer,b)}else if(J){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=r.createRenderbuffer(),he(w.__webglDepthbuffer[me],b,!1);else{const ye=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=w.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,pe)}}else{const me=b.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),he(w.__webglDepthbuffer,b,!1);else{const ye=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,pe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(b,w,J){const me=s.get(b);w!==void 0&&ie(me.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&Ae(b)}function it(b){const w=b.texture,J=s.get(b),me=s.get(w);b.addEventListener("dispose",U);const ye=b.textures,pe=b.isWebGLCubeRenderTarget===!0,Ge=ye.length>1;if(Ge||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=w.version,c.memory.textures++),pe){J.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[Re]=[];for(let $e=0;$e<w.mipmaps.length;$e++)J.__webglFramebuffer[Re][$e]=r.createFramebuffer()}else J.__webglFramebuffer[Re]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)J.__webglFramebuffer[Re]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let Re=0,$e=ye.length;Re<$e;Re++){const qe=s.get(ye[Re]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),c.memory.textures++)}if(b.samples>0&&ht(b)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Re=0;Re<ye.length;Re++){const $e=ye[Re];J.__webglColorRenderbuffer[Re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[Re]);const qe=l.convert($e.format,$e.colorSpace),Se=l.convert($e.type),Oe=L($e.internalFormat,qe,Se,$e.colorSpace,b.isXRRenderTarget===!0),Je=dt(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,Oe,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,J.__webglColorRenderbuffer[Re])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),he(J.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),$(r.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let $e=0;$e<w.mipmaps.length;$e++)ie(J.__webglFramebuffer[Re][$e],b,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,$e);else ie(J.__webglFramebuffer[Re],b,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);y(w)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Re=0,$e=ye.length;Re<$e;Re++){const qe=ye[Re],Se=s.get(qe);t.bindTexture(r.TEXTURE_2D,Se.__webglTexture),$(r.TEXTURE_2D,qe),ie(J.__webglFramebuffer,b,qe,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,0),y(qe)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let Re=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Re=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Re,me.__webglTexture),$(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let $e=0;$e<w.mipmaps.length;$e++)ie(J.__webglFramebuffer[$e],b,w,r.COLOR_ATTACHMENT0,Re,$e);else ie(J.__webglFramebuffer,b,w,r.COLOR_ATTACHMENT0,Re,0);y(w)&&_(Re),t.unbindTexture()}b.depthBuffer&&Ae(b)}function rt(b){const w=b.textures;for(let J=0,me=w.length;J<me;J++){const ye=w[J];if(y(ye)){const pe=D(b),Ge=s.get(ye).__webglTexture;t.bindTexture(pe,Ge),_(pe),t.unbindTexture()}}}const st=[],O=[];function Dt(b){if(b.samples>0){if(ht(b)===!1){const w=b.textures,J=b.width,me=b.height;let ye=r.COLOR_BUFFER_BIT;const pe=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=s.get(b),Re=w.length>1;if(Re)for(let qe=0;qe<w.length;qe++)t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const $e=b.texture.mipmaps;$e&&$e.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let qe=0;qe<w.length;qe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),Re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[qe]);const Se=s.get(w[qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,J,me,0,0,J,me,ye,r.NEAREST),h===!0&&(st.length=0,O.length=0,st.push(r.COLOR_ATTACHMENT0+qe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(st.push(pe),O.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Re)for(let qe=0;qe<w.length;qe++){t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[qe]);const Se=s.get(w[qe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qe,r.TEXTURE_2D,Se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const w=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function dt(b){return Math.min(a.maxSamples,b.samples)}function ht(b){const w=s.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(b){const w=c.render.frame;g.get(b)!==w&&(g.set(b,w),b.update())}function Pt(b,w){const J=b.colorSpace,me=b.format,ye=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||J!==so&&J!==br&&(wt.getTransfer(J)===bt?(me!==_i||ye!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}function We(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(p.width=b.naturalWidth||b.width,p.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(p.width=b.displayWidth,p.height=b.displayHeight):(p.width=b.width,p.height=b.height),p}this.allocateTextureUnit=W,this.resetTextureUnits=de,this.setTexture2D=ce,this.setTexture2DArray=oe,this.setTexture3D=ae,this.setTextureCube=k,this.rebindTextures=De,this.setupRenderTarget=it,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ht}function x1(r,e){function t(s,a=br){let l;const c=wt.getTransfer(a);if(s===Pi)return r.UNSIGNED_BYTE;if(s===qd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===$d)return r.UNSIGNED_SHORT_5_5_5_1;if(s===m_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===h_)return r.BYTE;if(s===p_)return r.SHORT;if(s===aa)return r.UNSIGNED_SHORT;if(s===jd)return r.INT;if(s===us)return r.UNSIGNED_INT;if(s===Ki)return r.FLOAT;if(s===pa)return r.HALF_FLOAT;if(s===g_)return r.ALPHA;if(s===__)return r.RGB;if(s===_i)return r.RGBA;if(s===ua)return r.DEPTH_COMPONENT;if(s===ca)return r.DEPTH_STENCIL;if(s===v_)return r.RED;if(s===Kd)return r.RED_INTEGER;if(s===x_)return r.RG;if(s===Zd)return r.RG_INTEGER;if(s===Qd)return r.RGBA_INTEGER;if(s===tu||s===nu||s===iu||s===ru)if(c===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===tu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===iu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ru)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===tu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===iu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ru)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ld||s===ud||s===cd||s===fd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===ld)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ud)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dd||s===hd||s===pd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===dd||s===hd)return c===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===pd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===Td||s===wd||s===Ad||s===Rd||s===Cd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===md)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_d)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Md)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ed)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Td)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ad)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cd)return c===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===su||s===Pd||s===bd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===su)return c===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Pd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===y_||s===Ld||s===Dd||s===Id)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===su)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Ld)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Id)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===la?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class M1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new bn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Ji({vertexShader:y1,fragmentShader:S1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new Tu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E1 extends ho{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,g=null,v=null,x=null,S=null,M=null;const T=new M1,y=t.getContextAttributes();let _=null,D=null;const L=[],C=[],z=new Ct;let F=null;const U=new ii;U.viewport=new jt;const X=new ii;X.viewport=new jt;const P=[U,X],R=new Wy;let H=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let fe=L[q];return fe===void 0&&(fe=new Nf,L[q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(q){let fe=L[q];return fe===void 0&&(fe=new Nf,L[q]=fe),fe.getGripSpace()},this.getHand=function(q){let fe=L[q];return fe===void 0&&(fe=new Nf,L[q]=fe),fe.getHandSpace()};function W(q){const fe=C.indexOf(q.inputSource);if(fe===-1)return;const ie=L[fe];ie!==void 0&&(ie.update(q.inputSource,q.frame,p||c),ie.dispatchEvent({type:q.type,data:q.inputSource}))}function le(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",ce);for(let q=0;q<L.length;q++){const fe=C[q];fe!==null&&(C[q]=null,L[q].disconnect(fe))}H=null,de=null,T.reset(),e.setRenderTarget(_),S=null,x=null,v=null,a=null,D=null,we.stop(),s.isPresenting=!1,e.setPixelRatio(F),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){f=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",le),a.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,he=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=y.stencil?ca:ua,he=y.stencil?la:us);const Ae={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};v=new XRWebGLBinding(a,t),x=v.createProjectionLayer(Ae),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new cs(x.textureWidth,x.textureHeight,{format:_i,type:Pi,depthTexture:new D_(x.textureWidth,x.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ie={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ie),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new cs(S.framebufferWidth,S.framebufferHeight,{format:_i,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),we.setContext(a),we.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function ce(q){for(let fe=0;fe<q.removed.length;fe++){const ie=q.removed[fe],he=C.indexOf(ie);he>=0&&(C[he]=null,L[he].disconnect(ie))}for(let fe=0;fe<q.added.length;fe++){const ie=q.added[fe];let he=C.indexOf(ie);if(he===-1){for(let Ae=0;Ae<L.length;Ae++)if(Ae>=C.length){C.push(ie),he=Ae;break}else if(C[Ae]===null){C[Ae]=ie,he=Ae;break}if(he===-1)break}const _e=L[he];_e&&_e.connect(ie)}}const oe=new ee,ae=new ee;function k(q,fe,ie){oe.setFromMatrixPosition(fe.matrixWorld),ae.setFromMatrixPosition(ie.matrixWorld);const he=oe.distanceTo(ae),_e=fe.projectionMatrix.elements,Ae=ie.projectionMatrix.elements,De=_e[14]/(_e[10]-1),it=_e[14]/(_e[10]+1),rt=(_e[9]+1)/_e[5],st=(_e[9]-1)/_e[5],O=(_e[8]-1)/_e[0],Dt=(Ae[8]+1)/Ae[0],dt=De*O,ht=De*Dt,Ye=he/(-O+Dt),Pt=Ye*-O;if(fe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pt),q.translateZ(Ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),_e[10]===-1)q.projectionMatrix.copy(fe.projectionMatrix),q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const We=De+Ye,b=it+Ye,w=dt-Pt,J=ht+(he-Pt),me=rt*it/b*We,ye=st*it/b*We;q.projectionMatrix.makePerspective(w,J,me,ye,We,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,fe){fe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(fe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let fe=q.near,ie=q.far;T.texture!==null&&(T.depthNear>0&&(fe=T.depthNear),T.depthFar>0&&(ie=T.depthFar)),R.near=X.near=U.near=fe,R.far=X.far=U.far=ie,(H!==R.near||de!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,de=R.far),U.layers.mask=q.layers.mask|2,X.layers.mask=q.layers.mask|4,R.layers.mask=U.layers.mask|X.layers.mask;const he=q.parent,_e=R.cameras;ne(R,he);for(let Ae=0;Ae<_e.length;Ae++)ne(_e[Ae],he);_e.length===2?k(R,U,X):R.projectionMatrix.copy(U.projectionMatrix),te(q,R,he)};function te(q,fe,ie){ie===null?q.matrix.copy(fe.matrixWorld):(q.matrix.copy(ie.matrixWorld),q.matrix.invert(),q.matrix.multiply(fe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(fe.projectionMatrix),q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=fa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(q){h=q,x!==null&&(x.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let N=null;function $(q,fe){if(g=fe.getViewerPose(p||c),M=fe,g!==null){const ie=g.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let he=!1;ie.length!==R.cameras.length&&(R.cameras.length=0,he=!0);for(let De=0;De<ie.length;De++){const it=ie[De];let rt=null;if(S!==null)rt=S.getViewport(it);else{const O=v.getViewSubImage(x,it);rt=O.viewport,De===0&&(e.setRenderTargetTextures(D,O.colorTexture,O.depthStencilTexture),e.setRenderTarget(D))}let st=P[De];st===void 0&&(st=new ii,st.layers.enable(De),st.viewport=new jt,P[De]=st),st.matrix.fromArray(it.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(it.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(rt.x,rt.y,rt.width,rt.height),De===0&&(R.matrix.copy(st.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),he===!0&&R.cameras.push(st)}const _e=a.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const De=v.getDepthInformation(ie[0]);De&&De.isValid&&De.texture&&T.init(e,De,a.renderState)}}for(let ie=0;ie<L.length;ie++){const he=C[ie],_e=L[ie];he!==null&&_e!==void 0&&_e.update(he,fe,p||c)}N&&N(q,fe),fe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:fe}),M=null}const we=new U_;we.setAnimationLoop($),this.setAnimationLoop=function(q){N=q},this.dispose=function(){}}}const Jr=new bi,T1=new zt;function w1(r,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,P_(r)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,D,L,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),g(y,_)):_.isMeshStandardMaterial?(l(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,C)):_.isMeshMatcapMaterial?(l(y,_),M(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),T(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?h(y,_,D,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Bn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Bn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const D=e.get(_),L=D.envMap,C=D.envMapRotation;L&&(y.envMap.value=L,Jr.copy(C),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),y.envMapRotation.value.setFromMatrix4(T1.makeRotationFromEuler(Jr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,D,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*D,y.scale.value=L*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,D){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const D=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function A1(r,e,t,s){let a={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,L){const C=L.program;s.uniformBlockBinding(D,C)}function p(D,L){let C=a[D.id];C===void 0&&(M(D),C=g(D),a[D.id]=C,D.addEventListener("dispose",y));const z=L.program;s.updateUBOMapping(D,z);const F=e.render.frame;l[D.id]!==F&&(x(D),l[D.id]=F)}function g(D){const L=v();D.__bindingPointIndex=L;const C=r.createBuffer(),z=D.__size,F=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,z,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,C),C}function v(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const L=a[D.id],C=D.uniforms,z=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let F=0,U=C.length;F<U;F++){const X=Array.isArray(C[F])?C[F]:[C[F]];for(let P=0,R=X.length;P<R;P++){const H=X[P];if(S(H,F,P,z)===!0){const de=H.__offset,W=Array.isArray(H.value)?H.value:[H.value];let le=0;for(let ce=0;ce<W.length;ce++){const oe=W[ce],ae=T(oe);typeof oe=="number"||typeof oe=="boolean"?(H.__data[0]=oe,r.bufferSubData(r.UNIFORM_BUFFER,de+le,H.__data)):oe.isMatrix3?(H.__data[0]=oe.elements[0],H.__data[1]=oe.elements[1],H.__data[2]=oe.elements[2],H.__data[3]=0,H.__data[4]=oe.elements[3],H.__data[5]=oe.elements[4],H.__data[6]=oe.elements[5],H.__data[7]=0,H.__data[8]=oe.elements[6],H.__data[9]=oe.elements[7],H.__data[10]=oe.elements[8],H.__data[11]=0):(oe.toArray(H.__data,le),le+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,de,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,L,C,z){const F=D.value,U=L+"_"+C;if(z[U]===void 0)return typeof F=="number"||typeof F=="boolean"?z[U]=F:z[U]=F.clone(),!0;{const X=z[U];if(typeof F=="number"||typeof F=="boolean"){if(X!==F)return z[U]=F,!0}else if(X.equals(F)===!1)return X.copy(F),!0}return!1}function M(D){const L=D.uniforms;let C=0;const z=16;for(let U=0,X=L.length;U<X;U++){const P=Array.isArray(L[U])?L[U]:[L[U]];for(let R=0,H=P.length;R<H;R++){const de=P[R],W=Array.isArray(de.value)?de.value:[de.value];for(let le=0,ce=W.length;le<ce;le++){const oe=W[le],ae=T(oe),k=C%z,ne=k%ae.boundary,te=k+ne;C+=ne,te!==0&&z-te<ae.storage&&(C+=z-te),de.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=C,C+=ae.storage}}}const F=C%z;return F>0&&(C+=z-F),D.__size=C,D.__cache={},this}function T(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const C=c.indexOf(L.__bindingPointIndex);c.splice(C,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function _(){for(const D in a)r.deleteBuffer(a[D]);c=[],a={},l={}}return{bind:h,update:p,dispose:_}}class R1{constructor(e={}){const{canvas:t=ey(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=c;const M=new Uint32Array(4),T=new Int32Array(4);let y=null,_=null;const D=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let z=!1;this._outputColorSpace=ni;let F=0,U=0,X=null,P=-1,R=null;const H=new jt,de=new jt;let W=null;const le=new vt(0);let ce=0,oe=t.width,ae=t.height,k=1,ne=null,te=null;const N=new jt(0,0,oe,ae),$=new jt(0,0,oe,ae);let we=!1;const q=new nh;let fe=!1,ie=!1;const he=new zt,_e=new zt,Ae=new ee,De=new jt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function st(){return X===null?k:1}let O=s;function Dt(A,Y){return t.getContext(A,Y)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xd}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Le,!1),O===null){const Y="webgl2";if(O=Dt(Y,A),O===null)throw Dt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let dt,ht,Ye,Pt,We,b,w,J,me,ye,pe,Ge,Re,$e,qe,Se,Oe,Je,et,ke,pt,ot,At,G;function Ce(){dt=new OE(O),dt.init(),ot=new x1(O,dt),ht=new bE(O,dt,e,ot),Ye=new _1(O,dt),ht.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),Pt=new zE(O),We=new r1,b=new v1(O,dt,Ye,We,ht,ot,Pt),w=new DE(C),J=new FE(C),me=new Yy(O),At=new CE(O,me),ye=new kE(O,me,Pt,At),pe=new VE(O,ye,me,Pt),et=new HE(O,ht,b),Se=new LE(We),Ge=new i1(C,w,J,dt,ht,At,Se),Re=new w1(C,We),$e=new o1,qe=new d1(dt),Je=new RE(C,w,J,Ye,pe,S,h),Oe=new m1(C,pe,ht),G=new A1(O,Pt,ht,Ye),ke=new PE(O,dt,Pt),pt=new BE(O,dt,Pt),Pt.programs=Ge.programs,C.capabilities=ht,C.extensions=dt,C.properties=We,C.renderLists=$e,C.shadowMap=Oe,C.state=Ye,C.info=Pt}Ce();const ue=new E1(C,O);this.xr=ue,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(oe,ae,!1))},this.getSize=function(A){return A.set(oe,ae)},this.setSize=function(A,Y,se=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,ae=Y,t.width=Math.floor(A*k),t.height=Math.floor(Y*k),se===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(oe*k,ae*k).floor()},this.setDrawingBufferSize=function(A,Y,se){oe=A,ae=Y,k=se,t.width=Math.floor(A*se),t.height=Math.floor(Y*se),this.setViewport(0,0,A,Y)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,Y,se,Z){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,Y,se,Z),Ye.viewport(H.copy(N).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy($)},this.setScissor=function(A,Y,se,Z){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,Y,se,Z),Ye.scissor(de.copy($).multiplyScalar(k).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(A){Ye.setScissorTest(we=A)},this.setOpaqueSort=function(A){ne=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,se=!0){let Z=0;if(A){let j=!1;if(X!==null){const Ee=X.texture.format;j=Ee===Qd||Ee===Zd||Ee===Kd}if(j){const Ee=X.texture.type,Pe=Ee===Pi||Ee===us||Ee===aa||Ee===la||Ee===qd||Ee===$d,Ue=Je.getClearColor(),Be=Je.getClearAlpha(),tt=Ue.r,Qe=Ue.g,He=Ue.b;Pe?(M[0]=tt,M[1]=Qe,M[2]=He,M[3]=Be,O.clearBufferuiv(O.COLOR,0,M)):(T[0]=tt,T[1]=Qe,T[2]=He,T[3]=Be,O.clearBufferiv(O.COLOR,0,T))}else Z|=O.COLOR_BUFFER_BIT}Y&&(Z|=O.DEPTH_BUFFER_BIT),se&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Je.dispose(),$e.dispose(),qe.dispose(),We.dispose(),w.dispose(),J.dispose(),pe.dispose(),At.dispose(),G.dispose(),Ge.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ds),ue.removeEventListener("sessionend",tr),Li.stop()};function ge(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=Pt.autoReset,Y=Oe.enabled,se=Oe.autoUpdate,Z=Oe.needsUpdate,j=Oe.type;Ce(),Pt.autoReset=A,Oe.enabled=Y,Oe.autoUpdate=se,Oe.needsUpdate=Z,Oe.type=j}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){const Y=A.target;Y.removeEventListener("dispose",at),Ut(Y)}function Ut(A){Qt(A),We.remove(A)}function Qt(A){const Y=We.get(A).programs;Y!==void 0&&(Y.forEach(function(se){Ge.releaseProgram(se)}),A.isShaderMaterial&&Ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,se,Z,j,Ee){Y===null&&(Y=it);const Pe=j.isMesh&&j.matrixWorld.determinant()<0,Ue=Ma(A,Y,se,Z,j);Ye.setMaterial(Z,Pe);let Be=se.index,tt=1;if(Z.wireframe===!0){if(Be=ye.getWireframeAttribute(se),Be===void 0)return;tt=2}const Qe=se.drawRange,He=se.attributes.position;let xt=Qe.start*tt,lt=(Qe.start+Qe.count)*tt;Ee!==null&&(xt=Math.max(xt,Ee.start*tt),lt=Math.min(lt,(Ee.start+Ee.count)*tt)),Be!==null?(xt=Math.max(xt,0),lt=Math.min(lt,Be.count)):He!=null&&(xt=Math.max(xt,0),lt=Math.min(lt,He.count));const Gt=lt-xt;if(Gt<0||Gt===1/0)return;At.setup(j,Z,Ue,se,Be);let kt,yt=ke;if(Be!==null&&(kt=me.get(Be),yt=pt,yt.setIndex(kt)),j.isMesh)Z.wireframe===!0?(Ye.setLineWidth(Z.wireframeLinewidth*st()),yt.setMode(O.LINES)):yt.setMode(O.TRIANGLES);else if(j.isLine){let je=Z.linewidth;je===void 0&&(je=1),Ye.setLineWidth(je*st()),j.isLineSegments?yt.setMode(O.LINES):j.isLineLoop?yt.setMode(O.LINE_LOOP):yt.setMode(O.LINE_STRIP)}else j.isPoints?yt.setMode(O.POINTS):j.isSprite&&yt.setMode(O.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ou("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))yt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const je=j._multiDrawStarts,Wt=j._multiDrawCounts,gt=j._multiDrawCount,mn=Be?me.get(Be).bytesPerElement:1,ir=We.get(Z).currentProgram.getUniforms();for(let Tn=0;Tn<gt;Tn++)ir.setValue(O,"_gl_DrawID",Tn),yt.render(je[Tn]/mn,Wt[Tn])}else if(j.isInstancedMesh)yt.renderInstances(xt,Gt,j.count);else if(se.isInstancedBufferGeometry){const je=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Wt=Math.min(se.instanceCount,je);yt.renderInstances(xt,Gt,Wt)}else yt.render(xt,Gt)};function St(A,Y,se){A.transparent===!0&&A.side===$i&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,hs(A,Y,se),A.side=Ir,A.needsUpdate=!0,hs(A,Y,se),A.side=$i):hs(A,Y,se)}this.compile=function(A,Y,se=null){se===null&&(se=A),_=qe.get(se),_.init(Y),L.push(_),se.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==se&&A.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const Z=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const Ue=Ee[Pe];St(Ue,se,j),Z.add(Ue)}else St(Ee,se,j),Z.add(Ee)}),_=L.pop(),Z},this.compileAsync=function(A,Y,se=null){const Z=this.compile(A,Y,se);return new Promise(j=>{function Ee(){if(Z.forEach(function(Pe){We.get(Pe).currentProgram.isReady()&&Z.delete(Pe)}),Z.size===0){j(A);return}setTimeout(Ee,10)}dt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ln=null;function En(A){Ln&&Ln(A)}function ds(){Li.stop()}function tr(){Li.start()}const Li=new U_;Li.setAnimationLoop(En),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(A){Ln=A,ue.setAnimationLoop(A),A===null?Li.stop():Li.start()},ue.addEventListener("sessionstart",ds),ue.addEventListener("sessionend",tr),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(Y),Y=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,Y,X),_=qe.get(A,L.length),_.init(Y),L.push(_),_e.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),q.setFromProjectionMatrix(_e),ie=this.localClippingEnabled,fe=Se.init(this.clippingPlanes,ie),y=$e.get(A,D.length),y.init(),D.push(y),ue.enabled===!0&&ue.isPresenting===!0){const Ee=C.xr.getDepthSensingMesh();Ee!==null&&Di(Ee,Y,-1/0,C.sortObjects)}Di(A,Y,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ne,te),rt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,rt&&Je.addToRenderList(y,A),this.info.render.frame++,fe===!0&&Se.beginShadows();const se=_.state.shadowsArray;Oe.render(se,A,Y),fe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=y.opaque,j=y.transmissive;if(_.setupLights(),Y.isArrayCamera){const Ee=Y.cameras;if(j.length>0)for(let Pe=0,Ue=Ee.length;Pe<Ue;Pe++){const Be=Ee[Pe];Nr(Z,j,A,Be)}rt&&Je.render(A);for(let Pe=0,Ue=Ee.length;Pe<Ue;Pe++){const Be=Ee[Pe];Ur(y,A,Be,Be.viewport)}}else j.length>0&&Nr(Z,j,A,Y),rt&&Je.render(A),Ur(y,A,Y);X!==null&&U===0&&(b.updateMultisampleRenderTarget(X),b.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,Y),At.resetDefaultState(),P=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],fe===!0&&Se.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Di(A,Y,se,Z){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){Z&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const Pe=pe.update(A),Ue=A.material;Ue.visible&&y.push(A,Pe,Ue,se,De.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const Pe=pe.update(A),Ue=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),De.copy(Pe.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Ue)){const Be=Pe.groups;for(let tt=0,Qe=Be.length;tt<Qe;tt++){const He=Be[tt],xt=Ue[He.materialIndex];xt&&xt.visible&&y.push(A,Pe,xt,se,De.z,He)}}else Ue.visible&&y.push(A,Pe,Ue,se,De.z,null)}}const Ee=A.children;for(let Pe=0,Ue=Ee.length;Pe<Ue;Pe++)Di(Ee[Pe],Y,se,Z)}function Ur(A,Y,se,Z){const j=A.opaque,Ee=A.transmissive,Pe=A.transparent;_.setupLightsView(se),fe===!0&&Se.setGlobalState(C.clippingPlanes,se),Z&&Ye.viewport(H.copy(Z)),j.length>0&&nr(j,Y,se),Ee.length>0&&nr(Ee,Y,se),Pe.length>0&&nr(Pe,Y,se),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Nr(A,Y,se,Z){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Z.id]===void 0&&(_.state.transmissionRenderTarget[Z.id]=new cs(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?pa:Pi,minFilter:ss,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Ee=_.state.transmissionRenderTarget[Z.id],Pe=Z.viewport||H;Ee.setSize(Pe.z*C.transmissionResolutionScale,Pe.w*C.transmissionResolutionScale);const Ue=C.getRenderTarget();C.setRenderTarget(Ee),C.getClearColor(le),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),rt&&Je.render(se);const Be=C.toneMapping;C.toneMapping=Dr;const tt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),_.setupLightsView(Z),fe===!0&&Se.setGlobalState(C.clippingPlanes,Z),nr(A,se,Z),b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let He=0,xt=Y.length;He<xt;He++){const lt=Y[He],Gt=lt.object,kt=lt.geometry,yt=lt.material,je=lt.group;if(yt.side===$i&&Gt.layers.test(Z.layers)){const Wt=yt.side;yt.side=Bn,yt.needsUpdate=!0,ya(Gt,se,Z,kt,yt,je),yt.side=Wt,yt.needsUpdate=!0,Qe=!0}}Qe===!0&&(b.updateMultisampleRenderTarget(Ee),b.updateRenderTargetMipmap(Ee))}C.setRenderTarget(Ue),C.setClearColor(le,ce),tt!==void 0&&(Z.viewport=tt),C.toneMapping=Be}function nr(A,Y,se){const Z=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Ee=A.length;j<Ee;j++){const Pe=A[j],Ue=Pe.object,Be=Pe.geometry,tt=Pe.group;let Qe=Pe.material;Qe.allowOverride===!0&&Z!==null&&(Qe=Z),Ue.layers.test(se.layers)&&ya(Ue,Y,se,Be,Qe,tt)}}function ya(A,Y,se,Z,j,Ee){A.onBeforeRender(C,Y,se,Z,j,Ee),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(C,Y,se,Z,A,Ee),j.transparent===!0&&j.side===$i&&j.forceSinglePass===!1?(j.side=Bn,j.needsUpdate=!0,C.renderBufferDirect(se,Y,Z,j,A,Ee),j.side=Ir,j.needsUpdate=!0,C.renderBufferDirect(se,Y,Z,j,A,Ee),j.side=$i):C.renderBufferDirect(se,Y,Z,j,A,Ee),A.onAfterRender(C,Y,se,Z,j,Ee)}function hs(A,Y,se){Y.isScene!==!0&&(Y=it);const Z=We.get(A),j=_.state.lights,Ee=_.state.shadowsArray,Pe=j.state.version,Ue=Ge.getParameters(A,j.state,Ee,Y,se),Be=Ge.getProgramCacheKey(Ue);let tt=Z.programs;Z.environment=A.isMeshStandardMaterial?Y.environment:null,Z.fog=Y.fog,Z.envMap=(A.isMeshStandardMaterial?J:w).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",at),tt=new Map,Z.programs=tt);let Qe=tt.get(Be);if(Qe!==void 0){if(Z.currentProgram===Qe&&Z.lightsStateVersion===Pe)return yi(A,Ue),Qe}else Ue.uniforms=Ge.getUniforms(A),A.onBeforeCompile(Ue,C),Qe=Ge.acquireProgram(Ue,Be),tt.set(Be,Qe),Z.uniforms=Ue.uniforms;const He=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Se.uniform),yi(A,Ue),Z.needsLights=Du(A),Z.lightsStateVersion=Pe,Z.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.currentProgram=Qe,Z.uniformsList=null,Qe}function Sa(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=au.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function yi(A,Y){const se=We.get(A);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function Ma(A,Y,se,Z,j){Y.isScene!==!0&&(Y=it),b.resetTextureUnits();const Ee=Y.fog,Pe=Z.isMeshStandardMaterial?Y.environment:null,Ue=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:so,Be=(Z.isMeshStandardMaterial?J:w).get(Z.envMap||Pe),tt=Z.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Qe=!!se.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!se.morphAttributes.position,xt=!!se.morphAttributes.normal,lt=!!se.morphAttributes.color;let Gt=Dr;Z.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Gt=C.toneMapping);const kt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,yt=kt!==void 0?kt.length:0,je=We.get(Z),Wt=_.state.lights;if(fe===!0&&(ie===!0||A!==R)){const dn=A===R&&Z.id===P;Se.setState(Z,A,dn)}let gt=!1;Z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Wt.state.version||je.outputColorSpace!==Ue||j.isBatchedMesh&&je.batching===!1||!j.isBatchedMesh&&je.batching===!0||j.isBatchedMesh&&je.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&je.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&je.instancing===!1||!j.isInstancedMesh&&je.instancing===!0||j.isSkinnedMesh&&je.skinning===!1||!j.isSkinnedMesh&&je.skinning===!0||j.isInstancedMesh&&je.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&je.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&je.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&je.instancingMorph===!1&&j.morphTexture!==null||je.envMap!==Be||Z.fog===!0&&je.fog!==Ee||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Se.numPlanes||je.numIntersection!==Se.numIntersection)||je.vertexAlphas!==tt||je.vertexTangents!==Qe||je.morphTargets!==He||je.morphNormals!==xt||je.morphColors!==lt||je.toneMapping!==Gt||je.morphTargetsCount!==yt)&&(gt=!0):(gt=!0,je.__version=Z.version);let mn=je.currentProgram;gt===!0&&(mn=hs(Z,Y,j));let ir=!1,Tn=!1,Ii=!1;const Lt=mn.getUniforms(),gn=je.uniforms;if(Ye.useProgram(mn.program)&&(ir=!0,Tn=!0,Ii=!0),Z.id!==P&&(P=Z.id,Tn=!0),ir||R!==A){Ye.buffers.depth.getReversed()?(he.copy(A.projectionMatrix),ny(he),iy(he),Lt.setValue(O,"projectionMatrix",he)):Lt.setValue(O,"projectionMatrix",A.projectionMatrix),Lt.setValue(O,"viewMatrix",A.matrixWorldInverse);const sn=Lt.map.cameraPosition;sn!==void 0&&sn.setValue(O,Ae.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&Lt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Lt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Tn=!0,Ii=!0)}if(j.isSkinnedMesh){Lt.setOptional(O,j,"bindMatrix"),Lt.setOptional(O,j,"bindMatrixInverse");const dn=j.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Lt.setValue(O,"boneTexture",dn.boneTexture,b))}j.isBatchedMesh&&(Lt.setOptional(O,j,"batchingTexture"),Lt.setValue(O,"batchingTexture",j._matricesTexture,b),Lt.setOptional(O,j,"batchingIdTexture"),Lt.setValue(O,"batchingIdTexture",j._indirectTexture,b),Lt.setOptional(O,j,"batchingColorTexture"),j._colorsTexture!==null&&Lt.setValue(O,"batchingColorTexture",j._colorsTexture,b));const rn=se.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&et.update(j,se,mn),(Tn||je.receiveShadow!==j.receiveShadow)&&(je.receiveShadow=j.receiveShadow,Lt.setValue(O,"receiveShadow",j.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(gn.envMap.value=Be,gn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&Y.environment!==null&&(gn.envMapIntensity.value=Y.environmentIntensity),Tn&&(Lt.setValue(O,"toneMappingExposure",C.toneMappingExposure),je.needsLights&&Ea(gn,Ii),Ee&&Z.fog===!0&&Re.refreshFogUniforms(gn,Ee),Re.refreshMaterialUniforms(gn,Z,k,ae,_.state.transmissionRenderTarget[A.id]),au.upload(O,Sa(je),gn,b)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(au.upload(O,Sa(je),gn,b),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Lt.setValue(O,"center",j.center),Lt.setValue(O,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(O,"normalMatrix",j.normalMatrix),Lt.setValue(O,"modelMatrix",j.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const dn=Z.uniformsGroups;for(let sn=0,Mt=dn.length;sn<Mt;sn++){const Si=dn[sn];G.update(Si,mn),G.bind(Si,mn)}}return mn}function Ea(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Du(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,Y,se){const Z=We.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),We.get(A.texture).__webglTexture=Y,We.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:se,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const se=We.get(A);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0};const Ta=O.createFramebuffer();this.setRenderTarget=function(A,Y=0,se=0){X=A,F=Y,U=se;let Z=!0,j=null,Ee=!1,Pe=!1;if(A){const Be=We.get(A);if(Be.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(O.FRAMEBUFFER,null),Z=!1;else if(Be.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Be.__hasExternalTextures)b.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(Be.__boundDepthTexture!==He){if(He!==null&&We.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Pe=!0);const Qe=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[Y])?j=Qe[Y][se]:j=Qe[Y],Ee=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?j=We.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?j=Qe[se]:j=Qe,H.copy(A.viewport),de.copy(A.scissor),W=A.scissorTest}else H.copy(N).multiplyScalar(k).floor(),de.copy($).multiplyScalar(k).floor(),W=we;if(se!==0&&(j=Ta),Ye.bindFramebuffer(O.FRAMEBUFFER,j)&&Z&&Ye.drawBuffers(A,j),Ye.viewport(H),Ye.scissor(de),Ye.setScissorTest(W),Ee){const Be=We.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Be.__webglTexture,se)}else if(Pe){const Be=We.get(A.texture),tt=Y;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.__webglTexture,se,tt)}else if(A!==null&&se!==0){const Be=We.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Be.__webglTexture,se)}P=-1},this.readRenderTargetPixels=function(A,Y,se,Z,j,Ee,Pe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){Ye.bindFramebuffer(O.FRAMEBUFFER,Ue);try{const Be=A.texture,tt=Be.format,Qe=Be.type;if(!ht.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-Z&&se>=0&&se<=A.height-j&&O.readPixels(Y,se,Z,j,ot.convert(tt),ot.convert(Qe),Ee)}finally{const Be=X!==null?We.get(X).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,Y,se,Z,j,Ee,Pe){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue)if(Y>=0&&Y<=A.width-Z&&se>=0&&se<=A.height-j){Ye.bindFramebuffer(O.FRAMEBUFFER,Ue);const Be=A.texture,tt=Be.format,Qe=Be.type;if(!ht.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,He),O.bufferData(O.PIXEL_PACK_BUFFER,Ee.byteLength,O.STREAM_READ),O.readPixels(Y,se,Z,j,ot.convert(tt),ot.convert(Qe),0);const xt=X!==null?We.get(X).__webglFramebuffer:null;Ye.bindFramebuffer(O.FRAMEBUFFER,xt);const lt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ty(O,lt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,He),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ee),O.deleteBuffer(He),O.deleteSync(lt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,se=0){const Z=Math.pow(2,-se),j=Math.floor(A.image.width*Z),Ee=Math.floor(A.image.height*Z),Pe=Y!==null?Y.x:0,Ue=Y!==null?Y.y:0;b.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,se,0,0,Pe,Ue,j,Ee),Ye.unbindTexture()};const wa=O.createFramebuffer(),Aa=O.createFramebuffer();this.copyTextureToTexture=function(A,Y,se=null,Z=null,j=0,Ee=null){Ee===null&&(j!==0?(ou("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=j,j=0):Ee=0);let Pe,Ue,Be,tt,Qe,He,xt,lt,Gt;const kt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(se!==null)Pe=se.max.x-se.min.x,Ue=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,tt=se.min.x,Qe=se.min.y,He=se.isBox3?se.min.z:0;else{const rn=Math.pow(2,-j);Pe=Math.floor(kt.width*rn),Ue=Math.floor(kt.height*rn),A.isDataArrayTexture?Be=kt.depth:A.isData3DTexture?Be=Math.floor(kt.depth*rn):Be=1,tt=0,Qe=0,He=0}Z!==null?(xt=Z.x,lt=Z.y,Gt=Z.z):(xt=0,lt=0,Gt=0);const yt=ot.convert(Y.format),je=ot.convert(Y.type);let Wt;Y.isData3DTexture?(b.setTexture3D(Y,0),Wt=O.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(b.setTexture2DArray(Y,0),Wt=O.TEXTURE_2D_ARRAY):(b.setTexture2D(Y,0),Wt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const gt=O.getParameter(O.UNPACK_ROW_LENGTH),mn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ir=O.getParameter(O.UNPACK_SKIP_PIXELS),Tn=O.getParameter(O.UNPACK_SKIP_ROWS),Ii=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,kt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,kt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,tt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,He);const Lt=A.isDataArrayTexture||A.isData3DTexture,gn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const rn=We.get(A),dn=We.get(Y),sn=We.get(rn.__renderTarget),Mt=We.get(dn.__renderTarget);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,sn.__webglFramebuffer),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Si=0;Si<Be;Si++)Lt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(A).__webglTexture,j,He+Si),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(Y).__webglTexture,Ee,Gt+Si)),O.blitFramebuffer(tt,Qe,Pe,Ue,xt,lt,Pe,Ue,O.DEPTH_BUFFER_BIT,O.NEAREST);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||We.has(A)){const rn=We.get(A),dn=We.get(Y);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,wa),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,Aa);for(let sn=0;sn<Be;sn++)Lt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,rn.__webglTexture,j,He+sn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,rn.__webglTexture,j),gn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,dn.__webglTexture,Ee,Gt+sn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,dn.__webglTexture,Ee),j!==0?O.blitFramebuffer(tt,Qe,Pe,Ue,xt,lt,Pe,Ue,O.COLOR_BUFFER_BIT,O.NEAREST):gn?O.copyTexSubImage3D(Wt,Ee,xt,lt,Gt+sn,tt,Qe,Pe,Ue):O.copyTexSubImage2D(Wt,Ee,xt,lt,tt,Qe,Pe,Ue);Ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else gn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Wt,Ee,xt,lt,Gt,Pe,Ue,Be,yt,je,kt.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Wt,Ee,xt,lt,Gt,Pe,Ue,Be,yt,kt.data):O.texSubImage3D(Wt,Ee,xt,lt,Gt,Pe,Ue,Be,yt,je,kt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ee,xt,lt,Pe,Ue,yt,je,kt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ee,xt,lt,kt.width,kt.height,yt,kt.data):O.texSubImage2D(O.TEXTURE_2D,Ee,xt,lt,Pe,Ue,yt,je,kt);O.pixelStorei(O.UNPACK_ROW_LENGTH,gt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ir),O.pixelStorei(O.UNPACK_SKIP_ROWS,Tn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ii),Ee===0&&Y.generateMipmaps&&O.generateMipmap(Wt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(A,Y,se=null,Z=null,j=0){return ou('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Y,se,Z,j)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){F=0,U=0,X=null,Ye.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}var kn=function(){return kn=Object.assign||function(e){for(var t,s=1,a=arguments.length;s<a;s++){t=arguments[s];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},kn.apply(this,arguments)};function xu(r,e,t){if(t||arguments.length===2)for(var s=0,a=e.length,l;s<a;s++)(l||!(s in e))&&(l||(l=Array.prototype.slice.call(e,0,s)),l[s]=e[s]);return r.concat(l||Array.prototype.slice.call(e))}var Ot="-ms-",sa="-moz-",Rt="-webkit-",B_="comm",Au="rule",oh="decl",C1="@import",z_="@keyframes",P1="@layer",H_=Math.abs,ah=String.fromCharCode,Od=Object.assign;function b1(r,e){return cn(r,0)^45?(((e<<2^cn(r,0))<<2^cn(r,1))<<2^cn(r,2))<<2^cn(r,3):0}function V_(r){return r.trim()}function qi(r,e){return(r=e.exec(r))?r[0]:r}function ft(r,e,t){return r.replace(e,t)}function lu(r,e,t){return r.indexOf(e,t)}function cn(r,e){return r.charCodeAt(e)|0}function ao(r,e,t){return r.slice(e,t)}function Ri(r){return r.length}function G_(r){return r.length}function na(r,e){return e.push(r),r}function L1(r,e){return r.map(e).join("")}function Yg(r,e){return r.filter(function(t){return!qi(t,e)})}var Ru=1,lo=1,W_=0,oi=0,Zt=0,go="";function Cu(r,e,t,s,a,l,c,f){return{value:r,root:e,parent:t,type:s,props:a,children:l,line:Ru,column:lo,length:c,return:"",siblings:f}}function Pr(r,e){return Od(Cu("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function Ks(r){for(;r.root;)r=Pr(r.root,{children:[r]});na(r,r.siblings)}function D1(){return Zt}function I1(){return Zt=oi>0?cn(go,--oi):0,lo--,Zt===10&&(lo=1,Ru--),Zt}function xi(){return Zt=oi<W_?cn(go,oi++):0,lo++,Zt===10&&(lo=1,Ru++),Zt}function as(){return cn(go,oi)}function uu(){return oi}function Pu(r,e){return ao(go,r,e)}function kd(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U1(r){return Ru=lo=1,W_=Ri(go=r),oi=0,[]}function N1(r){return go="",r}function Xf(r){return V_(Pu(oi-1,Bd(r===91?r+2:r===40?r+1:r)))}function F1(r){for(;(Zt=as())&&Zt<33;)xi();return kd(r)>2||kd(Zt)>3?"":" "}function O1(r,e){for(;--e&&xi()&&!(Zt<48||Zt>102||Zt>57&&Zt<65||Zt>70&&Zt<97););return Pu(r,uu()+(e<6&&as()==32&&xi()==32))}function Bd(r){for(;xi();)switch(Zt){case r:return oi;case 34:case 39:r!==34&&r!==39&&Bd(Zt);break;case 40:r===41&&Bd(r);break;case 92:xi();break}return oi}function k1(r,e){for(;xi()&&r+Zt!==57;)if(r+Zt===84&&as()===47)break;return"/*"+Pu(e,oi-1)+"*"+ah(r===47?r:xi())}function B1(r){for(;!kd(as());)xi();return Pu(r,oi)}function z1(r){return N1(cu("",null,null,null,[""],r=U1(r),0,[0],r))}function cu(r,e,t,s,a,l,c,f,h){for(var p=0,g=0,v=c,x=0,S=0,M=0,T=1,y=1,_=1,D=0,L="",C=a,z=l,F=s,U=L;y;)switch(M=D,D=xi()){case 40:if(M!=108&&cn(U,v-1)==58){lu(U+=ft(Xf(D),"&","&\f"),"&\f",H_(p?f[p-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:U+=Xf(D);break;case 9:case 10:case 13:case 32:U+=F1(M);break;case 92:U+=O1(uu()-1,7);continue;case 47:switch(as()){case 42:case 47:na(H1(k1(xi(),uu()),e,t,h),h);break;default:U+="/"}break;case 123*T:f[p++]=Ri(U)*_;case 125*T:case 59:case 0:switch(D){case 0:case 125:y=0;case 59+g:_==-1&&(U=ft(U,/\f/g,"")),S>0&&Ri(U)-v&&na(S>32?qg(U+";",s,t,v-1,h):qg(ft(U," ","")+";",s,t,v-2,h),h);break;case 59:U+=";";default:if(na(F=jg(U,e,t,p,g,a,f,L,C=[],z=[],v,l),l),D===123)if(g===0)cu(U,e,F,F,C,l,v,f,z);else switch(x===99&&cn(U,3)===110?100:x){case 100:case 108:case 109:case 115:cu(r,F,F,s&&na(jg(r,F,F,0,0,a,f,L,a,C=[],v,z),z),a,z,v,f,s?C:z);break;default:cu(U,F,F,F,[""],z,0,f,z)}}p=g=S=0,T=_=1,L=U="",v=c;break;case 58:v=1+Ri(U),S=M;default:if(T<1){if(D==123)--T;else if(D==125&&T++==0&&I1()==125)continue}switch(U+=ah(D),D*T){case 38:_=g>0?1:(U+="\f",-1);break;case 44:f[p++]=(Ri(U)-1)*_,_=1;break;case 64:as()===45&&(U+=Xf(xi())),x=as(),g=v=Ri(L=U+=B1(uu())),D++;break;case 45:M===45&&Ri(U)==2&&(T=0)}}return l}function jg(r,e,t,s,a,l,c,f,h,p,g,v){for(var x=a-1,S=a===0?l:[""],M=G_(S),T=0,y=0,_=0;T<s;++T)for(var D=0,L=ao(r,x+1,x=H_(y=c[T])),C=r;D<M;++D)(C=V_(y>0?S[D]+" "+L:ft(L,/&\f/g,S[D])))&&(h[_++]=C);return Cu(r,e,t,a===0?Au:f,h,p,g,v)}function H1(r,e,t,s){return Cu(r,e,t,B_,ah(D1()),ao(r,2,-2),0,s)}function qg(r,e,t,s,a){return Cu(r,e,t,oh,ao(r,0,s),ao(r,s+1,-1),s,a)}function X_(r,e,t){switch(b1(r,e)){case 5103:return Rt+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Rt+r+r;case 4789:return sa+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Rt+r+sa+r+Ot+r+r;case 5936:switch(cn(r,e+11)){case 114:return Rt+r+Ot+ft(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Rt+r+Ot+ft(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Rt+r+Ot+ft(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Rt+r+Ot+r+r;case 6165:return Rt+r+Ot+"flex-"+r+r;case 5187:return Rt+r+ft(r,/(\w+).+(:[^]+)/,Rt+"box-$1$2"+Ot+"flex-$1$2")+r;case 5443:return Rt+r+Ot+"flex-item-"+ft(r,/flex-|-self/g,"")+(qi(r,/flex-|baseline/)?"":Ot+"grid-row-"+ft(r,/flex-|-self/g,""))+r;case 4675:return Rt+r+Ot+"flex-line-pack"+ft(r,/align-content|flex-|-self/g,"")+r;case 5548:return Rt+r+Ot+ft(r,"shrink","negative")+r;case 5292:return Rt+r+Ot+ft(r,"basis","preferred-size")+r;case 6060:return Rt+"box-"+ft(r,"-grow","")+Rt+r+Ot+ft(r,"grow","positive")+r;case 4554:return Rt+ft(r,/([^-])(transform)/g,"$1"+Rt+"$2")+r;case 6187:return ft(ft(ft(r,/(zoom-|grab)/,Rt+"$1"),/(image-set)/,Rt+"$1"),r,"")+r;case 5495:case 3959:return ft(r,/(image-set\([^]*)/,Rt+"$1$`$1");case 4968:return ft(ft(r,/(.+:)(flex-)?(.*)/,Rt+"box-pack:$3"+Ot+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Rt+r+r;case 4200:if(!qi(r,/flex-|baseline/))return Ot+"grid-column-align"+ao(r,e)+r;break;case 2592:case 3360:return Ot+ft(r,"template-","")+r;case 4384:case 3616:return t&&t.some(function(s,a){return e=a,qi(s.props,/grid-\w+-end/)})?~lu(r+(t=t[e].value),"span",0)?r:Ot+ft(r,"-start","")+r+Ot+"grid-row-span:"+(~lu(t,"span",0)?qi(t,/\d+/):+qi(t,/\d+/)-+qi(r,/\d+/))+";":Ot+ft(r,"-start","")+r;case 4896:case 4128:return t&&t.some(function(s){return qi(s.props,/grid-\w+-start/)})?r:Ot+ft(ft(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return ft(r,/(.+)-inline(.+)/,Rt+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ri(r)-1-e>6)switch(cn(r,e+1)){case 109:if(cn(r,e+4)!==45)break;case 102:return ft(r,/(.+:)(.+)-([^]+)/,"$1"+Rt+"$2-$3$1"+sa+(cn(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~lu(r,"stretch",0)?X_(ft(r,"stretch","fill-available"),e,t)+r:r}break;case 5152:case 5920:return ft(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,a,l,c,f,h,p){return Ot+a+":"+l+p+(c?Ot+a+"-span:"+(f?h:+h-+l)+p:"")+r});case 4949:if(cn(r,e+6)===121)return ft(r,":",":"+Rt)+r;break;case 6444:switch(cn(r,cn(r,14)===45?18:11)){case 120:return ft(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Rt+(cn(r,14)===45?"inline-":"")+"box$3$1"+Rt+"$2$3$1"+Ot+"$2box$3")+r;case 100:return ft(r,":",":"+Ot)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ft(r,"scroll-","scroll-snap-")+r}return r}function yu(r,e){for(var t="",s=0;s<r.length;s++)t+=e(r[s],s,r,e)||"";return t}function V1(r,e,t,s){switch(r.type){case P1:if(r.children.length)break;case C1:case oh:return r.return=r.return||r.value;case B_:return"";case z_:return r.return=r.value+"{"+yu(r.children,s)+"}";case Au:if(!Ri(r.value=r.props.join(",")))return""}return Ri(t=yu(r.children,s))?r.return=r.value+"{"+t+"}":""}function G1(r){var e=G_(r);return function(t,s,a,l){for(var c="",f=0;f<e;f++)c+=r[f](t,s,a,l)||"";return c}}function W1(r){return function(e){e.root||(e=e.return)&&r(e)}}function X1(r,e,t,s){if(r.length>-1&&!r.return)switch(r.type){case oh:r.return=X_(r.value,r.length,t);return;case z_:return yu([Pr(r,{value:ft(r.value,"@","@"+Rt)})],s);case Au:if(r.length)return L1(t=r.props,function(a){switch(qi(a,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ks(Pr(r,{props:[ft(a,/:(read-\w+)/,":"+sa+"$1")]})),Ks(Pr(r,{props:[a]})),Od(r,{props:Yg(t,s)});break;case"::placeholder":Ks(Pr(r,{props:[ft(a,/:(plac\w+)/,":"+Rt+"input-$1")]})),Ks(Pr(r,{props:[ft(a,/:(plac\w+)/,":"+sa+"$1")]})),Ks(Pr(r,{props:[ft(a,/:(plac\w+)/,Ot+"input-$1")]})),Ks(Pr(r,{props:[a]})),Od(r,{props:Yg(t,s)});break}return""})}}var Y1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qn={},uo=typeof process<"u"&&qn!==void 0&&(qn.REACT_APP_SC_ATTR||qn.SC_ATTR)||"data-styled",Y_="active",j_="data-styled-version",bu="6.1.18",lh=`/*!sc*/
`,Su=typeof window<"u"&&typeof document<"u",j1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&qn!==void 0&&qn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&qn.REACT_APP_SC_DISABLE_SPEEDY!==""?qn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&qn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&qn!==void 0&&qn.SC_DISABLE_SPEEDY!==void 0&&qn.SC_DISABLE_SPEEDY!==""&&qn.SC_DISABLE_SPEEDY!=="false"&&qn.SC_DISABLE_SPEEDY),Lu=Object.freeze([]),co=Object.freeze({});function q1(r,e,t){return t===void 0&&(t=co),r.theme!==t.theme&&r.theme||e||t.theme}var q_=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,K1=/(^-|-$)/g;function $g(r){return r.replace($1,"-").replace(K1,"")}var Z1=/(a)(d)/gi,Jl=52,Kg=function(r){return String.fromCharCode(r+(r>25?39:97))};function zd(r){var e,t="";for(e=Math.abs(r);e>Jl;e=e/Jl|0)t=Kg(e%Jl)+t;return(Kg(e%Jl)+t).replace(Z1,"$1-$2")}var Yf,$_=5381,Js=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},K_=function(r){return Js($_,r)};function Q1(r){return zd(K_(r)>>>0)}function J1(r){return r.displayName||r.name||"Component"}function jf(r){return typeof r=="string"&&!0}var Z_=typeof Symbol=="function"&&Symbol.for,Q_=Z_?Symbol.for("react.memo"):60115,ew=Z_?Symbol.for("react.forward_ref"):60112,tw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},J_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},iw=((Yf={})[ew]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yf[Q_]=J_,Yf);function Zg(r){return("type"in(e=r)&&e.type.$$typeof)===Q_?J_:"$$typeof"in r?iw[r.$$typeof]:tw;var e}var rw=Object.defineProperty,sw=Object.getOwnPropertyNames,Qg=Object.getOwnPropertySymbols,ow=Object.getOwnPropertyDescriptor,aw=Object.getPrototypeOf,Jg=Object.prototype;function ev(r,e,t){if(typeof e!="string"){if(Jg){var s=aw(e);s&&s!==Jg&&ev(r,s,t)}var a=sw(e);Qg&&(a=a.concat(Qg(e)));for(var l=Zg(r),c=Zg(e),f=0;f<a.length;++f){var h=a[f];if(!(h in nw||t&&t[h]||c&&h in c||l&&h in l)){var p=ow(e,h);try{rw(r,h,p)}catch{}}}}return r}function fo(r){return typeof r=="function"}function uh(r){return typeof r=="object"&&"styledComponentId"in r}function os(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function e_(r,e){if(r.length===0)return"";for(var t=r[0],s=1;s<r.length;s++)t+=r[s];return t}function ha(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Hd(r,e,t){if(t===void 0&&(t=!1),!t&&!ha(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=Hd(r[s],e[s]);else if(ha(e))for(var s in e)r[s]=Hd(r[s],e[s]);return r}function ch(r,e){Object.defineProperty(r,"toString",{value:e})}function xa(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var lw=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},r.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,a=s.length,l=a;e>=l;)if((l<<=1)<0)throw xa(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(s),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var f=this.indexOfGroup(e+1),h=(c=0,t.length);c<h;c++)this.tag.insertRule(f,t[c])&&(this.groupSizes[e]++,f++)},r.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),a=s+t;this.groupSizes[e]=0;for(var l=s;l<a;l++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],a=this.indexOfGroup(e),l=a+s,c=a;c<l;c++)t+="".concat(this.tag.getRule(c)).concat(lh);return t},r}(),fu=new Map,Mu=new Map,du=1,eu=function(r){if(fu.has(r))return fu.get(r);for(;Mu.has(du);)du++;var e=du++;return fu.set(r,e),Mu.set(e,r),e},uw=function(r,e){du=e+1,fu.set(r,e),Mu.set(e,r)},cw="style[".concat(uo,"][").concat(j_,'="').concat(bu,'"]'),fw=new RegExp("^".concat(uo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dw=function(r,e,t){for(var s,a=t.split(","),l=0,c=a.length;l<c;l++)(s=a[l])&&r.registerName(e,s)},hw=function(r,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(lh),a=[],l=0,c=s.length;l<c;l++){var f=s[l].trim();if(f){var h=f.match(fw);if(h){var p=0|parseInt(h[1],10),g=h[2];p!==0&&(uw(g,p),dw(r,g,h[3]),r.getTag().insertRules(p,a)),a.length=0}else a.push(f)}}},t_=function(r){for(var e=document.querySelectorAll(cw),t=0,s=e.length;t<s;t++){var a=e[t];a&&a.getAttribute(uo)!==Y_&&(hw(r,a),a.parentNode&&a.parentNode.removeChild(a))}};function pw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var tv=function(r){var e=document.head,t=r||e,s=document.createElement("style"),a=function(f){var h=Array.from(f.querySelectorAll("style[".concat(uo,"]")));return h[h.length-1]}(t),l=a!==void 0?a.nextSibling:null;s.setAttribute(uo,Y_),s.setAttribute(j_,bu);var c=pw();return c&&s.setAttribute("nonce",c),t.insertBefore(s,l),s},mw=function(){function r(e){this.element=tv(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,a=0,l=s.length;a<l;a++){var c=s[a];if(c.ownerNode===t)return c}throw xa(17)}(this.element),this.length=0}return r.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},r}(),gw=function(){function r(e){this.element=tv(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),_w=function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),n_=Su,vw={isServer:!Su,useCSSOMInjection:!j1},nv=function(){function r(e,t,s){e===void 0&&(e=co),t===void 0&&(t={});var a=this;this.options=kn(kn({},vw),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&Su&&n_&&(n_=!1,t_(this)),ch(this,function(){return function(l){for(var c=l.getTag(),f=c.length,h="",p=function(v){var x=function(_){return Mu.get(_)}(v);if(x===void 0)return"continue";var S=l.names.get(x),M=c.getGroup(v);if(S===void 0||!S.size||M.length===0)return"continue";var T="".concat(uo,".g").concat(v,'[id="').concat(x,'"]'),y="";S!==void 0&&S.forEach(function(_){_.length>0&&(y+="".concat(_,","))}),h+="".concat(M).concat(T,'{content:"').concat(y,'"}').concat(lh)},g=0;g<f;g++)p(g);return h}(a)})}return r.registerId=function(e){return eu(e)},r.prototype.rehydrate=function(){!this.server&&Su&&t_(this)},r.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new r(kn(kn({},this.options),e),this.gs,t&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,a=t.target;return t.isServer?new _w(a):s?new mw(a):new gw(a)}(this.options),new lw(e)));var e},r.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},r.prototype.registerName=function(e,t){if(eu(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},r.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(eu(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(eu(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r}(),xw=/&/g,yw=/^\s*\/\/.*$/gm;function iv(r,e){return r.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=iv(t.children,e)),t})}function Sw(r){var e,t,s,a=co,l=a.options,c=l===void 0?co:l,f=a.plugins,h=f===void 0?Lu:f,p=function(x,S,M){return M.startsWith(t)&&M.endsWith(t)&&M.replaceAll(t,"").length>0?".".concat(e):x},g=h.slice();g.push(function(x){x.type===Au&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(xw,t).replace(s,p))}),c.prefix&&g.push(X1),g.push(V1);var v=function(x,S,M,T){S===void 0&&(S=""),M===void 0&&(M=""),T===void 0&&(T="&"),e=T,t=S,s=new RegExp("\\".concat(t,"\\b"),"g");var y=x.replace(yw,""),_=z1(M||S?"".concat(M," ").concat(S," { ").concat(y," }"):y);c.namespace&&(_=iv(_,c.namespace));var D=[];return yu(_,G1(g.concat(W1(function(L){return D.push(L)})))),D};return v.hash=h.length?h.reduce(function(x,S){return S.name||xa(15),Js(x,S.name)},$_).toString():"",v}var Mw=new nv,Vd=Sw(),rv=oa.createContext({shouldForwardProp:void 0,styleSheet:Mw,stylis:Vd});rv.Consumer;oa.createContext(void 0);function i_(){return Pn.useContext(rv)}var Ew=function(){function r(e,t){var s=this;this.inject=function(a,l){l===void 0&&(l=Vd);var c=s.name+l.hash;a.hasNameForId(s.id,c)||a.insertRules(s.id,c,l(s.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ch(this,function(){throw xa(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=Vd),this.name+e.hash},r}(),Tw=function(r){return r>="A"&&r<="Z"};function r_(r){for(var e="",t=0;t<r.length;t++){var s=r[t];if(t===1&&s==="-"&&r[0]==="-")return r;Tw(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var sv=function(r){return r==null||r===!1||r===""},ov=function(r){var e,t,s=[];for(var a in r){var l=r[a];r.hasOwnProperty(a)&&!sv(l)&&(Array.isArray(l)&&l.isCss||fo(l)?s.push("".concat(r_(a),":"),l,";"):ha(l)?s.push.apply(s,xu(xu(["".concat(a," {")],ov(l),!1),["}"],!1)):s.push("".concat(r_(a),": ").concat((e=a,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Y1||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function ls(r,e,t,s){if(sv(r))return[];if(uh(r))return[".".concat(r.styledComponentId)];if(fo(r)){if(!fo(l=r)||l.prototype&&l.prototype.isReactComponent||!e)return[r];var a=r(e);return ls(a,e,t,s)}var l;return r instanceof Ew?t?(r.inject(t,s),[r.getName(s)]):[r]:ha(r)?ov(r):Array.isArray(r)?Array.prototype.concat.apply(Lu,r.map(function(c){return ls(c,e,t,s)})):[r.toString()]}function ww(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(fo(t)&&!uh(t))return!1}return!0}var Aw=K_(bu),Rw=function(){function r(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&ww(e),this.componentId=t,this.baseHash=Js(Aw,t),this.baseStyle=s,nv.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,s){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=os(a,this.staticRulesId);else{var l=e_(ls(this.rules,e,t,s)),c=zd(Js(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,c)){var f=s(l,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,f)}a=os(a,c),this.staticRulesId=c}else{for(var h=Js(this.baseHash,s.hash),p="",g=0;g<this.rules.length;g++){var v=this.rules[g];if(typeof v=="string")p+=v;else if(v){var x=e_(ls(v,e,t,s));h=Js(h,x+g),p+=x}}if(p){var S=zd(h>>>0);t.hasNameForId(this.componentId,S)||t.insertRules(this.componentId,S,s(p,".".concat(S),void 0,this.componentId)),a=os(a,S)}}return a},r}(),av=oa.createContext(void 0);av.Consumer;var qf={};function Cw(r,e,t){var s=uh(r),a=r,l=!jf(r),c=e.attrs,f=c===void 0?Lu:c,h=e.componentId,p=h===void 0?function(C,z){var F=typeof C!="string"?"sc":$g(C);qf[F]=(qf[F]||0)+1;var U="".concat(F,"-").concat(Q1(bu+F+qf[F]));return z?"".concat(z,"-").concat(U):U}(e.displayName,e.parentComponentId):h,g=e.displayName,v=g===void 0?function(C){return jf(C)?"styled.".concat(C):"Styled(".concat(J1(C),")")}(r):g,x=e.displayName&&e.componentId?"".concat($g(e.displayName),"-").concat(e.componentId):e.componentId||p,S=s&&a.attrs?a.attrs.concat(f).filter(Boolean):f,M=e.shouldForwardProp;if(s&&a.shouldForwardProp){var T=a.shouldForwardProp;if(e.shouldForwardProp){var y=e.shouldForwardProp;M=function(C,z){return T(C,z)&&y(C,z)}}else M=T}var _=new Rw(t,x,s?a.componentStyle:void 0);function D(C,z){return function(F,U,X){var P=F.attrs,R=F.componentStyle,H=F.defaultProps,de=F.foldedComponentIds,W=F.styledComponentId,le=F.target,ce=oa.useContext(av),oe=i_(),ae=F.shouldForwardProp||oe.shouldForwardProp,k=q1(U,ce,H)||co,ne=function(fe,ie,he){for(var _e,Ae=kn(kn({},ie),{className:void 0,theme:he}),De=0;De<fe.length;De+=1){var it=fo(_e=fe[De])?_e(Ae):_e;for(var rt in it)Ae[rt]=rt==="className"?os(Ae[rt],it[rt]):rt==="style"?kn(kn({},Ae[rt]),it[rt]):it[rt]}return ie.className&&(Ae.className=os(Ae.className,ie.className)),Ae}(P,U,k),te=ne.as||le,N={};for(var $ in ne)ne[$]===void 0||$[0]==="$"||$==="as"||$==="theme"&&ne.theme===k||($==="forwardedAs"?N.as=ne.forwardedAs:ae&&!ae($,te)||(N[$]=ne[$]));var we=function(fe,ie){var he=i_(),_e=fe.generateAndInjectStyles(ie,he.styleSheet,he.stylis);return _e}(R,ne),q=os(de,W);return we&&(q+=" "+we),ne.className&&(q+=" "+ne.className),N[jf(te)&&!q_.has(te)?"class":"className"]=q,X&&(N.ref=X),Pn.createElement(te,N)}(L,C,z)}D.displayName=v;var L=oa.forwardRef(D);return L.attrs=S,L.componentStyle=_,L.displayName=v,L.shouldForwardProp=M,L.foldedComponentIds=s?os(a.foldedComponentIds,a.styledComponentId):"",L.styledComponentId=x,L.target=s?a.target:r,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=s?function(z){for(var F=[],U=1;U<arguments.length;U++)F[U-1]=arguments[U];for(var X=0,P=F;X<P.length;X++)Hd(z,P[X],!0);return z}({},a.defaultProps,C):C}}),ch(L,function(){return".".concat(L.styledComponentId)}),l&&ev(L,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function s_(r,e){for(var t=[r[0]],s=0,a=e.length;s<a;s+=1)t.push(e[s],r[s+1]);return t}var o_=function(r){return Object.assign(r,{isCss:!0})};function Pw(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(fo(r)||ha(r))return o_(ls(s_(Lu,xu([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?ls(s):o_(ls(s_(s,e)))}function Gd(r,e,t){if(t===void 0&&(t=co),!e)throw xa(1,e);var s=function(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return r(e,t,Pw.apply(void 0,xu([a],l,!1)))};return s.attrs=function(a){return Gd(r,e,kn(kn({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},s.withConfig=function(a){return Gd(r,e,kn(kn({},t),a))},s}var lv=function(r){return Gd(Cw,r)},er=lv;q_.forEach(function(r){er[r]=lv(r)});const bw="/lines.json",Lw=er.div`
  position: fixed; left: 0; top: 0; height: 100vh; width: 260px;
  background: linear-gradient(135deg, #1a233a 80%, #2e3b55 100%);
  box-shadow: 2px 0 16px #000a;
  border-right: 2px solid #0ff4;
  color: #0ff;
  font-family: 'Consolas', 'Roboto Mono', monospace;
  z-index: 9999;
  opacity: 0.98;
  user-select: none;
  transition: box-shadow 0.3s, width 0.3s;
  ${({expanded:r})=>!r&&`
    width: 0;
    min-width: 0;
    box-shadow: none;
    border: none;
    background: none;
    pointer-events: none;
  `}
`,Dw=er.div`
  display: ${({expanded:r})=>r?"block":"none"};
`,Iw=er.div`
  display: ${({expanded:r})=>r?"block":"none"};
  padding: 12px 0 0 0;
`,Uw=er.button`
  background: none; border: none; color: #0ff; font-size: 1.3em;
  cursor: pointer; transition: transform 0.2s;
  &[aria-expanded="true"] {
    transform: rotate(180deg);
  }
`,Nw=er.button`
  display: ${({expanded:r})=>r?"none":"block"};
  position: fixed;
  left: 8px;
  top: 8px;
  z-index: 10000;
  background: #1a233a;
  color: #0ff;
  border: 1.5px solid #0ff8;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.3em;
  box-shadow: 0 2px 8px #000a;
  cursor: pointer;
  opacity: 0.95;
  transition: opacity 0.2s;
  pointer-events: auto;
`,a_=er.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`,l_=er.label`
  color: #7fffd4; font-size: 0.98em; margin-bottom: 4px;
  text-shadow: 0 0 4px #0ff8;
`,u_=er.select`
  background: #101828; color: #0ff; border: 1px solid #0ff8;
  border-radius: 4px; padding: 6px 8px; font-size: 1em;
  margin-bottom: 0;
  outline: none;
  box-shadow: 0 0 8px #0ff2 inset;
  transition: border 0.2s, box-shadow 0.2s;
  &:focus {
    border: 1.5px solid #fff;
    box-shadow: 0 0 12px #0ff8;
  }
`,Fw=({onFilter:r})=>{const[e,t]=Pn.useState(()=>localStorage.getItem("panel-expanded")==="1"),[s,a]=Pn.useState([]),[l,c]=Pn.useState(()=>localStorage.getItem("start-port")||"all"),[f,h]=Pn.useState(()=>localStorage.getItem("end-port")||"all");return Pn.useEffect(()=>{fetch(bw).then(p=>p.json()).then(p=>{a((p.ports||[]).map(g=>g.name))})},[]),Pn.useEffect(()=>{localStorage.setItem("panel-expanded",e?"1":"0")},[e]),Pn.useEffect(()=>{localStorage.setItem("start-port",l)},[l]),Pn.useEffect(()=>{localStorage.setItem("end-port",f)},[f]),Pn.useEffect(()=>{window.dispatchEvent(new CustomEvent("filter",{detail:{start:l,end:f}})),r&&r(l,f)},[l,f]),Yt.jsxs(Lw,{id:"control-panel",expanded:e,children:[Yt.jsxs(Dw,{className:"panel-header",expanded:e,children:[Yt.jsx("span",{children:"⚙️ Control Panel"}),Yt.jsx(Uw,{id:"panel-toggle-btn","aria-expanded":e,onClick:()=>t(!1),children:"⮞"})]}),Yt.jsxs(Iw,{className:"panel-body",expanded:e,children:[Yt.jsxs(a_,{children:[Yt.jsx(l_,{htmlFor:"start-port",children:"Start Port"}),Yt.jsxs(u_,{id:"start-port",value:l,onChange:p=>c(p.target.value),children:[Yt.jsx("option",{value:"all",children:"All"}),s.map(p=>Yt.jsx("option",{value:p,children:p},p))]})]}),Yt.jsxs(a_,{children:[Yt.jsx(l_,{htmlFor:"end-port",children:"End Port"}),Yt.jsxs(u_,{id:"end-port",value:f,onChange:p=>h(p.target.value),children:[Yt.jsx("option",{value:"all",children:"All"}),s.map(p=>Yt.jsx("option",{value:p,children:p},p))]})]})]}),Yt.jsx(Nw,{id:"panel-toggle-mini",title:"Expand Control Panel",expanded:e,onClick:()=>t(!0),children:"⮞"})]})};function Ow(r){const s=new Hn,a=new Float32Array(1e4*3),l=new Float32Array(1e4*3),c=new vt(659494);for(let p=0;p<1e4;p++){const g=Math.random(),v=Math.random(),x=2*Math.PI*g,S=Math.acos(2*v-1),M=10,T=M*Math.sin(S)*Math.cos(x),y=M*Math.sin(S)*Math.sin(x),_=M*Math.cos(S);a[p*3]=T,a[p*3+1]=y,a[p*3+2]=_;const D=c.clone(),L=.7+Math.random()*.8;D.lerp(new vt(12574719),Math.random()*.3),D.multiplyScalar(L),l[p*3]=D.r,l[p*3+1]=D.g,l[p*3+2]=D.b}s.setAttribute("position",new si(a,3)),s.setAttribute("color",new si(l,3));const f=new Ji({uniforms:{time:{value:0},size:{value:.1},opacity:{value:.85}},vertexShader:`
      uniform float time;
      uniform float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        // 星空整体绕Y轴缓慢旋转
        float angle = time * 0.02;
        mat3 rot = mat3(
          cos(angle), 0, sin(angle),
          0, 1, 0,
          -sin(angle), 0, cos(angle)
        );
        vec3 pos = rot * position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        // 距离缩放，保证远近星星大小合适
        gl_PointSize = size * (300.0 / length(gl_Position.xyz));
      }
    `,fragmentShader:`
      varying vec3 vColor;
      uniform float opacity;
      void main() {
        // 原型贴图：只显示圆形区域
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        // 边缘柔和透明
        float alpha = smoothstep(0.5, 0.45, d) * opacity;
        gl_FragColor = vec4(vColor, alpha);
      }
    `,vertexColors:!0,transparent:!0,depthWrite:!1}),h=new Dy(s,f);return r.add(h),p=>{f.uniforms.time.value=p}}const c_=1e4,kw=()=>{const r=Pn.useRef(null),[e,t]=Pn.useState(0);Pn.useEffect(()=>{const a=new Cy,l=new ii(75,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=1.5;const c=new R1({antialias:!0});c.setSize(window.innerWidth,window.innerHeight),r.current.appendChild(c.domElement);const f=Ow(a),h=document.getElementById("zoom-slider"),p=1.5,g=150;h&&(h.min=String(p),h.max=String(g),h.step="0.01",h.value=String(p),h.addEventListener("input",()=>{l.position.z=Number(h.value),_()}));function v(W){l.position.z+=W,l.position.z=Math.max(p,Math.min(g,l.position.z)),h&&(h.value=l.position.z.toFixed(2)),_()}let x,S=!1,M=null,T=Date.now(),y;function _(){S=!1,T=Date.now(),t(0),x&&window.clearTimeout(x),x=window.setTimeout(()=>{S=!0,t(1)},c_)}_(),c.domElement.addEventListener("wheel",W=>{W.preventDefault(),v(W.deltaY*.2*.01)},{passive:!1});const D=new Gy(16777215,1);D.position.set(5,3,5),a.add(D);function L(W,le,ce){const oe=(90-W)*(Math.PI/180),ae=(le+180)*(Math.PI/180);return new ee(-ce*Math.sin(oe)*Math.cos(ae),ce*Math.cos(oe),ce*Math.sin(oe)*Math.sin(ae))}function C(W,le,ce){const oe=[];for(let ae=0;ae<=ce;ae++){const k=ae/ce,ne=W.clone().lerp(le,k).normalize().multiplyScalar(W.length());oe.push(ne)}return oe}function z(W,le,ce){W.rotation.y=$m.degToRad(ce+180),W.rotation.x=-$m.degToRad(le)}function F(W,le,ce){W&&(W.rotation.y+=le*.01,W.rotation.x+=ce*.01,W.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,W.rotation.x)))}function U(W,le,ce){fetch("/lines.json").then(oe=>oe.json()).then(oe=>{oe.routes.forEach(k=>{if(k.length<2)return;const ne=k.map(it=>L(it.lat,it.lng,le)),te=[],N=64;for(let it=0;it<ne.length-1;it++){const rt=C(ne[it],ne[it+1],N);it>0&&rt.shift(),te.push(...rt)}const $=new Hn().setFromPoints(te),we=new Ud({color:"yellow"}),q=new mg($,we);W.add(q);const fe=new vu(.002,12,12),ie=new mu({color:"yellow"}),he=new ri(fe,ie);W.add(he);const _e=Math.random(),Ae=te.length;function De(){const it=(performance.now()*2e-5+_e)%1,rt=Math.floor(it*(Ae-1));he.position.copy(te[rt])}ce&&ce(De)})})}function X(W,le,ce){const oe=[],ae=[];ce.forEach((ne,te)=>{const N=le+.002,$=L(ne.lat,ne.lng,N),we=new ih(.005,.001,8,16),q=new mu({color:"green",depthTest:!1}),fe=new ri(we,q);fe.position.copy($);const ie=$.clone().normalize();fe.position.addScaledVector(ie,-.0075),fe.lookAt($.clone().add(ie)),W.add(fe),oe.push({sphere:fe,phaseOffset:te*.5});const he=document.createElement("div");he.className="port-label",he.textContent=ne.name,document.body.appendChild(he);function _e(){const Ae=$.clone();W.localToWorld(Ae);const De=Ae.clone().sub(l.position).normalize(),it=Ae.clone().normalize(),rt=De.dot(it)<0;fe.visible=rt;const st=Ae.project(l),O=(st.x*.5+.5)*window.innerWidth,Dt=(-st.y*.5+.5)*window.innerHeight;he.style.left=`${O}px`,he.style.top=`${Dt}px`,he.style.display=rt?"block":"none"}c.domElement.addEventListener("render",_e),ae.push(_e)});function k(){const ne=performance.now()*.002;oe.forEach(({sphere:te,phaseOffset:N})=>{const $=ne+N,we=Math.max(0,Math.sin($)),q=1+we*we*1.2;te.scale.set(q,q,q)})}return{animatePorts:k,portLabelUpdaters:ae}}const P="/earth_atmos_2048.jpg",R=document.getElementById("loading-bar");new By().load(P,function(W){R&&(R.style.width="100%"),setTimeout(()=>{R&&(R.style.display="none")},500);const le=new vu(1,64,64),ce=new Iy({map:W}),oe=new ri(le,ce),ae=1.01;M=new ea,M.add(oe),z(M,-35,-168),a.add(M);const k=[];U(M,ae,ie=>k.push(ie));let ne=()=>{},te=[];fetch("/lines.json").then(ie=>ie.json()).then(ie=>{if(ie.routes.forEach(_e=>{if(_e.length<2)return;const Ae=_e.map(Dt=>L(Dt.lat,Dt.lng,ae)),De=[],it=128;for(let Dt=0;Dt<Ae.length-1;Dt++){const dt=C(Ae[Dt],Ae[Dt+1],it);Dt>0&&dt.shift(),De.push(...dt)}const rt=new Hn().setFromPoints(De),st=new Ud({color:"yellow"}),O=new mg(rt,st);M.add(O)}),ie.ports){const _e=X(M,ae,ie.ports);ne=_e.animatePorts,te=_e.portLabelUpdaters}});let N=!1,$=0,we=0,q=0;c.domElement.addEventListener("mousedown",ie=>{N=!0,$=ie.clientX,we=ie.clientY,_()}),c.domElement.addEventListener("mousemove",ie=>{if(!N)return;const he=ie.clientX-$,_e=ie.clientY-we;F(M,he,_e),$=ie.clientX,we=ie.clientY,_()}),c.domElement.addEventListener("mouseup",()=>{N=!1}),c.domElement.addEventListener("mouseleave",()=>{N=!1}),c.domElement.addEventListener("touchstart",ie=>{if(ie.touches.length===1)N=!0,$=ie.touches[0].clientX,we=ie.touches[0].clientY,_();else if(ie.touches.length===2){N=!1;const he=ie.touches[0].clientX-ie.touches[1].clientX,_e=ie.touches[0].clientY-ie.touches[1].clientY;q=Math.sqrt(he*he+_e*_e)}}),c.domElement.addEventListener("touchmove",ie=>{if(ie.touches.length===1&&N){const he=ie.touches[0],_e=he.clientX-$,Ae=he.clientY-we;F(M,_e,Ae),$=he.clientX,we=he.clientY,_(),ie.preventDefault()}else if(ie.touches.length===2){const he=ie.touches[0].clientX-ie.touches[1].clientX,_e=ie.touches[0].clientY-ie.touches[1].clientY,Ae=Math.sqrt(he*he+_e*_e);q&&v((q-Ae)*.01),q=Ae,ie.preventDefault()}},{passive:!1}),c.domElement.addEventListener("touchend",ie=>{N=!1,ie.touches.length<2&&(q=0)});function fe(){if(y=requestAnimationFrame(fe),f(performance.now()*.001),!S){const ie=Date.now()-T;t(Math.min(1,ie/c_))}k.forEach(ie=>ie()),ne(),te.forEach(ie=>ie()),S&&M&&(M.rotation.y+=.002),c.render(a,l)}fe()},function(W){if(R&&W.lengthComputable){const le=W.loaded/W.total*100;R.style.width=le+"%"}},function(){R&&(R.style.background="red")});function de(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",de),["mousedown","mousemove","mouseup","mouseleave","keydown","touchstart","touchmove"].forEach(W=>window.addEventListener(W,_)),()=>{var W;window.removeEventListener("resize",de),["mousedown","mousemove","mouseup","mouseleave","keydown","touchstart","touchmove"].forEach(le=>window.removeEventListener(le,_)),c.dispose(),(W=r.current)==null||W.removeChild(c.domElement),document.querySelectorAll(".port-label").forEach(le=>le.remove()),x&&window.clearTimeout(x),cancelAnimationFrame(y)}},[]);const s={position:"fixed",left:0,top:0,height:1,width:`${e*100}%`,background:e<1?"#929292":"#00290087",zIndex:99999,transition:"width 0.2s linear, background 0.2s"};return Yt.jsxs(Yt.Fragment,{children:[Yt.jsx("div",{style:s}),Yt.jsx(Fw,{}),Yt.jsx("div",{ref:r,style:{width:"100vw",height:"100vh"}})]})},Bw=K0.createRoot(document.getElementById("root"));Bw.render(Yt.jsx(kw,{}));
