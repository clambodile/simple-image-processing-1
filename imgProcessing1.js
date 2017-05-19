function outerEdgesOf(matrix){
  let newMatrix = clearMatrix(matrix)
  matrix.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (isOnOuter(cell, x, y, matrix)) newMatrix[y][x] = 1
    })
  })
  return newMatrix
}

function innerEdgesOf(matrix){
  let newMatrix = clearMatrix(matrix)
  matrix.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (isOnInner(cell, x, y, matrix)) newMatrix[y][x] = 1
    })
  })
  return newMatrix
}

function grow(matrix){
  let newMatrix = clearMatrix(matrix)
  const outerEdge = outerEdgesOf(matrix)
  matrix.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (outerEdge[y][x] === 1 || matrix[y][x] === 1) newMatrix[y][x] = 1 
    })
  })
  return newMatrix
}

function shrink(matrix){
  let newMatrix = clearMatrix(matrix)
  const innerEdge = innerEdgesOf(matrix)
  matrix.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (innerEdge[y][x] ^ matrix[y][x] === 1) newMatrix[y][x] = 1 
    })
  })
  return newMatrix
}

function isAdjacent(val, x, y, matrix) {
  //top left
  if (matrix[y - 1] && matrix[y - 1][x - 1] === val) return true;
  //above
  else if (matrix[y - 1] && matrix[y - 1][x] === val) return true;
  //above right 
  else if (matrix [y - 1] && matrix[y - 1][x + 1] === val) return true;
  //left
  else if (matrix[y] && matrix[y][x - 1] === val) return true;
  //skip center
  //right
  else if (matrix[y] && matrix[y][x + 1] === val) return true;
  //bottom left
  else if (matrix[y + 1] && matrix[y + 1][x - 1] === val) return true;
  //bottom
  else if (matrix[y + 1] && matrix[y + 1][x] === val) return true;
  //bottom right
  else if (matrix[y + 1] && matrix[y + 1][x + 1] === val) return true;
  else return false;
}

function isOnOuter(val, x, y, matrix) {
  return matrix[y][x] === 0 && isAdjacent(1, x, y, matrix)
}

function isOnInner(val, x, y, matrix) {
  return matrix[y][x] === 1 && isAdjacent(0, x, y, matrix)
}

function clearMatrix(matrix) {
  return matrix.map(row => row.map(_ => 0))
}

function bitMtrMap(pred, matrix) {
  
}