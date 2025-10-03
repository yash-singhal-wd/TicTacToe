import { WINNING_COMBINATIONS } from "./comps/winning-combinations";

export function deriveWinner(gameBoard){
  let winner=null;
  for(const combo of WINNING_COMBINATIONS){
    const firstSymbol = gameBoard[combo[0].row][combo[0].column];
    const secondSymbol = gameBoard[combo[1].row][combo[1].column];
    const thirdSymbol = gameBoard[combo[2].row][combo[2].column];

    if(firstSymbol && firstSymbol==secondSymbol && secondSymbol==thirdSymbol){
      winner = firstSymbol;
    }
  }
  return winner;
}

export function deriveGameBoard(gameState){
  let gameBoard = [...INITIAL_GAMEBOARD.map(innerArray => [...innerArray])];
  for(const turn of gameState){
      const {rowi, coli, player} = turn;
      gameBoard[rowi][coli] = player;
  }
  return gameBoard;
}