(function(t){function e(e){for(var r,i,u=e[0],s=e[1],c=e[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2d694f66"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(t);var c=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/page/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("034f"),n("2877")),u={},s=Object(i["a"])(u,o,a,!1,null,null,null),c=s.exports,l=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home",class:{lightMode:t.lightMode},on:{click:function(e){t.lightMode=!t.lightMode}}},[n("div",{staticClass:"btnWrapper",on:{click:function(t){t.stopPropagation()}}},[t.hasStart?n("div",{on:{click:t.stop}},[t._v(" 停止 ")]):n("div",{on:{click:t.startCount}},[t._v(" 开始 ")])]),n("div",{staticClass:"time"},[t._v(" "+t._s(t.formatTime)+" ")])])},f=[],d=function(t){var e=parseInt(t),n=0,r=0;e>60&&(n=parseInt(e/60),e=parseInt(e%60),n>60&&(r=parseInt(n/60),n=parseInt(n%60)));var o=""+parseInt(e);return n>0&&(o=parseInt(n)+":"+o),r>0&&(o=parseInt(r)+":"+o),o},h=1800,m={name:"Home",components:{},data:function(){return{lightMode:!1,time:h,hasStart:!1}},computed:{formatTime:function(t){return d(t.time)}},methods:{startCount:function(){var t=this;this.hasStart=!0,this.timer=setInterval((function(){t.time<=0?t.reset():t.time--}),1e3)},stop:function(){this.reset()},reset:function(){this.time=h,this.hasStart=!1,clearInterval(this.timer)}}},v=m,b=(n("8c31"),Object(i["a"])(v,p,f,!1,null,"7e319401",null)),g=b.exports;r["a"].use(l["a"]);var y=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],w=new l["a"]({base:"/page/",routes:y}),_=w,j=n("2f62");r["a"].use(j["a"]);var O=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:_,store:O,render:function(t){return t(c)}}).$mount("#app")},8067:function(t,e,n){},"85ec":function(t,e,n){},"8c31":function(t,e,n){"use strict";n("8067")}});
//# sourceMappingURL=app.12283a77.js.map