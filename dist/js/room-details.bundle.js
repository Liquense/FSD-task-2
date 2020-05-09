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
/******/ 		"room-details": 0
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
/******/ 	deferredModules.push(["./src/site-pages/room-details/room-details.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/arrow_back.svg":
/*!******************************************!*\
  !*** ./src/assets/images/arrow_back.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/arrow_back.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/arrow_back.svg?");

/***/ }),

/***/ "./src/assets/images/expand_more.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/expand_more.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/expand_more.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/expand_more.svg?");

/***/ }),

/***/ "./src/assets/images/icon-colored.png":
/*!********************************************!*\
  !*** ./src/assets/images/icon-colored.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/icon-colored.png\";\n\n//# sourceURL=webpack:///./src/assets/images/icon-colored.png?");

/***/ }),

/***/ "./src/assets/images/logo_colored_withText.svg":
/*!*****************************************************!*\
  !*** ./src/assets/images/logo_colored_withText.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/logo_colored_withText.svg\";\n\n//# sourceURL=webpack:///./src/assets/images/logo_colored_withText.svg?");

/***/ }),

/***/ "./src/assets/images/room-details-1.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/room-details-1.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/room-details-1.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/room-details-1.jpg?");

/***/ }),

/***/ "./src/assets/images/room-details-2.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/room-details-2.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/room-details-2.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/room-details-2.jpg?");

/***/ }),

/***/ "./src/assets/images/room-details-3.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/room-details-3.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/room-details-3.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/room-details-3.jpg?");

/***/ }),

/***/ "./src/assets/images/userAvatar-2.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/userAvatar-2.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/userAvatar-2.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/userAvatar-2.jpg?");

/***/ }),

/***/ "./src/assets/images/userAvatar.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/userAvatar.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/userAvatar.jpg\";\n\n//# sourceURL=webpack:///./src/assets/images/userAvatar.jpg?");

/***/ }),

/***/ "./src/blocks/button/_decoration/_enter-arrow/button_decoration_enter-arrow.scss":
/*!***************************************************************************************!*\
  !*** ./src/blocks/button/_decoration/_enter-arrow/button_decoration_enter-arrow.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_decoration/_enter-arrow/button_decoration_enter-arrow.scss?");

/***/ }),

/***/ "./src/blocks/button/_hovered/button_hovered.scss":
/*!********************************************************!*\
  !*** ./src/blocks/button/_hovered/button_hovered.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_hovered/button_hovered.scss?");

/***/ }),

/***/ "./src/blocks/button/_size/button_size_wide.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/button/_size/button_size_wide.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_size/button_size_wide.scss?");

/***/ }),

/***/ "./src/blocks/button/_size/button_text-sized.scss":
/*!********************************************************!*\
  !*** ./src/blocks/button/_size/button_text-sized.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_size/button_text-sized.scss?");

/***/ }),

/***/ "./src/blocks/button/_type/button_type_bordered.scss":
/*!***********************************************************!*\
  !*** ./src/blocks/button/_type/button_type_bordered.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_type/button_type_bordered.scss?");

/***/ }),

/***/ "./src/blocks/button/_type/button_type_filled.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/button/_type/button_type_filled.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_type/button_type_filled.scss?");

/***/ }),

/***/ "./src/blocks/button/_type/button_type_text.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/button/_type/button_type_text.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/_type/button_type_text.scss?");

/***/ }),

/***/ "./src/blocks/button/button.js":
/*!*************************************!*\
  !*** ./src/blocks/button/button.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./button.scss */ \"./src/blocks/button/button.scss\");\n\n__webpack_require__(/*! ./_type/button_type_bordered.scss */ \"./src/blocks/button/_type/button_type_bordered.scss\");\n\n__webpack_require__(/*! ./_type/button_type_filled.scss */ \"./src/blocks/button/_type/button_type_filled.scss\");\n\n__webpack_require__(/*! ./_type/button_type_text.scss */ \"./src/blocks/button/_type/button_type_text.scss\");\n\n__webpack_require__(/*! ./_size/button_size_wide.scss */ \"./src/blocks/button/_size/button_size_wide.scss\");\n\n__webpack_require__(/*! ./_hovered/button_hovered.scss */ \"./src/blocks/button/_hovered/button_hovered.scss\");\n\n__webpack_require__(/*! ./_decoration/_enter-arrow/button_decoration_enter-arrow.scss */ \"./src/blocks/button/_decoration/_enter-arrow/button_decoration_enter-arrow.scss\");\n\n__webpack_require__(/*! ./_size/button_text-sized.scss */ \"./src/blocks/button/_size/button_text-sized.scss\");\n\n//# sourceURL=webpack:///./src/blocks/button/button.js?");

/***/ }),

/***/ "./src/blocks/button/button.scss":
/*!***************************************!*\
  !*** ./src/blocks/button/button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/button/button.scss?");

/***/ }),

/***/ "./src/blocks/checkbox/_rich/checkbox_rich.scss":
/*!******************************************************!*\
  !*** ./src/blocks/checkbox/_rich/checkbox_rich.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/checkbox/_rich/checkbox_rich.scss?");

/***/ }),

/***/ "./src/blocks/checkbox/_type/_default/checkbox_type_default.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/checkbox/_type/_default/checkbox_type_default.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = initDefaultCheckboxes;\n\n__webpack_require__(/*! ./checkbox_type_default.scss */ \"./src/blocks/checkbox/_type/_default/checkbox_type_default.scss\");\n\nvar _checkboxCommon = _interopRequireDefault(__webpack_require__(/*! ../../checkbox-common */ \"./src/blocks/checkbox/checkbox-common.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/* eslint-disable no-undef */\n// jQuery объявлена глобально вебпаком\n(0, _checkboxCommon[\"default\"])('.checkbox__hidden-button_type_default', {\n  icon: 'checkbox__button checkbox__button_type_default',\n  iconSpace: 'checkbox__icon-space checkbox__icon-space_type_default'\n});\n\nfunction initDefaultCheckboxes() {\n  var $defaultCheckboxes = $('.checkbox__button_type_default');\n  $defaultCheckboxes.text('check');\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/checkbox/_type/_default/checkbox_type_default.js?");

/***/ }),

/***/ "./src/blocks/checkbox/_type/_default/checkbox_type_default.scss":
/*!***********************************************************************!*\
  !*** ./src/blocks/checkbox/_type/_default/checkbox_type_default.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/checkbox/_type/_default/checkbox_type_default.scss?");

/***/ }),

/***/ "./src/blocks/checkbox/_type/_like/checkbox_type_like.js":
/*!***************************************************************!*\
  !*** ./src/blocks/checkbox/_type/_like/checkbox_type_like.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = initLikeCheckboxes;\n\n__webpack_require__(/*! ./checkbox_type_like.scss */ \"./src/blocks/checkbox/_type/_like/checkbox_type_like.scss\");\n\nvar _checkboxCommon = _interopRequireDefault(__webpack_require__(/*! ../../checkbox-common */ \"./src/blocks/checkbox/checkbox-common.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/* eslint-disable no-undef */\n// jQuery объявлена глобально вебпаком\nfunction initLikeCheckbox() {\n  var $likeLabel = $(this);\n  var $likeButton = $($likeLabel.find('.checkbox__hidden-button_type_like')[0]);\n  var checkboxRadioData = $likeButton.data('uiCheckboxradio');\n  console.log(\"before:\" + $likeLabel.attr('data-likes-count'));\n  (0, _checkboxCommon[\"default\"])($likeButton, {\n    icon: 'checkbox__button checkbox__button_type_like'\n  });\n  console.log(\"after:\" + $likeLabel.attr('data-likes-count'));\n  var gradientBorderElement = document.createElement('div');\n  gradientBorderElement.classList.add('checkbox__button-border_type_like');\n  $likeLabel.prepend(gradientBorderElement);\n\n  if (Number.isNaN(Number.parseInt($likeLabel.attr('data-likes-count'), 10))) {\n    return;\n  }\n\n  if (checkboxRadioData) return; // чтобы не навешивать лишних обработчиков\n\n  var likesCount = Number.parseInt($likeLabel.attr('data-likes-count'), 10);\n  $likeButton.change(function () {\n    console.log(likesCount);\n    var $likeText = $($likeLabel.find('.checkbox__text_type_like')[0]);\n    likesCount = $likeLabel.hasClass('ui-checkboxradio-checked') ? likesCount + 1 : likesCount - 1;\n    $likeText.text(likesCount);\n    $likeLabel.attr('data-likes-count', likesCount);\n  });\n}\n\nfunction initLikeCheckboxes() {\n  var $likeCheckboxes = $('.checkbox__label_type_like');\n  $likeCheckboxes.each(initLikeCheckbox);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/checkbox/_type/_like/checkbox_type_like.js?");

/***/ }),

/***/ "./src/blocks/checkbox/_type/_like/checkbox_type_like.scss":
/*!*****************************************************************!*\
  !*** ./src/blocks/checkbox/_type/_like/checkbox_type_like.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/checkbox/_type/_like/checkbox_type_like.scss?");

/***/ }),

/***/ "./src/blocks/checkbox/_type/_radio/checkbox_type_radio.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/checkbox/_type/_radio/checkbox_type_radio.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = initRadioCheckboxes;\n\n__webpack_require__(/*! ./checkbox_type_radio.scss */ \"./src/blocks/checkbox/_type/_radio/checkbox_type_radio.scss\");\n\nvar _checkboxCommon = _interopRequireDefault(__webpack_require__(/*! ../../checkbox-common */ \"./src/blocks/checkbox/checkbox-common.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initRadioCheckboxes() {\n  (0, _checkboxCommon[\"default\"])('.checkbox__hidden-button_type_radio', {\n    icon: 'checkbox__button checkbox__button_type_radio',\n    iconSpace: 'checkbox__icon-space checkbox__iconSpace_type_radio'\n  });\n}\n\n//# sourceURL=webpack:///./src/blocks/checkbox/_type/_radio/checkbox_type_radio.js?");

/***/ }),

/***/ "./src/blocks/checkbox/_type/_radio/checkbox_type_radio.scss":
/*!*******************************************************************!*\
  !*** ./src/blocks/checkbox/_type/_radio/checkbox_type_radio.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/checkbox/_type/_radio/checkbox_type_radio.scss?");

/***/ }),

/***/ "./src/blocks/checkbox/_type/_toggle/checkbox_type_toggle.js":
/*!*******************************************************************!*\
  !*** ./src/blocks/checkbox/_type/_toggle/checkbox_type_toggle.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = initToggleCheckboxes;\n\n__webpack_require__(/*! ./checkbox_type_toggle.scss */ \"./src/blocks/checkbox/_type/_toggle/checkbox_type_toggle.scss\");\n\nvar _checkboxCommon = _interopRequireDefault(__webpack_require__(/*! ../../checkbox-common */ \"./src/blocks/checkbox/checkbox-common.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction initToggleCheckboxes() {\n  (0, _checkboxCommon[\"default\"])('.checkbox__hidden-button_type_toggle', {\n    icon: 'checkbox__button checkbox__button_type_toggle',\n    iconSpace: 'checkbox__icon-space checkbox__icon-space_type_toggle'\n  });\n}\n\n//# sourceURL=webpack:///./src/blocks/checkbox/_type/_toggle/checkbox_type_toggle.js?");

/***/ }),

/***/ "./src/blocks/checkbox/_type/_toggle/checkbox_type_toggle.scss":
/*!*********************************************************************!*\
  !*** ./src/blocks/checkbox/_type/_toggle/checkbox_type_toggle.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/checkbox/_type/_toggle/checkbox_type_toggle.scss?");

/***/ }),

/***/ "./src/blocks/checkbox/checkbox-common.js":
/*!************************************************!*\
  !*** ./src/blocks/checkbox/checkbox-common.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = initCheckbox;\n\n/* eslint-disable no-undef */\n// jQuery объявлена глобально вебпаком\n\n/**\r\n * Инициирует чекбокс и возвращает его\r\n * @param jquerySelector можно передавать как селектор, так и JQ-объект\r\n * @param classes\r\n * @returns {*|jQuery}\r\n */\nfunction initCheckbox(jquerySelector, classes) {\n  var $hiddenInput = $(jquerySelector);\n\n  function initialization() {\n    var $singleInput = $(this);\n    if ($singleInput.data('uiCheckboxradio')) return; // чтобы не инициализировать лишнего\n\n    var checkbox = $singleInput.checkboxradio({\n      classes: {\n        'ui-checkboxradio-icon': classes.icon,\n        'ui-checkboxradio-icon-space': classes.iconSpace\n      }\n    });\n    var isChecked = $singleInput.attr('data-isChecked');\n\n    if (isChecked === 'true') {\n      checkbox.attr('checked', 'checked').change();\n    }\n  }\n\n  $hiddenInput.each(initialization);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/checkbox/checkbox-common.js?");

/***/ }),

/***/ "./src/blocks/checkbox/checkbox.js":
/*!*****************************************!*\
  !*** ./src/blocks/checkbox/checkbox.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/widgets/checkboxradio */ \"./node_modules/jquery-ui/ui/widgets/checkboxradio.js\");\n\n__webpack_require__(/*! ./checkbox.scss */ \"./src/blocks/checkbox/checkbox.scss\");\n\nvar _checkbox_type_default = _interopRequireDefault(__webpack_require__(/*! ./_type/_default/checkbox_type_default */ \"./src/blocks/checkbox/_type/_default/checkbox_type_default.js\"));\n\nvar _checkbox_type_radio = _interopRequireDefault(__webpack_require__(/*! ./_type/_radio/checkbox_type_radio */ \"./src/blocks/checkbox/_type/_radio/checkbox_type_radio.js\"));\n\nvar _checkbox_type_toggle = _interopRequireDefault(__webpack_require__(/*! ./_type/_toggle/checkbox_type_toggle */ \"./src/blocks/checkbox/_type/_toggle/checkbox_type_toggle.js\"));\n\nvar _checkbox_type_like = _interopRequireDefault(__webpack_require__(/*! ./_type/_like/checkbox_type_like */ \"./src/blocks/checkbox/_type/_like/checkbox_type_like.js\"));\n\n__webpack_require__(/*! ./_rich/checkbox_rich.scss */ \"./src/blocks/checkbox/_rich/checkbox_rich.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Checkbox = /*#__PURE__*/function () {\n  function Checkbox() {\n    _classCallCheck(this, Checkbox);\n  }\n\n  _createClass(Checkbox, null, [{\n    key: \"initDefault\",\n    value: function initDefault() {\n      (0, _checkbox_type_default[\"default\"])();\n    }\n  }, {\n    key: \"initLike\",\n    value: function initLike() {\n      (0, _checkbox_type_like[\"default\"])();\n    }\n  }, {\n    key: \"initRadio\",\n    value: function initRadio() {\n      (0, _checkbox_type_radio[\"default\"])();\n    }\n  }, {\n    key: \"initToggle\",\n    value: function initToggle() {\n      (0, _checkbox_type_toggle[\"default\"])();\n    }\n  }]);\n\n  return Checkbox;\n}();\n\nexports[\"default\"] = Checkbox;\n\n//# sourceURL=webpack:///./src/blocks/checkbox/checkbox.js?");

/***/ }),

/***/ "./src/blocks/checkbox/checkbox.scss":
/*!*******************************************!*\
  !*** ./src/blocks/checkbox/checkbox.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/checkbox/checkbox.scss?");

/***/ }),

/***/ "./src/blocks/comment/comment.js":
/*!***************************************!*\
  !*** ./src/blocks/comment/comment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./comment.scss */ \"./src/blocks/comment/comment.scss\");\n\nvar _checkbox = _interopRequireDefault(__webpack_require__(/*! ../checkbox/checkbox */ \"./src/blocks/checkbox/checkbox.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n_checkbox[\"default\"].initLike();\n\n//# sourceURL=webpack:///./src/blocks/comment/comment.js?");

/***/ }),

/***/ "./src/blocks/comment/comment.scss":
/*!*****************************************!*\
  !*** ./src/blocks/comment/comment.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/comment/comment.scss?");

/***/ }),

