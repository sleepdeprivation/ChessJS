import Array2D from './Array2D';
import ChessPiece from './ChessPiece';
import deltas from './PieceDeltas';

export default class ChessBoard extends Array2D<ChessPiece> {

  whiteToMove = true;

  outOfBounds(c){
    return c[0] < 0 || c[0] >= 8 || c[1] < 0 || c[1] >= 8;
  }

  constructor(){
    super(8,8);
  }

  /*
    An empty space means the enemy is >>NOT<< there
  */
  enemyAt(c : Array<number>){
    if(this.getAt(c) == null){ return false; }
    if(this.whiteToMove){
      return this.getAt(c).isWhite();
    }else{
      return !this.getAt(c).isWhite();
    }
  }

  emptyAt(c : Array<number>){
    return this.getAt(c) == null;
  }

  addArrays(A, B){
    return [A[0] + B[0], A[1] + B[1]];
  }

  /*
    The following functions generate a list
    of possible moves for 2 different types of pieces
  */

  generateMoveList(c){
    var p : ChessPiece = this.getAt(c);
    if(p == null){ return null; }
    var m = [];
    var f = this.pieceFunctions[p.type];
    var D = deltas[p.type];
    D.forEach(function(d){
      f.bind(this)(m, this.addArrays(c, d), d);
    }.bind(this))
    return m;
  }

  /*
    Moves like the bishop, queen, and rook
    need a sort of ray-tracing to generate moves,
    so that they don't move through other pieces
  */
  fn(list, cursor, delta){
    if(this.outOfBounds(cursor)) return;
    if(!this.emptyAt(cursor)){
      this.gn(list, cursor, delta);
      return;
    }else{
      list.push(cursor);
      this.fn(list, this.addArrays(cursor, delta), delta);
    }
  }

  /*
    Other pieces simply need to check if the destination
    is occupied
  */
  gn(list, cursor, delta){
    if(this.outOfBounds(cursor)) return;
    if(this.emptyAt(cursor) || this.enemyAt(cursor)){
      list.push(cursor);
    }
  }

  /*
    Pawns are not allowed to move into enemies
  */
  pn(list, cursor, delta){
    if(this.outOfBounds(cursor)) return;
    if(this.emptyAt(cursor) && !this.enemyAt(cursor)){
      list.push(cursor);
    }
  }

  /*
    Lookup table for piece types
  */
  pieceFunctions = {
    'B' : this.fn,
    'R' : this.fn,
    'Q' : this.fn,
    'K' : this.gn,
    'N' : this.gn,
    'P' : this.pn,
  }




}
