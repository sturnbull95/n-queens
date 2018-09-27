/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  //console.log(board);
  var count = 1;
  for(var y = 0; y < n*n; y++){
    board = new Board({n:n});
    var startRow = Math.floor(y/n);
    var startCol = y%n;
    //console.log(startRow,startCol)
    board.togglePiece(startRow,startCol);
    for(var i = 0; i < n; i++){
      for(var x = 0; x < n; x++){
        if(i !== startRow && x !== startCol){
          board.togglePiece(i,x);
          if(board.hasRowConflictAt(i)|| board.hasColConflictAt(x)){
            board.togglePiece(i,x);
          } else{
            count++;
          }
        }
      }
    }
  }
  return board.rows();
};

// make a function to find all possible in first row
//call same function on every element made from line above

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n:n});
  if(n < 2){
    return 1;
  }
  var callOnChildren = function(rowIndex){
    if(rowIndex === n){
      solutionCount++;
      return;
    }
    for(var i = 0; i < n; i++){//LOOPS THROUGH COLUMNS
      board.togglePiece(rowIndex,i);
      if(!board.hasAnyRooksConflicts()){
        callOnChildren(rowIndex+1);
      }
      board.togglePiece(rowIndex,i);
    }
  };
  callOnChildren(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
