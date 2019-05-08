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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		"index": 0
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
/******/ 	deferredModules.push(["./src/index.js","vendors~index~second","index~second"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/sass-resources-loader/lib/loader.js?!./src/styles.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/sass-resources-loader/lib/loader.js??ref--6-4!./src/styles.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/sass-resources-loader/lib/loader.js??ref--6-4");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _vendor_jquery_maskedinput_src_jquery_maskedinput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/jquery.maskedinput/src/jquery.maskedinput */ \"./vendor/jquery.maskedinput/src/jquery.maskedinput.js\");\n/* harmony import */ var _vendor_jquery_maskedinput_src_jquery_maskedinput__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_jquery_maskedinput_src_jquery_maskedinput__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ \"./src/common.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.pug */ \"./src/index.pug\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_pug__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"hi, im first\");\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.pug":
/*!***********************!*\
  !*** ./src/index.pug ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;var pug_indent = [];\npug_html = pug_html + \"\\u003C!DOCTYPE html\\u003E\\n\\u003Chtml lang=\\\"ru\\\"\\u003E\\n  \\u003Chead\\u003E\\n    \\u003Cmeta charset=\\\"UTF-8\\\"\\u003E\\n    \\u003Ctitle\\u003ETOXIN\\u003C\\u002Ftitle\\u003E\\n  \\u003C\\u002Fhead\\u003E\\n  \\u003Cbody\\u003E\\u003Ca class=\\\"widgetTitle\\\" href=\\\"second.html\\\"\\u003EGo to UI-Kit\\u003C\\u002Fa\\u003E\\u003C\\u002Fbody\\u003E\\n\\u003C\\u002Fhtml\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/index.pug?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!../node_modules/sass-resources-loader/lib/loader.js??ref--6-4!./styles.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/sass-resources-loader/lib/loader.js?!./src/styles.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ }),

/***/ "./vendor/jquery.maskedinput/src/jquery.maskedinput.js":
/*!*************************************************************!*\
  !*** ./vendor/jquery.maskedinput/src/jquery.maskedinput.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {\n    if (true) {\n        // AMD. Register as an anonymous module.\n        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n}(function ($) {\n\nvar ua = navigator.userAgent,\n\tiPhone = /iphone/i.test(ua),\n\tchrome = /chrome/i.test(ua),\n\tandroid = /android/i.test(ua),\n\tcaretTimeoutId;\n\n$.mask = {\n\t//Predefined character definitions\n\tdefinitions: {\n\t\t'9': \"[0-9]\",\n\t\t'a': \"[A-Za-z]\",\n\t\t'*': \"[A-Za-z0-9]\"\n\t},\n\tautoclear: true,\n\tdataName: \"rawMaskFn\",\n\tplaceholder: '_'\n};\n\n$.fn.extend({\n\t//Helper Function for Caret positioning\n\tcaret: function(begin, end) {\n\t\tvar range;\n\n\t\tif (this.length === 0 || this.is(\":hidden\") || this.get(0) !== document.activeElement) {\n\t\t\treturn;\n\t\t}\n\n\t\tif (typeof begin == 'number') {\n\t\t\tend = (typeof end === 'number') ? end : begin;\n\t\t\treturn this.each(function() {\n\t\t\t\tif (this.setSelectionRange) {\n\t\t\t\t\tthis.setSelectionRange(begin, end);\n\t\t\t\t} else if (this.createTextRange) {\n\t\t\t\t\trange = this.createTextRange();\n\t\t\t\t\trange.collapse(true);\n\t\t\t\t\trange.moveEnd('character', end);\n\t\t\t\t\trange.moveStart('character', begin);\n\t\t\t\t\trange.select();\n\t\t\t\t}\n\t\t\t});\n\t\t} else {\n\t\t\tif (this[0].setSelectionRange) {\n\t\t\t\tbegin = this[0].selectionStart;\n\t\t\t\tend = this[0].selectionEnd;\n\t\t\t} else if (document.selection && document.selection.createRange) {\n\t\t\t\trange = document.selection.createRange();\n\t\t\t\tbegin = 0 - range.duplicate().moveStart('character', -100000);\n\t\t\t\tend = begin + range.text.length;\n\t\t\t}\n\t\t\treturn { begin: begin, end: end };\n\t\t}\n\t},\n\tunmask: function() {\n\t\treturn this.trigger(\"unmask\");\n\t},\n\tmask: function(mask, settings) {\n\t\tvar input,\n\t\t\tdefs,\n\t\t\ttests,\n\t\t\tpartialPosition,\n\t\t\tfirstNonMaskPos,\n            lastRequiredNonMaskPos,\n            len,\n            oldVal;\n\n\t\tif (!mask && this.length > 0) {\n\t\t\tinput = $(this[0]);\n            var fn = input.data($.mask.dataName)\n\t\t\treturn fn?fn():undefined;\n\t\t}\n\n\t\tsettings = $.extend({\n\t\t\tautoclear: $.mask.autoclear,\n\t\t\tplaceholder: $.mask.placeholder, // Load default placeholder\n\t\t\tcompleted: null\n\t\t}, settings);\n\n\n\t\tdefs = $.mask.definitions;\n\t\ttests = [];\n\t\tpartialPosition = len = mask.length;\n\t\tfirstNonMaskPos = null;\n\n\t\tmask = String(mask);\n\n\t\t$.each(mask.split(\"\"), function(i, c) {\n\t\t\tif (c == '?') {\n\t\t\t\tlen--;\n\t\t\t\tpartialPosition = i;\n\t\t\t} else if (defs[c]) {\n\t\t\t\ttests.push(new RegExp(defs[c]));\n\t\t\t\tif (firstNonMaskPos === null) {\n\t\t\t\t\tfirstNonMaskPos = tests.length - 1;\n\t\t\t\t}\n                if(i < partialPosition){\n                    lastRequiredNonMaskPos = tests.length - 1;\n                }\n\t\t\t} else {\n\t\t\t\ttests.push(null);\n\t\t\t}\n\t\t});\n\n\t\treturn this.trigger(\"unmask\").each(function() {\n\t\t\tvar input = $(this),\n\t\t\t\tbuffer = $.map(\n    \t\t\t\tmask.split(\"\"),\n    \t\t\t\tfunction(c, i) {\n    \t\t\t\t\tif (c != '?') {\n    \t\t\t\t\t\treturn defs[c] ? getPlaceholder(i) : c;\n    \t\t\t\t\t}\n    \t\t\t\t}),\n\t\t\t\tdefaultBuffer = buffer.join(''),\n\t\t\t\tfocusText = input.val();\n\n            function tryFireCompleted(){\n                if (!settings.completed) {\n                    return;\n                }\n\n                for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {\n                    if (tests[i] && buffer[i] === getPlaceholder(i)) {\n                        return;\n                    }\n                }\n                settings.completed.call(input);\n            }\n\n            function getPlaceholder(i){\n                if(i < settings.placeholder.length)\n                    return settings.placeholder.charAt(i);\n                return settings.placeholder.charAt(0);\n            }\n\n\t\t\tfunction seekNext(pos) {\n\t\t\t\twhile (++pos < len && !tests[pos]);\n\t\t\t\treturn pos;\n\t\t\t}\n\n\t\t\tfunction seekPrev(pos) {\n\t\t\t\twhile (--pos >= 0 && !tests[pos]);\n\t\t\t\treturn pos;\n\t\t\t}\n\n\t\t\tfunction shiftL(begin,end) {\n\t\t\t\tvar i,\n\t\t\t\t\tj;\n\n\t\t\t\tif (begin<0) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tfor (i = begin, j = seekNext(end); i < len; i++) {\n\t\t\t\t\tif (tests[i]) {\n\t\t\t\t\t\tif (j < len && tests[i].test(buffer[j])) {\n\t\t\t\t\t\t\tbuffer[i] = buffer[j];\n\t\t\t\t\t\t\tbuffer[j] = getPlaceholder(j);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tj = seekNext(j);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\twriteBuffer();\n\t\t\t\tinput.caret(Math.max(firstNonMaskPos, begin));\n\t\t\t}\n\n\t\t\tfunction shiftR(pos) {\n\t\t\t\tvar i,\n\t\t\t\t\tc,\n\t\t\t\t\tj,\n\t\t\t\t\tt;\n\n\t\t\t\tfor (i = pos, c = getPlaceholder(pos); i < len; i++) {\n\t\t\t\t\tif (tests[i]) {\n\t\t\t\t\t\tj = seekNext(i);\n\t\t\t\t\t\tt = buffer[i];\n\t\t\t\t\t\tbuffer[i] = c;\n\t\t\t\t\t\tif (j < len && tests[j].test(t)) {\n\t\t\t\t\t\t\tc = t;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction androidInputEvent(e) {\n\t\t\t\tvar curVal = input.val();\n\t\t\t\tvar pos = input.caret();\n\t\t\t\tif (oldVal && oldVal.length && oldVal.length > curVal.length ) {\n\t\t\t\t\t// a deletion or backspace happened\n\t\t\t\t\tcheckVal(true);\n\t\t\t\t\twhile (pos.begin > 0 && !tests[pos.begin-1])\n\t\t\t\t\t\tpos.begin--;\n\t\t\t\t\tif (pos.begin === 0)\n\t\t\t\t\t{\n\t\t\t\t\t\twhile (pos.begin < firstNonMaskPos && !tests[pos.begin])\n\t\t\t\t\t\t\tpos.begin++;\n\t\t\t\t\t}\n\t\t\t\t\tinput.caret(pos.begin,pos.begin);\n\t\t\t\t} else {\n\t\t\t\t\tvar pos2 = checkVal(true);\n\t\t\t\t\tvar lastEnteredValue = curVal.charAt(pos.begin);\n\t\t\t\t\tif (pos.begin < len){\n\t\t\t\t\t\tif(!tests[pos.begin]){\n\t\t\t\t\t\t\tpos.begin++;\n\t\t\t\t\t\t\tif(tests[pos.begin].test(lastEnteredValue)){\n\t\t\t\t\t\t\t\tpos.begin++;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\tif(tests[pos.begin].test(lastEnteredValue)){\n\t\t\t\t\t\t\t\tpos.begin++;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tinput.caret(pos.begin,pos.begin);\n\t\t\t\t}\n\t\t\t\ttryFireCompleted();\n\t\t\t}\n\n\n\t\t\tfunction blurEvent(e) {\n                checkVal();\n\n                if (input.val() != focusText)\n                    input.change();\n            }\n\n\t\t\tfunction keydownEvent(e) {\n                if (input.prop(\"readonly\")){\n                    return;\n                }\n\n\t\t\t\tvar k = e.which || e.keyCode,\n\t\t\t\t\tpos,\n\t\t\t\t\tbegin,\n\t\t\t\t\tend;\n                    oldVal = input.val();\n\t\t\t\t//backspace, delete, and escape get special treatment\n\t\t\t\tif (k === 8 || k === 46 || (iPhone && k === 127)) {\n\t\t\t\t\tpos = input.caret();\n\t\t\t\t\tbegin = pos.begin;\n\t\t\t\t\tend = pos.end;\n\n\t\t\t\t\tif (end - begin === 0) {\n\t\t\t\t\t\tbegin=k!==46?seekPrev(begin):(end=seekNext(begin-1));\n\t\t\t\t\t\tend=k===46?seekNext(end):end;\n\t\t\t\t\t}\n\t\t\t\t\tclearBuffer(begin, end);\n\t\t\t\t\tshiftL(begin, end - 1);\n\n\t\t\t\t\te.preventDefault();\n\t\t\t\t} else if( k === 13 ) { // enter\n\t\t\t\t\tblurEvent.call(this, e);\n\t\t\t\t} else if (k === 27) { // escape\n\t\t\t\t\tinput.val(focusText);\n\t\t\t\t\tinput.caret(0, checkVal());\n\t\t\t\t\te.preventDefault();\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction keypressEvent(e) {\n                if (input.prop(\"readonly\")){\n                    return;\n                }\n\n\t\t\t\tvar k = e.which || e.keyCode,\n\t\t\t\t\tpos = input.caret(),\n\t\t\t\t\tp,\n\t\t\t\t\tc,\n\t\t\t\t\tnext;\n\n\t\t\t\tif (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore\n\t\t\t\t\treturn;\n\t\t\t\t} else if ( k && k !== 13 ) {\n\t\t\t\t\tif (pos.end - pos.begin !== 0){\n\t\t\t\t\t\tclearBuffer(pos.begin, pos.end);\n\t\t\t\t\t\tshiftL(pos.begin, pos.end-1);\n\t\t\t\t\t}\n\n\t\t\t\t\tp = seekNext(pos.begin - 1);\n\t\t\t\t\tif (p < len) {\n\t\t\t\t\t\tc = String.fromCharCode(k);\n\t\t\t\t\t\tif (tests[p].test(c)) {\n\t\t\t\t\t\t\tshiftR(p);\n\n\t\t\t\t\t\t\tbuffer[p] = c;\n\t\t\t\t\t\t\twriteBuffer();\n\t\t\t\t\t\t\tnext = seekNext(p);\n\n\t\t\t\t\t\t\tif(android){\n\t\t\t\t\t\t\t\t//Path for CSP Violation on FireFox OS 1.1\n\t\t\t\t\t\t\t\tvar proxy = function() {\n\t\t\t\t\t\t\t\t\t$.proxy($.fn.caret,input,next)();\n\t\t\t\t\t\t\t\t};\n\n\t\t\t\t\t\t\t\tsetTimeout(proxy,0);\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\tinput.caret(next);\n\t\t\t\t\t\t\t}\n                            if(pos.begin <= lastRequiredNonMaskPos){\n\t\t                         tryFireCompleted();\n                             }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\te.preventDefault();\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction clearBuffer(start, end) {\n\t\t\t\tvar i;\n\t\t\t\tfor (i = start; i < end && i < len; i++) {\n\t\t\t\t\tif (tests[i]) {\n\t\t\t\t\t\tbuffer[i] = getPlaceholder(i);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction writeBuffer() { input.val(buffer.join('')); }\n\n\t\t\tfunction checkVal(allow) {\n\t\t\t\t//try to place characters where they belong\n\t\t\t\tvar test = input.val(),\n\t\t\t\t\tlastMatch = -1,\n\t\t\t\t\ti,\n\t\t\t\t\tc,\n\t\t\t\t\tpos;\n\n\t\t\t\tfor (i = 0, pos = 0; i < len; i++) {\n\t\t\t\t\tif (tests[i]) {\n\t\t\t\t\t\tbuffer[i] = getPlaceholder(i);\n\t\t\t\t\t\twhile (pos++ < test.length) {\n\t\t\t\t\t\t\tc = test.charAt(pos - 1);\n\t\t\t\t\t\t\tif (tests[i].test(c)) {\n\t\t\t\t\t\t\t\tbuffer[i] = c;\n\t\t\t\t\t\t\t\tlastMatch = i;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (pos > test.length) {\n\t\t\t\t\t\t\tclearBuffer(i + 1, len);\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n                        if (buffer[i] === test.charAt(pos)) {\n                            pos++;\n                        }\n                        if( i < partialPosition){\n                            lastMatch = i;\n                        }\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (allow) {\n\t\t\t\t\twriteBuffer();\n\t\t\t\t} else if (lastMatch + 1 < partialPosition) {\n\t\t\t\t\tif (settings.autoclear || buffer.join('') === defaultBuffer) {\n\t\t\t\t\t\t// Invalid value. Remove it and replace it with the\n\t\t\t\t\t\t// mask, which is the default behavior.\n\t\t\t\t\t\tif(input.val()) input.val(\"\");\n\t\t\t\t\t\tclearBuffer(0, len);\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Invalid value, but we opt to show the value to the\n\t\t\t\t\t\t// user and allow them to correct their mistake.\n\t\t\t\t\t\twriteBuffer();\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\twriteBuffer();\n\t\t\t\t\tinput.val(input.val().substring(0, lastMatch + 1));\n\t\t\t\t}\n\t\t\t\treturn (partialPosition ? i : firstNonMaskPos);\n\t\t\t}\n\n\t\t\tinput.data($.mask.dataName,function(){\n\t\t\t\treturn $.map(buffer, function(c, i) {\n\t\t\t\t\treturn tests[i]&&c!=getPlaceholder(i) ? c : null;\n\t\t\t\t}).join('');\n\t\t\t});\n\n\n\t\t\tinput\n\t\t\t\t.one(\"unmask\", function() {\n\t\t\t\t\tinput\n\t\t\t\t\t\t.off(\".mask\")\n\t\t\t\t\t\t.removeData($.mask.dataName);\n\t\t\t\t})\n\t\t\t\t.on(\"focus.mask\", function() {\n                    if (input.prop(\"readonly\")){\n                        return;\n                    }\n\n\t\t\t\t\tclearTimeout(caretTimeoutId);\n\t\t\t\t\tvar pos;\n\n\t\t\t\t\tfocusText = input.val();\n\n\t\t\t\t\tpos = checkVal();\n\n\t\t\t\t\tcaretTimeoutId = setTimeout(function(){\n                        if(input.get(0) !== document.activeElement){\n                            return;\n                        }\n\t\t\t\t\t\twriteBuffer();\n\t\t\t\t\t\tif (pos == mask.replace(\"?\",\"\").length) {\n\t\t\t\t\t\t\tinput.caret(0, pos);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tinput.caret(pos);\n\t\t\t\t\t\t}\n\t\t\t\t\t}, 10);\n\t\t\t\t})\n\t\t\t\t.on(\"blur.mask\", blurEvent)\n\t\t\t\t.on(\"keydown.mask\", keydownEvent)\n\t\t\t\t.on(\"keypress.mask\", keypressEvent)\n\t\t\t\t.on(\"input.mask paste.mask\", function() {\n                    if (input.prop(\"readonly\")){\n                        return;\n                    }\n\n\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\tvar pos=checkVal(true);\n\t\t\t\t\t\tinput.caret(pos);\n                        tryFireCompleted();\n\t\t\t\t\t}, 0);\n\t\t\t\t});\n                if (chrome && android)\n                {\n                    input\n                        .off('input.mask')\n                        .on('input.mask', androidInputEvent);\n                }\n\t\t\t\tcheckVal(); //Perform initial check for existing values\n\t\t});\n\t}\n});\n}));\n\n\n//# sourceURL=webpack:///./vendor/jquery.maskedinput/src/jquery.maskedinput.js?");

/***/ })

/******/ });