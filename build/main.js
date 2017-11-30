/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _desc, _value, _class, _desc2, _value2, _class2;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decorator = __webpack_require__(1);

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExampleWithoutDecoration = function () {
  function ExampleWithoutDecoration() {
    _classCallCheck(this, ExampleWithoutDecoration);
  }

  _createClass(ExampleWithoutDecoration, [{
    key: 'doWork',
    value: function doWork() {
      console.log('can\'t you see I\'m working here?');
    }
  }]);

  return ExampleWithoutDecoration;
}();

var ExampleWithDecoration = (_class = function () {
  function ExampleWithDecoration() {
    _classCallCheck(this, ExampleWithDecoration);
  }

  _createClass(ExampleWithDecoration, [{
    key: 'doWork',
    value: function doWork() {
      console.log('can\'t you see I\'m working here?');
    }
  }]);

  return ExampleWithDecoration;
}(), (_applyDecoratedDescriptor(_class.prototype, 'doWork', [_decorator.DecoratingIsFun], Object.getOwnPropertyDescriptor(_class.prototype, 'doWork'), _class.prototype)), _class);

// const example = new ExampleWithoutDecoration()
// example.doWork()

// const decoratedExample = new ExampleWithDecoration()
// decoratedExample.doWork()

var ExampleWithDetailedDecoration = (_class2 = function () {
  function ExampleWithDetailedDecoration() {
    _classCallCheck(this, ExampleWithDetailedDecoration);
  }

  _createClass(ExampleWithDetailedDecoration, [{
    key: 'doWork',
    value: function doWork() {
      console.log('can\'t you see I\'m working here?');
    }
  }]);

  return ExampleWithDetailedDecoration;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'doWork', [_decorator.DecoratingMakesSense], Object.getOwnPropertyDescriptor(_class2.prototype, 'doWork'), _class2.prototype)), _class2);


var makesSense = new ExampleWithDetailedDecoration();
makesSense.doWork();
makesSense.doWork = function () {
  return console.log('some other function');
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DecoratingIsFun = exports.DecoratingIsFun = function DecoratingIsFun() {
  console.log('Decorating is fun');
};

var DecoratingMakesSense = exports.DecoratingMakesSense = function DecoratingMakesSense(object, methodName, description) {
  console.log('Decorating makes sense', description);

  description.writable = false;
  return description;
};

/***/ })
/******/ ]);