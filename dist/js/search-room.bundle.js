/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"search-room": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/site-pages/search-room/search-room.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src sync index\\.scss$":
/*!********************************************!*\
  !*** ./src sync nonrecursive index\.scss$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./index.scss\": \"./src/index.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync index\\\\.scss$\";\n\n//# sourceURL=webpack:///./src_sync_nonrecursive_index\\.scss$?");

/***/ }),

/***/ "./src/assets/fonts sync recursive \\.(otf|ttf|svg|woff|woff2|eot)$":
/*!***************************************************************!*\
  !*** ./src/assets/fonts sync \.(otf|ttf|svg|woff|woff2|eot)$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Montserrat-Bold.svg\": \"./src/assets/fonts/Montserrat-Bold.svg\",\n\t\"./Montserrat-Bold.ttf\": \"./src/assets/fonts/Montserrat-Bold.ttf\",\n\t\"./Montserrat-Bold.woff\": \"./src/assets/fonts/Montserrat-Bold.woff\",\n\t\"./Montserrat-Regular.svg\": \"./src/assets/fonts/Montserrat-Regular.svg\",\n\t\"./Montserrat-Regular.ttf\": \"./src/assets/fonts/Montserrat-Regular.ttf\",\n\t\"./Montserrat-Regular.woff\": \"./src/assets/fonts/Montserrat-Regular.woff\",\n\t\"./Quicksand-Bold.svg\": \"./src/assets/fonts/Quicksand-Bold.svg\",\n\t\"./Quicksand-Bold.ttf\": \"./src/assets/fonts/Quicksand-Bold.ttf\",\n\t\"./Quicksand-Bold.woff\": \"./src/assets/fonts/Quicksand-Bold.woff\",\n\t\"./Quicksand-Regular.svg\": \"./src/assets/fonts/Quicksand-Regular.svg\",\n\t\"./Quicksand-Regular.ttf\": \"./src/assets/fonts/Quicksand-Regular.ttf\",\n\t\"./Quicksand-Regular.woff\": \"./src/assets/fonts/Quicksand-Regular.woff\",\n\t\"./iconfont/MaterialIcons-Regular.eot\": \"./src/assets/fonts/iconfont/MaterialIcons-Regular.eot\",\n\t\"./iconfont/MaterialIcons-Regular.svg\": \"./src/assets/fonts/iconfont/MaterialIcons-Regular.svg\",\n\t\"./iconfont/MaterialIcons-Regular.ttf\": \"./src/assets/fonts/iconfont/MaterialIcons-Regular.ttf\",\n\t\"./iconfont/MaterialIcons-Regular.woff\": \"./src/assets/fonts/iconfont/MaterialIcons-Regular.woff\",\n\t\"./iconfont/MaterialIcons-Regular.woff2\": \"./src/assets/fonts/iconfont/MaterialIcons-Regular.woff2\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/fonts sync recursive \\\\.(otf|ttf|svg|woff|woff2|eot)$\";\n\n//# sourceURL=webpack:///./src/assets/fonts_sync_\\.(otf%7Cttf%7Csvg%7Cwoff%7Cwoff2%7Ceot)$?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Bold.svg":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Montserrat-Bold.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Montserrat-Bold.svg\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat-Bold.svg?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Bold.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Montserrat-Bold.ttf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Montserrat-Bold.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat-Bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Bold.woff":
/*!***********************************************!*\
  !*** ./src/assets/fonts/Montserrat-Bold.woff ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Montserrat-Bold.woff\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat-Bold.woff?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Regular.svg":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Regular.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Montserrat-Regular.svg\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat-Regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Regular.ttf ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Montserrat-Regular.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat-Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat-Regular.woff":
/*!**************************************************!*\
  !*** ./src/assets/fonts/Montserrat-Regular.woff ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Montserrat-Regular.woff\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat-Regular.woff?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand-Bold.svg":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Quicksand-Bold.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Quicksand-Bold.svg\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand-Bold.svg?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand-Bold.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Quicksand-Bold.ttf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Quicksand-Bold.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand-Bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand-Bold.woff":
/*!**********************************************!*\
  !*** ./src/assets/fonts/Quicksand-Bold.woff ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Quicksand-Bold.woff\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand-Bold.woff?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand-Regular.svg":
/*!************************************************!*\
  !*** ./src/assets/fonts/Quicksand-Regular.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Quicksand-Regular.svg\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand-Regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand-Regular.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/Quicksand-Regular.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Quicksand-Regular.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand-Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand-Regular.woff":
/*!*************************************************!*\
  !*** ./src/assets/fonts/Quicksand-Regular.woff ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Quicksand-Regular.woff\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand-Regular.woff?");

/***/ }),

/***/ "./src/assets/fonts/iconfont/MaterialIcons-Regular.eot":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/iconfont/MaterialIcons-Regular.eot ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/MaterialIcons-Regular.eot\";\n\n//# sourceURL=webpack:///./src/assets/fonts/iconfont/MaterialIcons-Regular.eot?");

/***/ }),

/***/ "./src/assets/fonts/iconfont/MaterialIcons-Regular.svg":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/iconfont/MaterialIcons-Regular.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/MaterialIcons-Regular.svg\";\n\n//# sourceURL=webpack:///./src/assets/fonts/iconfont/MaterialIcons-Regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/iconfont/MaterialIcons-Regular.ttf":
/*!*************************************************************!*\
  !*** ./src/assets/fonts/iconfont/MaterialIcons-Regular.ttf ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/MaterialIcons-Regular.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/iconfont/MaterialIcons-Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/iconfont/MaterialIcons-Regular.woff":
/*!**************************************************************!*\
  !*** ./src/assets/fonts/iconfont/MaterialIcons-Regular.woff ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/MaterialIcons-Regular.woff\";\n\n//# sourceURL=webpack:///./src/assets/fonts/iconfont/MaterialIcons-Regular.woff?");

/***/ }),

/***/ "./src/assets/fonts/iconfont/MaterialIcons-Regular.woff2":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/iconfont/MaterialIcons-Regular.woff2 ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/MaterialIcons-Regular.woff2\";\n\n//# sourceURL=webpack:///./src/assets/fonts/iconfont/MaterialIcons-Regular.woff2?");

/***/ }),

/***/ "./src/assets/images/arrow-back.svg":
/*!******************************************!*\
  !*** ./src/assets/images/arrow-back.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/arrow-back.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/arrow-back.svg?");

/***/ }),

/***/ "./src/blocks sync recursive \\.(js|scss)$":
/*!**************************************!*\
  !*** ./src/blocks sync \.(js|scss)$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./arrow/arrow.scss\": \"./src/blocks/arrow/arrow.scss\",\n\t\"./bullet-list/bullet-list.scss\": \"./src/blocks/bullet-list/bullet-list.scss\",\n\t\"./button/button.scss\": \"./src/blocks/button/button.scss\",\n\t\"./carousel/carousel.js\": \"./src/blocks/carousel/carousel.js\",\n\t\"./carousel/carousel.scss\": \"./src/blocks/carousel/carousel.scss\",\n\t\"./checkbox/checkbox.js\": \"./src/blocks/checkbox/checkbox.js\",\n\t\"./checkbox/checkbox.scss\": \"./src/blocks/checkbox/checkbox.scss\",\n\t\"./checkbox/init.js\": \"./src/blocks/checkbox/init.js\",\n\t\"./comment/comment.scss\": \"./src/blocks/comment/comment.scss\",\n\t\"./datepicker-block/datepicker-block.js\": \"./src/blocks/datepicker-block/datepicker-block.js\",\n\t\"./datepicker-block/datepicker-block.scss\": \"./src/blocks/datepicker-block/datepicker-block.scss\",\n\t\"./datepicker-block/init.js\": \"./src/blocks/datepicker-block/init.js\",\n\t\"./donut-chart/donut-chart.js\": \"./src/blocks/donut-chart/donut-chart.js\",\n\t\"./donut-chart/donut-chart.scss\": \"./src/blocks/donut-chart/donut-chart.scss\",\n\t\"./dropdown/dropdown.js\": \"./src/blocks/dropdown/dropdown.js\",\n\t\"./dropdown/dropdown.scss\": \"./src/blocks/dropdown/dropdown.scss\",\n\t\"./dropdown/init.js\": \"./src/blocks/dropdown/init.js\",\n\t\"./features-list/features-list.scss\": \"./src/blocks/features-list/features-list.scss\",\n\t\"./input/init.js\": \"./src/blocks/input/init.js\",\n\t\"./input/input.js\": \"./src/blocks/input/input.js\",\n\t\"./input/input.scss\": \"./src/blocks/input/input.scss\",\n\t\"./list/init.js\": \"./src/blocks/list/init.js\",\n\t\"./list/list.js\": \"./src/blocks/list/list.js\",\n\t\"./list/list.scss\": \"./src/blocks/list/list.scss\",\n\t\"./pagination/init.js\": \"./src/blocks/pagination/init.js\",\n\t\"./pagination/pagination.js\": \"./src/blocks/pagination/pagination.js\",\n\t\"./pagination/pagination.scss\": \"./src/blocks/pagination/pagination.scss\",\n\t\"./rate-button/init.js\": \"./src/blocks/rate-button/init.js\",\n\t\"./rate-button/rate-button.js\": \"./src/blocks/rate-button/rate-button.js\",\n\t\"./rate-button/rate-button.scss\": \"./src/blocks/rate-button/rate-button.scss\",\n\t\"./slider/init.js\": \"./src/blocks/slider/init.js\",\n\t\"./slider/slider.js\": \"./src/blocks/slider/slider.js\",\n\t\"./slider/slider.scss\": \"./src/blocks/slider/slider.scss\",\n\t\"./spinner/spinner.js\": \"./src/blocks/spinner/spinner.js\",\n\t\"./spinner/spinner.scss\": \"./src/blocks/spinner/spinner.scss\",\n\t\"./two-calendar-range-picker/init.js\": \"./src/blocks/two-calendar-range-picker/init.js\",\n\t\"./two-calendar-range-picker/two-calendar-range-picker.js\": \"./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js\",\n\t\"./two-calendar-range-picker/two-calendar-range-picker.scss\": \"./src/blocks/two-calendar-range-picker/two-calendar-range-picker.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/blocks sync recursive \\\\.(js|scss)$\";\n\n//# sourceURL=webpack:///./src/blocks_sync_\\.(js%7Cscss)$?");

/***/ }),

/***/ "./src/blocks/arrow/arrow.scss":
/*!*************************************!*\
  !*** ./src/blocks/arrow/arrow.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/arrow/arrow.scss?");

/***/ }),

/***/ "./src/blocks/bullet-list/bullet-list.scss":
/*!*************************************************!*\
  !*** ./src/blocks/bullet-list/bullet-list.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/bullet-list/bullet-list.scss?");

/***/ }),

/***/ "./src/blocks/button/button.scss":
/*!***************************************!*\
  !*** ./src/blocks/button/button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/button.scss?");

/***/ }),

/***/ "./src/blocks/carousel/carousel.js":
/*!*****************************************!*\
  !*** ./src/blocks/carousel/carousel.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! slick-carousel */ \"./node_modules/slick-carousel/slick/slick.js\");\n\n__webpack_require__(/*! ../../../node_modules/slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n\n/* eslint-disable no-undef */\n// jQuery объявлена глобально вебпаком\nfunction getCarouselParams($carousel) {\n  return {\n    arrows: $carousel.attr('data-arrows').toLowerCase() === 'true',\n    prevArrow: '<label class=\"slick-prev\"><button type=\"button\" >expand_more</button></label>',\n    nextArrow: '<label class=\"slick-next\"><button type=\"button\" >expand_more</button></label>',\n    dots: $carousel.attr('data-dots').toLowerCase() === 'true'\n  };\n}\n\nfunction initCarousel() {\n  var initAttrName = 'data-initiated';\n  var initAttrValue = 'true';\n  var $carousel = $(this);\n\n  if ($carousel.attr(initAttrName) === initAttrValue) {\n    return;\n  }\n\n  var params = getCarouselParams($carousel);\n  $carousel.slick(params);\n  $carousel.attr(initAttrName, initAttrValue);\n}\n\nfunction initCarousels() {\n  var $carousels = $('.carousel');\n  $carousels.each(initCarousel);\n}\n\nvar _default = initCarousels;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/carousel/carousel.js?");

/***/ }),

/***/ "./src/blocks/carousel/carousel.scss":
/*!*******************************************!*\
  !*** ./src/blocks/carousel/carousel.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/carousel/carousel.scss?");

/***/ }),

