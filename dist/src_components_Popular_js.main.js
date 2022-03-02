"use strict";
(self["webpackChunkgithub_battle"] = self["webpackChunkgithub_battle"] || []).push([["src_components_Popular_js"],{

/***/ "./src/components/Popular.js":
/*!***********************************!*\
  !*** ./src/components/Popular.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popular)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/api */ "./src/utils/api.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./src/components/Card.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tooltip */ "./src/components/Tooltip.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 //function Component

function LanguagesNav(_ref) {
  var selected = _ref.selected,
      onUpdateLanguage = _ref.onUpdateLanguage;
  var programmingLanguages = ['All', 'Javascript', 'Ruby', 'Java', 'Python', 'CSS'];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "flex-center"
  }, programmingLanguages.map(function (language) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: language
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn-clear nav-link",
      style: language === selected ? {
        color: 'darkorange'
      } : null,
      onClick: function onClick() {
        return onUpdateLanguage(language);
      }
    }, language));
  }));
}

;
LanguagesNav.propTypes = {
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),
  onUpdateLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired)
};

function ReposGrid(_ref2) {
  var repos = _ref2.repos;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "grid space-around"
  }, repos.map(function (repo, index) {
    var name = repo.name,
        owner = repo.owner,
        html_url = repo.html_url,
        stargazers_count = repo.stargazers_count,
        forks = repo.forks,
        open_issues = repo.open_issues;
    var login = owner.login,
        avatar_url = owner.avatar_url;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: html_url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      header: "#".concat(index + 1),
      avatar: avatar_url,
      href: html_url,
      name: login
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "card-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: "Github username"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUser, {
      color: "rgb(255, 191, 116)",
      size: 22
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "https://github.com/".concat(login)
    }, login))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaStar, {
      color: "rgb(255, 215, 0)",
      size: 22
    }), stargazers_count.toLocaleString(), " stars"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCodeBranch, {
      color: "rgb(129, 195, 245)",
      size: 22
    }), forks.toLocaleString(), " forks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaExclamationTriangle, {
      color: "rgb(241, 138, 147)",
      size: 22
    }), open_issues.toLocaleString(), " open"))));
  }));
}

ReposGrid.propTypes = {
  repos: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array.isRequired)
};

var Popular = /*#__PURE__*/function (_React$Component) {
  _inherits(Popular, _React$Component);

  var _super = _createSuper(Popular);

  function Popular() {
    var _this;

    _classCallCheck(this, Popular);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedLanguage: 'All',
      repos: {},
      error: null
    });

    _defineProperty(_assertThisInitialized(_this), "updateLanguage", function (selectedLanguage) {
      _this.setState({
        selectedLanguage: selectedLanguage,
        error: null
      });

      if (!_this.state.repos[selectedLanguage]) {
        (0,_utils_api__WEBPACK_IMPORTED_MODULE_1__.fetchPopularRepo)(selectedLanguage).then(function (data) {
          _this.setState(function (_ref3) {
            var repos = _ref3.repos;
            return {
              repos: _objectSpread(_objectSpread({}, repos), {}, _defineProperty({}, selectedLanguage, data))
            };
          });
        })["catch"](function () {
          console.error('Error fetching Repos: ', error);

          _this.setState({
            error: 'There was an error fetching the repositories'
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isLoading", function () {
      var _this$state = _this.state,
          selectedLanguage = _this$state.selectedLanguage,
          repos = _this$state.repos,
          error = _this$state.error;
      return !repos[selectedLanguage] && error === null;
    });

    return _this;
  }

  _createClass(Popular, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateLanguage(this.state.selectedLanguage);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          selectedLanguage = _this$state2.selectedLanguage,
          repos = _this$state2.repos,
          error = _this$state2.error;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LanguagesNav, {
        selected: selectedLanguage,
        onUpdateLanguage: this.updateLanguage
      }), this.isLoading() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Fetching Repos"
      }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "center-text error"
      }, "error"), repos[selectedLanguage] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReposGrid, {
        repos: repos[selectedLanguage]
      }));
    }
  }]);

  return Popular;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ })

}]);
//# sourceMappingURL=src_components_Popular_js.main.js.map