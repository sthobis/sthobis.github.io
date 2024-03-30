webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "C:\\Projects\\sthobis-github-io\\components\\Layout.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var getShapes = function getShapes(pathname) {
  switch (pathname) {
    case "/":
      return ["M 312.5,232.5 c 247,-110 597,-72 744,0 s 201,158 7,295 s -603,-113 -804,0 S 65.5,342.5 312.5,232.5 z", "M 312.5,232.5 c 273.5,-60.5 602.5,20.5 744,0 s 166.5,94.5 7,295 s -609.5,-29.5 -804,0 S 39,293 312.5,232.5 z"];

    case "/projects":
      return ["M 312.5,232.5 c -128,-170 411,-315 744,0 s -338,54 7,295 s -696,173 -804,0 S 440.5,402.5 312.5,232.5 z", "M 312.5,232.5 c -166.5,-232.5 581.5,-252.5 744,0 s -199.5,81.5 7,295 s -808.5,170.5 -804,0 S 479,465 312.5,232.5 z"];

    default:
      return ["M 312.5,232.5 c 247,-110 597,-72 744,0 s 201,158 7,295 s -603,-113 -804,0 S 65.5,342.5 312.5,232.5 z", "M 312.5,232.5 c 273.5,-60.5 602.5,20.5 744,0 s 166.5,94.5 7,295 s -609.5,-29.5 -804,0 S 39,293 312.5,232.5 z"];
  }
};

var getBackgroundColor = function getBackgroundColor(pathname) {
  switch (pathname) {
    case "/":
      return "#363dc2";

    case "/projects":
      return "rebeccapurple";

    case "/about":
      return "#8a2856";

    default:
      return "#363dc2";
  }
};

