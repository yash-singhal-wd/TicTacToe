import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ handleSelectSquare, currentState }) {
    //derived state 
    let gameBoard = initialGameBoard;
    if(currentState.length > 0){
        const {rowi, coli, player} = currentState[0];
        gameBoard[rowi][coli] = player;
        console.log(JSON.stringify(gameBoard));
    }
    //state definition and state changing
    //conditional content
    return (
        <ol id="game-board">
            {gameBoard.map( (row, rowi) => (
                <li key={rowi}>
                    <ol>
                        {row.map( (playerSymbol, i) => (
                            <li key={i}>
                                <button disabled={playerSymbol ? true: false} onClick={() => handleSelectSquare(rowi, i)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
} 