webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "F:\\Project\\sthobis-github-io\\pages\\projects.js";




var initialState = {
  prevProjectIndex: 0,
  currentProjectIndex: 0
};
var ACTION = {
  NEXT: "next",
  PREV: "prev"
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ACTION.NEXT:
      return {
        prevProjectIndex: state.currentProjectIndex,
        currentProjectIndex: state.currentProjectIndex !== _config__WEBPACK_IMPORTED_MODULE_4__["projects"].length - 1 ? state.currentProjectIndex + 1 : 0
      };

    case ACTION.PREV:
      return {
        prevProjectIndex: state.currentProjectIndex,
        currentProjectIndex: state.currentProjectIndex !== 0 ? state.currentProjectIndex - 1 : _config__WEBPACK_IMPORTED_MODULE_4__["projects"].length - 1
      };

    default:
      throw new Error("Undefined action: '".concat(action.type, "'"));
  }
};

var ProjectsPage = function ProjectsPage() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, initialState),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var projectDescriptionRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var projectThumbnailRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var navigationRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var navigationButtonsRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var prevButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var prevButtonSvgRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var nextButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var nextButtonSvgRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var timeout = setTimeout(function () {
      animateProjectDescription();
      animateProjectThumbnail();
      animateNavigation();
    }, 800);
    document.addEventListener("keydown", handleKeyDown);
    return function () {
      animejs__WEBPACK_IMPORTED_MODULE_2__["default"].remove([projectDescriptionRef.current, projectThumbnailRef.current, navigationRef.current, navigationButtonsRef.current]);
      clearTimeout(timeout);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    reAnimateProject();
  }, [state]);

  var handleKeyDown = function handleKeyDown(e) {
    switch (e.which) {
      case _config__WEBPACK_IMPORTED_MODULE_4__["KEYS_CODE"].UP:
      case _config__WEBPACK_IMPORTED_MODULE_4__["KEYS_CODE"].LEFT:
        prevProject();
        break;

      case _config__WEBPACK_IMPORTED_MODULE_4__["KEYS_CODE"].DOWN:
      case _config__WEBPACK_IMPORTED_MODULE_4__["KEYS_CODE"].RIGHT:
        nextProject();
        break;

      default:
        break;
    }
  };

  var prevProject = function prevProject() {
    animateArrowsButton(_config__WEBPACK_IMPORTED_MODULE_4__["ARROW_TYPE"].PREV);
    prevButtonRef.current.blur();
    dispatch({
      type: ACTION.PREV
    });
  };

  var nextProject = function nextProject() {
    animateArrowsButton(_config__WEBPACK_IMPORTED_MODULE_4__["ARROW_TYPE"].NEXT);
    nextButtonRef.current.blur();
    dispatch({
      type: ACTION.NEXT
    });
  };

  var reAnimateProject = function reAnimateProject() {
    animejs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(projectDescriptionRef.current);
    animejs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(projectThumbnailImageRef.current);
    animateProjectDescription();
    animateProjectThumbnailImage();
  };

  var animateProjectThumbnail = function animateProjectThumbnail() {
    Object(animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
      targets: projectThumbnailRef.current,
      translateX: ["-101%", 0],
      easing: "easeInOutQuad",
      duration: 1400
    });
  };

  var animateProjectThumbnailImage = function animateProjectThumbnailImage() {
    var translateY = "".concat(state.currentProjectIndex / _config__WEBPACK_IMPORTED_MODULE_4__["projects"].length * -100, "%");
    Object(animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
      targets: projectThumbnailImageRef.current,
      translateY: translateY,
      easing: "easeInOutQuad",
      duration: 1400
    });
  };

  var animateProjectDescription = function animateProjectDescription() {
    var isLandscape = window.innerWidth > window.innerHeight;

    if (isLandscape) {
      Object(animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
        targets: projectDescriptionRef.current,
        translateX: ["100%", 0],
        opacity: [0, 1],
        easing: "easeInOutQuad",
        delay: 200,
        duration: 1200
      });
    } else {
      Object(animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
        targets: projectDescriptionRef.current,
        translateY: ["-100%", 0],
        opacity: [0, 1],
        easing: "easeInOutQuad",
        delay: 300,
        duration: 900
      });
    }
  };

  var animateNavigation = function animateNavigation() {
    Object(animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
      targets: navigationRef.current,
      opacity: [0, 1],
      easing: "easeOutCubic",
      delay: 400,
      duration: 1000
    });
  };

  var animateArrowsButton = function animateArrowsButton(type) {
    var _ref = type === _config__WEBPACK_IMPORTED_MODULE_4__["ARROW_TYPE"].PREV ? [prevButtonSvgRef.current, [0, -6]] : [nextButtonSvgRef.current, [0, 6]],
        _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        targets = _ref2[0],
        translateX = _ref2[1];

    animejs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(targets);
    var translate = Object(animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
      targets: targets,
      translateX: translateX,
      easing: "easeOutSine",
      duration: 800
    });
    translate.reverse();
    translate.play();
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "projects",
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1642333085" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: projectDescriptionRef,
    className: "jsx-1642333085" + " " + "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_4__["projects"][state.currentProjectIndex].name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_4__["projects"][state.currentProjectIndex].description), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1642333085" + " " + "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_4__["projects"][state.currentProjectIndex].links.map(function (link, i) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      key: i,
      href: link.href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "jsx-1642333085",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, link.text);
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1642333085" + " " + "tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_4__["projects"][state.currentProjectIndex].tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      key: tag,
      className: "jsx-1642333085",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, tag);
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1642333085" + " " + "thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: projectThumbnailRef,
    className: "jsx-1642333085" + " " + "clip",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: projectThumbnailImageRef,
    className: "jsx-1642333085" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_4__["projects"].map(function (project, i) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      key: project.name,
      src: "/static/images/".concat(project.name, ".png"),
      alt: project.name,
      className: "jsx-1642333085",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    });
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: navigationRef,
    className: "jsx-1642333085" + " " + "arrows",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    ref: prevButtonRef,
    type: "button",
    onClick: prevProject,
    "aria-label": "previous project",
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
    ref: prevButtonSvgRef,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 256 512",
    height: "1em",
    width: "1em",
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    d: "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    ref: nextButtonRef,
    type: "button",
    onClick: nextProject,
    "aria-label": "next project",
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
    ref: nextButtonSvgRef,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 256 512",
    height: "1em",
    width: "1em",
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1642333085",
    __self: this
  }, "#projects.jsx-1642333085{width:100%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin:30px 0;}section.jsx-1642333085{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.text.jsx-1642333085{width:calc(50% - 50px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 50px 0 0;overflow:hidden;}.wrap.jsx-1642333085{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;width:100%;margin:0 0 50px 0;text-align:right;opacity:0;}h1.jsx-1642333085{margin:0;font-size:8rem;font-family:Raleway,sans-serif;text-transform:capitalize;line-height:1;}p.jsx-1642333085{margin:20px 0 0 0;}.links.jsx-1642333085{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:10px 0;}.links.jsx-1642333085 a.jsx-1642333085{margin:0 0 10px 20px;color:#fff;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed #f5359e;}.links.jsx-1642333085 a.jsx-1642333085:first-child{margin-left:0;}.tags.jsx-1642333085{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.6rem;}.tags.jsx-1642333085 span.jsx-1642333085{line-height:1;margin:0 0 5px 10px;font-style:italic;}.tags.jsx-1642333085 span.jsx-1642333085:first-child{margin-left:0;}.thumbnail.jsx-1642333085{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}.clip.jsx-1642333085{position:relative;width:80%;overflow:hidden;-webkit-transform:translateX(-101%);-ms-transform:translateX(-101%);transform:translateX(-101%);}.clip.jsx-1642333085::before{content:\"\";display:block;padding-bottom:100%;}.container.jsx-1642333085{position:absolute;top:0;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}img.jsx-1642333085{width:100%;height:auto;}.arrows.jsx-1642333085{position:absolute;right:calc(50% + 50px);bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;}.arrows.jsx-1642333085 button.jsx-1642333085{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px;border:none;border-radius:2px;background-color:rgba(255,255,255,0.15);cursor:pointer;color:#fff;font-size:1.8rem;outline:none;-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-1642333085 button.jsx-1642333085:hover,.arrows.jsx-1642333085 button.jsx-1642333085:focus{background-color:rgba(255,255,255,0.3);}.arrows.jsx-1642333085 button.jsx-1642333085:hover path.jsx-1642333085,.arrows.jsx-1642333085 button.jsx-1642333085:focus path.jsx-1642333085{fill:rgba(255,255,255,1);}.arrows.jsx-1642333085 button.jsx-1642333085 path.jsx-1642333085{fill:rgba(255,255,255,0.7);-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-1642333085 button.jsx-1642333085:last-child{margin-left:10px;}@media (max-width:1400px){.clip.jsx-1642333085{width:75%;}}@media (max-width:1400px) and (orientation:landscape){h1.jsx-1642333085{font-size:5vw;}}@media (max-width:1400px) and (orientation:portrait){#projects.jsx-1642333085{margin:30px 0;}h1.jsx-1642333085{font-size:5rem;}}@media (max-width:1024px){.clip.jsx-1642333085{width:100%;}}@media (max-width:1024px) and (orientation:landscape){.clip.jsx-1642333085{width:100%;}}@media (max-width:1024px) and (orientation:portrait){section.jsx-1642333085{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-1642333085{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-1642333085{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}.links.jsx-1642333085,.tags.jsx-1642333085{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.links.jsx-1642333085 a.jsx-1642333085{margin-left:10px;margin-right:10px;}.tags.jsx-1642333085 span.jsx-1642333085{margin-left:5px;margin-right:5px;}.thumbnail.jsx-1642333085{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-1642333085{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px){section.jsx-1642333085{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-1642333085{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-1642333085{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}h1.jsx-1642333085{font-size:4rem;}.thumbnail.jsx-1642333085{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-1642333085{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px) and (orientation:portrait){.clip.jsx-1642333085{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xccGFnZXNcXHByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVRa0IsQUFHc0IsQUFRTyxBQVNLLEFBUVYsQUFXSixBQVFTLEFBSUwsQUFRUSxBQU9QLEFBSUQsQUFTQyxBQU1BLEFBSUosQUFRUSxBQU9QLEFBTU8sQUFTUCxBQUtPLEFBUUwsQUFnQjZCLEFBS2QsQUFJRSxBQUtiLEFBS0wsQUFNSSxBQU1BLEFBSUMsQUFNSixBQU1BLEFBTVcsQUFLWCxBQU1RLEFBT0ksQUFJTixBQUtELEFBS0wsQUFNSyxBQU9NLEFBS1gsQUFNUSxBQU1KLEFBSUosQUFNSyxBQU9MLFNBaFBFLENBa0RGLEFBOEViLENBcEtrQixBQXFHSixBQWVGLEFBc0VaLEFBTUEsQUFXb0IsQUEyQkssQUFrQkwsQUFnQkssQUFhekIsR0F0TkYsQUFhc0IsQUFNdEIsQUF3RkUsQUFNQSxDQUlBLEFBZ0ZBLENBbkNtQixBQVdULEFBa0NBLENBL0daLEFBNkRzQixDQXBOVCxBQW9DYixBQWtEWSxBQWFKLEFBY2lCLEdBakVaLEVBdkNFLEFBb0dmLENBaEZrQyxBQXVFekIsQ0FOYSxBQWdEdEIsRUFJa0IsQ0EzREEsQ0F0RkgsQUFtTUgsQUE2Q0EsRUE1SUMsQ0FwRFUsQ0F5S3JCLENBckprQixDQWdKbEIsSUE1RUYsRUF2QlcsQ0FaSSxFQWRlLENBTzlCLEtBb0JlLEVBN0NmLEdBeEM0QixFQXVNMUIsQUFrQ0EsVUFwSEYsR0FrREUsQUE2Q0EsSUFqT3NCLEFBdUJQLEFBbUJJLEFBOERJLElBcUVGLEFBNkNBLEdBNU1QLENBdENELEFBeURvQixFQTZCTixTQTBIUCxBQTZDQSxFQXROdEIsRUF0QnFCLEVBc01uQixJQTlNZSxPQTZOTCxBQWtDQSxDQXZEVyxBQTZDQSxJQXBNdkIsQ0FvRHdCLFFBYVosTUF1RlYsQUE2Q0EsQ0EvTXlCLEdBNEUzQixNQTVCQSxHQTdCaUIsUUFvS2YsQUFrQ0EsQ0FoUHVCLElBeEJILElBU0csV0E0THZCLEFBNkNBLEVBbEhtQixnQkExQ0EsQ0FyRUQsSUE2RnBCLE1BM0MyQixRQWpEVCxnQkFDbEIsSUE2QnFCLHVCQXZCRSxFQXhCUCxNQVNNLE9BdUhGLENBL0hwQixlQXFGa0IsRUEyQ0osWUFDTSxDQS9EQyxDQW9CckIsZ0JBNEM2QyxPQW5GN0IsY0FDaEIsaUJBeEJhLEVBMkdJLEVBMUhqQixPQWdCb0IsTUEyR1AsV0FDTSxDQTNHQSxTQXlDQSxPQW1FSixDQTNHSCxTQXlDWixDQXhDQSxFQTJHa0Isd0NBQ2xCIiwiZmlsZSI6IkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xccGFnZXNcXHByb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBUlJPV19UWVBFLCBLRVlTX0NPREUsIHByb2plY3RzIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHByZXZQcm9qZWN0SW5kZXg6IDAsXHJcbiAgY3VycmVudFByb2plY3RJbmRleDogMFxyXG59O1xyXG5cclxuY29uc3QgQUNUSU9OID0ge1xyXG4gIE5FWFQ6IFwibmV4dFwiLFxyXG4gIFBSRVY6IFwicHJldlwiXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBQ1RJT04uTkVYVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcmV2UHJvamVjdEluZGV4OiBzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4LFxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXg6IHN0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXggIT09IHByb2plY3RzLmxlbmd0aCAtIDFcclxuICAgICAgICAgID8gc3RhdGUuY3VycmVudFByb2plY3RJbmRleCArIDFcclxuICAgICAgICAgIDogMFxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFDVElPTi5QUkVWOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByZXZQcm9qZWN0SW5kZXg6IHN0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXgsXHJcbiAgICAgICAgY3VycmVudFByb2plY3RJbmRleDogc3RhdGUuY3VycmVudFByb2plY3RJbmRleCAhPT0gMFxyXG4gICAgICAgICAgPyBzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4IC0gMVxyXG4gICAgICAgICAgOiBwcm9qZWN0cy5sZW5ndGggLSAxXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5kZWZpbmVkIGFjdGlvbjogJyR7YWN0aW9uLnR5cGV9J2ApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgUHJvamVjdHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwcm9qZWN0VGh1bWJuYWlsUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbmF2aWdhdGlvblJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG5hdmlnYXRpb25CdXR0b25zUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcHJldkJ1dHRvblJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHByZXZCdXR0b25TdmdSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBuZXh0QnV0dG9uUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbmV4dEJ1dHRvblN2Z1JlZiA9IHVzZVJlZigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBhbmltYXRlUHJvamVjdERlc2NyaXB0aW9uKCk7XHJcbiAgICAgIGFuaW1hdGVQcm9qZWN0VGh1bWJuYWlsKCk7XHJcbiAgICAgIGFuaW1hdGVOYXZpZ2F0aW9uKCk7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgYW5pbWUucmVtb3ZlKFtcclxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb25SZWYuY3VycmVudCxcclxuICAgICAgICBwcm9qZWN0VGh1bWJuYWlsUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgbmF2aWdhdGlvblJlZi5jdXJyZW50LFxyXG4gICAgICAgIG5hdmlnYXRpb25CdXR0b25zUmVmLmN1cnJlbnRcclxuICAgICAgXSk7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVBbmltYXRlUHJvamVjdCgpO1xyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gZSA9PiB7XHJcbiAgICBzd2l0Y2ggKGUud2hpY2gpIHtcclxuICAgICAgY2FzZSBLRVlTX0NPREUuVVA6XHJcbiAgICAgIGNhc2UgS0VZU19DT0RFLkxFRlQ6XHJcbiAgICAgICAgcHJldlByb2plY3QoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBLRVlTX0NPREUuRE9XTjpcclxuICAgICAgY2FzZSBLRVlTX0NPREUuUklHSFQ6XHJcbiAgICAgICAgbmV4dFByb2plY3QoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2UHJvamVjdCA9ICgpID0+IHtcclxuICAgIGFuaW1hdGVBcnJvd3NCdXR0b24oQVJST1dfVFlQRS5QUkVWKTtcclxuICAgIHByZXZCdXR0b25SZWYuY3VycmVudC5ibHVyKCk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTi5QUkVWIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5leHRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgYW5pbWF0ZUFycm93c0J1dHRvbihBUlJPV19UWVBFLk5FWFQpO1xyXG4gICAgbmV4dEJ1dHRvblJlZi5jdXJyZW50LmJsdXIoKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLk5FWFQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVBbmltYXRlUHJvamVjdCA9ICgpID0+IHtcclxuICAgIGFuaW1lLnJlbW92ZShwcm9qZWN0RGVzY3JpcHRpb25SZWYuY3VycmVudCk7XHJcbiAgICBhbmltZS5yZW1vdmUocHJvamVjdFRodW1ibmFpbEltYWdlUmVmLmN1cnJlbnQpO1xyXG4gICAgYW5pbWF0ZVByb2plY3REZXNjcmlwdGlvbigpO1xyXG4gICAgYW5pbWF0ZVByb2plY3RUaHVtYm5haWxJbWFnZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVQcm9qZWN0VGh1bWJuYWlsID0gKCkgPT4ge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiBwcm9qZWN0VGh1bWJuYWlsUmVmLmN1cnJlbnQsXHJcbiAgICAgIHRyYW5zbGF0ZVg6IFtcIi0xMDElXCIsIDBdLFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZUluT3V0UXVhZFwiLFxyXG4gICAgICBkdXJhdGlvbjogMTQwMFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZVByb2plY3RUaHVtYm5haWxJbWFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSBgJHsoc3RhdGUuY3VycmVudFByb2plY3RJbmRleCAvIHByb2plY3RzLmxlbmd0aCkgKiAtMTAwfSVgO1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiBwcm9qZWN0VGh1bWJuYWlsSW1hZ2VSZWYuY3VycmVudCxcclxuICAgICAgdHJhbnNsYXRlWSxcclxuICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1YWRcIixcclxuICAgICAgZHVyYXRpb246IDE0MDBcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVQcm9qZWN0RGVzY3JpcHRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpc0xhbmRzY2FwZSA9IHdpbmRvdy5pbm5lcldpZHRoID4gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgaWYgKGlzTGFuZHNjYXBlKSB7XHJcbiAgICAgIGFuaW1lKHtcclxuICAgICAgICB0YXJnZXRzOiBwcm9qZWN0RGVzY3JpcHRpb25SZWYuY3VycmVudCxcclxuICAgICAgICB0cmFuc2xhdGVYOiBbXCIxMDAlXCIsIDBdLFxyXG4gICAgICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgICAgICBlYXNpbmc6IFwiZWFzZUluT3V0UXVhZFwiLFxyXG4gICAgICAgIGRlbGF5OiAyMDAsXHJcbiAgICAgICAgZHVyYXRpb246IDEyMDBcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogcHJvamVjdERlc2NyaXB0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgdHJhbnNsYXRlWTogW1wiLTEwMCVcIiwgMF0sXHJcbiAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCIsXHJcbiAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICBkdXJhdGlvbjogOTAwXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiBuYXZpZ2F0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgICAgZWFzaW5nOiBcImVhc2VPdXRDdWJpY1wiLFxyXG4gICAgICBkZWxheTogNDAwLFxyXG4gICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZUFycm93c0J1dHRvbiA9IHR5cGUgPT4ge1xyXG4gICAgY29uc3QgW3RhcmdldHMsIHRyYW5zbGF0ZVhdID1cclxuICAgICAgdHlwZSA9PT0gQVJST1dfVFlQRS5QUkVWXHJcbiAgICAgICAgPyBbcHJldkJ1dHRvblN2Z1JlZi5jdXJyZW50LCBbMCwgLTZdXVxyXG4gICAgICAgIDogW25leHRCdXR0b25TdmdSZWYuY3VycmVudCwgWzAsIDZdXTtcclxuICAgIGFuaW1lLnJlbW92ZSh0YXJnZXRzKTtcclxuICAgIGNvbnN0IHRyYW5zbGF0ZSA9IGFuaW1lKHtcclxuICAgICAgdGFyZ2V0cyxcclxuICAgICAgdHJhbnNsYXRlWCxcclxuICAgICAgZWFzaW5nOiBcImVhc2VPdXRTaW5lXCIsXHJcbiAgICAgIGR1cmF0aW9uOiA4MDBcclxuICAgIH0pO1xyXG4gICAgdHJhbnNsYXRlLnJldmVyc2UoKTtcclxuICAgIHRyYW5zbGF0ZS5wbGF5KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPXtwcm9qZWN0RGVzY3JpcHRpb25SZWZ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndyYXBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aDE+e3Byb2plY3RzW3N0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXhdLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgPHA+e3Byb2plY3RzW3N0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXhdLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0c1tzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4XS5saW5rcy5tYXAoKGxpbmssIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2xpbmsudGV4dH1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0c1tzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4XS50YWdzLm1hcCh0YWcgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt0YWd9Pnt0YWd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJlZj17cHJvamVjdFRodW1ibmFpbFJlZn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xpcFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICByZWY9e3Byb2plY3RUaHVtYm5haWxJbWFnZVJlZn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgc3JjPXtgL3N0YXRpYy9pbWFnZXMvJHtwcm9qZWN0Lm5hbWV9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICByZWY9e25hdmlnYXRpb25SZWZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvd3NcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgcmVmPXtwcmV2QnV0dG9uUmVmfVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17cHJldlByb2plY3R9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJwcmV2aW91cyBwcm9qZWN0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHJlZj17cHJldkJ1dHRvblN2Z1JlZn1cclxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMFwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgNTEyXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzEuNyAyMzlsMTM2LTEzNmM5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwyMi42IDIyLjZjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMTI3LjkgMjU2bDk2LjQgOTYuNGM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwyMDEuNyA0MDljLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0xMzYtMTM2Yy05LjUtOS40LTkuNS0yNC42LS4xLTM0elwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHJlZj17bmV4dEJ1dHRvblJlZn1cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e25leHRQcm9qZWN0fVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibmV4dCBwcm9qZWN0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHJlZj17bmV4dEJ1dHRvblN2Z1JlZn1cclxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMFwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgNTEyXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIlxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMWVtXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjI0LjMgMjczbC0xMzYgMTM2Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMjIuNi0yMi42Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOWw5Ni40LTk2LjQtOTYuNC05Ni40Yy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUw1NC4zIDEwM2M5LjQtOS40IDI0LjYtOS40IDMzLjkgMGwxMzYgMTM2YzkuNSA5LjQgOS41IDI0LjYuMSAzNHpcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAjcHJvamVjdHMge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDAgNTBweCAwIDA7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndyYXAge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgNTBweCAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA4cmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFJhbGV3YXksIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHggMCAwIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlua3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlua3MgYSB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDIwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2Y1MzU5ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5rcyBhOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhZ3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhZ3Mgc3BhbiB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhZ3Mgc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDElKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jbGlwOjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFycm93cyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogY2FsYyg1MCUgKyA1MHB4KTtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFycm93cyBidXR0b24ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJyb3dzIGJ1dHRvbjpob3ZlcixcclxuICAgICAgICAuYXJyb3dzIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJyb3dzIGJ1dHRvbjpob3ZlciBwYXRoLFxyXG4gICAgICAgIC5hcnJvd3MgYnV0dG9uOmZvY3VzIHBhdGgge1xyXG4gICAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnJvd3MgYnV0dG9uIHBhdGgge1xyXG4gICAgICAgICAgZmlsbDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnJvd3MgYnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1dnc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgI3Byb2plY3RzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcclxuICAgICAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLndyYXAge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxpbmtzLFxyXG4gICAgICAgICAgLnRhZ3Mge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGlua3MgYSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRhZ3Mgc3BhbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hcnJvd3Mge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICBvcmRlcjogMztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAud3JhcCB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXJyb3dzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgb3JkZXI6IDM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNQYWdlO1xyXG4iXX0= */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\pages\\projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectsPage);

/***/ })

})
//# sourceMappingURL=projects.js.dee6c34b60ea8c000847.hot-update.js.map