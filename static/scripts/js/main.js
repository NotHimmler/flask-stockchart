(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 Highstock JS v5.0.7 (2017-01-17)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(K,a){"object"===typeof module&&module.exports?module.exports=K.document?a(K):a:K.Highcharts=a(K)})("undefined"!==typeof window?window:this,function(K){K=function(){var a=window,E=a.document,D=a.navigator&&a.navigator.userAgent||"",H=E&&E.createElementNS&&!!E.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,I=/(edge|msie|trident)/i.test(D)&&!window.opera,v=!H,n=/Firefox/.test(D),m=n&&4>parseInt(D.split("Firefox/")[1],10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highstock",
version:"5.0.7",deg2rad:2*Math.PI/360,doc:E,hasBidiBug:m,hasTouch:E&&void 0!==E.documentElement.ontouchstart,isMS:I,isWebKit:/AppleWebKit/.test(D),isFirefox:n,isTouchDevice:/(Mobile|Android|Windows Phone)/.test(D),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:H,vml:v,win:a,charts:[],marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){}}}();(function(a){var E=[],D=a.charts,H=a.doc,I=a.win;a.error=function(v,n){v=a.isNumber(v)?"Highcharts error #"+
v+": www.highcharts.com/errors/"+v:v;if(n)throw Error(v);I.console&&console.log(v)};a.Fx=function(a,n,m){this.options=n;this.elem=a;this.prop=m};a.Fx.prototype={dSetter:function(){var a=this.paths[0],n=this.paths[1],m=[],z=this.now,t=a.length,q;if(1===z)m=this.toD;else if(t===n.length&&1>z)for(;t--;)q=parseFloat(a[t]),m[t]=isNaN(q)?a[t]:z*parseFloat(n[t]-q)+q;else m=n;this.elem.attr("d",m,null,!0)},update:function(){var a=this.elem,n=this.prop,m=this.now,z=this.options.step;if(this[n+"Setter"])this[n+
"Setter"]();else a.attr?a.element&&a.attr(n,m,null,!0):a.style[n]=m+this.unit;z&&z.call(a,m,this)},run:function(a,n,m){var v=this,t=function(a){return t.stopped?!1:v.step(a)},q;this.startTime=+new Date;this.start=a;this.end=n;this.unit=m;this.now=this.start;this.pos=0;t.elem=this.elem;t.prop=this.prop;t()&&1===E.push(t)&&(t.timerId=setInterval(function(){for(q=0;q<E.length;q++)E[q]()||E.splice(q--,1);E.length||clearInterval(t.timerId)},13))},step:function(a){var n=+new Date,m,v=this.options;m=this.elem;
var t=v.complete,q=v.duration,e=v.curAnim,b;if(m.attr&&!m.element)m=!1;else if(a||n>=q+this.startTime){this.now=this.end;this.pos=1;this.update();a=e[this.prop]=!0;for(b in e)!0!==e[b]&&(a=!1);a&&t&&t.call(m);m=!1}else this.pos=v.easing((n-this.startTime)/q),this.now=this.start+(this.end-this.start)*this.pos,this.update(),m=!0;return m},initPath:function(v,n,m){function z(a){var d,f;for(F=a.length;F--;)d="M"===a[F]||"L"===a[F],f=/[a-zA-Z]/.test(a[F+3]),d&&f&&a.splice(F+1,0,a[F+1],a[F+2],a[F+1],a[F+
2])}function t(a,d){for(;a.length<l;){a[0]=d[l-a.length];var f=a.slice(0,k);[].splice.apply(a,[0,0].concat(f));r&&(f=a.slice(a.length-k),[].splice.apply(a,[a.length,0].concat(f)),F--)}a[0]="M"}function q(a,d){for(var f=(l-a.length)/k;0<f&&f--;)g=a.slice().splice(a.length/u-k,k*u),g[0]=d[l-k-f*k],w&&(g[k-6]=g[k-2],g[k-5]=g[k-1]),[].splice.apply(a,[a.length/u,0].concat(g)),r&&f--}n=n||"";var e,b=v.startX,p=v.endX,w=-1<n.indexOf("C"),k=w?7:3,l,g,F;n=n.split(" ");m=m.slice();var r=v.isArea,u=r?2:1,f;
w&&(z(n),z(m));if(b&&p){for(F=0;F<b.length;F++)if(b[F]===p[0]){e=F;break}else if(b[0]===p[p.length-b.length+F]){e=F;f=!0;break}void 0===e&&(n=[])}n.length&&a.isNumber(e)&&(l=m.length+e*u*k,f?(t(n,m),q(m,n)):(t(m,n),q(n,m)));return[n,m]}};a.extend=function(a,n){var m;a||(a={});for(m in n)a[m]=n[m];return a};a.merge=function(){var v,n=arguments,m,z={},t=function(q,e){var b,p;"object"!==typeof q&&(q={});for(p in e)e.hasOwnProperty(p)&&(b=e[p],a.isObject(b,!0)&&"renderTo"!==p&&"number"!==typeof b.nodeType?
q[p]=t(q[p]||{},b):q[p]=e[p]);return q};!0===n[0]&&(z=n[1],n=Array.prototype.slice.call(n,2));m=n.length;for(v=0;v<m;v++)z=t(z,n[v]);return z};a.pInt=function(a,n){return parseInt(a,n||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(v,n){return v&&"object"===typeof v&&(!n||!a.isArray(v))};a.isNumber=function(a){return"number"===typeof a&&!isNaN(a)};a.erase=
function(a,n){for(var m=a.length;m--;)if(a[m]===n){a.splice(m,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(v,n,m){var z,t;if(a.isString(n))a.defined(m)?v.setAttribute(n,m):v&&v.getAttribute&&(t=v.getAttribute(n));else if(a.defined(n)&&a.isObject(n))for(z in n)v.setAttribute(z,n[z]);return t};a.splat=function(v){return a.isArray(v)?v:[v]};a.syncTimeout=function(a,n,m){if(n)return setTimeout(a,n,m);a.call(0,m)};a.pick=function(){var a=arguments,n,m,z=a.length;for(n=
0;n<z;n++)if(m=a[n],void 0!==m&&null!==m)return m};a.css=function(v,n){a.isMS&&!a.svg&&n&&void 0!==n.opacity&&(n.filter="alpha(opacity\x3d"+100*n.opacity+")");a.extend(v.style,n)};a.createElement=function(v,n,m,z,t){v=H.createElement(v);var q=a.css;n&&a.extend(v,n);t&&q(v,{padding:0,border:"none",margin:0});m&&q(v,m);z&&z.appendChild(v);return v};a.extendClass=function(v,n){var m=function(){};m.prototype=new v;a.extend(m.prototype,n);return m};a.pad=function(a,n,m){return Array((n||2)+1-String(a).length).join(m||
0)+a};a.relativeLength=function(a,n){return/%$/.test(a)?n*parseFloat(a)/100:parseFloat(a)};a.wrap=function(a,n,m){var v=a[n];a[n]=function(){var a=Array.prototype.slice.call(arguments),q=arguments,e=this;e.proceed=function(){v.apply(e,arguments.length?arguments:q)};a.unshift(v);a=m.apply(this,a);e.proceed=null;return a}};a.getTZOffset=function(v){var n=a.Date;return 6E4*(n.hcGetTimezoneOffset&&n.hcGetTimezoneOffset(v)||n.hcTimezoneOffset||0)};a.dateFormat=function(v,n,m){if(!a.defined(n)||isNaN(n))return a.defaultOptions.lang.invalidDate||
"";v=a.pick(v,"%Y-%m-%d %H:%M:%S");var z=a.Date,t=new z(n-a.getTZOffset(n)),q,e=t[z.hcGetHours](),b=t[z.hcGetDay](),p=t[z.hcGetDate](),w=t[z.hcGetMonth](),k=t[z.hcGetFullYear](),l=a.defaultOptions.lang,g=l.weekdays,F=l.shortWeekdays,r=a.pad,z=a.extend({a:F?F[b]:g[b].substr(0,3),A:g[b],d:r(p),e:r(p,2," "),w:b,b:l.shortMonths[w],B:l.months[w],m:r(w+1),y:k.toString().substr(2,2),Y:k,H:r(e),k:e,I:r(e%12||12),l:e%12||12,M:r(t[z.hcGetMinutes]()),p:12>e?"AM":"PM",P:12>e?"am":"pm",S:r(t.getSeconds()),L:r(Math.round(n%
1E3),3)},a.dateFormats);for(q in z)for(;-1!==v.indexOf("%"+q);)v=v.replace("%"+q,"function"===typeof z[q]?z[q](n):z[q]);return m?v.substr(0,1).toUpperCase()+v.substr(1):v};a.formatSingle=function(v,n){var m=/\.([0-9])/,z=a.defaultOptions.lang;/f$/.test(v)?(m=(m=v.match(m))?m[1]:-1,null!==n&&(n=a.numberFormat(n,m,z.decimalPoint,-1<v.indexOf(",")?z.thousandsSep:""))):n=a.dateFormat(v,n);return n};a.format=function(v,n){for(var m="{",z=!1,t,q,e,b,p=[],w;v;){m=v.indexOf(m);if(-1===m)break;t=v.slice(0,
m);if(z){t=t.split(":");q=t.shift().split(".");b=q.length;w=n;for(e=0;e<b;e++)w=w[q[e]];t.length&&(w=a.formatSingle(t.join(":"),w));p.push(w)}else p.push(t);v=v.slice(m+1);m=(z=!z)?"}":"{"}p.push(v);return p.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(v,n,m,z,t){var q,e=v;m=a.pick(m,1);q=v/m;n||(n=t?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===z&&(1===m?n=a.grep(n,function(a){return 0===a%1}):.1>=m&&(n=[1/m])));
for(z=0;z<n.length&&!(e=n[z],t&&e*m>=v||!t&&q<=(n[z]+(n[z+1]||n[z]))/2);z++);return e=a.correctFloat(e*m,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,n){var m=a.length,v,t;for(t=0;t<m;t++)a[t].safeI=t;a.sort(function(a,e){v=n(a,e);return 0===v?a.safeI-e.safeI:v});for(t=0;t<m;t++)delete a[t].safeI};a.arrayMin=function(a){for(var n=a.length,m=a[0];n--;)a[n]<m&&(m=a[n]);return m};a.arrayMax=function(a){for(var n=a.length,m=a[0];n--;)a[n]>m&&(m=a[n]);return m};a.destroyObjectProperties=
function(a,n){for(var m in a)a[m]&&a[m]!==n&&a[m].destroy&&a[m].destroy(),delete a[m]};a.discardElement=function(v){var n=a.garbageBin;n||(n=a.createElement("div"));v&&n.appendChild(v);n.innerHTML=""};a.correctFloat=function(a,n){return parseFloat(a.toPrecision(n||14))};a.setAnimation=function(v,n){n.renderer.globalAnimation=a.pick(v,n.options.chart.animation,!0)};a.animObject=function(v){return a.isObject(v)?a.merge(v):{duration:v?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,
day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(v,n,m,z){v=+v||0;n=+n;var t=a.defaultOptions.lang,q=(v.toString().split(".")[1]||"").length,e,b;-1===n?n=Math.min(q,20):a.isNumber(n)||(n=2);b=(Math.abs(v)+Math.pow(10,-Math.max(n,q)-1)).toFixed(n);q=String(a.pInt(b));e=3<q.length?q.length%3:0;m=a.pick(m,t.decimalPoint);z=a.pick(z,t.thousandsSep);v=(0>v?"-":"")+(e?q.substr(0,e)+z:"");v+=q.substr(e).replace(/(\d{3})(?=\d)/g,"$1"+z);n&&(v+=m+b.slice(-n));return v};Math.easeInOutSine=
function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(v,n){return"width"===n?Math.min(v.offsetWidth,v.scrollWidth)-a.getStyle(v,"padding-left")-a.getStyle(v,"padding-right"):"height"===n?Math.min(v.offsetHeight,v.scrollHeight)-a.getStyle(v,"padding-top")-a.getStyle(v,"padding-bottom"):(v=I.getComputedStyle(v,void 0))&&a.pInt(v.getPropertyValue(n))};a.inArray=function(a,n){return n.indexOf?n.indexOf(a):[].indexOf.call(n,a)};a.grep=function(a,n){return[].filter.call(a,n)};a.find=function(a,
n){return[].find.call(a,n)};a.map=function(a,n){for(var m=[],z=0,t=a.length;z<t;z++)m[z]=n.call(a[z],a[z],z,a);return m};a.offset=function(a){var n=H.documentElement;a=a.getBoundingClientRect();return{top:a.top+(I.pageYOffset||n.scrollTop)-(n.clientTop||0),left:a.left+(I.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}};a.stop=function(a,n){for(var m=E.length;m--;)E[m].elem!==a||n&&n!==E[m].prop||(E[m].stopped=!0)};a.each=function(a,n,m){return Array.prototype.forEach.call(a,n,m)};a.addEvent=function(v,
n,m){function z(a){a.target=a.srcElement||I;m.call(v,a)}var t=v.hcEvents=v.hcEvents||{};v.addEventListener?v.addEventListener(n,m,!1):v.attachEvent&&(v.hcEventsIE||(v.hcEventsIE={}),v.hcEventsIE[m.toString()]=z,v.attachEvent("on"+n,z));t[n]||(t[n]=[]);t[n].push(m);return function(){a.removeEvent(v,n,m)}};a.removeEvent=function(v,n,m){function z(a,b){v.removeEventListener?v.removeEventListener(a,b,!1):v.attachEvent&&(b=v.hcEventsIE[b.toString()],v.detachEvent("on"+a,b))}function t(){var a,b;if(v.nodeName)for(b in n?
(a={},a[n]=!0):a=e,a)if(e[b])for(a=e[b].length;a--;)z(b,e[b][a])}var q,e=v.hcEvents,b;e&&(n?(q=e[n]||[],m?(b=a.inArray(m,q),-1<b&&(q.splice(b,1),e[n]=q),z(n,m)):(t(),e[n]=[])):(t(),v.hcEvents={}))};a.fireEvent=function(v,n,m,z){var t;t=v.hcEvents;var q,e;m=m||{};if(H.createEvent&&(v.dispatchEvent||v.fireEvent))t=H.createEvent("Events"),t.initEvent(n,!0,!0),a.extend(t,m),v.dispatchEvent?v.dispatchEvent(t):v.fireEvent(n,t);else if(t)for(t=t[n]||[],q=t.length,m.target||a.extend(m,{preventDefault:function(){m.defaultPrevented=
!0},target:v,type:n}),n=0;n<q;n++)(e=t[n])&&!1===e.call(v,m)&&m.preventDefault();z&&!m.defaultPrevented&&z(m)};a.animate=function(v,n,m){var z,t="",q,e,b;a.isObject(m)||(z=arguments,m={duration:z[2],easing:z[3],complete:z[4]});a.isNumber(m.duration)||(m.duration=400);m.easing="function"===typeof m.easing?m.easing:Math[m.easing]||Math.easeInOutSine;m.curAnim=a.merge(n);for(b in n)a.stop(v,b),e=new a.Fx(v,m,b),q=null,"d"===b?(e.paths=e.initPath(v,v.d,n.d),e.toD=n.d,z=0,q=1):v.attr?z=v.attr(b):(z=parseFloat(a.getStyle(v,
b))||0,"opacity"!==b&&(t="px")),q||(q=n[b]),q.match&&q.match("px")&&(q=q.replace(/px/g,"")),e.run(z,q,t)};a.seriesType=function(v,n,m,z,t){var q=a.getOptions(),e=a.seriesTypes;q.plotOptions[v]=a.merge(q.plotOptions[n],m);e[v]=a.extendClass(e[n]||function(){},z);e[v].prototype.type=v;t&&(e[v].prototype.pointClass=a.extendClass(a.Point,t));return e[v]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),n=0;return function(){return"highcharts-"+a+"-"+n++}}();I.jQuery&&(I.jQuery.fn.highcharts=
function(){var v=[].slice.call(arguments);if(this[0])return v[0]?(new (a[a.isString(v[0])?v.shift():"Chart"])(this[0],v[0],v[1]),this):D[a.attr(this[0],"data-highcharts-chart")]});H&&!H.defaultView&&(a.getStyle=function(v,n){var m={width:"clientWidth",height:"clientHeight"}[n];if(v.style[n])return a.pInt(v.style[n]);"opacity"===n&&(n="filter");if(m)return v.style.zoom=1,Math.max(v[m]-2*a.getStyle(v,"padding"),0);v=v.currentStyle[n.replace(/\-(\w)/g,function(a,t){return t.toUpperCase()})];"filter"===
n&&(v=v.replace(/alpha\(opacity=([0-9]+)\)/,function(a,t){return t/100}));return""===v?1:a.pInt(v)});Array.prototype.forEach||(a.each=function(a,n,m){for(var z=0,t=a.length;z<t;z++)if(!1===n.call(m,a[z],z,a))return z});Array.prototype.indexOf||(a.inArray=function(a,n){var m,z=0;if(n)for(m=n.length;z<m;z++)if(n[z]===a)return z;return-1});Array.prototype.filter||(a.grep=function(a,n){for(var m=[],z=0,t=a.length;z<t;z++)n(a[z],z)&&m.push(a[z]);return m});Array.prototype.find||(a.find=function(a,n){var m,
z=a.length;for(m=0;m<z;m++)if(n(a[m],m))return a[m]})})(K);(function(a){var E=a.each,D=a.isNumber,H=a.map,I=a.merge,v=a.pInt;a.Color=function(n){if(!(this instanceof a.Color))return new a.Color(n);this.init(n)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[v(a[1]),v(a[2]),v(a[3]),parseFloat(a[4],10)]}},{regex:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(a){return[v(a[1],
16),v(a[2],16),v(a[3],16),1]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[v(a[1]),v(a[2]),v(a[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(n){var m,z,t,q;if((this.input=n=this.names[n]||n)&&n.stops)this.stops=H(n.stops,function(e){return new a.Color(e[1])});else for(t=this.parsers.length;t--&&!z;)q=this.parsers[t],(m=q.regex.exec(n))&&(z=q.parse(m));this.rgba=z||[]},get:function(a){var m=this.input,n=this.rgba,t;this.stops?
(t=I(m),t.stops=[].concat(t.stops),E(this.stops,function(q,e){t.stops[e]=[t.stops[e][0],q.get(a)]})):t=n&&D(n[0])?"rgb"===a||!a&&1===n[3]?"rgb("+n[0]+","+n[1]+","+n[2]+")":"a"===a?n[3]:"rgba("+n.join(",")+")":m;return t},brighten:function(a){var m,n=this.rgba;if(this.stops)E(this.stops,function(t){t.brighten(a)});else if(D(a)&&0!==a)for(m=0;3>m;m++)n[m]+=v(255*a),0>n[m]&&(n[m]=0),255<n[m]&&(n[m]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this}};a.color=function(n){return new a.Color(n)}})(K);
(function(a){var E,D,H=a.addEvent,I=a.animate,v=a.attr,n=a.charts,m=a.color,z=a.css,t=a.createElement,q=a.defined,e=a.deg2rad,b=a.destroyObjectProperties,p=a.doc,w=a.each,k=a.extend,l=a.erase,g=a.grep,F=a.hasTouch,r=a.inArray,u=a.isArray,f=a.isFirefox,B=a.isMS,d=a.isObject,x=a.isString,c=a.isWebKit,y=a.merge,L=a.noop,A=a.pick,J=a.pInt,h=a.removeEvent,G=a.stop,Q=a.svg,P=a.SVG_NS,N=a.symbolSizes,S=a.win;E=a.SVGElement=function(){return this};E.prototype={opacity:1,SVG_NS:P,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textDecoration textOverflow textOutline".split(" "),
init:function(a,h){this.element="span"===h?t(h):p.createElementNS(this.SVG_NS,h);this.renderer=a},animate:function(C,h,d){h=a.animObject(A(h,this.renderer.globalAnimation,!0));0!==h.duration?(d&&(h.complete=d),I(this,C,h)):this.attr(C,null,d);return this},colorGradient:function(C,h,d){var c=this.renderer,f,G,b,A,g,B,x,M,l,r,k,J=[],e;C.linearGradient?G="linearGradient":C.radialGradient&&(G="radialGradient");if(G){b=C[G];g=c.gradients;x=C.stops;r=d.radialReference;u(b)&&(C[G]=b={x1:b[0],y1:b[1],x2:b[2],
y2:b[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===G&&r&&!q(b.gradientUnits)&&(A=b,b=y(b,c.getRadialAttr(r,A),{gradientUnits:"userSpaceOnUse"}));for(k in b)"id"!==k&&J.push(k,b[k]);for(k in x)J.push(x[k]);J=J.join(",");g[J]?r=g[J].attr("id"):(b.id=r=a.uniqueKey(),g[J]=B=c.createElement(G).attr(b).add(c.defs),B.radAttr=A,B.stops=[],w(x,function(C){0===C[1].indexOf("rgba")?(f=a.color(C[1]),M=f.get("rgb"),l=f.get("a")):(M=C[1],l=1);C=c.createElement("stop").attr({offset:C[0],"stop-color":M,
"stop-opacity":l}).add(B);B.stops.push(C)}));e="url("+c.url+"#"+r+")";d.setAttribute(h,e);d.gradient=J;C.toString=function(){return e}}},applyTextOutline:function(a){var C=this.element,h,d,c,f;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(C.style.fill)));this.fakeTS=!0;this.ySetter=this.xSetter;h=[].slice.call(C.getElementsByTagName("tspan"));a=a.split(" ");d=a[a.length-1];(c=a[0])&&"none"!==c&&(c=c.replace(/(^[\d\.]+)(.*?)$/g,function(a,C,h){return 2*C+h}),w(h,function(a){"highcharts-text-outline"===
a.getAttribute("class")&&l(h,C.removeChild(a))}),f=C.firstChild,w(h,function(a,h){0===h&&(a.setAttribute("x",C.getAttribute("x")),h=C.getAttribute("y"),a.setAttribute("y",h||0),null===h&&C.setAttribute("y",0));a=a.cloneNode(1);v(a,{"class":"highcharts-text-outline",fill:d,stroke:d,"stroke-width":c,"stroke-linejoin":"round"});C.insertBefore(a,f)}))},attr:function(a,h,d,c){var C,f=this.element,b,y=this,A;"string"===typeof a&&void 0!==h&&(C=a,a={},a[C]=h);if("string"===typeof a)y=(this[a+"Getter"]||
this._defaultGetter).call(this,a,f);else{for(C in a)h=a[C],A=!1,c||G(this,C),this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(C)&&(b||(this.symbolAttr(a),b=!0),A=!0),!this.rotation||"x"!==C&&"y"!==C||(this.doTransform=!0),A||(A=this[C+"Setter"]||this._defaultSetter,A.call(this,h,C,f),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(C)&&this.updateShadows(C,h,A));this.doTransform&&(this.updateTransform(),this.doTransform=!1)}d&&d();return y},updateShadows:function(a,
h,d){for(var C=this.shadows,c=C.length;c--;)d.call(C[c],"height"===a?Math.max(h-(C[c].cutHeight||0),0):"d"===a?this.d:h,a,C[c])},addClass:function(a,h){var C=this.attr("class")||"";-1===C.indexOf(a)&&(h||(a=(C+(C?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==v(this.element,"class").indexOf(a)},removeClass:function(a){v(this.element,"class",(v(this.element,"class")||"").replace(a,""));return this},symbolAttr:function(a){var C=this;w("x y r start end width height innerR anchorX anchorY".split(" "),
function(h){C[h]=A(a[h],C[h])});C.attr({d:C.renderer.symbols[C.symbolName](C.x,C.y,C.width,C.height,C)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,h){var C,d={},c;h=h||a.strokeWidth||0;c=Math.round(h)%2/2;a.x=Math.floor(a.x||this.x||0)+c;a.y=Math.floor(a.y||this.y||0)+c;a.width=Math.floor((a.width||this.width||0)-2*c);a.height=Math.floor((a.height||this.height||0)-2*c);q(a.strokeWidth)&&(a.strokeWidth=h);for(C in a)this[C]!==a[C]&&
(this[C]=d[C]=a[C]);return d},css:function(a){var C=this.styles,h={},d=this.element,c,f,G="";c=!C;var b=["textOverflow","width"];a&&a.color&&(a.fill=a.color);if(C)for(f in a)a[f]!==C[f]&&(h[f]=a[f],c=!0);if(c){c=this.textWidth=a&&a.width&&"text"===d.nodeName.toLowerCase()&&J(a.width)||this.textWidth;C&&(a=k(C,h));this.styles=a;c&&!Q&&this.renderer.forExport&&delete a.width;if(B&&!Q)z(this.element,a);else{C=function(a,C){return"-"+C.toLowerCase()};for(f in a)-1===r(f,b)&&(G+=f.replace(/([A-Z])/g,C)+
":"+a[f]+";");G&&v(d,"style",G)}this.added&&(c&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,h){var C=this,d=C.element;F&&"click"===a?(d.ontouchstart=function(a){C.touchEventFired=Date.now();a.preventDefault();h.call(d,a)},d.onclick=function(a){(-1===S.navigator.userAgent.indexOf("Android")||1100<Date.now()-(C.touchEventFired||0))&&h.call(d,a)}):d["on"+a]=h;return this},setRadialReference:function(a){var C=
this.renderer.gradients[this.element.gradient];this.element.radialReference=a;C&&C.radAttr&&C.animate(this.renderer.getRadialAttr(a,C.radAttr));return this},translate:function(a,h){return this.attr({translateX:a,translateY:h})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,h=this.translateY||0,d=this.scaleX,c=this.scaleY,f=this.inverted,G=this.rotation,b=this.element;f&&(a+=this.width,h+=this.height);a=["translate("+a+","+
h+")"];f?a.push("rotate(90) scale(-1,1)"):G&&a.push("rotate("+G+" "+(b.getAttribute("x")||0)+" "+(b.getAttribute("y")||0)+")");(q(d)||q(c))&&a.push("scale("+A(d,1)+" "+A(c,1)+")");a.length&&b.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},align:function(a,h,d){var C,c,f,G,b={};c=this.renderer;f=c.alignedObjects;var y,g;if(a){if(this.alignOptions=a,this.alignByTranslate=h,!d||x(d))this.alignTo=C=d||"renderer",l(f,this),f.push(this),
d=null}else a=this.alignOptions,h=this.alignByTranslate,C=this.alignTo;d=A(d,c[C],c);C=a.align;c=a.verticalAlign;f=(d.x||0)+(a.x||0);G=(d.y||0)+(a.y||0);"right"===C?y=1:"center"===C&&(y=2);y&&(f+=(d.width-(a.width||0))/y);b[h?"translateX":"x"]=Math.round(f);"bottom"===c?g=1:"middle"===c&&(g=2);g&&(G+=(d.height-(a.height||0))/g);b[h?"translateY":"y"]=Math.round(G);this[this.placed?"animate":"attr"](b);this.placed=!0;this.alignAttr=b;return this},getBBox:function(a,h){var C,d=this.renderer,c,f=this.element,
G=this.styles,b,y=this.textStr,g,B=d.cache,x=d.cacheKeys,r;h=A(h,this.rotation);c=h*e;b=G&&G.fontSize;void 0!==y&&(r=y.toString(),-1===r.indexOf("\x3c")&&(r=r.replace(/[0-9]/g,"0")),r+=["",h||0,b,G&&G.width,G&&G.textOverflow].join());r&&!a&&(C=B[r]);if(!C){if(f.namespaceURI===this.SVG_NS||d.forExport){try{(g=this.fakeTS&&function(a){w(f.querySelectorAll(".highcharts-text-outline"),function(C){C.style.display=a})})&&g("none"),C=f.getBBox?k({},f.getBBox()):{width:f.offsetWidth,height:f.offsetHeight},
g&&g("")}catch(U){}if(!C||0>C.width)C={width:0,height:0}}else C=this.htmlGetBBox();d.isSVG&&(a=C.width,d=C.height,G&&"11px"===G.fontSize&&17===Math.round(d)&&(C.height=d=14),h&&(C.width=Math.abs(d*Math.sin(c))+Math.abs(a*Math.cos(c)),C.height=Math.abs(d*Math.cos(c))+Math.abs(a*Math.sin(c))));if(r&&0<C.height){for(;250<x.length;)delete B[x.shift()];B[r]||x.push(r);B[r]=C}}return C},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},
fadeOut:function(a){var C=this;C.animate({opacity:0},{duration:a||150,complete:function(){C.attr({y:-9999})}})},add:function(a){var C=this.renderer,h=this.element,d;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&C.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)d=this.zIndexSetter();d||(a?a.element:C.box).appendChild(h);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var h=a.parentNode;h&&h.removeChild(a)},destroy:function(){var a=
this.element||{},h=this.renderer.isSVG&&"SPAN"===a.nodeName&&this.parentGroup,d,c;a.onclick=a.onmouseout=a.onmouseover=a.onmousemove=a.point=null;G(this);this.clipPath&&(this.clipPath=this.clipPath.destroy());if(this.stops){for(c=0;c<this.stops.length;c++)this.stops[c]=this.stops[c].destroy();this.stops=null}this.safeRemoveChild(a);for(this.destroyShadows();h&&h.div&&0===h.div.childNodes.length;)a=h.parentGroup,this.safeRemoveChild(h.div),delete h.div,h=a;this.alignTo&&l(this.renderer.alignedObjects,
this);for(d in this)delete this[d];return null},shadow:function(a,h,d){var C=[],c,f,G=this.element,b,y,g,B;if(!a)this.destroyShadows();else if(!this.shadows){y=A(a.width,3);g=(a.opacity||.15)/y;B=this.parentInverted?"(-1,-1)":"("+A(a.offsetX,1)+", "+A(a.offsetY,1)+")";for(c=1;c<=y;c++)f=G.cloneNode(0),b=2*y+1-2*c,v(f,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":g*c,"stroke-width":b,transform:"translate"+B,fill:"none"}),d&&(v(f,"height",Math.max(v(f,"height")-b,0)),f.cutHeight=b),h?
h.element.appendChild(f):G.parentNode.insertBefore(f,G),C.push(f);this.shadows=C}return this},destroyShadows:function(){w(this.shadows||[],function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=A(this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,h,d){a&&a.join&&(a=
a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");d.setAttribute(h,a);this[h]=a},dashstyleSetter:function(a){var h,C=this["stroke-width"];"inherit"===C&&(C=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(h=a.length;h--;)a[h]=J(a[h])*C;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",
a)}},alignSetter:function(a){this.element.setAttribute("text-anchor",{left:"start",center:"middle",right:"end"}[a])},opacitySetter:function(a,h,d){this[h]=a;d.setAttribute(h,a)},titleSetter:function(a){var h=this.element.getElementsByTagName("title")[0];h||(h=p.createElementNS(this.SVG_NS,"title"),this.element.appendChild(h));h.firstChild&&h.removeChild(h.firstChild);h.appendChild(p.createTextNode(String(A(a),"").replace(/<[^>]*>/g,"")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,
this.textStr=a,this.added&&this.renderer.buildText(this))},fillSetter:function(a,h,d){"string"===typeof a?d.setAttribute(h,a):a&&this.colorGradient(a,h,d)},visibilitySetter:function(a,h,d){"inherit"===a?d.removeAttribute(h):d.setAttribute(h,a)},zIndexSetter:function(a,h){var C=this.renderer,d=this.parentGroup,c=(d||C).element||C.box,f,G=this.element,b;f=this.added;var y;q(a)&&(G.zIndex=a,a=+a,this[h]===a&&(f=!1),this[h]=a);if(f){(a=this.zIndex)&&d&&(d.handleZ=!0);h=c.childNodes;for(y=0;y<h.length&&
!b;y++)d=h[y],f=d.zIndex,d!==G&&(J(f)>a||!q(a)&&q(f)||0>a&&!q(f)&&c!==C.box)&&(c.insertBefore(G,d),b=!0);b||c.appendChild(G)}return b},_defaultSetter:function(a,h,d){d.setAttribute(h,a)}};E.prototype.yGetter=E.prototype.xGetter;E.prototype.translateXSetter=E.prototype.translateYSetter=E.prototype.rotationSetter=E.prototype.verticalAlignSetter=E.prototype.scaleXSetter=E.prototype.scaleYSetter=function(a,h){this[h]=a;this.doTransform=!0};E.prototype["stroke-widthSetter"]=E.prototype.strokeSetter=function(a,
h,d){this[h]=a;this.stroke&&this["stroke-width"]?(E.prototype.fillSetter.call(this,this.stroke,"stroke",d),d.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===h&&0===a&&this.hasStroke&&(d.removeAttribute("stroke"),this.hasStroke=!1)};D=a.SVGRenderer=function(){this.init.apply(this,arguments)};D.prototype={Element:E,SVG_NS:P,init:function(a,h,d,G,b,y){var C;G=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(G));C=G.element;
a.appendChild(C);-1===a.innerHTML.indexOf("xmlns")&&v(C,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=C;this.boxWrapper=G;this.alignedObjects=[];this.url=(f||c)&&p.getElementsByTagName("base").length?S.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highstock 5.0.7"));this.defs=this.createElement("defs").add();this.allowHTML=y;this.forExport=b;this.gradients=
{};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(h,d,!1);var A;f&&a.getBoundingClientRect&&(h=function(){z(a,{left:0,top:0});A=a.getBoundingClientRect();z(a,{left:Math.ceil(A.left)-A.left+"px",top:Math.ceil(A.top)-A.top+"px"})},h(),this.unSubPixelFix=H(S,"resize",h))},getStyle:function(a){return this.style=k({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},
destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();b(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var h=new this.Element;h.init(this,a);return h},draw:L,getRadialAttr:function(a,h){return{cx:a[0]-a[2]/2+h.cx*a[2],cy:a[1]-a[2]/2+h.cy*a[2],r:h.r*a[2]}},buildText:function(a){var h=a.element,d=this,c=d.forExport,f=A(a.textStr,"").toString(),
C=-1!==f.indexOf("\x3c"),G=h.childNodes,b,y,B,r,x=v(h,"x"),l=a.styles,u=a.textWidth,k=l&&l.lineHeight,e=l&&l.textOutline,F=l&&"ellipsis"===l.textOverflow,L=l&&"nowrap"===l.whiteSpace,t=l&&l.fontSize,q,m=G.length,l=u&&!a.added&&this.box,n=function(a){var c;c=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:t||d.style.fontSize||12;return k?J(k):d.fontMetrics(c,a.getAttribute("style")?a:h).h};q=[f,F,L,k,e,t,u].join();if(q!==a.textCache){for(a.textCache=q;m--;)h.removeChild(G[m]);C||e||F||u||-1!==
f.indexOf(" ")?(b=/<.*class="([^"]+)".*>/,y=/<.*style="([^"]+)".*>/,B=/<.*href="(http[^"]+)".*>/,l&&l.appendChild(h),f=C?f.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,"\x3c/span\x3e").split(/<br.*?>/g):[f],f=g(f,function(a){return""!==a}),w(f,function(f,C){var G,A=0;f=f.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");
G=f.split("|||");w(G,function(f){if(""!==f||1===G.length){var g={},l=p.createElementNS(d.SVG_NS,"tspan"),k,J;b.test(f)&&(k=f.match(b)[1],v(l,"class",k));y.test(f)&&(J=f.match(y)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),v(l,"style",J));B.test(f)&&!c&&(v(l,"onclick",'location.href\x3d"'+f.match(B)[1]+'"'),z(l,{cursor:"pointer"}));f=(f.replace(/<(.|\n)*?>/g,"")||" ").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e");if(" "!==f){l.appendChild(p.createTextNode(f));A?g.dx=0:C&&null!==x&&(g.x=x);v(l,g);
h.appendChild(l);!A&&C&&(!Q&&c&&z(l,{display:"block"}),v(l,"dy",n(l)));if(u){g=f.replace(/([^\^])-/g,"$1- ").split(" ");k=1<G.length||C||1<g.length&&!L;for(var e,w,M=[],t=n(l),q=a.rotation,m=f,N=m.length;(k||F)&&(g.length||M.length);)a.rotation=0,e=a.getBBox(!0),w=e.width,!Q&&d.forExport&&(w=d.measureSpanWidth(l.firstChild.data,a.styles)),e=w>u,void 0===r&&(r=e),F&&r?(N/=2,""===m||!e&&.5>N?g=[]:(m=f.substring(0,m.length+(e?-1:1)*Math.ceil(N)),g=[m+(3<u?"\u2026":"")],l.removeChild(l.firstChild))):
e&&1!==g.length?(l.removeChild(l.firstChild),M.unshift(g.pop())):(g=M,M=[],g.length&&!L&&(l=p.createElementNS(P,"tspan"),v(l,{dy:t,x:x}),J&&v(l,"style",J),h.appendChild(l)),w>u&&(u=w)),g.length&&l.appendChild(p.createTextNode(g.join(" ").replace(/- /g,"-")));a.rotation=q}A++}}})}),r&&a.attr("title",a.textStr),l&&l.removeChild(h),e&&a.applyTextOutline&&a.applyTextOutline(e)):h.appendChild(p.createTextNode(f.replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))}},getContrast:function(a){a=m(a).rgba;return 510<
a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,h,d,f,c,G,b,g,A){var C=this.label(a,h,d,A,null,null,null,null,"button"),l=0;C.attr(y({padding:8,r:2},c));var r,x,u,J;c=y({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},c);r=c.style;delete c.style;G=y(c,{fill:"#e6e6e6"},G);x=G.style;delete G.style;b=y(c,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},b);u=b.style;delete b.style;g=y(c,{style:{color:"#cccccc"}},g);J=g.style;
delete g.style;H(C.element,B?"mouseover":"mouseenter",function(){3!==l&&C.setState(1)});H(C.element,B?"mouseout":"mouseleave",function(){3!==l&&C.setState(l)});C.setState=function(a){1!==a&&(C.state=l=a);C.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);C.attr([c,G,b,g][a||0]).css([r,x,u,J][a||0])};C.attr(c).css(k({cursor:"default"},r));return C.on("click",function(a){3!==l&&f.call(C,a)})},crispLine:function(a,
h){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-h%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+h%2/2);return a},path:function(a){var h={fill:"none"};u(a)?h.d=a:d(a)&&k(h,a);return this.createElement("path").attr(h)},circle:function(a,h,c){a=d(a)?a:{x:a,y:h,r:c};h=this.createElement("circle");h.xSetter=h.ySetter=function(a,h,d){d.setAttribute("c"+h,a)};return h.attr(a)},arc:function(a,h,c,f,G,b){d(a)&&(h=a.y,c=a.r,f=a.innerR,G=a.start,b=a.end,a=a.x);a=this.symbol("arc",a||0,h||0,c||0,c||0,{innerR:f||
0,start:G||0,end:b||0});a.r=c;return a},rect:function(a,h,c,f,G,b){G=d(a)?a.r:G;var C=this.createElement("rect");a=d(a)?a:void 0===a?{}:{x:a,y:h,width:Math.max(c,0),height:Math.max(f,0)};void 0!==b&&(a.strokeWidth=b,a=C.crisp(a));a.fill="none";G&&(a.r=G);C.rSetter=function(a,h,d){v(d,{rx:a,ry:a})};return C.attr(a)},setSize:function(a,h,d){var c=this.alignedObjects,f=c.length;this.width=a;this.height=h;for(this.boxWrapper.animate({width:a,height:h},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+
" "+this.attr("height")})},duration:A(d,!0)?void 0:0});f--;)c[f].align()},g:function(a){var h=this.createElement("g");return a?h.attr({"class":"highcharts-"+a}):h},image:function(a,h,d,c,f){var G={preserveAspectRatio:"none"};1<arguments.length&&k(G,{x:h,y:d,width:c,height:f});G=this.createElement("image").attr(G);G.element.setAttributeNS?G.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):G.element.setAttribute("hc-svg-href",a);return G},symbol:function(a,h,d,c,f,G){var b=this,C,y=this.symbols[a],
g=q(h)&&y&&this.symbols[a](Math.round(h),Math.round(d),c,f,G),l=/^url\((.*?)\)$/,B,r;y?(C=this.path(g),C.attr("fill","none"),k(C,{symbolName:a,x:h,y:d,width:c,height:f}),G&&k(C,G)):l.test(a)&&(B=a.match(l)[1],C=this.image(B),C.imgwidth=A(N[B]&&N[B].width,G&&G.width),C.imgheight=A(N[B]&&N[B].height,G&&G.height),r=function(){C.attr({width:C.width,height:C.height})},w(["width","height"],function(a){C[a+"Setter"]=function(a,h){var d={},c=this["img"+h],f="width"===h?"translateX":"translateY";this[h]=a;
q(c)&&(this.element&&this.element.setAttribute(h,c),this.alignByTranslate||(d[f]=((this[h]||0)-c)/2,this.attr(d)))}}),q(h)&&C.attr({x:h,y:d}),C.isImg=!0,q(C.imgwidth)&&q(C.imgheight)?r():(C.attr({width:0,height:0}),t("img",{onload:function(){var a=n[b.chartIndex];0===this.width&&(z(this,{position:"absolute",top:"-999em"}),p.body.appendChild(this));N[B]={width:this.width,height:this.height};C.imgwidth=this.width;C.imgheight=this.height;C.element&&r();this.parentNode&&this.parentNode.removeChild(this);
b.imgCount--;if(!b.imgCount&&a&&a.onload)a.onload()},src:B}),this.imgCount++));return C},symbols:{circle:function(a,h,d,c){return this.arc(a+d/2,h+c/2,d/2,c/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,h,d,c){return["M",a,h,"L",a+d,h,a+d,h+c,a,h+c,"Z"]},triangle:function(a,h,d,c){return["M",a+d/2,h,"L",a+d,h+c,a,h+c,"Z"]},"triangle-down":function(a,h,d,c){return["M",a,h,"L",a+d,h,a+d/2,h+c,"Z"]},diamond:function(a,h,d,c){return["M",a+d/2,h,"L",a+d,h+c/2,a+d/2,h+c,a,h+c/2,"Z"]},arc:function(a,
h,d,c,f){var G=f.start,b=f.r||d,C=f.r||c||d,y=f.end-.001;d=f.innerR;c=f.open;var g=Math.cos(G),A=Math.sin(G),l=Math.cos(y),y=Math.sin(y);f=f.end-G<Math.PI?0:1;b=["M",a+b*g,h+C*A,"A",b,C,0,f,1,a+b*l,h+C*y];q(d)&&b.push(c?"M":"L",a+d*l,h+d*y,"A",d,d,0,f,0,a+d*g,h+d*A);b.push(c?"":"Z");return b},callout:function(a,h,d,c,f){var G=Math.min(f&&f.r||0,d,c),b=G+6,y=f&&f.anchorX;f=f&&f.anchorY;var g;g=["M",a+G,h,"L",a+d-G,h,"C",a+d,h,a+d,h,a+d,h+G,"L",a+d,h+c-G,"C",a+d,h+c,a+d,h+c,a+d-G,h+c,"L",a+G,h+c,"C",
a,h+c,a,h+c,a,h+c-G,"L",a,h+G,"C",a,h,a,h,a+G,h];y&&y>d?f>h+b&&f<h+c-b?g.splice(13,3,"L",a+d,f-6,a+d+6,f,a+d,f+6,a+d,h+c-G):g.splice(13,3,"L",a+d,c/2,y,f,a+d,c/2,a+d,h+c-G):y&&0>y?f>h+b&&f<h+c-b?g.splice(33,3,"L",a,f+6,a-6,f,a,f-6,a,h+G):g.splice(33,3,"L",a,c/2,y,f,a,c/2,a,h+G):f&&f>c&&y>a+b&&y<a+d-b?g.splice(23,3,"L",y+6,h+c,y,h+c+6,y-6,h+c,a+G,h+c):f&&0>f&&y>a+b&&y<a+d-b&&g.splice(3,3,"L",y-6,h,y,h-6,y+6,h,d-G,h);return g}},clipRect:function(h,d,c,f){var G=a.uniqueKey(),b=this.createElement("clipPath").attr({id:G}).add(this.defs);
h=this.rect(h,d,c,f,0).add(b);h.id=G;h.clipPath=b;h.count=0;return h},text:function(a,h,d,c){var f=!Q&&this.forExport,G={};if(c&&(this.allowHTML||!this.forExport))return this.html(a,h,d);G.x=Math.round(h||0);d&&(G.y=Math.round(d));if(a||0===a)G.text=a;a=this.createElement("text").attr(G);f&&a.css({position:"absolute"});c||(a.xSetter=function(a,h,d){var c=d.getElementsByTagName("tspan"),f,G=d.getAttribute(h),b;for(b=0;b<c.length;b++)f=c[b],f.getAttribute(h)===G&&f.setAttribute(h,a);d.setAttribute(h,
a)});return a},fontMetrics:function(a,h){a=a||h&&h.style&&h.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?J(a):/em/.test(a)?parseFloat(a)*(h?this.fontMetrics(null,h.parentNode).f:16):12;h=24>a?a+3:Math.round(1.2*a);return{h:h,b:Math.round(.8*h),f:a}},rotCorr:function(a,h,d){var c=a;h&&d&&(c=Math.max(c*Math.cos(h*e),4));return{x:-a/3*Math.sin(h*e),y:c}},label:function(a,d,c,f,G,b,g,A,l){var C=this,B=C.g("button"!==l&&"label"),r=B.text=C.text("",0,0,g).attr({zIndex:1}),x,u,J=0,e=3,
p=0,F,L,Q,P,t,m={},n,N,z=/^url\((.*?)\)$/.test(f),M=z,v,S,R,O;l&&B.addClass("highcharts-"+l);M=z;v=function(){return(n||0)%2/2};S=function(){var a=r.element.style,h={};u=(void 0===F||void 0===L||t)&&q(r.textStr)&&r.getBBox();B.width=(F||u.width||0)+2*e+p;B.height=(L||u.height||0)+2*e;N=e+C.fontMetrics(a&&a.fontSize,r).b;M&&(x||(B.box=x=C.symbols[f]||z?C.symbol(f):C.rect(),x.addClass(("button"===l?"":"highcharts-label-box")+(l?" highcharts-"+l+"-box":"")),x.add(B),a=v(),h.x=a,h.y=(A?-N:0)+a),h.width=
Math.round(B.width),h.height=Math.round(B.height),x.attr(k(h,m)),m={})};R=function(){var a=p+e,h;h=A?0:N;q(F)&&u&&("center"===t||"right"===t)&&(a+={center:.5,right:1}[t]*(F-u.width));if(a!==r.x||h!==r.y)r.attr("x",a),void 0!==h&&r.attr("y",h);r.x=a;r.y=h};O=function(a,h){x?x.attr(a,h):m[a]=h};B.onAdd=function(){r.add(B);B.attr({text:a||0===a?a:"",x:d,y:c});x&&q(G)&&B.attr({anchorX:G,anchorY:b})};B.widthSetter=function(a){F=a};B.heightSetter=function(a){L=a};B["text-alignSetter"]=function(a){t=a};
B.paddingSetter=function(a){q(a)&&a!==e&&(e=B.padding=a,R())};B.paddingLeftSetter=function(a){q(a)&&a!==p&&(p=a,R())};B.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==J&&(J=a,u&&B.attr({x:Q}))};B.textSetter=function(a){void 0!==a&&r.textSetter(a);S();R()};B["stroke-widthSetter"]=function(a,h){a&&(M=!0);n=this["stroke-width"]=a;O(h,a)};B.strokeSetter=B.fillSetter=B.rSetter=function(a,h){"fill"===h&&a&&(M=!0);O(h,a)};B.anchorXSetter=function(a,h){G=a;O(h,Math.round(a)-v()-Q)};B.anchorYSetter=
function(a,h){b=a;O(h,a-P)};B.xSetter=function(a){B.x=a;J&&(a-=J*((F||u.width)+2*e));Q=Math.round(a);B.attr("translateX",Q)};B.ySetter=function(a){P=B.y=Math.round(a);B.attr("translateY",P)};var T=B.css;return k(B,{css:function(a){if(a){var h={};a=y(a);w(B.textProps,function(d){void 0!==a[d]&&(h[d]=a[d],delete a[d])});r.css(h)}return T.call(B,a)},getBBox:function(){return{width:u.width+2*e,height:u.height+2*e,x:u.x-e,y:u.y-e}},shadow:function(a){a&&(S(),x&&x.shadow(a));return B},destroy:function(){h(B.element,
"mouseenter");h(B.element,"mouseleave");r&&(r=r.destroy());x&&(x=x.destroy());E.prototype.destroy.call(B);B=C=S=R=O=null}})}};a.Renderer=D})(K);(function(a){var E=a.attr,D=a.createElement,H=a.css,I=a.defined,v=a.each,n=a.extend,m=a.isFirefox,z=a.isMS,t=a.isWebKit,q=a.pInt,e=a.SVGRenderer,b=a.win,p=a.wrap;n(a.SVGElement.prototype,{htmlCss:function(a){var b=this.element;if(b=a&&"SPAN"===b.tagName&&a.width)delete a.width,this.textWidth=b,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace=
"nowrap",a.overflow="hidden");this.styles=n(this.styles,a);H(this.element,a);return this},htmlGetBBox:function(){var a=this.element;"text"===a.nodeName&&(a.style.position="absolute");return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,l=this.translateX||0,g=this.translateY||0,e=this.x||0,r=this.y||0,u=this.textAlign||"left",f={left:0,center:.5,right:1}[u],B=this.styles;H(b,{marginLeft:l,marginTop:g});
this.shadows&&v(this.shadows,function(a){H(a,{marginLeft:l+1,marginTop:g+1})});this.inverted&&v(b.childNodes,function(d){a.invertChild(d,b)});if("SPAN"===b.tagName){var d=this.rotation,x=q(this.textWidth),c=B&&B.whiteSpace,y=[d,u,b.innerHTML,this.textWidth,this.textAlign].join();y!==this.cTT&&(B=a.fontMetrics(b.style.fontSize).b,I(d)&&this.setSpanRotation(d,f,B),H(b,{width:"",whiteSpace:c||"nowrap"}),b.offsetWidth>x&&/[ \-]/.test(b.textContent||b.innerText)&&H(b,{width:x+"px",display:"block",whiteSpace:c||
"normal"}),this.getSpanCorrection(b.offsetWidth,B,f,d,u));H(b,{left:e+(this.xCorr||0)+"px",top:r+(this.yCorr||0)+"px"});t&&(B=b.offsetHeight);this.cTT=y}}else this.alignOnAdd=!0},setSpanRotation:function(a,k,l){var g={},e=z?"-ms-transform":t?"-webkit-transform":m?"MozTransform":b.opera?"-o-transform":"";g[e]=g.transform="rotate("+a+"deg)";g[e+(m?"Origin":"-origin")]=g.transformOrigin=100*k+"% "+l+"px";H(this.element,g)},getSpanCorrection:function(a,b,l){this.xCorr=-a*l;this.yCorr=-b}});n(e.prototype,
{html:function(a,b,l){var g=this.createElement("span"),k=g.element,r=g.renderer,u=r.isSVG,f=function(a,d){v(["opacity","visibility"],function(f){p(a,f+"Setter",function(a,f,b,g){a.call(this,f,b,g);d[b]=f})})};g.textSetter=function(a){a!==k.innerHTML&&delete this.bBox;k.innerHTML=this.textStr=a;g.htmlUpdateTransform()};u&&f(g,g.element.style);g.xSetter=g.ySetter=g.alignSetter=g.rotationSetter=function(a,d){"align"===d&&(d="textAlign");g[d]=a;g.htmlUpdateTransform()};g.attr({text:a,x:Math.round(b),
y:Math.round(l)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});k.style.whiteSpace="nowrap";g.css=g.htmlCss;u&&(g.add=function(a){var d,b=r.box.parentNode,c=[];if(this.parentGroup=a){if(d=a.div,!d){for(;a;)c.push(a),a=a.parentGroup;v(c.reverse(),function(a){var y,A=E(a.element,"class");A&&(A={className:A});d=a.div=a.div||D("div",A,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&
a.styles.pointerEvents},d||b);y=d.style;n(a,{on:function(){g.on.apply({element:c[0].div},arguments);return a},translateXSetter:function(d,h){y.left=d+"px";a[h]=d;a.doTransform=!0},translateYSetter:function(d,h){y.top=d+"px";a[h]=d;a.doTransform=!0}});f(a,y)})}}else d=b;d.appendChild(k);g.added=!0;g.alignOnAdd&&g.htmlUpdateTransform();return g});return g}})})(K);(function(a){var E,D,H=a.createElement,I=a.css,v=a.defined,n=a.deg2rad,m=a.discardElement,z=a.doc,t=a.each,q=a.erase,e=a.extend;E=a.extendClass;
var b=a.isArray,p=a.isNumber,w=a.isObject,k=a.merge;D=a.noop;var l=a.pick,g=a.pInt,F=a.SVGElement,r=a.SVGRenderer,u=a.win;a.svg||(D={docMode8:z&&8===z.documentMode,init:function(a,b){var d=["\x3c",b,' filled\x3d"f" stroked\x3d"f"'],f=["position: ","absolute",";"],c="div"===b;("shape"===b||c)&&f.push("left:0;top:0;width:1px;height:1px;");f.push("visibility: ",c?"hidden":"visible");d.push(' style\x3d"',f.join(""),'"/\x3e');b&&(d=c||"span"===b||"img"===b?d.join(""):a.prepVML(d),this.element=H(d));this.renderer=
a},add:function(a){var f=this.renderer,d=this.element,b=f.box,c=a&&a.inverted,b=a?a.element||a:b;a&&(this.parentGroup=a);c&&f.invertChild(d,b);b.appendChild(d);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:F.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=this.rotation,b=Math.cos(a*n),d=Math.sin(a*n);I(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11\x3d",
b,", M12\x3d",-d,", M21\x3d",d,", M22\x3d",b,", sizingMethod\x3d'auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,d,g,c){var f=g?Math.cos(g*n):1,B=g?Math.sin(g*n):0,A=l(this.elemHeight,this.element.offsetHeight),r;this.xCorr=0>f&&-a;this.yCorr=0>B&&-A;r=0>f*B;this.xCorr+=B*b*(r?1-d:d);this.yCorr-=f*b*(g?r?d:1-d:1);c&&"left"!==c&&(this.xCorr-=a*d*(0>f?-1:1),g&&(this.yCorr-=A*d*(0>B?-1:1)),I(this.element,{textAlign:c}))},pathToVML:function(a){for(var f=a.length,d=[];f--;)p(a[f])?d[f]=
Math.round(10*a[f])-5:"Z"===a[f]?d[f]="x":(d[f]=a[f],!a.isArc||"wa"!==a[f]&&"at"!==a[f]||(d[f+5]===d[f+7]&&(d[f+7]+=a[f+7]>a[f+5]?1:-1),d[f+6]===d[f+8]&&(d[f+8]+=a[f+8]>a[f+6]?1:-1)));return d.join(" ")||"x"},clip:function(a){var f=this,d;a?(d=a.members,q(d,f),d.push(f),f.destroyClip=function(){q(d,f)},a=a.getCSS(f)):(f.destroyClip&&f.destroyClip(),a={clip:f.docMode8?"inherit":"rect(auto)"});return f.css(a)},css:F.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&m(a)},destroy:function(){this.destroyClip&&
this.destroyClip();return F.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=u.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){var d;a=a.split(/[ ,]/);d=a.length;if(9===d||11===d)a[d-4]=a[d-2]=g(a[d-2])-10*b;return a.join(" ")},shadow:function(a,b,d){var f=[],c,y=this.element,r=this.renderer,A,B=y.style,h,G=y.path,u,k,e,p;G&&"string"!==typeof G.value&&(G="x");k=G;if(a){e=l(a.width,3);p=(a.opacity||.15)/e;for(c=1;3>=c;c++)u=2*e+1-2*c,d&&
(k=this.cutOffPath(G.value,u+.5)),h=['\x3cshape isShadow\x3d"true" strokeweight\x3d"',u,'" filled\x3d"false" path\x3d"',k,'" coordsize\x3d"10 10" style\x3d"',y.style.cssText,'" /\x3e'],A=H(r.prepVML(h),null,{left:g(B.left)+l(a.offsetX,1),top:g(B.top)+l(a.offsetY,1)}),d&&(A.cutOff=u+1),h=['\x3cstroke color\x3d"',a.color||"#000000",'" opacity\x3d"',p*c,'"/\x3e'],H(r.prepVML(h),null,null,A),b?b.element.appendChild(A):y.parentNode.insertBefore(A,y),f.push(A);this.shadows=f}return this},updateShadows:D,
setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,d){(d.getElementsByTagName("stroke")[0]||H(this.renderer.prepVML(["\x3cstroke/\x3e"]),null,null,d))[b]=a||"solid";this[b]=a},dSetter:function(a,b,d){var f=this.shadows;a=a||[];this.d=a.join&&a.join(" ");d.path=a=this.pathToVML(a);if(f)for(d=f.length;d--;)f[d].path=f[d].cutOff?this.cutOffPath(a,f[d].cutOff):a;this.setAttr(b,
a)},fillSetter:function(a,b,d){var f=d.nodeName;"SPAN"===f?d.style.color=a:"IMG"!==f&&(d.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,d,b,this)))},"fill-opacitySetter":function(a,b,d){H(this.renderer.prepVML(["\x3c",b.split("-")[0],' opacity\x3d"',a,'"/\x3e']),null,null,d)},opacitySetter:D,rotationSetter:function(a,b,d){d=d.style;this[b]=d[b]=a;d.left=-Math.round(Math.sin(a*n)+1)+"px";d.top=Math.round(Math.cos(a*n))+"px"},strokeSetter:function(a,b,d){this.setAttr("strokecolor",
this.renderer.color(a,d,b,this))},"stroke-widthSetter":function(a,b,d){d.stroked=!!a;this[b]=a;p(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,d){"inherit"===a&&(a="visible");this.shadows&&t(this.shadows,function(d){d.style[b]=a});"DIV"===d.nodeName&&(a="hidden"===a?"-999em":0,this.docMode8||(d.style[b]=a?"visible":"hidden"),b="top");d.style[b]=a},xSetter:function(a,b,d){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?
(this[b]=a,this.updateClipping()):d.style[b]=a},zIndexSetter:function(a,b,d){d.style[b]=a}},D["stroke-opacitySetter"]=D["fill-opacitySetter"],a.VMLElement=D=E(F,D),D.prototype.ySetter=D.prototype.widthSetter=D.prototype.heightSetter=D.prototype.xSetter,D={Element:D,isIE8:-1<u.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,d){var f,c;this.alignedObjects=[];f=this.createElement("div").css({position:"relative"});c=f.element;a.appendChild(f.element);this.isVML=!0;this.box=c;this.boxWrapper=
f;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,d,!1);if(!z.namespaces.hcv){z.namespaces.add("hcv","urn:schemas-microsoft-com:vml");try{z.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(y){z.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},
clipRect:function(a,b,d,g){var c=this.createElement(),f=w(a);return e(c,{members:[],count:0,left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?a.width:d)-1,height:(f?a.height:g)-1,getCSS:function(a){var d=a.element,c=d.nodeName,h=a.inverted,b=this.top-("shape"===c?d.offsetTop:0),f=this.left,d=f+this.width,g=b+this.height,b={clip:"rect("+Math.round(h?f:b)+"px,"+Math.round(h?g:d)+"px,"+Math.round(h?d:g)+"px,"+Math.round(h?b:f)+"px)"};!h&&a.docMode8&&"DIV"===c&&e(b,{width:d+"px",height:g+"px"});return b},updateClipping:function(){t(c.members,
function(a){a.element&&a.css(c.getCSS(a))})}})},color:function(b,g,d,l){var c=this,f,r=/^rgba/,A,u,h="none";b&&b.linearGradient?u="gradient":b&&b.radialGradient&&(u="pattern");if(u){var G,x,k=b.linearGradient||b.radialGradient,e,B,C,p,F,w="";b=b.stops;var q,m=[],n=function(){A=['\x3cfill colors\x3d"'+m.join(",")+'" opacity\x3d"',C,'" o:opacity2\x3d"',B,'" type\x3d"',u,'" ',w,'focus\x3d"100%" method\x3d"any" /\x3e'];H(c.prepVML(A),null,null,g)};e=b[0];q=b[b.length-1];0<e[0]&&b.unshift([0,e[1]]);1>
q[0]&&b.push([1,q[1]]);t(b,function(h,d){r.test(h[1])?(f=a.color(h[1]),G=f.get("rgb"),x=f.get("a")):(G=h[1],x=1);m.push(100*h[0]+"% "+G);d?(C=x,p=G):(B=x,F=G)});if("fill"===d)if("gradient"===u)d=k.x1||k[0]||0,b=k.y1||k[1]||0,e=k.x2||k[2]||0,k=k.y2||k[3]||0,w='angle\x3d"'+(90-180*Math.atan((k-b)/(e-d))/Math.PI)+'"',n();else{var h=k.r,z=2*h,v=2*h,D=k.cx,E=k.cy,I=g.radialReference,K,h=function(){I&&(K=l.getBBox(),D+=(I[0]-K.x)/K.width-.5,E+=(I[1]-K.y)/K.height-.5,z*=I[2]/K.width,v*=I[2]/K.height);w=
'src\x3d"'+a.getOptions().global.VMLRadialGradientURL+'" size\x3d"'+z+","+v+'" origin\x3d"0.5,0.5" position\x3d"'+D+","+E+'" color2\x3d"'+F+'" ';n()};l.added?h():l.onAdd=h;h=p}else h=G}else r.test(b)&&"IMG"!==g.tagName?(f=a.color(b),l[d+"-opacitySetter"](f.get("a"),d,g),h=f.get("rgb")):(h=g.getElementsByTagName(d),h.length&&(h[0].opacity=1,h[0].type="solid"),h=b);return h},prepVML:function(a){var b=this.isIE8;a=a.join("");b?(a=a.replace("/\x3e",' xmlns\x3d"urn:schemas-microsoft-com:vml" /\x3e'),a=
-1===a.indexOf('style\x3d"')?a.replace("/\x3e",' style\x3d"display:inline-block;behavior:url(#default#VML);" /\x3e'):a.replace('style\x3d"','style\x3d"display:inline-block;behavior:url(#default#VML);')):a=a.replace("\x3c","\x3chcv:");return a},text:r.prototype.html,path:function(a){var f={coordsize:"10 10"};b(a)?f.d=a:w(a)&&e(f,a);return this.createElement("shape").attr(f)},circle:function(a,b,d){var f=this.symbol("circle");w(a)&&(d=a.r,b=a.y,a=a.x);f.isCircle=!0;f.r=d;return f.attr({x:a,y:b})},g:function(a){var b;
a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,d,g,c){var f=this.createElement("img").attr({src:a});1<arguments.length&&f.attr({x:b,y:d,width:g,height:c});return f},createElement:function(a){return"rect"===a?this.symbol(a):r.prototype.createElement.call(this,a)},invertChild:function(a,b){var d=this;b=b.style;var f="IMG"===a.tagName&&a.style;I(a,{flip:"x",left:g(b.width)-(f?g(f.top):1),top:g(b.height)-(f?g(f.left):1),rotation:-90});
t(a.childNodes,function(b){d.invertChild(b,a)})},symbols:{arc:function(a,b,d,g,c){var f=c.start,l=c.end,A=c.r||d||g;d=c.innerR;g=Math.cos(f);var r=Math.sin(f),h=Math.cos(l),G=Math.sin(l);if(0===l-f)return["x"];f=["wa",a-A,b-A,a+A,b+A,a+A*g,b+A*r,a+A*h,b+A*G];c.open&&!d&&f.push("e","M",a,b);f.push("at",a-d,b-d,a+d,b+d,a+d*h,b+d*G,a+d*g,b+d*r,"x","e");f.isArc=!0;return f},circle:function(a,b,d,g,c){c&&v(c.r)&&(d=g=2*c.r);c&&c.isCircle&&(a-=d/2,b-=g/2);return["wa",a,b,a+d,b+g,a+d,b+g/2,a+d,b+g/2,"e"]},
rect:function(a,b,d,g,c){return r.prototype.symbols[v(c)&&c.r?"callout":"square"].call(0,a,b,d,g,c)}}},a.VMLRenderer=E=function(){this.init.apply(this,arguments)},E.prototype=k(r.prototype,D),a.Renderer=E);r.prototype.measureSpanWidth=function(a,b){var d=z.createElement("span");a=z.createTextNode(a);d.appendChild(a);I(d,b);this.box.appendChild(d);b=d.offsetWidth;m(d);return b}})(K);(function(a){function E(){var t=a.defaultOptions.global,q=z.moment;if(t.timezone){if(q)return function(a){return-q.tz(a,
t.timezone).utcOffset()};a.error(25)}return t.useUTC&&t.getTimezoneOffset}function D(){var t=a.defaultOptions.global,q,e=t.useUTC,b=e?"getUTC":"get",p=e?"setUTC":"set";a.Date=q=t.Date||z.Date;q.hcTimezoneOffset=e&&t.timezoneOffset;q.hcGetTimezoneOffset=E();q.hcMakeTime=function(a,b,l,g,p,r){var u;e?(u=q.UTC.apply(0,arguments),u+=v(u)):u=(new q(a,b,m(l,1),m(g,0),m(p,0),m(r,0))).getTime();return u};I("Minutes Hours Day Date Month FullYear".split(" "),function(a){q["hcGet"+a]=b+a});I("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "),
function(a){q["hcSet"+a]=p+a})}var H=a.color,I=a.each,v=a.getTZOffset,n=a.merge,m=a.pick,z=a.win;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{useUTC:!0,VMLRadialGradientURL:"http://code.highcharts.com/5.0.7/gfx/vml-radial-gradient.png"},chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:20},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",
align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",
width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",
month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:H("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",
position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(t){a.defaultOptions=n(!0,a.defaultOptions,t);D();return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;D()})(K);(function(a){var E=a.arrayMax,D=a.arrayMin,H=a.defined,I=a.destroyObjectProperties,v=a.each,n=a.erase,m=a.merge,z=a.pick;a.PlotLineOrBand=function(a,q){this.axis=
a;q&&(this.options=q,this.id=q.id)};a.PlotLineOrBand.prototype={render:function(){var a=this,q=a.axis,e=q.horiz,b=a.options,p=b.label,w=a.label,k=b.to,l=b.from,g=b.value,F=H(l)&&H(k),r=H(g),u=a.svgElem,f=!u,B=[],d,x=b.color,c=z(b.zIndex,0),y=b.events,B={"class":"highcharts-plot-"+(F?"band ":"line ")+(b.className||"")},L={},A=q.chart.renderer,J=F?"bands":"lines",h=q.log2lin;q.isLog&&(l=h(l),k=h(k),g=h(g));r?(B={stroke:x,"stroke-width":b.width},b.dashStyle&&(B.dashstyle=b.dashStyle)):F&&(x&&(B.fill=
x),b.borderWidth&&(B.stroke=b.borderColor,B["stroke-width"]=b.borderWidth));L.zIndex=c;J+="-"+c;(x=q[J])||(q[J]=x=A.g("plot-"+J).attr(L).add());f&&(a.svgElem=u=A.path().attr(B).add(x));if(r)B=q.getPlotLinePath(g,u.strokeWidth());else if(F)B=q.getPlotBandPath(l,k,b);else return;if(f&&B&&B.length){if(u.attr({d:B}),y)for(d in b=function(h){u.on(h,function(b){y[h].apply(a,[b])})},y)b(d)}else u&&(B?(u.show(),u.animate({d:B})):(u.hide(),w&&(a.label=w=w.destroy())));p&&H(p.text)&&B&&B.length&&0<q.width&&
0<q.height&&!B.flat?(p=m({align:e&&F&&"center",x:e?!F&&4:10,verticalAlign:!e&&F&&"middle",y:e?F?16:10:F?6:-4,rotation:e&&!F&&90},p),this.renderLabel(p,B,F,c)):w&&w.hide();return a},renderLabel:function(a,q,e,b){var p=this.label,w=this.axis.chart.renderer;p||(p={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(e?"band":"line")+"-label "+(a.className||"")},p.zIndex=b,this.label=p=w.text(a.text,0,0,a.useHTML).attr(p).add(),p.css(a.style));b=[q[1],q[4],e?q[6]:q[1]];q=[q[2],q[5],
e?q[7]:q[2]];e=D(b);w=D(q);p.align(a,!1,{x:e,y:w,width:E(b)-e,height:E(q)-w});p.show()},destroy:function(){n(this.axis.plotLinesAndBands,this);delete this.axis;I(this)}};a.AxisPlotLineOrBandExtension={getPlotBandPath:function(a,q){q=this.getPlotLinePath(q,null,null,!0);(a=this.getPlotLinePath(a,null,null,!0))&&q?(a.flat=a.toString()===q.toString(),a.push(q[4],q[5],q[1],q[2],"z")):a=null;return a},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},addPlotLine:function(a){return this.addPlotBandOrLine(a,
"plotLines")},addPlotBandOrLine:function(m,q){var e=(new a.PlotLineOrBand(this,m)).render(),b=this.userOptions;e&&(q&&(b[q]=b[q]||[],b[q].push(m)),this.plotLinesAndBands.push(e));return e},removePlotBandOrLine:function(a){for(var q=this.plotLinesAndBands,e=this.options,b=this.userOptions,p=q.length;p--;)q[p].id===a&&q[p].destroy();v([e.plotLines||[],b.plotLines||[],e.plotBands||[],b.plotBands||[]],function(b){for(p=b.length;p--;)b[p].id===a&&n(b,b[p])})}}})(K);(function(a){var E=a.correctFloat,D=
a.defined,H=a.destroyObjectProperties,I=a.isNumber,v=a.merge,n=a.pick,m=a.deg2rad;a.Tick=function(a,m,q,e){this.axis=a;this.pos=m;this.type=q||"";this.isNew=!0;q||e||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,m=a.options,q=a.chart,e=a.categories,b=a.names,p=this.pos,w=m.labels,k=a.tickPositions,l=p===k[0],g=p===k[k.length-1],b=e?n(e[p],b[p],p):p,e=this.label,k=k.info,F;a.isDatetimeAxis&&k&&(F=m.dateTimeLabelFormats[k.higherRanks[p]||k.unitName]);this.isFirst=l;this.isLast=
g;m=a.labelFormatter.call({axis:a,chart:q,isFirst:l,isLast:g,dateTimeLabelFormat:F,value:a.isLog?E(a.lin2log(b)):b});D(e)?e&&e.attr({text:m}):(this.labelLength=(this.label=e=D(m)&&w.enabled?q.renderer.text(m,0,0,w.useHTML).css(v(w.style)).add(a.labelGroup):null)&&e.getBBox().width,this.rotation=0)},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(a){var t=this.axis,q=a.x,e=t.chart.chartWidth,b=t.chart.spacing,p=n(t.labelLeft,
Math.min(t.pos,b[3])),b=n(t.labelRight,Math.max(t.pos+t.len,e-b[1])),w=this.label,k=this.rotation,l={left:0,center:.5,right:1}[t.labelAlign],g=w.getBBox().width,F=t.getSlotWidth(),r=F,u=1,f,B={};if(k)0>k&&q-l*g<p?f=Math.round(q/Math.cos(k*m)-p):0<k&&q+l*g>b&&(f=Math.round((e-q)/Math.cos(k*m)));else if(e=q+(1-l)*g,q-l*g<p?r=a.x+r*(1-l)-p:e>b&&(r=b-a.x+r*l,u=-1),r=Math.min(F,r),r<F&&"center"===t.labelAlign&&(a.x+=u*(F-r-l*(F-Math.min(g,r)))),g>r||t.autoRotation&&(w.styles||{}).width)f=r;f&&(B.width=
f,(t.options.labels.style||{}).textOverflow||(B.textOverflow="ellipsis"),w.css(B))},getPosition:function(a,m,q,e){var b=this.axis,p=b.chart,w=e&&p.oldChartHeight||p.chartHeight;return{x:a?b.translate(m+q,null,null,e)+b.transB:b.left+b.offset+(b.opposite?(e&&p.oldChartWidth||p.chartWidth)-b.right-b.left:0),y:a?w-b.bottom+b.offset-(b.opposite?b.height:0):w-b.translate(m+q,null,null,e)-b.transB}},getLabelPosition:function(a,n,q,e,b,p,w,k){var l=this.axis,g=l.transA,F=l.reversed,r=l.staggerLines,u=l.tickRotCorr||
{x:0,y:0},f=b.y;D(f)||(f=0===l.side?q.rotation?-8:-q.getBBox().height:2===l.side?u.y+8:Math.cos(q.rotation*m)*(u.y-q.getBBox(!1,0).height/2));a=a+b.x+u.x-(p&&e?p*g*(F?-1:1):0);n=n+f-(p&&!e?p*g*(F?1:-1):0);r&&(q=w/(k||1)%r,l.opposite&&(q=r-q-1),n+=l.labelOffset/r*q);return{x:a,y:Math.round(n)}},getMarkPath:function(a,m,q,e,b,p){return p.crispLine(["M",a,m,"L",a+(b?0:-q),m+(b?q:0)],e)},render:function(a,m,q){var e=this.axis,b=e.options,p=e.chart.renderer,w=e.horiz,k=this.type,l=this.label,g=this.pos,
F=b.labels,r=this.gridLine,u=k?k+"Tick":"tick",f=e.tickSize(u),B=this.mark,d=!B,x=F.step,c={},y=!0,L=e.tickmarkOffset,A=this.getPosition(w,g,L,m),J=A.x,A=A.y,h=w&&J===e.pos+e.len||!w&&A===e.pos?-1:1,G=k?k+"Grid":"grid",Q=b[G+"LineWidth"],P=b[G+"LineColor"],t=b[G+"LineDashStyle"],G=n(b[u+"Width"],!k&&e.isXAxis?1:0),u=b[u+"Color"];q=n(q,1);this.isActive=!0;r||(c.stroke=P,c["stroke-width"]=Q,t&&(c.dashstyle=t),k||(c.zIndex=1),m&&(c.opacity=0),this.gridLine=r=p.path().attr(c).addClass("highcharts-"+(k?
k+"-":"")+"grid-line").add(e.gridGroup));if(!m&&r&&(g=e.getPlotLinePath(g+L,r.strokeWidth()*h,m,!0)))r[this.isNew?"attr":"animate"]({d:g,opacity:q});f&&(e.opposite&&(f[0]=-f[0]),d&&(this.mark=B=p.path().addClass("highcharts-"+(k?k+"-":"")+"tick").add(e.axisGroup),B.attr({stroke:u,"stroke-width":G})),B[d?"attr":"animate"]({d:this.getMarkPath(J,A,f[0],B.strokeWidth()*h,w,p),opacity:q}));l&&I(J)&&(l.xy=A=this.getLabelPosition(J,A,l,w,F,L,a,x),this.isFirst&&!this.isLast&&!n(b.showFirstLabel,1)||this.isLast&&
!this.isFirst&&!n(b.showLastLabel,1)?y=!1:!w||e.isRadial||F.step||F.rotation||m||0===q||this.handleOverflow(A),x&&a%x&&(y=!1),y&&I(A.y)?(A.opacity=q,l[this.isNew?"attr":"animate"](A)):l.attr("y",-9999),this.isNew=!1)},destroy:function(){H(this,this.axis)}}})(K);(function(a){var E=a.addEvent,D=a.animObject,H=a.arrayMax,I=a.arrayMin,v=a.AxisPlotLineOrBandExtension,n=a.color,m=a.correctFloat,z=a.defaultOptions,t=a.defined,q=a.deg2rad,e=a.destroyObjectProperties,b=a.each,p=a.extend,w=a.fireEvent,k=a.format,
l=a.getMagnitude,g=a.grep,F=a.inArray,r=a.isArray,u=a.isNumber,f=a.isString,B=a.merge,d=a.normalizeTickInterval,x=a.pick,c=a.PlotLineOrBand,y=a.removeEvent,L=a.splat,A=a.syncTimeout,J=a.Tick;a.Axis=function(){this.init.apply(this,arguments)};a.Axis.prototype={defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},
x:0},minPadding:.01,maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,
minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],
x:0},title:{rotation:0}},init:function(a,b){var h=b.isX;this.chart=a;this.horiz=a.inverted?!h:h;this.isXAxis=h;this.coll=this.coll||(h?"xAxis":"yAxis");this.opposite=b.opposite;this.side=b.side||(this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(b);var d=this.options,c=d.type;this.labelFormatter=d.labels.formatter||this.defaultLabelFormatter;this.userOptions=b;this.minPixelPadding=0;this.reversed=d.reversed;this.visible=!1!==d.visible;this.zoomEnabled=!1!==d.zoomEnabled;this.hasNames=
"category"===c||!0===d.categories;this.categories=d.categories||this.hasNames;this.names=this.names||[];this.isLog="logarithmic"===c;this.isDatetimeAxis="datetime"===c;this.isLinked=t(d.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=d.minRange||d.maxZoom;this.range=d.range;this.offset=d.offset||0;this.stacks={};this.oldStacks={};this.stacksTouched=0;this.min=this.max=null;this.crosshair=x(d.crosshair,
L(a.options.tooltip.crosshairs)[h?0:1],!1);var G;b=this.options.events;-1===F(this,a.axes)&&(h?a.axes.splice(a.xAxis.length,0,this):a.axes.push(this),a[this.coll].push(this));this.series=this.series||[];a.inverted&&h&&void 0===this.reversed&&(this.reversed=!0);this.removePlotLine=this.removePlotBand=this.removePlotBandOrLine;for(G in b)E(this,G,b[G]);this.isLog&&(this.val2lin=this.log2lin,this.lin2val=this.lin2log)},setOptions:function(a){this.options=B(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,
[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],B(z[this.coll],a))},defaultLabelFormatter:function(){var h=this.axis,b=this.value,d=h.categories,c=this.dateTimeLabelFormat,f=z.lang,g=f.numericSymbols,f=f.numericSymbolMagnitude||1E3,y=g&&g.length,l,A=h.options.labels.format,h=h.isLog?b:h.tickInterval;if(A)l=k(A,this);else if(d)l=b;else if(c)l=a.dateFormat(c,b);else if(y&&1E3<=h)for(;y--&&void 0===l;)d=Math.pow(f,y+1),h>=
d&&0===10*b%d&&null!==g[y]&&0!==b&&(l=a.numberFormat(b/d,-1)+g[y]);void 0===l&&(l=1E4<=Math.abs(b)?a.numberFormat(b,-1):a.numberFormat(b,-1,void 0,""));return l},getSeriesExtremes:function(){var a=this,d=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();b(a.series,function(h){if(h.visible||!d.options.chart.ignoreHiddenSeries){var b=h.options,c=b.threshold,G;a.hasVisibleSeries=!0;a.isLog&&0>=c&&(c=null);if(a.isXAxis)b=h.xData,
b.length&&(h=I(b),u(h)||h instanceof Date||(b=g(b,function(a){return u(a)}),h=I(b)),a.dataMin=Math.min(x(a.dataMin,b[0]),h),a.dataMax=Math.max(x(a.dataMax,b[0]),H(b)));else if(h.getExtremes(),G=h.dataMax,h=h.dataMin,t(h)&&t(G)&&(a.dataMin=Math.min(x(a.dataMin,h),h),a.dataMax=Math.max(x(a.dataMax,G),G)),t(c)&&(a.threshold=c),!b.softThreshold||a.isLog)a.softThreshold=!1}})},translate:function(a,b,d,c,f,g){var h=this.linkedParent||this,G=1,y=0,l=c?h.oldTransA:h.transA;c=c?h.oldMin:h.min;var A=h.minPixelPadding;
f=(h.isOrdinal||h.isBroken||h.isLog&&f)&&h.lin2val;l||(l=h.transA);d&&(G*=-1,y=h.len);h.reversed&&(G*=-1,y-=G*(h.sector||h.len));b?(a=(a*G+y-A)/l+c,f&&(a=h.lin2val(a))):(f&&(a=h.val2lin(a)),a=G*(a-c)*l+y+G*A+(u(g)?l*g:0));return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,b,d,c,f){var h=this.chart,G=this.left,g=this.top,y,l,A=d&&h.oldChartHeight||
h.chartHeight,r=d&&h.oldChartWidth||h.chartWidth,k;y=this.transB;var e=function(a,h,b){if(a<h||a>b)c?a=Math.min(Math.max(h,a),b):k=!0;return a};f=x(f,this.translate(a,null,null,d));a=d=Math.round(f+y);y=l=Math.round(A-f-y);u(f)?this.horiz?(y=g,l=A-this.bottom,a=d=e(a,G,G+this.width)):(a=G,d=r-this.right,y=l=e(y,g,g+this.height)):k=!0;return k&&!c?null:h.renderer.crispLine(["M",a,y,"L",d,l],b||1)},getLinearTickPositions:function(a,b,d){var h,c=m(Math.floor(b/a)*a),f=m(Math.ceil(d/a)*a),G=[];if(b===
d&&u(b))return[b];for(b=c;b<=f;){G.push(b);b=m(b+a);if(b===h)break;h=b}return G},getMinorTickPositions:function(){var a=this.options,b=this.tickPositions,d=this.minorTickInterval,c=[],f,g=this.pointRangePadding||0;f=this.min-g;var g=this.max+g,y=g-f;if(y&&y/d<this.len/3)if(this.isLog)for(g=b.length,f=1;f<g;f++)c=c.concat(this.getLogTickPositions(d,b[f-1],b[f],!0));else if(this.isDatetimeAxis&&"auto"===a.minorTickInterval)c=c.concat(this.getTimeTicks(this.normalizeTimeTickInterval(d),f,g,a.startOfWeek));
else for(b=f+(b[0]-f)%d;b<=g&&b!==c[0];b+=d)c.push(b);0!==c.length&&this.trimTicks(c,a.startOnTick,a.endOnTick);return c},adjustForMinRange:function(){var a=this.options,d=this.min,c=this.max,f,g=this.dataMax-this.dataMin>=this.minRange,y,l,A,r,u,k;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(t(a.min)||t(a.max)?this.minRange=null:(b(this.series,function(a){r=a.xData;for(l=u=a.xIncrement?1:r.length-1;0<l;l--)if(A=r[l]-r[l-1],void 0===y||A<y)y=A}),this.minRange=Math.min(5*y,this.dataMax-this.dataMin)));
c-d<this.minRange&&(k=this.minRange,f=(k-c+d)/2,f=[d-f,x(a.min,d-f)],g&&(f[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin),d=H(f),c=[d+k,x(a.max,d+k)],g&&(c[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),c=I(c),c-d<k&&(f[0]=c-k,f[1]=x(a.min,c-k),d=H(f)));this.min=d;this.max=c},getClosest:function(){var a;this.categories?a=1:b(this.series,function(h){var b=h.closestPointRange,d=h.visible||!h.chart.options.chart.ignoreHiddenSeries;!h.noSharedTooltip&&t(b)&&d&&(a=t(a)?Math.min(a,b):b)});
return a},nameToX:function(a){var h=r(this.categories),b=h?this.categories:this.names,d=a.options.x,c;a.series.requireSorting=!1;t(d)||(d=!1===this.options.uniqueNames?a.series.autoIncrement():F(a.name,b));-1===d?h||(c=b.length):c=d;this.names[c]=a.name;return c},updateNames:function(){var a=this;0<this.names.length&&(this.names.length=0,this.minRange=void 0,b(this.series||[],function(h){h.xIncrement=null;if(!h.points||h.isDirtyData)h.processData(),h.generatePoints();b(h.points,function(b,d){var c;
b.options&&(c=a.nameToX(b),c!==b.x&&(b.x=c,h.xData[d]=c))})}))},setAxisTranslation:function(a){var h=this,d=h.max-h.min,c=h.axisPointRange||0,g,y=0,l=0,A=h.linkedParent,r=!!h.categories,u=h.transA,k=h.isXAxis;if(k||r||c)g=h.getClosest(),A?(y=A.minPointOffset,l=A.pointRangePadding):b(h.series,function(a){var b=r?1:k?x(a.options.pointRange,g,0):h.axisPointRange||0;a=a.options.pointPlacement;c=Math.max(c,b);h.single||(y=Math.max(y,f(a)?0:b/2),l=Math.max(l,"on"===a?0:b))}),A=h.ordinalSlope&&g?h.ordinalSlope/
g:1,h.minPointOffset=y*=A,h.pointRangePadding=l*=A,h.pointRange=Math.min(c,d),k&&(h.closestPointRange=g);a&&(h.oldTransA=u);h.translationSlope=h.transA=u=h.len/(d+l||1);h.transB=h.horiz?h.left:h.bottom;h.minPixelPadding=u*y},minFromRange:function(){return this.max-this.range},setTickInterval:function(h){var c=this,f=c.chart,g=c.options,y=c.isLog,A=c.log2lin,r=c.isDatetimeAxis,k=c.isXAxis,e=c.isLinked,J=g.maxPadding,p=g.minPadding,B=g.tickInterval,F=g.tickPixelInterval,L=c.categories,q=c.threshold,
n=c.softThreshold,v,z,D,E;r||L||e||this.getTickAmount();D=x(c.userMin,g.min);E=x(c.userMax,g.max);e?(c.linkedParent=f[c.coll][g.linkedTo],f=c.linkedParent.getExtremes(),c.min=x(f.min,f.dataMin),c.max=x(f.max,f.dataMax),g.type!==c.linkedParent.options.type&&a.error(11,1)):(!n&&t(q)&&(c.dataMin>=q?(v=q,p=0):c.dataMax<=q&&(z=q,J=0)),c.min=x(D,v,c.dataMin),c.max=x(E,z,c.dataMax));y&&(!h&&0>=Math.min(c.min,x(c.dataMin,c.min))&&a.error(10,1),c.min=m(A(c.min),15),c.max=m(A(c.max),15));c.range&&t(c.max)&&
(c.userMin=c.min=D=Math.max(c.min,c.minFromRange()),c.userMax=E=c.max,c.range=null);w(c,"foundExtremes");c.beforePadding&&c.beforePadding();c.adjustForMinRange();!(L||c.axisPointRange||c.usePercentage||e)&&t(c.min)&&t(c.max)&&(A=c.max-c.min)&&(!t(D)&&p&&(c.min-=A*p),!t(E)&&J&&(c.max+=A*J));u(g.floor)?c.min=Math.max(c.min,g.floor):u(g.softMin)&&(c.min=Math.min(c.min,g.softMin));u(g.ceiling)?c.max=Math.min(c.max,g.ceiling):u(g.softMax)&&(c.max=Math.max(c.max,g.softMax));n&&t(c.dataMin)&&(q=q||0,!t(D)&&
c.min<q&&c.dataMin>=q?c.min=q:!t(E)&&c.max>q&&c.dataMax<=q&&(c.max=q));c.tickInterval=c.min===c.max||void 0===c.min||void 0===c.max?1:e&&!B&&F===c.linkedParent.options.tickPixelInterval?B=c.linkedParent.tickInterval:x(B,this.tickAmount?(c.max-c.min)/Math.max(this.tickAmount-1,1):void 0,L?1:(c.max-c.min)*F/Math.max(c.len,F));k&&!h&&b(c.series,function(a){a.processData(c.min!==c.oldMin||c.max!==c.oldMax)});c.setAxisTranslation(!0);c.beforeSetTickPositions&&c.beforeSetTickPositions();c.postProcessTickInterval&&
(c.tickInterval=c.postProcessTickInterval(c.tickInterval));c.pointRange&&!B&&(c.tickInterval=Math.max(c.pointRange,c.tickInterval));h=x(g.minTickInterval,c.isDatetimeAxis&&c.closestPointRange);!B&&c.tickInterval<h&&(c.tickInterval=h);r||y||B||(c.tickInterval=d(c.tickInterval,null,l(c.tickInterval),x(g.allowDecimals,!(.5<c.tickInterval&&5>c.tickInterval&&1E3<c.max&&9999>c.max)),!!this.tickAmount));this.tickAmount||(c.tickInterval=c.unsquish());this.setTickPositions()},setTickPositions:function(){var a=
this.options,c,b=a.tickPositions,d=a.tickPositioner,f=a.startOnTick,g=a.endOnTick,y;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===a.minorTickInterval&&this.tickInterval?this.tickInterval/5:a.minorTickInterval;this.tickPositions=c=b&&b.slice();!c&&(c=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,
!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),c.length>this.len&&(c=[c[0],c.pop()]),this.tickPositions=c,d&&(d=d.apply(this,[this.min,this.max])))&&(this.tickPositions=c=d);this.trimTicks(c,f,g);this.isLinked||(this.min===this.max&&t(this.min)&&!this.tickAmount&&(y=!0,this.min-=.5,this.max+=.5),this.single=y,b||d||this.adjustTickAmount())},trimTicks:function(a,c,b){var h=a[0],d=a[a.length-1],f=this.minPointOffset||
0;if(!this.isLinked){if(c)this.min=h;else for(;this.min-f>a[0];)a.shift();if(b)this.max=d;else for(;this.max+f<a[a.length-1];)a.pop();0===a.length&&t(h)&&a.push((d+h)/2)}},alignToOthers:function(){var a={},c,d=this.options;!1===this.chart.options.chart.alignTicks||!1===d.alignTicks||this.isLog||b(this.chart[this.coll],function(h){var b=h.options,b=[h.horiz?b.left:b.top,b.width,b.height,b.pane].join();h.series.length&&(a[b]?c=!0:a[b]=1)});return c},getTickAmount:function(){var a=this.options,c=a.tickAmount,
b=a.tickPixelInterval;!t(a.tickInterval)&&this.len<b&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(c=2);!c&&this.alignToOthers()&&(c=Math.ceil(this.len/b)+1);4>c&&(this.finalTickAmt=c,c=5);this.tickAmount=c},adjustTickAmount:function(){var a=this.tickInterval,c=this.tickPositions,b=this.tickAmount,d=this.finalTickAmt,f=c&&c.length;if(f<b){for(;c.length<b;)c.push(m(c[c.length-1]+a));this.transA*=(f-1)/(b-1);this.max=c[c.length-1]}else f>b&&(this.tickInterval*=2,this.setTickPositions());
if(t(d)){for(a=b=c.length;a--;)(3===d&&1===a%2||2>=d&&0<a&&a<b-1)&&c.splice(a,1);this.finalTickAmt=void 0}},setScale:function(){var a,c;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();c=this.len!==this.oldAxisLength;b(this.series,function(h){if(h.isDirtyData||h.isDirty||h.xAxis.isDirty)a=!0});c||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=
!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=c||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks()},setExtremes:function(a,c,d,f,g){var h=this,y=h.chart;d=x(d,!0);b(h.series,function(a){delete a.kdTree});g=p(g,{min:a,max:c});w(h,"setExtremes",g,function(){h.userMin=a;h.userMax=c;h.eventArgs=g;d&&y.redraw(f)})},zoom:function(a,c){var h=this.dataMin,b=this.dataMax,d=this.options,
f=Math.min(h,x(d.min,h)),d=Math.max(b,x(d.max,b));if(a!==this.min||c!==this.max)this.allowZoomOutside||(t(h)&&(a<f&&(a=f),a>d&&(a=d)),t(b)&&(c<f&&(c=f),c>d&&(c=d))),this.displayBtn=void 0!==a||void 0!==c,this.setExtremes(a,c,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var a=this.chart,c=this.options,b=c.offsets||[0,0,0,0],d=this.horiz,f=x(c.width,a.plotWidth-b[3]+b[1]),g=x(c.height,a.plotHeight-b[0]+b[2]),y=x(c.top,a.plotTop+b[0]),c=x(c.left,a.plotLeft+b[3]),b=/%$/;b.test(g)&&(g=
Math.round(parseFloat(g)/100*a.plotHeight));b.test(y)&&(y=Math.round(parseFloat(y)/100*a.plotHeight+a.plotTop));this.left=c;this.top=y;this.width=f;this.height=g;this.bottom=a.chartHeight-g-y;this.right=a.chartWidth-f-c;this.len=Math.max(d?f:g,0);this.pos=d?c:y},getExtremes:function(){var a=this.isLog,c=this.lin2log;return{min:a?m(c(this.min)):this.min,max:a?m(c(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var c=
this.isLog,h=this.lin2log,b=c?h(this.min):this.min,c=c?h(this.max):this.max;null===a?a=b:b>a?a=b:c<a&&(a=c);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(x(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var c=this.options,h=c[a+"Length"],b=x(c[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(b&&h)return"inside"===c[a+"Position"]&&(h=-h),[h,b]},labelMetrics:function(){return this.chart.renderer.fontMetrics(this.options.labels.style&&
this.options.labels.style.fontSize,this.ticks[0]&&this.ticks[0].label)},unsquish:function(){var a=this.options.labels,c=this.horiz,d=this.tickInterval,f=d,g=this.len/(((this.categories?1:0)+this.max-this.min)/d),y,l=a.rotation,A=this.labelMetrics(),r,u=Number.MAX_VALUE,k,e=function(a){a/=g||1;a=1<a?Math.ceil(a):1;return a*d};c?(k=!a.staggerLines&&!a.step&&(t(l)?[l]:g<x(a.autoRotationLimit,80)&&a.autoRotation))&&b(k,function(a){var c;if(a===l||a&&-90<=a&&90>=a)r=e(Math.abs(A.h/Math.sin(q*a))),c=r+
Math.abs(a/360),c<u&&(u=c,y=a,f=r)}):a.step||(f=e(A.h));this.autoRotation=k;this.labelRotation=x(y,l);return f},getSlotWidth:function(){var a=this.chart,c=this.horiz,b=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),f=a.margin[3];return c&&2>(b.step||0)&&!b.rotation&&(this.staggerLines||1)*this.len/d||!c&&(f&&f-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,c=a.renderer,d=this.tickPositions,g=this.ticks,y=this.options.labels,l=this.horiz,
A=this.getSlotWidth(),r=Math.max(1,Math.round(A-2*(y.padding||5))),u={},k=this.labelMetrics(),e=y.style&&y.style.textOverflow,x,J=0,p,F;f(y.rotation)||(u.rotation=y.rotation||0);b(d,function(a){(a=g[a])&&a.labelLength>J&&(J=a.labelLength)});this.maxLabelLength=J;if(this.autoRotation)J>r&&J>k.h?u.rotation=this.labelRotation:this.labelRotation=0;else if(A&&(x={width:r+"px"},!e))for(x.textOverflow="clip",p=d.length;!l&&p--;)if(F=d[p],r=g[F].label)r.styles&&"ellipsis"===r.styles.textOverflow?r.css({textOverflow:"clip"}):
g[F].labelLength>A&&r.css({width:A+"px"}),r.getBBox().height>this.len/d.length-(k.h-k.f)&&(r.specCss={textOverflow:"ellipsis"});u.rotation&&(x={width:(J>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight)+"px"},e||(x.textOverflow="ellipsis"));if(this.labelAlign=y.align||this.autoLabelAlign(this.labelRotation))u.align=this.labelAlign;b(d,function(a){var c=(a=g[a])&&a.label;c&&(c.attr(u),x&&c.css(B(x,c.specCss)),delete c.specCss,a.rotation=u.rotation)});this.tickRotCorr=c.rotCorr(k.b,this.labelRotation||
0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||t(this.min)&&t(this.max)&&!!this.tickPositions},addTitle:function(a){var c=this.chart.renderer,b=this.horiz,h=this.opposite,d=this.options.title,f;this.axisTitle||((f=d.textAlign)||(f=(b?{low:"left",middle:"center",high:"right"}:{low:h?"right":"left",middle:"center",high:h?"left":"right"})[d.align]),this.axisTitle=c.text(d.text,0,0,d.useHTML).attr({zIndex:7,rotation:d.rotation||0,align:f}).addClass("highcharts-axis-title").css(d.style).add(this.axisGroup),
this.axisTitle.isNew=!0);this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var c=this.ticks;c[a]?c[a].addLabel():c[a]=new J(this,a)},getOffset:function(){var a=this,c=a.chart,d=c.renderer,f=a.options,g=a.tickPositions,y=a.ticks,l=a.horiz,A=a.side,r=c.inverted?[1,0,3,2][A]:A,u,k,e=0,J,p=0,B=f.title,F=f.labels,w=0,L=c.axisOffset,c=c.clipOffset,m=[-1,1,1,-1][A],q,n=f.className,v=a.axisParent,z=this.tickSize("tick");u=a.hasData();a.showAxis=k=u||x(f.showEmpty,!0);a.staggerLines=a.horiz&&F.staggerLines;
a.axisGroup||(a.gridGroup=d.g("grid").attr({zIndex:f.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(n||"")).add(v),a.axisGroup=d.g("axis").attr({zIndex:f.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(n||"")).add(v),a.labelGroup=d.g("axis-labels").attr({zIndex:F.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(n||"")).add(v));if(u||a.isLinked)b(g,function(c,b){a.generateTick(c,b)}),a.renderUnsquish(),!1===F.reserveSpace||0!==A&&2!==A&&
{1:"left",3:"right"}[A]!==a.labelAlign&&"center"!==a.labelAlign||b(g,function(a){w=Math.max(y[a].getLabelSize(),w)}),a.staggerLines&&(w*=a.staggerLines,a.labelOffset=w*(a.opposite?-1:1));else for(q in y)y[q].destroy(),delete y[q];B&&B.text&&!1!==B.enabled&&(a.addTitle(k),k&&(e=a.axisTitle.getBBox()[l?"height":"width"],J=B.offset,p=t(J)?0:x(B.margin,l?5:10)));a.renderLine();a.offset=m*x(f.offset,L[A]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};d=0===A?-a.labelMetrics().h:2===A?a.tickRotCorr.y:0;p=Math.abs(w)+
p;w&&(p=p-d+m*(l?x(F.y,a.tickRotCorr.y+8*m):F.x));a.axisTitleMargin=x(J,p);L[A]=Math.max(L[A],a.axisTitleMargin+e+m*a.offset,p,u&&g.length&&z?z[0]:0);f=f.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);c[r]=Math.max(c[r],f)},getLinePath:function(a){var c=this.chart,b=this.opposite,d=this.offset,h=this.horiz,f=this.left+(b?this.width:0)+d,d=c.chartHeight-this.bottom-(b?this.height:0)+d;b&&(a*=-1);return c.renderer.crispLine(["M",h?this.left:f,h?d:this.top,"L",h?c.chartWidth-this.right:f,h?d:c.chartHeight-
this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,c=this.left,b=this.top,d=this.len,f=this.options.title,g=a?c:b,y=this.opposite,A=this.offset,l=f.x||0,r=f.y||0,u=this.chart.renderer.fontMetrics(f.style&&f.style.fontSize,this.axisTitle).f,d={low:g+(a?0:d),
middle:g+d/2,high:g+(a?d:0)}[f.align],c=(a?b+this.height:c)+(a?1:-1)*(y?-1:1)*this.axisTitleMargin+(2===this.side?u:0);return{x:a?d+l:c+(y?this.width:0)+A+l,y:a?c+r-(y?this.height:0)+A:d+r}},renderMinorTick:function(a){var c=this.chart.hasRendered&&u(this.oldMin),b=this.minorTicks;b[a]||(b[a]=new J(this,a,"minor"));c&&b[a].isNew&&b[a].render(null,!0);b[a].render(null,!1,1)},renderTick:function(a,c){var b=this.isLinked,d=this.ticks,h=this.chart.hasRendered&&u(this.oldMin);if(!b||a>=this.min&&a<=this.max)d[a]||
(d[a]=new J(this,a)),h&&d[a].isNew&&d[a].render(c,!0,.1),d[a].render(c)},render:function(){var a=this,d=a.chart,f=a.options,g=a.isLog,y=a.lin2log,l=a.isLinked,r=a.tickPositions,u=a.axisTitle,k=a.ticks,e=a.minorTicks,x=a.alternateBands,p=f.stackLabels,B=f.alternateGridColor,F=a.tickmarkOffset,w=a.axisLine,L=a.showAxis,m=D(d.renderer.globalAnimation),q,n;a.labelEdge.length=0;a.overlap=!1;b([k,e,x],function(a){for(var c in a)a[c].isActive=!1});if(a.hasData()||l)a.minorTickInterval&&!a.categories&&b(a.getMinorTickPositions(),
function(c){a.renderMinorTick(c)}),r.length&&(b(r,function(c,b){a.renderTick(c,b)}),F&&(0===a.min||a.single)&&(k[-1]||(k[-1]=new J(a,-1,null,!0)),k[-1].render(-1))),B&&b(r,function(b,h){n=void 0!==r[h+1]?r[h+1]+F:a.max-F;0===h%2&&b<a.max&&n<=a.max+(d.polar?-F:F)&&(x[b]||(x[b]=new c(a)),q=b+F,x[b].options={from:g?y(q):q,to:g?y(n):n,color:B},x[b].render(),x[b].isActive=!0)}),a._addedPlotLB||(b((f.plotLines||[]).concat(f.plotBands||[]),function(c){a.addPlotBandOrLine(c)}),a._addedPlotLB=!0);b([k,e,x],
function(a){var c,b,h=[],f=m.duration;for(c in a)a[c].isActive||(a[c].render(c,!1,0),a[c].isActive=!1,h.push(c));A(function(){for(b=h.length;b--;)a[h[b]]&&!a[h[b]].isActive&&(a[h[b]].destroy(),delete a[h[b]])},a!==x&&d.hasRendered&&f?f:0)});w&&(w[w.isPlaced?"animate":"attr"]({d:this.getLinePath(w.strokeWidth())}),w.isPlaced=!0,w[L?"show":"hide"](!0));u&&L&&(u[u.isNew?"attr":"animate"](a.getTitlePosition()),u.isNew=!1);p&&p.enabled&&a.renderStackTotals();a.isDirty=!1},redraw:function(){this.visible&&
(this.render(),b(this.plotLinesAndBands,function(a){a.render()}));b(this.series,function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var c=this,d=c.stacks,h,f=c.plotLinesAndBands,g;a||y(c);for(h in d)e(d[h]),d[h]=null;b([c.ticks,c.minorTicks,c.alternateBands],function(a){e(a)});if(f)for(a=f.length;a--;)f[a].destroy();b("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){c[a]&&(c[a]=c[a].destroy())});
for(g in c)c.hasOwnProperty(g)&&-1===F(g,c.keepProps)&&delete c[g]},drawCrosshair:function(a,c){var b,d=this.crosshair,h=x(d.snap,!0),f,g=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(t(c)||!h)?(h?t(c)&&(f=this.isXAxis?c.plotX:this.len-c.plotY):f=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),t(f)&&(b=this.getPlotLinePath(c&&(this.isXAxis?c.x:x(c.stackY,c.y)),null,null,null,f)||null),t(b)?(c=this.categories&&!this.isRadial,g||(this.cross=g=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+
(c?"category ":"thin ")+d.className).attr({zIndex:x(d.zIndex,2)}).add(),g.attr({stroke:d.color||(c?n("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":x(d.width,1)}),d.dashStyle&&g.attr({dashstyle:d.dashStyle})),g.show().attr({d:b}),c&&!d.width&&g.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}};p(a.Axis.prototype,v)})(K);(function(a){var E=a.Axis,D=a.Date,H=a.dateFormat,I=a.defaultOptions,
v=a.defined,n=a.each,m=a.extend,z=a.getMagnitude,t=a.getTZOffset,q=a.normalizeTickInterval,e=a.pick,b=a.timeUnits;E.prototype.getTimeTicks=function(a,w,k,l){var g=[],p={},r=I.global.useUTC,u,f=new D(w-t(w)),B=D.hcMakeTime,d=a.unitRange,x=a.count,c;if(v(w)){f[D.hcSetMilliseconds](d>=b.second?0:x*Math.floor(f.getMilliseconds()/x));if(d>=b.second)f[D.hcSetSeconds](d>=b.minute?0:x*Math.floor(f.getSeconds()/x));if(d>=b.minute)f[D.hcSetMinutes](d>=b.hour?0:x*Math.floor(f[D.hcGetMinutes]()/x));if(d>=b.hour)f[D.hcSetHours](d>=
b.day?0:x*Math.floor(f[D.hcGetHours]()/x));if(d>=b.day)f[D.hcSetDate](d>=b.month?1:x*Math.floor(f[D.hcGetDate]()/x));d>=b.month&&(f[D.hcSetMonth](d>=b.year?0:x*Math.floor(f[D.hcGetMonth]()/x)),u=f[D.hcGetFullYear]());if(d>=b.year)f[D.hcSetFullYear](u-u%x);if(d===b.week)f[D.hcSetDate](f[D.hcGetDate]()-f[D.hcGetDay]()+e(l,1));u=f[D.hcGetFullYear]();l=f[D.hcGetMonth]();var y=f[D.hcGetDate](),L=f[D.hcGetHours]();if(D.hcTimezoneOffset||D.hcGetTimezoneOffset)c=(!r||!!D.hcGetTimezoneOffset)&&(k-w>4*b.month||
t(w)!==t(k)),f=f.getTime(),f=new D(f+t(f));r=f.getTime();for(w=1;r<k;)g.push(r),r=d===b.year?B(u+w*x,0):d===b.month?B(u,l+w*x):!c||d!==b.day&&d!==b.week?c&&d===b.hour?B(u,l,y,L+w*x):r+d*x:B(u,l,y+w*x*(d===b.day?1:7)),w++;g.push(r);d<=b.hour&&1E4>g.length&&n(g,function(a){0===a%18E5&&"000000000"===H("%H%M%S%L",a)&&(p[a]="day")})}g.info=m(a,{higherRanks:p,totalRange:d*x});return g};E.prototype.normalizeTimeTickInterval=function(a,e){var k=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",
[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];e=k[k.length-1];var l=b[e[0]],g=e[1],p;for(p=0;p<k.length&&!(e=k[p],l=b[e[0]],g=e[1],k[p+1]&&a<=(l*g[g.length-1]+b[k[p+1][0]])/2);p++);l===b.year&&a<5*l&&(g=[1,2,5]);a=q(a/l,g,"year"===e[0]?Math.max(z(a/l),1):1);return{unitRange:l,count:a,unitName:e[0]}}})(K);(function(a){var E=a.Axis,D=a.getMagnitude,H=a.map,I=a.normalizeTickInterval,v=a.pick;E.prototype.getLogTickPositions=
function(a,m,z,t){var q=this.options,e=this.len,b=this.lin2log,p=this.log2lin,w=[];t||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),w=this.getLinearTickPositions(a,m,z);else if(.08<=a)for(var e=Math.floor(m),k,l,g,F,r,q=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];e<z+1&&!r;e++)for(l=q.length,k=0;k<l&&!r;k++)g=p(b(e)*q[k]),g>m&&(!t||F<=z)&&void 0!==F&&w.push(F),F>z&&(r=!0),F=g;else m=b(m),z=b(z),a=q[t?"minorTickInterval":"tickInterval"],a=v("auto"===a?null:a,this._minorAutoInterval,
q.tickPixelInterval/(t?5:1)*(z-m)/((t?e/this.tickPositions.length:e)||1)),a=I(a,null,D(a)),w=H(this.getLinearTickPositions(a,m,z),p),t||(this._minorAutoInterval=a/5);t||(this.tickInterval=a);return w};E.prototype.log2lin=function(a){return Math.log(a)/Math.LN10};E.prototype.lin2log=function(a){return Math.pow(10,a)}})(K);(function(a){var E=a.dateFormat,D=a.each,H=a.extend,I=a.format,v=a.isNumber,n=a.map,m=a.merge,z=a.pick,t=a.splat,q=a.syncTimeout,e=a.timeUnits;a.Tooltip=function(){this.init.apply(this,
arguments)};a.Tooltip.prototype={init:function(a,e){this.chart=a;this.options=e;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=e.split&&!a.inverted;this.shared=e.shared||this.split},cleanSplit:function(a){D(this.chart.series,function(b){var e=b&&b.tt;e&&(!e.isActive||a?b.tt=e.destroy():e.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,e=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,e.shape||"callout",null,null,e.useHTML,
null,"tooltip").attr({padding:e.padding,r:e.borderRadius}),this.label.attr({fill:e.backgroundColor,"stroke-width":e.borderWidth}).css(e.style).shadow(e.shadow)),this.label.attr({zIndex:8}).add());return this.label},update:function(a){this.destroy();this.init(this.chart,m(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},
move:function(a,e,w,k){var b=this,g=b.now,p=!1!==b.options.animation&&!b.isHidden&&(1<Math.abs(a-g.x)||1<Math.abs(e-g.y)),r=b.followPointer||1<b.len;H(g,{x:p?(2*g.x+a)/3:a,y:p?(g.y+e)/2:e,anchorX:r?void 0:p?(2*g.anchorX+w)/3:w,anchorY:r?void 0:p?(g.anchorY+k)/2:k});b.getLabel().attr(g);p&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){b&&b.move(a,e,w,k)},32))},hide:function(a){var b=this;clearTimeout(this.hideTimer);a=z(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=
q(function(){b.getLabel()[a?"fadeOut":"hide"]();b.isHidden=!0},a))},getAnchor:function(a,e){var b,k=this.chart,l=k.inverted,g=k.plotTop,p=k.plotLeft,r=0,u=0,f,B;a=t(a);b=a[0].tooltipPos;this.followPointer&&e&&(void 0===e.chartX&&(e=k.pointer.normalize(e)),b=[e.chartX-k.plotLeft,e.chartY-g]);b||(D(a,function(a){f=a.series.yAxis;B=a.series.xAxis;r+=a.plotX+(!l&&B?B.left-p:0);u+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!l&&f?f.top-g:0)}),r/=a.length,u/=a.length,b=[l?k.plotWidth-u:r,this.shared&&
!l&&1<a.length&&e?e.chartY-g:l?k.plotHeight-r:u]);return n(b,Math.round)},getPosition:function(a,e,w){var b=this.chart,l=this.distance,g={},p=w.h||0,r,u=["y",b.chartHeight,e,w.plotY+b.plotTop,b.plotTop,b.plotTop+b.plotHeight],f=["x",b.chartWidth,a,w.plotX+b.plotLeft,b.plotLeft,b.plotLeft+b.plotWidth],B=!this.followPointer&&z(w.ttBelow,!b.inverted===!!w.negative),d=function(a,c,b,d,f,y){var h=b<d-l,A=d+l+b<c,r=d-l-b;d+=l;if(B&&A)g[a]=d;else if(!B&&h)g[a]=r;else if(h)g[a]=Math.min(y-b,0>r-p?r:r-p);
else if(A)g[a]=Math.max(f,d+p+b>c?d:d+p);else return!1},x=function(a,c,b,d){var h;d<l||d>c-l?h=!1:g[a]=d<b/2?1:d>c-b/2?c-b-2:d-b/2;return h},c=function(a){var c=u;u=f;f=c;r=a},y=function(){!1!==d.apply(0,u)?!1!==x.apply(0,f)||r||(c(!0),y()):r?g.x=g.y=0:(c(!0),y())};(b.inverted||1<this.len)&&c();y();return g},defaultFormatter:function(a){var b=this.points||t(this),e;e=[a.tooltipFooterHeaderFormatter(b[0])];e=e.concat(a.bodyFormatter(b));e.push(a.tooltipFooterHeaderFormatter(b[0],!0));return e},refresh:function(a,
e){var b=this.chart,k,l=this.options,g,p,r={},u=[];k=l.formatter||this.defaultFormatter;var r=b.hoverPoints,f=this.shared;clearTimeout(this.hideTimer);this.followPointer=t(a)[0].series.tooltipOptions.followPointer;p=this.getAnchor(a,e);e=p[0];g=p[1];!f||a.series&&a.series.noSharedTooltip?r=a.getLabelConfig():(b.hoverPoints=a,r&&D(r,function(a){a.setState()}),D(a,function(a){a.setState("hover");u.push(a.getLabelConfig())}),r={x:a[0].category,y:a[0].y},r.points=u,a=a[0]);this.len=u.length;r=k.call(r,
this);f=a.series;this.distance=z(f.tooltipOptions.distance,16);!1===r?this.hide():(k=this.getLabel(),this.isHidden&&k.attr({opacity:1}).show(),this.split?this.renderSplit(r,b.hoverPoints):(k.attr({text:r&&r.join?r.join(""):r}),k.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+z(a.colorIndex,f.colorIndex)),k.attr({stroke:l.borderColor||a.color||f.color||"#666666"}),this.updatePosition({plotX:e,plotY:g,negative:a.negative,ttBelow:a.ttBelow,h:p[2]||0})),this.isHidden=!1)},renderSplit:function(b,
e){var p=this,k=[],l=this.chart,g=l.renderer,F=!0,r=this.options,u,f=this.getLabel();D(b.slice(0,e.length+1),function(a,b){b=e[b-1]||{isHeader:!0,plotX:e[0].plotX};var d=b.series||p,c=d.tt,y=b.series||{},B="highcharts-color-"+z(b.colorIndex,y.colorIndex,"none");c||(d.tt=c=g.label(null,null,null,"callout").addClass("highcharts-tooltip-box "+B).attr({padding:r.padding,r:r.borderRadius,fill:r.backgroundColor,stroke:b.color||y.color||"#333333","stroke-width":r.borderWidth}).add(f));c.isActive=!0;c.attr({text:a});
c.css(r.style);a=c.getBBox();y=a.width+c.strokeWidth();b.isHeader?(u=a.height,y=Math.max(0,Math.min(b.plotX+l.plotLeft-y/2,l.chartWidth-y))):y=b.plotX+l.plotLeft-z(r.distance,16)-y;0>y&&(F=!1);a=(b.series&&b.series.yAxis&&b.series.yAxis.pos)+(b.plotY||0);a-=l.plotTop;k.push({target:b.isHeader?l.plotHeight+u:a,rank:b.isHeader?1:0,size:d.tt.getBBox().height+1,point:b,x:y,tt:c})});this.cleanSplit();a.distribute(k,l.plotHeight+u);D(k,function(a){var b=a.point,f=b.series;a.tt.attr({visibility:void 0===
a.pos?"hidden":"inherit",x:F||b.isHeader?a.x:b.plotX+l.plotLeft+z(r.distance,16),y:a.pos+l.plotTop,anchorX:b.isHeader?b.plotX+l.plotLeft:b.plotX+f.xAxis.pos,anchorY:b.isHeader?a.pos+l.plotTop-15:b.plotY+f.yAxis.pos})})},updatePosition:function(a){var b=this.chart,e=this.getLabel(),e=(this.options.positioner||this.getPosition).call(this,e.width,e.height,a);this.move(Math.round(e.x),Math.round(e.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getDateFormat:function(a,p,w,k){var b=E("%m-%d %H:%M:%S.%L",
p),g,F,r={millisecond:15,second:12,minute:9,hour:6,day:3},u="millisecond";for(F in e){if(a===e.week&&+E("%w",p)===w&&"00:00:00.000"===b.substr(6)){F="week";break}if(e[F]>a){F=u;break}if(r[F]&&b.substr(r[F])!=="01-01 00:00:00.000".substr(r[F]))break;"week"!==F&&(u=F)}F&&(g=k[F]);return g},getXDateFormat:function(a,e,w){e=e.dateTimeLabelFormats;var b=w&&w.closestPointRange;return(b?this.getDateFormat(b,a.x,w.options.startOfWeek,e):e.day)||e.year},tooltipFooterHeaderFormatter:function(a,e){var b=e?"footer":
"header";e=a.series;var k=e.tooltipOptions,l=k.xDateFormat,g=e.xAxis,F=g&&"datetime"===g.options.type&&v(a.key),b=k[b+"Format"];F&&!l&&(l=this.getXDateFormat(a,k,g));F&&l&&(b=b.replace("{point.key}","{point.key:"+l+"}"));return I(b,{point:a,series:e})},bodyFormatter:function(a){return n(a,function(a){var b=a.series.tooltipOptions;return(b.pointFormatter||a.point.tooltipFormatter).call(a.point,b.pointFormat)})}}})(K);(function(a){var E=a.addEvent,D=a.attr,H=a.charts,I=a.color,v=a.css,n=a.defined,m=
a.doc,z=a.each,t=a.extend,q=a.fireEvent,e=a.offset,b=a.pick,p=a.removeEvent,w=a.splat,k=a.Tooltip,l=a.win;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,l){this.options=l;this.chart=a;this.runChartClick=l.chart.events&&!!l.chart.events.click;this.pinchDown=[];this.lastValidTouch={};k&&l.tooltip.enabled&&(a.tooltip=new k(a,l.tooltip),this.followTouchMove=b(l.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var g=this.chart,l=g.options.chart,e=l.zoomType||
"",g=g.inverted;/touch/.test(a.type)&&(e=b(l.pinchType,e));this.zoomX=a=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=a&&!g||e&&g;this.zoomVert=e&&!g||a&&g;this.hasZoom=a||e},normalize:function(a,b){var g,u;a=a||l.event;a.target||(a.target=a.srcElement);u=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;b||(this.chartPosition=b=e(this.chart.container));void 0===u.pageX?(g=Math.max(a.x,a.clientX-b.left),b=a.y):(g=u.pageX-b.left,b=u.pageY-b.top);return t(a,{chartX:Math.round(g),
chartY:Math.round(b)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};z(this.chart.axes,function(g){b[g.isXAxis?"xAxis":"yAxis"].push({axis:g,value:g.toValue(a[g.horiz?"chartX":"chartY"])})});return b},runPointActions:function(g){var l=this.chart,r=l.series,e=l.tooltip,f=e?e.shared:!1,k=!0,d=l.hoverPoint,x=l.hoverSeries,c,y,p,A=[],J;if(!f&&!x)for(c=0;c<r.length;c++)if(r[c].directTouch||!r[c].options.stickyTracking)r=[];x&&(f?x.noSharedTooltip:x.directTouch)&&d?A=[d]:(f||!x||x.options.stickyTracking||
(r=[x]),z(r,function(a){y=a.noSharedTooltip&&f;p=!f&&a.directTouch;a.visible&&!y&&!p&&b(a.options.enableMouseTracking,!0)&&(J=a.searchPoint(g,!y&&1===a.kdDimensions))&&J.series&&A.push(J)}),A.sort(function(a,c){var b=a.distX-c.distX,d=a.dist-c.dist,h=(c.series.group&&c.series.group.zIndex)-(a.series.group&&a.series.group.zIndex);return 0!==b&&f?b:0!==d?d:0!==h?h:a.series.index>c.series.index?-1:1}));if(f)for(c=A.length;c--;)(A[c].x!==A[0].x||A[c].series.noSharedTooltip)&&A.splice(c,1);if(A[0]&&(A[0]!==
this.prevKDPoint||e&&e.isHidden)){if(f&&!A[0].series.noSharedTooltip){for(c=0;c<A.length;c++)A[c].onMouseOver(g,A[c]!==(x&&x.directTouch&&d||A[0]));A.length&&e&&e.refresh(A.sort(function(a,c){return a.series.index-c.series.index}),g)}else if(e&&e.refresh(A[0],g),!x||!x.directTouch)A[0].onMouseOver(g);this.prevKDPoint=A[0];k=!1}k&&(r=x&&x.tooltipOptions.followPointer,e&&r&&!e.isHidden&&(r=e.getAnchor([{}],g),e.updatePosition({plotX:r[0],plotY:r[1]})));this.unDocMouseMove||(this.unDocMouseMove=E(m,
"mousemove",function(c){if(H[a.hoverChartIndex])H[a.hoverChartIndex].pointer.onDocumentMouseMove(c)}));z(f?A:[b(d,A[0])],function(a){z(l.axes,function(c){(!a||a.series&&a.series[c.coll]===c)&&c.drawCrosshair(g,a)})})},reset:function(a,b){var g=this.chart,l=g.hoverSeries,f=g.hoverPoint,e=g.hoverPoints,d=g.tooltip,k=d&&d.shared?e:f;a&&k&&z(w(k),function(c){c.series.isCartesian&&void 0===c.plotX&&(a=!1)});if(a)d&&k&&(d.refresh(k),f&&(f.setState(f.state,!0),z(g.axes,function(a){a.crosshair&&a.drawCrosshair(null,
f)})));else{if(f)f.onMouseOut();e&&z(e,function(a){a.setState()});if(l)l.onMouseOut();d&&d.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());z(g.axes,function(a){a.hideCrosshair()});this.hoverX=this.prevKDPoint=g.hoverPoints=g.hoverPoint=null}},scaleGroups:function(a,b){var g=this.chart,l;z(g.series,function(f){l=a||f.getPlotBox();f.xAxis&&f.xAxis.zoomEnabled&&f.group&&(f.group.attr(l),f.markerGroup&&(f.markerGroup.attr(l),f.markerGroup.clip(b?g.clipRect:null)),f.dataLabelsGroup&&
f.dataLabelsGroup.attr(l))});g.clipRect.attr(b||g.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,g=b.options.chart,l=a.chartX,f=a.chartY,e=this.zoomHor,d=this.zoomVert,k=b.plotLeft,c=b.plotTop,y=b.plotWidth,p=b.plotHeight,A,J=this.selectionMarker,h=this.mouseDownX,q=this.mouseDownY,w=g.panKey&&a[g.panKey+"Key"];J&&J.touch||(l<k?l=k:l>k+y&&(l=k+y),f<
c?f=c:f>c+p&&(f=c+p),this.hasDragged=Math.sqrt(Math.pow(h-l,2)+Math.pow(q-f,2)),10<this.hasDragged&&(A=b.isInsidePlot(h-k,q-c),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&A&&!w&&!J&&(this.selectionMarker=J=b.renderer.rect(k,c,e?1:y,d?1:p,0).attr({fill:g.selectionMarkerFill||I("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),J&&e&&(l-=h,J.attr({width:Math.abs(l),x:(0<l?0:l)+h})),J&&d&&(l=f-q,J.attr({height:Math.abs(l),y:(0<l?0:l)+q})),A&&!J&&g.panning&&b.pan(a,
g.panning)))},drop:function(a){var b=this,g=this.chart,l=this.hasPinched;if(this.selectionMarker){var f={originalEvent:a,xAxis:[],yAxis:[]},e=this.selectionMarker,d=e.attr?e.attr("x"):e.x,k=e.attr?e.attr("y"):e.y,c=e.attr?e.attr("width"):e.width,y=e.attr?e.attr("height"):e.height,p;if(this.hasDragged||l)z(g.axes,function(g){if(g.zoomEnabled&&n(g.min)&&(l||b[{xAxis:"zoomX",yAxis:"zoomY"}[g.coll]])){var e=g.horiz,h="touchend"===a.type?g.minPixelPadding:0,A=g.toValue((e?d:k)+h),e=g.toValue((e?d+c:k+
y)-h);f[g.coll].push({axis:g,min:Math.min(A,e),max:Math.max(A,e)});p=!0}}),p&&q(g,"selection",f,function(a){g.zoom(t(a,l?{animation:!1}:null))});this.selectionMarker=this.selectionMarker.destroy();l&&this.scaleGroups()}g&&(v(g.container,{cursor:g._cursor}),g.cancelClick=10<this.hasDragged,g.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);this.zoomOption(a);a.preventDefault&&a.preventDefault();this.dragStart(a)},onDocumentMouseUp:function(b){H[a.hoverChartIndex]&&
H[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,g=this.chartPosition;a=this.normalize(a,g);!g||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var g=H[a.hoverChartIndex];g&&(b.relatedTarget||b.toElement)&&(g.pointer.reset(),g.pointer.chartPosition=null)},onContainerMouseMove:function(b){var g=this.chart;n(a.hoverChartIndex)&&H[a.hoverChartIndex]&&H[a.hoverChartIndex].mouseIsDown||
(a.hoverChartIndex=g.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===g.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!g.isInsidePlot(b.chartX-g.plotLeft,b.chartY-g.plotTop)||g.openMenu||this.runPointActions(b)},inClass:function(a,b){for(var g;a;){if(g=D(a,"class")){if(-1!==g.indexOf(b))return!0;if(-1!==g.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;if(!(!b||!a||
b.options.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,g=b.hoverPoint,l=b.plotLeft,f=b.plotTop;a=this.normalize(a);b.cancelClick||(g&&this.inClass(a.target,"highcharts-tracker")?(q(g.series,"click",t(a,{point:g})),b.hoverPoint&&g.firePointEvent("click",a)):(t(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-l,a.chartY-f)&&q(b,"click",a)))},setDOMEvents:function(){var b=
this,l=b.chart.container;l.onmousedown=function(a){b.onContainerMouseDown(a)};l.onmousemove=function(a){b.onContainerMouseMove(a)};l.onclick=function(a){b.onContainerClick(a)};E(l,"mouseleave",b.onContainerMouseLeave);1===a.chartCount&&E(m,"mouseup",b.onDocumentMouseUp);a.hasTouch&&(l.ontouchstart=function(a){b.onContainerTouchStart(a)},l.ontouchmove=function(a){b.onContainerTouchMove(a)},1===a.chartCount&&E(m,"touchend",b.onDocumentTouchEnd))},destroy:function(){var b;p(this.chart.container,"mouseleave",
this.onContainerMouseLeave);a.chartCount||(p(m,"mouseup",this.onDocumentMouseUp),p(m,"touchend",this.onDocumentTouchEnd));clearInterval(this.tooltipTimeout);for(b in this)this[b]=null}}})(K);(function(a){var E=a.charts,D=a.each,H=a.extend,I=a.map,v=a.noop,n=a.pick;H(a.Pointer.prototype,{pinchTranslate:function(a,n,t,q,e,b){this.zoomHor&&this.pinchTranslateDirection(!0,a,n,t,q,e,b);this.zoomVert&&this.pinchTranslateDirection(!1,a,n,t,q,e,b)},pinchTranslateDirection:function(a,n,t,q,e,b,p,w){var k=
this.chart,l=a?"x":"y",g=a?"X":"Y",m="chart"+g,r=a?"width":"height",u=k["plot"+(a?"Left":"Top")],f,B,d=w||1,x=k.inverted,c=k.bounds[a?"h":"v"],y=1===n.length,L=n[0][m],A=t[0][m],J=!y&&n[1][m],h=!y&&t[1][m],G;t=function(){!y&&20<Math.abs(L-J)&&(d=w||Math.abs(A-h)/Math.abs(L-J));B=(u-A)/d+L;f=k["plot"+(a?"Width":"Height")]/d};t();n=B;n<c.min?(n=c.min,G=!0):n+f>c.max&&(n=c.max-f,G=!0);G?(A-=.8*(A-p[l][0]),y||(h-=.8*(h-p[l][1])),t()):p[l]=[A,h];x||(b[l]=B-u,b[r]=f);b=x?1/d:d;e[r]=f;e[l]=n;q[x?a?"scaleY":
"scaleX":"scale"+g]=d;q["translate"+g]=b*u+(A-b*L)},pinch:function(a){var m=this,t=m.chart,q=m.pinchDown,e=a.touches,b=e.length,p=m.lastValidTouch,w=m.hasZoom,k=m.selectionMarker,l={},g=1===b&&(m.inClass(a.target,"highcharts-tracker")&&t.runTrackerClick||m.runChartClick),F={};1<b&&(m.initiated=!0);w&&m.initiated&&!g&&a.preventDefault();I(e,function(a){return m.normalize(a)});"touchstart"===a.type?(D(e,function(a,b){q[b]={chartX:a.chartX,chartY:a.chartY}}),p.x=[q[0].chartX,q[1]&&q[1].chartX],p.y=[q[0].chartY,
q[1]&&q[1].chartY],D(t.axes,function(a){if(a.zoomEnabled){var b=t.bounds[a.horiz?"h":"v"],f=a.minPixelPadding,g=a.toPixels(n(a.options.min,a.dataMin)),d=a.toPixels(n(a.options.max,a.dataMax)),l=Math.max(g,d);b.min=Math.min(a.pos,Math.min(g,d)-f);b.max=Math.max(a.pos+a.len,l+f)}}),m.res=!0):m.followTouchMove&&1===b?this.runPointActions(m.normalize(a)):q.length&&(k||(m.selectionMarker=k=H({destroy:v,touch:!0},t.plotBox)),m.pinchTranslate(q,e,l,k,F,p),m.hasPinched=w,m.scaleGroups(l,F),m.res&&(m.res=
!1,this.reset(!1,0)))},touch:function(m,v){var t=this.chart,q,e;if(t.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=t.index;1===m.touches.length?(m=this.normalize(m),(e=t.isInsidePlot(m.chartX-t.plotLeft,m.chartY-t.plotTop))&&!t.openMenu?(v&&this.runPointActions(m),"touchmove"===m.type&&(v=this.pinchDown,q=v[0]?4<=Math.sqrt(Math.pow(v[0].chartX-m.chartX,2)+Math.pow(v[0].chartY-m.chartY,2)):!1),n(q,!0)&&this.pinch(m)):v&&this.reset()):2===m.touches.length&&
this.pinch(m)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(m){E[a.hoverChartIndex]&&E[a.hoverChartIndex].pointer.drop(m)}})})(K);(function(a){var E=a.addEvent,D=a.charts,H=a.css,I=a.doc,v=a.extend,n=a.noop,m=a.Pointer,z=a.removeEvent,t=a.win,q=a.wrap;if(t.PointerEvent||t.MSPointerEvent){var e={},b=!!t.PointerEvent,p=function(){var a,b=[];b.item=function(a){return this[a]};for(a in e)e.hasOwnProperty(a)&&
b.push({pageX:e[a].pageX,pageY:e[a].pageY,target:e[a].target});return b},w=function(b,l,g,e){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!D[a.hoverChartIndex]||(e(b),e=D[a.hoverChartIndex].pointer,e[l]({type:g,target:b.currentTarget,preventDefault:n,touches:p()}))};v(m.prototype,{onContainerPointerDown:function(a){w(a,"onContainerTouchStart","touchstart",function(a){e[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(a){w(a,"onContainerTouchMove",
"touchmove",function(a){e[a.pointerId]={pageX:a.pageX,pageY:a.pageY};e[a.pointerId].target||(e[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){w(a,"onDocumentTouchEnd","touchend",function(a){delete e[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,b?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,b?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(I,b?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});q(m.prototype,
"init",function(a,b,g){a.call(this,b,g);this.hasZoom&&H(b.container,{"-ms-touch-action":"none","touch-action":"none"})});q(m.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(E)});q(m.prototype,"destroy",function(a){this.batchMSEvents(z);a.call(this)})}})(K);(function(a){var E,D=a.addEvent,H=a.css,I=a.discardElement,v=a.defined,n=a.each,m=a.extend,z=a.isFirefox,t=a.marginNames,q=a.merge,e=a.pick,b=a.setAnimation,p=a.stableSort,w=a.win,k=a.wrap;
E=a.Legend=function(a,b){this.init(a,b)};E.prototype={init:function(a,b){this.chart=a;this.setOptions(b);b.enabled&&(this.render(),D(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var b=e(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=q(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.initialItemX=this.padding=b;this.initialItemY=b-5;this.itemHeight=this.maxItemWidth=0;this.symbolWidth=e(a.symbolWidth,
16);this.pages=[]},update:function(a,b){var g=this.chart;this.setOptions(q(!0,this.options,a));this.destroy();g.isDirtyLegend=g.isDirtyBox=!0;e(b,!0)&&g.redraw()},colorizeItem:function(a,b){a.legendGroup[b?"removeClass":"addClass"]("highcharts-legend-item-hidden");var g=this.options,e=a.legendItem,l=a.legendLine,f=a.legendSymbol,k=this.itemHiddenStyle.color,g=b?g.itemStyle.color:k,d=b?a.color||k:k,x=a.options&&a.options.marker,c={fill:d},y;e&&e.css({fill:g,color:g});l&&l.attr({stroke:d});if(f){if(x&&
f.isMarker&&(c=a.pointAttribs(),!b))for(y in c)c[y]=k;f.attr(c)}},positionItem:function(a){var b=this.options,e=b.symbolPadding,b=!b.rtl,l=a._legendItemPos,k=l[0],l=l[1],f=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?k:this.legendWidth-k-2*e-4,l);f&&(f.x=k,f.y=l)},destroyItem:function(a){var b=a.checkbox;n(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&I(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}
n(this.getAllItems(),function(b){n(["legendItem","legendGroup"],a,b)});n(["box","title","group"],a,this);this.display=null},positionCheckboxes:function(a){var b=this.group&&this.group.alignAttr,e,l=this.clipHeight||this.legendHeight,k=this.titleHeight;b&&(e=b.translateY,n(this.allItems,function(f){var g=f.checkbox,d;g&&(d=e+k+g.y+(a||0)+3,H(g,{left:b.translateX+f.checkboxOffset+g.x-20+"px",top:d+"px",display:d>e-6&&d<e+l-6?"":"none"}))}))},renderTitle:function(){var a=this.padding,b=this.options.title,
e=0;b.text&&(this.title||(this.title=this.chart.renderer.label(b.text,a-3,a-4,null,null,null,null,null,"legend-title").attr({zIndex:1}).css(b.style).add(this.group)),a=this.title.getBBox(),e=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:e}));this.titleHeight=e},setText:function(b){var g=this.options;b.legendItem.attr({text:g.labelFormat?a.format(g.labelFormat,b):g.labelFormatter.call(b)})},renderItem:function(a){var b=this.chart,l=b.renderer,k=this.options,u="horizontal"===
k.layout,f=this.symbolWidth,p=k.symbolPadding,d=this.itemStyle,x=this.itemHiddenStyle,c=this.padding,y=u?e(k.itemDistance,20):0,m=!k.rtl,A=k.width,J=k.itemMarginBottom||0,h=this.itemMarginTop,w=this.initialItemX,n=a.legendItem,t=!a.series,v=!t&&a.series.drawLegendSymbol?a.series:a,z=v.options,z=this.createCheckboxForItem&&z&&z.showCheckbox,C=k.useHTML;n||(a.legendGroup=l.g("legend-item").addClass("highcharts-"+v.type+"-series highcharts-color-"+a.colorIndex+(a.options.className?" "+a.options.className:
"")+(t?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=n=l.text("",m?f+p:-p,this.baseline||0,C).css(q(a.visible?d:x)).attr({align:m?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(d=d.fontSize,this.fontMetrics=l.fontMetrics(d,n),this.baseline=this.fontMetrics.f+3+h,n.attr("y",this.baseline)),this.symbolHeight=k.symbolHeight||this.fontMetrics.f,v.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,n,C),z&&this.createCheckboxForItem(a));
this.colorizeItem(a,a.visible);this.setText(a);l=n.getBBox();f=a.checkboxOffset=k.itemWidth||a.legendItemWidth||f+p+l.width+y+(z?20:0);this.itemHeight=p=Math.round(a.legendItemHeight||l.height);u&&this.itemX-w+f>(A||b.chartWidth-2*c-w-k.x)&&(this.itemX=w,this.itemY+=h+this.lastLineHeight+J,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,f);this.lastItemY=h+this.itemY+J;this.lastLineHeight=Math.max(p,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];u?this.itemX+=f:
(this.itemY+=h+p+J,this.lastLineHeight=p);this.offsetWidth=A||Math.max((u?this.itemX-w-y:f)+c,this.offsetWidth)},getAllItems:function(){var a=[];n(this.chart.series,function(b){var g=b&&b.options;b&&e(g.showInLegend,v(g.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===g.legendType?b.data:b)))});return a},adjustMargins:function(a,b){var g=this.chart,l=this.options,k=l.align.charAt(0)+l.verticalAlign.charAt(0)+l.layout.charAt(0);l.floating||n([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,
/(lbv|lm|ltv)/],function(f,r){f.test(k)&&!v(a[r])&&(g[t[r]]=Math.max(g[t[r]],g.legend[(r+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][r]*l[r%2?"x":"y"]+e(l.margin,12)+b[r]))})},render:function(){var a=this,b=a.chart,e=b.renderer,k=a.group,u,f,B,d,x=a.box,c=a.options,y=a.padding;a.itemX=a.initialItemX;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;k||(a.group=k=e.g("legend").attr({zIndex:7}).add(),a.contentGroup=e.g().attr({zIndex:1}).add(k),a.scrollGroup=e.g().add(a.contentGroup));a.renderTitle();
u=a.getAllItems();p(u,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});c.reversed&&u.reverse();a.allItems=u;a.display=f=!!u.length;a.lastLineHeight=0;n(u,function(b){a.renderItem(b)});B=(c.width||a.offsetWidth)+y;d=a.lastItemY+a.lastLineHeight+a.titleHeight;d=a.handleOverflow(d);d+=y;x||(a.box=x=e.rect().addClass("highcharts-legend-box").attr({r:c.borderRadius}).add(k),x.isNew=!0);x.attr({stroke:c.borderColor,"stroke-width":c.borderWidth||0,fill:c.backgroundColor||
"none"}).shadow(c.shadow);0<B&&0<d&&(x[x.isNew?"attr":"animate"](x.crisp({x:0,y:0,width:B,height:d},x.strokeWidth())),x.isNew=!1);x[f?"show":"hide"]();a.legendWidth=B;a.legendHeight=d;n(u,function(b){a.positionItem(b)});f&&k.align(m({width:B,height:d},c),!0,"spacingBox");b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,l=this.chart,k=l.renderer,u=this.options,f=u.y,l=l.spacingBox.height+("top"===u.verticalAlign?-f:f)-this.padding,f=u.maxHeight,p,d=this.clipRect,x=u.navigation,
c=e(x.animation,!0),y=x.arrowSize||12,w=this.nav,A=this.pages,J=this.padding,h,m=this.allItems,q=function(a){a?d.attr({height:a}):d&&(b.clipRect=d.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+J+"px,9999px,"+(J+a)+"px,0)":"auto")};"horizontal"!==u.layout||"middle"===u.verticalAlign||u.floating||(l/=2);f&&(l=Math.min(l,f));A.length=0;a>l&&!1!==x.enabled?(this.clipHeight=p=Math.max(l-20-this.titleHeight-J,0),this.currentPage=e(this.currentPage,1),this.fullHeight=
a,n(m,function(a,b){var c=a._legendItemPos[1];a=Math.round(a.legendItem.getBBox().height);var d=A.length;if(!d||c-A[d-1]>p&&(h||c)!==A[d-1])A.push(h||c),d++;b===m.length-1&&c+a-A[d-1]>p&&A.push(c);c!==h&&(h=c)}),d||(d=b.clipRect=k.clipRect(0,J,9999,0),b.contentGroup.clip(d)),q(p),w||(this.nav=w=k.g().attr({zIndex:1}).add(this.group),this.up=k.symbol("triangle",0,0,y,y).on("click",function(){b.scroll(-1,c)}).add(w),this.pager=k.text("",15,10).addClass("highcharts-legend-navigation").css(x.style).add(w),
this.down=k.symbol("triangle-down",0,0,y,y).on("click",function(){b.scroll(1,c)}).add(w)),b.scroll(0),a=l):w&&(q(),w.hide(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,g){var e=this.pages,k=e.length;a=this.currentPage+a;var l=this.clipHeight,f=this.options.navigation,p=this.pager,d=this.padding;a>k&&(a=k);0<a&&(void 0!==g&&b(g,this.chart),this.nav.attr({translateX:d,translateY:l+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===
a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),p.attr({text:a+"/"+k}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===k?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?f.inactiveColor:f.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===k?f.inactiveColor:f.activeColor}).css({cursor:a===k?"default":"pointer"}),g=-e[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:g}),this.currentPage=
a,this.positionCheckboxes(g))}};a.LegendSymbolMixin={drawRectangle:function(a,b){var g=a.symbolHeight,k=a.options.squareSymbol;b.legendSymbol=this.chart.renderer.rect(k?(a.symbolWidth-g)/2:0,a.baseline-g+1,k?g:a.symbolWidth,g,e(a.options.symbolRadius,g/2)).addClass("highcharts-point").attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,k=b.marker,l=a.symbolWidth,u=a.symbolHeight,f=u/2,p=this.chart.renderer,d=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);
var x;x={"stroke-width":b.lineWidth||0};b.dashStyle&&(x.dashstyle=b.dashStyle);this.legendLine=p.path(["M",0,a,"L",l,a]).addClass("highcharts-graph").attr(x).add(d);k&&!1!==k.enabled&&(b=Math.min(e(k.radius,f),f),0===this.symbol.indexOf("url")&&(k=q(k,{width:u,height:u}),b=0),this.legendSymbol=k=p.symbol(this.symbol,l/2-b,a-b,2*b,2*b,k).addClass("highcharts-point").add(d),k.isMarker=!0)}};(/Trident\/7\.0/.test(w.navigator.userAgent)||z)&&k(E.prototype,"positionItem",function(a,b){var e=this,g=function(){b._legendItemPos&&
a.call(e,b)};g();setTimeout(g)})})(K);(function(a){var E=a.addEvent,D=a.animate,H=a.animObject,I=a.attr,v=a.doc,n=a.Axis,m=a.createElement,z=a.defaultOptions,t=a.discardElement,q=a.charts,e=a.css,b=a.defined,p=a.each,w=a.extend,k=a.find,l=a.fireEvent,g=a.getStyle,F=a.grep,r=a.isNumber,u=a.isObject,f=a.isString,B=a.Legend,d=a.marginNames,x=a.merge,c=a.Pointer,y=a.pick,L=a.pInt,A=a.removeEvent,J=a.seriesTypes,h=a.splat,G=a.svg,Q=a.syncTimeout,P=a.win,N=a.Renderer,S=a.Chart=function(){this.getArgs.apply(this,
arguments)};a.chart=function(a,b,c){return new S(a,b,c)};S.prototype={callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(f(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var d,h=b.series;b.series=null;d=x(z,b);d.series=b.series=h;this.userOptions=b;this.respRules=[];b=d.chart;h=b.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.callback=c;this.isResizing=0;this.options=d;this.axes=[];this.series=[];this.hasCartesianSeries=b.showAxes;
var f;this.index=q.length;q.push(this);a.chartCount++;if(h)for(f in h)E(this,f,h[f]);this.xAxis=[];this.yAxis=[];this.pointCount=this.colorCounter=this.symbolCounter=0;this.firstRender()},initSeries:function(b){var c=this.options.chart;(c=J[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].name||"Series "+(b[a].index+1))},isInsidePlot:function(a,b,c){var d=c?
b:a;a=c?a:b;return 0<=d&&d<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var c=this.axes,d=this.series,h=this.pointer,f=this.legend,e=this.isDirtyLegend,y,g,A=this.hasCartesianSeries,k=this.isDirtyBox,u=d.length,r=u,x=this.renderer,J=x.isHidden(),C=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);J&&this.cloneRenderTo();for(this.layOutTitles();r--;)if(b=d[r],b.options.stacking&&(y=!0,b.isDirty)){g=!0;break}if(g)for(r=u;r--;)b=d[r],b.options.stacking&&(b.isDirty=
!0);p(d,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),e=!0);a.isDirtyData&&l(a,"updatedData")});e&&f.options.enabled&&(f.render(),this.isDirtyLegend=!1);y&&this.getStacks();A&&p(c,function(a){a.updateNames();a.setScale()});this.getMargins();A&&(p(c,function(a){a.isDirty&&(k=!0)}),p(c,function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,C.push(function(){l(a,"afterSetExtremes",w(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(k||y)&&a.redraw()}));
k&&this.drawChartBox();l(this,"predraw");p(d,function(a){(k||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});h&&h.reset(!0);x.draw();l(this,"redraw");l(this,"render");J&&this.cloneRenderTo(!0);p(C,function(a){a.call()})},get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var c,d=this.series,h;c=k(this.axes,b)||k(this.series,b);for(h=0;!c&&h<d.length;h++)c=k(d[h].points||[],b);return c},getAxes:function(){var a=this,b=this.options,c=b.xAxis=h(b.xAxis||{}),b=b.yAxis=h(b.yAxis||
{});p(c,function(a,b){a.index=b;a.isX=!0});p(b,function(a,b){a.index=b});c=c.concat(b);p(c,function(b){new n(a,b)})},getSelectedPoints:function(){var a=[];p(this.series,function(b){a=a.concat(F(b.points||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return F(this.series,function(a){return a.selected})},setTitle:function(a,b,c){var d=this,h=d.options,f;f=h.title=x({style:{color:"#333333",fontSize:h.isStock?"16px":"18px"}},h.title,a);h=h.subtitle=x({style:{color:"#666666"}},
h.subtitle,b);p([["title",a,f],["subtitle",b,h]],function(a,b){var c=a[0],h=d[c],f=a[1];a=a[2];h&&f&&(d[c]=h=h.destroy());a&&a.text&&!h&&(d[c]=d.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),d[c].update=function(a){d.setTitle(!b&&a,b&&a)},d[c].css(a.style))});d.layOutTitles(c)},layOutTitles:function(a){var b=0,c,d=this.renderer,h=this.spacingBox;p(["title","subtitle"],function(a){var c=this[a],f=this.options[a],e;c&&(e=f.style.fontSize,
e=d.fontMetrics(e,c).b,c.css({width:(f.width||h.width+f.widthAdjust)+"px"}).align(w({y:b+e+("title"===a?-3:2)},f),!1,"spacingBox"),f.floating||f.verticalAlign||(b=Math.ceil(b+c.getBBox().height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=c,this.hasRendered&&y(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var a=this.options.chart,c=a.width,a=a.height,d=this.renderToClone||this.renderTo;b(c)||(this.containerWidth=g(d,"width"));b(a)||(this.containerHeight=
g(d,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,a||this.containerHeight||400)},cloneRenderTo:function(a){var b=this.renderToClone,c=this.container;if(a){if(b){for(;b.childNodes.length;)this.renderTo.appendChild(b.firstChild);t(b);delete this.renderToClone}}else c&&c.parentNode===this.renderTo&&this.renderTo.removeChild(c),this.renderToClone=b=this.renderTo.cloneNode(0),e(b,{position:"absolute",top:"-9999px",display:"block"}),b.style.setProperty&&
b.style.setProperty("display","block","important"),v.body.appendChild(b),c&&b.appendChild(c)},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,d=c.chart,h,e;b=this.renderTo;var y=a.uniqueKey(),g;b||(this.renderTo=b=d.renderTo);f(b)&&(this.renderTo=b=v.getElementById(b));b||a.error(13,!0);h=L(I(b,"data-highcharts-chart"));r(h)&&q[h]&&q[h].hasRendered&&q[h].destroy();I(b,"data-highcharts-chart",this.index);b.innerHTML="";
d.skipClone||b.offsetWidth||this.cloneRenderTo();this.getChartSize();h=this.chartWidth;e=this.chartHeight;g=w({position:"relative",overflow:"hidden",width:h+"px",height:e+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},d.style);this.container=b=m("div",{id:y},g,this.renderToClone||b);this._cursor=b.style.cursor;this.renderer=new (a[d.renderer]||N)(b,h,e,null,d.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(d.className);this.renderer.setStyle(d.style);
this.renderer.chartIndex=this.index},getMargins:function(a){var c=this.spacing,d=this.margin,h=this.titleOffset;this.resetMargins();h&&!b(d[0])&&(this.plotTop=Math.max(this.plotTop,h+this.options.title.margin+c[0]));this.legend.display&&this.legend.adjustMargins(d,c);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.extraTopMargin&&(this.plotTop+=this.extraTopMargin);a||this.getAxisMargins()},getAxisMargins:function(){var a=this,c=a.axisOffset=
[0,0,0,0],h=a.margin;a.hasCartesianSeries&&p(a.axes,function(a){a.visible&&a.getOffset()});p(d,function(d,f){b(h[f])||(a[d]+=c[f])});a.setChartSize()},reflow:function(a){var c=this,d=c.options.chart,h=c.renderTo,f=b(d.width),e=d.width||g(h,"width"),d=d.height||g(h,"height"),h=a?a.target:P;if(!f&&!c.isPrinting&&e&&d&&(h===P||h===v)){if(e!==c.containerWidth||d!==c.containerHeight)clearTimeout(c.reflowTimeout),c.reflowTimeout=Q(function(){c.container&&c.setSize(void 0,void 0,!1)},a?100:0);c.containerWidth=
e;c.containerHeight=d}},initReflow:function(){var a=this,b;b=E(P,"resize",function(b){a.reflow(b)});E(a,"destroy",b)},setSize:function(b,c,d){var h=this,f=h.renderer;h.isResizing+=1;a.setAnimation(d,h);h.oldChartHeight=h.chartHeight;h.oldChartWidth=h.chartWidth;void 0!==b&&(h.options.chart.width=b);void 0!==c&&(h.options.chart.height=c);h.getChartSize();b=f.globalAnimation;(b?D:e)(h.container,{width:h.chartWidth+"px",height:h.chartHeight+"px"},b);h.setChartSize(!0);f.setSize(h.chartWidth,h.chartHeight,
d);p(h.axes,function(a){a.isDirty=!0;a.setScale()});h.isDirtyLegend=!0;h.isDirtyBox=!0;h.layOutTitles();h.getMargins();h.redraw(d);h.oldChartHeight=null;l(h,"resize");Q(function(){h&&l(h,"endResize",null,function(){--h.isResizing})},H(b).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,d=this.chartWidth,h=this.chartHeight,f=this.options.chart,e=this.spacing,y=this.clipOffset,g,A,k,l;this.plotLeft=g=Math.round(this.plotLeft);this.plotTop=A=Math.round(this.plotTop);this.plotWidth=
k=Math.max(0,Math.round(d-g-this.marginRight));this.plotHeight=l=Math.max(0,Math.round(h-A-this.marginBottom));this.plotSizeX=b?l:k;this.plotSizeY=b?k:l;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:e[3],y:e[0],width:d-e[3]-e[1],height:h-e[0]-e[2]};this.plotBox=c.plotBox={x:g,y:A,width:k,height:l};d=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(d,y[3])/2);c=Math.ceil(Math.max(d,y[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(d,y[1])/
2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(d,y[2])/2-c))};a||p(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;p(["margin","spacing"],function(c){var d=b[c],h=u(d)?d:[d,d,d,d];p(["Top","Right","Bottom","Left"],function(d,f){a[c][f]=y(b[c+d],h[f])})});p(d,function(b,c){a[b]=y(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=
this.chartWidth,d=this.chartHeight,h=this.chartBackground,f=this.plotBackground,e=this.plotBorder,y,g=this.plotBGImage,A=a.backgroundColor,k=a.plotBackgroundColor,l=a.plotBackgroundImage,u,r=this.plotLeft,x=this.plotTop,J=this.plotWidth,p=this.plotHeight,w=this.plotBox,m=this.clipRect,q=this.clipBox,B="animate";h||(this.chartBackground=h=b.rect().addClass("highcharts-background").add(),B="attr");y=a.borderWidth||0;u=y+(a.shadow?8:0);A={fill:A||"none"};if(y||h["stroke-width"])A.stroke=a.borderColor,
A["stroke-width"]=y;h.attr(A).shadow(a.shadow);h[B]({x:u/2,y:u/2,width:c-u-y%2,height:d-u-y%2,r:a.borderRadius});B="animate";f||(B="attr",this.plotBackground=f=b.rect().addClass("highcharts-plot-background").add());f[B](w);f.attr({fill:k||"none"}).shadow(a.plotShadow);l&&(g?g.animate(w):this.plotBGImage=b.image(l,r,x,J,p).add());m?m.animate({width:q.width,height:q.height}):this.clipRect=b.clipRect(q);B="animate";e||(B="attr",this.plotBorder=e=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());
e.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});e[B](e.crisp({x:r,y:x,width:J,height:p},-e.strokeWidth()));this.isDirtyBox=!1},propFromSeries:function(){var a=this,b=a.options.chart,c,d=a.options.series,h,f;p(["inverted","angular","polar"],function(e){c=J[b.type||b.defaultSeriesType];f=b[e]||c&&c.prototype[e];for(h=d&&d.length;!f&&h--;)(c=J[d[h].type])&&c.prototype[e]&&(f=!0);a[e]=f})},linkSeries:function(){var a=this,b=a.series;p(b,function(a){a.linkedSeries.length=
0});p(b,function(b){var c=b.options.linkedTo;f(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=y(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){p(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&p(b.items,function(c){var d=w(b.style,c.style),h=L(d.left)+a.plotLeft,f=L(d.top)+a.plotTop+12;delete d.left;delete d.top;a.renderer.text(c.html,
h,f).attr({zIndex:2}).css(d).add()})},render:function(){var a=this.axes,b=this.renderer,c=this.options,d,h,f;this.setTitle();this.legend=new B(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;d=this.plotHeight-=21;p(a,function(a){a.setScale()});this.getAxisMargins();h=1.1<c/this.plotWidth;f=1.05<d/this.plotHeight;if(h||f)p(a,function(a){(a.horiz&&h||!a.horiz&&f)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&
p(a,function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=x(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(P.location.href=a.href)}).attr({align:a.position.align,
zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,d=b.series,h=b.container,f,e=h&&h.parentNode;l(b,"destroy");q[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");A(b);for(f=c.length;f--;)c[f]=c[f].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(f=d.length;f--;)d[f]=d[f].destroy();p("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),
function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});h&&(h.innerHTML="",A(h),e&&t(h));for(f in b)delete b[f]},isReadyToRender:function(){var a=this;return G||P!=P.top||"complete"===v.readyState?!0:(v.attachEvent("onreadystatechange",function(){v.detachEvent("onreadystatechange",a.firstRender);"complete"===v.readyState&&a.firstRender()}),!1)},firstRender:function(){var a=this,b=a.options;if(a.isReadyToRender()){a.getContainer();l(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();
a.getAxes();p(b.series||[],function(b){a.initSeries(b)});a.linkSeries();l(a,"beforeRender");c&&(a.pointer=new c(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.cloneRenderTo(!0)}},onload:function(){p([this.callback].concat(this.callbacks),function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);l(this,"load");l(this,"render");b(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}}})(K);(function(a){var E,D=a.each,H=a.extend,I=a.erase,v=a.fireEvent,
n=a.format,m=a.isArray,z=a.isNumber,t=a.pick,q=a.removeEvent;E=a.Point=function(){};E.prototype={init:function(a,b,p){this.series=a;this.color=a.color;this.applyOptions(b,p);a.options.colorByPoint?(b=a.options.colors||a.chart.options.colors,this.color=this.color||b[a.colorCounter],b=b.length,p=a.colorCounter,a.colorCounter++,a.colorCounter===b&&(a.colorCounter=0)):p=a.colorIndex;this.colorIndex=t(this.colorIndex,p);a.chart.pointCount++;return this},applyOptions:function(a,b){var e=this.series,w=e.options.pointValKey||
e.pointValKey;a=E.prototype.optionsToObject.call(this,a);H(this,a);this.options=this.options?H(this.options,a):a;a.group&&delete this.group;w&&(this.y=this[w]);this.isNull=t(this.isValid&&!this.isValid(),null===this.x||!z(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===b&&e.xAxis&&e.xAxis.hasNames&&(this.x=e.xAxis.nameToX(this));void 0===this.x&&e&&(this.x=void 0===b?e.autoIncrement(this):b);return this},optionsToObject:function(a){var b={},e=this.series,w=e.options.keys,
k=w||e.pointArrayMap||["y"],l=k.length,g=0,q=0;if(z(a)||null===a)b[k[0]]=a;else if(m(a))for(!w&&a.length>l&&(e=typeof a[0],"string"===e?b.name=a[0]:"number"===e&&(b.x=a[0]),g++);q<l;)w&&void 0===a[g]||(b[k[q]]=a[g]),g++,q++;else"object"===typeof a&&(b=a,a.dataLabels&&(e._hasPointLabels=!0),a.marker&&(e._hasPointMarkers=!0));return b},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":
"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var a=this.series,b=a.zones,a=a.zoneAxis||"y",p=0,w;for(w=b[p];this[a]>=w.value;)w=b[++p];w&&w.color&&!this.options.color&&(this.color=w.color);return w},destroy:function(){var a=this.series.chart,b=a.hoverPoints,p;a.pointCount--;b&&(this.setState(),I(b,this),b.length||
(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)q(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(p in this)this[p]=null},destroyElements:function(){for(var a=["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],b,p=6;p--;)b=a[p],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,
point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,e=b.tooltipOptions,w=t(e.valueDecimals,""),k=e.valuePrefix||"",l=e.valueSuffix||"";D(b.pointArrayMap||["y"],function(b){b="{point."+b;if(k||l)a=a.replace(b+"}",k+b+"}"+l);a=a.replace(b+"}",b+":,."+w+"f}")});return n(a,{point:this,series:this.series})},firePointEvent:function(a,b,p){var e=this,k=this.series.options;(k.point.events[a]||e.options&&e.options.events&&e.options.events[a])&&
this.importEvents();"click"===a&&k.allowPointSelect&&(p=function(a){e.select&&e.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});v(this,a,b,p)},visible:!0}})(K);(function(a){var E=a.addEvent,D=a.animObject,H=a.arrayMax,I=a.arrayMin,v=a.correctFloat,n=a.Date,m=a.defaultOptions,z=a.defaultPlotOptions,t=a.defined,q=a.each,e=a.erase,b=a.extend,p=a.fireEvent,w=a.grep,k=a.isArray,l=a.isNumber,g=a.isString,F=a.merge,r=a.pick,u=a.removeEvent,f=a.splat,B=a.SVGElement,d=a.syncTimeout,x=a.win;a.Series=a.seriesType("line",
null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",radius:4,states:{hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",
x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{hover:{lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,d){var c=this,f,e,h=a.series,y;c.chart=a;c.options=d=c.setOptions(d);c.linkedSeries=[];c.bindAxes();b(c,{name:d.name,state:"",visible:!1!==
d.visible,selected:!0===d.selected});e=d.events;for(f in e)E(c,f,e[f]);if(e&&e.click||d.point&&d.point.events&&d.point.events.click||d.allowPointSelect)a.runTrackerClick=!0;c.getColor();c.getSymbol();q(c.parallelArrays,function(a){c[a+"Data"]=[]});c.setData(d.data,!1);c.isCartesian&&(a.hasCartesianSeries=!0);h.length&&(y=h[h.length-1]);c._i=r(y&&y._i,-1)+1;a.orderSeries(this.insert(h))},insert:function(a){var b=this.options.index,c;if(l(b)){for(c=a.length;c--;)if(b>=r(a[c].options.index,a[c]._i)){a.splice(c+
1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return r(c,a.length-1)},bindAxes:function(){var b=this,d=b.options,f=b.chart,e;q(b.axisTypes||[],function(c){q(f[c],function(a){e=a.options;if(d[c]===e.index||void 0!==d[c]&&d[c]===e.id||void 0===d[c]&&0===e.index)b.insert(a.series),b[c]=a,a.isDirty=!0});b[c]||b.optionalAxis===c||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,f=l(b)?function(d){var h="y"===d&&c.toYData?c.toYData(a):a[d];c[d+"Data"][b]=
h}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};q(c.parallelArrays,f)},autoIncrement:function(){var a=this.options,b=this.xIncrement,d,f=a.pointIntervalUnit,b=r(b,a.pointStart,0);this.pointInterval=d=r(this.pointInterval,a.pointInterval,1);f&&(a=new n(b),"day"===f?a=+a[n.hcSetDate](a[n.hcGetDate]()+d):"month"===f?a=+a[n.hcSetMonth](a[n.hcGetMonth]()+d):"year"===f&&(a=+a[n.hcSetFullYear](a[n.hcGetFullYear]()+d)),d=a-b);this.xIncrement=b+d;return b},setOptions:function(a){var b=
this.chart,c=b.options.plotOptions,b=b.userOptions||{},d=b.plotOptions||{},f=c[this.type];this.userOptions=a;c=F(f,c.series,a);this.tooltipOptions=F(m.tooltip,m.plotOptions[this.type].tooltip,b.tooltip,d.series&&d.series.tooltip,d[this.type]&&d[this.type].tooltip,a.tooltip);null===f.marker&&delete c.marker;this.zoneAxis=c.zoneAxis;a=this.zones=(c.zones||[]).slice();!c.negativeColor&&!c.negativeFillColor||c.zones||a.push({value:c[this.zoneAxis+"Threshold"]||c.threshold||0,className:"highcharts-negative",
color:c.negativeColor,fillColor:c.negativeFillColor});a.length&&t(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return c},getCyclic:function(a,b,d){var c,f=this.chart,h=this.userOptions,e=a+"Index",g=a+"Counter",y=d?d.length:r(f.options.chart[a+"Count"],f[a+"Count"]);b||(c=r(h[e],h["_"+e]),t(c)||(f.series.length||(f[g]=0),h["_"+e]=c=f[g]%y,f[g]+=1),d&&(b=d[c]));void 0!==c&&(this[e]=c);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",
this.options.color||z[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(b,d,f,e){var c=this,h=c.points,y=h&&h.length||0,A,u=c.options,x=c.chart,p=null,w=c.xAxis,m=u.turboThreshold,B=this.xData,n=this.yData,t=(A=c.pointArrayMap)&&A.length;b=b||[];A=b.length;d=r(d,!0);if(!1!==e&&A&&y===A&&!c.cropped&&!c.hasGroupedData&&c.visible)q(b,function(a,
b){h[b].update&&a!==u.data[b]&&h[b].update(a,!1,null,!1)});else{c.xIncrement=null;c.colorCounter=0;q(this.parallelArrays,function(a){c[a+"Data"].length=0});if(m&&A>m){for(f=0;null===p&&f<A;)p=b[f],f++;if(l(p))for(f=0;f<A;f++)B[f]=this.autoIncrement(),n[f]=b[f];else if(k(p))if(t)for(f=0;f<A;f++)p=b[f],B[f]=p[0],n[f]=p.slice(1,t+1);else for(f=0;f<A;f++)p=b[f],B[f]=p[0],n[f]=p[1];else a.error(12)}else for(f=0;f<A;f++)void 0!==b[f]&&(p={series:c},c.pointClass.prototype.applyOptions.apply(p,[b[f]]),c.updateParallelArrays(p,
f));g(n[0])&&a.error(14,!0);c.data=[];c.options.data=c.userOptions.data=b;for(f=y;f--;)h[f]&&h[f].destroy&&h[f].destroy();w&&(w.minRange=w.userMinRange);c.isDirty=x.isDirtyBox=!0;c.isDirtyData=!!h;f=!1}"point"===u.legendType&&(this.processData(),this.generatePoints());d&&x.redraw(f)},processData:function(b){var c=this.xData,d=this.yData,f=c.length,e;e=0;var h,g,k=this.xAxis,l,u=this.options;l=u.cropThreshold;var r=this.getExtremesFromAll||u.getExtremesFromAll,x=this.isCartesian,u=k&&k.val2lin,p=k&&
k.isLog,q,w;if(x&&!this.isDirty&&!k.isDirty&&!this.yAxis.isDirty&&!b)return!1;k&&(b=k.getExtremes(),q=b.min,w=b.max);if(x&&this.sorted&&!r&&(!l||f>l||this.forceCrop))if(c[f-1]<q||c[0]>w)c=[],d=[];else if(c[0]<q||c[f-1]>w)e=this.cropData(this.xData,this.yData,q,w),c=e.xData,d=e.yData,e=e.start,h=!0;for(l=c.length||1;--l;)f=p?u(c[l])-u(c[l-1]):c[l]-c[l-1],0<f&&(void 0===g||f<g)?g=f:0>f&&this.requireSorting&&a.error(15);this.cropped=h;this.cropStart=e;this.processedXData=c;this.processedYData=d;this.closestPointRange=
g},cropData:function(a,b,d,f){var c=a.length,h=0,e=c,g=r(this.cropShoulder,1),y;for(y=0;y<c;y++)if(a[y]>=d){h=Math.max(0,y-g);break}for(d=y;d<c;d++)if(a[d]>f){e=d+g;break}return{xData:a.slice(h,e),yData:b.slice(h,e),start:h,end:e}},generatePoints:function(){var a=this.options.data,b=this.data,d,e=this.processedXData,g=this.processedYData,h=this.pointClass,k=e.length,l=this.cropStart||0,u,r=this.hasGroupedData,x,p=[],q;b||r||(b=[],b.length=a.length,b=this.data=b);for(q=0;q<k;q++)u=l+q,r?(x=(new h).init(this,
[e[q]].concat(f(g[q]))),x.dataGroup=this.groupMap[q]):(x=b[u])||void 0===a[u]||(b[u]=x=(new h).init(this,a[u],e[q])),x.index=u,p[q]=x;if(b&&(k!==(d=b.length)||r))for(q=0;q<d;q++)q!==l||r||(q+=k),b[q]&&(b[q].destroyElements(),b[q].plotX=void 0);this.data=b;this.points=p},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,d,f=[],h=0;d=this.xAxis.getExtremes();var e=d.min,g=d.max,u,r,x,p;a=a||this.stackedYData||this.processedYData||[];d=a.length;for(p=0;p<d;p++)if(r=c[p],x=a[p],u=(l(x,!0)||
k(x))&&(!b.isLog||x.length||0<x),r=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[p+1]||r)>=e&&(c[p-1]||r)<=g,u&&r)if(u=x.length)for(;u--;)null!==x[u]&&(f[h++]=x[u]);else f[h++]=x;this.dataMin=I(f);this.dataMax=H(f)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,d=this.xAxis,f=d.categories,e=this.yAxis,h=this.points,g=h.length,k=!!this.modifyValue,u=a.pointPlacement,x="between"===u||l(u),p=a.threshold,
q=a.startFromThreshold?p:0,w,m,B,n,F=Number.MAX_VALUE;"between"===u&&(u=.5);l(u)&&(u*=r(a.pointRange||d.pointRange));for(a=0;a<g;a++){var z=h[a],D=z.x,E=z.y;m=z.low;var I=b&&e.stacks[(this.negStacks&&E<(q?0:p)?"-":"")+this.stackKey],H;e.isLog&&null!==E&&0>=E&&(z.isNull=!0);z.plotX=w=v(Math.min(Math.max(-1E5,d.translate(D,0,0,0,1,u,"flags"===this.type)),1E5));b&&this.visible&&!z.isNull&&I&&I[D]&&(n=this.getStackIndicator(n,D,this.index),H=I[D],E=H.points[n.key],m=E[0],E=E[1],m===q&&n.key===I[D].base&&
(m=r(p,e.min)),e.isLog&&0>=m&&(m=null),z.total=z.stackTotal=H.total,z.percentage=H.total&&z.y/H.total*100,z.stackY=E,H.setOffset(this.pointXOffset||0,this.barW||0));z.yBottom=t(m)?e.translate(m,0,1,0,1):null;k&&(E=this.modifyValue(E,z));z.plotY=m="number"===typeof E&&Infinity!==E?Math.min(Math.max(-1E5,e.translate(E,0,1,0,1)),1E5):void 0;z.isInside=void 0!==m&&0<=m&&m<=e.len&&0<=w&&w<=d.len;z.clientX=x?v(d.translate(D,0,0,0,1,u)):w;z.negative=z.y<(p||0);z.category=f&&void 0!==f[z.x]?f[z.x]:z.x;z.isNull||
(void 0!==B&&(F=Math.min(F,Math.abs(w-B))),B=w);z.zone=this.zones.length&&z.getZone()}this.closestPointRangePx=F},getValidPoints:function(a,b){var c=this.chart;return w(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,d=b.renderer,f=b.inverted,h=this.clipBox,e=h||b.clipBox,g=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,e.height,c.xAxis,c.yAxis].join(),k=b[g],l=b[g+"m"];k||(a&&(e.width=
0,b[g+"m"]=l=d.clipRect(-99,f?-b.plotLeft:-b.plotTop,99,f?b.chartWidth:b.chartHeight)),b[g]=k=d.clipRect(e),k.count={length:0});a&&!k.count[this.index]&&(k.count[this.index]=!0,k.count.length+=1);!1!==c.clip&&(this.group.clip(a||h?k:b.clipRect),this.markerGroup.clip(l),this.sharedClipKey=g);a||(k.count[this.index]&&(delete k.count[this.index],--k.count.length),0===k.count.length&&g&&b[g]&&(h||(b[g]=b[g].destroy()),b[g+"m"]&&(this.markerGroup.clip(),b[g+"m"]=b[g+"m"].destroy())))},animate:function(a){var b=
this.chart,c=D(this.options.animation),d;a?this.setClip(c):(d=this.sharedClipKey,(a=b[d])&&a.animate({width:b.plotSizeX},c),b[d+"m"]&&b[d+"m"].animate({width:b.plotSizeX+99},c),this.animate=null)},afterAnimate:function(){this.setClip();p(this,"afterAnimate")},drawPoints:function(){var a=this.points,b=this.chart,d,f,e,h,g=this.options.marker,k,u,x,p,q=this.markerGroup,w=r(g.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>2*g.radius);if(!1!==g.enabled||this._hasPointMarkers)for(f=0;f<a.length;f++)e=
a[f],d=e.plotY,h=e.graphic,k=e.marker||{},u=!!e.marker,x=w&&void 0===k.enabled||k.enabled,p=e.isInside,x&&l(d)&&null!==e.y?(d=r(k.symbol,this.symbol),e.hasImage=0===d.indexOf("url"),x=this.markerAttribs(e,e.selected&&"select"),h?h[p?"show":"hide"](!0).animate(x):p&&(0<x.width||e.hasImage)&&(e.graphic=h=b.renderer.symbol(d,x.x,x.y,x.width,x.height,u?k:g).add(q)),h&&h.attr(this.pointAttribs(e,e.selected&&"select")),h&&h.addClass(e.getClassName(),!0)):h&&(e.graphic=h.destroy())},markerAttribs:function(a,
b){var c=this.options.marker,d=a.marker||{},f=r(d.radius,c.radius);b&&(c=c.states[b],b=d.states&&d.states[b],f=r(b&&b.radius,c&&c.radius,f+(c&&c.radiusPlus||0)));a.hasImage&&(f=0);a={x:Math.floor(a.plotX)-f,y:a.plotY-f};f&&(a.width=a.height=2*f);return a},pointAttribs:function(a,b){var c=this.options.marker,d=a&&a.options,f=d&&d.marker||{},h=this.color,e=d&&d.color,g=a&&a.color,d=r(f.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;h=e||a||g||h;a=f.fillColor||c.fillColor||h;h=f.lineColor||c.lineColor||
h;b&&(c=c.states[b],b=f.states&&f.states[b]||{},d=r(b.lineWidth,c.lineWidth,d+r(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,h=b.lineColor||c.lineColor||h);return{stroke:h,"stroke-width":d,fill:a}},destroy:function(){var a=this,b=a.chart,d=/AppleWebKit\/533/.test(x.navigator.userAgent),f,g=a.data||[],h,k,l;p(a,"destroy");u(a);q(a.axisTypes||[],function(b){(l=a[b])&&l.series&&(e(l.series,a),l.isDirty=l.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(f=g.length;f--;)(h=
g[f])&&h.destroy&&h.destroy();a.points=null;clearTimeout(a.animationTimeout);for(k in a)a[k]instanceof B&&!a[k].survive&&(f=d&&"group"===k?"hide":"destroy",a[k][f]());b.hoverSeries===a&&(b.hoverSeries=null);e(b.series,a);b.orderSeries();for(k in a)delete a[k]},getGraphPath:function(a,b,d){var c=this,f=c.options,h=f.step,e,g=[],k=[],l;a=a||c.points;(e=a.reversed)&&a.reverse();(h={right:1,center:2}[h]||h&&3)&&e&&(h=4-h);!f.connectNulls||b||d||(a=this.getValidPoints(a));q(a,function(e,y){var u=e.plotX,
A=e.plotY,x=a[y-1];(e.leftCliff||x&&x.rightCliff)&&!d&&(l=!0);e.isNull&&!t(b)&&0<y?l=!f.connectNulls:e.isNull&&!b?l=!0:(0===y||l?y=["M",e.plotX,e.plotY]:c.getPointSpline?y=c.getPointSpline(a,e,y):h?(y=1===h?["L",x.plotX,A]:2===h?["L",(x.plotX+u)/2,x.plotY,"L",(x.plotX+u)/2,A]:["L",u,x.plotY],y.push("L",u,A)):y=["L",u,A],k.push(e.x),h&&k.push(e.x),g.push.apply(g,y),l=!1)});g.xMap=k;return c.graphPath=g},drawGraph:function(){var a=this,b=this.options,d=(this.gappedPath||this.getGraphPath).call(this),
f=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];q(this.zones,function(c,d){f.push(["zone-graph-"+d,"highcharts-graph highcharts-zone-graph-"+d+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});q(f,function(c,f){var h=c[0],e=a[h];e?(e.endX=d.xMap,e.animate({d:d})):d.length&&(a[h]=a.chart.renderer.path(d).addClass(c[1]).attr({zIndex:1}).add(a.group),e={stroke:c[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},c[3]?e.dashstyle=c[3]:"square"!==b.linecap&&
(e["stroke-linecap"]=e["stroke-linejoin"]="round"),e=a[h].attr(e).shadow(2>f&&b.shadow));e&&(e.startX=d.xMap,e.isArea=d.isArea)})},applyZones:function(){var a=this,b=this.chart,d=b.renderer,f=this.zones,e,h,g=this.clips||[],k,l=this.graph,u=this.area,x=Math.max(b.chartWidth,b.chartHeight),p=this[(this.zoneAxis||"y")+"Axis"],w,m,B=b.inverted,n,t,v,F,z=!1;f.length&&(l||u)&&p&&void 0!==p.min&&(m=p.reversed,n=p.horiz,l&&l.hide(),u&&u.hide(),w=p.getExtremes(),q(f,function(c,f){e=m?n?b.plotWidth:0:n?0:
p.toPixels(w.min);e=Math.min(Math.max(r(h,e),0),x);h=Math.min(Math.max(Math.round(p.toPixels(r(c.value,w.max),!0)),0),x);z&&(e=h=p.toPixels(w.max));t=Math.abs(e-h);v=Math.min(e,h);F=Math.max(e,h);p.isXAxis?(k={x:B?F:v,y:0,width:t,height:x},n||(k.x=b.plotHeight-k.x)):(k={x:0,y:B?F:v,width:x,height:t},n&&(k.y=b.plotWidth-k.y));B&&d.isVML&&(k=p.isXAxis?{x:0,y:m?v:F,height:k.width,width:b.chartWidth}:{x:k.y-b.plotLeft-b.spacingBox.x,y:0,width:k.height,height:b.chartHeight});g[f]?g[f].animate(k):(g[f]=
d.clipRect(k),l&&a["zone-graph-"+f].clip(g[f]),u&&a["zone-area-"+f].clip(g[f]));z=c.value>w.max}),this.clips=g)},invertGroups:function(a){function b(){q(["group","markerGroup"],function(b){c[b]&&(c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,d;c.xAxis&&(d=E(c.chart,"resize",b),E(c,"destroy",d),b(a),c.invertGroups=b)},plotGroup:function(a,b,d,f,e){var c=this[a],g=!c;g&&(this[a]=c=this.chart.renderer.g(b).attr({zIndex:f||.1}).add(e),c.addClass("highcharts-series-"+this.index+
" highcharts-"+this.type+"-series highcharts-color-"+this.colorIndex+" "+(this.options.className||"")));c.attr({visibility:d})[g?"attr":"animate"](this.getPlotBox());return c},getPlotBox:function(){var a=this.chart,b=this.xAxis,d=this.yAxis;a.inverted&&(b=d,d=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:d?d.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,b=a.chart,f,e=a.options,g=!!a.animate&&b.renderer.isSVG&&D(e.animation).duration,h=a.visible?"inherit":"hidden",k=
e.zIndex,l=a.hasRendered,u=b.seriesGroup,x=b.inverted;f=a.plotGroup("group","series",h,k,u);a.markerGroup=a.plotGroup("markerGroup","markers",h,k,u);g&&a.animate(!0);f.inverted=a.isCartesian?x:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(x);!1===e.clip||a.sharedClipKey||l||f.clip(b.clipRect);g&&a.animate();l||(a.animationTimeout=d(function(){a.afterAnimate()},
g));a.isDirty=!1;a.hasRendered=!0},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,d=this.group,f=this.xAxis,e=this.yAxis;d&&(a.inverted&&d.attr({width:a.plotWidth,height:a.plotHeight}),d.animate({translateX:r(f&&f.left,a.plotLeft),translateY:r(e&&e.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdDimensions:1,kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,d=this.yAxis,f=this.chart.inverted;return this.searchKDTree({clientX:f?
c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:f?d.len-a.chartX+d.pos:a.chartY-d.pos},b)},buildKDTree:function(){function a(d,c,f){var h,e;if(e=d&&d.length)return h=b.kdAxisArray[c%f],d.sort(function(a,b){return a[h]-b[h]}),e=Math.floor(e/2),{point:d[e],left:a(d.slice(0,e),c+1,f),right:a(d.slice(e+1),c+1,f)}}this.buildingKdTree=!0;var b=this,f=b.kdDimensions;delete b.kdTree;d(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),f,f);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,
b){function d(a,b,g,k){var l=b.point,u=c.kdAxisArray[g%k],x,y,A=l;y=t(a[f])&&t(l[f])?Math.pow(a[f]-l[f],2):null;x=t(a[h])&&t(l[h])?Math.pow(a[h]-l[h],2):null;x=(y||0)+(x||0);l.dist=t(x)?Math.sqrt(x):Number.MAX_VALUE;l.distX=t(y)?Math.sqrt(y):Number.MAX_VALUE;u=a[u]-l[u];x=0>u?"left":"right";y=0>u?"right":"left";b[x]&&(x=d(a,b[x],g+1,k),A=x[e]<A[e]?x:l);b[y]&&Math.sqrt(u*u)<A[e]&&(a=d(a,b[y],g+1,k),A=a[e]<A[e]?a:A);return A}var c=this,f=this.kdAxisArray[0],h=this.kdAxisArray[1],e=b?"distX":"dist";
this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return d(a,this.kdTree,this.kdDimensions,this.kdDimensions)}})})(K);(function(a){function E(a,e,b,p,w){var k=a.chart.inverted;this.axis=a;this.isNegative=b;this.options=e;this.x=p;this.total=null;this.points={};this.stack=w;this.rightCliff=this.leftCliff=0;this.alignOptions={align:e.align||(k?b?"left":"right":"center"),verticalAlign:e.verticalAlign||(k?"middle":b?"bottom":"top"),y:t(e.y,k?4:b?14:-6),x:t(e.x,k?b?-6:6:0)};this.textAlign=
e.textAlign||(k?b?"right":"left":"center")}var D=a.Axis,H=a.Chart,I=a.correctFloat,v=a.defined,n=a.destroyObjectProperties,m=a.each,z=a.format,t=a.pick;a=a.Series;E.prototype={destroy:function(){n(this,this.axis)},render:function(a){var e=this.options,b=e.format,b=b?z(b,this):e.formatter.call(this);this.label?this.label.attr({text:b,visibility:"hidden"}):this.label=this.axis.chart.renderer.text(b,null,null,e.useHTML).css(e.style).attr({align:this.textAlign,rotation:e.rotation,visibility:"hidden"}).add(a)},
setOffset:function(a,e){var b=this.axis,p=b.chart,w=p.inverted,k=b.reversed,k=this.isNegative&&!k||!this.isNegative&&k,l=b.translate(b.usePercentage?100:this.total,0,0,0,1),b=b.translate(0),b=Math.abs(l-b);a=p.xAxis[0].translate(this.x)+a;var g=p.plotHeight,w={x:w?k?l:l-b:a,y:w?g-a-e:k?g-l-b:g-l,width:w?b:e,height:w?e:b};if(e=this.label)e.align(this.alignOptions,null,w),w=e.alignAttr,e[!1===this.options.crop||p.isInsidePlot(w.x,w.y)?"show":"hide"](!0)}};H.prototype.getStacks=function(){var a=this;
m(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});m(a.series,function(e){!e.options.stacking||!0!==e.visible&&!1!==a.options.chart.ignoreHiddenSeries||(e.stackKey=e.type+t(e.options.stack,""))})};D.prototype.buildStacks=function(){var a=this.series,e,b=t(this.options.reversedStacks,!0),p=a.length,w;if(!this.isXAxis){this.usePercentage=!1;for(w=p;w--;)a[b?w:p-w-1].setStackedPoints();for(w=p;w--;)e=a[b?w:p-w-1],e.setStackCliffs&&e.setStackCliffs();if(this.usePercentage)for(w=
0;w<p;w++)a[w].setPercentStacks()}};D.prototype.renderStackTotals=function(){var a=this.chart,e=a.renderer,b=this.stacks,p,w,k=this.stackTotalGroup;k||(this.stackTotalGroup=k=e.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());k.translate(a.plotLeft,a.plotTop);for(p in b)for(w in a=b[p],a)a[w].render(k)};D.prototype.resetStacks=function(){var a=this.stacks,e,b;if(!this.isXAxis)for(e in a)for(b in a[e])a[e][b].touched<this.stacksTouched?(a[e][b].destroy(),delete a[e][b]):(a[e][b].total=
null,a[e][b].cum=null)};D.prototype.cleanStacks=function(){var a,e,b;if(!this.isXAxis)for(e in this.oldStacks&&(a=this.stacks=this.oldStacks),a)for(b in a[e])a[e][b].cum=a[e][b].total};a.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var a=this.processedXData,e=this.processedYData,b=[],p=e.length,w=this.options,k=w.threshold,l=w.startFromThreshold?k:0,g=w.stack,w=w.stacking,m=this.stackKey,r="-"+m,u=this.negStacks,
f=this.yAxis,B=f.stacks,d=f.oldStacks,x,c,y,n,A,J,h;f.stacksTouched+=1;for(A=0;A<p;A++)J=a[A],h=e[A],x=this.getStackIndicator(x,J,this.index),n=x.key,y=(c=u&&h<(l?0:k))?r:m,B[y]||(B[y]={}),B[y][J]||(d[y]&&d[y][J]?(B[y][J]=d[y][J],B[y][J].total=null):B[y][J]=new E(f,f.options.stackLabels,c,J,g)),y=B[y][J],null!==h&&(y.points[n]=y.points[this.index]=[t(y.cum,l)],v(y.cum)||(y.base=n),y.touched=f.stacksTouched,0<x.index&&!1===this.singleStacks&&(y.points[n][0]=y.points[this.index+","+J+",0"][0])),"percent"===
w?(c=c?m:r,u&&B[c]&&B[c][J]?(c=B[c][J],y.total=c.total=Math.max(c.total,y.total)+Math.abs(h)||0):y.total=I(y.total+(Math.abs(h)||0))):y.total=I(y.total+(h||0)),y.cum=t(y.cum,l)+(h||0),null!==h&&(y.points[n].push(y.cum),b[A]=y.cum);"percent"===w&&(f.usePercentage=!0);this.stackedYData=b;f.oldStacks={}}};a.prototype.setPercentStacks=function(){var a=this,e=a.stackKey,b=a.yAxis.stacks,p=a.processedXData,w;m([e,"-"+e],function(e){for(var k=p.length,g,m;k--;)if(g=p[k],w=a.getStackIndicator(w,g,a.index,
e),g=(m=b[e]&&b[e][g])&&m.points[w.key])m=m.total?100/m.total:0,g[0]=I(g[0]*m),g[1]=I(g[1]*m),a.stackedYData[k]=g[1]})};a.prototype.getStackIndicator=function(a,e,b,p){!v(a)||a.x!==e||p&&a.key!==p?a={x:e,index:0,key:p}:a.index++;a.key=[b,e,a.index].join();return a}})(K);(function(a){var E=a.addEvent,D=a.animate,H=a.Axis,I=a.createElement,v=a.css,n=a.defined,m=a.each,z=a.erase,t=a.extend,q=a.fireEvent,e=a.inArray,b=a.isNumber,p=a.isObject,w=a.merge,k=a.pick,l=a.Point,g=a.Series,F=a.seriesTypes,r=a.setAnimation,
u=a.splat;t(a.Chart.prototype,{addSeries:function(a,b,d){var f,c=this;a&&(b=k(b,!0),q(c,"addSeries",{options:a},function(){f=c.initSeries(a);c.isDirtyLegend=!0;c.linkSeries();b&&c.redraw(d)}));return f},addAxis:function(a,b,d,e){var c=b?"xAxis":"yAxis",f=this.options;a=w(a,{index:this[c].length,isX:b});new H(this,a);f[c]=u(f[c]||{});f[c].push(a);k(d,!0)&&this.redraw(e)},showLoading:function(a){var b=this,d=b.options,f=b.loadingDiv,c=d.loading,e=function(){f&&v(f,{left:b.plotLeft+"px",top:b.plotTop+
"px",width:b.plotWidth+"px",height:b.plotHeight+"px"})};f||(b.loadingDiv=f=I("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=I("span",{className:"highcharts-loading-inner"},null,f),E(b,"redraw",e));f.className="highcharts-loading";b.loadingSpan.innerHTML=a||d.lang.loading;v(f,t(c.style,{zIndex:10}));v(b.loadingSpan,c.labelStyle);b.loadingShown||(v(f,{opacity:0,display:""}),D(f,{opacity:c.style.opacity||.5},{duration:c.showDuration||0}));b.loadingShown=
!0;e()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",D(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){v(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions".split(" "),update:function(a,g){var d,f={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},c=a.chart,l,r;if(c){w(!0,this.options.chart,c);"className"in c&&this.setClassName(c.className);if("inverted"in c||"polar"in c)this.propFromSeries(),l=!0;for(d in c)c.hasOwnProperty(d)&&(-1!==e("chart."+d,this.propsRequireUpdateSeries)&&(r=!0),-1!==e(d,this.propsRequireDirtyBox)&&(this.isDirtyBox=
!0));"style"in c&&this.renderer.setStyle(c.style)}for(d in a){if(this[d]&&"function"===typeof this[d].update)this[d].update(a[d],!1);else if("function"===typeof this[f[d]])this[f[d]](a[d]);"chart"!==d&&-1!==e(d,this.propsRequireUpdateSeries)&&(r=!0)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&w(!0,this.options.plotOptions,a.plotOptions);m(["xAxis","yAxis","series"],function(b){a[b]&&m(u(a[b]),function(a,d){(d=n(a.id)&&this.get(a.id)||this[b][d])&&d.coll===b&&d.update(a,!1)},this)},this);
l&&m(this.axes,function(a){a.update({},!1)});r&&m(this.series,function(a){a.update({},!1)});a.loading&&w(!0,this.options.loading,a.loading);d=c&&c.width;c=c&&c.height;b(d)&&d!==this.chartWidth||b(c)&&c!==this.chartHeight?this.setSize(d,c):k(g,!0)&&this.redraw()},setSubtitle:function(a){this.setTitle(void 0,a)}});t(l.prototype,{update:function(a,b,d,e){function c(){f.applyOptions(a);null===f.y&&l&&(f.graphic=l.destroy());p(a,!0)&&(l&&l.element&&a&&a.marker&&a.marker.symbol&&(f.graphic=l.destroy()),
a&&a.dataLabels&&f.dataLabel&&(f.dataLabel=f.dataLabel.destroy()));u=f.index;g.updateParallelArrays(f,u);x.data[u]=p(x.data[u],!0)?f.options:a;g.isDirty=g.isDirtyData=!0;!g.fixedBox&&g.hasCartesianSeries&&(h.isDirtyBox=!0);"point"===x.legendType&&(h.isDirtyLegend=!0);b&&h.redraw(d)}var f=this,g=f.series,l=f.graphic,u,h=g.chart,x=g.options;b=k(b,!0);!1===e?c():f.firePointEvent("update",{options:a},c)},remove:function(a,b){this.series.removePoint(e(this,this.series.data),a,b)}});t(g.prototype,{addPoint:function(a,
b,d,e){var c=this.options,f=this.data,g=this.chart,l=this.xAxis,l=l&&l.hasNames&&l.names,u=c.data,h,x,r=this.xData,p,m;b=k(b,!0);h={series:this};this.pointClass.prototype.applyOptions.apply(h,[a]);m=h.x;p=r.length;if(this.requireSorting&&m<r[p-1])for(x=!0;p&&r[p-1]>m;)p--;this.updateParallelArrays(h,"splice",p,0,0);this.updateParallelArrays(h,p);l&&h.name&&(l[m]=h.name);u.splice(p,0,a);x&&(this.data.splice(p,0,null),this.processData());"point"===c.legendType&&this.generatePoints();d&&(f[0]&&f[0].remove?
f[0].remove(!1):(f.shift(),this.updateParallelArrays(h,"shift"),u.shift()));this.isDirtyData=this.isDirty=!0;b&&g.redraw(e)},removePoint:function(a,b,d){var f=this,c=f.data,e=c[a],g=f.points,l=f.chart,u=function(){g&&g.length===c.length&&g.splice(a,1);c.splice(a,1);f.options.data.splice(a,1);f.updateParallelArrays(e||{series:f},"splice",a,1);e&&e.destroy();f.isDirty=!0;f.isDirtyData=!0;b&&l.redraw()};r(d,l);b=k(b,!0);e?e.firePointEvent("remove",null,u):u()},remove:function(a,b,d){function f(){c.destroy();
e.isDirtyLegend=e.isDirtyBox=!0;e.linkSeries();k(a,!0)&&e.redraw(b)}var c=this,e=c.chart;!1!==d?q(c,"remove",null,f):f()},update:function(a,b){var d=this,f=this.chart,c=this.userOptions,e=this.type,g=a.type||c.type||f.options.chart.type,l=F[e].prototype,u=["group","markerGroup","dataLabelsGroup"],h;if(g&&g!==e||void 0!==a.zIndex)u.length=0;m(u,function(a){u[a]=d[a];delete d[a]});a=w(c,{animation:!1,index:this.index,pointStart:this.xData[0]},{data:this.options.data},a);this.remove(!1,null,!1);for(h in l)this[h]=
void 0;t(this,F[g||e].prototype);m(u,function(a){d[a]=u[a]});this.init(f,a);f.linkSeries();k(b,!0)&&f.redraw(!1)}});t(H.prototype,{update:function(a,b){var d=this.chart;a=d.options[this.coll][this.options.index]=w(this.userOptions,a);this.destroy(!0);this.init(d,t(a,{events:void 0}));d.isDirtyBox=!0;k(b,!0)&&d.redraw()},remove:function(a){for(var b=this.chart,d=this.coll,f=this.series,c=f.length;c--;)f[c]&&f[c].remove(!1);z(b.axes,this);z(b[d],this);b.options[d].splice(this.options.index,1);m(b[d],
function(a,b){a.options.index=b});this.destroy();b.isDirtyBox=!0;k(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(K);(function(a){var E=a.color,D=a.each,H=a.map,I=a.pick,v=a.Series,n=a.seriesType;n("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(){var a=[],n=[],t=this.xAxis,q=this.yAxis,e=q.stacks[this.stackKey],b={},p=this.points,w=this.index,k=q.series,l=k.length,g,v=I(q.options.reversedStacks,
!0)?1:-1,r,u;if(this.options.stacking){for(r=0;r<p.length;r++)b[p[r].x]=p[r];for(u in e)null!==e[u].total&&n.push(u);n.sort(function(a,b){return a-b});g=H(k,function(){return this.visible});D(n,function(f,k){var d=0,u,c;if(b[f]&&!b[f].isNull)a.push(b[f]),D([-1,1],function(a){var d=1===a?"rightNull":"leftNull",x=0,p=e[n[k+a]];if(p)for(r=w;0<=r&&r<l;)u=p.points[r],u||(r===w?b[f][d]=!0:g[r]&&(c=e[f].points[r])&&(x-=c[1]-c[0])),r+=v;b[f][1===a?"rightCliff":"leftCliff"]=x});else{for(r=w;0<=r&&r<l;){if(u=
e[f].points[r]){d=u[1];break}r+=v}d=q.toPixels(d,!0);a.push({isNull:!0,plotX:t.toPixels(f,!0),plotY:d,yBottom:d})}})}return a},getGraphPath:function(a){var m=v.prototype.getGraphPath,n=this.options,q=n.stacking,e=this.yAxis,b,p,w=[],k=[],l=this.index,g,F=e.stacks[this.stackKey],r=n.threshold,u=e.getThreshold(n.threshold),f,n=n.connectNulls||"percent"===q,B=function(b,f,c){var d=a[b];b=q&&F[d.x].points[l];var p=d[c+"Null"]||0;c=d[c+"Cliff"]||0;var x,m,d=!0;c||p?(x=(p?b[0]:b[1])+c,m=b[0]+c,d=!!p):!q&&
a[f]&&a[f].isNull&&(x=m=r);void 0!==x&&(k.push({plotX:g,plotY:null===x?u:e.getThreshold(x),isNull:d}),w.push({plotX:g,plotY:null===m?u:e.getThreshold(m),doCurve:!1}))};a=a||this.points;q&&(a=this.getStackPoints());for(b=0;b<a.length;b++)if(p=a[b].isNull,g=I(a[b].rectPlotX,a[b].plotX),f=I(a[b].yBottom,u),!p||n)n||B(b,b-1,"left"),p&&!q&&n||(k.push(a[b]),w.push({x:b,plotX:g,plotY:f})),n||B(b,b+1,"right");b=m.call(this,k,!0,!0);w.reversed=!0;p=m.call(this,w,!0,!0);p.length&&(p[0]="L");p=b.concat(p);m=
m.call(this,k,!1,n);p.xMap=b.xMap;this.areaPath=p;return m},drawGraph:function(){this.areaPath=[];v.prototype.drawGraph.apply(this);var a=this,n=this.areaPath,t=this.options,q=[["area","highcharts-area",this.color,t.fillColor]];D(this.zones,function(e,b){q.push(["zone-area-"+b,"highcharts-area highcharts-zone-area-"+b+" "+e.className,e.color||a.color,e.fillColor||t.fillColor])});D(q,function(e){var b=e[0],p=a[b];p?(p.endX=n.xMap,p.animate({d:n})):(p=a[b]=a.chart.renderer.path(n).addClass(e[1]).attr({fill:I(e[3],
E(e[2]).setOpacity(I(t.fillOpacity,.75)).get()),zIndex:0}).add(a.group),p.isArea=!0);p.startX=n.xMap;p.shiftUnit=t.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var E=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,H,I){var v=H.plotX,n=H.plotY,m=a[I-1];I=a[I+1];var z,t,q,e;if(m&&!m.isNull&&!1!==m.doCurve&&I&&!I.isNull&&!1!==I.doCurve){a=m.plotY;q=I.plotX;I=I.plotY;var b=0;z=(1.5*v+m.plotX)/2.5;t=(1.5*n+a)/2.5;q=(1.5*v+q)/2.5;e=(1.5*n+I)/2.5;
q!==z&&(b=(e-t)*(q-v)/(q-z)+n-e);t+=b;e+=b;t>a&&t>n?(t=Math.max(a,n),e=2*n-t):t<a&&t<n&&(t=Math.min(a,n),e=2*n-t);e>I&&e>n?(e=Math.max(I,n),t=2*n-e):e<I&&e<n&&(e=Math.min(I,n),t=2*n-e);H.rightContX=q;H.rightContY=e}H=["C",E(m.rightContX,m.plotX),E(m.rightContY,m.plotY),E(z,v),E(t,n),v,n];m.rightContX=m.rightContY=null;return H}})})(K);(function(a){var E=a.seriesTypes.area.prototype,D=a.seriesType;D("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:E.getStackPoints,getGraphPath:E.getGraphPath,
setStackCliffs:E.setStackCliffs,drawGraph:E.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var E=a.animObject,D=a.color,H=a.each,I=a.extend,v=a.isNumber,n=a.merge,m=a.pick,z=a.Series,t=a.seriesType,q=a.svg;t("column","line",{borderRadius:0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1,shadow:!1},select:{color:"#cccccc",borderColor:"#000000",shadow:!1}},dataLabels:{align:null,verticalAlign:null,
y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){z.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&H(b.series,function(b){b.type===a.type&&(b.isDirty=!0)})},getColumnMetrics:function(){var a=this,b=a.options,p=a.xAxis,w=a.yAxis,k=p.reversed,l,g={},n=0;!1===b.grouping?n=1:H(a.chart.series,function(b){var d=
b.options,f=b.yAxis,c;b.type===a.type&&b.visible&&w.len===f.len&&w.pos===f.pos&&(d.stacking?(l=b.stackKey,void 0===g[l]&&(g[l]=n++),c=g[l]):!1!==d.grouping&&(c=n++),b.columnIndex=c)});var r=Math.min(Math.abs(p.transA)*(p.ordinalSlope||b.pointRange||p.closestPointRange||p.tickInterval||1),p.len),u=r*b.groupPadding,f=(r-2*u)/(n||1),b=Math.min(b.maxPointWidth||p.len,m(b.pointWidth,f*(1-2*b.pointPadding)));a.columnMetrics={width:b,offset:(f-b)/2+(u+((a.columnIndex||0)+(k?1:0))*f-r/2)*(k?-1:1)};return a.columnMetrics},
crispCol:function(a,b,p,m){var e=this.chart,l=this.borderWidth,g=-(l%2?.5:0),l=l%2?.5:1;e.inverted&&e.renderer.isVML&&(l+=1);p=Math.round(a+p)+g;a=Math.round(a)+g;m=Math.round(b+m)+l;g=.5>=Math.abs(b)&&.5<m;b=Math.round(b)+l;m-=b;g&&m&&(--b,m+=1);return{x:a,y:b,width:p-a,height:m}},translate:function(){var a=this,b=a.chart,p=a.options,w=a.dense=2>a.closestPointRange*a.xAxis.transA,w=a.borderWidth=m(p.borderWidth,w?0:1),k=a.yAxis,l=a.translatedThreshold=k.getThreshold(p.threshold),g=m(p.minPointLength,
5),n=a.getColumnMetrics(),r=n.width,u=a.barW=Math.max(r,1+2*w),f=a.pointXOffset=n.offset;b.inverted&&(l-=.5);p.pointPadding&&(u=Math.ceil(u));z.prototype.translate.apply(a);H(a.points,function(e){var d=m(e.yBottom,l),x=999+Math.abs(d),x=Math.min(Math.max(-x,e.plotY),k.len+x),c=e.plotX+f,p=u,w=Math.min(x,d),A,n=Math.max(x,d)-w;Math.abs(n)<g&&g&&(n=g,A=!k.reversed&&!e.negative||k.reversed&&e.negative,w=Math.abs(w-l)>g?d-g:l-(A?g:0));e.barX=c;e.pointWidth=r;e.tooltipPos=b.inverted?[k.len+k.pos-b.plotLeft-
x,a.xAxis.len-c-p/2,n]:[c+p/2,x+k.pos-b.plotTop,n];e.shapeType="rect";e.shapeArgs=a.crispCol.apply(a,e.isNull?[e.plotX,k.len/2,0,0]:[c,w,p,n])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(a,b){var e=this.options,m,k=this.pointAttrToOptions||{};m=k.stroke||"borderColor";var l=k["stroke-width"]||"borderWidth",g=a&&a.color||this.color,n=a[m]||e[m]||this.color||
g,r=a[l]||e[l]||this[l]||0,k=e.dashStyle;a&&this.zones.length&&(g=(g=a.getZone())&&g.color||a.options.color||this.color);b&&(a=e.states[b],b=a.brightness,g=a.color||void 0!==b&&D(g).brighten(a.brightness).get()||g,n=a[m]||n,r=a[l]||r,k=a.dashStyle||k);m={fill:g,stroke:n,"stroke-width":r};e.borderRadius&&(m.r=e.borderRadius);k&&(m.dashstyle=k);return m},drawPoints:function(){var a=this,b=this.chart,p=a.options,m=b.renderer,k=p.animationLimit||250,l;H(a.points,function(e){var g=e.graphic;if(v(e.plotY)&&
null!==e.y){l=e.shapeArgs;if(g)g[b.pointCount<k?"animate":"attr"](n(l));else e.graphic=g=m[e.shapeType](l).attr({"class":e.getClassName()}).add(e.group||a.group);g.attr(a.pointAttribs(e,e.selected&&"select")).shadow(p.shadow,null,p.stacking&&!p.borderRadius)}else g&&(e.graphic=g.destroy())})},animate:function(a){var b=this,e=this.yAxis,m=b.options,k=this.chart.inverted,l={};q&&(a?(l.scaleY=.001,a=Math.min(e.pos+e.len,Math.max(e.pos,e.toPixels(m.threshold))),k?l.translateX=a-e.len:l.translateY=a,b.group.attr(l)):
(l[k?"translateX":"translateY"]=e.pos,b.group.animate(l,I(E(b.options.animation),{step:function(a,e){b.group.attr({scaleY:Math.max(.001,e.pos)})}})),b.animate=null))},remove:function(){var a=this,b=a.chart;b.hasRendered&&H(b.series,function(b){b.type===a.type&&(b.isDirty=!0)});z.prototype.remove.apply(a,arguments)}})})(K);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(K);(function(a){var E=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,kdDimensions:2,drawGraph:function(){this.options.lineWidth&&E.prototype.drawGraph.call(this)}})})(K);(function(a){var E=a.pick,D=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,I=this.chart,v=2*(a.slicedOffset||0),n=I.plotWidth-2*v,I=I.plotHeight-
2*v,m=a.center,m=[E(m[0],"50%"),E(m[1],"50%"),a.size||"100%",a.innerSize||0],z=Math.min(n,I),t,q;for(t=0;4>t;++t)q=m[t],a=2>t||2===t&&/%$/.test(q),m[t]=D(q,[n,I,z,m[2]][t])+(a?v:0);m[3]>m[2]&&(m[3]=m[2]);return m}}})(K);(function(a){var E=a.addEvent,D=a.defined,H=a.each,I=a.extend,v=a.inArray,n=a.noop,m=a.pick,z=a.Point,t=a.Series,q=a.seriesType,e=a.setAnimation;q("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function(){return null===this.y?
void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1,shadow:!1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var b=this,e=b.points,k=b.startAngleRad;a||(H(e,function(a){var e=
a.graphic,l=a.shapeArgs;e&&(e.attr({r:a.startR||b.center[3]/2,start:k,end:k}),e.animate({r:l.r,start:l.start,end:l.end},b.options.animation))}),b.animate=null)},updateTotals:function(){var a,e=0,m=this.points,k=m.length,l,g=this.options.ignoreHiddenPoint;for(a=0;a<k;a++)l=m[a],0>l.y&&(l.y=null),e+=g&&!l.visible?0:l.y;this.total=e;for(a=0;a<k;a++)l=m[a],l.percentage=0<e&&(l.visible||!g)?l.y/e*100:0,l.total=e},generatePoints:function(){t.prototype.generatePoints.call(this);this.updateTotals()},translate:function(a){this.generatePoints();
var b=0,e=this.options,k=e.slicedOffset,l=k+(e.borderWidth||0),g,n,r,u=e.startAngle||0,f=this.startAngleRad=Math.PI/180*(u-90),u=(this.endAngleRad=Math.PI/180*(m(e.endAngle,u+360)-90))-f,q=this.points,d=e.dataLabels.distance,e=e.ignoreHiddenPoint,x,c=q.length,y;a||(this.center=a=this.getCenter());this.getX=function(b,c){r=Math.asin(Math.min((b-a[1])/(a[2]/2+d),1));return a[0]+(c?-1:1)*Math.cos(r)*(a[2]/2+d)};for(x=0;x<c;x++){y=q[x];g=f+b*u;if(!e||y.visible)b+=y.percentage/100;n=f+b*u;y.shapeType=
"arc";y.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*g)/1E3,end:Math.round(1E3*n)/1E3};r=(n+g)/2;r>1.5*Math.PI?r-=2*Math.PI:r<-Math.PI/2&&(r+=2*Math.PI);y.slicedTranslation={translateX:Math.round(Math.cos(r)*k),translateY:Math.round(Math.sin(r)*k)};g=Math.cos(r)*a[2]/2;n=Math.sin(r)*a[2]/2;y.tooltipPos=[a[0]+.7*g,a[1]+.7*n];y.half=r<-Math.PI/2||r>Math.PI/2?1:0;y.angle=r;l=Math.min(l,d/5);y.labelPos=[a[0]+g+Math.cos(r)*d,a[1]+n+Math.sin(r)*d,a[0]+g+Math.cos(r)*l,a[1]+n+Math.sin(r)*
l,a[0]+g,a[1]+n,0>d?"center":y.half?"right":"left",r]}},drawGraph:null,drawPoints:function(){var a=this,e=a.chart.renderer,m,k,l,g,n=a.options.shadow;n&&!a.shadowGroup&&(a.shadowGroup=e.g("shadow").add(a.group));H(a.points,function(b){if(null!==b.y){k=b.graphic;g=b.shapeArgs;m=b.sliced?b.slicedTranslation:{};var u=b.shadowGroup;n&&!u&&(u=b.shadowGroup=e.g("shadow").add(a.shadowGroup));u&&u.attr(m);l=a.pointAttribs(b,b.selected&&"select");k?k.setRadialReference(a.center).attr(l).animate(I(g,m)):(b.graphic=
k=e[b.shapeType](g).addClass(b.getClassName()).setRadialReference(a.center).attr(m).add(a.group),b.visible||k.attr({visibility:"hidden"}),k.attr(l).attr({"stroke-linejoin":"round"}).shadow(n,u))}})},searchPoint:n,sortByAngle:function(a,e){a.sort(function(a,b){return void 0!==a.angle&&(b.angle-a.angle)*e})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:a.CenteredSeriesMixin.getCenter,getSymbol:n},{init:function(){z.prototype.init.apply(this,arguments);var a=this,e;a.name=m(a.name,"Slice");
e=function(b){a.slice("select"===b.type)};E(a,"select",e);E(a,"unselect",e);return a},setVisible:function(a,e){var b=this,k=b.series,l=k.chart,g=k.options.ignoreHiddenPoint;e=m(e,g);a!==b.visible&&(b.visible=b.options.visible=a=void 0===a?!b.visible:a,k.options.data[v(b,k.data)]=b.options,H(["graphic","dataLabel","connector","shadowGroup"],function(e){if(b[e])b[e][a?"show":"hide"](!0)}),b.legendItem&&l.legend.colorizeItem(b,a),a||"hover"!==b.state||b.setState(""),g&&(k.isDirty=!0),e&&l.redraw())},
slice:function(a,p,n){var b=this.series;e(n,b.chart);m(p,!0);this.sliced=this.options.sliced=a=D(a)?a:!this.sliced;b.options.data[v(this,b.data)]=this.options;a=a?this.slicedTranslation:{translateX:0,translateY:0};this.graphic.animate(a);this.shadowGroup&&this.shadowGroup.animate(a)},haloPath:function(a){var b=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(b.x,b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r,start:b.start,end:b.end})}})})(K);(function(a){var E=
a.addEvent,D=a.arrayMax,H=a.defined,I=a.each,v=a.extend,n=a.format,m=a.map,z=a.merge,t=a.noop,q=a.pick,e=a.relativeLength,b=a.Series,p=a.seriesTypes,w=a.stableSort;a.distribute=function(a,b){function e(a,b){return a.target-b.target}var k,l=!0,u=a,f=[],p;p=0;for(k=a.length;k--;)p+=a[k].size;if(p>b){w(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(p=k=0;p<=b;)p+=a[k].size,k++;f=a.splice(k-1,a.length)}w(a,e);for(a=m(a,function(a){return{size:a.size,targets:[a.target]}});l;){for(k=a.length;k--;)l=
a[k],p=(Math.min.apply(0,l.targets)+Math.max.apply(0,l.targets))/2,l.pos=Math.min(Math.max(0,p-l.size/2),b-l.size);k=a.length;for(l=!1;k--;)0<k&&a[k-1].pos+a[k-1].size>a[k].pos&&(a[k-1].size+=a[k].size,a[k-1].targets=a[k-1].targets.concat(a[k].targets),a[k-1].pos+a[k-1].size>b&&(a[k-1].pos=b-a[k-1].size),a.splice(k,1),l=!0)}k=0;I(a,function(a){var b=0;I(a.targets,function(){u[k].pos=a.pos+b;b+=u[k].size;k++})});u.push.apply(u,f);w(u,e)};b.prototype.drawDataLabels=function(){var a=this,b=a.options,
e=b.dataLabels,p=a.points,r,u,f=a.hasRendered||0,m,d,x=q(e.defer,!0),c=a.chart.renderer;if(e.enabled||a._hasPointLabels)a.dlProcessOptions&&a.dlProcessOptions(e),d=a.plotGroup("dataLabelsGroup","data-labels",x&&!f?"hidden":"visible",e.zIndex||6),x&&(d.attr({opacity:+f}),f||E(a,"afterAnimate",function(){a.visible&&d.show(!0);d[b.animation?"animate":"attr"]({opacity:1},{duration:200})})),u=e,I(p,function(f){var g,k=f.dataLabel,l,h,x,p=f.connector,y=!k,w;r=f.dlOptions||f.options&&f.options.dataLabels;
if(g=q(r&&r.enabled,u.enabled)&&null!==f.y)for(h in e=z(u,r),l=f.getLabelConfig(),m=e.format?n(e.format,l):e.formatter.call(l,e),w=e.style,x=e.rotation,w.color=q(e.color,w.color,a.color,"#000000"),"contrast"===w.color&&(w.color=e.inside||0>e.distance||b.stacking?c.getContrast(f.color||a.color):"#000000"),b.cursor&&(w.cursor=b.cursor),l={fill:e.backgroundColor,stroke:e.borderColor,"stroke-width":e.borderWidth,r:e.borderRadius||0,rotation:x,padding:e.padding,zIndex:1},l)void 0===l[h]&&delete l[h];!k||
g&&H(m)?g&&H(m)&&(k?l.text=m:(k=f.dataLabel=c[x?"text":"label"](m,0,-9999,e.shape,null,null,e.useHTML,null,"data-label"),k.addClass("highcharts-data-label-color-"+f.colorIndex+" "+(e.className||"")+(e.useHTML?"highcharts-tracker":""))),k.attr(l),k.css(w).shadow(e.shadow),k.added||k.add(d),a.alignDataLabel(f,k,e,null,y)):(f.dataLabel=k.destroy(),p&&(f.connector=p.destroy()))})};b.prototype.alignDataLabel=function(a,b,e,p,r){var g=this.chart,f=g.inverted,k=q(a.plotX,-9999),d=q(a.plotY,-9999),l=b.getBBox(),
c,y=e.rotation,m=e.align,A=this.visible&&(a.series.forceDL||g.isInsidePlot(k,Math.round(d),f)||p&&g.isInsidePlot(k,f?p.x+1:p.y+p.height-1,f)),n="justify"===q(e.overflow,"justify");A&&(c=e.style.fontSize,c=g.renderer.fontMetrics(c,b).b,p=v({x:f?g.plotWidth-d:k,y:Math.round(f?g.plotHeight-k:d),width:0,height:0},p),v(e,{width:l.width,height:l.height}),y?(n=!1,f=g.renderer.rotCorr(c,y),f={x:p.x+e.x+p.width/2+f.x,y:p.y+e.y+{top:0,middle:.5,bottom:1}[e.verticalAlign]*p.height},b[r?"attr":"animate"](f).attr({align:m}),
k=(y+720)%360,k=180<k&&360>k,"left"===m?f.y-=k?l.height:0:"center"===m?(f.x-=l.width/2,f.y-=l.height/2):"right"===m&&(f.x-=l.width,f.y-=k?0:l.height)):(b.align(e,null,p),f=b.alignAttr),n?this.justifyDataLabel(b,e,f,l,p,r):q(e.crop,!0)&&(A=g.isInsidePlot(f.x,f.y)&&g.isInsidePlot(f.x+l.width,f.y+l.height)),e.shape&&!y&&b.attr({anchorX:a.plotX,anchorY:a.plotY}));A||(b.attr({y:-9999}),b.placed=!1)};b.prototype.justifyDataLabel=function(a,b,e,p,r,u){var f=this.chart,g=b.align,d=b.verticalAlign,k,c,l=a.box?
0:a.padding||0;k=e.x+l;0>k&&("right"===g?b.align="left":b.x=-k,c=!0);k=e.x+p.width-l;k>f.plotWidth&&("left"===g?b.align="right":b.x=f.plotWidth-k,c=!0);k=e.y+l;0>k&&("bottom"===d?b.verticalAlign="top":b.y=-k,c=!0);k=e.y+p.height-l;k>f.plotHeight&&("top"===d?b.verticalAlign="bottom":b.y=f.plotHeight-k,c=!0);c&&(a.placed=!u,a.align(b,null,r))};p.pie&&(p.pie.prototype.drawDataLabels=function(){var e=this,l=e.data,g,p=e.chart,r=e.options.dataLabels,u=q(r.connectorPadding,10),f=q(r.connectorWidth,1),n=
p.plotWidth,d=p.plotHeight,x,c=r.distance,y=e.center,w=y[2]/2,A=y[1],t=0<c,h,v,z,E,N=[[],[]],H,C,M,R,O=[0,0,0,0];e.visible&&(r.enabled||e._hasPointLabels)&&(b.prototype.drawDataLabels.apply(e),I(l,function(a){a.dataLabel&&a.visible&&(N[a.half].push(a),a.dataLabel._pos=null)}),I(N,function(b,f){var k,l,x=b.length,q,t,B;if(x)for(e.sortByAngle(b,f-.5),0<c&&(k=Math.max(0,A-w-c),l=Math.min(A+w+c,p.plotHeight),q=m(b,function(a){if(a.dataLabel)return B=a.dataLabel.getBBox().height||21,{target:a.labelPos[1]-
k+B/2,size:B,rank:a.y}}),a.distribute(q,l+B-k)),R=0;R<x;R++)g=b[R],z=g.labelPos,h=g.dataLabel,M=!1===g.visible?"hidden":"inherit",t=z[1],q?void 0===q[R].pos?M="hidden":(E=q[R].size,C=k+q[R].pos):C=t,H=r.justify?y[0]+(f?-1:1)*(w+c):e.getX(C<k+2||C>l-2?t:C,f),h._attr={visibility:M,align:z[6]},h._pos={x:H+r.x+({left:u,right:-u}[z[6]]||0),y:C+r.y-10},z.x=H,z.y=C,null===e.options.size&&(v=h.width,H-v<u?O[3]=Math.max(Math.round(v-H+u),O[3]):H+v>n-u&&(O[1]=Math.max(Math.round(H+v-n+u),O[1])),0>C-E/2?O[0]=
Math.max(Math.round(-C+E/2),O[0]):C+E/2>d&&(O[2]=Math.max(Math.round(C+E/2-d),O[2])))}),0===D(O)||this.verifyDataLabelOverflow(O))&&(this.placeDataLabels(),t&&f&&I(this.points,function(a){var b;x=a.connector;if((h=a.dataLabel)&&h._pos&&a.visible){M=h._attr.visibility;if(b=!x)a.connector=x=p.renderer.path().addClass("highcharts-data-label-connector highcharts-color-"+a.colorIndex).add(e.dataLabelsGroup),x.attr({"stroke-width":f,stroke:r.connectorColor||a.color||"#666666"});x[b?"attr":"animate"]({d:e.connectorPath(a.labelPos)});
x.attr("visibility",M)}else x&&(a.connector=x.destroy())}))},p.pie.prototype.connectorPath=function(a){var b=a.x,e=a.y;return q(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),e,"C",b,e,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),e,"L",a[2],a[3],"L",a[4],a[5]]},p.pie.prototype.placeDataLabels=function(){I(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999}))})},
p.pie.prototype.alignDataLabel=t,p.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,g=this.options,k=g.center,r=g.minSize||80,u,f;null!==k[0]?u=Math.max(b[2]-Math.max(a[1],a[3]),r):(u=Math.max(b[2]-a[1]-a[3],r),b[0]+=(a[3]-a[1])/2);null!==k[1]?u=Math.max(Math.min(u,b[2]-Math.max(a[0],a[2])),r):(u=Math.max(Math.min(u,b[2]-a[0]-a[2]),r),b[1]+=(a[0]-a[2])/2);u<b[2]?(b[2]=u,b[3]=Math.min(e(g.innerSize||0,u),u),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):f=!0;return f});
p.column&&(p.column.prototype.alignDataLabel=function(a,e,g,p,r){var k=this.chart.inverted,f=a.series,l=a.dlBox||a.shapeArgs,d=q(a.below,a.plotY>q(this.translatedThreshold,f.yAxis.len)),x=q(g.inside,!!this.options.stacking);l&&(p=z(l),0>p.y&&(p.height+=p.y,p.y=0),l=p.y+p.height-f.yAxis.len,0<l&&(p.height-=l),k&&(p={x:f.yAxis.len-p.y-p.height,y:f.xAxis.len-p.x-p.width,width:p.height,height:p.width}),x||(k?(p.x+=d?0:p.width,p.width=0):(p.y+=d?p.height:0,p.height=0)));g.align=q(g.align,!k||x?"center":
d?"right":"left");g.verticalAlign=q(g.verticalAlign,k||x?"middle":d?"top":"bottom");b.prototype.alignDataLabel.call(this,a,e,g,p,r)})})(K);(function(a){var E=a.Chart,D=a.each,H=a.pick,I=a.addEvent;E.prototype.callbacks.push(function(a){function n(){var m=[];D(a.series,function(a){var n=a.options.dataLabels,q=a.dataLabelCollections||["dataLabel"];(n.enabled||a._hasPointLabels)&&!n.allowOverlap&&a.visible&&D(q,function(e){D(a.points,function(a){a[e]&&(a[e].labelrank=H(a.labelrank,a.shapeArgs&&a.shapeArgs.height),
m.push(a[e]))})})});a.hideOverlappingLabels(m)}n();I(a,"redraw",n)});E.prototype.hideOverlappingLabels=function(a){var n=a.length,m,v,t,q,e,b,p,w,k,l=function(a,b,e,k,f,l,d,p){return!(f>a+e||f+d<a||l>b+k||l+p<b)};for(v=0;v<n;v++)if(m=a[v])m.oldOpacity=m.opacity,m.newOpacity=1;a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(v=0;v<n;v++)for(t=a[v],m=v+1;m<n;++m)if(q=a[m],t&&q&&t.placed&&q.placed&&0!==t.newOpacity&&0!==q.newOpacity&&(e=t.alignAttr,b=q.alignAttr,p=t.parentGroup,w=q.parentGroup,
k=2*(t.box?0:t.padding),e=l(e.x+p.translateX,e.y+p.translateY,t.width-k,t.height-k,b.x+w.translateX,b.y+w.translateY,q.width-k,q.height-k)))(t.labelrank<q.labelrank?t:q).newOpacity=0;D(a,function(a){var b,e;a&&(e=a.newOpacity,a.oldOpacity!==e&&a.placed&&(e?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=e,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(K);(function(a){var E=a.addEvent,D=a.Chart,H=a.createElement,I=a.css,v=a.defaultOptions,n=a.defaultPlotOptions,m=a.each,z=
a.extend,t=a.fireEvent,q=a.hasTouch,e=a.inArray,b=a.isObject,p=a.Legend,w=a.merge,k=a.pick,l=a.Point,g=a.Series,F=a.seriesTypes,r=a.svg;a=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,e=b.pointer,d=function(a){for(var d=a.target,f;d&&!f;)f=d.point,d=d.parentNode;if(void 0!==f&&f!==b.hoverPoint)f.onMouseOver(a)};m(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(m(a.trackerGroups,
function(b){if(a[b]){a[b].addClass("highcharts-tracker").on("mouseover",d).on("mouseout",function(a){e.onTrackerMouseOut(a)});if(q)a[b].on("touchstart",d);a.options.cursor&&a[b].css(I).css({cursor:a.options.cursor})}}),a._hasTracking=!0)},drawTrackerGraph:function(){var a=this,b=a.options,e=b.trackByArea,d=[].concat(e?a.areaPath:a.graphPath),g=d.length,c=a.chart,k=c.pointer,l=c.renderer,p=c.options.tooltip.snap,n=a.tracker,h,w=function(){if(c.hoverSeries!==a)a.onMouseOver()},t="rgba(192,192,192,"+
(r?.0001:.002)+")";if(g&&!e)for(h=g+1;h--;)"M"===d[h]&&d.splice(h+1,0,d[h+1]-p,d[h+2],"L"),(h&&"M"===d[h]||h===g)&&d.splice(h,0,"L",d[h-2]+p,d[h-1]);n?n.attr({d:d}):a.graph&&(a.tracker=l.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:t,fill:e?t:"none","stroke-width":a.graph.strokeWidth()+(e?0:2*p),zIndex:2}).add(a.group),m([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",w).on("mouseout",function(a){k.onTrackerMouseOut(a)});
b.cursor&&a.css({cursor:b.cursor});if(q)a.on("touchstart",w)}))}};F.column&&(F.column.prototype.drawTracker=a.drawTrackerPoint);F.pie&&(F.pie.prototype.drawTracker=a.drawTrackerPoint);F.scatter&&(F.scatter.prototype.drawTracker=a.drawTrackerPoint);z(p.prototype,{setItemEvents:function(a,b,e){var d=this,f=d.chart,c="highcharts-legend-"+(a.series?"point":"series")+"-active";(e?b:a.legendGroup).on("mouseover",function(){a.setState("hover");f.seriesGroup.addClass(c);b.css(d.options.itemHoverStyle)}).on("mouseout",
function(){b.css(a.visible?d.itemStyle:d.itemHiddenStyle);f.seriesGroup.removeClass(c);a.setState()}).on("click",function(b){var d=function(){a.setVisible&&a.setVisible()};b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,d):t(a,"legendItemClick",b,d)})},createCheckboxForItem:function(a){a.checkbox=H("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);E(a.checkbox,"click",function(b){t(a.series||a,"checkboxClick",
{checked:b.target.checked,item:a},function(){a.select()})})}});v.legend.itemStyle.cursor="pointer";z(D.prototype,{showResetZoom:function(){var a=this,b=v.lang,e=a.options.chart.resetZoomButton,d=e.theme,g=d.states,c="chart"===e.relativeTo?null:"plotBox";this.resetZoomButton=a.renderer.button(b.resetZoom,null,null,function(){a.zoomOut()},d,g&&g.hover).attr({align:e.position.align,title:b.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(e.position,!1,c)},zoomOut:function(){var a=this;
t(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var f,e=this.pointer,d=!1,g;!a||a.resetSelection?m(this.axes,function(a){f=a.zoom()}):m(a.xAxis.concat(a.yAxis),function(a){var b=a.axis;e[b.isXAxis?"zoomX":"zoomY"]&&(f=b.zoom(a.min,a.max),b.displayBtn&&(d=!0))});g=this.resetZoomButton;d&&!g?this.showResetZoom():!d&&b(g)&&(this.resetZoomButton=g.destroy());f&&this.redraw(k(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,b){var f=this,d=f.hoverPoints,
e;d&&m(d,function(a){a.setState()});m("xy"===b?[1,0]:[1],function(b){b=f[b?"xAxis":"yAxis"][0];var d=b.horiz,c=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",g=f[d],k=(b.pointRange||0)/2,h=b.getExtremes(),l=b.toValue(g-c,!0)+k,k=b.toValue(g+b.len-c,!0)-k,p=k<l,g=p?k:l,l=p?l:k,k=Math.min(h.dataMin,h.min)-g,h=l-Math.max(h.dataMax,h.max);b.series.length&&0>k&&0>h&&(b.setExtremes(g,l,!1,!1,{trigger:"pan"}),e=!0);f[d]=c});e&&f.redraw(!1);I(f.container,{cursor:"move"})}});z(l.prototype,{select:function(a,
b){var f=this,d=f.series,g=d.chart;a=k(a,!f.selected);f.firePointEvent(a?"select":"unselect",{accumulate:b},function(){f.selected=f.options.selected=a;d.options.data[e(f,d.data)]=f.options;f.setState(a&&"select");b||m(g.getSelectedPoints(),function(a){a.selected&&a!==f&&(a.selected=a.options.selected=!1,d.options.data[e(a,d.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a,b){var f=this.series,d=f.chart,e=d.tooltip,c=d.hoverPoint;if(this.series){if(!b){if(c&&
c!==this)c.onMouseOut();if(d.hoverSeries!==f)f.onMouseOver();d.hoverPoint=this}!e||e.shared&&!f.noSharedTooltip?e||this.setState("hover"):(this.setState("hover"),e.refresh(this,a));this.firePointEvent("mouseOver")}},onMouseOut:function(){var a=this.series.chart,b=a.hoverPoints;this.firePointEvent("mouseOut");b&&-1!==e(this,b)||(this.setState(),a.hoverPoint=null)},importEvents:function(){if(!this.hasImportedEvents){var a=w(this.series.options.point,this.options).events,b;this.events=a;for(b in a)E(this,
b,a[b]);this.hasImportedEvents=!0}},setState:function(a,b){var f=Math.floor(this.plotX),d=this.plotY,e=this.series,c=e.options.states[a]||{},g=n[e.type].marker&&e.options.marker,l=g&&!1===g.enabled,p=g&&g.states&&g.states[a]||{},r=!1===p.enabled,h=e.stateMarkerGraphic,u=this.marker||{},m=e.chart,q=e.halo,w,t=g&&e.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===c.enabled||a&&(r||l&&!1===p.enabled)||a&&u.states&&u.states[a]&&!1===u.states[a].enabled)){t&&(w=e.markerAttribs(this,
a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.attr(e.pointAttribs(this,a)),w&&this.graphic.animate(w,k(m.options.chart.animation,p.animation,g.animation)),h&&h.hide();else{if(a&&p){g=u.symbol||e.symbol;h&&h.currentSymbol!==g&&(h=h.destroy());if(h)h[b?"animate":"attr"]({x:w.x,y:w.y});else g&&(e.stateMarkerGraphic=h=m.renderer.symbol(g,w.x,w.y,w.width,w.height).add(e.markerGroup),h.currentSymbol=
g);h&&h.attr(e.pointAttribs(this,a))}h&&(h[a&&m.isInsidePlot(f,d,m.inverted)?"show":"hide"](),h.element.point=this)}(f=c.halo)&&f.size?(q||(e.halo=q=m.renderer.path().add(t?e.markerGroup:e.group)),q[b?"animate":"attr"]({d:this.haloPath(f.size)}),q.attr({"class":"highcharts-halo highcharts-color-"+k(this.colorIndex,e.colorIndex)}),q.point=this,q.attr(z({fill:this.color||e.color,"fill-opacity":f.opacity,zIndex:-1},f.attributes))):q&&q.point&&q.point.haloPath&&q.animate({d:q.point.haloPath(0)});this.state=
a}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});z(g.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&t(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,e=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&t(this,"mouseOut");!e||a.stickyTracking||
e.shared&&!this.noSharedTooltip||e.hide();this.setState()},setState:function(a){var b=this,e=b.options,d=b.graph,g=e.states,c=e.lineWidth,e=0;a=a||"";if(b.state!==a&&(m([b.group,b.markerGroup],function(d){d&&(b.state&&d.removeClass("highcharts-series-"+b.state),a&&d.addClass("highcharts-series-"+a))}),b.state=a,!g[a]||!1!==g[a].enabled)&&(a&&(c=g[a].lineWidth||c+(g[a].lineWidthPlus||0)),d&&!d.dashstyle))for(g={"stroke-width":c},d.attr(g);b["zone-graph-"+e];)b["zone-graph-"+e].attr(g),e+=1},setVisible:function(a,
b){var f=this,d=f.chart,e=f.legendItem,c,g=d.options.chart.ignoreHiddenSeries,k=f.visible;c=(f.visible=a=f.options.visible=f.userOptions.visible=void 0===a?!k:a)?"show":"hide";m(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(f[a])f[a][c]()});if(d.hoverSeries===f||(d.hoverPoint&&d.hoverPoint.series)===f)f.onMouseOut();e&&d.legend.colorizeItem(f,a);f.isDirty=!0;f.options.stacking&&m(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});m(f.linkedSeries,function(b){b.setVisible(a,
!1)});g&&(d.isDirtyBox=!0);!1!==b&&d.redraw();t(f,c)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);t(this,a?"select":"unselect")},drawTracker:a.drawTrackerGraph})})(K);(function(a){var E=a.Chart,D=a.each,H=a.inArray,I=a.isObject,v=a.pick,n=a.splat;E.prototype.setResponsive=function(a){var m=this.options.responsive;m&&m.rules&&D(m.rules,function(m){this.matchResponsiveRule(m,
a)},this)};E.prototype.matchResponsiveRule=function(m,n){var t=this.respRules,q=m.condition,e;e=q.callback||function(){return this.chartWidth<=v(q.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=v(q.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=v(q.minWidth,0)&&this.chartHeight>=v(q.minHeight,0)};void 0===m._id&&(m._id=a.uniqueKey());e=e.call(this);!t[m._id]&&e?m.chartOptions&&(t[m._id]=this.currentOptions(m.chartOptions),this.update(m.chartOptions,n)):t[m._id]&&!e&&(this.update(t[m._id],n),delete t[m._id])};
E.prototype.currentOptions=function(a){function m(a,e,b,p){var w,k;for(w in a)if(!p&&-1<H(w,["series","xAxis","yAxis"]))for(a[w]=n(a[w]),b[w]=[],k=0;k<a[w].length;k++)b[w][k]={},m(a[w][k],e[w][k],b[w][k],p+1);else I(a[w])?(b[w]={},m(a[w],e[w]||{},b[w],p+1)):b[w]=e[w]||null}var t={};m(a,this.options,t,0);return t}})(K);(function(a){var E=a.addEvent,D=a.Axis,H=a.Chart,I=a.css,v=a.dateFormat,n=a.defined,m=a.each,z=a.extend,t=a.noop,q=a.Series,e=a.timeUnits;a=a.wrap;a(q.prototype,"init",function(a){var b;
a.apply(this,Array.prototype.slice.call(arguments,1));(b=this.xAxis)&&b.options.ordinal&&E(this,"updatedData",function(){delete b.ordinalIndex})});a(D.prototype,"getTimeTicks",function(a,p,m,k,l,g,q,r){var b=0,f,w,d={},x,c,y,t=[],A=-Number.MAX_VALUE,J=this.options.tickPixelInterval;if(!this.options.ordinal&&!this.options.breaks||!g||3>g.length||void 0===m)return a.call(this,p,m,k,l);c=g.length;for(f=0;f<c;f++){y=f&&g[f-1]>k;g[f]<m&&(b=f);if(f===c-1||g[f+1]-g[f]>5*q||y){if(g[f]>A){for(w=a.call(this,
p,g[b],g[f],l);w.length&&w[0]<=A;)w.shift();w.length&&(A=w[w.length-1]);t=t.concat(w)}b=f+1}if(y)break}a=w.info;if(r&&a.unitRange<=e.hour){f=t.length-1;for(b=1;b<f;b++)v("%d",t[b])!==v("%d",t[b-1])&&(d[t[b]]="day",x=!0);x&&(d[t[0]]="day");a.higherRanks=d}t.info=a;if(r&&n(J)){r=a=t.length;f=[];var h;for(x=[];r--;)b=this.translate(t[r]),h&&(x[r]=h-b),f[r]=h=b;x.sort();x=x[Math.floor(x.length/2)];x<.6*J&&(x=null);r=t[a-1]>k?a-1:a;for(h=void 0;r--;)b=f[r],k=Math.abs(h-b),h&&k<.8*J&&(null===x||k<.8*x)?
(d[t[r]]&&!d[t[r+1]]?(k=r+1,h=b):k=r,t.splice(k,1)):h=b}return t});z(D.prototype,{beforeSetTickPositions:function(){var a,e=[],n=!1,k,l=this.getExtremes(),g=l.min,q=l.max,r,u=this.isXAxis&&!!this.options.breaks,l=this.options.ordinal,f=this.chart.options.chart.ignoreHiddenSeries;if(l||u){m(this.series,function(b,d){if(!(f&&!1===b.visible||!1===b.takeOrdinalPosition&&!u)&&(e=e.concat(b.processedXData),a=e.length,e.sort(function(a,b){return a-b}),a))for(d=a-1;d--;)e[d]===e[d+1]&&e.splice(d,1)});a=e.length;
if(2<a){k=e[1]-e[0];for(r=a-1;r--&&!n;)e[r+1]-e[r]!==k&&(n=!0);!this.options.keepOrdinalPadding&&(e[0]-g>k||q-e[e.length-1]>k)&&(n=!0)}n?(this.ordinalPositions=e,k=this.ordinal2lin(Math.max(g,e[0]),!0),r=Math.max(this.ordinal2lin(Math.min(q,e[e.length-1]),!0),1),this.ordinalSlope=q=(q-g)/(r-k),this.ordinalOffset=g-k*q):this.ordinalPositions=this.ordinalSlope=this.ordinalOffset=void 0}this.isOrdinal=l&&n;this.groupIntervalFactor=null},val2lin:function(a,e){var b=this.ordinalPositions;if(b){var k=b.length,
l,g;for(l=k;l--;)if(b[l]===a){g=l;break}for(l=k-1;l--;)if(a>b[l]||0===l){a=(a-b[l])/(b[l+1]-b[l]);g=l+a;break}e=e?g:this.ordinalSlope*(g||0)+this.ordinalOffset}else e=a;return e},lin2val:function(a,e){var b=this.ordinalPositions;if(b){var k=this.ordinalSlope,l=this.ordinalOffset,g=b.length-1,p;if(e)0>a?a=b[0]:a>g?a=b[g]:(g=Math.floor(a),p=a-g);else for(;g--;)if(e=k*g+l,a>=e){k=k*(g+1)+l;p=(a-e)/(k-e);break}return void 0!==p&&void 0!==b[g]?b[g]+(p?p*(b[g+1]-b[g]):0):a}return a},getExtendedPositions:function(){var a=
this.chart,e=this.series[0].currentDataGrouping,n=this.ordinalIndex,k=e?e.count+e.unitName:"raw",l=this.getExtremes(),g,q;n||(n=this.ordinalIndex={});n[k]||(g={series:[],chart:a,getExtremes:function(){return{min:l.dataMin,max:l.dataMax}},options:{ordinal:!0},val2lin:D.prototype.val2lin},m(this.series,function(b){q={xAxis:g,xData:b.xData,chart:a,destroyGroupedData:t};q.options={dataGrouping:e?{enabled:!0,forced:!0,approximation:"open",units:[[e.unitName,[e.count]]]}:{enabled:!1}};b.processData.apply(q);
g.series.push(q)}),this.beforeSetTickPositions.apply(g),n[k]=g.ordinalPositions);return n[k]},getGroupIntervalFactor:function(a,e,m){var b;m=m.processedXData;var l=m.length,g=[];b=this.groupIntervalFactor;if(!b){for(b=0;b<l-1;b++)g[b]=m[b+1]-m[b];g.sort(function(a,b){return a-b});g=g[Math.floor(l/2)];a=Math.max(a,m[0]);e=Math.min(e,m[l-1]);this.groupIntervalFactor=b=l*g/(e-a)}return b},postProcessTickInterval:function(a){var b=this.ordinalSlope;return b?this.options.breaks?this.closestPointRange:
a/(b/this.closestPointRange):a}});D.prototype.ordinal2lin=D.prototype.val2lin;a(H.prototype,"pan",function(a,e){var b=this.xAxis[0],k=e.chartX,l=!1;if(b.options.ordinal&&b.series.length){var g=this.mouseDownX,p=b.getExtremes(),r=p.dataMax,n=p.min,f=p.max,q=this.hoverPoints,d=b.closestPointRange,g=(g-k)/(b.translationSlope*(b.ordinalSlope||d)),x={ordinalPositions:b.getExtendedPositions()},d=b.lin2val,c=b.val2lin,y;x.ordinalPositions?1<Math.abs(g)&&(q&&m(q,function(a){a.setState()}),0>g?(q=x,y=b.ordinalPositions?
b:x):(q=b.ordinalPositions?b:x,y=x),x=y.ordinalPositions,r>x[x.length-1]&&x.push(r),this.fixedRange=f-n,g=b.toFixedRange(null,null,d.apply(q,[c.apply(q,[n,!0])+g,!0]),d.apply(y,[c.apply(y,[f,!0])+g,!0])),g.min>=Math.min(p.dataMin,n)&&g.max<=Math.max(r,f)&&b.setExtremes(g.min,g.max,!0,!1,{trigger:"pan"}),this.mouseDownX=k,I(this.container,{cursor:"move"})):l=!0}else l=!0;l&&a.apply(this,Array.prototype.slice.call(arguments,1))});q.prototype.gappedPath=function(){var a=this.options.gapSize,e=this.points.slice(),
m=e.length-1;if(a&&0<m)for(;m--;)e[m+1].x-e[m].x>this.closestPointRange*a&&e.splice(m+1,0,{isNull:!0});return this.getGraphPath(e)}})(K);(function(a){function E(){return Array.prototype.slice.call(arguments,1)}function D(a){a.apply(this);this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,H(this.pointArrayMap,["y"]))}var H=a.pick,I=a.wrap,v=a.each,n=a.extend,m=a.isArray,z=a.fireEvent,t=a.Axis,q=a.Series;n(t.prototype,{isInBreak:function(a,b){var e=a.repeat||Infinity,m=a.from,k=a.to-a.from;
b=b>=m?(b-m)%e:e-(m-b)%e;return a.inclusive?b<=k:b<k&&0!==b},isInAnyBreak:function(a,b){var e=this.options.breaks,m=e&&e.length,k,l,g;if(m){for(;m--;)this.isInBreak(e[m],a)&&(k=!0,l||(l=H(e[m].showPoints,this.isXAxis?!1:!0)));g=k&&b?k&&!l:k}return g}});I(t.prototype,"setTickPositions",function(a){a.apply(this,Array.prototype.slice.call(arguments,1));if(this.options.breaks){var b=this.tickPositions,e=this.tickPositions.info,m=[],k;for(k=0;k<b.length;k++)this.isInAnyBreak(b[k])||m.push(b[k]);this.tickPositions=
m;this.tickPositions.info=e}});I(t.prototype,"init",function(a,b,p){var e=this;p.breaks&&p.breaks.length&&(p.ordinal=!1);a.call(this,b,p);a=this.options.breaks;e.isBroken=m(a)&&!!a.length;e.isBroken&&(e.val2lin=function(a){var b=a,g,k;for(k=0;k<e.breakArray.length;k++)if(g=e.breakArray[k],g.to<=a)b-=g.len;else if(g.from>=a)break;else if(e.isInBreak(g,a)){b-=a-g.from;break}return b},e.lin2val=function(a){var b,g;for(g=0;g<e.breakArray.length&&!(b=e.breakArray[g],b.from>=a);g++)b.to<a?a+=b.len:e.isInBreak(b,
a)&&(a+=b.len);return a},e.setExtremes=function(a,b,e,m,r){for(;this.isInAnyBreak(a);)a-=this.closestPointRange;for(;this.isInAnyBreak(b);)b-=this.closestPointRange;t.prototype.setExtremes.call(this,a,b,e,m,r)},e.setAxisTranslation=function(a){t.prototype.setAxisTranslation.call(this,a);var b=e.options.breaks;a=[];var g=[],k=0,m,p,f=e.userMin||e.min,n=e.userMax||e.max,d,x;for(x in b)p=b[x],m=p.repeat||Infinity,e.isInBreak(p,f)&&(f+=p.to%m-f%m),e.isInBreak(p,n)&&(n-=n%m-p.from%m);for(x in b){p=b[x];
d=p.from;for(m=p.repeat||Infinity;d-m>f;)d-=m;for(;d<f;)d+=m;for(;d<n;d+=m)a.push({value:d,move:"in"}),a.push({value:d+(p.to-p.from),move:"out",size:p.breakSize})}a.sort(function(a,b){return a.value===b.value?("in"===a.move?0:1)-("in"===b.move?0:1):a.value-b.value});b=0;d=f;for(x in a)p=a[x],b+="in"===p.move?1:-1,1===b&&"in"===p.move&&(d=p.value),0===b&&(g.push({from:d,to:p.value,len:p.value-d-(p.size||0)}),k+=p.value-d-(p.size||0));e.breakArray=g;z(e,"afterBreaks");e.transA*=(n-e.min)/(n-f-k);e.min=
f;e.max=n})});I(q.prototype,"generatePoints",function(a){a.apply(this,E(arguments));var b=this.xAxis,e=this.yAxis,m=this.points,k,l=m.length,g=this.options.connectNulls,n;if(b&&e&&(b.options.breaks||e.options.breaks))for(;l--;)k=m[l],n=null===k.y&&!1===g,n||!b.isInAnyBreak(k.x,!0)&&!e.isInAnyBreak(k.y,!0)||(m.splice(l,1),this.data[l]&&this.data[l].destroyElements())});a.Series.prototype.drawBreaks=function(a,b){var e=this,m=e.points,k,l,g,n;a&&v(b,function(b){k=a.breakArray||[];l=a.isXAxis?a.min:
H(e.options.threshold,a.min);v(m,function(e){n=H(e["stack"+b.toUpperCase()],e[b]);v(k,function(b){g=!1;if(l<b.from&&n>b.to||l>b.from&&n<b.from)g="pointBreak";else if(l<b.from&&n>b.from&&n<b.to||l>b.from&&n>b.to&&n<b.from)g="pointInBreak";g&&z(a,g,{point:e,brk:b})})})})};I(a.seriesTypes.column.prototype,"drawPoints",D);I(a.Series.prototype,"drawPoints",D)})(K);(function(a){var E=a.arrayMax,D=a.arrayMin,H=a.Axis,I=a.defaultPlotOptions,v=a.defined,n=a.each,m=a.extend,z=a.format,t=a.isNumber,q=a.merge,
e=a.pick,b=a.Point,p=a.Tooltip,w=a.wrap,k=a.Series.prototype,l=k.processData,g=k.generatePoints,F=k.destroy,r={approximation:"average",groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y",
"%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},u={line:{},spline:{},area:{},areaspline:{},column:{approximation:"sum",groupPixelWidth:10},arearange:{approximation:"range"},areasplinerange:{approximation:"range"},columnrange:{approximation:"range",groupPixelWidth:10},candlestick:{approximation:"ohlc",groupPixelWidth:10},ohlc:{approximation:"ohlc",groupPixelWidth:5}},f=a.defaultDataGroupingUnits=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,
10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",[1,3,6]],["year",null]],B={sum:function(a){var b=a.length,d;if(!b&&a.hasNulls)d=null;else if(b)for(d=0;b--;)d+=a[b];return d},average:function(a){var b=a.length;a=B.sum(a);t(a)&&b&&(a/=b);return a},open:function(a){return a.length?a[0]:a.hasNulls?null:void 0},high:function(a){return a.length?E(a):a.hasNulls?null:void 0},low:function(a){return a.length?D(a):a.hasNulls?null:void 0},close:function(a){return a.length?
a[a.length-1]:a.hasNulls?null:void 0},ohlc:function(a,b,c,e){a=B.open(a);b=B.high(b);c=B.low(c);e=B.close(e);if(t(a)||t(b)||t(c)||t(e))return[a,b,c,e]},range:function(a,b){a=B.low(a);b=B.high(b);if(t(a)||t(b))return[a,b]}};k.groupData=function(a,b,c,e){var d=this.data,f=this.options.data,g=[],h=[],k=[],l=a.length,m,p,n=!!b,r=[[],[],[],[]];e="function"===typeof e?e:B[e];var q=this.pointArrayMap,y=q&&q.length,u,x=0;for(u=p=0;u<=l&&!(a[u]>=c[0]);u++);for(u;u<=l;u++){for(;(void 0!==c[x+1]&&a[u]>=c[x+
1]||u===l)&&(m=c[x],this.dataGroupInfo={start:p,length:r[0].length},p=e.apply(this,r),void 0!==p&&(g.push(m),h.push(p),k.push(this.dataGroupInfo)),p=u,r[0]=[],r[1]=[],r[2]=[],r[3]=[],x+=1,u!==l););if(u===l)break;if(q){m=this.cropStart+u;m=d&&d[m]||this.pointClass.prototype.applyOptions.apply({series:this},[f[m]]);var w,v;for(w=0;w<y;w++)v=m[q[w]],t(v)?r[w].push(v):null===v&&(r[w].hasNulls=!0)}else m=n?b[u]:null,t(m)?r[0].push(m):null===m&&(r[0].hasNulls=!0)}return[g,h,k]};k.processData=function(){var a=
this.chart,b=this.options.dataGrouping,c=!1!==this.allowDG&&b&&e(b.enabled,a.options.isStock),g=this.visible||!a.options.chart.ignoreHiddenSeries,m;this.forceCrop=c;this.groupPixelWidth=null;this.hasProcessed=!0;if(!1!==l.apply(this,arguments)&&c&&g){this.destroyGroupedData();var p=this.processedXData,r=this.processedYData,h=a.plotSizeX,a=this.xAxis,n=a.options.ordinal,u=this.groupPixelWidth=a.getGroupPixelWidth&&a.getGroupPixelWidth();if(u){this.isDirty=m=!0;g=a.getExtremes();c=g.min;g=g.max;n=n&&
a.getGroupIntervalFactor(c,g,this)||1;h=u*(g-c)/h*n;u=a.getTimeTicks(a.normalizeTimeTickInterval(h,b.units||f),Math.min(c,p[0]),Math.max(g,p[p.length-1]),a.options.startOfWeek,p,this.closestPointRange);p=k.groupData.apply(this,[p,r,u,b.approximation]);r=p[0];n=p[1];if(b.smoothed){b=r.length-1;for(r[b]=Math.min(r[b],g);b--&&0<b;)r[b]+=h/2;r[0]=Math.max(r[0],c)}this.currentDataGrouping=u.info;this.closestPointRange=u.info.totalRange;this.groupMap=p[2];v(r[0])&&r[0]<a.dataMin&&(a.min===a.dataMin&&(a.min=
r[0]),a.dataMin=r[0]);this.processedXData=r;this.processedYData=n}else this.currentDataGrouping=this.groupMap=null;this.hasGroupedData=m}};k.destroyGroupedData=function(){var a=this.groupedData;n(a||[],function(b,d){b&&(a[d]=b.destroy?b.destroy():null)});this.groupedData=null};k.generatePoints=function(){g.apply(this);this.destroyGroupedData();this.groupedData=this.hasGroupedData?this.points:null};w(b.prototype,"update",function(b){this.dataGroup?a.error(24):b.apply(this,[].slice.call(arguments,1))});
w(p.prototype,"tooltipFooterHeaderFormatter",function(b,e,c){var d=e.series,f=d.tooltipOptions,g=d.options.dataGrouping,k=f.xDateFormat,h,l=d.xAxis,p=a.dateFormat;return l&&"datetime"===l.options.type&&g&&t(e.key)?(b=d.currentDataGrouping,g=g.dateTimeLabelFormats,b?(l=g[b.unitName],1===b.count?k=l[0]:(k=l[1],h=l[2])):!k&&g&&(k=this.getXDateFormat(e,f,l)),k=p(k,e.key),h&&(k+=p(h,e.key+b.totalRange-1)),z(f[(c?"footer":"header")+"Format"],{point:m(e.point,{key:k}),series:d})):b.call(this,e,c)});k.destroy=
function(){for(var a=this.groupedData||[],b=a.length;b--;)a[b]&&a[b].destroy();F.apply(this)};w(k,"setOptions",function(a,b){a=a.call(this,b);var d=this.type,e=this.chart.options.plotOptions,f=I[d].dataGrouping;u[d]&&(f||(f=q(r,u[d])),a.dataGrouping=q(f,e.series&&e.series.dataGrouping,e[d].dataGrouping,b.dataGrouping));this.chart.options.isStock&&(this.requireSorting=!0);return a});w(H.prototype,"setScale",function(a){a.call(this);n(this.series,function(a){a.hasProcessed=!1})});H.prototype.getGroupPixelWidth=
function(){var a=this.series,b=a.length,c,e=0,f=!1,g;for(c=b;c--;)(g=a[c].options.dataGrouping)&&(e=Math.max(e,g.groupPixelWidth));for(c=b;c--;)(g=a[c].options.dataGrouping)&&a[c].hasProcessed&&(b=(a[c].processedXData||a[c].data).length,a[c].groupPixelWidth||b>this.chart.plotSizeX/e||b&&g.forced)&&(f=!0);return f?e:0};H.prototype.setDataGrouping=function(a,b){var c;b=e(b,!0);a||(a={forced:!1,units:null});if(this instanceof H)for(c=this.series.length;c--;)this.series[c].update({dataGrouping:a},!1);
else n(this.chart.options.series,function(b){b.dataGrouping=a},!1);b&&this.chart.redraw()}})(K);(function(a){var E=a.each,D=a.Point,H=a.seriesType,I=a.seriesTypes;H("ohlc","column",{lineWidth:1,tooltip:{pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cb\x3e {series.name}\x3c/b\x3e\x3cbr/\x3eOpen: {point.open}\x3cbr/\x3eHigh: {point.high}\x3cbr/\x3eLow: {point.low}\x3cbr/\x3eClose: {point.close}\x3cbr/\x3e'},threshold:null,states:{hover:{lineWidth:3}}},{pointArrayMap:["open",
"high","low","close"],toYData:function(a){return[a.open,a.high,a.low,a.close]},pointValKey:"high",pointAttrToOptions:{stroke:"color","stroke-width":"lineWidth"},pointAttribs:function(a,n){n=I.column.prototype.pointAttribs.call(this,a,n);var m=this.options;delete n.fill;!a.options.color&&m.upColor&&a.open<a.close&&(n.stroke=m.upColor);return n},translate:function(){var a=this,n=a.yAxis,m=!!a.modifyValue,z=["plotOpen","yBottom","plotClose"];I.column.prototype.translate.apply(a);E(a.points,function(t){E([t.open,
t.low,t.close],function(q,e){null!==q&&(m&&(q=a.modifyValue(q)),t[z[e]]=n.toPixels(q,!0))})})},drawPoints:function(){var a=this,n=a.chart;E(a.points,function(m){var v,t,q,e,b=m.graphic,p,w=!b;void 0!==m.plotY&&(b||(m.graphic=b=n.renderer.path().add(a.group)),b.attr(a.pointAttribs(m,m.selected&&"select")),t=b.strokeWidth()%2/2,p=Math.round(m.plotX)-t,q=Math.round(m.shapeArgs.width/2),e=["M",p,Math.round(m.yBottom),"L",p,Math.round(m.plotY)],null!==m.open&&(v=Math.round(m.plotOpen)+t,e.push("M",p,v,
"L",p-q,v)),null!==m.close&&(v=Math.round(m.plotClose)+t,e.push("M",p,v,"L",p+q,v)),b[w?"attr":"animate"]({d:e}).addClass(m.getClassName(),!0))})},animate:null},{getClassName:function(){return D.prototype.getClassName.call(this)+(this.open<this.close?" highcharts-point-up":" highcharts-point-down")}})})(K);(function(a){var E=a.defaultPlotOptions,D=a.each,H=a.merge,I=a.seriesType,v=a.seriesTypes;I("candlestick","ohlc",H(E.column,{states:{hover:{lineWidth:2}},tooltip:E.ohlc.tooltip,threshold:null,lineColor:"#000000",
lineWidth:1,upColor:"#ffffff"}),{pointAttribs:function(a,m){var n=v.column.prototype.pointAttribs.call(this,a,m),t=this.options,q=a.open<a.close,e=t.lineColor||this.color;n["stroke-width"]=t.lineWidth;n.fill=a.options.color||(q?t.upColor||this.color:this.color);n.stroke=a.lineColor||(q?t.upLineColor||e:e);m&&(a=t.states[m],n.fill=a.color||n.fill,n.stroke=a.lineColor||n.stroke,n["stroke-width"]=a.lineWidth||n["stroke-width"]);return n},drawPoints:function(){var a=this,m=a.chart;D(a.points,function(n){var t=
n.graphic,q,e,b,p,w,k,l,g=!t;void 0!==n.plotY&&(t||(n.graphic=t=m.renderer.path().add(a.group)),t.attr(a.pointAttribs(n,n.selected&&"select")).shadow(a.options.shadow),w=t.strokeWidth()%2/2,k=Math.round(n.plotX)-w,q=n.plotOpen,e=n.plotClose,b=Math.min(q,e),q=Math.max(q,e),l=Math.round(n.shapeArgs.width/2),e=Math.round(b)!==Math.round(n.plotY),p=q!==n.yBottom,b=Math.round(b)+w,q=Math.round(q)+w,w=[],w.push("M",k-l,q,"L",k-l,b,"L",k+l,b,"L",k+l,q,"Z","M",k,b,"L",k,e?Math.round(n.plotY):b,"M",k,q,"L",
k,p?Math.round(n.yBottom):q),t[g?"attr":"animate"]({d:w}).addClass(n.getClassName(),!0))})}})})(K);(function(a){var E=a.addEvent,D=a.each,H=a.merge,I=a.noop,v=a.Renderer,n=a.seriesType,m=a.seriesTypes,z=a.TrackerMixin,t=a.VMLRenderer,q=a.SVGRenderer.prototype.symbols;n("flags","column",{pointRange:0,shape:"flag",stackDistance:12,textAlign:"center",tooltip:{pointFormat:"{point.text}\x3cbr/\x3e"},threshold:null,y:-30,fillColor:"#ffffff",lineWidth:1,states:{hover:{lineColor:"#000000",fillColor:"#ccd6eb"}},
style:{fontSize:"11px",fontWeight:"bold"}},{sorted:!1,noSharedTooltip:!0,allowDG:!1,takeOrdinalPosition:!1,trackerGroups:["markerGroup"],forceCrop:!0,init:a.Series.prototype.init,pointAttribs:function(a,b){var e=this.options,m=a&&a.color||this.color,k=e.lineColor,l=a&&a.lineWidth;a=a&&a.fillColor||e.fillColor;b&&(a=e.states[b].fillColor,k=e.states[b].lineColor,l=e.states[b].lineWidth);return{fill:a||m,stroke:k||m,"stroke-width":l||e.lineWidth||0}},translate:function(){m.column.prototype.translate.apply(this);
var a=this.options,b=this.chart,p=this.points,n=p.length-1,k,l,g=a.onSeries;k=g&&b.get(g);var a=a.onKey||"y",g=k&&k.options.step,q=k&&k.points,r=q&&q.length,u=this.xAxis,f=u.getExtremes(),t=0,d,x,c;if(k&&k.visible&&r)for(t=(k.pointXOffset||0)+(k.barW||0)/2,k=k.currentDataGrouping,x=q[r-1].x+(k?k.totalRange:0),p.sort(function(a,b){return a.x-b.x}),a="plot"+a[0].toUpperCase()+a.substr(1);r--&&p[n]&&!(k=p[n],d=q[r],d.x<=k.x&&void 0!==d[a]&&(k.x<=x&&(k.plotY=d[a],d.x<k.x&&!g&&(c=q[r+1])&&void 0!==c[a]&&
(k.plotY+=(k.x-d.x)/(c.x-d.x)*(c[a]-d[a]))),n--,r++,0>n)););D(p,function(a,c){var d;void 0===a.plotY&&(a.x>=f.min&&a.x<=f.max?a.plotY=b.chartHeight-u.bottom-(u.opposite?u.height:0)+u.offset-b.plotTop:a.shapeArgs={});a.plotX+=t;(l=p[c-1])&&l.plotX===a.plotX&&(void 0===l.stackIndex&&(l.stackIndex=0),d=l.stackIndex+1);a.stackIndex=d})},drawPoints:function(){var a=this.points,b=this.chart,m=b.renderer,n,k,l=this.options,g=l.y,q,r,u,f,t,d,x,c=this.yAxis;for(r=a.length;r--;)u=a[r],x=u.plotX>this.xAxis.len,
n=u.plotX,f=u.stackIndex,q=u.options.shape||l.shape,k=u.plotY,void 0!==k&&(k=u.plotY+g-(void 0!==f&&f*l.stackDistance)),t=f?void 0:u.plotX,d=f?void 0:u.plotY,f=u.graphic,void 0!==k&&0<=n&&!x?(f||(f=u.graphic=m.label("",null,null,q,null,null,l.useHTML).attr(this.pointAttribs(u)).css(H(l.style,u.style)).attr({align:"flag"===q?"left":"center",width:l.width,height:l.height,"text-align":l.textAlign}).addClass("highcharts-point").add(this.markerGroup),f.shadow(l.shadow)),0<n&&(n-=f.strokeWidth()%2),f.attr({text:u.options.title||
l.title||"A",x:n,y:k,anchorX:t,anchorY:d}),u.tooltipPos=b.inverted?[c.len+c.pos-b.plotLeft-k,this.xAxis.len-n]:[n,k]):f&&(u.graphic=f.destroy())},drawTracker:function(){var a=this.points;z.drawTrackerPoint.apply(this);D(a,function(b){var e=b.graphic;e&&E(e.element,"mouseover",function(){0<b.stackIndex&&!b.raised&&(b._y=e.y,e.attr({y:b._y-8}),b.raised=!0);D(a,function(a){a!==b&&a.raised&&a.graphic&&(a.graphic.attr({y:a._y}),a.raised=!1)})})})},animate:I,buildKDTree:I,setClip:I});q.flag=function(a,
b,m,n,k){return["M",k&&k.anchorX||a,k&&k.anchorY||b,"L",a,b+n,a,b,a+m,b,a+m,b+n,a,b+n,"Z"]};D(["circle","square"],function(a){q[a+"pin"]=function(b,e,m,k,l){var g=l&&l.anchorX;l=l&&l.anchorY;"circle"===a&&k>m&&(b-=Math.round((k-m)/2),m=k);b=q[a](b,e,m,k);g&&l&&b.push("M",g,e>l?e:e+k,"L",g,l);return b}});v===t&&D(["flag","circlepin","squarepin"],function(a){t.prototype.symbols[a]=q[a]})})(K);(function(a){function E(a,b,e){this.init(a,b,e)}var D=a.addEvent,H=a.Axis,I=a.correctFloat,v=a.defaultOptions,
n=a.defined,m=a.destroyObjectProperties,z=a.doc,t=a.each,q=a.fireEvent,e=a.hasTouch,b=a.isTouchDevice,p=a.merge,w=a.pick,k=a.removeEvent,l=a.wrap,g,F={height:b?20:14,barBorderRadius:0,buttonBorderRadius:0,liveRedraw:a.svg&&!b,margin:10,minWidth:6,step:.2,zIndex:3,barBackgroundColor:"#cccccc",barBorderWidth:1,barBorderColor:"#cccccc",buttonArrowColor:"#333333",buttonBackgroundColor:"#e6e6e6",buttonBorderColor:"#cccccc",buttonBorderWidth:1,rifleColor:"#333333",trackBackgroundColor:"#f2f2f2",trackBorderColor:"#f2f2f2",
trackBorderWidth:1};v.scrollbar=p(!0,F,v.scrollbar);a.swapXY=g=function(a,b){var e=a.length,g;if(b)for(b=0;b<e;b+=3)g=a[b+1],a[b+1]=a[b+2],a[b+2]=g;return a};E.prototype={init:function(a,b,e){this.scrollbarButtons=[];this.renderer=a;this.userOptions=b;this.options=p(F,b);this.chart=e;this.size=w(this.options.size,this.options.height);b.enabled&&(this.render(),this.initEvents(),this.addEvents())},render:function(){var a=this.renderer,b=this.options,e=this.size,k;this.group=k=a.g("scrollbar").attr({zIndex:b.zIndex,
translateY:-99999}).add();this.track=a.rect().addClass("highcharts-scrollbar-track").attr({x:0,r:b.trackBorderRadius||0,height:e,width:e}).add(k);this.track.attr({fill:b.trackBackgroundColor,stroke:b.trackBorderColor,"stroke-width":b.trackBorderWidth});this.trackBorderWidth=this.track.strokeWidth();this.track.attr({y:-this.trackBorderWidth%2/2});this.scrollbarGroup=a.g().add(k);this.scrollbar=a.rect().addClass("highcharts-scrollbar-thumb").attr({height:e,width:e,r:b.barBorderRadius||0}).add(this.scrollbarGroup);
this.scrollbarRifles=a.path(g(["M",-3,e/4,"L",-3,2*e/3,"M",0,e/4,"L",0,2*e/3,"M",3,e/4,"L",3,2*e/3],b.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup);this.scrollbar.attr({fill:b.barBackgroundColor,stroke:b.barBorderColor,"stroke-width":b.barBorderWidth});this.scrollbarRifles.attr({stroke:b.rifleColor,"stroke-width":1});this.scrollbarStrokeWidth=this.scrollbar.strokeWidth();this.scrollbarGroup.translate(-this.scrollbarStrokeWidth%2/2,-this.scrollbarStrokeWidth%2/2);this.drawScrollbarButton(0);
this.drawScrollbarButton(1)},position:function(a,b,e,g){var d=this.options.vertical,f=0,c=this.rendered?"animate":"attr";this.x=a;this.y=b+this.trackBorderWidth;this.width=e;this.xOffset=this.height=g;this.yOffset=f;d?(this.width=this.yOffset=e=f=this.size,this.xOffset=b=0,this.barWidth=g-2*e,this.x=a+=this.options.margin):(this.height=this.xOffset=g=b=this.size,this.barWidth=e-2*g,this.y+=this.options.margin);this.group[c]({translateX:a,translateY:this.y});this.track[c]({width:e,height:g});this.scrollbarButtons[1][c]({translateX:d?
0:e-b,translateY:d?g-f:0})},drawScrollbarButton:function(a){var b=this.renderer,e=this.scrollbarButtons,k=this.options,d=this.size,l;l=b.g().add(this.group);e.push(l);l=b.rect().addClass("highcharts-scrollbar-button").add(l);l.attr({stroke:k.buttonBorderColor,"stroke-width":k.buttonBorderWidth,fill:k.buttonBackgroundColor});l.attr(l.crisp({x:-.5,y:-.5,width:d+1,height:d+1,r:k.buttonBorderRadius},l.strokeWidth()));l=b.path(g(["M",d/2+(a?-1:1),d/2-3,"L",d/2+(a?-1:1),d/2+3,"L",d/2+(a?2:-2),d/2],k.vertical)).addClass("highcharts-scrollbar-arrow").add(e[a]);
l.attr({fill:k.buttonArrowColor})},setRange:function(a,b){var e=this.options,g=e.vertical,d=e.minWidth,k=this.barWidth,c,l,m=this.rendered&&!this.hasDragged?"animate":"attr";n(k)&&(a=Math.max(a,0),c=k*a,this.calculatedWidth=l=I(k*Math.min(b,1)-c),l<d&&(c=(k-d+l)*a,l=d),d=Math.floor(c+this.xOffset+this.yOffset),k=l/2-.5,this.from=a,this.to=b,g?(this.scrollbarGroup[m]({translateY:d}),this.scrollbar[m]({height:l}),this.scrollbarRifles[m]({translateY:k}),this.scrollbarTop=d,this.scrollbarLeft=0):(this.scrollbarGroup[m]({translateX:d}),
this.scrollbar[m]({width:l}),this.scrollbarRifles[m]({translateX:k}),this.scrollbarLeft=d,this.scrollbarTop=0),12>=l?this.scrollbarRifles.hide():this.scrollbarRifles.show(!0),!1===e.showFull&&(0>=a&&1<=b?this.group.hide():this.group.show()),this.rendered=!0)},initEvents:function(){var a=this;a.mouseMoveHandler=function(b){var e=a.chart.pointer.normalize(b),g=a.options.vertical?"chartY":"chartX",d=a.initPositions;!a.grabbedCenter||b.touches&&0===b.touches[0][g]||(e=a.cursorToScrollbarPosition(e)[g],
g=a[g],g=e-g,a.hasDragged=!0,a.updatePosition(d[0]+g,d[1]+g),a.hasDragged&&q(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b}))};a.mouseUpHandler=function(b){a.hasDragged&&q(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b});a.grabbedCenter=a.hasDragged=a.chartX=a.chartY=null};a.mouseDownHandler=function(b){b=a.chart.pointer.normalize(b);b=a.cursorToScrollbarPosition(b);a.chartX=b.chartX;a.chartY=b.chartY;a.initPositions=[a.from,a.to];a.grabbedCenter=
!0};a.buttonToMinClick=function(b){var e=I(a.to-a.from)*a.options.step;a.updatePosition(I(a.from-e),I(a.to-e));q(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.buttonToMaxClick=function(b){var e=(a.to-a.from)*a.options.step;a.updatePosition(a.from+e,a.to+e);q(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.trackClick=function(b){var e=a.chart.pointer.normalize(b),g=a.to-a.from,d=a.y+a.scrollbarTop,k=a.x+a.scrollbarLeft;a.options.vertical&&e.chartY>d||!a.options.vertical&&
e.chartX>k?a.updatePosition(a.from+g,a.to+g):a.updatePosition(a.from-g,a.to-g);q(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})}},cursorToScrollbarPosition:function(a){var b=this.options,b=b.minWidth>this.calculatedWidth?b.minWidth:0;return{chartX:(a.chartX-this.x-this.xOffset)/(this.barWidth-b),chartY:(a.chartY-this.y-this.yOffset)/(this.barWidth-b)}},updatePosition:function(a,b){1<b&&(a=I(1-I(b-a)),b=1);0>a&&(b=I(b-a),a=0);this.from=a;this.to=b},update:function(a){this.destroy();
this.init(this.chart.renderer,p(!0,this.options,a),this.chart)},addEvents:function(){var a=this.options.inverted?[1,0]:[0,1],b=this.scrollbarButtons,f=this.scrollbarGroup.element,g=this.mouseDownHandler,d=this.mouseMoveHandler,k=this.mouseUpHandler,a=[[b[a[0]].element,"click",this.buttonToMinClick],[b[a[1]].element,"click",this.buttonToMaxClick],[this.track.element,"click",this.trackClick],[f,"mousedown",g],[z,"mousemove",d],[z,"mouseup",k]];e&&a.push([f,"touchstart",g],[z,"touchmove",d],[z,"touchend",
k]);t(a,function(a){D.apply(null,a)});this._events=a},removeEvents:function(){t(this._events,function(a){k.apply(null,a)});this._events=void 0},destroy:function(){var a=this.chart.scroller;this.removeEvents();t(["track","scrollbarRifles","scrollbar","scrollbarGroup","group"],function(a){this[a]&&this[a].destroy&&(this[a]=this[a].destroy())},this);a&&(a.scrollbar=null,m(a.scrollbarButtons))}};l(H.prototype,"init",function(a){var b=this;a.apply(b,[].slice.call(arguments,1));b.options.scrollbar&&b.options.scrollbar.enabled&&
(b.options.scrollbar.vertical=!b.horiz,b.options.startOnTick=b.options.endOnTick=!1,b.scrollbar=new E(b.chart.renderer,b.options.scrollbar,b.chart),D(b.scrollbar,"changed",function(a){var e=Math.min(w(b.options.min,b.min),b.min,b.dataMin),d=Math.max(w(b.options.max,b.max),b.max,b.dataMax)-e,f;b.horiz&&!b.reversed||!b.horiz&&b.reversed?(f=e+d*this.to,e+=d*this.from):(f=e+d*(1-this.from),e+=d*(1-this.to));b.setExtremes(e,f,!0,!1,a)}))});l(H.prototype,"render",function(a){var b=Math.min(w(this.options.min,
this.min),this.min,this.dataMin),e=Math.max(w(this.options.max,this.max),this.max,this.dataMax),g=this.scrollbar,d;a.apply(this,[].slice.call(arguments,1));g&&(this.horiz?g.position(this.left,this.top+this.height+this.offset+2+(this.opposite?0:this.axisTitleMargin),this.width,this.height):g.position(this.left+this.width+2+this.offset+(this.opposite?this.axisTitleMargin:0),this.top,this.width,this.height),isNaN(b)||isNaN(e)||!n(this.min)||!n(this.max)?g.setRange(0,0):(d=(this.min-b)/(e-b),b=(this.max-
b)/(e-b),this.horiz&&!this.reversed||!this.horiz&&this.reversed?g.setRange(d,b):g.setRange(1-b,1-d)))});l(H.prototype,"getOffset",function(a){var b=this.horiz?2:1,e=this.scrollbar;a.apply(this,[].slice.call(arguments,1));e&&(this.chart.axisOffset[b]+=e.size+e.options.margin)});l(H.prototype,"destroy",function(a){this.scrollbar&&(this.scrollbar=this.scrollbar.destroy());a.apply(this,[].slice.call(arguments,1))});a.Scrollbar=E})(K);(function(a){function E(a){this.init(a)}var D=a.addEvent,H=a.Axis,I=
a.Chart,v=a.color,n=a.defaultOptions,m=a.defined,z=a.destroyObjectProperties,t=a.doc,q=a.each,e=a.erase,b=a.error,p=a.extend,w=a.grep,k=a.hasTouch,l=a.isNumber,g=a.isObject,F=a.merge,r=a.pick,u=a.removeEvent,f=a.Scrollbar,B=a.Series,d=a.seriesTypes,x=a.wrap,c=a.swapXY,y=[].concat(a.defaultDataGroupingUnits),L=function(a){var b=w(arguments,l);if(b.length)return Math[a].apply(0,b)};y[4]=["day",[1,2,3,4]];y[5]=["week",[1,2,3]];d=void 0===d.areaspline?"line":"areaspline";p(n,{navigator:{height:40,margin:25,
maskInside:!0,handles:{backgroundColor:"#f2f2f2",borderColor:"#999999"},maskFill:v("#6685c2").setOpacity(.3).get(),outlineColor:"#cccccc",outlineWidth:1,series:{type:d,color:"#335cad",fillOpacity:.05,lineWidth:1,compare:null,dataGrouping:{approximation:"average",enabled:!0,groupPixelWidth:2,smoothed:!0,units:y},dataLabels:{enabled:!1,zIndex:2},id:"highcharts-navigator-series",className:"highcharts-navigator-series",lineColor:null,marker:{enabled:!1},pointRange:0,shadow:!1,threshold:null},xAxis:{className:"highcharts-navigator-xaxis",
tickLength:0,lineWidth:0,gridLineColor:"#e6e6e6",gridLineWidth:1,tickPixelInterval:200,labels:{align:"left",style:{color:"#999999"},x:3,y:-4},crosshair:!1},yAxis:{className:"highcharts-navigator-yaxis",gridLineWidth:0,startOnTick:!1,endOnTick:!1,minPadding:.1,maxPadding:.1,labels:{enabled:!1},crosshair:!1,title:{text:null},tickLength:0,tickWidth:0}}});E.prototype={drawHandle:function(a,b,c,d){this.handles[b][d](c?{translateX:Math.round(this.left+this.height/2-8),translateY:Math.round(this.top+parseInt(a,
10)+.5)}:{translateX:Math.round(this.left+parseInt(a,10)),translateY:Math.round(this.top+this.height/2-8)})},getHandlePath:function(a){return c(["M",-4.5,.5,"L",3.5,.5,"L",3.5,15.5,"L",-4.5,15.5,"L",-4.5,.5,"M",-1.5,4,"L",-1.5,12,"M",.5,4,"L",.5,12],a)},drawOutline:function(a,b,c,d){var e=this.navigatorOptions.maskInside,f=this.outline.strokeWidth()/2,h=this.outlineHeight,g=this.scrollbarHeight,k=this.size,l=this.left-g,m=this.top;c?(l-=f,c=m+b+f,b=m+a+f,a=["M",l+h,m-g-f,"L",l+h,c,"L",l,c,"L",l,b,
"L",l+h,b,"L",l+h,m+k+g].concat(e?["M",l+h,c-f,"L",l+h,b+f]:[])):(a+=l+g-f,b+=l+g-f,m+=f,a=["M",l,m,"L",a,m,"L",a,m+h,"L",b,m+h,"L",b,m,"L",l+k+2*g,m].concat(e?["M",a-f,m,"L",b+f,m]:[]));this.outline[d]({d:a})},drawMasks:function(a,b,c,d){var e=this.left,f=this.top,h=this.height,g,k,l,m;c?(l=[e,e,e],m=[f,f+a,f+b],k=[h,h,h],g=[a,b-a,this.size-b]):(l=[e,e+a,e+b],m=[f,f,f],k=[a,b-a,this.size-b],g=[h,h,h]);q(this.shades,function(a,b){a[d]({x:l[b],y:m[b],width:k[b],height:g[b]})})},renderElements:function(){var a=
this,b=a.navigatorOptions,c=b.maskInside,d=a.chart,e=d.inverted,f=d.renderer,g;a.navigatorGroup=g=f.g("navigator").attr({zIndex:8,visibility:"hidden"}).add();var k={cursor:e?"ns-resize":"ew-resize"};q([!c,c,!c],function(c,d){a.shades[d]=f.rect().addClass("highcharts-navigator-mask"+(1===d?"-inside":"-outside")).attr({fill:c?b.maskFill:"transparent"}).css(1===d&&k).add(g)});a.outline=f.path().addClass("highcharts-navigator-outline").attr({"stroke-width":b.outlineWidth,stroke:b.outlineColor}).add(g);
q([0,1],function(c){a.handles[c]=f.path(a.getHandlePath(e)).attr({zIndex:7-c}).addClass("highcharts-navigator-handle highcharts-navigator-handle-"+["left","right"][c]).add(g);var d=b.handles;a.handles[c].attr({fill:d.backgroundColor,stroke:d.borderColor,"stroke-width":1}).css(k)})},update:function(a){this.destroy();F(!0,this.chart.options.navigator,this.options,a);this.init(this.chart)},render:function(a,b,c,d){var e=this.chart,f,h,g=this.scrollbarHeight,k,n=this.xAxis;f=this.navigatorEnabled;var p,
q=this.rendered;h=e.inverted;var A=e.xAxis[0].minRange;if(!this.hasDragged||m(c)){if(!l(a)||!l(b))if(q)c=0,d=n.width;else return;this.left=r(n.left,e.plotLeft+g);h?(this.size=p=k=r(n.len,e.plotHeight-2*g),e=g):(this.size=p=k=r(n.len,e.plotWidth-2*g),e=k+2*g);c=r(c,n.toPixels(a,!0));d=r(d,n.toPixels(b,!0));l(c)&&Infinity!==Math.abs(c)||(c=0,d=e);a=n.toValue(c,!0);b=n.toValue(d,!0);if(Math.abs(b-a)<A)if(this.grabbedLeft)c=n.toPixels(b-A,!0);else if(this.grabbedRight)d=n.toPixels(a+A,!0);else return;
this.zoomedMax=Math.min(Math.max(c,d,0),p);this.zoomedMin=Math.min(Math.max(this.fixedWidth?this.zoomedMax-this.fixedWidth:Math.min(c,d),0),p);this.range=this.zoomedMax-this.zoomedMin;p=Math.round(this.zoomedMax);c=Math.round(this.zoomedMin);f&&(this.navigatorGroup.attr({visibility:"visible"}),q=q&&!this.hasDragged?"animate":"attr",this.drawMasks(c,p,h,q),this.drawOutline(c,p,h,q),this.drawHandle(c,0,h,q),this.drawHandle(p,1,h,q));this.scrollbar&&(h?(h=this.top-g,f=this.left-g+(f?0:this.height),g=
k+2*g):(h=this.top+(f?this.height:-g),f=this.left-g),this.scrollbar.position(f,h,e,g),this.scrollbar.setRange(c/k,p/k));this.rendered=!0}},addMouseEvents:function(){var a=this,b=a.chart,c=b.container,d=[],e,f;a.mouseMoveHandler=e=function(b){a.onMouseMove(b)};a.mouseUpHandler=f=function(b){a.onMouseUp(b)};d=a.getPartsEvents("mousedown");d.push(D(c,"mousemove",e),D(t,"mouseup",f));k&&(d.push(D(c,"touchmove",e),D(t,"touchend",f)),d.concat(a.getPartsEvents("touchstart")));a.eventsToUnbind=d;a.series&&
a.series[0]&&d.push(D(a.series[0].xAxis,"foundExtremes",function(){b.navigator.modifyNavigatorAxisExtremes()}))},getPartsEvents:function(a){var b=this,c=[];q(["shades","handles"],function(d){q(b[d],function(e,f){c.push(D(e.element,a,function(a){b[d+"Mousedown"](a,f)}))})});return c},shadesMousedown:function(a,b){a=this.chart.pointer.normalize(a);var c=this.chart,d=this.xAxis,e=this.zoomedMin,f=this.left,g=this.size,k=this.range,l=a.chartX,m;c.inverted&&(l=a.chartY,f=this.top);1===b?(this.grabbedCenter=
l,this.fixedWidth=k,this.dragOffset=l-e):(a=l-f-k/2,0===b?a=Math.max(0,a):2===b&&a+k>=g&&(a=g-k,m=this.getUnionExtremes().dataMax),a!==e&&(this.fixedWidth=k,b=d.toFixedRange(a,a+k,null,m),c.xAxis[0].setExtremes(Math.min(b.min,b.max),Math.max(b.min,b.max),!0,null,{trigger:"navigator"})))},handlesMousedown:function(a,b){this.chart.pointer.normalize(a);a=this.chart;var c=a.xAxis[0],d=a.inverted&&!c.reversed||!a.inverted&&c.reversed;0===b?(this.grabbedLeft=!0,this.otherHandlePos=this.zoomedMax,this.fixedExtreme=
d?c.min:c.max):(this.grabbedRight=!0,this.otherHandlePos=this.zoomedMin,this.fixedExtreme=d?c.max:c.min);a.fixedRange=null},onMouseMove:function(a){var b=this,c=b.chart,d=b.left,e=b.navigatorSize,f=b.range,g=b.dragOffset,k=c.inverted;a.touches&&0===a.touches[0].pageX||(a=c.pointer.normalize(a),c=a.chartX,k&&(d=b.top,c=a.chartY),b.grabbedLeft?(b.hasDragged=!0,b.render(0,0,c-d,b.otherHandlePos)):b.grabbedRight?(b.hasDragged=!0,b.render(0,0,b.otherHandlePos,c-d)):b.grabbedCenter&&(b.hasDragged=!0,c<
g?c=g:c>e+g-f&&(c=e+g-f),b.render(0,0,c-g,c-g+f)),b.hasDragged&&b.scrollbar&&b.scrollbar.options.liveRedraw&&(a.DOMType=a.type,setTimeout(function(){b.onMouseUp(a)},0)))},onMouseUp:function(a){var b=this.chart,c=this.xAxis,d,e,f=a.DOMEvent||a;if(this.hasDragged||"scrollbar"===a.trigger)this.zoomedMin===this.otherHandlePos?d=this.fixedExtreme:this.zoomedMax===this.otherHandlePos&&(e=this.fixedExtreme),this.zoomedMax===this.navigatorSize&&(e=this.getUnionExtremes().dataMax),c=c.toFixedRange(this.zoomedMin,
this.zoomedMax,d,e),m(c.min)&&b.xAxis[0].setExtremes(Math.min(c.min,c.max),Math.max(c.min,c.max),!0,this.hasDragged?!1:null,{trigger:"navigator",triggerOp:"navigator-drag",DOMEvent:f});"mousemove"!==a.DOMType&&(this.grabbedLeft=this.grabbedRight=this.grabbedCenter=this.fixedWidth=this.fixedExtreme=this.otherHandlePos=this.hasDragged=this.dragOffset=null)},removeEvents:function(){this.eventsToUnbind&&(q(this.eventsToUnbind,function(a){a()}),this.eventsToUnbind=void 0);this.removeBaseSeriesEvents()},
removeBaseSeriesEvents:function(){var a=this.baseSeries||[];this.navigatorEnabled&&a[0]&&!1!==this.navigatorOptions.adaptToUpdatedData&&(q(a,function(a){u(a,"updatedData",this.updatedDataHandler)},this),a[0].xAxis&&u(a[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes))},init:function(a){var b=a.options,c=b.navigator,d=c.enabled,e=b.scrollbar,g=e.enabled,b=d?c.height:0,k=g?e.height:0;this.handles=[];this.shades=[];this.chart=a;this.setBaseSeries();this.height=b;this.scrollbarHeight=k;this.scrollbarEnabled=
g;this.navigatorEnabled=d;this.navigatorOptions=c;this.scrollbarOptions=e;this.outlineHeight=b+k;var l=this,d=l.baseSeries,e=a.xAxis.length,g=a.yAxis.length,m=d&&d[0]&&d[0].xAxis||a.xAxis[0];a.extraMargin={type:c.opposite?"plotTop":"marginBottom",value:l.outlineHeight+c.margin};a.inverted&&(a.extraMargin.type=c.opposite?"marginRight":"plotLeft");a.isDirtyBox=!0;l.navigatorEnabled?(l.xAxis=new H(a,F({breaks:m.options.breaks,ordinal:m.options.ordinal},c.xAxis,{id:"navigator-x-axis",yAxis:"navigator-y-axis",
isX:!0,type:"datetime",index:e,offset:0,keepOrdinalPadding:!0,startOnTick:!1,endOnTick:!1,minPadding:0,maxPadding:0,zoomEnabled:!1},a.inverted?{offsets:[k,0,-k,0],width:b}:{offsets:[0,-k,0,k],height:b})),l.yAxis=new H(a,F(c.yAxis,{id:"navigator-y-axis",alignTicks:!1,offset:0,index:g,zoomEnabled:!1},a.inverted?{width:b}:{height:b})),d||c.series.data?l.addBaseSeries():0===a.series.length&&x(a,"redraw",function(b,c){0<a.series.length&&!l.series&&(l.setBaseSeries(),a.redraw=b);b.call(a,c)}),l.renderElements(),
l.addMouseEvents()):l.xAxis={translate:function(b,c){var d=a.xAxis[0],e=d.getExtremes(),f=a.plotWidth-2*k,h=L("min",d.options.min,e.dataMin),d=L("max",d.options.max,e.dataMax)-h;return c?b*d/f+h:f*(b-h)/d},toPixels:function(a){return this.translate(a)},toValue:function(a){return this.translate(a,!0)},toFixedRange:H.prototype.toFixedRange,fake:!0};a.options.scrollbar.enabled&&(a.scrollbar=l.scrollbar=new f(a.renderer,F(a.options.scrollbar,{margin:l.navigatorEnabled?0:10,vertical:a.inverted}),a),D(l.scrollbar,
"changed",function(b){var c=l.size,d=c*this.to,c=c*this.from;l.hasDragged=l.scrollbar.hasDragged;l.render(0,0,c,d);(a.options.scrollbar.liveRedraw||"mousemove"!==b.DOMType)&&setTimeout(function(){l.onMouseUp(b)})}));l.addBaseSeriesEvents();l.addChartEvents()},getUnionExtremes:function(a){var b=this.chart.xAxis[0],c=this.xAxis,d=c.options,e=b.options,f;a&&null===b.dataMin||(f={dataMin:r(d&&d.min,L("min",e.min,b.dataMin,c.dataMin,c.min)),dataMax:r(d&&d.max,L("max",e.max,b.dataMax,c.dataMax,c.max))});
return f},setBaseSeries:function(a){var b=this.chart,c=this.baseSeries=[];a=a||b.options&&b.options.navigator.baseSeries||0;this.series&&(this.removeBaseSeriesEvents(),q(this.series,function(a){a.destroy()}));q(b.series||[],function(b,d){(b.options.showInNavigator||(d===a||b.options.id===a)&&!1!==b.options.showInNavigator)&&c.push(b)});this.xAxis&&!this.xAxis.fake&&this.addBaseSeries()},addBaseSeries:function(){var a=this,b=a.chart,c=a.series=[],d=a.baseSeries,e,f,g=a.navigatorOptions.series,k,l=
{enableMouseTracking:!1,index:null,group:"nav",padXAxis:!1,xAxis:"navigator-x-axis",yAxis:"navigator-y-axis",showInLegend:!1,stacking:!1,isInternal:!0,visible:!0};d?q(d,function(d,h){l.name="Navigator "+(h+1);e=d.options||{};k=e.navigatorOptions||{};f=F(e,l,g,k);h=k.data||g.data;a.hasNavigatorData=a.hasNavigatorData||!!h;f.data=h||e.data&&e.data.slice(0);d.navigatorSeries=b.initSeries(f);c.push(d.navigatorSeries)}):(f=F(g,l),f.data=g.data,a.hasNavigatorData=!!f.data,c.push(b.initSeries(f)));this.addBaseSeriesEvents()},
addBaseSeriesEvents:function(){var a=this,b=a.baseSeries||[];b[0]&&b[0].xAxis&&D(b[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes);!1!==this.navigatorOptions.adaptToUpdatedData&&q(b,function(b){b.xAxis&&(D(b,"updatedData",this.updatedDataHandler),b.userOptions.events=p(b.userOptions.event,{updatedData:this.updatedDataHandler}));D(b,"remove",function(){this.navigatorSeries&&(e(a.series,this.navigatorSeries),this.navigatorSeries.remove(),delete this.navigatorSeries)})},this)},modifyNavigatorAxisExtremes:function(){var a=
this.xAxis,b;a.getExtremes&&(!(b=this.getUnionExtremes(!0))||b.dataMin===a.min&&b.dataMax===a.max||(a.min=b.dataMin,a.max=b.dataMax))},modifyBaseAxisExtremes:function(){var a=this.chart.navigator,b=this.getExtremes(),c=b.dataMin,d=b.dataMax,b=b.max-b.min,e=a.stickToMin,f=a.stickToMax,g,k,m=a.series&&a.series[0],n=!!this.setExtremes;this.eventArgs&&"rangeSelectorButton"===this.eventArgs.trigger||(e&&(k=c,g=k+b),f&&(g=d,e||(k=Math.max(g-b,m&&m.xData?m.xData[0]:-Number.MAX_VALUE))),n&&(e||f)&&l(k)&&
(this.min=this.userMin=k,this.max=this.userMax=g));a.stickToMin=a.stickToMax=null},updatedDataHandler:function(){var a=this.chart.navigator,b=this.navigatorSeries;a.stickToMin=l(this.xAxis.min)&&this.xAxis.min<=this.xData[0];a.stickToMax=Math.round(a.zoomedMax)>=Math.round(a.size);b&&!a.hasNavigatorData&&(b.options.pointStart=this.xData[0],b.setData(this.options.data,!1,null,!1))},addChartEvents:function(){D(this.chart,"redraw",function(){var a=this.navigator,b=a&&(a.baseSeries&&a.baseSeries[0]&&
a.baseSeries[0].xAxis||a.scrollbar&&this.xAxis[0]);b&&a.render(b.min,b.max)})},destroy:function(){this.removeEvents();this.xAxis&&(e(this.chart.xAxis,this.xAxis),e(this.chart.axes,this.xAxis));this.yAxis&&(e(this.chart.yAxis,this.yAxis),e(this.chart.axes,this.yAxis));q(this.series||[],function(a){a.destroy&&a.destroy()});q("series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" "),function(a){this[a]&&this[a].destroy&&this[a].destroy();
this[a]=null},this);q([this.handles],function(a){z(a)},this)}};a.Navigator=E;x(H.prototype,"zoom",function(a,b,c){var d=this.chart,e=d.options,f=e.chart.zoomType,h=e.navigator,e=e.rangeSelector,g;this.isXAxis&&(h&&h.enabled||e&&e.enabled)&&("x"===f?d.resetZoomButton="blocked":"y"===f?g=!1:"xy"===f&&(d=this.previousZoom,m(b)?this.previousZoom=[this.min,this.max]:d&&(b=d[0],c=d[1],delete this.previousZoom)));return void 0!==g?g:a.call(this,b,c)});x(I.prototype,"init",function(a,b,c){D(this,"beforeRender",
function(){var a=this.options;if(a.navigator.enabled||a.scrollbar.enabled)this.scroller=this.navigator=new E(this)});a.call(this,b,c)});x(I.prototype,"setChartSize",function(a){var b=this.legend,c=this.navigator,d,e,f,g;a.apply(this,[].slice.call(arguments,1));c&&(e=b.options,f=c.xAxis,g=c.yAxis,d=c.scrollbarHeight,this.inverted?(c.left=c.navigatorOptions.opposite?this.chartWidth-d-c.height:this.spacing[3]+d,c.top=this.plotTop+d):(c.left=this.plotLeft+d,c.top=c.navigatorOptions.top||this.chartHeight-
c.height-d-this.spacing[2]-("bottom"===e.verticalAlign&&e.enabled&&!e.floating?b.legendHeight+r(e.margin,10):0)),f&&g&&(this.inverted?f.options.left=g.options.left=c.left:f.options.top=g.options.top=c.top,f.setAxisSize(),g.setAxisSize()))});x(B.prototype,"addPoint",function(a,c,d,e,f){var h=this.options.turboThreshold;h&&this.xData.length>h&&g(c,!0)&&this.chart.navigator&&b(20,!0);a.call(this,c,d,e,f)});x(I.prototype,"addSeries",function(a,b,c,d){a=a.call(this,b,!1,d);this.navigator&&this.navigator.setBaseSeries();
r(c,!0)&&this.redraw();return a});x(B.prototype,"update",function(a,b,c){a.call(this,b,!1);this.chart.navigator&&this.chart.navigator.setBaseSeries();r(c,!0)&&this.chart.redraw()});I.prototype.callbacks.push(function(a){var b=a.navigator;b&&(a=a.xAxis[0].getExtremes(),b.render(a.min,a.max))})})(K);(function(a){function E(a){this.init(a)}var D=a.addEvent,H=a.Axis,I=a.Chart,v=a.css,n=a.createElement,m=a.dateFormat,z=a.defaultOptions,t=z.global.useUTC,q=a.defined,e=a.destroyObjectProperties,b=a.discardElement,
p=a.each,w=a.extend,k=a.fireEvent,l=a.Date,g=a.isNumber,F=a.merge,r=a.pick,u=a.pInt,f=a.splat,B=a.wrap;w(z,{rangeSelector:{buttonTheme:{"stroke-width":0,width:28,height:18,padding:2,zIndex:7},height:35,inputPosition:{align:"right"},labelStyle:{color:"#666666"}}});z.lang=F(z.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From",rangeSelectorTo:"To"});E.prototype={clickButton:function(a,b){var c=this,d=c.chart,e=c.buttonOptions[a],k=d.xAxis[0],l=d.scroller&&d.scroller.getUnionExtremes()||k||{},h=
l.dataMin,m=l.dataMax,n,q=k&&Math.round(Math.min(k.max,r(m,k.max))),x=e.type,u,l=e._range,v,w,z,B=e.dataGrouping;if(null!==h&&null!==m){d.fixedRange=l;B&&(this.forcedDataGrouping=!0,H.prototype.setDataGrouping.call(k||{chart:this.chart},B,!1));if("month"===x||"year"===x)k?(x={range:e,max:q,dataMin:h,dataMax:m},n=k.minFromRange.call(x),g(x.newMax)&&(q=x.newMax)):l=e;else if(l)n=Math.max(q-l,h),q=Math.min(n+l,m);else if("ytd"===x)if(k)void 0===m&&(h=Number.MAX_VALUE,m=Number.MIN_VALUE,p(d.series,function(a){a=
a.xData;h=Math.min(a[0],h);m=Math.max(a[a.length-1],m)}),b=!1),q=c.getYTDExtremes(m,h,t),n=v=q.min,q=q.max;else{D(d,"beforeRender",function(){c.clickButton(a)});return}else"all"===x&&k&&(n=h,q=m);c.setSelected(a);k?k.setExtremes(n,q,r(b,1),null,{trigger:"rangeSelectorButton",rangeSelectorButton:e}):(u=f(d.options.xAxis)[0],z=u.range,u.range=l,w=u.min,u.min=v,D(d,"load",function(){u.range=z;u.min=w}))}},setSelected:function(a){this.selected=this.options.selected=a},defaultButtons:[{type:"month",count:1,
text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}],init:function(a){var b=this,c=a.options.rangeSelector,d=c.buttons||[].concat(b.defaultButtons),e=c.selected,f=function(){var a=b.minInput,c=b.maxInput;a&&a.blur&&k(a,"blur");c&&c.blur&&k(c,"blur")};b.chart=a;b.options=c;b.buttons=[];a.extraTopMargin=c.height;b.buttonOptions=d;this.unMouseDown=D(a.container,"mousedown",f);this.unResize=D(a,"resize",
f);p(d,b.computeButtonRange);void 0!==e&&d[e]&&this.clickButton(e,!1);D(a,"load",function(){D(a.xAxis[0],"setExtremes",function(c){this.max-this.min!==a.fixedRange&&"rangeSelectorButton"!==c.trigger&&"updatedData"!==c.trigger&&b.forcedDataGrouping&&this.setDataGrouping(!1,!1)})})},updateButtonStates:function(){var a=this.chart,b=a.xAxis[0],c=Math.round(b.max-b.min),e=!b.hasVisibleSeries,a=a.scroller&&a.scroller.getUnionExtremes()||b,f=a.dataMin,k=a.dataMax,a=this.getYTDExtremes(k,f,t),l=a.min,h=a.max,
m=this.selected,n=g(m),q=this.options.allButtonsEnabled,r=this.buttons;p(this.buttonOptions,function(a,d){var g=a._range,p=a.type,t=a.count||1;a=r[d];var y=0;d=d===m;var u=g>k-f,x=g<b.minRange,v=!1,w=!1,g=g===c;("month"===p||"year"===p)&&c>=864E5*{month:28,year:365}[p]*t&&c<=864E5*{month:31,year:366}[p]*t?g=!0:"ytd"===p?(g=h-l===c,v=!d):"all"===p&&(g=b.max-b.min>=k-f,w=!d&&n&&g);p=!q&&(u||x||w||e);g=d&&g||g&&!n&&!v;p?y=3:g&&(n=!0,y=2);a.state!==y&&a.setState(y)})},computeButtonRange:function(a){var b=
a.type,c=a.count||1,d={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5};if(d[b])a._range=d[b]*c;else if("month"===b||"year"===b)a._range=864E5*{month:30,year:365}[b]*c},setInputValue:function(a,b){var c=this.chart.options.rangeSelector,d=this[a+"Input"];q(b)&&(d.previousValue=d.HCTime,d.HCTime=b);d.value=m(c.inputEditDateFormat||"%Y-%m-%d",d.HCTime);this[a+"DateBox"].attr({text:m(c.inputDateFormat||"%b %e, %Y",d.HCTime)})},showInput:function(a){var b=this.inputGroup,c=this[a+"DateBox"];
v(this[a+"Input"],{left:b.translateX+c.x+"px",top:b.translateY+"px",width:c.width-2+"px",height:c.height-2+"px",border:"2px solid silver"})},hideInput:function(a){v(this[a+"Input"],{border:0,width:"1px",height:"1px"});this.setInputValue(a)},drawInput:function(a){function b(){var a=m.value,b=(k.inputDateParser||Date.parse)(a),e=d.xAxis[0],f=d.scroller&&d.scroller.xAxis?d.scroller.xAxis:e,h=f.dataMin,f=f.dataMax;b!==m.previousValue&&(m.previousValue=b,g(b)||(b=a.split("-"),b=Date.UTC(u(b[0]),u(b[1])-
1,u(b[2]))),g(b)&&(t||(b+=6E4*(new Date).getTimezoneOffset()),l?b>c.maxInput.HCTime?b=void 0:b<h&&(b=h):b<c.minInput.HCTime?b=void 0:b>f&&(b=f),void 0!==b&&e.setExtremes(l?b:e.min,l?e.max:b,void 0,void 0,{trigger:"rangeSelectorInput"})))}var c=this,d=c.chart,e=d.renderer.style||{},f=d.renderer,k=d.options.rangeSelector,h=c.div,l="min"===a,m,p,q=this.inputGroup;this[a+"Label"]=p=f.label(z.lang[l?"rangeSelectorFrom":"rangeSelectorTo"],this.inputGroup.offset).addClass("highcharts-range-label").attr({padding:2}).add(q);
q.offset+=p.width+5;this[a+"DateBox"]=f=f.label("",q.offset).addClass("highcharts-range-input").attr({padding:2,width:k.inputBoxWidth||90,height:k.inputBoxHeight||17,stroke:k.inputBoxBorderColor||"#cccccc","stroke-width":1,"text-align":"center"}).on("click",function(){c.showInput(a);c[a+"Input"].focus()}).add(q);q.offset+=f.width+(l?10:0);this[a+"Input"]=m=n("input",{name:a,className:"highcharts-range-selector",type:"text"},{top:d.plotTop+"px"},h);p.css(F(e,k.labelStyle));f.css(F({color:"#333333"},
e,k.inputStyle));v(m,w({position:"absolute",border:0,width:"1px",height:"1px",padding:0,textAlign:"center",fontSize:e.fontSize,fontFamily:e.fontFamily,left:"-9em"},k.inputStyle));m.onfocus=function(){c.showInput(a)};m.onblur=function(){c.hideInput(a)};m.onchange=b;m.onkeypress=function(a){13===a.keyCode&&b()}},getPosition:function(){var a=this.chart,b=a.options.rangeSelector,a=r((b.buttonPosition||{}).y,a.plotTop-a.axisOffset[0]-b.height);return{buttonTop:a,inputTop:a-10}},getYTDExtremes:function(a,
b,c){var d=new l(a),e=d[l.hcGetFullYear]();c=c?l.UTC(e,0,1):+new l(e,0,1);b=Math.max(b||0,c);d=d.getTime();return{max:Math.min(a||d,d),min:b}},render:function(a,b){var c=this,d=c.chart,e=d.renderer,f=d.container,g=d.options,h=g.exporting&&!1!==g.exporting.enabled&&g.navigation&&g.navigation.buttonOptions,k=g.rangeSelector,l=c.buttons,g=z.lang,m=c.div,m=c.inputGroup,t=k.buttonTheme,u=k.buttonPosition||{},x=k.inputEnabled,v=t&&t.states,B=d.plotLeft,D,E=this.getPosition(),F=c.group,H=c.rendered;!1!==
k.enabled&&(H||(c.group=F=e.g("range-selector-buttons").add(),c.zoomText=e.text(g.rangeSelectorZoom,r(u.x,B),15).css(k.labelStyle).add(F),D=r(u.x,B)+c.zoomText.getBBox().width+5,p(c.buttonOptions,function(a,b){l[b]=e.button(a.text,D,0,function(){c.clickButton(b);c.isActive=!0},t,v&&v.hover,v&&v.select,v&&v.disabled).attr({"text-align":"center"}).add(F);D+=l[b].width+r(k.buttonSpacing,5)}),!1!==x&&(c.div=m=n("div",null,{position:"relative",height:0,zIndex:1}),f.parentNode.insertBefore(m,f),c.inputGroup=
m=e.g("input-group").add(),m.offset=0,c.drawInput("min"),c.drawInput("max"))),c.updateButtonStates(),F[H?"animate":"attr"]({translateY:E.buttonTop}),!1!==x&&(m.align(w({y:E.inputTop,width:m.offset,x:h&&E.inputTop<(h.y||0)+h.height-d.spacing[0]?-40:0},k.inputPosition),!0,d.spacingBox),q(x)||(d=F.getBBox(),m[m.alignAttr.translateX<d.x+d.width+10?"hide":"show"]()),c.setInputValue("min",a),c.setInputValue("max",b)),c.rendered=!0)},update:function(a){var b=this.chart;F(!0,b.options.rangeSelector,a);this.destroy();
this.init(b)},destroy:function(){var a=this.minInput,f=this.maxInput,c;this.unMouseDown();this.unResize();e(this.buttons);a&&(a.onfocus=a.onblur=a.onchange=null);f&&(f.onfocus=f.onblur=f.onchange=null);for(c in this)this[c]&&"chart"!==c&&(this[c].destroy?this[c].destroy():this[c].nodeType&&b(this[c])),this[c]!==E.prototype[c]&&(this[c]=null)}};H.prototype.toFixedRange=function(a,b,c,e){var d=this.chart&&this.chart.fixedRange;a=r(c,this.translate(a,!0,!this.horiz));b=r(e,this.translate(b,!0,!this.horiz));
c=d&&(b-a)/d;.7<c&&1.3>c&&(e?a=b-d:b=a+d);g(a)||(a=b=void 0);return{min:a,max:b}};H.prototype.minFromRange=function(){var a=this.range,b={month:"Month",year:"FullYear"}[a.type],c,e=this.max,f,k,l=function(a,c){var d=new Date(a);d["set"+b](d["get"+b]()+c);return d.getTime()-a};g(a)?(c=e-a,k=a):(c=e+l(e,-a.count),this.chart&&(this.chart.fixedRange=e-c));f=r(this.dataMin,Number.MIN_VALUE);g(c)||(c=f);c<=f&&(c=f,void 0===k&&(k=l(c,a.count)),this.newMax=Math.min(c+k,this.dataMax));g(e)||(c=void 0);return c};
B(I.prototype,"init",function(a,b,c){D(this,"init",function(){this.options.rangeSelector.enabled&&(this.rangeSelector=new E(this))});a.call(this,b,c)});I.prototype.callbacks.push(function(a){function b(){c=a.xAxis[0].getExtremes();g(c.min)&&d.render(c.min,c.max)}var c,d=a.rangeSelector,e,f;d&&(f=D(a.xAxis[0],"afterSetExtremes",function(a){d.render(a.min,a.max)}),e=D(a,"redraw",b),b());D(a,"destroy",function(){d&&(e(),f())})});a.RangeSelector=E})(K);(function(a){var E=a.arrayMax,D=a.arrayMin,H=a.Axis,
I=a.Chart,v=a.defined,n=a.each,m=a.extend,z=a.format,t=a.inArray,q=a.isNumber,e=a.isString,b=a.map,p=a.merge,w=a.pick,k=a.Point,l=a.Renderer,g=a.Series,F=a.splat,r=a.SVGRenderer,u=a.VMLRenderer,f=a.wrap,B=g.prototype,d=B.init,x=B.processData,c=k.prototype.tooltipFormatter;a.StockChart=a.stockChart=function(c,d,f){var g=e(c)||c.nodeName,h=arguments[g?1:0],k=h.series,l=a.getOptions(),m,n=w(h.navigator&&h.navigator.enabled,l.navigator.enabled,!0),q=n?{startOnTick:!1,endOnTick:!1}:null,r={marker:{enabled:!1,
radius:2}},t={shadow:!1,borderWidth:0};h.xAxis=b(F(h.xAxis||{}),function(a){return p({minPadding:0,maxPadding:0,ordinal:!0,title:{text:null},labels:{overflow:"justify"},showLastLabel:!0},l.xAxis,a,{type:"datetime",categories:null},q)});h.yAxis=b(F(h.yAxis||{}),function(a){m=w(a.opposite,!0);return p({labels:{y:-2},opposite:m,showLastLabel:!1,title:{text:null}},l.yAxis,a)});h.series=null;h=p({chart:{panning:!0,pinchType:"x"},navigator:{enabled:n},scrollbar:{enabled:w(l.scrollbar.enabled,!0)},rangeSelector:{enabled:w(l.rangeSelector.enabled,
!0)},title:{text:null},tooltip:{shared:!0,crosshairs:!0},legend:{enabled:!1},plotOptions:{line:r,spline:r,area:r,areaspline:r,arearange:r,areasplinerange:r,column:t,columnrange:t,candlestick:t,ohlc:t}},h,{isStock:!0});h.series=k;return g?new I(c,h,f):new I(h,d)};f(H.prototype,"autoLabelAlign",function(a){var b=this.chart,c=this.options,b=b._labelPanes=b._labelPanes||{},d=this.options.labels;return this.chart.options.isStock&&"yAxis"===this.coll&&(c=c.top+","+c.height,!b[c]&&d.enabled)?(15===d.x&&
(d.x=0),void 0===d.align&&(d.align="right"),b[c]=1,"right"):a.call(this,[].slice.call(arguments,1))});f(H.prototype,"getPlotLinePath",function(a,c,d,f,g,k){var h=this,l=this.isLinked&&!this.series?this.linkedParent.series:this.series,m=h.chart,p=m.renderer,r=h.left,u=h.top,y,x,z,A,B=[],D=[],E,G;if("colorAxis"===h.coll)return a.apply(this,[].slice.call(arguments,1));D=function(a){var c="xAxis"===a?"yAxis":"xAxis";a=h.options[c];return q(a)?[m[c][a]]:e(a)?[m.get(a)]:b(l,function(a){return a[c]})}(h.coll);
n(h.isXAxis?m.yAxis:m.xAxis,function(a){if(v(a.options.id)?-1===a.options.id.indexOf("navigator"):1){var b=a.isXAxis?"yAxis":"xAxis",b=v(a.options[b])?m[b][a.options[b]]:m[b][0];h===b&&D.push(a)}});E=D.length?[]:[h.isXAxis?m.yAxis[0]:m.xAxis[0]];n(D,function(a){-1===t(a,E)&&E.push(a)});G=w(k,h.translate(c,null,null,f));q(G)&&(h.horiz?n(E,function(a){var b;x=a.pos;A=x+a.len;y=z=Math.round(G+h.transB);if(y<r||y>r+h.width)g?y=z=Math.min(Math.max(r,y),r+h.width):b=!0;b||B.push("M",y,x,"L",z,A)}):n(E,
function(a){var b;y=a.pos;z=y+a.len;x=A=Math.round(u+h.height-G);if(x<u||x>u+h.height)g?x=A=Math.min(Math.max(u,x),h.top+h.height):b=!0;b||B.push("M",y,x,"L",z,A)}));return 0<B.length?p.crispPolyLine(B,d||1):null});H.prototype.getPlotBandPath=function(a,b){b=this.getPlotLinePath(b,null,null,!0);a=this.getPlotLinePath(a,null,null,!0);var c=[],d;if(a&&b)if(a.toString()===b.toString())c=a,c.flat=!0;else for(d=0;d<a.length;d+=6)c.push("M",a[d+1],a[d+2],"L",a[d+4],a[d+5],b[d+4],b[d+5],b[d+1],b[d+2],"z");
else c=null;return c};r.prototype.crispPolyLine=function(a,b){var c;for(c=0;c<a.length;c+=6)a[c+1]===a[c+4]&&(a[c+1]=a[c+4]=Math.round(a[c+1])-b%2/2),a[c+2]===a[c+5]&&(a[c+2]=a[c+5]=Math.round(a[c+2])+b%2/2);return a};l===u&&(u.prototype.crispPolyLine=r.prototype.crispPolyLine);f(H.prototype,"hideCrosshair",function(a,b){a.call(this,b);this.crossLabel&&(this.crossLabel=this.crossLabel.hide())});f(H.prototype,"drawCrosshair",function(a,b,c){var d,e;a.call(this,b,c);if(v(this.crosshair.label)&&this.crosshair.label.enabled&&
this.cross){a=this.chart;var f=this.options.crosshair.label,g=this.horiz;d=this.opposite;e=this.left;var k=this.top,l=this.crossLabel,n,p=f.format,q="",r="inside"===this.options.tickPosition,t=!1!==this.crosshair.snap,u=0;b||(b=this.cross&&this.cross.e);n=g?"center":d?"right"===this.labelAlign?"right":"left":"left"===this.labelAlign?"left":"center";l||(l=this.crossLabel=a.renderer.label(null,null,null,f.shape||"callout").addClass("highcharts-crosshair-label"+(this.series[0]&&" highcharts-color-"+
this.series[0].colorIndex)).attr({align:f.align||n,padding:w(f.padding,8),r:w(f.borderRadius,3),zIndex:2}).add(this.labelGroup),l.attr({fill:f.backgroundColor||this.series[0]&&this.series[0].color||"#666666",stroke:f.borderColor||"","stroke-width":f.borderWidth||0}).css(m({color:"#ffffff",fontWeight:"normal",fontSize:"11px",textAlign:"center"},f.style)));g?(n=t?c.plotX+e:b.chartX,k+=d?0:this.height):(n=d?this.width+e:0,k=t?c.plotY+k:b.chartY);p||f.formatter||(this.isDatetimeAxis&&(q="%b %d, %Y"),
p="{value"+(q?":"+q:"")+"}");b=t?c[this.isXAxis?"x":"y"]:this.toValue(g?b.chartX:b.chartY);l.attr({text:p?z(p,{value:b}):f.formatter.call(this,b),x:n,y:k,visibility:"visible"});b=l.getBBox();if(g){if(r&&!d||!r&&d)k=l.y-b.height}else k=l.y-b.height/2;g?(d=e-b.x,e=e+this.width-b.x):(d="left"===this.labelAlign?e:0,e="right"===this.labelAlign?e+this.width:a.chartWidth);l.translateX<d&&(u=d-l.translateX);l.translateX+b.width>=e&&(u=-(l.translateX+b.width-e));l.attr({x:n+u,y:k,anchorX:g?n:this.opposite?
0:a.chartWidth,anchorY:g?this.opposite?a.chartHeight:0:k+b.height/2})}});B.init=function(){d.apply(this,arguments);this.setCompare(this.options.compare)};B.setCompare=function(a){this.modifyValue="value"===a||"percent"===a?function(b,c){var d=this.compareValue;if(void 0!==b&&void 0!==d)return b="value"===a?b-d:b/d*100-(100===this.options.compareBase?0:100),c&&(c.change=b),b}:null;this.userOptions.compare=a;this.chart.hasRendered&&(this.isDirty=!0)};B.processData=function(){var a,b=-1,c,d,e,f;x.apply(this,
arguments);if(this.xAxis&&this.processedYData)for(c=this.processedXData,d=this.processedYData,e=d.length,this.pointArrayMap&&(b=t("close",this.pointArrayMap),-1===b&&(b=t(this.pointValKey||"y",this.pointArrayMap))),a=0;a<e-1;a++)if(f=-1<b?d[a][b]:d[a],q(f)&&c[a+1]>=this.xAxis.min&&0!==f){this.compareValue=f;break}};f(B,"getExtremes",function(a){var b;a.apply(this,[].slice.call(arguments,1));this.modifyValue&&(b=[this.modifyValue(this.dataMin),this.modifyValue(this.dataMax)],this.dataMin=D(b),this.dataMax=
E(b))});H.prototype.setCompare=function(a,b){this.isXAxis||(n(this.series,function(b){b.setCompare(a)}),w(b,!0)&&this.chart.redraw())};k.prototype.tooltipFormatter=function(b){b=b.replace("{point.change}",(0<this.change?"+":"")+a.numberFormat(this.change,w(this.series.tooltipOptions.changeDecimals,2)));return c.apply(this,[b])};f(g.prototype,"render",function(a){this.chart.is3d&&this.chart.is3d()||this.chart.polar||!this.xAxis||this.xAxis.isRadial||(!this.clipBox&&this.animate?(this.clipBox=p(this.chart.clipBox),
this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len):this.chart[this.sharedClipKey]?this.chart[this.sharedClipKey].attr({width:this.xAxis.len,height:this.yAxis.len}):this.clipBox&&(this.clipBox.width=this.xAxis.len,this.clipBox.height=this.yAxis.len));a.call(this)})})(K);return K});

},{}],2:[function(require,module,exports){
/*
 Highcharts JS v5.0.7 (2017-01-17)
 Plugin for displaying a message when there is no data visible in chart.

 (c) 2010-2016 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
*/
(function(d){"object"===typeof module&&module.exports?module.exports=d:d(Highcharts)})(function(d){(function(c){function d(){return!!this.points.length}function g(){this.hasData()?this.hideNoData():this.showNoData()}var h=c.seriesTypes,e=c.Chart.prototype,f=c.getOptions(),k=c.extend,l=c.each;k(f.lang,{noData:"No data to display"});f.noData={position:{x:0,y:0,align:"center",verticalAlign:"middle"}};f.noData.style={fontWeight:"bold",fontSize:"12px",color:"#666666"};l(["pie","gauge","waterfall","bubble",
"treemap"],function(a){h[a]&&(h[a].prototype.hasData=d)});c.Series.prototype.hasData=function(){return this.visible&&void 0!==this.dataMax&&void 0!==this.dataMin};e.showNoData=function(a){var b=this.options;a=a||b.lang.noData;b=b.noData;this.noDataLabel||(this.noDataLabel=this.renderer.label(a,0,0,null,null,null,b.useHTML,null,"no-data"),this.noDataLabel.attr(b.attr).css(b.style),this.noDataLabel.add(),this.noDataLabel.align(k(this.noDataLabel.getBBox(),b.position),!1,"plotBox"))};e.hideNoData=function(){this.noDataLabel&&
(this.noDataLabel=this.noDataLabel.destroy())};e.hasData=function(){for(var a=this.series,b=a.length;b--;)if(a[b].hasData()&&!a[b].options.isInternal)return!0;return!1};e.callbacks.push(function(a){c.addEvent(a,"load",g);c.addEvent(a,"redraw",g)})})(d)});

},{}],3:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );

},{}],4:[function(require,module,exports){
var Highcharts = require('highcharts/highstock.js');
var nodata = require('highcharts/modules/no-data-to-display.js');
var $ = require('jquery');

var seriesOptions = [], seriesCounter = 0, names = [];
var location = window.location;

var socket = io.connect('http://' + document.domain + ":" + location.port);

function addName(name){
    var index = names.indexOf(name);

    if(index < 0){
        names.push(name);
    }
}

function removeName(name){
    var index = names.indexOf(name);

    if(index >= 0){
        names.splice(index, 1);
    }
}

var Header = require('./header');

var AddStock = React.createClass({displayName: "AddStock",
    getInitialState: function(){
        return ({ticker: ""});
    },

    addStock: function(){
        var context = this;
        if(this.state.ticker != "" && names.indexOf(this.state.ticker) < 0){
            socket.emit('add', this.state.ticker);
        }
    },

    handleChange(event) {
        this.setState({ticker: (ReactDOM.findDOMNode(this.refs.ticker).value)});
    },

    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement("input", {type: "text", onChange: this.handleChange.bind(this), ref: "ticker", name: "input"}), 
                React.createElement("button", {onClick: this.addStock}, "Add")
            )
        )
    }
});

var Ticker = React.createClass({displayName: "Ticker",
    getInitialState: function(){
        return ({});
    },

    handleClick: function(){
        socket.emit("remove",this.props.name);
    },

    render: function(){
        return (
            React.createElement("div", {className: "ticker"}, 
                this.props.name, 
                React.createElement("button", {onClick: this.handleClick}, "X")
            )
        )
    }
});

var App = React.createClass({displayName: "App",
    getInitialState: function(){
        return ({tickers: []});
    },

    componentDidMount: function(){
        var context = this;
        $.getJSON("http://"+location.host+"/get_tickers", function(data){
            names = data;
            $.each(names, function(i, name){
                context.addTicker(name);
            });

            redrawChart();
        })
    },

    addTicker: function(ticker){
        var tickers = this.state.tickers;
        var tickerAlreadyAdded = false;
        for(var i = 0; i < tickers.length; i++){
            if(tickers[i].props.name === ticker){
                tickerAlreadyAdded = true;
            }
        }

        if(!tickerAlreadyAdded){
            addName(ticker);
            tickers.push(React.createElement(Ticker, {name: ticker, removeTicker: this.removeTicker}));
            this.setState({tickers: tickers}, function(){
                redrawChart();
            });
        }
    },

    removeTicker: function(ticker){
        var tickers = this.state.tickers;
        var index = 0;
        var tickerFound = false;

        removeName(ticker);

        while(index < tickers.length && !tickerFound){
            if(tickers[index].props.name == ticker){
                tickers.splice(index,1);
                tickerFound = true;
                console.log("Remove Ticker calling redrawChart");
                redrawChart();
            }
            index++;
        }

        this.setState({tickers: tickers});
    },

    render: function() {
        var context = this;
        socket.on('added', function(name){
            context.addTicker(name);
        });

        socket.on('removed', function(name){
            context.removeTicker(name);
        });

        var tickers = this.state.tickers;

        return (
            React.createElement("div", null, 
                React.createElement(Header, null), 
                React.createElement("div", {className: "app-body"}, 
                    React.createElement("div", {className: "flex-row"}, 
                        React.createElement("div", {id: "container"})
                    ), 
                    React.createElement("div", {className: "flex-row tickers"}, 
                        tickers
                    ), 
                    React.createElement("div", {className: "flex-row add-ticker"}, 
                        React.createElement(AddStock, {addTicker: this.addTicker})
                    )
                )
            )
        )
    }
});

ReactDOM.render(
    React.createElement(App, null), document.getElementById('main')
);

function createChart(){
    Highcharts.stockChart('container', {
        rangeSelecter: {
            selected: 4
        },

        yAxis: {
            labels: {
                formatter: function(){
                    return (this.value > 0 ? ' + ' : '') + this.value + '%';
                }
            },

            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }],
            
            showEmpty: true
        },

        xAxis: {
            showEmpty: true
        },

        plotOptions: {
            series: {
                compare: 'percent',
                showInNavigator: true
            }
        },

        tooltip: {
            valueDecimals: 2,
            split: true
        },

        series: seriesOptions
    })
}

function redrawChart(){
    seriesCounter = 0;
    seriesOptions = [];

    if(names.length === 0)
        createChart();

    $.each(names, function(i, name){
        $.getJSON('http://'+location.host+'/get_data/'+name, function(data){
            seriesOptions[i] = {
                name: name,
                data: data
            };

            seriesCounter += 1;

            if(seriesCounter === names.length){
                createChart();
            }
        })
    })
}

},{"./header":5,"highcharts/highstock.js":1,"highcharts/modules/no-data-to-display.js":2,"jquery":3}],5:[function(require,module,exports){
var Header = React.createClass({displayName: "Header",
    render: function(){
        return (
            React.createElement("div", {className: "header"}, "Header")
        )
    }
})

module.exports = Header;

},{}]},{},[4]);
