import{T as N,s as E,r as L,x as j,y as A,l as v,o as _,c as f,w as m,b as a,a as e,t as r,i as q,u as t,j as B,v as D,e as M,f as p,d as b,g as P,F as X,z as I,B as H}from"./app-e971db81.js";import{_ as h}from"./InputError-9502e497.js";import{L as w}from"./LoadingButton-e9f7e720.js";import{X as u}from"./XInput-64ddfe03.js";import{X as g}from"./XSelect-3e8b6a34.js";import{X as V}from"./XCheckbox-239842be.js";import{E as K}from"./easymde-fc317bc3.js";import{_ as z}from"./AdminLayout-a05388fd.js";import{I as G}from"./AppLayout-a3546e2c.js";import{_ as R}from"./DialogModal-3b5c36a0.js";import{_ as W}from"./SecondaryButton-02a81818.js";import{u as J}from"./useFormKit-76989f8a.js";import"./useAuthorizable-94172f5b.js";import"./CloudArrowDownIcon-b278038c.js";import"./index-62d85bfd.js";import"./Modal-05c6de8c.js";const Q={class:"py-12 px-10 max-w-7xl mx-auto"},Y={class:"flex justify-between mb-8"},Z={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},ee={class:"mt-10 sm:mt-0"},se={class:"md:grid md:grid-cols-6 md:gap-6"},oe={class:"mt-5 md:mt-0 md:col-span-6"},te=["onSubmit"],le={class:"shadow overflow-hidden sm:rounded-md"},ie={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},ae={class:"grid grid-cols-6 gap-4"},re={class:"col-span-6 sm:col-span-6"},ne={class:"col-span-6 sm:col-span-6"},de={class:"col-span-6 sm:col-span-6"},me={class:"col-span-6 sm:col-span-6"},ue={class:"col-span-6 sm:col-span-3"},_e={class:"col-span-6 sm:col-span-3"},pe={class:"col-span-6 sm:col-span-3"},ce={class:"flex items-center col-span-6 sm:col-span-3"},fe={class:"mt-4 flex space-x-4"},be={class:"flex items-center col-span-6 sm:col-span-3"},he={class:"mt-4 flex space-x-4"},ge={class:"flex-col col-span-6 space-y-1 sm:col-span-6"},ye={class:"text-base font-medium text-gray-900 dark:text-gray-300"},xe={class:"w-full space-y-1"},ve={class:"flex space-x-4"},we=e("div",{class:"w-5"},null,-1),Ve={class:"flex-1 block text-sm font-medium text-gray-700 dark:text-gray-400"},ke=e("span",{class:"text-red-500"},"*",-1),Fe={class:"flex-1 block text-sm font-medium text-gray-700 dark:text-gray-400"},Ce=e("span",{class:"text-red-500"},"*",-1),Ue={class:"flex-1 block text-sm font-medium text-gray-700 dark:text-gray-400"},Se={class:"flex-1 block text-sm font-medium text-gray-700 dark:text-gray-400"},Oe={class:"flex-1 block text-sm font-medium text-gray-700 dark:text-gray-400"},$e=e("span",{class:"text-red-500"},"* ",-1),Te=e("span",{class:"text-xs text-gray-500"},"(Eg: Options1,Option2)",-1),Ne=["onClick"],Ee={class:"flex-1"},Le={class:"flex-1"},je={class:"flex-1"},Ae={class:"flex-1"},qe={class:"flex-1"},Be={key:1,class:"h-full text-gray-700 text-lg font-semibold dark:text-gray-300 w-full flex items-center justify-center"},De={class:"flex justify-end mt-1"},Me={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-between gap-2"},Pe={class:"text-lg font-bold"},is={__name:"CreateCustomForm",setup(Xe){const k={draft:"Draft - Form is under development and not visible to users",active:"Active - Form is actively accepting submissions",disabled:"Disabled - Form is disabled for new submissions",archived:"Archived - Form is archived and not visible to users"},F={anyone:"Anyone - Anyone including Guest can submit this form",auth:"Auth Only - Only registered users can submit this form",staff:"Staff Only - Only staff members (is_staff) can submit this form"},y={text:{},textarea:{},select:{hasOptions:!0},multiselect:{hasOptions:!0},radio:{hasOptions:!0},checkbox:{},email:{},number:{},password:{},tel:{},url:{},week:{},month:{},time:{},date:{},"datetime-local":{}},s=N({title:"",slug:"",status:"draft",description:"",can_create_submission:"anyone",max_submission_per_user:null,min_role_weight_to_view_submission:null,is_notify_staff_on_submission:!0,is_visible_in_listing:!0,fields:[{type:"text",label:"Name",name:"name",placeholder:null,help:null,validation:"required|length:3,100",options:null},{type:"select",label:"Type",name:"select",placeholder:null,help:null,validation:"required",options:"Type1,Type2,Type3"}]});let x=null;const C=()=>{s.description=x.value(),s.fields.map(o=>{o.name=o.label.toLowerCase().replace(/ /g,"_")}),s.can_create_submission==="anyone"&&(s.max_submission_per_user=null),s.post(route("admin.custom-form.store"),{})};E(()=>{x=new K({previewClass:"editor-preview prose max-w-none"})});function U(){s.fields.push({type:"text",label:"",name:"",validation:"required"})}function S(o){s.fields.length!==1&&s.fields.splice(o,1)}const c=L(!1),O=j(()=>J().generateSchemaFromFieldsArray(s.fields));return A(()=>s.title,o=>{s.slug=H.kebabCase(o)}),(o,i)=>{const $=v("app-head"),T=v("inertia-link");return _(),f(z,null,{default:m(()=>[a($,{title:"Create Custom Form"}),e("div",Q,[e("div",Y,[e("h1",Z,r(o.__("Create Custom Form")),1),a(T,{href:o.route("admin.custom-form.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:m(()=>[e("span",null,r(o.__("Cancel")),1)]),_:1},8,["href"])]),e("div",ee,[e("div",se,[e("div",oe,[e("form",{onSubmit:q(C,["prevent"])},[e("div",le,[e("div",ie,[e("div",ae,[e("div",re,[a(u,{id:"title",modelValue:t(s).title,"onUpdate:modelValue":i[0]||(i[0]=l=>t(s).title=l),label:o.__("Title of Custom Form"),help:o.__("Eg: Contact Us"),error:t(s).errors.title,type:"text",name:"title","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),e("div",ne,[a(u,{id:"slug",modelValue:t(s).slug,"onUpdate:modelValue":i[1]||(i[1]=l=>t(s).slug=l),label:o.__("Form Slug"),help:o.__("Only alphabet, number and dashes. Eg: contact-us"),error:t(s).errors.slug,type:"text",name:"slug","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),e("div",de,[a(g,{id:"status",modelValue:t(s).status,"onUpdate:modelValue":i[2]||(i[2]=l=>t(s).status=l),name:"status",label:o.__("Form Status"),placeholder:o.__("Select a status of form.."),"disable-null":!0,"select-list":k},null,8,["modelValue","label","placeholder"])]),e("div",me,[B(e("textarea",{id:"description","onUpdate:modelValue":i[3]||(i[3]=l=>t(s).description=l),"aria-label":"description",name:"description",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[D,t(s).description]]),a(h,{message:t(s).errors.description,class:"mt-2 text-right"},null,8,["message"])]),e("div",ue,[a(g,{id:"can_create_submission",modelValue:t(s).can_create_submission,"onUpdate:modelValue":i[4]||(i[4]=l=>t(s).can_create_submission=l),name:"can_create_submission",label:o.__("Permission to Create Submission"),placeholder:o.__("Select a who can create submittion for this form.."),"disable-null":!0,"select-list":F},null,8,["modelValue","label","placeholder","select-list"])]),e("div",_e,[t(s).can_create_submission!=="anyone"?(_(),f(u,{key:0,id:"max_submission_per_user",modelValue:t(s).max_submission_per_user,"onUpdate:modelValue":i[5]||(i[5]=l=>t(s).max_submission_per_user=l),label:o.__("Max Submission Per User"),help:o.__("Leave empty to allow unlimited submission per user."),error:t(s).errors.max_submission_per_user,type:"number",name:"max_submission_per_user","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])):M("",!0)]),e("div",pe,[a(u,{id:"min_role_weight_to_view_submission",modelValue:t(s).min_role_weight_to_view_submission,"onUpdate:modelValue":i[6]||(i[6]=l=>t(s).min_role_weight_to_view_submission=l),label:o.__("Role Weight to View Submission"),help:o.__("Leave empty to allow any staff with view custom_form_submissions permission to view submissions."),error:t(s).errors.min_role_weight_to_view_submission,type:"number",name:"min_role_weight_to_view_submission","help-error-flex":"flex-row"},null,8,["modelValue","label","help","error"])]),e("div",ce,[e("fieldset",null,[e("div",fe,[a(V,{id:"is_notify_staff_on_submission",modelValue:t(s).is_notify_staff_on_submission,"onUpdate:modelValue":i[7]||(i[7]=l=>t(s).is_notify_staff_on_submission=l),label:o.__("Notify Staff on Submission"),help:o.__("Notify staff members (with view submission permission) when new submission is made for this form."),name:"is_notify_staff_on_submission"},null,8,["modelValue","label","help"])]),a(h,{message:t(s).errors.is_notify_staff_on_submission,class:"mt-2"},null,8,["message"])])]),e("div",be,[e("fieldset",null,[e("div",he,[a(V,{id:"is_visible_in_listing",modelValue:t(s).is_visible_in_listing,"onUpdate:modelValue":i[8]||(i[8]=l=>t(s).is_visible_in_listing=l),label:o.__("Is Visible in Listing"),help:o.__("Allow this form to be listed in custom form listing page."),name:"is_visible_in_listing"},null,8,["modelValue","label","help"])]),a(h,{message:t(s).errors.is_visible_in_listing,class:"mt-2"},null,8,["message"])])]),e("div",ge,[e("legend",ye,r(o.__("Fields")),1),e("div",xe,[e("div",ve,[we,e("label",Ve,[p(r(o.__("Name"))+" ",1),ke]),e("label",Fe,[p(r(o.__("Type"))+" ",1),Ce]),e("label",Ue,r(o.__("Validation")),1),e("label",Se,r(o.__("Help Text")),1),e("label",Oe,[p(r(o.__("Options"))+" ",1),$e,Te])]),(_(!0),b(X,null,P(t(s).fields,(l,n)=>(_(),b("div",{key:n,class:"flex space-x-4"},[e("button",{type:"button",class:"focus:outline-none group",onClick:d=>S(n)},[a(G,{class:"w-5 h-5 text-gray-300 group-hover:text-red-500",name:"trash"})],8,Ne),e("div",Ee,[a(u,{modelValue:l.label,"onUpdate:modelValue":d=>l.label=d,label:o.__("Name Field :index",{index:n+1}),error:t(s).errors[`fields.${n}.label`]||t(s).errors[`fields.${n}.name`],type:"text","help-error-flex":"flex-col",required:!0},null,8,["modelValue","onUpdate:modelValue","label","error"])]),e("div",Le,[a(g,{modelValue:l.type,"onUpdate:modelValue":d=>l.type=d,label:o.__("Page Type"),error:t(s).errors[`fields.${n}.type`],"help-error-flex":"flex-col","select-list":Object.keys(y),required:!0},null,8,["modelValue","onUpdate:modelValue","label","error","select-list"])]),e("div",je,[a(u,{modelValue:l.validation,"onUpdate:modelValue":d=>l.validation=d,label:o.__("Validation Field :index",{index:n+1}),error:t(s).errors[`fields.${n}.validation`],type:"text","help-error-flex":"flex-col"},null,8,["modelValue","onUpdate:modelValue","label","error"])]),e("div",Ae,[a(u,{modelValue:l.help,"onUpdate:modelValue":d=>l.help=d,label:o.__("Help Text Field :index",{index:n+1}),error:t(s).errors[`fields.${n}.help`],type:"text","help-error-flex":"flex-col"},null,8,["modelValue","onUpdate:modelValue","label","error"])]),e("div",qe,[y[l.type].hasOptions?(_(),f(u,{key:0,modelValue:l.options,"onUpdate:modelValue":d=>l.options=d,label:o.__("Options Field :index",{index:n+1}),error:t(s).errors[`fields.${n}.options`],type:"text","help-error-flex":"flex-col",required:!0},null,8,["modelValue","onUpdate:modelValue","label","error"])):(_(),b("div",Be," - "))])]))),128)),e("div",De,[e("button",{type:"button",class:"p-1.5 text-xs text-light-blue-500 rounded border border-light-blue-500 focus:outline-none hover:text-light-blue-300 hover:border-light-blue-300 transition ease-in-out duration-150",onClick:U},r(o.__("Add New Field")),1)])])])])]),e("div",Me,[a(w,{class:"inline-flex justify-center py-2 px-4 border border-gray-200 shadow-sm text-sm font-medium rounded-md text-gray-600 bg-gray-50 hover:bg-white disabled:opacity-50 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:border-gray-600",type:"button",onClick:i[9]||(i[9]=l=>c.value=!0)},{default:m(()=>[p(r(o.__("Preview Form")),1)]),_:1}),a(w,{loading:t(s).processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:m(()=>[p(r(o.__("Create Custom Form")),1)]),_:1},8,["loading"])])])],40,te)])])]),a(R,{show:c.value,onClose:i[11]||(i[11]=l=>c.value=!1)},{title:m(()=>[e("h3",Pe,r(o.__("Form Preview")),1)]),content:m(()=>[a(t(I),{schema:O.value},null,8,["schema"])]),footer:m(()=>[a(W,{onClick:i[10]||(i[10]=l=>c.value=!1)},{default:m(()=>[p(r(o.__("Close")),1)]),_:1})]),_:1},8,["show"])])]),_:1})}}};export{is as default};
