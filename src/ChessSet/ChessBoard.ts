import Array2D from './Array2D'
import { ChessPiece } from './ChessPiece'
import deltas from './PieceDeltas'

export class ChessBoard extends Array2D<ChessPiece> {
  whiteToMove = true

  /*
    Lookup table for piece types
  */
  pieceFunctions = {
    B: this.fn,
    R: this.fn,
    Q: this.fn,
    K: this.gn,
    N: this.gn,
    PW: this.pn,
    PB: this.pn,
  }

  constructor() {
    super(8, 8)
  }

  setUpDefaultBoard() {
    this.grid[0] = [
      new ChessPiece('R', false),
      new ChessPiece('N', false),
      new ChessPiece('B', false),
      new ChessPiece('Q', false),

      new ChessPiece('K', false),
      new ChessPiece('B', false),
      new ChessPiece('N', false),
      new ChessPiece('R', false),
    ]
    this.grid[1] = [
      new ChessPiece('PB', false),
      new ChessPiece('PB', false),
      new ChessPiece('PB', false),
      new ChessPiece('PB', false),

      new ChessPiece('PB', false),
      new ChessPiece('PB', false),
      new ChessPiece('PB', false),
      new ChessPiece('PB', false),
    ]
    this.grid[6] = [
      new ChessPiece('PW', true),
      new ChessPiece('PW', true),
      new ChessPiece('PW', true),
      new ChessPiece('PW', true),

      new ChessPiece('PW', true),
      new ChessPiece('PW', true),
      new ChessPiece('PW', true),
      new ChessPiece('PW', true),
    ]
    this.grid[7] = [
      new ChessPiece('R', true),
      new ChessPiece('N', true),
      new ChessPiece('B', true),
      new ChessPiece('Q', true),

      new ChessPiece('K', true),
      new ChessPiece('B', true),
      new ChessPiece('N', true),
      new ChessPiece('R', true),
    ]
  }

  outOfBounds(c) {
    return c[0] < 0 || c[0] >= 8 || c[1] < 0 || c[1] >= 8
  }

  /*
    An empty space means the enemy is >>NOT<< there
  */
  enemyAt(c: Array<number>) {
    if (this.getAt(c) == null) {
      return false
    }
    if (this.whiteToMove) {
      return !this.getAt(c).isWhite() // white's move and we're white, so black is enemy
    } else {
      return this.getAt(c).isWhite()
    }
  }

  emptyAt(c: Array<number>) {
    return this.getAt(c) == null
  }

  friendAt(c : Array<number>){
    if (this.getAt(c) == null) {
      return false;
    }
    if (this.whiteToMove) {
      return this.getAt(c).isWhite()
    } else {
      return !this.getAt(c).isWhite()
    }
  }

  addArrays(A, B) {
    return [A[0] + B[0], A[1] + B[1]]
  }

  /*
    Supply a transformation tx to convert the board
    into a transformed board where each piece p is transformed to tx(p).
  */
  transformBoard(tx) {
    const arr = new Array2D(8, 8)
    this.each(function(ii, kk, el) {
      arr.set(ii, kk, tx(el))
    })

    return arr
  }

  /*
    The following functions generate a list
    of possible moves for 2 different types of pieces
  */

  generateMoveList(c) {
    const p: ChessPiece = this.getAt(c)
    if (p == null) {
      return null
    }
    const m = []
    const f = this.pieceFunctions[p.type].bind(this)
    const D = deltas[p.type]
    const self = this
    D.forEach(
      function(d) {
        f(m, self.addArrays(c, d), d)
      }.bind(this)
    )

    return m
  }

  /*
    Moves like the bishop, queen, and rook
    need a sort of ray-tracing to generate moves,
    so that they don't move through other pieces
  */
  fn(list, cursor, delta) {
    if (this.outOfBounds(cursor)) return
    if (!this.emptyAt(cursor)) {
      this.gn(list, cursor, delta)

      return
    } else {
      list.push(cursor)
      this.fn(list, this.addArrays(cursor, delta), delta)
    }
  }

  /*
    Other pieces simply need to check if the destination
    is occupied
  */
  gn(list, cursor, delta) {
    if (this.outOfBounds(cursor)) return
    if ((this.emptyAt(cursor) || this.enemyAt(cursor)) && !this.friendAt(cursor)) {
      list.push(cursor)
    }
  }

  /*
    Pawns are not allowed to move into enemies
  */
  pn(list, cursor, delta) {
    if (this.outOfBounds(cursor)) return
    if (this.emptyAt(cursor) && !this.enemyAt(cursor)) {
      list.push(cursor)
    }
  }
}
