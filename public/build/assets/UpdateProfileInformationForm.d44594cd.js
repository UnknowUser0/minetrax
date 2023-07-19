import{_ as R}from"./Button.942b45fb.js";import{_ as E}from"./FormSection.09f62fe4.js";import{_ as N}from"./InputError.f2f6e74e.js";import{_ as B}from"./Label.fafe4992.js";import{_ as T}from"./ActionMessage.6c9f3ac1.js";import{_ as D}from"./SecondaryButton.8e0c84d9.js";import{i as X}from"./index.es.0326c4d9.js";import{X as F}from"./XInput.e32bfdd1.js";import{X as A}from"./XCheckbox.5a90933f.js";import{X as J}from"./XSelect.9a0e20bb.js";import{X as z}from"./XTextarea.1fdf0735.js";import{_ as G,T as Y,c as k,w as a,l as n,o as d,f as c,t as _,d as w,a as s,b as t,s as h,x as b,H as U,j as v,e as p,n as M}from"./app.52f92557.js";import"./SectionTitle.9af69001.js";const q={components:{XTextarea:z,XSelect:J,XCheckbox:A,XInput:F,JetActionMessage:T,JetButton:R,JetFormSection:E,JetInputError:N,JetLabel:B,JetSecondaryButton:D,DatePicker:X},props:["user"],data(){return{form:Y({_method:"PUT",name:this.user.name,photo:null,cover_image:null,dob:this.user.dob,gender:this.user.gender,cover_image_url:this.user.cover_image_url,s_discord_username:this.user.social_links?this.user.social_links.s_discord_username:null,s_steam_profile_url:this.user.social_links?this.user.social_links.s_steam_profile_url:null,s_twitter_url:this.user.social_links?this.user.social_links.s_twitter_url:null,s_youtube_url:this.user.social_links?this.user.social_links.s_youtube_url:null,s_facebook_url:this.user.social_links?this.user.social_links.s_facebook_url:null,s_twitch_url:this.user.social_links?this.user.social_links.s_twitch_url:null,s_linkedin_url:this.user.social_links?this.user.social_links.s_linkedin_url:null,s_tiktok_url:this.user.social_links?this.user.social_links.s_tiktok_url:null,s_website_url:this.user.social_links?this.user.social_links.s_website_url:null,about:this.user.about,profile_photo_source:this.user.settings?this.user.settings.profile_photo_source:null,show_gender:this.user.settings?!!+this.user.settings.show_gender:!1,show_yob:this.user.settings?!!+this.user.settings.show_yob:!1}),photoPreview:null,coverImagePreview:null}},methods:{updateProfileInformation(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.$refs.coverImage&&(this.form.cover_image=this.$refs.coverImage.files[0]),this.form.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0})},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreview(){const o=new FileReader;o.onload=r=>{this.photoPreview=r.target.result},o.readAsDataURL(this.$refs.photo.files[0])},deletePhoto(){this.$inertia.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>this.photoPreview=null})},selectNewCoverImage(){this.$refs.coverImage.click()},updateCoverImagePreview(){const o=new FileReader;o.onload=r=>{this.coverImagePreview=r.target.result},o.readAsDataURL(this.$refs.coverImage.files[0])},deleteCoverImage(){this.$inertia.delete(route("current-user-cover.destroy"),{preserveScroll:!0,onSuccess:()=>this.coverImagePreview=null})}}},H={key:0,class:"col-span-6 sm:col-span-3"},O={class:"mt-2"},W=["src","alt"],K={class:"mt-2"},Q={class:"col-span-6 sm:col-span-3"},Z={class:"mt-2"},x=["src","alt"],$={class:"mt-2"},ee={class:"col-span-6 sm:col-span-3"},oe={class:"col-span-6 sm:col-span-3"},re={class:"col-span-6 sm:col-span-3"},le={class:"col-span-6 sm:col-span-3"},se={class:"col-span-6 sm:col-span-3 relative"},te={for:"dob",class:"absolute -top-2.5 left-0 px-3 py-5 text-xs text-gray-500 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out dark:text-gray-400"},ie={key:1,class:"col-span-6 sm:col-span-3"},ne={class:"col-span-6 sm:col-span-3"},ae={key:2,class:"col-span-6 sm:col-span-3"},ue={class:"col-span-6 sm:col-span-3"},_e={class:"col-span-6 sm:col-span-3"},me={class:"col-span-6 sm:col-span-3"},ce={class:"col-span-6 sm:col-span-3"},de={class:"col-span-6 sm:col-span-3"},pe={class:"col-span-6 sm:col-span-3"},fe={class:"col-span-6 sm:col-span-3"},he={class:"col-span-6 sm:col-span-3"},be={class:"col-span-6 sm:col-span-3"},ve={class:"col-span-6 sm:col-span-3"};function ge(o,r,m,ke,e,u){const y=n("jet-label"),f=n("jet-secondary-button"),g=n("jet-input-error"),i=n("x-input"),V=n("x-select"),I=n("date-picker"),P=n("x-checkbox"),C=n("x-textarea"),S=n("jet-action-message"),j=n("jet-button"),L=n("jet-form-section");return d(),k(L,{onSubmitted:u.updateProfileInformation},{title:a(()=>[c(_(o.__("Profile Information")),1)]),description:a(()=>[c(_(o.__("Update your account's profile information and email address.")),1)]),form:a(()=>[o.$page.props.jetstream.managesProfilePhotos?(d(),w("div",H,[s("input",{ref:"photo",type:"file",class:"hidden",onChange:r[0]||(r[0]=(...l)=>u.updatePhotoPreview&&u.updatePhotoPreview(...l))},null,544),t(y,{for:"photo",value:"Avatar"}),h(s("div",O,[s("img",{src:m.user.profile_photo_url,alt:m.user.name,class:"rounded-full h-28 w-28 object-cover"},null,8,W)],512),[[b,!e.photoPreview]]),h(s("div",K,[s("span",{class:"block rounded-full w-28 h-28",style:U("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+e.photoPreview+"');")},null,4)],512),[[b,e.photoPreview]]),t(f,{class:"mt-2 mr-2",type:"button",onClick:v(u.selectNewPhoto,["prevent"])},{default:a(()=>[c(_(o.__("New Photo")),1)]),_:1},8,["onClick"]),m.user.profile_photo_path?(d(),k(f,{key:0,type:"button",class:"mt-2",onClick:v(u.deletePhoto,["prevent"])},{default:a(()=>[c(_(o.__("Remove Photo")),1)]),_:1},8,["onClick"])):p("",!0),t(g,{message:e.form.errors.photo,class:"mt-2"},null,8,["message"])])):p("",!0),s("div",Q,[s("input",{ref:"coverImage",type:"file",class:"hidden",onChange:r[1]||(r[1]=(...l)=>u.updateCoverImagePreview&&u.updateCoverImagePreview(...l))},null,544),t(y,{for:"coverImage",value:o.__("Profile Cover Image")},null,8,["value"]),h(s("div",Z,[s("img",{src:m.user.cover_image_url,alt:m.user.name,class:"rounded h-28 object-cover w-full"},null,8,x)],512),[[b,!e.coverImagePreview]]),h(s("div",$,[s("span",{class:"block rounded h-28",style:U("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+e.coverImagePreview+"');")},null,4)],512),[[b,e.coverImagePreview]]),t(f,{class:"mt-2 mr-2",type:"button",onClick:v(u.selectNewCoverImage,["prevent"])},{default:a(()=>[c(_(o.__("New Cover")),1)]),_:1},8,["onClick"]),m.user.cover_image_path?(d(),k(f,{key:0,type:"button",class:"mt-2",onClick:v(u.deleteCoverImage,["prevent"])},{default:a(()=>[c(_(o.__("Default Cover")),1)]),_:1},8,["onClick"])):p("",!0),t(g,{message:e.form.errors.cover_image,class:"mt-2"},null,8,["message"])]),s("div",ee,[t(i,{id:"username","model-value":m.user.username,label:o.__("Username"),error:e.form.errors.username,type:"text",name:"username",disabled:!0},null,8,["model-value","label","error"])]),s("div",oe,[t(i,{id:"email","model-value":m.user.email,label:o.__("Email"),error:e.form.errors.email,type:"email",name:"email",disabled:!0},null,8,["model-value","label","error"])]),s("div",re,[t(i,{id:"name",modelValue:e.form.name,"onUpdate:modelValue":r[2]||(r[2]=l=>e.form.name=l),label:o.__("Name"),error:e.form.errors.name,required:!0,autocomplete:"name",type:"text",name:"name"},null,8,["modelValue","label","error"])]),s("div",le,[t(V,{id:"profile_photo_source",modelValue:e.form.profile_photo_source,"onUpdate:modelValue":r[3]||(r[3]=l=>e.form.profile_photo_source=l),name:"profile_photo_source",error:e.form.errors.profile_photo_source,label:o.__("Use Avatar from"),"select-list":{linked_player:"Linked Player",gravatar:"Gravatar"},placeholder:"Uploaded Photo"},null,8,["modelValue","error","label"])]),s("div",se,[t(I,{id:"dob",value:e.form.dob,"onUpdate:value":r[4]||(r[4]=l=>e.form.dob=l),placeholder:o.__("Select your date of birth"),class:"w-full","value-type":"format","input-class":"border-gray-300 h-14 p-3 text-sm pt-7 focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 rounded-md block w-full dark:bg-cool-gray-900 dark:text-gray-300 dark:border-gray-900"},null,8,["value","placeholder"]),s("label",te,_(o.__("Date of Birth")),1),t(g,{message:e.form.errors.dob,class:"mt-1"},null,8,["message"])]),e.form.dob?(d(),w("div",ie,[t(P,{id:"show_yob",modelValue:e.form.show_yob,"onUpdate:modelValue":r[5]||(r[5]=l=>e.form.show_yob=l),label:o.__("Show Your of Birth"),help:o.__("Show Year of Birth in your public profile."),name:"show_yob",error:e.form.errors.show_yob},null,8,["modelValue","label","help","error"])])):p("",!0),s("div",ne,[t(V,{id:"gender",modelValue:e.form.gender,"onUpdate:modelValue":r[6]||(r[6]=l=>e.form.gender=l),name:"gender",error:e.form.errors.gender,label:o.__("Gender"),placeholder:o.__("Prefer not to say"),"select-list":{m:o.__("Male"),f:o.__("Female"),o:o.__("Others")}},null,8,["modelValue","error","label","placeholder","select-list"])]),e.form.gender?(d(),w("div",ae,[t(P,{id:"show_gender",modelValue:e.form.show_gender,"onUpdate:modelValue":r[7]||(r[7]=l=>e.form.show_gender=l),label:o.__("Show Gender"),help:o.__("Show Gender in your public profile."),name:"show_gender",error:e.form.errors.show_gender},null,8,["modelValue","label","help","error"])])):p("",!0),s("div",ue,[t(i,{id:"s_discord_username",modelValue:e.form.s_discord_username,"onUpdate:modelValue":r[8]||(r[8]=l=>e.form.s_discord_username=l),label:o.__("Discord Username"),error:e.form.errors.s_discord_username,autocomplete:"s_discord_username",type:"text",name:"s_discord_username",help:o.__("Eg: username#1234")},null,8,["modelValue","label","error","help"])]),s("div",_e,[t(i,{id:"s_steam_profile_url",modelValue:e.form.s_steam_profile_url,"onUpdate:modelValue":r[9]||(r[9]=l=>e.form.s_steam_profile_url=l),label:o.__("Steam Profile URL"),error:e.form.errors.s_steam_profile_url,autocomplete:"s_steam_profile_url",type:"text",name:"s_steam_profile_url",help:o.__("Eg: https://steamcommunity.com/id/username")},null,8,["modelValue","label","error","help"])]),s("div",me,[t(i,{id:"s_twitter_url",modelValue:e.form.s_twitter_url,"onUpdate:modelValue":r[10]||(r[10]=l=>e.form.s_twitter_url=l),label:o.__("Twitter Profile URL"),error:e.form.errors.s_twitter_url,autocomplete:"s_twitter_url",type:"text",name:"s_twitter_url",help:o.__("Eg: https://twitter.com/@username")},null,8,["modelValue","label","error","help"])]),s("div",ce,[t(i,{id:"s_youtube_url",modelValue:e.form.s_youtube_url,"onUpdate:modelValue":r[11]||(r[11]=l=>e.form.s_youtube_url=l),label:o.__("YouTube URL"),error:e.form.errors.s_youtube_url,autocomplete:"s_youtube_url",type:"text",name:"s_youtube_url",help:o.__("Eg: https://www.youtube.com/minecraft")},null,8,["modelValue","label","error","help"])]),s("div",de,[t(i,{id:"s_facebook_url",modelValue:e.form.s_facebook_url,"onUpdate:modelValue":r[12]||(r[12]=l=>e.form.s_facebook_url=l),label:o.__("Facebook URL"),error:e.form.errors.s_facebook_url,autocomplete:"s_facebook_url",type:"text",name:"s_facebook_url",help:"Eg: https://facebook.com/minecraft"},null,8,["modelValue","label","error"])]),s("div",pe,[t(i,{id:"s_twitch_url",modelValue:e.form.s_twitch_url,"onUpdate:modelValue":r[13]||(r[13]=l=>e.form.s_twitch_url=l),label:o.__("Twitch URL"),error:e.form.errors.s_twitch_url,autocomplete:"s_twitch_url",type:"text",name:"s_twitch_url",help:o.__("Eg: https://www.twitch.tv/minecraft")},null,8,["modelValue","label","error","help"])]),s("div",fe,[t(i,{id:"s_tiktok_url",modelValue:e.form.s_tiktok_url,"onUpdate:modelValue":r[14]||(r[14]=l=>e.form.s_tiktok_url=l),label:o.__("TikTok URL"),error:e.form.errors.s_tiktok_url,autocomplete:"s_tiktok_url",type:"text",name:"s_tiktok_url",help:o.__("Eg: https://www.tiktok.com/@minecraft")},null,8,["modelValue","label","error","help"])]),s("div",he,[t(i,{id:"s_linkedin_url",modelValue:e.form.s_linkedin_url,"onUpdate:modelValue":r[15]||(r[15]=l=>e.form.s_linkedin_url=l),label:o.__("LinkedIn URL"),error:e.form.errors.s_linkedin_url,autocomplete:"s_linkedin_url",type:"text",name:"s_linkedin_url",help:o.__("Eg: https://www.linkedin.com/in/minecraft")},null,8,["modelValue","label","error","help"])]),s("div",be,[t(i,{id:"s_website_url",modelValue:e.form.s_website_url,"onUpdate:modelValue":r[16]||(r[16]=l=>e.form.s_website_url=l),label:o.__("Website URL"),error:e.form.errors.s_website_url,autocomplete:"s_website_url",type:"text",name:"s_website_url",help:o.__("Eg: https://my-personal-blog.com")},null,8,["modelValue","label","error","help"])]),s("div",ve,[t(C,{id:"about",modelValue:e.form.about,"onUpdate:modelValue":r[17]||(r[17]=l=>e.form.about=l),label:o.__("About Yourself"),help:o.__("Something about yourself in 255 characters."),error:e.form.errors.about,name:"about"},null,8,["modelValue","label","help","error"])])]),actions:a(()=>[t(S,{on:e.form.recentlySuccessful,class:"mr-3"},{default:a(()=>[c(_(o.__("Saved.")),1)]),_:1},8,["on"]),t(j,{class:M({"opacity-25":e.form.processing}),disabled:e.form.processing,loading:e.form.processing},{default:a(()=>[c(_(o.__("Save")),1)]),_:1},8,["class","disabled","loading"])]),_:1},8,["onSubmitted"])}const Be=G(q,[["render",ge],["__scopeId","data-v-9f47e86d"]]);export{Be as default};
