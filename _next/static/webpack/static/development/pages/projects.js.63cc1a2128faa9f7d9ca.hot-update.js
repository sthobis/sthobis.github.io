webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");


var _this = undefined,
    _jsxFileName = "C:\\Projects\\sthobis-github-io\\pages\\projects.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



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
  _s();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var projectDescriptionRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var projectThumbnailRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var projectThumbnailImageRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var navigationRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
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
      animejs__WEBPACK_IMPORTED_MODULE_2__["default"].remove([projectDescriptionRef.current, projectThumbnailRef.current, navigationRef.current]);
      clearTimeout(timeout);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  var firstRender = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      reAnimateProject();
    }
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
        _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
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

  return __jsx("div", {
    id: "projects",
    className: "jsx-3869590847",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-3869590847",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3869590847" + " " + "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: projectDescriptionRef,
    className: "jsx-3869590847" + " " + "wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "jsx-3869590847",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, _config__WEBPACK_IMPORTED_MODULE_4__["projects"][state.currentProjectIndex].name), __jsx("p", {
    className: "jsx-3869590847",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, _config__WEBPACK_IMPORTED_MODULE_4__["projects"][state.currentProjectIndex].description), __jsx("div", {
    className: "jsx-3869590847" + " " + "links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, _config__WEBPACK_IMPORTED_MODULE_4__["projects"][state.currentProjectIndex].links.map(function (link, i) {
    return __jsx("a", {
      key: i,
      href: link.href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "jsx-3869590847",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }
    }, link.text);
  })), __jsx("div", {
    className: "jsx-3869590847" + " " + "tags",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, _config__WEBPACK_IMPORTED_MODULE_4__["projects"][state.currentProjectIndex].tags.map(function (tag) {
    return __jsx("span", {
      key: tag,
      className: "jsx-3869590847",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }
    }, tag);
  })))), __jsx("div", {
    className: "jsx-3869590847" + " " + "thumbnail",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: projectThumbnailRef,
    className: "jsx-3869590847" + " " + "clip",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, __jsx("div", {
    ref: projectThumbnailImageRef,
    className: "jsx-3869590847" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 13
    }
  }, _config__WEBPACK_IMPORTED_MODULE_4__["projects"].map(function (project, i) {
    return __jsx("img", {
      key: project.name,
      src: "/images/".concat(project.name, ".png"),
      alt: project.name,
      className: "jsx-3869590847",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }
    });
  })))), __jsx("div", {
    ref: navigationRef,
    className: "jsx-3869590847" + " " + "arrows",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 9
    }
  }, __jsx("button", {
    ref: prevButtonRef,
    type: "button",
    onClick: prevProject,
    "aria-label": "previous project",
    className: "jsx-3869590847",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }, __jsx("svg", {
    ref: prevButtonSvgRef,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 256 512",
    height: "1em",
    width: "1em",
    className: "jsx-3869590847",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z",
    className: "jsx-3869590847",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }))), __jsx("button", {
    ref: nextButtonRef,
    type: "button",
    onClick: nextProject,
    "aria-label": "next project",
    className: "jsx-3869590847",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 11
    }
  }, __jsx("svg", {
    ref: nextButtonSvgRef,
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 256 512",
    height: "1em",
    width: "1em",
    className: "jsx-3869590847",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
    className: "jsx-3869590847",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 15
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3869590847",
    __self: _this
  }, "#projects.jsx-3869590847{width:100%;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin:30px 0;}section.jsx-3869590847{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.text.jsx-3869590847{width:calc(50% - 50px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 50px 0 0;overflow:hidden;}.wrap.jsx-3869590847{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;width:100%;margin:0 0 50px 0;text-align:right;opacity:0;}h1.jsx-3869590847{margin:0;font-size:8rem;font-family:Raleway,sans-serif;text-transform:capitalize;line-height:1;}p.jsx-3869590847{margin:20px 0 0 0;}.links.jsx-3869590847{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:10px 0;}.links.jsx-3869590847 a.jsx-3869590847{margin:0 0 10px 20px;color:#fff;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed #f5359e;}.links.jsx-3869590847 a.jsx-3869590847:first-child{margin-left:0;}.tags.jsx-3869590847{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:1.6rem;}.tags.jsx-3869590847 span.jsx-3869590847{line-height:1;margin:0 0 5px 10px;font-style:italic;}.tags.jsx-3869590847 span.jsx-3869590847:first-child{margin-left:0;}.thumbnail.jsx-3869590847{width:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;}.clip.jsx-3869590847{position:relative;width:75%;overflow:hidden;-webkit-transform:translateX(-101%);-ms-transform:translateX(-101%);transform:translateX(-101%);}.clip.jsx-3869590847::before{content:\"\";display:block;padding-bottom:100%;}.container.jsx-3869590847{position:absolute;top:0;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}img.jsx-3869590847{width:100%;height:auto;}.arrows.jsx-3869590847{position:absolute;right:calc(50% + 50px);bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;opacity:0;}.arrows.jsx-3869590847 button.jsx-3869590847{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px;border:none;border-radius:2px;background-color:rgba(255,255,255,0.15);cursor:pointer;color:#fff;font-size:1.8rem;outline:none;-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-3869590847 button.jsx-3869590847:hover,.arrows.jsx-3869590847 button.jsx-3869590847:focus{background-color:rgba(255,255,255,0.3);}.arrows.jsx-3869590847 button.jsx-3869590847:hover path.jsx-3869590847,.arrows.jsx-3869590847 button.jsx-3869590847:focus path.jsx-3869590847{fill:rgba(255,255,255,1);}.arrows.jsx-3869590847 button.jsx-3869590847 path.jsx-3869590847{fill:rgba(255,255,255,0.7);-webkit-transition:0.3s;transition:0.3s;}.arrows.jsx-3869590847 button.jsx-3869590847:last-child{margin-left:10px;}@media (max-width:1400px){.clip.jsx-3869590847{width:75%;}}@media (max-width:1400px) and (orientation:landscape){h1.jsx-3869590847{font-size:5vw;}}@media (max-width:1400px) and (orientation:portrait){#projects.jsx-3869590847{margin:30px 0;}h1.jsx-3869590847{font-size:5rem;}}@media (max-width:1024px){.clip.jsx-3869590847{width:100%;}}@media (max-width:1024px) and (orientation:landscape){.clip.jsx-3869590847{width:100%;}}@media (max-width:1024px) and (orientation:portrait){section.jsx-3869590847{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-3869590847{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-3869590847{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}.links.jsx-3869590847,.tags.jsx-3869590847{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.links.jsx-3869590847 a.jsx-3869590847{margin-left:10px;margin-right:10px;}.tags.jsx-3869590847 span.jsx-3869590847{margin-left:5px;margin-right:5px;}.thumbnail.jsx-3869590847{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-3869590847{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px){section.jsx-3869590847{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text.jsx-3869590847{width:100%;margin:30px 0 0 0;-webkit-order:2;-ms-flex-order:2;order:2;}.wrap.jsx-3869590847{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;margin-bottom:30px;}h1.jsx-3869590847{font-size:4rem;}.thumbnail.jsx-3869590847{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-order:1;-ms-flex-order:1;order:1;}.arrows.jsx-3869590847{position:static;-webkit-order:3;-ms-flex-order:3;order:3;}}@media (max-width:767px) and (orientation:portrait){.clip.jsx-3869590847{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcc3Rob2Jpcy1naXRodWItaW9cXHBhZ2VzXFxwcm9qZWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtUWtCLEFBR3NCLEFBUU8sQUFTSyxBQVFWLEFBV0osQUFRUyxBQUlMLEFBUVEsQUFPUCxBQUlELEFBU0MsQUFNQSxBQUlKLEFBUVEsQUFPUCxBQU1PLEFBU1AsQUFLTyxBQVFMLEFBZ0I2QixBQUtkLEFBSUUsQUFLYixBQUtMLEFBTUksQUFNQSxBQUlDLEFBTUosQUFNQSxBQU1XLEFBS1gsQUFNUSxBQU9JLEFBSU4sQUFLRCxBQUtMLEFBTUssQUFPTSxBQUtYLEFBTVEsQUFNSixBQUlKLEFBTUssQUFPTCxTQWhQRSxDQWtERixBQThFYixDQXBLa0IsQUFxR0osQUFlRixBQXNFWixBQU1BLEFBV29CLEFBMkJLLEFBa0JMLEFBZ0JLLEFBYXpCLEdBdE5GLEFBYXNCLEFBTXRCLEFBd0ZFLEFBTUEsQ0FJQSxBQWdGQSxDQW5DbUIsQUFXVCxBQWtDQSxDQS9HWixBQTZEc0IsQ0FwTlQsQUFvQ2IsQUFrRFksQUFhSixBQWNpQixHQWpFWixFQXZDRSxBQW9HZixDQWhGa0MsQUF1RXpCLENBTmEsQUFnRHRCLEVBSWtCLENBM0RBLENBdEZILEFBbU1ILEFBNkNBLEVBNUlDLENBcERVLENBeUtyQixDQXJKa0IsQ0FnSmxCLElBNUVGLEVBdkJXLENBWkksRUFkZSxDQU85QixLQW9CZSxFQTdDZixHQXhDNEIsRUF1TTFCLEFBa0NBLFVBcEhGLEdBa0RFLEFBNkNBLElBak9zQixBQXVCUCxBQW1CSSxBQThESSxJQXFFRixBQTZDQSxHQTVNUCxDQXRDRCxBQXlEb0IsRUE2Qk4sU0EwSFAsQUE2Q0EsRUF0TnRCLEVBdEJxQixFQXNNbkIsSUE5TWUsT0E2TkwsQUFrQ0EsQ0F2RFcsQUE2Q0EsSUFwTXZCLENBb0R3QixRQWFaLE1BdUZWLEFBNkNBLENBL015QixHQTRFM0IsTUE1QkEsR0E3QmlCLFFBb0tmLEFBa0NBLENBaFB1QixJQXhCSCxJQVNHLFdBNEx2QixBQTZDQSxFQWxIbUIsZ0JBMUNBLENBckVELElBNkZwQixNQTNDMkIsUUFqRFQsZ0JBQ2xCLElBNkJxQix1QkF2QkUsRUF4QlAsTUFTTSxPQXVIRixDQS9IcEIsZUFxRmtCLEVBMkNKLFlBQ00sQ0EvREMsQ0FvQnJCLGdCQTRDNkMsT0FuRjdCLGNBQ2hCLGlCQXhCYSxFQTJHSSxFQTFIakIsT0FnQm9CLE1BMkdQLFdBQ00sQ0EzR0EsU0F5Q0EsT0FtRUosQ0EzR0gsU0F5Q1osQ0F4Q0EsRUEyR2tCLHdDQUNsQiIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHN0aG9iaXMtZ2l0aHViLWlvXFxwYWdlc1xccHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQVJST1dfVFlQRSwgS0VZU19DT0RFLCBwcm9qZWN0cyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBwcmV2UHJvamVjdEluZGV4OiAwLFxyXG4gIGN1cnJlbnRQcm9qZWN0SW5kZXg6IDAsXHJcbn07XHJcblxyXG5jb25zdCBBQ1RJT04gPSB7XHJcbiAgTkVYVDogXCJuZXh0XCIsXHJcbiAgUFJFVjogXCJwcmV2XCIsXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFDVElPTi5ORVhUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByZXZQcm9qZWN0SW5kZXg6IHN0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXgsXHJcbiAgICAgICAgY3VycmVudFByb2plY3RJbmRleDpcclxuICAgICAgICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXggIT09IHByb2plY3RzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgPyBzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4ICsgMVxyXG4gICAgICAgICAgICA6IDAsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFDVElPTi5QUkVWOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByZXZQcm9qZWN0SW5kZXg6IHN0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXgsXHJcbiAgICAgICAgY3VycmVudFByb2plY3RJbmRleDpcclxuICAgICAgICAgIHN0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXggIT09IDBcclxuICAgICAgICAgICAgPyBzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4IC0gMVxyXG4gICAgICAgICAgICA6IHByb2plY3RzLmxlbmd0aCAtIDEsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZGVmaW5lZCBhY3Rpb246ICcke2FjdGlvbi50eXBlfSdgKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQcm9qZWN0c1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gIGNvbnN0IHByb2plY3REZXNjcmlwdGlvblJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHByb2plY3RUaHVtYm5haWxSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwcm9qZWN0VGh1bWJuYWlsSW1hZ2VSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBuYXZpZ2F0aW9uUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcHJldkJ1dHRvblJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHByZXZCdXR0b25TdmdSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBuZXh0QnV0dG9uUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbmV4dEJ1dHRvblN2Z1JlZiA9IHVzZVJlZigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBhbmltYXRlUHJvamVjdERlc2NyaXB0aW9uKCk7XHJcbiAgICAgIGFuaW1hdGVQcm9qZWN0VGh1bWJuYWlsKCk7XHJcbiAgICAgIGFuaW1hdGVOYXZpZ2F0aW9uKCk7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgYW5pbWUucmVtb3ZlKFtcclxuICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb25SZWYuY3VycmVudCxcclxuICAgICAgICBwcm9qZWN0VGh1bWJuYWlsUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgbmF2aWdhdGlvblJlZi5jdXJyZW50LFxyXG4gICAgICBdKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmaXJzdFJlbmRlciA9IHVzZVJlZih0cnVlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGZpcnN0UmVuZGVyLmN1cnJlbnQpIHtcclxuICAgICAgZmlyc3RSZW5kZXIuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVBbmltYXRlUHJvamVjdCgpO1xyXG4gICAgfVxyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcclxuICAgIHN3aXRjaCAoZS53aGljaCkge1xyXG4gICAgICBjYXNlIEtFWVNfQ09ERS5VUDpcclxuICAgICAgY2FzZSBLRVlTX0NPREUuTEVGVDpcclxuICAgICAgICBwcmV2UHJvamVjdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEtFWVNfQ09ERS5ET1dOOlxyXG4gICAgICBjYXNlIEtFWVNfQ09ERS5SSUdIVDpcclxuICAgICAgICBuZXh0UHJvamVjdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXZQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgYW5pbWF0ZUFycm93c0J1dHRvbihBUlJPV19UWVBFLlBSRVYpO1xyXG4gICAgcHJldkJ1dHRvblJlZi5jdXJyZW50LmJsdXIoKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLlBSRVYgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbmV4dFByb2plY3QgPSAoKSA9PiB7XHJcbiAgICBhbmltYXRlQXJyb3dzQnV0dG9uKEFSUk9XX1RZUEUuTkVYVCk7XHJcbiAgICBuZXh0QnV0dG9uUmVmLmN1cnJlbnQuYmx1cigpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBQ1RJT04uTkVYVCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZUFuaW1hdGVQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgYW5pbWUucmVtb3ZlKHByb2plY3REZXNjcmlwdGlvblJlZi5jdXJyZW50KTtcclxuICAgIGFuaW1lLnJlbW92ZShwcm9qZWN0VGh1bWJuYWlsSW1hZ2VSZWYuY3VycmVudCk7XHJcbiAgICBhbmltYXRlUHJvamVjdERlc2NyaXB0aW9uKCk7XHJcbiAgICBhbmltYXRlUHJvamVjdFRodW1ibmFpbEltYWdlKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZVByb2plY3RUaHVtYm5haWwgPSAoKSA9PiB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IHByb2plY3RUaHVtYm5haWxSZWYuY3VycmVudCxcclxuICAgICAgdHJhbnNsYXRlWDogW1wiLTEwMSVcIiwgMF0sXHJcbiAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCIsXHJcbiAgICAgIGR1cmF0aW9uOiAxNDAwLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZVByb2plY3RUaHVtYm5haWxJbWFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSBgJHtcclxuICAgICAgKHN0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXggLyBwcm9qZWN0cy5sZW5ndGgpICogLTEwMFxyXG4gICAgfSVgO1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiBwcm9qZWN0VGh1bWJuYWlsSW1hZ2VSZWYuY3VycmVudCxcclxuICAgICAgdHJhbnNsYXRlWSxcclxuICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1YWRcIixcclxuICAgICAgZHVyYXRpb246IDE0MDAsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhbmltYXRlUHJvamVjdERlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXNMYW5kc2NhcGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGlmIChpc0xhbmRzY2FwZSkge1xyXG4gICAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogcHJvamVjdERlc2NyaXB0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgdHJhbnNsYXRlWDogW1wiMTAwJVwiLCAwXSxcclxuICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1YWRcIixcclxuICAgICAgICBkZWxheTogMjAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxMjAwLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFuaW1lKHtcclxuICAgICAgICB0YXJnZXRzOiBwcm9qZWN0RGVzY3JpcHRpb25SZWYuY3VycmVudCxcclxuICAgICAgICB0cmFuc2xhdGVZOiBbXCItMTAwJVwiLCAwXSxcclxuICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1YWRcIixcclxuICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiA5MDAsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiBuYXZpZ2F0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgIG9wYWNpdHk6IFswLCAxXSxcclxuICAgICAgZWFzaW5nOiBcImVhc2VPdXRDdWJpY1wiLFxyXG4gICAgICBkZWxheTogNDAwLFxyXG4gICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVBcnJvd3NCdXR0b24gPSAodHlwZSkgPT4ge1xyXG4gICAgY29uc3QgW3RhcmdldHMsIHRyYW5zbGF0ZVhdID1cclxuICAgICAgdHlwZSA9PT0gQVJST1dfVFlQRS5QUkVWXHJcbiAgICAgICAgPyBbcHJldkJ1dHRvblN2Z1JlZi5jdXJyZW50LCBbMCwgLTZdXVxyXG4gICAgICAgIDogW25leHRCdXR0b25TdmdSZWYuY3VycmVudCwgWzAsIDZdXTtcclxuICAgIGFuaW1lLnJlbW92ZSh0YXJnZXRzKTtcclxuICAgIGxldCB0cmFuc2xhdGUgPSBhbmltZSh7XHJcbiAgICAgIHRhcmdldHMsXHJcbiAgICAgIHRyYW5zbGF0ZVgsXHJcbiAgICAgIGVhc2luZzogXCJlYXNlT3V0U2luZVwiLFxyXG4gICAgICBkdXJhdGlvbjogODAwLFxyXG4gICAgfSk7XHJcbiAgICB0cmFuc2xhdGUucmV2ZXJzZSgpO1xyXG4gICAgdHJhbnNsYXRlLnBsYXkoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cInByb2plY3RzXCI+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgPGRpdiByZWY9e3Byb2plY3REZXNjcmlwdGlvblJlZn0gY2xhc3NOYW1lPVwid3JhcFwiPlxyXG4gICAgICAgICAgICA8aDE+e3Byb2plY3RzW3N0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXhdLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgPHA+e3Byb2plY3RzW3N0YXRlLmN1cnJlbnRQcm9qZWN0SW5kZXhdLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0c1tzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4XS5saW5rcy5tYXAoKGxpbmssIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2xpbmsudGV4dH1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0c1tzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4XS50YWdzLm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3RhZ30+e3RhZ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aHVtYm5haWxcIj5cclxuICAgICAgICAgIDxkaXYgcmVmPXtwcm9qZWN0VGh1bWJuYWlsUmVmfSBjbGFzc05hbWU9XCJjbGlwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtwcm9qZWN0VGh1bWJuYWlsSW1hZ2VSZWZ9IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtwcm9qZWN0Lm5hbWV9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHJlZj17bmF2aWdhdGlvblJlZn0gY2xhc3NOYW1lPVwiYXJyb3dzXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHJlZj17cHJldkJ1dHRvblJlZn1cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3ByZXZQcm9qZWN0fVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwicHJldmlvdXMgcHJvamVjdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICByZWY9e3ByZXZCdXR0b25TdmdSZWZ9XHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjBcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2IDUxMlwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMxLjcgMjM5bDEzNi0xMzZjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMjIuNiAyMi42YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDEyNy45IDI1Nmw5Ni40IDk2LjRjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMMjAxLjcgNDA5Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMGwtMTM2LTEzNmMtOS41LTkuNC05LjUtMjQuNi0uMS0zNHpcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICByZWY9e25leHRCdXR0b25SZWZ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtuZXh0UHJvamVjdH1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm5leHQgcHJvamVjdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICByZWY9e25leHRCdXR0b25TdmdSZWZ9XHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjBcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2IDUxMlwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcclxuICAgICAgICAgICAgICB3aWR0aD1cIjFlbVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyNC4zIDI3M2wtMTM2IDEzNmMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTIyLjYtMjIuNmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsOTYuNC05Ni40LTk2LjQtOTYuNGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMNTQuMyAxMDNjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTM2IDEzNmM5LjUgOS40IDkuNSAyNC42LjEgMzR6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgI3Byb2plY3RzIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDUwcHggMCAwO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53cmFwIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDUwcHggMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmtzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmtzIGEge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNmNTM1OWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlua3MgYTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50YWdzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50YWdzIHNwYW4ge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCA1cHggMTBweDtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50YWdzIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xpcCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAxJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xpcDo6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnJvd3Mge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IGNhbGMoNTAlICsgNTBweCk7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnJvd3MgYnV0dG9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFycm93cyBidXR0b246aG92ZXIsXHJcbiAgICAgICAgLmFycm93cyBidXR0b246Zm9jdXMge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFycm93cyBidXR0b246aG92ZXIgcGF0aCxcclxuICAgICAgICAuYXJyb3dzIGJ1dHRvbjpmb2N1cyBwYXRoIHtcclxuICAgICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJyb3dzIGJ1dHRvbiBwYXRoIHtcclxuICAgICAgICAgIGZpbGw6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJyb3dzIGJ1dHRvbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgICAgICAgLmNsaXAge1xyXG4gICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICNwcm9qZWN0cyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgLmNsaXAge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgLmNsaXAge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMCAwIDA7XHJcbiAgICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC53cmFwIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5saW5rcyxcclxuICAgICAgICAgIC50YWdzIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxpbmtzIGEge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50YWdzIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYXJyb3dzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgICAgb3JkZXI6IDM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcclxuICAgICAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLndyYXAge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFycm93cyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgIG9yZGVyOiAzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgLmNsaXAge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1BhZ2U7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Projects\\\\sthobis-github-io\\\\pages\\\\projects.js */"));
};

