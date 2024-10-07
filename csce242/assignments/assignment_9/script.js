// Updated Bird class with additional attributes
class Bird {
    constructor(name, size, lifespan, food, habitat, fact, image) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
        this.image = image;
    }
}

// Array of Bird objects
const birds = [
    new Bird('Hummingbird', '2.5 inches', '3-5 years', 'Nectar (Sugar water)', 'Trees', "They're nicknamed 'Hummers'", 'images/hummingbird.png'),
    new Bird('Blue Jay', '9-12 inches', '7 years', 'Omnivore', 'Forests', 'Blue Jays are known for their intelligence and complex social behavior.', 'images/bluejay.png'),
    new Bird('Cardinal', '8-9 inches', '3 years', 'Seeds', 'Woodlands', 'Male cardinals are bright red, while females are a more subdued brown color.', 'images/cardinal.png'),
    new Bird('Robin', '10 inches', '2 years', 'Insects', 'Urban areas', 'Robins are one of the first birds to sing at dawn.', 'images/robin.png')
];

// Function to render bird cards on the page
const renderBirdCards = () => {
    const cardsContainer = document.getElementById('cards-container');
    birds.forEach((bird, index) => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-index', index); // Store bird index for modal use

        // Create and append image
        const birdImage = document.createElement('img');
        birdImage.src = bird.image;
        birdImage.alt = `${bird.name} image`;
        card.appendChild(birdImage);

        // Create and append info container
        const cardInfo = document.createElement('div');
        cardInfo.className = 'card-info';
        cardInfo.textContent = bird.name;
        card.appendChild(cardInfo);

        // Append card to container
        cardsContainer.appendChild(card);

        // Add click event to open modal
        card.addEventListener('click', () => openModal(index));
    });
};

// Function to open the modal and display bird info
const openModal = (index) => {
    const bird = birds[index];
    document.getElementById('bird-name').textContent = bird.name;
    document.getElementById('bird-size').textContent = bird.size;
    document.getElementById('bird-lifespan').textContent = bird.lifespan;
    document.getElementById('bird-food').textContent = bird.food;
    document.getElementById('bird-habitat').textContent = bird.habitat;
    document.getElementById('bird-fact').textContent = bird.fact;
    document.getElementById('bird-image').src = bird.image;
    document.getElementById('modal').style.display = 'flex';
};

// Function to close the modal
const closeModal = () => {
    document.getElementById('modal').style.display = 'none';
};

// Event listener to close the modal when clicking on the close button
document.getElementById('close-modal').addEventListener('click', closeModal);

// Render the cards when the document is loaded
document.addEventListener('DOMContentLoaded', renderBirdCards);
