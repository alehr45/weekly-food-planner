var recipeSearchEl = document.querySelector("#recipe");
var momentEl = moment().format('MMMM Do YYYY, h:mm:ss a');
var submitEl = document.querySelector(".submit");
var today = document.querySelector("#currentDay");
today.innerHTML = (momentEl);


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

 function showDates(){
    document.getElementById('time1').innerHTML = "Today"
    document.getElementById('time2').innerHTML = "Tomorrow"
    document.getElementById('time3').innerHTML = moment().add(2, 'days').format('dddd');
    document.getElementById('time4').innerHTML = moment().add(3, 'days').format('dddd');
    document.getElementById('time5').innerHTML = moment().add(4, 'days').format('dddd');
    document.getElementById('time6').innerHTML = moment().add(5, 'days').format('dddd');
    document.getElementById('time7').innerHTML = moment().add(6, 'days').format('dddd');

  }
  
  function showRecipes(data) {
    var searchUrl1 =  data.results[0].sourceUrl;
    var searchUrl2 =  data.results[1].sourceUrl;
    var searchUrl3 =  data.results[2].sourceUrl;
    var searchUrl4 =  data.results[3].sourceUrl;
    var searchUrl5 =  data.results[4].sourceUrl;
    document.getElementById('recipe1').innerHTML = '<a href="' + searchUrl1 + '"target="_blank">' + data.results[0].title + " - Ready in " + data.results[0].readyInMinutes + " mins" + '</a>';
    document.getElementById('recipe2').innerHTML = '<a href="' + searchUrl2 + '"target="_blank">' + data.results[1].title + " - Ready in " + data.results[1].readyInMinutes + " mins" + '</a>';
    document.getElementById('recipe3').innerHTML = '<a href="' + searchUrl3 + '"target="_blank">' + data.results[2].title + " - Ready in " + data.results[2].readyInMinutes + " mins" + '</a>';
    document.getElementById('recipe4').innerHTML = '<a href="' + searchUrl4 + '"target="_blank">' + data.results[3].title + " - Ready in " + data.results[3].readyInMinutes + " mins" + '</a>';
    document.getElementById('recipe5').innerHTML = '<a href="' + searchUrl5 + '"target="_blank">' + data.results[4].title + " - Ready in " + data.results[4].readyInMinutes + " mins" + '</a>';
    document.getElementById('recipe1').setAttribute("data-recipe", "1");
    document.getElementById('recipe2').setAttribute("data-recipe", "2");
    document.getElementById('recipe3').setAttribute("data-recipe", "3");
    document.getElementById('recipe4').setAttribute("data-recipe", "4");
    document.getElementById('recipe5').setAttribute("data-recipe", "5");
};

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.preventDefault();
  event.dataTransfer.setData("recipe1", event.target.id);
 
}

function drop1 (event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("recipe1" , event.target.id);
  event.target.appendChild(document.getElementById("recipe1"));
  
}

function drop2(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("recipe2" , event.target.id);
  event.target.appendChild(document.getElementById("recipe2"));
}

function drop3(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("recipe1" , event.target.id);
  event.target.appendChild(document.getElementById("recipe1"));
}

function drop4(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("recipe1" , event.target.id);
  event.target.appendChild(document.getElementById("recipe1"));
}

function drop5(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("recipe1" , event.target.id);
  event.target.appendChild(document.getElementById("recipe1"));
}

function drop6(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("recipe1" , event.target.id);
  event.target.appendChild(document.getElementById("recipe1"));
}

function drop7(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("recipe1" , event.target.id);
  event.target.appendChild(document.getElementById("recipe1"));
}


showDates();
submitEl.addEventListener("click", formSumbitHandler);  

  
