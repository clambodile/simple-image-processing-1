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

describe("transpose", function() {
  it("should transpose a matrix", function() {
    expect(transpose(testMatrix)).toEqual([
      [1,4,7],
      [2,5,8],
      [3,6,9]
    ])
  })
})

describe("grow", function() {
  it("should return an img with a grown element", function() {
    expect(grow(test3x3)).toEqual()
  })
})