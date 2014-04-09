var recipes = [{
  name: "Sam's Ragu",
  yields: "8 servings",
  author: "S Lindley",
  published: "04/08/2014",
  instructions: ["Dice 1 cup of yellow onions", "Dice 1.5 cups of carrots"],
  ingredients: [{name: "salt", ammount: "1 tsb"}],
  comments: "This is my first recipe"
}];

var recipe = recipes[0];

for (var property in recipe) {
  
  var propertyValue = recipe[property]; 
  
  if((property === "instructions") || (property === "ingredients"))
  {
    if(property === "ingredients")
    {
      // Value is an array of objects
      
      var objIngredients = propertyValue[0];
      for (var item in objIngredients) {
        console.log(objIngredients[item]);
      }
    }else{
      // Value is an array
      
      var arrInstructions = propertyValue; 
      for(var i=0;i<arrInstructions.length;i++)
      {
        console.log(arrInstructions[i]); 
      }
    }
  }else{
    console.log(propertyValue);
  }
}

// console.log(recipes[0].name);





