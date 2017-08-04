import { expect, assert } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';

import ChessBoard from '../ChessSet/ChessBoard';
import ChessPiece from '../ChessSet/ChessPiece';

function rng(min, max?){
    if(max == null){ max = min; min = 0; }
	return Math.floor(Math.random() * (max - min) + min);
}
/*
  Go through 2 arrays of arrays and check that they're the same
*/
function equal_arrays(A, B){
  if(A.length != B.length){ return false; };
  for(let ii = 0; ii < A.length; ii++){
    if(A[ii] instanceof Array){
      if(!equal_arrays(A[ii],B[ii])){
        return false;
      }
    }else if(A[ii] != B[ii]){
      return false;
    }
  }
  return true;
}

//all moves possible by a rook placed at 4,4
//verified by my eyeballs
var R44 = [[3,4],[2,4],[1,4],[0,4],[5,4],[6,4],[7,4],[4,3],[4,2],[4,1],[4,0],[4,5],[4,6],[4,7]]
//same for bishop
var B44 = [[5,5],[6,6],[7,7],[3,3],[2,2],[1,1],[0,0],[3,5],[2,6],[1,7],[5,3],[6,2],[ 7, 1 ] ]
//same for queen
var Q44 = R44.concat(B44);
//king
var K44 = [[3,4],[5,4],[4,3],[4,5],[5,5],[3,3],[3,5],[5,3]];
//Pawn
var P44 = [[4,5]];
//kNight
var N44 = [[5,6],[6,5],[5,2],[2,5],[3,6],[6,3],[3,2],[2,3]];

describe('Array Equals Test', () => {
  it('should show that the equal_arrays function works', () => {
    expect(equal_arrays([1,2], [2,1])).to.equal(false);
    expect(equal_arrays([1,2], [1,2])).to.equal(true);
    expect(equal_arrays([1,[1,2]], [2,[2,3]])).to.equal(false);
    expect(equal_arrays([1,[1,2]], [1,[1,2]])).to.equal(true);
    expect(equal_arrays([1,[1,2], 3], [1,[1,2], 4])).to.equal(false);
    expect(equal_arrays([[3,4],[1,2]], [[3,4],[1,2]])).to.equal(true);
    expect(equal_arrays([[3,4],[1,2],[5,6]], [[3,4],[1,2],[5,6]])).to.equal(true);
    expect(equal_arrays([[3,4],[1,2],[5,6]], [[3,4],[1,2],[5,5]])).to.equal(false);
  })

});

describe('Move Generator Test', () => {
  it('should initialize an empty chess board', () => {
      var cb = new ChessBoard();
      expect(cb.get(rng(0,8), rng(0,8)))
        .to
        .equal(null);
  });
  it('should verify the moveset of rook', () => {
      var cb = new ChessBoard();
      cb.set(4,4, new ChessPiece('R', true));
      let L = cb.generateMoveList([4,4]);
      expect(equal_arrays(L, R44)).to.equal(true);
  });
  it('should verify the moveset of bishop', () => {
      var cb = new ChessBoard();
      cb.set(4,4, new ChessPiece('B', true));
      let L = cb.generateMoveList([4,4]);
      expect(equal_arrays(L, B44)).to.equal(true);
  });
  it('should verify the moveset of kNight', () => {
      var cb = new ChessBoard();
      cb.set(4,4, new ChessPiece('N', true));
      let L = cb.generateMoveList([4,4]);
      expect(equal_arrays(L, N44)).to.equal(true);
  });
  it('should verify the moveset of queen', () => {
      var cb = new ChessBoard();
      cb.set(4,4, new ChessPiece('Q', true));
      let L = cb.generateMoveList([4,4]);
      expect(equal_arrays(L, Q44)).to.equal(true);
  });
  it('should verify the moveset of king', () => {
      var cb = new ChessBoard();
      cb.set(4,4, new ChessPiece('K', true));
      let L = cb.generateMoveList([4,4]);
      expect(equal_arrays(L, K44)).to.equal(true);
  });
  it('should verify the moveset of pawn', () => {
      var cb = new ChessBoard();
      cb.set(4,4, new ChessPiece('P', true));
      let L = cb.generateMoveList([4,4]);
      expect(equal_arrays(L, P44)).to.equal(true);
  });
});
