import Player from "./comps/Player"
import GameBoard from "./comps/GameBoard"
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Yash" symbol="X" />
          <Player name="Singhal" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
