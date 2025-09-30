export default function GameOver( {winner} ) {
    //state definition and state changing
    //derived state 
    //conditional content
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            <p>{winner} won!</p>
            <p><button>Rematch</button></p>
        </div>
    )
}