_s(ProjectsPage, "Z219r0JbZxj+kyefkQVRI1ps1Hg=");

_c = ProjectsPage;
/* harmony default export */ __webpack_exports__["default"] = (ProjectsPage);

var _c;

$RefreshReg$(_c, "ProjectsPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJwcmV2UHJvamVjdEluZGV4IiwiY3VycmVudFByb2plY3RJbmRleCIsIkFDVElPTiIsIk5FWFQiLCJQUkVWIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInByb2plY3RzIiwibGVuZ3RoIiwiRXJyb3IiLCJQcm9qZWN0c1BhZ2UiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJwcm9qZWN0RGVzY3JpcHRpb25SZWYiLCJ1c2VSZWYiLCJwcm9qZWN0VGh1bWJuYWlsUmVmIiwicHJvamVjdFRodW1ibmFpbEltYWdlUmVmIiwibmF2aWdhdGlvblJlZiIsInByZXZCdXR0b25SZWYiLCJwcmV2QnV0dG9uU3ZnUmVmIiwibmV4dEJ1dHRvblJlZiIsIm5leHRCdXR0b25TdmdSZWYiLCJ1c2VFZmZlY3QiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImFuaW1hdGVQcm9qZWN0RGVzY3JpcHRpb24iLCJhbmltYXRlUHJvamVjdFRodW1ibmFpbCIsImFuaW1hdGVOYXZpZ2F0aW9uIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5RG93biIsImFuaW1lIiwicmVtb3ZlIiwiY3VycmVudCIsImNsZWFyVGltZW91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaXJzdFJlbmRlciIsInJlQW5pbWF0ZVByb2plY3QiLCJlIiwid2hpY2giLCJLRVlTX0NPREUiLCJVUCIsIkxFRlQiLCJwcmV2UHJvamVjdCIsIkRPV04iLCJSSUdIVCIsIm5leHRQcm9qZWN0IiwiYW5pbWF0ZUFycm93c0J1dHRvbiIsIkFSUk9XX1RZUEUiLCJibHVyIiwiYW5pbWF0ZVByb2plY3RUaHVtYm5haWxJbWFnZSIsInRhcmdldHMiLCJ0cmFuc2xhdGVYIiwiZWFzaW5nIiwiZHVyYXRpb24iLCJ0cmFuc2xhdGVZIiwiaXNMYW5kc2NhcGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJvcGFjaXR5IiwiZGVsYXkiLCJ0cmFuc2xhdGUiLCJyZXZlcnNlIiwicGxheSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpbmtzIiwibWFwIiwibGluayIsImkiLCJocmVmIiwidGV4dCIsInRhZ3MiLCJ0YWciLCJwcm9qZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsa0JBQWdCLEVBQUUsQ0FEQztBQUVuQkMscUJBQW1CLEVBQUU7QUFGRixDQUFyQjtBQUtBLElBQU1DLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUUsTUFETztBQUViQyxNQUFJLEVBQUU7QUFGTyxDQUFmOztBQUtBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLTixNQUFNLENBQUNDLElBQVo7QUFDRSxhQUFPO0FBQ0xILHdCQUFnQixFQUFFTSxLQUFLLENBQUNMLG1CQURuQjtBQUVMQSwyQkFBbUIsRUFDakJLLEtBQUssQ0FBQ0wsbUJBQU4sS0FBOEJRLGdEQUFRLENBQUNDLE1BQVQsR0FBa0IsQ0FBaEQsR0FDSUosS0FBSyxDQUFDTCxtQkFBTixHQUE0QixDQURoQyxHQUVJO0FBTEQsT0FBUDs7QUFPRixTQUFLQyxNQUFNLENBQUNFLElBQVo7QUFDRSxhQUFPO0FBQ0xKLHdCQUFnQixFQUFFTSxLQUFLLENBQUNMLG1CQURuQjtBQUVMQSwyQkFBbUIsRUFDakJLLEtBQUssQ0FBQ0wsbUJBQU4sS0FBOEIsQ0FBOUIsR0FDSUssS0FBSyxDQUFDTCxtQkFBTixHQUE0QixDQURoQyxHQUVJUSxnREFBUSxDQUFDQyxNQUFULEdBQWtCO0FBTG5CLE9BQVA7O0FBT0Y7QUFDRSxZQUFNLElBQUlDLEtBQUosOEJBQWdDSixNQUFNLENBQUNDLElBQXZDLE9BQU47QUFsQko7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QUFBQTtBQUFBLEtBTUU7QUFDRSxPQUFHLEVBQUV4QixnQkFEUDtBQUVFLFVBQU0sRUFBQyxjQUZUO0FBR0UsUUFBSSxFQUFDLGNBSFA7QUFJRSxlQUFXLEVBQUMsR0FKZDtBQUtFLFdBQU8sRUFBQyxhQUxWO0FBTUUsVUFBTSxFQUFDLEtBTlQ7QUFPRSxTQUFLLEVBQUMsS0FQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRTtBQUFNLEtBQUMsRUFBQyw4TEFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQU5GLENBREYsRUFtQkU7QUFDRSxPQUFHLEVBQUVDLGFBRFA7QUFFRSxRQUFJLEVBQUMsUUFGUDtBQUdFLFdBQU8sRUFBRTBCLFdBSFg7QUFJRSxrQkFBVyxjQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQ0UsT0FBRyxFQUFFekIsZ0JBRFA7QUFFRSxVQUFNLEVBQUMsY0FGVDtBQUdFLFFBQUksRUFBQyxjQUhQO0FBSUUsZUFBVyxFQUFDLEdBSmQ7QUFLRSxXQUFPLEVBQUMsYUFMVjtBQU1FLFVBQU0sRUFBQyxLQU5UO0FBT0UsU0FBSyxFQUFDLEtBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0U7QUFBTSxLQUFDLEVBQUMsK0xBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FORixDQW5CRixDQXJDRixDQURGO0FBQUE7QUFBQTtBQUFBLHc5M0JBREY7QUEyV0QsQ0EzZkQ7O0dBQU1YLFk7O0tBQUFBLFk7QUE2ZlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9qZWN0cy5qcy42M2NjMWEyMTI4ZmFhOWY3ZDljYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFSUk9XX1RZUEUsIEtFWVNfQ09ERSwgcHJvamVjdHMgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHJldlByb2plY3RJbmRleDogMCxcclxuICBjdXJyZW50UHJvamVjdEluZGV4OiAwLFxyXG59O1xyXG5cclxuY29uc3QgQUNUSU9OID0ge1xyXG4gIE5FWFQ6IFwibmV4dFwiLFxyXG4gIFBSRVY6IFwicHJldlwiLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBQ1RJT04uTkVYVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcmV2UHJvamVjdEluZGV4OiBzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4LFxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXg6XHJcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4ICE9PSBwcm9qZWN0cy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgID8gc3RhdGUuY3VycmVudFByb2plY3RJbmRleCArIDFcclxuICAgICAgICAgICAgOiAwLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBQ1RJT04uUFJFVjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcmV2UHJvamVjdEluZGV4OiBzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4LFxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0SW5kZXg6XHJcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4ICE9PSAwXHJcbiAgICAgICAgICAgID8gc3RhdGUuY3VycmVudFByb2plY3RJbmRleCAtIDFcclxuICAgICAgICAgICAgOiBwcm9qZWN0cy5sZW5ndGggLSAxLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmRlZmluZWQgYWN0aW9uOiAnJHthY3Rpb24udHlwZX0nYCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgUHJvamVjdHNQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwcm9qZWN0VGh1bWJuYWlsUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcHJvamVjdFRodW1ibmFpbEltYWdlUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbmF2aWdhdGlvblJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHByZXZCdXR0b25SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwcmV2QnV0dG9uU3ZnUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbmV4dEJ1dHRvblJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG5leHRCdXR0b25TdmdSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgYW5pbWF0ZVByb2plY3REZXNjcmlwdGlvbigpO1xyXG4gICAgICBhbmltYXRlUHJvamVjdFRodW1ibmFpbCgpO1xyXG4gICAgICBhbmltYXRlTmF2aWdhdGlvbigpO1xyXG4gICAgfSwgODAwKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGFuaW1lLnJlbW92ZShbXHJcbiAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgcHJvamVjdFRodW1ibmFpbFJlZi5jdXJyZW50LFxyXG4gICAgICAgIG5hdmlnYXRpb25SZWYuY3VycmVudCxcclxuICAgICAgXSk7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmlyc3RSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChmaXJzdFJlbmRlci5jdXJyZW50KSB7XHJcbiAgICAgIGZpcnN0UmVuZGVyLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlQW5pbWF0ZVByb2plY3QoKTtcclxuICAgIH1cclxuICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGUud2hpY2gpIHtcclxuICAgICAgY2FzZSBLRVlTX0NPREUuVVA6XHJcbiAgICAgIGNhc2UgS0VZU19DT0RFLkxFRlQ6XHJcbiAgICAgICAgcHJldlByb2plY3QoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBLRVlTX0NPREUuRE9XTjpcclxuICAgICAgY2FzZSBLRVlTX0NPREUuUklHSFQ6XHJcbiAgICAgICAgbmV4dFByb2plY3QoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2UHJvamVjdCA9ICgpID0+IHtcclxuICAgIGFuaW1hdGVBcnJvd3NCdXR0b24oQVJST1dfVFlQRS5QUkVWKTtcclxuICAgIHByZXZCdXR0b25SZWYuY3VycmVudC5ibHVyKCk7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFDVElPTi5QUkVWIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5leHRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgYW5pbWF0ZUFycm93c0J1dHRvbihBUlJPV19UWVBFLk5FWFQpO1xyXG4gICAgbmV4dEJ1dHRvblJlZi5jdXJyZW50LmJsdXIoKTtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQUNUSU9OLk5FWFQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVBbmltYXRlUHJvamVjdCA9ICgpID0+IHtcclxuICAgIGFuaW1lLnJlbW92ZShwcm9qZWN0RGVzY3JpcHRpb25SZWYuY3VycmVudCk7XHJcbiAgICBhbmltZS5yZW1vdmUocHJvamVjdFRodW1ibmFpbEltYWdlUmVmLmN1cnJlbnQpO1xyXG4gICAgYW5pbWF0ZVByb2plY3REZXNjcmlwdGlvbigpO1xyXG4gICAgYW5pbWF0ZVByb2plY3RUaHVtYm5haWxJbWFnZSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVQcm9qZWN0VGh1bWJuYWlsID0gKCkgPT4ge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiBwcm9qZWN0VGh1bWJuYWlsUmVmLmN1cnJlbnQsXHJcbiAgICAgIHRyYW5zbGF0ZVg6IFtcIi0xMDElXCIsIDBdLFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZUluT3V0UXVhZFwiLFxyXG4gICAgICBkdXJhdGlvbjogMTQwMCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVQcm9qZWN0VGh1bWJuYWlsSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0cmFuc2xhdGVZID0gYCR7XHJcbiAgICAgIChzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4IC8gcHJvamVjdHMubGVuZ3RoKSAqIC0xMDBcclxuICAgIH0lYDtcclxuICAgIGFuaW1lKHtcclxuICAgICAgdGFyZ2V0czogcHJvamVjdFRodW1ibmFpbEltYWdlUmVmLmN1cnJlbnQsXHJcbiAgICAgIHRyYW5zbGF0ZVksXHJcbiAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCIsXHJcbiAgICAgIGR1cmF0aW9uOiAxNDAwLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZVByb2plY3REZXNjcmlwdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlzTGFuZHNjYXBlID0gd2luZG93LmlubmVyV2lkdGggPiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBpZiAoaXNMYW5kc2NhcGUpIHtcclxuICAgICAgYW5pbWUoe1xyXG4gICAgICAgIHRhcmdldHM6IHByb2plY3REZXNjcmlwdGlvblJlZi5jdXJyZW50LFxyXG4gICAgICAgIHRyYW5zbGF0ZVg6IFtcIjEwMCVcIiwgMF0sXHJcbiAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCIsXHJcbiAgICAgICAgZGVsYXk6IDIwMCxcclxuICAgICAgICBkdXJhdGlvbjogMTIwMCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogcHJvamVjdERlc2NyaXB0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgdHJhbnNsYXRlWTogW1wiLTEwMCVcIiwgMF0sXHJcbiAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCIsXHJcbiAgICAgICAgZGVsYXk6IDMwMCxcclxuICAgICAgICBkdXJhdGlvbjogOTAwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBhbmltYXRlTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgIGFuaW1lKHtcclxuICAgICAgdGFyZ2V0czogbmF2aWdhdGlvblJlZi5jdXJyZW50LFxyXG4gICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgIGVhc2luZzogXCJlYXNlT3V0Q3ViaWNcIixcclxuICAgICAgZGVsYXk6IDQwMCxcclxuICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhbmltYXRlQXJyb3dzQnV0dG9uID0gKHR5cGUpID0+IHtcclxuICAgIGNvbnN0IFt0YXJnZXRzLCB0cmFuc2xhdGVYXSA9XHJcbiAgICAgIHR5cGUgPT09IEFSUk9XX1RZUEUuUFJFVlxyXG4gICAgICAgID8gW3ByZXZCdXR0b25TdmdSZWYuY3VycmVudCwgWzAsIC02XV1cclxuICAgICAgICA6IFtuZXh0QnV0dG9uU3ZnUmVmLmN1cnJlbnQsIFswLCA2XV07XHJcbiAgICBhbmltZS5yZW1vdmUodGFyZ2V0cyk7XHJcbiAgICBsZXQgdHJhbnNsYXRlID0gYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzLFxyXG4gICAgICB0cmFuc2xhdGVYLFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZU91dFNpbmVcIixcclxuICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgIH0pO1xyXG4gICAgdHJhbnNsYXRlLnJldmVyc2UoKTtcclxuICAgIHRyYW5zbGF0ZS5wbGF5KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgIDxkaXYgcmVmPXtwcm9qZWN0RGVzY3JpcHRpb25SZWZ9IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgPGgxPntwcm9qZWN0c1tzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4XS5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgIDxwPntwcm9qZWN0c1tzdGF0ZS5jdXJyZW50UHJvamVjdEluZGV4XS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICB7cHJvamVjdHNbc3RhdGUuY3VycmVudFByb2plY3RJbmRleF0ubGlua3MubWFwKChsaW5rLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtsaW5rLnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICB7cHJvamVjdHNbc3RhdGUuY3VycmVudFByb2plY3RJbmRleF0udGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXt0YWd9Pnt0YWd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICA8ZGl2IHJlZj17cHJvamVjdFRodW1ibmFpbFJlZn0gY2xhc3NOYW1lPVwiY2xpcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17cHJvamVjdFRodW1ibmFpbEltYWdlUmVmfSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzLyR7cHJvamVjdC5uYW1lfS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3Byb2plY3QubmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiByZWY9e25hdmlnYXRpb25SZWZ9IGNsYXNzTmFtZT1cImFycm93c1wiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICByZWY9e3ByZXZCdXR0b25SZWZ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcmV2UHJvamVjdH1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInByZXZpb3VzIHByb2plY3RcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgcmVmPXtwcmV2QnV0dG9uU3ZnUmVmfVxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NiA1MTJcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0zMS43IDIzOWwxMzYtMTM2YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDIyLjYgMjIuNmM5LjQgOS40IDkuNCAyNC42IDAgMzMuOUwxMjcuOSAyNTZsOTYuNCA5Ni40YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDIwMS43IDQwOWMtOS40IDkuNC0yNC42IDkuNC0zMy45IDBsLTEzNi0xMzZjLTkuNS05LjQtOS41LTI0LjYtLjEtMzR6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgcmVmPXtuZXh0QnV0dG9uUmVmfVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17bmV4dFByb2plY3R9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJuZXh0IHByb2plY3RcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgcmVmPXtuZXh0QnV0dG9uU3ZnUmVmfVxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NiA1MTJcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxZW1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMjQuMyAyNzNsLTEzNiAxMzZjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0yMi42LTIyLjZjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45bDk2LjQtOTYuNC05Ni40LTk2LjRjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45TDU0LjMgMTAzYzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDEzNiAxMzZjOS41IDkuNCA5LjUgMjQuNi4xIDM0elwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICNwcm9qZWN0cyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMCA1MHB4IDAgMDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud3JhcCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCA1MHB4IDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDhyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5rcyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5rcyBhIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMjBweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZjUzNTllO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmtzIGE6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFncyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFncyBzcGFuIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgNXB4IDEwcHg7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFncyBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsaXAge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMSUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsaXA6OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJyb3dzIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiBjYWxjKDUwJSArIDUwcHgpO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYXJyb3dzIGJ1dHRvbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnJvd3MgYnV0dG9uOmhvdmVyLFxyXG4gICAgICAgIC5hcnJvd3MgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hcnJvd3MgYnV0dG9uOmhvdmVyIHBhdGgsXHJcbiAgICAgICAgLmFycm93cyBidXR0b246Zm9jdXMgcGF0aCB7XHJcbiAgICAgICAgICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFycm93cyBidXR0b24gcGF0aCB7XHJcbiAgICAgICAgICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFycm93cyBidXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDV2dztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAjcHJvamVjdHMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAud3JhcCB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGlua3MsXHJcbiAgICAgICAgICAudGFncyB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5saW5rcyBhIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGFncyBzcGFuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFycm93cyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgIG9yZGVyOiAzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICBzZWN0aW9uIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMCAwIDA7XHJcbiAgICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC53cmFwIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hcnJvd3Mge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgICAgICBvcmRlcjogMztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgIC5jbGlwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9