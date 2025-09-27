import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ handleSelectSquare, activePlayerSymbol }) {
    //state definition and state changing
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSquareClick(i, j){
        setGameBoard( (prevBoard) => {
            const newBoard = [...prevBoard].map(row => [...row]);
            newBoard[i][j] = activePlayerSymbol;
            return newBoard;
        });
        handleSelectSquare();
    }
    //conditional content
    return (
        <ol id="game-board">
            {gameBoard.map( (row, rowi) => (
                <li key={rowi}>
                    <ol>
                        {row.map( (playerSymbol, i) => (
                            <li key={i}>
                                <button onClick={() => handleSquareClick(rowi, i)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
} 