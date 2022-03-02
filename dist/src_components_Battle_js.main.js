"use strict";
(self["webpackChunkgithub_battle"] = self["webpackChunkgithub_battle"] || []).push([["src_components_Battle_js"],{

/***/ "./src/components/Battle.js":
/*!**********************************!*\
  !*** ./src/components/Battle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Battle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Results */ "./src/components/Results.js");
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/theme */ "./src/context/theme.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
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








function Instructions() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_theme__WEBPACK_IMPORTED_MODULE_2__.ThemeConsumer, null, function (_ref) {
    var theme = _ref.theme;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "instructions-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
      className: "center-text header-lg"
    }, "Instructions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", {
      className: "container-sm grid center-text battle-instructions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: "header-sm"
    }, "Enter two Github users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUserFriends, {
      className: "bg-".concat(theme),
      color: "rgb(255, 191, 116)",
      size: 140
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: "header-sm"
    }, "Battle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaFighterJet, {
      className: "bg-".concat(theme),
      color: "#727272",
      size: 140
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: "header-sm"
    }, "See the winners"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTrophy, {
      className: "bg-".concat(theme),
      color: "rgb(255, 215, 0)",
      size: 140
    }))));
  });
}

var PlayerInput = /*#__PURE__*/function (_React$Component) {
  _inherits(PlayerInput, _React$Component);

  var _super = _createSuper(PlayerInput);

  function PlayerInput() {
    var _this;

    _classCallCheck(this, PlayerInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      username: ''
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      event.preventDefault();

      _this.props.onSubmit(_this.state.username);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.setState({
        username: event.target.value
      });
    });

    return _this;
  }

  _createClass(PlayerInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_theme__WEBPACK_IMPORTED_MODULE_2__.ThemeConsumer, null, function (_ref2) {
        var theme = _ref2.theme;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
          className: "column player",
          onSubmit: _this2.handleSubmit
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
          htmlFor: "username",
          className: "player-label"
        }, _this2.props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "row player-inputs"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
          type: "text",
          id: "username",
          className: "input-".concat(theme),
          placeholder: "github username",
          autoComplete: "off",
          value: _this2.state.username,
          onChange: _this2.handleChange
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          className: "btn ".concat(theme === 'dark' ? 'light-btn' : 'dark-btn'),
          type: "submit",
          disabled: !_this2.state.username
        }, "Submit")));
      });
    }
  }]);

  return PlayerInput;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

PlayerInput.propTypes = {
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired)
};

function PlayerPreview(_ref3) {
  var username = _ref3.username,
      onReset = _ref3.onReset,
      label = _ref3.label;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_theme__WEBPACK_IMPORTED_MODULE_2__.ThemeConsumer, null, function (_ref4) {
    var theme = _ref4.theme;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "column player"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: "player-label"
    }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row bg-".concat(theme)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "player-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "avatar-small",
      src: "https://github.com/".concat(username, ".png?size=200"),
      alt: "Avatar for ".concat(username)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "https://github.com/".concat(username),
      className: "link"
    }, username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      className: "btn-clear flex-center",
      onClick: onReset
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTimesCircle, {
      color: "rgb(194, 57, 42)",
      size: 26
    }))));
  });
}

PlayerPreview.propTypes = {
  username: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  onReset: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired)
};

