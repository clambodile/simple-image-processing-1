function outerEdgesOf(matrix){
  // returns an array with the same dimensions as arr.
  // where the outer edges of the features of arr are highlighted (1)

}

function innerEdgesOf(matrix){

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

function leftEdges(matrix) {
  return matrix.map(leftEdge)
}

function rightEdges(matrix) {
  return matrix.map(rightEdge)
}

function topEdges(matrix) {
  return leftEdges(transpose(matrix))
}

function bottomEdges(matrix) {
  return rightEdges(transpose(matrix))
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

function clearMatrix(matrix) { //matrix with same dimensions as given matrix, but all zeros
  return matrix.map(row => row.map(_ => 0))
}