// Array of image data including source, title, and description
const imageArray = [
    { 
        src: "images/birthday.jpg", 
        title: "Birthday", 
        description: "It's time to party!" 
    },
    { 
        src: "images/clown.jpg", 
        title: "Clown", 
        description: "Can either be really funny or really creepy." 
    },
    { 
        src: "images/rain.jpg", 
        title: "Rain", 
        description: "Make sure to bring an umbrella." 
    },
    { 
        src: "images/read.jpg", 
        title: "Read", 
        description: "Crack open a good book." 
    },
    { 
        src: "images/shovel.jpg", 
        title: "Shovel", 
        description: "Grab a shovel and start diggin'." 
    },
    { 
        src: "images/work.jpg", 
        title: "Work", 
        description: "Time to get to work!" 
    }
];

// Container for images
const imagesContainer = document.getElementById('images-container');

// Function to load images
function loadImages() {
    imageArray.forEach((item, index) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper');

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;

        // Add click event to the image wrapper instead of the image
        imageWrapper.addEventListener('click', () => showDetails(item));

        imageWrapper.appendChild(img);
        imagesContainer.appendChild(imageWrapper);
    });
}

// Function to display title and description when an image is clicked
function showDetails(item) {
    // Check if a details container already exists, if so, update its content
    let existingDetails = document.getElementById('details-container');
    if (!existingDetails) {
        // Create a new details container if it doesn't exist
        existingDetails = document.createElement('div');
        existingDetails.id = 'details-container';
        existingDetails.classList.add('details-container');
        imagesContainer.parentNode.insertBefore(existingDetails, imagesContainer);
    }

    // Update details container content
    existingDetails.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    `;
}

// Load images on page load
window.onload = loadImages;
