import{A as a}from"./constants-a72a0b10.js";import{K as r,S as s,i as t,s as e,e as o,c as n,a as c,d as i,b as l,f as d,F as u}from"./vendor-1fc990e5.js";async function p(s){try{return(await r.get(`${a}/${s}`)).data.reduce(((r,s)=>{console.log({photoGroup:s});return[...r,...s.Media.map((r=>({src:`${a}${r.url}`,alt:r.alternativeText,id:r.id})))]}),[])}catch(t){return console.error(t),[]}}async function h(s){try{const t=s.split("-").map((([a,...r])=>`${a.toUpperCase()}${r.join("")}`)).join("");return(await r.get(`${a}/${s}`)).data[t][0]}catch(t){return console.error(t),{}}}function f(a){let r;return{c(){r=o("div"),this.h()},l(a){r=n(a,"DIV",{class:!0}),c(r).forEach(i),this.h()},h(){l(r,"class","loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64 ml-12 mt-12 svelte-ddb19c")},m(a,s){d(a,r,s)},p:u,i:u,o:u,d(a){a&&i(r)}}}class m extends s{constructor(a){super(),t(this,a,null,f,e,{})}}export{m as L,p as a,h as g};