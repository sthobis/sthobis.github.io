(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{234:function(e,t,n){__NEXT_REGISTER_PAGE("/projects",function(){return e.exports=n(241),{page:e.exports.default}})},241:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n.n(i),a=n(3),o=n.n(a),s=n(0),c=n.n(s),l={PREV:"prev",NEXT:"next"},x={LEFT:37,UP:38,RIGHT:39,DOWN:40},m=[{name:"molondry",links:[{href:"https://molondry.com",text:"Live site"},{href:"https://itunes.apple.com/us/app/molondry/id1413776306?ls=1&mt=8",text:"AppStore"},{href:"https://play.google.com/store/apps/details?id=com.molondry",text:"PlayStore"}],tags:["express","mongodb","react","react-native","expo","ui design"],description:"Molondry is web / mobile (integrated) app for ordering laundry service."},{name:"duajarimanis",links:[{href:"https://duajarimanis.com",text:"Live site"}],tags:["express","mongodb","react","next.js","ui design"],description:"Duajarimanis is a static wedding site generator with a built-in WYSIWYG editor."},{name:"igfluencer",links:[{href:"https://igfluencer.id",text:"Live site"}],tags:["express","mongodb","react","next.js","ui design"],description:"Igfluencer is an online platform to find top instagram influencers in Indonesia."}];function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(e){var n,i,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,r=u(t).call(this,e),n=!r||"object"!==p(r)&&"function"!=typeof r?w(i):r,j(w(w(n)),"handleKeyDown",function(e){switch(e.which){case x.UP:case x.LEFT:n.prevProject();break;case x.DOWN:case x.RIGHT:n.nextProject()}}),j(w(w(n)),"prevProject",function(){n.animateArrowsButton(l.PREV),n.prevButton.blur(),n.setState(function(e){return{prevProjectIndex:e.currentProjectIndex,currentProjectIndex:0!==e.currentProjectIndex?e.currentProjectIndex-1:m.length-1}},function(){o.a.remove(n.projectDescription),n.animateProjectDescription(),n.animateProjectThumbnailImage()})}),j(w(w(n)),"nextProject",function(){n.animateArrowsButton(l.NEXT),n.nextButton.blur(),n.setState(function(e){return{prevProjectIndex:e.currentProjectIndex,currentProjectIndex:e.currentProjectIndex!==m.length-1?e.currentProjectIndex+1:0}},function(){o.a.remove(n.projectDescription),n.animateProjectDescription(),n.animateProjectThumbnailImage()})}),j(w(w(n)),"animateProjectThumbnail",function(){o()({targets:n.projectThumbnail,translateX:["-101%",0],easing:"easeInOutQuad",duration:1400})}),j(w(w(n)),"animateProjectThumbnailImage",function(){var e=n.state,t=e.prevProjectIndex,i=e.currentProjectIndex,r=["-".concat(t/m.length*100,"%"),"-".concat(i/m.length*100,"%")];o()({targets:n.projectThumbnailImage,translateY:r,easing:"easeInOutQuad",duration:1400})}),j(w(w(n)),"animateProjectDescription",function(){window.innerWidth>window.innerHeight?o()({targets:n.projectDescription,translateX:["100%",0],opacity:[0,1],easing:"easeInOutQuad",delay:200,duration:1200}):o()({targets:n.projectDescription,translateY:["-100%",0],opacity:[0,1],easing:"easeInOutQuad",delay:300,duration:900})}),j(w(w(n)),"animateNavigation",function(){o()({targets:n.navigation,opacity:[0,1],easing:"easeOutCubic",delay:400,duration:1e3})}),j(w(w(n)),"animateArrowsButton",function(e){var t=f(e===l.PREV?[n.prevButtonSvg,[0,-6]]:[n.nextButtonSvg,[0,6]],2),i=t[0],r=t[1];o.a.remove(i);var a=o()({targets:i,translateX:r,easing:"easeOutSine",duration:800});a.reverse(),a.play()}),n.state={prevProjectIndex:0,currentProjectIndex:0},n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,s["Component"]),n=t,(i=[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout(function(){e.animateProjectDescription(),e.animateProjectThumbnail(),e.animateNavigation()},800),document.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){o.a.remove([this.projectDescription,this.projectThumbnail,this.navigation,this.navigationButtons]),clearTimeout(this.timeout),document.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this,t=this.state.currentProjectIndex;return c.a.createElement("div",{id:"projects",className:"jsx-73697572"},c.a.createElement("section",{className:"jsx-73697572"},c.a.createElement("div",{className:"jsx-73697572 text"},c.a.createElement("div",{ref:function(t){e.projectDescription=t},className:"jsx-73697572 wrap"},c.a.createElement("h1",{className:"jsx-73697572"},m[t].name),c.a.createElement("p",{className:"jsx-73697572"},m[t].description),c.a.createElement("div",{className:"jsx-73697572 links"},m[t].links.map(function(e,t){return c.a.createElement("a",{key:t,href:e.href,target:"_blank",rel:"noopener noreferrer",className:"jsx-73697572"},e.text)})),c.a.createElement("div",{className:"jsx-73697572 tags"},m[t].tags.map(function(e){return c.a.createElement("span",{key:e,className:"jsx-73697572"},e)})))),c.a.createElement("div",{className:"jsx-73697572 thumbnail"},c.a.createElement("div",{ref:function(t){e.projectThumbnail=t},className:"jsx-73697572 clip"},c.a.createElement("div",{ref:function(t){e.projectThumbnailImage=t},className:"jsx-73697572 container"},m.map(function(e,t){return c.a.createElement("img",{key:e.name,src:"/static/images/".concat(e.name,".png"),alt:e.name,className:"jsx-73697572"})})))),c.a.createElement("div",{ref:function(t){e.navigation=t},className:"jsx-73697572 arrows"},c.a.createElement("button",{ref:function(t){e.prevButton=t},type:"button",onClick:this.prevProject,"aria-label":"previous project",className:"jsx-73697572"},c.a.createElement("svg",{ref:function(t){e.prevButtonSvg=t},stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 256 512",height:"1em",width:"1em",className:"jsx-73697572"},c.a.createElement("path",{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",className:"jsx-73697572"}))),c.a.createElement("button",{ref:function(t){return e.nextButton=t},type:"button",onClick:this.nextProject,"aria-label":"next project",className:"jsx-73697572"},c.a.createElement("svg",{ref:function(t){e.nextButtonSvg=t},stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 256 512",height:"1em",width:"1em",className:"jsx-73697572"},c.a.createElement("path",{d:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",className:"jsx-73697572"}))))),c.a.createElement(r.a,{styleId:"73697572",css:["#projects.jsx-73697572{width:100%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}","section.jsx-73697572{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}",".text.jsx-73697572{width:calc(50% - 50px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 50px 0 0;overflow:hidden;}",".wrap.jsx-73697572{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;width:100%;margin:0 0 50px 0;text-align:right;opacity:0;}","h1.jsx-73697572{margin:0;font-size:8rem;font-family:Raleway,sans-serif;text-transform:capitalize;line-height:1;}","p.jsx-73697572{margin:20px 0 0 0;}",".links.jsx-73697572{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:10px 0;}",".links.jsx-73697572 a.jsx-73697572{margin:0 0 10px 20px;color:#fff;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed #f5359e;}",".links.jsx-73697572 a.jsx-73697572:first-child{margin-left:0;}",".tags.jsx-73697572{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.6rem;}",".tags.jsx-73697572 span.jsx-73697572{line-height:1;margin:0 0 5px 10px;font-style:italic;}",".tags.jsx-73697572 span.jsx-73697572:first-child{margin-left:0;}",".thumbnail.jsx-73697572{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}",".clip.jsx-73697572{position:relative;width:80%;overflow:hidden;-webkit-transform:translateX(-101%);-ms-transform:translateX(-101%);transform:translateX(-101%);}",'.clip.jsx-73697572::before{content:"";display:block;padding-bottom:100%;}',".container.jsx-73697572{position:absolute;top:0;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}","img.jsx-73697572{width:100%;height:auto;}",".arrows.jsx-73697572{position:absolute;right:calc(50% + 50px);bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;}",".arrows.jsx-73697572 button.jsx-73697572{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px;border:none;border-radius:2px;background-color:rgba(255,255,255,0.15);cursor:pointer;color:#fff;font-size:1.8rem;outline:none;-webkit-transition:0.3s;transition:0.3s;}",".arrows.jsx-73697572 button.jsx-73697572:hover,.arrows.jsx-73697572 button.jsx-73697572:focus{background-color:rgba(255,255,255,0.3);}",".arrows.jsx-73697572 button.jsx-73697572:hover path.jsx-73697572,.arrows.jsx-73697572 button.jsx-73697572:focus path.jsx-73697572{fill:rgba(255,255,255,1);}",".arrows.jsx-73697572 button.jsx-73697572 path.jsx-73697572{fill:rgba(255,255,255,0.7);-webkit-transition:0.3s;transition:0.3s;}",".arrows.jsx-73697572 button.jsx-73697572:last-child{margin-left:10px;}","@media (max-width:1400px){.clip.jsx-73697572{width:75%;}}","@media (max-width:1400px) and (orientation:landscape){h1.jsx-73697572{font-size:5rem;}}","@media (max-width:1400px) and (orientation:portrait){#projects.jsx-73697572{margin:30px 0;}h1.jsx-73697572{font-size:5rem;}}","@media (max-width:1024px){#projects.jsx-73697572{margin:30px 0;}.clip.jsx-73697572{width:100%;}}","@media (max-width:1024px) and (orientation:landscape){.clip.jsx-73697572{width:100%;}}","@media (max-width:1024px) and (orientation:portrait){section.jsx-73697572{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-73697572{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-73697572{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}.links.jsx-73697572,.tags.jsx-73697572{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.links.jsx-73697572 a.jsx-73697572{margin-left:10px;margin-right:10px;}.tags.jsx-73697572 span.jsx-73697572{margin-left:5px;margin-right:5px;}.thumbnail.jsx-73697572{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-73697572{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}","@media (max-width:767px){section.jsx-73697572{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-73697572{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-73697572{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}.thumbnail.jsx-73697572{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-73697572{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}","@media (max-width:767px) and (orientation:portrait){h1.jsx-73697572{font-size:4rem;}.clip.jsx-73697572{width:100%;}}"]}))}}])&&d(n.prototype,i),a&&d(n,a),t}();t.default=g}},[[234,1,0]]]);