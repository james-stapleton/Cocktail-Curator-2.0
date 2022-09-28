var drinkList = document.querySelector("#drinks");

fetch("http://localhost:3001/api/cocktails")
  .then(function (response) {
    return response.json();
  })
  .then((response) => {
    console.log(response);
    for (let i = 0; i < response.length; i++) {
      const drinkName = response[i].name;
      const drinkIngredients = response[i].ingredients;
      const drinkInstructions = response[i].instructions;
      const drinkImage = response[i].image;
      const drinkViews = response[i].views;
      const drinkRating = response[i].rating;
      var drinkEl = document.createElement("li");
      const drinkString = `${drinkName} <br> ${drinkIngredients} <br>Views: ${drinkViews} <br> Rating: ${drinkRating}`;

      drinkEl.textContent = drinkString;
      drinkEl.innerHTML = drinkString;
      console.log(drinkString);
      console.log(drinkEl);
      drinkList.appendChild(drinkEl);
    }
  });

  function getSavedDrinks(userID) {
    fetch(`http://localhost:3001/api/users${userID}`)
    .then((response) => {
       return response.json();
    })
    .then((data) => {
        console.log(`Fetch successful for user ${userID}!`)
        console.log(data);
    });
  }
  