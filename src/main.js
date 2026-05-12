import { initSketch } from './Scketch';
import "./style.css"

const canvas  = document.getElementById('canvas');
const ctx     = canvas.getContext('2d');

const SIZE    = Math.min(window.innerWidth, window.innerHeight, 1080);
canvas.width  = SIZE;
canvas.height = SIZE;

const mouse = { x: -9999, y: -9999 };

canvas.addEventListener('mousemove', (e) => {
  const rect   = canvas.getBoundingClientRect();

  const scaleX = canvas.width  / rect.width;
  const scaleY = canvas.height / rect.height;
  mouse.x = (e.clientX - rect.left) * scaleX;
  mouse.y = (e.clientY - rect.top)  * scaleY;
});

canvas.addEventListener('mouseleave', () => {
  mouse.x = -9999;
  mouse.y = -9999;
});

initSketch(canvas, ctx, SIZE, mouse);

// ── Screenshot with key "S" ────────────────────────────────────────────
window.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() !== 's') return;

  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob);
    const a   = document.createElement('a');
    a.href     = url;
    a.download = `agent-network-${Date.now()}.png`;
    a.click();

    URL.revokeObjectURL(url);
  });
});