/***/ "./src/blocks/donut-chart/donut-chart.js":
/*!***********************************************!*\
  !*** ./src/blocks/donut-chart/donut-chart.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($, jQuery) {\n\n__webpack_require__(/*! ../text/text */ \"./src/blocks/text/text.js\");\n\n__webpack_require__(/*! ./donut-chart.scss */ \"./src/blocks/donut-chart/donut-chart.scss\");\n\nvar _functions = __webpack_require__(/*! ../../common/functions */ \"./src/common/functions.js\");\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar donutHTML = __webpack_require__(/*! ./donut-template.pug */ \"./src/blocks/donut-chart/donut-template.pug\");\n\nvar donutArcActiveClass = 'donut-chart__svg-arc_active';\n\nfunction getDataTextContainer($donutContainer) {\n  var $imageContainer = $donutContainer.find('.donut-chart__image-container');\n  return $imageContainer.find('.donut-chart__active-data');\n}\n\nfunction getArcStyle(arc, params) {\n  if (arc.$arc.hasClass(donutArcActiveClass)) {\n    return params.activeStyle;\n  }\n\n  return params.defaultStyle;\n}\n\nfunction getSecondAngle(firstAngle, arcValue, ratesCount) {\n  var arcValueProportion = arcValue / ratesCount;\n  var arcAngle = 360 * arcValueProportion;\n  return firstAngle + arcAngle;\n}\n\nfunction degreesToRads(degreeAngleValue) {\n  return degreeAngleValue / 180 * Math.PI;\n}\n/**\r\n * Получить прямоугольные координаты из полярных\r\n * @param length радиус окружности\r\n * @param angle угол поворота\r\n * @param x0 Х точки отсчёта\r\n * @param y0 У точки отсчёта\r\n * @returns {{x: number, y: number}}\r\n */\n\n\nfunction toCartesian(length, angle) {\n  var x0 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var y0 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var result = {\n    x: 0,\n    y: 0\n  };\n  var angleRads = degreesToRads(angle);\n  result.x = x0 + length * Math.cos(angleRads);\n  result.y = y0 - length * Math.sin(angleRads); // вычитаем, потому что на канвасе ось перевёрнута\n\n  return result;\n}\n/**\r\n * Формирует и возвращает массив данных, необходимых для отрисовки дуги\r\n * @param arc\r\n * @param style активная или обычная\r\n * @param ratesCount общее количество отзывов\r\n * @param canvasSize\r\n * @returns\r\n * {secondPoint, strokeWidth, firstPoint, arcRadius, endingAngle, startY, startX, arcAngle}\r\n */\n\n\nfunction getArcDrawData(arc, style, ratesCount, canvasSize) {\n  var startingAngle = arc.$arc.data('startingAngle');\n  var endingAngle = getSecondAngle(startingAngle, arc.value, ratesCount);\n  var startX = canvasSize.width / 2;\n  var startY = canvasSize.height / 2;\n  var strokeWidth = style.outerRadius - style.innerRadius;\n  var arcRadius = style.outerRadius / 2 - strokeWidth / 2;\n  var arcAngle = endingAngle - startingAngle;\n  var firstPoint = toCartesian(arcRadius, startingAngle, startX, startY);\n  var secondPoint = toCartesian(arcRadius, endingAngle, startX, startY);\n  return {\n    firstPoint: firstPoint,\n    secondPoint: secondPoint,\n    arcRadius: arcRadius,\n    strokeWidth: strokeWidth,\n    startX: startX,\n    startY: startY,\n    arcAngle: arcAngle,\n    endingAngle: endingAngle\n  };\n}\n\nfunction drawArc(arc, arcDrawData) {\n  var isLargeArc = 0;\n\n  if (arcDrawData.arcAngle > 180) {\n    isLargeArc = 1;\n  }\n\n  arc.$arc.attr('stroke-width', arcDrawData.strokeWidth);\n  arc.$arc.attr('d', \"M \".concat(arcDrawData.firstPoint.x, \",\").concat(arcDrawData.firstPoint.y, \"\\n  A \").concat(arcDrawData.arcRadius, \" \").concat(arcDrawData.arcRadius, \"\\n  0 \").concat(isLargeArc, \"\\n  0 \").concat(arcDrawData.secondPoint.x, \",\").concat(arcDrawData.secondPoint.y));\n}\n\nfunction initDrawArc(arc, params) {\n  var currentStyle = getArcStyle(arc, params);\n  var arcDrawData = getArcDrawData(arc, currentStyle, params.ratesCountWithGaps, {\n    width: params.canvasWidth,\n    height: params.canvasHeight\n  });\n  drawArc(arc, arcDrawData);\n  return arcDrawData;\n}\n\nfunction clearArcsActivity(arcsArray, currentArc, params) {\n  arcsArray.forEach(function (arc) {\n    if (arc === currentArc) {\n      return;\n    }\n\n    arc.$arc.removeClass(donutArcActiveClass);\n    initDrawArc(arc, params);\n  });\n}\n/**\r\n * Выводит в текстовое поле значение выбранной дуги и меняет его цвет\r\n * Если передать 0, то текст очистится\r\n * @param $dataTextContainer\r\n * @param value\r\n * @param color\r\n * @param overallCount\r\n */\n\n\nfunction changeDataText($dataTextContainer, value, color, overallCount) {\n  var $activeValue = $dataTextContainer.find('.donut-chart__active-value');\n  var $valueText = $dataTextContainer.find('.donut-chart__value-text');\n\n  if (value === 0) {\n    $activeValue.text(overallCount);\n    $activeValue.css('color', 'grey');\n    $valueText.text((0, _functions.ruDeclination)(overallCount, 'голос||а|ов'));\n    $valueText.css('color', 'grey');\n  } else {\n    $activeValue.text(value);\n    $activeValue.css('color', color);\n    $valueText.text((0, _functions.ruDeclination)(value, 'голос||а|ов'));\n    $valueText.css('color', color);\n  }\n}\n\nfunction addOnClickHandlerToArcs(arcsArray, params, $dataTextContainer) {\n  arcsArray.forEach(function (arc) {\n    arc.$arc.click(function () {\n      clearArcsActivity(arcsArray, arc, params);\n      arc.$arc.toggleClass(donutArcActiveClass);\n      initDrawArc(arc, params);\n\n      if (arc.$arc.hasClass(donutArcActiveClass)) {\n        changeDataText($dataTextContainer, arc.value, arc.firstColor);\n      } else {\n        changeDataText($dataTextContainer, 0, undefined, params.ratesCount);\n      }\n    });\n  });\n}\n\nfunction getRatesWithGaps(rates, gapAngle, arcsCount) {\n  return rates / (1 - gapAngle * arcsCount / 360);\n}\n\nfunction getArcsAndRatesCount(arcsArray) {\n  var result = {\n    arcs: 0,\n    rates: 0\n  };\n  arcsArray.forEach(function (arc) {\n    if (arc.value === 0) {\n      return;\n    }\n\n    result.rates += arc.value;\n    result.arcs += 1;\n  });\n  return result;\n}\n\nfunction getMiddleNum(firstNum, secondNum) {\n  return (firstNum + secondNum) / 2;\n}\n\nfunction getAngleFromArcLength(arcLength, radius) {\n  return 180 * arcLength / (Math.PI * radius);\n}\n\nfunction getAdditionalParams(params) {\n  var additionalParams = {};\n  var arcDefaultRadius = getMiddleNum(params.defaultStyle.outerRadius, params.defaultStyle.innerRadius);\n  var arcsAndRatesCount = getArcsAndRatesCount(params.data);\n  additionalParams.canvasWidth = params.activeStyle.outerRadius;\n  additionalParams.canvasHeight = params.activeStyle.outerRadius;\n  additionalParams.gapsAngle = getAngleFromArcLength(params.arcsGap, arcDefaultRadius);\n  additionalParams.startingAngle = 90 + additionalParams.gapsAngle / 2;\n  additionalParams.notZeroArcs = arcsAndRatesCount.arcs;\n  additionalParams.ratesCount = arcsAndRatesCount.rates;\n  additionalParams.ratesCountWithGaps = getRatesWithGaps(arcsAndRatesCount.rates, additionalParams.gapsAngle, arcsAndRatesCount.arcs);\n  return additionalParams;\n}\n\nfunction drawArcsOnSVGCanvas(arcsArray, params, $dataTextContainer) {\n  arcsArray[0].$arc.data('startingAngle', params.startingAngle);\n  var activeArc = null;\n  arcsArray.forEach(function (arc, i) {\n    if (arc.value === 0) {\n      if (i + 1 < arcsArray.length) {\n        arcsArray[i + 1].$arc.data('startingAngle', params.startingAngle);\n      }\n\n      return;\n    } // добавляем класс, если в параметрах передано, что дуга активная\n\n\n    if (arcsArray[i].isActive) {\n      arc.$arc.addClass(donutArcActiveClass);\n      activeArc = arc;\n    } // узнаём данные о нарисованной дуге\n\n\n    var arcDrawData = initDrawArc(arcsArray[i], params);\n\n    if (i + 1 < arcsArray.length) {\n      // записываем в следующую дугу угол, с которого она должна начинаться\n      arcsArray[i + 1].$arc.data('startingAngle', arcDrawData.endingAngle + params.gapsAngle);\n    }\n  });\n\n  if (activeArc.$arc.hasClass(donutArcActiveClass)) {\n    changeDataText($dataTextContainer, activeArc.value, activeArc.firstColor);\n  } else {\n    changeDataText($dataTextContainer, 0);\n  }\n}\n\nfunction addJQLinksToArcs(arcsObjArray, $arcs, $legendItems) {\n  arcsObjArray.forEach(function (arcObj, i) {\n    arcObj.$arc = $($arcs[i]);\n    arcObj.$legend = $($legendItems[i]);\n  });\n}\n\nfunction createDonut() {\n  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {\n    data: [{\n      caption: '1',\n      value: 1,\n      background: 'red'\n    }, {\n      caption: '2',\n      value: 2,\n      background: 'green'\n    }, {\n      caption: '3',\n      value: 3,\n      background: 'blue'\n    }, {\n      caption: '4',\n      value: 4,\n      background: 'black'\n    }],\n    defaultStyle: {\n      outerRadius: 100,\n      innerRadius: 95\n    },\n    activeStyle: {\n      outerRadius: 105,\n      innerRadius: 90\n    },\n    arcsGap: 5\n  };\n  var $donutContainer = $(this);\n  var arcsData = (0, _functions.copyArrayOfObjects)(params.data);\n  $donutContainer.html(donutHTML({\n    arcs: arcsData\n  }));\n  var $dataTextContainer = getDataTextContainer($donutContainer);\n  var $donutCanvas = $donutContainer.find('.donut-chart__svg');\n  var $donutArcs = $donutCanvas.find('.donut-chart__svg-arc');\n  var $donutLegend = $donutContainer.find('.donut-chart__legend');\n  var $legendItems = $donutLegend.find('.donut-chart__legend-item');\n  var additionalParams = getAdditionalParams(params);\n\n  var fullParams = _objectSpread({}, params, {}, additionalParams);\n\n  addJQLinksToArcs(arcsData, $donutArcs, $legendItems);\n  drawArcsOnSVGCanvas(arcsData, fullParams, $dataTextContainer);\n  $donutCanvas.attr('viewBox', \"0 0 \".concat(fullParams.canvasWidth, \" \").concat(fullParams.canvasHeight));\n  addOnClickHandlerToArcs(arcsData, fullParams, $dataTextContainer);\n}\n\njQuery.fn.extend({\n  donutChart: createDonut\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\"), __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/donut-chart/donut-chart.js?");

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

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (arcs) {pug_html = pug_html + \"\\u003Cdiv class=\\\"donut-chart__image-container\\\"\\u003E\\u003Csvg class=\\\"donut-chart__svg\\\" width=\\\"200\\\" height=\\\"200\\\" preserveAspectRatio=\\\"xMidYMid meet\\\"\\u003E\\u003Cdefs\\u003E\";\n// iterate arcs\n;(function(){\n  var $$obj = arcs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var arc = $$obj[index];\npug_html = pug_html + \"\\u003ClinearGradient\" + (pug.attr(\"id\", `grad${index}`, true, true)+\" x1=\\\"0%\\\" y1=\\\"0%\\\" x2=\\\"0%\\\" y2=\\\"100%\\\"\") + \"\\u003E\\u003Cstop\" + (pug.attr(\"stop-color\", arc.firstColor, true, true)) + \"\\u003E\\u003C\\u002Fstop\\u003E\\u003Cstop\" + (\" offset=\\\"100%\\\"\"+pug.attr(\"stop-color\", arc.secondColor, true, true)) + \"\\u003E\\u003C\\u002Fstop\\u003E\\u003C\\u002FlinearGradient\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var arc = $$obj[index];\npug_html = pug_html + \"\\u003ClinearGradient\" + (pug.attr(\"id\", `grad${index}`, true, true)+\" x1=\\\"0%\\\" y1=\\\"0%\\\" x2=\\\"0%\\\" y2=\\\"100%\\\"\") + \"\\u003E\\u003Cstop\" + (pug.attr(\"stop-color\", arc.firstColor, true, true)) + \"\\u003E\\u003C\\u002Fstop\\u003E\\u003Cstop\" + (\" offset=\\\"100%\\\"\"+pug.attr(\"stop-color\", arc.secondColor, true, true)) + \"\\u003E\\u003C\\u002Fstop\\u003E\\u003C\\u002FlinearGradient\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fdefs\\u003E\";\n// iterate arcs\n;(function(){\n  var $$obj = arcs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var arc = $$obj[index];\npug_html = pug_html + \"\\u003Cpath\" + (\" class=\\\"donut-chart__svg-arc\\\"\"+pug.attr(\"stroke\", `url(#grad${index})`, true, true)+\" fill=\\\"transparent\\\"\") + \"\\u003E\\u003C\\u002Fpath\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var arc = $$obj[index];\npug_html = pug_html + \"\\u003Cpath\" + (\" class=\\\"donut-chart__svg-arc\\\"\"+pug.attr(\"stroke\", `url(#grad${index})`, true, true)+\" fill=\\\"transparent\\\"\") + \"\\u003E\\u003C\\u002Fpath\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fsvg\\u003E\\u003Cdiv class=\\\"donut-chart__active-data\\\"\\u003E\\u003Cspan class=\\\"donut-chart__active-value text_type_widget-title\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"donut-chart__value-text text_type_widget-title\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cul class=\\\"donut-chart__legend\\\"\\u003E\";\n// iterate arcs\n;(function(){\n  var $$obj = arcs;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {\n        var arc = $$obj[pug_index2];\npug_html = pug_html + \"\\u003Cli\" + (\" class=\\\"donut-chart__legend-item text_type_regular\\\"\"+pug.attr(\"style\", pug.style(`--background: linear-gradient(180deg, ${arc.firstColor} 0%, ${arc.secondColor} 100%);`), true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = arc.caption) ? \"\" : pug_interp)) + \"\\u003C\\u002Fli\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index2 in $$obj) {\n      $$l++;\n      var arc = $$obj[pug_index2];\npug_html = pug_html + \"\\u003Cli\" + (\" class=\\\"donut-chart__legend-item text_type_regular\\\"\"+pug.attr(\"style\", pug.style(`--background: linear-gradient(180deg, ${arc.firstColor} 0%, ${arc.secondColor} 100%);`), true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = arc.caption) ? \"\" : pug_interp)) + \"\\u003C\\u002Fli\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Ful\\u003E\";}.call(this,\"arcs\" in locals_for_with?locals_for_with.arcs:typeof arcs!==\"undefined\"?arcs:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/blocks/donut-chart/donut-template.pug?");

/***/ }),

/***/ "./src/blocks/input/_decoration/_enter-arrow/input_decoration_enter-arrow.scss":
/*!*************************************************************************************!*\
  !*** ./src/blocks/input/_decoration/_enter-arrow/input_decoration_enter-arrow.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_decoration/_enter-arrow/input_decoration_enter-arrow.scss?");

/***/ }),

/***/ "./src/blocks/input/_decoration/_expand-arrow/input_decoration_expand-arrow.scss":
/*!***************************************************************************************!*\
  !*** ./src/blocks/input/_decoration/_expand-arrow/input_decoration_expand-arrow.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_decoration/_expand-arrow/input_decoration_expand-arrow.scss?");

/***/ }),

/***/ "./src/blocks/input/_focused/input_focused.scss":
/*!******************************************************!*\
  !*** ./src/blocks/input/_focused/input_focused.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_focused/input_focused.scss?");

/***/ }),

/***/ "./src/blocks/input/_type/_datepicker/_inline/datepicker_inline.scss":
/*!***************************************************************************!*\
  !*** ./src/blocks/input/_type/_datepicker/_inline/datepicker_inline.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_datepicker/_inline/datepicker_inline.scss?");

/***/ }),

/***/ "./src/blocks/input/_type/_datepicker/input_type_datepicker.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/input/_type/_datepicker/input_type_datepicker.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.parseAttrToDate = parseAttrToDate;\nexports.setDates = setDates;\nexports.initDatepickerInput = initDatepickerInput;\nexports.initDatepickerInputs = initDatepickerInputs;\n\n__webpack_require__(/*! air-datepicker */ \"./node_modules/air-datepicker/src/js/air-datepicker.js\");\n\n__webpack_require__(/*! ../../../../assets/images/arrow_back.svg */ \"./src/assets/images/arrow_back.svg\");\n\n__webpack_require__(/*! ../../../../assets/images/expand_more.svg */ \"./src/assets/images/expand_more.svg\");\n\n/* eslint-disable no-undef */\n// jquery объявлена глобально вебпаком\nvar confirmButton = '<div class=\"button button_type_text input_type_datepicker__confirm-button\">' + '<button class=\"button__control text_type_label-CTA datepicker--button\" data-action=\"hide\">Применить' + '</button><div class=\"button__decoration material-icons\"></div></div>';\nvar clearButton = '<div class=\"button button_type_text button_hovered input_type_datepicker__clear-button\">' + '<button class=\"button__control text_type_label-CTA datepicker--button\" data-action=\"clear\">Очистить' + '</button><div class=\"button__decoration material-icons\"></div></div>';\n\nfunction parseAttrToDate(attrDate) {\n  var dateParts = attrDate.split('.');\n  var day = dateParts[0];\n  var month = dateParts[1];\n  var year = dateParts[2];\n  var dateString = \"\".concat(year, \"-\").concat(month, \"-\").concat(day);\n  return new Date(dateString);\n}\n\nfunction getInitDates($datepickerControl) {\n  var dates = [];\n\n  if ($datepickerControl.attr('data-firstdate')) {\n    dates.push(parseAttrToDate($datepickerControl.attr('data-firstDate')));\n  }\n\n  if ($datepickerControl.attr('data-seconddate')) {\n    dates.push(parseAttrToDate($datepickerControl.attr('data-secondDate')));\n  }\n\n  return dates.length === 0 ? undefined : dates;\n}\n\nfunction addClickHandler(arrowElement, expandableElement, controlElement) {\n  $(controlElement).click(function () {\n    if ($(arrowElement).hasClass('expanded')) {\n      expandableElement.hide();\n    } else {\n      expandableElement.show();\n    }\n  });\n}\n\nfunction disableLabelClicks(event) {\n  // при клике на заголовок/стрелку итак происходит анфокус и календарь прячется,\n  // лишний клик не нужен\n  event.preventDefault();\n}\n\nfunction setExpandArrowEventHandlers($expandArrow, $inputControl, $ownerLabel) {\n  var expandableElement = null;\n  $inputControl.each(function () {\n    expandableElement = $inputControl.data('datepicker');\n    expandableElement.update({\n      onHide: function onHide(inst, animationCompleted) {\n        if (!animationCompleted) {\n          $expandArrow.text('expand_more');\n          return;\n        }\n\n        $($expandArrow).removeClass('expanded'); // чтобы лейбловые прокликивания снова заработали\n        // нужно показывать календарь при клике на что-то кроме инпута\n\n        $($ownerLabel).unbind('click', disableLabelClicks);\n      },\n      onShow: function onShow(inst, animationCompleted) {\n        if (!animationCompleted) {\n          $expandArrow.text('expand_less');\n          return;\n        }\n\n        $expandArrow.addClass('expanded');\n        $ownerLabel.click(disableLabelClicks);\n      },\n      todayButton: false\n    });\n  });\n  return expandableElement;\n}\n\nfunction initExpandableEvents($expandArrow, $control) {\n  var $ownerLabel = $(this).parent();\n  var expandableElement = setExpandArrowEventHandlers($expandArrow, $control, $ownerLabel);\n\n  if (expandableElement) {\n    addClickHandler($expandArrow, expandableElement, $control, $ownerLabel);\n  }\n}\n/**\r\n * Устанавливает даты в первый календарь\r\n * (второй подцепляет это значение в логике two-calendar-range-picker)\r\n * Если даты не переданы, используется сегодняшняя\r\n * @param $datepickerInput\r\n * @param dates\r\n */\n\n\nfunction setDates($datepickerInput, dates) {\n  if (!dates) {\n    return;\n  }\n\n  var datepickerData = $datepickerInput.data('datepicker');\n  datepickerData.selectDate(dates);\n}\n\nfunction initDatepickerInput(index, input) {\n  var $input = $(input);\n  var $inputControl = $input.find('.input__control_type_datepicker');\n  var isInline = $input.hasClass('datepicker_inline');\n  var datepicker = $inputControl.datepicker({\n    range: true,\n    inline: isInline,\n    dateFormat: 'd M',\n    multipleDatesSeparator: ' - ',\n    todayButton: true,\n    showEvent: '',\n    position: 'bottom center',\n    offset: 5,\n    navTitles: {\n      days: '<span class=\"text_type_item-title\">MM yyyy</span>',\n      months: '<span class=\"text_type_item-title\">yyyy</span>',\n      years: '<span class=\"text_type_item-title\">yyyy1 - yyyy2</span>'\n    },\n    prevHtml: '<img src=\"./images/arrow_back.svg\" alt=\"назад\"\">',\n    nextHtml: '<img src=\"./images/arrow_back.svg\" alt=\"назад\" style=\"transform: scale(-1, 1)\">',\n    onSelect: function onSelect(formattedDate) {\n      $inputControl.val(formattedDate.toLowerCase());\n    }\n  }).data('datepicker'); // замена кнопок на свои в элементе календаря\n\n  datepicker.$datepicker.find('.datepicker--button[data-action=\"today\"]').remove();\n  datepicker.$datepicker.find('.datepicker--buttons').append(clearButton);\n  datepicker.$datepicker.find('.datepicker--buttons').append(confirmButton); // установка ивентов отображения/исчезновения\n\n  var $expandArrow = $($input.find('.input__arrow_decoration_expand-arrow')[0]);\n  initExpandableEvents($expandArrow, $inputControl);\n  var initDates = getInitDates($inputControl);\n  datepicker.selectDate(initDates);\n}\n\nfunction initDatepickerInputs() {\n  var $datepickers = $('.input_type_datepicker');\n  $datepickers.each(initDatepickerInput);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_datepicker/input_type_datepicker.js?");

/***/ }),

/***/ "./src/blocks/input/_type/_datepicker/input_type_datepicker.scss":
/*!***********************************************************************!*\
  !*** ./src/blocks/input/_type/_datepicker/input_type_datepicker.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_datepicker/input_type_datepicker.scss?");

/***/ }),

