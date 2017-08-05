import Array2D from '../ChessSet/Array2D'

function rng(min, max?) {
  if (max == null) {
    max = min
    min = 0
  }

  return Math.floor(Math.random() * (max - min) + min)
}

describe('Assertion Test', () => {
  it('should make an obvious assertion', () => {
    expect('Hello World!').toEqual('Hello World!')
  })
})

describe('Array2D test', () => {
  const r = 10
  const c = 12
  it('should create a new array with the given dimensions', () => {
    const x = new Array2D(r, c)
    expect(x instanceof Array2D).toBe(true)
    expect(x.numRows).toEqual(r)
    expect(x.numCols).toEqual(c)
  })
  it('should set and get properly', () => {
    const x = new Array2D(r, c)
    expect(x.get(2, 3)).toEqual(null)
    expect(x.get(r - 1, c - 1)).toEqual(null)
    expect(x.get(0, 0)).toEqual(null)
    x.set(2, 3, 5)
    expect(x.get(2, 3)).toEqual(5)
  })
  it('should use arrays to set and get properly', () => {
    const x = new Array2D(r, c)
    expect(x.getAt([2, 3])).toEqual(null)
    expect(x.getAt([r - 1, c - 1])).toEqual(null)
    expect(x.getAt([0, 0])).toEqual(null)
    x.setAt([2, 3], 5)
    expect(x.getAt([2, 3])).toEqual(5)
  })
  it('should use the an iterator', () => {
    const x = new Array2D(r, c)
    const iter: any = x.makeIterator()
    const row = rng(r)
    const col = rng(c)
    x.set(row, col, 49)
    while (true) {
      const cell = iter.next()
      if (cell.done) {
        break
      }
      if (cell.value.row === row && cell.value.col === col) {
        expect(cell.value.val).toEqual(49)
      }
    }
  })
})
