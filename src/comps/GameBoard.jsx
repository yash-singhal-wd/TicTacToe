import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";

export default function GameBoard({ handleSelectSquare, gameBoard }) {
    //state definition and state changing
    //derived state 
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