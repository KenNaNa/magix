/*!3.8.7 MIT kooboy_li@163.com*/KISSY.add("magix",function(t,e,n){var r,i=t.all,o=t.isObject,a=t.isArray,f=0,u="",c=[],s=",",h=null,d=window,v=document,$=i(v),l=d.setTimeout,p="changed",g="change",b="pageunload",m="value",y="mxs",w="mxa",x=function(){},k=JSON.stringify,A="\x1e",V="object",I="prototype",S="params",C="path",T="mx-view",q=/[#?].*$/,N=/([^=&?\/#]+)=?([^&#?]*)/g,E=/(?!^)=|&/,U=function(t){return(t||"mx_")+f++},O=U(),P={rootId:U(),defaultView:O,error:function(t){throw t}},j=function(t){return typeof t==V?t:v.getElementById(t)},H=function(t){return!t||typeof t!=V},L=function(t,e,n){var r,i,o,a=0;for(o in t)r=t[o],i=e[o],H(r)&&i===r||(n[o]=1,a=1),e[o]=r;return a},Z=function(t,e,n){if(t=j(t),e=j(e),t&&e&&!(n=t==e))try{n=16==(16&e.compareDocumentPosition(t))}catch(t){}return n},M=function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])K(e,i)&&(t[i]=e[i]);return t},R=function(t,e,n){for(n in e=[],t)K(t,n)&&e.push(n);return e},B=P.hasOwnProperty,D=i("head"),z=function(t,e){e&&!z[t]&&(z[t]=1,D.append("<style>"+e))},F=function(t){return t.id||(t.$a=1,t.id=U())},J=function(t,e,n,r,i){e=e||c,a(t)||(t=[t]),a(e)||(e=[e]);for(var o=0,f=t;o<f.length;o++){i=f[o];try{r=i&&i.apply(n,e)}catch(t){P.error(t)}}return r},K=function(t,e){return t&&B.call(t,e)},Q=function(t,e,n){var r,i;if(!n&&H(e))(r=e+u)[0]==A&&(e=t[r]);else for(r in e)i=e[r],n&&!H(i)&&Q(t,i,n),r[0]==A&&(delete e[r],r=t[r]),e[r]=(i+u)[0]==A?t[i]:i;return e},X=function(t,e){return e.f-t.f||e.t-t.t},Y=function(t,e,n,r){(r=this).c=[],r.b=e||5,r.x=r.b+(t||20),r.r=n};M(Y[I],{get:function(t){var e=this.c[A+t];return e&&(e.f++,e.t=f++,e=e.v),e},each:function(t,e,n){for(var r=0,i=(n=this).c;r<i.length;r++)t(i[r].v,e,n)},set:function(t,e){var n=this.c,r=A+t,i=n[r],o=this.b;if(!i){if(n.length>=this.x)for(n.sort(X);o--;)(i=n.pop()).f>0&&this.del(i.o);i={o:t},n.push(i),n[r]=i}i.v=e,i.f=1,i.t=f++},del:function(t){t=A+t;var e=this.c,n=e[t],r=this.r;n&&(n.f=-1,n.v=u,delete e[t],r&&J(r,n.o))},has:function(t){return K(this.c,A+t)}});var _,G=function(e,n){t.use(e&&e+u,function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];n&&n.apply(t,e)})},W=t.extend,tt=n.test,et=function(t,e){e=this,t.eventTarget=e.e,J(e.f,t,e.v)},nt=function(t,n,r,i,o){o?e[(i?"un":u)+"delegate"](t,n,r,o):e[i?"detach":"on"](t,n,r,o)},rt=new Y,it=0,ot=function(t,e,n){try{n=decodeURIComponent(n)}catch(t){}_[e]=n},at=function(t){var e,n=rt.get(t);return n||(_={},t==(e=t.replace(q,u))&&E.test(e)&&(e=u),t.replace(e,u).replace(N,ot),rt.set(t,n={a:e,b:_})),{path:n.a,params:M({},n.b)}},ft=function(t,e,n){var r,i,o,a=[];for(i in e)r=e[i]+u,(!n||r||K(n,i))&&(r=encodeURIComponent(r),a.push(o=i+"="+r));return o&&(t+=(t&&(~t.indexOf("?")?"&":"?"))+a.join("&")),t},ut=function(t,e){var n,r={};if(t)for(var i=0,o=t;i<o.length;i++)n=o[i],r[e&&n?n[e]:n]=e?n:1+(0|r[n]);return r},ct=new Y,st=function(t,e,n){return ct.has(t)?n=ct.get(t):(n=J(Function("return "+t)),t.indexOf(A)>-1?Q(e,n,1):ct.set(t,n)),n},ht={config:function(t,e){return e=P,t&&(e=o(t)?M(e,t):e[t]),e},boot:function(t){M(P,t),G(P.ini,function(e){M(P,e,t),G(P.exts,function(){Mt.on(p,Ft),mt.on(p,Ft),it=1,jt()})})},toMap:ut,toTry:J,toUrl:ft,parseUrl:at,mix:M,has:K,keys:R,inside:Z,node:j,applyStyle:z,guid:U,use:G,Cache:Y,nodeId:F},dt={fire:function(t,e,n,r){var i,o,a,f,c=this,s=c[A+t];if(e||(e={}),e.type||(e.type=t),s)for(o=(i=s.length)-1;i--;)(f=s[a=r?i:o-i]).f?(f.x=1,J(f.f,e,c),f.x=u):f.x||(s.splice(a,1),o--);(s=c["on"+t])&&J(s,e,c),n&&c.off(t)},on:function(t,e){var n=A+t;(this[n]||(this[n]=[])).push({f:e})},off:function(t,e){var n,r=A+t,i=this[r];if(e){if(i)for(var o=0,a=i;o<a.length;o++)if((n=a[o]).f==e){n.f=u;break}}else delete this[r],delete this["on"+t]}};ht.Event=dt;var vt={},$t={},lt={},pt=0,gt=function(t){for(var e=0,n=t=(t+u).split(",");e<n.length;e++){var r=n[e];K($t,r)?$t[r]++:$t[r]=1}return t},bt=function(t){for(var e,n=0,r=t;n<r.length;n++)e=r[n],K($t,e)&&(--$t[e]||(delete $t[e],delete vt[e]))};var mt=M({get:function(t){var e=t?vt[t]:vt;return e},set:function(t){return pt=L(t,vt,lt)||pt,this},digest:function(t){t&&mt.set(t),pt&&(pt=0,this.fire(p,{keys:lt}),lt={})},diff:function(){return lt},clean:function(t){return{ctor:function(){t=gt(t),this.on("destroy",function(){return bt(t)})}}}},dt);ht.State=mt;var yt,wt,xt,kt,At,Vt,It="view",St=new Y,Ct=new Y,Tt=d.location,qt=0,Nt={query:{},params:{},href:u},Et=/(?:^.*\/\/[^\/]+|#.*$)/gi,Ut=/^[^#]*#?!?/,Ot=function(t){return this[S][t]||u},Pt=function(t,e){t="#!"+t,e?Tt.replace(t):Tt.hash=t},jt=function(){var t,e,n=Lt().srcHash;nt(d,"hashchange",function(r,i,o){e||(i=Lt(),(t=i.srcHash)!=n&&(o=function(){r.p=1,n=t,e=u,Pt(t),Zt()},r={reject:function(){r.p=1,e=u,Pt(n)},resolve:o,prevent:function(){e=1}},Mt.fire(g,r),e||r.p||o()))}),nt(d,"beforeunload",function(t,e,n){if(t=t||d.event,e={},Mt.fire(b,e),n=e.msg)return t&&(t.returnValue=n),n}),Zt()},Ht=v.title,Lt=function(t){t=t||Tt.href;var e,n,r,i,a,f=St.get(t);return f||(e=t.replace(Et,u),n=t.replace(Ut,u),r=at(e),i=at(n),a=M({},r[S],i[S]),f={get:Ot,href:t,srcQuery:e,srcHash:n,query:r,hash:i,params:a},it&&(!function(t,e){if(wt||(wt=P.routes||{},xt=P.unmatchView,kt=P.defaultView,At=P.defaultPath||"/",Vt=P.rewrite),!t[It]){var n=t.hash[C]||At;Vt&&(n=Vt(n,t[S],wt)),e=wt[n]||xt||kt,t[C]=n,t[It]=e,o(e)&&M(t,e)}}(f),St.set(t,f))),f},Zt=function(){var t=Lt(),e=function(t,e){var n=t.href,r=e.href,i=n+A+r,o=Ct.get(i);if(!o){var a,f;o={params:f={},force:!n};for(var u=t[S],c=e[S],s=function(t){var e=u[t],n=c[t];e!=n&&(f[t]={from:e,to:n},a=1)},h=0,d=R(u).concat(R(c));h<d.length;h++)s(d[h]);u=t,c=e,f=o,s(C),s(It),Ct.set(i,o={a:a,b:o})}return o}(Nt,Nt=t);return!qt&&e.a&&((yt=e.b)[C]&&(v.title=t.title||Ht),Mt.fire(p,yt)),qt=0,yt},Mt=M({parse:Lt,diff:Zt,to:function(t,e,n,r){!e&&o(t)&&(e=t,t=u);var i,a,f,c,s=at(t),h=s[S],d=s[C],v=Nt[C],$=Nt[S],l=Nt.query[S];if(M(h,e),d)for(v in l)K(h,v)||(h[v]=u);else $&&(d=v,h=M({},$,h));a=Nt,f=n,c=r,(i=ft(i=d,h,l))!=a.srcHash&&(qt=c,Pt(i,f))}},dt);ht.Router=Mt;var Rt,Bt,Dt=0,zt=function(t,e,n,r,i,o){if(t&&t.$a!=Dt&&(n=t.$v)&&n.$a>1){(e?function(t,e,n){var r,i=t.$os;if(i)for(var o=0,a=i;o<a.length&&(r=a[o],!(n=K(e,r)));o++);return n}(n,e):Ve(n))&&n.$b();for(var a=0,f=t.children();a<f.length;a++)o=f[a],zt(Xt[o],e)}},Ft=function(t,e,n){e=Qt(),(n=t[It])?e.mountView(n.to):(Dt=f++,zt(e,t.keys))},Jt=function(t){if(!t.$b&&!t.$d&&t.$cc==t.$rc){t.$cr||(t.$cr=1,t.$ca=0,t.fire("created"));var e=void 0,n=t.id,r=t.pId;(e=Xt[r])&&!K(e.$e,n)&&(e.$e[n]=1,e.$rc++,Jt(e))}},Kt=function(t,e){if(!t.$ca&&t.$cr){t.$cr=0,t.$ca=1,t.fire("alter",e);var n=void 0,r=t.id,i=t.pId;(n=Xt[i])&&K(n.$e,r)&&(n.$rc--,delete n.$e[r],Kt(n,e))}},Qt=function(t){return Rt||(r=v.body,j(t=P.rootId)||(r.id=t),Rt=new _t(t)),Rt},Xt={},Yt=[],_t=function(t,e,n){var r,i;(n=this).id=t,n.$c={},n.$cc=0,n.$rc=0,n.$g=1,n.$e={},n.$f=[],n.pId=e,i=n,K(Xt,r=t)||(Xt[r]=i,_t.fire("add",{vframe:i}),(r=j(r))&&(r.vframe=i))};M(_t,{all:function(){return Xt},get:function(t){return Xt[t]}},dt),M(_t[I],dt,{mountView:function(t,e){var n,r,i,o,a,f,u=this,c=u.id,s=u.pId,h=u.$g,d=j(c);!u.$h&&d&&(u.$h=1,u.$i=d.innerHTML),u.unmountView(),u.$b=0,d&&t&&(u[C]=t,n=at(t),i=n[C],r=++h,o=n[S],f=(f=(f=(f=Xt[s])&&f.$v)&&f.$d)&&f.$a,t.indexOf(A)>0&&Q(f,o),u.$n=n[C],M(o,e),G(i,function(t){if(r==u.$g){if(!t)return P.error(Error("id:"+c+" cannot load:"+i));a=Ae(t),i=new t(c,u,o,a),u.$v=i,u.$a=Dt,ye(i),J(i.init,o,i),i.$b(),i.$e||(u.$h=0,i.$f||i.endUpdate())}}))},unmountView:function(){var t,e,n=this,r=n.$v,o=n.id;n.$f=[],r&&(Bt||(e=1,Bt={id:o}),n.$b=1,n.unmountZone(0,1),Kt(n,Bt),n.$v=0,r.$a>0&&(r.$a=0,r.fire("destroy",0,1,1),be(r,1),ye(r,1),r.owner=0),r.$a--,(t=j(o))&&n.$h&&i(t).html(n.$i),e&&(Bt=0)),n.$g++},mountVframe:function(t,e,n){var r,i=this,o=i.id,a=i.$c;return Kt(i,{id:t}),(r=Xt[t])||(K(a,t)||(i.$o=0,i.$cc++),a[t]=t,(r=Yt.pop())?_t.call(r,t,o):r=new _t(t,o)),r.mountView(e,n),r},mountZone:function(t,e){var n,r,o=this,a=[];t=t||o.id;var f,u=i("#"+t+" ["+T+"]");o.$d=1;for(var c=0,s=u;c<s.length;c++)n=s[c],r=F(n),n.$b||(n.$b=1,a.push([r,n.getAttribute(T)]));for(var h=0,d=a;h<d.length;h++)r=(f=d[h])[0],n=f[1],a[r]?P.error(Error("vf.id duplicate:"+r+" at "+o[C])):o.mountVframe(a[r]=r,n);o.$d=0,e||Jt(o)},unmountVframe:function(t,e){var n,r,i,o;if(t=t?this.$c[t]:this.id,n=Xt[t]){var a=n.$cr,f=n.pId;n.unmountView(),i=a,(o=Xt[r=t])&&(delete Xt[r],_t.fire("remove",{vframe:o,fcc:i}),(r=j(r))&&(r.$b=0,r.vframe=0,r.$a=0)),n.id=n.pId=n.$c=n.$e=0,n.$h=0,n.off("alter"),n.off("created"),Yt.push(n),(n=Xt[f])&&K(n.$c,t)&&(delete n.$c[t],n.$o=0,n.$cc--,e||Jt(n))}},unmountZone:function(t,e){var n;for(n in this.$c)(!t||n!=t&&Z(n,t))&&this.unmountVframe(n,1);e||Jt(this)},parent:function(t,e){for(e=this,t=t>>>0||1;e&&t--;)e=Xt[e.pId];return e},children:function(t){return(t=this).$o||(t.$o=R(t.$c))},invoke:function(t,e){var n,r,i,o,a,f=this.$f;return(r=this.$v)&&r.$f?n=(i=r[t])&&J(i,e,r):((o=f[a=A+t])&&(o.r=e===o.a),o={n:t,a:e,k:a},f.push(o),f[a]=o),n}}),ht.Vframe=_t,n[I].invokeView=function(t,e){if(this.length){var n=this[0],r=n.vframe;if(void 0===e)return r&&r.invoke(t);for(var i=0;i<this.length;i++)(r=(n=this[i]).vframe)&&r.invoke(t,e)}};var Gt=new Y(30,10),Wt=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,te={},ee={},ne=function(t,e){var n,i,o,a,f,u,s=[],h=t,d=t.getAttribute("mx-"+e),v=[],$=0;if(d&&((a=Gt.get(d))||(a={v:(a=d.match(Wt)||c)[1],n:a[2],i:a[3]},Gt.set(d,a)),a=M({},a,{r:d})),a&&!a.v||ee[e]){if(!(u=t.$a))for(v.push(h);h!=r&&(h=h.parentNode);){if(Xt[i=h.id]||(i=h.$v)){u=i;break}v.push(h)}if(u){for(var l=0,p=v;l<p.length;l++)(d=p[l]).$a=u;h=t.id,Xt[h]&&($=u=h);do{if((n=Xt[u])&&(f=n.$v)){for(i in(o=f.$so)[e])o={r:i,v:u,n:i},i?tt(t,i)&&s.push(o):$&&s.unshift(o);if(f.$e&&!$){a&&!a.v&&(a.v=u);break}$=0}}while(n&&(u=n.pId))}}return a&&s.push(a),s},re=function(t){for(var e,n,i,o,a,f,u,c=t.target,s=t.type,h=[];c!=r;){if((e=ne(c,s)).length){h=[];for(var d=0,v=e;d<v.length;d++){var $=v[d],l=$.v,p=($.r,$.n),g=($.p,$.i);if(f!=l){if(f&&t.isPropagationStopped())break;f=l}(o=(i=Xt[l])&&i.$v)?(a=o[p+A+s])&&(t.eventTarget=c,u=g?st(g,o.$d.$a):{},t[S]=u,J(a,t,o)):t.stopPropagation()}}if((n=c.$)&&n[s]||t.isPropagationStopped())break;h.push(c),c=c.parentNode||r}for(var b=0,m=h;b<m.length;b++)(n=(c=m[b]).$||(c.$={}))[s]=1},ie="http://www.w3.org/2000/svg",oe={option:[1,"<select multiple>"],thead:[1,"<table>"],col:[2,"<table><colgroup>"],tr:[2,"<table><tbody>"],td:[3,"<table><tbody><tr>"],area:[1,"<map>"],param:[1,"<object>"],g:[1,'<svg xmlns="'+ie+'">'],all:[0,""]},ae=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;oe.optgroup=oe.option,oe.tbody=oe.tfoot=oe.colgroup=oe.caption=oe.thead,oe.th=oe.td;var fe=v.implementation.createHTMLDocument(u),ue=fe.createElement("base");ue.href=v.location.href,fe.head.appendChild(ue);var ce=function(t,e){var n=F(e);t.$c[n]?t.unmountVframe(n,1):t.unmountZone(n,1)},se={INPUT:[m,"checked"],TEXTAREA:[m],OPTION:["selected"]},he=function(t,e,n){var r,i=t.nodeName,o=se[i],a=0;if(o)for(var f=0,u=o;f<u.length;f++)if(t[r=u[f]]!=e[r]){if(a=1,!n)break;t[r]=e[r]}return a},de=function(t,e){return 1==t.nodeType&&(t.$kd?e=t.$k:((e=t.$a?u:t.id)||(e=t.getAttribute(y)),e||(e=t.getAttribute(T))&&(e=at(e)[C]),t.$kd=1,t.$k=e)),e},ve=function(t,e,n,r,i,o){for(var a,f,u,c,s,h=t.lastChild,d=e.firstChild,v=0,$={},l={};h;)v++,(u=de(h))&&(u=$[u]||($[u]=[])).push(h),h=h.previousSibling,d&&((u=de(d))&&(l[u]=1),d=d.nextSibling);for(;d;)(u=de(d))&&(l[u]=1),d=d.nextSibling;for(d=e.firstChild,s=e.childNodes.length<v,h=t.firstChild;d;)v--,a=d,d=d.nextSibling,(c=$[u=de(a)])&&(c=c.pop())?(c!=h?s&&h.nextSibling==c?(t.appendChild(h),h=c.nextSibling):t.insertBefore(c,h):h=h.nextSibling,$e(c,a,t,n,r,i,o)):h?(u=de(f=h))&&$[u]&&l[u]?(v++,n.c=1,t.insertBefore(a,f)):(h=h.nextSibling,$e(f,a,t,n,r,i,o)):(t.appendChild(a),n.c=1);for(;v-- >0;)f=t.lastChild,ce(r,f),t.removeChild(f),n.c=1},$e=function(t,e,n,r,i,o,a,f){if((f=he(t,e))||1==t.nodeType&&t.hasAttribute("mxv")||!t.isEqualNode||!t.isEqualNode(e))if(t.nodeName===e.nodeName)if(1===t.nodeType){var u=e.getAttribute(y);if(!f&&u&&u==t.getAttribute(y))return;var c=e.getAttribute(T),h=e.innerHTML,d=e.getAttribute(w),v=!d||d!=t.getAttribute(w),$=void 0,l=void 0,p=Xt[t.id],g=void 0,b=void 0,x=c&&at(c),k=void 0,V=void 0,I=void 0,q=void 0;if(c&&p&&p.$n==x[C]&&(b=p.$v)){if(V=h!=p.$i,q=I=c!=p[C],g=t.getAttribute("mxv"),!V&&!q&&g)for(var N=0,E=k=g.split(s);N<E.length;N++)if(g=E[N],K(a,g)){q=1;break}q||V?(g=b.$g)?(k=x[S],c.indexOf(A)>-1&&Q(o,k),p.$i=h,p[C]=c,x={node:e,html:h,deep:!b.$e,inner:V,query:q},v=1,J(g,[k,x],b)&&r.v.push(b),$=x.deep):(l=1,$=1):v=1}else $=1,l=p;l&&(r.c=1,p.unmountVframe(0,1)),v&&(1===v?(d&&t.setAttribute(w,d),u&&t.setAttribute(y,u),I&&t.setAttribute(T,c)):function(t,e,n,r){var i,o,a,f;delete t.$,delete t.$kd;var u=t.attributes,c=e.attributes;for(o=u.length;o--;)i=u[o].name,e.hasAttribute(i)||("id"==i?r||n.d.push([t,""]):(n.c=1,t.removeAttribute(i)));for(o=c.length;o--;)a=(i=c[o]).name,f=i[m],t.getAttribute(a)!=f&&("id"==a?n.d.push([t,f]):(n.c=1,t.setAttribute(a,f)))}(t,e,r,p&&c)),f&&1!==v&&he(t,e,1),$&&ve(t,e,r,i,o,a)}else t.nodeValue!==e.nodeValue&&(r.c=1,t.nodeValue=e.nodeValue);else ce(i,t),n.replaceChild(e,t),r.c=1},le=function(t){var e;this.$b=t,this.$c=1,this.$a=((e={vId:t})[A]=1,e),this.$k={}};M(le[I],{get:function(t,e){return e=this.$a,t&&(e=e[t]),e},set:function(t){var e=this;return e.$c=L(t,e.$a,e.$k)||e.$c,e},digest:function(t){var e=this.set(t),n=e.$k,r=e.$c;e.$c=0,e.$k={},t=e.$a;var i,o,a=e.$b,f=Xt[a],u=f&&f.$v,c={d:[],v:[]},s=j(a);if(r&&u&&u.$a>0&&(i=u.$e)){o=function(t,e){var n=fe.createElement("div"),r=ie==e.namespaceURI?"g":(ae.exec(t)||[0,""])[1].toLowerCase(),i=oe[r]||oe.all;n.innerHTML=i[1]+t;for(var o=i[0];o--;)n=n.lastChild;return n}(i(t,a),s),ve(s,o,c,f,t,n);for(var h=0,d=c.d;h<d.length;h++)(o=d[h])[0].id=o[1];for(var v=0,l=c.v;v<l.length;v++)(o=l[v]).$b();!c.c&&u.$f||u.endUpdate(a),c.c&&$.fire("htmlchanged",{vId:a}),u.fire("domready")}return Promise.resolve()},snapshot:function(){return this.$d=k(this.$a),this},altered:function(){if(this.$d)return this.$d!=k(this.$a)},translate:function(t){return Q(this.$a,t,1)},parse:function(t){return st(t,this.$a)}});var pe=/^(\$?)([^<]*)<([^>]+)>$/,ge=function(t,e,n){return t.a?n=t:((n=function(t){J(n.a,t,this)}).a=[t],n.b=1),n.a=n.a.concat(e.a||e),n},be=function(t,e){var n,r,i=t.$r;for(n in i)r=i[n],(e||r.x)&&me(i,n,1)},me=function(t,e,n,r){var i,o,a=t[e];return a&&a!=r&&((i=(o=a.e).destroy)&&n&&J(i,c,o),delete t[e]),o},ye=function(t,e){var n,i,o,a,f,u,c=t.$eo,s=t.$so,h=t.$el,d=t.id;for(n in c)i=n,o=s[n],a=e,void 0,void 0,f=0|te[i],u=a?-1:1,f&&a!==f||nt(r,i,re,a),te[i]=f+u,o&&(ee[i]=(0|ee[i])+u);for(var v=0,$=h;v<$.length;v++)n=$[v],nt(n.e,n.n,et,e,{i:d,v:t,f:n.f,e:n.e})},we=[],xe={win:d,doc:v},ke=function(t,e,n){for(var r,i,o,a,f={},u=0,c=t;u<c.length;u++)for(r in i=c[u])o=i[r],a=f[r],"ctor"!=r?(pe.test(r)&&(a?o=ge(a,o):o.b=1),f[r]=o):n.push(o);for(r in f)K(e,r)||(e[r]=f[r])},Ae=function(t){if(!t[A]){t[A]=[];var e=t[I],n=void 0,r=void 0,i=void 0,o={},a=[],f={},u=void 0,c=void 0,h=void 0,d=void 0,v=void 0;for(h in(r=e.mixins)&&ke(r,e,t[A]),e)if(n=e[h],r=h.match(pe)){c=r[1],i=r[2];for(var $=0,l=r[3].split(s);$<l.length;$++){if(d=l[$],u=xe[i],v=1,c){if(u){a.push({f:n,e:u,n:d});continue}v=2,(u=f[d])||(u=f[d]={}),u[i]=1}o[d]=o[d]|v,(u=e[d=i+A+d])?u.b&&(n.b?e[d]=ge(n,u):K(e,h)&&(e[d]=n)):e[d]=n}}b="$b",m=(p=e)[g="render"],p[g]=p[b]=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];(y=this).$a>0&&(y.$a++,y.fire("rendercall"),be(y),J(m,t,y))},e.$eo=o,e.$el=a,e.$so=f,e.$e=e.tmpl,e.$g=e.assign}var p,g,b,m,y;return t[A]},Ve=function(t){var e,n,r,i=t.$l;if(i.f&&(i.p&&(e=yt[C]),!e&&i.k)){r=yt[S];for(var o=0,a=i.k;o<a.length&&(n=a[o],!(e=K(r,n)));o++);}return e},Ie=function(t,e,n,r){(r=this).owner=e,r.id=t,r.$l={k:[]},r.$r={},r.$a=1,r.updater=r.$d=new le(r.id),J(we,n,r)},Se=Ie[I];M(Ie,{merge:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];ke(t,Se,we)},extend:function(t,e){var n=this,r=(t=t||{}).ctor,i=[];r&&i.push(r);var o=function(t,e,r,o){n.call(this,t,e,r),J(i.concat(o),r,this)};return o.extend=n.extend,W(o,n,t,e)}}),M(Se,dt,{init:x,beginUpdate:function(t,e){(e=this).$a>0&&e.$f&&e.owner.unmountZone(t,1)},endUpdate:function(t,e,n,r,i){(n=this).$a>0&&(t=t||n.id,e?i=e:(i=n.$f,n.$f=1),(r=n.owner).mountZone(t,e),i||l(n.wrapAsync(function(){!function(t,e,n){for(e=t.$f;e.length;)(n=e.shift()).r||t.invoke(n.n,n.a),delete e[n.k]}(r)}),0))},wrapAsync:function(t,e){var n=this,r=n.$a;return function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(r>0&&r==n.$a)return t.apply(e||n,i)}},observeLocation:function(t,e){var n;(n=this.$l).f=1,o(t)&&(e=t[C],t=t[S]),n.p=e,t&&(n.k=(t+u).split(s))},observeState:function(t){this.$os=(t+u).split(s)},capture:function(t,e,n,r){return r=this.$r,e?(me(r,t,1,e),r[t]={e:e,x:n}):e=(r=r[t])&&r.e,e},release:function(t,e){return me(this.$r,t,e)},leaveTip:function(t,e){var n=this,r=function(i){var o="a",a="b";i.type!=g&&(o="b",a="a"),r[o]?(i.prevent(),i.reject()):e()&&(i.prevent(),r[a]=1,n.leaveConfirm(function(){r[a]=0,i.resolve()},function(){r[a]=0,i.reject()},t))},i=function(n){e()&&(n.msg=t)};Mt.on(g,r),Mt.on(b,i),n.on("unload",r),n.on("destroy",function(){Mt.off(g,r),Mt.off(b,i)})},render:x}),ht.View=Ie;var Ce=t.type,Te=t.now,qe=function(){this.id=U("b"),this.$={}};M(qe[I],{get:function(t,e,n){var r=e!=n,i=this.$;if(t){for(var o=a(t)?t.slice():(t+u).split("."),f=void 0;(f=o.shift())&&i;)i=i[f];f&&(i=n)}return r&&Ce(e)!=Ce(i)&&(i=e),i},set:function(t,e){var n;o(t)||((n={})[t]=e,t=n),M(this.$,t)}});var Ne=function(t,e,n){(n=this[t])&&(delete this[t],J(n,e,n.e))},Ee=function(t,e,n,r,i){if(t.$d)return t;if(t.$e)return t.enqueue(Ee.bind(t,t,e,n,r,i));t.$e=1,a(e)||(e=[e]);for(var o,f,u,c,s,d,v,$,l,p=t.constructor,g=0,b=p.$f,m=(o=n,f=p,u=t,c=e.length,s=r,d=p.$c,v=[],$=h,l=0,function(t,e){var n,r=this;l++;var i=r.$b,a=i.k;v[t+1]=r;var p,g={bag:r,error:e};if(e?($=e,f.fire("fail",g),n=1):d.has(a)||(a&&d.set(a,r),i.t=Te(),(p=i.a)&&J(p,r,r),(p=i.x)&&f.clear(p),f.fire("done",g),n=1),!u.$d){var b=l==c;b&&(u.$e=0,2==s&&(v[0]=$,J(o,v,u))),1==s&&J(o,[e||h,r,b,t],u)}n&&f.fire("end",g)}),y=0,w=e;y<w.length;y++){var x=w[y];if(x){var k=p.get(x,i),A=k.e,V=A.$b.k,I=m.bind(A,g++),S=void 0;V&&b[V]?b[V].push(I):k.u?(V&&((S=[I]).e=A,b[V]=S,I=Ne.bind(b,V)),p.$s(A,I)):I()}}return t},Ue=function(){var t=this;t.id=U("s"),t.$g=[]};M(Ue[I],{all:function(t,e){return Ee(this,t,e,2)},save:function(t,e){return Ee(this,t,e,2,1)},one:function(t,e){return Ee(this,t,e,1)},enqueue:function(t){var e=this;return e.$d||(e.$g.push(t),e.dequeue(e.$h)),e},dequeue:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n,r=this;r.$e||r.$d||(r.$e=1,l(function(){r.$e=0,r.$d||(n=r.$g.shift())&&J(n,r.$h=t)},0))},destroy:function(t){(t=this).$d=1,t.$g=0}});var Oe=function(t,e){return[k(e),k(t)].join(A)},Pe=function(t,e,n,r){(r=t&&t.$b)&&e[r.n]&&n.del(r.k)},je=M({add:function(t){var e,n=this.$b;a(t)||(t=[t]);for(var r=0,i=t;r<i.length;r++)if(e=i[r]){var o=e.name,f=e.cache;e.cache=0|f,n[o]=e}},create:function(t){var e=this.meta(t),n=0|t.cache||e.cache,r=new qe;r.set(e),r.$b={n:e.name,a:e.after,x:e.cleans,k:n&&Oe(e,t)},o(t)&&r.set(t);var i=e.before;return i&&J(i,r,r),this.fire("begin",{bag:r}),r},meta:function(t){return this.$b[t.name||t]||t},get:function(t,e){var n,r;return e||(n=this.cached(t)),n||(n=this.create(t),r=1),{e:n,u:r}},clear:function(t){this.$c.each(Pe,ut((t+u).split(s)))},cached:function(t){var e,n,r=this.$c,i=this.meta(t),o=0|t.cache||i.cache;if(o&&(n=Oe(i,t)),n){var a=this.$f[n];a?e=a.e:(e=r.get(n))&&Te()-e.$b.t>o&&(r.del(n),e=0)}return e}},dt);return Ue.extend=function(t,e,n){var r=function(){Ue.call(this)};return r.$s=t,r.$c=new Y(e,n),r.$f={},r.$b={},W(r,Ue,h,je)},ht.Service=Ue,M(x[I],dt),x.extend=function t(e,n){var r=this,i=e&&e.ctor,o=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];r.apply(this,t),i&&i.apply(this,t)};return o.extend=t,W(o,r,e,n)},ht.Base=x,t.add(O,function(){return Ie.extend()}),ht},{requires:["event","node","dom"]});