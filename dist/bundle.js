/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 7036:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(7294));
var _reactRouterDom = __webpack_require__(9655);
__webpack_require__(3172);
var _MovieListPage = _interopRequireDefault(__webpack_require__(3607));
var _MovieDetailsWrapper = _interopRequireDefault(__webpack_require__(9432));
var _SearchForm = _interopRequireDefault(__webpack_require__(9648));
var _AddMovieForm = _interopRequireDefault(__webpack_require__(2124));
var _EditMovieForm = _interopRequireDefault(__webpack_require__(1804));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var App = function App() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_MovieListPage.default, null)
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_SearchForm.default, null)
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "new",
    element: /*#__PURE__*/_react.default.createElement(_AddMovieForm.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/movies/:movieId/edit",
    element: /*#__PURE__*/_react.default.createElement(_EditMovieForm.default, null)
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "movies/:movieId",
    element: /*#__PURE__*/_react.default.createElement(_MovieDetailsWrapper.default, null)
  })))));
};
var _default = App;
exports["default"] = _default;

/***/ }),

/***/ 8511:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = __webpack_require__(7294);
var _helpers = __webpack_require__(7841);
var _axios = _interopRequireDefault(__webpack_require__(7218));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var useFetch = function useFetch(setErrorDialogOpen, setErrorMessage) {
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var getData = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, signal) {
      var params,
        response,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            params = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            console.log('Infinite rendering', params);
            _context.prev = 2;
            _context.next = 5;
            return _axios.default.get(url, {
              params: params,
              signal: signal
            });
          case 5:
            response = _context.sent;
            setData(response.data.data || response.data);
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            if (_context.t0.name === 'AbortError' || signal.aborted) {
              console.log('Request canceled:', _context.t0.message);
            } else {
              console.error('Error fetching data:', _context.t0);
            }
            throw _context.t0;
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 9]]);
    }));
    return function (_x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }(), []);
  var postData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, data) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _axios.default.post(url, data);
          case 3:
            response = _context2.sent;
            if (!(response.status !== 201)) {
              _context2.next = 6;
              break;
            }
            throw new Error('Error adding movie.');
          case 6:
            return _context2.abrupt("return", response);
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.error('Error adding movie:', _context2.t0);
            console.error('Server response:', _context2.t0.response);
            if (_context2.t0.response && _context2.t0.response.status === 400) {
              setErrorDialogOpen(true);
              setErrorMessage(_context2.t0.response.data.messages.join(', '));
            } else {
              setErrorMessage('An unexpected error occurred. Please try again later.');
            }
            throw _context2.t0;
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    return function postData(_x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }();
  var putData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url, id, data) {
      var transformedData, response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            transformedData = (0, _helpers.editMovieData)(id, data);
            _context3.next = 4;
            return _axios.default.put("".concat(url), transformedData, {
              headers: {
                'Content-Type': 'application/json'
              }
            });
          case 4:
            response = _context3.sent;
            if (!(response.status !== 200)) {
              _context3.next = 7;
              break;
            }
            throw new Error('Error updating movie.');
          case 7:
            return _context3.abrupt("return", response);
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.error('Error updating movie:', _context3.t0);
            console.error('Server response:', _context3.t0.response);
            if (_context3.t0.response) {
              if (_context3.t0.response.status === 400) {
                setErrorDialogOpen(true);
                setErrorMessage(_context3.t0.response.data.messages.join(', '));
              } else if (_context3.t0.response.status === 404) {
                setErrorDialogOpen(true);
                setErrorMessage('Movie not found.');
              } else {
                setErrorMessage('An unexpected error occurred. Please try again later.');
              }
            } else {
              setErrorMessage('An unexpected error occurred. Please try again later.');
            }
            throw _context3.t0;
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 10]]);
    }));
    return function putData(_x6, _x7, _x8) {
      return _ref3.apply(this, arguments);
    };
  }();
  return {
    data: data,
    getData: getData,
    postData: postData,
    putData: putData
  };
};
var _default = useFetch;
exports["default"] = _default;

/***/ }),

/***/ 1771:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = __webpack_require__(7294);
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var usePagination = function usePagination(data, itemsPerPage) {
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var maxPages = Math.ceil(((data === null || data === void 0 ? void 0 : data.length) || 0) / itemsPerPage);
  var currentData = function currentData() {
    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    return (data === null || data === void 0 ? void 0 : data.slice(startIndex, endIndex)) || [];
  };
  var nextPage = function nextPage() {
    setCurrentPage(Math.min(currentPage + 1, maxPages));
  };
  var prevPage = function prevPage() {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };
  var resetPagination = (0, _react.useCallback)(function () {
    setCurrentPage(1);
  }, []);
  return {
    currentData: currentData,
    nextPage: nextPage,
    prevPage: prevPage,
    currentPage: currentPage,
    maxPages: maxPages,
    resetPagination: resetPagination
  };
};
var _default = usePagination;
exports["default"] = _default;

/***/ }),

/***/ 3607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(7294));
var _reactRouterDom = __webpack_require__(9655);
var _GenreSelect = _interopRequireDefault(__webpack_require__(6289));
var _SortControl = _interopRequireDefault(__webpack_require__(1997));
var _MovieTile = _interopRequireDefault(__webpack_require__(1938));
var _Header = _interopRequireDefault(__webpack_require__(6477));
var _Dialog = _interopRequireDefault(__webpack_require__(5461));
var _MovieForm = _interopRequireDefault(__webpack_require__(4085));
var _usePagination2 = _interopRequireDefault(__webpack_require__(1771));
var _useFetch2 = _interopRequireDefault(__webpack_require__(8511));
var _SearchContext = _interopRequireDefault(__webpack_require__(5801));
var _constants = __webpack_require__(8147);
__webpack_require__(846);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var MovieListPage = function MovieListPage() {
  var _useSearchParams = (0, _reactRouterDom.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var searchQuery = searchParams.get('query') || '';
  var sortCriterion = searchParams.get('sortBy') || '';
  var activeGenre = searchParams.get('genre') || '';
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDialogOpen = _useState2[0],
    setIsDialogOpen = _useState2[1];
  var sortOrder = sortCriterion === 'title' ? 'asc' : 'desc';
  var itemsPerPage = 6;
  var url = _constants.API_URL;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useFetch = (0, _useFetch2.default)(),
    loading = _useFetch.loading,
    error = _useFetch.error,
    fetchedMovies = _useFetch.data,
    getData = _useFetch.getData;
  var _usePagination = (0, _usePagination2.default)(fetchedMovies, itemsPerPage),
    currentData = _usePagination.currentData,
    nextPage = _usePagination.nextPage,
    prevPage = _usePagination.prevPage,
    currentPage = _usePagination.currentPage,
    maxPages = _usePagination.maxPages,
    resetPagination = _usePagination.resetPagination;
  var params = {
    sortBy: sortCriterion,
    sortOrder: sortOrder,
    search: searchQuery,
    searchBy: 'title',
    filter: activeGenre,
    offset: (currentPage - 1) * itemsPerPage,
    limit: itemsPerPage + 100
  };
  (0, _react.useEffect)(function () {
    var abortController = new AbortController();
    getData(url, abortController.signal, params);
    return function () {
      abortController.abort();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortCriterion, searchQuery, activeGenre]);
  var handleMovieClick = function handleMovieClick(movie) {
    navigate("/movies/".concat(movie.id), {
      state: {
        searchParams: searchParams.toString()
      }
    });
  };
  var toggleModal = function toggleModal() {
    setIsDialogOpen(function (prev) {
      return !prev;
    });
  };
  var handleSubmit = function handleSubmit(movie) {
    console.log('Submitted movie:', movie);
    setIsDialogOpen(false);
  };
  var handleSearchQueryChange = function handleSearchQueryChange(value) {
    setSearchParams(new URLSearchParams(_objectSpread(_objectSpread({}, searchParams), {}, {
      query: value
    })));
    resetPagination();
  };
  var handleSortCriterionChange = function handleSortCriterionChange(value) {
    setSearchParams(function (prev) {
      var newParams = new URLSearchParams(prev);
      newParams.set('sortBy', value);
      return newParams;
    });
  };
  var handleActiveGenreChange = function handleActiveGenreChange(_ref) {
    var value = _ref.target.value;
    setSearchParams(function (prev) {
      var newParams = new URLSearchParams(prev);
      newParams.set('genre', value);
      return newParams;
    });
  };
  return /*#__PURE__*/_react.default.createElement(_SearchContext.default.Provider, {
    value: {
      searchQuery: searchQuery,
      handleSearchQueryChange: handleSearchQueryChange
    }
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.default, {
    onAddMovie: toggleModal,
    initialSearchQuery: searchQuery
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "genre-sort-controls"
  }, /*#__PURE__*/_react.default.createElement(_GenreSelect.default, {
    selectedGenre: activeGenre,
    onSelect: handleActiveGenreChange
  }), /*#__PURE__*/_react.default.createElement(_SortControl.default, {
    sortCriterion: sortCriterion,
    onSortCriterion: handleSortCriterionChange
  }))), /*#__PURE__*/_react.default.createElement("main", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-list"
  }, loading && /*#__PURE__*/_react.default.createElement("div", null, "Loading..."), error && /*#__PURE__*/_react.default.createElement("div", null, "Error: ", error), currentData().slice(0, itemsPerPage).map(function (movie) {
    return /*#__PURE__*/_react.default.createElement(_MovieTile.default, {
      key: movie.id,
      movie: movie,
      onClick: handleMovieClick
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: prevPage,
    disabled: currentPage === 1
  }, "Previous"), /*#__PURE__*/_react.default.createElement("span", null, "Page ", currentPage, " of ", maxPages), /*#__PURE__*/_react.default.createElement("button", {
    onClick: nextPage,
    disabled: currentPage === maxPages
  }, "Next"))), isDialogOpen && /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    title: "Add Movie",
    onClose: toggleModal
  }, /*#__PURE__*/_react.default.createElement(_MovieForm.default, {
    onSubmit: handleSubmit
  }))));
};
var _default = MovieListPage;
exports["default"] = _default;

