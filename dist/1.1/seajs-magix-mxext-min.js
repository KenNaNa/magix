define("magix/magix",function(){var e=/\/\.\/|\/[^\/]+?\/\.{2}\/|([^:\/])\/\/+/,t=/\/[^\/]*$/,r=/[#?].*$/,n="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,s=0,c="/",f="vframe",u=function(){throw Error("unimplement method")},m=function(){},v={tagName:f,rootId:"magix_vf_root",execError:m},h={}.hasOwnProperty,l=function(e,t){return e?h.call(e,t):e},d=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=C.isObject(t)?x(e,t):l(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},g=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},p=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(isNaN(t)?5:t),void 0):new p(e,t)},x=function(e,t,r){for(var n in t)r&&l(r,n)||(e[n]=t[n]);return e};x(p.prototype,{get:function(e){var t,r=this,n=r.c;return e=a+e,l(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=s++,t=t.v)),t},set:function(e,t,r){var n=this,i=n.c,o=a+e,c=i[o];if(!l(i,o)){if(i.length>=n.b){i.sort(g);for(var f=n.b-n.x;f--;)c=i.pop(),delete i[c.k],c.m&&b(c.m,c.o,c)}c={},i.push(c),i[o]=c}return c.o=e,c.k=o,c.v=t,c.f=1,c.t=s++,c.m=r,t},del:function(e){e=a+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=n,delete t[e],r.m&&(b(r.m,r.o,r),r.m=0))},has:function(e){return e=a+e,l(this.c,e)}});var y=p(60),w=p(),b=function(e,t,r,n,i,a){for(C.isArray(e)||(e=[e]),t&&(C.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){v.execError(o)}return i},C={isArray:u,isObject:u,isFunction:u,isRegExp:u,isString:u,isNumber:u,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},libRequire:u,include:u,mix:x,unimpl:u,has:l,safeExec:b,noop:m,config:d(v),start:function(e){var t=this;x(v,e),t.libRequire(v.iniFile,function(r){v=x(v,r,e),v.tagNameChanged=v.tagName!=f;var n=v.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(v.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)l(e,r)&&t.push(r);return t},local:d({}),path:function(i,a){var s=i+"\n"+a,f=w.get(s);if(!f){if(o.test(a))f=a;else if(i=i.replace(r,n).replace(t,n)+c,a.charAt(0)==c){var u=o.test(i)?8:0,m=i.indexOf(c,u);f=i.substring(0,m)+a}else f=i+a;for(;e.test(f);)f=f.replace(e,"$1/");w.set(s,f)}return f},pathToObject:function(e,t){var s=y.get(e);if(!s){s={};var f={},u=n;r.test(e)?u=e.replace(r,n):~e.indexOf("=")||(u=e);var m=e.replace(u,n);if(u&&o.test(u)){var v=u.indexOf(c,8);u=~v?u.substring(v):c}m.replace(i,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}f[r]=n}),s[a]=u,s.params=f,y.set(e,s)}return s},objectToPath:function(e,t,r){var n,i=e[a],o=[],s=e.params;for(var c in s)n=s[c],(!r||n||l(r,c))&&(t&&(n=encodeURIComponent(n)),o.push(c+"="+n));return o.length&&(i=i+"?"+o.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(C.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:p},E=Object.prototype.toString;return x(C,{libRequire:function(e,t){e?seajs.use(e,t):t&&t()},isArray:$.isArray,isFunction:$.isFunction,isObject:function(e){return"[object Object]"==E.call(e)},isString:function(e){return"[object String]"==E.call(e)},isNumber:function(e){return"[object Number]"==E.call(e)},isRegExp:function(e){return"[object RegExp]"==E.call(e)},extend:function(e,t,r,n){e.superclass=t.prototype,t.prototype.constructor=t;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,C.mix(e.prototype,r),C.mix(e,n),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e){var t,r,n,i,a=e("magix/magix"),o=e("magix/event"),s=window,c="",f="pathname",u=a.has,m=a.mix,v=document,h=/^UTF-8$/i.test(v.charset||v.characterSet||"UTF-8"),l=a.config(),d=a.cache(),g=a.cache(40),p={params:{},href:c},x=/#.*$/,y=/^[^#]*#?!?/,w="params",b=l.nativeHistory,$=function(e,t,r){if(e){r=this[w],a.isString(e)&&(e=e.split(","));for(var n=0;e.length>n&&!(t=u(r,e[n]));n++);}return t},C=function(){return u(this,f)},E=function(){return u(this,"view")},M=function(e,t,r){return t=this,r=t[w],r[e]},T=function(e){var t=a.pathToObject(e,h),r=t[f];return r&&i&&(t[f]=a.path(s.location[f],r)),t},O=m({getView:function(e,t){if(!r){r={rs:l.routes||{},nf:l.notFoundView};var n=l.defaultView;if(!n)throw Error("unset defaultView");r.home=n;var i=l.defaultPathname||c;r.rs[i]=n,r[f]=i}var o;e||(e=r[f]);var s=r.rs;return o=a.isFunction(s)?s.call(l,e,t):s[e],{view:o?o:r.nf||r.home,pathname:o||b?e:r.nf?e:r[f]}},start:function(){var e=O,t=s.history;n=b&&t.pushState,i=b&&!n,n?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||s.location.href;var r=O,n=d.get(e);if(!n){var i=e.replace(x,c),a=e.replace(y,c),o=T(i),u=T(a),v={};m(v,o[w]),m(v,u[w]),n={get:M,href:e,refHref:p.href,srcQuery:i,srcHash:a,query:o,hash:u,params:v},d.set(e,n)}if(t&&!n.view){var h;h=b?n.hash[f]||n.query[f]:n.hash[f];var l=r.getView(h,n);m(n,l)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=g.get(i);if(a||(i=n+"\n"+i,a=g.get(i)),!a){var o,s,c;a={params:{}},s=e[f],c=t[f],s!=c&&(a[f]={from:s,to:c},o=1),s=e.view,c=t.view,s!=c&&(a.view={from:s,to:c},o=1);var u,m=e[w],v=t[w];for(u in m)s=m[u],c=v[u],m[u]!=v[u]&&(o=1,a[w][u]={from:s,to:c});for(u in v)s=m[u],c=v[u],m[u]!=v[u]&&(o=1,a[w][u]={from:s,to:c});a.occur=o,a.isParam=$,a.isPathname=C,a.isView=E,g.set(i,a)}return a},route:function(){var e=O,r=e.parseQH(0,1),n=!p.get,i=e.getChged(p,r);p=r,i.occur&&(t=r,e.fire("changed",{location:r,changed:i,force:n}))},navigate:function(e,r,o){var s=O;if(!r&&a.isObject(e)&&(r=e,e=c),r&&(e=a.objectToPath({params:r,pathname:e},h)),e){var v=T(e),l={};if(l[w]=m({},v[w]),l[f]=v[f],l[f]){if(i){var d=t.query[w];for(var g in d)u(d,g)&&!u(l[w],g)&&(l[w][g]=c)}}else{var p=m({},t[w]);l[w]=m(p,l[w]),l[f]=t[f]}var x,y=a.objectToPath(l,h,t.query[w]);x=n?y!=t.srcQuery:y!=t.srcHash,x&&(n?(s.poped=1,history[o?"replaceState":"pushState"](null,null,y),s.route()):(m(l,t,l),l.srcHash=y,l.hash={params:l[w],pathname:l[f]},s.fire("!ul",{loc:t=l}),y="#!"+y,o?location.replace(y):location.hash=y))}}},o);return O.useState=function(){var e=O,t=location.href;s.addEventListener("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())},!1)},O.useHash=function(){s.addEventListener("hashchange",O.route,!1)},O}),define("magix/body",["magix/magix"],function(e){var t,r=e("magix/magix"),n=r.has,i=r.mix,a={},o=document.body,s={},c=String.fromCharCode(26),f="mx-owner",u="mx-ei",m={},v=65536,h=function(e){return e.id||(e.id="mx-e-"+v--)},l=function(e,t,r){return r?e.setAttribute(t,r):e&&e.getAttribute&&(r=e.getAttribute(t)),r},d={special:function(e){i(a,e)},process:function(e){for(var r=e.target||e.srcElement;r&&1!=r.nodeType;)r=r.parentNode;var i=r,a=e.type,s=m[a]||(m[a]=RegExp("(?:^|,)"+a+"(?:,|$)"));if(!s.test(l(r,u))){for(var v,d,g="mx-"+a,p=[];i&&i!=o&&(v=l(i,g),d=l(i,u),!v&&!s.test(d));)p.push(i),i=i.parentNode;if(v){var x,y=v.split(c);y.length>1&&(x=y[0],v=y.pop());var w=l(i,f)||x;if(!w)for(var b=i,$=t.all();b&&b!=o;){if(n($,b.id)){l(i,f,w=b.id);break}b=b.parentNode}if(!w)throw Error("miss "+f+":"+v);var C=t.get(w),E=C&&C.view;E&&E.processEvent({info:v,se:e,st:a,tId:h(r),cId:h(i)})}else for(var M;p.length;)M=p.shift(),d=l(M,u),s.test(d)||(d=d?d+","+a:a,l(M,u,d))}},on:function(e,r){var n=this;if(!s[e]){t=r,s[e]=0;var i=a[e];i?n.lib(0,o,e):o["on"+e]=function(e){e=e||window.event,e&&n.process(e)}}s[e]++},un:function(e){var t=this,r=s[e];if(r>0){if(r--,!r){var n=a[e];n?t.lib(1,o,e):o["on"+e]=null}s[e]=r}}};return d.lib=function(e,t,r){var n=e?"undelegate":"delegate";$(t)[n]("[mx-"+r+"]",r,d.process)},d}),define("magix/event",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e){return"~"+e},n=t.safeExec,i={fire:function(e,t,i,a){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,m=c.length,v=m-1;m--;)f=a?m:v-m,u=c[f],(u.d||u.r)&&(c.splice(f,1),v--),u.d||n(u.f,t,s)}i&&delete s[o]},on:function(e,n,i){var a=r(e),o=this[a]||(this[a]=[]);t.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},un:function(e,t){var n=r(e),i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]}};return i}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e){var t,r,n,i=e("magix/magix"),a=e("magix/event"),o=e("magix/view"),s=document,c=65536,f=i.safeExec,u=[].slice,m=i.mix,v=i.config("tagName"),h=i.config("rootId"),l=!i.config("tagNameChanged"),d=i.has,g="mx-view",p=l?"mx-defer":"mx-vframe",x="alter",y="created",w=function(e){return"object"==typeof e?e:s.getElementById(e)},b=function(e,t,r){return r=w(e),r?r.getElementsByTagName(t):[]},$=function(e){return e.id||(e.id="magix_vf_"+c--)},C=function(e,t,r){if(e=w(e),t=w(t),e&&t)if(e!==t)try{r=t.contains?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},E=/<script[^>]*>[\s\S]*?<\/script>/gi,M=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={}};return m(M,{root:function(e,r){if(!t){n=r;var i=w(h);i||(i=s.createElement(v),i.id=h,s.body.insertBefore(i,s.body.firstChild)),t=new M(h),e.add(t)}return t}}),m(m(M.prototype,a),{mountView:function(e,t,r){var a=this,s=w(a.id);if(s._bak?s._chgd=1:(s._bak=1,s._tmpl=s.innerHTML.replace(E,"")),a.unmountView(),e){var c=i.pathToObject(e),u=c.pathname,v=--a.sign;i.libRequire(u,function(e){if(v==a.sign){var i=a.owner;o.prepare(e);var h=new e({owner:a,id:a.id,$:w,path:u,vom:i,location:n});a.view=h,h.on("interact",function(e){e.tmpl||(s._chgd&&(s.innerHTML=s._tmpl),a.mountZoneVframes(0,0,1)),h.on("rendered",function(){a.mountZoneVframes(0,0,1)}),h.on("prerender",function(){a.unmountZoneVframes(0,1)||a.cAlter()}),h.on("inited",function(){a.viewInited=1,a.fire("viewInited",{view:h}),r&&f(r,h,a)})},0),t=t||{},h.load(m(t,c.params,t))}})}},unmountView:function(){var e=this;if(e.view){r||(r={}),e.unmountZoneVframes(0,1),e.cAlter(r),e.view.destroy();var t=w(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,r=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r){var n=this,i=n.owner,a=i.get(e);return a||(a=new M(e),a.pId=n.id,d(n.cM,e)||n.cC++,n.cM[e]=1,i.add(a)),a.mountView(t,r),a},mountZoneVframes:function(e,t){var r=this,n=e||r.id;r.unmountZoneVframes(n,1);var i=b(n,v),a=i.length,o={};if(a)for(var s,c,f,u,m=0;a>m;m++)if(s=i[m],c=$(s),!d(o,c)&&(f=s.getAttribute(g),u=!s.getAttribute(p),u=u==l,u||f)){r.mountVframe(c,f,t);for(var h,x=b(s,v),y=0,w=x.length;w>y;y++)h=x[y],f=h.getAttribute(g),u=!h.getAttribute(p),u=u==l,u||f||(o[$(h)]=1)}r.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=r.owner,i=n.get(e);if(i){var a=i.fcc;i.unmountView(),n.remove(e,a),r.fire("destroy");var o=n.get(i.pId);o&&d(o.cM,e)&&(delete o.cM[e],o.cC--,t||o.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i,a=this;if(e){var o=a.cM,s={};for(i in o)C(i,e)&&(s[i]=1);r=s}else r=a.cM;for(i in r)n=1,a.unmountVframe(i,1);return t||a.cCreated(),n},invokeView:function(e){var t,r=this,n=r.view,i=u.call(arguments,1);return r.viewInited&&n[e]&&(t=f(n[e],i,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(y,e),t.fire(y,e));var n=t.owner;n.vfCreated();var i=t.id,a=n.get(t.pId);a&&!d(a.rM,i)&&(a.rM[i]=a.cM[i],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(x,e),t.fire(x,e));var i=t.owner,a=i.get(t.pId);a&&d(a.rM,n)&&(a.rC--,delete a.rM[n],a.cAlter(e))}},locChged:function(e,t){var r=this,n=r.view;if(n&&n.sign>0&&n.rendered){var a=n.olChanged(t),o={location:e,changed:t,prevent:function(){this.cs=[]},toChildren:function(e){e=e||[],i.isString(e)&&(e=e.split(",")),this.cs=e}};a&&f(n.locationChange,o,n);for(var s,c=o.cs||i.keys(r.cM),u=0,m=c.length,v=r.owner;m>u;u++)s=v.get(c[u]),s&&s.locChged(e,t)}}}),M}),define("magix/view",function(e){var t=e("magix/magix"),r=e("magix/event"),n=e("magix/body"),i=t.safeExec,a=t.has,o=",",s=[],c=t.noop,f=t.mix,u={render:1,renderUI:1},m="~",v=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},h=t.cache(40),l=/\smx-(?!view|defer|owner)[a-z]+\s*=\s*"/g,d=String.fromCharCode(26),g=function(){this.render()},p={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},x=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,y=/(\w+):([^,]+)/g,w=/([$\w]+)<([\w,]+)>/,b=function(e){var t=this;f(t,e),t.sign=1,i(b.ms,[e],t)};b.ms=[],b.prepare=function(e){var t=this,r=e.superclass;if(r&&t.prepare(r.constructor),!e[m]){e[m]=1,e.extend=t.extend;var n,i,s,f,h,l=e.prototype,g={};for(var p in l)if(a(l,p))if(n=l[p],i=p.match(w))for(s=i[1],f=i[2],f=f.split(o),h=f.length-1;h>-1;h--)i=f[h],g[i]=1,l[s+d+i]=n;else a(u,p)&&n!=c&&(l[p]=v(n));f&&(l.$evts=g)}},b.mixin=function(e,t){b.ms.push(t),f(b.prototype,e)},f(f(b.prototype,r),{render:c,locationChange:c,init:c,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=e.sign,o=a(e,"template"),c=function(a){if(n==e.sign){o||(e.template=e.wrapMxEvent(a)),e.delegateEvents(),e.fire("interact",{tmpl:t},1),i(e.init,r,e),e.fire("inited",0,1),i(e.render,s,e);var c=!t&&!e.rendered;c&&(e.rendered=!0,e.fire("primed",null,1))}};t&&!o?e.fetchTmpl(c):c()},beginUpdate:function(){var e=this;e.sign&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign&&(e.rendered||e.fire("primed",0,1),e.rendered=!0,e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(l,"$&"+this.id+d)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;t.isObject(e)&&(r.pn=e.pathname,e=e.keys),e&&(r.keys=i.concat((e+"").split(o))),n.locationChange==c&&(n.locationChange=g)},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},destroy:function(){var e=this;e.sign>0&&(e.sign=0),e.sign--,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1)},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign){var r=e.info,n=e.se,a=h.get(r);a||(a=r.match(x),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(y,function(e,t,r){a.p[t]=r}),h.set(r,a));var o=a.n+d+e.st,s=t[o];if(s){var c=p[a.f];c&&c.call(p,n),i(s,f({currentId:e.cId,targetId:e.tId,type:e.st,domEvent:n,params:a.p},p),t)}}},delegateEvents:function(e){var t=this,r=t.$evts,i=e?n.un:n.on,a=t.vom;for(var o in r)i.call(n,o,a)}});var C,E="?t="+Date.now(),M={},T={};return b.prototype.fetchTmpl=function(e){var t=this,r="template"in t;if(r)e(t.template);else if(a(M,t.path))e(M[t.path]);else{var n=t.path.indexOf("/");if(!C){var o=t.path.substring(0,n);C=seajs.data.paths[o]}var s=t.path.substring(n+1),c=C+s+".html",f=T[c],u=function(r){e(M[t.path]=r)};f?f.push(u):(f=T[c]=[u],$.ajax({url:c+E,success:function(e){i(f,e),delete T[c]},error:function(e,t){i(f,t),delete T[c]}}))}},b.extend=function(e,r,n){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&i(r,arguments,this)};return o.extend=a.extend,t.extend(o,a,e,n)},b}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e){var t=e("magix/vframe"),r=e("magix/magix"),n=e("magix/event"),i=r.has,a=r.mix,o=0,s=0,c=0,f=0,u={},m={},v=r.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,v.fire("add",{vframe:e})),e.owner=v},get:function(e){return u[e]},remove:function(e,t){var r=u[e];r&&(o--,t&&s--,delete u[e],v.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){s++;var e=s/o;e>c&&v.fire("progress",{percent:c=e},f=1==e)}},root:function(){return t.root(v,m)},locChged:function(e){var t,r=e.loc;if(r?t=1:r=e.location,a(m,r),!t){var n=v.root(),i=e.changed;i.isView()?n.mountView(r.view):n.locChged(r,i)}}},n);return v}),define("mxext/mmanager",["magix/magix","magix/event"],function(e){var t=e("magix/magix"),r=e("magix/event"),n=t.has,i=t.safeExec,a=t.mix,o=t.isFunction,s=12e5,c=Date.now||function(){return+new Date},f=c(),u=function(e){var r=this;r.$mClass=e,r.$mCache=t.cache(),r.$mCacheKeys={},r.$mMetas={},r.id="mm"+f--},m=[].slice,v={urlParams:1,postParams:1,cacheKey:1,cacheTime:1,cache:1,before:1,after:1},h=function(e,t,r){return function(){return e.apply(t,[t,r].concat(m.call(arguments)))}},l=function(e){return e&&e.manage},d=function(e,t,r){var n=r.key,a=r.cKeys,o=a[n];if(o){var s=o.q;delete a[n],i(s,e)}},g=function(e){return function(){var t=new y(this),r=arguments,n=r[r.length-1];return l(n)&&(n.manage(t.id,t),r=m.call(r,0,-1)),t[e].apply(t,r)}},p=function(e,t){return function(r,n){var i=m.call(arguments,1);return this.send(r,i.length>1?i:n,e,t)}};a(u,{create:function(e){if(!e)throw Error("ungiven modelClass");return new u(e)}});var x={ALL:1,ONE:2,ORDER:4},y=function(e){this.$host=e,this.$doTask=!1,this.$reqModels={},this.id="mr"+f--};return a(y.prototype,{send:function(e,a,o,s){var f=this;if(f.$doTask)return f.next(function(){this.send(e,a,o,s)}),f;f.$doTask=!0;var u=f.$host,m=u.$mCache,v=u.$mCacheKeys,l=f.$reqModels;t.isArray(e)||(e=[e]);var g,p,y,w=e.length,b=0,$=Array(w),C=[],E={},M=[],T=t.isArray(a);T&&(C=Array(a.length));for(var O,P=function(e,t,n){if(!f.$destroy){b++,delete l[e.id];var s=e.$mm,v=s.cacheKey;if($[t]=e,n)g=!0,y=!0,p=n,E.msg=n,E[t]=n;else{if(y=!1,!v||v&&!m.has(v)){v&&m.set(v,e),s.doneAt=c();var h=s.after,d=s.meta;h&&i(h,[e,d]),r.fire.call(u,"done",{model:s,meta:d})}!e.fromCache&&s.used>0&&(e.fromCache=!0),s.used++}if(o==x.ONE){var O=T?a[t]:a;O&&(C[t]=i(O,[y?E:null,e,E],f))}else if(o==x.ORDER){M[t]={m:e,e:y,s:n};for(var P,V,A=M.i||0;P=M[A];A++)V=T?a[A]:a,P.e&&(E.msg=P.s,E[A]=P.s),C[A]=i(V,[P.e?E:null,P.m,E].concat(C),f);M.i=A}b>=w&&(g||(E=null),o==x.ALL?($.unshift(E),C[0]=E,C[1]=i(a,$,f)):C.unshift(E),f.$ntId=setTimeout(function(){f.doNext(C)},30))}},V=0;e.length>V;V++){if(O=e[V],!O)throw Error("miss attrs:"+e);var A=u.getModel(O,s),j=A.cKey,k=A.entity,I=h(P,k,V);I.id=f.id,j&&n(v,j)?v[j].q.push(I):A.update?(l[k.id]=k,j&&(v[j]={q:[I],e:k},I=d),k.request(I,{key:j,cKeys:v})):I()}return f},fetchAll:function(e,t){return this.send(e,t,x.ALL)},saveAll:function(e,t){return this.send(e,t,x.ALL,1)},fetchOrder:p(x.ORDER),saveOrder:p(x.ORDER,1),saveOne:p(x.ONE,1),fetchOne:p(x.ONE),abort:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqModels,a=t.$mCacheKeys;for(var o in r){var s=r[o],c=s.$mm.cacheKey;if(c&&n(a,c)){for(var f,u=a[c],m=u.q,v=[],h=[],l=0;m.length>l;l++)f=m[l],f.id!=e.id?v.push(f):e.$destroy||h.push(f);i(h,["abort"],e),v.length?u.q=v:s.abort()}else s.abort()}e.$reqModels={},e.$queue=[],e.$doTask=!1},next:function(e){var t=this;if(t.$queue||(t.$queue=[]),t.$queue.push(e),!t.$doTask){var r=t.$latest;t.doNext(r)}return t},doNext:function(e){var t=this;t.$doTask=!1;var r=t.$queue;if(r){var n=r.shift();n&&i(n,e,t)}t.$latest=e},destroy:function(){var e=this;e.$destroy=!0,e.abort()}}),a(u.prototype,{registerModels:function(e){var r=this,n=r.$mMetas;t.isArray(e)||(e=[e]);for(var i,a,o=0;e.length>o;o++){if(i=e[o],a=i.name,i&&!a)throw Error("miss name attribute");if(n[a])throw Error("already exist:"+a);i.cache&&(i.cacheKey||(i.cacheKey=a),i.cacheTime||(i.cacheTime=s)),n[a]=i}},registerMethods:function(e){var t=this;a(t,e)},createModel:function(e){var t=this,n=t.getModelMeta(e),a=new t.$mClass;a.set(n,v),a.$mm={used:0};var s=e.before||n.before;o(s)&&i(s,[a,n,e]);var c=e.after||n.after;a.$mm.after=c;var f=e.cacheKey||n.cacheKey;return o(f)&&(f=i(f,[n,e])),a.$mm.cacheKey=f,a.$mm.meta=n,a.set(e,v),a.setUrlParams(n.urlParams),a.setPostParams(n.postParams),a.setUrlParams(e.urlParams),a.setPostParams(e.postParams),r.fire.call(t,"init",{model:a,meta:n}),a},getModelMeta:function(e){var r,n=this,i=n.$mMetas;r=t.isString(e)?e:e.name;var a=i[r];if(!a)throw Error("Unfound:"+r);return a},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=!0,r=i.createModel(e)),{entity:r,cKey:r.$mm.cacheKey,update:n}},saveAll:g("saveAll"),fetchAll:g("fetchAll"),saveOrder:g("saveOrder"),fetchOrder:g("fetchOrder"),saveOne:g("saveOne"),fetchOne:g("fetchOne"),createMRequest:function(e){var t=new y(this);return l(e)&&e.manage(t.id,t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.c,i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.cacheKey)}}},getCachedModel:function(e){var r,n,a=this,s=a.$mCache,f=null;if(t.isString(e)?r=e:(n=a.getModelMeta(e),r=e.cacheKey||n.cacheKey,o(r)&&(r=i(r,[n,e]))),r){var u=a.$mCacheKeys,m=u[r];if(m)f=m.e;else if(f=s.get(r)){n||(n=f.$mm.meta);var v=e.cacheTime||n.cacheTime||0;o(v)&&(v=i(v,[n,e])),v>0&&c()-f.$mm.doneAt>v&&(a.clearCacheByKey(r),f=null)}}return f}}),u}),define("mxext/model",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e,r){var n=this,i=function(){i.superclass.constructor.apply(this,arguments),r&&t.safeExec(r,arguments,this)};return t.mix(i,n,{prototype:!0}),t.extend(i,n,e)},n=+new Date,i=function(e){e&&this.set(e),this.id="m"+n--},a=encodeURIComponent;return t.mix(i,{GET:"GET",POST:"POST",extend:r}),t.mix(i.prototype,{sync:t.noop,parse:function(e){return e},getPostParams:function(){return this.getParams(i.POST)},getUrlParams:function(){return this.getParams(i.GET)},getParams:function(e){var r=this;e=e?e.toUpperCase():i.GET;var n,o="$"+e,s=r[o],c=[];if(s)for(var f in s)if(n=s[f],t.isArray(n))for(var u=0;n.length>u;u++)c.push(f+"="+a(n[u]));else c.push(f+"="+a(n));return c.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,i.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,i.POST,!0)},setParams:function(e,r,n,a){n=n?n.toUpperCase():i.GET;var o=this;o.$types||(o.$types={}),o.$types[n]=!0;var s="$"+n;if(o[s]||(o[s]={}),t.isObject(e))for(var c in e)a&&o[s][c]||(o[s][c]=e[c]);else e&&(a&&o[s][e]||(o[s][e]=r))},setPostParams:function(e,t){var r=this;r.setParams(e,t,i.POST)},setUrlParams:function(e,t){this.setParams(e,t,i.GET)},reset:function(){var e=this,r=e.$types;if(r){for(var n in r)t.has(r,n)&&delete e["$"+n];delete e.$types}var i=e.$keys,a=e.$attrs;if(i){for(var o=0;i.length>o;o++)delete a[i[o]];delete e.$keys}},get:function(e,t){var r=this,n=arguments.length,i=!n,a=2==n,o=r.$attrs;return o&&(o=i?o:o[e]),a&&!o&&(o=t),o},set:function(e,r,n){var i=this;if(i.$attrs||(i.$attrs={}),n&&!i.$keys&&(i.$keys=[]),t.isObject(e)){t.isObject(r)||(r={});for(var a in e)n&&i.$keys.push(a),t.has(r,a)||(i.$attrs[a]=e[a])}else e&&(n&&i.$keys.push(e),i.$attrs[e]=r)},request:function(e,r){e||(e=function(){});var n=this;n.$abort=!1;var i=function(i,a){if(n.$abort)e("abort",null,r);else if(i)e(i,a,r);else{if(a){var o=n.parse(a);t.isObject(o)||(o={data:o}),n.set(o,null,!0)}e(i,a,r)}};n.$trans=n.sync(i)},abort:function(){var e=this,t=e.$trans;t&&t.abort&&t.abort(),delete e.$trans,e.$abort=!0},isAborted:function(){return this.$abort}}),i}),define("mxext/view",["magix/magix","magix/view","magix/router"],function(e){var t=e("magix/magix"),r=e("magix/view"),n=e("magix/router"),i=window,a=t.mix,o=function(e){i.clearTimeout(e),i.clearInterval(e)},s=function(e){f(e.destroy,[],e)},c=0,f=t.safeExec,u=t.has,m=r.extend({navigate:function(){n.navigate.apply(n,arguments)},manage:function(e,r){var n=this,i=arguments,a=!0;1==i.length&&(r=e,e="res_"+c++,a=!1),n.$res||(n.$res={});var f;t.isNumber(r)?f=o:r&&r.destroy&&(f=s);var u={hasKey:a,res:r,sign:n.sign,destroy:f};return n.$res[e]=u,r},getManaged:function(e){var t=this,r=t.$res;if(r&&u(r,e)){var n=r[e],i=n.res;return i}return null},removeManaged:function(e){var t=this,r=null,n=t.$res;return n&&u(n,e)&&(r=n[e].res,delete n[e]),r},destroyManaged:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r];if(n.sign!=e.sign){var i=n.res,a=n.destroy,o=!1;a&&(a(i),o=!0),n.hasKey||delete t[r],e.fire("destroyManaged",{resource:i,processed:o})}}},destroyMRequest:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r],i=n.res;i&&i.fetchOne&&i.fetchAll&&(i.destroy(),delete t[r])}}},function(){var e=this;e.on("interact",function(){e.on("rendercall",e.destroyMRequest),e.on("prerender",e.destroyManaged),e.on("destroy",e.destroyManaged)}),f(m.ms,arguments,e)},{ms:[],mixin:function(e,t){m.ms.push(t),a(m.prototype,e)}});return m}),document.createElement("vframe");