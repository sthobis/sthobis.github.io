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
  var projectThumbnailImageRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
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
    console.log("reanimate");
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
    console.log("animateProjectDescription");
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
        target = _ref2[0],
        translateX = _ref2[1];

    animejs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(target);
    var translate = Object(animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
      target: target,
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
      lineNumber: 178
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1642333085" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: projectDescriptionRef,
    className: "jsx-1642333085" + " " + "wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_4__["projects"][state.currentProjectIndex].name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_4__["projects"][state.currentProjectIndex].description), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1642333085" + " " + "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
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
        lineNumber: 189
      },
      __self: this
    }, link.text);
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1642333085" + " " + "tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, _config__WEBPACK_IMPORTED_MODULE_4__["projects"][state.currentProjectIndex].tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      key: tag,
      className: "jsx-1642333085",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, tag);
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1642333085" + " " + "thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: projectThumbnailRef,
    className: "jsx-1642333085" + " " + "clip",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: projectThumbnailImageRef,
    className: "jsx-1642333085" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
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
        lineNumber: 216
      },
      __self: this
    });
  })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: navigationRef,
    className: "jsx-1642333085" + " " + "arrows",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
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
      lineNumber: 229
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
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    d: "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
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
      lineNumber: 247
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
      lineNumber: 253
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
    className: "jsx-1642333085",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1642333085",
    __self: this
  }, "#projects.jsx-1642333085{width:100%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin:30px 0;}section.jsx-1642333085{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.text.jsx-1642333085{width:calc(50% - 50px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 50px 0 0;overflow:hidden;}.wrap.jsx-1642333085{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;width:100%;margin:0 0 50px 0;text-align:right;opacity:0;}h1.jsx-1642333085{margin:0;font-size:8rem;font-family:Raleway,sans-serif;text-transform:capitalize;line-height:1;}p.jsx-1642333085{margin:20px 0 0 0;}.links.jsx-1642333085{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:10px 0;}.links.jsx-1642333085 a.jsx-1642333085{margin:0 0 10px 20px;color:#fff;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed #f5359e;}.links.jsx-1642333085 a.jsx-1642333085:first-child{margin-left:0;}.tags.jsx-1642333085{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.6rem;}.tags.jsx-1642333085 span.jsx-1642333085{line-height:1;margin:0 0 5px 10px;font-style:italic;}.tags.jsx-1642333085 span.jsx-1642333085:first-child{margin-left:0;}.thumbnail.jsx-1642333085{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}.clip.jsx-1642333085{position:relative;width:80%;overflow:hidden;-webkit-transform:translateX(-101%);-ms-transform:translateX(-101%);transform:translateX(-101%);}.clip.jsx-1642333085::before{content:\"\";display:block;padding-bottom:100%;}.container.jsx-1642333085{position:absolute;top:0;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}img.jsx-1642333085{width:100%;height:auto;}.arrows.jsx-1642333085{position:absolute;right:calc(50% + 50px);bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;}.arrows.jsx-1642333085 button.jsx-1642333085{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px;border:none;border-radius:2px;background-color:rgba(255,255,255,0.15);cursor:pointer;color:#fff;font-size:1.8rem;outline:none;-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-1642333085 button.jsx-1642333085:hover,.arrows.jsx-1642333085 button.jsx-1642333085:focus{background-color:rgba(255,255,255,0.3);}.arrows.jsx-1642333085 button.jsx-1642333085:hover path.jsx-1642333085,.arrows.jsx-1642333085 button.jsx-1642333085:focus path.jsx-1642333085{fill:rgba(255,255,255,1);}.arrows.jsx-1642333085 button.jsx-1642333085 path.jsx-1642333085{fill:rgba(255,255,255,0.7);-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-1642333085 button.jsx-1642333085:last-child{margin-left:10px;}@media (max-width:1400px){.clip.jsx-1642333085{width:75%;}}@media (max-width:1400px) and (orientation:landscape){h1.jsx-1642333085{font-size:5vw;}}@media (max-width:1400px) and (orientation:portrait){#projects.jsx-1642333085{margin:30px 0;}h1.jsx-1642333085{font-size:5rem;}}@media (max-width:1024px){.clip.jsx-1642333085{width:100%;}}@media (max-width:1024px) and (orientation:landscape){.clip.jsx-1642333085{width:100%;}}@media (max-width:1024px) and (orientation:portrait){section.jsx-1642333085{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-1642333085{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-1642333085{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}.links.jsx-1642333085,.tags.jsx-1642333085{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.links.jsx-1642333085 a.jsx-1642333085{margin-left:10px;margin-right:10px;}.tags.jsx-1642333085 span.jsx-1642333085{margin-left:5px;margin-right:5px;}.thumbnail.jsx-1642333085{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-1642333085{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px){section.jsx-1642333085{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-1642333085{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-1642333085{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}h1.jsx-1642333085{font-size:4rem;}.thumbnail.jsx-1642333085{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-1642333085{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px) and (orientation:portrait){.clip.jsx-1642333085{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xccGFnZXNcXHByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBRa0IsQUFHc0IsQUFRTyxBQVNLLEFBUVYsQUFXSixBQVFTLEFBSUwsQUFRUSxBQU9QLEFBSUQsQUFTQyxBQU1BLEFBSUosQUFRUSxBQU9QLEFBTU8sQUFTUCxBQUtPLEFBUUwsQUFnQjZCLEFBS2QsQUFJRSxBQUtiLEFBS0wsQUFNSSxBQU1BLEFBSUMsQUFNSixBQU1BLEFBTVcsQUFLWCxBQU1RLEFBT0ksQUFJTixBQUtELEFBS0wsQUFNSyxBQU9NLEFBS1gsQUFNUSxBQU1KLEFBSUosQUFNSyxBQU9MLFNBaFBFLENBa0RGLEFBOEViLENBcEtrQixBQXFHSixBQWVGLEFBc0VaLEFBTUEsQUFXb0IsQUEyQkssQUFrQkwsQUFnQkssQUFhekIsR0F0TkYsQUFhc0IsQUFNdEIsQUF3RkUsQUFNQSxDQUlBLEFBZ0ZBLENBbkNtQixBQVdULEFBa0NBLENBL0daLEFBNkRzQixDQXBOVCxBQW9DYixBQWtEWSxBQWFKLEFBY2lCLEdBakVaLEVBdkNFLEFBb0dmLENBaEZrQyxBQXVFekIsQ0FOYSxBQWdEdEIsRUFJa0IsQ0EzREEsQ0F0RkgsQUFtTUgsQUE2Q0EsRUE1SUMsQ0FwRFUsQ0F5S3JCLENBckprQixDQWdKbEIsSUE1RUYsRUF2QlcsQ0FaSSxFQWRlLENBTzlCLEtBb0JlLEVBN0NmLEdBeEM0QixFQXVNMUIsQUFrQ0EsVUFwSEYsR0FrREUsQUE2Q0EsSUFqT3NCLEFBdUJQLEFBbUJJLEFBOERJLElBcUVGLEFBNkNBLEdBNU1QLENBdENELEFBeURvQixFQTZCTixTQTBIUCxBQTZDQSxFQXROdEIsRUF0QnFCLEVBc01uQixJQTlNZSxPQTZOTCxBQWtDQSxDQXZEVyxBQTZDQSxJQXBNdkIsQ0FvRHdCLFFBYVosTUF1RlYsQUE2Q0EsQ0EvTXlCLEdBNEUzQixNQTVCQSxHQTdCaUIsUUFvS2YsQUFrQ0EsQ0FoUHVCLElBeEJILElBU0csV0E0THZCLEFBNkNBLEVBbEhtQixnQkExQ0EsQ0FyRUQsSUE2RnBCLE1BM0MyQixRQWpEVCxnQkFDbEIsSUE2QnFCLHVCQXZCRSxFQXhCUCxNQVNNLE9BdUhGLENBL0hwQixlQXFGa0IsRUEyQ0osWUFDTSxDQS9EQyxDQW9CckIsZ0JBNEM2QyxPQW5GN0IsY0FDaEIsaUJBeEJhLEVBMkdJLEVBMUhqQixPQWdCb0IsTUEyR1AsV0FDTSxDQTNHQSxTQXlDQSxPQW1FSixDQTNHSCxTQXlDWixDQXhDQSxFQTJHa0Isd0NBQ2xCIiwiZmlsZSI6IkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xccGFnZXNcXHByb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBUlJPV19UWVBFLCBLRVlTX0NPREUsIHByb2plY3RzIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHByZXZQcm9qZWN0SW5kZXg6IDAsXHJcbiAgY3VycmVudFByb2plY3RJbmRleDogMFxyXG59O1xyXG5cclxuY29uc3QgQUNUSU9OID0ge1xyXG4gIE5FWFQ6IFwibmV4dFwiLFxyXG4gIFBSRVY6IFwicHJldlwiXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBQ1RJT04uTkVYVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcmV2UHJvamVjdEluZGV4OiBzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4LFxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXg6IHN0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXggIT09IHByb2plY3RzLmxlbmd0aCAtIDFcclxuICAgICAgICAgID8gc3RhdGUuY3VycmVudFByb2plY3RJbmRleCArIDFcclxuICAgICAgICAgIDogMFxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFDVElPTi5QUkVWOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByZXZQcm9qZWN0SW5kZXg6IHN0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXgsXHJcbiAgICAgICAgY3VycmVudFByb2plY3RJbmRleDogc3RhdGUuY3VycmVudFByb2plY3RJbmRleCAhPT0gMFxyXG4gICAgICAgICAgPyBzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4IC0gMVxyXG4gICAgICAgICAgOiBwcm9qZWN0cy5sZW5ndGggLSAxXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5kZWZpbmVkIGFjdGlvbjogJyR7YWN0aW9uLnR5cGV9J2ApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgUHJvamVjdHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwcm9qZWN0VGh1bWJuYWlsUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcHJvamVjdFRodW1ibmFpbEltYWdlUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbmF2aWdhdGlvblJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG5hdmlnYXRpb25CdXR0b25zUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcHJldkJ1dHRvblJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHByZXZCdXR0b25TdmdSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBuZXh0QnV0dG9uUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbmV4dEJ1dHRvblN2Z1JlZiA9IHVzZVJlZigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBhbmltYXRlUHJvamVjdERlc2NyaXB0aW9uKCk7XHJcbiAgICAgIGFuaW1hdGVQcm9qZWN0VGh1bWJuYWlsKCk7XHJcbiAgICAgIGFuaW1hdGVOYXZpZ2F0aW9uKCk7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgYW5pbWUucmVtb3ZlKFtcclxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb25SZWYuY3VycmVudCxcclxuICAgICAgICBwcm9qZWN0VGh1bWJuYWlsUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgbmF2aWdhdGlvblJlZi5jdXJyZW50LFxyXG4gICAgICAgIG5hdmlnYXRpb25CdXR0b25zUmVmLmN1cnJlbnRcclxuICAgICAgXSk7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJyZWFuaW1hdGVcIik7XHJcbiAgICByZUFuaW1hdGVQcm9qZWN0KCk7XHJcbiAgfSwgW3N0YXRlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSBlID0+IHtcclxuICAgIHN3aXRjaCAoZS53aGljaCkge1xyXG4gICAgICBjYXNlIEtFWVNfQ09ERS5VUDpcclxuICAgICAgY2FzZSBLRVlTX0NPREUuTEVGVDpcclxuICAgICAgICBwcmV2UHJvamVjdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEtFWVNfQ09ERS5ET1dOOlxyXG4gICAgICBjYXNlIEtFWVNfQ09ERS5SSUdIVDpcclxuICAgICAgICBuZXh0UHJvamVjdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXZQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgYW5pbWF0ZUFycm93c0J1dHRvbihBUlJPV19UWVBFLlBSRVYpO1xyXG4gICAgcHJldkJ1dHRvblJlZi5jdXJyZW50LmJsdXIoKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLlBSRVYgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmV4dFByb2plY3QgPSAoKSA9PiB7XHJcbiAgICBhbmltYXRlQXJyb3dzQnV0dG9uKEFSUk9XX1RZUEUuTkVYVCk7XHJcbiAgICBuZXh0QnV0dG9uUmVmLmN1cnJlbnQuYmx1cigpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT04uTkVYVCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZUFuaW1hdGVQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgYW5pbWUucmVtb3ZlKHByb2plY3REZXNjcmlwdGlvblJlZi5jdXJyZW50KTtcclxuICAgIGFuaW1lLnJlbW92ZShwcm9qZWN0VGh1bWJuYWlsSW1hZ2VSZWYuY3VycmVudCk7XHJcbiAgICBhbmltYXRlUHJvamVjdERlc2NyaXB0aW9uKCk7XHJcbiAgICBhbmltYXRlUHJvamVjdFRodW1ibmFpbEltYWdlKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZVByb2plY3RUaHVtYm5haWwgPSAoKSA9PiB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IHByb2plY3RUaHVtYm5haWxSZWYuY3VycmVudCxcclxuICAgICAgdHJhbnNsYXRlWDogW1wiLTEwMSVcIiwgMF0sXHJcbiAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCIsXHJcbiAgICAgIGR1cmF0aW9uOiAxNDAwXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhbmltYXRlUHJvamVjdFRodW1ibmFpbEltYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdHJhbnNsYXRlWSA9IGAkeyhzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4IC8gcHJvamVjdHMubGVuZ3RoKSAqIC0xMDB9JWA7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IHByb2plY3RUaHVtYm5haWxJbWFnZVJlZi5jdXJyZW50LFxyXG4gICAgICB0cmFuc2xhdGVZLFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZUluT3V0UXVhZFwiLFxyXG4gICAgICBkdXJhdGlvbjogMTQwMFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZVByb2plY3REZXNjcmlwdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiYW5pbWF0ZVByb2plY3REZXNjcmlwdGlvblwiKVxyXG4gICAgY29uc3QgaXNMYW5kc2NhcGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGlmIChpc0xhbmRzY2FwZSkge1xyXG4gICAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogcHJvamVjdERlc2NyaXB0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgdHJhbnNsYXRlWDogW1wiMTAwJVwiLCAwXSxcclxuICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1YWRcIixcclxuICAgICAgICBkZWxheTogMjAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxMjAwXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYW5pbWUoe1xyXG4gICAgICAgIHRhcmdldHM6IHByb2plY3REZXNjcmlwdGlvblJlZi5jdXJyZW50LFxyXG4gICAgICAgIHRyYW5zbGF0ZVk6IFtcIi0xMDAlXCIsIDBdLFxyXG4gICAgICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgICAgICBlYXNpbmc6IFwiZWFzZUluT3V0UXVhZFwiLFxyXG4gICAgICAgIGRlbGF5OiAzMDAsXHJcbiAgICAgICAgZHVyYXRpb246IDkwMFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBhbmltYXRlTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgIGFuaW1lKHtcclxuICAgICAgdGFyZ2V0czogbmF2aWdhdGlvblJlZi5jdXJyZW50LFxyXG4gICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgIGVhc2luZzogXCJlYXNlT3V0Q3ViaWNcIixcclxuICAgICAgZGVsYXk6IDQwMCxcclxuICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVBcnJvd3NCdXR0b24gPSB0eXBlID0+IHtcclxuICAgIGNvbnN0IFt0YXJnZXQsIHRyYW5zbGF0ZVhdID1cclxuICAgICAgdHlwZSA9PT0gQVJST1dfVFlQRS5QUkVWXHJcbiAgICAgICAgPyBbcHJldkJ1dHRvblN2Z1JlZi5jdXJyZW50LCBbMCwgLTZdXVxyXG4gICAgICAgIDogW25leHRCdXR0b25TdmdSZWYuY3VycmVudCwgWzAsIDZdXTtcclxuICAgIGFuaW1lLnJlbW92ZSh0YXJnZXQpO1xyXG4gICAgbGV0IHRyYW5zbGF0ZSA9IGFuaW1lKHtcclxuICAgICAgdGFyZ2V0LFxyXG4gICAgICB0cmFuc2xhdGVYLFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZU91dFNpbmVcIixcclxuICAgICAgZHVyYXRpb246IDgwMFxyXG4gICAgfSk7XHJcbiAgICB0cmFuc2xhdGUucmV2ZXJzZSgpO1xyXG4gICAgdHJhbnNsYXRlLnBsYXkoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInByb2plY3RzXCI+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e3Byb2plY3REZXNjcmlwdGlvblJlZn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid3JhcFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoMT57cHJvamVjdHNbc3RhdGUuY3VycmVudFByb2plY3RJbmRleF0ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8cD57cHJvamVjdHNbc3RhdGUuY3VycmVudFByb2plY3RJbmRleF0uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAge3Byb2plY3RzW3N0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXhdLmxpbmtzLm1hcCgobGluaywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bGluay50ZXh0fVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XHJcbiAgICAgICAgICAgICAge3Byb2plY3RzW3N0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXhdLnRhZ3MubWFwKHRhZyA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3RhZ30+e3RhZ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHVtYm5haWxcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPXtwcm9qZWN0VGh1bWJuYWlsUmVmfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjbGlwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHJlZj17cHJvamVjdFRodW1ibmFpbEltYWdlUmVmfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2Avc3RhdGljL2ltYWdlcy8ke3Byb2plY3QubmFtZX0ucG5nYH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHJlZj17bmF2aWdhdGlvblJlZn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFycm93c1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICByZWY9e3ByZXZCdXR0b25SZWZ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcmV2UHJvamVjdH1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInByZXZpb3VzIHByb2plY3RcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgcmVmPXtwcmV2QnV0dG9uU3ZnUmVmfVxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NiA1MTJcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMS43IDIzOWwxMzYtMTM2YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDIyLjYgMjIuNmM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwxMjcuOSAyNTZsOTYuNCA5Ni40YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDIwMS43IDQwOWMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTEzNi0xMzZjLTkuNS05LjQtOS41LTI0LjYtLjEtMzR6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgcmVmPXtuZXh0QnV0dG9uUmVmfVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17bmV4dFByb2plY3R9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJuZXh0IHByb2plY3RcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgcmVmPXtuZXh0QnV0dG9uU3ZnUmVmfVxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NiA1MTJcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICNwcm9qZWN0cyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMCA1MHB4IDAgMDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud3JhcCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCA1MHB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDhyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5rcyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5rcyBhIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMjBweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZjUzNTllO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmtzIGE6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFncyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFncyBzcGFuIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDEwcHg7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFncyBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsaXAge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMSUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsaXA6OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJyb3dzIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiBjYWxjKDUwJSArIDUwcHgpO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJyb3dzIGJ1dHRvbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnJvd3MgYnV0dG9uOmhvdmVyLFxyXG4gICAgICAgIC5hcnJvd3MgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnJvd3MgYnV0dG9uOmhvdmVyIHBhdGgsXHJcbiAgICAgICAgLmFycm93cyBidXR0b246Zm9jdXMgcGF0aCB7XHJcbiAgICAgICAgICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFycm93cyBidXR0b24gcGF0aCB7XHJcbiAgICAgICAgICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFycm93cyBidXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAjcHJvamVjdHMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAud3JhcCB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGlua3MsXHJcbiAgICAgICAgICAudGFncyB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5saW5rcyBhIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGFncyBzcGFuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFycm93cyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgIG9yZGVyOiAzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMCAwIDA7XHJcbiAgICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC53cmFwIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hcnJvd3Mge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICBvcmRlcjogMztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1BhZ2U7XHJcbiJdfQ== */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\pages\\projects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectsPage);

/***/ })

})
//# sourceMappingURL=projects.js.dfa43e906ffbb4da4024.hot-update.js.map