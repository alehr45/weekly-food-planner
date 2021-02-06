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
    document.getElementById('recipe1').innerHTML = '<a draggable="false" href="' + searchUrl1 + '"target="_blank">' + data.results[0].title + " - Ready in " + data.results[0].readyInMinutes + " mins" + '</a></h1>';
    document.getElementById('recipe2').innerHTML = '<a draggable="false" href="' + searchUrl2 + '"target="_blank">' + data.results[1].title + " - Ready in " + data.results[1].readyInMinutes + " mins" + '</a>';
    document.getElementById('recipe3').innerHTML = '<a draggable="false" href="' + searchUrl3 + '"target="_blank">' + data.results[2].title + " - Ready in " + data.results[2].readyInMinutes + " mins" + '</a>';
    document.getElementById('recipe4').innerHTML = '<a draggable="false" href="' + searchUrl4 + '"target="_blank">' + data.results[3].title + " - Ready in " + data.results[3].readyInMinutes + " mins" + '</a>';
    document.getElementById('recipe5').innerHTML = '<a draggable="false" href="' + searchUrl5 + '"target="_blank">' + data.results[4].title + " - Ready in " + data.results[4].readyInMinutes + " mins" + '</a>';
};

function onDragOver(event) {
  event.preventDefault();
}

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  console.log("event is", event)
}

function onDrop(event) {
  var id = event.dataTransfer.getData('text');
  var draggableElement = document.getElementById(id);
  var dropzone = event.target;
  dropzone.appendChild(draggableElement);
  console.log
}

showDates();
submitEl.addEventListener("click", formSumbitHandler);  

  