/***/ "./src/blocks/checkbox/checkbox.js":
/*!*****************************************!*\
  !*** ./src/blocks/checkbox/checkbox.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.initCheckbox = initCheckbox;\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/widgets/checkboxradio */ \"./node_modules/jquery-ui/ui/widgets/checkboxradio.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction initCheckbox(jquerySelector, classes) {\n  var $hiddenInput = $(jquerySelector);\n\n  function initialization() {\n    var $singleInput = $(this);\n    if ($singleInput.data('uiCheckboxradio')) return; // чтобы не инициализировать лишнего\n\n    var checkbox = $singleInput.checkboxradio({\n      classes: {\n        'ui-checkboxradio-icon': classes.icon,\n        'ui-checkboxradio-icon-space': classes.iconSpace\n      }\n    });\n    var isChecked = $singleInput.attr('data-isChecked');\n\n    if (isChecked === 'true') {\n      checkbox.attr('checked', 'checked').change();\n    }\n  }\n\n  $hiddenInput.each(initialization);\n}\n\nfunction initToggleCheckboxes() {\n  initCheckbox('.checkbox_type_toggle__hidden-button', {\n    icon: 'checkbox__button checkbox_type_toggle__button',\n    iconSpace: 'checkbox__icon-space checkbox_type_toggle__icon-space'\n  });\n}\n\nfunction initRadioCheckboxes() {\n  initCheckbox('.checkbox_type_radio__hidden-button', {\n    icon: 'checkbox__button checkbox_type_radio__button',\n    iconSpace: 'checkbox__icon-space checkbox_type_radio__iconSpace'\n  });\n}\n\nfunction initLikeCheckbox() {\n  var $likeLabel = $(this);\n  var $likeButton = $($likeLabel.find('.checkbox_type_like__hidden-button')[0]);\n  var checkboxRadioData = $likeButton.data('uiCheckboxradio');\n  initCheckbox($likeButton, {\n    icon: 'checkbox__button checkbox_type_like__button'\n  });\n  var gradientBorderElement = document.createElement('div');\n  gradientBorderElement.classList.add('checkbox_type_like__button-border');\n  $likeLabel.prepend(gradientBorderElement);\n\n  if (Number.isNaN(Number.parseInt($likeLabel.attr('data-likes-count'), 10))) {\n    return;\n  }\n\n  if (checkboxRadioData) return; // чтобы не навешивать лишних обработчиков\n\n  var likesCount = Number.parseInt($likeLabel.attr('data-likes-count'), 10);\n  $likeButton.change(function () {\n    var $likeText = $($likeLabel.find('.checkbox_type_like__text')[0]);\n    likesCount = $likeLabel.hasClass('ui-checkboxradio-checked') ? likesCount + 1 : likesCount - 1;\n    $likeText.text(likesCount);\n    $likeLabel.attr('data-likes-count', likesCount);\n  });\n}\n\nfunction initLikeCheckboxes() {\n  var $likeCheckboxes = $('.checkbox_type_like__label');\n  $likeCheckboxes.each(initLikeCheckbox);\n}\n\ninitCheckbox('.checkbox_type_default__hidden-button', {\n  icon: 'checkbox__button checkbox_type_default__button',\n  iconSpace: 'checkbox__icon-space checkbox_type_default__icon-space'\n});\n\nfunction initDefaultCheckboxes() {\n  var $defaultCheckboxes = $('.checkbox_type_default__button');\n  $defaultCheckboxes.text('check');\n}\n\nvar Checkbox = /*#__PURE__*/function () {\n  function Checkbox() {\n    _classCallCheck(this, Checkbox);\n  }\n\n  _createClass(Checkbox, null, [{\n    key: \"initDefault\",\n    value: function initDefault() {\n      initDefaultCheckboxes();\n    }\n  }, {\n    key: \"initLike\",\n    value: function initLike() {\n      initLikeCheckboxes();\n    }\n  }, {\n    key: \"initRadio\",\n    value: function initRadio() {\n      initRadioCheckboxes();\n    }\n  }, {\n    key: \"initToggle\",\n    value: function initToggle() {\n      initToggleCheckboxes();\n    }\n  }]);\n\n  return Checkbox;\n}();\n\nvar _default = Checkbox;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/checkbox/checkbox.js?");

/***/ }),

/***/ "./src/blocks/checkbox/checkbox.scss":
/*!*******************************************!*\
  !*** ./src/blocks/checkbox/checkbox.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/checkbox/checkbox.scss?");

/***/ }),

/***/ "./src/blocks/checkbox/init.js":
/*!*************************************!*\
  !*** ./src/blocks/checkbox/init.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _checkbox = _interopRequireDefault(__webpack_require__(/*! ./checkbox */ \"./src/blocks/checkbox/checkbox.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n_checkbox[\"default\"].initLike();\n\n_checkbox[\"default\"].initToggle();\n\n_checkbox[\"default\"].initRadio();\n\n_checkbox[\"default\"].initDefault();\n\n//# sourceURL=webpack:///./src/blocks/checkbox/init.js?");

/***/ }),

/***/ "./src/blocks/comment/comment.scss":
/*!*****************************************!*\
  !*** ./src/blocks/comment/comment.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/comment/comment.scss?");

/***/ }),

/***/ "./src/blocks/datepicker-block/datepicker-block.js":
/*!*********************************************************!*\
  !*** ./src/blocks/datepicker-block/datepicker-block.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.parseAttrToDate = parseAttrToDate;\nexports.setDates = setDates;\nexports.initDatepickerInput = initDatepickerInput;\nexports.initDatepickers = initDatepickers;\n\n__webpack_require__(/*! air-datepicker */ \"./node_modules/air-datepicker/src/js/air-datepicker.js\");\n\nvar _arrowBack = _interopRequireDefault(__webpack_require__(/*! ../../assets/images/arrow-back.svg */ \"./src/assets/images/arrow-back.svg\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/* eslint-disable no-undef */\n// jquery объявлена глобально вебпаком\nvar confirmButton = '<div class=\"button button_type_text datepicker-block__confirm-button\">' + '<button class=\"button__control button_type_text__control datepicker--button\" data-action=\"hide\">Применить' + '</button><div class=\"button__decoration material-icons\"></div></div>';\nvar clearButton = '<div class=\"button button_type_text button_hovered datepicker-block__clear-button\">' + '<button class=\"button__control button_type_text__control datepicker--button\" data-action=\"clear\">Очистить' + '</button><div class=\"button__decoration material-icons\"></div></div>';\n\nfunction parseAttrToDate(attrDate) {\n  var dateParts = attrDate.split('.');\n  var day = dateParts[0];\n  var month = dateParts[1];\n  var year = dateParts[2];\n  var dateString = \"\".concat(year, \"-\").concat(month, \"-\").concat(day);\n  return new Date(dateString);\n}\n\nfunction getInitDates($inputWrap) {\n  var dates = [];\n\n  if ($inputWrap.attr('data-first-date')) {\n    dates.push(parseAttrToDate($inputWrap.attr('data-first-date')));\n  }\n\n  if ($inputWrap.attr('data-second-date')) {\n    dates.push(parseAttrToDate($inputWrap.attr('data-second-date')));\n  }\n\n  return dates.length === 0 ? undefined : dates;\n}\n\nfunction addClickHandler(arrowElement, expandableElement, controlElement) {\n  $(controlElement).click(function () {\n    if ($(arrowElement).hasClass('expanded')) {\n      expandableElement.hide();\n    } else {\n      expandableElement.show();\n    }\n  });\n}\n\nfunction disableLabelClicks(event) {\n  // при клике на заголовок/стрелку итак происходит анфокус и календарь прячется,\n  // лишний клик не нужен\n  event.preventDefault();\n}\n\nfunction setExpandArrowEventHandlers($expandArrow, $inputControl, $ownerLabel) {\n  var expandableElement = null;\n  $inputControl.each(function () {\n    expandableElement = $inputControl.data('datepicker');\n    expandableElement.update({\n      onHide: function onHide(inst, animationCompleted) {\n        if (!animationCompleted) {\n          $expandArrow.text('expand_more');\n          return;\n        }\n\n        $($expandArrow).removeClass('expanded'); // чтобы лейбловые прокликивания снова заработали\n        // нужно показывать календарь при клике на что-то кроме инпута\n\n        $($ownerLabel).unbind('click', disableLabelClicks);\n      },\n      onShow: function onShow(inst, animationCompleted) {\n        if (!animationCompleted) {\n          $expandArrow.text('expand_less');\n          return;\n        }\n\n        $expandArrow.addClass('expanded');\n        $ownerLabel.click(disableLabelClicks);\n      },\n      todayButton: false\n    });\n  });\n  return expandableElement;\n}\n\nfunction initExpandableEvents($expandArrow, $control) {\n  var $ownerLabel = $(this).parent();\n  var expandableElement = setExpandArrowEventHandlers($expandArrow, $control, $ownerLabel);\n\n  if (expandableElement) {\n    addClickHandler($expandArrow, expandableElement, $control, $ownerLabel);\n  }\n}\n/**\n * Устанавливает даты в первый календарь\n * (второй подцепляет это значение в логике two-calendar-range-picker)\n * Если даты не переданы, используется сегодняшняя\n * @param $datepickerInput\n * @param dates\n */\n\n\nfunction setDates($datepickerInput, dates) {\n  if (!dates || dates.length === 0) {\n    return;\n  }\n\n  var datepickerData = $datepickerInput.data('datepicker');\n  datepickerData.selectDate(dates);\n}\n\nfunction initDatepickerInput(index, input) {\n  var $datepicker = $(input);\n  var $inputWrap = $datepicker.find('.datepicker-block__input-wrap');\n  var $inputControl = $inputWrap.find('.input__control');\n  var isInline = $inputWrap.hasClass('datepicker-block_inline__input-wrap');\n  if ($inputControl.data('datepicker')) return;\n  var datepicker = $inputControl.datepicker({\n    range: true,\n    inline: isInline,\n    dateFormat: 'd M',\n    multipleDatesSeparator: ' - ',\n    todayButton: true,\n    showEvent: '',\n    position: 'bottom center',\n    offset: 5,\n    navTitles: {\n      days: '<span class=\"text_type_item-title\">MM yyyy</span>',\n      months: '<span class=\"text_type_item-title\">yyyy</span>',\n      years: '<span class=\"text_type_item-title\">yyyy1 - yyyy2</span>'\n    },\n    prevHtml: \"<img src=\\\"\".concat(_arrowBack[\"default\"], \"\\\" alt=\\\"\\u043D\\u0430\\u0437\\u0430\\u0434\\\"\\\">\"),\n    nextHtml: \"<img src=\\\"\".concat(_arrowBack[\"default\"], \"\\\" alt=\\\"\\u043D\\u0430\\u0437\\u0430\\u0434\\\" style=\\\"transform: scale(-1, 1)\\\">\"),\n    onSelect: function onSelect(formattedDate) {\n      $inputControl.val(formattedDate.toLowerCase());\n    }\n  }).data('datepicker'); // замена кнопок на свои в элементе календаря\n\n  datepicker.$datepicker.find('.datepicker--button[data-action=\"today\"]').remove();\n  datepicker.$datepicker.find('.datepicker--buttons').append(clearButton);\n  datepicker.$datepicker.find('.datepicker--buttons').append(confirmButton); // установка ивентов отображения/исчезновения\n\n  var $expandArrow = $($datepicker.find('.datepicker-block__arrow')[0]);\n  initExpandableEvents($expandArrow, $inputControl);\n  var initDates = getInitDates($inputWrap);\n  datepicker.selectDate(initDates);\n}\n\nfunction initDatepickers() {\n  var $datepickers = $('.datepicker-block');\n  $datepickers.each(initDatepickerInput);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/datepicker-block/datepicker-block.js?");

/***/ }),

/***/ "./src/blocks/datepicker-block/datepicker-block.scss":
/*!***********************************************************!*\
  !*** ./src/blocks/datepicker-block/datepicker-block.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/datepicker-block/datepicker-block.scss?");

/***/ }),

/***/ "./src/blocks/datepicker-block/init.js":
/*!*********************************************!*\
  !*** ./src/blocks/datepicker-block/init.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _datepickerBlock = __webpack_require__(/*! ./datepicker-block */ \"./src/blocks/datepicker-block/datepicker-block.js\");\n\n(0, _datepickerBlock.initDatepickers)();\n\n//# sourceURL=webpack:///./src/blocks/datepicker-block/init.js?");

/***/ }),

