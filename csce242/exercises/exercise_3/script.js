async function getRandomCocktail() {
    try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response.json();
        const cocktail = data.drinks[0];

        document.getElementById('cocktail-card').style.display = 'block';
        document.getElementById('cocktail-name').innerText = cocktail.strDrink;
        document.getElementById('cocktail-image').src = cocktail.strDrinkThumb;
        document.getElementById('cocktail-image').alt = cocktail.strDrink;
        document.getElementById('cocktail-instructions').innerText = cocktail.strInstructions;

        const ingredientsList = document.getElementById('cocktail-ingredients');
        ingredientsList.innerHTML = '';
        for (let i = 1; i <= 15; i++) {
            const ingredient = cocktail[`strIngredient${i}`];
            const measure = cocktail[`strMeasure${i}`];
            if (ingredient) {
                const li = document.createElement('li');
                li.innerText = `${measure ? measure : ''} ${ingredient}`;
                ingredientsList.appendChild(li);
            }
        }
    } catch (error) {
        console.error('Error fetching the cocktail:', error);
    }
}