function Layout(_ref) {
  _s();

  var children = _ref.children;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      pathname = _useRouter.pathname;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(getShapes(pathname)[0]),
      initialShape = _useState[0];

  var backgroundRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    animejs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(backgroundRef);
    animateBackground(pathname);
    morphBackground(pathname);
  }, [pathname]);

  var morphBackground = function morphBackground(p) {
    Object(animejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: backgroundRef,
      d: getShapes(p)[0],
      duration: 1000,
      easing: "easeInOutQuad"
    }).finished.then(function () {
      animateBackground(p);
    });
  };

  var animateBackground = function animateBackground(p) {
    Object(animejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: backgroundRef,
      d: getShapes(p),
      easing: "linear",
      duration: 5000,
      direction: "alternate",
      loop: true
    });
  };

  return __jsx("div", {
    className: "jsx-3169355206 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4198429967", [getBackgroundColor(pathname)]]]) + " " + "layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-3169355206 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4198429967", [getBackgroundColor(pathname)]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, pathname === "/projects" ? "Projects - Stefanus Thobi Sinaga" : "Stefanus Thobi Sinaga")), __jsx("div", {
    className: "jsx-3169355206 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4198429967", [getBackgroundColor(pathname)]]]) + " " + "background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("svg", {
    width: "1366",
    height: "768",
    viewBox: "0 0 1366 768",
    className: "jsx-3169355206 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4198429967", [getBackgroundColor(pathname)]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("path", {
    ref: backgroundRef,
    d: initialShape,
    className: "jsx-3169355206 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4198429967", [getBackgroundColor(pathname)]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "jsx-3169355206 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4198429967", [getBackgroundColor(pathname)]]]) + " " + "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pathname: pathname,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), __jsx("main", {
    className: "jsx-3169355206 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4198429967", [getBackgroundColor(pathname)]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, children), __jsx("footer", {
    className: "jsx-3169355206 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4198429967", [getBackgroundColor(pathname)]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://github.com/sthobis/sthobis.github.io/tree/dev",
    className: "jsx-3169355206 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4198429967", [getBackgroundColor(pathname)]]]) + " " + "source",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, "< view source >"), __jsx("div", {
    className: "jsx-3169355206 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4198429967", [getBackgroundColor(pathname)]]]) + " " + "socmed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "https://twitter.com/iBoht",
    className: "jsx-3169355206 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4198429967", [getBackgroundColor(pathname)]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, "twitter"), __jsx("a", {
    href: "https://instagram.com/thobiisnaga",
    className: "jsx-3169355206 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4198429967", [getBackgroundColor(pathname)]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "instagram")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4198429967",
    dynamic: [getBackgroundColor(pathname)],
    __self: this
  }, ".layout.__jsx-style-dynamic-selector{position:relative;}.background.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;background-color:".concat(getBackgroundColor(pathname), ";-webkit-transition:1s;transition:1s;}svg.__jsx-style-dynamic-selector{width:100%;height:100%;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);-webkit-transition:1s;transition:1s;}svg.__jsx-style-dynamic-selector path.__jsx-style-dynamic-selector{fill:rgba(0,0,0,0.15);}.content.__jsx-style-dynamic-selector{position:relative;z-index:2;padding:50px;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}main.__jsx-style-dynamic-selector{-webkit-flex:auto;-ms-flex:auto;flex:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 10px;}footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.source.__jsx-style-dynamic-selector{color:#fff;-webkit-text-decoration:none;text-decoration:none;margin:0 0 0 10px;}.socmed.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 0 0 10px;}.socmed.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#fff;-webkit-text-decoration:none;text-decoration:none;margin:0 10px;}@media (orientation:portrait){svg.__jsx-style-dynamic-selector{-webkit-transform:scale(2.6) rotate(114deg);-ms-transform:scale(2.6) rotate(114deg);transform:scale(2.6) rotate(114deg);}}@media (max-width:767px){.content.__jsx-style-dynamic-selector{padding:30px;}}@media (max-width:767px) and (orientation:landscape){}@media (max-width:767px) and (orientation:portrait){.content.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:100vh;}header.__jsx-style-dynamic-selector{-webkit-flex:none;-ms-flex:none;flex:none;}main.__jsx-style-dynamic-selector{-webkit-flex:auto;-ms-flex:auto;flex:auto;min-height:100%;}footer.__jsx-style-dynamic-selector{-webkit-flex:none;-ms-flex:none;flex:none;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.source.__jsx-style-dynamic-selector{margin:0 0 10px 0;}.socmed.__jsx-style-dynamic-selector{position:relative;right:auto;bottom:auto;writing-mode:lr;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0;}.socmed.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{display:block;height:30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcc3Rob2Jpcy1naXRodWItaW9cXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1R2tCLEFBRzZCLEFBSUgsQUFXSixBQVFjLEFBSVAsQUFTUixBQU1HLEFBTUYsQUFNRSxBQUtGLEFBTzJCLEFBTXZCLEFBU00sQUFLVCxBQUlBLEFBS0EsQUFNUSxBQUlBLEFBV0osV0FwR0osQUFpQ1MsQUFXQSxFQWFyQixDQTRDYyxDQWhIUixHQUpSLEFBMkJZLEFBMEVWLEFBSWEsR0FwR04sQ0FrQlQsQ0FQMkIsR0FxR3pCLEVBL0dXLEFBc0JFLENBOEVDLFVBbkdGLEVBc0JLLEFBOEVDLENBdkVMLEFBa0RiLEFBSWtCLEFBS00sU0F2RmQsTUFvR1UsQ0E5RVAsQUE2RGIsR0FsRjhDLEFBd0M1QixBQVdKLGFBbEJnQixBQVlaLENBT3BCLEFBZ0RpQixJQTNEakIsYUFLQSxDQTBCcUIsY0F2RUwsR0FPTyxBQWlFckIsTUE3Q2MsSUE2QmQsQUE4QnFCLFVBMUR2QixFQVB3QixXQXBCeEIsTUFtRzJCLG9DQTVGWCxJQXlCTyxxQkFYdkIsR0FpRUUsUUE5RUYsMkJBNEZhLFNBQ1gsaUNBcEVGIiwiZmlsZSI6IkM6XFxQcm9qZWN0c1xcc3Rob2Jpcy1naXRodWItaW9cXGNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcblxyXG5jb25zdCBnZXRTaGFwZXMgPSAocGF0aG5hbWUpID0+IHtcclxuICBzd2l0Y2ggKHBhdGhuYW1lKSB7XHJcbiAgICBjYXNlIFwiL1wiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIDI0NywtMTEwIDU5NywtNzIgNzQ0LDAgcyAyMDEsMTU4IDcsMjk1IHMgLTYwMywtMTEzIC04MDQsMCBTIDY1LjUsMzQyLjUgMzEyLjUsMjMyLjUgelwiLFxyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIDI3My41LC02MC41IDYwMi41LDIwLjUgNzQ0LDAgcyAxNjYuNSw5NC41IDcsMjk1IHMgLTYwOS41LC0yOS41IC04MDQsMCBTIDM5LDI5MyAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgIF07XHJcbiAgICBjYXNlIFwiL3Byb2plY3RzXCI6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgLTEyOCwtMTcwIDQxMSwtMzE1IDc0NCwwIHMgLTMzOCw1NCA3LDI5NSBzIC02OTYsMTczIC04MDQsMCBTIDQ0MC41LDQwMi41IDMxMi41LDIzMi41IHpcIixcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAtMTY2LjUsLTIzMi41IDU4MS41LC0yNTIuNSA3NDQsMCBzIC0xOTkuNSw4MS41IDcsMjk1IHMgLTgwOC41LDE3MC41IC04MDQsMCBTIDQ3OSw0NjUgMzEyLjUsMjMyLjUgelwiLFxyXG4gICAgICBdO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAyNDcsLTExMCA1OTcsLTcyIDc0NCwwIHMgMjAxLDE1OCA3LDI5NSBzIC02MDMsLTExMyAtODA0LDAgUyA2NS41LDM0Mi41IDMxMi41LDIzMi41IHpcIixcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAyNzMuNSwtNjAuNSA2MDIuNSwyMC41IDc0NCwwIHMgMTY2LjUsOTQuNSA3LDI5NSBzIC02MDkuNSwtMjkuNSAtODA0LDAgUyAzOSwyOTMgMzEyLjUsMjMyLjUgelwiLFxyXG4gICAgICBdO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldEJhY2tncm91bmRDb2xvciA9IChwYXRobmFtZSkgPT4ge1xyXG4gIHN3aXRjaCAocGF0aG5hbWUpIHtcclxuICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgIHJldHVybiBcIiMzNjNkYzJcIjtcclxuICAgIGNhc2UgXCIvcHJvamVjdHNcIjpcclxuICAgICAgcmV0dXJuIFwicmViZWNjYXB1cnBsZVwiO1xyXG4gICAgY2FzZSBcIi9hYm91dFwiOlxyXG4gICAgICByZXR1cm4gXCIjOGEyODU2XCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCIjMzYzZGMyXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtpbml0aWFsU2hhcGVdID0gdXNlU3RhdGUoZ2V0U2hhcGVzKHBhdGhuYW1lKVswXSk7XHJcblxyXG4gIGNvbnN0IGJhY2tncm91bmRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhbmltZS5yZW1vdmUoYmFja2dyb3VuZFJlZik7XHJcbiAgICBhbmltYXRlQmFja2dyb3VuZChwYXRobmFtZSk7XHJcbiAgICBtb3JwaEJhY2tncm91bmQocGF0aG5hbWUpO1xyXG4gIH0sIFtwYXRobmFtZV0pO1xyXG5cclxuICBjb25zdCBtb3JwaEJhY2tncm91bmQgPSAocCkgPT4ge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiBiYWNrZ3JvdW5kUmVmLFxyXG4gICAgICBkOiBnZXRTaGFwZXMocClbMF0sXHJcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICBlYXNpbmc6IFwiZWFzZUluT3V0UXVhZFwiLFxyXG4gICAgfSkuZmluaXNoZWQudGhlbigoKSA9PiB7XHJcbiAgICAgIGFuaW1hdGVCYWNrZ3JvdW5kKHApO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZUJhY2tncm91bmQgPSAocCkgPT4ge1xyXG4gICAgYW5pbWUoe1xyXG4gICAgICB0YXJnZXRzOiBiYWNrZ3JvdW5kUmVmLFxyXG4gICAgICBkOiBnZXRTaGFwZXMocCksXHJcbiAgICAgIGVhc2luZzogXCJsaW5lYXJcIixcclxuICAgICAgZHVyYXRpb246IDUwMDAsXHJcbiAgICAgIGRpcmVjdGlvbjogXCJhbHRlcm5hdGVcIixcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICB7cGF0aG5hbWUgPT09IFwiL3Byb2plY3RzXCJcclxuICAgICAgICAgICAgPyBcIlByb2plY3RzIC0gU3RlZmFudXMgVGhvYmkgU2luYWdhXCJcclxuICAgICAgICAgICAgOiBcIlN0ZWZhbnVzIFRob2JpIFNpbmFnYVwifVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgPHN2ZyB3aWR0aD1cIjEzNjZcIiBoZWlnaHQ9XCI3NjhcIiB2aWV3Qm94PVwiMCAwIDEzNjYgNzY4XCI+XHJcbiAgICAgICAgICA8cGF0aCByZWY9e2JhY2tncm91bmRSZWZ9IGQ9e2luaXRpYWxTaGFwZX0gLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxIZWFkZXIgcGF0aG5hbWU9e3BhdGhuYW1lfSAvPlxyXG4gICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNvdXJjZVwiXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc3Rob2Jpcy9zdGhvYmlzLmdpdGh1Yi5pby90cmVlL2RldlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtgPCB2aWV3IHNvdXJjZSA+YH1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jbWVkXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2lCb2h0XCI+dHdpdHRlcjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbS90aG9iaWlzbmFnYVwiPmluc3RhZ3JhbTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5sYXlvdXQge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Z2V0QmFja2dyb3VuZENvbG9yKHBhdGhuYW1lKX07XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN2ZyBwYXRoIHtcclxuICAgICAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluIHtcclxuICAgICAgICAgIGZsZXg6IGF1dG87XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb3VyY2Uge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc29jbWVkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc29jbWVkIGEge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNikgcm90YXRlKDExNGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc291cmNlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zb2NtZWQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgIHdyaXRpbmctbW9kZTogbHI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc29jbWVkIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvcGEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMzNjNkYzI7XHJcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICB0ZXh0YXJlYSxcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9wYSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Projects\\\\sthobis-github-io\\\\components\\\\Layout.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3169355206",
    __self: this
  }, "*{box-sizing:border-box;}html{font-size:10px;}body{color:#fff;margin:0;font-family:\"Ropa Sans\",sans-serif;font-size:2rem;line-height:1.5;background:#363dc2;overflow-x:hidden;}input,textarea,button{font-family:\"Ropa Sans\",sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xcc3Rob2Jpcy1naXRodWItaW9cXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrT3lCLEFBR2lDLEFBSVAsQUFJSixBQVl5QixXQVgzQixJQUpYLEtBS3NDLEVBVHRDLGFBb0JBLG9CQVZpQixlQUNDLGdCQUNHLG1CQUNELGtCQUNwQiIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHN0aG9iaXMtZ2l0aHViLWlvXFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5pbWUgZnJvbSBcImFuaW1lanNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5cclxuY29uc3QgZ2V0U2hhcGVzID0gKHBhdGhuYW1lKSA9PiB7XHJcbiAgc3dpdGNoIChwYXRobmFtZSkge1xyXG4gICAgY2FzZSBcIi9cIjpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAyNDcsLTExMCA1OTcsLTcyIDc0NCwwIHMgMjAxLDE1OCA3LDI5NSBzIC02MDMsLTExMyAtODA0LDAgUyA2NS41LDM0Mi41IDMxMi41LDIzMi41IHpcIixcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAyNzMuNSwtNjAuNSA2MDIuNSwyMC41IDc0NCwwIHMgMTY2LjUsOTQuNSA3LDI5NSBzIC02MDkuNSwtMjkuNSAtODA0LDAgUyAzOSwyOTMgMzEyLjUsMjMyLjUgelwiLFxyXG4gICAgICBdO1xyXG4gICAgY2FzZSBcIi9wcm9qZWN0c1wiOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIC0xMjgsLTE3MCA0MTEsLTMxNSA3NDQsMCBzIC0zMzgsNTQgNywyOTUgcyAtNjk2LDE3MyAtODA0LDAgUyA0NDAuNSw0MDIuNSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgLTE2Ni41LC0yMzIuNSA1ODEuNSwtMjUyLjUgNzQ0LDAgcyAtMTk5LjUsODEuNSA3LDI5NSBzIC04MDguNSwxNzAuNSAtODA0LDAgUyA0NzksNDY1IDMxMi41LDIzMi41IHpcIixcclxuICAgICAgXTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjQ3LC0xMTAgNTk3LC03MiA3NDQsMCBzIDIwMSwxNTggNywyOTUgcyAtNjAzLC0xMTMgLTgwNCwwIFMgNjUuNSwzNDIuNSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjczLjUsLTYwLjUgNjAyLjUsMjAuNSA3NDQsMCBzIDE2Ni41LDk0LjUgNywyOTUgcyAtNjA5LjUsLTI5LjUgLTgwNCwwIFMgMzksMjkzIDMxMi41LDIzMi41IHpcIixcclxuICAgICAgXTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRCYWNrZ3JvdW5kQ29sb3IgPSAocGF0aG5hbWUpID0+IHtcclxuICBzd2l0Y2ggKHBhdGhuYW1lKSB7XHJcbiAgICBjYXNlIFwiL1wiOlxyXG4gICAgICByZXR1cm4gXCIjMzYzZGMyXCI7XHJcbiAgICBjYXNlIFwiL3Byb2plY3RzXCI6XHJcbiAgICAgIHJldHVybiBcInJlYmVjY2FwdXJwbGVcIjtcclxuICAgIGNhc2UgXCIvYWJvdXRcIjpcclxuICAgICAgcmV0dXJuIFwiIzhhMjg1NlwiO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiIzM2M2RjMlwiO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbaW5pdGlhbFNoYXBlXSA9IHVzZVN0YXRlKGdldFNoYXBlcyhwYXRobmFtZSlbMF0pO1xyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYW5pbWUucmVtb3ZlKGJhY2tncm91bmRSZWYpO1xyXG4gICAgYW5pbWF0ZUJhY2tncm91bmQocGF0aG5hbWUpO1xyXG4gICAgbW9ycGhCYWNrZ3JvdW5kKHBhdGhuYW1lKTtcclxuICB9LCBbcGF0aG5hbWVdKTtcclxuXHJcbiAgY29uc3QgbW9ycGhCYWNrZ3JvdW5kID0gKHApID0+IHtcclxuICAgIGFuaW1lKHtcclxuICAgICAgdGFyZ2V0czogYmFja2dyb3VuZFJlZixcclxuICAgICAgZDogZ2V0U2hhcGVzKHApWzBdLFxyXG4gICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1YWRcIixcclxuICAgIH0pLmZpbmlzaGVkLnRoZW4oKCkgPT4ge1xyXG4gICAgICBhbmltYXRlQmFja2dyb3VuZChwKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVCYWNrZ3JvdW5kID0gKHApID0+IHtcclxuICAgIGFuaW1lKHtcclxuICAgICAgdGFyZ2V0czogYmFja2dyb3VuZFJlZixcclxuICAgICAgZDogZ2V0U2hhcGVzKHApLFxyXG4gICAgICBlYXNpbmc6IFwibGluZWFyXCIsXHJcbiAgICAgIGR1cmF0aW9uOiA1MDAwLFxyXG4gICAgICBkaXJlY3Rpb246IFwiYWx0ZXJuYXRlXCIsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAge3BhdGhuYW1lID09PSBcIi9wcm9qZWN0c1wiXHJcbiAgICAgICAgICAgID8gXCJQcm9qZWN0cyAtIFN0ZWZhbnVzIFRob2JpIFNpbmFnYVwiXHJcbiAgICAgICAgICAgIDogXCJTdGVmYW51cyBUaG9iaSBTaW5hZ2FcIn1cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgICAgIDxzdmcgd2lkdGg9XCIxMzY2XCIgaGVpZ2h0PVwiNzY4XCIgdmlld0JveD1cIjAgMCAxMzY2IDc2OFwiPlxyXG4gICAgICAgICAgPHBhdGggcmVmPXtiYWNrZ3JvdW5kUmVmfSBkPXtpbml0aWFsU2hhcGV9IC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICA8SGVhZGVyIHBhdGhuYW1lPXtwYXRobmFtZX0gLz5cclxuICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzb3VyY2VcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N0aG9iaXMvc3Rob2Jpcy5naXRodWIuaW8vdHJlZS9kZXZcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7YDwgdmlldyBzb3VyY2UgPmB9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY21lZFwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pQm9odFwiPnR3aXR0ZXI8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vdGhvYmlpc25hZ2FcIj5pbnN0YWdyYW08L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubGF5b3V0IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2dldEJhY2tncm91bmRDb2xvcihwYXRobmFtZSl9O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdmcgcGF0aCB7XHJcbiAgICAgICAgICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc291cmNlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvY21lZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvY21lZCBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyLjYpIHJvdGF0ZSgxMTRkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNvdXJjZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc29jbWVkIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICAgICAgYm90dG9tOiBhdXRvO1xyXG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IGxyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNvY21lZCBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBodG1sIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSb3BhIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzYzZGMyO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgdGV4dGFyZWEsXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvcGEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Projects\\\\sthobis-github-io\\\\components\\\\Layout.js */"));
}

