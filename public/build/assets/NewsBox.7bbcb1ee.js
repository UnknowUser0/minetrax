import{u as p}from"./AppLayout.4be001de.js";import{_ as y,o as t,d as a,a as o,t as s,F as _,g as x,e as d,l as u,q as h,b as k,w as b,s as f,f as m}from"./app.52f92557.js";const v={props:{newslist:Array},setup(){const{formatTimeAgoToNow:r,formatToDayDateString:i}=p();return{formatTimeAgoToNow:r,formatToDayDateString:i}}},N={key:0},D={class:"p-3 bg-white dark:bg-cool-gray-800 rounded shadow space-y-4"},T={class:"font-extrabold text-gray-800 dark:text-gray-200"},B={class:"flex-co space-y-1"},V={key:0,class:"px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-lg bg-light-blue-100 text-light-blue-800 dark:bg-light-blue-700 dark:bg-opacity-25 dark:text-light-blue-400"},w={key:1,class:"px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-lg bg-orange-100 text-orange-800 dark:bg-orange-700 dark:bg-opacity-25 dark:text-orange-400"},A={key:2,class:"px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-lg bg-green-100 text-green-800 dark:bg-green-700 dark:bg-opacity-25 dark:text-green-400"},C={key:3,class:"px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-700 dark:bg-opacity-25 dark:text-gray-400"},S={class:"font-semibold leading-5 text-gray-800 dark:text-gray-300"},F=["title"],L={class:"text-gray-500 dark:text-gray-400 text-xs"},j=["src"];function q(r,i,l,n,E,H){const g=u("inertia-link"),c=h("tippy");return l.newslist.length>0?(t(),a("div",N,[o("div",D,[o("h3",T,s(r.__("Latest News")),1),(t(!0),a(_,null,x(l.newslist,e=>(t(),a("div",{key:e.id,class:"flex justify-between space-y-4"},[o("div",B,[e.type.value===0?(t(),a("span",V,s(e.type.key),1)):e.type.value===1?(t(),a("span",w,s(e.type.key),1)):e.type.value===2?(t(),a("span",A,s(e.type.key),1)):(t(),a("span",C,s(e.type.key),1)),o("p",S,[k(g,{href:r.route("news.show",e.slug),class:"hover:text-light-blue-400 duration-200"},{default:b(()=>[o("span",null,s(e.title),1)]),_:2},1032,["href"])]),f((t(),a("span",{class:"text-gray-500 dark:text-gray-400 text-xs focus:outline-none",title:n.formatToDayDateString(e.published_at)},[m(s(n.formatTimeAgoToNow(e.published_at)),1)],8,F)),[[c]]),o("span",L," - "+s(e.time_to_read)+"\xA0"+s(r.__("read")),1)]),e.photo_url?(t(),a("img",{key:0,class:"h-16 w-20 rounded",src:e.photo_url,alt:"News Image"},null,8,j)):d("",!0)]))),128))])])):d("",!0)}const G=y(v,[["render",q]]);export{G as N};
