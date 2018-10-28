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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "F:\\Project\\sthobis-github-io\\pages\\projects.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ProjectsPage =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectsPage, _Component);

  function ProjectsPage(props) {
    var _this;

    _classCallCheck(this, ProjectsPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProjectsPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (e) {
      switch (e.which) {
        case _config__WEBPACK_IMPORTED_MODULE_3__["KEYS_CODE"].UP:
        case _config__WEBPACK_IMPORTED_MODULE_3__["KEYS_CODE"].LEFT:
          _this.prevProject();

          break;

        case _config__WEBPACK_IMPORTED_MODULE_3__["KEYS_CODE"].DOWN:
        case _config__WEBPACK_IMPORTED_MODULE_3__["KEYS_CODE"].RIGHT:
          _this.nextProject();

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prevProject", function () {
      _this.animateArrowsButton(_config__WEBPACK_IMPORTED_MODULE_3__["ARROW_TYPE"].PREV);

      _this.prevButton.blur();

      _this.setState(function (prevState) {
        return {
          prevProjectIndex: prevState.currentProjectIndex,
          currentProjectIndex: prevState.currentProjectIndex !== 0 ? prevState.currentProjectIndex - 1 : _config__WEBPACK_IMPORTED_MODULE_3__["projects"].length - 1
        };
      }, _this.reAnimateProject);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextProject", function () {
      _this.animateArrowsButton(_config__WEBPACK_IMPORTED_MODULE_3__["ARROW_TYPE"].NEXT);

      _this.nextButton.blur();

      _this.setState(function (prevState) {
        return {
          prevProjectIndex: prevState.currentProjectIndex,
          currentProjectIndex: prevState.currentProjectIndex !== _config__WEBPACK_IMPORTED_MODULE_3__["projects"].length - 1 ? prevState.currentProjectIndex + 1 : 0
        };
      }, _this.reAnimateProject);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "reAnimateProject", function () {
      animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove(_this.projectDescription);
      animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove(_this.projectThumbnailImage);

      _this.animateProjectDescription();

      _this.animateProjectThumbnailImage();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateProjectThumbnail", function () {
      animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: _this.projectThumbnail,
        translateX: ["-101%", 0],
        easing: "easeInOutQuad",
        duration: 1400
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateProjectThumbnailImage", function () {
      var _this$state = _this.state,
          prevProjectIndex = _this$state.prevProjectIndex,
          currentProjectIndex = _this$state.currentProjectIndex;
      var translateY = "".concat(currentProjectIndex / _config__WEBPACK_IMPORTED_MODULE_3__["projects"].length * -100, "%");
      animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: _this.projectThumbnailImage,
        translateY: translateY,
        easing: "easeInOutQuad",
        duration: 1400
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateProjectDescription", function () {
      var isLandscape = window.innerWidth > window.innerHeight;

      if (isLandscape) {
        animejs__WEBPACK_IMPORTED_MODULE_1___default()({
          targets: _this.projectDescription,
          translateX: ["100%", 0],
          opacity: [0, 1],
          easing: "easeInOutQuad",
          delay: 200,
          duration: 1200
        });
      } else {
        animejs__WEBPACK_IMPORTED_MODULE_1___default()({
          targets: _this.projectDescription,
          translateY: ["-100%", 0],
          opacity: [0, 1],
          easing: "easeInOutQuad",
          delay: 300,
          duration: 900
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateNavigation", function () {
      animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: _this.navigation,
        opacity: [0, 1],
        easing: "easeOutCubic",
        delay: 400,
        duration: 1000
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateArrowsButton", function (type) {
      var _ref = type === _config__WEBPACK_IMPORTED_MODULE_3__["ARROW_TYPE"].PREV ? [_this.prevButtonSvg, [0, -6]] : [_this.nextButtonSvg, [0, 6]],
          _ref2 = _slicedToArray(_ref, 2),
          targets = _ref2[0],
          translateX = _ref2[1];

      animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove(targets);
      var translate = animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: targets,
        translateX: translateX,
        easing: "easeOutSine",
        duration: 800
      });
      translate.reverse();
      translate.play();
    });

    _this.state = {
      prevProjectIndex: 0,
      currentProjectIndex: 0
    };
    return _this;
  }

  _createClass(ProjectsPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timeout = setTimeout(function () {
        _this2.animateProjectDescription();

        _this2.animateProjectThumbnail();

        _this2.animateNavigation();
      }, 800);
      document.addEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove([this.projectDescription, this.projectThumbnail, this.navigation, this.navigationButtons]);
      clearTimeout(this.timeout);
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var currentProjectIndex = this.state.currentProjectIndex;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "projects",
        className: "jsx-3366530700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
        className: "jsx-3366530700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3366530700" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        ref: function ref(el) {
          _this3.projectDescription = el;
        },
        className: "jsx-3366530700" + " " + "wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-3366530700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_3__["projects"][currentProjectIndex].name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-3366530700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_3__["projects"][currentProjectIndex].description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3366530700" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_3__["projects"][currentProjectIndex].links.map(function (link, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          key: i,
          href: link.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "jsx-3366530700",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, link.text);
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3366530700" + " " + "tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_3__["projects"][currentProjectIndex].tags.map(function (tag) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          key: tag,
          className: "jsx-3366530700",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, tag);
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3366530700" + " " + "thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        ref: function ref(el) {
          _this3.projectThumbnail = el;
        },
        className: "jsx-3366530700" + " " + "clip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        ref: function ref(el) {
          _this3.projectThumbnailImage = el;
        },
        className: "jsx-3366530700" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_3__["projects"].map(function (project, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          key: project.name,
          src: "/static/images/".concat(project.name, ".png"),
          alt: project.name,
          className: "jsx-3366530700",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        });
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        ref: function ref(el) {
          _this3.navigation = el;
        },
        className: "jsx-3366530700" + " " + "arrows",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        ref: function ref(el) {
          _this3.prevButton = el;
        },
        type: "button",
        onClick: this.prevProject,
        "aria-label": "previous project",
        className: "jsx-3366530700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
        ref: function ref(el) {
          _this3.prevButtonSvg = el;
        },
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 256 512",
        height: "1em",
        width: "1em",
        className: "jsx-3366530700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
        d: "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",
        className: "jsx-3366530700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        ref: function ref(el) {
          return _this3.nextButton = el;
        },
        type: "button",
        onClick: this.nextProject,
        "aria-label": "next project",
        className: "jsx-3366530700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
        ref: function ref(el) {
          _this3.nextButtonSvg = el;
        },
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 256 512",
        height: "1em",
        width: "1em",
        className: "jsx-3366530700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-3366530700",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3366530700",
        css: "#projects.jsx-3366530700{width:100%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin:30px 0;}section.jsx-3366530700{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.text.jsx-3366530700{width:calc(50% - 50px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 50px 0 0;overflow:hidden;}.wrap.jsx-3366530700{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;width:100%;margin:0 0 50px 0;text-align:right;opacity:0;}h1.jsx-3366530700{margin:0;font-size:8rem;font-family:Raleway,sans-serif;text-transform:capitalize;line-height:1;}p.jsx-3366530700{margin:20px 0 0 0;}.links.jsx-3366530700{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:10px 0;}.links.jsx-3366530700 a.jsx-3366530700{margin:0 0 10px 20px;color:#fff;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed #f5359e;}.links.jsx-3366530700 a.jsx-3366530700:first-child{margin-left:0;}.tags.jsx-3366530700{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.6rem;}.tags.jsx-3366530700 span.jsx-3366530700{line-height:1;margin:0 0 5px 10px;font-style:italic;}.tags.jsx-3366530700 span.jsx-3366530700:first-child{margin-left:0;}.thumbnail.jsx-3366530700{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}.clip.jsx-3366530700{position:relative;width:80%;overflow:hidden;-webkit-transform:translateX(-101%);-ms-transform:translateX(-101%);transform:translateX(-101%);}.clip.jsx-3366530700::before{content:\"\";display:block;padding-bottom:100%;}.container.jsx-3366530700{position:absolute;top:0;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}img.jsx-3366530700{width:100%;height:auto;}.arrows.jsx-3366530700{position:absolute;right:calc(50% + 50px);bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;}.arrows.jsx-3366530700 button.jsx-3366530700{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px;border:none;border-radius:2px;background-color:rgba(255,255,255,0.15);cursor:pointer;color:#fff;font-size:1.8rem;outline:none;-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-3366530700 button.jsx-3366530700:hover,.arrows.jsx-3366530700 button.jsx-3366530700:focus{background-color:rgba(255,255,255,0.3);}.arrows.jsx-3366530700 button.jsx-3366530700:hover path.jsx-3366530700,.arrows.jsx-3366530700 button.jsx-3366530700:focus path.jsx-3366530700{fill:rgba(255,255,255,1);}.arrows.jsx-3366530700 button.jsx-3366530700 path.jsx-3366530700{fill:rgba(255,255,255,0.7);-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-3366530700 button.jsx-3366530700:last-child{margin-left:10px;}@media (max-width:1400px){.clip.jsx-3366530700{width:75%;}}@media (max-width:1400px) and (orientation:landscape){h1.jsx-3366530700{font-size:5vw;}}@media (max-width:1400px) and (orientation:portrait){#projects.jsx-3366530700{margin:30px 0;}h1.jsx-3366530700{font-size:5rem;}}@media (max-width:1024px){.clip.jsx-3366530700{width:100%;}}@media (max-width:1024px) and (orientation:landscape){.clip.jsx-3366530700{width:100%;}}@media (max-width:1024px) and (orientation:portrait){section.jsx-3366530700{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-3366530700{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-3366530700{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}.links.jsx-3366530700,.tags.jsx-3366530700{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.links.jsx-3366530700 a.jsx-3366530700{margin-left:10px;margin-right:10px;}.tags.jsx-3366530700 span.jsx-3366530700{margin-left:5px;margin-right:5px;}.thumbnail.jsx-3366530700{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-3366530700{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px){section.jsx-3366530700{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-3366530700{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-3366530700{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}h1.jsx-3366530700{font-size:4rem;}.thumbnail.jsx-3366530700{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-3366530700{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px) and (orientation:portrait){.clip.jsx-3366530700{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xccGFnZXNcXHByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Rb0IsQUFHd0IsQUFRTyxBQVNLLEFBUVYsQUFXSixBQVFTLEFBSUwsQUFRUSxBQU9QLEFBSUQsQUFTQyxBQU1BLEFBSUosQUFRUSxBQU9QLEFBTU8sQUFTUCxBQUtPLEFBUUwsQUFnQjZCLEFBS2QsQUFJRSxBQUtiLEFBS0wsQUFNSSxBQU1BLEFBSUMsQUFNSixBQU1BLEFBTVcsQUFLWCxBQU1RLEFBT0ksQUFJTixBQUtELEFBS0wsQUFNSyxBQU9NLEFBS1gsQUFNUSxBQU1KLEFBSUosQUFNSyxBQU9MLFNBaFBFLENBa0RGLEFBOEViLENBcEtrQixBQXFHSixBQWVGLEFBc0VaLEFBTUEsQUFXb0IsQUEyQkssQUFrQkwsQUFnQkssQUFhekIsR0F0TkYsQUFhc0IsQUFNdEIsQUF3RkUsQUFNQSxDQUlBLEFBZ0ZBLENBbkNtQixBQVdULEFBa0NBLENBL0daLEFBNkRzQixDQXBOVCxBQW9DYixBQWtEWSxBQWFKLEFBY2lCLEdBakVaLEVBdkNFLEFBb0dmLENBaEZrQyxBQXVFekIsQ0FOYSxBQWdEdEIsRUFJa0IsQ0EzREEsQ0F0RkgsQUFtTUgsQUE2Q0EsRUE1SUMsQ0FwRFUsQ0F5S3JCLENBckprQixDQWdKbEIsSUE1RUYsRUF2QlcsQ0FaSSxFQWRlLENBTzlCLEtBb0JlLEVBN0NmLEdBeEM0QixFQXVNMUIsQUFrQ0EsVUFwSEYsR0FrREUsQUE2Q0EsSUFqT3NCLEFBdUJQLEFBbUJJLEFBOERJLElBcUVGLEFBNkNBLEdBNU1QLENBdENELEFBeURvQixFQTZCTixTQTBIUCxBQTZDQSxFQXROdEIsRUF0QnFCLEVBc01uQixJQTlNZSxPQTZOTCxBQWtDQSxDQXZEVyxBQTZDQSxJQXBNdkIsQ0FvRHdCLFFBYVosTUF1RlYsQUE2Q0EsQ0EvTXlCLEdBNEUzQixNQTVCQSxHQTdCaUIsUUFvS2YsQUFrQ0EsQ0FoUHVCLElBeEJILElBU0csV0E0THZCLEFBNkNBLEVBbEhtQixnQkExQ0EsQ0FyRUQsSUE2RnBCLE1BM0MyQixRQWpEVCxnQkFDbEIsSUE2QnFCLHVCQXZCRSxFQXhCUCxNQVNNLE9BdUhGLENBL0hwQixlQXFGa0IsRUEyQ0osWUFDTSxDQS9EQyxDQW9CckIsZ0JBNEM2QyxPQW5GN0IsY0FDaEIsaUJBeEJhLEVBMkdJLEVBMUhqQixPQWdCb0IsTUEyR1AsV0FDTSxDQTNHQSxTQXlDQSxPQW1FSixDQTNHSCxTQXlDWixDQXhDQSxFQTJHa0Isd0NBQ2xCIiwiZmlsZSI6IkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xccGFnZXNcXHByb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQVJST1dfVFlQRSwgS0VZU19DT0RFLCBwcm9qZWN0cyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbmNsYXNzIFByb2plY3RzUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHByZXZQcm9qZWN0SW5kZXg6IDAsXHJcbiAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXg6IDBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGVQcm9qZWN0RGVzY3JpcHRpb24oKTtcclxuICAgICAgdGhpcy5hbmltYXRlUHJvamVjdFRodW1ibmFpbCgpO1xyXG4gICAgICB0aGlzLmFuaW1hdGVOYXZpZ2F0aW9uKCk7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgYW5pbWUucmVtb3ZlKFtcclxuICAgICAgdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24sXHJcbiAgICAgIHRoaXMucHJvamVjdFRodW1ibmFpbCxcclxuICAgICAgdGhpcy5uYXZpZ2F0aW9uLFxyXG4gICAgICB0aGlzLm5hdmlnYXRpb25CdXR0b25zXHJcbiAgICBdKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleURvd24gPSBlID0+IHtcclxuICAgIHN3aXRjaCAoZS53aGljaCkge1xyXG4gICAgICBjYXNlIEtFWVNfQ09ERS5VUDpcclxuICAgICAgY2FzZSBLRVlTX0NPREUuTEVGVDpcclxuICAgICAgICB0aGlzLnByZXZQcm9qZWN0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgS0VZU19DT0RFLkRPV046XHJcbiAgICAgIGNhc2UgS0VZU19DT0RFLlJJR0hUOlxyXG4gICAgICAgIHRoaXMubmV4dFByb2plY3QoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcmV2UHJvamVjdCA9ICgpID0+IHtcclxuICAgIHRoaXMuYW5pbWF0ZUFycm93c0J1dHRvbihBUlJPV19UWVBFLlBSRVYpO1xyXG4gICAgdGhpcy5wcmV2QnV0dG9uLmJsdXIoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgIHByZXZQcm9qZWN0SW5kZXg6IHByZXZTdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4LFxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXg6XHJcbiAgICAgICAgICBwcmV2U3RhdGUuY3VycmVudFByb2plY3RJbmRleCAhPT0gMFxyXG4gICAgICAgICAgICA/IHByZXZTdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4IC0gMVxyXG4gICAgICAgICAgICA6IHByb2plY3RzLmxlbmd0aCAtIDFcclxuICAgICAgfSksXHJcbiAgICAgIHRoaXMucmVBbmltYXRlUHJvamVjdFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBuZXh0UHJvamVjdCA9ICgpID0+IHtcclxuICAgIHRoaXMuYW5pbWF0ZUFycm93c0J1dHRvbihBUlJPV19UWVBFLk5FWFQpO1xyXG4gICAgdGhpcy5uZXh0QnV0dG9uLmJsdXIoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgIHByZXZQcm9qZWN0SW5kZXg6IHByZXZTdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4LFxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXg6XHJcbiAgICAgICAgICBwcmV2U3RhdGUuY3VycmVudFByb2plY3RJbmRleCAhPT0gcHJvamVjdHMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA/IHByZXZTdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4ICsgMVxyXG4gICAgICAgICAgICA6IDBcclxuICAgICAgfSksXHJcbiAgICAgIHRoaXMucmVBbmltYXRlUHJvamVjdFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZUFuaW1hdGVQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgYW5pbWUucmVtb3ZlKHRoaXMucHJvamVjdERlc2NyaXB0aW9uKTtcclxuICAgIGFuaW1lLnJlbW92ZSh0aGlzLnByb2plY3RUaHVtYm5haWxJbWFnZSk7XHJcbiAgICB0aGlzLmFuaW1hdGVQcm9qZWN0RGVzY3JpcHRpb24oKTtcclxuICAgIHRoaXMuYW5pbWF0ZVByb2plY3RUaHVtYm5haWxJbWFnZSgpO1xyXG4gIH07XHJcblxyXG4gIGFuaW1hdGVQcm9qZWN0VGh1bWJuYWlsID0gKCkgPT4ge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiB0aGlzLnByb2plY3RUaHVtYm5haWwsXHJcbiAgICAgIHRyYW5zbGF0ZVg6IFtcIi0xMDElXCIsIDBdLFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZUluT3V0UXVhZFwiLFxyXG4gICAgICBkdXJhdGlvbjogMTQwMFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYW5pbWF0ZVByb2plY3RUaHVtYm5haWxJbWFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgcHJldlByb2plY3RJbmRleCwgY3VycmVudFByb2plY3RJbmRleCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSBgJHsoY3VycmVudFByb2plY3RJbmRleCAvIHByb2plY3RzLmxlbmd0aCkgKiAtMTAwfSVgO1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiB0aGlzLnByb2plY3RUaHVtYm5haWxJbWFnZSxcclxuICAgICAgdHJhbnNsYXRlWSxcclxuICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1YWRcIixcclxuICAgICAgZHVyYXRpb246IDE0MDBcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGFuaW1hdGVQcm9qZWN0RGVzY3JpcHRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpc0xhbmRzY2FwZSA9IHdpbmRvdy5pbm5lcldpZHRoID4gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgaWYgKGlzTGFuZHNjYXBlKSB7XHJcbiAgICAgIGFuaW1lKHtcclxuICAgICAgICB0YXJnZXRzOiB0aGlzLnByb2plY3REZXNjcmlwdGlvbixcclxuICAgICAgICB0cmFuc2xhdGVYOiBbXCIxMDAlXCIsIDBdLFxyXG4gICAgICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgICAgICBlYXNpbmc6IFwiZWFzZUluT3V0UXVhZFwiLFxyXG4gICAgICAgIGRlbGF5OiAyMDAsXHJcbiAgICAgICAgZHVyYXRpb246IDEyMDBcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgdHJhbnNsYXRlWTogW1wiLTEwMCVcIiwgMF0sXHJcbiAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCIsXHJcbiAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICBkdXJhdGlvbjogOTAwXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGFuaW1hdGVOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiB0aGlzLm5hdmlnYXRpb24sXHJcbiAgICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgICAgZWFzaW5nOiBcImVhc2VPdXRDdWJpY1wiLFxyXG4gICAgICBkZWxheTogNDAwLFxyXG4gICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYW5pbWF0ZUFycm93c0J1dHRvbiA9IHR5cGUgPT4ge1xyXG4gICAgY29uc3QgW3RhcmdldHMsIHRyYW5zbGF0ZVhdID1cclxuICAgICAgdHlwZSA9PT0gQVJST1dfVFlQRS5QUkVWXHJcbiAgICAgICAgPyBbdGhpcy5wcmV2QnV0dG9uU3ZnLCBbMCwgLTZdXVxyXG4gICAgICAgIDogW3RoaXMubmV4dEJ1dHRvblN2ZywgWzAsIDZdXTtcclxuICAgIGFuaW1lLnJlbW92ZSh0YXJnZXRzKTtcclxuICAgIGxldCB0cmFuc2xhdGUgPSBhbmltZSh7XHJcbiAgICAgIHRhcmdldHMsXHJcbiAgICAgIHRyYW5zbGF0ZVgsXHJcbiAgICAgIGVhc2luZzogXCJlYXNlT3V0U2luZVwiLFxyXG4gICAgICBkdXJhdGlvbjogODAwXHJcbiAgICB9KTtcclxuICAgIHRyYW5zbGF0ZS5yZXZlcnNlKCk7XHJcbiAgICB0cmFuc2xhdGUucGxheSgpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY3VycmVudFByb2plY3RJbmRleCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdERlc2NyaXB0aW9uID0gZWw7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3cmFwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMT57cHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgIDxwPntwcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLmxpbmtzLm1hcCgobGluaywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaW5rLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhZ3MubWFwKHRhZyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dGFnfT57dGFnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0VGh1bWJuYWlsID0gZWw7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RUaHVtYm5haWxJbWFnZSA9IGVsO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgL3N0YXRpYy9pbWFnZXMvJHtwcm9qZWN0Lm5hbWV9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uID0gZWw7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFycm93c1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldkJ1dHRvbiA9IGVsO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcmV2UHJvamVjdH1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwicHJldmlvdXMgcHJvamVjdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2QnV0dG9uU3ZnID0gZWw7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2IDUxMlwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzEuNyAyMzlsMTM2LTEzNmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi42IDIyLjZjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMTI3LjkgMjU2bDk2LjQgOTYuNGM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyMDEuNyA0MDljLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0xMzYtMTM2Yy05LjUtOS40LTkuNS0yNC42LS4xLTM0elwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgcmVmPXtlbCA9PiAodGhpcy5uZXh0QnV0dG9uID0gZWwpfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubmV4dFByb2plY3R9XHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm5leHQgcHJvamVjdFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uU3ZnID0gZWw7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2IDUxMlwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAjcHJvamVjdHMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1MHB4IDAgMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAud3JhcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCA1MHB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDhyZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGlua3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5saW5rcyBhIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNmNTM1OWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxpbmtzIGE6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGFncyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhZ3Mgc3BhbiB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMTBweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50YWdzIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMSUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jbGlwOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hcnJvd3Mge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBjYWxjKDUwJSArIDUwcHgpO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFycm93cyBidXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFycm93cyBidXR0b246aG92ZXIsXHJcbiAgICAgICAgICAuYXJyb3dzIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXJyb3dzIGJ1dHRvbjpob3ZlciBwYXRoLFxyXG4gICAgICAgICAgLmFycm93cyBidXR0b246Zm9jdXMgcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFycm93cyBidXR0b24gcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXJyb3dzIGJ1dHRvbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICAjcHJvamVjdHMge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgLmNsaXAge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAud3JhcCB7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpbmtzLFxyXG4gICAgICAgICAgICAudGFncyB7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5rcyBhIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50YWdzIHNwYW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYXJyb3dzIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcclxuICAgICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLndyYXAge1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYXJyb3dzIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzUGFnZTtcclxuIl19 */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\pages\\projects.js */",
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
//# sourceMappingURL=projects.js.e493644e529f8eb16afb.hot-update.js.map