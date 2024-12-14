"use strict";
(self["webpackChunkmemory_card"] = self["webpackChunkmemory_card"] || []).push([["main"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sound */ "./node_modules/react-sound/lib/index.js");
/* harmony import */ var _pages_LoadingPage_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/LoadingPage.jsx */ "./src/pages/LoadingPage.jsx");
/* harmony import */ var _pages_MainMenu_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/MainMenu.jsx */ "./src/pages/MainMenu.jsx");
/* harmony import */ var _pages_GamePage_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/GamePage.jsx */ "./src/pages/GamePage.jsx");
/* harmony import */ var _components_EndGameModal_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/EndGameModal.jsx */ "./src/components/EndGameModal.jsx");
/* harmony import */ var _components_Button_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Button.jsx */ "./src/components/Button.jsx");
/* harmony import */ var _assets_league_lobby_music_mp3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/league-lobby-music.mp3 */ "./src/assets/league-lobby-music.mp3");
/* harmony import */ var _assets_volume_on_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/volume-on.svg */ "./src/assets/volume-on.svg");
/* harmony import */ var _assets_volume_mute_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/volume-mute.svg */ "./src/assets/volume-mute.svg");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/App.css */ "./src/styles/App.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }












function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    championMasterList = _useState2[0],
    setChampionMasterList = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedChampions = _useState4[0],
    setSelectedChampions = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('easy'),
    _useState6 = _slicedToArray(_useState5, 2),
    difficulty = _useState6[0],
    setDifficulty = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    currentScore = _useState8[0],
    setCurrentScore = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    bestScore = _useState10[0],
    setBestScore = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    isLoading = _useState12[0],
    setIsLoading = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isGameStart = _useState14[0],
    setIsGameStart = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isGameOver = _useState16[0],
    setIsGameOver = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState18 = _slicedToArray(_useState17, 2),
    isPlaying = _useState18[0],
    setIsPlaying = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function fetchMainData() {
      return _fetchMainData.apply(this, arguments);
    }
    function _fetchMainData() {
      _fetchMainData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('https://ddragon.leagueoflegends.com/cdn/14.23.1/data/en_US/champion.json');
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();
            case 6:
              result = _context.sent;
              setChampionMasterList(Object.keys(result.data));
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error('Error fetching data:', _context.t0);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 10]]);
      }));
      return _fetchMainData.apply(this, arguments);
    }
    fetchMainData();
    setDifficulty('iron');
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    currentScore === 6 ? setDifficulty('silver') : currentScore === 18 ? setDifficulty('gold') : currentScore === 36 ? setDifficulty('platinum') : currentScore === 60 ? setDifficulty('diamond') : currentScore === 108 ? setDifficulty('challenger') : currentScore === 168 && setIsGameOver(true);
  }, [currentScore]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var loadingInterval = setInterval(function () {
      setIsLoading(false);
    }, 3000);
    return function () {
      return clearInterval(loadingInterval);
    };
  }, [isLoading]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var gameOverScreenInterval = setInterval(function () {
      if (isGameOver) {
        setIsGameOver(false);
        setIsGameStart(false);
      }
    }, 3000);
    return function () {
      return clearInterval(gameOverScreenInterval);
    };
  }, [isGameOver, isGameStart]);
  function checkIfAlreadySelected(e) {
    var champ = e.target.dataset.key;
    var selectedChampionsCopy = _toConsumableArray(selectedChampions);
    if (!selectedChampionsCopy.includes(champ)) {
      selectedChampionsCopy.push(champ);
      setSelectedChampions(selectedChampionsCopy);
      setCurrentScore(function (currentScore) {
        return currentScore + 1;
      });
      currentScore >= bestScore && setBestScore(function (bestScore) {
        return bestScore + 1;
      });
    } else {
      setCurrentScore(0);
      setSelectedChampions([]);
    }
  }
  function backToMainMenu() {
    setIsGameStart(false);
    setCurrentScore(0);
    setDifficulty('iron');
  }
  function toggleMusic() {
    isPlaying ? setIsPlaying(false) : setIsPlaying(true);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_LoadingPage_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null) : !isGameStart ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_MainMenu_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    startGame: function startGame() {
      setIsGameStart(true);
    },
    isLoading: isLoading
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_GamePage_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    championMasterList: championMasterList,
    difficulty: difficulty,
    currentScore: currentScore,
    bestScore: bestScore,
    checkIfAlreadySelected: checkIfAlreadySelected,
    backToMainMenu: backToMainMenu
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_EndGameModal_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isGameOver: isGameOver
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_sound__WEBPACK_IMPORTED_MODULE_1__["default"], {
    url: _assets_league_lobby_music_mp3__WEBPACK_IMPORTED_MODULE_7__["default"],
    playStatus: isPlaying ? react_sound__WEBPACK_IMPORTED_MODULE_1__["default"].status.PLAYING : react_sound__WEBPACK_IMPORTED_MODULE_1__["default"].status.STOPPED,
    playFromPosition: 0,
    loop: true
  }), !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
    source: isPlaying ? _assets_volume_on_svg__WEBPACK_IMPORTED_MODULE_8__ : _assets_volume_mute_svg__WEBPACK_IMPORTED_MODULE_9__,
    className: 'main-menu-buttons',
    id: 'music-control',
    buttonType: 'button',
    processClick: toggleMusic
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/Button.jsx":
/*!***********************************!*\
  !*** ./src/components/Button.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_components_Button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/components/Button.css */ "./src/styles/components/Button.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Button(_ref) {
  var text = _ref.text,
    source = _ref.source,
    _ref$alt = _ref.alt,
    alt = _ref$alt === void 0 ? 'no-image' : _ref$alt,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? 'button' : _ref$className,
    id = _ref.id,
    buttonType = _ref.buttonType,
    processClick = _ref.processClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    onClick: processClick,
    className: className,
    id: id,
    type: buttonType
  }, source && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: source,
    alt: alt
  }), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    id: id
  }, text)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/Card.jsx":
/*!*********************************!*\
  !*** ./src/components/Card.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_components_Card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/components/Card.css */ "./src/styles/components/Card.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_card_back_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/card-back.jpg */ "./src/assets/card-back.jpg");



function Card(_ref) {
  var champion = _ref.champion,
    shuffleChampionListToPlay = _ref.shuffleChampionListToPlay,
    checkIfAlreadySelected = _ref.checkIfAlreadySelected;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flip-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flip-card-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flip-card-front"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(champion, "_0.jpg"),
    alt: "".concat(champion, "-splash-art"),
    onClick: function onClick(e) {
      shuffleChampionListToPlay();
      checkIfAlreadySelected(e);
    },
    "data-key": champion
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flip-card-back"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: _assets_card_back_jpg__WEBPACK_IMPORTED_MODULE_2__,
    alt: "card-back-logo"
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/EndGameModal.jsx":
/*!*****************************************!*\
  !*** ./src/components/EndGameModal.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_components_EndGameModal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/components/EndGameModal.css */ "./src/styles/components/EndGameModal.css");
/* harmony import */ var _assets_victory_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/victory.png */ "./src/assets/victory.png");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function EndGameModal(_ref) {
  var isGameOver = _ref.isGameOver;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, isGameOver && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("dialog", {
    className: "endgame-modal-container",
    open: isGameOver
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "endgame-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
    src: _assets_victory_png__WEBPACK_IMPORTED_MODULE_1__,
    alt: "vicory-logo",
    className: "victory-logo"
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EndGameModal);

/***/ }),

