"use strict";(()=>{var i="crypto-price-cache1689609691837",s=e=>"/crypto-price"+e,r=[s("/"),s("/manifest.json"),s("/build/index.js")];self.addEventListener("install",e=>{self.skipWaiting(),e.waitUntil((async()=>{await caches.keys().then(c=>{c.forEach(o=>{caches.delete(o)})});let a=await caches.open(i),l=(await(await fetch(s("/manifest.json"))).json()).files.map(c=>s(`/assets/${c}`));return console.log("SW install"),a.addAll([...l,...r])})())});self.addEventListener("activate",e=>{e.waitUntil(clients.claim()),console.log("SW activate")});self.addEventListener("fetch",async e=>{e.respondWith(caches.open(i).then(a=>a.match(e.request).then(t=>{if(t){let n=t.headers;return n.set("Cache-Control","reload"),new Response(t.body,{...t,headers:n})}else return fetch(e.request)})))});var d=null;})();
//# sourceMappingURL=/crypto-price/sw.js.map
