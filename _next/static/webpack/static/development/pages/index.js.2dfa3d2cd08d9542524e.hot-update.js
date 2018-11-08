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
      _this.title && animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: _this.title,
        translateX: ["70%", 0],
        opacity: 1,
        duration: 800,
        easing: "easeOutCirc"
      });
      _this.firstName && _this.lastName && animejs__WEBPACK_IMPORTED_MODULE_1___default()({
        targets: [_this.firstName, _this.lastName],
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
        delay: 1500,
        duration: 600
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
      animejs__WEBPACK_IMPORTED_MODULE_1___default.a.remove([this.title, this.firstName, this.lastName, this.description]);
      clearTimeout(this.timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: "home",
        className: "jsx-2400609811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-2400609811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        ref: function ref(el) {
          _this2.title = el;
        },
        className: "jsx-2400609811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        ref: function ref(el) {
          _this2.firstName = el;
        },
        className: "jsx-2400609811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "stefanus"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-2400609811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "thobi"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        ref: function ref(el) {
          _this2.lastName = el;
        },
        className: "jsx-2400609811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "sinaga")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        ref: function ref(el) {
          _this2.description = el;
        },
        className: "jsx-2400609811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "javascript ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "jsx-2400609811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "web / mobile"), " developer", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
        className: "jsx-2400609811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), "available for", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: "mailto:s.thobi.sinaga@gmail.com?Subject=Hi%20Thobi",
        className: "jsx-2400609811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "hire"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2400609811",
        css: "#home.jsx-2400609811{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:50px auto;}p.jsx-2400609811{margin:0;}h1.jsx-2400609811{font-family:Raleway,sans-serif;font-size:12rem;font-weight:800;font-display:fallback;text-transform:capitalize;margin:0;line-height:0.9;padding:0 0 0 50px;position:relative;opacity:0;}h1.jsx-2400609811::before{content:\"\";display:block;position:absolute;top:0;left:0;width:8px;height:50%;background-color:#fff;}h1.jsx-2400609811::after{content:\"\";display:block;position:absolute;bottom:0;left:0;width:8px;height:50%;background-color:#f5359e;}h1.jsx-2400609811 span.jsx-2400609811{display:block;position:relative;}h1.jsx-2400609811 span.jsx-2400609811:nth-child(1),h1.jsx-2400609811 span.jsx-2400609811:nth-child(3){opacity:0;z-index:1;}h1.jsx-2400609811 span.jsx-2400609811:nth-child(2){color:#f5359e;z-index:2;}h2.jsx-2400609811{margin:30px 0 0 0;font-size:3rem;font-weight:400;text-align:right;line-height:1.1;opacity:0;-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;}h2.jsx-2400609811 span.jsx-2400609811{color:#f5359e;}h2.jsx-2400609811 a.jsx-2400609811{color:#fff;-webkit-text-decoration:none;text-decoration:none;border-bottom:1px dashed #f5359e;}@media (max-width:1400px){h1.jsx-2400609811{font-size:8.4rem;}}@media (max-width:1400px) and (orientation:portrait){h1.jsx-2400609811{font-size:12rem;}}@media (max-width:1024px) and (orientation:portrait){h1.jsx-2400609811{font-size:10rem;}}@media (max-width:767px){h1.jsx-2400609811{font-size:4rem;padding-left:35px;}h2.jsx-2400609811{font-size:2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxQcm9qZWN0XFxzdGhvYmlzLWdpdGh1Yi1pb1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStFb0IsQUFHK0IsQUFRVCxBQUl1QixBQWFyQixBQVdBLEFBV0csQUFNSixBQUtJLEFBS0ksQUFVSixBQUlILEFBT1EsQUFNRCxBQU1BLEFBTUQsQUFLQSxTQWxHbkIsQ0E2Q1ksQ0E1QkksQUFXQSxBQXlDTyxHQTlCSCxBQVdSLEFBZVosQ0E2QnNCLEFBS3BCLENBakJBLEFBTUEsQ0FaQSxDQXJCZSxFQVRqQixJQUtBLENBakNvQixBQVdBLE1BekJGLENBb0NsQixDQWdCa0IsQUF1Q2hCLFVBNUVNLEFBV0csSUF6Qk8sRUFlVCxBQXFDVSxHQTFCVixJQVZHLEdBV0EsRUFzQ3VCLEVBaEVYLEdBZ0JYLEFBb0NLLEdBekJMLEVBekNFLE1BK0JTLEdBV0csRUF5QmYsR0FwRGdCLE9BcURILEVBV3pCLEtBL0NBLE1BV0EsTUEzQlcsU0FDTyxnQkFDRyxTQWpCRyxVQWtCSixrQkFDUixBQWlEWixVQWhEQSx3Q0FuQnFCLDZGQUNGLGlCQUNuQiIsImZpbGUiOiJGOlxcUHJvamVjdFxcc3Rob2Jpcy1naXRodWItaW9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbmltZSBmcm9tIFwiYW5pbWVqc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLmFuaW1hdGVUZXh0LCA4MDApO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBhbmltZS5yZW1vdmUoW3RoaXMudGl0bGUsIHRoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lLCB0aGlzLmRlc2NyaXB0aW9uXSk7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGVUZXh0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy50aXRsZSAmJlxyXG4gICAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogdGhpcy50aXRsZSxcclxuICAgICAgICB0cmFuc2xhdGVYOiBbXCI3MCVcIiwgMF0sXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBkdXJhdGlvbjogODAwLFxyXG4gICAgICAgIGVhc2luZzogXCJlYXNlT3V0Q2lyY1wiXHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5maXJzdE5hbWUgJiZcclxuICAgICAgdGhpcy5sYXN0TmFtZSAmJlxyXG4gICAgICBhbmltZSh7XHJcbiAgICAgICAgdGFyZ2V0czogW3RoaXMuZmlyc3ROYW1lLCB0aGlzLmxhc3ROYW1lXSxcclxuICAgICAgICB0cmFuc2xhdGVZOiAoZWwsIGkpID0+IChpID09PSAwID8gW1wiMTAwJVwiLCAwXSA6IFtcIi0xMDAlXCIsIDBdKSxcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIGRlbGF5OiA4MDAsXHJcbiAgICAgICAgZHVyYXRpb246IDYwMFxyXG4gICAgICB9KTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gJiZcclxuICAgICAgYW5pbWUoe1xyXG4gICAgICAgIHRhcmdldHM6IHRoaXMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgcm90YXRlWDogWzExMCwgMF0sXHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICBkZWxheTogMTUwMCxcclxuICAgICAgICBkdXJhdGlvbjogNjAwXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJob21lXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gZWw7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGVsO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBzdGVmYW51c1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPnRob2JpPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGVsO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBzaW5hZ2FcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxoMlxyXG4gICAgICAgICAgICByZWY9e2VsID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZWw7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGphdmFzY3JpcHQgPHNwYW4+d2ViIC8gbW9iaWxlPC9zcGFuPiBkZXZlbG9wZXJcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIGF2YWlsYWJsZSBmb3J7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86cy50aG9iaS5zaW5hZ2FAZ21haWwuY29tP1N1YmplY3Q9SGklMjBUaG9iaVwiPlxyXG4gICAgICAgICAgICAgIGhpcmVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAjaG9tZSB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBmb250LWRpc3BsYXk6IGZhbGxiYWNrO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC45O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCA1MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDE6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDE6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1MzU5ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSBzcGFuOm50aC1jaGlsZCgxKSxcclxuICAgICAgICAgIGgxIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMSBzcGFuOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjUzNTllO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBoMiBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmNTM1OWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaDIgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2Y1MzU5ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDguNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iXX0= */\n/*@ sourceURL=F:\\Project\\sthobis-github-io\\pages\\index.js */",
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
//# sourceMappingURL=index.js.2dfa3d2cd08d9542524e.hot-update.js.map