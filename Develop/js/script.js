var recipeSearchEl = document.querySelector("#recipe");
var submitEl = document.querySelector(".submit");


var formSumbitHandler = function (event) {
  event.preventDefault();
  if (recipe) {
    pullData(recipe)
   recipeSearchEl.value = "";
  } else {
    alert("Please enter a valid food item");
  }
 };

pullData = function (data) {
  var recipe = recipeSearchEl.value.trim();
    var apiKey = "fe4da658d0714157949fb5895d6363fb";
    var apiUrl = "https://api.spoonacular.com/recipes/search?query=" + recipe + "&apiKey=" + apiKey;
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            showRecipes(data);
          });
        }
      });
  
  };
  
  function showRecipes(data) {
    document.getElementById('recipe1').innerHTML = data.results[0].title;
    document.getElementById('recipe2').innerHTML = data.results[1].title;
    document.getElementById('recipe3').innerHTML = data.results[2].title;
    document.getElementById('recipe4').innerHTML = data.results[3].title;
    document.getElementById('recipe5').innerHTML = data.results[4].title;

  };
  

  submitEl.addEventListener("click", formSumbitHandler);