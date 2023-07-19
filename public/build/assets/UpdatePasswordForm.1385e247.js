import{_ as g}from"./ActionMessage.6c9f3ac1.js";import{_ as h}from"./Button.942b45fb.js";import{_ as b}from"./FormSection.09f62fe4.js";import{X as P}from"./XInput.e32bfdd1.js";import{P as V}from"./PasswordStrengthMeter.abbebbc5.js";import{_ as v,T as C,c as S,w as e,l as n,o as c,f as p,t as d,d as y,b as t,e as j,a as i,n as B}from"./app.52f92557.js";import"./SectionTitle.9af69001.js";const N={components:{PasswordStrengthMeter:V,XInput:P,JetActionMessage:g,JetButton:h,JetFormSection:b},data(){return{form:C({current_password:"",password:"",password_confirmation:""})}},computed:{showCurrentPasswordConfirm(){var s;return(s=this.$page.props.authHasPassword)!=null?s:!0}},methods:{updatePassword(){this.form.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>this.form.reset(),onError:()=>{this.form.errors.password&&(this.form.reset("password","password_confirmation"),this.$refs.password.focus()),this.form.errors.current_password&&(this.form.reset("current_password"),this.$refs.current_password.focus())}})}}},U={key:0,class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},q={class:"col-span-6 sm:col-span-4"},E={class:"col-span-6 sm:col-span-4"};function J(s,o,F,M,r,l){const m=n("x-input"),u=n("password-strength-meter"),_=n("jet-action-message"),f=n("jet-button"),w=n("jet-form-section");return c(),S(w,{onSubmitted:l.updatePassword},{title:e(()=>[p(d(s.__("Update Password")),1)]),description:e(()=>[p(d(s.__("Ensure your account is using a long, random password to stay secure.")),1)]),form:e(()=>[l.showCurrentPasswordConfirm?(c(),y("div",U,[t(m,{id:"current_password",ref:"current_password",modelValue:r.form.current_password,"onUpdate:modelValue":o[0]||(o[0]=a=>r.form.current_password=a),label:s.__("Current Password"),error:r.form.errors.current_password,required:!0,autocomplete:"current-password",type:"password",name:"current_password"},null,8,["modelValue","label","error"])])):j("",!0),i("div",k,[t(m,{id:"password",ref:"password",modelValue:r.form.password,"onUpdate:modelValue":o[1]||(o[1]=a=>r.form.password=a),label:s.__("New Password"),error:r.form.errors.password,required:!0,autocomplete:"new-password",type:"password",name:"password"},null,8,["modelValue","label","error"])]),i("div",q,[t(m,{id:"password_confirmation",modelValue:r.form.password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=a=>r.form.password_confirmation=a),label:s.__("Confirm Password"),error:r.form.errors.password_confirmation,required:!0,autocomplete:"new-password",type:"password",name:"password_confirmation"},null,8,["modelValue","label","error"])]),i("div",E,[t(u,{value:r.form.password},null,8,["value"])])]),actions:e(()=>[t(_,{on:r.form.recentlySuccessful,class:"mr-3"},{default:e(()=>[p(d(s.__("Saved.")),1)]),_:1},8,["on"]),t(f,{class:B({"opacity-25":r.form.processing}),disabled:r.form.processing,loading:r.form.processing},{default:e(()=>[p(d(s.__("Save")),1)]),_:1},8,["class","disabled","loading"])]),_:1},8,["onSubmitted"])}const x=v(N,[["render",J]]);export{x as default};
