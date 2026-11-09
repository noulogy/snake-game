# Snake Game

A lightweight, browser-based implementation of the classic Snake game built using vanilla JavaScript and HTML5 Canvas. This project serves as a foundational demonstration of core game mechanics, including discrete grid coordinate systems, event-driven input handling, spatial array management, and real-time collision detection without relying on third-party frameworks.

## Table of Contents
- [Overview](#overview)
- [System Architecture & Concepts](#system-architecture--concepts)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Controls](#controls)
- [Development Roadmap](#development-roadmap)
- [License](#license)

## Overview
The application renders a dynamic two-dimensional grid where a moving entity (the snake) updates position autonomously at fixed tick intervals. The primary objective is to acquire pseudo-randomly positioned target entities (apples) to extend the snake's length and increment the score, while navigating to avoid boundary collisions and dynamic self-intersection.

## System Architecture & Concepts
* **Grid Coordinate Mapping:** Positions are calculated relative to a discrete 2D matrix of size $W \times H$, decoupling rendering logic from display resolution.
* **Array-Based Queue Management:** The snake body structure is maintained as an array of coordinate objects `[{x, y}]`. Spatial updates enqueue a new head coordinate while dequeueing the tail, unless food consumption occurs.
* **Collision Detection Engine:** Axis-aligned validation checks boundary limits, target entity consumption, and self-intersection against existing body segments.
* **Game Loop Execution:** Input queues are evaluated per discrete tick frame using a timed dispatch loop (`requestAnimationFrame` or `setInterval`) to manage game state redrawing.

## Tech Stack
* **Language:** JavaScript (ECMAScript 2015+)
* **Graphics API:** HTML5 Canvas API
* **Styling:** Standard CSS3

## Project Structure
```text
snake-game/
├── index.html        # Main HTML layout and canvas container
├── style.css         # UI layout and canvas canvas styling
├── script.js         # Game loop engine, input handling, and state logic
└── README.md         # Project documentation
```

## Getting Started

### Prerequisites
A standard modern web browser with HTML5 Canvas support (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/snake-game.git
   ```
2. Navigate to the project root directory:
   ```bash
   cd snake-game
   ```
3. Open `index.html` directly in any web browser, or serve it locally using an environment extension like Live Server.

## Controls
Input processing includes anti-reversal logic to prevent 180-degree instantaneous collisions into the snake's contiguous body segments.

| Key | Direction |
| :--- | :--- |
| `ArrowUp` / `W` | Move Up |
| `ArrowDown` / `S` | Move Down |
| `ArrowLeft` / `A` | Move Left |
| `ArrowRight` / `D` | Move Right |

## Development Roadmap
- [x] Initial HTML5 Canvas initialization and grid rendering setup.
- [x] Implementation of the core tick-based game loop.
- [x] Event handling for directional key inputs with anti-reversal validation.
- [x] Target spawning algorithm with non-occupied coordinate validation.
- [x] Boundary collision and self-intersection detection.
- [ ] Persistent high-score recording utilizing the `localStorage` API.
- [ ] Speed scaling mechanics triggered by score milestones.

## License
Distributed under the MIT License.