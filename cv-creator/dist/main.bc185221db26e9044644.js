"use strict";
(self["webpackChunkcv_creator"] = self["webpackChunkcv_creator"] || []).push([["main"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/App.css */ "./src/styles/App.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/data.js */ "./src/components/data.js");
/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header.jsx */ "./src/components/Header.jsx");
/* harmony import */ var _components_WebsiteInfo_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/WebsiteInfo.jsx */ "./src/components/WebsiteInfo.jsx");
/* harmony import */ var _components_Button_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Button.jsx */ "./src/components/Button.jsx");
/* harmony import */ var _components_Controls_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Controls.jsx */ "./src/components/Controls.jsx");
/* harmony import */ var _components_PersonalInformations_EditPersonalInfo_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PersonalInformations/EditPersonalInfo.jsx */ "./src/components/PersonalInformations/EditPersonalInfo.jsx");
/* harmony import */ var _components_PersonalInformations_DisplayPersonalInfo_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/PersonalInformations/DisplayPersonalInfo.jsx */ "./src/components/PersonalInformations/DisplayPersonalInfo.jsx");
/* harmony import */ var _components_PanelOpener_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PanelOpener.jsx */ "./src/components/PanelOpener.jsx");
/* harmony import */ var _components_EducationalInformations_EditEducInfo_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/EducationalInformations/EditEducInfo.jsx */ "./src/components/EducationalInformations/EditEducInfo.jsx");
/* harmony import */ var _components_EducationalInformations_DisplayEducInfo_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/EducationalInformations/DisplayEducInfo.jsx */ "./src/components/EducationalInformations/DisplayEducInfo.jsx");
/* harmony import */ var _components_WorkExperienceInformations_EditWorkExpInfo_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/WorkExperienceInformations/EditWorkExpInfo.jsx */ "./src/components/WorkExperienceInformations/EditWorkExpInfo.jsx");
/* harmony import */ var _components_WorkExperienceInformations_DisplayWorkExpInfo_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/WorkExperienceInformations/DisplayWorkExpInfo.jsx */ "./src/components/WorkExperienceInformations/DisplayWorkExpInfo.jsx");
/* harmony import */ var _components_TechnicalSkillsInformations_EditTechSkillsInfo_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/TechnicalSkillsInformations/EditTechSkillsInfo.jsx */ "./src/components/TechnicalSkillsInformations/EditTechSkillsInfo.jsx");
/* harmony import */ var _components_TechnicalSkillsInformations_DisplayTechInfo_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/TechnicalSkillsInformations/DisplayTechInfo.jsx */ "./src/components/TechnicalSkillsInformations/DisplayTechInfo.jsx");
/* harmony import */ var _components_AestheticChanger_AestheticChanger_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/AestheticChanger/AestheticChanger.jsx */ "./src/components/AestheticChanger/AestheticChanger.jsx");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




















