import{S as t,i as s,s as a,L as n,k as e,l as o,M as c,d as r,n as l,f as h,N as i,v as u,r as f,e as m,t as d,c as g,a as p,g as $,b as k,D as w,F as b,j as v,m as j,o as x,w as E}from"../chunks/vendor-1fc990e5.js";import{g as D,L as M}from"../chunks/loading-54735e96.js";import{M as C}from"../chunks/markdown-f8f6726e.js";import"../chunks/constants-a72a0b10.js";function H(t){t[1]=t[3].Title,t[2]=t[3].Content}function I(t){let s,a;return{c(){s=m("div"),a=d("something went wrong"),this.h()},l(t){s=g(t,"DIV",{class:!0});var n=p(s);a=$(n,"something went wrong"),n.forEach(r),this.h()},h(){k(s,"class","text-red-800")},m(t,n){h(t,s,n),w(s,a)},p:b,i:b,o:b,d(t){t&&r(s)}}}function L(t){let s,a;H(t);let n,o,c,i,b=t[1]+"";return c=new C({props:{source:t[2]}}),{c(){s=m("div"),a=m("h2"),n=d(b),o=e(),v(c.$$.fragment),this.h()},l(t){s=g(t,"DIV",{class:!0});var e=p(s);a=g(e,"H2",{class:!0});var h=p(a);n=$(h,b),h.forEach(r),o=l(e),j(c.$$.fragment,e),e.forEach(r),this.h()},h(){k(a,"class","page-title"),k(s,"class","w-full")},m(t,e){h(t,s,e),w(s,a),w(a,n),w(s,o),x(c,s,null),i=!0},p(t,s){H(t)},i(t){i||(u(c.$$.fragment,t),i=!0)},o(t){f(c.$$.fragment,t),i=!1},d(t){t&&r(s),E(c)}}}function N(t){let s,a;return s=new M({}),{c(){v(s.$$.fragment)},l(t){j(s.$$.fragment,t)},m(t,n){x(s,t,n),a=!0},p:b,i(t){a||(u(s.$$.fragment,t),a=!0)},o(t){f(s.$$.fragment,t),a=!1},d(t){E(s,t)}}}function S(t){let s,a,m,d={ctx:t,current:null,token:null,hasCatch:!0,pending:N,then:L,catch:I,value:3,blocks:[,,,]};return n(t[0],d),{c(){s=e(),a=o(),d.block.c(),this.h()},l(t){c('[data-svelte="svelte-1cil1gp"]',document.head).forEach(r),s=l(t),a=o(),d.block.l(t),this.h()},h(){document.title="Hunter Smith | About My Twitch"},m(t,n){h(t,s,n),h(t,a,n),d.block.m(t,d.anchor=n),d.mount=()=>a.parentNode,d.anchor=a,m=!0},p(s,[a]){i(d,t=s,a)},i(t){m||(u(d.block),m=!0)},o(t){for(let s=0;s<3;s+=1){const t=d.blocks[s];f(t)}m=!1},d(t){t&&r(s),t&&r(a),d.block.d(t),d.token=null,d=null}}}function T(t){return[D("twitch-text")]}export default class extends t{constructor(t){super(),s(this,t,T,S,a,{})}}
