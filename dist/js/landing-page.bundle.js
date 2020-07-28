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
/******/ 		"landing-page": 0
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
/******/ 	deferredModules.push(["./src/site-pages/landing-page/landing-page.js","vendors"]);
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

/***/ "./src/assets/images/room-big-1.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/room-big-1.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/room-big-1.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/room-big-1.jpg?");

/***/ }),

/***/ "./src/assets/images/room-big-2.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/room-big-2.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/room-big-2.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/room-big-2.jpg?");

/***/ }),

/***/ "./src/assets/images/room-big-3.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/room-big-3.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/room-big-3.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/room-big-3.jpg?");

/***/ }),

/***/ "./src/blocks sync recursive \\.(js|scss)$":
/*!**************************************!*\
  !*** ./src/blocks sync \.(js|scss)$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./arrow/arrow.js\": \"./src/blocks/arrow/arrow.js\",\n\t\"./arrow/arrow.scss\": \"./src/blocks/arrow/arrow.scss\",\n\t\"./arrow/init.js\": \"./src/blocks/arrow/init.js\",\n\t\"./bullet-list/bullet-list.scss\": \"./src/blocks/bullet-list/bullet-list.scss\",\n\t\"./button/button.scss\": \"./src/blocks/button/button.scss\",\n\t\"./carousel/carousel.js\": \"./src/blocks/carousel/carousel.js\",\n\t\"./carousel/carousel.scss\": \"./src/blocks/carousel/carousel.scss\",\n\t\"./carousel/init.js\": \"./src/blocks/carousel/init.js\",\n\t\"./checkbox/checkbox.js\": \"./src/blocks/checkbox/checkbox.js\",\n\t\"./checkbox/checkbox.scss\": \"./src/blocks/checkbox/checkbox.scss\",\n\t\"./checkbox/init.js\": \"./src/blocks/checkbox/init.js\",\n\t\"./comment/comment.js\": \"./src/blocks/comment/comment.js\",\n\t\"./comment/comment.scss\": \"./src/blocks/comment/comment.scss\",\n\t\"./comment/init.js\": \"./src/blocks/comment/init.js\",\n\t\"./datepicker-block/datepicker-block.js\": \"./src/blocks/datepicker-block/datepicker-block.js\",\n\t\"./datepicker-block/datepicker-block.scss\": \"./src/blocks/datepicker-block/datepicker-block.scss\",\n\t\"./datepicker-block/init.js\": \"./src/blocks/datepicker-block/init.js\",\n\t\"./donut-chart/donut-chart.js\": \"./src/blocks/donut-chart/donut-chart.js\",\n\t\"./donut-chart/donut-chart.scss\": \"./src/blocks/donut-chart/donut-chart.scss\",\n\t\"./donut-chart/init.js\": \"./src/blocks/donut-chart/init.js\",\n\t\"./dropdown/dropdown.js\": \"./src/blocks/dropdown/dropdown.js\",\n\t\"./dropdown/dropdown.scss\": \"./src/blocks/dropdown/dropdown.scss\",\n\t\"./dropdown/init.js\": \"./src/blocks/dropdown/init.js\",\n\t\"./features-list/features-list.scss\": \"./src/blocks/features-list/features-list.scss\",\n\t\"./input/init.js\": \"./src/blocks/input/init.js\",\n\t\"./input/input.js\": \"./src/blocks/input/input.js\",\n\t\"./input/input.scss\": \"./src/blocks/input/input.scss\",\n\t\"./like-button/init.js\": \"./src/blocks/like-button/init.js\",\n\t\"./like-button/like-button.js\": \"./src/blocks/like-button/like-button.js\",\n\t\"./like-button/like-button.scss\": \"./src/blocks/like-button/like-button.scss\",\n\t\"./list/init.js\": \"./src/blocks/list/init.js\",\n\t\"./list/list.js\": \"./src/blocks/list/list.js\",\n\t\"./list/list.scss\": \"./src/blocks/list/list.scss\",\n\t\"./pagination/init.js\": \"./src/blocks/pagination/init.js\",\n\t\"./pagination/pagination.js\": \"./src/blocks/pagination/pagination.js\",\n\t\"./pagination/pagination.scss\": \"./src/blocks/pagination/pagination.scss\",\n\t\"./radio-button/init.js\": \"./src/blocks/radio-button/init.js\",\n\t\"./radio-button/radio-button.js\": \"./src/blocks/radio-button/radio-button.js\",\n\t\"./radio-button/radio-button.scss\": \"./src/blocks/radio-button/radio-button.scss\",\n\t\"./rating/init.js\": \"./src/blocks/rating/init.js\",\n\t\"./rating/rating.js\": \"./src/blocks/rating/rating.js\",\n\t\"./rating/rating.scss\": \"./src/blocks/rating/rating.scss\",\n\t\"./slider/init.js\": \"./src/blocks/slider/init.js\",\n\t\"./slider/slider.js\": \"./src/blocks/slider/slider.js\",\n\t\"./slider/slider.scss\": \"./src/blocks/slider/slider.scss\",\n\t\"./spinner/init.js\": \"./src/blocks/spinner/init.js\",\n\t\"./spinner/spinner.js\": \"./src/blocks/spinner/spinner.js\",\n\t\"./spinner/spinner.scss\": \"./src/blocks/spinner/spinner.scss\",\n\t\"./two-calendar-range-picker/init.js\": \"./src/blocks/two-calendar-range-picker/init.js\",\n\t\"./two-calendar-range-picker/two-calendar-range-picker.js\": \"./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js\",\n\t\"./two-calendar-range-picker/two-calendar-range-picker.scss\": \"./src/blocks/two-calendar-range-picker/two-calendar-range-picker.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/blocks sync recursive \\\\.(js|scss)$\";\n\n//# sourceURL=webpack:///./src/blocks_sync_\\.(js%7Cscss)$?");

/***/ }),

/***/ "./src/blocks/arrow/arrow.js":
/*!***********************************!*\
  !*** ./src/blocks/arrow/arrow.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Arrow = /*#__PURE__*/function () {\n  function Arrow(rootElement) {\n    _classCallCheck(this, Arrow);\n\n    _defineProperty(this, \"$element\", void 0);\n\n    this._initElement(rootElement);\n  }\n\n  _createClass(Arrow, [{\n    key: \"handleArrowChangeState\",\n    value: function handleArrowChangeState() {\n      if (this.getExpandState()) this.handleArrowCollapsing();else this.handleArrowExpanding();\n    }\n  }, {\n    key: \"handleArrowCollapsing\",\n    value: function handleArrowCollapsing() {\n      this.$element.text('expand_more');\n      this.$element.removeClass('arrow_expanded');\n    }\n  }, {\n    key: \"handleArrowExpanding\",\n    value: function handleArrowExpanding() {\n      this.$element.text('expand_less');\n      this.$element.addClass('arrow_expanded');\n    }\n  }, {\n    key: \"getExpandState\",\n    value: function getExpandState() {\n      return this.$element.hasClass('arrow_expanded');\n    }\n  }, {\n    key: \"_initElement\",\n    value: function _initElement(rootElement) {\n      this.$element = $(rootElement);\n    }\n  }]);\n\n  return Arrow;\n}();\n\nvar _default = Arrow;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/arrow/arrow.js?");

/***/ }),

/***/ "./src/blocks/arrow/arrow.scss":
/*!*************************************!*\
  !*** ./src/blocks/arrow/arrow.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/arrow/arrow.scss?");

/***/ }),

/***/ "./src/blocks/arrow/init.js":
/*!**********************************!*\
  !*** ./src/blocks/arrow/init.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _arrow = _interopRequireDefault(__webpack_require__(/*! ./arrow */ \"./src/blocks/arrow/arrow.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initArrows(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-arrow', _arrow[\"default\"]);\n}\n\nvar _default = initArrows;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/arrow/init.js?");

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
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! slick-carousel */ \"./node_modules/slick-carousel/slick/slick.js\");\n\n__webpack_require__(/*! ../../../node_modules/slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Carousel = /*#__PURE__*/function () {\n  function Carousel(rootElement) {\n    _classCallCheck(this, Carousel);\n\n    _defineProperty(this, \"$element\", void 0);\n\n    this._initElement(rootElement);\n\n    this._initCarousel();\n  }\n\n  _createClass(Carousel, [{\n    key: \"_initElement\",\n    value: function _initElement(rootElement) {\n      this.$element = $(rootElement);\n    }\n  }, {\n    key: \"_getCarouselParams\",\n    value: function _getCarouselParams() {\n      return {\n        arrows: this.$element.attr('data-arrows').toLowerCase() === 'true',\n        prevArrow: '<label class=\"slick-prev\"><button type=\"button\" >expand_more</button></label>',\n        nextArrow: '<label class=\"slick-next\"><button type=\"button\" >expand_more</button></label>',\n        dots: this.$element.attr('data-dots').toLowerCase() === 'true'\n      };\n    }\n  }, {\n    key: \"_initCarousel\",\n    value: function _initCarousel() {\n      var initAttrName = 'data-initiated';\n      var initAttrValue = 'true';\n\n      if (this.$element.attr(initAttrName) === initAttrValue) {\n        return;\n      }\n\n      var params = this._getCarouselParams();\n\n      this.$element.slick(params);\n      this.$element.attr(initAttrName, initAttrValue);\n    }\n  }]);\n\n  return Carousel;\n}();\n\nvar _default = Carousel;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/carousel/carousel.js?");

/***/ }),

/***/ "./src/blocks/carousel/carousel.scss":
/*!*******************************************!*\
  !*** ./src/blocks/carousel/carousel.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/carousel/carousel.scss?");

/***/ }),

/***/ "./src/blocks/carousel/init.js":
/*!*************************************!*\
  !*** ./src/blocks/carousel/init.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _carousel = _interopRequireDefault(__webpack_require__(/*! ./carousel */ \"./src/blocks/carousel/carousel.js\"));\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initCarousels(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-carousel', _carousel[\"default\"]);\n}\n\nvar _default = initCarousels;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/carousel/init.js?");

/***/ }),

/***/ "./src/blocks/checkbox/checkbox.js":
/*!*****************************************!*\
  !*** ./src/blocks/checkbox/checkbox.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/widgets/checkboxradio */ \"./node_modules/jquery-ui/ui/widgets/checkboxradio.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Checkbox = /*#__PURE__*/function () {\n  function Checkbox(rootElement) {\n    _classCallCheck(this, Checkbox);\n\n    _defineProperty(this, \"$checkbox\", void 0);\n\n    _defineProperty(this, \"$pluginElement\", void 0);\n\n    this._initElements(rootElement);\n\n    this._initCheckbox();\n  }\n\n  _createClass(Checkbox, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$checkbox = $(rootElement);\n      this.$pluginElement = this.$checkbox.find('.js-checkbox__hidden-button');\n    }\n  }, {\n    key: \"_initCheckbox\",\n    value: function _initCheckbox() {\n      if (this.$checkbox.hasClass(Checkbox.defaultClass)) this._initDefault();else if (this.$checkbox.hasClass(Checkbox.toggleClass)) this._initToggle();\n    }\n  }, {\n    key: \"_initDefault\",\n    value: function _initDefault() {\n      this._initPlugin('checkbox__button js-checkbox__button_type_default checkbox__button_type_default', 'checkbox__icon-space checkbox__icon-space_type_default');\n\n      var $defaultCheckboxButtons = this.$checkbox.find('.js-checkbox__button_type_default');\n      $defaultCheckboxButtons.text('check');\n    }\n  }, {\n    key: \"_initToggle\",\n    value: function _initToggle() {\n      this._initPlugin('checkbox__button checkbox__button_type_toggle', 'checkbox__icon-space checkbox__icon-space_type_toggle');\n    }\n  }, {\n    key: \"_initPlugin\",\n    value: function _initPlugin(icon, iconSpace) {\n      var checkbox = this.$pluginElement.checkboxradio({\n        classes: {\n          'ui-checkboxradio-icon': icon,\n          'ui-checkboxradio-icon-space': iconSpace\n        }\n      });\n      var isChecked = this.$pluginElement.attr('data-is-checked') === 'true';\n\n      if (isChecked) {\n        checkbox.attr('checked', 'checked').change();\n      }\n    }\n  }]);\n\n  return Checkbox;\n}();\n\n_defineProperty(Checkbox, \"defaultClass\", 'checkbox_type_default');\n\n_defineProperty(Checkbox, \"toggleClass\", 'checkbox_type_toggle');\n\nvar _default = Checkbox;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/checkbox/checkbox.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _checkbox = _interopRequireDefault(__webpack_require__(/*! ./checkbox */ \"./src/blocks/checkbox/checkbox.js\"));\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initCheckboxes(rootElement) {\n  (0, _dynamicInit[\"default\"])(rootElement, '.js-checkbox', _checkbox[\"default\"]);\n}\n\nvar _default = initCheckboxes;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/checkbox/init.js?");

/***/ }),

/***/ "./src/blocks/comment/comment.js":
/*!***************************************!*\
  !*** ./src/blocks/comment/comment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _init = _interopRequireDefault(__webpack_require__(/*! ../like-button/init */ \"./src/blocks/like-button/init.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Comment = /*#__PURE__*/function () {\n  function Comment(rootElement) {\n    _classCallCheck(this, Comment);\n\n    _defineProperty(this, \"$comment\", void 0);\n\n    this._initElement(rootElement);\n\n    this._initInnerBlocks();\n  }\n\n  _createClass(Comment, [{\n    key: \"_initElement\",\n    value: function _initElement(rootElement) {\n      this.$comment = $(rootElement);\n    }\n  }, {\n    key: \"_initInnerBlocks\",\n    value: function _initInnerBlocks() {\n      (0, _init[\"default\"])(this.$comment);\n    }\n  }]);\n\n  return Comment;\n}();\n\nvar _default = Comment;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/comment/comment.js?");

/***/ }),

/***/ "./src/blocks/comment/comment.scss":
/*!*****************************************!*\
  !*** ./src/blocks/comment/comment.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/comment/comment.scss?");

/***/ }),

