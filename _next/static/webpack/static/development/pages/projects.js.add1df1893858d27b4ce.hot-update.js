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
        className: "jsx-73697572",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
        className: "jsx-73697572",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-73697572" + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        ref: function ref(el) {
          _this3.projectDescription = el;
        },
        className: "jsx-73697572" + " " + "wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-73697572",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_3__["projects"][activeProjectIndex].name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-73697572",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_3__["projects"][activeProjectIndex].description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-73697572" + " " + "links",
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
          className: "jsx-73697572",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }, link.text);
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-73697572" + " " + "tags",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, _config__WEBPACK_IMPORTED_MODULE_3__["projects"][activeProjectIndex].tags.map(function (tag) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
          key: tag,
          className: "jsx-73697572",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, tag);
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-73697572" + " " + "thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        ref: function ref(el) {
          _this3.projectThumbnail = el;
        },
        className: "jsx-73697572" + " " + "clip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-73697572" + " " + "container",
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
          className: "jsx-73697572",
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
        className: "jsx-73697572" + " " + "arrows",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        ref: function ref(el) {
          _this3.prevButton = el;
        },
        type: "button",
        onClick: this.prevProject,
        "aria-label": "previous project",
        className: "jsx-73697572",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
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
        className: "jsx-73697572",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
        d: "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",
        className: "jsx-73697572",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
        ref: function ref(el) {
          return _this3.nextButton = el;
        },
        type: "button",
        onClick: this.nextProject,
        "aria-label": "next project",
        className: "jsx-73697572",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
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
        className: "jsx-73697572",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
        d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        className: "jsx-73697572",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "73697572",
        css: "#projects.jsx-73697572{width:100%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}section.jsx-73697572{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.text.jsx-73697572{width:calc(50% - 50px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 50px 0 0;overflow:hidden;}.wrap.jsx-73697572{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;width:100%;margin:0 0 50px 0;text-align:right;opacity:0;}h1.jsx-73697572{margin:0;font-size:8rem;font-family:Raleway,sans-serif;text-transform:capitalize;line-height:1;}p.jsx-73697572{margin:20px 0 0 0;}.links.jsx-73697572{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:10px 0;}.links.jsx-73697572 a.jsx-73697572{margin:0 0 10px 20px;color:#fff;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed #f5359e;}.links.jsx-73697572 a.jsx-73697572:first-child{margin-left:0;}.tags.jsx-73697572{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.6rem;}.tags.jsx-73697572 span.jsx-73697572{line-height:1;margin:0 0 5px 10px;font-style:italic;}.tags.jsx-73697572 span.jsx-73697572:first-child{margin-left:0;}.thumbnail.jsx-73697572{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}.clip.jsx-73697572{position:relative;width:80%;overflow:hidden;-webkit-transform:translateX(-101%);-ms-transform:translateX(-101%);transform:translateX(-101%);}.clip.jsx-73697572::before{content:\"\";display:block;padding-bottom:100%;}.container.jsx-73697572{position:absolute;top:0;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}img.jsx-73697572{width:100%;height:auto;}.arrows.jsx-73697572{position:absolute;right:calc(50% + 50px);bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;}.arrows.jsx-73697572 button.jsx-73697572{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px;border:none;border-radius:2px;background-color:rgba(255,255,255,0.15);cursor:pointer;color:#fff;font-size:1.8rem;outline:none;-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-73697572 button.jsx-73697572:hover,.arrows.jsx-73697572 button.jsx-73697572:focus{background-color:rgba(255,255,255,0.3);}.arrows.jsx-73697572 button.jsx-73697572:hover path.jsx-73697572,.arrows.jsx-73697572 button.jsx-73697572:focus path.jsx-73697572{fill:rgba(255,255,255,1);}.arrows.jsx-73697572 button.jsx-73697572 path.jsx-73697572{fill:rgba(255,255,255,0.7);-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-73697572 button.jsx-73697572:last-child{margin-left:10px;}@media (max-width:1400px){.clip.jsx-73697572{width:75%;}}@media (max-width:1400px) and (orientation:landscape){h1.jsx-73697572{font-size:5rem;}}@media (max-width:1400px) and (orientation:portrait){#projects.jsx-73697572{margin:30px 0;}h1.jsx-73697572{font-size:5rem;}}@media (max-width:1024px){#projects.jsx-73697572{margin:30px 0;}.clip.jsx-73697572{width:100%;}}@media (max-width:1024px) and (orientation:landscape){.clip.jsx-73697572{width:100%;}}@media (max-width:1024px) and (orientation:portrait){section.jsx-73697572{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-73697572{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-73697572{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}.links.jsx-73697572,.tags.jsx-73697572{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.links.jsx-73697572 a.jsx-73697572{margin-left:10px;margin-right:10px;}.tags.jsx-73697572 span.jsx-73697572{margin-left:5px;margin-right:5px;}.thumbnail.jsx-73697572{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-73697572{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px){section.jsx-73697572{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-73697572{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-73697572{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}.thumbnail.jsx-73697572{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-73697572{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px) and (orientation:portrait){h1.jsx-73697572{font-size:4rem;}.clip.jsx-73697572{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xccGFnZXNcXHByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBQb0IsQUFHd0IsQUFPTyxBQVNLLEFBUVYsQUFXSixBQVFTLEFBSUwsQUFNUSxBQU9QLEFBSUQsQUFTQyxBQU1BLEFBSUosQUFRUSxBQU9QLEFBTU8sQUFTUCxBQUtPLEFBUUwsQUFnQjZCLEFBS2QsQUFJRSxBQUtiLEFBS0wsQUFNSyxBQU1ELEFBSUMsQUFNRCxBQUlILEFBTUEsQUFNVyxBQUtYLEFBTVEsQUFPSSxBQUlOLEFBS0QsQUFLTCxBQU1LLEFBT00sQUFLWCxBQU1RLEFBTVIsQUFNSyxBQU9ELEFBSUosU0FsUEUsQ0FnREYsQUE4RWIsQ0FqS2tCLEFBa0dKLEFBZUYsQUEwRVosQUFNQSxBQVdvQixBQTJCSyxBQWtCTCxBQVlLLEFBaUJ6QixHQTFORixBQWFzQixBQU10QixBQThGRSxBQVVBLENBaEJBLEFBVUEsQUFpR0EsQ0FoRG1CLEFBV1QsQUE4QkEsQ0EvR1osQUFpRXNCLENBdE5ULEFBb0NiLEFBZ0RZLEFBYUosQUFjaUIsR0FqRVosRUFyQ0UsQUFrR2YsQ0E5RWtDLEFBcUV6QixDQU5hLEFBZ0R0QixFQUlrQixDQTNEQSxDQXBGSCxBQXFNSCxBQTZDQSxFQWhKQyxDQXBEVSxDQTZLckIsQ0F6SmtCLENBb0psQixJQWhGRixFQXZCVyxDQVpJLEVBZGUsQ0FPOUIsS0FvQmUsRUE3Q2YsR0F0QzRCLEVBeU0xQixBQThCQSxVQXBIRixHQXNERSxBQTZDQSxJQW5Pc0IsQUF1QlAsQUFpQkksQUE4REksSUF5RUYsQUE2Q0EsR0E5TVAsQ0FyQ0QsQUFzRG9CLEVBNkJOLFNBOEhQLEFBNkNBLEVBeE50QixFQXRCcUIsRUF3TW5CLElBaE5lLE9BK05MLEFBOEJBLENBbkRXLEFBNkNBLElBeE12QixDQW9Ed0IsUUFhWixNQTJGVixBQTZDQSxDQWpOYyxHQTBFaEIsTUE1QkEsR0E3QmlCLEVBaEJqQixNQXdMRSxBQThCQSxDQTlPdUIsSUF2QkgsSUFRRyxXQThMdkIsQUE2Q0EsRUF0SG1CLGdCQTFDQSxDQW5FRCxJQTJGcEIsTUEzQzJCLFFBL0NULGdCQUNsQiwyQkFNdUIsRUF2QnZCLE1BUXNCLE9BcUhGLGdCQTFDRixFQTJDSixZQUNNLENBL0RDLENBb0JyQixnQkE0QzZDLHNDQXhHaEMsRUF5R0ksRUF4SGpCLE9BZ0JvQixNQXlHUCxXQUNNLENBekdBLFNBdUNBLE9BbUVKLENBekdILFNBdUNaLENBdENBLEVBeUdrQix3Q0FDbEIiLCJmaWxlIjoiRjpcXFByb2plY3RcXHN0aG9iaXMtZ2l0aHViLWlvXFxwYWdlc1xccHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBUlJPV19UWVBFLCBLRVlTX0NPREUsIHByb2plY3RzIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuY2xhc3MgUHJvamVjdHNQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWN0aXZlUHJvamVjdEluZGV4OiAwXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5hbmltYXRlUHJvamVjdERlc2NyaXB0aW9uKCk7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZVByb2plY3RUaHVtYm5haWwoKTtcclxuICAgICAgdGhpcy5hbmltYXRlTmF2aWdhdGlvbigpO1xyXG4gICAgfSwgODAwKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93bik7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGFuaW1lLnJlbW92ZShbXHJcbiAgICAgIHRoaXMucHJvamVjdERlc2NyaXB0aW9uLFxyXG4gICAgICB0aGlzLnByb2plY3RUaHVtYm5haWwsXHJcbiAgICAgIHRoaXMubmF2aWdhdGlvbixcclxuICAgICAgdGhpcy5uYXZpZ2F0aW9uQnV0dG9uc1xyXG4gICAgXSk7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93bik7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XHJcbiAgICBzd2l0Y2ggKGUud2hpY2gpIHtcclxuICAgICAgY2FzZSBLRVlTX0NPREUuVVA6XHJcbiAgICAgIGNhc2UgS0VZU19DT0RFLkxFRlQ6XHJcbiAgICAgICAgdGhpcy5wcmV2UHJvamVjdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEtFWVNfQ09ERS5ET1dOOlxyXG4gICAgICBjYXNlIEtFWVNfQ09ERS5SSUdIVDpcclxuICAgICAgICB0aGlzLm5leHRQcm9qZWN0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJldlByb2plY3QgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmFuaW1hdGVBcnJvd3NCdXR0b24oQVJST1dfVFlQRS5QUkVWKTtcclxuICAgIHRoaXMucHJldkJ1dHRvbi5ibHVyKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICBwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICBhY3RpdmVQcm9qZWN0SW5kZXg6XHJcbiAgICAgICAgICBwcmV2U3RhdGUuYWN0aXZlUHJvamVjdEluZGV4ICE9PSAwXHJcbiAgICAgICAgICAgID8gcHJldlN0YXRlLmFjdGl2ZVByb2plY3RJbmRleCAtIDFcclxuICAgICAgICAgICAgOiBwcm9qZWN0cy5sZW5ndGggLSAxXHJcbiAgICAgIH0pLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgYW5pbWUucmVtb3ZlKHRoaXMucHJvamVjdERlc2NyaXB0aW9uKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGVQcm9qZWN0RGVzY3JpcHRpb24oKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBuZXh0UHJvamVjdCA9ICgpID0+IHtcclxuICAgIHRoaXMuYW5pbWF0ZUFycm93c0J1dHRvbihBUlJPV19UWVBFLk5FWFQpO1xyXG4gICAgdGhpcy5uZXh0QnV0dG9uLmJsdXIoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgIGFjdGl2ZVByb2plY3RJbmRleDpcclxuICAgICAgICAgIHByZXZTdGF0ZS5hY3RpdmVQcm9qZWN0SW5kZXggIT09IHByb2plY3RzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgPyBwcmV2U3RhdGUuYWN0aXZlUHJvamVjdEluZGV4ICsgMVxyXG4gICAgICAgICAgICA6IDBcclxuICAgICAgfSksXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBhbmltZS5yZW1vdmUodGhpcy5wcm9qZWN0RGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZVByb2plY3REZXNjcmlwdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGFuaW1hdGVQcm9qZWN0VGh1bWJuYWlsID0gKCkgPT4ge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiB0aGlzLnByb2plY3RUaHVtYm5haWwsXHJcbiAgICAgIHRyYW5zbGF0ZVg6IFtcIi0xMDElXCIsIDBdLFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZU91dEN1YmljXCIsXHJcbiAgICAgIGR1cmF0aW9uOiAxNDAwXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBhbmltYXRlUHJvamVjdFRodW1ibmFpbEltYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBhY3RpdmVQcm9qZWN0SW5kZXggfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB0cmFuc2xhdGVYID0gYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiB0aGlzLnByb2plY3RUaHVtYm5haWwsXHJcbiAgICAgIHRyYW5zbGF0ZVg6IFtcIi0xMDElXCIsIDBdLFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZU91dEN1YmljXCIsXHJcbiAgICAgIGR1cmF0aW9uOiAxNDAwXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBhbmltYXRlUHJvamVjdERlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXNMYW5kc2NhcGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGlmIChpc0xhbmRzY2FwZSkge1xyXG4gICAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgdHJhbnNsYXRlWDogW1wiMTAwJVwiLCAwXSxcclxuICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgZWFzaW5nOiBcImVhc2VPdXRDdWJpY1wiLFxyXG4gICAgICAgIGRlbGF5OiAyMDAsXHJcbiAgICAgICAgZHVyYXRpb246IDEyMDBcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgdHJhbnNsYXRlWTogW1wiLTEwMCVcIiwgMF0sXHJcbiAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICAgIGVhc2luZzogXCJlYXNlT3V0Q3ViaWNcIixcclxuICAgICAgICBkZWxheTogMjAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiA4MDBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgYW5pbWF0ZU5hdmlnYXRpb24gPSAoKSA9PiB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IHRoaXMubmF2aWdhdGlvbixcclxuICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZU91dEN1YmljXCIsXHJcbiAgICAgIGRlbGF5OiA0MDAsXHJcbiAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBhbmltYXRlQXJyb3dzQnV0dG9uID0gdHlwZSA9PiB7XHJcbiAgICBjb25zdCBbdGFyZ2V0cywgdHJhbnNsYXRlWF0gPVxyXG4gICAgICB0eXBlID09PSBBUlJPV19UWVBFLlBSRVZcclxuICAgICAgICA/IFt0aGlzLnByZXZCdXR0b25TdmcsIFswLCAtNl1dXHJcbiAgICAgICAgOiBbdGhpcy5uZXh0QnV0dG9uU3ZnLCBbMCwgNl1dO1xyXG4gICAgYW5pbWUucmVtb3ZlKHRhcmdldHMpO1xyXG4gICAgbGV0IHRyYW5zbGF0ZSA9IGFuaW1lKHtcclxuICAgICAgdGFyZ2V0cyxcclxuICAgICAgdHJhbnNsYXRlWCxcclxuICAgICAgZWFzaW5nOiBcImVhc2VPdXRTaW5lXCIsXHJcbiAgICAgIGR1cmF0aW9uOiA4MDBcclxuICAgIH0pO1xyXG4gICAgdHJhbnNsYXRlLnJldmVyc2UoKTtcclxuICAgIHRyYW5zbGF0ZS5wbGF5KCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBhY3RpdmVQcm9qZWN0SW5kZXggfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwicHJvamVjdHNcIj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3REZXNjcmlwdGlvbiA9IGVsO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid3JhcFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDE+e3Byb2plY3RzW2FjdGl2ZVByb2plY3RJbmRleF0ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgIDxwPntwcm9qZWN0c1thY3RpdmVQcm9qZWN0SW5kZXhdLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvamVjdHNbYWN0aXZlUHJvamVjdEluZGV4XS5saW5rcy5tYXAoKGxpbmssIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bGluay50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9qZWN0c1thY3RpdmVQcm9qZWN0SW5kZXhdLnRhZ3MubWFwKHRhZyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dGFnfT57dGFnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0VGh1bWJuYWlsID0gZWw7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Avc3RhdGljL2ltYWdlcy8ke3Byb2plY3QubmFtZX0ucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2plY3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRpb24gPSBlbDtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3dzXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2QnV0dG9uID0gZWw7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByZXZQcm9qZWN0fVxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJwcmV2aW91cyBwcm9qZWN0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByZXZCdXR0b25TdmcgPSBlbDtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgNTEyXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMS43IDIzOWwxMzYtMTM2YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDIyLjYgMjIuNmM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwxMjcuOSAyNTZsOTYuNCA5Ni40YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDIwMS43IDQwOWMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTEzNi0xMzZjLTkuNS05LjQtOS41LTI0LjYtLjEtMzR6XCIgLz5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICByZWY9e2VsID0+ICh0aGlzLm5leHRCdXR0b24gPSBlbCl9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5uZXh0UHJvamVjdH1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibmV4dCBwcm9qZWN0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLm5leHRCdXR0b25TdmcgPSBlbDtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgNTEyXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiIC8+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICNwcm9qZWN0cyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNTBweCAwIDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLndyYXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgNTBweCAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA4cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGlua3MgYSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZjUzNTllO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5saW5rcyBhOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhZ3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50YWdzIHNwYW4ge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGFncyBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDElKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY2xpcDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXJyb3dzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogY2FsYyg1MCUgKyA1MHB4KTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hcnJvd3MgYnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hcnJvd3MgYnV0dG9uOmhvdmVyLFxyXG4gICAgICAgICAgLmFycm93cyBidXR0b246Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFycm93cyBidXR0b246aG92ZXIgcGF0aCxcclxuICAgICAgICAgIC5hcnJvd3MgYnV0dG9uOmZvY3VzIHBhdGgge1xyXG4gICAgICAgICAgICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hcnJvd3MgYnV0dG9uIHBhdGgge1xyXG4gICAgICAgICAgICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFycm93cyBidXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgICAgICAgLmNsaXAge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAgICNwcm9qZWN0cyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgICNwcm9qZWN0cyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMCAwIDA7XHJcbiAgICAgICAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC53cmFwIHtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGlua3MsXHJcbiAgICAgICAgICAgIC50YWdzIHtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpbmtzIGEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRhZ3Mgc3BhbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hcnJvd3Mge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgICAgb3JkZXI6IDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAud3JhcCB7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hcnJvd3Mge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgICAgb3JkZXI6IDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNQYWdlO1xyXG4iXX0= */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\pages\\projects.js */",
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
//# sourceMappingURL=projects.js.add1df1893858d27b4ce.hot-update.js.map