import{A as a}from"./constants-a72a0b10.js";import{K as s,S as r,i as t,s as e,e as o,c as n,a as c,d as i,b as d,f as l,F as u}from"./vendor-1fc990e5.js";async function p(r){try{return(await s.get(`${a}/${r}`)).data.map((s=>({src:`${a}${s.Media[0].url}`,alt:s.AltText,desc:s.Description,id:s.id})))}catch(t){return console.error(t),[]}}async function h(r){try{const t=r.split("-").map((([a,...s])=>`${a.toUpperCase()}${s.join("")}`)).join("");return(await s.get(`${a}/${r}`)).data[t][0]}catch(t){return console.error(t),{}}}function f(a){let s;return{c(){s=o("div"),this.h()},l(a){s=n(a,"DIV",{class:!0}),c(s).forEach(i),this.h()},h(){d(s,"class","loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 ml-12 mt-12 svelte-ddb19c")},m(a,r){l(a,s,r)},p:u,i:u,o:u,d(a){a&&i(s)}}}class m extends r{constructor(a){super(),t(this,a,null,f,e,{})}}export{m as L,p as a,h as g};