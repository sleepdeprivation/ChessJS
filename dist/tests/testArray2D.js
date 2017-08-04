"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
require("mocha");
const Array2D_1 = require("../ChessSet/Array2D");
function rng(min, max) {
    if (max == null) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min) + min);
}
describe('Assertion Test', () => {
    it('should make an obvious assertion', () => {
        chai_1.expect("Hello World!").to.equal('Hello World!');
    });
});
describe('Array2D test', () => {
    let r = 10, c = 12;
    it('should create a new array with the given dimensions', () => {
        let x = new Array2D_1.default(r, c);
        chai_1.assert(x instanceof Array2D_1.default);
        chai_1.expect(x.numRows).to.equal(r);
        chai_1.expect(x.numCols).to.equal(c);
    });
    it('should set and get properly', () => {
        let x = new Array2D_1.default(r, c);
        chai_1.expect(x.get(2, 3)).to.equal(null);
        chai_1.expect(x.get(r - 1, c - 1)).to.equal(null);
        chai_1.expect(x.get(0, 0)).to.equal(null);
        x.set(2, 3, 5);
        chai_1.expect(x.get(2, 3)).to.equal(5);
    });
    it('should use arrays to set and get properly', () => {
        let x = new Array2D_1.default(r, c);
        chai_1.expect(x.getAt([2, 3])).to.equal(null);
        chai_1.expect(x.getAt([r - 1, c - 1])).to.equal(null);
        chai_1.expect(x.getAt([0, 0])).to.equal(null);
        x.setAt([2, 3], 5);
        chai_1.expect(x.getAt([2, 3])).to.equal(5);
    });
    it('should use the an iterator', () => {
        let x = new Array2D_1.default(r, c);
        let iter = x.makeIterator();
        let row = rng(r);
        let col = rng(c);
        x.set(row, col, 49);
        while (true) {
            var cell = iter.next();
            if (cell.done) {
                break;
            }
            if (cell.value.row == row && cell.value.col == col) {
                chai_1.expect(cell.value.val).to.equal(49);
            }
        }
    });
});
//# sourceMappingURL=testArray2D.js.map