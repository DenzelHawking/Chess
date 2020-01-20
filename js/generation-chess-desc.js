let chessDesk = document.getElementById('chess-desk');
let squareArray = new Array;
let chessSquareItem;
// let chessSquareItem = document.querySelectorAll('.chess-square');

for (let i = 0; i < 64; i++) {
  let chessSquare = document.createElement('div');
  chessSquare.classList.add('chess-square');
  chessDesk.appendChild(chessSquare);
  chessSquareItem = document.querySelectorAll('.chess-square');
};

for (let i = 0; i < 8; i++) {
  if (i % 2 == 0) {
    for (let j = 0; j < 8; j++) {
      j % 2 == 0 ? squareArray.push('chess-square-white') : squareArray.push('chess-square-black');
    };
  } else {
    for (let j = 0; j < 8; j++) {
      j % 2 == 0 ? squareArray.push('chess-square-black') : squareArray.push('chess-square-white');
    };
  };
};

for (let i = 0; i < chessSquareItem.length; i++) {
  chessSquareItem[i].classList.add(squareArray[i])
};
