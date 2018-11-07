webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
var _jsxFileName = "F:\\Project\\sthobis-github-io\\pages\\index.js";


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




var IndexPage =
/*#__PURE__*/
function (_Component) {
  _inherits(IndexPage, _Component);

  function IndexPage(props) {
    var _this;

    _classCallCheck(this, IndexPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndexPage).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateText", function () {
      _this.title && animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: _this.title,
        translateX: ["70%", 0],
        opacity: 1,
        duration: 800,
        easing: "easeOutCirc"
      });
      _this.subtitles && animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: _this.subtitles,
        translateY: function translateY(el, i) {
          return i === 0 ? ["100%", 0] : ["-100%", 0];
        },
        opacity: 1,
        delay: 800,
        duration: 600
      });
      _this.description && animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: _this.description,
        rotateX: [110, 0],
        opacity: 1,
        delay: 1600,
        duration: 600
      });
    });

    _this.title = null;
    _this.subtitles = [];
    _this.description = null;
    return _this;
  }

  _createClass(IndexPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.timeout = setTimeout(this.animateText, 800);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove([this.title, this.subtitles, this.description]);
      clearTimeout(this.timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "home",
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        ref: function ref(el) {
          _this2.title = el;
        },
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        ref: function ref(el) {
          _this2.subtitles.push(el);
        },
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "stefanus"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "thobi"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        ref: function ref(el) {
          _this2.subtitles.push(el);
        },
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "sinaga")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        ref: function ref(el) {
          _this2.description = el;
        },
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "javascript ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "web / mobile"), " developer", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), "available for", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "mailto:s.thobi.sinaga@gmail.com?Subject=Hi%20Thobi",
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "hire"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3539437983",
        css: "#home.jsx-3539437983{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:50px auto;}p.jsx-3539437983{margin:0;}h1.jsx-3539437983{font-family:Raleway,sans-serif;font-size:12rem;font-weight:800;text-transform:capitalize;margin:0;line-height:0.9;padding:0 0 0 50px;position:relative;opacity:0;}h1.jsx-3539437983::before{content:\"\";display:block;position:absolute;top:0;left:0;width:8px;height:50%;background-color:#fff;}h1.jsx-3539437983::after{content:\"\";display:block;position:absolute;bottom:0;left:0;width:8px;height:50%;background-color:#f5359e;}h1.jsx-3539437983 span.jsx-3539437983{display:block;position:relative;}h1.jsx-3539437983 span.jsx-3539437983:nth-child(1),h1.jsx-3539437983 span.jsx-3539437983:nth-child(3){opacity:0;z-index:1;}h1.jsx-3539437983 span.jsx-3539437983:nth-child(2){color:#f5359e;z-index:2;}h2.jsx-3539437983{margin:30px 0 0 0;font-size:3rem;font-weight:400;text-align:right;line-height:1.1;opacity:0;-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;}h2.jsx-3539437983 span.jsx-3539437983{color:#f5359e;}h2.jsx-3539437983 a.jsx-3539437983{color:#fff;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed #f5359e;}@media (max-width:1400px){h1.jsx-3539437983{font-size:8.4rem;}}@media (max-width:1400px) and (orientation:portrait){h1.jsx-3539437983{font-size:12rem;}}@media (max-width:1024px) and (orientation:portrait){h1.jsx-3539437983{font-size:10rem;}}@media (max-width:767px){h1.jsx-3539437983{font-size:4rem;padding-left:35px;}h2.jsx-3539437983{font-size:2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGb0IsQUFHK0IsQUFRVCxBQUl1QixBQVlyQixBQVdBLEFBV0csQUFNSixBQUtJLEFBS0ksQUFVSixBQUlILEFBT1EsQUFNRCxBQU1BLEFBTUQsQUFLQSxTQWpHbkIsQ0E0Q1ksQ0E1QkksQUFXQSxBQXlDTyxHQTlCSCxBQVdSLEFBZVosQ0E2QnNCLEFBS3BCLENBakJBLEFBTUEsQ0FaQSxDQXJCZSxFQVRqQixJQUtBLENBakNvQixBQVdBLE1BeEJGLENBbUNsQixDQWdCa0IsQUF1Q2hCLFVBNUVNLEFBV0csSUF4Qk8sRUFjVCxBQXFDVSxHQTFCVixJQVZHLEdBV0EsRUFzQ3VCLEVBL0RQLEdBZWYsQUFvQ0ssR0F6QkwsRUF4Q0UsTUE4QlMsR0FXRyxFQXlCZixPQW5ERCxHQW9EYyxFQVd6QixJQTlEa0IsQ0FlbEIsTUFXQSxTQXpCcUIsbUJBQ0QsWUFqQkksTUFrQlosVUFDWixZQWdEQSxrREFsRXFCLDZGQUNGLGlCQUNuQiIsImZpbGUiOiJGOlxcUHJvamVjdFxcc3Rob2Jpcy1naXRodWItaW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnRpdGxlID0gbnVsbDtcclxuICAgIHRoaXMuc3VidGl0bGVzID0gW107XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLmFuaW1hdGVUZXh0LCA4MDApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBhbmltZS5yZW1vdmUoW3RoaXMudGl0bGUsIHRoaXMuc3VidGl0bGVzLCB0aGlzLmRlc2NyaXB0aW9uXSk7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGVUZXh0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy50aXRsZSAmJlxyXG4gICAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogdGhpcy50aXRsZSxcclxuICAgICAgICB0cmFuc2xhdGVYOiBbXCI3MCVcIiwgMF0sXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBkdXJhdGlvbjogODAwLFxyXG4gICAgICAgIGVhc2luZzogXCJlYXNlT3V0Q2lyY1wiXHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5zdWJ0aXRsZXMgJiZcclxuICAgICAgYW5pbWUoe1xyXG4gICAgICAgIHRhcmdldHM6IHRoaXMuc3VidGl0bGVzLFxyXG4gICAgICAgIHRyYW5zbGF0ZVk6IChlbCwgaSkgPT4gKGkgPT09IDAgPyBbXCIxMDAlXCIsIDBdIDogW1wiLTEwMCVcIiwgMF0pLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgZGVsYXk6IDgwMCxcclxuICAgICAgICBkdXJhdGlvbjogNjAwXHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiAmJlxyXG4gICAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogdGhpcy5kZXNjcmlwdGlvbixcclxuICAgICAgICByb3RhdGVYOiBbMTEwLCAwXSxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGRlbGF5OiAxNjAwLFxyXG4gICAgICAgIGR1cmF0aW9uOiA2MDBcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cImhvbWVcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMudGl0bGUgPSBlbDtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VidGl0bGVzLnB1c2goZWwpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBzdGVmYW51c1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPnRob2JpPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJ0aXRsZXMucHVzaChlbCk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHNpbmFnYVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBlbDtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgamF2YXNjcmlwdCA8c3Bhbj53ZWIgLyBtb2JpbGU8L3NwYW4+IGRldmVsb3BlclxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgYXZhaWxhYmxlIGZvcntcIiBcIn1cclxuICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpzLnRob2JpLnNpbmFnYUBnbWFpbC5jb20/U3ViamVjdD1IaSUyMFRob2JpXCI+XHJcbiAgICAgICAgICAgICAgaGlyZVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICNob21lIHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJhbGV3YXksIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDUwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUzNTllO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHNwYW46bnRoLWNoaWxkKDEpLFxyXG4gICAgICAgICAgaDEgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmNTM1OWU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMCAwIDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgyIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y1MzU5ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMiBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZjUzNTllO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOC40cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiJdfQ== */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\pages\\index.js */",
        __self: this
      }));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.c43c9264af6f4511eb93.hot-update.js.map