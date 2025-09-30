# Tic Tac Toe React App

A modern Tic Tac Toe game built with **React**, demonstrating state management, derived state, immutability, and clean component architecture.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Game Logic](#game-logic)  
- [State Management](#state-management)  
- [Component Breakdown](#component-breakdown)  
- [Contributing](#contributing)  
- [License](#license)

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

## Core Project Structure

src/
├─ comps/
│  ├─ Player.jsx
│  ├─ GameBoard.jsx
│  ├─ Logs.jsx
│  ├─ GameOver.jsx
│  └─ winning-combinations.js
└─ App.jsx
