const eyeGroup = document.getElementById("eye-group");

const center = {
  x: 161.375,
  y: 114.736,
};

const maxOffset = 8;

document.addEventListener("mousemove", (e) => {
  const svg = eyeGroup.closest("svg");
  const rect = svg.getBoundingClientRect();

  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const dx = mouseX - center.x;
  const dy = mouseY - center.y;
  const angle = Math.atan2(dy, dx);
  const dist = Math.min(Math.hypot(dx, dy), maxOffset);

  const offsetX = Math.cos(angle) * dist;
  const offsetY = Math.sin(angle) * dist;

  eyeGroup.setAttribute("transform", `translate(${offsetX}, ${offsetY})`);
});
