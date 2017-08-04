var PG =
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Array2D_1 = __webpack_require__(1);
var PixelGrid = (function (_super) {
    __extends(PixelGrid, _super);
    function PixelGrid(x, y, ctx) {
        var _this = _super.call(this, x, y) || this;
        _super.prototype.setAll.call(_this, "red");
        _this.canvasContext = ctx;
        return _this;
    }
    PixelGrid.prototype.verticalBars = function (list, width) {
        this.each(function (ii, kk, value) {
            self.canvasContext.fillStyle = list[ii % width];
            self.canvasContext.fillRect(ii, kk, 1, 1);
        });
    };
    PixelGrid.prototype.draw = function () {
        var self = this;
        this.each(function (ii, kk, value) {
            self.canvasContext.fillStyle = value;
            self.canvasContext.fillRect(ii, kk, 1, 1);
        });
    };
    return PixelGrid;
}(Array2D_1.Array2D));
exports.PixelGrid = PixelGrid;
//# sourceMappingURL=PixelGrid.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Array2D = (function () {
    function Array2D(nRows, nCols) {
        this.numRows = nRows;
        this.numCols = nCols;
        this.grid = [];
        for (var _i = 0, _a = Array(nRows).slice(); _i < _a.length; _i++) {
            var i = _a[_i];
            this.grid.push(new Array(nCols));
        }
    }
    Array2D.prototype.get = function (r, c) {
        return this.grid[r][c];
    };
    Array2D.prototype.set = function (r, c, x) {
        this.grid[r][c] = x;
    };
    Array2D.prototype.getAt = function (pt) {
        return this.get(pt[0], pt[1]);
    };
    Array2D.prototype.setAt = function (pt, x) {
        this.set(pt[0], pt[1], x);
    };
    Array2D.prototype.makeIterator = function () {
        var self = this;
        return function () {
            var ii, kk;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ii = 0;
                        _a.label = 1;
                    case 1:
                        if (!(ii < self.numRows)) return [3 /*break*/, 6];
                        kk = 0;
                        _a.label = 2;
                    case 2:
                        if (!(kk < self.numCols)) return [3 /*break*/, 5];
                        return [4 /*yield*/, { row: ii, col: kk, val: self.grid[ii][kk] }];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        kk++;
                        return [3 /*break*/, 2];
                    case 5:
                        ii++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        }();
    };
    Array2D.prototype.each = function (func) {
        for (var ii = 0; ii < this.numRows; ii++) {
            for (var kk = 0; kk < this.numCols; kk++) {
                func(ii, kk, this.grid[ii][kk]);
            }
        }
    };
    Array2D.prototype.setAll = function (thing) {
        for (var ii = 0; ii < this.numRows; ii++) {
            for (var kk = 0; kk < this.numCols; kk++) {
                this.grid[ii][kk] = thing;
            }
        }
    };
    return Array2D;
}());
exports.Array2D = Array2D;
;
//# sourceMappingURL=Array2D.js.map

/***/ })
/******/ ]);