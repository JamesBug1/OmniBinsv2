const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BinMonitoring-BogaMI7y.js","assets/ui-vendor-DMnB-hTg.js","assets/react-vendor-73flmPZe.js","assets/badge-DrWmiZgZ.js","assets/progress-ZC8d6ayS.js","assets/triangle-alert-CZi0P6dI.js","assets/circle-check-big-D1LCgva1.js","assets/map-pin-D-I9DjbY.js","assets/weight-mAFfWPDl.js","assets/chart-vendor-C_2IS7-I.js","assets/MapLocation-N4m7xNf_.js","assets/MapLocation-CIGW-MKW.css","assets/Alerts-B8RinIQV.js","assets/RotIndex-C3jPKeKk.js","assets/Analytics-CjZbDSmH.js","assets/trending-up-Bk_-gpED.js","assets/Workers-01rFJ3Ro.js","assets/search-CE_T0NxL.js","assets/Maintenance-C7gSnl-C.js","assets/UserManagement-BGB31o_y.js","assets/shield-B02b1B1j.js","assets/NotFound-B_lhE6YO.js","assets/Signup-DQzGuYJY.js","assets/VerificationModal-DiajKiCu.js","assets/Terms-CHvLA8rB.js","assets/LandingPage-BFL5Expu.js"])))=>i.map(i=>d[i]);
import{a as Pg,j as m,S as Rg,b as Ng}from"./ui-vendor-DMnB-hTg.js";import{g as Mg,a as v,u as Dg,L as ac,O as Og,b as Lg,d as Fg,R as Vg}from"./react-vendor-73flmPZe.js";import{g as ed,R as lc,B as cc,C as uc,X as hc,Y as dc,T as fc,c as qr,a as jg}from"./chart-vendor-C_2IS7-I.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var ci={},pc;function Bg(){if(pc)return ci;pc=1;var t=Pg();return ci.createRoot=t.createRoot,ci.hydrateRoot=t.hydrateRoot,ci}var Ug=Bg();const Wg=Mg(Ug),zg="modulepreload",Hg=function(t){return"/"+t},mc={},Ve=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=o(n.map(c=>{if(c=Hg(c),c in mc)return;mc[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":zg,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},$g=()=>{};var gc={};/**
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
 */const td={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw Hn(e)},Hn=function(t){return new Error("Firebase Database ("+td.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const nd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Kg;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sd=function(t){const e=nd(t);return Pa.encodeByteArray(e,!0)},Fi=function(t){return sd(t).replace(/\./g,"")},Vi=function(t){try{return Pa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qg(t){return id(void 0,t)}function id(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Yg(n)||(t[n]=id(t[n],e[n]));return t}function Yg(t){return t!=="__proto__"}/**
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
 */function Qg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xg=()=>Qg().__FIREBASE_DEFAULTS__,Jg=()=>{if(typeof process>"u"||typeof gc>"u")return;const t=gc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vi(t[1]);return e&&JSON.parse(e)},Ra=()=>{try{return $g()||Xg()||Jg()||Zg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rd=t=>{var e,n;return(n=(e=Ra())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},ey=t=>{const e=rd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},od=()=>{var t;return(t=Ra())==null?void 0:t.config},ad=t=>{var e;return(e=Ra())==null?void 0:e[`_${t}`]};/**
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
 */function ty(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Fi(JSON.stringify(n)),Fi(JSON.stringify(o)),""].join(".")}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Na(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function ny(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ld(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iy(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ry(){return td.NODE_ADMIN===!0}function oy(){try{return typeof indexedDB=="object"}catch{return!1}}function ay(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const ly="FirebaseError";class $t extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ly,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,js.prototype.create)}}class js{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?cy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $t(i,a,s)}}function cy(t,e){return t.replace(uy,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const uy=/\{\$([^}]+)}/g;/**
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
 */function Ts(t){return JSON.parse(t)}function re(t){return JSON.stringify(t)}/**
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
 */const cd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ts(Vi(r[0])||""),n=Ts(Vi(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},hy=function(t){const e=cd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dy=function(t){const e=cd(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ge(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function un(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ji(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function hn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(yc(r)&&yc(o)){if(!hn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function yc(t){return t!==null&&typeof t=="object"}/**
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
 */function $n(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function hs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class fy{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function py(t,e){const n=new my(t,e);return n.subscribe.bind(n)}class my{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Yr),i.error===void 0&&(i.error=Yr),i.complete===void 0&&(i.complete=Yr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yr(){}function dn(t,e){return`${t} failed: ${e} argument `}/**
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
 */const yy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_r=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Bs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ud(t){return(await fetch(t,{credentials:"include"})).ok}class gt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const en="[DEFAULT]";/**
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
 */class Ao{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new xe;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vy(e))try{this.getOrInitializeService({instanceIdentifier:en})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=en){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=en){return this.instances.has(e)}getOptions(e=en){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_y(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=en){return this.component?this.component.multipleInstances?e:en:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _y(t){return t===en?void 0:t}function vy(t){return t.instantiationMode==="EAGER"}/**
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
 */class hd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ao(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const wy={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},by=W.INFO,Ey={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Ty=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ey[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ma{constructor(e){this.name=e,this._logLevel=by,this._logHandler=Ty,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Cy=(t,e)=>e.some(n=>t instanceof n);let _c,vc;function Sy(){return _c||(_c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xy(){return vc||(vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dd=new WeakMap,Po=new WeakMap,fd=new WeakMap,Qr=new WeakMap,Da=new WeakMap;function Iy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dd.set(n,t)}).catch(()=>{}),Da.set(e,t),e}function ky(t){if(Po.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Po.set(t,e)}let Ro={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Po.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ay(t){Ro=t(Ro)}function Py(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Xr(this),e,...n);return fd.set(s,e.sort?e.sort():[e]),Nt(s)}:xy().includes(t)?function(...e){return t.apply(Xr(this),e),Nt(dd.get(this))}:function(...e){return Nt(t.apply(Xr(this),e))}}function Ry(t){return typeof t=="function"?Py(t):(t instanceof IDBTransaction&&ky(t),Cy(t,Sy())?new Proxy(t,Ro):t)}function Nt(t){if(t instanceof IDBRequest)return Iy(t);if(Qr.has(t))return Qr.get(t);const e=Ry(t);return e!==t&&(Qr.set(t,e),Da.set(e,t)),e}const Xr=t=>Da.get(t);function Ny(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Nt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Nt(o.result),l.oldVersion,l.newVersion,Nt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const My=["get","getKey","getAll","getAllKeys","count"],Dy=["put","add","delete","clear"],Jr=new Map;function wc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jr.get(e))return Jr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Dy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||My.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Jr.set(e,r),r}Ay(t=>({...t,get:(e,n,s)=>wc(e,n)||t.get(e,n,s),has:(e,n)=>!!wc(e,n)||t.has(e,n)}));/**
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
 */class Oy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ly(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ly(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const No="@firebase/app",bc="0.14.11";/**
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
 */const yt=new Ma("@firebase/app"),Fy="@firebase/app-compat",Vy="@firebase/analytics-compat",jy="@firebase/analytics",By="@firebase/app-check-compat",Uy="@firebase/app-check",Wy="@firebase/auth",zy="@firebase/auth-compat",Hy="@firebase/database",$y="@firebase/data-connect",Gy="@firebase/database-compat",Ky="@firebase/functions",qy="@firebase/functions-compat",Yy="@firebase/installations",Qy="@firebase/installations-compat",Xy="@firebase/messaging",Jy="@firebase/messaging-compat",Zy="@firebase/performance",e_="@firebase/performance-compat",t_="@firebase/remote-config",n_="@firebase/remote-config-compat",s_="@firebase/storage",i_="@firebase/storage-compat",r_="@firebase/firestore",o_="@firebase/ai",a_="@firebase/firestore-compat",l_="firebase",c_="12.12.0";/**
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
 */const Mo="[DEFAULT]",u_={[No]:"fire-core",[Fy]:"fire-core-compat",[jy]:"fire-analytics",[Vy]:"fire-analytics-compat",[Uy]:"fire-app-check",[By]:"fire-app-check-compat",[Wy]:"fire-auth",[zy]:"fire-auth-compat",[Hy]:"fire-rtdb",[$y]:"fire-data-connect",[Gy]:"fire-rtdb-compat",[Ky]:"fire-fn",[qy]:"fire-fn-compat",[Yy]:"fire-iid",[Qy]:"fire-iid-compat",[Xy]:"fire-fcm",[Jy]:"fire-fcm-compat",[Zy]:"fire-perf",[e_]:"fire-perf-compat",[t_]:"fire-rc",[n_]:"fire-rc-compat",[s_]:"fire-gcs",[i_]:"fire-gcs-compat",[r_]:"fire-fst",[a_]:"fire-fst-compat",[o_]:"fire-vertex","fire-js":"fire-js",[l_]:"fire-js-all"};/**
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
 */const Cs=new Map,h_=new Map,Do=new Map;function Ec(t,e){try{t.container.addComponent(e)}catch(n){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(Do.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;Do.set(e,t);for(const n of Cs.values())Ec(n,t);for(const n of h_.values())Ec(n,t);return!0}function Oa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ne(t){return t==null?!1:t.settings!==void 0}/**
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
 */const d_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mt=new js("app","Firebase",d_);/**
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
 */class f_{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}/**
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
 */const Gn=c_;function La(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Mo,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Mt.create("bad-app-name",{appName:String(i)});if(n||(n=od()),!n)throw Mt.create("no-options");const r=Cs.get(i);if(r){if(hn(n,r.options)&&hn(s,r.config))return r;throw Mt.create("duplicate-app",{appName:i})}const o=new hd(i);for(const l of Do.values())o.addComponent(l);const a=new f_(n,s,o);return Cs.set(i,a),a}function pd(t=Mo){const e=Cs.get(t);if(!e&&t===Mo&&od())return La();if(!e)throw Mt.create("no-app",{appName:t});return e}function p_(){return Array.from(Cs.values())}function Dt(t,e,n){let s=u_[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(o.join(" "));return}Dn(new gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const m_="firebase-heartbeat-database",g_=1,Ss="firebase-heartbeat-store";let Zr=null;function md(){return Zr||(Zr=Ny(m_,g_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ss)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mt.create("idb-open",{originalErrorMessage:t.message})})),Zr}async function y_(t){try{const n=(await md()).transaction(Ss),s=await n.objectStore(Ss).get(gd(t));return await n.done,s}catch(e){if(e instanceof $t)yt.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(n.message)}}}async function Tc(t,e){try{const s=(await md()).transaction(Ss,"readwrite");await s.objectStore(Ss).put(e,gd(t)),await s.done}catch(n){if(n instanceof $t)yt.warn(n.message);else{const s=Mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yt.warn(s.message)}}}function gd(t){return`${t.name}!${t.options.appId}`}/**
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
 */const __=1024,v_=30;class w_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new E_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>v_){const o=T_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){yt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cc(),{heartbeatsToSend:s,unsentEntries:i}=b_(this._heartbeatsCache.heartbeats),r=Fi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return yt.warn(n),""}}}function Cc(){return new Date().toISOString().substring(0,10)}function b_(t,e=__){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Sc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class E_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oy()?ay().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await y_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Tc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Tc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sc(t){return Fi(JSON.stringify({version:2,heartbeats:t})).length}function T_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function C_(t){Dn(new gt("platform-logger",e=>new Oy(e),"PRIVATE")),Dn(new gt("heartbeat",e=>new w_(e),"PRIVATE")),Dt(No,bc,t),Dt(No,bc,"esm2020"),Dt("fire-js","")}C_("");function yd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S_=yd,_d=new js("auth","Firebase",yd());/**
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
 */const Ui=new Ma("@firebase/auth");function x_(t,...e){Ui.logLevel<=W.WARN&&Ui.warn(`Auth (${Gn}): ${t}`,...e)}function Ci(t,...e){Ui.logLevel<=W.ERROR&&Ui.error(`Auth (${Gn}): ${t}`,...e)}/**
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
 */function $e(t,...e){throw Fa(t,...e)}function et(t,...e){return Fa(t,...e)}function vd(t,e,n){const s={...S_(),[e]:n};return new js("auth","Firebase",s).create(e,{appName:t.name})}function mt(t){return vd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fa(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return _d.create(t,...e)}function P(t,e,...n){if(!t)throw Fa(e,...n)}function dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ci(e),new Error(e)}function _t(t,e){t||dt(e)}/**
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
 */function Wi(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function wd(){return xc()==="http:"||xc()==="https:"}function xc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function I_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wd()||sy()||"connection"in navigator)?navigator.onLine:!0}function k_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Us{constructor(e,n){this.shortDelay=e,this.longDelay=n,_t(n>e,"Short delay should be less than long delay!"),this.isMobile=Na()||ld()}get(){return I_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Va(t,e){_t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class bd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const A_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const P_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],R_=new Us(3e4,6e4);function at(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function lt(t,e,n,s,i={}){return Ed(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=$n({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...r};return ny()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Bs(t.emulatorConfig.host)&&(c.credentials="include"),bd.fetch()(await Td(t,t.config.apiHost,n,a),c)})}async function Ed(t,e,n){t._canInitEmulator=!1;const s={...A_,...e};try{const i=new M_(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ui(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ui(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ui(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ui(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw vd(t,u,c);$e(t,u)}}catch(i){if(i instanceof $t)throw i;$e(t,"network-request-failed",{message:String(i)})}}async function Ws(t,e,n,s,i={}){const r=await lt(t,e,n,s,i);return"mfaPendingCredential"in r&&$e(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function Td(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?Va(t.config,i):`${t.config.apiScheme}://${i}`;return P_.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function N_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class M_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(et(this.auth,"network-request-failed")),R_.get())})}}function ui(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=et(t,e,s);return i.customData._tokenResponse=n,i}function Ic(t){return t!==void 0&&t.enterprise!==void 0}class D_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return N_(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function O_(t,e){return lt(t,"GET","/v2/recaptchaConfig",at(t,e))}/**
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
 */async function L_(t,e){return lt(t,"POST","/v1/accounts:delete",e)}async function zi(t,e){return lt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ps(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function F_(t,e=!1){const n=Y(t),s=await n.getIdToken(e),i=ja(s);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ps(eo(i.auth_time)),issuedAtTime:ps(eo(i.iat)),expirationTime:ps(eo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function eo(t){return Number(t)*1e3}function ja(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ci("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vi(n);return i?JSON.parse(i):(Ci("Failed to decode base64 JWT payload"),null)}catch(i){return Ci("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kc(t){const e=ja(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xs(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof $t&&V_(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function V_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class j_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ps(this.lastLoginAt),this.creationTime=ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hi(t){var h;const e=t.auth,n=await t.getIdToken(),s=await xs(t,zi(e,{idToken:n}));P(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=(h=i.providerUserInfo)!=null&&h.length?Cd(i.providerUserInfo):[],o=U_(t.providerData,r),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Oo(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function B_(t){const e=Y(t);await Hi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function U_(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Cd(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function W_(t,e){const n=await Ed(t,{},async()=>{const s=$n({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await Td(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return t.emulatorConfig&&Bs(t.emulatorConfig.host)&&(l.credentials="include"),bd.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function z_(t,e){return lt(t,"POST","/v2/accounts:revokeToken",at(t,e))}/**
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
 */class An{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){P(e.length!==0,"internal-error");const n=kc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await W_(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new An;return s&&(P(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(P(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new An,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
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
 */function bt(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ue{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new j_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xs(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return F_(this,e)}reload(){return B_(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ue({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Hi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ne(this.auth.app))return Promise.reject(mt(this.auth));const e=await this.getIdToken();return await xs(this,L_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:h,emailVerified:d,isAnonymous:f,providerData:p,stsTokenManager:g}=n;P(h&&g,e,"internal-error");const y=An.fromJSON(this.name,g);P(typeof h=="string",e,"internal-error"),bt(s,e.name),bt(i,e.name),P(typeof d=="boolean",e,"internal-error"),P(typeof f=="boolean",e,"internal-error"),bt(r,e.name),bt(o,e.name),bt(a,e.name),bt(l,e.name),bt(c,e.name),bt(u,e.name);const w=new Ue({uid:h,auth:e,email:i,emailVerified:d,displayName:s,isAnonymous:f,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:y,createdAt:c,lastLoginAt:u});return p&&Array.isArray(p)&&(w.providerData=p.map(b=>({...b}))),l&&(w._redirectEventId=l),w}static async _fromIdTokenResponse(e,n,s=!1){const i=new An;i.updateFromServerResponse(n);const r=new Ue({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Hi(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];P(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Cd(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new An;a.updateFromIdToken(s);const l=new Ue({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Oo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Ac=new Map;function ft(t){_t(t instanceof Function,"Expected a class definition");let e=Ac.get(t);return e?(_t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ac.set(t,e),e)}/**
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
 */class Sd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sd.type="NONE";const Pc=Sd;/**
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
 */function Si(t,e,n){return`firebase:${t}:${e}:${n}`}class Pn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Si(this.userKey,i.apiKey,r),this.fullPersistenceKey=Si("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await zi(this.auth,{idToken:e}).catch(()=>{});return n?Ue._fromGetAccountInfoResponse(this.auth,n,e):null}return Ue._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Pn(ft(Pc),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||ft(Pc);const o=Si(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let h;if(typeof u=="string"){const d=await zi(e,{idToken:u}).catch(()=>{});if(!d)break;h=await Ue._fromGetAccountInfoResponse(e,d,u)}else h=Ue._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Pn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Pn(r,e,s))}}/**
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
 */function Rc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ad(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rd(e))return"Blackberry";if(Nd(e))return"Webos";if(Id(e))return"Safari";if((e.includes("chrome/")||kd(e))&&!e.includes("edge/"))return"Chrome";if(Pd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function xd(t=Ee()){return/firefox\//i.test(t)}function Id(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kd(t=Ee()){return/crios\//i.test(t)}function Ad(t=Ee()){return/iemobile/i.test(t)}function Pd(t=Ee()){return/android/i.test(t)}function Rd(t=Ee()){return/blackberry/i.test(t)}function Nd(t=Ee()){return/webos/i.test(t)}function Ba(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function H_(t=Ee()){var e;return Ba(t)&&!!((e=window.navigator)!=null&&e.standalone)}function $_(){return iy()&&document.documentMode===10}function Md(t=Ee()){return Ba(t)||Pd(t)||Nd(t)||Rd(t)||/windows phone/i.test(t)||Ad(t)}/**
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
 */function Dd(t,e=[]){let n;switch(t){case"Browser":n=Rc(Ee());break;case"Worker":n=`${Rc(Ee())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gn}/${s}`}/**
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
 */class G_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function K_(t,e={}){return lt(t,"GET","/v2/passwordPolicy",at(t,e))}/**
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
 */const q_=6;class Y_{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??q_,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Q_{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nc(this),this.idTokenSubscription=new Nc(this),this.beforeStateQueue=new G_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_d,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ft(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await Pn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zi(this,{idToken:e}),s=await Ue._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Ne(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ne(this.app))return Promise.reject(mt(this));const n=e?Y(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ne(this.app)?Promise.reject(mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ne(this.app)?Promise.reject(mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await K_(this),n=new Y_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new js("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await z_(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ft(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Pn.create(this,[ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Ne(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&x_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Gt(t){return Y(t)}class Nc{constructor(e){this.auth=e,this.observer=null,this.addObserver=py(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function X_(t){vr=t}function Od(t){return vr.loadJS(t)}function J_(){return vr.recaptchaEnterpriseScript}function Z_(){return vr.gapiScript}function ev(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class tv{constructor(){this.enterprise=new nv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class nv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const sv="recaptcha-enterprise",Ld="NO_RECAPTCHA";class iv{constructor(e){this.type=sv,this.auth=Gt(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{O_(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new D_(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Ic(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ld)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tv().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Ic(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=J_();l.length!==0&&(l+=a),Od(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Mc(t,e,n,s=!1,i=!1){const r=new iv(t);let o;if(i)o=Ld;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function $i(t,e,n,s,i){var r;if((r=t._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Mc(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Mc(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function rv(t,e){const n=Oa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(hn(r,e??{}))return i;$e(i,"already-initialized")}return n.initialize({options:e})}function ov(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function av(t,e,n){const s=Gt(t);P(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Fd(e),{host:o,port:a}=lv(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){P(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),P(hn(c,s.config.emulator)&&hn(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,Bs(o)?ud(`${r}//${o}${l}`):cv()}function Fd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lv(t){const e=Fd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Dc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Dc(o)}}}function Dc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ua{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,n){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function uv(t,e){return lt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function hv(t,e){return Ws(t,"POST","/v1/accounts:signInWithPassword",at(t,e))}async function Vd(t,e){return lt(t,"POST","/v1/accounts:sendOobCode",at(t,e))}async function dv(t,e){return Vd(t,e)}async function fv(t,e){return Vd(t,e)}/**
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
 */async function pv(t,e){return Ws(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}async function mv(t,e){return Ws(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}/**
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
 */class Is extends Ua{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Is(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Is(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(e,n,"signInWithPassword",hv);case"emailLink":return pv(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(e,s,"signUpPassword",uv);case"emailLink":return mv(e,{idToken:n,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rn(t,e){return Ws(t,"POST","/v1/accounts:signInWithIdp",at(t,e))}/**
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
 */const gv="http://localhost";class fn extends Ua{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new fn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Rn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rn(e,n)}buildRequest(){const e={requestUri:gv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$n(n)}return e}}/**
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
 */function yv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _v(t){const e=us(hs(t)).link,n=e?us(hs(e)).deep_link_id:null,s=us(hs(t)).deep_link_id;return(s?us(hs(s)).link:null)||s||n||e||t}class Wa{constructor(e){const n=us(hs(e)),s=n.apiKey??null,i=n.oobCode??null,r=yv(n.mode??null);P(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=_v(e);try{return new Wa(n)}catch{return null}}}/**
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
 */class Kn{constructor(){this.providerId=Kn.PROVIDER_ID}static credential(e,n){return Is._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Wa.parseLink(n);return P(s,"argument-error"),Is._fromEmailAndCode(e,s.code,s.tenantId)}}Kn.PROVIDER_ID="password";Kn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zs extends jd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xt extends zs{constructor(){super("facebook.com")}static credential(e){return fn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
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
 */class ht extends zs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fn._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ht.credential(n,s)}catch{return null}}}ht.GOOGLE_SIGN_IN_METHOD="google.com";ht.PROVIDER_ID="google.com";/**
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
 */class It extends zs{constructor(){super("github.com")}static credential(e){return fn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
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
 */class kt extends zs{constructor(){super("twitter.com")}static credential(e,n){return fn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return kt.credential(n,s)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
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
 */async function vv(t,e){return Ws(t,"POST","/v1/accounts:signUp",at(t,e))}/**
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
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ue._fromIdTokenResponse(e,s,i),o=Oc(s);return new pn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Oc(s);return new pn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Oc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Gi extends $t{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Gi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Gi(e,n,s,i)}}function Bd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Gi._fromErrorAndOperation(t,r,e,s):r})}async function wv(t,e,n=!1){const s=await xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pn._forOperation(t,"link",s)}/**
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
 */async function bv(t,e,n=!1){const{auth:s}=t;if(Ne(s.app))return Promise.reject(mt(s));const i="reauthenticate";try{const r=await xs(t,Bd(s,i,e,t),n);P(r.idToken,s,"internal-error");const o=ja(r.idToken);P(o,s,"internal-error");const{sub:a}=o;return P(t.uid===a,s,"user-mismatch"),pn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&$e(s,"user-mismatch"),r}}/**
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
 */async function Ud(t,e,n=!1){if(Ne(t.app))return Promise.reject(mt(t));const s="signIn",i=await Bd(t,s,e),r=await pn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Ev(t,e){return Ud(Gt(t),e)}/**
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
 */function Wd(t,e,n){var s;P(((s=n.url)==null?void 0:s.length)>0,t,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),P(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function zd(t){const e=Gt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pP(t,e,n){const s=Gt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Wd(s,i,n),await $i(s,i,"getOobCode",fv)}async function Tv(t,e,n){if(Ne(t.app))return Promise.reject(mt(t));const s=Gt(t),o=await $i(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&zd(t),l}),a=await pn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function Cv(t,e,n){return Ne(t.app)?Promise.reject(mt(t)):Ev(Y(t),Kn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&zd(t),s})}/**
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
 */async function Sv(t,e){return lt(t,"POST","/v1/accounts:createAuthUri",at(t,e))}/**
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
 */async function mP(t,e){const n=wd()?Wi():"http://localhost",s={identifier:e,continueUri:n},{signinMethods:i}=await Sv(Y(t),s);return i||[]}async function gP(t,e){const n=Y(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Wd(n.auth,i,e);const{email:r}=await dv(n.auth,i);r!==t.email&&await t.reload()}function xv(t,e,n,s){return Y(t).onIdTokenChanged(e,n,s)}function Iv(t,e,n){return Y(t).beforeAuthStateChanged(e,n)}function kv(t,e,n,s){return Y(t).onAuthStateChanged(e,n,s)}function Lo(t){return Y(t).signOut()}const Ki="__sak";/**
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
 */class Hd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ki,"1"),this.storage.removeItem(Ki),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Av=1e3,Pv=10;class $d extends Hd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Md(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);$_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Pv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Av)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$d.type="LOCAL";const Rv=$d;/**
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
 */class Gd extends Hd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gd.type="SESSION";const Kd=Gd;/**
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
 */function Nv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new wr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Nv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wr.receivers=[];/**
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
 */function za(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Mv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=za("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function Dv(t){tt().location.href=t}/**
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
 */function qd(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function Ov(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Fv(){return qd()?self:null}/**
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
 */const Yd="firebaseLocalStorageDb",Vv=1,qi="firebaseLocalStorage",Qd="fbase_key";class Hs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function br(t,e){return t.transaction([qi],e?"readwrite":"readonly").objectStore(qi)}function jv(){const t=indexedDB.deleteDatabase(Yd);return new Hs(t).toPromise()}function Fo(){const t=indexedDB.open(Yd,Vv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(qi,{keyPath:Qd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(qi)?e(s):(s.close(),await jv(),e(await Fo()))})})}async function Lc(t,e,n){const s=br(t,!0).put({[Qd]:e,value:n});return new Hs(s).toPromise()}async function Bv(t,e){const n=br(t,!1).get(e),s=await new Hs(n).toPromise();return s===void 0?null:s.value}function Fc(t,e){const n=br(t,!0).delete(e);return new Hs(n).toPromise()}const Uv=800,Wv=3;class Xd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Wv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wr._getInstance(Fv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await Ov(),!this.activeServiceWorker)return;this.sender=new Mv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fo();return await Lc(e,Ki,"1"),await Fc(e,Ki),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Bv(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=br(i,!1).getAll();return new Hs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xd.type="LOCAL";const zv=Xd;new Us(3e4,6e4);/**
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
 */function Hv(t,e){return e?ft(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ha extends Ua{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $v(t){return Ud(t.auth,new Ha(t),t.bypassAuthState)}function Gv(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),bv(n,new Ha(t),t.bypassAuthState)}async function Kv(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),wv(n,new Ha(t),t.bypassAuthState)}/**
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
 */class Jd{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $v;case"linkViaPopup":case"linkViaRedirect":return Kv;case"reauthViaPopup":case"reauthViaRedirect":return Gv;default:$e(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qv=new Us(2e3,1e4);class Cn extends Jd{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Cn.currentPopupAction&&Cn.currentPopupAction.cancel(),Cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=za();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qv.get())};e()}}Cn.currentPopupAction=null;/**
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
 */const Yv="pendingRedirect",xi=new Map;class Qv extends Jd{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=xi.get(this.auth._key());if(!e){try{const s=await Xv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}xi.set(this.auth._key(),e)}return this.bypassAuthState||xi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xv(t,e){const n=ew(e),s=Zv(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Jv(t,e){xi.set(t._key(),e)}function Zv(t){return ft(t._redirectPersistence)}function ew(t){return Si(Yv,t.config.apiKey,t.name)}async function tw(t,e,n=!1){if(Ne(t.app))return Promise.reject(mt(t));const s=Gt(t),i=Hv(s,e),o=await new Qv(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const nw=600*1e3;class sw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Zd(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vc(e))}saveEventToCache(e){this.cachedEventUids.add(Vc(e)),this.lastProcessedEventTime=Date.now()}}function Vc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zd(t);default:return!1}}/**
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
 */async function rw(t,e={}){return lt(t,"GET","/v1/projects",e)}/**
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
 */const ow=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aw=/^https?/;async function lw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rw(t);for(const n of e)try{if(cw(n))return}catch{}$e(t,"unauthorized-domain")}function cw(t){const e=Wi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!aw.test(n))return!1;if(ow.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const uw=new Us(3e4,6e4);function jc(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hw(t){return new Promise((e,n)=>{var i,r,o;function s(){jc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jc(),n(et(t,"network-request-failed"))},timeout:uw.get()})}if((r=(i=tt().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=tt().gapi)!=null&&o.load)s();else{const a=ev("iframefcb");return tt()[a]=()=>{gapi.load?s():n(et(t,"network-request-failed"))},Od(`${Z_()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ii=null,e})}let Ii=null;function dw(t){return Ii=Ii||hw(t),Ii}/**
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
 */const fw=new Us(5e3,15e3),pw="__/auth/iframe",mw="emulator/auth/iframe",gw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _w(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Va(e,mw):`https://${t.config.authDomain}/${pw}`,s={apiKey:e.apiKey,appName:t.name,v:Gn},i=yw.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${$n(s).slice(1)}`}async function vw(t){const e=await dw(t),n=tt().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:_w(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),a=tt().setTimeout(()=>{r(o)},fw.get());function l(){tt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ww={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bw=500,Ew=600,Tw="_blank",Cw="http://localhost";class Bc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sw(t,e,n,s=bw,i=Ew){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l={...ww,width:s.toString(),height:i.toString(),top:r,left:o},c=Ee().toLowerCase();n&&(a=kd(c)?Tw:n),xd(c)&&(e=e||Cw,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(H_(c)&&a!=="_self")return xw(e||"",a),new Bc(null);const h=window.open(e||"",a,u);P(h,t,"popup-blocked");try{h.focus()}catch{}return new Bc(h)}function xw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Iw="__/auth/handler",kw="emulator/auth/handler",Aw=encodeURIComponent("fac");async function Uc(t,e,n,s,i,r){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Gn,eventId:i};if(e instanceof jd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ji(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof zs){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${Aw}=${encodeURIComponent(l)}`:"";return`${Pw(t)}?${$n(a).slice(1)}${c}`}function Pw({config:t}){return t.emulator?Va(t,kw):`https://${t.authDomain}/${Iw}`}/**
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
 */const to="webStorageSupport";class Rw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kd,this._completeRedirectFn=tw,this._overrideRedirectResult=Jv}async _openPopup(e,n,s,i){var o;_t((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Uc(e,n,s,Wi(),i);return Sw(e,r,za())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Uc(e,n,s,Wi(),i);return Dv(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(_t(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await vw(e),s=new sw(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(to,{type:to},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[to];r!==void 0&&n(!!r),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Md()||Id()||Ba()}}const Nw=Rw;var Wc="@firebase/auth",zc="1.13.0";/**
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
 */class Mw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Dw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ow(t){Dn(new gt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dd(t)},c=new Q_(s,i,r,l);return ov(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Dn(new gt("auth-internal",e=>{const n=Gt(e.getProvider("auth").getImmediate());return(s=>new Mw(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(Wc,zc,Dw(t)),Dt(Wc,zc,"esm2020")}/**
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
 */const Lw=300,Fw=ad("authIdTokenMaxAge")||Lw;let Hc=null;const Vw=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Fw)return;const i=n==null?void 0:n.token;Hc!==i&&(Hc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ef(t=pd()){const e=Oa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rv(t,{popupRedirectResolver:Nw,persistence:[zv,Rv,Kd]}),s=ad("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Vw(r.toString());Iv(n,o,()=>o(n.currentUser)),xv(n,a=>o(a))}}const i=rd("auth");return i&&av(n,`http://${i}`),n}function jw(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}X_({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=et("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",jw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ow("Browser");var Bw="firebase",Uw="12.12.1";/**
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
 */Dt(Bw,Uw,"app");var $c={};const Gc="@firebase/database",Kc="1.1.2";/**
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
 */let tf="";function nf(t){tf=t}/**
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
 */class Ww{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ts(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class zw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ge(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const sf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ww(e)}}catch{}return new zw},sn=sf("localStorage"),Vo=sf("sessionStorage");/**
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
 */const Nn=new Ma("@firebase/database"),rf=(function(){let t=1;return function(){return t++}})(),of=function(t){const e=yy(t),n=new fy;n.update(e);const s=n.digest();return Pa.encodeByteArray(s)},$s=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=$s.apply(null,s):typeof s=="object"?e+=re(s):e+=s,e+=" "}return e};let an=null,qc=!0;const af=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Nn.logLevel=W.VERBOSE,an=Nn.log.bind(Nn),e&&Vo.set("logging_enabled",!0)):typeof t=="function"?an=t:(an=null,Vo.remove("logging_enabled"))},ue=function(...t){if(qc===!0&&(qc=!1,an===null&&Vo.get("logging_enabled")===!0&&af(!0)),an){const e=$s.apply(null,t);an(e)}},Gs=function(t){return function(...e){ue(t,...e)}},jo=function(...t){const e="FIREBASE INTERNAL ERROR: "+$s(...t);Nn.error(e)},it=function(...t){const e=`FIREBASE FATAL ERROR: ${$s(...t)}`;throw Nn.error(e),new Error(e)},ge=function(...t){const e="FIREBASE WARNING: "+$s(...t);Nn.warn(e)},Hw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Er=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$w=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vt="[MIN_NAME]",vt="[MAX_NAME]",_n=function(t,e){if(t===e)return 0;if(t===Vt||e===vt)return-1;if(e===Vt||t===vt)return 1;{const n=Yc(t),s=Yc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Gw=function(t,e){return t===e?0:t<e?-1:1},is=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+re(e))},$a=function(t){if(typeof t!="object"||t===null)return re(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=re(e[s]),n+=":",n+=$a(t[e[s]]);return n+="}",n},lf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function he(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const cf=function(t){C(!Er(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Kw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Yw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Qw=new RegExp("^-?(0*)\\d{1,10}$"),Xw=-2147483648,Jw=2147483647,Yc=function(t){if(Qw.test(t)){const e=Number(t);if(e>=Xw&&e<=Jw)return e}return null},qn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ge("Exception was thrown by user callback.",n),e},Math.floor(0))}},Zw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ms=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class eb{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ne(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ge(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class tb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ue("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ge(e)}}class Mn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mn.OWNER="owner";/**
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
 */const Ga="5",uf="v",hf="s",df="r",ff="f",pf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,mf="ls",gf="p",Bo="ac",yf="websocket",_f="long_polling";/**
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
 */class vf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function nb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function wf(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===yf)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===_f)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nb(t)&&(n.ns=t.namespace);const i=[];return he(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class sb{constructor(){this.counters_={}}incrementCounter(e,n=1){Ge(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return qg(this.counters_)}}/**
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
 */const no={},so={};function Ka(t){const e=t.toString();return no[e]||(no[e]=new sb),no[e]}function ib(t,e){const n=t.toString();return so[n]||(so[n]=e()),so[n]}/**
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
 */class rb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&qn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Qc="start",ob="close",ab="pLPCommand",lb="pRTLPCB",bf="id",Ef="pw",Tf="ser",cb="cb",ub="seg",hb="ts",db="d",fb="dframe",Cf=1870,Sf=30,pb=Cf-Sf,mb=25e3,gb=3e4;class At{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gs(e),this.stats_=Ka(n),this.urlFn=l=>(this.appCheckToken&&(l[Bo]=this.appCheckToken),wf(n,_f,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gb)),$w(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qa((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qc)this.id=a,this.password=l;else if(o===ob)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Qc]="t",s[Tf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[cb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[uf]=Ga,this.transportSessionId&&(s[hf]=this.transportSessionId),this.lastSessionId&&(s[mf]=this.lastSessionId),this.applicationId&&(s[gf]=this.applicationId),this.appCheckToken&&(s[Bo]=this.appCheckToken),typeof location<"u"&&location.hostname&&pf.test(location.hostname)&&(s[df]=ff);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){At.forceAllow_=!0}static forceDisallow(){At.forceDisallow_=!0}static isAvailable(){return At.forceAllow_?!0:!At.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Kw()&&!qw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=sd(n),i=lf(s,pb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[fb]="t",s[bf]=e,s[Ef]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class qa{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rf(),window[ab+this.uniqueCallbackIdentifier]=e,window[lb+this.uniqueCallbackIdentifier]=n,this.myIFrame=qa.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ue("frame writing exception"),a.stack&&ue(a.stack),ue(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ue("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bf]=this.myID,e[Ef]=this.myPW,e[Tf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sf+s.length<=Cf;){const o=this.pendingSegs.shift();s=s+"&"+ub+i+"="+o.seg+"&"+hb+i+"="+o.ts+"&"+db+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(mb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ue("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const yb=16384,_b=45e3;let Yi=null;typeof MozWebSocket<"u"?Yi=MozWebSocket:typeof WebSocket<"u"&&(Yi=WebSocket);class Me{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gs(this.connId),this.stats_=Ka(n),this.connURL=Me.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[uf]=Ga,typeof location<"u"&&location.hostname&&pf.test(location.hostname)&&(o[df]=ff),n&&(o[hf]=n),s&&(o[mf]=s),i&&(o[Bo]=i),r&&(o[gf]=r),wf(e,yf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sn.set("previous_websocket_failure",!0);try{let s;ry(),this.mySock=new Yi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Yi!==null&&!Me.forceDisallow_}static previouslyFailed(){return sn.isInMemoryStorage||sn.get("previous_websocket_failure")===!0}markConnectionHealthy(){sn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ts(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=lf(n,yb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(_b))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Me.responsesRequiredToBeHealthy=2;Me.healthyTimeout=3e4;/**
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
 */class On{static get ALL_TRANSPORTS(){return[At,Me]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Me&&Me.isAvailable();let s=n&&!Me.previouslyFailed();if(e.webSocketOnly&&(n||ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Me];else{const i=this.transports_=[];for(const r of On.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);On.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}On.globalTransportInitialized_=!1;/**
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
 */const vb=6e4,wb=5e3,bb=10*1024,Eb=100*1024,io="t",Xc="d",Tb="s",Jc="r",Cb="e",Zc="o",eu="a",tu="n",nu="p",Sb="h";class xb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gs("c:"+this.id+":"),this.transportManager_=new On(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ms(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Eb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(io in e){const n=e[io];n===eu?this.upgradeIfSecondaryHealthy_():n===Jc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=is("t",e),s=is("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:eu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=is("t",e),s=is("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=is(io,e);if(Xc in e){const s=e[Xc];if(n===Sb){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===tu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Tb?this.onConnectionShutdown_(s):n===Jc?this.onReset_(s):n===Cb?jo("Server Error: "+s):n===Zc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ga!==s&&ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ms(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ms(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class xf{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class If{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Qi extends If{static getInstance(){return new Qi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Na()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const su=32,iu=768;class U{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new U("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jt(t){return t.pieces_.length-t.pieceNum_}function H(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new U(t.pieces_,e)}function Ya(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ib(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ks(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new U(e,0)}function Q(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof U)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new U(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function ve(t,e){const n=L(t),s=L(e);if(n===null)return e;if(n===s)return ve(H(t),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function kb(t,e){const n=ks(t,0),s=ks(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=_n(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Qa(t,e){if(jt(t)!==jt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function De(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(jt(t)>jt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Ab{constructor(e,n){this.errorPrefix_=n,this.parts_=ks(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_r(this.parts_[s]);Af(this)}}function Pb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_r(e),Af(t)}function Rb(t){const e=t.parts_.pop();t.byteLength_-=_r(e),t.parts_.length>0&&(t.byteLength_-=1)}function Af(t){if(t.byteLength_>iu)throw new Error(t.errorPrefix_+"has a key path longer than "+iu+" bytes ("+t.byteLength_+").");if(t.parts_.length>su)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+su+") or object contains a cycle "+tn(t))}function tn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Xa extends If{static getInstance(){return new Xa}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const rs=1e3,Nb=300*1e3,ru=30*1e3,Mb=1.3,Db=3e4,Ob="server_kill",ou=3;class Le extends xf{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Le.nextPersistentConnectionId_++,this.log_=Gs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=rs,this.maxReconnectDelay_=Nb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Qi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(re(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new xe,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Le.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ge(e,"w")){const s=un(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ru)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hy(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):jo("Unrecognized action received from server: "+re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Db&&(this.reconnectDelay_=rs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Mb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Le.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ue("getToken() completed but was canceled"):(ue("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new xb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{ge(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ob)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ge(h),l())}}}interrupt(e){ue("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ue("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ji(this.interruptReasons_)&&(this.reconnectDelay_=rs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>$a(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new U(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ue("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ou&&(this.reconnectDelay_=ru,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ue("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ou&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+tf.replace(/\./g,"-")]=1,Na()?e["framework.cordova"]=1:ld()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qi.getInstance().currentlyOnline();return ji(this.interruptReasons_)&&e}}Le.nextPersistentConnectionId_=0;Le.nextConnectionId_=0;/**
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
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
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
 */class Tr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new V(Vt,e),i=new V(Vt,n);return this.compare(s,i)!==0}minPost(){return V.MIN}}/**
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
 */let hi;class Pf extends Tr{static get __EMPTY_NODE(){return hi}static set __EMPTY_NODE(e){hi=e}compare(e,n){return _n(e.name,n.name)}isDefinedOn(e){throw Hn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(vt,hi)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,hi)}toString(){return".key"}}const nt=new Pf;/**
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
 */class di{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ce.RED,this.left=i??Ce.EMPTY_NODE,this.right=r??Ce.EMPTY_NODE}copy(e,n,s,i,r){return new ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ce.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ce.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class Lb{copy(e,n,s,i,r){return this}insert(e,n,s){return new ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ce{constructor(e,n=Ce.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ce(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new Ce(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new di(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new di(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new di(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new di(this.root_,null,this.comparator_,!0,e)}}Ce.EMPTY_NODE=new Lb;/**
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
 */function Fb(t,e){return _n(t.name,e.name)}function Ja(t,e){return _n(t,e)}/**
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
 */let Uo;function Vb(t){Uo=t}const Rf=function(t){return typeof t=="number"?"number:"+cf(t):"string:"+t},Nf=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ge(e,".sv"),"Priority must be a string or number.")}else C(t===Uo||t.isEmpty(),"priority of unexpected type.");C(t===Uo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let au;class le{static set __childrenNodeConstructor(e){au=e}static get __childrenNodeConstructor(){return au}constructor(e,n=le.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Nf(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new le(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:L(e)===".priority"?this.priorityNode_:le.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:le.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=L(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||jt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,le.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Rf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=cf(this.value_):e+=this.value_,this.lazyHash_=of(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===le.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof le.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=le.VALUE_TYPE_ORDER.indexOf(n),r=le.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}le.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Mf,Df;function jb(t){Mf=t}function Bb(t){Df=t}class Ub extends Tr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?_n(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(vt,new le("[PRIORITY-POST]",Df))}makePost(e,n){const s=Mf(e);return new V(n,new le("[PRIORITY-POST]",s))}toString(){return".priority"}}const K=new Ub;/**
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
 */const Wb=Math.log(2);class zb{constructor(e){const n=r=>parseInt(Math.log(r)/Wb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xi=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new ce(d,h.node,ce.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),g=i(f+1,c);return h=t[f],d=n?n(h):h,new ce(d,h.node,ce.BLACK,p,g)}},r=function(l){let c=null,u=null,h=t.length;const d=function(p,g){const y=h-p,w=h;h-=p;const b=i(y+1,w),_=t[y],S=n?n(_):_;f(new ce(S,_.node,g,null,b))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),y=Math.pow(2,l.count-(p+1));g?d(y,ce.BLACK):(d(y,ce.BLACK),d(y,ce.RED))}return u},o=new zb(t.length),a=r(o);return new Ce(s||e,a)};/**
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
 */let ro;const bn={};class pt{static get Default(){return C(bn&&K,"ChildrenNode.ts has not been loaded"),ro=ro||new pt({".priority":bn},{".priority":K}),ro}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=un(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ce?n:null}hasIndex(e){return Ge(this.indexSet_,e.toString())}addIndex(e,n){C(e!==nt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(V.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Xi(s,e.getCompare()):a=bn;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new pt(u,c)}addToIndexes(e,n){const s=Bi(this.indexes_,(i,r)=>{const o=un(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===bn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(V.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Xi(a,o.getCompare())}else return bn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new V(e.name,a))),l.insert(e,e.node)}});return new pt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Bi(this.indexes_,i=>{if(i===bn)return i;{const r=n.get(e.name);return r?i.remove(new V(e.name,r)):i}});return new pt(s,this.indexSet_)}}/**
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
 */let os;class N{static get EMPTY_NODE(){return os||(os=new N(new Ce(Ja),null,pt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Nf(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||os}updatePriority(e){return this.children_.isEmpty()?this:new N(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?os:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new V(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?os:this.priorityNode_;return new N(i,o,r)}}updateChild(e,n){const s=L(e);if(s===null)return n;{C(L(e)!==".priority"||jt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(H(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(K,(o,a)=>{n[o]=a.val(e),s++,r&&N.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Rf(this.getPriority().val())+":"),this.forEachChild(K,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":of(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new V(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ks?-1:0}withIndex(e){if(e===nt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new N(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===nt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(K),i=n.getIterator(K);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===nt?null:this.indexMap_.get(e.toString())}}N.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Hb extends N{constructor(){super(new Ce(Ja),N.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return N.EMPTY_NODE}isEmpty(){return!1}}const Ks=new Hb;Object.defineProperties(V,{MIN:{value:new V(Vt,N.EMPTY_NODE)},MAX:{value:new V(vt,Ks)}});Pf.__EMPTY_NODE=N.EMPTY_NODE;le.__childrenNodeConstructor=N;Vb(Ks);Bb(Ks);/**
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
 */const $b=!0;function X(t,e=null){if(t===null)return N.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new le(n,X(e))}if(!(t instanceof Array)&&$b){const n=[];let s=!1;if(he(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=X(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new V(o,l)))}}),n.length===0)return N.EMPTY_NODE;const r=Xi(n,Fb,o=>o.name,Ja);if(s){const o=Xi(n,K.getCompare());return new N(r,X(e),new pt({".priority":o},{".priority":K}))}else return new N(r,X(e),pt.Default)}else{let n=N.EMPTY_NODE;return he(t,(s,i)=>{if(Ge(t,s)&&s.substring(0,1)!=="."){const r=X(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(X(e))}}jb(X);/**
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
 */class Za extends Tr{constructor(e){super(),this.indexPath_=e,C(!F(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?_n(e.name,n.name):r}makePost(e,n){const s=X(e),i=N.EMPTY_NODE.updateChild(this.indexPath_,s);return new V(n,i)}maxPost(){const e=N.EMPTY_NODE.updateChild(this.indexPath_,Ks);return new V(vt,e)}toString(){return ks(this.indexPath_,0).join("/")}}/**
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
 */class Gb extends Tr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?_n(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const s=X(e);return new V(n,s)}toString(){return".value"}}const el=new Gb;/**
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
 */function Of(t){return{type:"value",snapshotNode:t}}function Ln(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function As(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ps(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Kb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class tl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(As(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ln(n,s)):o.trackChildChange(Ps(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(K,(i,r)=>{n.hasChild(i)||s.trackChildChange(As(i,r))}),n.isLeafNode()||n.forEachChild(K,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ps(i,r,o))}else s.trackChildChange(Ln(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?N.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Rs{constructor(e){this.indexedFilter_=new tl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rs.getStartPost_(e),this.endPost_=Rs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new V(n,s))||(s=N.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=N.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(N.EMPTY_NODE);const r=this;return n.forEachChild(K,(o,a)=>{r.matches(new V(o,a))||(i=i.updateImmediateChild(o,N.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class qb{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Rs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new V(n,s))||(s=N.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=N.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=N.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(N.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,N.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new V(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Ps(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(As(n,h));const g=a.updateImmediateChild(n,N.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ln(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(As(c.name,c.node)),r.trackChildChange(Ln(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,N.EMPTY_NODE)):e}}/**
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
 */class nl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=K}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vt}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===K}copy(){const e=new nl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Yb(t){return t.loadsAllData()?new tl(t.getIndex()):t.hasLimit()?new qb(t):new Rs(t)}function Qb(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function Xb(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Wo(t,e,n){const s=t.copy();return s.startSet_=!0,e===void 0&&(e=null),s.indexStartValue_=e,n!=null?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}function Jb(t,e,n){let s;return t.index_===nt||n?s=Wo(t,e,n):s=Wo(t,e,vt),s.startAfterSet_=!0,s}function zo(t,e,n){const s=t.copy();return s.endSet_=!0,e===void 0&&(e=null),s.indexEndValue_=e,n!==void 0?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}function Zb(t,e,n){let s;return t.index_===nt||n?s=zo(t,e,n):s=zo(t,e,Vt),s.endBeforeSet_=!0,s}function Cr(t,e){const n=t.copy();return n.index_=e,n}function lu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===K?n="$priority":t.index_===el?n="$value":t.index_===nt?n="$key":(C(t.index_ instanceof Za,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=re(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=re(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+re(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=re(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function cu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==K&&(e.i=t.index_.toString()),e}/**
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
 */class Ji extends xf{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Gs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ji.getListenId_(e,s),a={};this.listens_[o]=a;const l=lu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),un(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Ji.getListenId_(e,n);delete this.listens_[s]}get(e){const n=lu(e._queryParams),s=e._path.toString(),i=new xe;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$n(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ts(a.responseText)}catch{ge("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ge("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class eE{constructor(){this.rootNode_=N.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Zi(){return{value:null,children:new Map}}function Yn(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=L(e);t.children.has(s)||t.children.set(s,Zi());const i=t.children.get(s);e=H(e),Yn(i,e,n)}}function Ho(t,e){if(F(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(K,(s,i)=>{Yn(t,new U(s),i)}),Ho(t,e)}}else if(t.children.size>0){const n=L(e);return e=H(e),t.children.has(n)&&Ho(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function $o(t,e,n){t.value!==null?n(e,t.value):tE(t,(s,i)=>{const r=new U(e.toString()+"/"+s);$o(i,r,n)})}function tE(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class nE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&he(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const uu=10*1e3,sE=30*1e3,iE=300*1e3;class rE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new nE(e);const s=uu+(sE-uu)*Math.random();ms(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;he(e,(i,r)=>{r>0&&Ge(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ms(this.reportStats_.bind(this),Math.floor(Math.random()*2*iE))}}/**
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
 */var We;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(We||(We={}));function sl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function il(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class er{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=We.ACK_USER_WRITE,this.source=sl()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new U(e));return new er(B(),n,this.revert)}}else return C(L(this.path)===e,"operationForChild called for unrelated child."),new er(H(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ns{constructor(e,n){this.source=e,this.path=n,this.type=We.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new Ns(this.source,B()):new Ns(this.source,H(this.path))}}/**
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
 */class mn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=We.OVERWRITE}operationForChild(e){return F(this.path)?new mn(this.source,B(),this.snap.getImmediateChild(e)):new mn(this.source,H(this.path),this.snap)}}/**
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
 */class Fn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=We.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new U(e));return n.isEmpty()?null:n.value?new mn(this.source,B(),n.value):new Fn(this.source,B(),n)}else return C(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fn(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Bt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class oE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function aE(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Kb(o.childName,o.snapshotNode))}),as(t,i,"child_removed",e,s,n),as(t,i,"child_added",e,s,n),as(t,i,"child_moved",r,s,n),as(t,i,"child_changed",e,s,n),as(t,i,"value",e,s,n),i}function as(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>cE(t,a,l)),o.forEach(a=>{const l=lE(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function lE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cE(t,e,n){if(e.childName==null||n.childName==null)throw Hn("Should only compare child_ events.");const s=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Sr(t,e){return{eventCache:t,serverCache:e}}function gs(t,e,n,s){return Sr(new Bt(e,n,s),t.serverCache)}function Lf(t,e,n,s){return Sr(t.eventCache,new Bt(e,n,s))}function tr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let oo;const uE=()=>(oo||(oo=new Ce(Gw)),oo);class G{static fromObject(e){let n=new G(null);return he(e,(s,i)=>{n=n.set(new U(s),i)}),n}constructor(e,n=uE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(F(e))return null;{const s=L(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(H(e),n);return r!=null?{path:Q(new U(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=L(e),s=this.children.get(n);return s!==null?s.subtree(H(e)):new G(null)}}set(e,n){if(F(e))return new G(n,this.children);{const s=L(e),r=(this.children.get(s)||new G(null)).set(H(e),n),o=this.children.insert(s,r);return new G(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=L(e),s=this.children.get(n);if(s){const i=s.remove(H(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new G(null):new G(this.value,r)}else return this}}get(e){if(F(e))return this.value;{const n=L(e),s=this.children.get(n);return s?s.get(H(e)):null}}setTree(e,n){if(F(e))return n;{const s=L(e),r=(this.children.get(s)||new G(null)).setTree(H(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new G(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Q(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(F(e))return null;{const r=L(e),o=this.children.get(r);return o?o.findOnPath_(H(e),Q(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,s){if(F(e))return this;{this.value&&s(n,this.value);const i=L(e),r=this.children.get(i);return r?r.foreachOnPath_(H(e),Q(n,i),s):new G(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Q(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class ze{constructor(e){this.writeTree_=e}static empty(){return new ze(new G(null))}}function ys(t,e,n){if(F(e))return new ze(new G(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ve(i,e);return r=r.updateChild(o,n),new ze(t.writeTree_.set(i,r))}else{const i=new G(n),r=t.writeTree_.setTree(e,i);return new ze(r)}}}function Go(t,e,n){let s=t;return he(n,(i,r)=>{s=ys(s,Q(e,i),r)}),s}function hu(t,e){if(F(e))return ze.empty();{const n=t.writeTree_.setTree(e,new G(null));return new ze(n)}}function Ko(t,e){return vn(t,e)!=null}function vn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ve(n.path,e)):null}function du(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(K,(s,i)=>{e.push(new V(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new V(s,i.value))}),e}function Ot(t,e){if(F(e))return t;{const n=vn(t,e);return n!=null?new ze(new G(n)):new ze(t.writeTree_.subtree(e))}}function qo(t){return t.writeTree_.isEmpty()}function Vn(t,e){return Ff(B(),t.writeTree_,e)}function Ff(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Ff(Q(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Q(t,".priority"),s)),n}}/**
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
 */function xr(t,e){return Uf(e,t)}function hE(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ys(t.visibleWrites,e,n)),t.lastWriteId=s}function dE(t,e,n,s){C(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Go(t.visibleWrites,e,n),t.lastWriteId=s}function fE(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function pE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&mE(a,s.path)?i=!1:De(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return gE(t),!0;if(s.snap)t.visibleWrites=hu(t.visibleWrites,s.path);else{const a=s.children;he(a,l=>{t.visibleWrites=hu(t.visibleWrites,Q(s.path,l))})}return!0}else return!1}function mE(t,e){if(t.snap)return De(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&De(Q(t.path,n),e))return!0;return!1}function gE(t){t.visibleWrites=Vf(t.allWrites,yE,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yE(t){return t.visible}function Vf(t,e,n){let s=ze.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)De(n,o)?(a=ve(n,o),s=ys(s,a,r.snap)):De(o,n)&&(a=ve(o,n),s=ys(s,B(),r.snap.getChild(a)));else if(r.children){if(De(n,o))a=ve(n,o),s=Go(s,a,r.children);else if(De(o,n))if(a=ve(o,n),F(a))s=Go(s,B(),r.children);else{const l=un(r.children,L(a));if(l){const c=l.getChild(H(a));s=ys(s,B(),c)}}}else throw Hn("WriteRecord should have .snap or .children")}}return s}function jf(t,e,n,s,i){if(!s&&!i){const r=vn(t.visibleWrites,e);if(r!=null)return r;{const o=Ot(t.visibleWrites,e);if(qo(o))return n;if(n==null&&!Ko(o,B()))return null;{const a=n||N.EMPTY_NODE;return Vn(o,a)}}}else{const r=Ot(t.visibleWrites,e);if(!i&&qo(r))return n;if(!i&&n==null&&!Ko(r,B()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(De(c.path,e)||De(e,c.path))},a=Vf(t.allWrites,o,e),l=n||N.EMPTY_NODE;return Vn(a,l)}}}function _E(t,e,n){let s=N.EMPTY_NODE;const i=vn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(K,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ot(t.visibleWrites,e);return n.forEachChild(K,(o,a)=>{const l=Vn(Ot(r,new U(o)),a);s=s.updateImmediateChild(o,l)}),du(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ot(t.visibleWrites,e);return du(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function vE(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Q(e,n);if(Ko(t.visibleWrites,r))return null;{const o=Ot(t.visibleWrites,r);return qo(o)?i.getChild(n):Vn(o,i.getChild(n))}}function wE(t,e,n,s){const i=Q(e,n),r=vn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ot(t.visibleWrites,i);return Vn(o,s.getNode().getImmediateChild(n))}else return null}function bE(t,e){return vn(t.visibleWrites,e)}function EE(t,e,n,s,i,r,o){let a;const l=Ot(t.visibleWrites,e),c=vn(l,B());if(c!=null)a=c;else if(n!=null)a=Vn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function TE(){return{visibleWrites:ze.empty(),allWrites:[],lastWriteId:-1}}function nr(t,e,n,s){return jf(t.writeTree,t.treePath,e,n,s)}function ol(t,e){return _E(t.writeTree,t.treePath,e)}function fu(t,e,n,s){return vE(t.writeTree,t.treePath,e,n,s)}function sr(t,e){return bE(t.writeTree,Q(t.treePath,e))}function CE(t,e,n,s,i,r){return EE(t.writeTree,t.treePath,e,n,s,i,r)}function al(t,e,n){return wE(t.writeTree,t.treePath,e,n)}function Bf(t,e){return Uf(Q(t.treePath,e),t.writeTree)}function Uf(t,e){return{treePath:t,writeTree:e}}/**
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
 */class SE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ps(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,As(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ln(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ps(s,e.snapshotNode,i.oldSnap));else throw Hn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class xE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Wf=new xE;class ll{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return al(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gn(this.viewCache_),r=CE(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function IE(t){return{filter:t}}function kE(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function AE(t,e,n,s,i){const r=new SE;let o,a;if(n.type===We.OVERWRITE){const c=n;c.source.fromUser?o=Yo(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=ir(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===We.MERGE){const c=n;c.source.fromUser?o=RE(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Qo(t,e,c.path,c.children,s,i,a,r))}else if(n.type===We.ACK_USER_WRITE){const c=n;c.revert?o=DE(t,e,c.path,s,i,r):o=NE(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===We.LISTEN_COMPLETE)o=ME(t,e,n.path,s,r);else throw Hn("Unknown operation type: "+n.type);const l=r.getChanges();return PE(e,o,l),{viewCache:o,changes:l}}function PE(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=tr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Of(tr(e)))}}function zf(t,e,n,s,i,r){const o=e.eventCache;if(sr(s,n)!=null)return e;{let a,l;if(F(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=gn(e),u=c instanceof N?c:N.EMPTY_NODE,h=ol(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=nr(s,gn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=L(n);if(c===".priority"){C(jt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=fu(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=H(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=fu(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=al(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return gs(e,a,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function ir(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=L(n);if(!l.isCompleteForPath(n)&&jt(n)>1)return e;const p=H(n),y=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,p,Wf,null)}const h=Lf(e,c,l.isFullyInitialized()||F(n),u.filtersNodes()),d=new ll(i,h,r);return zf(t,h,n,i,d,a)}function Yo(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ll(i,e,r);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=gs(e,c,!0,t.filter.filtersNodes());else{const h=L(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=gs(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=H(n),f=a.getNode().getImmediateChild(h);let p;if(F(d))p=s;else{const g=u.getCompleteChild(h);g!=null?Ya(d)===".priority"&&g.getChild(kf(d)).isEmpty()?p=g:p=g.updateChild(d,s):p=N.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),h,p,d,u,o);l=gs(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function pu(t,e){return t.eventCache.isCompleteForChild(e)}function RE(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Q(n,l);pu(e,L(u))&&(a=Yo(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Q(n,l);pu(e,L(u))||(a=Yo(t,a,u,c,i,r,o))}),a}function mu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Qo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;F(n)?c=s:c=new G(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=mu(t,f,d);l=ir(t,l,new U(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),g=mu(t,p,d);l=ir(t,l,new U(h),g,i,r,o,a)}}),l}function NE(t,e,n,s,i,r,o){if(sr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(F(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ir(t,e,n,l.getNode().getChild(n),i,r,a,o);if(F(n)){let c=new G(null);return l.getNode().forEachChild(nt,(u,h)=>{c=c.set(new U(u),h)}),Qo(t,e,n,c,i,r,a,o)}else return e}else{let c=new G(null);return s.foreach((u,h)=>{const d=Q(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Qo(t,e,n,c,i,r,a,o)}}function ME(t,e,n,s,i){const r=e.serverCache,o=Lf(e,r.getNode(),r.isFullyInitialized()||F(n),r.isFiltered());return zf(t,o,n,s,Wf,i)}function DE(t,e,n,s,i,r){let o;if(sr(s,n)!=null)return e;{const a=new ll(s,e,i),l=e.eventCache.getNode();let c;if(F(n)||L(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=nr(s,gn(e));else{const h=e.serverCache.getNode();C(h instanceof N,"serverChildren would be complete if leaf node"),u=ol(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=L(n);let h=al(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,H(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,N.EMPTY_NODE,H(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=nr(s,gn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||sr(s,B())!=null,gs(e,c,o,t.filter.filtersNodes())}}/**
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
 */class OE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new tl(s.getIndex()),r=Yb(s);this.processor_=IE(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(N.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(N.EMPTY_NODE,a.getNode(),null),u=new Bt(l,o.isFullyInitialized(),i.filtersNodes()),h=new Bt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Sr(h,u),this.eventGenerator_=new oE(this.query_)}get query(){return this.query_}}function LE(t){return t.viewCache_.serverCache.getNode()}function FE(t){return tr(t.viewCache_)}function VE(t,e){const n=gn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function gu(t){return t.eventRegistrations_.length===0}function jE(t,e){t.eventRegistrations_.push(e)}function yu(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function _u(t,e,n,s){e.type===We.MERGE&&e.source.queryId!==null&&(C(gn(t.viewCache_),"We should always have a full cache before handling merges"),C(tr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=AE(t.processor_,i,e,n,s);return kE(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Hf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function BE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(K,(r,o)=>{s.push(Ln(r,o))}),n.isFullyInitialized()&&s.push(Of(n.getNode())),Hf(t,s,n.getNode(),e)}function Hf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return aE(t.eventGenerator_,e,n,i)}/**
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
 */let rr;class $f{constructor(){this.views=new Map}}function UE(t){C(!rr,"__referenceConstructor has already been defined"),rr=t}function WE(){return C(rr,"Reference.ts has not been loaded"),rr}function zE(t){return t.views.size===0}function cl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),_u(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(_u(o,e,n,s));return r}}function Gf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=nr(n,i?s:null),l=!1;a?l=!0:s instanceof N?(a=ol(n,s),l=!1):(a=N.EMPTY_NODE,l=!1);const c=Sr(new Bt(a,l,!1),new Bt(s,i,!1));return new OE(e,c)}return o}function HE(t,e,n,s,i,r){const o=Gf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),jE(o,n),BE(o,n)}function $E(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ut(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(yu(c,n,s)),gu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(yu(l,n,s)),gu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ut(t)&&r.push(new(WE())(e._repo,e._path)),{removed:r,events:o}}function Kf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Lt(t,e){let n=null;for(const s of t.views.values())n=n||VE(s,e);return n}function qf(t,e){if(e._queryParams.loadsAllData())return Ir(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Yf(t,e){return qf(t,e)!=null}function Ut(t){return Ir(t)!=null}function Ir(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let or;function GE(t){C(!or,"__referenceConstructor has already been defined"),or=t}function KE(){return C(or,"Reference.ts has not been loaded"),or}let qE=1;class vu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=TE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ul(t,e,n,s,i){return hE(t.pendingWriteTree_,e,n,s,i),i?Qn(t,new mn(sl(),e,n)):[]}function YE(t,e,n,s){dE(t.pendingWriteTree_,e,n,s);const i=G.fromObject(n);return Qn(t,new Fn(sl(),e,i))}function Pt(t,e,n=!1){const s=fE(t.pendingWriteTree_,e);if(pE(t.pendingWriteTree_,e)){let r=new G(null);return s.snap!=null?r=r.set(B(),!0):he(s.children,o=>{r=r.set(new U(o),!0)}),Qn(t,new er(s.path,r,n))}else return[]}function qs(t,e,n){return Qn(t,new mn(il(),e,n))}function QE(t,e,n){const s=G.fromObject(n);return Qn(t,new Fn(il(),e,s))}function XE(t,e){return Qn(t,new Ns(il(),e))}function JE(t,e,n){const s=hl(t,n);if(s){const i=dl(s),r=i.path,o=i.queryId,a=ve(r,e),l=new Ns(rl(o),a);return fl(t,r,l)}else return[]}function ar(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Yf(o,e))){const l=$E(o,e,n,s);zE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,f)=>Ut(f));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=tT(d);for(let p=0;p<f.length;++p){const g=f[p],y=g.query,w=Zf(t,g);t.listenProvider_.startListening(_s(y),Ms(t,y),w.hashFn,w.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(_s(e),null):c.forEach(d=>{const f=t.queryToTagMap.get(Ar(d));t.listenProvider_.stopListening(_s(d),f)}))}nT(t,c)}return a}function Qf(t,e,n,s){const i=hl(t,s);if(i!=null){const r=dl(i),o=r.path,a=r.queryId,l=ve(o,e),c=new mn(rl(a),l,n);return fl(t,o,c)}else return[]}function ZE(t,e,n,s){const i=hl(t,s);if(i){const r=dl(i),o=r.path,a=r.queryId,l=ve(o,e),c=G.fromObject(n),u=new Fn(rl(a),l,c);return fl(t,o,u)}else return[]}function Xo(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=ve(d,i);r=r||Lt(f,p),o=o||Ut(f)});let a=t.syncPointTree_.get(i);a?(o=o||Ut(a),r=r||Lt(a,B())):(a=new $f,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=N.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,p)=>{const g=Lt(p,B());g&&(r=r.updateImmediateChild(f,g))}));const c=Yf(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ar(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=sT();t.queryToTagMap.set(d,f),t.tagToQueryMap.set(f,d)}const u=xr(t.pendingWriteTree_,i);let h=HE(a,e,n,u,r,l);if(!c&&!o&&!s){const d=qf(a,e);h=h.concat(iT(t,e,d))}return h}function kr(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ve(o,e),c=Lt(a,l);if(c)return c});return jf(i,e,r,n,!0)}function eT(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=ve(c,n);s=s||Lt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Lt(i,B()):(i=new $f,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Bt(s,!0,!1):null,a=xr(t.pendingWriteTree_,e._path),l=Gf(i,e,a,r?o.getNode():N.EMPTY_NODE,r);return FE(l)}function Qn(t,e){return Xf(e,t.syncPointTree_,null,xr(t.pendingWriteTree_,B()))}function Xf(t,e,n,s){if(F(t.path))return Jf(t,e,n,s);{const i=e.get(B());n==null&&i!=null&&(n=Lt(i,B()));let r=[];const o=L(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Bf(s,o);r=r.concat(Xf(a,l,c,u))}return i&&(r=r.concat(cl(i,t,s,n))),r}}function Jf(t,e,n,s){const i=e.get(B());n==null&&i!=null&&(n=Lt(i,B()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Bf(s,o),u=t.operationForChild(o);u&&(r=r.concat(Jf(u,a,l,c)))}),i&&(r=r.concat(cl(i,t,s,n))),r}function Zf(t,e){const n=e.query,s=Ms(t,n);return{hashFn:()=>(LE(e)||N.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?JE(t,n._path,s):XE(t,n._path);{const r=Yw(i,n);return ar(t,n,null,r)}}}}function Ms(t,e){const n=Ar(e);return t.queryToTagMap.get(n)}function Ar(t){return t._path.toString()+"$"+t._queryIdentifier}function hl(t,e){return t.tagToQueryMap.get(e)}function dl(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new U(t.substr(0,e))}}function fl(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=xr(t.pendingWriteTree_,e);return cl(s,n,i,null)}function tT(t){return t.fold((e,n,s)=>{if(n&&Ut(n))return[Ir(n)];{let i=[];return n&&(i=Kf(n)),he(s,(r,o)=>{i=i.concat(o)}),i}})}function _s(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(KE())(t._repo,t._path):t}function nT(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ar(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function sT(){return qE++}function iT(t,e,n){const s=e._path,i=Ms(t,e),r=Zf(t,n),o=t.listenProvider_.startListening(_s(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)C(!Ut(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!F(c)&&u&&Ut(u))return[Ir(u).query];{let d=[];return u&&(d=d.concat(Kf(u).map(f=>f.query))),he(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(_s(u),Ms(t,u))}}return o}/**
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
 */class pl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pl(n)}node(){return this.node_}}class ml{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Q(this.path_,e);return new ml(this.syncTree_,n)}node(){return kr(this.syncTree_,this.path_)}}const rT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wu=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return oT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return aT(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},oT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},aT=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ep=function(t,e,n,s){return yl(e,new ml(n,t),s)},gl=function(t,e,n){return yl(t,new pl(e),n)};function yl(t,e,n){const s=t.getPriority().val(),i=wu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=wu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new le(a,X(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new le(i))),o.forEachChild(K,(a,l)=>{const c=yl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class _l{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Pr(t,e){let n=e instanceof U?e:new U(e),s=t,i=L(n);for(;i!==null;){const r=un(s.node.children,i)||{children:{},childCount:0};s=new _l(i,s,r),n=H(n),i=L(n)}return s}function wn(t){return t.node.value}function vl(t,e){t.node.value=e,Jo(t)}function tp(t){return t.node.childCount>0}function lT(t){return wn(t)===void 0&&!tp(t)}function Rr(t,e){he(t.node.children,(n,s)=>{e(new _l(n,t,s))})}function np(t,e,n,s){n&&e(t),Rr(t,i=>{np(i,e,!0)})}function cT(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ys(t){return new U(t.parent===null?t.name:Ys(t.parent)+"/"+t.name)}function Jo(t){t.parent!==null&&uT(t.parent,t.name,t)}function uT(t,e,n){const s=lT(n),i=Ge(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Jo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Jo(t))}/**
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
 */const hT=/[\[\].#$\/\u0000-\u001F\u007F]/,dT=/[\[\].#$\u0000-\u001F\u007F]/,ao=10*1024*1024,Nr=function(t){return typeof t=="string"&&t.length!==0&&!hT.test(t)},sp=function(t){return typeof t=="string"&&t.length!==0&&!dT.test(t)},fT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sp(t)},Ds=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Er(t)||t&&typeof t=="object"&&Ge(t,".sv")},rt=function(t,e,n,s){s&&e===void 0||Qs(dn(t,"value"),e,n)},Qs=function(t,e,n){const s=n instanceof U?new Ab(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+tn(s));if(typeof e=="function")throw new Error(t+"contains a function "+tn(s)+" with contents = "+e.toString());if(Er(e))throw new Error(t+"contains "+e.toString()+" "+tn(s));if(typeof e=="string"&&e.length>ao/3&&_r(e)>ao)throw new Error(t+"contains a string greater than "+ao+" utf8 bytes "+tn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(he(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Nr(o)))throw new Error(t+" contains an invalid key ("+o+") "+tn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Pb(s,o),Qs(t,a,s),Rb(s)}),i&&r)throw new Error(t+' contains ".value" child '+tn(s)+" in addition to actual children.")}},pT=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=ks(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Nr(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(kb);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&De(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},ip=function(t,e,n,s){const i=dn(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];he(e,(o,a)=>{const l=new U(o);if(Qs(i,a,Q(n,l)),Ya(l)===".priority"&&!Ds(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),pT(i,r)},wl=function(t,e,n){if(Er(e))throw new Error(dn(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ds(e))throw new Error(dn(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Xs=function(t,e,n,s){if(n!==void 0&&!Nr(n))throw new Error(dn(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},bl=function(t,e,n,s){if(!(s&&n===void 0)&&!sp(n))throw new Error(dn(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},mT=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bl(t,e,n,s)},Ze=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},rp=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!fT(n))throw new Error(dn(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class gT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mr(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Qa(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function op(t,e,n){Mr(t,n),ap(t,s=>Qa(s,e))}function ke(t,e,n){Mr(t,n),ap(t,s=>De(s,e)||De(e,s))}function ap(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(yT(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function yT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();an&&ue("event: "+n.toString()),qn(s)}}}/**
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
 */const lp="repo_interrupt",_T=25;class vT{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zi(),this.transactionQueueTree_=new _l,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wT(t,e,n){if(t.stats_=Ka(t.repoInfo_),t.forceRestClient_||Zw())t.server_=new Ji(t.repoInfo_,(s,i,r,o)=>{bu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Eu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Le(t.repoInfo_,e,(s,i,r,o)=>{bu(t,s,i,r,o)},s=>{Eu(t,s)},s=>{bT(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=ib(t.repoInfo_,()=>new rE(t.stats_,t.server_)),t.infoData_=new eE,t.infoSyncTree_=new vu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=qs(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),El(t,"connected",!1),t.serverSyncTree_=new vu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ke(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function cp(t){const n=t.infoData_.getNode(new U(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Js(t){return rT({timestamp:cp(t)})}function bu(t,e,n,s,i){t.dataUpdateCount++;const r=new U(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Bi(n,c=>X(c));o=ZE(t.serverSyncTree_,r,l,i)}else{const l=X(n);o=Qf(t.serverSyncTree_,r,l,i)}else if(s){const l=Bi(n,c=>X(c));o=QE(t.serverSyncTree_,r,l)}else{const l=X(n);o=qs(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=jn(t,r)),ke(t.eventQueue_,a,o)}function Eu(t,e){El(t,"connected",e),e===!1&&CT(t)}function bT(t,e){he(e,(n,s)=>{El(t,n,s)})}function El(t,e,n){const s=new U("/.info/"+e),i=X(n);t.infoData_.updateSnapshot(s,i);const r=qs(t.infoSyncTree_,s,i);ke(t.eventQueue_,s,r)}function Dr(t){return t.nextWriteId_++}function ET(t,e,n){const s=eT(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=X(i).withIndex(e._queryParams.getIndex());Xo(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=qs(t.serverSyncTree_,e._path,r);else{const a=Ms(t.serverSyncTree_,e);o=Qf(t.serverSyncTree_,e._path,r,a)}return ke(t.eventQueue_,e._path,o),ar(t.serverSyncTree_,e,n,null,!0),r},i=>(Xn(t,"get for query "+re(e)+" failed: "+i),Promise.reject(new Error(i))))}function Tl(t,e,n,s,i){Xn(t,"set",{path:e.toString(),value:n,priority:s});const r=Js(t),o=X(n,s),a=kr(t.serverSyncTree_,e),l=gl(o,a,r),c=Dr(t),u=ul(t.serverSyncTree_,e,l,c,!0);Mr(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||ge("set at "+e+" failed: "+d);const g=Pt(t.serverSyncTree_,c,!p);ke(t.eventQueue_,e,g),Wt(t,i,d,f)});const h=Sl(t,e);jn(t,h),ke(t.eventQueue_,h,[])}function TT(t,e,n,s){Xn(t,"update",{path:e.toString(),value:n});let i=!0;const r=Js(t),o={};if(he(n,(a,l)=>{i=!1,o[a]=ep(Q(e,a),X(l),t.serverSyncTree_,r)}),i)ue("update() called with empty data.  Don't do anything."),Wt(t,s,"ok",void 0);else{const a=Dr(t),l=YE(t.serverSyncTree_,e,o,a);Mr(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||ge("update at "+e+" failed: "+c);const d=Pt(t.serverSyncTree_,a,!h),f=d.length>0?jn(t,e):e;ke(t.eventQueue_,f,d),Wt(t,s,c,u)}),he(n,c=>{const u=Sl(t,Q(e,c));jn(t,u)}),ke(t.eventQueue_,e,[])}}function CT(t){Xn(t,"onDisconnectEvents");const e=Js(t),n=Zi();$o(t.onDisconnect_,B(),(i,r)=>{const o=ep(i,r,t.serverSyncTree_,e);Yn(n,i,o)});let s=[];$o(n,B(),(i,r)=>{s=s.concat(qs(t.serverSyncTree_,i,r));const o=Sl(t,i);jn(t,o)}),t.onDisconnect_=Zi(),ke(t.eventQueue_,B(),s)}function ST(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Ho(t.onDisconnect_,e),Wt(t,n,s,i)})}function Tu(t,e,n,s){const i=X(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Yn(t.onDisconnect_,e,i),Wt(t,s,r,o)})}function xT(t,e,n,s,i){const r=X(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Yn(t.onDisconnect_,e,r),Wt(t,i,o,a)})}function IT(t,e,n,s){if(ji(n)){ue("onDisconnect().update() called with empty data.  Don't do anything."),Wt(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&he(n,(o,a)=>{const l=X(a);Yn(t.onDisconnect_,Q(e,o),l)}),Wt(t,s,i,r)})}function kT(t,e,n){let s;L(e._path)===".info"?s=Xo(t.infoSyncTree_,e,n):s=Xo(t.serverSyncTree_,e,n),op(t.eventQueue_,e._path,s)}function Zo(t,e,n){let s;L(e._path)===".info"?s=ar(t.infoSyncTree_,e,n):s=ar(t.serverSyncTree_,e,n),op(t.eventQueue_,e._path,s)}function up(t){t.persistentConnection_&&t.persistentConnection_.interrupt(lp)}function AT(t){t.persistentConnection_&&t.persistentConnection_.resume(lp)}function Xn(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ue(n,...e)}function Wt(t,e,n,s){e&&qn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function PT(t,e,n,s,i,r){Xn(t,"transaction on "+e);const o={path:e,update:n,onComplete:s,status:null,order:rf(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Cl(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Qs("transaction failed: Data returned ",l,o.path),o.status=0;const c=Pr(t.transactionQueueTree_,e),u=wn(c)||[];u.push(o),vl(c,u);let h;typeof l=="object"&&l!==null&&Ge(l,".priority")?(h=un(l,".priority"),C(Ds(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(kr(t.serverSyncTree_,e)||N.EMPTY_NODE).getPriority().val();const d=Js(t),f=X(l,h),p=gl(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=p,o.currentWriteId=Dr(t);const g=ul(t.serverSyncTree_,e,p,o.currentWriteId,o.applyLocally);ke(t.eventQueue_,e,g),Or(t,t.transactionQueueTree_)}}function Cl(t,e,n){return kr(t.serverSyncTree_,e,n)||N.EMPTY_NODE}function Or(t,e=t.transactionQueueTree_){if(e||Lr(t,e),wn(e)){const n=dp(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&RT(t,Ys(e),n)}else tp(e)&&Rr(e,n=>{Or(t,n)})}function RT(t,e,n){const s=n.map(c=>c.currentWriteId),i=Cl(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ve(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Xn(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Pt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Lr(t,Pr(t.transactionQueueTree_,e)),Or(t,t.transactionQueueTree_),ke(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)qn(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ge("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}jn(t,e)}},o)}function jn(t,e){const n=hp(t,e),s=Ys(n),i=dp(t,n);return NT(t,i,s),s}function NT(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ve(n,l.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Pt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=_T)u=!0,h="maxretry",i=i.concat(Pt(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Cl(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Qs("transaction failed: Data returned ",f,l.path);let p=X(f);typeof f=="object"&&f!=null&&Ge(f,".priority")||(p=p.updatePriority(d.getPriority()));const y=l.currentWriteId,w=Js(t),b=gl(p,d,w);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=b,l.currentWriteId=Dr(t),o.splice(o.indexOf(y),1),i=i.concat(ul(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(Pt(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(Pt(t.serverSyncTree_,l.currentWriteId,!0))}ke(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,(function(d){setTimeout(d,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Lr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)qn(s[a]);Or(t,t.transactionQueueTree_)}function hp(t,e){let n,s=t.transactionQueueTree_;for(n=L(e);n!==null&&wn(s)===void 0;)s=Pr(s,n),e=H(e),n=L(e);return s}function dp(t,e){const n=[];return fp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function fp(t,e,n){const s=wn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Rr(e,i=>{fp(t,i,n)})}function Lr(t,e){const n=wn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,vl(e,n.length>0?n:void 0)}Rr(e,s=>{Lr(t,s)})}function Sl(t,e){const n=Ys(hp(t,e)),s=Pr(t.transactionQueueTree_,e);return cT(s,i=>{lo(t,i)}),lo(t,s),np(s,i=>{lo(t,i)}),n}function lo(t,e){const n=wn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Pt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?vl(e,void 0):n.length=r+1,ke(t.eventQueue_,Ys(e),i);for(let o=0;o<s.length;o++)qn(s[o])}}/**
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
 */function MT(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function DT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ge(`Invalid query segment '${n}' in query '${t}'`)}return e}const ea=function(t,e){const n=OT(t),s=n.namespace;n.domain==="firebase.com"&&it(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&it("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Hw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new vf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new U(n.pathString)}},OT=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=MT(t.substring(u,h)));const d=DT(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),n=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Cu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",LT=(function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Cu.charAt(n%64),n=Math.floor(n/64);C(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Cu.charAt(e[i]);return C(o.length===20,"nextPushId: Length should be 20."),o}})();/**
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
 */class pp{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+re(this.snapshot.exportVal())}}class mp{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class xl{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class FT{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new xe;return ST(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ze("OnDisconnect.remove",this._path);const e=new xe;return Tu(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ze("OnDisconnect.set",this._path),rt("OnDisconnect.set",e,this._path,!1);const n=new xe;return Tu(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Ze("OnDisconnect.setWithPriority",this._path),rt("OnDisconnect.setWithPriority",e,this._path,!1),wl("OnDisconnect.setWithPriority",n);const s=new xe;return xT(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Ze("OnDisconnect.update",this._path),ip("OnDisconnect.update",e,this._path);const n=new xe;return IT(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Ae{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return F(this._path)?null:Ya(this._path)}get ref(){return new Ke(this._repo,this._path)}get _queryIdentifier(){const e=cu(this._queryParams),n=$a(e);return n==="{}"?"default":n}get _queryObject(){return cu(this._queryParams)}isEqual(e){if(e=Y(e),!(e instanceof Ae))return!1;const n=this._repo===e._repo,s=Qa(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ib(this._path)}}function Fr(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Kt(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===nt){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Vt)throw new Error(s);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==vt)throw new Error(s);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===K){if(e!=null&&!Ds(e)||n!=null&&!Ds(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(C(t.getIndex()instanceof Za||t.getIndex()===el,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Vr(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Ke extends Ae{constructor(e,n){super(e,n,new nl,!1)}get parent(){const e=kf(this._path);return e===null?null:new Ke(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new U(e),s=Bn(this.ref,e);return new yn(this._node.getChild(n),s,K)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new yn(i,Bn(this.ref,s),K)))}hasChild(e){const n=new U(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function oe(t,e){return t=Y(t),t._checkNotDeleted("ref"),e!==void 0?Bn(t._root,e):t._root}function yP(t,e){t=Y(t),t._checkNotDeleted("refFromURL");const n=ea(e,t._repo.repoInfo_.nodeAdmin);rp("refFromURL",n);const s=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&s.host!==t._repo.repoInfo_.host&&it("refFromURL: Host name does not match the current database: (found "+s.host+" but expected "+t._repo.repoInfo_.host+")"),oe(t,n.path.toString())}function Bn(t,e){return t=Y(t),L(t._path)===null?mT("child","path",e,!1):bl("child","path",e,!1),new Ke(t._repo,Q(t._path,e))}function VT(t){return t=Y(t),new FT(t._repo,t._path)}function gp(t,e){t=Y(t),Ze("push",t._path),rt("push",e,t._path,!0);const n=cp(t._repo),s=LT(n),i=Bn(t,s),r=Bn(t,s);let o;return e!=null?o=jr(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function yp(t){return Ze("remove",t._path),jr(t,null)}function jr(t,e){t=Y(t),Ze("set",t._path),rt("set",e,t._path,!1);const n=new xe;return Tl(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function _P(t,e){t=Y(t),Ze("setPriority",t._path),wl("setPriority",e);const n=new xe;return Tl(t._repo,Q(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function vP(t,e,n){if(Ze("setWithPriority",t._path),rt("setWithPriority",e,t._path,!1),wl("setWithPriority",n),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const s=new xe;return Tl(t._repo,t._path,e,n,s.wrapCallback(()=>{})),s.promise}function Un(t,e){ip("update",e,t._path);const n=new xe;return TT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Il(t){t=Y(t);const e=new xl(()=>{}),n=new Zs(e);return ET(t._repo,t,n).then(s=>new yn(s,new Ke(t._repo,t._path),t._queryParams.getIndex()))}class Zs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new pp("value",this,new yn(e.snapshotNode,new Ke(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mp(this,e,n):null}matches(e){return e instanceof Zs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Br{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mp(this,e,n):null}createEvent(e,n){C(e.childName!=null,"Child events should have a childName.");const s=Bn(new Ke(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new pp(e.type,this,new yn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Br?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ei(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Zo(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new xl(n,r||void 0),a=e==="value"?new Zs(o):new Br(e,o);return kT(t._repo,t,a),()=>Zo(t._repo,t,a)}function qt(t,e,n,s){return ei(t,"value",e,n,s)}function wP(t,e,n,s){return ei(t,"child_added",e,n,s)}function bP(t,e,n,s){return ei(t,"child_changed",e,n,s)}function EP(t,e,n,s){return ei(t,"child_moved",e,n,s)}function TP(t,e,n,s){return ei(t,"child_removed",e,n,s)}function CP(t,e,n){let s=null;const i=n?new xl(n):null;e==="value"?s=new Zs(i):e&&(s=new Br(e,i)),Zo(t._repo,t,s)}class qe{}class _p extends qe{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){rt("endAt",this._value,e._path,!0);const n=zo(e._queryParams,this._value,this._key);if(Vr(n),Kt(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ae(e._repo,e._path,n,e._orderByCalled)}}function SP(t,e){return Xs("endAt","key",e),new _p(t,e)}class jT extends qe{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){rt("endBefore",this._value,e._path,!1);const n=Zb(e._queryParams,this._value,this._key);if(Vr(n),Kt(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ae(e._repo,e._path,n,e._orderByCalled)}}function xP(t,e){return Xs("endBefore","key",e),new jT(t,e)}class vp extends qe{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){rt("startAt",this._value,e._path,!0);const n=Wo(e._queryParams,this._value,this._key);if(Vr(n),Kt(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ae(e._repo,e._path,n,e._orderByCalled)}}function IP(t=null,e){return Xs("startAt","key",e),new vp(t,e)}class BT extends qe{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAfter"}_apply(e){rt("startAfter",this._value,e._path,!1);const n=Jb(e._queryParams,this._value,this._key);if(Vr(n),Kt(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new Ae(e._repo,e._path,n,e._orderByCalled)}}function kP(t,e){return Xs("startAfter","key",e),new BT(t,e)}class UT extends qe{constructor(e){super(),this._limit=e,this.type="limitToFirst"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ae(e._repo,e._path,Qb(e._queryParams,this._limit),e._orderByCalled)}}function AP(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new UT(t)}class WT extends qe{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ae(e._repo,e._path,Xb(e._queryParams,this._limit),e._orderByCalled)}}function PP(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new WT(t)}class zT extends qe{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){Fr(e,"orderByChild");const n=new U(this._path);if(F(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const s=new Za(n),i=Cr(e._queryParams,s);return Kt(i),new Ae(e._repo,e._path,i,!0)}}function RP(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return bl("orderByChild","path",t,!1),new zT(t)}class HT extends qe{constructor(){super(...arguments),this.type="orderByKey"}_apply(e){Fr(e,"orderByKey");const n=Cr(e._queryParams,nt);return Kt(n),new Ae(e._repo,e._path,n,!0)}}function NP(){return new HT}class $T extends qe{constructor(){super(...arguments),this.type="orderByPriority"}_apply(e){Fr(e,"orderByPriority");const n=Cr(e._queryParams,K);return Kt(n),new Ae(e._repo,e._path,n,!0)}}function MP(){return new $T}class GT extends qe{constructor(){super(...arguments),this.type="orderByValue"}_apply(e){Fr(e,"orderByValue");const n=Cr(e._queryParams,el);return Kt(n),new Ae(e._repo,e._path,n,!0)}}function DP(){return new GT}class KT extends qe{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(rt("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new _p(this._value,this._key)._apply(new vp(this._value,this._key)._apply(e))}}function OP(t,e){return Xs("equalTo","key",e),new KT(t,e)}function LP(t,...e){let n=Y(t);for(const s of e)n=s._apply(n);return n}UE(Ke);GE(Ke);/**
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
 */const qT="FIREBASE_DATABASE_EMULATOR_HOST",ta={};let wp=!1;function YT(t,e,n,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Bs(r);t.repoInfo_=new vf(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function bp(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||it("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ue("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ea(r,i),a=o.repoInfo,l,c;typeof process<"u"&&$c&&(c=$c[qT]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=ea(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Mn(Mn.OWNER):new tb(t.name,t.options,e);rp("Invalid Firebase Database URL",o),F(o.path)||it("Database URL must point to the root of a Firebase Database (not including a child path).");const h=XT(a,t,u,new eb(t,n));return new ZT(h,t)}function QT(t,e){const n=ta[e];(!n||n[t.key]!==t)&&it(`Database ${e}(${t.repoInfo_}) has already been deleted.`),up(t),delete n[t.key]}function XT(t,e,n,s){let i=ta[e.name];i||(i={},ta[e.name]=i);let r=i[t.toURLString()];return r&&it("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new vT(t,wp,n,s),i[t.toURLString()]=r,r}function JT(t){wp=t}class ZT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ke(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(QT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&it("Cannot call "+e+" on a deleted database.")}}function Ep(){On.IS_TRANSPORT_INITIALIZED&&ge("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function FP(){Ep(),At.forceDisallow()}function VP(){Ep(),Me.forceDisallow(),At.forceAllow()}function e0(t=pd(),e){const n=Oa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ey("database");s&&t0(n,...s)}return n}function t0(t,e,n,s={}){t=Y(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&hn(s,r.repoInfo_.emulatorOptions))return;it("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&it('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Mn(Mn.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:ty(s.mockUserToken,t.app.options.projectId);o=new Mn(a)}Bs(e)&&ud(e),YT(r,i,s,o)}function jP(t){t=Y(t),t._checkNotDeleted("goOffline"),up(t._repo)}function BP(t){t=Y(t),t._checkNotDeleted("goOnline"),AT(t._repo)}function UP(t,e){af(t,e)}/**
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
 */function n0(t){nf(Gn),Dn(new gt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return bp(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Dt(Gc,Kc,t),Dt(Gc,Kc,"esm2020")}/**
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
 */const s0={".sv":"timestamp"};function Su(){return s0}function WP(t){return{".sv":{increment:t}}}/**
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
 */class i0{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function zP(t,e,n){if(t=Y(t),Ze("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const s=(n==null?void 0:n.applyLocally)??!0,i=new xe,r=(a,l,c)=>{let u=null;a?i.reject(a):(u=new yn(c,new Ke(t._repo,t._path),K),i.resolve(new i0(l,u)))},o=qt(t,()=>{});return PT(t._repo,t._path,e,r,o,s),i.promise}Le.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Le.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};const HP=function(t){const e=Le.prototype.put;return Le.prototype.put=function(n,s,i,r){r!==void 0&&(r=t()),e.call(this,n,s,i,r)},function(){Le.prototype.put=e}},$P=function(t){JT(t)};/**
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
 */function GP({app:t,url:e,version:n,customAuthImpl:s,customAppCheckImpl:i,nodeAdmin:r=!1}){nf(n);const o=new hd("database-standalone"),a=new Ao("auth-internal",o);let l;return i&&(l=new Ao("app-check-internal",o),l.setComponent(new gt("app-check-internal",()=>i,"PRIVATE"))),a.setComponent(new gt("auth-internal",()=>s,"PRIVATE")),bp(t,a,l,e,r)}n0();const r0={VITE_FIREBASE_API_KEY:"AIzaSyD1b7Z3zJeuvvo6iMWQxvFHdbClCFSlSuI",VITE_FIREBASE_APP_ID:"1:889817277774:web:3912f8166047545a8f2a1f",VITE_FIREBASE_AUTH_DOMAIN:"omnibins.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://omnibins-default-rtdb.firebaseio.com",VITE_FIREBASE_MEASUREMENT_ID:"G-V9BW9RGDNQ",VITE_FIREBASE_MESSAGING_SENDER_ID:"889817277774",VITE_FIREBASE_PROJECT_ID:"omnibins",VITE_FIREBASE_STORAGE_BUCKET:"omnibins.firebasestorage.app"},Et=r0,kl={apiKey:Et.VITE_FIREBASE_API_KEY,authDomain:Et.VITE_FIREBASE_AUTH_DOMAIN,projectId:Et.VITE_FIREBASE_PROJECT_ID,databaseURL:Et.VITE_FIREBASE_DATABASE_URL,storageBucket:Et.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:Et.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:Et.VITE_FIREBASE_APP_ID,measurementId:Et.VITE_FIREBASE_MEASUREMENT_ID},xu=Object.entries(kl).filter(([,t])=>!t).map(([t])=>t);if(xu.length>0)throw new Error(`Firebase config is incomplete. Missing values: ${xu.join(", ")}. Copy .env.example to .env or .env.local and fill in your Firebase web app values.`);const Tp=La(kl),Ft=ef(Tp),de=e0(Tp);new ht;function o0(t){const e=oe(de,`users/${t}`),n=oe(de,".info/connected");let s=!1;const i=qt(n,async r=>{if(!(r.val()!==!0||s))try{if(await VT(e).update({onlineStatus:"offline",lastSeen:Su()}),s)return;await Un(e,{onlineStatus:"online"})}catch(o){console.error("Failed to register user presence:",o)}});return()=>{s=!0,i(),Un(e,{onlineStatus:"offline",lastSeen:Su()}).catch(r=>console.error("Failed to clear user presence:",r))}}const a0=p_().find(t=>t.name==="user-creation")??La(kl,"user-creation"),Cp=ef(a0);async function KP(t,e){return Tv(Cp,t,e)}async function qP(){await Lo(Cp)}function l0(t){const e=oe(de,"bins");return qt(e,n=>{const s=n.val(),i=s?Object.entries(s).map(([r,o])=>({id:r,...typeof o=="object"&&o!==null?o:{}})):[];t(i)})}function YP(t){const e=oe(de,"collections");return qt(e,n=>{const s=n.val(),i=s?Object.entries(s).map(([r,o])=>({id:r,...typeof o=="object"&&o!==null?o:{}})):[];t(i)})}function c0(t){const e=["sensor_data","sensor_data1","sensor_data2","sensor_data3","sensor_data4"],n=new Map,s=()=>{const r=e.flatMap(o=>n.get(o)??[]);t(r)},i=e.map(r=>qt(oe(de,r),o=>{const a=o.val();n.set(r,a&&typeof a=="object"?Object.entries(a).map(([l,c])=>({id:l,branch:r,...typeof c=="object"&&c!==null?c:{}})):[]),s()}));return()=>{i.forEach(r=>r())}}function u0(t,e){const n=oe(de,"alerts");return qt(n,s=>{const i=s.val(),r=i?Object.entries(i).map(([o,a])=>({id:o,...typeof a=="object"&&a!==null?a:{}})):[];t(r)},s=>{e?e(s):console.error("subscribeAlerts error:",s)})}function h0(t,e){const n=oe(de,"reports");return qt(n,s=>{const i=s.val(),r=i?Object.entries(i).map(([o,a])=>({id:o,...typeof a=="object"&&a!==null?a:{}})):[];t(r)},s=>{e?e(s):console.error("subscribeReports error:",s)})}async function QP(t,e){return Cv(Ft,t,e)}async function XP(){const t=Ft.currentUser;return t?t.getIdToken():null}async function JP(t){const e=oe(de,"users"),n=gp(e),s=new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),i={name:t.name,email:t.email||"",phone:t.phone||"",team:t.team,role:t.role||"staff",department:t.team||"Operations",status:t.status||"active",joinedDate:s,lastLogin:s,createdAt:new Date().toISOString()};return await jr(n,i),{id:n.key,...i}}async function d0(t,e){await Un(oe(de,`users/${t}`),e)}async function ZP(t){await yp(oe(de,`users/${t}`))}async function f0(){const t=oe(de,"users"),n=(await Il(t)).val();return n?Object.entries(n).map(([s,i])=>({id:s,...typeof i=="object"&&i!==null?i:{}})):[]}async function lr(t){return t?(await f0()).find(n=>String(n.email||"").toLowerCase()===t.toLowerCase())??null:null}async function eR(t){const e=await lr(t);return e?String(e.role||"").trim().toLowerCase()==="admin":!1}async function tR(t){const e=oe(de,"teams"),n=gp(e),s=new Date().toISOString(),i={name:t.name,workerIds:t.workerIds,createdAt:s};await jr(n,i);const r={};return t.workerIds.forEach(o=>{r[`users/${o}/team`]=t.name}),await Un(oe(de),r),{id:n.key,...i}}async function nR(){const t=oe(de,"teams"),n=(await Il(t)).val();return n?Object.entries(n).map(([s,i])=>({id:s,...typeof i=="object"&&i!==null?i:{}})):[]}async function sR(t,e){if(!t||!e.length)return;const n=oe(de,`teams/${t}`),i=(await Il(n)).val()??{},r=Array.isArray(i.workerIds)?i.workerIds.map(c=>String(c)):[],o=e.map(c=>String(c)).filter(c=>c&&!r.includes(c));if(!o.length)return;const a=[...r,...o];await Un(n,{workerIds:a});const l={};o.forEach(c=>{l[`users/${c}/team`]=i.name??""}),Object.keys(l).length>0&&await Un(oe(de),l)}async function iR(t){t&&await yp(oe(de,`teams/${t}`))}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m0=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),Iu=t=>{const e=m0(t);return e.charAt(0).toUpperCase()+e.slice(1)},Sp=(...t)=>t.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=v.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:i="",children:r,iconNode:o,...a},l)=>v.createElement("svg",{ref:l,...g0,width:e,height:e,stroke:t,strokeWidth:s?Number(n)*24/Number(e):n,className:Sp("lucide",i),...a},[...o.map(([c,u])=>v.createElement(c,u)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(t,e)=>{const n=v.forwardRef(({className:s,...i},r)=>v.createElement(y0,{ref:r,iconNode:e,className:Sp(`lucide-${p0(Iu(t))}`,`lucide-${t}`,s),...i}));return n.displayName=Iu(t),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],v0=J("activity",_0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],b0=J("bell",w0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],T0=J("calendar",E0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],S0=J("chart-column",C0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],ku=J("circle-alert",x0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],k0=J("clock",I0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],P0=J("droplet",A0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],N0=J("layout-dashboard",R0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],D0=J("log-out",M0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],L0=J("mail",O0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],V0=J("map",F0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],B0=J("menu",j0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],xp=J("pen",U0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],z0=J("phone",W0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],$0=J("save",H0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ip=J("settings",G0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Ur=J("trash-2",K0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],Y0=J("upload",q0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],na=J("user",Q0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],kp=J("users",X0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],Z0=J("wind",J0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],tC=J("wrench",eC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ap=J("x",nC),Au=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Pu=ed,sC=(t,e)=>n=>{var s;if((e==null?void 0:e.variants)==null)return Pu(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:r}=e,o=Object.keys(i).map(c=>{const u=n==null?void 0:n[c],h=r==null?void 0:r[c];if(u===null)return null;const d=Au(u)||Au(h);return i[c][d]}),a=n&&Object.entries(n).reduce((c,u)=>{let[h,d]=u;return d===void 0||(c[h]=d),c},{}),l=e==null||(s=e.compoundVariants)===null||s===void 0?void 0:s.reduce((c,u)=>{let{class:h,className:d,...f}=u;return Object.entries(f).every(p=>{let[g,y]=p;return Array.isArray(y)?y.includes({...r,...a}[g]):{...r,...a}[g]===y})?[...c,h,d]:c},[]);return Pu(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)},Al="-",iC=t=>{const e=oC(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=t;return{getClassGroupId:o=>{const a=o.split(Al);return a[0]===""&&a.length!==1&&a.shift(),Pp(a,e)||rC(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&s[o]?[...l,...s[o]]:l}}},Pp=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],s=e.nextPart.get(n),i=s?Pp(t.slice(1),s):void 0;if(i)return i;if(e.validators.length===0)return;const r=t.join(Al);return(o=e.validators.find(({validator:a})=>a(r)))==null?void 0:o.classGroupId},Ru=/^\[(.+)\]$/,rC=t=>{if(Ru.test(t)){const e=Ru.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},oC=t=>{const{theme:e,classGroups:n}=t,s={nextPart:new Map,validators:[]};for(const i in n)sa(n[i],s,i,e);return s},sa=(t,e,n,s)=>{t.forEach(i=>{if(typeof i=="string"){const r=i===""?e:Nu(e,i);r.classGroupId=n;return}if(typeof i=="function"){if(aC(i)){sa(i(s),e,n,s);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([r,o])=>{sa(o,Nu(e,r),n,s)})})},Nu=(t,e)=>{let n=t;return e.split(Al).forEach(s=>{n.nextPart.has(s)||n.nextPart.set(s,{nextPart:new Map,validators:[]}),n=n.nextPart.get(s)}),n},aC=t=>t.isThemeGetter,lC=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,s=new Map;const i=(r,o)=>{n.set(r,o),e++,e>t&&(e=0,s=n,n=new Map)};return{get(r){let o=n.get(r);if(o!==void 0)return o;if((o=s.get(r))!==void 0)return i(r,o),o},set(r,o){n.has(r)?n.set(r,o):i(r,o)}}},ia="!",ra=":",cC=ra.length,uC=t=>{const{prefix:e,experimentalParseClassName:n}=t;let s=i=>{const r=[];let o=0,a=0,l=0,c;for(let p=0;p<i.length;p++){let g=i[p];if(o===0&&a===0){if(g===ra){r.push(i.slice(l,p)),l=p+cC;continue}if(g==="/"){c=p;continue}}g==="["?o++:g==="]"?o--:g==="("?a++:g===")"&&a--}const u=r.length===0?i:i.substring(l),h=hC(u),d=h!==u,f=c&&c>l?c-l:void 0;return{modifiers:r,hasImportantModifier:d,baseClassName:h,maybePostfixModifierPosition:f}};if(e){const i=e+ra,r=s;s=o=>o.startsWith(i)?r(o.substring(i.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:o,maybePostfixModifierPosition:void 0}}if(n){const i=s;s=r=>n({className:r,parseClassName:i})}return s},hC=t=>t.endsWith(ia)?t.substring(0,t.length-1):t.startsWith(ia)?t.substring(1):t,dC=t=>{const e=Object.fromEntries(t.orderSensitiveModifiers.map(s=>[s,!0]));return s=>{if(s.length<=1)return s;const i=[];let r=[];return s.forEach(o=>{o[0]==="["||e[o]?(i.push(...r.sort(),o),r=[]):r.push(o)}),i.push(...r.sort()),i}},fC=t=>({cache:lC(t.cacheSize),parseClassName:uC(t),sortModifiers:dC(t),...iC(t)}),pC=/\s+/,mC=(t,e)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:i,sortModifiers:r}=e,o=[],a=t.trim().split(pC);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{isExternal:h,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:g}=n(u);if(h){l=u+(l.length>0?" "+l:l);continue}let y=!!g,w=s(y?p.substring(0,g):p);if(!w){if(!y){l=u+(l.length>0?" "+l:l);continue}if(w=s(p),!w){l=u+(l.length>0?" "+l:l);continue}y=!1}const b=r(d).join(":"),_=f?b+ia:b,S=_+w;if(o.includes(S))continue;o.push(S);const E=i(w,y);for(let M=0;M<E.length;++M){const j=E[M];o.push(_+j)}l=u+(l.length>0?" "+l:l)}return l};function gC(){let t=0,e,n,s="";for(;t<arguments.length;)(e=arguments[t++])&&(n=Rp(e))&&(s&&(s+=" "),s+=n);return s}const Rp=t=>{if(typeof t=="string")return t;let e,n="";for(let s=0;s<t.length;s++)t[s]&&(e=Rp(t[s]))&&(n&&(n+=" "),n+=e);return n};function yC(t,...e){let n,s,i,r=o;function o(l){const c=e.reduce((u,h)=>h(u),t());return n=fC(c),s=n.cache.get,i=n.cache.set,r=a,a(l)}function a(l){const c=s(l);if(c)return c;const u=mC(l,n);return i(l,u),u}return function(){return r(gC.apply(null,arguments))}}const se=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},Np=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Mp=/^\((?:(\w[\w-]*):)?(.+)\)$/i,_C=/^\d+\/\d+$/,vC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,wC=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,bC=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,EC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,TC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,En=t=>_C.test(t),O=t=>!!t&&!Number.isNaN(Number(t)),Tt=t=>!!t&&Number.isInteger(Number(t)),co=t=>t.endsWith("%")&&O(t.slice(0,-1)),ut=t=>vC.test(t),CC=()=>!0,SC=t=>wC.test(t)&&!bC.test(t),Dp=()=>!1,xC=t=>EC.test(t),IC=t=>TC.test(t),kC=t=>!I(t)&&!k(t),AC=t=>Jn(t,Fp,Dp),I=t=>Np.test(t),Xt=t=>Jn(t,Vp,SC),uo=t=>Jn(t,DC,O),Mu=t=>Jn(t,Op,Dp),PC=t=>Jn(t,Lp,IC),fi=t=>Jn(t,jp,xC),k=t=>Mp.test(t),ls=t=>Zn(t,Vp),RC=t=>Zn(t,OC),Du=t=>Zn(t,Op),NC=t=>Zn(t,Fp),MC=t=>Zn(t,Lp),pi=t=>Zn(t,jp,!0),Jn=(t,e,n)=>{const s=Np.exec(t);return s?s[1]?e(s[1]):n(s[2]):!1},Zn=(t,e,n=!1)=>{const s=Mp.exec(t);return s?s[1]?e(s[1]):n:!1},Op=t=>t==="position"||t==="percentage",Lp=t=>t==="image"||t==="url",Fp=t=>t==="length"||t==="size"||t==="bg-size",Vp=t=>t==="length",DC=t=>t==="number",OC=t=>t==="family-name",jp=t=>t==="shadow",LC=()=>{const t=se("color"),e=se("font"),n=se("text"),s=se("font-weight"),i=se("tracking"),r=se("leading"),o=se("breakpoint"),a=se("container"),l=se("spacing"),c=se("radius"),u=se("shadow"),h=se("inset-shadow"),d=se("text-shadow"),f=se("drop-shadow"),p=se("blur"),g=se("perspective"),y=se("aspect"),w=se("ease"),b=se("animate"),_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],S=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],E=()=>[...S(),k,I],M=()=>["auto","hidden","clip","visible","scroll"],j=()=>["auto","contain","none"],T=()=>[k,I,l],D=()=>[En,"full","auto",...T()],R=()=>[Tt,"none","subgrid",k,I],z=()=>["auto",{span:["full",Tt,k,I]},Tt,k,I],Z=()=>[Tt,"auto",k,I],Pe=()=>["auto","min","max","fr",k,I],Te=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],me=()=>["start","end","center","stretch","center-safe","end-safe"],te=()=>["auto",...T()],wt=()=>[En,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...T()],x=()=>[t,k,I],ye=()=>[...S(),Du,Mu,{position:[k,I]}],Ye=()=>["no-repeat",{repeat:["","x","y","space","round"]}],ct=()=>["auto","cover","contain",NC,AC,{size:[k,I]}],ss=()=>[co,ls,Xt],_e=()=>["","none","full",c,k,I],Se=()=>["",O,ls,Xt],ri=()=>["solid","dashed","dotted","double"],rc=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ae=()=>[O,co,Du,Mu],oc=()=>["","none",p,k,I],oi=()=>["none",O,k,I],ai=()=>["none",O,k,I],Kr=()=>[O,k,I],li=()=>[En,"full",...T()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ut],breakpoint:[ut],color:[CC],container:[ut],"drop-shadow":[ut],ease:["in","out","in-out"],font:[kC],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ut],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ut],shadow:[ut],spacing:["px",O],text:[ut],"text-shadow":[ut],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",En,I,k,y]}],container:["container"],columns:[{columns:[O,I,k,a]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:E()}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:D()}],"inset-x":[{"inset-x":D()}],"inset-y":[{"inset-y":D()}],start:[{start:D()}],end:[{end:D()}],top:[{top:D()}],right:[{right:D()}],bottom:[{bottom:D()}],left:[{left:D()}],visibility:["visible","invisible","collapse"],z:[{z:[Tt,"auto",k,I]}],basis:[{basis:[En,"full","auto",a,...T()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[O,En,"auto","initial","none",I]}],grow:[{grow:["",O,k,I]}],shrink:[{shrink:["",O,k,I]}],order:[{order:[Tt,"first","last","none",k,I]}],"grid-cols":[{"grid-cols":R()}],"col-start-end":[{col:z()}],"col-start":[{"col-start":Z()}],"col-end":[{"col-end":Z()}],"grid-rows":[{"grid-rows":R()}],"row-start-end":[{row:z()}],"row-start":[{"row-start":Z()}],"row-end":[{"row-end":Z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Pe()}],"auto-rows":[{"auto-rows":Pe()}],gap:[{gap:T()}],"gap-x":[{"gap-x":T()}],"gap-y":[{"gap-y":T()}],"justify-content":[{justify:[...Te(),"normal"]}],"justify-items":[{"justify-items":[...me(),"normal"]}],"justify-self":[{"justify-self":["auto",...me()]}],"align-content":[{content:["normal",...Te()]}],"align-items":[{items:[...me(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...me(),{baseline:["","last"]}]}],"place-content":[{"place-content":Te()}],"place-items":[{"place-items":[...me(),"baseline"]}],"place-self":[{"place-self":["auto",...me()]}],p:[{p:T()}],px:[{px:T()}],py:[{py:T()}],ps:[{ps:T()}],pe:[{pe:T()}],pt:[{pt:T()}],pr:[{pr:T()}],pb:[{pb:T()}],pl:[{pl:T()}],m:[{m:te()}],mx:[{mx:te()}],my:[{my:te()}],ms:[{ms:te()}],me:[{me:te()}],mt:[{mt:te()}],mr:[{mr:te()}],mb:[{mb:te()}],ml:[{ml:te()}],"space-x":[{"space-x":T()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":T()}],"space-y-reverse":["space-y-reverse"],size:[{size:wt()}],w:[{w:[a,"screen",...wt()]}],"min-w":[{"min-w":[a,"screen","none",...wt()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[o]},...wt()]}],h:[{h:["screen",...wt()]}],"min-h":[{"min-h":["screen","none",...wt()]}],"max-h":[{"max-h":["screen",...wt()]}],"font-size":[{text:["base",n,ls,Xt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,k,uo]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",co,I]}],"font-family":[{font:[RC,I,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,k,I]}],"line-clamp":[{"line-clamp":[O,"none",k,uo]}],leading:[{leading:[r,...T()]}],"list-image":[{"list-image":["none",k,I]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",k,I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:x()}],"text-color":[{text:x()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ri(),"wavy"]}],"text-decoration-thickness":[{decoration:[O,"from-font","auto",k,Xt]}],"text-decoration-color":[{decoration:x()}],"underline-offset":[{"underline-offset":[O,"auto",k,I]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:T()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",k,I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",k,I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ye()}],"bg-repeat":[{bg:Ye()}],"bg-size":[{bg:ct()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Tt,k,I],radial:["",k,I],conic:[Tt,k,I]},MC,PC]}],"bg-color":[{bg:x()}],"gradient-from-pos":[{from:ss()}],"gradient-via-pos":[{via:ss()}],"gradient-to-pos":[{to:ss()}],"gradient-from":[{from:x()}],"gradient-via":[{via:x()}],"gradient-to":[{to:x()}],rounded:[{rounded:_e()}],"rounded-s":[{"rounded-s":_e()}],"rounded-e":[{"rounded-e":_e()}],"rounded-t":[{"rounded-t":_e()}],"rounded-r":[{"rounded-r":_e()}],"rounded-b":[{"rounded-b":_e()}],"rounded-l":[{"rounded-l":_e()}],"rounded-ss":[{"rounded-ss":_e()}],"rounded-se":[{"rounded-se":_e()}],"rounded-ee":[{"rounded-ee":_e()}],"rounded-es":[{"rounded-es":_e()}],"rounded-tl":[{"rounded-tl":_e()}],"rounded-tr":[{"rounded-tr":_e()}],"rounded-br":[{"rounded-br":_e()}],"rounded-bl":[{"rounded-bl":_e()}],"border-w":[{border:Se()}],"border-w-x":[{"border-x":Se()}],"border-w-y":[{"border-y":Se()}],"border-w-s":[{"border-s":Se()}],"border-w-e":[{"border-e":Se()}],"border-w-t":[{"border-t":Se()}],"border-w-r":[{"border-r":Se()}],"border-w-b":[{"border-b":Se()}],"border-w-l":[{"border-l":Se()}],"divide-x":[{"divide-x":Se()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Se()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ri(),"hidden","none"]}],"divide-style":[{divide:[...ri(),"hidden","none"]}],"border-color":[{border:x()}],"border-color-x":[{"border-x":x()}],"border-color-y":[{"border-y":x()}],"border-color-s":[{"border-s":x()}],"border-color-e":[{"border-e":x()}],"border-color-t":[{"border-t":x()}],"border-color-r":[{"border-r":x()}],"border-color-b":[{"border-b":x()}],"border-color-l":[{"border-l":x()}],"divide-color":[{divide:x()}],"outline-style":[{outline:[...ri(),"none","hidden"]}],"outline-offset":[{"outline-offset":[O,k,I]}],"outline-w":[{outline:["",O,ls,Xt]}],"outline-color":[{outline:x()}],shadow:[{shadow:["","none",u,pi,fi]}],"shadow-color":[{shadow:x()}],"inset-shadow":[{"inset-shadow":["none",h,pi,fi]}],"inset-shadow-color":[{"inset-shadow":x()}],"ring-w":[{ring:Se()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:x()}],"ring-offset-w":[{"ring-offset":[O,Xt]}],"ring-offset-color":[{"ring-offset":x()}],"inset-ring-w":[{"inset-ring":Se()}],"inset-ring-color":[{"inset-ring":x()}],"text-shadow":[{"text-shadow":["none",d,pi,fi]}],"text-shadow-color":[{"text-shadow":x()}],opacity:[{opacity:[O,k,I]}],"mix-blend":[{"mix-blend":[...rc(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":rc()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[O]}],"mask-image-linear-from-pos":[{"mask-linear-from":ae()}],"mask-image-linear-to-pos":[{"mask-linear-to":ae()}],"mask-image-linear-from-color":[{"mask-linear-from":x()}],"mask-image-linear-to-color":[{"mask-linear-to":x()}],"mask-image-t-from-pos":[{"mask-t-from":ae()}],"mask-image-t-to-pos":[{"mask-t-to":ae()}],"mask-image-t-from-color":[{"mask-t-from":x()}],"mask-image-t-to-color":[{"mask-t-to":x()}],"mask-image-r-from-pos":[{"mask-r-from":ae()}],"mask-image-r-to-pos":[{"mask-r-to":ae()}],"mask-image-r-from-color":[{"mask-r-from":x()}],"mask-image-r-to-color":[{"mask-r-to":x()}],"mask-image-b-from-pos":[{"mask-b-from":ae()}],"mask-image-b-to-pos":[{"mask-b-to":ae()}],"mask-image-b-from-color":[{"mask-b-from":x()}],"mask-image-b-to-color":[{"mask-b-to":x()}],"mask-image-l-from-pos":[{"mask-l-from":ae()}],"mask-image-l-to-pos":[{"mask-l-to":ae()}],"mask-image-l-from-color":[{"mask-l-from":x()}],"mask-image-l-to-color":[{"mask-l-to":x()}],"mask-image-x-from-pos":[{"mask-x-from":ae()}],"mask-image-x-to-pos":[{"mask-x-to":ae()}],"mask-image-x-from-color":[{"mask-x-from":x()}],"mask-image-x-to-color":[{"mask-x-to":x()}],"mask-image-y-from-pos":[{"mask-y-from":ae()}],"mask-image-y-to-pos":[{"mask-y-to":ae()}],"mask-image-y-from-color":[{"mask-y-from":x()}],"mask-image-y-to-color":[{"mask-y-to":x()}],"mask-image-radial":[{"mask-radial":[k,I]}],"mask-image-radial-from-pos":[{"mask-radial-from":ae()}],"mask-image-radial-to-pos":[{"mask-radial-to":ae()}],"mask-image-radial-from-color":[{"mask-radial-from":x()}],"mask-image-radial-to-color":[{"mask-radial-to":x()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":S()}],"mask-image-conic-pos":[{"mask-conic":[O]}],"mask-image-conic-from-pos":[{"mask-conic-from":ae()}],"mask-image-conic-to-pos":[{"mask-conic-to":ae()}],"mask-image-conic-from-color":[{"mask-conic-from":x()}],"mask-image-conic-to-color":[{"mask-conic-to":x()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ye()}],"mask-repeat":[{mask:Ye()}],"mask-size":[{mask:ct()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",k,I]}],filter:[{filter:["","none",k,I]}],blur:[{blur:oc()}],brightness:[{brightness:[O,k,I]}],contrast:[{contrast:[O,k,I]}],"drop-shadow":[{"drop-shadow":["","none",f,pi,fi]}],"drop-shadow-color":[{"drop-shadow":x()}],grayscale:[{grayscale:["",O,k,I]}],"hue-rotate":[{"hue-rotate":[O,k,I]}],invert:[{invert:["",O,k,I]}],saturate:[{saturate:[O,k,I]}],sepia:[{sepia:["",O,k,I]}],"backdrop-filter":[{"backdrop-filter":["","none",k,I]}],"backdrop-blur":[{"backdrop-blur":oc()}],"backdrop-brightness":[{"backdrop-brightness":[O,k,I]}],"backdrop-contrast":[{"backdrop-contrast":[O,k,I]}],"backdrop-grayscale":[{"backdrop-grayscale":["",O,k,I]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[O,k,I]}],"backdrop-invert":[{"backdrop-invert":["",O,k,I]}],"backdrop-opacity":[{"backdrop-opacity":[O,k,I]}],"backdrop-saturate":[{"backdrop-saturate":[O,k,I]}],"backdrop-sepia":[{"backdrop-sepia":["",O,k,I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":T()}],"border-spacing-x":[{"border-spacing-x":T()}],"border-spacing-y":[{"border-spacing-y":T()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",k,I]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[O,"initial",k,I]}],ease:[{ease:["linear","initial",w,k,I]}],delay:[{delay:[O,k,I]}],animate:[{animate:["none",b,k,I]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[g,k,I]}],"perspective-origin":[{"perspective-origin":E()}],rotate:[{rotate:oi()}],"rotate-x":[{"rotate-x":oi()}],"rotate-y":[{"rotate-y":oi()}],"rotate-z":[{"rotate-z":oi()}],scale:[{scale:ai()}],"scale-x":[{"scale-x":ai()}],"scale-y":[{"scale-y":ai()}],"scale-z":[{"scale-z":ai()}],"scale-3d":["scale-3d"],skew:[{skew:Kr()}],"skew-x":[{"skew-x":Kr()}],"skew-y":[{"skew-y":Kr()}],transform:[{transform:[k,I,"","none","gpu","cpu"]}],"transform-origin":[{origin:E()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:li()}],"translate-x":[{"translate-x":li()}],"translate-y":[{"translate-y":li()}],"translate-z":[{"translate-z":li()}],"translate-none":["translate-none"],accent:[{accent:x()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:x()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",k,I]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":T()}],"scroll-mx":[{"scroll-mx":T()}],"scroll-my":[{"scroll-my":T()}],"scroll-ms":[{"scroll-ms":T()}],"scroll-me":[{"scroll-me":T()}],"scroll-mt":[{"scroll-mt":T()}],"scroll-mr":[{"scroll-mr":T()}],"scroll-mb":[{"scroll-mb":T()}],"scroll-ml":[{"scroll-ml":T()}],"scroll-p":[{"scroll-p":T()}],"scroll-px":[{"scroll-px":T()}],"scroll-py":[{"scroll-py":T()}],"scroll-ps":[{"scroll-ps":T()}],"scroll-pe":[{"scroll-pe":T()}],"scroll-pt":[{"scroll-pt":T()}],"scroll-pr":[{"scroll-pr":T()}],"scroll-pb":[{"scroll-pb":T()}],"scroll-pl":[{"scroll-pl":T()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",k,I]}],fill:[{fill:["none",...x()]}],"stroke-w":[{stroke:[O,ls,Xt,uo]}],stroke:[{stroke:["none",...x()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},FC=yC(LC);function Yt(...t){return FC(ed(t))}const VC=sC("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function ds({className:t,variant:e,size:n,asChild:s=!1,...i}){const r=s?Rg:"button";return m.jsx(r,{"data-slot":"button",className:Yt(VC({variant:e,size:n,className:t})),...i})}const Pl=v.createContext({});function Rl(t){const e=v.useRef(null);return e.current===null&&(e.current=t()),e.current}const jC=typeof window<"u",Bp=jC?v.useLayoutEffect:v.useEffect,Wr=v.createContext(null);function Nl(t,e){t.indexOf(e)===-1&&t.push(e)}function cr(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const ot=(t,e,n)=>n>e?e:n<t?t:n;let Ml=()=>{};const zt={},Up=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Wp(t){return typeof t=="object"&&t!==null}const zp=t=>/^0[^.\s]+$/u.test(t);function Hp(t){let e;return()=>(e===void 0&&(e=t()),e)}const Fe=t=>t,BC=(t,e)=>n=>e(t(n)),ti=(...t)=>t.reduce(BC),Os=(t,e,n)=>{const s=e-t;return s===0?1:(n-t)/s};class Dl{constructor(){this.subscriptions=[]}add(e){return Nl(this.subscriptions,e),()=>cr(this.subscriptions,e)}notify(e,n,s){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,s);else for(let r=0;r<i;r++){const o=this.subscriptions[r];o&&o(e,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ie=t=>t*1e3,Oe=t=>t/1e3;function $p(t,e){return e?t*(1e3/e):0}const Gp=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,UC=1e-7,WC=12;function zC(t,e,n,s,i){let r,o,a=0;do o=e+(n-e)/2,r=Gp(o,s,i)-t,r>0?n=o:e=o;while(Math.abs(r)>UC&&++a<WC);return o}function ni(t,e,n,s){if(t===e&&n===s)return Fe;const i=r=>zC(r,0,1,t,n);return r=>r===0||r===1?r:Gp(i(r),e,s)}const Kp=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,qp=t=>e=>1-t(1-e),Yp=ni(.33,1.53,.69,.99),Ol=qp(Yp),Qp=Kp(Ol),Xp=t=>t>=1?1:(t*=2)<1?.5*Ol(t):.5*(2-Math.pow(2,-10*(t-1))),Ll=t=>1-Math.sin(Math.acos(t)),Jp=qp(Ll),Zp=Kp(Ll),HC=ni(.42,0,1,1),$C=ni(0,0,.58,1),em=ni(.42,0,.58,1),GC=t=>Array.isArray(t)&&typeof t[0]!="number",tm=t=>Array.isArray(t)&&typeof t[0]=="number",KC={linear:Fe,easeIn:HC,easeInOut:em,easeOut:$C,circIn:Ll,circInOut:Zp,circOut:Jp,backIn:Ol,backInOut:Qp,backOut:Yp,anticipate:Xp},qC=t=>typeof t=="string",Ou=t=>{if(tm(t)){Ml(t.length===4);const[e,n,s,i]=t;return ni(e,n,s,i)}else if(qC(t))return KC[t];return t},mi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function YC(t,e){let n=new Set,s=new Set,i=!1,r=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),t()),u(a)}const c={schedule:(u,h=!1,d=!1)=>{const p=d&&i?n:s;return h&&o.add(u),p.add(u),u},cancel:u=>{s.delete(u),o.delete(u)},process:u=>{if(a=u,i){r=!0;return}i=!0;const h=n;n=s,s=h,n.forEach(l),n.clear(),i=!1,r&&(r=!1,c.process(u))}};return c}const QC=40;function nm(t,e){let n=!1,s=!0;const i={delta:0,timestamp:0,isProcessing:!1},r=()=>n=!0,o=mi.reduce((_,S)=>(_[S]=YC(r),_),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:h,preRender:d,render:f,postRender:p}=o,g=()=>{const _=zt.useManualTiming,S=_?i.timestamp:performance.now();n=!1,_||(i.delta=s?1e3/60:Math.max(Math.min(S-i.timestamp,QC),1)),i.timestamp=S,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),u.process(i),h.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&e&&(s=!1,t(g))},y=()=>{n=!0,s=!0,i.isProcessing||t(g)};return{schedule:mi.reduce((_,S)=>{const E=o[S];return _[S]=(M,j=!1,T=!1)=>(n||y(),E.schedule(M,j,T)),_},{}),cancel:_=>{for(let S=0;S<mi.length;S++)o[mi[S]].cancel(_)},state:i,steps:o}}const{schedule:$,cancel:Ht,state:fe,steps:ho}=nm(typeof requestAnimationFrame<"u"?requestAnimationFrame:Fe,!0);let ki;function XC(){ki=void 0}const we={now:()=>(ki===void 0&&we.set(fe.isProcessing||zt.useManualTiming?fe.timestamp:performance.now()),ki),set:t=>{ki=t,queueMicrotask(XC)}},sm=t=>e=>typeof e=="string"&&e.startsWith(t),im=sm("--"),JC=sm("var(--"),Fl=t=>JC(t)?ZC.test(t.split("/*")[0].trim()):!1,ZC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Lu(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const es={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ls={...es,transform:t=>ot(0,1,t)},gi={...es,default:1},vs=t=>Math.round(t*1e5)/1e5,Vl=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function eS(t){return t==null}const tS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,jl=(t,e)=>n=>!!(typeof n=="string"&&tS.test(n)&&n.startsWith(t)||e&&!eS(n)&&Object.prototype.hasOwnProperty.call(n,e)),rm=(t,e,n)=>s=>{if(typeof s!="string")return s;const[i,r,o,a]=s.match(Vl);return{[t]:parseFloat(i),[e]:parseFloat(r),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},nS=t=>ot(0,255,t),fo={...es,transform:t=>Math.round(nS(t))},rn={test:jl("rgb","red"),parse:rm("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+fo.transform(t)+", "+fo.transform(e)+", "+fo.transform(n)+", "+vs(Ls.transform(s))+")"};function sS(t){let e="",n="",s="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),s=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),s=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,s+=s,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:i?parseInt(i,16)/255:1}}const oa={test:jl("#"),parse:sS,transform:rn.transform},si=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Ct=si("deg"),st=si("%"),A=si("px"),iS=si("vh"),rS=si("vw"),Fu={...st,parse:t=>st.parse(t)/100,transform:t=>st.transform(t*100)},Sn={test:jl("hsl","hue"),parse:rm("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+st.transform(vs(e))+", "+st.transform(vs(n))+", "+vs(Ls.transform(s))+")"},ne={test:t=>rn.test(t)||oa.test(t)||Sn.test(t),parse:t=>rn.test(t)?rn.parse(t):Sn.test(t)?Sn.parse(t):oa.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?rn.transform(t):Sn.transform(t),getAnimatableNone:t=>{const e=ne.parse(t);return e.alpha=0,ne.transform(e)}},oS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function aS(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Vl))==null?void 0:e.length)||0)+(((n=t.match(oS))==null?void 0:n.length)||0)>0}const om="number",am="color",lS="var",cS="var(",Vu="${}",uS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Wn(t){const e=t.toString(),n=[],s={color:[],number:[],var:[]},i=[];let r=0;const a=e.replace(uS,l=>(ne.test(l)?(s.color.push(r),i.push(am),n.push(ne.parse(l))):l.startsWith(cS)?(s.var.push(r),i.push(lS),n.push(l)):(s.number.push(r),i.push(om),n.push(parseFloat(l))),++r,Vu)).split(Vu);return{values:n,split:a,indexes:s,types:i}}function hS(t){return Wn(t).values}function lm({split:t,types:e}){const n=t.length;return s=>{let i="";for(let r=0;r<n;r++)if(i+=t[r],s[r]!==void 0){const o=e[r];o===om?i+=vs(s[r]):o===am?i+=ne.transform(s[r]):i+=s[r]}return i}}function dS(t){return lm(Wn(t))}const fS=t=>typeof t=="number"?0:ne.test(t)?ne.getAnimatableNone(t):t,pS=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:fS(t);function mS(t){const e=Wn(t);return lm(e)(e.values.map((s,i)=>pS(s,e.split[i])))}const He={test:aS,parse:hS,createTransformer:dS,getAnimatableNone:mS};function po(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function gS({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,e/=100,n/=100;let i=0,r=0,o=0;if(!e)i=r=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=po(l,a,t+1/3),r=po(l,a,t),o=po(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:s}}function ur(t,e){return n=>n>0?e:t}const q=(t,e,n)=>t+(e-t)*n,mo=(t,e,n)=>{const s=t*t,i=n*(e*e-s)+s;return i<0?0:Math.sqrt(i)},yS=[oa,rn,Sn],_S=t=>yS.find(e=>e.test(t));function ju(t){const e=_S(t);if(!e)return!1;let n=e.parse(t);return e===Sn&&(n=gS(n)),n}const Bu=(t,e)=>{const n=ju(t),s=ju(e);if(!n||!s)return ur(t,e);const i={...n};return r=>(i.red=mo(n.red,s.red,r),i.green=mo(n.green,s.green,r),i.blue=mo(n.blue,s.blue,r),i.alpha=q(n.alpha,s.alpha,r),rn.transform(i))},aa=new Set(["none","hidden"]);function vS(t,e){return aa.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function wS(t,e){return n=>q(t,e,n)}function Bl(t){return typeof t=="number"?wS:typeof t=="string"?Fl(t)?ur:ne.test(t)?Bu:TS:Array.isArray(t)?cm:typeof t=="object"?ne.test(t)?Bu:bS:ur}function cm(t,e){const n=[...t],s=n.length,i=t.map((r,o)=>Bl(r)(r,e[o]));return r=>{for(let o=0;o<s;o++)n[o]=i[o](r);return n}}function bS(t,e){const n={...t,...e},s={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(s[i]=Bl(t[i])(t[i],e[i]));return i=>{for(const r in s)n[r]=s[r](i);return n}}function ES(t,e){const n=[],s={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const r=e.types[i],o=t.indexes[r][s[r]],a=t.values[o]??0;n[i]=a,s[r]++}return n}const TS=(t,e)=>{const n=He.createTransformer(e),s=Wn(t),i=Wn(e);return s.indexes.var.length===i.indexes.var.length&&s.indexes.color.length===i.indexes.color.length&&s.indexes.number.length>=i.indexes.number.length?aa.has(t)&&!i.values.length||aa.has(e)&&!s.values.length?vS(t,e):ti(cm(ES(s,i),i.values),n):ur(t,e)};function um(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?q(t,e,n):Bl(t)(t,e)}const CS=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>$.update(e,n),stop:()=>Ht(e),now:()=>fe.isProcessing?fe.timestamp:we.now()}},hm=(t,e,n=10)=>{let s="";const i=Math.max(Math.round(e/n),2);for(let r=0;r<i;r++)s+=Math.round(t(r/(i-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},hr=2e4;function Ul(t){let e=0;const n=50;let s=t.next(e);for(;!s.done&&e<hr;)e+=n,s=t.next(e);return e>=hr?1/0:e}function SS(t,e=100,n){const s=n({...t,keyframes:[0,e]}),i=Math.min(Ul(s),hr);return{type:"keyframes",ease:r=>s.next(i*r).value/e,duration:Oe(i)}}const ee={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function la(t,e){return t*Math.sqrt(1-e*e)}const xS=12;function IS(t,e,n){let s=n;for(let i=1;i<xS;i++)s=s-t(s)/e(s);return s}const go=.001;function kS({duration:t=ee.duration,bounce:e=ee.bounce,velocity:n=ee.velocity,mass:s=ee.mass}){let i,r,o=1-e;o=ot(ee.minDamping,ee.maxDamping,o),t=ot(ee.minDuration,ee.maxDuration,Oe(t)),o<1?(i=c=>{const u=c*o,h=u*t,d=u-n,f=la(c,o),p=Math.exp(-h);return go-d/f*p},r=c=>{const h=c*o*t,d=h*n+n,f=Math.pow(o,2)*Math.pow(c,2)*t,p=Math.exp(-h),g=la(Math.pow(c,2),o);return(-i(c)+go>0?-1:1)*((d-f)*p)/g}):(i=c=>{const u=Math.exp(-c*t),h=(c-n)*t+1;return-go+u*h},r=c=>{const u=Math.exp(-c*t),h=(n-c)*(t*t);return u*h});const a=5/t,l=IS(i,r,a);if(t=Ie(t),isNaN(l))return{stiffness:ee.stiffness,damping:ee.damping,duration:t};{const c=Math.pow(l,2)*s;return{stiffness:c,damping:o*2*Math.sqrt(s*c),duration:t}}}const AS=["duration","bounce"],PS=["stiffness","damping","mass"];function Uu(t,e){return e.some(n=>t[n]!==void 0)}function RS(t){let e={velocity:ee.velocity,stiffness:ee.stiffness,damping:ee.damping,mass:ee.mass,isResolvedFromDuration:!1,...t};if(!Uu(t,PS)&&Uu(t,AS))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,s=2*Math.PI/(n*1.2),i=s*s,r=2*ot(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:ee.mass,stiffness:i,damping:r}}else{const n=kS({...t,velocity:0});e={...e,...n,mass:ee.mass},e.isResolvedFromDuration=!0}return e}function dr(t=ee.visualDuration,e=ee.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:s,restDelta:i}=n;const r=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:r},{stiffness:l,damping:c,mass:u,duration:h,velocity:d,isResolvedFromDuration:f}=RS({...n,velocity:-Oe(n.velocity||0)}),p=d||0,g=c/(2*Math.sqrt(l*u)),y=o-r,w=Oe(Math.sqrt(l/u)),b=Math.abs(y)<5;s||(s=b?ee.restSpeed.granular:ee.restSpeed.default),i||(i=b?ee.restDelta.granular:ee.restDelta.default);let _,S,E,M,j,T;if(g<1)E=la(w,g),M=(p+g*w*y)/E,_=R=>{const z=Math.exp(-g*w*R);return o-z*(M*Math.sin(E*R)+y*Math.cos(E*R))},j=g*w*M+y*E,T=g*w*y-M*E,S=R=>Math.exp(-g*w*R)*(j*Math.sin(E*R)+T*Math.cos(E*R));else if(g===1){_=z=>o-Math.exp(-w*z)*(y+(p+w*y)*z);const R=p+w*y;S=z=>Math.exp(-w*z)*(w*R*z-p)}else{const R=w*Math.sqrt(g*g-1);_=Te=>{const me=Math.exp(-g*w*Te),te=Math.min(R*Te,300);return o-me*((p+g*w*y)*Math.sinh(te)+R*y*Math.cosh(te))/R};const z=(p+g*w*y)/R,Z=g*w*z-y*R,Pe=g*w*y-z*R;S=Te=>{const me=Math.exp(-g*w*Te),te=Math.min(R*Te,300);return me*(Z*Math.sinh(te)+Pe*Math.cosh(te))}}const D={calculatedDuration:f&&h||null,velocity:R=>Ie(S(R)),next:R=>{if(!f&&g<1){const Z=Math.exp(-g*w*R),Pe=Math.sin(E*R),Te=Math.cos(E*R),me=o-Z*(M*Pe+y*Te),te=Ie(Z*(j*Pe+T*Te));return a.done=Math.abs(te)<=s&&Math.abs(o-me)<=i,a.value=a.done?o:me,a}const z=_(R);if(f)a.done=R>=h;else{const Z=Ie(S(R));a.done=Math.abs(Z)<=s&&Math.abs(o-z)<=i}return a.value=a.done?o:z,a},toString:()=>{const R=Math.min(Ul(D),hr),z=hm(Z=>D.next(R*Z).value,R,30);return R+"ms "+z},toTransition:()=>{}};return D}dr.applyToOptions=t=>{const e=SS(t,100,dr);return t.ease=e.ease,t.duration=Ie(e.duration),t.type="keyframes",t};const NS=5;function dm(t,e,n){const s=Math.max(e-NS,0);return $p(n-t(s),e-s)}function ca({keyframes:t,velocity:e=0,power:n=.8,timeConstant:s=325,bounceDamping:i=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const h=t[0],d={done:!1,value:h},f=T=>a!==void 0&&T<a||l!==void 0&&T>l,p=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let g=n*e;const y=h+g,w=o===void 0?y:o(y);w!==y&&(g=w-h);const b=T=>-g*Math.exp(-T/s),_=T=>w+b(T),S=T=>{const D=b(T),R=_(T);d.done=Math.abs(D)<=c,d.value=d.done?w:R};let E,M;const j=T=>{f(d.value)&&(E=T,M=dr({keyframes:[d.value,p(d.value)],velocity:dm(_,T,d.value),damping:i,stiffness:r,restDelta:c,restSpeed:u}))};return j(0),{calculatedDuration:null,next:T=>{let D=!1;return!M&&E===void 0&&(D=!0,S(T),j(T)),E!==void 0&&T>=E?M.next(T-E):(!D&&S(T),d)}}}function MS(t,e,n){const s=[],i=n||zt.mix||um,r=t.length-1;for(let o=0;o<r;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Fe:e;a=ti(l,a)}s.push(a)}return s}function DS(t,e,{clamp:n=!0,ease:s,mixer:i}={}){const r=t.length;if(Ml(r===e.length),r===1)return()=>e[0];if(r===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[r-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=MS(e,s,i),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let h=0;if(l>1)for(;h<t.length-2&&!(u<t[h+1]);h++);const d=Os(t[h],t[h+1],u);return a[h](d)};return n?u=>c(ot(t[0],t[r-1],u)):c}function OS(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const i=Os(0,e,s);t.push(q(n,1,i))}}function LS(t){const e=[0];return OS(e,t.length-1),e}function FS(t,e){return t.map(n=>n*e)}function VS(t,e){return t.map(()=>e||em).splice(0,t.length-1)}function ws({duration:t=300,keyframes:e,times:n,ease:s="easeInOut"}){const i=GC(s)?s.map(Ou):Ou(s),r={done:!1,value:e[0]},o=FS(n&&n.length===e.length?n:LS(e),t),a=DS(o,e,{ease:Array.isArray(i)?i:VS(e,i)});return{calculatedDuration:t,next:l=>(r.value=a(l),r.done=l>=t,r)}}const jS=t=>t!==null;function zr(t,{repeat:e,repeatType:n="loop"},s,i=1){const r=t.filter(jS),a=i<0||e&&n!=="loop"&&e%2===1?0:r.length-1;return!a||s===void 0?r[a]:s}const BS={decay:ca,inertia:ca,tween:ws,keyframes:ws,spring:dr};function fm(t){typeof t.type=="string"&&(t.type=BS[t.type])}class Wl{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const US=t=>t/100;class fr extends Wl{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var s,i;const{motionValue:n}=this.options;n&&n.updatedAt!==we.now()&&this.tick(we.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(s=this.options).onStop)==null||i.call(s))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;fm(e);const{type:n=ws,repeat:s=0,repeatDelay:i=0,repeatType:r,velocity:o=0}=e;let{keyframes:a}=e;const l=n||ws;l!==ws&&typeof a[0]!="number"&&(this.mixKeyframes=ti(US,um(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});r==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Ul(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(s+1)-i,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:s,totalDuration:i,mixKeyframes:r,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return s.next(0);const{delay:c=0,keyframes:u,repeat:h,repeatType:d,repeatDelay:f,type:p,onUpdate:g,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const w=this.currentTime-c*(this.playbackSpeed>=0?1:-1),b=this.playbackSpeed>=0?w<0:w>i;this.currentTime=Math.max(w,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let _=this.currentTime,S=s;if(h){const T=Math.min(this.currentTime,i)/a;let D=Math.floor(T),R=T%1;!R&&T>=1&&(R=1),R===1&&D--,D=Math.min(D,h+1),!!(D%2)&&(d==="reverse"?(R=1-R,f&&(R-=f/a)):d==="mirror"&&(S=o)),_=ot(0,1,R)*a}let E;b?(this.delayState.value=u[0],E=this.delayState):E=S.next(_),r&&!b&&(E.value=r(E.value));let{done:M}=E;!b&&l!==null&&(M=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const j=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return j&&p!==ca&&(E.value=zr(u,this.options,y,this.speed)),g&&g(E.value),j&&this.finish(),E}then(e,n){return this.finished.then(e,n)}get duration(){return Oe(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Oe(e)}get time(){return Oe(this.currentTime)}set time(e){e=Ie(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return dm(s=>this.generator.next(s).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(we.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Oe(this.currentTime))}play(){var i,r;if(this.isStopped)return;const{driver:e=CS,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(r=(i=this.options).onPlay)==null||r.call(i);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=n??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(we.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function WS(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const on=t=>t*180/Math.PI,ua=t=>{const e=on(Math.atan2(t[1],t[0]));return ha(e)},zS={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:ua,rotateZ:ua,skewX:t=>on(Math.atan(t[1])),skewY:t=>on(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},ha=t=>(t=t%360,t<0&&(t+=360),t),Wu=ua,zu=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Hu=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),HS={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:zu,scaleY:Hu,scale:t=>(zu(t)+Hu(t))/2,rotateX:t=>ha(on(Math.atan2(t[6],t[5]))),rotateY:t=>ha(on(Math.atan2(-t[2],t[0]))),rotateZ:Wu,rotate:Wu,skewX:t=>on(Math.atan(t[4])),skewY:t=>on(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function da(t){return t.includes("scale")?1:0}function fa(t,e){if(!t||t==="none")return da(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,i;if(n)s=HS,i=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=zS,i=a}if(!i)return da(e);const r=s[e],o=i[1].split(",").map(GS);return typeof r=="function"?r(o):o[r]}const $S=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return fa(n,e)};function GS(t){return parseFloat(t.trim())}const ts=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ns=new Set(ts),$u=t=>t===es||t===A,KS=new Set(["x","y","z"]),qS=ts.filter(t=>!KS.has(t));function YS(t){const e=[];return qS.forEach(n=>{const s=t.getValue(n);s!==void 0&&(e.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),e}const Rt={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:s})=>{const i=t.max-t.min;return s==="border-box"?i:i-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:s})=>{const i=t.max-t.min;return s==="border-box"?i:i-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>fa(e,"x"),y:(t,{transform:e})=>fa(e,"y")};Rt.translateX=Rt.x;Rt.translateY=Rt.y;const ln=new Set;let pa=!1,ma=!1,ga=!1;function pm(){if(ma){const t=Array.from(ln).filter(s=>s.needsMeasurement),e=new Set(t.map(s=>s.element)),n=new Map;e.forEach(s=>{const i=YS(s);i.length&&(n.set(s,i),s.render())}),t.forEach(s=>s.measureInitialState()),e.forEach(s=>{s.render();const i=n.get(s);i&&i.forEach(([r,o])=>{var a;(a=s.getValue(r))==null||a.set(o)})}),t.forEach(s=>s.measureEndState()),t.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}ma=!1,pa=!1,ln.forEach(t=>t.complete(ga)),ln.clear()}function mm(){ln.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ma=!0)})}function QS(){ga=!0,mm(),pm(),ga=!1}class zl{constructor(e,n,s,i,r,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=s,this.motionValue=i,this.element=r,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(ln.add(this),pa||(pa=!0,$.read(mm),$.resolveKeyframes(pm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:s,motionValue:i}=this;if(e[0]===null){const r=i==null?void 0:i.get(),o=e[e.length-1];if(r!==void 0)e[0]=r;else if(s&&n){const a=s.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),i&&r===void 0&&i.set(e[0])}WS(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ln.delete(this)}cancel(){this.state==="scheduled"&&(ln.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const XS=t=>t.startsWith("--");function gm(t,e,n){XS(e)?t.style.setProperty(e,n):t.style[e]=n}const JS={};function ym(t,e){const n=Hp(t);return()=>JS[e]??n()}const ZS=ym(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),_m=ym(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),fs=([t,e,n,s])=>`cubic-bezier(${t}, ${e}, ${n}, ${s})`,Gu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fs([0,.65,.55,1]),circOut:fs([.55,0,1,.45]),backIn:fs([.31,.01,.66,-.59]),backOut:fs([.33,1.53,.69,.99])};function vm(t,e){if(t)return typeof t=="function"?_m()?hm(t,e):"ease-out":tm(t)?fs(t):Array.isArray(t)?t.map(n=>vm(n,e)||Gu.easeOut):Gu[t]}function ex(t,e,n,{delay:s=0,duration:i=300,repeat:r=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const h=vm(a,i);Array.isArray(h)&&(u.easing=h);const d={delay:s,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"};return c&&(d.pseudoElement=c),t.animate(u,d)}function wm(t){return typeof t=="function"&&"applyToOptions"in t}function tx({type:t,...e}){return wm(t)&&_m()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class bm extends Wl{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:s,keyframes:i,pseudoElement:r,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!r,this.allowFlatten=o,this.options=e,Ml(typeof e.type!="string");const c=tx(e);this.animation=ex(n,s,i,c,r),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const u=zr(i,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(u),gm(n,s,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,s,i;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((i=(s=this.animation).commitStyles)==null||i.call(s))}get duration(){var n,s;const e=((s=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:s.call(n).duration)||0;return Oe(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Oe(e)}get time(){return Oe(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ie(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:s,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&ZS()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),s&&(this.animation.rangeEnd=s),Fe):i(this)}}const Em={anticipate:Xp,backInOut:Qp,circInOut:Zp};function nx(t){return t in Em}function sx(t){typeof t.ease=="string"&&nx(t.ease)&&(t.ease=Em[t.ease])}const yo=10;class ix extends bm{constructor(e){sx(e),fm(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:s,onComplete:i,element:r,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new fr({...o,autoplay:!1}),l=Math.max(yo,we.now()-this.startTime),c=ot(0,yo,l-yo),u=a.sample(l).value,{name:h}=this.options;r&&h&&gm(r,h,u),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,u,c),a.stop()}}const Ku=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(He.test(t)||t==="0")&&!t.startsWith("url("));function rx(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function ox(t,e,n,s){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const r=t[t.length-1],o=Ku(i,e),a=Ku(r,e);return!o||!a?!1:rx(t)||(n==="spring"||wm(n))&&s}function ya(t){t.duration=0,t.type="keyframes"}const Tm=new Set(["opacity","clipPath","filter","transform"]),ax=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function lx(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&ax.test(t[e]))return!0;return!1}const cx=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),ux=Hp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function hx(t){var h;const{motionValue:e,name:n,repeatDelay:s,repeatType:i,damping:r,type:o,keyframes:a}=t;if(!(((h=e==null?void 0:e.owner)==null?void 0:h.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=e.owner.getProps();return ux()&&n&&(Tm.has(n)||cx.has(n)&&lx(a))&&(n!=="transform"||!u)&&!c&&!s&&i!=="mirror"&&r!==0&&o!=="inertia"}const dx=40;class fx extends Wl{constructor({autoplay:e=!0,delay:n=0,type:s="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...h}){var p;super(),this.stop=()=>{var g,y;this._animation&&(this._animation.stop(),(g=this.stopTimeline)==null||g.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=we.now();const d={autoplay:e,delay:n,type:s,repeat:i,repeatDelay:r,repeatType:o,name:l,motionValue:c,element:u,...h},f=(u==null?void 0:u.KeyframeResolver)||zl;this.keyframeResolver=new f(a,(g,y,w)=>this.onKeyframesResolved(g,y,d,!w),l,c,u),(p=this.keyframeResolver)==null||p.scheduleResolve()}onKeyframesResolved(e,n,s,i){var w,b;this.keyframeResolver=void 0;const{name:r,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=s;this.resolvedAt=we.now();let h=!0;ox(e,r,o,a)||(h=!1,(zt.instantAnimations||!l)&&(u==null||u(zr(e,s,n))),e[0]=e[e.length-1],ya(s),s.repeat=0);const f={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>dx?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...s,keyframes:e},p=h&&!c&&hx(f),g=(b=(w=f.motionValue)==null?void 0:w.owner)==null?void 0:b.current;let y;if(p)try{y=new ix({...f,element:g})}catch{y=new fr(f)}else y=new fr(f);y.finished.then(()=>{this.notifyFinished()}).catch(Fe),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),QS()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function Cm(t,e,n,s=0,i=1){const r=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*s;return typeof n=="function"?n(r,o):i===1?r*s:a-r*s}const px=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function mx(t){const e=px.exec(t);if(!e)return[,];const[,n,s,i]=e;return[`--${n??s}`,i]}function Sm(t,e,n=1){const[s,i]=mx(t);if(!s)return;const r=window.getComputedStyle(e).getPropertyValue(s);if(r){const o=r.trim();return Up(o)?parseFloat(o):o}return Fl(i)?Sm(i,e,n+1):i}const gx={type:"spring",stiffness:500,damping:25,restSpeed:10},yx=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),_x={type:"keyframes",duration:.8},vx={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},wx=(t,{keyframes:e})=>e.length>2?_x:ns.has(t)?t.startsWith("scale")?yx(e[1]):gx:vx;function xm(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...s}=t;return{...e,...s}}return t}function Hl(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?xm(n,t):n}const bx=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Ex(t){for(const e in t)if(!bx.has(e))return!0;return!1}const $l=(t,e,n,s={},i,r)=>o=>{const a=Hl(s,t)||{},l=a.delay||s.delay||0;let{elapsed:c=0}=s;c=c-Ie(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:r?void 0:i};Ex(a)||Object.assign(u,wx(t,u)),u.duration&&(u.duration=Ie(u.duration)),u.repeatDelay&&(u.repeatDelay=Ie(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(ya(u),u.delay===0&&(h=!0)),(zt.instantAnimations||zt.skipAnimations||i!=null&&i.shouldSkipAnimations)&&(h=!0,ya(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,h&&!r&&e.get()!==void 0){const d=zr(u.keyframes,a);if(d!==void 0){$.update(()=>{u.onUpdate(d),u.onComplete()});return}}return a.isSync?new fr(u):new fx(u)};function qu(t){const e=[{},{}];return t==null||t.values.forEach((n,s)=>{e[0][s]=n.get(),e[1][s]=n.getVelocity()}),e}function Gl(t,e,n,s){if(typeof e=="function"){const[i,r]=qu(s);e=e(n!==void 0?n:t.custom,i,r)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,r]=qu(s);e=e(n!==void 0?n:t.custom,i,r)}return e}function cn(t,e,n){const s=t.getProps();return Gl(s,e,n!==void 0?n:s.custom,t)}const Im=new Set(["width","height","top","left","right","bottom",...ts]),Yu=30,Tx=t=>!isNaN(parseFloat(t));class Cx{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var r;const i=we.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((r=this.events.change)==null||r.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=we.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Tx(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Dl);const s=this.events[e].add(n);return e==="change"?()=>{s(),$.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,s){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-s}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=we.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Yu)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Yu);return $p(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function zn(t,e){return new Cx(t,e)}const _a=t=>Array.isArray(t);function Sx(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,zn(n))}function xx(t){return _a(t)?t[t.length-1]||0:t}function Ix(t,e){const n=cn(t,e);let{transitionEnd:s={},transition:i={},...r}=n||{};r={...r,...s};for(const o in r){const a=xx(r[o]);Sx(t,o,a)}}const pe=t=>!!(t&&t.getVelocity);function kx(t){return!!(pe(t)&&t.add)}function va(t,e){const n=t.getValue("willChange");if(kx(n))return n.add(e);if(!n&&zt.WillChange){const s=new zt.WillChange("auto");t.addValue("willChange",s),s.add(e)}}function Kl(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const Ax="framerAppearId",km="data-"+Kl(Ax);function Am(t){return t.props[km]}function Px({protectedKeys:t,needsAnimating:e},n){const s=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,s}function Pm(t,e,{delay:n=0,transitionOverride:s,type:i}={}){let{transition:r,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();r=r?xm(r,l):l;const c=r==null?void 0:r.reduceMotion;s&&(r=s);const u=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const d in a){const f=t.getValue(d,t.latestValues[d]??null),p=a[d];if(p===void 0||h&&Px(h,d))continue;const g={delay:n,...Hl(r||{},d)},y=f.get();if(y!==void 0&&!f.isAnimating()&&!Array.isArray(p)&&p===y&&!g.velocity){$.update(()=>f.set(p));continue}let w=!1;if(window.MotionHandoffAnimation){const S=Am(t);if(S){const E=window.MotionHandoffAnimation(S,d,$);E!==null&&(g.startTime=E,w=!0)}}va(t,d);const b=c??t.shouldReduceMotion;f.start($l(d,f,p,b&&Im.has(d)?{type:!1}:g,t,w));const _=f.animation;_&&u.push(_)}if(o){const d=()=>$.update(()=>{o&&Ix(t,o)});u.length?Promise.all(u).then(d):d()}return u}function wa(t,e,n={}){var l;const s=cn(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=t.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(i=n.transitionOverride);const r=s?()=>Promise.all(Pm(t,s,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=i;return Rx(t,e,c,u,h,d,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[c,u]=a==="beforeChildren"?[r,o]:[o,r];return c().then(()=>u())}else return Promise.all([r(),o(n.delay)])}function Rx(t,e,n=0,s=0,i=0,r=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(wa(l,e,{...o,delay:n+(typeof s=="function"?0:s)+Cm(t.variantChildren,l,s,i,r)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function Nx(t,e,n={}){t.notify("AnimationStart",e);let s;if(Array.isArray(e)){const i=e.map(r=>wa(t,r,n));s=Promise.all(i)}else if(typeof e=="string")s=wa(t,e,n);else{const i=typeof e=="function"?cn(t,e,n.custom):e;s=Promise.all(Pm(t,i,n))}return s.then(()=>{t.notify("AnimationComplete",e)})}const Mx={test:t=>t==="auto",parse:t=>t},Rm=t=>e=>e.test(t),Nm=[es,A,st,Ct,rS,iS,Mx],Qu=t=>Nm.find(Rm(t));function Dx(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||zp(t):!0}const Ox=new Set(["brightness","contrast","saturate","opacity"]);function Lx(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[s]=n.match(Vl)||[];if(!s)return t;const i=n.replace(s,"");let r=Ox.has(e)?1:0;return s!==n&&(r*=100),e+"("+r+i+")"}const Fx=/\b([a-z-]*)\(.*?\)/gu,ba={...He,getAnimatableNone:t=>{const e=t.match(Fx);return e?e.map(Lx).join(" "):t}},Ea={...He,getAnimatableNone:t=>{const e=He.parse(t);return He.createTransformer(t)(e.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},Xu={...es,transform:Math.round},Vx={rotate:Ct,rotateX:Ct,rotateY:Ct,rotateZ:Ct,scale:gi,scaleX:gi,scaleY:gi,scaleZ:gi,skew:Ct,skewX:Ct,skewY:Ct,distance:A,translateX:A,translateY:A,translateZ:A,x:A,y:A,z:A,perspective:A,transformPerspective:A,opacity:Ls,originX:Fu,originY:Fu,originZ:A},ql={borderWidth:A,borderTopWidth:A,borderRightWidth:A,borderBottomWidth:A,borderLeftWidth:A,borderRadius:A,borderTopLeftRadius:A,borderTopRightRadius:A,borderBottomRightRadius:A,borderBottomLeftRadius:A,width:A,maxWidth:A,height:A,maxHeight:A,top:A,right:A,bottom:A,left:A,inset:A,insetBlock:A,insetBlockStart:A,insetBlockEnd:A,insetInline:A,insetInlineStart:A,insetInlineEnd:A,padding:A,paddingTop:A,paddingRight:A,paddingBottom:A,paddingLeft:A,paddingBlock:A,paddingBlockStart:A,paddingBlockEnd:A,paddingInline:A,paddingInlineStart:A,paddingInlineEnd:A,margin:A,marginTop:A,marginRight:A,marginBottom:A,marginLeft:A,marginBlock:A,marginBlockStart:A,marginBlockEnd:A,marginInline:A,marginInlineStart:A,marginInlineEnd:A,fontSize:A,backgroundPositionX:A,backgroundPositionY:A,...Vx,zIndex:Xu,fillOpacity:Ls,strokeOpacity:Ls,numOctaves:Xu},jx={...ql,color:ne,backgroundColor:ne,outlineColor:ne,fill:ne,stroke:ne,borderColor:ne,borderTopColor:ne,borderRightColor:ne,borderBottomColor:ne,borderLeftColor:ne,filter:ba,WebkitFilter:ba,mask:Ea,WebkitMask:Ea},Mm=t=>jx[t],Bx=new Set([ba,Ea]);function Dm(t,e){let n=Mm(t);return Bx.has(n)||(n=He),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Ux=new Set(["auto","none","0"]);function Wx(t,e,n){let s=0,i;for(;s<t.length&&!i;){const r=t[s];typeof r=="string"&&!Ux.has(r)&&Wn(r).values.length&&(i=t[s]),s++}if(i&&n)for(const r of e)t[r]=Dm(n,i)}class zx extends zl{constructor(e,n,s,i,r){super(e,n,s,i,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:s}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let h=e[u];if(typeof h=="string"&&(h=h.trim(),Fl(h))){const d=Sm(h,n.current);d!==void 0&&(e[u]=d),u===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Im.has(s)||e.length!==2)return;const[i,r]=e,o=Qu(i),a=Qu(r),l=Lu(i),c=Lu(r);if(l!==c&&Rt[s]){this.needsMeasurement=!0;return}if(o!==a)if($u(o)&&$u(a))for(let u=0;u<e.length;u++){const h=e[u];typeof h=="string"&&(e[u]=parseFloat(h))}else Rt[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,s=[];for(let i=0;i<e.length;i++)(e[i]===null||Dx(e[i]))&&s.push(i);s.length&&Wx(e,s,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:s}=this;if(!e||!e.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Rt[s](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(s,i).jump(i,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:s}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const r=s.length-1,o=s[r];s[r]=Rt[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Om(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let s=document;const i=(n==null?void 0:n[t])??s.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t).filter(s=>s!=null)}const Lm=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function Ai(t){return Wp(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Yl}=nm(queueMicrotask,!1),Be={x:!1,y:!1};function Fm(){return Be.x||Be.y}function Hx(t){return t==="x"||t==="y"?Be[t]?null:(Be[t]=!0,()=>{Be[t]=!1}):Be.x||Be.y?null:(Be.x=Be.y=!0,()=>{Be.x=Be.y=!1})}function Vm(t,e){const n=Om(t),s=new AbortController,i={passive:!0,...e,signal:s.signal};return[n,i,()=>s.abort()]}function $x(t){return!(t.pointerType==="touch"||Fm())}function Gx(t,e,n={}){const[s,i,r]=Vm(t,n);return s.forEach(o=>{let a=!1,l=!1,c;const u=()=>{o.removeEventListener("pointerleave",p)},h=y=>{c&&(c(y),c=void 0),u()},d=y=>{a=!1,window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),l&&(l=!1,h(y))},f=()=>{a=!0,window.addEventListener("pointerup",d,i),window.addEventListener("pointercancel",d,i)},p=y=>{if(y.pointerType!=="touch"){if(a){l=!0;return}h(y)}},g=y=>{if(!$x(y))return;l=!1;const w=e(o,y);typeof w=="function"&&(c=w,o.addEventListener("pointerleave",p,i))};o.addEventListener("pointerenter",g,i),o.addEventListener("pointerdown",f,i)}),r}const jm=(t,e)=>e?t===e?!0:jm(t,e.parentElement):!1,Ql=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Kx=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function qx(t){return Kx.has(t.tagName)||t.isContentEditable===!0}const Yx=new Set(["INPUT","SELECT","TEXTAREA"]);function Qx(t){return Yx.has(t.tagName)||t.isContentEditable===!0}const Pi=new WeakSet;function Ju(t){return e=>{e.key==="Enter"&&t(e)}}function _o(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Xx=(t,e)=>{const n=t.currentTarget;if(!n)return;const s=Ju(()=>{if(Pi.has(n))return;_o(n,"down");const i=Ju(()=>{_o(n,"up")}),r=()=>_o(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",r,e)});n.addEventListener("keydown",s,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",s),e)};function Zu(t){return Ql(t)&&!Fm()}const eh=new WeakSet;function Jx(t,e,n={}){const[s,i,r]=Vm(t,n),o=a=>{const l=a.currentTarget;if(!Zu(a)||eh.has(a))return;Pi.add(l),n.stopPropagation&&eh.add(a);const c=e(l,a),u=(f,p)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",d),Pi.has(l)&&Pi.delete(l),Zu(f)&&typeof c=="function"&&c(f,{success:p})},h=f=>{u(f,l===window||l===document||n.useGlobalTarget||jm(l,f.target))},d=f=>{u(f,!1)};window.addEventListener("pointerup",h,i),window.addEventListener("pointercancel",d,i)};return s.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),Ai(a)&&(a.addEventListener("focus",c=>Xx(c,i)),!qx(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),r}function Xl(t){return Wp(t)&&"ownerSVGElement"in t}const Ri=new WeakMap;let St;const Bm=(t,e,n)=>(s,i)=>i&&i[0]?i[0][t+"Size"]:Xl(s)&&"getBBox"in s?s.getBBox()[e]:s[n],Zx=Bm("inline","width","offsetWidth"),eI=Bm("block","height","offsetHeight");function tI({target:t,borderBoxSize:e}){var n;(n=Ri.get(t))==null||n.forEach(s=>{s(t,{get width(){return Zx(t,e)},get height(){return eI(t,e)}})})}function nI(t){t.forEach(tI)}function sI(){typeof ResizeObserver>"u"||(St=new ResizeObserver(nI))}function iI(t,e){St||sI();const n=Om(t);return n.forEach(s=>{let i=Ri.get(s);i||(i=new Set,Ri.set(s,i)),i.add(e),St==null||St.observe(s)}),()=>{n.forEach(s=>{const i=Ri.get(s);i==null||i.delete(e),i!=null&&i.size||St==null||St.unobserve(s)})}}const Ni=new Set;let xn;function rI(){xn=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ni.forEach(e=>e(t))},window.addEventListener("resize",xn)}function oI(t){return Ni.add(t),xn||rI(),()=>{Ni.delete(t),!Ni.size&&typeof xn=="function"&&(window.removeEventListener("resize",xn),xn=void 0)}}function th(t,e){return typeof t=="function"?oI(t):iI(t,e)}function aI(t){return Xl(t)&&t.tagName==="svg"}const lI=[...Nm,ne,He],cI=t=>lI.find(Rm(t)),nh=()=>({translate:0,scale:1,origin:0,originPoint:0}),In=()=>({x:nh(),y:nh()}),sh=()=>({min:0,max:0}),ie=()=>({x:sh(),y:sh()}),uI=new WeakMap;function Hr(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Fs(t){return typeof t=="string"||Array.isArray(t)}const Jl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zl=["initial",...Jl];function $r(t){return Hr(t.animate)||Zl.some(e=>Fs(t[e]))}function Um(t){return!!($r(t)||t.variants)}function hI(t,e,n){for(const s in e){const i=e[s],r=n[s];if(pe(i))t.addValue(s,i);else if(pe(r))t.addValue(s,zn(i,{owner:t}));else if(r!==i)if(t.hasValue(s)){const o=t.getValue(s);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(s);t.addValue(s,zn(o!==void 0?o:i,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const Ta={current:null},Wm={current:!1},dI=typeof window<"u";function fI(){if(Wm.current=!0,!!dI)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ta.current=t.matches;t.addEventListener("change",e),e()}else Ta.current=!1}const ih=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let pr={};function zm(t){pr=t}function pI(){return pr}class mI{scrapeMotionValuesFromProps(e,n,s){return{}}constructor({parent:e,props:n,presenceContext:s,reducedMotionConfig:i,skipAnimations:r,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=zl,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=we.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,$.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=s,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=r,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=$r(n),this.isVariantNode=Um(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const p=d[f];c[f]!==void 0&&pe(p)&&p.set(c[f])}}mount(e){var n,s;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=e,uI.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,r)=>this.bindToMotionValue(r,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Wm.current||fI(),this.shouldReduceMotion=Ta.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Ht(this.notifyUpdate),Ht(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const s=this.features[n];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&Tm.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:u}=n.accelerate,h=new bm({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Ie(u)}),d=o(h);this.valueSubscriptions.set(e,()=>{d(),h.cancel()});return}const s=ns.has(e);s&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&$.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let r;typeof window<"u"&&window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),r&&r(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in pr){const n=pr[e];if(!n)continue;const{isEnabled:s,Feature:i}=n;if(!this.features[e]&&i&&s(this.props)&&(this.features[e]=new i(this)),this.features[e]){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ie()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<ih.length;s++){const i=ih[s];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const r="on"+i,o=e[r];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=hI(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const s=this.values.get(e);n!==s&&(s&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let s=this.values.get(e);return s===void 0&&n!==void 0&&(s=zn(n===null?void 0:n,{owner:this}),this.addValue(e,s)),s}readValue(e,n){let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(Up(s)||zp(s))?s=parseFloat(s):!cI(s)&&He.test(n)&&(s=Dm(e,n)),this.setBaseTarget(e,pe(s)?s.get():s)),pe(s)?s.get():s}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var r;const{initial:n}=this.props;let s;if(typeof n=="string"||typeof n=="object"){const o=Gl(this.props,n,(r=this.presenceContext)==null?void 0:r.custom);o&&(s=o[e])}if(n&&s!==void 0)return s;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!pe(i)?i:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Dl),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Yl.render(this.render)}}class Hm extends mI{constructor(){super(...arguments),this.KeyframeResolver=zx}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const s=e.style;return s?s[n]:void 0}removeValueFromRenderState(e,{vars:n,style:s}){delete n[e],delete s[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;pe(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Qt{constructor(e){this.isMounted=!1,this.node=e}update(){}}function $m({top:t,left:e,right:n,bottom:s}){return{x:{min:e,max:n},y:{min:t,max:s}}}function gI({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function yI(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),s=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function vo(t){return t===void 0||t===1}function Ca({scale:t,scaleX:e,scaleY:n}){return!vo(t)||!vo(e)||!vo(n)}function nn(t){return Ca(t)||Gm(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Gm(t){return rh(t.x)||rh(t.y)}function rh(t){return t&&t!=="0%"}function mr(t,e,n){const s=t-n,i=e*s;return n+i}function oh(t,e,n,s,i){return i!==void 0&&(t=mr(t,i,s)),mr(t,n,s)+e}function Sa(t,e=0,n=1,s,i){t.min=oh(t.min,e,n,s,i),t.max=oh(t.max,e,n,s,i)}function Km(t,{x:e,y:n}){Sa(t.x,e.translate,e.scale,e.originPoint),Sa(t.y,n.translate,n.scale,n.originPoint)}const ah=.999999999999,lh=1.0000000000001;function _I(t,e,n,s=!1){var a;const i=n.length;if(!i)return;e.x=e.y=1;let r,o;for(let l=0;l<i;l++){r=n[l],o=r.projectionDelta;const{visualElement:c}=r.options;c&&c.props.style&&c.props.style.display==="contents"||(s&&r.options.layoutScroll&&r.scroll&&r!==r.root&&(Je(t.x,-r.scroll.offset.x),Je(t.y,-r.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Km(t,o)),s&&nn(r.latestValues)&&Mi(t,r.latestValues,(a=r.layout)==null?void 0:a.layoutBox))}e.x<lh&&e.x>ah&&(e.x=1),e.y<lh&&e.y>ah&&(e.y=1)}function Je(t,e){t.min+=e,t.max+=e}function ch(t,e,n,s,i=.5){const r=q(t.min,t.max,i);Sa(t,e,n,r,s)}function uh(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Mi(t,e,n){const s=n??t;ch(t.x,uh(e.x,s.x),e.scaleX,e.scale,e.originX),ch(t.y,uh(e.y,s.y),e.scaleY,e.scale,e.originY)}function qm(t,e){return $m(yI(t.getBoundingClientRect(),e))}function vI(t,e,n){const s=qm(t,n),{scroll:i}=e;return i&&(Je(s.x,i.offset.x),Je(s.y,i.offset.y)),s}const wI={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},bI=ts.length;function EI(t,e,n){let s="",i=!0;for(let r=0;r<bI;r++){const o=ts[r],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const c=parseFloat(a);l=o.startsWith("scale")?c===1:c===0}if(!l||n){const c=Lm(a,ql[o]);if(!l){i=!1;const u=wI[o]||o;s+=`${u}(${c}) `}n&&(e[o]=c)}}return s=s.trim(),n?s=n(e,i?"":s):i&&(s="none"),s}function ec(t,e,n){const{style:s,vars:i,transformOrigin:r}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(ns.has(l)){o=!0;continue}else if(im(l)){i[l]=c;continue}else{const u=Lm(c,ql[l]);l.startsWith("origin")?(a=!0,r[l]=u):s[l]=u}}if(e.transform||(o||n?s.transform=EI(e,t.transform,n):s.transform&&(s.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;s.transformOrigin=`${l} ${c} ${u}`}}function Ym(t,{style:e,vars:n},s,i){const r=t.style;let o;for(o in e)r[o]=e[o];i==null||i.applyProjectionStyles(r,s);for(o in n)r.setProperty(o,n[o])}function hh(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const cs={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(A.test(t))t=parseFloat(t);else return t;const n=hh(t,e.target.x),s=hh(t,e.target.y);return`${n}% ${s}%`}},TI={correct:(t,{treeScale:e,projectionDelta:n})=>{const s=t,i=He.parse(t);if(i.length>5)return s;const r=He.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const c=q(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),r(i)}},xa={borderRadius:{...cs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:cs,borderTopRightRadius:cs,borderBottomLeftRadius:cs,borderBottomRightRadius:cs,boxShadow:TI};function Qm(t,{layout:e,layoutId:n}){return ns.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!xa[t]||t==="opacity")}function tc(t,e,n){var o;const s=t.style,i=e==null?void 0:e.style,r={};if(!s)return r;for(const a in s)(pe(s[a])||i&&pe(i[a])||Qm(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(r[a]=s[a]);return r}function CI(t){return window.getComputedStyle(t)}class SI extends Hm{constructor(){super(...arguments),this.type="html",this.renderInstance=Ym}readValueFromInstance(e,n){var s;if(ns.has(n))return(s=this.projection)!=null&&s.isProjecting?da(n):$S(e,n);{const i=CI(e),r=(im(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return qm(e,n)}build(e,n,s){ec(e,n,s.transformTemplate)}scrapeMotionValuesFromProps(e,n,s){return tc(e,n,s)}}const xI={offset:"stroke-dashoffset",array:"stroke-dasharray"},II={offset:"strokeDashoffset",array:"strokeDasharray"};function kI(t,e,n=1,s=0,i=!0){t.pathLength=1;const r=i?xI:II;t[r.offset]=`${-s}`,t[r.array]=`${e} ${n}`}const AI=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Xm(t,{attrX:e,attrY:n,attrScale:s,pathLength:i,pathSpacing:r=1,pathOffset:o=0,...a},l,c,u){if(ec(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:d}=t;h.transform&&(d.transform=h.transform,delete h.transform),(d.transform||h.transformOrigin)&&(d.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),d.transform&&(d.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete h.transformBox);for(const f of AI)h[f]!==void 0&&(d[f]=h[f],delete h[f]);e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),s!==void 0&&(h.scale=s),i!==void 0&&kI(h,i,r,o,!1)}const Jm=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Zm=t=>typeof t=="string"&&t.toLowerCase()==="svg";function PI(t,e,n,s){Ym(t,e,void 0,s);for(const i in e.attrs)t.setAttribute(Jm.has(i)?i:Kl(i),e.attrs[i])}function eg(t,e,n){const s=tc(t,e,n);for(const i in t)if(pe(t[i])||pe(e[i])){const r=ts.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;s[r]=t[i]}return s}class RI extends Hm{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ie}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ns.has(n)){const s=Mm(n);return s&&s.default||0}return n=Jm.has(n)?n:Kl(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,s){return eg(e,n,s)}build(e,n,s){Xm(e,n,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(e,n,s,i){PI(e,n,s,i)}mount(e){this.isSVGTag=Zm(e.tagName),super.mount(e)}}const NI=Zl.length;function tg(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?tg(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<NI;n++){const s=Zl[n],i=t.props[s];(Fs(i)||i===!1)&&(e[s]=i)}return e}function ng(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let s=0;s<n;s++)if(e[s]!==t[s])return!1;return!0}const MI=[...Jl].reverse(),DI=Jl.length;function OI(t){return e=>Promise.all(e.map(({animation:n,options:s})=>Nx(t,n,s)))}function LI(t){let e=OI(t),n=dh(),s=!0,i=!1;const r=c=>(u,h)=>{var f;const d=cn(t,h,c==="exit"?(f=t.presenceContext)==null?void 0:f.custom:void 0);if(d){const{transition:p,transitionEnd:g,...y}=d;u={...u,...y,...g}}return u};function o(c){e=c(t)}function a(c){const{props:u}=t,h=tg(t.parent)||{},d=[],f=new Set;let p={},g=1/0;for(let w=0;w<DI;w++){const b=MI[w],_=n[b],S=u[b]!==void 0?u[b]:h[b],E=Fs(S),M=b===c?_.isActive:null;M===!1&&(g=w);let j=S===h[b]&&S!==u[b]&&E;if(j&&(s||i)&&t.manuallyAnimateOnMount&&(j=!1),_.protectedKeys={...p},!_.isActive&&M===null||!S&&!_.prevProp||Hr(S)||typeof S=="boolean")continue;if(b==="exit"&&_.isActive&&M!==!0){_.prevResolvedValues&&(p={...p,..._.prevResolvedValues});continue}const T=FI(_.prevProp,S);let D=T||b===c&&_.isActive&&!j&&E||w>g&&E,R=!1;const z=Array.isArray(S)?S:[S];let Z=z.reduce(r(b),{});M===!1&&(Z={});const{prevResolvedValues:Pe={}}=_,Te={...Pe,...Z},me=x=>{D=!0,f.has(x)&&(R=!0,f.delete(x)),_.needsAnimating[x]=!0;const ye=t.getValue(x);ye&&(ye.liveStyle=!1)};for(const x in Te){const ye=Z[x],Ye=Pe[x];if(p.hasOwnProperty(x))continue;let ct=!1;_a(ye)&&_a(Ye)?ct=!ng(ye,Ye):ct=ye!==Ye,ct?ye!=null?me(x):f.add(x):ye!==void 0&&f.has(x)?me(x):_.protectedKeys[x]=!0}_.prevProp=S,_.prevResolvedValues=Z,_.isActive&&(p={...p,...Z}),(s||i)&&t.blockInitialAnimation&&(D=!1);const te=j&&T;D&&(!te||R)&&d.push(...z.map(x=>{const ye={type:b};if(typeof x=="string"&&(s||i)&&!te&&t.manuallyAnimateOnMount&&t.parent){const{parent:Ye}=t,ct=cn(Ye,x);if(Ye.enteringChildren&&ct){const{delayChildren:ss}=ct.transition||{};ye.delay=Cm(Ye.enteringChildren,t,ss)}}return{animation:x,options:ye}}))}if(f.size){const w={};if(typeof u.initial!="boolean"){const b=cn(t,Array.isArray(u.initial)?u.initial[0]:u.initial);b&&b.transition&&(w.transition=b.transition)}f.forEach(b=>{const _=t.getBaseTarget(b),S=t.getValue(b);S&&(S.liveStyle=!0),w[b]=_??null}),d.push({animation:w})}let y=!!d.length;return s&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(y=!1),s=!1,i=!1,y?e(d):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=t.variantChildren)==null||d.forEach(f=>{var p;return(p=f.animationState)==null?void 0:p.setActive(c,u)}),n[c].isActive=u;const h=a(c);for(const f in n)n[f].protectedKeys={};return h}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=dh(),i=!0}}}function FI(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!ng(e,t):!1}function Jt(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function dh(){return{animate:Jt(!0),whileInView:Jt(),whileHover:Jt(),whileTap:Jt(),whileDrag:Jt(),whileFocus:Jt(),exit:Jt()}}function Ia(t,e){t.min=e.min,t.max=e.max}function je(t,e){Ia(t.x,e.x),Ia(t.y,e.y)}function fh(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const sg=1e-4,VI=1-sg,jI=1+sg,ig=.01,BI=0-ig,UI=0+ig;function be(t){return t.max-t.min}function WI(t,e,n){return Math.abs(t-e)<=n}function ph(t,e,n,s=.5){t.origin=s,t.originPoint=q(e.min,e.max,t.origin),t.scale=be(n)/be(e),t.translate=q(n.min,n.max,t.origin)-t.originPoint,(t.scale>=VI&&t.scale<=jI||isNaN(t.scale))&&(t.scale=1),(t.translate>=BI&&t.translate<=UI||isNaN(t.translate))&&(t.translate=0)}function bs(t,e,n,s){ph(t.x,e.x,n.x,s?s.originX:void 0),ph(t.y,e.y,n.y,s?s.originY:void 0)}function mh(t,e,n,s=0){const i=s?q(n.min,n.max,s):n.min;t.min=i+e.min,t.max=t.min+be(e)}function zI(t,e,n,s){mh(t.x,e.x,n.x,s==null?void 0:s.x),mh(t.y,e.y,n.y,s==null?void 0:s.y)}function gh(t,e,n,s=0){const i=s?q(n.min,n.max,s):n.min;t.min=e.min-i,t.max=t.min+be(e)}function gr(t,e,n,s){gh(t.x,e.x,n.x,s==null?void 0:s.x),gh(t.y,e.y,n.y,s==null?void 0:s.y)}function yh(t,e,n,s,i){return t-=e,t=mr(t,1/n,s),i!==void 0&&(t=mr(t,1/i,s)),t}function HI(t,e=0,n=1,s=.5,i,r=t,o=t){if(st.test(e)&&(e=parseFloat(e),e=q(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=q(r.min,r.max,s);t===r&&(a-=e),t.min=yh(t.min,e,n,a,i),t.max=yh(t.max,e,n,a,i)}function _h(t,e,[n,s,i],r,o){HI(t,e[n],e[s],e[i],e.scale,r,o)}const $I=["x","scaleX","originX"],GI=["y","scaleY","originY"];function vh(t,e,n,s){_h(t.x,e,$I,n?n.x:void 0,s?s.x:void 0),_h(t.y,e,GI,n?n.y:void 0,s?s.y:void 0)}function wh(t){return t.translate===0&&t.scale===1}function rg(t){return wh(t.x)&&wh(t.y)}function bh(t,e){return t.min===e.min&&t.max===e.max}function KI(t,e){return bh(t.x,e.x)&&bh(t.y,e.y)}function Eh(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function og(t,e){return Eh(t.x,e.x)&&Eh(t.y,e.y)}function Th(t){return be(t.x)/be(t.y)}function Ch(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Xe(t){return[t("x"),t("y")]}function qI(t,e,n){let s="";const i=t.x.translate/e.x,r=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||r||o)&&(s=`translate3d(${i}px, ${r}px, ${o}px) `),(e.x!==1||e.y!==1)&&(s+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:h,rotateY:d,skewX:f,skewY:p}=n;c&&(s=`perspective(${c}px) ${s}`),u&&(s+=`rotate(${u}deg) `),h&&(s+=`rotateX(${h}deg) `),d&&(s+=`rotateY(${d}deg) `),f&&(s+=`skewX(${f}deg) `),p&&(s+=`skewY(${p}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(s+=`scale(${a}, ${l})`),s||"none"}const ag=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],YI=ag.length,Sh=t=>typeof t=="string"?parseFloat(t):t,xh=t=>typeof t=="number"||A.test(t);function QI(t,e,n,s,i,r){i?(t.opacity=q(0,n.opacity??1,XI(s)),t.opacityExit=q(e.opacity??1,0,JI(s))):r&&(t.opacity=q(e.opacity??1,n.opacity??1,s));for(let o=0;o<YI;o++){const a=ag[o];let l=Ih(e,a),c=Ih(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||xh(l)===xh(c)?(t[a]=Math.max(q(Sh(l),Sh(c),s),0),(st.test(c)||st.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=q(e.rotate||0,n.rotate||0,s))}function Ih(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const XI=lg(0,.5,Jp),JI=lg(.5,.95,Fe);function lg(t,e,n){return s=>s<t?0:s>e?1:n(Os(t,e,s))}function ZI(t,e,n){const s=pe(t)?t:zn(t);return s.start($l("",s,e,n)),s.animation}function Vs(t,e,n,s={passive:!0}){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n)}const ek=(t,e)=>t.depth-e.depth;class tk{constructor(){this.children=[],this.isDirty=!1}add(e){Nl(this.children,e),this.isDirty=!0}remove(e){cr(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ek),this.isDirty=!1,this.children.forEach(e)}}function nk(t,e){const n=we.now(),s=({timestamp:i})=>{const r=i-n;r>=e&&(Ht(s),t(r-e))};return $.setup(s,!0),()=>Ht(s)}function Di(t){return pe(t)?t.get():t}class sk{constructor(){this.members=[]}add(e){Nl(this.members,e);for(let n=this.members.length-1;n>=0;n--){const s=this.members[n];if(s===e||s===this.lead||s===this.prevLead)continue;const i=s.instance;(!i||i.isConnected===!1)&&!s.snapshot&&(cr(this.members,s),s.unmount())}e.scheduleRender()}remove(e){if(cr(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let s=this.members.indexOf(e)-1;s>=0;s--){const i=this.members[s];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(e,n){var i;const s=this.lead;if(e!==s&&(this.prevLead=s,this.lead=e,e.show(),s)){s.updateSnapshot(),e.scheduleRender();const{layoutDependency:r}=s.options,{layoutDependency:o}=e.options;(r===void 0||r!==o)&&(e.resumeFrom=s,n&&(s.preserveOpacity=!0),s.snapshot&&(e.snapshot=s.snapshot,e.snapshot.latestValues=s.animationValues||s.latestValues),(i=e.root)!=null&&i.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,s,i,r,o;(s=(n=e.options).onExitComplete)==null||s.call(n),(o=(i=e.resumingFrom)==null?void 0:(r=i.options).onExitComplete)==null||o.call(r)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Oi={hasAnimatedSinceResize:!0,hasEverUpdated:!1},wo=["","X","Y","Z"],ik=1e3;let rk=0;function bo(t,e,n,s){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),s&&(s[t]=0))}function cg(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Am(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:r}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",$,!(i||r))}const{parent:s}=t;s&&!s.hasCheckedOptimisedAppear&&cg(s)}function ug({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:s,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=rk++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(lk),this.nodes.forEach(pk),this.nodes.forEach(mk),this.nodes.forEach(ck)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new tk)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Dl),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Xl(o)&&!aI(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,h=0;const d=()=>this.root.updateBlockedByResize=!1;$.read(()=>{h=window.innerWidth}),t(o,()=>{const f=window.innerWidth;f!==h&&(h=f,this.root.updateBlockedByResize=!0,u&&u(),u=nk(d,250),Oi.hasAnimatedSinceResize&&(Oi.hasAnimatedSinceResize=!1,this.nodes.forEach(Ph)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:d,layout:f})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const p=this.options.transition||c.getDefaultTransition()||wk,{onLayoutAnimationStart:g,onLayoutAnimationComplete:y}=c.getProps(),w=!this.targetLayout||!og(this.targetLayout,f),b=!h&&d;if(this.options.layoutRoot||this.resumeFrom||b||h&&(w||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const _={...Hl(p,"layout"),onPlay:g,onComplete:y};(c.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(u,b)}else h||Ph(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=f})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ht(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(gk),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&cg(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,(typeof h.latestValues.x=="string"||typeof h.latestValues.y=="string")&&(h.isLayoutDirty=!0),h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(hk),this.nodes.forEach(kh);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ah);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(dk),this.nodes.forEach(fk),this.nodes.forEach(ok),this.nodes.forEach(ak)):this.nodes.forEach(Ah),this.clearAllSnapshots();const a=we.now();fe.delta=ot(0,1e3/60,a-fe.timestamp),fe.timestamp=a,fe.isProcessing=!0,ho.update.process(fe),ho.preRender.process(fe),ho.render.process(fe),fe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Yl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(uk),this.sharedNodes.forEach(yk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!be(this.snapshot.measuredBox.x)&&!be(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ie()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=s(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!rg(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||nn(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),bk(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return ie();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(Ek))){const{scroll:u}=this.root;u&&(Je(a.x,u.offset.x),Je(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=ie();if(je(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:h,options:d}=u;u!==this.root&&h&&d.layoutScroll&&(h.wasRoot&&je(a,o),Je(a.x,h.offset.x),Je(a.y,h.offset.y))}return a}applyTransform(o,a=!1,l){var u,h;const c=l||ie();je(c,o);for(let d=0;d<this.path.length;d++){const f=this.path[d];!a&&f.options.layoutScroll&&f.scroll&&f!==f.root&&(Je(c.x,-f.scroll.offset.x),Je(c.y,-f.scroll.offset.y)),nn(f.latestValues)&&Mi(c,f.latestValues,(u=f.layout)==null?void 0:u.layoutBox)}return nn(this.latestValues)&&Mi(c,this.latestValues,(h=this.layout)==null?void 0:h.layoutBox),c}removeTransform(o){var l;const a=ie();je(a,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!nn(u.latestValues))continue;let h;u.instance&&(Ca(u.latestValues)&&u.updateSnapshot(),h=ie(),je(h,u.measurePageBox())),vh(a,u.latestValues,(l=u.snapshot)==null?void 0:l.layoutBox,h)}return nn(this.latestValues)&&vh(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==fe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var f;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(f=this.parent)!=null&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:h}=this.options;if(!this.layout||!(u||h))return;this.resolvedRelativeTargetAt=fe.timestamp;const d=this.getClosestProjectingParent();d&&this.linkedParentVersion!==d.layoutVersion&&!d.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&d&&d.layout?this.createRelativeTarget(d,this.layout.layoutBox,d.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ie(),this.targetWithTransforms=ie()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),zI(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):je(this.target,this.layout.layoutBox),Km(this.target,this.targetDelta)):je(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?this.createRelativeTarget(d,this.target,d.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ca(this.parent.latestValues)||Gm(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ie(),this.relativeTargetOrigin=ie(),gr(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),je(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var p;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===fe.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;je(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,d=this.treeScale.y;_I(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=ie());const{target:f}=o;if(!f){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(fh(this.prevProjectionDelta.x,this.projectionDelta.x),fh(this.prevProjectionDelta.y,this.projectionDelta.y)),bs(this.projectionDelta,this.layoutCorrected,f,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==d||!Ch(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ch(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",f))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=In(),this.projectionDelta=In(),this.projectionDeltaWithTransform=In()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},h=In();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=ie(),f=l?l.source:void 0,p=this.layout?this.layout.source:void 0,g=f!==p,y=this.getStack(),w=!y||y.members.length<=1,b=!!(g&&!w&&this.options.crossfade===!0&&!this.path.some(vk));this.animationProgress=0;let _;this.mixTargetDelta=S=>{const E=S/1e3;Rh(h.x,o.x,E),Rh(h.y,o.y,E),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(gr(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),_k(this.relativeTarget,this.relativeTargetOrigin,d,E),_&&KI(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=ie()),je(_,this.relativeTarget)),g&&(this.animationValues=u,QI(u,c,this.latestValues,E,b,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Ht(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$.update(()=>{Oi.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=zn(0)),this.motionValue.jump(0,!1),this.currentAnimation=ZI(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ik),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&hg(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ie();const h=be(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+h;const d=be(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}je(a,l),Mi(a,u),bs(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new sk),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&bo("z",o,c,this.animationValues);for(let u=0;u<wo.length;u++)bo(`rotate${wo[u]}`,o,c,this.animationValues),bo(`skew${wo[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Di(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Di(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!nn(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let h=qI(this.projectionDeltaWithTransform,this.treeScale,u);l&&(h=l(u,h)),o.transform=h;const{x:d,y:f}=this.projectionDelta;o.transformOrigin=`${d.origin*100}% ${f.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const p in xa){if(u[p]===void 0)continue;const{correct:g,applyTo:y,isCSSVariable:w}=xa[p],b=h==="none"?u[p]:g(u[p],c);if(y){const _=y.length;for(let S=0;S<_;S++)o[y[S]]=b}else w?this.options.visualElement.renderState.vars[p]=b:o[p]=b}this.options.layoutId&&(o.pointerEvents=c===this?Di(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(kh),this.root.sharedNodes.clear()}}}function ok(t){t.updateLayout()}function ak(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:i}=t.layout,{animationType:r}=t.options,o=e.source!==t.layout.source;if(r==="size")Xe(h=>{const d=o?e.measuredBox[h]:e.layoutBox[h],f=be(d);d.min=s[h].min,d.max=d.min+f});else if(r==="x"||r==="y"){const h=r==="x"?"y":"x";Ia(o?e.measuredBox[h]:e.layoutBox[h],s[h])}else hg(r,e.layoutBox,s)&&Xe(h=>{const d=o?e.measuredBox[h]:e.layoutBox[h],f=be(s[h]);d.max=d.min+f,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+f)});const a=In();bs(a,s,e.layoutBox);const l=In();o?bs(l,t.applyTransform(i,!0),e.measuredBox):bs(l,s,e.layoutBox);const c=!rg(a);let u=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:f}=h;if(d&&f){const p=t.options.layoutAnchor||void 0,g=ie();gr(g,e.layoutBox,d.layoutBox,p);const y=ie();gr(y,s,f.layoutBox,p),og(g,y)||(u=!0),h.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=g,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:s,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:s}=t.options;s&&s()}t.options.transition=void 0}function lk(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function ck(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function uk(t){t.clearSnapshot()}function kh(t){t.clearMeasurements()}function hk(t){t.isLayoutDirty=!0,t.updateLayout()}function Ah(t){t.isLayoutDirty=!1}function dk(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function fk(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Ph(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function pk(t){t.resolveTargetDelta()}function mk(t){t.calcProjection()}function gk(t){t.resetSkewAndRotation()}function yk(t){t.removeLeadSnapshot()}function Rh(t,e,n){t.translate=q(e.translate,0,n),t.scale=q(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Nh(t,e,n,s){t.min=q(e.min,n.min,s),t.max=q(e.max,n.max,s)}function _k(t,e,n,s){Nh(t.x,e.x,n.x,s),Nh(t.y,e.y,n.y,s)}function vk(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const wk={duration:.45,ease:[.4,0,.1,1]},Mh=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Dh=Mh("applewebkit/")&&!Mh("chrome/")?Math.round:Fe;function Oh(t){t.min=Dh(t.min),t.max=Dh(t.max)}function bk(t){Oh(t.x),Oh(t.y)}function hg(t,e,n){return t==="position"||t==="preserve-aspect"&&!WI(Th(e),Th(n),.2)}function Ek(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const Tk=ug({attachResizeListener:(t,e)=>Vs(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Eo={current:void 0},dg=ug({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Eo.current){const t=new Tk({});t.mount(window),t.setOptions({layoutScroll:!0}),Eo.current=t}return Eo.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),nc=v.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Lh(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Ck(...t){return e=>{let n=!1;const s=t.map(i=>{const r=Lh(i,e);return!n&&typeof r=="function"&&(n=!0),r});if(n)return()=>{for(let i=0;i<s.length;i++){const r=s[i];typeof r=="function"?r():Lh(t[i],null)}}}}function Sk(...t){return v.useCallback(Ck(...t),t)}class xk extends v.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(Ai(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=n.offsetParent,i=Ai(s)&&s.offsetWidth||0,r=Ai(s)&&s.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=i-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Ik({children:t,isPresent:e,anchorX:n,anchorY:s,root:i,pop:r}){var d;const o=v.useId(),a=v.useRef(null),l=v.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=v.useContext(nc),u=((d=t.props)==null?void 0:d.ref)??(t==null?void 0:t.ref),h=Sk(a,u);return v.useInsertionEffect(()=>{const{width:f,height:p,top:g,left:y,right:w,bottom:b}=l.current;if(e||r===!1||!a.current||!f||!p)return;const _=n==="left"?`left: ${y}`:`right: ${w}`,S=s==="bottom"?`bottom: ${b}`:`top: ${g}`;a.current.dataset.motionPopId=o;const E=document.createElement("style");c&&(E.nonce=c);const M=i??document.head;return M.appendChild(E),E.sheet&&E.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${p}px !important;
            ${_}px !important;
            ${S}px !important;
          }
        `),()=>{var j;(j=a.current)==null||j.removeAttribute("data-motion-pop-id"),M.contains(E)&&M.removeChild(E)}},[e]),m.jsx(xk,{isPresent:e,childRef:a,sizeRef:l,pop:r,children:r===!1?t:v.cloneElement(t,{ref:h})})}const kk=({children:t,initial:e,isPresent:n,onExitComplete:s,custom:i,presenceAffectsLayout:r,mode:o,anchorX:a,anchorY:l,root:c})=>{const u=Rl(Ak),h=v.useId();let d=!0,f=v.useMemo(()=>(d=!1,{id:h,initial:e,isPresent:n,custom:i,onExitComplete:p=>{u.set(p,!0);for(const g of u.values())if(!g)return;s&&s()},register:p=>(u.set(p,!1),()=>u.delete(p))}),[n,u,s]);return r&&d&&(f={...f}),v.useMemo(()=>{u.forEach((p,g)=>u.set(g,!1))},[n]),v.useEffect(()=>{!n&&!u.size&&s&&s()},[n]),t=m.jsx(Ik,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,children:t}),m.jsx(Wr.Provider,{value:f,children:t})};function Ak(){return new Map}function fg(t=!0){const e=v.useContext(Wr);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:s,register:i}=e,r=v.useId();v.useEffect(()=>{if(t)return i(r)},[t]);const o=v.useCallback(()=>t&&s&&s(r),[r,s,t]);return!n&&s?[!1,o]:[!0]}const yi=t=>t.key||"";function Fh(t){const e=[];return v.Children.forEach(t,n=>{v.isValidElement(n)&&e.push(n)}),e}const Pk=({children:t,custom:e,initial:n=!0,onExitComplete:s,presenceAffectsLayout:i=!0,mode:r="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[u,h]=fg(o),d=v.useMemo(()=>Fh(t),[t]),f=o&&!u?[]:d.map(yi),p=v.useRef(!0),g=v.useRef(d),y=Rl(()=>new Map),w=v.useRef(new Set),[b,_]=v.useState(d),[S,E]=v.useState(d);Bp(()=>{p.current=!1,g.current=d;for(let T=0;T<S.length;T++){const D=yi(S[T]);f.includes(D)?(y.delete(D),w.current.delete(D)):y.get(D)!==!0&&y.set(D,!1)}},[S,f.length,f.join("-")]);const M=[];if(d!==b){let T=[...d];for(let D=0;D<S.length;D++){const R=S[D],z=yi(R);f.includes(z)||(T.splice(D,0,R),M.push(R))}return r==="wait"&&M.length&&(T=M),E(Fh(T)),_(d),null}const{forceRender:j}=v.useContext(Pl);return m.jsx(m.Fragment,{children:S.map(T=>{const D=yi(T),R=o&&!u?!1:d===S||f.includes(D),z=()=>{if(w.current.has(D))return;if(y.has(D))w.current.add(D),y.set(D,!0);else return;let Z=!0;y.forEach(Pe=>{Pe||(Z=!1)}),Z&&(j==null||j(),E(g.current),o&&(h==null||h()),s&&s())};return m.jsx(kk,{isPresent:R,initial:!p.current||n?void 0:!1,custom:e,presenceAffectsLayout:i,mode:r,root:c,onExitComplete:R?void 0:z,anchorX:a,anchorY:l,children:T},D)})})},pg=v.createContext({strict:!1}),Vh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let jh=!1;function Rk(){if(jh)return;const t={};for(const e in Vh)t[e]={isEnabled:n=>Vh[e].some(s=>!!n[s])};zm(t),jh=!0}function mg(){return Rk(),pI()}function Nk(t){const e=mg();for(const n in t)e[n]={...e[n],...t[n]};zm(e)}const Mk=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function yr(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Mk.has(t)}let gg=t=>!yr(t);function Dk(t){typeof t=="function"&&(gg=e=>e.startsWith("on")?!yr(e):t(e))}try{Dk(require("@emotion/is-prop-valid").default)}catch{}function Ok(t,e,n){const s={};for(const i in t)i==="values"&&typeof t.values=="object"||pe(t[i])||(gg(i)||n===!0&&yr(i)||!e&&!yr(i)||t.draggable&&i.startsWith("onDrag"))&&(s[i]=t[i]);return s}const Gr=v.createContext({});function Lk(t,e){if($r(t)){const{initial:n,animate:s}=t;return{initial:n===!1||Fs(n)?n:void 0,animate:Fs(s)?s:void 0}}return t.inherit!==!1?e:{}}function Fk(t){const{initial:e,animate:n}=Lk(t,v.useContext(Gr));return v.useMemo(()=>({initial:e,animate:n}),[Bh(e),Bh(n)])}function Bh(t){return Array.isArray(t)?t.join(" "):t}const sc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function yg(t,e,n){for(const s in e)!pe(e[s])&&!Qm(s,n)&&(t[s]=e[s])}function Vk({transformTemplate:t},e){return v.useMemo(()=>{const n=sc();return ec(n,e,t),Object.assign({},n.vars,n.style)},[e])}function jk(t,e){const n=t.style||{},s={};return yg(s,n,t),Object.assign(s,Vk(t,e)),s}function Bk(t,e){const n={},s=jk(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=s,n}const _g=()=>({...sc(),attrs:{}});function Uk(t,e,n,s){const i=v.useMemo(()=>{const r=_g();return Xm(r,e,Zm(s),t.transformTemplate,t.style),{...r.attrs,style:{...r.style}}},[e]);if(t.style){const r={};yg(r,t.style,t),i.style={...r,...i.style}}return i}const Wk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ic(t){return typeof t!="string"||t.includes("-")?!1:!!(Wk.indexOf(t)>-1||/[A-Z]/u.test(t))}function zk(t,e,n,{latestValues:s},i,r=!1,o){const l=(o??ic(t)?Uk:Bk)(e,s,i,t),c=Ok(e,typeof t=="string",r),u=t!==v.Fragment?{...c,...l,ref:n}:{},{children:h}=e,d=v.useMemo(()=>pe(h)?h.get():h,[h]);return v.createElement(t,{...u,children:d})}function Hk({scrapeMotionValuesFromProps:t,createRenderState:e},n,s,i){return{latestValues:$k(n,s,i,t),renderState:e()}}function $k(t,e,n,s){const i={},r=s(t,{});for(const d in r)i[d]=Di(r[d]);let{initial:o,animate:a}=t;const l=$r(t),c=Um(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const h=u?a:o;if(h&&typeof h!="boolean"&&!Hr(h)){const d=Array.isArray(h)?h:[h];for(let f=0;f<d.length;f++){const p=Gl(t,d[f]);if(p){const{transitionEnd:g,transition:y,...w}=p;for(const b in w){let _=w[b];if(Array.isArray(_)){const S=u?_.length-1:0;_=_[S]}_!==null&&(i[b]=_)}for(const b in g)i[b]=g[b]}}}return i}const vg=t=>(e,n)=>{const s=v.useContext(Gr),i=v.useContext(Wr),r=()=>Hk(t,e,s,i);return n?r():Rl(r)},Gk=vg({scrapeMotionValuesFromProps:tc,createRenderState:sc}),Kk=vg({scrapeMotionValuesFromProps:eg,createRenderState:_g}),qk=Symbol.for("motionComponentSymbol");function Yk(t,e,n){const s=v.useRef(n);v.useInsertionEffect(()=>{s.current=n});const i=v.useRef(null);return v.useCallback(r=>{var a;r&&((a=t.onMount)==null||a.call(t,r));const o=s.current;if(typeof o=="function")if(r){const l=o(r);typeof l=="function"&&(i.current=l)}else i.current?(i.current(),i.current=null):o(r);else o&&(o.current=r);e&&(r?e.mount(r):e.unmount())},[e])}const wg=v.createContext({});function Tn(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Qk(t,e,n,s,i,r){var _,S;const{visualElement:o}=v.useContext(Gr),a=v.useContext(pg),l=v.useContext(Wr),c=v.useContext(nc),u=c.reducedMotion,h=c.skipAnimations,d=v.useRef(null),f=v.useRef(!1);s=s||a.renderer,!d.current&&s&&(d.current=s(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:h,isSVG:r}),f.current&&d.current&&(d.current.manuallyAnimateOnMount=!0));const p=d.current,g=v.useContext(wg);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&Xk(d.current,n,i,g);const y=v.useRef(!1);v.useInsertionEffect(()=>{p&&y.current&&p.update(n,l)});const w=n[km],b=v.useRef(!!w&&typeof window<"u"&&!((_=window.MotionHandoffIsComplete)!=null&&_.call(window,w))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,w)));return Bp(()=>{f.current=!0,p&&(y.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),p.scheduleRenderMicrotask(),b.current&&p.animationState&&p.animationState.animateChanges())}),v.useEffect(()=>{p&&(!b.current&&p.animationState&&p.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)==null||E.call(window,w)}),b.current=!1),p.enteringChildren=void 0)}),p}function Xk(t,e,n,s){const{layoutId:i,layout:r,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:h}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:bg(t.parent)),t.projection.setOptions({layoutId:i,layout:r,alwaysMeasureLayout:!!o||a&&Tn(a),visualElement:t,animationType:typeof r=="string"?r:"both",initialPromotionConfig:s,crossfade:h,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function bg(t){if(t)return t.options.allowProjection!==!1?t.projection:bg(t.parent)}function To(t,{forwardMotionProps:e=!1,type:n}={},s,i){s&&Nk(s);const r=n?n==="svg":ic(t),o=r?Kk:Gk;function a(c,u){let h;const d={...v.useContext(nc),...c,layoutId:Jk(c)},{isStatic:f}=d,p=Fk(c),g=o(c,f);if(!f&&typeof window<"u"){Zk();const y=eA(d);h=y.MeasureLayout,p.visualElement=Qk(t,g,d,i,y.ProjectionNode,r)}return m.jsxs(Gr.Provider,{value:p,children:[h&&p.visualElement?m.jsx(h,{visualElement:p.visualElement,...d}):null,zk(t,c,Yk(g,p.visualElement,u),g,f,e,r)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=v.forwardRef(a);return l[qk]=t,l}function Jk({layoutId:t}){const e=v.useContext(Pl).id;return e&&t!==void 0?e+"-"+t:t}function Zk(t,e){v.useContext(pg).strict}function eA(t){const e=mg(),{drag:n,layout:s}=e;if(!n&&!s)return{};const i={...n,...s};return{MeasureLayout:n!=null&&n.isEnabled(t)||s!=null&&s.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function tA(t,e){if(typeof Proxy>"u")return To;const n=new Map,s=(r,o)=>To(r,o,t,e),i=(r,o)=>s(r,o);return new Proxy(i,{get:(r,o)=>o==="create"?s:(n.has(o)||n.set(o,To(o,void 0,t,e)),n.get(o))})}const nA=(t,e)=>e.isSVG??ic(t)?new RI(e):new SI(e,{allowProjection:t!==v.Fragment});class sA extends Qt{constructor(e){super(e),e.animationState||(e.animationState=LI(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Hr(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let iA=0;class rA extends Qt{constructor(){super(...arguments),this.id=iA++,this.isExitComplete=!1}update(){var r;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===s)return;if(e&&s===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"){const l=cn(this.node,o,a);if(l){const{transition:c,transitionEnd:u,...h}=l;for(const d in h)(r=this.node.getValue(d))==null||r.jump(h[d])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const oA={animation:{Feature:sA},exit:{Feature:rA}};function ii(t){return{point:{x:t.pageX,y:t.pageY}}}const aA=t=>e=>Ql(e)&&t(e,ii(e));function Es(t,e,n,s){return Vs(t,e,aA(n),s)}const Eg=({current:t})=>t?t.ownerDocument.defaultView:null,Uh=(t,e)=>Math.abs(t-e);function lA(t,e){const n=Uh(t.x,e.x),s=Uh(t.y,e.y);return Math.sqrt(n**2+s**2)}const Wh=new Set(["auto","scroll"]);class Tg{constructor(e,n,{transformPagePoint:s,contextWindow:i=window,dragSnapToOrigin:r=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=f=>{this.handleScroll(f.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=_i(this.lastRawMoveEventInfo,this.transformPagePoint));const f=Co(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=lA(f.offset,{x:0,y:0})>=this.distanceThreshold;if(!p&&!g)return;const{point:y}=f,{timestamp:w}=fe;this.history.push({...y,timestamp:w});const{onStart:b,onMove:_}=this.handlers;p||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastRawMoveEventInfo=p,this.lastMoveEventInfo=_i(p,this.transformPagePoint),$.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:g,onSessionEnd:y,resumeAnimation:w}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Co(f.type==="pointercancel"?this.lastMoveEventInfo:_i(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,b),y&&y(f,b)},!Ql(e))return;this.dragSnapToOrigin=r,this.handlers=n,this.transformPagePoint=s,this.distanceThreshold=o,this.contextWindow=i||window;const l=ii(e),c=_i(l,this.transformPagePoint),{point:u}=c,{timestamp:h}=fe;this.history=[{...u,timestamp:h}];const{onSessionStart:d}=n;d&&d(e,Co(c,this.history)),this.removeListeners=ti(Es(this.contextWindow,"pointermove",this.handlePointerMove),Es(this.contextWindow,"pointerup",this.handlePointerUp),Es(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const s=getComputedStyle(n);(Wh.has(s.overflowX)||Wh.has(s.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const s=e===window,i=s?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},r={x:i.x-n.x,y:i.y-n.y};r.x===0&&r.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=r.x,this.lastMoveEventInfo.point.y+=r.y):this.history.length>0&&(this.history[0].x-=r.x,this.history[0].y-=r.y),this.scrollPositions.set(e,i),$.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ht(this.updatePoint)}}function _i(t,e){return e?{point:e(t.point)}:t}function zh(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Co({point:t},e){return{point:t,delta:zh(t,Cg(e)),offset:zh(t,cA(e)),velocity:uA(e,.1)}}function cA(t){return t[0]}function Cg(t){return t[t.length-1]}function uA(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,s=null;const i=Cg(t);for(;n>=0&&(s=t[n],!(i.timestamp-s.timestamp>Ie(e)));)n--;if(!s)return{x:0,y:0};s===t[0]&&t.length>2&&i.timestamp-s.timestamp>Ie(e)*2&&(s=t[1]);const r=Oe(i.timestamp-s.timestamp);if(r===0)return{x:0,y:0};const o={x:(i.x-s.x)/r,y:(i.y-s.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function hA(t,{min:e,max:n},s){return e!==void 0&&t<e?t=s?q(e,t,s.min):Math.max(t,e):n!==void 0&&t>n&&(t=s?q(n,t,s.max):Math.min(t,n)),t}function Hh(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function dA(t,{top:e,left:n,bottom:s,right:i}){return{x:Hh(t.x,n,i),y:Hh(t.y,e,s)}}function $h(t,e){let n=e.min-t.min,s=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,s]=[s,n]),{min:n,max:s}}function fA(t,e){return{x:$h(t.x,e.x),y:$h(t.y,e.y)}}function pA(t,e){let n=.5;const s=be(t),i=be(e);return i>s?n=Os(e.min,e.max-s,t.min):s>i&&(n=Os(t.min,t.max-i,e.min)),ot(0,1,n)}function mA(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const ka=.35;function gA(t=ka){return t===!1?t=0:t===!0&&(t=ka),{x:Gh(t,"left","right"),y:Gh(t,"top","bottom")}}function Gh(t,e,n){return{min:Kh(t,e),max:Kh(t,n)}}function Kh(t,e){return typeof t=="number"?t:t[e]||0}const yA=new WeakMap;class _A{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ie(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:s}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=h=>{n&&this.snapToCursor(ii(h).point),this.stopAnimation()},o=(h,d)=>{const{drag:f,dragPropagation:p,onDragStart:g}=this.getProps();if(f&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Hx(f),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=d,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xe(w=>{let b=this.getAxisMotionValue(w).get()||0;if(st.test(b)){const{projection:_}=this.visualElement;if(_&&_.layout){const S=_.layout.layoutBox[w];S&&(b=be(S)*(parseFloat(b)/100))}}this.originPoint[w]=b}),g&&$.update(()=>g(h,d),!1,!0),va(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(h,d)=>{this.latestPointerEvent=h,this.latestPanInfo=d;const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:g,onDrag:y}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:w}=d;if(p&&this.currentDirection===null){this.currentDirection=wA(w),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",d.point,w),this.updateAxis("y",d.point,w),this.visualElement.render(),y&&$.update(()=>y(h,d),!1,!0)},l=(h,d)=>{this.latestPointerEvent=h,this.latestPanInfo=d,this.stop(h,d),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new Tg(e,{onSessionStart:r,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:s,contextWindow:Eg(this.visualElement),element:this.visualElement.current})}stop(e,n){const s=e||this.latestPointerEvent,i=n||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!i||!s)return;const{velocity:o}=i;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&$.postRender(()=>a(s,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,s){const{drag:i}=this.getProps();if(!s||!vi(e,i,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+s[e];this.constraints&&this.constraints[e]&&(o=hA(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){var r;const{dragConstraints:e,dragElastic:n}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)==null?void 0:r.layout,i=this.constraints;e&&Tn(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&s?this.constraints=dA(s.layoutBox,e):this.constraints=!1,this.elastic=gA(n),i!==this.constraints&&!Tn(e)&&s&&this.constraints&&!this.hasMutatedConstraints&&Xe(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=mA(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Tn(e))return!1;const s=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const r=vI(s,i.root,this.visualElement.getTransformPagePoint());let o=fA(i.layout.layoutBox,r);if(n){const a=n(gI(o));this.hasMutatedConstraints=!!a,a&&(o=$m(a))}return o}startAnimation(e){const{drag:n,dragMomentum:s,dragElastic:i,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Xe(u=>{if(!vi(u,n,this.currentDirection))return;let h=l&&l[u]||{};(o===!0||o===u)&&(h={min:0,max:0});const d=i?200:1e6,f=i?40:1e7,p={type:"inertia",velocity:s?e[u]:0,bounceStiffness:d,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...r,...h};return this.startAxisValueAnimation(u,p)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const s=this.getAxisMotionValue(e);return va(this.visualElement,e),s.start($l(e,s,0,n,this.visualElement,!1))}stopAnimation(){Xe(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,s=this.visualElement.getProps(),i=s[n];return i||this.visualElement.getValue(e,(s.initial?s.initial[e]:void 0)||0)}snapToCursor(e){Xe(n=>{const{drag:s}=this.getProps();if(!vi(n,s,this.currentDirection))return;const{projection:i}=this.visualElement,r=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n],l=r.get()||0;r.set(e[n]-q(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!Tn(n)||!s||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Xe(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=pA({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),Xe(o=>{if(!vi(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(q(l,c,i[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;yA.set(this.visualElement,this);const e=this.visualElement.current,n=Es(e,"pointerdown",c=>{const{drag:u,dragListener:h=!0}=this.getProps(),d=c.target,f=d!==e&&Qx(d);u&&h&&!f&&this.start(c)});let s;const i=()=>{const{dragConstraints:c}=this.getProps();Tn(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),s||(s=vA(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:r}=this.visualElement,o=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),$.read(i);const a=Vs(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",(({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Xe(h=>{const d=this.getAxisMotionValue(h);d&&(this.originPoint[h]+=c[h].translate,d.set(d.get()+c[h].translate))}),this.visualElement.render())}));return()=>{a(),n(),o(),l&&l(),s&&s()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:i=!1,dragConstraints:r=!1,dragElastic:o=ka,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:s,dragPropagation:i,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function qh(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function vA(t,e,n){const s=th(t,qh(n)),i=th(e,qh(n));return()=>{s(),i()}}function vi(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function wA(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class bA extends Qt{constructor(e){super(e),this.removeGroupControls=Fe,this.removeListeners=Fe,this.controls=new _A(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Fe}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const So=t=>(e,n)=>{t&&$.update(()=>t(e,n),!1,!0)};class EA extends Qt{constructor(){super(...arguments),this.removePointerDownListener=Fe}onPointerDown(e){this.session=new Tg(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Eg(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:s,onPanEnd:i}=this.node.getProps();return{onSessionStart:So(e),onStart:So(n),onMove:So(s),onEnd:(r,o)=>{delete this.session,i&&$.postRender(()=>i(r,o))}}}mount(){this.removePointerDownListener=Es(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let xo=!1;class TA extends v.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:s,layoutId:i}=this.props,{projection:r}=e;r&&(n.group&&n.group.add(r),s&&s.register&&i&&s.register(r),xo&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Oi.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:s,drag:i,isPresent:r}=this.props,{projection:o}=s;return o&&(o.isPresent=r,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),xo=!0,i||e.layoutDependency!==n||n===void 0||e.isPresent!==r?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||$.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:s}=e;s&&(s.options.layoutAnchor=n,s.root.didUpdate(),Yl.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:i}=e;xo=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),s&&s.deregister&&s.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Sg(t){const[e,n]=fg(),s=v.useContext(Pl);return m.jsx(TA,{...t,layoutGroup:s,switchLayoutGroup:v.useContext(wg),isPresent:e,safeToRemove:n})}const CA={pan:{Feature:EA},drag:{Feature:bA,ProjectionNode:dg,MeasureLayout:Sg}};function Yh(t,e,n){const{props:s}=t;t.animationState&&s.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,r=s[i];r&&$.postRender(()=>r(e,ii(e)))}class SA extends Qt{mount(){const{current:e}=this.node;e&&(this.unmount=Gx(e,(n,s)=>(Yh(this.node,s,"Start"),i=>Yh(this.node,i,"End"))))}unmount(){}}class xA extends Qt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ti(Vs(this.node.current,"focus",()=>this.onFocus()),Vs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Qh(t,e,n){const{props:s}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&s.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),r=s[i];r&&$.postRender(()=>r(e,ii(e)))}class IA extends Qt{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:s}=this.node.props;this.unmount=Jx(e,(i,r)=>(Qh(this.node,r,"Start"),(o,{success:a})=>Qh(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const Aa=new WeakMap,Io=new WeakMap,kA=t=>{const e=Aa.get(t.target);e&&e(t)},AA=t=>{t.forEach(kA)};function PA({root:t,...e}){const n=t||document;Io.has(n)||Io.set(n,{});const s=Io.get(n),i=JSON.stringify(e);return s[i]||(s[i]=new IntersectionObserver(AA,{root:t,...e})),s[i]}function RA(t,e,n){const s=PA(e);return Aa.set(t,n),s.observe(t),()=>{Aa.delete(t),s.unobserve(t)}}const NA={some:0,all:1};class MA extends Qt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:s,amount:i="some",once:r}=e,o={root:n?n.current:void 0,rootMargin:s,threshold:typeof i=="number"?i:NA[i]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,r&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:h,onViewportLeave:d}=this.node.getProps(),f=u?h:d;f&&f(c)};this.stopObserver=RA(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(DA(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function DA({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const OA={inView:{Feature:MA},tap:{Feature:IA},focus:{Feature:xA},hover:{Feature:SA}},LA={layout:{ProjectionNode:dg,MeasureLayout:Sg}},FA={...oA,...OA,...CA,...LA},kn=tA(FA,nA);function ko({className:t,type:e,...n}){return m.jsx("input",{type:e,"data-slot":"input",className:Yt("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t),...n})}function Zt({className:t,...e}){return m.jsx(Ng,{"data-slot":"label",className:Yt("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",t),...e})}function VA({isOpen:t,onClose:e,userData:n,onUpdateUserData:s,onRemoveUser:i,showRemoveButton:r=!1}){const[o,a]=v.useState(!1),[l,c]=v.useState(n);v.useEffect(()=>{c(n)},[n]);const u=String(n.role||"").toLowerCase()!=="admin",h=()=>{s(l),a(!1)},d=()=>{c(n),a(!1)},f=()=>{confirm(`Are you sure you want to remove ${n.name} from the system?`)&&(i==null||i(),e())},p=g=>{var w;const y=(w=g.target.files)==null?void 0:w[0];if(y){const b=new FileReader;b.onloadend=()=>{c({...l,avatar:b.result})},b.readAsDataURL(y)}};return m.jsx(Pk,{children:t&&m.jsxs(m.Fragment,{children:[m.jsx(kn.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e,className:"fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"}),m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:m.jsxs(kn.div,{initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{duration:.2},className:"relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden",onClick:g=>g.stopPropagation(),children:[m.jsx("div",{className:"bg-gradient-to-r from-green-600 to-green-700 px-8 py-6",children:m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsxs("div",{className:"relative",children:[m.jsx("div",{className:"flex h-20 w-20 items-center justify-center rounded-full bg-white/20 overflow-hidden",children:l.avatar?m.jsx("img",{src:l.avatar,alt:l.name,className:"h-full w-full object-cover"}):m.jsx(na,{className:"h-10 w-10 text-white"})}),o&&m.jsxs("label",{className:"absolute bottom-0 right-0 h-6 w-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-100 transition-colors",children:[m.jsx(Y0,{className:"h-3 w-3 text-gray-700"}),m.jsx("input",{type:"file",accept:"image/*",onChange:p,className:"hidden"})]})]}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-2xl font-bold text-white",children:o?"Edit Profile":"User Profile"}),m.jsx("p",{className:"text-green-100",children:n.role})]})]}),m.jsx("button",{onClick:e,className:"rounded-full p-2 bg-white/20 text-white hover:bg-white/30 transition-colors",children:m.jsx(Ap,{className:"h-6 w-6"})})]})}),m.jsxs("div",{className:"p-8",children:[m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[m.jsxs("div",{className:"space-y-2",children:[m.jsxs(Zt,{className:"flex items-center gap-2 text-gray-700",children:[m.jsx(na,{className:"h-4 w-4"}),"Full Name"]}),o?m.jsx(ko,{value:l.name,onChange:g=>c({...l,name:g.target.value}),className:"border-gray-300"}):m.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.name})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsxs(Zt,{className:"flex items-center gap-2 text-gray-700",children:[m.jsx(L0,{className:"h-4 w-4"}),"Email Address"]}),o?m.jsx(ko,{type:"email",value:l.email,onChange:g=>c({...l,email:g.target.value}),className:"border-gray-300"}):m.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.email})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsxs(Zt,{className:"flex items-center gap-2 text-gray-700",children:[m.jsx(z0,{className:"h-4 w-4"}),"Phone Number"]}),o?m.jsx(ko,{value:l.phone,onChange:g=>c({...l,phone:g.target.value}),className:"border-gray-300"}):m.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.phone})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsxs(Zt,{className:"flex items-center gap-2 text-gray-700",children:[m.jsx(kp,{className:"h-4 w-4"}),"Department"]}),o?m.jsxs("select",{value:l.department,onChange:g=>c({...l,department:g.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",children:[m.jsx("option",{value:"Administration",children:"Administration"}),m.jsx("option",{value:"Operations",children:"Operations"}),m.jsx("option",{value:"Management",children:"Management"}),m.jsx("option",{value:"Analytics",children:"Analytics"}),m.jsx("option",{value:"Maintenance",children:"Maintenance"})]}):m.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.department})]}),m.jsxs("div",{className:"space-y-2 md:col-span-2",children:[m.jsxs(Zt,{className:"flex items-center gap-2 text-gray-700",children:[m.jsx(Ip,{className:"h-4 w-4"}),"Role"]}),o?m.jsxs("select",{value:l.role,onChange:g=>c({...l,role:g.target.value}),className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",children:[m.jsx("option",{value:"staff",children:"Staff"}),m.jsx("option",{value:"admin",children:"Admin"})]}):m.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.role})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsxs(Zt,{className:"flex items-center gap-2 text-gray-700",children:[m.jsx(T0,{className:"h-4 w-4"}),"Member Since"]}),m.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.joinedDate})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsxs(Zt,{className:"flex items-center gap-2 text-gray-700",children:[m.jsx(k0,{className:"h-4 w-4"}),"Last Login"]}),m.jsx("p",{className:"text-gray-900 font-medium p-2 bg-gray-50 rounded-lg",children:n.lastLogin})]})]}),m.jsx("div",{className:"flex gap-3 mt-8 pt-6 border-t",children:o?m.jsxs(m.Fragment,{children:[m.jsxs(ds,{onClick:h,className:"flex-1 bg-green-600 hover:bg-green-700 text-white cursor-pointer",children:[m.jsx($0,{className:"h-4 w-4 mr-2"}),"Save Changes"]}),m.jsx(ds,{onClick:d,variant:"outline",className:"flex-1 cursor-pointer",children:"Cancel"})]}):m.jsxs(m.Fragment,{children:[m.jsxs(ds,{onClick:()=>a(!0),className:"flex-1 bg-green-600 hover:bg-green-700 text-white cursor-pointer",children:[m.jsx(xp,{className:"h-4 w-4 mr-2"}),"Edit Profile"]}),r&&u&&m.jsxs(ds,{onClick:f,className:"flex-1 bg-red-600 hover:bg-red-700 text-white cursor-pointer",children:[m.jsx(Ur,{className:"h-4 w-4 mr-2"}),"Remove User"]})]})})]})]})})]})})}const jA=[{name:"Dashboard",href:"/",icon:N0},{name:"Bin Monitoring",href:"/bins",icon:Ur},{name:"Map & Location",href:"/map",icon:V0},{name:"Alerts",href:"/alerts",icon:b0},{name:"Rot Index",href:"/rot-index",icon:v0},{name:"Analytics",href:"/analytics",icon:S0},{name:"Workers",href:"/workers",icon:kp},{name:"Maintenance",href:"/maintenance",icon:tC},{name:"User Management",href:"/users",icon:Ip}];function BA({onLogout:t}){var u;const[e,n]=v.useState(!1),[s,i]=v.useState(!1),[r,o]=v.useState({id:1,name:"Admin User",email:((u=Ft.currentUser)==null?void 0:u.email)||"",phone:"",role:"admin",department:"Administration",joinedDate:"January 2024",status:"active",lastLogin:"Just now"}),a=Dg();v.useEffect(()=>{let h=!0;return(async()=>{const f=Ft.currentUser;if(f!=null&&f.email)try{const p=await lr(f.email);if(!h)return;o(g=>({...g,name:(p==null?void 0:p.name)||f.displayName||"Admin User",email:f.email||"",phone:(p==null?void 0:p.phone)||"",role:(p==null?void 0:p.role)||"admin",department:(p==null?void 0:p.department)||(p==null?void 0:p.team)||"Administration",joinedDate:(p==null?void 0:p.joinedDate)||g.joinedDate,status:(p==null?void 0:p.status)||"active",lastLogin:(p==null?void 0:p.lastLogin)||"Just now"}))}catch(p){console.error("Failed to load current user profile:",p)}})(),()=>{h=!1}},[]);const l=h=>h==="/"?a.pathname==="/":a.pathname.startsWith(h),c=h=>{o(h),(async()=>{var d;try{const f=await lr((d=Ft.currentUser)==null?void 0:d.email);f&&f.id&&await d0(f.id,{name:h.name,phone:h.phone,department:h.department,role:h.role})}catch(f){console.debug("Could not persist dashboard profile to DB:",f)}})()};return m.jsxs("div",{className:"min-h-screen bg-white",children:[e&&m.jsx("div",{className:"fixed inset-0 z-40 bg-black/50 lg:hidden",onClick:()=>n(!1)}),m.jsxs("aside",{className:`fixed inset-y-0 left-0 z-50 w-64 transform bg-gray-50 shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 ${e?"translate-x-0":"-translate-x-full"}`,children:[m.jsxs("div",{className:"flex h-16 items-center gap-2 px-6",children:[m.jsxs(ac,{to:"/",onClick:()=>n(!1),className:"flex items-center gap-2 hover:opacity-80 transition-opacity",children:[m.jsx("div",{className:"rounded-lg bg-green-600 p-2",children:m.jsx(Ur,{className:"h-6 w-6 text-white"})}),m.jsx("span",{className:"text-xl font-bold text-gray-900",children:"OMNIBINS"})]}),m.jsx("button",{onClick:()=>n(!1),className:"ml-auto lg:hidden",children:m.jsx(Ap,{className:"h-6 w-6"})})]}),m.jsx("nav",{className:"flex-1 space-y-1 overflow-y-auto px-3 py-4",children:jA.map(h=>{const d=h.icon,f=l(h.href);return m.jsxs(ac,{to:h.href,onClick:()=>n(!1),className:`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${f?"bg-green-600 text-white":"text-gray-700 hover:bg-gray-100"}`,children:[m.jsx(d,{className:"h-5 w-5"}),h.name]},h.name)})}),m.jsxs("div",{className:"border-t p-4",children:[m.jsxs("button",{onClick:()=>i(!0),className:"w-full flex items-center gap-3 mb-3 hover:bg-gray-100 p-2 rounded-lg transition-colors cursor-pointer",children:[m.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-full bg-green-600 flex-shrink-0",children:m.jsx(na,{className:"h-5 w-5 text-white"})}),m.jsxs("div",{className:"flex-1 min-w-0 text-left",children:[m.jsx("p",{className:"text-sm font-medium text-gray-900 truncate",children:r.name}),m.jsx("p",{className:"text-xs text-gray-500 truncate",children:r.email})]}),m.jsx(xp,{className:"h-4 w-4 text-gray-400"})]}),m.jsxs(ds,{variant:"outline",className:"w-full justify-start gap-2 cursor-pointer",onClick:t,children:[m.jsx(D0,{className:"h-4 w-4"}),"Logout"]})]})]}),m.jsx(VA,{isOpen:s,onClose:()=>i(!1),userData:r,onUpdateUserData:c}),m.jsxs("div",{className:"lg:pl-64",children:[m.jsx("div",{className:"flex items-center justify-between border-b border-gray-200 bg-white px-4 py-4 lg:hidden",children:m.jsx("button",{type:"button",onClick:()=>n(!0),className:"inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100","aria-label":"Open navigation menu",children:m.jsx(B0,{className:"h-5 w-5"})})}),m.jsx("main",{className:"p-6",children:m.jsx(Og,{})})]})]})}const Qe=(t,e=0)=>{if(typeof t=="number")return t;if(typeof t=="string"){const n=parseFloat(t);return Number.isFinite(n)?n:e}return e},xg=t=>Math.log10(Math.max(t,1e-6)),UA=t=>t.status?t.status:t.weight>=80?"Full":t.weight>=60?"Near Full":t.weight<=20?"Empty":"Normal",WA=(t,e=10)=>{if(t<=0||e<=0)return 0;const n=t/e,s=-.38*xg(n)+1.96,i=Math.pow(10,s);return Number.isFinite(i)?i:0},zA=(t,e=10)=>{if(t<=0||e<=0)return 0;const n=t/e,s=-.48*xg(n)+1.77,i=Math.pow(10,s);return Number.isFinite(i)?i:0},HA=(t,e)=>{const n=Qe(e.weight??e.weight_kg??e.wasteWeight??0),s=Qe(e.capacity??e.fillLevel??0),i=Qe(e.mq135??0),r=Qe(e.mq4??0),o=Qe(e.mq135_r0??10),a=Qe(e.mq4_r0??10),l=e.nh3!=null?Qe(e.nh3):zA(i,o),c=e.ch4!=null?Qe(e.ch4):WA(r,a),u=Qe(e.distance??e.distance_cm??0),h=Qe(e.timestamp??e.time??e.updatedAt??0),d={id:t,location:String(e.location??e.node??t),weight:n,capacity:s,nh3:l,ch4:c,status:String(e.status??""),node:e.node?String(e.node):void 0,distance:u||void 0,timestamp:h||void 0};return{...d,status:d.status||UA(d)}};function Ig(t){return String(t??"").toLowerCase().replace(/[^a-z0-9]/g,"")}function $A(t){return new Set([t.id,t.node,t.sensorDataName,t.sensorNode,t.sensorId,t.sensor_id].map(Ig).filter(Boolean))}function kg(t){return new Set([t.node,t.id,t.bin,t.binId,t.bin_id].map(Ig).filter(Boolean))}function GA(t){const e=kg(t);return["node1","node01","node=1","node=01"].some(n=>e.has(n))?"bin10":null}function KA(t,e){const n=kg(t),s=$A(e),i=GA(t);return i&&n.add(i),Array.from(n).some(r=>s.has(r))}function qA(t,e){return e.some(n=>KA(t,n))}function wi({className:t,...e}){return m.jsx("div",{"data-slot":"card",className:Yt("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",t),...e})}function bi({className:t,...e}){return m.jsx("div",{"data-slot":"card-header",className:Yt("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",t),...e})}function Ei({className:t,...e}){return m.jsx("h4",{"data-slot":"card-title",className:Yt("leading-none",t),...e})}function oR({className:t,...e}){return m.jsx("p",{"data-slot":"card-description",className:Yt("text-muted-foreground",t),...e})}function Ti({className:t,...e}){return m.jsx("div",{"data-slot":"card-content",className:Yt("px-6 [&:last-child]:pb-6",t),...e})}function Li(t){if(typeof t=="number"&&Number.isFinite(t))return t>0&&t<1e12?t*1e3:t;if(typeof t!="string"||!t.trim())return null;const e=Number(t);if(Number.isFinite(e))return e>0&&e<1e12?e*1e3:e;if(/^\d{1,2}:\d{2}(?:\s|$)/.test(t.trim()))return null;const n=Date.parse(t);return Number.isFinite(n)?n:null}function YA(t){return[t.finishedAt,t.completedAt,t.timestamp,t.time,t.createdAt,t.created_at,t.scheduledDate].map(Li).find(n=>n!==null)??null}function Xh(t){const e=t.filter(n=>String(n.status??"").toLowerCase()==="completed");return Array.from({length:7},(n,s)=>{const i=new Date;i.setHours(0,0,0,0),i.setDate(i.getDate()-(6-s));const r=i.getTime(),o=r+1440*60*1e3,a=e.filter(l=>{const c=YA(l);return c!==null&&c>=r&&c<o}).length;return{day:i.toLocaleDateString("en-US",{weekday:"short"}),collections:a}})}function QA(){const[t,e]=v.useState([]),[n,s]=v.useState({totalBins:0,fullBins:12,highRotIndex:8,activeNeutralization:3}),[i,r]=v.useState([]),[o,a]=v.useState([]),[l,c]=v.useState(()=>Xh([]));v.useEffect(()=>{const h=l0(d=>{e(d),s(f=>({...f,totalBins:d.length}))});return()=>h()},[]),v.useEffect(()=>{const h=c0(d=>{const f=new Map;d.forEach(E=>{const M={...HA(E.id,E),id:E.id,branch:E.branch};if(!qA(M,t))return;const j=String(M.node??M.location??M.id??"unknown-bin").trim(),T=f.get(j);(!T||(M.timestamp??0)>=(T.timestamp??0))&&f.set(j,M)});const p=Array.from(f.values()).sort((E,M)=>(E.timestamp??0)-(M.timestamp??0)),g=new Map;p.forEach(E=>{const M=String(E.node??E.location??E.id??"unknown-bin"),j=g.get(M);(!j||(E.timestamp??0)>=(j.timestamp??0))&&g.set(M,E)});const y=Array.from(g.values()),w=y.filter(E=>E.weight>=80).length,b=y.filter(E=>E.nh3>25||E.ch4>50).length,_=y.filter(E=>E.nh3>35||E.ch4>70).length,S=y.slice().sort((E,M)=>(E.timestamp??0)-(M.timestamp??0)).slice(-24).map(E=>({sensor:String(E.node??E.location??E.id??"Unknown sensor"),time:E.timestamp?new Date(E.timestamp).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}):"Time unavailable",nh3:E.nh3,ch4:E.ch4}));s(E=>({...E,fullBins:w,highRotIndex:b,activeNeutralization:_})),r(S)});return()=>h()},[t]),v.useEffect(()=>{let h=[],d=[],f=[];const p=()=>{const b=[...h.map(_=>({..._,source:"alert"})),...d.map(_=>({..._,source:"report"}))].map(_=>{const S=_.description??_.summary??_.issueType,E=_.time??_.timestamp??_.createdAt??_.created_at;return{id:_.id,bin:_.bin??_.node??_.location??_.place??(_.source==="report"?"Report":"Unknown bin"),message:_.message??_.text??_.title??S??"Notification",severity:String(_.severity??_.level??(_.source==="report"?"warning":"info")).toLowerCase(),time:E,sortTime:Li(E)??0}});a(b.sort((_,S)=>S.sortTime-_.sortTime).slice(0,5)),c(Xh(f))},g=u0(b=>{h=b,p()},b=>console.error("Failed to load dashboard alerts:",b)),y=h0(b=>{d=b,p()},b=>console.error("Failed to load dashboard reports:",b)),w=qt(oe(de,"collections"),b=>{const _=b.val()??{};f=Object.entries(_).map(([S,E])=>({id:S,...typeof E=="object"&&E!==null?E:{}})),p()},b=>console.error("Failed to load dashboard collections:",b));return()=>{g(),y(),w()}},[]);const u=h=>{switch(h){case"critical":case"error":return"bg-red-100 text-red-800 border-red-200";case"warning":return"bg-yellow-100 text-yellow-800 border-yellow-200";case"success":return"bg-green-100 text-green-800 border-green-200";default:return"bg-blue-100 text-blue-800 border-blue-200"}};return m.jsxs("div",{className:"space-y-6",children:[m.jsx("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:m.jsxs("div",{children:[m.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Dashboard"}),m.jsx("p",{className:"text-gray-900 font-semibold",children:"Live monitoring of bin status, gas levels & collection tracking"})]})}),m.jsx("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",children:[{title:"Total Smart Bins",value:n.totalBins,desc:"Deployed across the area",icon:Ur,iconColor:"text-green-600"},{title:"Full / Near Full",value:n.fullBins,desc:"Require immediate collection",icon:ku,iconColor:"text-red-600"},{title:"High Rot Index",value:n.highRotIndex,desc:"Above threshold level",icon:Z0,iconColor:"text-orange-600"},{title:"Active Neutralization",value:n.activeNeutralization,desc:"Odor control events",icon:P0,iconColor:"text-blue-600"}].map((h,d)=>m.jsx(kn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:d*.1},children:m.jsxs(wi,{children:[m.jsxs(bi,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[m.jsx(Ei,{className:"text-sm font-semibold text-gray-900",children:h.title}),m.jsx(h.icon,{className:`h-10 w-10 ${h.iconColor||"text-gray-800"}`})]}),m.jsxs(Ti,{children:[m.jsx("div",{className:"text-2xl font-bold text-gray-900",children:h.value}),m.jsx("p",{className:"text-xs text-gray-800 font-medium",children:h.desc})]})]})},h.title))}),m.jsx(kn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.4},children:m.jsxs(wi,{children:[m.jsx(bi,{children:m.jsx(Ei,{children:"Weekly Collections"})}),m.jsxs(Ti,{children:[l.every(h=>h.collections===0)&&m.jsx("p",{className:"mb-2 text-sm text-gray-500",children:"No completed collections in the last 7 days."}),m.jsx(lc,{width:"100%",height:280,children:m.jsxs(cc,{data:l,children:[m.jsx(uc,{strokeDasharray:"3 3"}),m.jsx(hc,{dataKey:"day"}),m.jsx(dc,{}),m.jsx(fc,{}),m.jsx(qr,{dataKey:"collections",fill:"#10b981"})]})})]})]})}),m.jsx(kn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.5},children:m.jsxs(wi,{children:[m.jsx(bi,{children:m.jsx(Ei,{children:"Latest Gas Readings by Sensor"})}),m.jsx(Ti,{children:m.jsx(lc,{width:"100%",height:350,children:m.jsxs(cc,{data:i,layout:"vertical",children:[m.jsx(uc,{strokeDasharray:"3 3"}),m.jsx(hc,{type:"number"}),m.jsx(dc,{type:"category",dataKey:"sensor",width:90}),m.jsx(fc,{}),m.jsx(jg,{}),m.jsx(qr,{dataKey:"nh3",fill:"#f59e0b",name:"NH₃ (Ammonia) (ppm)"}),m.jsx(qr,{dataKey:"ch4",fill:"#3b82f6",name:"CH₄ (Methane) (ppm)"})]})})})]})}),m.jsx(kn.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.6},children:m.jsxs(wi,{children:[m.jsx(bi,{children:m.jsx(Ei,{children:"Recent Alerts & Notifications"})}),m.jsx(Ti,{children:m.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[o.map(h=>m.jsxs("div",{className:`flex items-start gap-3 rounded-lg border p-3 ${u(h.severity)}`,children:[m.jsx(ku,{className:"h-5 w-5 mt-0.5 flex-shrink-0"}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("p",{className:"font-semibold text-sm text-gray-900",children:h.bin}),m.jsx("p",{className:"text-sm text-gray-900 font-medium",children:h.message}),m.jsx("p",{className:"text-xs mt-1 font-medium text-gray-800",children:Li(h.time)?new Date(Li(h.time)).toLocaleString():String(h.time??"Time unavailable")})]})]},`${h.source}-${h.id}`)),o.length===0&&m.jsx("p",{className:"text-sm text-gray-500",children:"No recent alerts or reports."})]})})]})})]})}const Jh=v.lazy(()=>Ve(()=>import("./BinMonitoring-BogaMI7y.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(t=>({default:t.BinMonitoring}))),XA=v.lazy(()=>Ve(()=>import("./MapLocation-N4m7xNf_.js"),__vite__mapDeps([10,1,2,3,7,9,11])).then(t=>({default:t.MapLocation}))),JA=v.lazy(()=>Ve(()=>import("./Alerts-B8RinIQV.js"),__vite__mapDeps([12,1,2,3,6,8,9])).then(t=>({default:t.Alerts}))),ZA=v.lazy(()=>Ve(()=>import("./RotIndex-C3jPKeKk.js"),__vite__mapDeps([13,1,2,5,9])).then(t=>({default:t.RotIndex}))),eP=v.lazy(()=>Ve(()=>import("./Analytics-CjZbDSmH.js"),__vite__mapDeps([14,1,2,15,7,9])).then(t=>({default:t.Analytics}))),tP=v.lazy(()=>Ve(()=>import("./Workers-01rFJ3Ro.js"),__vite__mapDeps([16,1,2,3,17,6,9])).then(t=>({default:t.Workers}))),nP=v.lazy(()=>Ve(()=>import("./Maintenance-C7gSnl-C.js"),__vite__mapDeps([18,1,2,3,17,5,6,9])).then(t=>({default:t.Maintenance}))),sP=v.lazy(()=>Ve(()=>import("./UserManagement-BGB31o_y.js"),__vite__mapDeps([19,1,2,3,17,20,9])).then(t=>({default:t.UserManagement}))),iP=v.lazy(()=>Ve(()=>import("./NotFound-B_lhE6YO.js"),__vite__mapDeps([21,1,2,9])).then(t=>({default:t.NotFound}))),rP=v.lazy(()=>Ve(()=>import("./Signup-DQzGuYJY.js"),__vite__mapDeps([22,1,2,23,24,9])).then(t=>({default:t.Signup}))),oP=v.lazy(()=>Ve(()=>import("./Terms-CHvLA8rB.js"),__vite__mapDeps([24,1,2])).then(t=>({default:t.Terms}))),Re=()=>m.jsx("div",{className:"flex items-center justify-center min-h-screen",children:m.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"})}),aP=({error:t})=>m.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center p-8 text-center",children:[m.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-3",children:"Something went wrong"}),m.jsx("p",{className:"text-base text-gray-600 mb-6",children:"The page failed to load. Please refresh or return to the dashboard."}),m.jsx("pre",{className:"max-w-xl whitespace-pre-wrap rounded-2xl bg-slate-100 p-4 text-left text-sm text-slate-700",children:String(t)}),m.jsxs("div",{className:"mt-6 flex gap-3",children:[m.jsx("a",{href:"/",className:"rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90",children:"Go to Dashboard"}),m.jsx("button",{onClick:()=>window.location.reload(),className:"rounded-full border border-slate-300 px-5 py-2 text-sm font-medium",children:"Reload"})]})]});function lP(t){return Lg([{path:"/",element:m.jsx(BA,{onLogout:t}),errorElement:m.jsx(aP,{}),children:[{index:!0,Component:QA},{path:"bins",element:m.jsx(v.Suspense,{fallback:m.jsx(Re,{}),children:m.jsx(Jh,{})})},{path:"map",element:m.jsx(v.Suspense,{fallback:m.jsx(Re,{}),children:m.jsx(XA,{})})},{path:"alerts",element:m.jsx(v.Suspense,{fallback:m.jsx(Re,{}),children:m.jsx(JA,{})})},{path:"collections",element:m.jsx(v.Suspense,{fallback:m.jsx(Re,{}),children:m.jsx(Jh,{})})},{path:"rot-index",element:m.jsx(v.Suspense,{fallback:m.jsx(Re,{}),children:m.jsx(ZA,{})})},{path:"analytics",element:m.jsx(v.Suspense,{fallback:m.jsx(Re,{}),children:m.jsx(eP,{})})},{path:"workers",element:m.jsx(v.Suspense,{fallback:m.jsx(Re,{}),children:m.jsx(tP,{})})},{path:"maintenance",element:m.jsx(v.Suspense,{fallback:m.jsx(Re,{}),children:m.jsx(nP,{})})},{path:"users",element:m.jsx(v.Suspense,{fallback:m.jsx(Re,{}),children:m.jsx(sP,{})})},{path:"signup",element:m.jsx(v.Suspense,{fallback:m.jsx(Re,{}),children:m.jsx(rP,{})})},{path:"terms",element:m.jsx(v.Suspense,{fallback:m.jsx(Re,{}),children:m.jsx(oP,{})})},{path:"*",element:m.jsx(v.Suspense,{fallback:m.jsx(Re,{}),children:m.jsx(iP,{})})}]}],{basename:"/"})}const cP=v.lazy(()=>Ve(()=>import("./LandingPage-BFL5Expu.js"),__vite__mapDeps([25,1,2,3,4,23,24,7,6,15,9,20])).then(t=>({default:t.LandingPage}))),Zh=()=>m.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-blue-50",children:m.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-green-600"})});function uP(){const[t,e]=v.useState(null),[n,s]=v.useState(!1),i=v.useMemo(()=>lP(()=>e(!1)),[]);v.useEffect(()=>{let o,a=0;const l=kv(Ft,async c=>{const u=++a;o==null||o(),o=void 0;try{if(!c){e(!1),localStorage.removeItem("omniToken"),s(!0);return}if(!c.emailVerified){await Lo(Ft),e(!1),localStorage.removeItem("omniToken"),s(!0);return}const h=await lr(c.email);if(u!==a)return;String((h==null?void 0:h.role)||"").trim().toLowerCase()==="admin"?(h!=null&&h.id&&(o=o0(String(h.id))),e(!0),localStorage.setItem("omniToken","authenticated")):(await Lo(Ft),e(!1),localStorage.removeItem("omniToken"))}catch(h){if(u!==a)return;console.error("Admin access check failed:",h),e(!1),localStorage.removeItem("omniToken")}finally{u===a&&s(!0)}});return()=>{l(),o==null||o()}},[]);const r=o=>{o&&localStorage.setItem("omniToken",o),e(!0)};return!n||t===null?m.jsx(Zh,{}):t?m.jsx(Fg,{router:i}):m.jsx(v.Suspense,{fallback:m.jsx(Zh,{}),children:m.jsx(cP,{onLoginSuccess:r})})}const Ag=document.getElementById("root");if(!Ag)throw new Error("Failed to find the root element. Make sure index.html has <div id='root'></div>");Wg.createRoot(Ag).render(m.jsx(Vg.StrictMode,{children:m.jsx(uP,{})}));export{l0 as $,v0 as A,ds as B,wi as C,P0 as D,ZP as E,d0 as F,Un as G,nR as H,ko as I,KP as J,JP as K,Zt as L,L0 as M,sR as N,gP as O,z0 as P,qP as Q,sC as R,Ip as S,Ur as T,kp as U,Qe as V,Z0 as W,Ap as X,u0 as Y,h0 as Z,Ve as _,J as a,b0 as a0,ku as a1,mP as a2,Tv as a3,tR as a4,iR as a5,pP as a6,B0 as a7,S0 as a8,oR as a9,VP as aA,FP as aB,e0 as aC,jP as aD,BP as aE,WP as aF,AP as aG,PP as aH,CP as aI,wP as aJ,bP as aK,EP as aL,TP as aM,VT as aN,RP as aO,NP as aP,MP as aQ,DP as aR,LP as aS,yP as aT,zP as aU,Su as aV,_P as aW,vP as aX,kP as aY,IP as aZ,QP as aa,Lo as ab,eR as ac,XP as ad,YP as ae,yn as af,ZT as ag,FT as ah,qe as ai,i0 as aj,Ae as ak,nl as al,Ke as am,$P as an,HP as ao,GP as ap,bp as aq,nf as ar,bl as as,Ze as at,Bn as au,t0 as av,UP as aw,SP as ax,xP as ay,OP as az,Ti as b,Yt as c,bi as d,Ei as e,de as f,k0 as g,KA as h,qA as i,Ft as j,yp as k,Pk as l,kn as m,HA as n,qt as o,jr as p,gp as q,oe as r,c0 as s,Il as t,na as u,f0 as v,Y0 as w,T0 as x,$0 as y,xp as z};
