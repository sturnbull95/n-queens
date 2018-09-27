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
  var solutionCount = 1; //fixme
  var allSols = [];
  var parents = {};
  for(var i = 0; i < n; i++){
    var board = new Board({n:n});
    board.togglePiece(0,i);
    parents[i] = board;
  }
  var count = 1;
  var callOnChildren = function(board,rowIndex){
    //var solutionBoards = [];
    var functionCount = 0;
    for(var i = 0; i < n; i++){//LOOPS THROUGH COLUMNS
      //console.log(rowIndex,i)
      var newBoard = board;
      newBoard.togglePiece(rowIndex,i);
      if(newBoard.hasAnyRooksConflicts()){
        newBoard.togglePiece(rowIndex,i);
      } else{
        if(rowIndex+1 < n){
          //console.log(board.rows())
          count++;
          functionCount += callOnChildren(newBoard,rowIndex+1);
          //board.togglePiece(rowIndex,i)
        }
      }
      if(count === n-1){
        functionCount++;
      }
    }
    return functionCount;
  };
  //console.log(parents)
  if(n === 0 || n === 1){
    return 1;
  }
  if(n === 2){
    return 2
  }
  console.log('PARENTS',parents)
  for(var key in parents){
    solutionCount += callOnChildren(parents[key],1);
    console.log('SOLUTIONCOUNT ',solutionCount);
  }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;


  // for(var i = 0; i < n; i++){
  //   var count = 0;
  //   board = new Board({n:n});
  //   var start = i;
  //   var solutionTree = [];
  //   board.togglePiece(0,start);
  //   for(var x = 0; x < n; x++){
  //     for(var y = 0; y < n; y++){
  //       if(x === 0 && y !== start){
  //         board.togglePiece(x,y);
  //         if(board.hasAnyRooksConflicts()){
  //           board.togglePiece(x,y);
  //         } else{
  //           count++;
  //         }
  //       }
  //       if(x > 0){
  //         board.togglePiece(x,y);
  //         if(board.hasAnyRooksConflicts()){
  //           board.togglePiece(x,y);
  //         } else{
  //           count++;
  //         }
  //       }
  //     }
  //     if(count === n-1){
  //       solutionTree.push(board.rows());
  //     }
  //   }
  // }
  // console.log(solutionTree)




  // for(var y = 0; y < n*n; y++){
  //   var count = 0;
  //   board = new Board({n:n});
  //   var startRow = Math.floor(y/n);
  //   var startCol = y%n;
  //   console.log(startRow,startCol,n, count);
  //   board.togglePiece(startRow,startCol);
  //   for(var i = 0; i < n; i++){
  //     for(var x = 0; x < n; x++){
  //       if(board.attributes[i][x] !== 1){
  //         board.togglePiece(i,x);
  //         if(board.hasRowConflictAt(i)|| board.hasColConflictAt(x)){
  //           board.togglePiece(i,x);
  //         } else{
  //           count++;
  //         }
  //       }
  //     }
  //     if(count === n-1 && !allSols.includes(JSON.stringify(board.rows()))){
  //       console.log(board.rows())
  //       allSols.push(JSON.stringify(board.rows()));
  //       solutionCount++;
  //     }
  //   }
  // }
  //console.log(allSols,n)
  // for(var i = 0; i < allSols.length; i++){
  //   allSols[i] = JSON.parse(allSols[i])
  // }
  // console.log('NO STRING',allSols)
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