/***/ "./src/blocks/donut-chart/donut-chart.js":
/*!***********************************************!*\
  !*** ./src/blocks/donut-chart/donut-chart.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($, jQuery) {\n\nvar _functions = __webpack_require__(/*! ../../common/functions */ \"./src/common/functions.js\");\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar donutHTML = __webpack_require__(/*! ./donut-template.pug */ \"./src/blocks/donut-chart/donut-template.pug\");\n\nvar donutArcActiveClass = 'donut-chart__svg-active-arc';\n\nfunction getDataTextContainer($donutContainer) {\n  var $imageContainer = $donutContainer.find('.donut-chart__image-container');\n  return $imageContainer.find('.donut-chart__active-data');\n}\n\nfunction getArcStyle(arc, params) {\n  if (arc.$arc.hasClass(donutArcActiveClass)) {\n    return params.activeStyle;\n  }\n\n  return params.defaultStyle;\n}\n\nfunction getSecondAngle(firstAngle, arcValue, ratesCount) {\n  var arcValueProportion = arcValue / ratesCount;\n  var arcAngle = 360 * arcValueProportion;\n  return firstAngle + arcAngle;\n}\n\nfunction degreesToRads(degreeAngleValue) {\n  return degreeAngleValue / 180 * Math.PI;\n}\n/**\r\n * Получить прямоугольные координаты из полярных\r\n * @param length радиус окружности\r\n * @param angle угол поворота\r\n * @param x0 Х точки отсчёта\r\n * @param y0 У точки отсчёта\r\n * @returns {{x: number, y: number}}\r\n */\n\n\nfunction toCartesian(length, angle) {\n  var x0 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var y0 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var result = {\n    x: 0,\n    y: 0\n  };\n  var angleRads = degreesToRads(angle);\n  result.x = x0 + length * Math.cos(angleRads);\n  result.y = y0 - length * Math.sin(angleRads); // вычитаем, потому что на канвасе ось перевёрнута\n\n  return result;\n}\n/**\r\n * Формирует и возвращает массив данных, необходимых для отрисовки дуги\r\n * @param arc\r\n * @param style активная или обычная\r\n * @param ratesCount общее количество отзывов\r\n * @param canvasSize\r\n * @returns\r\n * {secondPoint, strokeWidth, firstPoint, arcRadius, endingAngle, startY, startX, arcAngle}\r\n */\n\n\nfunction getArcDrawData(arc, style, ratesCount, canvasSize) {\n  var startingAngle = arc.$arc.data('startingAngle');\n  var endingAngle = getSecondAngle(startingAngle, arc.value, ratesCount);\n  var startX = canvasSize.width / 2;\n  var startY = canvasSize.height / 2;\n  var strokeWidth = style.outerRadius - style.innerRadius;\n  var arcRadius = style.outerRadius / 2 - strokeWidth / 2;\n  var arcAngle = endingAngle - startingAngle;\n  var firstPoint = toCartesian(arcRadius, startingAngle, startX, startY);\n  var secondPoint = toCartesian(arcRadius, endingAngle, startX, startY);\n  return {\n    firstPoint: firstPoint,\n    secondPoint: secondPoint,\n    arcRadius: arcRadius,\n    strokeWidth: strokeWidth,\n    startX: startX,\n    startY: startY,\n    arcAngle: arcAngle,\n    endingAngle: endingAngle\n  };\n}\n\nfunction drawArc(arc, arcDrawData) {\n  var isLargeArc = 0;\n\n  if (arcDrawData.arcAngle > 180) {\n    isLargeArc = 1;\n  }\n\n  arc.$arc.attr('stroke-width', arcDrawData.strokeWidth);\n  arc.$arc.attr('d', \"M \".concat(arcDrawData.firstPoint.x, \",\").concat(arcDrawData.firstPoint.y, \"\\n  A \").concat(arcDrawData.arcRadius, \" \").concat(arcDrawData.arcRadius, \"\\n  0 \").concat(isLargeArc, \"\\n  0 \").concat(arcDrawData.secondPoint.x, \",\").concat(arcDrawData.secondPoint.y));\n}\n\nfunction initDrawArc(arc, params) {\n  var currentStyle = getArcStyle(arc, params);\n  var arcDrawData = getArcDrawData(arc, currentStyle, params.ratesCountWithGaps, {\n    width: params.canvasWidth,\n    height: params.canvasHeight\n  });\n  drawArc(arc, arcDrawData);\n  return arcDrawData;\n}\n\nfunction clearArcsActivity(arcsArray, currentArc, params) {\n  arcsArray.forEach(function (arc) {\n    if (arc === currentArc) {\n      return;\n    }\n\n    arc.$arc.removeClass(donutArcActiveClass);\n    initDrawArc(arc, params);\n  });\n}\n/**\r\n * Выводит в текстовое поле значение выбранной дуги и меняет его цвет\r\n * Если передать 0, то текст очистится\r\n * @param $dataTextContainer\r\n * @param value\r\n * @param color\r\n * @param overallCount\r\n */\n\n\nfunction changeDataText($dataTextContainer, value, color, overallCount) {\n  var $activeValue = $dataTextContainer.find('.donut-chart__active-value');\n  var $valueText = $dataTextContainer.find('.donut-chart__value-text');\n\n  if (value === 0) {\n    $activeValue.text(overallCount);\n    $activeValue.css('color', 'grey');\n    $valueText.text((0, _functions.ruDeclination)(overallCount, 'голос||а|ов'));\n    $valueText.css('color', 'grey');\n  } else {\n    $activeValue.text(value);\n    $activeValue.css('color', color);\n    $valueText.text((0, _functions.ruDeclination)(value, 'голос||а|ов'));\n    $valueText.css('color', color);\n  }\n}\n\nfunction addOnClickHandlerToArcs(arcsArray, params, $dataTextContainer) {\n  arcsArray.forEach(function (arc) {\n    arc.$arc.click(function () {\n      clearArcsActivity(arcsArray, arc, params);\n      arc.$arc.toggleClass(donutArcActiveClass);\n      initDrawArc(arc, params);\n\n      if (arc.$arc.hasClass(donutArcActiveClass)) {\n        changeDataText($dataTextContainer, arc.value, arc.firstColor);\n      } else {\n        changeDataText($dataTextContainer, 0, undefined, params.ratesCount);\n      }\n    });\n  });\n}\n\nfunction getRatesWithGaps(rates, gapAngle, arcsCount) {\n  return rates / (1 - gapAngle * arcsCount / 360);\n}\n\nfunction getArcsAndRatesCount(arcsArray) {\n  var result = {\n    arcs: 0,\n    rates: 0\n  };\n  arcsArray.forEach(function (arc) {\n    if (arc.value === 0) {\n      return;\n    }\n\n    result.rates += arc.value;\n    result.arcs += 1;\n  });\n  return result;\n}\n\nfunction getMiddleNum(firstNum, secondNum) {\n  return (firstNum + secondNum) / 2;\n}\n\nfunction getAngleFromArcLength(arcLength, radius) {\n  return 180 * arcLength / (Math.PI * radius);\n}\n\nfunction getAdditionalParams(params) {\n  var additionalParams = {};\n  var arcDefaultRadius = getMiddleNum(params.defaultStyle.outerRadius, params.defaultStyle.innerRadius);\n  var arcsAndRatesCount = getArcsAndRatesCount(params.data);\n  additionalParams.canvasWidth = params.activeStyle.outerRadius;\n  additionalParams.canvasHeight = params.activeStyle.outerRadius;\n  additionalParams.gapsAngle = getAngleFromArcLength(params.arcsGap, arcDefaultRadius);\n  additionalParams.startingAngle = 90 + additionalParams.gapsAngle / 2;\n  additionalParams.notZeroArcs = arcsAndRatesCount.arcs;\n  additionalParams.ratesCount = arcsAndRatesCount.rates;\n  additionalParams.ratesCountWithGaps = getRatesWithGaps(arcsAndRatesCount.rates, additionalParams.gapsAngle, arcsAndRatesCount.arcs);\n  return additionalParams;\n}\n\nfunction drawArcsOnSVGCanvas(arcsArray, params, $dataTextContainer) {\n  arcsArray[0].$arc.data('startingAngle', params.startingAngle);\n  var activeArc = null;\n  arcsArray.forEach(function (arc, i) {\n    if (arc.value === 0) {\n      if (i + 1 < arcsArray.length) {\n        arcsArray[i + 1].$arc.data('startingAngle', params.startingAngle);\n      }\n\n      return;\n    } // добавляем класс, если в параметрах передано, что дуга активная\n\n\n    if (arcsArray[i].isActive) {\n      arc.$arc.addClass(donutArcActiveClass);\n      activeArc = arc;\n    } // узнаём данные о нарисованной дуге\n\n\n    var arcDrawData = initDrawArc(arcsArray[i], params);\n\n    if (i + 1 < arcsArray.length) {\n      // записываем в следующую дугу угол, с которого она должна начинаться\n      arcsArray[i + 1].$arc.data('startingAngle', arcDrawData.endingAngle + params.gapsAngle);\n    }\n  });\n\n  if (activeArc.$arc.hasClass(donutArcActiveClass)) {\n    changeDataText($dataTextContainer, activeArc.value, activeArc.firstColor);\n  } else {\n    changeDataText($dataTextContainer, 0);\n  }\n}\n\nfunction addJQLinksToArcs(arcsObjArray, $arcs, $legendItems) {\n  arcsObjArray.forEach(function (arcObj, i) {\n    arcObj.$arc = $($arcs[i]);\n    arcObj.$legend = $($legendItems[i]);\n  });\n}\n\nfunction createDonut() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    data: [{\n      caption: '1',\n      value: 1,\n      background: 'red'\n    }, {\n      caption: '2',\n      value: 2,\n      background: 'green'\n    }, {\n      caption: '3',\n      value: 3,\n      background: 'blue'\n    }, {\n      caption: '4',\n      value: 4,\n      background: 'black'\n    }],\n    defaultStyle: {\n      outerRadius: 100,\n      innerRadius: 95\n    },\n    activeStyle: {\n      outerRadius: 105,\n      innerRadius: 90\n    },\n    arcsGap: 5\n  };\n  var $donutContainer = $(this);\n  var arcsData = (0, _functions.copyArrayOfObjects)(params.data);\n  $donutContainer.html(donutHTML({\n    arcs: arcsData\n  }));\n  var $dataTextContainer = getDataTextContainer($donutContainer);\n  var $donutCanvas = $donutContainer.find('.donut-chart__svg');\n  var $donutArcs = $donutCanvas.find('.donut-chart__svg-arc');\n  var $donutLegend = $donutContainer.find('.donut-chart__legend');\n  var $legendItems = $donutLegend.find('.donut-chart__legend-item');\n  var additionalParams = getAdditionalParams(params);\n\n  var fullParams = _objectSpread({}, params, {}, additionalParams);\n\n  addJQLinksToArcs(arcsData, $donutArcs, $legendItems);\n  drawArcsOnSVGCanvas(arcsData, fullParams, $dataTextContainer);\n  $donutCanvas.attr('viewBox', \"0 0 \".concat(fullParams.canvasWidth, \" \").concat(fullParams.canvasHeight));\n  addOnClickHandlerToArcs(arcsData, fullParams, $dataTextContainer);\n}\n\njQuery.fn.extend({\n  donutChart: createDonut\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\"), __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/donut-chart/donut-chart.js?");

/***/ }),

/***/ "./src/blocks/donut-chart/donut-chart.scss":
/*!*************************************************!*\
  !*** ./src/blocks/donut-chart/donut-chart.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/donut-chart/donut-chart.scss?");

/***/ }),

