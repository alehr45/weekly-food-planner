pullData = function (data) {
    var apiKey = "fe4da658d0714157949fb5895d6363fb";
    var apiUrl = "https://api.spoonacular.com/recipes/search?query=steak&apiKey=" + apiKey;
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
          });
        }
      });
  
  };
  pullData();
  