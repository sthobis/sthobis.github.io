webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Project\\sthobis-github-io\\pages\\projects.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var projects = [{
  name: "molondry",
  links: [{
    href: "https://molondry.com",
    text: "Live site"
  }, {
    href: "https://itunes.apple.com/us/app/molondry/id1413776306?ls=1&mt=8",
    text: "AppStore"
  }, {
    href: "https://play.google.com/store/apps/details?id=com.molondry",
    text: "PlayStore"
  }],
  tags: ["express", "mongodb", "react", "react-native", "expo", "ui design"],
  description: "Molondry is web / mobile (integrated) app for ordering laundry service."
}, {
  name: "duajarimanis",
  links: [{
    href: "https://duajarimanis.com",
    text: "Live site"
  }],
  tags: ["express", "mongodb", "react", "next.js", "ui design"],
  description: "Duajarimanis is a static wedding site generator with a built-in WYSIWYG editor."
}, {
  name: "igfluencer",
  links: [{
    href: "https://igfluencer.id",
    text: "Live site"
  }],
  tags: ["express", "mongodb", "react", "next.js", "ui design"],
  description: "Igfluencer is an online platform to find top instagram influencers in Indonesia."
}];
var KEYS_CODE = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
var ARROW_TYPE = {
  PREV: "prev",
  NEXT: "next"
};

