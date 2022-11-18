// DOM caching 

const card = document.querySelector('.card');
const header = document.querySelector('header');
const text = document.querySelector('.text');
const ratingArea = document.querySelector('.rating-area');

const ratings = document.querySelectorAll('.rating');

// Declaring variables

let chosenRating;

// Functions

const chooseRating = function(e) {
    ratings.forEach(rating => rating.classList.remove('active'));
    
    e.target.classList.add('active');

    chosenRating = e.target.innerText;
    console.log(chosenRating);

}

// Assigning eventlisteners

ratings.forEach(rating => rating.addEventListener('click', chooseRating));