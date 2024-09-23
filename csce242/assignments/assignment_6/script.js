// Color Slider Functionality
const slider = document.getElementById('color-slider');
const colorMessage = document.getElementById('color-message');
const colorSliderSection = document.getElementById('color-slider-section');

// Handle Slider Changes
slider.addEventListener('input', function() {
    const redValue = slider.value;
    const greenValue = 100; // Fixed green component
    const blueValue = 100; // Fixed blue component
    
    // Set the background color of the color slider section
    colorSliderSection.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    // Change the message based on the red value (R)
    if (redValue < 85) {
        colorMessage.textContent = 'Chill';
    } else if (redValue < 170) {
        colorMessage.textContent = 'Neutral';
    } else {
        colorMessage.textContent = 'Alert';
    }
});

// Menu Navigation Functionality
document.getElementById('nav-color-slider').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('color-slider-section').style.display = 'block';
    document.getElementById('picture-chooser-section').style.display = 'none';
});

document.getElementById('nav-picture-chooser').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('color-slider-section').style.display = 'none';
    document.getElementById('picture-chooser-section').style.display = 'block';
});

// Dropdown Arrow for Small Screens
const dropdownArrow = document.querySelector('.dropdown-arrow');
const menuItems = document.querySelector('.menu-items');

dropdownArrow.addEventListener('click', function() {
    menuItems.classList.toggle('active');
});

// Picture Chooser Functionality
const smallPicButton = document.getElementById('small-pic');
const mediumPicButton = document.getElementById('medium-pic');
const largePicButton = document.getElementById('large-pic');
const pictureDisplay = document.getElementById('picture-display');

smallPicButton.addEventListener('click', function() {
    pictureDisplay.src = 'https://picsum.photos/200';
});

mediumPicButton.addEventListener('click', function() {
    pictureDisplay.src = 'https://picsum.photos/400';
});

largePicButton.addEventListener('click', function() {
    pictureDisplay.src = 'https://picsum.photos/600';
});
