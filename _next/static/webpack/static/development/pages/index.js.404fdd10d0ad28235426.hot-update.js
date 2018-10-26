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

  function IndexPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IndexPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IndexPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "animateText", function () {
      animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: _this.title,
        translateX: ["70%", 0],
        opacity: 1,
        duration: 800,
        easing: "easeOutCirc"
      }).finished.then(function () {
        return animejs__WEBPACK_IMPORTED_MODULE_1___default()({
          targets: [_this.subtitleFirst, _this.subtitleLast],
          translateY: function translateY(el, i) {
            return i === 0 ? ["100%", 0] : ["-100%", 0];
          },
          opacity: 1,
          duration: 600
        }).finished;
      }).then(function () {
        return animejs__WEBPACK_IMPORTED_MODULE_1___default()({
          targets: _this.description,
          rotateX: [110, 0],
          opacity: 1,
          duration: 600
        }).finished;
      });
    });

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
      animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove([this.title, this.subtitleFirst, this.subtitleLast, this.description]);
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
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        ref: function ref(el) {
          return _this2.title = el;
        },
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        ref: function ref(el) {
          return _this2.subtitleFirst = el;
        },
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "stefanus"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "thobi"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        ref: function ref(el) {
          return _this2.subtitleLast = el;
        },
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "sinaga")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        ref: function ref(el) {
          return _this2.description = el;
        },
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "javascript ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "web / mobile"), " developer", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), "available for", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "mailto:s.thobi.sinaga@gmail.com?Subject=Hi%20Thobi",
        className: "jsx-3539437983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "hire"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3539437983",
        css: "#home.jsx-3539437983{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:50px auto;}p.jsx-3539437983{margin:0;}h1.jsx-3539437983{font-family:Raleway,sans-serif;font-size:12rem;font-weight:800;text-transform:capitalize;margin:0;line-height:0.9;padding:0 0 0 50px;position:relative;opacity:0;}h1.jsx-3539437983::before{content:\"\";display:block;position:absolute;top:0;left:0;width:8px;height:50%;background-color:#fff;}h1.jsx-3539437983::after{content:\"\";display:block;position:absolute;bottom:0;left:0;width:8px;height:50%;background-color:#f5359e;}h1.jsx-3539437983 span.jsx-3539437983{display:block;position:relative;}h1.jsx-3539437983 span.jsx-3539437983:nth-child(1),h1.jsx-3539437983 span.jsx-3539437983:nth-child(3){opacity:0;z-index:1;}h1.jsx-3539437983 span.jsx-3539437983:nth-child(2){color:#f5359e;z-index:2;}h2.jsx-3539437983{margin:30px 0 0 0;font-size:3rem;font-weight:400;text-align:right;line-height:1.1;opacity:0;-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;}h2.jsx-3539437983 span.jsx-3539437983{color:#f5359e;}h2.jsx-3539437983 a.jsx-3539437983{color:#fff;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed #f5359e;}@media (max-width:1400px){h1.jsx-3539437983{font-size:8.4rem;}}@media (max-width:1400px) and (orientation:portrait){h1.jsx-3539437983{font-size:12rem;}}@media (max-width:1024px) and (orientation:portrait){h1.jsx-3539437983{font-size:10rem;}}@media (max-width:767px){h1.jsx-3539437983{font-size:4rem;padding-left:35px;}h2.jsx-3539437983{font-size:2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEb0IsQUFHK0IsQUFRVCxBQUl1QixBQVlyQixBQVdBLEFBV0csQUFNSixBQUtJLEFBS0ksQUFVSixBQUlILEFBT1EsQUFNRCxBQU1BLEFBTUQsQUFLQSxTQWpHbkIsQ0E0Q1ksQ0E1QkksQUFXQSxBQXlDTyxHQTlCSCxBQVdSLEFBZVosQ0E2QnNCLEFBS3BCLENBakJBLEFBTUEsQ0FaQSxDQXJCZSxFQVRqQixJQUtBLENBakNvQixBQVdBLE1BeEJGLENBbUNsQixDQWdCa0IsQUF1Q2hCLFVBNUVNLEFBV0csSUF4Qk8sRUFjVCxBQXFDVSxHQTFCVixJQVZHLEdBV0EsRUFzQ3VCLEVBL0RQLEdBZWYsQUFvQ0ssR0F6QkwsRUF4Q0UsTUE4QlMsR0FXRyxFQXlCZixPQW5ERCxHQW9EYyxFQVd6QixJQTlEa0IsQ0FlbEIsTUFXQSxTQXpCcUIsbUJBQ0QsWUFqQkksTUFrQlosVUFDWixZQWdEQSxrREFsRXFCLDZGQUNGLGlCQUNuQiIsImZpbGUiOiJGOlxcUHJvamVjdFxcc3Rob2Jpcy1naXRodWItaW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLmFuaW1hdGVUZXh0LCA4MDApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBhbmltZS5yZW1vdmUoW1xyXG4gICAgICB0aGlzLnRpdGxlLFxyXG4gICAgICB0aGlzLnN1YnRpdGxlRmlyc3QsXHJcbiAgICAgIHRoaXMuc3VidGl0bGVMYXN0LFxyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uXHJcbiAgICBdKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZVRleHQgPSAoKSA9PiB7XHJcbiAgICBhbmltZSh7XHJcbiAgICAgIHRhcmdldHM6IHRoaXMudGl0bGUsXHJcbiAgICAgIHRyYW5zbGF0ZVg6IFtcIjcwJVwiLCAwXSxcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgZHVyYXRpb246IDgwMCxcclxuICAgICAgZWFzaW5nOiBcImVhc2VPdXRDaXJjXCJcclxuICAgIH0pXHJcbiAgICAgIC5maW5pc2hlZC50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gYW5pbWUoe1xyXG4gICAgICAgICAgdGFyZ2V0czogW3RoaXMuc3VidGl0bGVGaXJzdCwgdGhpcy5zdWJ0aXRsZUxhc3RdLFxyXG4gICAgICAgICAgdHJhbnNsYXRlWTogKGVsLCBpKSA9PiAoaSA9PT0gMCA/IFtcIjEwMCVcIiwgMF0gOiBbXCItMTAwJVwiLCAwXSksXHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgZHVyYXRpb246IDYwMFxyXG4gICAgICAgIH0pLmZpbmlzaGVkO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFuaW1lKHtcclxuICAgICAgICAgIHRhcmdldHM6IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICByb3RhdGVYOiBbMTEwLCAwXSxcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICBkdXJhdGlvbjogNjAwXHJcbiAgICAgICAgfSkuZmluaXNoZWQ7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJob21lXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMSByZWY9e2VsID0+ICh0aGlzLnRpdGxlID0gZWwpfT5cclxuICAgICAgICAgICAgPHNwYW4gcmVmPXtlbCA9PiAodGhpcy5zdWJ0aXRsZUZpcnN0ID0gZWwpfT5zdGVmYW51czwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+dGhvYmk8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIHJlZj17ZWwgPT4gKHRoaXMuc3VidGl0bGVMYXN0ID0gZWwpfT5zaW5hZ2E8L3NwYW4+XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGgyIHJlZj17ZWwgPT4gKHRoaXMuZGVzY3JpcHRpb24gPSBlbCl9PlxyXG4gICAgICAgICAgICBqYXZhc2NyaXB0IDxzcGFuPndlYiAvIG1vYmlsZTwvc3Bhbj4gZGV2ZWxvcGVyXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICBhdmFpbGFibGUgZm9ye1wiIFwifVxyXG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnMudGhvYmkuc2luYWdhQGdtYWlsLmNvbT9TdWJqZWN0PUhpJTIwVGhvYmlcIj5cclxuICAgICAgICAgICAgICBoaXJlXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgI2hvbWUge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuOTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgNTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgxOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTM1OWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEgc3BhbjpudGgtY2hpbGQoMSksXHJcbiAgICAgICAgICBoMSBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDEgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y1MzU5ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDAgMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDIgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjUzNTllO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgyIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNmNTM1OWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA4LjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIl19 */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\pages\\index.js */",
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
//# sourceMappingURL=index.js.404fdd10d0ad28235426.hot-update.js.map