function App() {
  /* Main Editing Panels */
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    openMainPanelIndex = _useState2[0],
    setOpenMainPanelIndex = _useState2[1];
  function editInfoPanelToggle(e) {
    var activeIndex = parseInt(e.target.dataset.index);
    setOpenMainPanelIndex(function (prevIndex) {
      return prevIndex === activeIndex ? null : activeIndex;
    });
    var openMainPanelBtns = document.querySelectorAll("#edit-panel-btn-img");
    openMainPanelBtns.forEach(function (openMainPanelBtn, index) {
      if (openMainPanelBtns[index] == openMainPanelBtns[e.target.dataset.index]) {
        openMainPanelBtns[e.target.dataset.index].classList.toggle("rotated");
      } else {
        openMainPanelBtns[index].classList.remove("rotated");
      }
    });
  }
  /*Personal Information Section*/
  var personalData = _components_data_js__WEBPACK_IMPORTED_MODULE_2__.cvData.personalInformations;
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(personalData),
    _useState4 = _slicedToArray(_useState3, 2),
    personalInformations = _useState4[0],
    setPersonalInformations = _useState4[1];
  function processPersonalInfoChanges(e) {
    var key = e.target.dataset.key;
    setPersonalInformations(_objectSpread(_objectSpread({}, personalInformations), {}, _defineProperty({}, key, e.target.value)));
  }
  /*Educational Background Section*/
  var educBackgroundData = _components_data_js__WEBPACK_IMPORTED_MODULE_2__.cvData.educationalInformations;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(educBackgroundData),
    _useState6 = _slicedToArray(_useState5, 2),
    educInformations = _useState6[0],
    setEducInformations = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(educBackgroundData),
    _useState8 = _slicedToArray(_useState7, 2),
    educInformationsBackup = _useState8[0],
    setEducInformationsBackup = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    editingEducPanel = _useState10[0],
    setEditingEducPanel = _useState10[1];
  function processEducInfoChange(e) {
    var changedFormId = parseInt(e.target.closest("form").id);
    var key = e.target.dataset.key;
    setEducInformations(function (prevEducInfos) {
      return prevEducInfos.map(function (educInformation) {
        return educInformation.id === changedFormId ? _objectSpread(_objectSpread({}, educInformation), {}, _defineProperty({}, key, e.target.value)) : educInformation;
      });
    });
  }
  function editEducEntryToggle(e) {
    var activeEducEntry = parseInt(e.target.dataset.index);
    setEditingEducPanel(function (prevActiveEducEntry) {
      return prevActiveEducEntry === activeEducEntry ? null : activeEducEntry;
    });
    setEducInformationsBackup(_toConsumableArray(educInformations));
  }
  function deleteEducEntry(e) {
    var toDeleteEducEntryFormId = parseInt(e.target.closest("form").id);
    var filteredEducInfo = educInformations.filter(function (educInformation) {
      return educInformation.id !== toDeleteEducEntryFormId;
    });
    setEducInformations(filteredEducInfo);
    localStorage.setItem("savedEducInfos", JSON.stringify(filteredEducInfo));
  }
  function cancelEditEducEntry() {
    setEditingEducPanel(null);
    var retrievedEducInfos = localStorage.getItem("savedEducInfos");
    var parsedEducData = JSON.parse(retrievedEducInfos) || educInformationsBackup;
    setEducInformations(parsedEducData);
  }
  function saveEditEducEntry(e) {
    e.preventDefault();
    setEditingEducPanel(null);
    setEducInformationsBackup(_toConsumableArray(educInformations));
    localStorage.setItem("savedEducInfos", JSON.stringify(educInformations));
  }
  function addEducEntry() {
    var newEducInfoEntry = {
      id: Date.now(),
      universityName: "",
      degreeFinished: "",
      educationStartDate: "",
      educationEndDate: ""
    };
    setEducInformations(function (prevEducInformations) {
      return [].concat(_toConsumableArray(prevEducInformations), [newEducInfoEntry]);
    });
    localStorage.setItem("savedEducInfos", JSON.stringify([].concat(_toConsumableArray(educInformations), [newEducInfoEntry])));
  }
  /*Work Experience Section*/
  var workExperienceData = _components_data_js__WEBPACK_IMPORTED_MODULE_2__.cvData.workExperiences;
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(workExperienceData),
    _useState12 = _slicedToArray(_useState11, 2),
    workExpInformations = _useState12[0],
    setWorkExpInformations = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(workExperienceData),
    _useState14 = _slicedToArray(_useState13, 2),
    workExpInformationsBackup = _useState14[0],
    setWorkExpInformationsBackup = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    editingWorkExpPanel = _useState16[0],
    setEditingWorkExpPanel = _useState16[1];
  function processWorkExpInfoChange(e) {
    var changedFormId = parseInt(e.target.closest("form").id);
    var _e$target$dataset = e.target.dataset,
      key = _e$target$dataset.key,
      taskIndex = _e$target$dataset.index;
    console.log(changedFormId, key, taskIndex);
    setWorkExpInformations(function (prevWorkexpInfo) {
      return prevWorkexpInfo.map(function (workExpInformation) {
        if (workExpInformation.id === changedFormId && key !== "jobTasks" && taskIndex === undefined) {
          return _objectSpread(_objectSpread({}, workExpInformation), {}, _defineProperty({}, key, e.target.value));
        } else if (workExpInformation.id === changedFormId && key === "jobTasks" && taskIndex !== undefined) {
          var updatedTasks = _toConsumableArray(workExpInformation.jobTasks);
          updatedTasks[parseInt(taskIndex)] = e.target.value;
          return _objectSpread(_objectSpread({}, workExpInformation), {}, {
            jobTasks: updatedTasks
          });
        } else {
          return workExpInformation;
        }
      });
    });
  }
  function togglePresentCheckbox(e) {
    var changedFormId = parseInt(e.target.closest("form").id);
    var key = e.target.dataset.key;
    var isChecked = e.target.checked;
    var relatedEndDateForm = e.target.closest("div.toggle-btn-container").previousSibling;
    isChecked ? relatedEndDateForm.style.display = "none" : relatedEndDateForm.style.display = "flex";
    setWorkExpInformations(function (prevWorkexpInfo) {
      return prevWorkexpInfo.map(function (workExpInformation) {
        return workExpInformation.id === changedFormId && key === "isPresent" ? _objectSpread(_objectSpread({}, workExpInformation), {}, _defineProperty({}, key, isChecked)) : workExpInformation;
      });
    });
  }
  function addJobTask(e) {
    var addTaskBtnId = parseInt(e.target.id) || parseInt(e.target.closest("button").id);
    setWorkExpInformations(function (prevWorkexpInfo) {
      return prevWorkexpInfo.map(function (workExpInformation) {
        console.log(workExpInformation.id, addTaskBtnId);
        if (workExpInformation.id === addTaskBtnId) {
          var updatedTasks = [].concat(_toConsumableArray(workExpInformation.jobTasks), [""]);
          return _objectSpread(_objectSpread({}, workExpInformation), {}, {
            jobTasks: updatedTasks
          });
        } else {
          return workExpInformation;
        }
      });
    });
  }
  function deleteLastJobTask(e) {
    var deleteTaskBtnId = parseInt(e.target.id) || parseInt(e.target.closest("button").id);
    setWorkExpInformations(function (prevWorkexpInfo) {
      return prevWorkexpInfo.map(function (workExpInformation) {
        console.log(workExpInformation.id, deleteTaskBtnId);
        if (workExpInformation.id === deleteTaskBtnId) {
          var updatedTasks = _toConsumableArray(workExpInformation.jobTasks.slice(0, -1));
          return _objectSpread(_objectSpread({}, workExpInformation), {}, {
            jobTasks: updatedTasks
          });
        } else {
          return workExpInformation;
        }
      });
    });
  }
  function editWorkExpEntryToggle(e) {
    var activeWorkExpEntry = parseInt(e.target.dataset.index);
    setEditingWorkExpPanel(function (prevActiveWorkExpEntry) {
      return prevActiveWorkExpEntry === activeWorkExpEntry ? null : activeWorkExpEntry;
    });
    setWorkExpInformationsBackup(_toConsumableArray(workExpInformations));
  }
  function deleteWorkExpEntry(e) {
    var toDeleteWorkExpEntryFormId = parseInt(e.target.closest("form").id);
    var filteredWorkExpInfo = workExpInformations.filter(function (workExpInformation) {
      return workExpInformation.id !== toDeleteWorkExpEntryFormId;
    });
    setWorkExpInformations(filteredWorkExpInfo);
    localStorage.setItem("savedWorkExpInfos", JSON.stringify(filteredWorkExpInfo));
  }
  function cancelEditWorkExpEntry() {
    setEditingWorkExpPanel(null);
    var retrievedWorkExpInfos = localStorage.getItem("savedWorkExpInfos");
    var parsedWorkExpData = JSON.parse(retrievedWorkExpInfos) || workExpInformationsBackup;
    setWorkExpInformations(parsedWorkExpData);
  }
  function saveEditWorkExpEntry(e) {
    e.preventDefault();
    setEditingWorkExpPanel(null);
    setWorkExpInformationsBackup(_toConsumableArray(workExpInformations));
    localStorage.setItem("savedWorkExpInfos", JSON.stringify(workExpInformations));
  }
  function addWorkExpEntry() {
    var newWorkExpEntry = {
      id: Date.now(),
      companyName: "",
      jobPosition: "",
      experienceStartDate: "",
      experienceEndDate: "",
      isPresent: false,
      jobTasks: [""]
    };
    setWorkExpInformations(function (prevWorkexpInfo) {
      return [].concat(_toConsumableArray(prevWorkexpInfo), [newWorkExpEntry]);
    });
    localStorage.setItem("savedWorkExpInfos", JSON.stringify([].concat(_toConsumableArray(workExpInformations), [newWorkExpEntry])));
  }
  /* Technical Skills Section */
  var techSkillsData = _components_data_js__WEBPACK_IMPORTED_MODULE_2__.cvData.techSkills;
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(techSkillsData),
    _useState18 = _slicedToArray(_useState17, 2),
    techSkillsInformations = _useState18[0],
    setTechSkillsInformations = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(techSkillsData),
    _useState20 = _slicedToArray(_useState19, 2),
    techSkillsBackup = _useState20[0],
    setTechSkillsInformationsBackup = _useState20[1];
  function processTechSkillsInfoChange(e) {
    var techSkillIndex = e.target.dataset.key;
    if (e.target.closest("form").id === "techskills-info-form") {
      setTechSkillsInformations(function (prevTechSkills) {
        return prevTechSkills.map(function (prevTechSkill, index) {
          return index === parseInt(techSkillIndex) ? e.target.value : prevTechSkill;
        });
      });
    }
  }
  function addTechSkill(e) {
    e.target.closest("form").id === "techskills-info-form" && setTechSkillsInformations(function (prevTechSkills) {
      return [].concat(_toConsumableArray(prevTechSkills), [""]);
    });
    localStorage.setItem("savedTechSkillsInfos", JSON.stringify(techSkillsInformations));
  }
  function deleteTechSkill(e) {
    e.target.closest("form").id === "techskills-info-form" && setTechSkillsInformations(function (prevTechSkills) {
      return _toConsumableArray(prevTechSkills.slice(0, -1));
    });
    localStorage.setItem("savedTechSkillsInfos", JSON.stringify(techSkillsInformations));
  }
  function cancelEditTechSkillsEntry() {
    var arrowBtns = document.querySelectorAll("#edit-panel-btn-img");
    arrowBtns[3].classList.toggle('rotated');
    setOpenMainPanelIndex(null);
    var retrievedTechSkillsInfo = localStorage.getItem("savedTechSkillsInfos");
    var parsedTechSkillsData = JSON.parse(retrievedTechSkillsInfo) || techSkillsBackup;
    setTechSkillsInformations(parsedTechSkillsData);
  }
  function saveEditTechSkillsEntry(e) {
    e.preventDefault();
    var arrowBtns = document.querySelectorAll("#edit-panel-btn-img");
    arrowBtns[3].classList.toggle('rotated');
    setOpenMainPanelIndex(null);
    setTechSkillsInformationsBackup(_toConsumableArray(techSkillsInformations));
    localStorage.setItem("savedTechSkillsInfos", JSON.stringify(techSkillsInformations));
  }
  /* Control Button Functions */
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    editPanelCategory = _useState22[0],
    setEditPanelCategory = _useState22[1];
  function togglePanelCategory(e) {
    var index = e.currentTarget.dataset.index;
    setEditPanelCategory(parseInt(index));
  }
  function sampleDataFill() {
    setPersonalInformations(_components_data_js__WEBPACK_IMPORTED_MODULE_2__.cvData.personalInformations);
    setEducInformations(_components_data_js__WEBPACK_IMPORTED_MODULE_2__.cvData.educationalInformations);
    setWorkExpInformations(_components_data_js__WEBPACK_IMPORTED_MODULE_2__.cvData.workExperiences);
    setTechSkillsInformations(_components_data_js__WEBPACK_IMPORTED_MODULE_2__.cvData.techSkills);
  }
  function resetAndClearData() {
    setPersonalInformations('');
    setEducInformations([]);
    setWorkExpInformations([]);
    setTechSkillsInformations([]);
    localStorage.clear();
  }
  function downloadPDF() {
    return _downloadPDF.apply(this, arguments);
  }
  function _downloadPDF() {
    _downloadPDF = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var element, canvas, base64image, pdf, pageWidth, pageHeight, imgWidth, imgHeight, verticalOffset;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            element = document.querySelector(".preview-section");
            element.style.boxShadow = "none";
            element.style.filter = "none";
            if (element) {
              _context.next = 7;
              break;
            }
            console.error("Element not found!");
            return _context.abrupt("return");
          case 7:
            _context.next = 9;
            return html2canvas__WEBPACK_IMPORTED_MODULE_17___default()(element, {
              scale: 1,
              // Use lower scale to avoid memory issues
              useCORS: true
            });
          case 9:
            canvas = _context.sent;
            base64image = canvas.toDataURL("image/png");
            if (base64image) {
              _context.next = 14;
              break;
            }
            console.error("Failed to generate base64 image");
            return _context.abrupt("return");
          case 14:
            // Set up jsPDF
            pdf = new jspdf__WEBPACK_IMPORTED_MODULE_18__.jsPDF({
              orientation: "portrait",
              unit: "mm",
              format: "a4"
            });
            pageWidth = 210;
            pageHeight = 297;
            imgWidth = pageWidth;
            imgHeight = canvas.height * imgWidth / canvas.width;
            if (imgHeight > pageHeight) {
              pdf.addImage(base64image, "PNG", 0, 0, imgWidth, pageHeight);
            } else {
              verticalOffset = (pageHeight - imgHeight) / 2;
              pdf.addImage(base64image, "PNG", 0, verticalOffset, imgWidth, imgHeight);
            }
            pdf.save("resume.pdf");
            console.log("Resume downloaded successfully");
            _context.next = 27;
            break;
          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](0);
            console.error("Error generating the PDF:", _context.t0);
          case 27:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 24]]);
    }));
    return _downloadPDF.apply(this, arguments);
  }
  function printPDF() {
    return _printPDF.apply(this, arguments);
  }
  /* Style Toggling */
  function _printPDF() {
    _printPDF = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            alert("Feature still in progress, Coming soon!");
            /*try {
                const element = document.querySelector(".preview-section");
                if (!element) {
                    console.error("Element not found!");
                    return;
                }
                 // Generate canvas with A4 aspect ratio
                const canvas = await html2canvas(element, {
                    scale: 2, // High quality
                    useCORS: true,
                    backgroundColor: null, // Transparent background
                });
                 const base64image = canvas.toDataURL("image/png");
                 // A4 dimensions in pixels at 96 DPI
                const A4_WIDTH_PX = 794; // 210mm
                const A4_HEIGHT_PX = 1123; // 297mm
                 const imgWidth = A4_WIDTH_PX;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                 // Create an iframe for printing
                const iframe = document.createElement("iframe");
                iframe.style.position = "fixed";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.zIndex = "-1"; // Hide from view
                 document.body.appendChild(iframe);
                 // Write the image into the iframe with correct print styles
                const doc = iframe.contentDocument || iframe.contentWindow.document;
                doc.open();
                doc.write(`
                    <html>
                        <head>
                            <title>Print Resume</title>
                            <style>
                                @page {
                                    size: A4;
                                    margin: 0;
                                }
                                body {
                                    margin: 0;
                                    padding: 0;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    height: 100vh;
                                    background-color: white;
                                }
                                img {
                                    width: ${imgWidth}px;
                                    height: ${imgHeight}px;
                                    display: block;
                                }
                            </style>
                        </head>
                        <body>
                            <img src="${base64image}" alt="Resume Preview" />
                        </body>
                    </html>
                `);
                doc.close();
                 // Trigger print once iframe is loaded
                iframe.onload = () => {
                    iframe.contentWindow.print();
                     setTimeout(() => {
                        document.body.removeChild(iframe);
                    }, 1000);
                };
            } catch (error) {
                console.error("Error triggering print:", error);
            }*/
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _printPDF.apply(this, arguments);
  }
  function editAestheticPanelToggle() {
    console.log('toggle aesthetic panels');
  }
  var previewPersonalInfoStyle = {
    fontFamily: "Rubik",
    color: "#FFFFFF",
    backgroundColor: "#133E87"
  };
  var previewSectionHeaderStyle = {
    fontFamily: "Rubik",
    fontWeight: 900,
    //fontSize: `1.25vmax`, need to decide first if rem will be implemented
    textDecoration: "underline"
  };
  var previewEntriesStyle = {
    fontFamily: "Rubik"
    //fontSize: `1.25vmax`, need to decide first if rem will be implemented also how to implement different font size per p or div
  };
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(previewPersonalInfoStyle),
    _useState24 = _slicedToArray(_useState23, 2),
    personalInfoStyle = _useState24[0],
    setPersonalInfoStyle = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(previewSectionHeaderStyle),
    _useState26 = _slicedToArray(_useState25, 2),
    sectionHeaderStyle = _useState26[0],
    setSectionHeaderStyle = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(previewEntriesStyle),
    _useState28 = _slicedToArray(_useState27, 2),
    entriesStyle = _useState28[0],
    setEntriesStyle = _useState28[1];
  function processPersonalInfoStyleChange(e) {
    var key = e.target.dataset.key;
    setPersonalInfoStyle(_objectSpread(_objectSpread({}, personalInfoStyle), {}, _defineProperty({}, key, e.target.value)));
  }
  function processSectionHeaderStyle(e) {
    var key = e.target.dataset.key;
    setSectionHeaderStyle(_objectSpread(_objectSpread({}, sectionHeaderStyle), {}, _defineProperty({}, key, e.target.value)));
  }
  function processSectionDetailsStyle(e) {
    var key = e.target.dataset.key;
    setEntriesStyle(_objectSpread(_objectSpread({}, entriesStyle), {}, _defineProperty({}, key, e.target.value)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Header_jsx__WEBPACK_IMPORTED_MODULE_3__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "controls-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_WebsiteInfo_jsx__WEBPACK_IMPORTED_MODULE_4__.WebsiteInfo, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Controls_jsx__WEBPACK_IMPORTED_MODULE_6__.Controls, {
    toggleInformationPanel: togglePanelCategory,
    sampleDataFill: sampleDataFill,
    resetAndClearData: resetAndClearData,
    downloadPDF: downloadPDF,
    printPDF: printPDF
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "edit-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "edit-information-panels"
  }, editPanelCategory === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PanelOpener_jsx__WEBPACK_IMPORTED_MODULE_9__.PanelOpener, {
    text: "Personal Information",
    onClick: editInfoPanelToggle,
    dataIndex: 0
  }), openMainPanelIndex === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    id: "personal-info-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PersonalInformations_EditPersonalInfo_jsx__WEBPACK_IMPORTED_MODULE_7__.EditPersonalInfo, {
    props: personalInformations,
    handlePersonalInfoChange: processPersonalInfoChanges,
    isPanelShown: openMainPanelIndex === 0,
    formId: "personal-info-panel"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PanelOpener_jsx__WEBPACK_IMPORTED_MODULE_9__.PanelOpener, {
    text: "Educational Background",
    onClick: editInfoPanelToggle,
    dataIndex: 1
  }), openMainPanelIndex === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    id: "educational-info-panel"
  }, educInformations.map(function (educInformation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_EducationalInformations_EditEducInfo_jsx__WEBPACK_IMPORTED_MODULE_10__.EditEducInfo, {
      key: educInformation.id,
      props: educInformation,
      onClickEditEducInfo: editEducEntryToggle,
      isEditingEducInfo: editingEducPanel === educInformation.id,
      handleEducInfoChange: processEducInfoChange,
      EducInfoDeletion: deleteEducEntry,
      EducInfoCancelEdit: cancelEditEducEntry,
      EducInfoSaveEdit: saveEditEducEntry
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "add-educ-info-btn-space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Button_jsx__WEBPACK_IMPORTED_MODULE_5__.Button, {
    text: "",
    source: "/src/assets/plus.svg",
    alt: "add-educ-info",
    id: "add-educ-info-btn",
    processClick: addEducEntry
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PanelOpener_jsx__WEBPACK_IMPORTED_MODULE_9__.PanelOpener, {
    text: "Work Experience",
    onClick: editInfoPanelToggle,
    dataIndex: 2
  }), openMainPanelIndex === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    id: "workexp-info-panel"
  }, workExpInformations.map(function (workExpInformation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_WorkExperienceInformations_EditWorkExpInfo_jsx__WEBPACK_IMPORTED_MODULE_12__.EditWorkExpInfo, {
      key: workExpInformation.id,
      props: workExpInformation,
      onClickEditWorkExpInfo: editWorkExpEntryToggle,
      isEditingWorkExpInfo: editingWorkExpPanel === workExpInformation.id,
      handleWorkExpInfoChange: processWorkExpInfoChange,
      isPresentToggled: togglePresentCheckbox,
      addJobTask: addJobTask,
      deleteJobTask: deleteLastJobTask,
      WorkExpInfoDeletion: deleteWorkExpEntry,
      WorkExpInfoCancelEdit: cancelEditWorkExpEntry,
      WorkExpInfoSaveEdit: saveEditWorkExpEntry
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "add-workexp-btn-space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Button_jsx__WEBPACK_IMPORTED_MODULE_5__.Button, {
    text: "",
    source: "/src/assets/plus.svg",
    alt: "add-workexp",
    id: "add-workexp-btn",
    processClick: addWorkExpEntry
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PanelOpener_jsx__WEBPACK_IMPORTED_MODULE_9__.PanelOpener, {
    text: "Technical Skills",
    onClick: function onClick(e) {
      editInfoPanelToggle(e);
      setTechSkillsInformationsBackup(_toConsumableArray(techSkillsInformations));
    },
    dataIndex: 3
  }), openMainPanelIndex === 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    id: "techskills-info-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_TechnicalSkillsInformations_EditTechSkillsInfo_jsx__WEBPACK_IMPORTED_MODULE_14__.EditTechSkillsInfo, {
    techSkills: techSkillsInformations,
    handleTechSkillsInfoChange: processTechSkillsInfoChange,
    addTechSkill: addTechSkill,
    deleteTechSkill: deleteTechSkill,
    TechSkillsInfoCancelEdit: cancelEditTechSkillsEntry,
    TechSkillsInfoSaveEdit: saveEditTechSkillsEntry
  }))), editPanelCategory === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PanelOpener_jsx__WEBPACK_IMPORTED_MODULE_9__.PanelOpener, {
    text: "Document Design",
    onClick: editAestheticPanelToggle,
    dataIndex: 0
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_AestheticChanger_AestheticChanger_jsx__WEBPACK_IMPORTED_MODULE_16__.AestheticChanger, {
    personalInfoStyle: personalInfoStyle,
    processPersonalInfoStyleChange: processPersonalInfoStyleChange,
    sectionHeaderStyle: sectionHeaderStyle,
    processSectionHeaderStyle: processSectionHeaderStyle,
    entriesStyle: entriesStyle,
    processSectionDetailsStyle: processSectionDetailsStyle
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "preview-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "personal-info-display-space",
    style: personalInfoStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PersonalInformations_DisplayPersonalInfo_jsx__WEBPACK_IMPORTED_MODULE_8__.DisplayPersonalInfo, {
    props: personalInformations
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "preview-divider"
  }), Object.keys(educInformations).length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "education-display-space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    id: "education-display-header",
    style: sectionHeaderStyle
  }, "Education"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "education-info-entries",
    style: entriesStyle
  }, Object.keys(educInformations).length !== 0 && educInformations.map(function (educInformation) {
    return educInformation.universityName !== "" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_EducationalInformations_DisplayEducInfo_jsx__WEBPACK_IMPORTED_MODULE_11__.DisplayEducInfo, {
      key: educInformation.id,
      props: educInformation
    });
  }))), Object.keys(workExpInformations).length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "workexp-display-space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    id: "workexp-display-header",
    style: sectionHeaderStyle
  }, "Work Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "workexp-info-entries",
    style: entriesStyle
  }, workExpInformations.map(function (workExpInformation) {
    return workExpInformation.companyName !== "" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_WorkExperienceInformations_DisplayWorkExpInfo_jsx__WEBPACK_IMPORTED_MODULE_13__.DisplayWorkExpInfo, {
      key: workExpInformation.id,
      props: workExpInformation
    });
  }))), techSkillsInformations.length !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "techskills-display-space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    id: "techskills-display-header",
    style: sectionHeaderStyle
  }, "Technical Skills"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "techskills-info-entries",
    style: entriesStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "techskills-list"
  }, techSkillsInformations.map(function (techSkillsInformation, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_TechnicalSkillsInformations_DisplayTechInfo_jsx__WEBPACK_IMPORTED_MODULE_15__.DisplayTechInfo, {
      key: "techskill-display-".concat(index),
      props: {
        techSkillsInformation: techSkillsInformation,
        index: index
      }
    });
  })))))));
}

