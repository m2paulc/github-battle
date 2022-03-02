"use strict";
(self["webpackChunkgithub_battle"] = self["webpackChunkgithub_battle"] || []).push([["src_components_Card_js-src_components_Tooltip_js-src_utils_api_js"],{

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/theme */ "./src/context/theme.js");



function Card(_ref) {
  var header = _ref.header,
      subheader = _ref.subheader,
      avatar = _ref.avatar,
      href = _ref.href,
      name = _ref.name,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_theme__WEBPACK_IMPORTED_MODULE_1__.ThemeConsumer, null, function (_ref2) {
    var theme = _ref2.theme;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "card bg-".concat(theme)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
      className: "header-lg center-text"
    }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "avatar",
      src: avatar,
      alt: "Avatar for ".concat(name)
    }), subheader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", {
      className: "center-text margin-bottom-md"
    }, subheader), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
      className: "center-text"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      className: "link",
      href: href
    }, name)), children);
  });
}
Card.propTypes = {
  header: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  subheader: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  avatar: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  href: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};

/***/ }),

/***/ "./src/components/Hover.js":
/*!*********************************!*\
  !*** ./src/components/Hover.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Hover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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



var Hover = /*#__PURE__*/function (_Component) {
  _inherits(Hover, _Component);

  var _super = _createSuper(Hover);

  function Hover() {
    var _this;

    _classCallCheck(this, Hover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hovering: false
    });

    _defineProperty(_assertThisInitialized(_this), "mouseOver", function () {
      _this.setState({
        hovering: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "mouseOut", function () {
      _this.setState({
        hovering: false
      });
    });

    return _this;
  }

  _createClass(Hover, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        onMouseOver: this.mouseOver,
        onMouseOut: this.mouseOut
      }, this.props.children(this.state.hovering));
    }
  }]);

  return Hover;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/components/Tooltip.js":
/*!***********************************!*\
  !*** ./src/components/Tooltip.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Hover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hover */ "./src/components/Hover.js");

 // import withHover from './withHover';


var styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    position: 'absolute',
    width: '160px',
    left: '50%',
    bottom: '100%',
    boxSizing: 'border-box',
    marginLeft: '-80px',
    marginBottom: '5px',
    padding: '7px',
    borderRadius: '3px',
    backgroundColor: 'hsl(0, 0%, 20%, 0.9)',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px'
  }
};
/*// functional Component*/

function Tooltip(_ref) {
  var text = _ref.text,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Hover__WEBPACK_IMPORTED_MODULE_1__["default"], null, function (hovering) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: styles.container
    }, hovering === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: styles.tooltip
    }, text), children);
  });
}
Tooltip.propTypes = {
  text: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "battle": () => (/* binding */ battle),
/* harmony export */   "fetchPopularRepo": () => (/* binding */ fetchPopularRepo)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function getErrorMessage(message, username) {
  if (message === 'Not Found') {
    return "".concat(username, " doesn't exist");
  }

  return message;
} //get user profile from Github to use for Battle component


function getProfile(username) {
  return fetch("https://api.github.com/users/".concat(username)).then(function (res) {
    return res.json();
  }).then(function (profile) {
    if (profile.message) {
      //show error
      throw new Error(getErrorMessage(profile.message, username));
    }

    return profile;
  });
}

function getRepos(username) {
  return fetch("https://api.github.com/users/".concat(username, "/repos")).then(function (res) {
    return res.json();
  }).then(function (repos) {
    if (repos.message) {
      throw new Error(getErrorMessage(repos.message, username));
    }

    return repos;
  });
}

function getStarCount(repos) {
  return repos.reduce(function (count, _ref) {
    var stargazers_count = _ref.stargazers_count;
    return count + stargazers_count;
  }, 0);
}

function calculateScore(followers, repos) {
  return followers * 3 + getStarCount(repos);
}

function getUserData(player) {
  return Promise.all([getProfile(player), getRepos(player)]).then(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        profile = _ref3[0],
        repos = _ref3[1];

    return {
      profile: profile,
      score: calculateScore(profile.followers, repos)
    };
  });
}

function sortPlayers(players) {
  return players.sort(function (a, b) {
    return b.score - a.score;
  });
}

function battle(players) {
  return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(function (results) {
    return sortPlayers(results);
  });
} // fetch the popular repositories according to the selected Language
// from the github API
// this function receives the selected language

function fetchPopularRepo(language) {
  var endpoint = window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(language, "&sort=stars&order=desc&type=Repositories"));
  return fetch(endpoint).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (!data.items) {
      throw new Error(data.message);
    }

    return data.items;
  });
}

/***/ })

}]);
//# sourceMappingURL=src_components_Card_js-src_components_Tooltip_js-src_utils_api_js.main.js.map