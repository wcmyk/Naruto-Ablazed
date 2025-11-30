// Load player data (temporary mock data)
const playerData = {
  username: "BNMBJJ",
  ryo: 3895330,
  pearls: 13,
  hpPercent: 1.0,
  xpPercent: 41700 / 225000,
  frontCharacter: "assets/characters/madara/full.png"
};

// Generic placeholder artwork for missing assets (helps on mobile)
const placeholderSVG = `
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
    <defs>
      <linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stop-color='#1e293b' />
        <stop offset='100%' stop-color='#0ea5e9' />
      </linearGradient>
    </defs>
    <rect x='4' y='4' width='192' height='192' rx='24' fill='url(#grad)' stroke='#0b1726' stroke-width='8'/>
    <g fill='none' stroke='#cbd5e1' stroke-width='10' stroke-linecap='round'>
      <circle cx='100' cy='88' r='30'/>
      <path d='M45 168c10-30 35-46 55-46s45 16 55 46' />
    </g>
  </svg>
`;

const placeholderDataUri = `data:image/svg+xml,${encodeURIComponent(placeholderSVG)}`;

function applyImageFallback(img) {
  img.addEventListener("error", () => {
    if (img.dataset.fallbackApplied === "true") return;
    img.dataset.fallbackApplied = "true";
    img.src = placeholderDataUri;
    img.classList.add("placeholder-img");
  });

  // If the request already failed before listeners were attached (fast browsers),
  // swap immediately.
  if (img.complete && img.naturalWidth === 0) {
    img.dispatchEvent(new Event("error"));
  }
}

// Apply data
document.querySelectorAll("img").forEach(applyImageFallback);
document.getElementById("username").textContent = playerData.username;
document.getElementById("ryo-amount").textContent = playerData.ryo.toLocaleString();
document.getElementById("pearl-amount").textContent = playerData.pearls;
document.getElementById("character-art").src = playerData.frontCharacter;

document.getElementById("hp-bar").style.width = (playerData.hpPercent * 100) + "%";
document.getElementById("xp-bar").style.width = (playerData.xpPercent * 100) + "%";
