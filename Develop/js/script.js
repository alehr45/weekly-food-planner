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
  var searchUrl1 =  data.results[0].sourceUrl;
  var searchUrl2 =  data.results[1].sourceUrl;
  var searchUrl3 =  data.results[2].sourceUrl;
  var searchUrl4 =  data.results[3].sourceUrl;
  var searchUrl5 =  data.results[4].sourceUrl;
  document.getElementById('recipe1').innerHTML = '<a href="' + searchUrl1 + '"target="_blank">' + data.results[0].title + " - Ready in " + data.results[0].readyInMinutes + " minutes" + '</a>';
  document.getElementById('recipe2').innerHTML = '<a href="' + searchUrl2 + '"target="_blank">' + data.results[1].title + " - Ready in " + data.results[1].readyInMinutes + " minutes" + '</a>';
  document.getElementById('recipe3').innerHTML = '<a href="' + searchUrl3 + '"target="_blank">' + data.results[2].title + " - Ready in " + data.results[2].readyInMinutes + " minutes" + '</a>';
  document.getElementById('recipe4').innerHTML = '<a href="' + searchUrl4 + '"target="_blank">' + data.results[3].title + " - Ready in " + data.results[3].readyInMinutes + " minutes" + '</a>';
  document.getElementById('recipe5').innerHTML = '<a href="' + searchUrl5 + '"target="_blank">' + data.results[4].title + " - Ready in " + data.results[4].readyInMinutes + " minutes" + '</a>';
};


$(function() {
  $(".content").draggable( {
    appendTo: "body",
    helper: "clone"
  });
});

let weekDay = moment()
weekDay.subtract(weekDay.day()+1,"days")
document.querySelectorAll(".box p").forEach(function(title) {
  
  //thisDay.add(-1,"days").format("ddd, MMM Do YY");
  title.innerText = weekDay.add(1,"days").format("ddd, MMM Do YY");
});

submitEl.addEventListener("click", formSumbitHandler);

