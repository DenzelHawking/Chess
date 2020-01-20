const xCoords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let coordinate = [
  'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8',
  'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7',
  'A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6',
  'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5',
  'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4',
  'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3',
  'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2',
  'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1'
];

let bishopChessmen = document.querySelectorAll('.bishop')


chessSquareItem.forEach((elem, index) => {
  // elem.onclick = () => rookMoves(coordinate[index]);
  // elem.onclick = () => bishopMoves(coordinate[index]);
  // elem.onclick = () => queenMoves(coordinate[index]);
  // elem.onclick = () => knightMove(coordinate[index]);
  elem.onclick = () => kingMoves(coordinate[index]);
});

// -----------------------------------------
function coordToArray(strCoord) {
  const x = xCoords.indexOf(strCoord[0]),
        y = parseInt(strCoord[1], 10);

  return [x, y];
};

function filterMoves(moves) {
  return moves.filter((move) => move[0] < 8 && move[0] >= 0 && move[1] > 0 && move[1] <= 8);
};

function getPossibleMoves(chessmenMoves) {
  let chessmenCoordinate = new Array;

  for (let i = 0; i < coordinate.length; i++) {
    chessSquareItem[i].classList.remove('possibleMoves');
  };

  for (let i = 0; i < chessmenMoves.length; i++) {
    chessmenCoordinate.push(coordinate.indexOf(xCoords[chessmenMoves[i][0]] + chessmenMoves[i][1], 0));
    chessSquareItem[chessmenCoordinate[i]].classList.add('possibleMoves');
  };
};
// -----------------------------------------

function knightMove(chessCoord) {
  let moves = new Array;
  let coords = coordToArray(chessCoord);

  moves.push([coords[0] + 1, coords[1] + 2]);
  moves.push([coords[0] + 2, coords[1] + 1]);
  moves.push([coords[0] - 1, coords[1] + 2]);
  moves.push([coords[0] - 2, coords[1] + 1]);
  moves.push([coords[0] + 1, coords[1] - 2]);
  moves.push([coords[0] + 2, coords[1] - 1]);
  moves.push([coords[0] - 1, coords[1] - 2]);
  moves.push([coords[0] - 2, coords[1] - 1]);

  const filtered = filterMoves(moves);
  getPossibleMoves(filtered);
};

function bishopMoves(chessCoord) {
  let moves = new Array;
  let coords = coordToArray(chessCoord);

  for (let i = 0; i < xCoords.length; i++) {
    moves.push([coords[0] + i+1, coords[1] + i+1]);
    moves.push([coords[0] - i-1, coords[1] - i-1]);
    moves.push([coords[0] + i+1, coords[1] - i-1]);
    moves.push([coords[0] - i-1, coords[1] + i+1]);
  };

  const filtered = filterMoves(moves);
  getPossibleMoves(filtered);

  return filtered;
};

function rookMoves(chessCoord) {
  let moves = new Array;
  let coords = coordToArray(chessCoord);

  for (let i = 0; i < xCoords.length; i++) {
    moves.push([coords[0] + i+1, coords[1]]);
    moves.push([coords[0] - i-1, coords[1]]);
    moves.push([coords[0], coords[1] + i+1]);
    moves.push([coords[0], coords[1] - i-1]);
  };

  const filtered = filterMoves(moves);
  getPossibleMoves(filtered);

  return filtered;
};

function queenMoves(chessCoord) {
  let moves = new Array;
  let coords = coordToArray(chessCoord);

  moves = moves.concat(bishopMoves(chessCoord), rookMoves(chessCoord));

  const filtered = filterMoves(moves);
  getPossibleMoves(filtered);
};

function kingMoves(chessCoord) {
  let moves = new Array;
  let coords = coordToArray(chessCoord);

  moves.push([coords[0] - 1, coords[1] + 1]);
  moves.push([coords[0], coords[1] + 1]);
  moves.push([coords[0] + 1, coords[1] + 1]);

  moves.push([coords[0] - 1, coords[1]]);
  moves.push([coords[0] + 1, coords[1]]);

  moves.push([coords[0] - 1, coords[1] - 1]);
  moves.push([coords[0], coords[1] - 1]);
  moves.push([coords[0] + 1, coords[1] - 1]);

  let filtered = filterMoves(moves);
  getPossibleMoves(filtered);
};
