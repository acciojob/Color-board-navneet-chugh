// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to reset the box color after 1 second
function resetColor(event) {
  setTimeout(() => {
    event.target.style.backgroundColor = "#ccc";
  }, 1000);
}

// Add event listener to each box to change color on hover
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
  square.addEventListener('mouseover', (event) => {
    const color = getRandomColor();
    event.target.style.backgroundColor = color;
    resetColor(event);
  });
});
