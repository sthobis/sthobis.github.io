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
          activeProjectIndex: prevState.activeProjectIndex !== 0 ? prevState.activeProjectIndex - 1 : _config__WEBPACK_IMPORTED_MODULE_3__["projects"].length - 1
        };
      }, function () {
        animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove(_this.projectDescription);

        _this.animateProjectDescription();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextProject", function () {
      _this.animateArrowsButton(_config__WEBPACK_IMPORTED_MODULE_3__["ARROW_TYPE"].NEXT);

      _this.nextButton.blur();

      _this.setState(function (prevState) {
        return {
          activeProjectIndex: prevState.activeProjectIndex !== _config__WEBPACK_IMPORTED_MODULE_3__["projects"].length - 1 ? prevState.activeProjectIndex + 1 : 0
        };
      }, function () {
        animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove(_this.projectDescription);

        _this.animateProjectDescription();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateProjectThumbnail", function () {
      animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: _this.projectThumbnail,
        translateX: ["-101%", 0],
        easing: "easeOutCubic",
        duration: 1400
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateProjectThumbnailImage", function () {
      var activeProjectIndex = _this.state.activeProjectIndex;
      var translateX = animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: _this.projectThumbnail,
        translateX: ["-101%", 0],
        easing: "easeOutCubic",
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
          easing: "easeOutCubic",
          delay: 200,
          duration: 1200
        });
      } else {
        animejs__WEBPACK_IMPORTED_MODULE_1___default()({
          targets: _this.projectDescription,
          translateY: ["-100%", 0],
          opacity: [0, 1],
          easing: "easeOutCubic",
          delay: 200,
          duration: 800
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
      activeProjectIndex: 0
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

      var activeProjectIndex = this.state.activeProjectIndex;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "projects",
        className: "jsx-2803234600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
        className: "jsx-2803234600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2803234600" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        ref: function ref(el) {
          _this3.projectDescription = el;
        },
        className: "jsx-2803234600" + " " + "wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-2803234600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_3__["projects"][activeProjectIndex].name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-2803234600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_3__["projects"][activeProjectIndex].description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2803234600" + " " + "links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_3__["projects"][activeProjectIndex].links.map(function (link, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          key: i,
          href: link.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "jsx-2803234600",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }, link.text);
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2803234600" + " " + "tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_3__["projects"][activeProjectIndex].tags.map(function (tag) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          key: tag,
          className: "jsx-2803234600",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, tag);
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2803234600" + " " + "thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        ref: function ref(el) {
          _this3.projectThumbnail = el;
        },
        className: "jsx-2803234600" + " " + "clip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2803234600" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_3__["projects"].map(function (project, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          key: project.name,
          src: "/static/images/".concat(project.name, ".png"),
          alt: project.name,
          style: {
            transform: "translateY(".concat(i * 100 - activeProjectIndex * 100, "%)")
          },
          className: "jsx-2803234600",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        });
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        ref: function ref(el) {
          _this3.navigation = el;
        },
        className: "jsx-2803234600" + " " + "arrows",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        ref: function ref(el) {
          _this3.prevButton = el;
        },
        type: "button",
        onClick: this.prevProject,
        "aria-label": "previous project",
        className: "jsx-2803234600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
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
        className: "jsx-2803234600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
        d: "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",
        className: "jsx-2803234600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        ref: function ref(el) {
          return _this3.nextButton = el;
        },
        type: "button",
        onClick: this.nextProject,
        "aria-label": "next project",
        className: "jsx-2803234600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
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
        className: "jsx-2803234600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-2803234600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2803234600",
        css: "#projects.jsx-2803234600{width:100%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}section.jsx-2803234600{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.text.jsx-2803234600{width:calc(50% - 50px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 50px 0 0;overflow:hidden;}.wrap.jsx-2803234600{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;width:100%;margin:0 0 50px 0;text-align:right;opacity:0;}h1.jsx-2803234600{margin:0;font-size:8rem;font-family:Raleway,sans-serif;text-transform:capitalize;line-height:1;}p.jsx-2803234600{margin:20px 0 0 0;}.links.jsx-2803234600{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:10px 0;}.links.jsx-2803234600 a.jsx-2803234600{margin:0 0 10px 20px;color:#fff;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed #f5359e;}.links.jsx-2803234600 a.jsx-2803234600:first-child{margin-left:0;}.tags.jsx-2803234600{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.6rem;}.tags.jsx-2803234600 span.jsx-2803234600{line-height:1;margin:0 0 5px 10px;font-style:italic;}.tags.jsx-2803234600 span.jsx-2803234600:first-child{margin-left:0;}.thumbnail.jsx-2803234600{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}.clip.jsx-2803234600{position:relative;width:80%;overflow:hidden;-webkit-transform:translateX(-101%);-ms-transform:translateX(-101%);transform:translateX(-101%);}.clip.jsx-2803234600::before{content:\"\";display:block;padding-bottom:100%;}.container.jsx-2803234600{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}img.jsx-2803234600{width:100%;height:auto;}.arrows.jsx-2803234600{position:absolute;right:calc(50% + 50px);bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;}.arrows.jsx-2803234600 button.jsx-2803234600{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px;border:none;border-radius:2px;background-color:rgba(255,255,255,0.15);cursor:pointer;color:#fff;font-size:1.8rem;outline:none;-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-2803234600 button.jsx-2803234600:hover,.arrows.jsx-2803234600 button.jsx-2803234600:focus{background-color:rgba(255,255,255,0.3);}.arrows.jsx-2803234600 button.jsx-2803234600:hover path.jsx-2803234600,.arrows.jsx-2803234600 button.jsx-2803234600:focus path.jsx-2803234600{fill:rgba(255,255,255,1);}.arrows.jsx-2803234600 button.jsx-2803234600 path.jsx-2803234600{fill:rgba(255,255,255,0.7);-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-2803234600 button.jsx-2803234600:last-child{margin-left:10px;}@media (max-width:1400px){.clip.jsx-2803234600{width:75%;}}@media (max-width:1400px) and (orientation:landscape){h1.jsx-2803234600{font-size:5rem;}}@media (max-width:1400px) and (orientation:portrait){#projects.jsx-2803234600{margin:30px 0;}h1.jsx-2803234600{font-size:5rem;}}@media (max-width:1024px){#projects.jsx-2803234600{margin:30px 0;}.clip.jsx-2803234600{width:100%;}}@media (max-width:1024px) and (orientation:landscape){.clip.jsx-2803234600{width:100%;}}@media (max-width:1024px) and (orientation:portrait){section.jsx-2803234600{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-2803234600{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-2803234600{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}.links.jsx-2803234600,.tags.jsx-2803234600{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.links.jsx-2803234600 a.jsx-2803234600{margin-left:10px;margin-right:10px;}.tags.jsx-2803234600 span.jsx-2803234600{margin-left:5px;margin-right:5px;}.thumbnail.jsx-2803234600{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-2803234600{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px){section.jsx-2803234600{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-2803234600{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-2803234600{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}.thumbnail.jsx-2803234600{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-2803234600{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px) and (orientation:portrait){h1.jsx-2803234600{font-size:4rem;}.clip.jsx-2803234600{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xccGFnZXNcXHByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThQb0IsQUFHd0IsQUFPTyxBQVNLLEFBUVYsQUFXSixBQVFTLEFBSUwsQUFNUSxBQU9QLEFBSUQsQUFTQyxBQU1BLEFBSUosQUFRUSxBQU9QLEFBTU8sQUFRUCxBQUtPLEFBUUwsQUFnQjZCLEFBS2QsQUFJRSxBQUtiLEFBS0wsQUFNSyxBQU1ELEFBSUMsQUFNRCxBQUlILEFBTUEsQUFNVyxBQUtYLEFBTVEsQUFPSSxBQUlOLEFBS0QsQUFLTCxBQU1LLEFBT00sQUFLWCxBQU1RLEFBTVIsQUFNSyxBQU9ELEFBSUosU0FqUEUsQ0FnREYsQUE2RWIsQ0FoS2tCLEFBa0dKLEFBY0YsQUEwRVosQUFNQSxBQVdvQixBQTJCSyxBQWtCTCxBQVlLLEFBaUJ6QixHQXpORixBQWFzQixBQU10QixBQTZGRSxBQVVBLENBaEJBLEFBVUEsQUFpR0EsQ0FoRG1CLEFBV1QsQUE4QkEsQ0EvR1osQUFpRXNCLENBck5ULEFBb0NiLEFBZ0RZLEFBYUosQUFhaUIsR0FoRVosRUFyQ0UsQUFpR2YsQ0E3RWtDLEFBcUV6QixDQU5hLEFBK0N0QixFQUlrQixDQTFEQSxDQXBGSCxBQW9NSCxBQTZDQSxFQS9JRyxDQXBEUSxDQTRLckIsQ0F4SmtCLENBbUpsQixJQWhGRixFQXZCVyxHQXpCbUIsQ0FPOUIsS0FtQmUsRUE1Q2YsR0F0QzRCLEVBd00xQixBQThCQSxVQXBIRixHQXNERSxBQTZDQSxJQWxPc0IsQUF1QlAsQUFpQkksQUE2REksSUF5RUYsQUE2Q0EsR0E3TVAsQ0FyQ0QsQUFzRG9CLEVBNkJOLFNBNkhQLEFBNkNBLEVBdk50QixFQXRCcUIsRUF1TW5CLElBL01lLEVBa0dPLEtBNEhaLEFBOEJBLENBbkRXLEFBNkNBLElBdk12QixTQWdFWSxNQTJGVixBQTZDQSxDQWhOYyxHQXlFaEIsTUEzQkEsR0E3QmlCLEVBaEJqQixNQXVMRSxBQThCQSxDQTdPdUIsSUF2QkgsSUFRRyxXQTZMdkIsQUE2Q0EsRUF0SG1CLFVBbEJyQixNQXZCcUIsQ0FuRUQsVUFnRE8sUUEvQ1QsZ0JBQ2xCLDJCQU11QixFQXZCdkIsTUFRc0IsT0FvSEYsZ0JBekNGLEVBMENKLFlBQ00sQ0E5REMsQ0FvQnJCLGdCQTJDNkMsc0NBdkdoQyxFQXdHSSxFQXZIakIsT0FnQm9CLE1Bd0dQLFdBQ00sQ0F4R0EsU0F1Q0EsT0FrRUosQ0F4R0gsU0F1Q1osQ0F0Q0EsRUF3R2tCLHdDQUNsQiIsImZpbGUiOiJGOlxcUHJvamVjdFxcc3Rob2Jpcy1naXRodWItaW9cXHBhZ2VzXFxwcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFSUk9XX1RZUEUsIEtFWVNfQ09ERSwgcHJvamVjdHMgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5jbGFzcyBQcm9qZWN0c1BhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY3RpdmVQcm9qZWN0SW5kZXg6IDBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGVQcm9qZWN0RGVzY3JpcHRpb24oKTtcclxuICAgICAgdGhpcy5hbmltYXRlUHJvamVjdFRodW1ibmFpbCgpO1xyXG4gICAgICB0aGlzLmFuaW1hdGVOYXZpZ2F0aW9uKCk7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgYW5pbWUucmVtb3ZlKFtcclxuICAgICAgdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24sXHJcbiAgICAgIHRoaXMucHJvamVjdFRodW1ibmFpbCxcclxuICAgICAgdGhpcy5uYXZpZ2F0aW9uLFxyXG4gICAgICB0aGlzLm5hdmlnYXRpb25CdXR0b25zXHJcbiAgICBdKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleURvd24gPSBlID0+IHtcclxuICAgIHN3aXRjaCAoZS53aGljaCkge1xyXG4gICAgICBjYXNlIEtFWVNfQ09ERS5VUDpcclxuICAgICAgY2FzZSBLRVlTX0NPREUuTEVGVDpcclxuICAgICAgICB0aGlzLnByZXZQcm9qZWN0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgS0VZU19DT0RFLkRPV046XHJcbiAgICAgIGNhc2UgS0VZU19DT0RFLlJJR0hUOlxyXG4gICAgICAgIHRoaXMubmV4dFByb2plY3QoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcmV2UHJvamVjdCA9ICgpID0+IHtcclxuICAgIHRoaXMuYW5pbWF0ZUFycm93c0J1dHRvbihBUlJPV19UWVBFLlBSRVYpO1xyXG4gICAgdGhpcy5wcmV2QnV0dG9uLmJsdXIoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgIGFjdGl2ZVByb2plY3RJbmRleDpcclxuICAgICAgICAgIHByZXZTdGF0ZS5hY3RpdmVQcm9qZWN0SW5kZXggIT09IDBcclxuICAgICAgICAgICAgPyBwcmV2U3RhdGUuYWN0aXZlUHJvamVjdEluZGV4IC0gMVxyXG4gICAgICAgICAgICA6IHByb2plY3RzLmxlbmd0aCAtIDFcclxuICAgICAgfSksXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBhbmltZS5yZW1vdmUodGhpcy5wcm9qZWN0RGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZVByb2plY3REZXNjcmlwdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIG5leHRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5hbmltYXRlQXJyb3dzQnV0dG9uKEFSUk9XX1RZUEUuTkVYVCk7XHJcbiAgICB0aGlzLm5leHRCdXR0b24uYmx1cigpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgcHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgYWN0aXZlUHJvamVjdEluZGV4OlxyXG4gICAgICAgICAgcHJldlN0YXRlLmFjdGl2ZVByb2plY3RJbmRleCAhPT0gcHJvamVjdHMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA/IHByZXZTdGF0ZS5hY3RpdmVQcm9qZWN0SW5kZXggKyAxXHJcbiAgICAgICAgICAgIDogMFxyXG4gICAgICB9KSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGFuaW1lLnJlbW92ZSh0aGlzLnByb2plY3REZXNjcmlwdGlvbik7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlUHJvamVjdERlc2NyaXB0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgYW5pbWF0ZVByb2plY3RUaHVtYm5haWwgPSAoKSA9PiB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IHRoaXMucHJvamVjdFRodW1ibmFpbCxcclxuICAgICAgdHJhbnNsYXRlWDogW1wiLTEwMSVcIiwgMF0sXHJcbiAgICAgIGVhc2luZzogXCJlYXNlT3V0Q3ViaWNcIixcclxuICAgICAgZHVyYXRpb246IDE0MDBcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGFuaW1hdGVQcm9qZWN0VGh1bWJuYWlsSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZVByb2plY3RJbmRleCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHRyYW5zbGF0ZVggPSBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IHRoaXMucHJvamVjdFRodW1ibmFpbCxcclxuICAgICAgdHJhbnNsYXRlWDogW1wiLTEwMSVcIiwgMF0sXHJcbiAgICAgIGVhc2luZzogXCJlYXNlT3V0Q3ViaWNcIixcclxuICAgICAgZHVyYXRpb246IDE0MDBcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGFuaW1hdGVQcm9qZWN0RGVzY3JpcHRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpc0xhbmRzY2FwZSA9IHdpbmRvdy5pbm5lcldpZHRoID4gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgaWYgKGlzTGFuZHNjYXBlKSB7XHJcbiAgICAgIGFuaW1lKHtcclxuICAgICAgICB0YXJnZXRzOiB0aGlzLnByb2plY3REZXNjcmlwdGlvbixcclxuICAgICAgICB0cmFuc2xhdGVYOiBbXCIxMDAlXCIsIDBdLFxyXG4gICAgICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgICAgICBlYXNpbmc6IFwiZWFzZU91dEN1YmljXCIsXHJcbiAgICAgICAgZGVsYXk6IDIwMCxcclxuICAgICAgICBkdXJhdGlvbjogMTIwMFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFuaW1lKHtcclxuICAgICAgICB0YXJnZXRzOiB0aGlzLnByb2plY3REZXNjcmlwdGlvbixcclxuICAgICAgICB0cmFuc2xhdGVZOiBbXCItMTAwJVwiLCAwXSxcclxuICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgZWFzaW5nOiBcImVhc2VPdXRDdWJpY1wiLFxyXG4gICAgICAgIGRlbGF5OiAyMDAsXHJcbiAgICAgICAgZHVyYXRpb246IDgwMFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBhbmltYXRlTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgIGFuaW1lKHtcclxuICAgICAgdGFyZ2V0czogdGhpcy5uYXZpZ2F0aW9uLFxyXG4gICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgIGVhc2luZzogXCJlYXNlT3V0Q3ViaWNcIixcclxuICAgICAgZGVsYXk6IDQwMCxcclxuICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGFuaW1hdGVBcnJvd3NCdXR0b24gPSB0eXBlID0+IHtcclxuICAgIGNvbnN0IFt0YXJnZXRzLCB0cmFuc2xhdGVYXSA9XHJcbiAgICAgIHR5cGUgPT09IEFSUk9XX1RZUEUuUFJFVlxyXG4gICAgICAgID8gW3RoaXMucHJldkJ1dHRvblN2ZywgWzAsIC02XV1cclxuICAgICAgICA6IFt0aGlzLm5leHRCdXR0b25TdmcsIFswLCA2XV07XHJcbiAgICBhbmltZS5yZW1vdmUodGFyZ2V0cyk7XHJcbiAgICBsZXQgdHJhbnNsYXRlID0gYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzLFxyXG4gICAgICB0cmFuc2xhdGVYLFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZU91dFNpbmVcIixcclxuICAgICAgZHVyYXRpb246IDgwMFxyXG4gICAgfSk7XHJcbiAgICB0cmFuc2xhdGUucmV2ZXJzZSgpO1xyXG4gICAgdHJhbnNsYXRlLnBsYXkoKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZVByb2plY3RJbmRleCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdERlc2NyaXB0aW9uID0gZWw7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3cmFwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMT57cHJvamVjdHNbYWN0aXZlUHJvamVjdEluZGV4XS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+e3Byb2plY3RzW2FjdGl2ZVByb2plY3RJbmRleF0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9qZWN0c1thY3RpdmVQcm9qZWN0SW5kZXhdLmxpbmtzLm1hcCgobGluaywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaW5rLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3RzW2FjdGl2ZVByb2plY3RJbmRleF0udGFncy5tYXAodGFnID0+IChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt0YWd9Pnt0YWd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RUaHVtYm5haWwgPSBlbDtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsaXBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC9zdGF0aWMvaW1hZ2VzLyR7cHJvamVjdC5uYW1lfS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7aSAqIDEwMCAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVByb2plY3RJbmRleCAqIDEwMH0lKWBcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvbiA9IGVsO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvd3NcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZCdXR0b24gPSBlbDtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJldlByb2plY3R9XHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInByZXZpb3VzIHByb2plY3RcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJldkJ1dHRvblN2ZyA9IGVsO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMFwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMxLjcgMjM5bDEzNi0xMzZjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMjIuNiAyMi42YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDEyNy45IDI1Nmw5Ni40IDk2LjRjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMjAxLjcgNDA5Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMTM2LTEzNmMtOS41LTkuNC05LjUtMjQuNi0uMS0zNHpcIiAvPlxyXG4gICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHJlZj17ZWwgPT4gKHRoaXMubmV4dEJ1dHRvbiA9IGVsKX1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm5leHRQcm9qZWN0fVxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJuZXh0IHByb2plY3RcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubmV4dEJ1dHRvblN2ZyA9IGVsO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMFwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgI3Byb2plY3RzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1MHB4IDAgMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAud3JhcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCA1MHB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDhyZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGlua3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5saW5rcyBhIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNmNTM1OWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxpbmtzIGE6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGFncyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhZ3Mgc3BhbiB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMTBweDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50YWdzIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMSUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jbGlwOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFycm93cyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IGNhbGMoNTAlICsgNTBweCk7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXJyb3dzIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXJyb3dzIGJ1dHRvbjpob3ZlcixcclxuICAgICAgICAgIC5hcnJvd3MgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hcnJvd3MgYnV0dG9uOmhvdmVyIHBhdGgsXHJcbiAgICAgICAgICAuYXJyb3dzIGJ1dHRvbjpmb2N1cyBwYXRoIHtcclxuICAgICAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXJyb3dzIGJ1dHRvbiBwYXRoIHtcclxuICAgICAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hcnJvd3MgYnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICAjcHJvamVjdHMge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAjcHJvamVjdHMge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgLmNsaXAge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAud3JhcCB7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpbmtzLFxyXG4gICAgICAgICAgICAudGFncyB7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5rcyBhIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50YWdzIHNwYW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYXJyb3dzIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcclxuICAgICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLndyYXAge1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYXJyb3dzIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzUGFnZTtcclxuIl19 */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\pages\\projects.js */",
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
//# sourceMappingURL=projects.js.cd0ac2c64a4c9393f943.hot-update.js.map