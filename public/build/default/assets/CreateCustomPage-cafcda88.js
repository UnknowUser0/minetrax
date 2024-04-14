import{r as _,T as M,C as P,s as L,l as x,o as k,c as R,w as c,b as i,a as s,t as n,f as b,i as E,u as o,d as N,e as X,j as d,m as p,v as B}from"./app-0b9725b5.js";import{_ as m}from"./InputError-3f7a3d98.js";import{L as D}from"./LoadingButton-ff28bb4a.js";import{X as g}from"./XInput-6320733f.js";import{X as j}from"./XSelect-82fe7c31.js";import{X as u}from"./XCheckbox-ff5d207c.js";import{E as A}from"./easymde-2cdb4220.js";import{b as H,h as O,T as $,o as z}from"./darkTheme-dacb809f.js";import{_ as G}from"./AdminLayout-22bfd88d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./AppLayout-71437c13.js";import"./Icon-b9bd5b83.js";import"./useAuthorizable-663b53e2.js";import"./use-resolve-button-type-7b74f3df.js";import"./CloudArrowDownIcon-98e13329.js";import"./index-970c465b.js";const I={class:"py-12 px-10 max-w-7xl mx-auto"},q={class:"flex justify-between mb-8"},F={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},J={class:"mt-10 sm:mt-0"},K={class:"md:grid md:grid-cols-4 md:gap-6"},Q={class:"md:col-span-1"},W={class:"px-4 sm:px-0"},Y={class:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-400"},Z={class:"mt-1 text-sm text-gray-600 dark:text-gray-500"},ee=s("br",null,null,-1),se={class:"mt-5 md:mt-0 md:col-span-3"},ae=["onSubmit"],oe={class:"shadow overflow-hidden sm:rounded-md"},le={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},te={class:"grid grid-cols-6 gap-4"},ie={class:"col-span-6 sm:col-span-6"},re={class:"col-span-6 sm:col-span-6"},ne={class:"col-span-6 sm:col-span-6"},de={key:0,class:"text-sm mt-4 p-4 border border-orange-700 rounded bg-orange-200 text-orange-700 dark:bg-orange-700 dark:bg-opacity-25 dark:text-orange-400"},me={class:"col-span-6 sm:col-span-6"},pe={class:"col-span-6 sm:col-span-6"},ue={class:"col-span-6 sm:col-span-6"},_e={class:"flex items-center col-span-6 sm:col-span-6"},ce={class:"text-base font-medium text-gray-900 dark:text-gray-300"},be={class:"mt-4 flex space-x-4"},ge={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"},Ne={__name:"CreateCustomPage",setup(he){const r=_("markdown"),h=_(""),V={markdown:"Markdown - Add your content in markdown format",html:"HTML - Add your content in code using HTML/CSS",redirect:"Redirect - This page will redirect to another URL"},e=M({title:"",body:"",path:"",is_visible:!0,is_in_navbar:!1,is_redirect:!1,redirect_url:null,is_html_page:!1,is_sidebar_visible:!0,is_open_in_new_tab:!1}),v=P(),f=[H,O()];window.colorMode==="dark"&&f.push(z);const y=_(""),C=a=>{v.value=a.view};let w=null;const U=()=>{r.value==="markdown"?e.body=w.value():r.value==="html"&&(e.body=v.value.state.doc.toString()),e.is_redirect=r.value==="redirect",e.is_html_page=r.value==="html",e.post(route("admin.custom-page.store"),{})};return L(()=>{w=new A({previewClass:"editor-preview prose max-w-none"})}),(a,l)=>{const S=x("app-head"),T=x("inertia-link");return k(),R(G,null,{default:c(()=>[i(S,{title:"Create Custom Page"}),s("div",I,[s("div",q,[s("h1",F,n(a.__("Create Custom Page")),1),i(T,{href:a.route("admin.custom-page.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:c(()=>[s("span",null,n(a.__("Cancel")),1)]),_:1},8,["href"])]),s("div",J,[s("div",K,[s("div",Q,[s("div",W,[s("h3",Y,n(a.__("Overview")),1),s("p",Z,[b(n(a.__("Using custom pages you can create a page based on markdown to show information like privacy, rules etc."))+" ",1),ee,b(" "+n(a.__("Using custom pages you can also redirect to some external links.")),1)])])]),s("div",se,[s("form",{onSubmit:E(U,["prevent"])},[s("div",oe,[s("div",le,[s("div",te,[s("div",ie,[i(g,{id:"title",modelValue:o(e).title,"onUpdate:modelValue":l[0]||(l[0]=t=>o(e).title=t),label:a.__("Title of Page"),help:a.__("Eg: Privacy & Policy"),error:o(e).errors.title,type:"text",name:"title","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),s("div",re,[i(g,{id:"path",modelValue:o(e).path,"onUpdate:modelValue":l[1]||(l[1]=t=>o(e).path=t),label:a.__("URL Path"),help:a.__("Eg: privacy-policy"),error:o(e).errors.path,type:"text",name:"path","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),s("div",ne,[i(j,{id:"page_type",modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=t=>r.value=t),name:"page_type",label:a.__("Page Type"),placeholder:a.__("Select a type of page.."),"disable-null":!0,"select-list":V},null,8,["modelValue","label","placeholder"]),r.value==="html"?(k(),N("div",de,n(a.__("Please be careful with this option, adding malicious code can expose your website to security risks. Make sure you know what you are doing.")),1)):X("",!0)]),d(s("div",me,[i(g,{id:"redirect_url",modelValue:o(e).redirect_url,"onUpdate:modelValue":l[3]||(l[3]=t=>o(e).redirect_url=t),label:a.__("Redirect URL"),help:a.__("Eg: https://my-custom-shop.com"),error:o(e).errors.redirect_url,type:"text",name:"redirect_url","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])],512),[[p,r.value==="redirect"]]),d(s("div",pe,[i(o($),{modelValue:y.value,"onUpdate:modelValue":l[4]||(l[4]=t=>y.value=t),placeholder:"Paste your HTML/CSS code here...",style:{height:"400px"},"indent-with-tab":!0,"tab-size":2,extensions:f,onReady:C},null,8,["modelValue"]),i(m,{message:o(e).errors.body,class:"mt-2 text-right"},null,8,["message"])],512),[[p,r.value==="html"]]),d(s("div",ue,[d(s("textarea",{id:"body","onUpdate:modelValue":l[5]||(l[5]=t=>h.value=t),"aria-label":"body",name:"body",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[B,h.value]]),i(m,{message:o(e).errors.body,class:"mt-2 text-right"},null,8,["message"])],512),[[p,r.value==="markdown"]]),s("div",_e,[s("fieldset",null,[s("legend",ce,n(a.__("Options")),1),s("div",be,[i(u,{id:"is_visible",modelValue:o(e).is_visible,"onUpdate:modelValue":l[6]||(l[6]=t=>o(e).is_visible=t),label:a.__("Visible"),help:a.__("General public can access this URL via link"),name:"is_visible"},null,8,["modelValue","label","help"]),i(u,{id:"is_in_navbar",modelValue:o(e).is_in_navbar,"onUpdate:modelValue":l[7]||(l[7]=t=>o(e).is_in_navbar=t),label:a.__("Add to Navbar"),help:a.__("Add this page link to the top Navigation bar"),name:"is_in_navbar"},null,8,["modelValue","label","help"]),i(u,{id:"is_open_in_new_tab",modelValue:o(e).is_open_in_new_tab,"onUpdate:modelValue":l[8]||(l[8]=t=>o(e).is_open_in_new_tab=t),label:a.__("Open in New Tab"),help:a.__("Should this page open in new tab"),name:"is_open_in_new_tab"},null,8,["modelValue","label","help"]),d(i(u,{id:"is_sidebar_visible",modelValue:o(e).is_sidebar_visible,"onUpdate:modelValue":l[9]||(l[9]=t=>o(e).is_sidebar_visible=t),label:a.__("Sidebar Visible"),help:a.__("Should right sidebar be visible when user open this page"),name:"is_sidebar_visible"},null,8,["modelValue","label","help"]),[[p,r.value!=="redirect"]])]),i(m,{message:o(e).errors.is_in_navbar,class:"mt-2"},null,8,["message"]),i(m,{message:o(e).errors.is_visible,class:"mt-2"},null,8,["message"]),i(m,{message:o(e).errors.is_sidebar_visible,class:"mt-2"},null,8,["message"])])])])]),s("div",ge,[i(D,{loading:o(e).processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:c(()=>[b(n(a.__("Create Page")),1)]),_:1},8,["loading"])])])],40,ae)])])])])]),_:1})}}};export{Ne as default};
