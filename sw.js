"use strict";(()=>{var a="crypto-price-cache1689600504155",s=e=>"/crypto-price"+e,o=[s("/"),s("/manifest.json"),s("/build/index.js")];self.addEventListener("install",e=>{console.log("SW installing"),e.waitUntil((async()=>{let n=await caches.open(a);n.addAll(o);let l=(await(await fetch(s("/manifest.json"))).json()).files.map(i=>s(`/assets/${i}`));n.addAll(l),self.skipWaiting()})())});self.addEventListener("activate",e=>{console.log("SW activate"),e.waitUntil(clients.claim())});self.addEventListener("fetch",async e=>{e.respondWith(caches.open(a).then(n=>n.match(e.request).then(t=>t?(t.clone().headers.set("Cache-Control","no-store, no-cache, must-revalidate, max-age=0"),console.log(t),t):fetch(e.request))))});var r=null;})();
//# sourceMappingURL=/crypto-price/sw.js.map