/***/ "./src/blocks/input/_type/_dropdown/input__list_type_dropdown.js":
/*!***********************************************************************!*\
  !*** ./src/blocks/input/_type/_dropdown/input__list_type_dropdown.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.initDropdownInput = initDropdownInput;\nexports.initDropdowns = initDropdowns;\n\n__webpack_require__(/*! jquery-ui/ui/effects/effect-fade */ \"./node_modules/jquery-ui/ui/effects/effect-fade.js\");\n\nvar _functions = __webpack_require__(/*! ../../../../common/functions */ \"./src/common/functions.js\");\n\nvar _input_type_spinner = __webpack_require__(/*! ../_spinner/input_type_spinner */ \"./src/blocks/input/_type/_spinner/input_type_spinner.js\");\n\n/* eslint-disable no-undef */\n// jquery объявлена глобально вебпаком\n\n/**\r\n * Функция для получения пар имя-значение со всех переданных спиннеров\r\n *\r\n * @param spinnerElements   массив спиннеров\r\n * @returns {Array}\r\n */\nfunction getCurrentNamesValues(spinnerElements) {\n  var result = [];\n\n  function getNameValue() {\n    result.push({\n      name: $(this).attr('data-name'),\n      value: parseInt($(this).val(), 10)\n    });\n  }\n\n  $(spinnerElements).each(getNameValue);\n  return result;\n}\n\nvar typeRooms = 'rooms';\nvar typeCustomers = 'customers';\n\nfunction getDropdownType(dropdown) {\n  var dropdownType = {};\n\n  if ($(dropdown).hasClass('input__dropdown-list-wrapper_unified')) {\n    dropdownType.isUnified = true;\n  }\n\n  if ($(dropdown).hasClass('input__dropdown-list-wrapper_rooms')) {\n    dropdownType.name = typeRooms;\n  } else if ($(dropdown).hasClass('input__dropdown-list-wrapper_customers')) {\n    dropdownType.name = typeCustomers;\n  } else return false;\n\n  return dropdownType;\n}\n\nfunction selectNiceWord(itemsCount, itemName) {\n  var result = '';\n\n  switch (itemName.toLowerCase()) {\n    case 'спальни':\n      result = (0, _functions.ruDeclination)(itemsCount, 'спал|ьня|ьни|ен');\n      break;\n\n    case 'кровати':\n      result = (0, _functions.ruDeclination)(itemsCount, 'кроват|ь|и|ей');\n      break;\n\n    case 'ванные комнаты':\n      result = \"\".concat((0, _functions.ruDeclination)(itemsCount, 'ванн|ая|ых|ых'), \" \").concat((0, _functions.ruDeclination)(itemsCount, 'комнат|а|ы|'));\n      break;\n\n    case 'гости':\n      result = (0, _functions.ruDeclination)(itemsCount, 'гост|ь|я|ей');\n      break;\n\n    case 'младенцы':\n      result = (0, _functions.ruDeclination)(itemsCount, 'младен|ец|ца|цев');\n      break;\n\n    default:\n  }\n\n  return result;\n}\n\nfunction areAllValuesZero(namesValues) {\n  return !namesValues.some(function (nameValue) {\n    return parseInt(nameValue.value, 10) !== 0;\n  });\n}\n\nfunction createUnifiedString(namesValues, declinationsString) {\n  var sum = namesValues.reduce(function (accumulator, currentValue) {\n    return accumulator + parseInt(currentValue.value, 10);\n  }, 0);\n  return \"\".concat(sum, \" \").concat((0, _functions.ruDeclination)(sum, declinationsString));\n}\n\nfunction createSeparateRoomsString(namesValues) {\n  var result = namesValues.reduce(function (accumulator, currentNameValue) {\n    return \"\".concat(accumulator, \" \") + \"\".concat(currentNameValue.value, \" \") + \"\".concat(selectNiceWord(currentNameValue.value, currentNameValue.name), \", \");\n  }, '');\n  result = result.substring(0, result.length - 2).trim();\n  return result;\n}\n\nfunction createRoomsString(namesValues, isUnified) {\n  var result;\n\n  if (isUnified) {\n    result = createUnifiedString(namesValues, 'комнаты');\n  } else {\n    result = createSeparateRoomsString(namesValues);\n  }\n\n  return result;\n}\n\nfunction createCustomersWithInfantsString(namesValues) {\n  var infants = 0;\n  var sum = 0;\n  namesValues.forEach(function (nameValue) {\n    if (nameValue.name.toLowerCase() === 'младенцы') {\n      infants = nameValue.value;\n      return;\n    }\n\n    sum += parseInt(nameValue.value, 10);\n  });\n  return \"\".concat(sum, \" \").concat(selectNiceWord(sum, 'гости'), \", \") + \"\".concat(infants, \" \").concat(selectNiceWord(infants, 'младенцы'));\n}\n\nfunction createCustomersString(namesValues, isUnified) {\n  var resultString;\n\n  if (isUnified) {\n    resultString = createUnifiedString(namesValues, 'гост|ь|я|ей');\n  } else {\n    resultString = createCustomersWithInfantsString(namesValues);\n  }\n\n  return resultString;\n}\n/**\r\n * Создание строки, содержащей суммарную информацию по дропдауну.\r\n * Формат строки зависит от типа дропдауна\r\n *\r\n * @param namesValues   массив пар имя-значение, из которых составляется строка\r\n * @param dropdownType  тип дропдауна\r\n * @returns {string}    результирующая строка\r\n */\n\n\nfunction createInputText(namesValues, dropdownType) {\n  var result = '';\n  if (areAllValuesZero(namesValues)) return result;\n\n  switch (dropdownType.name) {\n    case typeRooms:\n      {\n        result = createRoomsString(namesValues, dropdownType.isUnified);\n        break;\n      }\n\n    case typeCustomers:\n      {\n        result = createCustomersString(namesValues, dropdownType.isUnified);\n        break;\n      }\n\n    default:\n      {\n        var sum = namesValues.reduce(function (accumulator, nameValue) {\n          return accumulator + parseInt(nameValue.value, 10);\n        }, 0);\n        result += \"\".concat(sum, \" \\u0447\\u0435\\u0433\\u043E-\\u0442\\u043E\");\n        break;\n      }\n  }\n\n  return result;\n}\n\nfunction changeInputText(dropdown, namesValues, input) {\n  var dropdownType = getDropdownType(dropdown);\n  var newInputText = createInputText(namesValues, dropdownType);\n  $(input).val(newInputText);\n}\n/**\r\n * Поэлементное сравнение двух массивов имя-значение по значениям.\r\n * @param namesValues1  первый массив\r\n * @param namesValues2  второй массив\r\n * @returns {boolean}   одинаковы ли они\r\n */\n\n\nfunction areValuesEqual(namesValues1, namesValues2) {\n  return !namesValues2.some(function (nameValue, index) {\n    return namesValues1[index].value !== nameValue.value;\n  });\n}\n\nfunction manageControlsVisibility(oldNamesValues, namesValues, clearButton, confirmButton, buttonsContainer, areControlsEnabled, areValuesConfirmed) {\n  var clearVisibleClass = 'input__clear-button_visible';\n  var confirmVisibleClass = 'input__confirm-button_visible';\n  var containerVisibleClass = 'input__control-buttons-container_visible';\n  var areEmpty = areAllValuesZero(namesValues);\n\n  if (areEmpty) {\n    $(clearButton).removeClass(clearVisibleClass);\n  } else {\n    $(clearButton).addClass(clearVisibleClass);\n  }\n\n  var areEqual = areValuesEqual(namesValues, oldNamesValues);\n\n  if (areEqual && areValuesConfirmed) {\n    $(confirmButton).removeClass(confirmVisibleClass);\n  } else {\n    $(confirmButton).addClass(confirmVisibleClass);\n  }\n\n  var hasClearVisibleClass = $(clearButton).hasClass(clearVisibleClass);\n  var hasConfirmVisibleClass = $(confirmButton).hasClass(confirmVisibleClass);\n  var areControlsVisible = hasClearVisibleClass || hasConfirmVisibleClass;\n\n  if (areControlsVisible && areControlsEnabled) {\n    $(buttonsContainer).addClass(containerVisibleClass);\n  } else {\n    $(buttonsContainer).removeClass(containerVisibleClass);\n  }\n}\n\nfunction setSpinnerValues(namesValuesToSet, namesValuesToChange, $spinners, options) {\n  $spinners.each(function (i) {\n    var $currentSpinner = $($spinners[i]);\n\n    if (options.includes('array')) {\n      namesValuesToChange[i].value = namesValuesToSet[i].value;\n      $currentSpinner.spinner('value', namesValuesToSet[i].value);\n      (0, _input_type_spinner.disableButtonsAtExtremum)($currentSpinner, namesValuesToSet[i].value);\n    }\n\n    if (options.includes('value')) {\n      namesValuesToChange[i].value = namesValuesToSet;\n      $currentSpinner.spinner('value', namesValuesToSet);\n      (0, _input_type_spinner.disableButtonsAtExtremum)($currentSpinner, namesValuesToSet);\n    }\n  });\n}\n\nfunction clearSpinnersValues(namesValues, spinners) {\n  setSpinnerValues(0, namesValues, spinners, ['value']);\n}\n\nfunction dropdownOnChange(oldNamesValues, namesValues, spinners, clearButton, confirmButton, buttonsContainer, dropdown, input, areControlsEnabled, areValuesConfirmed) {\n  setSpinnerValues(oldNamesValues, namesValues, spinners, ['array']);\n  manageControlsVisibility(oldNamesValues, namesValues, clearButton, confirmButton, buttonsContainer, areControlsEnabled, areValuesConfirmed);\n  changeInputText(dropdown, namesValues, input);\n}\n\nfunction getInitialNamesValues($spinnerElements) {\n  var result = [];\n\n  function getNameValueFromSpinner() {\n    var $spinnerElement = $(this);\n    result.push({\n      name: $spinnerElement.attr('data-name'),\n      value: parseInt($spinnerElement.attr('value') ? $spinnerElement.attr('value') : 0, 10)\n    });\n  }\n\n  $spinnerElements.each(getNameValueFromSpinner);\n  return result;\n}\n\nvar dropdownVisibleClass = 'input__dropdown-list-wrapper_visible';\n\nfunction initDropdownInput(index, rootElement) {\n  var $inputWrapper = $(rootElement);\n  var $dropdown = $inputWrapper.children('.input__dropdown-list-wrapper_type_dropdown');\n  var $control = $inputWrapper.find('.input__control_type_dropdown');\n  var $spinnerValueElements = $inputWrapper.find('.input__value_type_spinner');\n  var $controlButtonsContainer = $inputWrapper.find('.input__control-buttons-container');\n  var $clearButton = $inputWrapper.find('.input__clear-button');\n  var $confirmButton = $inputWrapper.find('.input__confirm-button');\n  var areValuesConfirmed = !$inputWrapper.hasClass('input_type_dropdown-unaccepted');\n  var isOpened = $inputWrapper.hasClass('input_type_dropdown-opened');\n\n  if (isOpened) {\n    $dropdown.toggle('fade');\n    $dropdown.toggleClass(dropdownVisibleClass);\n  }\n\n  var areControlsEnabled = !$inputWrapper.hasClass('input_type_dropdown-pure');\n  var spinnersNameValue = getInitialNamesValues($spinnerValueElements);\n  var oldSpinnersNameValue = getInitialNamesValues($spinnerValueElements);\n  changeInputText($dropdown, spinnersNameValue, $control);\n  manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue, $clearButton, $confirmButton, $controlButtonsContainer, areControlsEnabled, areValuesConfirmed);\n\n  function handleClearButtonClick() {\n    clearSpinnersValues(spinnersNameValue, $spinnerValueElements);\n    manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue, $clearButton, $confirmButton, $controlButtonsContainer, areControlsEnabled, areValuesConfirmed);\n    changeInputText($dropdown, spinnersNameValue, $control);\n  }\n\n  $clearButton.click(handleClearButtonClick);\n\n  function handleConfirmButtonClick() {\n    if (!isOpened) {\n      $control.removeClass('input__control_focused');\n      $dropdown.toggle('fade');\n      $dropdown.toggleClass(dropdownVisibleClass);\n    }\n\n    areValuesConfirmed = true;\n    oldSpinnersNameValue = getCurrentNamesValues($spinnerValueElements);\n    manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue, $clearButton, $confirmButton, $controlButtonsContainer, areControlsEnabled, areValuesConfirmed);\n  }\n\n  $confirmButton.click(handleConfirmButtonClick); // on spin\n\n  $spinnerValueElements.each(function (i) {\n    var $spinner = $($spinnerValueElements[i]);\n\n    function handleSpin(event, ui) {\n      spinnersNameValue[$spinner.attr('data-index')].value = ui.value;\n      changeInputText($dropdown, spinnersNameValue, $control);\n      manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue, $clearButton, $confirmButton, $controlButtonsContainer, areControlsEnabled, areValuesConfirmed);\n    }\n\n    $spinner.on('spin', handleSpin);\n  });\n  $dropdown.position({\n    my: 'center',\n    at: 'center',\n    of: $control\n  });\n  var clickedElement;\n  $(document).click(function (event) {\n    clickedElement = $(event.target); // если клик происходит не в дропдауне\n\n    if (!$.contains($inputWrapper.get(0), clickedElement.get(0))) {\n      // и дропдаун отображается\n      if ($dropdown.hasClass(dropdownVisibleClass)) {\n        if (!isOpened) {\n          $dropdown.toggle('fade');\n          $dropdown.toggleClass(dropdownVisibleClass);\n          $control.removeClass('input__control_focused');\n        }\n\n        setSpinnerValues(oldSpinnersNameValue, spinnersNameValue, $spinnerValueElements, ['array']);\n        manageControlsVisibility(oldSpinnersNameValue, spinnersNameValue, $clearButton, $confirmButton, $controlButtonsContainer, areControlsEnabled, areValuesConfirmed);\n        changeInputText($dropdown, spinnersNameValue, $control);\n      }\n    }\n  });\n  $control.click(function () {\n    if (!isOpened) {\n      console.log('hey');\n      $control.toggleClass('input__control_focused');\n      $dropdown.toggle('fade');\n      $dropdown.toggleClass(dropdownVisibleClass);\n    }\n\n    if (!$dropdown.hasClass(dropdownVisibleClass)) {\n      dropdownOnChange(oldSpinnersNameValue, spinnersNameValue, $spinnerValueElements, $clearButton, $confirmButton, $controlButtonsContainer, $dropdown, $control, areControlsEnabled, areValuesConfirmed);\n    }\n  });\n}\n\nfunction initDropdowns() {\n  var $dropdowns = $('.input_type_dropdown');\n  $dropdowns.each(initDropdownInput);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_dropdown/input__list_type_dropdown.js?");

/***/ }),

/***/ "./src/blocks/input/_type/_dropdown/input__list_type_dropdown.scss":
/*!*************************************************************************!*\
  !*** ./src/blocks/input/_type/_dropdown/input__list_type_dropdown.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_dropdown/input__list_type_dropdown.scss?");

/***/ }),

/***/ "./src/blocks/input/_type/_masked/input_masked.js":
/*!********************************************************!*\
  !*** ./src/blocks/input/_type/_masked/input_masked.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(/*! ../../../../../vendor/jquery.maskedinput/src/jquery.maskedinput */ \"./vendor/jquery.maskedinput/src/jquery.maskedinput.js\");\n\n/* eslint-disable no-undef */\n// jquery объявлена глобально вебпаком\nvar $document = $(document);\n$document.ready(function () {\n  $.mask.definitions.m = '[012]';\n  $.mask.definitions.d = '[0123]';\n  var $maskedInput = $('.input__control_masked');\n  $maskedInput.mask('99.99.9999', {\n    placeholder: 'ДД.ММ.ГГГГ',\n    autoclear: false\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_masked/input_masked.js?");

/***/ }),

/***/ "./src/blocks/input/_type/_masked/input_masked.scss":
/*!**********************************************************!*\
  !*** ./src/blocks/input/_type/_masked/input_masked.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_masked/input_masked.scss?");

/***/ }),

/***/ "./src/blocks/input/_type/_spinner/input_type_spinner.js":
/*!***************************************************************!*\
  !*** ./src/blocks/input/_type/_spinner/input_type_spinner.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.disableButtonsAtExtremum = disableButtonsAtExtremum;\nexports.increaseButtonClasses = exports.decreaseButtonClasses = void 0;\n\n__webpack_require__(/*! jquery-ui/ui/widgets/spinner */ \"./node_modules/jquery-ui/ui/widgets/spinner.js\");\n\n/* eslint-disable no-undef,no-underscore-dangle */\n// jquery импортирована вебпаком, функции с подчеркиванием - часть плагина\nvar decreaseButtonClasses = 'input__dropdown-decrease_type_dropdown input__button_type_spinner ui-spinner-button ui-spinner-down';\nexports.decreaseButtonClasses = decreaseButtonClasses;\nvar increaseButtonClasses = 'input__dropdown-increase_type_dropdown input__button_type_spinner ui-spinner-button ui-spinner-up'; // морф, чтобы кнопки были по бокам\n\nexports.increaseButtonClasses = increaseButtonClasses;\n$.widget('ui.spinner', $.ui.spinner, {\n  _enhance: function _enhance() {\n    this.uiSpinner = this.element.attr('autocomplete', 'off').wrap(this._uiSpinnerHtml()).parent() // Add buttons\n    .prepend(this._buttonHtml()[0]).append(this._buttonHtml()[1]);\n  },\n  _buttonHtml: function _buttonHtml() {\n    return [\"<button class=\\\"\".concat(decreaseButtonClasses, \"\\\">-</button>\"), \"<button class=\\\"\".concat(increaseButtonClasses, \"\\\">+</button>\")];\n  },\n  // обёртка своя есть\n  _uiSpinnerHtml: function _uiSpinnerHtml() {\n    return '';\n  }\n});\n\nfunction disableButtonsAtExtremum($spinner, currentValue) {\n  var disabledButtonClass = 'input__button_disabled';\n  var min = $spinner.attr('data-min');\n  var max = $spinner.attr('data-max');\n  var $decreaseButton = $spinner.siblings('.input__dropdown-decrease_type_dropdown');\n  var $increaseButton = $spinner.siblings('.input__dropdown-increase_type_dropdown');\n\n  if (currentValue <= min) {\n    $decreaseButton.addClass(disabledButtonClass);\n  } else {\n    $decreaseButton.removeClass(disabledButtonClass);\n  }\n\n  if (currentValue >= max) {\n    $increaseButton.addClass(disabledButtonClass);\n  } else {\n    $increaseButton.removeClass(disabledButtonClass);\n  }\n}\n\nvar $dropdowns = $('.input_type_dropdown');\n\nfunction findSpinnersAndPassData(whereToSearch) {\n  var $spinners = $(whereToSearch).find('.input__value_type_spinner');\n  $spinners.spinner({\n    min: $spinners.attr('data-min'),\n    max: $spinners.attr('data-max')\n  });\n  return $spinners;\n}\n\nfunction initSpinner() {\n  var $spinner = $(this);\n  var spinnerValue = $spinner.attr('value');\n  disableButtonsAtExtremum($spinner, spinnerValue);\n\n  function handleOnSpin(event, ui) {\n    disableButtonsAtExtremum($spinner, ui.value);\n  }\n\n  $spinner.on('spin', handleOnSpin);\n}\n\nfunction findAndInitSpinners() {\n  var $spinners = findSpinnersAndPassData(this);\n  $spinners.each(initSpinner);\n}\n\n$dropdowns.each(findAndInitSpinners);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_spinner/input_type_spinner.js?");

/***/ }),

/***/ "./src/blocks/input/_type/_spinner/input_type_spinner.scss":
/*!*****************************************************************!*\
  !*** ./src/blocks/input/_type/_spinner/input_type_spinner.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_type/_spinner/input_type_spinner.scss?");

/***/ }),

/***/ "./src/blocks/input/_type/input_type_text.scss":
/*!*****************************************************!*\
  !*** ./src/blocks/input/_type/input_type_text.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_type/input_type_text.scss?");

/***/ }),

/***/ "./src/blocks/input/_width/input_width_medium.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/input/_width/input_width_medium.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_width/input_width_medium.scss?");

/***/ }),

/***/ "./src/blocks/input/_width/input_width_narrow.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/input/_width/input_width_narrow.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_width/input_width_narrow.scss?");

/***/ }),

/***/ "./src/blocks/input/_width/input_width_preMedium.scss":
/*!************************************************************!*\
  !*** ./src/blocks/input/_width/input_width_preMedium.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/_width/input_width_preMedium.scss?");

/***/ }),

/***/ "./src/blocks/input/input.js":
/*!***********************************!*\
  !*** ./src/blocks/input/input.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./input.scss */ \"./src/blocks/input/input.scss\");\n\n__webpack_require__(/*! ./_type/_masked/input_masked.scss */ \"./src/blocks/input/_type/_masked/input_masked.scss\");\n\n__webpack_require__(/*! ./_type/_masked/input_masked */ \"./src/blocks/input/_type/_masked/input_masked.js\");\n\n__webpack_require__(/*! ./_focused/input_focused.scss */ \"./src/blocks/input/_focused/input_focused.scss\");\n\n__webpack_require__(/*! ./_width/input_width_narrow.scss */ \"./src/blocks/input/_width/input_width_narrow.scss\");\n\n__webpack_require__(/*! ./_width/input_width_preMedium.scss */ \"./src/blocks/input/_width/input_width_preMedium.scss\");\n\n__webpack_require__(/*! ./_width/input_width_medium.scss */ \"./src/blocks/input/_width/input_width_medium.scss\");\n\n__webpack_require__(/*! ./_type/input_type_text.scss */ \"./src/blocks/input/_type/input_type_text.scss\");\n\n__webpack_require__(/*! ./_type/_datepicker/input_type_datepicker */ \"./src/blocks/input/_type/_datepicker/input_type_datepicker.js\");\n\n__webpack_require__(/*! ./_type/_datepicker/input_type_datepicker.scss */ \"./src/blocks/input/_type/_datepicker/input_type_datepicker.scss\");\n\n__webpack_require__(/*! ./_type/_datepicker/_inline/datepicker_inline.scss */ \"./src/blocks/input/_type/_datepicker/_inline/datepicker_inline.scss\");\n\n__webpack_require__(/*! ./_type/_dropdown/input__list_type_dropdown */ \"./src/blocks/input/_type/_dropdown/input__list_type_dropdown.js\");\n\n__webpack_require__(/*! ./_type/_dropdown/input__list_type_dropdown.scss */ \"./src/blocks/input/_type/_dropdown/input__list_type_dropdown.scss\");\n\n__webpack_require__(/*! ./_type/_spinner/input_type_spinner */ \"./src/blocks/input/_type/_spinner/input_type_spinner.js\");\n\n__webpack_require__(/*! ./_type/_spinner/input_type_spinner.scss */ \"./src/blocks/input/_type/_spinner/input_type_spinner.scss\");\n\n__webpack_require__(/*! ./_decoration/_expand-arrow/input_decoration_expand-arrow.scss */ \"./src/blocks/input/_decoration/_expand-arrow/input_decoration_expand-arrow.scss\");\n\n__webpack_require__(/*! ./_decoration/_enter-arrow/input_decoration_enter-arrow.scss */ \"./src/blocks/input/_decoration/_enter-arrow/input_decoration_enter-arrow.scss\");\n\n//# sourceURL=webpack:///./src/blocks/input/input.js?");

/***/ }),

/***/ "./src/blocks/input/input.scss":
/*!*************************************!*\
  !*** ./src/blocks/input/input.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/input/input.scss?");

/***/ }),

/***/ "./src/blocks/list/_expandable-narrow/list_expandable-narrow.scss":
/*!************************************************************************!*\
  !*** ./src/blocks/list/_expandable-narrow/list_expandable-narrow.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/list/_expandable-narrow/list_expandable-narrow.scss?");

/***/ }),

/***/ "./src/blocks/list/_expandable/list_expandable.js":
/*!********************************************************!*\
  !*** ./src/blocks/list/_expandable/list_expandable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.initExpandableList = initExpandableList;\nexports.initExpandableLists = initExpandableLists;\n\n__webpack_require__(/*! jquery-ui/ui/effects/effect-fade */ \"./node_modules/jquery-ui/ui/effects/effect-fade.js\");\n\n__webpack_require__(/*! ./list_expandable.scss */ \"./src/blocks/list/_expandable/list_expandable.scss\");\n\n/* eslint-disable no-undef */\n// jquery объявлена глобально вебпаком\nfunction initExpandableList(index, rootElement) {\n  var $expandable = $(rootElement);\n  var $expandableTitle = $($expandable.find('.list__title_expandable')[0]);\n  var $expandableContainer = $($expandable.find('.list__container_expandable')[0]);\n  var isOpened = $expandable.hasClass('list_expandable-opened');\n\n  function handleExpandableTitleClick() {\n    $expandable.toggleClass('list__expand-arrow_expanded');\n    $expandableContainer.toggle('fade', [], 200);\n    $expandableContainer.toggleClass('list__container_visible');\n  }\n\n  $expandableTitle.click(handleExpandableTitleClick);\n  if (isOpened) $($expandableContainer).toggle('fade', [], 200);\n}\n\nfunction initExpandableLists() {\n  var $expandableLists = $('.list_expandable');\n  $expandableLists.each(initExpandableList);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/list/_expandable/list_expandable.js?");

/***/ }),

/***/ "./src/blocks/list/_expandable/list_expandable.scss":
/*!**********************************************************!*\
  !*** ./src/blocks/list/_expandable/list_expandable.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/list/_expandable/list_expandable.scss?");

/***/ }),

/***/ "./src/blocks/list/_type/_bullet/list_type_bullet.scss":
/*!*************************************************************!*\
  !*** ./src/blocks/list/_type/_bullet/list_type_bullet.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/list/_type/_bullet/list_type_bullet.scss?");

/***/ }),

/***/ "./src/blocks/list/_type/_checkbox/list_type_checkbox.scss":
/*!*****************************************************************!*\
  !*** ./src/blocks/list/_type/_checkbox/list_type_checkbox.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/list/_type/_checkbox/list_type_checkbox.scss?");

/***/ }),

