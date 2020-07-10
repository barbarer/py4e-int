(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ma=ia;
function na(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.D=b.prototype}
function oa(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.A=this.h=null}
function qa(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
oa.prototype.s=function(a){this.g=a};
function ra(a,b){a.h={fa:b,U:!0};a.f=a.l||a.j}
oa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function w(a,b,c){a.f=c;return{value:b}}
oa.prototype.v=function(a){this.f=a};
function sa(a){a.l=2;a.j=3}
function ta(a){a.l=0;a.h=null}
function ua(a){a.A=[a.h];a.l=0;a.j=0}
function va(a){var b=a.A.splice(0)[0];(b=a.h=a.h||b)?b.U?a.f=a.l||a.j:void 0!=b.v&&a.j<b.v?(a.f=b.v,a.h=null):a.f=a.j:a.f=0}
function wa(a){this.f=new oa;this.g=a}
function xa(a,b){qa(a.f);var c=a.f.i;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return za(a)}
function ya(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,ra(a.f,g),za(a)}a.f.i=null;d.call(a.f,f);return za(a)}
function za(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,ra(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.U)throw b.fa;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Aa(a){this.next=function(b){qa(a.f);a.f.i?b=ya(a,a.f.i.next,b,a.f.s):(a.f.s(b),b=za(a));return b};
this["throw"]=function(b){qa(a.f);a.f.i?b=ya(a,a.f.i["throw"],b,a.f.s):(ra(a.f,b),b=za(a));return b};
this["return"]=function(b){return xa(a,b)};
this[Symbol.iterator]=function(){return this}}
function y(a,b){var c=new Aa(new wa(b));ma&&a.prototype&&ma(c,a.prototype);return c}
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function z(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ca="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)z(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ca});
t("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.F),reject:g(this.j)}};
b.prototype.F=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.oa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.A(g):this.l(g)}};
b.prototype.A=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.da(h,g):this.l(g)};
b.prototype.j=function(g){this.m(2,g)};
b.prototype.l=function(g){this.m(1,g)};
b.prototype.m=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.s()};
b.prototype.s=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.oa=function(g){var h=this.i();g.G(h.resolve,h.reject)};
b.prototype.da=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,p){return"function"==typeof r?function(v){try{l(r(v))}catch(x){m(x)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.G(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.G=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).G(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){r[v]=x;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(k.value).G(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
t("Object.setPrototypeOf",function(a){return a||ma});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!z(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!z(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&z(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&z(k,g)&&z(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&z(k,g)&&z(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&z(h.g,l))for(var n=0;n<m.length;n++){var r=m[n];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:m,index:n,o:r}}return{id:l,list:m,index:-1,o:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.o?l.o.value=k:(l.o={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.o),this.f.previous.next=l.o,this.f.previous=l.o,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.o&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.o.previous.next=h.o.next,h.o.next.previous=h.o.previous,h.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).o};
e.prototype.get=function(h){return(h=d(this,h).o)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)z(b,d)&&c.push([d,b[d]]);return c}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var A=this||self;function B(a,b){for(var c=a.split("."),d=b||A,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Da(){}
function Ea(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Fa(a){var b=Ea(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ga(a){return"function"==Ea(a)}
function Ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ia(a){return Object.prototype.hasOwnProperty.call(a,Ja)&&a[Ja]||(a[Ja]=++Ka)}
var Ja="closure_uid_"+(1E9*Math.random()>>>0),Ka=0;function La(a,b,c){return a.call.apply(a.bind,arguments)}
function Ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=La:C=Ma;return C.apply(null,arguments)}
var E=Date.now;function F(a,b){var c=a.split("."),d=A;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function G(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function Na(a){return a}
;function Oa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Oa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
G(Oa,Error);Oa.prototype.name="CustomError";var Pa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Qa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ra(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Sa(a){return Array.prototype.concat.apply([],arguments)}
function Ta(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ua(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Fa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Wa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Xa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ya(a){var b=Za,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function $a(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ab(a){var b=Ea(a);if("object"==b||"array"==b){if(Ga(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=ab(a[c]);return b}return a}
var bb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<bb.length;f++)c=bb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var db;function eb(){if(void 0===db){var a=null,b=A.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Na,createScript:Na,createScriptURL:Na})}catch(c){A.console&&A.console.error(c.message)}db=a}else db=a}return db}
;function fb(a,b){this.g=a===gb&&b||"";this.f=hb}
function ib(a){return a instanceof fb&&a.constructor===fb&&a.f===hb?a.g:"type_error:Const"}
var hb={},gb={};var jb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},kb=/&/g,lb=/</g,mb=/>/g,nb=/"/g,ob=/'/g,pb=/\x00/g,qb=/[\x00&<>"']/;var rb;a:{var sb=A.navigator;if(sb){var tb=sb.userAgent;if(tb){rb=tb;break a}}rb=""}function I(a){return-1!=rb.indexOf(a)}
;function ub(){}
;var vb=I("Opera"),wb=I("Trident")||I("MSIE"),xb=I("Edge"),yb=I("Gecko")&&!(-1!=rb.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),zb=-1!=rb.toLowerCase().indexOf("webkit")&&!I("Edge");function Ab(){var a=A.document;return a?a.documentMode:void 0}
var Bb;a:{var Cb="",Db=function(){var a=rb;if(yb)return/rv:([^\);]+)(\)|;)/.exec(a);if(xb)return/Edge\/([\d\.]+)/.exec(a);if(wb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(zb)return/WebKit\/(\S+)/.exec(a);if(vb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Db&&(Cb=Db?Db[1]:"");if(wb){var Eb=Ab();if(null!=Eb&&Eb>parseFloat(Cb)){Bb=String(Eb);break a}}Bb=Cb}var Fb=Bb,Gb;if(A.document&&wb){var Hb=Ab();Gb=Hb?Hb:parseInt(Fb,10)||void 0}else Gb=void 0;var Ib=Gb;var Jb={},Kb=null;var J=window;function Lb(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Mb[b]?b=Mb[b]:(b=String(b),Mb[b]||(c=/function\s+([^\(]+)/m.exec(b),Mb[b]=c?c[1]:"[Anonymous]"),b=Mb[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Mb={};function Nb(a){this.f=a||{cookie:""}}
q=Nb.prototype;q.isEnabled=function(){return navigator.cookieEnabled};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ja;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.V}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(E()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=jb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{V:0,path:b,domain:c});return d};
q.isEmpty=function(){return!this.f.cookie};
q.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=jb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ob=new Nb("undefined"==typeof document?null:document);function Pb(a,b){this.width=a;this.height=b}
q=Pb.prototype;q.clone=function(){return new Pb(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.isEmpty=function(){return!(this.width*this.height)};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Qb(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var g={};for(c=d=0;e=f[c];c++){var h=e.className,k;if(k="function"==typeof h.split)k=0<=Pa(h.split(/\s+/),a);k&&(g[d++]=e)}g.length=d;return g}return f}
function Rb(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Sb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Tb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function K(a){return a.match(Tb)}
function Ub(a){return a?decodeURI(a):a}
function Vb(a){var b=K(a);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Wb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Wb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Xb(a){var b=[],c;for(c in a)Wb(c,a[c],b);return b.join("&")}
var Yb=/#|$/;function Zb(a){var b=$b;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function ac(){var a=[];Zb(function(b){a.push(b)});
return a}
var $b={pa:"allow-forms",qa:"allow-modals",ra:"allow-orientation-lock",sa:"allow-pointer-lock",ta:"allow-popups",ua:"allow-popups-to-escape-sandbox",va:"allow-presentation",wa:"allow-same-origin",xa:"allow-scripts",ya:"allow-top-navigation",za:"allow-top-navigation-by-user-activation"},bc=Wa(function(){return ac()});
function cc(){var a=Rb(),b={};H(bc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function dc(){this.h=this.h;this.i=this.i}
dc.prototype.h=!1;dc.prototype.dispose=function(){this.h||(this.h=!0,this.M())};
dc.prototype.M=function(){if(this.i)for(;this.i.length;)this.i.shift()()};function L(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;var ec=ib(new fb(gb,"//fonts.googleapis.com/css")),fc=eb();fc&&fc.createScriptURL(ec);var gc=(new Date).getTime();function hc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";
var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function ic(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],D=e[3],R=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var pa=D^v&(x^D);var Va=1518500249}else pa=v^x^D,Va=1859775393;else 60>p?(pa=v&x|D&(v|x),Va=2400959708):(pa=v^x^D,Va=3395469782);pa=((n<<5|n>>>27)&4294967295)+pa+R+Va+r[p]&4294967295;R=D;D=x;x=(v<<30|v>>>2)&4294967295;v=n;n=pa}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+x&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+R&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],v=0,x=n.length;v<x;++v)p.push(n.charCodeAt(v));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var v=24;0<=v;v-=8)n[r++]=e[p]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ea:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function jc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),kc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=kc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function kc(a){var b=ic();b.update(a);return b.ea().toLowerCase()}
;function lc(a){var b=hc(String(A.location.href)),c;(c=A.__SAPISID||A.__APISID||A.__OVERRIDE_SID)?c=!0:(c=new Nb(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?A.__SAPISID:A.__APISID,c||(c=new Nb(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(A.location.href);return d&&c&&b?[b,jc(hc(d),c,a||null)].join(" "):null}return null}
;function mc(){this.g=[];this.f=-1}
mc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
mc.prototype.get=function(a){return!!this.g[a]};
function nc(a){-1==a.f&&(a.f=Qa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function oc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
oc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function pc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function qc(a){A.setTimeout(function(){throw a;},0)}
var rc;function sc(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Rb();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.T;c.T=null;e()}};
return function(e){d.next={T:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function tc(){this.g=this.f=null}
var vc=new oc(function(){return new uc},function(a){a.reset()});
tc.prototype.add=function(a,b){var c=vc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
tc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function uc(){this.next=this.scope=this.f=null}
uc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
uc.prototype.reset=function(){this.next=this.scope=this.f=null};function wc(a,b){xc||yc();zc||(xc(),zc=!0);Ac.add(a,b)}
var xc;function yc(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);xc=function(){a.then(Bc)}}else xc=function(){var b=Bc;
!Ga(A.setImmediate)||A.Window&&A.Window.prototype&&!I("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(rc||(rc=sc()),rc(b)):A.setImmediate(b)}}
var zc=!1,Ac=new tc;function Bc(){for(var a;a=Ac.remove();){try{a.f.call(a.scope)}catch(b){qc(b)}pc(vc,a)}zc=!1}
;function Cc(){this.g=-1}
;function Dc(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
G(Dc,Cc);Dc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Ec(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Dc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Ec(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Ec(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Ec(this,e);f=0;break}}this.h=f;this.j+=b}};
Dc.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Ec(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var Fc="StopIteration"in A?A.StopIteration:{message:"StopIteration",stack:""};function Gc(){}
Gc.prototype.next=function(){throw Fc;};
Gc.prototype.B=function(){return this};
function Hc(a){if(a instanceof Gc)return a;if("function"==typeof a.B)return a.B(!1);if(Fa(a)){var b=0,c=new Gc;c.next=function(){for(;;){if(b>=a.length)throw Fc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ic(a,b){if(Fa(a))try{H(a,b,void 0)}catch(c){if(c!==Fc)throw c;}else{a=Hc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Fc)throw c;}}}
function Jc(a){if(Fa(a))return Ta(a);a=Hc(a);var b=[];Ic(a,function(c){b.push(c)});
return b}
;function Kc(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Kc)for(c=Lc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Lc(a){Mc(a);return a.f.concat()}
q=Kc.prototype;q.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Nc;Mc(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Nc(a,b){return a===b}
q.isEmpty=function(){return 0==this.g};
q.clear=function(){this.h={};this.i=this.g=this.f.length=0};
q.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&Mc(this),!0):!1};
function Mc(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
q.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
q.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
q.forEach=function(a,b){for(var c=Lc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new Kc(this)};
q.B=function(a){Mc(this);var b=0,c=this.i,d=this,e=new Gc;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Fc;var f=d.f[b++];return a?f:d.h[f]};
return e};var Oc=A.JSON.stringify;function M(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Da)try{var b=this;a.call(void 0,function(c){Pc(b,2,c)},function(c){Pc(b,3,c)})}catch(c){Pc(this,3,c)}}
function Qc(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Qc.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Rc=new oc(function(){return new Qc},function(a){a.reset()});
function Sc(a,b,c){var d=Rc.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Tc(){var a=Uc;if(a instanceof M)return a;var b=new M(Da);Pc(b,2,a);return b}
M.prototype.then=function(a,b,c){return Vc(this,Ga(a)?a:null,Ga(b)?b:null,c)};
M.prototype.$goog_Thenable=!0;M.prototype.cancel=function(a){if(0==this.f){var b=new Wc(a);wc(function(){Xc(this,b)},this)}};
function Xc(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Xc(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Yc(c),Zc(c,e,3,b)))}a.h=null}else Pc(a,3,b)}
function $c(a,b){a.g||2!=a.f&&3!=a.f||ad(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Vc(a,b,c,d){var e=Sc(null,null,null);e.f=new M(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Wc?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;$c(a,e);return e.f}
M.prototype.A=function(a){this.f=0;Pc(this,2,a)};
M.prototype.F=function(a){this.f=0;Pc(this,3,a)};
function Pc(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.A,f=a.F;if(d instanceof M){$c(d,Sc(e||Da,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ha(d))try{var k=d.then;if(Ga(k)){bd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.m=c,a.f=b,a.h=null,ad(a),3!=b||c instanceof Wc||cd(a,c))}}
function bd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ad(a){a.l||(a.l=!0,wc(a.s,a))}
function Yc(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
M.prototype.s=function(){for(var a;a=Yc(this);)Zc(this,a,this.f,this.m);this.l=!1};
function Zc(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,dd(b,c,d);else try{b.h?b.g.call(b.context):dd(b,c,d)}catch(e){ed.call(null,e)}pc(Rc,b)}
function dd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function cd(a,b){a.j=!0;wc(function(){a.j&&ed.call(null,b)})}
var ed=qc;function Wc(a){Oa.call(this,a)}
G(Wc,Oa);Wc.prototype.name="cancel";function N(a){dc.call(this);this.m=1;this.j=[];this.l=0;this.f=[];this.g={};this.s=!!a}
G(N,dc);q=N.prototype;q.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.m;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.m=e+3;d.push(e);return e};
function fd(a,b,c){var d=gd;if(a=d.g[a]){var e=d.f;(a=Ra(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.J(a)}}
q.J=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.l)this.j.push(a),this.f[a+1]=Da;else{if(c){var d=Pa(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
q.P=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];hd(this.f[g+1],this.f[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.J(c)}}return 0!=e}return!1};
function hd(a,b,c){wc(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.g[a];b&&(H(b,this.J,this),delete this.g[a])}else this.f.length=0,this.g={}};
q.M=function(){N.D.M.call(this);this.clear();this.j.length=0};function id(a){this.f=a}
id.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Oc(b))};
id.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
id.prototype.remove=function(a){this.f.remove(a)};function jd(a){this.f=a}
G(jd,id);function kd(a){this.data=a}
function ld(a){return void 0===a||a instanceof kd?a:new kd(a)}
jd.prototype.set=function(a,b){jd.D.set.call(this,a,ld(b))};
jd.prototype.g=function(a){a=jd.D.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
jd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function md(a){this.f=a}
G(md,jd);md.prototype.set=function(a,b,c){if(b=ld(b)){if(c){if(c<E()){md.prototype.remove.call(this,a);return}b.expiration=c}b.creation=E()}md.D.set.call(this,a,b)};
md.prototype.g=function(a){var b=md.D.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<E()||c&&c>E())md.prototype.remove.call(this,a);else return b}};function nd(){}
;function od(){}
G(od,nd);od.prototype.clear=function(){var a=Jc(this.B(!0)),b=this;H(a,function(c){b.remove(c)})};function pd(a){this.f=a}
G(pd,od);q=pd.prototype;q.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
q.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.f.removeItem(a)};
q.B=function(a){var b=0,c=this.f,d=new Gc;d.next=function(){if(b>=c.length)throw Fc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){this.f.clear()};
q.key=function(a){return this.f.key(a)};function qd(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
G(qd,pd);function rd(a,b){this.g=a;this.f=null;var c;if(c=wb)c=!(9<=Number(Ib));if(c){sd||(sd=new Kc);this.f=sd.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),sd.set(a,this.f));try{this.f.load(this.g)}catch(d){this.f=null}}}
G(rd,od);var td={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},sd=null;function ud(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return td[b]})}
q=rd.prototype;q.isAvailable=function(){return!!this.f};
q.set=function(a,b){this.f.setAttribute(ud(a),b);vd(this)};
q.get=function(a){a=this.f.getAttribute(ud(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.f.removeAttribute(ud(a));vd(this)};
q.B=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Gc;d.next=function(){if(b>=c.length)throw Fc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);vd(this)};
function vd(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function wd(a,b){this.g=a;this.f=b+"::"}
G(wd,od);wd.prototype.set=function(a,b){this.g.set(this.f+a,b)};
wd.prototype.get=function(a){return this.g.get(this.f+a)};
wd.prototype.remove=function(a){this.g.remove(this.f+a)};
wd.prototype.B=function(a){var b=this.g.B(!0),c=this,d=new Gc;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var xd=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};F("yt.config_",xd);function yd(a){var b=arguments;1<b.length?xd[b[0]]=b[1]:1===b.length&&Object.assign(xd,b[0])}
function O(a,b){return a in xd?xd[a]:b}
;var zd=[];function Ad(a){zd.forEach(function(b){return b(a)})}
function Bd(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Cd(b),Ad(b)}}:a}
function Cd(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),yd("ERRORS",b))}
function Dd(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),yd("ERRORS",b))}
;var Ed=0;F("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Ed});var Fd={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Gd(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Fd||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Gd.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Gd.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Gd.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Za=A.ytEventsEventsListeners||{};F("ytEventsEventsListeners",Za);var Hd=A.ytEventsEventsCounter||{count:0};F("ytEventsEventsCounter",Hd);
function Id(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ya(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ha(e[4])&&Ha(d)&&$a(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Jd(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in Za){var c=Za[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Kd()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Za[b]}}))}
var Kd=Wa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ld(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Id(a,b,c,d);if(!e){e=++Hd.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Gd(h);if(!Sb(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Gd(h);
h.currentTarget=a;return c.call(a,h)};
g=Bd(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Kd()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Za[e]=[a,b,c,g,d]}}}
;function Md(a,b){Ga(a)&&(a=Bd(a));return window.setTimeout(a,b)}
function Nd(a){Ga(a)&&(a=Bd(a));return window.setInterval(a,250)}
;function Od(a){var b=[];Xa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Pd(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?Ua(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};Cd(h)}}}return b}
function Qd(a,b){return Rd(a,b||{},!0)}
function Rd(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Pd(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Xb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var Sd={};function Td(a){return Sd[a]||(Sd[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ud={},Vd=[],gd=new N,Wd={};function Xd(){for(var a=u(Vd),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Yd(a,b){b||(b=document);var c=Ta(b.getElementsByTagName("yt:"+a));var d="yt-"+a;var e=b||document;d=e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):Qb(d,b);d=Ta(d);return Sa(c,d)}
function P(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Td(b)]:a.getAttribute("data-"+b):null;return c}
function Zd(a,b){gd.P.apply(gd,arguments)}
;function $d(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function Q(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function ae(a,b,c){be||(be={},Ld(window,"message",C(a.i,a)));be[c]=b}
$d.prototype.i=function(a){if(a.origin==Q(this,"host")||a.origin==Q(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=be[b.id])a.s=!0,a.s&&(H(a.m,a.S,a),a.m.length=0),a.ba(b)}};
var be=null;function S(a){a=ce(a);return"string"===typeof a&&"false"===a?!1:!!a}
function de(a,b){var c=ce(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function ce(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
;function ee(){}
function fe(a,b){return ge(a,0,b)}
;function he(){}
na(he,ee);function ge(a,b,c){isNaN(c)&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Md(a,c||0)}
he.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
he.f=void 0;he.g=function(){he.f||(he.f=new he)};
he.g();var ie=A.ytPubsubPubsubInstance||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.J;N.prototype.publish=N.prototype.P;N.prototype.clear=N.prototype.clear;F("ytPubsubPubsubInstance",ie);F("ytPubsubPubsubSubscribedKeys",A.ytPubsubPubsubSubscribedKeys||{});F("ytPubsubPubsubTopicToKeys",A.ytPubsubPubsubTopicToKeys||{});F("ytPubsubPubsubIsSynchronous",A.ytPubsubPubsubIsSynchronous||{});var T=window,U=T.ytcsi&&T.ytcsi.now?T.ytcsi.now:T.performance&&T.performance.timing&&T.performance.now&&T.performance.timing.navigationStart?function(){return T.performance.timing.navigationStart+T.performance.now()}:function(){return(new Date).getTime()};var je=de("initial_gel_batch_timeout",1E3),ke=Math.pow(2,16)-1,le=null,me=0,ne=void 0,oe=0,pe=0,qe=0,re=!0,se=A.ytLoggingTransportLogPayloadsQueue_||{};F("ytLoggingTransportLogPayloadsQueue_",se);var te=A.ytLoggingTransportGELQueue_||new Map;F("ytLoggingTransportGELQueue_",te);var ue=A.ytLoggingTransportTokensToCttTargetIds_||{};F("ytLoggingTransportTokensToCttTargetIds_",ue);
function ve(){window.clearTimeout(oe);window.clearTimeout(pe);pe=0;ne&&ne.isReady()?(we(te),"log_event"in se&&we(Object.entries(se.log_event)),te.clear(),delete se.log_event):xe()}
function xe(){S("web_gel_timeout_cap")&&!pe&&(pe=Md(ve,6E4));window.clearTimeout(oe);var a=O("LOGGING_BATCH_TIMEOUT",de("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&re&&(a=je);oe=Md(ve,a)}
function we(a){var b=ne,c=Math.round(U());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=ab({context:ye(b.f||ze())});e.events=f;(f=ue[d])&&Ae(e,d,f);delete ue[d];Be(e,c);Ce(b,"log_event",e,{retry:!0,onSuccess:function(){me=Math.round(U()-c)}});
re=!1}}
function Be(a,b){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=O("EVENT_ID",void 0);if(c){var d=O("BATCH_CLIENT_COUNTER",void 0)||0;!d&&S("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*ke/2));d++;d>ke&&(d=1);yd("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;le&&me&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:le,roundtripMs:String(me)});le=c;me=0}}
function Ae(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var De=A.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",De);function Ee(a){var b=Fe;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Ge(b),He(b));b.ca_type="image";a&&(b.bid=a);return b}
function Ge(a){var b={};b.dt=gc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?J:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!J.navigator&&"unknown"!==typeof J.navigator.javaEnabled&&!!J.navigator.javaEnabled&&J.navigator.javaEnabled();J.screen&&(b.u_h=J.screen.height,b.u_w=J.screen.width,b.u_ah=J.screen.availHeight,b.u_aw=J.screen.availWidth,b.u_cd=J.screen.colorDepth);
J.navigator&&J.navigator.plugins&&(b.u_nplug=J.navigator.plugins.length);J.navigator&&J.navigator.mimeTypes&&(b.u_nmime=J.navigator.mimeTypes.length);return b}
function He(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var g=b.innerWidth;var h=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new Pb(l.clientWidth,l.clientHeight)).round()}catch(n){m=new Pb(-12245933,-12245933)}k=m;m={};l=new mc;A.SVGElement&&
A.document.createElementNS&&l.set(0);c=cc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);A.crypto&&A.crypto.subtle&&l.set(3);A.TextDecoder&&A.TextEncoder&&l.set(4);l=nc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!J.WebGLRenderingContext,m}
var Fe=new function(){var a=window.document;this.f=window;this.g=a};
F("yt.ads_.signals_.getAdSignalsString",function(a){return Od(Ee(a))});E();var Ie=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Je(){if(!Ie)return null;var a=Ie();return"open"in a?a:null}
;var Ke={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Le="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Me=!1;
function Ne(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=K(a)[1]||null,e=Ub(K(a)[3]||null);d&&e?(d=c,c=K(a),d=K(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Ub(K(c)[3]||null)==e&&(Number(K(c)[4]||null)||null)==(Number(K(a)[4]||null)||null):!0;d=S("web_ajax_ignore_global_headers_if_set");for(var f in Ke)e=O(Ke[f]),!e||!c&&!Oe(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Oe(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Oe(a,"X-YouTube-Time-Zone"))&&(f=
"undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Oe(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=Od(Ee(void 0));return b}
function Pe(a){var b=window.location.search,c=Ub(K(a)[3]||null),d=Ub(K(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Pd(b),f={};H(Le,function(g){e[g]&&(f[g]=e[g])});
return Rd(a,f||{},!1)}
function Oe(a,b){var c=O("CORS_HEADER_WHITELIST")||{},d=Ub(K(a)[3]||null);return d?(c=c[d])?0<=Pa(c,b):!1:!0}
function Qe(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Re(a,b);var d=Se(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||A;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.N&&b.N.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.Y&&0<b.timeout&&(f=Md(function(){e||(e=!0,window.clearTimeout(f),b.Y.call(b.context||A))},b.timeout))}else Te(a,b)}
function Te(a,b){var c=b.format||"JSON";a=Re(a,b);var d=Se(a,b),e=!1,f=Ue(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||n||r)m=Ve(a,c,k,b.Da);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||A;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.N&&b.N.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.H&&0<b.timeout){var g=b.H;var h=Md(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},b.timeout)}}
function Re(a,b){b.Ha&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME",void 0),d=b.na;d&&(d[c]&&delete d[c],a=Qd(a,d));return a}
function Se(a,b){var c=O("XSRF_FIELD_NAME",void 0),d=O("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.u,g=O("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Ga||Ub(K(a)[3]||null)&&!b.withCredentials&&Ub(K(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.u&&b.u[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Pd(e),cb(e,f),e=b.aa&&"JSON"==b.aa?JSON.stringify(e):Xb(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=
!f}!Me&&c&&"POST"!=b.method&&(Me=!0,Cd(Error("AJAX request with postData should use POST")));return e}
function Ve(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Dd(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?We(a):null)e={},H(a.getElementsByTagName("*"),function(g){e[g.tagName]=Xe(g)})}d&&Ye(e);
return e}
function Ye(a){if(Ha(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=new fb(gb,"HTML that is escaped and sanitized server-side and passed through yt.net.ajax");ib(e);ib(e);e=new ub;var f=eb();f&&f.createHTML(d);a[c]=e}else Ye(a[b])}}
function We(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Xe(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ue(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Bd(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Je();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=Pe(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ne(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Ze(){for(var a={},b=u(Object.entries(Pd(O("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function $e(){return"INNERTUBE_API_KEY"in xd&&"INNERTUBE_API_VERSION"in xd}
function ze(){return{innertubeApiKey:O("INNERTUBE_API_KEY",void 0),innertubeApiVersion:O("INNERTUBE_API_VERSION",void 0),ga:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ha:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ja:O("INNERTUBE_CONTEXT_HL",void 0),ia:O("INNERTUBE_CONTEXT_GL",void 0),ka:O("INNERTUBE_HOST_OVERRIDE",void 0)||"",la:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function ye(a){a={client:{hl:a.ja,gl:a.ia,clientName:a.ha,clientVersion:a.innertubeContextClientVersion,configInfo:a.ga}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=O("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=O("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=O("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
O("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(a.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,Ze());return a}
function af(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ba||O("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Aa:b=lc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
function bf(a){a=Object.assign({},a);delete a.Authorization;var b=lc();if(b){var c=new Dc;c.update(O("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Fa(b);void 0===c&&(c=0);if(!Kb){Kb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Jb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Kb[k]&&(Kb[k]=h)}}}c=Jb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function cf(){var a=new qd;(a=a.isAvailable()?new wd(a,"yt.innertube"):null)||(a=new rd("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new md(a):null;this.g=document.domain||window.location.hostname}
cf.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,E()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Oc(b))}catch(f){return}else e=escape(b);b=this.g;Ob.set(""+a,e,{V:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
cf.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Ob.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
cf.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Ob.remove(""+a,"/",void 0===b?"youtube.com":b)};var df=new cf;function ef(a,b,c,d){if(d)return null;d=df.get("nextId",!0)||1;var e=df.get("requests",!0)||{};e[d]={method:a,request:b,authState:bf(c),requestTime:Math.round(U())};df.set("nextId",d+1,86400,!0);df.set("requests",e,86400,!0);return d}
function ff(a){var b=df.get("requests",!0)||{};delete b[a];df.set("requests",b,86400,!0)}
function gf(a){var b=df.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=bf(af(!1));$a(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),Ce(a,d.method,e,{}));delete b[c]}}df.set("requests",b,86400,!0)}}
;function V(a){return new M(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
;function hf(a){this.f=a}
q=hf.prototype;q.add=function(a,b,c){return W(X(this,[a],"readwrite"),a).add(b,c)};
q.clear=function(a){return W(X(this,[a],"readwrite"),a).clear()};
q.close=function(){this.f.close()};
q.count=function(a,b){return W(X(this,[a]),a).count(b)};
q["delete"]=function(a,b){return W(X(this,[a],"readwrite"),a)["delete"](b)};
q.get=function(a,b){return W(X(this,[a]),a).get(b)};
q.getName=function(){return this.f.name};
function X(a,b,c){a=a.f.transaction(b,c);return new jf(a)}
function kf(a){this.f=a}
q=kf.prototype;q.add=function(a,b){return V(this.f.add(a,b))};
q.clear=function(){return V(this.f.clear()).then(function(){})};
q.count=function(a){return V(this.f.count(a))};
q["delete"]=function(a){return V(this.f["delete"](a))};
q.get=function(a){return V(this.f.get(a))};
q.index=function(a){return new lf(this.f.index(a))};
q.getName=function(){return this.f.name};
function mf(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,mf.prototype)}
na(mf,Error);function jf(a){var b=this;this.f=a;this.g=new Map;this.done=new M(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(){d(b.f.error)});
b.f.addEventListener("abort",function(){d(new mf)})})}
jf.prototype.abort=function(){this.f.abort();return this.done};
function W(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new kf(c),a.g.set(c,d));return d}
function lf(a){this.f=a}
lf.prototype.count=function(a){return V(this.f.count(a))};
lf.prototype.get=function(a){return V(this.f.get(a))};
function nf(a,b){var c=a.f.openCursor(b,"prev");return V(c).then(function(d){return null===d?null:new of(c,d)})}
function of(a,b){this.request=a;this.f=b}
of.prototype["delete"]=function(){return V(this.f["delete"]()).then(function(){})};
of.prototype.update=function(a){return V(this.f.update(a))};function pf(a,b,c){function d(){l||(l=new hf(e.result));return l}
c=void 0===c?{}:c;var e=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);a=c;var f=a.Ca,g=a.blocking,h=a.Ka,k=a.upgrade,l;k&&e.addEventListener("upgradeneeded",function(m){if(null===m.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===e.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var n=d(),r=new jf(e.transaction);k(n,m.oldVersion,m.newVersion,r)});
f&&e.addEventListener("blocked",function(){f()});
return V(e).then(function(m){g&&m.addEventListener("versionchange",function(){g()});
h&&m.addEventListener("close",function(){h()});
return d()})}
;var Uc,qf=["getAll","getAllKeys","getKey","openKeyCursor"],rf=["getAll","getAllKeys","getKey","openKeyCursor"];
function sf(){return L(this,function b(){var c,d,e,f,g,h,k,l;return y(b,function(m){switch(m.f){case 1:if(!self.indexedDB)return m["return"](!1);c=u(qf);for(d=c.next();!d.done;d=c.next())if(e=d.value,!IDBObjectStore.prototype[e])return m["return"](!1);f=u(rf);for(d=f.next();!d.done;d=f.next())if(g=d.value,!IDBIndex.prototype[g])return m["return"](!1);if(!IDBObjectStore.prototype.getKey)return m["return"](!1);sa(m);l=!1;return w(m,pf("yt-idb-test-do-not-use",void 0,{blocking:function(){l=!0;h&&(h.close(),
h=void 0)}}),5);
case 5:return h=m.g,w(m,pf("yt-idb-test-do-not-use",h.f.version+1),6);case 6:return k=m.g,k.close(),k=void 0,m["return"](l);case 3:ua(m);if(h)try{h.close()}catch(n){}if(k)try{k.close()}catch(n){}va(m);break;case 2:return ta(m),m["return"](!1)}})})}
function tf(){return void 0!==Uc?Tc():new M(function(a){sf().then(function(b){Uc=b;a(b)})})}
;var uf;function vf(){return L(this,function b(){return y(b,function(c){if(!uf)try{uf=pf("LogsDataBase",1,{upgrade:function(d,e){if(1>e){var f=d.f.createObjectStore("LogsRequestsStore",{keyPath:"id",autoIncrement:!0});(new kf(f)).f.createIndex("newRequest",["status","timestamp"],{unique:!1})}}})}catch(d){"VersionError"===d&&Cd(d),uf=pf("LogsDataBase",1)}return c["return"](uf)})})}
function wf(a){return L(this,function c(){var d,e,f,g;return y(c,function(h){if(1==h.f)return w(h,vf(),2);if(3!=h.f)return d=h.g,e=W(X(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),f=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options))}),w(h,e.add(f),3);g=h.g;return h["return"](g)})})}
function xf(){return L(this,function b(){var c,d,e,f,g,h,k;return y(b,function(l){switch(l.f){case 1:return c=["NEW",0],d=["NEW",U()],e=IDBKeyRange.bound(c,d),w(l,vf(),2);case 2:return f=l.g,g=X(f,["LogsRequestsStore"],"readwrite"),w(l,nf(W(g,"LogsRequestsStore").index("newRequest"),e),3);case 3:h=l.g;k=void 0;if(null===h||void 0===h||!h.f.value){l.v(4);break}k=h.f.value;k.status="QUEUED";return w(l,h.update(k),4);case 4:return l["return"](k)}})})}
function yf(a){return L(this,function c(){var d,e,f;return y(c,function(g){switch(g.f){case 1:return w(g,vf(),2);case 2:return d=g.g,e=W(X(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(g,e.get(a),3);case 3:return f=g.g,f.status="QUEUED",w(g,V(e.f.put(f,void 0)),4);case 4:return g["return"](f)}})})}
function zf(a){return L(this,function c(){var d,e,f;return y(c,function(g){switch(g.f){case 1:return w(g,vf(),2);case 2:return d=g.g,e=W(X(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),w(g,e.get(a),3);case 3:return f=g.g,f.status="NEW",f.R+=1,w(g,V(e.f.put(f,void 0)),4);case 4:return g["return"](f)}})})}
function Af(){return L(this,function b(){var c,d;return y(b,function(e){if(1==e.f)return w(e,vf(),2);if(3!=e.f)return c=e.g,w(e,c.count("LogsRequestsStore"),3);d=e.g;return e["return"](!d)})})}
function Bf(a){return L(this,function c(){var d;return y(c,function(e){if(1==e.f)return w(e,vf(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
;var Cf=de("network_polling_interval",3E4);function Df(){this.i=0;this.f=window.navigator.onLine;Ef(this);Ff(this)}
function Gf(){Df.instance||(Df.instance=new Df);return Df.instance}
function Hf(a){var b=If,c=Jf;a.i||Kf(a);(new M(function(d){a.h=d})).then(function(){b();
c&&(a.g=c)})}
function Ff(a){window.addEventListener("online",function(){a.f=!0;a.h&&a.h()})}
function Ef(a){window.addEventListener("offline",function(){a.f=!1;a.g&&a.g()})}
function Kf(a){a.i=fe(function(){window.navigator.onLine?(!1===a.f&&Cd(Error("NetworkStatusManager missed online event.")),a.f=!0,a.h&&a.h()):(!0===a.f&&Cd(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.g&&a.g());Kf(a)},Cf)}
;var Lf=de("networkless_throttle_timeout")||100,Mf=de("networkless_retry_attempts")||1,Nf=0;function Of(a,b){tf().then(function(c){if(c&&!S("networkless_bypass_write")){var d={url:a,options:b,timestamp:U(),status:"NEW",R:0};wf(d).then(function(e){d.id=e;e=Gf();e.f?Pf(d):Hf(e)})["catch"](function(){Pf(d);
Cd(Error("Networkless Logging: Log request setting to indexedDB failed."))})}else Te(a,b)})}
function If(){Nf||(Nf=ge(function(){Pf();Nf=0;If()},1,Lf))}
function Jf(){var a=Nf;if(!isNaN(a)){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}Nf=0}
function Pf(a){L(this,function c(){var d=this,e,f,g,h;return y(c,function(k){switch(k.f){case 1:e=d;if(!a)return w(k,xf(),6);if(!a.id){k.v(3);break}return w(k,yf(a.id),5);case 5:a=k.g;k.v(3);break;case 6:if(a=k.g){k.v(3);break}return w(k,Af(),8);case 8:return(f=k.g)&&Jf(),k["return"]();case 3:if(Qf(a))g=a.options.onError?a.options.onError:function(){},h=a.options.onSuccess?a.options.onSuccess:function(){},a.options.onError=function(l,m){return L(e,function r(){return y(r,function(p){if(1==p.f)return a&&
a.id?a.R<Mf?w(p,zf(a.id),6):w(p,Bf(a.id),2):p.v(2);
2!=p.f&&(Nf||Hf(Gf()),g(l,m));g(l,m);p.f=0})})},a.options.onSuccess=function(l,m){return L(e,function r(){return y(r,function(p){if(1==p.f)return a&&a.id?w(p,Bf(a.id),2):p.v(2);
h(l,m);p.f=0})})},Te(a.url,a.options);
else if(Dd(Error("Networkless Logging: Stored logs request expired age limit")),a.id)return w(k,Bf(a.id),0);k.v(0)}})})}
function Qf(a){a=a.timestamp;return 2592E6<=U()-a?!1:!0}
;function Rf(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
na(Rf,Error);function Sf(a){var b=this;this.f=null;a?this.f=a:$e()&&(this.f=ze());fe(function(){gf(b)},5E3)}
Sf.prototype.isReady=function(){!this.f&&$e()&&(this.f=ze());return!!this.f};
function Ce(a,b,c,d){!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Dd(new Rf("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw b=new Rf("innertube xhrclient not ready",b,c,d),Cd(b),b.f=0,b;var e={headers:{"Content-Type":"application/json"},method:"POST",u:c,aa:"JSON",H:function(){d.H()},
Y:d.H,onSuccess:function(r,p){if(d.onSuccess)d.onSuccess(p)},
X:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,p){if(d.onError)d.onError(p)},
Ia:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.ka;g&&(f=g);g=a.f.la||!1;var h=af(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=Qd(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=ef(b,c,h,g))){var m=e.onSuccess,n=e.X;e.onSuccess=function(r,p){ff(l);m(r,p)};
c.X=function(r,p){ff(l);n(r,p)}}try{S("use_fetch_for_op_xhr")?Qe(k,e):S("networkless_logging")&&d.retry?(e.method="POST",Of(k,e)):(e.method="POST",e.u||(e.u={}),Te(k,e))}catch(r){if("InvalidAccessError"==r.name)l&&(ff(l),l=0),Dd(Error("An extension is blocking network request."));
else throw r;}l&&fe(function(){gf(a)},5E3)}
;var Tf=[{W:function(a){return"Cannot read property '"+a.key+"'"},
O:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{W:function(a){return"Cannot call '"+a.key+"'"},
O:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];var Uf=new Set,Vf=0;function Wf(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Y(a,b,c){this.l=this.f=this.g=null;this.j=Ia(this);this.h=0;this.s=!1;this.m=[];this.i=null;this.A=c;this.F={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?Vb(a.src):"https://www.youtube.com"),this.g=new $d(b),c||(b=Xf(this,a),this.l=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+Ia(this.f)),Ud[this.f.id]=this,window.postMessage){this.i=new N;Yf(this);b=Q(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Wd)Zf(this,e)}}
q=Y.prototype;q.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
q.ma=function(){return this.f};
q.ba=function(a){this.I(a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);$f(this,a);return this};
function Zf(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.A==c[0]&&$f(a,d)}}
q.destroy=function(){this.f.id&&(Ud[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.l){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.l,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);be&&(be[this.j]=null);this.g=null;a=this.f;for(var c in Za)Za[c][0]==a&&Jd(c);this.l=this.f=null};
q.K=function(){return{}};
function ag(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.S(b):a.m.push(b)}
q.I=function(a,b){if(!this.i.h){var c={target:this,data:b};this.i.P(a,c);Zd(this.A+"."+a,c)}};
function Xf(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Q(a.g,"title"));(d=Q(a.g,"width"))&&c.setAttribute("width",d);(d=Q(a.g,"height"))&&c.setAttribute("height",d);var h=a.K();h.enablejsapi=
window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.j;window.location.href&&H(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(Yb);b:{var n=0;for(var r=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var p=l.charCodeAt(n-1);if(38==p||63==p)if(p=l.charCodeAt(n+r),!p||61==p||38==p||35==p)break b;n+=r+1}n=-1}if(0>n)l=null;else{r=l.indexOf("&",n);if(0>r||r>m)r=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,r-n).replace(/\+/g,
" "))}null!==l&&(h[k]=l)});
c.src=Q(a.g,"host")+a.L()+"?"+Xb(h);return c}
q.Z=function(){this.f&&this.f.contentWindow?this.S({event:"listening"}):window.clearInterval(this.h)};
function Yf(a){ae(a.g,a,a.j);a.h=Nd(C(a.Z,a));Ld(a.f,"load",C(function(){window.clearInterval(this.h);this.h=Nd(C(this.Z,this))},a))}
function $f(a,b){a.F[b]||(a.F[b]=!0,ag(a,"addEventListener",[b]))}
q.S=function(a){a.id=this.j;a.channel="widget";a=Oc(a);var b=this.g;var c=Vb(this.f.src||"");b=0==c.indexOf("https:")?[c]:b.f?[c.replace("http:","https:")]:b.h?[c]:[c,c.replace("http:","https:")];if(this.f.contentWindow)for(c=0;c<b.length;c++)try{this.f.contentWindow.postMessage(a,b[c])}catch(R){if(R.name&&"SyntaxError"==R.name){if(!(R.message&&0<R.message.indexOf("target origin ''"))){var d=void 0,e=void 0,f=R;e=void 0===e?{}:e;e.name=O("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=O("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var g=e||{};e="WARNING";e=void 0===e?"ERROR":e;d=void 0===d?!1:d;if(f){if(S("console_log_js_exceptions")){var h=f,k=[];k.push("Name: "+h.name);k.push("Message: "+h.message);h.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(h.params));k.push("File name: "+h.fileName);k.push("Stacktrace: "+h.stack);window.console.log(k.join("\n"),h)}if((window&&window.yterr||d)&&!(5<=Vf)&&0!==f.f){var l=void 0,m=Lb(f);d=m.message||"Unknown Error";h=m.name||"UnknownError";k=m.lineNumber||"Not available";
var n=m.fileName||"Not available";m=m.stack||f.g||"Not available";if(f.hasOwnProperty("args")&&f.args&&f.args.length){var r=0;for(l=0;l<f.args.length;l++){var p=f.args[l],v="params."+l;r+=v.length;if(p)if(Array.isArray(p))for(var x=g,D=0;D<p.length&&!(p[D]&&(r+=Wf(D,p[D],v,x),500<r));D++);else if("object"===typeof p)for(x in x=void 0,D=g,p){if(p[x]&&(r+=Wf(x,p[x],v,D),500<r))break}else g[v]=String(JSON.stringify(p)).substring(0,500),r+=g[v].length;else g[v]=String(JSON.stringify(p)).substring(0,500),
r+=g[v].length;if(500<=r)break}}else if(f.hasOwnProperty("params")&&f.params)if(p=f.params,"object"===typeof f.params)for(l in v=0,p){if(p[l]&&(r="params."+l,x=String(JSON.stringify(p[l])).substr(0,500),g[r]=x,v+=r.length+x.length,500<v))break}else g.params=String(JSON.stringify(p)).substr(0,500);g={message:d,name:h,lineNumber:k,fileName:n,stack:m,params:g};f=Number(f.columnNumber);isNaN(f)||(g.lineNumber=g.lineNumber+":"+f);f=g;g=u(Tf);for(d=g.next();!d.done;d=g.next())if(d=d.value,d.O[f.name])for(k=
u(d.O[f.name]),h=k.next();!h.done;h=k.next())if(n=h.value,h=f.message.match(n.regexp)){f.params["error.original"]=h[0];k=n.groups;n={};for(m=0;m<k.length;m++)n[k[m]]=h[m+1],f.params["error."+k[m]]=h[m+1];f.message=d.W(n);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(f);if(!(Uf.has(f.message)||0<=f.stack.indexOf("/YouTubeCenter.js")||0<=f.stack.indexOf("/mytube.js"))){if(S("kevlar_gel_error_routing")){g=void 0;h=e;n=f;k={stackTrace:n.stack};n.fileName&&(k.filename=n.fileName);
d=n.lineNumber&&n.lineNumber.split?n.lineNumber.split(":"):[];0!==d.length&&(1!==d.length||isNaN(Number(d[0]))?2!==d.length||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(k.lineNumber=Number(d[0]),k.columnNumber=Number(d[1])):k.lineNumber=Number(d[0]));d={level:"ERROR_LEVEL_UNKNOWN",message:n.message};"ERROR"===h?d.level="ERROR_LEVEL_ERROR":"WARNING"===h&&(d.level="ERROR_LEVEL_WARNNING");h={isObfuscated:!0,browserStackInfo:k};k={pageUrl:window.location.href,kvPairs:[]};if(n=n.params)for(m=u(Object.keys(n)),
l=m.next();!l.done;l=m.next())l=l.value,k.kvPairs.push({key:"client."+l,value:String(n[l])});k={errorMetadata:k,stackTrace:h,logMessage:d};g=void 0===g?{}:g;d=Sf;O("ytLoggingEventsDefaultDisabled",!1)&&Sf==Sf&&(d=null);g=void 0===g?{}:g;h={};h.eventTimeMs=Math.round(g.timestamp||U());h.clientError=k;k=String;g.timestamp?n=-1:(n=B("_lact",window),null==n?n=-1:n=Math.max(E()-n,0));h.context={lastActivityMs:k(n)};S("log_sequence_info_on_gel_web")&&g.ca&&(k=h.context,n=g.ca,De[n]=n in De?De[n]+1:0,k.sequence=
{index:De[n],groupKey:n},g.Fa&&delete De[g.ca]);g=g.Ea;k="";g&&(k=g,n={},k.videoId?n.videoId=k.videoId:k.playlistId&&(n.playlistId=k.playlistId),ue[g.token]=n,k=g.token);g=te.get(k)||[];te.set(k,g);g.push(h);d&&(ne=new d);d=de("web_logging_max_batch")||100;h=U();g.length>=d?ve():10<=h-qe&&(xe(),qe=h);ve()}d=f;g=d.params||{};e={na:{a:"logerror",t:"jserror",type:d.name,msg:d.message.substr(0,250),line:d.lineNumber,level:e,"client.name":g.name},u:{url:O("PAGE_NAME",window.location.href),file:d.fileName},
method:"POST"};g.version&&(e["client.version"]=g.version);if(e.u){d.stack&&(e.u.stack=d.stack);d=u(Object.keys(g));for(h=d.next();!h.done;h=d.next())h=h.value,e.u["client."+h]=g[h];if(g=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=u(Object.keys(g)),h=d.next();!h.done;h=d.next())h=h.value,e.u[h]=g[h];g=O("SERVER_NAME",void 0);d=O("SERVER_VERSION",void 0);g&&d&&(e.u["server.name"]=g,e.u["server.version"]=d)}Te(O("ECATCHER_REPORT_HOST","")+"/error_204",e);Uf.add(f.message);Vf++}}}}}else throw R;
}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function bg(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function cg(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.C={};this.playerInfo={}}
na(Z,Y);q=Z.prototype;q.L=function(){return"/embed/"+Q(this.g,"videoId")};
q.K=function(){var a=Q(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Q(this.g,"embedConfig")){if(Ha(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.ba=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Ha(a))for(var c in a)this.C[c]=a[c];break;case "infoDelivery":dg(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.C={};eg(this,a.apiInterface);dg(this,a);break;default:this.I(b,a)}};
function dg(a,b){if(Ha(b))for(var c in b)a.playerInfo[c]=b[c]}
function eg(a,b){H(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(E()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:bg(c)?this[c]=function(){this.playerInfo={};
this.C={};ag(this,c,arguments);return this}:cg(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){ag(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=parseInt(Q(this.g,"width"),10),b=parseInt(Q(this.g,"height"),10),c=Q(this.g,"host")+this.L();qb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(kb,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(lb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(mb,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(nb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(ob,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(pb,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
q.getOptions=function(a){return this.C.namespaces?a?this.C[a].options||[]:this.C.namespaces||[]:[]};
q.getOption=function(a,b){if(this.C.namespaces&&a&&b)return this.C[a][b]};
function fg(a){if("iframe"!=a.tagName.toLowerCase()){var b=P(a,"videoid");b&&(b={videoId:b,width:P(a,"width"),height:P(a,"height")},new Z(a,b))}}
;function gg(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"thumbnail")}
na(gg,Y);gg.prototype.L=function(){return"/embed/"+Q(this.g,"videoId")};
gg.prototype.K=function(){return{player:0,thumb_width:Q(this.g,"thumbWidth"),thumb_height:Q(this.g,"thumbHeight"),thumb_align:Q(this.g,"thumbAlign")}};
gg.prototype.I=function(a,b){Y.prototype.I.call(this,a,b?b.info:void 0)};
function hg(a){if("iframe"!=a.tagName.toLowerCase()){var b=P(a,"videoid");if(b){b={videoId:b,events:{},width:P(a,"width"),height:P(a,"height"),thumbWidth:P(a,"thumb-width"),thumbHeight:P(a,"thumb-height"),thumbAlign:P(a,"thumb-align")};var c=P(a,"onclick");c&&(b.events.onClick=c);new gg(a,b)}}}
;F("YT.PlayerState.UNSTARTED",-1);F("YT.PlayerState.ENDED",0);F("YT.PlayerState.PLAYING",1);F("YT.PlayerState.PAUSED",2);F("YT.PlayerState.BUFFERING",3);F("YT.PlayerState.CUED",5);F("YT.get",function(a){return Ud[a]});
F("YT.scan",Xd);F("YT.subscribe",function(a,b,c){gd.subscribe(a,b,c);Wd[a]=!0;for(var d in Ud)Zf(Ud[d],a)});
F("YT.unsubscribe",function(a,b,c){fd(a,b,c)});
F("YT.Player",Z);F("YT.Thumbnail",gg);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.ma;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;Vd.push(function(a){a=Yd("player",a);H(a,fg)});
Vd.push(function(){var a=Yd("thumbnail");H(a,hg)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Xd();var ig=A.onYTReady;ig&&ig();var jg=A.onYouTubeIframeAPIReady;jg&&jg();var kg=A.onYouTubePlayerAPIReady;kg&&kg();}).call(this);
