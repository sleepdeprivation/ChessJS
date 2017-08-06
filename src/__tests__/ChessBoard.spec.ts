import { ChessBoard } from '../ChessSet/ChessBoard'
import { ChessPiece } from '../ChessSet/ChessPiece'

function rng(min, max?) {
  if (max == null) {
    max = min
    min = 0
  }

  return Math.floor(Math.random() * (max - min) + min)
}
/*
  Go through 2 arrays of arrays and check that they're the same
*/
function equal_arrays(A, B) {
  if (A.length !== B.length) {
    return false
  }
  for (let ii = 0; ii < A.length; ii++) {
    if (A[ii] instanceof Array) {
      if (!equal_arrays(A[ii], B[ii])) {
        return false
      }
    } else if (A[ii] !== B[ii]) {
      return false
    }
  }

  return true
}

// all moves possible by a rook placed at 4,4
// verified by my eyeballs
const R44 = [
  [3, 4],
  [2, 4],
  [1, 4],
  [0, 4],
  [5, 4],
  [6, 4],
  [7, 4],
  [4, 3],
  [4, 2],
  [4, 1],
  [4, 0],
  [4, 5],
  [4, 6],
  [4, 7],
]
// same for bishop
const B44 = [[5, 5], [6, 6], [7, 7], [3, 3], [2, 2], [1, 1], [0, 0], [3, 5], [2, 6], [1, 7], [5, 3], [6, 2], [7, 1]]
// same for queen
const Q44 = R44.concat(B44)
// king
const K44 = [[3, 4], [5, 4], [4, 3], [4, 5], [5, 5], [3, 3], [3, 5], [5, 3]]
// Pawn White
const PW44 = [[3, 4]]
// Pawn Black
const PB44 = [[5, 4]]
// kNight
const N44 = [[5, 6], [6, 5], [5, 2], [2, 5], [3, 6], [6, 3], [3, 2], [2, 3]]

describe('Array Equals Test', () => {
  it('should show that the equal_arrays function works', () => {
    expect(equal_arrays([1, 2], [2, 1])).toEqual(false)
    expect(equal_arrays([1, 2], [1, 2])).toEqual(true)
    expect(equal_arrays([1, [1, 2]], [2, [2, 3]])).toEqual(false)
    expect(equal_arrays([1, [1, 2]], [1, [1, 2]])).toEqual(true)
    expect(equal_arrays([1, [1, 2], 3], [1, [1, 2], 4])).toEqual(false)
    expect(equal_arrays([[3, 4], [1, 2]], [[3, 4], [1, 2]])).toEqual(true)
    expect(equal_arrays([[3, 4], [1, 2], [5, 6]], [[3, 4], [1, 2], [5, 6]])).toEqual(true)
    expect(equal_arrays([[3, 4], [1, 2], [5, 6]], [[3, 4], [1, 2], [5, 5]])).toEqual(false)
  })
})

describe('Move Generator Test', () => {
  it('should initialize an empty chess board', () => {
    const cb = new ChessBoard()
    expect(cb.get(rng(0, 8), rng(0, 8))).toEqual(null)
  })
  it('should verify the moveset of rook', () => {
    const cb = new ChessBoard()
    cb.set(4, 4, new ChessPiece('R', true))
    const L = cb.generateMoveList([4, 4])
    expect(equal_arrays(L, R44)).toEqual(true)
  })
  it('should verify the moveset of bishop', () => {
    const cb = new ChessBoard()
    cb.set(4, 4, new ChessPiece('B', true))
    const L = cb.generateMoveList([4, 4])
    expect(equal_arrays(L, B44)).toEqual(true)
  })
  it('should verify the moveset of kNight', () => {
    const cb = new ChessBoard()
    cb.set(4, 4, new ChessPiece('N', true))
    const L = cb.generateMoveList([4, 4])
    expect(equal_arrays(L, N44)).toEqual(true)
  })
  it('should verify the moveset of queen', () => {
    const cb = new ChessBoard()
    cb.set(4, 4, new ChessPiece('Q', true))
    const L = cb.generateMoveList([4, 4])
    expect(equal_arrays(L, Q44)).toEqual(true)
  })
  it('should verify the moveset of king', () => {
    const cb = new ChessBoard()
    cb.set(4, 4, new ChessPiece('K', true))
    const L = cb.generateMoveList([4, 4])
    expect(equal_arrays(L, K44)).toEqual(true)
  })
  it('should verify the moveset of white pawn', () => {
    const cb = new ChessBoard()
    cb.set(4, 4, new ChessPiece('PW', true))
    const L = cb.generateMoveList([4, 4])
    expect(equal_arrays(L, PW44)).toEqual(true)
  })
  it('should verify the moveset of black pawn', () => {
    const cb = new ChessBoard()
    cb.set(4, 4, new ChessPiece('PB', true))
    const L = cb.generateMoveList([4, 4])
    expect(equal_arrays(L, PB44)).toEqual(true)
  })
  it('should verify initial moveset of a white pawn', () => {
    const cb = new ChessBoard()
    cb.setUpDefaultBoard()
    const L = cb.generateMoveList([6, 6]) // should be a white pawn
    expect(equal_arrays(L, [[5, 6]])).toEqual(true)
  })
  it('should verify initial moveset of a white queen', () => {
    const cb = new ChessBoard()
    cb.setUpDefaultBoard()
    const L = cb.generateMoveList([7, 4]) // should be a queen
    expect(equal_arrays(L, [])).toEqual(true) // which can't move
  })
})