var ProjectsPage =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectsPage, _Component);

  function ProjectsPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ProjectsPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProjectsPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeProjectIndex: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (e) {
      switch (e.which) {
        case KEYS_CODE.UP:
        case KEYS_CODE.LEFT:
          _this.prevProject();

          break;

        case KEYS_CODE.DOWN:
        case KEYS_CODE.RIGHT:
          _this.nextProject();

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prevProject", function () {
      _this.animateArrowsButton(ARROW_TYPE.PREV);

      _this.prevButton.blur();

      _this.setState(function (prevState) {
        return {
          activeProjectIndex: prevState.activeProjectIndex !== 0 ? prevState.activeProjectIndex - 1 : projects.length - 1
        };
      }, function () {
        animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove("#projects .text .wrap");

        _this.animateProjectText();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextProject", function () {
      _this.animateArrowsButton(ARROW_TYPE.NEXT);

      _this.nextButton.blur();

      _this.setState(function (prevState) {
        return {
          activeProjectIndex: prevState.activeProjectIndex !== projects.length - 1 ? prevState.activeProjectIndex + 1 : 0
        };
      }, function () {
        animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove("#projects .text .wrap");

        _this.animateProjectText();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateProjectThumbnail", function () {
      animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: "#projects .thumbnail .clip",
        translateX: ["-101%", 0],
        easing: "easeOutCubic",
        duration: 1400
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateProjectText", function () {
      var isLandscape = window.innerWidth > window.innerHeight;

      if (isLandscape) {
        animejs__WEBPACK_IMPORTED_MODULE_1___default()({
          targets: "#projects .text .wrap",
          translateX: ["100%", 0],
          opacity: [0, 1],
          easing: "easeOutCubic",
          delay: 200,
          duration: 1200
        });
      } else {
        animejs__WEBPACK_IMPORTED_MODULE_1___default()({
          targets: "#projects .text .wrap",
          translateY: ["-100%", 0],
          opacity: [0, 1],
          easing: "easeOutCubic",
          delay: 200,
          duration: 800
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateArrowsContainer", function () {
      animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: "#projects .arrows",
        opacity: [0, 1],
        easing: "easeOutCubic",
        delay: 400,
        duration: 1000
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateArrowsButton", function (type) {
      var targets = type === ARROW_TYPE.PREV ? "#projects .arrows button:first-child svg" : "#projects .arrows button:last-child svg";
      animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove(targets);
      var translate = animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: targets,
        translateX: type === ARROW_TYPE.PREV ? [0, -6] : [0, 6],
        easing: "easeOutSine",
        duration: 800
      });
      translate.reverse();
      translate.play();
    });

    return _this;
  }

  _createClass(ProjectsPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timeout = setTimeout(function () {
        _this2.animateProjectText();

        _this2.animateProjectThumbnail();

        _this2.animateArrowsContainer();
      }, 800);
      document.addEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove(["#projects .text .wrap", "#projects .thumbnail .clip", "#projects .arrows", "#projects .arrows button svg"]);
      clearTimeout(this.timeout);
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var activeProjectIndex = this.state.activeProjectIndex;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        ref: function ref(el) {
          return _this3.container = el;
        },
        id: "projects",
        className: "jsx-3335039200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
        className: "jsx-3335039200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3335039200" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3335039200" + " " + "wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-3335039200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, projects[activeProjectIndex].name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-3335039200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, projects[activeProjectIndex].description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3335039200" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, projects[activeProjectIndex].links.map(function (link, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          key: i,
          href: link.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "jsx-3335039200",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, link.text);
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3335039200" + " " + "tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, projects[activeProjectIndex].tags.map(function (tag) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          key: tag,
          className: "jsx-3335039200",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, tag);
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3335039200" + " " + "thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3335039200" + " " + "clip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, projects.map(function (project, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          key: project.name,
          src: "/static/images/".concat(project.name, ".png"),
          alt: project.name,
          style: {
            transform: "translateY(".concat(i * 100 - activeProjectIndex * 100, "%)")
          },
          className: "jsx-3335039200",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3335039200" + " " + "arrows",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        ref: function ref(el) {
          return _this3.prevButton = el;
        },
        type: "button",
        onClick: this.prevProject,
        "aria-label": "previous project",
        className: "jsx-3335039200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 256 512",
        height: "1em",
        width: "1em",
        className: "jsx-3335039200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
        d: "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",
        className: "jsx-3335039200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        ref: function ref(el) {
          return _this3.nextButton = el;
        },
        type: "button",
        onClick: this.nextProject,
        "aria-label": "next project",
        className: "jsx-3335039200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 256 512",
        height: "1em",
        width: "1em",
        className: "jsx-3335039200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-3335039200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3335039200",
        css: "#projects.jsx-3335039200{width:100%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}section.jsx-3335039200{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.text.jsx-3335039200{width:calc(50% - 50px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 50px 0 0;overflow:hidden;}.wrap.jsx-3335039200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;width:100%;margin:0 0 50px 0;text-align:right;opacity:0;}h1.jsx-3335039200{margin:0;font-size:8rem;font-family:Raleway,sans-serif;text-transform:capitalize;line-height:1;}p.jsx-3335039200{margin:20px 0 0 0;}.links.jsx-3335039200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:10px 0;}.links.jsx-3335039200 a.jsx-3335039200{margin:0 0 10px 20px;color:#fff;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed #f5359e;}.links.jsx-3335039200 a.jsx-3335039200:first-child{margin-left:0;}.tags.jsx-3335039200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.6rem;}.tags.jsx-3335039200 span.jsx-3335039200{line-height:1;margin:0 0 5px 10px;font-style:italic;}.tags.jsx-3335039200 span.jsx-3335039200:first-child{margin-left:0;}.thumbnail.jsx-3335039200{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}.clip.jsx-3335039200{position:relative;width:80%;overflow:hidden;-webkit-transform:translateX(-101%);-ms-transform:translateX(-101%);transform:translateX(-101%);}.clip.jsx-3335039200::before{content:\"\";display:block;padding-bottom:100%;}.clip.jsx-3335039200 img.jsx-3335039200{position:absolute;top:-1px;left:0;width:auto;height:calc(100% + 2px);-webkit-transition:1s;transition:1s;}.arrows.jsx-3335039200{position:absolute;right:calc(50% + 50px);bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;}.arrows.jsx-3335039200 button.jsx-3335039200{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px;border:none;border-radius:2px;background-color:rgba(255,255,255,0.15);cursor:pointer;color:#fff;font-size:1.8rem;outline:none;-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-3335039200 button.jsx-3335039200:hover,.arrows.jsx-3335039200 button.jsx-3335039200:focus{background-color:rgba(255,255,255,0.3);}.arrows.jsx-3335039200 button.jsx-3335039200:hover path.jsx-3335039200,.arrows.jsx-3335039200 button.jsx-3335039200:focus path.jsx-3335039200{fill:rgba(255,255,255,1);}.arrows.jsx-3335039200 button.jsx-3335039200 path.jsx-3335039200{fill:rgba(255,255,255,0.7);-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-3335039200 button.jsx-3335039200:last-child{margin-left:10px;}@media (max-width:1400px){.clip.jsx-3335039200{width:75%;}}@media (max-width:1400px) and (orientation:landscape){h1.jsx-3335039200{font-size:5rem;}}@media (max-width:1400px) and (orientation:portrait){#projects.jsx-3335039200{margin:30px 0;}h1.jsx-3335039200{font-size:5rem;}}@media (max-width:1024px){#projects.jsx-3335039200{margin:30px 0;}.clip.jsx-3335039200{width:100%;}}@media (max-width:1024px) and (orientation:landscape){.clip.jsx-3335039200{width:100%;}}@media (max-width:1024px) and (orientation:portrait){section.jsx-3335039200{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-3335039200{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-3335039200{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}.links.jsx-3335039200,.tags.jsx-3335039200{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.links.jsx-3335039200 a.jsx-3335039200{margin-left:10px;margin-right:10px;}.tags.jsx-3335039200 span.jsx-3335039200{margin-left:5px;margin-right:5px;}.thumbnail.jsx-3335039200{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-3335039200{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px){section.jsx-3335039200{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-3335039200{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-3335039200{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}.thumbnail.jsx-3335039200{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-3335039200{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px) and (orientation:portrait){h1.jsx-3335039200{font-size:4rem;}.clip.jsx-3335039200{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xccGFnZXNcXHByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtSb0IsQUFHd0IsQUFPTyxBQVNLLEFBUVYsQUFXSixBQVFTLEFBSUwsQUFNUSxBQU9QLEFBSUQsQUFTQyxBQU1BLEFBSUosQUFRUSxBQU9QLEFBTU8sQUFTQSxBQVFMLEFBZ0I2QixBQUtkLEFBSUUsQUFLYixBQUtMLEFBTUssQUFNRCxBQUlDLEFBTUQsQUFJSCxBQU1BLEFBTVcsQUFLWCxBQU1RLEFBT0ksQUFJTixBQUtELEFBS0wsQUFNSyxBQU9NLEFBS1gsQUFNUSxBQU1SLEFBTUssQUFPRCxBQUlKLFNBN09FLENBZ0RGLEFBeUViLENBNUprQixBQWtHSixBQW9GZCxBQU1BLEFBV29CLEFBMkJLLEFBa0JMLEFBWUssQUFpQnpCLEdBck5GLEFBYXNCLEFBTXRCLEFBeUZFLEFBVUEsQ0FoQkEsQUFVQSxBQWlHQSxDQWhEbUIsQUFXVCxBQThCQSxDQS9HWixBQWlFc0IsQ0FqTlQsQUFvQ2IsQUFnRFksQUFhRCxBQVNjLEdBNURaLEVBckNFLENBb0JtQixDQStEWixBQTJDdEIsRUFyQ1MsQUF5Q1MsQ0F0REEsQ0FwRkgsQUFnTUgsQUE2Q0EsR0EvTFcsQ0F3S3JCLENBcEprQixBQWdDUCxDQStHWCxJQWhGRixFQXZCVyxHQXJCbUIsQ0FPOUIsQUFPMEIsS0FRWCxFQXhDZixHQXRDNEIsRUFvTTFCLEFBOEJBLFVBcEhGLEVBdkNnQixDQTZGZCxBQTZDQSxJQTlOc0IsQUF1QlAsQUFpQkksQUF5REksSUF5RUYsQUE2Q0EsR0F6TVAsQ0FyQ0QsQUFzRG9CLEVBNkJOLFNBeUhQLEFBNkNBLEVBbk50QixFQXRCcUIsRUFtTW5CLElBM01lLEVBb0dqQixLQXNIWSxBQThCQSxDQW5EVyxBQTZDQSxJQW5NdkIsU0E0RFksTUEyRlYsQUE2Q0EsQ0E1TWMsR0FxRWhCLE1BdkJBLEdBN0JpQixFQWhCakIsTUFtTEUsQUE4QkEsQ0F6T3VCLElBdkJILElBUUcsV0F5THZCLEFBNkNBLEVBdEhtQixnQkFyQ0EsQ0FuRUQsVUFnRE8sUUEvQ1QsZ0JBQ2xCLDJCQU11QixFQXZCdkIsTUFRc0IsT0FnSEYsZ0JBckNGLEVBc0NKLFlBQ00sQ0ExREMsQ0FvQnJCLGdCQXVDNkMsc0NBbkdoQyxFQW9HSSxFQW5IakIsT0FnQm9CLE1Bb0dQLFdBQ00sQ0FwR0EsU0F1Q0EsT0E4REosQ0FwR0gsU0F1Q1osQ0F0Q0EsRUFvR2tCLHdDQUNsQiIsImZpbGUiOiJGOlxcUHJvamVjdFxcc3Rob2Jpcy1naXRodWItaW9cXHBhZ2VzXFxwcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIm1vbG9uZHJ5XCIsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaHJlZjogXCJodHRwczovL21vbG9uZHJ5LmNvbVwiLFxyXG4gICAgICAgIHRleHQ6IFwiTGl2ZSBzaXRlXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL2FwcC9tb2xvbmRyeS9pZDE0MTM3NzYzMDY/bHM9MSZtdD04XCIsXHJcbiAgICAgICAgdGV4dDogXCJBcHBTdG9yZVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBocmVmOiBcImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20ubW9sb25kcnlcIixcclxuICAgICAgICB0ZXh0OiBcIlBsYXlTdG9yZVwiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICB0YWdzOiBbXCJleHByZXNzXCIsIFwibW9uZ29kYlwiLCBcInJlYWN0XCIsIFwicmVhY3QtbmF0aXZlXCIsIFwiZXhwb1wiLCBcInVpIGRlc2lnblwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIk1vbG9uZHJ5IGlzIHdlYiAvIG1vYmlsZSAoaW50ZWdyYXRlZCkgYXBwIGZvciBvcmRlcmluZyBsYXVuZHJ5IHNlcnZpY2UuXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiZHVhamFyaW1hbmlzXCIsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaHJlZjogXCJodHRwczovL2R1YWphcmltYW5pcy5jb21cIixcclxuICAgICAgICB0ZXh0OiBcIkxpdmUgc2l0ZVwiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICB0YWdzOiBbXCJleHByZXNzXCIsIFwibW9uZ29kYlwiLCBcInJlYWN0XCIsIFwibmV4dC5qc1wiLCBcInVpIGRlc2lnblwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkR1YWphcmltYW5pcyBpcyBhIHN0YXRpYyB3ZWRkaW5nIHNpdGUgZ2VuZXJhdG9yIHdpdGggYSBidWlsdC1pbiBXWVNJV1lHIGVkaXRvci5cIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJpZ2ZsdWVuY2VyXCIsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaHJlZjogXCJodHRwczovL2lnZmx1ZW5jZXIuaWRcIixcclxuICAgICAgICB0ZXh0OiBcIkxpdmUgc2l0ZVwiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICB0YWdzOiBbXCJleHByZXNzXCIsIFwibW9uZ29kYlwiLCBcInJlYWN0XCIsIFwibmV4dC5qc1wiLCBcInVpIGRlc2lnblwiXSxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIklnZmx1ZW5jZXIgaXMgYW4gb25saW5lIHBsYXRmb3JtIHRvIGZpbmQgdG9wIGluc3RhZ3JhbSBpbmZsdWVuY2VycyBpbiBJbmRvbmVzaWEuXCJcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBLRVlTX0NPREUgPSB7XHJcbiAgTEVGVDogMzcsXHJcbiAgVVA6IDM4LFxyXG4gIFJJR0hUOiAzOSxcclxuICBET1dOOiA0MFxyXG59O1xyXG5cclxuY29uc3QgQVJST1dfVFlQRSA9IHtcclxuICBQUkVWOiBcInByZXZcIixcclxuICBORVhUOiBcIm5leHRcIlxyXG59O1xyXG5cclxuY2xhc3MgUHJvamVjdHNQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGFjdGl2ZVByb2plY3RJbmRleDogMFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZVByb2plY3RUZXh0KCk7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZVByb2plY3RUaHVtYm5haWwoKTtcclxuICAgICAgdGhpcy5hbmltYXRlQXJyb3dzQ29udGFpbmVyKCk7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgYW5pbWUucmVtb3ZlKFtcclxuICAgICAgXCIjcHJvamVjdHMgLnRleHQgLndyYXBcIixcclxuICAgICAgXCIjcHJvamVjdHMgLnRodW1ibmFpbCAuY2xpcFwiLFxyXG4gICAgICBcIiNwcm9qZWN0cyAuYXJyb3dzXCIsXHJcbiAgICAgIFwiI3Byb2plY3RzIC5hcnJvd3MgYnV0dG9uIHN2Z1wiXHJcbiAgICBdKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleURvd24gPSBlID0+IHtcclxuICAgIHN3aXRjaCAoZS53aGljaCkge1xyXG4gICAgICBjYXNlIEtFWVNfQ09ERS5VUDpcclxuICAgICAgY2FzZSBLRVlTX0NPREUuTEVGVDpcclxuICAgICAgICB0aGlzLnByZXZQcm9qZWN0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgS0VZU19DT0RFLkRPV046XHJcbiAgICAgIGNhc2UgS0VZU19DT0RFLlJJR0hUOlxyXG4gICAgICAgIHRoaXMubmV4dFByb2plY3QoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcmV2UHJvamVjdCA9ICgpID0+IHtcclxuICAgIHRoaXMuYW5pbWF0ZUFycm93c0J1dHRvbihBUlJPV19UWVBFLlBSRVYpO1xyXG4gICAgdGhpcy5wcmV2QnV0dG9uLmJsdXIoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgIGFjdGl2ZVByb2plY3RJbmRleDpcclxuICAgICAgICAgIHByZXZTdGF0ZS5hY3RpdmVQcm9qZWN0SW5kZXggIT09IDBcclxuICAgICAgICAgICAgPyBwcmV2U3RhdGUuYWN0aXZlUHJvamVjdEluZGV4IC0gMVxyXG4gICAgICAgICAgICA6IHByb2plY3RzLmxlbmd0aCAtIDFcclxuICAgICAgfSksXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBhbmltZS5yZW1vdmUoXCIjcHJvamVjdHMgLnRleHQgLndyYXBcIik7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlUHJvamVjdFRleHQoKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBuZXh0UHJvamVjdCA9ICgpID0+IHtcclxuICAgIHRoaXMuYW5pbWF0ZUFycm93c0J1dHRvbihBUlJPV19UWVBFLk5FWFQpO1xyXG4gICAgdGhpcy5uZXh0QnV0dG9uLmJsdXIoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgIGFjdGl2ZVByb2plY3RJbmRleDpcclxuICAgICAgICAgIHByZXZTdGF0ZS5hY3RpdmVQcm9qZWN0SW5kZXggIT09IHByb2plY3RzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgPyBwcmV2U3RhdGUuYWN0aXZlUHJvamVjdEluZGV4ICsgMVxyXG4gICAgICAgICAgICA6IDBcclxuICAgICAgfSksXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBhbmltZS5yZW1vdmUoXCIjcHJvamVjdHMgLnRleHQgLndyYXBcIik7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlUHJvamVjdFRleHQoKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBhbmltYXRlUHJvamVjdFRodW1ibmFpbCA9ICgpID0+IHtcclxuICAgIGFuaW1lKHtcclxuICAgICAgdGFyZ2V0czogXCIjcHJvamVjdHMgLnRodW1ibmFpbCAuY2xpcFwiLFxyXG4gICAgICB0cmFuc2xhdGVYOiBbXCItMTAxJVwiLCAwXSxcclxuICAgICAgZWFzaW5nOiBcImVhc2VPdXRDdWJpY1wiLFxyXG4gICAgICBkdXJhdGlvbjogMTQwMFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYW5pbWF0ZVByb2plY3RUZXh0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXNMYW5kc2NhcGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGlmIChpc0xhbmRzY2FwZSkge1xyXG4gICAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogXCIjcHJvamVjdHMgLnRleHQgLndyYXBcIixcclxuICAgICAgICB0cmFuc2xhdGVYOiBbXCIxMDAlXCIsIDBdLFxyXG4gICAgICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgICAgICBlYXNpbmc6IFwiZWFzZU91dEN1YmljXCIsXHJcbiAgICAgICAgZGVsYXk6IDIwMCxcclxuICAgICAgICBkdXJhdGlvbjogMTIwMFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFuaW1lKHtcclxuICAgICAgICB0YXJnZXRzOiBcIiNwcm9qZWN0cyAudGV4dCAud3JhcFwiLFxyXG4gICAgICAgIHRyYW5zbGF0ZVk6IFtcIi0xMDAlXCIsIDBdLFxyXG4gICAgICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgICAgICBlYXNpbmc6IFwiZWFzZU91dEN1YmljXCIsXHJcbiAgICAgICAgZGVsYXk6IDIwMCxcclxuICAgICAgICBkdXJhdGlvbjogODAwXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGFuaW1hdGVBcnJvd3NDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IFwiI3Byb2plY3RzIC5hcnJvd3NcIixcclxuICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZU91dEN1YmljXCIsXHJcbiAgICAgIGRlbGF5OiA0MDAsXHJcbiAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBhbmltYXRlQXJyb3dzQnV0dG9uID0gdHlwZSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRzID1cclxuICAgICAgdHlwZSA9PT0gQVJST1dfVFlQRS5QUkVWXHJcbiAgICAgICAgPyBcIiNwcm9qZWN0cyAuYXJyb3dzIGJ1dHRvbjpmaXJzdC1jaGlsZCBzdmdcIlxyXG4gICAgICAgIDogXCIjcHJvamVjdHMgLmFycm93cyBidXR0b246bGFzdC1jaGlsZCBzdmdcIjtcclxuICAgIGFuaW1lLnJlbW92ZSh0YXJnZXRzKTtcclxuICAgIGxldCB0cmFuc2xhdGUgPSBhbmltZSh7XHJcbiAgICAgIHRhcmdldHMsXHJcbiAgICAgIHRyYW5zbGF0ZVg6IHR5cGUgPT09IEFSUk9XX1RZUEUuUFJFViA/IFswLCAtNl0gOiBbMCwgNl0sXHJcbiAgICAgIGVhc2luZzogXCJlYXNlT3V0U2luZVwiLFxyXG4gICAgICBkdXJhdGlvbjogODAwXHJcbiAgICB9KTtcclxuICAgIHRyYW5zbGF0ZS5yZXZlcnNlKCk7XHJcbiAgICB0cmFuc2xhdGUucGxheSgpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgYWN0aXZlUHJvamVjdEluZGV4IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiByZWY9e2VsID0+ICh0aGlzLmNvbnRhaW5lciA9IGVsKX0gaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxyXG4gICAgICAgICAgICAgIDxoMT57cHJvamVjdHNbYWN0aXZlUHJvamVjdEluZGV4XS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+e3Byb2plY3RzW2FjdGl2ZVByb2plY3RJbmRleF0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9qZWN0c1thY3RpdmVQcm9qZWN0SW5kZXhdLmxpbmtzLm1hcCgobGluaywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaW5rLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3RzW2FjdGl2ZVByb2plY3RJbmRleF0udGFncy5tYXAodGFnID0+IChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt0YWd9Pnt0YWd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaXBcIj5cclxuICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2Avc3RhdGljL2ltYWdlcy8ke3Byb2plY3QubmFtZX0ucG5nYH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke2kgKiAxMDAgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUHJvamVjdEluZGV4ICogMTAwfSUpYFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dzXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICByZWY9e2VsID0+ICh0aGlzLnByZXZCdXR0b24gPSBlbCl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcmV2UHJvamVjdH1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwicHJldmlvdXMgcHJvamVjdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgNTEyXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMS43IDIzOWwxMzYtMTM2YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDIyLjYgMjIuNmM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwxMjcuOSAyNTZsOTYuNCA5Ni40YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDIwMS43IDQwOWMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTEzNi0xMzZjLTkuNS05LjQtOS41LTI0LjYtLjEtMzR6XCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICByZWY9e2VsID0+ICh0aGlzLm5leHRCdXR0b24gPSBlbCl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5uZXh0UHJvamVjdH1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibmV4dCBwcm9qZWN0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMFwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgI3Byb2plY3RzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1MHB4IDAgMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAud3JhcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCA1MHB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDhyZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGlua3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5saW5rcyBhIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNmNTM1OWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxpbmtzIGE6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGFncyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhZ3Mgc3BhbiB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMTBweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50YWdzIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMSUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jbGlwOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNsaXAgaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0xcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDJweCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hcnJvd3Mge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBjYWxjKDUwJSArIDUwcHgpO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFycm93cyBidXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFycm93cyBidXR0b246aG92ZXIsXHJcbiAgICAgICAgICAuYXJyb3dzIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXJyb3dzIGJ1dHRvbjpob3ZlciBwYXRoLFxyXG4gICAgICAgICAgLmFycm93cyBidXR0b246Zm9jdXMgcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFycm93cyBidXR0b24gcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXJyb3dzIGJ1dHRvbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgI3Byb2plY3RzIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgI3Byb2plY3RzIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNsaXAge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcclxuICAgICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLndyYXAge1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5rcyxcclxuICAgICAgICAgICAgLnRhZ3Mge1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGlua3MgYSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGFncyBzcGFuIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFycm93cyB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgICBvcmRlcjogMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMCAwIDA7XHJcbiAgICAgICAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC53cmFwIHtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFycm93cyB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgICBvcmRlcjogMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNsaXAge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1BhZ2U7XHJcbiJdfQ== */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\pages\\projects.js */",
        __self: this
      }));
    }
  }]);

  return ProjectsPage;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjectsPage);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=projects.js.3b0fd4d3e57ff38c35ea.hot-update.js.map