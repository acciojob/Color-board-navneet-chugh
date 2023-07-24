document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  const numBoxes = 800;
  const colors = ['#ffcc00', '#00aaff', '#ff6666', '#66cc66', '#cc66cc']; // Add more colors as needed
	cy.get('.square').trigger('mouseover', { force: true });

  for (let i = 0; i < numBoxes; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    // Add event listener for hover effect
    square.addEventListener('mouseover', function() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      square.style.backgroundColor = randomColor;
    });

    // Reset the square color when mouse leaves the square
    square.addEventListener('mouseout', function() {
      square.style.backgroundColor = '#ffffff';
    });
  }
});
