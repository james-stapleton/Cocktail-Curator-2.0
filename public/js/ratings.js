const stars = document.querySelectorAll(".stars a");
const starWrapper = document.querySelector(".stars");

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
        postRating(rating);
    })
});

function postRating(rating) {
    console.log(rating);
    const newRating = {
        "userId": 1,
        "cocktailId": 12,
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