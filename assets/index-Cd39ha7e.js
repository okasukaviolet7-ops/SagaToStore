(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ad={exports:{}},Tl={};var uv;function by(){if(uv)return Tl;uv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var g in l)g!=="key"&&(u[g]=l[g])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Tl.Fragment=e,Tl.jsx=i,Tl.jsxs=i,Tl}var cv;function Ay(){return cv||(cv=1,ad.exports=by()),ad.exports}var ne=Ay(),rd={exports:{}},be={};var fv;function Ry(){if(fv)return be;fv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),x=Symbol.iterator;function b(V){return V===null||typeof V!="object"?null:(V=x&&V[x]||V["@@iterator"],typeof V=="function"?V:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,T={};function M(V,it,Mt){this.props=V,this.context=it,this.refs=T,this.updater=Mt||C}M.prototype.isReactComponent={},M.prototype.setState=function(V,it){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,it,"setState")},M.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function P(){}P.prototype=M.prototype;function X(V,it,Mt){this.props=V,this.context=it,this.refs=T,this.updater=Mt||C}var I=X.prototype=new P;I.constructor=X,O(I,M.prototype),I.isPureReactComponent=!0;var Q=Array.isArray;function Y(){}var q={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function z(V,it,Mt){var Pt=Mt.ref;return{$$typeof:o,type:V,key:it,ref:Pt!==void 0?Pt:null,props:Mt}}function B(V,it){return z(V.type,it,V.props)}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===o}function j(V){var it={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(Mt){return it[Mt]})}var K=/\/+/g;function lt(V,it){return typeof V=="object"&&V!==null&&V.key!=null?j(""+V.key):it.toString(36)}function rt(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(Y,Y):(V.status="pending",V.then(function(it){V.status==="pending"&&(V.status="fulfilled",V.value=it)},function(it){V.status==="pending"&&(V.status="rejected",V.reason=it)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function U(V,it,Mt,Pt,kt){var pt=typeof V;(pt==="undefined"||pt==="boolean")&&(V=null);var Rt=!1;if(V===null)Rt=!0;else switch(pt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(V.$$typeof){case o:case e:Rt=!0;break;case S:return Rt=V._init,U(Rt(V._payload),it,Mt,Pt,kt)}}if(Rt)return kt=kt(V),Rt=Pt===""?"."+lt(V,0):Pt,Q(kt)?(Mt="",Rt!=null&&(Mt=Rt.replace(K,"$&/")+"/"),U(kt,it,Mt,"",function(oe){return oe})):kt!=null&&(D(kt)&&(kt=B(kt,Mt+(kt.key==null||V&&V.key===kt.key?"":(""+kt.key).replace(K,"$&/")+"/")+Rt)),it.push(kt)),1;Rt=0;var Ot=Pt===""?".":Pt+":";if(Q(V))for(var te=0;te<V.length;te++)Pt=V[te],pt=Ot+lt(Pt,te),Rt+=U(Pt,it,Mt,pt,kt);else if(te=b(V),typeof te=="function")for(V=te.call(V),te=0;!(Pt=V.next()).done;)Pt=Pt.value,pt=Ot+lt(Pt,te++),Rt+=U(Pt,it,Mt,pt,kt);else if(pt==="object"){if(typeof V.then=="function")return U(rt(V),it,Mt,Pt,kt);throw it=String(V),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function F(V,it,Mt){if(V==null)return V;var Pt=[],kt=0;return U(V,Pt,"","",function(pt){return it.call(Mt,pt,kt++)}),Pt}function at(V){if(V._status===-1){var it=V._result;it=it(),it.then(function(Mt){(V._status===0||V._status===-1)&&(V._status=1,V._result=Mt)},function(Mt){(V._status===0||V._status===-1)&&(V._status=2,V._result=Mt)}),V._status===-1&&(V._status=0,V._result=it)}if(V._status===1)return V._result.default;throw V._result}var ct=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)},bt={map:F,forEach:function(V,it,Mt){F(V,function(){it.apply(this,arguments)},Mt)},count:function(V){var it=0;return F(V,function(){it++}),it},toArray:function(V){return F(V,function(it){return it})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return be.Activity=E,be.Children=bt,be.Component=M,be.Fragment=i,be.Profiler=l,be.PureComponent=X,be.StrictMode=r,be.Suspense=v,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,be.__COMPILER_RUNTIME={__proto__:null,c:function(V){return q.H.useMemoCache(V)}},be.cache=function(V){return function(){return V.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(V,it,Mt){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var Pt=O({},V.props),kt=V.key;if(it!=null)for(pt in it.key!==void 0&&(kt=""+it.key),it)!w.call(it,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&it.ref===void 0||(Pt[pt]=it[pt]);var pt=arguments.length-2;if(pt===1)Pt.children=Mt;else if(1<pt){for(var Rt=Array(pt),Ot=0;Ot<pt;Ot++)Rt[Ot]=arguments[Ot+2];Pt.children=Rt}return z(V.type,kt,Pt)},be.createContext=function(V){return V={$$typeof:d,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:u,_context:V},V},be.createElement=function(V,it,Mt){var Pt,kt={},pt=null;if(it!=null)for(Pt in it.key!==void 0&&(pt=""+it.key),it)w.call(it,Pt)&&Pt!=="key"&&Pt!=="__self"&&Pt!=="__source"&&(kt[Pt]=it[Pt]);var Rt=arguments.length-2;if(Rt===1)kt.children=Mt;else if(1<Rt){for(var Ot=Array(Rt),te=0;te<Rt;te++)Ot[te]=arguments[te+2];kt.children=Ot}if(V&&V.defaultProps)for(Pt in Rt=V.defaultProps,Rt)kt[Pt]===void 0&&(kt[Pt]=Rt[Pt]);return z(V,pt,kt)},be.createRef=function(){return{current:null}},be.forwardRef=function(V){return{$$typeof:g,render:V}},be.isValidElement=D,be.lazy=function(V){return{$$typeof:S,_payload:{_status:-1,_result:V},_init:at}},be.memo=function(V,it){return{$$typeof:p,type:V,compare:it===void 0?null:it}},be.startTransition=function(V){var it=q.T,Mt={};q.T=Mt;try{var Pt=V(),kt=q.S;kt!==null&&kt(Mt,Pt),typeof Pt=="object"&&Pt!==null&&typeof Pt.then=="function"&&Pt.then(Y,ct)}catch(pt){ct(pt)}finally{it!==null&&Mt.types!==null&&(it.types=Mt.types),q.T=it}},be.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},be.use=function(V){return q.H.use(V)},be.useActionState=function(V,it,Mt){return q.H.useActionState(V,it,Mt)},be.useCallback=function(V,it){return q.H.useCallback(V,it)},be.useContext=function(V){return q.H.useContext(V)},be.useDebugValue=function(){},be.useDeferredValue=function(V,it){return q.H.useDeferredValue(V,it)},be.useEffect=function(V,it){return q.H.useEffect(V,it)},be.useEffectEvent=function(V){return q.H.useEffectEvent(V)},be.useId=function(){return q.H.useId()},be.useImperativeHandle=function(V,it,Mt){return q.H.useImperativeHandle(V,it,Mt)},be.useInsertionEffect=function(V,it){return q.H.useInsertionEffect(V,it)},be.useLayoutEffect=function(V,it){return q.H.useLayoutEffect(V,it)},be.useMemo=function(V,it){return q.H.useMemo(V,it)},be.useOptimistic=function(V,it){return q.H.useOptimistic(V,it)},be.useReducer=function(V,it,Mt){return q.H.useReducer(V,it,Mt)},be.useRef=function(V){return q.H.useRef(V)},be.useState=function(V){return q.H.useState(V)},be.useSyncExternalStore=function(V,it,Mt){return q.H.useSyncExternalStore(V,it,Mt)},be.useTransition=function(){return q.H.useTransition()},be.version="19.2.3",be}var hv;function Ip(){return hv||(hv=1,rd.exports=Ry()),rd.exports}var An=Ip(),sd={exports:{}},bl={},od={exports:{}},ld={};var dv;function Cy(){return dv||(dv=1,(function(o){function e(U,F){var at=U.length;U.push(F);t:for(;0<at;){var ct=at-1>>>1,bt=U[ct];if(0<l(bt,F))U[ct]=F,U[at]=bt,at=ct;else break t}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var F=U[0],at=U.pop();if(at!==F){U[0]=at;t:for(var ct=0,bt=U.length,V=bt>>>1;ct<V;){var it=2*(ct+1)-1,Mt=U[it],Pt=it+1,kt=U[Pt];if(0>l(Mt,at))Pt<bt&&0>l(kt,Mt)?(U[ct]=kt,U[Pt]=at,ct=Pt):(U[ct]=Mt,U[it]=at,ct=it);else if(Pt<bt&&0>l(kt,at))U[ct]=kt,U[Pt]=at,ct=Pt;else break t}}return F}function l(U,F){var at=U.sortIndex-F.sortIndex;return at!==0?at:U.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,g=d.now();o.unstable_now=function(){return d.now()-g}}var v=[],p=[],S=1,E=null,x=3,b=!1,C=!1,O=!1,T=!1,M=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function I(U){for(var F=i(p);F!==null;){if(F.callback===null)r(p);else if(F.startTime<=U)r(p),F.sortIndex=F.expirationTime,e(v,F);else break;F=i(p)}}function Q(U){if(O=!1,I(U),!C)if(i(v)!==null)C=!0,Y||(Y=!0,j());else{var F=i(p);F!==null&&rt(Q,F.startTime-U)}}var Y=!1,q=-1,w=5,z=-1;function B(){return T?!0:!(o.unstable_now()-z<w)}function D(){if(T=!1,Y){var U=o.unstable_now();z=U;var F=!0;try{t:{C=!1,O&&(O=!1,P(q),q=-1),b=!0;var at=x;try{e:{for(I(U),E=i(v);E!==null&&!(E.expirationTime>U&&B());){var ct=E.callback;if(typeof ct=="function"){E.callback=null,x=E.priorityLevel;var bt=ct(E.expirationTime<=U);if(U=o.unstable_now(),typeof bt=="function"){E.callback=bt,I(U),F=!0;break e}E===i(v)&&r(v),I(U)}else r(v);E=i(v)}if(E!==null)F=!0;else{var V=i(p);V!==null&&rt(Q,V.startTime-U),F=!1}}break t}finally{E=null,x=at,b=!1}F=void 0}}finally{F?j():Y=!1}}}var j;if(typeof X=="function")j=function(){X(D)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,lt=K.port2;K.port1.onmessage=D,j=function(){lt.postMessage(null)}}else j=function(){M(D,0)};function rt(U,F){q=M(function(){U(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(U){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var at=x;x=F;try{return U()}finally{x=at}},o.unstable_requestPaint=function(){T=!0},o.unstable_runWithPriority=function(U,F){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var at=x;x=U;try{return F()}finally{x=at}},o.unstable_scheduleCallback=function(U,F,at){var ct=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?ct+at:ct):at=ct,U){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=at+bt,U={id:S++,callback:F,priorityLevel:U,startTime:at,expirationTime:bt,sortIndex:-1},at>ct?(U.sortIndex=at,e(p,U),i(v)===null&&U===i(p)&&(O?(P(q),q=-1):O=!0,rt(Q,at-ct))):(U.sortIndex=bt,e(v,U),C||b||(C=!0,Y||(Y=!0,j()))),U},o.unstable_shouldYield=B,o.unstable_wrapCallback=function(U){var F=x;return function(){var at=x;x=F;try{return U.apply(this,arguments)}finally{x=at}}}})(ld)),ld}var pv;function wy(){return pv||(pv=1,od.exports=Cy()),od.exports}var ud={exports:{}},ai={};var mv;function Dy(){if(mv)return ai;mv=1;var o=Ip();function e(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(v,p,S){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:E==null?null:""+E,children:v,containerInfo:p,implementation:S}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ai.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,ai.createPortal=function(v,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(v,p,null,S)},ai.flushSync=function(v){var p=d.T,S=r.p;try{if(d.T=null,r.p=2,v)return v()}finally{d.T=p,r.p=S,r.d.f()}},ai.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(v,p))},ai.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},ai.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var S=p.as,E=g(S,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:E,integrity:x,fetchPriority:b}):S==="script"&&r.d.X(v,{crossOrigin:E,integrity:x,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ai.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=g(p.as,p.crossOrigin);r.d.M(v,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(v)},ai.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,E=g(S,p.crossOrigin);r.d.L(v,S,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ai.preloadModule=function(v,p){if(typeof v=="string")if(p){var S=g(p.as,p.crossOrigin);r.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(v)},ai.requestFormReset=function(v){r.d.r(v)},ai.unstable_batchedUpdates=function(v,p){return v(p)},ai.useFormState=function(v,p,S){return d.H.useFormState(v,p,S)},ai.useFormStatus=function(){return d.H.useHostTransitionStatus()},ai.version="19.2.3",ai}var gv;function Uy(){if(gv)return ud.exports;gv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ud.exports=Dy(),ud.exports}var vv;function Ly(){if(vv)return bl;vv=1;var o=wy(),e=Ip(),i=Uy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function v(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return v(c),t;if(h===s)return v(c),n;h=h.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=h;else{for(var y=!1,L=c.child;L;){if(L===a){y=!0,a=c,s=h;break}if(L===s){y=!0,s=c,a=h;break}L=L.sibling}if(!y){for(L=h.child;L;){if(L===a){y=!0,a=h,s=c;break}if(L===s){y=!0,s=h,a=c;break}L=L.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var E=Object.assign,x=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),X=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),B=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=D&&t[D]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case Q:return"Suspense";case Y:return"SuspenseList";case z:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case X:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case I:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case q:return n=t.displayName||null,n!==null?n:lt(t.type)||"Memo";case w:n=t._payload,t=t._init;try{return lt(t(n))}catch{}}return null}var rt=Array.isArray,U=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},ct=[],bt=-1;function V(t){return{current:t}}function it(t){0>bt||(t.current=ct[bt],ct[bt]=null,bt--)}function Mt(t,n){bt++,ct[bt]=t.current,t.current=n}var Pt=V(null),kt=V(null),pt=V(null),Rt=V(null);function Ot(t,n){switch(Mt(pt,n),Mt(kt,t),Mt(Pt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?L0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=L0(n),t=N0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}it(Pt),Mt(Pt,t)}function te(){it(Pt),it(kt),it(pt)}function oe(t){t.memoizedState!==null&&Mt(Rt,t);var n=Pt.current,a=N0(n,t.type);n!==a&&(Mt(kt,t),Mt(Pt,a))}function ce(t){kt.current===t&&(it(Pt),it(kt)),Rt.current===t&&(it(Rt),yl._currentValue=at)}var vn,fe;function pe(t){if(vn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);vn=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vn+t+fe}var Ve=!1;function Ee(t,n){if(!t||Ve)return"";Ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Ct=function(){throw Error()};if(Object.defineProperty(Ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ct,[])}catch(xt){var gt=xt}Reflect.construct(t,[],Ct)}else{try{Ct.call()}catch(xt){gt=xt}t.call(Ct.prototype)}}else{try{throw Error()}catch(xt){gt=xt}(Ct=t())&&typeof Ct.catch=="function"&&Ct.catch(function(){})}}catch(xt){if(xt&&gt&&typeof xt.stack=="string")return[xt.stack,gt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),y=h[0],L=h[1];if(y&&L){var Z=y.split(`
`),dt=L.split(`
`);for(c=s=0;s<Z.length&&!Z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<dt.length&&!dt[c].includes("DetermineComponentFrameRoot");)c++;if(s===Z.length||c===dt.length)for(s=Z.length-1,c=dt.length-1;1<=s&&0<=c&&Z[s]!==dt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(Z[s]!==dt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||Z[s]!==dt[c]){var Tt=`
`+Z[s].replace(" at new "," at ");return t.displayName&&Tt.includes("<anonymous>")&&(Tt=Tt.replace("<anonymous>",t.displayName)),Tt}while(1<=s&&0<=c);break}}}finally{Ve=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?pe(a):""}function dn(t,n){switch(t.tag){case 26:case 27:case 5:return pe(t.type);case 16:return pe("Lazy");case 13:return t.child!==n&&n!==null?pe("Suspense Fallback"):pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return Ee(t.type,!1);case 11:return Ee(t.type.render,!1);case 1:return Ee(t.type,!0);case 31:return pe("Activity");default:return""}}function J(t){try{var n="",a=null;do n+=dn(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var un=Object.prototype.hasOwnProperty,Ne=o.unstable_scheduleCallback,Xe=o.unstable_cancelCallback,ie=o.unstable_shouldYield,G=o.unstable_requestPaint,A=o.unstable_now,st=o.unstable_getCurrentPriorityLevel,Et=o.unstable_ImmediatePriority,wt=o.unstable_UserBlockingPriority,St=o.unstable_NormalPriority,ee=o.unstable_LowPriority,zt=o.unstable_IdlePriority,le=o.log,me=o.unstable_setDisableYieldValue,Dt=null,Ut=null;function Yt(t){if(typeof le=="function"&&me(t),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(Dt,t)}catch{}}var Xt=Math.clz32?Math.clz32:tt,Zt=Math.log,Te=Math.LN2;function tt(t){return t>>>=0,t===0?32:31-(Zt(t)/Te|0)|0}var Bt=256,Ft=262144,Kt=4194304;function Lt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function yt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,h=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var L=s&134217727;return L!==0?(s=L&~h,s!==0?c=Lt(s):(y&=L,y!==0?c=Lt(y):a||(a=L&~t,a!==0&&(c=Lt(a))))):(L=s&~h,L!==0?c=Lt(L):y!==0?c=Lt(y):a||(a=s&~t,a!==0&&(c=Lt(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Wt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ve(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function je(){var t=Kt;return Kt<<=1,(Kt&62914560)===0&&(Kt=4194304),t}function Le(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Un(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ri(t,n,a,s,c,h){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var L=t.entanglements,Z=t.expirationTimes,dt=t.hiddenUpdates;for(a=y&~a;0<a;){var Tt=31-Xt(a),Ct=1<<Tt;L[Tt]=0,Z[Tt]=-1;var gt=dt[Tt];if(gt!==null)for(dt[Tt]=null,Tt=0;Tt<gt.length;Tt++){var xt=gt[Tt];xt!==null&&(xt.lane&=-536870913)}a&=~Ct}s!==0&&Gi(t,s,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~(y&~n))}function Gi(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Xt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function ur(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Xt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function pi(t,n){var a=n&-n;return a=(a&42)!==0?1:mi(a),(a&(t.suspendedLanes|n))!==0?0:a}function mi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function La(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qe(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:nv(t.type))}function Zn(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var ui=Math.random().toString(36).slice(2),Mn="__reactFiber$"+ui,_n="__reactProps$"+ui,Ci="__reactContainer$"+ui,wi="__reactEvents$"+ui,ga="__reactListeners$"+ui,Kr="__reactHandles$"+ui,cr="__reactResources$"+ui,ra="__reactMarker$"+ui;function fr(t){delete t[Mn],delete t[_n],delete t[wi],delete t[ga],delete t[Kr]}function Ln(t){var n=t[Mn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ci]||a[Mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=H0(t);t!==null;){if(a=t[Mn])return a;t=H0(t)}return n}t=a,a=t.parentNode}return null}function Hn(t){if(t=t[Mn]||t[Ci]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Di(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function N(t){var n=t[cr];return n||(n=t[cr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function et(t){t[ra]=!0}var _t=new Set,ft={};function ut(t,n){Ht(t,n),Ht(t+"Capture",n)}function Ht(t,n){for(ft[t]=n,t=0;t<n.length;t++)_t.add(n[t])}var Qt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},Jt={};function re(t){return un.call(Jt,t)?!0:un.call(It,t)?!1:Qt.test(t)?Jt[t]=!0:(It[t]=!0,!1)}function _e(t,n,a){if(re(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ye(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function $t(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Ae(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cn(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fn(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ie(t){if(!t._valueTracker){var n=cn(t)?"checked":"value";t._valueTracker=fn(t,n,""+t[n])}}function En(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=cn(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Wn=/[\n"\\]/g;function Se(t){return t.replace(Wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Nn(t,n,a,s,c,h,y,L){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ae(n)):t.value!==""+Ae(n)&&(t.value=""+Ae(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?gi(t,y,Ae(n)):a!=null?gi(t,y,Ae(a)):s!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?t.name=""+Ae(L):t.removeAttribute("name")}function ii(t,n,a,s,c,h,y,L){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Ie(t);return}a=a!=null?""+Ae(a):"",n=n!=null?""+Ae(n):a,L||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=L?t.checked:!!s,t.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),Ie(t)}function gi(t,n,a){n==="number"&&Vt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ci(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Ae(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ye(t,n,a){if(n!=null&&(n=""+Ae(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ae(a):""}function yn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(rt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Ae(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Ie(t)}function jn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var pn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vi(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||pn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&vi(t,c,s)}else for(var h in n)n.hasOwnProperty(h)&&vi(t,h,n[h])}function Xi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $c=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ds(t){return tf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function sa(){}var Qr=null;function Na(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hr=null,dr=null;function Vl(t){var n=Hn(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(Nn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[_n]||null;if(!c)throw Error(r(90));Nn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&En(s)}break t;case"textarea":Ye(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ci(t,!!a.multiple,n,!1)}}}var Bo=!1;function Us(t,n,a){if(Bo)return t(n,a);Bo=!0;try{var s=t(n);return s}finally{if(Bo=!1,(hr!==null||dr!==null)&&(Fu(),hr&&(n=hr,t=dr,dr=hr=null,Vl(n),t)))for(n=0;n<t.length;n++)Vl(t[n])}}function pr(t,n){var a=t.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oa=!1;if(ki)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{Oa=!1}var va=null,Io=null,Jr=null;function zo(){if(Jr)return Jr;var t,n=Io,a=n.length,s,c="value"in va?va.value:va.textContent,h=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(s=1;s<=y&&n[a-s]===c[h-s];s++);return Jr=c.slice(t,1<s?1-s:void 0)}function mr(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function gr(){return!0}function Pa(){return!1}function Qn(t){function n(a,s,c,h,y){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(a=t[L],this[L]=a?a(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?gr:Pa,this.isPropagationStopped=Pa,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gr)},persist:function(){},isPersistent:gr}),n}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=Qn(oa),vr=E({},oa,{view:0,detail:0}),_r=Qn(vr),Ns,Os,$r,ts=E({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Go,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$r&&($r&&t.type==="mousemove"?(Ns=t.screenX-$r.screenX,Os=t.screenY-$r.screenY):Os=Ns=0,$r=t),Ns)},movementY:function(t){return"movementY"in t?t.movementY:Os}}),es=Qn(ts),Xl=E({},ts,{dataTransfer:0}),ef=Qn(Xl),kl=E({},vr,{relatedTarget:0}),Ps=Qn(kl),Wl=E({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),jl=Qn(Wl),Ho=E({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ql=Qn(Ho),nf=E({},oa,{data:0}),Yl=Qn(nf),af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sf(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Zl[t])?!!n[t]:!1}function Go(){return sf}var Vo=E({},vr,{key:function(t){if(t.key){var n=af[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=mr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rf[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Go,charCode:function(t){return t.type==="keypress"?mr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),of=Qn(Vo),lf=E({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kl=Qn(lf),Fs=E({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Go}),uf=Qn(Fs),cf=E({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ff=Qn(cf),Ql=E({},ts,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jl=Qn(Ql),f=E({},oa,{newState:0,oldState:0}),m=Qn(f),_=[9,13,27,32],R=ki&&"CompositionEvent"in window,H=null;ki&&"documentMode"in document&&(H=document.documentMode);var W=ki&&"TextEvent"in window&&!H,k=ki&&(!R||H&&8<H&&11>=H),nt=" ",vt=!1;function Nt(t,n){switch(t){case"keyup":return _.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gt(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var he=!1;function ue(t,n){switch(t){case"compositionend":return Gt(n);case"keypress":return n.which!==32?null:(vt=!0,nt);case"textInput":return t=n.data,t===nt&&vt?null:t;default:return null}}function qt(t,n){if(he)return t==="compositionend"||!R&&Nt(t,n)?(t=zo(),Jr=Io=va=null,he=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return k&&n.locale!=="ko"?null:n.data;default:return null}}var xe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Re(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!xe[t.type]:n==="textarea"}function an(t,n,a,s){hr?dr?dr.push(s):dr=[s]:hr=s,n=Xu(n,"onChange"),0<n.length&&(a=new Ls("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ze=null,Sn=null;function _i(t){A0(t,0)}function Gn(t){var n=Di(t);if(En(n))return t}function ze(t,n){if(t==="change")return n}var On=!1;if(ki){var Wi;if(ki){var Xo="oninput"in document;if(!Xo){var $l=document.createElement("div");$l.setAttribute("oninput","return;"),Xo=typeof $l.oninput=="function"}Wi=Xo}else Wi=!1;On=Wi&&(!document.documentMode||9<document.documentMode)}function tu(){Ze&&(Ze.detachEvent("onpropertychange",eu),Sn=Ze=null)}function eu(t){if(t.propertyName==="value"&&Gn(Sn)){var n=[];an(n,Sn,t,Na(t)),Us(_i,n)}}function hf(t,n,a){t==="focusin"?(tu(),Ze=n,Sn=a,Ze.attachEvent("onpropertychange",eu)):t==="focusout"&&tu()}function Bs(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gn(Sn)}function ex(t,n){if(t==="click")return Gn(n)}function nx(t,n){if(t==="input"||t==="change")return Gn(n)}function ix(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Ui=typeof Object.is=="function"?Object.is:ix;function ko(t,n){if(Ui(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!un.call(n,c)||!Ui(t[c],n[c]))return!1}return!0}function Kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qp(t,n){var a=Kp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Kp(a)}}function Jp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Jp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function $p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Vt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Vt(t.document)}return n}function df(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ax=ki&&"documentMode"in document&&11>=document.documentMode,Is=null,pf=null,Wo=null,mf=!1;function tm(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mf||Is==null||Is!==Vt(s)||(s=Is,"selectionStart"in s&&df(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Wo&&ko(Wo,s)||(Wo=s,s=Xu(pf,"onSelect"),0<s.length&&(n=new Ls("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Is)))}function ns(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var zs={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},gf={},em={};ki&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function is(t){if(gf[t])return gf[t];if(!zs[t])return t;var n=zs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in em)return gf[t]=n[a];return t}var nm=is("animationend"),im=is("animationiteration"),am=is("animationstart"),rx=is("transitionrun"),sx=is("transitionstart"),ox=is("transitioncancel"),rm=is("transitionend"),sm=new Map,vf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vf.push("scrollEnd");function la(t,n){sm.set(t,n),ut(n,[t])}var nu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ji=[],Hs=0,_f=0;function iu(){for(var t=Hs,n=_f=Hs=0;n<t;){var a=ji[n];ji[n++]=null;var s=ji[n];ji[n++]=null;var c=ji[n];ji[n++]=null;var h=ji[n];if(ji[n++]=null,s!==null&&c!==null){var y=s.pending;y===null?c.next=c:(c.next=y.next,y.next=c),s.pending=c}h!==0&&om(a,c,h)}}function au(t,n,a,s){ji[Hs++]=t,ji[Hs++]=n,ji[Hs++]=a,ji[Hs++]=s,_f|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function xf(t,n,a,s){return au(t,n,a,s),ru(t)}function as(t,n){return au(t,null,null,n),ru(t)}function om(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,h=t.return;h!==null;)h.childLanes|=a,s=h.alternate,s!==null&&(s.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,c&&n!==null&&(c=31-Xt(a),t=h.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),h):null}function ru(t){if(50<dl)throw dl=0,Ch=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gs={};function lx(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Li(t,n,a,s){return new lx(t,n,a,s)}function yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fa(t,n){var a=t.alternate;return a===null?(a=Li(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function lm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function su(t,n,a,s,c,h){var y=0;if(s=t,typeof t=="function")yf(t)&&(y=1);else if(typeof t=="string")y=dy(t,a,Pt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case z:return t=Li(31,a,n,c),t.elementType=z,t.lanes=h,t;case O:return rs(a.children,c,h,n);case T:y=8,c|=24;break;case M:return t=Li(12,a,n,c|2),t.elementType=M,t.lanes=h,t;case Q:return t=Li(13,a,n,c),t.elementType=Q,t.lanes=h,t;case Y:return t=Li(19,a,n,c),t.elementType=Y,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case X:y=10;break t;case P:y=9;break t;case I:y=11;break t;case q:y=14;break t;case w:y=16,s=null;break t}y=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Li(y,a,n,c),n.elementType=t,n.type=s,n.lanes=h,n}function rs(t,n,a,s){return t=Li(7,t,s,n),t.lanes=a,t}function Sf(t,n,a){return t=Li(6,t,null,n),t.lanes=a,t}function um(t){var n=Li(18,null,null,0);return n.stateNode=t,n}function Mf(t,n,a){return n=Li(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var cm=new WeakMap;function qi(t,n){if(typeof t=="object"&&t!==null){var a=cm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:J(n)},cm.set(t,n),n)}return{value:t,source:n,stack:J(n)}}var Vs=[],Xs=0,ou=null,jo=0,Yi=[],Zi=0,xr=null,_a=1,xa="";function Ba(t,n){Vs[Xs++]=jo,Vs[Xs++]=ou,ou=t,jo=n}function fm(t,n,a){Yi[Zi++]=_a,Yi[Zi++]=xa,Yi[Zi++]=xr,xr=t;var s=_a;t=xa;var c=32-Xt(s)-1;s&=~(1<<c),a+=1;var h=32-Xt(n)+c;if(30<h){var y=c-c%5;h=(s&(1<<y)-1).toString(32),s>>=y,c-=y,_a=1<<32-Xt(n)+c|a<<c|s,xa=h+t}else _a=1<<h|a<<c|s,xa=t}function Ef(t){t.return!==null&&(Ba(t,1),fm(t,1,0))}function Tf(t){for(;t===ou;)ou=Vs[--Xs],Vs[Xs]=null,jo=Vs[--Xs],Vs[Xs]=null;for(;t===xr;)xr=Yi[--Zi],Yi[Zi]=null,xa=Yi[--Zi],Yi[Zi]=null,_a=Yi[--Zi],Yi[Zi]=null}function hm(t,n){Yi[Zi++]=_a,Yi[Zi++]=xa,Yi[Zi++]=xr,_a=n.id,xa=n.overflow,xr=t}var Jn=null,mn=null,He=!1,yr=null,Ki=!1,bf=Error(r(519));function Sr(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qo(qi(n,t)),bf}function dm(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Mn]=t,n[_n]=s,a){case"dialog":Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":case"embed":Pe("load",n);break;case"video":case"audio":for(a=0;a<ml.length;a++)Pe(ml[a],n);break;case"source":Pe("error",n);break;case"img":case"image":case"link":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"input":Pe("invalid",n),ii(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Pe("invalid",n);break;case"textarea":Pe("invalid",n),yn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||D0(n.textContent,a)?(s.popover!=null&&(Pe("beforetoggle",n),Pe("toggle",n)),s.onScroll!=null&&Pe("scroll",n),s.onScrollEnd!=null&&Pe("scrollend",n),s.onClick!=null&&(n.onclick=sa),n=!0):n=!1,n||Sr(t,!0)}function pm(t){for(Jn=t.return;Jn;)switch(Jn.tag){case 5:case 31:case 13:Ki=!1;return;case 27:case 3:Ki=!0;return;default:Jn=Jn.return}}function ks(t){if(t!==Jn)return!1;if(!He)return pm(t),He=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Xh(t.type,t.memoizedProps)),a=!a),a&&mn&&Sr(t),pm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));mn=z0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));mn=z0(t)}else n===27?(n=mn,Pr(t.type)?(t=Yh,Yh=null,mn=t):mn=n):mn=Jn?Ji(t.stateNode.nextSibling):null;return!0}function ss(){mn=Jn=null,He=!1}function Af(){var t=yr;return t!==null&&(Mi===null?Mi=t:Mi.push.apply(Mi,t),yr=null),t}function qo(t){yr===null?yr=[t]:yr.push(t)}var Rf=V(null),os=null,Ia=null;function Mr(t,n,a){Mt(Rf,n._currentValue),n._currentValue=a}function za(t){t._currentValue=Rf.current,it(Rf)}function Cf(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function wf(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var y=c.child;h=h.firstContext;t:for(;h!==null;){var L=h;h=c;for(var Z=0;Z<n.length;Z++)if(L.context===n[Z]){h.lanes|=a,L=h.alternate,L!==null&&(L.lanes|=a),Cf(h.return,a,t),s||(y=null);break t}h=L.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),Cf(y,a,t),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Ws(t,n,a,s){t=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var L=c.type;Ui(c.pendingProps.value,y.value)||(t!==null?t.push(L):t=[L])}}else if(c===Rt.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(yl):t=[yl])}c=c.return}t!==null&&wf(n,t,a,s),n.flags|=262144}function lu(t){for(t=t.firstContext;t!==null;){if(!Ui(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ls(t){os=t,Ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $n(t){return mm(os,t)}function uu(t,n){return os===null&&ls(t),mm(t,n)}function mm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ia===null){if(t===null)throw Error(r(308));Ia=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ia=Ia.next=n;return a}var ux=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},cx=o.unstable_scheduleCallback,fx=o.unstable_NormalPriority,Pn={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Df(){return{controller:new ux,data:new Map,refCount:0}}function Yo(t){t.refCount--,t.refCount===0&&cx(fx,function(){t.controller.abort()})}var Zo=null,Uf=0,js=0,qs=null;function hx(t,n){if(Zo===null){var a=Zo=[];Uf=0,js=Oh(),qs={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Uf++,n.then(gm,gm),n}function gm(){if(--Uf===0&&Zo!==null){qs!==null&&(qs.status="fulfilled");var t=Zo;Zo=null,js=0,qs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function dx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var vm=U.S;U.S=function(t,n){t0=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&hx(t,n),vm!==null&&vm(t,n)};var us=V(null);function Lf(){var t=us.current;return t!==null?t:hn.pooledCache}function cu(t,n){n===null?Mt(us,us.current):Mt(us,n.pool)}function _m(){var t=Lf();return t===null?null:{parent:Pn._currentValue,pool:t}}var Ys=Error(r(460)),Nf=Error(r(474)),fu=Error(r(542)),hu={then:function(){}};function xm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ym(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(sa,sa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mm(t),t;default:if(typeof n.status=="string")n.then(sa,sa);else{if(t=hn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Mm(t),t}throw fs=n,Ys}}function cs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fs=a,Ys):a}}var fs=null;function Sm(){if(fs===null)throw Error(r(459));var t=fs;return fs=null,t}function Mm(t){if(t===Ys||t===fu)throw Error(r(483))}var Zs=null,Ko=0;function du(t){var n=Ko;return Ko+=1,Zs===null&&(Zs=[]),ym(Zs,t,n)}function Qo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function pu(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Em(t){function n(ot,$){if(t){var ht=ot.deletions;ht===null?(ot.deletions=[$],ot.flags|=16):ht.push($)}}function a(ot,$){if(!t)return null;for(;$!==null;)n(ot,$),$=$.sibling;return null}function s(ot){for(var $=new Map;ot!==null;)ot.key!==null?$.set(ot.key,ot):$.set(ot.index,ot),ot=ot.sibling;return $}function c(ot,$){return ot=Fa(ot,$),ot.index=0,ot.sibling=null,ot}function h(ot,$,ht){return ot.index=ht,t?(ht=ot.alternate,ht!==null?(ht=ht.index,ht<$?(ot.flags|=67108866,$):ht):(ot.flags|=67108866,$)):(ot.flags|=1048576,$)}function y(ot){return t&&ot.alternate===null&&(ot.flags|=67108866),ot}function L(ot,$,ht,At){return $===null||$.tag!==6?($=Sf(ht,ot.mode,At),$.return=ot,$):($=c($,ht),$.return=ot,$)}function Z(ot,$,ht,At){var de=ht.type;return de===O?Tt(ot,$,ht.props.children,At,ht.key):$!==null&&($.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===w&&cs(de)===$.type)?($=c($,ht.props),Qo($,ht),$.return=ot,$):($=su(ht.type,ht.key,ht.props,null,ot.mode,At),Qo($,ht),$.return=ot,$)}function dt(ot,$,ht,At){return $===null||$.tag!==4||$.stateNode.containerInfo!==ht.containerInfo||$.stateNode.implementation!==ht.implementation?($=Mf(ht,ot.mode,At),$.return=ot,$):($=c($,ht.children||[]),$.return=ot,$)}function Tt(ot,$,ht,At,de){return $===null||$.tag!==7?($=rs(ht,ot.mode,At,de),$.return=ot,$):($=c($,ht),$.return=ot,$)}function Ct(ot,$,ht){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=Sf(""+$,ot.mode,ht),$.return=ot,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case b:return ht=su($.type,$.key,$.props,null,ot.mode,ht),Qo(ht,$),ht.return=ot,ht;case C:return $=Mf($,ot.mode,ht),$.return=ot,$;case w:return $=cs($),Ct(ot,$,ht)}if(rt($)||j($))return $=rs($,ot.mode,ht,null),$.return=ot,$;if(typeof $.then=="function")return Ct(ot,du($),ht);if($.$$typeof===X)return Ct(ot,uu(ot,$),ht);pu(ot,$)}return null}function gt(ot,$,ht,At){var de=$!==null?$.key:null;if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return de!==null?null:L(ot,$,""+ht,At);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case b:return ht.key===de?Z(ot,$,ht,At):null;case C:return ht.key===de?dt(ot,$,ht,At):null;case w:return ht=cs(ht),gt(ot,$,ht,At)}if(rt(ht)||j(ht))return de!==null?null:Tt(ot,$,ht,At,null);if(typeof ht.then=="function")return gt(ot,$,du(ht),At);if(ht.$$typeof===X)return gt(ot,$,uu(ot,ht),At);pu(ot,ht)}return null}function xt(ot,$,ht,At,de){if(typeof At=="string"&&At!==""||typeof At=="number"||typeof At=="bigint")return ot=ot.get(ht)||null,L($,ot,""+At,de);if(typeof At=="object"&&At!==null){switch(At.$$typeof){case b:return ot=ot.get(At.key===null?ht:At.key)||null,Z($,ot,At,de);case C:return ot=ot.get(At.key===null?ht:At.key)||null,dt($,ot,At,de);case w:return At=cs(At),xt(ot,$,ht,At,de)}if(rt(At)||j(At))return ot=ot.get(ht)||null,Tt($,ot,At,de,null);if(typeof At.then=="function")return xt(ot,$,ht,du(At),de);if(At.$$typeof===X)return xt(ot,$,ht,uu($,At),de);pu($,At)}return null}function ae(ot,$,ht,At){for(var de=null,Ke=null,se=$,we=$=0,Be=null;se!==null&&we<ht.length;we++){se.index>we?(Be=se,se=null):Be=se.sibling;var Qe=gt(ot,se,ht[we],At);if(Qe===null){se===null&&(se=Be);break}t&&se&&Qe.alternate===null&&n(ot,se),$=h(Qe,$,we),Ke===null?de=Qe:Ke.sibling=Qe,Ke=Qe,se=Be}if(we===ht.length)return a(ot,se),He&&Ba(ot,we),de;if(se===null){for(;we<ht.length;we++)se=Ct(ot,ht[we],At),se!==null&&($=h(se,$,we),Ke===null?de=se:Ke.sibling=se,Ke=se);return He&&Ba(ot,we),de}for(se=s(se);we<ht.length;we++)Be=xt(se,ot,we,ht[we],At),Be!==null&&(t&&Be.alternate!==null&&se.delete(Be.key===null?we:Be.key),$=h(Be,$,we),Ke===null?de=Be:Ke.sibling=Be,Ke=Be);return t&&se.forEach(function(Hr){return n(ot,Hr)}),He&&Ba(ot,we),de}function ge(ot,$,ht,At){if(ht==null)throw Error(r(151));for(var de=null,Ke=null,se=$,we=$=0,Be=null,Qe=ht.next();se!==null&&!Qe.done;we++,Qe=ht.next()){se.index>we?(Be=se,se=null):Be=se.sibling;var Hr=gt(ot,se,Qe.value,At);if(Hr===null){se===null&&(se=Be);break}t&&se&&Hr.alternate===null&&n(ot,se),$=h(Hr,$,we),Ke===null?de=Hr:Ke.sibling=Hr,Ke=Hr,se=Be}if(Qe.done)return a(ot,se),He&&Ba(ot,we),de;if(se===null){for(;!Qe.done;we++,Qe=ht.next())Qe=Ct(ot,Qe.value,At),Qe!==null&&($=h(Qe,$,we),Ke===null?de=Qe:Ke.sibling=Qe,Ke=Qe);return He&&Ba(ot,we),de}for(se=s(se);!Qe.done;we++,Qe=ht.next())Qe=xt(se,ot,we,Qe.value,At),Qe!==null&&(t&&Qe.alternate!==null&&se.delete(Qe.key===null?we:Qe.key),$=h(Qe,$,we),Ke===null?de=Qe:Ke.sibling=Qe,Ke=Qe);return t&&se.forEach(function(Ty){return n(ot,Ty)}),He&&Ba(ot,we),de}function on(ot,$,ht,At){if(typeof ht=="object"&&ht!==null&&ht.type===O&&ht.key===null&&(ht=ht.props.children),typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case b:t:{for(var de=ht.key;$!==null;){if($.key===de){if(de=ht.type,de===O){if($.tag===7){a(ot,$.sibling),At=c($,ht.props.children),At.return=ot,ot=At;break t}}else if($.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===w&&cs(de)===$.type){a(ot,$.sibling),At=c($,ht.props),Qo(At,ht),At.return=ot,ot=At;break t}a(ot,$);break}else n(ot,$);$=$.sibling}ht.type===O?(At=rs(ht.props.children,ot.mode,At,ht.key),At.return=ot,ot=At):(At=su(ht.type,ht.key,ht.props,null,ot.mode,At),Qo(At,ht),At.return=ot,ot=At)}return y(ot);case C:t:{for(de=ht.key;$!==null;){if($.key===de)if($.tag===4&&$.stateNode.containerInfo===ht.containerInfo&&$.stateNode.implementation===ht.implementation){a(ot,$.sibling),At=c($,ht.children||[]),At.return=ot,ot=At;break t}else{a(ot,$);break}else n(ot,$);$=$.sibling}At=Mf(ht,ot.mode,At),At.return=ot,ot=At}return y(ot);case w:return ht=cs(ht),on(ot,$,ht,At)}if(rt(ht))return ae(ot,$,ht,At);if(j(ht)){if(de=j(ht),typeof de!="function")throw Error(r(150));return ht=de.call(ht),ge(ot,$,ht,At)}if(typeof ht.then=="function")return on(ot,$,du(ht),At);if(ht.$$typeof===X)return on(ot,$,uu(ot,ht),At);pu(ot,ht)}return typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint"?(ht=""+ht,$!==null&&$.tag===6?(a(ot,$.sibling),At=c($,ht),At.return=ot,ot=At):(a(ot,$),At=Sf(ht,ot.mode,At),At.return=ot,ot=At),y(ot)):a(ot,$)}return function(ot,$,ht,At){try{Ko=0;var de=on(ot,$,ht,At);return Zs=null,de}catch(se){if(se===Ys||se===fu)throw se;var Ke=Li(29,se,null,ot.mode);return Ke.lanes=At,Ke.return=ot,Ke}}}var hs=Em(!0),Tm=Em(!1),Er=!1;function Of(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Tr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function br(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,($e&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ru(t),om(t,null,a),n}return au(t,s,n,a),ru(t)}function Jo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ur(t,a)}}function Ff(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Bf=!1;function $o(){if(Bf){var t=qs;if(t!==null)throw t}}function tl(t,n,a,s){Bf=!1;var c=t.updateQueue;Er=!1;var h=c.firstBaseUpdate,y=c.lastBaseUpdate,L=c.shared.pending;if(L!==null){c.shared.pending=null;var Z=L,dt=Z.next;Z.next=null,y===null?h=dt:y.next=dt,y=Z;var Tt=t.alternate;Tt!==null&&(Tt=Tt.updateQueue,L=Tt.lastBaseUpdate,L!==y&&(L===null?Tt.firstBaseUpdate=dt:L.next=dt,Tt.lastBaseUpdate=Z))}if(h!==null){var Ct=c.baseState;y=0,Tt=dt=Z=null,L=h;do{var gt=L.lane&-536870913,xt=gt!==L.lane;if(xt?(Fe&gt)===gt:(s&gt)===gt){gt!==0&&gt===js&&(Bf=!0),Tt!==null&&(Tt=Tt.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});t:{var ae=t,ge=L;gt=n;var on=a;switch(ge.tag){case 1:if(ae=ge.payload,typeof ae=="function"){Ct=ae.call(on,Ct,gt);break t}Ct=ae;break t;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ge.payload,gt=typeof ae=="function"?ae.call(on,Ct,gt):ae,gt==null)break t;Ct=E({},Ct,gt);break t;case 2:Er=!0}}gt=L.callback,gt!==null&&(t.flags|=64,xt&&(t.flags|=8192),xt=c.callbacks,xt===null?c.callbacks=[gt]:xt.push(gt))}else xt={lane:gt,tag:L.tag,payload:L.payload,callback:L.callback,next:null},Tt===null?(dt=Tt=xt,Z=Ct):Tt=Tt.next=xt,y|=gt;if(L=L.next,L===null){if(L=c.shared.pending,L===null)break;xt=L,L=xt.next,xt.next=null,c.lastBaseUpdate=xt,c.shared.pending=null}}while(!0);Tt===null&&(Z=Ct),c.baseState=Z,c.firstBaseUpdate=dt,c.lastBaseUpdate=Tt,h===null&&(c.shared.lanes=0),Dr|=y,t.lanes=y,t.memoizedState=Ct}}function bm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Am(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)bm(a[t],n)}var Ks=V(null),mu=V(0);function Rm(t,n){t=Ya,Mt(mu,t),Mt(Ks,n),Ya=t|n.baseLanes}function If(){Mt(mu,Ya),Mt(Ks,Ks.current)}function zf(){Ya=mu.current,it(Ks),it(mu)}var Ni=V(null),Qi=null;function Ar(t){var n=t.alternate;Mt(Rn,Rn.current&1),Mt(Ni,t),Qi===null&&(n===null||Ks.current!==null||n.memoizedState!==null)&&(Qi=t)}function Hf(t){Mt(Rn,Rn.current),Mt(Ni,t),Qi===null&&(Qi=t)}function Cm(t){t.tag===22?(Mt(Rn,Rn.current),Mt(Ni,t),Qi===null&&(Qi=t)):Rr()}function Rr(){Mt(Rn,Rn.current),Mt(Ni,Ni.current)}function Oi(t){it(Ni),Qi===t&&(Qi=null),it(Rn)}var Rn=V(0);function gu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jh(a)||qh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ha=0,Ce=null,rn=null,Fn=null,vu=!1,Qs=!1,ds=!1,_u=0,el=0,Js=null,px=0;function Tn(){throw Error(r(321))}function Gf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Ui(t[a],n[a]))return!1;return!0}function Vf(t,n,a,s,c,h){return Ha=h,Ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=t===null||t.memoizedState===null?fg:ih,ds=!1,h=a(s,c),ds=!1,Qs&&(h=Dm(n,a,s,c)),wm(t),h}function wm(t){U.H=al;var n=rn!==null&&rn.next!==null;if(Ha=0,Fn=rn=Ce=null,vu=!1,el=0,Js=null,n)throw Error(r(300));t===null||Bn||(t=t.dependencies,t!==null&&lu(t)&&(Bn=!0))}function Dm(t,n,a,s){Ce=t;var c=0;do{if(Qs&&(Js=null),el=0,Qs=!1,25<=c)throw Error(r(301));if(c+=1,Fn=rn=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}U.H=hg,h=n(a,s)}while(Qs);return h}function mx(){var t=U.H,n=t.useState()[0];return n=typeof n.then=="function"?nl(n):n,t=t.useState()[0],(rn!==null?rn.memoizedState:null)!==t&&(Ce.flags|=1024),n}function Xf(){var t=_u!==0;return _u=0,t}function kf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Wf(t){if(vu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}vu=!1}Ha=0,Fn=rn=Ce=null,Qs=!1,el=_u=0,Js=null}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fn===null?Ce.memoizedState=Fn=t:Fn=Fn.next=t,Fn}function Cn(){if(rn===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=rn.next;var n=Fn===null?Ce.memoizedState:Fn.next;if(n!==null)Fn=n,rn=t;else{if(t===null)throw Ce.alternate===null?Error(r(467)):Error(r(310));rn=t,t={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},Fn===null?Ce.memoizedState=Fn=t:Fn=Fn.next=t}return Fn}function xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nl(t){var n=el;return el+=1,Js===null&&(Js=[]),t=ym(Js,t,n),n=Ce,(Fn===null?n.memoizedState:Fn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?fg:ih),t}function yu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nl(t);if(t.$$typeof===X)return $n(t)}throw Error(r(438,String(t)))}function jf(t){var n=null,a=Ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Ce.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=xu(),Ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=B;return n.index++,a}function Ga(t,n){return typeof n=="function"?n(t):n}function Su(t){var n=Cn();return qf(n,rn,t)}function qf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,h=s.pending;if(h!==null){if(c!==null){var y=c.next;c.next=h.next,h.next=y}n.baseQueue=c=h,s.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{n=c.next;var L=y=null,Z=null,dt=n,Tt=!1;do{var Ct=dt.lane&-536870913;if(Ct!==dt.lane?(Fe&Ct)===Ct:(Ha&Ct)===Ct){var gt=dt.revertLane;if(gt===0)Z!==null&&(Z=Z.next={lane:0,revertLane:0,gesture:null,action:dt.action,hasEagerState:dt.hasEagerState,eagerState:dt.eagerState,next:null}),Ct===js&&(Tt=!0);else if((Ha&gt)===gt){dt=dt.next,gt===js&&(Tt=!0);continue}else Ct={lane:0,revertLane:dt.revertLane,gesture:null,action:dt.action,hasEagerState:dt.hasEagerState,eagerState:dt.eagerState,next:null},Z===null?(L=Z=Ct,y=h):Z=Z.next=Ct,Ce.lanes|=gt,Dr|=gt;Ct=dt.action,ds&&a(h,Ct),h=dt.hasEagerState?dt.eagerState:a(h,Ct)}else gt={lane:Ct,revertLane:dt.revertLane,gesture:dt.gesture,action:dt.action,hasEagerState:dt.hasEagerState,eagerState:dt.eagerState,next:null},Z===null?(L=Z=gt,y=h):Z=Z.next=gt,Ce.lanes|=Ct,Dr|=Ct;dt=dt.next}while(dt!==null&&dt!==n);if(Z===null?y=h:Z.next=L,!Ui(h,t.memoizedState)&&(Bn=!0,Tt&&(a=qs,a!==null)))throw a;t.memoizedState=h,t.baseState=y,t.baseQueue=Z,s.lastRenderedState=h}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Yf(t){var n=Cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do h=t(h,y.action),y=y.next;while(y!==c);Ui(h,n.memoizedState)||(Bn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,s]}function Um(t,n,a){var s=Ce,c=Cn(),h=He;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Ui((rn||c).memoizedState,a);if(y&&(c.memoizedState=a,Bn=!0),c=c.queue,Qf(Om.bind(null,s,c,t),[t]),c.getSnapshot!==n||y||Fn!==null&&Fn.memoizedState.tag&1){if(s.flags|=2048,$s(9,{destroy:void 0},Nm.bind(null,s,c,a,n),null),hn===null)throw Error(r(349));h||(Ha&127)!==0||Lm(s,n,a)}return a}function Lm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Ce.updateQueue,n===null?(n=xu(),Ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Nm(t,n,a,s){n.value=a,n.getSnapshot=s,Pm(n)&&Fm(t)}function Om(t,n,a){return a(function(){Pm(n)&&Fm(t)})}function Pm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Ui(t,a)}catch{return!0}}function Fm(t){var n=as(t,2);n!==null&&Ei(n,t,2)}function Zf(t){var n=fi();if(typeof t=="function"){var a=t;if(t=a(),ds){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},n}function Bm(t,n,a,s){return t.baseState=a,qf(t,rn,typeof s=="function"?s:Ga)}function gx(t,n,a,s,c){if(Tu(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};U.T!==null?a(!0):h.isTransition=!1,s(h),a=n.pending,a===null?(h.next=n.pending=h,Im(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Im(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var h=U.T,y={};U.T=y;try{var L=a(c,s),Z=U.S;Z!==null&&Z(y,L),zm(t,n,L)}catch(dt){Kf(t,n,dt)}finally{h!==null&&y.types!==null&&(h.types=y.types),U.T=h}}else try{h=a(c,s),zm(t,n,h)}catch(dt){Kf(t,n,dt)}}function zm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Hm(t,n,s)},function(s){return Kf(t,n,s)}):Hm(t,n,a)}function Hm(t,n,a){n.status="fulfilled",n.value=a,Gm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Im(t,a)))}function Kf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Gm(n),n=n.next;while(n!==s)}t.action=null}function Gm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Vm(t,n){return n}function Xm(t,n){if(He){var a=hn.formState;if(a!==null){t:{var s=Ce;if(He){if(mn){e:{for(var c=mn,h=Ki;c.nodeType!==8;){if(!h){c=null;break e}if(c=Ji(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){mn=Ji(c.nextSibling),s=c.data==="F!";break t}}Sr(s)}s=!1}s&&(n=a[0])}}return a=fi(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vm,lastRenderedState:n},a.queue=s,a=lg.bind(null,Ce,s),s.dispatch=a,s=Zf(!1),h=nh.bind(null,Ce,!1,s.queue),s=fi(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=gx.bind(null,Ce,c,h,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function km(t){var n=Cn();return Wm(n,rn,t)}function Wm(t,n,a){if(n=qf(t,n,Vm)[0],t=Su(Ga)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=nl(n)}catch(y){throw y===Ys?fu:y}else s=n;n=Cn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(Ce.flags|=2048,$s(9,{destroy:void 0},vx.bind(null,c,a),null)),[s,h,t]}function vx(t,n){t.action=n}function jm(t){var n=Cn(),a=rn;if(a!==null)return Wm(n,a,t);Cn(),n=n.memoizedState,a=Cn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function $s(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=Ce.updateQueue,n===null&&(n=xu(),Ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function qm(){return Cn().memoizedState}function Mu(t,n,a,s){var c=fi();Ce.flags|=t,c.memoizedState=$s(1|n,{destroy:void 0},a,s===void 0?null:s)}function Eu(t,n,a,s){var c=Cn();s=s===void 0?null:s;var h=c.memoizedState.inst;rn!==null&&s!==null&&Gf(s,rn.memoizedState.deps)?c.memoizedState=$s(n,h,a,s):(Ce.flags|=t,c.memoizedState=$s(1|n,h,a,s))}function Ym(t,n){Mu(8390656,8,t,n)}function Qf(t,n){Eu(2048,8,t,n)}function _x(t){Ce.flags|=4;var n=Ce.updateQueue;if(n===null)n=xu(),Ce.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Zm(t){var n=Cn().memoizedState;return _x({ref:n,nextImpl:t}),function(){if(($e&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Km(t,n){return Eu(4,2,t,n)}function Qm(t,n){return Eu(4,4,t,n)}function Jm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function $m(t,n,a){a=a!=null?a.concat([t]):null,Eu(4,4,Jm.bind(null,n,t),a)}function Jf(){}function tg(t,n){var a=Cn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Gf(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function eg(t,n){var a=Cn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Gf(n,s[1]))return s[0];if(s=t(),ds){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s}function $f(t,n,a){return a===void 0||(Ha&1073741824)!==0&&(Fe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=n0(),Ce.lanes|=t,Dr|=t,a)}function ng(t,n,a,s){return Ui(a,n)?a:Ks.current!==null?(t=$f(t,a,s),Ui(t,n)||(Bn=!0),t):(Ha&42)===0||(Ha&1073741824)!==0&&(Fe&261930)===0?(Bn=!0,t.memoizedState=a):(t=n0(),Ce.lanes|=t,Dr|=t,n)}function ig(t,n,a,s,c){var h=F.p;F.p=h!==0&&8>h?h:8;var y=U.T,L={};U.T=L,nh(t,!1,n,a);try{var Z=c(),dt=U.S;if(dt!==null&&dt(L,Z),Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var Tt=dx(Z,s);il(t,n,Tt,Bi(t))}else il(t,n,s,Bi(t))}catch(Ct){il(t,n,{then:function(){},status:"rejected",reason:Ct},Bi())}finally{F.p=h,y!==null&&L.types!==null&&(y.types=L.types),U.T=y}}function xx(){}function th(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=ag(t).queue;ig(t,c,n,at,a===null?xx:function(){return rg(t),a(s)})}function ag(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:at},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function rg(t){var n=ag(t);n.next===null&&(n=t.alternate.memoizedState),il(t,n.next.queue,{},Bi())}function eh(){return $n(yl)}function sg(){return Cn().memoizedState}function og(){return Cn().memoizedState}function yx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Bi();t=Tr(a);var s=br(n,t,a);s!==null&&(Ei(s,n,a),Jo(s,n,a)),n={cache:Df()},t.payload=n;return}n=n.return}}function Sx(t,n,a){var s=Bi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tu(t)?ug(n,a):(a=xf(t,n,a,s),a!==null&&(Ei(a,t,s),cg(a,n,s)))}function lg(t,n,a){var s=Bi();il(t,n,a,s)}function il(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tu(t))ug(n,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,L=h(y,a);if(c.hasEagerState=!0,c.eagerState=L,Ui(L,y))return au(t,n,c,0),hn===null&&iu(),!1}catch{}if(a=xf(t,n,c,s),a!==null)return Ei(a,t,s),cg(a,n,s),!0}return!1}function nh(t,n,a,s){if(s={lane:2,revertLane:Oh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Tu(t)){if(n)throw Error(r(479))}else n=xf(t,a,s,2),n!==null&&Ei(n,t,2)}function Tu(t){var n=t.alternate;return t===Ce||n!==null&&n===Ce}function ug(t,n){Qs=vu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function cg(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,ur(t,a)}}var al={readContext:$n,use:yu,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useLayoutEffect:Tn,useInsertionEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useSyncExternalStore:Tn,useId:Tn,useHostTransitionStatus:Tn,useFormState:Tn,useActionState:Tn,useOptimistic:Tn,useMemoCache:Tn,useCacheRefresh:Tn};al.useEffectEvent=Tn;var fg={readContext:$n,use:yu,useCallback:function(t,n){return fi().memoizedState=[t,n===void 0?null:n],t},useContext:$n,useEffect:Ym,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Mu(4194308,4,Jm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Mu(4194308,4,t,n)},useInsertionEffect:function(t,n){Mu(4,2,t,n)},useMemo:function(t,n){var a=fi();n=n===void 0?null:n;var s=t();if(ds){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=fi();if(a!==void 0){var c=a(n);if(ds){Yt(!0);try{a(n)}finally{Yt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Sx.bind(null,Ce,t),[s.memoizedState,t]},useRef:function(t){var n=fi();return t={current:t},n.memoizedState=t},useState:function(t){t=Zf(t);var n=t.queue,a=lg.bind(null,Ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Jf,useDeferredValue:function(t,n){var a=fi();return $f(a,t,n)},useTransition:function(){var t=Zf(!1);return t=ig.bind(null,Ce,t.queue,!0,!1),fi().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=Ce,c=fi();if(He){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),hn===null)throw Error(r(349));(Fe&127)!==0||Lm(s,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,Ym(Om.bind(null,s,h,t),[t]),s.flags|=2048,$s(9,{destroy:void 0},Nm.bind(null,s,h,a,n),null),a},useId:function(){var t=fi(),n=hn.identifierPrefix;if(He){var a=xa,s=_a;a=(s&~(1<<32-Xt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=_u++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=px++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:eh,useFormState:Xm,useActionState:Xm,useOptimistic:function(t){var n=fi();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=nh.bind(null,Ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:jf,useCacheRefresh:function(){return fi().memoizedState=yx.bind(null,Ce)},useEffectEvent:function(t){var n=fi(),a={impl:t};return n.memoizedState=a,function(){if(($e&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ih={readContext:$n,use:yu,useCallback:tg,useContext:$n,useEffect:Qf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:eg,useReducer:Su,useRef:qm,useState:function(){return Su(Ga)},useDebugValue:Jf,useDeferredValue:function(t,n){var a=Cn();return ng(a,rn.memoizedState,t,n)},useTransition:function(){var t=Su(Ga)[0],n=Cn().memoizedState;return[typeof t=="boolean"?t:nl(t),n]},useSyncExternalStore:Um,useId:sg,useHostTransitionStatus:eh,useFormState:km,useActionState:km,useOptimistic:function(t,n){var a=Cn();return Bm(a,rn,t,n)},useMemoCache:jf,useCacheRefresh:og};ih.useEffectEvent=Zm;var hg={readContext:$n,use:yu,useCallback:tg,useContext:$n,useEffect:Qf,useImperativeHandle:$m,useInsertionEffect:Km,useLayoutEffect:Qm,useMemo:eg,useReducer:Yf,useRef:qm,useState:function(){return Yf(Ga)},useDebugValue:Jf,useDeferredValue:function(t,n){var a=Cn();return rn===null?$f(a,t,n):ng(a,rn.memoizedState,t,n)},useTransition:function(){var t=Yf(Ga)[0],n=Cn().memoizedState;return[typeof t=="boolean"?t:nl(t),n]},useSyncExternalStore:Um,useId:sg,useHostTransitionStatus:eh,useFormState:jm,useActionState:jm,useOptimistic:function(t,n){var a=Cn();return rn!==null?Bm(a,rn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:jf,useCacheRefresh:og};hg.useEffectEvent=Zm;function ah(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:E({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var rh={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Bi(),c=Tr(s);c.payload=n,a!=null&&(c.callback=a),n=br(t,c,s),n!==null&&(Ei(n,t,s),Jo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Bi(),c=Tr(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=br(t,c,s),n!==null&&(Ei(n,t,s),Jo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Bi(),s=Tr(a);s.tag=2,n!=null&&(s.callback=n),n=br(t,s,a),n!==null&&(Ei(n,t,a),Jo(n,t,a))}};function dg(t,n,a,s,c,h,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,h,y):n.prototype&&n.prototype.isPureReactComponent?!ko(a,s)||!ko(c,h):!0}function pg(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&rh.enqueueReplaceState(n,n.state,null)}function ps(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=E({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function mg(t){nu(t)}function gg(t){console.error(t)}function vg(t){nu(t)}function bu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function _g(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function sh(t,n,a){return a=Tr(a),a.tag=3,a.payload={element:null},a.callback=function(){bu(t,n)},a}function xg(t){return t=Tr(t),t.tag=3,t}function yg(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=s.value;t.payload=function(){return c(h)},t.callback=function(){_g(n,a,s)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){_g(n,a,s),typeof c!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var L=s.stack;this.componentDidCatch(s.value,{componentStack:L!==null?L:""})})}function Mx(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ws(n,a,c,!0),a=Ni.current,a!==null){switch(a.tag){case 31:case 13:return Qi===null?Bu():a.alternate===null&&bn===0&&(bn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===hu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Uh(t,s,c)),!1;case 22:return a.flags|=65536,s===hu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Uh(t,s,c)),!1}throw Error(r(435,a.tag))}return Uh(t,s,c),Bu(),!1}if(He)return n=Ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==bf&&(t=Error(r(422),{cause:s}),qo(qi(t,a)))):(s!==bf&&(n=Error(r(423),{cause:s}),qo(qi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=qi(s,a),c=sh(t.stateNode,s,c),Ff(t,c),bn!==4&&(bn=2)),!1;var h=Error(r(520),{cause:s});if(h=qi(h,a),hl===null?hl=[h]:hl.push(h),bn!==4&&(bn=2),n===null)return!0;s=qi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=sh(a.stateNode,s,t),Ff(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ur===null||!Ur.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=xg(c),yg(c,t,a,s),Ff(a,c),!1}a=a.return}while(a!==null);return!1}var oh=Error(r(461)),Bn=!1;function ti(t,n,a,s){n.child=t===null?Tm(n,null,a,s):hs(n,t.child,a,s)}function Sg(t,n,a,s,c){a=a.render;var h=n.ref;if("ref"in s){var y={};for(var L in s)L!=="ref"&&(y[L]=s[L])}else y=s;return ls(n),s=Vf(t,n,a,y,h,c),L=Xf(),t!==null&&!Bn?(kf(t,n,c),Va(t,n,c)):(He&&L&&Ef(n),n.flags|=1,ti(t,n,s,c),n.child)}function Mg(t,n,a,s,c){if(t===null){var h=a.type;return typeof h=="function"&&!yf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Eg(t,n,h,s,c)):(t=su(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!mh(t,c)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:ko,a(y,s)&&t.ref===n.ref)return Va(t,n,c)}return n.flags|=1,t=Fa(h,s),t.ref=n.ref,t.return=n,n.child=t}function Eg(t,n,a,s,c){if(t!==null){var h=t.memoizedProps;if(ko(h,s)&&t.ref===n.ref)if(Bn=!1,n.pendingProps=s=h,mh(t,c))(t.flags&131072)!==0&&(Bn=!0);else return n.lanes=t.lanes,Va(t,n,c)}return lh(t,n,a,s,c)}function Tg(t,n,a,s){var c=s.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~h}else s=0,n.child=null;return bg(t,n,h,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&cu(n,h!==null?h.cachePool:null),h!==null?Rm(n,h):If(),Cm(n);else return s=n.lanes=536870912,bg(t,n,h!==null?h.baseLanes|a:a,a,s)}else h!==null?(cu(n,h.cachePool),Rm(n,h),Rr(),n.memoizedState=null):(t!==null&&cu(n,null),If(),Rr());return ti(t,n,c,a),n.child}function rl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function bg(t,n,a,s,c){var h=Lf();return h=h===null?null:{parent:Pn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&cu(n,null),If(),Cm(n),t!==null&&Ws(t,n,s,!0),n.childLanes=c,null}function Au(t,n){return n=Cu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ag(t,n,a){return hs(n,t.child,null,a),t=Au(n,n.pendingProps),t.flags|=2,Oi(n),n.memoizedState=null,t}function Ex(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(He){if(s.mode==="hidden")return t=Au(n,s),n.lanes=536870912,rl(null,t);if(Hf(n),(t=mn)?(t=I0(t,Ki),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xr!==null?{id:_a,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},a=um(t),a.return=n,n.child=a,Jn=n,mn=null)):t=null,t===null)throw Sr(n);return n.lanes=536870912,null}return Au(n,s)}var h=t.memoizedState;if(h!==null){var y=h.dehydrated;if(Hf(n),c)if(n.flags&256)n.flags&=-257,n=Ag(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Bn||Ws(t,n,a,!1),c=(a&t.childLanes)!==0,Bn||c){if(s=hn,s!==null&&(y=pi(s,a),y!==0&&y!==h.retryLane))throw h.retryLane=y,as(t,y),Ei(s,t,y),oh;Bu(),n=Ag(t,n,a)}else t=h.treeContext,mn=Ji(y.nextSibling),Jn=n,He=!0,yr=null,Ki=!1,t!==null&&hm(n,t),n=Au(n,s),n.flags|=4096;return n}return t=Fa(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ru(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function lh(t,n,a,s,c){return ls(n),a=Vf(t,n,a,s,void 0,c),s=Xf(),t!==null&&!Bn?(kf(t,n,c),Va(t,n,c)):(He&&s&&Ef(n),n.flags|=1,ti(t,n,a,c),n.child)}function Rg(t,n,a,s,c,h){return ls(n),n.updateQueue=null,a=Dm(n,s,a,c),wm(t),s=Xf(),t!==null&&!Bn?(kf(t,n,h),Va(t,n,h)):(He&&s&&Ef(n),n.flags|=1,ti(t,n,a,h),n.child)}function Cg(t,n,a,s,c){if(ls(n),n.stateNode===null){var h=Gs,y=a.contextType;typeof y=="object"&&y!==null&&(h=$n(y)),h=new a(s,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=rh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=s,h.state=n.memoizedState,h.refs={},Of(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?$n(y):Gs,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(ah(n,a,y,s),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&rh.enqueueReplaceState(h,h.state,null),tl(n,s,h,c),$o(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){h=n.stateNode;var L=n.memoizedProps,Z=ps(a,L);h.props=Z;var dt=h.context,Tt=a.contextType;y=Gs,typeof Tt=="object"&&Tt!==null&&(y=$n(Tt));var Ct=a.getDerivedStateFromProps;Tt=typeof Ct=="function"||typeof h.getSnapshotBeforeUpdate=="function",L=n.pendingProps!==L,Tt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(L||dt!==y)&&pg(n,h,s,y),Er=!1;var gt=n.memoizedState;h.state=gt,tl(n,s,h,c),$o(),dt=n.memoizedState,L||gt!==dt||Er?(typeof Ct=="function"&&(ah(n,a,Ct,s),dt=n.memoizedState),(Z=Er||dg(n,a,Z,s,gt,dt,y))?(Tt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=dt),h.props=s,h.state=dt,h.context=y,s=Z):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{h=n.stateNode,Pf(t,n),y=n.memoizedProps,Tt=ps(a,y),h.props=Tt,Ct=n.pendingProps,gt=h.context,dt=a.contextType,Z=Gs,typeof dt=="object"&&dt!==null&&(Z=$n(dt)),L=a.getDerivedStateFromProps,(dt=typeof L=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==Ct||gt!==Z)&&pg(n,h,s,Z),Er=!1,gt=n.memoizedState,h.state=gt,tl(n,s,h,c),$o();var xt=n.memoizedState;y!==Ct||gt!==xt||Er||t!==null&&t.dependencies!==null&&lu(t.dependencies)?(typeof L=="function"&&(ah(n,a,L,s),xt=n.memoizedState),(Tt=Er||dg(n,a,Tt,s,gt,xt,Z)||t!==null&&t.dependencies!==null&&lu(t.dependencies))?(dt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,xt,Z),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,xt,Z)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&gt===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&gt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=xt),h.props=s,h.state=xt,h.context=Z,s=Tt):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&gt===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&gt===t.memoizedState||(n.flags|=1024),s=!1)}return h=s,Ru(t,n),s=(n.flags&128)!==0,h||s?(h=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&s?(n.child=hs(n,t.child,null,c),n.child=hs(n,null,a,c)):ti(t,n,a,c),n.memoizedState=h.state,t=n.child):t=Va(t,n,c),t}function wg(t,n,a,s){return ss(),n.flags|=256,ti(t,n,a,s),n.child}var uh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ch(t){return{baseLanes:t,cachePool:_m()}}function fh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Fi),t}function Dg(t,n,a){var s=n.pendingProps,c=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=t!==null&&t.memoizedState===null?!1:(Rn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(He){if(c?Ar(n):Rr(),(t=mn)?(t=I0(t,Ki),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xr!==null?{id:_a,overflow:xa}:null,retryLane:536870912,hydrationErrors:null},a=um(t),a.return=n,n.child=a,Jn=n,mn=null)):t=null,t===null)throw Sr(n);return qh(t)?n.lanes=32:n.lanes=536870912,null}var L=s.children;return s=s.fallback,c?(Rr(),c=n.mode,L=Cu({mode:"hidden",children:L},c),s=rs(s,c,a,null),L.return=n,s.return=n,L.sibling=s,n.child=L,s=n.child,s.memoizedState=ch(a),s.childLanes=fh(t,y,a),n.memoizedState=uh,rl(null,s)):(Ar(n),hh(n,L))}var Z=t.memoizedState;if(Z!==null&&(L=Z.dehydrated,L!==null)){if(h)n.flags&256?(Ar(n),n.flags&=-257,n=dh(t,n,a)):n.memoizedState!==null?(Rr(),n.child=t.child,n.flags|=128,n=null):(Rr(),L=s.fallback,c=n.mode,s=Cu({mode:"visible",children:s.children},c),L=rs(L,c,a,null),L.flags|=2,s.return=n,L.return=n,s.sibling=L,n.child=s,hs(n,t.child,null,a),s=n.child,s.memoizedState=ch(a),s.childLanes=fh(t,y,a),n.memoizedState=uh,n=rl(null,s));else if(Ar(n),qh(L)){if(y=L.nextSibling&&L.nextSibling.dataset,y)var dt=y.dgst;y=dt,s=Error(r(419)),s.stack="",s.digest=y,qo({value:s,source:null,stack:null}),n=dh(t,n,a)}else if(Bn||Ws(t,n,a,!1),y=(a&t.childLanes)!==0,Bn||y){if(y=hn,y!==null&&(s=pi(y,a),s!==0&&s!==Z.retryLane))throw Z.retryLane=s,as(t,s),Ei(y,t,s),oh;jh(L)||Bu(),n=dh(t,n,a)}else jh(L)?(n.flags|=192,n.child=t.child,n=null):(t=Z.treeContext,mn=Ji(L.nextSibling),Jn=n,He=!0,yr=null,Ki=!1,t!==null&&hm(n,t),n=hh(n,s.children),n.flags|=4096);return n}return c?(Rr(),L=s.fallback,c=n.mode,Z=t.child,dt=Z.sibling,s=Fa(Z,{mode:"hidden",children:s.children}),s.subtreeFlags=Z.subtreeFlags&65011712,dt!==null?L=Fa(dt,L):(L=rs(L,c,a,null),L.flags|=2),L.return=n,s.return=n,s.sibling=L,n.child=s,rl(null,s),s=n.child,L=t.child.memoizedState,L===null?L=ch(a):(c=L.cachePool,c!==null?(Z=Pn._currentValue,c=c.parent!==Z?{parent:Z,pool:Z}:c):c=_m(),L={baseLanes:L.baseLanes|a,cachePool:c}),s.memoizedState=L,s.childLanes=fh(t,y,a),n.memoizedState=uh,rl(t.child,s)):(Ar(n),a=t.child,t=a.sibling,a=Fa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function hh(t,n){return n=Cu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Cu(t,n){return t=Li(22,t,null,n),t.lanes=0,t}function dh(t,n,a){return hs(n,t.child,null,a),t=hh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ug(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Cf(t.return,n,a)}function ph(t,n,a,s,c,h){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=s,y.tail=a,y.tailMode=c,y.treeForkCount=h)}function Lg(t,n,a){var s=n.pendingProps,c=s.revealOrder,h=s.tail;s=s.children;var y=Rn.current,L=(y&2)!==0;if(L?(y=y&1|2,n.flags|=128):y&=1,Mt(Rn,y),ti(t,n,s,a),s=He?jo:0,!L&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ug(t,a,n);else if(t.tag===19)Ug(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&gu(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ph(n,!1,c,a,h,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&gu(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ph(n,!0,a,null,h,s);break;case"together":ph(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Va(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Dr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Fa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Fa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function mh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&lu(t)))}function Tx(t,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),Mr(n,Pn,t.memoizedState.cache),ss();break;case 27:case 5:oe(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:Mr(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hf(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ar(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Dg(t,n,a):(Ar(n),t=Va(t,n,a),t!==null?t.sibling:null);Ar(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ws(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Lg(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Mt(Rn,Rn.current),s)break;return null;case 22:return n.lanes=0,Tg(t,n,a,n.pendingProps);case 24:Mr(n,Pn,t.memoizedState.cache)}return Va(t,n,a)}function Ng(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Bn=!0;else{if(!mh(t,a)&&(n.flags&128)===0)return Bn=!1,Tx(t,n,a);Bn=(t.flags&131072)!==0}else Bn=!1,He&&(n.flags&1048576)!==0&&fm(n,jo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=cs(n.elementType),n.type=t,typeof t=="function")yf(t)?(s=ps(t,s),n.tag=1,n=Cg(null,n,t,s,a)):(n.tag=0,n=lh(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===I){n.tag=11,n=Sg(null,n,t,s,a);break t}else if(c===q){n.tag=14,n=Mg(null,n,t,s,a);break t}}throw n=lt(t)||t,Error(r(306,n,""))}}return n;case 0:return lh(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ps(s,n.pendingProps),Cg(t,n,s,c,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var h=n.memoizedState;c=h.element,Pf(t,n),tl(n,s,null,a);var y=n.memoizedState;if(s=y.cache,Mr(n,Pn,s),s!==h.cache&&wf(n,[Pn],a,!0),$o(),s=y.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=wg(t,n,s,a);break t}else if(s!==c){c=qi(Error(r(424)),n),qo(c),n=wg(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,mn=Ji(t.firstChild),Jn=n,He=!0,yr=null,Ki=!0,a=Tm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ss(),s===c){n=Va(t,n,a);break t}ti(t,n,s,a)}n=n.child}return n;case 26:return Ru(t,n),t===null?(a=k0(n.type,null,n.pendingProps,null))?n.memoizedState=a:He||(a=n.type,t=n.pendingProps,s=ku(pt.current).createElement(a),s[Mn]=n,s[_n]=t,ei(s,a,t),et(s),n.stateNode=s):n.memoizedState=k0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return oe(n),t===null&&He&&(s=n.stateNode=G0(n.type,n.pendingProps,pt.current),Jn=n,Ki=!0,c=mn,Pr(n.type)?(Yh=c,mn=Ji(s.firstChild)):mn=c),ti(t,n,n.pendingProps.children,a),Ru(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&He&&((c=s=mn)&&(s=ty(s,n.type,n.pendingProps,Ki),s!==null?(n.stateNode=s,Jn=n,mn=Ji(s.firstChild),Ki=!1,c=!0):c=!1),c||Sr(n)),oe(n),c=n.type,h=n.pendingProps,y=t!==null?t.memoizedProps:null,s=h.children,Xh(c,h)?s=null:y!==null&&Xh(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=Vf(t,n,mx,null,null,a),yl._currentValue=c),Ru(t,n),ti(t,n,s,a),n.child;case 6:return t===null&&He&&((t=a=mn)&&(a=ey(a,n.pendingProps,Ki),a!==null?(n.stateNode=a,Jn=n,mn=null,t=!0):t=!1),t||Sr(n)),null;case 13:return Dg(t,n,a);case 4:return Ot(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=hs(n,null,s,a):ti(t,n,s,a),n.child;case 11:return Sg(t,n,n.type,n.pendingProps,a);case 7:return ti(t,n,n.pendingProps,a),n.child;case 8:return ti(t,n,n.pendingProps.children,a),n.child;case 12:return ti(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Mr(n,n.type,s.value),ti(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ls(n),c=$n(c),s=s(c),n.flags|=1,ti(t,n,s,a),n.child;case 14:return Mg(t,n,n.type,n.pendingProps,a);case 15:return Eg(t,n,n.type,n.pendingProps,a);case 19:return Lg(t,n,a);case 31:return Ex(t,n,a);case 22:return Tg(t,n,a,n.pendingProps);case 24:return ls(n),s=$n(Pn),t===null?(c=Lf(),c===null&&(c=hn,h=Df(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:s,cache:c},Of(n),Mr(n,Pn,c)):((t.lanes&a)!==0&&(Pf(t,n),tl(n,null,null,a),$o()),c=t.memoizedState,h=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Mr(n,Pn,s)):(s=h.cache,Mr(n,Pn,s),s!==c.cache&&wf(n,[Pn],a,!0))),ti(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Xa(t){t.flags|=4}function gh(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(s0())t.flags|=8192;else throw fs=hu,Nf}else t.flags&=-16777217}function Og(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Z0(n))if(s0())t.flags|=8192;else throw fs=hu,Nf}function wu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?je():536870912,t.lanes|=n,io|=n)}function sl(t,n){if(!He)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function gn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function bx(t,n,a){var s=n.pendingProps;switch(Tf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(n),null;case 1:return gn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),za(Pn),te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ks(n)?Xa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Af())),gn(n),null;case 26:var c=n.type,h=n.memoizedState;return t===null?(Xa(n),h!==null?(gn(n),Og(n,h)):(gn(n),gh(n,c,null,s,a))):h?h!==t.memoizedState?(Xa(n),gn(n),Og(n,h)):(gn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Xa(n),gn(n),gh(n,c,t,s,a)),null;case 27:if(ce(n),a=pt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return gn(n),null}t=Pt.current,ks(n)?dm(n):(t=G0(c,s,a),n.stateNode=t,Xa(n))}return gn(n),null;case 5:if(ce(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Xa(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return gn(n),null}if(h=Pt.current,ks(n))dm(n);else{var y=ku(pt.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof s.is=="string"?y.createElement("select",{is:s.is}):y.createElement("select"),s.multiple?h.multiple=!0:s.size&&(h.size=s.size);break;default:h=typeof s.is=="string"?y.createElement(c,{is:s.is}):y.createElement(c)}}h[Mn]=n,h[_n]=s;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;t:switch(ei(h,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Xa(n)}}return gn(n),gh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Xa(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=pt.current,ks(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Jn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Mn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||D0(t.nodeValue,a)),t||Sr(n,!0)}else t=ku(t).createTextNode(s),t[Mn]=n,n.stateNode=t}return gn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=ks(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Mn]=n}else ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;gn(n),t=!1}else a=Af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Oi(n),n):(Oi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return gn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=ks(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Mn]=n}else ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;gn(n),c=!1}else c=Af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Oi(n),n):(Oi(n),null)}return Oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),h=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),wu(n,n.updateQueue),gn(n),null);case 4:return te(),t===null&&Ih(n.stateNode.containerInfo),gn(n),null;case 10:return za(n.type),gn(n),null;case 19:if(it(Rn),s=n.memoizedState,s===null)return gn(n),null;if(c=(n.flags&128)!==0,h=s.rendering,h===null)if(c)sl(s,!1);else{if(bn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=gu(t),h!==null){for(n.flags|=128,sl(s,!1),t=h.updateQueue,n.updateQueue=t,wu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)lm(a,t),a=a.sibling;return Mt(Rn,Rn.current&1|2),He&&Ba(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&A()>Ou&&(n.flags|=128,c=!0,sl(s,!1),n.lanes=4194304)}else{if(!c)if(t=gu(h),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,wu(n,t),sl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!h.alternate&&!He)return gn(n),null}else 2*A()-s.renderingStartTime>Ou&&a!==536870912&&(n.flags|=128,c=!0,sl(s,!1),n.lanes=4194304);s.isBackwards?(h.sibling=n.child,n.child=h):(t=s.last,t!==null?t.sibling=h:n.child=h,s.last=h)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=A(),t.sibling=null,a=Rn.current,Mt(Rn,c?a&1|2:a&1),He&&Ba(n,s.treeForkCount),t):(gn(n),null);case 22:case 23:return Oi(n),zf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(gn(n),n.subtreeFlags&6&&(n.flags|=8192)):gn(n),a=n.updateQueue,a!==null&&wu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&it(us),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),za(Pn),gn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ax(t,n){switch(Tf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return za(Pn),te(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(Oi(n),n.alternate===null)throw Error(r(340));ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Oi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ss()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return it(Rn),null;case 4:return te(),null;case 10:return za(n.type),null;case 22:case 23:return Oi(n),zf(),t!==null&&it(us),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return za(Pn),null;case 25:return null;default:return null}}function Pg(t,n){switch(Tf(n),n.tag){case 3:za(Pn),te();break;case 26:case 27:case 5:ce(n);break;case 4:te();break;case 31:n.memoizedState!==null&&Oi(n);break;case 13:Oi(n);break;case 19:it(Rn);break;case 10:za(n.type);break;case 22:case 23:Oi(n),zf(),t!==null&&it(us);break;case 24:za(Pn)}}function ol(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var h=a.create,y=a.inst;s=h(),y.destroy=s}a=a.next}while(a!==c)}}catch(L){en(n,n.return,L)}}function Cr(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&t)===t){var y=s.inst,L=y.destroy;if(L!==void 0){y.destroy=void 0,c=n;var Z=a,dt=L;try{dt()}catch(Tt){en(c,Z,Tt)}}}s=s.next}while(s!==h)}}catch(Tt){en(n,n.return,Tt)}}function Fg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Am(n,a)}catch(s){en(t,t.return,s)}}}function Bg(t,n,a){a.props=ps(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){en(t,n,s)}}function ll(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){en(t,n,c)}}function ya(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){en(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){en(t,n,c)}else a.current=null}function Ig(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){en(t,t.return,c)}}function vh(t,n,a){try{var s=t.stateNode;Yx(s,t.type,a,n),s[_n]=n}catch(c){en(t,t.return,c)}}function zg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pr(t.type)||t.tag===4}function _h(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||zg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xh(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=sa));else if(s!==4&&(s===27&&Pr(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(xh(t,n,a),t=t.sibling;t!==null;)xh(t,n,a),t=t.sibling}function Du(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Pr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Du(t,n,a),t=t.sibling;t!==null;)Du(t,n,a),t=t.sibling}function Hg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);ei(n,s,a),n[Mn]=t,n[_n]=a}catch(h){en(t,t.return,h)}}var ka=!1,In=!1,yh=!1,Gg=typeof WeakSet=="function"?WeakSet:Set,qn=null;function Rx(t,n){if(t=t.containerInfo,Gh=Qu,t=$p(t),df(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var y=0,L=-1,Z=-1,dt=0,Tt=0,Ct=t,gt=null;e:for(;;){for(var xt;Ct!==a||c!==0&&Ct.nodeType!==3||(L=y+c),Ct!==h||s!==0&&Ct.nodeType!==3||(Z=y+s),Ct.nodeType===3&&(y+=Ct.nodeValue.length),(xt=Ct.firstChild)!==null;)gt=Ct,Ct=xt;for(;;){if(Ct===t)break e;if(gt===a&&++dt===c&&(L=y),gt===h&&++Tt===s&&(Z=y),(xt=Ct.nextSibling)!==null)break;Ct=gt,gt=Ct.parentNode}Ct=xt}a=L===-1||Z===-1?null:{start:L,end:Z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vh={focusedElem:t,selectionRange:a},Qu=!1,qn=n;qn!==null;)if(n=qn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,qn=t;else for(;qn!==null;){switch(n=qn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,s=a.stateNode;try{var ae=ps(a.type,c);t=s.getSnapshotBeforeUpdate(ae,h),s.__reactInternalSnapshotBeforeUpdate=t}catch(ge){en(a,a.return,ge)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Wh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,qn=t;break}qn=n.return}}function Vg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ja(t,a),s&4&&ol(5,a);break;case 1:if(ja(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){en(a,a.return,y)}else{var c=ps(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){en(a,a.return,y)}}s&64&&Fg(a),s&512&&ll(a,a.return);break;case 3:if(ja(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Am(t,n)}catch(y){en(a,a.return,y)}}break;case 27:n===null&&s&4&&Hg(a);case 26:case 5:ja(t,a),n===null&&s&4&&Ig(a),s&512&&ll(a,a.return);break;case 12:ja(t,a);break;case 31:ja(t,a),s&4&&Wg(t,a);break;case 13:ja(t,a),s&4&&jg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Fx.bind(null,a),ny(t,a))));break;case 22:if(s=a.memoizedState!==null||ka,!s){n=n!==null&&n.memoizedState!==null||In,c=ka;var h=In;ka=s,(In=n)&&!h?qa(t,a,(a.subtreeFlags&8772)!==0):ja(t,a),ka=c,In=h}break;case 30:break;default:ja(t,a)}}function Xg(t){var n=t.alternate;n!==null&&(t.alternate=null,Xg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&fr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var xn=null,xi=!1;function Wa(t,n,a){for(a=a.child;a!==null;)kg(t,n,a),a=a.sibling}function kg(t,n,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Dt,a)}catch{}switch(a.tag){case 26:In||ya(a,n),Wa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:In||ya(a,n);var s=xn,c=xi;Pr(a.type)&&(xn=a.stateNode,xi=!1),Wa(t,n,a),vl(a.stateNode),xn=s,xi=c;break;case 5:In||ya(a,n);case 6:if(s=xn,c=xi,xn=null,Wa(t,n,a),xn=s,xi=c,xn!==null)if(xi)try{(xn.nodeType===9?xn.body:xn.nodeName==="HTML"?xn.ownerDocument.body:xn).removeChild(a.stateNode)}catch(h){en(a,n,h)}else try{xn.removeChild(a.stateNode)}catch(h){en(a,n,h)}break;case 18:xn!==null&&(xi?(t=xn,F0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),fo(t)):F0(xn,a.stateNode));break;case 4:s=xn,c=xi,xn=a.stateNode.containerInfo,xi=!0,Wa(t,n,a),xn=s,xi=c;break;case 0:case 11:case 14:case 15:Cr(2,a,n),In||Cr(4,a,n),Wa(t,n,a);break;case 1:In||(ya(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Bg(a,n,s)),Wa(t,n,a);break;case 21:Wa(t,n,a);break;case 22:In=(s=In)||a.memoizedState!==null,Wa(t,n,a),In=s;break;default:Wa(t,n,a)}}function Wg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fo(t)}catch(a){en(n,n.return,a)}}}function jg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fo(t)}catch(a){en(n,n.return,a)}}function Cx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Gg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Gg),n;default:throw Error(r(435,t.tag))}}function Uu(t,n){var a=Cx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Bx.bind(null,t,s);s.then(c,c)}})}function yi(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],h=t,y=n,L=y;t:for(;L!==null;){switch(L.tag){case 27:if(Pr(L.type)){xn=L.stateNode,xi=!1;break t}break;case 5:xn=L.stateNode,xi=!1;break t;case 3:case 4:xn=L.stateNode.containerInfo,xi=!0;break t}L=L.return}if(xn===null)throw Error(r(160));kg(h,y,c),xn=null,xi=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)qg(n,t),n=n.sibling}var ua=null;function qg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:yi(n,t),Si(t),s&4&&(Cr(3,t,t.return),ol(3,t),Cr(5,t,t.return));break;case 1:yi(n,t),Si(t),s&512&&(In||a===null||ya(a,a.return)),s&64&&ka&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=ua;if(yi(n,t),Si(t),s&512&&(In||a===null||ya(a,a.return)),s&4){var h=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":h=c.getElementsByTagName("title")[0],(!h||h[ra]||h[Mn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(s),c.head.insertBefore(h,c.querySelector("head > title"))),ei(h,s,a),h[Mn]=t,et(h),s=h;break t;case"link":var y=q0("link","href",c).get(s+(a.href||""));if(y){for(var L=0;L<y.length;L++)if(h=y[L],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(L,1);break e}}h=c.createElement(s),ei(h,s,a),c.head.appendChild(h);break;case"meta":if(y=q0("meta","content",c).get(s+(a.content||""))){for(L=0;L<y.length;L++)if(h=y[L],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(L,1);break e}}h=c.createElement(s),ei(h,s,a),c.head.appendChild(h);break;default:throw Error(r(468,s))}h[Mn]=t,et(h),s=h}t.stateNode=s}else Y0(c,t.type,t.stateNode);else t.stateNode=j0(c,s,t.memoizedProps);else h!==s?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,s===null?Y0(c,t.type,t.stateNode):j0(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&vh(t,t.memoizedProps,a.memoizedProps)}break;case 27:yi(n,t),Si(t),s&512&&(In||a===null||ya(a,a.return)),a!==null&&s&4&&vh(t,t.memoizedProps,a.memoizedProps);break;case 5:if(yi(n,t),Si(t),s&512&&(In||a===null||ya(a,a.return)),t.flags&32){c=t.stateNode;try{jn(c,"")}catch(ae){en(t,t.return,ae)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,vh(t,c,a!==null?a.memoizedProps:c)),s&1024&&(yh=!0);break;case 6:if(yi(n,t),Si(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(ae){en(t,t.return,ae)}}break;case 3:if(qu=null,c=ua,ua=Wu(n.containerInfo),yi(n,t),ua=c,Si(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{fo(n.containerInfo)}catch(ae){en(t,t.return,ae)}yh&&(yh=!1,Yg(t));break;case 4:s=ua,ua=Wu(t.stateNode.containerInfo),yi(n,t),Si(t),ua=s;break;case 12:yi(n,t),Si(t);break;case 31:yi(n,t),Si(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Uu(t,s)));break;case 13:yi(n,t),Si(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nu=A()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Uu(t,s)));break;case 22:c=t.memoizedState!==null;var Z=a!==null&&a.memoizedState!==null,dt=ka,Tt=In;if(ka=dt||c,In=Tt||Z,yi(n,t),In=Tt,ka=dt,Si(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||Z||ka||In||ms(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){Z=a=n;try{if(h=Z.stateNode,c)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{L=Z.stateNode;var Ct=Z.memoizedProps.style,gt=Ct!=null&&Ct.hasOwnProperty("display")?Ct.display:null;L.style.display=gt==null||typeof gt=="boolean"?"":(""+gt).trim()}}catch(ae){en(Z,Z.return,ae)}}}else if(n.tag===6){if(a===null){Z=n;try{Z.stateNode.nodeValue=c?"":Z.memoizedProps}catch(ae){en(Z,Z.return,ae)}}}else if(n.tag===18){if(a===null){Z=n;try{var xt=Z.stateNode;c?B0(xt,!0):B0(Z.stateNode,!1)}catch(ae){en(Z,Z.return,ae)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Uu(t,a))));break;case 19:yi(n,t),Si(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Uu(t,s)));break;case 30:break;case 21:break;default:yi(n,t),Si(t)}}function Si(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(zg(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,h=_h(t);Du(t,h,c);break;case 5:var y=a.stateNode;a.flags&32&&(jn(y,""),a.flags&=-33);var L=_h(t);Du(t,L,y);break;case 3:case 4:var Z=a.stateNode.containerInfo,dt=_h(t);xh(t,dt,Z);break;default:throw Error(r(161))}}catch(Tt){en(t,t.return,Tt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Yg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ja(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Vg(t,n.alternate,n),n=n.sibling}function ms(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Cr(4,n,n.return),ms(n);break;case 1:ya(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Bg(n,n.return,a),ms(n);break;case 27:vl(n.stateNode);case 26:case 5:ya(n,n.return),ms(n);break;case 22:n.memoizedState===null&&ms(n);break;case 30:ms(n);break;default:ms(n)}t=t.sibling}}function qa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:qa(c,h,a),ol(4,h);break;case 1:if(qa(c,h,a),s=h,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(dt){en(s,s.return,dt)}if(s=h,c=s.updateQueue,c!==null){var L=s.stateNode;try{var Z=c.shared.hiddenCallbacks;if(Z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<Z.length;c++)bm(Z[c],L)}catch(dt){en(s,s.return,dt)}}a&&y&64&&Fg(h),ll(h,h.return);break;case 27:Hg(h);case 26:case 5:qa(c,h,a),a&&s===null&&y&4&&Ig(h),ll(h,h.return);break;case 12:qa(c,h,a);break;case 31:qa(c,h,a),a&&y&4&&Wg(c,h);break;case 13:qa(c,h,a),a&&y&4&&jg(c,h);break;case 22:h.memoizedState===null&&qa(c,h,a),ll(h,h.return);break;case 30:break;default:qa(c,h,a)}n=n.sibling}}function Sh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Yo(a))}function Mh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Yo(t))}function ca(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Zg(t,n,a,s),n=n.sibling}function Zg(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:ca(t,n,a,s),c&2048&&ol(9,n);break;case 1:ca(t,n,a,s);break;case 3:ca(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Yo(t)));break;case 12:if(c&2048){ca(t,n,a,s),t=n.stateNode;try{var h=n.memoizedProps,y=h.id,L=h.onPostCommit;typeof L=="function"&&L(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Z){en(n,n.return,Z)}}else ca(t,n,a,s);break;case 31:ca(t,n,a,s);break;case 13:ca(t,n,a,s);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?ca(t,n,a,s):ul(t,n):h._visibility&2?ca(t,n,a,s):(h._visibility|=2,to(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Sh(y,n);break;case 24:ca(t,n,a,s),c&2048&&Mh(n.alternate,n);break;default:ca(t,n,a,s)}}function to(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,y=n,L=a,Z=s,dt=y.flags;switch(y.tag){case 0:case 11:case 15:to(h,y,L,Z,c),ol(8,y);break;case 23:break;case 22:var Tt=y.stateNode;y.memoizedState!==null?Tt._visibility&2?to(h,y,L,Z,c):ul(h,y):(Tt._visibility|=2,to(h,y,L,Z,c)),c&&dt&2048&&Sh(y.alternate,y);break;case 24:to(h,y,L,Z,c),c&&dt&2048&&Mh(y.alternate,y);break;default:to(h,y,L,Z,c)}n=n.sibling}}function ul(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:ul(a,s),c&2048&&Sh(s.alternate,s);break;case 24:ul(a,s),c&2048&&Mh(s.alternate,s);break;default:ul(a,s)}n=n.sibling}}var cl=8192;function eo(t,n,a){if(t.subtreeFlags&cl)for(t=t.child;t!==null;)Kg(t,n,a),t=t.sibling}function Kg(t,n,a){switch(t.tag){case 26:eo(t,n,a),t.flags&cl&&t.memoizedState!==null&&py(a,ua,t.memoizedState,t.memoizedProps);break;case 5:eo(t,n,a);break;case 3:case 4:var s=ua;ua=Wu(t.stateNode.containerInfo),eo(t,n,a),ua=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=cl,cl=16777216,eo(t,n,a),cl=s):eo(t,n,a));break;default:eo(t,n,a)}}function Qg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];qn=s,$g(s,t)}Qg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jg(t),t=t.sibling}function Jg(t){switch(t.tag){case 0:case 11:case 15:fl(t),t.flags&2048&&Cr(9,t,t.return);break;case 3:fl(t);break;case 12:fl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Lu(t)):fl(t);break;default:fl(t)}}function Lu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];qn=s,$g(s,t)}Qg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Cr(8,n,n.return),Lu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Lu(n));break;default:Lu(n)}t=t.sibling}}function $g(t,n){for(;qn!==null;){var a=qn;switch(a.tag){case 0:case 11:case 15:Cr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Yo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,qn=s;else t:for(a=t;qn!==null;){s=qn;var c=s.sibling,h=s.return;if(Xg(s),s===a){qn=null;break t}if(c!==null){c.return=h,qn=c;break t}qn=h}}}var wx={getCacheForType:function(t){var n=$n(Pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return $n(Pn).controller.signal}},Dx=typeof WeakMap=="function"?WeakMap:Map,$e=0,hn=null,Oe=null,Fe=0,tn=0,Pi=null,wr=!1,no=!1,Eh=!1,Ya=0,bn=0,Dr=0,gs=0,Th=0,Fi=0,io=0,hl=null,Mi=null,bh=!1,Nu=0,t0=0,Ou=1/0,Pu=null,Ur=null,Vn=0,Lr=null,ao=null,Za=0,Ah=0,Rh=null,e0=null,dl=0,Ch=null;function Bi(){return($e&2)!==0&&Fe!==0?Fe&-Fe:U.T!==null?Oh():qe()}function n0(){if(Fi===0)if((Fe&536870912)===0||He){var t=Ft;Ft<<=1,(Ft&3932160)===0&&(Ft=262144),Fi=t}else Fi=536870912;return t=Ni.current,t!==null&&(t.flags|=32),Fi}function Ei(t,n,a){(t===hn&&(tn===2||tn===9)||t.cancelPendingCommit!==null)&&(ro(t,0),Nr(t,Fe,Fi,!1)),Un(t,a),(($e&2)===0||t!==hn)&&(t===hn&&(($e&2)===0&&(gs|=a),bn===4&&Nr(t,Fe,Fi,!1)),Sa(t))}function i0(t,n,a){if(($e&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Wt(t,n),c=s?Nx(t,n):Dh(t,n,!0),h=s;do{if(c===0){no&&!s&&Nr(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!Ux(a)){c=Dh(t,n,!1),h=!1;continue}if(c===2){if(h=n,t.errorRecoveryDisabledLanes&h)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var L=t;c=hl;var Z=L.current.memoizedState.isDehydrated;if(Z&&(ro(L,y).flags|=256),y=Dh(L,y,!1),y!==2){if(Eh&&!Z){L.errorRecoveryDisabledLanes|=h,gs|=h,c=4;break t}h=Mi,Mi=c,h!==null&&(Mi===null?Mi=h:Mi.push.apply(Mi,h))}c=y}if(h=!1,c!==2)continue}}if(c===1){ro(t,0),Nr(t,n,0,!0);break}t:{switch(s=t,h=c,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Nr(s,n,Fi,!wr);break t;case 2:Mi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Nu+300-A(),10<c)){if(Nr(s,n,Fi,!wr),yt(s,0,!0)!==0)break t;Za=n,s.timeoutHandle=O0(a0.bind(null,s,a,Mi,Pu,bh,n,Fi,gs,io,wr,h,"Throttled",-0,0),c);break t}a0(s,a,Mi,Pu,bh,n,Fi,gs,io,wr,h,null,-0,0)}}break}while(!0);Sa(t)}function a0(t,n,a,s,c,h,y,L,Z,dt,Tt,Ct,gt,xt){if(t.timeoutHandle=-1,Ct=n.subtreeFlags,Ct&8192||(Ct&16785408)===16785408){Ct={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},Kg(n,h,Ct);var ae=(h&62914560)===h?Nu-A():(h&4194048)===h?t0-A():0;if(ae=my(Ct,ae),ae!==null){Za=h,t.cancelPendingCommit=ae(h0.bind(null,t,n,h,a,s,c,y,L,Z,Tt,Ct,null,gt,xt)),Nr(t,h,y,!dt);return}}h0(t,n,h,a,s,c,y,L,Z)}function Ux(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],h=c.getSnapshot;c=c.value;try{if(!Ui(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Nr(t,n,a,s){n&=~Th,n&=~gs,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var h=31-Xt(c),y=1<<h;s[h]=-1,c&=~y}a!==0&&Gi(t,a,n)}function Fu(){return($e&6)===0?(pl(0),!1):!0}function wh(){if(Oe!==null){if(tn===0)var t=Oe.return;else t=Oe,Ia=os=null,Wf(t),Zs=null,Ko=0,t=Oe;for(;t!==null;)Pg(t.alternate,t),t=t.return;Oe=null}}function ro(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Qx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Za=0,wh(),hn=t,Oe=a=Fa(t.current,null),Fe=n,tn=0,Pi=null,wr=!1,no=Wt(t,n),Eh=!1,io=Fi=Th=gs=Dr=bn=0,Mi=hl=null,bh=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Xt(s),h=1<<c;n|=t[c],s&=~h}return Ya=n,iu(),a}function r0(t,n){Ce=null,U.H=al,n===Ys||n===fu?(n=Sm(),tn=3):n===Nf?(n=Sm(),tn=4):tn=n===oh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Pi=n,Oe===null&&(bn=1,bu(t,qi(n,t.current)))}function s0(){var t=Ni.current;return t===null?!0:(Fe&4194048)===Fe?Qi===null:(Fe&62914560)===Fe||(Fe&536870912)!==0?t===Qi:!1}function o0(){var t=U.H;return U.H=al,t===null?al:t}function l0(){var t=U.A;return U.A=wx,t}function Bu(){bn=4,wr||(Fe&4194048)!==Fe&&Ni.current!==null||(no=!0),(Dr&134217727)===0&&(gs&134217727)===0||hn===null||Nr(hn,Fe,Fi,!1)}function Dh(t,n,a){var s=$e;$e|=2;var c=o0(),h=l0();(hn!==t||Fe!==n)&&(Pu=null,ro(t,n)),n=!1;var y=bn;t:do try{if(tn!==0&&Oe!==null){var L=Oe,Z=Pi;switch(tn){case 8:wh(),y=6;break t;case 3:case 2:case 9:case 6:Ni.current===null&&(n=!0);var dt=tn;if(tn=0,Pi=null,so(t,L,Z,dt),a&&no){y=0;break t}break;default:dt=tn,tn=0,Pi=null,so(t,L,Z,dt)}}Lx(),y=bn;break}catch(Tt){r0(t,Tt)}while(!0);return n&&t.shellSuspendCounter++,Ia=os=null,$e=s,U.H=c,U.A=h,Oe===null&&(hn=null,Fe=0,iu()),y}function Lx(){for(;Oe!==null;)u0(Oe)}function Nx(t,n){var a=$e;$e|=2;var s=o0(),c=l0();hn!==t||Fe!==n?(Pu=null,Ou=A()+500,ro(t,n)):no=Wt(t,n);t:do try{if(tn!==0&&Oe!==null){n=Oe;var h=Pi;e:switch(tn){case 1:tn=0,Pi=null,so(t,n,h,1);break;case 2:case 9:if(xm(h)){tn=0,Pi=null,c0(n);break}n=function(){tn!==2&&tn!==9||hn!==t||(tn=7),Sa(t)},h.then(n,n);break t;case 3:tn=7;break t;case 4:tn=5;break t;case 7:xm(h)?(tn=0,Pi=null,c0(n)):(tn=0,Pi=null,so(t,n,h,7));break;case 5:var y=null;switch(Oe.tag){case 26:y=Oe.memoizedState;case 5:case 27:var L=Oe;if(y?Z0(y):L.stateNode.complete){tn=0,Pi=null;var Z=L.sibling;if(Z!==null)Oe=Z;else{var dt=L.return;dt!==null?(Oe=dt,Iu(dt)):Oe=null}break e}}tn=0,Pi=null,so(t,n,h,5);break;case 6:tn=0,Pi=null,so(t,n,h,6);break;case 8:wh(),bn=6;break t;default:throw Error(r(462))}}Ox();break}catch(Tt){r0(t,Tt)}while(!0);return Ia=os=null,U.H=s,U.A=c,$e=a,Oe!==null?0:(hn=null,Fe=0,iu(),bn)}function Ox(){for(;Oe!==null&&!ie();)u0(Oe)}function u0(t){var n=Ng(t.alternate,t,Ya);t.memoizedProps=t.pendingProps,n===null?Iu(t):Oe=n}function c0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Rg(a,n,n.pendingProps,n.type,void 0,Fe);break;case 11:n=Rg(a,n,n.pendingProps,n.type.render,n.ref,Fe);break;case 5:Wf(n);default:Pg(a,n),n=Oe=lm(n,Ya),n=Ng(a,n,Ya)}t.memoizedProps=t.pendingProps,n===null?Iu(t):Oe=n}function so(t,n,a,s){Ia=os=null,Wf(n),Zs=null,Ko=0;var c=n.return;try{if(Mx(t,c,n,a,Fe)){bn=1,bu(t,qi(a,t.current)),Oe=null;return}}catch(h){if(c!==null)throw Oe=c,h;bn=1,bu(t,qi(a,t.current)),Oe=null;return}n.flags&32768?(He||s===1?t=!0:no||(Fe&536870912)!==0?t=!1:(wr=t=!0,(s===2||s===9||s===3||s===6)&&(s=Ni.current,s!==null&&s.tag===13&&(s.flags|=16384))),f0(n,t)):Iu(n)}function Iu(t){var n=t;do{if((n.flags&32768)!==0){f0(n,wr);return}t=n.return;var a=bx(n.alternate,n,Ya);if(a!==null){Oe=a;return}if(n=n.sibling,n!==null){Oe=n;return}Oe=n=t}while(n!==null);bn===0&&(bn=5)}function f0(t,n){do{var a=Ax(t.alternate,t);if(a!==null){a.flags&=32767,Oe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Oe=t;return}Oe=t=a}while(t!==null);bn=6,Oe=null}function h0(t,n,a,s,c,h,y,L,Z){t.cancelPendingCommit=null;do zu();while(Vn!==0);if(($e&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=_f,Ri(t,a,h,y,L,Z),t===hn&&(Oe=hn=null,Fe=0),ao=n,Lr=t,Za=a,Ah=h,Rh=c,e0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ix(St,function(){return v0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=U.T,U.T=null,c=F.p,F.p=2,y=$e,$e|=4;try{Rx(t,n,a)}finally{$e=y,F.p=c,U.T=s}}Vn=1,d0(),p0(),m0()}}function d0(){if(Vn===1){Vn=0;var t=Lr,n=ao,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var s=F.p;F.p=2;var c=$e;$e|=4;try{qg(n,t);var h=Vh,y=$p(t.containerInfo),L=h.focusedElem,Z=h.selectionRange;if(y!==L&&L&&L.ownerDocument&&Jp(L.ownerDocument.documentElement,L)){if(Z!==null&&df(L)){var dt=Z.start,Tt=Z.end;if(Tt===void 0&&(Tt=dt),"selectionStart"in L)L.selectionStart=dt,L.selectionEnd=Math.min(Tt,L.value.length);else{var Ct=L.ownerDocument||document,gt=Ct&&Ct.defaultView||window;if(gt.getSelection){var xt=gt.getSelection(),ae=L.textContent.length,ge=Math.min(Z.start,ae),on=Z.end===void 0?ge:Math.min(Z.end,ae);!xt.extend&&ge>on&&(y=on,on=ge,ge=y);var ot=Qp(L,ge),$=Qp(L,on);if(ot&&$&&(xt.rangeCount!==1||xt.anchorNode!==ot.node||xt.anchorOffset!==ot.offset||xt.focusNode!==$.node||xt.focusOffset!==$.offset)){var ht=Ct.createRange();ht.setStart(ot.node,ot.offset),xt.removeAllRanges(),ge>on?(xt.addRange(ht),xt.extend($.node,$.offset)):(ht.setEnd($.node,$.offset),xt.addRange(ht))}}}}for(Ct=[],xt=L;xt=xt.parentNode;)xt.nodeType===1&&Ct.push({element:xt,left:xt.scrollLeft,top:xt.scrollTop});for(typeof L.focus=="function"&&L.focus(),L=0;L<Ct.length;L++){var At=Ct[L];At.element.scrollLeft=At.left,At.element.scrollTop=At.top}}Qu=!!Gh,Vh=Gh=null}finally{$e=c,F.p=s,U.T=a}}t.current=n,Vn=2}}function p0(){if(Vn===2){Vn=0;var t=Lr,n=ao,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var s=F.p;F.p=2;var c=$e;$e|=4;try{Vg(t,n.alternate,n)}finally{$e=c,F.p=s,U.T=a}}Vn=3}}function m0(){if(Vn===4||Vn===3){Vn=0,G();var t=Lr,n=ao,a=Za,s=e0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Vn=5:(Vn=0,ao=Lr=null,g0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ur=null),La(a),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Dt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=U.T,c=F.p,F.p=2,U.T=null;try{for(var h=t.onRecoverableError,y=0;y<s.length;y++){var L=s[y];h(L.value,{componentStack:L.stack})}}finally{U.T=n,F.p=c}}(Za&3)!==0&&zu(),Sa(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Ch?dl++:(dl=0,Ch=t):dl=0,pl(0)}}function g0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Yo(n)))}function zu(){return d0(),p0(),m0(),v0()}function v0(){if(Vn!==5)return!1;var t=Lr,n=Ah;Ah=0;var a=La(Za),s=U.T,c=F.p;try{F.p=32>a?32:a,U.T=null,a=Rh,Rh=null;var h=Lr,y=Za;if(Vn=0,ao=Lr=null,Za=0,($e&6)!==0)throw Error(r(331));var L=$e;if($e|=4,Jg(h.current),Zg(h,h.current,y,a),$e=L,pl(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Dt,h)}catch{}return!0}finally{F.p=c,U.T=s,g0(t,n)}}function _0(t,n,a){n=qi(a,n),n=sh(t.stateNode,n,2),t=br(t,n,2),t!==null&&(Un(t,2),Sa(t))}function en(t,n,a){if(t.tag===3)_0(t,t,a);else for(;n!==null;){if(n.tag===3){_0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ur===null||!Ur.has(s))){t=qi(a,t),a=xg(2),s=br(n,a,2),s!==null&&(yg(a,s,n,t),Un(s,2),Sa(s));break}}n=n.return}}function Uh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Dx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Eh=!0,c.add(a),t=Px.bind(null,t,n,a),n.then(t,t))}function Px(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,hn===t&&(Fe&a)===a&&(bn===4||bn===3&&(Fe&62914560)===Fe&&300>A()-Nu?($e&2)===0&&ro(t,0):Th|=a,io===Fe&&(io=0)),Sa(t)}function x0(t,n){n===0&&(n=je()),t=as(t,n),t!==null&&(Un(t,n),Sa(t))}function Fx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),x0(t,a)}function Bx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),x0(t,a)}function Ix(t,n){return Ne(t,n)}var Hu=null,oo=null,Lh=!1,Gu=!1,Nh=!1,Or=0;function Sa(t){t!==oo&&t.next===null&&(oo===null?Hu=oo=t:oo=oo.next=t),Gu=!0,Lh||(Lh=!0,Hx())}function pl(t,n){if(!Nh&&Gu){Nh=!0;do for(var a=!1,s=Hu;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var h=0;else{var y=s.suspendedLanes,L=s.pingedLanes;h=(1<<31-Xt(42|t)+1)-1,h&=c&~(y&~L),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,E0(s,h))}else h=Fe,h=yt(s,s===hn?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(h&3)===0||Wt(s,h)||(a=!0,E0(s,h));s=s.next}while(a);Nh=!1}}function zx(){y0()}function y0(){Gu=Lh=!1;var t=0;Or!==0&&Kx()&&(t=Or);for(var n=A(),a=null,s=Hu;s!==null;){var c=s.next,h=S0(s,n);h===0?(s.next=null,a===null?Hu=c:a.next=c,c===null&&(oo=a)):(a=s,(t!==0||(h&3)!==0)&&(Gu=!0)),s=c}Vn!==0&&Vn!==5||pl(t),Or!==0&&(Or=0)}function S0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var y=31-Xt(h),L=1<<y,Z=c[y];Z===-1?((L&a)===0||(L&s)!==0)&&(c[y]=ve(L,n)):Z<=n&&(t.expiredLanes|=L),h&=~L}if(n=hn,a=Fe,a=yt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(tn===2||tn===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Xe(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Wt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Xe(s),La(a)){case 2:case 8:a=wt;break;case 32:a=St;break;case 268435456:a=zt;break;default:a=St}return s=M0.bind(null,t),a=Ne(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Xe(s),t.callbackPriority=2,t.callbackNode=null,2}function M0(t,n){if(Vn!==0&&Vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(zu()&&t.callbackNode!==a)return null;var s=Fe;return s=yt(t,t===hn?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(i0(t,s,n),S0(t,A()),t.callbackNode!=null&&t.callbackNode===a?M0.bind(null,t):null)}function E0(t,n){if(zu())return null;i0(t,n,!0)}function Hx(){Jx(function(){($e&6)!==0?Ne(Et,zx):y0()})}function Oh(){if(Or===0){var t=js;t===0&&(t=Bt,Bt<<=1,(Bt&261888)===0&&(Bt=256)),Or=t}return Or}function T0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ds(""+t)}function b0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Gx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var h=T0((c[_n]||null).action),y=s.submitter;y&&(n=(n=y[_n]||null)?T0(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var L=new Ls("action","action",null,s,c);t.push({event:L,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Or!==0){var Z=y?b0(c,y):new FormData(c);th(a,{pending:!0,data:Z,method:c.method,action:h},null,Z)}}else typeof h=="function"&&(L.preventDefault(),Z=y?b0(c,y):new FormData(c),th(a,{pending:!0,data:Z,method:c.method,action:h},h,Z))},currentTarget:c}]})}}for(var Ph=0;Ph<vf.length;Ph++){var Fh=vf[Ph],Vx=Fh.toLowerCase(),Xx=Fh[0].toUpperCase()+Fh.slice(1);la(Vx,"on"+Xx)}la(nm,"onAnimationEnd"),la(im,"onAnimationIteration"),la(am,"onAnimationStart"),la("dblclick","onDoubleClick"),la("focusin","onFocus"),la("focusout","onBlur"),la(rx,"onTransitionRun"),la(sx,"onTransitionStart"),la(ox,"onTransitionCancel"),la(rm,"onTransitionEnd"),Ht("onMouseEnter",["mouseout","mouseover"]),Ht("onMouseLeave",["mouseout","mouseover"]),Ht("onPointerEnter",["pointerout","pointerover"]),Ht("onPointerLeave",["pointerout","pointerover"]),ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function A0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var h=void 0;if(n)for(var y=s.length-1;0<=y;y--){var L=s[y],Z=L.instance,dt=L.currentTarget;if(L=L.listener,Z!==h&&c.isPropagationStopped())break t;h=L,c.currentTarget=dt;try{h(c)}catch(Tt){nu(Tt)}c.currentTarget=null,h=Z}else for(y=0;y<s.length;y++){if(L=s[y],Z=L.instance,dt=L.currentTarget,L=L.listener,Z!==h&&c.isPropagationStopped())break t;h=L,c.currentTarget=dt;try{h(c)}catch(Tt){nu(Tt)}c.currentTarget=null,h=Z}}}}function Pe(t,n){var a=n[wi];a===void 0&&(a=n[wi]=new Set);var s=t+"__bubble";a.has(s)||(R0(n,t,2,!1),a.add(s))}function Bh(t,n,a){var s=0;n&&(s|=4),R0(a,t,s,n)}var Vu="_reactListening"+Math.random().toString(36).slice(2);function Ih(t){if(!t[Vu]){t[Vu]=!0,_t.forEach(function(a){a!=="selectionchange"&&(kx.has(a)||Bh(a,!1,t),Bh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Vu]||(n[Vu]=!0,Bh("selectionchange",!1,n))}}function R0(t,n,a,s){switch(nv(n)){case 2:var c=_y;break;case 8:c=xy;break;default:c=$h}a=c.bind(null,n,a,t),c=void 0,!Oa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function zh(t,n,a,s,c){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var L=s.stateNode.containerInfo;if(L===c)break;if(y===4)for(y=s.return;y!==null;){var Z=y.tag;if((Z===3||Z===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;L!==null;){if(y=Ln(L),y===null)return;if(Z=y.tag,Z===5||Z===6||Z===26||Z===27){s=h=y;continue t}L=L.parentNode}}s=s.return}Us(function(){var dt=h,Tt=Na(a),Ct=[];t:{var gt=sm.get(t);if(gt!==void 0){var xt=Ls,ae=t;switch(t){case"keypress":if(mr(a)===0)break t;case"keydown":case"keyup":xt=of;break;case"focusin":ae="focus",xt=Ps;break;case"focusout":ae="blur",xt=Ps;break;case"beforeblur":case"afterblur":xt=Ps;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xt=es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xt=ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xt=uf;break;case nm:case im:case am:xt=jl;break;case rm:xt=ff;break;case"scroll":case"scrollend":xt=_r;break;case"wheel":xt=Jl;break;case"copy":case"cut":case"paste":xt=ql;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xt=Kl;break;case"toggle":case"beforetoggle":xt=m}var ge=(n&4)!==0,on=!ge&&(t==="scroll"||t==="scrollend"),ot=ge?gt!==null?gt+"Capture":null:gt;ge=[];for(var $=dt,ht;$!==null;){var At=$;if(ht=At.stateNode,At=At.tag,At!==5&&At!==26&&At!==27||ht===null||ot===null||(At=pr($,ot),At!=null&&ge.push(gl($,At,ht))),on)break;$=$.return}0<ge.length&&(gt=new xt(gt,ae,null,a,Tt),Ct.push({event:gt,listeners:ge}))}}if((n&7)===0){t:{if(gt=t==="mouseover"||t==="pointerover",xt=t==="mouseout"||t==="pointerout",gt&&a!==Qr&&(ae=a.relatedTarget||a.fromElement)&&(Ln(ae)||ae[Ci]))break t;if((xt||gt)&&(gt=Tt.window===Tt?Tt:(gt=Tt.ownerDocument)?gt.defaultView||gt.parentWindow:window,xt?(ae=a.relatedTarget||a.toElement,xt=dt,ae=ae?Ln(ae):null,ae!==null&&(on=u(ae),ge=ae.tag,ae!==on||ge!==5&&ge!==27&&ge!==6)&&(ae=null)):(xt=null,ae=dt),xt!==ae)){if(ge=es,At="onMouseLeave",ot="onMouseEnter",$="mouse",(t==="pointerout"||t==="pointerover")&&(ge=Kl,At="onPointerLeave",ot="onPointerEnter",$="pointer"),on=xt==null?gt:Di(xt),ht=ae==null?gt:Di(ae),gt=new ge(At,$+"leave",xt,a,Tt),gt.target=on,gt.relatedTarget=ht,At=null,Ln(Tt)===dt&&(ge=new ge(ot,$+"enter",ae,a,Tt),ge.target=ht,ge.relatedTarget=on,At=ge),on=At,xt&&ae)e:{for(ge=Wx,ot=xt,$=ae,ht=0,At=ot;At;At=ge(At))ht++;At=0;for(var de=$;de;de=ge(de))At++;for(;0<ht-At;)ot=ge(ot),ht--;for(;0<At-ht;)$=ge($),At--;for(;ht--;){if(ot===$||$!==null&&ot===$.alternate){ge=ot;break e}ot=ge(ot),$=ge($)}ge=null}else ge=null;xt!==null&&C0(Ct,gt,xt,ge,!1),ae!==null&&on!==null&&C0(Ct,on,ae,ge,!0)}}t:{if(gt=dt?Di(dt):window,xt=gt.nodeName&&gt.nodeName.toLowerCase(),xt==="select"||xt==="input"&&gt.type==="file")var Ke=ze;else if(Re(gt))if(On)Ke=nx;else{Ke=Bs;var se=hf}else xt=gt.nodeName,!xt||xt.toLowerCase()!=="input"||gt.type!=="checkbox"&&gt.type!=="radio"?dt&&Xi(dt.elementType)&&(Ke=ze):Ke=ex;if(Ke&&(Ke=Ke(t,dt))){an(Ct,Ke,a,Tt);break t}se&&se(t,gt,dt),t==="focusout"&&dt&&gt.type==="number"&&dt.memoizedProps.value!=null&&gi(gt,"number",gt.value)}switch(se=dt?Di(dt):window,t){case"focusin":(Re(se)||se.contentEditable==="true")&&(Is=se,pf=dt,Wo=null);break;case"focusout":Wo=pf=Is=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,tm(Ct,a,Tt);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":tm(Ct,a,Tt)}var we;if(R)t:{switch(t){case"compositionstart":var Be="onCompositionStart";break t;case"compositionend":Be="onCompositionEnd";break t;case"compositionupdate":Be="onCompositionUpdate";break t}Be=void 0}else he?Nt(t,a)&&(Be="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Be="onCompositionStart");Be&&(k&&a.locale!=="ko"&&(he||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&he&&(we=zo()):(va=Tt,Io="value"in va?va.value:va.textContent,he=!0)),se=Xu(dt,Be),0<se.length&&(Be=new Yl(Be,t,null,a,Tt),Ct.push({event:Be,listeners:se}),we?Be.data=we:(we=Gt(a),we!==null&&(Be.data=we)))),(we=W?ue(t,a):qt(t,a))&&(Be=Xu(dt,"onBeforeInput"),0<Be.length&&(se=new Yl("onBeforeInput","beforeinput",null,a,Tt),Ct.push({event:se,listeners:Be}),se.data=we)),Gx(Ct,t,dt,a,Tt)}A0(Ct,n)})}function gl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Xu(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=pr(t,a),c!=null&&s.unshift(gl(t,c,h)),c=pr(t,n),c!=null&&s.push(gl(t,c,h))),t.tag===3)return s;t=t.return}return[]}function Wx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function C0(t,n,a,s,c){for(var h=n._reactName,y=[];a!==null&&a!==s;){var L=a,Z=L.alternate,dt=L.stateNode;if(L=L.tag,Z!==null&&Z===s)break;L!==5&&L!==26&&L!==27||dt===null||(Z=dt,c?(dt=pr(a,h),dt!=null&&y.unshift(gl(a,dt,Z))):c||(dt=pr(a,h),dt!=null&&y.push(gl(a,dt,Z)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var jx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function w0(t){return(typeof t=="string"?t:""+t).replace(jx,`
`).replace(qx,"")}function D0(t,n){return n=w0(n),w0(t)===n}function sn(t,n,a,s,c,h){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||jn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&jn(t,""+s);break;case"className":ye(t,"class",s);break;case"tabIndex":ye(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ye(t,a,s);break;case"style":Vi(t,s,h);break;case"data":if(n!=="object"){ye(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ds(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&sn(t,n,"name",c.name,c,null),sn(t,n,"formEncType",c.formEncType,c,null),sn(t,n,"formMethod",c.formMethod,c,null),sn(t,n,"formTarget",c.formTarget,c,null)):(sn(t,n,"encType",c.encType,c,null),sn(t,n,"method",c.method,c,null),sn(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Ds(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=sa);break;case"onScroll":s!=null&&Pe("scroll",t);break;case"onScrollEnd":s!=null&&Pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Ds(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Pe("beforetoggle",t),Pe("toggle",t),_e(t,"popover",s);break;case"xlinkActuate":$t(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":$t(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":$t(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":$t(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":$t(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":$t(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":$t(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":$t(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":$t(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":_e(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$c.get(a)||a,_e(t,a,s))}}function Hh(t,n,a,s,c,h){switch(a){case"style":Vi(t,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?jn(t,s):(typeof s=="number"||typeof s=="bigint")&&jn(t,""+s);break;case"onScroll":s!=null&&Pe("scroll",t);break;case"onScrollEnd":s!=null&&Pe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ft.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=t[_n]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,c),typeof s=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):_e(t,a,s)}}}function ei(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",t),Pe("load",t);var s=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:sn(t,n,h,y,a,null)}}c&&sn(t,n,"srcSet",a.srcSet,a,null),s&&sn(t,n,"src",a.src,a,null);return;case"input":Pe("invalid",t);var L=h=y=c=null,Z=null,dt=null;for(s in a)if(a.hasOwnProperty(s)){var Tt=a[s];if(Tt!=null)switch(s){case"name":c=Tt;break;case"type":y=Tt;break;case"checked":Z=Tt;break;case"defaultChecked":dt=Tt;break;case"value":h=Tt;break;case"defaultValue":L=Tt;break;case"children":case"dangerouslySetInnerHTML":if(Tt!=null)throw Error(r(137,n));break;default:sn(t,n,s,Tt,a,null)}}ii(t,h,L,Z,dt,y,c,!1);return;case"select":Pe("invalid",t),s=y=h=null;for(c in a)if(a.hasOwnProperty(c)&&(L=a[c],L!=null))switch(c){case"value":h=L;break;case"defaultValue":y=L;break;case"multiple":s=L;default:sn(t,n,c,L,a,null)}n=h,a=y,t.multiple=!!s,n!=null?ci(t,!!s,n,!1):a!=null&&ci(t,!!s,a,!0);return;case"textarea":Pe("invalid",t),h=c=s=null;for(y in a)if(a.hasOwnProperty(y)&&(L=a[y],L!=null))switch(y){case"value":s=L;break;case"defaultValue":c=L;break;case"children":h=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(r(91));break;default:sn(t,n,y,L,a,null)}yn(t,s,c,h);return;case"option":for(Z in a)a.hasOwnProperty(Z)&&(s=a[Z],s!=null)&&(Z==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":sn(t,n,Z,s,a,null));return;case"dialog":Pe("beforetoggle",t),Pe("toggle",t),Pe("cancel",t),Pe("close",t);break;case"iframe":case"object":Pe("load",t);break;case"video":case"audio":for(s=0;s<ml.length;s++)Pe(ml[s],t);break;case"image":Pe("error",t),Pe("load",t);break;case"details":Pe("toggle",t);break;case"embed":case"source":case"link":Pe("error",t),Pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(dt in a)if(a.hasOwnProperty(dt)&&(s=a[dt],s!=null))switch(dt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:sn(t,n,dt,s,a,null)}return;default:if(Xi(n)){for(Tt in a)a.hasOwnProperty(Tt)&&(s=a[Tt],s!==void 0&&Hh(t,n,Tt,s,a,void 0));return}}for(L in a)a.hasOwnProperty(L)&&(s=a[L],s!=null&&sn(t,n,L,s,a,null))}function Yx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,y=null,L=null,Z=null,dt=null,Tt=null;for(xt in a){var Ct=a[xt];if(a.hasOwnProperty(xt)&&Ct!=null)switch(xt){case"checked":break;case"value":break;case"defaultValue":Z=Ct;default:s.hasOwnProperty(xt)||sn(t,n,xt,null,s,Ct)}}for(var gt in s){var xt=s[gt];if(Ct=a[gt],s.hasOwnProperty(gt)&&(xt!=null||Ct!=null))switch(gt){case"type":h=xt;break;case"name":c=xt;break;case"checked":dt=xt;break;case"defaultChecked":Tt=xt;break;case"value":y=xt;break;case"defaultValue":L=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(r(137,n));break;default:xt!==Ct&&sn(t,n,gt,xt,s,Ct)}}Nn(t,y,L,Z,dt,Tt,h,c);return;case"select":xt=y=L=gt=null;for(h in a)if(Z=a[h],a.hasOwnProperty(h)&&Z!=null)switch(h){case"value":break;case"multiple":xt=Z;default:s.hasOwnProperty(h)||sn(t,n,h,null,s,Z)}for(c in s)if(h=s[c],Z=a[c],s.hasOwnProperty(c)&&(h!=null||Z!=null))switch(c){case"value":gt=h;break;case"defaultValue":L=h;break;case"multiple":y=h;default:h!==Z&&sn(t,n,c,h,s,Z)}n=L,a=y,s=xt,gt!=null?ci(t,!!a,gt,!1):!!s!=!!a&&(n!=null?ci(t,!!a,n,!0):ci(t,!!a,a?[]:"",!1));return;case"textarea":xt=gt=null;for(L in a)if(c=a[L],a.hasOwnProperty(L)&&c!=null&&!s.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:sn(t,n,L,null,s,c)}for(y in s)if(c=s[y],h=a[y],s.hasOwnProperty(y)&&(c!=null||h!=null))switch(y){case"value":gt=c;break;case"defaultValue":xt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==h&&sn(t,n,y,c,s,h)}Ye(t,gt,xt);return;case"option":for(var ae in a)gt=a[ae],a.hasOwnProperty(ae)&&gt!=null&&!s.hasOwnProperty(ae)&&(ae==="selected"?t.selected=!1:sn(t,n,ae,null,s,gt));for(Z in s)gt=s[Z],xt=a[Z],s.hasOwnProperty(Z)&&gt!==xt&&(gt!=null||xt!=null)&&(Z==="selected"?t.selected=gt&&typeof gt!="function"&&typeof gt!="symbol":sn(t,n,Z,gt,s,xt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)gt=a[ge],a.hasOwnProperty(ge)&&gt!=null&&!s.hasOwnProperty(ge)&&sn(t,n,ge,null,s,gt);for(dt in s)if(gt=s[dt],xt=a[dt],s.hasOwnProperty(dt)&&gt!==xt&&(gt!=null||xt!=null))switch(dt){case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:sn(t,n,dt,gt,s,xt)}return;default:if(Xi(n)){for(var on in a)gt=a[on],a.hasOwnProperty(on)&&gt!==void 0&&!s.hasOwnProperty(on)&&Hh(t,n,on,void 0,s,gt);for(Tt in s)gt=s[Tt],xt=a[Tt],!s.hasOwnProperty(Tt)||gt===xt||gt===void 0&&xt===void 0||Hh(t,n,Tt,gt,s,xt);return}}for(var ot in a)gt=a[ot],a.hasOwnProperty(ot)&&gt!=null&&!s.hasOwnProperty(ot)&&sn(t,n,ot,null,s,gt);for(Ct in s)gt=s[Ct],xt=a[Ct],!s.hasOwnProperty(Ct)||gt===xt||gt==null&&xt==null||sn(t,n,Ct,gt,s,xt)}function U0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],h=c.transferSize,y=c.initiatorType,L=c.duration;if(h&&L&&U0(y)){for(y=0,L=c.responseEnd,s+=1;s<a.length;s++){var Z=a[s],dt=Z.startTime;if(dt>L)break;var Tt=Z.transferSize,Ct=Z.initiatorType;Tt&&U0(Ct)&&(Z=Z.responseEnd,y+=Tt*(Z<L?1:(L-dt)/(Z-dt)))}if(--s,n+=8*(h+y)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Gh=null,Vh=null;function ku(t){return t.nodeType===9?t:t.ownerDocument}function L0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function N0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Xh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kh=null;function Kx(){var t=window.event;return t&&t.type==="popstate"?t===kh?!1:(kh=t,!0):(kh=null,!1)}var O0=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,P0=typeof Promise=="function"?Promise:void 0,Jx=typeof queueMicrotask=="function"?queueMicrotask:typeof P0<"u"?function(t){return P0.resolve(null).then(t).catch($x)}:O0;function $x(t){setTimeout(function(){throw t})}function Pr(t){return t==="head"}function F0(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),fo(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")vl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,vl(a);for(var h=a.firstChild;h;){var y=h.nextSibling,L=h.nodeName;h[ra]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=y}}else a==="body"&&vl(t.ownerDocument.body);a=c}while(a);fo(n)}function B0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Wh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wh(a),fr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ty(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ji(t.nextSibling),t===null)break}return null}function ey(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ji(t.nextSibling),t===null))return null;return t}function I0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ji(t.nextSibling),t===null))return null;return t}function jh(t){return t.data==="$?"||t.data==="$~"}function qh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ny(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ji(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Yh=null;function z0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ji(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function H0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function G0(t,n,a){switch(n=ku(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function vl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);fr(t)}var $i=new Map,V0=new Set;function Wu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ka=F.d;F.d={f:iy,r:ay,D:ry,C:sy,L:oy,m:ly,X:cy,S:uy,M:fy};function iy(){var t=Ka.f(),n=Fu();return t||n}function ay(t){var n=Hn(t);n!==null&&n.tag===5&&n.type==="form"?rg(n):Ka.r(t)}var lo=typeof document>"u"?null:document;function X0(t,n,a){var s=lo;if(s&&typeof n=="string"&&n){var c=Se(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),V0.has(c)||(V0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),ei(n,"link",t),et(n),s.head.appendChild(n)))}}function ry(t){Ka.D(t),X0("dns-prefetch",t,null)}function sy(t,n){Ka.C(t,n),X0("preconnect",t,n)}function oy(t,n,a){Ka.L(t,n,a);var s=lo;if(s&&t&&n){var c='link[rel="preload"][as="'+Se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Se(a.imageSizes)+'"]')):c+='[href="'+Se(t)+'"]';var h=c;switch(n){case"style":h=uo(t);break;case"script":h=co(t)}$i.has(h)||(t=E({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),$i.set(h,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(_l(h))||n==="script"&&s.querySelector(xl(h))||(n=s.createElement("link"),ei(n,"link",t),et(n),s.head.appendChild(n)))}}function ly(t,n){Ka.m(t,n);var a=lo;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Se(s)+'"][href="'+Se(t)+'"]',h=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=co(t)}if(!$i.has(h)&&(t=E({rel:"modulepreload",href:t},n),$i.set(h,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xl(h)))return}s=a.createElement("link"),ei(s,"link",t),et(s),a.head.appendChild(s)}}}function uy(t,n,a){Ka.S(t,n,a);var s=lo;if(s&&t){var c=N(s).hoistableStyles,h=uo(t);n=n||"default";var y=c.get(h);if(!y){var L={loading:0,preload:null};if(y=s.querySelector(_l(h)))L.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":n},a),(a=$i.get(h))&&Zh(t,a);var Z=y=s.createElement("link");et(Z),ei(Z,"link",t),Z._p=new Promise(function(dt,Tt){Z.onload=dt,Z.onerror=Tt}),Z.addEventListener("load",function(){L.loading|=1}),Z.addEventListener("error",function(){L.loading|=2}),L.loading|=4,ju(y,n,s)}y={type:"stylesheet",instance:y,count:1,state:L},c.set(h,y)}}}function cy(t,n){Ka.X(t,n);var a=lo;if(a&&t){var s=N(a).hoistableScripts,c=co(t),h=s.get(c);h||(h=a.querySelector(xl(c)),h||(t=E({src:t,async:!0},n),(n=$i.get(c))&&Kh(t,n),h=a.createElement("script"),et(h),ei(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(c,h))}}function fy(t,n){Ka.M(t,n);var a=lo;if(a&&t){var s=N(a).hoistableScripts,c=co(t),h=s.get(c);h||(h=a.querySelector(xl(c)),h||(t=E({src:t,async:!0,type:"module"},n),(n=$i.get(c))&&Kh(t,n),h=a.createElement("script"),et(h),ei(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(c,h))}}function k0(t,n,a,s){var c=(c=pt.current)?Wu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=uo(a.href),a=N(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=uo(a.href);var h=N(c).hoistableStyles,y=h.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,y),(h=c.querySelector(_l(t)))&&!h._p&&(y.instance=h,y.state.loading=5),$i.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},$i.set(t,a),h||hy(c,t,a,y.state))),n&&s===null)throw Error(r(528,""));return y}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=co(a),a=N(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function uo(t){return'href="'+Se(t)+'"'}function _l(t){return'link[rel="stylesheet"]['+t+"]"}function W0(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function hy(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),ei(n,"link",a),et(n),t.head.appendChild(n))}function co(t){return'[src="'+Se(t)+'"]'}function xl(t){return"script[async]"+t}function j0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Se(a.href)+'"]');if(s)return n.instance=s,et(s),s;var c=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),et(s),ei(s,"style",c),ju(s,a.precedence,t),n.instance=s;case"stylesheet":c=uo(a.href);var h=t.querySelector(_l(c));if(h)return n.state.loading|=4,n.instance=h,et(h),h;s=W0(a),(c=$i.get(c))&&Zh(s,c),h=(t.ownerDocument||t).createElement("link"),et(h);var y=h;return y._p=new Promise(function(L,Z){y.onload=L,y.onerror=Z}),ei(h,"link",s),n.state.loading|=4,ju(h,a.precedence,t),n.instance=h;case"script":return h=co(a.src),(c=t.querySelector(xl(h)))?(n.instance=c,et(c),c):(s=a,(c=$i.get(h))&&(s=E({},a),Kh(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),et(c),ei(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ju(s,a.precedence,t));return n.instance}function ju(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,h=c,y=0;y<s.length;y++){var L=s[y];if(L.dataset.precedence===n)h=L;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Zh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Kh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var qu=null;function q0(t,n,a){if(qu===null){var s=new Map,c=qu=new Map;c.set(a,s)}else c=qu,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var h=a[c];if(!(h[ra]||h[Mn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=t+y;var L=s.get(y);L?L.push(h):s.set(y,[h])}}return s}function Y0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function dy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Z0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function py(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=uo(s.href),h=n.querySelector(_l(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Yu.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,et(h);return}h=n.ownerDocument||n,s=W0(s),(c=$i.get(c))&&Zh(s,c),h=h.createElement("link"),et(h);var y=h;y._p=new Promise(function(L,Z){y.onload=L,y.onerror=Z}),ei(h,"link",s),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Yu.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Qh=0;function my(t,n){return t.stylesheets&&t.count===0&&Ku(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Ku(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&Qh===0&&(Qh=62500*Zx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ku(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Qh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Yu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ku(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Zu=null;function Ku(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Zu=new Map,n.forEach(gy,t),Zu=null,Yu.call(t))}function gy(t,n){if(!(n.state.loading&4)){var a=Zu.get(t);if(a)var s=a.get(null);else{a=new Map,Zu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var y=c[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),s=y)}s&&a.set(null,s)}c=n.instance,y=c.getAttribute("data-precedence"),h=a.get(y)||s,h===s&&a.set(null,c),a.set(y,c),this.count++,s=Yu.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var yl={$$typeof:X,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function vy(t,n,a,s,c,h,y,L,Z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Le(0),this.hiddenUpdates=Le(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Z,this.incompleteTransitions=new Map}function K0(t,n,a,s,c,h,y,L,Z,dt,Tt,Ct){return t=new vy(t,n,a,y,Z,dt,Tt,Ct,L),n=1,h===!0&&(n|=24),h=Li(3,null,null,n),t.current=h,h.stateNode=t,n=Df(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:s,isDehydrated:a,cache:n},Of(h),t}function Q0(t){return t?(t=Gs,t):Gs}function J0(t,n,a,s,c,h){c=Q0(c),s.context===null?s.context=c:s.pendingContext=c,s=Tr(n),s.payload={element:a},h=h===void 0?null:h,h!==null&&(s.callback=h),a=br(t,s,n),a!==null&&(Ei(a,t,n),Jo(a,t,n))}function $0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Jh(t,n){$0(t,n),(t=t.alternate)&&$0(t,n)}function tv(t){if(t.tag===13||t.tag===31){var n=as(t,67108864);n!==null&&Ei(n,t,67108864),Jh(t,67108864)}}function ev(t){if(t.tag===13||t.tag===31){var n=Bi();n=mi(n);var a=as(t,n);a!==null&&Ei(a,t,n),Jh(t,n)}}var Qu=!0;function _y(t,n,a,s){var c=U.T;U.T=null;var h=F.p;try{F.p=2,$h(t,n,a,s)}finally{F.p=h,U.T=c}}function xy(t,n,a,s){var c=U.T;U.T=null;var h=F.p;try{F.p=8,$h(t,n,a,s)}finally{F.p=h,U.T=c}}function $h(t,n,a,s){if(Qu){var c=td(s);if(c===null)zh(t,n,s,Ju,a),iv(t,s);else if(Sy(c,t,n,a,s))s.stopPropagation();else if(iv(t,s),n&4&&-1<yy.indexOf(t)){for(;c!==null;){var h=Hn(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Lt(h.pendingLanes);if(y!==0){var L=h;for(L.pendingLanes|=2,L.entangledLanes|=2;y;){var Z=1<<31-Xt(y);L.entanglements[1]|=Z,y&=~Z}Sa(h),($e&6)===0&&(Ou=A()+500,pl(0))}}break;case 31:case 13:L=as(h,2),L!==null&&Ei(L,h,2),Fu(),Jh(h,2)}if(h=td(s),h===null&&zh(t,n,s,Ju,a),h===c)break;c=h}c!==null&&s.stopPropagation()}else zh(t,n,s,null,a)}}function td(t){return t=Na(t),ed(t)}var Ju=null;function ed(t){if(Ju=null,t=Ln(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=g(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ju=t,null}function nv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(st()){case Et:return 2;case wt:return 8;case St:case ee:return 32;case zt:return 268435456;default:return 32}default:return 32}}var nd=!1,Fr=null,Br=null,Ir=null,Sl=new Map,Ml=new Map,zr=[],yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function iv(t,n){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Sl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(n.pointerId)}}function El(t,n,a,s,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Hn(n),n!==null&&tv(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Sy(t,n,a,s,c){switch(n){case"focusin":return Fr=El(Fr,t,n,a,s,c),!0;case"dragenter":return Br=El(Br,t,n,a,s,c),!0;case"mouseover":return Ir=El(Ir,t,n,a,s,c),!0;case"pointerover":var h=c.pointerId;return Sl.set(h,El(Sl.get(h)||null,t,n,a,s,c)),!0;case"gotpointercapture":return h=c.pointerId,Ml.set(h,El(Ml.get(h)||null,t,n,a,s,c)),!0}return!1}function av(t){var n=Ln(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Zn(t.priority,function(){ev(a)});return}}else if(n===31){if(n=g(a),n!==null){t.blockedOn=n,Zn(t.priority,function(){ev(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $u(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=td(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Qr=s,a.target.dispatchEvent(s),Qr=null}else return n=Hn(a),n!==null&&tv(n),t.blockedOn=a,!1;n.shift()}return!0}function rv(t,n,a){$u(t)&&a.delete(n)}function My(){nd=!1,Fr!==null&&$u(Fr)&&(Fr=null),Br!==null&&$u(Br)&&(Br=null),Ir!==null&&$u(Ir)&&(Ir=null),Sl.forEach(rv),Ml.forEach(rv)}function tc(t,n){t.blockedOn===n&&(t.blockedOn=null,nd||(nd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,My)))}var ec=null;function sv(t){ec!==t&&(ec=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ec===t&&(ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(ed(s||a)===null)continue;break}var h=Hn(a);h!==null&&(t.splice(n,3),n-=3,th(h,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function fo(t){function n(Z){return tc(Z,t)}Fr!==null&&tc(Fr,t),Br!==null&&tc(Br,t),Ir!==null&&tc(Ir,t),Sl.forEach(n),Ml.forEach(n);for(var a=0;a<zr.length;a++){var s=zr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<zr.length&&(a=zr[0],a.blockedOn===null);)av(a),a.blockedOn===null&&zr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],h=a[s+1],y=c[_n]||null;if(typeof h=="function")y||sv(a);else if(y){var L=null;if(h&&h.hasAttribute("formAction")){if(c=h,y=h[_n]||null)L=y.formAction;else if(ed(c)!==null)continue}else L=y.action;typeof L=="function"?a[s+1]=L:(a.splice(s,3),s-=3),sv(a)}}}function ov(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function id(t){this._internalRoot=t}nc.prototype.render=id.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Bi();J0(a,s,t,n,null,null)},nc.prototype.unmount=id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;J0(t.current,2,null,t,null,null),Fu(),n[Ci]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var n=qe();t={blockedOn:null,target:t,priority:n};for(var a=0;a<zr.length&&n!==0&&n<zr[a].priority;a++);zr.splice(a,0,t),a===0&&av(t)}};var lv=e.version;if(lv!=="19.2.3")throw Error(r(527,lv,"19.2.3"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var Ey={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Dt=ic.inject(Ey),Ut=ic}catch{}}return bl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=mg,h=gg,y=vg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=K0(t,1,!1,null,null,a,s,null,c,h,y,ov),t[Ci]=n.current,Ih(t),new id(n)},bl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",h=mg,y=gg,L=vg,Z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(L=a.onRecoverableError),a.formState!==void 0&&(Z=a.formState)),n=K0(t,1,!0,n,a??null,s,c,Z,h,y,L,ov),n.context=Q0(null),a=n.current,s=Bi(),s=mi(s),c=Tr(s),c.callback=null,br(a,c,s),a=s,n.current.lanes=a,Un(n,a),Sa(n),t[Ci]=n.current,Ih(t),new nc(n)},bl.version="19.2.3",bl}var _v;function Ny(){if(_v)return sd.exports;_v=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),sd.exports=Ly(),sd.exports}var Oy=Ny(),cd={},xv;function Py(){return xv||(xv=1,(function(){var o;function e(f){var m=0;return function(){return m<f.length?{done:!1,value:f[m++]}:{done:!0}}}var i=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,m,_){return f==Array.prototype||f==Object.prototype||(f[m]=_.value),f};function r(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof zc=="object"&&zc];for(var m=0;m<f.length;++m){var _=f[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var l=r(this);function u(f,m){if(m)t:{var _=l;f=f.split(".");for(var R=0;R<f.length-1;R++){var H=f[R];if(!(H in _))break t;_=_[H]}f=f[f.length-1],R=_[f],m=m(R),m!=R&&m!=null&&i(_,f,{configurable:!0,writable:!0,value:m})}}u("Symbol",function(f){function m(W){if(this instanceof m)throw new TypeError("Symbol is not a constructor");return new _(R+(W||"")+"_"+H++,W)}function _(W,k){this.h=W,i(this,"description",{configurable:!0,writable:!0,value:k})}if(f)return f;_.prototype.toString=function(){return this.h};var R="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",H=0;return m}),u("Symbol.iterator",function(f){if(f)return f;f=Symbol("Symbol.iterator");for(var m="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),_=0;_<m.length;_++){var R=l[m[_]];typeof R=="function"&&typeof R.prototype[f]!="function"&&i(R.prototype,f,{configurable:!0,writable:!0,value:function(){return d(e(this))}})}return f});function d(f){return f={next:f},f[Symbol.iterator]=function(){return this},f}function g(f){var m=typeof Symbol<"u"&&Symbol.iterator&&f[Symbol.iterator];return m?m.call(f):{next:e(f)}}function v(f){if(!(f instanceof Array)){f=g(f);for(var m,_=[];!(m=f.next()).done;)_.push(m.value);f=_}return f}var p=typeof Object.assign=="function"?Object.assign:function(f,m){for(var _=1;_<arguments.length;_++){var R=arguments[_];if(R)for(var H in R)Object.prototype.hasOwnProperty.call(R,H)&&(f[H]=R[H])}return f};u("Object.assign",function(f){return f||p});var S=typeof Object.create=="function"?Object.create:function(f){function m(){}return m.prototype=f,new m},E;if(typeof Object.setPrototypeOf=="function")E=Object.setPrototypeOf;else{var x;t:{var b={a:!0},C={};try{C.__proto__=b,x=C.a;break t}catch{}x=!1}E=x?function(f,m){if(f.__proto__=m,f.__proto__!==m)throw new TypeError(f+" is not extensible");return f}:null}var O=E;function T(f,m){if(f.prototype=S(m.prototype),f.prototype.constructor=f,O)O(f,m);else for(var _ in m)if(_!="prototype")if(Object.defineProperties){var R=Object.getOwnPropertyDescriptor(m,_);R&&Object.defineProperty(f,_,R)}else f[_]=m[_];f.ya=m.prototype}function M(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function P(f){if(f.m)throw new TypeError("Generator is already running");f.m=!0}M.prototype.u=function(f){this.i=f};function X(f,m){f.l={ma:m,na:!0},f.h=f.s||f.v}M.prototype.return=function(f){this.l={return:f},this.h=this.v};function I(f,m,_){return f.h=_,{value:m}}function Q(f){this.h=new M,this.i=f}function Y(f,m){P(f.h);var _=f.h.j;return _?q(f,"return"in _?_.return:function(R){return{value:R,done:!0}},m,f.h.return):(f.h.return(m),w(f))}function q(f,m,_,R){try{var H=m.call(f.h.j,_);if(!(H instanceof Object))throw new TypeError("Iterator result "+H+" is not an object");if(!H.done)return f.h.m=!1,H;var W=H.value}catch(k){return f.h.j=null,X(f.h,k),w(f)}return f.h.j=null,R.call(f.h,W),w(f)}function w(f){for(;f.h.h;)try{var m=f.i(f.h);if(m)return f.h.m=!1,{value:m.value,done:!1}}catch(_){f.h.i=void 0,X(f.h,_)}if(f.h.m=!1,f.h.l){if(m=f.h.l,f.h.l=null,m.na)throw m.ma;return{value:m.return,done:!0}}return{value:void 0,done:!0}}function z(f){this.next=function(m){return P(f.h),f.h.j?m=q(f,f.h.j.next,m,f.h.u):(f.h.u(m),m=w(f)),m},this.throw=function(m){return P(f.h),f.h.j?m=q(f,f.h.j.throw,m,f.h.u):(X(f.h,m),m=w(f)),m},this.return=function(m){return Y(f,m)},this[Symbol.iterator]=function(){return this}}function B(f){function m(R){return f.next(R)}function _(R){return f.throw(R)}return new Promise(function(R,H){function W(k){k.done?R(k.value):Promise.resolve(k.value).then(m,_).then(W,H)}W(f.next())})}function D(f){return B(new z(new Q(f)))}u("Promise",function(f){function m(k){this.i=0,this.j=void 0,this.h=[],this.u=!1;var nt=this.l();try{k(nt.resolve,nt.reject)}catch(vt){nt.reject(vt)}}function _(){this.h=null}function R(k){return k instanceof m?k:new m(function(nt){nt(k)})}if(f)return f;_.prototype.i=function(k){if(this.h==null){this.h=[];var nt=this;this.j(function(){nt.m()})}this.h.push(k)};var H=l.setTimeout;_.prototype.j=function(k){H(k,0)},_.prototype.m=function(){for(;this.h&&this.h.length;){var k=this.h;this.h=[];for(var nt=0;nt<k.length;++nt){var vt=k[nt];k[nt]=null;try{vt()}catch(Nt){this.l(Nt)}}}this.h=null},_.prototype.l=function(k){this.j(function(){throw k})},m.prototype.l=function(){function k(Nt){return function(Gt){vt||(vt=!0,Nt.call(nt,Gt))}}var nt=this,vt=!1;return{resolve:k(this.I),reject:k(this.m)}},m.prototype.I=function(k){if(k===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(k instanceof m)this.L(k);else{t:switch(typeof k){case"object":var nt=k!=null;break t;case"function":nt=!0;break t;default:nt=!1}nt?this.F(k):this.s(k)}},m.prototype.F=function(k){var nt=void 0;try{nt=k.then}catch(vt){this.m(vt);return}typeof nt=="function"?this.M(nt,k):this.s(k)},m.prototype.m=function(k){this.v(2,k)},m.prototype.s=function(k){this.v(1,k)},m.prototype.v=function(k,nt){if(this.i!=0)throw Error("Cannot settle("+k+", "+nt+"): Promise already settled in state"+this.i);this.i=k,this.j=nt,this.i===2&&this.K(),this.H()},m.prototype.K=function(){var k=this;H(function(){if(k.D()){var nt=l.console;typeof nt<"u"&&nt.error(k.j)}},1)},m.prototype.D=function(){if(this.u)return!1;var k=l.CustomEvent,nt=l.Event,vt=l.dispatchEvent;return typeof vt>"u"?!0:(typeof k=="function"?k=new k("unhandledrejection",{cancelable:!0}):typeof nt=="function"?k=new nt("unhandledrejection",{cancelable:!0}):(k=l.document.createEvent("CustomEvent"),k.initCustomEvent("unhandledrejection",!1,!0,k)),k.promise=this,k.reason=this.j,vt(k))},m.prototype.H=function(){if(this.h!=null){for(var k=0;k<this.h.length;++k)W.i(this.h[k]);this.h=null}};var W=new _;return m.prototype.L=function(k){var nt=this.l();k.T(nt.resolve,nt.reject)},m.prototype.M=function(k,nt){var vt=this.l();try{k.call(nt,vt.resolve,vt.reject)}catch(Nt){vt.reject(Nt)}},m.prototype.then=function(k,nt){function vt(ue,qt){return typeof ue=="function"?function(xe){try{Nt(ue(xe))}catch(Re){Gt(Re)}}:qt}var Nt,Gt,he=new m(function(ue,qt){Nt=ue,Gt=qt});return this.T(vt(k,Nt),vt(nt,Gt)),he},m.prototype.catch=function(k){return this.then(void 0,k)},m.prototype.T=function(k,nt){function vt(){switch(Nt.i){case 1:k(Nt.j);break;case 2:nt(Nt.j);break;default:throw Error("Unexpected state: "+Nt.i)}}var Nt=this;this.h==null?W.i(vt):this.h.push(vt),this.u=!0},m.resolve=R,m.reject=function(k){return new m(function(nt,vt){vt(k)})},m.race=function(k){return new m(function(nt,vt){for(var Nt=g(k),Gt=Nt.next();!Gt.done;Gt=Nt.next())R(Gt.value).T(nt,vt)})},m.all=function(k){var nt=g(k),vt=nt.next();return vt.done?R([]):new m(function(Nt,Gt){function he(xe){return function(Re){ue[xe]=Re,qt--,qt==0&&Nt(ue)}}var ue=[],qt=0;do ue.push(void 0),qt++,R(vt.value).T(he(ue.length-1),Gt),vt=nt.next();while(!vt.done)})},m});function j(f,m){f instanceof String&&(f+="");var _=0,R=!1,H={next:function(){if(!R&&_<f.length){var W=_++;return{value:m(W,f[W]),done:!1}}return R=!0,{done:!0,value:void 0}}};return H[Symbol.iterator]=function(){return H},H}u("Array.prototype.keys",function(f){return f||function(){return j(this,function(m){return m})}}),u("Array.prototype.fill",function(f){return f||function(m,_,R){var H=this.length||0;for(0>_&&(_=Math.max(0,H+_)),(R==null||R>H)&&(R=H),R=Number(R),0>R&&(R=Math.max(0,H+R)),_=Number(_||0);_<R;_++)this[_]=m;return this}});function K(f){return f||Array.prototype.fill}u("Int8Array.prototype.fill",K),u("Uint8Array.prototype.fill",K),u("Uint8ClampedArray.prototype.fill",K),u("Int16Array.prototype.fill",K),u("Uint16Array.prototype.fill",K),u("Int32Array.prototype.fill",K),u("Uint32Array.prototype.fill",K),u("Float32Array.prototype.fill",K),u("Float64Array.prototype.fill",K),u("Object.is",function(f){return f||function(m,_){return m===_?m!==0||1/m===1/_:m!==m&&_!==_}}),u("Array.prototype.includes",function(f){return f||function(m,_){var R=this;R instanceof String&&(R=String(R));var H=R.length;for(_=_||0,0>_&&(_=Math.max(_+H,0));_<H;_++){var W=R[_];if(W===m||Object.is(W,m))return!0}return!1}}),u("String.prototype.includes",function(f){return f||function(m,_){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(m instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(m,_||0)!==-1}});var lt=this||self;function rt(f,m){f=f.split(".");var _=lt;f[0]in _||typeof _.execScript>"u"||_.execScript("var "+f[0]);for(var R;f.length&&(R=f.shift());)f.length||m===void 0?_[R]&&_[R]!==Object.prototype[R]?_=_[R]:_=_[R]={}:_[R]=m}function U(f){var m;t:{if((m=lt.navigator)&&(m=m.userAgent))break t;m=""}return m.indexOf(f)!=-1}var F=Array.prototype.map?function(f,m){return Array.prototype.map.call(f,m,void 0)}:function(f,m){for(var _=f.length,R=Array(_),H=typeof f=="string"?f.split(""):f,W=0;W<_;W++)W in H&&(R[W]=m.call(void 0,H[W],W,f));return R},at={},ct=null;function bt(f){var m=f.length,_=3*m/4;_%3?_=Math.floor(_):"=.".indexOf(f[m-1])!=-1&&(_="=.".indexOf(f[m-2])!=-1?_-2:_-1);var R=new Uint8Array(_),H=0;return V(f,function(W){R[H++]=W}),H!==_?R.subarray(0,H):R}function V(f,m){function _(vt){for(;R<f.length;){var Nt=f.charAt(R++),Gt=ct[Nt];if(Gt!=null)return Gt;if(!/^[\s\xa0]*$/.test(Nt))throw Error("Unknown base64 encoding at char: "+Nt)}return vt}it();for(var R=0;;){var H=_(-1),W=_(0),k=_(64),nt=_(64);if(nt===64&&H===-1)break;m(H<<2|W>>4),k!=64&&(m(W<<4&240|k>>2),nt!=64&&m(k<<6&192|nt))}}function it(){if(!ct){ct={};for(var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),m=["+/=","+/","-_=","-_.","-_"],_=0;5>_;_++){var R=f.concat(m[_].split(""));at[_]=R;for(var H=0;H<R.length;H++){var W=R[H];ct[W]===void 0&&(ct[W]=H)}}}}var Mt=typeof Uint8Array<"u",Pt=!(U("Trident")||U("MSIE"))&&typeof lt.btoa=="function";function kt(f){if(!Pt){var m;m===void 0&&(m=0),it(),m=at[m];for(var _=Array(Math.floor(f.length/3)),R=m[64]||"",H=0,W=0;H<f.length-2;H+=3){var k=f[H],nt=f[H+1],vt=f[H+2],Nt=m[k>>2];k=m[(k&3)<<4|nt>>4],nt=m[(nt&15)<<2|vt>>6],vt=m[vt&63],_[W++]=Nt+k+nt+vt}switch(Nt=0,vt=R,f.length-H){case 2:Nt=f[H+1],vt=m[(Nt&15)<<2]||R;case 1:f=f[H],_[W]=m[f>>2]+m[(f&3)<<4|Nt>>4]+vt+R}return _.join("")}for(m="";10240<f.length;)m+=String.fromCharCode.apply(null,f.subarray(0,10240)),f=f.subarray(10240);return m+=String.fromCharCode.apply(null,f),btoa(m)}var pt=RegExp("[-_.]","g");function Rt(f){switch(f){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Ot(f){if(!Pt)return bt(f);pt.test(f)&&(f=f.replace(pt,Rt)),f=atob(f);for(var m=new Uint8Array(f.length),_=0;_<f.length;_++)m[_]=f.charCodeAt(_);return m}var te;function oe(){return te||(te=new Uint8Array(0))}var ce={},vn=typeof Uint8Array.prototype.slice=="function",fe=0,pe=0;function Ve(f){var m=0>f;f=Math.abs(f);var _=f>>>0;f=Math.floor((f-_)/4294967296),m&&(_=g(dn(_,f)),m=_.next().value,f=_.next().value,_=m),fe=_>>>0,pe=f>>>0}var Ee=typeof BigInt=="function";function dn(f,m){return m=~m,f?f=~f+1:m+=1,[f,m]}function J(f,m){this.i=f>>>0,this.h=m>>>0}function un(f){if(!f)return Ne||(Ne=new J(0,0));if(!/^-?\d+$/.test(f))return null;if(16>f.length)Ve(Number(f));else if(Ee)f=BigInt(f),fe=Number(f&BigInt(4294967295))>>>0,pe=Number(f>>BigInt(32)&BigInt(4294967295));else{var m=+(f[0]==="-");pe=fe=0;for(var _=f.length,R=m,H=(_-m)%6+m;H<=_;R=H,H+=6)R=Number(f.slice(R,H)),pe*=1e6,fe=1e6*fe+R,4294967296<=fe&&(pe+=fe/4294967296|0,fe%=4294967296);m&&(m=g(dn(fe,pe)),f=m.next().value,m=m.next().value,fe=f,pe=m)}return new J(fe,pe)}var Ne;function Xe(f,m){return Error("Invalid wire type: "+f+" (at position "+m+")")}function ie(){return Error("Failed to read varint, encoding is invalid.")}function G(f,m){return Error("Tried to read past the end of the data "+m+" > "+f)}function A(){throw Error("Invalid UTF8")}function st(f,m){return m=String.fromCharCode.apply(null,m),f==null?m:f+m}var Et=void 0,wt,St=typeof TextDecoder<"u",ee,zt=typeof TextEncoder<"u",le;function me(f){if(f!==ce)throw Error("illegal external caller")}function Dt(f,m){if(me(m),this.V=f,f!=null&&f.length===0)throw Error("ByteString should be constructed with non-empty values")}function Ut(){return le||(le=new Dt(null,ce))}function Yt(f){me(ce);var m=f.V;return m=m==null||Mt&&m!=null&&m instanceof Uint8Array?m:typeof m=="string"?Ot(m):null,m==null?m:f.V=m}function Xt(f){if(typeof f=="string")return{buffer:Ot(f),C:!1};if(Array.isArray(f))return{buffer:new Uint8Array(f),C:!1};if(f.constructor===Uint8Array)return{buffer:f,C:!1};if(f.constructor===ArrayBuffer)return{buffer:new Uint8Array(f),C:!1};if(f.constructor===Dt)return{buffer:Yt(f)||oe(),C:!0};if(f instanceof Uint8Array)return{buffer:new Uint8Array(f.buffer,f.byteOffset,f.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Zt(f,m){this.i=null,this.m=!1,this.h=this.j=this.l=0,Te(this,f,m)}function Te(f,m,_){_=_===void 0?{}:_,f.S=_.S===void 0?!1:_.S,m&&(m=Xt(m),f.i=m.buffer,f.m=m.C,f.l=0,f.j=f.i.length,f.h=f.l)}Zt.prototype.reset=function(){this.h=this.l};function tt(f,m){if(f.h=m,m>f.j)throw G(f.j,m)}function Bt(f){var m=f.i,_=f.h,R=m[_++],H=R&127;if(R&128&&(R=m[_++],H|=(R&127)<<7,R&128&&(R=m[_++],H|=(R&127)<<14,R&128&&(R=m[_++],H|=(R&127)<<21,R&128&&(R=m[_++],H|=R<<28,R&128&&m[_++]&128&&m[_++]&128&&m[_++]&128&&m[_++]&128&&m[_++]&128)))))throw ie();return tt(f,_),H}function Ft(f,m){if(0>m)throw Error("Tried to read a negative byte length: "+m);var _=f.h,R=_+m;if(R>f.j)throw G(m,f.j-_);return f.h=R,_}var Kt=[];function Lt(){this.h=[]}Lt.prototype.length=function(){return this.h.length},Lt.prototype.end=function(){var f=this.h;return this.h=[],f};function yt(f,m,_){for(;0<_||127<m;)f.h.push(m&127|128),m=(m>>>7|_<<25)>>>0,_>>>=7;f.h.push(m)}function Wt(f,m){for(;127<m;)f.h.push(m&127|128),m>>>=7;f.h.push(m)}function ve(f,m){if(Kt.length){var _=Kt.pop();Te(_,f,m),f=_}else f=new Zt(f,m);this.h=f,this.j=this.h.h,this.i=this.l=-1,this.setOptions(m)}ve.prototype.setOptions=function(f){f=f===void 0?{}:f,this.ca=f.ca===void 0?!1:f.ca},ve.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function je(f){var m=f.h;if(m.h==m.j)return!1;f.j=f.h.h;var _=Bt(f.h)>>>0;if(m=_>>>3,_&=7,!(0<=_&&5>=_))throw Xe(_,f.j);if(1>m)throw Error("Invalid field number: "+m+" (at position "+f.j+")");return f.l=m,f.i=_,!0}function Le(f){switch(f.i){case 0:if(f.i!=0)Le(f);else t:{f=f.h;for(var m=f.h,_=m+10,R=f.i;m<_;)if((R[m++]&128)===0){tt(f,m);break t}throw ie()}break;case 1:f=f.h,tt(f,f.h+8);break;case 2:f.i!=2?Le(f):(m=Bt(f.h)>>>0,f=f.h,tt(f,f.h+m));break;case 5:f=f.h,tt(f,f.h+4);break;case 3:m=f.l;do{if(!je(f))throw Error("Unmatched start-group tag: stream EOF");if(f.i==4){if(f.l!=m)throw Error("Unmatched end-group tag");break}Le(f)}while(!0);break;default:throw Xe(f.i,f.j)}}var Un=[];function Ri(){this.j=[],this.i=0,this.h=new Lt}function Gi(f,m){m.length!==0&&(f.j.push(m),f.i+=m.length)}function ur(f,m){if(m=m.R){Gi(f,f.h.end());for(var _=0;_<m.length;_++)Gi(f,Yt(m[_])||oe())}}var pi=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function mi(f,m){return pi?f[pi]|=m:f.A!==void 0?f.A|=m:(Object.defineProperties(f,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}}),m)}function La(f,m){pi?f[pi]&&(f[pi]&=~m):f.A!==void 0&&(f.A&=~m)}function qe(f){var m;return pi?m=f[pi]:m=f.A,m??0}function Zn(f,m){pi?f[pi]=m:f.A!==void 0?f.A=m:Object.defineProperties(f,{A:{value:m,configurable:!0,writable:!0,enumerable:!1}})}function ui(f){return mi(f,1),f}function Mn(f,m){Zn(m,(f|0)&-51)}function _n(f,m){Zn(m,(f|18)&-41)}var Ci={};function wi(f){return f!==null&&typeof f=="object"&&!Array.isArray(f)&&f.constructor===Object}var ga,Kr=[];Zn(Kr,23),ga=Object.freeze(Kr);function cr(f){if(qe(f.o)&2)throw Error("Cannot mutate an immutable Message")}function ra(f){var m=f.length;(m=m?f[m-1]:void 0)&&wi(m)?m.g=1:(m={},f.push((m.g=1,m)))}function fr(f){var m=f.i+f.G;return f.B||(f.B=f.o[m]={})}function Ln(f,m){return m===-1?null:m>=f.i?f.B?f.B[m]:void 0:f.o[m+f.G]}function Hn(f,m,_,R){cr(f),Di(f,m,_,R)}function Di(f,m,_,R){f.j&&(f.j=void 0),m>=f.i||R?fr(f)[m]=_:(f.o[m+f.G]=_,(f=f.B)&&m in f&&delete f[m])}function N(f,m,_,R){var H=Ln(f,m);Array.isArray(H)||(H=ga);var W=qe(H);if(W&1||ui(H),R)W&2||mi(H,2),_&1||Object.freeze(H);else{R=!(_&2);var k=W&2;_&1||!k?R&&W&16&&!k&&La(H,16):(H=ui(Array.prototype.slice.call(H)),Di(f,m,H))}return H}function et(f,m){var _=Ln(f,m),R=_==null?_:typeof _=="number"||_==="NaN"||_==="Infinity"||_==="-Infinity"?Number(_):void 0;return R!=null&&R!==_&&Di(f,m,R),R}function _t(f,m,_,R,H){f.h||(f.h={});var W=f.h[_],k=N(f,_,3,H);if(!W){var nt=k;W=[];var vt=!!(qe(f.o)&16);k=!!(qe(nt)&2);var Nt=nt;!H&&k&&(nt=Array.prototype.slice.call(nt));for(var Gt=k,he=0;he<nt.length;he++){var ue=nt[he],qt=m,xe=!1;if(xe=xe===void 0?!1:xe,ue=Array.isArray(ue)?new qt(ue):xe?new qt:void 0,ue!==void 0){qt=ue.o;var Re=xe=qe(qt);k&&(Re|=2),vt&&(Re|=16),Re!=xe&&Zn(qt,Re),qt=Re,Gt=Gt||!!(2&qt),W.push(ue)}}return f.h[_]=W,vt=qe(nt),m=vt|33,m=Gt?m&-9:m|8,vt!=m&&(Gt=nt,Object.isFrozen(Gt)&&(Gt=Array.prototype.slice.call(Gt)),Zn(Gt,m),nt=Gt),Nt!==nt&&Di(f,_,nt),(H||R&&k)&&mi(W,2),R&&Object.freeze(W),W}return H||(H=Object.isFrozen(W),R&&!H?Object.freeze(W):!R&&H&&(W=Array.prototype.slice.call(W),f.h[_]=W)),W}function ft(f,m,_){var R=!!(qe(f.o)&2);if(m=_t(f,m,_,R,R),f=N(f,_,3,R),!(R||qe(f)&8)){for(R=0;R<m.length;R++){if(_=m[R],qe(_.o)&2){var H=En(_,!1);H.j=_}else H=_;_!==H&&(m[R]=H,f[R]=H.o)}mi(f,8)}return m}function ut(f,m,_){if(_!=null&&typeof _!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof _+": "+_);Hn(f,m,_)}function Ht(f,m,_,R,H){cr(f);var W=_t(f,_,m,!1,!1);return _=R??new _,f=N(f,m,2,!1),H!=null?(W.splice(H,0,_),f.splice(H,0,_.o)):(W.push(_),f.push(_.o)),_.C()&&La(f,8),_}function Qt(f,m){return f??m}function It(f,m,_){return _=_===void 0?0:_,Qt(et(f,m),_)}var Jt;function re(f){switch(typeof f){case"number":return isFinite(f)?f:String(f);case"object":if(f)if(Array.isArray(f)){if((qe(f)&128)!==0)return f=Array.prototype.slice.call(f),ra(f),f}else{if(Mt&&f!=null&&f instanceof Uint8Array)return kt(f);if(f instanceof Dt){var m=f.V;return m==null?"":typeof m=="string"?m:f.V=kt(m)}}}return f}function _e(f,m,_,R){if(f!=null){if(Array.isArray(f))f=ye(f,m,_,R!==void 0);else if(wi(f)){var H={},W;for(W in f)H[W]=_e(f[W],m,_,R);f=H}else f=m(f,R);return f}}function ye(f,m,_,R){var H=qe(f);R=R?!!(H&16):void 0,f=Array.prototype.slice.call(f);for(var W=0;W<f.length;W++)f[W]=_e(f[W],m,_,R);return _(H,f),f}function $t(f){return f.ja===Ci?f.toJSON():re(f)}function Ae(f,m){f&128&&ra(m)}function cn(f,m,_){if(_=_===void 0?_n:_,f!=null){if(Mt&&f instanceof Uint8Array)return f.length?new Dt(new Uint8Array(f),ce):Ut();if(Array.isArray(f)){var R=qe(f);return R&2?f:m&&!(R&32)&&(R&16||R===0)?(Zn(f,R|2),f):(f=ye(f,cn,R&4?_n:_,!0),m=qe(f),m&4&&m&2&&Object.freeze(f),f)}return f.ja===Ci?Ie(f):f}}function fn(f,m,_,R,H,W,k){if(f=f.h&&f.h[_]){if(R=qe(f),R&2?R=f:(W=F(f,Ie),_n(R,W),Object.freeze(W),R=W),cr(m),k=R==null?ga:ui([]),R!=null){for(W=!!R.length,f=0;f<R.length;f++){var nt=R[f];W=W&&!(qe(nt.o)&2),k[f]=nt.o}W=(W?8:0)|1,f=qe(k),(f&W)!==W&&(Object.isFrozen(k)&&(k=Array.prototype.slice.call(k)),Zn(k,f|W)),m.h||(m.h={}),m.h[_]=R}else m.h&&(m.h[_]=void 0);Di(m,_,k,H)}else Hn(m,_,cn(R,W,k),H)}function Ie(f){return qe(f.o)&2||(f=En(f,!0),mi(f.o,2)),f}function En(f,m){var _=f.o,R=[];mi(R,16);var H=f.constructor.h;if(H&&R.push(H),H=f.B,H){R.length=_.length,R.fill(void 0,R.length,_.length);var W={};R[R.length-1]=W}(qe(_)&128)!==0&&ra(R),m=m||f.C()?_n:Mn,W=f.constructor,Jt=R,R=new W(R),Jt=void 0,f.R&&(R.R=f.R.slice()),W=!!(qe(_)&16);for(var k=H?_.length-1:_.length,nt=0;nt<k;nt++)fn(f,R,nt-f.G,_[nt],!1,W,m);if(H)for(var vt in H)fn(f,R,+vt,H[vt],!0,W,m);return R}function Vt(f,m,_){f==null&&(f=Jt),Jt=void 0;var R=this.constructor.i||0,H=0<R,W=this.constructor.h,k=!1;if(f==null){f=W?[W]:[];var nt=48,vt=!0;H&&(R=0,nt|=128),Zn(f,nt)}else{if(!Array.isArray(f)||W&&W!==f[0])throw Error();var Nt=nt=mi(f,0);if((vt=(16&Nt)!==0)&&((k=(32&Nt)!==0)||(Nt|=32)),H){if(128&Nt)R=0;else if(0<f.length){var Gt=f[f.length-1];if(wi(Gt)&&"g"in Gt){R=0,Nt|=128,delete Gt.g;var he=!0,ue;for(ue in Gt){he=!1;break}he&&f.pop()}}}else if(128&Nt)throw Error();nt!==Nt&&Zn(f,Nt)}this.G=(W?0:-1)-R,this.h=void 0,this.o=f;t:{if(W=this.o.length,R=W-1,W&&(W=this.o[R],wi(W))){this.B=W,this.i=R-this.G;break t}m!==void 0&&-1<m?(this.i=Math.max(m,R+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!H&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(_){m=vt&&!k&&!0,H=this.i;var qt;for(vt=0;vt<_.length;vt++)k=_[vt],k<H?(k+=this.G,(R=f[k])?Wn(R,m):f[k]=ga):(qt||(qt=fr(this)),(R=qt[k])?Wn(R,m):qt[k]=ga)}}Vt.prototype.toJSON=function(){return ye(this.o,$t,Ae)},Vt.prototype.C=function(){return!!(qe(this.o)&2)};function Wn(f,m){if(Array.isArray(f)){var _=qe(f),R=1;!m||_&2||(R|=16),(_&R)!==R&&Zn(f,_|R)}}Vt.prototype.ja=Ci,Vt.prototype.toString=function(){return this.o.toString()};function Se(f,m,_){if(_){var R={},H;for(H in _){var W=_[H],k=W.qa;k||(R.J=W.wa||W.oa.W,W.ia?(R.aa=vi(W.ia),k=(function(nt){return function(vt,Nt,Gt){return nt.J(vt,Nt,Gt,nt.aa)}})(R)):W.ka?(R.Z=Vi(W.da.P,W.ka),k=(function(nt){return function(vt,Nt,Gt){return nt.J(vt,Nt,Gt,nt.Z)}})(R)):k=R.J,W.qa=k),k(m,f,W.da),R={J:R.J,aa:R.aa,Z:R.Z}}}ur(m,f)}var Nn=Symbol();function ii(f,m,_){return f[Nn]||(f[Nn]=function(R,H){return m(R,H,_)})}function gi(f){var m=f[Nn];if(!m){var _=Us(f);m=function(R,H){return pr(R,H,_)},f[Nn]=m}return m}function ci(f){var m=f.ia;if(m)return gi(m);if(m=f.va)return ii(f.da.P,m,f.ka)}function Ye(f){var m=ci(f),_=f.da,R=f.oa.U;return m?function(H,W){return R(H,W,_,m)}:function(H,W){return R(H,W,_)}}function yn(f,m){var _=f[m];return typeof _=="function"&&_.length===0&&(_=_(),f[m]=_),Array.isArray(_)&&(Na in _||Xi in _||0<_.length&&typeof _[0]=="function")?_:void 0}function jn(f,m,_,R,H,W){m.P=f[0];var k=1;if(f.length>k&&typeof f[k]!="number"){var nt=f[k++];_(m,nt)}for(;k<f.length;){_=f[k++];for(var vt=k+1;vt<f.length&&typeof f[vt]!="number";)vt++;switch(nt=f[k++],vt-=k,vt){case 0:R(m,_,nt);break;case 1:(vt=yn(f,k))?(k++,H(m,_,nt,vt)):R(m,_,nt,f[k++]);break;case 2:vt=k++,vt=yn(f,vt),H(m,_,nt,vt,f[k++]);break;case 3:W(m,_,nt,f[k++],f[k++],f[k++]);break;case 4:W(m,_,nt,f[k++],f[k++],f[k++],f[k++]);break;default:throw Error("unexpected number of binary field arguments: "+vt)}}return m}var pn=Symbol();function vi(f){var m=f[pn];if(!m){var _=Qr(f);m=function(R,H){return ki(R,H,_)},f[pn]=m}return m}function Vi(f,m){var _=f[pn];return _||(_=function(R,H){return Se(R,H,m)},f[pn]=_),_}var Xi=Symbol();function $c(f,m){f.push(m)}function tf(f,m,_){f.push(m,_.W)}function Ds(f,m,_,R){var H=vi(R),W=Qr(R).P,k=_.W;f.push(m,function(nt,vt,Nt){return k(nt,vt,Nt,W,H)})}function sa(f,m,_,R,H,W){var k=Vi(R,W),nt=_.W;f.push(m,function(vt,Nt,Gt){return nt(vt,Nt,Gt,R,k)})}function Qr(f){var m=f[Xi];return m||(m=jn(f,f[Xi]=[],$c,tf,Ds,sa),Na in f&&Xi in f&&(f.length=0),m)}var Na=Symbol();function hr(f,m){f[0]=m}function dr(f,m,_,R){var H=_.U;f[m]=R?function(W,k,nt){return H(W,k,nt,R)}:H}function Vl(f,m,_,R,H){var W=_.U,k=gi(R),nt=Us(R).P;f[m]=function(vt,Nt,Gt){return W(vt,Nt,Gt,nt,k,H)}}function Bo(f,m,_,R,H,W,k){var nt=_.U,vt=ii(R,H,W);f[m]=function(Nt,Gt,he){return nt(Nt,Gt,he,R,vt,k)}}function Us(f){var m=f[Na];return m||(m=jn(f,f[Na]={},hr,dr,Vl,Bo),Na in f&&Xi in f&&(f.length=0),m)}function pr(f,m,_){for(;je(m)&&m.i!=4;){var R=m.l,H=_[R];if(!H){var W=_[0];W&&(W=W[R])&&(H=_[R]=Ye(W))}if(!H||!H(m,f,R)){H=m,R=f,W=H.j,Le(H);var k=H;if(!k.ca){if(H=k.h.h-W,k.h.h=W,k=k.h,H==0)H=Ut();else{if(W=Ft(k,H),k.S&&k.m)H=k.i.subarray(W,W+H);else{k=k.i;var nt=W;H=W+H,H=nt===H?oe():vn?k.slice(nt,H):new Uint8Array(k.subarray(nt,H))}H=H.length==0?Ut():new Dt(H,ce)}(W=R.R)?W.push(H):R.R=[H]}}}return f}function ki(f,m,_){for(var R=_.length,H=R%2==1,W=H?1:0;W<R;W+=2)(0,_[W+1])(m,f,_[W]);Se(f,m,H?_[0]:void 0)}function Oa(f,m){return{U:f,W:m}}var Kn=Oa(function(f,m,_){if(f.i!==5)return!1;f=f.h;var R=f.i,H=f.h,W=R[H],k=R[H+1],nt=R[H+2];return R=R[H+3],tt(f,f.h+4),k=(W<<0|k<<8|nt<<16|R<<24)>>>0,f=2*(k>>31)+1,W=k>>>23&255,k&=8388607,Hn(m,_,W==255?k?NaN:1/0*f:W==0?f*Math.pow(2,-149)*k:f*Math.pow(2,W-150)*(k+Math.pow(2,23))),!0},function(f,m,_){if(m=et(m,_),m!=null){Wt(f.h,8*_+5),f=f.h;var R=+m;R===0?0<1/R?fe=pe=0:(pe=0,fe=2147483648):isNaN(R)?(pe=0,fe=2147483647):(R=(_=0>R?-2147483648:0)?-R:R,34028234663852886e22<R?(pe=0,fe=(_|2139095040)>>>0):11754943508222875e-54>R?(R=Math.round(R/Math.pow(2,-149)),pe=0,fe=(_|R)>>>0):(m=Math.floor(Math.log(R)/Math.LN2),R*=Math.pow(2,-m),R=Math.round(8388608*R),16777216<=R&&++m,pe=0,fe=(_|m+127<<23|R&8388607)>>>0)),_=fe,f.h.push(_>>>0&255),f.h.push(_>>>8&255),f.h.push(_>>>16&255),f.h.push(_>>>24&255)}}),va=Oa(function(f,m,_){if(f.i!==0)return!1;var R=f.h,H=0,W=f=0,k=R.i,nt=R.h;do{var vt=k[nt++];H|=(vt&127)<<W,W+=7}while(32>W&&vt&128);for(32<W&&(f|=(vt&127)>>4),W=3;32>W&&vt&128;W+=7)vt=k[nt++],f|=(vt&127)<<W;if(tt(R,nt),128>vt)R=H>>>0,vt=f>>>0,(f=vt&2147483648)&&(R=~R+1>>>0,vt=~vt>>>0,R==0&&(vt=vt+1>>>0)),R=4294967296*vt+(R>>>0);else throw ie();return Hn(m,_,f?-R:R),!0},function(f,m,_){m=Ln(m,_),m!=null&&(typeof m=="string"&&un(m),m!=null&&(Wt(f.h,8*_),typeof m=="number"?(f=f.h,Ve(m),yt(f,fe,pe)):(_=un(m),yt(f.h,_.i,_.h))))}),Io=Oa(function(f,m,_){return f.i!==0?!1:(Hn(m,_,Bt(f.h)),!0)},function(f,m,_){if(m=Ln(m,_),m!=null&&m!=null)if(Wt(f.h,8*_),f=f.h,_=m,0<=_)Wt(f,_);else{for(m=0;9>m;m++)f.h.push(_&127|128),_>>=7;f.h.push(1)}}),Jr=Oa(function(f,m,_){if(f.i!==2)return!1;var R=Bt(f.h)>>>0;f=f.h;var H=Ft(f,R);if(f=f.i,St){var W=f,k;(k=wt)||(k=wt=new TextDecoder("utf-8",{fatal:!0})),f=H+R,W=H===0&&f===W.length?W:W.subarray(H,f);try{var nt=k.decode(W)}catch(he){if(Et===void 0){try{k.decode(new Uint8Array([128]))}catch{}try{k.decode(new Uint8Array([97])),Et=!0}catch{Et=!1}}throw!Et&&(wt=void 0),he}}else{nt=H,R=nt+R,H=[];for(var vt=null,Nt,Gt;nt<R;)Nt=f[nt++],128>Nt?H.push(Nt):224>Nt?nt>=R?A():(Gt=f[nt++],194>Nt||(Gt&192)!==128?(nt--,A()):H.push((Nt&31)<<6|Gt&63)):240>Nt?nt>=R-1?A():(Gt=f[nt++],(Gt&192)!==128||Nt===224&&160>Gt||Nt===237&&160<=Gt||((W=f[nt++])&192)!==128?(nt--,A()):H.push((Nt&15)<<12|(Gt&63)<<6|W&63)):244>=Nt?nt>=R-2?A():(Gt=f[nt++],(Gt&192)!==128||(Nt<<28)+(Gt-144)>>30!==0||((W=f[nt++])&192)!==128||((k=f[nt++])&192)!==128?(nt--,A()):(Nt=(Nt&7)<<18|(Gt&63)<<12|(W&63)<<6|k&63,Nt-=65536,H.push((Nt>>10&1023)+55296,(Nt&1023)+56320))):A(),8192<=H.length&&(vt=st(vt,H),H.length=0);nt=st(vt,H)}return Hn(m,_,nt),!0},function(f,m,_){if(m=Ln(m,_),m!=null){var R=!1;if(R=R===void 0?!1:R,zt){if(R&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(m))throw Error("Found an unpaired surrogate");m=(ee||(ee=new TextEncoder)).encode(m)}else{for(var H=0,W=new Uint8Array(3*m.length),k=0;k<m.length;k++){var nt=m.charCodeAt(k);if(128>nt)W[H++]=nt;else{if(2048>nt)W[H++]=nt>>6|192;else{if(55296<=nt&&57343>=nt){if(56319>=nt&&k<m.length){var vt=m.charCodeAt(++k);if(56320<=vt&&57343>=vt){nt=1024*(nt-55296)+vt-56320+65536,W[H++]=nt>>18|240,W[H++]=nt>>12&63|128,W[H++]=nt>>6&63|128,W[H++]=nt&63|128;continue}else k--}if(R)throw Error("Found an unpaired surrogate");nt=65533}W[H++]=nt>>12|224,W[H++]=nt>>6&63|128}W[H++]=nt&63|128}}m=H===W.length?W:W.subarray(0,H)}Wt(f.h,8*_+2),Wt(f.h,m.length),Gi(f,f.h.end()),Gi(f,m)}}),zo=Oa(function(f,m,_,R,H){if(f.i!==2)return!1;m=Ht(m,_,R),_=f.h.j,R=Bt(f.h)>>>0;var W=f.h.h+R,k=W-_;if(0>=k&&(f.h.j=W,H(m,f,void 0,void 0,void 0),k=W-f.h.h),k)throw Error("Message parsing ended unexpectedly. Expected to read "+(R+" bytes, instead read "+(R-k)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return f.h.h=W,f.h.j=_,!0},function(f,m,_,R,H){if(m=ft(m,R,_),m!=null)for(R=0;R<m.length;R++){var W=f;Wt(W.h,8*_+2);var k=W.h.end();Gi(W,k),k.push(W.i),W=k,H(m[R],f),k=f;var nt=W.pop();for(nt=k.i+k.h.length()-nt;127<nt;)W.push(nt&127|128),nt>>>=7,k.i++;W.push(nt),k.i++}});function mr(f){return function(m,_){t:{if(Un.length){var R=Un.pop();R.setOptions(_),Te(R.h,m,_),m=R}else m=new ve(m,_);try{var H=Us(f),W=pr(new H.P,m,H);break t}finally{H=m.h,H.i=null,H.m=!1,H.l=0,H.j=0,H.h=0,H.S=!1,m.l=-1,m.i=-1,100>Un.length&&Un.push(m)}W=void 0}return W}}function gr(f){return function(){var m=new Ri;ki(this,m,Qr(f)),Gi(m,m.h.end());for(var _=new Uint8Array(m.i),R=m.j,H=R.length,W=0,k=0;k<H;k++){var nt=R[k];_.set(nt,W),W+=nt.length}return m.j=[_],_}}function Pa(f){Vt.call(this,f)}T(Pa,Vt);var Qn=[Pa,1,Io,2,Kn,3,Jr,4,Jr];Pa.prototype.l=gr(Qn);function oa(f){Vt.call(this,f,-1,Ls)}T(oa,Vt),oa.prototype.addClassification=function(f,m){return Ht(this,1,Pa,f,m),this};var Ls=[1],vr=mr([oa,1,zo,Qn]);function _r(f){Vt.call(this,f)}T(_r,Vt);var Ns=[_r,1,Kn,2,Kn,3,Kn,4,Kn,5,Kn];_r.prototype.l=gr(Ns);function Os(f){Vt.call(this,f,-1,$r)}T(Os,Vt);var $r=[1],ts=mr([Os,1,zo,Ns]);function es(f){Vt.call(this,f)}T(es,Vt);var Xl=[es,1,Kn,2,Kn,3,Kn,4,Kn,5,Kn,6,va],ef=mr(Xl);es.prototype.l=gr(Xl);function kl(f,m,_){if(_=f.createShader(_===0?f.VERTEX_SHADER:f.FRAGMENT_SHADER),f.shaderSource(_,m),f.compileShader(_),!f.getShaderParameter(_,f.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+f.getShaderInfoLog(_));return _}function Ps(f){return ft(f,Pa,1).map(function(m){var _=Ln(m,1);return{index:_??0,score:It(m,2),label:Ln(m,3)!=null?Qt(Ln(m,3),""):void 0,displayName:Ln(m,4)!=null?Qt(Ln(m,4),""):void 0}})}function Wl(f){return{x:It(f,1),y:It(f,2),z:It(f,3),visibility:et(f,4)!=null?It(f,4):void 0}}function jl(f){return f.map(function(m){return ft(ts(m),_r,1).map(Wl)})}function Ho(f,m){this.i=f,this.h=m,this.m=0}function ql(f,m,_){return nf(f,m),typeof f.h.canvas.transferToImageBitmap=="function"?Promise.resolve(f.h.canvas.transferToImageBitmap()):_?Promise.resolve(f.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(f.h.canvas):(f.j===void 0&&(f.j=document.createElement("canvas")),new Promise(function(R){f.j.height=f.h.canvas.height,f.j.width=f.h.canvas.width,f.j.getContext("2d",{}).drawImage(f.h.canvas,0,0,f.h.canvas.width,f.h.canvas.height),R(f.j)}))}function nf(f,m){var _=f.h;if(f.s===void 0){var R=kl(_,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),H=kl(_,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),W=_.createProgram();if(_.attachShader(W,R),_.attachShader(W,H),_.linkProgram(W),!_.getProgramParameter(W,_.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+_.getProgramInfoLog(W));R=f.s=W,_.useProgram(R),H=_.getUniformLocation(R,"sampler0"),f.l={O:_.getAttribLocation(R,"aVertex"),N:_.getAttribLocation(R,"aTex"),xa:H},f.v=_.createBuffer(),_.bindBuffer(_.ARRAY_BUFFER,f.v),_.enableVertexAttribArray(f.l.O),_.vertexAttribPointer(f.l.O,2,_.FLOAT,!1,0,0),_.bufferData(_.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),_.STATIC_DRAW),_.bindBuffer(_.ARRAY_BUFFER,null),f.u=_.createBuffer(),_.bindBuffer(_.ARRAY_BUFFER,f.u),_.enableVertexAttribArray(f.l.N),_.vertexAttribPointer(f.l.N,2,_.FLOAT,!1,0,0),_.bufferData(_.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),_.STATIC_DRAW),_.bindBuffer(_.ARRAY_BUFFER,null),_.uniform1i(H,0)}R=f.l,_.useProgram(f.s),_.canvas.width=m.width,_.canvas.height=m.height,_.viewport(0,0,m.width,m.height),_.activeTexture(_.TEXTURE0),f.i.bindTexture2d(m.glName),_.enableVertexAttribArray(R.O),_.bindBuffer(_.ARRAY_BUFFER,f.v),_.vertexAttribPointer(R.O,2,_.FLOAT,!1,0,0),_.enableVertexAttribArray(R.N),_.bindBuffer(_.ARRAY_BUFFER,f.u),_.vertexAttribPointer(R.N,2,_.FLOAT,!1,0,0),_.bindFramebuffer(_.DRAW_FRAMEBUFFER?_.DRAW_FRAMEBUFFER:_.FRAMEBUFFER,null),_.clearColor(0,0,0,0),_.clear(_.COLOR_BUFFER_BIT),_.colorMask(!0,!0,!0,!0),_.drawArrays(_.TRIANGLE_FAN,0,4),_.disableVertexAttribArray(R.O),_.disableVertexAttribArray(R.N),_.bindBuffer(_.ARRAY_BUFFER,null),f.i.bindTexture2d(0)}function Yl(f){this.h=f}var af=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function rf(f,m){return m+f}function Zl(f,m){window[f]=m}function sf(f){var m=document.createElement("script");return m.setAttribute("src",f),m.setAttribute("crossorigin","anonymous"),new Promise(function(_){m.addEventListener("load",function(){_()},!1),m.addEventListener("error",function(){_()},!1),document.body.appendChild(m)})}function Go(){return D(function(f){switch(f.h){case 1:return f.s=2,I(f,WebAssembly.instantiate(af),4);case 4:f.h=3,f.s=0;break;case 2:return f.s=0,f.l=null,f.return(!1);case 3:return f.return(!0)}})}function Vo(f){if(this.h=f,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=f&&f.locateFile||rf,typeof window=="object")var m=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")m=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=m,f.options){m=g(Object.keys(f.options));for(var _=m.next();!_.done;_=m.next()){_=_.value;var R=f.options[_].default;R!==void 0&&(this.l[_]=typeof R=="function"?R():R)}}}o=Vo.prototype,o.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function of(f){var m,_,R,H,W,k,nt,vt,Nt,Gt,he;return D(function(ue){switch(ue.h){case 1:return f.ga?(m=f.h.files===void 0?[]:typeof f.h.files=="function"?f.h.files(f.l):f.h.files,I(ue,Go(),2)):ue.return();case 2:if(_=ue.i,typeof window=="object")return Zl("createMediapipeSolutionsWasm",{locateFile:f.locateFile}),Zl("createMediapipeSolutionsPackedAssets",{locateFile:f.locateFile}),k=m.filter(function(qt){return qt.data!==void 0}),nt=m.filter(function(qt){return qt.data===void 0}),vt=Promise.all(k.map(function(qt){var xe=Fs(f,qt.url);if(qt.path!==void 0){var Re=qt.path;xe=xe.then(function(an){return f.overrideFile(Re,an),Promise.resolve(an)})}return xe})),Nt=Promise.all(nt.map(function(qt){return qt.simd===void 0||qt.simd&&_||!qt.simd&&!_?sf(f.locateFile(qt.url,f.ha)):Promise.resolve()})).then(function(){var qt,xe,Re;return D(function(an){if(an.h==1)return qt=window.createMediapipeSolutionsWasm,xe=window.createMediapipeSolutionsPackedAssets,Re=f,I(an,qt(xe),2);Re.i=an.i,an.h=0})}),Gt=(function(){return D(function(qt){return f.h.graph&&f.h.graph.url?qt=I(qt,Fs(f,f.h.graph.url),0):(qt.h=0,qt=void 0),qt})})(),I(ue,Promise.all([Nt,vt,Gt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return R=m.filter(function(qt){return qt.simd===void 0||qt.simd&&_||!qt.simd&&!_}).map(function(qt){return f.locateFile(qt.url,f.ha)}),importScripts.apply(null,v(R)),H=f,I(ue,createMediapipeSolutionsWasm(Module),6);case 6:H.i=ue.i,f.m=new OffscreenCanvas(1,1),f.i.canvas=f.m,W=f.i.GL.createContext(f.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),f.i.GL.makeContextCurrent(W),ue.h=4;break;case 7:if(f.m=document.createElement("canvas"),he=f.m.getContext("webgl2",{}),!he&&(he=f.m.getContext("webgl",{}),!he))return alert("Failed to create WebGL canvas context when passing video frame."),ue.return();f.K=he,f.i.canvas=f.m,f.i.createContext(f.m,!0,!0,{});case 4:f.j=new f.i.SolutionWasm,f.ga=!1,ue.h=0}})}function lf(f){var m,_,R,H,W,k,nt,vt;return D(function(Nt){if(Nt.h==1){if(f.h.graph&&f.h.graph.url&&f.fa===f.h.graph.url)return Nt.return();if(f.u=!0,!f.h.graph||!f.h.graph.url){Nt.h=2;return}return f.fa=f.h.graph.url,I(Nt,Fs(f,f.h.graph.url),3)}for(Nt.h!=2&&(m=Nt.i,f.j.loadGraph(m)),_=g(Object.keys(f.D)),R=_.next();!R.done;R=_.next())H=R.value,f.j.overrideFile(H,f.D[H]);if(f.D={},f.h.listeners)for(W=g(f.h.listeners),k=W.next();!k.done;k=W.next())nt=k.value,ff(f,nt);vt=f.l,f.l={},f.setOptions(vt),Nt.h=0})}o.reset=function(){var f=this;return D(function(m){f.j&&(f.j.reset(),f.s={},f.v={}),m.h=0})},o.setOptions=function(f,m){var _=this;if(m=m||this.h.options){for(var R=[],H=[],W={},k=g(Object.keys(f)),nt=k.next();!nt.done;W={X:W.X,Y:W.Y},nt=k.next())if(nt=nt.value,!(nt in this.l&&this.l[nt]===f[nt])){this.l[nt]=f[nt];var vt=m[nt];vt!==void 0&&(vt.onChange&&(W.X=vt.onChange,W.Y=f[nt],R.push((function(Nt){return function(){var Gt;return D(function(he){if(he.h==1)return I(he,Nt.X(Nt.Y),2);Gt=he.i,Gt===!0&&(_.u=!0),he.h=0})}})(W))),vt.graphOptionXref&&(nt=Object.assign({},{calculatorName:"",calculatorIndex:0},vt.graphOptionXref,{valueNumber:vt.type===1?f[nt]:0,valueBoolean:vt.type===0?f[nt]:!1,valueString:vt.type===2?f[nt]:""}),H.push(nt)))}(R.length!==0||H.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(H),this.F=(this.F===void 0?[]:this.F).concat(R))}};function Kl(f){var m,_,R,H,W,k,nt;return D(function(vt){switch(vt.h){case 1:if(!f.u)return vt.return();if(!f.F){vt.h=2;break}m=g(f.F),_=m.next();case 3:if(_.done){vt.h=5;break}return R=_.value,I(vt,R(),4);case 4:_=m.next(),vt.h=3;break;case 5:f.F=void 0;case 2:if(f.H){for(H=new f.i.GraphOptionChangeRequestList,W=g(f.H),k=W.next();!k.done;k=W.next())nt=k.value,H.push_back(nt);f.j.changeOptions(H),H.delete(),f.H=void 0}f.u=!1,vt.h=0}})}o.initialize=function(){var f=this;return D(function(m){return m.h==1?I(m,of(f),2):m.h!=3?I(m,lf(f),3):I(m,Kl(f),0)})};function Fs(f,m){var _,R;return D(function(H){return m in f.L?H.return(f.L[m]):(_=f.locateFile(m,""),R=fetch(_).then(function(W){return W.arrayBuffer()}),f.L[m]=R,H.return(R))})}o.overrideFile=function(f,m){this.j?this.j.overrideFile(f,m):this.D[f]=m},o.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},o.send=function(f,m){var _=this,R,H,W,k,nt,vt,Nt,Gt,he;return D(function(ue){switch(ue.h){case 1:return _.h.inputs?(R=1e3*(m??performance.now()),I(ue,_.I,2)):ue.return();case 2:return I(ue,_.initialize(),3);case 3:for(H=new _.i.PacketDataList,W=g(Object.keys(f)),k=W.next();!k.done;k=W.next())if(nt=k.value,vt=_.h.inputs[nt]){t:{var qt=f[nt];switch(vt.type){case"video":var xe=_.s[vt.stream];if(xe||(xe=new Ho(_.i,_.K),_.s[vt.stream]=xe),xe.m===0&&(xe.m=xe.i.createTexture()),typeof HTMLVideoElement<"u"&&qt instanceof HTMLVideoElement)var Re=qt.videoWidth,an=qt.videoHeight;else typeof HTMLImageElement<"u"&&qt instanceof HTMLImageElement?(Re=qt.naturalWidth,an=qt.naturalHeight):(Re=qt.width,an=qt.height);an={glName:xe.m,width:Re,height:an},Re=xe.h,Re.canvas.width=an.width,Re.canvas.height=an.height,Re.activeTexture(Re.TEXTURE0),xe.i.bindTexture2d(xe.m),Re.texImage2D(Re.TEXTURE_2D,0,Re.RGBA,Re.RGBA,Re.UNSIGNED_BYTE,qt),xe.i.bindTexture2d(0),xe=an;break t;case"detections":for(xe=_.s[vt.stream],xe||(xe=new Yl(_.i),_.s[vt.stream]=xe),xe.data||(xe.data=new xe.h.DetectionListData),xe.data.reset(qt.length),an=0;an<qt.length;++an){Re=qt[an];var Ze=xe.data,Sn=Ze.setBoundingBox,_i=an,Gn=Re.la,ze=new es;if(ut(ze,1,Gn.ra),ut(ze,2,Gn.sa),ut(ze,3,Gn.height),ut(ze,4,Gn.width),ut(ze,5,Gn.rotation),Hn(ze,6,Gn.pa),Gn=ze.l(),Sn.call(Ze,_i,Gn),Re.ea)for(Ze=0;Ze<Re.ea.length;++Ze){ze=Re.ea[Ze],Sn=xe.data,_i=Sn.addNormalizedLandmark,Gn=an,ze=Object.assign({},ze,{visibility:ze.visibility?ze.visibility:0});var On=new _r;ut(On,1,ze.x),ut(On,2,ze.y),ut(On,3,ze.z),ze.visibility&&ut(On,4,ze.visibility),ze=On.l(),_i.call(Sn,Gn,ze)}if(Re.ba)for(Ze=0;Ze<Re.ba.length;++Ze)Sn=xe.data,_i=Sn.addClassification,Gn=an,ze=Re.ba[Ze],On=new Pa,ut(On,2,ze.score),ze.index&&Hn(On,1,ze.index),ze.label&&Hn(On,3,ze.label),ze.displayName&&Hn(On,4,ze.displayName),ze=On.l(),_i.call(Sn,Gn,ze)}xe=xe.data;break t;default:xe={}}}switch(Nt=xe,Gt=vt.stream,vt.type){case"video":H.pushTexture2d(Object.assign({},Nt,{stream:Gt,timestamp:R}));break;case"detections":he=Nt,he.stream=Gt,he.timestamp=R,H.pushDetectionList(he);break;default:throw Error("Unknown input config type: '"+vt.type+"'")}}return _.j.send(H),I(ue,_.I,4);case 4:H.delete(),ue.h=0}})};function uf(f,m,_){var R,H,W,k,nt,vt,Nt,Gt,he,ue,qt,xe,Re,an;return D(function(Ze){switch(Ze.h){case 1:if(!_)return Ze.return(m);for(R={},H=0,W=g(Object.keys(_)),k=W.next();!k.done;k=W.next())nt=k.value,vt=_[nt],typeof vt!="string"&&vt.type==="texture"&&m[vt.stream]!==void 0&&++H;1<H&&(f.M=!1),Nt=g(Object.keys(_)),k=Nt.next();case 2:if(k.done){Ze.h=4;break}if(Gt=k.value,he=_[Gt],typeof he=="string")return Re=R,an=Gt,I(Ze,cf(f,Gt,m[he]),14);if(ue=m[he.stream],he.type==="detection_list"){if(ue){for(var Sn=ue.getRectList(),_i=ue.getLandmarksList(),Gn=ue.getClassificationsList(),ze=[],On=0;On<Sn.size();++On){var Wi=ef(Sn.get(On)),Xo=It(Wi,1),$l=It(Wi,2),tu=It(Wi,3),eu=It(Wi,4),hf=It(Wi,5,0),Bs=void 0;Bs=Bs===void 0?0:Bs,Wi={la:{ra:Xo,sa:$l,height:tu,width:eu,rotation:hf,pa:Qt(Ln(Wi,6),Bs)},ea:ft(ts(_i.get(On)),_r,1).map(Wl),ba:Ps(vr(Gn.get(On)))},ze.push(Wi)}Sn=ze}else Sn=[];R[Gt]=Sn,Ze.h=7;break}if(he.type==="proto_list"){if(ue){for(Sn=Array(ue.size()),_i=0;_i<ue.size();_i++)Sn[_i]=ue.get(_i);ue.delete()}else Sn=[];R[Gt]=Sn,Ze.h=7;break}if(ue===void 0){Ze.h=3;break}if(he.type==="float_list"){R[Gt]=ue,Ze.h=7;break}if(he.type==="proto"){R[Gt]=ue,Ze.h=7;break}if(he.type!=="texture")throw Error("Unknown output config type: '"+he.type+"'");return qt=f.v[Gt],qt||(qt=new Ho(f.i,f.K),f.v[Gt]=qt),I(Ze,ql(qt,ue,f.M),13);case 13:xe=Ze.i,R[Gt]=xe;case 7:he.transform&&R[Gt]&&(R[Gt]=he.transform(R[Gt])),Ze.h=3;break;case 14:Re[an]=Ze.i;case 3:k=Nt.next(),Ze.h=2;break;case 4:return Ze.return(R)}})}function cf(f,m,_){var R;return D(function(H){return typeof _=="number"||_ instanceof Uint8Array||_ instanceof f.i.Uint8BlobList?H.return(_):_ instanceof f.i.Texture2dDataOut?(R=f.v[m],R||(R=new Ho(f.i,f.K),f.v[m]=R),H.return(ql(R,_,f.M))):H.return(void 0)})}function ff(f,m){for(var _=m.name||"$",R=[].concat(v(m.wants)),H=new f.i.StringList,W=g(m.wants),k=W.next();!k.done;k=W.next())H.push_back(k.value);W=f.i.PacketListener.implement({onResults:function(nt){for(var vt={},Nt=0;Nt<m.wants.length;++Nt)vt[R[Nt]]=nt.get(Nt);var Gt=f.listeners[_];Gt&&(f.I=uf(f,vt,m.outs).then(function(he){he=Gt(he);for(var ue=0;ue<m.wants.length;++ue){var qt=vt[R[ue]];typeof qt=="object"&&qt.hasOwnProperty&&qt.hasOwnProperty("delete")&&qt.delete()}he&&(f.I=he)}))}}),f.j.attachMultiListener(H,W),H.delete()}o.onResults=function(f,m){this.listeners[m||"$"]=f},rt("Solution",Vo),rt("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Ql(f){return f===void 0&&(f=0),f===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Jl(f){var m=this;f=f||{},this.h=new Vo({locateFile:f.locateFile,files:function(_){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Ql(_.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:jl},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:jl},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(_){return _.map(function(R){return Ps(vr(R))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(_){var R,H,W;return D(function(k){return k.h==1?(R=Ql(_),H="third_party/mediapipe/modules/hand_landmark/"+R,I(k,Fs(m.h,R),2)):(W=k.i,m.h.overrideFile(H,W),k.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}o=Jl.prototype,o.close=function(){return this.h.close(),Promise.resolve()},o.onResults=function(f){this.h.onResults(f)},o.initialize=function(){var f=this;return D(function(m){return I(m,f.h.initialize(),0)})},o.reset=function(){this.h.reset()},o.send=function(f){var m=this;return D(function(_){return I(_,m.h.send(f),0)})},o.setOptions=function(f){this.h.setOptions(f)},rt("Hands",Jl),rt("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),rt("VERSION","0.4.1675469240")}).call(cd)),cd}var Fy=Py(),fd={},yv;function By(){return yv||(yv=1,(function(){function o(B){var D=0;return function(){return D<B.length?{done:!1,value:B[D++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(B,D,j){return B==Array.prototype||B==Object.prototype||(B[D]=j.value),B};function i(B){B=[typeof globalThis=="object"&&globalThis,B,typeof window=="object"&&window,typeof self=="object"&&self,typeof zc=="object"&&zc];for(var D=0;D<B.length;++D){var j=B[D];if(j&&j.Math==Math)return j}throw Error("Cannot find global object")}var r=i(this);function l(B,D){if(D)t:{var j=r;B=B.split(".");for(var K=0;K<B.length-1;K++){var lt=B[K];if(!(lt in j))break t;j=j[lt]}B=B[B.length-1],K=j[B],D=D(K),D!=K&&D!=null&&e(j,B,{configurable:!0,writable:!0,value:D})}}l("Symbol",function(B){function D(rt){if(this instanceof D)throw new TypeError("Symbol is not a constructor");return new j(K+(rt||"")+"_"+lt++,rt)}function j(rt,U){this.g=rt,e(this,"description",{configurable:!0,writable:!0,value:U})}if(B)return B;j.prototype.toString=function(){return this.g};var K="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",lt=0;return D}),l("Symbol.iterator",function(B){if(B)return B;B=Symbol("Symbol.iterator");for(var D="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),j=0;j<D.length;j++){var K=r[D[j]];typeof K=="function"&&typeof K.prototype[B]!="function"&&e(K.prototype,B,{configurable:!0,writable:!0,value:function(){return u(o(this))}})}return B});function u(B){return B={next:B},B[Symbol.iterator]=function(){return this},B}function d(B){var D=typeof Symbol<"u"&&Symbol.iterator&&B[Symbol.iterator];return D?D.call(B):{next:o(B)}}function g(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function v(B){if(B.i)throw new TypeError("Generator is already running");B.i=!0}g.prototype.l=function(B){this.o=B};function p(B,D){B.h={F:D,G:!0},B.j=B.m}g.prototype.return=function(B){this.h={return:B},this.j=this.m};function S(B){this.g=new g,this.h=B}function E(B,D){v(B.g);var j=B.g.g;return j?x(B,"return"in j?j.return:function(K){return{value:K,done:!0}},D,B.g.return):(B.g.return(D),b(B))}function x(B,D,j,K){try{var lt=D.call(B.g.g,j);if(!(lt instanceof Object))throw new TypeError("Iterator result "+lt+" is not an object");if(!lt.done)return B.g.i=!1,lt;var rt=lt.value}catch(U){return B.g.g=null,p(B.g,U),b(B)}return B.g.g=null,K.call(B.g,rt),b(B)}function b(B){for(;B.g.j;)try{var D=B.h(B.g);if(D)return B.g.i=!1,{value:D.value,done:!1}}catch(j){B.g.o=void 0,p(B.g,j)}if(B.g.i=!1,B.g.h){if(D=B.g.h,B.g.h=null,D.G)throw D.F;return{value:D.return,done:!0}}return{value:void 0,done:!0}}function C(B){this.next=function(D){return v(B.g),B.g.g?D=x(B,B.g.g.next,D,B.g.l):(B.g.l(D),D=b(B)),D},this.throw=function(D){return v(B.g),B.g.g?D=x(B,B.g.g.throw,D,B.g.l):(p(B.g,D),D=b(B)),D},this.return=function(D){return E(B,D)},this[Symbol.iterator]=function(){return this}}function O(B){function D(K){return B.next(K)}function j(K){return B.throw(K)}return new Promise(function(K,lt){function rt(U){U.done?K(U.value):Promise.resolve(U.value).then(D,j).then(rt,lt)}rt(B.next())})}l("Promise",function(B){function D(U){this.h=0,this.i=void 0,this.g=[],this.o=!1;var F=this.j();try{U(F.resolve,F.reject)}catch(at){F.reject(at)}}function j(){this.g=null}function K(U){return U instanceof D?U:new D(function(F){F(U)})}if(B)return B;j.prototype.h=function(U){if(this.g==null){this.g=[];var F=this;this.i(function(){F.l()})}this.g.push(U)};var lt=r.setTimeout;j.prototype.i=function(U){lt(U,0)},j.prototype.l=function(){for(;this.g&&this.g.length;){var U=this.g;this.g=[];for(var F=0;F<U.length;++F){var at=U[F];U[F]=null;try{at()}catch(ct){this.j(ct)}}}this.g=null},j.prototype.j=function(U){this.i(function(){throw U})},D.prototype.j=function(){function U(ct){return function(bt){at||(at=!0,ct.call(F,bt))}}var F=this,at=!1;return{resolve:U(this.A),reject:U(this.l)}},D.prototype.A=function(U){if(U===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(U instanceof D)this.C(U);else{t:switch(typeof U){case"object":var F=U!=null;break t;case"function":F=!0;break t;default:F=!1}F?this.v(U):this.m(U)}},D.prototype.v=function(U){var F=void 0;try{F=U.then}catch(at){this.l(at);return}typeof F=="function"?this.D(F,U):this.m(U)},D.prototype.l=function(U){this.u(2,U)},D.prototype.m=function(U){this.u(1,U)},D.prototype.u=function(U,F){if(this.h!=0)throw Error("Cannot settle("+U+", "+F+"): Promise already settled in state"+this.h);this.h=U,this.i=F,this.h===2&&this.B(),this.H()},D.prototype.B=function(){var U=this;lt(function(){if(U.I()){var F=r.console;typeof F<"u"&&F.error(U.i)}},1)},D.prototype.I=function(){if(this.o)return!1;var U=r.CustomEvent,F=r.Event,at=r.dispatchEvent;return typeof at>"u"?!0:(typeof U=="function"?U=new U("unhandledrejection",{cancelable:!0}):typeof F=="function"?U=new F("unhandledrejection",{cancelable:!0}):(U=r.document.createEvent("CustomEvent"),U.initCustomEvent("unhandledrejection",!1,!0,U)),U.promise=this,U.reason=this.i,at(U))},D.prototype.H=function(){if(this.g!=null){for(var U=0;U<this.g.length;++U)rt.h(this.g[U]);this.g=null}};var rt=new j;return D.prototype.C=function(U){var F=this.j();U.s(F.resolve,F.reject)},D.prototype.D=function(U,F){var at=this.j();try{U.call(F,at.resolve,at.reject)}catch(ct){at.reject(ct)}},D.prototype.then=function(U,F){function at(it,Mt){return typeof it=="function"?function(Pt){try{ct(it(Pt))}catch(kt){bt(kt)}}:Mt}var ct,bt,V=new D(function(it,Mt){ct=it,bt=Mt});return this.s(at(U,ct),at(F,bt)),V},D.prototype.catch=function(U){return this.then(void 0,U)},D.prototype.s=function(U,F){function at(){switch(ct.h){case 1:U(ct.i);break;case 2:F(ct.i);break;default:throw Error("Unexpected state: "+ct.h)}}var ct=this;this.g==null?rt.h(at):this.g.push(at),this.o=!0},D.resolve=K,D.reject=function(U){return new D(function(F,at){at(U)})},D.race=function(U){return new D(function(F,at){for(var ct=d(U),bt=ct.next();!bt.done;bt=ct.next())K(bt.value).s(F,at)})},D.all=function(U){var F=d(U),at=F.next();return at.done?K([]):new D(function(ct,bt){function V(Pt){return function(kt){it[Pt]=kt,Mt--,Mt==0&&ct(it)}}var it=[],Mt=0;do it.push(void 0),Mt++,K(at.value).s(V(it.length-1),bt),at=F.next();while(!at.done)})},D});var T=typeof Object.assign=="function"?Object.assign:function(B,D){for(var j=1;j<arguments.length;j++){var K=arguments[j];if(K)for(var lt in K)Object.prototype.hasOwnProperty.call(K,lt)&&(B[lt]=K[lt])}return B};l("Object.assign",function(B){return B||T});var M=this||self,P={facingMode:"user",width:640,height:480};function X(B,D){this.video=B,this.i=0,this.h=Object.assign(Object.assign({},P),D)}X.prototype.stop=function(){var B=this,D,j,K,lt;return O(new C(new S(function(rt){if(B.g){for(D=B.g.getTracks(),j=d(D),K=j.next();!K.done;K=j.next())lt=K.value,lt.stop();B.g=void 0}rt.j=0})))},X.prototype.start=function(){var B=this,D;return O(new C(new S(function(j){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),D=B.h,j.return(navigator.mediaDevices.getUserMedia({video:{facingMode:D.facingMode,width:D.width,height:D.height}}).then(function(K){Q(B,K)}).catch(function(K){var lt="Failed to acquire camera feed: "+K;throw console.error(lt),alert(lt),K}))})))};function I(B){window.requestAnimationFrame(function(){Y(B)})}function Q(B,D){B.g=D,B.video.srcObject=D,B.video.onloadedmetadata=function(){B.video.play(),I(B)}}function Y(B){var D=null;B.video.paused||B.video.currentTime===B.i||(B.i=B.video.currentTime,D=B.h.onFrame()),D?D.then(function(){I(B)}):I(B)}var q=["Camera"],w=M;q[0]in w||typeof w.execScript>"u"||w.execScript("var "+q[0]);for(var z;q.length&&(z=q.shift());)q.length||X===void 0?w[z]&&w[z]!==Object.prototype[z]?w=w[z]:w=w[z]={}:w[z]=X}).call(fd)),fd}var Iy=By();const zp="183",zy=0,Sv=1,Hy=2,Lc=1,Gy=2,Ol=3,Zr=0,bi=1,nr=2,ar=0,Ro=1,Mv=2,Ev=3,Tv=4,Vy=5,Ts=100,Xy=101,ky=102,Wy=103,jy=104,qy=200,Yy=201,Zy=202,Ky=203,jd=204,qd=205,Qy=206,Jy=207,$y=208,tS=209,eS=210,nS=211,iS=212,aS=213,rS=214,Yd=0,Zd=1,Kd=2,wo=3,Qd=4,Jd=5,$d=6,tp=7,y_=0,sS=1,oS=2,Ra=0,S_=1,M_=2,E_=3,T_=4,b_=5,A_=6,R_=7,C_=300,Cs=301,Do=302,hd=303,dd=304,jc=306,ep=1e3,ir=1001,np=1002,ni=1003,lS=1004,ac=1005,oi=1006,pd=1007,As=1008,ia=1009,w_=1010,D_=1011,Fl=1012,Hp=1013,Da=1014,ba=1015,sr=1016,Gp=1017,Vp=1018,Bl=1020,U_=35902,L_=35899,N_=1021,O_=1022,pa=1023,or=1026,Rs=1027,P_=1028,Xp=1029,Uo=1030,kp=1031,Wp=1033,Nc=33776,Oc=33777,Pc=33778,Fc=33779,ip=35840,ap=35841,rp=35842,sp=35843,op=36196,lp=37492,up=37496,cp=37488,fp=37489,hp=37490,dp=37491,pp=37808,mp=37809,gp=37810,vp=37811,_p=37812,xp=37813,yp=37814,Sp=37815,Mp=37816,Ep=37817,Tp=37818,bp=37819,Ap=37820,Rp=37821,Cp=36492,wp=36494,Dp=36495,Up=36283,Lp=36284,Np=36285,Op=36286,uS=3200,cS=0,fS=1,qr="",ea="srgb",Lo="srgb-linear",Hc="linear",nn="srgb",ho=7680,bv=519,hS=512,dS=513,pS=514,jp=515,mS=516,gS=517,qp=518,vS=519,Av=35044,Rv="300 es",Aa=2e3,Gc=2001;function _S(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Vc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function xS(){const o=Vc("canvas");return o.style.display="block",o}const Cv={};function wv(...o){const e="THREE."+o.shift();console.log(e,...o)}function F_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function Me(...o){o=F_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Je(...o){o=F_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Xc(...o){const e=o.join(" ");e in Cv||(Cv[e]=!0,Me(...o))}function yS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const SS={[Yd]:Zd,[Kd]:$d,[Qd]:tp,[wo]:Jd,[Zd]:Yd,[$d]:Kd,[tp]:Qd,[Jd]:wo};class Oo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=Math.PI/180,Pp=180/Math.PI;function zl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ri[o&255]+ri[o>>8&255]+ri[o>>16&255]+ri[o>>24&255]+"-"+ri[e&255]+ri[e>>8&255]+"-"+ri[e>>16&15|64]+ri[e>>24&255]+"-"+ri[i&63|128]+ri[i>>8&255]+"-"+ri[i>>16&255]+ri[i>>24&255]+ri[r&255]+ri[r>>8&255]+ri[r>>16&255]+ri[r>>24&255]).toLowerCase()}function Ge(o,e,i){return Math.max(e,Math.min(i,o))}function MS(o,e){return(o%e+e)%e}function md(o,e,i){return(1-i)*o+i*e}function Al(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ti(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ln{constructor(e=0,i=0){ln.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ge(this.x,e.x,i.x),this.y=Ge(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ge(this.x,e,i),this.y=Ge(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ge(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ge(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Po{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,g){let v=r[l+0],p=r[l+1],S=r[l+2],E=r[l+3],x=u[d+0],b=u[d+1],C=u[d+2],O=u[d+3];if(E!==O||v!==x||p!==b||S!==C){let T=v*x+p*b+S*C+E*O;T<0&&(x=-x,b=-b,C=-C,O=-O,T=-T);let M=1-g;if(T<.9995){const P=Math.acos(T),X=Math.sin(P);M=Math.sin(M*P)/X,g=Math.sin(g*P)/X,v=v*M+x*g,p=p*M+b*g,S=S*M+C*g,E=E*M+O*g}else{v=v*M+x*g,p=p*M+b*g,S=S*M+C*g,E=E*M+O*g;const P=1/Math.sqrt(v*v+p*p+S*S+E*E);v*=P,p*=P,S*=P,E*=P}}e[i]=v,e[i+1]=p,e[i+2]=S,e[i+3]=E}static multiplyQuaternionsFlat(e,i,r,l,u,d){const g=r[l],v=r[l+1],p=r[l+2],S=r[l+3],E=u[d],x=u[d+1],b=u[d+2],C=u[d+3];return e[i]=g*C+S*E+v*b-p*x,e[i+1]=v*C+S*x+p*E-g*b,e[i+2]=p*C+S*b+g*x-v*E,e[i+3]=S*C-g*E-v*x-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,g=Math.cos,v=Math.sin,p=g(r/2),S=g(l/2),E=g(u/2),x=v(r/2),b=v(l/2),C=v(u/2);switch(d){case"XYZ":this._x=x*S*E+p*b*C,this._y=p*b*E-x*S*C,this._z=p*S*C+x*b*E,this._w=p*S*E-x*b*C;break;case"YXZ":this._x=x*S*E+p*b*C,this._y=p*b*E-x*S*C,this._z=p*S*C-x*b*E,this._w=p*S*E+x*b*C;break;case"ZXY":this._x=x*S*E-p*b*C,this._y=p*b*E+x*S*C,this._z=p*S*C+x*b*E,this._w=p*S*E-x*b*C;break;case"ZYX":this._x=x*S*E-p*b*C,this._y=p*b*E+x*S*C,this._z=p*S*C-x*b*E,this._w=p*S*E+x*b*C;break;case"YZX":this._x=x*S*E+p*b*C,this._y=p*b*E+x*S*C,this._z=p*S*C-x*b*E,this._w=p*S*E-x*b*C;break;case"XZY":this._x=x*S*E-p*b*C,this._y=p*b*E-x*S*C,this._z=p*S*C+x*b*E,this._w=p*S*E+x*b*C;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],g=i[5],v=i[9],p=i[2],S=i[6],E=i[10],x=r+g+E;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(S-v)*b,this._y=(u-p)*b,this._z=(d-l)*b}else if(r>g&&r>E){const b=2*Math.sqrt(1+r-g-E);this._w=(S-v)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+p)/b}else if(g>E){const b=2*Math.sqrt(1+g-r-E);this._w=(u-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(v+S)/b}else{const b=2*Math.sqrt(1+E-r-g);this._w=(d-l)/b,this._x=(u+p)/b,this._y=(v+S)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,g=i._x,v=i._y,p=i._z,S=i._w;return this._x=r*S+d*g+l*p-u*v,this._y=l*S+d*v+u*g-r*p,this._z=u*S+d*p+r*v-l*g,this._w=d*S-r*g-l*v-u*p,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,d=e._w,g=this.dot(e);g<0&&(r=-r,l=-l,u=-u,d=-d,g=-g);let v=1-i;if(g<.9995){const p=Math.acos(g),S=Math.sin(p);v=Math.sin(v*p)/S,i=Math.sin(i*p)/S,this._x=this._x*v+r*i,this._y=this._y*v+l*i,this._z=this._z*v+u*i,this._w=this._w*v+d*i,this._onChangeCallback()}else this._x=this._x*v+r*i,this._y=this._y*v+l*i,this._z=this._z*v+u*i,this._w=this._w*v+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class mt{constructor(e=0,i=0,r=0){mt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Dv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Dv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,g=e.z,v=e.w,p=2*(d*l-g*r),S=2*(g*i-u*l),E=2*(u*r-d*i);return this.x=i+v*p+d*E-g*S,this.y=r+v*S+g*p-u*E,this.z=l+v*E+u*S-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ge(this.x,e.x,i.x),this.y=Ge(this.y,e.y,i.y),this.z=Ge(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ge(this.x,e,i),this.y=Ge(this.y,e,i),this.z=Ge(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ge(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,g=i.y,v=i.z;return this.x=l*v-u*g,this.y=u*d-r*v,this.z=r*g-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return gd.copy(this).projectOnVector(e),this.sub(gd)}reflect(e){return this.sub(gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ge(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gd=new mt,Dv=new Po;class De{constructor(e,i,r,l,u,d,g,v,p){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,g,v,p)}set(e,i,r,l,u,d,g,v,p){const S=this.elements;return S[0]=e,S[1]=l,S[2]=g,S[3]=i,S[4]=u,S[5]=v,S[6]=r,S[7]=d,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],g=r[3],v=r[6],p=r[1],S=r[4],E=r[7],x=r[2],b=r[5],C=r[8],O=l[0],T=l[3],M=l[6],P=l[1],X=l[4],I=l[7],Q=l[2],Y=l[5],q=l[8];return u[0]=d*O+g*P+v*Q,u[3]=d*T+g*X+v*Y,u[6]=d*M+g*I+v*q,u[1]=p*O+S*P+E*Q,u[4]=p*T+S*X+E*Y,u[7]=p*M+S*I+E*q,u[2]=x*O+b*P+C*Q,u[5]=x*T+b*X+C*Y,u[8]=x*M+b*I+C*q,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],g=e[5],v=e[6],p=e[7],S=e[8];return i*d*S-i*g*p-r*u*S+r*g*v+l*u*p-l*d*v}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],g=e[5],v=e[6],p=e[7],S=e[8],E=S*d-g*p,x=g*v-S*u,b=p*u-d*v,C=i*E+r*x+l*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const O=1/C;return e[0]=E*O,e[1]=(l*p-S*r)*O,e[2]=(g*r-l*d)*O,e[3]=x*O,e[4]=(S*i-l*v)*O,e[5]=(l*u-g*i)*O,e[6]=b*O,e[7]=(r*v-p*i)*O,e[8]=(d*i-r*u)*O,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,g){const v=Math.cos(u),p=Math.sin(u);return this.set(r*v,r*p,-r*(v*d+p*g)+d+e,-l*p,l*v,-l*(-p*d+v*g)+g+i,0,0,1),this}scale(e,i){return this.premultiply(vd.makeScale(e,i)),this}rotate(e){return this.premultiply(vd.makeRotation(-e)),this}translate(e,i){return this.premultiply(vd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vd=new De,Uv=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lv=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ES(){const o={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===nn&&(l.r=rr(l.r),l.g=rr(l.g),l.b=rr(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===nn&&(l.r=Co(l.r),l.g=Co(l.g),l.b=Co(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qr?Hc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Xc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Xc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Lo]:{primaries:e,whitePoint:r,transfer:Hc,toXYZ:Uv,fromXYZ:Lv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ea},outputColorSpaceConfig:{drawingBufferColorSpace:ea}},[ea]:{primaries:e,whitePoint:r,transfer:nn,toXYZ:Uv,fromXYZ:Lv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ea}}}),o}const ke=ES();function rr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Co(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let po;class TS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{po===void 0&&(po=Vc("canvas")),po.width=e.width,po.height=e.height;const l=po.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=po}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Vc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=rr(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(rr(i[r]/255)*255):i[r]=rr(i[r]);return{data:i,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bS=0;class Yp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=zl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,g=l.length;d<g;d++)l[d].isDataTexture?u.push(_d(l[d].image)):u.push(_d(l[d]))}else u=_d(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function _d(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?TS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let AS=0;const xd=new mt;class di extends Oo{constructor(e=di.DEFAULT_IMAGE,i=di.DEFAULT_MAPPING,r=ir,l=ir,u=oi,d=As,g=pa,v=ia,p=di.DEFAULT_ANISOTROPY,S=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=zl(),this.name="",this.source=new Yp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=g,this.internalFormat=null,this.type=v,this.offset=new ln(0,0),this.repeat=new ln(1,1),this.center=new ln(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xd).x}get height(){return this.source.getSize(xd).y}get depth(){return this.source.getSize(xd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){Me(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Me(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==C_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ep:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case np:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ep:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case np:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=C_;di.DEFAULT_ANISOTROPY=1;class wn{constructor(e=0,i=0,r=0,l=1){wn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const v=e.elements,p=v[0],S=v[4],E=v[8],x=v[1],b=v[5],C=v[9],O=v[2],T=v[6],M=v[10];if(Math.abs(S-x)<.01&&Math.abs(E-O)<.01&&Math.abs(C-T)<.01){if(Math.abs(S+x)<.1&&Math.abs(E+O)<.1&&Math.abs(C+T)<.1&&Math.abs(p+b+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const X=(p+1)/2,I=(b+1)/2,Q=(M+1)/2,Y=(S+x)/4,q=(E+O)/4,w=(C+T)/4;return X>I&&X>Q?X<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(X),l=Y/r,u=q/r):I>Q?I<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(I),r=Y/l,u=w/l):Q<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(Q),r=q/u,l=w/u),this.set(r,l,u,i),this}let P=Math.sqrt((T-C)*(T-C)+(E-O)*(E-O)+(x-S)*(x-S));return Math.abs(P)<.001&&(P=1),this.x=(T-C)/P,this.y=(E-O)/P,this.z=(x-S)/P,this.w=Math.acos((p+b+M-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ge(this.x,e.x,i.x),this.y=Ge(this.y,e.y,i.y),this.z=Ge(this.z,e.z,i.z),this.w=Ge(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ge(this.x,e,i),this.y=Ge(this.y,e,i),this.z=Ge(this.z,e,i),this.w=Ge(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ge(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RS extends Oo{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new wn(0,0,e,i),this.scissorTest=!1,this.viewport=new wn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new di(l),d=r.count;for(let g=0;g<d;g++)this.textures[g]=u.clone(),this.textures[g].isRenderTargetTexture=!0,this.textures[g].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Yp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ca extends RS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class B_ extends di{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CS extends di{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ni,this.minFilter=ni,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e,i,r,l,u,d,g,v,p,S,E,x,b,C,O,T){Dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,g,v,p,S,E,x,b,C,O,T)}set(e,i,r,l,u,d,g,v,p,S,E,x,b,C,O,T){const M=this.elements;return M[0]=e,M[4]=i,M[8]=r,M[12]=l,M[1]=u,M[5]=d,M[9]=g,M[13]=v,M[2]=p,M[6]=S,M[10]=E,M[14]=x,M[3]=b,M[7]=C,M[11]=O,M[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/mo.setFromMatrixColumn(e,0).length(),u=1/mo.setFromMatrixColumn(e,1).length(),d=1/mo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),g=Math.sin(r),v=Math.cos(l),p=Math.sin(l),S=Math.cos(u),E=Math.sin(u);if(e.order==="XYZ"){const x=d*S,b=d*E,C=g*S,O=g*E;i[0]=v*S,i[4]=-v*E,i[8]=p,i[1]=b+C*p,i[5]=x-O*p,i[9]=-g*v,i[2]=O-x*p,i[6]=C+b*p,i[10]=d*v}else if(e.order==="YXZ"){const x=v*S,b=v*E,C=p*S,O=p*E;i[0]=x+O*g,i[4]=C*g-b,i[8]=d*p,i[1]=d*E,i[5]=d*S,i[9]=-g,i[2]=b*g-C,i[6]=O+x*g,i[10]=d*v}else if(e.order==="ZXY"){const x=v*S,b=v*E,C=p*S,O=p*E;i[0]=x-O*g,i[4]=-d*E,i[8]=C+b*g,i[1]=b+C*g,i[5]=d*S,i[9]=O-x*g,i[2]=-d*p,i[6]=g,i[10]=d*v}else if(e.order==="ZYX"){const x=d*S,b=d*E,C=g*S,O=g*E;i[0]=v*S,i[4]=C*p-b,i[8]=x*p+O,i[1]=v*E,i[5]=O*p+x,i[9]=b*p-C,i[2]=-p,i[6]=g*v,i[10]=d*v}else if(e.order==="YZX"){const x=d*v,b=d*p,C=g*v,O=g*p;i[0]=v*S,i[4]=O-x*E,i[8]=C*E+b,i[1]=E,i[5]=d*S,i[9]=-g*S,i[2]=-p*S,i[6]=b*E+C,i[10]=x-O*E}else if(e.order==="XZY"){const x=d*v,b=d*p,C=g*v,O=g*p;i[0]=v*S,i[4]=-E,i[8]=p*S,i[1]=x*E+O,i[5]=d*S,i[9]=b*E-C,i[2]=C*E-b,i[6]=g*S,i[10]=O*E+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wS,e,DS)}lookAt(e,i,r){const l=this.elements;return Ii.subVectors(e,i),Ii.lengthSq()===0&&(Ii.z=1),Ii.normalize(),Gr.crossVectors(r,Ii),Gr.lengthSq()===0&&(Math.abs(r.z)===1?Ii.x+=1e-4:Ii.z+=1e-4,Ii.normalize(),Gr.crossVectors(r,Ii)),Gr.normalize(),rc.crossVectors(Ii,Gr),l[0]=Gr.x,l[4]=rc.x,l[8]=Ii.x,l[1]=Gr.y,l[5]=rc.y,l[9]=Ii.y,l[2]=Gr.z,l[6]=rc.z,l[10]=Ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],g=r[4],v=r[8],p=r[12],S=r[1],E=r[5],x=r[9],b=r[13],C=r[2],O=r[6],T=r[10],M=r[14],P=r[3],X=r[7],I=r[11],Q=r[15],Y=l[0],q=l[4],w=l[8],z=l[12],B=l[1],D=l[5],j=l[9],K=l[13],lt=l[2],rt=l[6],U=l[10],F=l[14],at=l[3],ct=l[7],bt=l[11],V=l[15];return u[0]=d*Y+g*B+v*lt+p*at,u[4]=d*q+g*D+v*rt+p*ct,u[8]=d*w+g*j+v*U+p*bt,u[12]=d*z+g*K+v*F+p*V,u[1]=S*Y+E*B+x*lt+b*at,u[5]=S*q+E*D+x*rt+b*ct,u[9]=S*w+E*j+x*U+b*bt,u[13]=S*z+E*K+x*F+b*V,u[2]=C*Y+O*B+T*lt+M*at,u[6]=C*q+O*D+T*rt+M*ct,u[10]=C*w+O*j+T*U+M*bt,u[14]=C*z+O*K+T*F+M*V,u[3]=P*Y+X*B+I*lt+Q*at,u[7]=P*q+X*D+I*rt+Q*ct,u[11]=P*w+X*j+I*U+Q*bt,u[15]=P*z+X*K+I*F+Q*V,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],g=e[5],v=e[9],p=e[13],S=e[2],E=e[6],x=e[10],b=e[14],C=e[3],O=e[7],T=e[11],M=e[15],P=v*b-p*x,X=g*b-p*E,I=g*x-v*E,Q=d*b-p*S,Y=d*x-v*S,q=d*E-g*S;return i*(O*P-T*X+M*I)-r*(C*P-T*Q+M*Y)+l*(C*X-O*Q+M*q)-u*(C*I-O*Y+T*q)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],g=e[5],v=e[6],p=e[7],S=e[8],E=e[9],x=e[10],b=e[11],C=e[12],O=e[13],T=e[14],M=e[15],P=i*g-r*d,X=i*v-l*d,I=i*p-u*d,Q=r*v-l*g,Y=r*p-u*g,q=l*p-u*v,w=S*O-E*C,z=S*T-x*C,B=S*M-b*C,D=E*T-x*O,j=E*M-b*O,K=x*M-b*T,lt=P*K-X*j+I*D+Q*B-Y*z+q*w;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const rt=1/lt;return e[0]=(g*K-v*j+p*D)*rt,e[1]=(l*j-r*K-u*D)*rt,e[2]=(O*q-T*Y+M*Q)*rt,e[3]=(x*Y-E*q-b*Q)*rt,e[4]=(v*B-d*K-p*z)*rt,e[5]=(i*K-l*B+u*z)*rt,e[6]=(T*I-C*q-M*X)*rt,e[7]=(S*q-x*I+b*X)*rt,e[8]=(d*j-g*B+p*w)*rt,e[9]=(r*B-i*j-u*w)*rt,e[10]=(C*Y-O*I+M*P)*rt,e[11]=(E*I-S*Y-b*P)*rt,e[12]=(g*z-d*D-v*w)*rt,e[13]=(i*D-r*z+l*w)*rt,e[14]=(O*X-C*Q-T*P)*rt,e[15]=(S*Q-E*X+x*P)*rt,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,g=e.y,v=e.z,p=u*d,S=u*g;return this.set(p*d+r,p*g-l*v,p*v+l*g,0,p*g+l*v,S*g+r,S*v-l*d,0,p*v-l*g,S*v+l*d,u*v*v+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,g=i._z,v=i._w,p=u+u,S=d+d,E=g+g,x=u*p,b=u*S,C=u*E,O=d*S,T=d*E,M=g*E,P=v*p,X=v*S,I=v*E,Q=r.x,Y=r.y,q=r.z;return l[0]=(1-(O+M))*Q,l[1]=(b+I)*Q,l[2]=(C-X)*Q,l[3]=0,l[4]=(b-I)*Y,l[5]=(1-(x+M))*Y,l[6]=(T+P)*Y,l[7]=0,l[8]=(C+X)*q,l[9]=(T-P)*q,l[10]=(1-(x+O))*q,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return r.set(1,1,1),i.identity(),this;let d=mo.set(l[0],l[1],l[2]).length();const g=mo.set(l[4],l[5],l[6]).length(),v=mo.set(l[8],l[9],l[10]).length();u<0&&(d=-d),fa.copy(this);const p=1/d,S=1/g,E=1/v;return fa.elements[0]*=p,fa.elements[1]*=p,fa.elements[2]*=p,fa.elements[4]*=S,fa.elements[5]*=S,fa.elements[6]*=S,fa.elements[8]*=E,fa.elements[9]*=E,fa.elements[10]*=E,i.setFromRotationMatrix(fa),r.x=d,r.y=g,r.z=v,this}makePerspective(e,i,r,l,u,d,g=Aa,v=!1){const p=this.elements,S=2*u/(i-e),E=2*u/(r-l),x=(i+e)/(i-e),b=(r+l)/(r-l);let C,O;if(v)C=u/(d-u),O=d*u/(d-u);else if(g===Aa)C=-(d+u)/(d-u),O=-2*d*u/(d-u);else if(g===Gc)C=-d/(d-u),O=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+g);return p[0]=S,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=E,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=C,p[14]=O,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,g=Aa,v=!1){const p=this.elements,S=2/(i-e),E=2/(r-l),x=-(i+e)/(i-e),b=-(r+l)/(r-l);let C,O;if(v)C=1/(d-u),O=d/(d-u);else if(g===Aa)C=-2/(d-u),O=-(d+u)/(d-u);else if(g===Gc)C=-1/(d-u),O=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+g);return p[0]=S,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=E,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=C,p[14]=O,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const mo=new mt,fa=new Dn,wS=new mt(0,0,0),DS=new mt(1,1,1),Gr=new mt,rc=new mt,Ii=new mt,Nv=new Dn,Ov=new Po;class lr{constructor(e=0,i=0,r=0,l=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],g=l[8],v=l[1],p=l[5],S=l[9],E=l[2],x=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Ge(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-S,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(g,b),this._z=Math.atan2(v,p)):(this._y=Math.atan2(-E,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-E,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(v,u));break;case"ZYX":this._y=Math.asin(-Ge(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(v,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ge(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-E,u)):(this._x=0,this._y=Math.atan2(g,b));break;case"XZY":this._z=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(g,u)):(this._x=Math.atan2(-S,b),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Nv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ov.setFromEuler(this),this.setFromQuaternion(Ov,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class I_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let US=0;const Pv=new mt,go=new Po,Qa=new Dn,sc=new mt,Rl=new mt,LS=new mt,NS=new Po,Fv=new mt(1,0,0),Bv=new mt(0,1,0),Iv=new mt(0,0,1),zv={type:"added"},OS={type:"removed"},vo={type:"childadded",child:null},yd={type:"childremoved",child:null};class Ai extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=zl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ai.DEFAULT_UP.clone();const e=new mt,i=new lr,r=new Po,l=new mt(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Dn},normalMatrix:{value:new De}}),this.matrix=new Dn,this.matrixWorld=new Dn,this.matrixAutoUpdate=Ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return go.setFromAxisAngle(e,i),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,i){return go.setFromAxisAngle(e,i),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(Fv,e)}rotateY(e){return this.rotateOnAxis(Bv,e)}rotateZ(e){return this.rotateOnAxis(Iv,e)}translateOnAxis(e,i){return Pv.copy(e).applyQuaternion(this.quaternion),this.position.add(Pv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Fv,e)}translateY(e){return this.translateOnAxis(Bv,e)}translateZ(e){return this.translateOnAxis(Iv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?sc.copy(e):sc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qa.lookAt(Rl,sc,this.up):Qa.lookAt(sc,Rl,this.up),this.quaternion.setFromRotationMatrix(Qa),l&&(Qa.extractRotation(l.matrixWorld),go.setFromRotationMatrix(Qa),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zv),vo.child=e,this.dispatchEvent(vo),vo.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(OS),yd.child=e,this.dispatchEvent(yd),yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zv),vo.child=e,this.dispatchEvent(vo),vo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,e,LS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,NS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(g=>({...g,boundingBox:g.boundingBox?g.boundingBox.toJSON():void 0,boundingSphere:g.boundingSphere?g.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(g=>({...g})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(g,v){return g[v.uuid]===void 0&&(g[v.uuid]=v.toJSON(e)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const g=this.geometry.parameters;if(g!==void 0&&g.shapes!==void 0){const v=g.shapes;if(Array.isArray(v))for(let p=0,S=v.length;p<S;p++){const E=v[p];u(e.shapes,E)}else u(e.shapes,v)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const g=[];for(let v=0,p=this.material.length;v<p;v++)g.push(u(e.materials,this.material[v]));l.material=g}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let g=0;g<this.children.length;g++)l.children.push(this.children[g].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let g=0;g<this.animations.length;g++){const v=this.animations[g];l.animations.push(u(e.animations,v))}}if(i){const g=d(e.geometries),v=d(e.materials),p=d(e.textures),S=d(e.images),E=d(e.shapes),x=d(e.skeletons),b=d(e.animations),C=d(e.nodes);g.length>0&&(r.geometries=g),v.length>0&&(r.materials=v),p.length>0&&(r.textures=p),S.length>0&&(r.images=S),E.length>0&&(r.shapes=E),x.length>0&&(r.skeletons=x),b.length>0&&(r.animations=b),C.length>0&&(r.nodes=C)}return r.object=l,r;function d(g){const v=[];for(const p in g){const S=g[p];delete S.metadata,v.push(S)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Ai.DEFAULT_UP=new mt(0,1,0);Ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class oc extends Ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PS={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new mt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new mt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new mt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new mt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const g=this._targetRay,v=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const O of e.hand.values()){const T=i.getJointPose(O,r),M=this._getHandJoint(p,O);T!==null&&(M.matrix.fromArray(T.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=T.radius),M.visible=T!==null}const S=p.joints["index-finger-tip"],E=p.joints["thumb-tip"],x=S.position.distanceTo(E.position),b=.02,C=.005;p.inputState.pinching&&x>b+C?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=b-C&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else v!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(v.matrix.fromArray(u.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,u.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(u.linearVelocity)):v.hasLinearVelocity=!1,u.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(u.angularVelocity)):v.hasAngularVelocity=!1));g!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(g.matrix.fromArray(l.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,l.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(l.linearVelocity)):g.hasLinearVelocity=!1,l.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(l.angularVelocity)):g.hasAngularVelocity=!1,this.dispatchEvent(PS)))}return g!==null&&(g.visible=l!==null),v!==null&&(v.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new oc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},lc={h:0,s:0,l:0};function Md(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class We{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ea){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=ke.workingColorSpace){return this.r=e,this.g=i,this.b=r,ke.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=ke.workingColorSpace){if(e=MS(e,1),i=Ge(i,0,1),r=Ge(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Md(d,u,e+1/3),this.g=Md(d,u,e),this.b=Md(d,u,e-1/3)}return ke.colorSpaceToWorking(this,l),this}setStyle(e,i=ea){function r(u){u!==void 0&&parseFloat(u)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],g=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:Me("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ea){const r=z_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ea){return ke.workingToColorSpace(si.copy(this),e),Math.round(Ge(si.r*255,0,255))*65536+Math.round(Ge(si.g*255,0,255))*256+Math.round(Ge(si.b*255,0,255))}getHexString(e=ea){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ke.workingColorSpace){ke.workingToColorSpace(si.copy(this),i);const r=si.r,l=si.g,u=si.b,d=Math.max(r,l,u),g=Math.min(r,l,u);let v,p;const S=(g+d)/2;if(g===d)v=0,p=0;else{const E=d-g;switch(p=S<=.5?E/(d+g):E/(2-d-g),d){case r:v=(l-u)/E+(l<u?6:0);break;case l:v=(u-r)/E+2;break;case u:v=(r-l)/E+4;break}v/=6}return e.h=v,e.s=p,e.l=S,e}getRGB(e,i=ke.workingColorSpace){return ke.workingToColorSpace(si.copy(this),i),e.r=si.r,e.g=si.g,e.b=si.b,e}getStyle(e=ea){ke.workingToColorSpace(si.copy(this),e);const i=si.r,r=si.g,l=si.b;return e!==ea?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+i,Vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Vr),e.getHSL(lc);const r=md(Vr.h,lc.h,i),l=md(Vr.s,lc.s,i),u=md(Vr.l,lc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const si=new We;We.NAMES=z_;class FS extends Ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ha=new mt,Ja=new mt,Ed=new mt,$a=new mt,_o=new mt,xo=new mt,Hv=new mt,Td=new mt,bd=new mt,Ad=new mt,Rd=new wn,Cd=new wn,wd=new wn;class aa{constructor(e=new mt,i=new mt,r=new mt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),ha.subVectors(e,i),l.cross(ha);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){ha.subVectors(l,i),Ja.subVectors(r,i),Ed.subVectors(e,i);const d=ha.dot(ha),g=ha.dot(Ja),v=ha.dot(Ed),p=Ja.dot(Ja),S=Ja.dot(Ed),E=d*p-g*g;if(E===0)return u.set(0,0,0),null;const x=1/E,b=(p*v-g*S)*x,C=(d*S-g*v)*x;return u.set(1-b-C,C,b)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,$a)===null?!1:$a.x>=0&&$a.y>=0&&$a.x+$a.y<=1}static getInterpolation(e,i,r,l,u,d,g,v){return this.getBarycoord(e,i,r,l,$a)===null?(v.x=0,v.y=0,"z"in v&&(v.z=0),"w"in v&&(v.w=0),null):(v.setScalar(0),v.addScaledVector(u,$a.x),v.addScaledVector(d,$a.y),v.addScaledVector(g,$a.z),v)}static getInterpolatedAttribute(e,i,r,l,u,d){return Rd.setScalar(0),Cd.setScalar(0),wd.setScalar(0),Rd.fromBufferAttribute(e,i),Cd.fromBufferAttribute(e,r),wd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Rd,u.x),d.addScaledVector(Cd,u.y),d.addScaledVector(wd,u.z),d}static isFrontFacing(e,i,r,l){return ha.subVectors(r,i),Ja.subVectors(e,i),ha.cross(Ja).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ha.subVectors(this.c,this.b),Ja.subVectors(this.a,this.b),ha.cross(Ja).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return aa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return aa.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return aa.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return aa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return aa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,g;_o.subVectors(l,r),xo.subVectors(u,r),Td.subVectors(e,r);const v=_o.dot(Td),p=xo.dot(Td);if(v<=0&&p<=0)return i.copy(r);bd.subVectors(e,l);const S=_o.dot(bd),E=xo.dot(bd);if(S>=0&&E<=S)return i.copy(l);const x=v*E-S*p;if(x<=0&&v>=0&&S<=0)return d=v/(v-S),i.copy(r).addScaledVector(_o,d);Ad.subVectors(e,u);const b=_o.dot(Ad),C=xo.dot(Ad);if(C>=0&&b<=C)return i.copy(u);const O=b*p-v*C;if(O<=0&&p>=0&&C<=0)return g=p/(p-C),i.copy(r).addScaledVector(xo,g);const T=S*C-b*E;if(T<=0&&E-S>=0&&b-C>=0)return Hv.subVectors(u,l),g=(E-S)/(E-S+(b-C)),i.copy(l).addScaledVector(Hv,g);const M=1/(T+O+x);return d=O*M,g=x*M,i.copy(r).addScaledVector(_o,d).addScaledVector(xo,g)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hl{constructor(e=new mt(1/0,1/0,1/0),i=new mt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(da.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(da.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=da.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,g=u.count;d<g;d++)e.isMesh===!0?e.getVertexPosition(d,da):da.fromBufferAttribute(u,d),da.applyMatrix4(e.matrixWorld),this.expandByPoint(da);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),uc.copy(r.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,da),da.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cl),cc.subVectors(this.max,Cl),yo.subVectors(e.a,Cl),So.subVectors(e.b,Cl),Mo.subVectors(e.c,Cl),Xr.subVectors(So,yo),kr.subVectors(Mo,So),vs.subVectors(yo,Mo);let i=[0,-Xr.z,Xr.y,0,-kr.z,kr.y,0,-vs.z,vs.y,Xr.z,0,-Xr.x,kr.z,0,-kr.x,vs.z,0,-vs.x,-Xr.y,Xr.x,0,-kr.y,kr.x,0,-vs.y,vs.x,0];return!Dd(i,yo,So,Mo,cc)||(i=[1,0,0,0,1,0,0,0,1],!Dd(i,yo,So,Mo,cc))?!1:(fc.crossVectors(Xr,kr),i=[fc.x,fc.y,fc.z],Dd(i,yo,So,Mo,cc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,da).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(da).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tr=[new mt,new mt,new mt,new mt,new mt,new mt,new mt,new mt],da=new mt,uc=new Hl,yo=new mt,So=new mt,Mo=new mt,Xr=new mt,kr=new mt,vs=new mt,Cl=new mt,cc=new mt,fc=new mt,_s=new mt;function Dd(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){_s.fromArray(o,u);const g=l.x*Math.abs(_s.x)+l.y*Math.abs(_s.y)+l.z*Math.abs(_s.z),v=e.dot(_s),p=i.dot(_s),S=r.dot(_s);if(Math.max(-Math.max(v,p,S),Math.min(v,p,S))>g)return!1}return!0}const zn=new mt,hc=new ln;let BS=0;class wa{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Av,this.updateRanges=[],this.gpuType=ba,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(e),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.applyMatrix3(e),this.setXYZ(i,zn.x,zn.y,zn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.applyMatrix4(e),this.setXYZ(i,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.applyNormalMatrix(e),this.setXYZ(i,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)zn.fromBufferAttribute(this,i),zn.transformDirection(e),this.setXYZ(i,zn.x,zn.y,zn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Al(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Ti(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Al(i,this.array)),i}setX(e,i){return this.normalized&&(i=Ti(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Al(i,this.array)),i}setY(e,i){return this.normalized&&(i=Ti(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Al(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Ti(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Al(i,this.array)),i}setW(e,i){return this.normalized&&(i=Ti(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Ti(i,this.array),r=Ti(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Ti(i,this.array),r=Ti(r,this.array),l=Ti(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Ti(i,this.array),r=Ti(r,this.array),l=Ti(l,this.array),u=Ti(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Av&&(e.usage=this.usage),e}}class H_ extends wa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class G_ extends wa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class li extends wa{constructor(e,i,r){super(new Float32Array(e),i,r)}}const IS=new Hl,wl=new mt,Ud=new mt;class qc{constructor(e=new mt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):IS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wl.subVectors(e,this.center);const i=wl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wl.copy(e.center).add(Ud)),this.expandByPoint(wl.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zS=0;const ta=new Dn,Ld=new Ai,Eo=new mt,zi=new Hl,Dl=new Hl,Yn=new mt;class Hi extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=zl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_S(e)?G_:H_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new De().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ta.makeRotationFromQuaternion(e),this.applyMatrix4(ta),this}rotateX(e){return ta.makeRotationX(e),this.applyMatrix4(ta),this}rotateY(e){return ta.makeRotationY(e),this.applyMatrix4(ta),this}rotateZ(e){return ta.makeRotationZ(e),this.applyMatrix4(ta),this}translate(e,i,r){return ta.makeTranslation(e,i,r),this.applyMatrix4(ta),this}scale(e,i,r){return ta.makeScale(e,i,r),this.applyMatrix4(ta),this}lookAt(e){return Ld.lookAt(e),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new li(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new mt(-1/0,-1/0,-1/0),new mt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];zi.setFromBufferAttribute(u),this.morphTargetsRelative?(Yn.addVectors(this.boundingBox.min,zi.min),this.boundingBox.expandByPoint(Yn),Yn.addVectors(this.boundingBox.max,zi.max),this.boundingBox.expandByPoint(Yn)):(this.boundingBox.expandByPoint(zi.min),this.boundingBox.expandByPoint(zi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new mt,1/0);return}if(e){const r=this.boundingSphere.center;if(zi.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const g=i[u];Dl.setFromBufferAttribute(g),this.morphTargetsRelative?(Yn.addVectors(zi.min,Dl.min),zi.expandByPoint(Yn),Yn.addVectors(zi.max,Dl.max),zi.expandByPoint(Yn)):(zi.expandByPoint(Dl.min),zi.expandByPoint(Dl.max))}zi.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)Yn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Yn));if(i)for(let u=0,d=i.length;u<d;u++){const g=i[u],v=this.morphTargetsRelative;for(let p=0,S=g.count;p<S;p++)Yn.fromBufferAttribute(g,p),v&&(Eo.fromBufferAttribute(e,p),Yn.add(Eo)),l=Math.max(l,r.distanceToSquared(Yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wa(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),g=[],v=[];for(let w=0;w<r.count;w++)g[w]=new mt,v[w]=new mt;const p=new mt,S=new mt,E=new mt,x=new ln,b=new ln,C=new ln,O=new mt,T=new mt;function M(w,z,B){p.fromBufferAttribute(r,w),S.fromBufferAttribute(r,z),E.fromBufferAttribute(r,B),x.fromBufferAttribute(u,w),b.fromBufferAttribute(u,z),C.fromBufferAttribute(u,B),S.sub(p),E.sub(p),b.sub(x),C.sub(x);const D=1/(b.x*C.y-C.x*b.y);isFinite(D)&&(O.copy(S).multiplyScalar(C.y).addScaledVector(E,-b.y).multiplyScalar(D),T.copy(E).multiplyScalar(b.x).addScaledVector(S,-C.x).multiplyScalar(D),g[w].add(O),g[z].add(O),g[B].add(O),v[w].add(T),v[z].add(T),v[B].add(T))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let w=0,z=P.length;w<z;++w){const B=P[w],D=B.start,j=B.count;for(let K=D,lt=D+j;K<lt;K+=3)M(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const X=new mt,I=new mt,Q=new mt,Y=new mt;function q(w){Q.fromBufferAttribute(l,w),Y.copy(Q);const z=g[w];X.copy(z),X.sub(Q.multiplyScalar(Q.dot(z))).normalize(),I.crossVectors(Y,z);const D=I.dot(v[w])<0?-1:1;d.setXYZW(w,X.x,X.y,X.z,D)}for(let w=0,z=P.length;w<z;++w){const B=P[w],D=B.start,j=B.count;for(let K=D,lt=D+j;K<lt;K+=3)q(e.getX(K+0)),q(e.getX(K+1)),q(e.getX(K+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,b=r.count;x<b;x++)r.setXYZ(x,0,0,0);const l=new mt,u=new mt,d=new mt,g=new mt,v=new mt,p=new mt,S=new mt,E=new mt;if(e)for(let x=0,b=e.count;x<b;x+=3){const C=e.getX(x+0),O=e.getX(x+1),T=e.getX(x+2);l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,O),d.fromBufferAttribute(i,T),S.subVectors(d,u),E.subVectors(l,u),S.cross(E),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,O),p.fromBufferAttribute(r,T),g.add(S),v.add(S),p.add(S),r.setXYZ(C,g.x,g.y,g.z),r.setXYZ(O,v.x,v.y,v.z),r.setXYZ(T,p.x,p.y,p.z)}else for(let x=0,b=i.count;x<b;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),S.subVectors(d,u),E.subVectors(l,u),S.cross(E),r.setXYZ(x+0,S.x,S.y,S.z),r.setXYZ(x+1,S.x,S.y,S.z),r.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Yn.fromBufferAttribute(e,i),Yn.normalize(),e.setXYZ(i,Yn.x,Yn.y,Yn.z)}toNonIndexed(){function e(g,v){const p=g.array,S=g.itemSize,E=g.normalized,x=new p.constructor(v.length*S);let b=0,C=0;for(let O=0,T=v.length;O<T;O++){g.isInterleavedBufferAttribute?b=v[O]*g.data.stride+g.offset:b=v[O]*S;for(let M=0;M<S;M++)x[C++]=p[b++]}return new wa(x,S,E)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Hi,r=this.index.array,l=this.attributes;for(const g in l){const v=l[g],p=e(v,r);i.setAttribute(g,p)}const u=this.morphAttributes;for(const g in u){const v=[],p=u[g];for(let S=0,E=p.length;S<E;S++){const x=p[S],b=e(x,r);v.push(b)}i.morphAttributes[g]=v}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let g=0,v=d.length;g<v;g++){const p=d[g];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const p in v)v[p]!==void 0&&(e[p]=v[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const v in r){const p=r[v];e.data.attributes[v]=p.toJSON(e.data)}const l={};let u=!1;for(const v in this.morphAttributes){const p=this.morphAttributes[v],S=[];for(let E=0,x=p.length;E<x;E++){const b=p[E];S.push(b.toJSON(e.data))}S.length>0&&(l[v]=S,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const g=this.boundingSphere;return g!==null&&(e.data.boundingSphere=g.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const u=e.morphAttributes;for(const p in u){const S=[],E=u[p];for(let x=0,b=E.length;x<b;x++)S.push(E[x].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,S=d.length;p<S;p++){const E=d[p];this.addGroup(E.start,E.count,E.materialIndex)}const g=e.boundingBox;g!==null&&(this.boundingBox=g.clone());const v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let HS=0;class Gl extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=zl(),this.name="",this.type="Material",this.blending=Ro,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=qd,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){Me(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){Me(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ro&&(r.blending=this.blending),this.side!==Zr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==jd&&(r.blendSrc=this.blendSrc),this.blendDst!==qd&&(r.blendDst=this.blendDst),this.blendEquation!==Ts&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const g in u){const v=u[g];delete v.metadata,d.push(v)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const er=new mt,Nd=new mt,dc=new mt,Wr=new mt,Od=new mt,pc=new mt,Pd=new mt;class V_{constructor(e=new mt,i=new mt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,er)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=er.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(er.copy(this.origin).addScaledVector(this.direction,i),er.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Nd.copy(e).add(i).multiplyScalar(.5),dc.copy(i).sub(e).normalize(),Wr.copy(this.origin).sub(Nd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(dc),g=Wr.dot(this.direction),v=-Wr.dot(dc),p=Wr.lengthSq(),S=Math.abs(1-d*d);let E,x,b,C;if(S>0)if(E=d*v-g,x=d*g-v,C=u*S,E>=0)if(x>=-C)if(x<=C){const O=1/S;E*=O,x*=O,b=E*(E+d*x+2*g)+x*(d*E+x+2*v)+p}else x=u,E=Math.max(0,-(d*x+g)),b=-E*E+x*(x+2*v)+p;else x=-u,E=Math.max(0,-(d*x+g)),b=-E*E+x*(x+2*v)+p;else x<=-C?(E=Math.max(0,-(-d*u+g)),x=E>0?-u:Math.min(Math.max(-u,-v),u),b=-E*E+x*(x+2*v)+p):x<=C?(E=0,x=Math.min(Math.max(-u,-v),u),b=x*(x+2*v)+p):(E=Math.max(0,-(d*u+g)),x=E>0?u:Math.min(Math.max(-u,-v),u),b=-E*E+x*(x+2*v)+p);else x=d>0?-u:u,E=Math.max(0,-(d*x+g)),b=-E*E+x*(x+2*v)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,E),l&&l.copy(Nd).addScaledVector(dc,x),b}intersectSphere(e,i){er.subVectors(e.center,this.origin);const r=er.dot(this.direction),l=er.dot(er)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),g=r-d,v=r+d;return v<0?null:g<0?this.at(v,i):this.at(g,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,g,v;const p=1/this.direction.x,S=1/this.direction.y,E=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),S>=0?(u=(e.min.y-x.y)*S,d=(e.max.y-x.y)*S):(u=(e.max.y-x.y)*S,d=(e.min.y-x.y)*S),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),E>=0?(g=(e.min.z-x.z)*E,v=(e.max.z-x.z)*E):(g=(e.max.z-x.z)*E,v=(e.min.z-x.z)*E),r>v||g>l)||((g>r||r!==r)&&(r=g),(v<l||l!==l)&&(l=v),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,er)!==null}intersectTriangle(e,i,r,l,u){Od.subVectors(i,e),pc.subVectors(r,e),Pd.crossVectors(Od,pc);let d=this.direction.dot(Pd),g;if(d>0){if(l)return null;g=1}else if(d<0)g=-1,d=-d;else return null;Wr.subVectors(this.origin,e);const v=g*this.direction.dot(pc.crossVectors(Wr,pc));if(v<0)return null;const p=g*this.direction.dot(Od.cross(Wr));if(p<0||v+p>d)return null;const S=-g*Wr.dot(Pd);return S<0?null:this.at(S/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yc extends Gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gv=new Dn,xs=new V_,mc=new qc,Vv=new mt,gc=new mt,vc=new mt,_c=new mt,Fd=new mt,xc=new mt,Xv=new mt,yc=new mt;class ma extends Ai{constructor(e=new Hi,i=new Yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const g=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const g=this.morphTargetInfluences;if(u&&g){xc.set(0,0,0);for(let v=0,p=u.length;v<p;v++){const S=g[v],E=u[v];S!==0&&(Fd.fromBufferAttribute(E,e),d?xc.addScaledVector(Fd,S):xc.addScaledVector(Fd.sub(i),S))}i.add(xc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),mc.copy(r.boundingSphere),mc.applyMatrix4(u),xs.copy(e.ray).recast(e.near),!(mc.containsPoint(xs.origin)===!1&&(xs.intersectSphere(mc,Vv)===null||xs.origin.distanceToSquared(Vv)>(e.far-e.near)**2))&&(Gv.copy(u).invert(),xs.copy(e.ray).applyMatrix4(Gv),!(r.boundingBox!==null&&xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,xs)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,g=u.index,v=u.attributes.position,p=u.attributes.uv,S=u.attributes.uv1,E=u.attributes.normal,x=u.groups,b=u.drawRange;if(g!==null)if(Array.isArray(d))for(let C=0,O=x.length;C<O;C++){const T=x[C],M=d[T.materialIndex],P=Math.max(T.start,b.start),X=Math.min(g.count,Math.min(T.start+T.count,b.start+b.count));for(let I=P,Q=X;I<Q;I+=3){const Y=g.getX(I),q=g.getX(I+1),w=g.getX(I+2);l=Sc(this,M,e,r,p,S,E,Y,q,w),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const C=Math.max(0,b.start),O=Math.min(g.count,b.start+b.count);for(let T=C,M=O;T<M;T+=3){const P=g.getX(T),X=g.getX(T+1),I=g.getX(T+2);l=Sc(this,d,e,r,p,S,E,P,X,I),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}else if(v!==void 0)if(Array.isArray(d))for(let C=0,O=x.length;C<O;C++){const T=x[C],M=d[T.materialIndex],P=Math.max(T.start,b.start),X=Math.min(v.count,Math.min(T.start+T.count,b.start+b.count));for(let I=P,Q=X;I<Q;I+=3){const Y=I,q=I+1,w=I+2;l=Sc(this,M,e,r,p,S,E,Y,q,w),l&&(l.faceIndex=Math.floor(I/3),l.face.materialIndex=T.materialIndex,i.push(l))}}else{const C=Math.max(0,b.start),O=Math.min(v.count,b.start+b.count);for(let T=C,M=O;T<M;T+=3){const P=T,X=T+1,I=T+2;l=Sc(this,d,e,r,p,S,E,P,X,I),l&&(l.faceIndex=Math.floor(T/3),i.push(l))}}}}function GS(o,e,i,r,l,u,d,g){let v;if(e.side===bi?v=r.intersectTriangle(d,u,l,!0,g):v=r.intersectTriangle(l,u,d,e.side===Zr,g),v===null)return null;yc.copy(g),yc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(yc);return p<i.near||p>i.far?null:{distance:p,point:yc.clone(),object:o}}function Sc(o,e,i,r,l,u,d,g,v,p){o.getVertexPosition(g,gc),o.getVertexPosition(v,vc),o.getVertexPosition(p,_c);const S=GS(o,e,i,r,gc,vc,_c,Xv);if(S){const E=new mt;aa.getBarycoord(Xv,gc,vc,_c,E),l&&(S.uv=aa.getInterpolatedAttribute(l,g,v,p,E,new ln)),u&&(S.uv1=aa.getInterpolatedAttribute(u,g,v,p,E,new ln)),d&&(S.normal=aa.getInterpolatedAttribute(d,g,v,p,E,new mt),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const x={a:g,b:v,c:p,normal:new mt,materialIndex:0};aa.getNormal(gc,vc,_c,x.normal),S.face=x,S.barycoord=E}return S}class VS extends di{constructor(e=null,i=1,r=1,l,u,d,g,v,p=ni,S=ni,E,x){super(null,d,g,v,p,S,l,u,E,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bd=new mt,XS=new mt,kS=new De;class Es{constructor(e=new mt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Bd.subVectors(r,i).cross(XS.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Bd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||kS.getNormalMatrix(e),l=this.coplanarPoint(Bd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new qc,WS=new ln(.5,.5),Mc=new mt;class X_{constructor(e=new Es,i=new Es,r=new Es,l=new Es,u=new Es,d=new Es){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const g=this.planes;return g[0].copy(e),g[1].copy(i),g[2].copy(r),g[3].copy(l),g[4].copy(u),g[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Aa,r=!1){const l=this.planes,u=e.elements,d=u[0],g=u[1],v=u[2],p=u[3],S=u[4],E=u[5],x=u[6],b=u[7],C=u[8],O=u[9],T=u[10],M=u[11],P=u[12],X=u[13],I=u[14],Q=u[15];if(l[0].setComponents(p-d,b-S,M-C,Q-P).normalize(),l[1].setComponents(p+d,b+S,M+C,Q+P).normalize(),l[2].setComponents(p+g,b+E,M+O,Q+X).normalize(),l[3].setComponents(p-g,b-E,M-O,Q-X).normalize(),r)l[4].setComponents(v,x,T,I).normalize(),l[5].setComponents(p-v,b-x,M-T,Q-I).normalize();else if(l[4].setComponents(p-v,b-x,M-T,Q-I).normalize(),i===Aa)l[5].setComponents(p+v,b+x,M+T,Q+I).normalize();else if(i===Gc)l[5].setComponents(v,x,T,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);const i=WS.distanceTo(e.center);return ys.radius=.7071067811865476+i,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Mc.x=l.normal.x>0?e.max.x:e.min.x,Mc.y=l.normal.y>0?e.max.y:e.min.y,Mc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zc extends Gl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kc=new mt,Wc=new mt,kv=new Dn,Ul=new V_,Ec=new qc,Id=new mt,Wv=new mt;class jS extends Ai{constructor(e=new Hi,i=new Zc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)kc.fromBufferAttribute(i,l-1),Wc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=kc.distanceTo(Wc);e.setAttribute("lineDistance",new li(r,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(l),Ec.radius+=u,e.ray.intersectsSphere(Ec)===!1)return;kv.copy(l).invert(),Ul.copy(e.ray).applyMatrix4(kv);const g=u/((this.scale.x+this.scale.y+this.scale.z)/3),v=g*g,p=this.isLineSegments?2:1,S=r.index,x=r.attributes.position;if(S!==null){const b=Math.max(0,d.start),C=Math.min(S.count,d.start+d.count);for(let O=b,T=C-1;O<T;O+=p){const M=S.getX(O),P=S.getX(O+1),X=Tc(this,e,Ul,v,M,P,O);X&&i.push(X)}if(this.isLineLoop){const O=S.getX(C-1),T=S.getX(b),M=Tc(this,e,Ul,v,O,T,C-1);M&&i.push(M)}}else{const b=Math.max(0,d.start),C=Math.min(x.count,d.start+d.count);for(let O=b,T=C-1;O<T;O+=p){const M=Tc(this,e,Ul,v,O,O+1,O);M&&i.push(M)}if(this.isLineLoop){const O=Tc(this,e,Ul,v,C-1,b,C-1);O&&i.push(O)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const g=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=u}}}}}function Tc(o,e,i,r,l,u,d){const g=o.geometry.attributes.position;if(kc.fromBufferAttribute(g,l),Wc.fromBufferAttribute(g,u),i.distanceSqToSegment(kc,Wc,Id,Wv)>r)return;Id.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Id);if(!(p<e.near||p>e.far))return{distance:p,point:Wv.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const jv=new mt,qv=new mt;class Zp extends jS{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)jv.fromBufferAttribute(i,l),qv.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+jv.distanceTo(qv);e.setAttribute("lineDistance",new li(r,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class k_ extends di{constructor(e=[],i=Cs,r,l,u,d,g,v,p,S){super(e,i,r,l,u,d,g,v,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Il extends di{constructor(e,i,r=Da,l,u,d,g=ni,v=ni,p,S=or,E=1){if(S!==or&&S!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:E};super(x,l,u,d,g,v,S,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qS extends Il{constructor(e,i=Da,r=Cs,l,u,d=ni,g=ni,v,p=or){const S={width:e,height:e,depth:1},E=[S,S,S,S,S,S];super(e,e,i,r,l,u,d,g,v,p),this.image=E,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class W_ extends di{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ws extends Hi{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const g=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const v=[],p=[],S=[],E=[];let x=0,b=0;C("z","y","x",-1,-1,r,i,e,d,u,0),C("z","y","x",1,-1,r,i,-e,d,u,1),C("x","z","y",1,1,e,r,i,l,d,2),C("x","z","y",1,-1,e,r,-i,l,d,3),C("x","y","z",1,-1,e,i,r,l,u,4),C("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(v),this.setAttribute("position",new li(p,3)),this.setAttribute("normal",new li(S,3)),this.setAttribute("uv",new li(E,2));function C(O,T,M,P,X,I,Q,Y,q,w,z){const B=I/q,D=Q/w,j=I/2,K=Q/2,lt=Y/2,rt=q+1,U=w+1;let F=0,at=0;const ct=new mt;for(let bt=0;bt<U;bt++){const V=bt*D-K;for(let it=0;it<rt;it++){const Mt=it*B-j;ct[O]=Mt*P,ct[T]=V*X,ct[M]=lt,p.push(ct.x,ct.y,ct.z),ct[O]=0,ct[T]=0,ct[M]=Y>0?1:-1,S.push(ct.x,ct.y,ct.z),E.push(it/q),E.push(1-bt/w),F+=1}}for(let bt=0;bt<w;bt++)for(let V=0;V<q;V++){const it=x+V+rt*bt,Mt=x+V+rt*(bt+1),Pt=x+(V+1)+rt*(bt+1),kt=x+(V+1)+rt*bt;v.push(it,Mt,kt),v.push(Mt,Pt,kt),at+=6}g.addGroup(b,at,z),b+=at,x+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const bc=new mt,Ac=new mt,zd=new mt,Rc=new aa;class YS extends Hi{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),u=Math.cos(Bc*i),d=e.getIndex(),g=e.getAttribute("position"),v=d?d.count:g.count,p=[0,0,0],S=["a","b","c"],E=new Array(3),x={},b=[];for(let C=0;C<v;C+=3){d?(p[0]=d.getX(C),p[1]=d.getX(C+1),p[2]=d.getX(C+2)):(p[0]=C,p[1]=C+1,p[2]=C+2);const{a:O,b:T,c:M}=Rc;if(O.fromBufferAttribute(g,p[0]),T.fromBufferAttribute(g,p[1]),M.fromBufferAttribute(g,p[2]),Rc.getNormal(zd),E[0]=`${Math.round(O.x*l)},${Math.round(O.y*l)},${Math.round(O.z*l)}`,E[1]=`${Math.round(T.x*l)},${Math.round(T.y*l)},${Math.round(T.z*l)}`,E[2]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,!(E[0]===E[1]||E[1]===E[2]||E[2]===E[0]))for(let P=0;P<3;P++){const X=(P+1)%3,I=E[P],Q=E[X],Y=Rc[S[P]],q=Rc[S[X]],w=`${I}_${Q}`,z=`${Q}_${I}`;z in x&&x[z]?(zd.dot(x[z].normal)<=u&&(b.push(Y.x,Y.y,Y.z),b.push(q.x,q.y,q.z)),x[z]=null):w in x||(x[w]={index0:p[P],index1:p[X],normal:zd.clone()})}}for(const C in x)if(x[C]){const{index0:O,index1:T}=x[C];bc.fromBufferAttribute(g,O),Ac.fromBufferAttribute(g,T),b.push(bc.x,bc.y,bc.z),b.push(Ac.x,Ac.y,Ac.z)}this.setAttribute("position",new li(b,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Kc extends Hi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,g=Math.floor(r),v=Math.floor(l),p=g+1,S=v+1,E=e/g,x=i/v,b=[],C=[],O=[],T=[];for(let M=0;M<S;M++){const P=M*x-d;for(let X=0;X<p;X++){const I=X*E-u;C.push(I,-P,0),O.push(0,0,1),T.push(X/g),T.push(1-M/v)}}for(let M=0;M<v;M++)for(let P=0;P<g;P++){const X=P+p*M,I=P+p*(M+1),Q=P+1+p*(M+1),Y=P+1+p*M;b.push(X,I,Y),b.push(I,Q,Y)}this.setIndex(b),this.setAttribute("position",new li(C,3)),this.setAttribute("normal",new li(O,3)),this.setAttribute("uv",new li(T,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.width,e.height,e.widthSegments,e.heightSegments)}}function No(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function hi(o){const e={};for(let i=0;i<o.length;i++){const r=No(o[i]);for(const l in r)e[l]=r[l]}return e}function ZS(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function j_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const KS={clone:No,merge:hi};var QS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ua extends Gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QS,this.fragmentShader=JS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=ZS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class $S extends Ua{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tM extends Gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eM extends Gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cc=new mt,wc=new Po,Ma=new mt;class q_ extends Ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dn,this.projectionMatrix=new Dn,this.projectionMatrixInverse=new Dn,this.coordinateSystem=Aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cc,wc,Ma),Ma.x===1&&Ma.y===1&&Ma.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,wc,Ma.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Cc,wc,Ma),Ma.x===1&&Ma.y===1&&Ma.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cc,wc,Ma.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jr=new mt,Yv=new ln,Zv=new ln;class na extends q_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Pp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pp*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,i){return this.getViewBounds(e,Yv,Zv),i.subVectors(Zv,Yv)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Bc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const v=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/v,i-=d.offsetY*r/p,l*=d.width/v,r*=d.height/p}const g=this.filmOffset;g!==0&&(u+=e*g/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Y_ extends q_{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,g=l+i,v=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,g-=S*this.view.offsetY,v=g-S*this.view.height}this.projectionMatrix.makeOrthographic(u,d,g,v,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const To=-90,bo=1;class nM extends Ai{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new na(To,bo,e,i);l.layers=this.layers,this.add(l);const u=new na(To,bo,e,i);u.layers=this.layers,this.add(u);const d=new na(To,bo,e,i);d.layers=this.layers,this.add(d);const g=new na(To,bo,e,i);g.layers=this.layers,this.add(g);const v=new na(To,bo,e,i);v.layers=this.layers,this.add(v);const p=new na(To,bo,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,g,v]=i;for(const p of i)this.remove(p);if(e===Aa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),g.up.set(0,1,0),g.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(e===Gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),g.up.set(0,-1,0),g.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,g,v,p,S]=this.children,E=e.getRenderTarget(),x=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),C=e.xr.enabled;e.xr.enabled=!1;const O=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let T=!1;e.isWebGLRenderer===!0?T=e.state.buffers.depth.getReversed():T=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),T&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),T&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),T&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(r,3,l),T&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(r,4,l),T&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),r.texture.generateMipmaps=O,e.setRenderTarget(r,5,l),T&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(E,x,b),e.xr.enabled=C,r.texture.needsPMREMUpdate=!0}}class iM extends na{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class aM extends Zp{constructor(e=10,i=10,r=4473924,l=8947848){r=new We(r),l=new We(l);const u=i/2,d=e/i,g=e/2,v=[],p=[];for(let x=0,b=0,C=-g;x<=i;x++,C+=d){v.push(-g,0,C,g,0,C),v.push(C,0,-g,C,0,g);const O=x===u?r:l;O.toArray(p,b),b+=3,O.toArray(p,b),b+=3,O.toArray(p,b),b+=3,O.toArray(p,b),b+=3}const S=new Hi;S.setAttribute("position",new li(v,3)),S.setAttribute("color",new li(p,3));const E=new Zc({vertexColors:!0,toneMapped:!1});super(S,E),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class rM extends Zp{constructor(e=1){const i=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new Hi;l.setAttribute("position",new li(i,3)),l.setAttribute("color",new li(r,3));const u=new Zc({vertexColors:!0,toneMapped:!1});super(l,u),this.type="AxesHelper"}setColors(e,i,r){const l=new We,u=this.geometry.attributes.color.array;return l.set(e),l.toArray(u,0),l.toArray(u,3),l.set(i),l.toArray(u,6),l.toArray(u,9),l.set(r),l.toArray(u,12),l.toArray(u,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Kv(o,e,i,r){const l=sM(r);switch(i){case N_:return o*e;case P_:return o*e/l.components*l.byteLength;case Xp:return o*e/l.components*l.byteLength;case Uo:return o*e*2/l.components*l.byteLength;case kp:return o*e*2/l.components*l.byteLength;case O_:return o*e*3/l.components*l.byteLength;case pa:return o*e*4/l.components*l.byteLength;case Wp:return o*e*4/l.components*l.byteLength;case Nc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Fc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ap:case sp:return Math.max(o,16)*Math.max(e,8)/4;case ip:case rp:return Math.max(o,8)*Math.max(e,8)/2;case op:case lp:case cp:case fp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case up:case hp:case dp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case mp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case gp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case vp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case _p:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case xp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case yp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case bp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Cp:case wp:case Dp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Up:case Lp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Np:case Op:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sM(o){switch(o){case ia:case w_:return{byteLength:1,components:1};case Fl:case D_:case sr:return{byteLength:2,components:1};case Gp:case Vp:return{byteLength:2,components:4};case Da:case Hp:case ba:return{byteLength:4,components:1};case U_:case L_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zp}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zp);function Z_(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function oM(o){const e=new WeakMap;function i(g,v){const p=g.array,S=g.usage,E=p.byteLength,x=o.createBuffer();o.bindBuffer(v,x),o.bufferData(v,p,S),g.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)g.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:g.version,size:E}}function r(g,v,p){const S=v.array,E=v.updateRanges;if(o.bindBuffer(p,g),E.length===0)o.bufferSubData(p,0,S);else{E.sort((b,C)=>b.start-C.start);let x=0;for(let b=1;b<E.length;b++){const C=E[x],O=E[b];O.start<=C.start+C.count+1?C.count=Math.max(C.count,O.start+O.count-C.start):(++x,E[x]=O)}E.length=x+1;for(let b=0,C=E.length;b<C;b++){const O=E[b];o.bufferSubData(p,O.start*S.BYTES_PER_ELEMENT,S,O.start,O.count)}v.clearUpdateRanges()}v.onUploadCallback()}function l(g){return g.isInterleavedBufferAttribute&&(g=g.data),e.get(g)}function u(g){g.isInterleavedBufferAttribute&&(g=g.data);const v=e.get(g);v&&(o.deleteBuffer(v.buffer),e.delete(g))}function d(g,v){if(g.isInterleavedBufferAttribute&&(g=g.data),g.isGLBufferAttribute){const S=e.get(g);(!S||S.version<g.version)&&e.set(g,{buffer:g.buffer,type:g.type,bytesPerElement:g.elementSize,version:g.version});return}const p=e.get(g);if(p===void 0)e.set(g,i(g,v));else if(p.version<g.version){if(p.size!==g.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,g,v),p.version=g.version}}return{get:l,remove:u,update:d}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uM=`#ifdef USE_ALPHAHASH
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
#endif`,cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
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
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM=`#ifdef USE_BATCHING
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
#endif`,vM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SM=`#ifdef USE_IRIDESCENCE
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
#endif`,MM=`#ifdef USE_BUMPMAP
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,DM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,UM=`#define PI 3.141592653589793
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
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NM=`vec3 transformedNormal = objectNormal;
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
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IM="gl_FragColor = linearToOutputTexel( gl_FragColor );",zM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HM=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZM=`#ifdef USE_GRADIENTMAP
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
}`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$M=`uniform bool receiveShadow;
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
#endif`,tE=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,eE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rE=`PhysicalMaterial material;
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
#endif`,sE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,oE=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif`,lE=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vE=`#if defined( USE_POINTS_UV )
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
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ME=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`#ifdef USE_MORPHTARGETS
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
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DE=`#ifdef USE_NORMALMAP
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
#endif`,UE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jE=`float getShadowMask() {
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
}`,qE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YE=`#ifdef USE_SKINNING
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
#endif`,ZE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KE=`#ifdef USE_SKINNING
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
#endif`,QE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e1=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n1=`#ifdef USE_TRANSMISSION
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
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l1=`uniform sampler2D t2D;
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
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`#include <common>
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
}`,p1=`#if DEPTH_PACKING == 3200
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
}`,m1=`#define DISTANCE
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
}`,g1=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`uniform float scale;
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
}`,y1=`uniform vec3 diffuse;
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
}`,S1=`#include <common>
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
}`,M1=`uniform vec3 diffuse;
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
}`,E1=`#define LAMBERT
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
}`,T1=`#define LAMBERT
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
}`,b1=`#define MATCAP
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
}`,A1=`#define MATCAP
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
}`,R1=`#define NORMAL
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
}`,C1=`#define NORMAL
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
}`,w1=`#define PHONG
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
}`,D1=`#define PHONG
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
}`,U1=`#define STANDARD
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
}`,L1=`#define STANDARD
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
}`,N1=`#define TOON
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
}`,O1=`#define TOON
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
}`,P1=`uniform float size;
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
}`,F1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,I1=`uniform vec3 color;
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
}`,z1=`uniform float rotation;
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
}`,H1=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:lM,alphahash_pars_fragment:uM,alphamap_fragment:cM,alphamap_pars_fragment:fM,alphatest_fragment:hM,alphatest_pars_fragment:dM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:gM,batching_vertex:vM,begin_vertex:_M,beginnormal_vertex:xM,bsdfs:yM,iridescence_fragment:SM,bumpmap_pars_fragment:MM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:bM,clipping_planes_vertex:AM,color_fragment:RM,color_pars_fragment:CM,color_pars_vertex:wM,color_vertex:DM,common:UM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:NM,displacementmap_pars_vertex:OM,displacementmap_vertex:PM,emissivemap_fragment:FM,emissivemap_pars_fragment:BM,colorspace_fragment:IM,colorspace_pars_fragment:zM,envmap_fragment:HM,envmap_common_pars_fragment:GM,envmap_pars_fragment:VM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:tE,envmap_vertex:kM,fog_vertex:WM,fog_pars_vertex:jM,fog_fragment:qM,fog_pars_fragment:YM,gradientmap_pars_fragment:ZM,lightmap_pars_fragment:KM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:JM,lights_pars_begin:$M,lights_toon_fragment:eE,lights_toon_pars_fragment:nE,lights_phong_fragment:iE,lights_phong_pars_fragment:aE,lights_physical_fragment:rE,lights_physical_pars_fragment:sE,lights_fragment_begin:oE,lights_fragment_maps:lE,lights_fragment_end:uE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:fE,logdepthbuf_pars_vertex:hE,logdepthbuf_vertex:dE,map_fragment:pE,map_pars_fragment:mE,map_particle_fragment:gE,map_particle_pars_fragment:vE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:xE,morphinstance_vertex:yE,morphcolor_vertex:SE,morphnormal_vertex:ME,morphtarget_pars_vertex:EE,morphtarget_vertex:TE,normal_fragment_begin:bE,normal_fragment_maps:AE,normal_pars_fragment:RE,normal_pars_vertex:CE,normal_vertex:wE,normalmap_pars_fragment:DE,clearcoat_normal_fragment_begin:UE,clearcoat_normal_fragment_maps:LE,clearcoat_pars_fragment:NE,iridescence_pars_fragment:OE,opaque_fragment:PE,packing:FE,premultiplied_alpha_fragment:BE,project_vertex:IE,dithering_fragment:zE,dithering_pars_fragment:HE,roughnessmap_fragment:GE,roughnessmap_pars_fragment:VE,shadowmap_pars_fragment:XE,shadowmap_pars_vertex:kE,shadowmap_vertex:WE,shadowmask_pars_fragment:jE,skinbase_vertex:qE,skinning_pars_vertex:YE,skinning_vertex:ZE,skinnormal_vertex:KE,specularmap_fragment:QE,specularmap_pars_fragment:JE,tonemapping_fragment:$E,tonemapping_pars_fragment:t1,transmission_fragment:e1,transmission_pars_fragment:n1,uv_pars_fragment:i1,uv_pars_vertex:a1,uv_vertex:r1,worldpos_vertex:s1,background_vert:o1,background_frag:l1,backgroundCube_vert:u1,backgroundCube_frag:c1,cube_vert:f1,cube_frag:h1,depth_vert:d1,depth_frag:p1,distance_vert:m1,distance_frag:g1,equirect_vert:v1,equirect_frag:_1,linedashed_vert:x1,linedashed_frag:y1,meshbasic_vert:S1,meshbasic_frag:M1,meshlambert_vert:E1,meshlambert_frag:T1,meshmatcap_vert:b1,meshmatcap_frag:A1,meshnormal_vert:R1,meshnormal_frag:C1,meshphong_vert:w1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:L1,meshtoon_vert:N1,meshtoon_frag:O1,points_vert:P1,points_frag:F1,shadow_vert:B1,shadow_frag:I1,sprite_vert:z1,sprite_frag:H1},jt={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ln(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ln(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Ta={basic:{uniforms:hi([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:hi([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:hi([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:hi([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:hi([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new We(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:hi([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:hi([jt.points,jt.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:hi([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:hi([jt.common,jt.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:hi([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:hi([jt.sprite,jt.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:hi([jt.common,jt.displacementmap,{referencePosition:{value:new mt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:hi([jt.lights,jt.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Ta.physical={uniforms:hi([Ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ln(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ln},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ln},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Dc={r:0,b:0,g:0},Ss=new lr,G1=new Dn;function V1(o,e,i,r,l,u){const d=new We(0);let g=l===!0?0:1,v,p,S=null,E=0,x=null;function b(P){let X=P.isScene===!0?P.background:null;if(X&&X.isTexture){const I=P.backgroundBlurriness>0;X=e.get(X,I)}return X}function C(P){let X=!1;const I=b(P);I===null?T(d,g):I&&I.isColor&&(T(I,1),X=!0);const Q=o.xr.getEnvironmentBlendMode();Q==="additive"?i.buffers.color.setClear(0,0,0,1,u):Q==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||X)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function O(P,X){const I=b(X);I&&(I.isCubeTexture||I.mapping===jc)?(p===void 0&&(p=new ma(new ws(1,1,1),new Ua({name:"BackgroundCubeMaterial",uniforms:No(Ta.backgroundCube.uniforms),vertexShader:Ta.backgroundCube.vertexShader,fragmentShader:Ta.backgroundCube.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(Q,Y,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Ss.copy(X.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),p.material.uniforms.envMap.value=I,p.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=X.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(G1.makeRotationFromEuler(Ss)),p.material.toneMapped=ke.getTransfer(I.colorSpace)!==nn,(S!==I||E!==I.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,S=I,E=I.version,x=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):I&&I.isTexture&&(v===void 0&&(v=new ma(new Kc(2,2),new Ua({name:"BackgroundMaterial",uniforms:No(Ta.background.uniforms),vertexShader:Ta.background.vertexShader,fragmentShader:Ta.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(v)),v.material.uniforms.t2D.value=I,v.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,v.material.toneMapped=ke.getTransfer(I.colorSpace)!==nn,I.matrixAutoUpdate===!0&&I.updateMatrix(),v.material.uniforms.uvTransform.value.copy(I.matrix),(S!==I||E!==I.version||x!==o.toneMapping)&&(v.material.needsUpdate=!0,S=I,E=I.version,x=o.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null))}function T(P,X){P.getRGB(Dc,j_(o)),i.buffers.color.setClear(Dc.r,Dc.g,Dc.b,X,u)}function M(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,X=1){d.set(P),g=X,T(d,g)},getClearAlpha:function(){return g},setClearAlpha:function(P){g=P,T(d,g)},render:C,addToRenderList:O,dispose:M}}function X1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,d=!1;function g(D,j,K,lt,rt){let U=!1;const F=E(D,lt,K,j);u!==F&&(u=F,p(u.object)),U=b(D,lt,K,rt),U&&C(D,lt,K,rt),rt!==null&&e.update(rt,o.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,I(D,j,K,lt),rt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(rt).buffer))}function v(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function S(D){return o.deleteVertexArray(D)}function E(D,j,K,lt){const rt=lt.wireframe===!0;let U=r[j.id];U===void 0&&(U={},r[j.id]=U);const F=D.isInstancedMesh===!0?D.id:0;let at=U[F];at===void 0&&(at={},U[F]=at);let ct=at[K.id];ct===void 0&&(ct={},at[K.id]=ct);let bt=ct[rt];return bt===void 0&&(bt=x(v()),ct[rt]=bt),bt}function x(D){const j=[],K=[],lt=[];for(let rt=0;rt<i;rt++)j[rt]=0,K[rt]=0,lt[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:K,attributeDivisors:lt,object:D,attributes:{},index:null}}function b(D,j,K,lt){const rt=u.attributes,U=j.attributes;let F=0;const at=K.getAttributes();for(const ct in at)if(at[ct].location>=0){const V=rt[ct];let it=U[ct];if(it===void 0&&(ct==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),ct==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),V===void 0||V.attribute!==it||it&&V.data!==it.data)return!0;F++}return u.attributesNum!==F||u.index!==lt}function C(D,j,K,lt){const rt={},U=j.attributes;let F=0;const at=K.getAttributes();for(const ct in at)if(at[ct].location>=0){let V=U[ct];V===void 0&&(ct==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),ct==="instanceColor"&&D.instanceColor&&(V=D.instanceColor));const it={};it.attribute=V,V&&V.data&&(it.data=V.data),rt[ct]=it,F++}u.attributes=rt,u.attributesNum=F,u.index=lt}function O(){const D=u.newAttributes;for(let j=0,K=D.length;j<K;j++)D[j]=0}function T(D){M(D,0)}function M(D,j){const K=u.newAttributes,lt=u.enabledAttributes,rt=u.attributeDivisors;K[D]=1,lt[D]===0&&(o.enableVertexAttribArray(D),lt[D]=1),rt[D]!==j&&(o.vertexAttribDivisor(D,j),rt[D]=j)}function P(){const D=u.newAttributes,j=u.enabledAttributes;for(let K=0,lt=j.length;K<lt;K++)j[K]!==D[K]&&(o.disableVertexAttribArray(K),j[K]=0)}function X(D,j,K,lt,rt,U,F){F===!0?o.vertexAttribIPointer(D,j,K,rt,U):o.vertexAttribPointer(D,j,K,lt,rt,U)}function I(D,j,K,lt){O();const rt=lt.attributes,U=K.getAttributes(),F=j.defaultAttributeValues;for(const at in U){const ct=U[at];if(ct.location>=0){let bt=rt[at];if(bt===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(bt=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(bt=D.instanceColor)),bt!==void 0){const V=bt.normalized,it=bt.itemSize,Mt=e.get(bt);if(Mt===void 0)continue;const Pt=Mt.buffer,kt=Mt.type,pt=Mt.bytesPerElement,Rt=kt===o.INT||kt===o.UNSIGNED_INT||bt.gpuType===Hp;if(bt.isInterleavedBufferAttribute){const Ot=bt.data,te=Ot.stride,oe=bt.offset;if(Ot.isInstancedInterleavedBuffer){for(let ce=0;ce<ct.locationSize;ce++)M(ct.location+ce,Ot.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let ce=0;ce<ct.locationSize;ce++)T(ct.location+ce);o.bindBuffer(o.ARRAY_BUFFER,Pt);for(let ce=0;ce<ct.locationSize;ce++)X(ct.location+ce,it/ct.locationSize,kt,V,te*pt,(oe+it/ct.locationSize*ce)*pt,Rt)}else{if(bt.isInstancedBufferAttribute){for(let Ot=0;Ot<ct.locationSize;Ot++)M(ct.location+Ot,bt.meshPerAttribute);D.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Ot=0;Ot<ct.locationSize;Ot++)T(ct.location+Ot);o.bindBuffer(o.ARRAY_BUFFER,Pt);for(let Ot=0;Ot<ct.locationSize;Ot++)X(ct.location+Ot,it/ct.locationSize,kt,V,it*pt,it/ct.locationSize*Ot*pt,Rt)}}else if(F!==void 0){const V=F[at];if(V!==void 0)switch(V.length){case 2:o.vertexAttrib2fv(ct.location,V);break;case 3:o.vertexAttrib3fv(ct.location,V);break;case 4:o.vertexAttrib4fv(ct.location,V);break;default:o.vertexAttrib1fv(ct.location,V)}}}}P()}function Q(){z();for(const D in r){const j=r[D];for(const K in j){const lt=j[K];for(const rt in lt){const U=lt[rt];for(const F in U)S(U[F].object),delete U[F];delete lt[rt]}}delete r[D]}}function Y(D){if(r[D.id]===void 0)return;const j=r[D.id];for(const K in j){const lt=j[K];for(const rt in lt){const U=lt[rt];for(const F in U)S(U[F].object),delete U[F];delete lt[rt]}}delete r[D.id]}function q(D){for(const j in r){const K=r[j];for(const lt in K){const rt=K[lt];if(rt[D.id]===void 0)continue;const U=rt[D.id];for(const F in U)S(U[F].object),delete U[F];delete rt[D.id]}}}function w(D){for(const j in r){const K=r[j],lt=D.isInstancedMesh===!0?D.id:0,rt=K[lt];if(rt!==void 0){for(const U in rt){const F=rt[U];for(const at in F)S(F[at].object),delete F[at];delete rt[U]}delete K[lt],Object.keys(K).length===0&&delete r[j]}}}function z(){B(),d=!0,u!==l&&(u=l,p(u.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:g,reset:z,resetDefaultState:B,dispose:Q,releaseStatesOfGeometry:Y,releaseStatesOfObject:w,releaseStatesOfProgram:q,initAttributes:O,enableAttribute:T,disableUnusedAttributes:P}}function k1(o,e,i){let r;function l(p){r=p}function u(p,S){o.drawArrays(r,p,S),i.update(S,r,1)}function d(p,S,E){E!==0&&(o.drawArraysInstanced(r,p,S,E),i.update(S,r,E))}function g(p,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,S,0,E);let b=0;for(let C=0;C<E;C++)b+=S[C];i.update(b,r,1)}function v(p,S,E,x){if(E===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let C=0;C<p.length;C++)d(p[C],S[C],x[C]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,S,0,x,0,E);let C=0;for(let O=0;O<E;O++)C+=S[O]*x[O];i.update(C,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function W1(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(q){return!(q!==pa&&r.convert(q)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function g(q){const w=q===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(q!==ia&&r.convert(q)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&q!==ba&&!w)}function v(q){if(q==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";q="mediump"}return q==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=v(p);S!==p&&(Me("WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const E=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),O=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),X=o.getParameter(o.MAX_VARYING_VECTORS),I=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Q=o.getParameter(o.MAX_SAMPLES),Y=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:v,textureFormatReadable:d,textureTypeReadable:g,precision:p,logarithmicDepthBuffer:E,reversedDepthBuffer:x,maxTextures:b,maxVertexTextures:C,maxTextureSize:O,maxCubemapSize:T,maxAttributes:M,maxVertexUniforms:P,maxVaryings:X,maxFragmentUniforms:I,maxSamples:Q,samples:Y}}function j1(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Es,g=new De,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(E,x){const b=E.length!==0||x||r!==0||l;return l=x,r=E.length,b},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(E,x){i=S(E,x,0)},this.setState=function(E,x,b){const C=E.clippingPlanes,O=E.clipIntersection,T=E.clipShadows,M=o.get(E);if(!l||C===null||C.length===0||u&&!T)u?S(null):p();else{const P=u?0:r,X=P*4;let I=M.clippingState||null;v.value=I,I=S(C,x,X,b);for(let Q=0;Q!==X;++Q)I[Q]=i[Q];M.clippingState=I,this.numIntersection=O?this.numPlanes:0,this.numPlanes+=P}};function p(){v.value!==i&&(v.value=i,v.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(E,x,b,C){const O=E!==null?E.length:0;let T=null;if(O!==0){if(T=v.value,C!==!0||T===null){const M=b+O*4,P=x.matrixWorldInverse;g.getNormalMatrix(P),(T===null||T.length<M)&&(T=new Float32Array(M));for(let X=0,I=b;X!==O;++X,I+=4)d.copy(E[X]).applyMatrix4(P,g),d.normal.toArray(T,I),T[I+3]=d.constant}v.value=T,v.needsUpdate=!0}return e.numPlanes=O,e.numIntersection=0,T}}const Yr=4,Qv=[.125,.215,.35,.446,.526,.582],bs=20,q1=256,Ll=new Y_,Jv=new We;let Hd=null,Gd=0,Vd=0,Xd=!1;const Y1=new mt;class $v{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:g=Y1}=u;Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const v=this._allocateTargets();return v.depthBuffer=!0,this._sceneToCubeUV(e,r,l,v,g),i>0&&this._blur(v,0,0,i),this._applyPMREM(v),this._cleanup(v),v}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Gd,Vd),this._renderer.xr.enabled=Xd,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Cs||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:sr,format:pa,colorSpace:Lo,depthBuffer:!1},l=t_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Z1(u)),this._blurMaterial=Q1(u,e,i),this._ggxMaterial=K1(u,e,i)}return l}_compileMaterial(e){const i=new ma(new Hi,e);this._renderer.compile(i,Ll)}_sceneToCubeUV(e,i,r,l,u){const v=new na(90,1,i,r),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],E=this._renderer,x=E.autoClear,b=E.toneMapping;E.getClearColor(Jv),E.toneMapping=Ra,E.autoClear=!1,E.state.buffers.depth.getReversed()&&(E.setRenderTarget(l),E.clearDepth(),E.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ma(new ws,new Yc({name:"PMREM.Background",side:bi,depthWrite:!1,depthTest:!1})));const O=this._backgroundBox,T=O.material;let M=!1;const P=e.background;P?P.isColor&&(T.color.copy(P),e.background=null,M=!0):(T.color.copy(Jv),M=!0);for(let X=0;X<6;X++){const I=X%3;I===0?(v.up.set(0,p[X],0),v.position.set(u.x,u.y,u.z),v.lookAt(u.x+S[X],u.y,u.z)):I===1?(v.up.set(0,0,p[X]),v.position.set(u.x,u.y,u.z),v.lookAt(u.x,u.y+S[X],u.z)):(v.up.set(0,p[X],0),v.position.set(u.x,u.y,u.z),v.lookAt(u.x,u.y,u.z+S[X]));const Q=this._cubeSize;Ao(l,I*Q,X>2?Q:0,Q,Q),E.setRenderTarget(l),M&&E.render(O,v),E.render(e,v)}E.toneMapping=b,E.autoClear=x,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Cs||e.mapping===Do;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=n_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const g=u.uniforms;g.envMap.value=e;const v=this._cubeSize;Ao(i,0,0,3*v,2*v),r.setRenderTarget(i),r.render(d,Ll)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,g=this._lodMeshes[r];g.material=d;const v=d.uniforms,p=r/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),E=Math.sqrt(p*p-S*S),x=0+p*1.25,b=E*x,{_lodMax:C}=this,O=this._sizeLods[r],T=3*O*(r>C-Yr?r-C+Yr:0),M=4*(this._cubeSize-O);v.envMap.value=e.texture,v.roughness.value=b,v.mipInt.value=C-i,Ao(u,T,M,3*O,2*O),l.setRenderTarget(u),l.render(g,Ll),v.envMap.value=u.texture,v.roughness.value=0,v.mipInt.value=C-r,Ao(e,T,M,3*O,2*O),l.setRenderTarget(e),l.render(g,Ll)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,g){const v=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const S=3,E=this._lodMeshes[l];E.material=p;const x=p.uniforms,b=this._sizeLods[r]-1,C=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*bs-1),O=u/C,T=isFinite(u)?1+Math.floor(S*O):bs;T>bs&&Me(`sigmaRadians, ${u}, is too large and will clip, as it requested ${T} samples when the maximum is set to ${bs}`);const M=[];let P=0;for(let q=0;q<bs;++q){const w=q/O,z=Math.exp(-w*w/2);M.push(z),q===0?P+=z:q<T&&(P+=2*z)}for(let q=0;q<M.length;q++)M[q]=M[q]/P;x.envMap.value=e.texture,x.samples.value=T,x.weights.value=M,x.latitudinal.value=d==="latitudinal",g&&(x.poleAxis.value=g);const{_lodMax:X}=this;x.dTheta.value=C,x.mipInt.value=X-r;const I=this._sizeLods[l],Q=3*I*(l>X-Yr?l-X+Yr:0),Y=4*(this._cubeSize-I);Ao(i,Q,Y,3*I,2*I),v.setRenderTarget(i),v.render(E,Ll)}}function Z1(o){const e=[],i=[],r=[];let l=o;const u=o-Yr+1+Qv.length;for(let d=0;d<u;d++){const g=Math.pow(2,l);e.push(g);let v=1/g;d>o-Yr?v=Qv[d-o+Yr-1]:d===0&&(v=0),i.push(v);const p=1/(g-2),S=-p,E=1+p,x=[S,S,E,S,E,E,S,S,E,E,S,E],b=6,C=6,O=3,T=2,M=1,P=new Float32Array(O*C*b),X=new Float32Array(T*C*b),I=new Float32Array(M*C*b);for(let Y=0;Y<b;Y++){const q=Y%3*2/3-1,w=Y>2?0:-1,z=[q,w,0,q+2/3,w,0,q+2/3,w+1,0,q,w,0,q+2/3,w+1,0,q,w+1,0];P.set(z,O*C*Y),X.set(x,T*C*Y);const B=[Y,Y,Y,Y,Y,Y];I.set(B,M*C*Y)}const Q=new Hi;Q.setAttribute("position",new wa(P,O)),Q.setAttribute("uv",new wa(X,T)),Q.setAttribute("faceIndex",new wa(I,M)),r.push(new ma(Q,null)),l>Yr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function t_(o,e,i){const r=new Ca(o,e,i);return r.texture.mapping=jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ao(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function K1(o,e,i){return new Ua({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Q1(o,e,i){const r=new Float32Array(bs),l=new mt(0,1,0);return new Ua({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function e_(){return new Ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function n_(){return new Ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}class K_ extends Ca{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new k_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ws(5,5,5),u=new Ua({name:"CubemapFromEquirect",uniforms:No(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bi,blending:ar});u.uniforms.tEquirect.value=i;const d=new ma(l,u),g=i.minFilter;return i.minFilter===As&&(i.minFilter=oi),new nM(1,10,this).update(e,d),i.minFilter=g,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}function J1(o){let e=new WeakMap,i=new WeakMap,r=null;function l(x,b=!1){return x==null?null:b?d(x):u(x)}function u(x){if(x&&x.isTexture){const b=x.mapping;if(b===hd||b===dd)if(e.has(x)){const C=e.get(x).texture;return g(C,x.mapping)}else{const C=x.image;if(C&&C.height>0){const O=new K_(C.height);return O.fromEquirectangularTexture(o,x),e.set(x,O),x.addEventListener("dispose",p),g(O.texture,x.mapping)}else return null}}return x}function d(x){if(x&&x.isTexture){const b=x.mapping,C=b===hd||b===dd,O=b===Cs||b===Do;if(C||O){let T=i.get(x);const M=T!==void 0?T.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==M)return r===null&&(r=new $v(o)),T=C?r.fromEquirectangular(x,T):r.fromCubemap(x,T),T.texture.pmremVersion=x.pmremVersion,i.set(x,T),T.texture;if(T!==void 0)return T.texture;{const P=x.image;return C&&P&&P.height>0||O&&P&&v(P)?(r===null&&(r=new $v(o)),T=C?r.fromEquirectangular(x):r.fromCubemap(x),T.texture.pmremVersion=x.pmremVersion,i.set(x,T),x.addEventListener("dispose",S),T.texture):null}}}return x}function g(x,b){return b===hd?x.mapping=Cs:b===dd&&(x.mapping=Do),x}function v(x){let b=0;const C=6;for(let O=0;O<C;O++)x[O]!==void 0&&b++;return b===C}function p(x){const b=x.target;b.removeEventListener("dispose",p);const C=e.get(b);C!==void 0&&(e.delete(b),C.dispose())}function S(x){const b=x.target;b.removeEventListener("dispose",S);const C=i.get(b);C!==void 0&&(i.delete(b),C.dispose())}function E(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:E}}function $1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Xc("WebGLRenderer: "+r+" extension not supported."),l}}}function tT(o,e,i,r){const l={},u=new WeakMap;function d(E){const x=E.target;x.index!==null&&e.remove(x.index);for(const C in x.attributes)e.remove(x.attributes[C]);x.removeEventListener("dispose",d),delete l[x.id];const b=u.get(x);b&&(e.remove(b),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function g(E,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function v(E){const x=E.attributes;for(const b in x)e.update(x[b],o.ARRAY_BUFFER)}function p(E){const x=[],b=E.index,C=E.attributes.position;let O=0;if(C===void 0)return;if(b!==null){const P=b.array;O=b.version;for(let X=0,I=P.length;X<I;X+=3){const Q=P[X+0],Y=P[X+1],q=P[X+2];x.push(Q,Y,Y,q,q,Q)}}else{const P=C.array;O=C.version;for(let X=0,I=P.length/3-1;X<I;X+=3){const Q=X+0,Y=X+1,q=X+2;x.push(Q,Y,Y,q,q,Q)}}const T=new(C.count>=65535?G_:H_)(x,1);T.version=O;const M=u.get(E);M&&e.remove(M),u.set(E,T)}function S(E){const x=u.get(E);if(x){const b=E.index;b!==null&&x.version<b.version&&p(E)}else p(E);return u.get(E)}return{get:g,update:v,getWireframeAttribute:S}}function eT(o,e,i){let r;function l(x){r=x}let u,d;function g(x){u=x.type,d=x.bytesPerElement}function v(x,b){o.drawElements(r,b,u,x*d),i.update(b,r,1)}function p(x,b,C){C!==0&&(o.drawElementsInstanced(r,b,u,x*d,C),i.update(b,r,C))}function S(x,b,C){if(C===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,u,x,0,C);let T=0;for(let M=0;M<C;M++)T+=b[M];i.update(T,r,1)}function E(x,b,C,O){if(C===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let M=0;M<x.length;M++)p(x[M]/d,b[M],O[M]);else{T.multiDrawElementsInstancedWEBGL(r,b,0,u,x,0,O,0,C);let M=0;for(let P=0;P<C;P++)M+=b[P]*O[P];i.update(M,r,1)}}this.setMode=l,this.setIndex=g,this.render=v,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=E}function nT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,g){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=g*(u/3);break;case o.LINES:i.lines+=g*(u/2);break;case o.LINE_STRIP:i.lines+=g*(u-1);break;case o.LINE_LOOP:i.lines+=g*u;break;case o.POINTS:i.points+=g*u;break;default:Je("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function iT(o,e,i){const r=new WeakMap,l=new wn;function u(d,g,v){const p=d.morphTargetInfluences,S=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,E=S!==void 0?S.length:0;let x=r.get(g);if(x===void 0||x.count!==E){let B=function(){w.dispose(),r.delete(g),g.removeEventListener("dispose",B)};var b=B;x!==void 0&&x.texture.dispose();const C=g.morphAttributes.position!==void 0,O=g.morphAttributes.normal!==void 0,T=g.morphAttributes.color!==void 0,M=g.morphAttributes.position||[],P=g.morphAttributes.normal||[],X=g.morphAttributes.color||[];let I=0;C===!0&&(I=1),O===!0&&(I=2),T===!0&&(I=3);let Q=g.attributes.position.count*I,Y=1;Q>e.maxTextureSize&&(Y=Math.ceil(Q/e.maxTextureSize),Q=e.maxTextureSize);const q=new Float32Array(Q*Y*4*E),w=new B_(q,Q,Y,E);w.type=ba,w.needsUpdate=!0;const z=I*4;for(let D=0;D<E;D++){const j=M[D],K=P[D],lt=X[D],rt=Q*Y*4*D;for(let U=0;U<j.count;U++){const F=U*z;C===!0&&(l.fromBufferAttribute(j,U),q[rt+F+0]=l.x,q[rt+F+1]=l.y,q[rt+F+2]=l.z,q[rt+F+3]=0),O===!0&&(l.fromBufferAttribute(K,U),q[rt+F+4]=l.x,q[rt+F+5]=l.y,q[rt+F+6]=l.z,q[rt+F+7]=0),T===!0&&(l.fromBufferAttribute(lt,U),q[rt+F+8]=l.x,q[rt+F+9]=l.y,q[rt+F+10]=l.z,q[rt+F+11]=lt.itemSize===4?l.w:1)}}x={count:E,texture:w,size:new ln(Q,Y)},r.set(g,x),g.addEventListener("dispose",B)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)v.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let C=0;for(let T=0;T<p.length;T++)C+=p[T];const O=g.morphTargetsRelative?1:1-C;v.getUniforms().setValue(o,"morphTargetBaseInfluence",O),v.getUniforms().setValue(o,"morphTargetInfluences",p)}v.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),v.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function aT(o,e,i,r,l){let u=new WeakMap;function d(p){const S=l.render.frame,E=p.geometry,x=e.get(p,E);if(u.get(x)!==S&&(e.update(x),u.set(x,S)),p.isInstancedMesh&&(p.hasEventListener("dispose",v)===!1&&p.addEventListener("dispose",v),u.get(p)!==S&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),u.set(p,S))),p.isSkinnedMesh){const b=p.skeleton;u.get(b)!==S&&(b.update(),u.set(b,S))}return x}function g(){u=new WeakMap}function v(p){const S=p.target;S.removeEventListener("dispose",v),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:g}}const rT={[S_]:"LINEAR_TONE_MAPPING",[M_]:"REINHARD_TONE_MAPPING",[E_]:"CINEON_TONE_MAPPING",[T_]:"ACES_FILMIC_TONE_MAPPING",[A_]:"AGX_TONE_MAPPING",[R_]:"NEUTRAL_TONE_MAPPING",[b_]:"CUSTOM_TONE_MAPPING"};function sT(o,e,i,r,l){const u=new Ca(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Ca(e,i,{type:sr,depthBuffer:!1,stencilBuffer:!1}),g=new Hi;g.setAttribute("position",new li([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new li([0,2,0,0,2,0],2));const v=new $S({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ma(g,v),S=new Y_(-1,1,1,-1,0,1);let E=null,x=null,b=!1,C,O=null,T=[],M=!1;this.setSize=function(P,X){u.setSize(P,X),d.setSize(P,X);for(let I=0;I<T.length;I++){const Q=T[I];Q.setSize&&Q.setSize(P,X)}},this.setEffects=function(P){T=P,M=T.length>0&&T[0].isRenderPass===!0;const X=u.width,I=u.height;for(let Q=0;Q<T.length;Q++){const Y=T[Q];Y.setSize&&Y.setSize(X,I)}},this.begin=function(P,X){if(b||P.toneMapping===Ra&&T.length===0)return!1;if(O=X,X!==null){const I=X.width,Q=X.height;(u.width!==I||u.height!==Q)&&this.setSize(I,Q)}return M===!1&&P.setRenderTarget(u),C=P.toneMapping,P.toneMapping=Ra,!0},this.hasRenderPass=function(){return M},this.end=function(P,X){P.toneMapping=C,b=!0;let I=u,Q=d;for(let Y=0;Y<T.length;Y++){const q=T[Y];if(q.enabled!==!1&&(q.render(P,Q,I,X),q.needsSwap!==!1)){const w=I;I=Q,Q=w}}if(E!==P.outputColorSpace||x!==P.toneMapping){E=P.outputColorSpace,x=P.toneMapping,v.defines={},ke.getTransfer(E)===nn&&(v.defines.SRGB_TRANSFER="");const Y=rT[x];Y&&(v.defines[Y]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=I.texture,P.setRenderTarget(O),P.render(p,S),O=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),d.dispose(),g.dispose(),v.dispose()}}const Q_=new di,Fp=new Il(1,1),J_=new B_,$_=new CS,tx=new k_,i_=[],a_=[],r_=new Float32Array(16),s_=new Float32Array(9),o_=new Float32Array(4);function Fo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=i_[l];if(u===void 0&&(u=new Float32Array(l),i_[l]=u),e!==0){r.toArray(u,0);for(let d=1,g=0;d!==e;++d)g+=i,o[d].toArray(u,g)}return u}function Xn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function kn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Jc(o,e){let i=a_[e];i===void 0&&(i=new Int32Array(e),a_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function oT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function lT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Xn(i,e))return;o.uniform2fv(this.addr,e),kn(i,e)}}function uT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Xn(i,e))return;o.uniform3fv(this.addr,e),kn(i,e)}}function cT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Xn(i,e))return;o.uniform4fv(this.addr,e),kn(i,e)}}function fT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),kn(i,e)}else{if(Xn(i,r))return;o_.set(r),o.uniformMatrix2fv(this.addr,!1,o_),kn(i,r)}}function hT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),kn(i,e)}else{if(Xn(i,r))return;s_.set(r),o.uniformMatrix3fv(this.addr,!1,s_),kn(i,r)}}function dT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),kn(i,e)}else{if(Xn(i,r))return;r_.set(r),o.uniformMatrix4fv(this.addr,!1,r_),kn(i,r)}}function pT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Xn(i,e))return;o.uniform2iv(this.addr,e),kn(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Xn(i,e))return;o.uniform3iv(this.addr,e),kn(i,e)}}function vT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Xn(i,e))return;o.uniform4iv(this.addr,e),kn(i,e)}}function _T(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function xT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Xn(i,e))return;o.uniform2uiv(this.addr,e),kn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Xn(i,e))return;o.uniform3uiv(this.addr,e),kn(i,e)}}function ST(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Xn(i,e))return;o.uniform4uiv(this.addr,e),kn(i,e)}}function MT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Fp.compareFunction=i.isReversedDepthBuffer()?qp:jp,u=Fp):u=Q_,i.setTexture2D(e||u,l)}function ET(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||$_,l)}function TT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||tx,l)}function bT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||J_,l)}function AT(o){switch(o){case 5126:return oT;case 35664:return lT;case 35665:return uT;case 35666:return cT;case 35674:return fT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return vT;case 5125:return _T;case 36294:return xT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return ET;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return bT}}function RT(o,e){o.uniform1fv(this.addr,e)}function CT(o,e){const i=Fo(e,this.size,2);o.uniform2fv(this.addr,i)}function wT(o,e){const i=Fo(e,this.size,3);o.uniform3fv(this.addr,i)}function DT(o,e){const i=Fo(e,this.size,4);o.uniform4fv(this.addr,i)}function UT(o,e){const i=Fo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function LT(o,e){const i=Fo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function NT(o,e){const i=Fo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function OT(o,e){o.uniform1iv(this.addr,e)}function PT(o,e){o.uniform2iv(this.addr,e)}function FT(o,e){o.uniform3iv(this.addr,e)}function BT(o,e){o.uniform4iv(this.addr,e)}function IT(o,e){o.uniform1uiv(this.addr,e)}function zT(o,e){o.uniform2uiv(this.addr,e)}function HT(o,e){o.uniform3uiv(this.addr,e)}function GT(o,e){o.uniform4uiv(this.addr,e)}function VT(o,e,i){const r=this.cache,l=e.length,u=Jc(i,l);Xn(r,u)||(o.uniform1iv(this.addr,u),kn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Fp:d=Q_;for(let g=0;g!==l;++g)i.setTexture2D(e[g]||d,u[g])}function XT(o,e,i){const r=this.cache,l=e.length,u=Jc(i,l);Xn(r,u)||(o.uniform1iv(this.addr,u),kn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||$_,u[d])}function kT(o,e,i){const r=this.cache,l=e.length,u=Jc(i,l);Xn(r,u)||(o.uniform1iv(this.addr,u),kn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||tx,u[d])}function WT(o,e,i){const r=this.cache,l=e.length,u=Jc(i,l);Xn(r,u)||(o.uniform1iv(this.addr,u),kn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||J_,u[d])}function jT(o){switch(o){case 5126:return RT;case 35664:return CT;case 35665:return wT;case 35666:return DT;case 35674:return UT;case 35675:return LT;case 35676:return NT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return FT;case 35669:case 35673:return BT;case 5125:return IT;case 36294:return zT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return WT}}class qT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=AT(i.type)}}class YT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jT(i.type)}}class ZT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const g=l[u];g.setValue(e,i[g.id],r)}}}const kd=/(\w+)(\])?(\[|\.)?/g;function l_(o,e){o.seq.push(e),o.map[e.id]=e}function KT(o,e,i){const r=o.name,l=r.length;for(kd.lastIndex=0;;){const u=kd.exec(r),d=kd.lastIndex;let g=u[1];const v=u[2]==="]",p=u[3];if(v&&(g=g|0),p===void 0||p==="["&&d+2===l){l_(i,p===void 0?new qT(g,o,e):new YT(g,o,e));break}else{let E=i.map[g];E===void 0&&(E=new ZT(g),l_(i,E)),i=E}}}class Ic{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const g=e.getActiveUniform(i,d),v=e.getUniformLocation(i,g.name);KT(g,v,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const g=i[u],v=r[g.id];v.needsUpdate!==!1&&g.setValue(e,v.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function u_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const QT=37297;let JT=0;function $T(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const g=d+1;r.push(`${g===e?">":" "} ${g}: ${i[d]}`)}return r.join(`
`)}const c_=new De;function tb(o){ke._getMatrix(c_,ke.workingColorSpace,o);const e=`mat3( ${c_.elements.map(i=>i.toFixed(4))} )`;switch(ke.getTransfer(o)){case Hc:return[e,"LinearTransferOETF"];case nn:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function f_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const g=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+$T(o.getShaderSource(e),g)}else return u}function eb(o,e){const i=tb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const nb={[S_]:"Linear",[M_]:"Reinhard",[E_]:"Cineon",[T_]:"ACESFilmic",[A_]:"AgX",[R_]:"Neutral",[b_]:"Custom"};function ib(o,e){const i=nb[e];return i===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new mt;function ab(){ke.getLuminanceCoefficients(Uc);const o=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function sb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function ob(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let g=1;u.type===o.FLOAT_MAT2&&(g=2),u.type===o.FLOAT_MAT3&&(g=3),u.type===o.FLOAT_MAT4&&(g=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:g}}return i}function Pl(o){return o!==""}function h_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bp(o){return o.replace(lb,cb)}const ub=new Map;function cb(o,e){let i=Ue[e];if(i===void 0){const r=ub.get(e);if(r!==void 0)i=Ue[r],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bp(i)}const fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p_(o){return o.replace(fb,hb)}function hb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function m_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const db={[Lc]:"SHADOWMAP_TYPE_PCF",[Ol]:"SHADOWMAP_TYPE_VSM"};function pb(o){return db[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mb={[Cs]:"ENVMAP_TYPE_CUBE",[Do]:"ENVMAP_TYPE_CUBE",[jc]:"ENVMAP_TYPE_CUBE_UV"};function gb(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":mb[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const vb={[Do]:"ENVMAP_MODE_REFRACTION"};function _b(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":vb[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xb={[y_]:"ENVMAP_BLENDING_MULTIPLY",[sS]:"ENVMAP_BLENDING_MIX",[oS]:"ENVMAP_BLENDING_ADD"};function yb(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":xb[o.combine]||"ENVMAP_BLENDING_NONE"}function Sb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Mb(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,g=i.fragmentShader;const v=pb(i),p=gb(i),S=_b(i),E=yb(i),x=Sb(i),b=rb(i),C=sb(u),O=l.createProgram();let T,M,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(T=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Pl).join(`
`),T.length>0&&(T+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(Pl).join(`
`),M.length>0&&(M+=`
`)):(T=[m_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),M=[m_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+E:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ra?"#define TONE_MAPPING":"",i.toneMapping!==Ra?Ue.tonemapping_pars_fragment:"",i.toneMapping!==Ra?ib("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,eb("linearToOutputTexel",i.outputColorSpace),ab(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Pl).join(`
`)),d=Bp(d),d=h_(d,i),d=d_(d,i),g=Bp(g),g=h_(g,i),g=d_(g,i),d=p_(d),g=p_(g),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,T=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,M=["#define varying in",i.glslVersion===Rv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Rv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const X=P+T+d,I=P+M+g,Q=u_(l,l.VERTEX_SHADER,X),Y=u_(l,l.FRAGMENT_SHADER,I);l.attachShader(O,Q),l.attachShader(O,Y),i.index0AttributeName!==void 0?l.bindAttribLocation(O,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(O,0,"position"),l.linkProgram(O);function q(D){if(o.debug.checkShaderErrors){const j=l.getProgramInfoLog(O)||"",K=l.getShaderInfoLog(Q)||"",lt=l.getShaderInfoLog(Y)||"",rt=j.trim(),U=K.trim(),F=lt.trim();let at=!0,ct=!0;if(l.getProgramParameter(O,l.LINK_STATUS)===!1)if(at=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,O,Q,Y);else{const bt=f_(l,Q,"vertex"),V=f_(l,Y,"fragment");Je("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(O,l.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+rt+`
`+bt+`
`+V)}else rt!==""?Me("WebGLProgram: Program Info Log:",rt):(U===""||F==="")&&(ct=!1);ct&&(D.diagnostics={runnable:at,programLog:rt,vertexShader:{log:U,prefix:T},fragmentShader:{log:F,prefix:M}})}l.deleteShader(Q),l.deleteShader(Y),w=new Ic(l,O),z=ob(l,O)}let w;this.getUniforms=function(){return w===void 0&&q(this),w};let z;this.getAttributes=function(){return z===void 0&&q(this),z};let B=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=l.getProgramParameter(O,QT)),B},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(O),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=JT++,this.cacheKey=e,this.usedTimes=1,this.program=O,this.vertexShader=Q,this.fragmentShader=Y,this}let Eb=0;class Tb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new bb(e),i.set(e,r)),r}}class bb{constructor(e){this.id=Eb++,this.code=e,this.usedTimes=0}}function Ab(o,e,i,r,l,u){const d=new I_,g=new Tb,v=new Set,p=[],S=new Map,E=r.logarithmicDepthBuffer;let x=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return v.add(w),w===0?"uv":`uv${w}`}function O(w,z,B,D,j){const K=D.fog,lt=j.geometry,rt=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?D.environment:null,U=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,F=e.get(w.envMap||rt,U),at=F&&F.mapping===jc?F.image.height:null,ct=b[w.type];w.precision!==null&&(x=r.getMaxPrecision(w.precision),x!==w.precision&&Me("WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const bt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,V=bt!==void 0?bt.length:0;let it=0;lt.morphAttributes.position!==void 0&&(it=1),lt.morphAttributes.normal!==void 0&&(it=2),lt.morphAttributes.color!==void 0&&(it=3);let Mt,Pt,kt,pt;if(ct){const Le=Ta[ct];Mt=Le.vertexShader,Pt=Le.fragmentShader}else Mt=w.vertexShader,Pt=w.fragmentShader,g.update(w),kt=g.getVertexShaderID(w),pt=g.getFragmentShaderID(w);const Rt=o.getRenderTarget(),Ot=o.state.buffers.depth.getReversed(),te=j.isInstancedMesh===!0,oe=j.isBatchedMesh===!0,ce=!!w.map,vn=!!w.matcap,fe=!!F,pe=!!w.aoMap,Ve=!!w.lightMap,Ee=!!w.bumpMap,dn=!!w.normalMap,J=!!w.displacementMap,un=!!w.emissiveMap,Ne=!!w.metalnessMap,Xe=!!w.roughnessMap,ie=w.anisotropy>0,G=w.clearcoat>0,A=w.dispersion>0,st=w.iridescence>0,Et=w.sheen>0,wt=w.transmission>0,St=ie&&!!w.anisotropyMap,ee=G&&!!w.clearcoatMap,zt=G&&!!w.clearcoatNormalMap,le=G&&!!w.clearcoatRoughnessMap,me=st&&!!w.iridescenceMap,Dt=st&&!!w.iridescenceThicknessMap,Ut=Et&&!!w.sheenColorMap,Yt=Et&&!!w.sheenRoughnessMap,Xt=!!w.specularMap,Zt=!!w.specularColorMap,Te=!!w.specularIntensityMap,tt=wt&&!!w.transmissionMap,Bt=wt&&!!w.thicknessMap,Ft=!!w.gradientMap,Kt=!!w.alphaMap,Lt=w.alphaTest>0,yt=!!w.alphaHash,Wt=!!w.extensions;let ve=Ra;w.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(ve=o.toneMapping);const je={shaderID:ct,shaderType:w.type,shaderName:w.name,vertexShader:Mt,fragmentShader:Pt,defines:w.defines,customVertexShaderID:kt,customFragmentShaderID:pt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:oe,batchingColor:oe&&j._colorsTexture!==null,instancing:te,instancingColor:te&&j.instanceColor!==null,instancingMorph:te&&j.morphTexture!==null,outputColorSpace:Rt===null?o.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Lo,alphaToCoverage:!!w.alphaToCoverage,map:ce,matcap:vn,envMap:fe,envMapMode:fe&&F.mapping,envMapCubeUVHeight:at,aoMap:pe,lightMap:Ve,bumpMap:Ee,normalMap:dn,displacementMap:J,emissiveMap:un,normalMapObjectSpace:dn&&w.normalMapType===fS,normalMapTangentSpace:dn&&w.normalMapType===cS,metalnessMap:Ne,roughnessMap:Xe,anisotropy:ie,anisotropyMap:St,clearcoat:G,clearcoatMap:ee,clearcoatNormalMap:zt,clearcoatRoughnessMap:le,dispersion:A,iridescence:st,iridescenceMap:me,iridescenceThicknessMap:Dt,sheen:Et,sheenColorMap:Ut,sheenRoughnessMap:Yt,specularMap:Xt,specularColorMap:Zt,specularIntensityMap:Te,transmission:wt,transmissionMap:tt,thicknessMap:Bt,gradientMap:Ft,opaque:w.transparent===!1&&w.blending===Ro&&w.alphaToCoverage===!1,alphaMap:Kt,alphaTest:Lt,alphaHash:yt,combine:w.combine,mapUv:ce&&C(w.map.channel),aoMapUv:pe&&C(w.aoMap.channel),lightMapUv:Ve&&C(w.lightMap.channel),bumpMapUv:Ee&&C(w.bumpMap.channel),normalMapUv:dn&&C(w.normalMap.channel),displacementMapUv:J&&C(w.displacementMap.channel),emissiveMapUv:un&&C(w.emissiveMap.channel),metalnessMapUv:Ne&&C(w.metalnessMap.channel),roughnessMapUv:Xe&&C(w.roughnessMap.channel),anisotropyMapUv:St&&C(w.anisotropyMap.channel),clearcoatMapUv:ee&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:zt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&C(w.sheenRoughnessMap.channel),specularMapUv:Xt&&C(w.specularMap.channel),specularColorMapUv:Zt&&C(w.specularColorMap.channel),specularIntensityMapUv:Te&&C(w.specularIntensityMap.channel),transmissionMapUv:tt&&C(w.transmissionMap.channel),thicknessMapUv:Bt&&C(w.thicknessMap.channel),alphaMapUv:Kt&&C(w.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(dn||ie),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!lt.attributes.uv&&(ce||Kt),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||lt.attributes.normal===void 0&&dn===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:Ot,skinning:j.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:it,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:ve,decodeVideoTexture:ce&&w.map.isVideoTexture===!0&&ke.getTransfer(w.map.colorSpace)===nn,decodeVideoTextureEmissive:un&&w.emissiveMap.isVideoTexture===!0&&ke.getTransfer(w.emissiveMap.colorSpace)===nn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===nr,flipSided:w.side===bi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Wt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&w.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return je.vertexUv1s=v.has(1),je.vertexUv2s=v.has(2),je.vertexUv3s=v.has(3),v.clear(),je}function T(w){const z=[];if(w.shaderID?z.push(w.shaderID):(z.push(w.customVertexShaderID),z.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)z.push(B),z.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(M(z,w),P(z,w),z.push(o.outputColorSpace)),z.push(w.customProgramCacheKey),z.join()}function M(w,z){w.push(z.precision),w.push(z.outputColorSpace),w.push(z.envMapMode),w.push(z.envMapCubeUVHeight),w.push(z.mapUv),w.push(z.alphaMapUv),w.push(z.lightMapUv),w.push(z.aoMapUv),w.push(z.bumpMapUv),w.push(z.normalMapUv),w.push(z.displacementMapUv),w.push(z.emissiveMapUv),w.push(z.metalnessMapUv),w.push(z.roughnessMapUv),w.push(z.anisotropyMapUv),w.push(z.clearcoatMapUv),w.push(z.clearcoatNormalMapUv),w.push(z.clearcoatRoughnessMapUv),w.push(z.iridescenceMapUv),w.push(z.iridescenceThicknessMapUv),w.push(z.sheenColorMapUv),w.push(z.sheenRoughnessMapUv),w.push(z.specularMapUv),w.push(z.specularColorMapUv),w.push(z.specularIntensityMapUv),w.push(z.transmissionMapUv),w.push(z.thicknessMapUv),w.push(z.combine),w.push(z.fogExp2),w.push(z.sizeAttenuation),w.push(z.morphTargetsCount),w.push(z.morphAttributeCount),w.push(z.numDirLights),w.push(z.numPointLights),w.push(z.numSpotLights),w.push(z.numSpotLightMaps),w.push(z.numHemiLights),w.push(z.numRectAreaLights),w.push(z.numDirLightShadows),w.push(z.numPointLightShadows),w.push(z.numSpotLightShadows),w.push(z.numSpotLightShadowsWithMaps),w.push(z.numLightProbes),w.push(z.shadowMapType),w.push(z.toneMapping),w.push(z.numClippingPlanes),w.push(z.numClipIntersection),w.push(z.depthPacking)}function P(w,z){d.disableAll(),z.instancing&&d.enable(0),z.instancingColor&&d.enable(1),z.instancingMorph&&d.enable(2),z.matcap&&d.enable(3),z.envMap&&d.enable(4),z.normalMapObjectSpace&&d.enable(5),z.normalMapTangentSpace&&d.enable(6),z.clearcoat&&d.enable(7),z.iridescence&&d.enable(8),z.alphaTest&&d.enable(9),z.vertexColors&&d.enable(10),z.vertexAlphas&&d.enable(11),z.vertexUv1s&&d.enable(12),z.vertexUv2s&&d.enable(13),z.vertexUv3s&&d.enable(14),z.vertexTangents&&d.enable(15),z.anisotropy&&d.enable(16),z.alphaHash&&d.enable(17),z.batching&&d.enable(18),z.dispersion&&d.enable(19),z.batchingColor&&d.enable(20),z.gradientMap&&d.enable(21),w.push(d.mask),d.disableAll(),z.fog&&d.enable(0),z.useFog&&d.enable(1),z.flatShading&&d.enable(2),z.logarithmicDepthBuffer&&d.enable(3),z.reversedDepthBuffer&&d.enable(4),z.skinning&&d.enable(5),z.morphTargets&&d.enable(6),z.morphNormals&&d.enable(7),z.morphColors&&d.enable(8),z.premultipliedAlpha&&d.enable(9),z.shadowMapEnabled&&d.enable(10),z.doubleSided&&d.enable(11),z.flipSided&&d.enable(12),z.useDepthPacking&&d.enable(13),z.dithering&&d.enable(14),z.transmission&&d.enable(15),z.sheen&&d.enable(16),z.opaque&&d.enable(17),z.pointsUvs&&d.enable(18),z.decodeVideoTexture&&d.enable(19),z.decodeVideoTextureEmissive&&d.enable(20),z.alphaToCoverage&&d.enable(21),w.push(d.mask)}function X(w){const z=b[w.type];let B;if(z){const D=Ta[z];B=KS.clone(D.uniforms)}else B=w.uniforms;return B}function I(w,z){let B=S.get(z);return B!==void 0?++B.usedTimes:(B=new Mb(o,z,w,l),p.push(B),S.set(z,B)),B}function Q(w){if(--w.usedTimes===0){const z=p.indexOf(w);p[z]=p[p.length-1],p.pop(),S.delete(w.cacheKey),w.destroy()}}function Y(w){g.remove(w)}function q(){g.dispose()}return{getParameters:O,getProgramCacheKey:T,getUniforms:X,acquireProgram:I,releaseProgram:Q,releaseShaderCache:Y,programs:p,dispose:q}}function Rb(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let g=o.get(d);return g===void 0&&(g={},o.set(d,g)),g}function r(d){o.delete(d)}function l(d,g,v){o.get(d)[g]=v}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function Cb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function g_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function v_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(x){let b=0;return x.isInstancedMesh&&(b+=2),x.isSkinnedMesh&&(b+=1),b}function g(x,b,C,O,T,M){let P=o[e];return P===void 0?(P={id:x.id,object:x,geometry:b,material:C,materialVariant:d(x),groupOrder:O,renderOrder:x.renderOrder,z:T,group:M},o[e]=P):(P.id=x.id,P.object=x,P.geometry=b,P.material=C,P.materialVariant=d(x),P.groupOrder=O,P.renderOrder=x.renderOrder,P.z=T,P.group=M),e++,P}function v(x,b,C,O,T,M){const P=g(x,b,C,O,T,M);C.transmission>0?r.push(P):C.transparent===!0?l.push(P):i.push(P)}function p(x,b,C,O,T,M){const P=g(x,b,C,O,T,M);C.transmission>0?r.unshift(P):C.transparent===!0?l.unshift(P):i.unshift(P)}function S(x,b){i.length>1&&i.sort(x||Cb),r.length>1&&r.sort(b||g_),l.length>1&&l.sort(b||g_)}function E(){for(let x=e,b=o.length;x<b;x++){const C=o[x];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:v,unshift:p,finish:E,sort:S}}function wb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new v_,o.set(r,[d])):l>=u.length?(d=new v_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function Db(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new mt,color:new We};break;case"SpotLight":i={position:new mt,direction:new mt,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new mt,color:new We,distance:0,decay:0};break;case"HemisphereLight":i={direction:new mt,skyColor:new We,groundColor:new We};break;case"RectAreaLight":i={color:new We,position:new mt,halfWidth:new mt,halfHeight:new mt};break}return o[e.id]=i,i}}}function Ub(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Lb=0;function Nb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Ob(o){const e=new Db,i=Ub(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new mt);const l=new mt,u=new Dn,d=new Dn;function g(p){let S=0,E=0,x=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let b=0,C=0,O=0,T=0,M=0,P=0,X=0,I=0,Q=0,Y=0,q=0;p.sort(Nb);for(let z=0,B=p.length;z<B;z++){const D=p[z],j=D.color,K=D.intensity,lt=D.distance;let rt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Uo?rt=D.shadow.map.texture:rt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)S+=j.r*K,E+=j.g*K,x+=j.b*K;else if(D.isLightProbe){for(let U=0;U<9;U++)r.probe[U].addScaledVector(D.sh.coefficients[U],K);q++}else if(D.isDirectionalLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const F=D.shadow,at=i.get(D);at.shadowIntensity=F.intensity,at.shadowBias=F.bias,at.shadowNormalBias=F.normalBias,at.shadowRadius=F.radius,at.shadowMapSize=F.mapSize,r.directionalShadow[b]=at,r.directionalShadowMap[b]=rt,r.directionalShadowMatrix[b]=D.shadow.matrix,P++}r.directional[b]=U,b++}else if(D.isSpotLight){const U=e.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(j).multiplyScalar(K),U.distance=lt,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,r.spot[O]=U;const F=D.shadow;if(D.map&&(r.spotLightMap[Q]=D.map,Q++,F.updateMatrices(D),D.castShadow&&Y++),r.spotLightMatrix[O]=F.matrix,D.castShadow){const at=i.get(D);at.shadowIntensity=F.intensity,at.shadowBias=F.bias,at.shadowNormalBias=F.normalBias,at.shadowRadius=F.radius,at.shadowMapSize=F.mapSize,r.spotShadow[O]=at,r.spotShadowMap[O]=rt,I++}O++}else if(D.isRectAreaLight){const U=e.get(D);U.color.copy(j).multiplyScalar(K),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),r.rectArea[T]=U,T++}else if(D.isPointLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){const F=D.shadow,at=i.get(D);at.shadowIntensity=F.intensity,at.shadowBias=F.bias,at.shadowNormalBias=F.normalBias,at.shadowRadius=F.radius,at.shadowMapSize=F.mapSize,at.shadowCameraNear=F.camera.near,at.shadowCameraFar=F.camera.far,r.pointShadow[C]=at,r.pointShadowMap[C]=rt,r.pointShadowMatrix[C]=D.shadow.matrix,X++}r.point[C]=U,C++}else if(D.isHemisphereLight){const U=e.get(D);U.skyColor.copy(D.color).multiplyScalar(K),U.groundColor.copy(D.groundColor).multiplyScalar(K),r.hemi[M]=U,M++}}T>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=jt.LTC_FLOAT_1,r.rectAreaLTC2=jt.LTC_FLOAT_2):(r.rectAreaLTC1=jt.LTC_HALF_1,r.rectAreaLTC2=jt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=E,r.ambient[2]=x;const w=r.hash;(w.directionalLength!==b||w.pointLength!==C||w.spotLength!==O||w.rectAreaLength!==T||w.hemiLength!==M||w.numDirectionalShadows!==P||w.numPointShadows!==X||w.numSpotShadows!==I||w.numSpotMaps!==Q||w.numLightProbes!==q)&&(r.directional.length=b,r.spot.length=O,r.rectArea.length=T,r.point.length=C,r.hemi.length=M,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=X,r.pointShadowMap.length=X,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=X,r.spotLightMatrix.length=I+Q-Y,r.spotLightMap.length=Q,r.numSpotLightShadowsWithMaps=Y,r.numLightProbes=q,w.directionalLength=b,w.pointLength=C,w.spotLength=O,w.rectAreaLength=T,w.hemiLength=M,w.numDirectionalShadows=P,w.numPointShadows=X,w.numSpotShadows=I,w.numSpotMaps=Q,w.numLightProbes=q,r.version=Lb++)}function v(p,S){let E=0,x=0,b=0,C=0,O=0;const T=S.matrixWorldInverse;for(let M=0,P=p.length;M<P;M++){const X=p[M];if(X.isDirectionalLight){const I=r.directional[E];I.direction.setFromMatrixPosition(X.matrixWorld),l.setFromMatrixPosition(X.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(T),E++}else if(X.isSpotLight){const I=r.spot[b];I.position.setFromMatrixPosition(X.matrixWorld),I.position.applyMatrix4(T),I.direction.setFromMatrixPosition(X.matrixWorld),l.setFromMatrixPosition(X.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(T),b++}else if(X.isRectAreaLight){const I=r.rectArea[C];I.position.setFromMatrixPosition(X.matrixWorld),I.position.applyMatrix4(T),d.identity(),u.copy(X.matrixWorld),u.premultiply(T),d.extractRotation(u),I.halfWidth.set(X.width*.5,0,0),I.halfHeight.set(0,X.height*.5,0),I.halfWidth.applyMatrix4(d),I.halfHeight.applyMatrix4(d),C++}else if(X.isPointLight){const I=r.point[x];I.position.setFromMatrixPosition(X.matrixWorld),I.position.applyMatrix4(T),x++}else if(X.isHemisphereLight){const I=r.hemi[O];I.direction.setFromMatrixPosition(X.matrixWorld),I.direction.transformDirection(T),O++}}}return{setup:g,setupView:v,state:r}}function __(o){const e=new Ob(o),i=[],r=[];function l(S){p.camera=S,i.length=0,r.length=0}function u(S){i.push(S)}function d(S){r.push(S)}function g(){e.setup(i)}function v(S){e.setupView(i,S)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:g,setupLightsView:v,pushLight:u,pushShadow:d}}function Pb(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let g;return d===void 0?(g=new __(o),e.set(l,[g])):u>=d.length?(g=new __(o),d.push(g)):g=d[u],g}function r(){e=new WeakMap}return{get:i,dispose:r}}const Fb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bb=`uniform sampler2D shadow_pass;
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
}`,Ib=[new mt(1,0,0),new mt(-1,0,0),new mt(0,1,0),new mt(0,-1,0),new mt(0,0,1),new mt(0,0,-1)],zb=[new mt(0,-1,0),new mt(0,-1,0),new mt(0,0,1),new mt(0,0,-1),new mt(0,-1,0),new mt(0,-1,0)],x_=new Dn,Nl=new mt,Wd=new mt;function Hb(o,e,i){let r=new X_;const l=new ln,u=new ln,d=new wn,g=new tM,v=new eM,p={},S=i.maxTextureSize,E={[Zr]:bi,[bi]:Zr,[nr]:nr},x=new Ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ln},radius:{value:4}},vertexShader:Fb,fragmentShader:Bb}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const C=new Hi;C.setAttribute("position",new wa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const O=new ma(C,x),T=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let M=this.type;this.render=function(Y,q,w){if(T.enabled===!1||T.autoUpdate===!1&&T.needsUpdate===!1||Y.length===0)return;this.type===Gy&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lc);const z=o.getRenderTarget(),B=o.getActiveCubeFace(),D=o.getActiveMipmapLevel(),j=o.state;j.setBlending(ar),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const K=M!==this.type;K&&q.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(rt=>rt.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,rt=Y.length;lt<rt;lt++){const U=Y[lt],F=U.shadow;if(F===void 0){Me("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const at=F.getFrameExtents();l.multiply(at),u.copy(F.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/at.x),l.x=u.x*at.x,F.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/at.y),l.y=u.y*at.y,F.mapSize.y=u.y));const ct=o.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ct,F.map===null||K===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ol){if(U.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ca(l.x,l.y,{format:Uo,type:sr,minFilter:oi,magFilter:oi,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new Il(l.x,l.y,ba),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=or,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ni,F.map.depthTexture.magFilter=ni}else U.isPointLight?(F.map=new K_(l.x),F.map.depthTexture=new qS(l.x,Da)):(F.map=new Ca(l.x,l.y),F.map.depthTexture=new Il(l.x,l.y,Da)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=or,this.type===Lc?(F.map.depthTexture.compareFunction=ct?qp:jp,F.map.depthTexture.minFilter=oi,F.map.depthTexture.magFilter=oi):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=ni,F.map.depthTexture.magFilter=ni);F.camera.updateProjectionMatrix()}const bt=F.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<bt;V++){if(F.map.isWebGLCubeRenderTarget)o.setRenderTarget(F.map,V),o.clear();else{V===0&&(o.setRenderTarget(F.map),o.clear());const it=F.getViewport(V);d.set(u.x*it.x,u.y*it.y,u.x*it.z,u.y*it.w),j.viewport(d)}if(U.isPointLight){const it=F.camera,Mt=F.matrix,Pt=U.distance||it.far;Pt!==it.far&&(it.far=Pt,it.updateProjectionMatrix()),Nl.setFromMatrixPosition(U.matrixWorld),it.position.copy(Nl),Wd.copy(it.position),Wd.add(Ib[V]),it.up.copy(zb[V]),it.lookAt(Wd),it.updateMatrixWorld(),Mt.makeTranslation(-Nl.x,-Nl.y,-Nl.z),x_.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),F._frustum.setFromProjectionMatrix(x_,it.coordinateSystem,it.reversedDepth)}else F.updateMatrices(U);r=F.getFrustum(),I(q,w,F.camera,U,this.type)}F.isPointLightShadow!==!0&&this.type===Ol&&P(F,w),F.needsUpdate=!1}M=this.type,T.needsUpdate=!1,o.setRenderTarget(z,B,D)};function P(Y,q){const w=e.update(O);x.defines.VSM_SAMPLES!==Y.blurSamples&&(x.defines.VSM_SAMPLES=Y.blurSamples,b.defines.VSM_SAMPLES=Y.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),Y.mapPass===null&&(Y.mapPass=new Ca(l.x,l.y,{format:Uo,type:sr})),x.uniforms.shadow_pass.value=Y.map.depthTexture,x.uniforms.resolution.value=Y.mapSize,x.uniforms.radius.value=Y.radius,o.setRenderTarget(Y.mapPass),o.clear(),o.renderBufferDirect(q,null,w,x,O,null),b.uniforms.shadow_pass.value=Y.mapPass.texture,b.uniforms.resolution.value=Y.mapSize,b.uniforms.radius.value=Y.radius,o.setRenderTarget(Y.map),o.clear(),o.renderBufferDirect(q,null,w,b,O,null)}function X(Y,q,w,z){let B=null;const D=w.isPointLight===!0?Y.customDistanceMaterial:Y.customDepthMaterial;if(D!==void 0)B=D;else if(B=w.isPointLight===!0?v:g,o.localClippingEnabled&&q.clipShadows===!0&&Array.isArray(q.clippingPlanes)&&q.clippingPlanes.length!==0||q.displacementMap&&q.displacementScale!==0||q.alphaMap&&q.alphaTest>0||q.map&&q.alphaTest>0||q.alphaToCoverage===!0){const j=B.uuid,K=q.uuid;let lt=p[j];lt===void 0&&(lt={},p[j]=lt);let rt=lt[K];rt===void 0&&(rt=B.clone(),lt[K]=rt,q.addEventListener("dispose",Q)),B=rt}if(B.visible=q.visible,B.wireframe=q.wireframe,z===Ol?B.side=q.shadowSide!==null?q.shadowSide:q.side:B.side=q.shadowSide!==null?q.shadowSide:E[q.side],B.alphaMap=q.alphaMap,B.alphaTest=q.alphaToCoverage===!0?.5:q.alphaTest,B.map=q.map,B.clipShadows=q.clipShadows,B.clippingPlanes=q.clippingPlanes,B.clipIntersection=q.clipIntersection,B.displacementMap=q.displacementMap,B.displacementScale=q.displacementScale,B.displacementBias=q.displacementBias,B.wireframeLinewidth=q.wireframeLinewidth,B.linewidth=q.linewidth,w.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const j=o.properties.get(B);j.light=w}return B}function I(Y,q,w,z,B){if(Y.visible===!1)return;if(Y.layers.test(q.layers)&&(Y.isMesh||Y.isLine||Y.isPoints)&&(Y.castShadow||Y.receiveShadow&&B===Ol)&&(!Y.frustumCulled||r.intersectsObject(Y))){Y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,Y.matrixWorld);const K=e.update(Y),lt=Y.material;if(Array.isArray(lt)){const rt=K.groups;for(let U=0,F=rt.length;U<F;U++){const at=rt[U],ct=lt[at.materialIndex];if(ct&&ct.visible){const bt=X(Y,ct,z,B);Y.onBeforeShadow(o,Y,q,w,K,bt,at),o.renderBufferDirect(w,null,K,bt,Y,at),Y.onAfterShadow(o,Y,q,w,K,bt,at)}}}else if(lt.visible){const rt=X(Y,lt,z,B);Y.onBeforeShadow(o,Y,q,w,K,rt,null),o.renderBufferDirect(w,null,K,rt,Y,null),Y.onAfterShadow(o,Y,q,w,K,rt,null)}}const j=Y.children;for(let K=0,lt=j.length;K<lt;K++)I(j[K],q,w,z,B)}function Q(Y){Y.target.removeEventListener("dispose",Q);for(const w in p){const z=p[w],B=Y.target.uuid;B in z&&(z[B].dispose(),delete z[B])}}}function Gb(o,e){function i(){let tt=!1;const Bt=new wn;let Ft=null;const Kt=new wn(0,0,0,0);return{setMask:function(Lt){Ft!==Lt&&!tt&&(o.colorMask(Lt,Lt,Lt,Lt),Ft=Lt)},setLocked:function(Lt){tt=Lt},setClear:function(Lt,yt,Wt,ve,je){je===!0&&(Lt*=ve,yt*=ve,Wt*=ve),Bt.set(Lt,yt,Wt,ve),Kt.equals(Bt)===!1&&(o.clearColor(Lt,yt,Wt,ve),Kt.copy(Bt))},reset:function(){tt=!1,Ft=null,Kt.set(-1,0,0,0)}}}function r(){let tt=!1,Bt=!1,Ft=null,Kt=null,Lt=null;return{setReversed:function(yt){if(Bt!==yt){const Wt=e.get("EXT_clip_control");yt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Bt=yt;const ve=Lt;Lt=null,this.setClear(ve)}},getReversed:function(){return Bt},setTest:function(yt){yt?Rt(o.DEPTH_TEST):Ot(o.DEPTH_TEST)},setMask:function(yt){Ft!==yt&&!tt&&(o.depthMask(yt),Ft=yt)},setFunc:function(yt){if(Bt&&(yt=SS[yt]),Kt!==yt){switch(yt){case Yd:o.depthFunc(o.NEVER);break;case Zd:o.depthFunc(o.ALWAYS);break;case Kd:o.depthFunc(o.LESS);break;case wo:o.depthFunc(o.LEQUAL);break;case Qd:o.depthFunc(o.EQUAL);break;case Jd:o.depthFunc(o.GEQUAL);break;case $d:o.depthFunc(o.GREATER);break;case tp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Kt=yt}},setLocked:function(yt){tt=yt},setClear:function(yt){Lt!==yt&&(Lt=yt,Bt&&(yt=1-yt),o.clearDepth(yt))},reset:function(){tt=!1,Ft=null,Kt=null,Lt=null,Bt=!1}}}function l(){let tt=!1,Bt=null,Ft=null,Kt=null,Lt=null,yt=null,Wt=null,ve=null,je=null;return{setTest:function(Le){tt||(Le?Rt(o.STENCIL_TEST):Ot(o.STENCIL_TEST))},setMask:function(Le){Bt!==Le&&!tt&&(o.stencilMask(Le),Bt=Le)},setFunc:function(Le,Un,Ri){(Ft!==Le||Kt!==Un||Lt!==Ri)&&(o.stencilFunc(Le,Un,Ri),Ft=Le,Kt=Un,Lt=Ri)},setOp:function(Le,Un,Ri){(yt!==Le||Wt!==Un||ve!==Ri)&&(o.stencilOp(Le,Un,Ri),yt=Le,Wt=Un,ve=Ri)},setLocked:function(Le){tt=Le},setClear:function(Le){je!==Le&&(o.clearStencil(Le),je=Le)},reset:function(){tt=!1,Bt=null,Ft=null,Kt=null,Lt=null,yt=null,Wt=null,ve=null,je=null}}}const u=new i,d=new r,g=new l,v=new WeakMap,p=new WeakMap;let S={},E={},x=new WeakMap,b=[],C=null,O=!1,T=null,M=null,P=null,X=null,I=null,Q=null,Y=null,q=new We(0,0,0),w=0,z=!1,B=null,D=null,j=null,K=null,lt=null;const rt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,F=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(at)[1]),U=F>=1):at.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),U=F>=2);let ct=null,bt={};const V=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),Mt=new wn().fromArray(V),Pt=new wn().fromArray(it);function kt(tt,Bt,Ft,Kt){const Lt=new Uint8Array(4),yt=o.createTexture();o.bindTexture(tt,yt),o.texParameteri(tt,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(tt,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Wt=0;Wt<Ft;Wt++)tt===o.TEXTURE_3D||tt===o.TEXTURE_2D_ARRAY?o.texImage3D(Bt,0,o.RGBA,1,1,Kt,0,o.RGBA,o.UNSIGNED_BYTE,Lt):o.texImage2D(Bt+Wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Lt);return yt}const pt={};pt[o.TEXTURE_2D]=kt(o.TEXTURE_2D,o.TEXTURE_2D,1),pt[o.TEXTURE_CUBE_MAP]=kt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[o.TEXTURE_2D_ARRAY]=kt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),pt[o.TEXTURE_3D]=kt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),g.setClear(0),Rt(o.DEPTH_TEST),d.setFunc(wo),Ee(!1),dn(Sv),Rt(o.CULL_FACE),pe(ar);function Rt(tt){S[tt]!==!0&&(o.enable(tt),S[tt]=!0)}function Ot(tt){S[tt]!==!1&&(o.disable(tt),S[tt]=!1)}function te(tt,Bt){return E[tt]!==Bt?(o.bindFramebuffer(tt,Bt),E[tt]=Bt,tt===o.DRAW_FRAMEBUFFER&&(E[o.FRAMEBUFFER]=Bt),tt===o.FRAMEBUFFER&&(E[o.DRAW_FRAMEBUFFER]=Bt),!0):!1}function oe(tt,Bt){let Ft=b,Kt=!1;if(tt){Ft=x.get(Bt),Ft===void 0&&(Ft=[],x.set(Bt,Ft));const Lt=tt.textures;if(Ft.length!==Lt.length||Ft[0]!==o.COLOR_ATTACHMENT0){for(let yt=0,Wt=Lt.length;yt<Wt;yt++)Ft[yt]=o.COLOR_ATTACHMENT0+yt;Ft.length=Lt.length,Kt=!0}}else Ft[0]!==o.BACK&&(Ft[0]=o.BACK,Kt=!0);Kt&&o.drawBuffers(Ft)}function ce(tt){return C!==tt?(o.useProgram(tt),C=tt,!0):!1}const vn={[Ts]:o.FUNC_ADD,[Xy]:o.FUNC_SUBTRACT,[ky]:o.FUNC_REVERSE_SUBTRACT};vn[Wy]=o.MIN,vn[jy]=o.MAX;const fe={[qy]:o.ZERO,[Yy]:o.ONE,[Zy]:o.SRC_COLOR,[jd]:o.SRC_ALPHA,[eS]:o.SRC_ALPHA_SATURATE,[$y]:o.DST_COLOR,[Qy]:o.DST_ALPHA,[Ky]:o.ONE_MINUS_SRC_COLOR,[qd]:o.ONE_MINUS_SRC_ALPHA,[tS]:o.ONE_MINUS_DST_COLOR,[Jy]:o.ONE_MINUS_DST_ALPHA,[nS]:o.CONSTANT_COLOR,[iS]:o.ONE_MINUS_CONSTANT_COLOR,[aS]:o.CONSTANT_ALPHA,[rS]:o.ONE_MINUS_CONSTANT_ALPHA};function pe(tt,Bt,Ft,Kt,Lt,yt,Wt,ve,je,Le){if(tt===ar){O===!0&&(Ot(o.BLEND),O=!1);return}if(O===!1&&(Rt(o.BLEND),O=!0),tt!==Vy){if(tt!==T||Le!==z){if((M!==Ts||I!==Ts)&&(o.blendEquation(o.FUNC_ADD),M=Ts,I=Ts),Le)switch(tt){case Ro:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mv:o.blendFunc(o.ONE,o.ONE);break;case Ev:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Tv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Je("WebGLState: Invalid blending: ",tt);break}else switch(tt){case Ro:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Mv:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ev:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tv:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",tt);break}P=null,X=null,Q=null,Y=null,q.set(0,0,0),w=0,T=tt,z=Le}return}Lt=Lt||Bt,yt=yt||Ft,Wt=Wt||Kt,(Bt!==M||Lt!==I)&&(o.blendEquationSeparate(vn[Bt],vn[Lt]),M=Bt,I=Lt),(Ft!==P||Kt!==X||yt!==Q||Wt!==Y)&&(o.blendFuncSeparate(fe[Ft],fe[Kt],fe[yt],fe[Wt]),P=Ft,X=Kt,Q=yt,Y=Wt),(ve.equals(q)===!1||je!==w)&&(o.blendColor(ve.r,ve.g,ve.b,je),q.copy(ve),w=je),T=tt,z=!1}function Ve(tt,Bt){tt.side===nr?Ot(o.CULL_FACE):Rt(o.CULL_FACE);let Ft=tt.side===bi;Bt&&(Ft=!Ft),Ee(Ft),tt.blending===Ro&&tt.transparent===!1?pe(ar):pe(tt.blending,tt.blendEquation,tt.blendSrc,tt.blendDst,tt.blendEquationAlpha,tt.blendSrcAlpha,tt.blendDstAlpha,tt.blendColor,tt.blendAlpha,tt.premultipliedAlpha),d.setFunc(tt.depthFunc),d.setTest(tt.depthTest),d.setMask(tt.depthWrite),u.setMask(tt.colorWrite);const Kt=tt.stencilWrite;g.setTest(Kt),Kt&&(g.setMask(tt.stencilWriteMask),g.setFunc(tt.stencilFunc,tt.stencilRef,tt.stencilFuncMask),g.setOp(tt.stencilFail,tt.stencilZFail,tt.stencilZPass)),un(tt.polygonOffset,tt.polygonOffsetFactor,tt.polygonOffsetUnits),tt.alphaToCoverage===!0?Rt(o.SAMPLE_ALPHA_TO_COVERAGE):Ot(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(tt){B!==tt&&(tt?o.frontFace(o.CW):o.frontFace(o.CCW),B=tt)}function dn(tt){tt!==zy?(Rt(o.CULL_FACE),tt!==D&&(tt===Sv?o.cullFace(o.BACK):tt===Hy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ot(o.CULL_FACE),D=tt}function J(tt){tt!==j&&(U&&o.lineWidth(tt),j=tt)}function un(tt,Bt,Ft){tt?(Rt(o.POLYGON_OFFSET_FILL),(K!==Bt||lt!==Ft)&&(K=Bt,lt=Ft,d.getReversed()&&(Bt=-Bt),o.polygonOffset(Bt,Ft))):Ot(o.POLYGON_OFFSET_FILL)}function Ne(tt){tt?Rt(o.SCISSOR_TEST):Ot(o.SCISSOR_TEST)}function Xe(tt){tt===void 0&&(tt=o.TEXTURE0+rt-1),ct!==tt&&(o.activeTexture(tt),ct=tt)}function ie(tt,Bt,Ft){Ft===void 0&&(ct===null?Ft=o.TEXTURE0+rt-1:Ft=ct);let Kt=bt[Ft];Kt===void 0&&(Kt={type:void 0,texture:void 0},bt[Ft]=Kt),(Kt.type!==tt||Kt.texture!==Bt)&&(ct!==Ft&&(o.activeTexture(Ft),ct=Ft),o.bindTexture(tt,Bt||pt[tt]),Kt.type=tt,Kt.texture=Bt)}function G(){const tt=bt[ct];tt!==void 0&&tt.type!==void 0&&(o.bindTexture(tt.type,null),tt.type=void 0,tt.texture=void 0)}function A(){try{o.compressedTexImage2D(...arguments)}catch(tt){Je("WebGLState:",tt)}}function st(){try{o.compressedTexImage3D(...arguments)}catch(tt){Je("WebGLState:",tt)}}function Et(){try{o.texSubImage2D(...arguments)}catch(tt){Je("WebGLState:",tt)}}function wt(){try{o.texSubImage3D(...arguments)}catch(tt){Je("WebGLState:",tt)}}function St(){try{o.compressedTexSubImage2D(...arguments)}catch(tt){Je("WebGLState:",tt)}}function ee(){try{o.compressedTexSubImage3D(...arguments)}catch(tt){Je("WebGLState:",tt)}}function zt(){try{o.texStorage2D(...arguments)}catch(tt){Je("WebGLState:",tt)}}function le(){try{o.texStorage3D(...arguments)}catch(tt){Je("WebGLState:",tt)}}function me(){try{o.texImage2D(...arguments)}catch(tt){Je("WebGLState:",tt)}}function Dt(){try{o.texImage3D(...arguments)}catch(tt){Je("WebGLState:",tt)}}function Ut(tt){Mt.equals(tt)===!1&&(o.scissor(tt.x,tt.y,tt.z,tt.w),Mt.copy(tt))}function Yt(tt){Pt.equals(tt)===!1&&(o.viewport(tt.x,tt.y,tt.z,tt.w),Pt.copy(tt))}function Xt(tt,Bt){let Ft=p.get(Bt);Ft===void 0&&(Ft=new WeakMap,p.set(Bt,Ft));let Kt=Ft.get(tt);Kt===void 0&&(Kt=o.getUniformBlockIndex(Bt,tt.name),Ft.set(tt,Kt))}function Zt(tt,Bt){const Kt=p.get(Bt).get(tt);v.get(Bt)!==Kt&&(o.uniformBlockBinding(Bt,Kt,tt.__bindingPointIndex),v.set(Bt,Kt))}function Te(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},ct=null,bt={},E={},x=new WeakMap,b=[],C=null,O=!1,T=null,M=null,P=null,X=null,I=null,Q=null,Y=null,q=new We(0,0,0),w=0,z=!1,B=null,D=null,j=null,K=null,lt=null,Mt.set(0,0,o.canvas.width,o.canvas.height),Pt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),g.reset()}return{buffers:{color:u,depth:d,stencil:g},enable:Rt,disable:Ot,bindFramebuffer:te,drawBuffers:oe,useProgram:ce,setBlending:pe,setMaterial:Ve,setFlipSided:Ee,setCullFace:dn,setLineWidth:J,setPolygonOffset:un,setScissorTest:Ne,activeTexture:Xe,bindTexture:ie,unbindTexture:G,compressedTexImage2D:A,compressedTexImage3D:st,texImage2D:me,texImage3D:Dt,updateUBOMapping:Xt,uniformBlockBinding:Zt,texStorage2D:zt,texStorage3D:le,texSubImage2D:Et,texSubImage3D:wt,compressedTexSubImage2D:St,compressedTexSubImage3D:ee,scissor:Ut,viewport:Yt,reset:Te}}function Vb(o,e,i,r,l,u,d){const g=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ln,S=new WeakMap;let E;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(G,A){return b?new OffscreenCanvas(G,A):Vc("canvas")}function O(G,A,st){let Et=1;const wt=ie(G);if((wt.width>st||wt.height>st)&&(Et=st/Math.max(wt.width,wt.height)),Et<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const St=Math.floor(Et*wt.width),ee=Math.floor(Et*wt.height);E===void 0&&(E=C(St,ee));const zt=A?C(St,ee):E;return zt.width=St,zt.height=ee,zt.getContext("2d").drawImage(G,0,0,St,ee),Me("WebGLRenderer: Texture has been resized from ("+wt.width+"x"+wt.height+") to ("+St+"x"+ee+")."),zt}else return"data"in G&&Me("WebGLRenderer: Image in DataTexture is too big ("+wt.width+"x"+wt.height+")."),G;return G}function T(G){return G.generateMipmaps}function M(G){o.generateMipmap(G)}function P(G){return G.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?o.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function X(G,A,st,Et,wt=!1){if(G!==null){if(o[G]!==void 0)return o[G];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let St=A;if(A===o.RED&&(st===o.FLOAT&&(St=o.R32F),st===o.HALF_FLOAT&&(St=o.R16F),st===o.UNSIGNED_BYTE&&(St=o.R8)),A===o.RED_INTEGER&&(st===o.UNSIGNED_BYTE&&(St=o.R8UI),st===o.UNSIGNED_SHORT&&(St=o.R16UI),st===o.UNSIGNED_INT&&(St=o.R32UI),st===o.BYTE&&(St=o.R8I),st===o.SHORT&&(St=o.R16I),st===o.INT&&(St=o.R32I)),A===o.RG&&(st===o.FLOAT&&(St=o.RG32F),st===o.HALF_FLOAT&&(St=o.RG16F),st===o.UNSIGNED_BYTE&&(St=o.RG8)),A===o.RG_INTEGER&&(st===o.UNSIGNED_BYTE&&(St=o.RG8UI),st===o.UNSIGNED_SHORT&&(St=o.RG16UI),st===o.UNSIGNED_INT&&(St=o.RG32UI),st===o.BYTE&&(St=o.RG8I),st===o.SHORT&&(St=o.RG16I),st===o.INT&&(St=o.RG32I)),A===o.RGB_INTEGER&&(st===o.UNSIGNED_BYTE&&(St=o.RGB8UI),st===o.UNSIGNED_SHORT&&(St=o.RGB16UI),st===o.UNSIGNED_INT&&(St=o.RGB32UI),st===o.BYTE&&(St=o.RGB8I),st===o.SHORT&&(St=o.RGB16I),st===o.INT&&(St=o.RGB32I)),A===o.RGBA_INTEGER&&(st===o.UNSIGNED_BYTE&&(St=o.RGBA8UI),st===o.UNSIGNED_SHORT&&(St=o.RGBA16UI),st===o.UNSIGNED_INT&&(St=o.RGBA32UI),st===o.BYTE&&(St=o.RGBA8I),st===o.SHORT&&(St=o.RGBA16I),st===o.INT&&(St=o.RGBA32I)),A===o.RGB&&(st===o.UNSIGNED_INT_5_9_9_9_REV&&(St=o.RGB9_E5),st===o.UNSIGNED_INT_10F_11F_11F_REV&&(St=o.R11F_G11F_B10F)),A===o.RGBA){const ee=wt?Hc:ke.getTransfer(Et);st===o.FLOAT&&(St=o.RGBA32F),st===o.HALF_FLOAT&&(St=o.RGBA16F),st===o.UNSIGNED_BYTE&&(St=ee===nn?o.SRGB8_ALPHA8:o.RGBA8),st===o.UNSIGNED_SHORT_4_4_4_4&&(St=o.RGBA4),st===o.UNSIGNED_SHORT_5_5_5_1&&(St=o.RGB5_A1)}return(St===o.R16F||St===o.R32F||St===o.RG16F||St===o.RG32F||St===o.RGBA16F||St===o.RGBA32F)&&e.get("EXT_color_buffer_float"),St}function I(G,A){let st;return G?A===null||A===Da||A===Bl?st=o.DEPTH24_STENCIL8:A===ba?st=o.DEPTH32F_STENCIL8:A===Fl&&(st=o.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Da||A===Bl?st=o.DEPTH_COMPONENT24:A===ba?st=o.DEPTH_COMPONENT32F:A===Fl&&(st=o.DEPTH_COMPONENT16),st}function Q(G,A){return T(G)===!0||G.isFramebufferTexture&&G.minFilter!==ni&&G.minFilter!==oi?Math.log2(Math.max(A.width,A.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?A.mipmaps.length:1}function Y(G){const A=G.target;A.removeEventListener("dispose",Y),w(A),A.isVideoTexture&&S.delete(A)}function q(G){const A=G.target;A.removeEventListener("dispose",q),B(A)}function w(G){const A=r.get(G);if(A.__webglInit===void 0)return;const st=G.source,Et=x.get(st);if(Et){const wt=Et[A.__cacheKey];wt.usedTimes--,wt.usedTimes===0&&z(G),Object.keys(Et).length===0&&x.delete(st)}r.remove(G)}function z(G){const A=r.get(G);o.deleteTexture(A.__webglTexture);const st=G.source,Et=x.get(st);delete Et[A.__cacheKey],d.memory.textures--}function B(G){const A=r.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),r.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let Et=0;Et<6;Et++){if(Array.isArray(A.__webglFramebuffer[Et]))for(let wt=0;wt<A.__webglFramebuffer[Et].length;wt++)o.deleteFramebuffer(A.__webglFramebuffer[Et][wt]);else o.deleteFramebuffer(A.__webglFramebuffer[Et]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[Et])}else{if(Array.isArray(A.__webglFramebuffer))for(let Et=0;Et<A.__webglFramebuffer.length;Et++)o.deleteFramebuffer(A.__webglFramebuffer[Et]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Et=0;Et<A.__webglColorRenderbuffer.length;Et++)A.__webglColorRenderbuffer[Et]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[Et]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const st=G.textures;for(let Et=0,wt=st.length;Et<wt;Et++){const St=r.get(st[Et]);St.__webglTexture&&(o.deleteTexture(St.__webglTexture),d.memory.textures--),r.remove(st[Et])}r.remove(G)}let D=0;function j(){D=0}function K(){const G=D;return G>=l.maxTextures&&Me("WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+l.maxTextures),D+=1,G}function lt(G){const A=[];return A.push(G.wrapS),A.push(G.wrapT),A.push(G.wrapR||0),A.push(G.magFilter),A.push(G.minFilter),A.push(G.anisotropy),A.push(G.internalFormat),A.push(G.format),A.push(G.type),A.push(G.generateMipmaps),A.push(G.premultiplyAlpha),A.push(G.flipY),A.push(G.unpackAlignment),A.push(G.colorSpace),A.join()}function rt(G,A){const st=r.get(G);if(G.isVideoTexture&&Ne(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&st.__version!==G.version){const Et=G.image;if(Et===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(Et.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(st,G,A);return}}else G.isExternalTexture&&(st.__webglTexture=G.sourceTexture?G.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,st.__webglTexture,o.TEXTURE0+A)}function U(G,A){const st=r.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&st.__version!==G.version){pt(st,G,A);return}else G.isExternalTexture&&(st.__webglTexture=G.sourceTexture?G.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,st.__webglTexture,o.TEXTURE0+A)}function F(G,A){const st=r.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&st.__version!==G.version){pt(st,G,A);return}i.bindTexture(o.TEXTURE_3D,st.__webglTexture,o.TEXTURE0+A)}function at(G,A){const st=r.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&st.__version!==G.version){Rt(st,G,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture,o.TEXTURE0+A)}const ct={[ep]:o.REPEAT,[ir]:o.CLAMP_TO_EDGE,[np]:o.MIRRORED_REPEAT},bt={[ni]:o.NEAREST,[lS]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[oi]:o.LINEAR,[pd]:o.LINEAR_MIPMAP_NEAREST,[As]:o.LINEAR_MIPMAP_LINEAR},V={[hS]:o.NEVER,[vS]:o.ALWAYS,[dS]:o.LESS,[jp]:o.LEQUAL,[pS]:o.EQUAL,[qp]:o.GEQUAL,[mS]:o.GREATER,[gS]:o.NOTEQUAL};function it(G,A){if(A.type===ba&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===oi||A.magFilter===pd||A.magFilter===ac||A.magFilter===As||A.minFilter===oi||A.minFilter===pd||A.minFilter===ac||A.minFilter===As)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(G,o.TEXTURE_WRAP_S,ct[A.wrapS]),o.texParameteri(G,o.TEXTURE_WRAP_T,ct[A.wrapT]),(G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY)&&o.texParameteri(G,o.TEXTURE_WRAP_R,ct[A.wrapR]),o.texParameteri(G,o.TEXTURE_MAG_FILTER,bt[A.magFilter]),o.texParameteri(G,o.TEXTURE_MIN_FILTER,bt[A.minFilter]),A.compareFunction&&(o.texParameteri(G,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(G,o.TEXTURE_COMPARE_FUNC,V[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ni||A.minFilter!==ac&&A.minFilter!==As||A.type===ba&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const st=e.get("EXT_texture_filter_anisotropic");o.texParameterf(G,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Mt(G,A){let st=!1;G.__webglInit===void 0&&(G.__webglInit=!0,A.addEventListener("dispose",Y));const Et=A.source;let wt=x.get(Et);wt===void 0&&(wt={},x.set(Et,wt));const St=lt(A);if(St!==G.__cacheKey){wt[St]===void 0&&(wt[St]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,st=!0),wt[St].usedTimes++;const ee=wt[G.__cacheKey];ee!==void 0&&(wt[G.__cacheKey].usedTimes--,ee.usedTimes===0&&z(A)),G.__cacheKey=St,G.__webglTexture=wt[St].texture}return st}function Pt(G,A,st){return Math.floor(Math.floor(G/st)/A)}function kt(G,A,st,Et){const St=G.updateRanges;if(St.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,st,Et,A.data);else{St.sort((Dt,Ut)=>Dt.start-Ut.start);let ee=0;for(let Dt=1;Dt<St.length;Dt++){const Ut=St[ee],Yt=St[Dt],Xt=Ut.start+Ut.count,Zt=Pt(Yt.start,A.width,4),Te=Pt(Ut.start,A.width,4);Yt.start<=Xt+1&&Zt===Te&&Pt(Yt.start+Yt.count-1,A.width,4)===Zt?Ut.count=Math.max(Ut.count,Yt.start+Yt.count-Ut.start):(++ee,St[ee]=Yt)}St.length=ee+1;const zt=o.getParameter(o.UNPACK_ROW_LENGTH),le=o.getParameter(o.UNPACK_SKIP_PIXELS),me=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let Dt=0,Ut=St.length;Dt<Ut;Dt++){const Yt=St[Dt],Xt=Math.floor(Yt.start/4),Zt=Math.ceil(Yt.count/4),Te=Xt%A.width,tt=Math.floor(Xt/A.width),Bt=Zt,Ft=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Te),o.pixelStorei(o.UNPACK_SKIP_ROWS,tt),i.texSubImage2D(o.TEXTURE_2D,0,Te,tt,Bt,Ft,st,Et,A.data)}G.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,zt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,me)}}function pt(G,A,st){let Et=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Et=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Et=o.TEXTURE_3D);const wt=Mt(G,A),St=A.source;i.bindTexture(Et,G.__webglTexture,o.TEXTURE0+st);const ee=r.get(St);if(St.version!==ee.__version||wt===!0){i.activeTexture(o.TEXTURE0+st);const zt=ke.getPrimaries(ke.workingColorSpace),le=A.colorSpace===qr?null:ke.getPrimaries(A.colorSpace),me=A.colorSpace===qr||zt===le?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Dt=O(A.image,!1,l.maxTextureSize);Dt=Xe(A,Dt);const Ut=u.convert(A.format,A.colorSpace),Yt=u.convert(A.type);let Xt=X(A.internalFormat,Ut,Yt,A.colorSpace,A.isVideoTexture);it(Et,A);let Zt;const Te=A.mipmaps,tt=A.isVideoTexture!==!0,Bt=ee.__version===void 0||wt===!0,Ft=St.dataReady,Kt=Q(A,Dt);if(A.isDepthTexture)Xt=I(A.format===Rs,A.type),Bt&&(tt?i.texStorage2D(o.TEXTURE_2D,1,Xt,Dt.width,Dt.height):i.texImage2D(o.TEXTURE_2D,0,Xt,Dt.width,Dt.height,0,Ut,Yt,null));else if(A.isDataTexture)if(Te.length>0){tt&&Bt&&i.texStorage2D(o.TEXTURE_2D,Kt,Xt,Te[0].width,Te[0].height);for(let Lt=0,yt=Te.length;Lt<yt;Lt++)Zt=Te[Lt],tt?Ft&&i.texSubImage2D(o.TEXTURE_2D,Lt,0,0,Zt.width,Zt.height,Ut,Yt,Zt.data):i.texImage2D(o.TEXTURE_2D,Lt,Xt,Zt.width,Zt.height,0,Ut,Yt,Zt.data);A.generateMipmaps=!1}else tt?(Bt&&i.texStorage2D(o.TEXTURE_2D,Kt,Xt,Dt.width,Dt.height),Ft&&kt(A,Dt,Ut,Yt)):i.texImage2D(o.TEXTURE_2D,0,Xt,Dt.width,Dt.height,0,Ut,Yt,Dt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){tt&&Bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Kt,Xt,Te[0].width,Te[0].height,Dt.depth);for(let Lt=0,yt=Te.length;Lt<yt;Lt++)if(Zt=Te[Lt],A.format!==pa)if(Ut!==null)if(tt){if(Ft)if(A.layerUpdates.size>0){const Wt=Kv(Zt.width,Zt.height,A.format,A.type);for(const ve of A.layerUpdates){const je=Zt.data.subarray(ve*Wt/Zt.data.BYTES_PER_ELEMENT,(ve+1)*Wt/Zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Lt,0,0,ve,Zt.width,Zt.height,1,Ut,je)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Lt,0,0,0,Zt.width,Zt.height,Dt.depth,Ut,Zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Lt,Xt,Zt.width,Zt.height,Dt.depth,0,Zt.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?Ft&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Lt,0,0,0,Zt.width,Zt.height,Dt.depth,Ut,Yt,Zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Lt,Xt,Zt.width,Zt.height,Dt.depth,0,Ut,Yt,Zt.data)}else{tt&&Bt&&i.texStorage2D(o.TEXTURE_2D,Kt,Xt,Te[0].width,Te[0].height);for(let Lt=0,yt=Te.length;Lt<yt;Lt++)Zt=Te[Lt],A.format!==pa?Ut!==null?tt?Ft&&i.compressedTexSubImage2D(o.TEXTURE_2D,Lt,0,0,Zt.width,Zt.height,Ut,Zt.data):i.compressedTexImage2D(o.TEXTURE_2D,Lt,Xt,Zt.width,Zt.height,0,Zt.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?Ft&&i.texSubImage2D(o.TEXTURE_2D,Lt,0,0,Zt.width,Zt.height,Ut,Yt,Zt.data):i.texImage2D(o.TEXTURE_2D,Lt,Xt,Zt.width,Zt.height,0,Ut,Yt,Zt.data)}else if(A.isDataArrayTexture)if(tt){if(Bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Kt,Xt,Dt.width,Dt.height,Dt.depth),Ft)if(A.layerUpdates.size>0){const Lt=Kv(Dt.width,Dt.height,A.format,A.type);for(const yt of A.layerUpdates){const Wt=Dt.data.subarray(yt*Lt/Dt.data.BYTES_PER_ELEMENT,(yt+1)*Lt/Dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,yt,Dt.width,Dt.height,1,Ut,Yt,Wt)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,Ut,Yt,Dt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Xt,Dt.width,Dt.height,Dt.depth,0,Ut,Yt,Dt.data);else if(A.isData3DTexture)tt?(Bt&&i.texStorage3D(o.TEXTURE_3D,Kt,Xt,Dt.width,Dt.height,Dt.depth),Ft&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,Ut,Yt,Dt.data)):i.texImage3D(o.TEXTURE_3D,0,Xt,Dt.width,Dt.height,Dt.depth,0,Ut,Yt,Dt.data);else if(A.isFramebufferTexture){if(Bt)if(tt)i.texStorage2D(o.TEXTURE_2D,Kt,Xt,Dt.width,Dt.height);else{let Lt=Dt.width,yt=Dt.height;for(let Wt=0;Wt<Kt;Wt++)i.texImage2D(o.TEXTURE_2D,Wt,Xt,Lt,yt,0,Ut,Yt,null),Lt>>=1,yt>>=1}}else if(Te.length>0){if(tt&&Bt){const Lt=ie(Te[0]);i.texStorage2D(o.TEXTURE_2D,Kt,Xt,Lt.width,Lt.height)}for(let Lt=0,yt=Te.length;Lt<yt;Lt++)Zt=Te[Lt],tt?Ft&&i.texSubImage2D(o.TEXTURE_2D,Lt,0,0,Ut,Yt,Zt):i.texImage2D(o.TEXTURE_2D,Lt,Xt,Ut,Yt,Zt);A.generateMipmaps=!1}else if(tt){if(Bt){const Lt=ie(Dt);i.texStorage2D(o.TEXTURE_2D,Kt,Xt,Lt.width,Lt.height)}Ft&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,Yt,Dt)}else i.texImage2D(o.TEXTURE_2D,0,Xt,Ut,Yt,Dt);T(A)&&M(Et),ee.__version=St.version,A.onUpdate&&A.onUpdate(A)}G.__version=A.version}function Rt(G,A,st){if(A.image.length!==6)return;const Et=Mt(G,A),wt=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,G.__webglTexture,o.TEXTURE0+st);const St=r.get(wt);if(wt.version!==St.__version||Et===!0){i.activeTexture(o.TEXTURE0+st);const ee=ke.getPrimaries(ke.workingColorSpace),zt=A.colorSpace===qr?null:ke.getPrimaries(A.colorSpace),le=A.colorSpace===qr||ee===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const me=A.isCompressedTexture||A.image[0].isCompressedTexture,Dt=A.image[0]&&A.image[0].isDataTexture,Ut=[];for(let yt=0;yt<6;yt++)!me&&!Dt?Ut[yt]=O(A.image[yt],!0,l.maxCubemapSize):Ut[yt]=Dt?A.image[yt].image:A.image[yt],Ut[yt]=Xe(A,Ut[yt]);const Yt=Ut[0],Xt=u.convert(A.format,A.colorSpace),Zt=u.convert(A.type),Te=X(A.internalFormat,Xt,Zt,A.colorSpace),tt=A.isVideoTexture!==!0,Bt=St.__version===void 0||Et===!0,Ft=wt.dataReady;let Kt=Q(A,Yt);it(o.TEXTURE_CUBE_MAP,A);let Lt;if(me){tt&&Bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Kt,Te,Yt.width,Yt.height);for(let yt=0;yt<6;yt++){Lt=Ut[yt].mipmaps;for(let Wt=0;Wt<Lt.length;Wt++){const ve=Lt[Wt];A.format!==pa?Xt!==null?tt?Ft&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt,0,0,ve.width,ve.height,Xt,ve.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt,Te,ve.width,ve.height,0,ve.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?Ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt,0,0,ve.width,ve.height,Xt,Zt,ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt,Te,ve.width,ve.height,0,Xt,Zt,ve.data)}}}else{if(Lt=A.mipmaps,tt&&Bt){Lt.length>0&&Kt++;const yt=ie(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Kt,Te,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Dt){tt?Ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ut[yt].width,Ut[yt].height,Xt,Zt,Ut[yt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Te,Ut[yt].width,Ut[yt].height,0,Xt,Zt,Ut[yt].data);for(let Wt=0;Wt<Lt.length;Wt++){const je=Lt[Wt].image[yt].image;tt?Ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt+1,0,0,je.width,je.height,Xt,Zt,je.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt+1,Te,je.width,je.height,0,Xt,Zt,je.data)}}else{tt?Ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Xt,Zt,Ut[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Te,Xt,Zt,Ut[yt]);for(let Wt=0;Wt<Lt.length;Wt++){const ve=Lt[Wt];tt?Ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt+1,0,0,Xt,Zt,ve.image[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Wt+1,Te,Xt,Zt,ve.image[yt])}}}T(A)&&M(o.TEXTURE_CUBE_MAP),St.__version=wt.version,A.onUpdate&&A.onUpdate(A)}G.__version=A.version}function Ot(G,A,st,Et,wt,St){const ee=u.convert(st.format,st.colorSpace),zt=u.convert(st.type),le=X(st.internalFormat,ee,zt,st.colorSpace),me=r.get(A),Dt=r.get(st);if(Dt.__renderTarget=A,!me.__hasExternalTextures){const Ut=Math.max(1,A.width>>St),Yt=Math.max(1,A.height>>St);wt===o.TEXTURE_3D||wt===o.TEXTURE_2D_ARRAY?i.texImage3D(wt,St,le,Ut,Yt,A.depth,0,ee,zt,null):i.texImage2D(wt,St,le,Ut,Yt,0,ee,zt,null)}i.bindFramebuffer(o.FRAMEBUFFER,G),un(A)?g.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Et,wt,Dt.__webglTexture,0,J(A)):(wt===o.TEXTURE_2D||wt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&wt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Et,wt,Dt.__webglTexture,St),i.bindFramebuffer(o.FRAMEBUFFER,null)}function te(G,A,st){if(o.bindRenderbuffer(o.RENDERBUFFER,G),A.depthBuffer){const Et=A.depthTexture,wt=Et&&Et.isDepthTexture?Et.type:null,St=I(A.stencilBuffer,wt),ee=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;un(A)?g.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,J(A),St,A.width,A.height):st?o.renderbufferStorageMultisample(o.RENDERBUFFER,J(A),St,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,St,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ee,o.RENDERBUFFER,G)}else{const Et=A.textures;for(let wt=0;wt<Et.length;wt++){const St=Et[wt],ee=u.convert(St.format,St.colorSpace),zt=u.convert(St.type),le=X(St.internalFormat,ee,zt,St.colorSpace);un(A)?g.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,J(A),le,A.width,A.height):st?o.renderbufferStorageMultisample(o.RENDERBUFFER,J(A),le,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,le,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function oe(G,A,st){const Et=A.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,G),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const wt=r.get(A.depthTexture);if(wt.__renderTarget=A,(!wt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Et){if(wt.__webglInit===void 0&&(wt.__webglInit=!0,A.depthTexture.addEventListener("dispose",Y)),wt.__webglTexture===void 0){wt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,wt.__webglTexture),it(o.TEXTURE_CUBE_MAP,A.depthTexture);const me=u.convert(A.depthTexture.format),Dt=u.convert(A.depthTexture.type);let Ut;A.depthTexture.format===or?Ut=o.DEPTH_COMPONENT24:A.depthTexture.format===Rs&&(Ut=o.DEPTH24_STENCIL8);for(let Yt=0;Yt<6;Yt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,Ut,A.width,A.height,0,me,Dt,null)}}else rt(A.depthTexture,0);const St=wt.__webglTexture,ee=J(A),zt=Et?o.TEXTURE_CUBE_MAP_POSITIVE_X+st:o.TEXTURE_2D,le=A.depthTexture.format===Rs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(A.depthTexture.format===or)un(A)?g.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,le,zt,St,0,ee):o.framebufferTexture2D(o.FRAMEBUFFER,le,zt,St,0);else if(A.depthTexture.format===Rs)un(A)?g.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,le,zt,St,0,ee):o.framebufferTexture2D(o.FRAMEBUFFER,le,zt,St,0);else throw new Error("Unknown depthTexture format")}function ce(G){const A=r.get(G),st=G.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==G.depthTexture){const Et=G.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Et){const wt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Et.removeEventListener("dispose",wt)};Et.addEventListener("dispose",wt),A.__depthDisposeCallback=wt}A.__boundDepthTexture=Et}if(G.depthTexture&&!A.__autoAllocateDepthBuffer)if(st)for(let Et=0;Et<6;Et++)oe(A.__webglFramebuffer[Et],G,Et);else{const Et=G.texture.mipmaps;Et&&Et.length>0?oe(A.__webglFramebuffer[0],G,0):oe(A.__webglFramebuffer,G,0)}else if(st){A.__webglDepthbuffer=[];for(let Et=0;Et<6;Et++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[Et]),A.__webglDepthbuffer[Et]===void 0)A.__webglDepthbuffer[Et]=o.createRenderbuffer(),te(A.__webglDepthbuffer[Et],G,!1);else{const wt=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=A.__webglDepthbuffer[Et];o.bindRenderbuffer(o.RENDERBUFFER,St),o.framebufferRenderbuffer(o.FRAMEBUFFER,wt,o.RENDERBUFFER,St)}}else{const Et=G.texture.mipmaps;if(Et&&Et.length>0?i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),te(A.__webglDepthbuffer,G,!1);else{const wt=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,St),o.framebufferRenderbuffer(o.FRAMEBUFFER,wt,o.RENDERBUFFER,St)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function vn(G,A,st){const Et=r.get(G);A!==void 0&&Ot(Et.__webglFramebuffer,G,G.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),st!==void 0&&ce(G)}function fe(G){const A=G.texture,st=r.get(G),Et=r.get(A);G.addEventListener("dispose",q);const wt=G.textures,St=G.isWebGLCubeRenderTarget===!0,ee=wt.length>1;if(ee||(Et.__webglTexture===void 0&&(Et.__webglTexture=o.createTexture()),Et.__version=A.version,d.memory.textures++),St){st.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(A.mipmaps&&A.mipmaps.length>0){st.__webglFramebuffer[zt]=[];for(let le=0;le<A.mipmaps.length;le++)st.__webglFramebuffer[zt][le]=o.createFramebuffer()}else st.__webglFramebuffer[zt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){st.__webglFramebuffer=[];for(let zt=0;zt<A.mipmaps.length;zt++)st.__webglFramebuffer[zt]=o.createFramebuffer()}else st.__webglFramebuffer=o.createFramebuffer();if(ee)for(let zt=0,le=wt.length;zt<le;zt++){const me=r.get(wt[zt]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),d.memory.textures++)}if(G.samples>0&&un(G)===!1){st.__webglMultisampledFramebuffer=o.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let zt=0;zt<wt.length;zt++){const le=wt[zt];st.__webglColorRenderbuffer[zt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,st.__webglColorRenderbuffer[zt]);const me=u.convert(le.format,le.colorSpace),Dt=u.convert(le.type),Ut=X(le.internalFormat,me,Dt,le.colorSpace,G.isXRRenderTarget===!0),Yt=J(G);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Ut,G.width,G.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,st.__webglColorRenderbuffer[zt])}o.bindRenderbuffer(o.RENDERBUFFER,null),G.depthBuffer&&(st.__webglDepthRenderbuffer=o.createRenderbuffer(),te(st.__webglDepthRenderbuffer,G,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(St){i.bindTexture(o.TEXTURE_CUBE_MAP,Et.__webglTexture),it(o.TEXTURE_CUBE_MAP,A);for(let zt=0;zt<6;zt++)if(A.mipmaps&&A.mipmaps.length>0)for(let le=0;le<A.mipmaps.length;le++)Ot(st.__webglFramebuffer[zt][le],G,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,le);else Ot(st.__webglFramebuffer[zt],G,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);T(A)&&M(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ee){for(let zt=0,le=wt.length;zt<le;zt++){const me=wt[zt],Dt=r.get(me);let Ut=o.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Ut=G.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Dt.__webglTexture),it(Ut,me),Ot(st.__webglFramebuffer,G,me,o.COLOR_ATTACHMENT0+zt,Ut,0),T(me)&&M(Ut)}i.unbindTexture()}else{let zt=o.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(zt=G.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(zt,Et.__webglTexture),it(zt,A),A.mipmaps&&A.mipmaps.length>0)for(let le=0;le<A.mipmaps.length;le++)Ot(st.__webglFramebuffer[le],G,A,o.COLOR_ATTACHMENT0,zt,le);else Ot(st.__webglFramebuffer,G,A,o.COLOR_ATTACHMENT0,zt,0);T(A)&&M(zt),i.unbindTexture()}G.depthBuffer&&ce(G)}function pe(G){const A=G.textures;for(let st=0,Et=A.length;st<Et;st++){const wt=A[st];if(T(wt)){const St=P(G),ee=r.get(wt).__webglTexture;i.bindTexture(St,ee),M(St),i.unbindTexture()}}}const Ve=[],Ee=[];function dn(G){if(G.samples>0){if(un(G)===!1){const A=G.textures,st=G.width,Et=G.height;let wt=o.COLOR_BUFFER_BIT;const St=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ee=r.get(G),zt=A.length>1;if(zt)for(let me=0;me<A.length;me++)i.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+me,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,ee.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+me,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer);const le=G.texture.mipmaps;le&&le.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let me=0;me<A.length;me++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(wt|=o.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(wt|=o.STENCIL_BUFFER_BIT)),zt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ee.__webglColorRenderbuffer[me]);const Dt=r.get(A[me]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Dt,0)}o.blitFramebuffer(0,0,st,Et,0,0,st,Et,wt,o.NEAREST),v===!0&&(Ve.length=0,Ee.length=0,Ve.push(o.COLOR_ATTACHMENT0+me),G.depthBuffer&&G.resolveDepthBuffer===!1&&(Ve.push(St),Ee.push(St),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ve))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),zt)for(let me=0;me<A.length;me++){i.bindFramebuffer(o.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+me,o.RENDERBUFFER,ee.__webglColorRenderbuffer[me]);const Dt=r.get(A[me]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,ee.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+me,o.TEXTURE_2D,Dt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&v){const A=G.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function J(G){return Math.min(l.maxSamples,G.samples)}function un(G){const A=r.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ne(G){const A=d.render.frame;S.get(G)!==A&&(S.set(G,A),G.update())}function Xe(G,A){const st=G.colorSpace,Et=G.format,wt=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||st!==Lo&&st!==qr&&(ke.getTransfer(st)===nn?(Et!==pa||wt!==ia)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",st)),A}function ie(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(p.width=G.naturalWidth||G.width,p.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(p.width=G.displayWidth,p.height=G.displayHeight):(p.width=G.width,p.height=G.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=j,this.setTexture2D=rt,this.setTexture2DArray=U,this.setTexture3D=F,this.setTextureCube=at,this.rebindTextures=vn,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=un,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Xb(o,e){function i(r,l=qr){let u;const d=ke.getTransfer(l);if(r===ia)return o.UNSIGNED_BYTE;if(r===Gp)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Vp)return o.UNSIGNED_SHORT_5_5_5_1;if(r===U_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===L_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===w_)return o.BYTE;if(r===D_)return o.SHORT;if(r===Fl)return o.UNSIGNED_SHORT;if(r===Hp)return o.INT;if(r===Da)return o.UNSIGNED_INT;if(r===ba)return o.FLOAT;if(r===sr)return o.HALF_FLOAT;if(r===N_)return o.ALPHA;if(r===O_)return o.RGB;if(r===pa)return o.RGBA;if(r===or)return o.DEPTH_COMPONENT;if(r===Rs)return o.DEPTH_STENCIL;if(r===P_)return o.RED;if(r===Xp)return o.RED_INTEGER;if(r===Uo)return o.RG;if(r===kp)return o.RG_INTEGER;if(r===Wp)return o.RGBA_INTEGER;if(r===Nc||r===Oc||r===Pc||r===Fc)if(d===nn)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Nc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Nc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ip||r===ap||r===rp||r===sp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===ip)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ap)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===rp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===op||r===lp||r===up||r===cp||r===fp||r===hp||r===dp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===op||r===lp)return d===nn?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===up)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===cp)return u.COMPRESSED_R11_EAC;if(r===fp)return u.COMPRESSED_SIGNED_R11_EAC;if(r===hp)return u.COMPRESSED_RG11_EAC;if(r===dp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===pp||r===mp||r===gp||r===vp||r===_p||r===xp||r===yp||r===Sp||r===Mp||r===Ep||r===Tp||r===bp||r===Ap||r===Rp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===pp)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mp)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gp)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vp)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_p)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xp)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yp)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sp)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mp)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ep)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tp)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bp)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ap)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rp)return d===nn?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cp||r===wp||r===Dp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Cp)return d===nn?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Dp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Up||r===Lp||r===Np||r===Op)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Up)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Lp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Np)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Op)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const kb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wb=`
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

}`;class jb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new W_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ua({vertexShader:kb,fragmentShader:Wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ma(new Kc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qb extends Oo{constructor(e,i){super();const r=this;let l=null,u=1,d=null,g="local-floor",v=1,p=null,S=null,E=null,x=null,b=null,C=null;const O=typeof XRWebGLBinding<"u",T=new jb,M={},P=i.getContextAttributes();let X=null,I=null;const Q=[],Y=[],q=new ln;let w=null;const z=new na;z.viewport=new wn;const B=new na;B.viewport=new wn;const D=[z,B],j=new iM;let K=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let Rt=Q[pt];return Rt===void 0&&(Rt=new Sd,Q[pt]=Rt),Rt.getTargetRaySpace()},this.getControllerGrip=function(pt){let Rt=Q[pt];return Rt===void 0&&(Rt=new Sd,Q[pt]=Rt),Rt.getGripSpace()},this.getHand=function(pt){let Rt=Q[pt];return Rt===void 0&&(Rt=new Sd,Q[pt]=Rt),Rt.getHandSpace()};function rt(pt){const Rt=Y.indexOf(pt.inputSource);if(Rt===-1)return;const Ot=Q[Rt];Ot!==void 0&&(Ot.update(pt.inputSource,pt.frame,p||d),Ot.dispatchEvent({type:pt.type,data:pt.inputSource}))}function U(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",F);for(let pt=0;pt<Q.length;pt++){const Rt=Y[pt];Rt!==null&&(Y[pt]=null,Q[pt].disconnect(Rt))}K=null,lt=null,T.reset();for(const pt in M)delete M[pt];e.setRenderTarget(X),b=null,x=null,E=null,l=null,I=null,kt.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){u=pt,r.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){g=pt,r.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(pt){p=pt},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return E===null&&O&&(E=new XRWebGLBinding(l,i)),E},this.getFrame=function(){return C},this.getSession=function(){return l},this.setSession=async function(pt){if(l=pt,l!==null){if(X=e.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",U),l.addEventListener("inputsourceschange",F),P.xrCompatible!==!0&&await i.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(q),O&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,te=null,oe=null;P.depth&&(oe=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ot=P.stencil?Rs:or,te=P.stencil?Bl:Da);const ce={colorFormat:i.RGBA8,depthFormat:oe,scaleFactor:u};E=this.getBinding(),x=E.createProjectionLayer(ce),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Ca(x.textureWidth,x.textureHeight,{format:pa,type:ia,depthTexture:new Il(x.textureWidth,x.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ot={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,Ot),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),I=new Ca(b.framebufferWidth,b.framebufferHeight,{format:pa,type:ia,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(v),p=null,d=await l.requestReferenceSpace(g),kt.setContext(l),kt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function F(pt){for(let Rt=0;Rt<pt.removed.length;Rt++){const Ot=pt.removed[Rt],te=Y.indexOf(Ot);te>=0&&(Y[te]=null,Q[te].disconnect(Ot))}for(let Rt=0;Rt<pt.added.length;Rt++){const Ot=pt.added[Rt];let te=Y.indexOf(Ot);if(te===-1){for(let ce=0;ce<Q.length;ce++)if(ce>=Y.length){Y.push(Ot),te=ce;break}else if(Y[ce]===null){Y[ce]=Ot,te=ce;break}if(te===-1)break}const oe=Q[te];oe&&oe.connect(Ot)}}const at=new mt,ct=new mt;function bt(pt,Rt,Ot){at.setFromMatrixPosition(Rt.matrixWorld),ct.setFromMatrixPosition(Ot.matrixWorld);const te=at.distanceTo(ct),oe=Rt.projectionMatrix.elements,ce=Ot.projectionMatrix.elements,vn=oe[14]/(oe[10]-1),fe=oe[14]/(oe[10]+1),pe=(oe[9]+1)/oe[5],Ve=(oe[9]-1)/oe[5],Ee=(oe[8]-1)/oe[0],dn=(ce[8]+1)/ce[0],J=vn*Ee,un=vn*dn,Ne=te/(-Ee+dn),Xe=Ne*-Ee;if(Rt.matrixWorld.decompose(pt.position,pt.quaternion,pt.scale),pt.translateX(Xe),pt.translateZ(Ne),pt.matrixWorld.compose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldInverse.copy(pt.matrixWorld).invert(),oe[10]===-1)pt.projectionMatrix.copy(Rt.projectionMatrix),pt.projectionMatrixInverse.copy(Rt.projectionMatrixInverse);else{const ie=vn+Ne,G=fe+Ne,A=J-Xe,st=un+(te-Xe),Et=pe*fe/G*ie,wt=Ve*fe/G*ie;pt.projectionMatrix.makePerspective(A,st,Et,wt,ie,G),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert()}}function V(pt,Rt){Rt===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(Rt.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(l===null)return;let Rt=pt.near,Ot=pt.far;T.texture!==null&&(T.depthNear>0&&(Rt=T.depthNear),T.depthFar>0&&(Ot=T.depthFar)),j.near=B.near=z.near=Rt,j.far=B.far=z.far=Ot,(K!==j.near||lt!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),K=j.near,lt=j.far),j.layers.mask=pt.layers.mask|6,z.layers.mask=j.layers.mask&-5,B.layers.mask=j.layers.mask&-3;const te=pt.parent,oe=j.cameras;V(j,te);for(let ce=0;ce<oe.length;ce++)V(oe[ce],te);oe.length===2?bt(j,z,B):j.projectionMatrix.copy(z.projectionMatrix),it(pt,j,te)};function it(pt,Rt,Ot){Ot===null?pt.matrix.copy(Rt.matrixWorld):(pt.matrix.copy(Ot.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(Rt.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(Rt.projectionMatrix),pt.projectionMatrixInverse.copy(Rt.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=Pp*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(x===null&&b===null))return v},this.setFoveation=function(pt){v=pt,x!==null&&(x.fixedFoveation=pt),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=pt)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(j)},this.getCameraTexture=function(pt){return M[pt]};let Mt=null;function Pt(pt,Rt){if(S=Rt.getViewerPose(p||d),C=Rt,S!==null){const Ot=S.views;b!==null&&(e.setRenderTargetFramebuffer(I,b.framebuffer),e.setRenderTarget(I));let te=!1;Ot.length!==j.cameras.length&&(j.cameras.length=0,te=!0);for(let fe=0;fe<Ot.length;fe++){const pe=Ot[fe];let Ve=null;if(b!==null)Ve=b.getViewport(pe);else{const dn=E.getViewSubImage(x,pe);Ve=dn.viewport,fe===0&&(e.setRenderTargetTextures(I,dn.colorTexture,dn.depthStencilTexture),e.setRenderTarget(I))}let Ee=D[fe];Ee===void 0&&(Ee=new na,Ee.layers.enable(fe),Ee.viewport=new wn,D[fe]=Ee),Ee.matrix.fromArray(pe.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(pe.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),fe===0&&(j.matrix.copy(Ee.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),te===!0&&j.cameras.push(Ee)}const oe=l.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&O){E=r.getBinding();const fe=E.getDepthInformation(Ot[0]);fe&&fe.isValid&&fe.texture&&T.init(fe,l.renderState)}if(oe&&oe.includes("camera-access")&&O){e.state.unbindTexture(),E=r.getBinding();for(let fe=0;fe<Ot.length;fe++){const pe=Ot[fe].camera;if(pe){let Ve=M[pe];Ve||(Ve=new W_,M[pe]=Ve);const Ee=E.getCameraImage(pe);Ve.sourceTexture=Ee}}}}for(let Ot=0;Ot<Q.length;Ot++){const te=Y[Ot],oe=Q[Ot];te!==null&&oe!==void 0&&oe.update(te,Rt,p||d)}Mt&&Mt(pt,Rt),Rt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Rt}),C=null}const kt=new Z_;kt.setAnimationLoop(Pt),this.setAnimationLoop=function(pt){Mt=pt},this.dispose=function(){}}}const Ms=new lr,Yb=new Dn;function Zb(o,e){function i(T,M){T.matrixAutoUpdate===!0&&T.updateMatrix(),M.value.copy(T.matrix)}function r(T,M){M.color.getRGB(T.fogColor.value,j_(o)),M.isFog?(T.fogNear.value=M.near,T.fogFar.value=M.far):M.isFogExp2&&(T.fogDensity.value=M.density)}function l(T,M,P,X,I){M.isMeshBasicMaterial?u(T,M):M.isMeshLambertMaterial?(u(T,M),M.envMap&&(T.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(u(T,M),E(T,M)):M.isMeshPhongMaterial?(u(T,M),S(T,M),M.envMap&&(T.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(u(T,M),x(T,M),M.isMeshPhysicalMaterial&&b(T,M,I)):M.isMeshMatcapMaterial?(u(T,M),C(T,M)):M.isMeshDepthMaterial?u(T,M):M.isMeshDistanceMaterial?(u(T,M),O(T,M)):M.isMeshNormalMaterial?u(T,M):M.isLineBasicMaterial?(d(T,M),M.isLineDashedMaterial&&g(T,M)):M.isPointsMaterial?v(T,M,P,X):M.isSpriteMaterial?p(T,M):M.isShadowMaterial?(T.color.value.copy(M.color),T.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function u(T,M){T.opacity.value=M.opacity,M.color&&T.diffuse.value.copy(M.color),M.emissive&&T.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(T.map.value=M.map,i(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.bumpMap&&(T.bumpMap.value=M.bumpMap,i(M.bumpMap,T.bumpMapTransform),T.bumpScale.value=M.bumpScale,M.side===bi&&(T.bumpScale.value*=-1)),M.normalMap&&(T.normalMap.value=M.normalMap,i(M.normalMap,T.normalMapTransform),T.normalScale.value.copy(M.normalScale),M.side===bi&&T.normalScale.value.negate()),M.displacementMap&&(T.displacementMap.value=M.displacementMap,i(M.displacementMap,T.displacementMapTransform),T.displacementScale.value=M.displacementScale,T.displacementBias.value=M.displacementBias),M.emissiveMap&&(T.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,T.emissiveMapTransform)),M.specularMap&&(T.specularMap.value=M.specularMap,i(M.specularMap,T.specularMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest);const P=e.get(M),X=P.envMap,I=P.envMapRotation;X&&(T.envMap.value=X,Ms.copy(I),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),T.envMapRotation.value.setFromMatrix4(Yb.makeRotationFromEuler(Ms)),T.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,T.reflectivity.value=M.reflectivity,T.ior.value=M.ior,T.refractionRatio.value=M.refractionRatio),M.lightMap&&(T.lightMap.value=M.lightMap,T.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,T.lightMapTransform)),M.aoMap&&(T.aoMap.value=M.aoMap,T.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,T.aoMapTransform))}function d(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,M.map&&(T.map.value=M.map,i(M.map,T.mapTransform))}function g(T,M){T.dashSize.value=M.dashSize,T.totalSize.value=M.dashSize+M.gapSize,T.scale.value=M.scale}function v(T,M,P,X){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.size.value=M.size*P,T.scale.value=X*.5,M.map&&(T.map.value=M.map,i(M.map,T.uvTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function p(T,M){T.diffuse.value.copy(M.color),T.opacity.value=M.opacity,T.rotation.value=M.rotation,M.map&&(T.map.value=M.map,i(M.map,T.mapTransform)),M.alphaMap&&(T.alphaMap.value=M.alphaMap,i(M.alphaMap,T.alphaMapTransform)),M.alphaTest>0&&(T.alphaTest.value=M.alphaTest)}function S(T,M){T.specular.value.copy(M.specular),T.shininess.value=Math.max(M.shininess,1e-4)}function E(T,M){M.gradientMap&&(T.gradientMap.value=M.gradientMap)}function x(T,M){T.metalness.value=M.metalness,M.metalnessMap&&(T.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,T.metalnessMapTransform)),T.roughness.value=M.roughness,M.roughnessMap&&(T.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,T.roughnessMapTransform)),M.envMap&&(T.envMapIntensity.value=M.envMapIntensity)}function b(T,M,P){T.ior.value=M.ior,M.sheen>0&&(T.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),T.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(T.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,T.sheenColorMapTransform)),M.sheenRoughnessMap&&(T.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,T.sheenRoughnessMapTransform))),M.clearcoat>0&&(T.clearcoat.value=M.clearcoat,T.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(T.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,T.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(T.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,T.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(T.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,T.clearcoatNormalMapTransform),T.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===bi&&T.clearcoatNormalScale.value.negate())),M.dispersion>0&&(T.dispersion.value=M.dispersion),M.iridescence>0&&(T.iridescence.value=M.iridescence,T.iridescenceIOR.value=M.iridescenceIOR,T.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],T.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(T.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,T.iridescenceMapTransform)),M.iridescenceThicknessMap&&(T.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,T.iridescenceThicknessMapTransform))),M.transmission>0&&(T.transmission.value=M.transmission,T.transmissionSamplerMap.value=P.texture,T.transmissionSamplerSize.value.set(P.width,P.height),M.transmissionMap&&(T.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,T.transmissionMapTransform)),T.thickness.value=M.thickness,M.thicknessMap&&(T.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,T.thicknessMapTransform)),T.attenuationDistance.value=M.attenuationDistance,T.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(T.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(T.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,T.anisotropyMapTransform))),T.specularIntensity.value=M.specularIntensity,T.specularColor.value.copy(M.specularColor),M.specularColorMap&&(T.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,T.specularColorMapTransform)),M.specularIntensityMap&&(T.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,T.specularIntensityMapTransform))}function C(T,M){M.matcap&&(T.matcap.value=M.matcap)}function O(T,M){const P=e.get(M).light;T.referencePosition.value.setFromMatrixPosition(P.matrixWorld),T.nearDistance.value=P.shadow.camera.near,T.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Kb(o,e,i,r){let l={},u={},d=[];const g=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function v(P,X){const I=X.program;r.uniformBlockBinding(P,I)}function p(P,X){let I=l[P.id];I===void 0&&(C(P),I=S(P),l[P.id]=I,P.addEventListener("dispose",T));const Q=X.program;r.updateUBOMapping(P,Q);const Y=e.render.frame;u[P.id]!==Y&&(x(P),u[P.id]=Y)}function S(P){const X=E();P.__bindingPointIndex=X;const I=o.createBuffer(),Q=P.__size,Y=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,I),o.bufferData(o.UNIFORM_BUFFER,Q,Y),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,X,I),I}function E(){for(let P=0;P<g;P++)if(d.indexOf(P)===-1)return d.push(P),P;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const X=l[P.id],I=P.uniforms,Q=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,X);for(let Y=0,q=I.length;Y<q;Y++){const w=Array.isArray(I[Y])?I[Y]:[I[Y]];for(let z=0,B=w.length;z<B;z++){const D=w[z];if(b(D,Y,z,Q)===!0){const j=D.__offset,K=Array.isArray(D.value)?D.value:[D.value];let lt=0;for(let rt=0;rt<K.length;rt++){const U=K[rt],F=O(U);typeof U=="number"||typeof U=="boolean"?(D.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,j+lt,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=0,D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=0,D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=0):(U.toArray(D.__data,lt),lt+=F.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,j,D.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(P,X,I,Q){const Y=P.value,q=X+"_"+I;if(Q[q]===void 0)return typeof Y=="number"||typeof Y=="boolean"?Q[q]=Y:Q[q]=Y.clone(),!0;{const w=Q[q];if(typeof Y=="number"||typeof Y=="boolean"){if(w!==Y)return Q[q]=Y,!0}else if(w.equals(Y)===!1)return w.copy(Y),!0}return!1}function C(P){const X=P.uniforms;let I=0;const Q=16;for(let q=0,w=X.length;q<w;q++){const z=Array.isArray(X[q])?X[q]:[X[q]];for(let B=0,D=z.length;B<D;B++){const j=z[B],K=Array.isArray(j.value)?j.value:[j.value];for(let lt=0,rt=K.length;lt<rt;lt++){const U=K[lt],F=O(U),at=I%Q,ct=at%F.boundary,bt=at+ct;I+=ct,bt!==0&&Q-bt<F.storage&&(I+=Q-bt),j.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=I,I+=F.storage}}}const Y=I%Q;return Y>0&&(I+=Q-Y),P.__size=I,P.__cache={},this}function O(P){const X={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(X.boundary=4,X.storage=4):P.isVector2?(X.boundary=8,X.storage=8):P.isVector3||P.isColor?(X.boundary=16,X.storage=12):P.isVector4?(X.boundary=16,X.storage=16):P.isMatrix3?(X.boundary=48,X.storage=48):P.isMatrix4?(X.boundary=64,X.storage=64):P.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Me("WebGLRenderer: Unsupported uniform value type.",P),X}function T(P){const X=P.target;X.removeEventListener("dispose",T);const I=d.indexOf(X.__bindingPointIndex);d.splice(I,1),o.deleteBuffer(l[X.id]),delete l[X.id],delete u[X.id]}function M(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},u={}}return{bind:v,update:p,dispose:M}}const Qb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ea=null;function Jb(){return Ea===null&&(Ea=new VS(Qb,16,16,Uo,sr),Ea.name="DFG_LUT",Ea.minFilter=oi,Ea.magFilter=oi,Ea.wrapS=ir,Ea.wrapT=ir,Ea.generateMipmaps=!1,Ea.needsUpdate=!0),Ea}class $b{constructor(e={}){const{canvas:i=xS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:g=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:E=!1,reversedDepthBuffer:x=!1,outputBufferType:b=ia}=e;this.isWebGLRenderer=!0;let C;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=r.getContextAttributes().alpha}else C=d;const O=b,T=new Set([Wp,kp,Xp]),M=new Set([ia,Da,Fl,Bl,Gp,Vp]),P=new Uint32Array(4),X=new Int32Array(4);let I=null,Q=null;const Y=[],q=[];let w=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let B=!1;this._outputColorSpace=ea;let D=0,j=0,K=null,lt=-1,rt=null;const U=new wn,F=new wn;let at=null;const ct=new We(0);let bt=0,V=i.width,it=i.height,Mt=1,Pt=null,kt=null;const pt=new wn(0,0,V,it),Rt=new wn(0,0,V,it);let Ot=!1;const te=new X_;let oe=!1,ce=!1;const vn=new Dn,fe=new mt,pe=new wn,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function dn(){return K===null?Mt:1}let J=r;function un(N,et){return i.getContext(N,et)}try{const N={alpha:!0,depth:l,stencil:u,antialias:g,premultipliedAlpha:v,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:E};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zp}`),i.addEventListener("webglcontextlost",Wt,!1),i.addEventListener("webglcontextrestored",ve,!1),i.addEventListener("webglcontextcreationerror",je,!1),J===null){const et="webgl2";if(J=un(et,N),J===null)throw un(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Je("WebGLRenderer: "+N.message),N}let Ne,Xe,ie,G,A,st,Et,wt,St,ee,zt,le,me,Dt,Ut,Yt,Xt,Zt,Te,tt,Bt,Ft,Kt;function Lt(){Ne=new $1(J),Ne.init(),Bt=new Xb(J,Ne),Xe=new W1(J,Ne,e,Bt),ie=new Gb(J,Ne),Xe.reversedDepthBuffer&&x&&ie.buffers.depth.setReversed(!0),G=new nT(J),A=new Rb,st=new Vb(J,Ne,ie,A,Xe,Bt,G),Et=new J1(z),wt=new oM(J),Ft=new X1(J,wt),St=new tT(J,wt,G,Ft),ee=new aT(J,St,wt,Ft,G),Zt=new iT(J,Xe,st),Ut=new j1(A),zt=new Ab(z,Et,Ne,Xe,Ft,Ut),le=new Zb(z,A),me=new wb,Dt=new Pb(Ne),Xt=new V1(z,Et,ie,ee,C,v),Yt=new Hb(z,ee,Xe),Kt=new Kb(J,G,Xe,ie),Te=new k1(J,Ne,G),tt=new eT(J,Ne,G),G.programs=zt.programs,z.capabilities=Xe,z.extensions=Ne,z.properties=A,z.renderLists=me,z.shadowMap=Yt,z.state=ie,z.info=G}Lt(),O!==ia&&(w=new sT(O,i.width,i.height,l,u));const yt=new qb(z,J);this.xr=yt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const N=Ne.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ne.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Mt},this.setPixelRatio=function(N){N!==void 0&&(Mt=N,this.setSize(V,it,!1))},this.getSize=function(N){return N.set(V,it)},this.setSize=function(N,et,_t=!0){if(yt.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}V=N,it=et,i.width=Math.floor(N*Mt),i.height=Math.floor(et*Mt),_t===!0&&(i.style.width=N+"px",i.style.height=et+"px"),w!==null&&w.setSize(i.width,i.height),this.setViewport(0,0,N,et)},this.getDrawingBufferSize=function(N){return N.set(V*Mt,it*Mt).floor()},this.setDrawingBufferSize=function(N,et,_t){V=N,it=et,Mt=_t,i.width=Math.floor(N*_t),i.height=Math.floor(et*_t),this.setViewport(0,0,N,et)},this.setEffects=function(N){if(O===ia){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let et=0;et<N.length;et++)if(N[et].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(U)},this.getViewport=function(N){return N.copy(pt)},this.setViewport=function(N,et,_t,ft){N.isVector4?pt.set(N.x,N.y,N.z,N.w):pt.set(N,et,_t,ft),ie.viewport(U.copy(pt).multiplyScalar(Mt).round())},this.getScissor=function(N){return N.copy(Rt)},this.setScissor=function(N,et,_t,ft){N.isVector4?Rt.set(N.x,N.y,N.z,N.w):Rt.set(N,et,_t,ft),ie.scissor(F.copy(Rt).multiplyScalar(Mt).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(N){ie.setScissorTest(Ot=N)},this.setOpaqueSort=function(N){Pt=N},this.setTransparentSort=function(N){kt=N},this.getClearColor=function(N){return N.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(N=!0,et=!0,_t=!0){let ft=0;if(N){let ut=!1;if(K!==null){const Ht=K.texture.format;ut=T.has(Ht)}if(ut){const Ht=K.texture.type,Qt=M.has(Ht),It=Xt.getClearColor(),Jt=Xt.getClearAlpha(),re=It.r,_e=It.g,ye=It.b;Qt?(P[0]=re,P[1]=_e,P[2]=ye,P[3]=Jt,J.clearBufferuiv(J.COLOR,0,P)):(X[0]=re,X[1]=_e,X[2]=ye,X[3]=Jt,J.clearBufferiv(J.COLOR,0,X))}else ft|=J.COLOR_BUFFER_BIT}et&&(ft|=J.DEPTH_BUFFER_BIT),_t&&(ft|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ft!==0&&J.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Wt,!1),i.removeEventListener("webglcontextrestored",ve,!1),i.removeEventListener("webglcontextcreationerror",je,!1),Xt.dispose(),me.dispose(),Dt.dispose(),A.dispose(),Et.dispose(),ee.dispose(),Ft.dispose(),Kt.dispose(),zt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",mi),yt.removeEventListener("sessionend",La),qe.stop()};function Wt(N){N.preventDefault(),wv("WebGLRenderer: Context Lost."),B=!0}function ve(){wv("WebGLRenderer: Context Restored."),B=!1;const N=G.autoReset,et=Yt.enabled,_t=Yt.autoUpdate,ft=Yt.needsUpdate,ut=Yt.type;Lt(),G.autoReset=N,Yt.enabled=et,Yt.autoUpdate=_t,Yt.needsUpdate=ft,Yt.type=ut}function je(N){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Le(N){const et=N.target;et.removeEventListener("dispose",Le),Un(et)}function Un(N){Ri(N),A.remove(N)}function Ri(N){const et=A.get(N).programs;et!==void 0&&(et.forEach(function(_t){zt.releaseProgram(_t)}),N.isShaderMaterial&&zt.releaseShaderCache(N))}this.renderBufferDirect=function(N,et,_t,ft,ut,Ht){et===null&&(et=Ve);const Qt=ut.isMesh&&ut.matrixWorld.determinant()<0,It=cr(N,et,_t,ft,ut);ie.setMaterial(ft,Qt);let Jt=_t.index,re=1;if(ft.wireframe===!0){if(Jt=St.getWireframeAttribute(_t),Jt===void 0)return;re=2}const _e=_t.drawRange,ye=_t.attributes.position;let $t=_e.start*re,Ae=(_e.start+_e.count)*re;Ht!==null&&($t=Math.max($t,Ht.start*re),Ae=Math.min(Ae,(Ht.start+Ht.count)*re)),Jt!==null?($t=Math.max($t,0),Ae=Math.min(Ae,Jt.count)):ye!=null&&($t=Math.max($t,0),Ae=Math.min(Ae,ye.count));const cn=Ae-$t;if(cn<0||cn===1/0)return;Ft.setup(ut,ft,It,_t,Jt);let fn,Ie=Te;if(Jt!==null&&(fn=wt.get(Jt),Ie=tt,Ie.setIndex(fn)),ut.isMesh)ft.wireframe===!0?(ie.setLineWidth(ft.wireframeLinewidth*dn()),Ie.setMode(J.LINES)):Ie.setMode(J.TRIANGLES);else if(ut.isLine){let En=ft.linewidth;En===void 0&&(En=1),ie.setLineWidth(En*dn()),ut.isLineSegments?Ie.setMode(J.LINES):ut.isLineLoop?Ie.setMode(J.LINE_LOOP):Ie.setMode(J.LINE_STRIP)}else ut.isPoints?Ie.setMode(J.POINTS):ut.isSprite&&Ie.setMode(J.TRIANGLES);if(ut.isBatchedMesh)if(ut._multiDrawInstances!==null)Xc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount,ut._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Ie.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{const En=ut._multiDrawStarts,Vt=ut._multiDrawCounts,Wn=ut._multiDrawCount,Se=Jt?wt.get(Jt).bytesPerElement:1,Nn=A.get(ft).currentProgram.getUniforms();for(let ii=0;ii<Wn;ii++)Nn.setValue(J,"_gl_DrawID",ii),Ie.render(En[ii]/Se,Vt[ii])}else if(ut.isInstancedMesh)Ie.renderInstances($t,cn,ut.count);else if(_t.isInstancedBufferGeometry){const En=_t._maxInstanceCount!==void 0?_t._maxInstanceCount:1/0,Vt=Math.min(_t.instanceCount,En);Ie.renderInstances($t,cn,Vt)}else Ie.render($t,cn)};function Gi(N,et,_t){N.transparent===!0&&N.side===nr&&N.forceSinglePass===!1?(N.side=bi,N.needsUpdate=!0,wi(N,et,_t),N.side=Zr,N.needsUpdate=!0,wi(N,et,_t),N.side=nr):wi(N,et,_t)}this.compile=function(N,et,_t=null){_t===null&&(_t=N),Q=Dt.get(_t),Q.init(et),q.push(Q),_t.traverseVisible(function(ut){ut.isLight&&ut.layers.test(et.layers)&&(Q.pushLight(ut),ut.castShadow&&Q.pushShadow(ut))}),N!==_t&&N.traverseVisible(function(ut){ut.isLight&&ut.layers.test(et.layers)&&(Q.pushLight(ut),ut.castShadow&&Q.pushShadow(ut))}),Q.setupLights();const ft=new Set;return N.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;const Ht=ut.material;if(Ht)if(Array.isArray(Ht))for(let Qt=0;Qt<Ht.length;Qt++){const It=Ht[Qt];Gi(It,_t,ut),ft.add(It)}else Gi(Ht,_t,ut),ft.add(Ht)}),Q=q.pop(),ft},this.compileAsync=function(N,et,_t=null){const ft=this.compile(N,et,_t);return new Promise(ut=>{function Ht(){if(ft.forEach(function(Qt){A.get(Qt).currentProgram.isReady()&&ft.delete(Qt)}),ft.size===0){ut(N);return}setTimeout(Ht,10)}Ne.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let ur=null;function pi(N){ur&&ur(N)}function mi(){qe.stop()}function La(){qe.start()}const qe=new Z_;qe.setAnimationLoop(pi),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(N){ur=N,yt.setAnimationLoop(N),N===null?qe.stop():qe.start()},yt.addEventListener("sessionstart",mi),yt.addEventListener("sessionend",La),this.render=function(N,et){if(et!==void 0&&et.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const _t=yt.enabled===!0&&yt.isPresenting===!0,ft=w!==null&&(K===null||_t)&&w.begin(z,K);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(et),et=yt.getCamera()),N.isScene===!0&&N.onBeforeRender(z,N,et,K),Q=Dt.get(N,q.length),Q.init(et),q.push(Q),vn.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),te.setFromProjectionMatrix(vn,Aa,et.reversedDepth),ce=this.localClippingEnabled,oe=Ut.init(this.clippingPlanes,ce),I=me.get(N,Y.length),I.init(),Y.push(I),yt.enabled===!0&&yt.isPresenting===!0){const Qt=z.xr.getDepthSensingMesh();Qt!==null&&Zn(Qt,et,-1/0,z.sortObjects)}Zn(N,et,0,z.sortObjects),I.finish(),z.sortObjects===!0&&I.sort(Pt,kt),Ee=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,Ee&&Xt.addToRenderList(I,N),this.info.render.frame++,oe===!0&&Ut.beginShadows();const ut=Q.state.shadowsArray;if(Yt.render(ut,N,et),oe===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ft&&w.hasRenderPass())===!1){const Qt=I.opaque,It=I.transmissive;if(Q.setupLights(),et.isArrayCamera){const Jt=et.cameras;if(It.length>0)for(let re=0,_e=Jt.length;re<_e;re++){const ye=Jt[re];Mn(Qt,It,N,ye)}Ee&&Xt.render(N);for(let re=0,_e=Jt.length;re<_e;re++){const ye=Jt[re];ui(I,N,ye,ye.viewport)}}else It.length>0&&Mn(Qt,It,N,et),Ee&&Xt.render(N),ui(I,N,et)}K!==null&&j===0&&(st.updateMultisampleRenderTarget(K),st.updateRenderTargetMipmap(K)),ft&&w.end(z),N.isScene===!0&&N.onAfterRender(z,N,et),Ft.resetDefaultState(),lt=-1,rt=null,q.pop(),q.length>0?(Q=q[q.length-1],oe===!0&&Ut.setGlobalState(z.clippingPlanes,Q.state.camera)):Q=null,Y.pop(),Y.length>0?I=Y[Y.length-1]:I=null};function Zn(N,et,_t,ft){if(N.visible===!1)return;if(N.layers.test(et.layers)){if(N.isGroup)_t=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(et);else if(N.isLight)Q.pushLight(N),N.castShadow&&Q.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||te.intersectsSprite(N)){ft&&pe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(vn);const Qt=ee.update(N),It=N.material;It.visible&&I.push(N,Qt,It,_t,pe.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||te.intersectsObject(N))){const Qt=ee.update(N),It=N.material;if(ft&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),pe.copy(N.boundingSphere.center)):(Qt.boundingSphere===null&&Qt.computeBoundingSphere(),pe.copy(Qt.boundingSphere.center)),pe.applyMatrix4(N.matrixWorld).applyMatrix4(vn)),Array.isArray(It)){const Jt=Qt.groups;for(let re=0,_e=Jt.length;re<_e;re++){const ye=Jt[re],$t=It[ye.materialIndex];$t&&$t.visible&&I.push(N,Qt,$t,_t,pe.z,ye)}}else It.visible&&I.push(N,Qt,It,_t,pe.z,null)}}const Ht=N.children;for(let Qt=0,It=Ht.length;Qt<It;Qt++)Zn(Ht[Qt],et,_t,ft)}function ui(N,et,_t,ft){const{opaque:ut,transmissive:Ht,transparent:Qt}=N;Q.setupLightsView(_t),oe===!0&&Ut.setGlobalState(z.clippingPlanes,_t),ft&&ie.viewport(U.copy(ft)),ut.length>0&&_n(ut,et,_t),Ht.length>0&&_n(Ht,et,_t),Qt.length>0&&_n(Qt,et,_t),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Mn(N,et,_t,ft){if((_t.isScene===!0?_t.overrideMaterial:null)!==null)return;if(Q.state.transmissionRenderTarget[ft.id]===void 0){const $t=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");Q.state.transmissionRenderTarget[ft.id]=new Ca(1,1,{generateMipmaps:!0,type:$t?sr:ia,minFilter:As,samples:Math.max(4,Xe.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const Ht=Q.state.transmissionRenderTarget[ft.id],Qt=ft.viewport||U;Ht.setSize(Qt.z*z.transmissionResolutionScale,Qt.w*z.transmissionResolutionScale);const It=z.getRenderTarget(),Jt=z.getActiveCubeFace(),re=z.getActiveMipmapLevel();z.setRenderTarget(Ht),z.getClearColor(ct),bt=z.getClearAlpha(),bt<1&&z.setClearColor(16777215,.5),z.clear(),Ee&&Xt.render(_t);const _e=z.toneMapping;z.toneMapping=Ra;const ye=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),Q.setupLightsView(ft),oe===!0&&Ut.setGlobalState(z.clippingPlanes,ft),_n(N,_t,ft),st.updateMultisampleRenderTarget(Ht),st.updateRenderTargetMipmap(Ht),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ae=0,cn=et.length;Ae<cn;Ae++){const fn=et[Ae],{object:Ie,geometry:En,material:Vt,group:Wn}=fn;if(Vt.side===nr&&Ie.layers.test(ft.layers)){const Se=Vt.side;Vt.side=bi,Vt.needsUpdate=!0,Ci(Ie,_t,ft,En,Vt,Wn),Vt.side=Se,Vt.needsUpdate=!0,$t=!0}}$t===!0&&(st.updateMultisampleRenderTarget(Ht),st.updateRenderTargetMipmap(Ht))}z.setRenderTarget(It,Jt,re),z.setClearColor(ct,bt),ye!==void 0&&(ft.viewport=ye),z.toneMapping=_e}function _n(N,et,_t){const ft=et.isScene===!0?et.overrideMaterial:null;for(let ut=0,Ht=N.length;ut<Ht;ut++){const Qt=N[ut],{object:It,geometry:Jt,group:re}=Qt;let _e=Qt.material;_e.allowOverride===!0&&ft!==null&&(_e=ft),It.layers.test(_t.layers)&&Ci(It,et,_t,Jt,_e,re)}}function Ci(N,et,_t,ft,ut,Ht){N.onBeforeRender(z,et,_t,ft,ut,Ht),N.modelViewMatrix.multiplyMatrices(_t.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ut.onBeforeRender(z,et,_t,ft,N,Ht),ut.transparent===!0&&ut.side===nr&&ut.forceSinglePass===!1?(ut.side=bi,ut.needsUpdate=!0,z.renderBufferDirect(_t,et,ft,ut,N,Ht),ut.side=Zr,ut.needsUpdate=!0,z.renderBufferDirect(_t,et,ft,ut,N,Ht),ut.side=nr):z.renderBufferDirect(_t,et,ft,ut,N,Ht),N.onAfterRender(z,et,_t,ft,ut,Ht)}function wi(N,et,_t){et.isScene!==!0&&(et=Ve);const ft=A.get(N),ut=Q.state.lights,Ht=Q.state.shadowsArray,Qt=ut.state.version,It=zt.getParameters(N,ut.state,Ht,et,_t),Jt=zt.getProgramCacheKey(It);let re=ft.programs;ft.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?et.environment:null,ft.fog=et.fog;const _e=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ft.envMap=Et.get(N.envMap||ft.environment,_e),ft.envMapRotation=ft.environment!==null&&N.envMap===null?et.environmentRotation:N.envMapRotation,re===void 0&&(N.addEventListener("dispose",Le),re=new Map,ft.programs=re);let ye=re.get(Jt);if(ye!==void 0){if(ft.currentProgram===ye&&ft.lightsStateVersion===Qt)return Kr(N,It),ye}else It.uniforms=zt.getUniforms(N),N.onBeforeCompile(It,z),ye=zt.acquireProgram(It,Jt),re.set(Jt,ye),ft.uniforms=It.uniforms;const $t=ft.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&($t.clippingPlanes=Ut.uniform),Kr(N,It),ft.needsLights=fr(N),ft.lightsStateVersion=Qt,ft.needsLights&&($t.ambientLightColor.value=ut.state.ambient,$t.lightProbe.value=ut.state.probe,$t.directionalLights.value=ut.state.directional,$t.directionalLightShadows.value=ut.state.directionalShadow,$t.spotLights.value=ut.state.spot,$t.spotLightShadows.value=ut.state.spotShadow,$t.rectAreaLights.value=ut.state.rectArea,$t.ltc_1.value=ut.state.rectAreaLTC1,$t.ltc_2.value=ut.state.rectAreaLTC2,$t.pointLights.value=ut.state.point,$t.pointLightShadows.value=ut.state.pointShadow,$t.hemisphereLights.value=ut.state.hemi,$t.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,$t.spotLightMatrix.value=ut.state.spotLightMatrix,$t.spotLightMap.value=ut.state.spotLightMap,$t.pointShadowMatrix.value=ut.state.pointShadowMatrix),ft.currentProgram=ye,ft.uniformsList=null,ye}function ga(N){if(N.uniformsList===null){const et=N.currentProgram.getUniforms();N.uniformsList=Ic.seqWithValue(et.seq,N.uniforms)}return N.uniformsList}function Kr(N,et){const _t=A.get(N);_t.outputColorSpace=et.outputColorSpace,_t.batching=et.batching,_t.batchingColor=et.batchingColor,_t.instancing=et.instancing,_t.instancingColor=et.instancingColor,_t.instancingMorph=et.instancingMorph,_t.skinning=et.skinning,_t.morphTargets=et.morphTargets,_t.morphNormals=et.morphNormals,_t.morphColors=et.morphColors,_t.morphTargetsCount=et.morphTargetsCount,_t.numClippingPlanes=et.numClippingPlanes,_t.numIntersection=et.numClipIntersection,_t.vertexAlphas=et.vertexAlphas,_t.vertexTangents=et.vertexTangents,_t.toneMapping=et.toneMapping}function cr(N,et,_t,ft,ut){et.isScene!==!0&&(et=Ve),st.resetTextureUnits();const Ht=et.fog,Qt=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial?et.environment:null,It=K===null?z.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Lo,Jt=ft.isMeshStandardMaterial||ft.isMeshLambertMaterial&&!ft.envMap||ft.isMeshPhongMaterial&&!ft.envMap,re=Et.get(ft.envMap||Qt,Jt),_e=ft.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,ye=!!_t.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),$t=!!_t.morphAttributes.position,Ae=!!_t.morphAttributes.normal,cn=!!_t.morphAttributes.color;let fn=Ra;ft.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(fn=z.toneMapping);const Ie=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,En=Ie!==void 0?Ie.length:0,Vt=A.get(ft),Wn=Q.state.lights;if(oe===!0&&(ce===!0||N!==rt)){const pn=N===rt&&ft.id===lt;Ut.setState(ft,N,pn)}let Se=!1;ft.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Wn.state.version||Vt.outputColorSpace!==It||ut.isBatchedMesh&&Vt.batching===!1||!ut.isBatchedMesh&&Vt.batching===!0||ut.isBatchedMesh&&Vt.batchingColor===!0&&ut.colorTexture===null||ut.isBatchedMesh&&Vt.batchingColor===!1&&ut.colorTexture!==null||ut.isInstancedMesh&&Vt.instancing===!1||!ut.isInstancedMesh&&Vt.instancing===!0||ut.isSkinnedMesh&&Vt.skinning===!1||!ut.isSkinnedMesh&&Vt.skinning===!0||ut.isInstancedMesh&&Vt.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&Vt.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&Vt.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&Vt.instancingMorph===!1&&ut.morphTexture!==null||Vt.envMap!==re||ft.fog===!0&&Vt.fog!==Ht||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Ut.numPlanes||Vt.numIntersection!==Ut.numIntersection)||Vt.vertexAlphas!==_e||Vt.vertexTangents!==ye||Vt.morphTargets!==$t||Vt.morphNormals!==Ae||Vt.morphColors!==cn||Vt.toneMapping!==fn||Vt.morphTargetsCount!==En)&&(Se=!0):(Se=!0,Vt.__version=ft.version);let Nn=Vt.currentProgram;Se===!0&&(Nn=wi(ft,et,ut));let ii=!1,gi=!1,ci=!1;const Ye=Nn.getUniforms(),yn=Vt.uniforms;if(ie.useProgram(Nn.program)&&(ii=!0,gi=!0,ci=!0),ft.id!==lt&&(lt=ft.id,gi=!0),ii||rt!==N){ie.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Ye.setValue(J,"projectionMatrix",N.projectionMatrix),Ye.setValue(J,"viewMatrix",N.matrixWorldInverse);const vi=Ye.map.cameraPosition;vi!==void 0&&vi.setValue(J,fe.setFromMatrixPosition(N.matrixWorld)),Xe.logarithmicDepthBuffer&&Ye.setValue(J,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Ye.setValue(J,"isOrthographic",N.isOrthographicCamera===!0),rt!==N&&(rt=N,gi=!0,ci=!0)}if(Vt.needsLights&&(Wn.state.directionalShadowMap.length>0&&Ye.setValue(J,"directionalShadowMap",Wn.state.directionalShadowMap,st),Wn.state.spotShadowMap.length>0&&Ye.setValue(J,"spotShadowMap",Wn.state.spotShadowMap,st),Wn.state.pointShadowMap.length>0&&Ye.setValue(J,"pointShadowMap",Wn.state.pointShadowMap,st)),ut.isSkinnedMesh){Ye.setOptional(J,ut,"bindMatrix"),Ye.setOptional(J,ut,"bindMatrixInverse");const pn=ut.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ye.setValue(J,"boneTexture",pn.boneTexture,st))}ut.isBatchedMesh&&(Ye.setOptional(J,ut,"batchingTexture"),Ye.setValue(J,"batchingTexture",ut._matricesTexture,st),Ye.setOptional(J,ut,"batchingIdTexture"),Ye.setValue(J,"batchingIdTexture",ut._indirectTexture,st),Ye.setOptional(J,ut,"batchingColorTexture"),ut._colorsTexture!==null&&Ye.setValue(J,"batchingColorTexture",ut._colorsTexture,st));const jn=_t.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&Zt.update(ut,_t,Nn),(gi||Vt.receiveShadow!==ut.receiveShadow)&&(Vt.receiveShadow=ut.receiveShadow,Ye.setValue(J,"receiveShadow",ut.receiveShadow)),(ft.isMeshStandardMaterial||ft.isMeshLambertMaterial||ft.isMeshPhongMaterial)&&ft.envMap===null&&et.environment!==null&&(yn.envMapIntensity.value=et.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=Jb()),gi&&(Ye.setValue(J,"toneMappingExposure",z.toneMappingExposure),Vt.needsLights&&ra(yn,ci),Ht&&ft.fog===!0&&le.refreshFogUniforms(yn,Ht),le.refreshMaterialUniforms(yn,ft,Mt,it,Q.state.transmissionRenderTarget[N.id]),Ic.upload(J,ga(Vt),yn,st)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Ic.upload(J,ga(Vt),yn,st),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Ye.setValue(J,"center",ut.center),Ye.setValue(J,"modelViewMatrix",ut.modelViewMatrix),Ye.setValue(J,"normalMatrix",ut.normalMatrix),Ye.setValue(J,"modelMatrix",ut.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const pn=ft.uniformsGroups;for(let vi=0,Vi=pn.length;vi<Vi;vi++){const Xi=pn[vi];Kt.update(Xi,Nn),Kt.bind(Xi,Nn)}}return Nn}function ra(N,et){N.ambientLightColor.needsUpdate=et,N.lightProbe.needsUpdate=et,N.directionalLights.needsUpdate=et,N.directionalLightShadows.needsUpdate=et,N.pointLights.needsUpdate=et,N.pointLightShadows.needsUpdate=et,N.spotLights.needsUpdate=et,N.spotLightShadows.needsUpdate=et,N.rectAreaLights.needsUpdate=et,N.hemisphereLights.needsUpdate=et}function fr(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(N,et,_t){const ft=A.get(N);ft.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),A.get(N.texture).__webglTexture=et,A.get(N.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:_t,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,et){const _t=A.get(N);_t.__webglFramebuffer=et,_t.__useDefaultFramebuffer=et===void 0};const Ln=J.createFramebuffer();this.setRenderTarget=function(N,et=0,_t=0){K=N,D=et,j=_t;let ft=null,ut=!1,Ht=!1;if(N){const It=A.get(N);if(It.__useDefaultFramebuffer!==void 0){ie.bindFramebuffer(J.FRAMEBUFFER,It.__webglFramebuffer),U.copy(N.viewport),F.copy(N.scissor),at=N.scissorTest,ie.viewport(U),ie.scissor(F),ie.setScissorTest(at),lt=-1;return}else if(It.__webglFramebuffer===void 0)st.setupRenderTarget(N);else if(It.__hasExternalTextures)st.rebindTextures(N,A.get(N.texture).__webglTexture,A.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const _e=N.depthTexture;if(It.__boundDepthTexture!==_e){if(_e!==null&&A.has(_e)&&(N.width!==_e.image.width||N.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(N)}}const Jt=N.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ht=!0);const re=A.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(re[et])?ft=re[et][_t]:ft=re[et],ut=!0):N.samples>0&&st.useMultisampledRTT(N)===!1?ft=A.get(N).__webglMultisampledFramebuffer:Array.isArray(re)?ft=re[_t]:ft=re,U.copy(N.viewport),F.copy(N.scissor),at=N.scissorTest}else U.copy(pt).multiplyScalar(Mt).floor(),F.copy(Rt).multiplyScalar(Mt).floor(),at=Ot;if(_t!==0&&(ft=Ln),ie.bindFramebuffer(J.FRAMEBUFFER,ft)&&ie.drawBuffers(N,ft),ie.viewport(U),ie.scissor(F),ie.setScissorTest(at),ut){const It=A.get(N.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+et,It.__webglTexture,_t)}else if(Ht){const It=et;for(let Jt=0;Jt<N.textures.length;Jt++){const re=A.get(N.textures[Jt]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Jt,re.__webglTexture,_t,It)}}else if(N!==null&&_t!==0){const It=A.get(N.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,It.__webglTexture,_t)}lt=-1},this.readRenderTargetPixels=function(N,et,_t,ft,ut,Ht,Qt,It=0){if(!(N&&N.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=A.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Qt!==void 0&&(Jt=Jt[Qt]),Jt){ie.bindFramebuffer(J.FRAMEBUFFER,Jt);try{const re=N.textures[It],_e=re.format,ye=re.type;if(N.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+It),!Xe.textureFormatReadable(_e)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(ye)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=N.width-ft&&_t>=0&&_t<=N.height-ut&&J.readPixels(et,_t,ft,ut,Bt.convert(_e),Bt.convert(ye),Ht)}finally{const re=K!==null?A.get(K).__webglFramebuffer:null;ie.bindFramebuffer(J.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(N,et,_t,ft,ut,Ht,Qt,It=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=A.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Qt!==void 0&&(Jt=Jt[Qt]),Jt)if(et>=0&&et<=N.width-ft&&_t>=0&&_t<=N.height-ut){ie.bindFramebuffer(J.FRAMEBUFFER,Jt);const re=N.textures[It],_e=re.format,ye=re.type;if(N.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+It),!Xe.textureFormatReadable(_e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,$t),J.bufferData(J.PIXEL_PACK_BUFFER,Ht.byteLength,J.STREAM_READ),J.readPixels(et,_t,ft,ut,Bt.convert(_e),Bt.convert(ye),0);const Ae=K!==null?A.get(K).__webglFramebuffer:null;ie.bindFramebuffer(J.FRAMEBUFFER,Ae);const cn=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await yS(J,cn,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,$t),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Ht),J.deleteBuffer($t),J.deleteSync(cn),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,et=null,_t=0){const ft=Math.pow(2,-_t),ut=Math.floor(N.image.width*ft),Ht=Math.floor(N.image.height*ft),Qt=et!==null?et.x:0,It=et!==null?et.y:0;st.setTexture2D(N,0),J.copyTexSubImage2D(J.TEXTURE_2D,_t,0,0,Qt,It,ut,Ht),ie.unbindTexture()};const Hn=J.createFramebuffer(),Di=J.createFramebuffer();this.copyTextureToTexture=function(N,et,_t=null,ft=null,ut=0,Ht=0){let Qt,It,Jt,re,_e,ye,$t,Ae,cn;const fn=N.isCompressedTexture?N.mipmaps[Ht]:N.image;if(_t!==null)Qt=_t.max.x-_t.min.x,It=_t.max.y-_t.min.y,Jt=_t.isBox3?_t.max.z-_t.min.z:1,re=_t.min.x,_e=_t.min.y,ye=_t.isBox3?_t.min.z:0;else{const yn=Math.pow(2,-ut);Qt=Math.floor(fn.width*yn),It=Math.floor(fn.height*yn),N.isDataArrayTexture?Jt=fn.depth:N.isData3DTexture?Jt=Math.floor(fn.depth*yn):Jt=1,re=0,_e=0,ye=0}ft!==null?($t=ft.x,Ae=ft.y,cn=ft.z):($t=0,Ae=0,cn=0);const Ie=Bt.convert(et.format),En=Bt.convert(et.type);let Vt;et.isData3DTexture?(st.setTexture3D(et,0),Vt=J.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(st.setTexture2DArray(et,0),Vt=J.TEXTURE_2D_ARRAY):(st.setTexture2D(et,0),Vt=J.TEXTURE_2D),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,et.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,et.unpackAlignment);const Wn=J.getParameter(J.UNPACK_ROW_LENGTH),Se=J.getParameter(J.UNPACK_IMAGE_HEIGHT),Nn=J.getParameter(J.UNPACK_SKIP_PIXELS),ii=J.getParameter(J.UNPACK_SKIP_ROWS),gi=J.getParameter(J.UNPACK_SKIP_IMAGES);J.pixelStorei(J.UNPACK_ROW_LENGTH,fn.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,fn.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,re),J.pixelStorei(J.UNPACK_SKIP_ROWS,_e),J.pixelStorei(J.UNPACK_SKIP_IMAGES,ye);const ci=N.isDataArrayTexture||N.isData3DTexture,Ye=et.isDataArrayTexture||et.isData3DTexture;if(N.isDepthTexture){const yn=A.get(N),jn=A.get(et),pn=A.get(yn.__renderTarget),vi=A.get(jn.__renderTarget);ie.bindFramebuffer(J.READ_FRAMEBUFFER,pn.__webglFramebuffer),ie.bindFramebuffer(J.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Vi=0;Vi<Jt;Vi++)ci&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,A.get(N).__webglTexture,ut,ye+Vi),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,A.get(et).__webglTexture,Ht,cn+Vi)),J.blitFramebuffer(re,_e,Qt,It,$t,Ae,Qt,It,J.DEPTH_BUFFER_BIT,J.NEAREST);ie.bindFramebuffer(J.READ_FRAMEBUFFER,null),ie.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(ut!==0||N.isRenderTargetTexture||A.has(N)){const yn=A.get(N),jn=A.get(et);ie.bindFramebuffer(J.READ_FRAMEBUFFER,Hn),ie.bindFramebuffer(J.DRAW_FRAMEBUFFER,Di);for(let pn=0;pn<Jt;pn++)ci?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,yn.__webglTexture,ut,ye+pn):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,yn.__webglTexture,ut),Ye?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,jn.__webglTexture,Ht,cn+pn):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,jn.__webglTexture,Ht),ut!==0?J.blitFramebuffer(re,_e,Qt,It,$t,Ae,Qt,It,J.COLOR_BUFFER_BIT,J.NEAREST):Ye?J.copyTexSubImage3D(Vt,Ht,$t,Ae,cn+pn,re,_e,Qt,It):J.copyTexSubImage2D(Vt,Ht,$t,Ae,re,_e,Qt,It);ie.bindFramebuffer(J.READ_FRAMEBUFFER,null),ie.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Ye?N.isDataTexture||N.isData3DTexture?J.texSubImage3D(Vt,Ht,$t,Ae,cn,Qt,It,Jt,Ie,En,fn.data):et.isCompressedArrayTexture?J.compressedTexSubImage3D(Vt,Ht,$t,Ae,cn,Qt,It,Jt,Ie,fn.data):J.texSubImage3D(Vt,Ht,$t,Ae,cn,Qt,It,Jt,Ie,En,fn):N.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Ht,$t,Ae,Qt,It,Ie,En,fn.data):N.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Ht,$t,Ae,fn.width,fn.height,Ie,fn.data):J.texSubImage2D(J.TEXTURE_2D,Ht,$t,Ae,Qt,It,Ie,En,fn);J.pixelStorei(J.UNPACK_ROW_LENGTH,Wn),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Se),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Nn),J.pixelStorei(J.UNPACK_SKIP_ROWS,ii),J.pixelStorei(J.UNPACK_SKIP_IMAGES,gi),Ht===0&&et.generateMipmaps&&J.generateMipmap(Vt),ie.unbindTexture()},this.initRenderTarget=function(N){A.get(N).__webglFramebuffer===void 0&&st.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?st.setTextureCube(N,0):N.isData3DTexture?st.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?st.setTexture2DArray(N,0):st.setTexture2D(N,0),ie.unbindTexture()},this.resetState=function(){D=0,j=0,K=null,ie.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),i.unpackColorSpace=ke._getUnpackColorSpace()}}class tA{mesh;edges;position;constructor(e,i){this.position=i.clone();const r=new ws(1,1,1),l=new YS(r),u=new Zc({color:65535,linewidth:2});this.edges=new Zp(l,u),this.edges.position.copy(i);const d=new Yc({color:65535,transparent:!0,opacity:.15,wireframe:!1});this.mesh=new ma(r,d),this.mesh.position.copy(i),e.add(this.edges),e.add(this.mesh)}dispose(e){e.remove(this.edges),e.remove(this.mesh),this.edges.geometry.dispose(),this.edges.material.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose()}}function eA(){const o=An.useRef(null),e=An.useRef(null),i=An.useRef(null),r=An.useRef(null),l=An.useRef(null),u=An.useRef(null),d=An.useRef([]),g=An.useRef(null),[v,p]=An.useState({gesture:"NONE",landmarks:[],isActive:!1,handType:null}),[S,E]=An.useState({gesture:"NONE",landmarks:[],isActive:!1,handType:null}),[x,b]=An.useState(0),[C,O]=An.useState(!1),[T,M]=An.useState(null),[P,X]=An.useState("BUILD"),I=An.useRef(0),Q=An.useRef(new mt(0,0,0)),Y=An.useRef({x:0,y:0}),q=An.useCallback(B=>{if(!B||B.length<21)return"NONE";const D=B[0],j=[8,12,16,20],K=[6,10,14,18];let lt=0,rt=0;for(let bt=0;bt<j.length;bt++){const V=B[j[bt]],it=B[K[bt]],Mt=Math.sqrt(Math.pow(V.x-D.x,2)+Math.pow(V.y-D.y,2)),Pt=Math.sqrt(Math.pow(it.x-D.x,2)+Math.pow(it.y-D.y,2));Mt>Pt*1.15?lt++:rt++}const U=B[4],F=B[3],at=Math.sqrt(Math.pow(U.x-D.x,2)+Math.pow(U.y-D.y,2)),ct=Math.sqrt(Math.pow(F.x-D.x,2)+Math.pow(F.y-D.y,2));return at>ct*1.1&&lt++,lt>=4?"PALM":rt>=3?"FIST":"NONE"},[]);An.useEffect(()=>{if(!i.current)return;const B=new FS;B.background=new We(657930),r.current=B;const D=new na(60,window.innerWidth/window.innerHeight,.1,1e3);D.position.set(10,8,10),D.lookAt(0,0,0),l.current=D;const j=new $b({canvas:i.current,antialias:!0,alpha:!0});j.setSize(window.innerWidth,window.innerHeight),j.setPixelRatio(window.devicePixelRatio),u.current=j;const K=new aM(30,30,65535,17476);K.position.y=-.5,B.add(K);const lt=new ws(1.02,1.02,1.02),rt=new Yc({color:65535,transparent:!0,opacity:.4,wireframe:!0}),U=new ma(lt,rt);U.position.set(0,0,0),B.add(U),g.current=U;const F=new rM(3);B.add(F);const at=()=>{requestAnimationFrame(at),j.render(B,D)};at();const ct=()=>{l.current&&u.current&&(l.current.aspect=window.innerWidth/window.innerHeight,l.current.updateProjectionMatrix(),u.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",ct),()=>{window.removeEventListener("resize",ct),j.dispose()}},[]),An.useEffect(()=>{if(!o.current)return;const B=new Fy.Hands({locateFile:j=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${j}`});return B.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),B.onResults(j=>{O(!0);let K={gesture:"NONE",landmarks:[],isActive:!1,handType:null},lt={gesture:"NONE",landmarks:[],isActive:!1,handType:null};j.multiHandLandmarks&&j.multiHandLandmarks.length>0&&j.multiHandLandmarks.forEach((rt,U)=>{const F=q(rt),at=j.multiHandedness?.[U]?.label||"Left",ct={gesture:F,landmarks:rt.map(bt=>({x:bt.x,y:bt.y,z:bt.z})),isActive:!0,handType:at==="Left"?"RIGHT":"LEFT"};at==="Left"?lt=ct:K=ct}),p(K),E(lt),w(j)}),new Iy.Camera(o.current,{onFrame:async()=>{await B.send({image:o.current})},width:1280,height:720}).start().catch(j=>{console.error("Camera error:",j),M("Unable to access camera. Please allow camera permissions.")}),()=>{B.close()}},[q]);const w=B=>{const D=e.current;if(!D)return;const j=D.getContext("2d");j&&(j.clearRect(0,0,D.width,D.height),B.multiHandLandmarks&&B.multiHandLandmarks.forEach((K,lt)=>{const U=B.multiHandedness?.[lt]?.label==="Right"?"#00ff00":"#00ffff";j.strokeStyle=U,j.lineWidth=3,[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]].forEach(([at,ct])=>{j.beginPath(),j.moveTo(K[at].x*D.width,K[at].y*D.height),j.lineTo(K[ct].x*D.width,K[ct].y*D.height),j.stroke()}),K.forEach((at,ct)=>{j.beginPath(),j.arc(at.x*D.width,at.y*D.height,8,0,2*Math.PI),j.fillStyle=U+"44",j.fill(),j.beginPath(),j.arc(at.x*D.width,at.y*D.height,4,0,2*Math.PI),j.fillStyle=U,j.fill(),ct===8&&(j.beginPath(),j.arc(at.x*D.width,at.y*D.height,10,0,2*Math.PI),j.strokeStyle="#ffffff",j.lineWidth=2,j.stroke())})}))};An.useEffect(()=>{if(!(!r.current||!l.current)){if(v.isActive&&v.gesture==="PALM"&&v.landmarks.length>0){const B=v.landmarks[9],D=(B.x-.5)*Math.PI*1.5,j=(B.y-.5)*Math.PI*.5;Y.current.y+=(D-Y.current.y)*.1,Y.current.x+=(j-Y.current.x)*.1;const K=15;l.current.position.x=Math.sin(Y.current.y)*K,l.current.position.z=Math.cos(Y.current.y)*K,l.current.position.y=8+Math.sin(Y.current.x)*4,l.current.lookAt(0,0,0)}if(S.isActive&&S.landmarks.length>0){const B=S.landmarks[8],D=Math.round((1-B.x)*12-6),j=Math.round((1-B.y)*10-3),K=Math.round((B.z+.1)*8),lt=new mt(Math.max(-10,Math.min(10,D)),Math.max(0,Math.min(10,j)),Math.max(-10,Math.min(10,K)));if(Q.current.lerp(lt,.3),g.current&&g.current.position.copy(Q.current),S.gesture==="FIST"){const rt=Date.now();if(rt-I.current>400&&!d.current.some(F=>F.position.distanceTo(Q.current)<.5)&&r.current){const F=new tA(r.current,Q.current);if(d.current.push(F),b(d.current.length),I.current=rt,g.current){const at=g.current.material;at.color.setHex(65280),setTimeout(()=>{at.color.setHex(65535)},150)}}}}}},[v,S]);const z=()=>{r.current&&(d.current.forEach(B=>B.dispose(r.current)),d.current=[],b(0))};return ne.jsxs("div",{"code-path":"src/App.tsx:428:5",className:"app",children:[ne.jsxs("div",{"code-path":"src/App.tsx:430:7",className:"header",children:[ne.jsxs("div",{"code-path":"src/App.tsx:431:9",className:"title",children:[ne.jsx("span",{"code-path":"src/App.tsx:432:11",className:"title-icon",children:"◆"}),ne.jsx("span",{"code-path":"src/App.tsx:433:11",children:"SagatoBuild_v0.4"}),ne.jsx("span",{"code-path":"src/App.tsx:434:11",className:"title-version",children:"(Mega Blue)"})]}),ne.jsxs("div",{"code-path":"src/App.tsx:436:9",className:"controls",children:[ne.jsx("button",{"code-path":"src/App.tsx:437:11",className:`control-btn ${P==="SKETCH"?"active":""}`,onClick:()=>X("SKETCH"),children:"SKETCH"}),ne.jsx("button",{"code-path":"src/App.tsx:443:11",className:`control-btn ${P==="BUILD"?"active":""}`,onClick:()=>X("BUILD"),children:"BUILD"}),ne.jsx("button",{"code-path":"src/App.tsx:449:11",className:`control-btn ${P==="ROTATE"?"active":""}`,onClick:()=>X("ROTATE"),children:"ROTATE (VIEW)"})]}),ne.jsxs("div",{"code-path":"src/App.tsx:456:9",className:"status",children:[ne.jsx("span",{"code-path":"src/App.tsx:457:11",className:`status-indicator ${C?"active":""}`,children:C?"●":"○"}),ne.jsx("span",{"code-path":"src/App.tsx:460:11",children:C?"READY":"INITIALIZING..."})]})]}),ne.jsxs("div",{"code-path":"src/App.tsx:465:7",className:"main-content",children:[ne.jsxs("div",{"code-path":"src/App.tsx:467:9",className:"left-panel",children:[ne.jsx("div",{"code-path":"src/App.tsx:468:11",className:"panel-header",children:ne.jsx("span",{"code-path":"src/App.tsx:469:13",children:"HAND TRACKING CAMERA"})}),ne.jsxs("div",{"code-path":"src/App.tsx:471:11",className:"video-container large",children:[ne.jsx("video",{"code-path":"src/App.tsx:472:13",ref:o,className:"video-feed",playsInline:!0,muted:!0}),ne.jsx("canvas",{"code-path":"src/App.tsx:478:13",ref:e,className:"landmark-canvas",width:480,height:360}),T&&ne.jsx("div",{"code-path":"src/App.tsx:485:15",className:"camera-error",children:T})]}),ne.jsxs("div",{"code-path":"src/App.tsx:492:11",className:"hand-status",children:[ne.jsxs("div",{"code-path":"src/App.tsx:493:13",className:`hand-info ${v.isActive?"active":""}`,children:[ne.jsxs("div",{"code-path":"src/App.tsx:494:15",className:"hand-row",children:[ne.jsx("span",{"code-path":"src/App.tsx:495:17",className:"hand-label",children:"LEFT HAND"}),ne.jsx("span",{"code-path":"src/App.tsx:496:17",className:"hand-gesture",children:v.isActive?v.gesture:"---"})]}),ne.jsx("span",{"code-path":"src/App.tsx:498:15",className:"hand-action",children:v.gesture==="PALM"?"ROTATE VIEW":"---"})]}),ne.jsxs("div",{"code-path":"src/App.tsx:500:13",className:`hand-info ${S.isActive?"active":""}`,children:[ne.jsxs("div",{"code-path":"src/App.tsx:501:15",className:"hand-row",children:[ne.jsx("span",{"code-path":"src/App.tsx:502:17",className:"hand-label",children:"RIGHT HAND"}),ne.jsx("span",{"code-path":"src/App.tsx:503:17",className:"hand-gesture",children:S.isActive?S.gesture:"---"})]}),ne.jsx("span",{"code-path":"src/App.tsx:505:15",className:"hand-action",children:S.gesture==="FIST"?"PLACE BLOCK":"MOVE CURSOR"})]})]}),ne.jsx("div",{"code-path":"src/App.tsx:510:11",className:"stats",children:ne.jsxs("div",{"code-path":"src/App.tsx:511:13",className:"stat-item",children:[ne.jsx("span",{"code-path":"src/App.tsx:512:15",className:"stat-label",children:"BLOCKS PLACED:"}),ne.jsx("span",{"code-path":"src/App.tsx:513:15",className:"stat-value",children:x})]})}),ne.jsx("button",{"code-path":"src/App.tsx:517:11",className:"clear-btn",onClick:z,children:"CLEAR ALL BLOCKS"})]}),ne.jsxs("div",{"code-path":"src/App.tsx:523:9",className:"center-panel",children:[ne.jsx("canvas",{"code-path":"src/App.tsx:524:11",ref:i,className:"three-canvas"}),ne.jsxs("div",{"code-path":"src/App.tsx:530:11",className:"overlay-info",children:[ne.jsxs("div",{"code-path":"src/App.tsx:531:13",className:"overlay-item",children:[ne.jsx("span",{"code-path":"src/App.tsx:532:15",className:"overlay-label",children:"MODE"}),ne.jsxs("span",{"code-path":"src/App.tsx:533:15",className:"overlay-value",children:["(",P,")"]})]}),ne.jsxs("div",{"code-path":"src/App.tsx:535:13",className:"overlay-item",children:[ne.jsx("span",{"code-path":"src/App.tsx:536:15",className:"overlay-label",children:"LEFT HAND"}),ne.jsx("span",{"code-path":"src/App.tsx:537:15",className:"overlay-value",children:"(PALM): ROTATE"})]}),ne.jsxs("div",{"code-path":"src/App.tsx:539:13",className:"overlay-item",children:[ne.jsx("span",{"code-path":"src/App.tsx:540:15",className:"overlay-label",children:"RIGHT HAND"}),ne.jsx("span",{"code-path":"src/App.tsx:541:15",className:"overlay-value",children:"(FIST): BUILD"})]})]})]}),ne.jsxs("div",{"code-path":"src/App.tsx:547:9",className:"right-panel",children:[ne.jsx("div",{"code-path":"src/App.tsx:548:11",className:"code-header",children:ne.jsx("span",{"code-path":"src/App.tsx:549:13",children:"WIREFRAME.html"})}),ne.jsx("div",{"code-path":"src/App.tsx:551:11",className:"code-content",children:ne.jsx("pre",{"code-path":"src/App.tsx:552:13",children:`// SagatoBuild 3D Wireframe System
// Hand-tracking enabled

function initScene() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60, window.innerWidth / 
    window.innerHeight, 0.1, 1000
  );
  
  const renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  
  renderer.setSize(
    window.innerWidth, 
    window.innerHeight
  );
  
  document.body.appendChild(
    renderer.domElement
  );
}

// Grid system
const gridHelper = new THREE.GridHelper(
  30, 30, 0x00ffff, 0x004444
);
scene.add(gridHelper);

// Hand tracking with MediaPipe
hands.onResults((results) => {
  if (results.multiHandLandmarks) {
    processGestures(
      results.multiHandLandmarks
    );
  }
});

// Build block on FIST gesture
function buildBlock(position) {
  const geometry = new THREE.BoxGeometry(
    1, 1, 1
  );
  const edges = new THREE.EdgesGeometry(
    geometry
  );
  const line = new THREE.LineSegments(
    edges, 
    new THREE.LineBasicMaterial({
      color: 0x00ffff
    })
  );
  line.position.copy(position);
  scene.add(line);
}

// Camera control with left hand
function updateCamera(handPosition) {
  const angleY = (handPosition.x - 0.5) * PI * 1.5;
  const angleX = (handPosition.y - 0.5) * PI * 0.5;
  
  const radius = 15;
  camera.position.x = sin(angleY) * radius;
  camera.position.z = cos(angleY) * radius;
  camera.position.y = 8 + sin(angleX) * 4;
  camera.lookAt(0, 0, 0);
}

// Cursor control with right hand
function updateCursor(indexTip) {
  const gridX = round((1 - x) * 12 - 6);
  const gridY = round((1 - y) * 10 - 3);
  const gridZ = round((z + 0.1) * 8);
  
  cursor.position.set(
    clamp(gridX, -10, 10),
    clamp(gridY, 0, 10),
    clamp(gridZ, -10, 10)
  );
}

// Render loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();`})})]})]}),ne.jsxs("div",{"code-path":"src/App.tsx:646:7",className:"instructions",children:[ne.jsxs("div",{"code-path":"src/App.tsx:647:9",className:"instruction-item",children:[ne.jsx("span",{"code-path":"src/App.tsx:648:11",className:"instruction-key",children:"🖐️ PALM (Left)"}),ne.jsx("span",{"code-path":"src/App.tsx:649:11",children:"Rotate camera view"})]}),ne.jsxs("div",{"code-path":"src/App.tsx:651:9",className:"instruction-item",children:[ne.jsx("span",{"code-path":"src/App.tsx:652:11",className:"instruction-key",children:"🖐️ PALM (Right)"}),ne.jsx("span",{"code-path":"src/App.tsx:653:11",children:"Move cursor position"})]}),ne.jsxs("div",{"code-path":"src/App.tsx:655:9",className:"instruction-item",children:[ne.jsx("span",{"code-path":"src/App.tsx:656:11",className:"instruction-key",children:"✊ FIST (Right)"}),ne.jsx("span",{"code-path":"src/App.tsx:657:11",children:"Place block at cursor"})]})]})]})}Oy.createRoot(document.getElementById("root")).render(ne.jsx(An.StrictMode,{"code-path":"src/main.tsx:7:3",children:ne.jsx(eA,{"code-path":"src/main.tsx:8:5"})}));
