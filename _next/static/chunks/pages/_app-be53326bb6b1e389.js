(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(t,e,n){"use strict";var r,o;t.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},6840:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4730)}])},4730:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(5893);n(6774),n(1535),n(1563),n(1151);var o=n(7294),i=n(1163),u=n(3454);let c=u.env.GOOGLE_ANALYTICS_ID,a=t=>{window.gtag=window.gtag||{},window.gtag("config",c,{page_path:t})},s=()=>{let t=(0,i.useRouter)();(0,o.useEffect)(()=>{if(!c)return;let e=(t,e)=>{let{shallow:n}=e;n||a(t)};return t.events.on("routeChangeComplete",e),()=>{t.events.off("routeChangeComplete",e)}},[t.events])};var f=n(4298),l=n.n(f);let g=()=>(0,r.jsx)(r.Fragment,{children:c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{defer:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(c),strategy:"afterInteractive"}),(0,r.jsx)(l(),{id:"ga",defer:!0,strategy:"afterInteractive",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', '".concat(c,");\n          ")})]})});function h(t){let{Component:e,pageProps:n}=t;return s(),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{}),(0,r.jsx)(e,{...n})]})}},1535:function(){},1563:function(){},6774:function(){},1151:function(){},7663:function(t){!function(){var e={229:function(t){var e,n,r,o=t.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(r){n=u}}();var a=[],s=!1,f=-1;function l(){s&&r&&(s=!1,r.length?a=r.concat(a):f=-1,a.length&&g())}function g(){if(!s){var t=c(l);s=!0;for(var e=a.length;e;){for(r=a,a=[];++f<e;)r&&r[f].run();f=-1,e=a.length}r=null,s=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(r){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function p(){}o.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new h(t,e)),1!==a.length||s||c(g)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(t){return[]},o.binding=function(t){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}},u=!0;try{e[t](i,i.exports,r),u=!1}finally{u&&delete n[t]}return i.exports}r.ab="//";var o=r(229);t.exports=o}()},1163:function(t,e,n){t.exports=n(880)},4298:function(t,e,n){t.exports=n(3573)}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],function(){return e(6840),e(880)}),_N_E=t.O()}]);