/***/ "./src/components/EndRoundModal.jsx":
/*!******************************************!*\
  !*** ./src/components/EndRoundModal.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_components_EndRoundModal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/components/EndRoundModal.css */ "./src/styles/components/EndRoundModal.css");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/components/Button.jsx");
/* harmony import */ var _assets_rammus_ok_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/rammus-ok.gif */ "./src/assets/rammus-ok.gif");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function EndRoundModal(_ref) {
  var isRoundEndOpen = _ref.isRoundEndOpen,
    toggleModal = _ref.toggleModal;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, isRoundEndOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("dialog", {
    className: "endround-modal-container",
    open: isRoundEndOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "endround-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "endround-modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "You've Ranked Up")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "endround-modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "Congratulations Summoner!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    className: "description"
  }, "Keep on checking those champions accross Runterra and reach Challenger!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
    src: _assets_rammus_ok_gif__WEBPACK_IMPORTED_MODULE_2__,
    alt: "okay-emote",
    className: "okay-emote"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "endround-modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: 'CONTINUE',
    className: 'close-dialog-button',
    id: 'close-endround-dialog',
    buttonType: 'button',
    processClick: toggleModal
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EndRoundModal);

/***/ }),

/***/ "./src/components/MenuModal.jsx":
/*!**************************************!*\
  !*** ./src/components/MenuModal.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_components_MenuModal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/components/MenuModal.css */ "./src/styles/components/MenuModal.css");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/components/Button.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function MenuModal(_ref) {
  var isHowToPlayOpen = _ref.isHowToPlayOpen,
    toggleModal = _ref.toggleModal;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, isHowToPlayOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("dialog", {
    className: "modal-container",
    open: isHowToPlayOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "modal-header-title"
  }, "Game Mechanics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: 'X',
    className: 'close-dialog-button',
    id: 'close-game-mechanics',
    buttonType: 'button',
    processClick: toggleModal
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "game-instructions"
  }, "Pick a card for every turn. Make sure to not pick the same card twice. The number of cards will progress as you go further rounds:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "round-title"
  }, "Bronze Round:"), " 6 champion cards", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "round-title"
  }, "Silver Round:"), " 12 champion cards", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "round-title"
  }, "Gold Round:"), " 18 champion cards", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "round-title"
  }, "Platinum Round:"), " 24 champion cards", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "round-title"
  }, "Diamond Round:"), " 48 champion cards", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    className: "round-title"
  }, "Challenger Round:"), " 60 champion cards", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "modal-footer"
  }, "Best of luck, Summoner!"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuModal);

/***/ }),

/***/ "./src/main.jsx":
/*!**********************!*\
  !*** ./src/main.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.jsx */ "./src/App.jsx");





(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('root')).render(
/*#__PURE__*/
//<StrictMode>
react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)
//</StrictMode>,
);

/***/ }),

/***/ "./src/pages/GamePage.jsx":
/*!********************************!*\
  !*** ./src/pages/GamePage.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_pages_GamePage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/GamePage.css */ "./src/styles/pages/GamePage.css");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ "./src/components/Card.jsx");
/* harmony import */ var _components_EndRoundModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EndRoundModal */ "./src/components/EndRoundModal.jsx");
/* harmony import */ var _assets_fire_flame_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/fire-flame.gif */ "./src/assets/fire-flame.gif");
/* harmony import */ var _assets_lol_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/lol-logo.png */ "./src/assets/lol-logo.png");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







function GamePage(_ref) {
  var championMasterList = _ref.championMasterList,
    difficulty = _ref.difficulty,
    currentScore = _ref.currentScore,
    bestScore = _ref.bestScore,
    checkIfAlreadySelected = _ref.checkIfAlreadySelected,
    backToMainMenu = _ref.backToMainMenu;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    championListToPlay = _useState2[0],
    setChampionListToPlay = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    usedChampionsToPlay = _useState4[0],
    setUsedChampionsToPlay = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isRoundEndOpen = _useState6[0],
    setIsRoundEndOpen = _useState6[1];
  function createRandomChampionList(quantity) {
    var generatedChampionsToPlay = [];
    var usedChampionsToPlayCopy = _toConsumableArray(usedChampionsToPlay);
    while (generatedChampionsToPlay.length < quantity) {
      var randomIndex = Math.floor(Math.random() * championMasterList.length);
      var currentlyPickedChampion = championMasterList[randomIndex];
      if (!usedChampionsToPlayCopy.includes(currentlyPickedChampion)) {
        generatedChampionsToPlay.push(currentlyPickedChampion);
        usedChampionsToPlayCopy.push(currentlyPickedChampion);
      }
    }
    return {
      generatedChampionsToPlay: generatedChampionsToPlay,
      usedChampionsToPlayCopy: usedChampionsToPlayCopy
    };
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (championMasterList.length > 0) {
      if (difficulty === "iron") {
        var newChampionsSet = createRandomChampionList(6);
        setChampionListToPlay(newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(newChampionsSet.usedChampionsToPlayCopy);
      } else if (difficulty === "silver") {
        var _newChampionsSet = createRandomChampionList(12);
        setChampionListToPlay(_newChampionsSet.generatedChampionsToPlay);
        setUsedChampionsToPlay(_newChampionsSet.usedChampionsToPlayCopy);
        setIsRoundEndOpen(true);
      } else if (difficulty === "gold") {
        var _newChampionsSet2 = createRandomChampionList(18);
        setChampionListToPlay(_newChampionsSet2.generatedChampionsToPlay);
        setUsedChampionsToPlay(_newChampionsSet2.usedChampionsToPlayCopy);
        setIsRoundEndOpen(true);
      } else if (difficulty === "platinum") {
        var _newChampionsSet3 = createRandomChampionList(24);
        setChampionListToPlay(_newChampionsSet3.generatedChampionsToPlay);
        setUsedChampionsToPlay(_newChampionsSet3.usedChampionsToPlayCopy);
        setIsRoundEndOpen(true);
      } else if (difficulty === "diamond") {
        var _newChampionsSet4 = createRandomChampionList(48);
        setChampionListToPlay(_newChampionsSet4.generatedChampionsToPlay);
        setUsedChampionsToPlay(_newChampionsSet4.usedChampionsToPlayCopy);
        setIsRoundEndOpen(true);
      } else if (difficulty === "challenger") {
        var _newChampionsSet5 = createRandomChampionList(60);
        setChampionListToPlay(_newChampionsSet5.generatedChampionsToPlay);
        setUsedChampionsToPlay(_newChampionsSet5.usedChampionsToPlayCopy);
        setIsRoundEndOpen(true);
      }
    }
  }, [championMasterList, difficulty]);
  function shuffleChampionListToPlay() {
    var shuffled = championListToPlay.map(function (champion) {
      return {
        sort: Math.random(),
        value: champion
      };
    }).sort(function (a, b) {
      return a.sort - b.sort;
    }).map(function (a) {
      return a.value;
    });
    setChampionListToPlay(shuffled);
  }
  function toggleModal(e) {
    var clicked = e.target.id;
    clicked === "close-endround-dialog" && setIsRoundEndOpen(false);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lol-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_lol_logo_png__WEBPACK_IMPORTED_MODULE_5__,
    alt: "lol-logo",
    className: "lol-logo",
    onClick: backToMainMenu
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: backToMainMenu
  }, "Memory Card Game"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-container",
    id: "game-page-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "current-tier-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Your Rank: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    key: difficulty,
    src: "public/".concat(difficulty, ".png"),
    alt: "".concat(difficulty, "-logo"),
    className: "current-tier-logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "tier-label"
  }, difficulty)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "scoreboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "current-score"
  }, "Current Score: ", currentScore), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "best-score-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_fire_flame_gif__WEBPACK_IMPORTED_MODULE_4__,
    alt: "flame-gif",
    className: "flame-gif"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "best-score"
  }, "Best Score: ", bestScore))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "play-card-container"
  }, championListToPlay.map(function (champion, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: "".concat(champion, "-").concat(Date.now()),
      champion: champion,
      shuffleChampionListToPlay: shuffleChampionListToPlay,
      checkIfAlreadySelected: checkIfAlreadySelected
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_EndRoundModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isRoundEndOpen: isRoundEndOpen,
    toggleModal: toggleModal
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GamePage);

/***/ }),