/***/ }),

/***/ "./src/components/AestheticChanger/AestheticChanger.jsx":
/*!**************************************************************!*\
  !*** ./src/components/AestheticChanger/AestheticChanger.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AestheticChanger: () => (/* binding */ AestheticChanger)
/* harmony export */ });
/* harmony import */ var _styles_AestheticChanger_AestheticChanger_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/AestheticChanger/AestheticChanger.css */ "./src/styles/AestheticChanger/AestheticChanger.css");
/* harmony import */ var _Inputs_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Inputs.jsx */ "./src/components/Inputs.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function AestheticChanger(_ref) {
  var personalInfoStyle = _ref.personalInfoStyle,
    processPersonalInfoStyleChange = _ref.processPersonalInfoStyleChange,
    sectionHeaderStyle = _ref.sectionHeaderStyle,
    processSectionHeaderStyle = _ref.processSectionHeaderStyle,
    entriesStyle = _ref.entriesStyle,
    processSectionDetailsStyle = _ref.processSectionDetailsStyle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    id: "document-style"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "personal-info-style"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("legend", {
    className: "aesthetic-legends"
  }, "Personal Information Section"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Inputs_jsx__WEBPACK_IMPORTED_MODULE_1__.Inputs, {
    id: "personal-info-background-color",
    labelText: "Background Color",
    type: "color",
    value: personalInfoStyle.backgroundColor,
    dataKey: "backgroundColor",
    onChange: processPersonalInfoStyleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Inputs_jsx__WEBPACK_IMPORTED_MODULE_1__.Inputs, {
    id: "personal-info-text-color",
    labelText: "Text/Icon Color",
    type: "color",
    value: personalInfoStyle.color,
    dataKey: "color",
    onChange: processPersonalInfoStyleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "personal-info-font-family-select"
  }, "Font Style:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("select", {
    name: "personal-info-font-family",
    id: "personal-info-font-family-select",
    onChange: processPersonalInfoStyleChange,
    "data-key": "fontFamily",
    defaultValue: personalInfoStyle.fontFamily
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Rubik"
  }, "Rubik"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Arial"
  }, "Arial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Calibri"
  }, "Calibri"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Helvetica"
  }, "Helvetica"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Verdana"
  }, "Verdana"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Lato"
  }, "Lato"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Times New Roman"
  }, "Times New Roman"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Garamond"
  }, "Garamond"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Georgia"
  }, "Georgia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Berserkerville"
  }, "Berserkerville"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Palatino Linotype"
  }, "Palatino Linotype")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "entry-headers-style"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("legend", {
    className: "aesthetic-legends"
  }, "Entries Header Section"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "entry-headers-font-family-select"
  }, "Font Style:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("select", {
    name: "entry-headers-font-family",
    id: "entry-headers-font-family-select",
    onChange: processSectionHeaderStyle,
    "data-key": "fontFamily",
    defaultValue: sectionHeaderStyle.fontFamily
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Rubik",
    selected: true
  }, "Rubik"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Arial"
  }, "Arial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Calibri"
  }, "Calibri"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Helvetica"
  }, "Helvetica"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Verdana"
  }, "Verdana"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Lato"
  }, "Lato"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Times New Roman"
  }, "Times New Roman"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Garamond"
  }, "Garamond"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Georgia"
  }, "Georgia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Berserkerville"
  }, "Berserkerville"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Palatino Linotype"
  }, "Palatino Linotype")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "entry-headers-font-weight-select"
  }, "Font Weight:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("select", {
    name: "entry-headers-font-weight",
    id: "entry-headers-font-weight-select",
    onChange: processSectionHeaderStyle,
    "data-key": "fontWeight",
    defaultValue: sectionHeaderStyle.fontWeight
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "500"
  }, "500"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "600"
  }, "600"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "700"
  }, "700"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "800"
  }, "800"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "900"
  }, "900")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "entry-headers-font-weight-select"
  }, "Font Weight:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("select", {
    name: "entry-headers-font-size",
    id: "entry-headers-font-size-select",
    onChange: processSectionHeaderStyle,
    "data-key": "fontSize",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "1vmax",
    selected: true
  }, "1vmax")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "entiries-details-style"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("legend", {
    className: "aesthetic-legends"
  }, "Entries Details Section"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "entry-details-font-family-select"
  }, "Font Style:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("select", {
    name: "entry-details-font-family",
    id: "entry-details-font-family-select",
    onChange: processSectionDetailsStyle,
    "data-key": "fontFamily",
    defaultValue: entriesStyle.fontFamily
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Rubik",
    selected: true
  }, "Rubik"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Arial"
  }, "Arial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Calibri"
  }, "Calibri"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Helvetica"
  }, "Helvetica"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Verdana"
  }, "Verdana"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Lato"
  }, "Lato"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Times New Roman"
  }, "Times New Roman"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Garamond"
  }, "Garamond"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Georgia"
  }, "Georgia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Berserkerville"
  }, "Berserkerville"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "Palatino Linotype"
  }, "Palatino Linotype")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("label", {
    htmlFor: "entry-details-font-weight-select"
  }, "Font Weight:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("select", {
    name: "entry-details-font-size",
    id: "entry-details-font-size-select",
    onChange: processSectionDetailsStyle,
    "data-key": "fontSize",
    disabled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("option", {
    value: "1vmax",
    selected: true
  }, "1vmax")))));
}

/***/ }),

/***/ "./src/components/Button.jsx":
/*!***********************************!*\
  !*** ./src/components/Button.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _styles_Button_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/Button.css */ "./src/styles/Button.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Button(_ref) {
  var text = _ref.text,
    _ref$source = _ref.source,
    source = _ref$source === void 0 ? "/src/assets/no-image.svg" : _ref$source,
    _ref$alt = _ref.alt,
    alt = _ref$alt === void 0 ? "no-image" : _ref$alt,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "button" : _ref$className,
    id = _ref.id,
    buttonType = _ref.buttonType,
    processClick = _ref.processClick,
    dataIndex = _ref.dataIndex;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    onClick: processClick,
    className: className,
    id: id,
    type: buttonType,
    "data-index": dataIndex
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: source,
    alt: alt
  }), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, text)));
}

/***/ }),

/***/ "./src/components/Controls.jsx":
/*!*************************************!*\
  !*** ./src/components/Controls.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controls: () => (/* binding */ Controls)
/* harmony export */ });
/* harmony import */ var _styles_Controls_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/Controls.css */ "./src/styles/Controls.css");
/* harmony import */ var _Button_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.jsx */ "./src/components/Button.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Controls(_ref) {
  var toggleInformationPanel = _ref.toggleInformationPanel,
    sampleDataFill = _ref.sampleDataFill,
    resetAndClearData = _ref.resetAndClearData,
    downloadPDF = _ref.downloadPDF,
    printPDF = _ref.printPDF;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "controls-buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Information",
    source: "./src/assets/editor.svg",
    alt: "edit-information-icon",
    buttonType: "button",
    processClick: toggleInformationPanel,
    dataIndex: 0
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Aesthetics",
    source: "./src/assets/color-filter.svg",
    alt: "edit-aesthetic-icon",
    processClick: toggleInformationPanel,
    dataIndex: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "divider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Sample Fill",
    source: "./src/assets/fill.svg",
    alt: "sample-fill-icon",
    processClick: sampleDataFill
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Reset",
    source: "./src/assets/clear.svg",
    alt: "reset-icon",
    processClick: resetAndClearData
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Download",
    source: "./src/assets/download.svg",
    alt: "download-icom",
    processClick: downloadPDF
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Print",
    source: "./src/assets/printer.svg",
    alt: "print-icon",
    processClick: printPDF
  })));
}

/***/ }),

/***/ "./src/components/EducationalInformations/DisplayEducInfo.jsx":
/*!********************************************************************!*\
  !*** ./src/components/EducationalInformations/DisplayEducInfo.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayEducInfo: () => (/* binding */ DisplayEducInfo)
/* harmony export */ });
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc.js */ "./src/components/misc.js");
/* harmony import */ var _styles_EducationalInformations_DisplayEducInfo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/EducationalInformations/DisplayEducInfo.css */ "./src/styles/EducationalInformations/DisplayEducInfo.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function DisplayEducInfo(_ref) {
  var props = _ref.props;
  var id = props.id,
    universityName = props.universityName,
    degreeFinished = props.degreeFinished,
    educationStartDate = props.educationStartDate,
    educationEndDate = props.educationEndDate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    key: id,
    className: "educ-entry-display",
    id: "education-info-entry-".concat(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "education-info-entry-title"
  }, universityName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "education-info-additional-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, degreeFinished), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, !isNaN(new Date(educationStartDate)) ? (0,_misc_js__WEBPACK_IMPORTED_MODULE_0__.convertDate)(educationStartDate) : "", "-", !isNaN(new Date(educationEndDate)) ? (0,_misc_js__WEBPACK_IMPORTED_MODULE_0__.convertDate)(educationEndDate) : "")));
}

/***/ }),

