import { useState } from "react";

import Player from "./comps/Player"
import GameBoard from "./comps/GameBoard"
import Logs from "./comps/Logs";
import { WINNING_COMBINATIONS } from "./comps/winning-combinations";
import GameOver from "./comps/GameOver";

const INITIAL_GAMEBOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveWinner(gameBoard){
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

function deriveGameBoard(gameState){
  let gameBoard = [...INITIAL_GAMEBOARD.map(innerArray => [...innerArray])];
  for(const turn of gameState){
      const {rowi, coli, player} = turn;
      gameBoard[rowi][coli] = player;
  }
}

function App() {
  //state definition and state changing functions
  const [gameState, setGameState] = useState([]);
  function handleSquareClick(rowi, coli) {
    setGameState( (prevState) => {
      const currentPlayer = gameState.length % 2 === 0 ? "X" : "O";
      const updatedState = [
        { coli: coli, rowi: rowi, player: currentPlayer}
        , ...prevState
      ]
      return updatedState;
    });
  }
  function handleMatchReset(){
    setGameState([]);
  }
  //derived state related stuff 
  
  const winner=deriveWinner(gameBoard);
  const isDrawn = gameState.length == 9 && (!winner);
  const activePlayer = gameState.length % 2 === 0 ? "X" : "O";
  //conditional content

  const isXActive = activePlayer === 'X' ? true : false;
  const isYActive = activePlayer === 'O' ? true : false;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={isXActive}/>
          <Player name="Player 2" symbol="O" isActive={isYActive}/>
        </ol>
        {(winner || isDrawn) && <GameOver winner={winner} onMatchReset={handleMatchReset} />}
        <GameBoard handleSelectSquare={handleSquareClick} gameBoard={gameBoard}/>
      </div>
      <Logs gameState={gameState}/>
    </main>
  )
}

export default App
