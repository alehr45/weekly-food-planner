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
            console.log(data);
          });
        }
      });
  
  };
  
  

  submitEl.addEventListener("click", formSumbitHandler);