/***/ "./src/blocks/donut-chart/donut-template.pug":
/*!***************************************************!*\
  !*** ./src/blocks/donut-chart/donut-template.pug ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (arcs) {pug_html = pug_html + \"\\u003Cdiv class=\\\"donut-chart__image-container\\\"\\u003E\\u003Csvg class=\\\"donut-chart__svg\\\" width=\\\"200\\\" height=\\\"200\\\" preserveAspectRatio=\\\"xMidYMid meet\\\"\\u003E\\u003Cdefs\\u003E\";\n// iterate arcs\n;(function(){\n  var $$obj = arcs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var arc = $$obj[index];\npug_html = pug_html + \"\\u003ClinearGradient\" + (pug.attr(\"id\", `grad${index}`, true, true)+\" x1=\\\"0%\\\" y1=\\\"0%\\\" x2=\\\"0%\\\" y2=\\\"100%\\\"\") + \"\\u003E\\u003Cstop\" + (pug.attr(\"stop-color\", arc.firstColor, true, true)) + \"\\u003E\\u003C\\u002Fstop\\u003E\\u003Cstop\" + (\" offset=\\\"100%\\\"\"+pug.attr(\"stop-color\", arc.secondColor, true, true)) + \"\\u003E\\u003C\\u002Fstop\\u003E\\u003C\\u002FlinearGradient\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var arc = $$obj[index];\npug_html = pug_html + \"\\u003ClinearGradient\" + (pug.attr(\"id\", `grad${index}`, true, true)+\" x1=\\\"0%\\\" y1=\\\"0%\\\" x2=\\\"0%\\\" y2=\\\"100%\\\"\") + \"\\u003E\\u003Cstop\" + (pug.attr(\"stop-color\", arc.firstColor, true, true)) + \"\\u003E\\u003C\\u002Fstop\\u003E\\u003Cstop\" + (\" offset=\\\"100%\\\"\"+pug.attr(\"stop-color\", arc.secondColor, true, true)) + \"\\u003E\\u003C\\u002Fstop\\u003E\\u003C\\u002FlinearGradient\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fdefs\\u003E\";\n// iterate arcs\n;(function(){\n  var $$obj = arcs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var arc = $$obj[index];\npug_html = pug_html + \"\\u003Cpath\" + (\" class=\\\"donut-chart__svg-arc\\\"\"+pug.attr(\"stroke\", `url(#grad${index})`, true, true)+\" fill=\\\"transparent\\\"\") + \"\\u003E\\u003C\\u002Fpath\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var arc = $$obj[index];\npug_html = pug_html + \"\\u003Cpath\" + (\" class=\\\"donut-chart__svg-arc\\\"\"+pug.attr(\"stroke\", `url(#grad${index})`, true, true)+\" fill=\\\"transparent\\\"\") + \"\\u003E\\u003C\\u002Fpath\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fsvg\\u003E\\u003Cdiv class=\\\"donut-chart__active-data\\\"\\u003E\\u003Cspan class=\\\"donut-chart__active-value\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"donut-chart__value-text\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cul class=\\\"donut-chart__legend\\\"\\u003E\";\n// iterate arcs\n;(function(){\n  var $$obj = arcs;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {\n        var arc = $$obj[pug_index2];\npug_html = pug_html + \"\\u003Cli\" + (\" class=\\\"donut-chart__legend-item\\\"\"+pug.attr(\"style\", pug.style(`--background: linear-gradient(180deg, ${arc.firstColor} 0%, ${arc.secondColor} 100%);`), true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = arc.caption) ? \"\" : pug_interp)) + \"\\u003C\\u002Fli\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index2 in $$obj) {\n      $$l++;\n      var arc = $$obj[pug_index2];\npug_html = pug_html + \"\\u003Cli\" + (\" class=\\\"donut-chart__legend-item\\\"\"+pug.attr(\"style\", pug.style(`--background: linear-gradient(180deg, ${arc.firstColor} 0%, ${arc.secondColor} 100%);`), true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = arc.caption) ? \"\" : pug_interp)) + \"\\u003C\\u002Fli\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Ful\\u003E\";}.call(this,\"arcs\" in locals_for_with?locals_for_with.arcs:typeof arcs!==\"undefined\"?arcs:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/blocks/donut-chart/donut-template.pug?");

/***/ }),

/***/ "./src/blocks/dropdown/dropdown.js":
/*!*****************************************!*\
  !*** ./src/blocks/dropdown/dropdown.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/effects/effect-fade */ \"./node_modules/jquery-ui/ui/effects/effect-fade.js\");\n\nvar _functions = __webpack_require__(/*! ../../common/functions */ \"./src/common/functions.js\");\n\nvar _spinner = __webpack_require__(/*! ../spinner/spinner */ \"./src/blocks/spinner/spinner.js\");\n\n/* eslint-disable no-undef */\n// jquery объявлена глобально вебпаком\n\n/**\r\n * Функция для получения пар имя-значение со всех переданных спиннеров\r\n *\r\n * @param spinnerElements   массив спиннеров\r\n * @returns {Array}\r\n */\nfunction getCurrentNamesValues(spinnerElements) {\n  var result = [];\n\n  function getNameValue() {\n    result.push({\n      name: $(this).attr('data-name'),\n      value: parseInt($(this).val(), 10)\n    });\n  }\n\n  $(spinnerElements).each(getNameValue);\n  return result;\n}\n\nvar typeRooms = 'rooms';\nvar typeCustomers = 'customers';\n\nfunction getDropdownType($list) {\n  var dropdownType = {};\n  var listClassPrefix = 'dropdown__list_';\n\n  if ($($list).hasClass(\"\".concat(listClassPrefix, \"unified\"))) {\n    dropdownType.isUnified = true;\n  }\n\n  if ($($list).hasClass(\"\".concat(listClassPrefix, \"type_rooms\"))) {\n    dropdownType.name = typeRooms;\n  } else if ($($list).hasClass(\"\".concat(listClassPrefix, \"type_customers\"))) {\n    dropdownType.name = typeCustomers;\n  } else return false;\n\n  return dropdownType;\n}\n\nfunction selectNiceWord(itemsCount, itemName) {\n  var result = '';\n\n  switch (itemName.toLowerCase()) {\n    case 'спальни':\n      result = (0, _functions.ruDeclination)(itemsCount, 'спал|ьня|ьни|ен');\n      break;\n\n    case 'кровати':\n      result = (0, _functions.ruDeclination)(itemsCount, 'кроват|ь|и|ей');\n      break;\n\n    case 'ванные комнаты':\n      result = \"\".concat((0, _functions.ruDeclination)(itemsCount, 'ванн|ая|ых|ых'), \" \").concat((0, _functions.ruDeclination)(itemsCount, 'комнат|а|ы|'));\n      break;\n\n    case 'гости':\n      result = (0, _functions.ruDeclination)(itemsCount, 'гост|ь|я|ей');\n      break;\n\n    case 'младенцы':\n      result = (0, _functions.ruDeclination)(itemsCount, 'младен|ец|ца|цев');\n      break;\n\n    default:\n  }\n\n  return result;\n}\n\nfunction areAllValuesZero(namesValues) {\n  return !(namesValues === null || namesValues === void 0 ? void 0 : namesValues.some(function (nameValue) {\n    return parseInt(nameValue.value, 10) !== 0;\n  }));\n}\n\nfunction createUnifiedString(namesValues, declinationsString) {\n  var sum = namesValues.reduce(function (accumulator, currentValue) {\n    return accumulator + parseInt(currentValue.value, 10);\n  }, 0);\n  return \"\".concat(sum, \" \").concat((0, _functions.ruDeclination)(sum, declinationsString));\n}\n\nfunction createSeparateRoomsString(namesValues) {\n  var result = namesValues.reduce(function (accumulator, currentNameValue) {\n    return \"\".concat(accumulator, \" \") + \"\".concat(currentNameValue.value, \" \") + \"\".concat(selectNiceWord(currentNameValue.value, currentNameValue.name), \", \");\n  }, '');\n  result = result.substring(0, result.length - 2).trim();\n  return result;\n}\n\nfunction createRoomsString(namesValues, isUnified) {\n  var result;\n\n  if (isUnified) {\n    result = createUnifiedString(namesValues, 'комнаты');\n  } else {\n    result = createSeparateRoomsString(namesValues);\n  }\n\n  return result;\n}\n\nfunction createCustomersWithInfantsString(namesValues) {\n  var infants = 0;\n  var sum = 0;\n  namesValues.forEach(function (nameValue) {\n    if (nameValue.name.toLowerCase() === 'младенцы') {\n      infants = nameValue.value;\n      return;\n    }\n\n    sum += parseInt(nameValue.value, 10);\n  });\n  return \"\".concat(sum, \" \").concat(selectNiceWord(sum, 'гости'), \", \") + \"\".concat(infants, \" \").concat(selectNiceWord(infants, 'младенцы'));\n}\n\nfunction createCustomersString(namesValues, isUnified) {\n  var resultString;\n\n  if (isUnified) {\n    resultString = createUnifiedString(namesValues, 'гост|ь|я|ей');\n  } else {\n    resultString = createCustomersWithInfantsString(namesValues);\n  }\n\n  return resultString;\n}\n/**\r\n * Создание строки, содержащей суммарную информацию по дропдауну.\r\n * Формат строки зависит от типа дропдауна\r\n *\r\n * @param namesValues   массив пар имя-значение, из которых составляется строка\r\n * @param dropdownType  тип дропдауна\r\n * @returns {string}    результирующая строка\r\n */\n\n\nfunction createInputText(namesValues, dropdownType) {\n  var result = '';\n  if (areAllValuesZero(namesValues)) return result;\n\n  switch (dropdownType.name) {\n    case typeRooms:\n      {\n        result = createRoomsString(namesValues, dropdownType.isUnified);\n        break;\n      }\n\n    case typeCustomers:\n      {\n        result = createCustomersString(namesValues, dropdownType.isUnified);\n        break;\n      }\n\n    default:\n      {\n        var sum = namesValues.reduce(function (accumulator, nameValue) {\n          return accumulator + parseInt(nameValue.value, 10);\n        }, 0);\n        result += \"\".concat(sum, \" \\u0447\\u0435\\u0433\\u043E-\\u0442\\u043E\");\n        break;\n      }\n  }\n\n  return result;\n}\n\nfunction changeInputText($listWrapper, namesValues, input) {\n  var $list = $listWrapper.find('.dropdown__list');\n  var dropdownType = getDropdownType($list);\n  var newInputText = createInputText(namesValues, dropdownType);\n  $(input).val(newInputText);\n}\n/**\r\n * Поэлементное сравнение двух массивов имя-значение по значениям.\r\n * @param namesValues1  первый массив\r\n * @param namesValues2  второй массив\r\n * @returns {boolean}   одинаковы ли они\r\n */\n\n\nfunction areValuesEqual(namesValues1, namesValues2) {\n  return !(namesValues2 === null || namesValues2 === void 0 ? void 0 : namesValues2.some(function (nameValue, index) {\n    return (namesValues1 === null || namesValues1 === void 0 ? void 0 : namesValues1[index].value) !== nameValue.value;\n  }));\n}\n\nfunction manageControlsVisibility(_ref) {\n  var oldNamesValues = _ref.oldNamesValues,\n      namesValues = _ref.namesValues,\n      $clearButton = _ref.$clearButton,\n      $confirmButton = _ref.$confirmButton,\n      $buttonsContainer = _ref.$buttonsContainer,\n      areControlsEnabled = _ref.areControlsEnabled,\n      areValuesConfirmed = _ref.areValuesConfirmed;\n  var clearVisibleClass = 'dropdown__clear-button_visible';\n  var confirmVisibleClass = 'dropdown__confirm-button_visible';\n  var containerVisibleClass = 'dropdown__buttons-container_visible';\n  var areEmpty = areAllValuesZero(namesValues);\n\n  if (areEmpty) {\n    $clearButton.removeClass(clearVisibleClass);\n  } else {\n    $clearButton.addClass(clearVisibleClass);\n  }\n\n  var areEqual = areValuesEqual(namesValues, oldNamesValues);\n\n  if (areEqual && areValuesConfirmed) {\n    $confirmButton.removeClass(confirmVisibleClass);\n  } else {\n    $confirmButton.addClass(confirmVisibleClass);\n  }\n\n  var hasClearVisibleClass = $clearButton.hasClass(clearVisibleClass);\n  var hasConfirmVisibleClass = $confirmButton.hasClass(confirmVisibleClass);\n  var areSomeControlsVisible = hasClearVisibleClass || hasConfirmVisibleClass;\n\n  if (areSomeControlsVisible && areControlsEnabled) {\n    $buttonsContainer.addClass(containerVisibleClass);\n  } else {\n    $buttonsContainer.removeClass(containerVisibleClass);\n  }\n}\n\nfunction setSpinnerValues(namesValuesToSet, namesValuesToChange, $spinners, options) {\n  $spinners.each(function (i) {\n    var $currentSpinner = $($spinners[i]);\n\n    if (options.includes('array')) {\n      namesValuesToChange[i].value = namesValuesToSet[i].value;\n      $currentSpinner.spinner('value', namesValuesToSet[i].value);\n      (0, _spinner.disableButtonsAtExtremum)($currentSpinner, namesValuesToSet[i].value);\n    }\n\n    if (options.includes('value')) {\n      namesValuesToChange[i].value = namesValuesToSet;\n      $currentSpinner.spinner('value', namesValuesToSet);\n      (0, _spinner.disableButtonsAtExtremum)($currentSpinner, namesValuesToSet);\n    }\n  });\n}\n\nfunction clearSpinnersValues(namesValues, spinners) {\n  setSpinnerValues(0, namesValues, spinners, ['value']);\n}\n\nfunction dropdownOnChange(_ref2) {\n  var oldNamesValues = _ref2.oldNamesValues,\n      namesValues = _ref2.namesValues,\n      $spinners = _ref2.$spinners,\n      $clearButton = _ref2.$clearButton,\n      $confirmButton = _ref2.$confirmButton,\n      $buttonsContainer = _ref2.$buttonsContainer,\n      $listWrapper = _ref2.$listWrapper,\n      $input = _ref2.$input,\n      areControlsEnabled = _ref2.areControlsEnabled,\n      areValuesConfirmed = _ref2.areValuesConfirmed;\n  setSpinnerValues(oldNamesValues, namesValues, $spinners, ['array']);\n  manageControlsVisibility({\n    oldNamesValues: oldNamesValues,\n    namesValues: namesValues,\n    $clearButton: $clearButton,\n    $confirmButton: $confirmButton,\n    $buttonsContainer: $buttonsContainer,\n    areControlsEnabled: areControlsEnabled,\n    areValuesConfirmed: areValuesConfirmed\n  });\n  changeInputText($listWrapper, namesValues, $input);\n}\n\nfunction getInitialNamesValues($spinnerElements) {\n  var result = [];\n\n  function getNameValueFromSpinner() {\n    var $spinnerElement = $(this);\n    result.push({\n      name: $spinnerElement.attr('data-name'),\n      value: parseInt($spinnerElement.attr('value') ? $spinnerElement.attr('value') : 0, 10)\n    });\n  }\n\n  $spinnerElements.each(getNameValueFromSpinner);\n  return result;\n}\n\nvar dropdownVisibleClass = 'dropdown__list-wrapper_visible';\n\nfunction initDropdown(index, rootElement) {\n  var $inputWrapper = $(rootElement); // чтобы не инициализировать повторно\n\n  var isInitialisedKey = 'isInitialised';\n  if ($inputWrapper.data(isInitialisedKey)) return;\n  $inputWrapper.data(isInitialisedKey, true);\n  var $listWrapper = $inputWrapper.children('.dropdown__list-wrapper');\n  var $inputControl = $inputWrapper.find('.dropdown__input .input__control');\n  var $spinners = $inputWrapper.find('.spinner__value');\n  var $buttonsContainer = $inputWrapper.find('.dropdown__buttons-container');\n  var $clearButton = $inputWrapper.find('.dropdown__clear-button');\n  var $confirmButton = $inputWrapper.find('.dropdown__confirm-button');\n  var areValuesConfirmed = !$inputWrapper.hasClass('dropdown_unaccepted');\n  var isOpened = $inputWrapper.hasClass('dropdown_opened');\n\n  if (isOpened) {\n    $listWrapper.toggle('fade');\n    $listWrapper.toggleClass(dropdownVisibleClass);\n  }\n\n  var areControlsEnabled = !$inputWrapper.hasClass('dropdown_pure');\n  var namesValues = getInitialNamesValues($spinners);\n  var oldNamesValues = getInitialNamesValues($spinners);\n  changeInputText($listWrapper, namesValues, $inputControl);\n  manageControlsVisibility({\n    oldNamesValues: oldNamesValues,\n    namesValues: namesValues,\n    $clearButton: $clearButton,\n    $confirmButton: $confirmButton,\n    $buttonsContainer: $buttonsContainer,\n    areControlsEnabled: areControlsEnabled,\n    areValuesConfirmed: areValuesConfirmed\n  });\n\n  function handleClearButtonClick() {\n    clearSpinnersValues(namesValues, $spinners);\n    manageControlsVisibility({\n      oldNamesValues: oldNamesValues,\n      namesValues: namesValues,\n      $clearButton: $clearButton,\n      $confirmButton: $confirmButton,\n      $buttonsContainer: $buttonsContainer,\n      areControlsEnabled: areControlsEnabled,\n      areValuesConfirmed: areValuesConfirmed\n    });\n    changeInputText($listWrapper, namesValues, $inputControl);\n  }\n\n  $clearButton.click(handleClearButtonClick);\n\n  function handleConfirmButtonClick() {\n    if (!isOpened) {\n      $inputControl.removeClass('input__focused_control');\n      $listWrapper.toggle('fade');\n      $listWrapper.toggleClass(dropdownVisibleClass);\n    }\n\n    areValuesConfirmed = true;\n    oldNamesValues = getCurrentNamesValues($spinners);\n    manageControlsVisibility({\n      oldNamesValues: oldNamesValues,\n      namesValues: namesValues,\n      $clearButton: $clearButton,\n      $confirmButton: $confirmButton,\n      $buttonsContainer: $buttonsContainer,\n      areControlsEnabled: areControlsEnabled,\n      areValuesConfirmed: areValuesConfirmed\n    });\n  }\n\n  $confirmButton.click(handleConfirmButtonClick); // on spin\n\n  $spinners.each(function (i) {\n    var $spinner = $($spinners[i]);\n\n    function handleSpin(event, ui) {\n      namesValues[$spinner.attr('data-index')].value = ui.value;\n      changeInputText($listWrapper, namesValues, $inputControl);\n      manageControlsVisibility({\n        oldNamesValues: oldNamesValues,\n        namesValues: namesValues,\n        $clearButton: $clearButton,\n        $confirmButton: $confirmButton,\n        $buttonsContainer: $buttonsContainer,\n        areControlsEnabled: areControlsEnabled,\n        areValuesConfirmed: areValuesConfirmed\n      });\n    }\n\n    $spinner.on('spin', handleSpin);\n  });\n  $listWrapper.position({\n    my: 'center',\n    at: 'center',\n    of: $inputControl\n  });\n  var clickedElement;\n  $(document).click(function (event) {\n    clickedElement = $(event.target); // если клик происходит не в дропдауне\n\n    if (!$.contains($inputWrapper.get(0), clickedElement.get(0))) {\n      // и дропдаун отображается\n      if ($listWrapper.hasClass(dropdownVisibleClass)) {\n        if (!isOpened) {\n          $listWrapper.toggle('fade');\n          $listWrapper.toggleClass(dropdownVisibleClass);\n          $inputControl.removeClass('input_focused__control');\n        }\n\n        setSpinnerValues(oldNamesValues, namesValues, $spinners, ['array']);\n        manageControlsVisibility({\n          oldNamesValues: oldNamesValues,\n          namesValues: namesValues,\n          $clearButton: $clearButton,\n          $confirmButton: $confirmButton,\n          $buttonsContainer: $buttonsContainer,\n          areControlsEnabled: areControlsEnabled,\n          areValuesConfirmed: areValuesConfirmed\n        });\n        changeInputText($listWrapper, namesValues, $inputControl);\n      }\n    }\n  });\n  $inputControl.click(function () {\n    if (!isOpened) {\n      $inputControl.toggleClass('input_focused__control');\n      $listWrapper.toggle('fade');\n      $listWrapper.toggleClass(dropdownVisibleClass);\n    }\n\n    if (!$listWrapper.hasClass(dropdownVisibleClass)) {\n      dropdownOnChange({\n        oldNamesValues: oldNamesValues,\n        namesValues: namesValues,\n        $spinners: $spinners,\n        $clearButton: $clearButton,\n        $confirmButton: $confirmButton,\n        $buttonsContainer: $buttonsContainer,\n        $listWrapper: $listWrapper,\n        $inputControl: $inputControl,\n        areControlsEnabled: areControlsEnabled,\n        areValuesConfirmed: areValuesConfirmed\n      });\n    }\n  });\n}\n\nfunction initDropdowns() {\n  var $dropdowns = $('.dropdown');\n  $dropdowns.each(initDropdown);\n}\n\nvar _default = initDropdowns;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/dropdown/dropdown.js?");