/***/ "./src/pages/LoadingPage.jsx":
/*!***********************************!*\
  !*** ./src/pages/LoadingPage.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingPage: () => (/* binding */ LoadingPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_pages_LoadingPage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/pages/LoadingPage.css */ "./src/styles/pages/LoadingPage.css");
/* harmony import */ var _assets_teemo_running_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/teemo_running.gif */ "./src/assets/teemo_running.gif");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }




function LoadingPage(_ref) {
  _objectDestructuringEmpty(_ref);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    percentage = _useState2[0],
    setPercentage = _useState2[1];
  var progressStyle = {
    height: "100%",
    width: "".concat(percentage, "%"),
    backgroundColor: "#ae914b",
    borderRadius: "inherit",
    border: "2px solid black",
    textAlign: "right"
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var interval = setInterval(function () {
      setPercentage(function (prevPercentage) {
        if (prevPercentage >= 100) return percentage;
        return prevPercentage + Math.floor(Math.random() * 2);
      });
    }, 10);
    return function () {
      return clearInterval(interval);
    };
  }, [percentage]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "page-container",
    id: "loading-page-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    id: "gif-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("img", {
    src: _assets_teemo_running_gif__WEBPACK_IMPORTED_MODULE_1__,
    id: "loading-page-gif"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    id: "loading-text"
  }, "Loading..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    id: "loading-bar-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    id: "progress",
    style: progressStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    id: "progress-label"
  }, "".concat(percentage, "%")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingPage);

/***/ }),

/***/ "./src/pages/MainMenu.jsx":
/*!********************************!*\
  !*** ./src/pages/MainMenu.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_pages_MainMenu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/MainMenu.css */ "./src/styles/pages/MainMenu.css");
/* harmony import */ var _assets_League_of_Legends_Logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/League-of-Legends-Logo.png */ "./src/assets/League-of-Legends-Logo.png");
/* harmony import */ var _components_Button_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button.jsx */ "./src/components/Button.jsx");
/* harmony import */ var _components_MenuModal_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MenuModal.jsx */ "./src/components/MenuModal.jsx");
/* harmony import */ var _assets_github_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/github.svg */ "./src/assets/github.svg");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







