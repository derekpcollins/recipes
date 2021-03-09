const recipesList = document.getElementById('recipes-list');

// Loop over the recipes array
// See data/recipes.js
recipes.forEach((recipe, index) => {
	const recipeName = recipe.title;
	let recipeListItem = document.createElement('li');
	
	let recipeListLink = document.createElement('a');
	recipeListLink.href = "recipe.html?id=" + index;
	
	let recipeListImg = document.createElement('img'); 
	let imageName = (recipeName).split(' ').join('-');
	recipeListImg.src = 'assets/img/' + imageName + '.jpg';
	recipeListLink.appendChild(recipeListImg);
	
	let recipeListTitle = document.createElement('span');
	recipeListTitle.innerText = recipeName;
	recipeListLink.appendChild(recipeListTitle);
	
	recipeListItem.appendChild(recipeListLink);
	recipesList.appendChild(recipeListItem);
});