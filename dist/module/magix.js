/*!3.8.7 MIT kooboy_li@163.com*/let e,t,r=e=>t=>Object.prototype.toString.call(t).slice(8,-1)==e,i=r("Object"),n=r("Array"),o=0,l="",a=[],f=",",s=null,d=window,$=document,u=d.setTimeout,c="changed",h="change",p="pageunload",m="value",b="mxs",g="mxa",v=function(){},y=JSON.stringify,w="\x1e",x="object",k="prototype",S="params",A="path",V="mx-view",I=/[#?].*$/,P=/([^=&?\/#]+)=?([^&#?]*)/g,T=/(?!^)=|&/,C=e=>(e||"mx_")+o++,E=C(),j={rootId:C(),defaultView:E,error(e){throw e}},O=e=>typeof e==x?e:$.getElementById(e),q=e=>!e||typeof e!=x,N=(e,t,r)=>{let i,n,o,l=0;for(o in e)i=e[o],n=t[o],q(i)&&n===i||(r[o]=1,l=1),t[o]=i;return l},H=(e,t,r)=>{if(e=O(e),t=O(t),e&&t&&!(r=e==t))try{r=16==(16&t.compareDocumentPosition(e))}catch(e){}return r},{assign:L,keys:M,hasOwnProperty:U}=Object,D=document.head,Z=document.createElement("div"),R=(e,t)=>{t&&!R[e]&&(R[e]=1,Z.innerHTML=`<style>${t}`,D.appendChild(Z.firstChild))},_=e=>e.id||(e.$a=1,e.id=C()),B=(e,t,r,i,o)=>{t=t||a,n(e)||(e=[e]),n(t)||(t=[t]);for(o of e)try{i=o&&o.apply(r,t)}catch(e){j.error(e)}return i},z=(e,t)=>e&&U.call(e,t),F=(e,t,r)=>{let i,n;if(!r&&q(t))(i=t+l)[0]==w&&(t=e[i]);else for(i in t)n=t[i],r&&!q(n)&&F(e,n,r),i[0]==w&&(delete t[i],i=e[i]),t[i]=(n+l)[0]==w?e[n]:n;return t},J=(e,t)=>t.f-e.f||t.t-e.t,Q=function(e,t,r,i){(i=this).c=[],i.b=t||5,i.x=i.b+(e||20),i.r=r};L(Q[k],{get(e){let t=this.c[w+e];return t&&(t.f++,t.t=o++,t=t.v),t},each(e,t,r,i,n){i=(r=this).c;for(n of i)e(n.v,t,r)},set(e,t){let r=this,i=r.c,n=w+e,l=i[n],a=r.b;if(!l){if(i.length>=r.x)for(i.sort(J);a--;)(l=i.pop()).f>0&&r.del(l.o);l={o:e},i.push(l),i[n]=l}l.v=t,l.f=1,l.t=o++},del(e){e=w+e;let t=this.c,r=t[e],i=this.r;r&&(r.f=-1,r.v=l,delete t[e],i&&B(i,r.o))},has(e){return z(this.c,w+e)}});let W=(e,r)=>{if(e)if(E==e)t||(t=Nt.extend()),r(t);else{let t=[],i=0;i(e)||(e=[e]);let n=e=>n=>{t[e]=n.default,++i==t.length&&r(...t)},o=j.paths;for(let t,r,i,l=e.length;l--;)(r=(t=e[l]).indexOf("/"))>-1&&(i=t.slice(0,r),t=t.slice(r+1),t=(o[i]||`unset/${i}/path/`)+t),t.endsWith(".js")||(t+=".js"),import(t).then(n(l))}else r()},X=function(){},G=(e,t,r,i,n)=>(X[k]=t[k],n=new X,L(n,r),L(e,i),n.constructor=e,e[k]=n,e),K=(e,t,r)=>{let i=$.createEvent("Events");i.initEvent(t,!0,!0);for(let e in r)i[e]=r[e];e.dispatchEvent(i)},Y=(e,t)=>{if(!t||!e||1!==e.nodeType)return 0;return(e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector).call(e,t)},ee=e=>e._mx||(e._mx=C("e")),te={},re=()=>!0,ie=()=>!1,ne={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},oe=(e,t,r,i)=>{let n=ee(e),o=te[n]||(te[n]=[]),l={$a:r&&r.i,$b:i,$d:t,$e(t){(t=(e=>{if(!e.isDefaultPrevented){for(let t in ne){let r=ne[t],i=e[t];e[t]=((...t)=>(e[r]=re,i&&i.apply(e,t))),e[r]=ie}(void 0!==e.defaultPrevented?e.defaultPrevented:"returnValue"in e?!1===e.returnValue:e.getPreventDefault&&e.getPreventDefault())&&(e.isDefaultPrevented=re)}return e})(t)).isImmediatePropagationStopped()||i.call(e,t,r)}};o.push(l),e.addEventListener(t,l.$e,!1)},le=(e,t)=>{e.eventTarget=t.e,B(t.f,e,t.v)},ae=(e,t,r,i,n)=>{i?((e,t,r,i)=>{let n=ee(e),o=te[n];if(o){let n;for(let e,l=o.length;l--;)if((e=o[l]).$d==t&&e.$b===i){let t=e.$a;if(!r||r&&r.i==t){n=e,o.splice(l,1);break}}n&&e.removeEventListener(t,n.$e,!1)}})(e,t,n,r):oe(e,t,n,r)};let fe,se=new Q,de=0,$e=(e,t,r)=>{try{r=decodeURIComponent(r)}catch(e){}fe[t]=r},ue=e=>{let t,r=se.get(e);return r||(fe={},e==(t=e.replace(I,l))&&T.test(t)&&(t=l),e.replace(t,l).replace(P,$e),se.set(e,r={a:t,b:fe})),{path:r.a,params:{...r.b}}},ce=(e,t,r)=>{let i,n,o,a=[];for(n in t)i=t[n]+l,(!r||i||z(r,n))&&(i=encodeURIComponent(i),a.push(o=n+"="+i));return o&&(e+=(e&&(~e.indexOf("?")?"&":"?"))+a.join("&")),e},he=(e,t)=>{let r,i={};if(e)for(r of e)i[t&&r?r[t]:r]=t?r:1+(0|i[r]);return i},pe=new Q,me=(e,t,r)=>(pe.has(e)?r=pe.get(e):(r=B(Function(`return ${e}`)),e.indexOf(w)>-1?F(t,r,1):pe.set(e,r)),r),be={config:(e,t)=>(t=j,e&&(t=i(e)?L(t,e):t[e]),t),boot(e){L(j,e),W(j.ini,t=>{L(j,t,e),W(j.exts,()=>{Fe.on(c,Ge),Ae.on(c,Ge),de=1,Re()})})},toMap:he,toTry:B,toUrl:ce,parseUrl:ue,mix:L,has:z,keys:M,inside:H,node:O,applyStyle:R,guid:C,use:W,Cache:Q,nodeId:_},ge={fire(e,t,r,i){let n,o,a,f,s=this,d=s[w+e];if(t||(t={}),t.type||(t.type=e),d)for(o=(n=d.length)-1;n--;)(f=d[a=i?n:o-n]).f?(f.x=1,B(f.f,t,s),f.x=l):f.x||(d.splice(a,1),o--);(d=s[`on${e}`])&&B(d,t,s),r&&s.off(e)},on(e,t){let r=w+e;(this[r]||(this[r]=[])).push({f:t})},off(e,t){let r,i=w+e,n=this,o=n[i];if(t){if(o)for(r of o)if(r.f==t){r.f=l;break}}else delete n[i],delete n[`on${e}`]}};be.Event=ge;let ve={},ye={},we={},xe=0,ke=e=>{e=(e+l).split(",");for(let t of e)z(ye,t)?ye[t]++:ye[t]=1;return e},Se=e=>{let t,r;for(t of e)z(ye,t)&&((r=--ye[t])||(delete ye[t],delete ve[t]))};let Ae={get(e){let t=e?ve[e]:ve;return t},set(e){return xe=N(e,ve,we)||xe,this},digest(e){e&&Ae.set(e),xe&&(xe=0,this.fire(c,{keys:we}),we={})},diff:()=>we,clean:e=>({ctor(){e=ke(e),this.on("destroy",()=>Se(e))}}),...ge};be.State=Ae;let Ve,Ie,Pe,Te,Ce,Ee,je="view",Oe=new Q,qe=new Q,Ne=d.location,He=0,Le={query:{},params:{},href:l},Me=/(?:^.*\/\/[^\/]+|#.*$)/gi,Ue=/^[^#]*#?!?/,De=function(e){return this[S][e]||l},Ze=(e,t)=>{e=`#!${e}`,t?Ne.replace(e):Ne.hash=e},Re=()=>{let e,t,r=Be().srcHash;ae(d,"hashchange",(i,n,o)=>{t||(n=Be(),(e=n.srcHash)!=r&&(o=(()=>{i.p=1,r=e,t=l,Ze(e),ze()}),i={reject(){i.p=1,t=l,Ze(r)},resolve:o,prevent(){t=1}},Fe.fire(h,i),t||i.p||o()))}),ae(d,"beforeunload",(e,t,r)=>{if(e=e||d.event,t={},Fe.fire(p,t),r=t.msg)return e&&(e.returnValue=r),r}),ze()},_e=$.title,Be=e=>{e=e||Ne.href;let t,r,n,o,a,f=Oe.get(e);return f||(t=e.replace(Me,l),r=e.replace(Ue,l),n=ue(t),o=ue(r),a={...n[S],...o[S]},f={get:De,href:e,srcQuery:t,srcHash:r,query:n,hash:o,params:a},de&&(((e,t)=>{if(Ie||(Ie=j.routes||{},Pe=j.unmatchView,Te=j.defaultView,Ce=j.defaultPath||"/",Ee=j.rewrite),!e[je]){let r=e.hash[A]||Ce;Ee&&(r=Ee(r,e[S],Ie)),t=Ie[r]||Pe||Te,e[A]=r,e[je]=t,i(t)&&L(e,t)}})(f),Oe.set(e,f))),f},ze=()=>{let e=Be(),t=((e,t)=>{let r=e.href,i=t.href,n=r+w+i,o=qe.get(n);if(!o){let i,l;o={params:l={},force:!r};let a,f=e[S],s=t[S],d=M(f).concat(M(s)),$=e=>{let t=f[e],r=s[e];t!=r&&(l[e]={from:t,to:r},i=1)};for(a of d)$(a);f=e,s=t,l=o,$(A),$(je),qe.set(n,o={a:i,b:o})}return o})(Le,Le=e);return!He&&t.a&&((Ve=t.b)[A]&&($.title=e.title||_e),Fe.fire(c,Ve)),He=0,Ve},Fe={parse:Be,diff:ze,to(e,t,r,n){!t&&i(e)&&(t=e,e=l);let o=ue(e),a=o[S],f=o[A],s=Le[A],d=Le[S],$=Le.query[S];if(L(a,t),f)for(s in $)z(a,s)||(a[s]=l);else d&&(f=s,a={...d,...a});var u,c,h,p;c=Le,h=r,p=n,(u=ce(u=f,a,$))!=c.srcHash&&(He=p,Ze(u,h))},...ge};be.Router=Fe;let Je,Qe,We=0,Xe=(e,t,r,i,n,o)=>{if(e&&e.$a!=We&&(r=e.$v)&&r.$a>1){(t?((e,t,r)=>{let i,n=e.$os;if(n)for(i of n)if(r=z(t,i))break;return r})(r,t):qt(r))&&r.$b(),n=e.children();for(o of n)Xe(tt[o],t)}},Ge=(e,t,r)=>{t=et(),(r=e[je])?t.mountView(r.to):(We=o++,Xe(t,e.keys))},Ke=e=>{if(!e.$b&&!e.$d&&e.$cc==e.$rc){e.$cr||(e.$cr=1,e.$ca=0,e.fire("created"));let t,{id:r,pId:i}=e;(t=tt[i])&&!z(t.$e,r)&&(t.$e[r]=1,t.$rc++,Ke(t))}},Ye=(e,t)=>{if(!e.$ca&&e.$cr){e.$cr=0,e.$ca=1,e.fire("alter",t);let r,{id:i,pId:n}=e;(r=tt[n])&&z(r.$e,i)&&(r.$rc--,delete r.$e[i],Ye(r,t))}},et=t=>(Je||(e=$.body,t=j.rootId,O(t)||(e.id=t),Je=new nt(t)),Je),tt={},rt=(e,t,r)=>{for(t=e.$f;t.length;)(r=t.shift()).r||e.invoke(r.n,r.a),delete t[r.k]},it=[],nt=function(e,t,r){var i,n;(r=this).id=e,r.$c={},r.$cc=0,r.$rc=0,r.$g=1,r.$e={},r.$f=[],r.pId=t,n=r,z(tt,i=e)||(tt[i]=n,nt.fire("add",{vframe:n}),(i=O(i))&&(i.vframe=n))};L(nt,{all:()=>tt,get:e=>tt[e]},ge),L(nt[k],ge,{mountView(e,t){let r,i,n,o,l,a,f=this,{id:s,pId:d,$g:$}=f,u=O(s);!f.$h&&u&&(f.$h=1,f.$i=u.innerHTML),f.unmountView(),f.$b=0,u&&e&&(f[A]=e,r=ue(e),n=r[A],i=++$,o=r[S],a=(a=(a=(a=tt[d])&&a.$v)&&a.$d)&&a.$a,e.indexOf(w)>0&&F(a,o),f.$n=r[A],L(o,t),W(n,e=>{if(i==f.$g){if(!e)return j.error(Error(`id:${s} cannot load:${n}`));l=Ot(e),n=new e(s,f,o,l),f.$v=n,f.$a=We,Tt(n),B(n.init,o,n),n.$b(),n.$e||(f.$h=0,n.$f||n.endUpdate())}}))},unmountView(){let e,t,r=this,{$v:i,id:n}=r;r.$f=[],i&&(Qe||(t=1,Qe={id:n}),r.$b=1,r.unmountZone(0,1),Ye(r,Qe),r.$v=0,i.$a>0&&(i.$a=0,i.fire("destroy",0,1,1),Vt(i,1),Tt(i,1),i.owner=0),i.$a--,(e=O(n))&&r.$h&&(e.innerHTML=r.$i),t&&(Qe=0)),r.$g++},mountVframe(e,t,r){let i,n=this,o=n.id,l=n.$c;return Ye(n,{id:e}),(i=tt[e])||(z(l,e)||(n.$o=0,n.$cc++),l[e]=e,(i=it.pop())?nt.call(i,e,o):i=new nt(e,o)),i.mountView(t,r),i},mountZone(e,t){let r,i,n=this,o=[],l=(e=>$.querySelectorAll(e))(`#${e=e||n.id} [${V}]`);n.$d=1;for(r of l)i=_(r),r.$b||(r.$b=1,o.push([i,r.getAttribute(V)]));for([i,r]of o)o[i]?j.error(Error(`vf.id duplicate:${i} at ${n[A]}`)):n.mountVframe(o[i]=i,r);n.$d=0,t||Ke(n)},unmountVframe(e,t){let r;if(e=e?this.$c[e]:this.id,r=tt[e]){let{$cr:l,pId:a}=r;r.unmountView(),n=l,(o=tt[i=e])&&(delete tt[i],nt.fire("remove",{vframe:o,fcc:n}),(i=O(i))&&(i.$b=0,i.vframe=0,i.$a=0)),r.id=r.pId=r.$c=r.$e=0,r.$h=0,r.off("alter"),r.off("created"),it.push(r),(r=tt[a])&&z(r.$c,e)&&(delete r.$c[e],r.$o=0,r.$cc--,t||Ke(r))}var i,n,o},unmountZone(e,t){let r,i=this;for(r in i.$c)(!e||r!=e&&H(r,e))&&i.unmountVframe(r,1);t||Ke(i)},parent(e,t){for(t=this,e=e>>>0||1;t&&e--;)t=tt[t.pId];return t},children(e){return(e=this).$o||(e.$o=M(e.$c))},invoke(e,t){let r,i,n,o,l,a=this.$f;return(i=this.$v)&&i.$f?r=(n=i[e])&&B(n,t,i):((o=a[l=w+e])&&(o.r=t===o.a),o={n:e,a:t,k:l},a.push(o),a[l]=o),r}}),be.Vframe=nt;let ot=new Q(30,10),lt=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,at={},ft={},st=(t,r)=>{let i,n,o,l,f,s,d,$=[],u=t,c=t.getAttribute(`mx-${r}`),h=[],p=0;if(c&&((f=ot.get(c))||(f={v:(f=c.match(lt)||a)[1],n:f[2],i:f[3]},ot.set(c,f)),f={...f,r:c}),f&&!f.v||ft[r]){if(!(d=t.$a))for(h.push(u);u!=e&&(u=u.parentNode);){if(tt[n=u.id]||(n=u.$v)){d=n;break}h.push(u)}if(d){for(c of h)c.$a=d;u=t.id,tt[u]&&(p=d=u);do{if((i=tt[d])&&(s=i.$v)){l=(o=s.$so)[r];for(n in l)o={r:n,v:d,n:n},n?Y(t,n)&&$.push(o):p&&$.unshift(o);if(s.$e&&!p){f&&!f.v&&(f.v=d);break}p=0}}while(i&&(d=i.pId))}}return f&&$.push(f),$},dt=t=>{let r,i,n,o,l,a,f,s,{target:d,type:$}=t,u=[];for(;d!=e;){if((r=st(d,$)).length){u=[];for(let{v:e,r:i,n:u,p:c,i:h}of r){if(f!=e){if(f&&t.isPropagationStopped())break;f=e}(o=(n=tt[e])&&n.$v)?(a=o[l=u+w+$])&&(t.eventTarget=d,s=h?me(h,o.$d.$a):{},t[S]=s,B(a,t,o)):t.stopPropagation()}}if((i=d.$)&&i[$]||t.isPropagationStopped())break;u.push(d),d=d.parentNode||e}for(d of u)(i=d.$||(d.$={}))[$]=1},$t=(t,r,i)=>{let n=0|at[t],o=i?-1:1;n&&i!==n||ae(e,t,dt,i),at[t]=n+o,r&&(ft[t]=(0|ft[t])+o)},ut="http://www.w3.org/2000/svg",ct={option:[1,"<select multiple>"],thead:[1,"<table>"],col:[2,"<table><colgroup>"],tr:[2,"<table><tbody>"],td:[3,"<table><tbody><tr>"],area:[1,"<map>"],param:[1,"<object>"],g:[1,`<svg xmlns="${ut}">`],all:[0,""]},ht=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td;let pt=$.implementation.createHTMLDocument(l),mt=pt.createElement("base");mt.href=$.location.href,pt.head.appendChild(mt);let bt=(e,t)=>{let r=_(t);e.$c[r]?e.unmountVframe(r,1):e.unmountZone(r,1)},gt={INPUT:[m,"checked"],TEXTAREA:[m],OPTION:["selected"]},vt=(e,t,r)=>{let i,n=e.nodeName,o=gt[n],l=0;if(o)for(i of o)if(e[i]!=t[i]){if(l=1,!r)break;e[i]=t[i]}return l},yt=(e,t)=>(1==e.nodeType&&(e.$kd?t=e.$k:((t=e.$a?l:e.id)||(t=e.getAttribute(b)),t||(t=e.getAttribute(V))&&(t=ue(t)[A]),e.$kd=1,e.$k=t)),t),wt=(e,t,r,i,n,o)=>{let l,a,f,s,d,$=e.lastChild,u=t.firstChild,c=0,h={},p={};for(;$;)c++,(f=yt($))&&(f=h[f]||(h[f]=[])).push($),$=$.previousSibling,u&&((f=yt(u))&&(p[f]=1),u=u.nextSibling);for(;u;)(f=yt(u))&&(p[f]=1),u=u.nextSibling;for(u=t.firstChild,d=t.childNodes.length<c,$=e.firstChild;u;)c--,l=u,u=u.nextSibling,(s=h[f=yt(l)])&&(s=s.pop())?(s!=$?d&&$.nextSibling==s?(e.appendChild($),$=s.nextSibling):e.insertBefore(s,$):$=$.nextSibling,xt(s,l,e,r,i,n,o)):$?(f=yt(a=$))&&h[f]&&p[f]?(c++,r.c=1,e.insertBefore(l,a)):($=$.nextSibling,xt(a,l,e,r,i,n,o)):(e.appendChild(l),r.c=1);for(;c-- >0;)a=e.lastChild,bt(i,a),e.removeChild(a),r.c=1},xt=(e,t,r,i,n,o,l,a)=>{if((a=vt(e,t))||1==e.nodeType&&e.hasAttribute("mxv")||!e.isEqualNode||!e.isEqualNode(t))if(e.nodeName===t.nodeName)if(1===e.nodeType){let r=t.getAttribute(b);if(!a&&r&&r==e.getAttribute(b))return;let s,d,$,u,c,h,p,v,y=t.getAttribute(V),x=t.innerHTML,k=t.getAttribute(g),I=!k||k!=e.getAttribute(g),P=tt[e.id],T=y&&ue(y);if(y&&P&&P.$n==T[A]&&(u=P.$v)){if(h=x!=P.$i,v=p=y!=P[A],$=e.getAttribute("mxv"),!h&&!v&&$){c=$.split(f);for($ of c)if(z(l,$)){v=1;break}}v||h?($=u.$g)?(c=T[S],y.indexOf(w)>-1&&F(o,c),P.$i=x,P[A]=y,T={node:t,html:x,deep:!u.$e,inner:h,query:v},I=1,B($,[c,T],u)&&i.v.push(u),s=T.deep):(d=1,s=1):I=1}else s=1,d=P;d&&(i.c=1,P.unmountVframe(0,1)),I&&(1===I?(k&&e.setAttribute(g,k),r&&e.setAttribute(b,r),p&&e.setAttribute(V,y)):((e,t,r,i)=>{let n,o,l,a;delete e.$,delete e.$kd;let f=e.attributes,s=t.attributes;for(o=f.length;o--;)n=f[o].name,t.hasAttribute(n)||("id"==n?i||r.d.push([e,""]):(r.c=1,e.removeAttribute(n)));for(o=s.length;o--;)l=(n=s[o]).name,a=n[m],e.getAttribute(l)!=a&&("id"==l?r.d.push([e,a]):(r.c=1,e.setAttribute(l,a)))})(e,t,i,P&&y)),a&&1!==I&&vt(e,t,1),s&&wt(e,t,i,n,o,l)}else e.nodeValue!==t.nodeValue&&(i.c=1,e.nodeValue=t.nodeValue);else bt(n,e),r.replaceChild(t,e),i.c=1},kt=function(e){this.$b=e,this.$c=1,this.$a={vId:e,[w]:1},this.$k={}};L(kt[k],{get(e,t){return t=this.$a,e&&(t=t[e]),t},set(e){let t=this;return t.$c=N(e,t.$a,t.$k)||t.$c,t},digest(e){let t=this.set(e),r=t.$k,i=t.$c;t.$c=0,t.$k={},e=t.$a;let n,o,l=t.$b,a=tt[l],f=a&&a.$v,s={d:[],v:[]},d=O(l);if(i&&f&&f.$a>0&&(n=f.$e)){o=((e,t)=>{let r=pt.createElement("div"),i=ut==t.namespaceURI?"g":(ht.exec(e)||[0,""])[1].toLowerCase(),n=ct[i]||ct.all;r.innerHTML=n[1]+e;let o=n[0];for(;o--;)r=r.lastChild;return r})(n(e,l),d),wt(d,o,s,a,e,r);for(o of s.d)o[0].id=o[1];for(o of s.v)o.$b();!s.c&&f.$f||f.endUpdate(l),s.c&&K($,"htmlchanged",{vId:l}),f.fire("domready")}return Promise.resolve()},snapshot(){return this.$d=y(this.$a),this},altered(){let e=this;if(e.$d)return e.$d!=y(e.$a)},translate(e){return F(this.$a,e,1)},parse(e){return me(e,this.$a)}});let St=/^(\$?)([^<]*)<([^>]+)>$/,At=(e,t,r)=>(e.a?r=e:((r=function(e){B(r.a,e,this)}).a=[e],r.b=1),r.a=r.a.concat(t.a||t),r),Vt=(e,t)=>{let r,i,n=e.$r;for(r in n)i=n[r],(t||i.x)&&It(n,r,1)},It=(e,t,r,i)=>{let n,o,l=e[t];return l&&l!=i&&((n=(o=l.e).destroy)&&r&&B(n,a,o),delete e[t]),o},Pt=(e,t,r,i,n)=>{i=e[t],e[t]=e[r]=function(...e){(n=this).$a>0&&(n.$a++,n.fire("rendercall"),Vt(n),B(i,e,n))}},Tt=(e,t)=>{let r,{$eo:i,$so:n,$el:o,id:l}=e;for(r in i)$t(r,n[r],t);for(r of o)ae(r.e,r.n,le,t,{i:l,v:e,f:r.f,e:r.e})},Ct=[],Et={win:d,doc:$},jt=(e,t,r)=>{let i,n,o,l,a={};for(n of e)for(i in n)o=n[i],l=a[i],"ctor"!=i?(St.test(i)&&(l?o=At(l,o):o.b=1),a[i]=o):r.push(o);for(i in a)z(t,i)||(t[i]=a[i])},Ot=e=>{if(!e[w]){e[w]=[];let t,r,i,n,o,l,a,s,d,$=e[k],u={},c=[],h={};(r=$.mixins)&&jt(r,$,e[w]);for(a in $)if(t=$[a],r=a.match(St)){[,l,i,n]=r,n=n.split(f);for(s of n){if(o=Et[i],d=1,l){if(o){c.push({f:t,e:o,n:s});continue}d=2,(o=h[s])||(o=h[s]={}),o[i]=1}u[s]=u[s]|d,(o=$[s=i+w+s])?o.b&&(t.b?$[s]=At(t,o):z($,a)&&($[s]=t)):$[s]=t}}Pt($,"render","$b"),$.$eo=u,$.$el=c,$.$so=h,$.$e=$.tmpl,$.$g=$.assign}return e[w]},qt=e=>{let t,r,i,n=e.$l;if(n.f&&(n.p&&(t=Ve[A]),!t&&n.k)){i=Ve[S];for(r of n.k)if(t=z(i,r))break}return t},Nt=function(e,t,r,i){(i=this).owner=t,i.id=e,i.$l={k:[]},i.$r={},i.$a=1,i.updater=i.$d=new kt(i.id),B(Ct,r,i)},Ht=Nt[k];L(Nt,{merge(...e){jt(e,Ht,Ct)},extend(e,t){let r=this,i=(e=e||{}).ctor,n=[];i&&n.push(i);let o=function(e,t,i,o){r.call(this,e,t,i),B(n.concat(o),i,this)};return o.extend=r.extend,G(o,r,e,t)}}),L(Ht,ge,{init:v,beginUpdate(e,t){(t=this).$a>0&&t.$f&&t.owner.unmountZone(e,1)},endUpdate(e,t,r,i,n){(r=this).$a>0&&(e=e||r.id,t?n=t:(n=r.$f,r.$f=1),(i=r.owner).mountZone(e,t),n||u(r.wrapAsync(rt),0,i))},wrapAsync(e,t){let r=this,i=r.$a;return(...n)=>{if(i>0&&i==r.$a)return e.apply(t||r,n)}},observeLocation(e,t){let r;(r=this.$l).f=1,i(e)&&(t=e[A],e=e[S]),r.p=t,e&&(r.k=(e+l).split(f))},observeState(e){this.$os=(e+l).split(f)},capture(e,t,r,i){return i=this.$r,t?(It(i,e,1,t),i[e]={e:t,x:r}):t=(i=i[e])&&i.e,t},release(e,t){return It(this.$r,e,t)},leaveTip(e,t){let r=this,i=n=>{let o="a",l="b";n.type!=h&&(o="b",l="a"),i[o]?(n.prevent(),n.reject()):t()&&(n.prevent(),i[l]=1,r.leaveConfirm(()=>{i[l]=0,n.resolve()},()=>{i[l]=0,n.reject()},e))},n=r=>{t()&&(r.msg=e)};Fe.on(h,i),Fe.on(p,n),r.on("unload",i),r.on("destroy",()=>{Fe.off(h,i),Fe.off(p,n)})},render:v}),be.View=Nt;let Lt=Date.now,Mt=function(){this.id=C("b"),this.$={}};L(Mt[k],{get(e,t,i){let o,a=t!=i,f=this.$;if(e){let t,r=n(e)?e.slice():(e+l).split(".");for(;(t=r.shift())&&f;)f=f[t];t&&(f=i)}return a&&(o=r(t))!=r(f)&&(f=t),f},set(e,t){i(e)||(e={[e]:t}),L(this.$,e)}});let Ut=function(e,t,r){(r=this[e])&&(delete this[e],B(r,t,r.e))},Dt=(e,t,r,i,n,o)=>{let l=[],a=s,f=0;return function(d,$){let u,c=this;f++;let h=c.$b,p=h.k;l[d+1]=c;let m,b={bag:c,error:$};if($?(a=$,t.fire("fail",b),u=1):o.has(p)||(p&&o.set(p,c),h.t=Lt(),(m=h.a)&&B(m,c,c),(m=h.x)&&t.clear(m),t.fire("done",b),u=1),!r.$d){let t=f==i;t&&(r.$e=0,2==n&&(l[0]=a,B(e,l,r))),1==n&&B(e,[$||s,c,t,d],r)}u&&t.fire("end",b)}},Zt=(e,t,r,i,o)=>{if(e.$d)return e;if(e.$e)return e.enqueue(Zt.bind(e,e,t,r,i,o));e.$e=1,n(t)||(t=[t]);let l=e.constructor,a=0,f=l.$f,s=Dt(r,l,e,t.length,i,l.$c);for(let e of t)if(e){let t,r=l.get(e,o),i=r.e,n=i.$b.k,d=s.bind(i,a++);n&&f[n]?f[n].push(d):r.u?(n&&((t=[d]).e=i,f[n]=t,d=Ut.bind(f,n)),l.$s(i,d)):d()}return e},Rt=function(){let e=this;e.id=C("s"),e.$g=[]};L(Rt[k],{all(e,t){return Zt(this,e,t,2)},save(e,t){return Zt(this,e,t,2,1)},one(e,t){return Zt(this,e,t,1)},enqueue(e){let t=this;return t.$d||(t.$g.push(e),t.dequeue(t.$h)),t},dequeue(...e){let t,r=this;r.$e||r.$d||(r.$e=1,u(()=>{r.$e=0,r.$d||(t=r.$g.shift())&&B(t,r.$h=e)},0))},destroy(e){(e=this).$d=1,e.$g=0}});let _t=(e,t)=>[y(t),y(e)].join(w),Bt=(e,t,r,i)=>{(i=e&&e.$b)&&t[i.n]&&r.del(i.k)},zt={add(e){let t,r=this.$b;n(e)||(e=[e]);for(t of e)if(t){let{name:e,cache:i}=t;t.cache=0|i,r[e]=t}},create(e){let t=this.meta(e),r=0|e.cache||t.cache,n=new Mt;n.set(t),n.$b={n:t.name,a:t.after,x:t.cleans,k:r&&_t(t,e)},i(e)&&n.set(e);let o=t.before;return o&&B(o,n,n),this.fire("begin",{bag:n}),n},meta(e){return this.$b[e.name||e]||e},get(e,t){let r,i,n=this;return t||(r=n.cached(e)),r||(r=n.create(e),i=1),{e:r,u:i}},clear(e){this.$c.each(Bt,he((e+l).split(f)))},cached(e){let t,r,i=this,n=i.$c,o=i.meta(e),l=0|e.cache||o.cache;if(l&&(r=_t(o,e)),r){let e=i.$f[r];e?t=e.e:(t=n.get(r))&&Lt()-t.$b.t>l&&(n.del(r),t=0)}return t},...ge};Rt.extend=((e,t,r)=>{let i=function(){Rt.call(this)};return i.$s=e,i.$c=new Q(t,r),i.$f={},i.$b={},G(i,Rt,s,zt)}),be.Service=Rt,L(v[k],ge),v.extend=function e(t,r){let i=this,n=t&&t.ctor,o=function(...e){i.apply(this,e),n&&n.apply(this,e)};return o.extend=e,G(o,i,t,r)},be.Base=v,be.trigger=K;export default be