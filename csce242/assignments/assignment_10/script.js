async function fetchIceCreamData() {
    try {
        const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
        const data = await response.json();
        renderGallery(data);
    } catch (error) {
        console.error('Error fetching ice cream data:', error);
    }
}

function renderGallery(data) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    data.forEach(item => {
        if (!item.image.includes('-2')) {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="https://portiaportia.github.io/json/images/ice-creams/${item.image}" alt="${item.name}">
                <div class="hover-text">${item.name}</div>
            `;
            gallery.appendChild(galleryItem);
        }
    });
}

fetchIceCreamData();