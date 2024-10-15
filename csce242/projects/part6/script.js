document.addEventListener('DOMContentLoaded', function() {
    // Toggle Button for Navbar
    const toggleBtn = document.querySelector('.toggle-btn') || document.createElement('button');
    if (!toggleBtn.classList.contains('toggle-btn')) {
        toggleBtn.classList.add('toggle-btn');
        toggleBtn.innerHTML = '&#9776;';
        document.querySelector('header').appendChild(toggleBtn);
    }

    const navMenu = document.querySelector('nav ul');

    toggleBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Modal for Cards
    const cards = document.querySelectorAll('.card, .card-cuisine');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    const closeButton = document.createElement('button');
    closeButton.classList.add('modal-close');
    closeButton.innerHTML = '&times;';
    modalContent.appendChild(closeButton);

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const label = card.querySelector('h3').innerText;
            let contentText = '';

            // Add specific content for each label
            switch (label) {
                case 'Popular Cities':
                    contentText =`
                    <ul>
                        <li>Tokyo – The capital city, known for its blend of modern skyscrapers, historic temples, cutting-edge technology, and diverse cultural districts like Shibuya and Akihabara.</li>
                        <li>Kyoto – Famous for its well-preserved ancient temples, traditional tea houses, geisha culture, and scenic spots such as the Arashiyama bamboo grove and Fushimi Inari Shrine.</li>
                        <li>Osaka – A lively city known for its street food, shopping, and vibrant nightlife. It's also home to the iconic Osaka Castle and Universal Studios Japan.</li>
                        <li>Hokkaido (Sapporo) – Famous for its beautiful natural scenery, ski resorts, hot springs, and the Sapporo Snow Festival.</li>
                        <li>Hiroshima – Known for its historical significance, particularly the Peace Memorial Park and Museum dedicated to the atomic bombing, as well as the nearby Miyajima Island and Itsukushima Shrine.</li>
                    </ul>`;
                    break;
                case 'Famous Landmarks':
                    contentText = `
                    <ul>
                        <li>Mount Fuji – Japan’s tallest mountain and an iconic symbol, popular for hiking and breathtaking views, especially during cherry blossom season.</li>
                        <li>Fushimi Inari Shrine (Kyoto) – Known for its thousands of vibrant red torii gates that form a scenic pathway up the mountain, dedicated to the Shinto god of rice.</li>
                        <li>Tokyo Tower – A communications and observation tower resembling the Eiffel Tower, offering panoramic views of Tokyo’s skyline.</li>
                        <li>Himeji Castle – Japan’s most famous and best-preserved castle, known for its striking white exterior and impressive traditional Japanese architecture.</li>
                        <li>Arashiyama Bamboo Grove (Kyoto) – A serene and atmospheric path surrounded by towering bamboo stalks, a popular spot for tranquil walks and photography.</li>
                    </ul>`;
                    break;
                case 'Beautiful Nature':
                    contentText = `
                    <ul>
                        <li>Arashiyama Bamboo Grove (Kyoto) – A stunning bamboo forest with tall, swaying bamboo stalks creating a peaceful and picturesque environment.</li>
                        <li>Oirase Gorge (Aomori) – A scenic river valley known for its waterfalls, crystal-clear streams, and vibrant autumn foliage, ideal for hiking.</li>
                        <li>Aso Volcano (Kumamoto) – One of the largest active volcanoes in the world, offering dramatic landscapes and hiking trails with views of its vast caldera.</li>
                        <li>Lake Kawaguchi (near Mount Fuji) – One of the Fuji Five Lakes, offering stunning reflections of Mount Fuji, especially during cherry blossom and autumn foliage seasons.</li>
                        <li>Shirakami-Sanchi (Honshu) – A UNESCO World Heritage site, home to ancient beech forests, mountain hiking trails, and pristine natural scenery.</li>
                    </ul>`;
                    break;
                case 'Popular Restaurants':
                    contentText = `
                    <ul>
                        <li>Sukiyabashi Jiro (Tokyo) – A world-renowned sushi restaurant run by chef Jiro Ono, famous for its meticulously crafted sushi and earning three Michelin stars.</li>
                        <li>Ichiran Ramen (multiple locations) – A popular ramen chain known for its tonkotsu (pork broth) ramen, offering a unique solo dining experience where customers can focus on the flavors.</li>
                        <li>Narisawa (Tokyo) – A Michelin-starred restaurant blending Japanese and French cuisine, celebrated for its focus on sustainable, seasonal ingredients and beautifully crafted dishes.</li>
                        <li>Kaiseki Kichisen (Kyoto) – Known for traditional kaiseki dining, a multi-course Japanese meal that showcases seasonal ingredients, artistry, and Kyoto's culinary heritage.</li>
                        <li>Ippudo (multiple locations) – A famous ramen chain serving rich tonkotsu ramen, with branches across Japan and internationally, loved for its flavorful broth and tender noodles.</li>
                    </ul>`
                    break;
                case 'Famous Dishes':
                    contentText = `
                    <ul>
                        <li>Sushi – Vinegared rice paired with raw or cooked seafood, vegetables, or other ingredients. Common types include nigiri, sashimi, and maki (rolls).</li>
                        <li>Ramen – A noodle soup dish with various broth bases (like soy, miso, or pork-based tonkotsu) and toppings such as sliced pork, soft-boiled eggs, and green onions.</li>
                        <li>Tempura – Battered and deep-fried seafood or vegetables, often served with dipping sauce, rice, or noodles.</li>
                        <li>Okonomiyaki – A savory pancake made from batter and cabbage, with additional ingredients like pork, seafood, or cheese, topped with a sweet sauce and mayonnaise.</li>
                        <li>Takoyaki – Ball-shaped snacks made of batter filled with diced octopus, tempura scraps, and green onions, often topped with bonito flakes and a savory sauce.</li>
                    </ul>`        
                    break;
                case 'Transportation':
                    contentText = `
                    <ul>
                        <li>Get a Japan Rail Pass (JR Pass) – If you're planning to travel between cities, a JR Pass is a cost-effective option for unlimited rides on JR trains, including the Shinkansen (bullet trains), for a set period of time.</li>
                        <li>Use Suica or Pasmo cards – These rechargeable smart cards can be used on most trains, buses, and even at some convenience stores. They’re a convenient way to avoid buying individual tickets each time you travel.</li>
                        <li>Shinkansen for long-distance travel – The Shinkansen (bullet train) is the fastest way to travel between major cities like Tokyo, Kyoto, and Osaka, known for its punctuality and comfort.</li>
                        <li>City buses and subways – Major cities like Tokyo, Kyoto, and Osaka have extensive and reliable subway and bus networks. Google Maps or local apps like Hyperdia can help with routes and schedules.</li>
                        <li>Bicycle rentals – Many cities offer bike rentals, a fun and efficient way to explore neighborhoods and scenic areas like Kyoto’s temples or the city of Nara.</li>
                    </ul>`        
                    break;
                case 'Budgeting':
                    contentText = `
                    <ul>
                        <li>Use Convenience Stores (Konbini) – Convenience stores like 7-Eleven, Lawson, and FamilyMart offer inexpensive, high-quality meals and snacks, which can save you money on dining out.</li>
                        <li>Eat at Local Izakayas and Ramen Shops – Izakayas (Japanese pubs) and small ramen shops are often affordable, offering delicious meals for much less than high-end restaurants.</li>
                        <li>Take Advantage of Free Attractions – Many beautiful shrines, temples, and parks in Japan are free to visit, especially in Kyoto and Tokyo. Exploring neighborhoods like Harajuku, Shibuya, and Asakusa costs nothing and is full of culture.</li>
                        <li>Use Discount Passes for Tourist Attractions – Many cities offer tourist passes that provide discounts on attractions and transportation. Examples include the Tokyo Metro 24-hour pass or Kyoto’s bus pass.</li>
                        <li>Shop at 100 Yen Stores – These stores (like Daiso) offer a wide range of items, from snacks and souvenirs to household goods, all at budget-friendly prices.</li>
                    </ul>`       
                    break;
                 case 'Etiquette':
                    contentText = `
                    <ul>
                        <li>Bowing – Bowing is a common way to greet, show respect, or thank someone. A slight bow is sufficient for most casual interactions, but deeper bows are used in formal situations.</li>
                        <li>Shoes Off Indoors – In many traditional homes, ryokan (Japanese inns), temples, and some restaurants, it's customary to remove your shoes before entering. You’ll usually be provided with indoor slippers.</li>
                        <li>Quiet in Public – Japan values a calm and peaceful environment in public spaces. Speak softly on trains and avoid making phone calls while riding public transportation.</li>
                        <li>Tipping is Uncommon – Tipping is not a part of Japanese culture, and in some cases, it can be considered rude. Excellent service is already expected.</li>
                        <li>Respect for Temples and Shrines – When visiting temples and shrines, follow the correct protocol, such as washing your hands at the purification fountain, bowing at the entrance, and being respectful in sacred areas.</li>
                    </ul>`       
                    break;
                default:
                    contentText = `Information about ${label} goes here.`;
            }

            modalContent.innerHTML = `<button class='modal-close'>&times;</button><h2>${label}</h2><p>${contentText}</p>`;
            modal.style.display = 'flex';

            // Add event listener to the new close button
            modalContent.querySelector('.modal-close').addEventListener('click', function() {
                modal.style.display = 'none';
            });
        });
    });
    // Modal for Recipe Book
    const recipes = document.querySelectorAll('.recipe-book ul li');

    recipes.forEach(recipe => {
        recipe.addEventListener('click', function(event) {
            event.preventDefault();
            const recipeLabel = recipe.innerText;
            let recipeContent = '';

            // Add specific content for each recipe
            switch (recipeLabel) {
                case 'Sushi Rolls - Learn how to make traditional sushi at home.':
                    recipeContent = `
                        <h3>Sushi Rolls</h3>
                        <p><strong>Ingredients:</strong></p>
                        <ul>
                            <li>2 cups sushi rice</li>
                            <li>3 cups water</li>
                            <li>1/2 cup rice vinegar</li>
                            <li>4 sheets nori (seaweed)</li>
                            <li>Fresh fish (e.g., salmon or tuna)</li>
                            <li>Vegetables (e.g., cucumber, avocado)</li>
                            <li>Soy sauce for dipping</li>
                        </ul>
                        <p><strong>Instructions:</strong></p>
                        <ol>
                            <li>Rinse the sushi rice under cold water until the water runs clear.</li>
                            <li>Cook the rice with water according to the package instructions.</li>
                            <li>Once cooked, mix the rice with rice vinegar.</li>
                            <li>Place a nori sheet on a bamboo mat, spread a thin layer of rice on top.</li>
                            <li>Add fish and vegetables in a line along the edge of the nori.</li>
                            <li>Roll tightly using the bamboo mat, then slice into bite-sized pieces.</li>
                            <li>Serve with soy sauce for dipping.</li>
                        </ol>`;
                    break;
            
                case 'Ramen - Try this hearty and flavorful Japanese noodle soup.':
                    recipeContent = `
                        <h3>Ramen</h3>
                        <p><strong>Ingredients:</strong></p>
                        <ul>
                            <li>200g ramen noodles</li>
                            <li>4 cups chicken broth</li>
                            <li>2 tablespoons soy sauce</li>
                            <li>1 tablespoon miso paste</li>
                            <li>2 garlic cloves, minced</li>
                            <li>1 teaspoon grated ginger</li>
                            <li>Soft-boiled eggs</li>
                            <li>Green onions, sliced</li>
                            <li>Cooked pork slices (optional)</li>
                        </ul>
                        <p><strong>Instructions:</strong></p>
                        <ol>
                            <li>Cook ramen noodles according to the package instructions, then drain.</li>
                            <li>In a pot, combine chicken broth, soy sauce, miso paste, garlic, and ginger. Bring to a simmer.</li>
                            <li>Add the cooked noodles to the broth.</li>
                            <li>Serve hot with soft-boiled eggs, green onions, and pork slices on top.</li>
                        </ol>`;
                    break;
            
                case 'Tempura - Light and crispy battered vegetables and seafood.':
                    recipeContent = `
                        <h3>Tempura</h3>
                        <p><strong>Ingredients:</strong></p>
                        <ul>
                            <li>10 shrimp, peeled and deveined</li>
                            <li>Assorted vegetables (e.g., sweet potato, bell pepper, zucchini)</li>
                            <li>1 cup all-purpose flour</li>
                            <li>1 cup ice-cold water</li>
                            <li>1 egg</li>
                            <li>Oil for deep frying</li>
                            <li>Tentsuyu dipping sauce</li>
                        </ul>
                        <p><strong>Instructions:</strong></p>
                        <ol>
                            <li>Heat oil in a deep pan to 350°F (175°C).</li>
                            <li>In a bowl, mix the flour, ice-cold water, and egg to make the batter. Do not overmix; it should be slightly lumpy.</li>
                            <li>Dip shrimp and vegetables into the batter, then carefully place into the hot oil.</li>
                            <li>Fry until golden and crispy, then drain on a paper towel.</li>
                            <li>Serve with tentsuyu dipping sauce.</li>
                        </ol>`;
                    break;
            
                case 'Miso Soup - A simple and comforting staple in Japanese cuisine.':
                    recipeContent = `
                        <h3>Miso Soup</h3>
                        <p><strong>Ingredients:</strong></p>
                        <ul>
                            <li>4 cups dashi stock</li>
                            <li>3 tablespoons miso paste</li>
                            <li>1/2 cup tofu, cubed</li>
                            <li>2 green onions, sliced</li>
                            <li>1 sheet wakame seaweed, rehydrated</li>
                        </ul>
                        <p><strong>Instructions:</strong></p>
                        <ol>
                            <li>Heat the dashi stock in a pot over medium heat.</li>
                            <li>Add tofu and wakame to the pot.</li>
                            <li>In a small bowl, mix a ladle of hot dashi stock with the miso paste until smooth.</li>
                            <li>Add the miso mixture back to the pot and stir well. Do not boil the soup after adding miso.</li>
                            <li>Serve hot, garnished with green onions.</li>
                        </ol>`;
                    break;
            
                case 'Okonomiyaki - A savory Japanese pancake with various toppings.':
                    recipeContent = `
                        <h3>Okonomiyaki</h3>
                        <p><strong>Ingredients:</strong></p>
                        <ul>
                            <li>1 cup all-purpose flour</li>
                            <li>1/2 cup dashi stock or water</li>
                            <li>2 eggs</li>
                            <li>2 cups shredded cabbage</li>
                            <li>100g pork belly slices</li>
                            <li>Okonomiyaki sauce</li>
                            <li>Mayonnaise</li>
                            <li>Bonito flakes (optional)</li>
                            <li>Chopped green onions (optional)</li>
                        </ul>
                        <p><strong>Instructions:</strong></p>
                        <ol>
                            <li>In a large bowl, mix flour, dashi stock, and eggs to form a batter.</li>
                            <li>Add shredded cabbage and mix until well coated.</li>
                            <li>Heat a skillet over medium heat and add a little oil.</li>
                            <li>Pour the batter into the skillet, shaping it into a round pancake. Place pork belly slices on top.</li>
                            <li>Cook for 5-6 minutes on each side, or until golden brown and cooked through.</li>
                            <li>Serve with okonomiyaki sauce, mayonnaise, bonito flakes, and green onions on top.</li>
                        </ol>`;
                    break;
            
                default:
                    recipeContent = `<h3>${recipeLabel}</h3><p>Recipe instructions will be added here.</p>`;
            }
            

            modalContent.innerHTML = `<button class='modal-close'>&times;</button>${recipeContent}`;
            modal.style.display = 'flex';

            // Add event listener to the new close button
            modalContent.querySelector('.modal-close').addEventListener('click', function() {
                modal.style.display = 'none';
            });
        });
    });
    console.log("Script.js is running.");

