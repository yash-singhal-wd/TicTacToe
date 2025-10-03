//main imports
import { useState } from "react";

//import components
import Player from "./comps/Player"
import GameBoard from "./comps/GameBoard"
import Logs from "./comps/Logs";
import GameOver from "./comps/GameOver";

//import static data
import { WINNING_COMBINATIONS } from "./comps/dataVariables";

// import stateHelper functions
import { deriveGameBoard, deriveWinner } from "./stateHelper"; 

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
  const gameBoard = deriveGameBoard(gameState);
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
