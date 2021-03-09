let urlParams = new URLSearchParams(window.location.search);
let recipeId = urlParams.get('id');

const createIngredientsList = ingredients => {
	let listEl = document.getElementById('ingredients-list');
	
	for(const ingredient of ingredients) {
		let listItemEl = document.createElement('li');
		
		let titleEl = document.createElement('span');
		titleEl.classList.add('ingredient-title');
		titleEl.innerText = ingredient.item;
		listItemEl.appendChild(titleEl);
			
		if(ingredient.amount) {
			let amountEl = document.createElement('span');
			amountEl.classList.add('ingredient-amount');
			amountEl.innerText = ingredient.amount;
			listItemEl.appendChild(amountEl);
		}
		
		if(ingredient.measurement) {
			let measurementEl = document.createElement('span');
			measurementEl.classList.add('ingredient-measurement');
			measurementEl.innerText = ingredient.measurement;
			listItemEl.appendChild(measurementEl);
		}
		
		listEl.appendChild(listItemEl);
	}
}

const createDirectionsList = directions => {
	let listEl = document.getElementById('directions-list');
	
	for(const direction of directions) {
		let listItemEl = document.createElement('li');
		listItemEl.innerText = direction;
		listEl.appendChild(listItemEl);
	}
}

if(recipeId) {
	const recipe = recipes[recipeId];
	
	// Set the title
	document.title = recipe['title'];
	let titleEl = document.getElementById('recipe-title');
	titleEl.innerText = recipe['title'];
	
	// Set the description
	let descEl = document.getElementById('recipe-description');
	descEl.innerHTML = recipe['description'];
	
	// Create the ingredients list
	createIngredientsList(recipe['ingredients']);
	
	// Create the directions list
	createDirectionsList(recipe['directions']);
}