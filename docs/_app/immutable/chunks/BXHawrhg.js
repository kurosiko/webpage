import{l as at,t as Zt}from"./DIeogL5L.js";const _t=!1;var Pn=Array.isArray,$t=Array.prototype.indexOf,Fn=Array.from,qn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Mn=Object.prototype,Ln=Array.prototype,Wt=Object.getPrototypeOf;const Yn=()=>{};function jn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,X=8,st=16,k=32,b=64,U=128,E=256,V=512,d=1024,R=2048,P=4096,N=8192,J=16384,Xt=32768,gt=65536,Bn=1<<17,Jt=1<<19,Tt=1<<20,vt=Symbol("$state"),Hn=Symbol("legacy props"),Un=Symbol("");function mt(t){return t===this.v}function Qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!Qt(t,this.v)}function tn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function en(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Vn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Gn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Kn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const $n=1,zn=2,Wn=16,Xn=1,Jn=2,Qn=4,tr=8,nr=16,rr=1,er=2,sn="[",un="[!",on="]",xt={},lr=Symbol();function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function pt(t){i=t}function ar(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},at&&!n&&(i.l={s:null,u:null,r1:[],r2:ut(!1)})}function sr(t){const n=i;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];$(l.effect),Z(l.reaction),Pt(l.fn)}}finally{$(r),Z(e)}}i=n.p,n.m=!0}return{}}function Q(){return!at||i!==null&&i.l===null}function ut(t,n){var r={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return r}function ur(t){return Rt(ut(t))}function fn(t,n=!1){var e;const r=ut(t);return n||(r.equals=At),at&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function or(t,n=!1){return Rt(fn(t,n))}function Rt(t){return u!==null&&!w&&(u.f&y)!==0&&(m===null?mn([t]):m.push(t)),t}function fr(t,n){return u!==null&&!w&&Q()&&(u.f&(y|st))!==0&&(m===null||!m.includes(t))&&an(),_n(t,n)}function _n(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Ut(),It(t,R),Q()&&o!==null&&(o.f&d)!==0&&(o.f&(k|b))===0&&(x===null?An([t]):x.push(t))),n}function It(t,n){var r=t.reactions;if(r!==null)for(var e=Q(),a=r.length,l=0;l<a;l++){var s=r[l],f=s.f;(f&R)===0&&(!e&&s===o||(A(s,n),(f&(d|E))!==0&&((f&y)!==0?It(s,P):nt(s))))}}let S=!1;function ir(t){S=t}let g;function M(t){if(t===null)throw kt(),xt;return g=t}function _r(){return M(C(g))}function cr(t){if(S){if(C(g)!==null)throw kt(),xt;g=t}}function vr(t=1){if(S){for(var n=t,r=g;n--;)r=C(r);g=r}}function pr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===sn||r===un)&&(t+=1)}var e=C(n);n.remove(),n=e}}var ht,cn,Ot,St;function hr(){if(ht===void 0){ht=window,cn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Ot=ct(n,"firstChild").get,St=ct(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Ot.call(t)}function C(t){return St.call(t)}function dr(t,n){if(!S)return et(t);var r=et(g);if(r===null)r=g.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),M(e),e}return M(r),r}function Er(t,n){if(!S){var r=et(t);return r instanceof Comment&&r.data===""?C(r):r}return g}function wr(t,n=1,r=!1){let e=S?g:t;for(var a;n--;)a=e,e=C(e);if(!S)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=rt();return e===null?a==null||a.after(s):e.before(s),M(s),s}return M(e),e}function yr(t){t.textContent=""}function Dt(t){var n=y|R,r=u!==null&&(u.f&y)!==0?u:null;return o===null||r!==null&&(r.f&E)!==0?n|=E:o.f|=Tt,{ctx:i,deps:null,effects:null,equals:mt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function gr(t){const n=Dt(t);return n.equals=At,n}function Ct(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)D(n[r])}}function vn(t){for(var n=t.parent;n!==null;){if((n.f&y)===0)return n;n=n.parent}return null}function pn(t){var n,r=o;$(vn(t));try{Ct(t),n=Gt(t)}finally{$(r)}return n}function Nt(t){var n=pn(t),r=(I||(t.f&E)!==0)&&t.deps!==null?P:d;A(t,r),t.equals(n)||(t.v=n,t.wv=Ut())}function bt(t){o===null&&u===null&&rn(),u!==null&&(u.f&E)!==0&&o===null&&nn(),ot&&tn()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var a=o,l={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{ft(l),l.f|=Xt}catch(_){throw D(l),_}else n!==null&&nt(l);var s=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(Tt|U))===0;if(!s&&e&&(a!==null&&hn(l,a),u!==null&&(u.f&y)!==0)){var f=u;(f.effects??(f.effects=[])).push(l)}return l}function Tr(t){const n=F(X,null,!1);return A(n,d),n.teardown=t,n}function mr(t){bt();var n=o!==null&&(o.f&k)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Pt(t);return e}}function Ar(t){return bt(),dn(t)}function xr(t){const n=F(b,t,!0);return(r={})=>new Promise(e=>{r.outro?yn(n,()=>{D(n),e(void 0)}):(D(n),e(void 0))})}function Pt(t){return F(yt,t,!1)}function dn(t){return F(X,t,!0)}function kr(t,n=[],r=Dt){const e=n.map(r);return En(()=>t(...e.map(Cn)))}function En(t,n=0){return F(X|st|n,t,!0)}function Rr(t,n=!0){return F(X|k,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=ot,e=u;Et(!0),Z(null);try{n.call(null)}finally{Et(r),Z(e)}}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&b)!==0?r.parent=null:D(r,n),r=e}}function wn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&k)===0&&D(n),n=r}}function D(t,n=!0){var r=!1;if((n||(t.f&Jt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:C(e);e.remove(),e=l}r=!0}qt(t,n&&!r),W(t,0),A(t,J);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Ft(t);var f=t.parent;f!==null&&f.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function yn(t,n){var r=[];Lt(t,r,!0),gn(r,()=>{D(t),n&&n()})}function gn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Lt(t,n,r){if((t.f&N)===0){if(t.f^=N,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&gt)!==0||(e.f&k)!==0;Lt(e,n,l?r:!1),e=a}}}function Ir(t){Yt(t,!0)}function Yt(t,n){if((t.f&N)!==0){t.f^=N,(t.f&d)===0&&(t.f^=d),j(t)&&(A(t,R),nt(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&gt)!==0||(r.f&k)!==0;Yt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const Tn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let L=[],Y=[];function jt(){var t=L;L=[],wt(t)}function Bt(){var t=Y;Y=[],wt(t)}function Or(t){L.length===0&&queueMicrotask(jt),L.push(t)}function Sr(t){Y.length===0&&Tn(Bt),Y.push(t)}function dt(){L.length>0&&jt(),Y.length>0&&Bt()}let H=!1,G=!1,K=null,O=!1,ot=!1;function Et(t){ot=t}let q=[];let u=null,w=!1;function Z(t){u=t}let o=null;function $(t){o=t}let m=null;function mn(t){m=t}let c=null,h=0,x=null;function An(t){x=t}let Ht=1,z=0,I=!1;function Ut(){return++Ht}function j(t){var v;var n=t.f;if((n&R)!==0)return!0;if((n&P)!==0){var r=t.deps,e=(n&E)!==0;if(r!==null){var a,l,s=(n&V)!==0,f=e&&o!==null&&!I,_=r.length;if(s||f){var T=t,B=T.parent;for(a=0;a<_;a++)l=r[a],(s||!((v=l==null?void 0:l.reactions)!=null&&v.includes(T)))&&(l.reactions??(l.reactions=[])).push(T);s&&(T.f^=V),f&&B!==null&&(B.f&E)===0&&(T.f^=E)}for(a=0;a<_;a++)if(l=r[a],j(l)&&Nt(l),l.wv>t.wv)return!0}(!e||o!==null&&!I)&&A(t,d)}return!1}function xn(t,n){for(var r=n;r!==null;){if((r.f&U)!==0)try{r.fn(t);return}catch{r.f^=U}r=r.parent}throw H=!1,t}function kn(t){return(t.f&J)===0&&(t.parent===null||(t.parent.f&U)===0)}function tt(t,n,r,e){if(H){if(r===null&&(H=!1),kn(n))throw t;return}r!==null&&(H=!0);{xn(t,n);return}}function Vt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];(l.f&y)!==0?Vt(l,n,!1):n===l&&(r?A(l,R):(l.f&d)!==0&&A(l,P),nt(l))}}function Gt(t){var it;var n=c,r=h,e=x,a=u,l=I,s=m,f=i,_=w,T=t.f;c=null,h=0,x=null,I=(T&E)!==0&&(w||!O||u===null),u=(T&(k|b))===0?t:null,m=null,pt(t.ctx),w=!1,z++;try{var B=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(W(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!I)for(p=h;p<v.length;p++)((it=v[p]).reactions??(it.reactions=[])).push(t)}else v!==null&&h<v.length&&(W(t,h),v.length=h);if(Q()&&x!==null&&!w&&v!==null&&(t.f&(y|P|R))===0)for(p=0;p<x.length;p++)Vt(x[p],t);return a!==null&&z++,B}finally{c=n,h=r,x=e,u=a,I=l,m=s,pt(f),w=_}}function Rn(t,n){let r=n.reactions;if(r!==null){var e=$t.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&(n.f&y)!==0&&(c===null||!c.includes(n))&&(A(n,P),(n.f&(E|V))===0&&(n.f^=V),Ct(n),W(n,0))}function W(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Rn(t,r[e])}function ft(t){var n=t.f;if((n&J)===0){A(t,d);var r=o,e=i,a=O;o=t,O=!0;try{(n&st)!==0?wn(t):qt(t),Ft(t);var l=Gt(t);t.teardown=typeof l=="function"?l:null,t.wv=Ht;var s=t.deps,f;_t&&Zt&&t.f&R}catch(_){tt(_,t,r,e||t.ctx)}finally{O=a,o=r}}}function In(){try{en()}catch(t){if(K!==null)tt(t,K,null);else throw t}}function Kt(){var t=O;try{var n=0;for(O=!0;q.length>0;){n++>1e3&&In();var r=q,e=r.length;q=[];for(var a=0;a<e;a++){var l=Sn(r[a]);On(l)}}}finally{G=!1,O=t,K=null}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(J|N))===0)try{j(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(a){tt(a,e,null,e.ctx)}}}function nt(t){G||(G=!0,queueMicrotask(Kt));for(var n=K=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(b|k))!==0){if((r&d)===0)return;n.f^=d}}q.push(n)}function Sn(t){for(var n=[],r=t;r!==null;){var e=r.f,a=(e&(k|b))!==0,l=a&&(e&d)!==0;if(!l&&(e&N)===0){if((e&yt)!==0)n.push(r);else if(a)r.f^=d;else{var s=u;try{u=r,j(r)&&ft(r)}catch(T){tt(T,r,null,r.ctx)}finally{u=s}}var f=r.first;if(f!==null){r=f;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Dn(t){var n;for(dt();q.length>0;)G=!0,Kt(),dt();return n}async function Dr(){await Promise.resolve(),Dn()}function Cn(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!w){m!==null&&m.includes(t)&&ln();var e=u.deps;t.rv<z&&(t.rv=z,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!I||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&E)===0&&(a.f^=E)}return r&&(a=t,j(a)&&Nt(a)),t.v}function Cr(t){var n=w;try{return w=!0,t()}finally{w=n}}const Nn=-7169;function A(t,n){t.f=t.f&Nn|n}function Nr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=Wt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{Xn as $,sr as A,dr as B,cr as C,wr as D,gt as E,Er as F,fr as G,sn as H,or as I,Mn as J,Ln as K,Un as L,ut as M,Kn as N,ct as O,o as P,Zn as Q,Pn as R,vt as S,Bn as T,lr as U,Jn as V,Hn as W,Gn as X,gr as Y,Qn as Z,At as _,_r as a,tr as a0,fn as a1,nr as a2,Yn as a3,Qt as a4,Z as a5,$ as a6,u as a7,Tr as a8,Or as a9,Dn as aA,Dr as aB,ur as aC,qn as aa,rt as ab,et as ac,cn as ad,rr as ae,er as af,hr as ag,C as ah,xt as ai,on as aj,kt as ak,Vn as al,yr as am,Fn as an,xr as ao,N as ap,_n as aq,Lt as ar,gn as as,D as at,zn as au,$n as av,Wn as aw,Q as ax,dn as ay,Pt as az,En as b,Rr as c,g as d,zt as e,un as f,Wt as g,S as h,ir as i,Ir as j,mr as k,i as l,Cr as m,jn as n,wt as o,yn as p,Sr as q,pr as r,M as s,Cn as t,Ar as u,Nr as v,Dt as w,vr as x,ar as y,kr as z};
