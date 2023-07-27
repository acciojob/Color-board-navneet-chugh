//your JS code here. If required.
document.body.onload = createBoxes();

function createBoxes() {
  const container = document.getElementById("container");
  for (let i = 1; i <= 800; i++) {
    const box = document.createElement("div");
    const id = `box${i}`;
    box.className = "square";
    box.id = id;
    box.onmouseover = () => handleHoverEnter(id);
    box.onmouseout = () => handleHoverLeave(id);
    container.appendChild(box);
  }
}

function handleHoverEnter(id) {
  const box = document.getElementById(id);
  box.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
}
function handleHoverLeave(id) {
  const box = document.getElementById(id);
  setTimeout(() => {
    box.style.backgroundColor = "rgb(29, 29, 29)";
  }, 1000);
}