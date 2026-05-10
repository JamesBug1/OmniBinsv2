const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BinMonitoring-DoWfFXNV.js","assets/ui-vendor-IfqMdkXd.js","assets/react-vendor-73flmPZe.js","assets/badge-CkS9mNHl.js","assets/progress-BzJ2bSp8.js","assets/triangle-alert-BiK5TpCq.js","assets/circle-check-big-CrEa2-J3.js","assets/map-pin-BS937YiI.js","assets/weight-BP0U2Ya-.js","assets/chart-vendor-BrJqDZ0A.js","assets/MapLocation-BWacGZbQ.js","assets/Alerts-BYROaCNm.js","assets/RotIndex-BK7UXPzn.js","assets/Analytics-BQtpuZpu.js","assets/trending-up-DvG7MblH.js","assets/Workers-S1gVOhvV.js","assets/search-ClawqyN2.js","assets/Maintenance-tD8hSC0I.js","assets/wifi-ZZyP62j9.js","assets/UserManagement-B48N1OTV.js","assets/shield-DfbdS7QY.js","assets/NotFound-DSaEAJsm.js","assets/LandingPage-plAb3IFI.js"])))=>i.map(i=>d[i]);
import{r as Om,j as p,S as Lm,R as Fm}from"./ui-vendor-IfqMdkXd.js";import{g as Vm,a as v,u as jm,L as Il,O as Um,b as Bm,d as Wm,R as Hm}from"./react-vendor-73flmPZe.js";import{c as _h,R as xl,B as zm,C as Sl,X as kl,Y as Al,T as Pl,a as $m,L as Gm,b as Km,d as Rl}from"./chart-vendor-BrJqDZ0A.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var Hs={},Nl;function qm(){if(Nl)return Hs;Nl=1;var t=Om();return Hs.createRoot=t.createRoot,Hs.hydrateRoot=t.hydrateRoot,Hs}var Ym=qm();const Xm=Vm(Ym),Qm="modulepreload",Jm=function(t){return"/"+t},Ml={},qe=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=o(n.map(c=>{if(c=Jm(c),c in Ml)return;Ml[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Qm,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((f,m)=>{d.addEventListener("load",f),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},Zm=()=>{};var Dl={};/**
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
 */const vh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw Sn(e)},Sn=function(t){return new Error("Firebase Database ("+vh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const wh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Xo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new tg;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bh=function(t){const e=wh(t);return Xo.encodeByteArray(e,!0)},yi=function(t){return bh(t).replace(/\./g,"")},_i=function(t){try{return Xo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ng(t){return Eh(void 0,t)}function Eh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sg(n)||(t[n]=Eh(t[n],e[n]));return t}function sg(t){return t!=="__proto__"}/**
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
 */function ig(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rg=()=>ig().__FIREBASE_DEFAULTS__,og=()=>{if(typeof process>"u"||typeof Dl>"u")return;const t=Dl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ag=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_i(t[1]);return e&&JSON.parse(e)},Qo=()=>{try{return Zm()||rg()||og()||ag()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Th=t=>{var e,n;return(n=(e=Qo())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},lg=t=>{const e=Th(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ch=()=>{var t;return(t=Qo())==null?void 0:t.config},Ih=t=>{var e;return(e=Qo())==null?void 0:e[`_${t}`]};/**
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
 */class Ts{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function cg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[yi(JSON.stringify(n)),yi(JSON.stringify(o)),""].join(".")}/**
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function ug(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dg(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fg(){return vh.NODE_ADMIN===!0}function pg(){try{return typeof indexedDB=="object"}catch{return!1}}function mg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const gg="FirebaseError";class At extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=gg,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?yg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new At(i,a,s)}}function yg(t,e){return t.replace(_g,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const _g=/\{\$([^}]+)}/g;/**
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
 */function os(t){return JSON.parse(t)}function ie(t){return JSON.stringify(t)}/**
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
 */const Sh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=os(_i(r[0])||""),n=os(_i(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},vg=function(t){const e=Sh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},wg=function(t){const e=Sh(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ye(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Zr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function $t(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ol(r)&&Ol(o)){if(!$t(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ol(t){return t!==null&&typeof t=="object"}/**
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
 */function kn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Gn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Kn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class bg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Eg(t,e){const n=new Tg(t,e);return n.subscribe.bind(n)}class Tg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Cg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=wr),i.error===void 0&&(i.error=wr),i.complete===void 0&&(i.complete=wr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wr(){}function Yi(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Ig=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function we(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Is(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kh(t){return(await fetch(t,{credentials:"include"})).ok}class Gt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lt="[DEFAULT]";/**
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
 */class xg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ts;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kg(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Sg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sg(t){return t===Lt?void 0:t}function kg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ag{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const Pg={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Rg=B.INFO,Ng={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Mg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ng[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zo{constructor(e){this.name=e,this._logLevel=Rg,this._logHandler=Mg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const Dg=(t,e)=>e.some(n=>t instanceof n);let Ll,Fl;function Og(){return Ll||(Ll=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lg(){return Fl||(Fl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ah=new WeakMap,eo=new WeakMap,Ph=new WeakMap,br=new WeakMap,ea=new WeakMap;function Fg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(_t(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ah.set(n,t)}).catch(()=>{}),ea.set(e,t),e}function Vg(t){if(eo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});eo.set(t,e)}let to={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return eo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ph.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jg(t){to=t(to)}function Ug(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Er(this),e,...n);return Ph.set(s,e.sort?e.sort():[e]),_t(s)}:Lg().includes(t)?function(...e){return t.apply(Er(this),e),_t(Ah.get(this))}:function(...e){return _t(t.apply(Er(this),e))}}function Bg(t){return typeof t=="function"?Ug(t):(t instanceof IDBTransaction&&Vg(t),Dg(t,Og())?new Proxy(t,to):t)}function _t(t){if(t instanceof IDBRequest)return Fg(t);if(br.has(t))return br.get(t);const e=Bg(t);return e!==t&&(br.set(t,e),ea.set(e,t)),e}const Er=t=>ea.get(t);function Wg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=_t(o);return s&&o.addEventListener("upgradeneeded",l=>{s(_t(o.result),l.oldVersion,l.newVersion,_t(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Hg=["get","getKey","getAll","getAllKeys","count"],zg=["put","add","delete","clear"],Tr=new Map;function Vl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tr.get(e))return Tr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=zg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Hg.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Tr.set(e,r),r}jg(t=>({...t,get:(e,n,s)=>Vl(e,n)||t.get(e,n,s),has:(e,n)=>!!Vl(e,n)||t.has(e,n)}));/**
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
 */class $g{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Gg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const no="@firebase/app",jl="0.14.11";/**
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
 */const st=new Zo("@firebase/app"),Kg="@firebase/app-compat",qg="@firebase/analytics-compat",Yg="@firebase/analytics",Xg="@firebase/app-check-compat",Qg="@firebase/app-check",Jg="@firebase/auth",Zg="@firebase/auth-compat",ey="@firebase/database",ty="@firebase/data-connect",ny="@firebase/database-compat",sy="@firebase/functions",iy="@firebase/functions-compat",ry="@firebase/installations",oy="@firebase/installations-compat",ay="@firebase/messaging",ly="@firebase/messaging-compat",cy="@firebase/performance",uy="@firebase/performance-compat",hy="@firebase/remote-config",dy="@firebase/remote-config-compat",fy="@firebase/storage",py="@firebase/storage-compat",my="@firebase/firestore",gy="@firebase/ai",yy="@firebase/firestore-compat",_y="firebase",vy="12.12.0";/**
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
 */const so="[DEFAULT]",wy={[no]:"fire-core",[Kg]:"fire-core-compat",[Yg]:"fire-analytics",[qg]:"fire-analytics-compat",[Qg]:"fire-app-check",[Xg]:"fire-app-check-compat",[Jg]:"fire-auth",[Zg]:"fire-auth-compat",[ey]:"fire-rtdb",[ty]:"fire-data-connect",[ny]:"fire-rtdb-compat",[sy]:"fire-fn",[iy]:"fire-fn-compat",[ry]:"fire-iid",[oy]:"fire-iid-compat",[ay]:"fire-fcm",[ly]:"fire-fcm-compat",[cy]:"fire-perf",[uy]:"fire-perf-compat",[hy]:"fire-rc",[dy]:"fire-rc-compat",[fy]:"fire-gcs",[py]:"fire-gcs-compat",[my]:"fire-fst",[yy]:"fire-fst-compat",[gy]:"fire-vertex","fire-js":"fire-js",[_y]:"fire-js-all"};/**
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
 */const wi=new Map,by=new Map,io=new Map;function Ul(t,e){try{t.container.addComponent(e)}catch(n){st.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(io.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;io.set(e,t);for(const n of wi.values())Ul(n,t);for(const n of by.values())Ul(n,t);return!0}function ta(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xe(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Ey={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new Cs("app","Firebase",Ey);/**
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
 */class Ty{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
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
 */const An=vy;function Rh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:so,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw vt.create("bad-app-name",{appName:String(i)});if(n||(n=Ch()),!n)throw vt.create("no-options");const r=wi.get(i);if(r){if($t(n,r.options)&&$t(s,r.config))return r;throw vt.create("duplicate-app",{appName:i})}const o=new Ag(i);for(const l of io.values())o.addComponent(l);const a=new Ty(n,s,o);return wi.set(i,a),a}function Nh(t=so){const e=wi.get(t);if(!e&&t===so&&Ch())return Rh();if(!e)throw vt.create("no-app",{appName:t});return e}function wt(t,e,n){let s=wy[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),st.warn(o.join(" "));return}_n(new Gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Cy="firebase-heartbeat-database",Iy=1,as="firebase-heartbeat-store";let Cr=null;function Mh(){return Cr||(Cr=Wg(Cy,Iy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(as)}catch(n){console.warn(n)}}}}).catch(t=>{throw vt.create("idb-open",{originalErrorMessage:t.message})})),Cr}async function xy(t){try{const n=(await Mh()).transaction(as),s=await n.objectStore(as).get(Dh(t));return await n.done,s}catch(e){if(e instanceof At)st.warn(e.message);else{const n=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});st.warn(n.message)}}}async function Bl(t,e){try{const s=(await Mh()).transaction(as,"readwrite");await s.objectStore(as).put(e,Dh(t)),await s.done}catch(n){if(n instanceof At)st.warn(n.message);else{const s=vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});st.warn(s.message)}}}function Dh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sy=1024,ky=30;class Ay{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ry(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>ky){const o=Ny(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){st.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wl(),{heartbeatsToSend:s,unsentEntries:i}=Py(this._heartbeatsCache.heartbeats),r=yi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return st.warn(n),""}}}function Wl(){return new Date().toISOString().substring(0,10)}function Py(t,e=Sy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Hl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ry{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pg()?mg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Bl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Bl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hl(t){return yi(JSON.stringify({version:2,heartbeats:t})).length}function Ny(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function My(t){_n(new Gt("platform-logger",e=>new $g(e),"PRIVATE")),_n(new Gt("heartbeat",e=>new Ay(e),"PRIVATE")),wt(no,jl,t),wt(no,jl,"esm2020"),wt("fire-js","")}My("");function Oh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dy=Oh,Lh=new Cs("auth","Firebase",Oh());/**
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
 */const bi=new Zo("@firebase/auth");function Oy(t,...e){bi.logLevel<=B.WARN&&bi.warn(`Auth (${An}): ${t}`,...e)}function ii(t,...e){bi.logLevel<=B.ERROR&&bi.error(`Auth (${An}): ${t}`,...e)}/**
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
 */function Pe(t,...e){throw sa(t,...e)}function Fe(t,...e){return sa(t,...e)}function na(t,e,n){const s={...Dy(),[e]:n};return new Cs("auth","Firebase",s).create(e,{appName:t.name})}function bt(t){return na(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ly(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Pe(t,"argument-error"),na(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sa(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Lh.create(t,...e)}function R(t,e,...n){if(!t)throw sa(e,...n)}function Ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ii(e),new Error(e)}function it(t,e){t||Ze(e)}/**
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
 */function ro(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Fy(){return zl()==="http:"||zl()==="https:"}function zl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Vy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fy()||hg()||"connection"in navigator)?navigator.onLine:!0}function jy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class xs{constructor(e,n){this.shortDelay=e,this.longDelay=n,it(n>e,"Short delay should be less than long delay!"),this.isMobile=Jo()||xh()}get(){return Vy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ia(t,e){it(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Fh{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Uy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const By=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Wy=new xs(3e4,6e4);function Zt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Pt(t,e,n,s,i={}){return Vh(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=kn({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...r};return ug()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Is(t.emulatorConfig.host)&&(c.credentials="include"),Fh.fetch()(await jh(t,t.config.apiHost,n,a),c)})}async function Vh(t,e,n){t._canInitEmulator=!1;const s={...Uy,...e};try{const i=new zy(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zs(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zs(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zs(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zs(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw na(t,u,c);Pe(t,u)}}catch(i){if(i instanceof At)throw i;Pe(t,"network-request-failed",{message:String(i)})}}async function Qi(t,e,n,s,i={}){const r=await Pt(t,e,n,s,i);return"mfaPendingCredential"in r&&Pe(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function jh(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?ia(t.config,i):`${t.config.apiScheme}://${i}`;return By.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Hy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Fe(this.auth,"network-request-failed")),Wy.get())})}}function zs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Fe(t,e,s);return i.customData._tokenResponse=n,i}function $l(t){return t!==void 0&&t.enterprise!==void 0}class $y{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Hy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Gy(t,e){return Pt(t,"GET","/v2/recaptchaConfig",Zt(t,e))}/**
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
 */async function Ky(t,e){return Pt(t,"POST","/v1/accounts:delete",e)}async function Ei(t,e){return Pt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qy(t,e=!1){const n=we(t),s=await n.getIdToken(e),i=ra(s);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Xn(Ir(i.auth_time)),issuedAtTime:Xn(Ir(i.iat)),expirationTime:Xn(Ir(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ir(t){return Number(t)*1e3}function ra(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ii("JWT malformed, contained fewer than 3 sections"),null;try{const i=_i(n);return i?JSON.parse(i):(ii("Failed to decode base64 JWT payload"),null)}catch(i){return ii("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Gl(t){const e=ra(t);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ls(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof At&&Yy(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Yy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Xy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class oo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xn(this.lastLoginAt),this.creationTime=Xn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ti(t){var h;const e=t.auth,n=await t.getIdToken(),s=await ls(t,Ei(e,{idToken:n}));R(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=(h=i.providerUserInfo)!=null&&h.length?Uh(i.providerUserInfo):[],o=Jy(t.providerData,r),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new oo(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function Qy(t){const e=we(t);await Ti(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jy(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Uh(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Zy(t,e){const n=await Vh(t,{},async()=>{const s=kn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await jh(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return t.emulatorConfig&&Is(t.emulatorConfig.host)&&(l.credentials="include"),Fh.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function e_(t,e){return Pt(t,"POST","/v2/accounts:revokeToken",Zt(t,e))}/**
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
 */class dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){R(e.length!==0,"internal-error");const n=Gl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Zy(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new dn;return s&&(R(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(R(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(R(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dn,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
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
 */function lt(t,e){R(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Oe{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new Xy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new oo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ls(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qy(this,e)}reload(){return Qy(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Oe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ti(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(bt(this.auth));const e=await this.getIdToken();return await ls(this,Ky(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:h,emailVerified:d,isAnonymous:f,providerData:m,stsTokenManager:g}=n;R(h&&g,e,"internal-error");const y=dn.fromJSON(this.name,g);R(typeof h=="string",e,"internal-error"),lt(s,e.name),lt(i,e.name),R(typeof d=="boolean",e,"internal-error"),R(typeof f=="boolean",e,"internal-error"),lt(r,e.name),lt(o,e.name),lt(a,e.name),lt(l,e.name),lt(c,e.name),lt(u,e.name);const _=new Oe({uid:h,auth:e,email:i,emailVerified:d,displayName:s,isAnonymous:f,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:y,createdAt:c,lastLoginAt:u});return m&&Array.isArray(m)&&(_.providerData=m.map(T=>({...T}))),l&&(_._redirectEventId=l),_}static async _fromIdTokenResponse(e,n,s=!1){const i=new dn;i.updateFromServerResponse(n);const r=new Oe({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ti(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];R(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Uh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new dn;a.updateFromIdToken(s);const l=new Oe({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new oo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Kl=new Map;function et(t){it(t instanceof Function,"Expected a class definition");let e=Kl.get(t);return e?(it(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kl.set(t,e),e)}/**
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
 */class Bh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bh.type="NONE";const ql=Bh;/**
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
 */function ri(t,e,n){return`firebase:${t}:${e}:${n}`}class fn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ri(this.userKey,i.apiKey,r),this.fullPersistenceKey=ri("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ei(this.auth,{idToken:e}).catch(()=>{});return n?Oe._fromGetAccountInfoResponse(this.auth,n,e):null}return Oe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new fn(et(ql),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||et(ql);const o=ri(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let h;if(typeof u=="string"){const d=await Ei(e,{idToken:u}).catch(()=>{});if(!d)break;h=await Oe._fromGetAccountInfoResponse(e,d,u)}else h=Oe._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new fn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new fn(r,e,s))}}/**
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
 */function Yl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($h(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kh(e))return"Blackberry";if(qh(e))return"Webos";if(Hh(e))return"Safari";if((e.includes("chrome/")||zh(e))&&!e.includes("edge/"))return"Chrome";if(Gh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wh(t=ve()){return/firefox\//i.test(t)}function Hh(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zh(t=ve()){return/crios\//i.test(t)}function $h(t=ve()){return/iemobile/i.test(t)}function Gh(t=ve()){return/android/i.test(t)}function Kh(t=ve()){return/blackberry/i.test(t)}function qh(t=ve()){return/webos/i.test(t)}function oa(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function t_(t=ve()){var e;return oa(t)&&!!((e=window.navigator)!=null&&e.standalone)}function n_(){return dg()&&document.documentMode===10}function Yh(t=ve()){return oa(t)||Gh(t)||qh(t)||Kh(t)||/windows phone/i.test(t)||$h(t)}/**
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
 */function Xh(t,e=[]){let n;switch(t){case"Browser":n=Yl(ve());break;case"Worker":n=`${Yl(ve())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${An}/${s}`}/**
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
 */class s_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function i_(t,e={}){return Pt(t,"GET","/v2/passwordPolicy",Zt(t,e))}/**
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
 */const r_=6;class o_{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??r_,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class a_{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xl(this),this.idTokenSubscription=new Xl(this),this.beforeStateQueue=new s_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=et(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await fn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ei(this,{idToken:e}),s=await Oe._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ti(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(bt(this));const n=e?we(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await i_(this),n=new o_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await e_(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&et(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await fn.create(this,[et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Oy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function en(t){return we(t)}class Xl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Eg(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ji={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function l_(t){Ji=t}function Qh(t){return Ji.loadJS(t)}function c_(){return Ji.recaptchaEnterpriseScript}function u_(){return Ji.gapiScript}function h_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class d_{constructor(){this.enterprise=new f_}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class f_{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const p_="recaptcha-enterprise",Jh="NO_RECAPTCHA";class m_{constructor(e){this.type=p_,this.auth=en(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Gy(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new $y(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;$l(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Jh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new d_().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&$l(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=c_();l.length!==0&&(l+=a),Qh(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ql(t,e,n,s=!1,i=!1){const r=new m_(t);let o;if(i)o=Jh;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Jl(t,e,n,s,i){var r;if((r=t._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ql(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ql(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function g_(t,e){const n=ta(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if($t(r,e??{}))return i;Pe(i,"already-initialized")}return n.initialize({options:e})}function y_(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function __(t,e,n){const s=en(t);R(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Zh(e),{host:o,port:a}=v_(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){R(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),R($t(c,s.config.emulator)&&$t(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,Is(o)?kh(`${r}//${o}${l}`):w_()}function Zh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function v_(t){const e=Zh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Zl(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Zl(o)}}}function Zl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function w_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class aa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,n){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}async function b_(t,e){return Pt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function E_(t,e){return Qi(t,"POST","/v1/accounts:signInWithPassword",Zt(t,e))}/**
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
 */async function T_(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",Zt(t,e))}async function C_(t,e){return Qi(t,"POST","/v1/accounts:signInWithEmailLink",Zt(t,e))}/**
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
 */class cs extends aa{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new cs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new cs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jl(e,n,"signInWithPassword",E_);case"emailLink":return T_(e,{email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jl(e,s,"signUpPassword",b_);case"emailLink":return C_(e,{idToken:n,email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function pn(t,e){return Qi(t,"POST","/v1/accounts:signInWithIdp",Zt(t,e))}/**
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
 */const I_="http://localhost";class Kt extends aa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new Kt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,pn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pn(e,n)}buildRequest(){const e={requestUri:I_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=kn(n)}return e}}/**
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
 */function x_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S_(t){const e=Gn(Kn(t)).link,n=e?Gn(Kn(e)).deep_link_id:null,s=Gn(Kn(t)).deep_link_id;return(s?Gn(Kn(s)).link:null)||s||n||e||t}class la{constructor(e){const n=Gn(Kn(e)),s=n.apiKey??null,i=n.oobCode??null,r=x_(n.mode??null);R(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=S_(e);try{return new la(n)}catch{return null}}}/**
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
 */class Pn{constructor(){this.providerId=Pn.PROVIDER_ID}static credential(e,n){return cs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=la.parseLink(n);return R(s,"argument-error"),cs._fromEmailAndCode(e,s.code,s.tenantId)}}Pn.PROVIDER_ID="password";Pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ca{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ss extends ca{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ft extends Ss{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
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
 */class Je extends Ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kt._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Je.credential(n,s)}catch{return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com";Je.PROVIDER_ID="google.com";/**
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
 */class pt extends Ss{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com";pt.PROVIDER_ID="github.com";/**
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
 */class mt extends Ss{constructor(){super("twitter.com")}static credential(e,n){return Kt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return mt.credential(n,s)}catch{return null}}}mt.TWITTER_SIGN_IN_METHOD="twitter.com";mt.PROVIDER_ID="twitter.com";/**
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
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Oe._fromIdTokenResponse(e,s,i),o=ec(s);return new vn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=ec(s);return new vn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function ec(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ci extends At{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ci.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ci(e,n,s,i)}}function ed(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ci._fromErrorAndOperation(t,r,e,s):r})}async function k_(t,e,n=!1){const s=await ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vn._forOperation(t,"link",s)}/**
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
 */async function A_(t,e,n=!1){const{auth:s}=t;if(xe(s.app))return Promise.reject(bt(s));const i="reauthenticate";try{const r=await ls(t,ed(s,i,e,t),n);R(r.idToken,s,"internal-error");const o=ra(r.idToken);R(o,s,"internal-error");const{sub:a}=o;return R(t.uid===a,s,"user-mismatch"),vn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Pe(s,"user-mismatch"),r}}/**
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
 */async function td(t,e,n=!1){if(xe(t.app))return Promise.reject(bt(t));const s="signIn",i=await ed(t,s,e),r=await vn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function P_(t,e){return td(en(t),e)}/**
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
 */async function R_(t){const e=en(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function N_(t,e,n){return xe(t.app)?Promise.reject(bt(t)):P_(we(t),Pn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&R_(t),s})}function M_(t,e,n,s){return we(t).onIdTokenChanged(e,n,s)}function D_(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function O_(t,e,n,s){return we(t).onAuthStateChanged(e,n,s)}const Ii="__sak";/**
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
 */class nd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ii,"1"),this.storage.removeItem(Ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const L_=1e3,F_=10;class sd extends nd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);n_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,F_):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},L_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sd.type="LOCAL";const V_=sd;/**
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
 */class id extends nd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}id.type="SESSION";const rd=id;/**
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
 */function j_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Zi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await j_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zi.receivers=[];/**
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
 */function ua(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class U_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ua("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $e(){return window}function B_(t){$e().location.href=t}/**
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
 */function od(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function W_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function z_(){return od()?self:null}/**
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
 */const ad="firebaseLocalStorageDb",$_=1,xi="firebaseLocalStorage",ld="fbase_key";class ks{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function er(t,e){return t.transaction([xi],e?"readwrite":"readonly").objectStore(xi)}function G_(){const t=indexedDB.deleteDatabase(ad);return new ks(t).toPromise()}function ao(){const t=indexedDB.open(ad,$_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(xi,{keyPath:ld})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(xi)?e(s):(s.close(),await G_(),e(await ao()))})})}async function tc(t,e,n){const s=er(t,!0).put({[ld]:e,value:n});return new ks(s).toPromise()}async function K_(t,e){const n=er(t,!1).get(e),s=await new ks(n).toPromise();return s===void 0?null:s.value}function nc(t,e){const n=er(t,!0).delete(e);return new ks(n).toPromise()}const q_=800,Y_=3;class cd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ao(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Y_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return od()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zi._getInstance(z_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await W_(),!this.activeServiceWorker)return;this.sender=new U_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||H_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ao();return await tc(e,Ii,"1"),await nc(e,Ii),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>tc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>K_(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=er(i,!1).getAll();return new ks(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),q_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cd.type="LOCAL";const X_=cd;new xs(3e4,6e4);/**
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
 */function ud(t,e){return e?et(e):(R(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ha extends aa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Q_(t){return td(t.auth,new ha(t),t.bypassAuthState)}function J_(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),A_(n,new ha(t),t.bypassAuthState)}async function Z_(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),k_(n,new ha(t),t.bypassAuthState)}/**
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
 */class hd{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q_;case"linkViaPopup":case"linkViaRedirect":return Z_;case"reauthViaPopup":case"reauthViaRedirect":return J_;default:Pe(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ev=new xs(2e3,1e4);async function tv(t,e,n){if(xe(t.app))return Promise.reject(Fe(t,"operation-not-supported-in-this-environment"));const s=en(t);Ly(t,e,ca);const i=ud(s,n);return new jt(s,"signInViaPopup",e,i).executeNotNull()}class jt extends hd{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,jt.currentPopupAction&&jt.currentPopupAction.cancel(),jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=ua();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ev.get())};e()}}jt.currentPopupAction=null;/**
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
 */const nv="pendingRedirect",oi=new Map;class sv extends hd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const s=await iv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}oi.set(this.auth._key(),e)}return this.bypassAuthState||oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iv(t,e){const n=av(e),s=ov(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function rv(t,e){oi.set(t._key(),e)}function ov(t){return et(t._redirectPersistence)}function av(t){return ri(nv,t.config.apiKey,t.name)}async function lv(t,e,n=!1){if(xe(t.app))return Promise.reject(bt(t));const s=en(t),i=ud(s,e),o=await new sv(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const cv=600*1e3;class uv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!dd(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Fe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cv&&this.cachedEventUids.clear(),this.cachedEventUids.has(sc(e))}saveEventToCache(e){this.cachedEventUids.add(sc(e)),this.lastProcessedEventTime=Date.now()}}function sc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dd(t);default:return!1}}/**
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
 */async function dv(t,e={}){return Pt(t,"GET","/v1/projects",e)}/**
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
 */const fv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pv=/^https?/;async function mv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dv(t);for(const n of e)try{if(gv(n))return}catch{}Pe(t,"unauthorized-domain")}function gv(t){const e=ro(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!pv.test(n))return!1;if(fv.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const yv=new xs(3e4,6e4);function ic(){const t=$e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _v(t){return new Promise((e,n)=>{var i,r,o;function s(){ic(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ic(),n(Fe(t,"network-request-failed"))},timeout:yv.get()})}if((r=(i=$e().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=$e().gapi)!=null&&o.load)s();else{const a=h_("iframefcb");return $e()[a]=()=>{gapi.load?s():n(Fe(t,"network-request-failed"))},Qh(`${u_()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ai=null,e})}let ai=null;function vv(t){return ai=ai||_v(t),ai}/**
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
 */const wv=new xs(5e3,15e3),bv="__/auth/iframe",Ev="emulator/auth/iframe",Tv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Iv(t){const e=t.config;R(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ia(e,Ev):`https://${t.config.authDomain}/${bv}`,s={apiKey:e.apiKey,appName:t.name,v:An},i=Cv.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${kn(s).slice(1)}`}async function xv(t){const e=await vv(t),n=$e().gapi;return R(n,t,"internal-error"),e.open({where:document.body,url:Iv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tv,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Fe(t,"network-request-failed"),a=$e().setTimeout(()=>{r(o)},wv.get());function l(){$e().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Sv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kv=500,Av=600,Pv="_blank",Rv="http://localhost";class rc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nv(t,e,n,s=kv,i=Av){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l={...Sv,width:s.toString(),height:i.toString(),top:r,left:o},c=ve().toLowerCase();n&&(a=zh(c)?Pv:n),Wh(c)&&(e=e||Rv,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(t_(c)&&a!=="_self")return Mv(e||"",a),new rc(null);const h=window.open(e||"",a,u);R(h,t,"popup-blocked");try{h.focus()}catch{}return new rc(h)}function Mv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Dv="__/auth/handler",Ov="emulator/auth/handler",Lv=encodeURIComponent("fac");async function oc(t,e,n,s,i,r){R(t.config.authDomain,t,"auth-domain-config-required"),R(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:An,eventId:i};if(e instanceof ca){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Zr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Ss){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Lv}=${encodeURIComponent(l)}`:"";return`${Fv(t)}?${kn(a).slice(1)}${c}`}function Fv({config:t}){return t.emulator?ia(t,Ov):`https://${t.authDomain}/${Dv}`}/**
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
 */const xr="webStorageSupport";class Vv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rd,this._completeRedirectFn=lv,this._overrideRedirectResult=rv}async _openPopup(e,n,s,i){var o;it((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await oc(e,n,s,ro(),i);return Nv(e,r,ua())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await oc(e,n,s,ro(),i);return B_(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(it(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xv(e),s=new uv(e);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xr,{type:xr},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[xr];r!==void 0&&n(!!r),Pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yh()||Hh()||oa()}}const jv=Vv;var ac="@firebase/auth",lc="1.13.0";/**
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
 */class Uv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Bv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wv(t){_n(new Gt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xh(t)},c=new a_(s,i,r,l);return y_(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_n(new Gt("auth-internal",e=>{const n=en(e.getProvider("auth").getImmediate());return(s=>new Uv(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(ac,lc,Bv(t)),wt(ac,lc,"esm2020")}/**
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
 */const Hv=300,zv=Ih("authIdTokenMaxAge")||Hv;let cc=null;const $v=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>zv)return;const i=n==null?void 0:n.token;cc!==i&&(cc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gv(t=Nh()){const e=ta(t,"auth");if(e.isInitialized())return e.getImmediate();const n=g_(t,{popupRedirectResolver:jv,persistence:[X_,V_,rd]}),s=Ih("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=$v(r.toString());D_(n,o,()=>o(n.currentUser)),M_(n,a=>o(a))}}const i=Th("auth");return i&&__(n,`http://${i}`),n}function Kv(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}l_({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Fe("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Kv().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wv("Browser");var qv="firebase",Yv="12.12.1";/**
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
 */wt(qv,Yv,"app");var uc={};const hc="@firebase/database",dc="1.1.2";/**
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
 */let fd="";function Xv(t){fd=t}/**
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
 */class Qv{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Jv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ye(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const pd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Qv(e)}}catch{}return new Jv},Ut=pd("localStorage"),Zv=pd("sessionStorage");/**
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
 */const mn=new Zo("@firebase/database"),ew=(function(){let t=1;return function(){return t++}})(),md=function(t){const e=Ig(t),n=new bg;n.update(e);const s=n.digest();return Xo.encodeByteArray(s)},As=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=As.apply(null,s):typeof s=="object"?e+=ie(s):e+=s,e+=" "}return e};let Qn=null,fc=!0;const tw=function(t,e){b(!0,"Can't turn on custom loggers persistently."),mn.logLevel=B.VERBOSE,Qn=mn.log.bind(mn)},ce=function(...t){if(fc===!0&&(fc=!1,Qn===null&&Zv.get("logging_enabled")===!0&&tw()),Qn){const e=As.apply(null,t);Qn(e)}},Ps=function(t){return function(...e){ce(t,...e)}},lo=function(...t){const e="FIREBASE INTERNAL ERROR: "+As(...t);mn.error(e)},rt=function(...t){const e=`FIREBASE FATAL ERROR: ${As(...t)}`;throw mn.error(e),new Error(e)},_e=function(...t){const e="FIREBASE WARNING: "+As(...t);mn.warn(e)},nw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_e("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},da=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wn="[MIN_NAME]",qt="[MAX_NAME]",tn=function(t,e){if(t===e)return 0;if(t===wn||e===qt)return-1;if(e===wn||t===qt)return 1;{const n=pc(t),s=pc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},iw=function(t,e){return t===e?0:t<e?-1:1},Un=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ie(e))},fa=function(t){if(typeof t!="object"||t===null)return ie(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ie(e[s]),n+=":",n+=fa(t[e[s]]);return n+="}",n},gd=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function he(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const yd=function(t){b(!da(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},rw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ow=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function aw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const lw=new RegExp("^-?(0*)\\d{1,10}$"),cw=-2147483648,uw=2147483647,pc=function(t){if(lw.test(t)){const e=Number(t);if(e>=cw&&e<=uw)return e}return null},Rn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw _e("Exception was thrown by user callback.",n),e},Math.floor(0))}},hw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Jn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class dw{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,xe(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){_e(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class fw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_e(e)}}class li{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}li.OWNER="owner";/**
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
 */const pa="5",_d="v",vd="s",wd="r",bd="f",Ed=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Td="ls",Cd="p",co="ac",Id="websocket",xd="long_polling";/**
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
 */class Sd{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ut.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ut.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function pw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function kd(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Id)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===xd)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pw(t)&&(n.ns=t.namespace);const i=[];return he(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class mw{constructor(){this.counters_={}}incrementCounter(e,n=1){Ye(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ng(this.counters_)}}/**
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
 */const Sr={},kr={};function ma(t){const e=t.toString();return Sr[e]||(Sr[e]=new mw),Sr[e]}function gw(t,e){const n=t.toString();return kr[n]||(kr[n]=e()),kr[n]}/**
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
 */class yw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Rn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const mc="start",_w="close",vw="pLPCommand",ww="pRTLPCB",Ad="id",Pd="pw",Rd="ser",bw="cb",Ew="seg",Tw="ts",Cw="d",Iw="dframe",Nd=1870,Md=30,xw=Nd-Md,Sw=25e3,kw=3e4;class an{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ps(e),this.stats_=ma(n),this.urlFn=l=>(this.appCheckToken&&(l[co]=this.appCheckToken),kd(n,xd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new yw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kw)),sw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ga((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mc)this.id=a,this.password=l;else if(o===_w)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[mc]="t",s[Rd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[bw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[_d]=pa,this.transportSessionId&&(s[vd]=this.transportSessionId),this.lastSessionId&&(s[Td]=this.lastSessionId),this.applicationId&&(s[Cd]=this.applicationId),this.appCheckToken&&(s[co]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ed.test(location.hostname)&&(s[wd]=bd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){an.forceAllow_=!0}static forceDisallow(){an.forceDisallow_=!0}static isAvailable(){return an.forceAllow_?!0:!an.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rw()&&!ow()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=bh(n),i=gd(s,xw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Iw]="t",s[Ad]=e,s[Pd]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ga{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ew(),window[vw+this.uniqueCallbackIdentifier]=e,window[ww+this.uniqueCallbackIdentifier]=n,this.myIFrame=ga.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ce("frame writing exception"),a.stack&&ce(a.stack),ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ce("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ad]=this.myID,e[Pd]=this.myPW,e[Rd]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Md+s.length<=Nd;){const o=this.pendingSegs.shift();s=s+"&"+Ew+i+"="+o.seg+"&"+Tw+i+"="+o.ts+"&"+Cw+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Sw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Aw=16384,Pw=45e3;let Si=null;typeof MozWebSocket<"u"?Si=MozWebSocket:typeof WebSocket<"u"&&(Si=WebSocket);class De{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ps(this.connId),this.stats_=ma(n),this.connURL=De.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[_d]=pa,typeof location<"u"&&location.hostname&&Ed.test(location.hostname)&&(o[wd]=bd),n&&(o[vd]=n),s&&(o[Td]=s),i&&(o[co]=i),r&&(o[Cd]=r),kd(e,Id,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ut.set("previous_websocket_failure",!0);try{let s;fg(),this.mySock=new Si(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Si!==null&&!De.forceDisallow_}static previouslyFailed(){return Ut.isInMemoryStorage||Ut.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ut.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=os(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gd(n,Aw);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Pw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}De.responsesRequiredToBeHealthy=2;De.healthyTimeout=3e4;/**
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
 */class us{static get ALL_TRANSPORTS(){return[an,De]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=De&&De.isAvailable();let s=n&&!De.previouslyFailed();if(e.webSocketOnly&&(n||_e("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[De];else{const i=this.transports_=[];for(const r of us.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}us.globalTransportInitialized_=!1;/**
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
 */const Rw=6e4,Nw=5e3,Mw=10*1024,Dw=100*1024,Ar="t",gc="d",Ow="s",yc="r",Lw="e",_c="o",vc="a",wc="n",bc="p",Fw="h";class Vw{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ps("c:"+this.id+":"),this.transportManager_=new us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Jn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Dw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Mw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ar in e){const n=e[Ar];n===vc?this.upgradeIfSecondaryHealthy_():n===yc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_c&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Un("t",e),s=Un("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Un("t",e),s=Un("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Un(Ar,e);if(gc in e){const s=e[gc];if(n===Fw){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===wc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ow?this.onConnectionShutdown_(s):n===yc?this.onReset_(s):n===Lw?lo("Server Error: "+s):n===_c?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),pa!==s&&_e("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Jn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Rw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Nw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ut.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Dd{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Od{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ki extends Od{static getInstance(){return new ki}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ec=32,Tc=768;class W{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new W("")}function O(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ct(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new W(t.pieces_,e)}function ya(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function hs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ld(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new W(e,0)}function Q(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof W)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new W(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function me(t,e){const n=O(t),s=O(e);if(n===null)return e;if(n===s)return me(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Uw(t,e){const n=hs(t,0),s=hs(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=tn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function _a(t,e){if(Ct(t)!==Ct(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Se(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ct(t)>Ct(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Bw{constructor(e,n){this.errorPrefix_=n,this.parts_=hs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xi(this.parts_[s]);Fd(this)}}function Ww(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Xi(e),Fd(t)}function Hw(t){const e=t.parts_.pop();t.byteLength_-=Xi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fd(t){if(t.byteLength_>Tc)throw new Error(t.errorPrefix_+"has a key path longer than "+Tc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ec)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ec+") or object contains a cycle "+Ft(t))}function Ft(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class va extends Od{static getInstance(){return new va}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Bn=1e3,zw=300*1e3,Cc=30*1e3,$w=1.3,Gw=3e4,Kw="server_kill",Ic=3;class nt extends Dd{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=nt.nextPersistentConnectionId_++,this.log_=Ps("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bn,this.maxReconnectDelay_=zw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");va.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ki.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ie(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ts,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;nt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ye(e,"w")){const s=yn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();_e(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||wg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ie(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):lo("Unrecognized action received from server: "+ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gw&&(this.reconnectDelay_=Bn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$w)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ce("getToken() completed but was canceled"):(ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Vw(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{_e(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Kw)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&_e(h),l())}}}interrupt(e){ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zr(this.interruptReasons_)&&(this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>fa(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new W(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ic&&(this.reconnectDelay_=Cc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ic&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fd.replace(/\./g,"-")]=1,Jo()?e["framework.cordova"]=1:xh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ki.getInstance().currentlyOnline();return Zr(this.interruptReasons_)&&e}}nt.nextPersistentConnectionId_=0;nt.nextConnectionId_=0;/**
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
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
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
 */class tr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new L(wn,e),i=new L(wn,n);return this.compare(s,i)!==0}minPost(){return L.MIN}}/**
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
 */let $s;class Vd extends tr{static get __EMPTY_NODE(){return $s}static set __EMPTY_NODE(e){$s=e}compare(e,n){return tn(e.name,n.name)}isDefinedOn(e){throw Sn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L(qt,$s)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,$s)}toString(){return".key"}}const gn=new Vd;/**
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
 */class Gs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ae{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ae.RED,this.left=i??Ee.EMPTY_NODE,this.right=r??Ee.EMPTY_NODE}copy(e,n,s,i,r){return new ae(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ee.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ee.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ae.RED=!0;ae.BLACK=!1;class qw{copy(e,n,s,i,r){return this}insert(e,n,s){return new ae(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ee{constructor(e,n=Ee.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ee(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ae.BLACK,null,null))}remove(e){return new Ee(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ae.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Gs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Gs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Gs(this.root_,null,this.comparator_,!0,e)}}Ee.EMPTY_NODE=new qw;/**
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
 */function Yw(t,e){return tn(t.name,e.name)}function wa(t,e){return tn(t,e)}/**
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
 */let uo;function Xw(t){uo=t}const jd=function(t){return typeof t=="number"?"number:"+yd(t):"string:"+t},Ud=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ye(e,".sv"),"Priority must be a string or number.")}else b(t===uo||t.isEmpty(),"priority of unexpected type.");b(t===uo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let xc;class oe{static set __childrenNodeConstructor(e){xc=e}static get __childrenNodeConstructor(){return xc}constructor(e,n=oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ud(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:O(e)===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=O(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||Ct(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+jd(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=yd(this.value_):e+=this.value_,this.lazyHash_=md(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof oe.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=oe.VALUE_TYPE_ORDER.indexOf(n),r=oe.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Bd,Wd;function Qw(t){Bd=t}function Jw(t){Wd=t}class Zw extends tr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?tn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L(qt,new oe("[PRIORITY-POST]",Wd))}makePost(e,n){const s=Bd(e);return new L(n,new oe("[PRIORITY-POST]",s))}toString(){return".priority"}}const J=new Zw;/**
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
 */const eb=Math.log(2);class tb{constructor(e){const n=r=>parseInt(Math.log(r)/eb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ai=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new ae(d,h.node,ae.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=i(l,f),g=i(f+1,c);return h=t[f],d=n?n(h):h,new ae(d,h.node,ae.BLACK,m,g)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,g){const y=h-m,_=h;h-=m;const T=i(y+1,_),E=t[y],C=n?n(E):E;f(new ae(C,E.node,g,null,T))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const g=l.nextBitIsOne(),y=Math.pow(2,l.count-(m+1));g?d(y,ae.BLACK):(d(y,ae.BLACK),d(y,ae.RED))}return u},o=new tb(t.length),a=r(o);return new Ee(s||e,a)};/**
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
 */let Pr;const sn={};class tt{static get Default(){return b(sn&&J,"ChildrenNode.ts has not been loaded"),Pr=Pr||new tt({".priority":sn},{".priority":J}),Pr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=yn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ee?n:null}hasIndex(e){return Ye(this.indexSet_,e.toString())}addIndex(e,n){b(e!==gn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(L.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ai(s,e.getCompare()):a=sn;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new tt(u,c)}addToIndexes(e,n){const s=vi(this.indexes_,(i,r)=>{const o=yn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===sn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(L.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ai(a,o.getCompare())}else return sn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new L(e.name,a))),l.insert(e,e.node)}});return new tt(s,this.indexSet_)}removeFromIndexes(e,n){const s=vi(this.indexes_,i=>{if(i===sn)return i;{const r=n.get(e.name);return r?i.remove(new L(e.name,r)):i}});return new tt(s,this.indexSet_)}}/**
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
 */let Wn;class N{static get EMPTY_NODE(){return Wn||(Wn=new N(new Ee(wa),null,tt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ud(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wn}updatePriority(e){return this.children_.isEmpty()?this:new N(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Wn:n}}getChild(e){const n=O(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new L(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Wn:this.priorityNode_;return new N(i,o,r)}}updateChild(e,n){const s=O(e);if(s===null)return n;{b(O(e)!==".priority"||Ct(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(G(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(J,(o,a)=>{n[o]=a.val(e),s++,r&&N.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+jd(this.getPriority().val())+":"),this.forEachChild(J,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":md(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new L(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rs?-1:0}withIndex(e){if(e===gn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new N(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===gn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(J),i=n.getIterator(J);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===gn?null:this.indexMap_.get(e.toString())}}N.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nb extends N{constructor(){super(new Ee(wa),N.EMPTY_NODE,tt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return N.EMPTY_NODE}isEmpty(){return!1}}const Rs=new nb;Object.defineProperties(L,{MIN:{value:new L(wn,N.EMPTY_NODE)},MAX:{value:new L(qt,Rs)}});Vd.__EMPTY_NODE=N.EMPTY_NODE;oe.__childrenNodeConstructor=N;Xw(Rs);Jw(Rs);/**
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
 */const sb=!0;function se(t,e=null){if(t===null)return N.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new oe(n,se(e))}if(!(t instanceof Array)&&sb){const n=[];let s=!1;if(he(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=se(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new L(o,l)))}}),n.length===0)return N.EMPTY_NODE;const r=Ai(n,Yw,o=>o.name,wa);if(s){const o=Ai(n,J.getCompare());return new N(r,se(e),new tt({".priority":o},{".priority":J}))}else return new N(r,se(e),tt.Default)}else{let n=N.EMPTY_NODE;return he(t,(s,i)=>{if(Ye(t,s)&&s.substring(0,1)!=="."){const r=se(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(se(e))}}Qw(se);/**
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
 */class ib extends tr{constructor(e){super(),this.indexPath_=e,b(!F(e)&&O(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?tn(e.name,n.name):r}makePost(e,n){const s=se(e),i=N.EMPTY_NODE.updateChild(this.indexPath_,s);return new L(n,i)}maxPost(){const e=N.EMPTY_NODE.updateChild(this.indexPath_,Rs);return new L(qt,e)}toString(){return hs(this.indexPath_,0).join("/")}}/**
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
 */class rb extends tr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?tn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const s=se(e);return new L(n,s)}toString(){return".value"}}const ob=new rb;/**
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
 */function Hd(t){return{type:"value",snapshotNode:t}}function bn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ds(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ab(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ba{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ds(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(bn(n,s)):o.trackChildChange(fs(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(J,(i,r)=>{n.hasChild(i)||s.trackChildChange(ds(i,r))}),n.isLeafNode()||n.forEachChild(J,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(fs(i,r,o))}else s.trackChildChange(bn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?N.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ps{constructor(e){this.indexedFilter_=new ba(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ps.getStartPost_(e),this.endPost_=ps.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new L(n,s))||(s=N.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=N.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(N.EMPTY_NODE);const r=this;return n.forEachChild(J,(o,a)=>{r.matches(new L(o,a))||(i=i.updateImmediateChild(o,N.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class lb{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new L(n,s))||(s=N.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=N.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=N.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(N.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,N.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const l=new L(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(fs(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ds(n,h));const g=a.updateImmediateChild(n,N.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(bn(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ds(c.name,c.node)),r.trackChildChange(bn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,N.EMPTY_NODE)):e}}/**
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
 */class Ea{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=J}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===J}copy(){const e=new Ea;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cb(t){return t.loadsAllData()?new ba(t.getIndex()):t.hasLimit()?new lb(t):new ps(t)}function Sc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===J?n="$priority":t.index_===ob?n="$value":t.index_===gn?n="$key":(b(t.index_ instanceof ib,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ie(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ie(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ie(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ie(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==J&&(e.i=t.index_.toString()),e}/**
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
 */class Pi extends Dd{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ps("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Pi.getListenId_(e,s),a={};this.listens_[o]=a;const l=Sc(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),yn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Pi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Sc(e._queryParams),s=e._path.toString(),i=new Ts;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+kn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=os(a.responseText)}catch{_e("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&_e("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class ub{constructor(){this.rootNode_=N.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ri(){return{value:null,children:new Map}}function zd(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=O(e);t.children.has(s)||t.children.set(s,Ri());const i=t.children.get(s);e=G(e),zd(i,e,n)}}function ho(t,e,n){t.value!==null?n(e,t.value):hb(t,(s,i)=>{const r=new W(e.toString()+"/"+s);ho(i,r,n)})}function hb(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class db{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&he(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Ac=10*1e3,fb=30*1e3,pb=300*1e3;class mb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new db(e);const s=Ac+(fb-Ac)*Math.random();Jn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;he(e,(i,r)=>{r>0&&Ye(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Jn(this.reportStats_.bind(this),Math.floor(Math.random()*2*pb))}}/**
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
 */var Le;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Le||(Le={}));function Ta(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ca(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ia(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ni{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Le.ACK_USER_WRITE,this.source=Ta()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new W(e));return new Ni(j(),n,this.revert)}}else return b(O(this.path)===e,"operationForChild called for unrelated child."),new Ni(G(this.path),this.affectedTree,this.revert)}}/**
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
 */class ms{constructor(e,n){this.source=e,this.path=n,this.type=Le.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new ms(this.source,j()):new ms(this.source,G(this.path))}}/**
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
 */class Yt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Le.OVERWRITE}operationForChild(e){return F(this.path)?new Yt(this.source,j(),this.snap.getImmediateChild(e)):new Yt(this.source,G(this.path),this.snap)}}/**
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
 */class En{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Le.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new W(e));return n.isEmpty()?null:n.value?new Yt(this.source,j(),n.value):new En(this.source,j(),n)}else return b(O(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new En(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class It{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=O(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class gb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yb(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ab(o.childName,o.snapshotNode))}),Hn(t,i,"child_removed",e,s,n),Hn(t,i,"child_added",e,s,n),Hn(t,i,"child_moved",r,s,n),Hn(t,i,"child_changed",e,s,n),Hn(t,i,"value",e,s,n),i}function Hn(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>vb(t,a,l)),o.forEach(a=>{const l=_b(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function _b(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function vb(t,e,n){if(e.childName==null||n.childName==null)throw Sn("Should only compare child_ events.");const s=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function nr(t,e){return{eventCache:t,serverCache:e}}function Zn(t,e,n,s){return nr(new It(e,n,s),t.serverCache)}function $d(t,e,n,s){return nr(t.eventCache,new It(e,n,s))}function Mi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Rr;const wb=()=>(Rr||(Rr=new Ee(iw)),Rr);class ${static fromObject(e){let n=new $(null);return he(e,(s,i)=>{n=n.set(new W(s),i)}),n}constructor(e,n=wb()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(F(e))return null;{const s=O(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(G(e),n);return r!=null?{path:Q(new W(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=O(e),s=this.children.get(n);return s!==null?s.subtree(G(e)):new $(null)}}set(e,n){if(F(e))return new $(n,this.children);{const s=O(e),r=(this.children.get(s)||new $(null)).set(G(e),n),o=this.children.insert(s,r);return new $(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new $(null):new $(null,this.children);{const n=O(e),s=this.children.get(n);if(s){const i=s.remove(G(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new $(null):new $(this.value,r)}else return this}}get(e){if(F(e))return this.value;{const n=O(e),s=this.children.get(n);return s?s.get(G(e)):null}}setTree(e,n){if(F(e))return n;{const s=O(e),r=(this.children.get(s)||new $(null)).setTree(G(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new $(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Q(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(F(e))return null;{const r=O(e),o=this.children.get(r);return o?o.findOnPath_(G(e),Q(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,s){if(F(e))return this;{this.value&&s(n,this.value);const i=O(e),r=this.children.get(i);return r?r.foreachOnPath_(G(e),Q(n,i),s):new $(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Q(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Ve{constructor(e){this.writeTree_=e}static empty(){return new Ve(new $(null))}}function es(t,e,n){if(F(e))return new Ve(new $(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=me(i,e);return r=r.updateChild(o,n),new Ve(t.writeTree_.set(i,r))}else{const i=new $(n),r=t.writeTree_.setTree(e,i);return new Ve(r)}}}function fo(t,e,n){let s=t;return he(n,(i,r)=>{s=es(s,Q(e,i),r)}),s}function Pc(t,e){if(F(e))return Ve.empty();{const n=t.writeTree_.setTree(e,new $(null));return new Ve(n)}}function po(t,e){return nn(t,e)!=null}function nn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(me(n.path,e)):null}function Rc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(J,(s,i)=>{e.push(new L(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new L(s,i.value))}),e}function Et(t,e){if(F(e))return t;{const n=nn(t,e);return n!=null?new Ve(new $(n)):new Ve(t.writeTree_.subtree(e))}}function mo(t){return t.writeTree_.isEmpty()}function Tn(t,e){return Gd(j(),t.writeTree_,e)}function Gd(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Gd(Q(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Q(t,".priority"),s)),n}}/**
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
 */function sr(t,e){return Xd(e,t)}function bb(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=es(t.visibleWrites,e,n)),t.lastWriteId=s}function Eb(t,e,n,s){b(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=fo(t.visibleWrites,e,n),t.lastWriteId=s}function Tb(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Cb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Ib(a,s.path)?i=!1:Se(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return xb(t),!0;if(s.snap)t.visibleWrites=Pc(t.visibleWrites,s.path);else{const a=s.children;he(a,l=>{t.visibleWrites=Pc(t.visibleWrites,Q(s.path,l))})}return!0}else return!1}function Ib(t,e){if(t.snap)return Se(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Se(Q(t.path,n),e))return!0;return!1}function xb(t){t.visibleWrites=Kd(t.allWrites,Sb,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Sb(t){return t.visible}function Kd(t,e,n){let s=Ve.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Se(n,o)?(a=me(n,o),s=es(s,a,r.snap)):Se(o,n)&&(a=me(o,n),s=es(s,j(),r.snap.getChild(a)));else if(r.children){if(Se(n,o))a=me(n,o),s=fo(s,a,r.children);else if(Se(o,n))if(a=me(o,n),F(a))s=fo(s,j(),r.children);else{const l=yn(r.children,O(a));if(l){const c=l.getChild(G(a));s=es(s,j(),c)}}}else throw Sn("WriteRecord should have .snap or .children")}}return s}function qd(t,e,n,s,i){if(!s&&!i){const r=nn(t.visibleWrites,e);if(r!=null)return r;{const o=Et(t.visibleWrites,e);if(mo(o))return n;if(n==null&&!po(o,j()))return null;{const a=n||N.EMPTY_NODE;return Tn(o,a)}}}else{const r=Et(t.visibleWrites,e);if(!i&&mo(r))return n;if(!i&&n==null&&!po(r,j()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Se(c.path,e)||Se(e,c.path))},a=Kd(t.allWrites,o,e),l=n||N.EMPTY_NODE;return Tn(a,l)}}}function kb(t,e,n){let s=N.EMPTY_NODE;const i=nn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(J,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Et(t.visibleWrites,e);return n.forEachChild(J,(o,a)=>{const l=Tn(Et(r,new W(o)),a);s=s.updateImmediateChild(o,l)}),Rc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Et(t.visibleWrites,e);return Rc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Ab(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Q(e,n);if(po(t.visibleWrites,r))return null;{const o=Et(t.visibleWrites,r);return mo(o)?i.getChild(n):Tn(o,i.getChild(n))}}function Pb(t,e,n,s){const i=Q(e,n),r=nn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Et(t.visibleWrites,i);return Tn(o,s.getNode().getImmediateChild(n))}else return null}function Rb(t,e){return nn(t.visibleWrites,e)}function Nb(t,e,n,s,i,r,o){let a;const l=Et(t.visibleWrites,e),c=nn(l,j());if(c!=null)a=c;else if(n!=null)a=Tn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function Mb(){return{visibleWrites:Ve.empty(),allWrites:[],lastWriteId:-1}}function Di(t,e,n,s){return qd(t.writeTree,t.treePath,e,n,s)}function xa(t,e){return kb(t.writeTree,t.treePath,e)}function Nc(t,e,n,s){return Ab(t.writeTree,t.treePath,e,n,s)}function Oi(t,e){return Rb(t.writeTree,Q(t.treePath,e))}function Db(t,e,n,s,i,r){return Nb(t.writeTree,t.treePath,e,n,s,i,r)}function Sa(t,e,n){return Pb(t.writeTree,t.treePath,e,n)}function Yd(t,e){return Xd(Q(t.treePath,e),t.writeTree)}function Xd(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Ob{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,fs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ds(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,bn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,fs(s,e.snapshotNode,i.oldSnap));else throw Sn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Lb{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Qd=new Lb;class ka{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new It(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sa(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xt(this.viewCache_),r=Db(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Fb(t){return{filter:t}}function Vb(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jb(t,e,n,s,i){const r=new Ob;let o,a;if(n.type===Le.OVERWRITE){const c=n;c.source.fromUser?o=go(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=Li(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Le.MERGE){const c=n;c.source.fromUser?o=Bb(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=yo(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Le.ACK_USER_WRITE){const c=n;c.revert?o=zb(t,e,c.path,s,i,r):o=Wb(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Le.LISTEN_COMPLETE)o=Hb(t,e,n.path,s,r);else throw Sn("Unknown operation type: "+n.type);const l=r.getChanges();return Ub(e,o,l),{viewCache:o,changes:l}}function Ub(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Mi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Hd(Mi(e)))}}function Jd(t,e,n,s,i,r){const o=e.eventCache;if(Oi(s,n)!=null)return e;{let a,l;if(F(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Xt(e),u=c instanceof N?c:N.EMPTY_NODE,h=xa(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Di(s,Xt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=O(n);if(c===".priority"){b(Ct(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Nc(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=G(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Nc(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Sa(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Zn(e,a,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function Li(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=O(n);if(!l.isCompleteForPath(n)&&Ct(n)>1)return e;const m=G(n),y=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,m,Qd,null)}const h=$d(e,c,l.isFullyInitialized()||F(n),u.filtersNodes()),d=new ka(i,h,r);return Jd(t,h,n,i,d,a)}function go(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ka(i,e,r);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Zn(e,c,!0,t.filter.filtersNodes());else{const h=O(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Zn(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=G(n),f=a.getNode().getImmediateChild(h);let m;if(F(d))m=s;else{const g=u.getCompleteChild(h);g!=null?ya(d)===".priority"&&g.getChild(Ld(d)).isEmpty()?m=g:m=g.updateChild(d,s):m=N.EMPTY_NODE}if(f.equals(m))l=e;else{const g=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Zn(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Mc(t,e){return t.eventCache.isCompleteForChild(e)}function Bb(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Q(n,l);Mc(e,O(u))&&(a=go(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Q(n,l);Mc(e,O(u))||(a=go(t,a,u,c,i,r,o))}),a}function Dc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function yo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;F(n)?c=s:c=new $(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=Dc(t,f,d);l=Li(t,l,new W(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),g=Dc(t,m,d);l=Li(t,l,new W(h),g,i,r,o,a)}}),l}function Wb(t,e,n,s,i,r,o){if(Oi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(F(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Li(t,e,n,l.getNode().getChild(n),i,r,a,o);if(F(n)){let c=new $(null);return l.getNode().forEachChild(gn,(u,h)=>{c=c.set(new W(u),h)}),yo(t,e,n,c,i,r,a,o)}else return e}else{let c=new $(null);return s.foreach((u,h)=>{const d=Q(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),yo(t,e,n,c,i,r,a,o)}}function Hb(t,e,n,s,i){const r=e.serverCache,o=$d(e,r.getNode(),r.isFullyInitialized()||F(n),r.isFiltered());return Jd(t,o,n,s,Qd,i)}function zb(t,e,n,s,i,r){let o;if(Oi(s,n)!=null)return e;{const a=new ka(s,e,i),l=e.eventCache.getNode();let c;if(F(n)||O(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Di(s,Xt(e));else{const h=e.serverCache.getNode();b(h instanceof N,"serverChildren would be complete if leaf node"),u=xa(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=O(n);let h=Sa(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,G(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,N.EMPTY_NODE,G(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Di(s,Xt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Oi(s,j())!=null,Zn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class $b{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ba(s.getIndex()),r=cb(s);this.processor_=Fb(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(N.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(N.EMPTY_NODE,a.getNode(),null),u=new It(l,o.isFullyInitialized(),i.filtersNodes()),h=new It(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=nr(h,u),this.eventGenerator_=new gb(this.query_)}get query(){return this.query_}}function Gb(t){return t.viewCache_.serverCache.getNode()}function Kb(t){return Mi(t.viewCache_)}function qb(t,e){const n=Xt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(O(e)).isEmpty())?n.getChild(e):null}function Oc(t){return t.eventRegistrations_.length===0}function Yb(t,e){t.eventRegistrations_.push(e)}function Lc(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Fc(t,e,n,s){e.type===Le.MERGE&&e.source.queryId!==null&&(b(Xt(t.viewCache_),"We should always have a full cache before handling merges"),b(Mi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=jb(t.processor_,i,e,n,s);return Vb(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Zd(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Xb(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(J,(r,o)=>{s.push(bn(r,o))}),n.isFullyInitialized()&&s.push(Hd(n.getNode())),Zd(t,s,n.getNode(),e)}function Zd(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return yb(t.eventGenerator_,e,n,i)}/**
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
 */let Fi;class ef{constructor(){this.views=new Map}}function Qb(t){b(!Fi,"__referenceConstructor has already been defined"),Fi=t}function Jb(){return b(Fi,"Reference.ts has not been loaded"),Fi}function Zb(t){return t.views.size===0}function Aa(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Fc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Fc(o,e,n,s));return r}}function tf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Di(n,i?s:null),l=!1;a?l=!0:s instanceof N?(a=xa(n,s),l=!1):(a=N.EMPTY_NODE,l=!1);const c=nr(new It(a,l,!1),new It(s,i,!1));return new $b(e,c)}return o}function eE(t,e,n,s,i,r){const o=tf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Yb(o,n),Xb(o,n)}function tE(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=xt(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Lc(c,n,s)),Oc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Lc(l,n,s)),Oc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!xt(t)&&r.push(new(Jb())(e._repo,e._path)),{removed:r,events:o}}function nf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Tt(t,e){let n=null;for(const s of t.views.values())n=n||qb(s,e);return n}function sf(t,e){if(e._queryParams.loadsAllData())return ir(t);{const s=e._queryIdentifier;return t.views.get(s)}}function rf(t,e){return sf(t,e)!=null}function xt(t){return ir(t)!=null}function ir(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Vi;function nE(t){b(!Vi,"__referenceConstructor has already been defined"),Vi=t}function sE(){return b(Vi,"Reference.ts has not been loaded"),Vi}let iE=1;class Vc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $(null),this.pendingWriteTree_=Mb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function of(t,e,n,s,i){return bb(t.pendingWriteTree_,e,n,s,i),i?Nn(t,new Yt(Ta(),e,n)):[]}function rE(t,e,n,s){Eb(t.pendingWriteTree_,e,n,s);const i=$.fromObject(n);return Nn(t,new En(Ta(),e,i))}function gt(t,e,n=!1){const s=Tb(t.pendingWriteTree_,e);if(Cb(t.pendingWriteTree_,e)){let r=new $(null);return s.snap!=null?r=r.set(j(),!0):he(s.children,o=>{r=r.set(new W(o),!0)}),Nn(t,new Ni(s.path,r,n))}else return[]}function Ns(t,e,n){return Nn(t,new Yt(Ca(),e,n))}function oE(t,e,n){const s=$.fromObject(n);return Nn(t,new En(Ca(),e,s))}function aE(t,e){return Nn(t,new ms(Ca(),e))}function lE(t,e,n){const s=Ra(t,n);if(s){const i=Na(s),r=i.path,o=i.queryId,a=me(r,e),l=new ms(Ia(o),a);return Ma(t,r,l)}else return[]}function ji(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||rf(o,e))){const l=tE(o,e,n,s);Zb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,f)=>xt(f));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=hE(d);for(let m=0;m<f.length;++m){const g=f[m],y=g.query,_=uf(t,g);t.listenProvider_.startListening(ts(y),gs(t,y),_.hashFn,_.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ts(e),null):c.forEach(d=>{const f=t.queryToTagMap.get(rr(d));t.listenProvider_.stopListening(ts(d),f)}))}dE(t,c)}return a}function af(t,e,n,s){const i=Ra(t,s);if(i!=null){const r=Na(i),o=r.path,a=r.queryId,l=me(o,e),c=new Yt(Ia(a),l,n);return Ma(t,o,c)}else return[]}function cE(t,e,n,s){const i=Ra(t,s);if(i){const r=Na(i),o=r.path,a=r.queryId,l=me(o,e),c=$.fromObject(n),u=new En(Ia(a),l,c);return Ma(t,o,u)}else return[]}function _o(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const m=me(d,i);r=r||Tt(f,m),o=o||xt(f)});let a=t.syncPointTree_.get(i);a?(o=o||xt(a),r=r||Tt(a,j())):(a=new ef,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=N.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,m)=>{const g=Tt(m,j());g&&(r=r.updateImmediateChild(f,g))}));const c=rf(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=rr(e);b(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=fE();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const u=sr(t.pendingWriteTree_,i);let h=eE(a,e,n,u,r,l);if(!c&&!o&&!s){const d=sf(a,e);h=h.concat(pE(t,e,d))}return h}function Pa(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=me(o,e),c=Tt(a,l);if(c)return c});return qd(i,e,r,n,!0)}function uE(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=me(c,n);s=s||Tt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Tt(i,j()):(i=new ef,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new It(s,!0,!1):null,a=sr(t.pendingWriteTree_,e._path),l=tf(i,e,a,r?o.getNode():N.EMPTY_NODE,r);return Kb(l)}function Nn(t,e){return lf(e,t.syncPointTree_,null,sr(t.pendingWriteTree_,j()))}function lf(t,e,n,s){if(F(t.path))return cf(t,e,n,s);{const i=e.get(j());n==null&&i!=null&&(n=Tt(i,j()));let r=[];const o=O(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Yd(s,o);r=r.concat(lf(a,l,c,u))}return i&&(r=r.concat(Aa(i,t,s,n))),r}}function cf(t,e,n,s){const i=e.get(j());n==null&&i!=null&&(n=Tt(i,j()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Yd(s,o),u=t.operationForChild(o);u&&(r=r.concat(cf(u,a,l,c)))}),i&&(r=r.concat(Aa(i,t,s,n))),r}function uf(t,e){const n=e.query,s=gs(t,n);return{hashFn:()=>(Gb(e)||N.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?lE(t,n._path,s):aE(t,n._path);{const r=aw(i,n);return ji(t,n,null,r)}}}}function gs(t,e){const n=rr(e);return t.queryToTagMap.get(n)}function rr(t){return t._path.toString()+"$"+t._queryIdentifier}function Ra(t,e){return t.tagToQueryMap.get(e)}function Na(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new W(t.substr(0,e))}}function Ma(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=sr(t.pendingWriteTree_,e);return Aa(s,n,i,null)}function hE(t){return t.fold((e,n,s)=>{if(n&&xt(n))return[ir(n)];{let i=[];return n&&(i=nf(n)),he(s,(r,o)=>{i=i.concat(o)}),i}})}function ts(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(sE())(t._repo,t._path):t}function dE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=rr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function fE(){return iE++}function pE(t,e,n){const s=e._path,i=gs(t,e),r=uf(t,n),o=t.listenProvider_.startListening(ts(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)b(!xt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!F(c)&&u&&xt(u))return[ir(u).query];{let d=[];return u&&(d=d.concat(nf(u).map(f=>f.query))),he(h,(f,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ts(u),gs(t,u))}}return o}/**
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
 */class Da{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Da(n)}node(){return this.node_}}class Oa{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Q(this.path_,e);return new Oa(this.syncTree_,n)}node(){return Pa(this.syncTree_,this.path_)}}const mE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jc=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return gE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yE(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},gE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},yE=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},hf=function(t,e,n,s){return La(e,new Oa(n,t),s)},df=function(t,e,n){return La(t,new Da(e),n)};function La(t,e,n){const s=t.getPriority().val(),i=jc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=jc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new oe(a,se(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new oe(i))),o.forEachChild(J,(a,l)=>{const c=La(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Fa{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Va(t,e){let n=e instanceof W?e:new W(e),s=t,i=O(n);for(;i!==null;){const r=yn(s.node.children,i)||{children:{},childCount:0};s=new Fa(i,s,r),n=G(n),i=O(n)}return s}function Mn(t){return t.node.value}function ff(t,e){t.node.value=e,vo(t)}function pf(t){return t.node.childCount>0}function _E(t){return Mn(t)===void 0&&!pf(t)}function or(t,e){he(t.node.children,(n,s)=>{e(new Fa(n,t,s))})}function mf(t,e,n,s){n&&e(t),or(t,i=>{mf(i,e,!0)})}function vE(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ms(t){return new W(t.parent===null?t.name:Ms(t.parent)+"/"+t.name)}function vo(t){t.parent!==null&&wE(t.parent,t.name,t)}function wE(t,e,n){const s=_E(n),i=Ye(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,vo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,vo(t))}/**
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
 */const bE=/[\[\].#$\/\u0000-\u001F\u007F]/,EE=/[\[\].#$\u0000-\u001F\u007F]/,Nr=10*1024*1024,ja=function(t){return typeof t=="string"&&t.length!==0&&!bE.test(t)},gf=function(t){return typeof t=="string"&&t.length!==0&&!EE.test(t)},TE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gf(t)},CE=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!da(t)||t&&typeof t=="object"&&Ye(t,".sv")},yf=function(t,e,n,s){s&&e===void 0||ar(Yi(t,"value"),e,n)},ar=function(t,e,n){const s=n instanceof W?new Bw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ft(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ft(s)+" with contents = "+e.toString());if(da(e))throw new Error(t+"contains "+e.toString()+" "+Ft(s));if(typeof e=="string"&&e.length>Nr/3&&Xi(e)>Nr)throw new Error(t+"contains a string greater than "+Nr+" utf8 bytes "+Ft(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(he(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ja(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ft(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ww(s,o),ar(t,a,s),Hw(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ft(s)+" in addition to actual children.")}},IE=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=hs(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ja(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Uw);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Se(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},xE=function(t,e,n,s){const i=Yi(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];he(e,(o,a)=>{const l=new W(o);if(ar(i,a,Q(n,l)),ya(l)===".priority"&&!CE(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),IE(i,r)},_f=function(t,e,n,s){if(!gf(n))throw new Error(Yi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},SE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_f(t,e,n)},Ua=function(t,e){if(O(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},kE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ja(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!TE(n))throw new Error(Yi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class AE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lr(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!_a(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function vf(t,e,n){lr(t,n),wf(t,s=>_a(s,e))}function Re(t,e,n){lr(t,n),wf(t,s=>Se(s,e)||Se(e,s))}function wf(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(PE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function PE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Qn&&ce("event: "+n.toString()),Rn(s)}}}/**
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
 */const RE="repo_interrupt",NE=25;class ME{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ri(),this.transactionQueueTree_=new Fa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DE(t,e,n){if(t.stats_=ma(t.repoInfo_),t.forceRestClient_||hw())t.server_=new Pi(t.repoInfo_,(s,i,r,o)=>{Uc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Bc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ie(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new nt(t.repoInfo_,e,(s,i,r,o)=>{Uc(t,s,i,r,o)},s=>{Bc(t,s)},s=>{OE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=gw(t.repoInfo_,()=>new mb(t.stats_,t.server_)),t.infoData_=new ub,t.infoSyncTree_=new Vc({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Ns(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ba(t,"connected",!1),t.serverSyncTree_=new Vc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Re(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function bf(t){const n=t.infoData_.getNode(new W(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function cr(t){return mE({timestamp:bf(t)})}function Uc(t,e,n,s,i){t.dataUpdateCount++;const r=new W(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=vi(n,c=>se(c));o=cE(t.serverSyncTree_,r,l,i)}else{const l=se(n);o=af(t.serverSyncTree_,r,l,i)}else if(s){const l=vi(n,c=>se(c));o=oE(t.serverSyncTree_,r,l)}else{const l=se(n);o=Ns(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Cn(t,r)),Re(t.eventQueue_,a,o)}function Bc(t,e){Ba(t,"connected",e),e===!1&&jE(t)}function OE(t,e){he(e,(n,s)=>{Ba(t,n,s)})}function Ba(t,e,n){const s=new W("/.info/"+e),i=se(n);t.infoData_.updateSnapshot(s,i);const r=Ns(t.infoSyncTree_,s,i);Re(t.eventQueue_,s,r)}function Wa(t){return t.nextWriteId_++}function LE(t,e,n){const s=uE(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=se(i).withIndex(e._queryParams.getIndex());_o(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ns(t.serverSyncTree_,e._path,r);else{const a=gs(t.serverSyncTree_,e);o=af(t.serverSyncTree_,e._path,r,a)}return Re(t.eventQueue_,e._path,o),ji(t.serverSyncTree_,e,n,null,!0),r},i=>(Ds(t,"get for query "+ie(e)+" failed: "+i),Promise.reject(new Error(i))))}function FE(t,e,n,s,i){Ds(t,"set",{path:e.toString(),value:n,priority:s});const r=cr(t),o=se(n,s),a=Pa(t.serverSyncTree_,e),l=df(o,a,r),c=Wa(t),u=of(t.serverSyncTree_,e,l,c,!0);lr(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,f)=>{const m=d==="ok";m||_e("set at "+e+" failed: "+d);const g=gt(t.serverSyncTree_,c,!m);Re(t.eventQueue_,e,g),wo(t,i,d,f)});const h=za(t,e);Cn(t,h),Re(t.eventQueue_,h,[])}function VE(t,e,n,s){Ds(t,"update",{path:e.toString(),value:n});let i=!0;const r=cr(t),o={};if(he(n,(a,l)=>{i=!1,o[a]=hf(Q(e,a),se(l),t.serverSyncTree_,r)}),i)ce("update() called with empty data.  Don't do anything."),wo(t,s,"ok",void 0);else{const a=Wa(t),l=rE(t.serverSyncTree_,e,o,a);lr(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||_e("update at "+e+" failed: "+c);const d=gt(t.serverSyncTree_,a,!h),f=d.length>0?Cn(t,e):e;Re(t.eventQueue_,f,d),wo(t,s,c,u)}),he(n,c=>{const u=za(t,Q(e,c));Cn(t,u)}),Re(t.eventQueue_,e,[])}}function jE(t){Ds(t,"onDisconnectEvents");const e=cr(t),n=Ri();ho(t.onDisconnect_,j(),(i,r)=>{const o=hf(i,r,t.serverSyncTree_,e);zd(n,i,o)});let s=[];ho(n,j(),(i,r)=>{s=s.concat(Ns(t.serverSyncTree_,i,r));const o=za(t,i);Cn(t,o)}),t.onDisconnect_=Ri(),Re(t.eventQueue_,j(),s)}function UE(t,e,n){let s;O(e._path)===".info"?s=_o(t.infoSyncTree_,e,n):s=_o(t.serverSyncTree_,e,n),vf(t.eventQueue_,e._path,s)}function Wc(t,e,n){let s;O(e._path)===".info"?s=ji(t.infoSyncTree_,e,n):s=ji(t.serverSyncTree_,e,n),vf(t.eventQueue_,e._path,s)}function BE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(RE)}function Ds(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ce(n,...e)}function wo(t,e,n,s){e&&Rn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ef(t,e,n){return Pa(t.serverSyncTree_,e,n)||N.EMPTY_NODE}function Ha(t,e=t.transactionQueueTree_){if(e||ur(t,e),Mn(e)){const n=Cf(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&WE(t,Ms(e),n)}else pf(e)&&or(e,n=>{Ha(t,n)})}function WE(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ef(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=me(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ds(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(gt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ur(t,Va(t.transactionQueueTree_,e)),Ha(t,t.transactionQueueTree_),Re(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Rn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{_e("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Cn(t,e)}},o)}function Cn(t,e){const n=Tf(t,e),s=Ms(n),i=Cf(t,n);return HE(t,i,s),s}function HE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=me(n,l.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(gt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=NE)u=!0,h="maxretry",i=i.concat(gt(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Ef(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){ar("transaction failed: Data returned ",f,l.path);let m=se(f);typeof f=="object"&&f!=null&&Ye(f,".priority")||(m=m.updatePriority(d.getPriority()));const y=l.currentWriteId,_=cr(t),T=df(m,d,_);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=T,l.currentWriteId=Wa(t),o.splice(o.indexOf(y),1),i=i.concat(of(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),i=i.concat(gt(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(gt(t.serverSyncTree_,l.currentWriteId,!0))}Re(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,(function(d){setTimeout(d,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}ur(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Rn(s[a]);Ha(t,t.transactionQueueTree_)}function Tf(t,e){let n,s=t.transactionQueueTree_;for(n=O(e);n!==null&&Mn(s)===void 0;)s=Va(s,n),e=G(e),n=O(e);return s}function Cf(t,e){const n=[];return If(t,e,n),n.sort((s,i)=>s.order-i.order),n}function If(t,e,n){const s=Mn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);or(e,i=>{If(t,i,n)})}function ur(t,e){const n=Mn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ff(e,n.length>0?n:void 0)}or(e,s=>{ur(t,s)})}function za(t,e){const n=Ms(Tf(t,e)),s=Va(t.transactionQueueTree_,e);return vE(s,i=>{Mr(t,i)}),Mr(t,s),mf(s,i=>{Mr(t,i)}),n}function Mr(t,e){const n=Mn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(gt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ff(e,void 0):n.length=r+1,Re(t.eventQueue_,Ms(e),i);for(let o=0;o<s.length;o++)Rn(s[o])}}/**
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
 */function zE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function $E(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):_e(`Invalid query segment '${n}' in query '${t}'`)}return e}const Hc=function(t,e){const n=GE(t),s=n.namespace;n.domain==="firebase.com"&&rt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&rt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Sd(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new W(n.pathString)}},GE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=zE(t.substring(u,h)));const d=$E(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const zc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",KE=(function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=zc.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=zc.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}})();/**
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
 */class qE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ie(this.snapshot.exportVal())}}class YE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class xf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class $a{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return F(this._path)?null:ya(this._path)}get ref(){return new ot(this._repo,this._path)}get _queryIdentifier(){const e=kc(this._queryParams),n=fa(e);return n==="{}"?"default":n}get _queryObject(){return kc(this._queryParams)}isEqual(e){if(e=we(e),!(e instanceof $a))return!1;const n=this._repo===e._repo,s=_a(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jw(this._path)}}class ot extends $a{constructor(e,n){super(e,n,new Ea,!1)}get parent(){const e=Ld(this._path);return e===null?null:new ot(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ys{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new W(e),s=_s(this.ref,e);return new ys(this._node.getChild(n),s,J)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ys(i,_s(this.ref,s),J)))}hasChild(e){const n=new W(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Qt(t,e){return t=we(t),t._checkNotDeleted("ref"),e!==void 0?_s(t._root,e):t._root}function _s(t,e){return t=we(t),O(t._path)===null?SE("child","path",e):_f("child","path",e),new ot(t._repo,Q(t._path,e))}function Sf(t,e){t=we(t),Ua("push",t._path),yf("push",e,t._path,!0);const n=bf(t._repo),s=KE(n),i=_s(t,s),r=_s(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function rA(t){return Ua("remove",t._path),Ga(t,null)}function Ga(t,e){t=we(t),Ua("set",t._path),yf("set",e,t._path,!1);const n=new Ts;return FE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function XE(t,e){xE("update",e,t._path);const n=new Ts;return VE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function kf(t){t=we(t);const e=new xf(()=>{}),n=new hr(e);return LE(t._repo,t,n).then(s=>new ys(s,new ot(t._repo,t._path),t._queryParams.getIndex()))}class hr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new qE("value",this,new ys(e.snapshotNode,new ot(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new YE(this,e,n):null}matches(e){return e instanceof hr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function QE(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Wc(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new xf(n,r||void 0),a=new hr(o);return UE(t._repo,t,a),()=>Wc(t._repo,t,a)}function Af(t,e,n,s){return QE(t,"value",e,n,s)}Qb(ot);nE(ot);/**
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
 */const JE="FIREBASE_DATABASE_EMULATOR_HOST",bo={};let ZE=!1;function e0(t,e,n,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Is(r);t.repoInfo_=new Sd(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function t0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||rt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ce("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Hc(r,i),a=o.repoInfo,l;typeof process<"u"&&uc&&(l=uc[JE]),l?(r=`http://${l}?ns=${a.namespace}`,o=Hc(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new fw(t.name,t.options,e);kE("Invalid Firebase Database URL",o),F(o.path)||rt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=s0(a,t,c,new dw(t,n));return new i0(u,t)}function n0(t,e){const n=bo[e];(!n||n[t.key]!==t)&&rt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),BE(t),delete n[t.key]}function s0(t,e,n,s){let i=bo[e.name];i||(i={},bo[e.name]=i);let r=i[t.toURLString()];return r&&rt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ME(t,ZE,n,s),i[t.toURLString()]=r,r}class i0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ot(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(n0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&rt("Cannot call "+e+" on a deleted database.")}}function r0(t=Nh(),e){const n=ta(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=lg("database");s&&o0(n,...s)}return n}function o0(t,e,n,s={}){t=we(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&$t(s,r.repoInfo_.emulatorOptions))return;rt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&rt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new li(li.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:cg(s.mockUserToken,t.app.options.projectId);o=new li(a)}Is(e)&&kh(e),e0(r,i,s,o)}/**
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
 */function a0(t){Xv(An),_n(new Gt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return t0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),wt(hc,dc,t),wt(hc,dc,"esm2020")}nt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};nt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};a0();const l0={VITE_FIREBASE_API_KEY:"AIzaSyD1b7Z3zJeuvvo6iMWQxvFHdbClCFSlSuI",VITE_FIREBASE_APP_ID:"1:889817277774:web:3912f8166047545a8f2a1f",VITE_FIREBASE_AUTH_DOMAIN:"omnibins.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://omnibins-default-rtdb.firebaseio.com",VITE_FIREBASE_MEASUREMENT_ID:"G-V9BW9RGDNQ",VITE_FIREBASE_MESSAGING_SENDER_ID:"889817277774",VITE_FIREBASE_PROJECT_ID:"omnibins",VITE_FIREBASE_STORAGE_BUCKET:"omnibins.firebasestorage.app"},ct=l0,Pf={apiKey:ct.VITE_FIREBASE_API_KEY,authDomain:ct.VITE_FIREBASE_AUTH_DOMAIN,projectId:ct.VITE_FIREBASE_PROJECT_ID,databaseURL:ct.VITE_FIREBASE_DATABASE_URL,storageBucket:ct.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:ct.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:ct.VITE_FIREBASE_APP_ID,measurementId:ct.VITE_FIREBASE_MEASUREMENT_ID},$c=Object.entries(Pf).filter(([,t])=>!t).map(([t])=>t);if($c.length>0)throw new Error(`Firebase config is incomplete. Missing values: ${$c.join(", ")}. Copy .env.example to .env or .env.local and fill in your Firebase web app values.`);const Rf=Rh(Pf),dr=Gv(Rf),Jt=r0(Rf),c0=new Je;function u0(t){const e=Qt(Jt,"bins");return Af(e,n=>{const s=n.val(),i=s?Object.entries(s).map(([r,o])=>({id:r,...typeof o=="object"&&o!==null?o:{}})):[];t(i)})}async function oA(t,e){return N_(dr,t,e)}async function aA(){return tv(dr,c0)}async function lA(){const t=dr.currentUser;return t?t.getIdToken():null}async function cA(t){const e=Qt(Jt,"users"),n=Sf(e),s=new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),i={name:t.name,email:t.email||"",phone:t.phone||"",team:t.team,role:t.role||"staff",department:t.team||"Operations",status:"active",joinedDate:s,lastLogin:s};return await Ga(n,i),{id:n.key,...i}}async function uA(){const t=Qt(Jt,"users"),n=(await kf(t)).val();return n?Object.entries(n).map(([s,i])=>({id:s,...typeof i=="object"&&i!==null?i:{}})):[]}async function hA(t){const e=Qt(Jt,"teams"),n=Sf(e),s=new Date().toISOString(),i={name:t.name,workerIds:t.workerIds,createdAt:s};await Ga(n,i);const r={};return t.workerIds.forEach(o=>{r[`users/${o}/team`]=t.name}),await XE(Qt(Jt),r),{id:n.key,...i}}async function dA(){const t=Qt(Jt,"teams"),n=(await kf(t)).val();return n?Object.entries(n).map(([s,i])=>({id:s,...typeof i=="object"&&i!==null?i:{}})):[]}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d0=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),Gc=t=>{const e=d0(t);return e.charAt(0).toUpperCase()+e.slice(1)},Nf=(...t)=>t.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=v.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:i="",children:r,iconNode:o,...a},l)=>v.createElement("svg",{ref:l,...f0,width:e,height:e,stroke:t,strokeWidth:s?Number(n)*24/Number(e):n,className:Nf("lucide",i),...a},[...o.map(([c,u])=>v.createElement(c,u)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=(t,e)=>{const n=v.forwardRef(({className:s,...i},r)=>v.createElement(p0,{ref:r,iconNode:e,className:Nf(`lucide-${h0(Gc(t))}`,`lucide-${t}`,s),...i}));return n.displayName=Gc(t),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],g0=q("activity",m0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],_0=q("bell",y0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],w0=q("calendar",v0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],E0=q("chart-column",b0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Kc=q("circle-alert",T0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],I0=q("clock",C0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],S0=q("droplet",x0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],A0=q("layout-dashboard",k0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],R0=q("log-out",P0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],M0=q("mail",N0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],O0=q("map",D0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],F0=q("menu",L0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Mf=q("pen",V0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],U0=q("phone",j0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],W0=q("save",B0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Df=q("settings",H0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],fr=q("trash-2",z0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],G0=q("upload",$0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Eo=q("user",K0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Of=q("users",q0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],X0=q("wind",Y0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],J0=q("wrench",Q0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Lf=q("x",Z0),qc=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Yc=_h,eT=(t,e)=>n=>{var s;if((e==null?void 0:e.variants)==null)return Yc(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:r}=e,o=Object.keys(i).map(c=>{const u=n==null?void 0:n[c],h=r==null?void 0:r[c];if(u===null)return null;const d=qc(u)||qc(h);return i[c][d]}),a=n&&Object.entries(n).reduce((c,u)=>{let[h,d]=u;return d===void 0||(c[h]=d),c},{}),l=e==null||(s=e.compoundVariants)===null||s===void 0?void 0:s.reduce((c,u)=>{let{class:h,className:d,...f}=u;return Object.entries(f).every(m=>{let[g,y]=m;return Array.isArray(y)?y.includes({...r,...a}[g]):{...r,...a}[g]===y})?[...c,h,d]:c},[]);return Yc(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},Ka="-",tT=t=>{const e=sT(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=t;return{getClassGroupId:o=>{const a=o.split(Ka);return a[0]===""&&a.length!==1&&a.shift(),Ff(a,e)||nT(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&s[o]?[...l,...s[o]]:l}}},Ff=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],s=e.nextPart.get(n),i=s?Ff(t.slice(1),s):void 0;if(i)return i;if(e.validators.length===0)return;const r=t.join(Ka);return(o=e.validators.find(({validator:a})=>a(r)))==null?void 0:o.classGroupId},Xc=/^\[(.+)\]$/,nT=t=>{if(Xc.test(t)){const e=Xc.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},sT=t=>{const{theme:e,classGroups:n}=t,s={nextPart:new Map,validators:[]};for(const i in n)To(n[i],s,i,e);return s},To=(t,e,n,s)=>{t.forEach(i=>{if(typeof i=="string"){const r=i===""?e:Qc(e,i);r.classGroupId=n;return}if(typeof i=="function"){if(iT(i)){To(i(s),e,n,s);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([r,o])=>{To(o,Qc(e,r),n,s)})})},Qc=(t,e)=>{let n=t;return e.split(Ka).forEach(s=>{n.nextPart.has(s)||n.nextPart.set(s,{nextPart:new Map,validators:[]}),n=n.nextPart.get(s)}),n},iT=t=>t.isThemeGetter,rT=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,s=new Map;const i=(r,o)=>{n.set(r,o),e++,e>t&&(e=0,s=n,n=new Map)};return{get(r){let o=n.get(r);if(o!==void 0)return o;if((o=s.get(r))!==void 0)return i(r,o),o},set(r,o){n.has(r)?n.set(r,o):i(r,o)}}},Co="!",Io=":",oT=Io.length,aT=t=>{const{prefix:e,experimentalParseClassName:n}=t;let s=i=>{const r=[];let o=0,a=0,l=0,c;for(let m=0;m<i.length;m++){let g=i[m];if(o===0&&a===0){if(g===Io){r.push(i.slice(l,m)),l=m+oT;continue}if(g==="/"){c=m;continue}}g==="["?o++:g==="]"?o--:g==="("?a++:g===")"&&a--}const u=r.length===0?i:i.substring(l),h=lT(u),d=h!==u,f=c&&c>l?c-l:void 0;return{modifiers:r,hasImportantModifier:d,baseClassName:h,maybePostfixModifierPosition:f}};if(e){const i=e+Io,r=s;s=o=>o.startsWith(i)?r(o.substring(i.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:o,maybePostfixModifierPosition:void 0}}if(n){const i=s;s=r=>n({className:r,parseClassName:i})}return s},lT=t=>t.endsWith(Co)?t.substring(0,t.length-1):t.startsWith(Co)?t.substring(1):t,cT=t=>{const e=Object.fromEntries(t.orderSensitiveModifiers.map(s=>[s,!0]));return s=>{if(s.length<=1)return s;const i=[];let r=[];return s.forEach(o=>{o[0]==="["||e[o]?(i.push(...r.sort(),o),r=[]):r.push(o)}),i.push(...r.sort()),i}},uT=t=>({cache:rT(t.cacheSize),parseClassName:aT(t),sortModifiers:cT(t),...tT(t)}),hT=/\s+/,dT=(t,e)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:i,sortModifiers:r}=e,o=[],a=t.trim().split(hT);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{isExternal:h,modifiers:d,hasImportantModifier:f,baseClassName:m,maybePostfixModifierPosition:g}=n(u);if(h){l=u+(l.length>0?" "+l:l);continue}let y=!!g,_=s(y?m.substring(0,g):m);if(!_){if(!y){l=u+(l.length>0?" "+l:l);continue}if(_=s(m),!_){l=u+(l.length>0?" "+l:l);continue}y=!1}const T=r(d).join(":"),E=f?T+Co:T,C=E+_;if(o.includes(C))continue;o.push(C);const A=i(_,y);for(let V=0;V<A.length;++V){const U=A[V];o.push(E+U)}l=u+(l.length>0?" "+l:l)}return l};function fT(){let t=0,e,n,s="";for(;t<arguments.length;)(e=arguments[t++])&&(n=Vf(e))&&(s&&(s+=" "),s+=n);return s}const Vf=t=>{if(typeof t=="string")return t;let e,n="";for(let s=0;s<t.length;s++)t[s]&&(e=Vf(t[s]))&&(n&&(n+=" "),n+=e);return n};function pT(t,...e){let n,s,i,r=o;function o(l){const c=e.reduce((u,h)=>h(u),t());return n=uT(c),s=n.cache.get,i=n.cache.set,r=a,a(l)}function a(l){const c=s(l);if(c)return c;const u=dT(l,n);return i(l,u),u}return function(){return r(fT.apply(null,arguments))}}const te=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},jf=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Uf=/^\((?:(\w[\w-]*):)?(.+)\)$/i,mT=/^\d+\/\d+$/,gT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,yT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,_T=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,vT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,wT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,rn=t=>mT.test(t),D=t=>!!t&&!Number.isNaN(Number(t)),ut=t=>!!t&&Number.isInteger(Number(t)),Dr=t=>t.endsWith("%")&&D(t.slice(0,-1)),Qe=t=>gT.test(t),bT=()=>!0,ET=t=>yT.test(t)&&!_T.test(t),Bf=()=>!1,TT=t=>vT.test(t),CT=t=>wT.test(t),IT=t=>!x(t)&&!S(t),xT=t=>Dn(t,zf,Bf),x=t=>jf.test(t),Mt=t=>Dn(t,$f,ET),Or=t=>Dn(t,RT,D),Jc=t=>Dn(t,Wf,Bf),ST=t=>Dn(t,Hf,CT),Ks=t=>Dn(t,Gf,TT),S=t=>Uf.test(t),zn=t=>On(t,$f),kT=t=>On(t,NT),Zc=t=>On(t,Wf),AT=t=>On(t,zf),PT=t=>On(t,Hf),qs=t=>On(t,Gf,!0),Dn=(t,e,n)=>{const s=jf.exec(t);return s?s[1]?e(s[1]):n(s[2]):!1},On=(t,e,n=!1)=>{const s=Uf.exec(t);return s?s[1]?e(s[1]):n:!1},Wf=t=>t==="position"||t==="percentage",Hf=t=>t==="image"||t==="url",zf=t=>t==="length"||t==="size"||t==="bg-size",$f=t=>t==="length",RT=t=>t==="number",NT=t=>t==="family-name",Gf=t=>t==="shadow",MT=()=>{const t=te("color"),e=te("font"),n=te("text"),s=te("font-weight"),i=te("tracking"),r=te("leading"),o=te("breakpoint"),a=te("container"),l=te("spacing"),c=te("radius"),u=te("shadow"),h=te("inset-shadow"),d=te("text-shadow"),f=te("drop-shadow"),m=te("blur"),g=te("perspective"),y=te("aspect"),_=te("ease"),T=te("animate"),E=()=>["auto","avoid","all","avoid-page","page","left","right","column"],C=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],A=()=>[...C(),S,x],V=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto","contain","none"],w=()=>[S,x,l],M=()=>[rn,"full","auto",...w()],P=()=>[ut,"none","subgrid",S,x],H=()=>["auto",{span:["full",ut,S,x]},ut,S,x],Y=()=>[ut,"auto",S,x],Ie=()=>["auto","min","max","fr",S,x],be=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],de=()=>["start","end","center","stretch","center-safe","end-safe"],Z=()=>["auto",...w()],at=()=>[rn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...w()],I=()=>[t,S,x],fe=()=>[...C(),Zc,Jc,{position:[S,x]}],Ue=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Xe=()=>["auto","cover","contain",AT,xT,{size:[S,x]}],jn=()=>[Dr,zn,Mt],pe=()=>["","none","full",c,S,x],Te=()=>["",D,zn,Mt],js=()=>["solid","dashed","dotted","double"],Tl=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],re=()=>[D,Dr,Zc,Jc],Cl=()=>["","none",m,S,x],Us=()=>["none",D,S,x],Bs=()=>["none",D,S,x],vr=()=>[D,S,x],Ws=()=>[rn,"full",...w()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Qe],breakpoint:[Qe],color:[bT],container:[Qe],"drop-shadow":[Qe],ease:["in","out","in-out"],font:[IT],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Qe],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Qe],shadow:[Qe],spacing:["px",D],text:[Qe],"text-shadow":[Qe],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",rn,x,S,y]}],container:["container"],columns:[{columns:[D,x,S,a]}],"break-after":[{"break-after":E()}],"break-before":[{"break-before":E()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:A()}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:M()}],"inset-x":[{"inset-x":M()}],"inset-y":[{"inset-y":M()}],start:[{start:M()}],end:[{end:M()}],top:[{top:M()}],right:[{right:M()}],bottom:[{bottom:M()}],left:[{left:M()}],visibility:["visible","invisible","collapse"],z:[{z:[ut,"auto",S,x]}],basis:[{basis:[rn,"full","auto",a,...w()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[D,rn,"auto","initial","none",x]}],grow:[{grow:["",D,S,x]}],shrink:[{shrink:["",D,S,x]}],order:[{order:[ut,"first","last","none",S,x]}],"grid-cols":[{"grid-cols":P()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":Y()}],"col-end":[{"col-end":Y()}],"grid-rows":[{"grid-rows":P()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":Y()}],"row-end":[{"row-end":Y()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Ie()}],"auto-rows":[{"auto-rows":Ie()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...be(),"normal"]}],"justify-items":[{"justify-items":[...de(),"normal"]}],"justify-self":[{"justify-self":["auto",...de()]}],"align-content":[{content:["normal",...be()]}],"align-items":[{items:[...de(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...de(),{baseline:["","last"]}]}],"place-content":[{"place-content":be()}],"place-items":[{"place-items":[...de(),"baseline"]}],"place-self":[{"place-self":["auto",...de()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:Z()}],mx:[{mx:Z()}],my:[{my:Z()}],ms:[{ms:Z()}],me:[{me:Z()}],mt:[{mt:Z()}],mr:[{mr:Z()}],mb:[{mb:Z()}],ml:[{ml:Z()}],"space-x":[{"space-x":w()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":w()}],"space-y-reverse":["space-y-reverse"],size:[{size:at()}],w:[{w:[a,"screen",...at()]}],"min-w":[{"min-w":[a,"screen","none",...at()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[o]},...at()]}],h:[{h:["screen",...at()]}],"min-h":[{"min-h":["screen","none",...at()]}],"max-h":[{"max-h":["screen",...at()]}],"font-size":[{text:["base",n,zn,Mt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,S,Or]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Dr,x]}],"font-family":[{font:[kT,x,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,S,x]}],"line-clamp":[{"line-clamp":[D,"none",S,Or]}],leading:[{leading:[r,...w()]}],"list-image":[{"list-image":["none",S,x]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",S,x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...js(),"wavy"]}],"text-decoration-thickness":[{decoration:[D,"from-font","auto",S,Mt]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[D,"auto",S,x]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:w()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",S,x]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",S,x]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:fe()}],"bg-repeat":[{bg:Ue()}],"bg-size":[{bg:Xe()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ut,S,x],radial:["",S,x],conic:[ut,S,x]},PT,ST]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:jn()}],"gradient-via-pos":[{via:jn()}],"gradient-to-pos":[{to:jn()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:pe()}],"rounded-s":[{"rounded-s":pe()}],"rounded-e":[{"rounded-e":pe()}],"rounded-t":[{"rounded-t":pe()}],"rounded-r":[{"rounded-r":pe()}],"rounded-b":[{"rounded-b":pe()}],"rounded-l":[{"rounded-l":pe()}],"rounded-ss":[{"rounded-ss":pe()}],"rounded-se":[{"rounded-se":pe()}],"rounded-ee":[{"rounded-ee":pe()}],"rounded-es":[{"rounded-es":pe()}],"rounded-tl":[{"rounded-tl":pe()}],"rounded-tr":[{"rounded-tr":pe()}],"rounded-br":[{"rounded-br":pe()}],"rounded-bl":[{"rounded-bl":pe()}],"border-w":[{border:Te()}],"border-w-x":[{"border-x":Te()}],"border-w-y":[{"border-y":Te()}],"border-w-s":[{"border-s":Te()}],"border-w-e":[{"border-e":Te()}],"border-w-t":[{"border-t":Te()}],"border-w-r":[{"border-r":Te()}],"border-w-b":[{"border-b":Te()}],"border-w-l":[{"border-l":Te()}],"divide-x":[{"divide-x":Te()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Te()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...js(),"hidden","none"]}],"divide-style":[{divide:[...js(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...js(),"none","hidden"]}],"outline-offset":[{"outline-offset":[D,S,x]}],"outline-w":[{outline:["",D,zn,Mt]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",u,qs,Ks]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",h,qs,Ks]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:Te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[D,Mt]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":Te()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",d,qs,Ks]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[D,S,x]}],"mix-blend":[{"mix-blend":[...Tl(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Tl()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[D]}],"mask-image-linear-from-pos":[{"mask-linear-from":re()}],"mask-image-linear-to-pos":[{"mask-linear-to":re()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":re()}],"mask-image-t-to-pos":[{"mask-t-to":re()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":re()}],"mask-image-r-to-pos":[{"mask-r-to":re()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":re()}],"mask-image-b-to-pos":[{"mask-b-to":re()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":re()}],"mask-image-l-to-pos":[{"mask-l-to":re()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":re()}],"mask-image-x-to-pos":[{"mask-x-to":re()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":re()}],"mask-image-y-to-pos":[{"mask-y-to":re()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[S,x]}],"mask-image-radial-from-pos":[{"mask-radial-from":re()}],"mask-image-radial-to-pos":[{"mask-radial-to":re()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":C()}],"mask-image-conic-pos":[{"mask-conic":[D]}],"mask-image-conic-from-pos":[{"mask-conic-from":re()}],"mask-image-conic-to-pos":[{"mask-conic-to":re()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:fe()}],"mask-repeat":[{mask:Ue()}],"mask-size":[{mask:Xe()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",S,x]}],filter:[{filter:["","none",S,x]}],blur:[{blur:Cl()}],brightness:[{brightness:[D,S,x]}],contrast:[{contrast:[D,S,x]}],"drop-shadow":[{"drop-shadow":["","none",f,qs,Ks]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",D,S,x]}],"hue-rotate":[{"hue-rotate":[D,S,x]}],invert:[{invert:["",D,S,x]}],saturate:[{saturate:[D,S,x]}],sepia:[{sepia:["",D,S,x]}],"backdrop-filter":[{"backdrop-filter":["","none",S,x]}],"backdrop-blur":[{"backdrop-blur":Cl()}],"backdrop-brightness":[{"backdrop-brightness":[D,S,x]}],"backdrop-contrast":[{"backdrop-contrast":[D,S,x]}],"backdrop-grayscale":[{"backdrop-grayscale":["",D,S,x]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[D,S,x]}],"backdrop-invert":[{"backdrop-invert":["",D,S,x]}],"backdrop-opacity":[{"backdrop-opacity":[D,S,x]}],"backdrop-saturate":[{"backdrop-saturate":[D,S,x]}],"backdrop-sepia":[{"backdrop-sepia":["",D,S,x]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",S,x]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[D,"initial",S,x]}],ease:[{ease:["linear","initial",_,S,x]}],delay:[{delay:[D,S,x]}],animate:[{animate:["none",T,S,x]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[g,S,x]}],"perspective-origin":[{"perspective-origin":A()}],rotate:[{rotate:Us()}],"rotate-x":[{"rotate-x":Us()}],"rotate-y":[{"rotate-y":Us()}],"rotate-z":[{"rotate-z":Us()}],scale:[{scale:Bs()}],"scale-x":[{"scale-x":Bs()}],"scale-y":[{"scale-y":Bs()}],"scale-z":[{"scale-z":Bs()}],"scale-3d":["scale-3d"],skew:[{skew:vr()}],"skew-x":[{"skew-x":vr()}],"skew-y":[{"skew-y":vr()}],transform:[{transform:[S,x,"","none","gpu","cpu"]}],"transform-origin":[{origin:A()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ws()}],"translate-x":[{"translate-x":Ws()}],"translate-y":[{"translate-y":Ws()}],"translate-z":[{"translate-z":Ws()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",S,x]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",S,x]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[D,zn,Mt,Or]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},DT=pT(MT);function Rt(...t){return DT(_h(t))}const OT=eT("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function qn({className:t,variant:e,size:n,asChild:s=!1,...i}){const r=s?Lm:"button";return p.jsx(r,{"data-slot":"button",className:Rt(OT({variant:e,size:n,className:t})),...i})}const qa=v.createContext({});function Ya(t){const e=v.useRef(null);return e.current===null&&(e.current=t()),e.current}const LT=typeof window<"u",Kf=LT?v.useLayoutEffect:v.useEffect,pr=v.createContext(null);function Xa(t,e){t.indexOf(e)===-1&&t.push(e)}function Ui(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Ke=(t,e,n)=>n>e?e:n<t?t:n;let Qa=()=>{};const St={},qf=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Yf(t){return typeof t=="object"&&t!==null}const Xf=t=>/^0[^.\s]+$/u.test(t);function Qf(t){let e;return()=>(e===void 0&&(e=t()),e)}const Ae=t=>t,FT=(t,e)=>n=>e(t(n)),Os=(...t)=>t.reduce(FT),vs=(t,e,n)=>{const s=e-t;return s===0?1:(n-t)/s};class Ja{constructor(){this.subscriptions=[]}add(e){return Xa(this.subscriptions,e),()=>Ui(this.subscriptions,e)}notify(e,n,s){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,s);else for(let r=0;r<i;r++){const o=this.subscriptions[r];o&&o(e,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ce=t=>t*1e3,ke=t=>t/1e3;function Jf(t,e){return e?t*(1e3/e):0}const Zf=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,VT=1e-7,jT=12;function UT(t,e,n,s,i){let r,o,a=0;do o=e+(n-e)/2,r=Zf(o,s,i)-t,r>0?n=o:e=o;while(Math.abs(r)>VT&&++a<jT);return o}function Ls(t,e,n,s){if(t===e&&n===s)return Ae;const i=r=>UT(r,0,1,t,n);return r=>r===0||r===1?r:Zf(i(r),e,s)}const ep=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,tp=t=>e=>1-t(1-e),np=Ls(.33,1.53,.69,.99),Za=tp(np),sp=ep(Za),ip=t=>t>=1?1:(t*=2)<1?.5*Za(t):.5*(2-Math.pow(2,-10*(t-1))),el=t=>1-Math.sin(Math.acos(t)),rp=tp(el),op=ep(el),BT=Ls(.42,0,1,1),WT=Ls(0,0,.58,1),ap=Ls(.42,0,.58,1),HT=t=>Array.isArray(t)&&typeof t[0]!="number",lp=t=>Array.isArray(t)&&typeof t[0]=="number",zT={linear:Ae,easeIn:BT,easeInOut:ap,easeOut:WT,circIn:el,circInOut:op,circOut:rp,backIn:Za,backInOut:sp,backOut:np,anticipate:ip},$T=t=>typeof t=="string",eu=t=>{if(lp(t)){Qa(t.length===4);const[e,n,s,i]=t;return Ls(e,n,s,i)}else if($T(t))return zT[t];return t},Ys=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function GT(t,e){let n=new Set,s=new Set,i=!1,r=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),t()),u(a)}const c={schedule:(u,h=!1,d=!1)=>{const m=d&&i?n:s;return h&&o.add(u),m.add(u),u},cancel:u=>{s.delete(u),o.delete(u)},process:u=>{if(a=u,i){r=!0;return}i=!0;const h=n;n=s,s=h,n.forEach(l),n.clear(),i=!1,r&&(r=!1,c.process(u))}};return c}const KT=40;function cp(t,e){let n=!1,s=!0;const i={delta:0,timestamp:0,isProcessing:!1},r=()=>n=!0,o=Ys.reduce((E,C)=>(E[C]=GT(r),E),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:h,preRender:d,render:f,postRender:m}=o,g=()=>{const E=St.useManualTiming,C=E?i.timestamp:performance.now();n=!1,E||(i.delta=s?1e3/60:Math.max(Math.min(C-i.timestamp,KT),1)),i.timestamp=C,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),u.process(i),h.process(i),d.process(i),f.process(i),m.process(i),i.isProcessing=!1,n&&e&&(s=!1,t(g))},y=()=>{n=!0,s=!0,i.isProcessing||t(g)};return{schedule:Ys.reduce((E,C)=>{const A=o[C];return E[C]=(V,U=!1,w=!1)=>(n||y(),A.schedule(V,U,w)),E},{}),cancel:E=>{for(let C=0;C<Ys.length;C++)o[Ys[C]].cancel(E)},state:i,steps:o}}const{schedule:z,cancel:kt,state:le,steps:Lr}=cp(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ae,!0);let ci;function qT(){ci=void 0}const ge={now:()=>(ci===void 0&&ge.set(le.isProcessing||St.useManualTiming?le.timestamp:performance.now()),ci),set:t=>{ci=t,queueMicrotask(qT)}},up=t=>e=>typeof e=="string"&&e.startsWith(t),hp=up("--"),YT=up("var(--"),tl=t=>YT(t)?XT.test(t.split("/*")[0].trim()):!1,XT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function tu(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Ln={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ws={...Ln,transform:t=>Ke(0,1,t)},Xs={...Ln,default:1},ns=t=>Math.round(t*1e5)/1e5,nl=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function QT(t){return t==null}const JT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,sl=(t,e)=>n=>!!(typeof n=="string"&&JT.test(n)&&n.startsWith(t)||e&&!QT(n)&&Object.prototype.hasOwnProperty.call(n,e)),dp=(t,e,n)=>s=>{if(typeof s!="string")return s;const[i,r,o,a]=s.match(nl);return{[t]:parseFloat(i),[e]:parseFloat(r),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},ZT=t=>Ke(0,255,t),Fr={...Ln,transform:t=>Math.round(ZT(t))},Bt={test:sl("rgb","red"),parse:dp("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+Fr.transform(t)+", "+Fr.transform(e)+", "+Fr.transform(n)+", "+ns(ws.transform(s))+")"};function eC(t){let e="",n="",s="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),s=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),s=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,s+=s,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:i?parseInt(i,16)/255:1}}const xo={test:sl("#"),parse:eC,transform:Bt.transform},Fs=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ht=Fs("deg"),Ge=Fs("%"),k=Fs("px"),tC=Fs("vh"),nC=Fs("vw"),nu={...Ge,parse:t=>Ge.parse(t)/100,transform:t=>Ge.transform(t*100)},ln={test:sl("hsl","hue"),parse:dp("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+Ge.transform(ns(e))+", "+Ge.transform(ns(n))+", "+ns(ws.transform(s))+")"},ee={test:t=>Bt.test(t)||xo.test(t)||ln.test(t),parse:t=>Bt.test(t)?Bt.parse(t):ln.test(t)?ln.parse(t):xo.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Bt.transform(t):ln.transform(t),getAnimatableNone:t=>{const e=ee.parse(t);return e.alpha=0,ee.transform(e)}},sC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function iC(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(nl))==null?void 0:e.length)||0)+(((n=t.match(sC))==null?void 0:n.length)||0)>0}const fp="number",pp="color",rC="var",oC="var(",su="${}",aC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function In(t){const e=t.toString(),n=[],s={color:[],number:[],var:[]},i=[];let r=0;const a=e.replace(aC,l=>(ee.test(l)?(s.color.push(r),i.push(pp),n.push(ee.parse(l))):l.startsWith(oC)?(s.var.push(r),i.push(rC),n.push(l)):(s.number.push(r),i.push(fp),n.push(parseFloat(l))),++r,su)).split(su);return{values:n,split:a,indexes:s,types:i}}function lC(t){return In(t).values}function mp({split:t,types:e}){const n=t.length;return s=>{let i="";for(let r=0;r<n;r++)if(i+=t[r],s[r]!==void 0){const o=e[r];o===fp?i+=ns(s[r]):o===pp?i+=ee.transform(s[r]):i+=s[r]}return i}}function cC(t){return mp(In(t))}const uC=t=>typeof t=="number"?0:ee.test(t)?ee.getAnimatableNone(t):t,hC=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:uC(t);function dC(t){const e=In(t);return mp(e)(e.values.map((s,i)=>hC(s,e.split[i])))}const je={test:iC,parse:lC,createTransformer:cC,getAnimatableNone:dC};function Vr(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function fC({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,e/=100,n/=100;let i=0,r=0,o=0;if(!e)i=r=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=Vr(l,a,t+1/3),r=Vr(l,a,t),o=Vr(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:s}}function Bi(t,e){return n=>n>0?e:t}const K=(t,e,n)=>t+(e-t)*n,jr=(t,e,n)=>{const s=t*t,i=n*(e*e-s)+s;return i<0?0:Math.sqrt(i)},pC=[xo,Bt,ln],mC=t=>pC.find(e=>e.test(t));function iu(t){const e=mC(t);if(!e)return!1;let n=e.parse(t);return e===ln&&(n=fC(n)),n}const ru=(t,e)=>{const n=iu(t),s=iu(e);if(!n||!s)return Bi(t,e);const i={...n};return r=>(i.red=jr(n.red,s.red,r),i.green=jr(n.green,s.green,r),i.blue=jr(n.blue,s.blue,r),i.alpha=K(n.alpha,s.alpha,r),Bt.transform(i))},So=new Set(["none","hidden"]);function gC(t,e){return So.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function yC(t,e){return n=>K(t,e,n)}function il(t){return typeof t=="number"?yC:typeof t=="string"?tl(t)?Bi:ee.test(t)?ru:wC:Array.isArray(t)?gp:typeof t=="object"?ee.test(t)?ru:_C:Bi}function gp(t,e){const n=[...t],s=n.length,i=t.map((r,o)=>il(r)(r,e[o]));return r=>{for(let o=0;o<s;o++)n[o]=i[o](r);return n}}function _C(t,e){const n={...t,...e},s={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(s[i]=il(t[i])(t[i],e[i]));return i=>{for(const r in s)n[r]=s[r](i);return n}}function vC(t,e){const n=[],s={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const r=e.types[i],o=t.indexes[r][s[r]],a=t.values[o]??0;n[i]=a,s[r]++}return n}const wC=(t,e)=>{const n=je.createTransformer(e),s=In(t),i=In(e);return s.indexes.var.length===i.indexes.var.length&&s.indexes.color.length===i.indexes.color.length&&s.indexes.number.length>=i.indexes.number.length?So.has(t)&&!i.values.length||So.has(e)&&!s.values.length?gC(t,e):Os(gp(vC(s,i),i.values),n):Bi(t,e)};function yp(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?K(t,e,n):il(t)(t,e)}const bC=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>z.update(e,n),stop:()=>kt(e),now:()=>le.isProcessing?le.timestamp:ge.now()}},_p=(t,e,n=10)=>{let s="";const i=Math.max(Math.round(e/n),2);for(let r=0;r<i;r++)s+=Math.round(t(r/(i-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},Wi=2e4;function rl(t){let e=0;const n=50;let s=t.next(e);for(;!s.done&&e<Wi;)e+=n,s=t.next(e);return e>=Wi?1/0:e}function EC(t,e=100,n){const s=n({...t,keyframes:[0,e]}),i=Math.min(rl(s),Wi);return{type:"keyframes",ease:r=>s.next(i*r).value/e,duration:ke(i)}}const X={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function ko(t,e){return t*Math.sqrt(1-e*e)}const TC=12;function CC(t,e,n){let s=n;for(let i=1;i<TC;i++)s=s-t(s)/e(s);return s}const Ur=.001;function IC({duration:t=X.duration,bounce:e=X.bounce,velocity:n=X.velocity,mass:s=X.mass}){let i,r,o=1-e;o=Ke(X.minDamping,X.maxDamping,o),t=Ke(X.minDuration,X.maxDuration,ke(t)),o<1?(i=c=>{const u=c*o,h=u*t,d=u-n,f=ko(c,o),m=Math.exp(-h);return Ur-d/f*m},r=c=>{const h=c*o*t,d=h*n+n,f=Math.pow(o,2)*Math.pow(c,2)*t,m=Math.exp(-h),g=ko(Math.pow(c,2),o);return(-i(c)+Ur>0?-1:1)*((d-f)*m)/g}):(i=c=>{const u=Math.exp(-c*t),h=(c-n)*t+1;return-Ur+u*h},r=c=>{const u=Math.exp(-c*t),h=(n-c)*(t*t);return u*h});const a=5/t,l=CC(i,r,a);if(t=Ce(t),isNaN(l))return{stiffness:X.stiffness,damping:X.damping,duration:t};{const c=Math.pow(l,2)*s;return{stiffness:c,damping:o*2*Math.sqrt(s*c),duration:t}}}const xC=["duration","bounce"],SC=["stiffness","damping","mass"];function ou(t,e){return e.some(n=>t[n]!==void 0)}function kC(t){let e={velocity:X.velocity,stiffness:X.stiffness,damping:X.damping,mass:X.mass,isResolvedFromDuration:!1,...t};if(!ou(t,SC)&&ou(t,xC))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,s=2*Math.PI/(n*1.2),i=s*s,r=2*Ke(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:X.mass,stiffness:i,damping:r}}else{const n=IC({...t,velocity:0});e={...e,...n,mass:X.mass},e.isResolvedFromDuration=!0}return e}function Hi(t=X.visualDuration,e=X.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:s,restDelta:i}=n;const r=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:r},{stiffness:l,damping:c,mass:u,duration:h,velocity:d,isResolvedFromDuration:f}=kC({...n,velocity:-ke(n.velocity||0)}),m=d||0,g=c/(2*Math.sqrt(l*u)),y=o-r,_=ke(Math.sqrt(l/u)),T=Math.abs(y)<5;s||(s=T?X.restSpeed.granular:X.restSpeed.default),i||(i=T?X.restDelta.granular:X.restDelta.default);let E,C,A,V,U,w;if(g<1)A=ko(_,g),V=(m+g*_*y)/A,E=P=>{const H=Math.exp(-g*_*P);return o-H*(V*Math.sin(A*P)+y*Math.cos(A*P))},U=g*_*V+y*A,w=g*_*y-V*A,C=P=>Math.exp(-g*_*P)*(U*Math.sin(A*P)+w*Math.cos(A*P));else if(g===1){E=H=>o-Math.exp(-_*H)*(y+(m+_*y)*H);const P=m+_*y;C=H=>Math.exp(-_*H)*(_*P*H-m)}else{const P=_*Math.sqrt(g*g-1);E=be=>{const de=Math.exp(-g*_*be),Z=Math.min(P*be,300);return o-de*((m+g*_*y)*Math.sinh(Z)+P*y*Math.cosh(Z))/P};const H=(m+g*_*y)/P,Y=g*_*H-y*P,Ie=g*_*y-H*P;C=be=>{const de=Math.exp(-g*_*be),Z=Math.min(P*be,300);return de*(Y*Math.sinh(Z)+Ie*Math.cosh(Z))}}const M={calculatedDuration:f&&h||null,velocity:P=>Ce(C(P)),next:P=>{if(!f&&g<1){const Y=Math.exp(-g*_*P),Ie=Math.sin(A*P),be=Math.cos(A*P),de=o-Y*(V*Ie+y*be),Z=Ce(Y*(U*Ie+w*be));return a.done=Math.abs(Z)<=s&&Math.abs(o-de)<=i,a.value=a.done?o:de,a}const H=E(P);if(f)a.done=P>=h;else{const Y=Ce(C(P));a.done=Math.abs(Y)<=s&&Math.abs(o-H)<=i}return a.value=a.done?o:H,a},toString:()=>{const P=Math.min(rl(M),Wi),H=_p(Y=>M.next(P*Y).value,P,30);return P+"ms "+H},toTransition:()=>{}};return M}Hi.applyToOptions=t=>{const e=EC(t,100,Hi);return t.ease=e.ease,t.duration=Ce(e.duration),t.type="keyframes",t};const AC=5;function vp(t,e,n){const s=Math.max(e-AC,0);return Jf(n-t(s),e-s)}function Ao({keyframes:t,velocity:e=0,power:n=.8,timeConstant:s=325,bounceDamping:i=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=t[0],d={done:!1,value:h},f=w=>a!==void 0&&w<a||l!==void 0&&w>l,m=w=>a===void 0?l:l===void 0||Math.abs(a-w)<Math.abs(l-w)?a:l;let g=n*e;const y=h+g,_=o===void 0?y:o(y);_!==y&&(g=_-h);const T=w=>-g*Math.exp(-w/s),E=w=>_+T(w),C=w=>{const M=T(w),P=E(w);d.done=Math.abs(M)<=c,d.value=d.done?_:P};let A,V;const U=w=>{f(d.value)&&(A=w,V=Hi({keyframes:[d.value,m(d.value)],velocity:vp(E,w,d.value),damping:i,stiffness:r,restDelta:c,restSpeed:u}))};return U(0),{calculatedDuration:null,next:w=>{let M=!1;return!V&&A===void 0&&(M=!0,C(w),U(w)),A!==void 0&&w>=A?V.next(w-A):(!M&&C(w),d)}}}function PC(t,e,n){const s=[],i=n||St.mix||yp,r=t.length-1;for(let o=0;o<r;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Ae:e;a=Os(l,a)}s.push(a)}return s}function RC(t,e,{clamp:n=!0,ease:s,mixer:i}={}){const r=t.length;if(Qa(r===e.length),r===1)return()=>e[0];if(r===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[r-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=PC(e,s,i),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let h=0;if(l>1)for(;h<t.length-2&&!(u<t[h+1]);h++);const d=vs(t[h],t[h+1],u);return a[h](d)};return n?u=>c(Ke(t[0],t[r-1],u)):c}function NC(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const i=vs(0,e,s);t.push(K(n,1,i))}}function MC(t){const e=[0];return NC(e,t.length-1),e}function DC(t,e){return t.map(n=>n*e)}function OC(t,e){return t.map(()=>e||ap).splice(0,t.length-1)}function ss({duration:t=300,keyframes:e,times:n,ease:s="easeInOut"}){const i=HT(s)?s.map(eu):eu(s),r={done:!1,value:e[0]},o=DC(n&&n.length===e.length?n:MC(e),t),a=RC(o,e,{ease:Array.isArray(i)?i:OC(e,i)});return{calculatedDuration:t,next:l=>(r.value=a(l),r.done=l>=t,r)}}const LC=t=>t!==null;function mr(t,{repeat:e,repeatType:n="loop"},s,i=1){const r=t.filter(LC),a=i<0||e&&n!=="loop"&&e%2===1?0:r.length-1;return!a||s===void 0?r[a]:s}const FC={decay:Ao,inertia:Ao,tween:ss,keyframes:ss,spring:Hi};function wp(t){typeof t.type=="string"&&(t.type=FC[t.type])}class ol{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const VC=t=>t/100;class zi extends ol{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var s,i;const{motionValue:n}=this.options;n&&n.updatedAt!==ge.now()&&this.tick(ge.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(s=this.options).onStop)==null||i.call(s))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;wp(e);const{type:n=ss,repeat:s=0,repeatDelay:i=0,repeatType:r,velocity:o=0}=e;let{keyframes:a}=e;const l=n||ss;l!==ss&&typeof a[0]!="number"&&(this.mixKeyframes=Os(VC,yp(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});r==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=rl(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(s+1)-i,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:s,totalDuration:i,mixKeyframes:r,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return s.next(0);const{delay:c=0,keyframes:u,repeat:h,repeatType:d,repeatDelay:f,type:m,onUpdate:g,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const _=this.currentTime-c*(this.playbackSpeed>=0?1:-1),T=this.playbackSpeed>=0?_<0:_>i;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let E=this.currentTime,C=s;if(h){const w=Math.min(this.currentTime,i)/a;let M=Math.floor(w),P=w%1;!P&&w>=1&&(P=1),P===1&&M--,M=Math.min(M,h+1),!!(M%2)&&(d==="reverse"?(P=1-P,f&&(P-=f/a)):d==="mirror"&&(C=o)),E=Ke(0,1,P)*a}let A;T?(this.delayState.value=u[0],A=this.delayState):A=C.next(E),r&&!T&&(A.value=r(A.value));let{done:V}=A;!T&&l!==null&&(V=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&V);return U&&m!==Ao&&(A.value=mr(u,this.options,y,this.speed)),g&&g(A.value),U&&this.finish(),A}then(e,n){return this.finished.then(e,n)}get duration(){return ke(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+ke(e)}get time(){return ke(this.currentTime)}set time(e){e=Ce(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return vp(s=>this.generator.next(s).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(ge.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=ke(this.currentTime))}play(){var i,r;if(this.isStopped)return;const{driver:e=bC,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(r=(i=this.options).onPlay)==null||r.call(i);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ge.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function jC(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Wt=t=>t*180/Math.PI,Po=t=>{const e=Wt(Math.atan2(t[1],t[0]));return Ro(e)},UC={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Po,rotateZ:Po,skewX:t=>Wt(Math.atan(t[1])),skewY:t=>Wt(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Ro=t=>(t=t%360,t<0&&(t+=360),t),au=Po,lu=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),cu=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),BC={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:lu,scaleY:cu,scale:t=>(lu(t)+cu(t))/2,rotateX:t=>Ro(Wt(Math.atan2(t[6],t[5]))),rotateY:t=>Ro(Wt(Math.atan2(-t[2],t[0]))),rotateZ:au,rotate:au,skewX:t=>Wt(Math.atan(t[4])),skewY:t=>Wt(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function No(t){return t.includes("scale")?1:0}function Mo(t,e){if(!t||t==="none")return No(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,i;if(n)s=BC,i=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=UC,i=a}if(!i)return No(e);const r=s[e],o=i[1].split(",").map(HC);return typeof r=="function"?r(o):o[r]}const WC=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Mo(n,e)};function HC(t){return parseFloat(t.trim())}const Fn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Vn=new Set(Fn),uu=t=>t===Ln||t===k,zC=new Set(["x","y","z"]),$C=Fn.filter(t=>!zC.has(t));function GC(t){const e=[];return $C.forEach(n=>{const s=t.getValue(n);s!==void 0&&(e.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),e}const yt={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:s})=>{const i=t.max-t.min;return s==="border-box"?i:i-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:s})=>{const i=t.max-t.min;return s==="border-box"?i:i-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Mo(e,"x"),y:(t,{transform:e})=>Mo(e,"y")};yt.translateX=yt.x;yt.translateY=yt.y;const Ht=new Set;let Do=!1,Oo=!1,Lo=!1;function bp(){if(Oo){const t=Array.from(Ht).filter(s=>s.needsMeasurement),e=new Set(t.map(s=>s.element)),n=new Map;e.forEach(s=>{const i=GC(s);i.length&&(n.set(s,i),s.render())}),t.forEach(s=>s.measureInitialState()),e.forEach(s=>{s.render();const i=n.get(s);i&&i.forEach(([r,o])=>{var a;(a=s.getValue(r))==null||a.set(o)})}),t.forEach(s=>s.measureEndState()),t.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Oo=!1,Do=!1,Ht.forEach(t=>t.complete(Lo)),Ht.clear()}function Ep(){Ht.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Oo=!0)})}function KC(){Lo=!0,Ep(),bp(),Lo=!1}class al{constructor(e,n,s,i,r,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=s,this.motionValue=i,this.element=r,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Ht.add(this),Do||(Do=!0,z.read(Ep),z.resolveKeyframes(bp))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:s,motionValue:i}=this;if(e[0]===null){const r=i==null?void 0:i.get(),o=e[e.length-1];if(r!==void 0)e[0]=r;else if(s&&n){const a=s.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),i&&r===void 0&&i.set(e[0])}jC(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ht.delete(this)}cancel(){this.state==="scheduled"&&(Ht.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const qC=t=>t.startsWith("--");function Tp(t,e,n){qC(e)?t.style.setProperty(e,n):t.style[e]=n}const YC={};function Cp(t,e){const n=Qf(t);return()=>YC[e]??n()}const XC=Cp(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ip=Cp(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Yn=([t,e,n,s])=>`cubic-bezier(${t}, ${e}, ${n}, ${s})`,hu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Yn([0,.65,.55,1]),circOut:Yn([.55,0,1,.45]),backIn:Yn([.31,.01,.66,-.59]),backOut:Yn([.33,1.53,.69,.99])};function xp(t,e){if(t)return typeof t=="function"?Ip()?_p(t,e):"ease-out":lp(t)?Yn(t):Array.isArray(t)?t.map(n=>xp(n,e)||hu.easeOut):hu[t]}function QC(t,e,n,{delay:s=0,duration:i=300,repeat:r=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const h=xp(a,i);Array.isArray(h)&&(u.easing=h);const d={delay:s,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"};return c&&(d.pseudoElement=c),t.animate(u,d)}function Sp(t){return typeof t=="function"&&"applyToOptions"in t}function JC({type:t,...e}){return Sp(t)&&Ip()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class kp extends ol{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:s,keyframes:i,pseudoElement:r,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!r,this.allowFlatten=o,this.options=e,Qa(typeof e.type!="string");const c=JC(e);this.animation=QC(n,s,i,c,r),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const u=mr(i,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(u),Tp(n,s,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,s,i;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((i=(s=this.animation).commitStyles)==null||i.call(s))}get duration(){var n,s;const e=((s=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:s.call(n).duration)||0;return ke(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+ke(e)}get time(){return ke(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ce(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:s,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&XC()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),s&&(this.animation.rangeEnd=s),Ae):i(this)}}const Ap={anticipate:ip,backInOut:sp,circInOut:op};function ZC(t){return t in Ap}function eI(t){typeof t.ease=="string"&&ZC(t.ease)&&(t.ease=Ap[t.ease])}const Br=10;class tI extends kp{constructor(e){eI(e),wp(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:s,onComplete:i,element:r,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new zi({...o,autoplay:!1}),l=Math.max(Br,ge.now()-this.startTime),c=Ke(0,Br,l-Br),u=a.sample(l).value,{name:h}=this.options;r&&h&&Tp(r,h,u),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,u,c),a.stop()}}const du=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(je.test(t)||t==="0")&&!t.startsWith("url("));function nI(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function sI(t,e,n,s){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const r=t[t.length-1],o=du(i,e),a=du(r,e);return!o||!a?!1:nI(t)||(n==="spring"||Sp(n))&&s}function Fo(t){t.duration=0,t.type="keyframes"}const Pp=new Set(["opacity","clipPath","filter","transform"]),iI=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function rI(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&iI.test(t[e]))return!0;return!1}const oI=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),aI=Qf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function lI(t){var h;const{motionValue:e,name:n,repeatDelay:s,repeatType:i,damping:r,type:o,keyframes:a}=t;if(!(((h=e==null?void 0:e.owner)==null?void 0:h.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=e.owner.getProps();return aI()&&n&&(Pp.has(n)||oI.has(n)&&rI(a))&&(n!=="transform"||!u)&&!c&&!s&&i!=="mirror"&&r!==0&&o!=="inertia"}const cI=40;class uI extends ol{constructor({autoplay:e=!0,delay:n=0,type:s="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...h}){var m;super(),this.stop=()=>{var g,y;this._animation&&(this._animation.stop(),(g=this.stopTimeline)==null||g.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=ge.now();const d={autoplay:e,delay:n,type:s,repeat:i,repeatDelay:r,repeatType:o,name:l,motionValue:c,element:u,...h},f=(u==null?void 0:u.KeyframeResolver)||al;this.keyframeResolver=new f(a,(g,y,_)=>this.onKeyframesResolved(g,y,d,!_),l,c,u),(m=this.keyframeResolver)==null||m.scheduleResolve()}onKeyframesResolved(e,n,s,i){var _,T;this.keyframeResolver=void 0;const{name:r,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=s;this.resolvedAt=ge.now();let h=!0;sI(e,r,o,a)||(h=!1,(St.instantAnimations||!l)&&(u==null||u(mr(e,s,n))),e[0]=e[e.length-1],Fo(s),s.repeat=0);const f={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>cI?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:e},m=h&&!c&&lI(f),g=(T=(_=f.motionValue)==null?void 0:_.owner)==null?void 0:T.current;let y;if(m)try{y=new tI({...f,element:g})}catch{y=new zi(f)}else y=new zi(f);y.finished.then(()=>{this.notifyFinished()}).catch(Ae),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),KC()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function Rp(t,e,n,s=0,i=1){const r=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*s;return typeof n=="function"?n(r,o):i===1?r*s:a-r*s}const hI=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function dI(t){const e=hI.exec(t);if(!e)return[,];const[,n,s,i]=e;return[`--${n??s}`,i]}function Np(t,e,n=1){const[s,i]=dI(t);if(!s)return;const r=window.getComputedStyle(e).getPropertyValue(s);if(r){const o=r.trim();return qf(o)?parseFloat(o):o}return tl(i)?Np(i,e,n+1):i}const fI={type:"spring",stiffness:500,damping:25,restSpeed:10},pI=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),mI={type:"keyframes",duration:.8},gI={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},yI=(t,{keyframes:e})=>e.length>2?mI:Vn.has(t)?t.startsWith("scale")?pI(e[1]):fI:gI;function Mp(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...s}=t;return{...e,...s}}return t}function ll(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?Mp(n,t):n}const _I=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function vI(t){for(const e in t)if(!_I.has(e))return!0;return!1}const cl=(t,e,n,s={},i,r)=>o=>{const a=ll(s,t)||{},l=a.delay||s.delay||0;let{elapsed:c=0}=s;c=c-Ce(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:r?void 0:i};vI(a)||Object.assign(u,yI(t,u)),u.duration&&(u.duration=Ce(u.duration)),u.repeatDelay&&(u.repeatDelay=Ce(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Fo(u),u.delay===0&&(h=!0)),(St.instantAnimations||St.skipAnimations||i!=null&&i.shouldSkipAnimations)&&(h=!0,Fo(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,h&&!r&&e.get()!==void 0){const d=mr(u.keyframes,a);if(d!==void 0){z.update(()=>{u.onUpdate(d),u.onComplete()});return}}return a.isSync?new zi(u):new uI(u)};function fu(t){const e=[{},{}];return t==null||t.values.forEach((n,s)=>{e[0][s]=n.get(),e[1][s]=n.getVelocity()}),e}function ul(t,e,n,s){if(typeof e=="function"){const[i,r]=fu(s);e=e(n!==void 0?n:t.custom,i,r)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,r]=fu(s);e=e(n!==void 0?n:t.custom,i,r)}return e}function zt(t,e,n){const s=t.getProps();return ul(s,e,n!==void 0?n:s.custom,t)}const Dp=new Set(["width","height","top","left","right","bottom",...Fn]),pu=30,wI=t=>!isNaN(parseFloat(t));class bI{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var r;const i=ge.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((r=this.events.change)==null||r.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ge.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=wI(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Ja);const s=this.events[e].add(n);return e==="change"?()=>{s(),z.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-s}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ge.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>pu)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,pu);return Jf(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function xn(t,e){return new bI(t,e)}const Vo=t=>Array.isArray(t);function EI(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,xn(n))}function TI(t){return Vo(t)?t[t.length-1]||0:t}function CI(t,e){const n=zt(t,e);let{transitionEnd:s={},transition:i={},...r}=n||{};r={...r,...s};for(const o in r){const a=TI(r[o]);EI(t,o,a)}}const ue=t=>!!(t&&t.getVelocity);function II(t){return!!(ue(t)&&t.add)}function jo(t,e){const n=t.getValue("willChange");if(II(n))return n.add(e);if(!n&&St.WillChange){const s=new St.WillChange("auto");t.addValue("willChange",s),s.add(e)}}function hl(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const xI="framerAppearId",Op="data-"+hl(xI);function Lp(t){return t.props[Op]}function SI({protectedKeys:t,needsAnimating:e},n){const s=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,s}function Fp(t,e,{delay:n=0,transitionOverride:s,type:i}={}){let{transition:r,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();r=r?Mp(r,l):l;const c=r==null?void 0:r.reduceMotion;s&&(r=s);const u=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const d in a){const f=t.getValue(d,t.latestValues[d]??null),m=a[d];if(m===void 0||h&&SI(h,d))continue;const g={delay:n,...ll(r||{},d)},y=f.get();if(y!==void 0&&!f.isAnimating()&&!Array.isArray(m)&&m===y&&!g.velocity){z.update(()=>f.set(m));continue}let _=!1;if(window.MotionHandoffAnimation){const C=Lp(t);if(C){const A=window.MotionHandoffAnimation(C,d,z);A!==null&&(g.startTime=A,_=!0)}}jo(t,d);const T=c??t.shouldReduceMotion;f.start(cl(d,f,m,T&&Dp.has(d)?{type:!1}:g,t,_));const E=f.animation;E&&u.push(E)}if(o){const d=()=>z.update(()=>{o&&CI(t,o)});u.length?Promise.all(u).then(d):d()}return u}function Uo(t,e,n={}){var l;const s=zt(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=t.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(i=n.transitionOverride);const r=s?()=>Promise.all(Fp(t,s,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=i;return kI(t,e,c,u,h,d,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,u]=a==="beforeChildren"?[r,o]:[o,r];return c().then(()=>u())}else return Promise.all([r(),o(n.delay)])}function kI(t,e,n=0,s=0,i=0,r=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(Uo(l,e,{...o,delay:n+(typeof s=="function"?0:s)+Rp(t.variantChildren,l,s,i,r)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function AI(t,e,n={}){t.notify("AnimationStart",e);let s;if(Array.isArray(e)){const i=e.map(r=>Uo(t,r,n));s=Promise.all(i)}else if(typeof e=="string")s=Uo(t,e,n);else{const i=typeof e=="function"?zt(t,e,n.custom):e;s=Promise.all(Fp(t,i,n))}return s.then(()=>{t.notify("AnimationComplete",e)})}const PI={test:t=>t==="auto",parse:t=>t},Vp=t=>e=>e.test(t),jp=[Ln,k,Ge,ht,nC,tC,PI],mu=t=>jp.find(Vp(t));function RI(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Xf(t):!0}const NI=new Set(["brightness","contrast","saturate","opacity"]);function MI(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[s]=n.match(nl)||[];if(!s)return t;const i=n.replace(s,"");let r=NI.has(e)?1:0;return s!==n&&(r*=100),e+"("+r+i+")"}const DI=/\b([a-z-]*)\(.*?\)/gu,Bo={...je,getAnimatableNone:t=>{const e=t.match(DI);return e?e.map(MI).join(" "):t}},Wo={...je,getAnimatableNone:t=>{const e=je.parse(t);return je.createTransformer(t)(e.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},gu={...Ln,transform:Math.round},OI={rotate:ht,rotateX:ht,rotateY:ht,rotateZ:ht,scale:Xs,scaleX:Xs,scaleY:Xs,scaleZ:Xs,skew:ht,skewX:ht,skewY:ht,distance:k,translateX:k,translateY:k,translateZ:k,x:k,y:k,z:k,perspective:k,transformPerspective:k,opacity:ws,originX:nu,originY:nu,originZ:k},dl={borderWidth:k,borderTopWidth:k,borderRightWidth:k,borderBottomWidth:k,borderLeftWidth:k,borderRadius:k,borderTopLeftRadius:k,borderTopRightRadius:k,borderBottomRightRadius:k,borderBottomLeftRadius:k,width:k,maxWidth:k,height:k,maxHeight:k,top:k,right:k,bottom:k,left:k,inset:k,insetBlock:k,insetBlockStart:k,insetBlockEnd:k,insetInline:k,insetInlineStart:k,insetInlineEnd:k,padding:k,paddingTop:k,paddingRight:k,paddingBottom:k,paddingLeft:k,paddingBlock:k,paddingBlockStart:k,paddingBlockEnd:k,paddingInline:k,paddingInlineStart:k,paddingInlineEnd:k,margin:k,marginTop:k,marginRight:k,marginBottom:k,marginLeft:k,marginBlock:k,marginBlockStart:k,marginBlockEnd:k,marginInline:k,marginInlineStart:k,marginInlineEnd:k,fontSize:k,backgroundPositionX:k,backgroundPositionY:k,...OI,zIndex:gu,fillOpacity:ws,strokeOpacity:ws,numOctaves:gu},LI={...dl,color:ee,backgroundColor:ee,outlineColor:ee,fill:ee,stroke:ee,borderColor:ee,borderTopColor:ee,borderRightColor:ee,borderBottomColor:ee,borderLeftColor:ee,filter:Bo,WebkitFilter:Bo,mask:Wo,WebkitMask:Wo},Up=t=>LI[t],FI=new Set([Bo,Wo]);function Bp(t,e){let n=Up(t);return FI.has(n)||(n=je),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const VI=new Set(["auto","none","0"]);function jI(t,e,n){let s=0,i;for(;s<t.length&&!i;){const r=t[s];typeof r=="string"&&!VI.has(r)&&In(r).values.length&&(i=t[s]),s++}if(i&&n)for(const r of e)t[r]=Bp(n,i)}class UI extends al{constructor(e,n,s,i,r){super(e,n,s,i,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let h=e[u];if(typeof h=="string"&&(h=h.trim(),tl(h))){const d=Np(h,n.current);d!==void 0&&(e[u]=d),u===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Dp.has(s)||e.length!==2)return;const[i,r]=e,o=mu(i),a=mu(r),l=tu(i),c=tu(r);if(l!==c&&yt[s]){this.needsMeasurement=!0;return}if(o!==a)if(uu(o)&&uu(a))for(let u=0;u<e.length;u++){const h=e[u];typeof h=="string"&&(e[u]=parseFloat(h))}else yt[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,s=[];for(let i=0;i<e.length;i++)(e[i]===null||RI(e[i]))&&s.push(i);s.length&&jI(e,s,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:s}=this;if(!e||!e.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=yt[s](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(s,i).jump(i,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:s}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const r=s.length-1,o=s[r];s[r]=yt[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Wp(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let s=document;const i=(n==null?void 0:n[t])??s.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t).filter(s=>s!=null)}const Hp=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function ui(t){return Yf(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:fl}=cp(queueMicrotask,!1),Me={x:!1,y:!1};function zp(){return Me.x||Me.y}function BI(t){return t==="x"||t==="y"?Me[t]?null:(Me[t]=!0,()=>{Me[t]=!1}):Me.x||Me.y?null:(Me.x=Me.y=!0,()=>{Me.x=Me.y=!1})}function $p(t,e){const n=Wp(t),s=new AbortController,i={passive:!0,...e,signal:s.signal};return[n,i,()=>s.abort()]}function WI(t){return!(t.pointerType==="touch"||zp())}function HI(t,e,n={}){const[s,i,r]=$p(t,n);return s.forEach(o=>{let a=!1,l=!1,c;const u=()=>{o.removeEventListener("pointerleave",m)},h=y=>{c&&(c(y),c=void 0),u()},d=y=>{a=!1,window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),l&&(l=!1,h(y))},f=()=>{a=!0,window.addEventListener("pointerup",d,i),window.addEventListener("pointercancel",d,i)},m=y=>{if(y.pointerType!=="touch"){if(a){l=!0;return}h(y)}},g=y=>{if(!WI(y))return;l=!1;const _=e(o,y);typeof _=="function"&&(c=_,o.addEventListener("pointerleave",m,i))};o.addEventListener("pointerenter",g,i),o.addEventListener("pointerdown",f,i)}),r}const Gp=(t,e)=>e?t===e?!0:Gp(t,e.parentElement):!1,pl=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,zI=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function $I(t){return zI.has(t.tagName)||t.isContentEditable===!0}const GI=new Set(["INPUT","SELECT","TEXTAREA"]);function KI(t){return GI.has(t.tagName)||t.isContentEditable===!0}const hi=new WeakSet;function yu(t){return e=>{e.key==="Enter"&&t(e)}}function Wr(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const qI=(t,e)=>{const n=t.currentTarget;if(!n)return;const s=yu(()=>{if(hi.has(n))return;Wr(n,"down");const i=yu(()=>{Wr(n,"up")}),r=()=>Wr(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",r,e)});n.addEventListener("keydown",s,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),e)};function _u(t){return pl(t)&&!zp()}const vu=new WeakSet;function YI(t,e,n={}){const[s,i,r]=$p(t,n),o=a=>{const l=a.currentTarget;if(!_u(a)||vu.has(a))return;hi.add(l),n.stopPropagation&&vu.add(a);const c=e(l,a),u=(f,m)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",d),hi.has(l)&&hi.delete(l),_u(f)&&typeof c=="function"&&c(f,{success:m})},h=f=>{u(f,l===window||l===document||n.useGlobalTarget||Gp(l,f.target))},d=f=>{u(f,!1)};window.addEventListener("pointerup",h,i),window.addEventListener("pointercancel",d,i)};return s.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),ui(a)&&(a.addEventListener("focus",c=>qI(c,i)),!$I(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),r}function ml(t){return Yf(t)&&"ownerSVGElement"in t}const di=new WeakMap;let dt;const Kp=(t,e,n)=>(s,i)=>i&&i[0]?i[0][t+"Size"]:ml(s)&&"getBBox"in s?s.getBBox()[e]:s[n],XI=Kp("inline","width","offsetWidth"),QI=Kp("block","height","offsetHeight");function JI({target:t,borderBoxSize:e}){var n;(n=di.get(t))==null||n.forEach(s=>{s(t,{get width(){return XI(t,e)},get height(){return QI(t,e)}})})}function ZI(t){t.forEach(JI)}function ex(){typeof ResizeObserver>"u"||(dt=new ResizeObserver(ZI))}function tx(t,e){dt||ex();const n=Wp(t);return n.forEach(s=>{let i=di.get(s);i||(i=new Set,di.set(s,i)),i.add(e),dt==null||dt.observe(s)}),()=>{n.forEach(s=>{const i=di.get(s);i==null||i.delete(e),i!=null&&i.size||dt==null||dt.unobserve(s)})}}const fi=new Set;let cn;function nx(){cn=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};fi.forEach(e=>e(t))},window.addEventListener("resize",cn)}function sx(t){return fi.add(t),cn||nx(),()=>{fi.delete(t),!fi.size&&typeof cn=="function"&&(window.removeEventListener("resize",cn),cn=void 0)}}function wu(t,e){return typeof t=="function"?sx(t):tx(t,e)}function ix(t){return ml(t)&&t.tagName==="svg"}const rx=[...jp,ee,je],ox=t=>rx.find(Vp(t)),bu=()=>({translate:0,scale:1,origin:0,originPoint:0}),un=()=>({x:bu(),y:bu()}),Eu=()=>({min:0,max:0}),ne=()=>({x:Eu(),y:Eu()}),ax=new WeakMap;function gr(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function bs(t){return typeof t=="string"||Array.isArray(t)}const gl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],yl=["initial",...gl];function yr(t){return gr(t.animate)||yl.some(e=>bs(t[e]))}function qp(t){return!!(yr(t)||t.variants)}function lx(t,e,n){for(const s in e){const i=e[s],r=n[s];if(ue(i))t.addValue(s,i);else if(ue(r))t.addValue(s,xn(i,{owner:t}));else if(r!==i)if(t.hasValue(s)){const o=t.getValue(s);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(s);t.addValue(s,xn(o!==void 0?o:i,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const Ho={current:null},Yp={current:!1},cx=typeof window<"u";function ux(){if(Yp.current=!0,!!cx)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ho.current=t.matches;t.addEventListener("change",e),e()}else Ho.current=!1}const Tu=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let $i={};function Xp(t){$i=t}function hx(){return $i}class dx{scrapeMotionValuesFromProps(e,n,s){return{}}constructor({parent:e,props:n,presenceContext:s,reducedMotionConfig:i,skipAnimations:r,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=al,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=ge.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,z.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=s,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=r,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=yr(n),this.isVariantNode=qp(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const m=d[f];c[f]!==void 0&&ue(m)&&m.set(c[f])}}mount(e){var n,s;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=e,ax.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,r)=>this.bindToMotionValue(r,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Yp.current||ux(),this.shouldReduceMotion=Ho.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),kt(this.notifyUpdate),kt(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const s=this.features[n];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&Pp.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:u}=n.accelerate,h=new kp({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Ce(u)}),d=o(h);this.valueSubscriptions.set(e,()=>{d(),h.cancel()});return}const s=Vn.has(e);s&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&z.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let r;typeof window<"u"&&window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),r&&r(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in $i){const n=$i[e];if(!n)continue;const{isEnabled:s,Feature:i}=n;if(!this.features[e]&&i&&s(this.props)&&(this.features[e]=new i(this)),this.features[e]){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ne()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<Tu.length;s++){const i=Tu[s];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const r="on"+i,o=e[r];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=lx(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const s=this.values.get(e);n!==s&&(s&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let s=this.values.get(e);return s===void 0&&n!==void 0&&(s=xn(n===null?void 0:n,{owner:this}),this.addValue(e,s)),s}readValue(e,n){let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(qf(s)||Xf(s))?s=parseFloat(s):!ox(s)&&je.test(n)&&(s=Bp(e,n)),this.setBaseTarget(e,ue(s)?s.get():s)),ue(s)?s.get():s}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var r;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const o=ul(this.props,n,(r=this.presenceContext)==null?void 0:r.custom);o&&(s=o[e])}if(n&&s!==void 0)return s;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!ue(i)?i:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Ja),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){fl.render(this.render)}}class Qp extends dx{constructor(){super(...arguments),this.KeyframeResolver=UI}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const s=e.style;return s?s[n]:void 0}removeValueFromRenderState(e,{vars:n,style:s}){delete n[e],delete s[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ue(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Nt{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Jp({top:t,left:e,right:n,bottom:s}){return{x:{min:e,max:n},y:{min:t,max:s}}}function fx({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function px(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),s=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function Hr(t){return t===void 0||t===1}function zo({scale:t,scaleX:e,scaleY:n}){return!Hr(t)||!Hr(e)||!Hr(n)}function Vt(t){return zo(t)||Zp(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Zp(t){return Cu(t.x)||Cu(t.y)}function Cu(t){return t&&t!=="0%"}function Gi(t,e,n){const s=t-n,i=e*s;return n+i}function Iu(t,e,n,s,i){return i!==void 0&&(t=Gi(t,i,s)),Gi(t,n,s)+e}function $o(t,e=0,n=1,s,i){t.min=Iu(t.min,e,n,s,i),t.max=Iu(t.max,e,n,s,i)}function em(t,{x:e,y:n}){$o(t.x,e.translate,e.scale,e.originPoint),$o(t.y,n.translate,n.scale,n.originPoint)}const xu=.999999999999,Su=1.0000000000001;function mx(t,e,n,s=!1){var a;const i=n.length;if(!i)return;e.x=e.y=1;let r,o;for(let l=0;l<i;l++){r=n[l],o=r.projectionDelta;const{visualElement:c}=r.options;c&&c.props.style&&c.props.style.display==="contents"||(s&&r.options.layoutScroll&&r.scroll&&r!==r.root&&(ze(t.x,-r.scroll.offset.x),ze(t.y,-r.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,em(t,o)),s&&Vt(r.latestValues)&&pi(t,r.latestValues,(a=r.layout)==null?void 0:a.layoutBox))}e.x<Su&&e.x>xu&&(e.x=1),e.y<Su&&e.y>xu&&(e.y=1)}function ze(t,e){t.min+=e,t.max+=e}function ku(t,e,n,s,i=.5){const r=K(t.min,t.max,i);$o(t,e,n,r,s)}function Au(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function pi(t,e,n){const s=n??t;ku(t.x,Au(e.x,s.x),e.scaleX,e.scale,e.originX),ku(t.y,Au(e.y,s.y),e.scaleY,e.scale,e.originY)}function tm(t,e){return Jp(px(t.getBoundingClientRect(),e))}function gx(t,e,n){const s=tm(t,n),{scroll:i}=e;return i&&(ze(s.x,i.offset.x),ze(s.y,i.offset.y)),s}const yx={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_x=Fn.length;function vx(t,e,n){let s="",i=!0;for(let r=0;r<_x;r++){const o=Fn[r],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const c=parseFloat(a);l=o.startsWith("scale")?c===1:c===0}if(!l||n){const c=Hp(a,dl[o]);if(!l){i=!1;const u=yx[o]||o;s+=`${u}(${c}) `}n&&(e[o]=c)}}return s=s.trim(),n?s=n(e,i?"":s):i&&(s="none"),s}function _l(t,e,n){const{style:s,vars:i,transformOrigin:r}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Vn.has(l)){o=!0;continue}else if(hp(l)){i[l]=c;continue}else{const u=Hp(c,dl[l]);l.startsWith("origin")?(a=!0,r[l]=u):s[l]=u}}if(e.transform||(o||n?s.transform=vx(e,t.transform,n):s.transform&&(s.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;s.transformOrigin=`${l} ${c} ${u}`}}function nm(t,{style:e,vars:n},s,i){const r=t.style;let o;for(o in e)r[o]=e[o];i==null||i.applyProjectionStyles(r,s);for(o in n)r.setProperty(o,n[o])}function Pu(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const $n={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(k.test(t))t=parseFloat(t);else return t;const n=Pu(t,e.target.x),s=Pu(t,e.target.y);return`${n}% ${s}%`}},wx={correct:(t,{treeScale:e,projectionDelta:n})=>{const s=t,i=je.parse(t);if(i.length>5)return s;const r=je.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const c=K(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),r(i)}},Go={borderRadius:{...$n,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:$n,borderTopRightRadius:$n,borderBottomLeftRadius:$n,borderBottomRightRadius:$n,boxShadow:wx};function sm(t,{layout:e,layoutId:n}){return Vn.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Go[t]||t==="opacity")}function vl(t,e,n){var o;const s=t.style,i=e==null?void 0:e.style,r={};if(!s)return r;for(const a in s)(ue(s[a])||i&&ue(i[a])||sm(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(r[a]=s[a]);return r}function bx(t){return window.getComputedStyle(t)}class Ex extends Qp{constructor(){super(...arguments),this.type="html",this.renderInstance=nm}readValueFromInstance(e,n){var s;if(Vn.has(n))return(s=this.projection)!=null&&s.isProjecting?No(n):WC(e,n);{const i=bx(e),r=(hp(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return tm(e,n)}build(e,n,s){_l(e,n,s.transformTemplate)}scrapeMotionValuesFromProps(e,n,s){return vl(e,n,s)}}const Tx={offset:"stroke-dashoffset",array:"stroke-dasharray"},Cx={offset:"strokeDashoffset",array:"strokeDasharray"};function Ix(t,e,n=1,s=0,i=!0){t.pathLength=1;const r=i?Tx:Cx;t[r.offset]=`${-s}`,t[r.array]=`${e} ${n}`}const xx=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function im(t,{attrX:e,attrY:n,attrScale:s,pathLength:i,pathSpacing:r=1,pathOffset:o=0,...a},l,c,u){if(_l(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:d}=t;h.transform&&(d.transform=h.transform,delete h.transform),(d.transform||h.transformOrigin)&&(d.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),d.transform&&(d.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete h.transformBox);for(const f of xx)h[f]!==void 0&&(d[f]=h[f],delete h[f]);e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),s!==void 0&&(h.scale=s),i!==void 0&&Ix(h,i,r,o,!1)}const rm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),om=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Sx(t,e,n,s){nm(t,e,void 0,s);for(const i in e.attrs)t.setAttribute(rm.has(i)?i:hl(i),e.attrs[i])}function am(t,e,n){const s=vl(t,e,n);for(const i in t)if(ue(t[i])||ue(e[i])){const r=Fn.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;s[r]=t[i]}return s}class kx extends Qp{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ne}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Vn.has(n)){const s=Up(n);return s&&s.default||0}return n=rm.has(n)?n:hl(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,s){return am(e,n,s)}build(e,n,s){im(e,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(e,n,s,i){Sx(e,n,s,i)}mount(e){this.isSVGTag=om(e.tagName),super.mount(e)}}const Ax=yl.length;function lm(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?lm(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<Ax;n++){const s=yl[n],i=t.props[s];(bs(i)||i===!1)&&(e[s]=i)}return e}function cm(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let s=0;s<n;s++)if(e[s]!==t[s])return!1;return!0}const Px=[...gl].reverse(),Rx=gl.length;function Nx(t){return e=>Promise.all(e.map(({animation:n,options:s})=>AI(t,n,s)))}function Mx(t){let e=Nx(t),n=Ru(),s=!0,i=!1;const r=c=>(u,h)=>{var f;const d=zt(t,h,c==="exit"?(f=t.presenceContext)==null?void 0:f.custom:void 0);if(d){const{transition:m,transitionEnd:g,...y}=d;u={...u,...y,...g}}return u};function o(c){e=c(t)}function a(c){const{props:u}=t,h=lm(t.parent)||{},d=[],f=new Set;let m={},g=1/0;for(let _=0;_<Rx;_++){const T=Px[_],E=n[T],C=u[T]!==void 0?u[T]:h[T],A=bs(C),V=T===c?E.isActive:null;V===!1&&(g=_);let U=C===h[T]&&C!==u[T]&&A;if(U&&(s||i)&&t.manuallyAnimateOnMount&&(U=!1),E.protectedKeys={...m},!E.isActive&&V===null||!C&&!E.prevProp||gr(C)||typeof C=="boolean")continue;if(T==="exit"&&E.isActive&&V!==!0){E.prevResolvedValues&&(m={...m,...E.prevResolvedValues});continue}const w=Dx(E.prevProp,C);let M=w||T===c&&E.isActive&&!U&&A||_>g&&A,P=!1;const H=Array.isArray(C)?C:[C];let Y=H.reduce(r(T),{});V===!1&&(Y={});const{prevResolvedValues:Ie={}}=E,be={...Ie,...Y},de=I=>{M=!0,f.has(I)&&(P=!0,f.delete(I)),E.needsAnimating[I]=!0;const fe=t.getValue(I);fe&&(fe.liveStyle=!1)};for(const I in be){const fe=Y[I],Ue=Ie[I];if(m.hasOwnProperty(I))continue;let Xe=!1;Vo(fe)&&Vo(Ue)?Xe=!cm(fe,Ue):Xe=fe!==Ue,Xe?fe!=null?de(I):f.add(I):fe!==void 0&&f.has(I)?de(I):E.protectedKeys[I]=!0}E.prevProp=C,E.prevResolvedValues=Y,E.isActive&&(m={...m,...Y}),(s||i)&&t.blockInitialAnimation&&(M=!1);const Z=U&&w;M&&(!Z||P)&&d.push(...H.map(I=>{const fe={type:T};if(typeof I=="string"&&(s||i)&&!Z&&t.manuallyAnimateOnMount&&t.parent){const{parent:Ue}=t,Xe=zt(Ue,I);if(Ue.enteringChildren&&Xe){const{delayChildren:jn}=Xe.transition||{};fe.delay=Rp(Ue.enteringChildren,t,jn)}}return{animation:I,options:fe}}))}if(f.size){const _={};if(typeof u.initial!="boolean"){const T=zt(t,Array.isArray(u.initial)?u.initial[0]:u.initial);T&&T.transition&&(_.transition=T.transition)}f.forEach(T=>{const E=t.getBaseTarget(T),C=t.getValue(T);C&&(C.liveStyle=!0),_[T]=E??null}),d.push({animation:_})}let y=!!d.length;return s&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(y=!1),s=!1,i=!1,y?e(d):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=t.variantChildren)==null||d.forEach(f=>{var m;return(m=f.animationState)==null?void 0:m.setActive(c,u)}),n[c].isActive=u;const h=a(c);for(const f in n)n[f].protectedKeys={};return h}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Ru(),i=!0}}}function Dx(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!cm(e,t):!1}function Dt(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ru(){return{animate:Dt(!0),whileInView:Dt(),whileHover:Dt(),whileTap:Dt(),whileDrag:Dt(),whileFocus:Dt(),exit:Dt()}}function Ko(t,e){t.min=e.min,t.max=e.max}function Ne(t,e){Ko(t.x,e.x),Ko(t.y,e.y)}function Nu(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const um=1e-4,Ox=1-um,Lx=1+um,hm=.01,Fx=0-hm,Vx=0+hm;function ye(t){return t.max-t.min}function jx(t,e,n){return Math.abs(t-e)<=n}function Mu(t,e,n,s=.5){t.origin=s,t.originPoint=K(e.min,e.max,t.origin),t.scale=ye(n)/ye(e),t.translate=K(n.min,n.max,t.origin)-t.originPoint,(t.scale>=Ox&&t.scale<=Lx||isNaN(t.scale))&&(t.scale=1),(t.translate>=Fx&&t.translate<=Vx||isNaN(t.translate))&&(t.translate=0)}function is(t,e,n,s){Mu(t.x,e.x,n.x,s?s.originX:void 0),Mu(t.y,e.y,n.y,s?s.originY:void 0)}function Du(t,e,n,s=0){const i=s?K(n.min,n.max,s):n.min;t.min=i+e.min,t.max=t.min+ye(e)}function Ux(t,e,n,s){Du(t.x,e.x,n.x,s==null?void 0:s.x),Du(t.y,e.y,n.y,s==null?void 0:s.y)}function Ou(t,e,n,s=0){const i=s?K(n.min,n.max,s):n.min;t.min=e.min-i,t.max=t.min+ye(e)}function Ki(t,e,n,s){Ou(t.x,e.x,n.x,s==null?void 0:s.x),Ou(t.y,e.y,n.y,s==null?void 0:s.y)}function Lu(t,e,n,s,i){return t-=e,t=Gi(t,1/n,s),i!==void 0&&(t=Gi(t,1/i,s)),t}function Bx(t,e=0,n=1,s=.5,i,r=t,o=t){if(Ge.test(e)&&(e=parseFloat(e),e=K(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=K(r.min,r.max,s);t===r&&(a-=e),t.min=Lu(t.min,e,n,a,i),t.max=Lu(t.max,e,n,a,i)}function Fu(t,e,[n,s,i],r,o){Bx(t,e[n],e[s],e[i],e.scale,r,o)}const Wx=["x","scaleX","originX"],Hx=["y","scaleY","originY"];function Vu(t,e,n,s){Fu(t.x,e,Wx,n?n.x:void 0,s?s.x:void 0),Fu(t.y,e,Hx,n?n.y:void 0,s?s.y:void 0)}function ju(t){return t.translate===0&&t.scale===1}function dm(t){return ju(t.x)&&ju(t.y)}function Uu(t,e){return t.min===e.min&&t.max===e.max}function zx(t,e){return Uu(t.x,e.x)&&Uu(t.y,e.y)}function Bu(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function fm(t,e){return Bu(t.x,e.x)&&Bu(t.y,e.y)}function Wu(t){return ye(t.x)/ye(t.y)}function Hu(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function He(t){return[t("x"),t("y")]}function $x(t,e,n){let s="";const i=t.x.translate/e.x,r=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||r||o)&&(s=`translate3d(${i}px, ${r}px, ${o}px) `),(e.x!==1||e.y!==1)&&(s+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:d,skewX:f,skewY:m}=n;c&&(s=`perspective(${c}px) ${s}`),u&&(s+=`rotate(${u}deg) `),h&&(s+=`rotateX(${h}deg) `),d&&(s+=`rotateY(${d}deg) `),f&&(s+=`skewX(${f}deg) `),m&&(s+=`skewY(${m}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(s+=`scale(${a}, ${l})`),s||"none"}const pm=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Gx=pm.length,zu=t=>typeof t=="string"?parseFloat(t):t,$u=t=>typeof t=="number"||k.test(t);function Kx(t,e,n,s,i,r){i?(t.opacity=K(0,n.opacity??1,qx(s)),t.opacityExit=K(e.opacity??1,0,Yx(s))):r&&(t.opacity=K(e.opacity??1,n.opacity??1,s));for(let o=0;o<Gx;o++){const a=pm[o];let l=Gu(e,a),c=Gu(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||$u(l)===$u(c)?(t[a]=Math.max(K(zu(l),zu(c),s),0),(Ge.test(c)||Ge.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=K(e.rotate||0,n.rotate||0,s))}function Gu(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const qx=mm(0,.5,rp),Yx=mm(.5,.95,Ae);function mm(t,e,n){return s=>s<t?0:s>e?1:n(vs(t,e,s))}function Xx(t,e,n){const s=ue(t)?t:xn(t);return s.start(cl("",s,e,n)),s.animation}function Es(t,e,n,s={passive:!0}){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n)}const Qx=(t,e)=>t.depth-e.depth;class Jx{constructor(){this.children=[],this.isDirty=!1}add(e){Xa(this.children,e),this.isDirty=!0}remove(e){Ui(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Qx),this.isDirty=!1,this.children.forEach(e)}}function Zx(t,e){const n=ge.now(),s=({timestamp:i})=>{const r=i-n;r>=e&&(kt(s),t(r-e))};return z.setup(s,!0),()=>kt(s)}function mi(t){return ue(t)?t.get():t}class eS{constructor(){this.members=[]}add(e){Xa(this.members,e);for(let n=this.members.length-1;n>=0;n--){const s=this.members[n];if(s===e||s===this.lead||s===this.prevLead)continue;const i=s.instance;(!i||i.isConnected===!1)&&!s.snapshot&&(Ui(this.members,s),s.unmount())}e.scheduleRender()}remove(e){if(Ui(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let s=this.members.indexOf(e)-1;s>=0;s--){const i=this.members[s];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(e,n){var i;const s=this.lead;if(e!==s&&(this.prevLead=s,this.lead=e,e.show(),s)){s.updateSnapshot(),e.scheduleRender();const{layoutDependency:r}=s.options,{layoutDependency:o}=e.options;(r===void 0||r!==o)&&(e.resumeFrom=s,n&&(s.preserveOpacity=!0),s.snapshot&&(e.snapshot=s.snapshot,e.snapshot.latestValues=s.animationValues||s.latestValues),(i=e.root)!=null&&i.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,s,i,r,o;(s=(n=e.options).onExitComplete)==null||s.call(n),(o=(i=e.resumingFrom)==null?void 0:(r=i.options).onExitComplete)==null||o.call(r)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const gi={hasAnimatedSinceResize:!0,hasEverUpdated:!1},zr=["","X","Y","Z"],tS=1e3;let nS=0;function $r(t,e,n,s){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),s&&(s[t]=0))}function gm(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Lp(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:r}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",z,!(i||r))}const{parent:s}=t;s&&!s.hasCheckedOptimisedAppear&&gm(s)}function ym({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:s,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=nS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(rS),this.nodes.forEach(hS),this.nodes.forEach(dS),this.nodes.forEach(oS)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Jx)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Ja),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=ml(o)&&!ix(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,h=0;const d=()=>this.root.updateBlockedByResize=!1;z.read(()=>{h=window.innerWidth}),t(o,()=>{const f=window.innerWidth;f!==h&&(h=f,this.root.updateBlockedByResize=!0,u&&u(),u=Zx(d,250),gi.hasAnimatedSinceResize&&(gi.hasAnimatedSinceResize=!1,this.nodes.forEach(Yu)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:d,layout:f})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||c.getDefaultTransition()||yS,{onLayoutAnimationStart:g,onLayoutAnimationComplete:y}=c.getProps(),_=!this.targetLayout||!fm(this.targetLayout,f),T=!h&&d;if(this.options.layoutRoot||this.resumeFrom||T||h&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const E={...ll(m,"layout"),onPlay:g,onComplete:y};(c.shouldReduceMotion||this.options.layoutRoot)&&(E.delay=0,E.type=!1),this.startAnimation(E),this.setAnimationOrigin(u,T)}else h||Yu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=f})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),kt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(fS),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&gm(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,(typeof h.latestValues.x=="string"||typeof h.latestValues.y=="string")&&(h.isLayoutDirty=!0),h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(lS),this.nodes.forEach(Ku);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(qu);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(cS),this.nodes.forEach(uS),this.nodes.forEach(sS),this.nodes.forEach(iS)):this.nodes.forEach(qu),this.clearAllSnapshots();const a=ge.now();le.delta=Ke(0,1e3/60,a-le.timestamp),le.timestamp=a,le.isProcessing=!0,Lr.update.process(le),Lr.preRender.process(le),Lr.render.process(le),le.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,fl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(aS),this.sharedNodes.forEach(pS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,z.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){z.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ye(this.snapshot.measuredBox.x)&&!ye(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ne()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=s(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!dm(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||Vt(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),_S(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return ne();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(vS))){const{scroll:u}=this.root;u&&(ze(a.x,u.offset.x),ze(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=ne();if(Ne(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:h,options:d}=u;u!==this.root&&h&&d.layoutScroll&&(h.wasRoot&&Ne(a,o),ze(a.x,h.offset.x),ze(a.y,h.offset.y))}return a}applyTransform(o,a=!1,l){var u,h;const c=l||ne();Ne(c,o);for(let d=0;d<this.path.length;d++){const f=this.path[d];!a&&f.options.layoutScroll&&f.scroll&&f!==f.root&&(ze(c.x,-f.scroll.offset.x),ze(c.y,-f.scroll.offset.y)),Vt(f.latestValues)&&pi(c,f.latestValues,(u=f.layout)==null?void 0:u.layoutBox)}return Vt(this.latestValues)&&pi(c,this.latestValues,(h=this.layout)==null?void 0:h.layoutBox),c}removeTransform(o){var l;const a=ne();Ne(a,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!Vt(u.latestValues))continue;let h;u.instance&&(zo(u.latestValues)&&u.updateSnapshot(),h=ne(),Ne(h,u.measurePageBox())),Vu(a,u.latestValues,(l=u.snapshot)==null?void 0:l.layoutBox,h)}return Vt(this.latestValues)&&Vu(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==le.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var f;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(f=this.parent)!=null&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:h}=this.options;if(!this.layout||!(u||h))return;this.resolvedRelativeTargetAt=le.timestamp;const d=this.getClosestProjectingParent();d&&this.linkedParentVersion!==d.layoutVersion&&!d.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&d&&d.layout?this.createRelativeTarget(d,this.layout.layoutBox,d.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ne(),this.targetWithTransforms=ne()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Ux(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ne(this.target,this.layout.layoutBox),em(this.target,this.targetDelta)):Ne(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?this.createRelativeTarget(d,this.target,d.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||zo(this.parent.latestValues)||Zp(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ne(),this.relativeTargetOrigin=ne(),Ki(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),Ne(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===le.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Ne(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,d=this.treeScale.y;mx(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ne());const{target:f}=o;if(!f){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Nu(this.prevProjectionDelta.x,this.projectionDelta.x),Nu(this.prevProjectionDelta.y,this.projectionDelta.y)),is(this.projectionDelta,this.layoutCorrected,f,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==d||!Hu(this.projectionDelta.x,this.prevProjectionDelta.x)||!Hu(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",f))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=un(),this.projectionDelta=un(),this.projectionDeltaWithTransform=un()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=un();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=ne(),f=l?l.source:void 0,m=this.layout?this.layout.source:void 0,g=f!==m,y=this.getStack(),_=!y||y.members.length<=1,T=!!(g&&!_&&this.options.crossfade===!0&&!this.path.some(gS));this.animationProgress=0;let E;this.mixTargetDelta=C=>{const A=C/1e3;Xu(h.x,o.x,A),Xu(h.y,o.y,A),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ki(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),mS(this.relativeTarget,this.relativeTargetOrigin,d,A),E&&zx(this.relativeTarget,E)&&(this.isProjectionDirty=!1),E||(E=ne()),Ne(E,this.relativeTarget)),g&&(this.animationValues=u,Kx(u,c,this.latestValues,A,T,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(kt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=z.update(()=>{gi.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=xn(0)),this.motionValue.jump(0,!1),this.currentAnimation=Xx(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(tS),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&_m(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ne();const h=ye(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const d=ye(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Ne(a,l),pi(a,u),is(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new eS),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&$r("z",o,c,this.animationValues);for(let u=0;u<zr.length;u++)$r(`rotate${zr[u]}`,o,c,this.animationValues),$r(`skew${zr[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=mi(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=mi(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Vt(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let h=$x(this.projectionDeltaWithTransform,this.treeScale,u);l&&(h=l(u,h)),o.transform=h;const{x:d,y:f}=this.projectionDelta;o.transformOrigin=`${d.origin*100}% ${f.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const m in Go){if(u[m]===void 0)continue;const{correct:g,applyTo:y,isCSSVariable:_}=Go[m],T=h==="none"?u[m]:g(u[m],c);if(y){const E=y.length;for(let C=0;C<E;C++)o[y[C]]=T}else _?this.options.visualElement.renderState.vars[m]=T:o[m]=T}this.options.layoutId&&(o.pointerEvents=c===this?mi(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Ku),this.root.sharedNodes.clear()}}}function sS(t){t.updateLayout()}function iS(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:i}=t.layout,{animationType:r}=t.options,o=e.source!==t.layout.source;if(r==="size")He(h=>{const d=o?e.measuredBox[h]:e.layoutBox[h],f=ye(d);d.min=s[h].min,d.max=d.min+f});else if(r==="x"||r==="y"){const h=r==="x"?"y":"x";Ko(o?e.measuredBox[h]:e.layoutBox[h],s[h])}else _m(r,e.layoutBox,s)&&He(h=>{const d=o?e.measuredBox[h]:e.layoutBox[h],f=ye(s[h]);d.max=d.min+f,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+f)});const a=un();is(a,s,e.layoutBox);const l=un();o?is(l,t.applyTransform(i,!0),e.measuredBox):is(l,s,e.layoutBox);const c=!dm(a);let u=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:f}=h;if(d&&f){const m=t.options.layoutAnchor||void 0,g=ne();Ki(g,e.layoutBox,d.layoutBox,m);const y=ne();Ki(y,s,f.layoutBox,m),fm(g,y)||(u=!0),h.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=g,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:s,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:s}=t.options;s&&s()}t.options.transition=void 0}function rS(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function oS(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function aS(t){t.clearSnapshot()}function Ku(t){t.clearMeasurements()}function lS(t){t.isLayoutDirty=!0,t.updateLayout()}function qu(t){t.isLayoutDirty=!1}function cS(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function uS(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Yu(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function hS(t){t.resolveTargetDelta()}function dS(t){t.calcProjection()}function fS(t){t.resetSkewAndRotation()}function pS(t){t.removeLeadSnapshot()}function Xu(t,e,n){t.translate=K(e.translate,0,n),t.scale=K(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Qu(t,e,n,s){t.min=K(e.min,n.min,s),t.max=K(e.max,n.max,s)}function mS(t,e,n,s){Qu(t.x,e.x,n.x,s),Qu(t.y,e.y,n.y,s)}function gS(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const yS={duration:.45,ease:[.4,0,.1,1]},Ju=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Zu=Ju("applewebkit/")&&!Ju("chrome/")?Math.round:Ae;function eh(t){t.min=Zu(t.min),t.max=Zu(t.max)}function _S(t){eh(t.x),eh(t.y)}function _m(t,e,n){return t==="position"||t==="preserve-aspect"&&!jx(Wu(e),Wu(n),.2)}function vS(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const wS=ym({attachResizeListener:(t,e)=>Es(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Gr={current:void 0},vm=ym({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Gr.current){const t=new wS({});t.mount(window),t.setOptions({layoutScroll:!0}),Gr.current=t}return Gr.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),wl=v.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function th(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function bS(...t){return e=>{let n=!1;const s=t.map(i=>{const r=th(i,e);return!n&&typeof r=="function"&&(n=!0),r});if(n)return()=>{for(let i=0;i<s.length;i++){const r=s[i];typeof r=="function"?r():th(t[i],null)}}}}function ES(...t){return v.useCallback(bS(...t),t)}class TS extends v.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(ui(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=n.offsetParent,i=ui(s)&&s.offsetWidth||0,r=ui(s)&&s.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=i-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function CS({children:t,isPresent:e,anchorX:n,anchorY:s,root:i,pop:r}){var d;const o=v.useId(),a=v.useRef(null),l=v.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=v.useContext(wl),u=((d=t.props)==null?void 0:d.ref)??(t==null?void 0:t.ref),h=ES(a,u);return v.useInsertionEffect(()=>{const{width:f,height:m,top:g,left:y,right:_,bottom:T}=l.current;if(e||r===!1||!a.current||!f||!m)return;const E=n==="left"?`left: ${y}`:`right: ${_}`,C=s==="bottom"?`bottom: ${T}`:`top: ${g}`;a.current.dataset.motionPopId=o;const A=document.createElement("style");c&&(A.nonce=c);const V=i??document.head;return V.appendChild(A),A.sheet&&A.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${m}px !important;
            ${E}px !important;
            ${C}px !important;
          }
        `),()=>{var U;(U=a.current)==null||U.removeAttribute("data-motion-pop-id"),V.contains(A)&&V.removeChild(A)}},[e]),p.jsx(TS,{isPresent:e,childRef:a,sizeRef:l,pop:r,children:r===!1?t:v.cloneElement(t,{ref:h})})}const IS=({children:t,initial:e,isPresent:n,onExitComplete:s,custom:i,presenceAffectsLayout:r,mode:o,anchorX:a,anchorY:l,root:c})=>{const u=Ya(xS),h=v.useId();let d=!0,f=v.useMemo(()=>(d=!1,{id:h,initial:e,isPresent:n,custom:i,onExitComplete:m=>{u.set(m,!0);for(const g of u.values())if(!g)return;s&&s()},register:m=>(u.set(m,!1),()=>u.delete(m))}),[n,u,s]);return r&&d&&(f={...f}),v.useMemo(()=>{u.forEach((m,g)=>u.set(g,!1))},[n]),v.useEffect(()=>{!n&&!u.size&&s&&s()},[n]),t=p.jsx(CS,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,children:t}),p.jsx(pr.Provider,{value:f,children:t})};function xS(){return new Map}function wm(t=!0){const e=v.useContext(pr);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:i}=e,r=v.useId();v.useEffect(()=>{if(t)return i(r)},[t]);const o=v.useCallback(()=>t&&s&&s(r),[r,s,t]);return!n&&s?[!1,o]:[!0]}const Qs=t=>t.key||"";function nh(t){const e=[];return v.Children.forEach(t,n=>{v.isValidElement(n)&&e.push(n)}),e}const SS=({children:t,custom:e,initial:n=!0,onExitComplete:s,presenceAffectsLayout:i=!0,mode:r="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[u,h]=wm(o),d=v.useMemo(()=>nh(t),[t]),f=o&&!u?[]:d.map(Qs),m=v.useRef(!0),g=v.useRef(d),y=Ya(()=>new Map),_=v.useRef(new Set),[T,E]=v.useState(d),[C,A]=v.useState(d);Kf(()=>{m.current=!1,g.current=d;for(let w=0;w<C.length;w++){const M=Qs(C[w]);f.includes(M)?(y.delete(M),_.current.delete(M)):y.get(M)!==!0&&y.set(M,!1)}},[C,f.length,f.join("-")]);const V=[];if(d!==T){let w=[...d];for(let M=0;M<C.length;M++){const P=C[M],H=Qs(P);f.includes(H)||(w.splice(M,0,P),V.push(P))}return r==="wait"&&V.length&&(w=V),A(nh(w)),E(d),null}const{forceRender:U}=v.useContext(qa);return p.jsx(p.Fragment,{children:C.map(w=>{const M=Qs(w),P=o&&!u?!1:d===C||f.includes(M),H=()=>{if(_.current.has(M))return;if(y.has(M))_.current.add(M),y.set(M,!0);else return;let Y=!0;y.forEach(Ie=>{Ie||(Y=!1)}),Y&&(U==null||U(),A(g.current),o&&(h==null||h()),s&&s())};return p.jsx(IS,{isPresent:P,initial:!m.current||n?void 0:!1,custom:e,presenceAffectsLayout:i,mode:r,root:c,onExitComplete:P?void 0:H,anchorX:a,anchorY:l,children:w},M)})})},bm=v.createContext({strict:!1}),sh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let ih=!1;function kS(){if(ih)return;const t={};for(const e in sh)t[e]={isEnabled:n=>sh[e].some(s=>!!n[s])};Xp(t),ih=!0}function Em(){return kS(),hx()}function AS(t){const e=Em();for(const n in t)e[n]={...e[n],...t[n]};Xp(e)}const PS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function qi(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||PS.has(t)}let Tm=t=>!qi(t);function RS(t){typeof t=="function"&&(Tm=e=>e.startsWith("on")?!qi(e):t(e))}try{RS(require("@emotion/is-prop-valid").default)}catch{}function NS(t,e,n){const s={};for(const i in t)i==="values"&&typeof t.values=="object"||ue(t[i])||(Tm(i)||n===!0&&qi(i)||!e&&!qi(i)||t.draggable&&i.startsWith("onDrag"))&&(s[i]=t[i]);return s}const _r=v.createContext({});function MS(t,e){if(yr(t)){const{initial:n,animate:s}=t;return{initial:n===!1||bs(n)?n:void 0,animate:bs(s)?s:void 0}}return t.inherit!==!1?e:{}}function DS(t){const{initial:e,animate:n}=MS(t,v.useContext(_r));return v.useMemo(()=>({initial:e,animate:n}),[rh(e),rh(n)])}function rh(t){return Array.isArray(t)?t.join(" "):t}const bl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Cm(t,e,n){for(const s in e)!ue(e[s])&&!sm(s,n)&&(t[s]=e[s])}function OS({transformTemplate:t},e){return v.useMemo(()=>{const n=bl();return _l(n,e,t),Object.assign({},n.vars,n.style)},[e])}function LS(t,e){const n=t.style||{},s={};return Cm(s,n,t),Object.assign(s,OS(t,e)),s}function FS(t,e){const n={},s=LS(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=s,n}const Im=()=>({...bl(),attrs:{}});function VS(t,e,n,s){const i=v.useMemo(()=>{const r=Im();return im(r,e,om(s),t.transformTemplate,t.style),{...r.attrs,style:{...r.style}}},[e]);if(t.style){const r={};Cm(r,t.style,t),i.style={...r,...i.style}}return i}const jS=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function El(t){return typeof t!="string"||t.includes("-")?!1:!!(jS.indexOf(t)>-1||/[A-Z]/u.test(t))}function US(t,e,n,{latestValues:s},i,r=!1,o){const l=(o??El(t)?VS:FS)(e,s,i,t),c=NS(e,typeof t=="string",r),u=t!==v.Fragment?{...c,...l,ref:n}:{},{children:h}=e,d=v.useMemo(()=>ue(h)?h.get():h,[h]);return v.createElement(t,{...u,children:d})}function BS({scrapeMotionValuesFromProps:t,createRenderState:e},n,s,i){return{latestValues:WS(n,s,i,t),renderState:e()}}function WS(t,e,n,s){const i={},r=s(t,{});for(const d in r)i[d]=mi(r[d]);let{initial:o,animate:a}=t;const l=yr(t),c=qp(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const h=u?a:o;if(h&&typeof h!="boolean"&&!gr(h)){const d=Array.isArray(h)?h:[h];for(let f=0;f<d.length;f++){const m=ul(t,d[f]);if(m){const{transitionEnd:g,transition:y,..._}=m;for(const T in _){let E=_[T];if(Array.isArray(E)){const C=u?E.length-1:0;E=E[C]}E!==null&&(i[T]=E)}for(const T in g)i[T]=g[T]}}}return i}const xm=t=>(e,n)=>{const s=v.useContext(_r),i=v.useContext(pr),r=()=>BS(t,e,s,i);return n?r():Ya(r)},HS=xm({scrapeMotionValuesFromProps:vl,createRenderState:bl}),zS=xm({scrapeMotionValuesFromProps:am,createRenderState:Im}),$S=Symbol.for("motionComponentSymbol");function GS(t,e,n){const s=v.useRef(n);v.useInsertionEffect(()=>{s.current=n});const i=v.useRef(null);return v.useCallback(r=>{var a;r&&((a=t.onMount)==null||a.call(t,r));const o=s.current;if(typeof o=="function")if(r){const l=o(r);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):o(r);else o&&(o.current=r);e&&(r?e.mount(r):e.unmount())},[e])}const Sm=v.createContext({});function on(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function KS(t,e,n,s,i,r){var E,C;const{visualElement:o}=v.useContext(_r),a=v.useContext(bm),l=v.useContext(pr),c=v.useContext(wl),u=c.reducedMotion,h=c.skipAnimations,d=v.useRef(null),f=v.useRef(!1);s=s||a.renderer,!d.current&&s&&(d.current=s(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:h,isSVG:r}),f.current&&d.current&&(d.current.manuallyAnimateOnMount=!0));const m=d.current,g=v.useContext(Sm);m&&!m.projection&&i&&(m.type==="html"||m.type==="svg")&&qS(d.current,n,i,g);const y=v.useRef(!1);v.useInsertionEffect(()=>{m&&y.current&&m.update(n,l)});const _=n[Op],T=v.useRef(!!_&&typeof window<"u"&&!((E=window.MotionHandoffIsComplete)!=null&&E.call(window,_))&&((C=window.MotionHasOptimisedAnimation)==null?void 0:C.call(window,_)));return Kf(()=>{f.current=!0,m&&(y.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),T.current&&m.animationState&&m.animationState.animateChanges())}),v.useEffect(()=>{m&&(!T.current&&m.animationState&&m.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)==null||A.call(window,_)}),T.current=!1),m.enteringChildren=void 0)}),m}function qS(t,e,n,s){const{layoutId:i,layout:r,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:h}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:km(t.parent)),t.projection.setOptions({layoutId:i,layout:r,alwaysMeasureLayout:!!o||a&&on(a),visualElement:t,animationType:typeof r=="string"?r:"both",initialPromotionConfig:s,crossfade:h,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function km(t){if(t)return t.options.allowProjection!==!1?t.projection:km(t.parent)}function Kr(t,{forwardMotionProps:e=!1,type:n}={},s,i){s&&AS(s);const r=n?n==="svg":El(t),o=r?zS:HS;function a(c,u){let h;const d={...v.useContext(wl),...c,layoutId:YS(c)},{isStatic:f}=d,m=DS(c),g=o(c,f);if(!f&&typeof window<"u"){XS();const y=QS(d);h=y.MeasureLayout,m.visualElement=KS(t,g,d,i,y.ProjectionNode,r)}return p.jsxs(_r.Provider,{value:m,children:[h&&m.visualElement?p.jsx(h,{visualElement:m.visualElement,...d}):null,US(t,c,GS(g,m.visualElement,u),g,f,e,r)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=v.forwardRef(a);return l[$S]=t,l}function YS({layoutId:t}){const e=v.useContext(qa).id;return e&&t!==void 0?e+"-"+t:t}function XS(t,e){v.useContext(bm).strict}function QS(t){const e=Em(),{drag:n,layout:s}=e;if(!n&&!s)return{};const i={...n,...s};return{MeasureLayout:n!=null&&n.isEnabled(t)||s!=null&&s.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function JS(t,e){if(typeof Proxy>"u")return Kr;const n=new Map,s=(r,o)=>Kr(r,o,t,e),i=(r,o)=>s(r,o);return new Proxy(i,{get:(r,o)=>o==="create"?s:(n.has(o)||n.set(o,Kr(o,void 0,t,e)),n.get(o))})}const ZS=(t,e)=>e.isSVG??El(t)?new kx(e):new Ex(e,{allowProjection:t!==v.Fragment});class ek extends Nt{constructor(e){super(e),e.animationState||(e.animationState=Mx(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();gr(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let tk=0;class nk extends Nt{constructor(){super(...arguments),this.id=tk++,this.isExitComplete=!1}update(){var r;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;if(e&&s===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"){const l=zt(this.node,o,a);if(l){const{transition:c,transitionEnd:u,...h}=l;for(const d in h)(r=this.node.getValue(d))==null||r.jump(h[d])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const sk={animation:{Feature:ek},exit:{Feature:nk}};function Vs(t){return{point:{x:t.pageX,y:t.pageY}}}const ik=t=>e=>pl(e)&&t(e,Vs(e));function rs(t,e,n,s){return Es(t,e,ik(n),s)}const Am=({current:t})=>t?t.ownerDocument.defaultView:null,oh=(t,e)=>Math.abs(t-e);function rk(t,e){const n=oh(t.x,e.x),s=oh(t.y,e.y);return Math.sqrt(n**2+s**2)}const ah=new Set(["auto","scroll"]);class Pm{constructor(e,n,{transformPagePoint:s,contextWindow:i=window,dragSnapToOrigin:r=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=f=>{this.handleScroll(f.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Js(this.lastRawMoveEventInfo,this.transformPagePoint));const f=qr(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,g=rk(f.offset,{x:0,y:0})>=this.distanceThreshold;if(!m&&!g)return;const{point:y}=f,{timestamp:_}=le;this.history.push({...y,timestamp:_});const{onStart:T,onMove:E}=this.handlers;m||(T&&T(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,f)},this.handlePointerMove=(f,m)=>{this.lastMoveEvent=f,this.lastRawMoveEventInfo=m,this.lastMoveEventInfo=Js(m,this.transformPagePoint),z.update(this.updatePoint,!0)},this.handlePointerUp=(f,m)=>{this.end();const{onEnd:g,onSessionEnd:y,resumeAnimation:_}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=qr(f.type==="pointercancel"?this.lastMoveEventInfo:Js(m,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,T),y&&y(f,T)},!pl(e))return;this.dragSnapToOrigin=r,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=o,this.contextWindow=i||window;const l=Vs(e),c=Js(l,this.transformPagePoint),{point:u}=c,{timestamp:h}=le;this.history=[{...u,timestamp:h}];const{onSessionStart:d}=n;d&&d(e,qr(c,this.history)),this.removeListeners=Os(rs(this.contextWindow,"pointermove",this.handlePointerMove),rs(this.contextWindow,"pointerup",this.handlePointerUp),rs(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const s=getComputedStyle(n);(ah.has(s.overflowX)||ah.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const s=e===window,i=s?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},r={x:i.x-n.x,y:i.y-n.y};r.x===0&&r.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=r.x,this.lastMoveEventInfo.point.y+=r.y):this.history.length>0&&(this.history[0].x-=r.x,this.history[0].y-=r.y),this.scrollPositions.set(e,i),z.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),kt(this.updatePoint)}}function Js(t,e){return e?{point:e(t.point)}:t}function lh(t,e){return{x:t.x-e.x,y:t.y-e.y}}function qr({point:t},e){return{point:t,delta:lh(t,Rm(e)),offset:lh(t,ok(e)),velocity:ak(e,.1)}}function ok(t){return t[0]}function Rm(t){return t[t.length-1]}function ak(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,s=null;const i=Rm(t);for(;n>=0&&(s=t[n],!(i.timestamp-s.timestamp>Ce(e)));)n--;if(!s)return{x:0,y:0};s===t[0]&&t.length>2&&i.timestamp-s.timestamp>Ce(e)*2&&(s=t[1]);const r=ke(i.timestamp-s.timestamp);if(r===0)return{x:0,y:0};const o={x:(i.x-s.x)/r,y:(i.y-s.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function lk(t,{min:e,max:n},s){return e!==void 0&&t<e?t=s?K(e,t,s.min):Math.max(t,e):n!==void 0&&t>n&&(t=s?K(n,t,s.max):Math.min(t,n)),t}function ch(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function ck(t,{top:e,left:n,bottom:s,right:i}){return{x:ch(t.x,n,i),y:ch(t.y,e,s)}}function uh(t,e){let n=e.min-t.min,s=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,s]=[s,n]),{min:n,max:s}}function uk(t,e){return{x:uh(t.x,e.x),y:uh(t.y,e.y)}}function hk(t,e){let n=.5;const s=ye(t),i=ye(e);return i>s?n=vs(e.min,e.max-s,t.min):s>i&&(n=vs(t.min,t.max-i,e.min)),Ke(0,1,n)}function dk(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const qo=.35;function fk(t=qo){return t===!1?t=0:t===!0&&(t=qo),{x:hh(t,"left","right"),y:hh(t,"top","bottom")}}function hh(t,e,n){return{min:dh(t,e),max:dh(t,n)}}function dh(t,e){return typeof t=="number"?t:t[e]||0}const pk=new WeakMap;class mk{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ne(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=h=>{n&&this.snapToCursor(Vs(h).point),this.stopAnimation()},o=(h,d)=>{const{drag:f,dragPropagation:m,onDragStart:g}=this.getProps();if(f&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=BI(f),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=d,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),He(_=>{let T=this.getAxisMotionValue(_).get()||0;if(Ge.test(T)){const{projection:E}=this.visualElement;if(E&&E.layout){const C=E.layout.layoutBox[_];C&&(T=ye(C)*(parseFloat(T)/100))}}this.originPoint[_]=T}),g&&z.update(()=>g(h,d),!1,!0),jo(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(h,d)=>{this.latestPointerEvent=h,this.latestPanInfo=d;const{dragPropagation:f,dragDirectionLock:m,onDirectionLock:g,onDrag:y}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:_}=d;if(m&&this.currentDirection===null){this.currentDirection=yk(_),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",d.point,_),this.updateAxis("y",d.point,_),this.visualElement.render(),y&&z.update(()=>y(h,d),!1,!0)},l=(h,d)=>{this.latestPointerEvent=h,this.latestPanInfo=d,this.stop(h,d),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new Pm(e,{onSessionStart:r,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:s,contextWindow:Am(this.visualElement),element:this.visualElement.current})}stop(e,n){const s=e||this.latestPointerEvent,i=n||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!i||!s)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&z.postRender(()=>a(s,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,s){const{drag:i}=this.getProps();if(!s||!Zs(e,i,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+s[e];this.constraints&&this.constraints[e]&&(o=lk(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){var r;const{dragConstraints:e,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)==null?void 0:r.layout,i=this.constraints;e&&on(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&s?this.constraints=ck(s.layoutBox,e):this.constraints=!1,this.elastic=fk(n),i!==this.constraints&&!on(e)&&s&&this.constraints&&!this.hasMutatedConstraints&&He(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=dk(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!on(e))return!1;const s=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const r=gx(s,i.root,this.visualElement.getTransformPagePoint());let o=uk(i.layout.layoutBox,r);if(n){const a=n(fx(o));this.hasMutatedConstraints=!!a,a&&(o=Jp(a))}return o}startAnimation(e){const{drag:n,dragMomentum:s,dragElastic:i,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=He(u=>{if(!Zs(u,n,this.currentDirection))return;let h=l&&l[u]||{};(o===!0||o===u)&&(h={min:0,max:0});const d=i?200:1e6,f=i?40:1e7,m={type:"inertia",velocity:s?e[u]:0,bounceStiffness:d,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...r,...h};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const s=this.getAxisMotionValue(e);return jo(this.visualElement,e),s.start(cl(e,s,0,n,this.visualElement,!1))}stopAnimation(){He(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,s=this.visualElement.getProps(),i=s[n];return i||this.visualElement.getValue(e,(s.initial?s.initial[e]:void 0)||0)}snapToCursor(e){He(n=>{const{drag:s}=this.getProps();if(!Zs(n,s,this.currentDirection))return;const{projection:i}=this.visualElement,r=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n],l=r.get()||0;r.set(e[n]-K(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!on(n)||!s||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};He(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=hk({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),He(o=>{if(!Zs(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(K(l,c,i[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;pk.set(this.visualElement,this);const e=this.visualElement.current,n=rs(e,"pointerdown",c=>{const{drag:u,dragListener:h=!0}=this.getProps(),d=c.target,f=d!==e&&KI(d);u&&h&&!f&&this.start(c)});let s;const i=()=>{const{dragConstraints:c}=this.getProps();on(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),s||(s=gk(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:r}=this.visualElement,o=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),z.read(i);const a=Es(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",(({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(He(h=>{const d=this.getAxisMotionValue(h);d&&(this.originPoint[h]+=c[h].translate,d.set(d.get()+c[h].translate))}),this.visualElement.render())}));return()=>{a(),n(),o(),l&&l(),s&&s()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:i=!1,dragConstraints:r=!1,dragElastic:o=qo,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:s,dragPropagation:i,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function fh(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function gk(t,e,n){const s=wu(t,fh(n)),i=wu(e,fh(n));return()=>{s(),i()}}function Zs(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function yk(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class _k extends Nt{constructor(e){super(e),this.removeGroupControls=Ae,this.removeListeners=Ae,this.controls=new mk(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ae}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Yr=t=>(e,n)=>{t&&z.update(()=>t(e,n),!1,!0)};class vk extends Nt{constructor(){super(...arguments),this.removePointerDownListener=Ae}onPointerDown(e){this.session=new Pm(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Am(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:s,onPanEnd:i}=this.node.getProps();return{onSessionStart:Yr(e),onStart:Yr(n),onMove:Yr(s),onEnd:(r,o)=>{delete this.session,i&&z.postRender(()=>i(r,o))}}}mount(){this.removePointerDownListener=rs(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Xr=!1;class wk extends v.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:s,layoutId:i}=this.props,{projection:r}=e;r&&(n.group&&n.group.add(r),s&&s.register&&i&&s.register(r),Xr&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),gi.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:s,drag:i,isPresent:r}=this.props,{projection:o}=s;return o&&(o.isPresent=r,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Xr=!0,i||e.layoutDependency!==n||n===void 0||e.isPresent!==r?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||z.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:s}=e;s&&(s.options.layoutAnchor=n,s.root.didUpdate(),fl.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:i}=e;Xr=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),s&&s.deregister&&s.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Nm(t){const[e,n]=wm(),s=v.useContext(qa);return p.jsx(wk,{...t,layoutGroup:s,switchLayoutGroup:v.useContext(Sm),isPresent:e,safeToRemove:n})}const bk={pan:{Feature:vk},drag:{Feature:_k,ProjectionNode:vm,MeasureLayout:Nm}};function ph(t,e,n){const{props:s}=t;t.animationState&&s.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,r=s[i];r&&z.postRender(()=>r(e,Vs(e)))}class Ek extends Nt{mount(){const{current:e}=this.node;e&&(this.unmount=HI(e,(n,s)=>(ph(this.node,s,"Start"),i=>ph(this.node,i,"End"))))}unmount(){}}class Tk extends Nt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Os(Es(this.node.current,"focus",()=>this.onFocus()),Es(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function mh(t,e,n){const{props:s}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&s.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),r=s[i];r&&z.postRender(()=>r(e,Vs(e)))}class Ck extends Nt{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=YI(e,(i,r)=>(mh(this.node,r,"Start"),(o,{success:a})=>mh(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const Yo=new WeakMap,Qr=new WeakMap,Ik=t=>{const e=Yo.get(t.target);e&&e(t)},xk=t=>{t.forEach(Ik)};function Sk({root:t,...e}){const n=t||document;Qr.has(n)||Qr.set(n,{});const s=Qr.get(n),i=JSON.stringify(e);return s[i]||(s[i]=new IntersectionObserver(xk,{root:t,...e})),s[i]}function kk(t,e,n){const s=Sk(e);return Yo.set(t,n),s.observe(t),()=>{Yo.delete(t),s.unobserve(t)}}const Ak={some:0,all:1};class Pk extends Nt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:s,amount:i="some",once:r}=e,o={root:n?n.current:void 0,rootMargin:s,threshold:typeof i=="number"?i:Ak[i]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,r&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:h,onViewportLeave:d}=this.node.getProps(),f=u?h:d;f&&f(c)};this.stopObserver=kk(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Rk(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Rk({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const Nk={inView:{Feature:Pk},tap:{Feature:Ck},focus:{Feature:Tk},hover:{Feature:Ek}},Mk={layout:{ProjectionNode:vm,MeasureLayout:Nm}},Dk={...sk,...Nk,...bk,...Mk},hn=JS(Dk,ZS);function Jr({className:t,type:e,...n}){return p.jsx("input",{type:e,"data-slot":"input",className:Rt("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t),...n})}function Ot({className:t,...e}){return p.jsx(Fm,{"data-slot":"label",className:Rt("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",t),...e})}function Ok({isOpen:t,onClose:e,userData:n,onUpdateUserData:s,onRemoveUser:i,showRemoveButton:r=!1}){const[o,a]=v.useState(!1),[l,c]=v.useState(n),u=()=>{s(l),a(!1)},h=()=>{c(n),a(!1)},d=()=>{confirm(`Are you sure you want to remove ${n.name} from the system?`)&&(i==null||i(),e())},f=m=>{var y;const g=(y=m.target.files)==null?void 0:y[0];if(g){const _=new FileReader;_.onloadend=()=>{c({...l,avatar:_.result})},_.readAsDataURL(g)}};return p.jsx(SS,{children:t&&p.jsxs(p.Fragment,{children:[p.jsx(hn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e,className:"fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"}),p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:p.jsxs(hn.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{duration:.2},className:"relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden",onClick:m=>m.stopPropagation(),children:[p.jsx("div",{className:"bg-gradient-to-r from-green-600 to-green-700 px-8 py-6",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"flex h-20 w-20 items-center justify-center rounded-full bg-white/20 overflow-hidden",children:l.avatar?p.jsx("img",{src:l.avatar,alt:l.name,className:"h-full w-full object-cover"}):p.jsx(Eo,{className:"h-10 w-10 text-white"})}),o&&p.jsxs("label",{className:"absolute bottom-0 right-0 h-6 w-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-100 transition-colors",children:[p.jsx(G0,{className:"h-3 w-3 text-gray-700"}),p.jsx("input",{type:"file",accept:"image/*",onChange:f,className:"hidden"})]})]}),p.jsxs("div",{children:[p.jsx("h2",{className:"text-2xl font-bold text-white",children:o?"Edit Profile":"User Profile"}),p.jsx("p",{className:"text-green-100",children:n.role})]})]}),p.jsx("button",{onClick:e,className:"rounded-full p-2 bg-white/20 text-white hover:bg-white/30 transition-colors",children:p.jsx(Lf,{className:"h-6 w-6"})})]})}),p.jsxs("div",{className:"p-8",children:[p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[p.jsxs("div",{className:"space-y-2",children:[p.jsxs(Ot,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(Eo,{className:"h-4 w-4"}),"Full Name"]}),o?p.jsx(Jr,{value:l.name,onChange:m=>c({...l,name:m.target.value}),className:"border-gray-300"}):p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.name})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs(Ot,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(M0,{className:"h-4 w-4"}),"Email Address"]}),o?p.jsx(Jr,{type:"email",value:l.email,onChange:m=>c({...l,email:m.target.value}),className:"border-gray-300"}):p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.email})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs(Ot,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(U0,{className:"h-4 w-4"}),"Phone Number"]}),o?p.jsx(Jr,{value:l.phone,onChange:m=>c({...l,phone:m.target.value}),className:"border-gray-300"}):p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.phone})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs(Ot,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(Of,{className:"h-4 w-4"}),"Department"]}),o?p.jsxs("select",{value:l.department,onChange:m=>c({...l,department:m.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",children:[p.jsx("option",{value:"Administration",children:"Administration"}),p.jsx("option",{value:"Operations",children:"Operations"}),p.jsx("option",{value:"Management",children:"Management"}),p.jsx("option",{value:"Analytics",children:"Analytics"}),p.jsx("option",{value:"Maintenance",children:"Maintenance"})]}):p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.department})]}),p.jsxs("div",{className:"space-y-2 md:col-span-2",children:[p.jsxs(Ot,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(Df,{className:"h-4 w-4"}),"Role"]}),o?p.jsxs("select",{value:l.role,onChange:m=>c({...l,role:m.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",children:[p.jsx("option",{value:"staff",children:"Staff"}),p.jsx("option",{value:"manager",children:"Manager"}),p.jsx("option",{value:"analyst",children:"Analyst"}),p.jsx("option",{value:"admin",children:"Admin"})]}):p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.role})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs(Ot,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(w0,{className:"h-4 w-4"}),"Member Since"]}),p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.joinedDate})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs(Ot,{className:"flex items-center gap-2 text-gray-700",children:[p.jsx(I0,{className:"h-4 w-4"}),"Last Login"]}),p.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.lastLogin})]})]}),p.jsx("div",{className:"flex gap-3 mt-8 pt-6 border-t",children:o?p.jsxs(p.Fragment,{children:[p.jsxs(qn,{onClick:u,className:"flex-1 bg-green-600 hover:bg-green-700 text-white cursor-pointer",children:[p.jsx(W0,{className:"h-4 w-4 mr-2"}),"Save Changes"]}),p.jsx(qn,{onClick:h,variant:"outline",className:"flex-1 cursor-pointer",children:"Cancel"})]}):p.jsxs(p.Fragment,{children:[p.jsxs(qn,{onClick:()=>a(!0),className:"flex-1 bg-green-600 hover:bg-green-700 text-white cursor-pointer",children:[p.jsx(Mf,{className:"h-4 w-4 mr-2"}),"Edit Profile"]}),r&&n.role!=="admin"&&p.jsxs(qn,{onClick:d,className:"flex-1 bg-red-600 hover:bg-red-700 text-white cursor-pointer",children:[p.jsx(fr,{className:"h-4 w-4 mr-2"}),"Remove User"]})]})})]})]})})]})})}const Lk=[{name:"Dashboard",href:"/",icon:A0},{name:"Bin Monitoring",href:"/bins",icon:fr},{name:"Map & Location",href:"/map",icon:O0},{name:"Alerts",href:"/alerts",icon:_0},{name:"Rot Index",href:"/rot-index",icon:g0},{name:"Analytics",href:"/analytics",icon:E0},{name:"Workers",href:"/workers",icon:Of},{name:"Maintenance",href:"/maintenance",icon:J0},{name:"User Management",href:"/users",icon:Df}];function Fk({onLogout:t}){const[e,n]=v.useState(!1),[s,i]=v.useState(!1),[r,o]=v.useState({id:1,name:"Admin User",email:"admin@omnibins.com",phone:"+1 (555) 123-4567",role:"admin",department:"Administration",joinedDate:"January 2024",status:"active",lastLogin:"Just now"}),a=jm(),l=u=>u==="/"?a.pathname==="/":a.pathname.startsWith(u),c=u=>{o(u)};return p.jsxs("div",{className:"min-h-screen bg-white",children:[e&&p.jsx("div",{className:"fixed inset-0 z-40 bg-black/50 lg:hidden",onClick:()=>n(!1)}),p.jsxs("aside",{className:`fixed inset-y-0 left-0 z-50 w-64 transform bg-gray-50 shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 ${e?"translate-x-0":"-translate-x-full"}`,children:[p.jsxs("div",{className:"flex h-16 items-center gap-2 px-6",children:[p.jsxs(Il,{to:"/",onClick:()=>n(!1),className:"flex items-center gap-2 hover:opacity-80 transition-opacity",children:[p.jsx("div",{className:"rounded-lg bg-green-600 p-2",children:p.jsx(fr,{className:"h-6 w-6 text-white"})}),p.jsx("span",{className:"text-xl font-bold text-gray-900",children:"OMNIBINS"})]}),p.jsx("button",{onClick:()=>n(!1),className:"ml-auto lg:hidden",children:p.jsx(Lf,{className:"h-6 w-6"})})]}),p.jsx("nav",{className:"flex-1 space-y-1 overflow-y-auto px-3 py-4",children:Lk.map(u=>{const h=u.icon,d=l(u.href);return p.jsxs(Il,{to:u.href,onClick:()=>n(!1),className:`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${d?"bg-green-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:[p.jsx(h,{className:"h-5 w-5"}),u.name]},u.name)})}),p.jsxs("div",{className:"border-t p-4",children:[p.jsxs("button",{onClick:()=>i(!0),className:"w-full flex items-center gap-3 mb-3 hover:bg-gray-100 p-2 rounded-lg transition-colors cursor-pointer",children:[p.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-full bg-green-600 flex-shrink-0",children:p.jsx(Eo,{className:"h-5 w-5 text-white"})}),p.jsxs("div",{className:"flex-1 min-w-0 text-left",children:[p.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:r.name}),p.jsx("p",{className:"text-xs text-gray-500 truncate",children:r.email})]}),p.jsx(Mf,{className:"h-4 w-4 text-gray-400"})]}),p.jsxs(qn,{variant:"outline",className:"w-full justify-start gap-2 cursor-pointer",onClick:t,children:[p.jsx(R0,{className:"h-4 w-4"}),"Logout"]})]})]}),p.jsx(Ok,{isOpen:s,onClose:()=>i(!1),userData:r,onUpdateUserData:c}),p.jsxs("div",{className:"lg:pl-64",children:[p.jsx("div",{className:"flex items-center justify-between border-b border-gray-200 bg-white px-4 py-4 lg:hidden",children:p.jsx("button",{type:"button",onClick:()=>n(!0),className:"inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100","aria-label":"Open navigation menu",children:p.jsx(F0,{className:"h-5 w-5"})})}),p.jsx("main",{className:"p-6",children:p.jsx(Um,{})})]})]})}const Be=(t,e=0)=>{if(typeof t=="number")return t;if(typeof t=="string"){const n=parseFloat(t);return Number.isFinite(n)?n:e}return e},Mm=t=>Math.log10(Math.max(t,1e-6)),Vk=t=>t.status?t.status:t.weight>=80?"Full":t.weight>=60?"Near Full":t.weight<=20?"Empty":"Normal",jk=(t,e=10)=>{if(t<=0||e<=0)return 0;const n=t/e,s=-.38*Mm(n)+1.96,i=Math.pow(10,s);return Number.isFinite(i)?i:0},Uk=(t,e=10)=>{if(t<=0||e<=0)return 0;const n=t/e,s=-.48*Mm(n)+1.77,i=Math.pow(10,s);return Number.isFinite(i)?i:0},Bk=(t,e)=>{const n=Be(e.weight??e.weight_kg??e.wasteWeight??0),s=Be(e.capacity??e.fillLevel??0),i=Be(e.mq135??0),r=Be(e.mq4??0),o=Be(e.mq135_r0??10),a=Be(e.mq4_r0??10),l=e.nh3!=null?Be(e.nh3):Uk(i,o),c=e.ch4!=null?Be(e.ch4):jk(r,a),u=Be(e.distance??e.distance_cm??0),h=Be(e.timestamp??e.time??e.updatedAt??0),d={id:t,location:String(e.location??e.node??t),weight:n,capacity:s,nh3:l,ch4:c,status:String(e.status??""),node:e.node?String(e.node):void 0,distance:u||void 0,timestamp:h||void 0};return{...d,status:d.status||Vk(d)}};function ei({className:t,...e}){return p.jsx("div",{"data-slot":"card",className:Rt("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",t),...e})}function ti({className:t,...e}){return p.jsx("div",{"data-slot":"card-header",className:Rt("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",t),...e})}function ni({className:t,...e}){return p.jsx("h4",{"data-slot":"card-title",className:Rt("leading-none",t),...e})}function pA({className:t,...e}){return p.jsx("p",{"data-slot":"card-description",className:Rt("text-muted-foreground",t),...e})}function si({className:t,...e}){return p.jsx("div",{"data-slot":"card-content",className:Rt("px-6 [&:last-child]:pb-6",t),...e})}const Wk=[],Hk=[];function zk(){const[t,e]=v.useState({totalBins:0,fullBins:12,highRotIndex:8,activeNeutralization:3}),[n,s]=v.useState([]);v.useEffect(()=>{const r=u0(o=>{e(a=>({...a,totalBins:o.length}))});return()=>r()},[]),v.useEffect(()=>{const r=Qt(Jt,"sensor_data"),o=Af(r,a=>{const l=a.val(),c=l?Object.entries(l).map(([g,y])=>Bk(g,y)).sort((g,y)=>(g.timestamp??0)-(y.timestamp??0)):[],u=new Set(c.map(g=>g.id)),h=c.filter(g=>g.weight>=80).length,d=c.filter(g=>g.nh3>25||g.ch4>50).length,f=c.filter(g=>g.nh3>35||g.ch4>70).length,m=c.slice(-24).map(g=>({time:g.timestamp?new Date(g.timestamp).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}):g.id,nh3:g.nh3,ch4:g.ch4}));e(g=>({...g,totalBins:u.size||g.totalBins,fullBins:h,highRotIndex:d,activeNeutralization:f})),s(m)});return()=>o()},[]);const i=r=>{switch(r){case"urgent":return"bg-red-100 text-red-800 border-red-200";case"warning":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"success":return"bg-green-100 text-green-800 border-green-200";default:return"bg-blue-100 text-blue-800 border-blue-200"}};return p.jsxs("div",{className:"space-y-6",children:[p.jsx("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:p.jsxs("div",{children:[p.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Dashboard"}),p.jsx("p",{className:"text-gray-900 font-semibold",children:"Live monitoring of bin status, gas levels & collection tracking"})]})}),p.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",children:[{title:"Total Smart Bins",value:t.totalBins,desc:"Deployed across the area",icon:fr,iconColor:"text-green-600"},{title:"Full / Near Full",value:t.fullBins,desc:"Require immediate collection",icon:Kc,iconColor:"text-red-600"},{title:"High Rot Index",value:t.highRotIndex,desc:"Above threshold level",icon:X0,iconColor:"text-orange-600"},{title:"Active Neutralization",value:t.activeNeutralization,desc:"Odor control events",icon:S0,iconColor:"text-blue-600"}].map((r,o)=>p.jsx(hn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:o*.1},children:p.jsxs(ei,{children:[p.jsxs(ti,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[p.jsx(ni,{className:"text-sm font-semibold text-gray-900",children:r.title}),p.jsx(r.icon,{className:`h-10 w-10 ${r.iconColor||"text-gray-800"}`})]}),p.jsxs(si,{children:[p.jsx("div",{className:"text-2xl font-bold text-gray-900",children:r.value}),p.jsx("p",{className:"text-xs text-gray-800 font-medium",children:r.desc})]})]})},r.title))}),p.jsxs("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-2",children:[p.jsx(hn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.4},children:p.jsxs(ei,{className:"h-full",children:[p.jsx(ti,{children:p.jsx(ni,{children:"Recent Alerts & Notifications"})}),p.jsx(si,{children:p.jsx("div",{className:"space-y-3",children:Wk.map(r=>p.jsxs("div",{className:`flex items-start gap-3 rounded-lg border p-3 ${i(r.type)}`,children:[p.jsx(Kc,{className:"h-5 w-5 mt-0.5 flex-shrink-0"}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("p",{className:"font-semibold text-sm text-gray-900",children:r.bin}),p.jsx("p",{className:"text-sm text-gray-900 font-medium",children:r.message}),p.jsx("p",{className:"text-xs mt-1 font-medium text-gray-800",children:r.time})]})]},r.id))})})]})}),p.jsx(hn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.5},children:p.jsxs(ei,{className:"h-full flex flex-col",children:[p.jsx(ti,{children:p.jsx(ni,{children:"Weekly Collections"})}),p.jsx(si,{className:"flex-1",children:p.jsx(xl,{width:"100%",height:"100%",minHeight:250,children:p.jsxs(zm,{data:Hk,children:[p.jsx(Sl,{strokeDasharray:"3 3"}),p.jsx(kl,{dataKey:"day"}),p.jsx(Al,{}),p.jsx(Pl,{}),p.jsx($m,{dataKey:"collections",fill:"#10b981"})]})})})]})})]}),p.jsx(hn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6},children:p.jsxs(ei,{children:[p.jsx(ti,{children:p.jsx(ni,{children:"Average Gas Levels (24h)"})}),p.jsx(si,{children:p.jsx(xl,{width:"100%",height:"100%",minHeight:350,children:p.jsxs(Gm,{data:n,children:[p.jsx(Sl,{strokeDasharray:"3 3"}),p.jsx(kl,{dataKey:"time"}),p.jsx(Al,{}),p.jsx(Pl,{}),p.jsx(Km,{}),p.jsx(Rl,{type:"monotone",dataKey:"nh3",stroke:"#f59e0b",name:"NH₃ (Ammonia) (ppm)",strokeWidth:2}),p.jsx(Rl,{type:"monotone",dataKey:"ch4",stroke:"#3b82f6",name:"CH₄ (Methane) (ppm)",strokeWidth:2})]})})})]})})]})}const gh=v.lazy(()=>qe(()=>import("./BinMonitoring-DoWfFXNV.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(t=>({default:t.BinMonitoring}))),$k=v.lazy(()=>qe(()=>import("./MapLocation-BWacGZbQ.js"),__vite__mapDeps([10,1,2,3,7,9])).then(t=>({default:t.MapLocation}))),Gk=v.lazy(()=>qe(()=>import("./Alerts-BYROaCNm.js"),__vite__mapDeps([11,1,2,3,6,8,9])).then(t=>({default:t.Alerts}))),Kk=v.lazy(()=>qe(()=>import("./RotIndex-BK7UXPzn.js"),__vite__mapDeps([12,1,2,5,9])).then(t=>({default:t.RotIndex}))),qk=v.lazy(()=>qe(()=>import("./Analytics-BQtpuZpu.js"),__vite__mapDeps([13,1,2,14,7,9])).then(t=>({default:t.Analytics}))),Yk=v.lazy(()=>qe(()=>import("./Workers-S1gVOhvV.js"),__vite__mapDeps([15,1,2,3,16,6,9])).then(t=>({default:t.Workers}))),Xk=v.lazy(()=>qe(()=>import("./Maintenance-tD8hSC0I.js"),__vite__mapDeps([17,1,2,3,16,5,6,18,9])).then(t=>({default:t.Maintenance}))),Qk=v.lazy(()=>qe(()=>import("./UserManagement-B48N1OTV.js"),__vite__mapDeps([19,1,2,3,16,20,9])).then(t=>({default:t.UserManagement}))),Jk=v.lazy(()=>qe(()=>import("./NotFound-DSaEAJsm.js"),__vite__mapDeps([21,1,2,9])).then(t=>({default:t.NotFound}))),We=()=>p.jsx("div",{className:"flex items-center justify-center min-h-screen",children:p.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"})});function Zk(t){return Bm([{path:"/",element:p.jsx(Fk,{onLogout:t}),children:[{index:!0,Component:zk},{path:"bins",element:p.jsx(v.Suspense,{fallback:p.jsx(We,{}),children:p.jsx(gh,{})})},{path:"map",element:p.jsx(v.Suspense,{fallback:p.jsx(We,{}),children:p.jsx($k,{})})},{path:"alerts",element:p.jsx(v.Suspense,{fallback:p.jsx(We,{}),children:p.jsx(Gk,{})})},{path:"collections",element:p.jsx(v.Suspense,{fallback:p.jsx(We,{}),children:p.jsx(gh,{})})},{path:"rot-index",element:p.jsx(v.Suspense,{fallback:p.jsx(We,{}),children:p.jsx(Kk,{})})},{path:"analytics",element:p.jsx(v.Suspense,{fallback:p.jsx(We,{}),children:p.jsx(qk,{})})},{path:"workers",element:p.jsx(v.Suspense,{fallback:p.jsx(We,{}),children:p.jsx(Yk,{})})},{path:"maintenance",element:p.jsx(v.Suspense,{fallback:p.jsx(We,{}),children:p.jsx(Xk,{})})},{path:"users",element:p.jsx(v.Suspense,{fallback:p.jsx(We,{}),children:p.jsx(Qk,{})})},{path:"*",element:p.jsx(v.Suspense,{fallback:p.jsx(We,{}),children:p.jsx(Jk,{})})}]}],{basename:"/"})}const eA=v.lazy(()=>qe(()=>import("./LandingPage-plAb3IFI.js"),__vite__mapDeps([22,1,2,3,4,18,7,6,14,9,20])).then(t=>({default:t.LandingPage}))),yh=()=>p.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-blue-50",children:p.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-green-600"})});function tA(){const[t,e]=v.useState(null),[n,s]=v.useState(!1),i=v.useMemo(()=>Zk(()=>e(!1)),[]);v.useEffect(()=>{const o=O_(dr,a=>{a?(e(!0),localStorage.setItem("omniToken","authenticated")):(e(!1),localStorage.removeItem("omniToken")),s(!0)});return()=>o()},[]);const r=o=>{o&&localStorage.setItem("omniToken",o),e(!0)};return!n||t===null?p.jsx(yh,{}):t?p.jsx(Wm,{router:i}):p.jsx(v.Suspense,{fallback:p.jsx(yh,{}),children:p.jsx(eA,{onLoginSuccess:r})})}const Dm=document.getElementById("root");if(!Dm)throw new Error("Failed to find the root element. Make sure index.html has <div id='root'></div>");Xm.createRoot(Dm).render(p.jsx(Hm.StrictMode,{children:p.jsx(tA,{})}));export{SS as A,qn as B,E0 as C,S0 as D,J0 as E,rA as F,Ga as G,G0 as H,Jr as I,w0 as J,W0 as K,Ot as L,F0 as M,Mf as N,cA as O,U0 as P,eT as Q,Df as S,fr as T,Of as U,X0 as W,Lf as X,_0 as a,ei as b,q as c,pA as d,Kc as e,ti as f,ni as g,si as h,I0 as i,M0 as j,lA as k,aA as l,hn as m,Jt as n,Af as o,Be as p,Rt as q,Qt as r,oA as s,Bk as t,XE as u,Eo as v,uA as w,dA as x,hA as y,g0 as z};
