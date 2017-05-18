//are all features solid all the way through?
//each column has its own top edge and bottom edge
//each row has its own left edge and right edge

//there will be multiple of each type of edge, so each type of edge should be represented by an array 


//for each row
//the first 1 is the left inner edge
//the first 0 after the lIE is the right outer edge

function outerEdgesOf(matrix){
  // returns an array with the same dimensions as arr.
  // where the outer edges of the features of arr are highlighted (1)

}

function innerEdgesOf(matrix){
  // returns an array with the same dimensions as arr.
  // where the inner edges of the features of arr are highlighted (1)
}

function grow(matrix){
  // returns an array with the same dimensions as arr.
  // where the the features have grown
}

function shrink(matrix){
  // returns an array with the same dimensions as arr.
  // where the the features have shrunk
}

function leftEdge(row) {
  return row.indexOf(1)
}

function rightEdge(row) {
  return row.lastIndexOf(1)
}

function transpose(matrix) {
  let newMatrix = []
  for (let i = 0; i < matrix[0].length; i++) { 
    //use length of matrix[0], a row, because the row length will become the new column height
    newMatrix.push([])
  }
  matrix.forEach((row, y) =>
    row.forEach((cell,x) =>
      newMatrix[x][y] = cell //x and y are swapped
    )
  )
  return newMatrix
}