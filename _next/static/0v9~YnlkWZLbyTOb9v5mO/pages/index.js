(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{232:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(233),{page:e.exports.default}})},233:function(e,t,n){"use strict";n.r(t);var o=n(3),i=n.n(o),a=n(2),r=n.n(a),s=n(0),l=n.n(s);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e){function t(){var e,n,o,i,a,s,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var f=arguments.length,p=new Array(f),u=0;u<f;u++)p[u]=arguments[u];return o=this,n=!(i=(e=m(t)).call.apply(e,[this].concat(p)))||"object"!==c(i)&&"function"!=typeof i?h(o):i,a=h(h(n)),l=function(){r()({targets:"#home h1",translateX:["70%",0],opacity:1,duration:800,easing:"easeOutCirc"}).finished.then(function(){return r()({targets:["#home h1 span:nth-child(1)","#home h1 span:nth-child(3)"],translateY:function(e,t){return 0===t?["100%",0]:["-100%",0]},opacity:1,duration:600}).finished}).then(function(){return r()({targets:"h2",rotateX:[110,0],opacity:1,duration:600}).finished})},(s="animateText")in a?Object.defineProperty(a,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[s]=l,n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,s["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.timeout=setTimeout(this.animateText,800)}},{key:"componentWillUnmount",value:function(){r.a.remove("#home h1"),r.a.remove("#home h1 span:nth-child(1)"),r.a.remove("#home h1 span:nth-child(3)"),clearTimeout(this.timeout)}},{key:"render",value:function(){return l.a.createElement("div",{id:"home",className:"jsx-3539437983"},l.a.createElement("div",{className:"jsx-3539437983"},l.a.createElement("h1",{className:"jsx-3539437983"},l.a.createElement("span",{className:"jsx-3539437983"},"stefanus"),l.a.createElement("span",{className:"jsx-3539437983"},"thobi"),l.a.createElement("span",{className:"jsx-3539437983"},"sinaga")),l.a.createElement("h2",{className:"jsx-3539437983"},"javascript ",l.a.createElement("span",{className:"jsx-3539437983"},"web / mobile")," developer",l.a.createElement("br",{className:"jsx-3539437983"}),"available for"," ",l.a.createElement("a",{href:"mailto:s.thobi.sinaga@gmail.com?Subject=Hi%20Thobi",className:"jsx-3539437983"},"hire"))),l.a.createElement(i.a,{styleId:"3539437983",css:["#home.jsx-3539437983{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:50px auto;}","p.jsx-3539437983{margin:0;}","h1.jsx-3539437983{font-family:Raleway,sans-serif;font-size:12rem;font-weight:800;text-transform:capitalize;margin:0;line-height:0.9;padding:0 0 0 50px;position:relative;opacity:0;}",'h1.jsx-3539437983::before{content:"";display:block;position:absolute;top:0;left:0;width:8px;height:50%;background-color:#fff;}','h1.jsx-3539437983::after{content:"";display:block;position:absolute;bottom:0;left:0;width:8px;height:50%;background-color:#f5359e;}',"h1.jsx-3539437983 span.jsx-3539437983{display:block;position:relative;}","h1.jsx-3539437983 span.jsx-3539437983:nth-child(1),h1.jsx-3539437983 span.jsx-3539437983:nth-child(3){opacity:0;z-index:1;}","h1.jsx-3539437983 span.jsx-3539437983:nth-child(2){color:#f5359e;z-index:2;}","h2.jsx-3539437983{margin:30px 0 0 0;font-size:3rem;font-weight:400;text-align:right;line-height:1.1;opacity:0;-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;}","h2.jsx-3539437983 span.jsx-3539437983{color:#f5359e;}","h2.jsx-3539437983 a.jsx-3539437983{color:#fff;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed #f5359e;}","@media (max-width:1400px){h1.jsx-3539437983{font-size:8.4rem;}}","@media (max-width:1400px) and (orientation:portrait){h1.jsx-3539437983{font-size:12rem;}}","@media (max-width:1024px) and (orientation:portrait){h1.jsx-3539437983{font-size:10rem;}}","@media (max-width:767px){h1.jsx-3539437983{font-size:4rem;padding-left:35px;}h2.jsx-3539437983{font-size:2rem;}}"]}))}}])&&f(n.prototype,o),a&&f(n,a),t}();t.default=u}},[[232,1,0]]]);