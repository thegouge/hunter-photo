import{S as t,i as s,s as n,L as a,k as e,l as o,M as c,d as l,n as r,f as h,N as i,v as u,r as f,e as m,t as d,c as g,a as p,g as k,b as v,D as b,F as $,O as w,j as x,m as j,o as E,w as D}from"../chunks/vendor-e2c6f3d3.js";import{g as H}from"../chunks/helpers-8f451e9e.js";import"../chunks/constants-1c259115.js";function C(t){t[1]=t[3].Title,t[2]=t[3].Content}function I(t){let s,n;return{c(){s=m("div"),n=d("something went wrong"),this.h()},l(t){s=g(t,"DIV",{class:!0});var a=p(s);n=k(a,"something went wrong"),a.forEach(l),this.h()},h(){v(s,"class","text-red-800")},m(t,a){h(t,s,a),b(s,n)},p:$,i:$,o:$,d(t){t&&l(s)}}}function N(t){let s,n;C(t);let a,o,c,i,$=t[1]+"";return c=new w({props:{source:t[2]}}),{c(){s=m("div"),n=m("h2"),a=d($),o=e(),x(c.$$.fragment),this.h()},l(t){s=g(t,"DIV",{class:!0});var e=p(s);n=g(e,"H2",{});var h=p(n);a=k(h,$),h.forEach(l),o=r(e),j(c.$$.fragment,e),e.forEach(l),this.h()},h(){v(s,"class","w-full")},m(t,e){h(t,s,e),b(s,n),b(n,a),b(s,o),E(c,s,null),i=!0},p(t,s){C(t)},i(t){i||(u(c.$$.fragment,t),i=!0)},o(t){f(c.$$.fragment,t),i=!1},d(t){t&&l(s),D(c)}}}function S(t){let s;return{c(){s=d("loading...")},l(t){s=k(t,"loading...")},m(t,n){h(t,s,n)},p:$,i:$,o:$,d(t){t&&l(s)}}}function V(t){let s,n,m,d={ctx:t,current:null,token:null,hasCatch:!0,pending:S,then:N,catch:I,value:3,blocks:[,,,]};return a(t[0],d),{c(){s=e(),n=o(),d.block.c(),this.h()},l(t){c('[data-svelte="svelte-yg016f"]',document.head).forEach(l),s=r(t),n=o(),d.block.l(t),this.h()},h(){document.title="Hunter Smith | Home Page"},m(t,a){h(t,s,a),h(t,n,a),d.block.m(t,d.anchor=a),d.mount=()=>n.parentNode,d.anchor=n,m=!0},p(s,[n]){i(d,t=s,n)},i(t){m||(u(d.block),m=!0)},o(t){for(let s=0;s<3;s+=1){const t=d.blocks[s];f(t)}m=!1},d(t){t&&l(s),t&&l(n),d.block.d(t),d.token=null,d=null}}}function y(t){return[H("home-text")]}export default class extends t{constructor(t){super(),s(this,t,y,V,n,{})}}