/***/ "./src/blocks/list/_type/_feature/list_type_feature.scss":
/*!***************************************************************!*\
  !*** ./src/blocks/list/_type/_feature/list_type_feature.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/list/_type/_feature/list_type_feature.scss?");

/***/ }),

/***/ "./src/blocks/list/_type/_radio/list_type_radio.scss":
/*!***********************************************************!*\
  !*** ./src/blocks/list/_type/_radio/list_type_radio.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/list/_type/_radio/list_type_radio.scss?");

/***/ }),

/***/ "./src/blocks/list/_type/_rich/list_type_rich.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/list/_type/_rich/list_type_rich.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/list/_type/_rich/list_type_rich.scss?");

/***/ }),

/***/ "./src/blocks/list/_type/_toggle/list_type_toggle.scss":
/*!*************************************************************!*\
  !*** ./src/blocks/list/_type/_toggle/list_type_toggle.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/list/_type/_toggle/list_type_toggle.scss?");

/***/ }),

/***/ "./src/blocks/list/list.js":
/*!*********************************!*\
  !*** ./src/blocks/list/list.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../checkbox/checkbox */ \"./src/blocks/checkbox/checkbox.js\");\n\n__webpack_require__(/*! ./list.pug */ \"./src/blocks/list/list.pug\");\n\n__webpack_require__(/*! ./list.scss */ \"./src/blocks/list/list.scss\");\n\n__webpack_require__(/*! ./_type/_radio/list_type_radio.scss */ \"./src/blocks/list/_type/_radio/list_type_radio.scss\");\n\n__webpack_require__(/*! ./_type/_checkbox/list_type_checkbox.scss */ \"./src/blocks/list/_type/_checkbox/list_type_checkbox.scss\");\n\n__webpack_require__(/*! ./_type/_toggle/list_type_toggle.scss */ \"./src/blocks/list/_type/_toggle/list_type_toggle.scss\");\n\n__webpack_require__(/*! ./_type/_rich/list_type_rich.scss */ \"./src/blocks/list/_type/_rich/list_type_rich.scss\");\n\n__webpack_require__(/*! ./_type/_bullet/list_type_bullet.scss */ \"./src/blocks/list/_type/_bullet/list_type_bullet.scss\");\n\n__webpack_require__(/*! ./_type/_feature/list_type_feature.scss */ \"./src/blocks/list/_type/_feature/list_type_feature.scss\");\n\n__webpack_require__(/*! ./_expandable-narrow/list_expandable-narrow.scss */ \"./src/blocks/list/_expandable-narrow/list_expandable-narrow.scss\");\n\n__webpack_require__(/*! ./_expandable/list_expandable */ \"./src/blocks/list/_expandable/list_expandable.js\");\n\n//# sourceURL=webpack:///./src/blocks/list/list.js?");

/***/ }),

/***/ "./src/blocks/list/list.pug":
/*!**********************************!*\
  !*** ./src/blocks/list/list.pug ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_mixins[\"checkbox\"] = pug_interp = function(text, types, additional, addClasses=\"\", isChecked=false){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar checkboxClassName = \"checkbox\"\nvar labelClassName = \"checkbox__label\"\nvar textClassName = \"checkbox__text\"\nvar inputClassName = \"checkbox__hidden-button\"\nvar descriptionClassName = \"checkbox__description\"\n{\nvar classNames = [checkboxClassName, labelClassName, inputClassName, descriptionClassName, textClassName]\n}\nvar checkboxAttrs = {class: checkboxClassName + \" \" + addClasses + \" \"}\nvar labelAttrs = {class: labelClassName + \" text_type_regular \"}\nvar inputAttrs = {class: inputClassName + \" \"}\nvar descriptionAttrs = {class: descriptionClassName + \" \"}\nvar textAttrs = {class: textClassName + \" \"}\n{\nvar attrs = [checkboxAttrs, labelAttrs, inputAttrs, descriptionAttrs, textAttrs]\n}\nif (types) {\nif (types.includes(\"radio\")) {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_radio \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_radio \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"radio\"\nif (additional && additional.group) {\ninputAttrs.name = additional.group\n}\n}\nelse\nif (types.includes(\"toggle\")) {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_toggle \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_toggle \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"checkbox\"\nif (types.includes(\"toggled\")) {\nlabelAttrs.class += labelClassName + \"_toggled \"\n}\n}\nelse\nif (types.includes(\"like\")) {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_like \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_like \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"checkbox\"\nlabelAttrs[\"data-likes-count\"] = text\n}\nelse {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_default \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_default \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"checkbox\"\n}\nif (types.includes(\"rich\")) {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_rich \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_rich \"\n    }\n  }\n}).call(this);\n\nif (additional && additional.description) {\nvar description = additional.description\n}\n}\n}\nelse {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_default \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_default \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"checkbox\"\n}\ninputAttrs[\"data-isChecked\"] = `${isChecked}`\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(checkboxAttrs, true)) + \"\\u003E\\u003Clabel\" + (pug.attrs(labelAttrs, true)) + \"\\u003E\\u003Cspan\" + (pug.attrs(textAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Cinput\" + (pug.attrs(inputAttrs, true)) + \"\\u003E\";\nif (types.includes(\"rich\")) {\npug_html = pug_html + \"\\u003Cspan\" + (pug.attrs(descriptionAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = description) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Flabel\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/blocks/list/list.pug?");

/***/ }),

/***/ "./src/blocks/list/list.scss":
/*!***********************************!*\
  !*** ./src/blocks/list/list.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/list/list.scss?");

/***/ }),

/***/ "./src/blocks/text/_type/text_type_item-title.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/text/_type/text_type_item-title.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/text/_type/text_type_item-title.scss?");

/***/ }),

/***/ "./src/blocks/text/_type/text_type_label-CTA.scss":
/*!********************************************************!*\
  !*** ./src/blocks/text/_type/text_type_label-CTA.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/text/_type/text_type_label-CTA.scss?");

/***/ }),

/***/ "./src/blocks/text/_type/text_type_regular.scss":
/*!******************************************************!*\
  !*** ./src/blocks/text/_type/text_type_regular.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/text/_type/text_type_regular.scss?");

/***/ }),

/***/ "./src/blocks/text/_type/text_type_widget-title.scss":
/*!***********************************************************!*\
  !*** ./src/blocks/text/_type/text_type_widget-title.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/text/_type/text_type_widget-title.scss?");

/***/ }),

/***/ "./src/blocks/text/text.js":
/*!*********************************!*\
  !*** ./src/blocks/text/text.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_type/text_type_item-title.scss */ \"./src/blocks/text/_type/text_type_item-title.scss\");\n\n__webpack_require__(/*! ./_type/text_type_label-CTA.scss */ \"./src/blocks/text/_type/text_type_label-CTA.scss\");\n\n__webpack_require__(/*! ./_type/text_type_regular.scss */ \"./src/blocks/text/_type/text_type_regular.scss\");\n\n__webpack_require__(/*! ./_type/text_type_widget-title.scss */ \"./src/blocks/text/_type/text_type_widget-title.scss\");\n\n//# sourceURL=webpack:///./src/blocks/text/text.js?");

/***/ }),

/***/ "./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js":
/*!***************************************************************************!*\
  !*** ./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setInitialDates = setInitialDates;\nexports.initTwoCalendarPicker = initTwoCalendarPicker;\n\nvar _input_type_datepicker = __webpack_require__(/*! ../input/_type/_datepicker/input_type_datepicker */ \"./src/blocks/input/_type/_datepicker/input_type_datepicker.js\");\n\n__webpack_require__(/*! ./two-calendar-range-picker.scss */ \"./src/blocks/two-calendar-range-picker/two-calendar-range-picker.scss\");\n\n/* eslint-disable no-undef */\n// jquery подключена вебпаком\nvar isSecondAssignStarted = false;\n\nfunction handleOnSelect(formattedDate, datepicker, otherDatepicker, input, otherInput, number) {\n  if (isSecondAssignStarted) return;\n  var otherNumber = 1 - number;\n  var newDates = datepicker.selectedDates;\n  var options = {\n    year: 'numeric',\n    month: 'numeric',\n    day: 'numeric'\n  }; // если дат в пикере больше одной, то перезаписываем данные в инпуте,\n  // если одна - оставляем дефолтное поведение\n  // иначе второй пикер будет очищать оба при фокусе на нём\n\n  if (datepicker.selectedDates.length > 1) {\n    $(input).val(newDates[number].toLocaleDateString('ru-RU', options));\n  } else {\n    datepicker.update({\n      dateFormat: ''\n    });\n    otherDatepicker.update({\n      dateFormat: 'ДД.ММ.ГГГГ'\n    });\n  }\n\n  isSecondAssignStarted = true;\n  otherDatepicker.clear();\n  otherDatepicker.selectDate(datepicker.selectedDates);\n  isSecondAssignStarted = false;\n\n  if (datepicker.selectedDates.length > 1) {\n    $(otherInput).val(newDates[otherNumber].toLocaleDateString('ru-RU', options));\n  } // вызов ивента вручную, поскольку автоматически этого не происходит\n  // (отслеживание изменения инпута используется в booking-card)\n\n\n  $(input).change();\n}\n\nfunction datepickerAddOnSelect(datepicker, otherDatepicker, input, otherInput, number) {\n  datepicker.update({\n    onSelect: function onSelect(formattedDate) {\n      handleOnSelect(formattedDate, datepicker, otherDatepicker, input, otherInput, number);\n    }\n  });\n}\n\nfunction getInitDates($rangePicker) {\n  var dates = {};\n\n  if ($rangePicker.attr('data-firstdate')) {\n    dates.firstDate = (0, _input_type_datepicker.parseAttrToDate)($rangePicker.attr('data-firstdate'));\n  }\n\n  if ($rangePicker.attr('data-seconddate')) {\n    dates.secondDate = (0, _input_type_datepicker.parseAttrToDate)($rangePicker.attr('data-seconddate'));\n  }\n\n  return dates;\n}\n\nfunction setInitialDates($rangePicker, $input) {\n  var initDates = getInitDates($rangePicker);\n  (0, _input_type_datepicker.setDates)($input, Object.values(initDates));\n}\n\nfunction safeDatepickerInit($datepicker, $datepickerControl) {\n  if (!$datepickerControl.data('datepicker')) {\n    $datepicker.each(_input_type_datepicker.initDatepickerInput);\n    return $datepickerControl.data('datepicker');\n  }\n\n  return $datepickerControl.data('datepicker');\n}\n\nfunction initTwoCalendarPicker(index, element) {\n  var $twoCalendarRange = $(element);\n  var $firstInput = $($twoCalendarRange.find('.two-calendar-range-picker__first-datepicker')[0]);\n  var $firstInputControl = $($firstInput.find('.input__control_type_datepicker')[0]);\n  var firstDatepicker = safeDatepickerInit($firstInput, $firstInputControl);\n  var $secondInput = $($twoCalendarRange.find('.two-calendar-range-picker__second-datepicker')[0]);\n  var $secondInputControl = $($secondInput.find('.input__control_type_datepicker')[0]);\n  var secondDatepicker = safeDatepickerInit($secondInput, $secondInputControl);\n  if (!(firstDatepicker && secondDatepicker)) return;\n  firstDatepicker.update({\n    position: 'bottom left'\n  });\n  secondDatepicker.update({\n    position: 'bottom right'\n  });\n  datepickerAddOnSelect(firstDatepicker, secondDatepicker, $firstInputControl, $secondInputControl, 0);\n  datepickerAddOnSelect(secondDatepicker, firstDatepicker, $secondInputControl, $firstInputControl, 1);\n  var initDates = getInitDates($twoCalendarRange);\n\n  if (initDates.firstDate) {\n    firstDatepicker.selectDate(initDates.firstDate);\n  }\n\n  if (initDates.secondDate) {\n    secondDatepicker.selectDate(initDates.secondDate);\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js?");

/***/ }),

/***/ "./src/blocks/two-calendar-range-picker/two-calendar-range-picker.scss":
/*!*****************************************************************************!*\
  !*** ./src/blocks/two-calendar-range-picker/two-calendar-range-picker.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/blocks/two-calendar-range-picker/two-calendar-range-picker.scss?");

/***/ }),

/***/ "./src/cards/booking-card/booking-card.js":
/*!************************************************!*\
  !*** ./src/cards/booking-card/booking-card.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = initBookingCards;\n\n__webpack_require__(/*! ../../blocks/input/input */ \"./src/blocks/input/input.js\");\n\nvar _twoCalendarRangePicker = __webpack_require__(/*! ../../blocks/two-calendar-range-picker/two-calendar-range-picker */ \"./src/blocks/two-calendar-range-picker/two-calendar-range-picker.js\");\n\nvar _functions = __webpack_require__(/*! ../../common/functions */ \"./src/common/functions.js\");\n\nvar _input__list_type_dropdown = __webpack_require__(/*! ../../blocks/input/_type/_dropdown/input__list_type_dropdown */ \"./src/blocks/input/_type/_dropdown/input__list_type_dropdown.js\");\n\n__webpack_require__(/*! ./booking-card.scss */ \"./src/cards/booking-card/booking-card.scss\");\n\n/* eslint-disable no-undef */\n// jquery объявлена вебпаком\nfunction getTotalCost(priceData) {\n  var totalCost = Number.parseFloat(priceData.stayingSum) + Number.parseFloat(priceData.servicesSum) + Number.parseFloat(priceData.addServicesSum);\n  return totalCost > 0 ? totalCost : 0;\n}\n\nfunction writeTotalCost($totalCostSpan, priceData) {\n  var totalBookingCost = getTotalCost(priceData);\n  var formattedTotalBookingCost = (0, _functions.formatNumber)(totalBookingCost, ' ');\n  $totalCostSpan.text(\"\".concat(formattedTotalBookingCost).concat(priceData.currency));\n}\n\nfunction writeFormattedDailyPrice($dailyPriceSpan, priceToShow, currency) {\n  $dailyPriceSpan.text(\"\".concat(priceToShow).concat(currency));\n}\n\nfunction getDaysFromDateRange(dateRange) {\n  if (dateRange[0] && dateRange[1]) {\n    return Math.round((dateRange[1] - dateRange[0]) / (24 * 60 * 60 * 1000));\n  }\n\n  return 0;\n}\n\nfunction writeStayingCostsToSpans($calculatingStayingCostSpan, $stayingSumSpan, priceData, daysCount) {\n  var declinedPeriod = (0, _functions.ruDeclination)(daysCount, 'сут|ки|ок|ок');\n  $calculatingStayingCostSpan.text(\"\".concat(priceData.priceToShow).concat(priceData.currency) + \" \\u0445 \".concat(daysCount, \" \").concat(declinedPeriod));\n  priceData.stayingSum = priceData.price * daysCount;\n  var sumToPrint = (0, _functions.formatNumber)(priceData.stayingSum, ' ');\n  $stayingSumSpan.text(\"\".concat(sumToPrint).concat(priceData.currency));\n}\n\nfunction getOverallServicesData($servicesEnumSpan, $servicesSumSpan, priceData) {\n  var servicesData = $servicesEnumSpan.attr('data-services');\n  var services = JSON.parse(servicesData);\n  var overallServicesCost = 0;\n  var servicesString = 'Сбор за услуги: ';\n  services.forEach(function (service) {\n    overallServicesCost += service.cost;\n    servicesString += \"\".concat(service.name, \" \") + \"\".concat((0, _functions.formatNumber)(Math.abs(service.cost), ' ')) + \"\".concat(priceData.currency, \", \");\n  });\n  servicesString = servicesString.substring(0, servicesString.length - 2);\n  priceData.servicesSum = overallServicesCost;\n  overallServicesCost = overallServicesCost > 0 ? overallServicesCost : 0;\n  return {\n    text: servicesString,\n    sum: overallServicesCost\n  };\n}\n\nfunction writeServicesToSpans($servicesEnumSpan, $servicesSumSpan, currency, servicesData) {\n  $servicesEnumSpan.text(servicesData.text);\n  $servicesSumSpan.text(\"\".concat(servicesData.sum).concat(currency));\n}\n\nfunction addRefreshCheckOnInputChange($firstDatePicker, $secondDatePicker, $stayingCostRow, $totalCostSpan, priceData) {\n  function refreshCheckValuesOnDateChange(event) {\n    var $calculatingStayingCostSpan = $stayingCostRow.children('.booking-card__staying-cost-calculation');\n    var $stayingSumSpan = $stayingCostRow.children('.booking-card__staying-cost-sum');\n    var datePickerData = $(event.target).data('datepicker');\n    var daysCount = getDaysFromDateRange(datePickerData.selectedDates);\n    writeStayingCostsToSpans($calculatingStayingCostSpan, $stayingSumSpan, priceData, daysCount);\n    writeTotalCost($totalCostSpan, priceData);\n  }\n\n  $firstDatePicker.change(refreshCheckValuesOnDateChange);\n  $secondDatePicker.change(refreshCheckValuesOnDateChange);\n}\n\nfunction initBookingCard() {\n  var $bookingCard = $(this);\n  var $dailyPrice = $bookingCard.find('.booking-card__daily-price');\n  var priceAmount = $dailyPrice.attr('data-dailyPrice');\n  var currency = $dailyPrice.attr('data-currency');\n  var priceToShow = (0, _functions.formatNumber)(priceAmount, ' ');\n  writeFormattedDailyPrice($dailyPrice, priceToShow, currency);\n  var $rangePicker = $bookingCard.find('.booking-card__range-picker');\n  (0, _twoCalendarRangePicker.initTwoCalendarPicker)(0, $rangePicker);\n  var $firstDatepicker = $rangePicker.find('.two-calendar-range-picker__first-datepicker');\n  var $firstDatepickerControl = $firstDatepicker.find('.input__control_type_datepicker');\n  var $secondDatepicker = $rangePicker.find('.two-calendar-range-picker__second-datepicker');\n  var $secondDatepickerControl = $secondDatepicker.find('.input__control_type_datepicker');\n  var $guestsDropdown = $bookingCard.find('.booking-card__guests-dropdown');\n  (0, _input__list_type_dropdown.initDropdownInput)(0, $guestsDropdown);\n  var $stayingCostRow = $bookingCard.find('.booking-card__staying-cost-row');\n  var priceData = {\n    price: priceAmount,\n    currency: currency,\n    priceToShow: priceToShow,\n    servicesData: 0,\n    addServicesSum: 0,\n    stayingSum: 0\n  };\n  var $totalCostSpan = $bookingCard.find('.booking-card__summary-total-cost');\n  addRefreshCheckOnInputChange($firstDatepickerControl, $secondDatepickerControl, $stayingCostRow, $totalCostSpan, priceData);\n  (0, _twoCalendarRangePicker.setInitialDates)($rangePicker, $firstDatepickerControl);\n  var $servicesEnumSpan = $bookingCard.find('.booking-card__services');\n  var $servicesSumSpan = $bookingCard.find('.booking-card__services-sum');\n  var servicesData = getOverallServicesData($servicesEnumSpan, $servicesSumSpan, priceData);\n  var $addServicesSumSpan = $bookingCard.find('.booking-card__additional-services-sum');\n  priceData.addServicesSum = $addServicesSumSpan.attr('data-addServices');\n  writeServicesToSpans($servicesEnumSpan, $servicesSumSpan, currency, servicesData);\n  writeTotalCost($totalCostSpan, priceData);\n}\n\nfunction initBookingCards() {\n  var $bookingCards = $('.booking-card');\n  $bookingCards.each(initBookingCard);\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/cards/booking-card/booking-card.js?");

/***/ }),

/***/ "./src/cards/booking-card/booking-card.scss":
/*!**************************************************!*\
  !*** ./src/cards/booking-card/booking-card.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/cards/booking-card/booking-card.scss?");

/***/ }),

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\n__webpack_require__(/*! ./common/fonts.scss */ \"./src/common/fonts.scss\");\n\n__webpack_require__(/*! ./common/functions */ \"./src/common/functions.js\");\n\n__webpack_require__(/*! ./blocks/text/text */ \"./src/blocks/text/text.js\");\n\n__webpack_require__(/*! ./page-elements/footer/footer */ \"./src/page-elements/footer/footer.js\");\n\n__webpack_require__(/*! ./page-elements/header/header */ \"./src/page-elements/header/header.js\");\n\n//# sourceURL=webpack:///./src/common.js?");

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

/***/ "./src/page-elements/footer/_type/_large/footer_type_large.scss":
/*!**********************************************************************!*\
  !*** ./src/page-elements/footer/_type/_large/footer_type_large.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/footer/_type/_large/footer_type_large.scss?");

/***/ }),

/***/ "./src/page-elements/footer/_type/_simple/footer_type_simple.scss":
/*!************************************************************************!*\
  !*** ./src/page-elements/footer/_type/_simple/footer_type_simple.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/footer/_type/_simple/footer_type_simple.scss?");

/***/ }),

/***/ "./src/page-elements/footer/footer.js":
/*!********************************************!*\
  !*** ./src/page-elements/footer/footer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../../blocks/input/input */ \"./src/blocks/input/input.js\");\n\n__webpack_require__(/*! ./footer.scss */ \"./src/page-elements/footer/footer.scss\");\n\n__webpack_require__(/*! ./_type/_large/footer_type_large.scss */ \"./src/page-elements/footer/_type/_large/footer_type_large.scss\");\n\n__webpack_require__(/*! ./_type/_simple/footer_type_simple.scss */ \"./src/page-elements/footer/_type/_simple/footer_type_simple.scss\");\n\n__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n\n//# sourceURL=webpack:///./src/page-elements/footer/footer.js?");

/***/ }),

/***/ "./src/page-elements/footer/footer.scss":
/*!**********************************************!*\
  !*** ./src/page-elements/footer/footer.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/footer/footer.scss?");

/***/ }),

