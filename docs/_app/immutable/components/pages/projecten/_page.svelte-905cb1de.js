import{S as y,i as z,s as B,a as E,k as g,q as L,E as C,h as u,c as x,l as $,m as k,r as V,n as h,b as j,C as v,f as b,d as H,t as I,L as S,w as G,x as J,y as M,z as W,g as A,J as P,u as F}from"../../../chunks/index-514c8609.js";import{b as q}from"../../../chunks/paths-6cd3a76e.js";import{L as K}from"../../../chunks/Link-01ab3d03.js";function w(f,s,n){const a=f.slice();return a[1]=s[n],a}function N(f){let s,n,a=f[1].title+"",o,i,_,c,r,p,e;return{c(){s=g("div"),n=g("h2"),o=L(a),i=E(),_=g("div"),c=g("img"),e=E(),this.h()},l(l){s=$(l,"DIV",{class:!0});var t=k(s);n=$(t,"H2",{class:!0});var m=k(n);o=V(m,a),m.forEach(u),i=x(t),_=$(t,"DIV",{class:!0});var d=k(_);c=$(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(u),t.forEach(u),e=x(l),this.h()},h(){h(n,"class","svelte-1t7axcf"),P(c.src,r=q+"/projects/images/"+f[1].thumbnail)||h(c,"src",r),h(c,"alt",p=f[1].title),h(c,"class","svelte-1t7axcf"),h(_,"class","image-wrapper svelte-1t7axcf"),h(s,"class","project svelte-1t7axcf")},m(l,t){j(l,s,t),v(s,n),v(n,o),v(s,i),v(s,_),v(_,c),j(l,e,t)},p(l,t){t&1&&a!==(a=l[1].title+"")&&F(o,a),t&1&&!P(c.src,r=q+"/projects/images/"+l[1].thumbnail)&&h(c,"src",r),t&1&&p!==(p=l[1].title)&&h(c,"alt",p)},d(l){l&&u(s),l&&u(e)}}}function D(f){let s,n;return s=new K({props:{href:"projecten/"+f[1].link,$$slots:{default:[N]},$$scope:{ctx:f}}}),{c(){G(s.$$.fragment)},l(a){J(s.$$.fragment,a)},m(a,o){M(s,a,o),n=!0},p(a,o){const i={};o&1&&(i.href="projecten/"+a[1].link),o&17&&(i.$$scope={dirty:o,ctx:a}),s.$set(i)},i(a){n||(b(s.$$.fragment,a),n=!0)},o(a){I(s.$$.fragment,a),n=!1},d(a){W(s,a)}}}function O(f){let s,n,a,o,i,_,c=f[0].projects,r=[];for(let e=0;e<c.length;e+=1)r[e]=D(w(f,c,e));const p=e=>I(r[e],1,1,()=>{r[e]=null});return{c(){s=E(),n=g("h2"),a=L("Projecten"),o=E(),i=g("div");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){C("svelte-g5digz",document.head).forEach(u),s=x(e),n=$(e,"H2",{});var t=k(n);a=V(t,"Projecten"),t.forEach(u),o=x(e),i=$(e,"DIV",{class:!0});var m=k(i);for(let d=0;d<r.length;d+=1)r[d].l(m);m.forEach(u),this.h()},h(){document.title="Bauke Westendorp: Projecten",h(i,"class","projects-grid svelte-1t7axcf")},m(e,l){j(e,s,l),j(e,n,l),v(n,a),j(e,o,l),j(e,i,l);for(let t=0;t<r.length;t+=1)r[t].m(i,null);_=!0},p(e,[l]){if(l&1){c=e[0].projects;let t;for(t=0;t<c.length;t+=1){const m=w(e,c,t);r[t]?(r[t].p(m,l),b(r[t],1)):(r[t]=D(m),r[t].c(),b(r[t],1),r[t].m(i,null))}for(A(),t=c.length;t<r.length;t+=1)p(t);H()}},i(e){if(!_){for(let l=0;l<c.length;l+=1)b(r[l]);_=!0}},o(e){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)I(r[l]);_=!1},d(e){e&&u(s),e&&u(n),e&&u(o),e&&u(i),S(r,e)}}}function Q(f,s,n){let{data:a}=s;return f.$$set=o=>{"data"in o&&n(0,a=o.data)},[a]}class X extends y{constructor(s){super(),z(this,s,Q,O,B,{data:0})}}export{X as default};