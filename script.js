document.addEventListener('DOMContentLoaded', function() {
  const board = document.querySelector('.board');
  const numBoxes = 800;
  const colors = ['#ffcc00', '#00aaff', '#ff6666', '#66cc66', '#cc66cc']; // Add more colors as needed

  for (let i = 0; i < numBoxes; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    board.appendChild(box);

    // Add event listener for hover effect
    box.addEventListener('mouseover', function() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      box.style.backgroundColor = randomColor;
    });

    // Reset the box color when mouse leaves the box
    box.addEventListener('mouseout', function() {
      box.style.backgroundColor = '#ffffff';
    });
  }
});
