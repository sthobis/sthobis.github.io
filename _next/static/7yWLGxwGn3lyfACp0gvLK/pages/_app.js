(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{113:function(e,t,n){e.exports=n(112)},209:function(e,t,n){__NEXT_REGISTER_PAGE("/_app",function(){return e.exports=n(240),{page:e.exports.default}})},210:function(e,t,n){"use strict";var a=n(21),r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=w,t.Container=t.default=void 0;var o=r(n(44)),i=r(n(45)),s=r(n(211)),c=r(n(9)),l=r(n(10)),u=r(n(18)),f=r(n(19)),p=r(n(20)),d=r(n(15)),m=a(n(0)),h=r(n(31)),x=n(26),y=n(48),b=function(e){function t(){return(0,c.default)(this,t),(0,u.default)(this,(0,f.default)(t).apply(this,arguments))}var n;return(0,p.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,y.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,a=e.pageProps,r=w(t);return m.default.createElement(v,null,m.default.createElement(n,(0,s.default)({},a,{url:r})))}}],[{key:"getInitialProps",value:(n=(0,i.default)(o.default.mark(function e(t){var n,a,r;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,a=t.ctx,e.next=3,(0,x.loadGetInitialProps)(n,a);case 3:return r=e.sent,e.abrupt("return",{pageProps:r});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(m.Component);t.default=b,(0,d.default)(b,"childContextTypes",{headManager:h.default.object,router:h.default.object});var v=function(e){function t(){return(0,c.default)(this,t),(0,u.default)(this,(0,f.default)(t).apply(this,arguments))}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(m.Component);t.Container=v;var g=(0,x.execOnce)(function(){0});function w(e){var t=e.pathname,n=e.asPath,a=e.query;return{get query(){return g(),a},get pathname(){return g(),t},get asPath(){return g(),n},back:function(){g(),e.back()},push:function(t,n){return g(),e.push(t,n)},pushTo:function(t,n){g();var a=n?t:null,r=n||t;return e.push(a,r)},replace:function(t,n){return g(),e.replace(t,n)},replaceTo:function(t,n){g();var a=n?t:null,r=n||t;return e.replace(a,r)}}}},211:function(e,t,n){var a=n(76);function r(){return e.exports=r=a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}e.exports=r},229:function(e,t,n){"use strict";var a=n(21),r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(230)),i=r(n(49)),s=r(n(9)),c=r(n(10)),l=r(n(18)),u=r(n(19)),f=r(n(20)),p=r(n(51)),d=r(n(15)),m=n(109),h=a(n(0)),x=(r(n(31)),a(n(48))),y=n(26);var b=function(e){function t(){var e,n,a,r,o,c;(0,s.default)(this,t);for(var f=arguments.length,h=new Array(f),b=0;b<f;b++)h[b]=arguments[b];return n=(0,l.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(h))),(0,d.default)((0,p.default)((0,p.default)(n)),"formatUrls",(a=function(e,t){return{href:e&&"object"===(0,i.default)(e)?(0,m.format)(e):e,as:t&&"object"===(0,i.default)(t)?(0,m.format)(t):t}},r=null,o=null,c=null,function(e,t){if(e===r&&t===o)return c;var n=a(e,t);return r=e,o=t,c=n,n})),(0,d.default)((0,p.default)((0,p.default)(n)),"linkClicked",function(e){var t=e.currentTarget,a=t.nodeName,r=t.target;if("A"!==a||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),i=o.href,s=o.as;if(function(e){var t=(0,m.parse)(e,!1,!0),n=(0,m.parse)((0,y.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,m.resolve)(c,i),s=s?(0,m.resolve)(c,s):i,e.preventDefault();var l=n.props.scroll;null==l&&(l=s.indexOf("#")<0);var u=n.props.replace?"replace":"push";x.default[u](i,s,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){n.props.onError&&n.props.onError(e)})}}}),n}return(0,f.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,m.resolve)(e,t);x.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var o=h.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||a),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=(0,x._rewriteUrlForNextExport)(i.href)),h.default.cloneElement(o,i)}}]),t}(h.Component);t.default=b},230:function(e,t,n){e.exports=n(231)},231:function(e,t,n){var a=n(1),r=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},240:function(e,t,n){"use strict";n.r(t);var a=n(77),r=n.n(a),o=n(78),i=n.n(o),s=n(0),c=n.n(s),l=n(2),u=n.n(l),f=n(3),p=n.n(f),d=n(113),m=n.n(d),h=n(79),x=n.n(h),y=function(e){var t=e.pathname;return c.a.createElement("header",{className:"jsx-2505705877"},c.a.createElement("nav",{className:"jsx-2505705877"},c.a.createElement(x.a,{prefetch:!0,href:"/"},c.a.createElement("a",{className:"jsx-2505705877 "+(("/"===t?"active":void 0)||"")},"home")),c.a.createElement(x.a,{prefetch:!0,href:"/projects"},c.a.createElement("a",{className:"jsx-2505705877 "+(("/projects"===t?"active":void 0)||"")},"projects")),c.a.createElement("a",{href:"https://github.com/sthobis",className:"jsx-2505705877"},"github"),c.a.createElement("a",{href:"mailto:s.thobi.sinaga@gmail.com?Subject=Hi%20Thobi",className:"jsx-2505705877"},"email"),c.a.createElement("span",{className:"jsx-2505705877 capsule"})),c.a.createElement(u.a,{styleId:"2505705877",css:["nav.jsx-2505705877{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}","a.jsx-2505705877{color:#fff;-webkit-text-decoration:none;text-decoration:none;padding:10px;position:relative;z-index:2;}",".capsule.jsx-2505705877{position:absolute;z-index:1;top:5px;left:-120px;width:60px;height:40px;border-radius:2px;display:block;background-color:rgba(255,255,255,0.2);-webkit-transition:0.3s;transition:0.3s;}","a.jsx-2505705877:hover~.capsule.jsx-2505705877{opacity:1;}","a.jsx-2505705877:nth-child(1):hover~.capsule.jsx-2505705877{left:0;width:62px;}","a.jsx-2505705877:nth-child(2):hover~.capsule.jsx-2505705877{left:63px;width:81px;}","a.jsx-2505705877:nth-child(3):hover~.capsule.jsx-2505705877{left:144px;width:69px;}","a.jsx-2505705877:nth-child(4):hover~.capsule.jsx-2505705877{left:214px;width:61px;}",".active.jsx-2505705877{position:relative;}",'.active.jsx-2505705877::before{content:"";display:block;position:absolute;bottom:10px;left:10px;right:10px;height:0;border-bottom:1px dashed #f5359e;}',"@media (max-width:767px){.capsule.jsx-2505705877{display:none;}}","@media (max-width:767px) and (orientation:portrait){nav.jsx-2505705877{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}}","@media (max-width:767px) and (orientation:landscape){}"]}))};function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){switch(e){case"/":return["M 312.5,232.5 c 247,-110 597,-72 744,0 s 201,158 7,295 s -603,-113 -804,0 S 65.5,342.5 312.5,232.5 z","M 312.5,232.5 c 273.5,-60.5 602.5,20.5 744,0 s 166.5,94.5 7,295 s -609.5,-29.5 -804,0 S 39,293 312.5,232.5 z"];case"/projects":return["M 312.5,232.5 c -128,-170 411,-315 744,0 s -338,54 7,295 s -696,173 -804,0 S 440.5,402.5 312.5,232.5 z","M 312.5,232.5 c -166.5,-232.5 581.5,-252.5 744,0 s -199.5,81.5 7,295 s -808.5,170.5 -804,0 S 479,465 312.5,232.5 z"];default:return["M 312.5,232.5 c 247,-110 597,-72 744,0 s 201,158 7,295 s -603,-113 -804,0 S 65.5,342.5 312.5,232.5 z","M 312.5,232.5 c 273.5,-60.5 602.5,20.5 744,0 s 166.5,94.5 7,295 s -609.5,-29.5 -804,0 S 39,293 312.5,232.5 z"]}},E=function(e){switch(e){case"/":return"#363dc2";case"/projects":return"rebeccapurple";case"/about":return"#8a2856";default:return"#363dc2"}},O=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=g(t).call(this,e),n=!r||"object"!==b(r)&&"function"!=typeof r?j(a):r,k(j(j(n)),"morphBackground",function(e){p()({targets:n.background,d:_(e)[0],duration:1e3,easing:"easeInOutQuad"}).finished.then(function(){n.animateBackground(e)})}),k(j(j(n)),"animateBackground",function(e){p()({targets:n.background,d:_(e),easing:"linear",duration:5e3,direction:"alternate",loop:!0})}),n.state={initialShape:_(n.props.pathname)[0]},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,s["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){this.animateBackground(this.props.pathname)}},{key:"componentDidUpdate",value:function(e){this.props.pathname!==e.pathname&&(this.timeout&&clearTimeout(this.timeout),p.a.remove(this.background),this.morphBackground(this.props.pathname))}},{key:"render",value:function(){var e=this,t=this.props,n=t.pathname,a=t.children,r=this.state.initialShape;return c.a.createElement("div",{className:"jsx-3719379429 "+u.a.dynamic([["2870460911",[E(n)]]])+" layout"},c.a.createElement(m.a,null,c.a.createElement("title",{className:"jsx-3719379429 "+u.a.dynamic([["2870460911",[E(n)]]])},"/projects"===n?"Projects - Stefanus Thobi Sinaga":"Stefanus Thobi Sinaga")),c.a.createElement("div",{className:"jsx-3719379429 "+u.a.dynamic([["2870460911",[E(n)]]])+" background"},c.a.createElement("svg",{width:"1366",height:"768",viewBox:"0 0 1366 768",className:"jsx-3719379429 "+u.a.dynamic([["2870460911",[E(n)]]])},c.a.createElement("path",{ref:function(t){e.background=t},d:r,className:"jsx-3719379429 "+u.a.dynamic([["2870460911",[E(n)]]])}))),c.a.createElement("div",{className:"jsx-3719379429 "+u.a.dynamic([["2870460911",[E(n)]]])+" content"},c.a.createElement(y,{pathname:n}),c.a.createElement("main",{className:"jsx-3719379429 "+u.a.dynamic([["2870460911",[E(n)]]])},a),c.a.createElement("footer",{className:"jsx-3719379429 "+u.a.dynamic([["2870460911",[E(n)]]])},c.a.createElement("a",{href:"https://github.com/sthobis/sthobis.github.io/tree/dev",className:"jsx-3719379429 "+u.a.dynamic([["2870460911",[E(n)]]])+" source"},"< view source >"),c.a.createElement("div",{className:"jsx-3719379429 "+u.a.dynamic([["2870460911",[E(n)]]])+" socmed"},c.a.createElement("a",{href:"https://twitter.com/iBoht",className:"jsx-3719379429 "+u.a.dynamic([["2870460911",[E(n)]]])},"twitter"),c.a.createElement("a",{href:"https://instagram.com/thobiisnaga",className:"jsx-3719379429 "+u.a.dynamic([["2870460911",[E(n)]]])},"instagram")))),c.a.createElement(u.a,{styleId:"2870460911",css:[".layout.__jsx-style-dynamic-selector{position:relative;}",".background.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;background-color:".concat(E(n),";-webkit-transition:1s;transition:1s;}"),"svg.__jsx-style-dynamic-selector{width:100%;height:100%;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);-webkit-transition:1s;transition:1s;}","svg.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector{fill:rgba(0,0,0,0.15);}",".content.__jsx-style-dynamic-selector{position:relative;z-index:2;padding:50px;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}","main.__jsx-style-dynamic-selector{-webkit-flex:auto;-ms-flex:auto;flex:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 10px;}","footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}",".source.__jsx-style-dynamic-selector{color:#fff;-webkit-text-decoration:none;text-decoration:none;margin:0 0 0 10px;}",".socmed.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 0 0 10px;}",".socmed.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#fff;-webkit-text-decoration:none;text-decoration:none;margin:0 10px;}","@media (orientation:portrait){svg.__jsx-style-dynamic-selector{-webkit-transform:scale(2.6) rotate(114deg);-ms-transform:scale(2.6) rotate(114deg);transform:scale(2.6) rotate(114deg);}}","@media (max-width:767px){.content.__jsx-style-dynamic-selector{padding:30px;}}","@media (max-width:767px) and (orientation:landscape){}","@media (max-width:767px) and (orientation:portrait){.content.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:100vh;}header.__jsx-style-dynamic-selector{-webkit-flex:none;-ms-flex:none;flex:none;}main.__jsx-style-dynamic-selector{-webkit-flex:auto;-ms-flex:auto;flex:auto;min-height:100%;}footer.__jsx-style-dynamic-selector{-webkit-flex:none;-ms-flex:none;flex:none;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.source.__jsx-style-dynamic-selector{margin:0 0 10px 0;}.socmed.__jsx-style-dynamic-selector{position:relative;right:auto;bottom:auto;writing-mode:lr;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0;}.socmed.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:block;height:30px;}}"],dynamic:[E(n)]}),c.a.createElement(u.a,{styleId:"3719379429",css:["*{box-sizing:border-box;}","html{font-size:10px;}",'body{color:#fff;margin:0;font-family:"Ropa Sans",sans-serif;font-size:2rem;line-height:1.5;background:#363dc2;overflow-x:hidden;}','input,textarea,button{font-family:"Ropa Sans",sans-serif;}']}))}}])&&v(n.prototype,a),r&&v(n,r),t}();function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,n,a,r,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(a,r)}function N(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return z});var z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,T(t).apply(this,arguments))}var n,a,s,l,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,i.a),n=t,a=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,a=e.pathname;return c.a.createElement(o.Container,null,c.a.createElement(O,{pathname:a},c.a.createElement(t,n)))}}],s=[{key:"getInitialProps",value:(l=r.a.mark(function e(t){var n,a,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.Component,a=t.ctx,o={},!n.getInitialProps){e.next=6;break}return e.next=5,n.getInitialProps(a);case 5:o=e.sent;case 6:return e.abrupt("return",{pageProps:o,pathname:a.pathname});case 7:case"end":return e.stop()}},e,this)}),u=function(){var e=this,t=arguments;return new Promise(function(n,a){var r=l.apply(e,t);function o(e){S(r,n,a,o,i,"next",e)}function i(e){S(r,n,a,o,i,"throw",e)}o(void 0)})},function(e){return u.apply(this,arguments)})}],a&&N(n.prototype,a),s&&N(n,s),t}()},77:function(e,t,n){e.exports=n(88)},78:function(e,t,n){e.exports=n(210)},79:function(e,t,n){e.exports=n(229)}},[[209,1,0]]]);