/***/ "./src/blocks/comment/init.js":
/*!************************************!*\
  !*** ./src/blocks/comment/init.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _comment = _interopRequireDefault(__webpack_require__(/*! ./comment */ \"./src/blocks/comment/comment.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initComments(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-comment', _comment[\"default\"]);\n}\n\nvar _default = initComments;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/comment/init.js?");

/***/ }),

/***/ "./src/blocks/datepicker-block/datepicker-block.js":
/*!*********************************************************!*\
  !*** ./src/blocks/datepicker-block/datepicker-block.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! air-datepicker */ \"./node_modules/air-datepicker/src/js/air-datepicker.js\");\n\nvar _arrowBack = _interopRequireDefault(__webpack_require__(/*! ../../assets/images/arrow-back.svg */ \"./src/assets/images/arrow-back.svg\"));\n\nvar _init = _interopRequireDefault(__webpack_require__(/*! ../arrow/init */ \"./src/blocks/arrow/init.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar DatepickerBlock = /*#__PURE__*/function () {\n  function DatepickerBlock(element) {\n    _classCallCheck(this, DatepickerBlock);\n\n    _defineProperty(this, \"$confirmButton\", $('<button></button>', {\n      text: 'Применить',\n      'data-action': 'hide',\n      \"class\": 'datepicker-block__confirm-button'\n    }));\n\n    _defineProperty(this, \"$datepicker\", void 0);\n\n    _defineProperty(this, \"$inputWrap\", void 0);\n\n    _defineProperty(this, \"$inputControl\", void 0);\n\n    _defineProperty(this, \"$inputLabel\", void 0);\n\n    _defineProperty(this, \"$buttonsContainer\", void 0);\n\n    _defineProperty(this, \"arrow\", void 0);\n\n    _defineProperty(this, \"datepickerPlugin\", void 0);\n\n    _defineProperty(this, \"isInline\", void 0);\n\n    this._initProperties(element);\n\n    this._initDatepicker();\n\n    if (!this.isInline) this._initExpandableEvents();\n    var initDates = this.getInitDates();\n    this.datepickerPlugin.selectDate(initDates);\n  }\n\n  _createClass(DatepickerBlock, [{\n    key: \"_initProperties\",\n    value: function _initProperties(element) {\n      this.$datepicker = $(element);\n      this.$inputWrap = this.$datepicker.find('.js-datepicker-block__input-wrap');\n      this.$inputControl = this.$inputWrap.find('.js-input__control');\n      this.$inputLabel = this.$inputWrap.find('.js-input__title');\n      this.isInline = this.$inputWrap.hasClass('js-datepicker-block__input-wrap_inline');\n      this.arrow = (0, _init[\"default\"])(this.$datepicker);\n    }\n  }, {\n    key: \"getInitDates\",\n    value: function getInitDates() {\n      var dates = [];\n\n      if (this.$inputWrap.attr('data-first-date')) {\n        dates.push(DatepickerBlock.parseAttrToDate(this.$inputWrap.attr('data-first-date')));\n      }\n\n      if (this.$inputWrap.attr('data-second-date')) {\n        dates.push(DatepickerBlock.parseAttrToDate(this.$inputWrap.attr('data-second-date')));\n      }\n\n      return dates.length === 0 ? undefined : dates;\n    }\n  }, {\n    key: \"_addClickHandler\",\n    value: function _addClickHandler() {\n      var _this = this;\n\n      this.$inputControl.click(function (event) {\n        var $controlWrap = $(event.target).parent();\n\n        if (_this.arrow.getExpandState($controlWrap)) {\n          _this.datepickerPlugin.hide();\n        } else {\n          _this.datepickerPlugin.show();\n        }\n      });\n    }\n  }, {\n    key: \"_setExpandArrowEventHandlers\",\n    value: function _setExpandArrowEventHandlers() {\n      var arrow = this.arrow,\n          $inputLabel = this.$inputLabel;\n      this.datepickerPlugin.update({\n        onHide: function onHide(inst, isAnimationEnded) {\n          var $controlWrap = $(inst.el).parent();\n          if (isAnimationEnded) arrow.handleArrowCollapsing($controlWrap);\n          $inputLabel.unbind('click', DatepickerBlock._disableLabelClicks);\n        },\n        onShow: function onShow(inst) {\n          var $controlWrap = $(inst.el).parent();\n          arrow.handleArrowExpanding($controlWrap);\n          $inputLabel.click(DatepickerBlock._disableLabelClicks);\n        },\n        todayButton: false\n      });\n    }\n  }, {\n    key: \"_initExpandableEvents\",\n    value: function _initExpandableEvents() {\n      this._setExpandArrowEventHandlers();\n\n      if (this.datepickerPlugin) {\n        this._addClickHandler();\n      }\n    }\n  }, {\n    key: \"_initDatepicker\",\n    value: function _initDatepicker() {\n      var _this2 = this;\n\n      if (this.$inputControl.data('datepicker')) return;\n      this.datepickerPlugin = this.$inputControl.datepicker({\n        range: true,\n        inline: this.isInline,\n        clearButton: true,\n        dateFormat: 'd M',\n        multipleDatesSeparator: ' - ',\n        showEvent: '',\n        position: 'bottom center',\n        offset: 5,\n        navTitles: {\n          days: '<span class=\"datepicker-block__title\">MM yyyy</span>',\n          months: '<span class=\"datepicker-block__title\">yyyy</span>',\n          years: '<span class=\"datepicker-block__title\">yyyy1 - yyyy2</span>'\n        },\n        prevHtml: \"<img src=\\\"\".concat(_arrowBack[\"default\"], \"\\\" alt=\\\"\\u043D\\u0430\\u0437\\u0430\\u0434\\\"\\\">\"),\n        nextHtml: \"<img src=\\\"\".concat(_arrowBack[\"default\"], \"\\\" alt=\\\"\\u043D\\u0430\\u0437\\u0430\\u0434\\\" style=\\\"transform: scale(-1, 1)\\\">\"),\n        onSelect: function onSelect(formattedDate) {\n          _this2.$inputControl.val(formattedDate.toLowerCase());\n        }\n      }).data('datepicker');\n      this.$buttonsContainer = this.datepickerPlugin.$datepicker.find('.datepicker--buttons');\n\n      this._createConfirmButton();\n    }\n  }, {\n    key: \"_createConfirmButton\",\n    value: function _createConfirmButton() {\n      var $airDatepickerButtonWrap = $('<span></span>', {\n        \"class\": 'datepicker--button'\n      });\n      this.$buttonsContainer.append($airDatepickerButtonWrap);\n      $airDatepickerButtonWrap.append(this.$confirmButton);\n    }\n  }], [{\n    key: \"parseAttrToDate\",\n    value: function parseAttrToDate(attrDate) {\n      var dateParts = attrDate.split('.');\n      var day = dateParts[0];\n      var month = dateParts[1];\n      var year = dateParts[2];\n      var dateString = \"\".concat(year, \"-\").concat(month, \"-\").concat(day);\n      return new Date(dateString);\n    }\n  }, {\n    key: \"_disableLabelClicks\",\n    value: function _disableLabelClicks(event) {\n      event.preventDefault();\n    }\n  }]);\n\n  return DatepickerBlock;\n}();\n\nvar _default = DatepickerBlock;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/datepicker-block/datepicker-block.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _datepickerBlock = _interopRequireDefault(__webpack_require__(/*! ./datepicker-block */ \"./src/blocks/datepicker-block/datepicker-block.js\"));\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/* eslint-disable no-undef */\nfunction initDatepickers(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-datepicker-block', _datepickerBlock[\"default\"]);\n}\n\nvar _default = initDatepickers;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/datepicker-block/init.js?");

/***/ }),

