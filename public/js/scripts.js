var drinkList = document.querySelector("#drinks");

fetch(
    "http://localhost:3001/api/cocktails"
  )
    .then(function (response) {
      return response.json();
    })
    .then((response) => {
        console.log(response);
        const drinkName = response[0].name;
        const drinkIngredients = response[0].ingredients;
        const drinkInstructions = response[0].instructions;
        const drinkImage = response[0].image;
        const drinkViews = response[0].views;
        const drinkRating = response[0].rating;
        var drinkEl = document.createElement("li");
        const drinkString = `${drinkName} <br> ${drinkIngredients} <br>Views: ${drinkViews} <br> Rating: ${drinkRating}`;

        drinkEl.textContent = drinkString;
        drinkEl.innerHTML = drinkString;
        console.log(drinkString);
        console.log(drinkEl);
        drinkList.appendChild(drinkEl);
    } )