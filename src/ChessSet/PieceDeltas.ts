
/*
  Bishops move in diagonals,
  meaning they move in both x and y direction
*/
var deltaB =
[
  [1,1],
  [-1,-1],
  [-1,1],
  [1,-1],
];

/*
  Rooks move laterally, meaning
  the shift is only on one axis
*/
var deltaR =
[
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/*
  The queen and king move in any direction
*/
var deltaQK = deltaR.concat(deltaB);

/*
  Knight moves 1 space on one axis,
  and 2 spaces on the other
*/
var deltaN =
[
  [1, 2],
  [2, 1],
  [1, -2],
  [-2, 1],
  [-1, 2],
  [2, -1],
  [-1, -2],
  [-2, -1],
]

//Pawn just moves forward
var deltaP = [ [0, 1] ];

var deltas = {
  'N' : deltaN,
  'B' : deltaB,
  'R' : deltaR,
  'K' : deltaQK,
  'Q' : deltaQK,
  'P' : deltaP,
};

export default deltas;



















//whitespace block