/***/ "./src/components/EducationalInformations/EditEducInfo.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/EducationalInformations/EditEducInfo.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditEducInfo: () => (/* binding */ EditEducInfo)
/* harmony export */ });
/* harmony import */ var _Inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Inputs */ "./src/components/Inputs.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./src/components/Button.jsx");
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc.js */ "./src/components/misc.js");
/* harmony import */ var _styles_EducationalInformations_EditEducInfo_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/EducationalInformations/EditEducInfo.css */ "./src/styles/EducationalInformations/EditEducInfo.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function EditEducInfo(_ref) {
  var props = _ref.props,
    onClickEditEducInfo = _ref.onClickEditEducInfo,
    isEditingEducInfo = _ref.isEditingEducInfo,
    handleEducInfoChange = _ref.handleEducInfoChange,
    EducInfoDeletion = _ref.EducInfoDeletion,
    EducInfoCancelEdit = _ref.EducInfoCancelEdit,
    EducInfoSaveEdit = _ref.EducInfoSaveEdit;
  var id = props.id,
    universityName = props.universityName,
    degreeFinished = props.degreeFinished,
    educationStartDate = props.educationStartDate,
    educationEndDate = props.educationEndDate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "educ-info-entry",
    id: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "educ-info-entry-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, universityName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("button", {
    id: "edit-educ-info-btn",
    onClick: onClickEditEducInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("img", {
    src: "src/assets/edit.svg",
    alt: "edit-entry",
    "data-index": id
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, !isNaN(new Date(educationStartDate)) ? (0,_misc_js__WEBPACK_IMPORTED_MODULE_2__.convertDate)(educationStartDate) : "", "-", !isNaN(new Date(educationEndDate)) ? (0,_misc_js__WEBPACK_IMPORTED_MODULE_2__.convertDate)(educationEndDate) : "")), isEditingEducInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("form", {
    id: id,
    onSubmit: EducInfoSaveEdit,
    className: "educ-info-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("legend", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "school-attended",
    labelText: "University/Institute",
    placeholderText: "University Attended",
    type: "text",
    dataKey: "universityName",
    value: universityName,
    onChange: handleEducInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "degree",
    labelText: "Degree/Major",
    placeholderText: "Degree Finished",
    type: "text",
    dataKey: "degreeFinished",
    value: degreeFinished,
    onChange: handleEducInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "education-start-date",
    labelText: "Start Date",
    type: "month",
    dataKey: "educationStartDate",
    value: educationStartDate,
    onChange: handleEducInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "education-end-date",
    labelText: "End Date",
    type: "month",
    dataKey: "educationEndDate",
    value: educationEndDate,
    onChange: handleEducInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "educ-entry-buttons-space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Delete",
    source: "src/assets/delete.svg",
    alt: "delete-form",
    className: "educ-entry-button",
    id: "delete-educ-info-".concat(id),
    buttonType: "button",
    processClick: EducInfoDeletion
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Cancel",
    source: "src/assets/handle-x.svg",
    alt: "cancel-edit",
    className: "educ-entry-button",
    id: "cancel-educ-info-".concat(id),
    buttonType: "button",
    processClick: EducInfoCancelEdit
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Save",
    source: "src/assets/check-one.svg",
    alt: "save-form",
    className: "educ-entry-button",
    id: "save-educ-info-".concat(id),
    buttonType: "submit"
  })))));
}

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _styles_Header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/Header.css */ "./src/styles/Header.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h1", {
    className: "page-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "page-title-text"
  }, "CV Creator"))));
}

/***/ }),

/***/ "./src/components/Inputs.jsx":
/*!***********************************!*\
  !*** ./src/components/Inputs.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Inputs: () => (/* binding */ Inputs)
/* harmony export */ });
/* harmony import */ var _styles_Inputs_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/Inputs.css */ "./src/styles/Inputs.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Inputs(_ref) {
  var inputType = _ref.inputType,
    id = _ref.id,
    labelText = _ref.labelText,
    placeholderText = _ref.placeholderText,
    type = _ref.type,
    value = _ref.value,
    _ref$isRequired = _ref.isRequired,
    isRequired = _ref$isRequired === void 0 ? true : _ref$isRequired,
    _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? "4" : _ref$rows,
    _ref$cols = _ref.cols,
    cols = _ref$cols === void 0 ? "30" : _ref$cols,
    onChange = _ref.onChange,
    dataKey = _ref.dataKey,
    dataIndex = _ref.dataIndex;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    htmlFor: id
  }, labelText, ": "), inputType === "textarea" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("textarea", {
    id: id,
    placeholder: placeholderText,
    onChange: onChange,
    value: value,
    rows: rows,
    cols: cols,
    "data-key": dataKey,
    "data-index": dataIndex
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
    id: id,
    placeholder: placeholderText,
    onChange: onChange,
    value: value,
    type: type,
    required: isRequired ? "required" : "",
    "data-key": dataKey,
    "data-index": dataIndex
  }));
}

/***/ }),

/***/ "./src/components/PanelOpener.jsx":
/*!****************************************!*\
  !*** ./src/components/PanelOpener.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelOpener: () => (/* binding */ PanelOpener)
/* harmony export */ });
/* harmony import */ var _styles_PanelOpener_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/PanelOpener.css */ "./src/styles/PanelOpener.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function PanelOpener(_ref) {
  var text = _ref.text,
    onClick = _ref.onClick,
    dataIndex = _ref.dataIndex;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "edit-panel-opener"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    id: "edit-panel-btn",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
    src: "./src/assets/double-right.svg",
    alt: "double-arrow-icon",
    id: "edit-panel-btn-img",
    "data-index": dataIndex
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "edit-panel-divider"
  }));
}

/***/ }),

/***/ "./src/components/PersonalInformations/DisplayPersonalInfo.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/PersonalInformations/DisplayPersonalInfo.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayPersonalInfo: () => (/* binding */ DisplayPersonalInfo)
/* harmony export */ });
/* harmony import */ var _styles_PersonalInformations_DisplayPersonalInfo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/PersonalInformations/DisplayPersonalInfo.css */ "./src/styles/PersonalInformations/DisplayPersonalInfo.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function DisplayPersonalInfo(_ref) {
  var props = _ref.props;
  var firstName = props.firstName,
    lastName = props.lastName,
    jobTitle = props.jobTitle,
    inputEmail = props.inputEmail,
    contactNumber = props.contactNumber,
    inputAddress = props.inputAddress,
    inputWebsite = props.inputWebsite;
  var filterStyle = {
    color: "white"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, (firstName || lastName) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "personal-detail-entry",
    id: "full-name-display"
  }, firstName, " ", lastName), jobTitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "personal-detail-entry",
    id: "job-title-display"
  }, jobTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "contact-details-space",
    style: filterStyle
  }, inputEmail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "personal-detail-entry"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M36 15H44V28V41H4V28V15H12",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M24 19V5",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M30 13L24 19L18 13",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M4 15L24 30L44 15",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, inputEmail)), contactNumber && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "personal-detail-entry"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M22 37H26",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinecap: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, contactNumber)), inputAddress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "personal-detail-entry"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M24 44C24 44 39 32 39 19C39 10.7157 32.2843 4 24 4C15.7157 4 9 10.7157 9 19C9 32 24 44 24 44Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M24 25C27.3137 25 30 22.3137 30 19C30 15.6863 27.3137 13 24 13C20.6863 13 18 15.6863 18 19C18 22.3137 20.6863 25 24 25Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinejoin: "round"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, inputAddress)), inputWebsite && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
    className: "personal-detail-entry"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("rect", {
    x: "4",
    y: "8",
    width: "40",
    height: "32",
    rx: "3",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinejoin: "round"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("circle", {
    r: "2",
    transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)",
    fill: "currentColor"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("circle", {
    r: "2",
    transform: "matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)",
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", null, inputWebsite))));
}

/***/ }),

/***/ "./src/components/PersonalInformations/EditPersonalInfo.jsx":
/*!******************************************************************!*\
  !*** ./src/components/PersonalInformations/EditPersonalInfo.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditPersonalInfo: () => (/* binding */ EditPersonalInfo)
/* harmony export */ });
/* harmony import */ var _Inputs_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Inputs.jsx */ "./src/components/Inputs.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function EditPersonalInfo(_ref) {
  var props = _ref.props,
    handlePersonalInfoChange = _ref.handlePersonalInfoChange;
  var firstName = props.firstName,
    lastName = props.lastName,
    jobTitle = props.jobTitle,
    inputEmail = props.inputEmail,
    contactNumber = props.contactNumber,
    inputAddress = props.inputAddress,
    inputWebsite = props.inputWebsite;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("legend", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Inputs_jsx__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "first-name",
    labelText: "First Name",
    placeholderText: "John Mark",
    type: "text",
    dataKey: "firstName",
    value: firstName,
    onChange: handlePersonalInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Inputs_jsx__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "last-name",
    labelText: "Last Name",
    placeholderText: "Stanton",
    type: "text",
    dataKey: "lastName",
    value: lastName,
    onChange: handlePersonalInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Inputs_jsx__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "job-title",
    labelText: "Job/Professional Title",
    placeholderText: "Engineer",
    type: "text",
    dataKey: "jobTitle",
    value: jobTitle,
    onChange: handlePersonalInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Inputs_jsx__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "email",
    labelText: "Email",
    placeholderText: "my-user@example.com",
    type: "email",
    dataKey: "inputEmail",
    value: inputEmail,
    onChange: handlePersonalInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Inputs_jsx__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "contact-number",
    labelText: "Contact Number",
    placeholderText: "(+63)000-000-0000",
    type: "tel",
    dataKey: "contactNumber",
    value: contactNumber,
    onChange: handlePersonalInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Inputs_jsx__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "address",
    labelText: "Address",
    placeholderText: "123 B This Land, State, Country",
    type: "text",
    dataKey: "inputAddress",
    value: inputAddress,
    onChange: handlePersonalInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Inputs_jsx__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "website",
    labelText: "Website",
    placeholderText: "https://my-url.com",
    type: "url",
    isRequired: false,
    dataKey: "inputWebsite",
    value: inputWebsite,
    onChange: handlePersonalInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Inputs_jsx__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    inputType: "textarea",
    id: "summary",
    labelText: "Summary (Optional)",
    placeholderText: "Tell Me About Yourself/Profession",
    type: "text",
    dataKey: "inputDescription",
    onChange: handlePersonalInfoChange
  }))));
}

/***/ }),

/***/ "./src/components/TechnicalSkillsInformations/DisplayTechInfo.jsx":
/*!************************************************************************!*\
  !*** ./src/components/TechnicalSkillsInformations/DisplayTechInfo.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayTechInfo: () => (/* binding */ DisplayTechInfo)
/* harmony export */ });
/* harmony import */ var _styles_TechnicalSkillsInformations_DisplayTechInfo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/TechnicalSkillsInformations/DisplayTechInfo.css */ "./src/styles/TechnicalSkillsInformations/DisplayTechInfo.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function DisplayTechInfo(_ref) {
  var props = _ref.props;
  var techSkillsInformation = props.techSkillsInformation,
    index = props.index;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    key: "techskill-entry-".concat(index),
    className: "techskill-entry"
  }, techSkillsInformation));
}

/***/ }),

/***/ "./src/components/TechnicalSkillsInformations/EditTechSkillsInfo.jsx":
/*!***************************************************************************!*\
  !*** ./src/components/TechnicalSkillsInformations/EditTechSkillsInfo.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditTechSkillsInfo: () => (/* binding */ EditTechSkillsInfo)
/* harmony export */ });
/* harmony import */ var _styles_TechnicalSkillsInformations_EditTechSkillsInfo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/TechnicalSkillsInformations/EditTechSkillsInfo.css */ "./src/styles/TechnicalSkillsInformations/EditTechSkillsInfo.css");
/* harmony import */ var _Button_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button.jsx */ "./src/components/Button.jsx");
/* harmony import */ var _Inputs_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Inputs.jsx */ "./src/components/Inputs.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




function EditTechSkillsInfo(_ref) {
  var techSkills = _ref.techSkills,
    handleTechSkillsInfoChange = _ref.handleTechSkillsInfoChange,
    addTechSkill = _ref.addTechSkill,
    deleteTechSkill = _ref.deleteTechSkill,
    TechSkillsInfoCancelEdit = _ref.TechSkillsInfoCancelEdit,
    TechSkillsInfoSaveEdit = _ref.TechSkillsInfoSaveEdit;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("form", {
    id: "techskills-info-form",
    onSubmit: TechSkillsInfoSaveEdit,
    className: "techskills-info-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("legend", null), techSkills.map(function (techSkill, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Inputs_jsx__WEBPACK_IMPORTED_MODULE_2__.Inputs, {
      key: "techskill-".concat(index),
      id: "techskill-".concat(index),
      labelText: "Technical Skill ".concat(index + 1),
      placeholderText: "Skill ".concat(index + 1),
      type: "text",
      dataKey: "".concat(index),
      value: techSkill,
      onChange: handleTechSkillsInfoChange
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "add-remove-techskill-btn-space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "",
    source: "/src/assets/minus.svg",
    alt: "delete-techskill",
    className: "delete-techskill-btn",
    id: "techskills-info-form",
    buttonType: "button",
    processClick: deleteTechSkill
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "",
    source: "/src/assets/plus.svg",
    alt: "add-techskill",
    className: "add-techskill-btn",
    id: "techskills-info-form",
    buttonType: "button",
    processClick: addTechSkill
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "techskills-buttons-space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Cancel",
    source: "/src/assets/handle-x.svg",
    alt: "cancel-edit",
    className: "techskills-button",
    id: "cancel-techskills",
    buttonType: "button",
    processClick: TechSkillsInfoCancelEdit
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Save",
    source: "/src/assets/check-one.svg",
    alt: "save-form",
    className: "techskills-button",
    id: "save-techskills",
    buttonType: "submit"
  })))));
}

