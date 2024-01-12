import{L as x}from"./LoadingButton-e9f7e720.js";import{X as V}from"./XInput-64ddfe03.js";import{X as w}from"./XSelect-3e8b6a34.js";import{_ as k,T as S,l as i,o as _,c,w as f,a as o,t as a,b as n,f as h,i as j}from"./app-e971db81.js";import{_ as B}from"./AdminLayout-a05388fd.js";import"./AppLayout-a3546e2c.js";import"./useAuthorizable-94172f5b.js";import"./CloudArrowDownIcon-b278038c.js";import"./index-62d85bfd.js";const q={components:{AdminLayout:B,XSelect:w,LoadingButton:x,XInput:V},props:{server:{type:[Object],required:!1},versionsArray:Array},data(){var e,s,l,u,r,d,m;return{isCreateOperation:!this.server,form:S({name:(e=this.server)==null?void 0:e.name,ip_address:(s=this.server)==null?void 0:s.ip_address,join_port:(l=this.server)==null?void 0:l.join_port,query_port:(u=this.server)==null?void 0:u.query_port,webquery_port:(r=this.server)==null?void 0:r.webquery_port,minecraft_version:(d=this.server)==null?void 0:d.minecraft_version,hostname:(m=this.server)==null?void 0:m.hostname})}},methods:{postForm(){this.isCreateOperation?this.form.post(route("admin.server-bungee.store"),{preserveScroll:!0}):this.form.put(route("admin.server.update.bungee",this.server.id),{preserveScroll:!0})}}},A={class:"py-12 px-10 max-w-6xl mx-auto"},C={class:"flex justify-between mb-8"},E={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},O={class:"mt-10 sm:mt-0"},U={class:"md:grid md:grid-cols-3 md:gap-6"},L={class:"md:col-span-1"},P={class:"px-4 sm:px-0"},M={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},N={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},X=o("br",null,null,-1),F=o("br",null,null,-1),T={class:"mt-5 md:mt-0 md:col-span-2"},I={class:"shadow overflow-hidden sm:rounded-md"},D={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},H={class:"grid grid-cols-6 gap-6"},J={class:"col-span-6 sm:col-span-3"},Q={class:"col-span-6 sm:col-span-3"},z={class:"col-span-6 sm:col-span-3"},G={class:"col-span-6 sm:col-span-3"},K={class:"col-span-6 sm:col-span-3"},R={class:"col-span-6 sm:col-span-3"},W={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function Y(e,s,l,u,r,d){const m=i("app-head"),v=i("inertia-link"),p=i("x-input"),g=i("x-select"),y=i("loading-button"),b=i("AdminLayout");return _(),c(b,null,{default:f(()=>[r.isCreateOperation?(_(),c(m,{key:0,title:e.__("Add Bungee Server")},null,8,["title"])):(_(),c(m,{key:1,title:e.__("Edit Bungee Server: :name",{name:l.server.name})},null,8,["title"])),o("div",A,[o("div",C,[o("h1",E,a(r.isCreateOperation?e.__("Add Bungee Server"):e.__("Edit Bungee Server: :name",{name:l.server.name})),1),n(v,{href:e.route("admin.server.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:f(()=>[o("span",null,a(e.__("Cancel")),1)]),_:1},8,["href"])]),o("div",O,[o("div",U,[o("div",L,[o("div",P,[o("h3",M,a(e.__("Overview")),1),o("p",N,[h(a(e.__("Minetrax only support adding one bungee server. This server will be used to show online players and server status. All sensitive information will be encrypted."))+" ",1),X,F,h(" "+a(e.__("Please note Proxy servers don't need Minetrax.jar plugin. Only install them on actual servers like spigot, bukkit etc.")),1)])])]),o("div",T,[o("form",{onSubmit:s[6]||(s[6]=j((...t)=>d.postForm&&d.postForm(...t),["prevent"]))},[o("div",I,[o("div",D,[o("div",H,[o("div",J,[n(p,{id:"name",modelValue:r.form.name,"onUpdate:modelValue":s[0]||(s[0]=t=>r.form.name=t),label:e.__("Server Name"),error:r.form.errors.name,autocomplete:"name",type:"text",name:"name",help:e.__("Eg: My Bungee Server"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])]),o("div",Q,[n(p,{id:"hostname",modelValue:r.form.hostname,"onUpdate:modelValue":s[1]||(s[1]=t=>r.form.hostname=t),label:e.__("Hostname"),error:r.form.errors.hostname,autocomplete:"hostname",type:"text",name:"hostname",help:e.__("Eg: play-my-bungee-server.com"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])]),o("div",z,[n(p,{id:"ip_address",modelValue:r.form.ip_address,"onUpdate:modelValue":s[2]||(s[2]=t=>r.form.ip_address=t),label:e.__("IP Address"),error:r.form.errors.ip_address,autocomplete:"ip_address",type:"text",name:"ip_address",help:e.__("Eg: 78.46.130.197"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])]),o("div",G,[n(p,{id:"join_port",modelValue:r.form.join_port,"onUpdate:modelValue":s[3]||(s[3]=t=>r.form.join_port=t),label:e.__("Join Port"),error:r.form.errors.join_port,autocomplete:"join_port",type:"text",name:"join_port",help:e.__("Eg: 25565"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])]),o("div",K,[n(p,{id:"query_port",modelValue:r.form.query_port,"onUpdate:modelValue":s[4]||(s[4]=t=>r.form.query_port=t),label:e.__("Query Port"),error:r.form.errors.query_port,autocomplete:"query_port",type:"text",name:"query_port",help:e.__("Eg: 25575"),"help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])]),o("div",R,[n(g,{id:"minecraft_version",modelValue:r.form.minecraft_version,"onUpdate:modelValue":s[5]||(s[5]=t=>r.form.minecraft_version=t),name:"minecraft_version",error:r.form.errors.minecraft_version,label:e.__("Server Version"),"select-list":l.versionsArray,placeholder:e.__("Select version.."),"disable-null":!0},null,8,["modelValue","error","label","select-list","placeholder"])])])]),o("div",W,[n(y,{loading:r.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:f(()=>[h(a(r.isCreateOperation?e.__("Add Bungee Server"):e.__("Edit Bungee Server")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const ie=k(q,[["render",Y]]);export{ie as default};