/***/ "./src/blocks/donut-chart/donut-chart.js":
/*!***********************************************!*\
  !*** ./src/blocks/donut-chart/donut-chart.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _functions = __webpack_require__(/*! ../../common/functions */ \"./src/common/functions.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar DonutChart = /*#__PURE__*/function () {\n  function DonutChart(rootElement) {\n    _classCallCheck(this, DonutChart);\n\n    _defineProperty(this, \"$donutContainer\", void 0);\n\n    _defineProperty(this, \"$dataTextContainer\", void 0);\n\n    _defineProperty(this, \"$donutCanvas\", void 0);\n\n    _defineProperty(this, \"$donutArcs\", void 0);\n\n    _defineProperty(this, \"$donutLegend\", void 0);\n\n    _defineProperty(this, \"$legendItems\", void 0);\n\n    _defineProperty(this, \"$activeValue\", void 0);\n\n    _defineProperty(this, \"$activeValueText\", void 0);\n\n    _defineProperty(this, \"donutParams\", {});\n\n    _defineProperty(this, \"arcs\", []);\n\n    _defineProperty(this, \"activeArc\", void 0);\n\n    this._initElements(rootElement);\n\n    this._readParamsFromElements();\n\n    this._calculateAdditionalParams();\n\n    this._createDonut();\n\n    this._initEvents();\n  }\n\n  _createClass(DonutChart, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$donutContainer = $(rootElement);\n      this.$dataTextContainer = this.$donutContainer.find('.js-donut-chart__active-data');\n      this.$donutCanvas = this.$donutContainer.find('.js-donut-chart__svg');\n      this.$donutArcs = this.$donutCanvas.find('.js-donut-chart__svg-arc');\n      this.$donutLegend = this.$donutContainer.find('.js-donut-chart__legend');\n      this.$legendItems = this.$donutLegend.find('.js-donut-chart__legend-item');\n      this.$activeValue = this.$dataTextContainer.find('.js-donut-chart__active-value');\n      this.$activeValueText = this.$dataTextContainer.find('.js-donut-chart__value-text');\n    }\n  }, {\n    key: \"_readParamsFromElements\",\n    value: function _readParamsFromElements() {\n      var _this = this;\n\n      this.donutParams.arcsGap = this.$donutCanvas.attr('data-arcs-gap');\n      this.donutParams.defaultStyle = {\n        outerRadius: this.$donutCanvas.attr('data-default-outer-radius'),\n        innerRadius: this.$donutCanvas.attr('data-default-inner-radius')\n      };\n      this.donutParams.activeStyle = {\n        outerRadius: this.$donutCanvas.attr('data-active-outer-radius'),\n        innerRadius: this.$donutCanvas.attr('data-active-inner-radius')\n      };\n      this.$donutArcs.each(function (index, arc) {\n        _this._readArcParams($(arc));\n      });\n    }\n  }, {\n    key: \"_readArcParams\",\n    value: function _readArcParams($arc) {\n      var value = Number.parseFloat($arc.attr('data-value'));\n      var color = $arc.attr('data-color');\n      var isActive = $arc.attr('data-is-active') === 'true';\n      this.arcs.push({\n        value: value,\n        $arc: $arc,\n        isActive: isActive,\n        color: color\n      });\n    }\n  }, {\n    key: \"_calculateAdditionalParams\",\n    value: function _calculateAdditionalParams() {\n      var arcDefaultRadius = (0, _functions.getAverageNum)(this.donutParams.defaultStyle.outerRadius, this.donutParams.defaultStyle.innerRadius);\n\n      var arcsAndRatesAmounts = this._getArcsAndRatesAmounts();\n\n      this.donutParams.canvasWidth = this.donutParams.activeStyle.outerRadius;\n      this.donutParams.canvasHeight = this.donutParams.activeStyle.outerRadius;\n      this.donutParams.gapsAngle = DonutChart._getAngleFromArcLength(this.donutParams.arcsGap, arcDefaultRadius);\n      this.donutParams.startingAngle = 90 + this.donutParams.gapsAngle / 2;\n      this.donutParams.notZeroArcs = arcsAndRatesAmounts.arcs;\n      this.donutParams.allRatesAmount = arcsAndRatesAmounts.rates;\n      this.donutParams.ratesAmountWithGaps = DonutChart._getRatesWithGaps(arcsAndRatesAmounts.rates, this.donutParams.gapsAngle, arcsAndRatesAmounts.arcs);\n    }\n  }, {\n    key: \"_createDonut\",\n    value: function _createDonut() {\n      this._drawDonutOnCanvas();\n\n      this.$donutCanvas.attr('viewBox', \"0 0 \".concat(this.donutParams.canvasWidth, \" \").concat(this.donutParams.canvasHeight));\n    }\n  }, {\n    key: \"_initEvents\",\n    value: function _initEvents() {\n      this._addHandlerToArcs('click', this._handleArcClick);\n\n      this._addHandlerToArcs('mouseenter', this._handleArcMouseEnter);\n\n      this._addHandlerToArcs('mouseleave', this._handleArcMouseLeave);\n    }\n  }, {\n    key: \"_getArcStyle\",\n    value: function _getArcStyle(arc) {\n      if (arc.$arc.hasClass(DonutChart.donutArcActiveClass)) return this.donutParams.activeStyle;\n      return this.donutParams.defaultStyle;\n    }\n  }, {\n    key: \"_changeActiveArc\",\n    value: function _changeActiveArc(arc) {\n      var oldActiveArc = this.activeArc;\n\n      if (arc === this.activeArc) {\n        this.activeArc = undefined;\n      } else {\n        this.activeArc = arc;\n        if (arc) arc.$arc.addClass(DonutChart.donutArcActiveClass);\n      }\n\n      if (oldActiveArc) {\n        oldActiveArc.$arc.removeClass(DonutChart.donutArcActiveClass);\n\n        this._redrawArc(oldActiveArc);\n      }\n    }\n  }, {\n    key: \"_redrawArc\",\n    value: function _redrawArc(arc) {\n      var arcDrawData = this._getArcDrawData(arc);\n\n      DonutChart._drawArc(arc, arcDrawData);\n    }\n  }, {\n    key: \"_getArcDrawData\",\n    value: function _getArcDrawData(arc) {\n      var currentStyle = this._getArcStyle(arc);\n\n      return DonutChart._calculateArcDrawData(arc, currentStyle, this.donutParams.ratesAmountWithGaps, {\n        width: this.donutParams.canvasWidth,\n        height: this.donutParams.canvasHeight\n      });\n    }\n  }, {\n    key: \"_updateActiveCaption\",\n    value: function _updateActiveCaption() {\n      var _this$activeArc;\n\n      if (!((_this$activeArc = this.activeArc) === null || _this$activeArc === void 0 ? void 0 : _this$activeArc.value)) {\n        this.$activeValue.text(this.donutParams.allRatesAmount);\n        this.$activeValue.css('color', 'grey');\n        this.$activeValueText.text((0, _functions.ruDeclination)(this.donutParams.allRatesAmount, 'голос||а|ов'));\n        this.$activeValueText.css('color', 'grey');\n      } else {\n        this.$activeValue.text(this.activeArc.value);\n        this.$activeValue.css('color', this.activeArc.color);\n        this.$activeValueText.text((0, _functions.ruDeclination)(this.activeArc.value, 'голос||а|ов'));\n        this.$activeValueText.css('color', this.activeArc.color);\n      }\n    }\n  }, {\n    key: \"_handleArcClick\",\n    value: function _handleArcClick(arc) {\n      var _this$activeArc2, _this$activeArc3;\n\n      this._changeActiveArc(arc);\n\n      this._redrawArc(arc);\n\n      this._updateActiveCaption((_this$activeArc2 = this.activeArc) === null || _this$activeArc2 === void 0 ? void 0 : _this$activeArc2.value, (_this$activeArc3 = this.activeArc) === null || _this$activeArc3 === void 0 ? void 0 : _this$activeArc3.color);\n    }\n  }, {\n    key: \"_handleArcMouseEnter\",\n    value: function _handleArcMouseEnter(arc, mouseEvent) {\n      $(mouseEvent.target).addClass(DonutChart.donutArcActiveClass);\n\n      this._redrawArc(arc);\n    }\n  }, {\n    key: \"_handleArcMouseLeave\",\n    value: function _handleArcMouseLeave(arc, mouseEvent) {\n      if (arc !== this.activeArc) $(mouseEvent.target).removeClass(DonutChart.donutArcActiveClass);\n\n      this._redrawArc(arc);\n    }\n  }, {\n    key: \"_addHandlerToArcs\",\n    value: function _addHandlerToArcs(eventName, handler) {\n      var _this2 = this;\n\n      this.arcs.forEach(function (arc) {\n        var handleExactArcEvent = function handleExactArcEvent(event) {\n          handler.apply(_this2, [arc, event]);\n        };\n\n        arc.$arc.on(\"\".concat(eventName, \".donut-chart\"), handleExactArcEvent);\n      });\n    }\n  }, {\n    key: \"_getArcsAndRatesAmounts\",\n    value: function _getArcsAndRatesAmounts() {\n      var result = {\n        arcs: 0,\n        rates: 0\n      };\n      this.arcs.forEach(function (arc) {\n        if (arc.value === 0) {\n          return;\n        }\n\n        result.rates += arc.value;\n        result.arcs += 1;\n      });\n      return result;\n    }\n  }, {\n    key: \"_drawDonutOnCanvas\",\n    value: function _drawDonutOnCanvas() {\n      var _this3 = this;\n\n      this.arcs[0].startingAngle = this.donutParams.startingAngle;\n      this.arcs.forEach(function (arc, i) {\n        if (arc.isActive) _this3._changeActiveArc(arc);\n\n        _this3._redrawArc(arc);\n\n        if (i + 1 < _this3.arcs.length) {\n          _this3.arcs[i + 1].startingAngle = arc.endingAngle + _this3.donutParams.gapsAngle;\n        }\n      });\n\n      this._updateActiveCaption();\n    }\n  }], [{\n    key: \"_getSecondAngle\",\n    value: function _getSecondAngle(firstAngle, arcValue, allRatesAmount) {\n      var arcValueProportion = arcValue / allRatesAmount;\n      var arcAngle = 360 * arcValueProportion;\n      return firstAngle + arcAngle;\n    }\n  }, {\n    key: \"_degreesToRads\",\n    value: function _degreesToRads(degreeAngleValue) {\n      return degreeAngleValue / 180 * Math.PI;\n    }\n  }, {\n    key: \"_toCartesian\",\n    value: function _toCartesian(length, angle) {\n      var x0 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n      var y0 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n      var result = {\n        x: 0,\n        y: 0\n      };\n\n      var angleRads = DonutChart._degreesToRads(angle);\n\n      result.x = x0 + length * Math.cos(angleRads);\n      result.y = y0 - length * Math.sin(angleRads);\n      return result;\n    }\n  }, {\n    key: \"_calculateArcDrawData\",\n    value: function _calculateArcDrawData(arc, style, allRatesAmount, canvasSize) {\n      var startingAngle = arc.startingAngle;\n\n      var endingAngle = DonutChart._getSecondAngle(startingAngle, arc.value, allRatesAmount);\n\n      arc.endingAngle = endingAngle;\n      var startX = canvasSize.width / 2;\n      var startY = canvasSize.height / 2;\n      var strokeWidth = style.outerRadius - style.innerRadius;\n      var arcRadius = style.outerRadius / 2 - strokeWidth / 2;\n      var arcAngle = endingAngle - startingAngle;\n\n      var firstPoint = DonutChart._toCartesian(arcRadius, startingAngle, startX, startY);\n\n      var secondPoint = DonutChart._toCartesian(arcRadius, endingAngle, startX, startY);\n\n      return {\n        firstPoint: firstPoint,\n        secondPoint: secondPoint,\n        arcRadius: arcRadius,\n        strokeWidth: strokeWidth,\n        startX: startX,\n        startY: startY,\n        arcAngle: arcAngle\n      };\n    }\n  }, {\n    key: \"_drawArc\",\n    value: function _drawArc(arc, arcDrawData) {\n      var isLargeArc = 0;\n\n      if (arcDrawData.arcAngle > 180) {\n        isLargeArc = 1;\n      }\n\n      arc.$arc.attr('stroke-width', arcDrawData.strokeWidth);\n      arc.$arc.attr('d', \"M \".concat(arcDrawData.firstPoint.x, \",\").concat(arcDrawData.firstPoint.y, \" \") + \"A \".concat(arcDrawData.arcRadius, \" \").concat(arcDrawData.arcRadius, \" \") + \"0 \".concat(isLargeArc, \" \") + \"0 \".concat(arcDrawData.secondPoint.x, \",\").concat(arcDrawData.secondPoint.y));\n    }\n  }, {\n    key: \"_getRatesWithGaps\",\n    value: function _getRatesWithGaps(rates, gapAngle, arcsCount) {\n      return rates / (1 - gapAngle * arcsCount / 360);\n    }\n  }, {\n    key: \"_getAngleFromArcLength\",\n    value: function _getAngleFromArcLength(arcLength, radius) {\n      return 180 * arcLength / (Math.PI * radius);\n    }\n  }]);\n\n  return DonutChart;\n}();\n\n_defineProperty(DonutChart, \"donutArcActiveClass\", 'donut-chart__svg-arc_active');\n\nvar _default = DonutChart;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/donut-chart/donut-chart.js?");

/***/ }),

/***/ "./src/blocks/donut-chart/donut-chart.scss":
/*!*************************************************!*\
  !*** ./src/blocks/donut-chart/donut-chart.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/donut-chart/donut-chart.scss?");

/***/ }),

/***/ "./src/blocks/donut-chart/init.js":
/*!****************************************!*\
  !*** ./src/blocks/donut-chart/init.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _donutChart = _interopRequireDefault(__webpack_require__(/*! ./donut-chart */ \"./src/blocks/donut-chart/donut-chart.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initDonutCharts(rootElement) {\n  for (var _len = arguments.length, classInitParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    classInitParams[_key - 1] = arguments[_key];\n  }\n\n  return _dynamicInit[\"default\"].apply(void 0, [rootElement, '.js-donut-chart', _donutChart[\"default\"]].concat(classInitParams));\n}\n\nvar _default = initDonutCharts;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/donut-chart/init.js?");

/***/ }),

