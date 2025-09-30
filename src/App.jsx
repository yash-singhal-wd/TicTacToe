import { useState } from "react";

import Player from "./comps/Player"
import GameBoard from "./comps/GameBoard"
import Logs from "./comps/Logs";
import { WINNING_COMBINATIONS } from "./comps/winning-combinations";
import GameOver from "./comps/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function App() {
  //state definition and state changing functions
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

  //derived state related stuff 
  let gameBoard = initialGameBoard;
  for(const turn of gameState){
      const {rowi, coli, player} = turn;
      gameBoard[rowi][coli] = player;
      console.log(JSON.stringify(gameBoard));
  }

  let winner=null;
  for(const combo of WINNING_COMBINATIONS){
    const firstSymbol = gameBoard[combo[0].row][combo[0].column];
    const secondSymbol = gameBoard[combo[1].row][combo[1].column];
    const thirdSymbol = gameBoard[combo[2].row][combo[2].column];

    if(firstSymbol && firstSymbol==secondSymbol && secondSymbol==thirdSymbol){
      winner = firstSymbol;
      console.log("Winner is here: ", firstSymbol);
    }
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
        {winner && <GameOver winner={winner}/>}
        <GameBoard handleSelectSquare={handleSquareClick} gameBoard={gameBoard}/>
      </div>
      <Logs gameState={gameState}/>
    </main>
  )
}

export default App
