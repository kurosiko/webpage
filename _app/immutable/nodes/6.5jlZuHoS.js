import"../chunks/CWj6FrbW.js";import"../chunks/69_IOA4Y.js";import{h as I,a as fe,b as ce,t as p,f as de,r as U,s as X,i as Y,d as S,aj as ve,j as ae,c as re,p as me,ap as q,an as te,P as K,aq as pe,ar as he,am as _e,as as be,at as ge,Y as ye,R as ke,a1 as xe,M as Q,au as we,av as Ee,aw as Te,ah as Ie,ax as Ae,m as ne,ay as le,y as De,F as W,A as Me,G as w,D,B as C,x as Re,C as N,I as M,z as Se}from"../chunks/BXHawrhg.js";import{l as se,e as $}from"../chunks/DGP4HvRY.js";import{a as z,t as oe,c as Ce}from"../chunks/yiCEUnhv.js";import{i as Ne}from"../chunks/CS7GesOW.js";import{c as Oe}from"../chunks/D9dE5YX2.js";import{r as F,s as Z}from"../chunks/BfkRYbtj.js";import{i as He}from"../chunks/012khxX4.js";import{o as Pe}from"../chunks/DCap3dqG.js";import{u as Ve,s as Be,p as E}from"../chunks/8e8csOgM.js";function Le(e,a){return a}function Ye(e,a,r,o){for(var i=[],l=a.length,u=0;u<l;u++)he(a[u].e,i,!0);var h=l>0&&i.length===0&&r!==null;if(h){var v=r.parentNode;_e(v),v.append(r),o.clear(),T(e,a[0].prev,a[l-1].next)}be(i,()=>{for(var g=0;g<l;g++){var t=a[g];h||(o.delete(t.k),T(e,t.prev,t.next)),ge(t.e,!h)}})}function qe(e,a,r,o,i,l=null){var u=e,h={flags:a,items:new Map,first:null};I&&fe();var v=null,g=!1,t=ye(()=>{var c=r();return ke(c)?c:c==null?[]:te(c)});ce(()=>{var c=p(t),n=c.length;if(g&&n===0)return;g=n===0;let m=!1;if(I){var f=u.data===de;f!==(n===0)&&(u=U(),X(u),Y(!1),m=!0)}if(I){for(var k=null,y,s=0;s<n;s++){if(S.nodeType===8&&S.data===ve){u=S,m=!0,Y(!1);break}var b=c[s],R=o(b,s);y=ie(S,h,k,null,b,R,s,i,a,r),h.items.set(R,y),k=y}n>0&&X(U())}I||$e(c,h,u,i,a,o,r),l!==null&&(n===0?v?ae(v):v=re(()=>l(u)):v!==null&&me(v,()=>{v=null})),m&&Y(!0),p(t)}),I&&(u=S)}function $e(e,a,r,o,i,l,u){var h=e.length,v=a.items,g=a.first,t=g,c,n=null,m=[],f=[],k,y,s,b;for(b=0;b<h;b+=1){if(k=e[b],y=l(k,b),s=v.get(y),s===void 0){var R=t?t.e.nodes_start:r;n=ie(R,a,n,n===null?a.first:n.next,k,y,b,o,i,u),v.set(y,n),m=[],f=[],t=n.next;continue}if(ze(s,k,b),(s.e.f&q)!==0&&ae(s.e),s!==t){if(c!==void 0&&c.has(s)){if(m.length<f.length){var A=f[0],x;n=A.prev;var O=m[0],d=m[m.length-1];for(x=0;x<m.length;x+=1)j(m[x],A,r);for(x=0;x<f.length;x+=1)c.delete(f[x]);T(a,O.prev,d.next),T(a,n,O),T(a,d,A),t=A,n=d,b-=1,m=[],f=[]}else c.delete(s),j(s,t,r),T(a,s.prev,s.next),T(a,s,n===null?a.first:n.next),T(a,n,s),n=s;continue}for(m=[],f=[];t!==null&&t.k!==y;)(t.e.f&q)===0&&(c??(c=new Set)).add(t),f.push(t),t=t.next;if(t===null)continue;s=t}m.push(s),n=s,t=s.next}if(t!==null||c!==void 0){for(var _=c===void 0?[]:te(c);t!==null;)(t.e.f&q)===0&&_.push(t),t=t.next;var H=_.length;if(H>0){var P=null;Ye(a,_,P,v)}}K.first=a.first&&a.first.e,K.last=n&&n.e}function ze(e,a,r,o){pe(e.v,a),e.i=r}function ie(e,a,r,o,i,l,u,h,v,g){var t=(v&Ee)!==0,c=(v&Te)===0,n=t?c?xe(i):Q(i):i,m=(v&we)===0?u:Q(u),f={i:m,v:n,k:l,a:null,e:null,prev:r,next:o};try{return f.e=re(()=>h(e,n,m,g),I),f.e.prev=r&&r.e,f.e.next=o&&o.e,r===null?a.first=f:(r.next=f,r.e.next=f.e),o!==null&&(o.prev=f,o.e.prev=f.e),f}finally{}}function j(e,a,r){for(var o=e.next?e.next.e.nodes_start:r,i=a?a.e.nodes_start:r,l=e.e.nodes_start;l!==o;){var u=Ie(l);i.before(l),l=u}}function T(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function ee(e,a,r=a){var o=Ae();se(e,"input",i=>{var l=i?e.defaultValue:e.value;if(l=G(e)?J(l):l,r(l),o&&l!==(l=a())){var u=e.selectionStart,h=e.selectionEnd;e.value=l??"",h!==null&&(e.selectionStart=u,e.selectionEnd=Math.min(h,e.value.length))}}),(I&&e.defaultValue!==e.value||ne(a)==null&&e.value)&&r(G(e)?J(e.value):e.value),le(()=>{var i=a();G(e)&&i===J(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function Fe(e,a,r=a){se(e,"change",o=>{var i=o?e.defaultChecked:e.checked;r(i)}),(I&&e.defaultChecked!==e.checked||ne(a)==null)&&r(e.checked),le(()=>{var o=a();e.checked=!!o})}function G(e){var a=e.type;return a==="number"||a==="range"}function J(e){return e===""?null:+e}const Ge={get data(){return E.data},get error(){return E.error},get form(){return E.form},get params(){return E.params},get route(){return E.route},get state(){return E.state},get status(){return E.status},get url(){return E.url}};Be.updated.check;const Je=Ge;var Ue=oe('<div class="group relative"><img class="w-full max-w-full object-cover"> <button class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 m-auto transition-all">Delete</button></div>'),Xe=oe('<!> <div class="p-2 flex gap-5"><button class="p-2 border-pink-300 border-2 border-double rounded-sm hover:border-blue-400 transition-all">Submit</button> <div class="relative"><input type="text" class="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me"><label for="username" class="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Enter a link</label></div> <div class="flex gap-5 text-center justify-center items-center border-b-pink-300 border-b-2 px-5"><input type="checkbox"> <div>Random</div> <input type="number"></div> <button class="p-2 border-pink-300 border-2 border-double rounded-sm hover:border-blue-400 transition-all">Reload</button></div> <div class="grid w-full md:grid-cols-[repeat(3,minmax(0,1fr))] [&amp;>*]:max-w-full"><!></div>',1);function sa(e,a){De(a,!1);let r=M(),o=M(),i=M(),l=M([]),u=M(""),h=M(20),v=M(!0);const g=()=>{setTimeout(async()=>{Je.url.pathname==="/media/image"&&(await p(r)(),g())},3e4)};Pe(()=>{w(r,async()=>{const _=await(await fetch("https://api.kurosiko.com/get-db",{method:"POST",mode:"cors",body:JSON.stringify({rand:p(v),limit:p(h)?p(h):20})})).json();w(l,_)}),w(o,async()=>{await fetch("https://api.kurosiko.com/db",{method:"POST",mode:"cors",body:p(u)}),w(u,"")}),w(i,async d=>{await fetch("https://api.kurosiko.com/db",{method:"DELETE",mode:"cors",body:d}),await p(r)()}),g()}),He();var t=Xe(),c=W(t);Oe(c,()=>p(r),(d,_)=>{_(d,{})});var n=D(c,2),m=C(n),f=D(m,2),k=C(f);F(k),Re(),N(f);var y=D(f,2),s=C(y);F(s);var b=D(s,4);F(b),N(y);var R=D(y,2);N(n);var A=D(n,2),x=C(A);{var O=d=>{var _=Ce(),H=W(_);qe(H,1,()=>p(l),Le,(P,V)=>{var B=Ue(),L=C(B),ue=D(L,2);N(B),Se(()=>{Z(L,"src",p(V).url),Z(L,"alt",p(V).url)}),$("click",ue,()=>p(i)(p(V).url)),z(P,B)}),z(d,_)};Ne(x,d=>{p(l)!=null&&d(O)})}N(A),$("click",m,function(...d){var _;(_=p(o))==null||_.apply(this,d)}),ee(k,()=>p(u),d=>w(u,d)),Fe(s,()=>p(v),d=>w(v,d)),ee(b,()=>p(h),d=>w(h,d)),$("click",R,function(...d){var _;(_=p(r))==null||_.apply(this,d)}),z(e,t),Me()}export{sa as component};