/***/ "./src/page-elements/header/__menu-item/header__menu-item.js":
/*!*******************************************************************!*\
  !*** ./src/page-elements/header/__menu-item/header__menu-item.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./header__menu-item.scss */ \"./src/page-elements/header/__menu-item/header__menu-item.scss\");\n\n//# sourceURL=webpack:///./src/page-elements/header/__menu-item/header__menu-item.js?");

/***/ }),

/***/ "./src/page-elements/header/__menu-item/header__menu-item.scss":
/*!*********************************************************************!*\
  !*** ./src/page-elements/header/__menu-item/header__menu-item.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/header/__menu-item/header__menu-item.scss?");

/***/ }),

/***/ "./src/page-elements/header/_narrow/header__narrow.scss":
/*!**************************************************************!*\
  !*** ./src/page-elements/header/_narrow/header__narrow.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/header/_narrow/header__narrow.scss?");

/***/ }),

/***/ "./src/page-elements/header/header.js":
/*!********************************************!*\
  !*** ./src/page-elements/header/header.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(/*! ../../blocks/button/button */ \"./src/blocks/button/button.js\");\n\n__webpack_require__(/*! ./__menu-item/header__menu-item */ \"./src/page-elements/header/__menu-item/header__menu-item.js\");\n\n__webpack_require__(/*! ./header.scss */ \"./src/page-elements/header/header.scss\");\n\n__webpack_require__(/*! ./_narrow/header__narrow.scss */ \"./src/page-elements/header/_narrow/header__narrow.scss\");\n\n/* eslint-disable no-undef */\n// jquery подключается вебпаком\nvar indexURL = 'landing-page.html';\nvar $logoLink = $('.header__logo-link');\n$logoLink.attr('href', indexURL);\nvar registrationLoginURL = 'registration-login.html';\nvar loginURL = \"\".concat(registrationLoginURL, \"?login=true\");\nvar registerURL = \"\".concat(registrationLoginURL, \"?login=false\");\nvar $registerButton = $('.header__register-button');\n$registerButton.attr('href', registerURL);\nvar $loginButton = $('.header__login-button');\n$loginButton.attr('href', loginURL);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/page-elements/header/header.js?");

/***/ }),

/***/ "./src/page-elements/header/header.scss":
/*!**********************************************!*\
  !*** ./src/page-elements/header/header.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/page-elements/header/header.scss?");

/***/ }),

/***/ "./src/site-pages/room-details/room-details.js":
/*!*****************************************************!*\
  !*** ./src/site-pages/room-details/room-details.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(/*! ../../common */ \"./src/common.js\");\n\n__webpack_require__(/*! ../../blocks/donut-chart/donut-chart */ \"./src/blocks/donut-chart/donut-chart.js\");\n\n__webpack_require__(/*! ../../blocks/comment/comment */ \"./src/blocks/comment/comment.js\");\n\n__webpack_require__(/*! ../../page-elements/header/header */ \"./src/page-elements/header/header.js\");\n\n__webpack_require__(/*! ../../page-elements/footer/footer */ \"./src/page-elements/footer/footer.js\");\n\n__webpack_require__(/*! ../../blocks/list/list */ \"./src/blocks/list/list.js\");\n\nvar _bookingCard = _interopRequireDefault(__webpack_require__(/*! ../../cards/booking-card/booking-card */ \"./src/cards/booking-card/booking-card.js\"));\n\n__webpack_require__(/*! ./room-details.pug */ \"./src/site-pages/room-details/room-details.pug\");\n\n__webpack_require__(/*! ./room-details.scss */ \"./src/site-pages/room-details/room-details.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n/* eslint-disable no-undef */\n// jquery импортирована вебпаком\nvar $donutCharts = $('.room-details__donut-chart');\n\nfunction initDonutChart() {\n  var $donutContainer = $(this);\n  $donutContainer.donutChart({\n    data: [{\n      caption: 'Великолепно',\n      value: 520,\n      firstColor: '#FFE39C',\n      secondColor: '#FFBA9C'\n    }, {\n      caption: 'Хорошо',\n      value: 260,\n      firstColor: '#6FCF97',\n      secondColor: '#66D2EA'\n    }, {\n      caption: 'Удовлетворительно',\n      value: 260,\n      firstColor: '#BC9CFF',\n      secondColor: '#8BA4F9',\n      isActive: true\n    }, {\n      caption: 'Разочарован',\n      value: 0,\n      firstColor: '#919191',\n      secondColor: '#3D4975'\n    }],\n    defaultStyle: {\n      outerRadius: 120,\n      innerRadius: 116\n    },\n    activeStyle: {\n      outerRadius: 120,\n      innerRadius: 116\n    },\n    arcsGap: 2\n  });\n}\n\n$donutCharts.each(initDonutChart);\n(0, _bookingCard[\"default\"])();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/site-pages/room-details/room-details.js?");

/***/ }),

