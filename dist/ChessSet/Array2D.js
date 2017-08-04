"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Array2D {
    constructor(nRows, nCols) {
        this.numRows = nRows;
        this.numCols = nCols;
        this.grid = [];
        for (let i of [...Array(nRows)]) {
            this.grid.push(new Array(nCols));
        }
        this.setAll(null);
    }
    get(r, c) {
        return this.grid[r][c];
    }
    set(r, c, x) {
        this.grid[r][c] = x;
    }
    getAt(pt) {
        return this.get(pt[0], pt[1]);
    }
    setAt(pt, x) {
        this.set(pt[0], pt[1], x);
    }
    makeIterator() {
        var self = this;
        return function* () {
            for (var ii = 0; ii < self.numRows; ii++) {
                for (var kk = 0; kk < self.numCols; kk++) {
                    yield { row: ii, col: kk, val: self.grid[ii][kk] };
                }
            }
        }();
    }
    each(func) {
        for (var ii = 0; ii < this.numRows; ii++) {
            for (var kk = 0; kk < this.numCols; kk++) {
                func(ii, kk, this.grid[ii][kk]);
            }
        }
    }
    setAll(thing) {
        for (var ii = 0; ii < this.numRows; ii++) {
            for (var kk = 0; kk < this.numCols; kk++) {
                this.grid[ii][kk] = thing;
            }
        }
    }
}
exports.default = Array2D;
;
//# sourceMappingURL=Array2D.js.map