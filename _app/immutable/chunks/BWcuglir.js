var Ye=e=>{throw TypeError(e)};var Pt=(e,t,n)=>t.has(e)||Ye("Cannot "+n);var A=(e,t,n)=>(Pt(e,t,"read from private field"),n?n.call(e):t.get(e)),P=(e,t,n)=>t.has(e)?Ye("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{aC as C,t as O,G as N,aB as Ct}from"./BXHawrhg.js";import{w as Ce}from"./3nt4sMdx.js";import{o as Je}from"./DCap3dqG.js";new URL("sveltekit-internal://");function Ot(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function Nt(e){return e.split("%25").map(decodeURI).join("%25")}function jt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Re({href:e}){return e.split("#")[0]}function $t(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}function Dt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Bt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const Ft=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&W.delete(Oe(e)),Ft(e,t));const W=new Map;function Vt(e,t){const n=Oe(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&W.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Bt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function Gt(e,t,n){if(W.size>0){const r=Oe(e,n),a=W.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);W.delete(r)}}return window.fetch(t,n)}function Oe(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Dt(...a)}"]`}return r}const Mt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function qt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Kt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Ie(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ie(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const p=Mt.exec(c),[,u,w,f,m]=p;return t.push({name:f,matcher:m,optional:!!u,rest:!!w,chained:w?l===1&&i[0]==="":!1}),w?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Ie(c)}).join("")}).join("")}/?$`),params:t}}function Ht(e){return!/^\([^)]+\)$/.test(e)}function Kt(e){return e.slice(1).split("/").filter(Ht)}function Wt(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(p=>p).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const p=t[o+1],u=a[o+1];p&&!p.rest&&p.optional&&u&&c.chained&&(i=0),!p&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Ie(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Yt({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,p]])=>{const{pattern:u,params:w}=qt(o),f={id:o,exec:m=>{const h=u.exec(m);if(h)return Wt(h,w,r)},errors:[1,...p||[]].map(m=>e[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function ft(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function ze(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}var ot;const x=((ot=globalThis.__sveltekit_15cegr4)==null?void 0:ot.base)??"/webpage";var st;const Jt=((st=globalThis.__sveltekit_15cegr4)==null?void 0:st.assets)??x,zt="1741587063797",ut="sveltekit:snapshot",dt="sveltekit:scroll",ht="sveltekit:states",Xt="sveltekit:pageurl",M="sveltekit:history",z="sveltekit:navigation",B={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},fe=location.origin;function pt(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function Ne(){return{x:pageXOffset,y:pageYOffset}}function G(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Xe={...B,"":B.hover};function gt(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function mt(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=gt(e)}}function Te(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||ve(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===fe&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function de(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=G(o,"preload-code")),a===null&&(a=G(o,"preload-data")),t===null&&(t=G(o,"keepfocus")),n===null&&(n=G(o,"noscroll")),s===null&&(s=G(o,"reload")),i===null&&(i=G(o,"replacestate")),o=gt(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Xe[r??"off"],preload_data:Xe[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Ze(e){const t=Ce(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const wt={v:()=>{}};function Zt(){const{set:e,subscribe:t}=Ce(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Jt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==zt;return i&&(e(!0),wt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function ve(e,t,n){return e.origin!==fe||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function Bn(e){}function Qe(e){const t=en(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const Qt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function en(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=Qt.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const tn=-1,nn=-2,rn=-3,an=-4,on=-5,sn=-6;function cn(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===tn)return;if(s===rn)return NaN;if(s===an)return 1/0;if(s===on)return-1/0;if(s===sn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t==null?void 0:t[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const p=new Set;r[s]=p;for(let f=1;f<o.length;f+=1)p.add(a(o[f]));break;case"Map":const u=new Map;r[s]=u;for(let f=1;f<o.length;f+=2)u.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);r[s]=w;for(let f=1;f<o.length;f+=2)w[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],h=Qe(m),d=new f(h);r[s]=d;break}case"ArrayBuffer":{const f=o[1],m=Qe(f);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const p=o[l];p!==nn&&(c[l]=a(p))}}else{const c={};r[s]=c;for(const l in o){const p=o[l];c[l]=a(p)}}return r[s]}return a(0)}const yt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...yt];const ln=new Set([...yt]);[...ln];function fn(e){return e.filter(t=>t!=null)}class be{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class je{constructor(t,n){this.status=t,this.location=n}}class $e extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const un="x-sveltekit-invalidated",dn="x-sveltekit-trailing-slash";function he(e){return e instanceof be||e instanceof $e?e.status:500}function hn(e){return e instanceof $e?e.text:"Internal Error"}let U,X,Ue;const pn=Je.toString().includes("$$")||/function \w+\(\) \{\}/.test(Je.toString());var ee,te,ne,re,ae,oe,se,ie,it,ce,ct,le,lt;pn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},X={current:null},Ue={current:!1}):(U=new(it=class{constructor(){P(this,ee,C({}));P(this,te,C(null));P(this,ne,C(null));P(this,re,C({}));P(this,ae,C({id:null}));P(this,oe,C({}));P(this,se,C(-1));P(this,ie,C(new URL("https://example.com")))}get data(){return O(A(this,ee))}set data(t){N(A(this,ee),t)}get form(){return O(A(this,te))}set form(t){N(A(this,te),t)}get error(){return O(A(this,ne))}set error(t){N(A(this,ne),t)}get params(){return O(A(this,re))}set params(t){N(A(this,re),t)}get route(){return O(A(this,ae))}set route(t){N(A(this,ae),t)}get state(){return O(A(this,oe))}set state(t){N(A(this,oe),t)}get status(){return O(A(this,se))}set status(t){N(A(this,se),t)}get url(){return O(A(this,ie))}set url(t){N(A(this,ie),t)}},ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ie=new WeakMap,it),X=new(ct=class{constructor(){P(this,ce,C(null))}get current(){return O(A(this,ce))}set current(t){N(A(this,ce),t)}},ce=new WeakMap,ct),Ue=new(lt=class{constructor(){P(this,le,C(!1))}get current(){return O(A(this,le))}set current(t){N(A(this,le),t)}},le=new WeakMap,lt),wt.v=()=>Ue.current=!0);function gn(e){Object.assign(U,e)}const mn="/__data.json",wn=".html__data.json";function yn(e){return e.endsWith(".html")?e.replace(/\.html$/,wn):e.replace(/\/$/,"")+mn}const _n=new Set(["icon","shortcut icon","apple-touch-icon"]),V=ft(dt)??{},Z=ft(ut)??{},$={url:Ze({}),page:Ze({}),navigating:Ce(null),updated:Zt()};function De(e){V[e]=Ne()}function vn(e,t){let n=e+1;for(;V[n];)delete V[n],n+=1;for(n=t+1;Z[n];)delete Z[n],n+=1}function H(e){return location.href=e.href,new Promise(()=>{})}async function _t(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(x||"/");e&&await e.update()}}function et(){}let Be,xe,pe,j,Pe,k;const ge=[],me=[];let L=null;const vt=new Set,bn=new Set,Y=new Set;let v={branch:[],error:null,url:null},Fe=!1,we=!1,tt=!0,Q=!1,K=!1,bt=!1,Ve=!1,At,R,T,F;const J=new Set;async function Mn(e,t,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),k=e,await((s=(a=e.hooks).init)==null?void 0:s.call(a)),Be=Yt(e),j=document.documentElement,Pe=t,xe=e.nodes[0],pe=e.nodes[1],xe(),pe(),R=(i=history.state)==null?void 0:i[M],T=(o=history.state)==null?void 0:o[z],R||(R=T=Date.now(),history.replaceState({...history.state,[M]:R,[z]:T},""));const r=V[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Pn(Pe,n):await Ln(k.hash?On(new URL(location.href)):location.href,{replaceState:!0}),xn()}function An(){ge.length=0,Ve=!1}function kt(e){me.some(t=>t==null?void 0:t.snapshot)&&(Z[e]=me.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function St(e){var t;(t=Z[e])==null||t.forEach((n,r)=>{var a,s;(s=(a=me[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function nt(){De(R),ze(dt,V),kt(T),ze(ut,Z)}async function Ge(e,t,n,r){return ue({type:"goto",url:pt(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Ve=!0),t.invalidate&&t.invalidate.forEach(Tn)}})}async function kn(e){if(e.id!==(L==null?void 0:L.id)){const t={};J.add(t),L={id:e.id,token:t,promise:Rt({...e,preload:t}).then(n=>(J.delete(t),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Le(e){var n;const t=(n=await ke(e,!1))==null?void 0:n.route;t&&await Promise.all([...t.layouts,t.leaf].map(r=>r==null?void 0:r[1]()))}function Et(e,t,n){var s;v=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,e.props.page),At=new k.root({target:t,props:{...e.props,stores:$,components:me},hydrate:n,sync:!1}),St(T);const a={from:null,to:{params:v.params,route:{id:((s=v.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};Y.forEach(i=>i(a)),we=!0}function ye({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(e.pathname===x||e.pathname===x+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);e.pathname=Ot(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:fn(n).map(f=>f.node.component),page:He(U)}};i!==void 0&&(c.props.form=i);let l={},p=!U,u=0;for(let f=0;f<Math.max(n.length,v.branch.length);f+=1){const m=n[f],h=v.branch[f];(m==null?void 0:m.data)!==(h==null?void 0:h.data)&&(p=!0),m&&(l={...l,...m.data},p&&(c.props[`data_${u}`]=l),u+=1)}return(!v.url||e.href!==v.url.href||v.error!==a||i!==void 0&&i!==U.form||p)&&(c.props.page={error:a,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:p?l:U.data}),c}async function Me({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){var p,u,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((p=l.universal)!=null&&p.load){let f=function(...h){for(const d of h){const{href:y}=new URL(d,n);c.dependencies.add(y)}};const m={route:new Proxy(a,{get:(h,d)=>(o&&(c.route=!0),h[d])}),params:new Proxy(r,{get:(h,d)=>(o&&c.params.add(d),h[d])}),data:(s==null?void 0:s.data)??null,url:$t(n,()=>{o&&(c.url=!0)},h=>{o&&c.search_params.add(h)},k.hash),async fetch(h,d){let y;h instanceof Request?(y=h.url,d={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:[...h.headers].length?h.headers:void 0,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...d}):y=h;const S=new URL(y,n);return o&&f(S.href),S.origin===n.origin&&(y=S.href.slice(n.origin.length)),we?Gt(y,S.href,d):Vt(y,d)},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),t()},untrack(h){o=!1;try{return h()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:e,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=l.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function rt(e,t,n,r,a,s){if(Ve)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==v.params[i])return!0;for(const i of a.dependencies)if(ge.some(o=>o(new URL(i))))return!0;return!1}function qe(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function Sn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function at({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:He(U),constructors:[]}}}async function Rt({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===e)return J.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let p=null;const u=v.url?e!==_e(v.url):!1,w=v.route?a.id!==v.route.id:!1,f=Sn(v.url,n);let m=!1;const h=l.map((g,_)=>{var D;const b=v.branch[_],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||rt(m,w,u,f,(D=b.server)==null?void 0:D.uses,r));return E&&(m=!0),E});if(h.some(Boolean)){try{p=await Lt(n,h)}catch(g){const _=await q(g,{url:n,params:r,route:{id:e}});return J.has(s)?at({error:_,url:n,params:r,route:a}):Ae({status:he(g),error:_,url:n,route:a})}if(p.type==="redirect")return p}const d=p==null?void 0:p.nodes;let y=!1;const S=l.map(async(g,_)=>{var Se;if(!g)return;const b=v.branch[_],E=d==null?void 0:d[_];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!rt(y,w,u,f,(Se=b.universal)==null?void 0:Se.uses,r))return b;if(y=!0,(E==null?void 0:E.type)==="error")throw E;return Me({loader:g[1],url:n,params:r,route:a,parent:async()=>{var We;const Ke={};for(let Ee=0;Ee<_;Ee+=1)Object.assign(Ke,(We=await S[Ee])==null?void 0:We.data);return Ke},server_data_node:qe(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of S)g.catch(()=>{});const I=[];for(let g=0;g<l.length;g+=1)if(l[g])try{I.push(await S[g])}catch(_){if(_ instanceof je)return{type:"redirect",location:_.location};if(J.has(s))return at({error:await q(_,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=he(_),E;if(d!=null&&d.includes(_))b=_.status??b,E=_.error;else if(_ instanceof be)E=_.body;else{if(await $.updated.check())return await _t(),await H(n);E=await q(_,{params:r,url:n,route:{id:a.id}})}const D=await En(g,I,i);return D?ye({url:n,params:r,branch:I.slice(0,D.idx).concat(D.node),status:b,error:E,route:a}):await Ut(n,{id:a.id},E,b)}else I.push(void 0);return ye({url:n,params:r,branch:I,status:200,error:null,route:a,form:t?void 0:null})}async function En(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Ae({status:e,error:t,url:n,route:r}){const a={};let s=null;if(k.server_loads[0]===0)try{const o=await Lt(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==fe||n.pathname!==location.pathname||Fe)&&await H(n)}try{const o=await Me({loader:xe,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:qe(s)}),c={node:await pe(),loader:pe,universal:null,server:null,data:null};return ye({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof je)return Ge(new URL(o.location,location.href),{},0);throw o}}async function Rn(e){let t;try{if(t=await k.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);k.hash?n.hash=t:n.pathname=t,t=n}}catch{return}return t}async function ke(e,t){if(e&&!ve(e,x,k.hash)){const n=await Rn(e);if(!n)return;const r=In(n);for(const a of Be){const s=a.exec(r);if(s)return{id:_e(e),invalidating:t,route:a,params:jt(s),url:e}}}}function In(e){return Nt(k.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(x.length))||"/"}function _e(e){return(k.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function It({url:e,type:t,intent:n,delta:r}){let a=!1;const s=xt(v,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return Q||vt.forEach(o=>o(i)),a?null:s}async function ue({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=et,block:p=et}){const u=F;F=c;const w=await ke(t,!1),f=It({url:t,type:e,delta:n==null?void 0:n.delta,intent:w});if(!f){p(),F===c&&(F=u);return}const m=R,h=T;l(),Q=!0,we&&$.navigating.set(X.current=f.navigation);let d=w&&await Rt(w);if(!d){if(ve(t,x,k.hash))return await H(t);d=await Ut(t,{id:null},await q(new $e(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(w==null?void 0:w.url)||t,F!==c)return f.reject(new Error("navigation aborted")),!1;if(d.type==="redirect")if(o>=20)d=await Ae({status:500,error:await q(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return await Ge(new URL(d.location,t).href,{},o+1,c),!1;else d.props.page.status>=400&&await $.updated.check()&&(await _t(),await H(t));if(An(),De(m),kt(h),d.props.page.url.pathname!==t.pathname&&(t.pathname=d.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,_={[M]:R+=g,[z]:T+=g,[ht]:i};(s?history.replaceState:history.pushState).call(history,_,"",t),s||vn(R,T)}if(L=null,d.props.page.state=i,we){v=d.state,d.props.page&&(d.props.page.url=t);const g=(await Promise.all(Array.from(bn,_=>_(f.navigation)))).filter(_=>typeof _=="function");if(g.length>0){let _=function(){g.forEach(b=>{Y.delete(b)})};g.push(_),g.forEach(b=>{Y.add(b)})}At.$set(d.props),gn(d.props.page),bt=!0}else Et(d,Pe,!1);const{activeElement:y}=document;await Ct();const S=n?n.scroll:a?Ne():null;if(tt){const g=t.hash&&document.getElementById(decodeURIComponent(k.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));S?scrollTo(S.x,S.y):g?g.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==y&&document.activeElement!==document.body;!r&&!I&&Cn(),tt=!0,d.props.page&&Object.assign(U,d.props.page),Q=!1,e==="popstate"&&St(T),f.fulfil(void 0),Y.forEach(g=>g(f.navigation)),$.navigating.set(X.current=null)}async function Ut(e,t,n,r){return e.origin===fe&&e.pathname===location.pathname&&!Fe?await Ae({status:r,error:n,url:e,route:t}):await H(e)}function Un(){let e,t,n;j.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(e),e=setTimeout(()=>{s(c,B.hover)},20)});function r(o){o.defaultPrevented||s(o.composedPath()[0],B.tap)}j.addEventListener("mousedown",r),j.addEventListener("touchstart",r,{passive:!0});const a=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(Le(new URL(c.target.href)),a.unobserve(c.target))},{threshold:0});async function s(o,c){const l=mt(o,j),p=l===t&&c>=n;if(!l||p)return;const{url:u,external:w,download:f}=Te(l,x,k.hash);if(w||f)return;const m=de(l),h=u&&_e(v.url)===_e(u);if(!(m.reload||h))if(c<=m.preload_data){t=l,n=B.tap;const d=await ke(u,!1);if(!d)return;kn(d)}else c<=m.preload_code&&(t=l,n=c,Le(u))}function i(){a.disconnect();for(const o of j.querySelectorAll("a")){const{url:c,external:l,download:p}=Te(o,x,k.hash);if(l||p)continue;const u=de(o);u.reload||(u.preload_code===B.viewport&&a.observe(o),u.preload_code===B.eager&&Le(c))}}Y.add(i),i()}function q(e,t){if(e instanceof be)return e.body;const n=he(e),r=hn(e);return k.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Ln(e,t={}){return e=new URL(pt(e)),e.origin!==fe?Promise.reject(new Error("goto: invalid URL")):Ge(e,t,0)}function Tn(e){if(typeof e=="function")ge.push(e);else{const{href:t}=new URL(e,location.href);ge.push(n=>n.href===t)}}function xn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(nt(),!Q){const a=xt(v,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};vt.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&nt()}),(t=navigator.connection)!=null&&t.saveData||Un(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=mt(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Te(r,x,k.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=de(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[p,u]=(k.hash?a.hash.replace(/^#/,""):a.href).split("#"),w=p===Re(location);if(s||c.reload&&(!w||!u)){It({url:a,type:"link"})?Q=!0:n.preventDefault();return}if(u!==void 0&&w){const[,f]=v.url.href.split("#");if(f===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(K=!0,De(R),e(a),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),await ue({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ve(o,x,!1))return;const c=n.target,l=de(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const p=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&p.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(p).toString(),ue({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[M]){const a=n.state[M];if(F={},a===R)return;const s=V[a],i=n.state[ht]??{},o=new URL(n.state[Xt]??location.href),c=n.state[z],l=v.url?Re(location)===Re(v.url):!1;if(c===T&&(bt||l)){i!==U.state&&(U.state=i),e(o),V[R]=Ne(),s&&scrollTo(s.x,s.y),R=a;return}const u=a-R;await ue({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{R=a,T=c},block:()=>{history.go(-u)},nav_token:F})}else if(!K){const a=new URL(location.href);e(a),k.hash&&location.reload()}}),addEventListener("hashchange",()=>{K&&(K=!1,history.replaceState({...history.state,[M]:++R,[z]:T},"",location.href))});for(const n of document.querySelectorAll("link"))_n.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(X.current=null)});function e(n){v.url=U.url=n,$.page.set(He(U)),$.page.notify()}}async function Pn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Fe=!0;const l=new URL(location.href);let p;({params:a={},route:s={id:null}}=await ke(l,!1)||{}),p=Be.find(({id:f})=>f===s.id);let u,w=!0;try{const f=r.map(async(h,d)=>{const y=o[d];return y!=null&&y.uses&&(y.uses=Tt(y.uses)),Me({loader:k.nodes[h],url:l,params:a,route:s,parent:async()=>{const S={};for(let I=0;I<d;I+=1)Object.assign(S,(await f[I]).data);return S},server_data_node:qe(y)})}),m=await Promise.all(f);if(p){const h=p.layouts;for(let d=0;d<h.length;d++)h[d]||m.splice(d,0,void 0)}u=ye({url:l,params:a,branch:m,status:t,error:n,form:c,route:p??null})}catch(f){if(f instanceof je){await H(new URL(f.location,location.href));return}u=await Ae({status:he(f),error:await q(f,{url:l,params:a,route:s}),url:l,route:s}),e.textContent="",w=!1}u.props.page&&(u.props.page.state={}),Et(u,e,w)}async function Lt(e,t){var s;const n=new URL(e);n.pathname=yn(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(dn,"1"),n.searchParams.append(un,t.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new be(a.status,i)}return new Promise(async i=>{var w;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function p(f){return cn(f,{...k.decoders,Promise:m=>new Promise((h,d)=>{o.set(m,{fulfil:h,reject:d})})})}let u="";for(;;){const{done:f,value:m}=await c.read();if(f&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const h=u.indexOf(`
`);if(h===-1)break;const d=JSON.parse(u.slice(0,h));if(u=u.slice(h+1),d.type==="redirect")return i(d);if(d.type==="data")(w=d.nodes)==null||w.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=Tt(y.uses),y.data=p(y.data))}),i(d);else if(d.type==="chunk"){const{id:y,data:S,error:I}=d,g=o.get(y);o.delete(y),I?g.reject(p(I)):g.fulfil(p(S))}}}})}function Tt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Cn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function xt(e,t,n,r){var c,l;let a,s;const i=new Promise((p,u)=>{a=p,s=u});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((l=t==null?void 0:t.route)==null?void 0:l.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function He(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function On(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{Mn as a,Bn as l,U as p,$ as s,Ue as u};
