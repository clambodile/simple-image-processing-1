function outerEdgesOf(matrix){
  // returns an array with the same dimensions as arr.
  // where the outer edges of the features of arr are highlighted (1)
  //if a cell is a 0 with an adjacent 1 in one of 8 adjacent cells
  //it is on the outer edge
}

function innerEdgesOf(matrix){
  //iterate over matrix
  //if a cell is a 1 with an adjacent 0 in one of 8 adjacent cells, it is on the inner edge
}

function grow(matrix){
  // returns an array with the same dimensions as arr.
  // where the the features have grown
}

function shrink(matrix){
  // returns an array with the same dimensions as arr.
  // where the the features have shrunk
}

function mtrxEach(func, matrix) {
  matrix.forEach(row => row.forEach((val, i, row) => {
    func(val, i, row)
  }))
}

function isAdjacent(val, x, y, matrix) {
  //top left
  if (matrix[y - 1] && matrix[y - 1][x - 1] !== val) return false;
  //above
  else if (matrix[y] && matrix[y - 1][x] !== val) return false;
  //above right 
  //left
  else if (matrix[y] && matrix[y][x - 1] !== val) return false;
  //skip center
  //right
  else if (matrix[y] && matrix[y][x + 1] !== val) return false;
  //bottom left
  else if (matrix[y + 1] && matrix[y + 1][x - 1] !== val) return false;
  //bottom right
  else if (matrix[y + 1] && matrix[y + 1][x + 1] !== val) return false;
  else return true;
}

function isOnOuter(val, x, y, matrix) {
  return matrix[y][x] === 0 && isAdjacent(1, x, y, matrix)
}

function isOnInner(val, x, y, matrix) {
  return matrix[y][x] === 1 && isAdjacent(0, x, y, matrix)
}