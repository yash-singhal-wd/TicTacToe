import { useState } from "react";

import Player from "./comps/Player"
import GameBoard from "./comps/GameBoard"

function App() {
  //state definition and state changing
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameState, setGameState] = useState([]);
  function handleSquareClick(rowi, coli) {
    setActivePlayer((currentPlayer) => currentPlayer=='X' ? 'O': 'X');
    setGameState( (prevState) => {
      let currentPlayer = 'X';
      if(prevState.length > 0 && prevState[0].player=='X') currentPlayer='O';
      const updatedState = [
        { coli: coli, rowi: rowi, player: currentPlayer}
        , ...prevState
      ]
      return updatedState;
    });
  }
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
        <GameBoard handleSelectSquare={handleSquareClick} currentState={gameState}/>
      </div>
    </main>
  )
}

export default App
