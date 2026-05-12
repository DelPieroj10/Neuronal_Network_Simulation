## 📸 Screenshots

### Agent Network Interactions
<img src="Screenshot/agent-network-02.png width="600" />
<img src="Screenshot/agent-network-03.png width="600" />

# Agent Network Simulation

A creative JavaScript experiment built with **Vite + Vanilla JS (ES6+)**. Autonomous agents move across a canvas, forming dynamic connections based on proximity — like a living neural network.

Built as a portfolio project, refactored from a `canvas-sketch` prototype into a clean, modular architecture.

---

## ✦ Preview

> Live demo coming soon

---

## ✦ Features

- 40 autonomous agents with randomized velocity, size, and color
- Dynamic connections weighted by distance (opacity + line width)
- Mouse interaction — agents are attracted to the cursor
- Click anywhere on the canvas to spawn new agents
- Motion trail effect (manual motion blur via semi-transparent overlay)
- Pulsing glow on each node using sine wave oscillation
- Press `S` to export a PNG screenshot
- Live stats panel — agent count, active links, FPS

---

## ✦ Tech Stack

| Tool | Role |
|---|---|
| Vite 5 | Dev server + bundler |
| Vanilla JS (ES6+) | Logic, physics, rendering |
| Canvas API | 2D rendering |
| HTML / CSS | Layout and UI |

---

## ✦ Project Structure

```
agent-network/
├── index.html          # Entry point
├── package.json        # Dependencies and scripts
└── src/
    ├── main.js         # Canvas setup, mouse state, screenshot
    ├── sketch.js       # Animation loop, connection logic
    ├── Agent.js        # Agent class — physics, attraction, draw
    ├── Vector.js       # 2D vector math
    ├── utils.js        # Pure helpers: randomRange, mapRange, clamp
    ├── stats.js        # DOM stats panel updater
    └── style.css       # Global styles and design tokens
```

---

## ✦ Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/agent-network.git
cd agent-network

# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## ✦ Build for Production

```bash
npm run build
npm run preview
```

---

## ✦ Controls

| Input | Action |
|---|---|
| Mouse move | Attract nearby agents |
| Click | Spawn a new agent |
| `S` | Save screenshot as PNG |

---

## ✦ Concepts Explored

- ES6 Classes and modular architecture (`import` / `export`)
- `requestAnimationFrame` — native animation loop
- Canvas API — `arc`, `lineTo`, `createRadialGradient`, `save/restore`
- Euclidean distance and linear interpolation (`mapRange`)
- Object references for shared mutable state
- Euler integration for agent movement
- Inverse-distance attraction force with velocity clamping

---

👤 Author

Developed by Jean Piero Parra
- Aspiring React Developer (Trainee / Junior)
- Focus on UX, good practices, and maintainable code


## ✦ License

MIT — free to use, modify, and share.
