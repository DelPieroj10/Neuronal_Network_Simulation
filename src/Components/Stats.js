const elAgents      = document.getElementById('stat-agents');
const elConnections = document.getElementById('stat-connections');
const elFps         = document.getElementById('stat-fps');

export function updateStats(agentCount, connectionCount, fps) {
  elAgents.textContent      = `Agents: ${agentCount}`;
  elConnections.textContent = `Links: ${connectionCount}`;
  elFps.textContent         = `FPS: ${fps}`;
}