/***/ }),

/***/ "./src/blocks/dropdown/dropdown.scss":
/*!*******************************************!*\
  !*** ./src/blocks/dropdown/dropdown.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/dropdown/dropdown.scss?");

/***/ }),

/***/ "./src/blocks/dropdown/init.js":
/*!*************************************!*\
  !*** ./src/blocks/dropdown/init.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dropdown = _interopRequireDefault(__webpack_require__(/*! ./dropdown */ \"./src/blocks/dropdown/dropdown.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _dropdown[\"default\"])();\n\n//# sourceURL=webpack:///./src/blocks/dropdown/init.js?");

/***/ }),

/***/ "./src/blocks/features-list/features-list.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/features-list/features-list.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/features-list/features-list.scss?");

/***/ }),

/***/ "./src/blocks/input/init.js":
/*!**********************************!*\
  !*** ./src/blocks/input/init.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _input = _interopRequireDefault(__webpack_require__(/*! ./input */ \"./src/blocks/input/input.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _input[\"default\"])();\n\n//# sourceURL=webpack:///./src/blocks/input/init.js?");

/***/ }),

/***/ "./src/blocks/input/input.js":
/*!***********************************!*\
  !*** ./src/blocks/input/input.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! jquery.maskedinput/src/jquery.maskedinput */ \"./node_modules/jquery.maskedinput/src/jquery.maskedinput.js\");\n\n/* eslint-disable no-undef */\n// jquery объявлена глобально вебпаком\n// region Masked\nfunction initMaskedInputs() {\n  var $document = $(document);\n  $document.ready(function ($) {\n    $.mask.definitions.D = '[0-3]';\n    $.mask.definitions.M = '[0-1]';\n    $.mask.definitions.Y = '[1-2]';\n    var $maskedInput = $('.input_type_masked__control');\n    var placeholder = $maskedInput.attr('placeholder');\n    $maskedInput.mask('D9.M9.Y999', {\n      placeholder: placeholder,\n      autoclear: false\n    });\n  });\n} // endregion\n\n\nvar _default = initMaskedInputs;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/input/input.js?");

/***/ }),

/***/ "./src/blocks/input/input.scss":
/*!*************************************!*\
  !*** ./src/blocks/input/input.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/input.scss?");

/***/ }),

/***/ "./src/blocks/list/init.js":
/*!*********************************!*\
  !*** ./src/blocks/list/init.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _list = _interopRequireDefault(__webpack_require__(/*! ./list */ \"./src/blocks/list/list.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _list[\"default\"])();\n\n//# sourceURL=webpack:///./src/blocks/list/init.js?");

/***/ }),

/***/ "./src/blocks/list/list.js":
/*!*********************************!*\
  !*** ./src/blocks/list/list.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/effects/effect-fade */ \"./node_modules/jquery-ui/ui/effects/effect-fade.js\");\n\n/* eslint-disable no-undef */\n// jquery объявлена глобально вебпаком\n// region Expandable\nfunction initExpandableList(index, element) {\n  var $expandableList = $(element);\n  if ($expandableList.data('isInitialized')) return;\n  $expandableList.data('isInitialized', true);\n  var $expandableTitle = $($expandableList.find('.list_expandable__title')[0]);\n  var $expandableContainer = $($expandableList.find('.list_expandable__container')[0]);\n  var isOpened = $expandableList.hasClass('list_expandable-opened');\n\n  function handleExpandableTitleClick() {\n    $expandableList.toggleClass('list_expanded__expand-arrow');\n    $expandableContainer.toggle('fade', [], 200);\n    $expandableContainer.toggleClass('list_visible__container');\n  }\n\n  $expandableTitle.click(handleExpandableTitleClick);\n  if (isOpened) $($expandableContainer).toggle('fade', [], 200);\n}\n\nfunction initExpandableLists() {\n  var $expandableLists = $('.list_expandable');\n  $expandableLists.each(initExpandableList);\n} // endregion\n\n\nvar _default = initExpandableLists;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/list/list.js?");

/***/ }),

/***/ "./src/blocks/list/list.scss":
/*!***********************************!*\
  !*** ./src/blocks/list/list.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/list/list.scss?");

/***/ }),

/***/ "./src/blocks/pagination/init.js":
/*!***************************************!*\
  !*** ./src/blocks/pagination/init.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _pagination = _interopRequireDefault(__webpack_require__(/*! ./pagination */ \"./src/blocks/pagination/pagination.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _pagination[\"default\"])();\n\n//# sourceURL=webpack:///./src/blocks/pagination/init.js?");

/***/ }),

/***/ "./src/blocks/pagination/pagination.js":
/*!*********************************************!*\
  !*** ./src/blocks/pagination/pagination.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! paginationjs */ \"./node_modules/paginationjs/dist/pagination.js\");\n\n/* eslint-disable no-undef */\n// jquery объявлена глобально вебпаком\nfunction getPaginationContent($contentContainer) {\n  var HTMLContent = [];\n\n  function addHTMLContentToArray() {\n    HTMLContent.push($(this).outerHTML());\n  }\n\n  $contentContainer.children().each(addHTMLContentToArray);\n  return HTMLContent;\n}\n\nfunction initPagination() {\n  var $paginationBlock = $(this);\n  var $paginationContent = $paginationBlock.children('.pagination__content-container');\n  var $paginationButtons = $paginationBlock.children('.pagination__buttons-container');\n  var pageSize = $paginationBlock.attr('data-page-size');\n  var contentHTMLArray = getPaginationContent($paginationContent);\n  var $paginationContainer = $('.pagination__content-container');\n  $paginationButtons.pagination({\n    dataSource: contentHTMLArray,\n    prevText: 'arrow_back',\n    nextText: 'arrow_forward',\n    pageSize: pageSize,\n    pageRange: 1,\n    callback: function callback(arrayData) {\n      $paginationContainer.html(arrayData);\n    },\n    showNavigator: true,\n    formatNavigator: function formatNavigator(currentPage, totalPage, totalNumber) {\n      var totalCount = totalNumber.toString();\n\n      if (totalNumber > 100) {\n        totalCount = '100+';\n      } // так в макете\n\n\n      var startCount = 1;\n\n      if (currentPage > 1) {\n        startCount = (currentPage - 1) * pageSize + 1;\n      }\n\n      var endCount = pageSize * currentPage;\n\n      if (endCount > totalNumber) {\n        endCount = totalNumber;\n      }\n\n      return '<span class=\\'text_type_regular\\'>' + \" \".concat(startCount, \" \\u2013 \").concat(endCount, \" \\u0438\\u0437 \").concat(totalCount, \" \\u0432\\u0430\\u0440\\u0438\\u0430\\u043D\\u0442\\u043E\\u0432 \\u0430\\u0440\\u0435\\u043D\\u0434\\u044B</span>\");\n    }\n  });\n}\n\nfunction initPaginations() {\n  var $paginations = $('.pagination');\n  $paginations.each(initPagination);\n}\n\nvar _default = initPaginations;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/pagination/pagination.js?");