function MainMenu(_ref) {
  var startGame = _ref.startGame,
    isLoading = _ref.isLoading;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHowToPlayOpen = _useState2[0],
    setIsHowToPlayOpen = _useState2[1];
  function toggleModal(e) {
    var clicked = e.target.id;
    clicked === "game-mechanics" ? setIsHowToPlayOpen(true) : setIsHowToPlayOpen(false);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-container",
    id: "main-menu-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main-menu-logo-space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "main-menu-logo",
    src: _assets_League_of_Legends_Logo_png__WEBPACK_IMPORTED_MODULE_2__,
    alt: "league-logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "main-menu-logo-text"
  }, "Memory Card Game")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: 'Start Game',
    className: 'main-menu-buttons',
    id: 'start-game',
    buttonType: 'button',
    processClick: startGame
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Button_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: 'How To Play',
    className: 'main-menu-buttons',
    id: 'game-mechanics',
    buttonType: 'button',
    processClick: toggleModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MenuModal_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isHowToPlayOpen: isHowToPlayOpen,
    toggleModal: toggleModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "github-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_github_svg__WEBPACK_IMPORTED_MODULE_5__,
    alt: "github-logo",
    className: "github-logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "This project is made by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/kbgarcia8/react-dumps/tree/main/memory-card-game"
  }, "kbgarcia8"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\xA9 League of Legends (Patch 14.23.1) and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://developer.riotgames.com/docs/lol"
  }, "Riot Developer API")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainMenu);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/App.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/App.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.page-container {
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;  
}
#music-control{
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3vmax;
  width: 2.5vmax;
  right: 2vmin;
}
.main-menu-buttons:active{
  transform: translateY(10%);
}`, "",{"version":3,"sources":["webpack://./src/styles/App.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,cAAc;EACd,YAAY;AACd;AACA;EACE,0BAA0B;AAC5B","sourcesContent":[".page-container {\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;  \n}\n#music-control{\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 3vmax;\n  width: 2.5vmax;\n  right: 2vmin;\n}\n.main-menu-buttons:active{\n  transform: translateY(10%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/Button.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/components/Button.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.button {
    width: 75%;
    min-height: 75%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.25vmin;
    cursor: pointer;
    position: relative;
    outline: none;
    transition: all 0.2s ease-in-out;
  }
  .button img {
    width: 25%;
  }
  .button:active {
    transform: translateY(3px);
  }`, "",{"version":3,"sources":["webpack://./src/styles/components/Button.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,eAAe;IACf,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,6BAA6B;IAC7B,mJAAmJ;IACnJ,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,gCAAgC;EAClC;EACA;IACE,UAAU;EACZ;EACA;IACE,0BAA0B;EAC5B","sourcesContent":[".button {\r\n    width: 75%;\r\n    min-height: 75%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-size: 1.25vmin;\r\n    cursor: pointer;\r\n    position: relative;\r\n    outline: none;\r\n    transition: all 0.2s ease-in-out;\r\n  }\r\n  .button img {\r\n    width: 25%;\r\n  }\r\n  .button:active {\r\n    transform: translateY(3px);\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/Card.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/components/Card.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.flip-card {
  background-color: transparent;
  width: 12.5vmax;
  height: 20vmax;    
  margin: 1vmin;
  perspective: 1000px;
  border: 2px rgb(104, 104, 104) solid;
  border-radius: 1rem;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border: double 4px transparent;
  background: linear-gradient(white, white) padding-box, linear-gradient(to bottom, #94722f, #7a5c29) border-box;
  border-radius: 1rem;
}

.flip-card .flip-card-inner {
  animation: cardFlip 500ms ease 0s 1 normal forwards;
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 0.75rem;
  overflow: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}
.flip-card-front img, .flip-card-back img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.flip-card-back {
  background-color: transparent;
  color: white;
  transform: rotateY(180deg);
}
@keyframes cardFlip {
  0% {
    transform: rotateY(0deg);
  }    
  17% {
    transform: rotateY(60deg);
  }
  33% {
    transform: rotateY(120deg);
  }    
  50% {
    transform: rotateY(180deg);
  }
  67% {
    transform: rotateY(120deg);
  }    
  83% {
    transform: rotateY(60deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/components/Card.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;EAC7B,eAAe;EACf,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,oCAAoC;EACpC,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,0BAA0B;EAC1B,4BAA4B;EAC5B,8BAA8B;EAC9B,8GAA8G;EAC9G,mBAAmB;AACrB;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,mCAAmC;EACnC,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,0BAA0B;AAC5B;AACA;EACE;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;AACF","sourcesContent":[".flip-card {\r\n  background-color: transparent;\r\n  width: 12.5vmax;\r\n  height: 20vmax;    \r\n  margin: 1vmin;\r\n  perspective: 1000px;\r\n  border: 2px rgb(104, 104, 104) solid;\r\n  border-radius: 1rem;\r\n}\r\n.flip-card-inner {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  transition: transform 0.8s;\r\n  transform-style: preserve-3d;\r\n  border: double 4px transparent;\r\n  background: linear-gradient(white, white) padding-box, linear-gradient(to bottom, #94722f, #7a5c29) border-box;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.flip-card .flip-card-inner {\r\n  animation: cardFlip 500ms ease 0s 1 normal forwards;\r\n}\r\n\r\n.flip-card-front, .flip-card-back {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  backface-visibility: hidden;\r\n  -webkit-backface-visibility: hidden;\r\n  border-radius: 0.75rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.flip-card-front {\r\n  background-color: #bbb;\r\n  color: black;\r\n}\r\n.flip-card-front img, .flip-card-back img{\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n.flip-card-back {\r\n  background-color: transparent;\r\n  color: white;\r\n  transform: rotateY(180deg);\r\n}\r\n@keyframes cardFlip {\r\n  0% {\r\n    transform: rotateY(0deg);\r\n  }    \r\n  17% {\r\n    transform: rotateY(60deg);\r\n  }\r\n  33% {\r\n    transform: rotateY(120deg);\r\n  }    \r\n  50% {\r\n    transform: rotateY(180deg);\r\n  }\r\n  67% {\r\n    transform: rotateY(120deg);\r\n  }    \r\n  83% {\r\n    transform: rotateY(60deg);\r\n  }\r\n  100% {\r\n    transform: rotateY(0deg);\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/EndGameModal.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/components/EndGameModal.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.endgame-modal-container {
    border: none !important;
    background-color: rgba(255, 255, 255, 0.205);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    animation: fade-in 1000ms forwards;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    align-items: center;
  }
  .endgame-modal {
    box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 2s ease-out;
    width: 95vmin;
    height: 75vmin;
    margin: 3vmin;
    letter-spacing: 1px;
    font-family: 'Spiegel', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    background: #1e2328;
    color: #cdbe91;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
    border-width: 5px;
    border-style: solid;
    animation: scale-in 1000ms forwards, fade-in 1000ms forwards;
  }
  .victory-logo{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes scale-in {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  `, "",{"version":3,"sources":["webpack://./src/styles/components/EndGameModal.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,4CAA4C;IAC5C,kCAAkC;IAClC,0BAA0B;IAC1B,YAAY;IACZ,aAAa;IACb,UAAU;IACV,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,kBAAkB;IAClB,kCAAkC;IAClC,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,uEAAuE;IACvE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB;;gBAEY;IACZ,mBAAmB;IACnB,cAAc;IACd,0DAA0D;IAC1D,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;IACnB,4DAA4D;EAC9D;EACA;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;EACnB;EACA;IACE;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;EACF;EACA;IACE;MACE,2CAA2C;IAC7C;IACA;MACE,yCAAyC;IAC3C;EACF","sourcesContent":[".endgame-modal-container {\r\n    border: none !important;\r\n    background-color: rgba(255, 255, 255, 0.205);\r\n    -webkit-backdrop-filter: blur(5px);\r\n    backdrop-filter: blur(5px);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 0;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    position: absolute;\r\n    animation: fade-in 1000ms forwards;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .endgame-modal {\r\n    box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    transition: 2s ease-out;\r\n    width: 95vmin;\r\n    height: 75vmin;\r\n    margin: 3vmin;\r\n    letter-spacing: 1px;\r\n    font-family: 'Spiegel', system-ui, -apple-system, BlinkMacSystemFont,\r\n      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',\r\n      sans-serif;\r\n    background: #1e2328;\r\n    color: #cdbe91;\r\n    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);\r\n    border-image-slice: 1;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    animation: scale-in 1000ms forwards, fade-in 1000ms forwards;\r\n  }\r\n  .victory-logo{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n  }\r\n  @keyframes fade-in {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  @keyframes scale-in {\r\n    0% {\r\n      transform: translate(-50%, -50%) scale(0.5);\r\n    }\r\n    100% {\r\n      transform: translate(-50%, -50%) scale(1);\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/EndRoundModal.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/components/EndRoundModal.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.endround-modal-container {
    border: none !important;
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    animation: fade-in 1000ms forwards;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    align-items: center;
  }
  .endround-modal {
    box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 2s ease-out;
    width: 75vmin;
    height: 75vmin;
    margin: 3vmin;
    letter-spacing: 1px;
    font-family: 'Spiegel', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    padding: 5px 15px;
    background: #1e2328;
    color: #cdbe91;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
    border-width: 5px;
    border-style: solid;
    animation: scale-in 1000ms forwards, fade-in 1000ms forwards;
  }
  .endround-modal-header {
    display: flex;
    justify-content: center;
    font-size: 5vmin;
  }
  .endround-modal-body{
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .endround-modal-body .description{
    margin: 3.5vmin;
  }
  .okay-emote{
    width: 50%;
    margin: 1vmin;
  }
  .endround-modal-footer{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #close-endround-dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1e2328;
    color: #cdbe91;
    font-size: 4vmin;
    font-family: 'Marcellus SC', serif;
    cursor: pointer;
    box-shadow: inset 0 0 2px #000000;
    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
    border-image-slice: 1;
    border-width: 2px;
    padding: 0.5vmin;
    margin: 1vmin;
  }
  .close-dialog-button:hover {
    text-shadow: 0 0 5px #ffffff80;
    box-shadow: 0 0 8px 0 #ffffff50;
    background: linear-gradient(to bottom, #1e2328, #433d2b);
    cursor: pointer;
    transition: 0.1s;
  }
  @keyframes fade-out {
    0% {
      opacity: 1;
      display: block;
    }
    100% {
      opacity: 0;
      display: none;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes scale-in {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  @keyframes scale-out {
    0% {
      transform: translate(-50%, -50%) scale(1);
      display: block;
    }
    100% {
      transform: translate(-50%, -50%) scale(0.5);
      display: none;
    }
  }
  `, "",{"version":3,"sources":["webpack://./src/styles/components/EndRoundModal.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,0CAA0C;IAC1C,kCAAkC;IAClC,0BAA0B;IAC1B,YAAY;IACZ,aAAa;IACb,UAAU;IACV,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,kBAAkB;IAClB,kCAAkC;IAClC,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,uEAAuE;IACvE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB;;gBAEY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;IACd,0DAA0D;IAC1D,qBAAqB;IACrB,iBAAiB;IACjB,mBAAmB;IACnB,4DAA4D;EAC9D;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,eAAe;EACjB;EACA;IACE,UAAU;IACV,aAAa;EACf;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,cAAc;IACd,gBAAgB;IAChB,kCAAkC;IAClC,eAAe;IACf,iCAAiC;IACjC,0DAA0D;IAC1D,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;EACf;EACA;IACE,8BAA8B;IAC9B,+BAA+B;IAC/B,wDAAwD;IACxD,eAAe;IACf,gBAAgB;EAClB;EACA;IACE;MACE,UAAU;MACV,cAAc;IAChB;IACA;MACE,UAAU;MACV,aAAa;IACf;EACF;EACA;IACE;MACE,UAAU;IACZ;IACA;MACE,UAAU;IACZ;EACF;EACA;IACE;MACE,2CAA2C;IAC7C;IACA;MACE,yCAAyC;IAC3C;EACF;EACA;IACE;MACE,yCAAyC;MACzC,cAAc;IAChB;IACA;MACE,2CAA2C;MAC3C,aAAa;IACf;EACF","sourcesContent":[".endround-modal-container {\r\n    border: none !important;\r\n    background-color: rgba(255, 255, 255, 0.4);\r\n    -webkit-backdrop-filter: blur(5px);\r\n    backdrop-filter: blur(5px);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 0;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    position: absolute;\r\n    animation: fade-in 1000ms forwards;\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: left;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .endround-modal {\r\n    box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    transition: 2s ease-out;\r\n    width: 75vmin;\r\n    height: 75vmin;\r\n    margin: 3vmin;\r\n    letter-spacing: 1px;\r\n    font-family: 'Spiegel', system-ui, -apple-system, BlinkMacSystemFont,\r\n      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',\r\n      sans-serif;\r\n    padding: 5px 15px;\r\n    background: #1e2328;\r\n    color: #cdbe91;\r\n    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);\r\n    border-image-slice: 1;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    animation: scale-in 1000ms forwards, fade-in 1000ms forwards;\r\n  }\r\n  .endround-modal-header {\r\n    display: flex;\r\n    justify-content: center;\r\n    font-size: 5vmin;\r\n  }\r\n  .endround-modal-body{\r\n    display: flex;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  .endround-modal-body .description{\r\n    margin: 3.5vmin;\r\n  }\r\n  .okay-emote{\r\n    width: 50%;\r\n    margin: 1vmin;\r\n  }\r\n  .endround-modal-footer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  #close-endround-dialog {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #1e2328;\r\n    color: #cdbe91;\r\n    font-size: 4vmin;\r\n    font-family: 'Marcellus SC', serif;\r\n    cursor: pointer;\r\n    box-shadow: inset 0 0 2px #000000;\r\n    border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);\r\n    border-image-slice: 1;\r\n    border-width: 2px;\r\n    padding: 0.5vmin;\r\n    margin: 1vmin;\r\n  }\r\n  .close-dialog-button:hover {\r\n    text-shadow: 0 0 5px #ffffff80;\r\n    box-shadow: 0 0 8px 0 #ffffff50;\r\n    background: linear-gradient(to bottom, #1e2328, #433d2b);\r\n    cursor: pointer;\r\n    transition: 0.1s;\r\n  }\r\n  @keyframes fade-out {\r\n    0% {\r\n      opacity: 1;\r\n      display: block;\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      display: none;\r\n    }\r\n  }\r\n  @keyframes fade-in {\r\n    0% {\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n    }\r\n  }\r\n  @keyframes scale-in {\r\n    0% {\r\n      transform: translate(-50%, -50%) scale(0.5);\r\n    }\r\n    100% {\r\n      transform: translate(-50%, -50%) scale(1);\r\n    }\r\n  }\r\n  @keyframes scale-out {\r\n    0% {\r\n      transform: translate(-50%, -50%) scale(1);\r\n      display: block;\r\n    }\r\n    100% {\r\n      transform: translate(-50%, -50%) scale(0.5);\r\n      display: none;\r\n    }\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/MenuModal.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/components/MenuModal.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal-container {
  border: none !important;
  background-color: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  animation: fade-in 1000ms forwards;
}
.modal {
  box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 2s ease-out;
  width: 75vmin;
  height: 75vmin;
  margin: 3vmin;
  letter-spacing: 1px;
  font-family: 'Spiegel', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  padding: 5px 15px;
  background: #1e2328;
  color: #cdbe91;
  border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
  border-image-slice: 1;
  border-width: 5px;
  border-style: solid;
  animation: scale-in 1000ms forwards, fade-in 1000ms forwards;
}
.modal-header {
  display: flex;
  justify-content: center;
}
.modal-header-title {
  font-size: 4.5vmin;
  font-weight: 900;
  margin-inline: 20%;
}
#close-game-mechanics {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e2328;
  color: #cdbe91;
  border: none;
  font-size: 4vmin;
  font-family: 'Marcellus SC', serif;
  cursor: pointer;
}
.game-instructions {
  white-space: break-spaces;
  text-align: left;
  font-size: 2.5vmin;
}
.round-title {
  text-decoration: underline;
  font-style: italic;
  font-weight: 500;
  font-size: 3vmin;
}
.modal-footer {
  font-size: 3.5vmin;
  font-weight: 900;
  margin-top: 10vmin;
}
@keyframes fade-out {
  0% {
    opacity: 1;
    display: block;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes scale-in {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes scale-out {
  0% {
    transform: translate(-50%, -50%) scale(1);
    display: block;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.5);
    display: none;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/components/MenuModal.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,0CAA0C;EAC1C,kCAAkC;EAClC,0BAA0B;EAC1B,YAAY;EACZ,aAAa;EACb,UAAU;EACV,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,kBAAkB;EAClB,kCAAkC;AACpC;AACA;EACE,uEAAuE;EACvE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,uBAAuB;EACvB,aAAa;EACb,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB;;cAEY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,0DAA0D;EAC1D,qBAAqB;EACrB,iBAAiB;EACjB,mBAAmB;EACnB,4DAA4D;AAC9D;AACA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE;IACE,UAAU;IACV,cAAc;EAChB;EACA;IACE,UAAU;IACV,aAAa;EACf;AACF;AACA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;AACA;EACE;IACE,2CAA2C;EAC7C;EACA;IACE,yCAAyC;EAC3C;AACF;AACA;EACE;IACE,yCAAyC;IACzC,cAAc;EAChB;EACA;IACE,2CAA2C;IAC3C,aAAa;EACf;AACF","sourcesContent":[".modal-container {\r\n  border: none !important;\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n  -webkit-backdrop-filter: blur(5px);\r\n  backdrop-filter: blur(5px);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 0;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  position: absolute;\r\n  animation: fade-in 1000ms forwards;\r\n}\r\n.modal {\r\n  box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  transition: 2s ease-out;\r\n  width: 75vmin;\r\n  height: 75vmin;\r\n  margin: 3vmin;\r\n  letter-spacing: 1px;\r\n  font-family: 'Spiegel', system-ui, -apple-system, BlinkMacSystemFont,\r\n    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',\r\n    sans-serif;\r\n  padding: 5px 15px;\r\n  background: #1e2328;\r\n  color: #cdbe91;\r\n  border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);\r\n  border-image-slice: 1;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  animation: scale-in 1000ms forwards, fade-in 1000ms forwards;\r\n}\r\n.modal-header {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.modal-header-title {\r\n  font-size: 4.5vmin;\r\n  font-weight: 900;\r\n  margin-inline: 20%;\r\n}\r\n#close-game-mechanics {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: #1e2328;\r\n  color: #cdbe91;\r\n  border: none;\r\n  font-size: 4vmin;\r\n  font-family: 'Marcellus SC', serif;\r\n  cursor: pointer;\r\n}\r\n.game-instructions {\r\n  white-space: break-spaces;\r\n  text-align: left;\r\n  font-size: 2.5vmin;\r\n}\r\n.round-title {\r\n  text-decoration: underline;\r\n  font-style: italic;\r\n  font-weight: 500;\r\n  font-size: 3vmin;\r\n}\r\n.modal-footer {\r\n  font-size: 3.5vmin;\r\n  font-weight: 900;\r\n  margin-top: 10vmin;\r\n}\r\n@keyframes fade-out {\r\n  0% {\r\n    opacity: 1;\r\n    display: block;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n    display: none;\r\n  }\r\n}\r\n@keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes scale-in {\r\n  0% {\r\n    transform: translate(-50%, -50%) scale(0.5);\r\n  }\r\n  100% {\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n}\r\n@keyframes scale-out {\r\n  0% {\r\n    transform: translate(-50%, -50%) scale(1);\r\n    display: block;\r\n  }\r\n  100% {\r\n    transform: translate(-50%, -50%) scale(0.5);\r\n    display: none;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Beaufort-Regular.ttf */ "./src/fonts/Beaufort-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Spiegel-Regular.ttf */ "./src/fonts/Spiegel-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Colfax-Black.otf */ "./src/fonts/Colfax-Black.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Beaufort';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
  font-family: 'Spiegel';
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
@font-face {
  font-family: 'Marcellus SC';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/marcellussc/v13/ke8iOgUHP1dg-Rmi6RWjbLE_htac.woff2)
    format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193,
    U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Colfax';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#root {
  max-width: 100vw;
  min-height: 100vh;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    270deg,
    rgba(20, 85, 91, 1) 0%,
    rgba(174, 145, 75, 1) 100%
  );
}
`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,4CAAuC;AACzC;AACA;EACE,sBAAsB;EACtB,gBAAgB;EAChB,4CAAsC;AACxC;AACA;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB;mBACiB;EACjB;;kCAEgC;AAClC;AACA;EACE,qBAAqB;EACrB,4CAAmC;AACrC;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB;;;;GAIC;AACH","sourcesContent":["@font-face {\n  font-family: 'Beaufort';\n  src: url(../fonts/Beaufort-Regular.ttf);\n}\n@font-face {\n  font-family: 'Spiegel';\n  font-weight: 400;\n  src: url(../fonts/Spiegel-Regular.ttf);\n}\n@font-face {\n  font-family: 'Marcellus SC';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/marcellussc/v13/ke8iOgUHP1dg-Rmi6RWjbLE_htac.woff2)\n    format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193,\n    U+2212, U+2215, U+FEFF, U+FFFD;\n}\n@font-face {\n  font-family: 'Colfax';\n  src: url(../fonts/Colfax-Black.otf);\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#root {\n  max-width: 100vw;\n  min-height: 100vh;\n  padding: 0;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: linear-gradient(\n    270deg,\n    rgba(20, 85, 91, 1) 0%,\n    rgba(174, 145, 75, 1) 100%\n  );\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/pages/GamePage.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/pages/GamePage.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#game-page-container{
    display: flex;
    padding-inline: 5vmax;
    justify-content: center;
    align-items: center;
}
.scoreboard, .current-tier-container{
    position: sticky;
    width: 20vmax;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Colfax";
    font-weight: 900;
    font-size: 3vmin;
    margin-block: 1vmin;
    color: #000000;
    text-shadow: 0.2vmin 0.2vmin 0 #cdbe91, 0.2vmin 0.2vmin 0 #cdbe91;
}
.current-tier-logo{
    width: 7.5vmax;
    transition: 1s;
    will-change: transform;
    animation: fall 250ms ease 0s 1 normal forwards;
}
.tier-label{
    text-transform: uppercase;
}
.best-score{
    position: absolute;
    width: 100%;
    right: 1vmin;
    padding: 2vmin;
}
.flame-gif{
    width: 7.5vmin;
    transform: translate(100%,-20%);
}
.play-card-container{
    max-width: 98.75vw;
    min-height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-inline: 2.5vmax;
    animation: onGameStart 500ms ease 0s 1 normal forwards;
}
header{
    position: absolute;
    top: 2vmin;
    left: 2vmin;
    width: 90%;
    height: 5vh;
    display: flex;
    flex-direction: column;
    background-color: transparent;
}
.lol-header{
    display: flex;
    justify-content: left;
    align-items: center;
}
.lol-header span{
    font-size: 2vmax;
    font-family: 'Spiegel';
    font-weight: 900;
    color: #ae914b;
    text-shadow: 0.5vmin 0.5vmin 0 #000000, 0.5vmin 0.5vmin 0 #000000;
    cursor: pointer;
}
.lol-header span:hover{
    filter: drop-shadow(5px 5px 10px rgba(20, 85, 91, 1) );
}
.lol-logo{
    width: 3.5%;
    margin-left: 2vmin;    
}
.lol-logo:hover{
    cursor: pointer;
    filter: drop-shadow(5px 5px 10px rgba(20, 85, 91, 1) );
}

@keyframes onGameStart {
	0% {
		transform: scale(0);
	}

	100% {
		transform: scale(1);
	}
}
@keyframes fall {
	0% {
		transform: translateY(-200%);
	}

	25% {
		transform: translateY(-150%);
	}

    50% {
		transform: translateY(-100%);
	}

	75% {
		transform: translateY(-50%);
	}

    100% {
		transform: translateY(0);
	}

}`, "",{"version":3,"sources":["webpack://./src/styles/pages/GamePage.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,gBAAgB;IAChB,mBAAmB;IACnB,cAAc;IACd,iEAAiE;AACrE;AACA;IACI,cAAc;IACd,cAAc;IACd,sBAAsB;IACtB,+CAA+C;AACnD;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,cAAc;AAClB;AACA;IACI,cAAc;IACd,+BAA+B;AACnC;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,uBAAuB;IACvB,sDAAsD;AAC1D;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,gBAAgB;IAChB,cAAc;IACd,iEAAiE;IACjE,eAAe;AACnB;AACA;IACI,sDAAsD;AAC1D;AACA;IACI,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,sDAAsD;AAC1D;;AAEA;CACC;EACC,mBAAmB;CACpB;;CAEA;EACC,mBAAmB;CACpB;AACD;AACA;CACC;EACC,4BAA4B;CAC7B;;CAEA;EACC,4BAA4B;CAC7B;;IAEG;EACF,4BAA4B;CAC7B;;CAEA;EACC,2BAA2B;CAC5B;;IAEG;EACF,wBAAwB;CACzB;;AAED","sourcesContent":["#game-page-container{\r\n    display: flex;\r\n    padding-inline: 5vmax;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.scoreboard, .current-tier-container{\r\n    position: sticky;\r\n    width: 20vmax;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: \"Colfax\";\r\n    font-weight: 900;\r\n    font-size: 3vmin;\r\n    margin-block: 1vmin;\r\n    color: #000000;\r\n    text-shadow: 0.2vmin 0.2vmin 0 #cdbe91, 0.2vmin 0.2vmin 0 #cdbe91;\r\n}\r\n.current-tier-logo{\r\n    width: 7.5vmax;\r\n    transition: 1s;\r\n    will-change: transform;\r\n    animation: fall 250ms ease 0s 1 normal forwards;\r\n}\r\n.tier-label{\r\n    text-transform: uppercase;\r\n}\r\n.best-score{\r\n    position: absolute;\r\n    width: 100%;\r\n    right: 1vmin;\r\n    padding: 2vmin;\r\n}\r\n.flame-gif{\r\n    width: 7.5vmin;\r\n    transform: translate(100%,-20%);\r\n}\r\n.play-card-container{\r\n    max-width: 98.75vw;\r\n    min-height: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    padding-inline: 2.5vmax;\r\n    animation: onGameStart 500ms ease 0s 1 normal forwards;\r\n}\r\nheader{\r\n    position: absolute;\r\n    top: 2vmin;\r\n    left: 2vmin;\r\n    width: 90%;\r\n    height: 5vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: transparent;\r\n}\r\n.lol-header{\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n}\r\n.lol-header span{\r\n    font-size: 2vmax;\r\n    font-family: 'Spiegel';\r\n    font-weight: 900;\r\n    color: #ae914b;\r\n    text-shadow: 0.5vmin 0.5vmin 0 #000000, 0.5vmin 0.5vmin 0 #000000;\r\n    cursor: pointer;\r\n}\r\n.lol-header span:hover{\r\n    filter: drop-shadow(5px 5px 10px rgba(20, 85, 91, 1) );\r\n}\r\n.lol-logo{\r\n    width: 3.5%;\r\n    margin-left: 2vmin;    \r\n}\r\n.lol-logo:hover{\r\n    cursor: pointer;\r\n    filter: drop-shadow(5px 5px 10px rgba(20, 85, 91, 1) );\r\n}\r\n\r\n@keyframes onGameStart {\r\n\t0% {\r\n\t\ttransform: scale(0);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n@keyframes fall {\r\n\t0% {\r\n\t\ttransform: translateY(-200%);\r\n\t}\r\n\r\n\t25% {\r\n\t\ttransform: translateY(-150%);\r\n\t}\r\n\r\n    50% {\r\n\t\ttransform: translateY(-100%);\r\n\t}\r\n\r\n\t75% {\r\n\t\ttransform: translateY(-50%);\r\n\t}\r\n\r\n    100% {\r\n\t\ttransform: translateY(0);\r\n\t}\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/pages/LoadingPage.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/pages/LoadingPage.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#loading-page-container {
  animation: loadingPageIsDone 500ms ease-in-out 2.75s 1 reverse forwards;
}
#gif-container {
  width: 35%;
  height: 50%;
}
#loading-page-gif {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  left: 5%;
}
#loading-text {
  font-size: 2.5vmax;
  font-family: 'Beaufort';
  font-weight: 900;
  color: #ae914b;
  text-shadow: 0 0 3px #000000, 0 0 5px #000000;
  width: 100%;
  position: relative;
  bottom: 7.5vmin;
}
#loading-bar-container {
  height: 5vmin;
  width: 50%;
  background-color: #e0e0de;
  border-radius: 15vmax;
  margin-inline: 10vmin;
  position: relative;
  bottom: 5vmin;
  padding: 5px;
}
#progress {
  display: flex;
  align-items: center;
  justify-content: end;
}
#progress-label {
  color: black;
  font-weight: 900;
  font-family: 'Spiegel';
  font-size: 2vmin;
  padding: 1.5vmin;
}
@keyframes loadingPageIsDone {
  0% {
    opacity: 0;
    transform: scale(1.2);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/pages/LoadingPage.css"],"names":[],"mappings":"AAAA;EACE,uEAAuE;AACzE;AACA;EACE,UAAU;EACV,WAAW;AACb;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;AACV;AACA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,gBAAgB;EAChB,cAAc;EACd,6CAA6C;EAC7C,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,aAAa;EACb,UAAU;EACV,yBAAyB;EACzB,qBAAqB;EACrB,qBAAqB;EACrB,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE;IACE,UAAU;IACV,qBAAqB;EACvB;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;AACF","sourcesContent":["#loading-page-container {\r\n  animation: loadingPageIsDone 500ms ease-in-out 2.75s 1 reverse forwards;\r\n}\r\n#gif-container {\r\n  width: 35%;\r\n  height: 50%;\r\n}\r\n#loading-page-gif {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  left: 5%;\r\n}\r\n#loading-text {\r\n  font-size: 2.5vmax;\r\n  font-family: 'Beaufort';\r\n  font-weight: 900;\r\n  color: #ae914b;\r\n  text-shadow: 0 0 3px #000000, 0 0 5px #000000;\r\n  width: 100%;\r\n  position: relative;\r\n  bottom: 7.5vmin;\r\n}\r\n#loading-bar-container {\r\n  height: 5vmin;\r\n  width: 50%;\r\n  background-color: #e0e0de;\r\n  border-radius: 15vmax;\r\n  margin-inline: 10vmin;\r\n  position: relative;\r\n  bottom: 5vmin;\r\n  padding: 5px;\r\n}\r\n#progress {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: end;\r\n}\r\n#progress-label {\r\n  color: black;\r\n  font-weight: 900;\r\n  font-family: 'Spiegel';\r\n  font-size: 2vmin;\r\n  padding: 1.5vmin;\r\n}\r\n@keyframes loadingPageIsDone {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/pages/MainMenu.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/pages/MainMenu.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../assets/main_menu.jpg_large */ "./src/assets/main_menu.jpg_large"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#main-menu-container {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.main-menu-logo-space {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 65vmax;
  animation: mainMenuPulse 1500ms ease-in-out 0s infinite normal forwards;
}
.main-menu-logo {
  width: 60%;
}
.main-menu-logo-text {
  position: relative;
  bottom: 2vmin;
  font-size: 2.5vmax;
  font-family: 'Spiegel';
  font-weight: 900;
  color: #ae914b;
  width: 100%;
  text-shadow: 0.625vmin 0.625vmin 0 #000000, 0.625vmin 0.625vmin 0 #000000;
}
.main-menu-buttons {
  width: 30vmin;
  font-family: 'Marcellus SC', serif;
  font-size: 2.5vmin;
  font-weight: bolder;
  margin: 3vmin;
  letter-spacing: 1px;
  padding: 5px 15px;
  background: #1e2328;
  color: #cdbe91;
  box-shadow: inset 0 0 2px #000000;
  border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);
  border-image-slice: 1;
  border-width: 2px;
}

.main-menu-buttons:hover {
  text-shadow: 0 0 5px #ffffff80;
  box-shadow: 0 0 8px 0 #ffffff50;
  background: linear-gradient(to bottom, #1e2328, #433d2b);
  cursor: pointer;
  transition: 0.1s;
}

.main-menu-buttons:active {
  text-shadow: none;
  box-shadow: none;
  color: #cdbe9130;
}

footer{
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 7.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: black;
  color: #FFFF;
  font-family: "Spiegel", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
  font-size: 2vmin;
}
.github-info{
  display: flex;
  justify-content: center;
  align-items: center;
}
.github-logo{
  width: 1.5%;
  margin-inline: 1.25vmin;
}
a:link {
  color: #FFFF;
}
a:visited {
  color: #FFFF;
}
a:hover {
  color: #DDDD;
}
a:active {
  color: #cdbe91;
}
@keyframes mainMenuPulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/pages/MainMenu.css"],"names":[],"mappings":"AAAA;EACE,yDAAyD;EACzD,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,uEAAuE;AACzE;AACA;EACE,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,yEAAyE;AAC3E;AACA;EACE,aAAa;EACb,kCAAkC;EAClC,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,iCAAiC;EACjC,0DAA0D;EAC1D,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,+BAA+B;EAC/B,wDAAwD;EACxD,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,uBAAuB;EACvB,YAAY;EACZ,8JAA8J;EAC9J,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,uBAAuB;AACzB;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,cAAc;AAChB;AACA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,mBAAmB;EACrB;AACF","sourcesContent":["#main-menu-container {\r\n  background-image: url('../../assets/main_menu.jpg_large');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.main-menu-logo-space {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 65vmax;\r\n  animation: mainMenuPulse 1500ms ease-in-out 0s infinite normal forwards;\r\n}\r\n.main-menu-logo {\r\n  width: 60%;\r\n}\r\n.main-menu-logo-text {\r\n  position: relative;\r\n  bottom: 2vmin;\r\n  font-size: 2.5vmax;\r\n  font-family: 'Spiegel';\r\n  font-weight: 900;\r\n  color: #ae914b;\r\n  width: 100%;\r\n  text-shadow: 0.625vmin 0.625vmin 0 #000000, 0.625vmin 0.625vmin 0 #000000;\r\n}\r\n.main-menu-buttons {\r\n  width: 30vmin;\r\n  font-family: 'Marcellus SC', serif;\r\n  font-size: 2.5vmin;\r\n  font-weight: bolder;\r\n  margin: 3vmin;\r\n  letter-spacing: 1px;\r\n  padding: 5px 15px;\r\n  background: #1e2328;\r\n  color: #cdbe91;\r\n  box-shadow: inset 0 0 2px #000000;\r\n  border-image: linear-gradient(to bottom, #c8aa6d, #7a5c29);\r\n  border-image-slice: 1;\r\n  border-width: 2px;\r\n}\r\n\r\n.main-menu-buttons:hover {\r\n  text-shadow: 0 0 5px #ffffff80;\r\n  box-shadow: 0 0 8px 0 #ffffff50;\r\n  background: linear-gradient(to bottom, #1e2328, #433d2b);\r\n  cursor: pointer;\r\n  transition: 0.1s;\r\n}\r\n\r\n.main-menu-buttons:active {\r\n  text-shadow: none;\r\n  box-shadow: none;\r\n  color: #cdbe9130;\r\n}\r\n\r\nfooter{\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100vw;\r\n  height: 7.5vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  background-color: black;\r\n  color: #FFFF;\r\n  font-family: \"Spiegel\", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 2vmin;\r\n}\r\n.github-info{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.github-logo{\r\n  width: 1.5%;\r\n  margin-inline: 1.25vmin;\r\n}\r\na:link {\r\n  color: #FFFF;\r\n}\r\na:visited {\r\n  color: #FFFF;\r\n}\r\na:hover {\r\n  color: #DDDD;\r\n}\r\na:active {\r\n  color: #cdbe91;\r\n}\r\n@keyframes mainMenuPulse {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    transform: scale(1.1);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/league-lobby-music.mp3":
/*!*******************************************!*\
  !*** ./src/assets/league-lobby-music.mp3 ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "bc70561f2bab5e1945c5139e0e6e48e5.mp3");

/***/ }),

/***/ "./src/styles/App.css":
/*!****************************!*\
  !*** ./src/styles/App.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/App.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components/Button.css":
/*!******************************************!*\
  !*** ./src/styles/components/Button.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Button.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/Button.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components/Card.css":
/*!****************************************!*\
  !*** ./src/styles/components/Card.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Card_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Card.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/Card.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Card_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Card_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Card_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components/EndGameModal.css":
/*!************************************************!*\
  !*** ./src/styles/components/EndGameModal.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_EndGameModal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./EndGameModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/EndGameModal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_EndGameModal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_EndGameModal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_EndGameModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_EndGameModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components/EndRoundModal.css":
/*!*************************************************!*\
  !*** ./src/styles/components/EndRoundModal.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_EndRoundModal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./EndRoundModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/EndRoundModal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_EndRoundModal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_EndRoundModal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_EndRoundModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_EndRoundModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/components/MenuModal.css":
/*!*********************************************!*\
  !*** ./src/styles/components/MenuModal.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MenuModal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./MenuModal.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/MenuModal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_MenuModal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_MenuModal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_MenuModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_MenuModal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/pages/GamePage.css":
/*!***************************************!*\
  !*** ./src/styles/pages/GamePage.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_GamePage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./GamePage.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/pages/GamePage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_GamePage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_GamePage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_GamePage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_GamePage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/pages/LoadingPage.css":
/*!******************************************!*\
  !*** ./src/styles/pages/LoadingPage.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_LoadingPage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./LoadingPage.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/pages/LoadingPage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_LoadingPage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_LoadingPage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_LoadingPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_LoadingPage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/pages/MainMenu.css":
/*!***************************************!*\
  !*** ./src/styles/pages/MainMenu.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_MainMenu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./MainMenu.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/pages/MainMenu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_MainMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_MainMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_MainMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_MainMenu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/League-of-Legends-Logo.png":
/*!***********************************************!*\
  !*** ./src/assets/League-of-Legends-Logo.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/69b55bcbc022d0ecefd8.png";

/***/ }),

/***/ "./src/assets/card-back.jpg":
/*!**********************************!*\
  !*** ./src/assets/card-back.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/da356584195d2ee271c4.jpg";

/***/ }),

/***/ "./src/assets/fire-flame.gif":
/*!***********************************!*\
  !*** ./src/assets/fire-flame.gif ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5b36abf4254e24859031.gif";

/***/ }),

/***/ "./src/assets/github.svg":
/*!*******************************!*\
  !*** ./src/assets/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/f79903d6565766bc3ad2.svg";

/***/ }),

