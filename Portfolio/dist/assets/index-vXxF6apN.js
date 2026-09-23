(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var Rd={exports:{}},Ua={},bd={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function fT(){if(mv)return vt;mv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function m(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function S(I,ie,Se){this.props=I,this.context=ie,this.refs=w,this.updater=Se||_}S.prototype.isReactComponent={},S.prototype.setState=function(I,ie){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ie,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function y(){}y.prototype=S.prototype;function P(I,ie,Se){this.props=I,this.context=ie,this.refs=w,this.updater=Se||_}var U=P.prototype=new y;U.constructor=P,M(U,S.prototype),U.isPureReactComponent=!0;var R=Array.isArray,L=Object.prototype.hasOwnProperty,D={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(I,ie,Se){var Be,ze={},Ge=null,oe=null;if(ie!=null)for(Be in ie.ref!==void 0&&(oe=ie.ref),ie.key!==void 0&&(Ge=""+ie.key),ie)L.call(ie,Be)&&!F.hasOwnProperty(Be)&&(ze[Be]=ie[Be]);var de=arguments.length-2;if(de===1)ze.children=Se;else if(1<de){for(var Te=Array(de),tt=0;tt<de;tt++)Te[tt]=arguments[tt+2];ze.children=Te}if(I&&I.defaultProps)for(Be in de=I.defaultProps,de)ze[Be]===void 0&&(ze[Be]=de[Be]);return{$$typeof:n,type:I,key:Ge,ref:oe,props:ze,_owner:D.current}}function N(I,ie){return{$$typeof:n,type:I.type,key:ie,ref:I.ref,props:I.props,_owner:I._owner}}function B(I){return typeof I=="object"&&I!==null&&I.$$typeof===n}function V(I){var ie={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Se){return ie[Se]})}var Z=/\/+/g;function ne(I,ie){return typeof I=="object"&&I!==null&&I.key!=null?V(""+I.key):ie.toString(36)}function Y(I,ie,Se,Be,ze){var Ge=typeof I;(Ge==="undefined"||Ge==="boolean")&&(I=null);var oe=!1;if(I===null)oe=!0;else switch(Ge){case"string":case"number":oe=!0;break;case"object":switch(I.$$typeof){case n:case e:oe=!0}}if(oe)return oe=I,ze=ze(oe),I=Be===""?"."+ne(oe,0):Be,R(ze)?(Se="",I!=null&&(Se=I.replace(Z,"$&/")+"/"),Y(ze,ie,Se,"",function(tt){return tt})):ze!=null&&(B(ze)&&(ze=N(ze,Se+(!ze.key||oe&&oe.key===ze.key?"":(""+ze.key).replace(Z,"$&/")+"/")+I)),ie.push(ze)),1;if(oe=0,Be=Be===""?".":Be+":",R(I))for(var de=0;de<I.length;de++){Ge=I[de];var Te=Be+ne(Ge,de);oe+=Y(Ge,ie,Se,Te,ze)}else if(Te=m(I),typeof Te=="function")for(I=Te.call(I),de=0;!(Ge=I.next()).done;)Ge=Ge.value,Te=Be+ne(Ge,de++),oe+=Y(Ge,ie,Se,Te,ze);else if(Ge==="object")throw ie=String(I),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return oe}function Q(I,ie,Se){if(I==null)return I;var Be=[],ze=0;return Y(I,Be,"","",function(Ge){return ie.call(Se,Ge,ze++)}),Be}function fe(I){if(I._status===-1){var ie=I._result;ie=ie(),ie.then(function(Se){(I._status===0||I._status===-1)&&(I._status=1,I._result=Se)},function(Se){(I._status===0||I._status===-1)&&(I._status=2,I._result=Se)}),I._status===-1&&(I._status=0,I._result=ie)}if(I._status===1)return I._result.default;throw I._result}var j={current:null},G={transition:null},H={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:G,ReactCurrentOwner:D};function $(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:Q,forEach:function(I,ie,Se){Q(I,function(){ie.apply(this,arguments)},Se)},count:function(I){var ie=0;return Q(I,function(){ie++}),ie},toArray:function(I){return Q(I,function(ie){return ie})||[]},only:function(I){if(!B(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},vt.Component=S,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=P,vt.StrictMode=i,vt.Suspense=d,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,vt.act=$,vt.cloneElement=function(I,ie,Se){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Be=M({},I.props),ze=I.key,Ge=I.ref,oe=I._owner;if(ie!=null){if(ie.ref!==void 0&&(Ge=ie.ref,oe=D.current),ie.key!==void 0&&(ze=""+ie.key),I.type&&I.type.defaultProps)var de=I.type.defaultProps;for(Te in ie)L.call(ie,Te)&&!F.hasOwnProperty(Te)&&(Be[Te]=ie[Te]===void 0&&de!==void 0?de[Te]:ie[Te])}var Te=arguments.length-2;if(Te===1)Be.children=Se;else if(1<Te){de=Array(Te);for(var tt=0;tt<Te;tt++)de[tt]=arguments[tt+2];Be.children=de}return{$$typeof:n,type:I.type,key:ze,ref:Ge,props:Be,_owner:oe}},vt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:a,_context:I},I.Consumer=I},vt.createElement=E,vt.createFactory=function(I){var ie=E.bind(null,I);return ie.type=I,ie},vt.createRef=function(){return{current:null}},vt.forwardRef=function(I){return{$$typeof:u,render:I}},vt.isValidElement=B,vt.lazy=function(I){return{$$typeof:p,_payload:{_status:-1,_result:I},_init:fe}},vt.memo=function(I,ie){return{$$typeof:h,type:I,compare:ie===void 0?null:ie}},vt.startTransition=function(I){var ie=G.transition;G.transition={};try{I()}finally{G.transition=ie}},vt.unstable_act=$,vt.useCallback=function(I,ie){return j.current.useCallback(I,ie)},vt.useContext=function(I){return j.current.useContext(I)},vt.useDebugValue=function(){},vt.useDeferredValue=function(I){return j.current.useDeferredValue(I)},vt.useEffect=function(I,ie){return j.current.useEffect(I,ie)},vt.useId=function(){return j.current.useId()},vt.useImperativeHandle=function(I,ie,Se){return j.current.useImperativeHandle(I,ie,Se)},vt.useInsertionEffect=function(I,ie){return j.current.useInsertionEffect(I,ie)},vt.useLayoutEffect=function(I,ie){return j.current.useLayoutEffect(I,ie)},vt.useMemo=function(I,ie){return j.current.useMemo(I,ie)},vt.useReducer=function(I,ie,Se){return j.current.useReducer(I,ie,Se)},vt.useRef=function(I){return j.current.useRef(I)},vt.useState=function(I){return j.current.useState(I)},vt.useSyncExternalStore=function(I,ie,Se){return j.current.useSyncExternalStore(I,ie,Se)},vt.useTransition=function(){return j.current.useTransition()},vt.version="18.3.1",vt}var gv;function Jp(){return gv||(gv=1,bd.exports=fT()),bd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function dT(){if(vv)return Ua;vv=1;var n=Jp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,g={},m=null,_=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(_=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(g[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:u,key:m,ref:_,props:g,_owner:o.current}}return Ua.Fragment=t,Ua.jsx=c,Ua.jsxs=c,Ua}var _v;function hT(){return _v||(_v=1,Rd.exports=dT()),Rd.exports}var C=hT(),_e=Jp(),Ac={},Pd={exports:{}},Qn={},Ld={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function pT(){return xv||(xv=1,(function(n){function e(G,H){var $=G.length;G.push(H);e:for(;0<$;){var I=$-1>>>1,ie=G[I];if(0<o(ie,H))G[I]=H,G[$]=ie,$=I;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var H=G[0],$=G.pop();if($!==H){G[0]=$;e:for(var I=0,ie=G.length,Se=ie>>>1;I<Se;){var Be=2*(I+1)-1,ze=G[Be],Ge=Be+1,oe=G[Ge];if(0>o(ze,$))Ge<ie&&0>o(oe,ze)?(G[I]=oe,G[Ge]=$,I=Ge):(G[I]=ze,G[Be]=$,I=Be);else if(Ge<ie&&0>o(oe,$))G[I]=oe,G[Ge]=$,I=Ge;else break e}}return H}function o(G,H){var $=G.sortIndex-H.sortIndex;return $!==0?$:G.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,g=null,m=3,_=!1,M=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(G){for(var H=t(h);H!==null;){if(H.callback===null)i(h);else if(H.startTime<=G)i(h),H.sortIndex=H.expirationTime,e(d,H);else break;H=t(h)}}function R(G){if(w=!1,U(G),!M)if(t(d)!==null)M=!0,fe(L);else{var H=t(h);H!==null&&j(R,H.startTime-G)}}function L(G,H){M=!1,w&&(w=!1,y(E),E=-1),_=!0;var $=m;try{for(U(H),g=t(d);g!==null&&(!(g.expirationTime>H)||G&&!V());){var I=g.callback;if(typeof I=="function"){g.callback=null,m=g.priorityLevel;var ie=I(g.expirationTime<=H);H=n.unstable_now(),typeof ie=="function"?g.callback=ie:g===t(d)&&i(d),U(H)}else i(d);g=t(d)}if(g!==null)var Se=!0;else{var Be=t(h);Be!==null&&j(R,Be.startTime-H),Se=!1}return Se}finally{g=null,m=$,_=!1}}var D=!1,F=null,E=-1,N=5,B=-1;function V(){return!(n.unstable_now()-B<N)}function Z(){if(F!==null){var G=n.unstable_now();B=G;var H=!0;try{H=F(!0,G)}finally{H?ne():(D=!1,F=null)}}else D=!1}var ne;if(typeof P=="function")ne=function(){P(Z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,Q=Y.port2;Y.port1.onmessage=Z,ne=function(){Q.postMessage(null)}}else ne=function(){S(Z,0)};function fe(G){F=G,D||(D=!0,ne())}function j(G,H){E=S(function(){G(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){M||_||(M=!0,fe(L))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(G){switch(m){case 1:case 2:case 3:var H=3;break;default:H=m}var $=m;m=H;try{return G()}finally{m=$}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,H){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var $=m;m=G;try{return H()}finally{m=$}},n.unstable_scheduleCallback=function(G,H,$){var I=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?I+$:I):$=I,G){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=$+ie,G={id:p++,callback:H,priorityLevel:G,startTime:$,expirationTime:ie,sortIndex:-1},$>I?(G.sortIndex=$,e(h,G),t(d)===null&&G===t(h)&&(w?(y(E),E=-1):w=!0,j(R,$-I))):(G.sortIndex=ie,e(d,G),M||_||(M=!0,fe(L))),G},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(G){var H=m;return function(){var $=m;m=H;try{return G.apply(this,arguments)}finally{m=$}}}})(Dd)),Dd}var yv;function mT(){return yv||(yv=1,Ld.exports=pT()),Ld.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function gT(){if(Sv)return Qn;Sv=1;var n=Jp(),e=mT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function m(r){return d.call(g,r)?!0:d.call(p,r)?!1:h.test(r)?g[r]=!0:(p[r]=!0,!1)}function _(r,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function M(r,s,l,f){if(s===null||typeof s>"u"||_(r,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function w(r,s,l,f,v,x,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=v,this.mustUseProperty=l,this.propertyName=r,this.type=s,this.sanitizeURL=x,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){S[r]=new w(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];S[s]=new w(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){S[r]=new w(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){S[r]=new w(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){S[r]=new w(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){S[r]=new w(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){S[r]=new w(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){S[r]=new w(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){S[r]=new w(r,5,!1,r.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function P(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(y,P);S[s]=new w(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(y,P);S[s]=new w(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(y,P);S[s]=new w(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){S[r]=new w(r,1,!1,r.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){S[r]=new w(r,1,!1,r.toLowerCase(),null,!0,!0)});function U(r,s,l,f){var v=S.hasOwnProperty(s)?S[s]:null;(v!==null?v.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,v,f)&&(l=null),f||v===null?m(s)&&(l===null?r.removeAttribute(s):r.setAttribute(s,""+l)):v.mustUseProperty?r[v.propertyName]=l===null?v.type===3?!1:"":l:(s=v.attributeName,f=v.attributeNamespace,l===null?r.removeAttribute(s):(v=v.type,l=v===3||v===4&&l===!0?"":""+l,f?r.setAttributeNS(f,s,l):r.setAttribute(s,l))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),D=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),V=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),G=Symbol.iterator;function H(r){return r===null||typeof r!="object"?null:(r=G&&r[G]||r["@@iterator"],typeof r=="function"?r:null)}var $=Object.assign,I;function ie(r){if(I===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);I=s&&s[1]||""}return`
`+I+r}var Se=!1;function Be(r,s){if(!r||Se)return"";Se=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ue){var f=ue}Reflect.construct(r,[],s)}else{try{s.call()}catch(ue){f=ue}r.call(s.prototype)}else{try{throw Error()}catch(ue){f=ue}r()}}catch(ue){if(ue&&f&&typeof ue.stack=="string"){for(var v=ue.stack.split(`
`),x=f.stack.split(`
`),A=v.length-1,k=x.length-1;1<=A&&0<=k&&v[A]!==x[k];)k--;for(;1<=A&&0<=k;A--,k--)if(v[A]!==x[k]){if(A!==1||k!==1)do if(A--,k--,0>k||v[A]!==x[k]){var z=`
`+v[A].replace(" at new "," at ");return r.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",r.displayName)),z}while(1<=A&&0<=k);break}}}finally{Se=!1,Error.prepareStackTrace=l}return(r=r?r.displayName||r.name:"")?ie(r):""}function ze(r){switch(r.tag){case 5:return ie(r.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return r=Be(r.type,!1),r;case 11:return r=Be(r.type.render,!1),r;case 1:return r=Be(r.type,!0),r;default:return""}}function Ge(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case F:return"Fragment";case D:return"Portal";case N:return"Profiler";case E:return"StrictMode";case ne:return"Suspense";case Y:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case V:return(r.displayName||"Context")+".Consumer";case B:return(r._context.displayName||"Context")+".Provider";case Z:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Q:return s=r.displayName||null,s!==null?s:Ge(r.type)||"Memo";case fe:s=r._payload,r=r._init;try{return Ge(r(s))}catch{}}return null}function oe(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ge(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function de(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Te(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function tt(r){var s=Te(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),f=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var v=l.get,x=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return v.call(this)},set:function(A){f=""+A,x.call(this,A)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(A){f=""+A},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Oe(r){r._valueTracker||(r._valueTracker=tt(r))}function ft(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return r&&(f=Te(r)?r.checked?"true":"false":r.value),r=f,r!==l?(s.setValue(r),!0):!1}function Wt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function dt(r,s){var l=s.checked;return $({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??r._wrapperState.initialChecked})}function xt(r,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=de(s.value!=null?s.value:l),r._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ut(r,s){s=s.checked,s!=null&&U(r,"checked",s,!1)}function ht(r,s){Ut(r,s);var l=de(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&r.value===""||r.value!=l)&&(r.value=""+l):r.value!==""+l&&(r.value=""+l);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Qt(r,s.type,l):s.hasOwnProperty("defaultValue")&&Qt(r,s.type,de(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function kt(r,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,l||s===r.value||(r.value=s),r.defaultValue=s}l=r.name,l!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,l!==""&&(r.name=l)}function Qt(r,s,l){(s!=="number"||Wt(r.ownerDocument)!==r)&&(l==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+l&&(r.defaultValue=""+l))}var on=Array.isArray;function It(r,s,l,f){if(r=r.options,s){s={};for(var v=0;v<l.length;v++)s["$"+l[v]]=!0;for(l=0;l<r.length;l++)v=s.hasOwnProperty("$"+r[l].value),r[l].selected!==v&&(r[l].selected=v),v&&f&&(r[l].defaultSelected=!0)}else{for(l=""+de(l),s=null,v=0;v<r.length;v++){if(r[v].value===l){r[v].selected=!0,f&&(r[v].defaultSelected=!0);return}s!==null||r[v].disabled||(s=r[v])}s!==null&&(s.selected=!0)}}function Xt(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function q(r,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(on(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}r._wrapperState={initialValue:de(l)}}function un(r,s){var l=de(s.value),f=de(s.defaultValue);l!=null&&(l=""+l,l!==r.value&&(r.value=l),s.defaultValue==null&&r.defaultValue!==l&&(r.defaultValue=l)),f!=null&&(r.defaultValue=""+f)}function Ct(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function O(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function T(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?O(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var ee,le=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,v){MSApp.execUnsafeLocalFunction(function(){return r(s,l,f,v)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ee.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function he(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(r){Ce.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ee[s]=Ee[r]})});function pe(r,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ee.hasOwnProperty(r)&&Ee[r]?(""+s).trim():s+"px"}function ge(r,s){r=r.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,v=pe(l,s[l],f);l==="float"&&(l="cssFloat"),f?r.setProperty(l,v):r[l]=v}}var Pe=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(r,s){if(s){if(Pe[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Le(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ae=null;function Ze(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var nt=null,st=null,W=null;function Re(r){if(r=ya(r)){if(typeof nt!="function")throw Error(t(280));var s=r.stateNode;s&&(s=zl(s),nt(r.stateNode,r.type,s))}}function me(r){st?W?W.push(r):W=[r]:st=r}function be(){if(st){var r=st,s=W;if(W=st=null,Re(r),s)for(r=0;r<s.length;r++)Re(s[r])}}function Fe(r,s){return r(s)}function ve(){}var Qe=!1;function $e(r,s,l){if(Qe)return r(s,l);Qe=!0;try{return Fe(r,s,l)}finally{Qe=!1,(st!==null||W!==null)&&(ve(),be())}}function Rt(r,s){var l=r.stateNode;if(l===null)return null;var f=zl(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Et=!1;if(u)try{var En={};Object.defineProperty(En,"passive",{get:function(){Et=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Et=!1}function pi(r,s,l,f,v,x,A,k,z){var ue=Array.prototype.slice.call(arguments,3);try{s.apply(l,ue)}catch(ye){this.onError(ye)}}var cs=!1,Ys=null,us=!1,fs=null,Ku={onError:function(r){cs=!0,Ys=r}};function El(r,s,l,f,v,x,A,k,z){cs=!1,Ys=null,pi.apply(Ku,arguments)}function Tl(r,s,l,f,v,x,A,k,z){if(El.apply(this,arguments),cs){if(cs){var ue=Ys;cs=!1,Ys=null}else throw Error(t(198));us||(us=!0,fs=ue)}}function Bn(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function $s(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Qo(r){if(Bn(r)!==r)throw Error(t(188))}function wl(r){var s=r.alternate;if(!s){if(s=Bn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var l=r,f=s;;){var v=l.return;if(v===null)break;var x=v.alternate;if(x===null){if(f=v.return,f!==null){l=f;continue}break}if(v.child===x.child){for(x=v.child;x;){if(x===l)return Qo(v),r;if(x===f)return Qo(v),s;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=v,f=x;else{for(var A=!1,k=v.child;k;){if(k===l){A=!0,l=v,f=x;break}if(k===f){A=!0,f=v,l=x;break}k=k.sibling}if(!A){for(k=x.child;k;){if(k===l){A=!0,l=x,f=v;break}if(k===f){A=!0,f=x,l=v;break}k=k.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?r:s}function ds(r){return r=wl(r),r!==null?ea(r):null}function ea(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=ea(r);if(s!==null)return s;r=r.sibling}return null}var hs=e.unstable_scheduleCallback,ta=e.unstable_cancelCallback,Al=e.unstable_shouldYield,Zu=e.unstable_requestPaint,qt=e.unstable_now,Ju=e.unstable_getCurrentPriorityLevel,na=e.unstable_ImmediatePriority,ia=e.unstable_UserBlockingPriority,b=e.unstable_NormalPriority,X=e.unstable_LowPriority,ce=e.unstable_IdlePriority,re=null,te=null;function Ie(r){if(te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(re,r,void 0,(r.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Je,Ne=Math.log,Xe=Math.LN2;function Je(r){return r>>>=0,r===0?32:31-(Ne(r)/Xe|0)|0}var lt=64,ut=4194304;function He(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function yt(r,s){var l=r.pendingLanes;if(l===0)return 0;var f=0,v=r.suspendedLanes,x=r.pingedLanes,A=l&268435455;if(A!==0){var k=A&~v;k!==0?f=He(k):(x&=A,x!==0&&(f=He(x)))}else A=l&~v,A!==0?f=He(A):x!==0&&(f=He(x));if(f===0)return 0;if(s!==0&&s!==f&&(s&v)===0&&(v=f&-f,x=s&-s,v>=x||v===16&&(x&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=f;0<s;)l=31-De(s),v=1<<l,f|=r[l],s&=~v;return f}function en(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(r,s){for(var l=r.suspendedLanes,f=r.pingedLanes,v=r.expirationTimes,x=r.pendingLanes;0<x;){var A=31-De(x),k=1<<A,z=v[A];z===-1?((k&l)===0||(k&f)!==0)&&(v[A]=en(k,s)):z<=s&&(r.expiredLanes|=k),x&=~k}}function Nt(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function fn(){var r=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),r}function ke(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function rn(r,s,l){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-De(s),r[s]=l}function St(r,s){var l=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<l;){var v=31-De(l),x=1<<v;s[v]=0,f[v]=-1,r[v]=-1,l&=~x}}function Rn(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var f=31-De(l),v=1<<f;v&s|r[f]&s&&(r[f]|=s),l&=~v}}var pt=0;function wi(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var cr,bt,jt,Ai,Ft,mi=!1,Ci=[],Ri=null,Lr=null,Dr=null,ra=new Map,sa=new Map,Nr=[],NM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jm(r,s){switch(r){case"focusin":case"focusout":Ri=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":ra.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(s.pointerId)}}function oa(r,s,l,f,v,x){return r===null||r.nativeEvent!==x?(r={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[v]},s!==null&&(s=ya(s),s!==null&&bt(s)),r):(r.eventSystemFlags|=f,s=r.targetContainers,v!==null&&s.indexOf(v)===-1&&s.push(v),r)}function IM(r,s,l,f,v){switch(s){case"focusin":return Ri=oa(Ri,r,s,l,f,v),!0;case"dragenter":return Lr=oa(Lr,r,s,l,f,v),!0;case"mouseover":return Dr=oa(Dr,r,s,l,f,v),!0;case"pointerover":var x=v.pointerId;return ra.set(x,oa(ra.get(x)||null,r,s,l,f,v)),!0;case"gotpointercapture":return x=v.pointerId,sa.set(x,oa(sa.get(x)||null,r,s,l,f,v)),!0}return!1}function Qm(r){var s=ps(r.target);if(s!==null){var l=Bn(s);if(l!==null){if(s=l.tag,s===13){if(s=$s(l),s!==null){r.blockedOn=s,Ft(r.priority,function(){jt(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Cl(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=ef(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(l===null){l=r.nativeEvent;var f=new l.constructor(l.type,l);Ae=f,l.target.dispatchEvent(f),Ae=null}else return s=ya(l),s!==null&&bt(s),r.blockedOn=l,!1;s.shift()}return!0}function eg(r,s,l){Cl(r)&&l.delete(s)}function UM(){mi=!1,Ri!==null&&Cl(Ri)&&(Ri=null),Lr!==null&&Cl(Lr)&&(Lr=null),Dr!==null&&Cl(Dr)&&(Dr=null),ra.forEach(eg),sa.forEach(eg)}function aa(r,s){r.blockedOn===s&&(r.blockedOn=null,mi||(mi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,UM)))}function la(r){function s(v){return aa(v,r)}if(0<Ci.length){aa(Ci[0],r);for(var l=1;l<Ci.length;l++){var f=Ci[l];f.blockedOn===r&&(f.blockedOn=null)}}for(Ri!==null&&aa(Ri,r),Lr!==null&&aa(Lr,r),Dr!==null&&aa(Dr,r),ra.forEach(s),sa.forEach(s),l=0;l<Nr.length;l++)f=Nr[l],f.blockedOn===r&&(f.blockedOn=null);for(;0<Nr.length&&(l=Nr[0],l.blockedOn===null);)Qm(l),l.blockedOn===null&&Nr.shift()}var qs=R.ReactCurrentBatchConfig,Rl=!0;function FM(r,s,l,f){var v=pt,x=qs.transition;qs.transition=null;try{pt=1,Qu(r,s,l,f)}finally{pt=v,qs.transition=x}}function OM(r,s,l,f){var v=pt,x=qs.transition;qs.transition=null;try{pt=4,Qu(r,s,l,f)}finally{pt=v,qs.transition=x}}function Qu(r,s,l,f){if(Rl){var v=ef(r,s,l,f);if(v===null)_f(r,s,f,bl,l),Jm(r,f);else if(IM(v,r,s,l,f))f.stopPropagation();else if(Jm(r,f),s&4&&-1<NM.indexOf(r)){for(;v!==null;){var x=ya(v);if(x!==null&&cr(x),x=ef(r,s,l,f),x===null&&_f(r,s,f,bl,l),x===v)break;v=x}v!==null&&f.stopPropagation()}else _f(r,s,f,null,l)}}var bl=null;function ef(r,s,l,f){if(bl=null,r=Ze(f),r=ps(r),r!==null)if(s=Bn(r),s===null)r=null;else if(l=s.tag,l===13){if(r=$s(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return bl=r,null}function tg(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ju()){case na:return 1;case ia:return 4;case b:case X:return 16;case ce:return 536870912;default:return 16}default:return 16}}var Ir=null,tf=null,Pl=null;function ng(){if(Pl)return Pl;var r,s=tf,l=s.length,f,v="value"in Ir?Ir.value:Ir.textContent,x=v.length;for(r=0;r<l&&s[r]===v[r];r++);var A=l-r;for(f=1;f<=A&&s[l-f]===v[x-f];f++);return Pl=v.slice(r,1<f?1-f:void 0)}function Ll(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Dl(){return!0}function ig(){return!1}function si(r){function s(l,f,v,x,A){this._reactName=l,this._targetInst=v,this.type=f,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var k in r)r.hasOwnProperty(k)&&(l=r[k],this[k]=l?l(x):x[k]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Dl:ig,this.isPropagationStopped=ig,this}return $(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),s}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=si(Ks),ca=$({},Ks,{view:0,detail:0}),kM=si(ca),rf,sf,ua,Nl=$({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ua&&(ua&&r.type==="mousemove"?(rf=r.screenX-ua.screenX,sf=r.screenY-ua.screenY):sf=rf=0,ua=r),rf)},movementY:function(r){return"movementY"in r?r.movementY:sf}}),rg=si(Nl),BM=$({},Nl,{dataTransfer:0}),VM=si(BM),zM=$({},ca,{relatedTarget:0}),of=si(zM),HM=$({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),GM=si(HM),WM=$({},Ks,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),XM=si(WM),jM=$({},Ks,{data:0}),sg=si(jM),YM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KM(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=qM[r])?!!s[r]:!1}function af(){return KM}var ZM=$({},ca,{key:function(r){if(r.key){var s=YM[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ll(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?$M[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(r){return r.type==="keypress"?Ll(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ll(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),JM=si(ZM),QM=$({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),og=si(QM),eE=$({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),tE=si(eE),nE=$({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),iE=si(nE),rE=$({},Nl,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),sE=si(rE),oE=[9,13,27,32],lf=u&&"CompositionEvent"in window,fa=null;u&&"documentMode"in document&&(fa=document.documentMode);var aE=u&&"TextEvent"in window&&!fa,ag=u&&(!lf||fa&&8<fa&&11>=fa),lg=" ",cg=!1;function ug(r,s){switch(r){case"keyup":return oE.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fg(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Zs=!1;function lE(r,s){switch(r){case"compositionend":return fg(s);case"keypress":return s.which!==32?null:(cg=!0,lg);case"textInput":return r=s.data,r===lg&&cg?null:r;default:return null}}function cE(r,s){if(Zs)return r==="compositionend"||!lf&&ug(r,s)?(r=ng(),Pl=tf=Ir=null,Zs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ag&&s.locale!=="ko"?null:s.data;default:return null}}var uE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dg(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!uE[r.type]:s==="textarea"}function hg(r,s,l,f){me(f),s=kl(s,"onChange"),0<s.length&&(l=new nf("onChange","change",null,l,f),r.push({event:l,listeners:s}))}var da=null,ha=null;function fE(r){Lg(r,0)}function Il(r){var s=no(r);if(ft(s))return r}function dE(r,s){if(r==="change")return s}var pg=!1;if(u){var cf;if(u){var uf="oninput"in document;if(!uf){var mg=document.createElement("div");mg.setAttribute("oninput","return;"),uf=typeof mg.oninput=="function"}cf=uf}else cf=!1;pg=cf&&(!document.documentMode||9<document.documentMode)}function gg(){da&&(da.detachEvent("onpropertychange",vg),ha=da=null)}function vg(r){if(r.propertyName==="value"&&Il(ha)){var s=[];hg(s,ha,r,Ze(r)),$e(fE,s)}}function hE(r,s,l){r==="focusin"?(gg(),da=s,ha=l,da.attachEvent("onpropertychange",vg)):r==="focusout"&&gg()}function pE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Il(ha)}function mE(r,s){if(r==="click")return Il(s)}function gE(r,s){if(r==="input"||r==="change")return Il(s)}function vE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var bi=typeof Object.is=="function"?Object.is:vE;function pa(r,s){if(bi(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var v=l[f];if(!d.call(s,v)||!bi(r[v],s[v]))return!1}return!0}function _g(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function xg(r,s){var l=_g(r);r=0;for(var f;l;){if(l.nodeType===3){if(f=r+l.textContent.length,r<=s&&f>=s)return{node:l,offset:s-r};r=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=_g(l)}}function yg(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?yg(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Sg(){for(var r=window,s=Wt();s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=Wt(r.document)}return s}function ff(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function _E(r){var s=Sg(),l=r.focusedElem,f=r.selectionRange;if(s!==l&&l&&l.ownerDocument&&yg(l.ownerDocument.documentElement,l)){if(f!==null&&ff(l)){if(s=f.start,r=f.end,r===void 0&&(r=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(r,l.value.length);else if(r=(s=l.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var v=l.textContent.length,x=Math.min(f.start,v);f=f.end===void 0?x:Math.min(f.end,v),!r.extend&&x>f&&(v=f,f=x,x=v),v=xg(l,x);var A=xg(l,f);v&&A&&(r.rangeCount!==1||r.anchorNode!==v.node||r.anchorOffset!==v.offset||r.focusNode!==A.node||r.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(v.node,v.offset),r.removeAllRanges(),x>f?(r.addRange(s),r.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),r.addRange(s)))}}for(s=[],r=l;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)r=s[l],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var xE=u&&"documentMode"in document&&11>=document.documentMode,Js=null,df=null,ma=null,hf=!1;function Mg(r,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hf||Js==null||Js!==Wt(f)||(f=Js,"selectionStart"in f&&ff(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ma&&pa(ma,f)||(ma=f,f=kl(df,"onSelect"),0<f.length&&(s=new nf("onSelect","select",null,s,l),r.push({event:s,listeners:f}),s.target=Js)))}function Ul(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var Qs={animationend:Ul("Animation","AnimationEnd"),animationiteration:Ul("Animation","AnimationIteration"),animationstart:Ul("Animation","AnimationStart"),transitionend:Ul("Transition","TransitionEnd")},pf={},Eg={};u&&(Eg=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function Fl(r){if(pf[r])return pf[r];if(!Qs[r])return r;var s=Qs[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Eg)return pf[r]=s[l];return r}var Tg=Fl("animationend"),wg=Fl("animationiteration"),Ag=Fl("animationstart"),Cg=Fl("transitionend"),Rg=new Map,bg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(r,s){Rg.set(r,s),a(s,[r])}for(var mf=0;mf<bg.length;mf++){var gf=bg[mf],yE=gf.toLowerCase(),SE=gf[0].toUpperCase()+gf.slice(1);Ur(yE,"on"+SE)}Ur(Tg,"onAnimationEnd"),Ur(wg,"onAnimationIteration"),Ur(Ag,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(Cg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ME=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function Pg(r,s,l){var f=r.type||"unknown-event";r.currentTarget=l,Tl(f,s,void 0,r),r.currentTarget=null}function Lg(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var f=r[l],v=f.event;f=f.listeners;e:{var x=void 0;if(s)for(var A=f.length-1;0<=A;A--){var k=f[A],z=k.instance,ue=k.currentTarget;if(k=k.listener,z!==x&&v.isPropagationStopped())break e;Pg(v,k,ue),x=z}else for(A=0;A<f.length;A++){if(k=f[A],z=k.instance,ue=k.currentTarget,k=k.listener,z!==x&&v.isPropagationStopped())break e;Pg(v,k,ue),x=z}}}if(us)throw r=fs,us=!1,fs=null,r}function Ht(r,s){var l=s[Tf];l===void 0&&(l=s[Tf]=new Set);var f=r+"__bubble";l.has(f)||(Dg(s,r,2,!1),l.add(f))}function vf(r,s,l){var f=0;s&&(f|=4),Dg(l,r,f,s)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function va(r){if(!r[Ol]){r[Ol]=!0,i.forEach(function(l){l!=="selectionchange"&&(ME.has(l)||vf(l,!1,r),vf(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ol]||(s[Ol]=!0,vf("selectionchange",!1,s))}}function Dg(r,s,l,f){switch(tg(s)){case 1:var v=FM;break;case 4:v=OM;break;default:v=Qu}l=v.bind(null,s,l,r),v=void 0,!Et||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(v=!0),f?v!==void 0?r.addEventListener(s,l,{capture:!0,passive:v}):r.addEventListener(s,l,!0):v!==void 0?r.addEventListener(s,l,{passive:v}):r.addEventListener(s,l,!1)}function _f(r,s,l,f,v){var x=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var A=f.tag;if(A===3||A===4){var k=f.stateNode.containerInfo;if(k===v||k.nodeType===8&&k.parentNode===v)break;if(A===4)for(A=f.return;A!==null;){var z=A.tag;if((z===3||z===4)&&(z=A.stateNode.containerInfo,z===v||z.nodeType===8&&z.parentNode===v))return;A=A.return}for(;k!==null;){if(A=ps(k),A===null)return;if(z=A.tag,z===5||z===6){f=x=A;continue e}k=k.parentNode}}f=f.return}$e(function(){var ue=x,ye=Ze(l),Me=[];e:{var xe=Rg.get(r);if(xe!==void 0){var Ve=nf,je=r;switch(r){case"keypress":if(Ll(l)===0)break e;case"keydown":case"keyup":Ve=JM;break;case"focusin":je="focus",Ve=of;break;case"focusout":je="blur",Ve=of;break;case"beforeblur":case"afterblur":Ve=of;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=rg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=VM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=tE;break;case Tg:case wg:case Ag:Ve=GM;break;case Cg:Ve=iE;break;case"scroll":Ve=kM;break;case"wheel":Ve=sE;break;case"copy":case"cut":case"paste":Ve=XM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=og}var qe=(s&4)!==0,sn=!qe&&r==="scroll",se=qe?xe!==null?xe+"Capture":null:xe;qe=[];for(var K=ue,ae;K!==null;){ae=K;var we=ae.stateNode;if(ae.tag===5&&we!==null&&(ae=we,se!==null&&(we=Rt(K,se),we!=null&&qe.push(_a(K,we,ae)))),sn)break;K=K.return}0<qe.length&&(xe=new Ve(xe,je,null,l,ye),Me.push({event:xe,listeners:qe}))}}if((s&7)===0){e:{if(xe=r==="mouseover"||r==="pointerover",Ve=r==="mouseout"||r==="pointerout",xe&&l!==Ae&&(je=l.relatedTarget||l.fromElement)&&(ps(je)||je[ur]))break e;if((Ve||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ve?(je=l.relatedTarget||l.toElement,Ve=ue,je=je?ps(je):null,je!==null&&(sn=Bn(je),je!==sn||je.tag!==5&&je.tag!==6)&&(je=null)):(Ve=null,je=ue),Ve!==je)){if(qe=rg,we="onMouseLeave",se="onMouseEnter",K="mouse",(r==="pointerout"||r==="pointerover")&&(qe=og,we="onPointerLeave",se="onPointerEnter",K="pointer"),sn=Ve==null?xe:no(Ve),ae=je==null?xe:no(je),xe=new qe(we,K+"leave",Ve,l,ye),xe.target=sn,xe.relatedTarget=ae,we=null,ps(ye)===ue&&(qe=new qe(se,K+"enter",je,l,ye),qe.target=ae,qe.relatedTarget=sn,we=qe),sn=we,Ve&&je)t:{for(qe=Ve,se=je,K=0,ae=qe;ae;ae=eo(ae))K++;for(ae=0,we=se;we;we=eo(we))ae++;for(;0<K-ae;)qe=eo(qe),K--;for(;0<ae-K;)se=eo(se),ae--;for(;K--;){if(qe===se||se!==null&&qe===se.alternate)break t;qe=eo(qe),se=eo(se)}qe=null}else qe=null;Ve!==null&&Ng(Me,xe,Ve,qe,!1),je!==null&&sn!==null&&Ng(Me,sn,je,qe,!0)}}e:{if(xe=ue?no(ue):window,Ve=xe.nodeName&&xe.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&xe.type==="file")var et=dE;else if(dg(xe))if(pg)et=gE;else{et=pE;var it=hE}else(Ve=xe.nodeName)&&Ve.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(et=mE);if(et&&(et=et(r,ue))){hg(Me,et,l,ye);break e}it&&it(r,xe,ue),r==="focusout"&&(it=xe._wrapperState)&&it.controlled&&xe.type==="number"&&Qt(xe,"number",xe.value)}switch(it=ue?no(ue):window,r){case"focusin":(dg(it)||it.contentEditable==="true")&&(Js=it,df=ue,ma=null);break;case"focusout":ma=df=Js=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,Mg(Me,l,ye);break;case"selectionchange":if(xE)break;case"keydown":case"keyup":Mg(Me,l,ye)}var rt;if(lf)e:{switch(r){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Zs?ug(r,l)&&(at="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(ag&&l.locale!=="ko"&&(Zs||at!=="onCompositionStart"?at==="onCompositionEnd"&&Zs&&(rt=ng()):(Ir=ye,tf="value"in Ir?Ir.value:Ir.textContent,Zs=!0)),it=kl(ue,at),0<it.length&&(at=new sg(at,r,null,l,ye),Me.push({event:at,listeners:it}),rt?at.data=rt:(rt=fg(l),rt!==null&&(at.data=rt)))),(rt=aE?lE(r,l):cE(r,l))&&(ue=kl(ue,"onBeforeInput"),0<ue.length&&(ye=new sg("onBeforeInput","beforeinput",null,l,ye),Me.push({event:ye,listeners:ue}),ye.data=rt))}Lg(Me,s)})}function _a(r,s,l){return{instance:r,listener:s,currentTarget:l}}function kl(r,s){for(var l=s+"Capture",f=[];r!==null;){var v=r,x=v.stateNode;v.tag===5&&x!==null&&(v=x,x=Rt(r,l),x!=null&&f.unshift(_a(r,x,v)),x=Rt(r,s),x!=null&&f.push(_a(r,x,v))),r=r.return}return f}function eo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Ng(r,s,l,f,v){for(var x=s._reactName,A=[];l!==null&&l!==f;){var k=l,z=k.alternate,ue=k.stateNode;if(z!==null&&z===f)break;k.tag===5&&ue!==null&&(k=ue,v?(z=Rt(l,x),z!=null&&A.unshift(_a(l,z,k))):v||(z=Rt(l,x),z!=null&&A.push(_a(l,z,k)))),l=l.return}A.length!==0&&r.push({event:s,listeners:A})}var EE=/\r\n?/g,TE=/\u0000|\uFFFD/g;function Ig(r){return(typeof r=="string"?r:""+r).replace(EE,`
`).replace(TE,"")}function Bl(r,s,l){if(s=Ig(s),Ig(r)!==s&&l)throw Error(t(425))}function Vl(){}var xf=null,yf=null;function Sf(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Mf=typeof setTimeout=="function"?setTimeout:void 0,wE=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,AE=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(r){return Ug.resolve(null).then(r).catch(CE)}:Mf;function CE(r){setTimeout(function(){throw r})}function Ef(r,s){var l=s,f=0;do{var v=l.nextSibling;if(r.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(f===0){r.removeChild(v),la(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=v}while(l);la(s)}function Fr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Fg(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}var to=Math.random().toString(36).slice(2),ji="__reactFiber$"+to,xa="__reactProps$"+to,ur="__reactContainer$"+to,Tf="__reactEvents$"+to,RE="__reactListeners$"+to,bE="__reactHandles$"+to;function ps(r){var s=r[ji];if(s)return s;for(var l=r.parentNode;l;){if(s=l[ur]||l[ji]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=Fg(r);r!==null;){if(l=r[ji])return l;r=Fg(r)}return s}r=l,l=r.parentNode}return null}function ya(r){return r=r[ji]||r[ur],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function no(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function zl(r){return r[xa]||null}var wf=[],io=-1;function Or(r){return{current:r}}function Gt(r){0>io||(r.current=wf[io],wf[io]=null,io--)}function zt(r,s){io++,wf[io]=r.current,r.current=s}var kr={},bn=Or(kr),$n=Or(!1),ms=kr;function ro(r,s){var l=r.type.contextTypes;if(!l)return kr;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var v={},x;for(x in l)v[x]=s[x];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=v),v}function qn(r){return r=r.childContextTypes,r!=null}function Hl(){Gt($n),Gt(bn)}function Og(r,s,l){if(bn.current!==kr)throw Error(t(168));zt(bn,s),zt($n,l)}function kg(r,s,l){var f=r.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var v in f)if(!(v in s))throw Error(t(108,oe(r)||"Unknown",v));return $({},l,f)}function Gl(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||kr,ms=bn.current,zt(bn,r),zt($n,$n.current),!0}function Bg(r,s,l){var f=r.stateNode;if(!f)throw Error(t(169));l?(r=kg(r,s,ms),f.__reactInternalMemoizedMergedChildContext=r,Gt($n),Gt(bn),zt(bn,r)):Gt($n),zt($n,l)}var fr=null,Wl=!1,Af=!1;function Vg(r){fr===null?fr=[r]:fr.push(r)}function PE(r){Wl=!0,Vg(r)}function Br(){if(!Af&&fr!==null){Af=!0;var r=0,s=pt;try{var l=fr;for(pt=1;r<l.length;r++){var f=l[r];do f=f(!0);while(f!==null)}fr=null,Wl=!1}catch(v){throw fr!==null&&(fr=fr.slice(r+1)),hs(na,Br),v}finally{pt=s,Af=!1}}return null}var so=[],oo=0,Xl=null,jl=0,gi=[],vi=0,gs=null,dr=1,hr="";function vs(r,s){so[oo++]=jl,so[oo++]=Xl,Xl=r,jl=s}function zg(r,s,l){gi[vi++]=dr,gi[vi++]=hr,gi[vi++]=gs,gs=r;var f=dr;r=hr;var v=32-De(f)-1;f&=~(1<<v),l+=1;var x=32-De(s)+v;if(30<x){var A=v-v%5;x=(f&(1<<A)-1).toString(32),f>>=A,v-=A,dr=1<<32-De(s)+v|l<<v|f,hr=x+r}else dr=1<<x|l<<v|f,hr=r}function Cf(r){r.return!==null&&(vs(r,1),zg(r,1,0))}function Rf(r){for(;r===Xl;)Xl=so[--oo],so[oo]=null,jl=so[--oo],so[oo]=null;for(;r===gs;)gs=gi[--vi],gi[vi]=null,hr=gi[--vi],gi[vi]=null,dr=gi[--vi],gi[vi]=null}var oi=null,ai=null,Yt=!1,Pi=null;function Hg(r,s){var l=Si(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=r,s=r.deletions,s===null?(r.deletions=[l],r.flags|=16):s.push(l)}function Gg(r,s){switch(r.tag){case 5:var l=r.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,oi=r,ai=Fr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,oi=r,ai=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=gs!==null?{id:dr,overflow:hr}:null,r.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Si(18,null,null,0),l.stateNode=s,l.return=r,r.child=l,oi=r,ai=null,!0):!1;default:return!1}}function bf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Pf(r){if(Yt){var s=ai;if(s){var l=s;if(!Gg(r,s)){if(bf(r))throw Error(t(418));s=Fr(l.nextSibling);var f=oi;s&&Gg(r,s)?Hg(f,l):(r.flags=r.flags&-4097|2,Yt=!1,oi=r)}}else{if(bf(r))throw Error(t(418));r.flags=r.flags&-4097|2,Yt=!1,oi=r}}}function Wg(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;oi=r}function Yl(r){if(r!==oi)return!1;if(!Yt)return Wg(r),Yt=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Sf(r.type,r.memoizedProps)),s&&(s=ai)){if(bf(r))throw Xg(),Error(t(418));for(;s;)Hg(r,s),s=Fr(s.nextSibling)}if(Wg(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="/$"){if(s===0){ai=Fr(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}r=r.nextSibling}ai=null}}else ai=oi?Fr(r.stateNode.nextSibling):null;return!0}function Xg(){for(var r=ai;r;)r=Fr(r.nextSibling)}function ao(){ai=oi=null,Yt=!1}function Lf(r){Pi===null?Pi=[r]:Pi.push(r)}var LE=R.ReactCurrentBatchConfig;function Sa(r,s,l){if(r=l.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,r));var v=f,x=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(A){var k=v.refs;A===null?delete k[x]:k[x]=A},s._stringRef=x,s)}if(typeof r!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,r))}return r}function $l(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function jg(r){var s=r._init;return s(r._payload)}function Yg(r){function s(se,K){if(r){var ae=se.deletions;ae===null?(se.deletions=[K],se.flags|=16):ae.push(K)}}function l(se,K){if(!r)return null;for(;K!==null;)s(se,K),K=K.sibling;return null}function f(se,K){for(se=new Map;K!==null;)K.key!==null?se.set(K.key,K):se.set(K.index,K),K=K.sibling;return se}function v(se,K){return se=Yr(se,K),se.index=0,se.sibling=null,se}function x(se,K,ae){return se.index=ae,r?(ae=se.alternate,ae!==null?(ae=ae.index,ae<K?(se.flags|=2,K):ae):(se.flags|=2,K)):(se.flags|=1048576,K)}function A(se){return r&&se.alternate===null&&(se.flags|=2),se}function k(se,K,ae,we){return K===null||K.tag!==6?(K=Md(ae,se.mode,we),K.return=se,K):(K=v(K,ae),K.return=se,K)}function z(se,K,ae,we){var et=ae.type;return et===F?ye(se,K,ae.props.children,we,ae.key):K!==null&&(K.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===fe&&jg(et)===K.type)?(we=v(K,ae.props),we.ref=Sa(se,K,ae),we.return=se,we):(we=_c(ae.type,ae.key,ae.props,null,se.mode,we),we.ref=Sa(se,K,ae),we.return=se,we)}function ue(se,K,ae,we){return K===null||K.tag!==4||K.stateNode.containerInfo!==ae.containerInfo||K.stateNode.implementation!==ae.implementation?(K=Ed(ae,se.mode,we),K.return=se,K):(K=v(K,ae.children||[]),K.return=se,K)}function ye(se,K,ae,we,et){return K===null||K.tag!==7?(K=ws(ae,se.mode,we,et),K.return=se,K):(K=v(K,ae),K.return=se,K)}function Me(se,K,ae){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Md(""+K,se.mode,ae),K.return=se,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case L:return ae=_c(K.type,K.key,K.props,null,se.mode,ae),ae.ref=Sa(se,null,K),ae.return=se,ae;case D:return K=Ed(K,se.mode,ae),K.return=se,K;case fe:var we=K._init;return Me(se,we(K._payload),ae)}if(on(K)||H(K))return K=ws(K,se.mode,ae,null),K.return=se,K;$l(se,K)}return null}function xe(se,K,ae,we){var et=K!==null?K.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return et!==null?null:k(se,K,""+ae,we);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case L:return ae.key===et?z(se,K,ae,we):null;case D:return ae.key===et?ue(se,K,ae,we):null;case fe:return et=ae._init,xe(se,K,et(ae._payload),we)}if(on(ae)||H(ae))return et!==null?null:ye(se,K,ae,we,null);$l(se,ae)}return null}function Ve(se,K,ae,we,et){if(typeof we=="string"&&we!==""||typeof we=="number")return se=se.get(ae)||null,k(K,se,""+we,et);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case L:return se=se.get(we.key===null?ae:we.key)||null,z(K,se,we,et);case D:return se=se.get(we.key===null?ae:we.key)||null,ue(K,se,we,et);case fe:var it=we._init;return Ve(se,K,ae,it(we._payload),et)}if(on(we)||H(we))return se=se.get(ae)||null,ye(K,se,we,et,null);$l(K,we)}return null}function je(se,K,ae,we){for(var et=null,it=null,rt=K,at=K=0,yn=null;rt!==null&&at<ae.length;at++){rt.index>at?(yn=rt,rt=null):yn=rt.sibling;var Pt=xe(se,rt,ae[at],we);if(Pt===null){rt===null&&(rt=yn);break}r&&rt&&Pt.alternate===null&&s(se,rt),K=x(Pt,K,at),it===null?et=Pt:it.sibling=Pt,it=Pt,rt=yn}if(at===ae.length)return l(se,rt),Yt&&vs(se,at),et;if(rt===null){for(;at<ae.length;at++)rt=Me(se,ae[at],we),rt!==null&&(K=x(rt,K,at),it===null?et=rt:it.sibling=rt,it=rt);return Yt&&vs(se,at),et}for(rt=f(se,rt);at<ae.length;at++)yn=Ve(rt,se,at,ae[at],we),yn!==null&&(r&&yn.alternate!==null&&rt.delete(yn.key===null?at:yn.key),K=x(yn,K,at),it===null?et=yn:it.sibling=yn,it=yn);return r&&rt.forEach(function($r){return s(se,$r)}),Yt&&vs(se,at),et}function qe(se,K,ae,we){var et=H(ae);if(typeof et!="function")throw Error(t(150));if(ae=et.call(ae),ae==null)throw Error(t(151));for(var it=et=null,rt=K,at=K=0,yn=null,Pt=ae.next();rt!==null&&!Pt.done;at++,Pt=ae.next()){rt.index>at?(yn=rt,rt=null):yn=rt.sibling;var $r=xe(se,rt,Pt.value,we);if($r===null){rt===null&&(rt=yn);break}r&&rt&&$r.alternate===null&&s(se,rt),K=x($r,K,at),it===null?et=$r:it.sibling=$r,it=$r,rt=yn}if(Pt.done)return l(se,rt),Yt&&vs(se,at),et;if(rt===null){for(;!Pt.done;at++,Pt=ae.next())Pt=Me(se,Pt.value,we),Pt!==null&&(K=x(Pt,K,at),it===null?et=Pt:it.sibling=Pt,it=Pt);return Yt&&vs(se,at),et}for(rt=f(se,rt);!Pt.done;at++,Pt=ae.next())Pt=Ve(rt,se,at,Pt.value,we),Pt!==null&&(r&&Pt.alternate!==null&&rt.delete(Pt.key===null?at:Pt.key),K=x(Pt,K,at),it===null?et=Pt:it.sibling=Pt,it=Pt);return r&&rt.forEach(function(uT){return s(se,uT)}),Yt&&vs(se,at),et}function sn(se,K,ae,we){if(typeof ae=="object"&&ae!==null&&ae.type===F&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case L:e:{for(var et=ae.key,it=K;it!==null;){if(it.key===et){if(et=ae.type,et===F){if(it.tag===7){l(se,it.sibling),K=v(it,ae.props.children),K.return=se,se=K;break e}}else if(it.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===fe&&jg(et)===it.type){l(se,it.sibling),K=v(it,ae.props),K.ref=Sa(se,it,ae),K.return=se,se=K;break e}l(se,it);break}else s(se,it);it=it.sibling}ae.type===F?(K=ws(ae.props.children,se.mode,we,ae.key),K.return=se,se=K):(we=_c(ae.type,ae.key,ae.props,null,se.mode,we),we.ref=Sa(se,K,ae),we.return=se,se=we)}return A(se);case D:e:{for(it=ae.key;K!==null;){if(K.key===it)if(K.tag===4&&K.stateNode.containerInfo===ae.containerInfo&&K.stateNode.implementation===ae.implementation){l(se,K.sibling),K=v(K,ae.children||[]),K.return=se,se=K;break e}else{l(se,K);break}else s(se,K);K=K.sibling}K=Ed(ae,se.mode,we),K.return=se,se=K}return A(se);case fe:return it=ae._init,sn(se,K,it(ae._payload),we)}if(on(ae))return je(se,K,ae,we);if(H(ae))return qe(se,K,ae,we);$l(se,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,K!==null&&K.tag===6?(l(se,K.sibling),K=v(K,ae),K.return=se,se=K):(l(se,K),K=Md(ae,se.mode,we),K.return=se,se=K),A(se)):l(se,K)}return sn}var lo=Yg(!0),$g=Yg(!1),ql=Or(null),Kl=null,co=null,Df=null;function Nf(){Df=co=Kl=null}function If(r){var s=ql.current;Gt(ql),r._currentValue=s}function Uf(r,s,l){for(;r!==null;){var f=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),r===l)break;r=r.return}}function uo(r,s){Kl=r,Df=co=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Kn=!0),r.firstContext=null)}function _i(r){var s=r._currentValue;if(Df!==r)if(r={context:r,memoizedValue:s,next:null},co===null){if(Kl===null)throw Error(t(308));co=r,Kl.dependencies={lanes:0,firstContext:r}}else co=co.next=r;return s}var _s=null;function Ff(r){_s===null?_s=[r]:_s.push(r)}function qg(r,s,l,f){var v=s.interleaved;return v===null?(l.next=l,Ff(s)):(l.next=v.next,v.next=l),s.interleaved=l,pr(r,f)}function pr(r,s){r.lanes|=s;var l=r.alternate;for(l!==null&&(l.lanes|=s),l=r,r=r.return;r!==null;)r.childLanes|=s,l=r.alternate,l!==null&&(l.childLanes|=s),l=r,r=r.return;return l.tag===3?l.stateNode:null}var Vr=!1;function Of(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function mr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function zr(r,s,l){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(wt&2)!==0){var v=f.pending;return v===null?s.next=s:(s.next=v.next,v.next=s),f.pending=s,pr(r,l)}return v=f.interleaved,v===null?(s.next=s,Ff(f)):(s.next=v.next,v.next=s),f.interleaved=s,pr(r,l)}function Zl(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,Rn(r,l)}}function Zg(r,s){var l=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var v=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?v=x=A:x=x.next=A,l=l.next}while(l!==null);x===null?v=x=s:x=x.next=s}else v=x=s;l={baseState:f.baseState,firstBaseUpdate:v,lastBaseUpdate:x,shared:f.shared,effects:f.effects},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}function Jl(r,s,l,f){var v=r.updateQueue;Vr=!1;var x=v.firstBaseUpdate,A=v.lastBaseUpdate,k=v.shared.pending;if(k!==null){v.shared.pending=null;var z=k,ue=z.next;z.next=null,A===null?x=ue:A.next=ue,A=z;var ye=r.alternate;ye!==null&&(ye=ye.updateQueue,k=ye.lastBaseUpdate,k!==A&&(k===null?ye.firstBaseUpdate=ue:k.next=ue,ye.lastBaseUpdate=z))}if(x!==null){var Me=v.baseState;A=0,ye=ue=z=null,k=x;do{var xe=k.lane,Ve=k.eventTime;if((f&xe)===xe){ye!==null&&(ye=ye.next={eventTime:Ve,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var je=r,qe=k;switch(xe=s,Ve=l,qe.tag){case 1:if(je=qe.payload,typeof je=="function"){Me=je.call(Ve,Me,xe);break e}Me=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=qe.payload,xe=typeof je=="function"?je.call(Ve,Me,xe):je,xe==null)break e;Me=$({},Me,xe);break e;case 2:Vr=!0}}k.callback!==null&&k.lane!==0&&(r.flags|=64,xe=v.effects,xe===null?v.effects=[k]:xe.push(k))}else Ve={eventTime:Ve,lane:xe,tag:k.tag,payload:k.payload,callback:k.callback,next:null},ye===null?(ue=ye=Ve,z=Me):ye=ye.next=Ve,A|=xe;if(k=k.next,k===null){if(k=v.shared.pending,k===null)break;xe=k,k=xe.next,xe.next=null,v.lastBaseUpdate=xe,v.shared.pending=null}}while(!0);if(ye===null&&(z=Me),v.baseState=z,v.firstBaseUpdate=ue,v.lastBaseUpdate=ye,s=v.shared.interleaved,s!==null){v=s;do A|=v.lane,v=v.next;while(v!==s)}else x===null&&(v.shared.lanes=0);Ss|=A,r.lanes=A,r.memoizedState=Me}}function Jg(r,s,l){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var f=r[s],v=f.callback;if(v!==null){if(f.callback=null,f=l,typeof v!="function")throw Error(t(191,v));v.call(f)}}}var Ma={},Yi=Or(Ma),Ea=Or(Ma),Ta=Or(Ma);function xs(r){if(r===Ma)throw Error(t(174));return r}function kf(r,s){switch(zt(Ta,s),zt(Ea,r),zt(Yi,Ma),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:T(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=T(s,r)}Gt(Yi),zt(Yi,s)}function fo(){Gt(Yi),Gt(Ea),Gt(Ta)}function Qg(r){xs(Ta.current);var s=xs(Yi.current),l=T(s,r.type);s!==l&&(zt(Ea,r),zt(Yi,l))}function Bf(r){Ea.current===r&&(Gt(Yi),Gt(Ea))}var Kt=Or(0);function Ql(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Vf=[];function zf(){for(var r=0;r<Vf.length;r++)Vf[r]._workInProgressVersionPrimary=null;Vf.length=0}var ec=R.ReactCurrentDispatcher,Hf=R.ReactCurrentBatchConfig,ys=0,Zt=null,dn=null,_n=null,tc=!1,wa=!1,Aa=0,DE=0;function Pn(){throw Error(t(321))}function Gf(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!bi(r[l],s[l]))return!1;return!0}function Wf(r,s,l,f,v,x){if(ys=x,Zt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ec.current=r===null||r.memoizedState===null?FE:OE,r=l(f,v),wa){x=0;do{if(wa=!1,Aa=0,25<=x)throw Error(t(301));x+=1,_n=dn=null,s.updateQueue=null,ec.current=kE,r=l(f,v)}while(wa)}if(ec.current=rc,s=dn!==null&&dn.next!==null,ys=0,_n=dn=Zt=null,tc=!1,s)throw Error(t(300));return r}function Xf(){var r=Aa!==0;return Aa=0,r}function $i(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?Zt.memoizedState=_n=r:_n=_n.next=r,_n}function xi(){if(dn===null){var r=Zt.alternate;r=r!==null?r.memoizedState:null}else r=dn.next;var s=_n===null?Zt.memoizedState:_n.next;if(s!==null)_n=s,dn=r;else{if(r===null)throw Error(t(310));dn=r,r={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},_n===null?Zt.memoizedState=_n=r:_n=_n.next=r}return _n}function Ca(r,s){return typeof s=="function"?s(r):s}function jf(r){var s=xi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=dn,v=f.baseQueue,x=l.pending;if(x!==null){if(v!==null){var A=v.next;v.next=x.next,x.next=A}f.baseQueue=v=x,l.pending=null}if(v!==null){x=v.next,f=f.baseState;var k=A=null,z=null,ue=x;do{var ye=ue.lane;if((ys&ye)===ye)z!==null&&(z=z.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),f=ue.hasEagerState?ue.eagerState:r(f,ue.action);else{var Me={lane:ye,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};z===null?(k=z=Me,A=f):z=z.next=Me,Zt.lanes|=ye,Ss|=ye}ue=ue.next}while(ue!==null&&ue!==x);z===null?A=f:z.next=k,bi(f,s.memoizedState)||(Kn=!0),s.memoizedState=f,s.baseState=A,s.baseQueue=z,l.lastRenderedState=f}if(r=l.interleaved,r!==null){v=r;do x=v.lane,Zt.lanes|=x,Ss|=x,v=v.next;while(v!==r)}else v===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Yf(r){var s=xi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=r;var f=l.dispatch,v=l.pending,x=s.memoizedState;if(v!==null){l.pending=null;var A=v=v.next;do x=r(x,A.action),A=A.next;while(A!==v);bi(x,s.memoizedState)||(Kn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,f]}function e0(){}function t0(r,s){var l=Zt,f=xi(),v=s(),x=!bi(f.memoizedState,v);if(x&&(f.memoizedState=v,Kn=!0),f=f.queue,$f(r0.bind(null,l,f,r),[r]),f.getSnapshot!==s||x||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,Ra(9,i0.bind(null,l,f,v,s),void 0,null),xn===null)throw Error(t(349));(ys&30)!==0||n0(l,s,v)}return v}function n0(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=Zt.updateQueue,s===null?(s={lastEffect:null,stores:null},Zt.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function i0(r,s,l,f){s.value=l,s.getSnapshot=f,s0(s)&&o0(r)}function r0(r,s,l){return l(function(){s0(s)&&o0(r)})}function s0(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!bi(r,l)}catch{return!0}}function o0(r){var s=pr(r,1);s!==null&&Ii(s,r,1,-1)}function a0(r){var s=$i();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:r},s.queue=r,r=r.dispatch=UE.bind(null,Zt,r),[s.memoizedState,r]}function Ra(r,s,l,f){return r={tag:r,create:s,destroy:l,deps:f,next:null},s=Zt.updateQueue,s===null?(s={lastEffect:null,stores:null},Zt.updateQueue=s,s.lastEffect=r.next=r):(l=s.lastEffect,l===null?s.lastEffect=r.next=r:(f=l.next,l.next=r,r.next=f,s.lastEffect=r)),r}function l0(){return xi().memoizedState}function nc(r,s,l,f){var v=$i();Zt.flags|=r,v.memoizedState=Ra(1|s,l,void 0,f===void 0?null:f)}function ic(r,s,l,f){var v=xi();f=f===void 0?null:f;var x=void 0;if(dn!==null){var A=dn.memoizedState;if(x=A.destroy,f!==null&&Gf(f,A.deps)){v.memoizedState=Ra(s,l,x,f);return}}Zt.flags|=r,v.memoizedState=Ra(1|s,l,x,f)}function c0(r,s){return nc(8390656,8,r,s)}function $f(r,s){return ic(2048,8,r,s)}function u0(r,s){return ic(4,2,r,s)}function f0(r,s){return ic(4,4,r,s)}function d0(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function h0(r,s,l){return l=l!=null?l.concat([r]):null,ic(4,4,d0.bind(null,s,r),l)}function qf(){}function p0(r,s){var l=xi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Gf(s,f[1])?f[0]:(l.memoizedState=[r,s],r)}function m0(r,s){var l=xi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Gf(s,f[1])?f[0]:(r=r(),l.memoizedState=[r,s],r)}function g0(r,s,l){return(ys&21)===0?(r.baseState&&(r.baseState=!1,Kn=!0),r.memoizedState=l):(bi(l,s)||(l=fn(),Zt.lanes|=l,Ss|=l,r.baseState=!0),s)}function NE(r,s){var l=pt;pt=l!==0&&4>l?l:4,r(!0);var f=Hf.transition;Hf.transition={};try{r(!1),s()}finally{pt=l,Hf.transition=f}}function v0(){return xi().memoizedState}function IE(r,s,l){var f=Xr(r);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},_0(r))x0(s,l);else if(l=qg(r,s,l,f),l!==null){var v=zn();Ii(l,r,f,v),y0(l,s,f)}}function UE(r,s,l){var f=Xr(r),v={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(_0(r))x0(s,v);else{var x=r.alternate;if(r.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var A=s.lastRenderedState,k=x(A,l);if(v.hasEagerState=!0,v.eagerState=k,bi(k,A)){var z=s.interleaved;z===null?(v.next=v,Ff(s)):(v.next=z.next,z.next=v),s.interleaved=v;return}}catch{}finally{}l=qg(r,s,v,f),l!==null&&(v=zn(),Ii(l,r,f,v),y0(l,s,f))}}function _0(r){var s=r.alternate;return r===Zt||s!==null&&s===Zt}function x0(r,s){wa=tc=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function y0(r,s,l){if((l&4194240)!==0){var f=s.lanes;f&=r.pendingLanes,l|=f,s.lanes=l,Rn(r,l)}}var rc={readContext:_i,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},FE={readContext:_i,useCallback:function(r,s){return $i().memoizedState=[r,s===void 0?null:s],r},useContext:_i,useEffect:c0,useImperativeHandle:function(r,s,l){return l=l!=null?l.concat([r]):null,nc(4194308,4,d0.bind(null,s,r),l)},useLayoutEffect:function(r,s){return nc(4194308,4,r,s)},useInsertionEffect:function(r,s){return nc(4,2,r,s)},useMemo:function(r,s){var l=$i();return s=s===void 0?null:s,r=r(),l.memoizedState=[r,s],r},useReducer:function(r,s,l){var f=$i();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},f.queue=r,r=r.dispatch=IE.bind(null,Zt,r),[f.memoizedState,r]},useRef:function(r){var s=$i();return r={current:r},s.memoizedState=r},useState:a0,useDebugValue:qf,useDeferredValue:function(r){return $i().memoizedState=r},useTransition:function(){var r=a0(!1),s=r[0];return r=NE.bind(null,r[1]),$i().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,l){var f=Zt,v=$i();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),xn===null)throw Error(t(349));(ys&30)!==0||n0(f,s,l)}v.memoizedState=l;var x={value:l,getSnapshot:s};return v.queue=x,c0(r0.bind(null,f,x,r),[r]),f.flags|=2048,Ra(9,i0.bind(null,f,x,l,s),void 0,null),l},useId:function(){var r=$i(),s=xn.identifierPrefix;if(Yt){var l=hr,f=dr;l=(f&~(1<<32-De(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Aa++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=DE++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},OE={readContext:_i,useCallback:p0,useContext:_i,useEffect:$f,useImperativeHandle:h0,useInsertionEffect:u0,useLayoutEffect:f0,useMemo:m0,useReducer:jf,useRef:l0,useState:function(){return jf(Ca)},useDebugValue:qf,useDeferredValue:function(r){var s=xi();return g0(s,dn.memoizedState,r)},useTransition:function(){var r=jf(Ca)[0],s=xi().memoizedState;return[r,s]},useMutableSource:e0,useSyncExternalStore:t0,useId:v0,unstable_isNewReconciler:!1},kE={readContext:_i,useCallback:p0,useContext:_i,useEffect:$f,useImperativeHandle:h0,useInsertionEffect:u0,useLayoutEffect:f0,useMemo:m0,useReducer:Yf,useRef:l0,useState:function(){return Yf(Ca)},useDebugValue:qf,useDeferredValue:function(r){var s=xi();return dn===null?s.memoizedState=r:g0(s,dn.memoizedState,r)},useTransition:function(){var r=Yf(Ca)[0],s=xi().memoizedState;return[r,s]},useMutableSource:e0,useSyncExternalStore:t0,useId:v0,unstable_isNewReconciler:!1};function Li(r,s){if(r&&r.defaultProps){s=$({},s),r=r.defaultProps;for(var l in r)s[l]===void 0&&(s[l]=r[l]);return s}return s}function Kf(r,s,l,f){s=r.memoizedState,l=l(f,s),l=l==null?s:$({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var sc={isMounted:function(r){return(r=r._reactInternals)?Bn(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var f=zn(),v=Xr(r),x=mr(f,v);x.payload=s,l!=null&&(x.callback=l),s=zr(r,x,v),s!==null&&(Ii(s,r,v,f),Zl(s,r,v))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var f=zn(),v=Xr(r),x=mr(f,v);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=zr(r,x,v),s!==null&&(Ii(s,r,v,f),Zl(s,r,v))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=zn(),f=Xr(r),v=mr(l,f);v.tag=2,s!=null&&(v.callback=s),s=zr(r,v,f),s!==null&&(Ii(s,r,f,l),Zl(s,r,f))}};function S0(r,s,l,f,v,x,A){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,x,A):s.prototype&&s.prototype.isPureReactComponent?!pa(l,f)||!pa(v,x):!0}function M0(r,s,l){var f=!1,v=kr,x=s.contextType;return typeof x=="object"&&x!==null?x=_i(x):(v=qn(s)?ms:bn.current,f=s.contextTypes,x=(f=f!=null)?ro(r,v):kr),s=new s(l,x),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=sc,r.stateNode=s,s._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=v,r.__reactInternalMemoizedMaskedChildContext=x),s}function E0(r,s,l,f){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==r&&sc.enqueueReplaceState(s,s.state,null)}function Zf(r,s,l,f){var v=r.stateNode;v.props=l,v.state=r.memoizedState,v.refs={},Of(r);var x=s.contextType;typeof x=="object"&&x!==null?v.context=_i(x):(x=qn(s)?ms:bn.current,v.context=ro(r,x)),v.state=r.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Kf(r,s,x,l),v.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(s=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),s!==v.state&&sc.enqueueReplaceState(v,v.state,null),Jl(r,l,v,f),v.state=r.memoizedState),typeof v.componentDidMount=="function"&&(r.flags|=4194308)}function ho(r,s){try{var l="",f=s;do l+=ze(f),f=f.return;while(f);var v=l}catch(x){v=`
Error generating stack: `+x.message+`
`+x.stack}return{value:r,source:s,stack:v,digest:null}}function Jf(r,s,l){return{value:r,source:null,stack:l??null,digest:s??null}}function Qf(r,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var BE=typeof WeakMap=="function"?WeakMap:Map;function T0(r,s,l){l=mr(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){dc||(dc=!0,pd=f),Qf(r,s)},l}function w0(r,s,l){l=mr(-1,l),l.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var v=s.value;l.payload=function(){return f(v)},l.callback=function(){Qf(r,s)}}var x=r.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Qf(r,s),typeof f!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function A0(r,s,l){var f=r.pingCache;if(f===null){f=r.pingCache=new BE;var v=new Set;f.set(s,v)}else v=f.get(s),v===void 0&&(v=new Set,f.set(s,v));v.has(l)||(v.add(l),r=QE.bind(null,r,s,l),s.then(r,r))}function C0(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function R0(r,s,l,f,v){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=mr(-1,1),s.tag=2,zr(l,s,1))),l.lanes|=1),r):(r.flags|=65536,r.lanes=v,r)}var VE=R.ReactCurrentOwner,Kn=!1;function Vn(r,s,l,f){s.child=r===null?$g(s,null,l,f):lo(s,r.child,l,f)}function b0(r,s,l,f,v){l=l.render;var x=s.ref;return uo(s,v),f=Wf(r,s,l,f,x,v),l=Xf(),r!==null&&!Kn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~v,gr(r,s,v)):(Yt&&l&&Cf(s),s.flags|=1,Vn(r,s,f,v),s.child)}function P0(r,s,l,f,v){if(r===null){var x=l.type;return typeof x=="function"&&!Sd(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,L0(r,s,x,f,v)):(r=_c(l.type,null,f,s,s.mode,v),r.ref=s.ref,r.return=s,s.child=r)}if(x=r.child,(r.lanes&v)===0){var A=x.memoizedProps;if(l=l.compare,l=l!==null?l:pa,l(A,f)&&r.ref===s.ref)return gr(r,s,v)}return s.flags|=1,r=Yr(x,f),r.ref=s.ref,r.return=s,s.child=r}function L0(r,s,l,f,v){if(r!==null){var x=r.memoizedProps;if(pa(x,f)&&r.ref===s.ref)if(Kn=!1,s.pendingProps=f=x,(r.lanes&v)!==0)(r.flags&131072)!==0&&(Kn=!0);else return s.lanes=r.lanes,gr(r,s,v)}return ed(r,s,l,f,v)}function D0(r,s,l){var f=s.pendingProps,v=f.children,x=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(mo,li),li|=l;else{if((l&1073741824)===0)return r=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,zt(mo,li),li|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,zt(mo,li),li|=f}else x!==null?(f=x.baseLanes|l,s.memoizedState=null):f=l,zt(mo,li),li|=f;return Vn(r,s,v,l),s.child}function N0(r,s){var l=s.ref;(r===null&&l!==null||r!==null&&r.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function ed(r,s,l,f,v){var x=qn(l)?ms:bn.current;return x=ro(s,x),uo(s,v),l=Wf(r,s,l,f,x,v),f=Xf(),r!==null&&!Kn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~v,gr(r,s,v)):(Yt&&f&&Cf(s),s.flags|=1,Vn(r,s,l,v),s.child)}function I0(r,s,l,f,v){if(qn(l)){var x=!0;Gl(s)}else x=!1;if(uo(s,v),s.stateNode===null)ac(r,s),M0(s,l,f),Zf(s,l,f,v),f=!0;else if(r===null){var A=s.stateNode,k=s.memoizedProps;A.props=k;var z=A.context,ue=l.contextType;typeof ue=="object"&&ue!==null?ue=_i(ue):(ue=qn(l)?ms:bn.current,ue=ro(s,ue));var ye=l.getDerivedStateFromProps,Me=typeof ye=="function"||typeof A.getSnapshotBeforeUpdate=="function";Me||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==f||z!==ue)&&E0(s,A,f,ue),Vr=!1;var xe=s.memoizedState;A.state=xe,Jl(s,f,A,v),z=s.memoizedState,k!==f||xe!==z||$n.current||Vr?(typeof ye=="function"&&(Kf(s,l,ye,f),z=s.memoizedState),(k=Vr||S0(s,l,k,f,xe,z,ue))?(Me||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=z),A.props=f,A.state=z,A.context=ue,f=k):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{A=s.stateNode,Kg(r,s),k=s.memoizedProps,ue=s.type===s.elementType?k:Li(s.type,k),A.props=ue,Me=s.pendingProps,xe=A.context,z=l.contextType,typeof z=="object"&&z!==null?z=_i(z):(z=qn(l)?ms:bn.current,z=ro(s,z));var Ve=l.getDerivedStateFromProps;(ye=typeof Ve=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==Me||xe!==z)&&E0(s,A,f,z),Vr=!1,xe=s.memoizedState,A.state=xe,Jl(s,f,A,v);var je=s.memoizedState;k!==Me||xe!==je||$n.current||Vr?(typeof Ve=="function"&&(Kf(s,l,Ve,f),je=s.memoizedState),(ue=Vr||S0(s,l,ue,f,xe,je,z)||!1)?(ye||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(f,je,z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(f,je,z)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||k===r.memoizedProps&&xe===r.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&xe===r.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=je),A.props=f,A.state=je,A.context=z,f=ue):(typeof A.componentDidUpdate!="function"||k===r.memoizedProps&&xe===r.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&xe===r.memoizedState||(s.flags|=1024),f=!1)}return td(r,s,l,f,x,v)}function td(r,s,l,f,v,x){N0(r,s);var A=(s.flags&128)!==0;if(!f&&!A)return v&&Bg(s,l,!1),gr(r,s,x);f=s.stateNode,VE.current=s;var k=A&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,r!==null&&A?(s.child=lo(s,r.child,null,x),s.child=lo(s,null,k,x)):Vn(r,s,k,x),s.memoizedState=f.state,v&&Bg(s,l,!0),s.child}function U0(r){var s=r.stateNode;s.pendingContext?Og(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Og(r,s.context,!1),kf(r,s.containerInfo)}function F0(r,s,l,f,v){return ao(),Lf(v),s.flags|=256,Vn(r,s,l,f),s.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function id(r){return{baseLanes:r,cachePool:null,transitions:null}}function O0(r,s,l){var f=s.pendingProps,v=Kt.current,x=!1,A=(s.flags&128)!==0,k;if((k=A)||(k=r!==null&&r.memoizedState===null?!1:(v&2)!==0),k?(x=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(v|=1),zt(Kt,v&1),r===null)return Pf(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=f.children,r=f.fallback,x?(f=s.mode,x=s.child,A={mode:"hidden",children:A},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=xc(A,f,0,null),r=ws(r,f,l,null),x.return=s,r.return=s,x.sibling=r,s.child=x,s.child.memoizedState=id(l),s.memoizedState=nd,r):rd(s,A));if(v=r.memoizedState,v!==null&&(k=v.dehydrated,k!==null))return zE(r,s,A,f,k,v,l);if(x){x=f.fallback,A=s.mode,v=r.child,k=v.sibling;var z={mode:"hidden",children:f.children};return(A&1)===0&&s.child!==v?(f=s.child,f.childLanes=0,f.pendingProps=z,s.deletions=null):(f=Yr(v,z),f.subtreeFlags=v.subtreeFlags&14680064),k!==null?x=Yr(k,x):(x=ws(x,A,l,null),x.flags|=2),x.return=s,f.return=s,f.sibling=x,s.child=f,f=x,x=s.child,A=r.child.memoizedState,A=A===null?id(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=r.childLanes&~l,s.memoizedState=nd,f}return x=r.child,r=x.sibling,f=Yr(x,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,r!==null&&(l=s.deletions,l===null?(s.deletions=[r],s.flags|=16):l.push(r)),s.child=f,s.memoizedState=null,f}function rd(r,s){return s=xc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function oc(r,s,l,f){return f!==null&&Lf(f),lo(s,r.child,null,l),r=rd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function zE(r,s,l,f,v,x,A){if(l)return s.flags&256?(s.flags&=-257,f=Jf(Error(t(422))),oc(r,s,A,f)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(x=f.fallback,v=s.mode,f=xc({mode:"visible",children:f.children},v,0,null),x=ws(x,v,A,null),x.flags|=2,f.return=s,x.return=s,f.sibling=x,s.child=f,(s.mode&1)!==0&&lo(s,r.child,null,A),s.child.memoizedState=id(A),s.memoizedState=nd,x);if((s.mode&1)===0)return oc(r,s,A,null);if(v.data==="$!"){if(f=v.nextSibling&&v.nextSibling.dataset,f)var k=f.dgst;return f=k,x=Error(t(419)),f=Jf(x,f,void 0),oc(r,s,A,f)}if(k=(A&r.childLanes)!==0,Kn||k){if(f=xn,f!==null){switch(A&-A){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(f.suspendedLanes|A))!==0?0:v,v!==0&&v!==x.retryLane&&(x.retryLane=v,pr(r,v),Ii(f,r,v,-1))}return yd(),f=Jf(Error(t(421))),oc(r,s,A,f)}return v.data==="$?"?(s.flags|=128,s.child=r.child,s=eT.bind(null,r),v._reactRetry=s,null):(r=x.treeContext,ai=Fr(v.nextSibling),oi=s,Yt=!0,Pi=null,r!==null&&(gi[vi++]=dr,gi[vi++]=hr,gi[vi++]=gs,dr=r.id,hr=r.overflow,gs=s),s=rd(s,f.children),s.flags|=4096,s)}function k0(r,s,l){r.lanes|=s;var f=r.alternate;f!==null&&(f.lanes|=s),Uf(r.return,s,l)}function sd(r,s,l,f,v){var x=r.memoizedState;x===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:v}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=v)}function B0(r,s,l){var f=s.pendingProps,v=f.revealOrder,x=f.tail;if(Vn(r,s,f.children,l),f=Kt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&k0(r,l,s);else if(r.tag===19)k0(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(zt(Kt,f),(s.mode&1)===0)s.memoizedState=null;else switch(v){case"forwards":for(l=s.child,v=null;l!==null;)r=l.alternate,r!==null&&Ql(r)===null&&(v=l),l=l.sibling;l=v,l===null?(v=s.child,s.child=null):(v=l.sibling,l.sibling=null),sd(s,!1,v,l,x);break;case"backwards":for(l=null,v=s.child,s.child=null;v!==null;){if(r=v.alternate,r!==null&&Ql(r)===null){s.child=v;break}r=v.sibling,v.sibling=l,l=v,v=r}sd(s,!0,l,null,x);break;case"together":sd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ac(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function gr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),Ss|=s.lanes,(l&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,l=Yr(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=Yr(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function HE(r,s,l){switch(s.tag){case 3:U0(s),ao();break;case 5:Qg(s);break;case 1:qn(s.type)&&Gl(s);break;case 4:kf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,v=s.memoizedProps.value;zt(ql,f._currentValue),f._currentValue=v;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(zt(Kt,Kt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?O0(r,s,l):(zt(Kt,Kt.current&1),r=gr(r,s,l),r!==null?r.sibling:null);zt(Kt,Kt.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(r.flags&128)!==0){if(f)return B0(r,s,l);s.flags|=128}if(v=s.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),zt(Kt,Kt.current),f)break;return null;case 22:case 23:return s.lanes=0,D0(r,s,l)}return gr(r,s,l)}var V0,od,z0,H0;V0=function(r,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)r.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},od=function(){},z0=function(r,s,l,f){var v=r.memoizedProps;if(v!==f){r=s.stateNode,xs(Yi.current);var x=null;switch(l){case"input":v=dt(r,v),f=dt(r,f),x=[];break;case"select":v=$({},v,{value:void 0}),f=$({},f,{value:void 0}),x=[];break;case"textarea":v=Xt(r,v),f=Xt(r,f),x=[];break;default:typeof v.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=Vl)}Ke(l,f);var A;l=null;for(ue in v)if(!f.hasOwnProperty(ue)&&v.hasOwnProperty(ue)&&v[ue]!=null)if(ue==="style"){var k=v[ue];for(A in k)k.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?x||(x=[]):(x=x||[]).push(ue,null));for(ue in f){var z=f[ue];if(k=v!=null?v[ue]:void 0,f.hasOwnProperty(ue)&&z!==k&&(z!=null||k!=null))if(ue==="style")if(k){for(A in k)!k.hasOwnProperty(A)||z&&z.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in z)z.hasOwnProperty(A)&&k[A]!==z[A]&&(l||(l={}),l[A]=z[A])}else l||(x||(x=[]),x.push(ue,l)),l=z;else ue==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,k=k?k.__html:void 0,z!=null&&k!==z&&(x=x||[]).push(ue,z)):ue==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(ue,""+z):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(z!=null&&ue==="onScroll"&&Ht("scroll",r),x||k===z||(x=[])):(x=x||[]).push(ue,z))}l&&(x=x||[]).push("style",l);var ue=x;(s.updateQueue=ue)&&(s.flags|=4)}},H0=function(r,s,l,f){l!==f&&(s.flags|=4)};function ba(r,s){if(!Yt)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function Ln(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,f=0;if(s)for(var v=r.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags&14680064,f|=v.flags&14680064,v.return=r,v=v.sibling;else for(v=r.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags,f|=v.flags,v.return=r,v=v.sibling;return r.subtreeFlags|=f,r.childLanes=l,s}function GE(r,s,l){var f=s.pendingProps;switch(Rf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(s),null;case 1:return qn(s.type)&&Hl(),Ln(s),null;case 3:return f=s.stateNode,fo(),Gt($n),Gt(bn),zf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(Yl(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Pi!==null&&(vd(Pi),Pi=null))),od(r,s),Ln(s),null;case 5:Bf(s);var v=xs(Ta.current);if(l=s.type,r!==null&&s.stateNode!=null)z0(r,s,l,f,v),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Ln(s),null}if(r=xs(Yi.current),Yl(s)){f=s.stateNode,l=s.type;var x=s.memoizedProps;switch(f[ji]=s,f[xa]=x,r=(s.mode&1)!==0,l){case"dialog":Ht("cancel",f),Ht("close",f);break;case"iframe":case"object":case"embed":Ht("load",f);break;case"video":case"audio":for(v=0;v<ga.length;v++)Ht(ga[v],f);break;case"source":Ht("error",f);break;case"img":case"image":case"link":Ht("error",f),Ht("load",f);break;case"details":Ht("toggle",f);break;case"input":xt(f,x),Ht("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},Ht("invalid",f);break;case"textarea":q(f,x),Ht("invalid",f)}Ke(l,x),v=null;for(var A in x)if(x.hasOwnProperty(A)){var k=x[A];A==="children"?typeof k=="string"?f.textContent!==k&&(x.suppressHydrationWarning!==!0&&Bl(f.textContent,k,r),v=["children",k]):typeof k=="number"&&f.textContent!==""+k&&(x.suppressHydrationWarning!==!0&&Bl(f.textContent,k,r),v=["children",""+k]):o.hasOwnProperty(A)&&k!=null&&A==="onScroll"&&Ht("scroll",f)}switch(l){case"input":Oe(f),kt(f,x,!0);break;case"textarea":Oe(f),Ct(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Vl)}f=v,s.updateQueue=f,f!==null&&(s.flags|=4)}else{A=v.nodeType===9?v:v.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=O(l)),r==="http://www.w3.org/1999/xhtml"?l==="script"?(r=A.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=A.createElement(l,{is:f.is}):(r=A.createElement(l),l==="select"&&(A=r,f.multiple?A.multiple=!0:f.size&&(A.size=f.size))):r=A.createElementNS(r,l),r[ji]=s,r[xa]=f,V0(r,s,!1,!1),s.stateNode=r;e:{switch(A=Le(l,f),l){case"dialog":Ht("cancel",r),Ht("close",r),v=f;break;case"iframe":case"object":case"embed":Ht("load",r),v=f;break;case"video":case"audio":for(v=0;v<ga.length;v++)Ht(ga[v],r);v=f;break;case"source":Ht("error",r),v=f;break;case"img":case"image":case"link":Ht("error",r),Ht("load",r),v=f;break;case"details":Ht("toggle",r),v=f;break;case"input":xt(r,f),v=dt(r,f),Ht("invalid",r);break;case"option":v=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},v=$({},f,{value:void 0}),Ht("invalid",r);break;case"textarea":q(r,f),v=Xt(r,f),Ht("invalid",r);break;default:v=f}Ke(l,v),k=v;for(x in k)if(k.hasOwnProperty(x)){var z=k[x];x==="style"?ge(r,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&le(r,z)):x==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&he(r,z):typeof z=="number"&&he(r,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?z!=null&&x==="onScroll"&&Ht("scroll",r):z!=null&&U(r,x,z,A))}switch(l){case"input":Oe(r),kt(r,f,!1);break;case"textarea":Oe(r),Ct(r);break;case"option":f.value!=null&&r.setAttribute("value",""+de(f.value));break;case"select":r.multiple=!!f.multiple,x=f.value,x!=null?It(r,!!f.multiple,x,!1):f.defaultValue!=null&&It(r,!!f.multiple,f.defaultValue,!0);break;default:typeof v.onClick=="function"&&(r.onclick=Vl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ln(s),null;case 6:if(r&&s.stateNode!=null)H0(r,s,r.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=xs(Ta.current),xs(Yi.current),Yl(s)){if(f=s.stateNode,l=s.memoizedProps,f[ji]=s,(x=f.nodeValue!==l)&&(r=oi,r!==null))switch(r.tag){case 3:Bl(f.nodeValue,l,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Bl(f.nodeValue,l,(r.mode&1)!==0)}x&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[ji]=s,s.stateNode=f}return Ln(s),null;case 13:if(Gt(Kt),f=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Yt&&ai!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Xg(),ao(),s.flags|=98560,x=!1;else if(x=Yl(s),f!==null&&f.dehydrated!==null){if(r===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[ji]=s}else ao(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ln(s),x=!1}else Pi!==null&&(vd(Pi),Pi=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Kt.current&1)!==0?hn===0&&(hn=3):yd())),s.updateQueue!==null&&(s.flags|=4),Ln(s),null);case 4:return fo(),od(r,s),r===null&&va(s.stateNode.containerInfo),Ln(s),null;case 10:return If(s.type._context),Ln(s),null;case 17:return qn(s.type)&&Hl(),Ln(s),null;case 19:if(Gt(Kt),x=s.memoizedState,x===null)return Ln(s),null;if(f=(s.flags&128)!==0,A=x.rendering,A===null)if(f)ba(x,!1);else{if(hn!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(A=Ql(r),A!==null){for(s.flags|=128,ba(x,!1),f=A.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)x=l,r=f,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=r,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,r=A.dependencies,x.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),l=l.sibling;return zt(Kt,Kt.current&1|2),s.child}r=r.sibling}x.tail!==null&&qt()>go&&(s.flags|=128,f=!0,ba(x,!1),s.lanes=4194304)}else{if(!f)if(r=Ql(A),r!==null){if(s.flags|=128,f=!0,l=r.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),ba(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!Yt)return Ln(s),null}else 2*qt()-x.renderingStartTime>go&&l!==1073741824&&(s.flags|=128,f=!0,ba(x,!1),s.lanes=4194304);x.isBackwards?(A.sibling=s.child,s.child=A):(l=x.last,l!==null?l.sibling=A:s.child=A,x.last=A)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=qt(),s.sibling=null,l=Kt.current,zt(Kt,f?l&1|2:l&1),s):(Ln(s),null);case 22:case 23:return xd(),f=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(li&1073741824)!==0&&(Ln(s),s.subtreeFlags&6&&(s.flags|=8192)):Ln(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function WE(r,s){switch(Rf(s),s.tag){case 1:return qn(s.type)&&Hl(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return fo(),Gt($n),Gt(bn),zf(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Bf(s),null;case 13:if(Gt(Kt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ao()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Gt(Kt),null;case 4:return fo(),null;case 10:return If(s.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var lc=!1,Dn=!1,XE=typeof WeakSet=="function"?WeakSet:Set,We=null;function po(r,s){var l=r.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){tn(r,s,f)}else l.current=null}function ad(r,s,l){try{l()}catch(f){tn(r,s,f)}}var G0=!1;function jE(r,s){if(xf=Rl,r=Sg(),ff(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var v=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var A=0,k=-1,z=-1,ue=0,ye=0,Me=r,xe=null;t:for(;;){for(var Ve;Me!==l||v!==0&&Me.nodeType!==3||(k=A+v),Me!==x||f!==0&&Me.nodeType!==3||(z=A+f),Me.nodeType===3&&(A+=Me.nodeValue.length),(Ve=Me.firstChild)!==null;)xe=Me,Me=Ve;for(;;){if(Me===r)break t;if(xe===l&&++ue===v&&(k=A),xe===x&&++ye===f&&(z=A),(Ve=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Ve}l=k===-1||z===-1?null:{start:k,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(yf={focusedElem:r,selectionRange:l},Rl=!1,We=s;We!==null;)if(s=We,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,We=r;else for(;We!==null;){s=We;try{var je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var qe=je.memoizedProps,sn=je.memoizedState,se=s.stateNode,K=se.getSnapshotBeforeUpdate(s.elementType===s.type?qe:Li(s.type,qe),sn);se.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var ae=s.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){tn(s,s.return,we)}if(r=s.sibling,r!==null){r.return=s.return,We=r;break}We=s.return}return je=G0,G0=!1,je}function Pa(r,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var v=f=f.next;do{if((v.tag&r)===r){var x=v.destroy;v.destroy=void 0,x!==void 0&&ad(s,l,x)}v=v.next}while(v!==f)}}function cc(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&r)===r){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function ld(r){var s=r.ref;if(s!==null){var l=r.stateNode;switch(r.tag){case 5:r=l;break;default:r=l}typeof s=="function"?s(r):s.current=r}}function W0(r){var s=r.alternate;s!==null&&(r.alternate=null,W0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[ji],delete s[xa],delete s[Tf],delete s[RE],delete s[bE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function X0(r){return r.tag===5||r.tag===3||r.tag===4}function j0(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||X0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function cd(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Vl));else if(f!==4&&(r=r.child,r!==null))for(cd(r,s,l),r=r.sibling;r!==null;)cd(r,s,l),r=r.sibling}function ud(r,s,l){var f=r.tag;if(f===5||f===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(ud(r,s,l),r=r.sibling;r!==null;)ud(r,s,l),r=r.sibling}var Tn=null,Di=!1;function Hr(r,s,l){for(l=l.child;l!==null;)Y0(r,s,l),l=l.sibling}function Y0(r,s,l){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(re,l)}catch{}switch(l.tag){case 5:Dn||po(l,s);case 6:var f=Tn,v=Di;Tn=null,Hr(r,s,l),Tn=f,Di=v,Tn!==null&&(Di?(r=Tn,l=l.stateNode,r.nodeType===8?r.parentNode.removeChild(l):r.removeChild(l)):Tn.removeChild(l.stateNode));break;case 18:Tn!==null&&(Di?(r=Tn,l=l.stateNode,r.nodeType===8?Ef(r.parentNode,l):r.nodeType===1&&Ef(r,l),la(r)):Ef(Tn,l.stateNode));break;case 4:f=Tn,v=Di,Tn=l.stateNode.containerInfo,Di=!0,Hr(r,s,l),Tn=f,Di=v;break;case 0:case 11:case 14:case 15:if(!Dn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){v=f=f.next;do{var x=v,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&ad(l,s,A),v=v.next}while(v!==f)}Hr(r,s,l);break;case 1:if(!Dn&&(po(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(k){tn(l,s,k)}Hr(r,s,l);break;case 21:Hr(r,s,l);break;case 22:l.mode&1?(Dn=(f=Dn)||l.memoizedState!==null,Hr(r,s,l),Dn=f):Hr(r,s,l);break;default:Hr(r,s,l)}}function $0(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var l=r.stateNode;l===null&&(l=r.stateNode=new XE),s.forEach(function(f){var v=tT.bind(null,r,f);l.has(f)||(l.add(f),f.then(v,v))})}}function Ni(r,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var v=l[f];try{var x=r,A=s,k=A;e:for(;k!==null;){switch(k.tag){case 5:Tn=k.stateNode,Di=!1;break e;case 3:Tn=k.stateNode.containerInfo,Di=!0;break e;case 4:Tn=k.stateNode.containerInfo,Di=!0;break e}k=k.return}if(Tn===null)throw Error(t(160));Y0(x,A,v),Tn=null,Di=!1;var z=v.alternate;z!==null&&(z.return=null),v.return=null}catch(ue){tn(v,s,ue)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)q0(s,r),s=s.sibling}function q0(r,s){var l=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Ni(s,r),qi(r),f&4){try{Pa(3,r,r.return),cc(3,r)}catch(qe){tn(r,r.return,qe)}try{Pa(5,r,r.return)}catch(qe){tn(r,r.return,qe)}}break;case 1:Ni(s,r),qi(r),f&512&&l!==null&&po(l,l.return);break;case 5:if(Ni(s,r),qi(r),f&512&&l!==null&&po(l,l.return),r.flags&32){var v=r.stateNode;try{he(v,"")}catch(qe){tn(r,r.return,qe)}}if(f&4&&(v=r.stateNode,v!=null)){var x=r.memoizedProps,A=l!==null?l.memoizedProps:x,k=r.type,z=r.updateQueue;if(r.updateQueue=null,z!==null)try{k==="input"&&x.type==="radio"&&x.name!=null&&Ut(v,x),Le(k,A);var ue=Le(k,x);for(A=0;A<z.length;A+=2){var ye=z[A],Me=z[A+1];ye==="style"?ge(v,Me):ye==="dangerouslySetInnerHTML"?le(v,Me):ye==="children"?he(v,Me):U(v,ye,Me,ue)}switch(k){case"input":ht(v,x);break;case"textarea":un(v,x);break;case"select":var xe=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!x.multiple;var Ve=x.value;Ve!=null?It(v,!!x.multiple,Ve,!1):xe!==!!x.multiple&&(x.defaultValue!=null?It(v,!!x.multiple,x.defaultValue,!0):It(v,!!x.multiple,x.multiple?[]:"",!1))}v[xa]=x}catch(qe){tn(r,r.return,qe)}}break;case 6:if(Ni(s,r),qi(r),f&4){if(r.stateNode===null)throw Error(t(162));v=r.stateNode,x=r.memoizedProps;try{v.nodeValue=x}catch(qe){tn(r,r.return,qe)}}break;case 3:if(Ni(s,r),qi(r),f&4&&l!==null&&l.memoizedState.isDehydrated)try{la(s.containerInfo)}catch(qe){tn(r,r.return,qe)}break;case 4:Ni(s,r),qi(r);break;case 13:Ni(s,r),qi(r),v=r.child,v.flags&8192&&(x=v.memoizedState!==null,v.stateNode.isHidden=x,!x||v.alternate!==null&&v.alternate.memoizedState!==null||(hd=qt())),f&4&&$0(r);break;case 22:if(ye=l!==null&&l.memoizedState!==null,r.mode&1?(Dn=(ue=Dn)||ye,Ni(s,r),Dn=ue):Ni(s,r),qi(r),f&8192){if(ue=r.memoizedState!==null,(r.stateNode.isHidden=ue)&&!ye&&(r.mode&1)!==0)for(We=r,ye=r.child;ye!==null;){for(Me=We=ye;We!==null;){switch(xe=We,Ve=xe.child,xe.tag){case 0:case 11:case 14:case 15:Pa(4,xe,xe.return);break;case 1:po(xe,xe.return);var je=xe.stateNode;if(typeof je.componentWillUnmount=="function"){f=xe,l=xe.return;try{s=f,je.props=s.memoizedProps,je.state=s.memoizedState,je.componentWillUnmount()}catch(qe){tn(f,l,qe)}}break;case 5:po(xe,xe.return);break;case 22:if(xe.memoizedState!==null){J0(Me);continue}}Ve!==null?(Ve.return=xe,We=Ve):J0(Me)}ye=ye.sibling}e:for(ye=null,Me=r;;){if(Me.tag===5){if(ye===null){ye=Me;try{v=Me.stateNode,ue?(x=v.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(k=Me.stateNode,z=Me.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null,k.style.display=pe("display",A))}catch(qe){tn(r,r.return,qe)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=ue?"":Me.memoizedProps}catch(qe){tn(r,r.return,qe)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===r)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===r)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===r)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Ni(s,r),qi(r),f&4&&$0(r);break;case 21:break;default:Ni(s,r),qi(r)}}function qi(r){var s=r.flags;if(s&2){try{e:{for(var l=r.return;l!==null;){if(X0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var v=f.stateNode;f.flags&32&&(he(v,""),f.flags&=-33);var x=j0(r);ud(r,x,v);break;case 3:case 4:var A=f.stateNode.containerInfo,k=j0(r);cd(r,k,A);break;default:throw Error(t(161))}}catch(z){tn(r,r.return,z)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function YE(r,s,l){We=r,K0(r)}function K0(r,s,l){for(var f=(r.mode&1)!==0;We!==null;){var v=We,x=v.child;if(v.tag===22&&f){var A=v.memoizedState!==null||lc;if(!A){var k=v.alternate,z=k!==null&&k.memoizedState!==null||Dn;k=lc;var ue=Dn;if(lc=A,(Dn=z)&&!ue)for(We=v;We!==null;)A=We,z=A.child,A.tag===22&&A.memoizedState!==null?Q0(v):z!==null?(z.return=A,We=z):Q0(v);for(;x!==null;)We=x,K0(x),x=x.sibling;We=v,lc=k,Dn=ue}Z0(r)}else(v.subtreeFlags&8772)!==0&&x!==null?(x.return=v,We=x):Z0(r)}}function Z0(r){for(;We!==null;){var s=We;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Dn||cc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Dn)if(l===null)f.componentDidMount();else{var v=s.elementType===s.type?l.memoizedProps:Li(s.type,l.memoizedProps);f.componentDidUpdate(v,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&Jg(s,x,f);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Jg(s,A,l)}break;case 5:var k=s.stateNode;if(l===null&&s.flags&4){l=k;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ue=s.alternate;if(ue!==null){var ye=ue.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&la(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||s.flags&512&&ld(s)}catch(xe){tn(s,s.return,xe)}}if(s===r){We=null;break}if(l=s.sibling,l!==null){l.return=s.return,We=l;break}We=s.return}}function J0(r){for(;We!==null;){var s=We;if(s===r){We=null;break}var l=s.sibling;if(l!==null){l.return=s.return,We=l;break}We=s.return}}function Q0(r){for(;We!==null;){var s=We;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{cc(4,s)}catch(z){tn(s,l,z)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var v=s.return;try{f.componentDidMount()}catch(z){tn(s,v,z)}}var x=s.return;try{ld(s)}catch(z){tn(s,x,z)}break;case 5:var A=s.return;try{ld(s)}catch(z){tn(s,A,z)}}}catch(z){tn(s,s.return,z)}if(s===r){We=null;break}var k=s.sibling;if(k!==null){k.return=s.return,We=k;break}We=s.return}}var $E=Math.ceil,uc=R.ReactCurrentDispatcher,fd=R.ReactCurrentOwner,yi=R.ReactCurrentBatchConfig,wt=0,xn=null,an=null,wn=0,li=0,mo=Or(0),hn=0,La=null,Ss=0,fc=0,dd=0,Da=null,Zn=null,hd=0,go=1/0,vr=null,dc=!1,pd=null,Gr=null,hc=!1,Wr=null,pc=0,Na=0,md=null,mc=-1,gc=0;function zn(){return(wt&6)!==0?qt():mc!==-1?mc:mc=qt()}function Xr(r){return(r.mode&1)===0?1:(wt&2)!==0&&wn!==0?wn&-wn:LE.transition!==null?(gc===0&&(gc=fn()),gc):(r=pt,r!==0||(r=window.event,r=r===void 0?16:tg(r.type)),r)}function Ii(r,s,l,f){if(50<Na)throw Na=0,md=null,Error(t(185));rn(r,l,f),((wt&2)===0||r!==xn)&&(r===xn&&((wt&2)===0&&(fc|=l),hn===4&&jr(r,wn)),Jn(r,f),l===1&&wt===0&&(s.mode&1)===0&&(go=qt()+500,Wl&&Br()))}function Jn(r,s){var l=r.callbackNode;Bt(r,s);var f=yt(r,r===xn?wn:0);if(f===0)l!==null&&ta(l),r.callbackNode=null,r.callbackPriority=0;else if(s=f&-f,r.callbackPriority!==s){if(l!=null&&ta(l),s===1)r.tag===0?PE(tv.bind(null,r)):Vg(tv.bind(null,r)),AE(function(){(wt&6)===0&&Br()}),l=null;else{switch(wi(f)){case 1:l=na;break;case 4:l=ia;break;case 16:l=b;break;case 536870912:l=ce;break;default:l=b}l=cv(l,ev.bind(null,r))}r.callbackPriority=s,r.callbackNode=l}}function ev(r,s){if(mc=-1,gc=0,(wt&6)!==0)throw Error(t(327));var l=r.callbackNode;if(vo()&&r.callbackNode!==l)return null;var f=yt(r,r===xn?wn:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||s)s=vc(r,f);else{s=f;var v=wt;wt|=2;var x=iv();(xn!==r||wn!==s)&&(vr=null,go=qt()+500,Es(r,s));do try{ZE();break}catch(k){nv(r,k)}while(!0);Nf(),uc.current=x,wt=v,an!==null?s=0:(xn=null,wn=0,s=hn)}if(s!==0){if(s===2&&(v=Nt(r),v!==0&&(f=v,s=gd(r,v))),s===1)throw l=La,Es(r,0),jr(r,f),Jn(r,qt()),l;if(s===6)jr(r,f);else{if(v=r.current.alternate,(f&30)===0&&!qE(v)&&(s=vc(r,f),s===2&&(x=Nt(r),x!==0&&(f=x,s=gd(r,x))),s===1))throw l=La,Es(r,0),jr(r,f),Jn(r,qt()),l;switch(r.finishedWork=v,r.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:Ts(r,Zn,vr);break;case 3:if(jr(r,f),(f&130023424)===f&&(s=hd+500-qt(),10<s)){if(yt(r,0)!==0)break;if(v=r.suspendedLanes,(v&f)!==f){zn(),r.pingedLanes|=r.suspendedLanes&v;break}r.timeoutHandle=Mf(Ts.bind(null,r,Zn,vr),s);break}Ts(r,Zn,vr);break;case 4:if(jr(r,f),(f&4194240)===f)break;for(s=r.eventTimes,v=-1;0<f;){var A=31-De(f);x=1<<A,A=s[A],A>v&&(v=A),f&=~x}if(f=v,f=qt()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*$E(f/1960))-f,10<f){r.timeoutHandle=Mf(Ts.bind(null,r,Zn,vr),f);break}Ts(r,Zn,vr);break;case 5:Ts(r,Zn,vr);break;default:throw Error(t(329))}}}return Jn(r,qt()),r.callbackNode===l?ev.bind(null,r):null}function gd(r,s){var l=Da;return r.current.memoizedState.isDehydrated&&(Es(r,s).flags|=256),r=vc(r,s),r!==2&&(s=Zn,Zn=l,s!==null&&vd(s)),r}function vd(r){Zn===null?Zn=r:Zn.push.apply(Zn,r)}function qE(r){for(var s=r;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var v=l[f],x=v.getSnapshot;v=v.value;try{if(!bi(x(),v))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function jr(r,s){for(s&=~dd,s&=~fc,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var l=31-De(s),f=1<<l;r[l]=-1,s&=~f}}function tv(r){if((wt&6)!==0)throw Error(t(327));vo();var s=yt(r,0);if((s&1)===0)return Jn(r,qt()),null;var l=vc(r,s);if(r.tag!==0&&l===2){var f=Nt(r);f!==0&&(s=f,l=gd(r,f))}if(l===1)throw l=La,Es(r,0),jr(r,s),Jn(r,qt()),l;if(l===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Ts(r,Zn,vr),Jn(r,qt()),null}function _d(r,s){var l=wt;wt|=1;try{return r(s)}finally{wt=l,wt===0&&(go=qt()+500,Wl&&Br())}}function Ms(r){Wr!==null&&Wr.tag===0&&(wt&6)===0&&vo();var s=wt;wt|=1;var l=yi.transition,f=pt;try{if(yi.transition=null,pt=1,r)return r()}finally{pt=f,yi.transition=l,wt=s,(wt&6)===0&&Br()}}function xd(){li=mo.current,Gt(mo)}function Es(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;if(l!==-1&&(r.timeoutHandle=-1,wE(l)),an!==null)for(l=an.return;l!==null;){var f=l;switch(Rf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Hl();break;case 3:fo(),Gt($n),Gt(bn),zf();break;case 5:Bf(f);break;case 4:fo();break;case 13:Gt(Kt);break;case 19:Gt(Kt);break;case 10:If(f.type._context);break;case 22:case 23:xd()}l=l.return}if(xn=r,an=r=Yr(r.current,null),wn=li=s,hn=0,La=null,dd=fc=Ss=0,Zn=Da=null,_s!==null){for(s=0;s<_s.length;s++)if(l=_s[s],f=l.interleaved,f!==null){l.interleaved=null;var v=f.next,x=l.pending;if(x!==null){var A=x.next;x.next=v,f.next=A}l.pending=f}_s=null}return r}function nv(r,s){do{var l=an;try{if(Nf(),ec.current=rc,tc){for(var f=Zt.memoizedState;f!==null;){var v=f.queue;v!==null&&(v.pending=null),f=f.next}tc=!1}if(ys=0,_n=dn=Zt=null,wa=!1,Aa=0,fd.current=null,l===null||l.return===null){hn=1,La=s,an=null;break}e:{var x=r,A=l.return,k=l,z=s;if(s=wn,k.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ue=z,ye=k,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ve=C0(A);if(Ve!==null){Ve.flags&=-257,R0(Ve,A,k,x,s),Ve.mode&1&&A0(x,ue,s),s=Ve,z=ue;var je=s.updateQueue;if(je===null){var qe=new Set;qe.add(z),s.updateQueue=qe}else je.add(z);break e}else{if((s&1)===0){A0(x,ue,s),yd();break e}z=Error(t(426))}}else if(Yt&&k.mode&1){var sn=C0(A);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),R0(sn,A,k,x,s),Lf(ho(z,k));break e}}x=z=ho(z,k),hn!==4&&(hn=2),Da===null?Da=[x]:Da.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var se=T0(x,z,s);Zg(x,se);break e;case 1:k=z;var K=x.type,ae=x.stateNode;if((x.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Gr===null||!Gr.has(ae)))){x.flags|=65536,s&=-s,x.lanes|=s;var we=w0(x,k,s);Zg(x,we);break e}}x=x.return}while(x!==null)}sv(l)}catch(et){s=et,an===l&&l!==null&&(an=l=l.return);continue}break}while(!0)}function iv(){var r=uc.current;return uc.current=rc,r===null?rc:r}function yd(){(hn===0||hn===3||hn===2)&&(hn=4),xn===null||(Ss&268435455)===0&&(fc&268435455)===0||jr(xn,wn)}function vc(r,s){var l=wt;wt|=2;var f=iv();(xn!==r||wn!==s)&&(vr=null,Es(r,s));do try{KE();break}catch(v){nv(r,v)}while(!0);if(Nf(),wt=l,uc.current=f,an!==null)throw Error(t(261));return xn=null,wn=0,hn}function KE(){for(;an!==null;)rv(an)}function ZE(){for(;an!==null&&!Al();)rv(an)}function rv(r){var s=lv(r.alternate,r,li);r.memoizedProps=r.pendingProps,s===null?sv(r):an=s,fd.current=null}function sv(r){var s=r;do{var l=s.alternate;if(r=s.return,(s.flags&32768)===0){if(l=GE(l,s,li),l!==null){an=l;return}}else{if(l=WE(l,s),l!==null){l.flags&=32767,an=l;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{hn=6,an=null;return}}if(s=s.sibling,s!==null){an=s;return}an=s=r}while(s!==null);hn===0&&(hn=5)}function Ts(r,s,l){var f=pt,v=yi.transition;try{yi.transition=null,pt=1,JE(r,s,l,f)}finally{yi.transition=v,pt=f}return null}function JE(r,s,l,f){do vo();while(Wr!==null);if((wt&6)!==0)throw Error(t(327));l=r.finishedWork;var v=r.finishedLanes;if(l===null)return null;if(r.finishedWork=null,r.finishedLanes=0,l===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var x=l.lanes|l.childLanes;if(St(r,x),r===xn&&(an=xn=null,wn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||hc||(hc=!0,cv(b,function(){return vo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=yi.transition,yi.transition=null;var A=pt;pt=1;var k=wt;wt|=4,fd.current=null,jE(r,l),q0(l,r),_E(yf),Rl=!!xf,yf=xf=null,r.current=l,YE(l),Zu(),wt=k,pt=A,yi.transition=x}else r.current=l;if(hc&&(hc=!1,Wr=r,pc=v),x=r.pendingLanes,x===0&&(Gr=null),Ie(l.stateNode),Jn(r,qt()),s!==null)for(f=r.onRecoverableError,l=0;l<s.length;l++)v=s[l],f(v.value,{componentStack:v.stack,digest:v.digest});if(dc)throw dc=!1,r=pd,pd=null,r;return(pc&1)!==0&&r.tag!==0&&vo(),x=r.pendingLanes,(x&1)!==0?r===md?Na++:(Na=0,md=r):Na=0,Br(),null}function vo(){if(Wr!==null){var r=wi(pc),s=yi.transition,l=pt;try{if(yi.transition=null,pt=16>r?16:r,Wr===null)var f=!1;else{if(r=Wr,Wr=null,pc=0,(wt&6)!==0)throw Error(t(331));var v=wt;for(wt|=4,We=r.current;We!==null;){var x=We,A=x.child;if((We.flags&16)!==0){var k=x.deletions;if(k!==null){for(var z=0;z<k.length;z++){var ue=k[z];for(We=ue;We!==null;){var ye=We;switch(ye.tag){case 0:case 11:case 15:Pa(8,ye,x)}var Me=ye.child;if(Me!==null)Me.return=ye,We=Me;else for(;We!==null;){ye=We;var xe=ye.sibling,Ve=ye.return;if(W0(ye),ye===ue){We=null;break}if(xe!==null){xe.return=Ve,We=xe;break}We=Ve}}}var je=x.alternate;if(je!==null){var qe=je.child;if(qe!==null){je.child=null;do{var sn=qe.sibling;qe.sibling=null,qe=sn}while(qe!==null)}}We=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,We=A;else e:for(;We!==null;){if(x=We,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Pa(9,x,x.return)}var se=x.sibling;if(se!==null){se.return=x.return,We=se;break e}We=x.return}}var K=r.current;for(We=K;We!==null;){A=We;var ae=A.child;if((A.subtreeFlags&2064)!==0&&ae!==null)ae.return=A,We=ae;else e:for(A=K;We!==null;){if(k=We,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:cc(9,k)}}catch(et){tn(k,k.return,et)}if(k===A){We=null;break e}var we=k.sibling;if(we!==null){we.return=k.return,We=we;break e}We=k.return}}if(wt=v,Br(),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(re,r)}catch{}f=!0}return f}finally{pt=l,yi.transition=s}}return!1}function ov(r,s,l){s=ho(l,s),s=T0(r,s,1),r=zr(r,s,1),s=zn(),r!==null&&(rn(r,1,s),Jn(r,s))}function tn(r,s,l){if(r.tag===3)ov(r,r,l);else for(;s!==null;){if(s.tag===3){ov(s,r,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Gr===null||!Gr.has(f))){r=ho(l,r),r=w0(s,r,1),s=zr(s,r,1),r=zn(),s!==null&&(rn(s,1,r),Jn(s,r));break}}s=s.return}}function QE(r,s,l){var f=r.pingCache;f!==null&&f.delete(s),s=zn(),r.pingedLanes|=r.suspendedLanes&l,xn===r&&(wn&l)===l&&(hn===4||hn===3&&(wn&130023424)===wn&&500>qt()-hd?Es(r,0):dd|=l),Jn(r,s)}function av(r,s){s===0&&((r.mode&1)===0?s=1:(s=ut,ut<<=1,(ut&130023424)===0&&(ut=4194304)));var l=zn();r=pr(r,s),r!==null&&(rn(r,s,l),Jn(r,l))}function eT(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),av(r,l)}function tT(r,s){var l=0;switch(r.tag){case 13:var f=r.stateNode,v=r.memoizedState;v!==null&&(l=v.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),av(r,l)}var lv;lv=function(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps||$n.current)Kn=!0;else{if((r.lanes&l)===0&&(s.flags&128)===0)return Kn=!1,HE(r,s,l);Kn=(r.flags&131072)!==0}else Kn=!1,Yt&&(s.flags&1048576)!==0&&zg(s,jl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;ac(r,s),r=s.pendingProps;var v=ro(s,bn.current);uo(s,l),v=Wf(null,s,f,r,v,l);var x=Xf();return s.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,qn(f)?(x=!0,Gl(s)):x=!1,s.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,Of(s),v.updater=sc,s.stateNode=v,v._reactInternals=s,Zf(s,f,r,l),s=td(null,s,f,!0,x,l)):(s.tag=0,Yt&&x&&Cf(s),Vn(null,s,v,l),s=s.child),s;case 16:f=s.elementType;e:{switch(ac(r,s),r=s.pendingProps,v=f._init,f=v(f._payload),s.type=f,v=s.tag=iT(f),r=Li(f,r),v){case 0:s=ed(null,s,f,r,l);break e;case 1:s=I0(null,s,f,r,l);break e;case 11:s=b0(null,s,f,r,l);break e;case 14:s=P0(null,s,f,Li(f.type,r),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:Li(f,v),ed(r,s,f,v,l);case 1:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:Li(f,v),I0(r,s,f,v,l);case 3:e:{if(U0(s),r===null)throw Error(t(387));f=s.pendingProps,x=s.memoizedState,v=x.element,Kg(r,s),Jl(s,f,null,l);var A=s.memoizedState;if(f=A.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){v=ho(Error(t(423)),s),s=F0(r,s,f,l,v);break e}else if(f!==v){v=ho(Error(t(424)),s),s=F0(r,s,f,l,v);break e}else for(ai=Fr(s.stateNode.containerInfo.firstChild),oi=s,Yt=!0,Pi=null,l=$g(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ao(),f===v){s=gr(r,s,l);break e}Vn(r,s,f,l)}s=s.child}return s;case 5:return Qg(s),r===null&&Pf(s),f=s.type,v=s.pendingProps,x=r!==null?r.memoizedProps:null,A=v.children,Sf(f,v)?A=null:x!==null&&Sf(f,x)&&(s.flags|=32),N0(r,s),Vn(r,s,A,l),s.child;case 6:return r===null&&Pf(s),null;case 13:return O0(r,s,l);case 4:return kf(s,s.stateNode.containerInfo),f=s.pendingProps,r===null?s.child=lo(s,null,f,l):Vn(r,s,f,l),s.child;case 11:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:Li(f,v),b0(r,s,f,v,l);case 7:return Vn(r,s,s.pendingProps,l),s.child;case 8:return Vn(r,s,s.pendingProps.children,l),s.child;case 12:return Vn(r,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,v=s.pendingProps,x=s.memoizedProps,A=v.value,zt(ql,f._currentValue),f._currentValue=A,x!==null)if(bi(x.value,A)){if(x.children===v.children&&!$n.current){s=gr(r,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var k=x.dependencies;if(k!==null){A=x.child;for(var z=k.firstContext;z!==null;){if(z.context===f){if(x.tag===1){z=mr(-1,l&-l),z.tag=2;var ue=x.updateQueue;if(ue!==null){ue=ue.shared;var ye=ue.pending;ye===null?z.next=z:(z.next=ye.next,ye.next=z),ue.pending=z}}x.lanes|=l,z=x.alternate,z!==null&&(z.lanes|=l),Uf(x.return,l,s),k.lanes|=l;break}z=z.next}}else if(x.tag===10)A=x.type===s.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=l,k=A.alternate,k!==null&&(k.lanes|=l),Uf(A,l,s),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===s){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Vn(r,s,v.children,l),s=s.child}return s;case 9:return v=s.type,f=s.pendingProps.children,uo(s,l),v=_i(v),f=f(v),s.flags|=1,Vn(r,s,f,l),s.child;case 14:return f=s.type,v=Li(f,s.pendingProps),v=Li(f.type,v),P0(r,s,f,v,l);case 15:return L0(r,s,s.type,s.pendingProps,l);case 17:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:Li(f,v),ac(r,s),s.tag=1,qn(f)?(r=!0,Gl(s)):r=!1,uo(s,l),M0(s,f,v),Zf(s,f,v,l),td(null,s,f,!0,r,l);case 19:return B0(r,s,l);case 22:return D0(r,s,l)}throw Error(t(156,s.tag))};function cv(r,s){return hs(r,s)}function nT(r,s,l,f){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(r,s,l,f){return new nT(r,s,l,f)}function Sd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function iT(r){if(typeof r=="function")return Sd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===Z)return 11;if(r===Q)return 14}return 2}function Yr(r,s){var l=r.alternate;return l===null?(l=Si(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&14680064,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l}function _c(r,s,l,f,v,x){var A=2;if(f=r,typeof r=="function")Sd(r)&&(A=1);else if(typeof r=="string")A=5;else e:switch(r){case F:return ws(l.children,v,x,s);case E:A=8,v|=8;break;case N:return r=Si(12,l,s,v|2),r.elementType=N,r.lanes=x,r;case ne:return r=Si(13,l,s,v),r.elementType=ne,r.lanes=x,r;case Y:return r=Si(19,l,s,v),r.elementType=Y,r.lanes=x,r;case j:return xc(l,v,x,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case B:A=10;break e;case V:A=9;break e;case Z:A=11;break e;case Q:A=14;break e;case fe:A=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Si(A,l,s,v),s.elementType=r,s.type=f,s.lanes=x,s}function ws(r,s,l,f){return r=Si(7,r,f,s),r.lanes=l,r}function xc(r,s,l,f){return r=Si(22,r,f,s),r.elementType=j,r.lanes=l,r.stateNode={isHidden:!1},r}function Md(r,s,l){return r=Si(6,r,null,s),r.lanes=l,r}function Ed(r,s,l){return s=Si(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function rT(r,s,l,f,v){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ke(0),this.expirationTimes=ke(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ke(0),this.identifierPrefix=f,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Td(r,s,l,f,v,x,A,k,z){return r=new rT(r,s,l,k,z),s===1?(s=1,x===!0&&(s|=8)):s=0,x=Si(3,null,null,s),r.current=x,x.stateNode=r,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Of(x),r}function sT(r,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:f==null?null:""+f,children:r,containerInfo:s,implementation:l}}function uv(r){if(!r)return kr;r=r._reactInternals;e:{if(Bn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(qn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var l=r.type;if(qn(l))return kg(r,l,s)}return s}function fv(r,s,l,f,v,x,A,k,z){return r=Td(l,f,!0,r,v,x,A,k,z),r.context=uv(null),l=r.current,f=zn(),v=Xr(l),x=mr(f,v),x.callback=s??null,zr(l,x,v),r.current.lanes=v,rn(r,v,f),Jn(r,f),r}function yc(r,s,l,f){var v=s.current,x=zn(),A=Xr(v);return l=uv(l),s.context===null?s.context=l:s.pendingContext=l,s=mr(x,A),s.payload={element:r},f=f===void 0?null:f,f!==null&&(s.callback=f),r=zr(v,s,A),r!==null&&(Ii(r,v,A,x),Zl(r,v,A)),A}function Sc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function dv(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function wd(r,s){dv(r,s),(r=r.alternate)&&dv(r,s)}function oT(){return null}var hv=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ad(r){this._internalRoot=r}Mc.prototype.render=Ad.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));yc(r,s,null,null)},Mc.prototype.unmount=Ad.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Ms(function(){yc(null,r,null,null)}),s[ur]=null}};function Mc(r){this._internalRoot=r}Mc.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ai();r={blockedOn:null,target:r,priority:s};for(var l=0;l<Nr.length&&s!==0&&s<Nr[l].priority;l++);Nr.splice(l,0,r),l===0&&Qm(r)}};function Cd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Ec(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function pv(){}function aT(r,s,l,f,v){if(v){if(typeof f=="function"){var x=f;f=function(){var ue=Sc(A);x.call(ue)}}var A=fv(s,f,r,0,null,!1,!1,"",pv);return r._reactRootContainer=A,r[ur]=A.current,va(r.nodeType===8?r.parentNode:r),Ms(),A}for(;v=r.lastChild;)r.removeChild(v);if(typeof f=="function"){var k=f;f=function(){var ue=Sc(z);k.call(ue)}}var z=Td(r,0,!1,null,null,!1,!1,"",pv);return r._reactRootContainer=z,r[ur]=z.current,va(r.nodeType===8?r.parentNode:r),Ms(function(){yc(s,z,l,f)}),z}function Tc(r,s,l,f,v){var x=l._reactRootContainer;if(x){var A=x;if(typeof v=="function"){var k=v;v=function(){var z=Sc(A);k.call(z)}}yc(s,A,r,v)}else A=aT(l,s,r,v,f);return Sc(A)}cr=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var l=He(s.pendingLanes);l!==0&&(Rn(s,l|1),Jn(s,qt()),(wt&6)===0&&(go=qt()+500,Br()))}break;case 13:Ms(function(){var f=pr(r,1);if(f!==null){var v=zn();Ii(f,r,1,v)}}),wd(r,1)}},bt=function(r){if(r.tag===13){var s=pr(r,134217728);if(s!==null){var l=zn();Ii(s,r,134217728,l)}wd(r,134217728)}},jt=function(r){if(r.tag===13){var s=Xr(r),l=pr(r,s);if(l!==null){var f=zn();Ii(l,r,s,f)}wd(r,s)}},Ai=function(){return pt},Ft=function(r,s){var l=pt;try{return pt=r,s()}finally{pt=l}},nt=function(r,s,l){switch(s){case"input":if(ht(r,l),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==r&&f.form===r.form){var v=zl(f);if(!v)throw Error(t(90));ft(f),ht(f,v)}}}break;case"textarea":un(r,l);break;case"select":s=l.value,s!=null&&It(r,!!l.multiple,s,!1)}},Fe=_d,ve=Ms;var lT={usingClientEntryPoint:!1,Events:[ya,no,zl,me,be,_d]},Ia={findFiberByHostInstance:ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cT={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ds(r),r===null?null:r.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||oT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{re=wc.inject(cT),te=wc}catch{}}return Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lT,Qn.createPortal=function(r,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cd(s))throw Error(t(200));return sT(r,s,null,l)},Qn.createRoot=function(r,s){if(!Cd(r))throw Error(t(299));var l=!1,f="",v=hv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=Td(r,1,!1,null,null,l,!1,f,v),r[ur]=s.current,va(r.nodeType===8?r.parentNode:r),new Ad(s)},Qn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ds(s),r=r===null?null:r.stateNode,r},Qn.flushSync=function(r){return Ms(r)},Qn.hydrate=function(r,s,l){if(!Ec(s))throw Error(t(200));return Tc(null,r,s,!0,l)},Qn.hydrateRoot=function(r,s,l){if(!Cd(r))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,v=!1,x="",A=hv;if(l!=null&&(l.unstable_strictMode===!0&&(v=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=fv(s,null,r,1,l??null,v,!1,x,A),r[ur]=s.current,va(r),f)for(r=0;r<f.length;r++)l=f[r],v=l._getVersion,v=v(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,v]:s.mutableSourceEagerHydrationData.push(l,v);return new Mc(s)},Qn.render=function(r,s,l){if(!Ec(s))throw Error(t(200));return Tc(null,r,s,!1,l)},Qn.unmountComponentAtNode=function(r){if(!Ec(r))throw Error(t(40));return r._reactRootContainer?(Ms(function(){Tc(null,null,r,!1,function(){r._reactRootContainer=null,r[ur]=null})}),!0):!1},Qn.unstable_batchedUpdates=_d,Qn.unstable_renderSubtreeIntoContainer=function(r,s,l,f){if(!Ec(l))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Tc(r,s,l,!1,f)},Qn.version="18.3.1-next-f1338f8080-20240426",Qn}var Mv;function vT(){if(Mv)return Pd.exports;Mv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Pd.exports=gT(),Pd.exports}var Ev;function _T(){if(Ev)return Ac;Ev=1;var n=vT();return Ac.createRoot=n.createRoot,Ac.hydrateRoot=n.hydrateRoot,Ac}var xT=_T();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ty=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ST={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=_e.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:a,iconNode:c,...u},d)=>_e.createElement("svg",{ref:d,...ST,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:ty("lucide",o),...u},[...c.map(([h,p])=>_e.createElement(h,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=(n,e)=>{const t=_e.forwardRef(({className:i,...o},a)=>_e.createElement(MT,{ref:a,iconNode:e,className:ty(`lucide-${yT(n)}`,i),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=Yn("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=Yn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=Yn("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=Yn("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=Yn("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=Yn("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=Yn("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=Yn("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=Yn("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=Yn("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=Yn("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=Yn("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=Yn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=Yn("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=Yn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Dt={name:"Keerthi Srishank",firstName:"Srishank",headline:"Computer Science · AI & ML · Software Development",location:"Hyderabad, Telangana, India",availability:"Open to internships & software development opportunities",email:"keerthisrishank@gmail.com",phone:"+91-7675008218",heroStatement:"Building thoughtful digital systems where intelligent ideas meet real-world interaction.",contactMessage:"Keerthi Srishank is currently open to internship and software development opportunities. I'd be glad to connect about a project or technical conversation.",socialLinks:{github:"https://github.com/srishank-17",linkedin:"https://linkedin.com/in/srishank/"},about:"Keerthi Srishank is a Computer Science student focused on building AI-driven, real-time, and full-stack applications. My work spans adaptive learning, enterprise collaboration, voice interaction, and responsive web experiences - supported by a foundation in algorithms, software engineering, and machine learning.",education:{degree:"B.Tech in Computer Science",institution:"Geethanjali College of Engineering and Technology, Telangana",period:"2024 - 2028",score:"7.88 CGPA"},skills:[{number:"01",title:"Full-stack web development",description:"Building web experiences with reusable interfaces, APIs, authentication, data storage, and responsive routing.",technologies:["ReactJS","NodeJS","ExpressJS","MongoDB","HTML","CSS"]},{number:"02",title:"AI & machine learning",description:"Exploring AI-driven experiences through machine learning foundations, data tooling, and intelligent product features.",technologies:["NumPy","Pandas","Scikit-learn","PyTorch","TensorFlow"]},{number:"03",title:"Programming foundations",description:"Applying data structures, algorithms, object-oriented programming, and database fundamentals to solve problems.",technologies:["C","Python","Java","JavaScript","SQL"]},{number:"04",title:"Development environments",description:"Working across version control, notebooks, cloud notebooks, and Unix-based development environments.",technologies:["Git","Jupyter Notebook","Google Colab","Unix","Linux","Windows"]}],projects:[{name:"Genesis",period:"Sep 2026 - Oct 2026",category:"Real-time AI-driven adaptive learning platform",description:"An adaptive learning platform that continuously analyzes learner behavior, knowledge, strengths, weaknesses, and progress to deliver personalized learning paths and recommendations.",details:["AI tutoring and knowledge modeling","Skill-gap detection and personalized assessments","Performance prediction with continuous learner feedback"],tags:["AI tutoring","Knowledge modeling","Skill-gap detection"],github:"https://github.com/srishank-17/GENESIS",visual:"genesis"},{name:"IntellMeet",period:"Jun 2026 - Jul 2026",category:"AI-powered enterprise meeting & collaboration platform",description:"A MERN-based enterprise collaboration platform that brings together real-time video meetings, chat, task management, and AI-generated meeting intelligence.",details:["AI transcription, meeting summaries, and action-item generation","Built around real-time meetings, chat, and task management","Targeted a 25-40% increase in team productivity"],tags:["MERN","AI transcription","Meeting summaries"],github:"https://github.com/srishank-17/IntellMeet",visual:"intellmeet"},{name:"Igris",period:"May 2026 - Jun 2026",category:"AI voice assistant for desktop",description:"An intelligent desktop voice assistant designed to execute voice commands, open applications, manage files, and provide real-time responses through speech interaction.",details:["Voice command execution for applications and files","Real-time responses through speech interaction","Improved command processing and speech recognition by about 20-25%"],tags:["Voice commands","Speech interaction","Desktop assistant"],visual:"igris"},{name:"KartX",period:"Feb 2026 - Mar 2026",category:"Adaptive racing engine",description:"A high-performance 2D go-kart racing game with physics-based movement, dynamic drifting, and responsive controls.",details:["Realistic physics-based movement and dynamic drifting","Responsive controls for an immersive game experience","Optimized the rendering and game loop to reduce input latency by about 20-25%"],tags:["2D game","Physics movement","Rendering optimization"],github:"https://github.com/srishank-17/KartX",visual:"kartx"},{name:"Royal Delight",period:"Jan 2026 - Feb 2026",category:"Full-stack restaurant website",description:"A restaurant website with online ordering, built with a React frontend and Node.js/Express backend.",details:["Online ordering functionality for a restaurant web experience","Reusable UI components and optimized routing","Reduced load time by approximately 15-20%"],tags:["React","Node.js","Express","Online ordering"],github:"https://github.com/srishank-17/Royal-Delight",visual:"royal"}],experience:[{role:"Web Developer Intern",company:"Zidio Development",period:"Jun 2026 - Sep 2026",highlights:["Developed and maintained a full-stack enterprise collaboration platform using the MERN stack.","Implemented JWT-based authentication, team workspaces, and real-time communication features.","Engineered real-time video conferencing and chat with WebRTC and Socket.io, including screen sharing and synchronized communication."],technologies:["MERN","JWT","WebRTC","Socket.io"]}],certifications:[{title:"Software Engineering Job Simulation",issuer:"J.P. Morgan",type:"Virtual Experience"},{title:"Data Analytics Job Simulation",issuer:"Deloitte Australia",type:"Virtual Experience"},{title:"The Joy of Computing Using Python",issuer:"NPTEL",type:"Silver Medal",link:"https://drive.google.com/file/d/1-mF_PcyVh4MyHTo3QVSctH7qoZSZUV6_/view?usp=sharing"}],achievements:[{value:"3★",label:"CodeChef rating",detail:"Maximum rating: 1654"},{value:"100+",label:"Algorithmic problems solved",detail:"CodeChef"},{value:"Silver",label:"NPTEL medal",detail:"The Joy of Computing Using Python"},{value:"50%",label:"Course fee reimbursement",detail:"Awarded with the NPTEL Silver Medal"}],responsibilities:["Technical Member, Code Warriors Club (GCET)","Event Coordinator for a multi-round crime-hunt event at Bhaswara 2026"],courses:["Data Structures","Algorithms","Software Engineering","Machine Learning","Artificial Intelligence","Database Management Systems","Computer Networks (TCP/IP)","Object-Oriented Programming"]},em=_e.createContext({});function ss(n){const e=_e.useRef(null);return e.current===null&&(e.current=n()),e.current}const UT=typeof window<"u",hl=UT?_e.useLayoutEffect:_e.useEffect,Bu=_e.createContext(null);function tm(n,e){n.indexOf(e)===-1&&n.push(e)}function vu(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Xi=(n,e,t)=>t>e?e:t<n?n:t;let Vu=()=>{};const os={},ny=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),iy=n=>typeof n=="object"&&n!==null,ry=n=>/^0[^.\s]+$/u.test(n);function sy(n){let e;return()=>(e===void 0&&(e=n()),e)}const ii=n=>n,pl=(...n)=>n.reduce((e,t)=>i=>t(e(i))),Ho=(n,e,t)=>{const i=e-n;return i?(t-n)/i:1};class nm{constructor(){this.subscriptions=[]}add(e){return tm(this.subscriptions,e),()=>vu(this.subscriptions,e)}notify(e,t,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,i);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const hi=n=>n*1e3,Ei=n=>n/1e3,im=(n,e)=>e?n*(1e3/e):0,oy=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,FT=1e-7,OT=12;function kT(n,e,t,i,o){let a,c,u=0;do c=e+(t-e)/2,a=oy(c,i,o)-n,a>0?t=c:e=c;while(Math.abs(a)>FT&&++u<OT);return c}function ml(n,e,t,i){if(n===e&&t===i)return ii;const o=a=>kT(a,0,1,n,t);return a=>a===0||a===1?a:oy(o(a),e,i)}const ay=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,ly=n=>e=>1-n(1-e),cy=ml(.33,1.53,.69,.99),rm=ly(cy),uy=ay(rm),fy=n=>n>=1?1:(n*=2)<1?.5*rm(n):.5*(2-Math.pow(2,-10*(n-1))),sm=n=>1-Math.sin(Math.acos(n)),dy=ly(sm),hy=ay(sm),BT=ml(.42,0,1,1),VT=ml(0,0,.58,1),py=ml(.42,0,.58,1),zT=n=>Array.isArray(n)&&typeof n[0]!="number",my=n=>Array.isArray(n)&&typeof n[0]=="number",HT={linear:ii,easeIn:BT,easeInOut:py,easeOut:VT,circIn:sm,circInOut:hy,circOut:dy,backIn:rm,backInOut:uy,backOut:cy,anticipate:fy},GT=n=>typeof n=="string",Tv=n=>{if(my(n)){Vu(n.length===4);const[e,t,i,o]=n;return ml(e,t,i,o)}else if(GT(n))return HT[n];return n},Cc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function WT(n){let e=new Set,t=new Set,i=!1,o=!1;const a=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function u(h){a.has(h)&&(d.schedule(h),n()),h(c)}const d={schedule:(h,p=!1,g=!1)=>{const _=g&&i?e:t;return p&&a.add(h),_.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(c=h,i){o=!0;return}i=!0;const p=e;e=t,t=p,e.forEach(u),e.clear(),i=!1,o&&(o=!1,d.process(h))}};return d}const XT=40;function gy(n,e){let t=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=Cc.reduce((U,R)=>(U[R]=WT(a),U),{}),{setup:u,read:d,resolveKeyframes:h,preUpdate:p,update:g,preRender:m,render:_,postRender:M}=c,w=()=>{const U=os.useManualTiming,R=U?o.timestamp:performance.now();t=!1,U||(o.delta=i?1e3/60:Math.max(Math.min(R-o.timestamp,XT),1)),o.timestamp=R,o.isProcessing=!0,u.process(o),d.process(o),h.process(o),p.process(o),g.process(o),m.process(o),_.process(o),M.process(o),o.isProcessing=!1,t&&e&&(i=!1,n(w))},S=()=>{t=!0,i=!0,o.isProcessing||n(w)};return{schedule:Cc.reduce((U,R)=>{const L=c[R];return U[R]=(D,F=!1,E=!1)=>(t||S(),L.schedule(D,F,E)),U},{}),cancel:U=>{for(let R=0;R<Cc.length;R++)c[Cc[R]].cancel(U)},state:o,steps:c}}const{schedule:Tt,cancel:Ti,state:Mn,steps:Nd}=gy(typeof requestAnimationFrame<"u"?requestAnimationFrame:ii,!0);let ru;function jT(){ru=void 0}const Gn={now:()=>(ru===void 0&&Gn.set(Mn.isProcessing||os.useManualTiming?Mn.timestamp:performance.now()),ru),set:n=>{ru=n,queueMicrotask(jT)}},vy=n=>e=>typeof e=="string"&&e.startsWith(n),_y=vy("--"),YT=vy("var(--"),om=n=>YT(n)?$T.test(n.split("/*")[0].trim()):!1,$T=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function wv(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const $o={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},il={...$o,transform:n=>Xi(0,1,n)},Rc={...$o,default:1},Ka=n=>Math.round(n*1e5)/1e5,am=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function qT(n){return n==null}const KT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,lm=(n,e)=>t=>!!(typeof t=="string"&&KT.test(t)&&t.startsWith(n)||e&&!qT(t)&&Object.prototype.hasOwnProperty.call(t,e)),xy=(n,e,t)=>i=>{if(typeof i!="string")return i;const[o,a,c,u]=i.match(am);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},ZT=n=>Xi(0,255,n),Id={...$o,transform:n=>Math.round(ZT(n))},Is={test:lm("rgb","red"),parse:xy("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+Id.transform(n)+", "+Id.transform(e)+", "+Id.transform(t)+", "+Ka(il.transform(i))+")"};function JT(n){let e="",t="",i="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,i+=i,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const Oh={test:lm("#"),parse:JT,transform:Is.transform},gl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Er=gl("deg"),ir=gl("%"),Ye=gl("px"),QT=gl("vh"),ew=gl("vw"),Av={...ir,parse:n=>ir.parse(n)/100,transform:n=>ir.transform(n*100)},Uo={test:lm("hsl","hue"),parse:xy("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+ir.transform(Ka(e))+", "+ir.transform(Ka(t))+", "+Ka(il.transform(i))+")"},cn={test:n=>Is.test(n)||Oh.test(n)||Uo.test(n),parse:n=>Is.test(n)?Is.parse(n):Uo.test(n)?Uo.parse(n):Oh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Is.transform(n):Uo.transform(n),getAnimatableNone:n=>{const e=cn.parse(n);return e.alpha=0,cn.transform(e)}},tw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function nw(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(am))==null?void 0:e.length)||0)+(((t=n.match(tw))==null?void 0:t.length)||0)>0}const yy="number",Sy="color",iw="var",rw="var(",Cv="${}",sw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Go(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(sw,d=>(cn.test(d)?(i.color.push(a),o.push(Sy),t.push(cn.parse(d))):d.startsWith(rw)?(i.var.push(a),o.push(iw),t.push(d)):(i.number.push(a),o.push(yy),t.push(parseFloat(d))),++a,Cv)).split(Cv);return{values:t,split:u,indexes:i,types:o}}function ow(n){return Go(n).values}function My({split:n,types:e}){const t=n.length;return i=>{let o="";for(let a=0;a<t;a++)if(o+=n[a],i[a]!==void 0){const c=e[a];c===yy?o+=Ka(i[a]):c===Sy?o+=cn.transform(i[a]):o+=i[a]}return o}}function aw(n){return My(Go(n))}const lw=n=>typeof n=="number"?0:cn.test(n)?cn.getAnimatableNone(n):n,cw=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:lw(n);function uw(n){const e=Go(n);return My(e)(e.values.map((i,o)=>cw(i,e.split[o])))}const Gi={test:nw,parse:ow,createTransformer:aw,getAnimatableNone:uw};function Ud(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function fw({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,d=2*t-u;o=Ud(d,u,n+1/3),a=Ud(d,u,n),c=Ud(d,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:i}}function _u(n,e){return t=>t>0?e:n}const Vt=(n,e,t)=>n+(e-n)*t,Fd=(n,e,t)=>{const i=n*n,o=t*(e*e-i)+i;return o<0?0:Math.sqrt(o)},dw=[Oh,Is,Uo],hw=n=>dw.find(e=>e.test(n));function Rv(n){const e=hw(n);if(!e)return!1;let t=e.parse(n);return e===Uo&&(t=fw(t)),t}const bv=(n,e)=>{const t=Rv(n),i=Rv(e);if(!t||!i)return _u(n,e);const o={...t};return a=>(o.red=Fd(t.red,i.red,a),o.green=Fd(t.green,i.green,a),o.blue=Fd(t.blue,i.blue,a),o.alpha=Vt(t.alpha,i.alpha,a),Is.transform(o))},kh=new Set(["none","hidden"]);function pw(n,e){return kh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function mw(n,e){return t=>Vt(n,e,t)}function cm(n){return typeof n=="number"?mw:typeof n=="string"?om(n)?_u:cn.test(n)?bv:_w:Array.isArray(n)?Ey:typeof n=="object"?cn.test(n)?bv:gw:_u}function Ey(n,e){const t=[...n],i=t.length,o=n.map((a,c)=>cm(a)(a,e[c]));return a=>{for(let c=0;c<i;c++)t[c]=o[c](a);return t}}function gw(n,e){const t={...n,...e},i={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(i[o]=cm(n[o])(n[o],e[o]));return o=>{for(const a in i)t[a]=i[a](o);return t}}function vw(n,e){const t=[],i={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][i[a]],u=n.values[c]??0;t[o]=u,i[a]++}return t}const _w=(n,e)=>{const t=Gi.createTransformer(e),i=Go(n),o=Go(e);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?kh.has(n)&&!o.values.length||kh.has(e)&&!i.values.length?pw(n,e):pl(Ey(vw(i,o),o.values),t):_u(n,e)};function Ty(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Vt(n,e,t):cm(n)(n,e)}const xw=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>Tt.update(e,t),stop:()=>Ti(e),now:()=>Mn.isProcessing?Mn.timestamp:Gn.now()}},wy=(n,e,t=10)=>{let i="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)i+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},xu=2e4;function um(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<xu;)e+=t,i=n.next(e);return e>=xu?1/0:e}function yw(n,e=100,t){const i=t({...n,keyframes:[0,e]}),o=Math.min(um(i),xu);return{type:"keyframes",ease:a=>i.next(o*a).value/e,duration:Ei(o)}}const nn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Bh(n,e){return n*Math.sqrt(1-e*e)}const Sw=12;function Mw(n,e,t){let i=t;for(let o=1;o<Sw;o++)i=i-n(i)/e(i);return i}const Od=.001;function Ew({duration:n=nn.duration,bounce:e=nn.bounce,velocity:t=nn.velocity,mass:i=nn.mass}){let o,a,c=1-e;c=Xi(nn.minDamping,nn.maxDamping,c),n=Xi(nn.minDuration,nn.maxDuration,Ei(n)),c<1?(o=h=>{const p=h*c,g=p*n,m=p-t,_=Bh(h,c),M=Math.exp(-g);return Od-m/_*M},a=h=>{const g=h*c*n,m=g*t+t,_=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-g),w=Bh(Math.pow(h,2),c);return(-o(h)+Od>0?-1:1)*((m-_)*M)/w}):(o=h=>{const p=Math.exp(-h*n),g=(h-t)*n+1;return-Od+p*g},a=h=>{const p=Math.exp(-h*n),g=(t-h)*(n*n);return p*g});const u=5/n,d=Mw(o,a,u);if(n=hi(n),isNaN(d))return{stiffness:nn.stiffness,damping:nn.damping,duration:n};{const h=Math.pow(d,2)*i;return{stiffness:h,damping:c*2*Math.sqrt(i*h),duration:n}}}const Tw=["duration","bounce"],ww=["stiffness","damping","mass"];function Pv(n,e){return e.some(t=>n[t]!==void 0)}function Aw(n){let e={velocity:nn.velocity,stiffness:nn.stiffness,damping:nn.damping,mass:nn.mass,isResolvedFromDuration:!1,...n};if(!Pv(n,ww)&&Pv(n,Tw))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),o=i*i,a=2*Xi(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:nn.mass,stiffness:o,damping:a}}else{const t=Ew({...n,velocity:0});e={...e,...t,mass:nn.mass},e.isResolvedFromDuration=!0}return e}function yu(n=nn.visualDuration,e=nn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:d,damping:h,mass:p,duration:g,velocity:m,isResolvedFromDuration:_}=Aw({...t,velocity:-Ei(t.velocity||0)}),M=m||0,w=h/(2*Math.sqrt(d*p)),S=c-a,y=Ei(Math.sqrt(d/p)),P=Math.abs(S)<5;i||(i=P?nn.restSpeed.granular:nn.restSpeed.default),o||(o=P?nn.restDelta.granular:nn.restDelta.default);let U,R,L,D,F,E;if(w<1)L=Bh(y,w),D=(M+w*y*S)/L,U=B=>{const V=Math.exp(-w*y*B);return c-V*(D*Math.sin(L*B)+S*Math.cos(L*B))},F=w*y*D+S*L,E=w*y*S-D*L,R=B=>Math.exp(-w*y*B)*(F*Math.sin(L*B)+E*Math.cos(L*B));else if(w===1){U=V=>c-Math.exp(-y*V)*(S+(M+y*S)*V);const B=M+y*S;R=V=>Math.exp(-y*V)*(y*B*V-M)}else{const B=y*Math.sqrt(w*w-1);U=Y=>{const Q=Math.exp(-w*y*Y),fe=Math.min(B*Y,300);return c-Q*((M+w*y*S)*Math.sinh(fe)+B*S*Math.cosh(fe))/B};const V=(M+w*y*S)/B,Z=w*y*V-S*B,ne=w*y*S-V*B;R=Y=>{const Q=Math.exp(-w*y*Y),fe=Math.min(B*Y,300);return Q*(Z*Math.sinh(fe)+ne*Math.cosh(fe))}}const N={calculatedDuration:_&&g||null,velocity:B=>hi(R(B)),next:B=>{if(!_&&w<1){const Z=Math.exp(-w*y*B),ne=Math.sin(L*B),Y=Math.cos(L*B),Q=c-Z*(D*ne+S*Y),fe=hi(Z*(F*ne+E*Y));return u.done=Math.abs(fe)<=i&&Math.abs(c-Q)<=o,u.value=u.done?c:Q,u}const V=U(B);if(_)u.done=B>=g;else{const Z=hi(R(B));u.done=Math.abs(Z)<=i&&Math.abs(c-V)<=o}return u.value=u.done?c:V,u},toString:()=>{const B=Math.min(um(N),xu),V=wy(Z=>N.next(B*Z).value,B,30);return B+"ms "+V},toTransition:()=>{}};return N}yu.applyToOptions=n=>{const e=yw(n,100,yu);return n.ease=e.ease,n.duration=hi(e.duration),n.type="keyframes",n};const Cw=5;function Ay(n,e,t){const i=Math.max(e-Cw,0);return im(t-n(i),e-i)}function Vh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:d,restDelta:h=.5,restSpeed:p}){const g=n[0],m={done:!1,value:g},_=E=>u!==void 0&&E<u||d!==void 0&&E>d,M=E=>u===void 0?d:d===void 0||Math.abs(u-E)<Math.abs(d-E)?u:d;let w=t*e;const S=g+w,y=c===void 0?S:c(S);y!==S&&(w=y-g);const P=E=>-w*Math.exp(-E/i),U=E=>y+P(E),R=E=>{const N=P(E),B=U(E);m.done=Math.abs(N)<=h,m.value=m.done?y:B};let L,D;const F=E=>{_(m.value)&&(L=E,D=yu({keyframes:[m.value,M(m.value)],velocity:Ay(U,E,m.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return F(0),{calculatedDuration:null,next:E=>{let N=!1;return!D&&L===void 0&&(N=!0,R(E),F(E)),L!==void 0&&E>=L?D.next(E-L):(!N&&R(E),m)}}}function Rw(n,e,t){const i=[],o=t||os.mix||Ty,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||ii:e;u=pl(d,u)}i.push(u)}return i}function fm(n,e,{clamp:t=!0,ease:i,mixer:o}={}){const a=n.length;if(Vu(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=Rw(e,i,o),d=u.length,h=p=>{if(c&&p<n[0])return e[0];let g=0;if(d>1)for(;g<n.length-2&&!(p<n[g+1]);g++);const m=Ho(n[g],n[g+1],p);return u[g](m)};return t?p=>h(Xi(n[0],n[a-1],p)):h}function bw(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const o=Ho(0,e,i);n.push(Vt(t,1,o))}}function Cy(n){const e=[0];return bw(e,n.length-1),e}function Pw(n,e){return n.map(t=>t*e)}function Lw(n,e){return n.map(()=>e||py).splice(0,n.length-1)}function Za({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const o=zT(i)?i.map(Tv):Tv(i),a={done:!1,value:e[0]},c=Pw(t&&t.length===e.length?t:Cy(e),n),u=fm(c,e,{ease:Array.isArray(o)?o:Lw(e,o)});return{calculatedDuration:n,next:d=>(a.value=u(d),a.done=d>=n,a)}}const Dw=n=>n!==null;function zu(n,{repeat:e,repeatType:t="loop"},i,o=1){const a=n.filter(Dw),u=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!u||i===void 0?a[u]:i}const Nw={decay:Vh,inertia:Vh,tween:Za,keyframes:Za,spring:yu};function Ry(n){typeof n.type=="string"&&(n.type=Nw[n.type])}class dm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const Iw=n=>n/100;class rl extends dm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,o;const{motionValue:t}=this.options;t&&t.updatedAt!==Gn.now()&&this.tick(Gn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(i=this.options).onStop)==null||o.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Ry(e);const{type:t=Za,repeat:i=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:u}=e;const d=t||Za;d!==Za&&typeof u[0]!="number"&&(this.mixKeyframes=pl(Iw,Ty(u[0],u[1])),u=[0,100]);const h=d({...e,keyframes:u});a==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...u].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=um(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+o,this.totalDuration=this.resolvedDuration*(i+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:i,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:d}=this;if(this.startTime===null)return i.next(0);const{delay:h=0,keyframes:p,repeat:g,repeatType:m,repeatDelay:_,type:M,onUpdate:w,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const y=this.currentTime-h*(this.playbackSpeed>=0?1:-1),P=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let U=this.currentTime,R=i;if(g){const E=Math.min(this.currentTime,o)/u;let N=Math.floor(E),B=E%1;!B&&E>=1&&(B=1),B===1&&N--,N=Math.min(N,g+1),!!(N%2)&&(m==="reverse"?(B=1-B,_&&(B-=_/u)):m==="mirror"&&(R=c)),U=Xi(0,1,B)*u}let L;P?(this.delayState.value=p[0],L=this.delayState):L=R.next(U),a&&!P&&(L.value=a(L.value));let{done:D}=L;!P&&d!==null&&(D=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&D);return F&&M!==Vh&&(L.value=zu(p,this.options,S,this.speed)),w&&w(L.value),F&&this.finish(),L}then(e,t){return this.finished.then(e,t)}get duration(){return Ei(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ei(e)}get time(){return Ei(this.currentTime)}set time(e){e=hi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return Ay(i=>this.generator.next(i).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Gn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=Ei(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=xw,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Gn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function Uw(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Us=n=>n*180/Math.PI,zh=n=>{const e=Us(Math.atan2(n[1],n[0]));return Hh(e)},Fw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:zh,rotateZ:zh,skewX:n=>Us(Math.atan(n[1])),skewY:n=>Us(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Hh=n=>(n=n%360,n<0&&(n+=360),n),Lv=zh,Dv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Nv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),Ow={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Dv,scaleY:Nv,scale:n=>(Dv(n)+Nv(n))/2,rotateX:n=>Hh(Us(Math.atan2(n[6],n[5]))),rotateY:n=>Hh(Us(Math.atan2(-n[2],n[0]))),rotateZ:Lv,rotate:Lv,skewX:n=>Us(Math.atan(n[4])),skewY:n=>Us(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Gh(n){return n.includes("scale")?1:0}function Wh(n,e){if(!n||n==="none")return Gh(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,o;if(t)i=Ow,o=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=Fw,o=u}if(!o)return Gh(e);const a=i[e],c=o[1].split(",").map(Bw);return typeof a=="function"?a(c):c[a]}const kw=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Wh(t,e)};function Bw(n){return parseFloat(n.trim())}const qo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ko=new Set([...qo,"pathRotation"]),Iv=n=>n===$o||n===Ye,Vw=new Set(["x","y","z"]),zw=qo.filter(n=>!Vw.has(n));function Hw(n){const e=[];return zw.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const rs={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:i})=>{const o=n.max-n.min;return i==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:i})=>{const o=n.max-n.min;return i==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Wh(e,"x"),y:(n,{transform:e})=>Wh(e,"y")};rs.translateX=rs.x;rs.translateY=rs.y;const ks=new Set;let Xh=!1,jh=!1,Yh=!1;function by(){if(jh){const n=Array.from(ks).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const o=Hw(i);o.length&&(t.set(i,o),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const o=t.get(i);o&&o.forEach(([a,c])=>{var u;(u=i.getValue(a))==null||u.set(c)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}jh=!1,Xh=!1,ks.forEach(n=>n.complete(Yh)),ks.clear()}function Py(){ks.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(jh=!0)})}function Gw(){Yh=!0,Py(),by(),Yh=!1}class hm{constructor(e,t,i,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(ks.add(this),Xh||(Xh=!0,Tt.read(Py),Tt.resolveKeyframes(by))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(i&&t){const u=i.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}Uw(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ks.delete(this)}cancel(){this.state==="scheduled"&&(ks.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Ww=n=>n.startsWith("--");function Ly(n,e,t){Ww(e)?n.style.setProperty(e,t):n.style[e]=t}const Xw={};function pm(n,e){const t=sy(n);return()=>Xw[e]??t()}const mm=pm(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Dy=pm(()=>window.ViewTimeline!==void 0,"viewTimeline"),Ny=pm(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Xa=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,Uv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xa([0,.65,.55,1]),circOut:Xa([.55,0,1,.45]),backIn:Xa([.31,.01,.66,-.59]),backOut:Xa([.33,1.53,.69,.99])};function Iy(n,e){if(n)return typeof n=="function"?Ny()?wy(n,e):"ease-out":my(n)?Xa(n):Array.isArray(n)?n.map(t=>Iy(t,e)||Uv.easeOut):Uv[n]}function jw(n,e,t,{delay:i=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeOut",times:d}={},h=void 0){const p={[e]:t};d&&(p.offset=d);const g=Iy(u,o);Array.isArray(g)&&(p.easing=g);const m={delay:i,duration:o,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return h&&(m.pseudoElement=h),n.animate(p,m)}function Uy(n){return typeof n=="function"&&"applyToOptions"in n}function Yw({type:n,...e}){return Uy(n)&&Ny()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class Fy extends dm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:i,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:u,onComplete:d}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,Vu(typeof e.type!="string");const h=Yw(e);this.animation=jw(t,i,o,h,a),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const p=zu(o,this.options,u,this.speed);this.updateMotionValue&&this.updateMotionValue(p),Ly(t,i,p),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,i,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(i=this.animation).commitStyles)==null||o.call(i))}get duration(){var t,i;const e=((i=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:i.call(t).duration)||0;return Ei(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Ei(e)}get time(){return Ei(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=hi(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:i,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&mm()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),i&&(this.animation.rangeEnd=i),ii):o(this)}}const Oy={anticipate:fy,backInOut:uy,circInOut:hy};function $w(n){return n in Oy}function qw(n){typeof n.ease=="string"&&$w(n.ease)&&(n.ease=Oy[n.ease])}const kd=10;class Kw extends Fy{constructor(e){qw(e),Ry(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:i,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new rl({...c,autoplay:!1}),d=Math.max(kd,Gn.now()-this.startTime),h=Xi(0,kd,d-kd),p=u.sample(d).value,{name:g}=this.options;a&&g&&Ly(a,g,p),t.setWithVelocity(u.sample(Math.max(0,d-h)).value,p,h),u.stop()}}const Fv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Gi.test(n)||n==="0")&&!n.startsWith("url("));function Zw(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function Jw(n,e,t,i){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=Fv(o,e),u=Fv(a,e);return!c||!u?!1:Zw(n)||(t==="spring"||Uy(t))&&i}function $h(n){n.duration=0,n.type="keyframes"}const ky=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Qw=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function e1(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&Qw.test(n[e]))return!0;return!1}const t1=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),n1=sy(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function i1(n){var g;const{motionValue:e,name:t,repeatDelay:i,repeatType:o,damping:a,type:c,keyframes:u}=n,d=(g=e==null?void 0:e.owner)==null?void 0:g.current;if(!(d instanceof HTMLElement)&&!(d instanceof SVGElement))return!1;const{onUpdate:h,transformTemplate:p}=e.owner.getProps();return n1()&&t&&(ky.has(t)||t1.has(t)&&e1(u))&&(t!=="transform"||!p)&&!h&&!i&&o!=="mirror"&&a!==0&&c!=="inertia"}const r1=40;class s1 extends dm{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:u,name:d,motionValue:h,element:p,...g}){var M;super(),this.stop=()=>{var w,S;this._animation&&(this._animation.stop(),(w=this.stopTimeline)==null||w.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=Gn.now();const m={autoplay:e,delay:t,type:i,repeat:o,repeatDelay:a,repeatType:c,name:d,motionValue:h,element:p,...g},_=(p==null?void 0:p.KeyframeResolver)||hm;this.keyframeResolver=new _(u,(w,S,y)=>this.onKeyframesResolved(w,S,m,!y),d,h,p),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(e,t,i,o){var y,P;this.keyframeResolver=void 0;const{name:a,type:c,velocity:u,delay:d,isHandoff:h,onUpdate:p}=i;this.resolvedAt=Gn.now();let g=!0;Jw(e,a,c,u)||(g=!1,(os.instantAnimations||!d)&&(p==null||p(zu(e,i,t))),e[0]=e[e.length-1],$h(i),i.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>r1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...i,keyframes:e},M=g&&!h&&i1(_),w=(P=(y=_.motionValue)==null?void 0:y.owner)==null?void 0:P.current;let S;if(M)try{S=new Kw({..._,element:w})}catch{S=new rl(_)}else S=new rl(_);S.finished.then(()=>{this.notifyFinished()}).catch(ii),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),Gw()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function By(n,e,t,i=0,o=1){const a=Array.from(n).sort((h,p)=>h.sortNodePosition(p)).indexOf(e),c=n.size,u=(c-1)*i;return typeof t=="function"?t(a,c):o===1?a*i:u-a*i}const Ov=30,o1=n=>!isNaN(parseFloat(n)),Ja={current:void 0};class a1{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var a;const o=Gn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Gn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=o1(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new nm);const i=this.events[e].add(t);return e==="change"?()=>{i(),Tt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ja.current&&Ja.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Gn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Ov)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Ov);return im(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function zi(n,e){return new a1(n,e)}function Vy(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...i}=n;return{...e,...i}}return n}function gm(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?Vy(t,n):t}const l1={type:"spring",stiffness:500,damping:25,restSpeed:10},c1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),u1={type:"keyframes",duration:.8},f1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},d1=(n,{keyframes:e})=>e.length>2?u1:Ko.has(n)?n.startsWith("scale")?c1(e[1]):l1:f1,h1=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function p1(n){for(const e in n)if(!h1.has(e))return!0;return!1}const vm=(n,e,t,i={},o,a)=>c=>{const u=gm(i,n)||{},d=u.delay||i.delay||0;let{elapsed:h=0}=i;h=h-hi(d);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:m=>{e.set(m),u.onUpdate&&u.onUpdate(m)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};p1(u)||Object.assign(p,d1(n,p)),p.duration&&(p.duration=hi(p.duration)),p.repeatDelay&&(p.repeatDelay=hi(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let g=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&($h(p),p.delay===0&&(g=!0)),(os.instantAnimations||os.skipAnimations||o!=null&&o.shouldSkipAnimations||u.skipAnimations)&&(g=!0,$h(p),p.delay=0),p.allowFlatten=!u.type&&!u.ease,g&&!a&&e.get()!==void 0){const m=zu(p.keyframes,u);if(m!==void 0){Tt.update(()=>{p.onUpdate(m),p.onComplete()});return}}return u.isSync?new rl(p):new s1(p)},m1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function g1(n){const e=m1.exec(n);if(!e)return[,];const[,t,i,o]=e;return[`--${t??i}`,o]}function zy(n,e,t=1){const[i,o]=g1(n);if(!i)return;const a=window.getComputedStyle(e).getPropertyValue(i);if(a){const c=a.trim();return ny(c)?parseFloat(c):c}return om(o)?zy(o,e,t+1):o}function kv(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function _m(n,e,t,i){if(typeof e=="function"){const[o,a]=kv(i);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=kv(i);e=e(t!==void 0?t:n.custom,o,a)}return e}function Bs(n,e,t){const i=n.getProps();return _m(i,e,t!==void 0?t:i.custom,n)}const Hy=new Set(["width","height","top","left","right","bottom",...qo]),qh=n=>Array.isArray(n);function v1(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,zi(t))}function _1(n){return qh(n)?n[n.length-1]||0:n}function x1(n,e){const t=Bs(n,e);let{transitionEnd:i={},transition:o={},...a}=t||{};a={...a,...i};for(const c in a){const u=_1(a[c]);v1(n,c,u)}}const mn=n=>!!(n&&n.getVelocity);function y1(n){return!!(mn(n)&&n.add)}function Kh(n,e){const t=n.getValue("willChange");if(y1(t))return t.add(e);if(!t&&os.WillChange){const i=new os.WillChange("auto");n.addValue("willChange",i),i.add(e)}}function xm(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const S1="framerAppearId",Gy="data-"+xm(S1);function Wy(n){return n.props[Gy]}function M1({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function Xy(n,e,{delay:t=0,transitionOverride:i,type:o}={}){let{transition:a,transitionEnd:c,...u}=e;const d=n.getDefaultTransition();a=a?Vy(a,d):d;const h=a==null?void 0:a.reduceMotion,p=a==null?void 0:a.skipAnimations;i&&(a=i);const g=[],m=o&&n.animationState&&n.animationState.getState()[o],_=a==null?void 0:a.path;_&&_.animateVisualElement(n,u,a,t,g);for(const M in u){const w=n.getValue(M,n.latestValues[M]??null),S=u[M];if(S===void 0||m&&M1(m,M))continue;const y={delay:t,...gm(a||{},M)};p&&(y.skipAnimations=!0);const P=w.get();if(P!==void 0&&!w.isAnimating()&&!Array.isArray(S)&&S===P&&!y.velocity){Tt.update(()=>w.set(S));continue}let U=!1;if(window.MotionHandoffAnimation){const D=Wy(n);if(D){const F=window.MotionHandoffAnimation(D,M,Tt);F!==null&&(y.startTime=F,U=!0)}}Kh(n,M);const R=h??n.shouldReduceMotion;w.start(vm(M,w,S,R&&Hy.has(M)?{type:!1}:y,n,U));const L=w.animation;L&&g.push(L)}if(c){const M=()=>Tt.update(()=>{c&&x1(n,c)});g.length?Promise.all(g).then(M):M()}return g}function Zh(n,e,t={}){var d;const i=Bs(n,e,t.type==="exit"?(d=n.presenceContext)==null?void 0:d.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=i||{};t.transitionOverride&&(o=t.transitionOverride);const a=i?()=>Promise.all(Xy(n,i,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:g,staggerDirection:m}=o;return E1(n,e,h,p,g,m,t)}:()=>Promise.resolve(),{when:u}=o;if(u){const[h,p]=u==="beforeChildren"?[a,c]:[c,a];return h().then(()=>p())}else return Promise.all([a(),c(t.delay)])}function E1(n,e,t=0,i=0,o=0,a=1,c){const u=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),u.push(Zh(d,e,{...c,delay:t+(typeof i=="function"?0:i)+By(n.variantChildren,d,i,o,a)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(u)}function T1(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const o=e.map(a=>Zh(n,a,t));i=Promise.all(o)}else if(typeof e=="string")i=Zh(n,e,t);else{const o=typeof e=="function"?Bs(n,e,t.custom):e;i=Promise.all(Xy(n,o,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const w1={test:n=>n==="auto",parse:n=>n},jy=n=>e=>e.test(n),Yy=[$o,Ye,ir,Er,ew,QT,w1],Bv=n=>Yy.find(jy(n));function A1(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||ry(n):!0}const C1=new Set(["brightness","contrast","saturate","opacity"]);function R1(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(am)||[];if(!i)return n;const o=t.replace(i,"");let a=C1.has(e)?1:0;return i!==t&&(a*=100),e+"("+a+o+")"}const b1=/\b([a-z-]*)\(.*?\)/gu,Jh={...Gi,getAnimatableNone:n=>{const e=n.match(b1);return e?e.map(R1).join(" "):n}},Qh={...Gi,getAnimatableNone:n=>{const e=Gi.parse(n);return Gi.createTransformer(n)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},Vv={...$o,transform:Math.round},P1={rotate:Er,pathRotation:Er,rotateX:Er,rotateY:Er,rotateZ:Er,scale:Rc,scaleX:Rc,scaleY:Rc,scaleZ:Rc,skew:Er,skewX:Er,skewY:Er,distance:Ye,translateX:Ye,translateY:Ye,translateZ:Ye,x:Ye,y:Ye,z:Ye,perspective:Ye,transformPerspective:Ye,opacity:il,originX:Av,originY:Av,originZ:Ye},Su={borderWidth:Ye,borderTopWidth:Ye,borderRightWidth:Ye,borderBottomWidth:Ye,borderLeftWidth:Ye,borderRadius:Ye,borderTopLeftRadius:Ye,borderTopRightRadius:Ye,borderBottomRightRadius:Ye,borderBottomLeftRadius:Ye,width:Ye,maxWidth:Ye,height:Ye,maxHeight:Ye,top:Ye,right:Ye,bottom:Ye,left:Ye,inset:Ye,insetBlock:Ye,insetBlockStart:Ye,insetBlockEnd:Ye,insetInline:Ye,insetInlineStart:Ye,insetInlineEnd:Ye,padding:Ye,paddingTop:Ye,paddingRight:Ye,paddingBottom:Ye,paddingLeft:Ye,paddingBlock:Ye,paddingBlockStart:Ye,paddingBlockEnd:Ye,paddingInline:Ye,paddingInlineStart:Ye,paddingInlineEnd:Ye,margin:Ye,marginTop:Ye,marginRight:Ye,marginBottom:Ye,marginLeft:Ye,marginBlock:Ye,marginBlockStart:Ye,marginBlockEnd:Ye,marginInline:Ye,marginInlineStart:Ye,marginInlineEnd:Ye,fontSize:Ye,backgroundPositionX:Ye,backgroundPositionY:Ye,...P1,zIndex:Vv,fillOpacity:il,strokeOpacity:il,numOctaves:Vv},L1={...Su,color:cn,backgroundColor:cn,outlineColor:cn,fill:cn,stroke:cn,borderColor:cn,borderTopColor:cn,borderRightColor:cn,borderBottomColor:cn,borderLeftColor:cn,filter:Jh,WebkitFilter:Jh,mask:Qh,WebkitMask:Qh},$y=n=>L1[n],D1=new Set([Jh,Qh]);function qy(n,e){let t=$y(n);return D1.has(t)||(t=Gi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const N1=new Set(["auto","none","0"]);function I1(n,e,t){let i=0,o;for(;i<n.length&&!o;){const a=n[i];typeof a=="string"&&!N1.has(a)&&Go(a).values.length&&(o=n[i]),i++}if(o&&t)for(const a of e)n[a]=qy(t,o)}class U1 extends hm{constructor(e,t,i,o,a){super(e,t,i,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let p=0;p<e.length;p++){let g=e[p];if(typeof g=="string"&&(g=g.trim(),om(g))){const m=zy(g,t.current);m!==void 0&&(e[p]=m),p===e.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!Hy.has(i)||e.length!==2)return;const[o,a]=e,c=Bv(o),u=Bv(a),d=wv(o),h=wv(a);if(d!==h&&rs[i]){this.needsMeasurement=!0;return}if(c!==u)if(Iv(c)&&Iv(u))for(let p=0;p<e.length;p++){const g=e[p];typeof g=="string"&&(e[p]=parseFloat(g))}else rs[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let o=0;o<e.length;o++)(e[o]===null||A1(e[o]))&&i.push(o);i.length&&I1(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=rs[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(i,o).jump(o,!1)}measureEndState(){var u;const{element:e,name:t,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=i.length-1,c=i[a];i[a]=rs[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([d,h])=>{e.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const ym=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Ky(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){const o=document.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(i=>i!=null)}const ep=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function Qa(n){return iy(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:Wo,cancel:Zy}=gy(queueMicrotask,!1),Bi={x:!1,y:!1};function Jy(){return Bi.x||Bi.y}function F1(n){return n==="x"||n==="y"?Bi[n]?null:(Bi[n]=!0,()=>{Bi[n]=!1}):Bi.x||Bi.y?null:(Bi.x=Bi.y=!0,()=>{Bi.x=Bi.y=!1})}function Qy(n,e){const t=Ky(n),i=new AbortController,o={passive:!0,...e,signal:i.signal};return[t,o,()=>i.abort()]}function O1(n){return!(n.pointerType==="touch"||Jy())}function k1(n,e,t={}){const[i,o,a]=Qy(n,t);return i.forEach(c=>{let u=!1,d=!1,h;const p=()=>{c.removeEventListener("pointerleave",M)},g=S=>{h&&(h(S),h=void 0),p()},m=S=>{u=!1,window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m),d&&(d=!1,g(S))},_=()=>{u=!0,window.addEventListener("pointerup",m,o),window.addEventListener("pointercancel",m,o)},M=S=>{if(S.pointerType!=="touch"){if(u){d=!0;return}g(S)}},w=S=>{if(!O1(S))return;d=!1;const y=e(c,S);typeof y=="function"&&(h=y,c.addEventListener("pointerleave",M,o))};c.addEventListener("pointerenter",w,o),c.addEventListener("pointerdown",_,o)}),a}const eS=(n,e)=>e?n===e?!0:eS(n,e.parentElement):!1,Sm=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,B1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function V1(n){return B1.has(n.tagName)||n.isContentEditable===!0}const z1=new Set(["INPUT","SELECT","TEXTAREA"]);function H1(n){return z1.has(n.tagName)||n.isContentEditable===!0}const su=new WeakSet;function zv(n){return e=>{e.key==="Enter"&&n(e)}}function Bd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const G1=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=zv(()=>{if(su.has(t))return;Bd(t,"down");const o=zv(()=>{Bd(t,"up")}),a=()=>Bd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};function Hv(n){return Sm(n)&&!Jy()}const Gv=new WeakSet;function W1(n,e,t={}){const[i,o,a]=Qy(n,t),c=u=>{const d=u.currentTarget;if(!Hv(u)||Gv.has(u))return;su.add(d),t.stopPropagation&&Gv.add(u);const h=e(d,u),p={...o,capture:!0},g=(M,w)=>{window.removeEventListener("pointerup",m,p),window.removeEventListener("pointercancel",_,p),su.has(d)&&su.delete(d),Hv(M)&&typeof h=="function"&&h(M,{success:w})},m=M=>{g(M,d===window||d===document||t.useGlobalTarget||eS(d,M.target))},_=M=>{g(M,!1)};window.addEventListener("pointerup",m,p),window.addEventListener("pointercancel",_,p)};return i.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),Qa(u)&&(u.addEventListener("focus",h=>G1(h,o)),!V1(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),a}function Mm(n){return iy(n)&&"ownerSVGElement"in n}const ou=new WeakMap;let ts;const tS=(n,e,t)=>(i,o)=>o&&o[0]?o[0][n+"Size"]:Mm(i)&&"getBBox"in i?i.getBBox()[e]:i[t],X1=tS("inline","width","offsetWidth"),j1=tS("block","height","offsetHeight");function Y1({target:n,borderBoxSize:e}){var t;(t=ou.get(n))==null||t.forEach(i=>{i(n,{get width(){return X1(n,e)},get height(){return j1(n,e)}})})}function $1(n){n.forEach(Y1)}function q1(){typeof ResizeObserver>"u"||(ts=new ResizeObserver($1))}function K1(n,e){ts||q1();const t=Ky(n);return t.forEach(i=>{let o=ou.get(i);o||(o=new Set,ou.set(i,o)),o.add(e),ts==null||ts.observe(i)}),()=>{t.forEach(i=>{const o=ou.get(i);o==null||o.delete(e),o!=null&&o.size||ts==null||ts.unobserve(i)})}}const au=new Set;let Fo;function Z1(){Fo=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};au.forEach(e=>e(n))},window.addEventListener("resize",Fo)}function J1(n){return au.add(n),Fo||Z1(),()=>{au.delete(n),!au.size&&typeof Fo=="function"&&(window.removeEventListener("resize",Fo),Fo=void 0)}}function tp(n,e){return typeof n=="function"?J1(n):K1(n,e)}function nS(n,e){let t;const i=()=>{const{currentTime:o}=e,c=(o===null?0:o.value)/100;t!==c&&n(c),t=c};return Tt.preUpdate(i,!0),()=>Ti(i)}function Q1(n){return Mm(n)&&n.tagName==="svg"}function eA(...n){const e=!Array.isArray(n[0]),t=e?0:-1,i=n[0+t],o=n[1+t],a=n[2+t],c=n[3+t],u=fm(o,a,c);return e?u(i):u}function tA(n,e,t={}){const i=n.get();let o=null,a=i,c;const u=typeof i=="string"?i.replace(/[\d.-]/g,""):void 0,d=()=>{o&&(o.stop(),o=null),n.animation=void 0},h=()=>{const g=Wv(n.get()),m=Wv(a);if(g===m){d();return}const _=o?o.getGeneratorVelocity():n.getVelocity();d(),o=new rl({keyframes:[g,m],velocity:_,type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:c})},p=()=>{var g;h(),n.animation=o??void 0,(g=n.events.animationStart)==null||g.notify(),o==null||o.then(()=>{var m;n.animation=void 0,(m=n.events.animationComplete)==null||m.notify()})};if(n.attach((g,m)=>{a=g,c=_=>m(Vd(_,u)),Tt.postRender(p)},d),mn(e)){let g=t.skipInitialAnimation===!0;const m=e.on("change",M=>{g?(g=!1,n.jump(Vd(M,u),!1)):n.set(Vd(M,u))}),_=n.on("destroy",m);return()=>{m(),_()}}return d}function Vd(n,e){return e?n+e:n}function Wv(n){return typeof n=="number"?n:parseFloat(n)}const nA=[...Yy,cn,Gi],iA=n=>nA.find(jy(n)),Xv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oo=()=>({x:Xv(),y:Xv()}),jv=()=>({min:0,max:0}),pn=()=>({x:jv(),y:jv()}),rA=new WeakMap;function Hu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function sl(n){return typeof n=="string"||Array.isArray(n)}const Em=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Tm=["initial",...Em];function Gu(n){return Hu(n.animate)||Tm.some(e=>sl(n[e]))}function iS(n){return!!(Gu(n)||n.variants)}function sA(n,e,t){for(const i in e){const o=e[i],a=t[i];if(mn(o))n.addValue(i,o);else if(mn(a))n.addValue(i,zi(o,{owner:n}));else if(a!==o)if(n.hasValue(i)){const c=n.getValue(i);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(i);n.addValue(i,zi(c!==void 0?c:o,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const Mu={current:null},wm={current:!1},oA=typeof window<"u";function rS(){if(wm.current=!0,!!oA)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Mu.current=n.matches;n.addEventListener("change",e),e()}else Mu.current=!1}const Yv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Eu={};function sS(n){Eu=n}function aA(){return Eu}class lA{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=hm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Gn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Tt.render(this.render,!1,!0))};const{latestValues:h,renderState:p}=u;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=p,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=d,this.blockInitialAnimation=!!c,this.isControllingVariants=Gu(t),this.isVariantNode=iS(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const _ in m){const M=m[_];h[_]!==void 0&&mn(M)&&M.set(h[_])}}mount(e){var t,i;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,rA.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(wm.current||rS(),this.shouldReduceMotion=Mu.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Ti(this.notifyUpdate),Ti(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const i=this.features[t];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&ky.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:u,times:d,ease:h,duration:p}=t.accelerate,g=new Fy({element:this.current,name:e,keyframes:u,times:d,ease:h,duration:hi(p)}),m=c(g);this.valueSubscriptions.set(e,()=>{m(),g.cancel()});return}const i=Ko.has(e);i&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Tt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Eu){const t=Eu[e];if(!t)continue;const{isEnabled:i,Feature:o}=t;if(!this.features[e]&&o&&i(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<Yv.length;i++){const o=Yv[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=sA(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=zi(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(ny(i)||ry(i))?i=parseFloat(i):!iA(i)&&Gi.test(t)&&(i=qy(e,t)),this.setBaseTarget(e,mn(i)?i.get():i)),mn(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let i;if(typeof t=="string"||typeof t=="object"){const c=_m(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(i=c[e])}if(t&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!mn(o)?o:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new nm),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Wo.render(this.render)}}class oS extends lA{constructor(){super(...arguments),this.KeyframeResolver=U1}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const i=e.style;return i?i[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;mn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class ls{constructor(e){this.isMounted=!1,this.node=e}update(){}}function aS({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function cA({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function uA(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function zd(n){return n===void 0||n===1}function np({scale:n,scaleX:e,scaleY:t}){return!zd(n)||!zd(e)||!zd(t)}function Ds(n){return np(n)||lS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function lS(n){return $v(n.x)||$v(n.y)}function $v(n){return n&&n!=="0%"}function Tu(n,e,t){const i=n-t,o=e*i;return t+o}function qv(n,e,t,i,o){return o!==void 0&&(n=Tu(n,o,i)),Tu(n,t,i)+e}function ip(n,e=0,t=1,i,o){n.min=qv(n.min,e,t,i,o),n.max=qv(n.max,e,t,i,o)}function cS(n,{x:e,y:t}){ip(n.x,e.translate,e.scale,e.originPoint),ip(n.y,t.translate,t.scale,t.originPoint)}const Kv=.999999999999,Zv=1.0000000000001;function fA(n,e,t,i=!1){var u;const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let d=0;d<o;d++){a=t[d],c=a.projectionDelta;const{visualElement:h}=a.options;h&&h.props.style&&h.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Qi(n.x,-a.scroll.offset.x),Qi(n.y,-a.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,cS(n,c)),i&&Ds(a.latestValues)&&lu(n,a.latestValues,(u=a.layout)==null?void 0:u.layoutBox))}e.x<Zv&&e.x>Kv&&(e.x=1),e.y<Zv&&e.y>Kv&&(e.y=1)}function Qi(n,e){n.min+=e,n.max+=e}function Jv(n,e,t,i,o=.5){const a=Vt(n.min,n.max,o);ip(n,e,t,a,i)}function Qv(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function lu(n,e,t){const i=t??n;Jv(n.x,Qv(e.x,i.x),e.scaleX,e.scale,e.originX),Jv(n.y,Qv(e.y,i.y),e.scaleY,e.scale,e.originY)}function uS(n,e){return aS(uA(n.getBoundingClientRect(),e))}function dA(n,e,t){const i=uS(n,t),{scroll:o}=e;return o&&(Qi(i.x,o.offset.x),Qi(i.y,o.offset.y)),i}const hA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},pA=qo.length;function mA(n,e,t){let i="",o=!0;for(let c=0;c<pA;c++){const u=qo[c],d=n[u];if(d===void 0)continue;let h=!0;if(typeof d=="number")h=d===(u.startsWith("scale")?1:0);else{const p=parseFloat(d);h=u.startsWith("scale")?p===1:p===0}if(!h||t){const p=ep(d,Su[u]);if(!h){o=!1;const g=hA[u]||u;i+=`${g}(${p}) `}t&&(e[u]=p)}}const a=n.pathRotation;return a&&(o=!1,i+=`rotate(${ep(a,Su.pathRotation)}) `),i=i.trim(),t?i=t(e,o?"":i):o&&(i="none"),i}function Am(n,e,t){const{style:i,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const d in e){const h=e[d];if(Ko.has(d)){c=!0;continue}else if(_y(d)){o[d]=h;continue}else{const p=ep(h,Su[d]);d.startsWith("origin")?(u=!0,a[d]=p):i[d]=p}}if(e.transform||(c||t?i.transform=mA(e,n.transform,t):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;i.transformOrigin=`${d} ${h} ${p}`}}function fS(n,{style:e,vars:t},i,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,i);for(c in t)a.setProperty(c,t[c])}function e_(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Fa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Ye.test(n))n=parseFloat(n);else return n;const t=e_(n,e.target.x),i=e_(n,e.target.y);return`${t}% ${i}%`}},gA={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,o=Gi.parse(n);if(o.length>5)return i;const a=Gi.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,d=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=d;const h=Vt(u,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}},rp={borderRadius:{...Fa,applyTo:[...ym]},borderTopLeftRadius:Fa,borderTopRightRadius:Fa,borderBottomLeftRadius:Fa,borderBottomRightRadius:Fa,boxShadow:gA};function dS(n,{layout:e,layoutId:t}){return Ko.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!rp[n]||n==="opacity")}function Cm(n,e,t){var c;const i=n.style,o=e==null?void 0:e.style,a={};if(!i)return a;for(const u in i)(mn(i[u])||o&&mn(o[u])||dS(u,n)||((c=t==null?void 0:t.getValue(u))==null?void 0:c.liveStyle)!==void 0)&&(a[u]=i[u]);return a}function vA(n){return window.getComputedStyle(n)}class _A extends oS{constructor(){super(...arguments),this.type="html",this.renderInstance=fS}mount(e){Vu(!!e.style),super.mount(e)}readValueFromInstance(e,t){var i;if(Ko.has(t))return(i=this.projection)!=null&&i.isProjecting?Gh(t):kw(e,t);{const o=vA(e),a=(_y(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return uS(e,t)}build(e,t,i){Am(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return Cm(e,t,i)}}const xA={offset:"stroke-dashoffset",array:"stroke-dasharray"},yA={offset:"strokeDashoffset",array:"strokeDasharray"};function SA(n,e,t=1,i=0,o=!0){n.pathLength=1;const a=o?xA:yA;n[a.offset]=`${-i}`,n[a.array]=`${e} ${t}`}const MA=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function hS(n,{attrX:e,attrY:t,attrScale:i,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...u},d,h,p){if(Am(n,u,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:g,style:m}=n;g.transform&&(m.transform=g.transform,delete g.transform),(m.transform||g.transformOrigin)&&(m.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),m.transform&&(m.transformBox=(p==null?void 0:p.transformBox)??"fill-box",delete g.transformBox);for(const _ of MA)g[_]!==void 0&&(m[_]=g[_],delete g[_]);e!==void 0&&(g.x=e),t!==void 0&&(g.y=t),i!==void 0&&(g.scale=i),o!==void 0&&SA(g,o,a,c,!1)}const pS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),mS=n=>typeof n=="string"&&n.toLowerCase()==="svg";function EA(n,e,t,i){fS(n,e,void 0,i);for(const o in e.attrs)n.setAttribute(pS.has(o)?o:xm(o),e.attrs[o])}function gS(n,e,t){const i=Cm(n,e,t);for(const o in n)if(mn(n[o])||mn(e[o])){const a=qo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[a]=n[o]}return i}class TA extends oS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=pn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ko.has(t)){const i=$y(t);return i&&i.default||0}return t=pS.has(t)?t:xm(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return gS(e,t,i)}build(e,t,i){hS(e,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,t,i,o){EA(e,t,i,o)}mount(e){this.isSVGTag=mS(e.tagName),super.mount(e)}}const wA=Tm.length;function vS(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?vS(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<wA;t++){const i=Tm[t],o=n.props[i];(sl(o)||o===!1)&&(e[i]=o)}return e}function _S(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}const AA=[...Em].reverse(),CA=Em.length;function RA(n){return e=>Promise.all(e.map(({animation:t,options:i})=>T1(n,t,i)))}function bA(n){let e=RA(n),t=t_(),i=!0,o=!1;const a=h=>(p,g)=>{var _;const m=Bs(n,g,h==="exit"?(_=n.presenceContext)==null?void 0:_.custom:void 0);if(m){const{transition:M,transitionEnd:w,...S}=m;p={...p,...S,...w}}return p};function c(h){e=h(n)}function u(h){const{props:p}=n,g=vS(n.parent)||{},m=[],_=new Set;let M={},w=1/0;for(let y=0;y<CA;y++){const P=AA[y],U=t[P],R=p[P]!==void 0?p[P]:g[P],L=sl(R),D=P===h?U.isActive:null;D===!1&&(w=y);let F=R===g[P]&&R!==p[P]&&L;if(F&&(i||o)&&n.manuallyAnimateOnMount&&(F=!1),U.protectedKeys={...M},!U.isActive&&D===null||!R&&!U.prevProp||Hu(R)||typeof R=="boolean")continue;if(P==="exit"&&U.isActive&&D!==!0){U.prevResolvedValues&&(M={...M,...U.prevResolvedValues});continue}const E=PA(U.prevProp,R);let N=E||P===h&&U.isActive&&!F&&L||y>w&&L,B=!1;const V=Array.isArray(R)?R:[R];let Z=V.reduce(a(P),{});D===!1&&(Z={});const{prevResolvedValues:ne={}}=U,Y={...ne,...Z},Q=G=>{N=!0,_.has(G)&&(B=!0,_.delete(G)),U.needsAnimating[G]=!0;const H=n.getValue(G);H&&(H.liveStyle=!1)};for(const G in Y){const H=Z[G],$=ne[G];if(M.hasOwnProperty(G))continue;let I=!1;qh(H)&&qh($)?I=!_S(H,$)||E:I=H!==$,I?H!=null?Q(G):_.add(G):H!==void 0&&_.has(G)?Q(G):U.protectedKeys[G]=!0}U.prevProp=R,U.prevResolvedValues=Z,U.isActive&&(M={...M,...Z}),(i||o)&&n.blockInitialAnimation&&(N=!1);const fe=F&&E;N&&(!fe||B)&&m.push(...V.map(G=>{const H={type:P};if(typeof G=="string"&&(i||o)&&!fe&&n.manuallyAnimateOnMount&&n.parent){const{parent:$}=n,I=Bs($,G);if($.enteringChildren&&I){const{delayChildren:ie}=I.transition||{};H.delay=By($.enteringChildren,n,ie)}}return{animation:G,options:H}}))}if(_.size){const y={};if(typeof p.initial!="boolean"){const P=Bs(n,Array.isArray(p.initial)?p.initial[0]:p.initial);P&&P.transition&&(y.transition=P.transition)}_.forEach(P=>{const U=n.getBaseTarget(P),R=n.getValue(P);R&&(R.liveStyle=!0),y[P]=U??null}),m.push({animation:y})}let S=!!m.length;return i&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(S=!1),i=!1,o=!1,S?e(m):Promise.resolve()}function d(h,p){var m;if(t[h].isActive===p)return Promise.resolve();(m=n.variantChildren)==null||m.forEach(_=>{var M;return(M=_.animationState)==null?void 0:M.setActive(h,p)}),t[h].isActive=p;const g=u(h);for(const _ in t)t[_].protectedKeys={};return g}return{animateChanges:u,setActive:d,setAnimateFunction:c,getState:()=>t,reset:()=>{t=t_(),o=!0}}}function PA(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!_S(e,n):!1}function As(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function t_(){return{animate:As(!0),whileInView:As(),whileHover:As(),whileTap:As(),whileDrag:As(),whileFocus:As(),exit:As()}}function sp(n,e){n.min=e.min,n.max=e.max}function Ui(n,e){sp(n.x,e.x),sp(n.y,e.y)}function n_(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const xS=1e-4,LA=1-xS,DA=1+xS,yS=.01,NA=0-yS,IA=0+yS;function Wn(n){return n.max-n.min}function UA(n,e,t){return Math.abs(n-e)<=t}function i_(n,e,t,i=.5){n.origin=i,n.originPoint=Vt(e.min,e.max,n.origin),n.scale=Wn(t)/Wn(e),n.translate=Vt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=LA&&n.scale<=DA||isNaN(n.scale))&&(n.scale=1),(n.translate>=NA&&n.translate<=IA||isNaN(n.translate))&&(n.translate=0)}function el(n,e,t,i){i_(n.x,e.x,t.x,i?i.originX:void 0),i_(n.y,e.y,t.y,i?i.originY:void 0)}function r_(n,e,t,i=0){const o=i?Vt(t.min,t.max,i):t.min;n.min=o+e.min,n.max=n.min+Wn(e)}function FA(n,e,t,i){r_(n.x,e.x,t.x,i==null?void 0:i.x),r_(n.y,e.y,t.y,i==null?void 0:i.y)}function s_(n,e,t,i=0){const o=i?Vt(t.min,t.max,i):t.min;n.min=e.min-o,n.max=n.min+Wn(e)}function wu(n,e,t,i){s_(n.x,e.x,t.x,i==null?void 0:i.x),s_(n.y,e.y,t.y,i==null?void 0:i.y)}function o_(n,e,t,i,o){return n-=e,n=Tu(n,1/t,i),o!==void 0&&(n=Tu(n,1/o,i)),n}function OA(n,e=0,t=1,i=.5,o,a=n,c=n){if(ir.test(e)&&(e=parseFloat(e),e=Vt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=Vt(a.min,a.max,i);n===a&&(u-=e),n.min=o_(n.min,e,t,u,o),n.max=o_(n.max,e,t,u,o)}function a_(n,e,[t,i,o],a,c){OA(n,e[t],e[i],e[o],e.scale,a,c)}const kA=["x","scaleX","originX"],BA=["y","scaleY","originY"];function l_(n,e,t,i){a_(n.x,e,kA,t?t.x:void 0,i?i.x:void 0),a_(n.y,e,BA,t?t.y:void 0,i?i.y:void 0)}function c_(n){return n.translate===0&&n.scale===1}function SS(n){return c_(n.x)&&c_(n.y)}function u_(n,e){return n.min===e.min&&n.max===e.max}function VA(n,e){return u_(n.x,e.x)&&u_(n.y,e.y)}function f_(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function MS(n,e){return f_(n.x,e.x)&&f_(n.y,e.y)}function d_(n){return Wn(n.x)/Wn(n.y)}function h_(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function Ji(n){return[n("x"),n("y")]}function zA(n,e,t){let i="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(i=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,pathRotation:g,rotateX:m,rotateY:_,skewX:M,skewY:w}=t;h&&(i=`perspective(${h}px) ${i}`),p&&(i+=`rotate(${p}deg) `),g&&(i+=`rotate(${g}deg) `),m&&(i+=`rotateX(${m}deg) `),_&&(i+=`rotateY(${_}deg) `),M&&(i+=`skewX(${M}deg) `),w&&(i+=`skewY(${w}deg) `)}const u=n.x.scale*e.x,d=n.y.scale*e.y;return(u!==1||d!==1)&&(i+=`scale(${u}, ${d})`),i||"none"}const HA=ym.length,p_=n=>typeof n=="string"?parseFloat(n):n,m_=n=>typeof n=="number"||Ye.test(n);function GA(n,e,t,i,o,a){o?(n.opacity=Vt(0,t.opacity??1,WA(i)),n.opacityExit=Vt(e.opacity??1,0,XA(i))):a&&(n.opacity=Vt(e.opacity??1,t.opacity??1,i));for(let c=0;c<HA;c++){const u=ym[c];let d=g_(e,u),h=g_(t,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||m_(d)===m_(h)?(n[u]=Math.max(Vt(p_(d),p_(h),i),0),(ir.test(h)||ir.test(d))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=Vt(e.rotate||0,t.rotate||0,i))}function g_(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const WA=ES(0,.5,dy),XA=ES(.5,.95,ii);function ES(n,e,t){return i=>i<n?0:i>e?1:t(Ho(n,e,i))}function jA(n,e,t){const i=mn(n)?n:zi(n);return i.start(vm("",i,e,t)),i.animation}function ol(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}const YA=(n,e)=>n.depth-e.depth;class $A{constructor(){this.children=[],this.isDirty=!1}add(e){tm(this.children,e),this.isDirty=!0}remove(e){vu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(YA),this.isDirty=!1,this.children.forEach(e)}}function qA(n,e){const t=Gn.now(),i=({timestamp:o})=>{const a=o-t;a>=e&&(Ti(i),n(a-e))};return Tt.setup(i,!0),()=>Ti(i)}function cu(n){return mn(n)?n.get():n}class KA{constructor(){this.members=[]}add(e){tm(this.members,e);for(let t=this.members.length-1;t>=0;t--){const i=this.members[t];if(i===e||i===this.lead||i===this.prevLead)continue;const o=i.instance;(!o||o.isConnected===!1)&&!i.snapshot&&(vu(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(vu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let i=this.members.indexOf(e)-1;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=i.options,{layoutDependency:c}=e.options;(a===void 0||a!==c)&&(e.resumeFrom=i,t&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,i,o,a,c;(i=(t=e.options).onExitComplete)==null||i.call(t),(c=(o=e.resumingFrom)==null?void 0:(a=o.options).onExitComplete)==null||c.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const uu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Hd=["","X","Y","Z"],ZA=1e3;let JA=0;function Gd(n,e,t,i){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),i&&(i[n]=0))}function TS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Wy(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Tt,!(o||a))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&TS(i)}function wS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=JA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(tC),this.nodes.forEach(aC),this.nodes.forEach(lC),this.nodes.forEach(nC)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new $A)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new nm),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const d=this.eventHandlers.get(c);d&&d.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=Mm(c)&&!Q1(c),this.instance=c;const{layoutId:u,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||u)&&(this.isLayoutDirty=!0),n){let p,g=0;const m=()=>this.root.updateBlockedByResize=!1;Tt.read(()=>{g=window.innerWidth}),n(c,()=>{const _=window.innerWidth;_!==g&&(g=_,this.root.updateBlockedByResize=!0,p&&p(),p=qA(m,250),uu.hasAnimatedSinceResize&&(uu.hasAnimatedSinceResize=!1,this.nodes.forEach(x_)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:g,hasRelativeLayoutChanged:m,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||hC,{onLayoutAnimationStart:w,onLayoutAnimationComplete:S}=h.getProps(),y=!this.targetLayout||!MS(this.targetLayout,_),P=!g&&m;if(this.options.layoutRoot||this.resumeFrom||P||g&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const U={...gm(M,"layout"),onPlay:w,onComplete:S};(h.shouldReduceMotion||this.options.layoutRoot)&&(U.delay=0,U.type=!1),this.startAnimation(U),this.setAnimationOrigin(p,P,U.path)}else g||x_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ti(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(cC),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&TS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const g=this.path[p];g.shouldResetTransform=!0,(typeof g.latestValues.x=="string"||typeof g.latestValues.y=="string")&&(g.isLayoutDirty=!0),g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const d=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),d&&this.nodes.forEach(rC),this.nodes.forEach(v_);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(__);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(sC),this.nodes.forEach(oC),this.nodes.forEach(QA),this.nodes.forEach(eC)):this.nodes.forEach(__),this.clearAllSnapshots();const u=Gn.now();Mn.delta=Xi(0,1e3/60,u-Mn.timestamp),Mn.timestamp=u,Mn.isProcessing=!0,Nd.update.process(Mn),Nd.preRender.process(Mn),Nd.render.process(Mn),Mn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wo.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(iC),this.sharedNodes.forEach(uC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Tt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Tt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Wn(this.snapshot.measuredBox.x)&&!Wn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=pn()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const d=i(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!SS(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&this.instance&&(u||Ds(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return c&&(d=this.removeTransform(d)),pC(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:c}=this.options;if(!c)return pn();const u=c.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(mC))){const{scroll:p}=this.root;p&&(Qi(u.x,p.offset.x),Qi(u.y,p.offset.y))}return u}removeElementScroll(c){var d;const u=pn();if(Ui(u,c),(d=this.scroll)!=null&&d.wasRoot)return u;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:g,options:m}=p;p!==this.root&&g&&m.layoutScroll&&(g.wasRoot&&Ui(u,c),Qi(u.x,g.offset.x),Qi(u.y,g.offset.y))}return u}applyTransform(c,u=!1,d){var p,g;const h=d||pn();Ui(h,c);for(let m=0;m<this.path.length;m++){const _=this.path[m];!u&&_.options.layoutScroll&&_.scroll&&_!==_.root&&(Qi(h.x,-_.scroll.offset.x),Qi(h.y,-_.scroll.offset.y)),Ds(_.latestValues)&&lu(h,_.latestValues,(p=_.layout)==null?void 0:p.layoutBox)}return Ds(this.latestValues)&&lu(h,this.latestValues,(g=this.layout)==null?void 0:g.layoutBox),h}removeTransform(c){var d;const u=pn();Ui(u,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!Ds(p.latestValues))continue;let g;p.instance&&(np(p.latestValues)&&p.updateSnapshot(),g=pn(),Ui(g,p.measurePageBox())),l_(u,p.latestValues,(d=p.snapshot)==null?void 0:d.layoutBox,g)}return Ds(this.latestValues)&&l_(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Mn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var _;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==u;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(_=this.parent)!=null&&_.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:g}=this.options;if(!this.layout||!(p||g))return;this.resolvedRelativeTargetAt=Mn.timestamp;const m=this.getClosestProjectingParent();m&&this.linkedParentVersion!==m.layoutVersion&&!m.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&m&&m.layout?this.createRelativeTarget(m,this.layout.layoutBox,m.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=pn(),this.targetWithTransforms=pn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),FA(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ui(this.target,this.layout.layoutBox),cS(this.target,this.targetDelta)):Ui(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?this.createRelativeTarget(m,this.target,m.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||np(this.parent.latestValues)||lS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,u,d){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pn(),this.relativeTargetOrigin=pn(),wu(this.relativeTargetOrigin,u,d,this.options.layoutAnchor||void 0),Ui(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(d=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Mn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;Ui(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,m=this.treeScale.y;fA(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=pn());const{target:_}=c;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(n_(this.prevProjectionDelta.x,this.projectionDelta.x),n_(this.prevProjectionDelta.y,this.projectionDelta.y)),el(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==m||!h_(this.projectionDelta.x,this.prevProjectionDelta.x)||!h_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Oo(),this.projectionDelta=Oo(),this.projectionDeltaWithTransform=Oo()}setAnimationOrigin(c,u=!1,d){const h=this.snapshot,p=h?h.latestValues:{},g={...this.latestValues},m=Oo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const _=pn(),M=h?h.source:void 0,w=this.layout?this.layout.source:void 0,S=M!==w,y=this.getStack(),P=!y||y.members.length<=1,U=!!(S&&!P&&this.options.crossfade===!0&&!this.path.some(dC));this.animationProgress=0;let R;const L=d==null?void 0:d.interpolateProjection(c);this.mixTargetDelta=D=>{const F=D/1e3,E=L==null?void 0:L(F);E?(m.x.translate=E.x,m.x.scale=Vt(c.x.scale,1,F),m.x.origin=c.x.origin,m.x.originPoint=c.x.originPoint,m.y.translate=E.y,m.y.scale=Vt(c.y.scale,1,F),m.y.origin=c.y.origin,m.y.originPoint=c.y.originPoint):(y_(m.x,c.x,F),y_(m.y,c.y,F)),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wu(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),fC(this.relativeTarget,this.relativeTargetOrigin,_,F),R&&VA(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=pn()),Ui(R,this.relativeTarget)),S&&(this.animationValues=g,GA(g,p,this.latestValues,F,U,P)),E&&E.rotate!==void 0&&(this.animationValues||(this.animationValues=g),this.animationValues.pathRotation=E.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var u,d,h;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(h=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Ti(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Tt.update(()=>{uu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=zi(0)),this.motionValue.jump(0,!1),this.currentAnimation=jA(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),c.onUpdate&&c.onUpdate(p)},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ZA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:p}=c;if(!(!u||!d||!h)){if(this!==c&&this.layout&&h&&AS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||pn();const g=Wn(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+g;const m=Wn(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+m}Ui(u,d),lu(u,p),el(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new KA),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&Gd("z",c,h,this.animationValues);for(let p=0;p<Hd.length;p++)Gd(`rotate${Hd[p]}`,c,h,this.animationValues),Gd(`skew${Hd[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=cu(u==null?void 0:u.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=cu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Ds(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const p=h.animationValues||h.latestValues;this.applyTransformsToTarget();let g=zA(this.projectionDeltaWithTransform,this.treeScale,p);d&&(g=d(p,g)),c.transform=g;const{x:m,y:_}=this.projectionDelta;c.transformOrigin=`${m.origin*100}% ${_.origin*100}% 0`,h.animationValues?c.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const M in rp){if(p[M]===void 0)continue;const{correct:w,applyTo:S,isCSSVariable:y}=rp[M],P=g==="none"?p[M]:w(p[M],h);if(S){const U=S.length;for(let R=0;R<U;R++)c[S[R]]=P}else y?this.options.visualElement.renderState.vars[M]=P:c[M]=P}this.options.layoutId&&(c.pointerEvents=h===this?cu(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(v_),this.root.sharedNodes.clear()}}}function QA(n){n.updateLayout()}function eC(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;if(a==="size")Ji(g=>{const m=c?e.measuredBox[g]:e.layoutBox[g],_=Wn(m);m.min=i[g].min,m.max=m.min+_});else if(a==="x"||a==="y"){const g=a==="x"?"y":"x";sp(c?e.measuredBox[g]:e.layoutBox[g],i[g])}else AS(a,e.layoutBox,i)&&Ji(g=>{const m=c?e.measuredBox[g]:e.layoutBox[g],_=Wn(i[g]);m.max=m.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+_)});const u=Oo();el(u,i,e.layoutBox);const d=Oo();c?el(d,n.applyTransform(o,!0),e.measuredBox):el(d,i,e.layoutBox);const h=!SS(u);let p=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:m,layout:_}=g;if(m&&_){const M=n.options.layoutAnchor||void 0,w=pn();wu(w,e.layoutBox,m.layoutBox,M);const S=pn();wu(S,i,_.layoutBox,M),MS(w,S)||(p=!0),g.options.layoutRoot&&(n.relativeTarget=S,n.relativeTargetOrigin=w,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:d,layoutDelta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function tC(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function nC(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function iC(n){n.clearSnapshot()}function v_(n){n.clearMeasurements()}function rC(n){n.isLayoutDirty=!0,n.updateLayout()}function __(n){n.isLayoutDirty=!1}function sC(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function oC(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function x_(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function aC(n){n.resolveTargetDelta()}function lC(n){n.calcProjection()}function cC(n){n.resetSkewAndRotation()}function uC(n){n.removeLeadSnapshot()}function y_(n,e,t){n.translate=Vt(e.translate,0,t),n.scale=Vt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function S_(n,e,t,i){n.min=Vt(e.min,t.min,i),n.max=Vt(e.max,t.max,i)}function fC(n,e,t,i){S_(n.x,e.x,t.x,i),S_(n.y,e.y,t.y,i)}function dC(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const hC={duration:.45,ease:[.4,0,.1,1]},M_=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),E_=M_("applewebkit/")&&!M_("chrome/")?Math.round:ii;function T_(n){n.min=E_(n.min),n.max=E_(n.max)}function pC(n){T_(n.x),T_(n.y)}function AS(n,e,t){return n==="position"||n==="preserve-aspect"&&!UA(d_(e),d_(t),.2)}function mC(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const gC=wS({attachResizeListener:(n,e)=>ol(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Wd={current:void 0},CS=wS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Wd.current){const n=new gC({});n.mount(window),n.setOptions({layoutScroll:!0}),Wd.current=n}return Wd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),vl=_e.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function w_(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function vC(...n){return e=>{let t=!1;const i=n.map(o=>{const a=w_(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<i.length;o++){const a=i[o];typeof a=="function"?a():w_(n[o],null)}}}}function _C(...n){return _e.useCallback(vC(...n),n)}class xC extends _e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(Qa(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=t.offsetParent,o=Qa(i)&&i.offsetWidth||0,a=Qa(i)&&i.offsetHeight||0,c=getComputedStyle(t),u=this.props.sizeRef.current;u.height=parseFloat(c.height),u.width=parseFloat(c.width),u.top=t.offsetTop,u.left=t.offsetLeft,u.right=o-u.width-u.left,u.bottom=a-u.height-u.top,u.direction=c.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function yC({children:n,isPresent:e,anchorX:t,anchorY:i,root:o,pop:a}){var m;const c=_e.useId(),u=_e.useRef(null),d=_e.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:h}=_e.useContext(vl),p=a!==!1?((m=n.props)==null?void 0:m.ref)??(n==null?void 0:n.ref):void 0,g=_C(u,p);return _e.useInsertionEffect(()=>{const{width:_,height:M,top:w,left:S,right:y,bottom:P,direction:U}=d.current;if(e||a===!1||!u.current||!_||!M)return;const R=U==="rtl",L=t==="left"?R?`right: ${y}`:`left: ${S}`:R?`left: ${S}`:`right: ${y}`,D=i==="bottom"?`bottom: ${P}`:`top: ${w}`;u.current.dataset.motionPopId=c;const F=document.createElement("style");h&&(F.nonce=h);const E=o??document.head;return E.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${_}px !important;
            height: ${M}px !important;
            ${L}px !important;
            ${D}px !important;
          }
        `),()=>{var N;(N=u.current)==null||N.removeAttribute("data-motion-pop-id"),E.contains(F)&&E.removeChild(F)}},[e]),C.jsx(xC,{isPresent:e,childRef:u,sizeRef:d,pop:a,children:a===!1?n:_e.cloneElement(n,{ref:g})})}const SC=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:o,presenceAffectsLayout:a,mode:c,anchorX:u,anchorY:d,root:h})=>{const p=ss(MC),g=_e.useId(),m=_e.useRef(t),_=_e.useRef(i);hl(()=>{m.current=t,_.current=i});let M=!0,w=_e.useMemo(()=>(M=!1,{id:g,initial:e,isPresent:t,custom:o,onExitComplete:S=>{p.set(S,!0);for(const y of p.values())if(!y)return;i&&i()},register:S=>(p.set(S,!1),()=>{var y;p.delete(S),!m.current&&!p.size&&((y=_.current)==null||y.call(_))})}),[t,p,i]);return a&&M&&(w={...w}),_e.useMemo(()=>{p.forEach((S,y)=>p.set(y,!1))},[t]),_e.useEffect(()=>{!t&&!p.size&&i&&i()},[t]),n=C.jsx(yC,{pop:c==="popLayout",isPresent:t,anchorX:u,anchorY:d,root:h,children:n}),C.jsx(Bu.Provider,{value:w,children:n})};function MC(){return new Map}function RS(n=!0){const e=_e.useContext(Bu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:o}=e,a=_e.useId();_e.useEffect(()=>{if(n)return o(a)},[n]);const c=_e.useCallback(()=>n&&i&&i(a),[a,i,n]);return!t&&i?[!1,c]:[!0]}const bc=n=>n.key||"";function A_(n){const e=[];return _e.Children.forEach(n,t=>{_e.isValidElement(t)&&e.push(t)}),e}const EC=({children:n,custom:e,initial:t=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1,anchorX:u="left",anchorY:d="top",root:h})=>{const[p,g]=RS(c),m=_e.useMemo(()=>A_(n),[n]),_=c&&!p?[]:m.map(bc),M=_e.useRef(!0),w=_e.useRef(m),S=ss(()=>new Map),y=_e.useRef(new Set),[P,U]=_e.useState(m),[R,L]=_e.useState(m);hl(()=>{M.current=!1,w.current=m;for(let E=0;E<R.length;E++){const N=bc(R[E]);_.includes(N)?(S.delete(N),y.current.delete(N)):S.get(N)!==!0&&S.set(N,!1)}},[R,_.length,_.join("-")]);const D=[];if(m!==P){let E=[...m];for(let N=0;N<R.length;N++){const B=R[N],V=bc(B);_.includes(V)||(E.splice(N,0,B),D.push(B))}return a==="wait"&&D.length&&(E=D),L(A_(E)),U(m),null}const{forceRender:F}=_e.useContext(em);return C.jsx(C.Fragment,{children:R.map(E=>{const N=bc(E),B=c&&!p?!1:m===R||_.includes(N),V=()=>{if(y.current.has(N))return;if(S.has(N))y.current.add(N),S.set(N,!0);else return;let Z=!0;S.forEach(ne=>{ne||(Z=!1)}),Z&&(F==null||F(),L(w.current),c&&(g==null||g()),i&&i())};return C.jsx(SC,{isPresent:B,initial:!M.current||t?void 0:!1,custom:e,presenceAffectsLayout:o,mode:a,root:h,onExitComplete:B?void 0:V,anchorX:u,anchorY:d,children:E},N)})})},bS=_e.createContext({strict:!1}),C_={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let R_=!1;function TC(){if(R_)return;const n={};for(const e in C_)n[e]={isEnabled:t=>C_[e].some(i=>!!t[i])};sS(n),R_=!0}function PS(){return TC(),aA()}function wC(n){const e=PS();for(const t in n)e[t]={...e[t],...n[t]};sS(e)}const AC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Au(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||AC.has(n)}let LS=n=>!Au(n);function CC(n){typeof n=="function"&&(LS=e=>e.startsWith("on")?!Au(e):n(e))}try{CC(require("@emotion/is-prop-valid").default)}catch{}function RC(n,e,t){const i={};for(const o in n)o==="values"&&typeof n.values=="object"||mn(n[o])||(LS(o)||t===!0&&Au(o)||!e&&!Au(o)||n.draggable&&o.startsWith("onDrag"))&&(i[o]=n[o]);return i}const Wu=_e.createContext({});function bC(n,e){if(Gu(n)){const{initial:t,animate:i}=n;return{initial:t===!1||sl(t)?t:void 0,animate:sl(i)?i:void 0}}return n.inherit!==!1?e:{}}function PC(n){const{initial:e,animate:t}=bC(n,_e.useContext(Wu));return _e.useMemo(()=>({initial:e,animate:t}),[b_(e),b_(t)])}function b_(n){return Array.isArray(n)?n.join(" "):n}const Rm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function DS(n,e,t){for(const i in e)!mn(e[i])&&!dS(i,t)&&(n[i]=e[i])}function LC({transformTemplate:n},e){return _e.useMemo(()=>{const t=Rm();return Am(t,e,n),Object.assign({},t.vars,t.style)},[e])}function DC(n,e){const t=n.style||{},i={};return DS(i,t,n),Object.assign(i,LC(n,e)),i}function NC(n,e){const t={},i=DC(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}const NS=()=>({...Rm(),attrs:{}});function IC(n,e,t,i){const o=_e.useMemo(()=>{const a=NS();return hS(a,e,mS(i),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};DS(a,n.style,n),o.style={...a,...o.style}}return o}const UC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function bm(n){return typeof n!="string"||n.includes("-")?!1:!!(UC.indexOf(n)>-1||/[A-Z]/u.test(n))}function FC(n,e,t,{latestValues:i},o,a=!1,c){const d=(c??bm(n)?IC:NC)(e,i,o,n),h=RC(e,typeof n=="string",a),p=n!==_e.Fragment?{...h,...d,ref:t}:{},{children:g}=e,m=_e.useMemo(()=>mn(g)?g.get():g,[g]);return _e.createElement(n,{...p,children:m})}function OC({scrapeMotionValuesFromProps:n,createRenderState:e},t,i,o){return{latestValues:kC(t,i,o,n),renderState:e()}}function kC(n,e,t,i){const o={},a=i(n,{});for(const m in a)o[m]=cu(a[m]);let{initial:c,animate:u}=n;const d=Gu(n),h=iS(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const g=p?u:c;if(g&&typeof g!="boolean"&&!Hu(g)){const m=Array.isArray(g)?g:[g];for(let _=0;_<m.length;_++){const M=_m(n,m[_]);if(M){const{transitionEnd:w,transition:S,...y}=M;for(const P in y){let U=y[P];if(Array.isArray(U)){const R=p?U.length-1:0;U=U[R]}U!==null&&(o[P]=U)}for(const P in w)o[P]=w[P]}}}return o}const IS=n=>(e,t)=>{const i=_e.useContext(Wu),o=_e.useContext(Bu),a=()=>OC(n,e,i,o);return t?a():ss(a)},BC=IS({scrapeMotionValuesFromProps:Cm,createRenderState:Rm}),VC=IS({scrapeMotionValuesFromProps:gS,createRenderState:NS}),zC=Symbol.for("motionComponentSymbol");function HC(n,e,t){const i=_e.useRef(t);_e.useInsertionEffect(()=>{i.current=t});const o=_e.useRef(null);return _e.useCallback(a=>{var u;a&&((u=n.onMount)==null||u.call(n,a)),e&&(a?e.mount(a):e.unmount());const c=i.current;if(typeof c=="function")if(a){const d=c(a);typeof d=="function"&&(o.current=d)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a)},[e])}const US=_e.createContext({});function No(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function GC(n,e,t,i,o,a){var U,R;const{visualElement:c}=_e.useContext(Wu),u=_e.useContext(bS),d=_e.useContext(Bu),h=_e.useContext(vl),p=h.reducedMotion,g=h.skipAnimations,m=_e.useRef(null),_=_e.useRef(!1);i=i||u.renderer,!m.current&&i&&(m.current=i(n,{visualState:e,parent:c,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p,skipAnimations:g,isSVG:a}),_.current&&m.current&&(m.current.manuallyAnimateOnMount=!0));const M=m.current,w=_e.useContext(US);M&&!M.projection&&o&&(M.type==="html"||M.type==="svg")&&WC(m.current,t,o,w);const S=_e.useRef(!1);_e.useInsertionEffect(()=>{M&&S.current&&M.update(t,d)});const y=t[Gy],P=_e.useRef(!!y&&typeof window<"u"&&!((U=window.MotionHandoffIsComplete)!=null&&U.call(window,y))&&((R=window.MotionHasOptimisedAnimation)==null?void 0:R.call(window,y)));return hl(()=>{_.current=!0,M&&(S.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),P.current&&M.animationState&&M.animationState.animateChanges())}),_e.useEffect(()=>{M&&(!P.current&&M.animationState&&M.animationState.animateChanges(),P.current&&(queueMicrotask(()=>{var L;(L=window.MotionHandoffMarkAsComplete)==null||L.call(window,y)}),P.current=!1),M.enteringChildren=void 0)}),M}function WC(n,e,t,i){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:d,layoutRoot:h,layoutAnchor:p,layoutCrossfade:g}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:FS(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&No(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,crossfade:g,layoutScroll:d,layoutRoot:h,layoutAnchor:p})}function FS(n){if(n)return n.options.allowProjection!==!1?n.projection:FS(n.parent)}function Xd(n,{forwardMotionProps:e=!1,type:t}={},i,o){i&&wC(i);const a=t?t==="svg":bm(n),c=a?VC:BC;function u(h,p){let g;const m={..._e.useContext(vl),...h,layoutId:XC(h)},{isStatic:_}=m,M=PC(h),w=c(h,_);if(!_&&typeof window<"u"){jC();const S=YC(m);g=S.MeasureLayout,M.visualElement=GC(n,w,m,o,S.ProjectionNode,a)}return C.jsxs(Wu.Provider,{value:M,children:[g&&M.visualElement?C.jsx(g,{visualElement:M.visualElement,...m}):null,FC(n,h,HC(w,M.visualElement,p),w,_,e,a)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=_e.forwardRef(u);return d[zC]=n,d}function XC({layoutId:n}){const e=_e.useContext(em).id;return e&&n!==void 0?e+"-"+n:n}function jC(n,e){_e.useContext(bS).strict}function YC(n){const e=PS(),{drag:t,layout:i}=e;if(!t&&!i)return{};const o={...t,...i};return{MeasureLayout:t!=null&&t.isEnabled(n)||i!=null&&i.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function $C(n,e){if(typeof Proxy>"u")return Xd;const t=new Map,i=(a,c)=>Xd(a,c,n,e),o=(a,c)=>i(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?i:(t.has(c)||t.set(c,Xd(c,void 0,n,e)),t.get(c))})}const qC=(n,e)=>e.isSVG??bm(n)?new TA(e):new _A(e,{allowProjection:n!==_e.Fragment});class KC extends ls{constructor(e){super(e),e.animationState||(e.animationState=bA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Hu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let ZC=0;class JC extends ls{constructor(){super(...arguments),this.id=ZC++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:c,custom:u}=this.node.getProps();if(typeof c=="string"||typeof c=="object"&&c!==null&&!Array.isArray(c)){const d=Bs(this.node,c,u);if(d){const{transition:h,transitionEnd:p,...g}=d;for(const m in g)(a=this.node.getValue(m))==null||a.jump(g[m])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const QC={animation:{Feature:KC},exit:{Feature:JC}};function _l(n){return{point:{x:n.pageX,y:n.pageY}}}const eR=n=>e=>Sm(e)&&n(e,_l(e));function tl(n,e,t,i){return ol(n,e,eR(t),i)}const OS=({current:n})=>n?n.ownerDocument.defaultView:null,P_=(n,e)=>Math.abs(n-e);function tR(n,e){const t=P_(n.x,e.x),i=P_(n.y,e.y);return Math.sqrt(t**2+i**2)}const L_=new Set(["auto","scroll"]);class kS{constructor(e,t,{transformPagePoint:i,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:u}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=M=>{this.handleScroll(M.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Pc(this.lastRawMoveEventInfo,this.transformPagePoint));const M=jd(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,S=tR(M.offset,{x:0,y:0})>=this.distanceThreshold;if(!w&&!S)return;const{point:y}=M,{timestamp:P}=Mn;this.history.push({...y,timestamp:P});const{onStart:U,onMove:R}=this.handlers;w||(U&&U(this.lastMoveEvent,M),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,M)},this.handlePointerMove=(M,w)=>{this.lastMoveEvent=M,this.lastRawMoveEventInfo=w,this.lastMoveEventInfo=Pc(w,this.transformPagePoint),Tt.update(this.updatePoint,!0)},this.handlePointerUp=(M,w)=>{this.end();const{onEnd:S,onSessionEnd:y,resumeAnimation:P}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&P&&P(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const U=jd(M.type==="pointercancel"?this.lastMoveEventInfo:Pc(w,this.transformPagePoint),this.history);this.startEvent&&S&&S(M,U),y&&y(M,U)},!Sm(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=i,this.distanceThreshold=c,this.contextWindow=o||window;const d=_l(e),h=Pc(d,this.transformPagePoint),{point:p}=h,{timestamp:g}=Mn;this.history=[{...p,timestamp:g}];const{onSessionStart:m}=t;m&&m(e,jd(h,this.history));const _={passive:!0,capture:!0};this.removeListeners=pl(tl(this.contextWindow,"pointermove",this.handlePointerMove,_),tl(this.contextWindow,"pointerup",this.handlePointerUp,_),tl(this.contextWindow,"pointercancel",this.handlePointerUp,_)),u&&this.startScrollTracking(u)}startScrollTracking(e){let t=e.parentElement;for(;t;){const i=getComputedStyle(t);(L_.has(i.overflowX)||L_.has(i.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const i=e===window,o=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),Tt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ti(this.updatePoint)}}function Pc(n,e){return e?{point:e(n.point)}:n}function D_(n,e){return{x:n.x-e.x,y:n.y-e.y}}function jd({point:n},e){return{point:n,delta:D_(n,BS(e)),offset:D_(n,nR(e)),velocity:iR(e,.1)}}function nR(n){return n[0]}function BS(n){return n[n.length-1]}function iR(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const o=BS(n);for(;t>=0&&(i=n[t],!(o.timestamp-i.timestamp>hi(e)));)t--;if(!i)return{x:0,y:0};i===n[0]&&n.length>2&&o.timestamp-i.timestamp>hi(e)*2&&(i=n[1]);const a=Ei(o.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-i.x)/a,y:(o.y-i.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function rR(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?Vt(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?Vt(t,n,i.max):Math.min(n,t)),n}function N_(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function sR(n,{top:e,left:t,bottom:i,right:o}){return{x:N_(n.x,t,o),y:N_(n.y,e,i)}}function I_(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function oR(n,e){return{x:I_(n.x,e.x),y:I_(n.y,e.y)}}function aR(n,e){let t=.5;const i=Wn(n),o=Wn(e);return o>i?t=Ho(e.min,e.max-i,n.min):i>o&&(t=Ho(n.min,n.max-o,e.min)),Xi(0,1,t)}function lR(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const op=.35;function cR(n=op){return n===!1?n=0:n===!0&&(n=op),{x:U_(n,"left","right"),y:U_(n,"top","bottom")}}function U_(n,e,t){return{min:F_(n,e),max:F_(n,t)}}function F_(n,e){return typeof n=="number"?n:n[e]||0}const uR=new WeakMap;class fR{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:i}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=g=>{t&&this.snapToCursor(_l(g).point),this.stopAnimation()},c=(g,m)=>{const{drag:_,dragPropagation:M,onDragStart:w}=this.getProps();if(_&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=F1(_),!this.openDragLock))return;this.latestPointerEvent=g,this.latestPanInfo=m,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ji(y=>{let P=this.getAxisMotionValue(y).get()||0;if(ir.test(P)){const{projection:U}=this.visualElement;if(U&&U.layout){const R=U.layout.layoutBox[y];R&&(P=Wn(R)*(parseFloat(P)/100))}}this.originPoint[y]=P}),w&&Tt.update(()=>w(g,m),!1,!0),Kh(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},u=(g,m)=>{this.latestPointerEvent=g,this.latestPanInfo=m;const{dragPropagation:_,dragDirectionLock:M,onDirectionLock:w,onDrag:S}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:y}=m;if(M&&this.currentDirection===null){this.currentDirection=hR(y),this.currentDirection!==null&&w&&w(this.currentDirection);return}this.updateAxis("x",m.point,y),this.updateAxis("y",m.point,y),this.visualElement.render(),S&&Tt.update(()=>S(g,m),!1,!0)},d=(g,m)=>{this.latestPointerEvent=g,this.latestPanInfo=m,this.stop(g,m),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:g}=this.getProps();(g||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:p}=this.getProps();this.panSession=new kS(e,{onSessionStart:a,onStart:c,onMove:u,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:i,contextWindow:OS(this.visualElement),element:this.visualElement.current})}stop(e,t){const i=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!i)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&Tt.postRender(()=>u(i,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,i){const{drag:o}=this.getProps();if(!i||!Lc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(c=rR(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&No(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=sR(i.layoutBox,e):this.constraints=!1,this.elastic=cR(t),o!==this.constraints&&!No(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&Ji(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=lR(i.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!No(e))return!1;const i=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const a=dA(i,o.root,this.visualElement.getTransformPagePoint());let c=oR(o.layout.layoutBox,a);if(t){const u=t(cA(c));this.hasMutatedConstraints=!!u,u&&(c=aS(u))}return c}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=Ji(p=>{if(!Lc(p,t,this.currentDirection))return;let g=d&&d[p]||{};(c===!0||c===p)&&(g={min:0,max:0});const m=o?200:1e6,_=o?40:1e7,M={type:"inertia",velocity:i?e[p]:0,bounceStiffness:m,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...a,...g};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return Kh(this.visualElement,e),i.start(vm(e,i,0,t,this.visualElement,!1))}stopAnimation(){Ji(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[t];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Ji(t=>{const{drag:i}=this.getProps();if(!Lc(t,i,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t],d=a.get()||0;a.set(e[t]-Vt(c,u,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!No(t)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ji(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const d=u.get();o[c]=aR({min:d,max:d},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ji(c=>{if(!Lc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];u.set(Vt(d,h,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;uR.set(this.visualElement,this);const e=this.visualElement.current,t=tl(e,"pointerdown",h=>{const{drag:p,dragListener:g=!0}=this.getProps(),m=h.target,_=m!==e&&H1(m);p&&g&&!_&&this.start(h)});let i;const o=()=>{const{dragConstraints:h}=this.getProps();No(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),i||(i=dR(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),Tt.read(o);const u=ol(window,"resize",()=>this.scalePositionWithinConstraints()),d=a.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Ji(g=>{const m=this.getAxisMotionValue(g);m&&(this.originPoint[g]+=h[g].translate,m.set(m.get()+h[g].translate))}),this.visualElement.render())}));return()=>{u(),t(),c(),d&&d(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=op,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function O_(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function dR(n,e,t){const i=tp(n,O_(t)),o=tp(e,O_(t));return()=>{i(),o()}}function Lc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function hR(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class pR extends ls{constructor(e){super(e),this.removeGroupControls=ii,this.removeListeners=ii,this.controls=new fR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ii}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Yd=n=>(e,t)=>{n&&Tt.update(()=>n(e,t),!1,!0)};class mR extends ls{constructor(){super(...arguments),this.removePointerDownListener=ii}onPointerDown(e){this.session=new kS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:OS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:Yd(e),onStart:Yd(t),onMove:Yd(i),onEnd:(a,c)=>{delete this.session,o&&Tt.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=tl(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let $d=!1;class gR extends _e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),i&&i.register&&o&&i.register(a),$d&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),uu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:o,isPresent:a}=this.props,{projection:c}=i;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),$d=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||Tt.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=t,i.root.didUpdate(),Wo.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:o}=e;$d=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function VS(n){const[e,t]=RS(),i=_e.useContext(em);return C.jsx(gR,{...n,layoutGroup:i,switchLayoutGroup:_e.useContext(US),isPresent:e,safeToRemove:t})}const vR={pan:{Feature:mR},drag:{Feature:pR,ProjectionNode:CS,MeasureLayout:VS}};function k_(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=i[o];a&&Tt.postRender(()=>a(e,_l(e)))}class _R extends ls{mount(){const{current:e}=this.node;e&&(this.unmount=k1(e,(t,i)=>(k_(this.node,i,"Start"),o=>k_(this.node,o,"End"))))}unmount(){}}class xR extends ls{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=pl(ol(this.node.current,"focus",()=>this.onFocus()),ol(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function B_(n,e,t){const{props:i}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=i[o];a&&Tt.postRender(()=>a(e,_l(e)))}class yR extends ls{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:i}=this.node.props;this.unmount=W1(e,(o,a)=>(B_(this.node,a,"Start"),(c,{success:u})=>B_(this.node,c,u?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const ap=new WeakMap,qd=new WeakMap,SR=n=>{const e=ap.get(n.target);e&&e(n)},MR=n=>{n.forEach(SR)};function ER({root:n,...e}){const t=n||document;qd.has(t)||qd.set(t,{});const i=qd.get(t),o=JSON.stringify(e);return i[o]||(i[o]=new IntersectionObserver(MR,{root:n,...e})),i[o]}function TR(n,e,t){const i=ER(e);return ap.set(n,t),i.observe(n),()=>{ap.delete(n),i.unobserve(n)}}const wR={some:0,all:1};class AR extends ls{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var d;(d=this.stopObserver)==null||d.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:wR[o]},u=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,a&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:g,onViewportLeave:m}=this.node.getProps(),_=p?g:m;_&&_(h)};this.stopObserver=TR(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(CR(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function CR({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const RR={inView:{Feature:AR},tap:{Feature:yR},focus:{Feature:xR},hover:{Feature:_R}},bR={layout:{ProjectionNode:CS,MeasureLayout:VS}},PR={...QC,...RR,...vR,...bR},Un=$C(PR,qC);function Cu(n){return typeof window>"u"?!1:n?Dy():mm()}const LR=50,V_=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),DR=()=>({time:0,x:V_(),y:V_()}),NR={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function z_(n,e,t,i){const o=t[e],{length:a,position:c}=NR[e],u=o.current,d=t.time;o.current=Math.abs(n[`scroll${c}`]),o.scrollLength=n[`scroll${a}`]-n[`client${a}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Ho(0,o.scrollLength,o.current);const h=i-d;o.velocity=h>LR?0:im(o.current-u,h)}function IR(n,e,t){z_(n,"x",e,t),z_(n,"y",e,t),e.time=t}function UR(n,e){const t={x:0,y:0};let i=n;for(;i&&i!==e;)if(Qa(i))t.x+=i.offsetLeft,t.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const o=i.getBoundingClientRect();i=i.parentElement;const a=i.getBoundingClientRect();t.x+=o.left-a.left,t.y+=o.top-a.top}else if(i instanceof SVGGraphicsElement){const{x:o,y:a}=i.getBBox();t.x+=o,t.y+=a;let c=null,u=i.parentNode;for(;!c;)u.tagName==="svg"&&(c=u),u=i.parentNode;i=c}else break;return t}const lp={start:0,center:.5,end:1};function H_(n,e,t=0){let i=0;if(n in lp&&(n=lp[n]),typeof n=="string"){const o=parseFloat(n);n.endsWith("px")?i=o:n.endsWith("%")?n=o/100:n.endsWith("vw")?i=o/100*document.documentElement.clientWidth:n.endsWith("vh")?i=o/100*document.documentElement.clientHeight:n=o}return typeof n=="number"&&(i=e*n),t+i}const FR=[0,0];function OR(n,e,t,i){let o=Array.isArray(n)?n:FR,a=0,c=0;return typeof n=="number"?o=[n,n]:typeof n=="string"&&(n=n.trim(),n.includes(" ")?o=n.split(" "):o=[n,lp[n]?n:"0"]),a=H_(o[0],t,i),c=H_(o[1],e),a-c}const ja={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},kR={x:0,y:0};function BR(n){return"getBBox"in n&&n.tagName!=="svg"?n.getBBox():{width:n.clientWidth,height:n.clientHeight}}function VR(n,e,t){const{offset:i=ja.All}=t,{target:o=n,axis:a="y"}=t,c=a==="y"?"height":"width",u=o!==n?UR(o,n):kR,d=o===n?{width:n.scrollWidth,height:n.scrollHeight}:BR(o),h={width:n.clientWidth,height:n.clientHeight};e[a].offset.length=0;let p=!e[a].interpolate;const g=i.length;for(let m=0;m<g;m++){const _=OR(i[m],h[c],d[c],u[a]);!p&&_!==e[a].interpolatorOffsets[m]&&(p=!0),e[a].offset[m]=_}p&&(e[a].interpolate=fm(e[a].offset,Cy(i),{clamp:!1}),e[a].interpolatorOffsets=[...e[a].offset]),e[a].progress=Xi(0,1,e[a].interpolate(e[a].current))}function zR(n,e=n,t){if(t.x.targetOffset=0,t.y.targetOffset=0,e!==n){let i=e;for(;i&&i!==n;)t.x.targetOffset+=i.offsetLeft,t.y.targetOffset+=i.offsetTop,i=i.offsetParent}t.x.targetLength=e===n?e.scrollWidth:e.clientWidth,t.y.targetLength=e===n?e.scrollHeight:e.clientHeight,t.x.containerLength=n.clientWidth,t.y.containerLength=n.clientHeight}function HR(n,e,t,i={}){return{measure:o=>{zR(n,i.target,t),IR(n,t,o),(i.offset||i.target)&&VR(n,t,i)},notify:()=>e(t)}}const _o=new WeakMap,G_=new WeakMap,Kd=new WeakMap,W_=new WeakMap,Dc=new WeakMap,X_=n=>n===document.scrollingElement?window:n;function zS(n,{container:e=document.scrollingElement,trackContentSize:t=!1,...i}={}){if(!e)return ii;let o=Kd.get(e);o||(o=new Set,Kd.set(e,o));const a=DR(),c=HR(e,n,a,i);if(o.add(c),!_o.has(e)){const d=()=>{for(const m of o)m.measure(Mn.timestamp);Tt.preUpdate(h)},h=()=>{for(const m of o)m.notify()},p=()=>Tt.read(d);_o.set(e,p);const g=X_(e);window.addEventListener("resize",p),e!==document.documentElement&&G_.set(e,tp(e,p)),g.addEventListener("scroll",p),p()}if(t&&!Dc.has(e)){const d=_o.get(e),h={width:e.scrollWidth,height:e.scrollHeight};W_.set(e,h);const p=()=>{const m=e.scrollWidth,_=e.scrollHeight;(h.width!==m||h.height!==_)&&(d(),h.width=m,h.height=_)},g=Tt.read(p,!0);Dc.set(e,g)}const u=_o.get(e);return Tt.read(u,!1,!0),()=>{var g;Ti(u);const d=Kd.get(e);if(!d||(d.delete(c),d.size))return;const h=_o.get(e);_o.delete(e),h&&(X_(e).removeEventListener("scroll",h),(g=G_.get(e))==null||g(),window.removeEventListener("resize",h));const p=Dc.get(e);p&&(Ti(p),Dc.delete(e)),W_.delete(e)}}const GR=[[ja.Enter,"entry"],[ja.Exit,"exit"],[ja.Any,"cover"],[ja.All,"contain"]],j_={start:0,end:1};function WR(n){const e=n.trim().split(/\s+/);if(e.length!==2)return;const t=j_[e[0]],i=j_[e[1]];if(!(t===void 0||i===void 0))return[t,i]}function XR(n){if(n.length!==2)return;const e=[];for(const t of n)if(Array.isArray(t))e.push(t);else if(typeof t=="string"){const i=WR(t);if(!i)return;e.push(i)}else return;return e}function jR(n,e){const t=XR(n);if(!t)return!1;for(let i=0;i<2;i++){const o=t[i],a=e[i];if(o[0]!==a[0]||o[1]!==a[1])return!1}return!0}function Pm(n){if(!n)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[e,t]of GR)if(jR(n,e))return{rangeStart:`${t} 0%`,rangeEnd:`${t} 100%`}}const Y_=new Map;function $_(n){const e={value:0},t=zS(i=>{e.value=i[n.axis].progress*100},n);return{currentTime:e,cancel:t}}function HS({source:n,container:e,...t}){const{axis:i}=t;n&&(e=n);let o=Y_.get(e);o||(o=new Map,Y_.set(e,o));const a=t.target??"self";let c=o.get(a);c||(c={},o.set(a,c));const u=i+(t.offset??[]).join(",");return c[u]||(t.target&&Cu(t.target)?Pm(t.offset)?c[u]=new ViewTimeline({subject:t.target,axis:i}):c[u]=$_({container:e,...t}):Cu()?c[u]=new ScrollTimeline({source:e,axis:i}):c[u]=$_({container:e,...t})),c[u]}function YR(n,e){const t=HS(e),i=e.target?Pm(e.offset):void 0,o=e.target?Cu(e.target)&&!!i:Cu();return n.attachTimeline({timeline:o?t:void 0,...i&&o&&{rangeStart:i.rangeStart,rangeEnd:i.rangeEnd},observe:a=>(a.pause(),nS(c=>{a.time=a.iterationDuration*c},t))})}function $R(n){return n&&(n.target||n.offset)}function qR(n){return n.length===2}function KR(n,e){return qR(n)||$R(e)?zS(t=>{n(t[e.axis].progress,t)},e):nS(n,HS(e))}function GS(n,{axis:e="y",container:t=document.scrollingElement,...i}={}){if(!t)return ii;const o={axis:e,container:t,...i};return typeof n=="function"?KR(n,o):YR(n,o)}const ZR=()=>({scrollX:zi(0),scrollY:zi(0),scrollXProgress:zi(0),scrollYProgress:zi(0)}),ko=n=>n?!n.current:!1;function q_(n,e,t,i){return{factory:o=>{let a;const c=()=>{if(ko(t)||ko(i)){Wo.read(c);return}a=GS(o,{...e,axis:n,container:(t==null?void 0:t.current)||void 0,target:(i==null?void 0:i.current)||void 0})};return Wo.read(c),()=>{Zy(c),a==null||a()}},times:[0,1],keyframes:[0,1],ease:o=>o,duration:1}}function JR(n,e){return typeof window>"u"?!1:n?Dy()&&!!Pm(e):mm()}function Xu({container:n,target:e,...t}={}){const i=ss(ZR);JR(e,t.offset)&&(i.scrollXProgress.accelerate=q_("x",t,n,e),i.scrollYProgress.accelerate=q_("y",t,n,e));const o=_e.useRef(null),a=_e.useRef(!1),c=_e.useCallback(()=>(o.current=GS((u,{x:d,y:h})=>{i.scrollX.set(d.current),i.scrollXProgress.set(d.progress),i.scrollY.set(h.current),i.scrollYProgress.set(h.progress)},{...t,container:(n==null?void 0:n.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var u;(u=o.current)==null||u.call(o)}),[n,e,JSON.stringify(t.offset)]);return hl(()=>{if(a.current=!1,ko(n)||ko(e)){a.current=!0;return}else return c()},[c]),_e.useEffect(()=>{if(!a.current)return;let u;const d=()=>{const h=ko(n),p=ko(e);!h&&!p&&(u=c())};return Wo.read(d),()=>{Zy(d),u==null||u()}},[c]),i}function as(n){const e=ss(()=>zi(n)),{isStatic:t}=_e.useContext(vl);if(t){const[,i]=_e.useState(n);_e.useEffect(()=>e.on("change",i),[])}return e}function WS(n,e){const t=as(e()),i=()=>t.set(e());return i(),hl(()=>{const o=()=>Tt.preRender(i,!1,!0),a=n.map(c=>c.on("change",o));return()=>{a.forEach(c=>c()),Ti(i)}}),t}function QR(n){Ja.current=[],n();const e=WS(Ja.current,n);return Ja.current=void 0,e}function Vs(n,e,t,i){if(typeof n=="function")return QR(n);if(t!==void 0&&!Array.isArray(t)&&typeof e!="function")return eb(n,e,t,i);const c=typeof e=="function"?e:eA(e,t,i),u=Array.isArray(n)?K_(n,c):K_([n],([h])=>c(h)),d=Array.isArray(n)?void 0:n.accelerate;return d&&!d.isTransformed&&typeof e!="function"&&Array.isArray(t)&&(i==null?void 0:i.clamp)!==!1&&(u.accelerate={...d,times:e,keyframes:t,isTransformed:!0}),u}function K_(n,e){const t=ss(()=>[]);return WS(n,()=>{t.length=0;const i=n.length;for(let o=0;o<i;o++)t[o]=n[o].get();return e(t)})}function eb(n,e,t,i){const o=ss(()=>Object.keys(t)),a=ss(()=>({}));for(const c of o)a[c]=Vs(n,e,t[c],i);return a}function tb(n,e={}){const{isStatic:t}=_e.useContext(vl),i=()=>mn(n)?n.get():n;if(t)return Vs(i);const o=as(i());return _e.useInsertionEffect(()=>tA(o,n,e),[o,JSON.stringify(e)]),o}function zs(n,e={}){return tb(n,{type:"spring",...e})}function lr(){!wm.current&&rS();const[n]=_e.useState(Mu.current);return n}function nb({character:n,index:e,length:t,progress:i,reduceMotion:o}){const a=Math.max(0,e/t-.18),c=Math.min(1,e/t+.18),u=Vs(i,[a,c],[.46,1]);return C.jsx(Un.span,{className:"animated-character",style:{opacity:o?1:u},children:n===" "?" ":n})}function ib({text:n}){const e=_e.useRef(null),t=_e.useMemo(()=>Array.from(n),[n]),i=lr(),{scrollYProgress:o}=Xu({target:e,offset:["start 0.82","end 0.3"]});return C.jsx("p",{ref:e,className:"animated-text","aria-label":n,children:t.map((a,c)=>C.jsx(nb,{character:a,index:c,length:t.length,progress:o,reduceMotion:i},`${a}-${c}`))})}function Fn({children:n,className:e,delay:t=0,duration:i=.7,x:o=0,y:a=30}){const c=lr();return C.jsx(Un.div,{className:e,initial:{opacity:0,x:c?0:o,y:c?0:a},whileInView:{opacity:1,x:0,y:0},viewport:{once:!0,margin:"50px",amount:0},transition:{duration:c?.01:i,delay:t,ease:[.25,.1,.25,1]},children:n})}function Ru({children:n,className:e="",variant:t="primary",onMouseMove:i,onMouseLeave:o,style:a,...c}){const u=_e.useRef(null),d=lr(),[h,p]=_e.useState(!1),g=as(0),m=as(0),_=zs(g,{stiffness:360,damping:30,mass:.35}),M=zs(m,{stiffness:360,damping:30,mass:.35});_e.useEffect(()=>{const y=window.matchMedia("(hover: hover) and (pointer: fine)"),P=()=>p(y.matches);return P(),y.addEventListener("change",P),()=>y.removeEventListener("change",P)},[]);const w=y=>{if(!d&&h&&u.current){const P=u.current.getBoundingClientRect(),U=(y.clientX-P.left-P.width/2)/9,R=(y.clientY-P.top-P.height/2)/9;g.set(U),m.set(R)}i==null||i(y)},S=y=>{g.set(0),m.set(0),o==null||o(y)};return C.jsx(Un.a,{ref:u,className:`magnetic-button magnetic-button--${t} ${e}`,onMouseMove:w,onMouseLeave:S,style:{...a,x:_,y:M},whileHover:d?void 0:{scale:1.025},whileTap:d?void 0:{scale:.97},transition:{type:"spring",stiffness:280,damping:18},...c,children:n})}function rb(){return C.jsx("section",{id:"about",className:"about section-dark","aria-labelledby":"about-title",children:C.jsxs("div",{className:"section-shell about__content",children:[C.jsxs(Fn,{children:[C.jsx("p",{className:"eyebrow",children:"01 / About"}),C.jsxs("h2",{id:"about-title",className:"display-title gradient-text",children:["A curious builder",C.jsx("br",{}),"in constant motion."]})]}),C.jsxs("div",{className:"about__body",children:[C.jsx(ib,{text:Dt.about}),C.jsxs(Fn,{delay:.1,children:[C.jsxs("div",{className:"about__facts",children:[C.jsxs("div",{children:[C.jsx(bT,{size:18,"aria-hidden":"true"}),C.jsx("span",{children:Dt.education.degree}),C.jsx("small",{children:Dt.education.period})]}),C.jsxs("div",{children:[C.jsx(LT,{size:18,"aria-hidden":"true"}),C.jsx("span",{children:Dt.education.institution}),C.jsx("small",{children:Dt.education.score})]}),C.jsxs("div",{children:[C.jsx(RT,{size:18,"aria-hidden":"true"}),C.jsx("span",{children:"Focused on clear systems and useful experiences"})]})]}),C.jsx(Ru,{href:"#contact",variant:"secondary",children:"Start a conversation"})]})]})]})})}function Lm({className:n=""}){return C.jsxs("svg",{className:`brand-mark ${n}`,viewBox:"0 0 64 64","aria-hidden":"true",focusable:"false",children:[C.jsx("circle",{cx:"32",cy:"32",r:"22",fill:"none",stroke:"currentColor",strokeWidth:"2"}),C.jsx("path",{d:"M39 20c-2.3-2.1-5-3.1-8.1-3.1-5.6 0-9.4 3-9.4 7.5 0 10.4 18.1 6 18.1 15 0 4.9-4 8-10 8-3.3 0-6.5-1.2-8.7-3.5",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"4"})]})}function sb({onComplete:n}){const e=lr(),[t,i]=_e.useState(0),[o,a]=_e.useState(!1),[c,u]=_e.useState(!0);return _e.useEffect(()=>{const d=sessionStorage.getItem("portfolio-booted")==="true",h=e?120:d?420:1450,p=performance.now();let g=0,m=0;const _=()=>{const M=Math.min(100,Math.max(0,Math.round((performance.now()-p)/h*100)));i(M),M<100?g=requestAnimationFrame(_):(sessionStorage.setItem("portfolio-booted","true"),a(!0),m=window.setTimeout(()=>u(!1),e?20:260))};return g=requestAnimationFrame(_),()=>{cancelAnimationFrame(g),clearTimeout(m)}},[e]),C.jsx(EC,{onExitComplete:n,children:c&&C.jsxs(Un.div,{className:"boot-loader",role:"status","aria-live":"polite","aria-label":`System initialization ${t}% complete`,initial:{opacity:1},exit:{opacity:0,clipPath:"inset(0 0 100% 0)"},transition:{duration:e?.01:.62,ease:[.76,0,.24,1]},children:[C.jsx("div",{className:"boot-loader__grid","aria-hidden":"true"}),C.jsx("div",{className:"boot-loader__architecture","aria-hidden":"true",children:[0,1,2,3,4,5,6].map(d=>C.jsx("span",{style:{"--line-index":d}},d))}),C.jsx("div",{className:"boot-loader__scan","aria-hidden":"true"}),C.jsxs("div",{className:"boot-loader__topline",children:[C.jsx("span",{children:"KEERTHI SRISHANK"}),C.jsx("span",{children:"BUILD / 2026.09"})]}),C.jsxs("div",{className:"boot-loader__center",children:[C.jsx("p",{className:"boot-loader__eyebrow",children:"SYSTEM INITIALIZING"}),C.jsxs("div",{className:"boot-loader__dial",style:{"--progress":`${t*3.6}deg`},children:[C.jsx("span",{className:"boot-loader__core",children:C.jsx(Lm,{})}),C.jsx("strong",{children:String(t).padStart(3,"0")})]}),C.jsx("div",{className:"boot-loader__progress","aria-hidden":"true",children:C.jsx("i",{style:{transform:`scaleX(${t/100})`}})}),C.jsx("p",{className:`boot-loader__status ${o?"is-online":""}`,children:o?"SYSTEM ONLINE":"BOOTING INTERFACE"})]}),C.jsxs("div",{className:"boot-loader__bottomline","aria-hidden":"true",children:[C.jsx("span",{children:"AI / ML"}),C.jsx("span",{children:"SOFTWARE"}),C.jsx("span",{children:"SYSTEMS"})]})]})})}function ob(){return C.jsx("section",{id:"contact",className:"contact section-dark","aria-labelledby":"contact-title",children:C.jsxs("div",{className:"section-shell contact__content",children:[C.jsxs(Fn,{children:[C.jsx("p",{className:"eyebrow",children:"06 / Contact"}),C.jsxs("h2",{id:"contact-title",className:"display-title",children:["Let's build",C.jsx("br",{}),C.jsx("em",{children:"something useful."})]}),C.jsx("p",{className:"contact__message",children:Dt.contactMessage})]}),C.jsxs(Fn,{className:"contact__actions",delay:.12,children:[C.jsxs(Ru,{href:`mailto:${Dt.email}`,children:[C.jsx(PT,{size:17})," Send an email ",C.jsx(Ar,{size:17})]}),C.jsxs("div",{className:"contact__links",children:[C.jsxs("a",{href:Dt.socialLinks.github,target:"_blank",rel:"noreferrer",children:[C.jsx(ku,{size:18})," GitHub ",C.jsx(Ar,{size:15})]}),C.jsxs("a",{href:Dt.socialLinks.linkedin,target:"_blank",rel:"noreferrer",children:[C.jsx(Qp,{size:18})," LinkedIn ",C.jsx(Ar,{size:15})]})]})]}),C.jsxs(Fn,{className:"contact__email",delay:.18,children:[C.jsx("a",{href:`mailto:${Dt.email}`,children:Dt.email}),C.jsx("span",{children:Dt.phone})]})]})})}function ab(){return C.jsx("section",{className:"credentials section-dark","aria-labelledby":"credentials-title",children:C.jsxs("div",{className:"section-shell",children:[C.jsxs(Fn,{className:"section-heading credentials__heading",children:[C.jsx("p",{className:"eyebrow",children:"05 / Credentials"}),C.jsxs("h2",{id:"credentials-title",className:"display-title gradient-text",children:["Proof of",C.jsx("br",{}),"practice."]})]}),C.jsxs("div",{className:"credentials__content",children:[C.jsxs("div",{className:"certification-list",children:[C.jsxs("h3",{children:[C.jsx(AT,{size:20,"aria-hidden":"true"})," Certifications"]}),Dt.certifications.map((n,e)=>{const t="link"in n?n.link:void 0;return C.jsx(Fn,{delay:e*.08,y:20,children:C.jsxs("article",{className:"certificate-row",children:[C.jsxs("span",{children:["0",e+1]}),C.jsxs("div",{children:[C.jsx("h4",{children:n.title}),C.jsxs("p",{children:[n.issuer," · ",n.type]})]}),t?C.jsx("a",{href:t,target:"_blank",rel:"noreferrer","aria-label":`View ${n.title} certificate`,children:C.jsx(Ar,{size:20})}):C.jsx("i",{"aria-hidden":"true"})]})},n.title)})]}),C.jsxs("div",{className:"achievement-block",children:[C.jsxs("h3",{children:[C.jsx(wT,{size:20,"aria-hidden":"true"})," Highlights"]}),C.jsx("div",{className:"achievement-grid",children:Dt.achievements.map((n,e)=>C.jsx(Fn,{delay:e*.08,y:20,children:C.jsxs("article",{children:[C.jsx("strong",{children:n.value}),C.jsx("h4",{children:n.label}),C.jsx("p",{children:n.detail})]})},n.label))})]})]}),C.jsxs(Fn,{className:"course-strip",delay:.1,children:[C.jsx("p",{className:"eyebrow",children:"Core coursework"}),C.jsx("div",{children:Dt.courses.map(n=>C.jsx("span",{children:n},n))})]})]})})}function lb(){const n=_e.useRef(null),e=lr(),{scrollYProgress:t}=Xu({target:n,offset:["start 80%","end 42%"]}),i=Vs(t,[0,1],[0,1]);return C.jsxs("div",{ref:n,className:"experience__timeline",children:[C.jsx("span",{className:"experience__timeline-base","aria-hidden":"true"}),C.jsx(Un.span,{className:"experience__timeline-progress",style:{scaleY:e?1:i},"aria-hidden":"true"}),Dt.experience.map((o,a)=>C.jsx(Fn,{y:28,delay:a*.08,children:C.jsxs("article",{className:"timeline-card",children:[C.jsx("span",{className:"timeline-card__node","aria-hidden":"true"}),C.jsxs("div",{className:"timeline-card__topline",children:[C.jsx(CT,{size:18,"aria-hidden":"true"}),C.jsx("span",{children:o.period})]}),C.jsx("h3",{children:o.role}),C.jsx("p",{className:"timeline-card__company",children:o.company}),C.jsx("ul",{children:o.highlights.map(c=>C.jsx("li",{children:c},c))}),C.jsx("div",{className:"tag-list tag-list--dark",children:o.technologies.map(c=>C.jsx("span",{children:c},c))})]})},o.role))]})}function cb(){return C.jsx("section",{id:"experience",className:"experience section-dark","aria-labelledby":"experience-title",children:C.jsxs("div",{className:"section-shell",children:[C.jsxs(Fn,{className:"section-heading",children:[C.jsx("p",{className:"eyebrow",children:"04 / Experience"}),C.jsxs("h2",{id:"experience-title",className:"display-title",children:["In the",C.jsx("br",{}),"real world."]})]}),C.jsxs("div",{className:"experience__grid",children:[C.jsx(lb,{}),C.jsx(Fn,{delay:.12,y:28,children:C.jsxs("aside",{className:"responsibility-card",children:[C.jsx("div",{className:"responsibility-card__icon",children:C.jsx(NT,{size:20})}),C.jsx("p",{className:"eyebrow",children:"Beyond the code"}),C.jsx("h3",{children:"Community & coordination"}),C.jsx("ul",{children:Dt.responsibilities.map(n=>C.jsx("li",{children:n},n))}),C.jsxs("a",{href:"#contact",children:["Connect with me ",C.jsx(Ar,{size:16})]})]})})]})]})})}function ub(){return C.jsx("footer",{className:"footer",children:C.jsxs("div",{className:"section-shell footer__inner",children:[C.jsxs("div",{className:"footer__identity",children:[C.jsxs("p",{children:["© 2026 ",Dt.name]}),C.jsx("p",{className:"footer__story",children:"Designed & built from a resume-led story."})]}),C.jsxs("div",{className:"footer__utility",children:[C.jsx("p",{children:"All rights reserved."}),C.jsxs("nav",{className:"footer__links","aria-label":"Footer navigation",children:[C.jsxs("a",{href:Dt.socialLinks.github,target:"_blank",rel:"noreferrer",children:[C.jsx(ku,{size:14})," GitHub"]}),C.jsxs("a",{href:Dt.socialLinks.linkedin,target:"_blank",rel:"noreferrer",children:[C.jsx(Qp,{size:14})," LinkedIn"]}),C.jsxs("a",{href:"#top","aria-label":"Back to top",children:["Back to top ",C.jsx(TT,{size:15})]})]})]})]})})}function fb(){return C.jsxs("section",{id:"top",className:"hero","aria-labelledby":"hero-title",children:[C.jsxs("div",{className:"hero__content",children:[C.jsx(Un.p,{className:"eyebrow hero__eyebrow",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.08},children:Dt.headline}),C.jsxs(Un.h1,{id:"hero-title",className:"hero__title",initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.9,delay:.15,ease:[.25,.1,.25,1]},children:[C.jsx("span",{children:"Hi, I'm"}),C.jsxs("span",{className:"gradient-text",children:[Dt.firstName,"."]})]}),C.jsxs(Un.div,{className:"hero__intro",initial:{opacity:0,y:22},animate:{opacity:1,y:0},transition:{duration:.7,delay:.35,ease:[.25,.1,.25,1]},children:[C.jsx("p",{children:Dt.heroStatement}),C.jsx(ET,{"aria-hidden":"true",size:24,strokeWidth:1.5})]}),C.jsxs(Un.div,{className:"hero__actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.5,ease:[.25,.1,.25,1]},children:[C.jsxs(Ru,{href:"#projects",children:["View projects ",C.jsx(Ar,{size:16})]}),C.jsxs(Ru,{href:"#contact",variant:"secondary",children:["Contact me ",C.jsx(Ar,{size:16})]})]})]}),C.jsxs("div",{className:"hero__footer",children:[C.jsxs("div",{className:"hero__meta",children:[C.jsxs("p",{children:["Based in ",Dt.location]}),C.jsxs("p",{className:"hero__availability",children:[C.jsx("span",{"aria-hidden":"true"})," ",Dt.availability]})]}),C.jsxs("div",{className:"hero__socials","aria-label":"Professional links",children:[C.jsx("a",{href:Dt.socialLinks.github,target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:C.jsx(ku,{size:18})}),C.jsx("a",{href:Dt.socialLinks.linkedin,target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:C.jsx(Qp,{size:18})})]}),C.jsxs("p",{className:"hero__scroll-cue",children:[C.jsx("span",{})," Scroll to explore"]})]})]})}const Z_=["Python","Java","JavaScript","ReactJS","NodeJS","MongoDB","SQL","TensorFlow","PyTorch","Scikit-learn","WebRTC","Socket.io"];function J_({reverse:n=!1}){const e=[...Z_,...Z_];return C.jsx("div",{className:`tech-track ${n?"tech-track--reverse":""}`,"aria-hidden":"true",children:C.jsx("div",{className:"tech-track__inner",children:e.map((t,i)=>C.jsxs("span",{children:[C.jsx("i",{})," ",t]},`${t}-${i}`))})})}function db(){return C.jsxs("section",{className:"marquee-section","aria-label":`${Dt.name}'s technology stack`,children:[C.jsx(J_,{}),C.jsx(J_,{reverse:!0})]})}const Zd=[{label:"About",href:"#about"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Experience",href:"#experience"},{label:"Contact",href:"#contact"}];function hb(){const[n,e]=_e.useState(!1),[t,i]=_e.useState(),o=()=>e(!1);return _e.useEffect(()=>{const a=Zd.map(u=>document.querySelector(u.href)).filter(u=>u instanceof HTMLElement),c=new IntersectionObserver(u=>{const d=u.filter(h=>h.isIntersecting).sort((h,p)=>p.intersectionRatio-h.intersectionRatio)[0];d&&i(`#${d.target.id}`)},{rootMargin:"-35% 0px -52% 0px",threshold:[0,.1,.4]});return a.forEach(u=>c.observe(u)),()=>c.disconnect()},[]),C.jsxs(Un.header,{className:"site-nav",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.7,ease:[.25,.1,.25,1]},children:[C.jsx("a",{className:"site-nav__brand",href:"#top","aria-label":`${Dt.name} home`,children:C.jsx(Lm,{})}),C.jsx("nav",{className:"site-nav__links","aria-label":"Primary navigation",children:Zd.map(a=>C.jsx("a",{href:a.href,"aria-current":t===a.href?"page":void 0,children:a.label},a.href))}),C.jsxs("a",{className:"site-nav__contact",href:"#contact",children:["Let's talk ",C.jsx("span",{"aria-hidden":"true",children:"↗"})]}),C.jsxs("button",{className:"site-nav__menu-button",type:"button","aria-expanded":n,"aria-controls":"mobile-navigation",onClick:()=>e(a=>!a),children:[C.jsx("span",{className:"sr-only",children:n?"Close menu":"Open menu"}),n?C.jsx(IT,{size:21}):C.jsx(DT,{size:21})]}),C.jsx("div",{id:"mobile-navigation",className:`site-nav__mobile ${n?"is-open":""}`,"aria-hidden":!n,children:C.jsx("nav",{"aria-label":"Mobile navigation",children:Zd.map((a,c)=>C.jsxs("a",{href:a.href,"aria-current":t===a.href?"page":void 0,onClick:o,style:{transitionDelay:`${c*45}ms`},children:[a.label,C.jsx("span",{"aria-hidden":"true",children:"↘"})]},a.href))})})]})}function pb({project:n}){const e=_e.useRef(null),t=lr(),i=as(0),o=as(0),a=zs(Vs(o,[-.5,.5],[4.5,-4.5]),{stiffness:140,damping:22}),c=zs(Vs(i,[-.5,.5],[-5.5,5.5]),{stiffness:140,damping:22}),u=d=>{if(t||d.pointerType!=="mouse"||!e.current)return;const h=e.current.getBoundingClientRect();i.set((d.clientX-h.left)/h.width-.5),o.set((d.clientY-h.top)/h.height-.5)};return C.jsxs(Un.div,{ref:e,className:`project-visual project-visual--${n.visual}`,"data-cursor-active":!0,onPointerMove:u,onPointerLeave:()=>{i.set(0),o.set(0)},style:{rotateX:a,rotateY:c,transformPerspective:820},"aria-hidden":"true",children:[C.jsx("div",{className:"project-visual__grid"}),C.jsx("div",{className:"project-visual__glow"}),n.visual==="genesis"&&C.jsxs(C.Fragment,{children:[C.jsxs("svg",{className:"visual-network",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[C.jsx("path",{d:"M 18 67 Q 38 35 52 50 T 86 29"}),C.jsx("path",{d:"M 13 31 Q 42 71 55 50 T 89 74"}),C.jsx("path",{d:"M 31 17 Q 50 40 52 50 T 72 90"}),C.jsx("circle",{cx:"18",cy:"67",r:"2"}),C.jsx("circle",{cx:"52",cy:"50",r:"2.8"}),C.jsx("circle",{cx:"86",cy:"29",r:"1.7"}),C.jsx("circle",{cx:"89",cy:"74",r:"1.7"}),C.jsx("circle",{cx:"31",cy:"17",r:"1.5"}),C.jsx("circle",{className:"visual-packet",cx:"18",cy:"67",r:"1.1"})]}),C.jsx("span",{className:"visual-orbit visual-orbit--large"}),C.jsx("span",{className:"visual-orbit visual-orbit--small"}),C.jsx("span",{className:"visual-core"}),C.jsx("span",{className:"visual-label",children:"LEARN / ADAPT / GROW"})]}),n.visual==="intellmeet"&&C.jsxs(C.Fragment,{children:[C.jsxs("svg",{className:"visual-network visual-network--meeting",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[C.jsx("path",{d:"M 29 34 Q 51 50 70 69"}),C.jsx("path",{d:"M 29 34 Q 55 21 76 25"}),C.jsx("path",{d:"M 76 25 Q 79 48 70 69"}),C.jsx("circle",{className:"visual-packet visual-packet--one",cx:"29",cy:"34",r:"1.1"}),C.jsx("circle",{className:"visual-packet visual-packet--two",cx:"76",cy:"25",r:"1.1"})]}),C.jsx("span",{className:"visual-meeting visual-meeting--one"}),C.jsx("span",{className:"visual-meeting visual-meeting--two"}),C.jsx("span",{className:"visual-meeting visual-meeting--three"}),C.jsx("span",{className:"visual-connection"}),C.jsx("span",{className:"visual-label",children:"SPEAK / ALIGN / ACT"})]}),n.visual==="igris"&&C.jsxs(C.Fragment,{children:[C.jsx("span",{className:"visual-listening-grid"}),C.jsxs("span",{className:"visual-spectrum",children:[C.jsx("i",{}),C.jsx("i",{}),C.jsx("i",{}),C.jsx("i",{}),C.jsx("i",{}),C.jsx("i",{}),C.jsx("i",{})]}),C.jsx("span",{className:"visual-wave visual-wave--one"}),C.jsx("span",{className:"visual-wave visual-wave--two"}),C.jsx("span",{className:"visual-wave visual-wave--three"}),C.jsx("span",{className:"visual-mic"}),C.jsx("span",{className:"visual-label",children:"LISTENING..."})]}),n.visual==="kartx"&&C.jsxs(C.Fragment,{children:[C.jsxs("span",{className:"visual-speed-lines",children:[C.jsx("i",{}),C.jsx("i",{}),C.jsx("i",{}),C.jsx("i",{})]}),C.jsxs("span",{className:"visual-hud",children:["LAP / 01 ",C.jsx("b",{children:"172"})]}),C.jsx("span",{className:"visual-track visual-track--one"}),C.jsx("span",{className:"visual-track visual-track--two"}),C.jsx("span",{className:"visual-kart"}),C.jsx("span",{className:"visual-label",children:"APEX / DRIFT / GO"})]}),n.visual==="royal"&&C.jsxs(C.Fragment,{children:[C.jsxs("span",{className:"visual-ui-card visual-ui-card--one",children:[C.jsx("i",{}),C.jsx("i",{}),C.jsx("i",{})]}),C.jsxs("span",{className:"visual-ui-card visual-ui-card--two",children:[C.jsx("i",{}),C.jsx("i",{})]}),C.jsx("span",{className:"visual-plate"}),C.jsx("span",{className:"visual-cloche"}),C.jsx("span",{className:"visual-steam visual-steam--one"}),C.jsx("span",{className:"visual-steam visual-steam--two"}),C.jsx("span",{className:"visual-label",children:"ORDER / ENJOY"})]})]})}function mb({project:n,index:e,total:t}){const i=_e.useRef(null),o=lr(),{scrollYProgress:a}=Xu({target:i,offset:["start end","start start"]}),c=1-(t-1-e)*.028,u=Vs(a,[0,1],[1,c]);return C.jsx("article",{ref:i,className:"project-card-wrap",style:{"--stack-index":e},children:C.jsxs(Un.div,{className:"project-card",style:{scale:o?1:u},children:[C.jsxs("header",{className:"project-card__header",children:[C.jsxs("div",{className:"project-card__identification",children:[C.jsxs("span",{className:"project-card__number",children:["0",e+1]}),C.jsxs("div",{children:[C.jsx("p",{className:"project-card__category",children:n.category}),C.jsx("h3",{children:n.name})]})]}),C.jsxs("div",{className:"project-card__links",children:[n.github&&C.jsxs("a",{href:n.github,target:"_blank",rel:"noreferrer","aria-label":`View ${n.name} on GitHub`,children:[C.jsx(ku,{size:17})," ",C.jsx("span",{children:"GitHub"})]}),C.jsx("span",{className:"project-card__date",children:n.period})]})]}),C.jsxs("div",{className:"project-card__content",children:[C.jsxs("div",{className:"project-card__copy",children:[C.jsx("p",{children:n.description}),C.jsx("p",{className:"project-card__micro-label",children:"Key features"}),C.jsx("ul",{children:n.details.map(d=>C.jsx("li",{children:d},d))}),C.jsx("p",{className:"project-card__micro-label",children:"Technologies"}),C.jsx("div",{className:"tag-list",children:n.tags.map(d=>C.jsx("span",{children:d},d))}),n.github&&C.jsxs("a",{className:"project-card__text-link",href:n.github,target:"_blank",rel:"noreferrer",children:["Explore repository ",C.jsx(Ar,{size:16})]})]}),C.jsx(pb,{project:n})]})]})})}function gb(){return C.jsx("section",{id:"projects",className:"projects section-dark","aria-labelledby":"projects-title",children:C.jsxs("div",{className:"section-shell",children:[C.jsxs(Fn,{className:"section-heading projects__heading",children:[C.jsx("p",{className:"eyebrow",children:"03 / Selected work"}),C.jsxs("h2",{id:"projects-title",className:"display-title gradient-text",children:["Things I've",C.jsx("br",{}),"brought to life."]}),C.jsx("p",{className:"section-heading__note",children:"Five project explorations across AI, real-time collaboration, speech interaction, gaming, and the web."})]}),C.jsx("div",{className:"projects__stack",children:Dt.projects.map((n,e)=>C.jsx(mb,{project:n,index:e,total:Dt.projects.length},n.name))})]})})}const XS=[{id:"systems",label:"SOFTWARE / AI / ML",x:50,y:50,accent:!0},{id:"python",label:"Python",x:18,y:22},{id:"react",label:"ReactJS",x:80,y:20},{id:"java",label:"Java",x:16,y:74},{id:"node",label:"NodeJS",x:81,y:76},{id:"ml",label:"Machine Learning",x:43,y:13},{id:"data",label:"MongoDB / SQL",x:52,y:88},{id:"tensor",label:"TensorFlow",x:88,y:48}],Q_=[["systems","python"],["systems","react"],["systems","java"],["systems","node"],["systems","ml"],["systems","data"],["systems","tensor"],["python","ml"],["react","node"],["node","data"],["ml","tensor"],["java","data"]],Jd=Object.fromEntries(XS.map(n=>[n.id,n]));function vb(){const[n,e]=_e.useState("systems"),t=lr();return C.jsxs("div",{className:"skill-network","aria-label":"Interactive technology network",children:[C.jsxs("div",{className:"skill-network__caption",children:[C.jsx("span",{children:"TECHNOLOGY MAP"}),C.jsx("span",{children:"HOVER / FOCUS TO TRACE"})]}),C.jsxs("div",{className:"skill-network__stage",children:[C.jsx("svg",{className:"skill-network__paths",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:Q_.map(([i,o],a)=>{const c=Jd[i],u=Jd[o],d=n===i||n===o,h=(c.x+u.x)/2+(a%2===0?3:-3),p=(c.y+u.y)/2+(a%3===0?-5:3),g=`M ${c.x} ${c.y} Q ${h} ${p} ${u.x} ${u.y}`;return C.jsxs("g",{className:d?"is-active":"",children:[C.jsx("path",{d:g}),!t&&d&&C.jsx(Un.circle,{r:"0.7",animate:{cx:[c.x,h,u.x],cy:[c.y,p,u.y],opacity:[0,1,0]},transition:{duration:1.45,delay:a*.05,repeat:1/0,ease:"linear"}})]},`${i}-${o}`)})}),XS.map((i,o)=>{const a=i.id===n||Q_.some(([c,u])=>c===n&&u===i.id||u===n&&c===i.id);return C.jsxs("button",{type:"button",className:`skill-network__node ${i.accent?"skill-network__node--core":""} ${a?"is-connected":""}`,style:{left:`${i.x}%`,top:`${i.y}%`},onPointerEnter:()=>e(i.id),onFocus:()=>e(i.id),onClick:()=>e(i.id),"aria-pressed":n===i.id,children:[C.jsx(Un.i,{animate:t?void 0:{scale:i.accent?[1,1.11,1]:[1,1.2,1]},transition:{duration:i.accent?3:3.8+o*.14,repeat:1/0,ease:"easeInOut"}}),C.jsx("span",{children:i.label})]},i.id)})]}),C.jsxs("p",{className:"skill-network__readout",children:[Jd[n].label," ",C.jsx("b",{children:"/ ACTIVE"})]})]})}function _b(){return C.jsx("section",{id:"skills",className:"skills section-dark","aria-labelledby":"skills-title",children:C.jsxs("div",{className:"section-shell",children:[C.jsxs(Fn,{className:"section-heading",children:[C.jsx("p",{className:"eyebrow",children:"02 / What I do"}),C.jsxs("h2",{id:"skills-title",className:"display-title",children:["Build, learn,",C.jsx("br",{}),"iterate."]}),C.jsx("p",{className:"section-heading__note",children:"A blend of engineering fundamentals, product-minded web development, and AI/ML exploration."})]}),C.jsx(Fn,{delay:.08,y:18,children:C.jsx(vb,{})}),C.jsx("div",{className:"skill-list",children:Dt.skills.map((n,e)=>C.jsx(Fn,{delay:e*.07,y:24,children:C.jsxs("article",{className:"skill-row",children:[C.jsx("span",{className:"skill-row__number",children:n.number}),C.jsxs("div",{className:"skill-row__copy",children:[C.jsxs("div",{className:"skill-row__title",children:[C.jsx("h3",{children:n.title}),C.jsx(Ar,{size:21,"aria-hidden":"true"})]}),C.jsx("p",{children:n.description}),C.jsx("div",{className:"tag-list tag-list--dark",children:n.technologies.map(t=>C.jsx("span",{children:t},t))})]})]})},n.number))})]})})}function xb(){const n=lr(),[e,t]=_e.useState(!1),[i,o]=_e.useState(!1),a=as(-100),c=as(-100),u=zs(a,{stiffness:540,damping:38,mass:.18}),d=zs(c,{stiffness:540,damping:38,mass:.18});return _e.useEffect(()=>{const h=window.matchMedia("(min-width: 701px) and (hover: hover) and (pointer: fine)"),p=()=>t(h.matches&&!n);return p(),h.addEventListener("change",p),()=>h.removeEventListener("change",p)},[n]),_e.useEffect(()=>{if(!e)return;const h=g=>{a.set(g.clientX),c.set(g.clientY)},p=g=>{var m;o(!!((m=g.target)!=null&&m.closest("a, button, [data-cursor-active]")))};return window.addEventListener("pointermove",h,{passive:!0}),window.addEventListener("pointerover",p,{passive:!0}),()=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerover",p)}},[e,a,c]),e?C.jsxs(Un.div,{className:`cursor-system ${i?"is-active":""}`,style:{x:u,y:d},"aria-hidden":"true",children:[C.jsx("span",{className:"cursor-system__dot"}),C.jsx("span",{className:"cursor-system__ring"})]}):null}function yb(){const{scrollYProgress:n}=Xu(),e=zs(n,{stiffness:130,damping:28,mass:.22});return C.jsx(Un.div,{className:"scroll-progress",style:{scaleX:e},"aria-hidden":"true"})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dm="186",Sb=0,ex=1,Mb=2,fu=1,Eb=2,Ya=3,Hs=0,ri=1,Tr=2,Cr=0,nl=1,bu=2,tx=3,nx=4,Tb=5,Io=100,wb=101,Ab=102,Cb=103,Rb=104,bb=200,Pb=201,Lb=202,Db=203,jS=204,YS=205,Nb=206,Ib=207,Ub=208,Fb=209,Ob=210,kb=211,Bb=212,Vb=213,zb=214,cp=0,up=1,fp=2,al=3,dp=4,hp=5,pp=6,mp=7,$S=0,Hb=1,Gb=2,rr=0,qS=1,KS=2,ZS=3,JS=4,QS=5,eM=6,tM=7,nM=300,Gs=301,Xo=302,Qd=303,eh=304,ju=306,gp=1e3,wr=1001,vp=1002,An=1003,Wb=1004,Nc=1005,On=1006,th=1007,Fs=1008,di=1009,iM=1010,rM=1011,ll=1012,Nm=1013,sr=1014,tr=1015,or=1016,Im=1017,Um=1018,cl=1020,sM=35902,oM=35899,aM=1021,lM=1022,Hi=1023,Pr=1026,Os=1027,cM=1028,Fm=1029,Ws=1030,Om=1031,km=1033,du=33776,hu=33777,pu=33778,mu=33779,_p=35840,xp=35841,yp=35842,Sp=35843,Mp=36196,Ep=37492,Tp=37496,wp=37488,Ap=37489,Pu=37490,Cp=37491,Rp=37808,bp=37809,Pp=37810,Lp=37811,Dp=37812,Np=37813,Ip=37814,Up=37815,Fp=37816,Op=37817,kp=37818,Bp=37819,Vp=37820,zp=37821,Hp=36492,Gp=36494,Wp=36495,Xp=36283,jp=36284,Lu=36285,Yp=36286,Xb=3200,ix=0,jb=1,is="",ti="srgb",Du="srgb-linear",Nu="linear",Ot="srgb",nh=7680,Yb=519,$b=512,qb=513,Kb=514,Bm=515,Zb=516,Jb=517,Vm=518,Qb=519,eP=35044,rx="300 es",nr=2e3,ul=2001;function tP(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nP(){const n=fl("canvas");return n.style.display="block",n}const sx={};function ox(...n){const e="THREE."+n.shift();console.log(e,...n)}function uM(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ot(...n){n=uM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Lt(...n){n=uM(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Vo(...n){const e=n.join(" ");e in sx||(sx[e]=!0,ot(...n))}function iP(n,e,t){return new Promise(function(i,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const rP={[cp]:up,[fp]:pp,[dp]:mp,[al]:hp,[up]:cp,[pp]:fp,[mp]:dp,[hp]:al};class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=Math.PI/180,$p=180/Math.PI;function xl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function sP(n,e){return(n%e+e)%e}function rh(n,e,t){return(1-t)*n+t*e}function Oa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ym=class Ym{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ym.prototype.isVector2=!0;let gt=Ym;class Zo{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let d=i[o+0],h=i[o+1],p=i[o+2],g=i[o+3],m=a[c+0],_=a[c+1],M=a[c+2],w=a[c+3];if(g!==w||d!==m||h!==_||p!==M){let S=d*m+h*_+p*M+g*w;S<0&&(m=-m,_=-_,M=-M,w=-w,S=-S);let y=1-u;if(S<.9995){const P=Math.acos(S),U=Math.sin(P);y=Math.sin(y*P)/U,u=Math.sin(u*P)/U,d=d*y+m*u,h=h*y+_*u,p=p*y+M*u,g=g*y+w*u}else{d=d*y+m*u,h=h*y+_*u,p=p*y+M*u,g=g*y+w*u;const P=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=P,h*=P,p*=P,g*=P}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],d=i[o+1],h=i[o+2],p=i[o+3],g=a[c],m=a[c+1],_=a[c+2],M=a[c+3];return e[t]=u*M+p*g+d*_-h*m,e[t+1]=d*M+p*m+h*g-u*_,e[t+2]=h*M+p*_+u*m-d*g,e[t+3]=p*M-u*g-d*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(o/2),g=u(a/2),m=d(i/2),_=d(o/2),M=d(a/2);switch(c){case"XYZ":this._x=m*p*g+h*_*M,this._y=h*_*g-m*p*M,this._z=h*p*M+m*_*g,this._w=h*p*g-m*_*M;break;case"YXZ":this._x=m*p*g+h*_*M,this._y=h*_*g-m*p*M,this._z=h*p*M-m*_*g,this._w=h*p*g+m*_*M;break;case"ZXY":this._x=m*p*g-h*_*M,this._y=h*_*g+m*p*M,this._z=h*p*M+m*_*g,this._w=h*p*g-m*_*M;break;case"ZYX":this._x=m*p*g-h*_*M,this._y=h*_*g+m*p*M,this._z=h*p*M-m*_*g,this._w=h*p*g+m*_*M;break;case"YZX":this._x=m*p*g+h*_*M,this._y=h*_*g+m*p*M,this._z=h*p*M-m*_*g,this._w=h*p*g-m*_*M;break;case"XZY":this._x=m*p*g-h*_*M,this._y=h*_*g-m*p*M,this._z=h*p*M+m*_*g,this._w=h*p*g+m*_*M;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],g=t[10],m=i+u+g;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(p-d)*_,this._y=(a-h)*_,this._z=(c-o)*_}else if(i>u&&i>g){const _=2*Math.sqrt(1+i-u-g);this._w=(p-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(a+h)/_}else if(u>g){const _=2*Math.sqrt(1+u-i-g);this._w=(a-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+p)/_}else{const _=2*Math.sqrt(1+g-i-u);this._w=(c-o)/_,this._x=(a+h)/_,this._y=(d+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+c*u+o*h-a*d,this._y=o*p+c*d+a*u-i*h,this._z=a*p+c*h+i*d-o*u,this._w=c*p-i*u-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,o=-o,a=-a,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+i*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $m=class $m{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ax.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ax.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*o-u*i),p=2*(u*t-a*o),g=2*(a*i-c*t);return this.x=t+d*h+c*g-u*p,this.y=i+d*p+u*h-a*g,this.z=o+d*g+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-a*u,this.y=a*c-i*d,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sh.copy(this).projectOnVector(e),this.sub(sh)}reflect(e){return this.sub(sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$m.prototype.isVector3=!0;let J=$m;const sh=new J,ax=new Zo,qm=class qm{constructor(e,t,i,o,a,c,u,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,h)}set(e,t,i,o,a,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],d=i[6],h=i[1],p=i[4],g=i[7],m=i[2],_=i[5],M=i[8],w=o[0],S=o[3],y=o[6],P=o[1],U=o[4],R=o[7],L=o[2],D=o[5],F=o[8];return a[0]=c*w+u*P+d*L,a[3]=c*S+u*U+d*D,a[6]=c*y+u*R+d*F,a[1]=h*w+p*P+g*L,a[4]=h*S+p*U+g*D,a[7]=h*y+p*R+g*F,a[2]=m*w+_*P+M*L,a[5]=m*S+_*U+M*D,a[8]=m*y+_*R+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-i*a*p+i*u*d+o*a*h-o*c*d}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],g=p*c-u*h,m=u*d-p*a,_=h*a-c*d,M=t*g+i*m+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=g*w,e[1]=(o*h-p*i)*w,e[2]=(u*i-o*c)*w,e[3]=m*w,e[4]=(p*t-o*d)*w,e[5]=(o*a-u*t)*w,e[6]=_*w,e[7]=(i*d-h*t)*w,e[8]=(c*t-i*a)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*c+h*u)+c+e,-o*h,o*d,-o*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return Vo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oh.makeScale(e,t)),this}rotate(e){return Vo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oh.makeRotation(-e)),this}translate(e,t){return Vo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qm.prototype.isMatrix3=!0;let ct=qm;const oh=new ct,lx=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cx=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oP(){const n={enabled:!0,workingColorSpace:Du,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ot&&(o.r=Rr(o.r),o.g=Rr(o.g),o.b=Rr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ot&&(o.r=zo(o.r),o.g=zo(o.g),o.b=zo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===is?Nu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Du]:{primaries:e,whitePoint:i,transfer:Nu,toXYZ:lx,fromXYZ:cx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:i,transfer:Ot,toXYZ:lx,fromXYZ:cx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),n}const Mt=oP();function Rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xo;class aP{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xo===void 0&&(xo=fl("canvas")),xo.width=e.width,xo.height=e.height;const o=xo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=xo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Rr(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rr(t[i]/255)*255):t[i]=Rr(t[i]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lP=0;class zm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lP++}),this.uuid=xl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(ah(o[c].image)):a.push(ah(o[c]))}else a=ah(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function ah(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?aP.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let cP=0;const lh=new J;class Cn extends js{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,i=wr,o=wr,a=On,c=Fs,u=Hi,d=di,h=Cn.DEFAULT_ANISOTROPY,p=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cP++}),this.uuid=xl(),this.name="",this.source=new zm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gp:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case vp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gp:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case vp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=nM;Cn.DEFAULT_ANISOTROPY=1;const Km=class Km{constructor(e=0,t=0,i=0,o=1){this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const d=e.elements,h=d[0],p=d[4],g=d[8],m=d[1],_=d[5],M=d[9],w=d[2],S=d[6],y=d[10];if(Math.abs(p-m)<.01&&Math.abs(g-w)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+w)<.1&&Math.abs(M+S)<.1&&Math.abs(h+_+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(h+1)/2,R=(_+1)/2,L=(y+1)/2,D=(p+m)/4,F=(g+w)/4,E=(M+S)/4;return U>R&&U>L?U<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(U),o=D/i,a=F/i):R>L?R<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),i=D/o,a=E/o):L<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(L),i=F/a,o=E/a),this.set(i,o,a,t),this}let P=Math.sqrt((S-M)*(S-M)+(g-w)*(g-w)+(m-p)*(m-p));return Math.abs(P)<.001&&(P=1),this.x=(S-M)/P,this.y=(g-w)/P,this.z=(m-p)/P,this.w=Math.acos((h+_+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(_t(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Km.prototype.isVector4=!0;let Jt=Km;class uP extends js{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:i.depth},a=new Cn(o),c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new zm(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends uP{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fM extends Cn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fP extends Cn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ou=class Ou{constructor(e,t,i,o,a,c,u,d,h,p,g,m,_,M,w,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,h,p,g,m,_,M,w,S)}set(e,t,i,o,a,c,u,d,h,p,g,m,_,M,w,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=o,y[1]=a,y[5]=c,y[9]=u,y[13]=d,y[2]=h,y[6]=p,y[10]=g,y[14]=m,y[3]=_,y[7]=M,y[11]=w,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ou().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,o=1/yo.setFromMatrixColumn(e,0).length(),a=1/yo.setFromMatrixColumn(e,1).length(),c=1/yo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(o),h=Math.sin(o),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const m=c*p,_=c*g,M=u*p,w=u*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=_+M*h,t[5]=m-w*h,t[9]=-u*d,t[2]=w-m*h,t[6]=M+_*h,t[10]=c*d}else if(e.order==="YXZ"){const m=d*p,_=d*g,M=h*p,w=h*g;t[0]=m+w*u,t[4]=M*u-_,t[8]=c*h,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=_*u-M,t[6]=w+m*u,t[10]=c*d}else if(e.order==="ZXY"){const m=d*p,_=d*g,M=h*p,w=h*g;t[0]=m-w*u,t[4]=-c*g,t[8]=M+_*u,t[1]=_+M*u,t[5]=c*p,t[9]=w-m*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const m=c*p,_=c*g,M=u*p,w=u*g;t[0]=d*p,t[4]=M*h-_,t[8]=m*h+w,t[1]=d*g,t[5]=w*h+m,t[9]=_*h-M,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,_=c*h,M=u*d,w=u*h;t[0]=d*p,t[4]=w-m*g,t[8]=M*g+_,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=_*g+M,t[10]=m-w*g}else if(e.order==="XZY"){const m=c*d,_=c*h,M=u*d,w=u*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=m*g+w,t[5]=c*p,t[9]=_*g-M,t[2]=M*g-_,t[6]=u*p,t[10]=w*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dP,e,hP)}lookAt(e,t,i){const o=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),qr.crossVectors(i,ci),qr.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),qr.crossVectors(i,ci)),qr.normalize(),Ic.crossVectors(ci,qr),o[0]=qr.x,o[4]=Ic.x,o[8]=ci.x,o[1]=qr.y,o[5]=Ic.y,o[9]=ci.y,o[2]=qr.z,o[6]=Ic.z,o[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],d=i[8],h=i[12],p=i[1],g=i[5],m=i[9],_=i[13],M=i[2],w=i[6],S=i[10],y=i[14],P=i[3],U=i[7],R=i[11],L=i[15],D=o[0],F=o[4],E=o[8],N=o[12],B=o[1],V=o[5],Z=o[9],ne=o[13],Y=o[2],Q=o[6],fe=o[10],j=o[14],G=o[3],H=o[7],$=o[11],I=o[15];return a[0]=c*D+u*B+d*Y+h*G,a[4]=c*F+u*V+d*Q+h*H,a[8]=c*E+u*Z+d*fe+h*$,a[12]=c*N+u*ne+d*j+h*I,a[1]=p*D+g*B+m*Y+_*G,a[5]=p*F+g*V+m*Q+_*H,a[9]=p*E+g*Z+m*fe+_*$,a[13]=p*N+g*ne+m*j+_*I,a[2]=M*D+w*B+S*Y+y*G,a[6]=M*F+w*V+S*Q+y*H,a[10]=M*E+w*Z+S*fe+y*$,a[14]=M*N+w*ne+S*j+y*I,a[3]=P*D+U*B+R*Y+L*G,a[7]=P*F+U*V+R*Q+L*H,a[11]=P*E+U*Z+R*fe+L*$,a[15]=P*N+U*ne+R*j+L*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],g=e[6],m=e[10],_=e[14],M=e[3],w=e[7],S=e[11],y=e[15],P=d*_-h*m,U=u*_-h*g,R=u*m-d*g,L=c*_-h*p,D=c*m-d*p,F=c*g-u*p;return t*(w*P-S*U+y*R)-i*(M*P-S*L+y*D)+o*(M*U-w*L+y*F)-a*(M*R-w*D+S*F)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[1],c=e[5],u=e[9],d=e[2],h=e[6],p=e[10];return t*(c*p-u*h)-i*(a*p-u*d)+o*(a*h-c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],g=e[9],m=e[10],_=e[11],M=e[12],w=e[13],S=e[14],y=e[15],P=t*u-i*c,U=t*d-o*c,R=t*h-a*c,L=i*d-o*u,D=i*h-a*u,F=o*h-a*d,E=p*w-g*M,N=p*S-m*M,B=p*y-_*M,V=g*S-m*w,Z=g*y-_*w,ne=m*y-_*S,Y=P*ne-U*Z+R*V+L*B-D*N+F*E;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/Y;return e[0]=(u*ne-d*Z+h*V)*Q,e[1]=(o*Z-i*ne-a*V)*Q,e[2]=(w*F-S*D+y*L)*Q,e[3]=(m*D-g*F-_*L)*Q,e[4]=(d*B-c*ne-h*N)*Q,e[5]=(t*ne-o*B+a*N)*Q,e[6]=(S*R-M*F-y*U)*Q,e[7]=(p*F-m*R+_*U)*Q,e[8]=(c*Z-u*B+h*E)*Q,e[9]=(i*B-t*Z-a*E)*Q,e[10]=(M*D-w*R+y*P)*Q,e[11]=(g*R-p*D-_*P)*Q,e[12]=(u*N-c*V-d*E)*Q,e[13]=(t*V-i*N+o*E)*Q,e[14]=(w*U-M*L-S*P)*Q,e[15]=(p*L-g*U+m*P)*Q,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,d=e.z,h=a*c,p=a*u;return this.set(h*c+i,h*u-o*d,h*d+o*u,0,h*u+o*d,p*u+i,p*d-o*c,0,h*d-o*u,p*d+o*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,h=a+a,p=c+c,g=u+u,m=a*h,_=a*p,M=a*g,w=c*p,S=c*g,y=u*g,P=d*h,U=d*p,R=d*g,L=i.x,D=i.y,F=i.z;return o[0]=(1-(w+y))*L,o[1]=(_+R)*L,o[2]=(M-U)*L,o[3]=0,o[4]=(_-R)*D,o[5]=(1-(m+y))*D,o[6]=(S+P)*D,o[7]=0,o[8]=(M+U)*F,o[9]=(S-P)*F,o[10]=(1-(m+w))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let c=yo.set(o[0],o[1],o[2]).length();const u=yo.set(o[4],o[5],o[6]).length(),d=yo.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Fi.copy(this);const h=1/c,p=1/u,g=1/d;return Fi.elements[0]*=h,Fi.elements[1]*=h,Fi.elements[2]*=h,Fi.elements[4]*=p,Fi.elements[5]*=p,Fi.elements[6]*=p,Fi.elements[8]*=g,Fi.elements[9]*=g,Fi.elements[10]*=g,t.setFromRotationMatrix(Fi),i.x=c,i.y=u,i.z=d,this}makePerspective(e,t,i,o,a,c,u=nr,d=!1){const h=this.elements,p=2*a/(t-e),g=2*a/(i-o),m=(t+e)/(t-e),_=(i+o)/(i-o);let M,w;if(d)M=a/(c-a),w=c*a/(c-a);else if(u===nr)M=-(c+a)/(c-a),w=-2*c*a/(c-a);else if(u===ul)M=-c/(c-a),w=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=nr,d=!1){const h=this.elements,p=2/(t-e),g=2/(i-o),m=-(t+e)/(t-e),_=-(i+o)/(i-o);let M,w;if(d)M=1/(c-a),w=c/(c-a);else if(u===nr)M=-2/(c-a),w=-(c+a)/(c-a);else if(u===ul)M=-1/(c-a),w=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=g,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ou.prototype.isMatrix4=!0;let $t=Ou;const yo=new J,Fi=new $t,dP=new J(0,0,0),hP=new J(1,1,1),qr=new J,Ic=new J,ci=new J,ux=new $t,fx=new Zo;class Xs{constructor(e=0,t=0,i=0,o=Xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],d=o[1],h=o[5],p=o[9],g=o[2],m=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ux.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ux,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fx.setFromEuler(this),this.setFromQuaternion(fx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xs.DEFAULT_ORDER="XYZ";class dM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pP=0;const dx=new J,So=new Zo,_r=new $t,Uc=new J,ka=new J,mP=new J,gP=new Zo,hx=new J(1,0,0),px=new J(0,1,0),mx=new J(0,0,1),gx={type:"added"},vP={type:"removed"},Mo={type:"childadded",child:null},ch={type:"childremoved",child:null};class Xn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pP++}),this.uuid=xl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new J,t=new Xs,i=new Zo,o=new J(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new ct}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return So.setFromAxisAngle(e,t),this.quaternion.multiply(So),this}rotateOnWorldAxis(e,t){return So.setFromAxisAngle(e,t),this.quaternion.premultiply(So),this}rotateX(e){return this.rotateOnAxis(hx,e)}rotateY(e){return this.rotateOnAxis(px,e)}rotateZ(e){return this.rotateOnAxis(mx,e)}translateOnAxis(e,t){return dx.copy(e).applyQuaternion(this.quaternion),this.position.add(dx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hx,e)}translateY(e){return this.translateOnAxis(px,e)}translateZ(e){return this.translateOnAxis(mx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uc.copy(e):Uc.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(ka,Uc,this.up):_r.lookAt(Uc,ka,this.up),this.quaternion.setFromRotationMatrix(_r),o&&(_r.extractRotation(o.matrixWorld),So.setFromRotationMatrix(_r),this.quaternion.premultiply(So.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gx),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vP),ch.child=e,this.dispatchEvent(ch),ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gx),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,mP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,gP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*o,a[13]+=i-a[1]*t-a[5]*i-a[9]*o,a[14]+=o-a[2]*t-a[6]*i-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),g=c(e.shapes),m=c(e.skeletons),_=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=o,i;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Xn.DEFAULT_UP=new J(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $a extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _P={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $a,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $a,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $a,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,i),y=this._getHandJoint(h,w);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],m=p.position.distanceTo(g.position),_=.02,M=.005;h.inputState.pinching&&m>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(_P)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $a;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const hM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kr={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function fh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class At{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=Mt.workingColorSpace){if(e=sP(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=fh(c,a,e+1/3),this.g=fh(c,a,e),this.b=fh(c,a,e-1/3)}return Mt.colorSpaceToWorking(this,o),this}setStyle(e,t=ti){function i(a){a!==void 0&&parseFloat(a)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const i=hM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Mt.workingToColorSpace(In.copy(this),e),Math.round(_t(In.r*255,0,255))*65536+Math.round(_t(In.g*255,0,255))*256+Math.round(_t(In.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(In.copy(this),t);const i=In.r,o=In.g,a=In.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const g=c-u;switch(h=p<=.5?g/(c+u):g/(2-c-u),c){case i:d=(o-a)/g+(o<a?6:0);break;case o:d=(a-i)/g+2;break;case a:d=(i-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=ti){Mt.workingToColorSpace(In.copy(this),e);const t=In.r,i=In.g,o=In.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Kr),this.setHSL(Kr.h+e,Kr.s+t,Kr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kr),e.getHSL(Fc);const i=rh(Kr.h,Fc.h,t),o=rh(Kr.s,Fc.s,t),a=rh(Kr.l,Fc.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new At;At.NAMES=hM;class Hm{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(e),this.density=t}clone(){return new Hm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xP extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xs,this.environmentIntensity=1,this.environmentRotation=new Xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oi=new J,xr=new J,dh=new J,yr=new J,Eo=new J,To=new J,vx=new J,hh=new J,ph=new J,mh=new J,gh=new Jt,vh=new Jt,_h=new Jt;class Vi{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Oi.subVectors(e,t),o.cross(Oi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){Oi.subVectors(o,t),xr.subVectors(i,t),dh.subVectors(e,t);const c=Oi.dot(Oi),u=Oi.dot(xr),d=Oi.dot(dh),h=xr.dot(xr),p=xr.dot(dh),g=c*h-u*u;if(g===0)return a.set(0,0,0),null;const m=1/g,_=(h*d-u*p)*m,M=(c*p-u*d)*m;return a.set(1-_-M,M,_)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,i,o,a,c,u,d){return this.getBarycoord(e,t,i,o,yr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,yr.x),d.addScaledVector(c,yr.y),d.addScaledVector(u,yr.z),d)}static getInterpolatedAttribute(e,t,i,o,a,c){return gh.setScalar(0),vh.setScalar(0),_h.setScalar(0),gh.fromBufferAttribute(e,t),vh.fromBufferAttribute(e,i),_h.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(gh,a.x),c.addScaledVector(vh,a.y),c.addScaledVector(_h,a.z),c}static isFrontFacing(e,t,i,o){return Oi.subVectors(i,t),xr.subVectors(e,t),Oi.cross(xr).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),Oi.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return Vi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;Eo.subVectors(o,i),To.subVectors(a,i),hh.subVectors(e,i);const d=Eo.dot(hh),h=To.dot(hh);if(d<=0&&h<=0)return t.copy(i);ph.subVectors(e,o);const p=Eo.dot(ph),g=To.dot(ph);if(p>=0&&g<=p)return t.copy(o);const m=d*g-p*h;if(m<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(Eo,c);mh.subVectors(e,a);const _=Eo.dot(mh),M=To.dot(mh);if(M>=0&&_<=M)return t.copy(a);const w=_*h-d*M;if(w<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(i).addScaledVector(To,u);const S=p*M-_*g;if(S<=0&&g-p>=0&&_-M>=0)return vx.subVectors(a,o),u=(g-p)/(g-p+(_-M)),t.copy(o).addScaledVector(vx,u);const y=1/(S+w+m);return c=w*y,u=m*y,t.copy(i).addScaledVector(Eo,c).addScaledVector(To,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yl{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,ki):ki.fromBufferAttribute(a,c),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oc.copy(i.boundingBox)),Oc.applyMatrix4(e.matrixWorld),this.union(Oc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),kc.subVectors(this.max,Ba),wo.subVectors(e.a,Ba),Ao.subVectors(e.b,Ba),Co.subVectors(e.c,Ba),Zr.subVectors(Ao,wo),Jr.subVectors(Co,Ao),Cs.subVectors(wo,Co);let t=[0,-Zr.z,Zr.y,0,-Jr.z,Jr.y,0,-Cs.z,Cs.y,Zr.z,0,-Zr.x,Jr.z,0,-Jr.x,Cs.z,0,-Cs.x,-Zr.y,Zr.x,0,-Jr.y,Jr.x,0,-Cs.y,Cs.x,0];return!xh(t,wo,Ao,Co,kc)||(t=[1,0,0,0,1,0,0,0,1],!xh(t,wo,Ao,Co,kc))?!1:(Bc.crossVectors(Zr,Jr),t=[Bc.x,Bc.y,Bc.z],xh(t,wo,Ao,Co,kc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sr=[new J,new J,new J,new J,new J,new J,new J,new J],ki=new J,Oc=new yl,wo=new J,Ao=new J,Co=new J,Zr=new J,Jr=new J,Cs=new J,Ba=new J,kc=new J,Bc=new J,Rs=new J;function xh(n,e,t,i,o){for(let a=0,c=n.length-3;a<=c;a+=3){Rs.fromArray(n,a);const u=o.x*Math.abs(Rs.x)+o.y*Math.abs(Rs.y)+o.z*Math.abs(Rs.z),d=e.dot(Rs),h=t.dot(Rs),p=i.dot(Rs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const ln=new J,Vc=new gt;let yP=0;class br extends js{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yP++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eP,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vc.fromBufferAttribute(this,t),Vc.applyMatrix3(e),this.setXY(t,Vc.x,Vc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Oa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oa(t,this.array)),t}setX(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oa(t,this.array)),t}setY(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oa(t,this.array)),t}setW(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array),o=ei(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array),o=ei(o,this.array),a=ei(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class pM extends br{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mM extends br{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kn extends br{constructor(e,t,i){super(new Float32Array(e),t,i)}}const SP=new yl,Va=new J,yh=new J;class Yu{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):SP.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const t=Va.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Va,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(yh)),this.expandByPoint(Va.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let MP=0;const Mi=new $t,Sh=new Xn,Ro=new J,ui=new yl,za=new yl,Sn=new J;class jn extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MP++}),this.uuid=xl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tP(e)?mM:pM)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ct().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,i){return Mi.makeTranslation(e,t,i),this.applyMatrix4(Mi),this}scale(e,t,i){return Mi.makeScale(e,t,i),this.applyMatrix4(Mi),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new kn(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];ui.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];za.setFromBufferAttribute(u),this.morphTargetsRelative?(Sn.addVectors(ui.min,za.min),ui.expandByPoint(Sn),Sn.addVectors(ui.max,za.max),ui.expandByPoint(Sn)):(ui.expandByPoint(za.min),ui.expandByPoint(za.max))}ui.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)Sn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(Sn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)Sn.fromBufferAttribute(u,h),d&&(Ro.fromBufferAttribute(e,h),Sn.add(Ro)),o=Math.max(o,i.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new br(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const u=[],d=[];for(let E=0;E<i.count;E++)u[E]=new J,d[E]=new J;const h=new J,p=new J,g=new J,m=new gt,_=new gt,M=new gt,w=new J,S=new J;function y(E,N,B){h.fromBufferAttribute(i,E),p.fromBufferAttribute(i,N),g.fromBufferAttribute(i,B),m.fromBufferAttribute(a,E),_.fromBufferAttribute(a,N),M.fromBufferAttribute(a,B),p.sub(h),g.sub(h),_.sub(m),M.sub(m);const V=1/(_.x*M.y-M.x*_.y);isFinite(V)&&(w.copy(p).multiplyScalar(M.y).addScaledVector(g,-_.y).multiplyScalar(V),S.copy(g).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(V),u[E].add(w),u[N].add(w),u[B].add(w),d[E].add(S),d[N].add(S),d[B].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let E=0,N=P.length;E<N;++E){const B=P[E],V=B.start,Z=B.count;for(let ne=V,Y=V+Z;ne<Y;ne+=3)y(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const U=new J,R=new J,L=new J,D=new J;function F(E){L.fromBufferAttribute(o,E),D.copy(L);const N=u[E];U.copy(N),U.sub(L.multiplyScalar(L.dot(N))).normalize(),R.crossVectors(D,N);const V=R.dot(d[E])<0?-1:1;c.setXYZW(E,U.x,U.y,U.z,V)}for(let E=0,N=P.length;E<N;++E){const B=P[E],V=B.start,Z=B.count;for(let ne=V,Y=V+Z;ne<Y;ne+=3)F(e.getX(ne+0)),F(e.getX(ne+1)),F(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new br(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,_=i.count;m<_;m++)i.setXYZ(m,0,0,0);const o=new J,a=new J,c=new J,u=new J,d=new J,h=new J,p=new J,g=new J;if(e)for(let m=0,_=e.count;m<_;m+=3){const M=e.getX(m+0),w=e.getX(m+1),S=e.getX(m+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,w),c.fromBufferAttribute(t,S),p.subVectors(c,a),g.subVectors(o,a),p.cross(g),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),u.add(p),d.add(p),h.add(p),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(w,d.x,d.y,d.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)o.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,a),g.subVectors(o,a),p.cross(g),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,g=u.normalized,m=new h.constructor(d.length*p);let _=0,M=0;for(let w=0,S=d.length;w<S;w++){u.isInterleavedBufferAttribute?_=d[w]*u.data.stride+u.offset:_=d[w]*p;for(let y=0;y<p;y++)m[M++]=h[_++]}return new br(m,p,g)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,i=this.index.array,o=this.attributes;for(const u in o){const d=o[u],h=e(d,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let p=0,g=h.length;p<g;p++){const m=h[p],_=e(m,i);d.push(_)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,m=h.length;g<m;g++){const _=h[g];p.push(_.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],g=a[h];for(let m=0,_=g.length;m<_;m++)p.push(g[m].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mh=new J,EP=new J,TP=new ct;class ns{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Mh.subVectors(i,t).cross(EP.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const o=e.delta(Mh),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||TP.getNormalMatrix(e),o=this.coplanarPoint(Mh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let wP=0;class Sl extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wP++}),this.uuid=xl(),this.name="",this.type="Material",this.blending=nl,this.side=Hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jS,this.blendDst=YS,this.blendEquation=Io,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nh,this.stencilZFail=nh,this.stencilZPass=nh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector2&&i&&i.isVector2||o&&o.isEuler&&i&&i.isEuler||o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ns().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new gt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mr=new J,Eh=new J,zc=new J,Hc=new J;class gM{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Eh.copy(e).add(t).multiplyScalar(.5),zc.copy(t).sub(e).normalize(),Hc.copy(this.origin).sub(Eh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(zc),u=Hc.dot(this.direction),d=-Hc.dot(zc),h=Hc.lengthSq(),p=Math.abs(1-c*c);let g,m,_,M;if(p>0)if(g=c*d-u,m=c*u-d,M=a*p,g>=0)if(m>=-M)if(m<=M){const w=1/p;g*=w,m*=w,_=g*(g+c*m+2*u)+m*(c*g+m+2*d)+h}else m=a,g=Math.max(0,-(c*m+u)),_=-g*g+m*(m+2*d)+h;else m=-a,g=Math.max(0,-(c*m+u)),_=-g*g+m*(m+2*d)+h;else m<=-M?(g=Math.max(0,-(-c*a+u)),m=g>0?-a:Math.min(Math.max(-a,-d),a),_=-g*g+m*(m+2*d)+h):m<=M?(g=0,m=Math.min(Math.max(-a,-d),a),_=m*(m+2*d)+h):(g=Math.max(0,-(c*a+u)),m=g>0?a:Math.min(Math.max(-a,-d),a),_=-g*g+m*(m+2*d)+h);else m=c>0?-a:a,g=Math.max(0,-(c*m+u)),_=-g*g+m*(m+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Eh).addScaledVector(zc,m),_}intersectSphere(e,t){if(e.radius<0)return null;Mr.subVectors(e.center,this.origin);const i=Mr.dot(this.direction),o=Mr.dot(Mr)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return h>=0?(i=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(i=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),p>=0?(a=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),g>=0?(u=(e.min.z-m.z)*g,d=(e.max.z-m.z)*g):(u=(e.max.z-m.z)*g,d=(e.min.z-m.z)*g),i>d||u>o)||((u>i||i!==i)&&(i=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,i,o,a){const c=this.origin,u=this.direction,d=u.x,h=u.y,p=u.z,g=e.x-c.x,m=e.y-c.y,_=e.z-c.z,M=t.x-c.x,w=t.y-c.y,S=t.z-c.z,y=i.x-c.x,P=i.y-c.y,U=i.z-c.z,R=Math.abs(d),L=Math.abs(h),D=Math.abs(p);let F,E,N,B,V,Z,ne,Y,Q,fe,j,G;if(R>=L&&R>=D?(N=d,Z=g,Q=M,G=y,d>=0?(F=h,E=p,B=m,V=_,ne=w,Y=S,fe=P,j=U):(F=p,E=h,B=_,V=m,ne=S,Y=w,fe=U,j=P)):L>=D?(N=h,Z=m,Q=w,G=P,h>=0?(F=p,E=d,B=_,V=g,ne=S,Y=M,fe=U,j=y):(F=d,E=p,B=g,V=_,ne=M,Y=S,fe=y,j=U)):(N=p,Z=_,Q=S,G=U,p>=0?(F=d,E=h,B=g,V=m,ne=M,Y=w,fe=y,j=P):(F=h,E=d,B=m,V=g,ne=w,Y=M,fe=P,j=y)),N===0)return null;const H=F/N,$=E/N,I=1/N,ie=B-H*Z,Se=V-$*Z,Be=ne-H*Q,ze=Y-$*Q,Ge=fe-H*G,oe=j-$*G,de=Ge*ze-oe*Be,Te=ie*oe-Se*Ge,tt=Be*Se-ze*ie;if(o){if(de<0||Te<0||tt<0)return null}else if((de<0||Te<0||tt<0)&&(de>0||Te>0||tt>0))return null;const Oe=de+Te+tt;if(Oe===0)return null;const ft=I*(de*Z+Te*Q+tt*G);return(Oe>0?ft<0:ft>0)?null:this.at(ft/Oe,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ns extends Sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xs,this.combine=$S,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _x=new $t,bs=new gM,Gc=new Yu,xx=new J,Wc=new J,Xc=new J,jc=new J,Th=new J,Yc=new J,yx=new J,$c=new J;class ni extends Xn{constructor(e=new jn,t=new Ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Yc.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=u[d],g=a[d];p!==0&&(Th.fromBufferAttribute(g,e),c?Yc.addScaledVector(Th,p):Yc.addScaledVector(Th.sub(t),p))}t.add(Yc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gc.copy(i.boundingSphere),Gc.applyMatrix4(a),bs.copy(e.ray).recast(e.near),!(Gc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Gc,xx)===null||bs.origin.distanceToSquared(xx)>(e.far-e.near)**2))&&(_x.copy(a).invert(),bs.copy(e.ray).applyMatrix4(_x),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,m=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,w=m.length;M<w;M++){const S=m[M],y=c[S.materialIndex],P=Math.max(S.start,_.start),U=Math.min(u.count,Math.min(S.start+S.count,_.start+_.count));for(let R=P,L=U;R<L;R+=3){const D=u.getX(R),F=u.getX(R+1),E=u.getX(R+2);o=qc(this,y,e,i,h,p,g,D,F,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),w=Math.min(u.count,_.start+_.count);for(let S=M,y=w;S<y;S+=3){const P=u.getX(S),U=u.getX(S+1),R=u.getX(S+2);o=qc(this,c,e,i,h,p,g,P,U,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,w=m.length;M<w;M++){const S=m[M],y=c[S.materialIndex],P=Math.max(S.start,_.start),U=Math.min(d.count,Math.min(S.start+S.count,_.start+_.count));for(let R=P,L=U;R<L;R+=3){const D=R,F=R+1,E=R+2;o=qc(this,y,e,i,h,p,g,D,F,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),w=Math.min(d.count,_.start+_.count);for(let S=M,y=w;S<y;S+=3){const P=S,U=S+1,R=S+2;o=qc(this,c,e,i,h,p,g,P,U,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function AP(n,e,t,i,o,a,c,u){let d;if(e.side===ri?d=i.intersectTriangle(c,a,o,!0,u):d=i.intersectTriangle(o,a,c,e.side===Hs,u),d===null)return null;$c.copy(u),$c.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo($c);return h<t.near||h>t.far?null:{distance:h,point:$c.clone(),object:n}}function qc(n,e,t,i,o,a,c,u,d,h){n.getVertexPosition(u,Wc),n.getVertexPosition(d,Xc),n.getVertexPosition(h,jc);const p=AP(n,e,t,i,Wc,Xc,jc,yx);if(p){const g=new J;Vi.getBarycoord(yx,Wc,Xc,jc,g),o&&(p.uv=Vi.getInterpolatedAttribute(o,u,d,h,g,new gt)),a&&(p.uv1=Vi.getInterpolatedAttribute(a,u,d,h,g,new gt)),c&&(p.normal=Vi.getInterpolatedAttribute(c,u,d,h,g,new J),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:d,c:h,normal:new J,materialIndex:0};Vi.getNormal(Wc,Xc,jc,m.normal),p.face=m,p.barycoord=g}return p}class CP extends Cn{constructor(e=null,t=1,i=1,o,a,c,u,d,h=An,p=An,g,m){super(null,c,u,d,h,p,o,a,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ps=new Yu,RP=new gt(.5,.5),Kc=new J;class Gm{constructor(e=new ns,t=new ns,i=new ns,o=new ns,a=new ns,c=new ns){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=nr,i=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],h=a[3],p=a[4],g=a[5],m=a[6],_=a[7],M=a[8],w=a[9],S=a[10],y=a[11],P=a[12],U=a[13],R=a[14],L=a[15];if(o[0].setComponents(h-c,_-p,y-M,L-P).normalize(),o[1].setComponents(h+c,_+p,y+M,L+P).normalize(),o[2].setComponents(h+u,_+g,y+w,L+U).normalize(),o[3].setComponents(h-u,_-g,y-w,L-U).normalize(),i)o[4].setComponents(d,m,S,R).normalize(),o[5].setComponents(h-d,_-m,y-S,L-R).normalize();else if(o[4].setComponents(h-d,_-m,y-S,L-R).normalize(),t===nr)o[5].setComponents(h+d,_+m,y+S,L+R).normalize();else if(t===ul)o[5].setComponents(d,m,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);const t=RP.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Kc.x=o.normal.x>0?e.max.x:e.min.x,Kc.y=o.normal.y>0?e.max.y:e.min.y,Kc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qp extends Sl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Iu=new J,Uu=new J,Sx=new $t,Ha=new gM,Zc=new Yu,wh=new J,Mx=new J;class vM extends Xn{constructor(e=new jn,t=new qp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)Iu.fromBufferAttribute(t,o-1),Uu.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=Iu.distanceTo(Uu);e.setAttribute("lineDistance",new kn(i,1))}else ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zc.copy(i.boundingSphere),Zc.applyMatrix4(o),Zc.radius+=a,e.ray.intersectsSphere(Zc)===!1)return;Sx.copy(o).invert(),Ha.copy(e.ray).applyMatrix4(Sx);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){const _=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let w=_,S=M-1;w<S;w+=h){const y=p.getX(w),P=p.getX(w+1),U=Jc(this,e,Ha,d,y,P,w);U&&t.push(U)}if(this.isLineLoop){const w=p.getX(M-1),S=p.getX(_),y=Jc(this,e,Ha,d,w,S,M-1);y&&t.push(y)}}else{const _=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let w=_,S=M-1;w<S;w+=h){const y=Jc(this,e,Ha,d,w,w+1,w);y&&t.push(y)}if(this.isLineLoop){const w=Jc(this,e,Ha,d,M-1,_,M-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Jc(n,e,t,i,o,a,c){const u=n.geometry.attributes.position;if(Iu.fromBufferAttribute(u,o),Uu.fromBufferAttribute(u,a),t.distanceSqToSegment(Iu,Uu,wh,Mx)>i)return;wh.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(wh);if(!(h<e.near||h>e.far))return{distance:h,point:Mx.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}class bP extends vM{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _M extends Cn{constructor(e=[],t=Gs,i,o,a,c,u,d,h,p){super(e,t,i,o,a,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dl extends Cn{constructor(e,t,i=sr,o,a,c,u=An,d=An,h,p=Pr,g=1){if(p!==Pr&&p!==Os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,o,a,c,u,d,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class PP extends dl{constructor(e,t=sr,i=Gs,o,a,c=An,u=An,d,h=Pr){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,i,o,a,c,u,d,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xM extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ml extends jn{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],p=[],g=[];let m=0,_=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,o,c,2),M("x","z","y",1,-1,e,i,-t,o,c,3),M("x","y","z",1,-1,e,t,i,o,a,4),M("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(d),this.setAttribute("position",new kn(h,3)),this.setAttribute("normal",new kn(p,3)),this.setAttribute("uv",new kn(g,2));function M(w,S,y,P,U,R,L,D,F,E,N){const B=R/F,V=L/E,Z=R/2,ne=L/2,Y=D/2,Q=F+1,fe=E+1;let j=0,G=0;const H=new J;for(let $=0;$<fe;$++){const I=$*V-ne;for(let ie=0;ie<Q;ie++){const Se=ie*B-Z;H[w]=Se*P,H[S]=I*U,H[y]=Y,h.push(H.x,H.y,H.z),H[w]=0,H[S]=0,H[y]=D>0?1:-1,p.push(H.x,H.y,H.z),g.push(ie/F),g.push(1-$/E),j+=1}}for(let $=0;$<E;$++)for(let I=0;I<F;I++){const ie=m+I+Q*$,Se=m+I+Q*($+1),Be=m+(I+1)+Q*($+1),ze=m+(I+1)+Q*$;d.push(ie,Se,ze),d.push(Se,Be,ze),G+=6}u.addGroup(_,G,N),_+=G,m+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wm extends jn{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const a=[],c=[],u=[],d=[],h=new J,p=new gt;c.push(0,0,0),u.push(0,0,1),d.push(.5,.5);for(let g=0,m=3;g<=t;g++,m+=3){const _=i+g/t*o;h.x=e*Math.cos(_),h.y=e*Math.sin(_),c.push(h.x,h.y,h.z),u.push(0,0,1),p.x=(c[m]/e+1)/2,p.y=(c[m+1]/e+1)/2,d.push(p.x,p.y)}for(let g=1;g<=t;g++)a.push(g,g+1,0);this.setIndex(a),this.setAttribute("position",new kn(c,3)),this.setAttribute("normal",new kn(u,3)),this.setAttribute("uv",new kn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wm(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yM{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ot("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,o=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),a+=i.distanceTo(o),t.push(a),o=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let o=0;const a=i.length;let c;t?c=t:c=e*i[a-1];let u=0,d=a-1,h;for(;u<=d;)if(o=Math.floor(u+(d-u)/2),h=i[o]-c,h<0)u=o+1;else if(h>0)d=o-1;else{d=o;break}if(o=d,i[o]===c)return o/(a-1);const p=i[o],m=i[o+1]-p,_=(c-p)/m;return(o+_)/(a-1)}getTangent(e,t){let o=e-1e-4,a=e+1e-4;o<0&&(o=0),a>1&&(a=1);const c=this.getPoint(o),u=this.getPoint(a),d=t||(c.isVector2?new gt:new J);return d.copy(u).sub(c).normalize(),d}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new J,o=[],a=[],c=[],u=new J,d=new $t;for(let _=0;_<=e;_++){const M=_/e;o[_]=this.getTangentAt(M,new J)}a[0]=new J,c[0]=new J;let h=Number.MAX_VALUE;const p=Math.abs(o[0].x),g=Math.abs(o[0].y),m=Math.abs(o[0].z);p<=h&&(h=p,i.set(1,0,0)),g<=h&&(h=g,i.set(0,1,0)),m<=h&&i.set(0,0,1),u.crossVectors(o[0],i).normalize(),a[0].crossVectors(o[0],u),c[0].crossVectors(o[0],a[0]);for(let _=1;_<=e;_++){if(a[_]=a[_-1].clone(),c[_]=c[_-1].clone(),u.crossVectors(o[_-1],o[_]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(_t(o[_-1].dot(o[_]),-1,1));a[_].applyMatrix4(d.makeRotationAxis(u,M))}c[_].crossVectors(o[_],a[_])}if(t===!0){let _=Math.acos(_t(a[0].dot(a[e]),-1,1));_/=e,o[0].dot(u.crossVectors(a[0],a[e]))>0&&(_=-_);for(let M=1;M<=e;M++)a[M].applyMatrix4(d.makeRotationAxis(o[M],_*M)),c[M].crossVectors(o[M],a[M])}return{tangents:o,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class LP extends yM{constructor(e=0,t=0,i=1,o=1,a=0,c=Math.PI*2,u=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=o,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=u,this.aRotation=d}getPoint(e,t=new gt){const i=t,o=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=o;for(;a>o;)a-=o;a<Number.EPSILON&&(c?a=0:a=o),this.aClockwise===!0&&!c&&(a===o?a=-o:a=a-o);const u=this.aStartAngle+e*a;let d=this.aX+this.xRadius*Math.cos(u),h=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const p=Math.cos(this.aRotation),g=Math.sin(this.aRotation),m=d-this.aX,_=h-this.aY;d=m*p-_*g+this.aX,h=m*g+_*p+this.aY}return i.set(d,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}function Xm(){let n=0,e=0,t=0,i=0;function o(a,c,u,d){n=a,e=u,t=-3*a+3*c-2*u-d,i=2*a-2*c+u+d}return{initCatmullRom:function(a,c,u,d,h){o(c,u,h*(u-a),h*(d-c))},initNonuniformCatmullRom:function(a,c,u,d,h,p,g){let m=(c-a)/h-(u-a)/(h+p)+(u-c)/p,_=(u-c)/p-(d-c)/(p+g)+(d-u)/g;m*=p,_*=p,o(c,u,m,_)},calc:function(a){const c=a*a,u=c*a;return n+e*a+t*c+i*u}}}const Ex=new J,Tx=new J,Ah=new Xm,Ch=new Xm,Rh=new Xm;class DP extends yM{constructor(e=[],t=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=o}getPoint(e,t=new J){const i=t,o=this.points,a=o.length,c=(a-(this.closed?0:1))*e;let u=Math.floor(c),d=c-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/a)+1)*a:d===0&&u===a-1&&(u=a-2,d=1);let h,p;this.closed||u>0?h=o[(u-1)%a]:(Tx.subVectors(o[0],o[1]).add(o[0]),h=Tx);const g=o[u%a],m=o[(u+1)%a];if(this.closed||u+2<a?p=o[(u+2)%a]:(Ex.subVectors(o[a-1],o[a-2]).add(o[a-1]),p=Ex),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(g),_),w=Math.pow(g.distanceToSquared(m),_),S=Math.pow(m.distanceToSquared(p),_);w<1e-4&&(w=1),M<1e-4&&(M=w),S<1e-4&&(S=w),Ah.initNonuniformCatmullRom(h.x,g.x,m.x,p.x,M,w,S),Ch.initNonuniformCatmullRom(h.y,g.y,m.y,p.y,M,w,S),Rh.initNonuniformCatmullRom(h.z,g.z,m.z,p.z,M,w,S)}else this.curveType==="catmullrom"&&(Ah.initCatmullRom(h.x,g.x,m.x,p.x,this.tension),Ch.initCatmullRom(h.y,g.y,m.y,p.y,this.tension),Rh.initCatmullRom(h.z,g.z,m.z,p.z,this.tension));return i.set(Ah.calc(d),Ch.calc(d),Rh.calc(d)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new J().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class jo extends jn{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),d=Math.floor(o),h=u+1,p=d+1,g=e/u,m=t/d,_=[],M=[],w=[],S=[];for(let y=0;y<p;y++){const P=y*m-c;for(let U=0;U<h;U++){const R=U*g-a;M.push(R,-P,0),w.push(0,0,1),S.push(U/u),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let P=0;P<u;P++){const U=P+h*y,R=P+h*(y+1),L=P+1+h*(y+1),D=P+1+h*y;_.push(U,R,D),_.push(R,L,D)}this.setIndex(_),this.setAttribute("position",new kn(M,3)),this.setAttribute("normal",new kn(w,3)),this.setAttribute("uv",new kn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fu extends jn{constructor(e=1,t=32,i=16,o=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(c+u,Math.PI);let h=0;const p=[],g=new J,m=new J,_=[],M=[],w=[],S=[];for(let y=0;y<=i;y++){const P=[],U=y/i,R=c+U*u,L=e*Math.cos(R),D=Math.sqrt(e*e-L*L);let F=0;y===0&&c===0?F=.5/t:y===i&&d===Math.PI&&(F=-.5/t);for(let E=0;E<=t;E++){const N=E/t,B=o+N*a;g.x=-D*Math.cos(B),g.y=L,g.z=D*Math.sin(B),M.push(g.x,g.y,g.z),m.copy(g).normalize(),w.push(m.x,m.y,m.z),S.push(N+F,1-U),P.push(h++)}p.push(P)}for(let y=0;y<i;y++)for(let P=0;P<t;P++){const U=p[y][P+1],R=p[y][P],L=p[y+1][P],D=p[y+1][P+1];(y!==0||c>0)&&_.push(U,R,D),(y!==i-1||d<Math.PI)&&_.push(R,L,D)}this.setIndex(_),this.setAttribute("position",new kn(M,3)),this.setAttribute("normal",new kn(w,3)),this.setAttribute("uv",new kn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Yo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];if(wx(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone();else if(Array.isArray(o))if(wx(o[0])){const a=[];for(let c=0,u=o.length;c<u;c++)a[c]=o[c].clone();e[t][i]=a}else e[t][i]=o.slice();else e[t][i]=o}}return e}function Hn(n){const e={};for(let t=0;t<n.length;t++){const i=Yo(n[t]);for(const o in i)e[o]=i[o]}return e}function wx(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function NP(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function SM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const IP={clone:Yo,merge:Hn};var UP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends Sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UP,this.fragmentShader=FP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=NP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const o=e.uniforms[i];switch(this.uniforms[i]={},o.type){case"t":this.uniforms[i].value=t[o.value]||null;break;case"c":this.uniforms[i].value=new At().setHex(o.value);break;case"v2":this.uniforms[i].value=new gt().fromArray(o.value);break;case"v3":this.uniforms[i].value=new J().fromArray(o.value);break;case"v4":this.uniforms[i].value=new Jt().fromArray(o.value);break;case"m3":this.uniforms[i].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[i].value=new $t().fromArray(o.value);break;default:this.uniforms[i].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class OP extends ar{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kP extends Sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BP extends Sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Ax(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Ax(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Ax(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class VP{constructor(e,t,i){const o=this;let a=!1,c=0,u=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(p){u++,a===!1&&o.onStart!==void 0&&o.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,o.onProgress!==void 0&&o.onProgress(p,c,u),c===u&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,g){return h.push(p,g),this},this.removeHandler=function(p){const g=h.indexOf(p);return g!==-1&&h.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=h.length;g<m;g+=2){const _=h[g],M=h[g+1];if(_.global&&(_.lastIndex=0),_.test(p))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const zP=new VP;class jm{constructor(e){this.manager=e!==void 0?e:zP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,a){i.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}jm.DEFAULT_MATERIAL_NAME="__DEFAULT";const bo=new WeakMap;class HP extends jm{constructor(e){super(e)}load(e,t,i,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=bh.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);else{let g=bo.get(c);g===void 0&&(g=[],bo.set(c,g)),g.push({onLoad:t,onError:o})}return c}const u=fl("img");function d(){p(),t&&t(this);const g=bo.get(this)||[];for(let m=0;m<g.length;m++){const _=g[m];_.onLoad&&_.onLoad(this)}bo.delete(this),a.manager.itemEnd(e)}function h(g){p(),o&&o(g),bh.remove(`image:${e}`);const m=bo.get(this)||[];for(let _=0;_<m.length;_++){const M=m[_];M.onError&&M.onError(g)}bo.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){u.removeEventListener("load",d,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),bh.add(`image:${e}`,u),a.manager.itemStart(e),u.src=e,u}}class GP extends jm{constructor(e){super(e)}load(e,t,i,o){const a=new Cn,c=new HP(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,o),a}}class MM extends Xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ph=new $t,Cx=new J,Rx=new J;class WP{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gm,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Cx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cx),Rx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rx),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,o){Ph.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ph,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,c=o?o.z/a.x:1,u=o?o.w/a.y:1,d=o?o.x/a.x:0,h=o?o.y/a.y:0;e.coordinateSystem===ul||e.reversedDepth?t.set(.5*c,0,0,.5*c+d,0,.5*u,0,.5*u+h,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+d,0,.5*u,0,.5*u+h,0,0,.5,.5,0,0,0,1),t.multiply(Ph)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qc=new J,eu=new Zo,Ki=new J;class EM extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qc,eu,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,eu,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Qc,eu,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qc,eu,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new J,bx=new gt,Px=new gt;class fi extends EM{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$p*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ih*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $p*2*Math.atan(Math.tan(ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,bx,Px),t.subVectors(Px,bx)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ih*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*i/h,o*=c.width/d,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class XP extends WP{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0}}class jP extends MM{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new XP}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class TM extends EM{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class YP extends MM{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Po=-90,Lo=1;class $P extends Xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new fi(Po,Lo,e,t);o.layers=this.layers,this.add(o);const a=new fi(Po,Lo,e,t);a.layers=this.layers,this.add(a);const c=new fi(Po,Lo,e,t);c.layers=this.layers,this.add(c);const u=new fi(Po,Lo,e,t);u.layers=this.layers,this.add(u);const d=new fi(Po,Lo,e,t);d.layers=this.layers,this.add(d);const h=new fi(Po,Lo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,d]=t;for(const h of t)this.remove(h);if(e===nr)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,h,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(i,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,m,_),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class qP extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class KP{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ZP.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function ZP(){this._document.hidden===!1&&this.reset()}const Zm=class Zm{constructor(e,t,i,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=o,this}};Zm.prototype.isMatrix2=!0;let Lx=Zm;function Dx(n,e,t,i){const o=JP(i);switch(t){case aM:return n*e;case cM:return n*e/o.components*o.byteLength;case Fm:return n*e/o.components*o.byteLength;case Ws:return n*e*2/o.components*o.byteLength;case Om:return n*e*2/o.components*o.byteLength;case lM:return n*e*3/o.components*o.byteLength;case Hi:return n*e*4/o.components*o.byteLength;case km:return n*e*4/o.components*o.byteLength;case du:case hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pu:case mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xp:case Sp:return Math.max(n,16)*Math.max(e,8)/4;case _p:case yp:return Math.max(n,8)*Math.max(e,8)/2;case Mp:case Ep:case wp:case Ap:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tp:case Pu:case Cp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Np:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ip:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Up:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Op:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hp:case Gp:case Wp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xp:case jp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lu:case Yp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JP(n){switch(n){case di:case iM:return{byteLength:1,components:1};case ll:case rM:case or:return{byteLength:2,components:1};case Im:case Um:return{byteLength:2,components:4};case sr:case Nm:case tr:return{byteLength:4,components:1};case sM:case oM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dm}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wM(){let n=null,e=!1,t=null,i=null;function o(a,c){i=n.requestAnimationFrame(o),t(a,c)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function QP(n){const e=new WeakMap;function t(u,d){const h=u.array,p=u.usage,g=h.byteLength,m=n.createBuffer();n.bindBuffer(d,m),n.bufferData(d,h,p),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,d,h){const p=d.array,g=d.updateRanges;if(n.bindBuffer(h,u),g.length===0)n.bufferSubData(h,0,p);else{g.sort((_,M)=>_.start-M.start);let m=0;for(let _=1;_<g.length;_++){const M=g[m],w=g[_];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++m,g[m]=w)}g.length=m+1;for(let _=0,M=g.length;_<M;_++){const w=g[_];n.bufferSubData(h,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,d),h.version=u.version}}return{get:o,remove:a,update:c}}var e2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t2=`#ifdef USE_ALPHAHASH
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
#endif`,n2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o2=`#ifdef USE_AOMAP
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
#endif`,a2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l2=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,c2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,h2=`#ifdef USE_IRIDESCENCE
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
#endif`,p2=`#ifdef USE_BUMPMAP
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
#endif`,m2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,y2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,S2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,M2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,E2=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,T2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,w2=`vec3 transformedNormal = objectNormal;
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
#endif`,A2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P2="gl_FragColor = linearToOutputTexel( gl_FragColor );",L2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,N2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,I2=`#ifdef USE_ENVMAP
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
#endif`,U2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z2=`#ifdef USE_GRADIENTMAP
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
}`,H2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X2=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,j2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Y2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,J2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Q2=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nL=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,iL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uL=`#if defined( USE_POINTS_UV )
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
#endif`,fL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gL=`#ifdef USE_MORPHTARGETS
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
#endif`,vL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_L=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ML=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,EL=`#ifdef USE_NORMALMAP
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
#endif`,TL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bL=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,PL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,OL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,kL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,BL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,VL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zL=`#ifdef USE_SKINNING
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
#endif`,HL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GL=`#ifdef USE_SKINNING
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
#endif`,WL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$L=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qL=`#ifdef USE_TRANSMISSION
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
#endif`,KL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t3=`uniform sampler2D t2D;
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
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o3=`#include <common>
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
}`,a3=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,l3=`#define DISTANCE
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
}`,c3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,u3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d3=`uniform float scale;
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
}`,h3=`uniform vec3 diffuse;
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
}`,p3=`#include <common>
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
}`,m3=`uniform vec3 diffuse;
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
}`,g3=`#define LAMBERT
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
}`,v3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,_3=`#define MATCAP
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
}`,x3=`#define MATCAP
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
}`,y3=`#define NORMAL
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
}`,S3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M3=`#define PHONG
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
}`,E3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,T3=`#define STANDARD
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
}`,w3=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,A3=`#define TOON
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
}`,C3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,R3=`uniform float size;
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
}`,b3=`uniform vec3 diffuse;
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
}`,P3=`#include <common>
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
}`,L3=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,D3=`uniform float rotation;
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
}`,N3=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:e2,alphahash_pars_fragment:t2,alphamap_fragment:n2,alphamap_pars_fragment:i2,alphatest_fragment:r2,alphatest_pars_fragment:s2,aomap_fragment:o2,aomap_pars_fragment:a2,batching_pars_vertex:l2,batching_vertex:c2,begin_vertex:u2,beginnormal_vertex:f2,bsdfs:d2,iridescence_fragment:h2,bumpmap_pars_fragment:p2,clipping_planes_fragment:m2,clipping_planes_pars_fragment:g2,clipping_planes_pars_vertex:v2,clipping_planes_vertex:_2,color_fragment:x2,color_pars_fragment:y2,color_pars_vertex:S2,color_vertex:M2,common:E2,cube_uv_reflection_fragment:T2,defaultnormal_vertex:w2,displacementmap_pars_vertex:A2,displacementmap_vertex:C2,emissivemap_fragment:R2,emissivemap_pars_fragment:b2,colorspace_fragment:P2,colorspace_pars_fragment:L2,envmap_fragment:D2,envmap_common_pars_fragment:N2,envmap_pars_fragment:I2,envmap_pars_vertex:U2,envmap_physical_pars_fragment:j2,envmap_vertex:F2,fog_vertex:O2,fog_pars_vertex:k2,fog_fragment:B2,fog_pars_fragment:V2,gradientmap_pars_fragment:z2,lightmap_pars_fragment:H2,lights_lambert_fragment:G2,lights_lambert_pars_fragment:W2,lights_pars_begin:X2,lights_toon_fragment:Y2,lights_toon_pars_fragment:$2,lights_phong_fragment:q2,lights_phong_pars_fragment:K2,lights_physical_fragment:Z2,lights_physical_pars_fragment:J2,lights_fragment_begin:Q2,lights_fragment_maps:eL,lights_fragment_end:tL,lightprobes_pars_fragment:nL,logdepthbuf_fragment:iL,logdepthbuf_pars_fragment:rL,logdepthbuf_pars_vertex:sL,logdepthbuf_vertex:oL,map_fragment:aL,map_pars_fragment:lL,map_particle_fragment:cL,map_particle_pars_fragment:uL,metalnessmap_fragment:fL,metalnessmap_pars_fragment:dL,morphinstance_vertex:hL,morphcolor_vertex:pL,morphnormal_vertex:mL,morphtarget_pars_vertex:gL,morphtarget_vertex:vL,normal_fragment_begin:_L,normal_fragment_maps:xL,normal_pars_fragment:yL,normal_pars_vertex:SL,normal_vertex:ML,normalmap_pars_fragment:EL,clearcoat_normal_fragment_begin:TL,clearcoat_normal_fragment_maps:wL,clearcoat_pars_fragment:AL,iridescence_pars_fragment:CL,opaque_fragment:RL,packing:bL,premultiplied_alpha_fragment:PL,project_vertex:LL,dithering_fragment:DL,dithering_pars_fragment:NL,roughnessmap_fragment:IL,roughnessmap_pars_fragment:UL,shadowmap_pars_fragment:FL,shadowmap_pars_vertex:OL,shadowmap_vertex:kL,shadowmask_pars_fragment:BL,skinbase_vertex:VL,skinning_pars_vertex:zL,skinning_vertex:HL,skinnormal_vertex:GL,specularmap_fragment:WL,specularmap_pars_fragment:XL,tonemapping_fragment:jL,tonemapping_pars_fragment:YL,transmission_fragment:$L,transmission_pars_fragment:qL,uv_pars_fragment:KL,uv_pars_vertex:ZL,uv_vertex:JL,worldpos_vertex:QL,background_vert:e3,background_frag:t3,backgroundCube_vert:n3,backgroundCube_frag:i3,cube_vert:r3,cube_frag:s3,depth_vert:o3,depth_frag:a3,distance_vert:l3,distance_frag:c3,equirect_vert:u3,equirect_frag:f3,linedashed_vert:d3,linedashed_frag:h3,meshbasic_vert:p3,meshbasic_frag:m3,meshlambert_vert:g3,meshlambert_frag:v3,meshmatcap_vert:_3,meshmatcap_frag:x3,meshnormal_vert:y3,meshnormal_frag:S3,meshphong_vert:M3,meshphong_frag:E3,meshphysical_vert:T3,meshphysical_frag:w3,meshtoon_vert:A3,meshtoon_frag:C3,points_vert:R3,points_frag:b3,shadow_vert:P3,shadow_frag:L3,sprite_vert:D3,sprite_frag:N3},Ue={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},er={basic:{uniforms:Hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Hn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Hn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Hn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new At(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Hn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Hn([Ue.points,Ue.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Hn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Hn([Ue.common,Ue.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Hn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Hn([Ue.sprite,Ue.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Hn([Ue.common,Ue.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Hn([Ue.lights,Ue.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};er.physical={uniforms:Hn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const tu={r:0,b:0,g:0},I3=new $t,AM=new ct;AM.set(-1,0,0,0,1,0,0,0,1);function U3(n,e,t,i,o,a){const c=new At(0);let u=o===!0?0:1,d,h,p=null,g=0,m=null;function _(P){let U=P.isScene===!0?P.background:null;if(U&&U.isTexture){const R=P.backgroundBlurriness>0;U=e.get(U,R)}return U}function M(P){let U=!1;const R=_(P);R===null?S(c,u):R&&R.isColor&&(S(R,1),U=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(P,U){const R=_(U);R&&(R.isCubeTexture||R.mapping===ju)?(h===void 0&&(h=new ni(new Ml(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:Yo(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(I3.makeRotationFromEuler(U.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(AM),h.material.toneMapped=Mt.getTransfer(R.colorSpace)!==Ot,(p!==R||g!==R.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,p=R,g=R.version,m=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new ni(new jo(2,2),new ar({name:"BackgroundMaterial",uniforms:Yo(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:Hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,d.material.toneMapped=Mt.getTransfer(R.colorSpace)!==Ot,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||g!==R.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,p=R,g=R.version,m=n.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function S(P,U){P.getRGB(tu,SM(n)),t.buffers.color.setClear(tu.r,tu.g,tu.b,U,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,U=1){c.set(P),u=U,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(P){u=P,S(c,u)},render:M,addToRenderList:w,dispose:y}}function F3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=m(null);let a=o,c=!1;function u(V,Z,ne,Y,Q){let fe=!1;const j=g(V,Y,ne,Z);a!==j&&(a=j,h(a.object)),fe=_(V,Y,ne,Q),fe&&M(V,Y,ne,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,R(V,Z,ne,Y),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function d(){return n.createVertexArray()}function h(V){return n.bindVertexArray(V)}function p(V){return n.deleteVertexArray(V)}function g(V,Z,ne,Y){const Q=Y.wireframe===!0;let fe=i[Z.id];fe===void 0&&(fe={},i[Z.id]=fe);const j=V.isInstancedMesh===!0?V.id:0;let G=fe[j];G===void 0&&(G={},fe[j]=G);let H=G[ne.id];H===void 0&&(H={},G[ne.id]=H);let $=H[Q];return $===void 0&&($=m(d()),H[Q]=$),$}function m(V){const Z=[],ne=[],Y=[];for(let Q=0;Q<t;Q++)Z[Q]=0,ne[Q]=0,Y[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ne,attributeDivisors:Y,object:V,attributes:{},index:null}}function _(V,Z,ne,Y){const Q=a.attributes,fe=Z.attributes;let j=0;const G=ne.getAttributes();for(const H in G)if(G[H].location>=0){const I=Q[H];let ie=fe[H];if(ie===void 0&&(H==="instanceMatrix"&&V.instanceMatrix&&(ie=V.instanceMatrix),H==="instanceColor"&&V.instanceColor&&(ie=V.instanceColor)),I===void 0||I.attribute!==ie||ie&&I.data!==ie.data)return!0;j++}return a.attributesNum!==j||a.index!==Y}function M(V,Z,ne,Y){const Q={},fe=Z.attributes;let j=0;const G=ne.getAttributes();for(const H in G)if(G[H].location>=0){let I=fe[H];I===void 0&&(H==="instanceMatrix"&&V.instanceMatrix&&(I=V.instanceMatrix),H==="instanceColor"&&V.instanceColor&&(I=V.instanceColor));const ie={};ie.attribute=I,I&&I.data&&(ie.data=I.data),Q[H]=ie,j++}a.attributes=Q,a.attributesNum=j,a.index=Y}function w(){const V=a.newAttributes;for(let Z=0,ne=V.length;Z<ne;Z++)V[Z]=0}function S(V){y(V,0)}function y(V,Z){const ne=a.newAttributes,Y=a.enabledAttributes,Q=a.attributeDivisors;ne[V]=1,Y[V]===0&&(n.enableVertexAttribArray(V),Y[V]=1),Q[V]!==Z&&(n.vertexAttribDivisor(V,Z),Q[V]=Z)}function P(){const V=a.newAttributes,Z=a.enabledAttributes;for(let ne=0,Y=Z.length;ne<Y;ne++)Z[ne]!==V[ne]&&(n.disableVertexAttribArray(ne),Z[ne]=0)}function U(V,Z,ne,Y,Q,fe,j){j===!0?n.vertexAttribIPointer(V,Z,ne,Q,fe):n.vertexAttribPointer(V,Z,ne,Y,Q,fe)}function R(V,Z,ne,Y){w();const Q=Y.attributes,fe=ne.getAttributes(),j=Z.defaultAttributeValues;for(const G in fe){const H=fe[G];if(H.location>=0){let $=Q[G];if($===void 0&&(G==="instanceMatrix"&&V.instanceMatrix&&($=V.instanceMatrix),G==="instanceColor"&&V.instanceColor&&($=V.instanceColor)),$!==void 0){const I=$.normalized,ie=$.itemSize,Se=e.get($);if(Se===void 0)continue;const Be=Se.buffer,ze=Se.type,Ge=Se.bytesPerElement,oe=ze===n.INT||ze===n.UNSIGNED_INT||$.gpuType===Nm;if($.isInterleavedBufferAttribute){const de=$.data,Te=de.stride,tt=$.offset;if(de.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)y(H.location+Oe,de.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)S(H.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let Oe=0;Oe<H.locationSize;Oe++)U(H.location+Oe,ie/H.locationSize,ze,I,Te*Ge,(tt+ie/H.locationSize*Oe)*Ge,oe)}else{if($.isInstancedBufferAttribute){for(let de=0;de<H.locationSize;de++)y(H.location+de,$.meshPerAttribute);V.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<H.locationSize;de++)S(H.location+de);n.bindBuffer(n.ARRAY_BUFFER,Be);for(let de=0;de<H.locationSize;de++)U(H.location+de,ie/H.locationSize,ze,I,ie*Ge,ie/H.locationSize*de*Ge,oe)}}else if(j!==void 0){const I=j[G];if(I!==void 0)switch(I.length){case 2:n.vertexAttrib2fv(H.location,I);break;case 3:n.vertexAttrib3fv(H.location,I);break;case 4:n.vertexAttrib4fv(H.location,I);break;default:n.vertexAttrib1fv(H.location,I)}}}}P()}function L(){N();for(const V in i){const Z=i[V];for(const ne in Z){const Y=Z[ne];for(const Q in Y){const fe=Y[Q];for(const j in fe)p(fe[j].object),delete fe[j];delete Y[Q]}}delete i[V]}}function D(V){if(i[V.id]===void 0)return;const Z=i[V.id];for(const ne in Z){const Y=Z[ne];for(const Q in Y){const fe=Y[Q];for(const j in fe)p(fe[j].object),delete fe[j];delete Y[Q]}}delete i[V.id]}function F(V){for(const Z in i){const ne=i[Z];for(const Y in ne){const Q=ne[Y];if(Q[V.id]===void 0)continue;const fe=Q[V.id];for(const j in fe)p(fe[j].object),delete fe[j];delete Q[V.id]}}}function E(V){for(const Z in i){const ne=i[Z],Y=V.isInstancedMesh===!0?V.id:0,Q=ne[Y];if(Q!==void 0){for(const fe in Q){const j=Q[fe];for(const G in j)p(j[G].object),delete j[G];delete Q[fe]}delete ne[Y],Object.keys(ne).length===0&&delete i[Z]}}}function N(){B(),c=!0,a!==o&&(a=o,h(a.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:N,resetDefaultState:B,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:S,disableUnusedAttributes:P}}function O3(n,e,t){let i;function o(d){i=d}function a(d,h){n.drawArrays(i,d,h),t.update(h,i,1)}function c(d,h,p){p!==0&&(n.drawArraysInstanced(i,d,h,p),t.update(h,i,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,p);let m=0;for(let _=0;_<p;_++)m+=h[_];t.update(m,i,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function k3(n,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Hi&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const E=F===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==di&&F!==tr&&!E&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(ot("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),U=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=n.getParameter(n.MAX_SAMPLES),D=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:R,maxSamples:L,samples:D}}function B3(n){const e=this;let t=null,i=0,o=!1,a=!1;const c=new ns,u=new ct,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const _=g.length!==0||m||i!==0||o;return o=m,i=g.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,_){const M=g.clippingPlanes,w=g.clipIntersection,S=g.clipShadows,y=n.get(g);if(!o||M===null||M.length===0||a&&!S)a?p(null):h();else{const P=a?0:i,U=P*4;let R=y.clippingState||null;d.value=R,R=p(M,m,U,_);for(let L=0;L!==U;++L)R[L]=t[L];y.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,m,_,M){const w=g!==null?g.length:0;let S=null;if(w!==0){if(S=d.value,M!==!0||S===null){const y=_+w*4,P=m.matrixWorldInverse;u.getNormalMatrix(P),(S===null||S.length<y)&&(S=new Float32Array(y));for(let U=0,R=_;U!==w;++U,R+=4)c.copy(g[U]).applyMatrix4(P,u),c.normal.toArray(S,R),S[R+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}const Bo=4,V3=6,z3=20,H3=256,Ga=new TM,Nx=new At;let Lh=null,Dh=0,Nh=0,Ih=!1;const G3=new J,Ls=new J;class Ix{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,a={}){const{size:c=256,position:u=G3}=a;Lh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,o,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ox(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lh,Dh,Nh),this._renderer.xr.enabled=Ih,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lh=this._renderer.getRenderTarget(),Dh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:or,format:Hi,colorSpace:Du,depthBuffer:!1},o=Ux(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ux(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=W3(a)),this._blurMaterial=j3(a,e,t),this._ggxMaterial=X3(a,e,t)}return o}_compileMaterial(e){const t=new ni(new jn,e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,i,o,a){const d=new fi(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,_=g.toneMapping;g.getClearColor(Nx),g.toneMapping=rr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ni(new Ml,new Ns({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,S=w.material;let y=!1;const P=e.background;P?P.isColor&&(S.color.copy(P),e.background=null,y=!0):(S.color.copy(Nx),y=!0);for(let U=0;U<6;U++){const R=U%3;R===0?(d.up.set(0,h[U],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[U],a.y,a.z)):R===1?(d.up.set(0,0,h[U]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[U],a.z)):(d.up.set(0,h[U],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[U]));const L=this._cubeSize;Do(o,R*L,U>2?L:0,L,L),g.setRenderTarget(o),y&&g.render(w,d),g.render(e,d)}g.toneMapping=_,g.autoClear=m,e.background=P}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Gs||e.mapping===Xo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ox()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fx());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Do(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,Ga)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,h=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-p*p),m=h*1.25,_=g*m,{_lodMax:M}=this,w=this._sizeLods[i],S=3*w*(i>M-Bo?i-M+Bo:0),y=4*(this._cubeSize-w);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=M-t,Do(a,S,y,3*w,2*w),o.setRenderTarget(a),o.render(u,Ga),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-i,Do(e,S,y,3*w,2*w),o.setRenderTarget(e),o.render(u,Ga)}_blur(e,t,i,o){const a=this._pingPongRenderTarget,c=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,c),this._blurPass(a,e,i,i,c)}_blurPass(e,t,i,o,a){const c=this._renderer,u=this._blurMaterial,d=this._lodMeshes[o];d.material=u;const h=u.uniforms;h.envMap.value=e.texture,h.sigma.value=a,h.mipInt.value=this._lodMax-i;const p=this._sizeLods[o],g=3*p*(o>this._lodMax-Bo?o-this._lodMax+Bo:0),m=4*(this._cubeSize-p);Do(t,g,m,3*p,2*p),c.setRenderTarget(t),c.render(d,Ga)}}function W3(n){const e=[],t=[];let i=n;const o=n-Bo+1+V3;for(let a=0;a<o;a++){const c=Math.pow(2,i);e.push(c);const u=1/(c-2),d=-u,h=1+u,p=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,m=6,_=3,M=new Float32Array(_*m*g),w=new Float32Array(_*m*g);for(let y=0;y<g;y++){const P=y%3*2/3-1,U=y>2?0:-1,R=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];M.set(R,_*m*y);for(let L=0;L<m;L++){const D=p[L*2]*2-1,F=p[L*2+1]*2-1;y===0?Ls.set(1,F,D):y===1?Ls.set(-D,1,-F):y===2?Ls.set(-D,F,1):y===3?Ls.set(-1,F,-D):y===4?Ls.set(-D,-1,F):Ls.set(D,F,-1),Ls.toArray(w,(y*m+L)*_)}}const S=new jn;S.setAttribute("position",new br(M,_)),S.setAttribute("outputDirection",new br(w,_)),t.push(new ni(S,null)),i>Bo&&i--}return{lodMeshes:t,sizeLods:e}}function Ux(n,e,t){const i=new Wi(n,e,t);return i.texture.mapping=ju,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function X3(n,e,t){return new ar({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$u(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function j3(n,e,t){return new ar({name:"SphericalGaussianBlur",defines:{SAMPLES:z3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$u(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Fx(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Ox(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function $u(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class CM extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new _M(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ml(5,5,5),a=new ar({name:"CubemapFromEquirect",uniforms:Yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ri,blending:Cr});a.uniforms.tEquirect.value=t;const c=new ni(o,a),u=t.minFilter;return t.minFilter===Fs&&(t.minFilter=On),new $P(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}function Y3(n){let e=new WeakMap,t=new WeakMap,i=null;function o(m,_=!1){return m==null?null:_?c(m):a(m)}function a(m){if(m&&m.isTexture){const _=m.mapping;if(_===Qd||_===eh)if(e.has(m)){const M=e.get(m).texture;return u(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const w=new CM(M.height);return w.fromEquirectangularTexture(n,m),e.set(m,w),m.addEventListener("dispose",h),u(w.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const _=m.mapping,M=_===Qd||_===eh,w=_===Gs||_===Xo;if(M||w){let S=t.get(m);const y=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==y)return i===null&&(i=new Ix(n)),S=M?i.fromEquirectangular(m,S):i.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const P=m.image;return M&&P&&P.height>0||w&&P&&d(P)?(i===null&&(i=new Ix(n)),S=M?i.fromEquirectangular(m):i.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",p),S.texture):null}}}return m}function u(m,_){return _===Qd?m.mapping=Gs:_===eh&&(m.mapping=Xo),m}function d(m){let _=0;const M=6;for(let w=0;w<M;w++)m[w]!==void 0&&_++;return _===M}function h(m){const _=m.target;_.removeEventListener("dispose",h);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(m){const _=m.target;_.removeEventListener("dispose",p);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:g}}function $3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const o=n.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&Vo("WebGLRenderer: "+i+" extension not supported."),o}}}function q3(n,e,t,i){const o={},a=new WeakMap;function c(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete o[m.id];const _=a.get(m);_&&(e.remove(_),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(g,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function d(g){const m=g.attributes;for(const _ in m)e.update(m[_],n.ARRAY_BUFFER)}function h(g){const m=[],_=g.index,M=g.attributes.position;let w=0;if(M===void 0)return;if(_!==null){const P=_.array;w=_.version;for(let U=0,R=P.length;U<R;U+=3){const L=P[U+0],D=P[U+1],F=P[U+2];m.push(L,D,D,F,F,L)}}else{const P=M.array;w=M.version;for(let U=0,R=P.length/3-1;U<R;U+=3){const L=U+0,D=U+1,F=U+2;m.push(L,D,D,F,F,L)}}const S=new(M.count>=65535?mM:pM)(m,1);S.version=w;const y=a.get(g);y&&e.remove(y),a.set(g,S)}function p(g){const m=a.get(g);if(m){const _=g.index;_!==null&&m.version<_.version&&h(g)}else h(g);return a.get(g)}return{get:u,update:d,getWireframeAttribute:p}}function K3(n,e,t){let i;function o(g){i=g}let a,c;function u(g){a=g.type,c=g.bytesPerElement}function d(g,m){n.drawElements(i,m,a,g*c),t.update(m,i,1)}function h(g,m,_){_!==0&&(n.drawElementsInstanced(i,m,a,g*c,_),t.update(m,i,_))}function p(g,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,g,0,_);let w=0;for(let S=0;S<_;S++)w+=m[S];t.update(w,i,1)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function Z3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Lt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function J3(n,e,t){const i=new WeakMap,o=new Jt;function a(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let m=i.get(u);if(m===void 0||m.count!==g){let B=function(){E.dispose(),i.delete(u),u.removeEventListener("dispose",B)};var _=B;m!==void 0&&m.texture.dispose();const M=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let R=0;M===!0&&(R=1),w===!0&&(R=2),S===!0&&(R=3);let L=u.attributes.position.count*R,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const F=new Float32Array(L*D*4*g),E=new fM(F,L,D,g);E.type=tr,E.needsUpdate=!0;const N=R*4;for(let V=0;V<g;V++){const Z=y[V],ne=P[V],Y=U[V],Q=L*D*4*V;for(let fe=0;fe<Z.count;fe++){const j=fe*N;M===!0&&(o.fromBufferAttribute(Z,fe),F[Q+j+0]=o.x,F[Q+j+1]=o.y,F[Q+j+2]=o.z,F[Q+j+3]=0),w===!0&&(o.fromBufferAttribute(ne,fe),F[Q+j+4]=o.x,F[Q+j+5]=o.y,F[Q+j+6]=o.z,F[Q+j+7]=0),S===!0&&(o.fromBufferAttribute(Y,fe),F[Q+j+8]=o.x,F[Q+j+9]=o.y,F[Q+j+10]=o.z,F[Q+j+11]=Y.itemSize===4?o.w:1)}}m={count:g,texture:E,size:new gt(L,D)},i.set(u,m),u.addEventListener("dispose",B)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const w=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",w),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function Q3(n,e,t,i,o){let a=new WeakMap;function c(h){const p=o.render.frame,g=h.geometry,m=e.get(h,g);if(a.get(m)!==p&&(e.update(m),a.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return m}function u(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const eD={[qS]:"LINEAR_TONE_MAPPING",[KS]:"REINHARD_TONE_MAPPING",[ZS]:"CINEON_TONE_MAPPING",[JS]:"ACES_FILMIC_TONE_MAPPING",[eM]:"AGX_TONE_MAPPING",[tM]:"NEUTRAL_TONE_MAPPING",[QS]:"CUSTOM_TONE_MAPPING"};function tD(n,e,t,i,o,a){const c=new Wi(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let u=null,d=null;const h=new jn;h.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new kn([0,2,0,0,2,0],2));const p=new OP({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new ni(h,p),m=new TM(-1,1,1,-1,0,1);let _=null,M=null,w=!1,S,y=null,P=[],U=!1;this.setSize=function(R,L){c.setSize(R,L),u!==null&&u.setSize(R,L),d!==null&&d.setSize(R,L);for(let D=0;D<P.length;D++){const F=P[D];F.setSize&&F.setSize(R,L)}},this.setEffects=function(R){P=R,U=P.length>0&&P[0].isRenderPass===!0;const L=c.width,D=c.height;P.length>0&&u===null&&(u=new Wi(L,D,{type:or,depthBuffer:!1,stencilBuffer:!1}),d=new Wi(L,D,{type:or,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<P.length;F++){const E=P[F];E.setSize&&E.setSize(L,D)}},this.begin=function(R,L){if(w||R.toneMapping===rr&&P.length===0)return!1;if(y=L,L!==null){const D=L.width,F=L.height;(c.width!==D||c.height!==F)&&this.setSize(D,F)}return U===!1&&R.setRenderTarget(c),S=R.toneMapping,R.toneMapping=rr,!0},this.hasRenderPass=function(){return U},this.end=function(R,L){R.toneMapping=S,w=!0;let D=c,F=u;for(let E=0;E<P.length;E++){const N=P[E];N.enabled!==!1&&(N.render(R,F,D,L),N.needsSwap!==!1&&(D=F,F=F===u?d:u))}if(_!==R.outputColorSpace||M!==R.toneMapping){_=R.outputColorSpace,M=R.toneMapping,p.defines={},Mt.getTransfer(_)===Ot&&(p.defines.SRGB_TRANSFER="");const E=eD[M];E&&(p.defines[E]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,R.setRenderTarget(y),R.render(g,m),y=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),d!==null&&d.dispose(),h.dispose(),p.dispose()}}const RM=new Cn,Kp=new dl(1,1),bM=new fM,PM=new fP,LM=new _M,kx=[],Bx=[],Vx=new Float32Array(16),zx=new Float32Array(9),Hx=new Float32Array(4);function Jo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let a=kx[o];if(a===void 0&&(a=new Float32Array(o),kx[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function gn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qu(n,e){let t=Bx[e];t===void 0&&(t=new Int32Array(e),Bx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2fv(this.addr,e),vn(t,e)}}function rD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;n.uniform3fv(this.addr,e),vn(t,e)}}function sD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4fv(this.addr,e),vn(t,e)}}function oD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,i))return;Hx.set(i),n.uniformMatrix2fv(this.addr,!1,Hx),vn(t,i)}}function aD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,i))return;zx.set(i),n.uniformMatrix3fv(this.addr,!1,zx),vn(t,i)}}function lD(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,i))return;Vx.set(i),n.uniformMatrix4fv(this.addr,!1,Vx),vn(t,i)}}function cD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2iv(this.addr,e),vn(t,e)}}function fD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;n.uniform3iv(this.addr,e),vn(t,e)}}function dD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4iv(this.addr,e),vn(t,e)}}function hD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function pD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;n.uniform2uiv(this.addr,e),vn(t,e)}}function mD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;n.uniform3uiv(this.addr,e),vn(t,e)}}function gD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;n.uniform4uiv(this.addr,e),vn(t,e)}}function vD(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Kp.compareFunction=t.isReversedDepthBuffer()?Vm:Bm,a=Kp):a=RM,t.setTexture2D(e||a,o)}function _D(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||PM,o)}function xD(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||LM,o)}function yD(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||bM,o)}function SD(n){switch(n){case 5126:return nD;case 35664:return iD;case 35665:return rD;case 35666:return sD;case 35674:return oD;case 35675:return aD;case 35676:return lD;case 5124:case 35670:return cD;case 35667:case 35671:return uD;case 35668:case 35672:return fD;case 35669:case 35673:return dD;case 5125:return hD;case 36294:return pD;case 36295:return mD;case 36296:return gD;case 35678:case 36198:case 36298:case 36306:case 35682:return vD;case 35679:case 36299:case 36307:return _D;case 35680:case 36300:case 36308:case 36293:return xD;case 36289:case 36303:case 36311:case 36292:return yD}}function MD(n,e){n.uniform1fv(this.addr,e)}function ED(n,e){const t=Jo(e,this.size,2);n.uniform2fv(this.addr,t)}function TD(n,e){const t=Jo(e,this.size,3);n.uniform3fv(this.addr,t)}function wD(n,e){const t=Jo(e,this.size,4);n.uniform4fv(this.addr,t)}function AD(n,e){const t=Jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function CD(n,e){const t=Jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RD(n,e){const t=Jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bD(n,e){n.uniform1iv(this.addr,e)}function PD(n,e){n.uniform2iv(this.addr,e)}function LD(n,e){n.uniform3iv(this.addr,e)}function DD(n,e){n.uniform4iv(this.addr,e)}function ND(n,e){n.uniform1uiv(this.addr,e)}function ID(n,e){n.uniform2uiv(this.addr,e)}function UD(n,e){n.uniform3uiv(this.addr,e)}function FD(n,e){n.uniform4uiv(this.addr,e)}function OD(n,e,t){const i=this.cache,o=e.length,a=qu(t,o);gn(i,a)||(n.uniform1iv(this.addr,a),vn(i,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=Kp:c=RM;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function kD(n,e,t){const i=this.cache,o=e.length,a=qu(t,o);gn(i,a)||(n.uniform1iv(this.addr,a),vn(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||PM,a[c])}function BD(n,e,t){const i=this.cache,o=e.length,a=qu(t,o);gn(i,a)||(n.uniform1iv(this.addr,a),vn(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||LM,a[c])}function VD(n,e,t){const i=this.cache,o=e.length,a=qu(t,o);gn(i,a)||(n.uniform1iv(this.addr,a),vn(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||bM,a[c])}function zD(n){switch(n){case 5126:return MD;case 35664:return ED;case 35665:return TD;case 35666:return wD;case 35674:return AD;case 35675:return CD;case 35676:return RD;case 5124:case 35670:return bD;case 35667:case 35671:return PD;case 35668:case 35672:return LD;case 35669:case 35673:return DD;case 5125:return ND;case 36294:return ID;case 36295:return UD;case 36296:return FD;case 35678:case 36198:case 36298:case 36306:case 35682:return OD;case 35679:case 36299:case 36307:return kD;case 35680:case 36300:case 36308:case 36293:return BD;case 36289:case 36303:case 36311:case 36292:return VD}}class HD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SD(t.type)}}class GD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zD(t.type)}}class WD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const Uh=/(\w+)(\])?(\[|\.)?/g;function Gx(n,e){n.seq.push(e),n.map[e.id]=e}function XD(n,e,t){const i=n.name,o=i.length;for(Uh.lastIndex=0;;){const a=Uh.exec(i),c=Uh.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===o){Gx(t,h===void 0?new HD(u,n,e):new GD(u,n,e));break}else{let g=t.map[u];g===void 0&&(g=new WD(u),Gx(t,g)),t=g}}}class gu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);XD(u,d,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function Wx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jD=37297;let YD=0;function $D(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Xx=new ct;function qD(n){Mt._getMatrix(Xx,Mt.workingColorSpace,n);const e=`mat3( ${Xx.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case Nu:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+$D(n.getShaderSource(e),u)}else return a}function KD(n,e){const t=qD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ZD={[qS]:"Linear",[KS]:"Reinhard",[ZS]:"Cineon",[JS]:"ACESFilmic",[eM]:"AgX",[tM]:"Neutral",[QS]:"Custom"};function JD(n,e){const t=ZD[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nu=new J;function QD(){Mt.getLuminanceCoefficients(nu);const n=nu.x.toFixed(4),e=nu.y.toFixed(4),t=nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eN(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function tN(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nN(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function qa(n){return n!==""}function Yx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $x(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(n){return n.replace(iN,sN)}const rN=new Map;function sN(n,e){let t=mt[e];if(t===void 0){const i=rN.get(e);if(i!==void 0)t=mt[i],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zp(t)}const oN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qx(n){return n.replace(oN,aN)}function aN(n,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Kx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lN={[fu]:"SHADOWMAP_TYPE_PCF",[Ya]:"SHADOWMAP_TYPE_VSM"};function cN(n){return lN[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uN={[Gs]:"ENVMAP_TYPE_CUBE",[Xo]:"ENVMAP_TYPE_CUBE",[ju]:"ENVMAP_TYPE_CUBE_UV"};function fN(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":uN[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const dN={[Xo]:"ENVMAP_MODE_REFRACTION"};function hN(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":dN[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pN={[$S]:"ENVMAP_BLENDING_MULTIPLY",[Hb]:"ENVMAP_BLENDING_MIX",[Gb]:"ENVMAP_BLENDING_ADD"};function mN(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":pN[n.combine]||"ENVMAP_BLENDING_NONE"}function gN(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function vN(n,e,t,i){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=cN(t),h=fN(t),p=hN(t),g=mN(t),m=gN(t),_=eN(t),M=tN(a),w=o.createProgram();let S,y,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(qa).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(qa).join(`
`),y.length>0&&(y+=`
`)):(S=[Kx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),y=[Kx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?mt.tonemapping_pars_fragment:"",t.toneMapping!==rr?JD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,KD("linearToOutputTexel",t.outputColorSpace),QD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),c=Zp(c),c=Yx(c,t),c=$x(c,t),u=Zp(u),u=Yx(u,t),u=$x(u,t),c=qx(c),u=qx(u),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===rx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=P+S+c,R=P+y+u,L=Wx(o,o.VERTEX_SHADER,U),D=Wx(o,o.FRAGMENT_SHADER,R);o.attachShader(w,L),o.attachShader(w,D),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function F(V){if(n.debug.checkShaderErrors){const Z=o.getProgramInfoLog(w)||"",ne=o.getShaderInfoLog(L)||"",Y=o.getShaderInfoLog(D)||"",Q=Z.trim(),fe=ne.trim(),j=Y.trim();let G=!0,H=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,w,L,D);else{const $=jx(o,L,"vertex"),I=jx(o,D,"fragment");Lt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Q+`
`+$+`
`+I)}else Q!==""?ot("WebGLProgram: Program Info Log:",Q):(fe===""||j==="")&&(H=!1);H&&(V.diagnostics={runnable:G,programLog:Q,vertexShader:{log:fe,prefix:S},fragmentShader:{log:j,prefix:y}})}o.deleteShader(L),o.deleteShader(D),E=new gu(o,w),N=nN(o,w)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(w,jD)),B},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=YD++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=L,this.fragmentShader=D,this}let _N=0;class xN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yN(e),t.set(e,i)),i}}class yN{constructor(e){this.id=_N++,this.code=e,this.usedTimes=0}}function SN(n){return n===Ws||n===Pu||n===Lu}function MN(n,e,t,i,o,a){const c=new dM,u=new xN,d=new Set,h=[],p=new Map,g=i.logarithmicDepthBuffer;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return d.add(E),E===0?"uv":`uv${E}`}function w(E,N,B,V,Z,ne){const Y=V.fog,Q=Z.geometry,fe=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,j=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,G=e.get(E.envMap||fe,j),H=G&&G.mapping===ju?G.image.height:null,$=_[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&ot("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const I=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ie=I!==void 0?I.length:0;let Se=0;Q.morphAttributes.position!==void 0&&(Se=1),Q.morphAttributes.normal!==void 0&&(Se=2),Q.morphAttributes.color!==void 0&&(Se=3);let Be,ze,Ge,oe;if($){const Rt=er[$];Be=Rt.vertexShader,ze=Rt.fragmentShader}else{Be=E.vertexShader,ze=E.fragmentShader;const Rt=u.getVertexShaderStage(E),Et=u.getFragmentShaderStage(E);u.update(E,Rt,Et),Ge=Rt.id,oe=Et.id}const de=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),tt=Z.isInstancedMesh===!0,Oe=Z.isBatchedMesh===!0,ft=!!E.map,Wt=!!E.matcap,dt=!!G,xt=!!E.aoMap,Ut=!!E.lightMap,ht=!!E.bumpMap&&E.wireframe===!1,kt=!!E.normalMap,Qt=!!E.displacementMap,on=!!E.emissiveMap,It=!!E.metalnessMap,Xt=!!E.roughnessMap,q=E.anisotropy>0,un=E.clearcoat>0,Ct=E.dispersion>0,O=E.retroreflectivity>0,T=E.iridescence>0,ee=E.sheen>0,le=E.transmission>0,he=q&&!!E.anisotropyMap,Ee=un&&!!E.clearcoatMap,Ce=un&&!!E.clearcoatNormalMap,pe=un&&!!E.clearcoatRoughnessMap,ge=T&&!!E.iridescenceMap,Pe=T&&!!E.iridescenceThicknessMap,Ke=ee&&!!E.sheenColorMap,Le=ee&&!!E.sheenRoughnessMap,Ae=!!E.specularMap,Ze=!!E.specularColorMap,nt=!!E.specularIntensityMap,st=le&&!!E.transmissionMap,W=le&&!!E.thicknessMap,Re=!!E.gradientMap,me=!!E.alphaMap,be=E.alphaTest>0,Fe=!!E.alphaHash,ve=!!E.extensions;let Qe=rr;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Qe=n.toneMapping);const $e={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:Be,fragmentShader:ze,defines:E.defines,customVertexShaderID:Ge,customFragmentShaderID:oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Oe,batchingColor:Oe&&Z._colorsTexture!==null,instancing:tt,instancingColor:tt&&Z.instanceColor!==null,instancingMorph:tt&&Z.morphTexture!==null,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ft,matcap:Wt,envMap:dt,envMapMode:dt&&G.mapping,envMapCubeUVHeight:H,aoMap:xt,lightMap:Ut,bumpMap:ht,normalMap:kt,displacementMap:Qt,emissiveMap:on,normalMapObjectSpace:kt&&E.normalMapType===jb,normalMapTangentSpace:kt&&E.normalMapType===ix,packedNormalMap:kt&&E.normalMapType===ix&&SN(E.normalMap.format),metalnessMap:It,roughnessMap:Xt,anisotropy:q,anisotropyMap:he,clearcoat:un,clearcoatMap:Ee,clearcoatNormalMap:Ce,clearcoatRoughnessMap:pe,dispersion:Ct,retroreflection:O,iridescence:T,iridescenceMap:ge,iridescenceThicknessMap:Pe,sheen:ee,sheenColorMap:Ke,sheenRoughnessMap:Le,specularMap:Ae,specularColorMap:Ze,specularIntensityMap:nt,transmission:le,transmissionMap:st,thicknessMap:W,gradientMap:Re,opaque:E.transparent===!1&&E.blending===nl&&E.alphaToCoverage===!1,alphaMap:me,alphaTest:be,alphaHash:Fe,combine:E.combine,mapUv:ft&&M(E.map.channel),aoMapUv:xt&&M(E.aoMap.channel),lightMapUv:Ut&&M(E.lightMap.channel),bumpMapUv:ht&&M(E.bumpMap.channel),normalMapUv:kt&&M(E.normalMap.channel),displacementMapUv:Qt&&M(E.displacementMap.channel),emissiveMapUv:on&&M(E.emissiveMap.channel),metalnessMapUv:It&&M(E.metalnessMap.channel),roughnessMapUv:Xt&&M(E.roughnessMap.channel),anisotropyMapUv:he&&M(E.anisotropyMap.channel),clearcoatMapUv:Ee&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&M(E.sheenRoughnessMap.channel),specularMapUv:Ae&&M(E.specularMap.channel),specularColorMapUv:Ze&&M(E.specularColorMap.channel),specularIntensityMapUv:nt&&M(E.specularIntensityMap.channel),transmissionMapUv:st&&M(E.transmissionMap.channel),thicknessMapUv:W&&M(E.thicknessMap.channel),alphaMapUv:me&&M(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(kt||q),vertexNormals:!!Q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Q.attributes.uv&&(ft||me),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Q.attributes.normal===void 0&&kt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Te,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Se,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ft&&E.map.isVideoTexture===!0&&Mt.getTransfer(E.map.colorSpace)===Ot,decodeVideoTextureEmissive:on&&E.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(E.emissiveMap.colorSpace)===Ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Tr,flipSided:E.side===ri,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ve&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&E.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $e.vertexUv1s=d.has(1),$e.vertexUv2s=d.has(2),$e.vertexUv3s=d.has(3),d.clear(),$e}function S(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)N.push(B),N.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(y(N,E),P(N,E),N.push(n.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function y(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numSunLights),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numSunLightShadows),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function P(E,N){c.disableAll(),N.instancing&&c.enable(0),N.instancingColor&&c.enable(1),N.instancingMorph&&c.enable(2),N.matcap&&c.enable(3),N.envMap&&c.enable(4),N.normalMapObjectSpace&&c.enable(5),N.normalMapTangentSpace&&c.enable(6),N.clearcoat&&c.enable(7),N.iridescence&&c.enable(8),N.alphaTest&&c.enable(9),N.vertexColors&&c.enable(10),N.vertexAlphas&&c.enable(11),N.vertexUv1s&&c.enable(12),N.vertexUv2s&&c.enable(13),N.vertexUv3s&&c.enable(14),N.vertexTangents&&c.enable(15),N.anisotropy&&c.enable(16),N.alphaHash&&c.enable(17),N.batching&&c.enable(18),N.dispersion&&c.enable(19),N.retroreflection&&c.enable(24),N.batchingColor&&c.enable(20),N.gradientMap&&c.enable(21),N.packedNormalMap&&c.enable(22),N.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.reversedDepthBuffer&&c.enable(4),N.skinning&&c.enable(5),N.morphTargets&&c.enable(6),N.morphNormals&&c.enable(7),N.morphColors&&c.enable(8),N.premultipliedAlpha&&c.enable(9),N.shadowMapEnabled&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.decodeVideoTextureEmissive&&c.enable(20),N.alphaToCoverage&&c.enable(21),N.numLightProbeGrids>0&&c.enable(22),N.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function U(E){const N=_[E.type];let B;if(N){const V=er[N];B=IP.clone(V.uniforms)}else B=E.uniforms;return B}function R(E,N){let B=p.get(N);return B!==void 0?++B.usedTimes:(B=new vN(n,N,E,o),h.push(B),p.set(N,B)),B}function L(E){if(--E.usedTimes===0){const N=h.indexOf(E);h[N]=h[h.length-1],h.pop(),p.delete(E.cacheKey),E.destroy()}}function D(E){u.remove(E)}function F(){u.dispose()}return{getParameters:w,getProgramCacheKey:S,getUniforms:U,acquireProgram:R,releaseProgram:L,releaseShaderCache:D,programs:h,dispose:F}}function EN(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function i(c){n.delete(c)}function o(c,u,d){n.get(c)[u]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function TN(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Zx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jx(){const n=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function u(m,_,M,w,S,y){let P=n[e];return P===void 0?(P={id:m.id,object:m,geometry:_,material:M,materialVariant:c(m),groupOrder:w,renderOrder:m.renderOrder,z:S,group:y},n[e]=P):(P.id=m.id,P.object=m,P.geometry=_,P.material=M,P.materialVariant=c(m),P.groupOrder=w,P.renderOrder=m.renderOrder,P.z=S,P.group=y),e++,P}function d(m,_,M,w,S,y,P){P.reversedDepth===!0&&(S=-S);const U=u(m,_,M,w,S,y);M.transmission>0?i.push(U):M.transparent===!0?o.push(U):t.push(U)}function h(m,_,M,w,S,y){const P=u(m,_,M,w,S,y);M.transmission>0?i.unshift(P):M.transparent===!0?o.unshift(P):t.unshift(P)}function p(m,_){t.length>1&&t.sort(m||TN),i.length>1&&i.sort(_||Zx),o.length>1&&o.sort(_||Zx)}function g(){for(let m=e,_=n.length;m<_;m++){const M=n[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:d,unshift:h,finish:g,sort:p}}function wN(){let n=new WeakMap;function e(i,o){const a=n.get(i);let c;return a===void 0?(c=new Jx,n.set(i,[c])):o>=a.length?(c=new Jx,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function AN(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new J,color:new At};break;case"SpotLight":t={position:new J,direction:new J,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new J,halfWidth:new J,halfHeight:new J};break}return n[e.id]=t,t}}}function CN(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let RN=0;function bN(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PN(n){const e=new AN,t=CN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new J);const o=new J,a=new $t,c=new $t;function u(h){let p=0,g=0,m=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let _=0,M=0,w=0,S=0,y=0,P=0,U=0,R=0,L=0,D=0,F=0,E=0,N=0,B=0;h.sort(bN);for(let Z=0,ne=h.length;Z<ne;Z++){const Y=h[Z],Q=Y.color,fe=Y.intensity,j=Y.distance;let G=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===Ws?G=Y.shadow.map.texture:G=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)p+=Q.r*fe,g+=Q.g*fe,m+=Q.b*fe;else if(Y.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(Y.sh.coefficients[H],fe);B++}else if(Y.isSunLight){const H=e.get(Y);if(H.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const $=Y.shadow,I=t.get(Y);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[M]=I,i.sunShadowMap[M]=G;const ie=$.getViewportCount();for(let Se=0;Se<ie;Se++)i.sunShadowMatrix[w+Se]=$.getMatrix(Se),i.sunShadowCascade[w+Se]=$._cascadeData[Se];w+=ie,M++}i.sun[_]=H,_++}else if(Y.isDirectionalLight){const H=e.get(Y);if(H.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const $=Y.shadow,I=t.get(Y);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.directionalShadow[S]=I,i.directionalShadowMap[S]=G,i.directionalShadowMatrix[S]=Y.shadow.matrix,L++}i.directional[S]=H,S++}else if(Y.isSpotLight){const H=e.get(Y);H.position.setFromMatrixPosition(Y.matrixWorld),H.color.copy(Q).multiplyScalar(fe),H.distance=j,H.coneCos=Math.cos(Y.angle),H.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),H.decay=Y.decay,i.spot[P]=H;const $=Y.shadow;if(Y.map&&(i.spotLightMap[E]=Y.map,E++,$.updateMatrices(Y),Y.castShadow&&N++),i.spotLightMatrix[P]=$.matrix,Y.castShadow){const I=t.get(Y);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,i.spotShadow[P]=I,i.spotShadowMap[P]=G,F++}P++}else if(Y.isRectAreaLight){const H=e.get(Y);H.color.copy(Q).multiplyScalar(fe),H.halfWidth.set(Y.width*.5,0,0),H.halfHeight.set(0,Y.height*.5,0),i.rectArea[U]=H,U++}else if(Y.isPointLight){const H=e.get(Y);if(H.color.copy(Y.color).multiplyScalar(Y.intensity),H.distance=Y.distance,H.decay=Y.decay,Y.castShadow){const $=Y.shadow,I=t.get(Y);I.shadowIntensity=$.intensity,I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,I.shadowCameraNear=$.camera.near,I.shadowCameraFar=$.camera.far,i.pointShadow[y]=I,i.pointShadowMap[y]=G,i.pointShadowMatrix[y]=Y.shadow.matrix,D++}i.point[y]=H,y++}else if(Y.isHemisphereLight){const H=e.get(Y);H.skyColor.copy(Y.color).multiplyScalar(fe),H.groundColor.copy(Y.groundColor).multiplyScalar(fe),i.hemi[R]=H,R++}}U>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=m;const V=i.hash;(V.sunLength!==_||V.directionalLength!==S||V.pointLength!==y||V.spotLength!==P||V.rectAreaLength!==U||V.hemiLength!==R||V.numSunShadows!==M||V.numDirectionalShadows!==L||V.numPointShadows!==D||V.numSpotShadows!==F||V.numSpotMaps!==E||V.numLightProbes!==B)&&(i.sun.length=_,i.directional.length=S,i.spot.length=P,i.rectArea.length=U,i.point.length=y,i.hemi.length=R,i.sunShadow.length=M,i.sunShadowMap.length=M,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.directionalShadowMatrix.length=L,i.pointShadow.length=D,i.pointShadowMap.length=D,i.pointShadowMatrix.length=D,i.spotShadow.length=F,i.spotShadowMap.length=F,i.spotLightMatrix.length=F+E-N,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=B,V.sunLength=_,V.directionalLength=S,V.pointLength=y,V.spotLength=P,V.rectAreaLength=U,V.hemiLength=R,V.numSunShadows=M,V.numDirectionalShadows=L,V.numPointShadows=D,V.numSpotShadows=F,V.numSpotMaps=E,V.numLightProbes=B,i.version=RN++)}function d(h,p){let g=0,m=0,_=0,M=0,w=0,S=0;const y=p.matrixWorldInverse;for(let P=0,U=h.length;P<U;P++){const R=h[P];if(R.isSunLight){const L=i.sun[g];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(y),g++}else if(R.isDirectionalLight){const L=i.directional[m];L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),m++}else if(R.isSpotLight){const L=i.spot[M];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),M++}else if(R.isRectAreaLight){const L=i.rectArea[w];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(y),c.identity(),a.copy(R.matrixWorld),a.premultiply(y),c.extractRotation(a),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),w++}else if(R.isPointLight){const L=i.point[_];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(y),_++}else if(R.isHemisphereLight){const L=i.hemi[S];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(y),S++}}}return{setup:u,setupView:d,state:i}}function Qx(n){const e=new PN(n),t=[],i=[],o=[];function a(m){g.camera=m,t.length=0,i.length=0,o.length=0}function c(m){t.push(m)}function u(m){i.push(m)}function d(m){o.push(m)}function h(){e.setup(t)}function p(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:g,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:d}}function LN(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new Qx(n),e.set(o,[u])):a>=c.length?(u=new Qx(n),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const DN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IN=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],UN=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],ey=new $t,Wa=new J,Fh=new J;function FN(n,e,t){let i=new Gm;const o=new gt,a=new gt,c=new Jt,u=new kP,d=new BP,h={},p=t.maxTextureSize,g={[Hs]:ri,[ri]:Hs,[Tr]:Tr},m=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:DN,fragmentShader:NN}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const M=new jn;M.setAttribute("position",new br(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ni(M,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let y=this.type;this.render=function(D,F,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||D.length===0)return;this.type===Eb&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fu);const N=n.getRenderTarget(),B=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(Cr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ne=y!==this.type;ne&&F.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(Q=>Q.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,Q=D.length;Y<Q;Y++){const fe=D[Y],j=fe.shadow;if(j===void 0){ot("WebGLShadowMap:",fe,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const G=j.getFrameExtents();o.multiply(G),a.copy(j.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/G.x),o.x=a.x*G.x,j.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/G.y),o.y=a.y*G.y,j.mapSize.y=a.y));const H=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=H,j.map===null||ne===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ya){if(fe.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Wi(o.x,o.y,{format:Ws,type:or,minFilter:On,magFilter:On,generateMipmaps:!1}),j.map.texture.name=fe.name+".shadowMap",j.map.depthTexture=new dl(o.x,o.y,tr),j.map.depthTexture.name=fe.name+".shadowMapDepth",j.map.depthTexture.format=Pr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=An,j.map.depthTexture.magFilter=An}else fe.isPointLight?(j.map=new CM(o.x),j.map.depthTexture=new PP(o.x,sr)):(j.map=new Wi(o.x,o.y),j.map.depthTexture=new dl(o.x,o.y,sr)),j.map.depthTexture.name=fe.name+".shadowMap",j.map.depthTexture.format=Pr,this.type===fu?(j.map.depthTexture.compareFunction=H?Vm:Bm,j.map.depthTexture.minFilter=On,j.map.depthTexture.magFilter=On):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=An,j.map.depthTexture.magFilter=An);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==o.x||j.map.height!==o.y)&&j.map.setSize(o.x,o.y);const $=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();fe.isPointLight!==!0&&j.updateMatrices(fe,E);for(let I=0;I<$;I++){const ie=j.getCamera(I);if(fe.isPointLight){const Se=j.camera,Be=j.matrix,ze=fe.distance||Se.far;ze!==Se.far&&(Se.far=ze,Se.updateProjectionMatrix()),Wa.setFromMatrixPosition(fe.matrixWorld),Se.position.copy(Wa),Fh.copy(Se.position),Fh.add(IN[I]),Se.up.copy(UN[I]),Se.lookAt(Fh),Se.updateMatrixWorld(),Be.makeTranslation(-Wa.x,-Wa.y,-Wa.z),ey.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),j._frustum.setFromProjectionMatrix(ey,Se.coordinateSystem,Se.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,I),n.clear();else{I===0&&(n.setRenderTarget(j.map),n.clear());const Se=j.getViewport(I);c.set(a.x*Se.x,a.y*Se.y,a.x*Se.z,a.y*Se.w),Z.viewport(c)}i=j.getFrustum(I),R(F,E,ie,fe,this.type)}j.isPointLightShadow!==!0&&this.type===Ya&&P(j,E),j.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(N,B,V)};function P(D,F){const E=e.update(w);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null?D.mapPass=new Wi(o.x,o.y,{format:Ws,type:or}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),m.uniforms.shadow_pass.value=D.map.depthTexture,m.uniforms.resolution.value.set(D.map.width,D.map.height),m.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(F,null,E,m,w,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(F,null,E,_,w,null)}function U(D,F,E,N){let B=null;const V=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(V!==void 0)B=V;else if(B=E.isPointLight===!0?d:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=B.uuid,ne=F.uuid;let Y=h[Z];Y===void 0&&(Y={},h[Z]=Y);let Q=Y[ne];Q===void 0&&(Q=B.clone(),Y[ne]=Q,F.addEventListener("dispose",L)),B=Q}if(B.visible=F.visible,B.wireframe=F.wireframe,N===Ya?B.side=F.shadowSide!==null?F.shadowSide:F.side:B.side=F.shadowSide!==null?F.shadowSide:g[F.side],B.alphaMap=F.alphaMap,B.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,B.map=F.map,B.clipShadows=F.clipShadows,B.clippingPlanes=F.clippingPlanes,B.clipIntersection=F.clipIntersection,B.displacementMap=F.displacementMap,B.displacementScale=F.displacementScale,B.displacementBias=F.displacementBias,B.wireframeLinewidth=F.wireframeLinewidth,B.linewidth=F.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const Z=n.properties.get(B);Z.light=E}return B}function R(D,F,E,N,B){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&B===Ya)&&(!D.frustumCulled||D.intersectsFrustum(i))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const ne=e.update(D),Y=D.material;if(Array.isArray(Y)){const Q=ne.groups;for(let fe=0,j=Q.length;fe<j;fe++){const G=Q[fe],H=Y[G.materialIndex];if(H&&H.visible){const $=U(D,H,N,B);D.onBeforeShadow(n,D,F,E,ne,$,G),n.renderBufferDirect(E,null,ne,$,D,G),D.onAfterShadow(n,D,F,E,ne,$,G)}}}else if(Y.visible){const Q=U(D,Y,N,B);D.onBeforeShadow(n,D,F,E,ne,Q,null),n.renderBufferDirect(E,null,ne,Q,D,null),D.onAfterShadow(n,D,F,E,ne,Q,null)}}const Z=D.children;for(let ne=0,Y=Z.length;ne<Y;ne++)R(Z[ne],F,E,N,B)}function L(D){D.target.removeEventListener("dispose",L);for(const E in h){const N=h[E],B=D.target.uuid;B in N&&(N[B].dispose(),delete N[B])}}}function ON(n,e){function t(){let W=!1;const Re=new Jt;let me=null;const be=new Jt(0,0,0,0);return{setMask:function(Fe){me!==Fe&&!W&&(n.colorMask(Fe,Fe,Fe,Fe),me=Fe)},setLocked:function(Fe){W=Fe},setClear:function(Fe,ve,Qe,$e,Rt){Rt===!0&&(Fe*=$e,ve*=$e,Qe*=$e),Re.set(Fe,ve,Qe,$e),be.equals(Re)===!1&&(n.clearColor(Fe,ve,Qe,$e),be.copy(Re))},reset:function(){W=!1,me=null,be.set(-1,0,0,0)}}}function i(){let W=!1,Re=!1,me=null,be=null,Fe=null;return{setReversed:function(ve){if(Re!==ve){const Qe=e.get("EXT_clip_control");ve?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Re=ve;const $e=Fe;Fe=null,this.setClear($e)}},getReversed:function(){return Re},setTest:function(ve){ve?de(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(ve){me!==ve&&!W&&(n.depthMask(ve),me=ve)},setFunc:function(ve){if(Re&&(ve=rP[ve]),be!==ve){switch(ve){case cp:n.depthFunc(n.NEVER);break;case up:n.depthFunc(n.ALWAYS);break;case fp:n.depthFunc(n.LESS);break;case al:n.depthFunc(n.LEQUAL);break;case dp:n.depthFunc(n.EQUAL);break;case hp:n.depthFunc(n.GEQUAL);break;case pp:n.depthFunc(n.GREATER);break;case mp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}be=ve}},setLocked:function(ve){W=ve},setClear:function(ve){Fe!==ve&&(Fe=ve,Re&&(ve=1-ve),n.clearDepth(ve))},reset:function(){W=!1,me=null,be=null,Fe=null,Re=!1}}}function o(){let W=!1,Re=null,me=null,be=null,Fe=null,ve=null,Qe=null,$e=null,Rt=null;return{setTest:function(Et){W||(Et?de(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(Et){Re!==Et&&!W&&(n.stencilMask(Et),Re=Et)},setFunc:function(Et,En,pi){(me!==Et||be!==En||Fe!==pi)&&(n.stencilFunc(Et,En,pi),me=Et,be=En,Fe=pi)},setOp:function(Et,En,pi){(ve!==Et||Qe!==En||$e!==pi)&&(n.stencilOp(Et,En,pi),ve=Et,Qe=En,$e=pi)},setLocked:function(Et){W=Et},setClear:function(Et){Rt!==Et&&(n.clearStencil(Et),Rt=Et)},reset:function(){W=!1,Re=null,me=null,be=null,Fe=null,ve=null,Qe=null,$e=null,Rt=null}}}const a=new t,c=new i,u=new o,d=new WeakMap,h=new WeakMap;let p={},g={},m={},_=new WeakMap,M=[],w=null,S=!1,y=null,P=null,U=null,R=null,L=null,D=null,F=null,E=new At(0,0,0),N=0,B=!1,V=null,Z=null,ne=null,Y=null,Q=null;const fe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,G=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=G>=2);let $=null,I={};const ie=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Be=new Jt().fromArray(ie),ze=new Jt().fromArray(Se);function Ge(W,Re,me,be){const Fe=new Uint8Array(4),ve=n.createTexture();n.bindTexture(W,ve),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<me;Qe++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(Re+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return ve}const oe={};oe[n.TEXTURE_2D]=Ge(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=Ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=Ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=Ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),de(n.DEPTH_TEST),c.setFunc(al),ht(!1),kt(ex),de(n.CULL_FACE),xt(Cr);function de(W){p[W]!==!0&&(n.enable(W),p[W]=!0)}function Te(W){p[W]!==!1&&(n.disable(W),p[W]=!1)}function tt(W,Re){return m[W]!==Re?(n.bindFramebuffer(W,Re),m[W]=Re,W===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Re),W===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function Oe(W,Re){let me=M,be=!1;if(W){me=_.get(Re),me===void 0&&(me=[],_.set(Re,me));const Fe=W.textures;if(me.length!==Fe.length||me[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Qe=Fe.length;ve<Qe;ve++)me[ve]=n.COLOR_ATTACHMENT0+ve;me.length=Fe.length,be=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,be=!0);be&&n.drawBuffers(me)}function ft(W){return w!==W?(n.useProgram(W),w=W,!0):!1}const Wt={[Io]:n.FUNC_ADD,[wb]:n.FUNC_SUBTRACT,[Ab]:n.FUNC_REVERSE_SUBTRACT};Wt[Cb]=n.MIN,Wt[Rb]=n.MAX;const dt={[bb]:n.ZERO,[Pb]:n.ONE,[Lb]:n.SRC_COLOR,[jS]:n.SRC_ALPHA,[Ob]:n.SRC_ALPHA_SATURATE,[Ub]:n.DST_COLOR,[Nb]:n.DST_ALPHA,[Db]:n.ONE_MINUS_SRC_COLOR,[YS]:n.ONE_MINUS_SRC_ALPHA,[Fb]:n.ONE_MINUS_DST_COLOR,[Ib]:n.ONE_MINUS_DST_ALPHA,[kb]:n.CONSTANT_COLOR,[Bb]:n.ONE_MINUS_CONSTANT_COLOR,[Vb]:n.CONSTANT_ALPHA,[zb]:n.ONE_MINUS_CONSTANT_ALPHA};function xt(W,Re,me,be,Fe,ve,Qe,$e,Rt,Et){if(W===Cr){S===!0&&(Te(n.BLEND),S=!1);return}if(S===!1&&(de(n.BLEND),S=!0),W!==Tb){if(W!==y||Et!==B){if((P!==Io||L!==Io)&&(n.blendEquation(n.FUNC_ADD),P=Io,L=Io),Et)switch(W){case nl:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bu:n.blendFunc(n.ONE,n.ONE);break;case tx:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nx:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Lt("WebGLState: Invalid blending: ",W);break}else switch(W){case nl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tx:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nx:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",W);break}U=null,R=null,D=null,F=null,E.set(0,0,0),N=0,y=W,B=Et}return}Fe=Fe||Re,ve=ve||me,Qe=Qe||be,(Re!==P||Fe!==L)&&(n.blendEquationSeparate(Wt[Re],Wt[Fe]),P=Re,L=Fe),(me!==U||be!==R||ve!==D||Qe!==F)&&(n.blendFuncSeparate(dt[me],dt[be],dt[ve],dt[Qe]),U=me,R=be,D=ve,F=Qe),($e.equals(E)===!1||Rt!==N)&&(n.blendColor($e.r,$e.g,$e.b,Rt),E.copy($e),N=Rt),y=W,B=!1}function Ut(W,Re){W.side===Tr?Te(n.CULL_FACE):de(n.CULL_FACE);let me=W.side===ri;Re&&(me=!me),ht(me),W.blending===nl&&W.transparent===!1?xt(Cr):xt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),a.setMask(W.colorWrite);const be=W.stencilWrite;u.setTest(be),be&&(u.setMask(W.stencilWriteMask),u.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),u.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),on(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(W){V!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),V=W)}function kt(W){W!==Sb?(de(n.CULL_FACE),W!==Z&&(W===ex?n.cullFace(n.BACK):W===Mb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),Z=W}function Qt(W){W!==ne&&(j&&n.lineWidth(W),ne=W)}function on(W,Re,me){W?(de(n.POLYGON_OFFSET_FILL),(Y!==Re||Q!==me)&&(Y=Re,Q=me,c.getReversed()&&(Re=-Re),n.polygonOffset(Re,me))):Te(n.POLYGON_OFFSET_FILL)}function It(W){W?de(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function Xt(W){W===void 0&&(W=n.TEXTURE0+fe-1),$!==W&&(n.activeTexture(W),$=W)}function q(W,Re,me){me===void 0&&($===null?me=n.TEXTURE0+fe-1:me=$);let be=I[me];be===void 0&&(be={type:void 0,texture:void 0},I[me]=be),(be.type!==W||be.texture!==Re)&&($!==me&&(n.activeTexture(me),$=me),n.bindTexture(W,Re||oe[W]),be.type=W,be.texture=Re)}function un(){const W=I[$];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ct(){try{n.compressedTexImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function T(){try{n.texSubImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function ee(){try{n.texSubImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function le(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Ee(){try{n.texStorage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Ce(){try{n.texStorage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function pe(){try{n.texImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function ge(){try{n.texImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Pe(W){return g[W]!==void 0?g[W]:n.getParameter(W)}function Ke(W,Re){g[W]!==Re&&(n.pixelStorei(W,Re),g[W]=Re)}function Le(W){Be.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Be.copy(W))}function Ae(W){ze.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ze.copy(W))}function Ze(W,Re){let me=h.get(Re);me===void 0&&(me=new WeakMap,h.set(Re,me));let be=me.get(W);be===void 0&&(be=n.getUniformBlockIndex(Re,W.name),me.set(W,be))}function nt(W,Re){const be=h.get(Re).get(W);d.get(Re)!==be&&(n.uniformBlockBinding(Re,be,W.__bindingPointIndex),d.set(Re,be))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},g={},$=null,I={},m={},_=new WeakMap,M=[],w=null,S=!1,y=null,P=null,U=null,R=null,L=null,D=null,F=null,E=new At(0,0,0),N=0,B=!1,V=null,Z=null,ne=null,Y=null,Q=null,Be.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:de,disable:Te,bindFramebuffer:tt,drawBuffers:Oe,useProgram:ft,setBlending:xt,setMaterial:Ut,setFlipSided:ht,setCullFace:kt,setLineWidth:Qt,setPolygonOffset:on,setScissorTest:It,activeTexture:Xt,bindTexture:q,unbindTexture:un,compressedTexImage2D:Ct,compressedTexImage3D:O,texImage2D:pe,texImage3D:ge,pixelStorei:Ke,getParameter:Pe,updateUBOMapping:Ze,uniformBlockBinding:nt,texStorage2D:Ee,texStorage3D:Ce,texSubImage2D:T,texSubImage3D:ee,compressedTexSubImage2D:le,compressedTexSubImage3D:he,scissor:Le,viewport:Ae,reset:st}}function kN(n,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new gt,p=new WeakMap,g=new Set;let m;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,T){return M?new OffscreenCanvas(O,T):fl("canvas")}function S(O,T,ee){let le=1;const he=Ct(O);if((he.width>ee||he.height>ee)&&(le=ee/Math.max(he.width,he.height)),le<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ee=Math.floor(le*he.width),Ce=Math.floor(le*he.height);m===void 0&&(m=w(Ee,Ce));const pe=T?w(Ee,Ce):m;return pe.width=Ee,pe.height=Ce,pe.getContext("2d").drawImage(O,0,0,Ee,Ce),ot("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+Ce+")."),pe}else return"data"in O&&ot("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),O;return O}function y(O){return O.generateMipmaps}function P(O){n.generateMipmap(O)}function U(O){return O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?n.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(O,T,ee,le,he,Ee=!1){if(O!==null){if(n[O]!==void 0)return n[O];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ce;le&&(Ce=e.get("EXT_texture_norm16"),Ce||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=T;if(T===n.RED&&(ee===n.FLOAT&&(pe=n.R32F),ee===n.HALF_FLOAT&&(pe=n.R16F),ee===n.UNSIGNED_BYTE&&(pe=n.R8),ee===n.UNSIGNED_SHORT&&Ce&&(pe=Ce.R16_EXT),ee===n.SHORT&&Ce&&(pe=Ce.R16_SNORM_EXT)),T===n.RED_INTEGER&&(ee===n.UNSIGNED_BYTE&&(pe=n.R8UI),ee===n.UNSIGNED_SHORT&&(pe=n.R16UI),ee===n.UNSIGNED_INT&&(pe=n.R32UI),ee===n.BYTE&&(pe=n.R8I),ee===n.SHORT&&(pe=n.R16I),ee===n.INT&&(pe=n.R32I)),T===n.RG&&(ee===n.FLOAT&&(pe=n.RG32F),ee===n.HALF_FLOAT&&(pe=n.RG16F),ee===n.UNSIGNED_BYTE&&(pe=n.RG8),ee===n.UNSIGNED_SHORT&&Ce&&(pe=Ce.RG16_EXT),ee===n.SHORT&&Ce&&(pe=Ce.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(ee===n.UNSIGNED_BYTE&&(pe=n.RG8UI),ee===n.UNSIGNED_SHORT&&(pe=n.RG16UI),ee===n.UNSIGNED_INT&&(pe=n.RG32UI),ee===n.BYTE&&(pe=n.RG8I),ee===n.SHORT&&(pe=n.RG16I),ee===n.INT&&(pe=n.RG32I)),T===n.RGB_INTEGER&&(ee===n.UNSIGNED_BYTE&&(pe=n.RGB8UI),ee===n.UNSIGNED_SHORT&&(pe=n.RGB16UI),ee===n.UNSIGNED_INT&&(pe=n.RGB32UI),ee===n.BYTE&&(pe=n.RGB8I),ee===n.SHORT&&(pe=n.RGB16I),ee===n.INT&&(pe=n.RGB32I)),T===n.RGBA_INTEGER&&(ee===n.UNSIGNED_BYTE&&(pe=n.RGBA8UI),ee===n.UNSIGNED_SHORT&&(pe=n.RGBA16UI),ee===n.UNSIGNED_INT&&(pe=n.RGBA32UI),ee===n.BYTE&&(pe=n.RGBA8I),ee===n.SHORT&&(pe=n.RGBA16I),ee===n.INT&&(pe=n.RGBA32I)),T===n.RGB&&(ee===n.UNSIGNED_SHORT&&Ce&&(pe=Ce.RGB16_EXT),ee===n.SHORT&&Ce&&(pe=Ce.RGB16_SNORM_EXT),ee===n.UNSIGNED_INT_5_9_9_9_REV&&(pe=n.RGB9_E5),ee===n.UNSIGNED_INT_10F_11F_11F_REV&&(pe=n.R11F_G11F_B10F)),T===n.RGBA){const ge=Ee?Nu:Mt.getTransfer(he);ee===n.FLOAT&&(pe=n.RGBA32F),ee===n.HALF_FLOAT&&(pe=n.RGBA16F),ee===n.UNSIGNED_BYTE&&(pe=ge===Ot?n.SRGB8_ALPHA8:n.RGBA8),ee===n.UNSIGNED_SHORT&&Ce&&(pe=Ce.RGBA16_EXT),ee===n.SHORT&&Ce&&(pe=Ce.RGBA16_SNORM_EXT),ee===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),ee===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function L(O,T){let ee;return O?T===null||T===sr||T===cl?ee=n.DEPTH24_STENCIL8:T===tr?ee=n.DEPTH32F_STENCIL8:T===ll&&(ee=n.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===sr||T===cl?ee=n.DEPTH_COMPONENT24:T===tr?ee=n.DEPTH_COMPONENT32F:T===ll&&(ee=n.DEPTH_COMPONENT16),ee}function D(O,T){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==An&&O.minFilter!==On?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function F(O){const T=O.target;T.removeEventListener("dispose",F),N(T),T.isVideoTexture&&p.delete(T),T.isHTMLTexture&&g.delete(T)}function E(O){const T=O.target;T.removeEventListener("dispose",E),V(T)}function N(O){const T=i.get(O);if(T.__webglInit===void 0)return;const ee=O.source,le=_.get(ee);if(le){const he=le[T.__cacheKey];he.usedTimes--,he.usedTimes===0&&B(O),Object.keys(le).length===0&&_.delete(ee)}i.remove(O)}function B(O){const T=i.get(O);n.deleteTexture(T.__webglTexture);const ee=O.source,le=_.get(ee);delete le[T.__cacheKey],c.memory.textures--}function V(O){const T=i.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),i.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(T.__webglFramebuffer[le]))for(let he=0;he<T.__webglFramebuffer[le].length;he++)n.deleteFramebuffer(T.__webglFramebuffer[le][he]);else n.deleteFramebuffer(T.__webglFramebuffer[le]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[le])}else{if(Array.isArray(T.__webglFramebuffer))for(let le=0;le<T.__webglFramebuffer.length;le++)n.deleteFramebuffer(T.__webglFramebuffer[le]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let le=0;le<T.__webglColorRenderbuffer.length;le++)T.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[le]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ee=O.textures;for(let le=0,he=ee.length;le<he;le++){const Ee=i.get(ee[le]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),c.memory.textures--),i.remove(ee[le])}i.remove(O)}let Z=0;function ne(){Z=0}function Y(){return Z}function Q(O){Z=O}function fe(){const O=Z;return O>=o.maxTextures&&ot("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+o.maxTextures),Z+=1,O}function j(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function G(O,T){const ee=i.get(O);if(O.isVideoTexture&&q(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ee.__version!==O.version){const le=O.image;if(le===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(ee,O,T);return}}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture,n.TEXTURE0+T)}function H(O,T){const ee=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){Te(ee,O,T);return}else O.isExternalTexture&&(ee.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,ee.__webglTexture,n.TEXTURE0+T)}function $(O,T){const ee=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ee.__version!==O.version){Te(ee,O,T);return}t.bindTexture(n.TEXTURE_3D,ee.__webglTexture,n.TEXTURE0+T)}function I(O,T){const ee=i.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&ee.__version!==O.version){tt(ee,O,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture,n.TEXTURE0+T)}const ie={[gp]:n.REPEAT,[wr]:n.CLAMP_TO_EDGE,[vp]:n.MIRRORED_REPEAT},Se={[An]:n.NEAREST,[Wb]:n.NEAREST_MIPMAP_NEAREST,[Nc]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[th]:n.LINEAR_MIPMAP_NEAREST,[Fs]:n.LINEAR_MIPMAP_LINEAR},Be={[$b]:n.NEVER,[Qb]:n.ALWAYS,[qb]:n.LESS,[Bm]:n.LEQUAL,[Kb]:n.EQUAL,[Vm]:n.GEQUAL,[Zb]:n.GREATER,[Jb]:n.NOTEQUAL};function ze(O,T){if(T.type===tr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===On||T.magFilter===th||T.magFilter===Nc||T.magFilter===Fs||T.minFilter===On||T.minFilter===th||T.minFilter===Nc||T.minFilter===Fs)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,ie[T.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,ie[T.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,ie[T.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,Se[T.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,Se[T.minFilter]),T.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,Be[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===An||T.minFilter!==Nc&&T.minFilter!==Fs||T.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");n.texParameterf(O,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ge(O,T){let ee=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",F));const le=T.source;let he=_.get(le);he===void 0&&(he={},_.set(le,he));const Ee=j(T);if(Ee!==O.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),he[Ee].usedTimes++;const Ce=he[O.__cacheKey];Ce!==void 0&&(he[O.__cacheKey].usedTimes--,Ce.usedTimes===0&&B(T)),O.__cacheKey=Ee,O.__webglTexture=he[Ee].texture}return ee}function oe(O,T,ee){return Math.floor(Math.floor(O/ee)/T)}function de(O,T,ee,le){const Ee=O.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,ee,le,T.data);else{Ee.sort((Ke,Le)=>Ke.start-Le.start);let Ce=0;for(let Ke=1;Ke<Ee.length;Ke++){const Le=Ee[Ce],Ae=Ee[Ke],Ze=Le.start+Le.count,nt=oe(Ae.start,T.width,4),st=oe(Le.start,T.width,4);Ae.start<=Ze+1&&nt===st&&oe(Ae.start+Ae.count-1,T.width,4)===nt?Le.count=Math.max(Le.count,Ae.start+Ae.count-Le.start):(++Ce,Ee[Ce]=Ae)}Ee.length=Ce+1;const pe=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),Pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let Ke=0,Le=Ee.length;Ke<Le;Ke++){const Ae=Ee[Ke],Ze=Math.floor(Ae.start/4),nt=Math.ceil(Ae.count/4),st=Ze%T.width,W=Math.floor(Ze/T.width),Re=nt,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,st),t.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,st,W,Re,me,ee,le,T.data)}O.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,pe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function Te(O,T,ee){let le=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=n.TEXTURE_3D);const he=Ge(O,T),Ee=T.source;t.bindTexture(le,O.__webglTexture,n.TEXTURE0+ee);const Ce=i.get(Ee);if(Ee.version!==Ce.__version||he===!0){if(t.activeTexture(n.TEXTURE0+ee),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const me=Mt.getPrimaries(Mt.workingColorSpace),be=T.colorSpace===is?null:Mt.getPrimaries(T.colorSpace),Fe=T.colorSpace===is||me===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let ge=S(T.image,!1,o.maxTextureSize);ge=un(T,ge);const Pe=a.convert(T.format,T.colorSpace),Ke=a.convert(T.type);let Le=R(T.internalFormat,Pe,Ke,T.normalized,T.colorSpace,T.isVideoTexture);ze(le,T);let Ae;const Ze=T.mipmaps,nt=T.isVideoTexture!==!0,st=Ce.__version===void 0||he===!0,W=Ee.dataReady,Re=D(T,ge);if(T.isDepthTexture)Le=L(T.format===Os,T.type),st&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Le,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Le,ge.width,ge.height,0,Pe,Ke,null));else if(T.isDataTexture)if(Ze.length>0){nt&&st&&t.texStorage2D(n.TEXTURE_2D,Re,Le,Ze[0].width,Ze[0].height);for(let me=0,be=Ze.length;me<be;me++)Ae=Ze[me],nt?W&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Pe,Ke,Ae.data):t.texImage2D(n.TEXTURE_2D,me,Le,Ae.width,Ae.height,0,Pe,Ke,Ae.data);T.generateMipmaps=!1}else nt?(st&&t.texStorage2D(n.TEXTURE_2D,Re,Le,ge.width,ge.height),W&&de(T,ge,Pe,Ke)):t.texImage2D(n.TEXTURE_2D,0,Le,ge.width,ge.height,0,Pe,Ke,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Le,Ze[0].width,Ze[0].height,ge.depth);for(let me=0,be=Ze.length;me<be;me++)if(Ae=Ze[me],T.format!==Hi)if(Pe!==null)if(nt){if(W)if(T.layerUpdates.size>0){const Fe=Dx(Ae.width,Ae.height,T.format,T.type);for(const ve of T.layerUpdates){const Qe=Ae.data.subarray(ve*Fe/Ae.data.BYTES_PER_ELEMENT,(ve+1)*Fe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,ve,Ae.width,Ae.height,1,Pe,Qe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,ge.depth,Pe,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Le,Ae.width,Ae.height,ge.depth,0,Ae.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,ge.depth,Pe,Ke,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Le,Ae.width,Ae.height,ge.depth,0,Pe,Ke,Ae.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{nt&&st&&t.texStorage2D(n.TEXTURE_2D,Re,Le,Ze[0].width,Ze[0].height);for(let me=0,be=Ze.length;me<be;me++)Ae=Ze[me],T.format!==Hi?Pe!==null?nt?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Le,Ae.width,Ae.height,0,Ae.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?W&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Pe,Ke,Ae.data):t.texImage2D(n.TEXTURE_2D,me,Le,Ae.width,Ae.height,0,Pe,Ke,Ae.data)}else if(T.isDataArrayTexture)if(nt){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,Le,ge.width,ge.height,ge.depth),W)if(T.layerUpdates.size>0){const me=Dx(ge.width,ge.height,T.format,T.type);for(const be of T.layerUpdates){const Fe=ge.data.subarray(be*me/ge.data.BYTES_PER_ELEMENT,(be+1)*me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,be,ge.width,ge.height,1,Pe,Ke,Fe)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Pe,Ke,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ge.width,ge.height,ge.depth,0,Pe,Ke,ge.data);else if(T.isData3DTexture)nt?(st&&t.texStorage3D(n.TEXTURE_3D,Re,Le,ge.width,ge.height,ge.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Pe,Ke,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ge.width,ge.height,ge.depth,0,Pe,Ke,ge.data);else if(T.isFramebufferTexture){if(st)if(nt)t.texStorage2D(n.TEXTURE_2D,Re,Le,ge.width,ge.height);else{let me=ge.width,be=ge.height;for(let Fe=0;Fe<Re;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Le,me,be,0,Pe,Ke,null),me>>=1,be>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),g.add(T),me.onpaint=be=>{const Fe=be.changedElements;for(const ve of g)Fe.includes(ve.image)&&(ve.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ge);else{const Fe=n.RGBA,ve=n.RGBA,Qe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Fe,ve,Qe,ge)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(nt&&st){const me=Ct(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Re,Le,me.width,me.height)}for(let me=0,be=Ze.length;me<be;me++)Ae=Ze[me],nt?W&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Pe,Ke,Ae):t.texImage2D(n.TEXTURE_2D,me,Le,Pe,Ke,Ae);T.generateMipmaps=!1}else if(nt){if(st){const me=Ct(ge);t.texStorage2D(n.TEXTURE_2D,Re,Le,me.width,me.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ke,ge)}else t.texImage2D(n.TEXTURE_2D,0,Le,Pe,Ke,ge);y(T)&&P(le),Ce.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function tt(O,T,ee){if(T.image.length!==6)return;const le=Ge(O,T),he=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+ee);const Ee=i.get(he);if(he.version!==Ee.__version||le===!0){t.activeTexture(n.TEXTURE0+ee);const Ce=Mt.getPrimaries(Mt.workingColorSpace),pe=T.colorSpace===is?null:Mt.getPrimaries(T.colorSpace),ge=T.colorSpace===is||Ce===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Pe=T.isCompressedTexture||T.image[0].isCompressedTexture,Ke=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let ve=0;ve<6;ve++)!Pe&&!Ke?Le[ve]=S(T.image[ve],!0,o.maxCubemapSize):Le[ve]=Ke?T.image[ve].image:T.image[ve],Le[ve]=un(T,Le[ve]);const Ae=Le[0],Ze=a.convert(T.format,T.colorSpace),nt=a.convert(T.type),st=R(T.internalFormat,Ze,nt,T.normalized,T.colorSpace),W=T.isVideoTexture!==!0,Re=Ee.__version===void 0||le===!0,me=he.dataReady;let be=D(T,Ae);ze(n.TEXTURE_CUBE_MAP,T);let Fe;if(Pe){W&&Re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,st,Ae.width,Ae.height);for(let ve=0;ve<6;ve++){Fe=Le[ve].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){const $e=Fe[Qe];T.format!==Hi?Ze!==null?W?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,$e.width,$e.height,Ze,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,st,$e.width,$e.height,0,$e.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,0,0,$e.width,$e.height,Ze,nt,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe,st,$e.width,$e.height,0,Ze,nt,$e.data)}}}else{if(Fe=T.mipmaps,W&&Re){Fe.length>0&&be++;const ve=Ct(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,st,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ke){W?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Le[ve].width,Le[ve].height,Ze,nt,Le[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,Le[ve].width,Le[ve].height,0,Ze,nt,Le[ve].data);for(let Qe=0;Qe<Fe.length;Qe++){const Rt=Fe[Qe].image[ve].image;W?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,Rt.width,Rt.height,Ze,nt,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,st,Rt.width,Rt.height,0,Ze,nt,Rt.data)}}else{W?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ze,nt,Le[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,Ze,nt,Le[ve]);for(let Qe=0;Qe<Fe.length;Qe++){const $e=Fe[Qe];W?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,0,0,Ze,nt,$e.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Qe+1,st,Ze,nt,$e.image[ve])}}}y(T)&&P(n.TEXTURE_CUBE_MAP),Ee.__version=he.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Oe(O,T,ee,le,he,Ee){const Ce=a.convert(ee.format,ee.colorSpace),pe=a.convert(ee.type),ge=R(ee.internalFormat,Ce,pe,ee.normalized,ee.colorSpace),Pe=i.get(T),Ke=i.get(ee);if(Ke.__renderTarget=T,!Pe.__hasExternalTextures){const Le=Math.max(1,T.width>>Ee),Ae=Math.max(1,T.height>>Ee);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,Ee,ge,Le,Ae,T.depth,0,Ce,pe,null):t.texImage2D(he,Ee,ge,Le,Ae,0,Ce,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,O),Xt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,he,Ke.__webglTexture,0,It(T)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,he,Ke.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(O,T,ee){if(n.bindRenderbuffer(n.RENDERBUFFER,O),T.depthBuffer){const le=T.depthTexture,he=le&&le.isDepthTexture?le.type:null,Ee=L(T.stencilBuffer,he),Ce=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(T),Ee,T.width,T.height):ee?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(T),Ee,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,O)}else{const le=T.textures;for(let he=0;he<le.length;he++){const Ee=le[he],Ce=a.convert(Ee.format,Ee.colorSpace),pe=a.convert(Ee.type),ge=R(Ee.internalFormat,Ce,pe,Ee.normalized,Ee.colorSpace);Xt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It(T),ge,T.width,T.height):ee?n.renderbufferStorageMultisample(n.RENDERBUFFER,It(T),ge,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ge,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Wt(O,T,ee){const le=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=i.get(T.depthTexture);if(he.__renderTarget=T,(!he.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),le){if(he.__webglInit===void 0&&(he.__webglInit=!0,T.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),ze(n.TEXTURE_CUBE_MAP,T.depthTexture);const Pe=a.convert(T.depthTexture.format),Ke=a.convert(T.depthTexture.type);let Le;T.depthTexture.format===Pr?Le=n.DEPTH_COMPONENT24:T.depthTexture.format===Os&&(Le=n.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Le,T.width,T.height,0,Pe,Ke,null)}}else G(T.depthTexture,0);const Ee=he.__webglTexture,Ce=It(T),pe=le?n.TEXTURE_CUBE_MAP_POSITIVE_X+ee:n.TEXTURE_2D,ge=T.depthTexture.format===Os?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Pr)Xt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,Ee,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,Ee,0);else if(T.depthTexture.format===Os)Xt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,pe,Ee,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,ge,pe,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(O){const T=i.get(O),ee=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const le=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),le){const he=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,le.removeEventListener("dispose",he)};le.addEventListener("dispose",he),T.__depthDisposeCallback=he}T.__boundDepthTexture=le}if(O.depthTexture&&!T.__autoAllocateDepthBuffer)if(ee)for(let le=0;le<6;le++)Wt(T.__webglFramebuffer[le],O,le);else{const le=O.texture.mipmaps;le&&le.length>0?Wt(T.__webglFramebuffer[0],O,0):Wt(T.__webglFramebuffer,O,0)}else if(ee){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]===void 0)T.__webglDepthbuffer[le]=n.createRenderbuffer(),ft(T.__webglDepthbuffer[le],O,!1);else{const he=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=T.__webglDepthbuffer[le];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Ee)}}else{const le=O.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ft(T.__webglDepthbuffer,O,!1);else{const he=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,Ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(O,T,ee){const le=i.get(O);T!==void 0&&Oe(le.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),ee!==void 0&&dt(O)}function Ut(O){const T=O.texture,ee=i.get(O),le=i.get(T);O.addEventListener("dispose",E);const he=O.textures,Ee=O.isWebGLCubeRenderTarget===!0,Ce=he.length>1;if(Ce||(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=T.version,c.memory.textures++),Ee){ee.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer[pe]=[];for(let ge=0;ge<T.mipmaps.length;ge++)ee.__webglFramebuffer[pe][ge]=n.createFramebuffer()}else ee.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)ee.__webglFramebuffer[pe]=n.createFramebuffer()}else ee.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let pe=0,ge=he.length;pe<ge;pe++){const Pe=i.get(he[pe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),c.memory.textures++)}if(O.samples>0&&Xt(O)===!1){ee.__webglMultisampledFramebuffer=n.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const ge=he[pe];ee.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,ee.__webglColorRenderbuffer[pe]);const Pe=a.convert(ge.format,ge.colorSpace),Ke=a.convert(ge.type),Le=R(ge.internalFormat,Pe,Ke,ge.normalized,ge.colorSpace,O.isXRRenderTarget===!0),Ae=It(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Le,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,ee.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(ee.__webglDepthRenderbuffer=n.createRenderbuffer(),ft(ee.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),ze(n.TEXTURE_CUBE_MAP,T);for(let pe=0;pe<6;pe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)Oe(ee.__webglFramebuffer[pe][ge],O,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Oe(ee.__webglFramebuffer[pe],O,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(T)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let pe=0,ge=he.length;pe<ge;pe++){const Pe=he[pe],Ke=i.get(Pe);let Le=n.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Le=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,Ke.__webglTexture),ze(Le,Pe),Oe(ee.__webglFramebuffer,O,Pe,n.COLOR_ATTACHMENT0+pe,Le,0),y(Pe)&&P(Le)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(pe=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,le.__webglTexture),ze(pe,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)Oe(ee.__webglFramebuffer[ge],O,T,n.COLOR_ATTACHMENT0,pe,ge);else Oe(ee.__webglFramebuffer,O,T,n.COLOR_ATTACHMENT0,pe,0);y(T)&&P(pe),t.unbindTexture()}O.depthBuffer&&dt(O)}function ht(O){const T=O.textures;for(let ee=0,le=T.length;ee<le;ee++){const he=T[ee];if(y(he)){const Ee=U(O),Ce=i.get(he).__webglTexture;t.bindTexture(Ee,Ce),P(Ee),t.unbindTexture()}}}const kt=[],Qt=[];function on(O){if(O.samples>0){if(Xt(O)===!1){const T=O.textures,ee=O.width,le=O.height;let he=n.COLOR_BUFFER_BIT;const Ee=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(O),pe=T.length>1;if(pe)for(let Pe=0;Pe<T.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const ge=O.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);const Ke=i.get(T[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,ee,le,0,0,ee,le,he,n.NEAREST),d===!0&&(kt.length=0,Qt.length=0,kt.push(n.COLOR_ATTACHMENT0+Pe),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(kt.push(Ee),Qt.push(Ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Qt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Pe=0;Pe<T.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);const Ke=i.get(T[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&d){const T=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function It(O){return Math.min(o.maxSamples,O.samples)}function Xt(O){const T=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function q(O){const T=c.render.frame;p.get(O)!==T&&(p.set(O,T),O.update())}function un(O,T){const ee=O.colorSpace,le=O.format,he=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ee!==Du&&ee!==is&&(Mt.getTransfer(ee)===Ot?(le!==Hi||he!==di)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",ee)),T}function Ct(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=fe,this.resetTextureUnits=ne,this.getTextureUnits=Y,this.setTextureUnits=Q,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=I,this.rebindTextures=xt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function BN(n,e){function t(i,o=is){let a;const c=Mt.getTransfer(o);if(i===di)return n.UNSIGNED_BYTE;if(i===Im)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Um)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===oM)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===iM)return n.BYTE;if(i===rM)return n.SHORT;if(i===ll)return n.UNSIGNED_SHORT;if(i===Nm)return n.INT;if(i===sr)return n.UNSIGNED_INT;if(i===tr)return n.FLOAT;if(i===or)return n.HALF_FLOAT;if(i===aM)return n.ALPHA;if(i===lM)return n.RGB;if(i===Hi)return n.RGBA;if(i===Pr)return n.DEPTH_COMPONENT;if(i===Os)return n.DEPTH_STENCIL;if(i===cM)return n.RED;if(i===Fm)return n.RED_INTEGER;if(i===Ws)return n.RG;if(i===Om)return n.RG_INTEGER;if(i===km)return n.RGBA_INTEGER;if(i===du||i===hu||i===pu||i===mu)if(c===Ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===du)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===du)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_p||i===xp||i===yp||i===Sp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===_p)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mp||i===Ep||i===Tp||i===wp||i===Ap||i===Pu||i===Cp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Mp||i===Ep)return c===Ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Tp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===wp)return a.COMPRESSED_R11_EAC;if(i===Ap)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Pu)return a.COMPRESSED_RG11_EAC;if(i===Cp)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Rp||i===bp||i===Pp||i===Lp||i===Dp||i===Np||i===Ip||i===Up||i===Fp||i===Op||i===kp||i===Bp||i===Vp||i===zp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Rp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Np)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ip)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Up)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Op)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zp)return c===Ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hp||i===Gp||i===Wp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Hp)return c===Ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xp||i===jp||i===Lu||i===Yp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Xp)return a.COMPRESSED_RED_RGTC1_EXT;if(i===jp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const VN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zN=`
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

}`;class HN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new xM(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ar({vertexShader:VN,fragmentShader:zN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GN extends js{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",d=1,h=null,p=null,g=null,m=null,_=null,M=null;const w=typeof XRWebGLBinding<"u",S=new HN,y={},P=t.getContextAttributes();let U=null,R=null;const L=[],D=[],F=new gt;let E=null,N=null;const B=new fi;B.viewport=new Jt;const V=new fi;V.viewport=new Jt;const Z=[B,V],ne=new qP;let Y=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let de=L[oe];return de===void 0&&(de=new uh,L[oe]=de),de.getTargetRaySpace()},this.getControllerGrip=function(oe){let de=L[oe];return de===void 0&&(de=new uh,L[oe]=de),de.getGripSpace()},this.getHand=function(oe){let de=L[oe];return de===void 0&&(de=new uh,L[oe]=de),de.getHandSpace()};function fe(oe){const de=D.indexOf(oe.inputSource);if(de===-1)return;const Te=L[de];Te!==void 0&&(Te.update(oe.inputSource,oe.frame,h||c),Te.dispatchEvent({type:oe.type,data:oe.inputSource}))}function j(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",j),o.removeEventListener("inputsourceschange",G);for(let oe=0;oe<L.length;oe++){const de=D[oe];de!==null&&(D[oe]=null,L[oe].disconnect(de))}Y=null,Q=null,S.reset();for(const oe in y)delete y[oe];if(e.setRenderTarget(U),_=null,m=null,g=null,o=null,R=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),N!==null){const oe=N.camera;oe.fov=N.fov,oe.zoom=N.zoom,oe.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){a=oe,i.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){u=oe,i.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(o,t)),g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",j),o.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,tt=null,Oe=null;P.depth&&(Oe=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=P.stencil?Os:Pr,tt=P.stencil?cl:sr);const ft={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:a};g=this.getBinding(),m=g.createProjectionLayer(ft),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),R=new Wi(m.textureWidth,m.textureHeight,{format:Hi,type:di,depthTexture:new dl(m.textureWidth,m.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{const Te={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,t,Te),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new Wi(_.framebufferWidth,_.framebufferHeight,{format:Hi,type:di,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(u),Ge.setContext(o),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(oe){for(let de=0;de<oe.removed.length;de++){const Te=oe.removed[de],tt=D.indexOf(Te);tt>=0&&(D[tt]=null,L[tt].disconnect(Te))}for(let de=0;de<oe.added.length;de++){const Te=oe.added[de];let tt=D.indexOf(Te);if(tt===-1){for(let ft=0;ft<L.length;ft++)if(ft>=D.length){D.push(Te),tt=ft;break}else if(D[ft]===null){D[ft]=Te,tt=ft;break}if(tt===-1)break}const Oe=L[tt];Oe&&Oe.connect(Te)}}const H=new J,$=new J;function I(oe,de,Te){H.setFromMatrixPosition(de.matrixWorld),$.setFromMatrixPosition(Te.matrixWorld);const tt=H.distanceTo($),Oe=de.projectionMatrix.elements,ft=Te.projectionMatrix.elements,Wt=Oe[14]/(Oe[10]-1),dt=Oe[14]/(Oe[10]+1),xt=(Oe[9]+1)/Oe[5],Ut=(Oe[9]-1)/Oe[5],ht=(Oe[8]-1)/Oe[0],kt=(ft[8]+1)/ft[0],Qt=Wt*ht,on=Wt*kt,It=tt/(-ht+kt),Xt=It*-ht;if(de.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Xt),oe.translateZ(It),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Oe[10]===-1)oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const q=Wt+It,un=dt+It,Ct=Qt-Xt,O=on+(tt-Xt),T=xt*dt/un*q,ee=Ut*dt/un*q;oe.projectionMatrix.makePerspective(Ct,O,T,ee,q,un),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function ie(oe,de){de===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(de.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let de=oe.near,Te=oe.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(Te=S.depthFar)),ne.near=V.near=B.near=de,ne.far=V.far=B.far=Te,(Y!==ne.near||Q!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),Y=ne.near,Q=ne.far),ne.layers.mask=oe.layers.mask|6,B.layers.mask=ne.layers.mask&-5,V.layers.mask=ne.layers.mask&-3;const tt=oe.parent,Oe=ne.cameras;ie(ne,tt);for(let ft=0;ft<Oe.length;ft++)ie(Oe[ft],tt);Oe.length===2?I(ne,B,V):ne.projectionMatrix.copy(B.projectionMatrix),N===null&&oe.isPerspectiveCamera&&(N={camera:oe,fov:oe.fov,zoom:oe.zoom}),Se(oe,ne,tt)};function Se(oe,de,Te){Te===null?oe.matrix.copy(de.matrixWorld):(oe.matrix.copy(Te.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(de.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(de.projectionMatrix),oe.projectionMatrixInverse.copy(de.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=$p*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(m===null&&_===null))return d},this.setFoveation=function(oe){d=oe,m!==null&&(m.fixedFoveation=oe),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ne)},this.getCameraTexture=function(oe){return y[oe]};let Be=null;function ze(oe,de){if(p=de.getViewerPose(h||c),M=de,p!==null){const Te=p.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let tt=!1;Te.length!==ne.cameras.length&&(ne.cameras.length=0,tt=!0);for(let dt=0;dt<Te.length;dt++){const xt=Te[dt];let Ut=null;if(_!==null)Ut=_.getViewport(xt);else{const kt=g.getViewSubImage(m,xt);Ut=kt.viewport,dt===0&&(e.setRenderTargetTextures(R,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(R))}let ht=Z[dt];ht===void 0&&(ht=new fi,ht.layers.enable(dt),ht.viewport=new Jt,Z[dt]=ht),ht.matrix.fromArray(xt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(xt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),dt===0&&(ne.matrix.copy(ht.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),tt===!0&&ne.cameras.push(ht)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){g=i.getBinding();const dt=g.getDepthInformation(Te[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,o.renderState)}if(Oe&&Oe.includes("camera-access")&&w){e.state.unbindTexture(),g=i.getBinding();for(let dt=0;dt<Te.length;dt++){const xt=Te[dt].camera;if(xt){let Ut=y[xt];Ut||(Ut=new xM,y[xt]=Ut);const ht=g.getCameraImage(xt);Ut.sourceTexture=ht}}}}for(let Te=0;Te<L.length;Te++){const tt=D[Te],Oe=L[Te];tt!==null&&Oe!==void 0&&Oe.update(tt,de,h||c)}Be&&Be(oe,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ge=new wM;Ge.setAnimationLoop(ze),this.setAnimationLoop=function(oe){Be=oe},this.dispose=function(){}}}const WN=new $t,DM=new ct;DM.set(-1,0,0,0,1,0,0,0,1);function XN(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,SM(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,P,U,R){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?a(S,y):y.isMeshLambertMaterial?(a(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(a(S,y),g(S,y)):y.isMeshPhongMaterial?(a(S,y),p(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(a(S,y),m(S,y),y.isMeshPhysicalMaterial&&_(S,y,R)):y.isMeshMatcapMaterial?(a(S,y),M(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),w(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?d(S,y,P,U):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ri&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ri&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const P=e.get(y),U=P.envMap,R=P.envMapRotation;U&&(S.envMap.value=U,S.envMapRotation.value.setFromMatrix4(WN.makeRotationFromEuler(R)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(DM),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,P,U){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*P,S.scale.value=U*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function m(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function _(S,y,P){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ri&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function w(S,y){const P=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function jN(n,e,t,i){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,L){const D=L.program;i.uniformBlockBinding(R,D)}function h(R,L){let D=o[R.id];D===void 0&&(S(R),D=p(R),o[R.id]=D,R.addEventListener("dispose",P));const F=L.program;i.updateUBOMapping(R,F);const E=e.render.frame;a[R.id]!==E&&(m(R),a[R.id]=E)}function p(R){const L=g();R.__bindingPointIndex=L;const D=n.createBuffer(),F=R.__size,E=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,F,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,L,D),D}function g(){for(let R=0;R<u;R++)if(c.indexOf(R)===-1)return c.push(R),R;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const L=o[R.id],D=R.uniforms,F=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let E=0,N=D.length;E<N;E++){const B=D[E];if(Array.isArray(B))for(let V=0,Z=B.length;V<Z;V++)_(B[V],E,V,F);else _(B,E,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(R,L,D,F){if(w(R,L,D,F)===!0){const E=R.__offset,N=R.value;if(Array.isArray(N)){let B=0;for(let V=0;V<N.length;V++){const Z=N[V],ne=y(Z);M(Z,R.__data,B),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(B+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(N,R.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,R.__data)}}function M(R,L,D){typeof R=="number"||typeof R=="boolean"?L[0]=R:R.isMatrix3?(L[0]=R.elements[0],L[1]=R.elements[1],L[2]=R.elements[2],L[3]=0,L[4]=R.elements[3],L[5]=R.elements[4],L[6]=R.elements[5],L[7]=0,L[8]=R.elements[6],L[9]=R.elements[7],L[10]=R.elements[8],L[11]=0):ArrayBuffer.isView(R)?L.set(new R.constructor(R.buffer,R.byteOffset,L.length)):R.toArray(L,D)}function w(R,L,D,F){const E=R.value,N=L+"_"+D;if(F[N]===void 0)return typeof E=="number"||typeof E=="boolean"?F[N]=E:ArrayBuffer.isView(E)?F[N]=E.slice():F[N]=E.clone(),!0;{const B=F[N];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return F[N]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(B.equals(E)===!1)return B.copy(E),!0}}return!1}function S(R){const L=R.uniforms;let D=0;const F=16;for(let N=0,B=L.length;N<B;N++){const V=Array.isArray(L[N])?L[N]:[L[N]];for(let Z=0,ne=V.length;Z<ne;Z++){const Y=V[Z],Q=Array.isArray(Y.value)?Y.value:[Y.value];for(let fe=0,j=Q.length;fe<j;fe++){const G=Q[fe],H=y(G),$=D%F,I=$%H.boundary,ie=$+I;D+=I,ie!==0&&F-ie<H.storage&&(D+=F-ie),Y.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=H.storage}}}const E=D%F;return E>0&&(D+=F-E),R.__size=D,R.__cache={},this}function y(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(L.boundary=16,L.storage=R.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",R),L}function P(R){const L=R.target;L.removeEventListener("dispose",P);const D=c.indexOf(L.__bindingPointIndex);c.splice(D,1),n.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function U(){for(const R in o)n.deleteBuffer(o[R]);c=[],o={},a={}}return{bind:d,update:h,dispose:U}}const YN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function $N(){return Zi===null&&(Zi=new CP(YN,16,16,Ws,or),Zi.name="DFG_LUT",Zi.minFilter=On,Zi.magFilter=On,Zi.wrapS=wr,Zi.wrapT=wr,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class qN{constructor(e={}){const{canvas:t=nP(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:_=di}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const w=_,S=new Set([km,Om,Fm]),y=new Set([di,sr,ll,cl,Im,Um]),P=new Uint32Array(4),U=new Int32Array(4),R=new J;let L=null,D=null;const F=[],E=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let V=!1,Z=null,ne=null,Y=null,Q=null;this._outputColorSpace=ti;let fe=0,j=0,G=null,H=-1,$=null;const I=new Jt,ie=new Jt;let Se=null;const Be=new At(0);let ze=0,Ge=t.width,oe=t.height,de=1,Te=null,tt=null;const Oe=new Jt(0,0,Ge,oe),ft=new Jt(0,0,Ge,oe);let Wt=!1;const dt=new Gm;let xt=!1,Ut=!1;const ht=new $t,kt=new J,Qt=new Jt,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function Xt(){return G===null?de:1}let q=i;function un(b,X){return t.getContext(b,X)}let Ct,O,T,ee,le,he,Ee,Ce,pe,ge,Pe,Ke,Le,Ae,Ze,nt,st,W,Re,me,be,Fe,ve;try{const b={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dm}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",En,!1),q===null){const X="webgl2";if(q=un(X,b),q===null)throw un(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(b){throw t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",En,!1),Lt("WebGLRenderer: "+b.message),b}function Qe(){Ct=new $3(q),Ct.init(),be=new BN(q,Ct),O=new k3(q,Ct,e,be),T=new ON(q,Ct),O.reversedDepthBuffer&&m&&T.buffers.depth.setReversed(!0),ne=q.createFramebuffer(),Y=q.createFramebuffer(),Q=q.createFramebuffer(),ee=new Z3(q),le=new EN,he=new kN(q,Ct,T,le,O,be,ee),Ee=new Y3(B),Ce=new QP(q),Fe=new F3(q,Ce),pe=new q3(q,Ce,ee,Fe),ge=new Q3(q,pe,Ce,Fe,ee),W=new J3(q,O,he),Ze=new B3(le),Pe=new MN(B,Ee,Ct,O,Fe,Ze),Ke=new XN(B,le),Le=new wN,Ae=new LN(Ct),st=new U3(B,Ee,T,ge,M,d),nt=new FN(B,ge,O),ve=new jN(q,ee,O,T),Re=new O3(q,Ct,ee),me=new K3(q,Ct,ee),ee.programs=Pe.programs,B.capabilities=O,B.extensions=Ct,B.properties=le,B.renderLists=Le,B.shadowMap=nt,B.state=T,B.info=ee}w!==di&&(N=new tD(w,t.width,t.height,u,o,a));const $e=new GN(B,q);this.xr=$e,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const b=Ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(b){b!==void 0&&(de=b,this.setSize(Ge,oe,!1))},this.getSize=function(b){return b.set(Ge,oe)},this.setSize=function(b,X,ce=!0){if($e.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=b,oe=X,t.width=Math.floor(b*de),t.height=Math.floor(X*de),ce===!0&&(t.style.width=b+"px",t.style.height=X+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(Ge*de,oe*de).floor()},this.setDrawingBufferSize=function(b,X,ce){Ge=b,oe=X,de=ce,t.width=Math.floor(b*ce),t.height=Math.floor(X*ce),this.setViewport(0,0,b,X)},this.setEffects=function(b){if(w===di){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let X=0;X<b.length;X++)if(b[X].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(Oe)},this.setViewport=function(b,X,ce,re){b.isVector4?Oe.set(b.x,b.y,b.z,b.w):Oe.set(b,X,ce,re),T.viewport(I.copy(Oe).multiplyScalar(de).round())},this.getScissor=function(b){return b.copy(ft)},this.setScissor=function(b,X,ce,re){b.isVector4?ft.set(b.x,b.y,b.z,b.w):ft.set(b,X,ce,re),T.scissor(ie.copy(ft).multiplyScalar(de).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(b){T.setScissorTest(Wt=b)},this.setOpaqueSort=function(b){Te=b},this.setTransparentSort=function(b){tt=b},this.getClearColor=function(b){return b.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,ce=!0){let re=0;if(b){let te=!1;if(G!==null){const Ie=G.texture.format;te=S.has(Ie)}if(te){const Ie=G.texture.type,De=y.has(Ie),Ne=st.getClearColor(),Xe=st.getClearAlpha(),Je=Ne.r,lt=Ne.g,ut=Ne.b;De?(P[0]=Je,P[1]=lt,P[2]=ut,P[3]=Xe,q.clearBufferuiv(q.COLOR,0,P)):(U[0]=Je,U[1]=lt,U[2]=ut,U[3]=Xe,q.clearBufferiv(q.COLOR,0,U))}else re|=q.COLOR_BUFFER_BIT}X&&(re|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(re|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&q.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),Z=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",En,!1),st.dispose(),Le.dispose(),Ae.dispose(),le.dispose(),Ee.dispose(),ge.dispose(),Fe.dispose(),ve.dispose(),Pe.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",El),$e.removeEventListener("sessionend",Tl),Bn.stop()};function Rt(b){b.preventDefault(),ox("WebGLRenderer: Context Lost."),V=!0}function Et(){ox("WebGLRenderer: Context Restored."),V=!1;const b=ee.autoReset,X=nt.enabled,ce=nt.autoUpdate,re=nt.needsUpdate,te=nt.type;Qe(),ee.autoReset=b,nt.enabled=X,nt.autoUpdate=ce,nt.needsUpdate=re,nt.type=te}function En(b){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pi(b){const X=b.target;X.removeEventListener("dispose",pi),cs(X)}function cs(b){Ys(b),le.remove(b)}function Ys(b){const X=le.get(b).programs;X!==void 0&&(X.forEach(function(ce){Pe.releaseProgram(ce)}),b.isShaderMaterial&&Pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,ce,re,te,Ie){X===null&&(X=on);const De=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ne=qt(b,X,ce,re,te);T.setMaterial(re,De);let Xe=ce.index,Je=1;if(re.wireframe===!0){if(Xe=pe.getWireframeAttribute(ce),Xe===void 0)return;Je=2}const lt=ce.drawRange,ut=ce.attributes.position;let He=lt.start*Je,yt=(lt.start+lt.count)*Je;Ie!==null&&(He=Math.max(He,Ie.start*Je),yt=Math.min(yt,(Ie.start+Ie.count)*Je)),Xe!==null?(He=Math.max(He,0),yt=Math.min(yt,Xe.count)):ut!=null&&(He=Math.max(He,0),yt=Math.min(yt,ut.count));const en=yt-He;if(en<0||en===1/0)return;Fe.setup(te,re,Ne,ce,Xe);let Bt,Nt=Re;if(Xe!==null&&(Bt=Ce.get(Xe),Nt=me,Nt.setIndex(Bt)),te.isMesh)re.wireframe===!0?(T.setLineWidth(re.wireframeLinewidth*Xt()),Nt.setMode(q.LINES)):Nt.setMode(q.TRIANGLES);else if(te.isLine){let fn=re.linewidth;fn===void 0&&(fn=1),T.setLineWidth(fn*Xt()),te.isLineSegments?Nt.setMode(q.LINES):te.isLineLoop?Nt.setMode(q.LINE_LOOP):Nt.setMode(q.LINE_STRIP)}else te.isPoints?Nt.setMode(q.POINTS):te.isSprite&&Nt.setMode(q.TRIANGLES);if(te.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Nt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const fn=te._multiDrawStarts,ke=te._multiDrawCounts,rn=te._multiDrawCount,St=Xe?Ce.get(Xe).bytesPerElement:1,Rn=le.get(re).currentProgram.getUniforms();for(let pt=0;pt<rn;pt++)Rn.setValue(q,"_gl_DrawID",pt),Nt.render(fn[pt]/St,ke[pt])}else if(te.isInstancedMesh)Nt.renderInstances(He,en,te.count);else if(ce.isInstancedBufferGeometry){const fn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,ke=Math.min(ce.instanceCount,fn);Nt.renderInstances(He,en,ke)}else Nt.render(He,en)};function us(b,X,ce,re){Z!==null&&b.isNodeMaterial&&Z.setObject(re,b),xt===!0&&Ze.setState(b,ce,!1),b.transparent===!0&&b.side===Tr&&b.forceSinglePass===!1?(b.side=ri,b.needsUpdate=!0,hs(b,X,re),b.side=Hs,b.needsUpdate=!0,hs(b,X,re),b.side=Tr):hs(b,X,re)}this.compile=function(b,X,ce=null){ce===null&&(ce=b),Z!==null&&Z.renderStart(b,X,ce),D=Ae.get(ce),D.init(X),E.push(D),ce.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),b!==ce&&b.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(D.pushLight(te),te.castShadow&&D.pushShadow(te))}),D.setupLights(),Z!==null&&Z.updateLights(D.state.lightsArray),Ut=this.localClippingEnabled,xt=Ze.init(this.clippingPlanes,Ut),xt===!0&&Ze.setGlobalState(this.clippingPlanes,X),Z!==null&&nt.render(D.state.shadowsArray,ce,X);const re=new Set;return b.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ie=te.material;if(Ie)if(Array.isArray(Ie))for(let De=0;De<Ie.length;De++){const Ne=Ie[De];us(Ne,ce,X,te),re.add(Ne)}else us(Ie,ce,X,te),re.add(Ie)}),D=E.pop(),Z!==null&&Z.renderEnd(),re},this.compileAsync=function(b,X,ce=null){const re=this.compile(b,X,ce);return new Promise(te=>{function Ie(){if(re.forEach(function(De){const Xe=le.get(De).currentProgram;(Xe===void 0||Xe.isReady())&&re.delete(De)}),re.size===0){te(b);return}setTimeout(Ie,10)}Ct.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let fs=null;function Ku(b){fs&&fs(b)}function El(){Bn.stop()}function Tl(){Bn.start()}const Bn=new wM;Bn.setAnimationLoop(Ku),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(b){fs=b,$e.setAnimationLoop(b),b===null?Bn.stop():Bn.start()},$e.addEventListener("sessionstart",El),$e.addEventListener("sessionend",Tl),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(b,X);const ce=$e.enabled===!0&&$e.isPresenting===!0,re=N!==null&&(G===null||ce)&&N.begin(B,G);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(X),X=$e.getCamera()),b.isScene===!0&&b.onBeforeRender(B,b,X,G),D=Ae.get(b,E.length),D.init(X),D.state.textureUnits=he.getTextureUnits(),E.push(D),ht.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),dt.setFromProjectionMatrix(ht,nr,X.reversedDepth),Ut=this.localClippingEnabled,xt=Ze.init(this.clippingPlanes,Ut),L=Le.get(b,F.length),L.init(),F.push(L),$e.enabled===!0&&$e.isPresenting===!0){const De=B.xr.getDepthSensingMesh();De!==null&&$s(De,X,-1/0,B.sortObjects)}$s(b,X,0,B.sortObjects),L.finish(),Z!==null&&Z.updateLights(D.state.lightsArray),B.sortObjects===!0&&L.sort(Te,tt),It=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,It&&st.addToRenderList(L,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Ze.beginShadows();const te=D.state.shadowsArray;if(nt.render(te,b,X),xt===!0&&Ze.endShadows(),(re&&N.hasRenderPass())===!1){const De=L.opaque,Ne=L.transmissive;if(D.setupLights(),X.isArrayCamera){const Xe=X.cameras;if(Ne.length>0)for(let Je=0,lt=Xe.length;Je<lt;Je++){const ut=Xe[Je];wl(De,Ne,b,ut)}It&&st.render(b);for(let Je=0,lt=Xe.length;Je<lt;Je++){const ut=Xe[Je];Qo(L,b,ut,ut.viewport)}}else Ne.length>0&&wl(De,Ne,b,X),It&&st.render(b),Qo(L,b,X)}G!==null&&j===0&&(he.updateMultisampleRenderTarget(G),he.updateRenderTargetMipmap(G)),re&&N.end(B),b.isScene===!0&&b.onAfterRender(B,b,X),Fe.resetDefaultState(),H=-1,$=null,E.pop(),E.length>0?(D=E[E.length-1],he.setTextureUnits(D.state.textureUnits),xt===!0&&Ze.setGlobalState(B.clippingPlanes,D.state.camera)):D=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,Z!==null&&Z.renderEnd()};function $s(b,X,ce,re){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)ce=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLightProbeGrid)D.pushLightProbeGrid(b);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(dt)){re&&Qt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);const De=ge.update(b),Ne=b.material;Ne.visible&&L.push(b,De,Ne,ce,Qt.z,null,X)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(dt))){const De=ge.update(b),Ne=b.material;if(re&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qt.copy(b.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Qt.copy(De.boundingSphere.center)),Qt.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(Ne)){const Xe=De.groups;for(let Je=0,lt=Xe.length;Je<lt;Je++){const ut=Xe[Je],He=Ne[ut.materialIndex];He&&He.visible&&L.push(b,De,He,ce,Qt.z,ut,X)}}else Ne.visible&&L.push(b,De,Ne,ce,Qt.z,null,X)}}const Ie=b.children;for(let De=0,Ne=Ie.length;De<Ne;De++)$s(Ie[De],X,ce,re)}function Qo(b,X,ce,re){const{opaque:te,transmissive:Ie,transparent:De}=b;D.setupLightsView(ce),xt===!0&&Ze.setGlobalState(B.clippingPlanes,ce),re&&T.viewport(I.copy(re)),te.length>0&&ds(te,X,ce),Ie.length>0&&ds(Ie,X,ce),De.length>0&&ds(De,X,ce),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function wl(b,X,ce,re){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[re.id]===void 0){const He=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[re.id]=new Wi(1,1,{generateMipmaps:!0,type:He?or:di,minFilter:Fs,samples:Math.max(4,O.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Ie=D.state.transmissionRenderTarget[re.id],De=re.viewport||I;Ie.setSize(De.z*B.transmissionResolutionScale,De.w*B.transmissionResolutionScale);const Ne=B.getRenderTarget(),Xe=B.getActiveCubeFace(),Je=B.getActiveMipmapLevel();B.setRenderTarget(Ie),B.getClearColor(Be),ze=B.getClearAlpha(),ze<1&&B.setClearColor(16777215,.5),B.clear(),It&&st.render(ce);const lt=B.toneMapping;B.toneMapping=rr;const ut=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),D.setupLightsView(re),xt===!0&&Ze.setGlobalState(B.clippingPlanes,re),ds(b,ce,re),he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let yt=0,en=X.length;yt<en;yt++){const Bt=X[yt],{object:Nt,geometry:fn,material:ke,group:rn}=Bt;if(ke.side===Tr&&Nt.layers.test(re.layers)){const St=ke.side;ke.side=ri,ke.needsUpdate=!0,ea(Nt,ce,re,fn,ke,rn),ke.side=St,ke.needsUpdate=!0,He=!0}}He===!0&&(he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie))}B.setRenderTarget(Ne,Xe,Je),B.setClearColor(Be,ze),ut!==void 0&&(re.viewport=ut),B.toneMapping=lt}function ds(b,X,ce){const re=X.isScene===!0?X.overrideMaterial:null;for(let te=0,Ie=b.length;te<Ie;te++){const De=b[te],{object:Ne,geometry:Xe,group:Je}=De;let lt=De.material;lt.allowOverride===!0&&re!==null&&(lt=re),Ne.layers.test(ce.layers)&&ea(Ne,X,ce,Xe,lt,Je)}}function ea(b,X,ce,re,te,Ie){Z!==null&&te.isNodeMaterial&&Z.setObject(b,te),b.onBeforeRender(B,X,ce,re,te,Ie),b.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),te.onBeforeRender(B,X,ce,re,b,Ie),te.transparent===!0&&te.side===Tr&&te.forceSinglePass===!1?(te.side=ri,te.needsUpdate=!0,B.renderBufferDirect(ce,X,re,te,b,Ie),te.side=Hs,te.needsUpdate=!0,B.renderBufferDirect(ce,X,re,te,b,Ie),te.side=Tr):B.renderBufferDirect(ce,X,re,te,b,Ie),b.onAfterRender(B,X,ce,re,te,Ie)}function hs(b,X,ce){X.isScene!==!0&&(X=on);const re=le.get(b),te=D.state.lights,Ie=D.state.shadowsArray,De=te.state.version,Ne=Pe.getParameters(b,te.state,Ie,X,ce,D.state.lightProbeGridArray),Xe=Pe.getProgramCacheKey(Ne);let Je=re.programs;re.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?X.environment:null,re.fog=X.fog;const lt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;re.envMap=Ee.get(b.envMap||re.environment,lt),re.envMapRotation=re.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Je===void 0&&(b.addEventListener("dispose",pi),Je=new Map,re.programs=Je);let ut=Je.get(Xe);if(ut!==void 0){if(re.currentProgram===ut&&re.lightsStateVersion===De)return Al(b,Ne),ut}else Ne.uniforms=Pe.getUniforms(b),Z!==null&&b.isNodeMaterial&&Z.build(b,ce,Ne),b.onBeforeCompile(Ne,B),ut=Pe.acquireProgram(Ne,Xe),Je.set(Xe,ut),re.uniforms=Ne.uniforms;const He=re.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=Ze.uniform),Al(b,Ne),re.needsLights=na(b),re.lightsStateVersion=De,re.needsLights&&(He.ambientLightColor.value=te.state.ambient,He.lightProbe.value=te.state.probe,He.sunLights.value=te.state.sun,He.sunLightShadows.value=te.state.sunShadow,He.directionalLights.value=te.state.directional,He.directionalLightShadows.value=te.state.directionalShadow,He.spotLights.value=te.state.spot,He.spotLightShadows.value=te.state.spotShadow,He.rectAreaLights.value=te.state.rectArea,He.ltc_1.value=te.state.rectAreaLTC1,He.ltc_2.value=te.state.rectAreaLTC2,He.pointLights.value=te.state.point,He.pointLightShadows.value=te.state.pointShadow,He.hemisphereLights.value=te.state.hemi,He.sunShadowMatrix.value=te.state.sunShadowMatrix,He.sunShadowCascade.value=te.state.sunShadowCascade,He.directionalShadowMatrix.value=te.state.directionalShadowMatrix,He.spotLightMatrix.value=te.state.spotLightMatrix,He.spotLightMap.value=te.state.spotLightMap,He.pointShadowMatrix.value=te.state.pointShadowMatrix),re.lightProbeGrid=D.state.lightProbeGridArray.length>0,re.currentProgram=ut,re.uniformsList=null,ut}function ta(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=gu.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function Al(b,X){const ce=le.get(b);ce.outputColorSpace=X.outputColorSpace,ce.batching=X.batching,ce.batchingColor=X.batchingColor,ce.instancing=X.instancing,ce.instancingColor=X.instancingColor,ce.instancingMorph=X.instancingMorph,ce.skinning=X.skinning,ce.morphTargets=X.morphTargets,ce.morphNormals=X.morphNormals,ce.morphColors=X.morphColors,ce.morphTargetsCount=X.morphTargetsCount,ce.numClippingPlanes=X.numClippingPlanes,ce.numIntersection=X.numClipIntersection,ce.vertexAlphas=X.vertexAlphas,ce.vertexTangents=X.vertexTangents,ce.toneMapping=X.toneMapping}function Zu(b,X){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;R.setFromMatrixPosition(X.matrixWorld);for(let ce=0,re=b.length;ce<re;ce++){const te=b[ce];if(te.texture!==null&&te.boundingBox.containsPoint(R))return te}return null}function qt(b,X,ce,re,te){X.isScene!==!0&&(X=on),he.resetTextureUnits();const Ie=X.fog,De=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?X.environment:null,Ne=G===null?B.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Mt.workingColorSpace,Xe=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Je=Ee.get(re.envMap||De,Xe),lt=re.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ut=!!ce.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),He=!!ce.morphAttributes.position,yt=!!ce.morphAttributes.normal,en=!!ce.morphAttributes.color;let Bt=rr;re.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Bt=B.toneMapping);const Nt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,fn=Nt!==void 0?Nt.length:0,ke=le.get(re),rn=D.state.lights;if(xt===!0&&(Ut===!0||b!==$)){const Ft=b===$&&re.id===H;Ze.setState(re,b,Ft)}let St=!1;re.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==rn.state.version||ke.outputColorSpace!==Ne||te.isBatchedMesh&&ke.batching===!1||!te.isBatchedMesh&&ke.batching===!0||te.isBatchedMesh&&ke.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&ke.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&ke.instancing===!1||!te.isInstancedMesh&&ke.instancing===!0||te.isSkinnedMesh&&ke.skinning===!1||!te.isSkinnedMesh&&ke.skinning===!0||te.isInstancedMesh&&ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ke.instancingMorph===!1&&te.morphTexture!==null||ke.envMap!==Je||re.fog===!0&&ke.fog!==Ie||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ze.numPlanes||ke.numIntersection!==Ze.numIntersection)||ke.vertexAlphas!==lt||ke.vertexTangents!==ut||ke.morphTargets!==He||ke.morphNormals!==yt||ke.morphColors!==en||ke.toneMapping!==Bt||ke.morphTargetsCount!==fn||!!ke.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,ke.__version=re.version);let Rn=ke.currentProgram;St===!0&&(Rn=hs(re,X,te),Z&&re.isNodeMaterial&&Z.onUpdateProgram(re,Rn,ke));let pt=!1,wi=!1,cr=!1;const bt=Rn.getUniforms(),jt=ke.uniforms;if(T.useProgram(Rn.program)&&(pt=!0,wi=!0,cr=!0),re.id!==H&&(H=re.id,wi=!0),ke.needsLights){const Ft=Zu(D.state.lightProbeGridArray,te);ke.lightProbeGrid!==Ft&&(ke.lightProbeGrid=Ft,wi=!0)}if(pt||$!==b){T.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),bt.setValue(q,"projectionMatrix",b.projectionMatrix),bt.setValue(q,"viewMatrix",b.matrixWorldInverse);const mi=bt.map.cameraPosition;mi!==void 0&&mi.setValue(q,kt.setFromMatrixPosition(b.matrixWorld)),O.logarithmicDepthBuffer&&bt.setValue(q,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&bt.setValue(q,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,wi=!0,cr=!0)}if(ke.needsLights&&(rn.state.sunShadowMap.length>0&&bt.setValue(q,"sunShadowMap",rn.state.sunShadowMap,he),rn.state.directionalShadowMap.length>0&&bt.setValue(q,"directionalShadowMap",rn.state.directionalShadowMap,he),rn.state.spotShadowMap.length>0&&bt.setValue(q,"spotShadowMap",rn.state.spotShadowMap,he),rn.state.pointShadowMap.length>0&&bt.setValue(q,"pointShadowMap",rn.state.pointShadowMap,he)),te.isSkinnedMesh){bt.setOptional(q,te,"bindMatrix"),bt.setOptional(q,te,"bindMatrixInverse");const Ft=te.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),bt.setValue(q,"boneTexture",Ft.boneTexture,he))}te.isBatchedMesh&&(bt.setOptional(q,te,"batchingTexture"),bt.setValue(q,"batchingTexture",te._matricesTexture,he),bt.setOptional(q,te,"batchingIdTexture"),bt.setValue(q,"batchingIdTexture",te._indirectTexture,he),bt.setOptional(q,te,"batchingColorTexture"),te._colorsTexture!==null&&bt.setValue(q,"batchingColorTexture",te._colorsTexture,he));const Ai=ce.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&W.update(te,ce,Rn),(wi||ke.receiveShadow!==te.receiveShadow)&&(ke.receiveShadow=te.receiveShadow,bt.setValue(q,"receiveShadow",te.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&X.environment!==null&&(jt.envMapIntensity.value=X.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=$N()),wi){if(bt.setValue(q,"toneMappingExposure",B.toneMappingExposure),ke.needsLights&&Ju(jt,cr),Ie&&re.fog===!0&&Ke.refreshFogUniforms(jt,Ie),Ke.refreshMaterialUniforms(jt,re,de,oe,D.state.transmissionRenderTarget[b.id]),ke.needsLights&&ke.lightProbeGrid){const Ft=ke.lightProbeGrid;jt.probesSH.value=Ft.texture,jt.probesMin.value.copy(Ft.boundingBox.min),jt.probesMax.value.copy(Ft.boundingBox.max),jt.probesResolution.value.copy(Ft.resolution)}gu.upload(q,ta(ke),jt,he)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(gu.upload(q,ta(ke),jt,he),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&bt.setValue(q,"center",te.center),bt.setValue(q,"modelViewMatrix",te.modelViewMatrix),bt.setValue(q,"normalMatrix",te.normalMatrix),bt.setValue(q,"modelMatrix",te.matrixWorld),re.uniformsGroups!==void 0){const Ft=re.uniformsGroups;for(let mi=0,Ci=Ft.length;mi<Ci;mi++){const Ri=Ft[mi];ve.update(Ri,Rn),ve.bind(Ri,Rn)}}return Rn}function Ju(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.sunLights.needsUpdate=X,b.sunLightShadows.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function na(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(b,X,ce){const re=le.get(b);re.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),le.get(b.texture).__webglTexture=X,le.get(b.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ce,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const ce=le.get(b);ce.__webglFramebuffer=X,ce.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,ce=0){G=b,fe=X,j=ce;let re=null,te=!1,Ie=!1;if(b){const Ne=le.get(b);if(Ne.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(q.FRAMEBUFFER,Ne.__webglFramebuffer),I.copy(b.viewport),ie.copy(b.scissor),Se=b.scissorTest,T.viewport(I),T.scissor(ie),T.setScissorTest(Se),H=-1;return}else if(Ne.__webglFramebuffer===void 0)he.setupRenderTarget(b);else if(Ne.__hasExternalTextures)he.rebindTextures(b,le.get(b.texture).__webglTexture,le.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const lt=b.depthTexture;if(Ne.__boundDepthTexture!==lt){if(lt!==null&&le.has(lt)&&(b.width!==lt.image.width||b.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(b)}}const Xe=b.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const Je=le.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?re=Je[X][ce]:re=Je[X],te=!0):b.samples>0&&he.useMultisampledRTT(b)===!1?re=le.get(b).__webglMultisampledFramebuffer:Array.isArray(Je)?re=Je[ce]:re=Je,I.copy(b.viewport),ie.copy(b.scissor),Se=b.scissorTest}else I.copy(Oe).multiplyScalar(de).floor(),ie.copy(ft).multiplyScalar(de).floor(),Se=Wt;if(ce!==0&&(re=ne),T.bindFramebuffer(q.FRAMEBUFFER,re)&&T.drawBuffers(b,re),T.viewport(I),T.scissor(ie),T.setScissorTest(Se),te){const Ne=le.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,ce)}else if(Ie){const Ne=X;for(let Xe=0;Xe<b.textures.length;Xe++){const Je=le.get(b.textures[Xe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Xe,Je.__webglTexture,ce,Ne)}}else if(b!==null&&ce!==0){const Ne=le.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ne.__webglTexture,ce)}H=-1};function ia(b){const X=le.get(b);return(X.__readFormat!==b.format||X.__readType!==b.type)&&(X.__readFormat=b.format,X.__readType=b.type,X.__formatReadable=O.textureFormatReadable(b.format),X.__typeReadable=O.textureTypeReadable(b.type)),X}this.readRenderTargetPixels=function(b,X,ce,re,te,Ie,De,Ne=0){if(!(b&&b.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Xe=Xe[De]),Xe){T.bindFramebuffer(q.FRAMEBUFFER,Xe);try{const Je=b.textures[Ne],lt=Je.format,ut=Je.type;b.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ne);const He=ia(Je);if(He.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-re&&ce>=0&&ce<=b.height-te&&q.readPixels(X,ce,re,te,be.convert(lt),be.convert(ut),Ie)}finally{const Je=G!==null?le.get(G).__webglFramebuffer:null;T.bindFramebuffer(q.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(b,X,ce,re,te,Ie,De,Ne=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=le.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Xe=Xe[De]),Xe)if(X>=0&&X<=b.width-re&&ce>=0&&ce<=b.height-te){T.bindFramebuffer(q.FRAMEBUFFER,Xe);const Je=b.textures[Ne],lt=Je.format,ut=Je.type;b.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ne);const He=ia(Je);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,yt),q.bufferData(q.PIXEL_PACK_BUFFER,Ie.byteLength,q.STREAM_READ),q.readPixels(X,ce,re,te,be.convert(lt),be.convert(ut),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const en=G!==null?le.get(G).__webglFramebuffer:null;T.bindFramebuffer(q.FRAMEBUFFER,en);const Bt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await iP(q,Bt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,yt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ie),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(yt),q.deleteSync(Bt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,ce=0){const re=Math.pow(2,-ce),te=Math.floor(b.image.width*re),Ie=Math.floor(b.image.height*re),De=X!==null?X.x:0,Ne=X!==null?X.y:0;he.setTexture2D(b,0),q.copyTexSubImage2D(q.TEXTURE_2D,ce,0,0,De,Ne,te,Ie),T.unbindTexture()},this.copyTextureToTexture=function(b,X,ce=null,re=null,te=0,Ie=0){let De,Ne,Xe,Je,lt,ut,He,yt,en;const Bt=b.isCompressedTexture?b.mipmaps[Ie]:b.image;if(ce!==null)De=ce.max.x-ce.min.x,Ne=ce.max.y-ce.min.y,Xe=ce.isBox3?ce.max.z-ce.min.z:1,Je=ce.min.x,lt=ce.min.y,ut=ce.isBox3?ce.min.z:0;else{const jt=Math.pow(2,-te);De=Math.floor(Bt.width*jt),Ne=Math.floor(Bt.height*jt),b.isDataArrayTexture?Xe=Bt.depth:b.isData3DTexture?Xe=Math.floor(Bt.depth*jt):Xe=1,Je=0,lt=0,ut=0}re!==null?(He=re.x,yt=re.y,en=re.z):(He=0,yt=0,en=0);const Nt=be.convert(X.format),fn=be.convert(X.type);let ke;X.isData3DTexture?(he.setTexture3D(X,0),ke=q.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(he.setTexture2DArray(X,0),ke=q.TEXTURE_2D_ARRAY):(he.setTexture2D(X,0),ke=q.TEXTURE_2D),T.activeTexture(q.TEXTURE0),T.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,X.flipY),T.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),T.pixelStorei(q.UNPACK_ALIGNMENT,X.unpackAlignment);const rn=T.getParameter(q.UNPACK_ROW_LENGTH),St=T.getParameter(q.UNPACK_IMAGE_HEIGHT),Rn=T.getParameter(q.UNPACK_SKIP_PIXELS),pt=T.getParameter(q.UNPACK_SKIP_ROWS),wi=T.getParameter(q.UNPACK_SKIP_IMAGES);T.pixelStorei(q.UNPACK_ROW_LENGTH,Bt.width),T.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Bt.height),T.pixelStorei(q.UNPACK_SKIP_PIXELS,Je),T.pixelStorei(q.UNPACK_SKIP_ROWS,lt),T.pixelStorei(q.UNPACK_SKIP_IMAGES,ut);const cr=b.isDataArrayTexture||b.isData3DTexture,bt=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const jt=le.get(b),Ai=le.get(X),Ft=le.get(jt.__renderTarget),mi=le.get(Ai.__renderTarget);T.bindFramebuffer(q.READ_FRAMEBUFFER,Ft.__webglFramebuffer),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Ci=0;Ci<Xe;Ci++)cr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,le.get(b).__webglTexture,te,ut+Ci),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,le.get(X).__webglTexture,Ie,en+Ci)),q.blitFramebuffer(Je,lt,De,Ne,He,yt,De,Ne,q.DEPTH_BUFFER_BIT,q.NEAREST);T.bindFramebuffer(q.READ_FRAMEBUFFER,null),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(te!==0||b.isRenderTargetTexture||le.has(b)){const jt=le.get(b),Ai=le.get(X);T.bindFramebuffer(q.READ_FRAMEBUFFER,Y),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,Q);for(let Ft=0;Ft<Xe;Ft++)cr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,jt.__webglTexture,te,ut+Ft):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,jt.__webglTexture,te),bt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ai.__webglTexture,Ie,en+Ft):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ai.__webglTexture,Ie),te!==0?q.blitFramebuffer(Je,lt,De,Ne,He,yt,De,Ne,q.COLOR_BUFFER_BIT,q.NEAREST):bt?q.copyTexSubImage3D(ke,Ie,He,yt,en+Ft,Je,lt,De,Ne):q.copyTexSubImage2D(ke,Ie,He,yt,Je,lt,De,Ne);T.bindFramebuffer(q.READ_FRAMEBUFFER,null),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else bt?b.isDataTexture||b.isData3DTexture?q.texSubImage3D(ke,Ie,He,yt,en,De,Ne,Xe,Nt,fn,Bt.data):X.isCompressedArrayTexture?q.compressedTexSubImage3D(ke,Ie,He,yt,en,De,Ne,Xe,Nt,Bt.data):q.texSubImage3D(ke,Ie,He,yt,en,De,Ne,Xe,Nt,fn,Bt):b.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ie,He,yt,De,Ne,Nt,fn,Bt.data):b.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ie,He,yt,Bt.width,Bt.height,Nt,Bt.data):q.texSubImage2D(q.TEXTURE_2D,Ie,He,yt,De,Ne,Nt,fn,Bt);T.pixelStorei(q.UNPACK_ROW_LENGTH,rn),T.pixelStorei(q.UNPACK_IMAGE_HEIGHT,St),T.pixelStorei(q.UNPACK_SKIP_PIXELS,Rn),T.pixelStorei(q.UNPACK_SKIP_ROWS,pt),T.pixelStorei(q.UNPACK_SKIP_IMAGES,wi),Ie===0&&X.generateMipmaps&&q.generateMipmap(ke),T.unbindTexture()},this.initRenderTarget=function(b){le.get(b).__webglFramebuffer===void 0&&he.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?he.setTextureCube(b,0):b.isData3DTexture?he.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?he.setTexture2DArray(b,0):he.setTexture2D(b,0),T.unbindTexture()},this.resetState=function(){fe=0,j=0,G=null,T.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const iu=(n,e,t)=>Math.min(Math.max(n,e),t),es=(n,e,t)=>n+(e-n)*t;function KN(){const n=_e.useRef(null),e=lr();return _e.useEffect(()=>{const t=n.current;if(!t)return;const i=window.matchMedia("(max-width: 700px)").matches,o=new xP;o.fog=new Hm("#030516",.14);const a=new fi(i?38:34,1,.1,30);a.position.set(0,0,5.3);const c=new qN({alpha:!0,antialias:!i,powerPreference:"high-performance"});c.setPixelRatio(Math.min(window.devicePixelRatio,i?1.1:1.55)),c.setClearColor(0,0),c.outputColorSpace=ti,t.prepend(c.domElement);const u=new $a;u.position.x=i?.62:.86,o.add(u);const d=new Ns({color:"#58caff",transparent:!0,opacity:.52,blending:bu,depthWrite:!1}),h=new jo(i?5:6.1,i?5:6.1,i?18:30,i?18:30),p=h.attributes.position;for(let j=0;j<p.count;j+=1){const G=p.getX(j),H=p.getY(j);p.setZ(j,-.12*Math.cos(G*1.1)*Math.cos(H*1.2)-Math.hypot(G,H)*.028)}p.needsUpdate=!0,h.computeVertexNormals();const g=new ni(h,d);g.rotation.set(-.06,-.16,.03),g.position.z=-.32,u.add(g);let m=!1;new GP().load("/architecture-reference.png",j=>{if(m){j.dispose();return}j.colorSpace=ti,j.anisotropy=c.capabilities.getMaxAnisotropy(),d.map=j,d.needsUpdate=!0});const M=new ni(new jo(i?5.7:7.1,i?5.7:7.1),new Ns({color:"#443277",transparent:!0,opacity:.055,blending:bu,depthWrite:!1}));M.position.set(.12,-.07,-.85),M.rotation.set(.08,.12,-.04),u.add(M);const w=new ni(new Wm(i?.34:.42,48),new Ns({color:"#030516",transparent:!0,opacity:.95,depthWrite:!1}));w.position.set(.07,.02,.1),u.add(w);const S=new bP(new jn().setFromPoints(new LP(.07,.02,i?.48:.58,i?.48:.58,0,Math.PI*2,!1,0).getPoints(64).map(j=>new J(j.x,j.y,.13))),new qp({color:"#d39aff",transparent:!0,opacity:.38}));u.add(S);const y=[[new J(-2.7,1.38,0),new J(-1.1,1.04,.06),new J(-.28,.27,.14),new J(.07,.02,.16)],[new J(-2.85,-1.22,0),new J(-1.25,-.92,.05),new J(-.42,-.3,.12),new J(.07,.02,.16)],[new J(2.5,1.3,0),new J(1.26,.96,.05),new J(.45,.32,.12),new J(.07,.02,.16)],[new J(2.72,-1.16,0),new J(1.24,-.78,.05),new J(.44,-.24,.12),new J(.07,.02,.16)]],P=[new gt(-.62,.36),new gt(-.62,-.36),new gt(.62,.36),new gt(.62,-.36)],U=y.map((j,G)=>{const H=new DP(j),$=new qp({color:"#62ceff",transparent:!0,opacity:.13}),I=new vM(new jn().setFromPoints(H.getPoints(i?24:42)),$),ie=new ni(new Fu(i?.032:.04,10,10),new Ns({color:"#d7e5ff",transparent:!0,opacity:.78}));return ie.position.copy(j[0]),u.add(I,ie),{curve:H,lineMaterial:$,node:ie,anchor:P[G]}}),R=new ni(new Fu(i?.045:.058,12,12),new Ns({color:"#ffd08a",transparent:!0,opacity:.92}));u.add(R);const L=new jP("#77cfff",i?.55:.85,2.4);R.add(L),o.add(new YP("#22153f",1.3));const D=()=>{const j=t.getBoundingClientRect();c.setSize(Math.max(j.width,1),Math.max(j.height,1),!1),a.aspect=Math.max(j.width,1)/Math.max(j.height,1),a.updateProjectionMatrix()},F=new ResizeObserver(D);F.observe(t),D();const E={x:0,y:0,targetX:0,targetY:0,focus:0,targetFocus:0,activePath:0,targetPath:0},N=j=>{if(e||i||j.pointerType!=="mouse")return;const G=j.clientX/window.innerWidth*2-1,H=-(j.clientY/window.innerHeight*2-1);E.targetX=iu(G,-1,1),E.targetY=iu(H,-1,1);let $=0,I=1/0;U.forEach((ie,Se)=>{const Be=Math.hypot(G-ie.anchor.x,H-ie.anchor.y);Be<I&&(I=Be,$=Se)}),E.targetPath=$,E.targetFocus=iu(1-I/.82,0,1)},B=()=>{E.targetX=0,E.targetY=0,E.targetFocus=0};let V=0;const Z=()=>{const j=Math.max(document.documentElement.scrollHeight-window.innerHeight,1);V=iu(window.scrollY/j,0,1)};window.addEventListener("pointermove",N,{passive:!0}),window.addEventListener("pointerleave",B,{passive:!0}),window.addEventListener("scroll",Z,{passive:!0}),Z();const ne=new KP;ne.connect(document);let Y=0,Q=V;const fe=j=>{ne.update(j);const G=Math.max(ne.getElapsed(),0);E.x=es(E.x,E.targetX,.045),E.y=es(E.y,E.targetY,.045),E.focus=es(E.focus,E.targetFocus,.05),Q=es(Q,V,.035),E.activePath=E.targetPath;const H=e?0:Math.sin(G*.42)*.012,$=Math.max(0,(Q-.82)/.18),I=E.focus+$*.28;u.rotation.x=es(u.rotation.x,E.y*.07,.035),u.rotation.y=es(u.rotation.y,-.16-E.x*.09,.035),u.rotation.z=es(u.rotation.z,(Q-.5)*.06,.03),u.position.y=es(u.position.y,(.5-Q)*.18,.03),u.scale.setScalar(1+H+I*.038),g.material.opacity=.47+I*.19,M.material.opacity=.045+$*.04,S.rotation.z+=e?0:.0014,S.material.opacity=.3+I*.34,U.forEach((Be,ze)=>{const Ge=ze===E.activePath;Be.lineMaterial.opacity=.105+(Ge?I*.62:0);const oe=1+(Ge?I*.85:0);Be.node.scale.setScalar(oe)});const ie=U[E.activePath]??U[0],Se=((G*(.075+I*.13)+E.activePath*.21)%1+1)%1;ie.curve.getPointAt(Se,R.position),R.scale.setScalar(.75+I*.6),R.visible=!e&&(I>.08||!i),c.render(o,a),Y=requestAnimationFrame(fe)};return fe(performance.now()),()=>{m=!0,cancelAnimationFrame(Y),ne.dispose(),F.disconnect(),window.removeEventListener("pointermove",N),window.removeEventListener("pointerleave",B),window.removeEventListener("scroll",Z),o.traverse(j=>{if("geometry"in j&&j.geometry instanceof jn&&j.geometry.dispose(),"material"in j){const G=j.material;(Array.isArray(G)?G:[G]).forEach(H=>{"map"in H&&H.map instanceof Cn&&H.map.dispose(),H.dispose()})}}),c.dispose(),c.domElement.remove()}},[e]),C.jsxs("div",{ref:n,className:"persistent-environment","aria-hidden":"true",children:[C.jsx("span",{className:"persistent-environment__veil"}),C.jsx("span",{className:"persistent-environment__core",children:C.jsx(Lm,{})})]})}const ZN="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_030633_1712fc71-4979-4e14-98f9-9f95702ab3da.mp4";function JN(){return C.jsx("div",{className:"global-video-background","aria-hidden":"true",children:C.jsx("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",children:C.jsx("source",{src:ZN,type:"video/mp4"})})})}function QN(){const[n,e]=_e.useState(!1);return C.jsxs(C.Fragment,{children:[!n&&C.jsx(sb,{onComplete:()=>e(!0)}),C.jsx(JN,{}),C.jsx(KN,{}),C.jsx(yb,{}),C.jsx(xb,{}),C.jsxs("main",{className:n?"site-content is-booted":"site-content","aria-busy":!n,children:[C.jsx(hb,{}),C.jsx(fb,{}),C.jsx(db,{}),C.jsx(rb,{}),C.jsx(_b,{}),C.jsx(gb,{}),C.jsx(cb,{}),C.jsx(ab,{}),C.jsx(ob,{}),C.jsx(ub,{})]})]})}xT.createRoot(document.getElementById("root")).render(C.jsx(_e.StrictMode,{children:C.jsx(QN,{})}));