/***/ "./src/blocks/dropdown/dropdown.js":
/*!*****************************************!*\
  !*** ./src/blocks/dropdown/dropdown.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/effects/effect-fade */ \"./node_modules/jquery-ui/ui/effects/effect-fade.js\");\n\nvar _functions = __webpack_require__(/*! ../../common/functions */ \"./src/common/functions.js\");\n\nvar _init = _interopRequireDefault(__webpack_require__(/*! ../spinner/init */ \"./src/blocks/spinner/init.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Dropdown = /*#__PURE__*/function () {\n  _createClass(Dropdown, [{\n    key: \"namesValues\",\n    get: function get() {\n      var namesValues = [];\n      this.$spinnerValues.each(function (index, element) {\n        namesValues.push(Dropdown._getNameValueFromSpinner(element));\n      });\n      return namesValues;\n    }\n  }, {\n    key: \"isOpened\",\n    get: function get() {\n      return this.$listWrapper.hasClass(Dropdown.dropdownVisibleClass);\n    }\n  }]);\n\n  function Dropdown(rootElement) {\n    var _this = this;\n\n    _classCallCheck(this, Dropdown);\n\n    _defineProperty(this, \"$dropdown\", void 0);\n\n    _defineProperty(this, \"$listWrapper\", void 0);\n\n    _defineProperty(this, \"$inputControl\", void 0);\n\n    _defineProperty(this, \"$spinners\", void 0);\n\n    _defineProperty(this, \"$spinnerValues\", void 0);\n\n    _defineProperty(this, \"$buttonsContainer\", void 0);\n\n    _defineProperty(this, \"$clearButton\", void 0);\n\n    _defineProperty(this, \"$confirmButton\", void 0);\n\n    _defineProperty(this, \"$list\", void 0);\n\n    _defineProperty(this, \"isAlwaysOpened\", false);\n\n    _defineProperty(this, \"isPure\", false);\n\n    _defineProperty(this, \"areValuesAccepted\", true);\n\n    _defineProperty(this, \"oldNamesValues\", []);\n\n    _defineProperty(this, \"spinners\", []);\n\n    _defineProperty(this, \"_handleClearButtonClick\", function () {\n      _this._clearSpinnersValues();\n\n      _this._updateVisuals();\n    });\n\n    _defineProperty(this, \"_handleConfirmButtonClick\", function () {\n      if (!_this.isAlwaysOpened) {\n        _this._toggle();\n      }\n\n      _this.areValuesAccepted = true;\n      _this.oldNamesValues = _this.namesValues;\n\n      _this._updateControlsVisibility();\n    });\n\n    _defineProperty(this, \"_handleSpin\", function (event, ui) {\n      $(event.currentTarget).spinner('value', (ui === null || ui === void 0 ? void 0 : ui.value) ? ui === null || ui === void 0 ? void 0 : ui.value : 0);\n\n      _this._updateVisuals();\n    });\n\n    _defineProperty(this, \"_handleDocumentClick\", function (event) {\n      var clickedElement = $(event.target);\n      if ($.contains(_this.$dropdown.get(0), clickedElement.get(0))) return;\n\n      if (_this.isOpened) {\n        if (!_this.isAlwaysOpened) {\n          _this._toggle();\n        }\n\n        _this._setSpinnerValues(_this.oldNamesValues);\n\n        _this._updateVisuals();\n      }\n    });\n\n    _defineProperty(this, \"_handleInputClick\", function () {\n      if (!_this.isAlwaysOpened) {\n        _this._toggle();\n      }\n\n      if (!_this.isOpened) {\n        _this._setSpinnerValues(_this.oldNamesValues);\n\n        _this._updateVisuals();\n      }\n    });\n\n    this._initElements(rootElement);\n\n    this._initSpinners();\n\n    this._initParams();\n\n    this._initEvents();\n  }\n\n  _createClass(Dropdown, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$dropdown = $(rootElement);\n      this.$listWrapper = this.$dropdown.find('.js-dropdown__list-wrapper');\n      this.$inputControl = this.$dropdown.find('.js-dropdown__input .js-input__control');\n      this.$spinners = this.$dropdown.find('.js-spinner');\n      this.$spinnerValues = this.$dropdown.find('.js-spinner__value');\n      this.$buttonsContainer = this.$dropdown.find('.js-dropdown__buttons-container');\n      this.$clearButton = this.$dropdown.find('.js-dropdown__clear-button');\n      this.$confirmButton = this.$dropdown.find('.js-dropdown__confirm-button');\n      this.$list = this.$listWrapper.find('.js-dropdown__list');\n    }\n  }, {\n    key: \"_initSpinners\",\n    value: function _initSpinners() {\n      var _this2 = this;\n\n      this.$spinners.each(function (index, element) {\n        _this2.spinners.push((0, _init[\"default\"])(element));\n      });\n    }\n  }, {\n    key: \"_initEvents\",\n    value: function _initEvents() {\n      this._addClearButtonEvents();\n\n      this._addConfirmButtonEvents();\n\n      this._addSpinnersEvents();\n\n      this._addDocumentEvents();\n\n      this._addInputEvents();\n    }\n  }, {\n    key: \"_addClearButtonEvents\",\n    value: function _addClearButtonEvents() {\n      this.$clearButton.on('click.dropdown', this._handleClearButtonClick);\n    }\n  }, {\n    key: \"_addConfirmButtonEvents\",\n    value: function _addConfirmButtonEvents() {\n      this.$confirmButton.on('click.dropdown', this._handleConfirmButtonClick);\n    }\n  }, {\n    key: \"_addSpinnersEvents\",\n    value: function _addSpinnersEvents() {\n      var _this3 = this;\n\n      this.$spinnerValues.each(function (index, element) {\n        $(element).on('spin.datepicker', _this3._handleSpin);\n      });\n    }\n  }, {\n    key: \"_addDocumentEvents\",\n    value: function _addDocumentEvents() {\n      $(document).on('click.dropdown', this._handleDocumentClick);\n    }\n  }, {\n    key: \"_addInputEvents\",\n    value: function _addInputEvents() {\n      this.$inputControl.on('click.dropdown', this._handleInputClick);\n    }\n  }, {\n    key: \"_initParams\",\n    value: function _initParams() {\n      this.areValuesAccepted = !this.$dropdown.hasClass('dropdown_unaccepted');\n      this.isAlwaysOpened = this.$dropdown.hasClass('dropdown_opened');\n\n      if (this.isAlwaysOpened) {\n        this.$listWrapper.toggle('fade');\n        this.$listWrapper.toggleClass(Dropdown.dropdownVisibleClass);\n      }\n\n      this.isPure = !this.$dropdown.hasClass('dropdown_pure');\n      this.oldNamesValues = this.namesValues;\n\n      this._updateVisuals();\n\n      this.$listWrapper.position({\n        my: 'center',\n        at: 'center',\n        of: this.$inputControl\n      });\n    }\n  }, {\n    key: \"_toggle\",\n    value: function _toggle() {\n      this.$listWrapper.toggle('fade');\n      this.$listWrapper.toggleClass(Dropdown.dropdownVisibleClass);\n      this.$inputControl.toggleClass('input__control_focused');\n    }\n  }, {\n    key: \"_getDropdownType\",\n    value: function _getDropdownType() {\n      var dropdownParams = {};\n      var listClassPrefix = 'dropdown__list_';\n\n      if (this.$list.hasClass(\"\".concat(listClassPrefix, \"unified\"))) {\n        dropdownParams.isUnified = true;\n      }\n\n      if (this.$list.hasClass(\"\".concat(listClassPrefix, \"type_rooms\"))) {\n        dropdownParams.name = Dropdown.types.rooms;\n      } else if (this.$list.hasClass(\"\".concat(listClassPrefix, \"type_customers\"))) {\n        dropdownParams.name = Dropdown.types.customers;\n      } else return false;\n\n      return dropdownParams;\n    }\n  }, {\n    key: \"_areAllValuesZero\",\n    value: function _areAllValuesZero() {\n      var _this$namesValues;\n\n      return !((_this$namesValues = this.namesValues) === null || _this$namesValues === void 0 ? void 0 : _this$namesValues.some(function (nameValue) {\n        return parseInt(nameValue.value, 10) !== 0;\n      }));\n    }\n  }, {\n    key: \"_createUnifiedString\",\n    value: function _createUnifiedString(declinations) {\n      var sum = this.namesValues.reduce(function (accumulator, currentValue) {\n        return accumulator + parseInt(currentValue.value, 10);\n      }, 0);\n      return \"\".concat(sum, \" \").concat((0, _functions.ruDeclination)(sum, declinations));\n    }\n  }, {\n    key: \"_createSeparateRoomsString\",\n    value: function _createSeparateRoomsString() {\n      var result = this.namesValues.reduce(function (accumulator, currentNameValue) {\n        return \"\".concat(accumulator, \" \") + \"\".concat(currentNameValue.value, \" \") + \"\".concat(Dropdown._selectProperWord(currentNameValue.value, currentNameValue.name), \", \");\n      }, '');\n      result = result.substring(0, result.length - 2).trim();\n      return result;\n    }\n  }, {\n    key: \"_createRoomsString\",\n    value: function _createRoomsString(namesValues, isUnified) {\n      var result;\n\n      if (isUnified) {\n        result = this._createUnifiedString('комнаты');\n      } else {\n        result = this._createSeparateRoomsString(namesValues);\n      }\n\n      return result;\n    }\n  }, {\n    key: \"_createCustomersWithInfantsString\",\n    value: function _createCustomersWithInfantsString() {\n      var infants = 0;\n      var sum = 0;\n      this.namesValues.forEach(function (nameValue) {\n        if (nameValue.name.toLowerCase() === 'младенцы') {\n          infants = nameValue.value;\n          return;\n        }\n\n        sum += parseInt(nameValue.value, 10);\n      });\n      return \"\".concat(sum, \" \").concat(Dropdown._selectProperWord(sum, 'гости'), \", \") + \"\".concat(infants, \" \").concat(Dropdown._selectProperWord(infants, 'младенцы'));\n    }\n  }, {\n    key: \"_createCustomersString\",\n    value: function _createCustomersString(namesValues, isUnified) {\n      var resultString;\n\n      if (isUnified) {\n        resultString = this._createUnifiedString('гост|ь|я|ей');\n      } else {\n        resultString = this._createCustomersWithInfantsString();\n      }\n\n      return resultString;\n    }\n  }, {\n    key: \"_createInputText\",\n    value: function _createInputText(namesValues, dropdownType) {\n      var result = '';\n      if (this._areAllValuesZero(namesValues)) return result;\n\n      switch (dropdownType.name) {\n        case Dropdown.types.rooms:\n          {\n            result = this._createRoomsString(namesValues, dropdownType.isUnified);\n            break;\n          }\n\n        case Dropdown.types.customers:\n          {\n            result = this._createCustomersString(namesValues, dropdownType.isUnified);\n            break;\n          }\n\n        default:\n          {\n            var sum = namesValues.reduce(function (accumulator, nameValue) {\n              return accumulator + parseInt(nameValue.value, 10);\n            }, 0);\n            result += \"\".concat(sum, \" \\u0447\\u0435\\u0433\\u043E-\\u0442\\u043E\");\n            break;\n          }\n      }\n\n      return result;\n    }\n  }, {\n    key: \"_updateInputText\",\n    value: function _updateInputText() {\n      var dropdownType = this._getDropdownType(this.$list);\n\n      var newInputText = this._createInputText(this.namesValues, dropdownType);\n\n      this.$inputControl.val(newInputText);\n    }\n  }, {\n    key: \"_updateControlsVisibility\",\n    value: function _updateControlsVisibility() {\n      var clearVisibleClass = 'dropdown__clear-button_visible';\n      var confirmVisibleClass = 'dropdown__confirm-button_visible';\n      var containerVisibleClass = 'dropdown__buttons-container_visible';\n\n      var areEmpty = this._areAllValuesZero();\n\n      if (areEmpty) {\n        this.$clearButton.removeClass(clearVisibleClass);\n      } else {\n        this.$clearButton.addClass(clearVisibleClass);\n      }\n\n      var areEqual = Dropdown._areValuesEqual(this.namesValues, this.oldNamesValues);\n\n      if (areEqual && this.areValuesAccepted) {\n        this.$confirmButton.removeClass(confirmVisibleClass);\n      } else {\n        this.$confirmButton.addClass(confirmVisibleClass);\n      }\n\n      var hasClearVisibleClass = this.$clearButton.hasClass(clearVisibleClass);\n      var hasConfirmVisibleClass = this.$confirmButton.hasClass(confirmVisibleClass);\n      var areSomeControlsVisible = hasClearVisibleClass || hasConfirmVisibleClass;\n\n      if (areSomeControlsVisible && this.isPure) {\n        this.$buttonsContainer.addClass(containerVisibleClass);\n      } else {\n        this.$buttonsContainer.removeClass(containerVisibleClass);\n      }\n    }\n  }, {\n    key: \"_setSpinnerValues\",\n    value: function _setSpinnerValues(namesValuesToSet) {\n      this.spinners.forEach(function (spinner, i) {\n        var valuesIsArray = Array.isArray(namesValuesToSet);\n        spinner.value = valuesIsArray ? namesValuesToSet[i].value : namesValuesToSet;\n        spinner.triggerSpin();\n      });\n    }\n  }, {\n    key: \"_clearSpinnersValues\",\n    value: function _clearSpinnersValues() {\n      this._setSpinnerValues(0);\n    }\n  }, {\n    key: \"_updateVisuals\",\n    value: function _updateVisuals() {\n      this._updateControlsVisibility();\n\n      this._updateInputText();\n    }\n  }], [{\n    key: \"_selectProperWord\",\n    value: function _selectProperWord(itemsCount, itemName) {\n      var result = '';\n\n      switch (itemName.toLowerCase()) {\n        case 'спальни':\n          result = (0, _functions.ruDeclination)(itemsCount, 'спал|ьня|ьни|ен');\n          break;\n\n        case 'кровати':\n          result = (0, _functions.ruDeclination)(itemsCount, 'кроват|ь|и|ей');\n          break;\n\n        case 'ванные комнаты':\n          result = \"\".concat((0, _functions.ruDeclination)(itemsCount, 'ванн|ая|ых|ых'), \" \").concat((0, _functions.ruDeclination)(itemsCount, 'комнат|а|ы|'));\n          break;\n\n        case 'гости':\n          result = (0, _functions.ruDeclination)(itemsCount, 'гост|ь|я|ей');\n          break;\n\n        case 'младенцы':\n          result = (0, _functions.ruDeclination)(itemsCount, 'младен|ец|ца|цев');\n          break;\n\n        default:\n      }\n\n      return result;\n    }\n  }, {\n    key: \"_areValuesEqual\",\n    value: function _areValuesEqual(namesValues1, namesValues2) {\n      return !(namesValues2 === null || namesValues2 === void 0 ? void 0 : namesValues2.some(function (nameValue, index) {\n        return (namesValues1 === null || namesValues1 === void 0 ? void 0 : namesValues1[index].value) !== nameValue.value;\n      }));\n    }\n  }, {\n    key: \"_getNameValueFromSpinner\",\n    value: function _getNameValueFromSpinner(element) {\n      var $spinnerElement = $(element);\n      return {\n        name: $spinnerElement.attr('data-name'),\n        value: $spinnerElement.spinner('value')\n      };\n    }\n  }]);\n\n  return Dropdown;\n}();\n\n_defineProperty(Dropdown, \"types\", {\n  rooms: 'rooms',\n  customers: 'customers'\n});\n\n_defineProperty(Dropdown, \"dropdownVisibleClass\", 'dropdown__list-wrapper_visible');\n\nvar _default = Dropdown;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/dropdown/dropdown.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dropdown = _interopRequireDefault(__webpack_require__(/*! ./dropdown */ \"./src/blocks/dropdown/dropdown.js\"));\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/* eslint-disable no-undef */\nfunction initDropdowns(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-dropdown', _dropdown[\"default\"]);\n}\n\nvar _default = initDropdowns;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/dropdown/init.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _input = _interopRequireDefault(__webpack_require__(/*! ./input */ \"./src/blocks/input/input.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n// '.js-input__control_type_masked'\nfunction initMaskedInputs(rootElement) {\n  (0, _dynamicInit[\"default\"])(rootElement, '.js-input_type_masked', _input[\"default\"]);\n}\n\nvar _default = initMaskedInputs;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/input/init.js?");

/***/ }),

/***/ "./src/blocks/input/input.js":
/*!***********************************!*\
  !*** ./src/blocks/input/input.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! jquery.maskedinput/src/jquery.maskedinput */ \"./node_modules/jquery.maskedinput/src/jquery.maskedinput.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar MaskedInput = /*#__PURE__*/function () {\n  function MaskedInput(rootElement) {\n    _classCallCheck(this, MaskedInput);\n\n    _defineProperty(this, \"$maskedInput\", void 0);\n\n    _defineProperty(this, \"placeholder\", void 0);\n\n    this._initProps(rootElement);\n\n    this._initPlugin();\n  }\n\n  _createClass(MaskedInput, [{\n    key: \"_initProps\",\n    value: function _initProps(rootElement) {\n      this.$maskedInput = $(rootElement).find('.js-input__control_type_masked');\n      this.placeholder = this.$maskedInput.attr('placeholder');\n    }\n  }, {\n    key: \"_initPlugin\",\n    value: function _initPlugin() {\n      $.mask.definitions.D = '[0-3]';\n      $.mask.definitions.M = '[0-1]';\n      $.mask.definitions.Y = '[1-2]';\n      this.$maskedInput.mask('D9.M9.Y999', {\n        placeholder: this.placeholder,\n        autoclear: false\n      });\n    }\n  }]);\n\n  return MaskedInput;\n}();\n\nvar _default = MaskedInput;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/input/input.js?");

/***/ }),

/***/ "./src/blocks/input/input.scss":
/*!*************************************!*\
  !*** ./src/blocks/input/input.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/input.scss?");

/***/ }),

/***/ "./src/blocks/like-button/init.js":
/*!****************************************!*\
  !*** ./src/blocks/like-button/init.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _likeButton = _interopRequireDefault(__webpack_require__(/*! ./like-button */ \"./src/blocks/like-button/like-button.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initLikes(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-like-button', _likeButton[\"default\"]);\n}\n\nvar _default = initLikes;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/like-button/init.js?");

/***/ }),

/***/ "./src/blocks/like-button/like-button.js":
/*!***********************************************!*\
  !*** ./src/blocks/like-button/like-button.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/widgets/checkboxradio */ \"./node_modules/jquery-ui/ui/widgets/checkboxradio.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar LikeButton = /*#__PURE__*/function () {\n  _createClass(LikeButton, [{\n    key: \"likesAmount\",\n    get: function get() {\n      return Number.parseInt(this.$label.attr('data-likes-count'), 10);\n    },\n    set: function set(amount) {\n      this.$text.text(amount);\n      this.$label.attr('data-likes-count', amount);\n    }\n  }]);\n\n  function LikeButton(rootElement) {\n    var _this = this;\n\n    _classCallCheck(this, LikeButton);\n\n    _defineProperty(this, \"$like\", void 0);\n\n    _defineProperty(this, \"$label\", void 0);\n\n    _defineProperty(this, \"$text\", void 0);\n\n    _defineProperty(this, \"$hiddenButton\", void 0);\n\n    _defineProperty(this, \"_handleChange\", function () {\n      _this.likesAmount = _this.$label.hasClass('ui-checkboxradio-checked') ? _this.likesAmount + 1 : _this.likesAmount - 1;\n    });\n\n    this._initElements(rootElement);\n\n    this._initLike();\n  }\n\n  _createClass(LikeButton, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$like = $(rootElement);\n      this.$label = this.$like.find('.js-like-button__label');\n      this.$text = this.$like.find('.js-like-button__text');\n      this.$hiddenButton = this.$like.find('.js-like-button__hidden-button');\n    }\n  }, {\n    key: \"_initLike\",\n    value: function _initLike() {\n      this._initPlugin('like-button__button');\n\n      this._createBorder();\n\n      this.$hiddenButton.on('change.like', this._handleChange);\n    }\n  }, {\n    key: \"_createBorder\",\n    value: function _createBorder() {\n      var gradientBorderElement = document.createElement('div');\n      gradientBorderElement.classList.add('like-button__border');\n      this.$label.prepend(gradientBorderElement);\n    }\n  }, {\n    key: \"_initPlugin\",\n    value: function _initPlugin(icon, iconSpace) {\n      var checkbox = this.$hiddenButton.checkboxradio({\n        classes: {\n          'ui-checkboxradio-icon': icon,\n          'ui-checkboxradio-icon-space': iconSpace\n        }\n      });\n      var isChecked = this.$hiddenButton.attr('data-is-checked') === 'true';\n\n      if (isChecked) {\n        checkbox.attr('checked', 'checked').change();\n      }\n    }\n  }]);\n\n  return LikeButton;\n}();\n\nvar _default = LikeButton;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/like-button/like-button.js?");