/***/ }),

/***/ 5801:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = __webpack_require__(7294);
var SearchContext = /*#__PURE__*/(0, _react.createContext)();
var _default = SearchContext;
exports["default"] = _default;

/***/ }),

/***/ 166:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(7294));
__webpack_require__(5126);
var _propTypes = _interopRequireDefault(__webpack_require__(5697));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var Button = function Button(_ref) {
  var children = _ref.children,
    type = _ref.type,
    className = _ref.className,
    onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "button ".concat(className),
    type: type,
    onClick: onClick
  }, children);
};
Button.propTypes = {
  children: _propTypes.default.node,
  type: _propTypes.default.string,
  className: _propTypes.default.string,
  onClick: _propTypes.default.func
};
var _default = Button;
exports["default"] = _default;

/***/ }),

/***/ 1743:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(7294));
__webpack_require__(8329);
var _propTypes = _interopRequireDefault(__webpack_require__(5697));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var ContextMenu = function ContextMenu(_ref) {
  var show = _ref.show,
    onClose = _ref.onClose,
    onEdit = _ref.onEdit,
    onDelete = _ref.onDelete;
  var handleEdit = function handleEdit(e) {
    onEdit();
    onClose(e);
  };
  var handleDelete = function handleDelete(e) {
    onDelete();
    onClose(e);
  };
  return show && /*#__PURE__*/_react.default.createElement("div", {
    className: "context-menu"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "context-menu__item",
    onClick: handleEdit
  }, "Edit"), /*#__PURE__*/_react.default.createElement("button", {
    className: "context-menu__item",
    onClick: handleDelete
  }, "Delete"));
};
ContextMenu.propTypes = {
  show: _propTypes.default.bool.isRequired,
  onClose: _propTypes.default.func.isRequired,
  onEdit: _propTypes.default.func.isRequired,
  onDelete: _propTypes.default.func.isRequired
};
var _default = ContextMenu;
exports["default"] = _default;

/***/ }),

/***/ 5461:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(7294));
var _propTypes = _interopRequireDefault(__webpack_require__(5697));
var _reactPortal = __webpack_require__(680);
var _focusTrapReact = _interopRequireDefault(__webpack_require__(4483));
__webpack_require__(333);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var Dialog = function Dialog(_ref) {
  var title = _ref.title,
    children = _ref.children,
    onClose = _ref.onClose;
  return /*#__PURE__*/_react.default.createElement(_reactPortal.Portal, null, /*#__PURE__*/_react.default.createElement(_focusTrapReact.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "dialog-overlay",
    onClick: onClose,
    "data-testid": "dialog-overlay",
    tabIndex: "-1"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dialog",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": "dialog-title"
  }, /*#__PURE__*/_react.default.createElement("header", {
    className: "dialog-header"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    id: "dialog-title"
  }, title), /*#__PURE__*/_react.default.createElement("button", {
    className: "dialog-close",
    onClick: onClose,
    autoFocus: true,
    tabIndex: "0"
  }, "\xD7")), /*#__PURE__*/_react.default.createElement("div", {
    className: "dialog-body"
  }, children)))));
};
Dialog.propTypes = {
  title: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired,
  onClose: _propTypes.default.func.isRequired
};
var _default = Dialog;
exports["default"] = _default;

/***/ }),

/***/ 6289:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(7294));
var _propTypes = _interopRequireDefault(__webpack_require__(5697));
var _genres = __webpack_require__(3291);
__webpack_require__(2313);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var GenreSelect = function GenreSelect(_ref) {
  var value = _ref.value,
    onSelect = _ref.onSelect;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDropdownOpen = _useState2[0],
    setIsDropdownOpen = _useState2[1];
  var handleGenreChange = function handleGenreChange(event) {
    onSelect(event);
  };
  var toggleDropdown = function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "genre-select ".concat(isDropdownOpen ? 'open' : ''),
    onClick: toggleDropdown
  }, /*#__PURE__*/_react.default.createElement("select", {
    title: "Genres",
    name: "genres",
    onChange: handleGenreChange,
    value: value
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "All"
  }, "All"), _genres.genres.map(function (genres) {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: genres,
      key: genres
    }, genres);
  })));
};
GenreSelect.propTypes = {
  // genres: PropTypes.arrayOf(PropTypes.string),
  value: _propTypes.default.string,
  onSelect: _propTypes.default.func.isRequired
};
var _default = GenreSelect;
exports["default"] = _default;

/***/ }),

/***/ 6477:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(7294));
var _propTypes = _interopRequireDefault(__webpack_require__(5697));
var _NetflixLogo = _interopRequireDefault(__webpack_require__(1977));
__webpack_require__(3478);
var _SearchContext = _interopRequireDefault(__webpack_require__(5801));
var _reactRouter = __webpack_require__(9250);
var _reactRouterDom = __webpack_require__(9655);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var Header = function Header(_ref) {
  var selectedMovie = _ref.selectedMovie,
    onAddMovie = _ref.onAddMovie,
    children = _ref.children;
  var _useContext = (0, _react.useContext)(_SearchContext.default),
    searchQuery = _useContext.searchQuery,
    handleSearchQueryChange = _useContext.handleSearchQueryChange;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var handleAddMovieClick = function handleAddMovieClick() {
    navigate('/new');
  };
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "container header ".concat(selectedMovie ? 'movie-selected' : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header-container"
  }, /*#__PURE__*/_react.default.createElement(_NetflixLogo.default, null), /*#__PURE__*/_react.default.createElement(_reactRouter.Outlet, {
    context: [searchQuery, handleSearchQueryChange]
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "add-button"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "add",
    onClick: handleAddMovieClick
  }, "+ Add movie"))), children);
};
Header.propTypes = {
  selectedMovie: _propTypes.default.shape({
    user: _propTypes.default.shape({
      name: _propTypes.default.string.isRequired
    }).isRequired
  }),
  onAddMovie: _propTypes.default.func,
  children: _propTypes.default.node
};
var _default = Header;
exports["default"] = _default;

/***/ }),

/***/ 1977:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(7294));
__webpack_require__(3595);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var NetflixLogo = function NetflixLogo() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "netflix-logo"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "netflix-logo__netflix"
  }, "netflix"), /*#__PURE__*/_react.default.createElement("span", {
    className: "netflix-logo__roulette"
  }, "roulette"));
};
var _default = NetflixLogo;
exports["default"] = _default;

/***/ }),

/***/ 9432:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(7294));
var _reactRouterDom = __webpack_require__(9655);
var _useFetch2 = _interopRequireDefault(__webpack_require__(8511));
var _MovieDetails = _interopRequireDefault(__webpack_require__(3275));
__webpack_require__(2716);
var _constants = __webpack_require__(8147);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var MovieDetailsWrapper = function MovieDetailsWrapper() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    movieId = _useParams.movieId;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var url = "".concat(_constants.API_URL, "/").concat(movieId);
  var _useFetch = (0, _useFetch2.default)(),
    loading = _useFetch.loading,
    error = _useFetch.error,
    movieData = _useFetch.data,
    getData = _useFetch.getData;
  var movie = Array.isArray(movieData) ? movieData[0] : movieData;
  (0, _react.useEffect)(function () {
    var abortController = new AbortController();
    getData(url, abortController.signal);
    return function () {
      abortController.abort();
    };
  }, [url, getData]);
  var handleMovieDetailsClose = function handleMovieDetailsClose() {
    navigate('/');
  };
  if (loading) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "movie-details"
    }, "Loading...");
  }
  if (error) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "movie-details"
    }, "Error: ", error);
  }
  if (!movie) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "movie-details"
    }, "Movie not found");
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-details-wrapper",
    onClick: handleMovieDetailsClose
  }, /*#__PURE__*/_react.default.createElement(_MovieDetails.default, {
    movie: movie,
    onClose: handleMovieDetailsClose
  }));
};
var _default = MovieDetailsWrapper;
exports["default"] = _default;

/***/ }),

/***/ 3275:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(7294));
var _propTypes = _interopRequireDefault(__webpack_require__(5697));
var _Button = _interopRequireDefault(__webpack_require__(166));
__webpack_require__(9709);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var MovieDetails = function MovieDetails(_ref) {
  var movie = _ref.movie,
    onClose = _ref.onClose;
  if (!movie) {
    return /*#__PURE__*/_react.default.createElement("p", null, "Movie not found");
  }
  var imageUrl = movie.poster_path,
    movieName = movie.title,
    releaseYear = movie.release_date,
    rating = movie.vote_average,
    duration = movie.runtime,
    description = movie.overview;
  var imageBaseUrl = 'https://image.tmdb.org/t/p/';
  var imageWidth = 'w185';
  var handleCloseClick = function handleCloseClick(e) {
    e.stopPropagation();
    if (typeof onClose === 'function') {
      onClose();
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-details"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "movie-details__close",
    onClick: handleCloseClick
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("img", {
    className: "movie-details__image",
    src: "".concat(imageBaseUrl).concat(imageWidth).concat(imageUrl),
    alt: movieName
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-details__info"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "movie-details__title"
  }, movieName), /*#__PURE__*/_react.default.createElement("p", {
    className: "movie-details__year"
  }, releaseYear), /*#__PURE__*/_react.default.createElement("p", {
    className: "movie-details__rating"
  }, "Rating: ", rating), /*#__PURE__*/_react.default.createElement("p", {
    className: "movie-details__duration"
  }, "Duration: ", duration, " min"), /*#__PURE__*/_react.default.createElement("p", {
    className: "movie-details__description"
  }, description)));
};
MovieDetails.propTypes = {
  movie: _propTypes.default.shape({
    poster_path: _propTypes.default.string,
    title: _propTypes.default.string.isRequired,
    release_date: _propTypes.default.string.isRequired,
    vote_average: _propTypes.default.number.isRequired,
    runtime: _propTypes.default.number,
    overview: _propTypes.default.string.isRequired
  }),
  onClose: _propTypes.default.func
};
var _default = MovieDetails;
exports["default"] = _default;

