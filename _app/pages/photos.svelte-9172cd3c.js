import{S as a,i as t,s,L as n,k as o,l as e,M as r,d as c,n as l,f as h,N as i,v as m,r as u,e as f,t as d,c as p,a as g,g as $,D as k,F as b,j as v,m as w,b as y,o as j,w as M}from"../chunks/vendor-1fc990e5.js";import{a as S,L as x}from"../chunks/loading-54735e96.js";import{M as D}from"../chunks/MasonDisplay-7c05d9d7.js";import"../chunks/constants-a72a0b10.js";function E(a){let t,s;return{c(){t=f("div"),s=d("Something went wrong")},l(a){t=p(a,"DIV",{});var n=g(t);s=$(n,"Something went wrong"),n.forEach(c)},m(a,n){h(a,t,n),k(t,s)},p:b,i:b,o:b,d(a){a&&c(t)}}}function P(a){let t,s,n,e,r;return e=new D({props:{images:a[0]}}),{c(){t=f("h2"),s=d("My Photos!"),n=o(),v(e.$$.fragment),this.h()},l(a){t=p(a,"H2",{class:!0});var o=g(t);s=$(o,"My Photos!"),o.forEach(c),n=l(a),w(e.$$.fragment,a),this.h()},h(){y(t,"class","page-title")},m(a,o){h(a,t,o),k(t,s),h(a,n,o),j(e,a,o),r=!0},p:b,i(a){r||(m(e.$$.fragment,a),r=!0)},o(a){u(e.$$.fragment,a),r=!1},d(a){a&&c(t),a&&c(n),M(e,a)}}}function H(a){let t,s;return t=new x({}),{c(){v(t.$$.fragment)},l(a){w(t.$$.fragment,a)},m(a,n){j(t,a,n),s=!0},p:b,i(a){s||(m(t.$$.fragment,a),s=!0)},o(a){u(t.$$.fragment,a),s=!1},d(a){M(t,a)}}}function L(a){let t,s,f,d={ctx:a,current:null,token:null,hasCatch:!0,pending:H,then:P,catch:E,value:0,blocks:[,,,]};return n(a[0],d),{c(){t=o(),s=e(),d.block.c(),this.h()},l(a){r('[data-svelte="svelte-12ufeha"]',document.head).forEach(c),t=l(a),s=e(),d.block.l(a),this.h()},h(){document.title="Hunter Smith | Photography"},m(a,n){h(a,t,n),h(a,s,n),d.block.m(a,d.anchor=n),d.mount=()=>s.parentNode,d.anchor=s,f=!0},p(t,[s]){i(d,a=t,s)},i(a){f||(m(d.block),f=!0)},o(a){for(let t=0;t<3;t+=1){const a=d.blocks[t];u(a)}f=!1},d(a){a&&c(t),a&&c(s),d.block.d(a),d.token=null,d=null}}}function N(a){return[S("photography-displays")]}export default class extends a{constructor(a){super(),t(this,a,N,L,s,{})}}