/***/ }),

/***/ "./src/blocks/like-button/like-button.scss":
/*!*************************************************!*\
  !*** ./src/blocks/like-button/like-button.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/like-button/like-button.scss?");

/***/ }),

/***/ "./src/blocks/list/init.js":
/*!*********************************!*\
  !*** ./src/blocks/list/init.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _list = _interopRequireDefault(__webpack_require__(/*! ./list */ \"./src/blocks/list/list.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initLists(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-list', _list[\"default\"]);\n}\n\nvar _default = initLists;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/list/init.js?");

/***/ }),

/***/ "./src/blocks/list/list.js":
/*!*********************************!*\
  !*** ./src/blocks/list/list.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _init = _interopRequireDefault(__webpack_require__(/*! ../arrow/init */ \"./src/blocks/arrow/init.js\"));\n\nvar _init2 = _interopRequireDefault(__webpack_require__(/*! ../radio-button/init */ \"./src/blocks/radio-button/init.js\"));\n\nvar _init3 = _interopRequireDefault(__webpack_require__(/*! ../checkbox/init */ \"./src/blocks/checkbox/init.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar List = /*#__PURE__*/function () {\n  function List(rootElement) {\n    var _this = this;\n\n    _classCallCheck(this, List);\n\n    _defineProperty(this, \"$list\", void 0);\n\n    _defineProperty(this, \"$title\", void 0);\n\n    _defineProperty(this, \"$container\", void 0);\n\n    _defineProperty(this, \"$arrow\", void 0);\n\n    _defineProperty(this, \"arrow\", void 0);\n\n    _defineProperty(this, \"isExpanded\", void 0);\n\n    _defineProperty(this, \"listItems\", void 0);\n\n    _defineProperty(this, \"_handleExpandableClick\", function () {\n      _this.isExpanded = !_this.isExpanded;\n\n      _this.$container.toggleClass('list__container_visible');\n\n      _this.$title.toggleClass('list__title_expanded');\n\n      _this.$arrow.toggleClass('list__expand-arrow_expanded');\n\n      _this.arrow.handleArrowChangeState();\n    });\n\n    this._initElements(rootElement);\n\n    this._initList();\n  }\n\n  _createClass(List, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$list = $(rootElement);\n      this.$title = this.$list.find('.js-list__title');\n      this.$container = this.$list.find('.js-list__container');\n    }\n  }, {\n    key: \"_initList\",\n    value: function _initList() {\n      if (this.$list.hasClass(List.expandableClass)) {\n        this._initExpandableList();\n      }\n\n      this.listItems = this._initListItems();\n    }\n  }, {\n    key: \"_initListItems\",\n    value: function _initListItems() {\n      if (this.$list.hasClass('list_type_radio')) {\n        (0, _init2[\"default\"])(this.$list);\n      } else if (this.$list.hasClass('list_type_checkbox') || this.$list.hasClass('list_type_toggle')) {\n        (0, _init3[\"default\"])(this.$list);\n      }\n    }\n  }, {\n    key: \"_initExpandableList\",\n    value: function _initExpandableList() {\n      this.isExpanded = this.$list.hasClass('list_expanded');\n\n      this._initArrow();\n\n      this._addExpandableEvents();\n\n      if (this.isExpanded) {\n        this.isExpanded = !this.isExpanded;\n\n        this._handleExpandableClick();\n      }\n    }\n  }, {\n    key: \"_initArrow\",\n    value: function _initArrow() {\n      this.arrow = (0, _init[\"default\"])(this.$list);\n      this.$arrow = this.arrow.$element;\n    }\n  }, {\n    key: \"_addExpandableEvents\",\n    value: function _addExpandableEvents() {\n      this.$title.on('click.list', this._handleExpandableClick);\n      this.$arrow.on('click.list', this._handleExpandableClick);\n    }\n  }]);\n\n  return List;\n}();\n\n_defineProperty(List, \"expandableClass\", 'list_expandable');\n\n_defineProperty(List, \"expandedClass\", 'list__title_expanded');\n\nvar _default = List;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/list/list.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _pagination = _interopRequireDefault(__webpack_require__(/*! ./pagination */ \"./src/blocks/pagination/pagination.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initPaginations(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-pagination', _pagination[\"default\"]);\n}\n\nvar _default = initPaginations;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/pagination/init.js?");

/***/ }),

/***/ "./src/blocks/pagination/pagination.js":
/*!*********************************************!*\
  !*** ./src/blocks/pagination/pagination.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! paginationjs */ \"./node_modules/paginationjs/dist/pagination.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Pagination = /*#__PURE__*/function () {\n  function Pagination(rootElement) {\n    _classCallCheck(this, Pagination);\n\n    _defineProperty(this, \"$pagination\", void 0);\n\n    _defineProperty(this, \"$contentContainer\", void 0);\n\n    _defineProperty(this, \"$buttons\", void 0);\n\n    _defineProperty(this, \"pageSize\", void 0);\n\n    _defineProperty(this, \"HTMLContent\", []);\n\n    this._initElements(rootElement);\n\n    this._getPaginationContent();\n\n    this._initPlugin();\n  }\n\n  _createClass(Pagination, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$pagination = $(rootElement);\n      this.$contentContainer = this.$pagination.find('.js-pagination__content-container');\n      this.$buttons = this.$pagination.find('.js-pagination__buttons-container');\n      this.pageSize = this.$pagination.attr('data-page-size');\n    }\n  }, {\n    key: \"_getPaginationContent\",\n    value: function _getPaginationContent() {\n      var _this = this;\n\n      this.$contentContainer.children().each(function (index, element) {\n        _this.HTMLContent.push($(element).outerHTML());\n      });\n    }\n  }, {\n    key: \"_initPlugin\",\n    value: function _initPlugin() {\n      var _this2 = this;\n\n      this.$buttons.pagination({\n        dataSource: this.HTMLContent,\n        prevText: 'arrow_back',\n        nextText: 'arrow_forward',\n        pageSize: this.pageSize,\n        pageRange: 1,\n        callback: function callback(arrayData) {\n          _this2.$contentContainer.html(arrayData);\n        },\n        showNavigator: true,\n        formatNavigator: function formatNavigator(currentPage, totalPage, totalNumber) {\n          var totalCount = totalNumber.toString();\n\n          if (totalNumber > 100) {\n            totalCount = '100+';\n          }\n\n          var startCount = 1;\n\n          if (currentPage > 1) {\n            startCount = (currentPage - 1) * _this2.pageSize + 1;\n          }\n\n          var endCount = _this2.pageSize * currentPage;\n\n          if (endCount > totalNumber) {\n            endCount = totalNumber;\n          }\n\n          return '<span class=\\'text_type_regular\\'>' + \" \".concat(startCount, \" \\u2013 \").concat(endCount, \" \\u0438\\u0437 \").concat(totalCount, \" \\u0432\\u0430\\u0440\\u0438\\u0430\\u043D\\u0442\\u043E\\u0432 \\u0430\\u0440\\u0435\\u043D\\u0434\\u044B</span>\");\n        }\n      });\n    }\n  }]);\n\n  return Pagination;\n}();\n\nvar _default = Pagination;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/pagination/pagination.js?");

/***/ }),

/***/ "./src/blocks/pagination/pagination.scss":
/*!***********************************************!*\
  !*** ./src/blocks/pagination/pagination.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/pagination/pagination.scss?");

/***/ }),

/***/ "./src/blocks/radio-button/init.js":
/*!*****************************************!*\
  !*** ./src/blocks/radio-button/init.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _radioButton = _interopRequireDefault(__webpack_require__(/*! ./radio-button */ \"./src/blocks/radio-button/radio-button.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initRadioButtons(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-radio-button', _radioButton[\"default\"]);\n}\n\nvar _default = initRadioButtons;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/radio-button/init.js?");

/***/ }),

/***/ "./src/blocks/radio-button/radio-button.js":
/*!*************************************************!*\
  !*** ./src/blocks/radio-button/radio-button.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/widgets/checkboxradio */ \"./node_modules/jquery-ui/ui/widgets/checkboxradio.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar RadioButton = /*#__PURE__*/function () {\n  function RadioButton(rootElement) {\n    _classCallCheck(this, RadioButton);\n\n    _defineProperty(this, \"$radioButton\", void 0);\n\n    _defineProperty(this, \"$hiddenButton\", void 0);\n\n    this._initElements(rootElement);\n\n    this._initRadio();\n  }\n\n  _createClass(RadioButton, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$radioButton = $(rootElement);\n      this.$hiddenButton = this.$radioButton.find('.js-radio-button__hidden-button');\n    }\n  }, {\n    key: \"_initRadio\",\n    value: function _initRadio() {\n      this._initPlugin('radio-button__button', 'radio-button__icon-space');\n    }\n  }, {\n    key: \"_initPlugin\",\n    value: function _initPlugin(icon, iconSpace) {\n      var checkbox = this.$hiddenButton.checkboxradio({\n        classes: {\n          'ui-checkboxradio-icon': icon,\n          'ui-checkboxradio-icon-space': iconSpace\n        }\n      });\n      var isChecked = this.$hiddenButton.attr('data-is-checked') === 'true';\n\n      if (isChecked) {\n        checkbox.attr('checked', 'checked').change();\n      }\n    }\n  }]);\n\n  return RadioButton;\n}();\n\nvar _default = RadioButton;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/radio-button/radio-button.js?");

/***/ }),

/***/ "./src/blocks/radio-button/radio-button.scss":
/*!***************************************************!*\
  !*** ./src/blocks/radio-button/radio-button.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/radio-button/radio-button.scss?");

/***/ }),

/***/ "./src/blocks/rating/init.js":
/*!***********************************!*\
  !*** ./src/blocks/rating/init.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _rating = _interopRequireDefault(__webpack_require__(/*! ./rating */ \"./src/blocks/rating/rating.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initRatings(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-rating', _rating[\"default\"]);\n}\n\nvar _default = initRatings;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/rating/init.js?");

/***/ }),

/***/ "./src/blocks/rating/rating.js":
/*!*************************************!*\
  !*** ./src/blocks/rating/rating.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Rating = /*#__PURE__*/function () {\n  function Rating(rootElement) {\n    var _this = this;\n\n    _classCallCheck(this, Rating);\n\n    _defineProperty(this, \"$rating\", void 0);\n\n    _defineProperty(this, \"maxRating\", void 0);\n\n    _defineProperty(this, \"specifiedRating\", void 0);\n\n    _defineProperty(this, \"ratingIntegerPart\", void 0);\n\n    _defineProperty(this, \"ratingFractionPart\", void 0);\n\n    _defineProperty(this, \"_setStarState\", function (index, element) {\n      if (index + 1 <= _this.ratingIntegerPart) {\n        Rating._setState($(element), 'full');\n      } else if (_this.ratingFractionPart > 0 && index === _this.ratingIntegerPart) {\n        Rating._setState($(element), 'half');\n      } else {\n        Rating._setState($(element), 'empty');\n      }\n    });\n\n    this._initElements(rootElement);\n\n    this._initProperties();\n\n    this._initRating();\n  }\n\n  _createClass(Rating, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$rating = $(rootElement);\n    }\n  }, {\n    key: \"_initProperties\",\n    value: function _initProperties() {\n      this.maxRating = this.$rating.attr('data-maxRating');\n      this.specifiedRating = this.$rating.attr('data-rating');\n    }\n  }, {\n    key: \"_initRating\",\n    value: function _initRating() {\n      var rating = this.specifiedRating === '-1' ? Math.random() * this.maxRating : this.specifiedRating;\n\n      this._setRating(rating);\n    }\n  }, {\n    key: \"_setRating\",\n    value: function _setRating(numericRating) {\n      this.ratingIntegerPart = Math.floor(numericRating);\n      this.ratingFractionPart = numericRating - this.ratingIntegerPart;\n      this.$rating.find('.js-rating__star').each(this._setStarState);\n    }\n  }], [{\n    key: \"_setState\",\n    value: function _setState($star, stateKey) {\n      $star.text(Rating.states[stateKey]);\n    }\n  }]);\n\n  return Rating;\n}();\n\n_defineProperty(Rating, \"states\", {\n  empty: 'star_border',\n  half: 'star_half',\n  full: 'star'\n});\n\nvar _default = Rating;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/rating/rating.js?");

/***/ }),

/***/ "./src/blocks/rating/rating.scss":
/*!***************************************!*\
  !*** ./src/blocks/rating/rating.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/rating/rating.scss?");

/***/ }),

/***/ "./src/blocks/slider/init.js":
/*!***********************************!*\
  !*** ./src/blocks/slider/init.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _slider = _interopRequireDefault(__webpack_require__(/*! ./slider */ \"./src/blocks/slider/slider.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initSliders(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-slider', _slider[\"default\"]);\n}\n\nvar _default = initSliders;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/slider/init.js?");

/***/ }),

