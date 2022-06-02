(self.webpackChunk=self.webpackChunk||[]).push([[2215],{68918:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});const n={components:{JetSectionTitle:s(96739).Z}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md:grid md:grid-cols-3 md:gap-6"},[s("jet-section-title",{scopedSlots:t._u([{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"description",fn:function(){return[t._t("description")]},proxy:!0}],null,!0)}),t._v(" "),s("div",{staticClass:"mt-5 md:mt-0 md:col-span-2"},[s("div",{staticClass:"px-4 py-5 sm:p-6 bg-white dark:bg-cool-gray-800 shadow sm:rounded-lg"},[t._t("content")],2)])],1)}),[],!1,null,null,null).exports},64927:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});const n={props:{type:{type:String,default:"button"}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-600 transition ease-in-out duration-150",attrs:{type:t.type}},[t._t("default")],2)}),[],!1,null,null,null).exports},73503:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});const n={components:{Modal:s(1276).Z},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.$emit("close")}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("modal",{attrs:{show:t.show,"max-width":t.maxWidth,closeable:t.closeable},on:{close:t.close}},[s("div",{staticClass:"px-6 py-4"},[s("div",{staticClass:"text-lg"},[t._t("title")],2),t._v(" "),s("div",{staticClass:"mt-4"},[t._t("content")],2)]),t._v(" "),s("div",{staticClass:"px-6 py-4 text-right"},[t._t("footer")],2)])}),[],!1,null,null,null).exports},52794:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});const n={props:["value"],methods:{focus:function(){this.$refs.input.focus()}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",staticClass:"border-gray-300 focus:border-light-blue-300 focus:ring focus:ring-light-blue-200 focus:ring-opacity-50 rounded-md shadow-sm",domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})}),[],!1,null,null,null).exports},46779:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});const n={props:["message"]};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.message,expression:"message"}]},[s("p",{staticClass:"text-xs text-red-500"},[t._v("\n    "+t._s(t.message)+"\n  ")])])}),[],!1,null,null,null).exports},1276:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});const n={props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},computed:{maxWidthClass:function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[this.maxWidth]}},watch:{show:{immediate:!0,handler:function(t){document.body.style.overflow=t?"hidden":null}}},created:function(){var t=this,e=function(e){"Escape"===e.key&&t.show&&t.close()};document.addEventListener("keydown",e),this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)}))},methods:{close:function(){this.closeable&&this.$emit("close")}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("portal",{attrs:{to:"modal"}},[s("transition",{attrs:{"leave-active-class":"duration-200"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0"},[s("transition",{attrs:{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"fixed inset-0 transform transition-all",on:{click:t.close}},[s("div",{staticClass:"absolute inset-0 bg-gray-500 opacity-75"})])]),t._v(" "),s("transition",{attrs:{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"border-t-8 border-gray-800 mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",class:t.maxWidthClass},[t._t("default")],2)])],1)])],1)}),[],!1,null,null,null).exports},99578:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});const n={props:{loading:{type:Boolean,default:!1},type:{type:String,default:"button"}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 dark:bg-cool-gray-700 dark:text-gray-200 dark:border-gray-800 dark:hover:text-white dark:hover:bg-cool-gray-600",attrs:{type:t.type}},[t.loading?s("svg",{staticClass:"animate-spin -ml-1 mr-3 h-4 w-4 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[s("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),s("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null).exports},96739:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});const n=(0,s(51900).Z)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md:col-span-1"},[s("div",{staticClass:"px-4 sm:px-0"},[s("h3",{staticClass:"text-lg font-medium text-gray-900 dark:text-gray-200"},[t._t("title")],2),t._v(" "),s("p",{staticClass:"mt-1 text-sm text-gray-600 dark:text-gray-500"},[t._t("description")],2)])])}),[],!1,null,null,null).exports},62215:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>u});var n=s(68918),o=s(73503),r=s(64927),a=s(52794),l=s(46779),i=s(99578);const c={components:{JetActionSection:n.Z,JetDangerButton:r.Z,JetDialogModal:o.Z,JetInput:a.Z,JetInputError:l.Z,JetSecondaryButton:i.Z},data:function(){return{confirmingUserDeletion:!1,form:this.$inertia.form({password:""})}},methods:{confirmUserDeletion:function(){var t=this;this.confirmingUserDeletion=!0,setTimeout((function(){return t.$refs.password.focus()}),250)},deleteUser:function(){var t=this;this.form.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:function(){return t.closeModal()},onError:function(){return t.$refs.password.focus()},onFinish:function(){return t.form.reset()}})},closeModal:function(){this.confirmingUserDeletion=!1,this.form.reset()}}};const u=(0,s(51900).Z)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("jet-action-section",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n    Delete Account\n  ")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n    Permanently delete your account.\n  ")]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"max-w-xl text-sm text-gray-600"},[t._v("\n      Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.\n    ")]),t._v(" "),s("div",{staticClass:"mt-5"},[s("jet-danger-button",{nativeOn:{click:function(e){return t.confirmUserDeletion.apply(null,arguments)}}},[t._v("\n        Delete Account\n      ")])],1),t._v(" "),s("jet-dialog-modal",{attrs:{show:t.confirmingUserDeletion},on:{close:t.closeModal},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Delete Account\n      ")]},proxy:!0},{key:"content",fn:function(){return[t._v("\n        Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.\n\n        "),s("div",{staticClass:"mt-4"},[s("jet-input",{ref:"password",staticClass:"mt-1 block w-3/4",attrs:{type:"password",placeholder:"Password"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.deleteUser.apply(null,arguments)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),s("jet-input-error",{staticClass:"mt-2",attrs:{message:t.form.errors.password}})],1)]},proxy:!0},{key:"footer",fn:function(){return[s("jet-secondary-button",{nativeOn:{click:function(e){return t.closeModal.apply(null,arguments)}}},[t._v("\n          Nevermind\n        ")]),t._v(" "),s("jet-danger-button",{staticClass:"ml-2",class:{"opacity-25":t.form.processing},attrs:{disabled:t.form.processing},nativeOn:{click:function(e){return t.deleteUser.apply(null,arguments)}}},[t._v("\n          Delete Account\n        ")])]},proxy:!0}])})]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);