_s(Layout, "bwA4yhdlfawricBLHAPqqwTC3fs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6WyJnZXRTaGFwZXMiLCJwYXRobmFtZSIsImdldEJhY2tncm91bmRDb2xvciIsIkxheW91dCIsImNoaWxkcmVuIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJpbml0aWFsU2hhcGUiLCJiYWNrZ3JvdW5kUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiYW5pbWUiLCJyZW1vdmUiLCJhbmltYXRlQmFja2dyb3VuZCIsIm1vcnBoQmFja2dyb3VuZCIsInAiLCJ0YXJnZXRzIiwiZCIsImR1cmF0aW9uIiwiZWFzaW5nIiwiZmluaXNoZWQiLCJ0aGVuIiwiZGlyZWN0aW9uIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFFBQUQsRUFBYztBQUM5QixVQUFRQSxRQUFSO0FBQ0UsU0FBSyxHQUFMO0FBQ0UsYUFBTyxDQUNMLHNHQURLLEVBRUwsOEdBRkssQ0FBUDs7QUFJRixTQUFLLFdBQUw7QUFDRSxhQUFPLENBQ0wsd0dBREssRUFFTCxvSEFGSyxDQUFQOztBQUlGO0FBQ0UsYUFBTyxDQUNMLHNHQURLLEVBRUwsOEdBRkssQ0FBUDtBQVpKO0FBaUJELENBbEJEOztBQW9CQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNELFFBQUQsRUFBYztBQUN2QyxVQUFRQSxRQUFSO0FBQ0UsU0FBSyxHQUFMO0FBQ0UsYUFBTyxTQUFQOztBQUNGLFNBQUssV0FBTDtBQUNFLGFBQU8sZUFBUDs7QUFDRixTQUFLLFFBQUw7QUFDRSxhQUFPLFNBQVA7O0FBQ0Y7QUFDRSxhQUFPLFNBQVA7QUFSSjtBQVVELENBWEQ7O0FBYUEsU0FBU0UsTUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxtQkFD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBRUUsUUFBSSxFQUFDLHVEQUZQO0FBQUEsb0hBd0JvQkMsa0JBQWtCLENBQUNELFFBQUQsQ0F4QnRDLGFBQ1ksUUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBT0U7QUFBQSxvSEFrQm9CQyxrQkFBa0IsQ0FBQ0QsUUFBRCxDQWxCdEMsYUFBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQywyQkFBUjtBQUFBLG9IQWlCa0JDLGtCQUFrQixDQUFDRCxRQUFELENBakJwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFHLFFBQUksRUFBQyxtQ0FBUjtBQUFBLG9IQWdCa0JDLGtCQUFrQixDQUFDRCxRQUFELENBaEJwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLENBUEYsQ0FIRixDQWJGO0FBQUE7QUFBQSxjQXlDMEJDLGtCQUFrQixDQUFDRCxRQUFELENBekM1QztBQUFBO0FBQUEsOExBeUMwQkMsa0JBQWtCLENBQUNELFFBQUQsQ0F6QzVDO0FBQUE7QUFBQTtBQUFBLGdyVEFERjtBQW9MRDs7R0F0TlFFLE07VUFDY0UscUQ7OztLQURkRixNO0FBd05NQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5jMzQ0MWJhNmU4MGUwODg2MTkyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuXHJcbmNvbnN0IGdldFNoYXBlcyA9IChwYXRobmFtZSkgPT4ge1xyXG4gIHN3aXRjaCAocGF0aG5hbWUpIHtcclxuICAgIGNhc2UgXCIvXCI6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjQ3LC0xMTAgNTk3LC03MiA3NDQsMCBzIDIwMSwxNTggNywyOTUgcyAtNjAzLC0xMTMgLTgwNCwwIFMgNjUuNSwzNDIuNSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgICAgXCJNIDMxMi41LDIzMi41IGMgMjczLjUsLTYwLjUgNjAyLjUsMjAuNSA3NDQsMCBzIDE2Ni41LDk0LjUgNywyOTUgcyAtNjA5LjUsLTI5LjUgLTgwNCwwIFMgMzksMjkzIDMxMi41LDIzMi41IHpcIixcclxuICAgICAgXTtcclxuICAgIGNhc2UgXCIvcHJvamVjdHNcIjpcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICBcIk0gMzEyLjUsMjMyLjUgYyAtMTI4LC0xNzAgNDExLC0zMTUgNzQ0LDAgcyAtMzM4LDU0IDcsMjk1IHMgLTY5NiwxNzMgLTgwNCwwIFMgNDQwLjUsNDAyLjUgMzEyLjUsMjMyLjUgelwiLFxyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIC0xNjYuNSwtMjMyLjUgNTgxLjUsLTI1Mi41IDc0NCwwIHMgLTE5OS41LDgxLjUgNywyOTUgcyAtODA4LjUsMTcwLjUgLTgwNCwwIFMgNDc5LDQ2NSAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgIF07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIDI0NywtMTEwIDU5NywtNzIgNzQ0LDAgcyAyMDEsMTU4IDcsMjk1IHMgLTYwMywtMTEzIC04MDQsMCBTIDY1LjUsMzQyLjUgMzEyLjUsMjMyLjUgelwiLFxyXG4gICAgICAgIFwiTSAzMTIuNSwyMzIuNSBjIDI3My41LC02MC41IDYwMi41LDIwLjUgNzQ0LDAgcyAxNjYuNSw5NC41IDcsMjk1IHMgLTYwOS41LC0yOS41IC04MDQsMCBTIDM5LDI5MyAzMTIuNSwyMzIuNSB6XCIsXHJcbiAgICAgIF07XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0QmFja2dyb3VuZENvbG9yID0gKHBhdGhuYW1lKSA9PiB7XHJcbiAgc3dpdGNoIChwYXRobmFtZSkge1xyXG4gICAgY2FzZSBcIi9cIjpcclxuICAgICAgcmV0dXJuIFwiIzM2M2RjMlwiO1xyXG4gICAgY2FzZSBcIi9wcm9qZWN0c1wiOlxyXG4gICAgICByZXR1cm4gXCJyZWJlY2NhcHVycGxlXCI7XHJcbiAgICBjYXNlIFwiL2Fib3V0XCI6XHJcbiAgICAgIHJldHVybiBcIiM4YTI4NTZcIjtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBcIiMzNjNkYzJcIjtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2luaXRpYWxTaGFwZV0gPSB1c2VTdGF0ZShnZXRTaGFwZXMocGF0aG5hbWUpWzBdKTtcclxuXHJcbiAgY29uc3QgYmFja2dyb3VuZFJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFuaW1lLnJlbW92ZShiYWNrZ3JvdW5kUmVmKTtcclxuICAgIGFuaW1hdGVCYWNrZ3JvdW5kKHBhdGhuYW1lKTtcclxuICAgIG1vcnBoQmFja2dyb3VuZChwYXRobmFtZSk7XHJcbiAgfSwgW3BhdGhuYW1lXSk7XHJcblxyXG4gIGNvbnN0IG1vcnBoQmFja2dyb3VuZCA9IChwKSA9PiB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IGJhY2tncm91bmRSZWYsXHJcbiAgICAgIGQ6IGdldFNoYXBlcyhwKVswXSxcclxuICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWFkXCIsXHJcbiAgICB9KS5maW5pc2hlZC50aGVuKCgpID0+IHtcclxuICAgICAgYW5pbWF0ZUJhY2tncm91bmQocCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhbmltYXRlQmFja2dyb3VuZCA9IChwKSA9PiB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IGJhY2tncm91bmRSZWYsXHJcbiAgICAgIGQ6IGdldFNoYXBlcyhwKSxcclxuICAgICAgZWFzaW5nOiBcImxpbmVhclwiLFxyXG4gICAgICBkdXJhdGlvbjogNTAwMCxcclxuICAgICAgZGlyZWN0aW9uOiBcImFsdGVybmF0ZVwiLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgIHtwYXRobmFtZSA9PT0gXCIvcHJvamVjdHNcIlxyXG4gICAgICAgICAgICA/IFwiUHJvamVjdHMgLSBTdGVmYW51cyBUaG9iaSBTaW5hZ2FcIlxyXG4gICAgICAgICAgICA6IFwiU3RlZmFudXMgVGhvYmkgU2luYWdhXCJ9XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cclxuICAgICAgICA8c3ZnIHdpZHRoPVwiMTM2NlwiIGhlaWdodD1cIjc2OFwiIHZpZXdCb3g9XCIwIDAgMTM2NiA3NjhcIj5cclxuICAgICAgICAgIDxwYXRoIHJlZj17YmFja2dyb3VuZFJlZn0gZD17aW5pdGlhbFNoYXBlfSAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPEhlYWRlciBwYXRobmFtZT17cGF0aG5hbWV9IC8+XHJcbiAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic291cmNlXCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zdGhvYmlzL3N0aG9iaXMuZ2l0aHViLmlvL3RyZWUvZGV2XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2A8IHZpZXcgc291cmNlID5gfVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NtZWRcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaUJvaHRcIj50d2l0dGVyPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL3Rob2JpaXNuYWdhXCI+aW5zdGFncmFtPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmxheW91dCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtnZXRCYWNrZ3JvdW5kQ29sb3IocGF0aG5hbWUpfTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3ZnIHBhdGgge1xyXG4gICAgICAgICAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgZmxleDogYXV0bztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNvdXJjZSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb2NtZWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb2NtZWQgYSB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMi42KSByb3RhdGUoMTE0ZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgZmxleDogYXV0bztcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zb3VyY2Uge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNvY21lZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGJvdHRvbTogYXV0bztcclxuICAgICAgICAgICAgd3JpdGluZy1tb2RlOiBscjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zb2NtZWQgYSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9wYSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzM2M2RjMjtcclxuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIHRleHRhcmVhLFxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJSb3BhIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==