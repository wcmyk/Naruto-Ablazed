// Load player data (temporary mock data)
const playerData = {
  username: "BNMBJJ",
  ryo: 3895330,
  pearls: 13,
  hpPercent: 1.0,
  xpPercent: 41700 / 225000,
  frontCharacter: "assets/characters/madara/full.png"
};

// Apply data
document.getElementById("username").textContent = playerData.username;
document.getElementById("ryo-amount").textContent = playerData.ryo.toLocaleString();
document.getElementById("pearl-amount").textContent = playerData.pearls;
document.getElementById("character-art").src = playerData.frontCharacter;

document.getElementById("hp-bar").style.width = (playerData.hpPercent * 100) + "%";
document.getElementById("xp-bar").style.width = (playerData.xpPercent * 100) + "%";
