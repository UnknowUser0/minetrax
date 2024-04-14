import{r as p,h as g,o as y,d as h,a as u,N as C,b as e,w as a,f as r,t,a9 as k,n as v,a2 as b}from"./app-0b9725b5.js";import{_ as P}from"./Button-f8f7e4df.js";import{_ as V}from"./DialogModal-bfb53ba9.js";import{_ as $}from"./Input-eaff5f73.js";import{_ as S}from"./InputError-3f7a3d98.js";import{_ as x}from"./SecondaryButton-895a9fac.js";const N={class:"mt-4"},E={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(n,{emit:d}){const l=p(!1),s=g({password:"",error:"",processing:!1}),i=p(null),w=()=>{axios.get(route("password.confirmation")).then(o=>{o.data.confirmed?d("confirmed"):(l.value=!0,setTimeout(()=>i.value.focus(),250))})},f=()=>{s.processing=!0,axios.post(route("password.confirm"),{password:s.password}).then(()=>{s.processing=!1,c(),b().then(()=>d("confirmed"))}).catch(o=>{s.processing=!1,s.error=o.response.data.errors.password[0],i.value.focus()})},c=()=>{l.value=!1,s.password="",s.error=""};return(o,m)=>(y(),h("span",null,[u("span",{onClick:w},[C(o.$slots,"default")]),e(V,{show:l.value,onClose:c},{title:a(()=>[r(t(n.title),1)]),content:a(()=>[r(t(n.content)+" ",1),u("div",N,[e($,{ref_key:"passwordInput",ref:i,modelValue:s.password,"onUpdate:modelValue":m[0]||(m[0]=_=>s.password=_),type:"password",class:"mt-1 block w-3/4",placeholder:o.__("Password"),onKeyup:k(f,["enter"])},null,8,["modelValue","placeholder","onKeyup"]),e(S,{message:s.error,class:"mt-2"},null,8,["message"])])]),footer:a(()=>[e(x,{onClick:c},{default:a(()=>[r(t(o.__("Cancel")),1)]),_:1}),e(P,{class:v(["ml-3",{"opacity-25":s.processing}]),disabled:s.processing,onClick:f},{default:a(()=>[r(t(n.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{E as _};
