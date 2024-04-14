import{l as S,q as C,o as a,c as o,w as b,b as d,u as s,_ as T,a as t,t as e,A as B,j as p,d as r,f as h,e as u,g as D,F as w,k as N}from"./app-0b9725b5.js";import{u as q}from"./AppLayout-71437c13.js";import{_ as M}from"./AdminLayout-22bfd88d.js";import{_ as m,a as R,b as V}from"./CustomFormIntelListChart-365a5a80.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-b9bd5b83.js";import"./useAuthorizable-663b53e2.js";import"./use-resolve-button-type-7b74f3df.js";import"./CloudArrowDownIcon-98e13329.js";import"./index-970c465b.js";import"./Chart-ca1685a3.js";const $={class:"p-4 px-10 mx-auto space-y-4"},A={class:"py-3 flex justify-between"},E={class:"text-xl font-extrabold text-gray-800 dark:text-gray-200"},I={class:"flex gap-4"},L={class:"p-2 overflow-hidden bg-white rounded shadow max-w-none dark:bg-cool-gray-800"},O={class:"px-3 pt-2 font-bold text-gray-700 dark:text-white"},U={class:"mt-3 grid grid-cols-2 gap-2"},F={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},H={class:"flex items-center justify-between w-full"},P={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},z={class:"flex items-center justify-between w-full"},G={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},J={class:"flex items-center justify-between w-full"},K={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},Q={class:"flex items-center justify-between w-full"},W={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},X={class:"flex items-center justify-between w-full"},Y={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},Z={class:"flex items-center justify-between w-full"},tt={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},et={class:"flex items-center justify-between w-full"},st={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},it={class:"flex items-center justify-between w-full"},nt={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},lt={class:"flex items-center justify-between w-full"},at={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},rt={class:"flex items-center justify-between w-full"},ot={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},dt={class:"flex items-center justify-between w-full"},ut={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},ct={class:"flex items-center justify-between w-full"},mt={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},ft={class:"flex items-center justify-between w-full"},xt=["title"],gt={class:"inline-flex items-center px-4 py-3 -mt-px text-sm font-semibold text-gray-800 gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:text-gray-400"},_t={class:"flex items-center justify-between w-full"},yt=["title"],bt={key:0},pt={class:"grid grid-cols-2 gap-4"},Mt={__name:"ShowRecruitment",props:{recruitment:{type:Object},intel:{type:Object},submissionCountByStatus:{type:Object}},setup(i){const c=i,{__:n}=N(),{formatTimeAgoToNow:f,formatToDayDateString:x,secondsToHMS:v}=q(),g={label:"Total Requests",data:{"Open Requests":c.recruitment.open_submissions_count,"Closed Requests":c.recruitment.closed_submissions_count}},_={label:"Submission Status",data:c.submissionCountByStatus};return(k,ht)=>{const j=S("InertiaLink"),y=C("tippy");return a(),o(M,null,{default:b(()=>[d(T,{title:s(n)(":title Intel - Recruitments",{title:i.recruitment.title})},null,8,["title"]),t("div",$,[t("div",A,[t("h3",E,e(s(n)(":title - Intel",{title:i.recruitment.title})),1),t("div",I,[d(j,{href:k.route("admin.recruitment.index"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-400 focus:shadow-outline-gray dark:bg-gray-800 dark:hover:bg-gray-700 dark:active:bg-gray-900 dark:focus:border-gray-700"},{default:b(()=>[t("span",null,e(s(n)("Back")),1)]),_:1},8,["href"])])]),t("div",L,[t("h3",O,e(s(n)("Details")),1),t("ul",U,[t("li",F,[t("div",H,[t("span",null,e(s(n)("Title")),1),t("div",null,e(i.recruitment.title),1)])]),t("li",P,[t("div",z,[t("span",null,e(s(n)("Url Slug")),1),t("div",null,e(i.recruitment.slug),1)])]),t("li",G,[t("div",J,[t("span",null,e(s(n)("Status")),1),t("span",null,e(s(B.startCase)(i.recruitment.status.value)),1)])]),t("li",K,[t("div",Q,[t("span",null,e(s(n)("This recruitment hiring for")),1),t("span",null,e(i.recruitment.related_role?i.recruitment.related_role.display_name:s(n)("not applicable")),1)])]),t("li",W,[t("div",X,[t("span",null,e(s(n)("Max submission per user")),1),t("span",null,e(i.recruitment.max_submission_per_user?i.recruitment.max_submission_per_user:s(n)("not applicable")),1)])]),t("li",Y,[t("div",Z,[t("span",null,e(s(n)("Submission Cooldown")),1),t("span",null,e(i.recruitment.submission_cooldown_in_seconds?s(v)(i.recruitment.submission_cooldown_in_seconds,!0):s(n)("none")),1)])]),t("li",tt,[t("div",et,[t("span",null,e(s(n)("Allow only Player Linked Users")),1),t("span",null,e(i.recruitment.is_allow_only_player_linked_users),1)])]),t("li",st,[t("div",it,[t("span",null,e(s(n)("Allow only Verified Users")),1),t("span",null,e(i.recruitment.is_allow_only_verified_users),1)])]),t("li",nt,[t("div",lt,[t("span",null,e(s(n)("Minimum staff role weight to view submissions")),1),t("span",null,e(i.recruitment.min_role_weight_to_view_submission?i.recruitment.min_role_weight_to_view_submission:s(n)("none")),1)])]),t("li",at,[t("div",rt,[t("span",null,e(s(n)("Minimum staff role weight to act on submissions")),1),t("span",null,e(i.recruitment.min_role_weight_to_view_submission?i.recruitment.min_role_weight_to_view_submission:s(n)("none")),1)])]),t("li",ot,[t("div",dt,[t("span",null,e(s(n)("Enable Messaging Feature")),1),t("span",null,e(i.recruitment.is_allow_messages_from_users),1)])]),t("li",ut,[t("div",ct,[t("span",null,e(s(n)("Notify staff on Events")),1),t("span",null,e(i.recruitment.is_notify_staff_on_submission),1)])]),t("li",mt,[t("div",ft,[t("span",null,e(s(n)("Created")),1),p((a(),r("span",{title:s(f)(i.recruitment.created_at)},[h(e(s(x)(i.recruitment.created_at))+" ("+e(s(n)("by :username",{username:i.recruitment.creator.username}))+") ",1)],8,xt)),[[y]])])]),t("li",gt,[t("div",_t,[t("span",null,e(s(n)("Updated")),1),p((a(),r("span",{title:s(f)(i.recruitment.updated_at)},[h(e(s(x)(i.recruitment.updated_at))+" ",1),i.recruitment.updater?(a(),r("span",bt," ("+e(s(n)("by :username",{username:i.recruitment.updater.username}))+") ",1)):u("",!0)],8,yt)),[[y]])])])])]),t("div",pt,[d(m,{title:g.label,data:g.data},null,8,["title","data"]),d(m,{title:_.label,data:_.data},null,8,["title","data"]),(a(!0),r(w,null,D(i.intel,l=>(a(),r(w,{key:l.label},[["select","radio","multiselect","checkbox"].includes(l.type)?(a(),o(m,{key:0,title:l.label,data:l.data},null,8,["title","data"])):u("",!0),["datetime-local","date","time","month","week"].includes(l.type)?(a(),o(R,{key:1,title:l.label,data:l.data},null,8,["title","data"])):u("",!0),["text","textarea","email","number","password","tel","url"].includes(l.type)?(a(),o(V,{key:2,title:l.label,data:l.data},null,8,["title","data"])):u("",!0)],64))),128))])])]),_:1})}}};export{Mt as default};
