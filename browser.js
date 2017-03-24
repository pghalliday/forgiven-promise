/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.promise = promise;\n// only require forgiven if not a browser build\n// istanbul ignore else\nif (!forgiven) {\n  // eslint-disable-next-line no-var\n  var forgiven = __webpack_require__(3);\n}\n\nvar PROMISE_CONJUNCTIONS = ['from'];\n\nfunction promise(setup) {\n  return {\n    as: function as(context, name) {\n      if (typeof context === 'string') {\n        name = context;\n        context = undefined;\n      }\n      var nameStr = void 0;\n      if (typeof name === 'undefined') {\n        // istanbul ignore else\n        if (typeof context === 'function') {\n          nameStr = forgiven.descriptionFromFuncStr(context.toString());\n        } else {\n          throw new Error('no name provided for promise');\n        }\n      } else {\n        nameStr = '`' + name + '`';\n      }\n      var setupPromise = function setupPromise(conjunction, description, _beforeEach, afterEach) {\n        if (typeof description === 'function') {\n          afterEach = afterEach;\n          _beforeEach = description;\n          description = forgiven.descriptionFromFuncStr(_beforeEach);\n        }\n        // istanbul ignore if\n        if (typeof _beforeEach !== 'function') {\n          throw new Error('beforeEach not specified');\n        }\n        return setup({\n          description: 'as ' + nameStr + ' ' + conjunction + ' ' + description,\n          beforeEach: function beforeEach(done) {\n            var promise = _beforeEach();\n            context = context || this;\n            if (typeof context === 'function') {\n              context(promise);\n            } else {\n              context[name] = promise;\n            }\n            // don't fail setup\n            // we will want to check\n            // the status of the promise\n            // later\n            promise.then(function () {\n              done();\n            }).catch(function () {\n              done();\n            });\n          },\n          afterEach: afterEach\n        });\n      };\n      var chain = {};\n      PROMISE_CONJUNCTIONS.forEach(function (conjunction) {\n        chain[conjunction] = setupPromise.bind(null, conjunction);\n      });\n      return chain;\n    }\n  };\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJwcm9taXNlIiwiZm9yZ2l2ZW4iLCJyZXF1aXJlIiwiUFJPTUlTRV9DT05KVU5DVElPTlMiLCJzZXR1cCIsImFzIiwiY29udGV4dCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJuYW1lU3RyIiwiZGVzY3JpcHRpb25Gcm9tRnVuY1N0ciIsInRvU3RyaW5nIiwiRXJyb3IiLCJzZXR1cFByb21pc2UiLCJjb25qdW5jdGlvbiIsImRlc2NyaXB0aW9uIiwiYmVmb3JlRWFjaCIsImFmdGVyRWFjaCIsImRvbmUiLCJ0aGVuIiwiY2F0Y2giLCJjaGFpbiIsImZvckVhY2giLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7OztRQVdnQkEsTyxHQUFBQSxPO0FBWGhCO0FBQ0E7QUFDQSxJQUFJLENBQUNDLFFBQUwsRUFBZTtBQUNiO0FBQ0EsTUFBSUEsV0FBVyxtQkFBQUMsQ0FBUSxDQUFSLENBQWY7QUFDRDs7QUFFRCxJQUFNQyx1QkFBdUIsQ0FDM0IsTUFEMkIsQ0FBN0I7O0FBSU8sU0FBU0gsT0FBVCxDQUFpQkksS0FBakIsRUFBd0I7QUFDN0IsU0FBTztBQUNMQyxRQUFJLFlBQVNDLE9BQVQsRUFBa0JDLElBQWxCLEVBQXdCO0FBQzFCLFVBQUksT0FBT0QsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUMvQkMsZUFBT0QsT0FBUDtBQUNBQSxrQkFBVUUsU0FBVjtBQUNEO0FBQ0QsVUFBSUMsZ0JBQUo7QUFDQSxVQUFJLE9BQU9GLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0I7QUFDQSxZQUFJLE9BQU9ELE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakNHLG9CQUFVUixTQUFTUyxzQkFBVCxDQUFnQ0osUUFBUUssUUFBUixFQUFoQyxDQUFWO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZ0JBQU0sSUFBSUMsS0FBSixDQUFVLDhCQUFWLENBQU47QUFDRDtBQUNGLE9BUEQsTUFPTztBQUNMSCxrQkFBVSxNQUFNRixJQUFOLEdBQWEsR0FBdkI7QUFDRDtBQUNELFVBQU1NLGVBQWUsU0FBZkEsWUFBZSxDQUNuQkMsV0FEbUIsRUFFbkJDLFdBRm1CLEVBR25CQyxXQUhtQixFQUluQkMsU0FKbUIsRUFLaEI7QUFDSCxZQUFJLE9BQU9GLFdBQVAsS0FBdUIsVUFBM0IsRUFBdUM7QUFDckNFLHNCQUFZQSxTQUFaO0FBQ0FELHdCQUFhRCxXQUFiO0FBQ0FBLHdCQUFjZCxTQUFTUyxzQkFBVCxDQUFnQ00sV0FBaEMsQ0FBZDtBQUNEO0FBQ0Q7QUFDQSxZQUFJLE9BQU9BLFdBQVAsS0FBc0IsVUFBMUIsRUFBc0M7QUFDcEMsZ0JBQU0sSUFBSUosS0FBSixDQUFVLDBCQUFWLENBQU47QUFDRDtBQUNELGVBQU9SLE1BQU07QUFDWFcsdUJBQWEsUUFBUU4sT0FBUixHQUFrQixHQUFsQixHQUF3QkssV0FBeEIsR0FBc0MsR0FBdEMsR0FBNENDLFdBRDlDO0FBRVhDLHNCQUFZLG9CQUFTRSxJQUFULEVBQWU7QUFDekIsZ0JBQU1sQixVQUFVZ0IsYUFBaEI7QUFDQVYsc0JBQVVBLFdBQVcsSUFBckI7QUFDQSxnQkFBSSxPQUFPQSxPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ2pDQSxzQkFBUU4sT0FBUjtBQUNELGFBRkQsTUFFTztBQUNMTSxzQkFBUUMsSUFBUixJQUFnQlAsT0FBaEI7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLG9CQUNDbUIsSUFERCxDQUNNLFlBQU07QUFDVkQ7QUFDRCxhQUhELEVBSUNFLEtBSkQsQ0FJTyxZQUFNO0FBQ1hGO0FBQ0QsYUFORDtBQU9ELFdBckJVO0FBc0JYRDtBQXRCVyxTQUFOLENBQVA7QUF3QkQsT0F2Q0Q7QUF3Q0EsVUFBTUksUUFBUSxFQUFkO0FBQ0FsQiwyQkFBcUJtQixPQUFyQixDQUE2QixVQUFDUixXQUFELEVBQWlCO0FBQzVDTyxjQUFNUCxXQUFOLElBQXFCRCxhQUFhVSxJQUFiLENBQWtCLElBQWxCLEVBQXdCVCxXQUF4QixDQUFyQjtBQUNELE9BRkQ7QUFHQSxhQUFPTyxLQUFQO0FBQ0Q7QUE5REksR0FBUDtBQWdFRCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gb25seSByZXF1aXJlIGZvcmdpdmVuIGlmIG5vdCBhIGJyb3dzZXIgYnVpbGRcbi8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlXG5pZiAoIWZvcmdpdmVuKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcbiAgdmFyIGZvcmdpdmVuID0gcmVxdWlyZSgnZm9yZ2l2ZW4nKTtcbn1cblxuY29uc3QgUFJPTUlTRV9DT05KVU5DVElPTlMgPSBbXG4gICdmcm9tJyxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9taXNlKHNldHVwKSB7XG4gIHJldHVybiB7XG4gICAgYXM6IGZ1bmN0aW9uKGNvbnRleHQsIG5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgY29udGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbmFtZSA9IGNvbnRleHQ7XG4gICAgICAgIGNvbnRleHQgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBsZXQgbmFtZVN0cjtcbiAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIGVsc2VcbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbmFtZVN0ciA9IGZvcmdpdmVuLmRlc2NyaXB0aW9uRnJvbUZ1bmNTdHIoY29udGV4dC50b1N0cmluZygpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIG5hbWUgcHJvdmlkZWQgZm9yIHByb21pc2UnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmFtZVN0ciA9ICdgJyArIG5hbWUgKyAnYCc7XG4gICAgICB9XG4gICAgICBjb25zdCBzZXR1cFByb21pc2UgPSAoXG4gICAgICAgIGNvbmp1bmN0aW9uLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYmVmb3JlRWFjaCxcbiAgICAgICAgYWZ0ZXJFYWNoXG4gICAgICApID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjcmlwdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGFmdGVyRWFjaCA9IGFmdGVyRWFjaDtcbiAgICAgICAgICBiZWZvcmVFYWNoID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBmb3JnaXZlbi5kZXNjcmlwdGlvbkZyb21GdW5jU3RyKGJlZm9yZUVhY2gpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICAgICAgICBpZiAodHlwZW9mIGJlZm9yZUVhY2ggIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JlZm9yZUVhY2ggbm90IHNwZWNpZmllZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXR1cCh7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdhcyAnICsgbmFtZVN0ciArICcgJyArIGNvbmp1bmN0aW9uICsgJyAnICsgZGVzY3JpcHRpb24sXG4gICAgICAgICAgYmVmb3JlRWFjaDogZnVuY3Rpb24oZG9uZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGJlZm9yZUVhY2goKTtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgY29udGV4dChwcm9taXNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnRleHRbbmFtZV0gPSBwcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZG9uJ3QgZmFpbCBzZXR1cFxuICAgICAgICAgICAgLy8gd2Ugd2lsbCB3YW50IHRvIGNoZWNrXG4gICAgICAgICAgICAvLyB0aGUgc3RhdHVzIG9mIHRoZSBwcm9taXNlXG4gICAgICAgICAgICAvLyBsYXRlclxuICAgICAgICAgICAgcHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhZnRlckVhY2gsXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGNoYWluID0ge307XG4gICAgICBQUk9NSVNFX0NPTkpVTkNUSU9OUy5mb3JFYWNoKChjb25qdW5jdGlvbikgPT4ge1xuICAgICAgICBjaGFpbltjb25qdW5jdGlvbl0gPSBzZXR1cFByb21pc2UuYmluZChudWxsLCBjb25qdW5jdGlvbik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjaGFpbjtcbiAgICB9LFxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzPzM2OTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar _src = __webpack_require__(0);\n\nglobal.forgiven.plugins.webcomponents = _src.webcomponents;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbImdsb2JhbCIsImZvcmdpdmVuIiwicGx1Z2lucyIsIndlYmNvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBR0FBLE9BQU9DLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCQyxhQUF4QixzQiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgd2ViY29tcG9uZW50cyxcbn0gZnJvbSAnLi9zcmMnO1xuZ2xvYmFsLmZvcmdpdmVuLnBsdWdpbnMud2ViY29tcG9uZW50cyA9IHdlYmNvbXBvbmVudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = forgiven;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JnaXZlblwiPzBmMDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZm9yZ2l2ZW47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJmb3JnaXZlblwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);