/***/ "./src/assets/lol-logo.png":
/*!*********************************!*\
  !*** ./src/assets/lol-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7c465aac062320a32c45.png";

/***/ }),

/***/ "./src/assets/main_menu.jpg_large":
/*!****************************************!*\
  !*** ./src/assets/main_menu.jpg_large ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5c660c3820d372c951a3.jpg_large";

/***/ }),

/***/ "./src/assets/rammus-ok.gif":
/*!**********************************!*\
  !*** ./src/assets/rammus-ok.gif ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3ade6c7508bad297b629.gif";

/***/ }),

/***/ "./src/assets/teemo_running.gif":
/*!**************************************!*\
  !*** ./src/assets/teemo_running.gif ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3f6e6a5aa9a641d34926.gif";

/***/ }),

/***/ "./src/assets/victory.png":
/*!********************************!*\
  !*** ./src/assets/victory.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/337dc9e65e9f0d8aa750.png";

/***/ }),

/***/ "./src/assets/volume-mute.svg":
/*!************************************!*\
  !*** ./src/assets/volume-mute.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5071edc243ccb59cab49.svg";

/***/ }),

/***/ "./src/assets/volume-on.svg":
/*!**********************************!*\
  !*** ./src/assets/volume-on.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/047a1b8ca85eafe64d2d.svg";

/***/ }),

/***/ "./src/fonts/Beaufort-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Beaufort-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7ec4016e5f2e1fd953ae.ttf";

/***/ }),

/***/ "./src/fonts/Colfax-Black.otf":
/*!************************************!*\
  !*** ./src/fonts/Colfax-Black.otf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fae5735805895b5ee3f1.otf";

/***/ }),

/***/ "./src/fonts/Spiegel-Regular.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Spiegel-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/75129a00e21b5d216d8b.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-aaf996"], () => (__webpack_exec__("./src/main.jsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.a08154ee15ebc3b15937.js.map