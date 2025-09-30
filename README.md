# Tic Tac Toe React App

A modern Tic Tac Toe game built with **React**, demonstrating state management, derived state, immutability, and clean component architecture.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Game Logic](#game-logic)  

---

## Project Overview

This project is a classic Tic Tac Toe game where two players take turns to mark **X** or **O** on a 3×3 board.  
The app determines the winner or a draw and allows players to reset the game.

It emphasizes:

- React **functional components**
- **Derived state** to compute game board, active player, winner, and draw status
- Proper handling of **immutable state** to avoid bugs
- Clean and reusable component design

---

## Features

- Two-player Tic Tac Toe gameplay
- Highlights active player
- Determines winner or draw
- Logs move history
- Reset (Rematch) functionality
- Clean and responsive UI

---

## Tech Stack

- **React** – UI library  
- **JavaScript (ES6+)** – Game logic  
- **CSS / HTML** – Styling and layout  

Optional:

- Can be enhanced with **TypeScript** or **state management libraries** (Redux, Zustand) for larger projects

---

# Installation

1. Clone the repository:

```bash
git clone <this repo>
cd tic-tac-toe-react
npm i
npm run dev
```

# Game Logic

- The board is a 3×3 grid represented as a 2D array.  
- Players alternate turns (X first, then O).  
- **Winning combinations** are defined in `winning-combinations.js`:

```javascript
export const WINNING_COMBINATIONS = [
  [{row:0,col:0},{row:0,col:1},{row:0,col:2}],
  [{row:1,col:0},{row:1,col:1},{row:1,col:2}],
  [{row:2,col:0},{row:2,col:1},{row:2,col:2}],
  [{row:0,col:0},{row:1,col:0},{row:2,col:0}],
  [{row:0,col:1},{row:1,col:1},{row:2,col:1}],
  [{row:0,col:2},{row:1,col:2},{row:2,col:2}],
  [{row:0,col:0},{row:1,col:1},{row:2,col:2}],
  [{row:0,col:2},{row:1,col:1},{row:2,col:0}],
];
```



