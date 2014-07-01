(function(e,t,n,r,i,a,o,s,c,f){f=1,c=function(e){return e.id||(e.id="mx_n_"+f++)},s("magix/magix",function(){var n=/\/\.(?:\/|$)|\/[^\/]+?\/\.{2}(?:\/|$)|\/\/+|\.{2}\//,o=/\/[^\/]*$/,s=/[#?].*$/,c=/([^=&?\/#]+)=?([^&=#?]*)/g,u=/^https?:\/\//i,h="/",m="vframe",l=t.console,v=l&&l.error,d={tagName:m,rootId:"magix_vf_root",coded:1,error:v?function(e){l.error(e)}:r},g=d.hasOwnProperty,p=function(e,t){return e&&g.call(e,t)},y=function(t){return function(n,r,i){switch(arguments.length){case 0:i=t;break;case 1:i=P._o(n)?b(t,n):p(t,n)?t[n]:e;break;case 2:r===e?(delete t[n],i=r):t[n]=i=r}return i}},x=function(e,t){return t.f-e.f||t.t-e.t},w=function(e,t){var n=this;return n.get?(n.c=[],n.b=0|t||5,n.x=n.b+(e||20)):n=new w(e,t),n},b=function(e,t,n,r){for(r in t)n&&p(n,r)||(e[r]=t[r]);return e};b(w.prototype,{get:function(e){var t,n=this,r=n.c;return e=i+e,p(r,e)&&(t=r[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},list:function(){return this.c},set:function(e,t,n){var r=this,a=r.c,o=i+e,s=a[o];if(!p(a,o)){if(a.length>=r.x){a.sort(x);for(var c=r.b;c--;)s=a.pop(),s.f>0&&r.del(s.o)}s={o:e},a.push(s),a[o]=s}return s.v=t,s.f=1,s.t=f++,s.m=n,t},del:function(e){e=i+e;var t=this.c,n=t[e];n&&(n.f=-1,n.v=a,delete t[e],n.m&&(_(n.m,n.o,n),n.m=a))},has:function(e){return p(this.c,i+e)}});var C=w(40),M=w(),_=function(e,t,n,r,i,a){for(P._a(e)||(e=[e]),t&&(P._a(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=a&&a.apply(n,t)}catch(o){d.error(o)}return i},q=function(e,t,n){if(d.coded)try{n=decodeURIComponent(n)}catch(r){}q.p[t]=n},P={mix:b,has:p,tryCall:_,config:y(d),start:function(e){var t=this;b(d,e),t.use(["magix/router","magix/vom",e.iniFile],function(n,r,i){d=b(d,i,e),d["!tnc"]=d.tagName!=m,n.on("!ul",r.loc),n.on("changed",r.loc),t.use(d.extensions,n.start)})},keys:Object.keys||function(e){var t,n=[];for(t in e)p(e,t)&&n.push(t);return n},local:y({}),path:function(e,t){var r,c=e+i+t,f=M.get(c),m=a;if(!M.has(c)){for(u.test(e)&&(r=e.indexOf(h,8),0>r&&(r=e.length),m=e.slice(0,r),e=e.slice(r)),e=e.replace(s,a).replace(o,h),(u.test(t)||t.charAt(0)==h)&&(e=a),f=e+t;n.test(f);)f=f.replace(n,h);M.set(c,f=m+f)}return f},toObject:function(e){var t,n,r=C.get(e);return r||(q.p=t={},n=e.replace(s,a),~n.indexOf("=")&&(n=a),e.replace(n,a).replace(c,q),C.set(e,r=[n,t])),{path:r[0],params:b({},r[1])}},toUrl:function(e,t,n){var r,i,a=[];for(i in t)r=t[i],(!n||r||p(n,i))&&(d.coded&&(r=encodeURIComponent(r)),a.push(i+"="+r));return a.length&&(e+="?"+a.join("&")),e},toMap:function(e,t,n){var r,i,a,o={};if(n=n||1,e&&(a=e.length))for(r=0;a>r;r++)i=e[r],o[t?i[t]:i]=t?i:n;return o},cache:w},k=Object.prototype.toString,V=function(){};return b(P,{use:function(e,t){e?($.isArray(e)||(e=[e]),require(e,t)):t&&t()},_a:$.isArray,_f:$.isFunction,_o:function(e){return"[object Object]"==k.call(e)},extend:function(e,t,n,r){var i=t.prototype;i.constructor=t,V.prototype=i;var a=new V;return b(a,n),b(e,r),a.constructor=e,e.prototype=a,e}})}),s("magix/event",["magix/magix"],function(e){var t=e.tryCall,n={fire:function(e,n,r,a){var o=i+e,s=this,c=s[o];if(c){n||(n={}),n.type||(n.type=e);for(var f,u,h=c.length,m=h-1;h--;)f=a?h:m-h,u=c[f],(u.d||u.r)&&(c.splice(f,1),m--),u.d||t(u.f,n,s);r=r||0>m}r&&delete s[o]},on:function(e,n,r,a){var o=this,s=i+e,c=o[s]||(o[s]=[]),f={f:n},u=0|r;u!==r?(r&&r.on&&a&&(r.on(a,function(){f.r=1},t),r=0),f.r=r,c.push(f)):c.splice(u,0,f)},off:function(e,t){var n=i+e,r=this[n];if(r)if(t){for(var a,o=r.length-1;o>=0;o--)if(a=r[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,n){this.on(e,n,t)}};return e.mix(e.local,n),n}),s("magix/router",["magix/magix","magix/event"],function(e,n){var r,a,s,c,f,u,h="",m="path",l="view",v=e.has,d=e.mix,g=e.keys,p=e.toUrl,y=e.toObject,x=e.config(),w=e.cache(),b=e.cache(),C=t.location,M=t.history,_={params:{},href:h},q=/(?:^https?:\/\/[^\/]+|#.*$)/gi,P=/^[^#]*#?!?/,k="params",V=function(e,t,n){if(e){n=this[k],e=(e+h).split(o);for(var r=0;e.length>r&&!(t=v(n,e[r]));r++);}return t},A=function(){return this[m]},I=function(){return this[l]},T=function(e,t,n,r){return n=this,r=n[k],arguments.length>1?r[e]=t:r[e]||h},j=function(t,n){var r,i,o,s;return a||(a={rs:x.routes||{},nf:x.unfoundView},o=x.defaultView,a.dv=o,s=x.defaultPath||h,r=a.rs,a.f=e._f(r),a.f||r[s]||!o||(r[s]=o),a[m]=s),t||(t=a[m]),r=a.rs,i=a.f?r.call(x,t,n):r[t],{view:i||a.nf||a.dv,path:t}},O=function(e,t){var n=e.href,r=t.href,a=n+i+r,o=b.get(a);if(!o){var s,c,f,u;o={isParam:V,isPath:A,isView:I},o[l]=f,o[m]=f,o[k]=u={};var h,v,d=e[k],p=t[k],$=[m,l].concat(g(d),g(p));for(h=$.length-1;h>=0;h--)v=$[h],1==h&&(d=e,p=t,u=o),c=d[v],f=p[v],c!=f&&(u[v]={from:c,to:f},s=1);b.set(a,o=[s,o])}return o},U=d({start:function(){s=x.edge,c=s&&M.pushState,f=s&&!c,u=c?"srcQuery":"srcHash",c?U.useState():U.useHash(),U.route()},parse:function(t,n){t=t||C.href;var r,i,a,o,c,u,v=w.get(t);return v||(a=t.replace(q,h),o=t.replace(P,h),c=y(a),u=y(o),f&&(u[m]=e.path(C.pathname,u[m])),v={get:T,set:T,href:t,refHref:_.href,srcQuery:a,srcHash:o,query:c,hash:u,params:d(d({},c[k]),u[k])},w.set(t,v)),n&&!v[l]&&(i=v.hash[m]||s&&v.query[m],r=j(i,v),d(v,r)),v},route:function(){var e=U.parse(0,1),t=!_.get,n=O(_,e);_=e,n[0]&&(r=e,U.fire("changed",{location:e,changed:n[1],force:t}))},navigate:function(t,n,i){if(r){!n&&e._o(t)&&(n=t,t=h);var a=y(t),o=r.query[k],l=a[k],g=a[m],$=r[m];if(d(l,n),g){if(g=e.path($,g),f)for(var x in o)v(o,x)&&!v(l,x)&&(l[x]=h)}else g=$,l=d(d({},r[k]),l);g=p(g,l,s?m:o),g!=r[u]&&(c?(U.poped=1,M[i?"replaceState":"pushState"](h,h,g),U.route()):(d(a,r,a),a.srcHash=g,U.fire("!ul",{loc:r=a}),g="#!"+g,i?C.replace(g):C.hash=g))}}},n);return U.useState=function(){var e=U,t=location.href;$(window).on("popstate",function(){var n=location.href==t;(e.poped||!n)&&(e.poped=1,e.route())})},U.useHash=function(){$(window).on("hashchange",U.route)},U}),s("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e,t,n){var r=t.has,i=t.mix,a={},o={},s={},c=t.mix({all:function(){return a},add:function(e,t){r(a,e)||(a[e]=t,c.fire("add",{vframe:t}))},get:function(e){return a[e]},remove:function(e,t){var n=a[e];n&&(delete a[e],c.fire("remove",{vframe:n,fcc:t}))},loc:function(t){var n,r=t.loc;if(r?n=1:r=t.location,i(o,r),!n){i(s,t.changed);var a=e.root(c,o,s);s.view?a.mountView(r.view):a.locChged()}}},n);return c}),s("magix/vframe",["magix/magix","magix/event","magix/view"],function(t,r,i){var s,f,u,h,m,l,v,d,g,p,$,y=t.tryCall,x=[],w=t.mix,b=t.config(),C="mx-vframe",M=t.has,_="querySelectorAll",q="alter",P="created",k=function(e){return"object"==typeof e?e:n.getElementById(e)},V=function(e,t,r){return t=k(e),t&&(r=u?n[_]("#"+c(t)+m):t.getElementsByTagName(s)),r||x},A=function(e,t,n){if(e=k(e),t=k(t),e&&t)if(e!==t)try{n=l?t.contains(e):16&t.compareDocumentPosition(e)}catch(r){n=0}else n=1;return n},I=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1,t.rM={},t.owner=$,$.add(e,t)};return I.root=function(t,r,i){if(!v){s=b.tagName,f=b["!tnc"],u=f&&n[_],m=" "+s+"["+C+"=true]",h=f&&!u;var a=n.body;l=a.contains,g=r,p=i,$=t;var o=b.rootId,c=k(o);c||(c=n.createElement(s),c.id=o,a.appendChild(c),c=e),v=new I(o)}return v},w(w(I.prototype,r),{mountView:function(e,n,r){var a=this,o=k(a.id);if(!a._a&&o&&(a._a=1,a._t=o.innerHTML),a.unmountView(r),a._d=0,e){a.path=e;var s=t.toObject(e),c=s.path,f=++a.sign;t.use(c,function(e){if(f==a.sign){i.prepare(e,$);var t=new e({owner:a,id:a.id,$:k,$i:A,path:c,vom:$,location:g});a.view=t;var r=function(e){a.mountZoneVframes(e.id)};t.on("interact",function(){t.hasTmpl||(o&&(o.innerHTML=a._t),r(k)),t.on("primed",function(){a.viewPrimed=1,a.fire("viewMounted")}),t.on("rendered",r),t.on("prerender",function(e){a.unmountZoneVframes(e.id,0,1)||a.cAlter()})},0),t.load(w(s.params,n),p)}})}},unmountView:function(e){var t=this,n=t.view;if(n){d||(d={}),t._d=1,t.unmountZoneVframes(0,e,1),t.cAlter(d),t.view=0,n.oust();var r=k(t.id);r&&t._a&&!e&&(r.innerHTML=t._t),t.viewInited=0,t.viewPrimed&&(t.viewPrimed=0,t.fire("viewUnmounted")),d=0}t.sign++},mountVframe:function(e,t,n,r,i){var a=this;a.fcc&&!r&&a.cAlter();var o=$.get(e);return o||(o=new I(e),o.pId=a.id,M(a.cM,e)||a.cC++,a.cM[e]=1),o._p=r,o.mountView(t,n,i),o},mountZoneVframes:function(e,t,n,r){var i=this;e=e||i.id,i.unmountZoneVframes(e,r,1);var a=V(e),o=a.length,s={};if(o)for(var f,u,m,l,v=0;o>v;v++)if(f=a[v],u=c(f),!M(s,u)&&(m=f.getAttribute("mx-view"),l=h?f.getAttribute(C):1,l||m)){i.mountVframe(u,m,t,n,r);for(var d,g=V(f),p=0,$=g.length;$>p;p++)d=g[p],s[c(d)]=1}i.cCreated()},unmountVframe:function(e,t,n){var r=this;e=e||r.id;var i=$.get(e);if(i){var a=i.fcc;i.unmountView(t),$.remove(e,a);var o=$.get(i.pId);o&&M(o.cM,e)&&(delete o.cM[e],o.cC--,n||r._d||o.cCreated())}},unmountZoneVframes:function(e,t,n){var r,i,a=this,o=a.cM;for(i in o)(!e||A(i,e))&&a.unmountVframe(i,t,r=1);return n||a._d||a.cCreated(),r},parent:function(e){var t=this,n=t;for(e=e>>>0||1;n&&e--;)n=$.get(n.pId);return n},invokeView:function(e,t){var n,r=this;if(r.viewInited){var i=r.view,a=i&&i[e];a&&(n=y(a,t||x,i))}return n},cCreated:function(e){var t=this;if(t.cC==t.rC){var n=t.view;n&&!t.fcc&&(t.fcc=1,t.fca=0,n.fire(P,e),t.fire(P,e));var r=t.id,i=$.get(t.pId);i&&!M(i.rM,r)&&(i.rM[r]=i.cM[r],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),!t.fca&&t.fcc){t.fcc=0;var n=t.view,r=t.id;n&&(t.fca=1,n.fire(q,e),t.fire(q,e));var i=$.get(t.pId);i&&M(i.rM,r)&&(i.rC--,delete i.rM[r],t._p||i.cAlter(e))}},locChged:function(){var e=this,n=e.view;if(e.viewInited&&n&&n.sign>0){var r=n.olChg(p),i={location:g,changed:p,prevent:function(){this.cs=x},to:function(e){e=(e+a).split(o),this.cs=e||x}};r&&n.render(i);for(var s,c=i.cs||t.keys(e.cM),f=0,u=c.length;u>f;f++)s=$.get(c[f]),s&&s.locChged()}}}),I}),s("magix/view",["magix/magix","magix/event","magix/router"],function(s,f,u){var h,m={focus:2,blur:2,mouseenter:2,mouseleave:2},l=$.now(),v=function(e,t,n,r,i,o){var s=m[t];if(i){n.$n||(n.$n=l--);var c="_$"+n.$n;i[c]||(i[c]=function(){n.apply(i,arguments)}),n=i[c]}o||2!=s?$(e)[r?"off":T](t,n):$(e)[(r?"un":a)+"delegate"]("[mx-"+t+"]",t,n)},d=s.tryCall,g=s.has,p=[],y=s.mix,x=0,w="destroy",b=s.cache(40),C=/(\w+)(?:<(\w+)>)?(?:\({([\s\S]*)}\))?/,M=/(\w+):(['"]?)([\s\S]*?)\2(?=(?:,\w+:|$))/g,_=/([$\w]+)<([\w,]+)>/,q={},P="mx-ei",k=n.body,V="parentNode",A={},I=/\smx-(?!view|vframe)[a-z]+\s*=\s*"/g,T="on",j="",O=function(e,t){return function(){t=this,t.sign>0&&(t.sign++,t.fire("rendercall"),N(t),d(e,arguments,t))}},U=function(e,t,n,r){U.p[t]=r},N=function(e,t){var n,r,i=e.$res;for(n in i)r=i[n],(t||r.mr)&&S(i,n,t)},S=function(e,t,n){var r,i,a=e[t];a&&(r=a.e,i=r&&r[w],i&&d(i,p,r),(!a.hk||n)&&delete e[t])},E=function(e,t){var n,r,i=e.$evts;for(n in i)Z(n,t);for(i=e.$sevts,n=i.length;n-->0;)r=i[n],v(r.h,r.t,r.f,t,e,1)},H=function(e,t,n){return n?e.setAttribute(t,n):n=e.getAttribute(t),n},R=function(e,t,n,r){return t+=a,r=e+i,t=n?[a].concat(t).join(j+r):t.replace(I,"$&"+r)},L=function(t){if(t&&!t[T]){var n=t.target;t[T]=1;for(var r,a,s,f=n,u=t.type,m=A[u]||(A[u]=RegExp(o+u+"(?:,|$)")),l="mx-"+u,v=[];f&&1==f.nodeType&&(r=H(f,l),a=H(f,P),!r&&!m.test(a));)v.push(f),f=f[V];if(r){for(var d,p,$,y,x,w,b,C,M,_=r.split(j);_.length;)if(p=_.shift()){if($=p.split(i),p=$.pop(),w=$[0],!w&&!d)for(b=f,C=h.all();b;){if(g(C,M=b.id)){H(f,l,(w=M)+i+r);break}b=b[V]}if(d=1,!w)throw Error("bad:"+p);y=h.get(w),x=y&&y.view,x&&(t.currentId=c(f),t.targetId=c(n),t.prevent=t.preventDefault,t.stop=t.stopPropagation,x.pEvt(p,u,t))}}else{for(;v.length;)s=v.pop(),a=H(s,P)||T,m.test(a)||(a=a+o+u,H(s,P,a));s=e}f=n=e}},Z=function(e,t){var n=0|q[e],r=n>0?1:0;n+=t?-r:r,n||(v(k,e,L,t),t||(n=1)),q[e]=n},D=function(e){var t=this;y(t,e),t.$ol={ks:[]},t.$ns={},t.$res={},t.sign=1,t.addNode(t.id),d(D.$,e,t)},z=D.prototype,K={$win:t,$doc:n};D.$=[],D.prepare=function(e,t){if(!e[i]){e[i]=1,h=t;var n,a,s,c,f,u,m=e.prototype,l={},v=[];for(var d in m)if(n=m[d],a=d.match(_))for(s=a[1],c=a[2],c=c.split(o),f=c.length-1;f>-1;f--)a=c[f],u=K[s],u?v.push({n:s,t:a,h:u,f:n}):(l[a]=1,m[s+i+a]=n);else"render"==d&&n!=r&&(m[d]=O(n));m.$evts=l,m.$sevts=v}},D.mixin=function(e,t){t&&D.$.push(t),y(z,e)},y(y(z,f),{render:r,wrapEvent:R,navigate:u.navigate,init:r,hasTmpl:!0,load:function(){var e=this,t=e.hasTmpl,n=arguments,r=function(r){t&&(e.tmpl=R(e.id,r)),E(e),e.fire("interact",0,1),d(e.init,n,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var i=!t&&!e.rendered;i&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(r)):r()},beginUpdate:function(e){var t=this;t.sign>0&&t.rendered&&t.fire("prerender",{id:e||t.id})},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e||t.id}))},wrapAsync:function(e){var t=this,n=t.sign;return function(){n>0&&n==t.sign&&e&&e.apply(this,arguments)}},setHTML:function(e,t){var n,r=this;r.beginUpdate(e),r.sign>0&&(n=r.$(e),n&&(n.innerHTML=t)),r.endUpdate(e)},observeLocation:function(e){var t,n=this;t=n.$ol,t.f=1;var r=t.ks;s._o(e)&&(t.pn=e.path,e=e.params),e&&(t.ks=r.concat((e+a).split(o)))},olChg:function(e){var t,n=this,r=n.$ol;return r.f&&(r.pn&&(t=e.path),t||(t=e.isParam(r.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(w,0,1,1),N(e,1),E(e,1)),e.sign--},pEvt:function(e,t,n){var r=this;if(r.sign>0){var a=b.get(e);a||(a=e.match(C),a={n:a[1],f:a[2],i:a[3],p:U.p={}},a.i&&a.i.replace(M,U),b.set(e,a));var o=a.n+i+t,s=r[o];s&&(n[a.f]&&n[a.f](),n.params=a.p,d(s,n,r))}},addNode:function(e){this.$ns[e]=1},removeNode:function(e){delete this.$ns[e]},inside:function(e){var t,n,r=this;for(n in r.$ns)if(t=r.$i(e,n))break;return t},manage:function(e,t){var n=this,r=arguments.length,o=1,s=n.$res;1==r&&(t=e,e=a),e&&S(s,e),e||(o=0,e="res_"+x++);var c={hk:o,e:t,mr:t&&t[i]==i};return s[e]=c,t},getManaged:function(t,n){var r=this,i=r.$res,a=e;if(g(i,t)){var o=i[t];a=o.e,n&&delete i[t]}return a},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e){S(this.$res,e,1)}});var B={},F="?t="+Math.random(),Q={},G={};return z.fetchTmpl=function(e,t){var n=this,r="tmpl"in n;if(r)t(n.tmpl);else if(g(Q,e))t(Q[e]);else{var i=e.indexOf("/"),a=e.substring(0,i);B[a]||(B[a]=require.s.contexts._.config.paths[a]);var o=B[a]+e.substring(i+1)+".html",s=G[o],c=function(n){t(Q[e]=n)};s?s.push(c):(s=G[o]=[c],$.ajax({url:o+F,success:function(e){d(s,e),delete G[o]},error:function(e,t){d(s,t),delete G[o]}}))}},D.extend=function(e,t,n){var r=this,i=function(e){r.call(this,e),n&&n.call(this,e)};return i.extend=r.extend,s.extend(i,r,e,t)},D}),s("magix/model",["magix/magix"],function(e){var t=e.has,n=e._o,o=e.toString,s="GET",c="POST",u=function(){this.id="m"+f++},h=function(r){return function(a,o,s){var c,f,u,h=this,m=i+r;h[m]||(h[m]={}),u=h[m],e._f(a)&&(a=e.tryCall(a)),a&&!n(a)&&(c={},c[a]=o,a=c);for(f in a)s&&t(u,f)||(u[f]=a[f])}};return e.mix(u.prototype,{sync:r,getPostParams:function(){return this[i+c]},getUrlParams:function(){return this[i+s]},setPostParams:h(c),setUrlParams:h(s),get:function(e,t,n){var r=this,i=arguments.length,s=2==i,c=r.$attrs;if(i){for(var f=(e+a).split(".");c&&f[0];)c=c[f.shift()];f[0]&&(c=n)}return s&&o.call(t)!=o.call(c)&&(c=t),c},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),e){if(!n(e)){var i={};i[e]=t,e=i}for(var a in e)r.$attrs[a]=e[a]}},request:function(e,t){var r=this;if(!r.$ost){var i=function(i,a){r.$ost||(n(a)||(a={data:a}),r.set(a),e(i,t))};r.$tspt=r.sync(r.$temp=i)}},destroy:function(){var e=this,t=e.$tspt,n=e.$temp;n&&(n("abort"),e.$temp=0),e.$ost=1,t&&t.abort&&t.abort(),e.$tspt=0}}),u.extend=function(t,n,r){var i=this,a=function(){i.call(this),r&&r.call(this)};return e.extend(a,i,t,n)},u}),s("magix/mmanager",["magix/magix","magix/event"],function(n,r){var s=n.has,c=n.tryCall,u=n._a,h=n._f,m=n._o,l=1,v=2,d=4,g="postParams",p="urlParams",$=Date.now||function(){return+new Date},y=t.JSON,x=n.mix,w=12e5,b=function(e,t,n,r){if(h(e))t&&(n=b(c(e)));else if(y)n=y.stringify(e);else if(m(e)||u(e)){n=[];for(r in e)s(e,r)&&n.push(r,i,b(e[r]))}else n=e;return n},C=function(e,t,n){for(var r,a=[t.name,b(n)],o={},s=e.length-1;s>-1;s--)r=e[s],o[r]||a.push(o[r]=b(t[r],1),b(n[r],1));return a.join(i)},M=function(e){var t=e.cache;return t&&(t=t===!0?w:0|t),t},_=function(e){throw Error(e)},q=function(e,t){var r=this;r.$mClz=e,r.$mCache=n.cache(),r.$mReqs={},r.$mMetas={},r.$sKeys=(t&&(a+t).split(o)||[]).concat(g,p),r.id="mm"+f++,c(q.$,arguments,r)},P=[].slice,k=function(e,t,n,r){return function(i){return e.apply(t,[n,r,i])}},V=function(e,t){var n=t.b,r=t.a,i=r[n];if(i){var a=i.q;delete r[n],c(a,e,i.e)}},A=function(t,n,r){var i,a,o=this,s=n.a,f=n.c,u=n.d,h=n.g,m=n.i,g=n.j,p=n.k,y=n.l,x=n.m,w=n.n,b=n.o;n.b++,delete f[o.id];var C=o.$mm,M=C.key;if(u[t]=o,r)n.e=1,i=1,n.f=r,h.msg=r,h[t]=r,g.fire("fail",{model:o,msg:r}),a=1;else{if(!m.has(M)){M&&m.set(M,o),C.time=$();var _=C.done;_&&c(_,o),C.cls&&g.clearCache(C.cls),g.fire("done",{model:o}),a=1}o.fromCache=C.used>0,C.used++}if(!s.$ost){if(p==l){var q=y?x[t]:x;q&&(w[t]=c(q,[i?h:e,o,h],s))}else if(p==v){b[t]={m:o,e:i,s:r};for(var P,k,V=b.i||0;P=b[V];V++)k=y?x[V]:x,P.e&&(h.msg=P.s,h[V]=P.s),w[V]=c(k,[P.e?h:e,P.m,h].concat(w),s);b.i=V}n.b==n.h&&(n.e||(h=e),w.unshift(h),p==d&&(u.unshift(h),w[1]=c(x,u,s)),s.$busy=0,s.doNext(w)),a&&g.fire("finish",{msg:r,model:o})}},I=function(e,t,n,r,i){if(e.$busy)return e.next(function(){this.send(t,n,r,i)});e.$busy=1,e.sign++;var a=e.$host,o=a.$mCache,c=a.$mReqs,f=e.$reqs;u(t)||(t=[t]);var h=t.length,m=[],l=u(n);l&&(m=Array(n.length));for(var v,d={a:e,b:0,c:e.$reqs,d:Array(h),g:{},h:h,i:o,j:a,k:r,l:l,m:n,n:m,o:[]},g=0;t.length>g;g++)if(v=t[g]){var p=a.getModel(v,i),$=p.entity,y=$.$mm.key,x=k(A,$,g,d);x.id=e.id,y&&s(c,y)?c[y].q.push(x):p.update?(f[$.id]=$,y&&(c[y]={q:[x],e:$},x=V),$.request(x,{a:c,b:y})):x()}else _("empty model");return e},T=function(e,t){return function(n,r){var i=P.call(arguments,1);return I(this,n,i.length>1?i:r,e,t)}};x(q,{create:function(e,t){return new q(e,t)},mixin:function(e,t){t&&q.$.push(t),x(q.prototype,e)},$:[]});var j=function(e){var t=this;t.$host=e,t.$reqs={},t[i]=i,t.sign=1,t.id="mr"+f++,t.$queue=[]};return x(j.prototype,{fetchAll:function(e,t){return I(this,e,t,d)},save:function(e,t){return I(this,e,t,d,1)},fetchOrder:T(v),fetchOne:T(l),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,n=e.$reqs,r=t.$mReqs;for(var i in n){var a,o,f=n[i],u=f.$mm.key,h=[],m=[];if(u&&s(r,u)){a=r[u],o=a.q;for(var l,v=0;o.length>v;v++)l=o[v],l.id!=e.id?h.push(l):m.push(l)}h.length?(c(m,"abort",a.e),a.q=h):f.destroy()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;return t.$queue.push(e),t.doNext(t.$args),t},doNext:function(e){var t=this;if(!t.$busy){t.$busy=1;var n=++t.sign;t.$ntId=setTimeout(function(){t.$busy=0,t.$args=e;var r,i=t.$queue,a=i.shift();a&&(r=c(a,e,t),n==t.sign&&t.doNext(r===i.$?e:[null,r]))},0)}},destroy:function(){var e=this;e.$ost=1,e.stop()}}),q.mixin(r),q.mixin({registerModels:function(e){var t=this,n=t.$mMetas;u(e)||(e=[e]);for(var r,i,a,o=0;e.length>o;o++)r=e[o],r&&(i=r.name,i?n[i]&&_("already exist:"+i):_("miss name"),a=M(r),a&&(r.cache=a),n[i]=r)},registerMethods:function(e){x(this,e)},create:function(e){var t=this,n=t.getMeta(e),r=M(e)||n.cache,i=new t.$mClz;return i.set(n),i.$mm={used:0,name:n.name,done:n.done,cls:n.cleans,key:r&&C(t.$sKeys,n,e)},e.name&&i.set(e),i.setUrlParams(n[p]),i.setPostParams(n[g]),i.setUrlParams(e[p]),i.setPostParams(e[g]),t.fire("start",{model:i}),i},getMeta:function(e){var t=this,n=t.$mMetas,r=e.name||e,i=n[r];return i||_("Unfound:"+r),i},getModel:function(e,t){var n,r,i=this;return t||(n=i.getCached(e)),n||(r=1,n=i.create(e)),{entity:n,update:r}},createMRequest:function(e,t){return e.manage(t,new j(this))},clearCache:function(e){var t=this,r=t.$mCache,i=r.list();e=n.toMap((e+a).split(o));for(var c=0;i.length>c;c++){var f=i[c],u=f.v,h=u&&u.$mm;h&&s(e,h.name)&&r.del(h.key)}},getCached:function(e){var t,n,r=this,i=r.$mCache,a=r.getMeta(e),o=M(e)||a.cache;if(o&&(n=C(r.$sKeys,a,e)),n){var s=r.$mReqs,c=s[n];c?t=c.e:(t=i.get(n),t&&o>0&&$()-t.$mm.time>o&&(i.del(n),t=0))}return t}}),q}),n.createElement("vframe")})(null,this,document,function(){},"","",",",define);