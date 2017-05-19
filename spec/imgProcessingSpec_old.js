const testMatrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

const test3x3 = [
  [0,0,0],
  [0,1,0],
  [0,0,0]
]

const test6x6 = [
  [0,0,0,0,0,0],
  [0,1,1,1,1,0],
  [0,1,1,1,1,0],
  [0,1,1,1,0,0],
  [0,0,0,0,0,0]
]

describe("outerEdgesOf", function() {
  it("should outline the outer edges of an element", function () {
    expect(outerEdgesOf(test6x6)).toEqual([
      [1,1,1,1,1,1],
      [1,0,0,0,0,1],
      [1,0,0,0,0,1],
      [1,0,0,0,1,1],
      [1,1,1,1,1,0]
    ])
  })
})

describe("innerEdgesOf", function() {
  it("should outline the inner edges of an element", function () {
    expect(innerEdgesOf(test6x6)).toEqual([
      [0,0,0,0,0,0],
      [0,1,1,1,1,0],
      [0,1,0,1,1,0],
      [0,1,1,1,0,0],
      [0,0,0,0,0,0]
    ])
  })
})


describe("grow", function() {
  it("should return an img with a grown element", function() {
    expect(grow(test3x3)).toEqual([
      [1,1,1],
      [1,1,1],
      [1,1,1]
    ])
  })
})

describe("shrink", function() {
  it("should return an img with a shrunk element", function() {
    expect(shrink(test6x6)).toEqual([
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,1,1,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0]
    ])
  })
})