/***/ "./src/blocks/slider/slider.js":
/*!*************************************!*\
  !*** ./src/blocks/slider/slider.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/widgets/slider */ \"./node_modules/jquery-ui/ui/widgets/slider.js\");\n\n__webpack_require__(/*! jquery-ui/themes/base/slider.css */ \"./node_modules/jquery-ui/themes/base/slider.css\");\n\nvar _functions = __webpack_require__(/*! ../../common/functions */ \"./src/common/functions.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Slider = /*#__PURE__*/function () {\n  function Slider(rootElement) {\n    var _this = this;\n\n    _classCallCheck(this, Slider);\n\n    _defineProperty(this, \"$slider\", void 0);\n\n    _defineProperty(this, \"$sliderControl\", void 0);\n\n    _defineProperty(this, \"$sliderValueCaption\", void 0);\n\n    _defineProperty(this, \"min\", void 0);\n\n    _defineProperty(this, \"max\", void 0);\n\n    _defineProperty(this, \"step\", void 0);\n\n    _defineProperty(this, \"isRange\", void 0);\n\n    _defineProperty(this, \"_handleValuesChange\", function (event, ui) {\n      var firstValueText = \"\".concat((0, _functions.formatNumber)(ui.values[0], ' '), \"\\u20BD\");\n      var secondValueText = \"\".concat((0, _functions.formatNumber)(ui.values[1], ' '), \"\\u20BD\");\n\n      _this.$sliderValueCaption.text(\"\".concat(firstValueText, \" - \").concat(secondValueText));\n    });\n\n    _defineProperty(this, \"_handleValueChange\", function (event, ui) {\n      var firstValueText = \"\".concat((0, _functions.formatNumber)(ui.value, ' '), \"\\u20BD\");\n\n      _this.$sliderValueCaption.text(firstValueText);\n    });\n\n    this._initElements(rootElement);\n\n    this._initProperties();\n\n    this._initPlugin();\n  }\n\n  _createClass(Slider, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$slider = $(rootElement);\n      this.$sliderControl = this.$slider.find('.js-slider__control');\n      this.$sliderValueCaption = this.$slider.find('.js-slider__value');\n    }\n  }, {\n    key: \"_initProperties\",\n    value: function _initProperties() {\n      this.min = Number(this.$sliderControl.attr('data-min'));\n      this.max = Number(this.$sliderControl.attr('data-max'));\n      this.step = Number(this.$sliderControl.attr('data-step'));\n      this.isRange = this.$sliderControl.hasClass('slider__control_range');\n    }\n  }, {\n    key: \"_initPlugin\",\n    value: function _initPlugin() {\n      this.$sliderControl.slider({\n        min: this.min,\n        max: this.max,\n        step: this.step,\n        range: this.isRange,\n        animate: 'fast',\n        change: this.isRange ? this._handleValuesChange : this._handleValueChange,\n        slide: Slider._handleHandlerValueChange\n      });\n      var initialValues = [(0, _functions.clamp)(this.$sliderControl.attr('data-first-value'), this.min, this.max)];\n\n      if (this.isRange) {\n        var secondValue = this.$sliderControl.attr('data-second-value');\n        initialValues.push((0, _functions.clamp)(secondValue, this.min, this.max));\n\n        this._setValues(initialValues);\n      } else {\n        this._setValue(initialValues[0]);\n      }\n    }\n  }, {\n    key: \"_setValue\",\n    value: function _setValue(value) {\n      this.$sliderControl.slider('value', value);\n      this.$sliderControl.find('.ui-slider-handle').first().attr('sliderHandleValue', value);\n    }\n  }, {\n    key: \"_setValues\",\n    value: function _setValues(values) {\n      this.$sliderControl.slider('values', values);\n      this.$sliderControl.find('.ui-slider-handle').first().attr('sliderHandleValue', values[0]);\n      this.$sliderControl.find('.ui-slider-handle').last().attr('sliderHandleValue', values[1]);\n    }\n  }], [{\n    key: \"_handleHandlerValueChange\",\n    value: function _handleHandlerValueChange(event, ui) {\n      $(ui.handle).attr('sliderHandleValue', ui.value);\n    }\n  }]);\n\n  return Slider;\n}();\n\nvar _default = Slider;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/slider/slider.js?");

/***/ }),

/***/ "./src/blocks/slider/slider.scss":
/*!***************************************!*\
  !*** ./src/blocks/slider/slider.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/slider/slider.scss?");

/***/ }),

/***/ "./src/blocks/spinner/init.js":
/*!************************************!*\
  !*** ./src/blocks/spinner/init.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _spinner = _interopRequireDefault(__webpack_require__(/*! ./spinner */ \"./src/blocks/spinner/spinner.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initSpinners(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-spinner__value', _spinner[\"default\"]);\n}\n\nvar _default = initSpinners;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/spinner/init.js?");

/***/ }),

/***/ "./src/blocks/spinner/spinner.js":
/*!***************************************!*\
  !*** ./src/blocks/spinner/spinner.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/widgets/spinner */ \"./node_modules/jquery-ui/ui/widgets/spinner.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Spinner = /*#__PURE__*/function () {\n  _createClass(Spinner, [{\n    key: \"value\",\n    set: function set(value) {\n      this.$spinner.spinner('value', value);\n    },\n    get: function get() {\n      return this.$spinner.spinner('value');\n    }\n  }]);\n\n  function Spinner(spinnerElement) {\n    var _this = this;\n\n    _classCallCheck(this, Spinner);\n\n    _defineProperty(this, \"$spinner\", void 0);\n\n    _defineProperty(this, \"_handleSpin\", function (event, ui) {\n      _this._disableButtonsAtExtremum(event, ui);\n    });\n\n    Spinner._addButtons();\n\n    this._initPlugin(spinnerElement);\n\n    this.triggerSpin();\n  }\n\n  _createClass(Spinner, [{\n    key: \"triggerSpin\",\n    value: function triggerSpin() {\n      var spinEvent = $.Event('spin', {\n        currentTarget: this.$spinner\n      });\n      this.$spinner.trigger(spinEvent, {\n        value: this.value\n      });\n    }\n  }, {\n    key: \"_initPlugin\",\n    value: function _initPlugin(spinnerElement) {\n      this.$spinner = $(spinnerElement);\n      this.$spinner.spinner({\n        min: this.$spinner.attr('data-min'),\n        max: this.$spinner.attr('data-max')\n      });\n      this.value = this.$spinner.attr('value');\n      this.$spinner.on('spin.spinner', this._handleSpin.bind(this));\n    }\n  }, {\n    key: \"_disableButtonsAtExtremum\",\n    value: function _disableButtonsAtExtremum(event, ui) {\n      var min = this.$spinner.attr('data-min');\n      var max = this.$spinner.attr('data-max');\n      var $decreaseButton = this.$spinner.siblings(\".js-\".concat(Spinner.decreaseButtonBaseClass));\n      var decreaseButtonDisabledClass = \"\".concat(Spinner.decreaseButtonBaseClass, \"_disabled\");\n      var $increaseButton = this.$spinner.siblings(\".js-\".concat(Spinner.increaseButtonBaseClass));\n      var increaseButtonDisabledClass = \"\".concat(Spinner.increaseButtonBaseClass, \"_disabled\");\n\n      if (ui.value <= min) {\n        $decreaseButton.addClass(decreaseButtonDisabledClass);\n      } else {\n        $decreaseButton.removeClass(decreaseButtonDisabledClass);\n      }\n\n      if (ui.value >= max) {\n        $increaseButton.addClass(increaseButtonDisabledClass);\n      } else {\n        $increaseButton.removeClass(increaseButtonDisabledClass);\n      }\n    }\n  }], [{\n    key: \"_addButtons\",\n    value: function _addButtons() {\n      $.widget('ui.spinner', $.ui.spinner, {\n        _enhance: function _enhance() {\n          this.uiSpinner = this.element.attr('autocomplete', 'off').wrap(this._uiSpinnerHtml()).parent().prepend(this._buttonHtml()[0]).append(this._buttonHtml()[1]);\n        },\n        _buttonHtml: function _buttonHtml() {\n          return [\"<button class=\\\"\".concat(Spinner.decreaseButtonClasses, \"\\\">-</button>\"), \"<button class=\\\"\".concat(Spinner.increaseButtonClasses, \"\\\">+</button>\")];\n        },\n        _uiSpinnerHtml: function _uiSpinnerHtml() {\n          return '';\n        }\n      });\n    }\n  }]);\n\n  return Spinner;\n}();\n\n_defineProperty(Spinner, \"decreaseButtonBaseClass\", 'spinner__decrease-button');\n\n_defineProperty(Spinner, \"decreaseButtonClasses\", \"js-\".concat(Spinner.decreaseButtonBaseClass) + \" \".concat(Spinner.decreaseButtonBaseClass) + ' ui-spinner-button' + ' ui-spinner-down');\n\n_defineProperty(Spinner, \"increaseButtonBaseClass\", 'spinner__increase-button');\n\n_defineProperty(Spinner, \"increaseButtonClasses\", \"js-\".concat(Spinner.increaseButtonBaseClass) + \" \".concat(Spinner.increaseButtonBaseClass) + ' ui-spinner-button' + ' ui-spinner-up');\n\nvar _default = Spinner;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/spinner/spinner.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _twoCalendarRangePicker = _interopRequireDefault(__webpack_require__(/*! ./two-calendar-range-picker */ \"./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initTwoCalendarDatepickers(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-two-calendar-range-picker', _twoCalendarRangePicker[\"default\"]);\n}\n\nvar _default = initTwoCalendarDatepickers;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/blocks/two-calendar-range-picker/init.js?");

/***/ }),

/***/ "./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js":
/*!***************************************************************************!*\
  !*** ./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _datepickerBlock = _interopRequireDefault(__webpack_require__(/*! ../datepicker-block/datepicker-block */ \"./src/blocks/datepicker-block/datepicker-block.js\"));\n\nvar _init = _interopRequireDefault(__webpack_require__(/*! ../datepicker-block/init */ \"./src/blocks/datepicker-block/init.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar TwoCalendarDatepicker = /*#__PURE__*/function () {\n  function TwoCalendarDatepicker(rootElement) {\n    var _this = this;\n\n    _classCallCheck(this, TwoCalendarDatepicker);\n\n    _defineProperty(this, \"isSecondAssignStarted\", false);\n\n    _defineProperty(this, \"$twoCalendarDatepicker\", void 0);\n\n    _defineProperty(this, \"$firstDatepicker\", void 0);\n\n    _defineProperty(this, \"$secondDatepicker\", void 0);\n\n    _defineProperty(this, \"firstDatepicker\", void 0);\n\n    _defineProperty(this, \"secondDatepicker\", void 0);\n\n    _defineProperty(this, \"selectedDates\", void 0);\n\n    _defineProperty(this, \"getSelectedDates\", function () {\n      return _this.firstDatepicker.datepickerPlugin.selectedDates;\n    });\n\n    this._initElements(rootElement);\n\n    this._initDatepickers();\n\n    this._initTwoCalendarDatePicker();\n  }\n\n  _createClass(TwoCalendarDatepicker, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$twoCalendarDatepicker = $(rootElement);\n      this.$firstDatepicker = this.$twoCalendarDatepicker.find('.js-two-calendar-range-picker__first-datepicker');\n      this.$secondDatepicker = this.$twoCalendarDatepicker.find('.js-two-calendar-range-picker__second-datepicker');\n    }\n  }, {\n    key: \"_initDatepickers\",\n    value: function _initDatepickers() {\n      this.firstDatepicker = (0, _init[\"default\"])(this.$firstDatepicker);\n      this.secondDatepicker = (0, _init[\"default\"])(this.$secondDatepicker);\n    }\n  }, {\n    key: \"_initTwoCalendarDatePicker\",\n    value: function _initTwoCalendarDatePicker() {\n      if (!this.firstDatepicker || !this.secondDatepicker) return;\n      this.firstDatepicker.datepickerPlugin.update({\n        position: 'bottom left'\n      });\n      this.secondDatepicker.datepickerPlugin.update({\n        position: 'bottom right'\n      });\n\n      this._addDatepickerOnSelectHandler(this.firstDatepicker, this.secondDatepicker, 0);\n\n      this._addDatepickerOnSelectHandler(this.secondDatepicker, this.firstDatepicker, 1);\n\n      var initDates = this._getInitialDates(this.$twoCalendarDatepicker);\n\n      this._setInitialDates(initDates);\n    }\n  }, {\n    key: \"_handleOnSelect\",\n    value: function _handleOnSelect(formattedDate, datepicker, otherDatepicker, number) {\n      if (this.isSecondAssignStarted) return;\n      var datepickerPlugin = datepicker.datepickerPlugin;\n      var otherDatepickerPlugin = otherDatepicker.datepickerPlugin;\n      var otherNumber = 1 - number;\n      var newDates = datepickerPlugin.selectedDates;\n      var options = {\n        year: 'numeric',\n        month: 'numeric',\n        day: 'numeric'\n      };\n\n      if (newDates.length < 2) {\n        datepickerPlugin.update({\n          dateFormat: ''\n        });\n        otherDatepickerPlugin.update({\n          dateFormat: 'ДД.ММ.ГГГГ'\n        });\n      }\n\n      this.isSecondAssignStarted = true;\n      otherDatepickerPlugin.clear();\n      otherDatepickerPlugin.selectDate(datepickerPlugin.selectedDates);\n      this.isSecondAssignStarted = false;\n\n      if (newDates.length > 1) {\n        datepicker.$inputControl.val(newDates[number].toLocaleDateString('ru-RU', options));\n        otherDatepicker.$inputControl.val(newDates[otherNumber].toLocaleDateString('ru-RU', options));\n      } // вызов события вручную, поскольку автоматически этого не происходит, а оно используется\n\n\n      $(datepicker.$inputControl).change();\n    }\n  }, {\n    key: \"_addDatepickerOnSelectHandler\",\n    value: function _addDatepickerOnSelectHandler(datepicker, otherDatepicker, number) {\n      var _this2 = this;\n\n      datepicker.datepickerPlugin.update({\n        onSelect: function onSelect(formattedDate) {\n          _this2._handleOnSelect(formattedDate, datepicker, otherDatepicker, number);\n        }\n      });\n    }\n  }, {\n    key: \"_getInitialDates\",\n    value: function _getInitialDates() {\n      var dates = {};\n\n      if (this.$twoCalendarDatepicker.attr('data-first-date')) {\n        dates.firstDate = _datepickerBlock[\"default\"].parseAttrToDate(this.$twoCalendarDatepicker.attr('data-first-date'));\n      }\n\n      if (this.$twoCalendarDatepicker.attr('data-second-date')) {\n        dates.secondDate = _datepickerBlock[\"default\"].parseAttrToDate(this.$twoCalendarDatepicker.attr('data-second-date'));\n      }\n\n      return dates;\n    }\n  }, {\n    key: \"_setInitialDates\",\n    value: function _setInitialDates(initDates) {\n      if (initDates.firstDate) {\n        this.firstDatepicker.datepickerPlugin.selectDate(initDates.firstDate);\n      }\n\n      if (initDates.secondDate) {\n        this.secondDatepicker.datepickerPlugin.selectDate(initDates.secondDate);\n      }\n    }\n  }]);\n\n  return TwoCalendarDatepicker;\n}();\n\nvar _default = TwoCalendarDatepicker;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js?");

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

