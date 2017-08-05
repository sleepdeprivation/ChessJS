export class ChessPiece {
  type: string

  white = true

  constructor(t: string, w) {
    this.type = t
    this.white = w
  }

  isWhite() {
    return this.white
  }
}
