KISSY.add("magix/magix",function(e){var t=[].slice,r=/\/\.\/|\/[^\/]+?\/\.{2}\/|([^:\/])\/\/+/,n=/\/[^\/]*$/,i=/[#?].*$/,a="",o=/([^=&?\/#]+)=([^&=#?]*)/g,s="pathname",c=/^https?:\/\//i,u={},f=0,v="/",l="vframe",h={iniFile:"app/ini",appName:"app",appHome:"./",tagName:l,rootId:"magix_vf_root"},d=u.hasOwnProperty,p=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=M.isObject(t)?w(e,t):y(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},m=function(e){var t=this;t.c=[],t.x=e||5,t.b=t.x+3},g=function(e){return new m(e)},y=function(e,t){return e?d.call(e,t):0},w=function(e,t,r){for(var n in t)r&&y(r,n)||(e[n]=t[n]);return e};w(m.prototype,{get:function(e){var t,r=this,n=r.c;return e=s+e,y(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},set:function(e,t){var r=this,n=r.c;e=s+e;var i=n[e];if(!y(n,e)){if(n.length>=r.b){n.sort(function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f});for(var a=r.b-r.x;a--;)i=n.pop(),delete n[i.k]}i={},n.push(i),n[e]=i}return i.k=e,i.v=t,i.f=1,i.t=f++,i},del:function(e){e=s+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=a,delete t[e])},has:function(e){return e=s+e,y(this.c,e)}});var x=g(20),b=g(),$=function(e,t,r,n,i,a){for(M.isArray(e)||(e=[e]),t&&(M.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=M.isFunction(a)&&a.apply(r,t)}catch(o){}return i},C=function(){},M={isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},mix:w,has:y,safeExec:$,noop:C,config:p(h),start:function(e){var t=this;e=w(h,e),t.libEnv(e),e.ready&&($(e.ready),delete e.ready),t.libRequire(e.iniFile,function(r){h=w(e,r,e),h.tagNameChanged=h.tagName!=l;var n=e.progress;t.libRequire(["magix/router","magix/vom"],function(r,i){r.on("!ul",i.locChged),r.on("changed",i.locChged),n&&i.on("progress",n),t.libRequire(e.extensions,r.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)y(e,r)&&t.push(r);return t},local:p({}),path:function(e,t){var o=e+"\n"+t,s=b.get(o);if(!s){if(c.test(t))s=t;else if(e=e.replace(i,a).replace(n,a)+v,t.charAt(0)==v){var u=c.test(e)?8:0,f=e.indexOf(v,u);s=e.substring(0,f)+t}else s=e+t;for(;r.test(s);)s=s.replace(r,"$1/");b.set(o,s)}return s},pathToObject:function(e,t){var r=x.get(e);if(!r){var r={},n={},u=a;if(i.test(e)?u=e.replace(i,a):~e.indexOf("=")||(u=e),u&&c.test(u)){var f=u.indexOf(v,8);u=-1==f?v:u.substring(f)}e.replace(o,function(e,r,i){if(t)try{i=decodeURIComponent(i)}catch(a){}n[r]=i}),r[s]=u,r.params=n,x.set(e,r)}return r},objectToPath:function(e,t){var r,n=e[s],i=[],a=e.params;for(var o in a)r=a[o],t&&encodeURIComponent(r),i.push(o+"="+r);return i.length&&(n=n+"?"+i.join("&")),n},tmpl:function(e,t){return 1==arguments.length?{v:u[e],h:y(u,e)}:u[e]=t},listToMap:function(e,t){var r,n,i,a={};if(M.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:g};return w(M,{libRequire:function(r,n){r?e.use(r+"",function(e){n&&n.apply(e,t.call(arguments,1))}):n&&n()},libEnv:function(t){var r=this,n=t.appHome,i=location;i.protocol;var o=t.appName;n=r.path(i.href,n+v),t.appHome=n;var s=t.debug;s&&(s=0==n.indexOf(i.protocol+v+v+i.host+v));var c=a;c=s?e.now():t.appTag,c&&(c+=".js"),e.config({packages:[{name:o,path:n,debug:t.debug=s,combine:t.appCombine,tag:c}]})},isArray:e.isArray,isFunction:e.isFunction,isObject:e.isObject,isRegExp:e.isRegExp,isString:e.isString,isNumber:e.isNumber})}),KISSY.add("magix/router",function(e,t,r,n){var i,a,o,s,c,u=window,f="",v="pathname",l=t.has,h=t.mix,d=document,p=/^UTF-8$/i.test(d.charset||d.characterSet||"UTF-8"),m=t.config(),g=t.cache(),y=t.cache(),w=/#.*$/,x=/^[^#]*#?!?/,b="params",$=m.nativeHistory,C=function(e,r,n){if(e){n=this[b],t.isArray(e)||(e=e.split(","));for(var i=0;e.length>i&&!(r=l(n,e[i]));i++);}return r},M=function(){return l(this,v)},E=function(){return l(this,"view")},I=function(){var e=this,t=e.hash,r=e.query;return t[v]!=r[v]},T=function(e){var t=this,r=t.hash,n=t.query;return r[b][e]!=n[b][e]},S=function(e){var t=this,r=t.hash;return l(r[b],e)},O=function(e){var t=this,r=t.query;return l(r[b],e)},A=function(e){var t=this,r=t[b];return r[e]},V=function(e){var r=t.pathToObject(e,p),n=r[v];return n&&c&&(r[v]=t.path(u.location[v],n)),r},k=h({getView:function(e){if(!o){o={rs:m.routes||{},nf:m.notFoundView};var r=m.defaultView;if(!r)throw Error("unset defaultView");o.home=r;var n=m.defaultPathname||f;o.rs[n]=r,o[v]=n}var i;e||(e=o[v]);var a=o.rs;return i=t.isFunction(a)?a.call(m,e):a[e],{view:i?i:o.nf||o.home,pathname:i||s?e:o.nf?e:o[v]}},start:function(){var e=k,t=u.history;s=$&&t.pushState,c=$&&!s,s?e.useState():e.useHash(),e.route()},parseQH:function(e){e=e||u.location.href;var t=k,r=g.get(e);if(!r){var n=e.replace(w,f),i=e.replace(x,f),a=V(n),o=V(i),s={};h(s,a[b]),h(s,o[b]),r={pathnameDiff:I,paramDiff:T,hashOwn:S,queryOwn:O,get:A,href:e,srcQuery:n,srcHash:i,query:a,hash:o,params:s},g.set(e,r)}if(!r.view){var c;c=$?r.hash[v]||r.query[v]:r.hash[v];var l=t.getView(c);h(r,l)}return r},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=y.get(i);if(a||(i=n+"\n"+i,a=y.get(i)),!a){var o;a={params:{}},e[v]!=t[v]&&(a[v]=1,o=1),e.view!=t.view&&(a.view=1,o=1);var s,c=e[b],u=t[b];for(s in c)c[s]!=u[s]&&(o=1,a[b][s]=1);for(s in u)c[s]!=u[s]&&(o=1,a[b][s]=1);a.occur=o,a.isParam=C,a.isPathname=M,a.isView=E,y.set(i,a)}return a},route:function(){var e=k,t=e.parseQH(),r=a||{params:{},href:"~"},n=!a;a=t;var o=e.getChged(r,t);o.occur&&(i=t,e.fire("changed",{location:t,changed:o,force:n}))},navigate:function(e,r,n){var a=k;if(!r&&t.isObject(e)&&(r=e,e=f),r&&(e=t.objectToPath({params:r,pathname:e},p)),e){var o=V(e),u={};if(u[b]=h({},o[b]),u[v]=o[v],u[v]){if(c){var d=i.query;if(d&&(d=d[b]))for(var m in d)l(d,m)&&!l(u[b],m)&&(u[b][m]=f)}}else{var g=h({},i[b]);u[b]=h(g,u[b]),u[v]=i[v]}var y,w=t.objectToPath(u);y=s?w!=i.srcQuery:w!=i.srcHash,y&&(s?(a.poped=1,history[n?"replaceState":"pushState"](null,null,w),a.route()):(h(u,i,u),u.srcHash=w,u.hash={params:u[b],pathname:u[v]},a.fire("!ul",{loc:i=u}),w="#!"+w,n?location.replace(w):location.hash=w))}}},r);return k.useState=function(){var e=k,t=location.href;n.on(u,"popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())})},k.useHash=function(){n.on(u,"hashchange",k.route)},k},{requires:["magix/magix","magix/event","event"]}),KISSY.add("magix/body",function(e,t,r){var n=t.has;t.mix;var i,a=t.listToMap("tap,swipe,tapHold,rotate"),o=document.body,s={},c="mx-owner",u="mx-ie",f={},v=65536,l=function(e){return e.id||(e.id="mx-e-"+v--)},h=function(e,t,r){return r?e.setAttribute(t,r):r=e.getAttribute(t),r},d={process:function(e){for(var t=e.target||e.srcElement;t&&1!=t.nodeType;)t=t.parentNode;var r=t,a=e.type,s=f[a]||(f[a]=RegExp("(?:^|,)"+a+"(?:,|$)"));if(!s.test(h(t,u))){for(var v,d,p="mx-"+a,m=[];r&&r!=o&&(v=h(r,p),d=h(r,u),!v&&!s.test(d));)m.push(r),r=r.parentNode;if(v){var g=h(r,c);if(!g)for(var y=r,w=i.all();y&&y!=o;){if(n(w,y.id)){h(r,c,g=y.id);break}y=y.parentNode}if(!g)throw Error("miss "+c+":"+v);var x=i.get(g),b=x&&x.view;b&&b.processEvent({info:v,se:e,tId:l(t),cId:l(r)})}else for(var $,d;m.length;)$=m.shift(),d=h($,u),s.test(d)||(d=d?d+","+a:a,h($,u,d))}},on:function(e,t){var r=this;if(s[e])s[e]++;else{i=t,s[e]=1;var n=a[e];n?r.unbubble(0,o,e):o["on"+e]=function(e){e=e||window.event,e&&r.process(e)}}},un:function(e){var t=this,r=s[e];if(r>0){if(r--,!r){var n=a[e];n?t.unbubble(1,o,e):o["on"+e]=null}s[e]=r}}};return d.unbubble=function(e,t,n){var i=e?r.undelegate:r.delegate;i.call(r,t,n,"[mx-"+n+"]",d.process)},d},{requires:["magix/magix","event","sizzle"]}),KISSY.add("magix/event",function(e,t){var r=function(e){return"~"+e},n=t.safeExec,i={fire:function(e,t,i,a){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var u,f,v=c.length,l=v-1;v--;)u=a?v:l-v,f=c[u],(f.d||f.r)&&(c.splice(u,1),l--),f.d||n(f.f,t,s)}i&&delete s[o]},on:function(e,n,i){var a=r(e),o=this[a]||(this[a]=[]);t.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},un:function(e,t){var n=r(e),i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]}};return i},{requires:["magix/magix"]}),KISSY.add("magix/vframe",function(e,t,r,n){var i,a,o,s=document,c=65536,u=t.safeExec,f=[].slice,v=t.mix,l=t.config("tagName"),h=t.config("rootId"),d=!t.config("tagNameChanged"),p=t.has,m="mx-view",g=d?"mx-defer":"mx-vframe",y="alter",w="created",x=function(e){return"object"==typeof e?e:s.getElementById(e)},b=function(e,t){return x(e).getElementsByTagName(t)},$=function(e){return s.createElement(e)},C=function(e){return e.id||(e.id="magix_vf_"+c--)},M=/<script[^>]*>[\s\S]*?<\/script>/gi,E=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<31,t.rM={}};return v(E,{root:function(e,t){if(!i){o=t;var r=x(h);r||(r=$(l),r.id=h,s.body.insertBefore(r,s.body.firstChild)),i=new E(h),e.add(i)}return i}}),v(v(E.prototype,r),{mountView:function(e,r){var i=this,a=x(i.id);if(a._bak?a._chgd=1:(a._bak=1,a._tmpl=a.innerHTML.replace(M,"")),i.unmountView(),e){var s=t.pathToObject(e),c=s.pathname,u=--i.sign;t.libRequire(c,function(e){if(u==i.sign){var t=i.owner;n.prepare(e);var f=new e({owner:i,id:i.id,$:x,path:c,vom:t,location:o});i.view=f,f.on("interact",function(e){e.tmpl||(a._chgd&&(a.innerHTML=a._tmpl),i.mountZoneVframes(0,0,1)),f.on("rendered",function(){i.mountZoneVframes(0,0,1)}),f.on("prerender",function(){i.unmountZoneVframes()||i.cAlter({caused:i.id})}),f.on("inited",function(){i.viewInited=1,i.fire("viewInited",{view:f})})},0),r=r||{},f.load(v(r,s.params,r))}})}},unmountView:function(){var e=this;if(e.view){a||(a={caused:e.id}),e.unmountZoneVframes(),e.cAlter(a),e.view.destroy();var t=x(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,a=0,e.fire("viewUnmounted")}e.un("viewInited"),e.sign--},mountVframe:function(e,t,r,n){var i=this,a=i.owner,o=a.get(e);return o||(o=new E(e),o.pId=i.id,p(i.cM,e)||i.cC++,i.cM[e]=n,a.add(o)),o.mountView(t,r),o},mountZoneVframes:function(e,t,r){var n=this;n.unmountZoneVframes(e);var i=e||n.id,a=b(i,l),o=a.length,s={};if(o)for(var c,u,f,v,h=0;o>h;h++)if(c=a[h],u=C(c),!p(s,u)&&(f=c.getAttribute(m),v=!c.getAttribute(g)==d,v||f)){n.mountVframe(u,f,t,r);for(var y,w=b(c,l),x=0,$=w.length;$>x;x++)y=w[x],f=y.getAttribute(m),v=!c.getAttribute(g)==d,v||f||(s[C(y)]=1)}n.cC==n.rC&&n.cCreated({})},unmountVframe:function(e){var t=this;e=e||t.id;var r=t.owner,n=r.get(e);if(n){var i=n.fcc;n.unmountView(),r.remove(e,i),t.fire("destroy");var a=r.get(n.pId);a&&p(a.cM,e)&&(delete a.cM[e],a.cC--)}},unmountZoneVframes:function(e){var t,r,n=this;if(e){t=b(e,l);for(var i,a={},o=n.cM,s=t.length-1;s>=0;s--)i=t[s].id,p(o,i)&&(a[i]=1);t=a}else t=n.cM;for(var c in t)r=1,n.unmountVframe(c);return r},invokeView:function(e){var t,r=this,n=r.view,i=f.call(arguments,1);return r.viewInited&&n[e]&&(t=u(n[e],i,n)),t},cCreated:function(e){var t=this,r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(w,e),t.fire(w,e));var n=t.owner;n.vfCreated();var i=t.id,a=n.get(t.pId);a&&!p(a.rM,i)&&(a.rM[i]=a.cM[i],a.rC++,a.rC==a.cC&&a.cCreated(e))},cAlter:function(e){var t=this;if(delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(y,e),t.fire(y,e));var i=t.owner,a=i.get(t.pId);if(a&&p(a.rM,n)){var o=a.rM[n];a.rC--,delete a.rM[n],o&&a.cAlter(e)}}},locChged:function(e,r){var n=this,i=n.view;if(i&&i.sign&&i.rendered){var a=i.olChanged(r),o={location:e,changed:r,prevent:function(){this.cs=[]},toChildren:function(e){e=e||[],t.isString(e)&&(e=e.split(",")),this.cs=e}};a&&u(i.locationChange,o,i);for(var s,c=o.cs||t.keys(n.cM),f=0,v=c.length,l=n.owner;v>f;f++)s=l.get(c[f]),s&&s.locChged(e,r)}}}),E},{requires:["magix/magix","magix/event","magix/view"]}),KISSY.add("magix/view",function(e,t,r,n,i){var a=t.safeExec,o=t.has,s=",",c=[],u=t.mix,f=["render","renderUI"],v="~",l=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},h=t.cache(40),d=function(e){var t=this;u(t,e),t.sign=1};u(d,{wrapUpdate:function(){var e=this;if(!e[v]){e[v]=1;for(var r,n,i=e.prototype,a=f.length-1;a>-1;a--)n=f[a],r=i[n],t.isFunction(r)&&r!=t.noop&&(i[n]=l(r))}}});var p=d.prototype,m=/<[a-z]+(?:[^">]|"[^"]*")+(?=>)/g,g=/\smx-owner\s*=/,y=/\smx-[^v][a-z]+\s*=/,w=function(e){return!g.test(e)&&y.test(e)?e+' mx-owner="'+w.t+'"':e},x={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},b=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,$=/(\w+):([^,]+)/g;u(p,r),u(p,{render:t.noop,locationChange:t.noop,init:t.noop,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=e.sign,i=o(e,"template"),s=function(o){if(n==e.sign){i||(e.template=e.wrapMxEvent(o)),e.delegateEvents(),e.fire("interact",{tmpl:t},1),a(e.init,r,e),e.fire("inited",0,1),a(e.render,c,e);var s=!t&&!e.rendered;s&&(e.rendered=!0,e.fire("primed",null,1))}};t&&!i?e.fetchTmpl(s):s()},beginUpdate:function(){var e=this;e.sign&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign&&(e.rendered||e.fire("primed",0,1),e.rendered=!0,e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return w.t=this.id,(e+"").replace(m,w)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;t.isObject(e)&&(r.pn=e.pathname,e=e.keys),e&&(r.keys=i.concat((e+"").split(s)))},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},destroy:function(){var e=this;e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1),e.sign=0},parentView:function(){var e=this,t=e.vom,r=e.owner,n=t.get(r.pId),i=null;return n&&n.viewInited&&(i=n.view),i},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign){var r=e.info,n=e.se,i=h.get(r);i||(i=r.match(b),i={n:i[1],f:i[2],i:i[3],p:{}},i.i&&i.i.replace($,function(e,t,r){i.p[t]=r}),h.set(r,i));var o=t.events;if(o){var s=o[n.type],c=x[i.f];c&&c.call(x,n),c=s&&s[i.n],c&&a(c,u({view:t,currentId:e.cId,targetId:e.tId,domEvent:n,events:o,params:i.p},x),s)}}},delegateEvents:function(e){var t=this,r=t.events,i=e?n.un:n.on,a=t.vom;for(var o in r)i.call(n,o,a)}});var C=t.config("appHome"),M=t.config("debug")?"?t="+e.now():"",E=function(t,r,n){for(var i in r)e.isObject(r[i])?(o(t,i)||(t[i]={}),E(t[i],r[i],1)):n&&(t[i]=r[i])};return d.prototype.fetchTmpl=function(e){var r=this,n="template"in r;if(n)e(tmpl);else{var o=t.tmpl(r.path);if(o.h)e(o.v);else{var s=C+r.path+".html",c=E[s],u=function(n){e(t.tmpl(r.path,n))};c?c.push(u):(c=E[s]=[u],i({url:s+M,success:function(e){a(c,e),delete E[s]},error:function(e,t){a(c,t),delete E[s]}}))}}},d.extend=function(t,r,n){var i=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&a(r,arguments,this)};return o.extend=i.extend,e.extend(o,i,t,n)},d.prepare=function(e){var t=this;if(!e.wrapUpdate){e.wrapUpdate=t.wrapUpdate,e.extend=t.extend;for(var r,n=e.prototype,i=e.superclass;i;)r=i.constructor,E(n,r.prototype),i=r.superclass}e.wrapUpdate()},d},{requires:["magix/magix","magix/event","magix/body","ajax"]}),KISSY.add("magix/vom",function(e,t,r,n){var i=r.has,a=r.mix,o=0,s=0,c=0,u=0,f={},v={},l=r.mix({all:function(){return f},add:function(e){i(f,e.id)||(o++,f[e.id]=e,e.owner=l,l.fire("add",{vframe:e}))},get:function(e){return f[e]},remove:function(e,t){var r=f[e];r&&(o--,t&&s--,delete f[e],l.fire("remove",{vframe:r}))},vfCreated:function(){if(!u){s++;var e=s/o;e>c&&l.fire("progress",{percent:c=e},u=1==e)}},root:function(){return t.root(l,v)},locChged:function(e){var t,r=e.loc;if(r?t=1:r=e.location,a(v,r),!t){var n=l.root(),i=e.changed;i.isView()?n.mountView(r.view):n.locChged(r,i)}}},n);return l},{requires:["magix/vframe","magix/magix","magix/event"]}),KISSY.add("mxext/mmanager",function(e,t,r){var n=t.has,i=t.safeExec,a=t.mix,o=function(e){var r=this;r.$mClass=e,r.$mCache=t.cache(),r.$mCacheKeys={},r.$mMetas={}},s=[].slice,c={urlParams:1,postParams:1,cacheKey:1,cacheTime:1,before:1,after:1},u=function(e,t,r){return function(){return e.apply(t,[t,r].concat(s.call(arguments)))}},f=function(e,t){if(t)for(var r=e.length-1;r>-1;r--)f(e[r]);else{var n=e.$mm;!e.fromCache&&n.used>0&&(e.fromCache=!0),n.used++}};a(o,{create:function(e){if(!e)throw Error("MManager.create:modelClass ungiven");return new o(e)}});var v={ALL:1,ONE:2,ORDER:4},l=Date.now||function(){return+new Date},h=function(e){this.$host=e,this.$doTask=!1,this.$reqModels={}},d="_before",p="_after";return a(h.prototype,{send:function(e,r,a,o){var s=this;if(s.$doTask)return s.next(function(t){t.send(e,r,a,o)}),s;s.$doTask=!0;var c=s.$host,h=c.$mCache,d=c.$mCacheKeys,p=s.$reqModels;t.isArray(e)||(e=[e]);var m,g,y=e.length,w=0,x=Array(y),b=[],$={},C=[],M=t.isArray(r);M&&(b=Array(r.length));for(var E,I=function(e,t,o,u){if(!s.$destroy){w++,delete p[e.id];var E=e.$mm,I=E.cacheKey;if(x[t]=e,u)g=!0,m=u,$[t]=o;else if(!I||I&&!h.has(I)){I&&h.set(I,e),E.doneAt=l();var T=E.after,S=E.meta;T&&i(T,[e,S]),c.fireAfter(S.name,[e])}if(a==v.ONE){var O=M?r[t]:r;O&&(f(e),b[t]=i(O,[e,g?{msg:m}:null,g?$:null],s))}else if(a==v.ORDER){C[t]={m:e,e:g,s:m};for(var A,V,k=C.i||0;A=C[k];k++)V=M?r[k]:r,f(A.m),b[k]=i(V,[A.m,A.e?{msg:A.s}:null,C.e?$:null,b],s),A.e&&($[k]=A.s,C.e=1);C.i=k}if(w>=y){$.msg=m;var P=g?$:null;a==v.ALL?(f(x,1),x.push(P),b[0]=i(r,x,s),b[1]=P):b.push(P),s.$ntId=setTimeout(function(){s.doNext(b)},30)}if(I&&n(d,I)){var q=d[I].q;delete d[I],i(q,[o,u],e)}}},T=0;e.length>T;T++){if(E=e[T],!E)throw Error("miss attrs:"+e);var S,O,O=c.getModel(E,o),A=O.cacheKey;S=O.entity;var V=u(I,S,T);A&&n(d,A)?d[A].q.push(V):O.needUpdate?(p[S.id]=S,A&&(d[A]={q:[],e:S}),S.request(V)):V()}return s},fetchAll:function(e,t){return this.send(e,t,v.ALL)},saveAll:function(e,t){return this.send(e,t,v.ALL,1)},fetchOrder:function(e,t){var r=s.call(arguments,1);return this.send(e,r.length>1?r:t,v.ORDER)},saveOrder:function(e,t){var r=s.call(arguments,1);return this.send(e,r.length>1?r:t,v.ORDER,1)},saveOne:function(e,t){var r=s.call(arguments,1);return this.send(e,r.length>1?r:t,v.ONE,1)},fetchOne:function(e,t){var r=s.call(arguments,1);return this.send(e,r.length>1?r:t,v.ONE)},abort:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqModels,a=t.$mCacheKeys;if(r)for(var o in r){var s=r[o],c=s.$mm.cacheKey;if(c&&n(a,c)){var u=a[c];delete a[c],i(u,[!0,s,"aborted"],s)}s.abort()}e.$reqModels={},e.$queue=[],e.$doTask=!1},next:function(e){var t=this;if(t.$queue||(t.$queue=[]),t.$queue.push(e),!t.$doTask){var r=t.$latest||[];t.doNext.apply(t,[t].concat(r))}return t},doNext:function(e){var t=this;t.$doTask=!1;var r=t.$queue;if(r){var n=r.shift();n&&i(n,[t].concat(e),t)}t.$latest=e},destroy:function(){var e=this;e.$destroy=!0,e.abort()}}),a(o.prototype,{registerModels:function(e){var r=this,n=r.$mMetas;t.isArray(e)||(e=[e]);for(var i,a,o=0;e.length>o;o++){if(i=e[o],a=i.name,i&&!a)throw Error("miss name attribute");if(n[a])throw Error("already exist:"+a);n[a]=i}},registerMethods:function(e){var t=this;a(t,e)},createModel:function(e){var r=this,n=r.getModelMeta(e),a=new r.$mClass;a.set(n,c),a.$mm={used:0};var o=e.before||n.before;r.fireBefore(n.name,[a]),t.isFunction(o)&&i(o,[a,n,e]);var s=e.after||n.after;a.$mm.after=s;var u=e.cacheKey||n.cacheKey;return t.isFunction(u)&&(u=i(u,[n,e])),a.$mm.cacheKey=u,a.$mm.meta=n,a.set(e,c),a.setUrlParams(n.urlParams),a.setPostParams(n.postParams),a.setUrlParams(e.urlParams),a.setPostParams(e.postParams),a},getModelMeta:function(e){var r,n=this,i=n.$mMetas;r=t.isString(e)?e:e.name;var a=i[r];if(!a)throw Error("Not found:"+e.name);return a},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=!0,r=i.createModel(e)),{entity:r,cacheKey:r.$mm.cacheKey,needUpdate:n}},saveAll:function(e,t){return new h(this).saveAll(e,t)},fetchAll:function(e,t){return new h(this).fetchAll(e,t)},saveOrder:function(){var e=new h(this);return e.saveOrder.apply(e,arguments)},fetchOrder:function(){var e=new h(this);return e.fetchOrder.apply(e,arguments)},saveOne:function(){var e=new h(this);return e.saveOne.apply(e,arguments)},fetchOne:function(){var e=new h(this);return e.fetchOne.apply(e,arguments)},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.c,i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.cacheKey)}}},getModelUrl:function(e){var t=this,r=t.getModelMeta(e);return r.url?r.url:void 0},listenBefore:function(e,t){r.on.call(this,e+d,t)},listenAfter:function(e,t){r.on.call(this,e+p,t)},unlistenBefore:function(e,t){r.un.call(this,e+d,t)},unlistenAfter:function(e,t){r.un.call(this,e+p,t)},fireBefore:function(e,t){r.fire.call(this,e+d,t)},fireAfter:function(e,t){r.fire.call(this,e+p,t)},getCachedModel:function(e){var r,n,a=this,o=a.$mCache,s=null;if(t.isString(e)?r=e:(n=a.getModelMeta(e),r=e.cacheKey||n.cacheKey,t.isFunction(r)&&(r=i(r,[n,e]))),r){var c=a.$mCacheKeys,u=c[r];if(u)s=u.e;else if(s=o.get(r)){n||(n=s.$mm.meta);var f=e.cacheTime||n.cacheTime||0;t.isFunction(f)&&(f=i(f,[n,e])),f>0&&l()-s.$mm.doneAt>f&&(a.clearCacheByKey(r),s=null)}}return s}}),o},{requires:["magix/magix","magix/event"]}),KISSY.add("mxext/model",function(e,t){var r=function(r,i){var a=function(){a.superclass.constructor.apply(this,arguments),i&&t.safeExec(i,[],this)};return t.mix(a,this,{prototype:!0}),n(r,this.prototype),e.extend(a,this,r)},n=function(e,r,i){for(var a in r)t.isObject(r[a])?(t.has(e,a)||(e[a]={}),n(e[a],r[a],!0)):i&&(e[a]=r[a])},i=+new Date,a=function(e){e&&this.set(e),this.id="m"+i--},o=encodeURIComponent;return t.mix(a,{GET:"GET",POST:"POST",extend:r}),t.mix(a.prototype,{sync:t.noop,parse:function(e){return e},getPostParams:function(){return this.getParams(a.POST)},getUrlParams:function(){return this.getParams(a.GET)},getParams:function(e){var r=this;e=e?e.toUpperCase():a.GET;var n,i="$"+e,s=r[i],c=[];if(s)for(var u in s)if(n=s[u],t.isArray(n))for(var f=0;n.length>f;f++)c.push(u+"="+o(n[f]));else c.push(u+"="+o(n));return c.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,a.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,a.POST,!0)},setParams:function(e,r,n,i){n=n?n.toUpperCase():a.GET;var o=this;o.$types||(o.$types={}),o.$types[n]=!0;var s="$"+n;if(o[s]||(o[s]={}),t.isObject(e))for(var c in e)i&&o[s][c]||(o[s][c]=e[c]);else e&&(i&&o[s][e]||(o[s][e]=r))},setPostParams:function(e,t){var r=this;r.setParams(e,t,a.POST)},setUrlParams:function(e,t){this.setParams(e,t,a.GET)},reset:function(){var e=this,r=e.$types;if(r){for(var n in r)t.has(r,n)&&delete e["$"+n];delete e.$types}var i=e.$keys,a=e.$attrs;if(i){for(var o=0;i.length>o;o++)delete a[i[o]];delete e.$keys}},get:function(e){var t=this,r=!arguments.length,n=t.$attrs;return n?r?n:n[e]:null},set:function(e,r,n){var i=this;if(i.$attrs||(i.$attrs={}),n&&!i.$keys&&(i.$keys=[]),t.isObject(e)){t.isObject(r)||(r={});for(var a in e)n&&i.$keys.push(a),t.has(r,a)||(i.$attrs[a]=e[a])}else e&&(n&&i.$keys.push(e),i.$attrs[e]=r)},request:function(e,r){e||(e=function(){});var n=t.isFunction(e),i=e.success,a=e.error,o=this;o.$abort=!1;var s=function(s,c){if(!o.$abort)if(c)n&&e(s,c,r),a&&a.call(o,c);else{if(s){var u=o.parse(s);t.isObject(u)||(u={data:u}),o.set(u,null,!0)}n&&e(s,c,r),i&&i.call(o,s)}};o.$trans=o.sync(s,r)},abort:function(){var e=this;e.$trans&&e.$trans.abort&&e.$trans.abort(),delete e.$trans,e.$abort=!0},isAborted:function(){return this.$abort},rollbackTransaction:function(){var e=this,t=e.$bakAttrs;t&&(e.$attrs=t,delete e.$bakAttrs)},endTransaction:function(){delete this.$bakAttrs}}),a.prototype.beginTransaction=function(){var t=this;t.$bakAttrs=e.clone(t.$attrs)},a},{requires:["magix/magix"]}),KISSY.add("mxext/view",function(e,t,r,n){var i=window,a=function(e){i.clearTimeout(e),i.clearInterval(e)},o=function(e){c(e.destroy,[],e)},s=0,c=t.safeExec,u=t.has,f=r.extend({mxViewCtor:t.noop,navigate:function(){n.navigate.apply(n,arguments)},manage:function(e,r){var n=this,i=arguments,c=!0;1==i.length&&(r=e,e="res_"+s++,c=!1),n.$res||(n.$res={});var u;t.isNumber(r)?u=a:r&&r.destroy&&(u=o);var f={hasKey:c,res:r,destroy:u};return n.$res[e]=f,r},getManaged:function(e){var t=this,r=t.$res;if(t.sign,r&&u(r,e)){var n=r[e],i=n.res;return i}return null},removeManaged:function(e){var t=this,r=null,n=t.$res;if(n)if(u(n,e))r=n[e].res,delete n[e];else for(var i in n)if(n[i].res===e){r=n[i].res,delete n[i];break}return r},destroyManaged:function(e){var t=this,r=t.$res;if(r){for(var n in r){var i=r[n],a=i.res,o=i.destroy,s=!1;o&&(o(a),s=!0),i.hasKey||delete r[n],t.fire("destroyManaged",{resource:a,processed:s})}"destroy"==e.type&&delete t.$res}},destroyMRequest:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r],i=n.res;i&&i.fetchOne&&i.fetchAll&&(i.destroy(),delete t[r])}}},function(){var e=this;e.on("interact",function(){e.on("rendercall",e.destroyMRequest),e.on("prerender",e.destroyManaged),e.on("destroy",e.destroyManaged)}),e.mxViewCtor()});return f},{requires:["magix/magix","magix/view","magix/router"]}),function(e){var t=function(){};e.console||(e.console={log:t,info:t,warn:t});var r,n={};e.Magix||(e.Magix={config:function(e){for(var t in e)n[t]=e[t]},start:function(e){r=e}},KISSY.use("magix/magix",function(t,i){e.Magix=i,i.config(n),r&&i.start(r)}))}(this);