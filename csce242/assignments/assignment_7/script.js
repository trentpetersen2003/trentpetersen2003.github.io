// Script to handle the drawing of stars
document.getElementById('draw-btn').addEventListener('click', function() {
    const numStars = parseInt(document.getElementById('stars').value);
    const starsContainer = document.getElementById('stars-container');

    // Clear any existing stars
    starsContainer.innerHTML = '';

    // Validate input
    if (isNaN(numStars) || numStars < 1) {
        starsContainer.textContent = 'Please enter a valid number of stars.';
        return;
    }

    // Get container dimensions
    const containerWidth = starsContainer.clientWidth;
    const containerHeight = starsContainer.clientHeight;
    const starSize = 20; // Assuming star size (font-size) is 20px

    // Generate stars
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.textContent = '★';
        star.classList.add('star');

        // Randomize position with margins
        const x = Math.random() * (containerWidth - starSize);
        const y = Math.random() * (containerHeight - starSize);

        star.style.position = 'absolute';
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        // Add event listener to display star number on click
        star.addEventListener('click', function() {
            alert(`This is star number ${i + 1}`);
        });

        starsContainer.appendChild(star);
    }
});
