const game = document.querySelector(".game");
const puzzle = [
  "5--2-----",
  "-3--4-1--",
  "-------7-",
  "-5----3-2",
  "---------",
  "1-9----45",
  "-9-------",
  "--6-8--2-",
  "---4--5-7",
];

window.onload = () => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const div = document.createElement("div");
      div.className = "tile";
      if (puzzle[i][j] != "-") {
        div.classList.add("filled");
        div.innerText = puzzle[i][j];
      } else {
        div.innerText = " ";
      }
      if (i == 2 || i == 5) {
        div.classList.add("border-bottom");
      }
      if (j == 2 || j == 5) {
        div.classList.add("border-right");
      }
      game.append(div);
    }
  }
};
// function isSafe(i, j, m) {
//   //check the row

//   for (let r = 0; r < 9; r++) {
//     if (puzzle[r][j] == m) return false;
//   }
//   //check the colum
//   for (let c = 0; c < 9; c++) {
//     if (puzzle[i][c] == m) return false;
//   }
//   let startRow = Math.floor(i / 3) * 3;
//   let endRow = startRow + 2;
//   let startCol = Math.floor(j / 3) * 3;
//   let endCol = startCol + 2;
//   //check subgrid
//   for (let r = startRow; r <= endRow; r++) {
//     for (let c = startCol; c <= endCol; c++) {
//       if (puzzle[r][c] == m) return false;
//     }
//   }
//   return true;
// }
// function solveSudokuHelper(r, c) {
//   //base case
//   if (r == 9) {
//     changeBoard();
//     return true;
//   }
//   //other cases
//   if (c == 9) {
//     return solveSudokuHelper(r + 1, 0);
//   }
//   //pre-filled cell, skip it
//   if (puzzle[r][c] != "-") {
//     return solveSudokuHelper(r, c + 1);
//   }

//   //there is 0 in the current location
//   for (var i = 1; i <= 9; i++) {
//     if (isSafe(r, c, i)) {
//       puzzle[r][c] = i;
//       //console.log(i);
//       var success = solveSudokuHelper(r, c + 1);
//       if (success == true) {
//         return true;
//       }
//       //backtracking step
//       puzzle[r][c] = "-";
//     }
//   }
//   return false;
// }
// function solve() {
//   console.log(solveSudokuHelper(0, 0));
//   changeBoard();
// }
// let k = 0;
// function changeBoard() {
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       console.log(puzzle[i][j]);
//     }
//   }
//   // const cells = document.querySelectorAll(".tile");
//   // for (let i = 0; i < 9; i++) {
//   //   for (let j = 0; j < 9; j++) {
//   //     const cell = cells[k];
//   //     // cell.innerText = "9";
//   //     k++;
//   //     console.log(cell.innerText);
//   //   }
//   // }
// }
function isSafe(i, j, m) {
  for (let r = 0; r < 9; r++) {
    if (puzzle[r][j] == m) return false;
  }

  for (let c = 0; c < 9; c++) {
    if (puzzle[i][c] == m) return false;
  }

  let startRow = Math.floor(i / 3) * 3;
  let startCol = Math.floor(j / 3) * 3;

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (puzzle[startRow + r][startCol + c] == m) return false;
    }
  }

  return true;
}

function solveSudokuHelper(r, c) {
  if (r == 9) {
    return true;
  }

  if (c == 9) {
    return solveSudokuHelper(r + 1, 0);
  }

  if (puzzle[r][c] !== "-") {
    return solveSudokuHelper(r, c + 1);
  }

  for (let i = 1; i <= 9; i++) {
    if (isSafe(r, c, i.toString())) {
      puzzle[r] = puzzle[r].substring(0, c) + i + puzzle[r].substring(c + 1);
      var success = solveSudokuHelper(r, c + 1);
      if (success) {
        return true;
      }
      // Backtracking step
      puzzle[r] = puzzle[r].substring(0, c) + "-" + puzzle[r].substring(c + 1);
    }
  }

  return false;
}

function solve() {
  let k = 0;
  if (solveSudokuHelper(0, 0)) {
    const cells = document.querySelectorAll(".tile");
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        console.log(cells[k]);
        if (
          cells[k] != "1" &&
          cells[k] != "2" &&
          cells[k] != "3" &&
          cells[k] != "4" &&
          cells[k] != "5" &&
          cells[k] != "6" &&
          cells[k] != "7" &&
          cells[k] != "8" &&
          cells[k] != "9"
        ) {
          cells[k].innerText = puzzle[i][j];
        }
        k++;
      }
    }
    console.log("Sudoku solved successfully:");
  } else {
    console.log("No solution exists.");
  }
}

function printSudoku() {
  for (let i = 0; i < 9; i++) {
    console.log(puzzle[i]);
  }
}
// function getpuzzle(){
//   const newpuzzle = [
//     "53--7----",
//     "6--195---",
//     "-98----6-",
//     "8---6---3",
//     "4--8-3--1",
//     "7---2---6",
//     "-6----28-",
//     "---419--5",
//     "----8--79",
//   ];
//   const cells = document.querySelectorAll(".tile");
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
// }
