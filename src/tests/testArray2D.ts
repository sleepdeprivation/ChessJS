import { expect, assert } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';

import Array2D from '../ChessSet/Array2D';

function rng(min, max?){
    if(max == null){ max = min; min = 0; }
	return Math.floor(Math.random() * (max - min) + min);
}

describe('Assertion Test', () => {
  it('should make an obvious assertion', () => {
      expect("Hello World!").to.equal('Hello World!');
  });
});

describe('Array2D test', () => {
    let r = 10, c = 12;
  it('should create a new array with the given dimensions', () => {
      let x = new Array2D(r,c);
      assert(x instanceof Array2D);
      expect(x.numRows).to.equal(r);
      expect(x.numCols).to.equal(c);
  });
  it('should set and get properly', () => {
      let x = new Array2D(r,c);
      expect(x.get(2,3)).to.equal(null);
      expect(x.get(r-1,c-1)).to.equal(null);
      expect(x.get(0, 0)).to.equal(null);
      x.set(2, 3, 5);
      expect(x.get(2, 3)).to.equal(5);
  });
  it('should use arrays to set and get properly', () => {
        let x = new Array2D(r,c);
        expect(x.getAt([2,3])).to.equal(null);
        expect(x.getAt([r-1,c-1])).to.equal(null);
        expect(x.getAt([0, 0])).to.equal(null);
        x.setAt([2, 3], 5);
        expect(x.getAt([2, 3])).to.equal(5);
    });
    it('should use the an iterator', () => {
          let x = new Array2D(r,c);
          let iter : any = x.makeIterator();
          let row = rng(r);
          let col = rng(c);
          x.set(row, col, 49);
          while(true){
              var cell = iter.next();
              if(cell.done){
                  break;
              }
              if(cell.value.row == row && cell.value.col == col){
                  expect(cell.value.val).to.equal(49);
              }
          }
      });
});
