import{a as q,t as K}from"../chunks/disclose-version.BGtYnW3F.js";import"../chunks/legacy.DofSEwE7.js";import{ag as Z,b as j,h as m,a9 as D,a as ee,I as ae,ae as U,ai as re,aj as z,a8 as H,d as A,ak as M,al as X,c as $,p as te,F as B,am as se,an as ne,ad as le,ao as oe,ap as fe,a4 as ie,aa as ue,$ as ve,Y as ce,A as G,aq as de,ar as _e,as as he,a6 as pe,at as ge,au as me,H as ye,av as be,aw as xe,i as ke,ax as Ee,q as we,f as Ae,v as Te,C as T,k as E,s as O,t as Ie,x as Ne,ay as N}from"../chunks/runtime.D_U100VS.js";import{b as Me,l as Se,e as Ce}from"../chunks/events.CM3aWKIH.js";import{c as Re}from"../chunks/svelte-component.Ca3bke5S.js";import{i as De}from"../chunks/lifecycle.D8nG1icy.js";import{o as He}from"../chunks/index-client.BLznrhiN.js";function Oe(e,a){return a}function Le(e,a,r,l){for(var n=[],s=a.length,i=0;i<s;i++)ne(a[i].e,n,!0);var d=s>0&&n.length===0&&r!==null;if(d){var _=r.parentNode;le(_),_.append(r),l.clear(),x(e,a[0].prev,a[s-1].next)}oe(n,()=>{for(var c=0;c<s;c++){var h=a[c];d||(l.delete(h.k),x(e,h.prev,h.next)),fe(h.e,!d)}})}function Ve(e,a,r,l,n,s=null){var i=e,d={flags:a,items:new Map,first:null};{var _=e;i=m?D(ie(_)):_.appendChild(Z())}m&&ee();var c=null,h=!1;j(()=>{var t=r(),f=ae(t)?t:t==null?[]:U(t),o=f.length;if(h&&o===0)return;h=o===0;let u=!1;if(m){var g=i.data===re;g!==(o===0)&&(i=z(),D(i),H(!1),u=!0)}if(m){for(var k=null,y,v=0;v<o;v++){if(A.nodeType===8&&A.data===ue){i=A,u=!0,H(!1);break}var p=f[v],I=l(p,v);y=J(A,d,k,null,p,I,v,n,a),d.items.set(I,y),k=y}o>0&&D(z())}if(!m){var w=ve;Ye(f,d,i,n,a,(w.f&M)!==0,l)}s!==null&&(o===0?c?X(c):c=$(()=>s(i)):c!==null&&te(c,()=>{c=null})),u&&H(!0),r()}),m&&(i=A)}function Ye(e,a,r,l,n,s,i,d){var _=e.length,c=a.items,h=a.first,t=h,f,o=null,u=[],g=[],k,y,v,p;for(p=0;p<_;p+=1){if(k=e[p],y=i(k,p),v=c.get(y),v===void 0){var I=t?t.e.nodes_start:r;o=J(I,a,o,o===null?a.first:o.next,k,y,p,l,n),c.set(y,o),u=[],g=[],t=o.next;continue}if(qe(v,k,p),v.e.f&M&&X(v.e),v!==t){if(f!==void 0&&f.has(v)){if(u.length<g.length){var w=g[0],b;o=w.prev;var Y=u[0],C=u[u.length-1];for(b=0;b<u.length;b+=1)P(u[b],w,r);for(b=0;b<g.length;b+=1)f.delete(g[b]);x(a,Y.prev,C.next),x(a,o,Y),x(a,C,w),t=w,o=C,p-=1,u=[],g=[]}else f.delete(v),P(v,t,r),x(a,v.prev,v.next),x(a,v,o===null?a.first:o.next),x(a,o,v),o=v;continue}for(u=[],g=[];t!==null&&t.k!==y;)(s||!(t.e.f&M))&&(f??(f=new Set)).add(t),g.push(t),t=t.next;if(t===null)continue;v=t}u.push(v),o=v,t=v.next}if(t!==null||f!==void 0){for(var R=f===void 0?[]:U(f);t!==null;)(s||!(t.e.f&M))&&R.push(t),t=t.next;var Q=R.length;if(Q>0){var W=_===0?r:null;Le(a,R,W,c)}}B.first=a.first&&a.first.e,B.last=o&&o.e}function qe(e,a,r,l){se(e.v,a),e.i=r}function J(e,a,r,l,n,s,i,d,_,c){var h=(_&_e)!==0,t=(_&he)===0,f=h?t?ce(n):G(n):n,o=_&de?G(i):i,u={i:o,v:f,k:s,a:null,e:null,prev:r,next:l};try{return u.e=$(()=>d(e,f,o),m),u.e.prev=r&&r.e,u.e.next=l&&l.e,r===null?a.first=u:(r.next=u,r.e.next=u.e),l!==null&&(l.prev=u,l.e.prev=u.e),u}finally{}}function P(e,a,r){for(var l=e.next?e.next.e.nodes_start:r,n=a?a.e.nodes_start:r,s=e.e.nodes_start;s!==l;){var i=pe(s);n.before(s),s=i}}function x(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function ze(e){if(m){var a=!1,r=()=>{if(!a){if(a=!0,e.hasAttribute("value")){var l=e.value;S(e,"value",null),e.value=l}if(e.hasAttribute("checked")){var n=e.checked;S(e,"checked",null),e.checked=n}}};e.__on_r=r,ge(r),Me()}}function S(e,a,r,l){var n=e.__attributes??(e.__attributes={});m&&(n[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||n[a]!==(n[a]=r)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[me]=r),r==null?e.removeAttribute(a):typeof r!="string"&&Be(e).includes(a)?e[a]=r:e.setAttribute(a,r))}var F=new Map;function Be(e){var a=F.get(e.nodeName);if(a)return a;F.set(e.nodeName,a=[]);for(var r,l=e,n=Element.prototype;n!==l;){r=be(l);for(var s in r)r[s].set&&a.push(s);l=ye(l)}return a}function Ge(e,a,r=a){var l=xe();Se(e,"input",n=>{var s=n?e.defaultValue:e.value;if(s=L(e)?V(s):s,r(s),l&&s!==(s=a())){var i=e.selectionStart,d=e.selectionEnd;e.value=s??"",d!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(d,e.value.length))}}),(m&&e.defaultValue!==e.value||ke(a)==null&&e.value)&&r(L(e)?V(e.value):e.value),Ee(()=>{var n=a();L(e)&&n===V(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function L(e){var a=e.type;return a==="number"||a==="range"}function V(e){return e===""?null:+e}var Pe=K("<img>"),Fe=K('<!> <button class="relative z-0 h-12 rounded-md bg-blue-500 px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-blue-500 active:scale-95 active:transition active:after:scale-x-125 active:after:scale-y-150 active:after:opacity-0 active:after:transition active:after:duration-500">Submit</button> <input type="text" id="username" name="username" class="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me"><label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Enter a link</label> <div class="grid grid-cols-3"></div>',1);function Ze(e,a){we(a,!1);let r=N(),l=N(),n=N([]),s=N("");He(()=>{T(r,async()=>{const f=await(await fetch("https://api.kurosiko.com/db",{method:"GET",mode:"cors"})).json();T(n,f)}),T(l,async()=>{await fetch("https://api.kurosiko.com/db",{method:"POST",mode:"cors",body:E(s)}),T(s,"")})}),De();var i=Fe(),d=Ae(i);Re(d,()=>E(r),(t,f)=>{f(t,{})});var _=O(d,2),c=O(_,2);ze(c);var h=O(c,3);Ve(h,5,()=>E(n),Oe,(t,f)=>{var o=Pe();Ie(()=>{S(o,"src",E(f).url),S(o,"alt",E(f).url)}),q(t,o)}),Ne(h),Ce("click",_,function(...t){var f;(f=E(l))==null||f.apply(this,t)}),Ge(c,()=>E(s),t=>T(s,t)),q(e,i),Te()}export{Ze as component};
