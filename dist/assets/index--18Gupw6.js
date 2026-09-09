const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BinMonitoring-paSKKqlk.js","assets/ui-vendor-DMnB-hTg.js","assets/react-vendor-73flmPZe.js","assets/badge-crORgQzu.js","assets/progress-Ry3wFGl1.js","assets/triangle-alert-D8I90rBp.js","assets/circle-check-big-Bqc0nE3X.js","assets/map-pin-vGi-CyRb.js","assets/weight-BcN87XkH.js","assets/chart-vendor-C_2IS7-I.js","assets/MapLocation-Et7k-Xfk.js","assets/MapLocation-CIGW-MKW.css","assets/Alerts-CQqk5uLk.js","assets/RotIndex-BXes8wSu.js","assets/Analytics-slu-3kWg.js","assets/trending-up-DifGcCdg.js","assets/Workers-f8ldOzdW.js","assets/search-CgyvI_pU.js","assets/Maintenance-Dmqzd0r1.js","assets/UserManagement-Bt8l9wmY.js","assets/shield-DrhaBRDc.js","assets/NotFound-D8pFhUss.js","assets/Signup-CsHXNRXO.js","assets/VerificationModal-DqXN4jjG.js","assets/Terms-CHvLA8rB.js","assets/LandingPage-K_ddW7yL.js"])))=>i.map(i=>d[i]);
import{a as Eg,j as p,S as Tg,b as Cg}from"./ui-vendor-DMnB-hTg.js";import{g as xg,a as v,u as Ig,L as Zl,O as Sg,b as kg,d as Ag,R as Pg}from"./react-vendor-73flmPZe.js";import{g as $h,R as ec,B as Rg,C as tc,X as nc,Y as sc,T as ic,c as Ng,L as Mg,a as Dg,b as rc}from"./chart-vendor-C_2IS7-I.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var ai={},oc;function Og(){if(oc)return ai;oc=1;var t=Eg();return ai.createRoot=t.createRoot,ai.hydrateRoot=t.hydrateRoot,ai}var Lg=Og();const Fg=xg(Lg),Vg="modulepreload",jg=function(t){return"/"+t},ac={},Ve=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=o(n.map(c=>{if(c=jg(c),c in ac)return;ac[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Vg,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((f,m)=>{d.addEventListener("load",f),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},Bg=()=>{};var lc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=function(t,e){if(!t)throw Un(e)},Un=function(t){return new Error("Firebase Database ("+Gh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ug=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ug(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Wg;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Wg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qh=function(t){const e=Kh(t);return xa.encodeByteArray(e,!0)},Di=function(t){return qh(t).replace(/\./g,"")},Oi=function(t){try{return xa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(t){return Yh(void 0,t)}function Yh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!zg(n)||(t[n]=Yh(t[n],e[n]));return t}function zg(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=()=>$g().__FIREBASE_DEFAULTS__,Kg=()=>{if(typeof process>"u"||typeof lc>"u")return;const t=lc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Oi(t[1]);return e&&JSON.parse(e)},Ia=()=>{try{return Bg()||Gg()||Kg()||qg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qh=t=>{var e,n;return(n=(e=Ia())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Yg=t=>{const e=Qh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Xh=()=>{var t;return(t=Ia())==null?void 0:t.config},Jh=t=>{var e;return(e=Ia())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Di(JSON.stringify(n)),Di(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Xg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zg(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ey(){return Gh.NODE_ADMIN===!0}function ty(){try{return typeof indexedDB=="object"}catch{return!1}}function ny(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="FirebaseError";class zt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=sy,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fs.prototype.create)}}class Fs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?iy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new zt(i,a,s)}}function iy(t,e){return t.replace(ry,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ry=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){return JSON.parse(t)}function re(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Es(Oi(r[0])||""),n=Es(Oi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},oy=function(t){const e=ed(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ay=function(t){const e=ed(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ln(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Li(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function cn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(cc(r)&&cc(o)){if(!cn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function cc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function cs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function cy(t,e){const n=new uy(t,e);return n.subscribe.bind(n)}class uy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=$r),i.error===void 0&&(i.error=$r),i.complete===void 0&&(i.complete=$r);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $r(){}function un(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,w(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function td(t){return(await fetch(t,{credentials:"include"})).ok}class gt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new xe;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(py(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:fy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fy(t){return t===Jt?void 0:t}function py(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xo(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const my={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},gy=W.INFO,yy={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},_y=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=yy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ka{constructor(e){this.name=e,this._logLevel=gy,this._logHandler=_y,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?my[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const vy=(t,e)=>e.some(n=>t instanceof n);let uc,hc;function wy(){return uc||(uc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function by(){return hc||(hc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sd=new WeakMap,Io=new WeakMap,id=new WeakMap,Gr=new WeakMap,Aa=new WeakMap;function Ey(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sd.set(n,t)}).catch(()=>{}),Aa.set(e,t),e}function Ty(t){if(Io.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Io.set(t,e)}let So={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Io.get(t);if(e==="objectStoreNames")return t.objectStoreNames||id.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cy(t){So=t(So)}function xy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Kr(this),e,...n);return id.set(s,e.sort?e.sort():[e]),Nt(s)}:by().includes(t)?function(...e){return t.apply(Kr(this),e),Nt(sd.get(this))}:function(...e){return Nt(t.apply(Kr(this),e))}}function Iy(t){return typeof t=="function"?xy(t):(t instanceof IDBTransaction&&Ty(t),vy(t,wy())?new Proxy(t,So):t)}function Nt(t){if(t instanceof IDBRequest)return Ey(t);if(Gr.has(t))return Gr.get(t);const e=Iy(t);return e!==t&&(Gr.set(t,e),Aa.set(e,t)),e}const Kr=t=>Aa.get(t);function Sy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Nt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Nt(o.result),l.oldVersion,l.newVersion,Nt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ky=["get","getKey","getAll","getAllKeys","count"],Ay=["put","add","delete","clear"],qr=new Map;function dc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qr.get(e))return qr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ay.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ky.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return qr.set(e,r),r}Cy(t=>({...t,get:(e,n,s)=>dc(e,n)||t.get(e,n,s),has:(e,n)=>!!dc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ry(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ry(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ko="@firebase/app",fc="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new ka("@firebase/app"),Ny="@firebase/app-compat",My="@firebase/analytics-compat",Dy="@firebase/analytics",Oy="@firebase/app-check-compat",Ly="@firebase/app-check",Fy="@firebase/auth",Vy="@firebase/auth-compat",jy="@firebase/database",By="@firebase/data-connect",Uy="@firebase/database-compat",Wy="@firebase/functions",Hy="@firebase/functions-compat",zy="@firebase/installations",$y="@firebase/installations-compat",Gy="@firebase/messaging",Ky="@firebase/messaging-compat",qy="@firebase/performance",Yy="@firebase/performance-compat",Qy="@firebase/remote-config",Xy="@firebase/remote-config-compat",Jy="@firebase/storage",Zy="@firebase/storage-compat",e_="@firebase/firestore",t_="@firebase/ai",n_="@firebase/firestore-compat",s_="firebase",i_="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao="[DEFAULT]",r_={[ko]:"fire-core",[Ny]:"fire-core-compat",[Dy]:"fire-analytics",[My]:"fire-analytics-compat",[Ly]:"fire-app-check",[Oy]:"fire-app-check-compat",[Fy]:"fire-auth",[Vy]:"fire-auth-compat",[jy]:"fire-rtdb",[By]:"fire-data-connect",[Uy]:"fire-rtdb-compat",[Wy]:"fire-fn",[Hy]:"fire-fn-compat",[zy]:"fire-iid",[$y]:"fire-iid-compat",[Gy]:"fire-fcm",[Ky]:"fire-fcm-compat",[qy]:"fire-perf",[Yy]:"fire-perf-compat",[Qy]:"fire-rc",[Xy]:"fire-rc-compat",[Jy]:"fire-gcs",[Zy]:"fire-gcs-compat",[e_]:"fire-fst",[n_]:"fire-fst-compat",[t_]:"fire-vertex","fire-js":"fire-js",[s_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Map,o_=new Map,Po=new Map;function pc(t,e){try{t.container.addComponent(e)}catch(n){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nn(t){const e=t.name;if(Po.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;Po.set(e,t);for(const n of Vi.values())pc(n,t);for(const n of o_.values())pc(n,t);return!0}function Pa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ne(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new Fs("app","Firebase",a_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=i_;function rd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Ao,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=Xh()),!n)throw Mt.create("no-options");const r=Vi.get(i);if(r){if(cn(n,r.options)&&cn(s,r.config))return r;throw Mt.create("duplicate-app",{appName:i})}const o=new nd(i);for(const l of Po.values())o.addComponent(l);const a=new l_(n,s,o);return Vi.set(i,a),a}function od(t=Ao){const e=Vi.get(t);if(!e&&t===Ao&&Xh())return rd();if(!e)throw Mt.create("no-app",{appName:t});return e}function Dt(t,e,n){let s=r_[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(o.join(" "));return}Nn(new gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="firebase-heartbeat-database",u_=1,Ts="firebase-heartbeat-store";let Yr=null;function ad(){return Yr||(Yr=Sy(c_,u_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ts)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})})),Yr}async function h_(t){try{const n=(await ad()).transaction(Ts),s=await n.objectStore(Ts).get(ld(t));return await n.done,s}catch(e){if(e instanceof zt)yt.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(n.message)}}}async function mc(t,e){try{const s=(await ad()).transaction(Ts,"readwrite");await s.objectStore(Ts).put(e,ld(t)),await s.done}catch(n){if(n instanceof zt)yt.warn(n.message);else{const s=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yt.warn(s.message)}}}function ld(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=1024,f_=30;class p_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new g_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>f_){const o=y_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){yt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gc(),{heartbeatsToSend:s,unsentEntries:i}=m_(this._heartbeatsCache.heartbeats),r=Di(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return yt.warn(n),""}}}function gc(){return new Date().toISOString().substring(0,10)}function m_(t,e=d_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),yc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class g_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ty()?ny().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await h_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return mc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return mc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yc(t){return Di(JSON.stringify({version:2,heartbeats:t})).length}function y_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t){Nn(new gt("platform-logger",e=>new Py(e),"PRIVATE")),Nn(new gt("heartbeat",e=>new p_(e),"PRIVATE")),Dt(ko,fc,t),Dt(ko,fc,"esm2020"),Dt("fire-js","")}__("");function cd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v_=cd,ud=new Fs("auth","Firebase",cd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new ka("@firebase/auth");function w_(t,...e){ji.logLevel<=W.WARN&&ji.warn(`Auth (${Hn}): ${t}`,...e)}function Ei(t,...e){ji.logLevel<=W.ERROR&&ji.error(`Auth (${Hn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,...e){throw Ra(t,...e)}function et(t,...e){return Ra(t,...e)}function hd(t,e,n){const s={...v_(),[e]:n};return new Fs("auth","Firebase",s).create(e,{appName:t.name})}function mt(t){return hd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ra(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ud.create(t,...e)}function P(t,e,...n){if(!t)throw Ra(e,...n)}function dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ei(e),new Error(e)}function _t(t,e){t||dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function dd(){return _c()==="http:"||_c()==="https:"}function _c(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dd()||Jg()||"connection"in navigator)?navigator.onLine:!0}function E_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.shortDelay=e,this.longDelay=n,_t(n>e,"Short delay should be less than long delay!"),this.isMobile=Sa()||Zh()}get(){return b_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t,e){_t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],x_=new js(3e4,6e4);function at(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function lt(t,e,n,s,i={}){return pd(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Wn({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...r};return Xg()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Vs(t.emulatorConfig.host)&&(c.credentials="include"),fd.fetch()(await md(t,t.config.apiHost,n,a),c)})}async function pd(t,e,n){t._canInitEmulator=!1;const s={...T_,...e};try{const i=new S_(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw li(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw li(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw li(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw li(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hd(t,u,c);$e(t,u)}}catch(i){if(i instanceof zt)throw i;$e(t,"network-request-failed",{message:String(i)})}}async function Bs(t,e,n,s,i={}){const r=await lt(t,e,n,s,i);return"mfaPendingCredential"in r&&$e(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function md(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?Na(t.config,i):`${t.config.apiScheme}://${i}`;return C_.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function I_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class S_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(et(this.auth,"network-request-failed")),x_.get())})}}function li(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=et(t,e,s);return i.customData._tokenResponse=n,i}function vc(t){return t!==void 0&&t.enterprise!==void 0}class k_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return I_(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function A_(t,e){return lt(t,"GET","/v2/recaptchaConfig",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(t,e){return lt(t,"POST","/v1/accounts:delete",e)}async function Ui(t,e){return lt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function R_(t,e=!1){const n=Y(t),s=await n.getIdToken(e),i=Ma(s);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ds(Qr(i.auth_time)),issuedAtTime:ds(Qr(i.iat)),expirationTime:ds(Qr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qr(t){return Number(t)*1e3}function Ma(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ei("JWT malformed, contained fewer than 3 sections"),null;try{const i=Oi(n);return i?JSON.parse(i):(Ei("Failed to decode base64 JWT payload"),null)}catch(i){return Ei("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wc(t){const e=Ma(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof zt&&N_(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function N_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ds(this.lastLoginAt),this.creationTime=ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t){var h;const e=t.auth,n=await t.getIdToken(),s=await Cs(t,Ui(e,{idToken:n}));P(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=(h=i.providerUserInfo)!=null&&h.length?gd(i.providerUserInfo):[],o=O_(t.providerData,r),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ro(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function D_(t){const e=Y(t);await Wi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function O_(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function gd(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(t,e){const n=await pd(t,{},async()=>{const s=Wn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await md(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return t.emulatorConfig&&Vs(t.emulatorConfig.host)&&(l.credentials="include"),fd.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function F_(t,e){return lt(t,"POST","/v2/accounts:revokeToken",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){P(e.length!==0,"internal-error");const n=wc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await L_(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Sn;return s&&(P(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(P(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sn,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ue{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new M_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ro(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Cs(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return R_(this,e)}reload(){return D_(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Wi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ne(this.auth.app))return Promise.reject(mt(this.auth));const e=await this.getIdToken();return await Cs(this,P_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:h,emailVerified:d,isAnonymous:f,providerData:m,stsTokenManager:y}=n;P(h&&y,e,"internal-error");const g=Sn.fromJSON(this.name,y);P(typeof h=="string",e,"internal-error"),bt(s,e.name),bt(i,e.name),P(typeof d=="boolean",e,"internal-error"),P(typeof f=="boolean",e,"internal-error"),bt(r,e.name),bt(o,e.name),bt(a,e.name),bt(l,e.name),bt(c,e.name),bt(u,e.name);const _=new Ue({uid:h,auth:e,email:i,emailVerified:d,displayName:s,isAnonymous:f,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:g,createdAt:c,lastLoginAt:u});return m&&Array.isArray(m)&&(_.providerData=m.map(b=>({...b}))),l&&(_._redirectEventId=l),_}static async _fromIdTokenResponse(e,n,s=!1){const i=new Sn;i.updateFromServerResponse(n);const r=new Ue({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Wi(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];P(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?gd(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Sn;a.updateFromIdToken(s);const l=new Ue({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Ro(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new Map;function ft(t){_t(t instanceof Function,"Expected a class definition");let e=bc.get(t);return e?(_t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yd.type="NONE";const Ec=yd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t,e,n){return`firebase:${t}:${e}:${n}`}class kn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ti(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ti("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ui(this.auth,{idToken:e}).catch(()=>{});return n?Ue._fromGetAccountInfoResponse(this.auth,n,e):null}return Ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new kn(ft(Ec),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||ft(Ec);const o=Ti(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let h;if(typeof u=="string"){const d=await Ui(e,{idToken:u}).catch(()=>{});if(!d)break;h=await Ue._fromGetAccountInfoResponse(e,d,u)}else h=Ue._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new kn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new kn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_d(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Td(e))return"Blackberry";if(Cd(e))return"Webos";if(vd(e))return"Safari";if((e.includes("chrome/")||wd(e))&&!e.includes("edge/"))return"Chrome";if(Ed(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function _d(t=we()){return/firefox\//i.test(t)}function vd(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wd(t=we()){return/crios\//i.test(t)}function bd(t=we()){return/iemobile/i.test(t)}function Ed(t=we()){return/android/i.test(t)}function Td(t=we()){return/blackberry/i.test(t)}function Cd(t=we()){return/webos/i.test(t)}function Da(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function V_(t=we()){var e;return Da(t)&&!!((e=window.navigator)!=null&&e.standalone)}function j_(){return Zg()&&document.documentMode===10}function xd(t=we()){return Da(t)||Ed(t)||Cd(t)||Td(t)||/windows phone/i.test(t)||bd(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t,e=[]){let n;switch(t){case"Browser":n=Tc(we());break;case"Worker":n=`${Tc(we())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(t,e={}){return lt(t,"GET","/v2/passwordPolicy",at(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=6;class H_{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??W_,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cc(this),this.idTokenSubscription=new Cc(this),this.beforeStateQueue=new B_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ud,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await kn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ui(this,{idToken:e}),s=await Ue._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Ne(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ne(this.app))return Promise.reject(mt(this));const n=e?Y(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ne(this.app)?Promise.reject(mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ne(this.app)?Promise.reject(mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await U_(this),n=new H_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await F_(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Id(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Ne(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&w_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function $t(t){return Y(t)}class Cc{constructor(e){this.auth=e,this.observer=null,this.addObserver=cy(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $_(t){gr=t}function Sd(t){return gr.loadJS(t)}function G_(){return gr.recaptchaEnterpriseScript}function K_(){return gr.gapiScript}function q_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Y_{constructor(){this.enterprise=new Q_}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Q_{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const X_="recaptcha-enterprise",kd="NO_RECAPTCHA";class J_{constructor(e){this.type=X_,this.auth=$t(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{A_(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new k_(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;vc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(kd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Y_().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&vc(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=G_();l.length!==0&&(l+=a),Sd(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function xc(t,e,n,s=!1,i=!1){const r=new J_(t);let o;if(i)o=kd;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Hi(t,e,n,s,i){var r;if((r=t._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await xc(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await xc(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t,e){const n=Pa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(cn(r,e??{}))return i;$e(i,"already-initialized")}return n.initialize({options:e})}function ev(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function tv(t,e,n){const s=$t(t);P(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Ad(e),{host:o,port:a}=nv(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){P(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),P(cn(c,s.config.emulator)&&cn(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,Vs(o)?td(`${r}//${o}${l}`):sv()}function Ad(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nv(t){const e=Ad(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Ic(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Ic(o)}}}function Ic(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,n){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function iv(t,e){return lt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(t,e){return Bs(t,"POST","/v1/accounts:signInWithPassword",at(t,e))}async function Pd(t,e){return lt(t,"POST","/v1/accounts:sendOobCode",at(t,e))}async function ov(t,e){return Pd(t,e)}async function av(t,e){return Pd(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(t,e){return Bs(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}async function cv(t,e){return Bs(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends Oa{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new xs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new xs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hi(e,n,"signInWithPassword",rv);case"emailLink":return lv(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hi(e,s,"signUpPassword",iv);case"emailLink":return cv(e,{idToken:n,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(t,e){return Bs(t,"POST","/v1/accounts:signInWithIdp",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="http://localhost";class hn extends Oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new hn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return An(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,An(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,An(e,n)}buildRequest(){const e={requestUri:uv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dv(t){const e=ls(cs(t)).link,n=e?ls(cs(e)).deep_link_id:null,s=ls(cs(t)).deep_link_id;return(s?ls(cs(s)).link:null)||s||n||e||t}class La{constructor(e){const n=ls(cs(e)),s=n.apiKey??null,i=n.oobCode??null,r=hv(n.mode??null);P(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=dv(e);try{return new La(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.providerId=zn.PROVIDER_ID}static credential(e,n){return xs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=La.parseLink(n);return P(s,"argument-error"),xs._fromEmailAndCode(e,s.code,s.tenantId)}}zn.PROVIDER_ID="password";zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends Rd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Us{constructor(){super("facebook.com")}static credential(e){return hn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hn._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ht.credential(n,s)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Us{constructor(){super("github.com")}static credential(e){return hn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends Us{constructor(){super("twitter.com")}static credential(e,n){return hn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return kt.credential(n,s)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv(t,e){return Bs(t,"POST","/v1/accounts:signUp",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ue._fromIdTokenResponse(e,s,i),o=Sc(s);return new dn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Sc(s);return new dn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Sc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends zt{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,zi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new zi(e,n,s,i)}}function Nd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?zi._fromErrorAndOperation(t,r,e,s):r})}async function pv(t,e,n=!1){const s=await Cs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(t,e,n=!1){const{auth:s}=t;if(Ne(s.app))return Promise.reject(mt(s));const i="reauthenticate";try{const r=await Cs(t,Nd(s,i,e,t),n);P(r.idToken,s,"internal-error");const o=Ma(r.idToken);P(o,s,"internal-error");const{sub:a}=o;return P(t.uid===a,s,"user-mismatch"),dn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&$e(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Md(t,e,n=!1){if(Ne(t.app))return Promise.reject(mt(t));const s="signIn",i=await Nd(t,s,e),r=await dn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function gv(t,e){return Md($t(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t,e,n){var s;P(((s=n.url)==null?void 0:s.length)>0,t,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),P(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Od(t){const e=$t(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eP(t,e,n){const s=$t(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Dd(s,i,n),await Hi(s,i,"getOobCode",av)}async function tP(t,e,n){if(Ne(t.app))return Promise.reject(mt(t));const s=$t(t),o=await Hi(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Od(t),l}),a=await dn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function yv(t,e,n){return Ne(t.app)?Promise.reject(mt(t)):gv(Y(t),zn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Od(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _v(t,e){return lt(t,"POST","/v1/accounts:createAuthUri",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e){const n=dd()?Bi():"http://localhost",s={identifier:e,continueUri:n},{signinMethods:i}=await _v(Y(t),s);return i||[]}async function sP(t,e){const n=Y(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Dd(n.auth,i,e);const{email:r}=await ov(n.auth,i);r!==t.email&&await t.reload()}function vv(t,e,n,s){return Y(t).onIdTokenChanged(e,n,s)}function wv(t,e,n){return Y(t).beforeAuthStateChanged(e,n)}function bv(t,e,n,s){return Y(t).onAuthStateChanged(e,n,s)}function kc(t){return Y(t).signOut()}const $i="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($i,"1"),this.storage.removeItem($i),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=1e3,Tv=10;class Fd extends Ld{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);j_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Tv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Ev)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fd.type="LOCAL";const Cv=Fd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd extends Ld{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vd.type="SESSION";const jd=Vd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new yr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await xv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Fa("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function Sv(t){tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function kv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Av(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Pv(){return Bd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="firebaseLocalStorageDb",Rv=1,Gi="firebaseLocalStorage",Wd="fbase_key";class Ws{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _r(t,e){return t.transaction([Gi],e?"readwrite":"readonly").objectStore(Gi)}function Nv(){const t=indexedDB.deleteDatabase(Ud);return new Ws(t).toPromise()}function No(){const t=indexedDB.open(Ud,Rv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Gi,{keyPath:Wd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Gi)?e(s):(s.close(),await Nv(),e(await No()))})})}async function Ac(t,e,n){const s=_r(t,!0).put({[Wd]:e,value:n});return new Ws(s).toPromise()}async function Mv(t,e){const n=_r(t,!1).get(e),s=await new Ws(n).toPromise();return s===void 0?null:s.value}function Pc(t,e){const n=_r(t,!0).delete(e);return new Ws(n).toPromise()}const Dv=800,Ov=3;class Hd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await No(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Ov)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yr._getInstance(Pv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await kv(),!this.activeServiceWorker)return;this.sender=new Iv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Av()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await No();return await Ac(e,$i,"1"),await Pc(e,$i),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ac(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Mv(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=_r(i,!1).getAll();return new Ws(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hd.type="LOCAL";const Lv=Hd;new js(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t,e){return e?ft(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return An(e,this._buildIdpRequest())}_linkToIdToken(e,n){return An(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return An(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vv(t){return Md(t.auth,new Va(t),t.bypassAuthState)}function jv(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),mv(n,new Va(t),t.bypassAuthState)}async function Bv(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),pv(n,new Va(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vv;case"linkViaPopup":case"linkViaRedirect":return Bv;case"reauthViaPopup":case"reauthViaRedirect":return jv;default:$e(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=new js(2e3,1e4);class En extends zd{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=Fa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Uv.get())};e()}}En.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="pendingRedirect",Ci=new Map;class Hv extends zd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ci.get(this.auth._key());if(!e){try{const s=await zv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ci.set(this.auth._key(),e)}return this.bypassAuthState||Ci.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zv(t,e){const n=Kv(e),s=Gv(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function $v(t,e){Ci.set(t._key(),e)}function Gv(t){return ft(t._redirectPersistence)}function Kv(t){return Ti(Wv,t.config.apiKey,t.name)}async function qv(t,e,n=!1){if(Ne(t.app))return Promise.reject(mt(t));const s=$t(t),i=Fv(s,e),o=await new Hv(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=600*1e3;class Qv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!$d(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rc(e))}saveEventToCache(e){this.cachedEventUids.add(Rc(e)),this.lastProcessedEventTime=Date.now()}}function Rc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $d({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $d(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(t,e={}){return lt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ew=/^https?/;async function tw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jv(t);for(const n of e)try{if(nw(n))return}catch{}$e(t,"unauthorized-domain")}function nw(t){const e=Bi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ew.test(n))return!1;if(Zv.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new js(3e4,6e4);function Nc(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iw(t){return new Promise((e,n)=>{var i,r,o;function s(){Nc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nc(),n(et(t,"network-request-failed"))},timeout:sw.get()})}if((r=(i=tt().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=tt().gapi)!=null&&o.load)s();else{const a=q_("iframefcb");return tt()[a]=()=>{gapi.load?s():n(et(t,"network-request-failed"))},Sd(`${K_()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xi=null,e})}let xi=null;function rw(t){return xi=xi||iw(t),xi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=new js(5e3,15e3),aw="__/auth/iframe",lw="emulator/auth/iframe",cw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hw(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Na(e,lw):`https://${t.config.authDomain}/${aw}`,s={apiKey:e.apiKey,appName:t.name,v:Hn},i=uw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Wn(s).slice(1)}`}async function dw(t){const e=await rw(t),n=tt().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:hw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),a=tt().setTimeout(()=>{r(o)},ow.get());function l(){tt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pw=500,mw=600,gw="_blank",yw="http://localhost";class Mc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _w(t,e,n,s=pw,i=mw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l={...fw,width:s.toString(),height:i.toString(),top:r,left:o},c=we().toLowerCase();n&&(a=wd(c)?gw:n),_d(c)&&(e=e||yw,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(V_(c)&&a!=="_self")return vw(e||"",a),new Mc(null);const h=window.open(e||"",a,u);P(h,t,"popup-blocked");try{h.focus()}catch{}return new Mc(h)}function vw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="__/auth/handler",bw="emulator/auth/handler",Ew=encodeURIComponent("fac");async function Dc(t,e,n,s,i,r){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Hn,eventId:i};if(e instanceof Rd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Li(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Us){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Ew}=${encodeURIComponent(l)}`:"";return`${Tw(t)}?${Wn(a).slice(1)}${c}`}function Tw({config:t}){return t.emulator?Na(t,bw):`https://${t.authDomain}/${ww}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="webStorageSupport";class Cw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jd,this._completeRedirectFn=qv,this._overrideRedirectResult=$v}async _openPopup(e,n,s,i){var o;_t((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Dc(e,n,s,Bi(),i);return _w(e,r,Fa())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Dc(e,n,s,Bi(),i);return Sv(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(_t(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await dw(e),s=new Qv(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xr,{type:Xr},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Xr];r!==void 0&&n(!!r),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xd()||vd()||Da()}}const xw=Cw;var Oc="@firebase/auth",Lc="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kw(t){Nn(new gt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Id(t)},c=new z_(s,i,r,l);return ev(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Nn(new gt("auth-internal",e=>{const n=$t(e.getProvider("auth").getImmediate());return(s=>new Iw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(Oc,Lc,Sw(t)),Dt(Oc,Lc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=300,Pw=Jh("authIdTokenMaxAge")||Aw;let Fc=null;const Rw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Pw)return;const i=n==null?void 0:n.token;Fc!==i&&(Fc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Nw(t=od()){const e=Pa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Z_(t,{popupRedirectResolver:xw,persistence:[Lv,Cv,jd]}),s=Jh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Rw(r.toString());wv(n,o,()=>o(n.currentUser)),vv(n,a=>o(a))}}const i=Qh("auth");return i&&tv(n,`http://${i}`),n}function Mw(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}$_({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=et("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Mw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kw("Browser");var Dw="firebase",Ow="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(Dw,Ow,"app");var Vc={};const jc="@firebase/database",Bc="1.1.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gd="";function Kd(t){Gd=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Es(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ge(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Lw(e)}}catch{}return new Fw},tn=qd("localStorage"),Mo=qd("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new ka("@firebase/database"),Yd=(function(){let t=1;return function(){return t++}})(),Qd=function(t){const e=dy(t),n=new ly;n.update(e);const s=n.digest();return xa.encodeByteArray(s)},Hs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Hs.apply(null,s):typeof s=="object"?e+=re(s):e+=s,e+=" "}return e};let rn=null,Uc=!0;const Xd=function(t,e){w(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Pn.logLevel=W.VERBOSE,rn=Pn.log.bind(Pn),e&&Mo.set("logging_enabled",!0)):typeof t=="function"?rn=t:(rn=null,Mo.remove("logging_enabled"))},ce=function(...t){if(Uc===!0&&(Uc=!1,rn===null&&Mo.get("logging_enabled")===!0&&Xd(!0)),rn){const e=Hs.apply(null,t);rn(e)}},zs=function(t){return function(...e){ce(t,...e)}},Do=function(...t){const e="FIREBASE INTERNAL ERROR: "+Hs(...t);Pn.error(e)},it=function(...t){const e=`FIREBASE FATAL ERROR: ${Hs(...t)}`;throw Pn.error(e),new Error(e)},pe=function(...t){const e="FIREBASE WARNING: "+Hs(...t);Pn.warn(e)},Vw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},vr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},jw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ft="[MIN_NAME]",vt="[MAX_NAME]",gn=function(t,e){if(t===e)return 0;if(t===Ft||e===vt)return-1;if(e===Ft||t===vt)return 1;{const n=Wc(t),s=Wc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Bw=function(t,e){return t===e?0:t<e?-1:1},ns=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+re(e))},ja=function(t){if(typeof t!="object"||t===null)return re(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=re(e[s]),n+=":",n+=ja(t[e[s]]);return n+="}",n},Jd=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Zd=function(t){w(!vr(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Uw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ww=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Hw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const zw=new RegExp("^-?(0*)\\d{1,10}$"),$w=-2147483648,Gw=2147483647,Wc=function(t){if(zw.test(t)){const e=Number(t);if(e>=$w&&e<=Gw)return e}return null},$n=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw pe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Kw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ne(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){pe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pe(e)}}class Rn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="5",ef="v",tf="s",nf="r",sf="f",rf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,of="ls",af="p",Oo="ac",lf="websocket",cf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Qw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function hf(t,e,n){w(typeof e=="string","typeof type must == string"),w(typeof n=="object","typeof params must == object");let s;if(e===lf)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===cf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Qw(t)&&(n.ns=t.namespace);const i=[];return ue(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.counters_={}}incrementCounter(e,n=1){Ge(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Hg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={},Zr={};function Ua(t){const e=t.toString();return Jr[e]||(Jr[e]=new Xw),Jr[e]}function Jw(t,e){const n=t.toString();return Zr[n]||(Zr[n]=e()),Zr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&$n(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="start",eb="close",tb="pLPCommand",nb="pRTLPCB",df="id",ff="pw",pf="ser",sb="cb",ib="seg",rb="ts",ob="d",ab="dframe",mf=1870,gf=30,lb=mf-gf,cb=25e3,ub=3e4;class At{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zs(e),this.stats_=Ua(n),this.urlFn=l=>(this.appCheckToken&&(l[Oo]=this.appCheckToken),hf(n,cf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Zw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ub)),jw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wa((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hc)this.id=a,this.password=l;else if(o===eb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hc]="t",s[pf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[sb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[ef]=Ba,this.transportSessionId&&(s[tf]=this.transportSessionId),this.lastSessionId&&(s[of]=this.lastSessionId),this.applicationId&&(s[af]=this.applicationId),this.appCheckToken&&(s[Oo]=this.appCheckToken),typeof location<"u"&&location.hostname&&rf.test(location.hostname)&&(s[nf]=sf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){At.forceAllow_=!0}static forceDisallow(){At.forceDisallow_=!0}static isAvailable(){return At.forceAllow_?!0:!At.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Uw()&&!Ww()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qh(n),i=Jd(s,lb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[ab]="t",s[df]=e,s[ff]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wa{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Yd(),window[tb+this.uniqueCallbackIdentifier]=e,window[nb+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wa.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ce("frame writing exception"),a.stack&&ce(a.stack),ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ce("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[df]=this.myID,e[ff]=this.myPW,e[pf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gf+s.length<=mf;){const o=this.pendingSegs.shift();s=s+"&"+ib+i+"="+o.seg+"&"+rb+i+"="+o.ts+"&"+ob+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(cb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=16384,db=45e3;let Ki=null;typeof MozWebSocket<"u"?Ki=MozWebSocket:typeof WebSocket<"u"&&(Ki=WebSocket);class Me{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zs(this.connId),this.stats_=Ua(n),this.connURL=Me.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[ef]=Ba,typeof location<"u"&&location.hostname&&rf.test(location.hostname)&&(o[nf]=sf),n&&(o[tf]=n),s&&(o[of]=s),i&&(o[Oo]=i),r&&(o[af]=r),hf(e,lf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tn.set("previous_websocket_failure",!0);try{let s;ey(),this.mySock=new Ki(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ki!==null&&!Me.forceDisallow_}static previouslyFailed(){return tn.isInMemoryStorage||tn.get("previous_websocket_failure")===!0}markConnectionHealthy(){tn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Es(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Jd(n,hb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(db))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Me.responsesRequiredToBeHealthy=2;Me.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{static get ALL_TRANSPORTS(){return[At,Me]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Me&&Me.isAvailable();let s=n&&!Me.previouslyFailed();if(e.webSocketOnly&&(n||pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Me];else{const i=this.transports_=[];for(const r of Mn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Mn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=6e4,pb=5e3,mb=10*1024,gb=100*1024,eo="t",zc="d",yb="s",$c="r",_b="e",Gc="o",Kc="a",qc="n",Yc="p",vb="h";class wb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zs("c:"+this.id+":"),this.transportManager_=new Mn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(eo in e){const n=e[eo];n===Kc?this.upgradeIfSecondaryHealthy_():n===$c?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ns("t",e),s=ns("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ns("t",e),s=ns("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ns(eo,e);if(zc in e){const s=e[zc];if(n===vb){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===qc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yb?this.onConnectionShutdown_(s):n===$c?this.onReset_(s):n===_b?Do("Server Error: "+s):n===Gc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Do("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ba!==s&&pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),fs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){w(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends _f{static getInstance(){return new qi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Sa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return w(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=32,Xc=768;class B{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new B("")}function O(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vt(t){return t.pieces_.length-t.pieceNum_}function z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new B(t.pieces_,e)}function Ha(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Is(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function vf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new B(e,0)}function Q(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof B)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new B(n,0)}function L(t){return t.pieceNum_>=t.pieces_.length}function ye(t,e){const n=O(t),s=O(e);if(n===null)return e;if(n===s)return ye(z(t),z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Eb(t,e){const n=Is(t,0),s=Is(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=gn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function za(t,e){if(Vt(t)!==Vt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function De(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Vt(t)>Vt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Tb{constructor(e,n){this.errorPrefix_=n,this.parts_=Is(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=mr(this.parts_[s]);wf(this)}}function Cb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=mr(e),wf(t)}function xb(t){const e=t.parts_.pop();t.byteLength_-=mr(e),t.parts_.length>0&&(t.byteLength_-=1)}function wf(t){if(t.byteLength_>Xc)throw new Error(t.errorPrefix_+"has a key path longer than "+Xc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Qc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qc+") or object contains a cycle "+Zt(t))}function Zt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends _f{static getInstance(){return new $a}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return w(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=1e3,Ib=300*1e3,Jc=30*1e3,Sb=1.3,kb=3e4,Ab="server_kill",Zc=3;class Le extends yf{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Le.nextPersistentConnectionId_++,this.log_=zs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ss,this.maxReconnectDelay_=Ib,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$a.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(re(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new xe,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Le.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ge(e,"w")){const s=ln(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ay(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=oy(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Do("Unrecognized action received from server: "+re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kb&&(this.reconnectDelay_=ss),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Sb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Le.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){w(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ce("getToken() completed but was canceled"):(ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new wb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{pe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ab)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&pe(h),l())}}}interrupt(e){ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Li(this.interruptReasons_)&&(this.reconnectDelay_=ss,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ja(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new B(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zc&&(this.reconnectDelay_=Jc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Gd.replace(/\./g,"-")]=1,Sa()?e["framework.cordova"]=1:Zh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qi.getInstance().currentlyOnline();return Li(this.interruptReasons_)&&e}}Le.nextPersistentConnectionId_=0;Le.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new F(Ft,e),i=new F(Ft,n);return this.compare(s,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;class bf extends wr{static get __EMPTY_NODE(){return ci}static set __EMPTY_NODE(e){ci=e}compare(e,n){return gn(e.name,n.name)}isDefinedOn(e){throw Un("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(vt,ci)}makePost(e,n){return w(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,ci)}toString(){return".key"}}const nt=new bf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class le{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??le.RED,this.left=i??Ee.EMPTY_NODE,this.right=r??Ee.EMPTY_NODE}copy(e,n,s,i,r){return new le(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ee.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ee.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}le.RED=!0;le.BLACK=!1;class Pb{copy(e,n,s,i,r){return this}insert(e,n,s){return new le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ee{constructor(e,n=Ee.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ee(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,le.BLACK,null,null))}remove(e){return new Ee(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,le.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ui(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ui(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ui(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ui(this.root_,null,this.comparator_,!0,e)}}Ee.EMPTY_NODE=new Pb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t,e){return gn(t.name,e.name)}function Ga(t,e){return gn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo;function Nb(t){Lo=t}const Ef=function(t){return typeof t=="number"?"number:"+Zd(t):"string:"+t},Tf=function(t){if(t.isLeafNode()){const e=t.val();w(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ge(e,".sv"),"Priority must be a string or number.")}else w(t===Lo||t.isEmpty(),"priority of unexpected type.");w(t===Lo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;class ae{static set __childrenNodeConstructor(e){eu=e}static get __childrenNodeConstructor(){return eu}constructor(e,n=ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,w(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Tf(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return L(e)?this:O(e)===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=O(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(w(s!==".priority"||Vt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ef(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Zd(this.value_):e+=this.value_,this.lazyHash_=Qd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ae.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ae.VALUE_TYPE_ORDER.indexOf(n),r=ae.VALUE_TYPE_ORDER.indexOf(s);return w(i>=0,"Unknown leaf type: "+n),w(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cf,xf;function Mb(t){Cf=t}function Db(t){xf=t}class Ob extends wr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?gn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(vt,new ae("[PRIORITY-POST]",xf))}makePost(e,n){const s=Cf(e);return new F(n,new ae("[PRIORITY-POST]",s))}toString(){return".priority"}}const K=new Ob;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=Math.log(2);class Fb{constructor(e){const n=r=>parseInt(Math.log(r)/Lb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yi=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new le(d,h.node,le.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),y=i(f+1,c);return h=t[f],d=n?n(h):h,new le(d,h.node,le.BLACK,m,y)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,y){const g=h-m,_=h;h-=m;const b=i(g+1,_),T=t[g],C=n?n(T):T;f(new le(C,T.node,y,null,b))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),g=Math.pow(2,l.count-(m+1));y?d(g,le.BLACK):(d(g,le.BLACK),d(g,le.RED))}return u},o=new Fb(t.length),a=r(o);return new Ee(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;const vn={};class pt{static get Default(){return w(vn&&K,"ChildrenNode.ts has not been loaded"),to=to||new pt({".priority":vn},{".priority":K}),to}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ln(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ee?n:null}hasIndex(e){return Ge(this.indexSet_,e.toString())}addIndex(e,n){w(e!==nt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(F.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Yi(s,e.getCompare()):a=vn;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new pt(u,c)}addToIndexes(e,n){const s=Fi(this.indexes_,(i,r)=>{const o=ln(this.indexSet_,r);if(w(o,"Missing index implementation for "+r),i===vn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(F.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Yi(a,o.getCompare())}else return vn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new pt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Fi(this.indexes_,i=>{if(i===vn)return i;{const r=n.get(e.name);return r?i.remove(new F(e.name,r)):i}});return new pt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let is;class N{static get EMPTY_NODE(){return is||(is=new N(new Ee(Ga),null,pt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Tf(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||is}updatePriority(e){return this.children_.isEmpty()?this:new N(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?is:n}}getChild(e){const n=O(e);return n===null?this:this.getImmediateChild(n).getChild(z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(w(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new F(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?is:this.priorityNode_;return new N(i,o,r)}}updateChild(e,n){const s=O(e);if(s===null)return n;{w(O(e)!==".priority"||Vt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(z(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(K,(o,a)=>{n[o]=a.val(e),s++,r&&N.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ef(this.getPriority().val())+":"),this.forEachChild(K,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Qd(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new F(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===$s?-1:0}withIndex(e){if(e===nt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new N(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===nt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(K),i=n.getIterator(K);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===nt?null:this.indexMap_.get(e.toString())}}N.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Vb extends N{constructor(){super(new Ee(Ga),N.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return N.EMPTY_NODE}isEmpty(){return!1}}const $s=new Vb;Object.defineProperties(F,{MIN:{value:new F(Ft,N.EMPTY_NODE)},MAX:{value:new F(vt,$s)}});bf.__EMPTY_NODE=N.EMPTY_NODE;ae.__childrenNodeConstructor=N;Nb($s);Db($s);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=!0;function X(t,e=null){if(t===null)return N.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),w(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ae(n,X(e))}if(!(t instanceof Array)&&jb){const n=[];let s=!1;if(ue(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=X(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new F(o,l)))}}),n.length===0)return N.EMPTY_NODE;const r=Yi(n,Rb,o=>o.name,Ga);if(s){const o=Yi(n,K.getCompare());return new N(r,X(e),new pt({".priority":o},{".priority":K}))}else return new N(r,X(e),pt.Default)}else{let n=N.EMPTY_NODE;return ue(t,(s,i)=>{if(Ge(t,s)&&s.substring(0,1)!=="."){const r=X(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(X(e))}}Mb(X);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka extends wr{constructor(e){super(),this.indexPath_=e,w(!L(e)&&O(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?gn(e.name,n.name):r}makePost(e,n){const s=X(e),i=N.EMPTY_NODE.updateChild(this.indexPath_,s);return new F(n,i)}maxPost(){const e=N.EMPTY_NODE.updateChild(this.indexPath_,$s);return new F(vt,e)}toString(){return Is(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb extends wr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?gn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const s=X(e);return new F(n,s)}toString(){return".value"}}const qa=new Bb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(t){return{type:"value",snapshotNode:t}}function Dn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ss(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ks(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ub(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ss(n,a)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Dn(n,s)):o.trackChildChange(ks(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(K,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ss(i,r))}),n.isLeafNode()||n.forEachChild(K,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ks(i,r,o))}else s.trackChildChange(Dn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?N.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.indexedFilter_=new Ya(e.getIndex()),this.index_=e.getIndex(),this.startPost_=As.getStartPost_(e),this.endPost_=As.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new F(n,s))||(s=N.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=N.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(N.EMPTY_NODE);const r=this;return n.forEachChild(K,(o,a)=>{r.matches(new F(o,a))||(i=i.updateImmediateChild(o,N.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new As(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new F(n,s))||(s=N.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=N.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=N.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(N.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,N.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;w(a.numChildren()===this.limit_,"");const l=new F(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(ks(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ss(n,h));const y=a.updateImmediateChild(n,N.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Dn(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ss(c.name,c.node)),r.trackChildChange(Dn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,N.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=K}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ft}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===K}copy(){const e=new Qa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Hb(t){return t.loadsAllData()?new Ya(t.getIndex()):t.hasLimit()?new Wb(t):new As(t)}function zb(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function $b(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Fo(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function Gb(t,e,n){let s;return t.index_===nt||n?s=Fo(t,e,n):s=Fo(t,e,vt),s.startAfterSet_=!0,s}function Vo(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function Kb(t,e,n){let s;return t.index_===nt||n?s=Vo(t,e,n):s=Vo(t,e,Ft),s.endBeforeSet_=!0,s}function br(t,e){const n=t.copy();return n.index_=e,n}function tu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===K?n="$priority":t.index_===qa?n="$value":t.index_===nt?n="$key":(w(t.index_ instanceof Ka,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=re(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=re(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+re(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=re(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function nu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==K&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends yf{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=zs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qi.getListenId_(e,s),a={};this.listens_[o]=a;const l=tu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ln(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Qi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=tu(e._queryParams),s=e._path.toString(),i=new xe;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Es(a.responseText)}catch{pe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&pe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.rootNode_=N.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(){return{value:null,children:new Map}}function Gn(t,e,n){if(L(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=O(e);t.children.has(s)||t.children.set(s,Xi());const i=t.children.get(s);e=z(e),Gn(i,e,n)}}function jo(t,e){if(L(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(K,(s,i)=>{Gn(t,new B(s),i)}),jo(t,e)}}else if(t.children.size>0){const n=O(e);return e=z(e),t.children.has(n)&&jo(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Bo(t,e,n){t.value!==null?n(e,t.value):Yb(t,(s,i)=>{const r=new B(e.toString()+"/"+s);Bo(i,r,n)})}function Yb(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&ue(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=10*1e3,Xb=30*1e3,Jb=300*1e3;class Zb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Qb(e);const s=su+(Xb-su)*Math.random();fs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ue(e,(i,r)=>{r>0&&Ge(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),fs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Jb))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(We||(We={}));function Xa(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ja(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Za(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=We.ACK_USER_WRITE,this.source=Xa()}operationForChild(e){if(L(this.path)){if(this.affectedTree.value!=null)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new B(e));return new Ji(j(),n,this.revert)}}else return w(O(this.path)===e,"operationForChild called for unrelated child."),new Ji(z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.source=e,this.path=n,this.type=We.LISTEN_COMPLETE}operationForChild(e){return L(this.path)?new Ps(this.source,j()):new Ps(this.source,z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=We.OVERWRITE}operationForChild(e){return L(this.path)?new fn(this.source,j(),this.snap.getImmediateChild(e)):new fn(this.source,z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=We.MERGE}operationForChild(e){if(L(this.path)){const n=this.children.subtree(new B(e));return n.isEmpty()?null:n.value?new fn(this.source,j(),n.value):new On(this.source,j(),n)}else return w(O(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new On(this.source,z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(L(e))return this.isFullyInitialized()&&!this.filtered_;const n=O(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tE(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ub(o.childName,o.snapshotNode))}),rs(t,i,"child_removed",e,s,n),rs(t,i,"child_added",e,s,n),rs(t,i,"child_moved",r,s,n),rs(t,i,"child_changed",e,s,n),rs(t,i,"value",e,s,n),i}function rs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>sE(t,a,l)),o.forEach(a=>{const l=nE(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function nE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function sE(t,e,n){if(e.childName==null||n.childName==null)throw Un("Should only compare child_ events.");const s=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(t,e){return{eventCache:t,serverCache:e}}function ps(t,e,n,s){return Er(new jt(e,n,s),t.serverCache)}function Sf(t,e,n,s){return Er(t.eventCache,new jt(e,n,s))}function Zi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function pn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;const iE=()=>(no||(no=new Ee(Bw)),no);class G{static fromObject(e){let n=new G(null);return ue(e,(s,i)=>{n=n.set(new B(s),i)}),n}constructor(e,n=iE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(L(e))return null;{const s=O(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(z(e),n);return r!=null?{path:Q(new B(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(L(e))return this;{const n=O(e),s=this.children.get(n);return s!==null?s.subtree(z(e)):new G(null)}}set(e,n){if(L(e))return new G(n,this.children);{const s=O(e),r=(this.children.get(s)||new G(null)).set(z(e),n),o=this.children.insert(s,r);return new G(this.value,o)}}remove(e){if(L(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=O(e),s=this.children.get(n);if(s){const i=s.remove(z(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new G(null):new G(this.value,r)}else return this}}get(e){if(L(e))return this.value;{const n=O(e),s=this.children.get(n);return s?s.get(z(e)):null}}setTree(e,n){if(L(e))return n;{const s=O(e),r=(this.children.get(s)||new G(null)).setTree(z(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new G(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Q(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(L(e))return null;{const r=O(e),o=this.children.get(r);return o?o.findOnPath_(z(e),Q(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,s){if(L(e))return this;{this.value&&s(n,this.value);const i=O(e),r=this.children.get(i);return r?r.foreachOnPath_(z(e),Q(n,i),s):new G(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Q(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.writeTree_=e}static empty(){return new He(new G(null))}}function ms(t,e,n){if(L(e))return new He(new G(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ye(i,e);return r=r.updateChild(o,n),new He(t.writeTree_.set(i,r))}else{const i=new G(n),r=t.writeTree_.setTree(e,i);return new He(r)}}}function Uo(t,e,n){let s=t;return ue(n,(i,r)=>{s=ms(s,Q(e,i),r)}),s}function iu(t,e){if(L(e))return He.empty();{const n=t.writeTree_.setTree(e,new G(null));return new He(n)}}function Wo(t,e){return yn(t,e)!=null}function yn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ye(n.path,e)):null}function ru(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(K,(s,i)=>{e.push(new F(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new F(s,i.value))}),e}function Ot(t,e){if(L(e))return t;{const n=yn(t,e);return n!=null?new He(new G(n)):new He(t.writeTree_.subtree(e))}}function Ho(t){return t.writeTree_.isEmpty()}function Ln(t,e){return kf(j(),t.writeTree_,e)}function kf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(w(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=kf(Q(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Q(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){return Nf(e,t)}function rE(t,e,n,s,i){w(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ms(t.visibleWrites,e,n)),t.lastWriteId=s}function oE(t,e,n,s){w(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Uo(t.visibleWrites,e,n),t.lastWriteId=s}function aE(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function lE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);w(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&cE(a,s.path)?i=!1:De(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return uE(t),!0;if(s.snap)t.visibleWrites=iu(t.visibleWrites,s.path);else{const a=s.children;ue(a,l=>{t.visibleWrites=iu(t.visibleWrites,Q(s.path,l))})}return!0}else return!1}function cE(t,e){if(t.snap)return De(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&De(Q(t.path,n),e))return!0;return!1}function uE(t){t.visibleWrites=Af(t.allWrites,hE,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function hE(t){return t.visible}function Af(t,e,n){let s=He.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)De(n,o)?(a=ye(n,o),s=ms(s,a,r.snap)):De(o,n)&&(a=ye(o,n),s=ms(s,j(),r.snap.getChild(a)));else if(r.children){if(De(n,o))a=ye(n,o),s=Uo(s,a,r.children);else if(De(o,n))if(a=ye(o,n),L(a))s=Uo(s,j(),r.children);else{const l=ln(r.children,O(a));if(l){const c=l.getChild(z(a));s=ms(s,j(),c)}}}else throw Un("WriteRecord should have .snap or .children")}}return s}function Pf(t,e,n,s,i){if(!s&&!i){const r=yn(t.visibleWrites,e);if(r!=null)return r;{const o=Ot(t.visibleWrites,e);if(Ho(o))return n;if(n==null&&!Wo(o,j()))return null;{const a=n||N.EMPTY_NODE;return Ln(o,a)}}}else{const r=Ot(t.visibleWrites,e);if(!i&&Ho(r))return n;if(!i&&n==null&&!Wo(r,j()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(De(c.path,e)||De(e,c.path))},a=Af(t.allWrites,o,e),l=n||N.EMPTY_NODE;return Ln(a,l)}}}function dE(t,e,n){let s=N.EMPTY_NODE;const i=yn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(K,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ot(t.visibleWrites,e);return n.forEachChild(K,(o,a)=>{const l=Ln(Ot(r,new B(o)),a);s=s.updateImmediateChild(o,l)}),ru(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ot(t.visibleWrites,e);return ru(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function fE(t,e,n,s,i){w(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Q(e,n);if(Wo(t.visibleWrites,r))return null;{const o=Ot(t.visibleWrites,r);return Ho(o)?i.getChild(n):Ln(o,i.getChild(n))}}function pE(t,e,n,s){const i=Q(e,n),r=yn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ot(t.visibleWrites,i);return Ln(o,s.getNode().getImmediateChild(n))}else return null}function mE(t,e){return yn(t.visibleWrites,e)}function gE(t,e,n,s,i,r,o){let a;const l=Ot(t.visibleWrites,e),c=yn(l,j());if(c!=null)a=c;else if(n!=null)a=Ln(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function yE(){return{visibleWrites:He.empty(),allWrites:[],lastWriteId:-1}}function er(t,e,n,s){return Pf(t.writeTree,t.treePath,e,n,s)}function el(t,e){return dE(t.writeTree,t.treePath,e)}function ou(t,e,n,s){return fE(t.writeTree,t.treePath,e,n,s)}function tr(t,e){return mE(t.writeTree,Q(t.treePath,e))}function _E(t,e,n,s,i,r){return gE(t.writeTree,t.treePath,e,n,s,i,r)}function tl(t,e,n){return pE(t.writeTree,t.treePath,e,n)}function Rf(t,e){return Nf(Q(t.treePath,e),t.writeTree)}function Nf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;w(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),w(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ks(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ss(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Dn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ks(s,e.snapshotNode,i.oldSnap));else throw Un("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Mf=new wE;class nl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new jt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return tl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pn(this.viewCache_),r=_E(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t){return{filter:t}}function EE(t,e){w(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),w(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function TE(t,e,n,s,i){const r=new vE;let o,a;if(n.type===We.OVERWRITE){const c=n;c.source.fromUser?o=zo(t,e,c.path,c.snap,s,i,r):(w(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!L(c.path),o=nr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===We.MERGE){const c=n;c.source.fromUser?o=xE(t,e,c.path,c.children,s,i,r):(w(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=$o(t,e,c.path,c.children,s,i,a,r))}else if(n.type===We.ACK_USER_WRITE){const c=n;c.revert?o=kE(t,e,c.path,s,i,r):o=IE(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===We.LISTEN_COMPLETE)o=SE(t,e,n.path,s,r);else throw Un("Unknown operation type: "+n.type);const l=r.getChanges();return CE(e,o,l),{viewCache:o,changes:l}}function CE(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Zi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(If(Zi(e)))}}function Df(t,e,n,s,i,r){const o=e.eventCache;if(tr(s,n)!=null)return e;{let a,l;if(L(n))if(w(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pn(e),u=c instanceof N?c:N.EMPTY_NODE,h=el(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=er(s,pn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=O(n);if(c===".priority"){w(Vt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=ou(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=z(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=ou(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=tl(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ps(e,a,o.isFullyInitialized()||L(n),t.filter.filtersNodes())}}function nr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(L(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=O(n);if(!l.isCompleteForPath(n)&&Vt(n)>1)return e;const m=z(n),g=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),g):c=u.updateChild(l.getNode(),f,g,m,Mf,null)}const h=Sf(e,c,l.isFullyInitialized()||L(n),u.filtersNodes()),d=new nl(i,h,r);return Df(t,h,n,i,d,a)}function zo(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new nl(i,e,r);if(L(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ps(e,c,!0,t.filter.filtersNodes());else{const h=O(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ps(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=z(n),f=a.getNode().getImmediateChild(h);let m;if(L(d))m=s;else{const y=u.getCompleteChild(h);y!=null?Ha(d)===".priority"&&y.getChild(vf(d)).isEmpty()?m=y:m=y.updateChild(d,s):m=N.EMPTY_NODE}if(f.equals(m))l=e;else{const y=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=ps(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function au(t,e){return t.eventCache.isCompleteForChild(e)}function xE(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Q(n,l);au(e,O(u))&&(a=zo(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Q(n,l);au(e,O(u))||(a=zo(t,a,u,c,i,r,o))}),a}function lu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function $o(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;L(n)?c=s:c=new G(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=lu(t,f,d);l=nr(t,l,new B(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),y=lu(t,m,d);l=nr(t,l,new B(h),y,i,r,o,a)}}),l}function IE(t,e,n,s,i,r,o){if(tr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(L(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return nr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(L(n)){let c=new G(null);return l.getNode().forEachChild(nt,(u,h)=>{c=c.set(new B(u),h)}),$o(t,e,n,c,i,r,a,o)}else return e}else{let c=new G(null);return s.foreach((u,h)=>{const d=Q(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),$o(t,e,n,c,i,r,a,o)}}function SE(t,e,n,s,i){const r=e.serverCache,o=Sf(e,r.getNode(),r.isFullyInitialized()||L(n),r.isFiltered());return Df(t,o,n,s,Mf,i)}function kE(t,e,n,s,i,r){let o;if(tr(s,n)!=null)return e;{const a=new nl(s,e,i),l=e.eventCache.getNode();let c;if(L(n)||O(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=er(s,pn(e));else{const h=e.serverCache.getNode();w(h instanceof N,"serverChildren would be complete if leaf node"),u=el(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=O(n);let h=tl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,z(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,N.EMPTY_NODE,z(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=er(s,pn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||tr(s,j())!=null,ps(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ya(s.getIndex()),r=Hb(s);this.processor_=bE(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(N.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(N.EMPTY_NODE,a.getNode(),null),u=new jt(l,o.isFullyInitialized(),i.filtersNodes()),h=new jt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Er(h,u),this.eventGenerator_=new eE(this.query_)}get query(){return this.query_}}function PE(t){return t.viewCache_.serverCache.getNode()}function RE(t){return Zi(t.viewCache_)}function NE(t,e){const n=pn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!L(e)&&!n.getImmediateChild(O(e)).isEmpty())?n.getChild(e):null}function cu(t){return t.eventRegistrations_.length===0}function ME(t,e){t.eventRegistrations_.push(e)}function uu(t,e,n){const s=[];if(n){w(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function hu(t,e,n,s){e.type===We.MERGE&&e.source.queryId!==null&&(w(pn(t.viewCache_),"We should always have a full cache before handling merges"),w(Zi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=TE(t.processor_,i,e,n,s);return EE(t.processor_,r.viewCache),w(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Of(t,r.changes,r.viewCache.eventCache.getNode(),null)}function DE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(K,(r,o)=>{s.push(Dn(r,o))}),n.isFullyInitialized()&&s.push(If(n.getNode())),Of(t,s,n.getNode(),e)}function Of(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return tE(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr;class Lf{constructor(){this.views=new Map}}function OE(t){w(!sr,"__referenceConstructor has already been defined"),sr=t}function LE(){return w(sr,"Reference.ts has not been loaded"),sr}function FE(t){return t.views.size===0}function sl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return w(r!=null,"SyncTree gave us an op for an invalid query."),hu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(hu(o,e,n,s));return r}}function Ff(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=er(n,i?s:null),l=!1;a?l=!0:s instanceof N?(a=el(n,s),l=!1):(a=N.EMPTY_NODE,l=!1);const c=Er(new jt(a,l,!1),new jt(s,i,!1));return new AE(e,c)}return o}function VE(t,e,n,s,i,r){const o=Ff(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ME(o,n),DE(o,n)}function jE(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Bt(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(uu(c,n,s)),cu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(uu(l,n,s)),cu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Bt(t)&&r.push(new(LE())(e._repo,e._path)),{removed:r,events:o}}function Vf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Lt(t,e){let n=null;for(const s of t.views.values())n=n||NE(s,e);return n}function jf(t,e){if(e._queryParams.loadsAllData())return Cr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Bf(t,e){return jf(t,e)!=null}function Bt(t){return Cr(t)!=null}function Cr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir;function BE(t){w(!ir,"__referenceConstructor has already been defined"),ir=t}function UE(){return w(ir,"Reference.ts has not been loaded"),ir}let WE=1;class du{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=yE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function il(t,e,n,s,i){return rE(t.pendingWriteTree_,e,n,s,i),i?Kn(t,new fn(Xa(),e,n)):[]}function HE(t,e,n,s){oE(t.pendingWriteTree_,e,n,s);const i=G.fromObject(n);return Kn(t,new On(Xa(),e,i))}function Pt(t,e,n=!1){const s=aE(t.pendingWriteTree_,e);if(lE(t.pendingWriteTree_,e)){let r=new G(null);return s.snap!=null?r=r.set(j(),!0):ue(s.children,o=>{r=r.set(new B(o),!0)}),Kn(t,new Ji(s.path,r,n))}else return[]}function Gs(t,e,n){return Kn(t,new fn(Ja(),e,n))}function zE(t,e,n){const s=G.fromObject(n);return Kn(t,new On(Ja(),e,s))}function $E(t,e){return Kn(t,new Ps(Ja(),e))}function GE(t,e,n){const s=rl(t,n);if(s){const i=ol(s),r=i.path,o=i.queryId,a=ye(r,e),l=new Ps(Za(o),a);return al(t,r,l)}else return[]}function rr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Bf(o,e))){const l=jE(o,e,n,s);FE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,f)=>Bt(f));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=YE(d);for(let m=0;m<f.length;++m){const y=f[m],g=y.query,_=zf(t,y);t.listenProvider_.startListening(gs(g),Rs(t,g),_.hashFn,_.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(gs(e),null):c.forEach(d=>{const f=t.queryToTagMap.get(Ir(d));t.listenProvider_.stopListening(gs(d),f)}))}QE(t,c)}return a}function Uf(t,e,n,s){const i=rl(t,s);if(i!=null){const r=ol(i),o=r.path,a=r.queryId,l=ye(o,e),c=new fn(Za(a),l,n);return al(t,o,c)}else return[]}function KE(t,e,n,s){const i=rl(t,s);if(i){const r=ol(i),o=r.path,a=r.queryId,l=ye(o,e),c=G.fromObject(n),u=new On(Za(a),l,c);return al(t,o,u)}else return[]}function Go(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const m=ye(d,i);r=r||Lt(f,m),o=o||Bt(f)});let a=t.syncPointTree_.get(i);a?(o=o||Bt(a),r=r||Lt(a,j())):(a=new Lf,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=N.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,m)=>{const y=Lt(m,j());y&&(r=r.updateImmediateChild(f,y))}));const c=Bf(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ir(e);w(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=XE();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const u=Tr(t.pendingWriteTree_,i);let h=VE(a,e,n,u,r,l);if(!c&&!o&&!s){const d=jf(a,e);h=h.concat(JE(t,e,d))}return h}function xr(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ye(o,e),c=Lt(a,l);if(c)return c});return Pf(i,e,r,n,!0)}function qE(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=ye(c,n);s=s||Lt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Lt(i,j()):(i=new Lf,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new jt(s,!0,!1):null,a=Tr(t.pendingWriteTree_,e._path),l=Ff(i,e,a,r?o.getNode():N.EMPTY_NODE,r);return RE(l)}function Kn(t,e){return Wf(e,t.syncPointTree_,null,Tr(t.pendingWriteTree_,j()))}function Wf(t,e,n,s){if(L(t.path))return Hf(t,e,n,s);{const i=e.get(j());n==null&&i!=null&&(n=Lt(i,j()));let r=[];const o=O(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Rf(s,o);r=r.concat(Wf(a,l,c,u))}return i&&(r=r.concat(sl(i,t,s,n))),r}}function Hf(t,e,n,s){const i=e.get(j());n==null&&i!=null&&(n=Lt(i,j()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Rf(s,o),u=t.operationForChild(o);u&&(r=r.concat(Hf(u,a,l,c)))}),i&&(r=r.concat(sl(i,t,s,n))),r}function zf(t,e){const n=e.query,s=Rs(t,n);return{hashFn:()=>(PE(e)||N.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?GE(t,n._path,s):$E(t,n._path);{const r=Hw(i,n);return rr(t,n,null,r)}}}}function Rs(t,e){const n=Ir(e);return t.queryToTagMap.get(n)}function Ir(t){return t._path.toString()+"$"+t._queryIdentifier}function rl(t,e){return t.tagToQueryMap.get(e)}function ol(t){const e=t.indexOf("$");return w(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new B(t.substr(0,e))}}function al(t,e,n){const s=t.syncPointTree_.get(e);w(s,"Missing sync point for query tag that we're tracking");const i=Tr(t.pendingWriteTree_,e);return sl(s,n,i,null)}function YE(t){return t.fold((e,n,s)=>{if(n&&Bt(n))return[Cr(n)];{let i=[];return n&&(i=Vf(n)),ue(s,(r,o)=>{i=i.concat(o)}),i}})}function gs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(UE())(t._repo,t._path):t}function QE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ir(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function XE(){return WE++}function JE(t,e,n){const s=e._path,i=Rs(t,e),r=zf(t,n),o=t.listenProvider_.startListening(gs(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)w(!Bt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!L(c)&&u&&Bt(u))return[Cr(u).query];{let d=[];return u&&(d=d.concat(Vf(u).map(f=>f.query))),ue(h,(f,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(gs(u),Rs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ll(n)}node(){return this.node_}}class cl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Q(this.path_,e);return new cl(this.syncTree_,n)}node(){return xr(this.syncTree_,this.path_)}}const ZE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},fu=function(t,e,n){if(!t||typeof t!="object")return t;if(w(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return eT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return tT(t[".sv"],e);w(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},eT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:w(!1,"Unexpected server value: "+t)}},tT=function(t,e,n){t.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&w(!1,"Unexpected increment value: "+s);const i=e.node();if(w(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},$f=function(t,e,n,s){return hl(e,new cl(n,t),s)},ul=function(t,e,n){return hl(t,new ll(e),n)};function hl(t,e,n){const s=t.getPriority().val(),i=fu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=fu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ae(a,X(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ae(i))),o.forEachChild(K,(a,l)=>{const c=hl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Sr(t,e){let n=e instanceof B?e:new B(e),s=t,i=O(n);for(;i!==null;){const r=ln(s.node.children,i)||{children:{},childCount:0};s=new dl(i,s,r),n=z(n),i=O(n)}return s}function _n(t){return t.node.value}function fl(t,e){t.node.value=e,Ko(t)}function Gf(t){return t.node.childCount>0}function nT(t){return _n(t)===void 0&&!Gf(t)}function kr(t,e){ue(t.node.children,(n,s)=>{e(new dl(n,t,s))})}function Kf(t,e,n,s){n&&e(t),kr(t,i=>{Kf(i,e,!0)})}function sT(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ks(t){return new B(t.parent===null?t.name:Ks(t.parent)+"/"+t.name)}function Ko(t){t.parent!==null&&iT(t.parent,t.name,t)}function iT(t,e,n){const s=nT(n),i=Ge(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ko(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ko(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=/[\[\].#$\/\u0000-\u001F\u007F]/,oT=/[\[\].#$\u0000-\u001F\u007F]/,so=10*1024*1024,Ar=function(t){return typeof t=="string"&&t.length!==0&&!rT.test(t)},qf=function(t){return typeof t=="string"&&t.length!==0&&!oT.test(t)},aT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qf(t)},Ns=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!vr(t)||t&&typeof t=="object"&&Ge(t,".sv")},rt=function(t,e,n,s){s&&e===void 0||qs(un(t,"value"),e,n)},qs=function(t,e,n){const s=n instanceof B?new Tb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Zt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Zt(s)+" with contents = "+e.toString());if(vr(e))throw new Error(t+"contains "+e.toString()+" "+Zt(s));if(typeof e=="string"&&e.length>so/3&&mr(e)>so)throw new Error(t+"contains a string greater than "+so+" utf8 bytes "+Zt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ue(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ar(o)))throw new Error(t+" contains an invalid key ("+o+") "+Zt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Cb(s,o),qs(t,a,s),xb(s)}),i&&r)throw new Error(t+' contains ".value" child '+Zt(s)+" in addition to actual children.")}},lT=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Is(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ar(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Eb);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&De(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Yf=function(t,e,n,s){const i=un(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];ue(e,(o,a)=>{const l=new B(o);if(qs(i,a,Q(n,l)),Ha(l)===".priority"&&!Ns(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),lT(i,r)},pl=function(t,e,n){if(vr(e))throw new Error(un(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ns(e))throw new Error(un(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Ys=function(t,e,n,s){if(n!==void 0&&!Ar(n))throw new Error(un(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},ml=function(t,e,n,s){if(!(s&&n===void 0)&&!qf(n))throw new Error(un(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},cT=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ml(t,e,n,s)},Ze=function(t,e){if(O(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Qf=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ar(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!aT(n))throw new Error(un(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Pr(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!za(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Xf(t,e,n){Pr(t,n),Jf(t,s=>za(s,e))}function Se(t,e,n){Pr(t,n),Jf(t,s=>De(s,e)||De(e,s))}function Jf(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(hT(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function hT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();rn&&ce("event: "+n.toString()),$n(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="repo_interrupt",dT=25;class fT{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xi(),this.transactionQueueTree_=new dl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pT(t,e,n){if(t.stats_=Ua(t.repoInfo_),t.forceRestClient_||Kw())t.server_=new Qi(t.repoInfo_,(s,i,r,o)=>{pu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>mu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Le(t.repoInfo_,e,(s,i,r,o)=>{pu(t,s,i,r,o)},s=>{mu(t,s)},s=>{mT(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Jw(t.repoInfo_,()=>new Zb(t.stats_,t.server_)),t.infoData_=new qb,t.infoSyncTree_=new du({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Gs(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),gl(t,"connected",!1),t.serverSyncTree_=new du({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Se(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ep(t){const n=t.infoData_.getNode(new B(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Qs(t){return ZE({timestamp:ep(t)})}function pu(t,e,n,s,i){t.dataUpdateCount++;const r=new B(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Fi(n,c=>X(c));o=KE(t.serverSyncTree_,r,l,i)}else{const l=X(n);o=Uf(t.serverSyncTree_,r,l,i)}else if(s){const l=Fi(n,c=>X(c));o=zE(t.serverSyncTree_,r,l)}else{const l=X(n);o=Gs(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Fn(t,r)),Se(t.eventQueue_,a,o)}function mu(t,e){gl(t,"connected",e),e===!1&&_T(t)}function mT(t,e){ue(e,(n,s)=>{gl(t,n,s)})}function gl(t,e,n){const s=new B("/.info/"+e),i=X(n);t.infoData_.updateSnapshot(s,i);const r=Gs(t.infoSyncTree_,s,i);Se(t.eventQueue_,s,r)}function Rr(t){return t.nextWriteId_++}function gT(t,e,n){const s=qE(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=X(i).withIndex(e._queryParams.getIndex());Go(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Gs(t.serverSyncTree_,e._path,r);else{const a=Rs(t.serverSyncTree_,e);o=Uf(t.serverSyncTree_,e._path,r,a)}return Se(t.eventQueue_,e._path,o),rr(t.serverSyncTree_,e,n,null,!0),r},i=>(qn(t,"get for query "+re(e)+" failed: "+i),Promise.reject(new Error(i))))}function yl(t,e,n,s,i){qn(t,"set",{path:e.toString(),value:n,priority:s});const r=Qs(t),o=X(n,s),a=xr(t.serverSyncTree_,e),l=ul(o,a,r),c=Rr(t),u=il(t.serverSyncTree_,e,l,c,!0);Pr(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,f)=>{const m=d==="ok";m||pe("set at "+e+" failed: "+d);const y=Pt(t.serverSyncTree_,c,!m);Se(t.eventQueue_,e,y),Ut(t,i,d,f)});const h=vl(t,e);Fn(t,h),Se(t.eventQueue_,h,[])}function yT(t,e,n,s){qn(t,"update",{path:e.toString(),value:n});let i=!0;const r=Qs(t),o={};if(ue(n,(a,l)=>{i=!1,o[a]=$f(Q(e,a),X(l),t.serverSyncTree_,r)}),i)ce("update() called with empty data.  Don't do anything."),Ut(t,s,"ok",void 0);else{const a=Rr(t),l=HE(t.serverSyncTree_,e,o,a);Pr(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||pe("update at "+e+" failed: "+c);const d=Pt(t.serverSyncTree_,a,!h),f=d.length>0?Fn(t,e):e;Se(t.eventQueue_,f,d),Ut(t,s,c,u)}),ue(n,c=>{const u=vl(t,Q(e,c));Fn(t,u)}),Se(t.eventQueue_,e,[])}}function _T(t){qn(t,"onDisconnectEvents");const e=Qs(t),n=Xi();Bo(t.onDisconnect_,j(),(i,r)=>{const o=$f(i,r,t.serverSyncTree_,e);Gn(n,i,o)});let s=[];Bo(n,j(),(i,r)=>{s=s.concat(Gs(t.serverSyncTree_,i,r));const o=vl(t,i);Fn(t,o)}),t.onDisconnect_=Xi(),Se(t.eventQueue_,j(),s)}function vT(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&jo(t.onDisconnect_,e),Ut(t,n,s,i)})}function gu(t,e,n,s){const i=X(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Gn(t.onDisconnect_,e,i),Ut(t,s,r,o)})}function wT(t,e,n,s,i){const r=X(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Gn(t.onDisconnect_,e,r),Ut(t,i,o,a)})}function bT(t,e,n,s){if(Li(n)){ce("onDisconnect().update() called with empty data.  Don't do anything."),Ut(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&ue(n,(o,a)=>{const l=X(a);Gn(t.onDisconnect_,Q(e,o),l)}),Ut(t,s,i,r)})}function ET(t,e,n){let s;O(e._path)===".info"?s=Go(t.infoSyncTree_,e,n):s=Go(t.serverSyncTree_,e,n),Xf(t.eventQueue_,e._path,s)}function qo(t,e,n){let s;O(e._path)===".info"?s=rr(t.infoSyncTree_,e,n):s=rr(t.serverSyncTree_,e,n),Xf(t.eventQueue_,e._path,s)}function tp(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Zf)}function TT(t){t.persistentConnection_&&t.persistentConnection_.resume(Zf)}function qn(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ce(n,...e)}function Ut(t,e,n,s){e&&$n(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function CT(t,e,n,s,i,r){qn(t,"transaction on "+e);const o={path:e,update:n,onComplete:s,status:null,order:Yd(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=_l(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{qs("transaction failed: Data returned ",l,o.path),o.status=0;const c=Sr(t.transactionQueueTree_,e),u=_n(c)||[];u.push(o),fl(c,u);let h;typeof l=="object"&&l!==null&&Ge(l,".priority")?(h=ln(l,".priority"),w(Ns(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(xr(t.serverSyncTree_,e)||N.EMPTY_NODE).getPriority().val();const d=Qs(t),f=X(l,h),m=ul(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=m,o.currentWriteId=Rr(t);const y=il(t.serverSyncTree_,e,m,o.currentWriteId,o.applyLocally);Se(t.eventQueue_,e,y),Nr(t,t.transactionQueueTree_)}}function _l(t,e,n){return xr(t.serverSyncTree_,e,n)||N.EMPTY_NODE}function Nr(t,e=t.transactionQueueTree_){if(e||Mr(t,e),_n(e)){const n=sp(t,e);w(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&xT(t,Ks(e),n)}else Gf(e)&&kr(e,n=>{Nr(t,n)})}function xT(t,e,n){const s=n.map(c=>c.currentWriteId),i=_l(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];w(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ye(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{qn(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Pt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Mr(t,Sr(t.transactionQueueTree_,e)),Nr(t,t.transactionQueueTree_),Se(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)$n(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{pe("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Fn(t,e)}},o)}function Fn(t,e){const n=np(t,e),s=Ks(n),i=sp(t,n);return IT(t,i,s),s}function IT(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ye(n,l.path);let u=!1,h;if(w(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Pt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=dT)u=!0,h="maxretry",i=i.concat(Pt(t.serverSyncTree_,l.currentWriteId,!0));else{const d=_l(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){qs("transaction failed: Data returned ",f,l.path);let m=X(f);typeof f=="object"&&f!=null&&Ge(f,".priority")||(m=m.updatePriority(d.getPriority()));const g=l.currentWriteId,_=Qs(t),b=ul(m,d,_);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=b,l.currentWriteId=Rr(t),o.splice(o.indexOf(g),1),i=i.concat(il(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(Pt(t.serverSyncTree_,g,!0))}else u=!0,h="nodata",i=i.concat(Pt(t.serverSyncTree_,l.currentWriteId,!0))}Se(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,(function(d){setTimeout(d,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Mr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)$n(s[a]);Nr(t,t.transactionQueueTree_)}function np(t,e){let n,s=t.transactionQueueTree_;for(n=O(e);n!==null&&_n(s)===void 0;)s=Sr(s,n),e=z(e),n=O(e);return s}function sp(t,e){const n=[];return ip(t,e,n),n.sort((s,i)=>s.order-i.order),n}function ip(t,e,n){const s=_n(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);kr(e,i=>{ip(t,i,n)})}function Mr(t,e){const n=_n(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,fl(e,n.length>0?n:void 0)}kr(e,s=>{Mr(t,s)})}function vl(t,e){const n=Ks(np(t,e)),s=Sr(t.transactionQueueTree_,e);return sT(s,i=>{io(t,i)}),io(t,s),Kf(s,i=>{io(t,i)}),n}function io(t,e){const n=_n(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(w(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(w(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Pt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?fl(e,void 0):n.length=r+1,Se(t.eventQueue_,Ks(e),i);for(let o=0;o<s.length;o++)$n(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):pe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Yo=function(t,e){const n=AT(t),s=n.namespace;n.domain==="firebase.com"&&it(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&it("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Vw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new uf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new B(n.pathString)}},AT=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=ST(t.substring(u,h)));const d=kT(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",PT=(function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=yu.charAt(n%64),n=Math.floor(n/64);w(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=yu.charAt(e[i]);return w(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+re(this.snapshot.exportVal())}}class op{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new xe;return vT(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ze("OnDisconnect.remove",this._path);const e=new xe;return gu(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ze("OnDisconnect.set",this._path),rt("OnDisconnect.set",e,this._path,!1);const n=new xe;return gu(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Ze("OnDisconnect.setWithPriority",this._path),rt("OnDisconnect.setWithPriority",e,this._path,!1),pl("OnDisconnect.setWithPriority",n);const s=new xe;return wT(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Ze("OnDisconnect.update",this._path),Yf("OnDisconnect.update",e,this._path);const n=new xe;return bT(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return L(this._path)?null:Ha(this._path)}get ref(){return new Ke(this._repo,this._path)}get _queryIdentifier(){const e=nu(this._queryParams),n=ja(e);return n==="{}"?"default":n}get _queryObject(){return nu(this._queryParams)}isEqual(e){if(e=Y(e),!(e instanceof Ae))return!1;const n=this._repo===e._repo,s=za(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+bb(this._path)}}function Dr(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Gt(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===nt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Ft)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==vt)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===K){if(e!=null&&!Ns(e)||n!=null&&!Ns(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(w(t.getIndex()instanceof Ka||t.getIndex()===qa,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Or(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Ke extends Ae{constructor(e,n){super(e,n,new Qa,!1)}get parent(){const e=vf(this._path);return e===null?null:new Ke(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class mn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new B(e),s=Vn(this.ref,e);return new mn(this._node.getChild(n),s,K)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new mn(i,Vn(this.ref,s),K)))}hasChild(e){const n=new B(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Te(t,e){return t=Y(t),t._checkNotDeleted("ref"),e!==void 0?Vn(t._root,e):t._root}function iP(t,e){t=Y(t),t._checkNotDeleted("refFromURL");const n=Yo(e,t._repo.repoInfo_.nodeAdmin);Qf("refFromURL",n);const s=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&s.host!==t._repo.repoInfo_.host&&it("refFromURL: Host name does not match the current database: (found "+s.host+" but expected "+t._repo.repoInfo_.host+")"),Te(t,n.path.toString())}function Vn(t,e){return t=Y(t),O(t._path)===null?cT("child","path",e,!1):ml("child","path",e,!1),new Ke(t._repo,Q(t._path,e))}function rP(t){return t=Y(t),new RT(t._repo,t._path)}function ap(t,e){t=Y(t),Ze("push",t._path),rt("push",e,t._path,!0);const n=ep(t._repo),s=PT(n),i=Vn(t,s),r=Vn(t,s);let o;return e!=null?o=Lr(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function lp(t){return Ze("remove",t._path),Lr(t,null)}function Lr(t,e){t=Y(t),Ze("set",t._path),rt("set",e,t._path,!1);const n=new xe;return yl(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function oP(t,e){t=Y(t),Ze("setPriority",t._path),pl("setPriority",e);const n=new xe;return yl(t._repo,Q(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function aP(t,e,n){if(Ze("setWithPriority",t._path),rt("setWithPriority",e,t._path,!1),pl("setWithPriority",n),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const s=new xe;return yl(t._repo,t._path,e,n,s.wrapCallback(()=>{})),s.promise}function cp(t,e){Yf("update",e,t._path);const n=new xe;return yT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function up(t){t=Y(t);const e=new wl(()=>{}),n=new Xs(e);return gT(t._repo,t,n).then(s=>new mn(s,new Ke(t._repo,t._path),t._queryParams.getIndex()))}class Xs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new rp("value",this,new mn(e.snapshotNode,new Ke(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new op(this,e,n):null}matches(e){return e instanceof Xs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Fr{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new op(this,e,n):null}createEvent(e,n){w(e.childName!=null,"Child events should have a childName.");const s=Vn(new Ke(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new rp(e.type,this,new mn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Fr?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Js(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{qo(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new wl(n,r||void 0),a=e==="value"?new Xs(o):new Fr(e,o);return ET(t._repo,t,a),()=>qo(t._repo,t,a)}function Yn(t,e,n,s){return Js(t,"value",e,n,s)}function lP(t,e,n,s){return Js(t,"child_added",e,n,s)}function cP(t,e,n,s){return Js(t,"child_changed",e,n,s)}function uP(t,e,n,s){return Js(t,"child_moved",e,n,s)}function hP(t,e,n,s){return Js(t,"child_removed",e,n,s)}function dP(t,e,n){let s=null;const i=n?new wl(n):null;e==="value"?s=new Xs(i):e&&(s=new Fr(e,i)),qo(t._repo,t,s)}class qe{}class hp extends qe{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){rt("endAt",this._value,e._path,!0);const n=Vo(e._queryParams,this._value,this._key);if(Or(n),Gt(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ae(e._repo,e._path,n,e._orderByCalled)}}function fP(t,e){return Ys("endAt","key",e),new hp(t,e)}class NT extends qe{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){rt("endBefore",this._value,e._path,!1);const n=Kb(e._queryParams,this._value,this._key);if(Or(n),Gt(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ae(e._repo,e._path,n,e._orderByCalled)}}function pP(t,e){return Ys("endBefore","key",e),new NT(t,e)}class dp extends qe{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){rt("startAt",this._value,e._path,!0);const n=Fo(e._queryParams,this._value,this._key);if(Or(n),Gt(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ae(e._repo,e._path,n,e._orderByCalled)}}function mP(t=null,e){return Ys("startAt","key",e),new dp(t,e)}class MT extends qe{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){rt("startAfter",this._value,e._path,!1);const n=Gb(e._queryParams,this._value,this._key);if(Or(n),Gt(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Ae(e._repo,e._path,n,e._orderByCalled)}}function gP(t,e){return Ys("startAfter","key",e),new MT(t,e)}class DT extends qe{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ae(e._repo,e._path,zb(e._queryParams,this._limit),e._orderByCalled)}}function yP(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new DT(t)}class OT extends qe{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ae(e._repo,e._path,$b(e._queryParams,this._limit),e._orderByCalled)}}function _P(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new OT(t)}class LT extends qe{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Dr(e,"orderByChild");const n=new B(this._path);if(L(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Ka(n),i=br(e._queryParams,s);return Gt(i),new Ae(e._repo,e._path,i,!0)}}function vP(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return ml("orderByChild","path",t,!1),new LT(t)}class FT extends qe{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){Dr(e,"orderByKey");const n=br(e._queryParams,nt);return Gt(n),new Ae(e._repo,e._path,n,!0)}}function wP(){return new FT}class VT extends qe{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){Dr(e,"orderByPriority");const n=br(e._queryParams,K);return Gt(n),new Ae(e._repo,e._path,n,!0)}}function bP(){return new VT}class jT extends qe{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){Dr(e,"orderByValue");const n=br(e._queryParams,qa);return Gt(n),new Ae(e._repo,e._path,n,!0)}}function EP(){return new jT}class BT extends qe{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(rt("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new hp(this._value,this._key)._apply(new dp(this._value,this._key)._apply(e))}}function TP(t,e){return Ys("equalTo","key",e),new BT(t,e)}function CP(t,...e){let n=Y(t);for(const s of e)n=s._apply(n);return n}OE(Ke);BE(Ke);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="FIREBASE_DATABASE_EMULATOR_HOST",Qo={};let fp=!1;function WT(t,e,n,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Vs(r);t.repoInfo_=new uf(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function pp(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||it("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ce("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Yo(r,i),a=o.repoInfo,l,c;typeof process<"u"&&Vc&&(c=Vc[UT]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Yo(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Rn(Rn.OWNER):new Yw(t.name,t.options,e);Qf("Invalid Firebase Database URL",o),L(o.path)||it("Database URL must point to the root of a Firebase Database (not including a child path).");const h=zT(a,t,u,new qw(t,n));return new GT(h,t)}function HT(t,e){const n=Qo[e];(!n||n[t.key]!==t)&&it(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tp(t),delete n[t.key]}function zT(t,e,n,s){let i=Qo[e.name];i||(i={},Qo[e.name]=i);let r=i[t.toURLString()];return r&&it("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new fT(t,fp,n,s),i[t.toURLString()]=r,r}function $T(t){fp=t}class GT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ke(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(HT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&it("Cannot call "+e+" on a deleted database.")}}function mp(){Mn.IS_TRANSPORT_INITIALIZED&&pe("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function xP(){mp(),At.forceDisallow()}function IP(){mp(),Me.forceDisallow(),At.forceAllow()}function KT(t=od(),e){const n=Pa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Yg("database");s&&qT(n,...s)}return n}function qT(t,e,n,s={}){t=Y(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&cn(s,r.repoInfo_.emulatorOptions))return;it("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&it('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Rn(Rn.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Qg(s.mockUserToken,t.app.options.projectId);o=new Rn(a)}Vs(e)&&td(e),WT(r,i,s,o)}function SP(t){t=Y(t),t._checkNotDeleted("goOffline"),tp(t._repo)}function kP(t){t=Y(t),t._checkNotDeleted("goOnline"),TT(t._repo)}function AP(t,e){Xd(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(t){Kd(Hn),Nn(new gt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pp(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Dt(jc,Bc,t),Dt(jc,Bc,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT={".sv":"timestamp"};function PP(){return QT}function RP(t){return{".sv":{increment:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function NP(t,e,n){if(t=Y(t),Ze("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const s=(n==null?void 0:n.applyLocally)??!0,i=new xe,r=(a,l,c)=>{let u=null;a?i.reject(a):(u=new mn(c,new Ke(t._repo,t._path),K),i.resolve(new XT(l,u)))},o=Yn(t,()=>{});return CT(t._repo,t._path,e,r,o,s),i.promise}Le.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Le.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};const MP=function(t){const e=Le.prototype.put;return Le.prototype.put=function(n,s,i,r){r!==void 0&&(r=t()),e.call(this,n,s,i,r)},function(){Le.prototype.put=e}},DP=function(t){$T(t)};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP({app:t,url:e,version:n,customAuthImpl:s,customAppCheckImpl:i,nodeAdmin:r=!1}){Kd(n);const o=new nd("database-standalone"),a=new xo("auth-internal",o);let l;return i&&(l=new xo("app-check-internal",o),l.setComponent(new gt("app-check-internal",()=>i,"PRIVATE"))),a.setComponent(new gt("auth-internal",()=>s,"PRIVATE")),pp(t,a,l,e,r)}YT();const JT={VITE_FIREBASE_API_KEY:"AIzaSyD1b7Z3zJeuvvo6iMWQxvFHdbClCFSlSuI",VITE_FIREBASE_APP_ID:"1:889817277774:web:3912f8166047545a8f2a1f",VITE_FIREBASE_AUTH_DOMAIN:"omnibins.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://omnibins-default-rtdb.firebaseio.com",VITE_FIREBASE_MEASUREMENT_ID:"G-V9BW9RGDNQ",VITE_FIREBASE_MESSAGING_SENDER_ID:"889817277774",VITE_FIREBASE_PROJECT_ID:"omnibins",VITE_FIREBASE_STORAGE_BUCKET:"omnibins.firebasestorage.app"},Et=JT,gp={apiKey:Et.VITE_FIREBASE_API_KEY,authDomain:Et.VITE_FIREBASE_AUTH_DOMAIN,projectId:Et.VITE_FIREBASE_PROJECT_ID,databaseURL:Et.VITE_FIREBASE_DATABASE_URL,storageBucket:Et.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:Et.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:Et.VITE_FIREBASE_APP_ID,measurementId:Et.VITE_FIREBASE_MEASUREMENT_ID},_u=Object.entries(gp).filter(([,t])=>!t).map(([t])=>t);if(_u.length>0)throw new Error(`Firebase config is incomplete. Missing values: ${_u.join(", ")}. Copy .env.example to .env or .env.local and fill in your Firebase web app values.`);const yp=rd(gp),ys=Nw(yp),ke=KT(yp);new ht;function ZT(t){const e=Te(ke,"bins");return Yn(e,n=>{const s=n.val(),i=s?Object.entries(s).map(([r,o])=>({id:r,...typeof o=="object"&&o!==null?o:{}})):[];t(i)})}function LP(t){const e=Te(ke,"sensor_data");return Yn(e,n=>{const s=n.val(),i=s?Object.entries(s).map(([r,o])=>({id:r,...typeof o=="object"&&o!==null?o:{}})):[];t(i)})}function FP(t,e){const n=Te(ke,"alerts");return Yn(n,s=>{const i=s.val(),r=i?Object.entries(i).map(([o,a])=>({id:o,...typeof a=="object"&&a!==null?a:{}})):[];t(r)},s=>{e?e(s):console.error("subscribeAlerts error:",s)})}function VP(t,e){const n=Te(ke,"reports");return Yn(n,s=>{const i=s.val(),r=i?Object.entries(i).map(([o,a])=>({id:o,...typeof a=="object"&&a!==null?a:{}})):[];t(r)},s=>{e?e(s):console.error("subscribeReports error:",s)})}async function jP(t,e){return yv(ys,t,e)}async function BP(){const t=ys.currentUser;return t?t.getIdToken():null}async function UP(t){const e=Te(ke,"users"),n=ap(e),s=new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),i={name:t.name,email:t.email||"",phone:t.phone||"",team:t.team,role:t.role||"staff",department:t.team||"Operations",status:t.status||"active",joinedDate:s,lastLogin:s,createdAt:new Date().toISOString()};return await Lr(n,i),{id:n.key,...i}}async function e0(t,e){await cp(Te(ke,`users/${t}`),e)}async function WP(t){await lp(Te(ke,`users/${t}`))}async function _p(){const t=Te(ke,"users"),n=(await up(t)).val();return n?Object.entries(n).map(([s,i])=>({id:s,...typeof i=="object"&&i!==null?i:{}})):[]}async function t0(t){return t?(await _p()).find(n=>String(n.email||"").toLowerCase()===t.toLowerCase())??null:null}async function n0(t){const e=await t0(t);return e?String(e.role||"").trim().toLowerCase()==="admin":!1}async function HP(t){const e=Te(ke,"teams"),n=ap(e),s=new Date().toISOString(),i={name:t.name,workerIds:t.workerIds,createdAt:s};await Lr(n,i);const r={};return t.workerIds.forEach(o=>{r[`users/${o}/team`]=t.name}),await cp(Te(ke),r),{id:n.key,...i}}async function zP(){const t=Te(ke,"teams"),n=(await up(t)).val();return n?Object.entries(n).map(([s,i])=>({id:s,...typeof i=="object"&&i!==null?i:{}})):[]}async function $P(t){t&&await lp(Te(ke,`teams/${t}`))}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i0=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),vu=t=>{const e=i0(t);return e.charAt(0).toUpperCase()+e.slice(1)},vp=(...t)=>t.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var r0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=v.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:i="",children:r,iconNode:o,...a},l)=>v.createElement("svg",{ref:l,...r0,width:e,height:e,stroke:t,strokeWidth:s?Number(n)*24/Number(e):n,className:vp("lucide",i),...a},[...o.map(([c,u])=>v.createElement(c,u)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(t,e)=>{const n=v.forwardRef(({className:s,...i},r)=>v.createElement(o0,{ref:r,iconNode:e,className:vp(`lucide-${s0(vu(t))}`,`lucide-${t}`,s),...i}));return n.displayName=vu(t),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],l0=J("activity",a0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],u0=J("bell",c0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],d0=J("calendar",h0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],p0=J("chart-column",f0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],wu=J("circle-alert",m0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],y0=J("clock",g0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],v0=J("droplet",_0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],b0=J("layout-dashboard",w0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],T0=J("log-out",E0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],x0=J("mail",C0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],S0=J("map",I0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],A0=J("menu",k0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],wp=J("pen",P0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],N0=J("phone",R0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],D0=J("save",M0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],bp=J("settings",O0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Vr=J("trash-2",L0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],V0=J("upload",F0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Xo=J("user",j0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Ep=J("users",B0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],W0=J("wind",U0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],z0=J("wrench",H0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Tp=J("x",$0),bu=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Eu=$h,G0=(t,e)=>n=>{var s;if((e==null?void 0:e.variants)==null)return Eu(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:r}=e,o=Object.keys(i).map(c=>{const u=n==null?void 0:n[c],h=r==null?void 0:r[c];if(u===null)return null;const d=bu(u)||bu(h);return i[c][d]}),a=n&&Object.entries(n).reduce((c,u)=>{let[h,d]=u;return d===void 0||(c[h]=d),c},{}),l=e==null||(s=e.compoundVariants)===null||s===void 0?void 0:s.reduce((c,u)=>{let{class:h,className:d,...f}=u;return Object.entries(f).every(m=>{let[y,g]=m;return Array.isArray(g)?g.includes({...r,...a}[y]):{...r,...a}[y]===g})?[...c,h,d]:c},[]);return Eu(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},bl="-",K0=t=>{const e=Y0(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=t;return{getClassGroupId:o=>{const a=o.split(bl);return a[0]===""&&a.length!==1&&a.shift(),Cp(a,e)||q0(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&s[o]?[...l,...s[o]]:l}}},Cp=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],s=e.nextPart.get(n),i=s?Cp(t.slice(1),s):void 0;if(i)return i;if(e.validators.length===0)return;const r=t.join(bl);return(o=e.validators.find(({validator:a})=>a(r)))==null?void 0:o.classGroupId},Tu=/^\[(.+)\]$/,q0=t=>{if(Tu.test(t)){const e=Tu.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},Y0=t=>{const{theme:e,classGroups:n}=t,s={nextPart:new Map,validators:[]};for(const i in n)Jo(n[i],s,i,e);return s},Jo=(t,e,n,s)=>{t.forEach(i=>{if(typeof i=="string"){const r=i===""?e:Cu(e,i);r.classGroupId=n;return}if(typeof i=="function"){if(Q0(i)){Jo(i(s),e,n,s);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([r,o])=>{Jo(o,Cu(e,r),n,s)})})},Cu=(t,e)=>{let n=t;return e.split(bl).forEach(s=>{n.nextPart.has(s)||n.nextPart.set(s,{nextPart:new Map,validators:[]}),n=n.nextPart.get(s)}),n},Q0=t=>t.isThemeGetter,X0=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,s=new Map;const i=(r,o)=>{n.set(r,o),e++,e>t&&(e=0,s=n,n=new Map)};return{get(r){let o=n.get(r);if(o!==void 0)return o;if((o=s.get(r))!==void 0)return i(r,o),o},set(r,o){n.has(r)?n.set(r,o):i(r,o)}}},Zo="!",ea=":",J0=ea.length,Z0=t=>{const{prefix:e,experimentalParseClassName:n}=t;let s=i=>{const r=[];let o=0,a=0,l=0,c;for(let m=0;m<i.length;m++){let y=i[m];if(o===0&&a===0){if(y===ea){r.push(i.slice(l,m)),l=m+J0;continue}if(y==="/"){c=m;continue}}y==="["?o++:y==="]"?o--:y==="("?a++:y===")"&&a--}const u=r.length===0?i:i.substring(l),h=eC(u),d=h!==u,f=c&&c>l?c-l:void 0;return{modifiers:r,hasImportantModifier:d,baseClassName:h,maybePostfixModifierPosition:f}};if(e){const i=e+ea,r=s;s=o=>o.startsWith(i)?r(o.substring(i.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:o,maybePostfixModifierPosition:void 0}}if(n){const i=s;s=r=>n({className:r,parseClassName:i})}return s},eC=t=>t.endsWith(Zo)?t.substring(0,t.length-1):t.startsWith(Zo)?t.substring(1):t,tC=t=>{const e=Object.fromEntries(t.orderSensitiveModifiers.map(s=>[s,!0]));return s=>{if(s.length<=1)return s;const i=[];let r=[];return s.forEach(o=>{o[0]==="["||e[o]?(i.push(...r.sort(),o),r=[]):r.push(o)}),i.push(...r.sort()),i}},nC=t=>({cache:X0(t.cacheSize),parseClassName:Z0(t),sortModifiers:tC(t),...K0(t)}),sC=/\s+/,iC=(t,e)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:i,sortModifiers:r}=e,o=[],a=t.trim().split(sC);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{isExternal:h,modifiers:d,hasImportantModifier:f,baseClassName:m,maybePostfixModifierPosition:y}=n(u);if(h){l=u+(l.length>0?" "+l:l);continue}let g=!!y,_=s(g?m.substring(0,y):m);if(!_){if(!g){l=u+(l.length>0?" "+l:l);continue}if(_=s(m),!_){l=u+(l.length>0?" "+l:l);continue}g=!1}const b=r(d).join(":"),T=f?b+Zo:b,C=T+_;if(o.includes(C))continue;o.push(C);const A=i(_,g);for(let V=0;V<A.length;++V){const U=A[V];o.push(T+U)}l=u+(l.length>0?" "+l:l)}return l};function rC(){let t=0,e,n,s="";for(;t<arguments.length;)(e=arguments[t++])&&(n=xp(e))&&(s&&(s+=" "),s+=n);return s}const xp=t=>{if(typeof t=="string")return t;let e,n="";for(let s=0;s<t.length;s++)t[s]&&(e=xp(t[s]))&&(n&&(n+=" "),n+=e);return n};function oC(t,...e){let n,s,i,r=o;function o(l){const c=e.reduce((u,h)=>h(u),t());return n=nC(c),s=n.cache.get,i=n.cache.set,r=a,a(l)}function a(l){const c=s(l);if(c)return c;const u=iC(l,n);return i(l,u),u}return function(){return r(rC.apply(null,arguments))}}const se=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},Ip=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Sp=/^\((?:(\w[\w-]*):)?(.+)\)$/i,aC=/^\d+\/\d+$/,lC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,cC=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,uC=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,hC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,dC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,wn=t=>aC.test(t),D=t=>!!t&&!Number.isNaN(Number(t)),Tt=t=>!!t&&Number.isInteger(Number(t)),ro=t=>t.endsWith("%")&&D(t.slice(0,-1)),ut=t=>lC.test(t),fC=()=>!0,pC=t=>cC.test(t)&&!uC.test(t),kp=()=>!1,mC=t=>hC.test(t),gC=t=>dC.test(t),yC=t=>!I(t)&&!S(t),_C=t=>Qn(t,Rp,kp),I=t=>Ip.test(t),Yt=t=>Qn(t,Np,pC),oo=t=>Qn(t,TC,D),xu=t=>Qn(t,Ap,kp),vC=t=>Qn(t,Pp,gC),hi=t=>Qn(t,Mp,mC),S=t=>Sp.test(t),os=t=>Xn(t,Np),wC=t=>Xn(t,CC),Iu=t=>Xn(t,Ap),bC=t=>Xn(t,Rp),EC=t=>Xn(t,Pp),di=t=>Xn(t,Mp,!0),Qn=(t,e,n)=>{const s=Ip.exec(t);return s?s[1]?e(s[1]):n(s[2]):!1},Xn=(t,e,n=!1)=>{const s=Sp.exec(t);return s?s[1]?e(s[1]):n:!1},Ap=t=>t==="position"||t==="percentage",Pp=t=>t==="image"||t==="url",Rp=t=>t==="length"||t==="size"||t==="bg-size",Np=t=>t==="length",TC=t=>t==="number",CC=t=>t==="family-name",Mp=t=>t==="shadow",xC=()=>{const t=se("color"),e=se("font"),n=se("text"),s=se("font-weight"),i=se("tracking"),r=se("leading"),o=se("breakpoint"),a=se("container"),l=se("spacing"),c=se("radius"),u=se("shadow"),h=se("inset-shadow"),d=se("text-shadow"),f=se("drop-shadow"),m=se("blur"),y=se("perspective"),g=se("aspect"),_=se("ease"),b=se("animate"),T=()=>["auto","avoid","all","avoid-page","page","left","right","column"],C=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],A=()=>[...C(),S,I],V=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto","contain","none"],E=()=>[S,I,l],M=()=>[wn,"full","auto",...E()],R=()=>[Tt,"none","subgrid",S,I],H=()=>["auto",{span:["full",Tt,S,I]},Tt,S,I],Z=()=>[Tt,"auto",S,I],Pe=()=>["auto","min","max","fr",S,I],be=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],fe=()=>["start","end","center","stretch","center-safe","end-safe"],te=()=>["auto",...E()],wt=()=>[wn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...E()],x=()=>[t,S,I],me=()=>[...C(),Iu,xu,{position:[S,I]}],Ye=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ct=()=>["auto","cover","contain",bC,_C,{size:[S,I]}],ts=()=>[ro,os,Yt],ge=()=>["","none","full",c,S,I],Ce=()=>["",D,os,Yt],si=()=>["solid","dashed","dotted","double"],Xl=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],oe=()=>[D,ro,Iu,xu],Jl=()=>["","none",m,S,I],ii=()=>["none",D,S,I],ri=()=>["none",D,S,I],zr=()=>[D,S,I],oi=()=>[wn,"full",...E()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ut],breakpoint:[ut],color:[fC],container:[ut],"drop-shadow":[ut],ease:["in","out","in-out"],font:[yC],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ut],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ut],shadow:[ut],spacing:["px",D],text:[ut],"text-shadow":[ut],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",wn,I,S,g]}],container:["container"],columns:[{columns:[D,I,S,a]}],"break-after":[{"break-after":T()}],"break-before":[{"break-before":T()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:A()}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:M()}],"inset-x":[{"inset-x":M()}],"inset-y":[{"inset-y":M()}],start:[{start:M()}],end:[{end:M()}],top:[{top:M()}],right:[{right:M()}],bottom:[{bottom:M()}],left:[{left:M()}],visibility:["visible","invisible","collapse"],z:[{z:[Tt,"auto",S,I]}],basis:[{basis:[wn,"full","auto",a,...E()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[D,wn,"auto","initial","none",I]}],grow:[{grow:["",D,S,I]}],shrink:[{shrink:["",D,S,I]}],order:[{order:[Tt,"first","last","none",S,I]}],"grid-cols":[{"grid-cols":R()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":Z()}],"col-end":[{"col-end":Z()}],"grid-rows":[{"grid-rows":R()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":Z()}],"row-end":[{"row-end":Z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Pe()}],"auto-rows":[{"auto-rows":Pe()}],gap:[{gap:E()}],"gap-x":[{"gap-x":E()}],"gap-y":[{"gap-y":E()}],"justify-content":[{justify:[...be(),"normal"]}],"justify-items":[{"justify-items":[...fe(),"normal"]}],"justify-self":[{"justify-self":["auto",...fe()]}],"align-content":[{content:["normal",...be()]}],"align-items":[{items:[...fe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...fe(),{baseline:["","last"]}]}],"place-content":[{"place-content":be()}],"place-items":[{"place-items":[...fe(),"baseline"]}],"place-self":[{"place-self":["auto",...fe()]}],p:[{p:E()}],px:[{px:E()}],py:[{py:E()}],ps:[{ps:E()}],pe:[{pe:E()}],pt:[{pt:E()}],pr:[{pr:E()}],pb:[{pb:E()}],pl:[{pl:E()}],m:[{m:te()}],mx:[{mx:te()}],my:[{my:te()}],ms:[{ms:te()}],me:[{me:te()}],mt:[{mt:te()}],mr:[{mr:te()}],mb:[{mb:te()}],ml:[{ml:te()}],"space-x":[{"space-x":E()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":E()}],"space-y-reverse":["space-y-reverse"],size:[{size:wt()}],w:[{w:[a,"screen",...wt()]}],"min-w":[{"min-w":[a,"screen","none",...wt()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[o]},...wt()]}],h:[{h:["screen",...wt()]}],"min-h":[{"min-h":["screen","none",...wt()]}],"max-h":[{"max-h":["screen",...wt()]}],"font-size":[{text:["base",n,os,Yt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,S,oo]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ro,I]}],"font-family":[{font:[wC,I,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,S,I]}],"line-clamp":[{"line-clamp":[D,"none",S,oo]}],leading:[{leading:[r,...E()]}],"list-image":[{"list-image":["none",S,I]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",S,I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:x()}],"text-color":[{text:x()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...si(),"wavy"]}],"text-decoration-thickness":[{decoration:[D,"from-font","auto",S,Yt]}],"text-decoration-color":[{decoration:x()}],"underline-offset":[{"underline-offset":[D,"auto",S,I]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:E()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",S,I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",S,I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:me()}],"bg-repeat":[{bg:Ye()}],"bg-size":[{bg:ct()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Tt,S,I],radial:["",S,I],conic:[Tt,S,I]},EC,vC]}],"bg-color":[{bg:x()}],"gradient-from-pos":[{from:ts()}],"gradient-via-pos":[{via:ts()}],"gradient-to-pos":[{to:ts()}],"gradient-from":[{from:x()}],"gradient-via":[{via:x()}],"gradient-to":[{to:x()}],rounded:[{rounded:ge()}],"rounded-s":[{"rounded-s":ge()}],"rounded-e":[{"rounded-e":ge()}],"rounded-t":[{"rounded-t":ge()}],"rounded-r":[{"rounded-r":ge()}],"rounded-b":[{"rounded-b":ge()}],"rounded-l":[{"rounded-l":ge()}],"rounded-ss":[{"rounded-ss":ge()}],"rounded-se":[{"rounded-se":ge()}],"rounded-ee":[{"rounded-ee":ge()}],"rounded-es":[{"rounded-es":ge()}],"rounded-tl":[{"rounded-tl":ge()}],"rounded-tr":[{"rounded-tr":ge()}],"rounded-br":[{"rounded-br":ge()}],"rounded-bl":[{"rounded-bl":ge()}],"border-w":[{border:Ce()}],"border-w-x":[{"border-x":Ce()}],"border-w-y":[{"border-y":Ce()}],"border-w-s":[{"border-s":Ce()}],"border-w-e":[{"border-e":Ce()}],"border-w-t":[{"border-t":Ce()}],"border-w-r":[{"border-r":Ce()}],"border-w-b":[{"border-b":Ce()}],"border-w-l":[{"border-l":Ce()}],"divide-x":[{"divide-x":Ce()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ce()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...si(),"hidden","none"]}],"divide-style":[{divide:[...si(),"hidden","none"]}],"border-color":[{border:x()}],"border-color-x":[{"border-x":x()}],"border-color-y":[{"border-y":x()}],"border-color-s":[{"border-s":x()}],"border-color-e":[{"border-e":x()}],"border-color-t":[{"border-t":x()}],"border-color-r":[{"border-r":x()}],"border-color-b":[{"border-b":x()}],"border-color-l":[{"border-l":x()}],"divide-color":[{divide:x()}],"outline-style":[{outline:[...si(),"none","hidden"]}],"outline-offset":[{"outline-offset":[D,S,I]}],"outline-w":[{outline:["",D,os,Yt]}],"outline-color":[{outline:x()}],shadow:[{shadow:["","none",u,di,hi]}],"shadow-color":[{shadow:x()}],"inset-shadow":[{"inset-shadow":["none",h,di,hi]}],"inset-shadow-color":[{"inset-shadow":x()}],"ring-w":[{ring:Ce()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:x()}],"ring-offset-w":[{"ring-offset":[D,Yt]}],"ring-offset-color":[{"ring-offset":x()}],"inset-ring-w":[{"inset-ring":Ce()}],"inset-ring-color":[{"inset-ring":x()}],"text-shadow":[{"text-shadow":["none",d,di,hi]}],"text-shadow-color":[{"text-shadow":x()}],opacity:[{opacity:[D,S,I]}],"mix-blend":[{"mix-blend":[...Xl(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Xl()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[D]}],"mask-image-linear-from-pos":[{"mask-linear-from":oe()}],"mask-image-linear-to-pos":[{"mask-linear-to":oe()}],"mask-image-linear-from-color":[{"mask-linear-from":x()}],"mask-image-linear-to-color":[{"mask-linear-to":x()}],"mask-image-t-from-pos":[{"mask-t-from":oe()}],"mask-image-t-to-pos":[{"mask-t-to":oe()}],"mask-image-t-from-color":[{"mask-t-from":x()}],"mask-image-t-to-color":[{"mask-t-to":x()}],"mask-image-r-from-pos":[{"mask-r-from":oe()}],"mask-image-r-to-pos":[{"mask-r-to":oe()}],"mask-image-r-from-color":[{"mask-r-from":x()}],"mask-image-r-to-color":[{"mask-r-to":x()}],"mask-image-b-from-pos":[{"mask-b-from":oe()}],"mask-image-b-to-pos":[{"mask-b-to":oe()}],"mask-image-b-from-color":[{"mask-b-from":x()}],"mask-image-b-to-color":[{"mask-b-to":x()}],"mask-image-l-from-pos":[{"mask-l-from":oe()}],"mask-image-l-to-pos":[{"mask-l-to":oe()}],"mask-image-l-from-color":[{"mask-l-from":x()}],"mask-image-l-to-color":[{"mask-l-to":x()}],"mask-image-x-from-pos":[{"mask-x-from":oe()}],"mask-image-x-to-pos":[{"mask-x-to":oe()}],"mask-image-x-from-color":[{"mask-x-from":x()}],"mask-image-x-to-color":[{"mask-x-to":x()}],"mask-image-y-from-pos":[{"mask-y-from":oe()}],"mask-image-y-to-pos":[{"mask-y-to":oe()}],"mask-image-y-from-color":[{"mask-y-from":x()}],"mask-image-y-to-color":[{"mask-y-to":x()}],"mask-image-radial":[{"mask-radial":[S,I]}],"mask-image-radial-from-pos":[{"mask-radial-from":oe()}],"mask-image-radial-to-pos":[{"mask-radial-to":oe()}],"mask-image-radial-from-color":[{"mask-radial-from":x()}],"mask-image-radial-to-color":[{"mask-radial-to":x()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":C()}],"mask-image-conic-pos":[{"mask-conic":[D]}],"mask-image-conic-from-pos":[{"mask-conic-from":oe()}],"mask-image-conic-to-pos":[{"mask-conic-to":oe()}],"mask-image-conic-from-color":[{"mask-conic-from":x()}],"mask-image-conic-to-color":[{"mask-conic-to":x()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:me()}],"mask-repeat":[{mask:Ye()}],"mask-size":[{mask:ct()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",S,I]}],filter:[{filter:["","none",S,I]}],blur:[{blur:Jl()}],brightness:[{brightness:[D,S,I]}],contrast:[{contrast:[D,S,I]}],"drop-shadow":[{"drop-shadow":["","none",f,di,hi]}],"drop-shadow-color":[{"drop-shadow":x()}],grayscale:[{grayscale:["",D,S,I]}],"hue-rotate":[{"hue-rotate":[D,S,I]}],invert:[{invert:["",D,S,I]}],saturate:[{saturate:[D,S,I]}],sepia:[{sepia:["",D,S,I]}],"backdrop-filter":[{"backdrop-filter":["","none",S,I]}],"backdrop-blur":[{"backdrop-blur":Jl()}],"backdrop-brightness":[{"backdrop-brightness":[D,S,I]}],"backdrop-contrast":[{"backdrop-contrast":[D,S,I]}],"backdrop-grayscale":[{"backdrop-grayscale":["",D,S,I]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[D,S,I]}],"backdrop-invert":[{"backdrop-invert":["",D,S,I]}],"backdrop-opacity":[{"backdrop-opacity":[D,S,I]}],"backdrop-saturate":[{"backdrop-saturate":[D,S,I]}],"backdrop-sepia":[{"backdrop-sepia":["",D,S,I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":E()}],"border-spacing-x":[{"border-spacing-x":E()}],"border-spacing-y":[{"border-spacing-y":E()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",S,I]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[D,"initial",S,I]}],ease:[{ease:["linear","initial",_,S,I]}],delay:[{delay:[D,S,I]}],animate:[{animate:["none",b,S,I]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[y,S,I]}],"perspective-origin":[{"perspective-origin":A()}],rotate:[{rotate:ii()}],"rotate-x":[{"rotate-x":ii()}],"rotate-y":[{"rotate-y":ii()}],"rotate-z":[{"rotate-z":ii()}],scale:[{scale:ri()}],"scale-x":[{"scale-x":ri()}],"scale-y":[{"scale-y":ri()}],"scale-z":[{"scale-z":ri()}],"scale-3d":["scale-3d"],skew:[{skew:zr()}],"skew-x":[{"skew-x":zr()}],"skew-y":[{"skew-y":zr()}],transform:[{transform:[S,I,"","none","gpu","cpu"]}],"transform-origin":[{origin:A()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:oi()}],"translate-x":[{"translate-x":oi()}],"translate-y":[{"translate-y":oi()}],"translate-z":[{"translate-z":oi()}],"translate-none":["translate-none"],accent:[{accent:x()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:x()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",S,I]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",S,I]}],fill:[{fill:["none",...x()]}],"stroke-w":[{stroke:[D,os,Yt,oo]}],stroke:[{stroke:["none",...x()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},IC=oC(xC);function Kt(...t){return IC($h(t))}const SC=G0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function us({className:t,variant:e,size:n,asChild:s=!1,...i}){const r=s?Tg:"button";return p.jsx(r,{"data-slot":"button",className:Kt(SC({variant:e,size:n,className:t})),...i})}const El=v.createContext({});function Tl(t){const e=v.useRef(null);return e.current===null&&(e.current=t()),e.current}const kC=typeof window<"u",Dp=kC?v.useLayoutEffect:v.useEffect,jr=v.createContext(null);function Cl(t,e){t.indexOf(e)===-1&&t.push(e)}function or(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const ot=(t,e,n)=>n>e?e:n<t?t:n;let xl=()=>{};const Wt={},Op=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Lp(t){return typeof t=="object"&&t!==null}const Fp=t=>/^0[^.\s]+$/u.test(t);function Vp(t){let e;return()=>(e===void 0&&(e=t()),e)}const Fe=t=>t,AC=(t,e)=>n=>e(t(n)),Zs=(...t)=>t.reduce(AC),Ms=(t,e,n)=>{const s=e-t;return s===0?1:(n-t)/s};class Il{constructor(){this.subscriptions=[]}add(e){return Cl(this.subscriptions,e),()=>or(this.subscriptions,e)}notify(e,n,s){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,s);else for(let r=0;r<i;r++){const o=this.subscriptions[r];o&&o(e,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ie=t=>t*1e3,Oe=t=>t/1e3;function jp(t,e){return e?t*(1e3/e):0}const Bp=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,PC=1e-7,RC=12;function NC(t,e,n,s,i){let r,o,a=0;do o=e+(n-e)/2,r=Bp(o,s,i)-t,r>0?n=o:e=o;while(Math.abs(r)>PC&&++a<RC);return o}function ei(t,e,n,s){if(t===e&&n===s)return Fe;const i=r=>NC(r,0,1,t,n);return r=>r===0||r===1?r:Bp(i(r),e,s)}const Up=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Wp=t=>e=>1-t(1-e),Hp=ei(.33,1.53,.69,.99),Sl=Wp(Hp),zp=Up(Sl),$p=t=>t>=1?1:(t*=2)<1?.5*Sl(t):.5*(2-Math.pow(2,-10*(t-1))),kl=t=>1-Math.sin(Math.acos(t)),Gp=Wp(kl),Kp=Up(kl),MC=ei(.42,0,1,1),DC=ei(0,0,.58,1),qp=ei(.42,0,.58,1),OC=t=>Array.isArray(t)&&typeof t[0]!="number",Yp=t=>Array.isArray(t)&&typeof t[0]=="number",LC={linear:Fe,easeIn:MC,easeInOut:qp,easeOut:DC,circIn:kl,circInOut:Kp,circOut:Gp,backIn:Sl,backInOut:zp,backOut:Hp,anticipate:$p},FC=t=>typeof t=="string",Su=t=>{if(Yp(t)){xl(t.length===4);const[e,n,s,i]=t;return ei(e,n,s,i)}else if(FC(t))return LC[t];return t},fi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function VC(t,e){let n=new Set,s=new Set,i=!1,r=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),t()),u(a)}const c={schedule:(u,h=!1,d=!1)=>{const m=d&&i?n:s;return h&&o.add(u),m.add(u),u},cancel:u=>{s.delete(u),o.delete(u)},process:u=>{if(a=u,i){r=!0;return}i=!0;const h=n;n=s,s=h,n.forEach(l),n.clear(),i=!1,r&&(r=!1,c.process(u))}};return c}const jC=40;function Qp(t,e){let n=!1,s=!0;const i={delta:0,timestamp:0,isProcessing:!1},r=()=>n=!0,o=fi.reduce((T,C)=>(T[C]=VC(r),T),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:h,preRender:d,render:f,postRender:m}=o,y=()=>{const T=Wt.useManualTiming,C=T?i.timestamp:performance.now();n=!1,T||(i.delta=s?1e3/60:Math.max(Math.min(C-i.timestamp,jC),1)),i.timestamp=C,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),u.process(i),h.process(i),d.process(i),f.process(i),m.process(i),i.isProcessing=!1,n&&e&&(s=!1,t(y))},g=()=>{n=!0,s=!0,i.isProcessing||t(y)};return{schedule:fi.reduce((T,C)=>{const A=o[C];return T[C]=(V,U=!1,E=!1)=>(n||g(),A.schedule(V,U,E)),T},{}),cancel:T=>{for(let C=0;C<fi.length;C++)o[fi[C]].cancel(T)},state:i,steps:o}}const{schedule:$,cancel:Ht,state:he,steps:ao}=Qp(typeof requestAnimationFrame<"u"?requestAnimationFrame:Fe,!0);let Ii;function BC(){Ii=void 0}const _e={now:()=>(Ii===void 0&&_e.set(he.isProcessing||Wt.useManualTiming?he.timestamp:performance.now()),Ii),set:t=>{Ii=t,queueMicrotask(BC)}},Xp=t=>e=>typeof e=="string"&&e.startsWith(t),Jp=Xp("--"),UC=Xp("var(--"),Al=t=>UC(t)?WC.test(t.split("/*")[0].trim()):!1,WC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ku(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Jn={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ds={...Jn,transform:t=>ot(0,1,t)},pi={...Jn,default:1},_s=t=>Math.round(t*1e5)/1e5,Pl=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function HC(t){return t==null}const zC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Rl=(t,e)=>n=>!!(typeof n=="string"&&zC.test(n)&&n.startsWith(t)||e&&!HC(n)&&Object.prototype.hasOwnProperty.call(n,e)),Zp=(t,e,n)=>s=>{if(typeof s!="string")return s;const[i,r,o,a]=s.match(Pl);return{[t]:parseFloat(i),[e]:parseFloat(r),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},$C=t=>ot(0,255,t),lo={...Jn,transform:t=>Math.round($C(t))},nn={test:Rl("rgb","red"),parse:Zp("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+lo.transform(t)+", "+lo.transform(e)+", "+lo.transform(n)+", "+_s(Ds.transform(s))+")"};function GC(t){let e="",n="",s="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),s=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),s=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,s+=s,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:i?parseInt(i,16)/255:1}}const ta={test:Rl("#"),parse:GC,transform:nn.transform},ti=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Ct=ti("deg"),st=ti("%"),k=ti("px"),KC=ti("vh"),qC=ti("vw"),Au={...st,parse:t=>st.parse(t)/100,transform:t=>st.transform(t*100)},Tn={test:Rl("hsl","hue"),parse:Zp("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+st.transform(_s(e))+", "+st.transform(_s(n))+", "+_s(Ds.transform(s))+")"},ne={test:t=>nn.test(t)||ta.test(t)||Tn.test(t),parse:t=>nn.test(t)?nn.parse(t):Tn.test(t)?Tn.parse(t):ta.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?nn.transform(t):Tn.transform(t),getAnimatableNone:t=>{const e=ne.parse(t);return e.alpha=0,ne.transform(e)}},YC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function QC(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Pl))==null?void 0:e.length)||0)+(((n=t.match(YC))==null?void 0:n.length)||0)>0}const em="number",tm="color",XC="var",JC="var(",Pu="${}",ZC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function jn(t){const e=t.toString(),n=[],s={color:[],number:[],var:[]},i=[];let r=0;const a=e.replace(ZC,l=>(ne.test(l)?(s.color.push(r),i.push(tm),n.push(ne.parse(l))):l.startsWith(JC)?(s.var.push(r),i.push(XC),n.push(l)):(s.number.push(r),i.push(em),n.push(parseFloat(l))),++r,Pu)).split(Pu);return{values:n,split:a,indexes:s,types:i}}function ex(t){return jn(t).values}function nm({split:t,types:e}){const n=t.length;return s=>{let i="";for(let r=0;r<n;r++)if(i+=t[r],s[r]!==void 0){const o=e[r];o===em?i+=_s(s[r]):o===tm?i+=ne.transform(s[r]):i+=s[r]}return i}}function tx(t){return nm(jn(t))}const nx=t=>typeof t=="number"?0:ne.test(t)?ne.getAnimatableNone(t):t,sx=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:nx(t);function ix(t){const e=jn(t);return nm(e)(e.values.map((s,i)=>sx(s,e.split[i])))}const ze={test:QC,parse:ex,createTransformer:tx,getAnimatableNone:ix};function co(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function rx({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,e/=100,n/=100;let i=0,r=0,o=0;if(!e)i=r=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=co(l,a,t+1/3),r=co(l,a,t),o=co(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:s}}function ar(t,e){return n=>n>0?e:t}const q=(t,e,n)=>t+(e-t)*n,uo=(t,e,n)=>{const s=t*t,i=n*(e*e-s)+s;return i<0?0:Math.sqrt(i)},ox=[ta,nn,Tn],ax=t=>ox.find(e=>e.test(t));function Ru(t){const e=ax(t);if(!e)return!1;let n=e.parse(t);return e===Tn&&(n=rx(n)),n}const Nu=(t,e)=>{const n=Ru(t),s=Ru(e);if(!n||!s)return ar(t,e);const i={...n};return r=>(i.red=uo(n.red,s.red,r),i.green=uo(n.green,s.green,r),i.blue=uo(n.blue,s.blue,r),i.alpha=q(n.alpha,s.alpha,r),nn.transform(i))},na=new Set(["none","hidden"]);function lx(t,e){return na.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function cx(t,e){return n=>q(t,e,n)}function Nl(t){return typeof t=="number"?cx:typeof t=="string"?Al(t)?ar:ne.test(t)?Nu:dx:Array.isArray(t)?sm:typeof t=="object"?ne.test(t)?Nu:ux:ar}function sm(t,e){const n=[...t],s=n.length,i=t.map((r,o)=>Nl(r)(r,e[o]));return r=>{for(let o=0;o<s;o++)n[o]=i[o](r);return n}}function ux(t,e){const n={...t,...e},s={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(s[i]=Nl(t[i])(t[i],e[i]));return i=>{for(const r in s)n[r]=s[r](i);return n}}function hx(t,e){const n=[],s={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const r=e.types[i],o=t.indexes[r][s[r]],a=t.values[o]??0;n[i]=a,s[r]++}return n}const dx=(t,e)=>{const n=ze.createTransformer(e),s=jn(t),i=jn(e);return s.indexes.var.length===i.indexes.var.length&&s.indexes.color.length===i.indexes.color.length&&s.indexes.number.length>=i.indexes.number.length?na.has(t)&&!i.values.length||na.has(e)&&!s.values.length?lx(t,e):Zs(sm(hx(s,i),i.values),n):ar(t,e)};function im(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?q(t,e,n):Nl(t)(t,e)}const fx=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>$.update(e,n),stop:()=>Ht(e),now:()=>he.isProcessing?he.timestamp:_e.now()}},rm=(t,e,n=10)=>{let s="";const i=Math.max(Math.round(e/n),2);for(let r=0;r<i;r++)s+=Math.round(t(r/(i-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},lr=2e4;function Ml(t){let e=0;const n=50;let s=t.next(e);for(;!s.done&&e<lr;)e+=n,s=t.next(e);return e>=lr?1/0:e}function px(t,e=100,n){const s=n({...t,keyframes:[0,e]}),i=Math.min(Ml(s),lr);return{type:"keyframes",ease:r=>s.next(i*r).value/e,duration:Oe(i)}}const ee={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function sa(t,e){return t*Math.sqrt(1-e*e)}const mx=12;function gx(t,e,n){let s=n;for(let i=1;i<mx;i++)s=s-t(s)/e(s);return s}const ho=.001;function yx({duration:t=ee.duration,bounce:e=ee.bounce,velocity:n=ee.velocity,mass:s=ee.mass}){let i,r,o=1-e;o=ot(ee.minDamping,ee.maxDamping,o),t=ot(ee.minDuration,ee.maxDuration,Oe(t)),o<1?(i=c=>{const u=c*o,h=u*t,d=u-n,f=sa(c,o),m=Math.exp(-h);return ho-d/f*m},r=c=>{const h=c*o*t,d=h*n+n,f=Math.pow(o,2)*Math.pow(c,2)*t,m=Math.exp(-h),y=sa(Math.pow(c,2),o);return(-i(c)+ho>0?-1:1)*((d-f)*m)/y}):(i=c=>{const u=Math.exp(-c*t),h=(c-n)*t+1;return-ho+u*h},r=c=>{const u=Math.exp(-c*t),h=(n-c)*(t*t);return u*h});const a=5/t,l=gx(i,r,a);if(t=Ie(t),isNaN(l))return{stiffness:ee.stiffness,damping:ee.damping,duration:t};{const c=Math.pow(l,2)*s;return{stiffness:c,damping:o*2*Math.sqrt(s*c),duration:t}}}const _x=["duration","bounce"],vx=["stiffness","damping","mass"];function Mu(t,e){return e.some(n=>t[n]!==void 0)}function wx(t){let e={velocity:ee.velocity,stiffness:ee.stiffness,damping:ee.damping,mass:ee.mass,isResolvedFromDuration:!1,...t};if(!Mu(t,vx)&&Mu(t,_x))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,s=2*Math.PI/(n*1.2),i=s*s,r=2*ot(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:ee.mass,stiffness:i,damping:r}}else{const n=yx({...t,velocity:0});e={...e,...n,mass:ee.mass},e.isResolvedFromDuration=!0}return e}function cr(t=ee.visualDuration,e=ee.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:s,restDelta:i}=n;const r=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:r},{stiffness:l,damping:c,mass:u,duration:h,velocity:d,isResolvedFromDuration:f}=wx({...n,velocity:-Oe(n.velocity||0)}),m=d||0,y=c/(2*Math.sqrt(l*u)),g=o-r,_=Oe(Math.sqrt(l/u)),b=Math.abs(g)<5;s||(s=b?ee.restSpeed.granular:ee.restSpeed.default),i||(i=b?ee.restDelta.granular:ee.restDelta.default);let T,C,A,V,U,E;if(y<1)A=sa(_,y),V=(m+y*_*g)/A,T=R=>{const H=Math.exp(-y*_*R);return o-H*(V*Math.sin(A*R)+g*Math.cos(A*R))},U=y*_*V+g*A,E=y*_*g-V*A,C=R=>Math.exp(-y*_*R)*(U*Math.sin(A*R)+E*Math.cos(A*R));else if(y===1){T=H=>o-Math.exp(-_*H)*(g+(m+_*g)*H);const R=m+_*g;C=H=>Math.exp(-_*H)*(_*R*H-m)}else{const R=_*Math.sqrt(y*y-1);T=be=>{const fe=Math.exp(-y*_*be),te=Math.min(R*be,300);return o-fe*((m+y*_*g)*Math.sinh(te)+R*g*Math.cosh(te))/R};const H=(m+y*_*g)/R,Z=y*_*H-g*R,Pe=y*_*g-H*R;C=be=>{const fe=Math.exp(-y*_*be),te=Math.min(R*be,300);return fe*(Z*Math.sinh(te)+Pe*Math.cosh(te))}}const M={calculatedDuration:f&&h||null,velocity:R=>Ie(C(R)),next:R=>{if(!f&&y<1){const Z=Math.exp(-y*_*R),Pe=Math.sin(A*R),be=Math.cos(A*R),fe=o-Z*(V*Pe+g*be),te=Ie(Z*(U*Pe+E*be));return a.done=Math.abs(te)<=s&&Math.abs(o-fe)<=i,a.value=a.done?o:fe,a}const H=T(R);if(f)a.done=R>=h;else{const Z=Ie(C(R));a.done=Math.abs(Z)<=s&&Math.abs(o-H)<=i}return a.value=a.done?o:H,a},toString:()=>{const R=Math.min(Ml(M),lr),H=rm(Z=>M.next(R*Z).value,R,30);return R+"ms "+H},toTransition:()=>{}};return M}cr.applyToOptions=t=>{const e=px(t,100,cr);return t.ease=e.ease,t.duration=Ie(e.duration),t.type="keyframes",t};const bx=5;function om(t,e,n){const s=Math.max(e-bx,0);return jp(n-t(s),e-s)}function ia({keyframes:t,velocity:e=0,power:n=.8,timeConstant:s=325,bounceDamping:i=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=t[0],d={done:!1,value:h},f=E=>a!==void 0&&E<a||l!==void 0&&E>l,m=E=>a===void 0?l:l===void 0||Math.abs(a-E)<Math.abs(l-E)?a:l;let y=n*e;const g=h+y,_=o===void 0?g:o(g);_!==g&&(y=_-h);const b=E=>-y*Math.exp(-E/s),T=E=>_+b(E),C=E=>{const M=b(E),R=T(E);d.done=Math.abs(M)<=c,d.value=d.done?_:R};let A,V;const U=E=>{f(d.value)&&(A=E,V=cr({keyframes:[d.value,m(d.value)],velocity:om(T,E,d.value),damping:i,stiffness:r,restDelta:c,restSpeed:u}))};return U(0),{calculatedDuration:null,next:E=>{let M=!1;return!V&&A===void 0&&(M=!0,C(E),U(E)),A!==void 0&&E>=A?V.next(E-A):(!M&&C(E),d)}}}function Ex(t,e,n){const s=[],i=n||Wt.mix||im,r=t.length-1;for(let o=0;o<r;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Fe:e;a=Zs(l,a)}s.push(a)}return s}function Tx(t,e,{clamp:n=!0,ease:s,mixer:i}={}){const r=t.length;if(xl(r===e.length),r===1)return()=>e[0];if(r===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[r-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=Ex(e,s,i),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let h=0;if(l>1)for(;h<t.length-2&&!(u<t[h+1]);h++);const d=Ms(t[h],t[h+1],u);return a[h](d)};return n?u=>c(ot(t[0],t[r-1],u)):c}function Cx(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const i=Ms(0,e,s);t.push(q(n,1,i))}}function xx(t){const e=[0];return Cx(e,t.length-1),e}function Ix(t,e){return t.map(n=>n*e)}function Sx(t,e){return t.map(()=>e||qp).splice(0,t.length-1)}function vs({duration:t=300,keyframes:e,times:n,ease:s="easeInOut"}){const i=OC(s)?s.map(Su):Su(s),r={done:!1,value:e[0]},o=Ix(n&&n.length===e.length?n:xx(e),t),a=Tx(o,e,{ease:Array.isArray(i)?i:Sx(e,i)});return{calculatedDuration:t,next:l=>(r.value=a(l),r.done=l>=t,r)}}const kx=t=>t!==null;function Br(t,{repeat:e,repeatType:n="loop"},s,i=1){const r=t.filter(kx),a=i<0||e&&n!=="loop"&&e%2===1?0:r.length-1;return!a||s===void 0?r[a]:s}const Ax={decay:ia,inertia:ia,tween:vs,keyframes:vs,spring:cr};function am(t){typeof t.type=="string"&&(t.type=Ax[t.type])}class Dl{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const Px=t=>t/100;class ur extends Dl{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var s,i;const{motionValue:n}=this.options;n&&n.updatedAt!==_e.now()&&this.tick(_e.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(s=this.options).onStop)==null||i.call(s))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;am(e);const{type:n=vs,repeat:s=0,repeatDelay:i=0,repeatType:r,velocity:o=0}=e;let{keyframes:a}=e;const l=n||vs;l!==vs&&typeof a[0]!="number"&&(this.mixKeyframes=Zs(Px,im(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});r==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Ml(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(s+1)-i,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:s,totalDuration:i,mixKeyframes:r,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return s.next(0);const{delay:c=0,keyframes:u,repeat:h,repeatType:d,repeatDelay:f,type:m,onUpdate:y,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const _=this.currentTime-c*(this.playbackSpeed>=0?1:-1),b=this.playbackSpeed>=0?_<0:_>i;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let T=this.currentTime,C=s;if(h){const E=Math.min(this.currentTime,i)/a;let M=Math.floor(E),R=E%1;!R&&E>=1&&(R=1),R===1&&M--,M=Math.min(M,h+1),!!(M%2)&&(d==="reverse"?(R=1-R,f&&(R-=f/a)):d==="mirror"&&(C=o)),T=ot(0,1,R)*a}let A;b?(this.delayState.value=u[0],A=this.delayState):A=C.next(T),r&&!b&&(A.value=r(A.value));let{done:V}=A;!b&&l!==null&&(V=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&V);return U&&m!==ia&&(A.value=Br(u,this.options,g,this.speed)),y&&y(A.value),U&&this.finish(),A}then(e,n){return this.finished.then(e,n)}get duration(){return Oe(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Oe(e)}get time(){return Oe(this.currentTime)}set time(e){e=Ie(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return om(s=>this.generator.next(s).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(_e.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Oe(this.currentTime))}play(){var i,r;if(this.isStopped)return;const{driver:e=fx,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(r=(i=this.options).onPlay)==null||r.call(i);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(_e.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function Rx(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const sn=t=>t*180/Math.PI,ra=t=>{const e=sn(Math.atan2(t[1],t[0]));return oa(e)},Nx={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:ra,rotateZ:ra,skewX:t=>sn(Math.atan(t[1])),skewY:t=>sn(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},oa=t=>(t=t%360,t<0&&(t+=360),t),Du=ra,Ou=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Lu=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Mx={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ou,scaleY:Lu,scale:t=>(Ou(t)+Lu(t))/2,rotateX:t=>oa(sn(Math.atan2(t[6],t[5]))),rotateY:t=>oa(sn(Math.atan2(-t[2],t[0]))),rotateZ:Du,rotate:Du,skewX:t=>sn(Math.atan(t[4])),skewY:t=>sn(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function aa(t){return t.includes("scale")?1:0}function la(t,e){if(!t||t==="none")return aa(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,i;if(n)s=Mx,i=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=Nx,i=a}if(!i)return aa(e);const r=s[e],o=i[1].split(",").map(Ox);return typeof r=="function"?r(o):o[r]}const Dx=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return la(n,e)};function Ox(t){return parseFloat(t.trim())}const Zn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],es=new Set(Zn),Fu=t=>t===Jn||t===k,Lx=new Set(["x","y","z"]),Fx=Zn.filter(t=>!Lx.has(t));function Vx(t){const e=[];return Fx.forEach(n=>{const s=t.getValue(n);s!==void 0&&(e.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),e}const Rt={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:s})=>{const i=t.max-t.min;return s==="border-box"?i:i-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:s})=>{const i=t.max-t.min;return s==="border-box"?i:i-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>la(e,"x"),y:(t,{transform:e})=>la(e,"y")};Rt.translateX=Rt.x;Rt.translateY=Rt.y;const on=new Set;let ca=!1,ua=!1,ha=!1;function lm(){if(ua){const t=Array.from(on).filter(s=>s.needsMeasurement),e=new Set(t.map(s=>s.element)),n=new Map;e.forEach(s=>{const i=Vx(s);i.length&&(n.set(s,i),s.render())}),t.forEach(s=>s.measureInitialState()),e.forEach(s=>{s.render();const i=n.get(s);i&&i.forEach(([r,o])=>{var a;(a=s.getValue(r))==null||a.set(o)})}),t.forEach(s=>s.measureEndState()),t.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}ua=!1,ca=!1,on.forEach(t=>t.complete(ha)),on.clear()}function cm(){on.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ua=!0)})}function jx(){ha=!0,cm(),lm(),ha=!1}class Ol{constructor(e,n,s,i,r,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=s,this.motionValue=i,this.element=r,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(on.add(this),ca||(ca=!0,$.read(cm),$.resolveKeyframes(lm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:s,motionValue:i}=this;if(e[0]===null){const r=i==null?void 0:i.get(),o=e[e.length-1];if(r!==void 0)e[0]=r;else if(s&&n){const a=s.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),i&&r===void 0&&i.set(e[0])}Rx(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),on.delete(this)}cancel(){this.state==="scheduled"&&(on.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Bx=t=>t.startsWith("--");function um(t,e,n){Bx(e)?t.style.setProperty(e,n):t.style[e]=n}const Ux={};function hm(t,e){const n=Vp(t);return()=>Ux[e]??n()}const Wx=hm(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),dm=hm(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),hs=([t,e,n,s])=>`cubic-bezier(${t}, ${e}, ${n}, ${s})`,Vu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:hs([0,.65,.55,1]),circOut:hs([.55,0,1,.45]),backIn:hs([.31,.01,.66,-.59]),backOut:hs([.33,1.53,.69,.99])};function fm(t,e){if(t)return typeof t=="function"?dm()?rm(t,e):"ease-out":Yp(t)?hs(t):Array.isArray(t)?t.map(n=>fm(n,e)||Vu.easeOut):Vu[t]}function Hx(t,e,n,{delay:s=0,duration:i=300,repeat:r=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const h=fm(a,i);Array.isArray(h)&&(u.easing=h);const d={delay:s,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"};return c&&(d.pseudoElement=c),t.animate(u,d)}function pm(t){return typeof t=="function"&&"applyToOptions"in t}function zx({type:t,...e}){return pm(t)&&dm()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class mm extends Dl{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:s,keyframes:i,pseudoElement:r,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!r,this.allowFlatten=o,this.options=e,xl(typeof e.type!="string");const c=zx(e);this.animation=Hx(n,s,i,c,r),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const u=Br(i,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(u),um(n,s,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,s,i;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((i=(s=this.animation).commitStyles)==null||i.call(s))}get duration(){var n,s;const e=((s=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:s.call(n).duration)||0;return Oe(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Oe(e)}get time(){return Oe(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ie(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:s,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Wx()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),s&&(this.animation.rangeEnd=s),Fe):i(this)}}const gm={anticipate:$p,backInOut:zp,circInOut:Kp};function $x(t){return t in gm}function Gx(t){typeof t.ease=="string"&&$x(t.ease)&&(t.ease=gm[t.ease])}const fo=10;class Kx extends mm{constructor(e){Gx(e),am(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:s,onComplete:i,element:r,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new ur({...o,autoplay:!1}),l=Math.max(fo,_e.now()-this.startTime),c=ot(0,fo,l-fo),u=a.sample(l).value,{name:h}=this.options;r&&h&&um(r,h,u),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,u,c),a.stop()}}const ju=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ze.test(t)||t==="0")&&!t.startsWith("url("));function qx(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function Yx(t,e,n,s){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const r=t[t.length-1],o=ju(i,e),a=ju(r,e);return!o||!a?!1:qx(t)||(n==="spring"||pm(n))&&s}function da(t){t.duration=0,t.type="keyframes"}const ym=new Set(["opacity","clipPath","filter","transform"]),Qx=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Xx(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&Qx.test(t[e]))return!0;return!1}const Jx=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Zx=Vp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function eI(t){var h;const{motionValue:e,name:n,repeatDelay:s,repeatType:i,damping:r,type:o,keyframes:a}=t;if(!(((h=e==null?void 0:e.owner)==null?void 0:h.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=e.owner.getProps();return Zx()&&n&&(ym.has(n)||Jx.has(n)&&Xx(a))&&(n!=="transform"||!u)&&!c&&!s&&i!=="mirror"&&r!==0&&o!=="inertia"}const tI=40;class nI extends Dl{constructor({autoplay:e=!0,delay:n=0,type:s="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...h}){var m;super(),this.stop=()=>{var y,g;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(g=this.keyframeResolver)==null||g.cancel()},this.createdAt=_e.now();const d={autoplay:e,delay:n,type:s,repeat:i,repeatDelay:r,repeatType:o,name:l,motionValue:c,element:u,...h},f=(u==null?void 0:u.KeyframeResolver)||Ol;this.keyframeResolver=new f(a,(y,g,_)=>this.onKeyframesResolved(y,g,d,!_),l,c,u),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(e,n,s,i){var _,b;this.keyframeResolver=void 0;const{name:r,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=s;this.resolvedAt=_e.now();let h=!0;Yx(e,r,o,a)||(h=!1,(Wt.instantAnimations||!l)&&(u==null||u(Br(e,s,n))),e[0]=e[e.length-1],da(s),s.repeat=0);const f={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>tI?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:e},m=h&&!c&&eI(f),y=(b=(_=f.motionValue)==null?void 0:_.owner)==null?void 0:b.current;let g;if(m)try{g=new Kx({...f,element:y})}catch{g=new ur(f)}else g=new ur(f);g.finished.then(()=>{this.notifyFinished()}).catch(Fe),this.pendingTimeline&&(this.stopTimeline=g.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=g}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),jx()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function _m(t,e,n,s=0,i=1){const r=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*s;return typeof n=="function"?n(r,o):i===1?r*s:a-r*s}const sI=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function iI(t){const e=sI.exec(t);if(!e)return[,];const[,n,s,i]=e;return[`--${n??s}`,i]}function vm(t,e,n=1){const[s,i]=iI(t);if(!s)return;const r=window.getComputedStyle(e).getPropertyValue(s);if(r){const o=r.trim();return Op(o)?parseFloat(o):o}return Al(i)?vm(i,e,n+1):i}const rI={type:"spring",stiffness:500,damping:25,restSpeed:10},oI=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),aI={type:"keyframes",duration:.8},lI={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},cI=(t,{keyframes:e})=>e.length>2?aI:es.has(t)?t.startsWith("scale")?oI(e[1]):rI:lI;function wm(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...s}=t;return{...e,...s}}return t}function Ll(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?wm(n,t):n}const uI=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function hI(t){for(const e in t)if(!uI.has(e))return!0;return!1}const Fl=(t,e,n,s={},i,r)=>o=>{const a=Ll(s,t)||{},l=a.delay||s.delay||0;let{elapsed:c=0}=s;c=c-Ie(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:r?void 0:i};hI(a)||Object.assign(u,cI(t,u)),u.duration&&(u.duration=Ie(u.duration)),u.repeatDelay&&(u.repeatDelay=Ie(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(da(u),u.delay===0&&(h=!0)),(Wt.instantAnimations||Wt.skipAnimations||i!=null&&i.shouldSkipAnimations)&&(h=!0,da(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,h&&!r&&e.get()!==void 0){const d=Br(u.keyframes,a);if(d!==void 0){$.update(()=>{u.onUpdate(d),u.onComplete()});return}}return a.isSync?new ur(u):new nI(u)};function Bu(t){const e=[{},{}];return t==null||t.values.forEach((n,s)=>{e[0][s]=n.get(),e[1][s]=n.getVelocity()}),e}function Vl(t,e,n,s){if(typeof e=="function"){const[i,r]=Bu(s);e=e(n!==void 0?n:t.custom,i,r)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,r]=Bu(s);e=e(n!==void 0?n:t.custom,i,r)}return e}function an(t,e,n){const s=t.getProps();return Vl(s,e,n!==void 0?n:s.custom,t)}const bm=new Set(["width","height","top","left","right","bottom",...Zn]),Uu=30,dI=t=>!isNaN(parseFloat(t));class fI{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var r;const i=_e.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((r=this.events.change)==null||r.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=_e.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=dI(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Il);const s=this.events[e].add(n);return e==="change"?()=>{s(),$.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-s}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=_e.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Uu)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Uu);return jp(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Bn(t,e){return new fI(t,e)}const fa=t=>Array.isArray(t);function pI(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Bn(n))}function mI(t){return fa(t)?t[t.length-1]||0:t}function gI(t,e){const n=an(t,e);let{transitionEnd:s={},transition:i={},...r}=n||{};r={...r,...s};for(const o in r){const a=mI(r[o]);pI(t,o,a)}}const de=t=>!!(t&&t.getVelocity);function yI(t){return!!(de(t)&&t.add)}function pa(t,e){const n=t.getValue("willChange");if(yI(n))return n.add(e);if(!n&&Wt.WillChange){const s=new Wt.WillChange("auto");t.addValue("willChange",s),s.add(e)}}function jl(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const _I="framerAppearId",Em="data-"+jl(_I);function Tm(t){return t.props[Em]}function vI({protectedKeys:t,needsAnimating:e},n){const s=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,s}function Cm(t,e,{delay:n=0,transitionOverride:s,type:i}={}){let{transition:r,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();r=r?wm(r,l):l;const c=r==null?void 0:r.reduceMotion;s&&(r=s);const u=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const d in a){const f=t.getValue(d,t.latestValues[d]??null),m=a[d];if(m===void 0||h&&vI(h,d))continue;const y={delay:n,...Ll(r||{},d)},g=f.get();if(g!==void 0&&!f.isAnimating()&&!Array.isArray(m)&&m===g&&!y.velocity){$.update(()=>f.set(m));continue}let _=!1;if(window.MotionHandoffAnimation){const C=Tm(t);if(C){const A=window.MotionHandoffAnimation(C,d,$);A!==null&&(y.startTime=A,_=!0)}}pa(t,d);const b=c??t.shouldReduceMotion;f.start(Fl(d,f,m,b&&bm.has(d)?{type:!1}:y,t,_));const T=f.animation;T&&u.push(T)}if(o){const d=()=>$.update(()=>{o&&gI(t,o)});u.length?Promise.all(u).then(d):d()}return u}function ma(t,e,n={}){var l;const s=an(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=t.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(i=n.transitionOverride);const r=s?()=>Promise.all(Cm(t,s,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=i;return wI(t,e,c,u,h,d,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,u]=a==="beforeChildren"?[r,o]:[o,r];return c().then(()=>u())}else return Promise.all([r(),o(n.delay)])}function wI(t,e,n=0,s=0,i=0,r=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(ma(l,e,{...o,delay:n+(typeof s=="function"?0:s)+_m(t.variantChildren,l,s,i,r)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function bI(t,e,n={}){t.notify("AnimationStart",e);let s;if(Array.isArray(e)){const i=e.map(r=>ma(t,r,n));s=Promise.all(i)}else if(typeof e=="string")s=ma(t,e,n);else{const i=typeof e=="function"?an(t,e,n.custom):e;s=Promise.all(Cm(t,i,n))}return s.then(()=>{t.notify("AnimationComplete",e)})}const EI={test:t=>t==="auto",parse:t=>t},xm=t=>e=>e.test(t),Im=[Jn,k,st,Ct,qC,KC,EI],Wu=t=>Im.find(xm(t));function TI(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Fp(t):!0}const CI=new Set(["brightness","contrast","saturate","opacity"]);function xI(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[s]=n.match(Pl)||[];if(!s)return t;const i=n.replace(s,"");let r=CI.has(e)?1:0;return s!==n&&(r*=100),e+"("+r+i+")"}const II=/\b([a-z-]*)\(.*?\)/gu,ga={...ze,getAnimatableNone:t=>{const e=t.match(II);return e?e.map(xI).join(" "):t}},ya={...ze,getAnimatableNone:t=>{const e=ze.parse(t);return ze.createTransformer(t)(e.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},Hu={...Jn,transform:Math.round},SI={rotate:Ct,rotateX:Ct,rotateY:Ct,rotateZ:Ct,scale:pi,scaleX:pi,scaleY:pi,scaleZ:pi,skew:Ct,skewX:Ct,skewY:Ct,distance:k,translateX:k,translateY:k,translateZ:k,x:k,y:k,z:k,perspective:k,transformPerspective:k,opacity:Ds,originX:Au,originY:Au,originZ:k},Bl={borderWidth:k,borderTopWidth:k,borderRightWidth:k,borderBottomWidth:k,borderLeftWidth:k,borderRadius:k,borderTopLeftRadius:k,borderTopRightRadius:k,borderBottomRightRadius:k,borderBottomLeftRadius:k,width:k,maxWidth:k,height:k,maxHeight:k,top:k,right:k,bottom:k,left:k,inset:k,insetBlock:k,insetBlockStart:k,insetBlockEnd:k,insetInline:k,insetInlineStart:k,insetInlineEnd:k,padding:k,paddingTop:k,paddingRight:k,paddingBottom:k,paddingLeft:k,paddingBlock:k,paddingBlockStart:k,paddingBlockEnd:k,paddingInline:k,paddingInlineStart:k,paddingInlineEnd:k,margin:k,marginTop:k,marginRight:k,marginBottom:k,marginLeft:k,marginBlock:k,marginBlockStart:k,marginBlockEnd:k,marginInline:k,marginInlineStart:k,marginInlineEnd:k,fontSize:k,backgroundPositionX:k,backgroundPositionY:k,...SI,zIndex:Hu,fillOpacity:Ds,strokeOpacity:Ds,numOctaves:Hu},kI={...Bl,color:ne,backgroundColor:ne,outlineColor:ne,fill:ne,stroke:ne,borderColor:ne,borderTopColor:ne,borderRightColor:ne,borderBottomColor:ne,borderLeftColor:ne,filter:ga,WebkitFilter:ga,mask:ya,WebkitMask:ya},Sm=t=>kI[t],AI=new Set([ga,ya]);function km(t,e){let n=Sm(t);return AI.has(n)||(n=ze),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const PI=new Set(["auto","none","0"]);function RI(t,e,n){let s=0,i;for(;s<t.length&&!i;){const r=t[s];typeof r=="string"&&!PI.has(r)&&jn(r).values.length&&(i=t[s]),s++}if(i&&n)for(const r of e)t[r]=km(n,i)}class NI extends Ol{constructor(e,n,s,i,r){super(e,n,s,i,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let h=e[u];if(typeof h=="string"&&(h=h.trim(),Al(h))){const d=vm(h,n.current);d!==void 0&&(e[u]=d),u===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!bm.has(s)||e.length!==2)return;const[i,r]=e,o=Wu(i),a=Wu(r),l=ku(i),c=ku(r);if(l!==c&&Rt[s]){this.needsMeasurement=!0;return}if(o!==a)if(Fu(o)&&Fu(a))for(let u=0;u<e.length;u++){const h=e[u];typeof h=="string"&&(e[u]=parseFloat(h))}else Rt[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,s=[];for(let i=0;i<e.length;i++)(e[i]===null||TI(e[i]))&&s.push(i);s.length&&RI(e,s,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:s}=this;if(!e||!e.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Rt[s](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(s,i).jump(i,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:s}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const r=s.length-1,o=s[r];s[r]=Rt[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Am(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let s=document;const i=(n==null?void 0:n[t])??s.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t).filter(s=>s!=null)}const Pm=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function Si(t){return Lp(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Ul}=Qp(queueMicrotask,!1),Be={x:!1,y:!1};function Rm(){return Be.x||Be.y}function MI(t){return t==="x"||t==="y"?Be[t]?null:(Be[t]=!0,()=>{Be[t]=!1}):Be.x||Be.y?null:(Be.x=Be.y=!0,()=>{Be.x=Be.y=!1})}function Nm(t,e){const n=Am(t),s=new AbortController,i={passive:!0,...e,signal:s.signal};return[n,i,()=>s.abort()]}function DI(t){return!(t.pointerType==="touch"||Rm())}function OI(t,e,n={}){const[s,i,r]=Nm(t,n);return s.forEach(o=>{let a=!1,l=!1,c;const u=()=>{o.removeEventListener("pointerleave",m)},h=g=>{c&&(c(g),c=void 0),u()},d=g=>{a=!1,window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),l&&(l=!1,h(g))},f=()=>{a=!0,window.addEventListener("pointerup",d,i),window.addEventListener("pointercancel",d,i)},m=g=>{if(g.pointerType!=="touch"){if(a){l=!0;return}h(g)}},y=g=>{if(!DI(g))return;l=!1;const _=e(o,g);typeof _=="function"&&(c=_,o.addEventListener("pointerleave",m,i))};o.addEventListener("pointerenter",y,i),o.addEventListener("pointerdown",f,i)}),r}const Mm=(t,e)=>e?t===e?!0:Mm(t,e.parentElement):!1,Wl=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,LI=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function FI(t){return LI.has(t.tagName)||t.isContentEditable===!0}const VI=new Set(["INPUT","SELECT","TEXTAREA"]);function jI(t){return VI.has(t.tagName)||t.isContentEditable===!0}const ki=new WeakSet;function zu(t){return e=>{e.key==="Enter"&&t(e)}}function po(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const BI=(t,e)=>{const n=t.currentTarget;if(!n)return;const s=zu(()=>{if(ki.has(n))return;po(n,"down");const i=zu(()=>{po(n,"up")}),r=()=>po(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",r,e)});n.addEventListener("keydown",s,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),e)};function $u(t){return Wl(t)&&!Rm()}const Gu=new WeakSet;function UI(t,e,n={}){const[s,i,r]=Nm(t,n),o=a=>{const l=a.currentTarget;if(!$u(a)||Gu.has(a))return;ki.add(l),n.stopPropagation&&Gu.add(a);const c=e(l,a),u=(f,m)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",d),ki.has(l)&&ki.delete(l),$u(f)&&typeof c=="function"&&c(f,{success:m})},h=f=>{u(f,l===window||l===document||n.useGlobalTarget||Mm(l,f.target))},d=f=>{u(f,!1)};window.addEventListener("pointerup",h,i),window.addEventListener("pointercancel",d,i)};return s.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),Si(a)&&(a.addEventListener("focus",c=>BI(c,i)),!FI(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),r}function Hl(t){return Lp(t)&&"ownerSVGElement"in t}const Ai=new WeakMap;let xt;const Dm=(t,e,n)=>(s,i)=>i&&i[0]?i[0][t+"Size"]:Hl(s)&&"getBBox"in s?s.getBBox()[e]:s[n],WI=Dm("inline","width","offsetWidth"),HI=Dm("block","height","offsetHeight");function zI({target:t,borderBoxSize:e}){var n;(n=Ai.get(t))==null||n.forEach(s=>{s(t,{get width(){return WI(t,e)},get height(){return HI(t,e)}})})}function $I(t){t.forEach(zI)}function GI(){typeof ResizeObserver>"u"||(xt=new ResizeObserver($I))}function KI(t,e){xt||GI();const n=Am(t);return n.forEach(s=>{let i=Ai.get(s);i||(i=new Set,Ai.set(s,i)),i.add(e),xt==null||xt.observe(s)}),()=>{n.forEach(s=>{const i=Ai.get(s);i==null||i.delete(e),i!=null&&i.size||xt==null||xt.unobserve(s)})}}const Pi=new Set;let Cn;function qI(){Cn=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Pi.forEach(e=>e(t))},window.addEventListener("resize",Cn)}function YI(t){return Pi.add(t),Cn||qI(),()=>{Pi.delete(t),!Pi.size&&typeof Cn=="function"&&(window.removeEventListener("resize",Cn),Cn=void 0)}}function Ku(t,e){return typeof t=="function"?YI(t):KI(t,e)}function QI(t){return Hl(t)&&t.tagName==="svg"}const XI=[...Im,ne,ze],JI=t=>XI.find(xm(t)),qu=()=>({translate:0,scale:1,origin:0,originPoint:0}),xn=()=>({x:qu(),y:qu()}),Yu=()=>({min:0,max:0}),ie=()=>({x:Yu(),y:Yu()}),ZI=new WeakMap;function Ur(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Os(t){return typeof t=="string"||Array.isArray(t)}const zl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],$l=["initial",...zl];function Wr(t){return Ur(t.animate)||$l.some(e=>Os(t[e]))}function Om(t){return!!(Wr(t)||t.variants)}function eS(t,e,n){for(const s in e){const i=e[s],r=n[s];if(de(i))t.addValue(s,i);else if(de(r))t.addValue(s,Bn(i,{owner:t}));else if(r!==i)if(t.hasValue(s)){const o=t.getValue(s);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(s);t.addValue(s,Bn(o!==void 0?o:i,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const _a={current:null},Lm={current:!1},tS=typeof window<"u";function nS(){if(Lm.current=!0,!!tS)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>_a.current=t.matches;t.addEventListener("change",e),e()}else _a.current=!1}const Qu=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let hr={};function Fm(t){hr=t}function sS(){return hr}class iS{scrapeMotionValuesFromProps(e,n,s){return{}}constructor({parent:e,props:n,presenceContext:s,reducedMotionConfig:i,skipAnimations:r,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ol,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=_e.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,$.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=s,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=r,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Wr(n),this.isVariantNode=Om(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const m=d[f];c[f]!==void 0&&de(m)&&m.set(c[f])}}mount(e){var n,s;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=e,ZI.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,r)=>this.bindToMotionValue(r,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Lm.current||nS(),this.shouldReduceMotion=_a.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Ht(this.notifyUpdate),Ht(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const s=this.features[n];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&ym.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:u}=n.accelerate,h=new mm({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Ie(u)}),d=o(h);this.valueSubscriptions.set(e,()=>{d(),h.cancel()});return}const s=es.has(e);s&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&$.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let r;typeof window<"u"&&window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),r&&r(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in hr){const n=hr[e];if(!n)continue;const{isEnabled:s,Feature:i}=n;if(!this.features[e]&&i&&s(this.props)&&(this.features[e]=new i(this)),this.features[e]){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ie()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<Qu.length;s++){const i=Qu[s];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const r="on"+i,o=e[r];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=eS(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const s=this.values.get(e);n!==s&&(s&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let s=this.values.get(e);return s===void 0&&n!==void 0&&(s=Bn(n===null?void 0:n,{owner:this}),this.addValue(e,s)),s}readValue(e,n){let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(Op(s)||Fp(s))?s=parseFloat(s):!JI(s)&&ze.test(n)&&(s=km(e,n)),this.setBaseTarget(e,de(s)?s.get():s)),de(s)?s.get():s}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var r;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const o=Vl(this.props,n,(r=this.presenceContext)==null?void 0:r.custom);o&&(s=o[e])}if(n&&s!==void 0)return s;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!de(i)?i:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Il),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Ul.render(this.render)}}class Vm extends iS{constructor(){super(...arguments),this.KeyframeResolver=NI}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const s=e.style;return s?s[n]:void 0}removeValueFromRenderState(e,{vars:n,style:s}){delete n[e],delete s[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;de(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class qt{constructor(e){this.isMounted=!1,this.node=e}update(){}}function jm({top:t,left:e,right:n,bottom:s}){return{x:{min:e,max:n},y:{min:t,max:s}}}function rS({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function oS(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),s=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function mo(t){return t===void 0||t===1}function va({scale:t,scaleX:e,scaleY:n}){return!mo(t)||!mo(e)||!mo(n)}function en(t){return va(t)||Bm(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Bm(t){return Xu(t.x)||Xu(t.y)}function Xu(t){return t&&t!=="0%"}function dr(t,e,n){const s=t-n,i=e*s;return n+i}function Ju(t,e,n,s,i){return i!==void 0&&(t=dr(t,i,s)),dr(t,n,s)+e}function wa(t,e=0,n=1,s,i){t.min=Ju(t.min,e,n,s,i),t.max=Ju(t.max,e,n,s,i)}function Um(t,{x:e,y:n}){wa(t.x,e.translate,e.scale,e.originPoint),wa(t.y,n.translate,n.scale,n.originPoint)}const Zu=.999999999999,eh=1.0000000000001;function aS(t,e,n,s=!1){var a;const i=n.length;if(!i)return;e.x=e.y=1;let r,o;for(let l=0;l<i;l++){r=n[l],o=r.projectionDelta;const{visualElement:c}=r.options;c&&c.props.style&&c.props.style.display==="contents"||(s&&r.options.layoutScroll&&r.scroll&&r!==r.root&&(Je(t.x,-r.scroll.offset.x),Je(t.y,-r.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Um(t,o)),s&&en(r.latestValues)&&Ri(t,r.latestValues,(a=r.layout)==null?void 0:a.layoutBox))}e.x<eh&&e.x>Zu&&(e.x=1),e.y<eh&&e.y>Zu&&(e.y=1)}function Je(t,e){t.min+=e,t.max+=e}function th(t,e,n,s,i=.5){const r=q(t.min,t.max,i);wa(t,e,n,r,s)}function nh(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Ri(t,e,n){const s=n??t;th(t.x,nh(e.x,s.x),e.scaleX,e.scale,e.originX),th(t.y,nh(e.y,s.y),e.scaleY,e.scale,e.originY)}function Wm(t,e){return jm(oS(t.getBoundingClientRect(),e))}function lS(t,e,n){const s=Wm(t,n),{scroll:i}=e;return i&&(Je(s.x,i.offset.x),Je(s.y,i.offset.y)),s}const cS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},uS=Zn.length;function hS(t,e,n){let s="",i=!0;for(let r=0;r<uS;r++){const o=Zn[r],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const c=parseFloat(a);l=o.startsWith("scale")?c===1:c===0}if(!l||n){const c=Pm(a,Bl[o]);if(!l){i=!1;const u=cS[o]||o;s+=`${u}(${c}) `}n&&(e[o]=c)}}return s=s.trim(),n?s=n(e,i?"":s):i&&(s="none"),s}function Gl(t,e,n){const{style:s,vars:i,transformOrigin:r}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(es.has(l)){o=!0;continue}else if(Jp(l)){i[l]=c;continue}else{const u=Pm(c,Bl[l]);l.startsWith("origin")?(a=!0,r[l]=u):s[l]=u}}if(e.transform||(o||n?s.transform=hS(e,t.transform,n):s.transform&&(s.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;s.transformOrigin=`${l} ${c} ${u}`}}function Hm(t,{style:e,vars:n},s,i){const r=t.style;let o;for(o in e)r[o]=e[o];i==null||i.applyProjectionStyles(r,s);for(o in n)r.setProperty(o,n[o])}function sh(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const as={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(k.test(t))t=parseFloat(t);else return t;const n=sh(t,e.target.x),s=sh(t,e.target.y);return`${n}% ${s}%`}},dS={correct:(t,{treeScale:e,projectionDelta:n})=>{const s=t,i=ze.parse(t);if(i.length>5)return s;const r=ze.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const c=q(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),r(i)}},ba={borderRadius:{...as,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:as,borderTopRightRadius:as,borderBottomLeftRadius:as,borderBottomRightRadius:as,boxShadow:dS};function zm(t,{layout:e,layoutId:n}){return es.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!ba[t]||t==="opacity")}function Kl(t,e,n){var o;const s=t.style,i=e==null?void 0:e.style,r={};if(!s)return r;for(const a in s)(de(s[a])||i&&de(i[a])||zm(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(r[a]=s[a]);return r}function fS(t){return window.getComputedStyle(t)}class pS extends Vm{constructor(){super(...arguments),this.type="html",this.renderInstance=Hm}readValueFromInstance(e,n){var s;if(es.has(n))return(s=this.projection)!=null&&s.isProjecting?aa(n):Dx(e,n);{const i=fS(e),r=(Jp(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Wm(e,n)}build(e,n,s){Gl(e,n,s.transformTemplate)}scrapeMotionValuesFromProps(e,n,s){return Kl(e,n,s)}}const mS={offset:"stroke-dashoffset",array:"stroke-dasharray"},gS={offset:"strokeDashoffset",array:"strokeDasharray"};function yS(t,e,n=1,s=0,i=!0){t.pathLength=1;const r=i?mS:gS;t[r.offset]=`${-s}`,t[r.array]=`${e} ${n}`}const _S=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function $m(t,{attrX:e,attrY:n,attrScale:s,pathLength:i,pathSpacing:r=1,pathOffset:o=0,...a},l,c,u){if(Gl(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:d}=t;h.transform&&(d.transform=h.transform,delete h.transform),(d.transform||h.transformOrigin)&&(d.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),d.transform&&(d.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete h.transformBox);for(const f of _S)h[f]!==void 0&&(d[f]=h[f],delete h[f]);e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),s!==void 0&&(h.scale=s),i!==void 0&&yS(h,i,r,o,!1)}const Gm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Km=t=>typeof t=="string"&&t.toLowerCase()==="svg";function vS(t,e,n,s){Hm(t,e,void 0,s);for(const i in e.attrs)t.setAttribute(Gm.has(i)?i:jl(i),e.attrs[i])}function qm(t,e,n){const s=Kl(t,e,n);for(const i in t)if(de(t[i])||de(e[i])){const r=Zn.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;s[r]=t[i]}return s}class wS extends Vm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ie}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(es.has(n)){const s=Sm(n);return s&&s.default||0}return n=Gm.has(n)?n:jl(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,s){return qm(e,n,s)}build(e,n,s){$m(e,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(e,n,s,i){vS(e,n,s,i)}mount(e){this.isSVGTag=Km(e.tagName),super.mount(e)}}const bS=$l.length;function Ym(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?Ym(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<bS;n++){const s=$l[n],i=t.props[s];(Os(i)||i===!1)&&(e[s]=i)}return e}function Qm(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let s=0;s<n;s++)if(e[s]!==t[s])return!1;return!0}const ES=[...zl].reverse(),TS=zl.length;function CS(t){return e=>Promise.all(e.map(({animation:n,options:s})=>bI(t,n,s)))}function xS(t){let e=CS(t),n=ih(),s=!0,i=!1;const r=c=>(u,h)=>{var f;const d=an(t,h,c==="exit"?(f=t.presenceContext)==null?void 0:f.custom:void 0);if(d){const{transition:m,transitionEnd:y,...g}=d;u={...u,...g,...y}}return u};function o(c){e=c(t)}function a(c){const{props:u}=t,h=Ym(t.parent)||{},d=[],f=new Set;let m={},y=1/0;for(let _=0;_<TS;_++){const b=ES[_],T=n[b],C=u[b]!==void 0?u[b]:h[b],A=Os(C),V=b===c?T.isActive:null;V===!1&&(y=_);let U=C===h[b]&&C!==u[b]&&A;if(U&&(s||i)&&t.manuallyAnimateOnMount&&(U=!1),T.protectedKeys={...m},!T.isActive&&V===null||!C&&!T.prevProp||Ur(C)||typeof C=="boolean")continue;if(b==="exit"&&T.isActive&&V!==!0){T.prevResolvedValues&&(m={...m,...T.prevResolvedValues});continue}const E=IS(T.prevProp,C);let M=E||b===c&&T.isActive&&!U&&A||_>y&&A,R=!1;const H=Array.isArray(C)?C:[C];let Z=H.reduce(r(b),{});V===!1&&(Z={});const{prevResolvedValues:Pe={}}=T,be={...Pe,...Z},fe=x=>{M=!0,f.has(x)&&(R=!0,f.delete(x)),T.needsAnimating[x]=!0;const me=t.getValue(x);me&&(me.liveStyle=!1)};for(const x in be){const me=Z[x],Ye=Pe[x];if(m.hasOwnProperty(x))continue;let ct=!1;fa(me)&&fa(Ye)?ct=!Qm(me,Ye):ct=me!==Ye,ct?me!=null?fe(x):f.add(x):me!==void 0&&f.has(x)?fe(x):T.protectedKeys[x]=!0}T.prevProp=C,T.prevResolvedValues=Z,T.isActive&&(m={...m,...Z}),(s||i)&&t.blockInitialAnimation&&(M=!1);const te=U&&E;M&&(!te||R)&&d.push(...H.map(x=>{const me={type:b};if(typeof x=="string"&&(s||i)&&!te&&t.manuallyAnimateOnMount&&t.parent){const{parent:Ye}=t,ct=an(Ye,x);if(Ye.enteringChildren&&ct){const{delayChildren:ts}=ct.transition||{};me.delay=_m(Ye.enteringChildren,t,ts)}}return{animation:x,options:me}}))}if(f.size){const _={};if(typeof u.initial!="boolean"){const b=an(t,Array.isArray(u.initial)?u.initial[0]:u.initial);b&&b.transition&&(_.transition=b.transition)}f.forEach(b=>{const T=t.getBaseTarget(b),C=t.getValue(b);C&&(C.liveStyle=!0),_[b]=T??null}),d.push({animation:_})}let g=!!d.length;return s&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(g=!1),s=!1,i=!1,g?e(d):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=t.variantChildren)==null||d.forEach(f=>{var m;return(m=f.animationState)==null?void 0:m.setActive(c,u)}),n[c].isActive=u;const h=a(c);for(const f in n)n[f].protectedKeys={};return h}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=ih(),i=!0}}}function IS(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Qm(e,t):!1}function Qt(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ih(){return{animate:Qt(!0),whileInView:Qt(),whileHover:Qt(),whileTap:Qt(),whileDrag:Qt(),whileFocus:Qt(),exit:Qt()}}function Ea(t,e){t.min=e.min,t.max=e.max}function je(t,e){Ea(t.x,e.x),Ea(t.y,e.y)}function rh(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const Xm=1e-4,SS=1-Xm,kS=1+Xm,Jm=.01,AS=0-Jm,PS=0+Jm;function ve(t){return t.max-t.min}function RS(t,e,n){return Math.abs(t-e)<=n}function oh(t,e,n,s=.5){t.origin=s,t.originPoint=q(e.min,e.max,t.origin),t.scale=ve(n)/ve(e),t.translate=q(n.min,n.max,t.origin)-t.originPoint,(t.scale>=SS&&t.scale<=kS||isNaN(t.scale))&&(t.scale=1),(t.translate>=AS&&t.translate<=PS||isNaN(t.translate))&&(t.translate=0)}function ws(t,e,n,s){oh(t.x,e.x,n.x,s?s.originX:void 0),oh(t.y,e.y,n.y,s?s.originY:void 0)}function ah(t,e,n,s=0){const i=s?q(n.min,n.max,s):n.min;t.min=i+e.min,t.max=t.min+ve(e)}function NS(t,e,n,s){ah(t.x,e.x,n.x,s==null?void 0:s.x),ah(t.y,e.y,n.y,s==null?void 0:s.y)}function lh(t,e,n,s=0){const i=s?q(n.min,n.max,s):n.min;t.min=e.min-i,t.max=t.min+ve(e)}function fr(t,e,n,s){lh(t.x,e.x,n.x,s==null?void 0:s.x),lh(t.y,e.y,n.y,s==null?void 0:s.y)}function ch(t,e,n,s,i){return t-=e,t=dr(t,1/n,s),i!==void 0&&(t=dr(t,1/i,s)),t}function MS(t,e=0,n=1,s=.5,i,r=t,o=t){if(st.test(e)&&(e=parseFloat(e),e=q(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=q(r.min,r.max,s);t===r&&(a-=e),t.min=ch(t.min,e,n,a,i),t.max=ch(t.max,e,n,a,i)}function uh(t,e,[n,s,i],r,o){MS(t,e[n],e[s],e[i],e.scale,r,o)}const DS=["x","scaleX","originX"],OS=["y","scaleY","originY"];function hh(t,e,n,s){uh(t.x,e,DS,n?n.x:void 0,s?s.x:void 0),uh(t.y,e,OS,n?n.y:void 0,s?s.y:void 0)}function dh(t){return t.translate===0&&t.scale===1}function Zm(t){return dh(t.x)&&dh(t.y)}function fh(t,e){return t.min===e.min&&t.max===e.max}function LS(t,e){return fh(t.x,e.x)&&fh(t.y,e.y)}function ph(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function eg(t,e){return ph(t.x,e.x)&&ph(t.y,e.y)}function mh(t){return ve(t.x)/ve(t.y)}function gh(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Xe(t){return[t("x"),t("y")]}function FS(t,e,n){let s="";const i=t.x.translate/e.x,r=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||r||o)&&(s=`translate3d(${i}px, ${r}px, ${o}px) `),(e.x!==1||e.y!==1)&&(s+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:d,skewX:f,skewY:m}=n;c&&(s=`perspective(${c}px) ${s}`),u&&(s+=`rotate(${u}deg) `),h&&(s+=`rotateX(${h}deg) `),d&&(s+=`rotateY(${d}deg) `),f&&(s+=`skewX(${f}deg) `),m&&(s+=`skewY(${m}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(s+=`scale(${a}, ${l})`),s||"none"}const tg=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],VS=tg.length,yh=t=>typeof t=="string"?parseFloat(t):t,_h=t=>typeof t=="number"||k.test(t);function jS(t,e,n,s,i,r){i?(t.opacity=q(0,n.opacity??1,BS(s)),t.opacityExit=q(e.opacity??1,0,US(s))):r&&(t.opacity=q(e.opacity??1,n.opacity??1,s));for(let o=0;o<VS;o++){const a=tg[o];let l=vh(e,a),c=vh(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||_h(l)===_h(c)?(t[a]=Math.max(q(yh(l),yh(c),s),0),(st.test(c)||st.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=q(e.rotate||0,n.rotate||0,s))}function vh(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const BS=ng(0,.5,Gp),US=ng(.5,.95,Fe);function ng(t,e,n){return s=>s<t?0:s>e?1:n(Ms(t,e,s))}function WS(t,e,n){const s=de(t)?t:Bn(t);return s.start(Fl("",s,e,n)),s.animation}function Ls(t,e,n,s={passive:!0}){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n)}const HS=(t,e)=>t.depth-e.depth;class zS{constructor(){this.children=[],this.isDirty=!1}add(e){Cl(this.children,e),this.isDirty=!0}remove(e){or(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(HS),this.isDirty=!1,this.children.forEach(e)}}function $S(t,e){const n=_e.now(),s=({timestamp:i})=>{const r=i-n;r>=e&&(Ht(s),t(r-e))};return $.setup(s,!0),()=>Ht(s)}function Ni(t){return de(t)?t.get():t}class GS{constructor(){this.members=[]}add(e){Cl(this.members,e);for(let n=this.members.length-1;n>=0;n--){const s=this.members[n];if(s===e||s===this.lead||s===this.prevLead)continue;const i=s.instance;(!i||i.isConnected===!1)&&!s.snapshot&&(or(this.members,s),s.unmount())}e.scheduleRender()}remove(e){if(or(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let s=this.members.indexOf(e)-1;s>=0;s--){const i=this.members[s];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(e,n){var i;const s=this.lead;if(e!==s&&(this.prevLead=s,this.lead=e,e.show(),s)){s.updateSnapshot(),e.scheduleRender();const{layoutDependency:r}=s.options,{layoutDependency:o}=e.options;(r===void 0||r!==o)&&(e.resumeFrom=s,n&&(s.preserveOpacity=!0),s.snapshot&&(e.snapshot=s.snapshot,e.snapshot.latestValues=s.animationValues||s.latestValues),(i=e.root)!=null&&i.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,s,i,r,o;(s=(n=e.options).onExitComplete)==null||s.call(n),(o=(i=e.resumingFrom)==null?void 0:(r=i.options).onExitComplete)==null||o.call(r)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Mi={hasAnimatedSinceResize:!0,hasEverUpdated:!1},go=["","X","Y","Z"],KS=1e3;let qS=0;function yo(t,e,n,s){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),s&&(s[t]=0))}function sg(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Tm(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:r}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",$,!(i||r))}const{parent:s}=t;s&&!s.hasCheckedOptimisedAppear&&sg(s)}function ig({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:s,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=qS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(XS),this.nodes.forEach(sk),this.nodes.forEach(ik),this.nodes.forEach(JS)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new zS)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Il),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Hl(o)&&!QI(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,h=0;const d=()=>this.root.updateBlockedByResize=!1;$.read(()=>{h=window.innerWidth}),t(o,()=>{const f=window.innerWidth;f!==h&&(h=f,this.root.updateBlockedByResize=!0,u&&u(),u=$S(d,250),Mi.hasAnimatedSinceResize&&(Mi.hasAnimatedSinceResize=!1,this.nodes.forEach(Eh)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:d,layout:f})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||c.getDefaultTransition()||ck,{onLayoutAnimationStart:y,onLayoutAnimationComplete:g}=c.getProps(),_=!this.targetLayout||!eg(this.targetLayout,f),b=!h&&d;if(this.options.layoutRoot||this.resumeFrom||b||h&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const T={...Ll(m,"layout"),onPlay:y,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(T.delay=0,T.type=!1),this.startAnimation(T),this.setAnimationOrigin(u,b)}else h||Eh(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=f})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ht(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(rk),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&sg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,(typeof h.latestValues.x=="string"||typeof h.latestValues.y=="string")&&(h.isLayoutDirty=!0),h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(ek),this.nodes.forEach(wh);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(bh);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(tk),this.nodes.forEach(nk),this.nodes.forEach(YS),this.nodes.forEach(QS)):this.nodes.forEach(bh),this.clearAllSnapshots();const a=_e.now();he.delta=ot(0,1e3/60,a-he.timestamp),he.timestamp=a,he.isProcessing=!0,ao.update.process(he),ao.preRender.process(he),ao.render.process(he),he.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ul.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ZS),this.sharedNodes.forEach(ok)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ve(this.snapshot.measuredBox.x)&&!ve(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ie()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=s(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Zm(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||en(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),uk(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return ie();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(hk))){const{scroll:u}=this.root;u&&(Je(a.x,u.offset.x),Je(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=ie();if(je(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:h,options:d}=u;u!==this.root&&h&&d.layoutScroll&&(h.wasRoot&&je(a,o),Je(a.x,h.offset.x),Je(a.y,h.offset.y))}return a}applyTransform(o,a=!1,l){var u,h;const c=l||ie();je(c,o);for(let d=0;d<this.path.length;d++){const f=this.path[d];!a&&f.options.layoutScroll&&f.scroll&&f!==f.root&&(Je(c.x,-f.scroll.offset.x),Je(c.y,-f.scroll.offset.y)),en(f.latestValues)&&Ri(c,f.latestValues,(u=f.layout)==null?void 0:u.layoutBox)}return en(this.latestValues)&&Ri(c,this.latestValues,(h=this.layout)==null?void 0:h.layoutBox),c}removeTransform(o){var l;const a=ie();je(a,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!en(u.latestValues))continue;let h;u.instance&&(va(u.latestValues)&&u.updateSnapshot(),h=ie(),je(h,u.measurePageBox())),hh(a,u.latestValues,(l=u.snapshot)==null?void 0:l.layoutBox,h)}return en(this.latestValues)&&hh(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==he.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var f;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(f=this.parent)!=null&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:h}=this.options;if(!this.layout||!(u||h))return;this.resolvedRelativeTargetAt=he.timestamp;const d=this.getClosestProjectingParent();d&&this.linkedParentVersion!==d.layoutVersion&&!d.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&d&&d.layout?this.createRelativeTarget(d,this.layout.layoutBox,d.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ie(),this.targetWithTransforms=ie()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),NS(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):je(this.target,this.layout.layoutBox),Um(this.target,this.targetDelta)):je(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?this.createRelativeTarget(d,this.target,d.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||va(this.parent.latestValues)||Bm(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ie(),this.relativeTargetOrigin=ie(),fr(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),je(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===he.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;je(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,d=this.treeScale.y;aS(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ie());const{target:f}=o;if(!f){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(rh(this.prevProjectionDelta.x,this.projectionDelta.x),rh(this.prevProjectionDelta.y,this.projectionDelta.y)),ws(this.projectionDelta,this.layoutCorrected,f,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==d||!gh(this.projectionDelta.x,this.prevProjectionDelta.x)||!gh(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",f))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=xn(),this.projectionDelta=xn(),this.projectionDeltaWithTransform=xn()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=xn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=ie(),f=l?l.source:void 0,m=this.layout?this.layout.source:void 0,y=f!==m,g=this.getStack(),_=!g||g.members.length<=1,b=!!(y&&!_&&this.options.crossfade===!0&&!this.path.some(lk));this.animationProgress=0;let T;this.mixTargetDelta=C=>{const A=C/1e3;Th(h.x,o.x,A),Th(h.y,o.y,A),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fr(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),ak(this.relativeTarget,this.relativeTargetOrigin,d,A),T&&LS(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=ie()),je(T,this.relativeTarget)),y&&(this.animationValues=u,jS(u,c,this.latestValues,A,b,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Ht(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$.update(()=>{Mi.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Bn(0)),this.motionValue.jump(0,!1),this.currentAnimation=WS(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(KS),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&rg(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ie();const h=ve(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const d=ve(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}je(a,l),Ri(a,u),ws(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new GS),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&yo("z",o,c,this.animationValues);for(let u=0;u<go.length;u++)yo(`rotate${go[u]}`,o,c,this.animationValues),yo(`skew${go[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Ni(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Ni(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!en(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let h=FS(this.projectionDeltaWithTransform,this.treeScale,u);l&&(h=l(u,h)),o.transform=h;const{x:d,y:f}=this.projectionDelta;o.transformOrigin=`${d.origin*100}% ${f.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const m in ba){if(u[m]===void 0)continue;const{correct:y,applyTo:g,isCSSVariable:_}=ba[m],b=h==="none"?u[m]:y(u[m],c);if(g){const T=g.length;for(let C=0;C<T;C++)o[g[C]]=b}else _?this.options.visualElement.renderState.vars[m]=b:o[m]=b}this.options.layoutId&&(o.pointerEvents=c===this?Ni(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(wh),this.root.sharedNodes.clear()}}}function YS(t){t.updateLayout()}function QS(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:i}=t.layout,{animationType:r}=t.options,o=e.source!==t.layout.source;if(r==="size")Xe(h=>{const d=o?e.measuredBox[h]:e.layoutBox[h],f=ve(d);d.min=s[h].min,d.max=d.min+f});else if(r==="x"||r==="y"){const h=r==="x"?"y":"x";Ea(o?e.measuredBox[h]:e.layoutBox[h],s[h])}else rg(r,e.layoutBox,s)&&Xe(h=>{const d=o?e.measuredBox[h]:e.layoutBox[h],f=ve(s[h]);d.max=d.min+f,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+f)});const a=xn();ws(a,s,e.layoutBox);const l=xn();o?ws(l,t.applyTransform(i,!0),e.measuredBox):ws(l,s,e.layoutBox);const c=!Zm(a);let u=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:f}=h;if(d&&f){const m=t.options.layoutAnchor||void 0,y=ie();fr(y,e.layoutBox,d.layoutBox,m);const g=ie();fr(g,s,f.layoutBox,m),eg(y,g)||(u=!0),h.options.layoutRoot&&(t.relativeTarget=g,t.relativeTargetOrigin=y,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:s,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:s}=t.options;s&&s()}t.options.transition=void 0}function XS(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function JS(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function ZS(t){t.clearSnapshot()}function wh(t){t.clearMeasurements()}function ek(t){t.isLayoutDirty=!0,t.updateLayout()}function bh(t){t.isLayoutDirty=!1}function tk(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function nk(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Eh(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function sk(t){t.resolveTargetDelta()}function ik(t){t.calcProjection()}function rk(t){t.resetSkewAndRotation()}function ok(t){t.removeLeadSnapshot()}function Th(t,e,n){t.translate=q(e.translate,0,n),t.scale=q(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Ch(t,e,n,s){t.min=q(e.min,n.min,s),t.max=q(e.max,n.max,s)}function ak(t,e,n,s){Ch(t.x,e.x,n.x,s),Ch(t.y,e.y,n.y,s)}function lk(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const ck={duration:.45,ease:[.4,0,.1,1]},xh=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Ih=xh("applewebkit/")&&!xh("chrome/")?Math.round:Fe;function Sh(t){t.min=Ih(t.min),t.max=Ih(t.max)}function uk(t){Sh(t.x),Sh(t.y)}function rg(t,e,n){return t==="position"||t==="preserve-aspect"&&!RS(mh(e),mh(n),.2)}function hk(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const dk=ig({attachResizeListener:(t,e)=>Ls(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),_o={current:void 0},og=ig({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!_o.current){const t=new dk({});t.mount(window),t.setOptions({layoutScroll:!0}),_o.current=t}return _o.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),ql=v.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function kh(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function fk(...t){return e=>{let n=!1;const s=t.map(i=>{const r=kh(i,e);return!n&&typeof r=="function"&&(n=!0),r});if(n)return()=>{for(let i=0;i<s.length;i++){const r=s[i];typeof r=="function"?r():kh(t[i],null)}}}}function pk(...t){return v.useCallback(fk(...t),t)}class mk extends v.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(Si(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=n.offsetParent,i=Si(s)&&s.offsetWidth||0,r=Si(s)&&s.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=i-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function gk({children:t,isPresent:e,anchorX:n,anchorY:s,root:i,pop:r}){var d;const o=v.useId(),a=v.useRef(null),l=v.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=v.useContext(ql),u=((d=t.props)==null?void 0:d.ref)??(t==null?void 0:t.ref),h=pk(a,u);return v.useInsertionEffect(()=>{const{width:f,height:m,top:y,left:g,right:_,bottom:b}=l.current;if(e||r===!1||!a.current||!f||!m)return;const T=n==="left"?`left: ${g}`:`right: ${_}`,C=s==="bottom"?`bottom: ${b}`:`top: ${y}`;a.current.dataset.motionPopId=o;const A=document.createElement("style");c&&(A.nonce=c);const V=i??document.head;return V.appendChild(A),A.sheet&&A.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${m}px !important;
            ${T}px !important;
            ${C}px !important;
          }
        `),()=>{var U;(U=a.current)==null||U.removeAttribute("data-motion-pop-id"),V.contains(A)&&V.removeChild(A)}},[e]),p.jsx(mk,{isPresent:e,childRef:a,sizeRef:l,pop:r,children:r===!1?t:v.cloneElement(t,{ref:h})})}const yk=({children:t,initial:e,isPresent:n,onExitComplete:s,custom:i,presenceAffectsLayout:r,mode:o,anchorX:a,anchorY:l,root:c})=>{const u=Tl(_k),h=v.useId();let d=!0,f=v.useMemo(()=>(d=!1,{id:h,initial:e,isPresent:n,custom:i,onExitComplete:m=>{u.set(m,!0);for(const y of u.values())if(!y)return;s&&s()},register:m=>(u.set(m,!1),()=>u.delete(m))}),[n,u,s]);return r&&d&&(f={...f}),v.useMemo(()=>{u.forEach((m,y)=>u.set(y,!1))},[n]),v.useEffect(()=>{!n&&!u.size&&s&&s()},[n]),t=p.jsx(gk,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,children:t}),p.jsx(jr.Provider,{value:f,children:t})};function _k(){return new Map}function ag(t=!0){const e=v.useContext(jr);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:i}=e,r=v.useId();v.useEffect(()=>{if(t)return i(r)},[t]);const o=v.useCallback(()=>t&&s&&s(r),[r,s,t]);return!n&&s?[!1,o]:[!0]}const mi=t=>t.key||"";function Ah(t){const e=[];return v.Children.forEach(t,n=>{v.isValidElement(n)&&e.push(n)}),e}const vk=({children:t,custom:e,initial:n=!0,onExitComplete:s,presenceAffectsLayout:i=!0,mode:r="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[u,h]=ag(o),d=v.useMemo(()=>Ah(t),[t]),f=o&&!u?[]:d.map(mi),m=v.useRef(!0),y=v.useRef(d),g=Tl(()=>new Map),_=v.useRef(new Set),[b,T]=v.useState(d),[C,A]=v.useState(d);Dp(()=>{m.current=!1,y.current=d;for(let E=0;E<C.length;E++){const M=mi(C[E]);f.includes(M)?(g.delete(M),_.current.delete(M)):g.get(M)!==!0&&g.set(M,!1)}},[C,f.length,f.join("-")]);const V=[];if(d!==b){let E=[...d];for(let M=0;M<C.length;M++){const R=C[M],H=mi(R);f.includes(H)||(E.splice(M,0,R),V.push(R))}return r==="wait"&&V.length&&(E=V),A(Ah(E)),T(d),null}const{forceRender:U}=v.useContext(El);return p.jsx(p.Fragment,{children:C.map(E=>{const M=mi(E),R=o&&!u?!1:d===C||f.includes(M),H=()=>{if(_.current.has(M))return;if(g.has(M))_.current.add(M),g.set(M,!0);else return;let Z=!0;g.forEach(Pe=>{Pe||(Z=!1)}),Z&&(U==null||U(),A(y.current),o&&(h==null||h()),s&&s())};return p.jsx(yk,{isPresent:R,initial:!m.current||n?void 0:!1,custom:e,presenceAffectsLayout:i,mode:r,root:c,onExitComplete:R?void 0:H,anchorX:a,anchorY:l,children:E},M)})})},lg=v.createContext({strict:!1}),Ph={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Rh=!1;function wk(){if(Rh)return;const t={};for(const e in Ph)t[e]={isEnabled:n=>Ph[e].some(s=>!!n[s])};Fm(t),Rh=!0}function cg(){return wk(),sS()}function bk(t){const e=cg();for(const n in t)e[n]={...e[n],...t[n]};Fm(e)}const Ek=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function pr(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Ek.has(t)}let ug=t=>!pr(t);function Tk(t){typeof t=="function"&&(ug=e=>e.startsWith("on")?!pr(e):t(e))}try{Tk(require("@emotion/is-prop-valid").default)}catch{}function Ck(t,e,n){const s={};for(const i in t)i==="values"&&typeof t.values=="object"||de(t[i])||(ug(i)||n===!0&&pr(i)||!e&&!pr(i)||t.draggable&&i.startsWith("onDrag"))&&(s[i]=t[i]);return s}const Hr=v.createContext({});function xk(t,e){if(Wr(t)){const{initial:n,animate:s}=t;return{initial:n===!1||Os(n)?n:void 0,animate:Os(s)?s:void 0}}return t.inherit!==!1?e:{}}function Ik(t){const{initial:e,animate:n}=xk(t,v.useContext(Hr));return v.useMemo(()=>({initial:e,animate:n}),[Nh(e),Nh(n)])}function Nh(t){return Array.isArray(t)?t.join(" "):t}const Yl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function hg(t,e,n){for(const s in e)!de(e[s])&&!zm(s,n)&&(t[s]=e[s])}function Sk({transformTemplate:t},e){return v.useMemo(()=>{const n=Yl();return Gl(n,e,t),Object.assign({},n.vars,n.style)},[e])}function kk(t,e){const n=t.style||{},s={};return hg(s,n,t),Object.assign(s,Sk(t,e)),s}function Ak(t,e){const n={},s=kk(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=s,n}const dg=()=>({...Yl(),attrs:{}});function Pk(t,e,n,s){const i=v.useMemo(()=>{const r=dg();return $m(r,e,Km(s),t.transformTemplate,t.style),{...r.attrs,style:{...r.style}}},[e]);if(t.style){const r={};hg(r,t.style,t),i.style={...r,...i.style}}return i}const Rk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ql(t){return typeof t!="string"||t.includes("-")?!1:!!(Rk.indexOf(t)>-1||/[A-Z]/u.test(t))}function Nk(t,e,n,{latestValues:s},i,r=!1,o){const l=(o??Ql(t)?Pk:Ak)(e,s,i,t),c=Ck(e,typeof t=="string",r),u=t!==v.Fragment?{...c,...l,ref:n}:{},{children:h}=e,d=v.useMemo(()=>de(h)?h.get():h,[h]);return v.createElement(t,{...u,children:d})}function Mk({scrapeMotionValuesFromProps:t,createRenderState:e},n,s,i){return{latestValues:Dk(n,s,i,t),renderState:e()}}function Dk(t,e,n,s){const i={},r=s(t,{});for(const d in r)i[d]=Ni(r[d]);let{initial:o,animate:a}=t;const l=Wr(t),c=Om(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const h=u?a:o;if(h&&typeof h!="boolean"&&!Ur(h)){const d=Array.isArray(h)?h:[h];for(let f=0;f<d.length;f++){const m=Vl(t,d[f]);if(m){const{transitionEnd:y,transition:g,..._}=m;for(const b in _){let T=_[b];if(Array.isArray(T)){const C=u?T.length-1:0;T=T[C]}T!==null&&(i[b]=T)}for(const b in y)i[b]=y[b]}}}return i}const fg=t=>(e,n)=>{const s=v.useContext(Hr),i=v.useContext(jr),r=()=>Mk(t,e,s,i);return n?r():Tl(r)},Ok=fg({scrapeMotionValuesFromProps:Kl,createRenderState:Yl}),Lk=fg({scrapeMotionValuesFromProps:qm,createRenderState:dg}),Fk=Symbol.for("motionComponentSymbol");function Vk(t,e,n){const s=v.useRef(n);v.useInsertionEffect(()=>{s.current=n});const i=v.useRef(null);return v.useCallback(r=>{var a;r&&((a=t.onMount)==null||a.call(t,r));const o=s.current;if(typeof o=="function")if(r){const l=o(r);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):o(r);else o&&(o.current=r);e&&(r?e.mount(r):e.unmount())},[e])}const pg=v.createContext({});function bn(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function jk(t,e,n,s,i,r){var T,C;const{visualElement:o}=v.useContext(Hr),a=v.useContext(lg),l=v.useContext(jr),c=v.useContext(ql),u=c.reducedMotion,h=c.skipAnimations,d=v.useRef(null),f=v.useRef(!1);s=s||a.renderer,!d.current&&s&&(d.current=s(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:h,isSVG:r}),f.current&&d.current&&(d.current.manuallyAnimateOnMount=!0));const m=d.current,y=v.useContext(pg);m&&!m.projection&&i&&(m.type==="html"||m.type==="svg")&&Bk(d.current,n,i,y);const g=v.useRef(!1);v.useInsertionEffect(()=>{m&&g.current&&m.update(n,l)});const _=n[Em],b=v.useRef(!!_&&typeof window<"u"&&!((T=window.MotionHandoffIsComplete)!=null&&T.call(window,_))&&((C=window.MotionHasOptimisedAnimation)==null?void 0:C.call(window,_)));return Dp(()=>{f.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),b.current&&m.animationState&&m.animationState.animateChanges())}),v.useEffect(()=>{m&&(!b.current&&m.animationState&&m.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)==null||A.call(window,_)}),b.current=!1),m.enteringChildren=void 0)}),m}function Bk(t,e,n,s){const{layoutId:i,layout:r,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:h}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:mg(t.parent)),t.projection.setOptions({layoutId:i,layout:r,alwaysMeasureLayout:!!o||a&&bn(a),visualElement:t,animationType:typeof r=="string"?r:"both",initialPromotionConfig:s,crossfade:h,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function mg(t){if(t)return t.options.allowProjection!==!1?t.projection:mg(t.parent)}function vo(t,{forwardMotionProps:e=!1,type:n}={},s,i){s&&bk(s);const r=n?n==="svg":Ql(t),o=r?Lk:Ok;function a(c,u){let h;const d={...v.useContext(ql),...c,layoutId:Uk(c)},{isStatic:f}=d,m=Ik(c),y=o(c,f);if(!f&&typeof window<"u"){Wk();const g=Hk(d);h=g.MeasureLayout,m.visualElement=jk(t,y,d,i,g.ProjectionNode,r)}return p.jsxs(Hr.Provider,{value:m,children:[h&&m.visualElement?p.jsx(h,{visualElement:m.visualElement,...d}):null,Nk(t,c,Vk(y,m.visualElement,u),y,f,e,r)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=v.forwardRef(a);return l[Fk]=t,l}function Uk({layoutId:t}){const e=v.useContext(El).id;return e&&t!==void 0?e+"-"+t:t}function Wk(t,e){v.useContext(lg).strict}function Hk(t){const e=cg(),{drag:n,layout:s}=e;if(!n&&!s)return{};const i={...n,...s};return{MeasureLayout:n!=null&&n.isEnabled(t)||s!=null&&s.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function zk(t,e){if(typeof Proxy>"u")return vo;const n=new Map,s=(r,o)=>vo(r,o,t,e),i=(r,o)=>s(r,o);return new Proxy(i,{get:(r,o)=>o==="create"?s:(n.has(o)||n.set(o,vo(o,void 0,t,e)),n.get(o))})}const $k=(t,e)=>e.isSVG??Ql(t)?new wS(e):new pS(e,{allowProjection:t!==v.Fragment});class Gk extends qt{constructor(e){super(e),e.animationState||(e.animationState=xS(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ur(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let Kk=0;class qk extends qt{constructor(){super(...arguments),this.id=Kk++,this.isExitComplete=!1}update(){var r;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;if(e&&s===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"){const l=an(this.node,o,a);if(l){const{transition:c,transitionEnd:u,...h}=l;for(const d in h)(r=this.node.getValue(d))==null||r.jump(h[d])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const Yk={animation:{Feature:Gk},exit:{Feature:qk}};function ni(t){return{point:{x:t.pageX,y:t.pageY}}}const Qk=t=>e=>Wl(e)&&t(e,ni(e));function bs(t,e,n,s){return Ls(t,e,Qk(n),s)}const gg=({current:t})=>t?t.ownerDocument.defaultView:null,Mh=(t,e)=>Math.abs(t-e);function Xk(t,e){const n=Mh(t.x,e.x),s=Mh(t.y,e.y);return Math.sqrt(n**2+s**2)}const Dh=new Set(["auto","scroll"]);class yg{constructor(e,n,{transformPagePoint:s,contextWindow:i=window,dragSnapToOrigin:r=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=f=>{this.handleScroll(f.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=gi(this.lastRawMoveEventInfo,this.transformPagePoint));const f=wo(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,y=Xk(f.offset,{x:0,y:0})>=this.distanceThreshold;if(!m&&!y)return;const{point:g}=f,{timestamp:_}=he;this.history.push({...g,timestamp:_});const{onStart:b,onMove:T}=this.handlers;m||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),T&&T(this.lastMoveEvent,f)},this.handlePointerMove=(f,m)=>{this.lastMoveEvent=f,this.lastRawMoveEventInfo=m,this.lastMoveEventInfo=gi(m,this.transformPagePoint),$.update(this.updatePoint,!0)},this.handlePointerUp=(f,m)=>{this.end();const{onEnd:y,onSessionEnd:g,resumeAnimation:_}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=wo(f.type==="pointercancel"?this.lastMoveEventInfo:gi(m,this.transformPagePoint),this.history);this.startEvent&&y&&y(f,b),g&&g(f,b)},!Wl(e))return;this.dragSnapToOrigin=r,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=o,this.contextWindow=i||window;const l=ni(e),c=gi(l,this.transformPagePoint),{point:u}=c,{timestamp:h}=he;this.history=[{...u,timestamp:h}];const{onSessionStart:d}=n;d&&d(e,wo(c,this.history)),this.removeListeners=Zs(bs(this.contextWindow,"pointermove",this.handlePointerMove),bs(this.contextWindow,"pointerup",this.handlePointerUp),bs(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const s=getComputedStyle(n);(Dh.has(s.overflowX)||Dh.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const s=e===window,i=s?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},r={x:i.x-n.x,y:i.y-n.y};r.x===0&&r.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=r.x,this.lastMoveEventInfo.point.y+=r.y):this.history.length>0&&(this.history[0].x-=r.x,this.history[0].y-=r.y),this.scrollPositions.set(e,i),$.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ht(this.updatePoint)}}function gi(t,e){return e?{point:e(t.point)}:t}function Oh(t,e){return{x:t.x-e.x,y:t.y-e.y}}function wo({point:t},e){return{point:t,delta:Oh(t,_g(e)),offset:Oh(t,Jk(e)),velocity:Zk(e,.1)}}function Jk(t){return t[0]}function _g(t){return t[t.length-1]}function Zk(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,s=null;const i=_g(t);for(;n>=0&&(s=t[n],!(i.timestamp-s.timestamp>Ie(e)));)n--;if(!s)return{x:0,y:0};s===t[0]&&t.length>2&&i.timestamp-s.timestamp>Ie(e)*2&&(s=t[1]);const r=Oe(i.timestamp-s.timestamp);if(r===0)return{x:0,y:0};const o={x:(i.x-s.x)/r,y:(i.y-s.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function eA(t,{min:e,max:n},s){return e!==void 0&&t<e?t=s?q(e,t,s.min):Math.max(t,e):n!==void 0&&t>n&&(t=s?q(n,t,s.max):Math.min(t,n)),t}function Lh(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function tA(t,{top:e,left:n,bottom:s,right:i}){return{x:Lh(t.x,n,i),y:Lh(t.y,e,s)}}function Fh(t,e){let n=e.min-t.min,s=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,s]=[s,n]),{min:n,max:s}}function nA(t,e){return{x:Fh(t.x,e.x),y:Fh(t.y,e.y)}}function sA(t,e){let n=.5;const s=ve(t),i=ve(e);return i>s?n=Ms(e.min,e.max-s,t.min):s>i&&(n=Ms(t.min,t.max-i,e.min)),ot(0,1,n)}function iA(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ta=.35;function rA(t=Ta){return t===!1?t=0:t===!0&&(t=Ta),{x:Vh(t,"left","right"),y:Vh(t,"top","bottom")}}function Vh(t,e,n){return{min:jh(t,e),max:jh(t,n)}}function jh(t,e){return typeof t=="number"?t:t[e]||0}const oA=new WeakMap;class aA{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ie(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=h=>{n&&this.snapToCursor(ni(h).point),this.stopAnimation()},o=(h,d)=>{const{drag:f,dragPropagation:m,onDragStart:y}=this.getProps();if(f&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=MI(f),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=d,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xe(_=>{let b=this.getAxisMotionValue(_).get()||0;if(st.test(b)){const{projection:T}=this.visualElement;if(T&&T.layout){const C=T.layout.layoutBox[_];C&&(b=ve(C)*(parseFloat(b)/100))}}this.originPoint[_]=b}),y&&$.update(()=>y(h,d),!1,!0),pa(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},a=(h,d)=>{this.latestPointerEvent=h,this.latestPanInfo=d;const{dragPropagation:f,dragDirectionLock:m,onDirectionLock:y,onDrag:g}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:_}=d;if(m&&this.currentDirection===null){this.currentDirection=cA(_),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,_),this.updateAxis("y",d.point,_),this.visualElement.render(),g&&$.update(()=>g(h,d),!1,!0)},l=(h,d)=>{this.latestPointerEvent=h,this.latestPanInfo=d,this.stop(h,d),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new yg(e,{onSessionStart:r,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:s,contextWindow:gg(this.visualElement),element:this.visualElement.current})}stop(e,n){const s=e||this.latestPointerEvent,i=n||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!i||!s)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&$.postRender(()=>a(s,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,s){const{drag:i}=this.getProps();if(!s||!yi(e,i,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+s[e];this.constraints&&this.constraints[e]&&(o=eA(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){var r;const{dragConstraints:e,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)==null?void 0:r.layout,i=this.constraints;e&&bn(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&s?this.constraints=tA(s.layoutBox,e):this.constraints=!1,this.elastic=rA(n),i!==this.constraints&&!bn(e)&&s&&this.constraints&&!this.hasMutatedConstraints&&Xe(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=iA(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!bn(e))return!1;const s=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const r=lS(s,i.root,this.visualElement.getTransformPagePoint());let o=nA(i.layout.layoutBox,r);if(n){const a=n(rS(o));this.hasMutatedConstraints=!!a,a&&(o=jm(a))}return o}startAnimation(e){const{drag:n,dragMomentum:s,dragElastic:i,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Xe(u=>{if(!yi(u,n,this.currentDirection))return;let h=l&&l[u]||{};(o===!0||o===u)&&(h={min:0,max:0});const d=i?200:1e6,f=i?40:1e7,m={type:"inertia",velocity:s?e[u]:0,bounceStiffness:d,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...r,...h};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const s=this.getAxisMotionValue(e);return pa(this.visualElement,e),s.start(Fl(e,s,0,n,this.visualElement,!1))}stopAnimation(){Xe(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,s=this.visualElement.getProps(),i=s[n];return i||this.visualElement.getValue(e,(s.initial?s.initial[e]:void 0)||0)}snapToCursor(e){Xe(n=>{const{drag:s}=this.getProps();if(!yi(n,s,this.currentDirection))return;const{projection:i}=this.visualElement,r=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n],l=r.get()||0;r.set(e[n]-q(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!bn(n)||!s||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Xe(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=sA({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),Xe(o=>{if(!yi(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(q(l,c,i[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;oA.set(this.visualElement,this);const e=this.visualElement.current,n=bs(e,"pointerdown",c=>{const{drag:u,dragListener:h=!0}=this.getProps(),d=c.target,f=d!==e&&jI(d);u&&h&&!f&&this.start(c)});let s;const i=()=>{const{dragConstraints:c}=this.getProps();bn(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),s||(s=lA(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:r}=this.visualElement,o=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),$.read(i);const a=Ls(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",(({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Xe(h=>{const d=this.getAxisMotionValue(h);d&&(this.originPoint[h]+=c[h].translate,d.set(d.get()+c[h].translate))}),this.visualElement.render())}));return()=>{a(),n(),o(),l&&l(),s&&s()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:i=!1,dragConstraints:r=!1,dragElastic:o=Ta,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:s,dragPropagation:i,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function Bh(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function lA(t,e,n){const s=Ku(t,Bh(n)),i=Ku(e,Bh(n));return()=>{s(),i()}}function yi(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function cA(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class uA extends qt{constructor(e){super(e),this.removeGroupControls=Fe,this.removeListeners=Fe,this.controls=new aA(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Fe}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const bo=t=>(e,n)=>{t&&$.update(()=>t(e,n),!1,!0)};class hA extends qt{constructor(){super(...arguments),this.removePointerDownListener=Fe}onPointerDown(e){this.session=new yg(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:gg(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:s,onPanEnd:i}=this.node.getProps();return{onSessionStart:bo(e),onStart:bo(n),onMove:bo(s),onEnd:(r,o)=>{delete this.session,i&&$.postRender(()=>i(r,o))}}}mount(){this.removePointerDownListener=bs(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Eo=!1;class dA extends v.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:s,layoutId:i}=this.props,{projection:r}=e;r&&(n.group&&n.group.add(r),s&&s.register&&i&&s.register(r),Eo&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Mi.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:s,drag:i,isPresent:r}=this.props,{projection:o}=s;return o&&(o.isPresent=r,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Eo=!0,i||e.layoutDependency!==n||n===void 0||e.isPresent!==r?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||$.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:s}=e;s&&(s.options.layoutAnchor=n,s.root.didUpdate(),Ul.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:i}=e;Eo=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),s&&s.deregister&&s.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function vg(t){const[e,n]=ag(),s=v.useContext(El);return p.jsx(dA,{...t,layoutGroup:s,switchLayoutGroup:v.useContext(pg),isPresent:e,safeToRemove:n})}const fA={pan:{Feature:hA},drag:{Feature:uA,ProjectionNode:og,MeasureLayout:vg}};function Uh(t,e,n){const{props:s}=t;t.animationState&&s.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,r=s[i];r&&$.postRender(()=>r(e,ni(e)))}class pA extends qt{mount(){const{current:e}=this.node;e&&(this.unmount=OI(e,(n,s)=>(Uh(this.node,s,"Start"),i=>Uh(this.node,i,"End"))))}unmount(){}}class mA extends qt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Zs(Ls(this.node.current,"focus",()=>this.onFocus()),Ls(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Wh(t,e,n){const{props:s}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&s.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),r=s[i];r&&$.postRender(()=>r(e,ni(e)))}class gA extends qt{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=UI(e,(i,r)=>(Wh(this.node,r,"Start"),(o,{success:a})=>Wh(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const Ca=new WeakMap,To=new WeakMap,yA=t=>{const e=Ca.get(t.target);e&&e(t)},_A=t=>{t.forEach(yA)};function vA({root:t,...e}){const n=t||document;To.has(n)||To.set(n,{});const s=To.get(n),i=JSON.stringify(e);return s[i]||(s[i]=new IntersectionObserver(_A,{root:t,...e})),s[i]}function wA(t,e,n){const s=vA(e);return Ca.set(t,n),s.observe(t),()=>{Ca.delete(t),s.unobserve(t)}}const bA={some:0,all:1};class EA extends qt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:s,amount:i="some",once:r}=e,o={root:n?n.current:void 0,rootMargin:s,threshold:typeof i=="number"?i:bA[i]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,r&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:h,onViewportLeave:d}=this.node.getProps(),f=u?h:d;f&&f(c)};this.stopObserver=wA(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(TA(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function TA({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const CA={inView:{Feature:EA},tap:{Feature:gA},focus:{Feature:mA},hover:{Feature:pA}},xA={layout:{ProjectionNode:og,MeasureLayout:vg}},IA={...Yk,...CA,...fA,...xA},In=zk(IA,$k);function Co({className:t,type:e,...n}){return p.jsx("input",{type:e,"data-slot":"input",className:Kt("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t),...n})}function Xt({className:t,...e}){return p.jsx(Cg,{"data-slot":"label",className:Kt("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",t),...e})}function SA({isOpen:t,onClose:e,userData:n,onUpdateUserData:s,onRemoveUser:i,showRemoveButton:r=!1}){const[o,a]=v.useState(!1),[l,c]=v.useState(n);v.useEffect(()=>{c(n)},[n]);const u=String(n.role||"").toLowerCase()!=="admin",h=()=>{s(l),a(!1)},d=()=>{c(n),a(!1)},f=()=>{confirm(`Are you sure you want to remove ${n.name} from the system?`)&&(i==null||i(),e())},m=y=>{var _;const g=(_=y.target.files)==null?void 0:_[0];if(g){const b=new FileReader;b.onloadend=()=>{c({...l,avatar:b.result})},b.readAsDataURL(g)}};return p.jsx(vk,{children:t&&p.jsxs(p.Fragment,{children:[p.jsx(In.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e,className:"fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"}),p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:p.jsxs(In.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{duration:.2},className:"relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden",onClick:y=>y.stopPropagation(),children:[p.jsx("div",{className:"bg-gradient-to-r from-green-600 to-green-700 px-8 py-6",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"flex h-20 w-20 items-center justify-center rounded-full bg-white/20 overflow-hidden",children:l.avatar?p.jsx("img",{src:l.avatar,alt:l.name,className:"h-full w-full object-cover"}):p.jsx(Xo,{className:"h-10 w-10 text-white"})}),o&&p.jsxs("label",{className:"absolute bottom-0 right-0 h-6 w-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-100 transition-colors",children:[p.jsx(V0,{className:"h-3 w-3 text-gray-700"}),p.jsx("input",{type:"file",accept:"image/*",onChange:m,className:"hidden"})]})]}),p.jsxs("div",{children:[p.jsx("h2",{className:"text-2xl font-bold text-white",children:o?"Edit Profile":"User Profile"}),p.jsx("p",{className:"text-green-100",children:n.role})]})]}),p.jsx("button",{onClick:e,className:"rounded-full p-2 bg-white/20 text-white hover:bg-white/30 transition-colors",children:p.jsx(Tp,{className:"h-6 w-6"})})]})}),p.jsxs("div",{className:"p-8",children:[p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[p.jsxs("div",{className:"space-y-2",children:[p.jsxs(Xt,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(Xo,{className:"h-4 w-4"}),"Full Name"]}),o?p.jsx(Co,{value:l.name,onChange:y=>c({...l,name:y.target.value}),className:"border-gray-300"}):p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.name})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs(Xt,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(x0,{className:"h-4 w-4"}),"Email Address"]}),o?p.jsx(Co,{type:"email",value:l.email,onChange:y=>c({...l,email:y.target.value}),className:"border-gray-300"}):p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.email})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs(Xt,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(N0,{className:"h-4 w-4"}),"Phone Number"]}),o?p.jsx(Co,{value:l.phone,onChange:y=>c({...l,phone:y.target.value}),className:"border-gray-300"}):p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.phone})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs(Xt,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(Ep,{className:"h-4 w-4"}),"Department"]}),o?p.jsxs("select",{value:l.department,onChange:y=>c({...l,department:y.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",children:[p.jsx("option",{value:"Administration",children:"Administration"}),p.jsx("option",{value:"Operations",children:"Operations"}),p.jsx("option",{value:"Management",children:"Management"}),p.jsx("option",{value:"Analytics",children:"Analytics"}),p.jsx("option",{value:"Maintenance",children:"Maintenance"})]}):p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.department})]}),p.jsxs("div",{className:"space-y-2 md:col-span-2",children:[p.jsxs(Xt,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(bp,{className:"h-4 w-4"}),"Role"]}),o?p.jsxs("select",{value:l.role,onChange:y=>c({...l,role:y.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",children:[p.jsx("option",{value:"staff",children:"Staff"}),p.jsx("option",{value:"admin",children:"Admin"})]}):p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.role})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs(Xt,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(d0,{className:"h-4 w-4"}),"Member Since"]}),p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.joinedDate})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs(Xt,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(y0,{className:"h-4 w-4"}),"Last Login"]}),p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.lastLogin})]})]}),p.jsx("div",{className:"flex gap-3 mt-8 pt-6 border-t",children:o?p.jsxs(p.Fragment,{children:[p.jsxs(us,{onClick:h,className:"flex-1 bg-green-600 hover:bg-green-700 text-white cursor-pointer",children:[p.jsx(D0,{className:"h-4 w-4 mr-2"}),"Save Changes"]}),p.jsx(us,{onClick:d,variant:"outline",className:"flex-1 cursor-pointer",children:"Cancel"})]}):p.jsxs(p.Fragment,{children:[p.jsxs(us,{onClick:()=>a(!0),className:"flex-1 bg-green-600 hover:bg-green-700 text-white cursor-pointer",children:[p.jsx(wp,{className:"h-4 w-4 mr-2"}),"Edit Profile"]}),r&&u&&p.jsxs(us,{onClick:f,className:"flex-1 bg-red-600 hover:bg-red-700 text-white cursor-pointer",children:[p.jsx(Vr,{className:"h-4 w-4 mr-2"}),"Remove User"]})]})})]})]})})]})})}const kA=[{name:"Dashboard",href:"/",icon:b0},{name:"Bin Monitoring",href:"/bins",icon:Vr},{name:"Map & Location",href:"/map",icon:S0},{name:"Alerts",href:"/alerts",icon:u0},{name:"Rot Index",href:"/rot-index",icon:l0},{name:"Analytics",href:"/analytics",icon:p0},{name:"Workers",href:"/workers",icon:Ep},{name:"Maintenance",href:"/maintenance",icon:z0},{name:"User Management",href:"/users",icon:bp}];function AA({onLogout:t}){const[e,n]=v.useState(!1),[s,i]=v.useState(!1),[r,o]=v.useState({id:1,name:"Admin User",email:"guesswhoami.true@gmail.com",phone:"+1 (555) 123-4567",role:"admin",department:"Administration",joinedDate:"January 2024",status:"active",lastLogin:"Just now"}),a=Ig(),l=u=>u==="/"?a.pathname==="/":a.pathname.startsWith(u),c=u=>{o(u),(async()=>{try{const h=await _p(),d=Array.isArray(h)?h.find(f=>f.email===u.email):null;d&&d.id&&await e0(d.id,{name:u.name,phone:u.phone,department:u.department,role:u.role})}catch(h){console.debug("Could not persist dashboard profile to DB:",h)}})()};return p.jsxs("div",{className:"min-h-screen bg-white",children:[e&&p.jsx("div",{className:"fixed inset-0 z-40 bg-black/50 lg:hidden",onClick:()=>n(!1)}),p.jsxs("aside",{className:`fixed inset-y-0 left-0 z-50 w-64 transform bg-gray-50 shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 ${e?"translate-x-0":"-translate-x-full"}`,children:[p.jsxs("div",{className:"flex h-16 items-center gap-2 px-6",children:[p.jsxs(Zl,{to:"/",onClick:()=>n(!1),className:"flex items-center gap-2 hover:opacity-80 transition-opacity",children:[p.jsx("div",{className:"rounded-lg bg-green-600 p-2",children:p.jsx(Vr,{className:"h-6 w-6 text-white"})}),p.jsx("span",{className:"text-xl font-bold text-gray-900",children:"OMNIBINS"})]}),p.jsx("button",{onClick:()=>n(!1),className:"ml-auto lg:hidden",children:p.jsx(Tp,{className:"h-6 w-6"})})]}),p.jsx("nav",{className:"flex-1 space-y-1 overflow-y-auto px-3 py-4",children:kA.map(u=>{const h=u.icon,d=l(u.href);return p.jsxs(Zl,{to:u.href,onClick:()=>n(!1),className:`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${d?"bg-green-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:[p.jsx(h,{className:"h-5 w-5"}),u.name]},u.name)})}),p.jsxs("div",{className:"border-t p-4",children:[p.jsxs("button",{onClick:()=>i(!0),className:"w-full flex items-center gap-3 mb-3 hover:bg-gray-100 p-2 rounded-lg transition-colors cursor-pointer",children:[p.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-full bg-green-600 flex-shrink-0",children:p.jsx(Xo,{className:"h-5 w-5 text-white"})}),p.jsxs("div",{className:"flex-1 min-w-0 text-left",children:[p.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:r.name}),p.jsx("p",{className:"text-xs text-gray-500 truncate",children:r.email})]}),p.jsx(wp,{className:"h-4 w-4 text-gray-400"})]}),p.jsxs(us,{variant:"outline",className:"w-full justify-start gap-2 cursor-pointer",onClick:t,children:[p.jsx(T0,{className:"h-4 w-4"}),"Logout"]})]})]}),p.jsx(SA,{isOpen:s,onClose:()=>i(!1),userData:r,onUpdateUserData:c}),p.jsxs("div",{className:"lg:pl-64",children:[p.jsx("div",{className:"flex items-center justify-between border-b border-gray-200 bg-white px-4 py-4 lg:hidden",children:p.jsx("button",{type:"button",onClick:()=>n(!0),className:"inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100","aria-label":"Open navigation menu",children:p.jsx(A0,{className:"h-5 w-5"})})}),p.jsx("main",{className:"p-6",children:p.jsx(Sg,{})})]})]})}const Qe=(t,e=0)=>{if(typeof t=="number")return t;if(typeof t=="string"){const n=parseFloat(t);return Number.isFinite(n)?n:e}return e},wg=t=>Math.log10(Math.max(t,1e-6)),PA=t=>t.status?t.status:t.weight>=80?"Full":t.weight>=60?"Near Full":t.weight<=20?"Empty":"Normal",RA=(t,e=10)=>{if(t<=0||e<=0)return 0;const n=t/e,s=-.38*wg(n)+1.96,i=Math.pow(10,s);return Number.isFinite(i)?i:0},NA=(t,e=10)=>{if(t<=0||e<=0)return 0;const n=t/e,s=-.48*wg(n)+1.77,i=Math.pow(10,s);return Number.isFinite(i)?i:0},MA=(t,e)=>{const n=Qe(e.weight??e.weight_kg??e.wasteWeight??0),s=Qe(e.capacity??e.fillLevel??0),i=Qe(e.mq135??0),r=Qe(e.mq4??0),o=Qe(e.mq135_r0??10),a=Qe(e.mq4_r0??10),l=e.nh3!=null?Qe(e.nh3):NA(i,o),c=e.ch4!=null?Qe(e.ch4):RA(r,a),u=Qe(e.distance??e.distance_cm??0),h=Qe(e.timestamp??e.time??e.updatedAt??0),d={id:t,location:String(e.location??e.node??t),weight:n,capacity:s,nh3:l,ch4:c,status:String(e.status??""),node:e.node?String(e.node):void 0,distance:u||void 0,timestamp:h||void 0};return{...d,status:d.status||PA(d)}};function _i({className:t,...e}){return p.jsx("div",{"data-slot":"card",className:Kt("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",t),...e})}function vi({className:t,...e}){return p.jsx("div",{"data-slot":"card-header",className:Kt("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",t),...e})}function wi({className:t,...e}){return p.jsx("h4",{"data-slot":"card-title",className:Kt("leading-none",t),...e})}function KP({className:t,...e}){return p.jsx("p",{"data-slot":"card-description",className:Kt("text-muted-foreground",t),...e})}function bi({className:t,...e}){return p.jsx("div",{"data-slot":"card-content",className:Kt("px-6 [&:last-child]:pb-6",t),...e})}const DA=[],OA=[];function LA(){const[t,e]=v.useState({totalBins:0,fullBins:12,highRotIndex:8,activeNeutralization:3}),[n,s]=v.useState([]);v.useEffect(()=>{const r=ZT(o=>{e(a=>({...a,totalBins:o.length}))});return()=>r()},[]),v.useEffect(()=>{const r=Te(ke,"sensor_data"),o=Yn(r,a=>{const l=a.val(),c=l?Object.entries(l).map(([g,_])=>MA(g,_)).sort((g,_)=>(g.timestamp??0)-(_.timestamp??0)):[],u=new Map;c.forEach(g=>{const _=String(g.node??g.location??g.id??"unknown-bin"),b=u.get(_);(!b||(g.timestamp??0)>=(b.timestamp??0))&&u.set(_,g)});const h=Array.from(u.values()),d=h.filter(g=>g.weight>=80).length,f=h.filter(g=>g.nh3>25||g.ch4>50).length,m=h.filter(g=>g.nh3>35||g.ch4>70).length,y=c.slice(-24).map(g=>({time:g.timestamp?new Date(g.timestamp).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}):g.id,nh3:g.nh3,ch4:g.ch4}));e(g=>({...g,fullBins:d,highRotIndex:f,activeNeutralization:m})),s(y)});return()=>o()},[]);const i=r=>{switch(r){case"urgent":return"bg-red-100 text-red-800 border-red-200";case"warning":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"success":return"bg-green-100 text-green-800 border-green-200";default:return"bg-blue-100 text-blue-800 border-blue-200"}};return p.jsxs("div",{className:"space-y-6",children:[p.jsx("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:p.jsxs("div",{children:[p.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Dashboard"}),p.jsx("p",{className:"text-gray-900 font-semibold",children:"Live monitoring of bin status, gas levels & collection tracking"})]})}),p.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",children:[{title:"Total Smart Bins",value:t.totalBins,desc:"Deployed across the area",icon:Vr,iconColor:"text-green-600"},{title:"Full / Near Full",value:t.fullBins,desc:"Require immediate collection",icon:wu,iconColor:"text-red-600"},{title:"High Rot Index",value:t.highRotIndex,desc:"Above threshold level",icon:W0,iconColor:"text-orange-600"},{title:"Active Neutralization",value:t.activeNeutralization,desc:"Odor control events",icon:v0,iconColor:"text-blue-600"}].map((r,o)=>p.jsx(In.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:o*.1},children:p.jsxs(_i,{children:[p.jsxs(vi,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[p.jsx(wi,{className:"text-sm font-semibold text-gray-900",children:r.title}),p.jsx(r.icon,{className:`h-10 w-10 ${r.iconColor||"text-gray-800"}`})]}),p.jsxs(bi,{children:[p.jsx("div",{className:"text-2xl font-bold text-gray-900",children:r.value}),p.jsx("p",{className:"text-xs text-gray-800 font-medium",children:r.desc})]})]})},r.title))}),p.jsxs("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-2",children:[p.jsx(In.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.4},children:p.jsxs(_i,{className:"h-full",children:[p.jsx(vi,{children:p.jsx(wi,{children:"Recent Alerts & Notifications"})}),p.jsx(bi,{children:p.jsx("div",{className:"space-y-3",children:DA.map(r=>p.jsxs("div",{className:`flex items-start gap-3 rounded-lg border p-3 ${i(r.type)}`,children:[p.jsx(wu,{className:"h-5 w-5 mt-0.5 flex-shrink-0"}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("p",{className:"font-semibold text-sm text-gray-900",children:r.bin}),p.jsx("p",{className:"text-sm text-gray-900 font-medium",children:r.message}),p.jsx("p",{className:"text-xs mt-1 font-medium text-gray-800",children:r.time})]})]},r.id))})})]})}),p.jsx(In.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.5},children:p.jsxs(_i,{className:"h-full flex flex-col",children:[p.jsx(vi,{children:p.jsx(wi,{children:"Weekly Collections"})}),p.jsx(bi,{className:"flex-1",children:p.jsx(ec,{width:"100%",height:"100%",minHeight:250,children:p.jsxs(Rg,{data:OA,children:[p.jsx(tc,{strokeDasharray:"3 3"}),p.jsx(nc,{dataKey:"day"}),p.jsx(sc,{}),p.jsx(ic,{}),p.jsx(Ng,{dataKey:"collections",fill:"#10b981"})]})})})]})})]}),p.jsx(In.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6},children:p.jsxs(_i,{children:[p.jsx(vi,{children:p.jsx(wi,{children:"Average Gas Levels (24h)"})}),p.jsx(bi,{children:p.jsx(ec,{width:"100%",height:"100%",minHeight:350,children:p.jsxs(Mg,{data:n,children:[p.jsx(tc,{strokeDasharray:"3 3"}),p.jsx(nc,{dataKey:"time"}),p.jsx(sc,{}),p.jsx(ic,{}),p.jsx(Dg,{}),p.jsx(rc,{type:"monotone",dataKey:"nh3",stroke:"#f59e0b",name:"NH₃ (Ammonia) (ppm)",strokeWidth:2}),p.jsx(rc,{type:"monotone",dataKey:"ch4",stroke:"#3b82f6",name:"CH₄ (Methane) (ppm)",strokeWidth:2})]})})})]})})]})}const Hh=v.lazy(()=>Ve(()=>import("./BinMonitoring-paSKKqlk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(t=>({default:t.BinMonitoring}))),FA=v.lazy(()=>Ve(()=>import("./MapLocation-Et7k-Xfk.js"),__vite__mapDeps([10,1,2,3,7,9,11])).then(t=>({default:t.MapLocation}))),VA=v.lazy(()=>Ve(()=>import("./Alerts-CQqk5uLk.js"),__vite__mapDeps([12,1,2,3,6,8,9])).then(t=>({default:t.Alerts}))),jA=v.lazy(()=>Ve(()=>import("./RotIndex-BXes8wSu.js"),__vite__mapDeps([13,1,2,5,9])).then(t=>({default:t.RotIndex}))),BA=v.lazy(()=>Ve(()=>import("./Analytics-slu-3kWg.js"),__vite__mapDeps([14,1,2,15,7,9])).then(t=>({default:t.Analytics}))),UA=v.lazy(()=>Ve(()=>import("./Workers-f8ldOzdW.js"),__vite__mapDeps([16,1,2,3,17,6,9])).then(t=>({default:t.Workers}))),WA=v.lazy(()=>Ve(()=>import("./Maintenance-Dmqzd0r1.js"),__vite__mapDeps([18,1,2,3,17,5,6,9])).then(t=>({default:t.Maintenance}))),HA=v.lazy(()=>Ve(()=>import("./UserManagement-Bt8l9wmY.js"),__vite__mapDeps([19,1,2,3,17,20,9])).then(t=>({default:t.UserManagement}))),zA=v.lazy(()=>Ve(()=>import("./NotFound-D8pFhUss.js"),__vite__mapDeps([21,1,2,9])).then(t=>({default:t.NotFound}))),$A=v.lazy(()=>Ve(()=>import("./Signup-CsHXNRXO.js"),__vite__mapDeps([22,1,2,23,24,9])).then(t=>({default:t.Signup}))),GA=v.lazy(()=>Ve(()=>import("./Terms-CHvLA8rB.js"),__vite__mapDeps([24,1,2])).then(t=>({default:t.Terms}))),Re=()=>p.jsx("div",{className:"flex items-center justify-center min-h-screen",children:p.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"})}),KA=({error:t})=>p.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-8 text-center",children:[p.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-3",children:"Something went wrong"}),p.jsx("p",{className:"text-base text-gray-600 mb-6",children:"The page failed to load. Please refresh or return to the dashboard."}),p.jsx("pre",{className:"max-w-xl whitespace-pre-wrap rounded-2xl bg-slate-100 p-4 text-left text-sm text-slate-700",children:String(t)}),p.jsxs("div",{className:"mt-6 flex gap-3",children:[p.jsx("a",{href:"/",className:"rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90",children:"Go to Dashboard"}),p.jsx("button",{onClick:()=>window.location.reload(),className:"rounded-full border border-slate-300 px-5 py-2 text-sm font-medium",children:"Reload"})]})]});function qA(t){return kg([{path:"/",element:p.jsx(AA,{onLogout:t}),errorElement:p.jsx(KA,{}),children:[{index:!0,Component:LA},{path:"bins",element:p.jsx(v.Suspense,{fallback:p.jsx(Re,{}),children:p.jsx(Hh,{})})},{path:"map",element:p.jsx(v.Suspense,{fallback:p.jsx(Re,{}),children:p.jsx(FA,{})})},{path:"alerts",element:p.jsx(v.Suspense,{fallback:p.jsx(Re,{}),children:p.jsx(VA,{})})},{path:"collections",element:p.jsx(v.Suspense,{fallback:p.jsx(Re,{}),children:p.jsx(Hh,{})})},{path:"rot-index",element:p.jsx(v.Suspense,{fallback:p.jsx(Re,{}),children:p.jsx(jA,{})})},{path:"analytics",element:p.jsx(v.Suspense,{fallback:p.jsx(Re,{}),children:p.jsx(BA,{})})},{path:"workers",element:p.jsx(v.Suspense,{fallback:p.jsx(Re,{}),children:p.jsx(UA,{})})},{path:"maintenance",element:p.jsx(v.Suspense,{fallback:p.jsx(Re,{}),children:p.jsx(WA,{})})},{path:"users",element:p.jsx(v.Suspense,{fallback:p.jsx(Re,{}),children:p.jsx(HA,{})})},{path:"signup",element:p.jsx(v.Suspense,{fallback:p.jsx(Re,{}),children:p.jsx($A,{})})},{path:"terms",element:p.jsx(v.Suspense,{fallback:p.jsx(Re,{}),children:p.jsx(GA,{})})},{path:"*",element:p.jsx(v.Suspense,{fallback:p.jsx(Re,{}),children:p.jsx(zA,{})})}]}],{basename:"/"})}const YA=v.lazy(()=>Ve(()=>import("./LandingPage-K_ddW7yL.js"),__vite__mapDeps([25,1,2,3,4,23,24,7,6,15,9,20])).then(t=>({default:t.LandingPage}))),zh=()=>p.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-blue-50",children:p.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-green-600"})});function QA(){const[t,e]=v.useState(null),[n,s]=v.useState(!1),i=v.useMemo(()=>qA(()=>e(!1)),[]);v.useEffect(()=>{const o=bv(ys,async a=>{try{if(!a){e(!1),localStorage.removeItem("omniToken"),s(!0);return}if(!a.emailVerified){await kc(ys),e(!1),localStorage.removeItem("omniToken"),s(!0);return}await n0(a.email)?(e(!0),localStorage.setItem("omniToken","authenticated")):(await kc(ys),e(!1),localStorage.removeItem("omniToken"))}catch(l){console.error("Admin access check failed:",l),e(!1),localStorage.removeItem("omniToken")}finally{s(!0)}});return()=>o()},[]);const r=o=>{o&&localStorage.setItem("omniToken",o),e(!0)};return!n||t===null?p.jsx(zh,{}):t?p.jsx(Ag,{router:i}):p.jsx(v.Suspense,{fallback:p.jsx(zh,{}),children:p.jsx(YA,{onLoginSuccess:r})})}const bg=document.getElementById("root");if(!bg)throw new Error("Failed to find the root element. Make sure index.html has <div id='root'></div>");Fg.createRoot(bg).render(p.jsx(Pg.StrictMode,{children:p.jsx(QA,{})}));export{nP as $,l0 as A,us as B,_i as C,v0 as D,tP as E,UP as F,G0 as G,Qe as H,Co as I,FP as J,VP as K,Xt as L,x0 as M,LP as N,ZT as O,N0 as P,u0 as Q,wu as R,bp as S,Vr as T,Ep as U,zP as V,W0 as W,Tp as X,HP as Y,$P as Z,Ve as _,J as a,sP as a0,eP as a1,A0 as a2,p0 as a3,KP as a4,jP as a5,kc as a6,n0 as a7,BP as a8,mn as a9,yP as aA,_P as aB,dP as aC,lP as aD,cP as aE,uP as aF,hP as aG,rP as aH,vP as aI,wP as aJ,bP as aK,EP as aL,CP as aM,iP as aN,NP as aO,PP as aP,oP as aQ,aP as aR,gP as aS,mP as aT,GT as aa,RT as ab,qe as ac,XT as ad,Ae as ae,Qa as af,Ke as ag,DP as ah,MP as ai,OP as aj,pp as ak,Kd as al,ml as am,Ze as an,Vn as ao,qT as ap,AP as aq,fP as ar,pP as as,TP as at,IP as au,xP as av,KT as aw,SP as ax,kP as ay,RP as az,bi as b,Kt as c,vi as d,wi as e,ke as f,y0 as g,lp as h,vk as i,ys as j,Xo as k,_p as l,In as m,MA as n,Yn as o,ap as p,V0 as q,Te as r,Lr as s,d0 as t,D0 as u,wp as v,WP as w,e0 as x,up as y,cp as z};
