/* ============================
   Title Screen Logic
=============================*/

// Generate a random fake user ID
function generateUserId() {
  let id = "";
  for (let i = 0; i < 12; i++) id += Math.floor(Math.random() * 10);
  return id;
}

document.addEventListener("DOMContentLoaded", () => {

  // Set user ID on screen
  document.getElementById("user-id").textContent = generateUserId();

  // Click to start
  const tapArea = document.getElementById("tap-to-start");

  tapArea.addEventListener("click", () => {
    tapArea.style.opacity = 0;
    document.body.style.transition = "opacity 0.4s ease-out";
    document.body.style.opacity = 0;

    setTimeout(() => {
      window.location.href = "village.html";
    }, 400);
  });

  // Button placeholders
  document.getElementById("btn-cache").addEventListener("click", () => {
    alert("Cache cleared! (Placeholder)");
  });

  document.getElementById("btn-data").addEventListener("click", () => {
    alert("Data transfer not implemented yet.");
  });
});