eval("var map = {\n\t\"./booking-card/booking-card.js\": \"./src/cards/booking-card/booking-card.js\",\n\t\"./booking-card/booking-card.scss\": \"./src/cards/booking-card/booking-card.scss\",\n\t\"./booking-card/init.js\": \"./src/cards/booking-card/init.js\",\n\t\"./find-room-card/find-room-card.js\": \"./src/cards/find-room-card/find-room-card.js\",\n\t\"./find-room-card/find-room-card.scss\": \"./src/cards/find-room-card/find-room-card.scss\",\n\t\"./find-room-card/init.js\": \"./src/cards/find-room-card/init.js\",\n\t\"./login-card/login-card.scss\": \"./src/cards/login-card/login-card.scss\",\n\t\"./registration-card/init.js\": \"./src/cards/registration-card/init.js\",\n\t\"./registration-card/registration-card.js\": \"./src/cards/registration-card/registration-card.js\",\n\t\"./registration-card/registration-card.scss\": \"./src/cards/registration-card/registration-card.scss\",\n\t\"./room-preview-card/init.js\": \"./src/cards/room-preview-card/init.js\",\n\t\"./room-preview-card/room-preview-card.js\": \"./src/cards/room-preview-card/room-preview-card.js\",\n\t\"./room-preview-card/room-preview-card.scss\": \"./src/cards/room-preview-card/room-preview-card.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/cards sync recursive \\\\.(js|scss)$\";\n\n//# sourceURL=webpack:///./src/cards_sync_\\.(js%7Cscss)$?");

/***/ }),

/***/ "./src/cards/booking-card/booking-card.js":
/*!************************************************!*\
  !*** ./src/cards/booking-card/booking-card.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _functions = __webpack_require__(/*! ../../common/functions */ \"./src/common/functions.js\");\n\nvar _init = _interopRequireDefault(__webpack_require__(/*! ../../blocks/dropdown/init */ \"./src/blocks/dropdown/init.js\"));\n\nvar _init2 = _interopRequireDefault(__webpack_require__(/*! ../../blocks/two-calendar-range-picker/init */ \"./src/blocks/two-calendar-range-picker/init.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar BookingCard = /*#__PURE__*/function () {\n  _createClass(BookingCard, [{\n    key: \"stayingCost\",\n    get: function get() {\n      return this.dailyPrice * this.daysAmount;\n    }\n  }]);\n\n  function BookingCard(rootElement) {\n    var _this = this;\n\n    _classCallCheck(this, BookingCard);\n\n    _defineProperty(this, \"$bookingCard\", void 0);\n\n    _defineProperty(this, \"$dailyPrice\", void 0);\n\n    _defineProperty(this, \"$dropdownWrap\", void 0);\n\n    _defineProperty(this, \"$rangeDatepickerWrap\", void 0);\n\n    _defineProperty(this, \"$servicesEnum\", void 0);\n\n    _defineProperty(this, \"$servicesCost\", void 0);\n\n    _defineProperty(this, \"$stayingCostCalculation\", void 0);\n\n    _defineProperty(this, \"$stayingCost\", void 0);\n\n    _defineProperty(this, \"$additionalServicesCostSum\", void 0);\n\n    _defineProperty(this, \"$totalCost\", void 0);\n\n    _defineProperty(this, \"guestsDropdown\", void 0);\n\n    _defineProperty(this, \"rangeDatepicker\", void 0);\n\n    _defineProperty(this, \"servicesCostSum\", void 0);\n\n    _defineProperty(this, \"additionalServicesCostSum\", void 0);\n\n    _defineProperty(this, \"daysAmount\", void 0);\n\n    _defineProperty(this, \"dailyPrice\", void 0);\n\n    _defineProperty(this, \"currency\", void 0);\n\n    _defineProperty(this, \"servicesData\", void 0);\n\n    _defineProperty(this, \"_handleDatepickerChange\", function () {\n      _this._updateDaysAmount();\n\n      _this._refreshDynamicCosts();\n    });\n\n    this._initElements(rootElement);\n\n    this._initProperties();\n\n    this._initBookingCard();\n\n    this._updateDailyPrice();\n  }\n\n  _createClass(BookingCard, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$bookingCard = $(rootElement);\n      this.$dailyPrice = this.$bookingCard.find('.js-booking-card__daily-price');\n      this.$dropdownWrap = this.$bookingCard.find('.js-booking-card__guests-dropdown');\n      this.$rangeDatepickerWrap = this.$bookingCard.find('.js-booking-card__range-picker');\n      this.$totalCost = this.$bookingCard.find('.js-booking-card__summary-total-cost');\n      this.$servicesEnum = this.$bookingCard.find('.js-booking-card__services');\n      this.$servicesCost = this.$bookingCard.find('.js-booking-card__services-sum');\n      this.$additionalServicesCostSum = this.$bookingCard.find('.js-booking-card__additional-services-sum');\n      this.$stayingCostCalculation = this.$bookingCard.find('.js-booking-card__staying-cost-calculation');\n      this.$stayingCost = this.$bookingCard.find('.js-booking-card__staying-cost-sum');\n    }\n  }, {\n    key: \"_initProperties\",\n    value: function _initProperties() {\n      this.dailyPrice = this.$dailyPrice.attr('data-daily-price');\n      this.currency = this.$dailyPrice.attr('data-currency');\n      this.additionalServicesCostSum = this.$additionalServicesCostSum.attr('data-addServices');\n    }\n  }, {\n    key: \"_initBookingCard\",\n    value: function _initBookingCard() {\n      this._initGuestsDropdown();\n\n      this._initRangeDatepicker();\n\n      this._addRefreshCostsOnInputChange();\n\n      this._updateDaysAmount();\n\n      this._updateServicesData();\n\n      this._refreshServicesCaption();\n\n      this._refreshDynamicCosts();\n    }\n  }, {\n    key: \"_initGuestsDropdown\",\n    value: function _initGuestsDropdown() {\n      this.guestsDropdown = (0, _init[\"default\"])(this.$dropdownWrap);\n    }\n  }, {\n    key: \"_initRangeDatepicker\",\n    value: function _initRangeDatepicker() {\n      this.rangeDatepicker = (0, _init2[\"default\"])(this.$rangeDatepickerWrap);\n    }\n  }, {\n    key: \"_addRefreshCostsOnInputChange\",\n    value: function _addRefreshCostsOnInputChange() {\n      var $firstDatePicker = this.rangeDatepicker.$firstDatepicker;\n      var $secondDatePicker = this.rangeDatepicker.$secondDatepicker;\n      $firstDatePicker.on('change.bookingCard', this._handleDatepickerChange);\n      $secondDatePicker.on('change.bookingCard', this._handleDatepickerChange);\n    }\n  }, {\n    key: \"_refreshDynamicCosts\",\n    value: function _refreshDynamicCosts() {\n      this._refreshStayingCost();\n\n      this._refreshTotalCost();\n    }\n  }, {\n    key: \"_refreshStayingCost\",\n    value: function _refreshStayingCost() {\n      var declinedPeriod = (0, _functions.ruDeclination)(this.daysAmount, 'сут|ки|ок|ок');\n      var dailyPriceToPrint = (0, _functions.formatNumber)(this.dailyPrice, ' ');\n      this.$stayingCostCalculation.text(\"\".concat(dailyPriceToPrint).concat(this.currency, \" \\u0445 \").concat(this.daysAmount, \" \").concat(declinedPeriod));\n      var sumToPrint = (0, _functions.formatNumber)(this.stayingCost, ' ');\n      this.$stayingCost.text(\"\".concat(sumToPrint).concat(this.currency));\n    }\n  }, {\n    key: \"_updateDaysAmount\",\n    value: function _updateDaysAmount() {\n      var dateRange = this.rangeDatepicker.getSelectedDates();\n      var daysAmount;\n\n      if (dateRange[0] && dateRange[1]) {\n        var secondsAmount = Math.round(dateRange[1] - dateRange[0]);\n        daysAmount = BookingCard._secondsToDays(secondsAmount);\n      }\n\n      this.daysAmount = daysAmount || 0;\n    }\n  }, {\n    key: \"_updateServicesData\",\n    value: function _updateServicesData() {\n      var _this2 = this;\n\n      var servicesEnum = this.$servicesEnum.attr('data-services');\n      var services = JSON.parse(servicesEnum);\n      var overallServicesCost = 0;\n      var servicesString = 'Сбор за услуги: ';\n      services.forEach(function (service) {\n        overallServicesCost += Number.parseFloat(service.cost);\n        servicesString += \"\".concat(service.name, \" \") + \"\".concat((0, _functions.formatNumber)(Math.abs(service.cost), ' ')) + \"\".concat(_this2.currency, \", \");\n      });\n      servicesString = servicesString.substring(0, servicesString.length - 2);\n      this.servicesCostSum = overallServicesCost;\n      overallServicesCost = overallServicesCost > 0 ? overallServicesCost : 0;\n      this.servicesData = {\n        text: servicesString,\n        sum: overallServicesCost\n      };\n    }\n  }, {\n    key: \"_refreshServicesCaption\",\n    value: function _refreshServicesCaption() {\n      this.$servicesEnum.text(this.servicesData.text);\n      this.$servicesCost.text(\"\".concat(this.servicesData.sum).concat(this.currency));\n    }\n  }, {\n    key: \"_refreshTotalCost\",\n    value: function _refreshTotalCost() {\n      var totalBookingCost = this._getTotalCost();\n\n      var formattedTotalBookingCost = (0, _functions.formatNumber)(totalBookingCost, ' ');\n      this.$totalCost.text(\"\".concat(formattedTotalBookingCost).concat(this.currency));\n    }\n  }, {\n    key: \"_getTotalCost\",\n    value: function _getTotalCost() {\n      var totalCost = Number.parseFloat(this.stayingCost) + Number.parseFloat(this.servicesCostSum) + Number.parseFloat(this.additionalServicesCostSum);\n      return Math.max(totalCost, 0);\n    }\n  }, {\n    key: \"_updateDailyPrice\",\n    value: function _updateDailyPrice() {\n      this.$dailyPrice.text(\"\".concat((0, _functions.formatNumber)(this.dailyPrice, ' ')).concat(this.currency));\n    }\n  }]);\n\n  return BookingCard;\n}();\n\n_defineProperty(BookingCard, \"_secondsToDays\", function (secondsAmount) {\n  return Math.round(secondsAmount / (24 * 60 * 60 * 1000));\n});\n\nvar _default = BookingCard;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/cards/booking-card/booking-card.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _bookingCard = _interopRequireDefault(__webpack_require__(/*! ./booking-card */ \"./src/cards/booking-card/booking-card.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initBookingCards(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-booking-card', _bookingCard[\"default\"]);\n}\n\nvar _default = initBookingCards;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/cards/booking-card/init.js?");

/***/ }),

/***/ "./src/cards/find-room-card/find-room-card.js":
/*!****************************************************!*\
  !*** ./src/cards/find-room-card/find-room-card.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _init = _interopRequireDefault(__webpack_require__(/*! ../../blocks/two-calendar-range-picker/init */ \"./src/blocks/two-calendar-range-picker/init.js\"));\n\nvar _init2 = _interopRequireDefault(__webpack_require__(/*! ../../blocks/dropdown/init */ \"./src/blocks/dropdown/init.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar FindRoomCard = /*#__PURE__*/function () {\n  function FindRoomCard(rootElement) {\n    _classCallCheck(this, FindRoomCard);\n\n    _defineProperty(this, \"$findRoomCard\", void 0);\n\n    this._initElements(rootElement);\n\n    this._initContent();\n  }\n\n  _createClass(FindRoomCard, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$findRoomCard = $(rootElement);\n    }\n  }, {\n    key: \"_initContent\",\n    value: function _initContent() {\n      (0, _init[\"default\"])(this.$findRoomCard);\n      (0, _init2[\"default\"])(this.$findRoomCard);\n    }\n  }]);\n\n  return FindRoomCard;\n}();\n\nvar _default = FindRoomCard;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/cards/find-room-card/find-room-card.js?");

/***/ }),

/***/ "./src/cards/find-room-card/find-room-card.scss":
/*!******************************************************!*\
  !*** ./src/cards/find-room-card/find-room-card.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/cards/find-room-card/find-room-card.scss?");

/***/ }),

/***/ "./src/cards/find-room-card/init.js":
/*!******************************************!*\
  !*** ./src/cards/find-room-card/init.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _findRoomCard = _interopRequireDefault(__webpack_require__(/*! ./find-room-card */ \"./src/cards/find-room-card/find-room-card.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initFindRoomCards(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-find-room-card', _findRoomCard[\"default\"]);\n}\n\nvar _default = initFindRoomCards;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/cards/find-room-card/init.js?");

/***/ }),

/***/ "./src/cards/login-card/login-card.scss":
/*!**********************************************!*\
  !*** ./src/cards/login-card/login-card.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/cards/login-card/login-card.scss?");

/***/ }),

/***/ "./src/cards/registration-card/init.js":
/*!*********************************************!*\
  !*** ./src/cards/registration-card/init.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _registrationCard = _interopRequireDefault(__webpack_require__(/*! ./registration-card */ \"./src/cards/registration-card/registration-card.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initRegistrationCards(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-registration-card', _registrationCard[\"default\"]);\n}\n\nvar _default = initRegistrationCards;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/cards/registration-card/init.js?");

/***/ }),

