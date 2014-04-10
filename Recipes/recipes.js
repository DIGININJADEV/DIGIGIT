var recipes = [{
  name: "Sam's Ragu",
  yields: "8 servings",
  author: "S Lindley",
  published: "04/08/2014",
  instructions: ["Dice 1 cup of yellow onions", "Dice 1.5 cups of carrots"],
  ingredients: [{name: "salt", ammount: "1 tsb"}, {name: "thyme", ammount: "1 tsb"}, {name: "basil", ammount: "1.5 tsb"}],
  comments: "This is my first recipe"
}];

recipes.push({
  name: "Sam's Pizza",
  yields: "2 servings",
  author: "S Lindley",
  published: "04/09/2014",
  instructions: ["Grate 1 cup of 4 cheese", "Slice tomoates"],
  ingredients: [{name: "tomates", ammount: "1 cup"}, {name: "thyme", ammount: "1 tsb"}, {name: "basil", ammount: "1.5 tsb"}],
  comments: "This is my second recipe"
});

getRecipes(recipes);

function getRecipes(recipes)
{
	for(var i=0;i<recipes.length;i++)
	{
		console.log(recipes[i].name); 
	}
}

function getRecipe(recipe)
{

	var recipe = recipe/*s[0]*/;
	
	for (var property in recipe) {
		
		var propertyValue = recipe[property]; 
		
		if((property === "instructions") || (property === "ingredients"))
		{
			if(property === "ingredients")
			{
				// Passed value is an array of objects
			
				var arrIngredients = propertyValue; 
				for(var i=0;i<arrIngredients.length;i++)
				{
					var objIngredients = arrIngredients[i];
					console.log(objIngredients.ammount + ' of ' + objIngredients.name);
				}
				
			}else{
				// Passed value is an array
					
				var arrInstructions = propertyValue; 
				for(var i=0;i<arrInstructions.length;i++)
				{
					console.log('-- ' + arrInstructions[i]); 
				}
			}
		}else{
			console.log(propertyValue);
		}
	}
}



