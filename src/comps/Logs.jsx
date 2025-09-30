export default function Logs({gameState}) {
    return (
        <ol id="log">
            {gameState.map((turn, i) => 
                <li key={`${turn.rowi}${turn.coli}`}>{`${turn.player} selected ${turn.rowi}.${turn.coli}`}</li>
            )}
        </ol>
    )
}