/***/ "./src/cards/registration-card/registration-card.js":
/*!**********************************************************!*\
  !*** ./src/cards/registration-card/registration-card.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _init = _interopRequireDefault(__webpack_require__(/*! ../../blocks/list/init */ \"./src/blocks/list/init.js\"));\n\nvar _init2 = _interopRequireDefault(__webpack_require__(/*! ../../blocks/checkbox/init */ \"./src/blocks/checkbox/init.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar RegistrationCard = /*#__PURE__*/function () {\n  function RegistrationCard(rootElement) {\n    _classCallCheck(this, RegistrationCard);\n\n    _defineProperty(this, \"$registrationCard\", void 0);\n\n    this._initElements(rootElement);\n\n    this._initContent();\n  }\n\n  _createClass(RegistrationCard, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$registrationCard = $(rootElement);\n    }\n  }, {\n    key: \"_initContent\",\n    value: function _initContent() {\n      (0, _init[\"default\"])(this.$registrationCard);\n      (0, _init2[\"default\"])(this.$registrationCard);\n    }\n  }]);\n\n  return RegistrationCard;\n}();\n\nvar _default = RegistrationCard;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/cards/registration-card/registration-card.js?");

/***/ }),

/***/ "./src/cards/registration-card/registration-card.scss":
/*!************************************************************!*\
  !*** ./src/cards/registration-card/registration-card.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/cards/registration-card/registration-card.scss?");

/***/ }),

/***/ "./src/cards/room-preview-card/init.js":
/*!*********************************************!*\
  !*** ./src/cards/room-preview-card/init.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _roomPreviewCard = _interopRequireDefault(__webpack_require__(/*! ./room-preview-card */ \"./src/cards/room-preview-card/room-preview-card.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initRoomPreviewCards(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-room-preview-card', _roomPreviewCard[\"default\"]);\n}\n\nvar _default = initRoomPreviewCards;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/cards/room-preview-card/init.js?");

/***/ }),

/***/ "./src/cards/room-preview-card/room-preview-card.js":
/*!**********************************************************!*\
  !*** ./src/cards/room-preview-card/room-preview-card.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _functions = __webpack_require__(/*! ../../common/functions */ \"./src/common/functions.js\");\n\nvar _init = _interopRequireDefault(__webpack_require__(/*! ../../blocks/carousel/init */ \"./src/blocks/carousel/init.js\"));\n\nvar _init2 = _interopRequireDefault(__webpack_require__(/*! ../../blocks/rating/init */ \"./src/blocks/rating/init.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar RoomPreviewCard = /*#__PURE__*/function () {\n  function RoomPreviewCard(rootElement) {\n    _classCallCheck(this, RoomPreviewCard);\n\n    _defineProperty(this, \"$roomPreviewCard\", void 0);\n\n    _defineProperty(this, \"$dailyCost\", void 0);\n\n    _defineProperty(this, \"$reviewsAmount\", void 0);\n\n    _defineProperty(this, \"$reviewsText\", void 0);\n\n    _defineProperty(this, \"currency\", void 0);\n\n    _defineProperty(this, \"dailyCost\", void 0);\n\n    _defineProperty(this, \"reviewsAmount\", void 0);\n\n    this._initElements(rootElement);\n\n    this._initProperties();\n\n    this._initCaptions();\n\n    this._initInnerBlocks();\n  }\n\n  _createClass(RoomPreviewCard, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$roomPreviewCard = $(rootElement);\n      this.$dailyCost = this.$roomPreviewCard.find('.js-room-preview-card__cost-per-period');\n      this.$reviewsAmount = this.$roomPreviewCard.find('.js-room-preview-card__reviews-count');\n      this.$reviewsText = this.$roomPreviewCard.find('.js-room-preview-card__reviews-text');\n    }\n  }, {\n    key: \"_initProperties\",\n    value: function _initProperties() {\n      this.currency = this.$roomPreviewCard.attr('data-currency');\n      this.dailyCost = this.$roomPreviewCard.attr('data-cost-per-period');\n      this.reviewsAmount = this.$roomPreviewCard.attr('data-reviews-count');\n    }\n  }, {\n    key: \"_initCaptions\",\n    value: function _initCaptions() {\n      var formattedCostPerPeriod = (0, _functions.formatNumber)(this.dailyCost, ' ');\n      this.$dailyCost.text(\"\".concat(formattedCostPerPeriod).concat(this.currency));\n      var formattedReviewsCount = (0, _functions.formatNumber)(this.reviewsAmount, ' ');\n      this.$reviewsAmount.text(formattedReviewsCount);\n      var inclinedReviewsText = (0, _functions.ruDeclination)(this.reviewsAmount, 'Отзыв||а|ов');\n      this.$reviewsText.text(inclinedReviewsText);\n    }\n  }, {\n    key: \"_initInnerBlocks\",\n    value: function _initInnerBlocks() {\n      (0, _init2[\"default\"])(this.$roomPreviewCard);\n      (0, _init[\"default\"])(this.$roomPreviewCard);\n    }\n  }]);\n\n  return RoomPreviewCard;\n}();\n\nvar _default = RoomPreviewCard;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/cards/room-preview-card/room-preview-card.js?");

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

eval("var map = {\n\t\"./dynamicInit.js\": \"./src/common/dynamicInit.js\",\n\t\"./fonts.scss\": \"./src/common/fonts.scss\",\n\t\"./functions.js\": \"./src/common/functions.js\",\n\t\"./mixins.scss\": \"./src/common/mixins.scss\",\n\t\"./variables.scss\": \"./src/common/variables.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/common sync recursive \\\\.(js|scss)$\";\n\n//# sourceURL=webpack:///./src/common_sync_\\.(js%7Cscss)$?");

/***/ }),

/***/ "./src/common/dynamicInit.js":
/*!***********************************!*\
  !*** ./src/common/dynamicInit.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction initBlocks(rootElement, selector, ClassToInit) {\n  for (var _len = arguments.length, classInitParams = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {\n    classInitParams[_key - 3] = arguments[_key];\n  }\n\n  var blockInstanceKey = \"\".concat(ClassToInit.className, \"Instance\");\n  var blocks = [];\n  var $blocks = rootElement ? $(rootElement).find(selector) : $(selector);\n  $blocks.each(function (index, element) {\n    var $block = $(element);\n\n    if ($block.data(blockInstanceKey)) {\n      blocks.push($block.data(blockInstanceKey));\n      return;\n    }\n\n    var blockInstance = _construct(ClassToInit, [element].concat(classInitParams));\n\n    $block.data(blockInstanceKey, blockInstance);\n    blocks.push(blockInstance);\n  });\n  return blocks.length === 1 ? blocks[0] : blocks;\n}\n\nvar _default = initBlocks;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/common/dynamicInit.js?");

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
eval("/* WEBPACK VAR INJECTION */(function(jQuery) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.clamp = clamp;\nexports.formatNumber = formatNumber;\nexports.ruDeclination = ruDeclination;\nexports.getAverageNum = getAverageNum;\n\n/**\r\n * добавляет пробелы на каждом третьем разряде числа\r\n * @param number форматируемое число\r\n * @param {string} symbol символ для вставки между триадами\r\n * @returns {string} итоговое число в виде строки\r\n */\nfunction formatNumber(number, symbol) {\n  if (Number.isNaN(number * 1)) {\n    return 'NaN';\n  }\n\n  var stringNum = number.toString();\n  var formattedNum = [];\n\n  for (var i = stringNum.length - 1; i >= 0; i -= 1) {\n    if ((stringNum.length - i) % 3 === 0 && stringNum.length - i > 0) {\n      formattedNum[i] = \"\".concat(symbol).concat(stringNum[i]);\n    } else {\n      formattedNum[i] = stringNum[i];\n    }\n  }\n\n  return formattedNum.join('');\n}\n/**\r\n * Функция для склонения русских слов\r\n * Пример использования: ruDeclination(5,'комментари|й|я|ев')\r\n * @author Павел Белоусов <pafnuty10@gmail.com>\r\n * @param      {number}  number  Число, для которого будет расчитано окончание\r\n * @param      {string}  words   Слово и варианты окончаний для 1|2|100\r\n * (1 комментарий, 2 комментария, 100 комментариев)\r\n * @return     {string}  Cлово с правильным окончанием\r\n */\n\n\nfunction ruDeclination(number, words) {\n  var w = words.split('|');\n  var n = Math.abs(number);\n  var firstEndingCondition = n % 10 === 1 && n % 100 !== 11;\n  var secondEndingCondition = n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20);\n\n  if (firstEndingCondition) {\n    return w[0] + w[1];\n  }\n\n  if (secondEndingCondition) {\n    return w[0] + w[2];\n  }\n\n  return w[0] + w[3];\n}\n\nfunction outerHTML() {\n  return jQuery('<div />').append(this.eq(0).clone()).html();\n}\n\njQuery.fn.outerHTML = outerHTML;\n\nfunction clamp(value, min, max) {\n  return Math.min(Math.max(value, min), max);\n}\n\nfunction getAverageNum(firstNum, secondNum) {\n  return (firstNum + secondNum) / 2;\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/common/functions.js?");

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

eval("var map = {\n\t\"./footer/footer.js\": \"./src/page-elements/footer/footer.js\",\n\t\"./footer/footer.scss\": \"./src/page-elements/footer/footer.scss\",\n\t\"./header/header.js\": \"./src/page-elements/header/header.js\",\n\t\"./header/header.scss\": \"./src/page-elements/header/header.scss\",\n\t\"./header/init.js\": \"./src/page-elements/header/init.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/page-elements sync recursive \\\\.(js|scss)$\";\n\n//# sourceURL=webpack:///./src/page-elements_sync_\\.(js%7Cscss)$?");

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
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Header = /*#__PURE__*/function () {\n  function Header(rootElement) {\n    _classCallCheck(this, Header);\n\n    _defineProperty(this, \"$header\", void 0);\n\n    _defineProperty(this, \"$logo\", void 0);\n\n    _defineProperty(this, \"$registerButton\", void 0);\n\n    _defineProperty(this, \"$loginButton\", void 0);\n\n    this._initElements(rootElement);\n\n    this._initLinks();\n  }\n\n  _createClass(Header, [{\n    key: \"_initElements\",\n    value: function _initElements(rootElement) {\n      this.$header = $(rootElement);\n      this.$logo = this.$header.find('.js-header__logo-link');\n      this.$registerButton = this.$header.find('.js-header__register-button .js-button__control');\n      this.$loginButton = this.$header.find('.js-header__login-button .js-button__control');\n    }\n  }, {\n    key: \"_initLinks\",\n    value: function _initLinks() {\n      this.$registerButton.attr('href', Header.registerURL);\n      this.$loginButton.attr('href', Header.loginURL);\n      this.$logo.attr('href', Header.indexURL);\n    }\n  }]);\n\n  return Header;\n}();\n\n_defineProperty(Header, \"registrationLoginURL\", 'registration-login.html');\n\n_defineProperty(Header, \"loginURL\", \"\".concat(Header.registrationLoginURL, \"?login=true\"));\n\n_defineProperty(Header, \"registerURL\", \"\".concat(Header.registrationLoginURL, \"?login=false\"));\n\n_defineProperty(Header, \"indexURL\", 'landing-page.html');\n\nvar _default = Header;\nexports[\"default\"] = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/page-elements/header/header.js?");

/***/ }),

/***/ "./src/page-elements/header/header.scss":
/*!**********************************************!*\
  !*** ./src/page-elements/header/header.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/header/header.scss?");

/***/ }),

/***/ "./src/page-elements/header/init.js":
/*!******************************************!*\
  !*** ./src/page-elements/header/init.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _dynamicInit = _interopRequireDefault(__webpack_require__(/*! ../../common/dynamicInit */ \"./src/common/dynamicInit.js\"));\n\nvar _header = _interopRequireDefault(__webpack_require__(/*! ./header */ \"./src/page-elements/header/header.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initHeaders(rootElement) {\n  return (0, _dynamicInit[\"default\"])(rootElement, '.js-header', _header[\"default\"]);\n}\n\nvar _default = initHeaders;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/page-elements/header/init.js?");

/***/ }),

/***/ "./src/site-pages/landing-page sync recursive \\.(js|scss)$":
/*!*******************************************************!*\
  !*** ./src/site-pages/landing-page sync \.(js|scss)$ ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./landing-page.js\": \"./src/site-pages/landing-page/landing-page.js\",\n\t\"./landing-page.scss\": \"./src/site-pages/landing-page/landing-page.scss\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/site-pages/landing-page sync recursive \\\\.(js|scss)$\";\n\n//# sourceURL=webpack:///./src/site-pages/landing-page_sync_\\.(js%7Cscss)$?");

/***/ }),

/***/ "./src/site-pages/landing-page/landing-page.js":
/*!*****************************************************!*\
  !*** ./src/site-pages/landing-page/landing-page.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nvar _index = __webpack_require__(/*! ../../index */ \"./src/index.js\");\n\nvar _init = _interopRequireDefault(__webpack_require__(/*! ../../cards/find-room-card/init */ \"./src/cards/find-room-card/init.js\"));\n\nvar _init2 = _interopRequireDefault(__webpack_require__(/*! ../../page-elements/header/init */ \"./src/page-elements/header/init.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n(0, _init2[\"default\"])();\n(0, _index.importCommon)();\n(0, _index.importContext)(__webpack_require__(\"./src/site-pages/landing-page sync recursive \\\\.(js|scss)$\"));\nvar imagePaths = [];\nimagePaths.push(__webpack_require__(/*! ../../assets/images/room-big-1.jpg */ \"./src/assets/images/room-big-1.jpg\"));\nimagePaths.push(__webpack_require__(/*! ../../assets/images/room-big-2.jpg */ \"./src/assets/images/room-big-2.jpg\"));\nimagePaths.push(__webpack_require__(/*! ../../assets/images/room-big-3.jpg */ \"./src/assets/images/room-big-3.jpg\"));\nvar $roomContainers = $('.landing-page__room-container');\n\nfunction initRoomContainer() {\n  var $container = $(this);\n  var randomNum = Math.floor(Math.random() * imagePaths.length);\n  $container.css('background-image', \"url(\".concat(imagePaths[randomNum], \")\"));\n}\n\n$roomContainers.each(initRoomContainer);\n(0, _init[\"default\"])();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/site-pages/landing-page/landing-page.js?");

/***/ }),

/***/ "./src/site-pages/landing-page/landing-page.scss":
/*!*******************************************************!*\
  !*** ./src/site-pages/landing-page/landing-page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/site-pages/landing-page/landing-page.scss?");

/***/ })

/******/ });