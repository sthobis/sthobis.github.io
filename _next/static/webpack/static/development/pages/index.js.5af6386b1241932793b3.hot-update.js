webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Project\\sthobis-github-io\\pages\\index.js";




var IndexPage = function IndexPage() {
  var titleRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var firstNameRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var lastNameRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var descriptionRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var timeout = setTimeout(animateText, 800);
    return function () {
      animejs__WEBPACK_IMPORTED_MODULE_1__["default"].remove([titleRef.current, firstNameRef.current, lastNameRef.current, descriptionRef.current]);
      clearTimeout(timeout);
    };
  }, []);

  var animateText = function animateText() {
    titleRef.current && Object(animejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: titleRef.current,
      translateX: ["70%", 0],
      opacity: 1,
      duration: 800,
      easing: "easeOutCirc"
    });
    firstNameRef.current && lastNameRef.current && Object(animejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: [firstNameRef.current, lastNameRef.current],
      translateY: function translateY(el, i) {
        return i === 0 ? ["100%", 0] : ["-100%", 0];
      },
      opacity: 1,
      delay: 800,
      duration: 600
    });
    descriptionRef.current && Object(animejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
      targets: descriptionRef.current,
      rotateX: [110, 0],
      opacity: 1,
      delay: 1500,
      duration: 600
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "home",
    className: "jsx-2321215814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2321215814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    ref: titleRef,
    className: "jsx-2321215814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    ref: firstNameRef,
    className: "jsx-2321215814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "stefansus"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-2321215814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "thobi"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    ref: lastNameRef,
    className: "jsx-2321215814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "sinaga")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    ref: descriptionRef,
    className: "jsx-2321215814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "javascript ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-2321215814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "web / mobile"), " developer", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    className: "jsx-2321215814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), "available for", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "mailto:s.thobi.sinaga@gmail.com?Subject=Hi%20Thobi",
    className: "jsx-2321215814",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "hire"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2321215814",
    __self: this
  }, "#home.jsx-2321215814{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:50px auto;}p.jsx-2321215814{margin:0;}h1.jsx-2321215814{font-family:Raleway,sans-serif;font-size:12rem;font-weight:800;text-transform:capitalize;margin:0;line-height:0.9;padding:0 0 0 50px;position:relative;opacity:0;}h1.jsx-2321215814::before{content:\"\";display:block;position:absolute;top:0;left:0;width:8px;height:50%;background-color:#fff;}h1.jsx-2321215814::after{content:\"\";display:block;position:absolute;bottom:0;left:0;width:8px;height:50%;background-color:#f5359e;}h1.jsx-2321215814 span.jsx-2321215814{display:block;position:relative;}h1.jsx-2321215814 span.jsx-2321215814:nth-child(1),h1.jsx-2321215814 span.jsx-2321215814:nth-child(3){opacity:0;z-index:1;}h1.jsx-2321215814 span.jsx-2321215814:nth-child(2){color:#f5359e;z-index:2;}h2.jsx-2321215814{margin:30px 0 0 0;font-size:3rem;font-weight:400;text-align:right;line-height:1.1;opacity:0;-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;}h2.jsx-2321215814 span.jsx-2321215814{color:#f5359e;}h2.jsx-2321215814 a.jsx-2321215814{color:#fff;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed #f5359e;}@media (max-width:1400px){h1.jsx-2321215814{font-size:8.4rem;}}@media (max-width:1400px) and (orientation:portrait){h1.jsx-2321215814{font-size:12rem;}}@media (max-width:1024px) and (orientation:portrait){h1.jsx-2321215814{font-size:10rem;}}@media (max-width:767px){h1.jsx-2321215814{font-size:4rem;padding-left:35px;}h2.jsx-2321215814{font-size:2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fa0IsQUFHNkIsQUFRVCxBQUl1QixBQVlyQixBQVdBLEFBV0csQUFNSixBQUtJLEFBS0ksQUFVSixBQUlILEFBT1EsQUFNRCxBQU1BLEFBTUQsQUFLQSxTQWpHbkIsQ0E0Q1ksQ0E1QkksQUFXQSxBQXlDTyxHQTlCSCxBQVdSLEFBZVosQ0E2QnNCLEFBS3BCLENBakJBLEFBTUEsQ0FaQSxDQXJCZSxFQVRqQixJQUtBLENBakNvQixBQVdBLE1BeEJGLENBbUNsQixDQWdCa0IsQUF1Q2hCLFVBNUVNLEFBV0csSUF4Qk8sRUFjVCxBQXFDVSxHQTFCVixJQVZHLEdBV0EsRUFzQ3VCLEVBL0RQLEdBZWYsQUFvQ0ssR0F6QkwsRUF4Q0UsTUE4QlMsR0FXRyxFQXlCZixPQW5ERCxHQW9EYyxFQVd6QixJQTlEa0IsQ0FlbEIsTUFXQSxTQXpCcUIsbUJBQ0QsWUFqQkksTUFrQlosVUFDWixZQWdEQSxrREFsRXFCLDZGQUNGLGlCQUNuQiIsImZpbGUiOiJGOlxcUHJvamVjdFxcc3Rob2Jpcy1naXRodWItaW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCB0aXRsZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGZpcnN0TmFtZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGxhc3ROYW1lUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25SZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KGFuaW1hdGVUZXh0LCA4MDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGFuaW1lLnJlbW92ZShbdGl0bGVSZWYuY3VycmVudCwgZmlyc3ROYW1lUmVmLmN1cnJlbnQsIGxhc3ROYW1lUmVmLmN1cnJlbnQsIGRlc2NyaXB0aW9uUmVmLmN1cnJlbnRdKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpOyAgXHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBhbmltYXRlVGV4dCA9ICgpID0+IHtcclxuICAgIHRpdGxlUmVmLmN1cnJlbnQgJiZcclxuICAgICAgYW5pbWUoe1xyXG4gICAgICAgIHRhcmdldHM6IHRpdGxlUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgdHJhbnNsYXRlWDogW1wiNzAlXCIsIDBdLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgICBlYXNpbmc6IFwiZWFzZU91dENpcmNcIlxyXG4gICAgICB9KTtcclxuICAgIGZpcnN0TmFtZVJlZi5jdXJyZW50ICYmXHJcbiAgICAgIGxhc3ROYW1lUmVmLmN1cnJlbnQgJiZcclxuICAgICAgYW5pbWUoe1xyXG4gICAgICAgIHRhcmdldHM6IFtmaXJzdE5hbWVSZWYuY3VycmVudCwgbGFzdE5hbWVSZWYuY3VycmVudF0sXHJcbiAgICAgICAgdHJhbnNsYXRlWTogKGVsLCBpKSA9PiAoaSA9PT0gMCA/IFtcIjEwMCVcIiwgMF0gOiBbXCItMTAwJVwiLCAwXSksXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBkZWxheTogODAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiA2MDBcclxuICAgICAgfSk7XHJcbiAgICBkZXNjcmlwdGlvblJlZi5jdXJyZW50ICYmXHJcbiAgICAgIGFuaW1lKHtcclxuICAgICAgICB0YXJnZXRzOiBkZXNjcmlwdGlvblJlZi5jdXJyZW50LFxyXG4gICAgICAgIHJvdGF0ZVg6IFsxMTAsIDBdLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgZGVsYXk6IDE1MDAsXHJcbiAgICAgICAgZHVyYXRpb246IDYwMFxyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImhvbWVcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDEgcmVmPXt0aXRsZVJlZn0+XHJcbiAgICAgICAgICA8c3BhbiByZWY9e2ZpcnN0TmFtZVJlZn0+XHJcbiAgICAgICAgICAgIHN0ZWZhbnN1c1xyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+dGhvYmk8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiByZWY9e2xhc3ROYW1lUmVmfT5cclxuICAgICAgICAgICAgc2luYWdhXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8aDIgcmVmPXtkZXNjcmlwdGlvblJlZn0+XHJcbiAgICAgICAgICBqYXZhc2NyaXB0IDxzcGFuPndlYiAvIG1vYmlsZTwvc3Bhbj4gZGV2ZWxvcGVyXHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIGF2YWlsYWJsZSBmb3J7XCIgXCJ9XHJcbiAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnMudGhvYmkuc2luYWdhQGdtYWlsLmNvbT9TdWJqZWN0PUhpJTIwVGhvYmlcIj5cclxuICAgICAgICAgICAgaGlyZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgI2hvbWUge1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDAgMCA1MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxOjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMTo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTM1OWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSBzcGFuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEgc3BhbjpudGgtY2hpbGQoMSksXHJcbiAgICAgICAgaDEgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBjb2xvcjogI2Y1MzU5ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggMCAwIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDIgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogI2Y1MzU5ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIGEge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNmNTM1OWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOC40cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiJdfQ== */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\pages\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.5af6386b1241932793b3.hot-update.js.map