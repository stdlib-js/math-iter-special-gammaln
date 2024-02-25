// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=l.call(n,h,"$1e"),n=l.call(n,b,"e"),n=l.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,v,"$1."),n=l.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,c,f,s,l,p,y,v,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function S(r){var e,t,n,o;for(t=[],o=0,n=N.exec(r);n;)(e=r.slice(o,N.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),o=N.lastIndex,n=N.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function U(r){var e,t;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[S(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var T,k=Object.prototype,F=k.toString,I=k.__defineGetter__,V=k.__defineSetter__,P=k.__lookupGetter__,G=k.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=k,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var L=T;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString,R=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&R.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",z=B()?function(r){var e,t,n;if(null==r)return M.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return M.call(r)},q=Boolean,D=Boolean.prototype.toString,J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof globalThis?globalThis:null,nr=function(r){if(arguments.length){if(!H(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(tr)return tr;if(rr)return rr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),or=nr.document&&nr.document.childNodes,ir=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;$(ar,"REGEXP",ur);var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function fr(r){return null!==r&&"object"==typeof r}function sr(r){var e,t,n,o;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ur.exec(n.toString()))return e[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}$(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var lr="function"==typeof C||"object"==typeof ir||"function"==typeof or?function(r){return sr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?sr(r).toLowerCase():e};function pr(r){return"function"===lr(r)}function yr(r){return"number"==typeof r}var vr=Number,dr=vr.prototype.toString,gr=B();function br(r){return"object"==typeof r&&(r instanceof vr||(gr?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function hr(r){return yr(r)||br(r)}$(hr,"isPrimitive",yr),$(hr,"isObject",br);var wr,mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,jr=Object,Ar=Object.getPrototypeOf;wr=pr(Object.getPrototypeOf)?Ar:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr,Er=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!cr(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&pr(e.constructor)&&"[object Function]"===z(e.constructor)&&Z(e,"isPrototypeOf")&&pr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function Nr(r,e,t){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!pr(u.next))throw new TypeError(U("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!pr(e))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=function(r,e){return Or(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",e))}(n,t),i))throw i;return $(o={},"next",(function(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:yr(t.value)?e(t.value):n.invalid,done:!1}})),$(o,"return",(function(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}})),mr&&pr(r[mr])&&$(o,mr,(function(){return Nr(r[mr](),e,n)})),o}function xr(r){return r!=r}var Sr=Number.POSITIVE_INFINITY,Ur=vr.NEGATIVE_INFINITY;function Tr(r){return r===Sr||r===Ur}function kr(r){return Math.abs(r)}var Fr,Ir="function"==typeof Uint32Array,Vr="function"==typeof Uint32Array?Uint32Array:null,Pr="function"==typeof Uint32Array?Uint32Array:void 0;Fr=function(){var r,e,t;if("function"!=typeof Vr)return!1;try{e=new Vr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Ir&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var Gr,Lr=Fr,$r="function"==typeof Float64Array,Cr="function"==typeof Float64Array?Float64Array:null,Hr="function"==typeof Float64Array?Float64Array:void 0;Gr=function(){var r,e,t;if("function"!=typeof Cr)return!1;try{e=new Cr([1,3.14,-3.14,NaN]),t=e,r=($r&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};var Wr,Br=Gr,Mr="function"==typeof Uint8Array,Rr="function"==typeof Uint8Array?Uint8Array:null,Zr="function"==typeof Uint8Array?Uint8Array:void 0;Wr=function(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr(e=[1,3.14,-3.14,256,257]),t=e,r=(Mr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};var Xr,Yr=Wr,zr="function"==typeof Uint16Array,qr="function"==typeof Uint16Array?Uint16Array:null,Dr="function"==typeof Uint16Array?Uint16Array:void 0;Xr=function(){var r,e,t;if("function"!=typeof qr)return!1;try{e=new qr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(zr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Dr:function(){throw new Error("not implemented")};var Jr,Kr={uint16:Xr,uint8:Yr};(Jr=new Kr.uint16(1))[0]=4660;var Qr=52===new Kr.uint8(Jr.buffer)[0],re=!0===Qr?1:0,ee=new Br(1),te=new Lr(ee.buffer);function ne(r){return ee[0]=r,te[re]}var oe=!0===Qr?1:0,ie=new Br(1),ae=new Lr(ie.buffer),ue=1023,ce=.6931471803691238,fe=1.9082149292705877e-10,se=0x40000000000000,le=.3333333333333333,pe=1048575,ye=2146435072,ve=1048576,de=1072693248;function ge(r){var e,t,n,o,i,a,u,c,f,s,l,p;return 0===r?Ur:xr(r)||r<0?NaN:(i=0,(t=ne(r))<ve&&(i-=54,t=ne(r*=se)),t>=ye?r+r:(i+=(t>>20)-ue|0,i+=(c=614244+(t&=pe)&1048576|0)>>20|0,u=(r=function(r,e){return ie[0]=r,ae[oe]=e>>>0,ie[0]}(r,t|c^de))-1,(pe&2+t)<3?0===u?0===i?0:i*ce+i*fe:(a=u*u*(.5-le*u),0===i?u-a:i*ce-(a-i*fe-u)):(c=t-398458|0,f=440401-t|0,o=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=n+o,(c|=f)>0?(e=.5*u*u,0===i?u-(e-s*(e+a)):i*ce-(e-(s*(e+a)+i*fe)-u)):0===i?u-s*(u-a):i*ce-(s*(u-a)-i*fe-u))))}var be=Math.floor,he=Math.ceil;function we(r,e){var t,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*n-r*e))}var me=-.16666666666666632,je=.00833333333332249,Ae=-.0001984126982985795,_e=27557313707070068e-22,Ee=-2.5050760253406863e-8,Oe=1.58969099521155e-10;function Ne(r,e){var t,n,o;return t=je+(o=r*r)*(Ae+o*_e)+o*(o*o)*(Ee+o*Oe),n=o*r,0===e?r+n*(me+o*t):r-(o*(.5*e-n*t)-e-n*me)}var xe,Se,Ue=2147483647,Te=2146435072,ke=1048575,Fe=!0===Qr?0:1,Ie=new Br(1),Ve=new Lr(Ie.buffer);!0===Qr?(xe=1,Se=0):(xe=0,Se=1);var Pe={HIGH:xe,LOW:Se},Ge=new Br(1),Le=new Lr(Ge.buffer),$e=Pe.HIGH,Ce=Pe.LOW;function He(r,e){return Le[$e]=r,Le[Ce]=e,Ge[0]}var We,Be,Me=1023,Re=-1023,Ze=-1074,Xe=2147483648;!0===Qr?(We=1,Be=0):(We=0,Be=1);var Ye={HIGH:We,LOW:Be},ze=new Br(1),qe=new Lr(ze.buffer),De=Ye.HIGH,Je=Ye.LOW;function Ke(r,e,t,n){return ze[0]=r,e[n]=qe[De],e[n+t]=qe[Je],e}function Qe(r){return Ke(r,[0,0],1,0)}$(Qe,"assign",Ke);var rt=[0,0];function et(r,e){var t,n;return Qe.assign(r,rt,1,0),t=rt[0],t&=Ue,n=ne(e),He(t|=n&=Xe,rt[1])}var tt=22250738585072014e-324,nt=4503599627370496;function ot(r,e,t,n){return xr(r)||Tr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&kr(r)<tt?(e[n]=r*nt,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return ot(r,[0,0],1,0)}),"assign",ot);var it=2220446049250313e-31,at=2148532223,ut=[0,0],ct=[0,0];function ft(r,e){var t,n;return 0===e||0===r||xr(r)||Tr(r)?r:(ot(r,ut,1,0),r=ut[0],e+=ut[1],e+=function(r){var e=ne(r);return(e=(e&Te)>>>20)-ue|0}(r),e<Ze?et(0,r):e>Me?r<0?Ur:Sr:(e<=Re?(e+=52,n=it):n=1,Qe.assign(r,ct,1,0),t=ct[0],t&=at,n*He(t|=e+ue<<20,ct[1])))}function st(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var lt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],pt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],yt=16777216,vt=5.960464477539063e-8,dt=st(20),gt=st(20),bt=st(20),ht=st(20);function wt(r,e,t,n,o,i,a,u,c){var f,s,l,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)s=vt*b|0,ht[y]=b-yt*s|0,b=n[g-1]+s,g-=1;if(b=ft(b,o),b-=8*be(.125*b),b-=d=0|b,l=0,o>0?(d+=y=ht[t-1]>>24-o,ht[t-1]-=y<<24-o,l=ht[t-1]>>23-o):0===o?l=ht[t-1]>>23:b>=.5&&(l=2),l>0){for(d+=1,f=0,y=0;y<t;y++)g=ht[y],0===f?0!==g&&(f=1,ht[y]=16777216-g):ht[y]=16777215-g;if(o>0)switch(o){case 1:ht[t-1]&=8388607;break;case 2:ht[t-1]&=4194303}2===l&&(b=1-b,0!==f&&(b-=ft(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=ht[y];if(0===g){for(v=1;0===ht[i-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=lt[a+y],s=0,g=0;g<=u;g++)s+=r[g]*c[u+(y-g)];n[y]=s}return wt(r,e,t+=v,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===ht[t];)t-=1,o-=24;else(b=ft(b,-o))>=yt?(s=vt*b|0,ht[t]=b-yt*s|0,o+=24,ht[t+=1]=s):ht[t]=0|b;for(s=ft(1,o),y=t;y>=0;y--)n[y]=s*ht[y],s*=vt;for(y=t;y>=0;y--){for(s=0,v=0;v<=p&&v<=t-y;v++)s+=pt[v]*n[y+v];bt[t-y]=s}for(s=0,y=t;y>=0;y--)s+=bt[y];for(e[0]=0===l?s:-s,s=bt[0]-s,y=1;y<=t;y++)s+=bt[y];return e[1]=0===l?s:-s,7&d}function mt(r,e,t,n){var o,i,a,u,c,f,s;for((i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),s=a+4,c=0;c<=s;c++)dt[c]=f<0?0:lt[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*dt[a+(c-f)];gt[c]=o}return wt(r,e,4,gt,u,4,i,a,dt)}var jt=Math.round,At=.6366197723675814,_t=1.5707963267341256,Et=6077100506506192e-26,Ot=6077100506303966e-26,Nt=20222662487959506e-37,xt=20222662487111665e-37,St=84784276603689e-45,Ut=2047;function Tt(r,e,t){var n,o,i,a,u;return i=r-(n=jt(r*At))*_t,a=n*Et,u=e>>20|0,t[0]=i-a,u-(ne(t[0])>>20&Ut)>16&&(a=n*Nt-((o=i)-(i=o-(a=n*Ot))-a),t[0]=i-a,u-(ne(t[0])>>20&Ut)>49&&(a=n*St-((o=i)-(i=o-(a=n*xt))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var kt=0,Ft=16777216,It=1.5707963267341256,Vt=6077100506506192e-26,Pt=2*Vt,Gt=3*Vt,Lt=4*Vt,$t=598523,Ct=1072243195,Ht=1073928572,Wt=1074752122,Bt=1074977148,Mt=1075183036,Rt=1075388923,Zt=1075594811,Xt=1094263291,Yt=[0,0,0],zt=[0,0];function qt(r,e){var t,n,o,i,a,u,c;if((o=ne(r)&Ue|0)<=Ct)return e[0]=r,e[1]=0,0;if(o<=Wt)return(o&ke)===$t?Tt(r,o,e):o<=Ht?r>0?(c=r-It,e[0]=c-Vt,e[1]=c-e[0]-Vt,1):(c=r+It,e[0]=c+Vt,e[1]=c-e[0]+Vt,-1):r>0?(c=r-2*It,e[0]=c-Pt,e[1]=c-e[0]-Pt,2):(c=r+2*It,e[0]=c+Pt,e[1]=c-e[0]+Pt,-2);if(o<=Zt)return o<=Mt?o===Bt?Tt(r,o,e):r>0?(c=r-3*It,e[0]=c-Gt,e[1]=c-e[0]-Gt,3):(c=r+3*It,e[0]=c+Gt,e[1]=c-e[0]+Gt,-3):o===Rt?Tt(r,o,e):r>0?(c=r-4*It,e[0]=c-Lt,e[1]=c-e[0]-Lt,4):(c=r+4*It,e[0]=c+Lt,e[1]=c-e[0]+Lt,-4);if(o<Xt)return Tt(r,o,e);if(o>=Te)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Ie[0]=r,Ve[Fe]}(r),c=He(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Yt[a]=0|c,c=(c-Yt[a])*Ft;for(Yt[2]=c,i=3;Yt[i-1]===kt;)i-=1;return u=mt(Yt,zt,n,i),r<0?(e[0]=-zt[0],e[1]=-zt[1],-u):(e[0]=zt[0],e[1]=zt[1],u)}var Dt=[0,0],Jt=2147483647,Kt=1072243195,Qt=1044381696,rn=2146435072;function en(r){var e;if(e=ne(r),(e&=Jt)<=Kt)return e<Qt?1:we(r,0);if(e>=rn)return NaN;switch(3&qt(r,Dt)){case 0:return we(Dt[0],Dt[1]);case 1:return-Ne(Dt[0],Dt[1]);case 2:return-we(Dt[0],Dt[1]);default:return Ne(Dt[0],Dt[1])}}var tn=1072243195,nn=1045430272,on=[0,0];function an(r){var e;if(e=ne(r),(e&=Ue)<=tn)return e<nn?r:Ne(r,0);if(e>=Te)return NaN;switch(3&qt(r,on)){case 0:return Ne(on[0],on[1]);case 1:return we(on[0],on[1]);case 2:return-Ne(on[0],on[1]);default:return-we(on[0],on[1])}}var un=3.141592653589793,cn=.07721566490153287,fn=.3224670334241136,sn=1,ln=-.07721566490153287,pn=.48383612272381005,yn=-.1475877229945939,vn=.06462494023913339,dn=-.07721566490153287,gn=1,bn=.4189385332046727,hn=1.4616321449683622,wn=4503599627370496,mn=0x400000000000000,jn=8470329472543003e-37,An=1.4616321449683622,_n=-.12148629053584961,En=-3638676997039505e-33;function On(r){var e,t,n,o,i,a,u,c,f,s,l,p,y;if(xr(r)||Tr(r))return r;if(0===r)return Sr;if(r<0?(e=!0,r=-r):e=!1,r<jn)return-ge(r);if(e){if(r>=wn)return Sr;if(f=function(r){var e,t;return xr(r)||Tr(r)?NaN:0===(e=kr(t=r%2))||1===e?et(0,t):e<.25?an(un*t):e<.75?et(en(un*(e=.5-e)),t):e<1.25?(t=et(1,t)-t,an(un*t)):e<1.75?-et(en(un*(e-=1.5)),t):(t-=et(2,t),an(un*t))}(r),0===f)return Sr;t=ge(un/kr(f*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(y=-ge(r),r>=hn-1+.27?(l=1-r,n=0):r>=hn-1-.27?(l=r-(An-1),n=1):(l=r,n=2)):(y=0,r>=hn+.27?(l=2-r,n=0):r>=hn-.27?(l=r-An,n=1):(l=r-1,n=2)),n){case 0:a=cn+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),i=p*(fn+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),y+=(u=l*a+i)-.5*l;break;case 1:a=pn+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),i=yn+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),o=vn+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),y+=_n+(u=p*a-(En-s*(i+l*o)));break;case 2:a=l*(dn+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),i=gn+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),y+=-.5*l+a/i}else if(r<8)switch(n=function(r){return r<0?he(r):be(r)}(r),u=(l=r-n)*(ln+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),c=sn+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),y=.5*l+u/c,p=1,n){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:y+=ge(p*=l+2)}else r<mn?(f=ge(r),s=bn+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),y=(r-.5)*(f-1)+s):y=r*(ge(r)-1);return e&&(y=t-y),y}return function(r){return Nr(r,On)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterGammaln=e();
//# sourceMappingURL=browser.js.map