/***/ }),

/***/ "./src/blocks/pagination/pagination.scss":
/*!***********************************************!*\
  !*** ./src/blocks/pagination/pagination.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/pagination/pagination.scss?");

/***/ }),

/***/ "./src/blocks/rate-button/init.js":
/*!****************************************!*\
  !*** ./src/blocks/rate-button/init.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _rateButton = _interopRequireDefault(__webpack_require__(/*! ./rate-button */ \"./src/blocks/rate-button/rate-button.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _rateButton[\"default\"])();\n\n//# sourceURL=webpack:///./src/blocks/rate-button/init.js?");

/***/ }),

/***/ "./src/blocks/rate-button/rate-button.js":
/*!***********************************************!*\
  !*** ./src/blocks/rate-button/rate-button.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n/* eslint-disable no-undef */\n// jquery объявлен вебпаком\nvar states = {\n  1: 'star_border',\n  2: 'star_half',\n  3: 'star'\n};\n\nfunction setState($star, stateIndex) {\n  $star.text(states[stateIndex]);\n}\n\nfunction setRatingVisual($ratingButton, numericRating) {\n  var wholePart = Math.floor(numericRating);\n  var fraction = numericRating - wholePart;\n\n  function setRateStarState(index) {\n    var stateIndex; // 3 - full, 2 - half, 1 - empty\n\n    if (index + 1 <= wholePart) {\n      stateIndex = 3;\n    } else if (fraction > 0 && index === wholePart) {\n      stateIndex = 2;\n    } else {\n      stateIndex = 1;\n    }\n\n    setState($(this), stateIndex);\n  }\n\n  $ratingButton.children('.rate-button__star').each(setRateStarState);\n}\n\nfunction initRateButton(index, element) {\n  var $rating = $(element);\n  var maxRating = $rating.attr('data-maxRating');\n  var specifiedRating = $rating.attr('data-rating');\n  var rating;\n\n  if (specifiedRating === '-1') {\n    rating = Math.random() * maxRating;\n  } else {\n    rating = specifiedRating;\n  }\n\n  setRatingVisual($rating, rating);\n}\n\nfunction initRateButtons() {\n  var $rateButtons = $('.rate-button');\n  $rateButtons.each(initRateButton);\n}\n\nvar _default = initRateButtons;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/rate-button/rate-button.js?");

/***/ }),

/***/ "./src/blocks/rate-button/rate-button.scss":
/*!*************************************************!*\
  !*** ./src/blocks/rate-button/rate-button.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/rate-button/rate-button.scss?");

/***/ }),

/***/ "./src/blocks/slider/init.js":
/*!***********************************!*\
  !*** ./src/blocks/slider/init.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _slider = _interopRequireDefault(__webpack_require__(/*! ./slider */ \"./src/blocks/slider/slider.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _slider[\"default\"])();\n\n//# sourceURL=webpack:///./src/blocks/slider/init.js?");

/***/ }),

/***/ "./src/blocks/slider/slider.js":
/*!*************************************!*\
  !*** ./src/blocks/slider/slider.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/widgets/slider */ \"./node_modules/jquery-ui/ui/widgets/slider.js\");\n\n__webpack_require__(/*! jquery-ui/themes/base/slider.css */ \"./node_modules/jquery-ui/themes/base/slider.css\");\n\nvar _functions = __webpack_require__(/*! ../../common/functions */ \"./src/common/functions.js\");\n\n/* eslint-disable no-undef */\n// jquery объявлена вебпаком\nfunction sliderHandlerValueChange(event, ui) {\n  $(ui.handle).attr('sliderHandleValue', ui.value);\n} // region range slider\n\n\nfunction sliderValuesChange(event, ui) {\n  $(ui.handle).closest('.slider').find('.slider__value').text(\"\".concat((0, _functions.formatNumber)(ui.values[0], ' '), \"\\u20BD - \").concat((0, _functions.formatNumber)(ui.values[1], ' '), \"\\u20BD\"));\n} // endregion\n// region single slider\n\n\nfunction sliderValueChange(event, ui) {\n  $(ui.handle).closest('.slider').find('.slider__value').text(\"\".concat((0, _functions.formatNumber)(ui.value, ' '), \"\\u20BD\"));\n} // ищем слайдер, но не с диапазоном, а только одиночным значением\n\n\nfunction initSlider() {\n  var $slider = $(this);\n  var minimalValue = Number($slider.attr('data-min'));\n  var maximumValue = Number($slider.attr('data-max'));\n  var step = Number($slider.attr('data-step'));\n  var isRange = $slider.hasClass('slider__control_range');\n  $slider.slider({\n    min: minimalValue,\n    max: maximumValue,\n    step: step,\n    range: isRange,\n    animate: 'fast',\n    change: isRange ? sliderValuesChange : sliderValueChange,\n    slide: sliderHandlerValueChange\n  });\n  var initialValues = [(0, _functions.clamp)($slider.attr('data-firstValue'), minimalValue, maximumValue)];\n\n  if (isRange) {\n    var secondValue = $slider.attr('data-secondValue');\n    initialValues.push((0, _functions.clamp)(secondValue, minimalValue, maximumValue));\n    $slider.slider('values', initialValues);\n    $slider.children('.ui-slider-handle').first().attr('sliderHandleValue', initialValues[0]);\n    $slider.children('.ui-slider-handle').last().attr('sliderHandleValue', initialValues[1]);\n  } else {\n    $slider.slider('value', initialValues[0]);\n    $slider.children('.ui-slider-handle').first().attr('sliderHandleValue', initialValues[0]);\n  }\n} // endregion\n\n\nfunction initSliders() {\n  var $sliders = $('.slider__control');\n  $sliders.each(initSlider);\n}\n\nvar _default = initSliders;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/slider/slider.js?");

/***/ }),

/***/ "./src/blocks/slider/slider.scss":
/*!***************************************!*\
  !*** ./src/blocks/slider/slider.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/slider/slider.scss?");

/***/ }),

/***/ "./src/blocks/spinner/spinner.js":
/*!***************************************!*\
  !*** ./src/blocks/spinner/spinner.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.disableButtonsAtExtremum = disableButtonsAtExtremum;\nexports.increaseButtonClasses = exports.decreaseButtonClasses = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/widgets/spinner */ \"./node_modules/jquery-ui/ui/widgets/spinner.js\");\n\n/* eslint-disable no-undef,no-underscore-dangle */\n// jquery импортирована вебпаком, функции с подчеркиванием - часть плагина\nvar decreaseButtonClasses = 'spinner__decrease spinner__button ui-spinner-button ui-spinner-down';\nexports.decreaseButtonClasses = decreaseButtonClasses;\nvar increaseButtonClasses = 'spinner__increase spinner__button ui-spinner-button ui-spinner-up'; // морф, чтобы кнопки были по бокам\n\nexports.increaseButtonClasses = increaseButtonClasses;\n$.widget('ui.spinner', $.ui.spinner, {\n  _enhance: function _enhance() {\n    this.uiSpinner = this.element.attr('autocomplete', 'off').wrap(this._uiSpinnerHtml()).parent() // Add buttons\n    .prepend(this._buttonHtml()[0]).append(this._buttonHtml()[1]);\n  },\n  _buttonHtml: function _buttonHtml() {\n    return [\"<button class=\\\"\".concat(decreaseButtonClasses, \"\\\">-</button>\"), \"<button class=\\\"\".concat(increaseButtonClasses, \"\\\">+</button>\")];\n  },\n  // обёртка своя есть\n  _uiSpinnerHtml: function _uiSpinnerHtml() {\n    return '';\n  }\n});\n\nfunction disableButtonsAtExtremum($spinner, currentValue) {\n  var disabledButtonClass = 'spinner__button_disabled';\n  var min = $spinner.attr('data-min');\n  var max = $spinner.attr('data-max');\n  var $decreaseButton = $spinner.siblings('.spinner__decrease');\n  var $increaseButton = $spinner.siblings('.spinner__increase');\n\n  if (currentValue <= min) {\n    $decreaseButton.addClass(disabledButtonClass);\n  } else {\n    $decreaseButton.removeClass(disabledButtonClass);\n  }\n\n  if (currentValue >= max) {\n    $increaseButton.addClass(disabledButtonClass);\n  } else {\n    $increaseButton.removeClass(disabledButtonClass);\n  }\n}\n\nvar $allSpinners = $('.spinner');\n\nfunction findSpinnersAndPassData(whereToSearch) {\n  var $spinners = whereToSearch ? $(whereToSearch).find('.spinner__value') : $('.spinner__value');\n  $spinners.spinner({\n    min: $spinners.attr('data-min'),\n    max: $spinners.attr('data-max')\n  });\n  return $spinners;\n}\n\nfunction initSpinner() {\n  var $spinner = $(this);\n  var spinnerValue = $spinner.attr('value');\n  disableButtonsAtExtremum($spinner, spinnerValue);\n\n  function handleOnSpin(event, ui) {\n    disableButtonsAtExtremum($spinner, ui.value);\n  }\n\n  $spinner.on('spin', handleOnSpin);\n}\n\nfunction findAndInitSpinners() {\n  var $spinners = findSpinnersAndPassData(this);\n  $spinners.each(initSpinner);\n}\n\n$allSpinners.each(findAndInitSpinners);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/spinner/spinner.js?");

/***/ }),

/***/ "./src/blocks/spinner/spinner.scss":
/*!*****************************************!*\
  !*** ./src/blocks/spinner/spinner.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/spinner/spinner.scss?");

/***/ }),

/***/ "./src/blocks/two-calendar-range-picker/init.js":
/*!******************************************************!*\
  !*** ./src/blocks/two-calendar-range-picker/init.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _twoCalendarRangePicker = __webpack_require__(/*! ./two-calendar-range-picker */ \"./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js\");\n\n(0, _twoCalendarRangePicker.initTwoCalendarPickers)();\n\n//# sourceURL=webpack:///./src/blocks/two-calendar-range-picker/init.js?");

/***/ }),