/***/ }),

/***/ "./src/components/WebsiteInfo.jsx":
/*!****************************************!*\
  !*** ./src/components/WebsiteInfo.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebsiteInfo: () => (/* binding */ WebsiteInfo)
/* harmony export */ });
/* harmony import */ var _styles_WebsiteInfo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/WebsiteInfo.css */ "./src/styles/WebsiteInfo.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function WebsiteInfo() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "website-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "This is a CV Creator. Provide the necessary details in order to create a template-based CV and save the file when your done")));
}

/***/ }),

/***/ "./src/components/WorkExperienceInformations/DisplayWorkExpInfo.jsx":
/*!**************************************************************************!*\
  !*** ./src/components/WorkExperienceInformations/DisplayWorkExpInfo.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayWorkExpInfo: () => (/* binding */ DisplayWorkExpInfo)
/* harmony export */ });
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc.js */ "./src/components/misc.js");
/* harmony import */ var _styles_WorkExperienceInformations_DisplayWorkExpInfo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/WorkExperienceInformations/DisplayWorkExpInfo.css */ "./src/styles/WorkExperienceInformations/DisplayWorkExpInfo.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function DisplayWorkExpInfo(_ref) {
  var props = _ref.props;
  var id = props.id,
    companyName = props.companyName,
    jobPosition = props.jobPosition,
    experienceStartDate = props.experienceStartDate,
    experienceEndDate = props.experienceEndDate,
    isPresent = props.isPresent,
    jobTasks = props.jobTasks;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    key: id,
    className: "workexp-entry-display",
    id: "workexp-info-entry-".concat(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "workexp-info-entry-title"
  }, companyName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "workexp-info-additional-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, jobPosition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, !isNaN(new Date(experienceStartDate)) ? (0,_misc_js__WEBPACK_IMPORTED_MODULE_0__.convertDate)(experienceStartDate) : "", "-", isPresent ? "Present" : !isNaN(new Date(experienceEndDate)) ? (0,_misc_js__WEBPACK_IMPORTED_MODULE_0__.convertDate)(experienceEndDate) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", {
    className: "jobtasks-list"
  }, jobTasks.map(function (jobTask, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("li", {
      key: "".concat(id, "-").concat(index),
      className: "jobtask-entry"
    }, jobTask);
  }))));
}

/***/ }),

/***/ "./src/components/WorkExperienceInformations/EditWorkExpInfo.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/WorkExperienceInformations/EditWorkExpInfo.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditWorkExpInfo: () => (/* binding */ EditWorkExpInfo)
/* harmony export */ });
/* harmony import */ var _Inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Inputs */ "./src/components/Inputs.jsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./src/components/Button.jsx");
/* harmony import */ var _misc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc.js */ "./src/components/misc.js");
/* harmony import */ var _styles_WorkExperienceInformations_EditWorkExpInfo_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/WorkExperienceInformations/EditWorkExpInfo.css */ "./src/styles/WorkExperienceInformations/EditWorkExpInfo.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function EditWorkExpInfo(_ref) {
  var props = _ref.props,
    onClickEditWorkExpInfo = _ref.onClickEditWorkExpInfo,
    isEditingWorkExpInfo = _ref.isEditingWorkExpInfo,
    handleWorkExpInfoChange = _ref.handleWorkExpInfoChange,
    isPresentToggled = _ref.isPresentToggled,
    addJobTask = _ref.addJobTask,
    deleteJobTask = _ref.deleteJobTask,
    WorkExpInfoDeletion = _ref.WorkExpInfoDeletion,
    WorkExpInfoCancelEdit = _ref.WorkExpInfoCancelEdit,
    WorkExpInfoSaveEdit = _ref.WorkExpInfoSaveEdit;
  var id = props.id,
    companyName = props.companyName,
    jobPosition = props.jobPosition,
    experienceStartDate = props.experienceStartDate,
    experienceEndDate = props.experienceEndDate,
    isPresent = props.isPresent,
    jobTasks = props.jobTasks;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "workexp-info-entry",
    id: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "workexp-info-entry-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, companyName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("button", {
    id: "edit-workexp-info-btn",
    onClick: onClickEditWorkExpInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("img", {
    src: "src/assets/edit.svg",
    alt: "edit-entry",
    "data-index": id
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, jobPosition), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", null, !isNaN(new Date(experienceStartDate)) ? (0,_misc_js__WEBPACK_IMPORTED_MODULE_2__.convertDate)(experienceStartDate) : "", "-", isPresent ? "Present" : !isNaN(new Date(experienceEndDate)) ? (0,_misc_js__WEBPACK_IMPORTED_MODULE_2__.convertDate)(experienceEndDate) : "")), isEditingWorkExpInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("form", {
    id: id,
    onSubmit: WorkExpInfoSaveEdit,
    className: "workexp-info-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("legend", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "company-worked",
    labelText: "Company Name",
    placeholderText: "Company Worked At",
    type: "text",
    dataKey: "companyName",
    value: companyName,
    onChange: handleWorkExpInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "job-position",
    labelText: "Job Title/Position",
    placeholderText: "Job Title",
    type: "text",
    dataKey: "jobPosition",
    value: jobPosition,
    onChange: handleWorkExpInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "workexp-start-date",
    labelText: "From",
    type: "month",
    dataKey: "experienceStartDate",
    value: experienceStartDate,
    onChange: handleWorkExpInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
    id: "workexp-end-date",
    labelText: "To",
    type: "month",
    dataKey: "experienceEndDate",
    value: experienceEndDate,
    onChange: handleWorkExpInfoChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "toggle-btn-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", {
    type: "checkbox",
    id: "toggle-end-date-present-".concat(id),
    onChange: isPresentToggled,
    "data-key": "isPresent"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("label", {
    htmlFor: "toggle-end-date-present-".concat(id),
    className: "toggle-btn"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "toggle-btn-label"
  }, "Present")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "workexp-jobtasks-space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("legend", null, "Job Tasks"), jobTasks.map(function (jobTask, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Inputs__WEBPACK_IMPORTED_MODULE_0__.Inputs, {
      key: "jobTask-".concat(id),
      id: "job-task-".concat(id, "-").concat(index),
      labelText: "Job Task ".concat(index + 1),
      placeholderText: "Job Task",
      type: "text",
      dataKey: "jobTasks",
      dataIndex: index,
      value: jobTask,
      onChange: handleWorkExpInfoChange
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "add-workexp-jobtask-btn-space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "",
    source: "src/assets/minus.svg",
    alt: "delete-workexp-jobtask",
    className: "delete-workexp-jobtask-btn",
    id: id,
    buttonType: "button",
    processClick: deleteJobTask
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "",
    source: "src/assets/plus.svg",
    alt: "add-workexp-jobtask",
    className: "add-workexp-jobtask-btn",
    id: id,
    buttonType: "button",
    processClick: addJobTask
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "workexp-entry-buttons-space"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Delete",
    source: "src/assets/delete.svg",
    alt: "delete-form",
    className: "workexp-entry-button",
    id: "delete-workexp-info-".concat(id),
    buttonType: "button",
    processClick: WorkExpInfoDeletion
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Cancel",
    source: "src/assets/handle-x.svg",
    alt: "cancel-edit",
    className: "workexp-entry-button",
    id: "cancel-workexp-info-".concat(id),
    buttonType: "button",
    processClick: WorkExpInfoCancelEdit
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: "Save",
    source: "src/assets/check-one.svg",
    alt: "save-form",
    className: "workexp-entry-button",
    id: "save-workexp-info-".concat(id),
    buttonType: "submit"
  })))));
}

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





(0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById('root')).render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/AestheticChanger/AestheticChanger.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/AestheticChanger/AestheticChanger.css ***!
  \************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.personal-info-style,
.entry-headers-style,
.entiries-details-style{
    max-width: 100%;
    display: flex;
    flex-direction: column;
    margin-block: 2.5vmin;
}
.aesthetic-legends{
    font-family: "Rubik";
    font-size: 2vmin;
}
#personal-info-background-color,
#personal-info-text-color{
  width: 35%;
  margin: 0.5vmin;
  height: 5vmin;
  border: none;
  background-color: #dddd;
}
select{
  border: 2px rgb(185, 185, 185) solid;
  border-radius: 0.25rem;
  max-width: 90%;
  line-height: 1.5vmax;
  font-family: "Rubik";
  padding: 0.5vmin;
  margin: 1vmin;
}`, "",{"version":3,"sources":["webpack://./src/styles/AestheticChanger/AestheticChanger.css"],"names":[],"mappings":"AAAA;;;IAGI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,qBAAqB;AACzB;AACA;IACI,oBAAoB;IACpB,gBAAgB;AACpB;AACA;;EAEE,UAAU;EACV,eAAe;EACf,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,oCAAoC;EACpC,sBAAsB;EACtB,cAAc;EACd,oBAAoB;EACpB,oBAAoB;EACpB,gBAAgB;EAChB,aAAa;AACf","sourcesContent":[".personal-info-style,\r\n.entry-headers-style,\r\n.entiries-details-style{\r\n    max-width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-block: 2.5vmin;\r\n}\r\n.aesthetic-legends{\r\n    font-family: \"Rubik\";\r\n    font-size: 2vmin;\r\n}\r\n#personal-info-background-color,\r\n#personal-info-text-color{\r\n  width: 35%;\r\n  margin: 0.5vmin;\r\n  height: 5vmin;\r\n  border: none;\r\n  background-color: #dddd;\r\n}\r\nselect{\r\n  border: 2px rgb(185, 185, 185) solid;\r\n  border-radius: 0.25rem;\r\n  max-width: 90%;\r\n  line-height: 1.5vmax;\r\n  font-family: \"Rubik\";\r\n  padding: 0.5vmin;\r\n  margin: 1vmin;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, `.main {
  max-width: 90vw;
  min-height: 80vh;
  padding: 2vmax;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2fr;
  gap: 2vmax;
}
.controls-section {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: column;
  row-gap: 2.5vmax;
  max-width: 80%;
  height: auto;
}
.edit-section {
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  flex-direction: column;
  row-gap: 1.5vmin;
  max-width: 100%;
  height: auto;
}
.edit-information-panels {
  max-width: 80%;
  height: 75vh;
  padding: 5%;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);
  -moz-box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);
  box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);
  overflow-y: auto;
  background-color: white;
}
#personal-info-panel,
#educational-info-panel,
#workexp-info-panel,
#techskills-info-panel {
  max-width: 100%;
  animation: expand 250ms ease 1;
  transform-origin: top;
  display: flex;
  flex-direction: column;
  row-gap: 0.5vmin;
}
.add-educ-info-btn-space,
.add-workexp-btn-space,
.add-techskills-btn-space {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
#add-educ-info-btn {
  width: 15%;
  border-radius: 50%;
}
#add-workexp-btn {
  width: 15%;
  border-radius: 50%;
}
#add-educ-info-btn img,
#add-workexp-btn img {
  width: 100%;
}
.preview-section {
  grid-area: 1 / 2 / 3 / 3;
  max-width: 100%;
  min-height: 50vh;
  overflow-y: auto;
  background-color: white;
}
.preview-divider {
  border: 1px solid #adadaddd;
  background-color: #adadaddd;
  width: 100%;
  height: 0.5%;
}
.education-display-space,
.techskills-display-space {
  display: flex;
  flex-direction: column;
}
#education-display-header,
#workexp-display-header,
#techskills-display-header {
  font-size: 1.25vmax;
  text-align: left;
  padding-left: 2.75vmax;
  padding-top: 0.75vmax;
}
.education-info-entries,
.workexp-info-entries,
.techskills-info-entries {
  display: flex;
  flex-wrap: wrap;
  color: #000;
  margin-top: 0.5vmax;
  margin-inline: 2vmax;
  font-family: "Rubik";
}
ul.techskills-list{
  list-style-type: circle;
  margin-left: 5vmin;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  column-fill: auto;
  height: 15vmin;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #969696 #e6e6e6;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 14px;
}

*::-webkit-scrollbar-track {
  background: #e6e6e6;
}

