const stars = document.querySelectorAll(".stars a");
const starWrapper = document.querySelector(".stars");
const form = document.querySelector(".drink-form");
var starIndex;

function handleFormSubmit(event) {
    event.preventDefault();
    var userId = document.querySelector("#userInput").value;
    var cocktailId = document.querySelector("#drinkInput").value;
    var starIndex = getStar();
    console.log(`user: ${userId} cocktail: ${cocktailId} rating: ${starIndex}`);


    postRating(userId, cocktailId, starIndex);

}

form.addEventListener("submit", handleFormSubmit);

stars.forEach((star, i) => {
    star.addEventListener("click", () => {
        star.classList.add("disabled");
        stars.forEach((s, index) => {
            if(index <= i) {
                s.classList.add("active");
            }
        })
        rating = i + 1;
        console.log(`Star ${rating} clicked`);
        setStar(rating);
    })
});

function setStar(i) {
    return starIndex = i;
}

function getStar() {
    return starIndex;
}

function postRating(userId, cocktailId, rating) {
    console.log(userId, cocktailId, rating);
    const newRating = {
        "userId": userId,
        "cocktailId": cocktailId,
        "rating": rating
    }
    const upload = JSON.stringify(newRating);
    postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: upload
    }
    fetch("http://localhost:3001/api/ratings", postOptions)
    .then(() => {
        console.log("Thank you for submitting your rating!");
    });
}