/***/ "./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js":
/*!***************************************************************************!*\
  !*** ./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setInitialDates = setInitialDates;\nexports.initTwoCalendarPickers = initTwoCalendarPickers;\n\nvar _datepickerBlock = __webpack_require__(/*! ../datepicker-block/datepicker-block */ \"./src/blocks/datepicker-block/datepicker-block.js\");\n\n/* eslint-disable no-undef */\n// jquery подключена вебпаком\nvar isSecondAssignStarted = false;\n\nfunction handleOnSelect(formattedDate, datepicker, otherDatepicker, input, otherInput, number) {\n  if (isSecondAssignStarted) return;\n  var otherNumber = 1 - number;\n  var newDates = datepicker.selectedDates;\n  var options = {\n    year: 'numeric',\n    month: 'numeric',\n    day: 'numeric'\n  }; // если дат в пикере больше одной, то перезаписываем данные в инпуте,\n  // если одна - оставляем дефолтное поведение\n  // иначе второй пикер будет очищать оба при фокусе на нём\n\n  if (datepicker.selectedDates.length > 1) {\n    $(input).val(newDates[number].toLocaleDateString('ru-RU', options));\n  } else {\n    datepicker.update({\n      dateFormat: ''\n    });\n    otherDatepicker.update({\n      dateFormat: 'ДД.ММ.ГГГГ'\n    });\n  }\n\n  isSecondAssignStarted = true;\n  otherDatepicker.clear();\n  otherDatepicker.selectDate(datepicker.selectedDates);\n  isSecondAssignStarted = false;\n\n  if (datepicker.selectedDates.length > 1) {\n    $(otherInput).val(newDates[otherNumber].toLocaleDateString('ru-RU', options));\n  } // вызов ивента вручную, поскольку автоматически этого не происходит\n  // (отслеживание изменения инпута используется в booking-card)\n\n\n  $(input).change();\n}\n\nfunction datepickerAddOnSelect(datepicker, otherDatepicker, input, otherInput, number) {\n  datepicker.update({\n    onSelect: function onSelect(formattedDate) {\n      handleOnSelect(formattedDate, datepicker, otherDatepicker, input, otherInput, number);\n    }\n  });\n}\n\nfunction getInitDates($rangePicker) {\n  var dates = {};\n\n  if ($rangePicker.attr('data-firstdate')) {\n    dates.firstDate = (0, _datepickerBlock.parseAttrToDate)($rangePicker.attr('data-firstdate'));\n  }\n\n  if ($rangePicker.attr('data-seconddate')) {\n    dates.secondDate = (0, _datepickerBlock.parseAttrToDate)($rangePicker.attr('data-seconddate'));\n  }\n\n  return dates;\n}\n\nfunction setInitialDates($rangePicker, $input) {\n  var initDates = getInitDates($rangePicker);\n  (0, _datepickerBlock.setDates)($input, Object.values(initDates));\n}\n\nfunction safeDatepickerInit($datepicker, $datepickerControl) {\n  if (!$datepickerControl.data('datepicker')) {\n    $datepicker.each(_datepickerBlock.initDatepickerInput);\n    return $datepickerControl.data('datepicker');\n  }\n\n  return $datepickerControl.data('datepicker');\n} // index, поскольку вызов может происходить и через each от jQuery\n\n\nfunction initTwoCalendarPicker(index, element) {\n  var $twoCalendarRange = $(element);\n  var $firstInput = $($twoCalendarRange.find('.two-calendar-range-picker__first-datepicker > .datepicker-block')[0]);\n  var $firstInputControl = $($firstInput.find('.datepicker-block__input-wrap .input__control')[0]);\n  var firstDatepicker = safeDatepickerInit($firstInput, $firstInputControl);\n  var $secondInput = $($twoCalendarRange.find('.two-calendar-range-picker__second-datepicker > .datepicker-block')[0]);\n  var $secondInputControl = $($secondInput.find('.datepicker-block__input-wrap .input__control')[0]);\n  var secondDatepicker = safeDatepickerInit($secondInput, $secondInputControl);\n  if (!(firstDatepicker && secondDatepicker)) return;\n  firstDatepicker.update({\n    position: 'bottom left'\n  });\n  secondDatepicker.update({\n    position: 'bottom right'\n  });\n  datepickerAddOnSelect(firstDatepicker, secondDatepicker, $firstInputControl, $secondInputControl, 0);\n  datepickerAddOnSelect(secondDatepicker, firstDatepicker, $secondInputControl, $firstInputControl, 1);\n  var initDates = getInitDates($twoCalendarRange);\n\n  if (initDates.firstDate) {\n    firstDatepicker.selectDate(initDates.firstDate);\n  }\n\n  if (initDates.secondDate) {\n    secondDatepicker.selectDate(initDates.secondDate);\n  }\n}\n\nfunction initTwoCalendarPickers() {\n  var $twoCalendarPickers = $('.two-calendar-range-picker');\n  $twoCalendarPickers.each(initTwoCalendarPicker);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js?");

/***/ }),

/***/ "./src/blocks/two-calendar-range-picker/two-calendar-range-picker.scss":
/*!*****************************************************************************!*\
  !*** ./src/blocks/two-calendar-range-picker/two-calendar-range-picker.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/two-calendar-range-picker/two-calendar-range-picker.scss?");

/***/ }),

/***/ "./src/cards sync recursive \\.(js|scss)$":
/*!*************************************!*\
  !*** ./src/cards sync \.(js|scss)$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./booking-card/booking-card.js\": \"./src/cards/booking-card/booking-card.js\",\n\t\"./booking-card/booking-card.scss\": \"./src/cards/booking-card/booking-card.scss\",\n\t\"./booking-card/init.js\": \"./src/cards/booking-card/init.js\",\n\t\"./find-room-card/find-room-card.scss\": \"./src/cards/find-room-card/find-room-card.scss\",\n\t\"./login-card/login-card.js\": \"./src/cards/login-card/login-card.js\",\n\t\"./login-card/login-card.scss\": \"./src/cards/login-card/login-card.scss\",\n\t\"./registration-card/registration-card.scss\": \"./src/cards/registration-card/registration-card.scss\",\n\t\"./room-preview-card/room-preview-card.js\": \"./src/cards/room-preview-card/room-preview-card.js\",\n\t\"./room-preview-card/room-preview-card.scss\": \"./src/cards/room-preview-card/room-preview-card.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/cards sync recursive \\\\.(js|scss)$\";\n\n//# sourceURL=webpack:///./src/cards_sync_\\.(js%7Cscss)$?");

/***/ }),

/***/ "./src/cards/booking-card/booking-card.js":
/*!************************************************!*\
  !*** ./src/cards/booking-card/booking-card.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _twoCalendarRangePicker = __webpack_require__(/*! ../../blocks/two-calendar-range-picker/two-calendar-range-picker */ \"./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js\");\n\nvar _functions = __webpack_require__(/*! ../../common/functions */ \"./src/common/functions.js\");\n\n/* eslint-disable no-undef */\n// jquery объявлена вебпаком\nfunction getTotalCost(priceData) {\n  var totalCost = Number.parseFloat(priceData.stayingSum) + Number.parseFloat(priceData.servicesSum) + Number.parseFloat(priceData.addServicesSum);\n  return totalCost > 0 ? totalCost : 0;\n}\n\nfunction writeTotalCost($totalCostSpan, priceData) {\n  var totalBookingCost = getTotalCost(priceData);\n  var formattedTotalBookingCost = (0, _functions.formatNumber)(totalBookingCost, ' ');\n  $totalCostSpan.text(\"\".concat(formattedTotalBookingCost).concat(priceData.currency));\n}\n\nfunction writeFormattedDailyPrice($dailyPriceSpan, priceToShow, currency) {\n  $dailyPriceSpan.text(\"\".concat(priceToShow).concat(currency));\n}\n\nfunction getDaysFromDateRange(dateRange) {\n  if (dateRange[0] && dateRange[1]) {\n    return Math.round((dateRange[1] - dateRange[0]) / (24 * 60 * 60 * 1000));\n  }\n\n  return 0;\n}\n\nfunction writeStayingCostsToSpans($calculatingStayingCostSpan, $stayingSumSpan, priceData, daysCount) {\n  var declinedPeriod = (0, _functions.ruDeclination)(daysCount, 'сут|ки|ок|ок');\n  $calculatingStayingCostSpan.text(\"\".concat(priceData.priceToShow).concat(priceData.currency) + \" \\u0445 \".concat(daysCount, \" \").concat(declinedPeriod));\n  priceData.stayingSum = priceData.price * daysCount;\n  var sumToPrint = (0, _functions.formatNumber)(priceData.stayingSum, ' ');\n  $stayingSumSpan.text(\"\".concat(sumToPrint).concat(priceData.currency));\n}\n\nfunction getOverallServicesData($servicesEnumSpan, $servicesSumSpan, priceData) {\n  var servicesData = $servicesEnumSpan.attr('data-services');\n  var services = JSON.parse(servicesData);\n  var overallServicesCost = 0;\n  var servicesString = 'Сбор за услуги: ';\n  services.forEach(function (service) {\n    overallServicesCost += service.cost;\n    servicesString += \"\".concat(service.name, \" \") + \"\".concat((0, _functions.formatNumber)(Math.abs(service.cost), ' ')) + \"\".concat(priceData.currency, \", \");\n  });\n  servicesString = servicesString.substring(0, servicesString.length - 2);\n  priceData.servicesSum = overallServicesCost;\n  overallServicesCost = overallServicesCost > 0 ? overallServicesCost : 0;\n  return {\n    text: servicesString,\n    sum: overallServicesCost\n  };\n}\n\nfunction writeServicesToSpans($servicesEnumSpan, $servicesSumSpan, currency, servicesData) {\n  $servicesEnumSpan.text(servicesData.text);\n  $servicesSumSpan.text(\"\".concat(servicesData.sum).concat(currency));\n}\n\nfunction addRefreshCheckOnInputChange($firstDatePicker, $secondDatePicker, $stayingCostRow, $totalCostSpan, priceData) {\n  function refreshCheckValuesOnDateChange(event) {\n    var $calculatingStayingCostSpan = $stayingCostRow.children('.booking-card__staying-cost-calculation');\n    var $stayingSumSpan = $stayingCostRow.children('.booking-card__staying-cost-sum');\n    var datePickerData = $(event.target).data('datepicker');\n    var daysCount = getDaysFromDateRange(datePickerData.selectedDates);\n    writeStayingCostsToSpans($calculatingStayingCostSpan, $stayingSumSpan, priceData, daysCount);\n    writeTotalCost($totalCostSpan, priceData);\n  }\n\n  $firstDatePicker.change(refreshCheckValuesOnDateChange);\n  $secondDatePicker.change(refreshCheckValuesOnDateChange);\n}\n\nfunction initBookingCard() {\n  var $bookingCard = $(this);\n  var $dailyPrice = $bookingCard.find('.booking-card__daily-price');\n  var priceAmount = $dailyPrice.attr('data-dailyPrice');\n  var currency = $dailyPrice.attr('data-currency');\n  var priceToShow = (0, _functions.formatNumber)(priceAmount, ' ');\n  writeFormattedDailyPrice($dailyPrice, priceToShow, currency);\n  var $rangePicker = $bookingCard.find('.booking-card__range-picker > .two-calendar-range-picker');\n  var $firstDatepicker = $($rangePicker.find('.two-calendar-range-picker__first-datepicker')[0]);\n  var $firstDatepickerControl = $($firstDatepicker.find('.datepicker-block .input__control')[0]);\n  var $secondDatepicker = $($rangePicker.find('.two-calendar-range-picker__second-datepicker')[0]);\n  var $secondDatepickerControl = $($secondDatepicker.find('.datepicker-block .input__control')[0]);\n  var $stayingCostRow = $bookingCard.find('.booking-card__staying-cost-row');\n  var priceData = {\n    price: priceAmount,\n    currency: currency,\n    priceToShow: priceToShow,\n    servicesData: 0,\n    addServicesSum: 0,\n    stayingSum: 0\n  };\n  var $totalCostSpan = $bookingCard.find('.booking-card__summary-total-cost');\n  addRefreshCheckOnInputChange($firstDatepickerControl, $secondDatepickerControl, $stayingCostRow, $totalCostSpan, priceData);\n  (0, _twoCalendarRangePicker.setInitialDates)($rangePicker, $firstDatepickerControl);\n  var $servicesEnumSpan = $bookingCard.find('.booking-card__services');\n  var $servicesSumSpan = $bookingCard.find('.booking-card__services-sum');\n  var servicesData = getOverallServicesData($servicesEnumSpan, $servicesSumSpan, priceData);\n  var $addServicesSumSpan = $bookingCard.find('.booking-card__additional-services-sum');\n  priceData.addServicesSum = $addServicesSumSpan.attr('data-addServices');\n  writeServicesToSpans($servicesEnumSpan, $servicesSumSpan, currency, servicesData);\n  writeTotalCost($totalCostSpan, priceData);\n}\n\nfunction initBookingCards() {\n  var $bookingCards = $('.booking-card');\n  $bookingCards.each(initBookingCard);\n}\n\nvar _default = initBookingCards;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/cards/booking-card/booking-card.js?");

/***/ }),

/***/ "./src/cards/booking-card/booking-card.scss":
/*!**************************************************!*\
  !*** ./src/cards/booking-card/booking-card.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/cards/booking-card/booking-card.scss?");

/***/ }),

/***/ "./src/cards/booking-card/init.js":
/*!****************************************!*\
  !*** ./src/cards/booking-card/init.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bookingCard = _interopRequireDefault(__webpack_require__(/*! ./booking-card */ \"./src/cards/booking-card/booking-card.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _bookingCard[\"default\"])();\n\n//# sourceURL=webpack:///./src/cards/booking-card/init.js?");

/***/ }),

/***/ "./src/cards/find-room-card/find-room-card.scss":
/*!******************************************************!*\
  !*** ./src/cards/find-room-card/find-room-card.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/cards/find-room-card/find-room-card.scss?");

/***/ }),

/***/ "./src/cards/login-card/login-card.js":
/*!********************************************!*\
  !*** ./src/cards/login-card/login-card.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _checkbox = _interopRequireDefault(__webpack_require__(/*! ../../blocks/checkbox/checkbox */ \"./src/blocks/checkbox/checkbox.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initLoginCards() {\n  _checkbox[\"default\"].initToggle();\n\n  _checkbox[\"default\"].initRadio();\n}\n\nvar _default = initLoginCards;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/cards/login-card/login-card.js?");