*::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
}
/* ===== Animations ===== */
@keyframes expand {
  0% {
    transform: scaleY(0);
  }

  25% {
    transform: scaleY(0.25);
  }

  50% {
    transform: scaleY(0.5);
  }

  75% {
    transform: scaleY(0.75);
  }

  100% {
    transform: scaleY(1);
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/App.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,UAAU;AACZ;AACA;EACE,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;EACd,YAAY;AACd;AACA;EACE,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;EACf,YAAY;AACd;AACA;EACE,cAAc;EACd,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,oDAAoD;EACpD,iDAAiD;EACjD,4CAA4C;EAC5C,gBAAgB;EAChB,uBAAuB;AACzB;AACA;;;;EAIE,eAAe;EACf,8BAA8B;EAC9B,qBAAqB;EACrB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;AACA;;;EAGE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,kBAAkB;AACpB;AACA;;EAEE,WAAW;AACb;AACA;EACE,wBAAwB;EACxB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;AACzB;AACA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,WAAW;EACX,YAAY;AACd;AACA;;EAEE,aAAa;EACb,sBAAsB;AACxB;AACA;;;EAGE,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,qBAAqB;AACvB;AACA;;;EAGE,aAAa;EACb,eAAe;EACf,WAAW;EACX,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;AACtB;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;EACV,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;;AAEA,8BAA8B;AAC9B,YAAY;AACZ;EACE,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA,6BAA6B;AAC7B;EACE,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;AACA,2BAA2B;AAC3B;EACE;IACE,oBAAoB;EACtB;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,oBAAoB;EACtB;AACF","sourcesContent":[".main {\n  max-width: 90vw;\n  min-height: 80vh;\n  padding: 2vmax;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 1fr 2fr;\n  gap: 2vmax;\n}\n.controls-section {\n  grid-area: 1 / 1 / 2 / 2;\n  display: flex;\n  flex-direction: column;\n  row-gap: 2.5vmax;\n  max-width: 80%;\n  height: auto;\n}\n.edit-section {\n  grid-area: 2 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: column;\n  row-gap: 1.5vmin;\n  max-width: 100%;\n  height: auto;\n}\n.edit-information-panels {\n  max-width: 80%;\n  height: 75vh;\n  padding: 5%;\n  border-radius: 1rem;\n  -webkit-box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);\n  -moz-box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);\n  box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);\n  overflow-y: auto;\n  background-color: white;\n}\n#personal-info-panel,\n#educational-info-panel,\n#workexp-info-panel,\n#techskills-info-panel {\n  max-width: 100%;\n  animation: expand 250ms ease 1;\n  transform-origin: top;\n  display: flex;\n  flex-direction: column;\n  row-gap: 0.5vmin;\n}\n.add-educ-info-btn-space,\n.add-workexp-btn-space,\n.add-techskills-btn-space {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n#add-educ-info-btn {\n  width: 15%;\n  border-radius: 50%;\n}\n#add-workexp-btn {\n  width: 15%;\n  border-radius: 50%;\n}\n#add-educ-info-btn img,\n#add-workexp-btn img {\n  width: 100%;\n}\n.preview-section {\n  grid-area: 1 / 2 / 3 / 3;\n  max-width: 100%;\n  min-height: 50vh;\n  overflow-y: auto;\n  background-color: white;\n}\n.preview-divider {\n  border: 1px solid #adadaddd;\n  background-color: #adadaddd;\n  width: 100%;\n  height: 0.5%;\n}\n.education-display-space,\n.techskills-display-space {\n  display: flex;\n  flex-direction: column;\n}\n#education-display-header,\n#workexp-display-header,\n#techskills-display-header {\n  font-size: 1.25vmax;\n  text-align: left;\n  padding-left: 2.75vmax;\n  padding-top: 0.75vmax;\n}\n.education-info-entries,\n.workexp-info-entries,\n.techskills-info-entries {\n  display: flex;\n  flex-wrap: wrap;\n  color: #000;\n  margin-top: 0.5vmax;\n  margin-inline: 2vmax;\n  font-family: \"Rubik\";\n}\nul.techskills-list{\n  list-style-type: circle;\n  margin-left: 5vmin;\n  columns: 2;\n  -webkit-columns: 2;\n  -moz-columns: 2;\n  column-fill: auto;\n  height: 15vmin;\n}\n\n/* ===== Scrollbar CSS ===== */\n/* Firefox */\n* {\n  scrollbar-width: thin;\n  scrollbar-color: #969696 #e6e6e6;\n}\n\n/* Chrome, Edge, and Safari */\n*::-webkit-scrollbar {\n  width: 14px;\n}\n\n*::-webkit-scrollbar-track {\n  background: #e6e6e6;\n}\n\n*::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 6px;\n}\n/* ===== Animations ===== */\n@keyframes expand {\n  0% {\n    transform: scaleY(0);\n  }\n\n  25% {\n    transform: scaleY(0.25);\n  }\n\n  50% {\n    transform: scaleY(0.5);\n  }\n\n  75% {\n    transform: scaleY(0.75);\n  }\n\n  100% {\n    transform: scaleY(1);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/Button.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/Button.css ***!
  \*********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.button {
  width: 75%;
  min-height: 75%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  font-family: "Rubik";
  font-size: 1.25vmin;
  cursor: pointer;
  position: relative;
  outline: none;
  box-shadow: 0 3px var(--primary1);
  transition: all 0.2s ease-in-out;
}
.button img {
  width: 25%;
}
.button:active {
  transform: translateY(3px);
  box-shadow: 0 1px var(--primary1);
}`, "",{"version":3,"sources":["webpack://./src/styles/Button.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,eAAe;EACf,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,6BAA6B;EAC7B,oBAAoB;EACpB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,iCAAiC;EACjC,gCAAgC;AAClC;AACA;EACE,UAAU;AACZ;AACA;EACE,0BAA0B;EAC1B,iCAAiC;AACnC","sourcesContent":[".button {\n  width: 75%;\n  min-height: 75%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n  font-family: \"Rubik\";\n  font-size: 1.25vmin;\n  cursor: pointer;\n  position: relative;\n  outline: none;\n  box-shadow: 0 3px var(--primary1);\n  transition: all 0.2s ease-in-out;\n}\n.button img {\n  width: 25%;\n}\n.button:active {\n  transform: translateY(3px);\n  box-shadow: 0 1px var(--primary1);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/Controls.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/Controls.css ***!
  \***********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.divider{
    border: 1px solid var(--primary2);
    width: 100%;
    height: 1%;
    grid-column: 1 / 3;
}
.controls-buttons {
    max-width: 100%;
    min-height: 20vh;
    padding: 5%;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, 50%);
    place-items: center;
    -webkit-box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);
    -moz-box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);
    box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);
    background-color: white;
}`, "",{"version":3,"sources":["webpack://./src/styles/Controls.css"],"names":[],"mappings":"AAAA;IACI,iCAAiC;IACjC,WAAW;IACX,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,4CAA4C;IAC5C,mBAAmB;IACnB,oDAAoD;IACpD,iDAAiD;IACjD,4CAA4C;IAC5C,uBAAuB;AAC3B","sourcesContent":[".divider{\r\n    border: 1px solid var(--primary2);\r\n    width: 100%;\r\n    height: 1%;\r\n    grid-column: 1 / 3;\r\n}\r\n.controls-buttons {\r\n    max-width: 100%;\r\n    min-height: 20vh;\r\n    padding: 5%;\r\n    border-radius: 1rem;\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, 50%);\r\n    place-items: center;\r\n    -webkit-box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);\r\n    -moz-box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);\r\n    box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);\r\n    background-color: white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/EducationalInformations/DisplayEducInfo.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/EducationalInformations/DisplayEducInfo.css ***!
  \******************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.educ-entry-display {
    margin-inline: 0.75vmax;
    margin-block: 0.5vmax;
    text-align: left;
}
.education-info-entry-title {
    font-weight: 700;
    font-size: 1vmax;
}
.education-info-additional-details {
    font-size: 0.75vmax;
}`, "",{"version":3,"sources":["webpack://./src/styles/EducationalInformations/DisplayEducInfo.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,qBAAqB;IACrB,gBAAgB;AACpB;AACA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB","sourcesContent":[".educ-entry-display {\r\n    margin-inline: 0.75vmax;\r\n    margin-block: 0.5vmax;\r\n    text-align: left;\r\n}\r\n.education-info-entry-title {\r\n    font-weight: 700;\r\n    font-size: 1vmax;\r\n}\r\n.education-info-additional-details {\r\n    font-size: 0.75vmax;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/EducationalInformations/EditEducInfo.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/EducationalInformations/EditEducInfo.css ***!
  \***************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.educ-info-entry {
	border: 2px solid #000;
	border-radius: 0.25rem;
	padding: 0.25rem;
	font-family: "Rubik";
	font-size: 1.5vmin;
}
.educ-info-entry img{
	width: 5.5%;
}
#edit-educ-info-btn {
	width: 5.5%;
	border: none;
	background-color: transparent;
}
#edit-educ-info-btn img {
	width: 100%;
}
.educ-info-entry-header {
	display: flex;
	font-family: "Rubik";
	font-size: 2vmin;
	align-items: center;
	justify-content: space-around;
}
.educ-info-form{
	animation: expand 250ms ease 1;
	transform-origin: top;
}
.educ-entry-buttons-space {
	margin-top: 1vmin;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
.educ-entry-button {
	display: flex;
	justify-content: space-around;
	align-items: center;
	min-width: 30%;
}
.educ-entry-button span {
	font-size: 1.25vmin;
}
.educ-entry-button img {
	width: 35%;
}`, "",{"version":3,"sources":["webpack://./src/styles/EducationalInformations/EditEducInfo.css"],"names":[],"mappings":"AAAA;CACC,sBAAsB;CACtB,sBAAsB;CACtB,gBAAgB;CAChB,oBAAoB;CACpB,kBAAkB;AACnB;AACA;CACC,WAAW;AACZ;AACA;CACC,WAAW;CACX,YAAY;CACZ,6BAA6B;AAC9B;AACA;CACC,WAAW;AACZ;AACA;CACC,aAAa;CACb,oBAAoB;CACpB,gBAAgB;CAChB,mBAAmB;CACnB,6BAA6B;AAC9B;AACA;CACC,8BAA8B;CAC9B,qBAAqB;AACtB;AACA;CACC,iBAAiB;CACjB,aAAa;CACb,mBAAmB;CACnB,6BAA6B;AAC9B;AACA;CACC,aAAa;CACb,6BAA6B;CAC7B,mBAAmB;CACnB,cAAc;AACf;AACA;CACC,mBAAmB;AACpB;AACA;CACC,UAAU;AACX","sourcesContent":[".educ-info-entry {\r\n\tborder: 2px solid #000;\r\n\tborder-radius: 0.25rem;\r\n\tpadding: 0.25rem;\r\n\tfont-family: \"Rubik\";\r\n\tfont-size: 1.5vmin;\r\n}\r\n.educ-info-entry img{\r\n\twidth: 5.5%;\r\n}\r\n#edit-educ-info-btn {\r\n\twidth: 5.5%;\r\n\tborder: none;\r\n\tbackground-color: transparent;\r\n}\r\n#edit-educ-info-btn img {\r\n\twidth: 100%;\r\n}\r\n.educ-info-entry-header {\r\n\tdisplay: flex;\r\n\tfont-family: \"Rubik\";\r\n\tfont-size: 2vmin;\r\n\talign-items: center;\r\n\tjustify-content: space-around;\r\n}\r\n.educ-info-form{\r\n\tanimation: expand 250ms ease 1;\r\n\ttransform-origin: top;\r\n}\r\n.educ-entry-buttons-space {\r\n\tmargin-top: 1vmin;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-around;\r\n}\r\n.educ-entry-button {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\tmin-width: 30%;\r\n}\r\n.educ-entry-button span {\r\n\tfont-size: 1.25vmin;\r\n}\r\n.educ-entry-button img {\r\n\twidth: 35%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/Header.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/Header.css ***!
  \*********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `header {
  width: 100vw;
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-title {
  width: 90%;
  min-height: 7.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: var(--primary1);
}
.page-title-text {
  font-family: "Rubik";
  font-size: 2.5vmax;
  color: #ffff;
  will-change: filter;
  transition: filter 300ms;
}
.page-title-text:hover {
  filter: drop-shadow(2rem 0.75rem 0.25rem #ffff);
}
`, "",{"version":3,"sources":["webpack://./src/styles/Header.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,iCAAiC;AACnC;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,wBAAwB;AAC1B;AACA;EACE,+CAA+C;AACjD","sourcesContent":["header {\n  width: 100vw;\n  min-height: 5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.page-title {\n  width: 90%;\n  min-height: 7.5vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1rem;\n  background-color: var(--primary1);\n}\n.page-title-text {\n  font-family: \"Rubik\";\n  font-size: 2.5vmax;\n  color: #ffff;\n  will-change: filter;\n  transition: filter 300ms;\n}\n.page-title-text:hover {\n  filter: drop-shadow(2rem 0.75rem 0.25rem #ffff);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/Inputs.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/Inputs.css ***!
  \*********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `fieldset{
    display: flex;
    flex-direction: column;
    padding: 1vmax;
    max-width: 100%;
}
.input-container {
    display: flex;
    flex-direction: column;
    max-width: 95%;
    margin: 0.5vmin;
}
label{
    text-align: left;
    font-size: 1vmax;
    font-family: "Rubik";
}
input{
    border: 2px rgb(185, 185, 185) solid;
    border-radius: 0.25rem;
    max-width: 90%;
    line-height: 1.5vmax;
    font-family: "Rubik";
    padding: 0.5vmin;
}
textarea {
    border: 2px rgb(185, 185, 185) solid;
    border-radius: 0.25rem;
    max-width: 90%;
    line-height: 1.5vmax;
    font-family: "Rubik";
    padding: 0.5vmin;
}
  *::placeholder{
    color: rgb(163, 161, 161);
}`, "",{"version":3,"sources":["webpack://./src/styles/Inputs.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,eAAe;AACnB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,oCAAoC;IACpC,sBAAsB;IACtB,cAAc;IACd,oBAAoB;IACpB,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,oCAAoC;IACpC,sBAAsB;IACtB,cAAc;IACd,oBAAoB;IACpB,oBAAoB;IACpB,gBAAgB;AACpB;EACE;IACE,yBAAyB;AAC7B","sourcesContent":["fieldset{\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 1vmax;\r\n    max-width: 100%;\r\n}\r\n.input-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 95%;\r\n    margin: 0.5vmin;\r\n}\r\nlabel{\r\n    text-align: left;\r\n    font-size: 1vmax;\r\n    font-family: \"Rubik\";\r\n}\r\ninput{\r\n    border: 2px rgb(185, 185, 185) solid;\r\n    border-radius: 0.25rem;\r\n    max-width: 90%;\r\n    line-height: 1.5vmax;\r\n    font-family: \"Rubik\";\r\n    padding: 0.5vmin;\r\n}\r\ntextarea {\r\n    border: 2px rgb(185, 185, 185) solid;\r\n    border-radius: 0.25rem;\r\n    max-width: 90%;\r\n    line-height: 1.5vmax;\r\n    font-family: \"Rubik\";\r\n    padding: 0.5vmin;\r\n}\r\n  *::placeholder{\r\n    color: rgb(163, 161, 161);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/PanelOpener.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/PanelOpener.css ***!
  \**************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.edit-panel-opener {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Rubik";
    font-size: 1.25vmax;
    margin-top: 10%;
}
.edit-panel-opener span {
    text-align: left;
}
#edit-panel-btn,
#edit-panel-btn-img {
    width: 30%;
    height: 20%;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    will-change: transform;
    transition: all 0.25s ease;
}
#edit-panel-btn-img.rotated {
    transform: rotate(90deg);
}
.edit-panel-divider {
    width: 100%;
    height: 1%;
    border: 2px solid #000;
    background-color: #000;
    margin-bottom: 1.5vmin;
}`, "",{"version":3,"sources":["webpack://./src/styles/PanelOpener.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,oBAAoB;IACpB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;AACA;;IAEI,UAAU;IACV,WAAW;IACX,YAAY;IACZ,6BAA6B;IAC7B,aAAa;IACb,yBAAyB;IACzB,sBAAsB;IACtB,0BAA0B;AAC9B;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,WAAW;IACX,UAAU;IACV,sBAAsB;IACtB,sBAAsB;IACtB,sBAAsB;AAC1B","sourcesContent":[".edit-panel-opener {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    font-family: \"Rubik\";\r\n    font-size: 1.25vmax;\r\n    margin-top: 10%;\r\n}\r\n.edit-panel-opener span {\r\n    text-align: left;\r\n}\r\n#edit-panel-btn,\r\n#edit-panel-btn-img {\r\n    width: 30%;\r\n    height: 20%;\r\n    border: none;\r\n    background-color: transparent;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    will-change: transform;\r\n    transition: all 0.25s ease;\r\n}\r\n#edit-panel-btn-img.rotated {\r\n    transform: rotate(90deg);\r\n}\r\n.edit-panel-divider {\r\n    width: 100%;\r\n    height: 1%;\r\n    border: 2px solid #000;\r\n    background-color: #000;\r\n    margin-bottom: 1.5vmin;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/PersonalInformations/DisplayPersonalInfo.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/PersonalInformations/DisplayPersonalInfo.css ***!
  \*******************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.personal-detail-entry {
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 1vmax;
    column-gap: 1vmin;
  }
  .personal-detail-entry img {
    width: 2.5%;
    margin-right: 0.75vmin;
  }
  #full-name-display {
    font-size: 2vmax;
    font-weight: 900;
    justify-content: center;
  }
  #job-title-display {
    font-size: 1.25vmax;
    justify-content: center;
  }
  .contact-details-space{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-items: center;
    margin-left: 37.5%;
  }`, "",{"version":3,"sources":["webpack://./src/styles/PersonalInformations/DisplayPersonalInfo.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,iBAAiB;EACnB;EACA;IACE,WAAW;IACX,sBAAsB;EACxB;EACA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,uBAAuB;EACzB;EACA;IACE,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,qBAAqB;IACrB,kBAAkB;EACpB","sourcesContent":[".personal-detail-entry {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: left;\r\n    font-size: 1vmax;\r\n    column-gap: 1vmin;\r\n  }\r\n  .personal-detail-entry img {\r\n    width: 2.5%;\r\n    margin-right: 0.75vmin;\r\n  }\r\n  #full-name-display {\r\n    font-size: 2vmax;\r\n    font-weight: 900;\r\n    justify-content: center;\r\n  }\r\n  #job-title-display {\r\n    font-size: 1.25vmax;\r\n    justify-content: center;\r\n  }\r\n  .contact-details-space{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    justify-items: center;\r\n    margin-left: 37.5%;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/TechnicalSkillsInformations/DisplayTechInfo.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/TechnicalSkillsInformations/DisplayTechInfo.css ***!
  \**********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.techskill-entry {
    font-size: 0.75vmax;
    text-align: left;
    margin-inline: 0.75vmax;
    margin-block: 0.25vmax;
}
`, "",{"version":3,"sources":["webpack://./src/styles/TechnicalSkillsInformations/DisplayTechInfo.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,sBAAsB;AAC1B","sourcesContent":[".techskill-entry {\r\n    font-size: 0.75vmax;\r\n    text-align: left;\r\n    margin-inline: 0.75vmax;\r\n    margin-block: 0.25vmax;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/TechnicalSkillsInformations/EditTechSkillsInfo.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/TechnicalSkillsInformations/EditTechSkillsInfo.css ***!
  \*************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.add-remove-techskill-btn-space,
.techskills-buttons-space {
    margin-top: 1.5vmin;
	display: flex;
	flex-direction: row;
    justify-content: space-evenly;
}
.techskills-button {
	display: flex;
	justify-content: space-around;
	align-items: center;
	min-width: 30%;
}
.techskills-button span {
	font-size: 1.25vmin;
}
.techskills-buttonn img {
	width: 35%;
}`, "",{"version":3,"sources":["webpack://./src/styles/TechnicalSkillsInformations/EditTechSkillsInfo.css"],"names":[],"mappings":"AAAA;;IAEI,mBAAmB;CACtB,aAAa;CACb,mBAAmB;IAChB,6BAA6B;AACjC;AACA;CACC,aAAa;CACb,6BAA6B;CAC7B,mBAAmB;CACnB,cAAc;AACf;AACA;CACC,mBAAmB;AACpB;AACA;CACC,UAAU;AACX","sourcesContent":[".add-remove-techskill-btn-space,\r\n.techskills-buttons-space {\r\n    margin-top: 1.5vmin;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n    justify-content: space-evenly;\r\n}\r\n.techskills-button {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\tmin-width: 30%;\r\n}\r\n.techskills-button span {\r\n\tfont-size: 1.25vmin;\r\n}\r\n.techskills-buttonn img {\r\n\twidth: 35%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/WebsiteInfo.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/WebsiteInfo.css ***!
  \**************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.website-info {
    padding: 5%;
    border-radius: 1rem;
    font-family: "Rubik";
    font-size: 1vmax;
    text-align: left;
    max-width: 100%;
    -webkit-box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);
    -moz-box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);
    box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);
    background-color: white;
}`, "",{"version":3,"sources":["webpack://./src/styles/WebsiteInfo.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,oDAAoD;IACpD,iDAAiD;IACjD,4CAA4C;IAC5C,uBAAuB;AAC3B","sourcesContent":[".website-info {\r\n    padding: 5%;\r\n    border-radius: 1rem;\r\n    font-family: \"Rubik\";\r\n    font-size: 1vmax;\r\n    text-align: left;\r\n    max-width: 100%;\r\n    -webkit-box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);\r\n    -moz-box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);\r\n    box-shadow: 0px 0px 50px 0px rgb(88, 88, 88);\r\n    background-color: white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/WorkExperienceInformations/DisplayWorkExpInfo.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/WorkExperienceInformations/DisplayWorkExpInfo.css ***!
  \************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.workexp-entry-display {
    margin-inline: 0.5vmax;
    margin-block: 0.5vmax;
    text-align: left;
    max-width: 40%;
}
.workexp-info-entry-title {
    font-weight: 700;
    font-size: 1vmax;
}
.workexp-info-additional-details {
    font-size: 0.75vmax;
}
.jobtasks-list{
    list-style-type: circle;
    margin-left: 2.75vmin;
}`, "",{"version":3,"sources":["webpack://./src/styles/WorkExperienceInformations/DisplayWorkExpInfo.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,qBAAqB;IACrB,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,mBAAmB;AACvB;AACA;IACI,uBAAuB;IACvB,qBAAqB;AACzB","sourcesContent":[".workexp-entry-display {\r\n    margin-inline: 0.5vmax;\r\n    margin-block: 0.5vmax;\r\n    text-align: left;\r\n    max-width: 40%;\r\n}\r\n.workexp-info-entry-title {\r\n    font-weight: 700;\r\n    font-size: 1vmax;\r\n}\r\n.workexp-info-additional-details {\r\n    font-size: 0.75vmax;\r\n}\r\n.jobtasks-list{\r\n    list-style-type: circle;\r\n    margin-left: 2.75vmin;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/WorkExperienceInformations/EditWorkExpInfo.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/WorkExperienceInformations/EditWorkExpInfo.css ***!
  \*********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.workexp-info-entry {
	border: 2px solid #000;
	border-radius: 0.25rem;
	padding: 0.25rem;
    font-family: "Rubik";
    font-size: 1.5vmin;
    text-align: center;
}
.workexp-info-entry img{
	width: 5.5%;
}
#edit-workexp-info-btn {
	width: 5.5%;
	border: none;
	background-color: transparent;
}
#edit-workexp-info-btn img {
	width: 100%;
}
.workexp-info-entry-header {
	display: flex;
	font-family: "Rubik";
	font-size: 2vmin;
	align-items: center;
	justify-content: space-around;
}
.workexp-info-entry-header span{
    width: 100%;
}
.workexp-info-form{
	animation: expand 250ms ease 1;
	transform-origin: top;
}
.toggle-btn-container{
    width: 100%;
    height: 3.5vmin;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 0.75vmin;
}
.toggle-btn-label{
    font-size: 1.5vmin;
    margin-left: 0.5vmin;
    font-family: "Rubik";
}
.toggle-btn{
    background-color: #BBBBBB;
    width: 6.5vmin;
    height: 3.5vmin;
    border-radius: 2vmin;
    cursor: pointer;
    position: relative;
}
.toggle-btn::before{
    position: absolute;
    content: '';
    background-color: #FFF;
    width: 3.25vmin;
    height: 3.25vmin;
    border-radius: 2vmin;
    margin: 0.125vmin;
}
input:checked+.toggle-btn{
    background: var(--primary1);
}
input:checked+.toggle-btn::before{
    transform: translateX(90%);
}
input[type="checkbox"]{
    display: none;
}
.workexp-entry-buttons-space {
	margin-top: 1vmin;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
.workexp-entry-button {
	display: flex;
	justify-content: space-around;
	align-items: center;
	min-width: 30%;
}
.workexp-entry-button span {
	font-size: 1.25vmin;
}
.workexp-entry-button img {
	width: 35%;
}`, "",{"version":3,"sources":["webpack://./src/styles/WorkExperienceInformations/EditWorkExpInfo.css"],"names":[],"mappings":"AAAA;CACC,sBAAsB;CACtB,sBAAsB;CACtB,gBAAgB;IACb,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;CACC,WAAW;AACZ;AACA;CACC,WAAW;CACX,YAAY;CACZ,6BAA6B;AAC9B;AACA;CACC,WAAW;AACZ;AACA;CACC,aAAa;CACb,oBAAoB;CACpB,gBAAgB;CAChB,mBAAmB;CACnB,6BAA6B;AAC9B;AACA;IACI,WAAW;AACf;AACA;CACC,8BAA8B;CAC9B,qBAAqB;AACtB;AACA;IACI,WAAW;IACX,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,oBAAoB;AACxB;AACA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,oBAAoB;AACxB;AACA;IACI,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,oBAAoB;IACpB,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,oBAAoB;IACpB,iBAAiB;AACrB;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,0BAA0B;AAC9B;AACA;IACI,aAAa;AACjB;AACA;CACC,iBAAiB;CACjB,aAAa;CACb,mBAAmB;CACnB,6BAA6B;AAC9B;AACA;CACC,aAAa;CACb,6BAA6B;CAC7B,mBAAmB;CACnB,cAAc;AACf;AACA;CACC,mBAAmB;AACpB;AACA;CACC,UAAU;AACX","sourcesContent":[".workexp-info-entry {\r\n\tborder: 2px solid #000;\r\n\tborder-radius: 0.25rem;\r\n\tpadding: 0.25rem;\r\n    font-family: \"Rubik\";\r\n    font-size: 1.5vmin;\r\n    text-align: center;\r\n}\r\n.workexp-info-entry img{\r\n\twidth: 5.5%;\r\n}\r\n#edit-workexp-info-btn {\r\n\twidth: 5.5%;\r\n\tborder: none;\r\n\tbackground-color: transparent;\r\n}\r\n#edit-workexp-info-btn img {\r\n\twidth: 100%;\r\n}\r\n.workexp-info-entry-header {\r\n\tdisplay: flex;\r\n\tfont-family: \"Rubik\";\r\n\tfont-size: 2vmin;\r\n\talign-items: center;\r\n\tjustify-content: space-around;\r\n}\r\n.workexp-info-entry-header span{\r\n    width: 100%;\r\n}\r\n.workexp-info-form{\r\n\tanimation: expand 250ms ease 1;\r\n\ttransform-origin: top;\r\n}\r\n.toggle-btn-container{\r\n    width: 100%;\r\n    height: 3.5vmin;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: left;\r\n    margin-top: 0.75vmin;\r\n}\r\n.toggle-btn-label{\r\n    font-size: 1.5vmin;\r\n    margin-left: 0.5vmin;\r\n    font-family: \"Rubik\";\r\n}\r\n.toggle-btn{\r\n    background-color: #BBBBBB;\r\n    width: 6.5vmin;\r\n    height: 3.5vmin;\r\n    border-radius: 2vmin;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n.toggle-btn::before{\r\n    position: absolute;\r\n    content: '';\r\n    background-color: #FFF;\r\n    width: 3.25vmin;\r\n    height: 3.25vmin;\r\n    border-radius: 2vmin;\r\n    margin: 0.125vmin;\r\n}\r\ninput:checked+.toggle-btn{\r\n    background: var(--primary1);\r\n}\r\ninput:checked+.toggle-btn::before{\r\n    transform: translateX(90%);\r\n}\r\ninput[type=\"checkbox\"]{\r\n    display: none;\r\n}\r\n.workexp-entry-buttons-space {\r\n\tmargin-top: 1vmin;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-around;\r\n}\r\n.workexp-entry-button {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n\tmin-width: 30%;\r\n}\r\n.workexp-entry-button span {\r\n\tfont-size: 1.25vmin;\r\n}\r\n.workexp-entry-button img {\r\n\twidth: 35%;\r\n}"],"sourceRoot":""}]);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Rubik-VariableFont_wght.ttf */ "./src/fonts/Rubik-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/DMSans-VariableFont.ttf */ "./src/fonts/DMSans-VariableFont.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*{
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}*/
/* put styles here for top level tags such as body 
and tags w/o selector. Font styles and root styles are also here*/
@font-face {
  font-family: "Rubik";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
  font-family: "DM Sans";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --primary1: #133e87;
  --primary2: #608bc1;
  --primary3: #cbdceb;
  --primary4: #b3c8cf;
  --secondary: #bed7dc;
  --teritiary: #f1eedc;
  --auxilarry1: #e5ddc5;
  --auxilarry2: #f3f3e0;
}
#root {
  max-width: 100vw;
  min-height: 100vh;
  padding: 1.5vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(226, 226, 226);
}
`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;EAWE;AACF;iEACiE;AACjE;EACE,oBAAoB;EACpB,4CAA8C;AAChD;AACA;EACE,sBAAsB;EACtB,4CAA0C;AAC5C;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;AACvB;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,oCAAoC;AACtC","sourcesContent":["/*{\n  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\n\n  color-scheme: light dark;\n  color: rgba(255, 255, 255, 0.87);\n  background-color: #242424;\n\n  font-synthesis: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}*/\n/* put styles here for top level tags such as body \nand tags w/o selector. Font styles and root styles are also here*/\n@font-face {\n  font-family: \"Rubik\";\n  src: url(../fonts/Rubik-VariableFont_wght.ttf);\n}\n@font-face {\n  font-family: \"DM Sans\";\n  src: url(../fonts/DMSans-VariableFont.ttf);\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n:root {\n  --primary1: #133e87;\n  --primary2: #608bc1;\n  --primary3: #cbdceb;\n  --primary4: #b3c8cf;\n  --secondary: #bed7dc;\n  --teritiary: #f1eedc;\n  --auxilarry1: #e5ddc5;\n  --auxilarry2: #f3f3e0;\n}\n#root {\n  max-width: 100vw;\n  min-height: 100vh;\n  padding: 1.5vw;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(226, 226, 226);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/AestheticChanger/AestheticChanger.css":
/*!**********************************************************!*\
  !*** ./src/styles/AestheticChanger/AestheticChanger.css ***!
  \**********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_AestheticChanger_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./AestheticChanger.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/AestheticChanger/AestheticChanger.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_AestheticChanger_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_AestheticChanger_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_AestheticChanger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_AestheticChanger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/styles/Button.css":
/*!*******************************!*\
  !*** ./src/styles/Button.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Button.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/Button.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/Controls.css":
/*!*********************************!*\
  !*** ./src/styles/Controls.css ***!
  \*********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Controls_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Controls.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/Controls.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Controls_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Controls_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Controls_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Controls_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/EducationalInformations/DisplayEducInfo.css":
/*!****************************************************************!*\
  !*** ./src/styles/EducationalInformations/DisplayEducInfo.css ***!
  \****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_DisplayEducInfo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./DisplayEducInfo.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/EducationalInformations/DisplayEducInfo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_DisplayEducInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_DisplayEducInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_DisplayEducInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_DisplayEducInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/EducationalInformations/EditEducInfo.css":
/*!*************************************************************!*\
  !*** ./src/styles/EducationalInformations/EditEducInfo.css ***!
  \*************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_EditEducInfo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./EditEducInfo.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/EducationalInformations/EditEducInfo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_EditEducInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_EditEducInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_EditEducInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_EditEducInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/Header.css":
/*!*******************************!*\
  !*** ./src/styles/Header.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Header.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/Header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/Inputs.css":
/*!*******************************!*\
  !*** ./src/styles/Inputs.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Inputs_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Inputs.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/Inputs.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Inputs_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Inputs_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Inputs_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Inputs_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/PanelOpener.css":
/*!************************************!*\
  !*** ./src/styles/PanelOpener.css ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_PanelOpener_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./PanelOpener.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/PanelOpener.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_PanelOpener_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_PanelOpener_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_PanelOpener_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_PanelOpener_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/PersonalInformations/DisplayPersonalInfo.css":
/*!*****************************************************************!*\
  !*** ./src/styles/PersonalInformations/DisplayPersonalInfo.css ***!
  \*****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_DisplayPersonalInfo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./DisplayPersonalInfo.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/PersonalInformations/DisplayPersonalInfo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_DisplayPersonalInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_DisplayPersonalInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_DisplayPersonalInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_DisplayPersonalInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/TechnicalSkillsInformations/DisplayTechInfo.css":
/*!********************************************************************!*\
  !*** ./src/styles/TechnicalSkillsInformations/DisplayTechInfo.css ***!
  \********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_DisplayTechInfo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./DisplayTechInfo.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/TechnicalSkillsInformations/DisplayTechInfo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_DisplayTechInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_DisplayTechInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_DisplayTechInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_DisplayTechInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/TechnicalSkillsInformations/EditTechSkillsInfo.css":
/*!***********************************************************************!*\
  !*** ./src/styles/TechnicalSkillsInformations/EditTechSkillsInfo.css ***!
  \***********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_EditTechSkillsInfo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./EditTechSkillsInfo.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/TechnicalSkillsInformations/EditTechSkillsInfo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_EditTechSkillsInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_EditTechSkillsInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_EditTechSkillsInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_EditTechSkillsInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/WebsiteInfo.css":
/*!************************************!*\
  !*** ./src/styles/WebsiteInfo.css ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_WebsiteInfo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./WebsiteInfo.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/WebsiteInfo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_WebsiteInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_WebsiteInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_WebsiteInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_WebsiteInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/WorkExperienceInformations/DisplayWorkExpInfo.css":
/*!**********************************************************************!*\
  !*** ./src/styles/WorkExperienceInformations/DisplayWorkExpInfo.css ***!
  \**********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_DisplayWorkExpInfo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./DisplayWorkExpInfo.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/WorkExperienceInformations/DisplayWorkExpInfo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_DisplayWorkExpInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_DisplayWorkExpInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_DisplayWorkExpInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_DisplayWorkExpInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/WorkExperienceInformations/EditWorkExpInfo.css":
/*!*******************************************************************!*\
  !*** ./src/styles/WorkExperienceInformations/EditWorkExpInfo.css ***!
  \*******************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_EditWorkExpInfo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./EditWorkExpInfo.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/WorkExperienceInformations/EditWorkExpInfo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_EditWorkExpInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_EditWorkExpInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_EditWorkExpInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_EditWorkExpInfo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/fonts/DMSans-VariableFont.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/DMSans-VariableFont.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b230ddb7eabb4b25e123.ttf";

/***/ }),

/***/ "./src/fonts/Rubik-VariableFont_wght.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/Rubik-VariableFont_wght.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3a4acc0356c6ea73f2c3.ttf";

/***/ }),

/***/ "./src/components/data.js":
/*!********************************!*\
  !*** ./src/components/data.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cvData: () => (/* binding */ cvData)
/* harmony export */ });
var cvData = {
  personalInformations: {
    firstName: 'John',
    lastName: 'Wick',
    jobTitle: 'Web Developer',
    inputEmail: 'jonathan-wick@gmail.com',
    contactNumber: '(+63)912-345-6789',
    inputAddress: 'Tennessee(TN), 38369',
    inputWebsite: 'https://portfolio-jwick.vercel.app/'
  },
  educationalInformations: [{
    id: 1731574604759,
    universityName: "Pamantasan ng Lungsod ng Maynila",
    degreeFinished: "BS Electronics Engineering",
    educationStartDate: "2014-06",
    educationEndDate: "2017-03"
  }, {
    id: 1731574604760,
    universityName: "Technological Institute of the Philippines",
    degreeFinished: "BS Electronics Engineering",
    educationStartDate: "2017-06",
    educationEndDate: "2020-03"
  }],
  workExperiences: [{
    id: 1731574652267,
    companyName: "IBM",
    jobPosition: "Java Developer",
    experienceStartDate: "2014-06",
    experienceEndDate: "2017-03",
    isPresent: false,
    jobTasks: ["Design, implement and maintain Java-based applications that can be high-volume and low-latency", "Propose changes to current Java infrastructure", "Prepare and produce releases of software components"]
  }, {
    id: 1731574652268,
    companyName: "Smart Telecommunications",
    jobPosition: "Network Engineer",
    experienceStartDate: "2017-06",
    experienceEndDate: "2020-03",
    isPresent: false,
    jobTasks: ["Configure and install various network devices and services (e.g., routers, switches, firewalls, load balancers, VPN, QoS)", "Perform network maintenance and system upgrades including service packs, patches, hot fixes and security configurations", "Monitor performance and ensure system availability and reliability"]
  }],
  techSkills: ["HTML5", "CSS3", "Java", "JavaScript", "React", "SQL", "MongoDB", "NodeJS", "Python", "Perl", "Bash"]
};

/***/ }),

/***/ "./src/components/misc.js":
/*!********************************!*\
  !*** ./src/components/misc.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertDate: () => (/* binding */ convertDate)
/* harmony export */ });
function convertDate(inputDate) {
  var rawDate = new Date(inputDate);
  var formattedDate = "".concat(rawDate.toLocaleString("default", {
    month: "short"
  }), " ").concat(rawDate.getFullYear());
  return formattedDate;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-fdb2cb"], () => (__webpack_exec__("./src/main.jsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.bc185221db26e9044644.js.map