/***/ }),

/***/ 2124:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(7294));
var _Dialog = _interopRequireDefault(__webpack_require__(5461));
var _MovieForm = _interopRequireDefault(__webpack_require__(4085));
var _constants = __webpack_require__(8147);
var _useFetch2 = _interopRequireDefault(__webpack_require__(8511));
var _helpers = __webpack_require__(7841);
var _reactRouterDom = __webpack_require__(9655);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var AddMovieForm = function AddMovieForm() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    errorDialogOpen = _useState2[0],
    setErrorDialogOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    errorMessage = _useState4[0],
    setErrorMessage = _useState4[1];
  var _useFetch = (0, _useFetch2.default)(_constants.API_POST_URL),
    postData = _useFetch.postData;
  console.log(setErrorDialogOpen);
  var handleClose = function handleClose() {
    navigate('/');
  };
  var handleErrorDialogClose = function handleErrorDialogClose() {
    setErrorMessage('');
  };
  var onSubmit = function onSubmit(data) {
    console.log('Submitting:', data);
    var formattedData = (0, _helpers.formatMovieData)(data);
    console.log('Formatted data:', formattedData);
    var response = postData("".concat(_constants.API_POST_URL, "/movies"), formattedData);
    console.log('Movie added:', response.data);
    navigate('/');
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    title: "Add Movie",
    onClose: handleClose
  }, /*#__PURE__*/_react.default.createElement(_MovieForm.default, {
    onSubmit: onSubmit,
    onReset: function onReset() {
      console.log('Resetting');
    }
  })), errorDialogOpen && /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    title: "Error",
    onClose: handleErrorDialogClose
  }, /*#__PURE__*/_react.default.createElement("p", null, "An error occurred while adding the movie. Please check the input values and try again.")), errorMessage && /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    title: "Error",
    onClose: handleErrorDialogClose
  }, /*#__PURE__*/_react.default.createElement("p", null, errorMessage)));
};
var _default = AddMovieForm;
exports["default"] = _default;

/***/ }),

/***/ 1804:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(7294));
var _reactRouterDom = __webpack_require__(9655);
var _Dialog = _interopRequireDefault(__webpack_require__(5461));
var _MovieForm = _interopRequireDefault(__webpack_require__(4085));
var _constants = __webpack_require__(8147);
var _useFetch2 = _interopRequireDefault(__webpack_require__(8511));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var EditMovieForm = function EditMovieForm() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    movieId = _useParams.movieId;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    errorDialogOpen = _useState2[0],
    setErrorDialogOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    errorMessage = _useState4[0],
    setErrorMessage = _useState4[1];
  console.log(errorDialogOpen);
  console.log(errorMessage);
  var _useFetch = (0, _useFetch2.default)(setErrorDialogOpen, setErrorMessage),
    data = _useFetch.data,
    loading = _useFetch.loading,
    error = _useFetch.error,
    getData = _useFetch.getData,
    put = _useFetch.putData;
  (0, _react.useEffect)(function () {
    if (movieId) {
      var abortController = new AbortController();
      var fetchData = function fetchData() {
        getData("".concat(_constants.API_EDIT_URL, "/movies/").concat(movieId), abortController.signal);
      };
      fetchData();
      return function () {
        abortController.abort();
      };
    }
  }, [movieId, getData]);
  var onSubmit = function onSubmit(data) {
    put("".concat(_constants.API_EDIT_URL, "/movies"), movieId, data);
    navigate('/');
  };
  var handleClose = function handleClose() {
    navigate('/');
  };
  if (loading) {
    return /*#__PURE__*/_react.default.createElement("div", null, "Loading...");
  }
  if (error) {
    return /*#__PURE__*/_react.default.createElement("div", null, "Error: ", error);
  }
  var movie = data && !Array.isArray(data) ? data : {};
  return /*#__PURE__*/_react.default.createElement(_Dialog.default, {
    title: "Edit Movie",
    onClose: handleClose
  }, /*#__PURE__*/_react.default.createElement(_MovieForm.default, {
    onSubmit: onSubmit,
    movie: movie
  }));
};
var _default = EditMovieForm;
exports["default"] = _default;

/***/ }),

/***/ 4085:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(7294));
var _propTypes = _interopRequireDefault(__webpack_require__(5697));
__webpack_require__(1272);
var _Button = _interopRequireDefault(__webpack_require__(166));
var _GenreSelect = _interopRequireDefault(__webpack_require__(6289));
var _reactHookForm = __webpack_require__(930);
var _genres = __webpack_require__(3291);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var MovieForm = function MovieForm(_ref) {
  var onSubmit = _ref.onSubmit,
    movie = _ref.movie,
    onReset = _ref.onReset;
  var defaultValues = {
    id: '',
    title: '',
    tagline: '',
    vote_average: '',
    vote_count: '',
    release_date: '',
    poster_path: '',
    overview: '',
    budget: '',
    revenue: '',
    runtime: '',
    genres: 'All'
  };
  var _useForm = (0, _reactHookForm.useForm)({
      defaultValues: _objectSpread(_objectSpread({}, defaultValues), movie)
    }),
    control = _useForm.control,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.formState.errors,
    reset = _useForm.reset;
  (0, _react.useEffect)(function () {
    reset(movie);
  }, [movie, reset]);
  var rules = {
    title: {
      required: true
    },
    poster_path: {
      required: true
    },
    release_date: {
      required: true
    },
    rating: {
      required: true
    },
    vote_average: {
      required: true,
      min: 0
    },
    runtime: {
      required: true,
      min: 0
    },
    genres: {
      required: true
    },
    overview: {
      required: true
    }
  };
  var onSubmitHandler = function onSubmitHandler(data) {
    if (typeof onSubmit === 'function') {
      onSubmit(data);
    }
  };
  var handleReset = function handleReset(e) {
    e.preventDefault();
    reset(_objectSpread({}, defaultValues));
    if (typeof onReset === 'function') {
      onReset();
    }
  };
  return /*#__PURE__*/_react.default.createElement("form", {
    className: "movie-form",
    onSubmit: handleSubmit(onSubmitHandler)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "title"
  }, "Title"), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "title",
    control: control,
    rules: rules.title,
    render: function render(_ref2) {
      var field = _ref2.field;
      return /*#__PURE__*/_react.default.createElement("input", _extends({
        id: "title",
        type: "text"
      }, field));
    }
  }), !!errors.title && /*#__PURE__*/_react.default.createElement("p", null, "Title is required")), /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "poster_path"
  }, "Movie URL"), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "poster_path",
    control: control,
    rules: rules.poster_path,
    render: function render(_ref3) {
      var field = _ref3.field;
      return /*#__PURE__*/_react.default.createElement("input", _extends({
        id: "poster_path",
        type: "text",
        name: "poster_path",
        placeholder: "Enter URL of poster image"
      }, field));
    }
  }), !!errors.poster_path && /*#__PURE__*/_react.default.createElement("p", null, "Poster Path is required"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "release_date"
  }, "Release Date"), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "release_date",
    control: control,
    rules: rules.release_date,
    render: function render(_ref4) {
      var field = _ref4.field;
      return /*#__PURE__*/_react.default.createElement("input", _extends({
        id: "release_date",
        type: "date",
        name: "release_date",
        placeholder: "Select date"
      }, field));
    }
  }), !!errors.release_date && /*#__PURE__*/_react.default.createElement("p", null, "Release Date is required")), /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "vote_average"
  }, "Rating"), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "vote_average",
    control: control,
    rules: rules.vote_average,
    render: function render(_ref5) {
      var field = _ref5.field;
      return /*#__PURE__*/_react.default.createElement("input", _extends({
        id: "vote_average",
        type: "text",
        name: "vote_average"
      }, field));
    }
  }), !!errors.vote_average && /*#__PURE__*/_react.default.createElement("p", null, "Rating is required and should be more than 0")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    id: "genre-label",
    htmlFor: "genres"
  }, "Genre"), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "genres",
    control: control,
    defaultValue: defaultValues.genres || 'All',
    render: function render(_ref6) {
      var field = _ref6.field;
      return /*#__PURE__*/_react.default.createElement(_GenreSelect.default, {
        genres: _genres.genres,
        onSelect: field.onChange,
        value: field.value.toString()
      });
    }
  }), !!errors.genres && /*#__PURE__*/_react.default.createElement("p", null, "Genre is required"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__column"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "runtime"
  }, "Runtime"), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "runtime",
    control: control,
    rules: rules.runtime,
    render: function render(_ref7) {
      var field = _ref7.field;
      return /*#__PURE__*/_react.default.createElement("input", _extends({
        id: "runtime",
        type: "number",
        name: "runtime",
        placeholder: "minutes"
      }, field));
    }
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__row movie-form__row--full-width"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "overview"
  }, "Overview"), /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    name: "overview",
    control: control,
    rules: rules.overview,
    render: function render(_ref8) {
      var field = _ref8.field;
      return /*#__PURE__*/_react.default.createElement("textarea", _extends({
        id: "overview",
        name: "overview",
        placeholder: "Enter a brief overview of the movie"
      }, field));
    }
  }), !!errors.overview && /*#__PURE__*/_react.default.createElement("p", null, "Overview is required"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-form__actions"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "button",
    onClick: function onClick(e) {
      handleReset(e);
      if (typeof onReset === 'function') {
        onReset(reset);
      }
    }
  }, "RESET"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit"
  }, "SUBMIT")));
};
MovieForm.propTypes = {
  onSubmit: _propTypes.default.func.isRequired,
  onReset: _propTypes.default.func,
  movie: _propTypes.default.object
};
var _default = MovieForm;
exports["default"] = _default;

