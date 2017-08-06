/*
  Bishops move in diagonals,
  meaning they move in both x and y direction
*/
const deltaB = [[1, 1], [-1, -1], [-1, 1], [1, -1]]

/*
  Rooks move laterally, meaning
  the shift is only on one axis
*/
const deltaR = [[-1, 0], [1, 0], [0, -1], [0, 1]]

/*
  The queen and king move in any direction
*/
const deltaQK = deltaR.concat(deltaB)

/*
  Knight moves 1 space on one axis,
  and 2 spaces on the other
*/
const deltaN = [[1, 2], [2, 1], [1, -2], [-2, 1], [-1, 2], [2, -1], [-1, -2], [-2, -1]]

// Pawn just moves forward, but the direction is dependant on the color
const deltaPW = [[0, -1]]
const deltaPB = [[0, 1]]

const deltas = {
  N: deltaN,
  B: deltaB,
  R: deltaR,
  K: deltaQK,
  Q: deltaQK,
  PW: deltaPW,
  PB : deltaPB,
}

export default deltas

// whitespace block
