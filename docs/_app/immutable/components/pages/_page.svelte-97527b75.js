import{S as O,i as T,s as V,a as D,e as G,c as $,b as v,C as N,h as _,k,q,l as b,m as y,r as E,n as h,M as C,K as I,E as d,N as j,u as z,G as F,f as w,d as K,t as P,O as Q,w as U,x as W,y as A,z as J,g as R}from"../../chunks/paths-bb9600f6.js";function X(r){let e,l,a,u,n;return{c(){e=k("img"),this.h()},l(s){e=b(s,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){h(e,"class","thumbnail svelte-172kc0q"),C(e.src,l=I+"/posts/images/"+r[0].image)||h(e,"src",l),h(e,"alt",a=r[0].image)},m(s,t){v(s,e,t),u||(n=j(e,"click",r[4]),u=!0)},p(s,t){t&1&&!C(e.src,l=I+"/posts/images/"+s[0].image)&&h(e,"src",l),t&1&&a!==(a=s[0].image)&&h(e,"alt",a)},d(s){s&&_(e),u=!1,n()}}}function Y(r){let e,l,a=r[0].quote+"",u,n;return{c(){e=k("p"),l=q('"'),u=q(a),n=q('"'),this.h()},l(s){e=b(s,"P",{class:!0});var t=y(e);l=E(t,'"'),u=E(t,a),n=E(t,'"'),t.forEach(_),this.h()},h(){h(e,"class","quote svelte-172kc0q")},m(s,t){v(s,e,t),d(e,l),d(e,u),d(e,n)},p(s,t){t&1&&a!==(a=s[0].quote+"")&&z(u,a)},d(s){s&&_(e)}}}function M(r){let e,l,a,u,n,s,t,o,g,i,f,c;return{c(){e=k("div"),l=k("h3"),a=q(r[3]),u=D(),n=k("img"),o=D(),g=k("button"),i=q("Close"),this.h()},l(p){e=b(p,"DIV",{class:!0});var m=y(e);l=b(m,"H3",{class:!0});var S=y(l);a=E(S,r[3]),S.forEach(_),u=$(m),n=b(m,"IMG",{src:!0,alt:!0,class:!0}),o=$(m),g=b(m,"BUTTON",{});var B=y(g);i=E(B,"Close"),B.forEach(_),m.forEach(_),this.h()},h(){h(l,"class","svelte-172kc0q"),C(n.src,s=I+"/posts/images/"+r[0].image)||h(n,"src",s),h(n,"alt",t=r[0].image),h(n,"class","svelte-172kc0q"),h(e,"class","enlargend svelte-172kc0q")},m(p,m){v(p,e,m),d(e,l),d(l,a),d(e,u),d(e,n),d(e,o),d(e,g),d(g,i),f||(c=j(e,"click",r[5]),f=!0)},p(p,m){m&1&&!C(n.src,s=I+"/posts/images/"+p[0].image)&&h(n,"src",s),m&1&&t!==(t=p[0].image)&&h(n,"alt",t)},d(p){p&&_(e),f=!1,c()}}}function Z(r){let e,l;function a(t,o){return t[2]?Y:X}let n=a(r)(r),s=r[1]&&M(r);return{c(){n.c(),e=D(),s&&s.c(),l=G()},l(t){n.l(t),e=$(t),s&&s.l(t),l=G()},m(t,o){n.m(t,o),v(t,e,o),s&&s.m(t,o),v(t,l,o)},p(t,[o]){n.p(t,o),t[1]?s?s.p(t,o):(s=M(t),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},i:N,o:N,d(t){n.d(t),t&&_(e),s&&s.d(t),t&&_(l)}}}function x(r){const e=r.split("-");return new Date(+e[2],+e[1]-1,+e[0]).toLocaleDateString("nl-NL",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}function ee(r,e,l){let{post:a}=e;const u=a.quote!=null,n=x(a.date);let s=!1;const t=()=>l(1,s=!0),o=()=>l(1,s=!1);return r.$$set=g=>{"post"in g&&l(0,a=g.post)},[a,s,u,n,t,o]}class te extends O{constructor(e){super(),T(this,e,ee,Z,V,{post:0})}}function H(r,e,l){const a=r.slice();return a[2]=e[l],a}function L(r){let e,l;return e=new te({props:{post:r[2]}}),{c(){U(e.$$.fragment)},l(a){W(e.$$.fragment,a)},m(a,u){A(e,a,u),l=!0},p:N,i(a){l||(w(e.$$.fragment,a),l=!0)},o(a){P(e.$$.fragment,a),l=!1},d(a){J(e,a)}}}function se(r){let e,l,a,u,n,s,t=r[0],o=[];for(let i=0;i<t.length;i+=1)o[i]=L(H(r,t,i));const g=i=>P(o[i],1,1,()=>{o[i]=null});return{c(){e=D(),l=k("h2"),a=q("Expositie"),u=D(),n=k("div");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){F("svelte-1g1e0qn",document.head).forEach(_),e=$(i),l=b(i,"H2",{});var c=y(l);a=E(c,"Expositie"),c.forEach(_),u=$(i),n=b(i,"DIV",{class:!0});var p=y(n);for(let m=0;m<o.length;m+=1)o[m].l(p);p.forEach(_),this.h()},h(){document.title="Bauke Westendorp: Expositie",h(n,"class","posts svelte-4m62jn")},m(i,f){v(i,e,f),v(i,l,f),d(l,a),v(i,u,f),v(i,n,f);for(let c=0;c<o.length;c+=1)o[c].m(n,null);s=!0},p(i,[f]){if(f&1){t=i[0];let c;for(c=0;c<t.length;c+=1){const p=H(i,t,c);o[c]?(o[c].p(p,f),w(o[c],1)):(o[c]=L(p),o[c].c(),w(o[c],1),o[c].m(n,null))}for(R(),c=t.length;c<o.length;c+=1)g(c);K()}},i(i){if(!s){for(let f=0;f<t.length;f+=1)w(o[f]);s=!0}},o(i){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)P(o[f]);s=!1},d(i){i&&_(e),i&&_(l),i&&_(u),i&&_(n),Q(o,i)}}}function le(r,e,l){let{data:a}=e,u=a.posts;return r.$$set=n=>{"data"in n&&l(1,a=n.data)},[u,a]}class oe extends O{constructor(e){super(),T(this,e,le,se,V,{data:1})}}export{oe as default};
