// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.createElement("button");
  toggle.textContent = "🌙";
  toggle.style.position = "fixed";
  toggle.style.bottom = "20px";
  toggle.style.right = "20px";
  toggle.style.padding = "10px";
  toggle.style.borderRadius = "50%";
  toggle.style.border = "none";
  toggle.style.cursor = "pointer";
  toggle.style.zIndex = 1000;

  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
  });
});
