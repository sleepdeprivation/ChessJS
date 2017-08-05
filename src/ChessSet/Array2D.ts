export default class Array2D<Type> {
  numRows: number
  numCols: number
  grid: Array<Array<Type>>

  constructor(nRows: number, nCols: number) {
    this.numRows = nRows
    this.numCols = nCols
    this.grid = []
    for (let ii = 0; ii < nRows; ii++) {
      this.grid.push(new Array<Type>(nCols))
    }
    this.setAll(null)
  }

  get(r: number, c: number): Type {
    return this.grid[r][c]
  }

  set(r: number, c: number, x: Type): void {
    this.grid[r][c] = x
  }

  getAt(pt: Array<number>): Type {
    return this.get(pt[0], pt[1])
  }
  setAt(pt: Array<number>, x: Type): void {
    this.set(pt[0], pt[1], x)
  }

  makeIterator() {
    const self = this

    return (function*() {
      for (let ii = 0; ii < self.numRows; ii++) {
        for (let kk = 0; kk < self.numCols; kk++) {
          yield { row: ii, col: kk, val: self.grid[ii][kk] }
        }
      }
    })()
  }

  each(func) {
    for (let ii = 0; ii < this.numRows; ii++) {
      for (let kk = 0; kk < this.numCols; kk++) {
        func(ii, kk, this.grid[ii][kk])
      }
    }
  }

  setAll(thing) {
    for (let ii = 0; ii < this.numRows; ii++) {
      for (let kk = 0; kk < this.numCols; kk++) {
        this.grid[ii][kk] = thing
      }
    }
  }
}