/***/ }),

/***/ 1938:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(7294));
var _reactRouterDom = __webpack_require__(9655);
var _propTypes = _interopRequireDefault(__webpack_require__(5697));
__webpack_require__(4905);
var _ContextMenu = _interopRequireDefault(__webpack_require__(1743));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var MovieTile = function MovieTile(_ref) {
  var movie = _ref.movie,
    onClick = _ref.onClick;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var title = movie.title,
    release_date = movie.release_date,
    genres = movie.genres,
    poster_path = movie.poster_path;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showContextMenu = _useState2[0],
    setShowContextMenu = _useState2[1];
  var toggleContextMenu = function toggleContextMenu(e) {
    e.stopPropagation();
    setShowContextMenu(function (prevShowContextMenu) {
      return !prevShowContextMenu;
    });
  };
  var handleEdit = function handleEdit() {
    navigate("/movies/".concat(movie.id, "/edit"), {
      state: {
        movie: movie
      }
    });
  };
  var handleDelete = function handleDelete() {
    console.log('Delete action for movie:', movie);
  };
  var handleTileClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (onClick) {
              onClick(movie);
            }
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleTileClick() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(e) {
      if (showContextMenu) {
        setShowContextMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return function () {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showContextMenu]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-tile"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "movie-tile__button",
    onClick: handleTileClick
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "movie-tile__image",
    src: "https://image.tmdb.org/t/p/w185".concat(poster_path),
    alt: title
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-tile__info"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "movie-tile__title"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "movie-tile__year"
  }, release_date), /*#__PURE__*/_react.default.createElement("p", {
    className: "movie-tile__genres"
  }, genres ? genres.join(', ') : ''), /*#__PURE__*/_react.default.createElement("p", {
    className: "movie-tile__rating"
  }, "Rating: ", movie.vote_average), /*#__PURE__*/_react.default.createElement("p", {
    className: "movie-tile__duration"
  }, "Duration: ", movie.runtime, " min"), /*#__PURE__*/_react.default.createElement("p", {
    className: "movie-tile__description"
  }, movie.overview || 'No overview available.'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "movie-tile__context-menu-wrapper"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "movie-tile__context-menu-toggle",
    "aria-label": "context menu",
    onClick: toggleContextMenu
  }, "\u2026"), /*#__PURE__*/_react.default.createElement(_ContextMenu.default, {
    show: showContextMenu,
    onClose: toggleContextMenu,
    onEdit: handleEdit,
    onDelete: handleDelete
  })));
};
MovieTile.propTypes = {
  movie: _propTypes.default.shape({
    title: _propTypes.default.string.isRequired,
    id: _propTypes.default.number.isRequired,
    release_date: _propTypes.default.string.isRequired,
    genres: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
    poster_path: _propTypes.default.string.isRequired,
    vote_average: _propTypes.default.number.isRequired,
    runtime: _propTypes.default.number,
    overview: _propTypes.default.string
  }).isRequired,
  onClick: _propTypes.default.func
};
var _default = MovieTile;
exports["default"] = _default;

/***/ }),

/***/ 3291:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.genres = void 0;
var genres = ['Action', 'Animation', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Family', 'Science Fiction', 'Thriller', 'Fantasy'];
exports.genres = genres;

/***/ }),

/***/ 9648:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(7294));
var _propTypes = _interopRequireDefault(__webpack_require__(5697));
var _SearchContext = _interopRequireDefault(__webpack_require__(5801));
var _Button = _interopRequireDefault(__webpack_require__(166));
var _reactRouterDom = __webpack_require__(9655);
__webpack_require__(4452);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var SearchForm = function SearchForm(_ref) {
  var initialSearchQuery = _ref.initialSearchQuery;
  var _useState = (0, _react.useState)(initialSearchQuery || ''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useContext = (0, _react.useContext)(_SearchContext.default),
    searchQuery = _useContext.searchQuery,
    handleSearchQueryChange = _useContext.handleSearchQueryChange;
  console.log(searchQuery);
  var handleForm = function handleForm(event) {
    event.preventDefault();
    if (value.trim() === '') {
      handleSearchQueryChange('');
    } else {
      handleSearchQueryChange(value);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "search-title"
  }, "Find your movie"), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleForm
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "What do you want to watch?",
    value: value,
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      return setValue(value);
    }
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "submit"
  }, "search")), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Outlet, null));
};
SearchForm.propTypes = {
  initialSearchQuery: _propTypes.default.string
};
var _default = SearchForm;
exports["default"] = _default;

/***/ }),

/***/ 1997:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(7294));
var _propTypes = _interopRequireDefault(__webpack_require__(5697));
__webpack_require__(3803);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var SortControl = function SortControl(_ref) {
  var sortCriterion = _ref.sortCriterion,
    onSortCriterion = _ref.onSortCriterion;
  var handleSortChange = function handleSortChange(_ref2) {
    var value = _ref2.target.value;
    onSortCriterion(value);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "sort-control",
    "data-testid": "sort-control"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "sort-by",
    className: "sort-control__label"
  }, "SORT BY:"), /*#__PURE__*/_react.default.createElement("select", {
    className: "sort-control__select",
    name: "sort-by",
    id: "sort-by",
    onChange: handleSortChange,
    value: sortCriterion
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "release_date"
  }, "RELEASE DATE"), /*#__PURE__*/_react.default.createElement("option", {
    value: "title"
  }, "TITLE")));
};
SortControl.propTypes = {
  sortCriterion: _propTypes.default.string.isRequired,
  onSortCriterion: _propTypes.default.func.isRequired
};
var _default = SortControl;
exports["default"] = _default;

/***/ }),

/***/ 8147:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.API_URL = exports.API_POST_URL = exports.API_EDIT_URL = void 0;
var API_URL = 'http://localhost:4000/movies';
exports.API_URL = API_URL;
var API_EDIT_URL = 'http://localhost:4000';
exports.API_EDIT_URL = API_EDIT_URL;
var API_POST_URL = 'http://localhost:4000';
exports.API_POST_URL = API_POST_URL;

/***/ }),

/***/ 7841:
/***/ (function(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.formatMovieData = exports.editMovieData = void 0;
var formatMovieData = function formatMovieData(data) {
  return {
    title: data.title || 'New Added Movie',
    poster_path: data.poster_path || 'https://via.placeholder.com/150',
    release_date: data.release_date || '2001-01-01',
    vote_average: data.vote_average ? parseFloat(data.vote_average) : 0,
    runtime: data.runtime ? parseInt(data.runtime, 10) : 0,
    genres: [data.genres || 'Other'],
    overview: data.overview || 'No overview'
  };
};
exports.formatMovieData = formatMovieData;
var editMovieData = function editMovieData(id, data) {
  var newGenres = Array.isArray(data.genres) ? data.genres : [data.genres];
  return {
    id: parseInt(id),
    title: data.title,
    tagline: data.tagline,
    vote_average: parseFloat(data.vote_average),
    vote_count: parseInt(data.vote_count),
    release_date: data.release_date,
    poster_path: data.poster_path,
    overview: data.overview,
    budget: parseInt(data.budget),
    revenue: parseInt(data.revenue),
    runtime: parseInt(data.runtime),
    genres: newGenres
  };
};
exports.editMovieData = editMovieData;

/***/ }),

/***/ 1197:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {



var _react = _interopRequireDefault(__webpack_require__(7294));
__webpack_require__(4296);
var _App = _interopRequireDefault(__webpack_require__(7036));
var _client = _interopRequireDefault(__webpack_require__(745));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var root = _client.default.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_App.default, null)));

/***/ }),