/***/ "./src/site-pages/room-details/room-details.pug":
/*!******************************************************!*\
  !*** ./src/site-pages/room-details/room-details.pug ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Object, createChildrenRecursive, imAdditional) {pug_html = pug_html + \"\\u003C!DOCTYPE html\\u003E\\u003C!DOCTYPE html\\u003E\\u003Chtml lang=\\\"ru\\\"\\u003E\\u003Chead\\u003E\\u003Cmeta charset=\\\"UTF-8\\\"\\u003E\\u003Cmeta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\"\\u003E\\u003Clink\" + (\" rel=\\\"icon\\\"\"+pug.attr(\"href\", __webpack_require__(/*! ../../assets/images/icon-colored.png */ \"./src/assets/images/icon-colored.png\"), true, true)) + \"\\u003E\\u003Ctitle\\u003EИнформация о номере\\u003C\\u002Ftitle\\u003E\\u003C\\u002Fhead\\u003E\\u003Cbody\\u003E\";\npug_mixins[\"Button\"] = pug_interp = function(text, addClasses, params={isTextSized: false, isLink: false}){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nlet decorationText = \"\"\nconst decoration = attributes.decoration ? attributes.decoration.toLowerCase() : \"\"\nconst arrowDecorationCN = \"button_decoration_enter-arrow\"\nswitch (decoration){\ncase \"enterarrow\":\ndecorationText = \"arrow_forward\"\naddClasses += ` ${arrowDecorationCN} `\n  break;\n}\nif (params.isTextSized) {\naddClasses += ` button_text-sized `\n}\nif (params.isLink) {\npug_html = pug_html + \"\\u003Ca\" + (pug.attr(\"class\", pug.classes([\"button \" + addClasses], [true]), false, true)) + \"\\u003E\";\nif (addClasses.includes(\"bordered\")) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__border button__border_type_bordered\\\"\\u003E\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\";\n}\nif (addClasses.includes(arrowDecorationCN)) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__decoration\\\"\\u003E\" + (pug.escape(null == (pug_interp = decorationText) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fa\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([\"button \" + addClasses], [true]), false, true)) + \"\\u003E\";\nif (addClasses.includes(\"bordered\")) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__border button__border_type_bordered\\\"\\u003E\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\";\n}\nif (addClasses.includes(arrowDecorationCN)) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__decoration\\\"\\u003E\" + (pug.escape(null == (pug_interp = decorationText) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n}\n};\npug_mixins[\"header__menuItem\"] = pug_interp = function(itemData={}){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\ncreateChildrenRecursive = function(itemsArray) {\n{\nif (itemsArray) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"header__submenu\\\"\\u003E\";\n// iterate itemsArray\n;(function(){\n  var $$obj = itemsArray;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {\n        var child = $$obj[pug_index0];\nlet itemClasses =\n`header__submenu-item text_type_regular` +\n`${itemData.bold ? \" header__submenu-item_bold\" : \"\"}` +\n`${child.children ? \" header__submenu-item_expandable\" : \"\"}`\npug_html = pug_html + (\"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([itemClasses], [true]), false, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = child.text) ? \"\" : pug_interp)));\nif (child.children) {\npug_html = pug_html + \"\\u003Cbutton class=\\\"header__expand-button\\\"\\u003Eexpand_more\\u003C\\u002Fbutton\\u003E\";\n}\ncreateChildrenRecursive(child.children)\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index0 in $$obj) {\n      $$l++;\n      var child = $$obj[pug_index0];\nlet itemClasses =\n`header__submenu-item text_type_regular` +\n`${itemData.bold ? \" header__submenu-item_bold\" : \"\"}` +\n`${child.children ? \" header__submenu-item_expandable\" : \"\"}`\npug_html = pug_html + (\"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([itemClasses], [true]), false, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = child.text) ? \"\" : pug_interp)));\nif (child.children) {\npug_html = pug_html + \"\\u003Cbutton class=\\\"header__expand-button\\\"\\u003Eexpand_more\\u003C\\u002Fbutton\\u003E\";\n}\ncreateChildrenRecursive(child.children)\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n}\n}\n}\nlet itemClasses = `header__menu-item text_type_regular` +\n`${itemData.bold ? \" header__menu-item_bold\" : \"\"}` +\n`${itemData.children ? \" header__menu-item_expandable\" : \"\"}`\npug_html = pug_html + (\"\\u003Cli\" + (pug.attr(\"class\", pug.classes([itemClasses], [true]), false, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = itemData.text) ? \"\" : pug_interp)));\nif (itemData.children) {\npug_html = pug_html + \"\\u003Cbutton class=\\\"header__expand-button\\\"\\u003Eexpand_more\\u003C\\u002Fbutton\\u003E\";\n}\ncreateChildrenRecursive(itemData.children);\npug_html = pug_html + \"\\u003C\\u002Fli\\u003E\";\n};\npug_mixins[\"header\"] = pug_interp = function(data={}, content=[], type=\"\"){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar addClasses = \"\";\nif (type.includes(\"narrow\")) {\naddClasses += \"header_narrow \"\n}\naddClasses += attributes.addClasses ? attributes.addClasses : '';\npug_html = pug_html + \"\\u003Cheader\" + (pug.attr(\"class\", pug.classes([`header ${addClasses}`], [true]), false, true)) + \"\\u003E\\u003Ca class=\\\"header__logo-link\\\"\\u003E\\u003Cimg\" + (\" class=\\\"header__logo\\\"\"+pug.attr(\"src\", data.logo, true, true)+\" alt=\\\"logo\\\"\") + \"\\u003E\\u003C\\u002Fa\\u003E\\u003Cdiv class=\\\"header__content-container\\\"\\u003E\\u003Cul class=\\\"header__menu\\\"\\u003E\";\n// iterate content\n;(function(){\n  var $$obj = content;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var item = $$obj[index];\npug_mixins[\"header__menuItem\"](item);\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var item = $$obj[index];\npug_mixins[\"header__menuItem\"](item);\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Ful\\u003E\";\nif ((data.userLogin)) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"header__divider\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"header__user-name text_type_regular\\\"\\u003E\" + (pug.escape(null == (pug_interp = data.userLogin) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cdiv class=\\\"header__buttons-container\\\"\\u003E\";\npug_mixins[\"Button\"](\n\t\t\t\t\t\t\tdata.loginText ? data.loginText : \"Login\",\n\t\t\t\t\t\t\t\"button_type_bordered header__login-button\",\n\t\t\t\t\t\t\t{isTextSized: true, isLink: true}\n\t\t\t\t\t\t);\npug_mixins[\"Button\"](\n\t\t\t\t\t\t\tdata.registerText ? data.registerText : \"Register\",\n\t\t\t\t\t\t\t\"button_type_filled header__register-button\",\n\t\t\t\t\t\t\t{isTextSized: true, isLink: true}\n\t\t\t\t\t\t);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fheader\\u003E\";\n};\nconst logoPath = __webpack_require__(/*! ../../assets/images/logo_colored_withText.svg */ \"./src/assets/images/logo_colored_withText.svg\")\npug_mixins[\"header\"].call({\nattributes: {\"addClasses\": \"room-details__header\"}\n}, \n\t\t\t{\n\t\t\t\tloginText: \"Войти\",\n\t\t\t\tregisterText: \"Зарегистрироваться\",\n\t\t\t\tlogo: logoPath\n\t\t\t},\n\t\t\t[\n\t\t\t\t{text: \"О нас\"},\n\t\t\t\t{\n\t\t\t\t\ttext: \"Услуги\",\n\t\t\t\t\tchildren: [\n\t\t\t\t\t\t{text: \"Услуга 1\", children: [{text: \"456\", children: [{text: \"1231\"}]}]},\n\t\t\t\t\t\t{text: \"Услуга 2\", children: [{text: \"123\"}]}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{text: \"Вакансии\"},\n\t\t\t\t{text: \"Новости\"},\n\t\t\t\t{\n\t\t\t\t\ttext: \"Соглашения\",\n\t\t\t\t\tchildren: [\n\t\t\t\t\t\t{text: \"Соглашение 1\", children: [{text: \"456\", children: [{text: \"1231\"}]}]},\n\t\t\t\t\t\t{text: \"Соглашение 2\", children: [{text: \"123\"}]}\n\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t],\n\t\t\"narrow\"\n\t\t);\npug_html = pug_html + \"\\u003Cdiv class=\\\"room-details__photos\\\"\\u003E\\u003Cimg\" + (\" class=\\\"room-details__main-photo\\\"\"+pug.attr(\"src\", __webpack_require__(/*! ../../assets/images/room-details-1.jpg */ \"./src/assets/images/room-details-1.jpg\"), true, true)) + \"\\u003E\\u003Cdiv class=\\\"room-details__side-photos\\\"\\u003E\\u003Cimg\" + (\" class=\\\"room-details__upper-side-photo\\\"\"+pug.attr(\"src\", __webpack_require__(/*! ../../assets/images/room-details-2.jpg */ \"./src/assets/images/room-details-2.jpg\"), true, true)) + \"\\u003E\\u003Cimg\" + (\" class=\\\"room-details__lower-side-photo\\\"\"+pug.attr(\"src\", __webpack_require__(/*! ../../assets/images/room-details-3.jpg */ \"./src/assets/images/room-details-3.jpg\"), true, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"room-details__content\\\"\\u003E\\u003Cdiv class=\\\"room-details__info-container\\\"\\u003E\";\npug_mixins[\"checkbox\"] = pug_interp = function(text, types, additional, addClasses=\"\", isChecked=false){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar checkboxClassName = \"checkbox\"\nvar labelClassName = \"checkbox__label\"\nvar textClassName = \"checkbox__text\"\nvar inputClassName = \"checkbox__hidden-button\"\nvar descriptionClassName = \"checkbox__description\"\n{\nvar classNames = [checkboxClassName, labelClassName, inputClassName, descriptionClassName, textClassName]\n}\nvar checkboxAttrs = {class: checkboxClassName + \" \" + addClasses + \" \"}\nvar labelAttrs = {class: labelClassName + \" text_type_regular \"}\nvar inputAttrs = {class: inputClassName + \" \"}\nvar descriptionAttrs = {class: descriptionClassName + \" \"}\nvar textAttrs = {class: textClassName + \" \"}\n{\nvar attrs = [checkboxAttrs, labelAttrs, inputAttrs, descriptionAttrs, textAttrs]\n}\nif (types) {\nif (types.includes(\"radio\")) {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_radio \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_radio \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"radio\"\nif (additional && additional.group) {\ninputAttrs.name = additional.group\n}\n}\nelse\nif (types.includes(\"toggle\")) {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_toggle \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_toggle \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"checkbox\"\nif (types.includes(\"toggled\")) {\nlabelAttrs.class += labelClassName + \"_toggled \"\n}\n}\nelse\nif (types.includes(\"like\")) {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_like \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_like \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"checkbox\"\nlabelAttrs[\"data-likes-count\"] = text\n}\nelse {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_default \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_default \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"checkbox\"\n}\nif (types.includes(\"rich\")) {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_rich \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_rich \"\n    }\n  }\n}).call(this);\n\nif (additional && additional.description) {\nvar description = additional.description\n}\n}\n}\nelse {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_default \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_default \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"checkbox\"\n}\ninputAttrs[\"data-isChecked\"] = `${isChecked}`\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(checkboxAttrs, true)) + \"\\u003E\\u003Clabel\" + (pug.attrs(labelAttrs, true)) + \"\\u003E\\u003Cspan\" + (pug.attrs(textAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Cinput\" + (pug.attrs(inputAttrs, true)) + \"\\u003E\";\nif (types.includes(\"rich\")) {\npug_html = pug_html + \"\\u003Cspan\" + (pug.attrs(descriptionAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = description) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Flabel\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"bulletList\"] = pug_interp = function(title=\"\", contentStrings = []){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nconst blockModifier = \"_type_bullet\"\nconst addClasses = attributes.addClasses ? attributes.addClasses : \"\"\nconst listCN = \"list\"\nconst listTitleCN = \"list__title\"\nconst listContainerCN = \"list__container\"\nconst listElementCN = \"list__item\"\nconst listElementImageCN = \"list__item-image\"\nconst listElementTextCN = \"list__item-text\"\nconst classNames = [listCN, listTitleCN, listContainerCN, listElementCN, listElementImageCN, listElementTextCN]\nlet listAttrs = {class: `${listCN} ${listCN}${blockModifier} ${addClasses} `}\nlet listTitleAttrs = {class: `${listTitleCN} ${listTitleCN}${blockModifier} text_type_label-CTA `}\nlet listContainerAttrs = {class: `${listContainerCN} ${listContainerCN}${blockModifier} `}\nlet listElementAttrs = {class: `${listElementCN} ${listElementCN}${blockModifier} `}\nlet listElementImageAttrs = {class: `${listElementImageCN} ${listElementImageCN}${blockModifier} `}\nlet listElementTextAttrs = {class: `${listElementTextCN} ${listElementTextCN}${blockModifier} text_type_regular `}\nconst blAttributes = [listAttrs, listTitleAttrs, listContainerAttrs, listElementAttrs, listElementImageAttrs, listElementTextAttrs]\nif (attributes.isExpandable) {\n// iterate blAttributes\n;(function(){\n  var $$obj = blAttributes;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_expandable \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_expandable \"\n    }\n  }\n}).call(this);\n\n}\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(listAttrs, true)) + \"\\u003E\\u003Ch4\" + (pug.attrs(listTitleAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = title) ? \"\" : pug_interp)) + \"\\u003C\\u002Fh4\\u003E\\u003Cul\" + (pug.attrs(listContainerAttrs, true)) + \"\\u003E\";\n// iterate contentStrings\n;(function(){\n  var $$obj = contentStrings;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var string = $$obj[index];\npug_html = pug_html + \"\\u003Cli\" + (pug.attrs(listElementAttrs, true)) + \"\\u003E\\u003Cdiv\" + (pug.attrs(listElementImageAttrs, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cspan\" + (pug.attrs(listElementTextAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = string) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fli\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var string = $$obj[index];\npug_html = pug_html + \"\\u003Cli\" + (pug.attrs(listElementAttrs, true)) + \"\\u003E\\u003Cdiv\" + (pug.attrs(listElementImageAttrs, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cspan\" + (pug.attrs(listElementTextAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = string) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fli\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Ful\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"featureList\"] = pug_interp = function(items = []){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nconst blockModifier = \"_type_feature\"\nconst addClasses = attributes.addClasses ? attributes.addClasses : \"\"\nconst listCN = \"list\"\nconst listContainerCN = \"list__container\"\nconst listItemCN = \"list__item\"\nconst listItemImageCN = \"list__item-image\"\nconst listItemTextContainerCN = \"list__item-text-container\"\nconst listItemTitleCN = \"list__item-title\"\nconst listItemTextCN = \"list__item-text\"\nconst classNames = [listCN, listContainerCN, listItemCN, listItemImageCN, listItemTextContainerCN, listItemTitleCN, listItemTextCN]\nlet listAttrs = {class: `${listCN} ${listCN}${blockModifier} ${addClasses} `}\nlet listContainerAttrs = {class: `${listContainerCN} ${listContainerCN}${blockModifier} `}\nlet listElementAttrs = {class: `${listItemCN} ${listItemCN}${blockModifier} `}\nlet listElementImageAttrs = {class: `${listItemImageCN} ${listItemImageCN}${blockModifier} `}\nlet listItemTextContainerAttrs = {class: `${listItemTextContainerCN} ${listItemTextContainerCN}${blockModifier}`}\nlet listItemTitleAttrs = {class: `${listItemTitleCN} ${listItemTitleCN}${blockModifier} text_type_regular `}\nlet listElementTextAttrs = {class: `${listItemTextCN} ${listItemTextCN}${blockModifier} text_type_regular `}\nconst blAttributes =\n[listAttrs, listContainerAttrs, listElementAttrs, listElementImageAttrs,\nlistItemTextContainerAttrs, listItemTitleAttrs, listElementTextAttrs]\nif (attributes.isExpandable) {\n// iterate blAttributes\n;(function(){\n  var $$obj = blAttributes;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_expandable \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_expandable \"\n    }\n  }\n}).call(this);\n\n}\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(listAttrs, true)) + \"\\u003E\\u003Cul\" + (pug.attrs(listContainerAttrs, true)) + \"\\u003E\";\n// iterate items\n;(function(){\n  var $$obj = items;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var item = $$obj[index];\npug_html = pug_html + \"\\u003Cli\" + (pug.attrs(listElementAttrs, true)) + \"\\u003E\\u003Cspan\" + (pug.attrs(listElementImageAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = item.icon) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Cdiv\" + (pug.attrs(listItemTextContainerAttrs, true)) + \"\\u003E\\u003Ch4\" + (pug.attrs(listItemTitleAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = item.title) ? \"\" : pug_interp)) + \"\\u003C\\u002Fh4\\u003E\\u003Cspan\" + (pug.attrs(listElementTextAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = item.text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fli\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var item = $$obj[index];\npug_html = pug_html + \"\\u003Cli\" + (pug.attrs(listElementAttrs, true)) + \"\\u003E\\u003Cspan\" + (pug.attrs(listElementImageAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = item.icon) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Cdiv\" + (pug.attrs(listItemTextContainerAttrs, true)) + \"\\u003E\\u003Ch4\" + (pug.attrs(listItemTitleAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = item.title) ? \"\" : pug_interp)) + \"\\u003C\\u002Fh4\\u003E\\u003Cspan\" + (pug.attrs(listElementTextAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = item.text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fli\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Ful\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\npug_html = pug_html + \"\\u003Cdiv class=\\\"room-details__main-info\\\"\\u003E\\u003Cdiv class=\\\"room-details__features-container\\\"\\u003E\\u003Ch2 class=\\\"text_type_item-title room-details__features-title\\\"\\u003EСведения о номере\\u003C\\u002Fh2\\u003E\";\npug_mixins[\"featureList\"].call({\nattributes: {\"addClasses\": \"room-details__features-content\"}\n}, [\n\t\t\t\t\t\t\t{text: \"Шумопоглощающие стены\", title: \"Комфорт\", icon: \"insert_emoticon\"},\n\t\t\t\t\t\t\t{title: \"Удобство\", text: \"Окно в каждой из спален\", icon: \"location_city\"},\n\t\t\t\t\t\t\t{title: \"Уют\", text: \"Номер оснащён камином\", icon: \"whatshot\"},\n\t\t\t\t\t\t]);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"room-details__expressions-container\\\"\\u003E\";\npug_mixins[\"donut-chart\"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([`donut-chart ${attributes.addClasses ? attributes.addClasses : \"\"}`], [true]), false, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_html = pug_html + \"\\u003Ch2 class=\\\"text_type_item-title room-details__expressions-title\\\"\\u003EВпечатления от номера\\u003C\\u002Fh2\\u003E\";\npug_mixins[\"donut-chart\"].call({\nattributes: {\"addClasses\": \"room-details__donut-chart\"}\n});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"room-details__reviews-container\\\"\\u003E\\u003Cdiv class=\\\"room-details__reviews-title-container\\\"\\u003E\\u003Ch2 class=\\\"text_type_item-title room-details__reviews-title\\\"\\u003EОтзывы посетителей номера\\u003C\\u002Fh2\\u003E\\u003Cspan class=\\\"text_type_regular room-details__reviews-count\\\"\\u003E2 отзыва\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"room-details__reviews-content\\\"\\u003E\";\npug_mixins[\"checkbox\"] = pug_interp = function(text, types, additional, addClasses=\"\", isChecked=false){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar checkboxClassName = \"checkbox\"\nvar labelClassName = \"checkbox__label\"\nvar textClassName = \"checkbox__text\"\nvar inputClassName = \"checkbox__hidden-button\"\nvar descriptionClassName = \"checkbox__description\"\n{\nvar classNames = [checkboxClassName, labelClassName, inputClassName, descriptionClassName, textClassName]\n}\nvar checkboxAttrs = {class: checkboxClassName + \" \" + addClasses + \" \"}\nvar labelAttrs = {class: labelClassName + \" text_type_regular \"}\nvar inputAttrs = {class: inputClassName + \" \"}\nvar descriptionAttrs = {class: descriptionClassName + \" \"}\nvar textAttrs = {class: textClassName + \" \"}\n{\nvar attrs = [checkboxAttrs, labelAttrs, inputAttrs, descriptionAttrs, textAttrs]\n}\nif (types) {\nif (types.includes(\"radio\")) {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_radio \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_radio \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"radio\"\nif (additional && additional.group) {\ninputAttrs.name = additional.group\n}\n}\nelse\nif (types.includes(\"toggle\")) {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_toggle \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_toggle \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"checkbox\"\nif (types.includes(\"toggled\")) {\nlabelAttrs.class += labelClassName + \"_toggled \"\n}\n}\nelse\nif (types.includes(\"like\")) {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_like \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_like \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"checkbox\"\nlabelAttrs[\"data-likes-count\"] = text\n}\nelse {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_default \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_default \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"checkbox\"\n}\nif (types.includes(\"rich\")) {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_rich \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_rich \"\n    }\n  }\n}).call(this);\n\nif (additional && additional.description) {\nvar description = additional.description\n}\n}\n}\nelse {\n// iterate attrs\n;(function(){\n  var $$obj = attrs;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_default \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_default \"\n    }\n  }\n}).call(this);\n\ninputAttrs.type = \"checkbox\"\n}\ninputAttrs[\"data-isChecked\"] = `${isChecked}`\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(checkboxAttrs, true)) + \"\\u003E\\u003Clabel\" + (pug.attrs(labelAttrs, true)) + \"\\u003E\\u003Cspan\" + (pug.attrs(textAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Cinput\" + (pug.attrs(inputAttrs, true)) + \"\\u003E\";\nif (types.includes(\"rich\")) {\npug_html = pug_html + \"\\u003Cspan\" + (pug.attrs(descriptionAttrs, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = description) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Flabel\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"comment\"] = pug_interp = function(commentData={}){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nconst addClasses = attributes.addClasses ? attributes.addClasses : \"\"\npug_html = pug_html + \"\\u003Carticle\" + (pug.attr(\"class\", pug.classes([`comment ${addClasses}`], [true]), false, true)) + \"\\u003E\\u003Cdiv class=\\\"comment__header\\\"\\u003E\\u003Cdiv class=\\\"comment__col1 comment__avatar-wrap\\\"\\u003E\\u003Cimg\" + (\" class=\\\"comment__avatar\\\"\"+pug.attr(\"src\", commentData.avatar, true, true)+\" alt=\\\"user avatar\\\"\") + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"comment__info-container comment__col2\\\"\\u003E\\u003Ch4 class=\\\"comment__author text_type_regular\\\"\\u003E\" + (pug.escape(null == (pug_interp = commentData.author) ? \"\" : pug_interp)) + \"\\u003C\\u002Fh4\\u003E\\u003Cspan class=\\\"comment__date-time text_type_regular\\\"\\u003E\" + (pug.escape(null == (pug_interp = commentData.dateTime) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"comment__content\\\"\\u003E\\u003Cdiv class=\\\"comment__col1\\\"\\u003E\";\npug_mixins[\"checkbox\"](commentData.likesCount, \"like\", \"\", \"comment__like\", commentData.isLiked);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cspan class=\\\"comment__text text_type_regular comment__col2\\\"\\u003E\" + (pug.escape(null == (pug_interp = commentData.text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Farticle\\u003E\";\n};\npug_mixins[\"comment\"].call({\nattributes: {\"addClasses\": \"room-details__comment\"}\n}, {\n\t\t\t\t\t\t\tavatar: __webpack_require__(/*! ../../assets/images/userAvatar.jpg */ \"./src/assets/images/userAvatar.jpg\"),\n\t\t\t\t\t\t\tauthor: \"Мурад Сарафанов\",\n\t\t\t\t\t\t\tdateTime: \"5 дней назад\",\n\t\t\t\t\t\t\ttext: \"Великолепный матрас на кровати в основной спальне! \" +\n\t\t\t\t\t\t\t\t\"А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. \" +\n\t\t\t\t\t\t\t\t\"Выкрикивал комплименты повару — никто не жаловался из соседей.\",\n\t\t\t\t\t\t\tisLiked: true,\n\t\t\t\t\t\t\tlikesCount: 12\n\t\t\t\t\t\t});\npug_mixins[\"comment\"].call({\nattributes: {\"addClasses\": \"room-details__comment\"}\n}, {\n\t\t\t\t\t\t\tavatar: __webpack_require__(/*! ../../assets/images/userAvatar-2.jpg */ \"./src/assets/images/userAvatar-2.jpg\"),\n\t\t\t\t\t\t\tauthor: \"Патрисия Стёклышкова\",\n\t\t\t\t\t\t\tdateTime: \"Неделю назад\",\n\t\t\t\t\t\t\ttext: \"Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, \" +\n\t\t\t\t\t\t\t\t\"каждый день новое блюдо и десерт как комплимент\",\n\t\t\t\t\t\t\tlikesCount: 2\n\t\t\t\t\t\t});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"room-details__additional-info\\\"\\u003E\\u003Cdiv class=\\\"room-details__rules-container\\\"\\u003E\\u003Ch2 class=\\\"text_type_item-title room-details__rules-title\\\"\\u003EПравила\\u003C\\u002Fh2\\u003E\";\npug_mixins[\"bulletList\"].call({\nattributes: {\"isExpandable\": false,\"addClasses\": \"room-details__rules-list\"}\n}, \n\t\t\t\t\t\t\t\"\",\n\t\t\t\t\t\t\t[\"Нельзя с питомцами\", \"Без вечеринок и мероприятий\", \"Время прибытия — после 13:00, а выезд до 12:00\"]\n\t\t\t\t\t\t);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"room-details__cancellation-container\\\"\\u003E\\u003Ch2 class=\\\"text_type_item-title room-details__cancellation-title\\\"\\u003EОтмена\\u003C\\u002Fh2\\u003E\\u003Cspan class=\\\"text_type_regular room-details__cancellation-text\\\"\\u003EБесплатная отмена в течение 48 ч.\\nПосле этого при отмене не позднее чем за 5 дн. до прибытия\\nвы получите полный возврат за вычетом сбора за услуги.\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\npug_mixins[\"twoCalendarRangePicker\"] = pug_interp = function(data={}){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar addClasses = attributes.addClasses ? attributes.addClasses : \"\";\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([\"two-calendar-range-picker \" + addClasses], [true]), false, true)+pug.attr(\"data-firstDate\", data.firstDate, true, true)+pug.attr(\"data-secondDate\", data.secondDate, true, true)) + \"\\u003E\";\npug_mixins[\"input\"](data.labels ? data.labels[0] : \"\", \"datepicker narrow\", \"ДД.ММ.ГГГГ\", \"two-calendar-range-picker__datepicker two-calendar-range-picker__first-datepicker\", \"\");\npug_mixins[\"input\"](data.labels ? data.labels[1] : \"\", \"datepicker narrow\", \"ДД.ММ.ГГГГ\", \"two-calendar-range-picker__datepicker two-calendar-range-picker__second-datepicker\", \"\");\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"addTextInput\"] = pug_interp = function(tiAttributes, tiAdditional, tiClassNames, tiTitle, tiTypes){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\n// iterate Object.values(tiAttributes)\n;(function(){\n  var $$obj = Object.values(tiAttributes);\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += tiClassNames[index] + \"_type_text \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += tiClassNames[index] + \"_type_text \"\n    }\n  }\n}).call(this);\n\ntiAttributes.controlAttributes.type = \"text\"\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(tiAttributes.blockAttributes, true)) + \"\\u003E\";\nif (tiTitle) {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(tiAttributes.titleAttributes, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = tiTitle) ? \"\" : pug_interp)) + \"\\u003Cbr\\u003E\\u003Cdiv\" + (pug.attrs(tiAttributes.controlWrapperAttrs, true)) + \"\\u003E\";\nif (tiTypes.includes(\"subscription\")) {\npug_mixins[\"enter-arrow\"]();\n}\npug_html = pug_html + \"\\u003Cinput\" + (pug.attrs(pug.merge([{\"value\": pug.escape(tiAdditional)},tiAttributes.controlAttributes]), true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(tiAttributes.titleAttributes, true)) + \"\\u003E\\u003Cdiv\" + (pug.attrs(tiAttributes.controlWrapperAttrs, true)) + \"\\u003E\";\nif (tiTypes.includes(\"subscription\")) {\npug_mixins[\"enter-arrow\"]();\n}\npug_html = pug_html + \"\\u003Cinput\" + (pug.attrs(pug.merge([{\"value\": pug.escape(imAdditional)},tiAttributes.controlAttributes]), true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"input\"] = pug_interp = function(title, types=\"\", placeholder, addClasses, mask, additional=\"\", range=[0, 5]){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar blockClassName = \"input\"\nvar titleClassName = \"input__title\"\nvar controlWrapperCN = \"input__control-wrapper\"\nvar controlClassName = \"input__control\"\nvar dropdownClassName = \"input__dropdown-list-wrapper\"\nvar classNames = [blockClassName, titleClassName, controlClassName, dropdownClassName, controlWrapperCN]\nvar blockAttributes = {class: blockClassName + \" \" + addClasses + \" \"}\nvar titleAttributes = {class: titleClassName + \" \" + \"text_type_label-CTA input__title \"}\nvar dropdownAttributes = {class: \" \"}\nvar controlWrapperAttrs = {class: `${controlWrapperCN} `}\nvar controlAttributes = {class: controlClassName + \" \", placeholder: placeholder}\nvar attributes = {blockAttributes, titleAttributes, controlAttributes, dropdownAttributes, controlWrapperAttrs}\n// iterate Object.values(attributes)\n;(function(){\n  var $$obj = Object.values(attributes);\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nif (types.includes(\"narrow\")) {\nvalue.class += classNames[index] + \"_width_narrow \"\n}\nelse\nif (types.includes(\"premedium\")) {\nvalue.class += classNames[index] + \"_width_premedium \"\n}\nelse\nif (types.includes(\"medium\")) {\nvalue.class += classNames[index] + \"_width_medium \"\n}\nif (types.includes(\"dropdown\") || types.includes(\"datepicker\")) {\npug_mixins[\"expand-arrow\"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cspan class=\\\"input__arrow_decoration_expand-arrow\\\"\\u003Eexpand_more\\u003C\\u002Fspan\\u003E\";\n};\nvalue.class += classNames[index] + \"_decoration_expand-arrow \"\n}\nelse\nif (types.includes(\"subscription\")) {\npug_mixins[\"enter-arrow\"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"input__enter-arrow\\\"\\u003Earrow_forward\\u003C\\u002Fdiv\\u003E\";\n};\nvalue.class += classNames[index] + \"_decoration_enter-arrow \"\n}\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nif (types.includes(\"narrow\")) {\nvalue.class += classNames[index] + \"_width_narrow \"\n}\nelse\nif (types.includes(\"premedium\")) {\nvalue.class += classNames[index] + \"_width_premedium \"\n}\nelse\nif (types.includes(\"medium\")) {\nvalue.class += classNames[index] + \"_width_medium \"\n}\nif (types.includes(\"dropdown\") || types.includes(\"datepicker\")) {\npug_mixins[\"expand-arrow\"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cspan class=\\\"input__arrow_decoration_expand-arrow\\\"\\u003Eexpand_more\\u003C\\u002Fspan\\u003E\";\n};\nvalue.class += classNames[index] + \"_decoration_expand-arrow \"\n}\nelse\nif (types.includes(\"subscription\")) {\npug_mixins[\"enter-arrow\"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"input__enter-arrow\\\"\\u003Earrow_forward\\u003C\\u002Fdiv\\u003E\";\n};\nvalue.class += classNames[index] + \"_decoration_enter-arrow \"\n}\n    }\n  }\n}).call(this);\n\nif (types.includes(\"datepicker\")) {\npug_mixins[\"addDatepicker\"] = pug_interp = function(dpAttributes={}, dpTypes=\"\", dpAdditional=[]){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\n// iterate Object.values(dpAttributes)\n;(function(){\n  var $$obj = Object.values(dpAttributes);\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_datepicker \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_datepicker \"\n    }\n  }\n}).call(this);\n\ndpAttributes.controlAttributes.type = \"select\"\ndpAttributes.controlAttributes[\"data-firstDate\"] = dpAdditional[0]\ndpAttributes.controlAttributes[\"data-secondDate\"] = additional[1]\ndpAttributes.controlAttributes.class += 'input__control_decoration_expand-arrow '\nif (dpTypes.includes(\"inline\")) {\npug_mixins[\"createInlineDatepicker\"] = pug_interp = function(idpAttributes={}, idpTypes=\"\", idpAdditional=[]){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(idpAttributes.blockAttributes, true)) + \"\\u003E\\u003Cinput\" + (pug.attrs(idpAttributes.controlAttributes, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\ndpAttributes.blockAttributes.class += \"datepicker_inline \"\npug_mixins[\"createInlineDatepicker\"](dpAttributes, dpTypes, dpAdditional);\n}\nelse {\npug_mixins[\"createDatepicker\"](dpAttributes, dpTypes, dpAdditional);\n}\n};\npug_mixins[\"createDatepicker\"] = pug_interp = function(dpAttributes={}, dpTypes=\"\", dpAdditional=[]){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(dpAttributes.blockAttributes, true)) + \"\\u003E\";\nif (title) {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(dpAttributes.titleAttributes, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = title) ? \"\" : pug_interp)) + \"\\u003Cbr\\u003E\\u003Cdiv\" + (pug.attrs(dpAttributes.controlWrapperAttrs, true)) + \"\\u003E\";\npug_mixins[\"expand-arrow\"]();\npug_html = pug_html + \"\\u003Cinput\" + (pug.attrs(dpAttributes.controlAttributes, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(dpAttributes.titleAttributes, true)) + \"\\u003E\\u003Cdiv\" + (pug.attrs(dpAttributes.controlWrapperAttrs, true)) + \"\\u003E\\u003Cinput\" + (pug.attrs(dpAttributes.controlAttributes, true)) + \"\\u003E\";\npug_mixins[\"expand-arrow\"]();\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"addDatepicker\"](attributes, types, additional);\n}\nelse\nif (types.includes(\"dropdown\")) {\npug_mixins[\"spinner\"] = pug_interp = function(range, element, index, initValue){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar start = range[0]\nvar end = range[1]\npug_html = pug_html + \"\\u003Cdiv class=\\\"input_type_spinner\\\"\\u003E\\u003Cinput\" + (\" class=\\\"input__value_type_spinner text_type_label-CTA\\\"\"+pug.attr(\"data-name\", element, true, true)+pug.attr(\"data-min\", range[0], true, true)+pug.attr(\"data-max\", range[1], true, true)+pug.attr(\"data-index\", index, true, true)+pug.attr(\"value\", initValue ? initValue : 0, true, true)+\" readonly\") + \"\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"Button\"] = pug_interp = function(text, addClasses, params={isTextSized: false, isLink: false}){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nlet decorationText = \"\"\nconst decoration = attributes.decoration ? attributes.decoration.toLowerCase() : \"\"\nconst arrowDecorationCN = \"button_decoration_enter-arrow\"\nswitch (decoration){\ncase \"enterarrow\":\ndecorationText = \"arrow_forward\"\naddClasses += ` ${arrowDecorationCN} `\n  break;\n}\nif (params.isTextSized) {\naddClasses += ` button_text-sized `\n}\nif (params.isLink) {\npug_html = pug_html + \"\\u003Ca\" + (pug.attr(\"class\", pug.classes([\"button \" + addClasses], [true]), false, true)) + \"\\u003E\";\nif (addClasses.includes(\"bordered\")) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__border button__border_type_bordered\\\"\\u003E\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\";\n}\nif (addClasses.includes(arrowDecorationCN)) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__decoration\\\"\\u003E\" + (pug.escape(null == (pug_interp = decorationText) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fa\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([\"button \" + addClasses], [true]), false, true)) + \"\\u003E\";\nif (addClasses.includes(\"bordered\")) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__border button__border_type_bordered\\\"\\u003E\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\";\n}\nif (addClasses.includes(arrowDecorationCN)) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__decoration\\\"\\u003E\" + (pug.escape(null == (pug_interp = decorationText) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n}\n};\npug_mixins[\"dropdownList\"] = pug_interp = function(elementNames = {}, attr, range){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(attr, true)) + \"\\u003E\\u003Cdiv class=\\\"input__dropdown-list_type_dropdown\\\"\\u003E\";\n// iterate elementNames\n;(function(){\n  var $$obj = elementNames;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var element = $$obj[index];\npug_html = pug_html + \"\\u003Cdiv class=\\\"text_type_label-CTA input__dropdown-list-row_type_dropdown\\\"\\u003E\\u003Cp class=\\\"input__dropdown-text_type_dropdown\\\"\\u003E\" + (pug.escape(null == (pug_interp = element.name) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\";\npug_mixins[\"spinner\"](range, element.name, index, element.value);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var element = $$obj[index];\npug_html = pug_html + \"\\u003Cdiv class=\\\"text_type_label-CTA input__dropdown-list-row_type_dropdown\\\"\\u003E\\u003Cp class=\\\"input__dropdown-text_type_dropdown\\\"\\u003E\" + (pug.escape(null == (pug_interp = element.name) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\";\npug_mixins[\"spinner\"](range, element.name, index, element.value);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"input__control-buttons-container\\\"\\u003E\";\npug_mixins[\"Button\"](\"Очистить\", \"button_type_text input__clear-button button_hovered input__control-button\");\npug_mixins[\"Button\"](\"Применить\", \"button_type_text input__confirm-button input__control-button\");\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"addDropdown\"] = pug_interp = function(ddAttributes, ddTypes, ddAdditional){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\n// iterate Object.values(ddAttributes)\n;(function(){\n  var $$obj = Object.values(ddAttributes);\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_dropdown \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_dropdown \"\n    }\n  }\n}).call(this);\n\ncontrolAttributes.type = \"select\"\nif (ddTypes.includes(\"unified\")) {\nddAttributes.dropdownAttributes.class += dropdownClassName + \"_unified \"\n}\nif (ddTypes.includes(\"rooms\")) {\nddAttributes.dropdownAttributes.class += dropdownClassName + \"_rooms \"\n}\nelse\nif (ddTypes.includes(\"customers\")) {\nddAttributes.dropdownAttributes.class += dropdownClassName + \"_customers \"\n}\nif (ddTypes.includes(\"opened\")) {\nddAttributes.blockAttributes.class += blockClassName + \"_type_dropdown-opened \"\n}\nif (ddTypes.includes(\"pure\")) {\nddAttributes.blockAttributes.class += blockClassName + \"_type_dropdown-pure \"\n}\nif (ddTypes.includes(\"unaccepted\")) {\nddAttributes.blockAttributes.class += blockClassName + \"_type_dropdown-unaccepted \"\n}\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(ddAttributes.blockAttributes, true)) + \"\\u003E\";\nif (title) {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(ddAttributes.titleAttributes, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = title) ? \"\" : pug_interp)) + \"\\u003Cbr\\u003E\\u003Cdiv\" + (pug.attrs(ddAttributes.controlWrapperAttrs, true)) + \"\\u003E\";\npug_mixins[\"expand-arrow\"]();\npug_html = pug_html + \"\\u003Cinput\" + (pug.attrs(ddAttributes.controlAttributes, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(ddAttributes.titleAttributes, true)) + \"\\u003E\\u003Cdiv\" + (pug.attrs(ddAttributes.controlWrapperAttrs, true)) + \"\\u003E\\u003Cinput\" + (pug.attrs(ddAttributes.controlAttributes, true)) + \"\\u003E\";\npug_mixins[\"expand-arrow\"]();\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\npug_mixins[\"dropdownList\"](ddAdditional, ddAttributes.dropdownAttributes, range);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"addDropdown\"](attributes, types, additional);\n}\nelse\nif (types.includes(\"text\")) {\npug_mixins[\"addTextInput\"](attributes, additional, classNames, title, types);\n}\nelse\nif (types.includes(\"mask\")) {\npug_mixins[\"addMaskedInput\"] = pug_interp = function(imAttributes, imAdditional, miTypes){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_mixins[\"enter-arrow\"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"input__enter-arrow\\\"\\u003Earrow_forward\\u003C\\u002Fdiv\\u003E\";\n};\n// iterate Object.values(imAttributes)\n;(function(){\n  var $$obj = Object.values(imAttributes);\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_masked \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_masked \"\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(imAttributes.blockAttributes, true)) + \"\\u003E\";\nif (title) {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(imAttributes.titleAttributes, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = title) ? \"\" : pug_interp)) + \"\\u003Cbr\\u003E\\u003Cdiv\" + (pug.attrs(imAttributes.controlWrapperAttrs, true)) + \"\\u003E\";\nif (miTypes.includes(\"subscription\")) {\npug_mixins[\"enterArrow\"]();\n}\npug_html = pug_html + \"\\u003Cinput\" + (pug.attrs(pug.merge([{\"value\": pug.escape(imAdditional)},imAttributes.controlAttributes]), true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(imAttributes.titleAttributes, true)) + \"\\u003E\\u003Cdiv\" + (pug.attrs(imAttributes.controlWrapperAttrs, true)) + \"\\u003E\\u003Cinput\" + (pug.attrs(pug.merge([{\"value\": pug.escape(imAdditional)},imAttributes.controlAttributes]), true)) + \"\\u003E\";\nif (miTypes.includes(\"subscription\")) {\npug_mixins[\"enterArrow\"]();\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"addMaskedInput\"](attributes, additional, additional, types);\n}\n};\npug_mixins[\"Button\"] = pug_interp = function(text, addClasses, params={isTextSized: false, isLink: false}){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nlet decorationText = \"\"\nconst decoration = attributes.decoration ? attributes.decoration.toLowerCase() : \"\"\nconst arrowDecorationCN = \"button_decoration_enter-arrow\"\nswitch (decoration){\ncase \"enterarrow\":\ndecorationText = \"arrow_forward\"\naddClasses += ` ${arrowDecorationCN} `\n  break;\n}\nif (params.isTextSized) {\naddClasses += ` button_text-sized `\n}\nif (params.isLink) {\npug_html = pug_html + \"\\u003Ca\" + (pug.attr(\"class\", pug.classes([\"button \" + addClasses], [true]), false, true)) + \"\\u003E\";\nif (addClasses.includes(\"bordered\")) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__border button__border_type_bordered\\\"\\u003E\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\";\n}\nif (addClasses.includes(arrowDecorationCN)) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__decoration\\\"\\u003E\" + (pug.escape(null == (pug_interp = decorationText) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fa\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([\"button \" + addClasses], [true]), false, true)) + \"\\u003E\";\nif (addClasses.includes(\"bordered\")) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__border button__border_type_bordered\\\"\\u003E\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\";\n}\nif (addClasses.includes(arrowDecorationCN)) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__decoration\\\"\\u003E\" + (pug.escape(null == (pug_interp = decorationText) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n}\n};\npug_mixins[\"bookingCard\"] = pug_interp = function(data={}){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([`booking-card ${attributes.addClasses ? attributes.addClasses : \"\"}`], [true]), false, true)) + \"\\u003E\\u003Cheader class=\\\"booking-card__header\\\"\\u003E\\u003Cdiv class=\\\"booking-card__room-info\\\"\\u003E\\u003Cspan class=\\\"booking-card__number-text text_type_widget-title\\\"\\u003E№\\u003C\\u002Fspan\\u003E\\u003Ch3 class=\\\"booking-card__room-num text_type_label-CTA\\\"\\u003E\" + (pug.escape(null == (pug_interp = data.roomNumber) ? \"\" : pug_interp)) + \"\\u003C\\u002Fh3\\u003E\\u003Cspan class=\\\"booking-card__room-type text_type_label-CTA\\\"\\u003E\" + (pug.escape(null == (pug_interp = data.roomType) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"booking-card__price-info\\\"\\u003E\\u003Cspan\" + (\" class=\\\"booking-card__daily-price text_type_label-CTA\\\"\"+pug.attr(\"data-dailyPrice\", data.dailyPrice, true, true)+pug.attr(\"data-currency\", data.currency, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = data.dailyPrice) ? \"\" : pug_interp)) + (pug.escape(null == (pug_interp = data.currency) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"booking-card__payment-period text_type_regular\\\"\\u003E в сутки\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fheader\\u003E\";\npug_mixins[\"twoCalendarRangePicker\"].call({\nattributes: {\"addClasses\": \"booking-card__range-picker\"}\n}, {labels: [\"Прибытие\", \"Выезд\"], firstDate: data.arrivalDate, secondDate: data.departureDate});\npug_mixins[\"input\"](\"Гости\",\n\t\t\t\"dropdown customers unified\",\n\t\t\t\"Сколько гостей\",\n\t\t\t\"booking-card__guests-dropdown\",\n\t\t\t\"\",\n\t\t\tdata.dropdownItems);\npug_html = pug_html + \"\\u003Cdiv class=\\\"booking-card__check-container text_type_regular\\\"\\u003E\\u003Cdiv class=\\\"booking-card__staying-cost-row row\\\"\\u003E\\u003Cspan class=\\\"booking-card__staying-cost-calculation col1\\\"\\u003Etest\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"booking-card__staying-cost-sum col3\\\"\\u003Etest\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"booking-card__services-cost-row row\\\"\\u003E\\u003Cspan\" + (\" class=\\\"booking-card__services col1\\\"\"+pug.attr(\"data-services\", data.services, true, true)) + \"\\u003E\\u003C\\u002Fspan\\u003E\";\npug_mixins[\"infoIcon\"].call({\nattributes: {\"addClasses\": \"col2\"}\n});\npug_html = pug_html + \"\\u003Cspan class=\\\"booking-card__services-sum col3\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"booking-card__additional-services-row row\\\"\\u003E\\u003Cspan class=\\\"booking-card__additional-services-text col1\\\"\\u003EСбор за дополнительные услуги\\u003C\\u002Fspan\\u003E\";\npug_mixins[\"infoIcon\"].call({\nattributes: {\"addClasses\": \"col2\"}\n});\npug_html = pug_html + \"\\u003Cspan\" + (\" class=\\\"booking-card__additional-services-sum col3\\\"\"+pug.attr(\"data-addServices\", data.additionalPrice, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = data.additionalPrice) ? \"\" : pug_interp)) + (pug.escape(null == (pug_interp = data.currency) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"booking-card__summary text_type_item-title\\\"\\u003E\\u003Cspan class=\\\"booking-card__summary-text\\\"\\u003EИтого\\u003C\\u002Fspan\\u003E\\u003Cdiv class=\\\"booking-card__summary-dash-underline\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cspan class=\\\"booking-card__summary-total-cost\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\";\npug_mixins[\"Button\"].call({\nattributes: {\"decoration\": \"enterArrow\"}\n}, \"Забронировать\",\n\t\t\t\"button_type_filled button_size_wide booking-card__booking-button\"\n\t\t\t);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"infoIcon\"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cspan\" + (pug.attr(\"class\", pug.classes([`booking-card__info-icon ${attributes.addClasses ? attributes.addClasses : \"\"}`], [true]), false, true)) + \"\\u003Ei\\u003C\\u002Fspan\\u003E\";\n};\npug_mixins[\"bookingCard\"].call({\nattributes: {\"addClasses\": \"room-details__booking-card\"}\n}, {\n\t\t\t\troomNumber: \"888\",\n\t\t\t\troomType: \"люкс\",\n\t\t\t\tcurrency: \"₽\",\n\t\t\t\tdailyPrice: 9990,\n\t\t\t\tarrivalDate: \"19.08.2019\",\n\t\t\t\tdepartureDate: \"23.08.2019\",\n\t\t\t\tservices: [{name: \"скидка\", cost: -2179}],\n\t\t\t\tadditionalPrice: 300,\n\t\t\t\tdropdownItems: [{name: \"Взрослые\", value: 2}, {name: \"Дети\", value: 1}, {name: \"Младенцы\"}]\n\t\t\t});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C!--Футер--\\u003E\";\npug_mixins[\"socialMedia\"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"footer__social-media\\\"\\u003E\\u003Ca class=\\\"footer__twitter-icon footer__icon fab fa-twitter\\\" href=\\\"https:\\u002F\\u002Ftwitter.com\\u002F\\\" target=\\\"_blank\\\"\\u003E\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"span footer__facebook-icon footer__icon fab fa-facebook-square\\\" href=\\\"https:\\u002F\\u002Ffacebook.com\\u002F\\\" target=\\\"_blank\\\"\\u003E\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"span footer__instagram-icon footer__icon fab fa-instagram\\\" href=\\\"https:\\u002F\\u002Fwww.instagram.com\\u002F\\\" target=\\\"_blank\\\"\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"largeFooter\"] = pug_interp = function(data={}, links=[], subscription={}){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_mixins[\"addTextInput\"] = pug_interp = function(tiAttributes, tiAdditional, tiClassNames, tiTitle, tiTypes){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\n// iterate Object.values(tiAttributes)\n;(function(){\n  var $$obj = Object.values(tiAttributes);\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += tiClassNames[index] + \"_type_text \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += tiClassNames[index] + \"_type_text \"\n    }\n  }\n}).call(this);\n\ntiAttributes.controlAttributes.type = \"text\"\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(tiAttributes.blockAttributes, true)) + \"\\u003E\";\nif (tiTitle) {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(tiAttributes.titleAttributes, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = tiTitle) ? \"\" : pug_interp)) + \"\\u003Cbr\\u003E\\u003Cdiv\" + (pug.attrs(tiAttributes.controlWrapperAttrs, true)) + \"\\u003E\";\nif (tiTypes.includes(\"subscription\")) {\npug_mixins[\"enter-arrow\"]();\n}\npug_html = pug_html + \"\\u003Cinput\" + (pug.attrs(pug.merge([{\"value\": pug.escape(tiAdditional)},tiAttributes.controlAttributes]), true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(tiAttributes.titleAttributes, true)) + \"\\u003E\\u003Cdiv\" + (pug.attrs(tiAttributes.controlWrapperAttrs, true)) + \"\\u003E\";\nif (tiTypes.includes(\"subscription\")) {\npug_mixins[\"enter-arrow\"]();\n}\npug_html = pug_html + \"\\u003Cinput\" + (pug.attrs(pug.merge([{\"value\": pug.escape(imAdditional)},tiAttributes.controlAttributes]), true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"input\"] = pug_interp = function(title, types=\"\", placeholder, addClasses, mask, additional=\"\", range=[0, 5]){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar blockClassName = \"input\"\nvar titleClassName = \"input__title\"\nvar controlWrapperCN = \"input__control-wrapper\"\nvar controlClassName = \"input__control\"\nvar dropdownClassName = \"input__dropdown-list-wrapper\"\nvar classNames = [blockClassName, titleClassName, controlClassName, dropdownClassName, controlWrapperCN]\nvar blockAttributes = {class: blockClassName + \" \" + addClasses + \" \"}\nvar titleAttributes = {class: titleClassName + \" \" + \"text_type_label-CTA input__title \"}\nvar dropdownAttributes = {class: \" \"}\nvar controlWrapperAttrs = {class: `${controlWrapperCN} `}\nvar controlAttributes = {class: controlClassName + \" \", placeholder: placeholder}\nvar attributes = {blockAttributes, titleAttributes, controlAttributes, dropdownAttributes, controlWrapperAttrs}\n// iterate Object.values(attributes)\n;(function(){\n  var $$obj = Object.values(attributes);\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nif (types.includes(\"narrow\")) {\nvalue.class += classNames[index] + \"_width_narrow \"\n}\nelse\nif (types.includes(\"premedium\")) {\nvalue.class += classNames[index] + \"_width_premedium \"\n}\nelse\nif (types.includes(\"medium\")) {\nvalue.class += classNames[index] + \"_width_medium \"\n}\nif (types.includes(\"dropdown\") || types.includes(\"datepicker\")) {\npug_mixins[\"expand-arrow\"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cspan class=\\\"input__arrow_decoration_expand-arrow\\\"\\u003Eexpand_more\\u003C\\u002Fspan\\u003E\";\n};\nvalue.class += classNames[index] + \"_decoration_expand-arrow \"\n}\nelse\nif (types.includes(\"subscription\")) {\npug_mixins[\"enter-arrow\"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"input__enter-arrow\\\"\\u003Earrow_forward\\u003C\\u002Fdiv\\u003E\";\n};\nvalue.class += classNames[index] + \"_decoration_enter-arrow \"\n}\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nif (types.includes(\"narrow\")) {\nvalue.class += classNames[index] + \"_width_narrow \"\n}\nelse\nif (types.includes(\"premedium\")) {\nvalue.class += classNames[index] + \"_width_premedium \"\n}\nelse\nif (types.includes(\"medium\")) {\nvalue.class += classNames[index] + \"_width_medium \"\n}\nif (types.includes(\"dropdown\") || types.includes(\"datepicker\")) {\npug_mixins[\"expand-arrow\"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cspan class=\\\"input__arrow_decoration_expand-arrow\\\"\\u003Eexpand_more\\u003C\\u002Fspan\\u003E\";\n};\nvalue.class += classNames[index] + \"_decoration_expand-arrow \"\n}\nelse\nif (types.includes(\"subscription\")) {\npug_mixins[\"enter-arrow\"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"input__enter-arrow\\\"\\u003Earrow_forward\\u003C\\u002Fdiv\\u003E\";\n};\nvalue.class += classNames[index] + \"_decoration_enter-arrow \"\n}\n    }\n  }\n}).call(this);\n\nif (types.includes(\"datepicker\")) {\npug_mixins[\"addDatepicker\"] = pug_interp = function(dpAttributes={}, dpTypes=\"\", dpAdditional=[]){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\n// iterate Object.values(dpAttributes)\n;(function(){\n  var $$obj = Object.values(dpAttributes);\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_datepicker \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_datepicker \"\n    }\n  }\n}).call(this);\n\ndpAttributes.controlAttributes.type = \"select\"\ndpAttributes.controlAttributes[\"data-firstDate\"] = dpAdditional[0]\ndpAttributes.controlAttributes[\"data-secondDate\"] = additional[1]\ndpAttributes.controlAttributes.class += 'input__control_decoration_expand-arrow '\nif (dpTypes.includes(\"inline\")) {\npug_mixins[\"createInlineDatepicker\"] = pug_interp = function(idpAttributes={}, idpTypes=\"\", idpAdditional=[]){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(idpAttributes.blockAttributes, true)) + \"\\u003E\\u003Cinput\" + (pug.attrs(idpAttributes.controlAttributes, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\ndpAttributes.blockAttributes.class += \"datepicker_inline \"\npug_mixins[\"createInlineDatepicker\"](dpAttributes, dpTypes, dpAdditional);\n}\nelse {\npug_mixins[\"createDatepicker\"](dpAttributes, dpTypes, dpAdditional);\n}\n};\npug_mixins[\"createDatepicker\"] = pug_interp = function(dpAttributes={}, dpTypes=\"\", dpAdditional=[]){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(dpAttributes.blockAttributes, true)) + \"\\u003E\";\nif (title) {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(dpAttributes.titleAttributes, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = title) ? \"\" : pug_interp)) + \"\\u003Cbr\\u003E\\u003Cdiv\" + (pug.attrs(dpAttributes.controlWrapperAttrs, true)) + \"\\u003E\";\npug_mixins[\"expand-arrow\"]();\npug_html = pug_html + \"\\u003Cinput\" + (pug.attrs(dpAttributes.controlAttributes, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(dpAttributes.titleAttributes, true)) + \"\\u003E\\u003Cdiv\" + (pug.attrs(dpAttributes.controlWrapperAttrs, true)) + \"\\u003E\\u003Cinput\" + (pug.attrs(dpAttributes.controlAttributes, true)) + \"\\u003E\";\npug_mixins[\"expand-arrow\"]();\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"addDatepicker\"](attributes, types, additional);\n}\nelse\nif (types.includes(\"dropdown\")) {\npug_mixins[\"spinner\"] = pug_interp = function(range, element, index, initValue){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar start = range[0]\nvar end = range[1]\npug_html = pug_html + \"\\u003Cdiv class=\\\"input_type_spinner\\\"\\u003E\\u003Cinput\" + (\" class=\\\"input__value_type_spinner text_type_label-CTA\\\"\"+pug.attr(\"data-name\", element, true, true)+pug.attr(\"data-min\", range[0], true, true)+pug.attr(\"data-max\", range[1], true, true)+pug.attr(\"data-index\", index, true, true)+pug.attr(\"value\", initValue ? initValue : 0, true, true)+\" readonly\") + \"\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"Button\"] = pug_interp = function(text, addClasses, params={isTextSized: false, isLink: false}){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nlet decorationText = \"\"\nconst decoration = attributes.decoration ? attributes.decoration.toLowerCase() : \"\"\nconst arrowDecorationCN = \"button_decoration_enter-arrow\"\nswitch (decoration){\ncase \"enterarrow\":\ndecorationText = \"arrow_forward\"\naddClasses += ` ${arrowDecorationCN} `\n  break;\n}\nif (params.isTextSized) {\naddClasses += ` button_text-sized `\n}\nif (params.isLink) {\npug_html = pug_html + \"\\u003Ca\" + (pug.attr(\"class\", pug.classes([\"button \" + addClasses], [true]), false, true)) + \"\\u003E\";\nif (addClasses.includes(\"bordered\")) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__border button__border_type_bordered\\\"\\u003E\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\";\n}\nif (addClasses.includes(arrowDecorationCN)) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__decoration\\\"\\u003E\" + (pug.escape(null == (pug_interp = decorationText) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fa\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([\"button \" + addClasses], [true]), false, true)) + \"\\u003E\";\nif (addClasses.includes(\"bordered\")) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__border button__border_type_bordered\\\"\\u003E\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Cbutton class=\\\"button__control text_type_label-CTA \\\"\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\";\n}\nif (addClasses.includes(arrowDecorationCN)) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"button__decoration\\\"\\u003E\" + (pug.escape(null == (pug_interp = decorationText) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n}\n};\npug_mixins[\"dropdownList\"] = pug_interp = function(elementNames = {}, attr, range){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(attr, true)) + \"\\u003E\\u003Cdiv class=\\\"input__dropdown-list_type_dropdown\\\"\\u003E\";\n// iterate elementNames\n;(function(){\n  var $$obj = elementNames;\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var element = $$obj[index];\npug_html = pug_html + \"\\u003Cdiv class=\\\"text_type_label-CTA input__dropdown-list-row_type_dropdown\\\"\\u003E\\u003Cp class=\\\"input__dropdown-text_type_dropdown\\\"\\u003E\" + (pug.escape(null == (pug_interp = element.name) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\";\npug_mixins[\"spinner\"](range, element.name, index, element.value);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var element = $$obj[index];\npug_html = pug_html + \"\\u003Cdiv class=\\\"text_type_label-CTA input__dropdown-list-row_type_dropdown\\\"\\u003E\\u003Cp class=\\\"input__dropdown-text_type_dropdown\\\"\\u003E\" + (pug.escape(null == (pug_interp = element.name) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\";\npug_mixins[\"spinner\"](range, element.name, index, element.value);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"input__control-buttons-container\\\"\\u003E\";\npug_mixins[\"Button\"](\"Очистить\", \"button_type_text input__clear-button button_hovered input__control-button\");\npug_mixins[\"Button\"](\"Применить\", \"button_type_text input__confirm-button input__control-button\");\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"addDropdown\"] = pug_interp = function(ddAttributes, ddTypes, ddAdditional){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\n// iterate Object.values(ddAttributes)\n;(function(){\n  var $$obj = Object.values(ddAttributes);\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_dropdown \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_type_dropdown \"\n    }\n  }\n}).call(this);\n\ncontrolAttributes.type = \"select\"\nif (ddTypes.includes(\"unified\")) {\nddAttributes.dropdownAttributes.class += dropdownClassName + \"_unified \"\n}\nif (ddTypes.includes(\"rooms\")) {\nddAttributes.dropdownAttributes.class += dropdownClassName + \"_rooms \"\n}\nelse\nif (ddTypes.includes(\"customers\")) {\nddAttributes.dropdownAttributes.class += dropdownClassName + \"_customers \"\n}\nif (ddTypes.includes(\"opened\")) {\nddAttributes.blockAttributes.class += blockClassName + \"_type_dropdown-opened \"\n}\nif (ddTypes.includes(\"pure\")) {\nddAttributes.blockAttributes.class += blockClassName + \"_type_dropdown-pure \"\n}\nif (ddTypes.includes(\"unaccepted\")) {\nddAttributes.blockAttributes.class += blockClassName + \"_type_dropdown-unaccepted \"\n}\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(ddAttributes.blockAttributes, true)) + \"\\u003E\";\nif (title) {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(ddAttributes.titleAttributes, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = title) ? \"\" : pug_interp)) + \"\\u003Cbr\\u003E\\u003Cdiv\" + (pug.attrs(ddAttributes.controlWrapperAttrs, true)) + \"\\u003E\";\npug_mixins[\"expand-arrow\"]();\npug_html = pug_html + \"\\u003Cinput\" + (pug.attrs(ddAttributes.controlAttributes, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(ddAttributes.titleAttributes, true)) + \"\\u003E\\u003Cdiv\" + (pug.attrs(ddAttributes.controlWrapperAttrs, true)) + \"\\u003E\\u003Cinput\" + (pug.attrs(ddAttributes.controlAttributes, true)) + \"\\u003E\";\npug_mixins[\"expand-arrow\"]();\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\npug_mixins[\"dropdownList\"](ddAdditional, ddAttributes.dropdownAttributes, range);\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"addDropdown\"](attributes, types, additional);\n}\nelse\nif (types.includes(\"text\")) {\npug_mixins[\"addTextInput\"](attributes, additional, classNames, title, types);\n}\nelse\nif (types.includes(\"mask\")) {\npug_mixins[\"addMaskedInput\"] = pug_interp = function(imAttributes, imAdditional, miTypes){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_mixins[\"enter-arrow\"] = pug_interp = function(){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"input__enter-arrow\\\"\\u003Earrow_forward\\u003C\\u002Fdiv\\u003E\";\n};\n// iterate Object.values(imAttributes)\n;(function(){\n  var $$obj = Object.values(imAttributes);\n  if ('number' == typeof $$obj.length) {\n      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {\n        var value = $$obj[index];\nvalue.class += classNames[index] + \"_masked \"\n      }\n  } else {\n    var $$l = 0;\n    for (var index in $$obj) {\n      $$l++;\n      var value = $$obj[index];\nvalue.class += classNames[index] + \"_masked \"\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003Cdiv\" + (pug.attrs(imAttributes.blockAttributes, true)) + \"\\u003E\";\nif (title) {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(imAttributes.titleAttributes, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = title) ? \"\" : pug_interp)) + \"\\u003Cbr\\u003E\\u003Cdiv\" + (pug.attrs(imAttributes.controlWrapperAttrs, true)) + \"\\u003E\";\nif (miTypes.includes(\"subscription\")) {\npug_mixins[\"enterArrow\"]();\n}\npug_html = pug_html + \"\\u003Cinput\" + (pug.attrs(pug.merge([{\"value\": pug.escape(imAdditional)},imAttributes.controlAttributes]), true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\nelse {\npug_html = pug_html + \"\\u003Clabel\" + (pug.attrs(imAttributes.titleAttributes, true)) + \"\\u003E\\u003Cdiv\" + (pug.attrs(imAttributes.controlWrapperAttrs, true)) + \"\\u003E\\u003Cinput\" + (pug.attrs(pug.merge([{\"value\": pug.escape(imAdditional)},imAttributes.controlAttributes]), true)) + \"\\u003E\";\nif (miTypes.includes(\"subscription\")) {\npug_mixins[\"enterArrow\"]();\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"addMaskedInput\"](attributes, additional, additional, types);\n}\n};\nlet _subscription = subscription;\n_subscription.title = _subscription.title ? _subscription.title : \"Subscribe to our newsletter\";\n_subscription.text = _subscription.text ? _subscription.text : \"Receive our latest news and promotions in your inbox!\";\npug_html = pug_html + \"\\u003Cfooter\" + (pug.attr(\"class\", pug.classes([`footer footer_type_large ${attributes.addClasses}`], [true]), false, true)) + \"\\u003E\\u003Cdiv class=\\\"footer__content-section\\\"\\u003E\\u003Cdiv class=\\\"footer__logo-section\\\"\\u003E\\u003Cimg\" + (\" class=\\\"footer__logo\\\"\"+pug.attr(\"src\", data.logo, true, true)+\" alt=\\\"logo\\\"\") + \"\\u003E\\u003Cspan class=\\\"footer__logo-text text_type_regular\\\"\\u003E\" + (pug.escape(null == (pug_interp = data.text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer__links-section\\\"\\u003E\";\n// iterate links\n;(function(){\n  var $$obj = links;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index32 = 0, $$l = $$obj.length; pug_index32 < $$l; pug_index32++) {\n        var column = $$obj[pug_index32];\npug_html = pug_html + \"\\u003Cdiv class=\\\"footer__links-column\\\"\\u003E\\u003Ch3 class=\\\"footer__links-section-title text_type_label-CTA\\\"\\u003E\" + (pug.escape(null == (pug_interp = column.title) ? \"\" : pug_interp)) + \"\\u003C\\u002Fh3\\u003E\";\nif (column.links) {\n// iterate column.links\n;(function(){\n  var $$obj = column.links;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index33 = 0, $$l = $$obj.length; pug_index33 < $$l; pug_index33++) {\n        var link = $$obj[pug_index33];\npug_html = pug_html + \"\\u003Ca\" + (\" class=\\\"footer__link text_type_regular\\\"\"+pug.attr(\"href\", link.url, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = link.text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index33 in $$obj) {\n      $$l++;\n      var link = $$obj[pug_index33];\npug_html = pug_html + \"\\u003Ca\" + (\" class=\\\"footer__link text_type_regular\\\"\"+pug.attr(\"href\", link.url, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = link.text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\";\n    }\n  }\n}).call(this);\n\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index32 in $$obj) {\n      $$l++;\n      var column = $$obj[pug_index32];\npug_html = pug_html + \"\\u003Cdiv class=\\\"footer__links-column\\\"\\u003E\\u003Ch3 class=\\\"footer__links-section-title text_type_label-CTA\\\"\\u003E\" + (pug.escape(null == (pug_interp = column.title) ? \"\" : pug_interp)) + \"\\u003C\\u002Fh3\\u003E\";\nif (column.links) {\n// iterate column.links\n;(function(){\n  var $$obj = column.links;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index34 = 0, $$l = $$obj.length; pug_index34 < $$l; pug_index34++) {\n        var link = $$obj[pug_index34];\npug_html = pug_html + \"\\u003Ca\" + (\" class=\\\"footer__link text_type_regular\\\"\"+pug.attr(\"href\", link.url, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = link.text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index34 in $$obj) {\n      $$l++;\n      var link = $$obj[pug_index34];\npug_html = pug_html + \"\\u003Ca\" + (\" class=\\\"footer__link text_type_regular\\\"\"+pug.attr(\"href\", link.url, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = link.text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\";\n    }\n  }\n}).call(this);\n\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer__subscribe-section\\\"\\u003E\\u003Ch3 class=\\\"footer__subscription-title text_type_label-CTA\\\"\\u003E\" + (pug.escape(null == (pug_interp = subscription.title) ? \"\" : pug_interp)) + \"\\u003C\\u002Fh3\\u003E\\u003Cspan class=\\\"footer__subscription-text text_type_regular\\\"\\u003E\" + (pug.escape(null == (pug_interp = subscription.text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\";\npug_mixins[\"input\"](\"\", \"text premedium subscription\", subscription.emailPlaceholder, \"footer__subscribeInput\", \"\");\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer__copyright-bar\\\"\\u003E\\u003Cspan class=\\\"footer__copyright-text text_type_regular\\\"\\u003E\" + (pug.escape(null == (pug_interp = data.copyright) ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\";\npug_mixins[\"socialMedia\"]();\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Ffooter\\u003E\";\n};\n\n\n\n\n\n\npug_mixins[\"largeFooter\"].call({\nattributes: {\"addClasses\": \"room-details__footer\"}\n}, \n\t\t\t{\n\t\t\t\tlogo: logoPath,\n\t\t\t\ttext: \"Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»\",\n\t\t\t\tcopyright: \"Copyright © 2018 Toxin отель. Все права зачищены.\"\n\t\t\t},\n\t\t\t[\n\t\t\t\t{\n\t\t\t\t\ttitle: \"Навигация\",\n\t\t\t\t\tlinks:\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t{text: \"О нас\", url: \"#\"},\n\t\t\t\t\t\t\t{text: \"Новости\", url: \"#\"},\n\t\t\t\t\t\t\t{text: \"Служба поддержки\", url: \"#\"},\n\t\t\t\t\t\t\t{text: \"Услуги\", url: \"#\"}\n\t\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\ttitle: \"О нас\",\n\t\t\t\t\tlinks:\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t{text: \"О сервисе\", url: \"#\"},\n\t\t\t\t\t\t\t{text: \"Наша команда\", url: \"#\"},\n\t\t\t\t\t\t\t{text: \"Вакансии\", url: \"#\"},\n\t\t\t\t\t\t\t{text: \"Инвесторы\", url: \"#\"}\n\t\t\t\t\t\t]\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\ttitle: \"Служба поддержки\",\n\t\t\t\t\tlinks:\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t{text: \"Соглашения\", url: \"#\"},\n\t\t\t\t\t\t\t{text: \"Сообщества\", url: \"#\"},\n\t\t\t\t\t\t\t{text: \"Связь с нами\", url: \"#\"}\n\t\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t],\n\t\t\t{title: \"Подписка\", text: \"Получайте специальные предложения и новости сервиса\", emailPlaceholder: \"Email\"}\n\t\t);\npug_html = pug_html + \"\\u003C\\u002Fbody\\u003E\\u003C\\u002Fhtml\\u003E\";}.call(this,\"Object\" in locals_for_with?locals_for_with.Object:typeof Object!==\"undefined\"?Object:undefined,\"createChildrenRecursive\" in locals_for_with?locals_for_with.createChildrenRecursive:typeof createChildrenRecursive!==\"undefined\"?createChildrenRecursive:undefined,\"imAdditional\" in locals_for_with?locals_for_with.imAdditional:typeof imAdditional!==\"undefined\"?imAdditional:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/site-pages/room-details/room-details.pug?");

