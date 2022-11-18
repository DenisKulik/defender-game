export function displayHealthLevel(player) {
  const { health } = player;

  if (health > 50) return 'healthy';
  if (health >= 15 && health <= 50) return 'wounded';
  return 'critical';
}

export function sortByHealth(players) {
  return players.sort((a, b) => b.health - a.health);
}
