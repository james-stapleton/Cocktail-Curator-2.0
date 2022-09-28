var uploadForm = document.querySelector('#upload');

function uploadFormHandler(event) {
    event.preventDefault();
    var drinkName = document.querySelector('#drinkInput').value;
    var drinkIngredients = document.querySelector('#ingredientInput').value;
    var drinkInstructions = document.querySelector('#instructionInput').value;
    const newDrink = {
        "name": drinkName,
        "ingredients": drinkIngredients,
        "instructions": drinkInstructions,
        "image": "placeholder.jpg"
    }

    createNewDrink(newDrink);
}

uploadForm.addEventListener('submit', uploadFormHandler);

function createNewDrink(newDrink) {

//This is the user object we are adding to the database. 
//This model is fairly simple, but it could contain as many attributes as you would like.

const upload = JSON.stringify(newDrink);
console.log(`body of request: ${upload}`);
//options for our post route
const postOptions = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    body: upload
};

console.log(postOptions);

    fetch("http://localhost:3001/api/cocktails", postOptions)
    .then(() => {
        console.log("Thank you for submitting a new cocktail to our database!");
    })
}