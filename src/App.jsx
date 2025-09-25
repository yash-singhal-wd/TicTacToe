import Player from "./comps/Player"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Yash" symbol="X" />
          <Player name="Singhal" symbol="O" />
        </ol>
      </div>
    </main>
  )
}

export default App