var Battle = /*#__PURE__*/function (_React$Component2) {
  _inherits(Battle, _React$Component2);

  var _super2 = _createSuper(Battle);

  function Battle() {
    var _this3;

    _classCallCheck(this, Battle);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "state", {
      playerOne: null,
      playerTwo: null
    });

    _defineProperty(_assertThisInitialized(_this3), "handleSubmit", function (id, player) {
      _this3.setState(_defineProperty({}, id, player));
    });

    _defineProperty(_assertThisInitialized(_this3), "handleReset", function (id) {
      _this3.setState(_defineProperty({}, id, null));
    });

    return _this3;
  }

  _createClass(Battle, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          playerOne = _this$state.playerOne,
          playerTwo = _this$state.playerTwo;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Instructions, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "players-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: "center-text header-lg"
      }, "Players"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row space-around"
      }, playerOne === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PlayerInput, {
        label: "Player One",
        onSubmit: function onSubmit(player) {
          return _this4.handleSubmit('playerOne', player);
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PlayerPreview, {
        username: playerOne,
        label: "Player One",
        onReset: function onReset() {
          return _this4.handleReset('playerOne');
        }
      }), playerTwo === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PlayerInput, {
        label: "Player Two",
        onSubmit: function onSubmit(player) {
          return _this4.handleSubmit('playerTwo', player);
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PlayerPreview, {
        username: playerTwo,
        label: "Player Two",
        onReset: function onReset() {
          return _this4.handleReset('playerTwo');
        }
      })), playerOne && playerTwo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
        className: "btn dark-btn btn-space",
        to: {
          pathname: '/battle/results',
          search: "?playerOne=".concat(playerOne, "&playerTwo=").concat(playerTwo)
        }
      }, "Battle")));
    }
  }]);

  return Battle;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./src/components/Results.js":
/*!***********************************!*\
  !*** ./src/components/Results.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Results)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api */ "./src/utils/api.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./src/components/Card.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tooltip */ "./src/components/Tooltip.js");
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











function ProfileList(_ref) {
  var profile = _ref.profile;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "card-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUser, {
    color: "rgb(239,115,115)",
    size: 22
  }), profile.name), profile.location && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "User's Location"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaCompass, {
    color: "rgb(144,115,255)",
    size: 22
  }), profile.location)), profile.company && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "User's Company"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaBriefcase, {
    color: "rgb(144,115,255)",
    size: 22
  }), profile.company)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUsers, {
    color: "rgb(129,195,245)",
    size: 22
  }), profile.followers.toLocaleString(), " Followers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaUserFriends, {
    color: "rgb(64,183,95)",
    size: 22
  }), profile.following.toLocaleString(), " Following"));
}

ProfileList.propTypes = {
  profile: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired)
};

var Results = /*#__PURE__*/function (_React$Component) {
  _inherits(Results, _React$Component);

  var _super = _createSuper(Results);

  function Results() {
    var _this;

    _classCallCheck(this, Results);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      winner: null,
      loser: null,
      error: null,
      loading: true
    });

    return _this;
  }

  _createClass(Results, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // debugger;
      var _queryString$parse = query_string__WEBPACK_IMPORTED_MODULE_1__.parse(window.location.search),
          playerOne = _queryString$parse.playerOne,
          playerTwo = _queryString$parse.playerTwo;

      (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__.battle)([playerOne, playerTwo]).then(function (players) {
        _this2.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          loading: false
        });
      })["catch"](function (_ref2) {
        var message = _ref2.message;

        _this2.setState({
          error: message,
          loading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          winner = _this$state.winner,
          loser = _this$state.loser,
          error = _this$state.error,
          loading = _this$state.loading;

      if (loading === true) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
      }

      if (error) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
          className: "center-text error"
        }, error);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "grid space-around container-sm"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: winner.score === loser.score ? 'Tie' : 'Winner',
        subheader: "Score: ".concat(winner.score.toLocaleString()),
        avatar: winner.profile.avatar_url,
        href: winner.profile.html_url,
        name: winner.profile.login
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileList, {
        profile: winner.profile
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: winner.score === loser.score ? 'Tie' : 'Loser',
        subheader: "Score: ".concat(loser.score.toLocaleString()),
        avatar: loser.profile.avatar_url,
        href: loser.profile.html_url,
        name: loser.profile.login
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProfileList, {
        profile: loser.profile
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
        className: "btn dark-btn btn-space",
        to: "/battle"
      }, "Reset"));
    }
  }]);

  return Results;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ })

}]);
//# sourceMappingURL=src_components_Battle_js.main.js.map