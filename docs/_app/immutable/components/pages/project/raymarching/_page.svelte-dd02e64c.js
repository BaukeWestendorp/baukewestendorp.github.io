var _=Object.defineProperty;var w=(n,t,e)=>t in n?_(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var l=(n,t,e)=>(w(n,typeof t!="symbol"?t+"":t,e),e);import{S as v,i as b,s as D,k as d,q as z,a as S,l as u,m,r as C,h as o,c as j,n as O,b as p,C as g,B as f,o as R,M as x}from"../../../../chunks/index-514c8609.js";class q{constructor(t,e){l(this,"depth",0);l(this,"iteration",0);l(this,"closestWorldObject");this.x=t,this.y=e}march(t,e,a){let s=a;for(const r of t){const i=r.sdf({x:this.x,y:this.y,z:this.depth});i<s&&(s=i,this.closestWorldObject=r)}if(this.depth+=s,!(s<=e)){if(this.depth>a||this.iteration>100){this.depth=-1;return}this.iteration++,this.march(t,e,a)}}}class A{constructor(t,e){this.position=t,this.color=e,this.position=t,this.color=e}}class y extends A{constructor(t,e,a){super(t,e),this.radius=a,this.radius=a}sdf(t){const e=t.x-this.position.x,a=t.y-this.position.y,s=t.z-this.position.z,r=e*e+a*a+s*s;return Math.sqrt(r)-this.radius}}class E{constructor(t){this.renderer=t,this.renderer=t}calculateFrame(){var e,a;const t=[new y({x:200,y:170,z:150},[255,127,0],100),new y({x:500,y:320,z:250},[0,255,127],80)];for(let s=0;s<this.renderer.ctx.canvas.height;s++)for(let r=0;r<this.renderer.ctx.canvas.width;r++){const i=new q(r,s);if(i.march(t,1,1e3),i.depth>0){const h=(a=(e=i.closestWorldObject)==null?void 0:e.color)!=null?a:[255,255,255];this.renderer.setPixel(r,s,h)}}}}class W{constructor(t){l(this,"imageData");this.ctx=t,this.ctx.imageSmoothingEnabled=!1,this.imageData=this.ctx.getImageData(0,0,this.ctx.canvas.width,this.ctx.canvas.height)}render(){this.ctx.putImageData(this.imageData,0,0)}setPixel(t,e,a){const s=(e*this.imageData.width+t)*4;this.imageData.data[s]=a[0],this.imageData.data[s+1]=a[1],this.imageData.data[s+2]=a[2],this.imageData.data[s+3]=255}}function I(n){let t,e,a,s,r;return{c(){t=d("h2"),e=z("Ray-marching"),a=S(),s=d("div"),r=d("canvas"),this.h()},l(i){t=u(i,"H2",{});var h=m(t);e=C(h,"Ray-marching"),h.forEach(o),a=j(i),s=u(i,"DIV",{class:!0});var c=m(s);r=u(c,"CANVAS",{}),m(r).forEach(o),c.forEach(o),this.h()},h(){O(s,"class","wrapper svelte-dr9iz4")},m(i,h){p(i,t,h),g(t,e),p(i,a,h),p(i,s,h),g(s,r),n[2](r),n[3](s)},p:f,i:f,o:f,d(i){i&&o(t),i&&o(a),i&&o(s),n[2](null),n[3](null)}}}function M(n,t,e){let a,s,r;R(()=>{a.setAttribute("width",window.getComputedStyle(s).width),a.setAttribute("height",window.getComputedStyle(s).height);const c=a.getContext("2d");c&&(r=new W(c),new E(r).calculateFrame(),r.render())});function i(c){x[c?"unshift":"push"](()=>{a=c,e(0,a)})}function h(c){x[c?"unshift":"push"](()=>{s=c,e(1,s)})}return[a,s,i,h]}class B extends v{constructor(t){super(),b(this,t,M,I,D,{})}}export{B as default};