/***/ 4554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{margin:0;padding:0;box-sizing:border-box}body{font-family:\"Montserrat\",sans-serif;background-color:#232323;color:#fff}.container{max-width:1200px;margin:0 auto;padding:0 15px}.controls{display:flex;justify-content:space-between;margin-top:20px}.movie-list{display:grid;grid-template-columns:repeat(auto-fill, minmax(220px, 1fr));gap:30px;margin-top:30px}.marg{margin-top:15px;margin-bottom:20px}", "",{"version":3,"sources":["webpack://./src/App.scss"],"names":[],"mappings":"AAAA,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAGJ,KACI,mCAAA,CACA,wBAAA,CACA,UAAA,CAGJ,WACI,gBAAA,CACA,aAAA,CACA,cAAA,CAGJ,UACI,YAAA,CACA,6BAAA,CACA,eAAA,CAGJ,YACE,YAAA,CACA,2DAAA,CACA,QAAA,CACA,eAAA,CAGF,MACI,eAAA,CACA,kBAAA","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Montserrat', sans-serif;\r\n    background-color: #232323;\r\n    color: #ffffff;\r\n}\r\n\r\n.container {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 15px;\r\n}\r\n\r\n.controls {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 20px;\r\n}\r\n\r\n.movie-list {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\r\n  gap: 30px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.marg {\r\n    margin-top: 15px;\r\n    margin-bottom: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".movie-list{display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:32px;margin-top:24px}@media(max-width: 1024px){.movie-list{grid-gap:24px}}@media(max-width: 768px){.movie-list{grid-gap:16px;grid-template-columns:repeat(2, 1fr)}}@media(max-width: 480px){.movie-list{grid-gap:8px;grid-template-columns:1fr}}.movie-list .movie-card{max-height:calc((100% - 32px)/2);overflow:hidden}.genre-sort-controls{display:flex;justify-content:space-between;margin-top:20px;z-index:1}.pagination{display:flex;justify-content:center;align-items:center;margin-top:24px;padding:16px}.pagination button{background-color:#2c2c2c;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:16px;margin:0 8px;padding:8px 12px;transition:background-color .3s}.pagination button:hover{background-color:#4c4c4c}.pagination button:disabled{background-color:#1c1c1c;cursor:not-allowed}.pagination span{font-size:16px}", "",{"version":3,"sources":["webpack://./src/Pages/MovieList/MovieListPage.scss"],"names":[],"mappings":"AAAA,YACI,YAAA,CACA,oCAAA,CACA,aAAA,CACA,eAAA,CAEA,0BANJ,YAOQ,aAAA,CAAA,CAGJ,yBAVJ,YAWQ,aAAA,CACA,oCAAA,CAAA,CAGJ,yBAfJ,YAgBQ,YAAA,CACA,yBAAA,CAAA,CAGR,wBACI,gCAAA,CACA,eAAA,CAEJ,qBACI,YAAA,CACA,6BAAA,CACA,eAAA,CACA,SAAA,CAEJ,YACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CACA,YAAA,CAEA,mBACI,wBAAA,CACA,WAAA,CACA,iBAAA,CACA,UAAA,CACA,cAAA,CACA,cAAA,CACA,YAAA,CACA,gBAAA,CACA,+BAAA,CAEA,yBACI,wBAAA,CAGJ,4BACI,wBAAA,CACA,kBAAA,CAIR,iBACI,cAAA","sourcesContent":[".movie-list {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-gap: 32px;\r\n    margin-top: 24px;\r\n\r\n    @media (max-width: 1024px) {\r\n        grid-gap: 24px;\r\n    }\r\n\r\n    @media (max-width: 768px) {\r\n        grid-gap: 16px;\r\n        grid-template-columns: repeat(2, 1fr);\r\n    }\r\n\r\n    @media (max-width: 480px) {\r\n        grid-gap: 8px;\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n.movie-list .movie-card {\r\n    max-height: calc((100% - 32px) / 2);\r\n    overflow: hidden;\r\n}\r\n.genre-sort-controls {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 20px;\r\n    z-index: 1;\r\n}\r\n.pagination {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 24px;\r\n    padding: 16px;\r\n\r\n    button {\r\n        background-color: #2c2c2c;\r\n        border: none;\r\n        border-radius: 4px;\r\n        color: #ffffff;\r\n        cursor: pointer;\r\n        font-size: 16px;\r\n        margin: 0 8px;\r\n        padding: 8px 12px;\r\n        transition: background-color 0.3s;\r\n\r\n        &:hover {\r\n            background-color: #4c4c4c;\r\n        }\r\n\r\n        &:disabled {\r\n            background-color: #1c1c1c;\r\n            cursor: not-allowed;\r\n        }\r\n    }\r\n\r\n    span {\r\n        font-size: 16px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button{text-transform:uppercase;border-radius:5px;cursor:pointer;height:57px;padding:10px 35px;background-color:#f65261;color:#fff;border:none}.button:hover{background-color:#2e2425;color:#fff}.button:focus{box-shadow:0 0 0 .2rem #d87880}", "",{"version":3,"sources":["webpack://./src/components/Button/Button.scss"],"names":[],"mappings":"AAAA,QACI,wBAAA,CACA,iBAAA,CACA,cAAA,CAEA,WAAA,CAEA,iBAAA,CACA,wBAAA,CACA,UAAA,CACA,WAAA,CAEA,cACQ,wBAAA,CACA,UAAA,CAGJ,cACI,8BAAA","sourcesContent":[".button {\r\n    text-transform: uppercase;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n\r\n    height: 57px;\r\n    // width: 233px;\r\n    padding: 10px 35px;\r\n    background-color: #f65261;\r\n    color: #ffffff;\r\n    border: none;\r\n    \r\n    &:hover {\r\n            background-color: #2e2425;\r\n            color: #ffffff;\r\n        }\r\n    \r\n        &:focus {\r\n            box-shadow: 0 0 0 0.2rem #d87880;\r\n        }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".context-menu{position:absolute;background-color:#424242;border-radius:4px;box-shadow:0 2px 8px rgba(0,0,0,.3);overflow:hidden}.context-menu__item{display:block;padding:12px 24px;cursor:pointer;text-align:left;width:100%;border:none;background-color:#424242;color:#fff;font-size:16px;line-height:1.5}.context-menu__item:hover{background-color:#616161}", "",{"version":3,"sources":["webpack://./src/components/ContextMenu/ContextMenu.scss"],"names":[],"mappings":"AAAA,cACI,iBAAA,CACA,wBAAA,CACA,iBAAA,CACA,mCAAA,CACA,eAAA,CAEA,oBACI,aAAA,CACA,iBAAA,CACA,cAAA,CACA,eAAA,CACA,UAAA,CACA,WAAA,CACA,wBAAA,CACA,UAAA,CACA,cAAA,CACA,eAAA,CAEA,0BACI,wBAAA","sourcesContent":[".context-menu {\r\n    position: absolute;\r\n    background-color: #424242;\r\n    border-radius: 4px;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);\r\n    overflow: hidden;\r\n\r\n    &__item {\r\n        display: block;\r\n        padding: 12px 24px;\r\n        cursor: pointer;\r\n        text-align: left;\r\n        width: 100%;\r\n        border: none;\r\n        background-color: #424242;\r\n        color: #ffffff;\r\n        font-size: 16px;\r\n        line-height: 1.5;\r\n\r\n        &:hover {\r\n            background-color: #616161;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 924:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".dialog-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);display:flex;justify-content:center;align-items:center;z-index:9999}.dialog{background-color:rgba(42,42,42,.95);width:80%;max-width:600px;border-radius:5px;box-shadow:0px 3px 5px rgba(0,0,0,.2);display:flex;flex-direction:column}.dialog-header{display:flex;justify-content:space-between;align-items:center;padding:20px;border-bottom:1px solid #eaeaea}.dialog-title{margin:0;font-size:22px;font-weight:600;color:#fff}.dialog-close{background-color:rgba(0,0,0,0);border:none;font-size:24px;font-weight:600;color:#fff;cursor:pointer;transition:color .3s ease}.dialog-close:hover{color:#eaeaea}.dialog-body{padding:20px}", "",{"version":3,"sources":["webpack://./src/components/Dialog/Dialog.scss"],"names":[],"mappings":"AAAA,gBACI,cAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,+BAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,YAAA,CAGJ,QACI,mCAAA,CACA,SAAA,CACA,eAAA,CACA,iBAAA,CACA,qCAAA,CACA,YAAA,CACA,qBAAA,CAGJ,eACI,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,YAAA,CACA,+BAAA,CAGJ,cACI,QAAA,CACA,cAAA,CACA,eAAA,CACA,UAAA,CAGJ,cACI,8BAAA,CACA,WAAA,CACA,cAAA,CACA,eAAA,CACA,UAAA,CACA,cAAA,CACA,yBAAA,CAGJ,oBACI,aAAA,CAGJ,aACI,YAAA","sourcesContent":[".dialog-overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 9999;\r\n}\r\n\r\n.dialog {\r\n    background-color: rgba(42, 42, 42, 0.95);\r\n    width: 80%;\r\n    max-width: 600px;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.dialog-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 20px;\r\n    border-bottom: 1px solid #eaeaea;\r\n}\r\n\r\n.dialog-title {\r\n    margin: 0;\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    color: #ffffff;\r\n}\r\n\r\n.dialog-close {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n    transition: color 0.3s ease;\r\n}\r\n\r\n.dialog-close:hover {\r\n    color: #eaeaea;\r\n}\r\n\r\n.dialog-body {\r\n    padding: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".genre-select{position:relative;width:200px}.genre-select select{appearance:none;background-color:#424242;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:16px;padding:10px 40px 10px 20px;width:100%;box-sizing:border-box}.genre-select select:focus{outline:none}.genre-select::after{content:\"\";position:absolute;top:50%;right:15px;width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid #f65261;transform:translateY(-50%);pointer-events:none}.genre-select.open::after{border-top:none;border-bottom:5px solid #f65261}", "",{"version":3,"sources":["webpack://./src/components/GenreSelect/GenreSelect.scss"],"names":[],"mappings":"AAAA,cACI,iBAAA,CACA,WAAA,CAEA,qBACI,eAAA,CACA,wBAAA,CACA,WAAA,CACA,iBAAA,CACA,UAAA,CACA,cAAA,CACA,cAAA,CACA,2BAAA,CACA,UAAA,CACA,qBAAA,CAEA,2BACI,YAAA,CAIR,qBACI,UAAA,CACA,iBAAA,CACA,OAAA,CACA,UAAA,CACA,OAAA,CACA,QAAA,CACA,mCAAA,CACA,oCAAA,CACA,4BAAA,CACA,0BAAA,CACA,mBAAA,CAGJ,0BACI,eAAA,CACA,+BAAA","sourcesContent":[".genre-select {\r\n    position: relative;\r\n    width: 200px;\r\n\r\n    select {\r\n        appearance: none;\r\n        background-color: #424242;\r\n        border: none;\r\n        border-radius: 4px;\r\n        color: #ffffff;\r\n        cursor: pointer;\r\n        font-size: 16px;\r\n        padding: 10px 40px 10px 20px;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n\r\n        &:focus {\r\n            outline: none;\r\n        }\r\n    }\r\n\r\n    &::after {\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 50%;\r\n        right: 15px;\r\n        width: 0;\r\n        height: 0;\r\n        border-left: 5px solid transparent;\r\n        border-right: 5px solid transparent;\r\n        border-top: 5px solid #f65261;\r\n        transform: translateY(-50%);\r\n        pointer-events: none;\r\n    }\r\n\r\n    &.open::after {\r\n        border-top: none;\r\n        border-bottom: 5px solid #f65261;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(8792), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-repeat:no-repeat;display:flex;flex-direction:column;justify-content:flex-start;padding:50px 30px 0;position:relative;text-align:center;width:100%}.header::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5)}.header .header-container{display:flex;align-items:flex-start;justify-content:space-between;flex-shrink:0;position:relative;z-index:1;width:100%;padding-top:10px}.header .logo{height:50px;margin-right:20px;width:auto;position:absolute;top:0px;left:30px}.header .search-container{flex-grow:1;margin:0 auto;max-width:500px;width:100%}.header .add{height:40px;width:140px;text-transform:uppercase;color:#fff;background-color:#f65261;cursor:pointer;border-radius:5px;border:none;font-weight:600}.header .add:hover{background-color:#f93143}.header .add:focus{box-shadow:0 0 0 .2rem #d87880}.header .genre-sort-controls{display:flex;justify-content:space-between;margin-top:20px;z-index:1}", "",{"version":3,"sources":["webpack://./src/components/Header/Header.scss"],"names":[],"mappings":"AAAA,QACI,wDAAA,CACA,qBAAA,CACA,2BAAA,CACA,YAAA,CACA,qBAAA,CACA,0BAAA,CACA,mBAAA,CACA,iBAAA,CACA,iBAAA,CACA,UAAA,CAEA,gBACI,UAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CAGJ,0BACI,YAAA,CACA,sBAAA,CACA,6BAAA,CACA,aAAA,CACA,iBAAA,CACA,SAAA,CACA,UAAA,CACA,gBAAA,CAGJ,cACI,WAAA,CACA,iBAAA,CACA,UAAA,CACA,iBAAA,CACA,OAAA,CACA,SAAA,CAIJ,0BACI,WAAA,CACA,aAAA,CACA,eAAA,CACA,UAAA,CAIF,aAEE,WAAA,CACA,WAAA,CACA,wBAAA,CACA,UAAA,CACA,wBAAA,CACA,cAAA,CACA,iBAAA,CACA,WAAA,CACA,eAAA,CAEA,mBACI,wBAAA,CAGJ,mBACI,8BAAA,CAIR,6BACI,YAAA,CACA,6BAAA,CACA,eAAA,CACA,SAAA","sourcesContent":[".header {\r\n    background-image: url(../../stories/assets/HeaderBackground.png);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 50px 30px 0;\r\n    position: relative;\r\n    text-align: center;\r\n    width: 100%;\r\n\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        background-color: rgba(0, 0, 0, 0.5);\r\n    }\r\n\r\n    .header-container {\r\n        display: flex;\r\n        align-items: flex-start;\r\n        justify-content: space-between;\r\n        flex-shrink: 0;\r\n        position: relative;\r\n        z-index: 1;\r\n        width: 100%;\r\n        padding-top: 10px;\r\n    }\r\n\r\n    .logo {\r\n        height: 50px;\r\n        margin-right: 20px;\r\n        width: auto;\r\n        position: absolute;\r\n        top: 0px;\r\n        left: 30px;\r\n\r\n    }\r\n\r\n    .search-container {\r\n        flex-grow: 1;\r\n        margin: 0 auto;\r\n        max-width: 500px;\r\n        width: 100%;\r\n    }\r\n\r\n\r\n      .add {\r\n\r\n        height: 40px;\r\n        width: 140px;\r\n        text-transform: uppercase;\r\n        color: #ffffff;\r\n        background-color: #f65261;\r\n        cursor: pointer;\r\n        border-radius: 5px;\r\n        border: none;\r\n        font-weight: 600;\r\n\r\n        &:hover {\r\n            background-color: #f93143;\r\n        }\r\n\r\n        &:focus {\r\n            box-shadow: 0 0 0 0.2rem #d87880;\r\n        }\r\n    }\r\n\r\n    .genre-sort-controls {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        margin-top: 20px;\r\n        z-index: 1;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".netflix-logo{display:flex;font-size:24px;font-weight:bold;color:#e50914}.netflix-logo__netflix{margin-right:5px}.netflix-logo__roulette{color:#fff}", "",{"version":3,"sources":["webpack://./src/components/Header/Logo/NetflixLogo.scss"],"names":[],"mappings":"AAAA,cACI,YAAA,CACA,cAAA,CACA,gBAAA,CACA,aAAA,CAEA,uBACI,gBAAA,CAGJ,wBACI,UAAA","sourcesContent":[".netflix-logo {\r\n    display: flex;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    color: #e50914;\r\n\r\n    &__netflix {\r\n        margin-right: 5px;\r\n    }\r\n\r\n    &__roulette {\r\n        color: white;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9066:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".MovieDetailsWrapper{padding:1rem;background-color:#232323;color:#fff}.MovieDetailsWrapper .movie-info{display:flex;gap:2rem}.MovieDetailsWrapper .movie-info .poster{max-width:250px}.MovieDetailsWrapper .movie-info .poster img{width:100%;height:auto}.MovieDetailsWrapper .movie-info .details{display:flex;flex-direction:column;gap:.5rem}.MovieDetailsWrapper .movie-info .details .title{font-size:2rem;font-weight:bold}.MovieDetailsWrapper .movie-info .details .release-date{font-size:1rem;opacity:.7}.MovieDetailsWrapper .movie-info .details .rating{font-size:1.5rem}.MovieDetailsWrapper .movie-info .details .genre{font-size:1.2rem;opacity:.8}.MovieDetailsWrapper .movie-info .details .overview{font-size:1rem;opacity:.9}", "",{"version":3,"sources":["webpack://./src/components/MovieDetailsWrapper/MovieDetailsWrapper.scss"],"names":[],"mappings":"AAAA,qBACI,YAAA,CACA,wBAAA,CACA,UAAA,CAEA,iCACI,YAAA,CACA,QAAA,CAEA,yCACI,eAAA,CAEA,6CACI,UAAA,CACA,WAAA,CAIR,0CACI,YAAA,CACA,qBAAA,CACA,SAAA,CAEA,iDACI,cAAA,CACA,gBAAA,CAGJ,wDACI,cAAA,CACA,UAAA,CAGJ,kDACI,gBAAA,CAGJ,iDACI,gBAAA,CACA,UAAA,CAGJ,oDACI,cAAA,CACA,UAAA","sourcesContent":[".MovieDetailsWrapper {\r\n    padding: 1rem;\r\n    background-color: #232323;\r\n    color: #ffffff;\r\n\r\n    .movie-info {\r\n        display: flex;\r\n        gap: 2rem;\r\n\r\n        .poster {\r\n            max-width: 250px;\r\n\r\n            img {\r\n                width: 100%;\r\n                height: auto;\r\n            }\r\n        }\r\n\r\n        .details {\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 0.5rem;\r\n\r\n            .title {\r\n                font-size: 2rem;\r\n                font-weight: bold;\r\n            }\r\n\r\n            .release-date {\r\n                font-size: 1rem;\r\n                opacity: 0.7;\r\n            }\r\n\r\n            .rating {\r\n                font-size: 1.5rem;\r\n            }\r\n\r\n            .genre {\r\n                font-size: 1.2rem;\r\n                opacity: 0.8;\r\n            }\r\n\r\n            .overview {\r\n                font-size: 1rem;\r\n                opacity: 0.9;\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".movie-details{position:relative;display:flex;padding:20px;align-items:center;justify-content:center;width:90%}.movie-details__image{width:200px;height:300px;object-fit:cover;border-radius:5px;margin-right:20px}.movie-details__info{display:flex;flex-direction:column}.movie-details__title{font-size:30px;font-weight:500;color:#fff;margin-bottom:10px}.movie-details__year{font-size:20px;color:#b8b3b3;margin-bottom:10px}.movie-details__rating,.movie-details__duration{font-size:18px;color:gray;margin-bottom:10px}.movie-details__description{font-size:16px;color:gray;text-align:justify}.movie-details__close{position:absolute;top:50%;right:-20%;transform:translateY(-50%);background-color:#f65261;border:none;font-size:24px;color:#fff;cursor:pointer;outline:none}", "",{"version":3,"sources":["webpack://./src/components/MovieDetails/MovieDetails.scss"],"names":[],"mappings":"AAAA,eACI,iBAAA,CACA,YAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,SAAA,CAEA,sBACI,WAAA,CACA,YAAA,CACA,gBAAA,CACA,iBAAA,CACA,iBAAA,CAGJ,qBACI,YAAA,CACA,qBAAA,CAGJ,sBACI,cAAA,CACA,eAAA,CACA,UAAA,CACA,kBAAA,CAGJ,qBACI,cAAA,CACA,aAAA,CACA,kBAAA,CAGJ,gDAEI,cAAA,CACA,UAAA,CACA,kBAAA,CAGJ,4BACI,cAAA,CACA,UAAA,CACA,kBAAA,CAGJ,sBACI,iBAAA,CACI,OAAA,CACA,UAAA,CACA,0BAAA,CACA,wBAAA,CACA,WAAA,CACA,cAAA,CACA,UAAA,CACA,cAAA,CACA,YAAA","sourcesContent":[".movie-details {\r\n    position: relative;\r\n    display: flex;\r\n    padding: 20px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 90%;\r\n\r\n    &__image {\r\n        width: 200px; \r\n        height: 300px; \r\n        object-fit: cover;\r\n        border-radius: 5px;\r\n        margin-right: 20px;\r\n    }\r\n\r\n    &__info {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    &__title {\r\n        font-size: 30px;\r\n        font-weight: 500;\r\n        color: #fff;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    &__year {\r\n        font-size: 20px; \r\n        color: #b8b3b3;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    &__rating,\r\n    &__duration {\r\n        font-size: 18px; \r\n        color: #808080;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    &__description {\r\n        font-size: 16px; \r\n        color: #808080;\r\n        text-align: justify;\r\n    }\r\n\r\n    &__close {\r\n        position: absolute;\r\n            top: 50%;\r\n            right: -20%;\r\n            transform: translateY(-50%);\r\n            background-color: #f65261;\r\n            border: none;\r\n            font-size: 24px;\r\n            color: #fff;\r\n            cursor: pointer;\r\n            outline: none;\r\n    }\r\n\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".movie-form{display:flex;flex-wrap:wrap;flex-direction:column;justify-content:space-between;margin:20px;padding:20px;background-color:#1a1919;border-radius:5px;box-shadow:0px 3px 5px rgba(0,0,0,.2)}.movie-form__column{width:calc(50% - 5px);margin-right:10px;justify-content:space-between}.movie-form__field{margin-bottom:20px}.movie-form__field textarea{min-width:470px;border-radius:5px}.movie-form__row--full-width{width:100%}.movie-form__field label{display:block;margin-bottom:10px;font-size:16px;font-weight:600;color:#fff}.movie-form__row{display:flex;margin-bottom:20px}.movie-form__actions{display:flex;justify-content:space-around;gap:10px}.movie-form__field label{display:block;margin-bottom:10px;font-size:16px;font-weight:600;color:#fff}.movie-form__field input,.movie-form__field select{display:block;width:100%;padding:10px;font-size:14px;color:#fff;border:1px solid #fff;border-radius:5px;background-color:#333;transition:border-color .3s ease}.movie-form__field input:focus,.movie-form__field select:focus{outline:none;border-color:#f65261}.movie-form__field input::placeholder,.movie-form__field select::placeholder{color:#aaa}.movie-form__field select{cursor:pointer}.movie-form__submit{margin-top:20px;padding:10px 20px;font-size:18px;font-weight:600;color:#fff;background-color:#f65261;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s ease}.movie-form__submit:hover{background-color:#d43232}.error{margin-bottom:20px;padding:10px;border-radius:5px;background-color:#f8d7da;border:1px solid #f5c6cb;color:#721c24;font-size:14px}", "",{"version":3,"sources":["webpack://./src/components/MovieForm/MovieForm.scss"],"names":[],"mappings":"AAAA,YACI,YAAA,CACA,cAAA,CACA,qBAAA,CACA,6BAAA,CACA,WAAA,CACA,YAAA,CACA,wBAAA,CACA,iBAAA,CACA,qCAAA,CAGJ,oBACI,qBAAA,CACA,iBAAA,CACA,6BAAA,CAGJ,mBACI,kBAAA,CAGJ,4BACI,eAAA,CACA,iBAAA,CAIJ,6BACI,UAAA,CAIJ,yBACI,aAAA,CACA,kBAAA,CACA,cAAA,CACA,eAAA,CACA,UAAA,CAGJ,iBACI,YAAA,CACA,kBAAA,CAGJ,qBACI,YAAA,CACA,4BAAA,CACA,QAAA,CAGJ,yBACI,aAAA,CACA,kBAAA,CACA,cAAA,CACA,eAAA,CACA,UAAA,CAGJ,mDAEI,aAAA,CACA,UAAA,CACA,YAAA,CACA,cAAA,CACA,UAAA,CACA,qBAAA,CACA,iBAAA,CACA,qBAAA,CACA,gCAAA,CAGJ,+DAEI,YAAA,CACA,oBAAA,CAGJ,6EAEI,UAAA,CAGJ,0BACI,cAAA,CAGJ,oBACI,eAAA,CACA,iBAAA,CACA,cAAA,CACA,eAAA,CACA,UAAA,CACA,wBAAA,CACA,WAAA,CACA,iBAAA,CACA,cAAA,CACA,oCAAA,CAGJ,0BACI,wBAAA,CAGJ,OACI,kBAAA,CACA,YAAA,CACA,iBAAA,CACA,wBAAA,CACA,wBAAA,CACA,aAAA,CACA,cAAA","sourcesContent":[".movie-form {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    margin: 20px;\r\n    padding: 20px;\r\n    background-color: #1a1919;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.movie-form__column {\r\n    width: calc(50% - 5px);\r\n    margin-right: 10px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.movie-form__field {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.movie-form__field textarea {\r\n    min-width: 470px;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n.movie-form__row--full-width {\r\n    width: 100%;\r\n}\r\n\r\n\r\n.movie-form__field label {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    color: #ffffff;\r\n}\r\n\r\n.movie-form__row {\r\n    display: flex;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.movie-form__actions {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 10px;\r\n}\r\n\r\n.movie-form__field label {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    color: #ffffff;\r\n}\r\n\r\n.movie-form__field input,\r\n.movie-form__field select {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    color: #ffffff;\r\n    border: 1px solid #ffffff;\r\n    border-radius: 5px;\r\n    background-color: #333333;\r\n    transition: border-color 0.3s ease;\r\n}\r\n\r\n.movie-form__field input:focus,\r\n.movie-form__field select:focus {\r\n    outline: none;\r\n    border-color: #f65261;\r\n}\r\n\r\n.movie-form__field input::placeholder,\r\n.movie-form__field select::placeholder {\r\n    color: #aaa;\r\n}\r\n\r\n.movie-form__field select {\r\n    cursor: pointer;\r\n}\r\n\r\n.movie-form__submit {\r\n    margin-top: 20px;\r\n    padding: 10px 20px;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    background-color: #f65261;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease;\r\n}\r\n\r\n.movie-form__submit:hover {\r\n    background-color: #d43232;\r\n}\r\n\r\n.error {\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    background-color: #f8d7da;\r\n    border: 1px solid #f5c6cb;\r\n    color: #721c24;\r\n    font-size: 14px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".movie-tile{position:relative;display:flex;flex-direction:column;padding:10px;border-radius:5px;background-color:rgba(42,42,42,.7);cursor:pointer;margin:0 10px 20px 0}@media screen and (max-width: 1024px){.movie-tile{width:calc(100% - 20px)}}@media screen and (max-width: 767px){.movie-tile{width:100%}}.movie-tile:nth-child(3n){margin-right:0}.movie-tile__context-menu-wrapper{position:absolute;top:0;right:0;display:flex;flex-direction:column;align-items:flex-end}.movie-tile__image{width:100%;height:300px;object-fit:contain;border-radius:5px}.movie-tile__info{margin-top:10px;display:flex;flex-direction:column}.movie-tile__button{background-color:#201f1f;border:none}.movie-tile__title{font-size:18px;font-weight:500;color:#fff;margin-bottom:5px}.movie-tile__year,.movie-tile__genres{font-size:14px;color:gray;margin-bottom:5px}.movie-tile__rating{font-size:14px;color:gray;margin-bottom:5px}.movie-tile__duration{font-size:14px;color:gray;margin-bottom:5px}.movie-tile__description{font-size:14px;color:#999797;text-align:justify}.movie-tile__context-menu-toggle{position:absolute;top:5px;right:5px;font-size:16px;color:#fff;background-color:rgba(0,0,0,0);border:none;cursor:pointer}.movie-tile__context-menu{position:absolute;top:25px;right:5px;display:flex;flex-direction:column;background-color:#424242;border-radius:5px;z-index:10}.movie-tile__context-menu-item{font-size:14px;color:#fff;background-color:rgba(0,0,0,0);border:none;padding:5px 10px;cursor:pointer}.movie-tile__context-menu-item:hover{background-color:#666}", "",{"version":3,"sources":["webpack://./src/components/MovieTile/MovieTile.scss"],"names":[],"mappings":"AAAA,YACI,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,YAAA,CACA,iBAAA,CACA,kCAAA,CACA,cAAA,CACA,oBAAA,CAEA,sCAVJ,YAWQ,uBAAA,CAAA,CAGJ,qCAdJ,YAeQ,UAAA,CAAA,CAGJ,0BACI,cAAA,CAEC,kCACI,iBAAA,CACA,KAAA,CACA,OAAA,CACA,YAAA,CACA,qBAAA,CACA,oBAAA,CAGT,mBACI,UAAA,CACA,YAAA,CACA,kBAAA,CACA,iBAAA,CAGJ,kBACI,eAAA,CACA,YAAA,CACA,qBAAA,CAEJ,oBACI,wBAAA,CACA,WAAA,CAGJ,mBACI,cAAA,CACA,eAAA,CACA,UAAA,CACA,iBAAA,CAGJ,sCAEI,cAAA,CACA,UAAA,CACA,iBAAA,CAGJ,oBACI,cAAA,CACA,UAAA,CACA,iBAAA,CAGJ,sBACI,cAAA,CACA,UAAA,CACA,iBAAA,CAGJ,yBACI,cAAA,CACA,aAAA,CACA,kBAAA,CAGJ,iCACI,iBAAA,CACA,OAAA,CACA,SAAA,CACA,cAAA,CACA,UAAA,CACA,8BAAA,CACA,WAAA,CACA,cAAA,CAGJ,0BACI,iBAAA,CACA,QAAA,CACA,SAAA,CACA,YAAA,CACA,qBAAA,CACA,wBAAA,CACA,iBAAA,CACA,UAAA,CAEA,+BACI,cAAA,CACA,UAAA,CACA,8BAAA,CACA,WAAA,CACA,gBAAA,CACA,cAAA,CAEA,qCACI,qBAAA","sourcesContent":[".movie-tile {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    background-color: rgba(42, 42, 42, 0.7);\r\n    cursor: pointer;\r\n    margin: 0 10px 20px 0;\r\n\r\n    @media screen and (max-width: 1024px) {\r\n        width: calc(100% - 20px);\r\n    }\r\n\r\n    @media screen and (max-width: 767px) {\r\n        width: 100%;\r\n    }\r\n\r\n    &:nth-child(3n) {\r\n        margin-right: 0;\r\n    }\r\n         &__context-menu-wrapper {\r\n             position: absolute;\r\n             top: 0;\r\n             right: 0;\r\n             display: flex;\r\n             flex-direction: column;\r\n             align-items: flex-end;\r\n         }\r\n\r\n    &__image {\r\n        width: 100%;\r\n        height: 300px;\r\n        object-fit: contain;\r\n        border-radius: 5px;\r\n    }\r\n\r\n    &__info {\r\n        margin-top: 10px;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    &__button {\r\n        background-color: #201f1f;\r\n        border: none;\r\n    }\r\n\r\n    &__title {\r\n        font-size: 18px;\r\n        font-weight: 500;\r\n        color: #fff;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n    &__year,\r\n    &__genres {\r\n        font-size: 14px;\r\n        color: #808080;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n    &__rating {\r\n        font-size: 14px;\r\n        color: #808080;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n    &__duration {\r\n        font-size: 14px;\r\n        color: #808080;\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n    &__description {\r\n        font-size: 14px;\r\n        color: #999797;\r\n        text-align: justify;\r\n    }\r\n\r\n    &__context-menu-toggle {\r\n        position: absolute;\r\n        top: 5px;\r\n        right: 5px;\r\n        font-size: 16px;\r\n        color: #fff;\r\n        background-color: transparent;\r\n        border: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n    &__context-menu {\r\n        position: absolute;\r\n        top: 25px;\r\n        right: 5px;\r\n        display: flex;\r\n        flex-direction: column;\r\n        background-color: #424242;\r\n        border-radius: 5px;\r\n        z-index: 10;\r\n\r\n        &-item {\r\n            font-size: 14px;\r\n            color: #fff;\r\n            background-color: transparent;\r\n            border: none;\r\n            padding: 5px 10px;\r\n            cursor: pointer;\r\n\r\n            &:hover {\r\n                background-color: #666;\r\n            }\r\n        }\r\n        \r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search{width:100%;margin:0 auto;margin-bottom:50px}.search-title{text-transform:uppercase;margin:25px 0;font-weight:300;font-size:40px;line-height:49px}.search form{display:flex;align-items:center}.search form input{height:57px;margin-right:15px;padding:0 5px;border-radius:5px;font-size:20px;flex:1 0 auto;background-color:#424242;color:#fff;border:none}", "",{"version":3,"sources":["webpack://./src/components/SearchForm/SearchForm.scss"],"names":[],"mappings":"AAAA,QACQ,UAAA,CACA,aAAA,CACA,kBAAA,CACR,cACQ,wBAAA,CACA,aAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CAEL,aACI,YAAA,CACA,kBAAA,CAEA,mBACI,WAAA,CACA,iBAAA,CACA,aAAA,CACA,iBAAA,CACA,cAAA,CACA,aAAA,CACA,wBAAA,CACA,UAAA,CACC,WAAA","sourcesContent":[".search {\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        margin-bottom: 50px;\r\n&-title {\r\n        text-transform: uppercase;\r\n        margin: 25px 0;\r\n        font-weight: 300;\r\n        font-size: 40px;\r\n        line-height: 49px;\r\n    }\r\n   form {\r\n       display: flex;\r\n       align-items: center;\r\n\r\n       input {\r\n           height: 57px;\r\n           margin-right: 15px;\r\n           padding: 0 5px;\r\n           border-radius: 5px;\r\n           font-size: 20px;\r\n           flex: 1 0 auto;\r\n           background-color: #424242;\r\n           color: #ffffff;\r\n            border: none;\r\n       }\r\n   }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1088:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sort-control{position:relative;display:inline-flex;align-items:center;margin-left:16px}.sort-control__label{font-size:14px;font-weight:600;color:#4a4a4a;margin-right:18px;width:100px;justify-content:center}.sort-control__select{appearance:none;background-color:#424242;border:none;border-radius:4px;color:#fff;cursor:pointer;font-size:16px;padding:10px 40px 10px 20px;width:90%;box-sizing:border-box}.sort-control__select:focus{outline:none}.sort-control::after{content:\"\";position:absolute;top:50%;right:15px;width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid #f65261;transform:translateY(-50%);pointer-events:none}.sort-control.open::after{border-top:none;border-bottom:5px solid #f65261}", "",{"version":3,"sources":["webpack://./src/components/SortControl/SortControl.scss"],"names":[],"mappings":"AAAA,cACI,iBAAA,CACA,mBAAA,CACA,kBAAA,CACA,gBAAA,CAEA,qBACI,cAAA,CACA,eAAA,CACA,aAAA,CACA,iBAAA,CACA,WAAA,CACA,sBAAA,CAGJ,sBACI,eAAA,CACA,wBAAA,CACA,WAAA,CACA,iBAAA,CACA,UAAA,CACA,cAAA,CACA,cAAA,CACA,2BAAA,CACA,SAAA,CACA,qBAAA,CAEA,4BACI,YAAA,CAIT,qBACI,UAAA,CACA,iBAAA,CACA,OAAA,CACA,UAAA,CACA,OAAA,CACA,QAAA,CACA,mCAAA,CACA,oCAAA,CACA,4BAAA,CACA,0BAAA,CACA,mBAAA,CAGJ,0BACI,eAAA,CACA,+BAAA","sourcesContent":[".sort-control {\r\n    position: relative;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    margin-left: 16px;\r\n\r\n    &__label {\r\n        font-size: 14px;\r\n        font-weight: 600;\r\n        color: #4a4a4a;\r\n        margin-right: 18px;\r\n        width: 100px;\r\n        justify-content: center;\r\n    }\r\n\r\n    &__select {\r\n        appearance: none;\r\n        background-color: #424242;\r\n        border: none;\r\n        border-radius: 4px;\r\n        color: #ffffff;\r\n        cursor: pointer;\r\n        font-size: 16px;\r\n        padding: 10px 40px 10px 20px;\r\n        width: 90%;\r\n        box-sizing: border-box;\r\n\r\n        &:focus {\r\n            outline: none;\r\n        }\r\n    }\r\n\r\n   &::after {\r\n       content: \"\";\r\n       position: absolute;\r\n       top: 50%;\r\n       right: 15px;\r\n       width: 0;\r\n       height: 0;\r\n       border-left: 5px solid transparent;\r\n       border-right: 5px solid transparent;\r\n       border-top: 5px solid #f65261;\r\n       transform: translateY(-50%);\r\n       pointer-events: none;\r\n   }\r\n\r\n   &.open::after {\r\n       border-top: none;\r\n       border-bottom: 5px solid #f65261;\r\n   }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}code{font-family:source-code-pro,Menlo,Monaco,Consolas,\"Courier New\",monospace}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA,KACE,QAAA,CACA,mJAAA,CAGA,kCAAA,CACA,iCAAA,CAGF,KACE,yEAAA","sourcesContent":["/* @import-normalize; bring in normalize.css styles */\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3172:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4554);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 846:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieListPage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8363);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieListPage_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieListPage_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieListPage_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieListPage_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 5126:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7515);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Button_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Button_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Button_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Button_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 8329:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ContextMenu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4575);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ContextMenu_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ContextMenu_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ContextMenu_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ContextMenu_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 333:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Dialog_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(924);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Dialog_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Dialog_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Dialog_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Dialog_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 2313:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GenreSelect_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6671);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GenreSelect_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GenreSelect_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GenreSelect_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GenreSelect_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 3478:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9450);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 3595:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_NetflixLogo_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6169);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_NetflixLogo_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_NetflixLogo_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_NetflixLogo_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_NetflixLogo_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 2716:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieDetailsWrapper_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9066);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieDetailsWrapper_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieDetailsWrapper_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieDetailsWrapper_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieDetailsWrapper_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 9709:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieDetails_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5029);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieDetails_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieDetails_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieDetails_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieDetails_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 1272:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieForm_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8664);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieForm_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieForm_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieForm_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieForm_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 4905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieTile_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(307);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieTile_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieTile_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieTile_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieTile_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 4452:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchForm_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6669);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchForm_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchForm_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchForm_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchForm_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 3803:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SortControl_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1088);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SortControl_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SortControl_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SortControl_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SortControl_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 4296:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8358);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ }),

/***/ 8792:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "HeaderBackground.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "./";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			296: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmentoring_program_react"] = self["webpackChunkmentoring_program_react"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [246], function() { return __webpack_require__(1197); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map