/***/ }),

/***/ "./src/cards/login-card/login-card.scss":
/*!**********************************************!*\
  !*** ./src/cards/login-card/login-card.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/cards/login-card/login-card.scss?");

/***/ }),

/***/ "./src/cards/registration-card/registration-card.scss":
/*!************************************************************!*\
  !*** ./src/cards/registration-card/registration-card.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/cards/registration-card/registration-card.scss?");

/***/ }),

/***/ "./src/cards/room-preview-card/room-preview-card.js":
/*!**********************************************************!*\
  !*** ./src/cards/room-preview-card/room-preview-card.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _rateButton = _interopRequireDefault(__webpack_require__(/*! ../../blocks/rate-button/rate-button */ \"./src/blocks/rate-button/rate-button.js\"));\n\nvar _functions = __webpack_require__(/*! ../../common/functions */ \"./src/common/functions.js\");\n\nvar _carousel = _interopRequireDefault(__webpack_require__(/*! ../../blocks/carousel/carousel */ \"./src/blocks/carousel/carousel.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/* eslint-disable no-undef */\n// jquery подключена вебпаком\nfunction initRoomPreviewCard() {\n  var $this = $(this);\n  var $costPerPeriodSpan = $this.find('.room-preview-card__cost-per-period');\n  var $reviewsCountSpan = $this.find('.room-preview-card__reviews-count');\n  var $reviewsTextSpan = $this.find('.room-preview-card__reviews-text');\n  var cardData = {\n    currency: $this.attr('data-currency'),\n    costPerPeriod: $this.attr('data-cost-per-period'),\n    reviewsCount: $this.attr('data-reviews-count')\n  };\n  var formattedCostPerPeriod = (0, _functions.formatNumber)(cardData.costPerPeriod, ' ');\n  $costPerPeriodSpan.text(formattedCostPerPeriod + cardData.currency);\n  var formattedReviewsCount = (0, _functions.formatNumber)(cardData.reviewsCount, ' ');\n  $reviewsCountSpan.text(formattedReviewsCount);\n  var inclinedReviewsText = (0, _functions.ruDeclination)(cardData.reviewsCount, 'Отзыв||а|ов');\n  $reviewsTextSpan.text(inclinedReviewsText);\n}\n\nfunction initRoomPreviewCards() {\n  var $roomPreviewCard = $('.room-preview-card');\n  $roomPreviewCard.each(initRoomPreviewCard);\n  (0, _rateButton[\"default\"])();\n  (0, _carousel[\"default\"])();\n}\n\nvar _default = initRoomPreviewCards;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/cards/room-preview-card/room-preview-card.js?");

/***/ }),

/***/ "./src/cards/room-preview-card/room-preview-card.scss":
/*!************************************************************!*\
  !*** ./src/cards/room-preview-card/room-preview-card.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/cards/room-preview-card/room-preview-card.scss?");

/***/ }),

/***/ "./src/common sync recursive \\.(js|scss)$":
/*!**************************************!*\
  !*** ./src/common sync \.(js|scss)$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./fonts.scss\": \"./src/common/fonts.scss\",\n\t\"./functions.js\": \"./src/common/functions.js\",\n\t\"./mixins.scss\": \"./src/common/mixins.scss\",\n\t\"./variables.scss\": \"./src/common/variables.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/common sync recursive \\\\.(js|scss)$\";\n\n//# sourceURL=webpack:///./src/common_sync_\\.(js%7Cscss)$?");

/***/ }),

/***/ "./src/common/fonts.scss":
/*!*******************************!*\
  !*** ./src/common/fonts.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common/fonts.scss?");

/***/ }),

/***/ "./src/common/functions.js":
/*!*********************************!*\
  !*** ./src/common/functions.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(jQuery) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.formatNumber = formatNumber;\nexports.checkDateArraysEquality = checkDateArraysEquality;\nexports.ruDeclination = ruDeclination;\nexports.copyArrayOfObjects = copyArrayOfObjects;\nexports.clamp = clamp;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable no-undef */\n// jquery объявлена вебпаком\n\n/**\r\n * добавляет пробелы на каждом третьем разряде числа\r\n * @param number форматируемое число\r\n * @param {string} symbol символ для вставки между триадами\r\n * @returns {string} итоговое число в виде строки\r\n */\nfunction formatNumber(number, symbol) {\n  if (Number.isNaN(number * 1)) {\n    return 'not number';\n  }\n\n  var stringNum = number.toString();\n  var formattedNum = [];\n\n  for (var i = stringNum.length - 1; i >= 0; i -= 1) {\n    if ((stringNum.length - i) % 3 === 0 && stringNum.length - i > 0) {\n      formattedNum[i] = \"\".concat(symbol).concat(stringNum[i]);\n    } else {\n      formattedNum[i] = stringNum[i];\n    }\n  }\n\n  return formattedNum.join('');\n}\n\nfunction checkDateArraysEquality(first, second) {\n  if (first.length !== second.length) return false;\n  return !first.some(function (value, index) {\n    var _second$index;\n\n    return value.getTime() !== ((_second$index = second[index]) === null || _second$index === void 0 ? void 0 : _second$index.getTime());\n  });\n}\n/**\r\n * Функция для склонения русских слов\r\n * Пример использования: ruDeclination(5,'комментари|й|я|ев')\r\n *\r\n * @author Павел Белоусов <pafnuty10@gmail.com>\r\n *\r\n * @param      {number}  number  Число, для которого будет расчитано окончание\r\n * @param      {string}  words   Слово и варианты окончаний для 1|2|100\r\n * (1 комментарий, 2 комментария, 100 комментариев)\r\n * @return     {string}  Cлово с правильным окончанием\r\n */\n\n\nfunction ruDeclination(number, words) {\n  var w = words.split('|');\n  var n = Math.abs(number); // abs на случай отрицательного значения\n\n  var firstEndingCondition = n % 10 === 1 && n % 100 !== 11;\n  var secondEndingCondition = n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20);\n\n  if (firstEndingCondition) {\n    return w[0] + w[1];\n  }\n\n  if (secondEndingCondition) {\n    return w[0] + w[2];\n  }\n\n  return w[0] + w[3];\n}\n/**\r\n * Возвращает HTML-код, включая сам объект, а не только его содержимое\r\n * @returns {jQuery}\r\n */\n\n\nfunction outerHTML() {\n  return jQuery('<div />').append(this.eq(0).clone()).html();\n} // eslint-disable-next-line no-undef\n\n\njQuery.fn.outerHTML = outerHTML;\n/**\r\n * Копирует простые объекты (без вложенных ссылочных типов) в новый экземпляр\r\n * @param arrayOfObj [{}, {}...] исходный массив объектов\r\n * @returns {[]} новый массив объектов\r\n */\n\nfunction copyArrayOfObjects(arrayOfObj) {\n  return arrayOfObj.map(function (obj) {\n    return _objectSpread({}, obj);\n  });\n}\n\nfunction clamp(value, min, max) {\n  return Math.min(Math.max(value, min), max);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/common/functions.js?");

/***/ }),

/***/ "./src/common/mixins.scss":
/*!********************************!*\
  !*** ./src/common/mixins.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common/mixins.scss?");

/***/ }),

/***/ "./src/common/variables.scss":
/*!***********************************!*\
  !*** ./src/common/variables.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common/variables.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.importContext = importContext;\nexports.importCommon = importCommon;\n\nfunction importContext(r) {\n  r.keys().forEach(r);\n}\n\nfunction importCommon() {\n  importContext(__webpack_require__(\"./src sync index\\\\.scss$\"));\n  importContext(__webpack_require__(\"./src/blocks sync recursive \\\\.(js|scss)$\"));\n  importContext(__webpack_require__(\"./src/common sync recursive \\\\.(js|scss)$\"));\n  importContext(__webpack_require__(\"./src/cards sync recursive \\\\.(js|scss)$\"));\n  importContext(__webpack_require__(\"./src/page-elements sync recursive \\\\.(js|scss)$\"));\n  importContext(__webpack_require__(\"./src/assets/fonts sync recursive \\\\.(otf|ttf|svg|woff|woff2|eot)$\"));\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ }),

/***/ "./src/page-elements sync recursive \\.(js|scss)$":
/*!*********************************************!*\
  !*** ./src/page-elements sync \.(js|scss)$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./footer/footer.js\": \"./src/page-elements/footer/footer.js\",\n\t\"./footer/footer.scss\": \"./src/page-elements/footer/footer.scss\",\n\t\"./header/header.js\": \"./src/page-elements/header/header.js\",\n\t\"./header/header.scss\": \"./src/page-elements/header/header.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/page-elements sync recursive \\\\.(js|scss)$\";\n\n//# sourceURL=webpack:///./src/page-elements_sync_\\.(js%7Cscss)$?");

/***/ }),

/***/ "./src/page-elements/footer/footer.js":
/*!********************************************!*\
  !*** ./src/page-elements/footer/footer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n\n//# sourceURL=webpack:///./src/page-elements/footer/footer.js?");

/***/ }),

/***/ "./src/page-elements/footer/footer.scss":
/*!**********************************************!*\
  !*** ./src/page-elements/footer/footer.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/footer/footer.scss?");

/***/ }),

/***/ "./src/page-elements/header/header.js":
/*!********************************************!*\
  !*** ./src/page-elements/header/header.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n/* eslint-disable no-undef */\n// jquery подключается вебпаком\nvar indexURL = 'landing-page.html';\nvar $logoLink = $('.header__logo-link');\n$logoLink.attr('href', indexURL);\nvar registrationLoginURL = 'registration-login.html';\nvar loginURL = \"\".concat(registrationLoginURL, \"?login=true\");\nvar registerURL = \"\".concat(registrationLoginURL, \"?login=false\");\nvar $registerButton = $('.header__register-button');\n$registerButton.attr('href', registerURL);\nvar $loginButton = $('.header__login-button');\n$loginButton.attr('href', loginURL);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/page-elements/header/header.js?");

/***/ }),

/***/ "./src/page-elements/header/header.scss":
/*!**********************************************!*\
  !*** ./src/page-elements/header/header.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/header/header.scss?");

/***/ }),

/***/ "./src/site-pages/search-room sync recursive \\.(js|scss)$":
/*!******************************************************!*\
  !*** ./src/site-pages/search-room sync \.(js|scss)$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./search-room.js\": \"./src/site-pages/search-room/search-room.js\",\n\t\"./search-room.scss\": \"./src/site-pages/search-room/search-room.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/site-pages/search-room sync recursive \\\\.(js|scss)$\";\n\n//# sourceURL=webpack:///./src/site-pages/search-room_sync_\\.(js%7Cscss)$?");

/***/ }),

/***/ "./src/site-pages/search-room/search-room.js":
/*!***************************************************!*\
  !*** ./src/site-pages/search-room/search-room.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nvar _index = __webpack_require__(/*! ../../index */ \"./src/index.js\");\n\nvar _roomPreviewCard = _interopRequireDefault(__webpack_require__(/*! ../../cards/room-preview-card/room-preview-card */ \"./src/cards/room-preview-card/room-preview-card.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/* eslint-disable no-undef */\n// jquery импортирована вебпаком\n(0, _index.importCommon)();\n(0, _index.importContext)(__webpack_require__(\"./src/site-pages/search-room sync recursive \\\\.(js|scss)$\"));\n\nfunction initLinksInPagination() {\n  var $pagination = $(this);\n  var $paginationButtons = $pagination.children('.pagination__buttons-container');\n  $paginationButtons.addHook('afterPaging', function () {\n    (0, _roomPreviewCard[\"default\"])();\n    var $roomPreviewCardsTextContent = $('.room-preview-card__text-content');\n    $roomPreviewCardsTextContent.click(function () {\n      window.location.href = 'room-details.html';\n    });\n  });\n}\n\nvar $showSidebarButtons = $('.search-room__show-sidebar-button');\n$showSidebarButtons.each(function (index, element) {\n  var $showSideBarButton = $(element);\n  $showSideBarButton.click(function () {\n    $showSideBarButton.toggleClass('search-room__show-sidebar-button_active');\n  });\n});\nvar $paginations = $('.pagination');\n$paginations.each(initLinksInPagination);\nvar $roomPreviewCardsTextContent = $('.room-preview-card__text-content');\n$roomPreviewCardsTextContent.click(function () {\n  window.location.href = 'room-details.html';\n});\n(0, _roomPreviewCard[\"default\"])();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/site-pages/search-room/search-room.js?");

/***/ }),

/***/ "./src/site-pages/search-room/search-room.scss":
/*!*****************************************************!*\
  !*** ./src/site-pages/search-room/search-room.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/site-pages/search-room/search-room.scss?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });