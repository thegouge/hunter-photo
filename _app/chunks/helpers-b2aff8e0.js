import{A as t}from"./constants-8d85f103.js";import{K as r}from"./vendor-1fc990e5.js";async function a(a){try{return(await r.get(`${t}/${a}`)).data.map((r=>({src:`${t}${r.Media[0].url}`,alt:r.AltText,desc:r.Description,id:r.id})))}catch(o){return console.error(o),[]}}async function o(a){try{const o=a.split("-").map((([t,...r])=>`${t.toUpperCase()}${r.join("")}`)).join("");return(await r.get(`${t}/${a}`)).data[o][0]}catch(o){return console.error(o),{}}}export{a,o as g};
