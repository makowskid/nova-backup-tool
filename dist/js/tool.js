(()=>{var e={757:(e,t,r)=>{e.exports=r(666)},344:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".is-deleting td[data-v-fccec942]{color:var(--60)}",""]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},666:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new D(n||[]);return a._invoke=function(e,t,r){var n=d;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=u(e,t,r);if("normal"===l.type){if(n=r.done?f:p,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=f,r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d="suspendedStart",p="suspendedYield",h="executing",f="completed",g={};function v(){}function y(){}function m(){}var k={};l(k,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(C([])));w&&w!==r&&n.call(w,a)&&(k=w);var x=m.prototype=v.prototype=Object.create(k);function N(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(o,a,i,c){var l=u(e[o],e,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function V(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function B(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(V,this),this.reset(!0)}function C(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:t,done:!0}}return y.prototype=m,l(x,"constructor",m),l(m,"constructor",y),y.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},N(_.prototype),l(_.prototype,i,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new _(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},N(x),l(x,c,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=C,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(B),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),B(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;B(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},379:(e,t,r)=>{"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function c(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},n=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],s=r[l]||0,u="".concat(l," ").concat(s);r[l]=s+1;var d=c(u),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:v(p,t),references:1}),n.push(u)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function h(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var f=null,g=0;function v(e,t){var r,n,o;if(t.singleton){var a=g++;r=f||(f=s(t)),n=p.bind(null,r,a,!1),o=p.bind(null,r,a,!0)}else r=s(t),n=h.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=c(r[n]);i[o].references--}for(var a=l(e,t),s=0;s<r.length;s++){var u=c(r[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=a}}}},744:(e,t)=>{"use strict";t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,n]of t)r[e]=n;return r}},13:(e,t,r)=>{"use strict";r.d(t,{Z:()=>fe});const n=Vue;var o={class:"flex mb-6 items-center justify-between"},a={class:"rounded active:outline-none active:ring focus:outline-none focus:ring"},i={class:"list-reset"},c={class:"overflow-hidden overflow-x-auto relative rounded-lg"};var l=r(757),s=r.n(l);const u=function(){return Nova.request().get("/nova-vendor/spatie/backup-tool/backup-statuses").then((function(e){return e.data}))},d=function(e){return Nova.request().get("/nova-vendor/spatie/backup-tool/backups?disk=".concat(e)).then((function(e){return e.data}))},p=function(){return Nova.request().post("/nova-vendor/spatie/backup-tool/backups")},h=function(e){return Nova.request().post("/nova-vendor/spatie/backup-tool/backups",{option:e})},f=function(e){var t=e.disk,r=e.path;return Nova.request().delete("/nova-vendor/spatie/backup-tool/backups",{params:{disk:t,path:r}})};var g={key:0,class:"p-3 flex items-center border-b border-50"},v=["value"],y=["value"],m={class:"overflow-hidden overflow-x-auto relative rounded-lg"},k={cellpadding:"0",cellspacing:"0",class:"table-default w-full"},b={class:"bg-gray-50 dark:bg-gray-800"},w={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},x={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},N={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},_=(0,n.createElementVNode)("th",null,null,-1),E={key:0},V={class:"text-center px-2 py-2",colspan:"4"},B={class:"p-8"},D={class:"text-80 leading-normal"};var C={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},S={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},L={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},M={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900 text-right"},O=["href","title"],j=["title","disabled"];const T={props:{date:{required:!0},path:{required:!0},size:{required:!0},disk:{required:!0},deletable:{required:!0},deleting:{required:!0}},computed:{downloadUrl:function(){return"".concat("/nova-vendor/spatie/backup-tool/download-backup","?disk=").concat(this.disk,"&path=").concat(this.path)}}};var A=r(379),P=r.n(A),q=r(344),Z={insert:"head",singleton:!1};P()(q.Z,Z);q.Z.locals;var z=r(744);const F={emits:["setModalVisibility","delete"],props:{disks:{required:!0,type:Array},activeDisk:{required:!0,type:String},backups:{required:!0,type:Array}},data:function(){return{deletingBackup:null,deleteModalOpen:!1}},components:{Backup:(0,z.Z)(T,[["render",function(e,t,r,o,a,i){var c=(0,n.resolveComponent)("icon");return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{class:(0,n.normalizeClass)({"is-deleting":r.deleting})},[(0,n.createElementVNode)("td",C,(0,n.toDisplayString)(r.path),1),(0,n.createElementVNode)("td",S,(0,n.toDisplayString)(r.date),1),(0,n.createElementVNode)("td",L,(0,n.toDisplayString)(r.size),1),(0,n.createElementVNode)("td",M,[(0,n.createElementVNode)("a",{href:i.downloadUrl,target:"_blank",rel:"noopener nofollow",title:e.__("Download"),class:"appearance-none cursor-pointer text-70 hover:text-primary mr-3"},[(0,n.createVNode)(c,{type:"download","view-box":"0 0 24 24",width:"20",height:"20"})],8,O),(0,n.createElementVNode)("button",{title:e.__("Delete"),class:(0,n.normalizeClass)(["appearance-none mr-3",r.deletable?"text-70 hover:text-primary":"cursor-default text-40"]),disabled:!r.deletable,onClick:t[0]||(t[0]=(0,n.withModifiers)((function(t){return e.$emit("delete")}),["prevent"]))},[(0,n.createVNode)(c,{type:"delete"})],10,j)])],2)}],["__scopeId","data-v-fccec942"]])},methods:{openDeleteModal:function(e){this.$emit("setModalVisibility",!0),this.deleteModalOpen=!0,this.deletingBackup=e},closeDeleteModal:function(){this.$emit("setModalVisibility",!1),this.deleteModalOpen=!1,this.deletingBackup=null},confirmDelete:function(){this.$emit("setModalVisibility",!1),this.deleteModalOpen=!1,this.$emit("delete",{disk:this.activeDisk,path:this.deletingBackup.path})}}},I=(0,z.Z)(F,[["render",function(e,t,r,o,a,i){var c=(0,n.resolveComponent)("backup"),l=(0,n.resolveComponent)("heading"),s=(0,n.resolveComponent)("DeleteResourceModal"),u=(0,n.resolveComponent)("portal");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[r.disks.length>1?((0,n.openBlock)(),(0,n.createElementBlock)("div",g,[(0,n.createElementVNode)("select",{class:"form-control form-select",value:r.activeDisk,onInput:t[0]||(t[0]=function(t){return e.$emit("update:activeDisk",t.target.value)})},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.disks,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("option",{key:e,value:e},(0,n.toDisplayString)(e),9,y)})),128))],40,v)])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("div",m,[(0,n.createElementVNode)("table",k,[(0,n.createElementVNode)("thead",b,[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("th",w,(0,n.toDisplayString)(e.__("Path")),1),(0,n.createElementVNode)("th",x,(0,n.toDisplayString)(e.__("Created at")),1),(0,n.createElementVNode)("th",N,(0,n.toDisplayString)(e.__("Size")),1),_])]),(0,n.createElementVNode)("tbody",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.backups,(function(e){return(0,n.openBlock)(),(0,n.createBlock)(c,(0,n.mergeProps)(e,{disk:r.activeDisk,deletable:r.backups.length>1,deleting:!a.deleteModalOpen&&a.deletingBackup&&e.path===a.deletingBackup.path,key:e.id,onDelete:function(t){return i.openDeleteModal(e)}}),null,16,["disk","deletable","deleting","onDelete"])})),128)),0===r.backups.length?((0,n.openBlock)(),(0,n.createElementBlock)("tr",E,[(0,n.createElementVNode)("td",V,(0,n.toDisplayString)(e.__("No backups present")),1)])):(0,n.createCommentVNode)("",!0)])])]),(0,n.createVNode)(u,{to:"modals"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(n.Transition,{name:"fade"},{default:(0,n.withCtx)((function(){return[a.deleteModalOpen?((0,n.openBlock)(),(0,n.createBlock)(s,{key:0,onConfirm:i.confirmDelete,onClose:i.closeDeleteModal,mode:"delete"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",B,[(0,n.createVNode)(l,{level:2,class:"mb-6"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.__("Delete backup")),1)]})),_:1}),(0,n.createElementVNode)("p",D,(0,n.toDisplayString)(e.__("Are you sure you want to delete the backup created at :date ?",{date:a.deletingBackup.date})),1)])]})),_:1},8,["onConfirm","onClose"])):(0,n.createCommentVNode)("",!0)]})),_:1})]})),_:1})])}]]);var G={cellpadding:"0",cellspacing:"0",class:"table-default w-full"},H={class:"bg-gray-50 dark:bg-gray-800 rounded-t-lg"},$={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},R={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},U={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},Y={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},J={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},K={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 text-xxs tracking-wide px-2 py-2"},Q={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},W={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},X={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},ee=["is"],te={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},re={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},ne={class:"px-2 py-2 border-t border-gray-100 dark:border-gray-700 whitespace-nowrap cursor-pointer dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"};var oe={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},ae=[(0,n.createElementVNode)("path",{d:"M2.93 17.07A10 10 0 1 0 17.07 2.93 10 10 0 0 0 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM4 10l2-2 3 3 5-5 2 2-7 7-5-5z",fill:"var(--success)","fill-rule":"evenodd"},null,-1)];const ie={},ce=(0,z.Z)(ie,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",oe,ae)}]]);var le={viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},se=[(0,n.createElementVNode)("path",{d:"M11.41 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10zm-8.48 7.07A10 10 0 1 0 17.07 2.93 10 10 0 0 0 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66z",fill:"var(--danger)","fill-rule":"evenodd"},null,-1)];const ue={},de={props:{backupStatuses:{required:!0,type:Array}},components:{IconHealthy:ce,IconUnhealthy:(0,z.Z)(ue,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",le,se)}]])}};function pe(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}const he={inheritAttrs:!1,components:{Backups:I,BackupStatuses:(0,z.Z)(de,[["render",function(e,t,r,o,a,i){return(0,n.openBlock)(),(0,n.createElementBlock)("table",G,[(0,n.createElementVNode)("thead",H,[(0,n.createElementVNode)("tr",null,[(0,n.createElementVNode)("th",$,(0,n.toDisplayString)(e.__("Name")),1),(0,n.createElementVNode)("th",R,(0,n.toDisplayString)(e.__("Disk")),1),(0,n.createElementVNode)("th",U,(0,n.toDisplayString)(e.__("Healthy")),1),(0,n.createElementVNode)("th",Y,(0,n.toDisplayString)(e.__("Amount of backups")),1),(0,n.createElementVNode)("th",J,(0,n.toDisplayString)(e.__("Newest backup")),1),(0,n.createElementVNode)("th",K,(0,n.toDisplayString)(e.__("Used Storage")),1)])]),(0,n.createElementVNode)("tbody",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.backupStatuses,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:t.disk},[(0,n.createElementVNode)("td",Q,(0,n.toDisplayString)(e.__(t.name)),1),(0,n.createElementVNode)("td",W,(0,n.toDisplayString)(e.__(t.disk)),1),(0,n.createElementVNode)("td",X,[((0,n.openBlock)(),(0,n.createElementBlock)("svg",{is:t.healthy?"icon-healthy":"icon-unhealthy",height:"24px"},null,8,ee))]),(0,n.createElementVNode)("td",te,(0,n.toDisplayString)(t.amount),1),(0,n.createElementVNode)("td",re,(0,n.toDisplayString)(t.newest),1),(0,n.createElementVNode)("td",ne,(0,n.toDisplayString)(t.usedStorage),1)])})),128))])])}]])},computed:{disks:function(){return this.backupStatuses.map((function(e){return e.disk}))}},data:function(){return{activeDisk:null,activeDiskBackups:[],backupStatuses:[],initialLoading:!0,modalVisibility:!1,loading:!0}},created:function(){var e,t=this;return(e=s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.initialLoading=!1,e.next=3,t.updateBackupStatuses();case 3:return e.next=5,t.updateActiveDiskBackups();case 5:t.loading=!1,t.startPolling();case 7:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){pe(a,n,o,i,c,"next",e)}function c(e){pe(a,n,o,i,c,"throw",e)}i(void 0)}))})()},methods:{updateBackupStatuses:function(){var e=this;return u().then((function(t){e.backupStatuses=t,e.activeDisk||(e.activeDisk=t[0].disk)}))},updateActiveDiskBackups:function(){var e=this;if(this.activeDisk)return d(this.activeDisk).then((function(t){e.activeDiskBackups=t}))},createBackup:function(){return Nova.success(this.__("Creating a new backup in the background...")),p()},createPartialBackup:function(e){return Nova.success(this.__("Creating a new backup in the background...")+" ("+e+")"),this.$refs.backupDropdownMenu.delayedHideMenu(),h(e)},deleteBackup:function(e){var t=e.disk,r=e.path;return f({disk:t,path:r})},startPolling:function(){var e=this;if(Nova.config("nova_backup_tool").polling)window.setInterval((function(){e.modalVisibility||(e.updateBackupStatuses(),e.updateActiveDiskBackups())}),1e3*Nova.config("nova_backup_tool").polling_interval)},setModalVisibility:function(e){this.modalVisibility=e}}},fe=(0,z.Z)(he,[["render",function(e,t,r,l,s,u){var d=(0,n.resolveComponent)("Head"),p=(0,n.resolveComponent)("Heading"),h=(0,n.resolveComponent)("DefaultButton"),f=(0,n.resolveComponent)("icon"),g=(0,n.resolveComponent)("DropdownTrigger"),v=(0,n.resolveComponent)("DropdownMenu"),y=(0,n.resolveComponent)("Dropdown"),m=(0,n.resolveComponent)("backup-statuses"),k=(0,n.resolveComponent)("LoadingCard"),b=(0,n.resolveComponent)("backups"),w=(0,n.resolveComponent)("LoadingView");return(0,n.openBlock)(),(0,n.createBlock)(w,{loading:e.initialLoading},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(d,{title:e.__("Backups")},null,8,["title"]),(0,n.createElementVNode)("div",o,[(0,n.createVNode)(p,null,{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.__("Backups")),1)]})),_:1}),(0,n.createVNode)(h,{onClick:u.createBackup},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.__("Create Backup")),1)]})),_:1},8,["onClick"]),(0,n.createVNode)(y,{dusk:"select-all-dropdown",ref:"backupDropdownMenu"},{menu:(0,n.withCtx)((function(){return[(0,n.createVNode)(v,{slot:"menu",direction:"rtl",width:"250"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("ul",i,[(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("a",{class:"block p-3 text-90 hover:bg-30 cursor-pointer",onClick:t[0]||(t[0]=(0,n.withModifiers)((function(e){return u.createPartialBackup("only-db")}),["prevent"]))},(0,n.toDisplayString)(e.__("Create database backup")),1)]),(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("a",{class:"block p-3 text-90 hover:bg-30 cursor-pointer",onClick:t[1]||(t[1]=(0,n.withModifiers)((function(e){return u.createPartialBackup("only-files")}),["prevent"]))},(0,n.toDisplayString)(e.__("Create files backup")),1)])])]})),_:1})]})),default:(0,n.withCtx)((function(){return[(0,n.createVNode)(g,{"slot-scope":"{ toggle }","show-arrow":!1,handleClick:e.toggle,class:"mr-3"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("button",a,[(0,n.createVNode)(f,{type:"menu","view-box":"0 0 24 24",width:"20",height:"20"})])]})),_:1},8,["handleClick"])]})),_:1},512)]),(0,n.createVNode)(k,{loading:e.loading,class:"mb-6"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",c,[(0,n.createVNode)(m,{"backup-statuses":e.backupStatuses},null,8,["backup-statuses"])])]})),_:1},8,["loading"]),(0,n.createVNode)(k,{loading:e.loading},{default:(0,n.withCtx)((function(){return[e.activeDisk?((0,n.openBlock)(),(0,n.createBlock)(b,{key:0,disks:u.disks,backups:e.activeDiskBackups,"active-disk":e.activeDisk,onDelete:u.deleteBackup,onSetModalVisibility:u.setModalVisibility},null,8,["disks","backups","active-disk","onDelete","onSetModalVisibility"])):(0,n.createCommentVNode)("",!0)]})),_:1},8,["loading"])]})),_:1},8,["loading"])}]])}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),Nova.booting((function(e){Nova.inertia("BackupTool",r(13).Z)}))})();