/***/ }),

/***/ "./src/site-pages/room-details/room-details.scss":
/*!*******************************************************!*\
  !*** ./src/site-pages/room-details/room-details.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/site-pages/room-details/room-details.scss?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ }),

/***/ "./vendor/jquery.maskedinput/src/jquery.maskedinput.js":
/*!*************************************************************!*\
  !*** ./vendor/jquery.maskedinput/src/jquery.maskedinput.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n(function (factory) {\n  if (true) {\n    // AMD. Register as an anonymous module.\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n})(function ($) {\n  var ua = navigator.userAgent,\n      iPhone = /iphone/i.test(ua),\n      chrome = /chrome/i.test(ua),\n      android = /android/i.test(ua),\n      caretTimeoutId;\n  $.mask = {\n    //Predefined character definitions\n    definitions: {\n      '9': \"[0-9]\",\n      'a': \"[A-Za-z]\",\n      '*': \"[A-Za-z0-9]\"\n    },\n    autoclear: true,\n    dataName: \"rawMaskFn\",\n    placeholder: '_'\n  };\n  $.fn.extend({\n    //Helper Function for Caret positioning\n    caret: function caret(begin, end) {\n      var range;\n\n      if (this.length === 0 || this.is(\":hidden\") || this.get(0) !== document.activeElement) {\n        return;\n      }\n\n      if (typeof begin == 'number') {\n        end = typeof end === 'number' ? end : begin;\n        return this.each(function () {\n          if (this.setSelectionRange) {\n            this.setSelectionRange(begin, end);\n          } else if (this.createTextRange) {\n            range = this.createTextRange();\n            range.collapse(true);\n            range.moveEnd('character', end);\n            range.moveStart('character', begin);\n            range.select();\n          }\n        });\n      } else {\n        if (this[0].setSelectionRange) {\n          begin = this[0].selectionStart;\n          end = this[0].selectionEnd;\n        } else if (document.selection && document.selection.createRange) {\n          range = document.selection.createRange();\n          begin = 0 - range.duplicate().moveStart('character', -100000);\n          end = begin + range.text.length;\n        }\n\n        return {\n          begin: begin,\n          end: end\n        };\n      }\n    },\n    unmask: function unmask() {\n      return this.trigger(\"unmask\");\n    },\n    mask: function mask(_mask, settings) {\n      var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;\n\n      if (!_mask && this.length > 0) {\n        input = $(this[0]);\n        var fn = input.data($.mask.dataName);\n        return fn ? fn() : undefined;\n      }\n\n      settings = $.extend({\n        autoclear: $.mask.autoclear,\n        placeholder: $.mask.placeholder,\n        // Load default placeholder\n        completed: null\n      }, settings);\n      defs = $.mask.definitions;\n      tests = [];\n      partialPosition = len = _mask.length;\n      firstNonMaskPos = null;\n      _mask = String(_mask);\n      $.each(_mask.split(\"\"), function (i, c) {\n        if (c == '?') {\n          len--;\n          partialPosition = i;\n        } else if (defs[c]) {\n          tests.push(new RegExp(defs[c]));\n\n          if (firstNonMaskPos === null) {\n            firstNonMaskPos = tests.length - 1;\n          }\n\n          if (i < partialPosition) {\n            lastRequiredNonMaskPos = tests.length - 1;\n          }\n        } else {\n          tests.push(null);\n        }\n      });\n      return this.trigger(\"unmask\").each(function () {\n        var input = $(this),\n            buffer = $.map(_mask.split(\"\"), function (c, i) {\n          if (c != '?') {\n            return defs[c] ? getPlaceholder(i) : c;\n          }\n        }),\n            defaultBuffer = buffer.join(''),\n            focusText = input.val();\n\n        function tryFireCompleted() {\n          if (!settings.completed) {\n            return;\n          }\n\n          for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {\n            if (tests[i] && buffer[i] === getPlaceholder(i)) {\n              return;\n            }\n          }\n\n          settings.completed.call(input);\n        }\n\n        function getPlaceholder(i) {\n          if (i < settings.placeholder.length) return settings.placeholder.charAt(i);\n          return settings.placeholder.charAt(0);\n        }\n\n        function seekNext(pos) {\n          while (++pos < len && !tests[pos]) {\n            ;\n          }\n\n          return pos;\n        }\n\n        function seekPrev(pos) {\n          while (--pos >= 0 && !tests[pos]) {\n            ;\n          }\n\n          return pos;\n        }\n\n        function shiftL(begin, end) {\n          var i, j;\n\n          if (begin < 0) {\n            return;\n          }\n\n          for (i = begin, j = seekNext(end); i < len; i++) {\n            if (tests[i]) {\n              if (j < len && tests[i].test(buffer[j])) {\n                buffer[i] = buffer[j];\n                buffer[j] = getPlaceholder(j);\n              } else {\n                break;\n              }\n\n              j = seekNext(j);\n            }\n          }\n\n          writeBuffer();\n          input.caret(Math.max(firstNonMaskPos, begin));\n        }\n\n        function shiftR(pos) {\n          var i, c, j, t;\n\n          for (i = pos, c = getPlaceholder(pos); i < len; i++) {\n            if (tests[i]) {\n              j = seekNext(i);\n              t = buffer[i];\n              buffer[i] = c;\n\n              if (j < len && tests[j].test(t)) {\n                c = t;\n              } else {\n                break;\n              }\n            }\n          }\n        }\n\n        function androidInputEvent(e) {\n          var curVal = input.val();\n          var pos = input.caret();\n\n          if (oldVal && oldVal.length && oldVal.length > curVal.length) {\n            // a deletion or backspace happened\n            checkVal(true);\n\n            while (pos.begin > 0 && !tests[pos.begin - 1]) {\n              pos.begin--;\n            }\n\n            if (pos.begin === 0) {\n              while (pos.begin < firstNonMaskPos && !tests[pos.begin]) {\n                pos.begin++;\n              }\n            }\n\n            input.caret(pos.begin, pos.begin);\n          } else {\n            var pos2 = checkVal(true);\n            var lastEnteredValue = curVal.charAt(pos.begin);\n\n            if (pos.begin < len) {\n              if (!tests[pos.begin]) {\n                pos.begin++;\n\n                if (tests[pos.begin].test(lastEnteredValue)) {\n                  pos.begin++;\n                }\n              } else {\n                if (tests[pos.begin].test(lastEnteredValue)) {\n                  pos.begin++;\n                }\n              }\n            }\n\n            input.caret(pos.begin, pos.begin);\n          }\n\n          tryFireCompleted();\n        }\n\n        function blurEvent(e) {\n          checkVal();\n          if (input.val() != focusText) input.change();\n        }\n\n        function keydownEvent(e) {\n          if (input.prop(\"readonly\")) {\n            return;\n          }\n\n          var k = e.which || e.keyCode,\n              pos,\n              begin,\n              end;\n          oldVal = input.val(); //backspace, delete, and escape get special treatment\n\n          if (k === 8 || k === 46 || iPhone && k === 127) {\n            pos = input.caret();\n            begin = pos.begin;\n            end = pos.end;\n\n            if (end - begin === 0) {\n              begin = k !== 46 ? seekPrev(begin) : end = seekNext(begin - 1);\n              end = k === 46 ? seekNext(end) : end;\n            }\n\n            clearBuffer(begin, end);\n            shiftL(begin, end - 1);\n            e.preventDefault();\n          } else if (k === 13) {\n            // enter\n            blurEvent.call(this, e);\n          } else if (k === 27) {\n            // escape\n            input.val(focusText);\n            input.caret(0, checkVal());\n            e.preventDefault();\n          }\n        }\n\n        function keypressEvent(e) {\n          if (input.prop(\"readonly\")) {\n            return;\n          }\n\n          var k = e.which || e.keyCode,\n              pos = input.caret(),\n              p,\n              c,\n              next;\n\n          if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {\n            //Ignore\n            return;\n          } else if (k && k !== 13) {\n            if (pos.end - pos.begin !== 0) {\n              clearBuffer(pos.begin, pos.end);\n              shiftL(pos.begin, pos.end - 1);\n            }\n\n            p = seekNext(pos.begin - 1);\n\n            if (p < len) {\n              c = String.fromCharCode(k);\n\n              if (tests[p].test(c)) {\n                shiftR(p);\n                buffer[p] = c;\n                writeBuffer();\n                next = seekNext(p);\n\n                if (android) {\n                  //Path for CSP Violation on FireFox OS 1.1\n                  var proxy = function proxy() {\n                    $.proxy($.fn.caret, input, next)();\n                  };\n\n                  setTimeout(proxy, 0);\n                } else {\n                  input.caret(next);\n                }\n\n                if (pos.begin <= lastRequiredNonMaskPos) {\n                  tryFireCompleted();\n                }\n              }\n            }\n\n            e.preventDefault();\n          }\n        }\n\n        function clearBuffer(start, end) {\n          var i;\n\n          for (i = start; i < end && i < len; i++) {\n            if (tests[i]) {\n              buffer[i] = getPlaceholder(i);\n            }\n          }\n        }\n\n        function writeBuffer() {\n          input.val(buffer.join(''));\n        }\n\n        function checkVal(allow) {\n          //try to place characters where they belong\n          var test = input.val(),\n              lastMatch = -1,\n              i,\n              c,\n              pos;\n\n          for (i = 0, pos = 0; i < len; i++) {\n            if (tests[i]) {\n              buffer[i] = getPlaceholder(i);\n\n              while (pos++ < test.length) {\n                c = test.charAt(pos - 1);\n\n                if (tests[i].test(c)) {\n                  buffer[i] = c;\n                  lastMatch = i;\n                  break;\n                }\n              }\n\n              if (pos > test.length) {\n                clearBuffer(i + 1, len);\n                break;\n              }\n            } else {\n              if (buffer[i] === test.charAt(pos)) {\n                pos++;\n              }\n\n              if (i < partialPosition) {\n                lastMatch = i;\n              }\n            }\n          }\n\n          if (allow) {\n            writeBuffer();\n          } else if (lastMatch + 1 < partialPosition) {\n            if (settings.autoclear || buffer.join('') === defaultBuffer) {\n              // Invalid value. Remove it and replace it with the\n              // mask, which is the default behavior.\n              if (input.val()) input.val(\"\");\n              clearBuffer(0, len);\n            } else {\n              // Invalid value, but we opt to show the value to the\n              // user and allow them to correct their mistake.\n              writeBuffer();\n            }\n          } else {\n            writeBuffer();\n            input.val(input.val().substring(0, lastMatch + 1));\n          }\n\n          return partialPosition ? i : firstNonMaskPos;\n        }\n\n        input.data($.mask.dataName, function () {\n          return $.map(buffer, function (c, i) {\n            return tests[i] && c != getPlaceholder(i) ? c : null;\n          }).join('');\n        });\n        input.one(\"unmask\", function () {\n          input.off(\".mask\").removeData($.mask.dataName);\n        }).on(\"focus.mask\", function () {\n          if (input.prop(\"readonly\")) {\n            return;\n          }\n\n          clearTimeout(caretTimeoutId);\n          var pos;\n          focusText = input.val();\n          pos = checkVal();\n          caretTimeoutId = setTimeout(function () {\n            if (input.get(0) !== document.activeElement) {\n              return;\n            }\n\n            writeBuffer();\n\n            if (pos == _mask.replace(\"?\", \"\").length) {\n              input.caret(0, pos);\n            } else {\n              input.caret(pos);\n            }\n          }, 10);\n        }).on(\"blur.mask\", blurEvent).on(\"keydown.mask\", keydownEvent).on(\"keypress.mask\", keypressEvent).on(\"input.mask paste.mask\", function () {\n          if (input.prop(\"readonly\")) {\n            return;\n          }\n\n          setTimeout(function () {\n            var pos = checkVal(true);\n            input.caret(pos);\n            tryFireCompleted();\n          }, 0);\n        });\n\n        if (chrome && android) {\n          input.off('input.mask').on('input.mask', androidInputEvent);\n        }\n\n        checkVal(); //Perform initial check for existing values\n      });\n    }\n  });\n});\n\n//# sourceURL=webpack:///./vendor/jquery.maskedinput/src/jquery.maskedinput.js?");

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