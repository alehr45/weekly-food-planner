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
    document.getElementById('recipe1').innerHTML = data.results[0].title.fontcolor("#9b96ff");
    document.getElementById('recipe2').innerHTML = data.results[1].title.fontcolor("#9b96ff");
    document.getElementById('recipe3').innerHTML = data.results[2].title.fontcolor("#9b96ff");
    document.getElementById('recipe4').innerHTML = data.results[3].title.fontcolor("#9b96ff");
    document.getElementById('recipe5').innerHTML = data.results[4].title.fontcolor("#9b96ff");
};

$(function() {
  $(".card").draggable( {
    helper: "clone",
    cursor: "move", cursorAt: { top: 60, left: 40 }
  });
  
})

submitEl.addEventListener("click", formSumbitHandler);

