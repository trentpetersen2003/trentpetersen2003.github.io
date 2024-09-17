// Counter functionality
let count = 0;
const countDisplay = document.getElementById('countDisplay');
document.querySelector('.counter-box').addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

// Image refresh functionality
function changeImage() {
    const imageElement = document.getElementById('randomImage');
    imageElement.src = 'https://picsum.photos/200?random=' + new Date().getTime();
}

// Slider functionality to move the square
function moveSquare() {
    const sliderValue = document.getElementById('slider').value;
    const square = document.getElementById('square');
    square.style.transform = `translateX(${sliderValue}px)`;
}
