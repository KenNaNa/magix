KISSY.add("magix/magix",function(e){var t=[].slice,r=/\/\.\/|\/[^\/]+?\/\.{2}\/|([^:\/])\/\/+/,n=/\/[^\/]*$/,i=/[#?].*$/,a="",o=/([^=&?\/#]+)=?([^&=#?]*)/g,s="pathname",c=/^https?:\/\//i,f=0,u="/",h="vframe",v=function(){throw Error("unimplement method")},d=function(){},m={tagName:h,rootId:"magix_vf_root",execError:d},l={}.hasOwnProperty,p=function(e,t){return e?l.call(e,t):e},g=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=E.isObject(t)?w(e,t):p(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},y=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},x=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(isNaN(t)?5:t),void 0):new x(e,t)},w=function(e,t,r){for(var n in t)r&&p(r,n)||(e[n]=t[n]);return e};w(x.prototype,{get:function(e){var t,r=this,n=r.c;return e=s+e,p(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},set:function(e,t,r){var n=this,i=n.c,a=s+e,o=i[a];if(!p(i,a)){if(i.length>=n.b){i.sort(y);for(var c=n.b-n.x;c--;)o=i.pop(),delete i[o.k],o.m&&C(o.m,o.o,o)}o={},i.push(o),i[a]=o}return o.o=e,o.k=a,o.v=t,o.f=1,o.t=f++,o.m=r,t},del:function(e){e=s+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=a,delete t[e],r.m&&(C(r.m,r.o,r),r.m=0))},has:function(e){return e=s+e,p(this.c,e)}});var b=x(60),$=x(),C=function(e,t,r,n,i,a){for(E.isArray(e)||(e=[e]),t&&(E.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){m.execError(o)}return i},E={isArray:v,isObject:v,isFunction:v,isRegExp:v,isString:v,isNumber:v,isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},libRequire:v,include:v,mix:w,unimpl:v,has:p,safeExec:C,noop:d,config:g(m),start:function(e){var t=this;w(m,e),t.libRequire(m.iniFile,function(r){m=w(m,r,e),m.tagNameChanged=m.tagName!=h;var n=m.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(m.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)p(e,r)&&t.push(r);return t},local:g({}),path:function(e,t){var o=e+"\n"+t,s=$.get(o);if(!s){if(c.test(t))s=t;else if(e=e.replace(i,a).replace(n,a)+u,t.charAt(0)==u){var f=c.test(e)?8:0,h=e.indexOf(u,f);s=e.substring(0,h)+t}else s=e+t;for(;r.test(s);)s=s.replace(r,"$1/");$.set(o,s)}return s},pathToObject:function(e,t){var r=b.get(e);if(!r){r={};var n={},f=a;i.test(e)?f=e.replace(i,a):~e.indexOf("=")||(f=e);var h=e.replace(f,a);if(f&&c.test(f)){var v=f.indexOf(u,8);f=~v?f.substring(v):u}h.replace(o,function(e,r,i){if(t)try{i=decodeURIComponent(i)}catch(a){}n[r]=i}),r[s]=f,r.params=n,b.set(e,r)}return r},objectToPath:function(e,t,r){var n,i=e[s],a=[],o=e.params;for(var c in o)n=o[c],(!r||n||p(r,c))&&(t&&(n=encodeURIComponent(n)),a.push(c+"="+n));return a.length&&(i=i+"?"+a.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(E.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:x};return w(E,{libRequire:function(r,n){r?e.use(r+"",function(e){n&&n.apply(e,t.call(arguments,1))}):n&&n()},isArray:e.isArray,isFunction:e.isFunction,isObject:e.isObject,isRegExp:e.isRegExp,isString:e.isString,isNumber:e.isNumber})}),KISSY.add("magix/router",function(e,t,r,n){var i,a,o,s,c=window,f="",u="pathname",h=t.has,v=t.mix,d=document,m=/^UTF-8$/i.test(d.charset||d.characterSet||"UTF-8"),l=t.config(),p=t.cache(),g=t.cache(40),y={params:{},href:f},x=/#.*$/,w=/^[^#]*#?!?/,b="params",$=l.nativeHistory,C=function(e,r,n){if(e){n=this[b],t.isString(e)&&(e=e.split(","));for(var i=0;e.length>i&&!(r=h(n,e[i]));i++);}return r},E=function(){return h(this,u)},M=function(){return h(this,"view")},S=function(e,t,r){return t=this,r=t[b],r[e]},T=function(e){var r=t.pathToObject(e,m),n=r[u];return n&&s&&(r[u]=t.path(c.location[u],n)),r},I=v({getView:function(e,r){if(!a){a={rs:l.routes||{},nf:l.notFoundView};var n=l.defaultView;if(!n)throw Error("unset defaultView");a.home=n;var i=l.defaultPathname||f;a.rs[i]=n,a[u]=i}var o;e||(e=a[u]);var s=a.rs;return o=t.isFunction(s)?s.call(l,e,r):s[e],{view:o?o:a.nf||a.home,pathname:o||$?e:a.nf?e:a[u]}},start:function(){var e=I,t=c.history;o=$&&t.pushState,s=$&&!o,o?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||c.location.href;var r=I,n=p.get(e);if(!n){var i=e.replace(x,f),a=e.replace(w,f),o=T(i),s=T(a),h={};v(h,o[b]),v(h,s[b]),n={get:S,href:e,refHref:y.href,srcQuery:i,srcHash:a,query:o,hash:s,params:h},p.set(e,n)}if(t&&!n.view){var d;d=$?n.hash[u]||n.query[u]:n.hash[u];var m=r.getView(d,n);v(n,m)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=g.get(i);if(a||(i=n+"\n"+i,a=g.get(i)),!a){var o,s,c;a={params:{}},s=e[u],c=t[u],s!=c&&(a[u]={from:s,to:c},o=1),s=e.view,c=t.view,s!=c&&(a.view={from:s,to:c},o=1);var f,h=e[b],v=t[b];for(f in h)s=h[f],c=v[f],h[f]!=v[f]&&(o=1,a[b][f]={from:s,to:c});for(f in v)s=h[f],c=v[f],h[f]!=v[f]&&(o=1,a[b][f]={from:s,to:c});a.occur=o,a.isParam=C,a.isPathname=E,a.isView=M,g.set(i,a)}return a},route:function(){var e=I,t=e.parseQH(0,1),r=!y.get,n=e.getChged(y,t);y=t,n.occur&&(i=t,e.fire("changed",{location:t,changed:n,force:r}))},navigate:function(e,r,n){var a=I;if(!r&&t.isObject(e)&&(r=e,e=f),r&&(e=t.objectToPath({params:r,pathname:e},m)),e){var c=T(e),d={};if(d[b]=v({},c[b]),d[u]=c[u],d[u]){if(s){var l=i.query[b];for(var p in l)h(l,p)&&!h(d[b],p)&&(d[b][p]=f)}}else{var g=v({},i[b]);d[b]=v(g,d[b]),d[u]=i[u]}var y,x=t.objectToPath(d,m,i.query[b]);y=o?x!=i.srcQuery:x!=i.srcHash,y&&(o?(a.poped=1,history[n?"replaceState":"pushState"](null,null,x),a.route()):(v(d,i,d),d.srcHash=x,d.hash={params:d[b],pathname:d[u]},a.fire("!ul",{loc:i=d}),x="#!"+x,n?location.replace(x):location.hash=x))}}},r);return I.useState=function(){var e=I,t=location.href;n.on(c,"popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())})},I.useHash=function(){n.on(c,"hashchange",I.route)},I},{requires:["magix/magix","magix/event","event"]}),KISSY.add("magix/body",function(e,t){var r,n=t.has,i=t.mix,a={},o=document.body,s={},c=String.fromCharCode(26),f="mx-owner",u="mx-ei",h={},v=65536,d=function(e){return e.id||(e.id="mx-e-"+v--)},m=function(e,t,r){return r?e.setAttribute(t,r):e&&e.getAttribute&&(r=e.getAttribute(t)),r},l={special:function(e){i(a,e)},process:function(e){for(var t=e.target||e.srcElement;t&&1!=t.nodeType;)t=t.parentNode;var i=t,a=e.type,s=h[a]||(h[a]=RegExp("(?:^|,)"+a+"(?:,|$)"));if(!s.test(m(t,u))){for(var v,l,p="mx-"+a,g=[];i&&i!=o&&(v=m(i,p),l=m(i,u),!v&&!s.test(l));)g.push(i),i=i.parentNode;if(v){var y,x=v.split(c);x.length>1&&(y=x[0],v=x.pop());var w=m(i,f)||y;if(!w)for(var b=i,$=r.all();b&&b!=o;){if(n($,b.id)){m(i,f,w=b.id);break}b=b.parentNode}if(!w)throw Error("miss "+f+":"+v);var C=r.get(w),E=C&&C.view;E&&E.processEvent({info:v,se:e,st:a,tId:d(t),cId:d(i)})}else for(var M;g.length;)M=g.shift(),l=m(M,u),s.test(l)||(l=l?l+","+a:a,m(M,u,l))}},on:function(e,t){var n=this;if(!s[e]){r=t,s[e]=0;var i=a[e];i?n.lib(0,o,e):o["on"+e]=function(e){e=e||window.event,e&&n.process(e)}}s[e]++},un:function(e){var t=this,r=s[e];if(r>0){if(r--,!r){var n=a[e];n?t.lib(1,o,e):o["on"+e]=null}s[e]=r}}};return l},{requires:["magix/magix"]}),KISSY.add("magix/event",function(e,t){var r=function(e){return"~"+e},n=t.safeExec,i={fire:function(e,t,i,a){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,h=c.length,v=h-1;h--;)f=a?h:v-h,u=c[f],(u.d||u.r)&&(c.splice(f,1),v--),u.d||n(u.f,t,s)}i&&delete s[o]},on:function(e,n,i){var a=r(e),o=this[a]||(this[a]=[]);t.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},un:function(e,t){var n=r(e),i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]}};return i},{requires:["magix/magix"]}),KISSY.add("magix/vframe",function(e,t,r,n){var i,a,o,s=document,c=65536,f=t.safeExec,u=[].slice,h=t.mix,v=t.config("tagName"),d=t.config("rootId"),m=!t.config("tagNameChanged"),l=t.has,p="mx-view",g=m?"mx-defer":"mx-vframe",y="alter",x="created",w=function(e){return"object"==typeof e?e:s.getElementById(e)},b=function(e,t,r){return r=w(e),r?r.getElementsByTagName(t):[]},$=function(e){return e.id||(e.id="magix_vf_"+c--)},C=function(e,t,r){if(e=w(e),t=w(t),e&&t)if(e!==t)try{r=t.contains?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},E=/<script[^>]*>[\s\S]*?<\/script>/gi,M=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={}};return h(M,{root:function(e,t){if(!i){o=t;var r=w(d);r||(r=s.createElement(v),r.id=d,s.body.insertBefore(r,s.body.firstChild)),i=new M(d),e.add(i)}return i}}),h(h(M.prototype,r),{mountView:function(e,r,i){var a=this,s=w(a.id);if(s._bak?s._chgd=1:(s._bak=1,s._tmpl=s.innerHTML.replace(E,"")),a.unmountView(),e){var c=t.pathToObject(e),u=c.pathname,v=--a.sign;t.libRequire(u,function(e){if(v==a.sign){var t=a.owner;n.prepare(e);var d=new e({owner:a,id:a.id,$:w,path:u,vom:t,location:o});a.view=d,d.on("interact",function(e){e.tmpl||(s._chgd&&(s.innerHTML=s._tmpl),a.mountZoneVframes(0,0,1)),d.on("rendered",function(){a.mountZoneVframes(0,0,1)}),d.on("prerender",function(){a.unmountZoneVframes(0,1)||a.cAlter()}),d.on("inited",function(){a.viewInited=1,a.fire("viewInited",{view:d}),i&&f(i,d,a)})},0),r=r||{},d.load(h(r,c.params,r))}})}},unmountView:function(){var e=this;if(e.view){a||(a={}),e.unmountZoneVframes(0,1),e.cAlter(a),e.view.destroy();var t=w(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,a=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r){var n=this,i=n.owner,a=i.get(e);return a||(a=new M(e),a.pId=n.id,l(n.cM,e)||n.cC++,n.cM[e]=1,i.add(a)),a.mountView(t,r),a},mountZoneVframes:function(e,t){var r=this,n=e||r.id;r.unmountZoneVframes(n,1);var i=b(n,v),a=i.length,o={};if(a)for(var s,c,f,u,h=0;a>h;h++)if(s=i[h],c=$(s),!l(o,c)&&(f=s.getAttribute(p),u=!s.getAttribute(g),u=u==m,u||f)){r.mountVframe(c,f,t);for(var d,y=b(s,v),x=0,w=y.length;w>x;x++)d=y[x],f=d.getAttribute(p),u=!d.getAttribute(g),u=u==m,u||f||(o[$(d)]=1)}r.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=r.owner,i=n.get(e);if(i){var a=i.fcc;i.unmountView(),n.remove(e,a),r.fire("destroy");var o=n.get(i.pId);o&&l(o.cM,e)&&(delete o.cM[e],o.cC--,t||o.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i,a=this;if(e){var o=a.cM,s={};for(i in o)C(i,e)&&(s[i]=1);r=s}else r=a.cM;for(i in r)n=1,a.unmountVframe(i,1);return t||a.cCreated(),n},invokeView:function(e){var t,r=this,n=r.view,i=u.call(arguments,1);return r.viewInited&&n[e]&&(t=f(n[e],i,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(x,e),t.fire(x,e));var n=t.owner;n.vfCreated();var i=t.id,a=n.get(t.pId);a&&!l(a.rM,i)&&(a.rM[i]=a.cM[i],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(y,e),t.fire(y,e));var i=t.owner,a=i.get(t.pId);a&&l(a.rM,n)&&(a.rC--,delete a.rM[n],a.cAlter(e))}},locChged:function(e,r){var n=this,i=n.view;if(i&&i.sign>0&&i.rendered){var a=i.olChanged(r),o={location:e,changed:r,prevent:function(){this.cs=[]},toChildren:function(e){e=e||[],t.isString(e)&&(e=e.split(",")),this.cs=e}};a&&f(i.locationChange,o,i);for(var s,c=o.cs||t.keys(n.cM),u=0,h=c.length,v=n.owner;h>u;u++)s=v.get(c[u]),s&&s.locChged(e,r)}}}),M},{requires:["magix/magix","magix/event","magix/view"]}),KISSY.add("magix/view",function(e,t,r,n,i){var a=t.safeExec,o=t.has,s=",",c=[],f=t.noop,u=t.mix,h={render:1,renderUI:1},v="~",d=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},m=t.cache(40),l=/\smx-(?!view|defer|owner)[a-z]+\s*=\s*"/g,p=String.fromCharCode(26),g=function(){this.render()},y={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},x=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,w=/(\w+):([^,]+)/g,b=/([$\w]+)<([\w,]+)>/,$=function(e){var t=this;u(t,e),t.sign=1,a($.ms,[e],t)};$.ms=[],$.prepare=function(e){var t=this,r=e.superclass;if(r&&t.prepare(r.constructor),!e[v]){e[v]=1,e.extend=t.extend;var n,i,a,c,u,m=e.prototype,l={};for(var g in m)if(o(m,g))if(n=m[g],i=g.match(b))for(a=i[1],c=i[2],c=c.split(s),u=c.length-1;u>-1;u--)i=c[u],l[i]=1,m[a+p+i]=n;else o(h,g)&&n!=f&&(m[g]=d(n));c&&(m.$evts=l)}},$.mixin=function(e,t){$.ms.push(t),u($.prototype,e)},u(u($.prototype,r),{render:f,locationChange:f,init:f,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=e.sign,i=o(e,"template"),s=function(o){if(n==e.sign){i||(e.template=e.wrapMxEvent(o)),e.delegateEvents(),e.fire("interact",{tmpl:t},1),a(e.init,r,e),e.fire("inited",0,1),a(e.render,c,e);var s=!t&&!e.rendered;s&&(e.rendered=!0,e.fire("primed",null,1))}};t&&!i?e.fetchTmpl(s):s()},beginUpdate:function(){var e=this;e.sign&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign&&(e.rendered||e.fire("primed",0,1),e.rendered=!0,e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(l,"$&"+this.id+p)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;t.isObject(e)&&(r.pn=e.pathname,e=e.keys),e&&(r.keys=i.concat((e+"").split(s))),n.locationChange==f&&(n.locationChange=g)},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},destroy:function(){var e=this;e.sign>0&&(e.sign=0),e.sign--,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1)},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign){var r=e.info,n=e.se,i=m.get(r);i||(i=r.match(x),i={n:i[1],f:i[2],i:i[3],p:{}},i.i&&i.i.replace(w,function(e,t,r){i.p[t]=r}),m.set(r,i));var o=i.n+p+e.st,s=t[o];if(s){var c=y[i.f];c&&c.call(y,n),a(s,u({currentId:e.cId,targetId:e.tId,type:e.st,domEvent:n,params:i.p},y),t)}}},delegateEvents:function(e){var t=this,r=t.$evts,i=e?n.un:n.on,a=t.vom;for(var o in r)i.call(n,o,a)}});var C,E,M="?t="+e.now(),S={},T={};return $.prototype.fetchTmpl=function(t){var r=this,n="template"in r;if(n)t(r.template);else if(o(S,r.path))t(S[r.path]);else{if(!C){var s=r.path.substring(0,r.path.indexOf("/"));E=e.Config.packages[s],C=E.base||E.path}var c=r.path;E.ignorePackageNameInUri&&(c=c.replace(E.name,""));var f=C+c+".html",u=T[f],h=function(e){t(S[r.path]=e)};u?u.push(h):(u=T[f]=[h],i({url:f+M,success:function(e){a(u,e),delete T[f]},error:function(e,t){a(u,t),delete T[f]}}))}},$.extend=function(t,r,n){var i=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&a(r,arguments,this)};return o.extend=i.extend,e.extend(o,i,t,n)},$},{requires:["magix/magix","magix/event","magix/body","ajax"]}),KISSY.add("magix/vom",function(e,t,r,n){var i=r.has,a=r.mix,o=0,s=0,c=0,f=0,u={},h={},v=r.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,v.fire("add",{vframe:e})),e.owner=v},get:function(e){return u[e]},remove:function(e,t){var r=u[e];r&&(o--,t&&s--,delete u[e],v.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){s++;var e=s/o;e>c&&v.fire("progress",{percent:c=e},f=1==e)}},root:function(){return t.root(v,h)},locChged:function(e){var t,r=e.loc;if(r?t=1:r=e.location,a(h,r),!t){var n=v.root(),i=e.changed;i.isView()?n.mountView(r.view):n.locChged(r,i)}}},n);return v},{requires:["magix/vframe","magix/magix","magix/event"]}),KISSY.add("mxext/mmanager",function(e,t,r){var n=t.has,i=t.safeExec,a=t.mix,o=t.isFunction,s=12e5,c=Date.now||function(){return+new Date},f=c(),u=function(e){var r=this;r.$mClass=e,r.$mCache=t.cache(),r.$mCacheKeys={},r.$mMetas={},r.id="mm"+f--},h=[].slice,v={urlParams:1,postParams:1,cacheKey:1,cacheTime:1,cache:1,before:1,after:1},d=function(e,t,r){return function(){return e.apply(t,[t,r].concat(h.call(arguments)))}},m=function(e){return e&&e.manage},l=function(e,t,r){var n=r.key,a=r.cKeys,o=a[n];if(o){var s=o.q;delete a[n],i(s,e)}},p=function(e){return function(){var t=new x(this),r=arguments,n=r[r.length-1];return m(n)&&(n.manage(t.id,t),r=h.call(r,0,-1)),t[e].apply(t,r)}},g=function(e,t){return function(r,n){var i=h.call(arguments,1);return this.send(r,i.length>1?i:n,e,t)}};a(u,{create:function(e){if(!e)throw Error("ungiven modelClass");return new u(e)}});var y={ALL:1,ONE:2,ORDER:4},x=function(e){this.$host=e,this.$doTask=!1,this.$reqModels={},this.id="mr"+f--};return a(x.prototype,{send:function(e,a,o,s){var f=this;if(f.$doTask)return f.next(function(){this.send(e,a,o,s)}),f;f.$doTask=!0;var u=f.$host,h=u.$mCache,v=u.$mCacheKeys,m=f.$reqModels;t.isArray(e)||(e=[e]);var p,g,x,w=e.length,b=0,$=Array(w),C=[],E={},M=[],S=t.isArray(a);S&&(C=Array(a.length));for(var T,I=function(e,t,n){if(!f.$destroy){b++,delete m[e.id];var s=e.$mm,v=s.cacheKey;if($[t]=e,n)p=!0,x=!0,g=n,E.msg=n,E[t]=n;else{if(x=!1,!v||v&&!h.has(v)){v&&h.set(v,e),s.doneAt=c();var d=s.after,l=s.meta;d&&i(d,[e,l]),r.fire.call(u,"done",{model:s,meta:l})}!e.fromCache&&s.used>0&&(e.fromCache=!0),s.used++}if(o==y.ONE){var T=S?a[t]:a;T&&(C[t]=i(T,[x?E:null,e,E],f))}else if(o==y.ORDER){M[t]={m:e,e:x,s:n};for(var I,O,P=M.i||0;I=M[P];P++)O=S?a[P]:a,I.e&&(E.msg=I.s,E[P]=I.s),C[P]=i(O,[I.e?E:null,I.m,E].concat(C),f);M.i=P}b>=w&&(p||(E=null),o==y.ALL?($.unshift(E),C[0]=E,C[1]=i(a,$,f)):C.unshift(E),f.$ntId=setTimeout(function(){f.doNext(C)},30))}},O=0;e.length>O;O++){if(T=e[O],!T)throw Error("miss attrs:"+e);var P=u.getModel(T,s),V=P.cKey,k=P.entity,A=d(I,k,O);A.id=f.id,V&&n(v,V)?v[V].q.push(A):P.update?(m[k.id]=k,V&&(v[V]={q:[A],e:k},A=l),k.request(A,{key:V,cKeys:v})):A()}return f},fetchAll:function(e,t){return this.send(e,t,y.ALL)},saveAll:function(e,t){return this.send(e,t,y.ALL,1)},fetchOrder:g(y.ORDER),saveOrder:g(y.ORDER,1),saveOne:g(y.ONE,1),fetchOne:g(y.ONE),abort:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqModels,a=t.$mCacheKeys;for(var o in r){var s=r[o],c=s.$mm.cacheKey;if(c&&n(a,c)){for(var f,u=a[c],h=u.q,v=[],d=[],m=0;h.length>m;m++)f=h[m],f.id!=e.id?v.push(f):e.$destroy||d.push(f);i(d,["abort"],e),v.length?u.q=v:s.abort()}else s.abort()}e.$reqModels={},e.$queue=[],e.$doTask=!1},next:function(e){var t=this;if(t.$queue||(t.$queue=[]),t.$queue.push(e),!t.$doTask){var r=t.$latest;t.doNext(r)}return t},doNext:function(e){var t=this;t.$doTask=!1;var r=t.$queue;if(r){var n=r.shift();n&&i(n,e,t)}t.$latest=e},destroy:function(){var e=this;e.$destroy=!0,e.abort()}}),a(u.prototype,{registerModels:function(e){var r=this,n=r.$mMetas;t.isArray(e)||(e=[e]);for(var i,a,o=0;e.length>o;o++){if(i=e[o],a=i.name,i&&!a)throw Error("miss name attribute");if(n[a])throw Error("already exist:"+a);i.cache&&(i.cacheKey||(i.cacheKey=a),i.cacheTime||(i.cacheTime=s)),n[a]=i}},registerMethods:function(e){var t=this;a(t,e)},createModel:function(e){var t=this,n=t.getModelMeta(e),a=new t.$mClass;a.set(n,v),a.$mm={used:0};var s=e.before||n.before;o(s)&&i(s,[a,n,e]);var c=e.after||n.after;a.$mm.after=c;var f=e.cacheKey||n.cacheKey;return o(f)&&(f=i(f,[n,e])),a.$mm.cacheKey=f,a.$mm.meta=n,a.set(e,v),a.setUrlParams(n.urlParams),a.setPostParams(n.postParams),a.setUrlParams(e.urlParams),a.setPostParams(e.postParams),r.fire.call(t,"init",{model:a,meta:n}),a},getModelMeta:function(e){var r,n=this,i=n.$mMetas;r=t.isString(e)?e:e.name;var a=i[r];if(!a)throw Error("Unfound:"+r);return a},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=!0,r=i.createModel(e)),{entity:r,cKey:r.$mm.cacheKey,update:n}},saveAll:p("saveAll"),fetchAll:p("fetchAll"),saveOrder:p("saveOrder"),fetchOrder:p("fetchOrder"),saveOne:p("saveOne"),fetchOne:p("fetchOne"),createMRequest:function(e){var t=new x(this);return m(e)&&e.manage(t.id,t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.c,i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.cacheKey)}}},getCachedModel:function(e){var r,n,a=this,s=a.$mCache,f=null;if(t.isString(e)?r=e:(n=a.getModelMeta(e),r=e.cacheKey||n.cacheKey,o(r)&&(r=i(r,[n,e]))),r){var u=a.$mCacheKeys,h=u[r];if(h)f=h.e;else if(f=s.get(r)){n||(n=f.$mm.meta);var v=e.cacheTime||n.cacheTime||0;o(v)&&(v=i(v,[n,e])),v>0&&c()-f.$mm.doneAt>v&&(a.clearCacheByKey(r),f=null)}}return f}}),u},{requires:["magix/magix","magix/event"]}),KISSY.add("mxext/model",function(e,t){var r=function(r,n){var i=function(){i.superclass.constructor.apply(this,arguments),n&&t.safeExec(n,[],this)};return t.mix(i,this,{prototype:!0}),e.extend(i,this,r)},n=+new Date,i=function(e){e&&this.set(e),this.id="m"+n--},a=encodeURIComponent;return t.mix(i,{GET:"GET",POST:"POST",extend:r}),t.mix(i.prototype,{sync:t.noop,parse:function(e){return e},getPostParams:function(){return this.getParams(i.POST)},getUrlParams:function(){return this.getParams(i.GET)},getParams:function(e){var r=this;e=e?e.toUpperCase():i.GET;var n,o="$"+e,s=r[o],c=[];if(s)for(var f in s)if(n=s[f],t.isArray(n))for(var u=0;n.length>u;u++)c.push(f+"="+a(n[u]));else c.push(f+"="+a(n));return c.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,i.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,i.POST,!0)},setParams:function(e,r,n,a){n=n?n.toUpperCase():i.GET;var o=this;o.$types||(o.$types={}),o.$types[n]=!0;var s="$"+n;if(o[s]||(o[s]={}),t.isObject(e))for(var c in e)a&&o[s][c]||(o[s][c]=e[c]);else e&&(a&&o[s][e]||(o[s][e]=r))},setPostParams:function(e,t){var r=this;r.setParams(e,t,i.POST)},setUrlParams:function(e,t){this.setParams(e,t,i.GET)},reset:function(){var e=this,r=e.$types;if(r){for(var n in r)t.has(r,n)&&delete e["$"+n];delete e.$types}var i=e.$keys,a=e.$attrs;if(i){for(var o=0;i.length>o;o++)delete a[i[o]];delete e.$keys}},get:function(e,t){var r=this,n=arguments.length,i=!n,a=2==n,o=r.$attrs;return o&&(o=i?o:o[e]),a&&!o&&(o=t),o},set:function(e,r,n){var i=this;if(i.$attrs||(i.$attrs={}),n&&!i.$keys&&(i.$keys=[]),t.isObject(e)){t.isObject(r)||(r={});for(var a in e)n&&i.$keys.push(a),t.has(r,a)||(i.$attrs[a]=e[a])}else e&&(n&&i.$keys.push(e),i.$attrs[e]=r)},request:function(e,r){e||(e=function(){});var n=this;n.$abort=!1;var i=function(i,a){if(n.$abort)e("abort",null,r);else if(i)e(i,a,r);else{if(a){var o=n.parse(a);t.isObject(o)||(o={data:o}),n.set(o,null,!0)}e(i,a,r)}};n.$trans=n.sync(i)},abort:function(){var e=this,t=e.$trans;t&&t.abort&&t.abort(),delete e.$trans,e.$abort=!0},isAborted:function(){return this.$abort}}),i},{requires:["magix/magix"]}),KISSY.add("mxext/view",function(e,t,r,n){var i=window,a=t.mix,o=function(e){i.clearTimeout(e),i.clearInterval(e)},s=function(e){f(e.destroy,[],e)},c=0,f=t.safeExec,u=t.has,h=r.extend({navigate:function(){n.navigate.apply(n,arguments)},manage:function(e,r){var n=this,i=arguments,a=!0;1==i.length&&(r=e,e="res_"+c++,a=!1),n.$res||(n.$res={});var f;t.isNumber(r)?f=o:r&&r.destroy&&(f=s);var u={hasKey:a,res:r,sign:n.sign,destroy:f};return n.$res[e]=u,r},getManaged:function(e){var t=this,r=t.$res;if(r&&u(r,e)){var n=r[e],i=n.res;return i}return null},removeManaged:function(e){var t=this,r=null,n=t.$res;return n&&u(n,e)&&(r=n[e].res,delete n[e]),r},destroyManaged:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r];if(n.sign!=e.sign){var i=n.res,a=n.destroy,o=!1;a&&(a(i),o=!0),n.hasKey||delete t[r],e.fire("destroyManaged",{resource:i,processed:o})}}},destroyMRequest:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r],i=n.res;i&&i.fetchOne&&i.fetchAll&&(i.destroy(),delete t[r])}}},function(){var e=this;e.on("interact",function(){e.on("rendercall",e.destroyMRequest),e.on("prerender",e.destroyManaged),e.on("destroy",e.destroyManaged)}),f(h.ms,arguments,e)},{ms:[],mixin:function(e,t){h.ms.push(t),a(h.prototype,e)}});return h},{requires:["magix/magix","magix/view","magix/router"]}),document.createElement("vframe");