// Fetch JSON data
fetch('japanese_recipes.json')
        .then(response => {
            console.log("Fetch response received:", response);

            if (!response.ok) {
                throw new Error("Network response was not ok: " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data fetched successfully:", data);
            const recipeContainer = document.getElementById('recipe-container');

            // Loop through each recipe in the data
            data.forEach(recipe => {
                console.log("Processing recipe:", recipe);

                // Create a card element for each recipe
                const recipeCard = document.createElement('div');
                recipeCard.classList.add('recipe-card');

                // Add recipe image
                const recipeImage = document.createElement('img');
                recipeImage.src = recipe.img_name;
                recipeImage.alt = recipe.name;
                recipeCard.appendChild(recipeImage);

                // Add recipe title
                const recipeTitle = document.createElement('h3');
                recipeTitle.innerText = recipe.name;
                recipeCard.appendChild(recipeTitle);

                // Add recipe description
                const recipeDescription = document.createElement('p');
                recipeDescription.innerText = recipe.description;
                recipeCard.appendChild(recipeDescription);

                // Add prep time, cooking time, and servings
                const recipeDetails = document.createElement('p');
                recipeDetails.innerHTML = `
                    <strong>Prep Time:</strong> ${recipe.prep_time}<br>
                    <strong>Cooking Time:</strong> ${recipe.cooking_time}<br>
                    <strong>Servings:</strong> ${recipe.servings}
                `;
                recipeCard.appendChild(recipeDetails);

                // Add ingredients list
                const ingredientsTitle = document.createElement('p');
                ingredientsTitle.innerText = "Ingredients:";
                ingredientsTitle.style.fontWeight = "bold";
                recipeCard.appendChild(ingredientsTitle);

                const ingredientsList = document.createElement('ul');
                recipe.ingredients.forEach(ingredient => {
                    const ingredientItem = document.createElement('li');
                    ingredientItem.innerText = ingredient;
                    ingredientsList.appendChild(ingredientItem);
                });
                recipeCard.appendChild(ingredientsList);

                // Append the card to the recipe container
                recipeContainer.appendChild(recipeCard);
            });
        })
        .catch(error => console.error('Error fetching the recipes:', error));
});