import { useState } from "react";

import Player from "./comps/Player"
import GameBoard from "./comps/GameBoard"

function App() {
  //state definition and state changing
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSquareClick() {
    setActivePlayer((currentPlayer) => {
      if (currentPlayer=='X') return 'O'
      else return 'X';
    })
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
        <GameBoard handleSelectSquare={handleSquareClick} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  )
}

export default App
